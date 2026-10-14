import Link from "next/link";
import { Download } from "lucide-react";
import { site } from "@/config/site";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand/10 blur-3xl" aria-hidden="true" />
      <div className="mx-auto grid max-w-page items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="text-lg text-muted">Hi, I&apos;m</p>
          <h1 className="mt-1 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {site.firstName} <span className="text-accent">{site.surname}</span>
          </h1>
          <p className="mt-4 text-xl font-medium">{site.role}</p>
          <p className="mt-5 max-w-lg leading-relaxed text-muted">{site.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#projects" className="btn btn-primary">View My Projects</Link>
            {site.cv.available && (
              <a href={site.cv.path} download className="btn btn-secondary"><Download className="h-4 w-4" aria-hidden="true" />Download CV</a>
            )}
          </div>
          <div className="mt-8 flex gap-2"><SocialLinks includeEmail /></div>
        </div>
        <figure className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-workstation.svg" width={1200} height={900} alt="Illustration of an AI developer at a multi-monitor workstation in a dark room at night" className="w-full rounded-2xl border border-line" fetchPriority="high" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-bg via-transparent to-transparent" aria-hidden="true" />
          <figcaption className="absolute bottom-4 left-5 text-base font-semibold text-white sm:text-lg">{site.tagline}</figcaption>
        </figure>
      </div>
    </section>
  );
}
