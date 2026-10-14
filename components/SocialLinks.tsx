import { Mail } from "lucide-react";
import { site } from "@/config/site";
import { GithubIcon, LinkedinIcon } from "./Icons";

/** Renders only the links that are configured, so nothing points nowhere. */
export function SocialLinks({ includeEmail = false }: { includeEmail?: boolean }) {
  const ext = { target: "_blank", rel: "noopener noreferrer", className: "icon-link" } as const;
  return (
    <>
      {site.github && <a href={site.github} aria-label="GitHub profile" {...ext}><GithubIcon /></a>}
      {site.linkedin && <a href={site.linkedin} aria-label="LinkedIn profile" {...ext}><LinkedinIcon /></a>}
      {includeEmail && site.email && <a href={`mailto:${site.email}`} aria-label="Send an email" className="icon-link"><Mail className="h-5 w-5" aria-hidden="true" /></a>}
    </>
  );
}
