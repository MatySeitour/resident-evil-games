import { gsap } from "gsap";
import { url } from "inspector";
import { useEffect } from "react";
import SplitType from "split-type";

export default function TitleHome() {
  useEffect(() => {
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
      delay: 4,
    });
  }, []);

  return (
    <div className="w-[auto] h-auto absolute top-[60%] translate-y-[-60%] left-0 pl-4 z-[100]">
      <div className="title-container background-details__title overflow-hidden relative">
        <h1
          id="title-home"
          className="text-white scale-x-[1] scale-y-[1.2] text-4xl mb-2 tracking-wider"
        >
          RESIDENT EVIL ARCHIVES
        </h1>
        <h2
          id="archives-title"
          className="inline-block text-white scale-x-[1] scale-y-[1.2]"
        >
          A fan website about all resident evil games
        </h2>
      </div>
    </div>
  );
}
