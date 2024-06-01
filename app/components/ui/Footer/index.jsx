import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto flex animate-fade-in-sections flex-wrap-reverse items-center justify-between gap-x-8 gap-y-4 p-5 duration-500">
      <p className="text-center text-sm">
        Copyright &copy; 2024 |{" "}
        <Link href="mailto:mrn@michaelriver.dev" className="link">
          Michael River Nilsson
        </Link>
      </p>

      <div className="flex items-center gap-2">
        <span className="text-sm">Built with</span>
        <Link
          href="https://nextjs.org"
          target="_blank"
          className="transition-all duration-200 ease-in-out hover:scale-90"
        >
          <Image
            src="/nextjs.svg"
            alt="Next js"
            width={30}
            height={30}
            className="invert"
          />
        </Link>
        <Link
          href="https://tailwindcss.com"
          target="_blank"
          className="transition-all duration-200 ease-in-out hover:scale-90"
        >
          <Image
            src="/tailwind.svg"
            alt="Tailwind CSS"
            width={30}
            height={30}
            className=""
          />
        </Link>
      </div>
    </footer>
  );
}
