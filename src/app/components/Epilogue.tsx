import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

interface PropEpilogue {
  epilogue: string;
  id: number;
}

const Epilogue = ({ epilogue, id }: PropEpilogue) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // `.line-right__epilogue__${id}`;

    // epilogueTitle.forEach((title: any, i: number) => {
    //   gsap.to(title, {
    //     scrollTrigger: {
    //       trigger: title,
    //       toggleActions: "play none none none",
    //       //   markers: true,
    //       start: "0px center",

    //       end: "0px center",
    //     },
    //     opacity: 1,
    //     duration: 0.5,
    //   });
    // });
    // lineRightEpilogue.forEach((title: any, i: number) => {
    //   gsap.to(title, {
    //     scrollTrigger: {
    //       trigger: title,
    //       toggleActions: "play none none none",
    //       start: "0px center",

    //       end: "0px center",
    //     },
    //     width: "40%",
    //     duration: 0.5,
    //   });
    // });

    // lineLeftEpilogue.forEach((title: any, i: number) => {
    //   gsap.to(title, {
    //     scrollTrigger: {
    //       trigger: title,
    //       toggleActions: "play none none none",
    //       markers: true,
    //     },
    //     width: "40%",
    //     duration: 0.5,
    //   });
    // });
  }, []);

  return (
    <div className="bg-black h-[auto] w-full pb-10 flex flex-col justify-center items-center gap-4">
      <h5
        className={`relative epilogue_title__${id} text-epilogue__effect leading-relaxed bg-red-700 text-red-500 opacity-0 scale-x-[1] scale-y-[1.2] text-5xl tracking-wider opacity-1 max-[870px]:text-center max-[870px]:text-4xl max-[870px]:pb-[2px]`}
      >
        Epilogue
      </h5>
      <div
        className={`lines__container__${id} h-14 w-full bg-black flex justify-evenly items-center`}
      >
        <span
          className={`line-left__epilogue__${id} h-[2px] w-[0%] bg-red-800 will-change-auto`}
        ></span>
        <div className="h-full w-[auto] flex justify-center items-center">
          <Image
            className="animate-spin opacity-0 umbrella-epilogue"
            src={"/umbrella-epilogue.png"}
            alt="umbrella-epilogue"
            width={48}
            height={48}
          />
        </div>
        <span
          className={`line-right__epilogue__${id} h-[2px] w-[0%] bg-red-800 will-change-auto`}
        ></span>
      </div>
      <div
        className={`flex w-[100%] text-epilogue__container__${id} justify-center items-center pr-3 pl-3 max-[870px]:h-[300px] max-[870px]:overflow-hidden max-[870px]:inline-block max-[870px]:pb-[24px]`}
      >
        <p className="text-center text-epilogue relative w-[100%] opacity-0 text-epilogue__effect mb-4 scale-x-[1] scale-y-[1.2] pr-2 bg-white text-xl max-[870px]:text-center pt-4 max-[870px]:scale-[1] max-[870px]:mb-0 max-[870px]:pr-0">
          {epilogue}
        </p>
      </div>
      <div className="bg-black relative w-full gradient-epilogue__text"></div>
      <div className="h-14 w-full bg-black flex justify-evenly items-center">
        <span
          className={`line-left__epilogue__${id} h-[2px] w-[0%] bg-red-800 will-change-auto`}
        ></span>
        <div className="h-full w-[auto] flex justify-center items-center">
          <Image
            className="animate-spin opacity-0 umbrella-epilogue"
            src={"/umbrella-epilogue.png"}
            alt="umbrella-epilogue"
            width={48}
            height={48}
          />
        </div>
        <span
          className={`line-right__epilogue__${id} h-[2px] w-[0%] bg-red-800 will-change-auto`}
        ></span>
      </div>
    </div>
  );
};

export default Epilogue;
