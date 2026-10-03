import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/BlogCard";
import { ArticleIndex, BlogHero, BlogSection, HubIntro } from "@/components/blog/BlogKit";
import { sceneFor } from "@/lib/blog-scenes";
import { StructuredData } from "@/components/StructuredData";
import { CTASection } from "@/components/CTASection";
import { posts, toSummary } from "@/lib/blog-data";
import { blogCategories, getCategoryBySlug } from "@/lib/blog-categories";
import { getServiceBySlug } from "@/lib/services-data";
import { site } from "@/lib/site";
import { pageTitle, ORG_ID, WEBSITE_ID } from "@/lib/seo";

export function generateStaticParams() {
  return blogCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: pageTitle(category.title),
    description: category.description,
    alternates: { canonical: `/blogs/category/${category.slug}` },
    openGraph: {
      siteName: site.name,
      title: `${category.title} — ${site.name}`,
      description: category.description,
      url: `${site.url}/blogs/category/${category.slug}`,
    },
  };
}

/** "Website Development Guides" -> ["Website Development", <i>Guides.</i>] */
function titleLines(title: string) {
  const words = title.split(" ");
  const last = words.pop();
  return [
    <>{words.join(" ")}</>,
    <span key="l" className="italic text-orange">
      {last}.
    </span>,
  ];
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const inCategory = posts
    .filter((post) => post.category === category.name)
    .sort((a, b) => a.title.localeCompare(b.title));
  const startHere = category.startHere
    .map((s) => posts.find((post) => post.slug === s))
    .filter((post): post is NonNullable<typeof post> => Boolean(post))
    .map(toSummary);
  const service = getServiceBySlug(category.serviceSlug);
  const url = `${site.url}/blogs/category/${category.slug}`;

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${url}#collection`,
          name: category.title,
          description: category.description,
          url,
          isPartOf: { "@id": WEBSITE_ID },
          publisher: { "@id": ORG_ID },
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: inCategory.length,
            itemListElement: inCategory.map((post, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${site.url}/blogs/${post.slug}`,
              name: post.title,
            })),
          },
        }}
      />
      <BlogHero
        crumbs={[
          { name: "Blogs", href: "/blogs" },
          { name: category.name, href: `/blogs/category/${category.slug}` },
        ]}
        eyebrow={`Insights / ${category.name}`}
        title={titleLines(category.title)}
        description={category.description}
        stack={(startHere.length >= 3 ? startHere : inCategory).slice(0, 3).map((p) => ({
          slug: p.slug,
          title: p.title,
          category: p.category,
          banner: p.banner,
          scene: "scene" in p ? p.scene : sceneFor(p),
        }))}
        stats={[{ value: String(inCategory.length), label: "Articles in this hub" }]}
      />

      <HubIntro
        intro={category.intro}
        service={
          service
            ? { slug: service.slug, name: service.name, summary: service.summary, label: category.serviceLabel }
            : undefined
        }
      />

      {startHere.length > 0 && (
        <BlogSection eyebrow="Start here" title={[<>The guides</>, <span key="s" className="italic text-orange">to read first.</span>]}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {startHere.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </BlogSection>
      )}

      <BlogSection
        eyebrow={`All ${category.name} articles (${inCategory.length})`}
        title={[<>The full</>, <span key="l" className="italic text-orange">library.</span>]}
      >
        <ArticleIndex posts={inCategory.map((p) => ({ slug: p.slug, title: p.title }))} />
      </BlogSection>

      <CTASection
        primaryHref={`/contact?src=${encodeURIComponent(`/blogs/category/${category.slug}`)}`}
        title={
          <>
            Have a <span className="text-orange-bright">project</span> in mind?
          </>
        }
        description="Tell us what you're building or fixing, and we'll come back with an honest read on scope and next steps."
      />
    </>
  );
}
