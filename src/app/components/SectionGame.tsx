import { useEffect, useState } from "react";
import getGames from "../../utils/games.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import Image from "next/image";
import CharactersSelect from "./CharactersSelect";
import InfoCharacter from "./InfoCharacter";
import Epilogue from "./Epilogue";

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
  epilogue: string;
  other_games?: {}[];
}

interface CharacterSelected {
  id: number;
  image_complete: string;
  image_select: string;
  name: string;
}

const SectionGame = ({
  id,
  title,
  description,
  characters,
  image_prologue,
  epilogue,
}: Props) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitType);

    const imageElement: HTMLImageElement | null = document.querySelector(
      `.img-prologue__effect__${id}`
    );
    const height = imageElement?.clientHeight;
    const width = imageElement?.clientWidth;

    if (height && width) {
      imageElement?.addEventListener("mousemove", (event: any) => {
        const { layerX, layerY } = event;

        const yRotation = ((layerX - width / 2) / width) * 20;
        const xRotation = ((layerY - height / 2) / height) * 20;

        const newClass = `
        perspective(500px)
        scale(1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)`;
        imageElement.style.transform = newClass;
      });

      imageElement?.addEventListener("mouseout", () => {
        imageElement.style.transform = `
        perspective(500px)
        scale(1)
        rotateX(0)
        rotateY(0)
        `;
      });
    }

    let mm = gsap.matchMedia();
    mm.add("(min-width: 800px)", () => {
      const title = document.querySelector(`.game-title__${id}`);
      const titleSplit = new SplitType(`.game-title__${id}`);
      gsap.from(`.game-title__${id} .char`, {
        scrollTrigger: {
          trigger: `.game-title__${id} .char`,
          toggleActions: "play none none none",
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
    });
    mm.add("(max-width: 800px)", () => {
      const gameTitle = gsap.utils.toArray(`.game-title__${id}`);
      const epilogueTitle = gsap.utils.toArray(`.epilogue_title__${id}`);
      const lineLeftEpilogue = gsap.utils.toArray(
        `.line-left__epilogue__${id}`
      );

      gameTitle.forEach((title: any, i: number) => {
        gsap.to(title, {
          scrollTrigger: {
            trigger: title,
            toggleActions: "play none none none",
            // markers: true,
            start: "-100px center",

            end: "-100px center",
          },
          opacity: 1,
          duration: 0.5,
        });
      });

      const charactersTitleContainer = gsap.utils.toArray(
        `.characters-title__container`
      );
      charactersTitleContainer.forEach((title: any, i) => {
        gsap.to(title, {
          scrollTrigger: {
            trigger: title,
            toggleActions: "play none none none",
            start: "-100px center",

            end: "-100px center",
          },
          opacity: 1,
          duration: 0.5,
        });
      });

      epilogueTitle.forEach((title: any, i: number) => {
        gsap.to(title, {
          scrollTrigger: {
            trigger: title,
            toggleActions: "play none none none",
            //   markers: true,
            start: "top center",

            end: "0px center",
          },
          opacity: 1,
          duration: 0.5,
        });
      });

      lineLeftEpilogue.forEach((title: any, i: number) => {
        gsap.to(title, {
          scrollTrigger: {
            trigger: title,
            toggleActions: "play none none none",
            // markers: true,
            start: "-100px center",
            end: "-100px center",
          },
          width: "40%",
          duration: 0.5,
        });
      });
    });
  }, []);

  // const handleOnMouse = (
  //   evn: React.MouseEvent<HTMLImageElement, MouseEvent>
  // ) => {
  //   const imageElement: HTMLImageElement | null = document.querySelector(
  //     `.img-prologue__effect__${id}`
  //   );

  //   console.log(evn);

  //   const height = imageElement?.clientHeight;
  //   const width = imageElement?.clientWidth;

  //   // console.log(height);
  // };
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
        className={`relative w-auto game-title__${id} text-center text__effect text-red-800 scale-x-[1] scale-y-[1.2] text-6xl mb-20 tracking-wider max-[870px]:opacity-0 max-[870px]:text-5xl`}
      >
        <h1 className="inline-block">{title}</h1>
      </div>
      <div className="h-[100%] w-[100%] pt-20 flex flex-row justify-between items-center mb-[100px] px-4 max-[870px]:flex-col">
        <div className="flex flex-col w-[50%] max-[870px]:w-full">
          <h2 className="relative inline-block prologue-title scroll-text__effect leading-relaxed bg-red-800 text-red-500 scale-x-[1] scale-y-[1.2] text-5xl mb-20 tracking-wider opacity-0 max-[870px]:text-center max-[870px]:text-4xl max-[870px]:pb-[2px]">
            Prologue
          </h2>
          <div className="h-auto w-[100%]">
            <p
              id="description-game"
              className="relative w-[100%] opacity-0 scale-x-[1] scale-y-[1.2] mb-14 scroll-text__effect bg-white text-xl max-[870px]:text-center"
            >
              {description}
            </p>
          </div>
        </div>
        <div className="h-[100%] w-[70%] flex-1 flex justify-center items-center image-prologue opacity-0 pt-20 max-[870px]:w-[320px] max-[870px]:pt-14">
          <figure className="h-[70%] translate-x-[10%] w-[70%] max-[870px]:h-[100%] max-[870px]:w-[100%] max-[870px]:translate-x-0">
            <Image
              className={`img-prologue__effect__${id} img-prologue__effect`}
              alt="resident evil 1"
              src={image_prologue}
              width="0"
              height="0"
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                // objectPosition: "center",
              }}
            />
          </figure>
        </div>
      </div>
      <div className="characters-game z-[99999] w-[100%] flex flex-col justify-center items-end relative h-auto mb-10 px-4">
        <div className="w-full text-center">
          <h2 className="relative inline-block characters-title__container scroll-text__effect bg-red-800 text-red-800 scale-x-[1] scale-y-[1.2] text-4xl mb-20 tracking-wider opacity-0">
            Characters
          </h2>
        </div>
        <div className="flex flex-row w-full items-center justify-end h-auto max-[870px]:flex-wrap max-[870px]:justify-center">
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
      <div className="bg-black">
        <InfoCharacter
          characterSelected={characterSelected}
          setCharacterSelected={characterSelected}
        />
        <div className="bg-black relative w-full h-[55px] gradient-end__section__end mb-[150px]"></div>
        <Epilogue epilogue={epilogue} id={id} />
      </div>
    </article>
  );
};

export default SectionGame;
