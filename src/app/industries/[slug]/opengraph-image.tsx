import { ImageResponse } from "next/og";
import { OgPage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-shared";
import { industriesWithDetailPages, getIndustryBySlug } from "@/lib/industries-data";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

// Unknown slugs return the static 404 instead of rendering on demand (bots
// probing URLs otherwise cost a function invocation and origin transfer each).
export const dynamicParams = false;

export function generateStaticParams() {
  return industriesWithDetailPages.map((industry) => ({ slug: industry.slug }));
}

export default async function IndustryOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  const accentColor = industry?.accent === "blue" ? "#2563eb" : "#c2410c";

  return new ImageResponse(
    (
      <OgPage
        eyebrow="Industry"
        eyebrowColor={accentColor}
        title={industry?.name ?? "Industries"}
        description={industry?.shortDescription ?? "Technology solutions from ZSpace Labs, built around your industry."}
      />
    ),
    { ...size }
  );
}
