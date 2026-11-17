# Website SEO baseline (before this change set)

Date: 17 November 2026. Sources: codebase at commit `cd37add`, `gsc-data.xlsx` (Web, last 3 months; data effectively starts late September 2026), production build output.

## Architecture

- Next.js 16 App Router, fully static (SSG). 1,133 blog posts, 6 service pages, 1 service hub, industry pages, about, contact, legal.
- Service pages are data-driven: one template (`src/app/services/[slug]/page.tsx` + `src/components/detail/ServiceDetail.tsx`) renders entries from `src/lib/services-data.ts`.
- Metadata: root template `%s — ZSpace Labs`; `pageTitle()` in `src/lib/seo.ts` drops the brand suffix when a title would exceed 70 characters.
- Schema: one sitewide `Organization` + `WebSite` (layout), `WebPage` + `FAQPage` on the homepage, `Service` + `FAQPage` + `BreadcrumbList` on service pages.

## Existing service pages (no new URLs needed)

| URL | Service |
|---|---|
| /services/website-development | Full-Stack Website Development |
| /services/mobile-app-development | Mobile App Development |
| /services/shopify-development | Shopify Store Setup & Optimization |
| /services/cro-audit | CRO Audit |
| /services/ui-ux-design | UI/UX Design |
| /services/ai-automation | AI Automation |

There are no pages for custom software, SaaS, enterprise software or API integration as separate services.

## What was already in good shape

- Service pages were already India-positioned ("X company in India" titles and an H1 that included that phrase) and content-rich: definition, problems, audience, honest "not for" section, use cases, approach, deliverables, technology, India section, outside-India section, 9-10 FAQs and 6 curated guides each.
- Internal linking is dense: of the posts tagged to each service, between 82% and 89% already link to that service page in the body (e.g. 356 of 403 Shopify posts). Every service links to its India listicle and how-to-choose guide.
- Canonicals, sitemap, robots, OG images per service and one H1 per page were already correct.

## Key issues found

1. **Service pages are nearly invisible in search.** In the 3-month export, `/services/ai-automation` has 289 impressions (avg. position 32); `/services/shopify-development` has 3; the other four service pages do not appear. Total site: 8,248 impressions, 3 clicks across the top 1,000 queries; India is the largest market (4,260 impressions, avg. position 24).
2. **"Best X in India" demand currently lands on the listicle blogs**, not the service pages. Example: `/blogs/best-ui-ux-design-agencies-in-india` has 196 impressions at avg. position 15.3 and picks up "ui ux design agency in india" (15 impr, pos 14.9) and "best ui ux design agency in india" (7 impr, pos 15.4). See `keyword-cannibalisation-report.md`.
3. **The homepage did not state a primary commercial positioning.** Title led with the brand; H1 was "Meet ZSpace Labs, your website builder" (animated phrase).
4. **Opening paragraphs on service pages were slogans** ("Good design is not decoration…") that did not say what the service is or who it is for.
5. **Service names "Shopify Store Setup & Optimization" and "CRO Audit"** were narrower than what the pages sell and feed into `Service.serviceType`, `Organization.knowsAbout`, breadcrumbs and the footer.
6. No GSC query-to-page mapping is available in the export (queries and pages are separate sheets), so per-page query attribution is inferred, not measured.

No keyword volumes were available: no keyword research tool is connected in this session, so none are quoted anywhere in these reports.
