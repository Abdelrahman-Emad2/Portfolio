"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/config/site";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { SocialLinks } from "./SocialLinks";

export function Navbar() {
  const pathname = usePathname();
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (pathname !== "/") { setActive(pathname.startsWith("/projects") ? "projects" : ""); return; }
    const els = navLinks.map((l) => document.getElementById(l.id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const link = (id: string, label: string, mobile = false) => (
    <Link key={id} href={`/#${id}`} onClick={() => setOpen(false)} aria-current={active === id ? "page" : undefined}
      className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${mobile ? "block" : ""} ${active === id ? "text-accent" : "text-muted hover:text-fg"}`}>
      {label}
    </Link>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-page items-center justify-between px-5" aria-label="Main">
        <Logo />
        <div className="hidden items-center gap-1 md:flex">{navLinks.map((l) => link(l.id, l.label))}</div>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 sm:flex"><SocialLinks /></div>
          <ThemeToggle />
          <button type="button" className="icon-link md:hidden" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-bg px-5 pb-4 pt-2 md:hidden">
          {navLinks.map((l) => link(l.id, l.label, true))}
          <div className="mt-3 flex gap-2 sm:hidden"><SocialLinks /></div>
        </div>
      )}
    </header>
  );
}
