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
  image_prologue: string;
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
  image_prologue,
}: Props) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitType);

    const title = document.querySelector(`.game-title__${id}`);
    const titleSplit = new SplitType(`.game-title__${id}`);
    console.log(title);
    gsap.from(`.game-title__${id} .char`, {
      scrollTrigger: {
        trigger: `.game-title__${id} .char`,
        toggleActions: "restart none none reverse",
        start: "top center",
        // markers: true,
        // pin: true,
        end: "600px center",
      },
      x: 0,
      stagger: 0.05,
      opacity: 0,
      duration: 0.1,
      delay: 0,
    });
  }, []);
  // useEffect(() => {
  //   const sectionGames = document.querySelectorAll(".section-game");

  //   /* Animate function */
  //   const handleIntersection = (entries: {}[]) => {
  //     entries.map((entry: any) => {
  //       const title = entry.target.querySelector("h2");
  //       const background = entry.target.querySelector("div");
  //       /* getting the item class number */
  //       const backgroundNumber = Number(entry.target.className.split("row")[1]);

  //       /* GSAP timeline */
  //       const tl = gsap.timeline({
  //         repeat: 0,
  //       });

  //       if (entry.isIntersecting) {
  //         /* separate text into words and letters */
  //         const descriptionGame = new SplitType(
  //           entry.target.querySelector("#description-game")
  //         );

  //         const description = entry.target.querySelector("#description-game");

  //         /* remove opacity in description */
  //         description.style.opacity = 1;

  //         /* select all the characters of the article */
  //         const descriptionChar = entry.target.querySelectorAll(".char");

  //         const imageCharacter =
  //           entry.target.querySelectorAll(".image-character");

  //         /* animation for the title */

  //         tl.to(title, { opacity: 1, duration: 0.5 });

  //         /* animation for the description characters */
  //         tl.from(descriptionChar, {
  //           x: 0,
  //           stagger: 0.005,
  //           opacity: 0,
  //           duration: 0.05,
  //           delay: 1.5,
  //         });

  //         /* animation for the image characters */
  //         tl.to(imageCharacter, {
  //           duration: 1,
  //           yPercent: 0,
  //           opacity: 1,
  //         });

  //         background.style.opacity = 1;

  //         /* add bg-number class */
  //         background.classList.add(`bg-${backgroundNumber}`);
  //       } else {
  //         const description = entry.target.querySelector("#description-game");
  //         const imageCharacter =
  //           entry.target.querySelectorAll(".image-character");

  //         tl.to(imageCharacter, {
  //           duration: 1,
  //           yPercent: 0,
  //           opacity: 0,
  //         });
  //         // // const charactersGame = entry.target.querySelector(".characters-game");
  //         // const imageCharacter =
  //         //   entry.target.querySelectorAll(".image-character");
  //         // /* animation so that the images of the logo disappear */
  //         // tl.to(imageCharacter, {
  //         //   duration: 1,
  //         //   yPercent: 20,
  //         //   opacity: 0,
  //         //   delay: 0,
  //         // });
  //         // const description = entry.target.querySelector("#description-game");
  //         // background.style.opacity = 0;
  //         // /* when isintersecting is false, add the opacity 0 property so that the elements disappear */
  //         title.style.opacity = 0;
  //         description.style.opacity = 0;
  //       }
  //     });
  //   };
  //   const observer = new IntersectionObserver(handleIntersection, {
  //     threshold: 0.5,
  //   });

  //   /* observe each section */
  //   sectionGames.forEach((section) => {
  //     observer.observe(section);
  //   });
  // }, []);
  const [characterSelected, setCharacterSelected] =
    useState<CharacterSelected>();

  useEffect(() => {
    if (!characterSelected?.id) {
      setCharacterSelected(characters[0]);
    }
  }, []);

  const games = getGames.games;

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
      id={`section-game`}
      className={`bg-transparent article-container__effect w-full h-[auto] pt-[200px] relative flex flex-col justify-center bg-${id}`}
    >
      <div
        className={`opacity-0 absolute z[-1] transition-all background-gradient`}
      ></div>
      <div
        className={`relative w-auto game-title__${id} text-center text__effect text-red-800 scale-x-[1] scale-y-[1.2] text-6xl mb-20 tracking-wider `}
      >
        <h1 className="inline-block">{title}</h1>
      </div>
      <div className="h-[100%] w-[98%] pt-20 flex flex-row justify-between items-center mb-[100px] px-4">
        <div className="flex flex-col w-[50%]">
          <h2 className="relative inline-block prologue-title scroll-text__effect leading-relaxed bg-red-800 text-red-500 scale-x-[1] scale-y-[1.2] text-5xl mb-20 tracking-wider opacity-0">
            Prologue
          </h2>
          <div className="h-auto w-[100%]">
            <p
              id="description-game"
              className="relative w-[100%] opacity-0 scale-x-[1] scale-y-[1.2] mb-14 scroll-text__effect bg-white text-xl"
            >
              {description}
            </p>
          </div>
        </div>
        <div className="h-[100%] w-[70%] flex-1 flex justify-center items-center image-prologue opacity-0 pt-20">
          <Image
            alt="resident evil 1"
            src={image_prologue}
            width="0"
            height="0"
            sizes="100%"
            style={{
              width: "80%",
              height: "100%",
              objectFit: "cover",
              // objectPosition: "center",
            }}
          />
        </div>
      </div>
      {/* <div className=" h-[100%] w-[98%] pt-20 flex flex-row justify-center items-center mb-[100px] pl-4 pr-4">
        <div className="flex w-full gap-2">
          <div className="h-[200px] flex-1 bg-black"></div>
          <div className="flex-1 flex flex-col justify-end items-end">
            <h2 className="relative inline-block game-title scroll-text__effect leading-relaxed bg-red-500 text-red-500 scale-x-[1] scale-y-[1.2] text-5xl mb-20 tracking-wider opacity-0">
              Locations
            </h2>
            <div className="h-auto w-[100%] flex justify-end">
              <p
                id="description-game"
                className="relative w-[80%] opacity-0 scale-x-[1] scale-y-[1.2] mb-14 scroll-text__effect text-right bg-white text-xl"
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="characters-game z-[99999] w-[98%] flex flex-col justify-center items-end relative h-auto mb-10 px-4">
        <div className="">
          <h2 className="relative inline-block game-title scroll-text__effect bg-red-500 text-red-500 scale-x-[1] scale-y-[1.2] text-4xl mb-20 tracking-wider opacity-0">
            Characters
          </h2>
        </div>
        <div className="flex flex-row w-full items-center justify-end h-auto">
          {characters?.map((character) => (
            <CharactersSelect
              character_id={character.id}
              character_name={character.name}
              character_image_complete={character.image_complete}
              character_image_select={character.image_select}
              handleSearchCharacter={handleSearchCharacter}
              characterSelected={characterSelected}
              setCharacterSelected={characterSelected}
              key={character.id}
            />
          ))}
        </div>
      </div>
      <InfoCharacter
        characterSelected={characterSelected}
        setCharacterSelected={characterSelected}
      />
      <div className="bg-black relative w-full h-[50px] gradient-end__section__end"></div>
    </article>
  );
}
