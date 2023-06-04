/* import react hooks */
import { useEffect, useState } from "react";

/* import components */
import Image from "next/image";
import LoaderImage from "./LoaderImage";

/* import gsap */
import { gsap } from "gsap";

/* info characters props */
interface InfoCharacterProps {
  characterSelected: any;
  gameId: number;
  setCharacterSelected: any;
}

const InfoCharacter = ({
  characterSelected,
  gameId,
}: InfoCharacterProps): JSX.Element => {
  /* load image state */
  const [loadImageState, setLoadImageState] = useState(false);

  useEffect(() => {
    /* each time a character is selected, set the value of loadImageState to false  */
    setLoadImageState(false);

    /* character info elements */
    const imageFull = document.querySelector(
      `#image-character__full__${characterSelected?.id}`
    );

    const titleCharacterSelected = document.querySelector(
      `.character-selected__title__${characterSelected?.id}`
    );
    const descriptionCharacterSelected = document.querySelector(
      `.character-selected__description__${characterSelected?.id}`
    );

    /* add opacity to the image so it is not visible */
    imageFull?.classList.add("opacity-on");

    gsap.fromTo(
      titleCharacterSelected,
      { opacity: 0, duration: 1 },
      {
        opacity: 1,
        duration: 1.2,
      }
    );

    gsap.fromTo(
      descriptionCharacterSelected,
      { opacity: 0, duration: 1 },
      {
        opacity: 1,
        duration: 1,
      }
    );
  }, [characterSelected?.id]);

  return (
    <div
      className={`w-screen relative flex flex-1 opacity-1 transition-all flex-row justify-start items-center bg-black image-character__effect max-[870px]:flex-col max-[870px]:h-[auto] max-[870px]:min-h-[auto]`}
    >
      <div className="max-[870px]:w-full max-[870px]:relative">
        <div className="image-effect__gradient"></div>
      </div>
      <figure
        className={`w-[500px] h-[550px] mr-2 relative info-characters__container__${gameId} opacity-0 character-container__effect max-[870px]:w-[300px] max-[870px]:h-[400px] opacity-1 transition-all`}
      >
        {/* image gradient effec */}
        <div className="image-effect__right"></div>
        <div className="image-effect__top"></div>
        <div className="image-effect__left"></div>

        {/* loading spinner if image did not load */}
        {!loadImageState && <LoaderImage />}
        {characterSelected?.id && (
          <>
            <Image
              id={`image-character__full__${characterSelected?.id}`}
              src={
                characterSelected?.id && `${characterSelected?.image_complete}`
              }
              alt={`${characterSelected?.name}`}
              width="0"
              height="0"
              sizes="100%"
              quality={100}
              priority={true}
              /* when the image load is complete, remove the opacity and set the loadImageState value to true  */
              onLoadingComplete={(img) => {
                img.classList.remove("opacity-on");
                setLoadImageState(true);
              }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: `${
                  characterSelected?.id == 1 ? "contain" : "cover"
                }`,
                objectPosition: "center",
              }}
            />
          </>
        )}
      </figure>
      <div className="h-[100%] flex flex-col justify-center items-start pt-4 px-2 flex-1 relative max-[870px]:h-full max-[870px]:flex max-[870px]:flex-col max-[870px]:gap-[50px] max-[870px]:text-center max-[870px]:pr-2 max-[870px]:items-center">
        <h4
          className={`text-red-700 scroll-text__effect bg-red-700 scale-y-[1.2] pl-2 text-4xl tracking-wider character-selected__title__${characterSelected?.id} mb-10 max-[870px]:mb-2 max-[870px]:pl-0`}
        >
          {characterSelected?.name}
        </h4>
        <div className="max-[870px]:h-[300px] max-[870px]:overflow-y-scroll">
          <p
            className={`pl-2 pr-2 w-full text-xl scale-y-[1.2] scroll-text__effect bg-white character-selected__description__${characterSelected?.id} max-[870px]:w-[100%] max-[870px]:pl-2 max-[870px]:px-2 max-[870px]:scale-[1]`}
          >
            {characterSelected?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCharacter;
