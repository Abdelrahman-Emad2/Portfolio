"use client";
import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/types";
import { ProjectCard } from "./ProjectCard";

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const categories = useMemo(() => Array.from(new Set(projects.flatMap((p) => p.categories))) as ProjectCategory[], [projects]);
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {(["All", ...categories] as const).map((c) => (
          <button key={c} type="button" onClick={() => setFilter(c)} aria-pressed={filter === c}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${filter === c ? "border-brand bg-brand text-white" : "border-line text-muted hover:border-accent hover:text-fg"}`}>{c}</button>
        ))}
      </div>
      {shown.length === 0 ? (
        <p className="card p-8 text-center text-muted">No projects in this category yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" aria-live="polite">{shown.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
      )}
    </>
  );
}
