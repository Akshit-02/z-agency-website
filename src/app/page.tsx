import type { Metadata } from "next";
import { HomeIntro } from "@/components/home/HomeIntro";
import { WhatWeBuild } from "@/components/home/WhatWeBuild";
import { Principles } from "@/components/home/Principles";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { IndustriesGrid } from "@/components/home/IndustriesGrid";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhyZspace } from "@/components/home/WhyZspace";
import { TechStack } from "@/components/home/TechStack";
import { FaqSection } from "@/components/home/FaqSection";
import { BuildCTA } from "@/components/home/BuildCTA";
import { site } from "@/lib/site";
import { homeFaqs } from "@/lib/home-faqs";
import { StructuredData } from "@/components/StructuredData";
import { ORG_ID, WEBSITE_ID } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — Website, App, Shopify & AI Automation Studio` },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${site.url}/#webpage`,
          url: site.url,
          name: `${site.name} — Website, App, Shopify & AI Automation Studio`,
          description: site.description,
          isPartOf: { "@id": WEBSITE_ID },
          about: { "@id": ORG_ID },
        }}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homeFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <HomeIntro />
      <WhatWeBuild />
      {/* <Principles /> */}
      {/* <ServicesShowcase /> */}
      <IndustriesGrid />
      <WhyZspace />
      {/* <ProcessSection /> */}
      {/* <TechStack /> */}
      <FaqSection />
      <BuildCTA />
    </>
  );
}
