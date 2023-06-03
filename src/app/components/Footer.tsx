import Image from "next/image";
import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import useIntersection from "../hooks/useIntersection";

const Footer = () => {
  const element = useRef(null);
  const screen = useIntersection(element);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitType);

    if (screen == 9) {
      console.log("enter");
      const footerText = new SplitType(".footer-text");
      const thanksText = new SplitType(".thanks-text");

      const itemsFooter = gsap.utils.toArray(".item-footer");
      itemsFooter.forEach((item: any) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            toggleActions: "play none none none",
            start: "-50px center",
          },
          x: 0,
          stagger: 0.05,
          opacity: 0,
          duration: 0.5,
          delay: 1.5,
        });
      });

      gsap.from(".footer-text .char", {
        scrollTrigger: {
          trigger: `.footer-text .char`,
          toggleActions: "play none none none",
          start: "top center",
        },
        x: 0,
        stagger: 0.05,
        opacity: 0,
        duration: 0.1,
      });

      gsap.from(".thanks-text .char", {
        scrollTrigger: {
          trigger: `.thanks-text .char`,
          toggleActions: "play none none none",
          start: "top center",
        },
        x: 0,
        stagger: 0.05,
        opacity: 0,
        delay: 1,
        duration: 0.1,
      });
    }
  }, [screen]);

  return (
    <div className="h-screen w-full relative footer-gradient__effect flex justify-center items-center">
      <div
        id="9"
        ref={element}
        className="w-auto h-auto flex flex-col justify-center items-center text-center"
      >
        <h6
          className={`footer-text ${
            screen ? "opacity-1" : `opacity-0`
          } flex justify-center items-center scale-x-[1] scale-y-[1.2] text-5xl mb-6 tracking-wider text__effect text-center max-[870px]:mb-4`}
        >
          THE END?
        </h6>
        <p className="thanks-text  scale-x-[1] scale-y-[1.2] tracking-wider title-archives__effect pb-2 mb-6 text-center w-full max-[870px]:w-auto">
          Thanks for watching :D
        </p>

        <div className="w-auto h-auto flex flex-row">
          <a
            href="https://www.linkedin.com/in/matias-seitour-1a0118240/"
            target="_blank"
            className="relative w-[50px] h-[50px] overflow-hidden m-2 item-footer"
          >
            <Image
              src={"/icons8-linkedin-50.png"}
              height={50}
              width={50}
              alt="linkedIn"
            />
          </a>
          <a
            href="https://twitter.com/MatySeitour"
            target="_blank"
            className="relative w-[50px] h-[50px] overflow-hidden m-2 item-footer"
          >
            <Image
              src={"/icons8-twitter-240.png"}
              height={50}
              width={50}
              alt="linkedIn"
            />
          </a>
          <a
            href="https://github.com/MatySeitour"
            target="_blank"
            className="relative w-[50px] h-[50px] overflow-hidden m-2 item-footer"
          >
            <Image
              src={"/icons8-git-240.png"}
              height={50}
              width={50}
              alt="linkedIn"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
