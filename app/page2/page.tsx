import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        </div>
      </div>

      <div className="
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
      z-[-1]"
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

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-flex lg:mb-0 lg:grid-cols-2 lg:text-left">
        <a
          href="/page3/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          Curious Mathematician{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Armed with a passion for numbers and patterns, this character delves into the mysteries of an imaginary world
          </p>
        </a>

        <a
          href="/page3/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          Innovative Scientist{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          This character is driven by an insatiable curiosity about how things work, blending a deep knowledge of physics and chemistry
          </p>
        </a>

        <a
          href="/page3/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          Wise Biologist{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Venturing through lush forests and mysterious underwater realms, this character's expertise in biology illuminates the interconnected web of life
          </p>
        </a>

        <a
          href="/page3/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          Resourceful Historian{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          This character possesses a profound connection to the past, wielding knowledge of history and archaeology to decode the lore and legends
          </p>
        </a>
      </div>

      <div className="flex w-full max-w-md items-center space-x-2">
        <div className="grid w-full grid-cols-3 gap-1">
          <input
            type="text"
            placeholder="Get your own story..."
            className="col-span-2"

          />

          <a
            href="/page3/" // Make sure this href is correct for your "continue" button
            className="col-span-1 w-full justify-center items-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2 text-black transition-colors hover:bg-white
            "
          >
            Continue
          </a>
        </div>
      </div>
    </main>
  );
}
