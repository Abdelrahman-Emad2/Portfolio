"use client";
import { useState } from "react";
import { skillGroups } from "@/config/skills";
import { SectionHeading } from "./SectionHeading";

export function SkillsSection() {
  const [group, setGroup] = useState("all");
  const shown = group === "all" ? skillGroups : skillGroups.filter((g) => g.id === group);
  return (
    <section id="skills" className="border-t border-line">
      <div className="mx-auto max-w-page px-5 py-20">
        <SectionHeading title="Skills and technologies" subtitle="Tools I've used in coursework and projects." />
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter skills">
          {[{ id: "all", title: "All" }, ...skillGroups].map((g) => (
            <button key={g.id} type="button" onClick={() => setGroup(g.id)} aria-pressed={group === g.id}
              className={`rounded-lg border px-3 py-1.5 text-sm transition-colors ${group === g.id ? "border-brand bg-brand text-white" : "border-line text-muted hover:border-accent hover:text-fg"}`}>{g.title}</button>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((g) => (
            <div key={g.id} className="card p-5">
              <h3 className="font-semibold">{g.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">{g.skills.map((s) => <li key={s} className="chip text-sm text-fg">{s}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
