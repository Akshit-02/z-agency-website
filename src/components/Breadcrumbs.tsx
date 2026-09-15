import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { StructuredData } from "./StructuredData";
import { site } from "@/lib/site";

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full: Crumb[] = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: full.map((crumb, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: crumb.name,
            item: `${site.url}${crumb.href}`,
          })),
        }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[0.85rem] text-ink-soft">
        {full.map((crumb, i) => {
          const isLast = i === full.length - 1;
          return (
            <span key={crumb.href} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3 w-3 shrink-0 text-line-strong" aria-hidden="true" />}
              {isLast ? (
                <span
                  className="max-w-[46vw] truncate text-ink-soft sm:max-w-xs"
                  aria-current="page"
                >
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.href} className="whitespace-nowrap transition-colors hover:text-ink">
                  {crumb.name}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
