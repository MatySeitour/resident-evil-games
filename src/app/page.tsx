"use client";

import TitleHome from "@/app/components/TitleHome";
import Image from "next/image";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { gsap } from "gsap";
import ScrollSection from "./components/ScrollSection";
export default function Home() {
  /* first load page */
  const [loadingPageState, setLoadingPageState] = useState<boolean>(true);

  useEffect(() => {
    /* when the page load, wait two seconds and setloadingpage in false */

    setTimeout(() => {
      setLoadingPageState(false);
    }, 2000);
    gsap.to(".element-up", {
      stagger: 0.05,
      opacity: 1,
      duration: 0.5,
      delay: 4,
    });
  }, []);

  return (
    <main className="w-screen h-auto flex-col items-center justify-center">
      <div className="background-home relative">
        {loadingPageState && (
          <div className="w-screen h-screen fixed flex justify-center bg-black z-[999]">
            <div className="w-auto h-auto flex flex-col justify-center items-center">
              <figure className="mb-4 w-auto h-auto">
                <Image
                  className="w-[100px] h-[100px] animate-loading animate-loadingImage"
                  width={100}
                  height={100}
                  src={`/loading.png`}
                  alt="loading"
                  priority={true}
                />
              </figure>
              <p className="pl-3 text-3xl tracking-wide text-details bg-white">
                Loading...
              </p>
            </div>
          </div>
        )}
        <div
          // id="section-container"
          className="min-h-screen min-w-screen relative flex justify-end items-end home-container__effect"
        >
          <TitleHome />
          <div className="h-[50px] z-[1000000] text-3xl inline-block absolute top-[60%] translate-y-[-60%] opacity-0 right-[10%] max-[870px]:top-[100%] max-[870px]:translate-y-[-200%] max-[870px]:right-[50%] max-[870px]:translate-x-[50%] element-up max-[870px]:text-base">
            <p className="mb-2 tracking-wide text-white scroll-text__effect bg-white">
              SCROLL TO START
            </p>
            <div className="w-auto h-auto flex flex-col justify-center items-center arrow-scroll__home">
              <span className="w-[16px] h-[16px] border-b-2 border-r-2 rotate-[45deg] border-white inline-block max-[870px]:w-[10px] max-[870px]:h-[10px]"></span>
              <span className="w-[16px] h-[16px] border-b-2 border-r-2 rotate-[45deg] border-white inline-block max-[870px]:w-[10px] max-[870px]:h-[10px]"></span>
              <span className="w-[16px] h-[16px] border-b-2 border-r-2 rotate-[45deg] border-white inline-block max-[870px]:w-[10px] max-[870px]:h-[10px] max-[870px]:hidden"></span>
            </div>
          </div>
        </div>
        <div className="bg-black w-full h-[100px]"></div>
        <ScrollSection />
        <div className="h-screen w-full relative footer-gradient__effect flex justify-center items-center">
          <div className="w-auto h-auto flex flex-col justify-center items-center">
            <h6 className="text-4xl mb-2 tracking-wider text__effect__footer text-center scale-y-[1.2] max-[870px]:mb-10">
              THE END?...
            </h6>
            <p className="tracking-wider text__thanking pb-2 text-center text-2xl mb-4">
              Thanks for watching :D
            </p>

            <div className="w-auto h-auto flex flex-row">
              <figure className="relative w-[50px] h-[50px] overflow-hidden m-2">
                <Image
                  src={"/icons8-linkedin-50.png"}
                  height={50}
                  width={50}
                  // sizes="100%"
                  // style={{
                  //   width: "100%",
                  //   height: "100%",
                  // }}
                  alt="linkedIn"
                />
              </figure>
              <figure className="relative w-[50px] h-[50px] overflow-hidden m-2">
                <Image
                  src={"/icons8-twitter-240.png"}
                  height={50}
                  width={50}
                  // sizes="100%"
                  // style={{
                  //   width: "100%",
                  //   height: "100%",
                  // }}
                  alt="linkedIn"
                />
              </figure>
              <figure className="relative w-[50px] h-[50px] overflow-hidden m-2">
                <Image
                  src={"/icons8-git-240.png"}
                  height={50}
                  width={50}
                  // sizes="100%"
                  // style={{
                  //   width: "100%",
                  //   height: "100%",
                  // }}
                  alt="linkedIn"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
