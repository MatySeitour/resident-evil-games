"use client";

import { useEffect, useRef, useState } from "react";
import getGames from "../../utils/games.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import Image from "next/image";
import CharactersSelect from "./CharactersSelect";
import InfoCharacter from "./InfoCharacter";

interface Props {
  id: number;
  title: string;
  description: string;
  characters: {
    id: number;
    name: string;
    image_select: string;
    image_complete: string;
    description: string;
  }[];
  other_games?: {}[];
}

interface CharacterSelected {
  id: number;
  image_complete: string;
  image_select: string;
  name: string;
}

export default function SectionGame({
  id,
  title,
  description,
  characters,
}: Props) {
  useEffect(() => {
    const sectionGames = document.querySelectorAll(".section-game");

    /* Animate function */
    const handleIntersection = (entries: {}[]) => {
      entries.map((entry: any) => {
        const title = entry.target.querySelector("h2");
        const background = entry.target.querySelector("div");
        /* getting the item class number */
        const backgroundNumber = Number(entry.target.className.split("row")[1]);

        /* GSAP timeline */
        const tl = gsap.timeline({
          repeat: 0,
        });

        if (entry.isIntersecting) {
          /* separate text into words and letters */
          const descriptionGame = new SplitType(
            entry.target.querySelector("#description-game")
          );

          const description = entry.target.querySelector("#description-game");

          /* remove opacity in description */
          description.style.opacity = 1;

          /* select all the characters of the article */
          const descriptionChar = entry.target.querySelectorAll(".char");

          const imageCharacter =
            entry.target.querySelectorAll(".image-character");

          /* animation for the title */

          tl.to(title, { opacity: 1, duration: 0.5 });

          /* animation for the description characters */
          tl.from(descriptionChar, {
            x: 0,
            stagger: 0.005,
            opacity: 0,
            duration: 0.05,
            delay: 1.5,
          });

          /* animation for the image characters */
          tl.to(imageCharacter, {
            duration: 1,
            yPercent: 0,
            opacity: 1,
          });

          background.style.opacity = 1;

          /* add bg-number class */
          background.classList.add(`bg-${backgroundNumber}`);
        } else {
          const description = entry.target.querySelector("#description-game");
          const imageCharacter =
            entry.target.querySelectorAll(".image-character");

          tl.to(imageCharacter, {
            duration: 1,
            yPercent: 0,
            opacity: 0,
          });
          // // const charactersGame = entry.target.querySelector(".characters-game");
          // const imageCharacter =
          //   entry.target.querySelectorAll(".image-character");
          // /* animation so that the images of the logo disappear */
          // tl.to(imageCharacter, {
          //   duration: 1,
          //   yPercent: 20,
          //   opacity: 0,
          //   delay: 0,
          // });
          // const description = entry.target.querySelector("#description-game");
          // background.style.opacity = 0;
          // /* when isintersecting is false, add the opacity 0 property so that the elements disappear */
          title.style.opacity = 0;
          description.style.opacity = 0;
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    /* observe each section */
    sectionGames.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  const games = getGames.games;
  const [characterSelected, setCharacterSelected] =
    useState<CharacterSelected>();

  /* search character by id */
  const handleSearchCharacter = (id: number) => {
    for (let i = 0; i < games.length; i++) {
      for (let a = 0; a < games[i].characters.length; a++) {
        if (games[i].characters[a].id == id) {
          setCharacterSelected(games[i].characters[a]);
        }
      }
    }
    console.log("entrsa");
  };

  return (
    <article
      key={id}
      id={`section-game__${id}`}
      className={`section-game h-screen w-screen relative max-w-screen px-4 mb-10 flex flex-row ${id}`}
    >
      <div
        className={`opacity-0 absolute z[-1] transition-all background-gradient`}
      ></div>
      <div className="w-full h-full m-4 pt-16 flex flex-col">
        <h2 className="relative game-title text-white scale-x-[1] scale-y-[1.2] text-4xl mb-10 tracking-wider transition-[opacity] opacity-0">
          {title}
        </h2>
        <div className="w-[50%] h-auto">
          <p
            id="description-game"
            className="relative w-full opacity-0 scale-x-[1] scale-y-[1.2] mb-10"
          >
            {description}
          </p>
        </div>
        <div className="characters-game relative w-full flex flex-row h-auto">
          {characters?.map((character) => (
            <CharactersSelect
              character_id={character.id}
              character_name={character.name}
              character_image_complete={character.image_complete}
              character_image_select={character.image_select}
              handleSearchCharacter={handleSearchCharacter}
              characterSelected={characterSelected}
              setCharacterSelected={characterSelected}
            />
          ))}
        </div>
      </div>
      <InfoCharacter
        characterSelected={characterSelected}
        setCharacterSelected={characterSelected}
      />
    </article>
  );
}
