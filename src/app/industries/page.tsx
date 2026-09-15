import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/ScrollReveal";
import { Eyebrow } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { industries, categoryOrder, categoryCopy } from "@/lib/industries-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries We Work With — Technology Built Around Your Business",
  description:
    "ZSpace designs and builds digital products for real estate, D2C, beauty, fashion, fintech, manufacturing, healthcare, SaaS and more — technology shaped around how each industry actually works.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            { "@type": "ListItem", position: 2, name: "Industries", item: `${site.url}/industries` },
          ],
        }}
      />
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Technology for every kind of{" "}
            <span className="text-blue">ambitious business</span>.
          </>
        }
        description="Whatever industry you're in, the underlying question is the same: what does this business actually need to move forward? Here's how we've answered it across the markets we work in most."
      />

      {categoryOrder.map((category, categoryIndex) => {
        const withPages = industries.filter(
          (industry) => industry.category === category && industry.hasDetailPage
        );
        const withoutPages = industries.filter(
          (industry) => industry.category === category && !industry.hasDetailPage
        );

        return (
          <section
            key={category}
            className="border-b border-line py-16 sm:py-20"
          >
            <Container>
              <Reveal>
                <Eyebrow accent={categoryIndex % 2 === 0 ? "blue" : "orange"}>
                  {category}
                </Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-3 max-w-[60ch] text-pretty text-[1rem] leading-relaxed text-ink-soft">
                  {categoryCopy[category]}
                </p>
              </Reveal>

              {withPages.length > 0 && (
                <ul className="mt-10 flex flex-col">
                  {withPages.map((industry, i) => (
                    <Reveal key={industry.slug} delay={0.04 * i}>
                      <li className="group border-t border-line last:border-b">
                        <Link
                          href={`/industries/${industry.slug}`}
                          className="grid gap-3 py-7 transition-colors sm:grid-cols-[1.1fr_1.6fr_auto] sm:items-center sm:gap-8"
                        >
                          <h2 className="font-display text-[1.3rem] font-medium tracking-tight sm:text-[1.5rem]">
                            {industry.name}
                          </h2>
                          <p className="max-w-[46ch] text-pretty text-[0.96rem] leading-relaxed text-ink-soft">
                            {industry.shortDescription}
                          </p>
                          <span
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink transition-all duration-300 group-hover:text-white ${
                              industry.accent === "blue"
                                ? "group-hover:border-blue group-hover:bg-blue"
                                : "group-hover:border-orange group-hover:bg-orange"
                            }`}
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </span>
                        </Link>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              )}

              {withoutPages.length > 0 && (
                <Reveal delay={0.1} className="mt-8">
                  <p className="text-[0.85rem] font-medium uppercase tracking-[0.08em] text-ink-soft">
                    Also active in
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-2 gap-y-2">
                    {withoutPages.map((industry) => (
                      <span
                        key={industry.slug}
                        className="rounded-full border border-line px-3.5 py-1.5 text-[0.85rem] text-ink-soft"
                        title={industry.shortDescription}
                      >
                        {industry.name}
                      </span>
                    ))}
                  </div>
                </Reveal>
              )}
            </Container>
          </section>
        );
      })}

      <CTASection
        title={
          <>
            Don&apos;t see your industry?{" "}
            <span className="text-orange-bright">Tell us about it anyway</span>.
          </>
        }
        description="Most of what we do transfers across industries — strategy, design and engineering fundamentals don't change. If your business doesn't fit neatly into a category above, that's a conversation, not a dead end."
      />
    </>
  );
}
