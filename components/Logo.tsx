import Link from "next/link";
import { site } from "@/config/site";

export function Monogram({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-lg border-2 border-brand bg-bg text-sm font-bold text-fg ${className}`} aria-hidden="true">
      A<span className="text-accent">R</span>
    </span>
  );
}

export function Logo() {
  return (
    <Link href="/#home" className="flex items-center gap-3 rounded-lg" aria-label={`${site.name}, home`}>
      <Monogram />
      <span className="hidden text-sm font-semibold sm:inline">{site.name}</span>
    </Link>
  );
}
