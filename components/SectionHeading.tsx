export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
    </div>
  );
}
