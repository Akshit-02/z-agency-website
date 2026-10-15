# ZSpace Labs: Founder-Focused Content Programme, Batch 4 (Topics 61–80)

Prepared 15 October 2026 (IST); research also dated 15 Oct 2026.

**Status: complete and validated in the working tree.** The owner approved everything on 15 Oct 2026 (SHP-09 merge: not yet). Batch 4 delivered 7 new articles, 9 substantial updates, 4 minor updates, corrections on 7 pages and 20 backlinks. The full report is in `05-implementation-and-qa.md`. **Nothing is committed or deployed.**

**Baseline.**
- Batches 1–3 are uncommitted in the working tree (66 changed or new paths), not deployed, and treated as existing content.
- Other sessions have written **audit-only** decision files for Batches 5–10 (`docs/seo/founder-batch-5…10/`). None has changed site files, and this batch did not edit them.
- Seven page-level overlaps with those plans are listed in `03` → "Cross-batch coordination".

## Repository and live-site audit (Phase 1, unchanged since Batch 1)

| Area | Finding |
|---|---|
| Framework | Next.js 16 (App Router), React 19, TypeScript; no CMS or database for content |
| Blog storage | Typed `BlogPost` objects in `src/lib/blog-data*.ts`, aggregated in `src/lib/blog-data.ts`. 1,050 articles in the working tree |
| Routes | `/blogs/[slug]` (static), `/blogs/category/[category]` (6 hubs), `/services/[slug]` (6 services), `/contact` |
| Metadata | `generateMetadata`. `seoTitle` or the H1 becomes the `<title>`; `metaDescription(excerpt)` truncates at 160 characters; canonical `/blogs/<slug>`; OG/Twitter images generated per post |
| Structured data | BlogPosting (Organization author and publisher; dates from `date`/`updated`), BreadcrumbList, FAQPage (FAQ rich results are retired, so the markup is inert); site-wide Organization/WebSite |
| Sitemap / robots | `src/app/sitemap.ts` (all posts) and `robots.ts` (allow all); live sitemap lists 1,030 articles |
| Internal links | `[[/path|anchor]]` inline syntax; curated `relatedSlugs`; category hubs |
| CTA / forms | Section `cta` → "Start a Project" → `/contact?src=/blogs/<slug>` (preselects source). Contact form validates server-side, uses a honeypot, and sends GA4 `generate_lead` only after a confirmed send |
| Redirects | None for blog URLs |
| Authorship | Organization only; no named authors (still open) |
| Drafts / preview | No draft mode exists. Content goes live on deploy, so nothing is deployed until owner review |
| Performance data | None (no Search Console, GA4 or keyword access) |

## Deliverables

| # | Deliverable | File | Status |
|---|---|---|---|
| 1 | Inventory and URL map (1,050 rows, `batch4_topic_overlap`) | `01-blog-inventory.csv` | Done |
| 2 | Decisions, evidence, overlapping URLs, briefs | `03-batch-4-decisions.md` | Done |
| 3 | Overlap and cannibalisation report | `02-overlap-and-cannibalisation.md` | Done |
| 4 | Research and sources with dates | `research/research-{webdev,mobile,shopify,uiux,cro}.md` | Done |
| 5 | Master roadmap | `../founder-batch-1/04-editorial-roadmap-200.csv` | Done |
| 6–13 | Implementation, metadata, links, CTAs, QA, approvals list | `05-implementation-and-qa.md` | Done |

## Decisions in brief

**CREATE (7):**
- 61 hosting cost (`web-application-hosting-cost`)
- 62 admin panel build vs buy (`admin-panel-build-vs-buy`)
- 65 app monetisation hub (`mobile-app-monetisation-models`)
- 72 Shopify tracking audit (`shopify-analytics-tracking-audit`)
- 75 multi-step forms (`multi-step-form-ux-design`)
- 76 UX metrics (`ux-metrics-beyond-conversion-rate`)
- 77 pricing transparency (`should-you-show-prices-on-your-website`)

**UPDATE (9):**
- 64 multi-tenant SaaS
- 66 ASO
- 67 offline
- 68 app payment gateways
- 70 headless vs traditional Shopify
- 71 product page checklist
- 74 information architecture
- 78 trust signals
- 79 checkout audit (`why-customers-abandon-checkout`)

**KEEP + minor (4):**
- 63 security sign-off
- 69 Shopify subscriptions, India e-mandate
- 73 UX audit deliverables
- 80 experiment trust checks

**Corrections (6 pages):**
- information-architecture URL FAQ
- shopify-checkout-audit checkout.liquid dates
- Hydrogen 2026-10 framing (`shopify-hydrogen`, `headless-shopify-explained`)
- shopify-analytics-guide session change (Sep 2026)
- Play "Rest of World" fee date on `mobile-app-development-cost`

**Supporting trim:** shorten the product-page checklist on `shopify-product-page-optimization` to a link.

## Implementation plan (approved and done 15 Oct 2026)

1. **New articles:** seven, in new `src/lib/blog-data-founder-4-*.ts` files registered in `blog-data.ts`. Same conventions as Batches 1–3:
   - answer first;
   - one original asset per article;
   - a Sources section with access dates;
   - hypothetical examples labelled as such;
   - no ZSpace prices (vendor list prices only, dated);
   - no em dashes and no bold-wrapped links;
   - excerpts of 160 characters or fewer.
2. **Updates:** edit pages in place. Keep the URL and `date`, and set `updated: "2026-10-15"` on substantial updates only.
3. **Links:** reciprocal links from related pages.
4. **QA:**
   - tsc, lint and build;
   - a full sitemap crawl;
   - a 390 px mobile check;
   - raw-markup, claims and excerpt-length scans;
   - CTA targets.

## Owner decisions needed

1. ~~Approve Batch 4~~: approved and implemented.
2. **SHP-09 (still open; owner said not yet):** merge `headless-shopify-explained` into `shopify-hydrogen-vs-traditional-shopify` with a 301, or keep both. Body cosine is 0.82, and Batch 9 #169 plans to update the first page. Batch 4 only corrects its facts either way.
3. **Still open from earlier batches:**
   - review of the Batch 1–3 articles;
   - author bylines;
   - the `best-*` lists;
   - the `why-is-my-website-not-converting` merge;
   - the bulk-publishing pause;
   - sitewide `readingTime`;
   - committing.

**Facts to verify before they appear:** see "Verify" and "Do not state" in `03`. They include:
- Render pricing;
- the AWS free-tier duration;
- UAE CBUAE licence categories;
- EU SCA thresholds;
- the Google breadcrumbs change;
- Meta attribution windows;
- whether the native Shopify Subscriptions app works for India-based merchants.

No ranking, AI-citation or lead outcome is guaranteed.
