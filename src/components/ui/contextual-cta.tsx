import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

/**
 * A slim, contextual call-to-action band — deliberately not a floating
 * rounded card. Copy changes per placement; the site's one universal
 * closing statement lives in the footer instead of being repeated here.
 */
export function ContextualCta({
  eyebrow,
  title,
  ctaLabel,
  ctaHref,
  variant = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  ctaLabel: string;
  ctaHref: string;
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <section className={cn(variant === "dark" ? "bg-ink text-white" : "bg-mist", className)}>
      <Container className="flex flex-col items-start justify-between gap-6 py-12 sm:flex-row sm:items-center sm:py-14">
        <div>
          {eyebrow && (
            <p
              className={cn(
                "font-mono-label text-xs uppercase tracking-[0.16em]",
                variant === "dark" ? "text-white/45" : "text-ink-faint",
              )}
            >
              {eyebrow}
            </p>
          )}
          <p
            className={cn(
              "mt-2 font-display text-2xl font-medium leading-snug text-balance sm:text-3xl",
              variant === "dark" ? "text-white" : "text-ink",
            )}
          >
            {title}
          </p>
        </div>
        <ButtonLink href={ctaHref} variant={variant === "dark" ? "light" : "primary"} className="shrink-0">
          {ctaLabel}
        </ButtonLink>
      </Container>
    </section>
  );
}
