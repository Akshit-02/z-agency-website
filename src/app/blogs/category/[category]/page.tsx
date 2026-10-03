import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/ScrollReveal";
import { Eyebrow } from "@/components/SectionHeading";
import { BlogCard } from "@/components/BlogCard";
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
      <PageHero
        eyebrow={`Insights / ${category.name}`}
        title={category.title}
        description={category.description}
        breadcrumbs={[
          { name: "Blogs", href: "/blogs" },
          { name: category.name, href: `/blogs/category/${category.slug}` },
        ]}
      />

      <section className="border-b border-line py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            {category.intro.map((para, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p className="text-pretty text-[1.05rem] leading-relaxed text-ink-soft">{para}</p>
              </Reveal>
            ))}
          </div>
          {service && (
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-line-strong bg-[#f3f2ee] p-7">
                <Eyebrow accent="blue">Related service</Eyebrow>
                <p className="mt-3 font-display text-[1.2rem] font-medium tracking-tight">{service.name}</p>
                <p className="mt-2 text-pretty text-[0.96rem] leading-relaxed text-ink-soft">{service.summary}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="group mt-4 inline-flex items-center gap-2 text-[0.95rem] font-medium text-blue transition-colors duration-300 hover:text-blue-deep"
                >
                  {category.serviceLabel}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>
          )}
        </Container>
      </section>

      {startHere.length > 0 && (
        <section className="border-b border-line py-16 sm:py-20">
          <Container>
            <Eyebrow accent="blue">Start here</Eyebrow>
            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {startHere.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-16 sm:py-20">
        <Container>
          <Eyebrow accent="blue">{`All ${category.name} articles (${inCategory.length})`}</Eyebrow>
          <ul className="mt-8 grid gap-x-10 sm:grid-cols-2">
            {inCategory.map((post) => (
              <li key={post.slug} className="border-t border-line">
                <Link
                  href={`/blogs/${post.slug}`}
                  className="group flex items-start justify-between gap-4 py-3.5 text-[0.98rem] text-ink transition-colors duration-300 hover:text-blue"
                >
                  <span className="text-pretty">{post.title}</span>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-ink-soft transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

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
