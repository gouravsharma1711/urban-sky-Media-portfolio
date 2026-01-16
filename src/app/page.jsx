import Image from "next/image";
import HeroSection from "@/components/HeroSection/HeroSection";
import CaseStudySection from "@/components/CaseStudySection/caseStudySection";
import TeamSection from "@/components/TeamSection/TeamSection";
import About from "@/components/About/About";
import Contacts from '@/components/Contacts/page.jsx'
import BrandIntro from "@/components/BrandIntro/BrandIntro";
import Logo from '@/components/Logo/Logo.jsx';

export default function Home() {
  return (
    <div>
      <BrandIntro/>
      <HeroSection/>
      <About/>
      <CaseStudySection/>
      <TeamSection />
      <Contacts/>
    </div>
  );
}
