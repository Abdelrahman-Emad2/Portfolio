"use client";
import { useState } from "react";
import { Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { site } from "@/config/site";
import { SectionHeading } from "./SectionHeading";
import { GithubIcon, LinkedinIcon } from "./Icons";

type Status = "idle" | "sending" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    const v = { name: String(d.get("name") ?? "").trim(), email: String(d.get("email") ?? "").trim(), message: String(d.get("message") ?? "").trim() };
    const errs: Errors = {};
    if (v.name.length < 2) errs.name = "Enter your name.";
    if (!EMAIL_RE.test(v.email)) errs.email = "Enter a valid email address.";
    if (v.message.length < 10) errs.message = "Write at least 10 characters.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(v) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Message could not be sent.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Message could not be sent.");
      setStatus("error");
    }
  }

  const field = "w-full rounded-lg border border-line bg-bg px-3 py-2.5 text-sm placeholder:text-muted/70 focus:border-accent";
  const Err = ({ id, msg }: { id: string; msg?: string }) => (msg ? <p id={id} className="mt-1 text-sm text-red-500">{msg}</p> : null);

  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto grid max-w-page gap-10 px-5 py-20 lg:grid-cols-2">
        <div>
          <SectionHeading title="Contact" subtitle="Open to AI/ML internships and entry-level roles. Send a message or reach out directly." />
          <ul className="space-y-3">
            {site.email && <li><a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 text-muted hover:text-accent"><Mail className="h-5 w-5" aria-hidden="true" />{site.email}</a></li>}
            {site.github && <li><a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-muted hover:text-accent"><GithubIcon />GitHub</a></li>}
            {site.linkedin && <li><a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-muted hover:text-accent"><LinkedinIcon />LinkedIn</a></li>}
          </ul>
        </div>
        <form onSubmit={onSubmit} noValidate className="card space-y-4 p-6" aria-label="Contact form">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">Name</label>
            <input id="name" name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
            <Err id="name-err" msg={errors.name} />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
            <Err id="email-err" msg={errors.email} />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium">Message</label>
            <textarea id="message" name="message" rows={5} className={field} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
            <Err id="message-err" msg={errors.message} />
          </div>
          <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full disabled:opacity-60">
            {status === "sending" ? <><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />Sending</> : "Send message"}
          </button>
          <div aria-live="polite">
            {status === "success" && <p className="flex items-center gap-2 text-sm text-emerald-500"><CheckCircle2 className="h-4 w-4" aria-hidden="true" />Message sent. Thank you.</p>}
            {status === "error" && <p className="flex items-center gap-2 text-sm text-red-500"><AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />{serverError}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
