"use client";

import { useEffect, useState } from "react";
import getGames from "../../utils/games.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import Image from "next/image";
// import CharactersSelect from "./CharactersSelect";
import SectionGame from "./SectionGame";

export default function ScrollSection() {
  /* get games */
  const games = getGames.games;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitType);

    const backgroundReveal = gsap.utils.toArray("#section-game");
    const backgroundHome: any = document.querySelector(".background-home");

    // backgroundReveal.forEach((text: any, i) => {
    //   console.log(text);
    //   ScrollTrigger.create({
    //     trigger: text,
    //     markers: true,
    //     start: "300px bottom",
    //     onEnter: () => {
    //       gsap.to(backgroundHome, {
    //         opacity: 0,
    //         duration: 1,
    //         onComplete: () => {
    //           backgroundHome.classList.add(`bg-${i + 1}`);
    //           backgroundHome.style.opacity = 1;
    //           backgroundHome.classList.remove(`bg-${i - 1}`);
    //         },
    //       });
    //     },
    //     // onLeaveBack: () => {
    //     //   main.classList.add(`bg-${i - 1}`);
    //     // },
    //     onLeaveBack: () => {
    //       gsap.to(backgroundHome, {
    //         opacity: 0,
    //         duration: 1,
    //         onComplete: () => {
    //           backgroundHome.classList.remove(`bg-${i - 1}`);
    //           backgroundHome.style.opacity = 1;
    //         },
    //       });
    //     },
    //   });
    // });

    // onStart: () => {
    //   main.classList.add(`bg-${i + 1}`);
    // },
    // const reveal = gsap.utils.toArray(".game-title");
    // reveal.forEach((text: any, i) => {
    //   gsap.to(text, {
    //     scrollTrigger: {
    //       trigger: text,
    //       toggleActions: "restart none none reverse",
    //       // markers: true,
    //       start: "-100px center",

    //       end: "-100px center",
    //     },
    //     opacity: 1,
    //     duration: 0.5,
    //   });
    // });

    const imagePrologue = gsap.utils.toArray(".image-prologue");
    imagePrologue.forEach((iamge: any, i) => {
      gsap.to(iamge, {
        scrollTrigger: {
          trigger: iamge,
          toggleActions: "restart none none reverse",
          // markers: true,
          start: "100px center",

          end: "-100px center",
        },
        opacity: 1,
        duration: 0.5,
      });
    });

    const descriptionGame = gsap.utils.toArray("#description-game");
    descriptionGame.forEach((description: any, i) => {
      gsap.to(description, {
        scrollTrigger: {
          trigger: description,
          toggleActions: "restart none none reverse",
          start: "-50px center",
        },
        opacity: 1,
        duration: 0.5,
      });
    });

    const characterSelectContainer = gsap.utils.toArray(".characters-game");
    characterSelectContainer.forEach((imagesContainer: any, i) => {
      gsap.to(imagesContainer, {
        scrollTrigger: {
          trigger: imagesContainer,
          toggleActions: "restart none none reverse",
          start: "500px center",
          // markers: true,
          // pin: true,
          end: "600px center",
        },
        // opacity: 1,
        // xPercent: "-100",
        // yPercent: "100",
        // duration: 0.1,
        // flexDirection: "row",
      });
    });

    const characterSelect = gsap.utils.toArray(".image-character");
    characterSelect.forEach((imageCharacter: any, i) => {
      gsap.to(imageCharacter, {
        scrollTrigger: {
          trigger: imageCharacter,
          toggleActions: "restart none none reverse",
          start: "-140px center",
          // markers: true,
          // pin: true,
          // end: "-200px center",
        },
        opacity: 1,
        duration: 0.5,
      });
    });

    const infoCharactersContainer = gsap.utils.toArray(
      ".info-characters__container"
    );
    infoCharactersContainer.forEach((characterContainer: any) => {
      gsap.to(characterContainer, {
        scrollTrigger: {
          trigger: characterContainer,
          toggleActions: "restart none none reverse",
          start: "-400px center",
          // markers: true,
        },
        opacity: 1,
        duration: 0.5,
      });
    });

    const prologueTitle = gsap.utils.toArray(".prologue-title");
    prologueTitle.forEach((prologue: any) => {
      gsap.to(prologue, {
        scrollTrigger: {
          trigger: prologue,
          toggleActions: "restart none none reverse",
          start: "0px center",
          // markers: true,
        },
        opacity: 1,
        duration: 0.5,
      });
    });
  }, []);

  const [loadingCharacterSelected, setLoadingCharacterSelected] =
    useState<boolean>(false);

  return (
    <>
      {games.map((game) => (
        <SectionGame
          key={game.id}
          id={game.id}
          title={game.title}
          description={game.description}
          characters={game.characters}
          image_prologue={game.image_prologue}
        />
      ))}
    </>
  );
}
