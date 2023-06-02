"use client";

import { useEffect, useState } from "react";
import getGames from "../../utils/games.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
// import CharactersSelect from "./CharactersSelect";
import SectionGame from "./SectionGame";

const ScrollSection = () => {
  /* get games */
  const games = getGames.games;

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger, SplitType);

  //   const backgroundReveal = gsap.utils.toArray("#section-game");
  //   const backgroundHome: any = document.querySelector(".background-home");

  //   // backgroundReveal.forEach((text: any, i) => {
  //   //   console.log(text);
  //   //   ScrollTrigger.create({
  //   //     trigger: text,
  //   //     markers: true,
  //   //     start: "300px bottom",
  //   //     onEnter: () => {
  //   //       gsap.to(backgroundHome, {
  //   //         opacity: 0,
  //   //         duration: 1,
  //   //         onComplete: () => {
  //   //           backgroundHome.classList.add(`bg-${i + 1}`);
  //   //           backgroundHome.style.opacity = 1;
  //   //           backgroundHome.classList.remove(`bg-${i - 1}`);
  //   //         },
  //   //       });
  //   //     },
  //   //     // onLeaveBack: () => {
  //   //     //   main.classList.add(`bg-${i - 1}`);
  //   //     // },
  //   //     onLeaveBack: () => {
  //   //       gsap.to(backgroundHome, {
  //   //         opacity: 0,
  //   //         duration: 1,
  //   //         onComplete: () => {
  //   //           backgroundHome.classList.remove(`bg-${i - 1}`);
  //   //           backgroundHome.style.opacity = 1;
  //   //         },
  //   //       });
  //   //     },
  //   //   });
  //   // });

  //   // onStart: () => {
  //   //   main.classList.add(`bg-${i + 1}`);
  //   // },
  //   // const reveal = gsap.utils.toArray(".game-title");
  //   // reveal.forEach((text: any, i) => {
  //   //   gsap.to(text, {
  //   //     scrollTrigger: {
  //   //       trigger: text,
  //   //       toggleActions: "play none none none",
  //   //       // markers: true,
  //   //       start: "-100px center",

  //   //       end: "-100px center",
  //   //     },
  //   //     opacity: 1,
  //   //     duration: 0.5,
  //   //   });
  //   // });
  // }, []);

  return (
    <>
      {games.map((game) => (
        <SectionGame
          key={game.id}
          id={game.id}
          title={game.title}
          description={game.description}
          characters={game.characters}
          epilogue={game.epilogue}
          image_prologue={game.image_prologue}
        />
      ))}
    </>
  );
};

export default ScrollSection;
