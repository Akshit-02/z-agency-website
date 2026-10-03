# Implementation Log

All changes made on 2026-10-03. Baseline: commit `537867b` ("rebranded to zspace labs"). Nothing has been committed; review with `git diff`.

## Technical SEO

| Change | Files |
|---|---|
| Canonical host switched to `https://www.zspace.in` (matches production) | src/lib/site.ts |
| Removed stale compiled `next.config.js` that overrode `next.config.ts` | next.config.js (deleted) |
| 308 redirects `/blog` → `/blogs`, `/blog/:slug` → `/blogs/:slug` | next.config.ts |
| Shared SEO helpers: `pageTitle()`, `metaDescription()`, `ORG_ID`, `WEBSITE_ID` | src/lib/seo.ts (new) |
| Organization schema: `@id`, logo, ContactPoint, knowsAbout, alternateName; removed incorrect `sameAs` | src/app/layout.tsx, src/lib/site.ts |
| WebSite schema linked to Organization | src/app/layout.tsx |
| Article → BlogPosting with `@id`, articleSection, about, publisher refs; derived descriptions; title length handling | src/app/blogs/[slug]/page.tsx |
| Category breadcrumb level on articles; breadcrumbs wrap on mobile | src/app/blogs/[slug]/page.tsx, src/components/Breadcrumbs.tsx |
| Category hub pages with CollectionPage/ItemList schema, added to sitemap | src/app/blogs/category/[category]/page.tsx (new), src/lib/blog-categories.ts (new), src/app/sitemap.ts |
| Blog listing: slim summaries instead of full articles, 24-per-page "Load more", capped animation delay, topic hub links | src/app/blogs/page.tsx, src/components/BlogExplorer.tsx, src/components/BlogCard.tsx, src/lib/blog-data.ts (`BlogSummary`, `toSummary`) |
| Homepage: FAQPage + WebPage schema from shared FAQ data; title adds Shopify; H1 accessible label | src/app/page.tsx, src/lib/home-faqs.ts (new), src/components/home/FaqSection.tsx, src/components/home/Hero.tsx |
| About/Contact/Blog schema linked to Organization/WebSite | src/app/about/page.tsx, src/app/contact/page.tsx, src/app/blogs/page.tsx |
| Index page titles and descriptions shortened; industry descriptions trimmed | src/app/services/page.tsx, src/app/industries/page.tsx, src/app/industries/[slug]/page.tsx, src/app/blogs/page.tsx, src/app/about/page.tsx |

## Service pages

| Change | Files |
|---|---|
| New fields per service: seoTitle, metaDescription, definition (question + answer), audience, useCases, curated guides | src/lib/services-data.ts |
| FAQs expanded from 3 to 7 per service (42 total) | src/lib/services-data.ts |
| Template renders Overview (definition), Who it's for, Use cases, "How we work" heading, Guides; Service schema with `@id`, url, audience, provider ref | src/app/services/[slug]/page.tsx |

## Blog content

| Change | Count |
|---|---|
| Publication dates corrected to git publication date (future-dated or dated after commit) | 177 articles |
| Concise SEO titles written | 59 articles |
| Meta descriptions derived ≤160 characters | 366 articles (automatic, from excerpts) |
| Full rewrites with quick answer, new structure, FAQs, references: why-page-speed-still-decides-conversion, when-to-automate-a-business-process, shopify-speed-checklist-before-you-add-another-app, the-real-cost-of-a-slow-checkout | 4 |
| Quick answer + two new sections + references: how-to-set-up-a-shopify-store, how-much-does-a-shopify-store-cost, shopify-development-process-what-to-expect, best-shopify-apps-for-new-stores, shopify-app-integration-guide, shopify-store-maintenance-checklist, shopify-core-web-vitals-performance-guide, how-to-choose-a-shopify-development-agency, shopify-custom-app-development-guide, shopify-business-systems-integration-guide | 10 |
| Hub-to-spoke directory sections: ai-agent-development, website-development-guide, ecommerce-website-redesign, ecommerce-website-design | 4 |
| Contextual service link added to closing CTA | 137 |
| `updated` date set on substantially edited articles | 14 |
| Articles removed or redirected | 0 |

## llms.txt

All URLs moved to the www host; entity block notes canonical host and previous name; service descriptions aligned with service pages; "Blog topic hubs" section added. 728 article URLs + 6 hubs, no duplicates.

## Documentation

docs/seo/: site-audit.md, keyword-map.md, competitor-research.md, blog-audit.md, content-roadmap.md, technical-seo.md, aeo-geo-strategy.md, internal-linking.md, implementation-log.md, seo-performance-baseline.md.

## Validation (all run on 2026-10-03)

- `npx tsc --noEmit`: pass
- `npm run lint`: 0 errors, 6 pre-existing warnings (home components, unrelated)
- `npm run build`: pass (all static pages generated)
- Local production crawl: 760/760 sitemap URLs 200, 0 broken internal links, 0 canonical mismatches, 1 H1 per page, 0 invalid JSON-LD, 0 titles >70, 0 descriptions >160, 0 duplicate titles/descriptions
- `/blog` and `/blog/:slug` return 308 to `/blogs`
- External references: 323 unique URLs checked; all resolved (403/202 responses verified manually)

## Later change: outbound links removed (2026-10-03)

At the owner's request, all 524 external links in article content (102 data files) were converted to plain text. Source names remain as citations, e.g. "(Baymard Institute, 2021)", but are no longer clickable. The site now has no outbound links; code samples that contain example URLs are unaffected.
- Mobile: no horizontal overflow at 360/390/768 px on 10 key templates and an 80-article random sample at 390 px
- Browser: service page new sections, blog "Load more" (24 → 48 of 727) and category hubs checked visually
- Logo files (`Logo.tsx`, `icon.tsx`, `apple-icon.tsx`, `opengraph-image.tsx`, `og-shared.tsx`) unchanged (`git diff` empty)

## Not done / owner actions

See technical-seo.md "Remaining technical work" and aeo-geo-strategy.md "Entity gaps": deploy, hosting redirect chain, privacy policy accuracy, Next.js security upgrade, verified social profiles, Search Console/Bing access, real case studies and testimonials.
