import { ImageResponse } from "next/og";
import { OgPage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-shared";
import { industriesWithDetailPages, getIndustryBySlug } from "@/lib/industries-data";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

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
        description={industry?.shortDescription ?? "Technology solutions from ZSpace, built around your industry."}
      />
    ),
    { ...size }
  );
}
