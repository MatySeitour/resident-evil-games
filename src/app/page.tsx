"use client";

import TitleHome from "@/app/components/TitleHome";
import Image from "next/image";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { gsap } from "gsap";
import ScrollSection from "./components/ScrollSection";
export default function Home() {
  const [loadingPageState, setLoadingPageState] = useState<boolean>(true);

  useEffect(() => {
    // setTimeout(() => {
    setLoadingPageState(false);
    // }, 2000);
  }, []);

  useEffect(() => {
    gsap.to(".element-up", {
      x: 0,
      stagger: 0.05,
      opacity: 1,
      duration: 0.5,
      delay: 6,
    });
  }, []);

  return (
    <main className="min-w-screen min-h-screen flex-col items-center justify-center">
      {/* <Nav /> */}
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
        className="min-h-screen background-home min-w-screen relative flex justify-end items-end bg-black overflow-hidden"
      >
        <TitleHome />
        <div className="h-[50px] z-[100] text-3xl inline-block absolute top-[60%] translate-y-[-60%] opacity-0 right-[10%] max-[700px]:bottom-[0%] max-[700px]:top-auto max-[700px]:translate-y-[100%] max-[700px]:right-[50%] max-[700px]:translate-x-[50%] element-up max-[700px]:text-base">
          <p className="mb-2 tracking-wide text-white scroll-text__effect bg-white">
            SCROLL TO START
          </p>
          <div className="w-auto h-auto flex flex-col justify-center items-center arrow-scroll__home">
            <span className="w-[16px] h-[16px] border-b-2 border-r-2 rotate-[45deg] border-white inline-block max-[700px]:w-[10px] max-[700px]:h-[10px]"></span>
            <span className="w-[16px] h-[16px] border-b-2 border-r-2 rotate-[45deg] border-white inline-block max-[700px]:w-[10px] max-[700px]:h-[10px]"></span>
            <span className="w-[16px] h-[16px] border-b-2 border-r-2 rotate-[45deg] border-white inline-block max-[700px]:w-[10px] max-[700px]:h-[10px] max-[700px]:hidden"></span>
          </div>
        </div>
      </div>
      <ScrollSection />
    </main>
  );
}
