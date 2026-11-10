import { SiteInteractions } from "@/components/interactions/SiteInteractions";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { AboutSection } from "@/components/sections/About/AboutSection";
import { ContactSection } from "@/components/sections/Contact/ContactSection";
import { HeroSection } from "@/components/sections/Hero/HeroSection";
import { ProjectsSection } from "@/components/sections/Projects/ProjectsSection";
import { ServicesSection } from "@/components/sections/Services/ServicesSection";
import { TechStackSection } from "@/components/sections/TechStack/TechStackSection";
import { ValuesSection } from "@/components/sections/Values/ValuesSection";

export default function Home() {
  return (
    <main>
      <SiteInteractions />
      <Header />
      <HeroSection />
      <ValuesSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <TechStackSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
