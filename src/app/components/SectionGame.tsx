/* import react hooks */
import { useEffect, useState, useRef } from "react";

/* import games data */
import getGames from "../../utils/games.json";

/* import gsap */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

/* import components */
import Image from "next/image";
import CharactersSelect from "./CharactersSelect";
import InfoCharacter from "./InfoCharacter";
import Epilogue from "./Epilogue";

/* import useIntersection hook */
import useIntersection from "../hooks/useIntersection";

/* import react-multi-carousel */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArrowProps, DotProps } from "react-multi-carousel/lib/types";

/* react-multi-carousel interface */

interface CustomLeftArrowProps extends ArrowProps {
  myOwnStuff: string;
}
interface CustomRightArrowProps extends ArrowProps {
  myOwnStuff: string;
}

/* game data received by props */
interface Props {
  id: number;
  title: string;
  description: string;
  characters: {
    id: number;
    name: string;
    image_select: string;
    image_complete: string;
    description: string;
  }[];
  image_prologue: {
    id: number;
    link: string;
  }[];
  epilogue: string;
  date: string;
  other_games?: {}[];
}

/* character selected data */

interface CharacterSelected {
  id: number;
  image_complete: string;
  image_select: string;
  name: string;
}

const SectionGame = ({
  id,
  title,
  description,
  characters,
  image_prologue,
  epilogue,
  date,
}: Props): JSX.Element => {
  /* react-multi-carousel queries */
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  /* using intersection observer to check if said element is visible 
    screen receives a value in number that belongs to the id of the section
  */
  const element = useRef(null);
  const screen = useIntersection(element);

  /* animations */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitType);
    let mm = gsap.matchMedia();

    /* conditional so animations don't run if screen is 0 */
    if (screen != 0) {
      /* separates each letter from the text in element */
      const title = document.querySelector(`.game-title__${screen}`);
      const titleSplit = new SplitType(`.game-title__${screen}`);

      /* title game animation */
      gsap.from(`.game-title__${screen} .char`, {
        scrollTrigger: {
          trigger: `.game-title__${screen} .char`,
          toggleActions: "play none none none",
          start: "top center",
          end: "600px center",
        },
        x: 0,
        stagger: 0.05,
        opacity: 0,
        duration: 0.1,
        delay: 0,
      });

      /* epilogue elements */
      const epilogueTitle: HTMLElement[] = gsap.utils.toArray(
        `.epilogue_title__${screen}`
      );

      const umbrellaEpilogue: HTMLElement[] = gsap.utils.toArray(
        `.umbrella-epilogue__${screen}`
      );

      const textEpilogue: HTMLElement[] = gsap.utils.toArray(
        `.text-epilogue__${screen}`
      );

      const lineLeftEpilogue: HTMLElement[] = gsap.utils.toArray(
        `.line-left__epilogue__${screen}`
      );
      const lineRightEpilogue: HTMLElement[] = gsap.utils.toArray(
        `.line-right__epilogue__${screen}`
      );

      /* epilogue animations */
      epilogueTitle.forEach((title: HTMLElement, i: number) => {
        gsap.to(title, {
          scrollTrigger: {
            trigger: title,
            toggleActions: "play none none none",
            start: "top center",

            end: "0px center",
          },
          opacity: 1,
          duration: 0.5,
        });
      });

      textEpilogue.forEach((title: HTMLElement, i: number) => {
        gsap.to(title, {
          scrollTrigger: {
            trigger: title,
            toggleActions: "play none none none",
            start: "top center",

            end: "0px center",
          },
          opacity: 1,
          duration: 0.5,
        });
      });

      lineLeftEpilogue.forEach((line: HTMLElement, i: number) => {
        gsap.to(line, {
          scrollTrigger: {
            trigger: line,
            toggleActions: "play none none none",
            start: "-100px center",
            end: "-100px center",
          },
          width: "40%",
          duration: 0.5,
        });
      });

      umbrellaEpilogue.forEach((logo: HTMLElement, i: number) => {
        gsap.to(logo, {
          scrollTrigger: {
            trigger: logo,
            toggleActions: "play none none none",
            start: "-100px center",
            end: "-100px center",
          },
          opacity: 1,
          duration: 0.5,
        });
      });

      lineRightEpilogue.forEach((line: HTMLElement, i: number) => {
        gsap.to(line, {
          scrollTrigger: {
            trigger: line,
            toggleActions: "play none none none",
            start: "-100px center",
            end: "-100px center",
          },
          width: "40%",
          duration: 0.5,
        });
      });

      /* for any resolution above 870 px */

      mm.add("(min-width: 870px)", () => {
        /* prologue title animation */

        const prologueTitle: HTMLElement[] = gsap.utils.toArray(
          `.prologue-title__${screen}`
        );
        prologueTitle.forEach((prologue: HTMLElement) => {
          gsap.to(prologue, {
            scrollTrigger: {
              trigger: prologue,
              toggleActions: "play none none none",
              start: "0px center",
            },
            opacity: 1,
            xPercent: "10",

            duration: 0.5,
          });
        });

        /* image prologue animation */

        const imagePrologue: HTMLElement[] = gsap.utils.toArray(
          `.image-prologue__${screen}`
        );
        imagePrologue.forEach((image: HTMLElement, i) => {
          gsap.fromTo(
            image,
            {
              scrollTrigger: {
                trigger: image,
                toggleActions: "play none none none",
                start: "100px center",

                end: "-100px center",
              },
              opacity: 0,
              xPercent: 50,

              duration: 0.5,
            },
            {
              scrollTrigger: {
                trigger: image,
                toggleActions: "play none none none",
                start: "100px center",

                end: "-100px center",
              },
              opacity: 1,
              xPercent: 0,
              duration: 0.5,
            }
          );
        });

        /* prologue description game animation */

        const descriptionGame: HTMLElement[] = gsap.utils.toArray(
          `#description-game__${screen}`
        );
        descriptionGame.forEach((description: HTMLElement, i) => {
          gsap.to(description, {
            scrollTrigger: {
              trigger: description,
              toggleActions: "play none none none",
              start: "-50px center",
            },
            opacity: 1,
            xPercent: "10",
            duration: 0.5,
          });
        });

        /* characters title animation */

        const charactersTitleContainer: HTMLElement[] = gsap.utils.toArray(
          `.characters-title__container__${screen}`
        );
        charactersTitleContainer.forEach((title: HTMLElement, i) => {
          gsap.to(title, {
            scrollTrigger: {
              trigger: title,
              toggleActions: "play none none none",
              start: "-100px center",

              end: "-100px center",
            },
            opacity: 1,
            duration: 0.5,
          });
        });

        /* info characters animation */

        const infoCharactersContainer: HTMLElement[] = gsap.utils.toArray(
          `.info-characters__container__${screen}`
        );
        infoCharactersContainer.forEach((characterContainer: HTMLElement) => {
          gsap.to(characterContainer, {
            scrollTrigger: {
              trigger: characterContainer,
              toggleActions: "play none none none",
              start: "--100px center",
            },
            opacity: 1,
            duration: 0.5,
          });
        });

        /* characters select container animation*/

        const charactersSelectContainer: HTMLElement[] = gsap.utils.toArray(
          `.character-select__container__${screen}`
        );
        charactersSelectContainer.forEach((characterContainer: HTMLElement) => {
          gsap.fromTo(
            `.character-select__container__${screen} .image-character`,
            {
              scrollTrigger: {
                trigger: characterContainer,
                toggleActions: "play none none none",
                start: "top center",
              },
              opacity: 0,
              duration: 0.5,
              xPercent: 10,
            },
            {
              scrollTrigger: {
                trigger: characterContainer,
                toggleActions: "play none none none",
                start: "top center",
              },
              opacity: 1,
              xPercent: 0,
              duration: 0.5,
            }
          );
        });
      });

      ////////// for any resolution below 870 px //////////

      mm.add("(max-width: 870px)", () => {
        /* game title animation */

        const gameTitle: HTMLElement[] = gsap.utils.toArray(
          `.game-title__${screen}`
        );
        gameTitle.forEach((title: HTMLElement, i: number) => {
          gsap.to(title, {
            scrollTrigger: {
              trigger: title,
              toggleActions: "play none none none",
              start: "-100px center",

              end: "-100px center",
            },
            opacity: 1,
            duration: 0.5,
          });
        });

        /* prologue title animation */

        const prologueTitle: HTMLElement[] = gsap.utils.toArray(
          `.prologue-title__${screen}`
        );
        prologueTitle.forEach((prologue: HTMLElement) => {
          gsap.to(prologue, {
            scrollTrigger: {
              trigger: prologue,
              toggleActions: "play none none none",
              start: "0px center",
            },
            opacity: 1,

            duration: 0.5,
          });
        });

        /* image prologue animation */

        const imagePrologue: HTMLElement[] = gsap.utils.toArray(
          `.image-prologue__${screen}`
        );
        imagePrologue.forEach((image: HTMLElement, i) => {
          gsap.to(image, {
            scrollTrigger: {
              trigger: image,
              toggleActions: "play none none none",
              start: "100px center",

              end: "-100px center",
            },
            opacity: 1,
            duration: 0.5,
          });
        });

        /* prologue description game animation */

        const descriptionGame: HTMLElement[] = gsap.utils.toArray(
          `#description-game__${screen}`
        );
        descriptionGame.forEach((description: HTMLElement, i) => {
          gsap.to(description, {
            scrollTrigger: {
              trigger: description,
              toggleActions: "play none none none",
              start: "-50px center",
            },
            opacity: 1,
            // xPercent: "10",
            duration: 0.5,
          });
        });

        /* characters title animation */

        const charactersTitleContainer: HTMLElement[] = gsap.utils.toArray(
          `.characters-title__container__${screen}`
        );
        charactersTitleContainer.forEach((title: HTMLElement, i) => {
          gsap.to(title, {
            scrollTrigger: {
              trigger: title,
              toggleActions: "play none none none",
              start: "-100px center",

              end: "-100px center",
            },
            opacity: 1,
            duration: 0.5,
          });
        });

        /* characters select container animation */

        const characterSelectContainer: HTMLElement[] = gsap.utils.toArray(
          `.characters-game__${screen}`
        );
        characterSelectContainer.forEach((imagesContainer: HTMLElement, i) => {
          gsap.to(imagesContainer, {
            scrollTrigger: {
              trigger: imagesContainer,
              toggleActions: "play none none none",
              start: "500px center",
              end: "600px center",
            },
          });
        });

        /* characters select animation */

        const characterSelect: HTMLElement[] =
          gsap.utils.toArray(".image-character");
        characterSelect.forEach((imageCharacter: HTMLElement, i) => {
          gsap.to(imageCharacter, {
            scrollTrigger: {
              trigger: imageCharacter,
              toggleActions: "play none none none",
              start: "-140px center",
            },
            opacity: 1,
            duration: 0.5,
          });
        });

        /* info characters animation */

        const infoCharactersContainer: HTMLElement[] = gsap.utils.toArray(
          `.info-characters__container__${screen}`
        );
        infoCharactersContainer.forEach((characterContainer: HTMLElement) => {
          gsap.to(characterContainer, {
            scrollTrigger: {
              trigger: characterContainer,
              toggleActions: "play none none none",
              start: "top center",
            },
            opacity: 1,
            duration: 0.5,
          });
        });

        /* text epilogue animation:  */

        textEpilogue.forEach((title: HTMLElement, i: number) => {
          gsap.to(title, {
            scrollTrigger: {
              trigger: title,
              toggleActions: "play none none none",
              start: "top center",

              end: "0px center",
            },
            /* once the text is visible, add an overflow-y scroll */
            onComplete: () => {
              const textContainer = document.querySelector(
                `.text-epilogue__container__${screen}`
              );
              textContainer?.classList.add("overflow-epilogue__active");
            },
            opacity: 1,
            duration: 0.5,
          });
        });
      });
    }
  }, [screen]);

  /* character selected state */

  const [characterSelected, setCharacterSelected] =
    useState<CharacterSelected>();

  /* the first character of each game starts by default */
  useEffect(() => {
    if (!characterSelected?.id) {
      setCharacterSelected(characters[0]);
    }
  }, []);

  /* games data */
  const games = getGames.games;

  /* search character by id */
  const handleSearchCharacter = (id: number) => {
    for (let i = 0; i < games.length; i++) {
      for (let a = 0; a < games[i].characters.length; a++) {
        if (games[i].characters[a].id == id) {
          setCharacterSelected(games[i].characters[a]);
        }
      }
    }
  };

  /* function that makes a 3d movement effect on the prologue images when you hover*/

  const handleMouseMove = (evt: any) => {
    const height = evt?.target.clientHeight;
    const width = evt?.target.clientWidth;

    const { layerX, layerY } = evt.nativeEvent;

    const yRotation = ((layerX - width / 2) / width) * 20;
    const xRotation = ((layerY - height / 2) / height) * 20;

    const newClass = `
        perspective(500px)
        scale(1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)`;
    evt.target.style.transform = newClass;
  };

  /* function that returns to set the positions of the images to default */

  const handleMouseOut = (evt: any) => {
    evt.target.style.transform = `
       perspective(500px)
         scale(1)
         rotateX(0)
         rotateY(0)
         `;
  };

  /* carousel arrows components */

  const CustomLeftArrow = ({ onClick }: CustomLeftArrowProps) => {
    return (
      <div className="w-[30px] h-[30px] bg-details bg-red-800 absolute top-[50%] translate-y-[-50%]">
        <span
          onClick={onClick}
          className="text-center text-2xl flex justify-center items-center arrow__effect text-white h-full w-full -translate-y-1 font-light"
        >{`<`}</span>
      </div>
    );
  };

  const CustomRightArrow = ({ onClick }: CustomRightArrowProps) => {
    return (
      <div className="w-[30px] h-[30px] bg-details bg-red-800 absolute top-[50%] translate-y-[-50%] right-0">
        <span
          onClick={onClick}
          className="text-center text-2xl flex justify-center items-center arrow__effect text-white h-full w-full -translate-y-1 font-light"
        >{`>`}</span>
      </div>
    );
  };

  /* carousel buttons */

  const CustomDots = ({ index, active, onClick, carouselState }: DotProps) => {
    return (
      <div
        className={`w-[30px] h-[30px] rounded-full m-2 ${
          active ? `bg-details bg-red-800` : `bg-gray-900 bg-details`
        } transition-all flex justify-center items-center`}
        onClick={onClick}
      >
        <p>{(index || index == 0) && index + 1}</p>
      </div>
    );
  };

  return (
    <article
      key={id}
      ref={element}
      id={`${id}`}
      className={`bg-transparent article-container__effect w-full h-[auto] pt-[40px] relative flex flex-col justify-center bg-${id} max-[870px]:h-[auto]`}
    >
      <div
        className={`opacity-0 absolute z[-1] transition-all background-gradient`}
      ></div>
      <div
        className={`relative w-auto game-title__${id} text-center text__effect text-red-800 scale-x-[1] scale-y-[1.2] text-6xl mb-20 tracking-wider max-[870px]:opacity-0 max-[870px]:text-5xl`}
      >
        <h1 className="inline-block">{title}</h1>
      </div>
      <div className="h-[100%] w-[100%] pt-20 flex flex-col justify-between items-center mb-[150px] max-[870px]:flex-col max-[870px]:px-4 ">
        <div className="flex flex-col w-[50%] translate-x-[-10%] max-[870px]:w-full max-[870px]:translate-x-0">
          <h2
            className={`relative inline-block prologue-title__${id} scroll-text__effect leading-relaxed bg-red-800 text-red-500 scale-x-[1] scale-y-[1.2] text-5xl mb-20 tracking-wider text-center opacity-0 max-[870px]:text-center max-[870px]:text-4xl max-[870px]:pb-[2px]`}
          >
            Prologue
          </h2>
          <div className="h-auto w-[100%]">
            <p
              id={`description-game__${id}`}
              className="relative w-[100%] opacity-0 scale-x-[1] scale-y-[1.2] mb-14 scroll-text__effect bg-white text-center text-xl max-[870px]:text-center"
            >
              {description}
            </p>
          </div>
        </div>
        <div
          className={`image-prologue__${id} max-[870px]:w-[100%] max-[870px]:h-[100%] max-[870px]:opacity-0 max-[870px]:flex max-[870px]:pt-14 max-[870px]:flex-col max-[870px]:justify-between max-[870px]:gap-0`}
        >
          <Carousel
            focusOnSelect={true}
            autoPlay={true}
            infinite={true}
            showDots={true}
            className="max-[870px]:w-full max-[870px]:h-full w-full"
            responsive={responsive}
            customLeftArrow={<CustomLeftArrow myOwnStuff="" />}
            customRightArrow={<CustomRightArrow myOwnStuff="" />}
            customDot={<CustomDots />}
          >
            {image_prologue.map((img) => (
              <figure
                key={img.id}
                className="h-[100%] max-h-[300px] translate-x-[10%] w-[70%] max-[870px]:w-[100%] max-[870px]:translate-x-0 max-[870px]:h-[300px] max-[870px]:max-h-none max-[870px]:px-4"
              >
                <Image
                  className={`img-prologue__effect__${id} transition-all duration-100 grayscale-[0] max-[870px]:object-contain`}
                  alt="resident evil 1"
                  src={img.link}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </figure>
            ))}
          </Carousel>
        </div>
        <div
          className={`h-[100%] w-[90%] flex-1 gap-6 flex justify-center items-center image-prologue__${id} opacity-0 pt-20 max-[870px]:hidden`}
        >
          {image_prologue.map((img) => (
            <figure
              key={img.id}
              className="h-[100%] max-h-[300px] w-[70%] max-[870px]:hidden"
            >
              <Image
                className={`img-prologue__effect__${id} img-prologue__effect transition-all duration-100 grayscale-[1] blur-sm hover:grayscale-[0] hover:blur-0 max-[870px]:object-contain`}
                alt="resident evil 1"
                src={img.link}
                onMouseMove={handleMouseMove}
                onMouseOut={handleMouseOut}
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </figure>
          ))}
        </div>
      </div>
      <div
        className={`characters-game__${id} z-[99999] w-[100%] flex flex-col justify-center items-end relative h-auto mb-10 px-4`}
      >
        <div className="w-full text-center">
          <h2
            className={`relative inline-block characters-title__container__${id} scroll-text__effect leading-relaxed bg-red-800 text-red-500 scale-x-[1] scale-y-[1.2] text-5xl mb-20 tracking-wider opacity-0`}
          >
            Characters
          </h2>
        </div>
        <div
          className={`character-select__container__${id} flex flex-row w-full items-center justify-end h-auto max-[870px]:flex-wrap max-[870px]:justify-center`}
        >
          {characters?.map((character) => (
            <CharactersSelect
              character_id={character.id}
              character_name={character.name}
              character_image_complete={character.image_complete}
              character_image_select={character.image_select}
              handleSearchCharacter={handleSearchCharacter}
              characterSelected={characterSelected}
              setCharacterSelected={characterSelected}
              key={character.id}
            />
          ))}
        </div>
      </div>
      <div className="bg-black">
        <InfoCharacter
          characterSelected={characterSelected}
          setCharacterSelected={characterSelected}
          gameId={id}
        />
        <div className="bg-black relative w-full h-[55px] gradient-end__section__end"></div>
        <Epilogue epilogue={epilogue} id={id} />
      </div>
    </article>
  );
};

export default SectionGame;
