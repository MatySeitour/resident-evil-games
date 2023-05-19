import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

interface InfoCharacterProps {
  characterSelected: any;
  setCharacterSelected: any;
}

export default function InfoCharacter({
  characterSelected,
  setCharacterSelected,
}: InfoCharacterProps) {
  useEffect(() => {
    const imageFull = document.querySelector(
      `#image-character__full__${characterSelected?.id}`
    );

    const titleCharacterSelected = document.querySelector(
      `.character-selected__title__${characterSelected?.id}`
    );
    const descriptionCharacterSelected = document.querySelector(
      `.character-selected__description__${characterSelected?.id}`
    );

    gsap.fromTo(
      titleCharacterSelected,
      { opacity: 0, duration: 1, delay: 0.5 },
      {
        opacity: 1,
        duration: 1.2,
        delay: 0.5,
      }
    );

    gsap.fromTo(
      imageFull,
      { opacity: 0, duration: 1 },
      {
        opacity: 1,
        duration: 1,
      }
    );

    gsap.fromTo(
      descriptionCharacterSelected,
      { opacity: 0, duration: 1, delay: 1 },
      {
        opacity: 1,
        duration: 1,
        delay: 1,
      }
    );
  }, [characterSelected?.id]);
  return (
    <div className="h-[auto] w-full relative flex flex-1 flex-row justify-start items-center pr-4 bg-black px-4 max-w-[1200px]">
      <figure
        id={`image-character__full__${characterSelected?.id}`}
        className="w-[500px] h-[400px] mr-2 relative character-container__effect"
      >
        <Image
          src={
            characterSelected?.id
              ? `${characterSelected?.image_complete}`
              : "/chris.webp"
          }
          alt={`${characterSelected?.name}`}
          width="0"
          height="0"
          sizes="100%"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </figure>
      <div className="w-[auto] h-[100%] pt-4 pl-2 flex-1 relative">
        <h4
          className={`text-red-700 scroll-text__effect bg-red-700 scale-x-[1] scale-y-[1.2] opacity-0 text-2xl mb-2 tracking-wider character-selected__title__${characterSelected?.id} mb-4`}
        >
          {characterSelected?.name}
        </h4>
        <p
          className={`scale-x-[1] scale-y-[1.2] scroll-text__effect bg-white opacity-0 character-selected__description__${characterSelected?.id}`}
        >
          {characterSelected?.description}
        </p>
      </div>
    </div>
  );
}
