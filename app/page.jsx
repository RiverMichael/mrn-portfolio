import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import PortfolioSection from "./components/PortfolioSection";

export default function Home() {
  return (
    <main className="my-12 flex grow flex-col items-center justify-center gap-48 px-5 md:my-24">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
    </main>
  );
}
