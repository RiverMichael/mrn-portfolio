import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5 pt-24 bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div>
        <h1 className="text-2xl text-zinc-200">
          New portfolio for <span className=" text-zinc-500">Michael River Nilsson</span> is coming soon.
        </h1>
        <p>
          Meanwhile, feel free to check out the{" "}
          <Link href="https://www.github.com/rivermichael" target="_blank" className="text-zinc-500">
            GitHub page
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
