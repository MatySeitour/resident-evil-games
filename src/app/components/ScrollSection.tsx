"use client";

import { useEffect, useState } from "react";
import getGames from "../../utils/games.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import Image from "next/image";

export default function ScrollSection() {
  /* get games */
  const games = getGames.games;
  gsap.registerPlugin(ScrollTrigger, SplitType);

  /* state that contains the id of the selected character */
  const [characterShowId, setCharacterShowId] = useState<number>(0);

  useEffect(() => {
    const sectionGames = document.querySelectorAll(".section-game");

    /* Animate function */
    const handleIntersection = (entries: {}[]) => {
      entries.map((entry: any) => {
        console.log(entry);

        const title = entry.target.querySelector("h2");
        const background = entry.target.querySelector("div");
        /* getting the item class number */
        const backgroundNumber = Number(entry.target.className.split("10")[1]);

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
          gsap.to(title, { opacity: 1, duration: 0.5 });

          /* animation for the description characters */
          gsap.from(descriptionChar, {
            x: 0,
            stagger: 0.005,
            opacity: 0,
            duration: 0.05,
            delay: 1.5,
          });

          /* animation for the image characters */
          tl.to(imageCharacter, {
            duration: 1,
            yPercent: 50,
            opacity: 1,
          });

          // background.style.opacity = 1;

          /* add bg-number class */
          background.classList.add(`bg-${backgroundNumber}`);
        } else {
          // const charactersGame = entry.target.querySelector(".characters-game");
          const imageCharacter =
            entry.target.querySelectorAll(".image-character");

          /* animation so that the images of the logo disappear */
          tl.to(imageCharacter, {
            duration: 1,
            yPercent: 20,
            opacity: 0,
            delay: 0,
          });

          const description = entry.target.querySelector("#description-game");
          // background.style.opacity = 0;

          /* when isintersecting is false, add the opacity 0 property so that the elements disappear */
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

  /* search character by id */
  const handleSearchCharacter = (id: number, gameId: number) => {
    /* first look for the game from the gameId */
    let gameView = games.filter((game) => game.id == gameId);

    /* then look for the character id inside the game array */
    let characterView = gameView[0].characters?.filter(
      (characterId) => characterId.id == id
    );
    console.log(characterView);
    setCharacterShowId(id);
  };

  return (
    <>
      {games.map((game) => (
        <article
          key={game.id}
          className={`section-game h-screen w-screen relative mb-10 ${game.id}`}
        >
          <div
            className={`opacity-0 absolute z[-1] transition-all background-gradient`}
          ></div>
          <div className="w-auto h-auto m-4">
            <h2 className="relative game-title text-white scale-x-[1] scale-y-[1.2] text-4xl mb-2 tracking-wider scroll-text__effect bg-white transition-[opacity] opacity-0">
              {game.title}
            </h2>
            <div className="w-[40%]">
              <p id="description-game" className="relative opacity-0">
                {game.description}
              </p>
            </div>
            <div className="characters-game relative w-full flex flex-row h-auto">
              {game.characters?.map((character) => (
                <div key={character.id} className="">
                  <figure className="image-character w-[70px] h-[70px] rounded-full mr-2">
                    <Image
                      onClick={() =>
                        handleSearchCharacter(character.id, game.id)
                      }
                      className={
                        characterShowId != character.id
                          ? `rounded-full grayscale-[10] hover:grayscale-0 hover:scale-110 transition-all`
                          : `rounded-full grayscale-[0] scale-110 transition-all`
                      }
                      src={`${character?.image_select}`}
                      alt={`${character.name}`}
                      width="0"
                      height="0"
                      sizes="50vh"
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "cover",
                      }}
                    />
                  </figure>
                </div>
              ))}
            </div>
            {/* {character.id == characterShowId ? (
              <>
                <figure className="w-[240px] h-[240px] mr-2"></figure>
              </>
            ) : (
              <></>
            )} */}
          </div>
        </article>
      ))}
    </>
  );
}
