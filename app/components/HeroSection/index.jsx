import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex w-full flex-col">
      <div className="max-w-lg">
        <h1 className="text-edge-outline font-display animate-title cursor-default whitespace-nowrap bg-zinc-200 bg-clip-text py-5 text-left text-6xl font-bold text-transparent duration-500 sm:text-8xl xl:text-9xl">
          Hello
          <span className="text-primary">.</span>
        </h1>

        <div className="animate-fade-in duration-500">
          <p className="text-lg">
            <span className="text-primary">-</span> I am Michael River Nilsson,
            a frontend developer specializing in React, Next.js, and Tailwind
            CSS.
          </p>

          <Link
            href="#contact"
            className="btn btn-outline btn-primary btn-sm mt-5 rounded border-2 text-lg hover:bg-black hover:text-primary"
          >
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
}
