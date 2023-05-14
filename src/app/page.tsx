"use client";

import TitleHome from "@/app/components/TitleHome";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [loadingPageState, setLoadingPageState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPageState(false);
    }, 2000);
  }, []);

  return (
    <main className="min-w-screen min-h-screen flex-col items-center justify-center">
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
      <div className="min-h-screen background-home min-w-screen relative flex justify-end items-end bg-black">
        <TitleHome />
        {/* <Image
        src={"/image-home.png"}
        alt="zombie hands"
        height={657}
        width={1115}
        className="img-background__home absolute right-0 top-[50%] -translate-y-[50%]"
      /> */}
      </div>
    </main>
  );
}
