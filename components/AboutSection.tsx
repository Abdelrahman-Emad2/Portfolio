import { site } from "@/config/site";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-page gap-10 px-5 py-20 lg:grid-cols-[2fr_1fr]">
        <div>
          <SectionHeading title="About me" />
          <div className="max-w-prose space-y-4 leading-relaxed text-muted">{site.about.map((t) => <p key={t}>{t}</p>)}</div>
        </div>
        <div className="card self-start p-5">
          <h3 className="font-semibold">Focus areas</h3>
          <ul className="mt-3 flex flex-wrap gap-2">{site.traits.map((t) => <li key={t} className="chip text-sm text-fg">{t}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
