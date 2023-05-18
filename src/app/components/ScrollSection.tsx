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

  gsap.registerPlugin(ScrollTrigger, SplitType);

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
        />
      ))}
    </>
  );
}
