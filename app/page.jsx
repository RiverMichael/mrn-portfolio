import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 mx-auto">
      <div className="w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl whitespace-nowrap bg-clip-text text-center text-wrap py-5">
        Michael River Nilsson
      </h1>
      <div className="w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="text-zinc-200 animate-fade-in">
        <p className="text-center">
          New portfolio is coming soon. Meanwhile, check out my{" "}
          <Link href="https://www.github.com/rivermichael" target="_blank" className="text-zinc-500 hover:text-zinc-700 transition-all duration-300 ease-in-out">
            GitHub profile
          </Link>
          .
        </p>
      </div>

      <div className="flex gap-10 items-center justify-center animate-fade-in mt-20">
        <Link href="https://www.vercel.com" target="_blank">
          <Image src="/vercel.svg" alt="Vercel Logo" className="invert" width={100} height={24} />
        </Link>
        <Link href="https://www.nextjs.org" target="_blank">
          <Image src="/next.svg" alt="NextJS Logo" className="invert" width={100} height={24} />
        </Link>
      </div>
    </main>
  );
}
