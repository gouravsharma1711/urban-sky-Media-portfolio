import Image from "next/image";
import HeroSection from "@/components/HeroSection/HeroSection";
import CaseStudySection from "@/components/CaseStudySection/caseStudySection";
import TeamSection from "@/components/TeamSection/TeamSection";
import About from "@/components/About/About";
import Contacts from '@/components/Contacts/page.jsx'

import Logo from '@/components/Logo/Logo.jsx';

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <About/>
      <Logo/>
      <CaseStudySection/>
      <TeamSection />
      <Contacts/>
    </div>
  );
}
