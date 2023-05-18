"use client";

import { useEffect, useState } from "react";
import getGames from "../../utils/games.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import Image from "next/image";

interface CharacterProps {
  character_id: number;
  character_image_complete: string;
  character_image_select: string;
  character_name: string;
  handleSearchCharacter: any;
  characterSelected: any;
  setCharacterSelected: any;
}
interface CharacterSelected {
  id: number;
  image_complete: string;
  image_select: string;
  name: string;
}

export default function CharactersSelect({
  character_id,
  character_image_complete,
  character_image_select,
  character_name,
  handleSearchCharacter,
  characterSelected,
  setCharacterSelected,
}: CharacterProps) {
  const games = getGames.games;
  /* state that contains the id of the selected character */
  const [characterShowId, setCharacterShowId] = useState<number>(0);

  /* search character by id */

  return (
    <div key={character_id} className="image-character opacity-0">
      <figure className="w-[70px] h-[70px] rounded-full mr-4">
        <Image
          onClick={() => handleSearchCharacter(character_id)}
          className={
            characterSelected?.id != character_id
              ? `rounded-full grayscale-[10] shadow-none hover:grayscale-0 hover:scale-110 transition-all`
              : `rounded-full grayscale-[0] shadow-md shadow-red-500 scale-110 transition-all`
          }
          src={`${character_image_select}`}
          alt={`${character_name}`}
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
  );
}
