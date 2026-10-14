import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
