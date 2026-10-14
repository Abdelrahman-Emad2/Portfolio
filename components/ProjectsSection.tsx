import Link from "next/link";
import { projects } from "@/config/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-page px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading title="Featured projects" subtitle="Project goals and scope. Results and links are added once they're ready." />
          <Link href="/projects" className="btn btn-secondary mb-10">View All Projects</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{featured.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
      </div>
    </section>
  );
}
