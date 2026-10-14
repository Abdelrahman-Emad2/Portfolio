import { ExternalLink, BookOpen } from "lucide-react";
import type { Project } from "@/types";
import { GithubIcon } from "./Icons";

function Action({ href, label, icon, primary }: { href?: string; label: string; icon: React.ReactNode; primary?: boolean }) {
  const cls = `btn px-4 py-2 ${primary ? "btn-primary" : "btn-secondary"}`;
  if (!href) return <button type="button" disabled title="Link not added yet" className={`${cls} cursor-not-allowed opacity-50 hover:border-line hover:text-fg`}>{icon}{label}<span className="sr-only"> (link not available yet)</span></button>;
  return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{icon}{label}</a>;
}

export function ProjectCard({ project: p }: { project: Project }) {
  const isNotebook = p.links.notebook !== undefined;
  return (
    <article className="card flex flex-col overflow-hidden transition-colors hover:border-accent/60">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.image.src} alt={p.image.alt} width={800} height={500} loading="lazy" className="aspect-[16/10] w-full object-cover" />
        {p.image.illustrative && <span className="absolute left-3 top-3 rounded-md bg-bg/90 px-2 py-1 text-xs font-medium text-muted">Illustrative image</span>}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies">{p.technologies.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
        <p className="mt-4 text-sm leading-relaxed text-muted">{p.description}</p>
        <ul className="mt-3 list-inside list-disc text-sm text-muted marker:text-accent">{p.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <Action primary href={isNotebook ? p.links.notebook : p.links.demo} label={isNotebook ? "View Notebook" : "View Demo"} icon={isNotebook ? <BookOpen className="h-4 w-4" aria-hidden="true" /> : <ExternalLink className="h-4 w-4" aria-hidden="true" />} />
          <Action href={p.links.repo} label="GitHub" icon={<GithubIcon className="h-4 w-4" />} />
        </div>
      </div>
    </article>
  );
}
