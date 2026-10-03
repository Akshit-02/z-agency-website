import type { Metadata } from "next";
import {
  IndustriesHero,
  IndustryGrid,
  IndustryLens,
  IndustryRibbon,
  type IndustryCardData,
  type IndustryChip,
} from "@/components/industries/IndustriesSections";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { industries, categoryOrder } from "@/lib/industries-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries: Websites, Apps and Automation by Sector",
  description:
    "How ZSpace Labs builds websites, apps, Shopify stores and AI automation for real estate, D2C, fintech, healthcare, SaaS, manufacturing and more.",
  alternates: { canonical: "/industries" },
};

const featured: IndustryCardData[] = categoryOrder.flatMap((category) =>
  industries
    .filter((i) => i.category === category && i.hasDetailPage)
    .map((i) => ({
      slug: i.slug,
      name: i.name,
      category: i.category,
      shortDescription: i.shortDescription,
      accent: i.accent,
      visual: i.visual,
      challenges: i.challenges ?? [],
      solutions: i.solutions ?? [],
    }))
);

const others: IndustryChip[] = industries
  .filter((i) => !i.hasDetailPage)
  .map((i) => ({ slug: i.slug, name: i.name, category: i.category }));

const categories = categoryOrder.filter((c) => featured.some((i) => i.category === c));

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
      <IndustriesHero />
      <IndustryRibbon names={industries.map((i) => i.name)} />
      <IndustryGrid industries={featured} others={others} categories={categories} />
      <IndustryLens industries={featured.filter((i) => i.challenges.length && i.solutions.length)} />
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
