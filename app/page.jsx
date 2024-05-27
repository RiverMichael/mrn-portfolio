import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-5 items-center px-5 mx-auto py-12 ">
      <div className="mt-24">
        <div className="w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl whitespace-nowrap bg-clip-text text-center py-5 text-wrap">
          Michael River Nilsson
        </h1>
        <div className="w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      </div>
      <div className="flex flex-col items-center justify-between grow mb-24">
        <div className="text-zinc-200 animate-fade-in">
          <h1 className="text-xl">New portfolio is coming soon.</h1>
          <p>
            Meanwhile, feel free to check out the{" "}
            <Link href="https://www.github.com/rivermichael" target="_blank" className="text-zinc-500">
              GitHub page
            </Link>
            .
          </p>
        </div>

        <div className="flex gap-10 items-center animate-fade-in">
          <Link href="https://www.vercel.com" target="_blank">
            <Image src="/vercel.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} />
          </Link>
          <Link href="https://www.nextjs.org" target="_blank">
            <Image src="/next.svg" alt="NextJS Logo" className="dark:invert" width={100} height={24} />
          </Link>
        </div>
      </div>
    </main>
  );
}
