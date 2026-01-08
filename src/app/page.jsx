import Image from "next/image";
import HeroSection from "@/components/HeroSection/HeroSection";
import CaseStudySection from "@/components/CaseStudySection/caseStudySection";
import TeamSection from "@/components/TeamSection/TeamSection";
import About from "@/components/About/About";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <About/>
      <CaseStudySection/>
      <TeamSection/>
    </div>
  );
}
