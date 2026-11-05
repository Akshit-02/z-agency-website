# Implementation report — 5 November 2026

All changes are uncommitted on `master` and **not deployed**. URLs, slugs, redirects, navigation and the contact form were not changed.

## Approach

1. Read `gsc-data.xlsx` (all 7 sheets) without modifying it.
2. Crawled the rendered HTML of all 1,138 built pages: titles, descriptions, H1s, canonicals, robots tags, links and structured data.
3. Mapped the 1,000 exported queries to their likely pages (inferred, with manual corrections) and classified their intent.
4. Read the previous GSC batch from git history (22 October 2026), so pages changed then are left alone while they are measured.
5. Implemented P1 commercial changes and P2 snippet and content changes in two batches, building and recrawling after each.

## Files modified

| File | Change |
| --- | --- |
| `src/components/ui/Aesthetic.tsx` | `Eyebrow` accepts `as="span"` so it can sit inside a heading |
| `src/components/detail/DetailKit.tsx` | `DetailHero` gains an `eyebrowInHeading` option: the eyebrow becomes part of the `<h1>`, with no visual change |
| `src/components/detail/ServiceDetail.tsx` | Enables `eyebrowInHeading` on all six service pages |
| `src/lib/services-data.ts` | AI automation: SEO title, meta description, 2 new FAQs |
| `src/lib/blog-data-au-business-software.ts` | Legacy modernisation: PHP section, PHP FAQ, PHP sources, SEO title, updated date |
| `src/lib/blog-data-webdev-4.ts` | SaaS website development: SEO title, description, 4 sections, CTA, related articles, updated date |
| `src/lib/blog-data-india.ts` | UI vs UX design: 2 sections, updated date |
| `src/lib/blog-data-au-business-systems.ts` | Supplier portal: SEO title and description |
| `src/lib/blog-data-commerce-54.ts` | Ecommerce data warehouse: description |
| `src/lib/blog-data-prod-ai-1.ts` | AI agent autonomy: description |
| `src/lib/blog-data-commerce-75.ts` | Omnichannel architecture: SEO title |
| `src/lib/blog-data-commerce-19.ts` | Wholesale ecommerce website: SEO title |
| `src/lib/blog-data-au-health-education.ts` | LMS development: SEO title |
| `seo-audit/` (new) | The 8 deliverables in this folder |

## URLs improved (15)

### Service pages (P1)

| URL | Before | After |
| --- | --- | --- |
| /services/ai-automation | Title: "AI Automation Agency in India \| Workflows & AI Agents" | "AI Automation Services in India \| AI Agents & Workflows" (top query: `ai automation services`, 125 impr @ 28). Description rewritten. H1 now starts "AI automation agency in India: …". FAQs added on timeline and cost drivers, and on what to prepare (no prices or durations invented) |
| /services/website-development, /mobile-app-development, /ui-ux-design, /shopify-development, /cro-audit | H1 was a slogan only, e.g. "Mobile apps built around the people who use them." | H1 now includes the service keyword already shown as the eyebrow, e.g. "Mobile app development company in India: Mobile apps built around the people who use them." Titles unchanged (no query data to justify it) |

### Content updates

| URL | Change | Evidence |
| --- | --- | --- |
| /blogs/legacy-software-modernization-australia | New section "Modernising a legacy PHP application": PHP support dates from php.net (checked 5 Nov 2026), breaking changes (mysql_* removed in PHP 7.0), sizing tools (PHPStan, PHPCompatibility, Rector), framework decision (Zend Framework → Laminas), hosting, plus a decision table, a FAQ and sources. Words: 2,917 → 3,310 | Site's top query by impressions, `legacy php modernisation australia` (159 @ 41.5); the page never mentioned PHP |
| /blogs/saas-website-development | New sections: pages a SaaS site needs (table), how the site connects to the product, planning checklist, common mistakes; service CTA; related articles. Words: 1,218 → 1,883 | `saas website development` 57 @ 21.7; `website development for saas (companies)` @ 12–15 |
| /blogs/ui-design-vs-ux-design | Worked example and project-stage table. Words: 892 → 1,149 | `ux design and ui design` 54 @ 39; the site's shortest article |

### Snippet (title and description) changes (P2)

| URL | Change | Evidence |
| --- | --- | --- |
| /blogs/supplier-portal-development | Title "…: A Practical Guide" → "…: Features, Security and Build vs Buy"; new description | 546 impr @ 7.1, 0 clicks |
| /blogs/ecommerce-data-warehouse | Description answers the question directly | `when does an ecommerce brand need a data warehouse?` 62 @ 1.7, 0 clicks |
| /blogs/ai-agent-autonomy-levels | Description answers what autonomy depends on | Question queries @ 5–8, 0 clicks |
| /blogs/omnichannel-ecommerce-architecture | Title leads with "Omnichannel Architecture" | `omnichannel architecture` 46 @ 11.3 |
| /blogs/wholesale-ecommerce-website | Title names concrete contents | 94 impr @ 6.0, 0 clicks |
| /blogs/lms-development-australia | Title leads with "Custom LMS Development" | `custom lms australia` 33 @ 12.5 |

Snippet-only changes did not update the article's `updated` date. Content changes did.

## Internal linking

The audit found contextual linking already strong: each of the 40 highest-impression articles links in its body to the relevant service page, and no article has fewer than 2 internal pages linking to it. Added in this batch:

- SaaS article → `/services/website-development`, `saas-pricing-page-optimization`, `product-analytics-identity`, `design-token-categories`, `what-is-a-headless-cms`, plus 3 related-article cards
- UI vs UX article → `design-handoff`

No sitewide link insertion was done.

## Schema

No schema code changed. The two new AI automation FAQs appear automatically in that page's existing FAQPage markup, and the new legacy-modernisation FAQ in its article's FAQPage markup. Both are visible on the page.

## Performance

No changes. There was no CWV data to justify any, and the code review found no clear problems. See `technical-seo-report.md`.

## Tests performed

| Check | Result |
| --- | --- |
| `npx tsc --noEmit` | Pass |
| `npx eslint` | 0 errors; 9 warnings, all pre-existing unused imports in unrelated home components |
| `next build` | Pass; 3,376 static outputs (1,138 HTML pages) |
| Crawl diff, before vs after | Same 1,138 pages; only the 15 intended pages changed title, description, H1 or body length |
| Broken internal links | 0 |
| Duplicate titles or descriptions | 0 |
| Canonicals and robots | Unchanged, all correct |
| Local server | `next start`: changed service and blog pages return 200; the service-page H1 markup was checked in the served HTML |
| Visual check | **Not done in a browser** (extension unavailable). Verified via markup and compiled CSS only |
| Contact form | Not touched, not submitted |

## Decisions needed from you

1. **Agency listicles (11 URLs, `/blogs/best-*-agencies-in-*` and `best-*-companies-in-*`).** Seven of them received 686 impressions, mostly for hire-intent queries ("ai automation agency india", "ui ux design agency in india") that the service pages should capture. The pages rank ZSpace first among competitors, which conflicts with your rule against agency rankings. Options:
   - **(a)** keep them as they are;
   - **(b)** rewrite them as neutral "how to choose" guides with no ranking, keeping the URLs;
   - **(c)** 301-redirect each to the matching service page (or the existing `how-to-choose-*` guides) and update the internal links that point to them.

   Recommended: **(c)** for the six India-wide pages, after one more month of data, because they compete directly with the service pages. Treat the city and state pages (Mumbai, Delhi NCR, Bengaluru, Ahmedabad, Gujarat) the same way.
2. **Deployment.** Production is behind the repository (see `technical-seo-report.md`). Confirm the Vercel production branch before relying on any of these changes.
3. **Custom software service page.** Optional; see `new-content-opportunities.csv`.
4. **Homepage H1** ("Meet ZSpace Labs, your website builder." with a rotating phrase). "Website builder" can read like a DIY tool such as Wix. Consider wording such as "your website, app and AI automation team". This is a brand decision, so it wasn't changed.

## Remaining issues

- Query-to-page mapping is inferred. Export Queries filtered by page for the top 20 pages, or use the Search Console API, to confirm it.
- 33 further pages are marked "UPDATE (planned)" in `complete-seo-audit.csv`. They are the next batch.
- Content quality in `complete-seo-audit.csv` is an automated word-count signal for most URLs. Only the 15 changed pages and the next-batch candidates were reviewed manually.
