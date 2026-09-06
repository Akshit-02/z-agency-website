import { Container } from "@/components/ui/container";

export function LegalLayout({
  title,
  effectiveDate,
  sections,
}: {
  title: string;
  effectiveDate: string;
  sections: { id: string; heading: string; body: React.ReactNode }[];
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-ink-faint">Effective {effectiveDate}</p>

          <nav aria-label="Table of contents" className="mt-8 flex flex-wrap gap-2 border-y border-line py-5">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="border border-line-strong px-3 py-1.5 text-xs font-medium text-ink-soft hover:border-ink hover:text-ink"
              >
                {s.heading}
              </a>
            ))}
          </nav>

          <div className="mt-10 space-y-12">
            {sections.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="font-display text-xl font-medium text-ink">{s.heading}</h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-soft">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
