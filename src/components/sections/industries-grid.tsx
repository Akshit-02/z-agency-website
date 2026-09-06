import { industries } from "@/data/industries";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function IndustriesGrid({ limit, className }: { limit?: number; className?: string }) {
  const items = limit ? industries.slice(0, limit) : industries;

  return (
    <div className={cn("grid grid-cols-1 border-t border-line sm:grid-cols-2", className)}>
      {items.map((industry, i) => (
        <Reveal key={industry.slug} delay={(i % 6) * 0.05}>
          <div
            className={cn(
              "group flex h-full items-start gap-4 border-b border-line px-1 py-7 transition-colors hover:bg-mist sm:px-6",
              i % 2 === 0 && "sm:border-r",
            )}
          >
            <industry.icon className="mt-1 size-5 shrink-0 text-ink-faint transition-colors group-hover:text-coral" />
            <div>
              <h3 className="font-display text-lg font-medium text-ink">{industry.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{industry.description}</p>
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                {industry.capabilities.map((c) => (
                  <span key={c} className="font-mono-label text-[0.65rem] uppercase tracking-wide text-ink-faint">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
