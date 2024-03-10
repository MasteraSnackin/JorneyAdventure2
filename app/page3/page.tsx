"use client";
import Image from "next/image";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import React from "react";
import { SparklesCore } from "@/app/components/ui/sparkles";
 
const words = `Your calculations are correct. The rate of fuel consumption is 1/8 tank per hour, which means you have enough fuel for a safe landing and exploration. As you gently land on the surface of Titan, the door of the spacecraft opens, revealing a breathtaking landscape filled with lakes of liquid methane and ethane. With limited time before you need to return to Earth, you decide to explore one of two nearby features: a mysterious cave formation to the north, believed to contain ice volcanoes, or a vast, seemingly bottomless methane lake to the south, rumored to hide secrets beneath its mirror-like surface. Which do you choose to explore?
`;
 
export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}

export default function Home() {
  return (
    <main className="sparkles-container flex min-h-screen flex-col items-center justify-between p-24">

      {/* Core component */}
        
    

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        </div>
      </div>

      

      <div className="
      sparkles-container
      relative
      flex
      place-items-center
      before:absolute
      before:h-[300px]
      before:w-full
      sm:before:w-[480px]
      before:-translate-x-1/2
      before:rounded-full
      before:bg-gradient-radial
      before:from-white
      before:to-transparent
      before:blur-2xl
      before:content-['']
      after:absolute
      after:-z-20
      after:h-[180px]
      after:w-full
      sm:after:w-[240px]
      after:translate-x-1/3
      after:rounded-full
      after:bg-gradient-conic
      after:from-sky-200
      after:via-blue-200
      after:blur-2xl
      after:content-['']
      before:dark:bg-gradient-to-br
      before:dark:from-transparent
      before:dark:to-red-700
      before:dark:opacity-10
      after:dark:from-sky-900
      after:dark:via-[#756598]
      after:dark:opacity-40
      before:lg:h-[360px]
      z-[-1]
      "
      >
        
        

        <Image
          className="invert-override relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/logo2.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />     

      </div>


        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-flex lg:mb-0 lg:grid-cols-1 lg:text-center">
          <TextGenerateEffectDemo />
        </div>


      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-flex lg:mb-0 lg:grid-cols-2 lg:text-left">
        <a
          href="/page2/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >

            
            
          <h2 className={`mb-3 text-2xl font-semibold`}>
          Investigate the cave formation{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Who knows what monsters you encounter!
          </p>
        </a>

        <a
          href="/page3/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          Explore the methane lake{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Your laboratory need new data to analyze
          </p>
        </a>
      </div>
    </main>
  );
}
