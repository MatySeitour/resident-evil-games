"use client";

import { useState } from "react";
import Image from "next/image";

/* characters select props */

interface CharacterProps {
  character_id: number;
  character_image_complete: string;
  character_image_select: string;
  character_name: string;
  handleSearchCharacter: any;
  characterSelected: any;
  setCharacterSelected: any;
}

const CharactersSelect = ({
  character_id,
  character_image_select,
  character_name,
  handleSearchCharacter,
  characterSelected,
}: CharacterProps): JSX.Element => {
  return (
    <div key={character_id} className="image-character opacity-0 relative">
      <figure className="w-[100px] h-[70px] mr-[2.5px] cursor-pointer max-[870px]:mb-[2.5px]">
        <Image
          onClick={() => handleSearchCharacter(character_id)}
          className={
            characterSelected?.id != character_id
              ? `grayscale-[10] character-selected__style shadow-none transition-all p-[0.5px]`
              : `grayscale-[0] character-selected__style character-selected__style__active  transition-all p-[0.5px]`
          }
          src={`${character_image_select}`}
          alt={`${character_name}`}
          width="0"
          height="0"
          sizes="100vh"
          style={{
            width: "100px",
            height: "70px",
            objectFit: "cover",
          }}
        />
        <span
          className={
            characterSelected?.id != character_id
              ? "span-select inline-block w-[0%] h-[2px] bg-red-800 absolute left-[49%] translate-x-[-50%] bottom-[2px]"
              : "span-select inline-block w-[92%] h-[2px] bg-red-600 absolute left-[49%] translate-x-[-50%] bottom-[2px] transition-[width]"
          }
        ></span>
      </figure>
    </div>
  );
};

export default CharactersSelect;
