import { ImageResponse } from "next/og";
import { OgPage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-shared";
import { services, getServiceBySlug } from "@/lib/services-data";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const accentColor = service?.accent === "blue" ? "#2563eb" : "#c2410c";

  return new ImageResponse(
    (
      <OgPage
        eyebrow={`Service ${service?.index ?? ""}`}
        eyebrowColor={accentColor}
        title={service?.name ?? "Services"}
        description={service?.summary ?? "Technology and digital product services from ZSpace."}
      />
    ),
    { ...size }
  );
}
