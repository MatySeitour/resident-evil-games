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

    gsap.fromTo(
      imageFull,
      { opacity: 0, duration: 1 },
      {
        opacity: 1,
        duration: 1,
      }
    );
  }, [characterSelected?.id]);
  return (
    <div className="h-[100%] w-auto relative pt-4">
      <figure
        id={`image-character__full__${characterSelected?.id}`}
        className="w-[300px] h-[400px] mr-2 relative"
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
      <div className="w-[400px] h-[200px] bg-black pt-4 pl-2">
        <h4 className="text-white scale-x-[1] scale-y-[1.2] text-xl mb-2 tracking-wider">
          {characterSelected?.name}
        </h4>
        <p>{characterSelected?.description}</p>
      </div>
    </div>
  );
}
