import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex grow flex-col items-center justify-center px-5">
      <div className="animate-glow h-px w-screen animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
      <h1 className="text-edge-outline font-display z-10 animate-title cursor-default whitespace-nowrap text-wrap bg-white bg-clip-text py-5 text-center text-4xl text-transparent duration-1000 sm:text-6xl xl:text-8xl">
        Michael River Nilsson
      </h1>
      <div className="animate-glow h-px w-screen animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
      <div className="animate-fade-in text-zinc-200">
        <p className="text-center">
          New portfolio is coming soon. Meanwhile, check out my{" "}
          <Link
            href="https://www.github.com/rivermichael"
            target="_blank"
            className="text-zinc-500 transition-all duration-300 ease-in-out hover:text-zinc-700"
          >
            GitHub profile
          </Link>
          .
        </p>
      </div>

      <div className="mt-20 flex animate-fade-in items-center justify-center gap-10">
        <Link href="https://www.vercel.com" target="_blank">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="invert"
            width={100}
            height={24}
          />
        </Link>
        <Link href="https://www.nextjs.org" target="_blank">
          <Image
            src="/next.svg"
            alt="NextJS Logo"
            className="invert"
            width={100}
            height={24}
          />
        </Link>
      </div>
    </main>
  );
}
