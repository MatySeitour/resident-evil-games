"use client";

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
        <div className="w-screen h-screen fixed flex justify-center bg-black">
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
      <div className="bg-white min-h-screen min-w-screen"></div>
    </main>
  );
}
