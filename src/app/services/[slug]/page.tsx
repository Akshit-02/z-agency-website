import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/ScrollReveal";
import { Eyebrow } from "@/components/SectionHeading";
import { Faq } from "@/components/Faq";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { services, getServiceBySlug } from "@/lib/services-data";
import { posts } from "@/lib/blog-data";
import { getIndustryBySlug } from "@/lib/industries-data";
import { site } from "@/lib/site";

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
    title: `${service.name} — Services`,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} — ${site.name}`,
      description: service.summary,
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

  const related = posts.filter((post) => post.relatedServiceSlugs.includes(service.slug)).slice(0, 3);
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const relatedIndustries = (service.industrySlugs ?? [])
    .map(getIndustryBySlug)
    .filter((i): i is NonNullable<typeof i> => Boolean(i))
    .filter((i) => i.hasDetailPage)
    .slice(0, 5);

  const accent = service.accent;
  const textAccent = accent === "blue" ? "text-blue" : "text-orange";
  const bgAccent = accent === "blue" ? "bg-blue" : "bg-orange";
  const linkAccent = accent === "blue" ? "text-blue hover:text-blue-deep" : "text-orange hover:text-orange-deep";

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: service.name,
          name: service.name,
          description: service.summary,
          provider: { "@type": "Organization", name: site.name, url: site.url },
          areaServed: "Worldwide",
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

      <PageHero
        eyebrow={`Service ${service.index}`}
        title={service.name}
        description={service.heroCopy}
        accent={accent}
        breadcrumbs={[
          { name: "Services", href: "/services" },
          { name: service.name, href: `/services/${service.slug}` },
        ]}
      />

      <section className="border-b border-line py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow accent={accent}>What we do</Eyebrow>
            </Reveal>
          </div>
          <div className="flex flex-col gap-5">
            {service.whatWeDo.map((line, i) => (
              <Reveal key={line} delay={0.05 * i}>
                <div className="flex gap-3">
                  <Check className={`mt-1 h-4 w-4 shrink-0 ${textAccent}`} />
                  <p className="text-pretty text-[1.02rem] leading-relaxed text-ink-soft">{line}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-[#f3f2ee] py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow accent={accent}>Problems we solve</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance font-display text-[1.9rem] font-medium leading-[1.15] tracking-tight sm:text-[2.2rem]">
                Sound familiar?
              </h2>
            </Reveal>
          </div>
          <ul className="flex flex-col gap-5">
            {service.problems.map((problem, i) => (
              <Reveal key={problem} delay={0.05 * i}>
                <li className="border-t border-line-strong pt-4 text-pretty text-[1.02rem] leading-relaxed text-ink-soft">
                  {problem}
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-line py-16 sm:py-24">
        <Container>
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow accent={accent}>Our approach</Eyebrow>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {service.approach.map((step, i) => (
              <Reveal key={step.title} delay={0.05 * i}>
                <div className="border-t border-line-strong pt-5">
                  <span className={`font-display text-sm ${textAccent}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-[1.15rem] font-medium tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-pretty text-[0.96rem] leading-relaxed text-ink-soft">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow accent={accent}>What you receive</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance font-display text-[1.9rem] font-medium leading-[1.15] tracking-tight sm:text-[2.2rem]">
                Deliverables
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-6 flex flex-col gap-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 text-[1rem] text-ink-soft">
                    <span className={`mt-2 h-1 w-1 shrink-0 rounded-full ${bgAccent}`} />
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <Eyebrow accent={accent}>Technology</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.technology.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line-strong px-4 py-2 text-[0.9rem] text-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10">
                <Eyebrow accent={accent}>Why ZSpace</Eyebrow>
                <ul className="mt-5 flex flex-col gap-3">
                  {service.whyZspace.map((reason) => (
                    <li key={reason} className="text-pretty text-[0.98rem] leading-relaxed text-ink-soft">
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {relatedIndustries.length > 0 && (
        <section className="border-b border-line py-16 sm:py-20">
          <Container>
            <Reveal>
              <Eyebrow accent={accent}>Popular with</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mt-6 flex flex-wrap gap-2">
                {relatedIndustries.map((industry) => (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    className="rounded-full border border-line-strong px-4 py-2 text-[0.9rem] text-ink transition-colors duration-300 hover:border-ink"
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      <section className="border-b border-line py-16 sm:py-24">
        <Container>
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow accent={accent}>FAQ</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance font-display text-[1.9rem] font-medium leading-[1.15] tracking-tight sm:text-[2.2rem]">
                Common questions
              </h2>
            </Reveal>
          </div>
          <div className="mt-10">
            <Faq items={service.faq} />
          </div>
        </Container>
      </section>

      {(related.length > 0 || otherServices.length > 0) && (
        <section className="py-16 sm:py-20">
          <Container className="grid gap-12 lg:grid-cols-2">
            {related.length > 0 && (
              <div>
                <Eyebrow accent={accent}>Related reading</Eyebrow>
                <ul className="mt-5 flex flex-col gap-4">
                  {related.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blogs/${post.slug}`}
                        className={`group flex items-center justify-between gap-4 text-[1rem] font-medium transition-colors duration-300 ${linkAccent}`}
                      >
                        <span className="text-pretty">{post.title}</span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <Eyebrow accent={accent === "blue" ? "orange" : "blue"}>Other services</Eyebrow>
              <ul className="mt-5 flex flex-col gap-4">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex items-center justify-between gap-4 text-[1rem] font-medium text-blue transition-colors duration-300 hover:text-blue-deep"
                    >
                      <span>{s.name}</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      )}

      <CTASection
        title={`Ready to talk about ${service.name.toLowerCase()}?`}
        description="Tell us about your project and we'll respond with honest scoping, not a generic pitch."
      />
    </>
  );
}
