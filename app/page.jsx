import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex grow flex-col items-center justify-center gap-48 px-5">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
