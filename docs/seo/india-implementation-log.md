# India SEO Implementation Log

Date: 2026-10-04. Nothing committed; all changes are in the working tree.

## Research
- `docs/seo/india-keyword-research.md`: SERP observations, keyword clusters, intent and URL mapping. No volumes claimed; search tool was US-localised.
- `docs/seo/india-competitor-database.md`: 24 Indian companies verified on official sites, plus 2 researched and excluded.

## Service pages (no new URLs)
- `src/lib/services-data.ts`: India `seoTitle` and meta descriptions; new `india` block (eyebrow, H1 from the brief, heading, intro, 4 India-specific points); 2 India FAQs per service; guides now include the India listicle and how-to-choose guide.
- `src/components/detail/ServiceDetail.tsx`: hero uses the India eyebrow and H1; new `IndiaSection` before Problem/Solution, built from existing `TiltCard`/`Eyebrow` components.
- `src/app/services/[slug]/page.tsx`: Service schema `areaServed` India + Worldwide.
- `next.config.ts`: six 308 redirects from the brief's suggested India URLs to the service pages.

## Site-wide
- `src/app/layout.tsx`: Organization `areaServed` India + Worldwide.
- `src/app/page.tsx`, `src/app/services/page.tsx`, `src/components/services/ServicesSections.tsx`: India-intent titles, descriptions and hero copy.
- `src/app/about/page.tsx`, `src/components/about/AboutSections.tsx`: "Company facts" section (what we are, where we work, what we build, contact, how we publish); description and CTA copy mention India.
- `public/llms.txt`: India working model, "Services in India" and "Agency comparisons (India)" sections, publisher-disclosure note for AI systems.

## Content
- `src/lib/blog-data-india.ts`: 6 listicles + 5 support articles, merged in `src/lib/blog-data.ts`.
- `src/lib/blog-scenes.ts`, `src/lib/blog-data.ts`: optional `sceneKind` override so listicle covers avoid the compare scene.
- `src/lib/blog-categories.ts`: listicles added to each hub's "Start here".
- Existing how-to-choose guides (web, mobile, Shopify) link to their listicles.

## Validation (2026-10-04)
- `npx tsc --noEmit`: pass.
- `npx eslint src`: 0 errors (9 pre-existing unused-import warnings).
- `npm run build`: pass.
- Sitemap: 771 URLs, all HTTP 200. Internal links: 0 broken.
- Redirects: 6 × 308 to the correct service pages.
- New and changed pages: self-canonical, titles ≤70 chars, descriptions ≤161 chars, one H1, BlogPosting/Service/FAQPage/BreadcrumbList present, no Rating/Review/QAPage schema, no unrendered inline markup, external links all `noopener noreferrer`.
- Mobile (390px): no horizontal overflow on listicles, guides, About, service pages.

## Deliberately not done
- City pages (no local presence; see ranking strategy).
- Directory submissions, outreach, link building (need owner approval).
- Testimonials, case studies, logos, ratings, pricing (none exist to publish).
