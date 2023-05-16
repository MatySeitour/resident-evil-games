"use client";

import { useEffect, useRef } from "react";
import getGames from "../../utils/games.json";
import { gsap } from "gsap";
import { useIntersection } from "react-use";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

export default function ScrollSection() {
  const games = getGames.games;
  gsap.registerPlugin(ScrollTrigger, SplitType);

  useEffect(() => {
    const sectionGames = document.querySelectorAll(".section-game");

    const handleIntersection = (entries: any) => {
      entries.map((entry: any) => {
        const title = entry.target.querySelector("h2");
        const background = entry.target.querySelector("div");
        const descriptionGame = new SplitType(
          entry.target.querySelector("#description-game")
        );
        console.log(descriptionGame);
        const description = entry.target.querySelectorAll(".char");

        const backgroundNumber = Number(entry.target.className.split("10")[1]);
        console.log(Number(backgroundNumber));

        const tl = gsap.timeline();

        tl.fromTo(
          title,
          { opacity: 0, duration: 1 },
          { opacity: 1, duration: 1 }
        );

        tl.from(description, {
          x: 0,
          stagger: 0.01,
          opacity: 0,
          duration: 0.05,
          delay: 0,
          // scrollTrigger: {
          //   trigger,
          // },
        });
        if (entry.isIntersecting) {
          tl.play();
          background.classList.add(`bg-${backgroundNumber}`);
        } else {
          tl.pause();
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
    sectionGames.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <>
      {games.map((game) => (
        <article
          key={game.id}
          className={`section-game h-screen w-screen relative mb-10 ${game.id}`}
        >
          <div className={`opacity-0 absolute z[-1]`}></div>
          <div className="w-auto h-auto m-4">
            <h2 className="relative text-white scale-x-[1] scale-y-[1.2] text-4xl mb-2 tracking-wider scroll-text__effect bg-white">
              {game.title}
            </h2>
            <div className="w-[40%]">
              <p id="description-game" className="relative">
                {game.description}
              </p>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

// bg-${game.id}
