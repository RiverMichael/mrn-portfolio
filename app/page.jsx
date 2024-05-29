import Link from "next/link";
import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex grow flex-col items-center justify-center px-5">
      <HeroSection />
    </main>
  );
}
