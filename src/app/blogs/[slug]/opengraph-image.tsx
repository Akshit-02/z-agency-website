import { ImageResponse } from "next/og";
import { OgPage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-shared";
import { posts, getPostBySlug } from "@/lib/blog-data";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

// Unknown slugs return the static 404 instead of rendering on demand (bots
// probing URLs otherwise cost a function invocation and origin transfer each).
export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return new ImageResponse(
    (
      <OgPage
        eyebrow={post?.category ?? "Insights"}
        eyebrowColor="#2563eb"
        title={post?.title ?? "ZSpace Labs Insights"}
        description={post?.excerpt ?? "Practical writing on web, mobile, AI automation and conversion."}
      />
    ),
    { ...size }
  );
}
