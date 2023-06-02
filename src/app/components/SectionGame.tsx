import { useEffect, useState, useRef } from "react";
import getGames from "../../utils/games.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import Image from "next/image";
import CharactersSelect from "./CharactersSelect";
import InfoCharacter from "./InfoCharacter";
import Epilogue from "./Epilogue";
import useIntersection from "../hooks/useIntersection";

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
  other_games?: {}[];
}

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
}: Props) => {
  const element = useRef(null);
  const screen = useIntersection(element);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitType);
    let mm = gsap.matchMedia();

    if (screen != 0) {
      console.log(screen);
      const title = document.querySelector(`.game-title__${screen}`);
      const titleSplit = new SplitType(`.game-title__${screen}`);
      gsap.from(`.game-title__${screen} .char`, {
        scrollTrigger: {
          trigger: `.game-title__${screen} .char`,
          toggleActions: "play none none none",
          start: "top center",
          // markers: true,
          end: "600px center",
        },
        x: 0,
        stagger: 0.05,
        opacity: 0,
        duration: 0.1,
        delay: 0,
      });

      const epilogueTitle = gsap.utils.toArray(`.epilogue_title__${screen}`);
      const umbrellaEpilogue = gsap.utils.toArray(
        `.umbrella-epilogue__${screen}`
      );
      const textEpilogue = gsap.utils.toArray(`.text-epilogue__${screen}`);
      // const textEpilogueContainer = gsap.utils.toArray(
      //   ".text-epilogue__container"
      // );
      const lineLeftEpilogue = gsap.utils.toArray(
        `.line-left__epilogue__${screen}`
      );
      const lineRightEpilogue = gsap.utils.toArray(
        `.line-right__epilogue__${screen}`
      );

      epilogueTitle.forEach((title: any, i: number) => {
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

      textEpilogue.forEach((title: any, i: number) => {
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

      lineLeftEpilogue.forEach((line: any, i: number) => {
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

      umbrellaEpilogue.forEach((logo: any, i: number) => {
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

      lineRightEpilogue.forEach((line: any, i: number) => {
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

      mm.add("(min-width: 800px)", () => {
        const imagePrologue = gsap.utils.toArray(`.image-prologue__${screen}`);
        imagePrologue.forEach((image: any, i) => {
          gsap.to(image, {
            scrollTrigger: {
              trigger: image,
              toggleActions: "play none none none",
              // markers: true,
              start: "100px center",

              end: "-100px center",
            },
            opacity: 1,
            xPercent: -2,
            duration: 0.5,
          });
        });

        const descriptionGame = gsap.utils.toArray(
          `#description-game__${screen}`
        );
        descriptionGame.forEach((description: any, i) => {
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

        const characterSelectContainer = gsap.utils.toArray(
          `.characters-game__${screen}`
        );
        characterSelectContainer.forEach((imagesContainer: any, i) => {
          gsap.to(imagesContainer, {
            scrollTrigger: {
              trigger: imagesContainer,
              toggleActions: "play none none none",
              start: "500px center",
              // markers: true,
              // pin: true,
              end: "600px center",
            },
            opacity: 1,
            // xPercent: "-100",
            // yPercent: "100",
            // duration: 0.1,
            // flexDirection: "row",
          });
        });

        const charactersTitleContainer = gsap.utils.toArray(
          `.characters-title__container__${screen}`
        );
        charactersTitleContainer.forEach((title: any, i) => {
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

        const characterSelect = gsap.utils.toArray(".image-character");
        characterSelect.forEach((imageCharacter: any, i) => {
          gsap.to(imageCharacter, {
            scrollTrigger: {
              trigger: imageCharacter,
              toggleActions: "play none none none",
              start: "-140px center",
              // markers: true,
              // pin: true,
              // end: "-200px center",
            },
            opacity: 1,
            duration: 0.5,
          });
        });

        const infoCharactersContainer = gsap.utils.toArray(
          ".info-characters__container"
        );
        infoCharactersContainer.forEach((characterContainer: any) => {
          gsap.to(characterContainer, {
            scrollTrigger: {
              trigger: characterContainer,
              toggleActions: "play none none none",
              start: "-400px center",
              // markers: true,
            },
            opacity: 1,
            duration: 0.5,
          });
        });

        const prologueTitle = gsap.utils.toArray(`.prologue-title__${id}`);
        prologueTitle.forEach((prologue: any) => {
          gsap.to(prologue, {
            scrollTrigger: {
              trigger: prologue,
              toggleActions: "play none none none",
              start: "0px center",
              // markers: true,
            },
            opacity: 1,
            xPercent: "10",

            duration: 0.5,
          });
        });
      });
      mm.add("(max-width: 800px)", () => {
        const gameTitle = gsap.utils.toArray(`.game-title__${screen}`);
        gameTitle.forEach((title: any, i: number) => {
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

        const imagePrologue = gsap.utils.toArray(`.image-prologue__${screen}`);
        imagePrologue.forEach((image: any, i) => {
          gsap.to(image, {
            scrollTrigger: {
              trigger: image,
              toggleActions: "play none none none",
              // markers: true,
              start: "100px center",

              end: "-100px center",
            },
            opacity: 1,
            // xPercent: -10,
            duration: 0.5,
          });
        });

        const descriptionGame = gsap.utils.toArray(
          `#description-game__${screen}`
        );
        descriptionGame.forEach((description: any, i) => {
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

        const charactersTitleContainer = gsap.utils.toArray(
          `.characters-title__container__${screen}`
        );
        charactersTitleContainer.forEach((title: any, i) => {
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

        const characterSelectContainer = gsap.utils.toArray(
          `.characters-game__${screen}`
        );
        characterSelectContainer.forEach((imagesContainer: any, i) => {
          gsap.to(imagesContainer, {
            scrollTrigger: {
              trigger: imagesContainer,
              toggleActions: "play none none none",
              start: "500px center",
              // markers: true,
              // pin: true,
              end: "600px center",
            },
            // opacity: 1,
            // xPercent: "-100",
            // yPercent: "100",
            // duration: 0.1,
            // flexDirection: "row",
          });
        });

        const characterSelect = gsap.utils.toArray(".image-character");
        characterSelect.forEach((imageCharacter: any, i) => {
          gsap.to(imageCharacter, {
            scrollTrigger: {
              trigger: imageCharacter,
              toggleActions: "play none none none",
              start: "-140px center",
              // markers: true,
              // pin: true,
              // end: "-200px center",
            },
            opacity: 1,
            duration: 0.5,
          });
        });

        const infoCharactersContainer = gsap.utils.toArray(
          ".info-characters__container"
        );
        infoCharactersContainer.forEach((characterContainer: any) => {
          gsap.to(characterContainer, {
            scrollTrigger: {
              trigger: characterContainer,
              toggleActions: "play none none none",
              start: "-400px center",
              // markers: true,
            },
            opacity: 1,
            duration: 0.5,
          });
        });

        const prologueTitle = gsap.utils.toArray(`.prologue-title__${screen}`);
        prologueTitle.forEach((prologue: any) => {
          gsap.to(prologue, {
            scrollTrigger: {
              trigger: prologue,
              toggleActions: "play none none none",
              start: "0px center",
              // markers: true,
            },
            opacity: 1,
            // xPercent: "10",

            duration: 0.5,
          });
        });

        textEpilogue.forEach((title: any, i: number) => {
          gsap.to(title, {
            scrollTrigger: {
              trigger: title,
              toggleActions: "play none none none",
              start: "top center",

              end: "0px center",
            },
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

    // let mm = gsap.matchMedia();
    // mm.add("(min-width: 800px)", () => {
    //   const title = document.querySelector(`.game-title__${id}`);
    //   const titleSplit = new SplitType(`.game-title__${id}`);
    //   gsap.from(`.game-title__${id} .char`, {
    //     scrollTrigger: {
    //       trigger: `.game-title__${id} .char`,
    //       toggleActions: "play none none none",
    //       start: "top center",

    //       end: "600px center",
    //     },
    //     x: 0,
    //     stagger: 0.05,
    //     opacity: 0,
    //     duration: 0.1,
    //     delay: 0,
    //   });
    // });
    // mm.add("(max-width: 800px)", () => {
    //   const gameTitle = gsap.utils.toArray(`.game-title__${id}`);

    //   gameTitle.forEach((title: any, i: number) => {
    //     gsap.to(title, {
    //       scrollTrigger: {
    //         trigger: title,
    //         toggleActions: "play none none none",
    //         start: "-100px center",

    //         end: "-100px center",
    //       },
    //       opacity: 1,
    //       duration: 0.5,
    //     });
    //   });

    //   textEpilogue.forEach((title: any, i: number) => {
    //     gsap.to(title, {
    //       scrollTrigger: {
    //         trigger: title,
    //         toggleActions: "play none none none",
    //         start: "top center",

    //         end: "0px center",
    //       },
    //       opacity: 1,
    //       duration: 0.5,
    //       onComplete: () => {
    //         const textContainer = document.querySelector(
    //           `.text-epilogue__container__${i + 1}`
    //         );
    //         textContainer?.classList.add("overflow-epilogue__active");
    //       },
    //     });
    //   });

    //   const charactersTitleContainer = gsap.utils.toArray(
    //     `.characters-title__container`
    //   );
    //   charactersTitleContainer.forEach((title: any, i) => {
    //     gsap.to(title, {
    //       scrollTrigger: {
    //         trigger: title,
    //         toggleActions: "play none none none",
    //         start: "-100px center",

    //         end: "-100px center",
    //       },
    //       opacity: 1,
    //       duration: 0.5,
    //     });
    //   });
    // });
  }, [screen]);

  const [characterSelected, setCharacterSelected] =
    useState<CharacterSelected>();

  useEffect(() => {
    if (!characterSelected?.id) {
      setCharacterSelected(characters[0]);
    }
  }, []);

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

  const handleMouseOut = (evt: any) => {
    evt.target.style.transform = `
       perspective(500px)
         scale(1)
         rotateX(0)
         rotateY(0)
         `;
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
          className={`h-[100%] w-[90%] flex-1 gap-6 flex justify-center items-center image-prologue__${id} opacity-0 pt-20 max-[870px]:w-[320px] max-[870px]:pt-14 max-[870px]:flex-col max-[870px]:justify-between max-[870px]:gap-0`}
        >
          {image_prologue.map((img) => (
            <figure
              key={img.id}
              className="h-[100%] max-h-[300px] translate-x-[10%] w-[70%] max-[870px]:w-[100%] max-[870px]:translate-x-0 max-[870px]:h-[300px] max-[870px]:max-h-none"
            >
              <Image
                className={`img-prologue__effect__${id} transition-all duration-100 grayscale-[1] hover:grayscale-[0] max-[870px]:object-contain`}
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
            className={`relative inline-block characters-title__container__${id} scroll-text__effect bg-red-800 text-red-800 scale-x-[1] scale-y-[1.2] text-4xl mb-20 tracking-wider opacity-0`}
          >
            Characters
          </h2>
        </div>
        <div className="flex flex-row w-full items-center justify-end h-auto max-[870px]:flex-wrap max-[870px]:justify-center">
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
        />
        <div className="bg-black relative w-full h-[55px] gradient-end__section__end"></div>
        <Epilogue epilogue={epilogue} id={id} />
      </div>
    </article>
  );
};

export default SectionGame;
