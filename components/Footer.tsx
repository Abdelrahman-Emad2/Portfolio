import Link from "next/link";
import { navLinks, site } from "@/config/site";
import { Monogram } from "./Logo";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row">
        <div className="flex items-center gap-3"><Monogram /><p className="text-sm text-muted">&copy; {new Date().getFullYear()} {site.name}</p></div>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted">
          {navLinks.map((l) => <Link key={l.id} href={`/#${l.id}`} className="hover:text-fg">{l.label}</Link>)}
        </nav>
        <div className="flex gap-2"><SocialLinks /></div>
      </div>
    </footer>
  );
}
