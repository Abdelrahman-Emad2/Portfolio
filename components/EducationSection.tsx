import { GraduationCap } from "lucide-react";
import { education, internships, coursework, certifications, teamProjects, achievements } from "@/config/education";
import type { TimelineItem } from "@/types";
import { SectionHeading } from "./SectionHeading";

function Group({ title, items }: { title: string; items: TimelineItem[] }) {
  if (!items.length) return null;
  return (
    <div className="card p-5">
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-3 space-y-3 text-sm">
        {items.map((i) => (
          <li key={i.title}><p className="font-medium">{i.title}{i.org && <span className="text-muted"> · {i.org}</span>}</p>{i.dates && <p className="text-muted">{i.dates}</p>}{i.description && <p className="mt-1 text-muted">{i.description}</p>}</li>
        ))}
      </ul>
    </div>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="border-t border-line">
      <div className="mx-auto max-w-page px-5 py-20">
        <SectionHeading title="Education and experience" />
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((e) => (
            <div key={e.institution} className="card flex gap-4 p-5 md:col-span-2">
              <GraduationCap className="mt-1 h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <h3 className="font-semibold">{e.degree}{e.specialization && `, ${e.specialization}`}</h3>
                <p className="text-muted">{e.institution}</p>
                {e.location && <p className="text-sm text-muted">{e.location}</p>}
                {e.dates && <p className="mt-1 text-sm text-accent">{e.dates}</p>}
              </div>
            </div>
          ))}
          <Group title="Internships" items={internships} />
          <Group title="Certifications" items={certifications} />
          <Group title="Team projects" items={teamProjects} />
          <Group title="Technical achievements" items={achievements} />
          {coursework.length > 0 && (
            <div className="card p-5"><h3 className="font-semibold">Relevant coursework</h3><ul className="mt-3 flex flex-wrap gap-2">{coursework.map((c) => <li key={c} className="chip">{c}</li>)}</ul></div>
          )}
        </div>
      </div>
    </section>
  );
}
