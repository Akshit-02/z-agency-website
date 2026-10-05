import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { ServiceDetail } from "@/components/detail/ServiceDetail";
import { StructuredData } from "@/components/StructuredData";
import { services, getServiceBySlug } from "@/lib/services-data";
import { posts } from "@/lib/blog-data";
import { getIndustryBySlug } from "@/lib/industries-data";
import { site } from "@/lib/site";
import { pageTitle, ORG_ID } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: pageTitle(service.seoTitle),
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      siteName: site.name,
      title: `${service.seoTitle} — ${site.name}`,
      description: service.metaDescription,
      url: `${site.url}/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  // Curated hub guides first; fall back to any article tagged with this service.
  const guidePosts = service.guides
    .map((slug) => posts.find((post) => post.slug === slug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post));
  const related = guidePosts.length > 0
    ? guidePosts
    : posts.filter((post) => post.relatedServiceSlugs.includes(service.slug)).slice(0, 6);
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const relatedIndustries = (service.industrySlugs ?? [])
    .map(getIndustryBySlug)
    .filter((i): i is NonNullable<typeof i> => Boolean(i))
    .filter((i) => i.hasDetailPage)
    .slice(0, 5);

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${site.url}/services/${service.slug}#service`,
          url: `${site.url}/services/${service.slug}`,
          serviceType: service.name,
          name: service.name,
          description: service.metaDescription,
          provider: { "@id": ORG_ID },
          areaServed: [{ "@type": "Country", name: "India" }, "Worldwide"],
          audience: { "@type": "BusinessAudience", audienceType: service.audience.join("; ") },
        }}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      <ServiceDetail
        data={{
          slug: service.slug,
          index: service.index,
          name: service.name,
          accent: service.accent,
          heroCopy: service.heroCopy,
          india: service.india,
          definition: service.definition,
          whatWeDo: service.whatWeDo,
          problems: service.problems,
          audience: service.audience,
          useCases: service.useCases,
          approach: service.approach,
          deliverables: service.deliverables,
          technology: service.technology,
          whyZspace: service.whyZspace,
          faq: service.faq,
          guides: related.map((p) => ({ slug: p.slug, title: p.title, category: p.category })),
          others: otherServices.map((s) => ({ slug: s.slug, name: s.name, summary: s.summary, accent: s.accent })),
          industries: relatedIndustries.map((i) => ({ slug: i.slug, name: i.name })),
        }}
      />

      <CTASection
        primaryHref={`/contact?src=${encodeURIComponent(`/services/${service.slug}`)}`}
        title={`Ready to talk about ${service.name.toLowerCase()}?`}
        description="Tell us about your project and we'll respond with honest scoping, not a generic pitch."
      />
    </>
  );
}
