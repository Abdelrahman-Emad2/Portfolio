import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/config/projects";

export const metadata: Metadata = { title: "Projects | Abdelrahman Emad", description: "AI, computer vision, NLP, and data science projects by Abdelrahman Emad." };

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="mx-auto max-w-page px-5 pb-24 pt-32">
        <SectionHeading title="All projects" subtitle="Filter by area. Descriptions reflect project goals; results are added only when verified." />
        <ProjectsExplorer projects={projects} />
      </main>
      <Footer />
    </>
  );
}
