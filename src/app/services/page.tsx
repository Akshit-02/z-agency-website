import type { Metadata } from "next";
import {
  MoreThanMenu,
  ServiceList,
  ServicesClosing,
  ServicesHero,
  type ServiceSummary,
} from "@/components/services/ServicesSections";
import { StructuredData } from "@/components/StructuredData";
import { services } from "@/lib/services-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services: Web, Mobile, Shopify, UI/UX, AI & CRO",
  description:
    "Website development, mobile apps, Shopify development, UI/UX design, AI automation and CRO audits from ZSpace Labs, one team for design and engineering.",
  alternates: { canonical: "/services" },
};

// Display order on this page.
const order = [
  "website-development",
  "mobile-app-development",
  "shopify-development",
  "ui-ux-design",
  "ai-automation",
  "cro-audit",
];

const list: ServiceSummary[] = [...services]
  .sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug))
  .map((s, i) => ({
    slug: s.slug,
    index: String(i + 1).padStart(2, "0"),
    name: s.name,
    short: s.short,
    summary: s.summary,
    accent: s.accent,
  }));

export default function ServicesPage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
          ],
        }}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "ZSpace Labs services",
          itemListElement: list.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.name,
            url: `${site.url}/services/${s.slug}`,
          })),
        }}
      />
      <ServicesHero />
      <MoreThanMenu />
      <ServiceList services={list} />
      <ServicesClosing />
    </>
  );
}
