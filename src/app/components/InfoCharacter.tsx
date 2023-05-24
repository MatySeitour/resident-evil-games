import Image from "next/image";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import LoaderImage from "./loaderImage";

interface InfoCharacterProps {
  characterSelected: any;
  setCharacterSelected: any;
}

export default function InfoCharacter({
  characterSelected,
  setCharacterSelected,
}: InfoCharacterProps) {
  useEffect(() => {
    setLoaded(false);
    const imageFull = document.querySelector(
      `#image-character__full__${characterSelected?.id}`
    );

    const titleCharacterSelected = document.querySelector(
      `.character-selected__title__${characterSelected?.id}`
    );
    const descriptionCharacterSelected = document.querySelector(
      `.character-selected__description__${characterSelected?.id}`
    );

    imageFull?.classList.add("opacity-on");

    gsap.fromTo(
      titleCharacterSelected,
      { opacity: 0, duration: 1 },
      {
        opacity: 1,
        duration: 1.2,
      }
    );

    // gsap.fromTo(
    //   imageFull,
    //   { opacity: 0, duration: 1 },
    //   {
    //     opacity: 1,
    //     duration: 1,
    //   }
    // );

    gsap.fromTo(
      descriptionCharacterSelected,
      { opacity: 0, duration: 1 },
      {
        opacity: 1,
        duration: 1,
      }
    );
  }, [characterSelected?.id]);

  const [loaded, setLoaded] = useState(false);

  return (
    <div className="h-[400px] w-screen relative flex flex-1 info-characters__container opacity-1 transition-all flex-row justify-start items-center bg-black image-character__effect max-[700px]:flex-col max-[700px]:h-[auto] max-[700px]:min-h-[auto]">
      <figure className="w-[500px] h-[550px] mr-2 relative character-container__effect max-[700px]:w-[300px] max-[700px]:h-[400px] opacity-1 transition-all">
        {!loaded && <LoaderImage />}
        <Image
          id={`image-character__full__${characterSelected?.id}`}
          src={
            characterSelected?.id
              ? `${characterSelected?.image_complete}`
              : "/chris.webp"
          }
          alt={`${characterSelected?.name}`}
          width="0"
          height="0"
          sizes="100%"
          quality={100}
          priority={true}
          onLoadingComplete={(img) => {
            img.classList.remove("opacity-on");
            setLoaded(true);
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: `${characterSelected?.id == 1 ? "contain" : "cover"}`,
            objectPosition: "center",
          }}
        />
      </figure>
      <div className="h-[100%] pt-4 pl-2 flex-1 relative max-[700px]:h-full max-[700px]:flex max-[700px]:flex-col max-[700px]:gap-[50px] max-[700px]:text-center max-[700px]:pr-2">
        <h4
          className={`text-red-700 scroll-text__effect bg-red-700 scale-y-[1.2] pl-2 text-4xl mb-2 tracking-wider character-selected__title__${characterSelected?.id} mb-4 max-[700px]:mb-0 max-[700px]:pl-0`}
        >
          {characterSelected?.name}
        </h4>
        <p
          className={`pl-2 w-[90%] text-xl scale-y-[1.2] scroll-text__effect bg-white character-selected__description__${characterSelected?.id} max-[700px]:w-[100%] max-[700px]:pl-0`}
        >
          {characterSelected?.description}
        </p>
      </div>
    </div>
  );
}
