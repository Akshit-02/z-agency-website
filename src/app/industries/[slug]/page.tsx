import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { IndustryDetail } from "@/components/detail/IndustryDetail";
import { StructuredData } from "@/components/StructuredData";
import {
  industriesWithDetailPages,
  getIndustryBySlug,
  homepageIndustries,
} from "@/lib/industries-data";
import { getServiceBySlug } from "@/lib/services-data";
import { posts } from "@/lib/blog-data";
import { site } from "@/lib/site";
import { metaDescription as metaDescriptionFor } from "@/lib/seo";

export function generateStaticParams() {
  return industriesWithDetailPages.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry || !industry.hasDetailPage) return {};

  const fullDescription = `${industry.shortDescription} ZSpace Labs designs and builds the websites, apps and automation these businesses need.`;
  const metaDescription =
    fullDescription.length <= 160
      ? fullDescription
      : metaDescriptionFor(`${industry.shortDescription} ZSpace Labs builds websites, apps and automation for them.`);

  return {
    title: `${industry.name} — Industries`,
    description: metaDescription,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      siteName: site.name,
      title: `${industry.name} — ${site.name}`,
      description: metaDescription,
      url: `${site.url}/industries/${industry.slug}`,
    },
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry || !industry.hasDetailPage) notFound();

  const services = (industry.serviceSlugs ?? [])
    .map(getServiceBySlug)
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const relatedPosts = (industry.relatedBlogSlugs ?? [])
    .map((s) => posts.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const otherIndustries = homepageIndustries
    .filter((i) => i.slug !== industry.slug && i.hasDetailPage)
    .slice(0, 3);

  return (
    <>
      {industry.faqs && industry.faqs.length > 0 && (
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: industry.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      )}

      <IndustryDetail
        data={{
          slug: industry.slug,
          name: industry.name,
          accent: industry.accent,
          heroTitle: industry.heroTitle,
          heroCopy: industry.heroCopy,
          description: industry.description,
          challenges: industry.challenges ?? [],
          solutions: industry.solutions ?? [],
          useCases: industry.useCases ?? [],
          faqs: industry.faqs ?? [],
          services: services.map((s) => ({ slug: s.slug, name: s.name, summary: s.summary, short: s.short, accent: s.accent })),
          posts: relatedPosts.map((p) => ({ slug: p.slug, title: p.title, category: p.category })),
          others: otherIndustries.map((i) => ({ slug: i.slug, name: i.name, shortDescription: i.shortDescription })),
        }}
      />

      <CTASection
        primaryHref={`/contact?src=${encodeURIComponent(`/industries/${industry.slug}`)}`}
        title={industry.ctaTitle ?? `Talk to us about ${industry.name.toLowerCase()}`}
        description={industry.ctaDescription}
        primaryLabel="Discuss your project"
      />
    </>
  );
}
