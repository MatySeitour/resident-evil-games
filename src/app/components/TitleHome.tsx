import { gsap } from "gsap";
import { url } from "inspector";
import { useEffect } from "react";
import SplitType from "split-type";

export default function TitleHome() {
  useEffect(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 800px)", () => {
      gsap.registerPlugin(SplitType);
      const myText = new SplitType("#title-home");
      const archiveText = new SplitType("#archives-title");

      gsap.from("#title-home .char", {
        x: 0,
        stagger: 0.05,
        opacity: 0,
        duration: 0.1,
        delay: 2,
      });

      gsap.from("#archives-title .char", {
        x: 0,
        stagger: 0.03,
        opacity: 0,
        duration: 0.1,
        delay: 3,
      });
    });
    mm.add("(max-width: 800px)", () => {
      gsap.from("#title-home", {
        opacity: 0,
        duration: 1,

        delay: 2.1,
      });
      gsap.from("#archives-title", {
        opacity: 0,
        duration: 1,
        delay: 3.5,
      });
    });
  }, []);

  return (
    <div className="w-[auto] h-auto absolute top-[60%] translate-y-[-60%] left-0 pl-4 z-[100] max-[870px]:top-[50%] max-[870px]:translate-y-[-50%] max-[870px]:px-2">
      <div className="title-container background-details__title overflow-hidden relative flex justify-center items-center flex-col">
        <h1
          id="title-home"
          className="scale-x-[1] scale-y-[1.2] text-4xl mb-2 tracking-wider text__effect text-center max-[870px]:mb-4"
        >
          RESIDENT EVIL{" "}
          <b className="title-archives__effect text-center">ARCHIVES</b>
        </h1>
        <h2
          id="archives-title"
          className="inline-block scale-x-[1] scale-y-[1.2] tracking-wider title-archives__effect pb-2"
        >
          A <b className="text__effect__test">fan</b> website about all{" "}
          <b className="text__effect__test">re</b>sident evil{" "}
          <b className="text__effect__test">games</b>
        </h2>
      </div>
    </div>
  );
}
