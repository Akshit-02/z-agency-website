# 02 — Content Overlap and Cannibalisation Report (Founder Batch 1)

Prepared 14 October 2026. Data: `01-blog-inventory.csv` (all 1,030 articles, extracted from `src/lib/blog-data*.ts`), reconciled against the live sitemap on the same day and the 13 October crawl in `../global-audit-2026-10/`.

## 1. Inventory facts

| Check | Result |
|---|---|
| Articles in repository | 1,030 (254 data files under `src/lib/`, aggregated in `src/lib/blog-data.ts`) |
| Article URLs in live sitemap (14 Oct 2026) | 1,030, an exact match. 0 in the repo but not live, 0 live but not in the repo |
| Other sitemap URLs | 32 (home, 6 service pages, 6 category hubs, industries, about, contact, legal). 1,062 in total |
| Live markup spot-check (`/blogs/website-gets-traffic-but-no-leads`) | One H1, a self-referencing canonical, and BlogPosting, BreadcrumbList and FAQPage JSON-LD. The 13 Oct security headers are live, so the global-audit branch has been deployed |
| Orphans / broken internal links / duplicate titles | 0 / 0 / 0 (13 Oct crawl, not re-crawled today because no content has changed since) |
| Category split | Web Development 310 · AI & Automation 254 · UI/UX 188 · Shopify & Ecommerce 157 · CRO 77 · Mobile Apps 44 |
| Geography (from slug and content) | Global 898 · Australia 73 · UAE 35 · UK 12 · India 11 · GCC 1 |
| Authorship | Every article uses the Organization as `author` in JSON-LD. No named authors or reviewers exist |
| Performance evidence | **None.** There is no Search Console, GA4, CrUX or keyword-tool access. Every priority in this folder is qualitative |

### How the content system works (for implementers)

- **Storage:** typed TypeScript objects (`BlogPost`, `BlogSection` in `src/lib/blog-data.ts`). Each batch lives in its own `blog-data-<topic>.ts` file, which is spread into `posts`. There is no external CMS.
- **Route:** `/blogs/[slug]` is statically generated. The canonical is `/blogs/<slug>`. `title` is the H1, and the optional `seoTitle` is used for the `<title>` tag and social title. `excerpt` becomes the meta description.
- **Dates:** `date` is the publication date. `updated` is set only for substantial revisions (it feeds `dateModified`).
- **Body features:** `table`, `checklist`, `callout`, `code`, `diagram`, and a per-section `cta`. The CTA button always says "Start a Project" and links to `/contact?src=/blogs/<slug>`, which preselects the enquiry source.
- **Links:** written inline as `[[/path|anchor]]`. Sources go in a "Sources" H2 with an access date.
- **Hubs:** `src/lib/blog-categories.ts` holds the 6 category hubs and their `startHere` picks.
- **Related:** `relatedSlugs` (curated) is used first, then same-category and shared-service picks.
- **Structured data:** BlogPosting with the organisation as author, FAQPage when FAQs are visible (FAQ rich results were retired by Google in 2026, so this markup is inert for display), and BreadcrumbList.
- **Gap against the brief:** the content model has **no author or reviewer field**. Adding real bylines (`Person`) needs real people (see `../global-audit-2026-10/README.md` Q4). I have not invented one.

## 2. Method

1. **Intent similarity:** TF-IDF cosine on slug, title, SEO title, excerpt, H2s and FAQ questions for every proposed topic against all 1,030 articles (top matches are in `03-batch-1-decisions.md`).
2. **Title-level pairs:** all in-scope article pairs with title similarity ≥ 0.62 (206 same-market pairs) are listed in `02-title-similarity-pairs.tsv`. These are *signals to check*, not verdicts.
3. **Body overlap** for each Batch 1 candidate cluster: the share of shared 8-word sequences (copying) and body term-frequency cosine (same subject matter).
4. **Manual review** of H2 outlines and FAQ questions for every overlapping article named below.

## 3. Findings relevant to Batch 1

No pair is a copy: shared 8-word sequences are 0–6%. The risk is **two URLs answering the same question**. The table below lists every overlap that affects a Batch 1 decision.

| Cluster | Articles | 8-gram | Body cos | Assessment | Recommendation |
|---|---|---|---|---|---|
| Shopify theme vs custom | `shopify-theme-vs-custom-development` (H1: *Theme Customization: What Can You Actually Change?*) · `shopify-theme-development` (*Custom Theme vs Existing Theme*) · `when-do-you-need-custom-shopify-development` | 0.7% / 0.0% | 0.79 / 0.50 | **Slug/intent mismatch.** The URL that literally matches "shopify theme vs custom development" answers a different question (what customisation can change). The page that answers "theme vs custom" is `shopify-theme-development`. | KEEP all URLs. **Human review:** either retitle `shopify-theme-vs-custom-development` so its H1 reflects the slug (and move the customisation-levels content forward), or accept the mismatch. No redirect without Search Console data. Do **not** create a new URL. |
| Shopify speed | `shopify-core-web-vitals-performance-guide` (665w) · `shopify-speed-cro` (1,167w) · `why-page-speed-still-decides-conversion` · `shopify-speed-checklist-before-you-add-another-app` · `why-is-my-website-slow` | ≤1.2% | 0.46–0.70 | Five pages already touch Shopify speed. A sixth "why is my Shopify store slow" page would cannibalise. | UPDATE one page into the troubleshooting answer (target chosen in 03). |
| Traffic but no leads / not converting | `website-gets-traffic-but-no-leads` · `why-is-my-website-not-converting` | **5.9%** | 0.66 | Same diagnostic intent, with the same section list (traffic quality, messaging, UX, CTA, forms, trust, mobile, speed). A MERGE was already proposed on 13 Oct and is awaiting approval. | Batch 1 topics 14 and 17 both land here. **Do not create** `website-traffic-but-no-leads` or `website-ux-problem-vs-traffic-problem`. UPDATE the surviving page and keep the MERGE decision with the owner. |
| Redesign decisions | `website-redesign-vs-rebuild` (includes "incremental improvement") · `when-does-your-website-need-a-redesign` · `shopify-redesign-vs-rebuild` · `shopify-store-redesign-guide` · `ux-debt` | 0% | 0.45–0.74 | The "redesign or fix the UX" intent is already answered by `website-redesign-vs-rebuild`. The Shopify pair is a separate platform intent. | KEEP. Cross-link only. |
| A/B testing first | `ecommerce-ab-testing` (H1 ends *What Should You Test First?*) · `ecommerce-experiment-prioritization` · `shopify-ab-testing` · `ecommerce-ab-testing-ideas` · `shopify-cro-testing-ideas` · `shopify-cro-tips` (MERGE proposed 13 Oct) | ≤0.3% | 0.59–0.69 | The ecommerce "what to test first" intent is saturated. Nothing addresses **lead-generation sites with too little traffic to A/B test**. | KEEP the ecommerce pages. Cover the lead-gen and low-traffic angle in the new low-traffic CRO article instead of a new "what to A/B test first" URL. |
| Mobile app vs mobile web | `pwa-vs-native-app` · `ecommerce-pwa-vs-native-app` · `ecommerce-mobile-app-vs-mobile-website` · `progressive-web-app-development` | ≤0.1% | 0.54–0.77 | PWA vs native is covered twice (general and ecommerce). There is no "should a *startup* start with the web" framing. | UPDATE `pwa-vs-native-app` rather than add a fifth page. |
| Native vs cross-platform | `native-vs-cross-platform-app-development` (exact proposed slug) · `flutter-vs-react-native` · `react-native-app-development` | 0.1% | 0.65 | The topic already exists at the proposed URL. | KEEP, plus a citation pass. |
| Builders vs custom / Next.js | `custom-website-vs-website-builder` (709w, no sources) · `custom-website-vs-wordpress` · `wordpress-vs-nextjs` · `nextjs-website-development` · `custom-cms-vs-wordpress` | 0% | 0.32–0.55 | "Next.js vs a website builder" is the same decision as "custom vs builder". | UPDATE `custom-website-vs-website-builder`. Do not create `nextjs-vs-website-builder`. |
| Shopify integrations | `shopify-business-systems-integration-guide` (623w) · `shopify-app-integration-guide` · `ecommerce-erp-integration` · `ecommerce-crm-integration` | ≤0.2% | 0.60–0.65 | The business-side integration guide exists but has no "what to integrate first, before scaling" sequencing. | UPDATE `shopify-business-systems-integration-guide`. |
| Design systems | `design-systems-for-teams-that-move-fast` | n/a | n/a | Its FAQs already answer "Does a small team need one?" and "What should a first design system include?" | KEEP. |
| Cost guides | `mobile-app-development-cost` (710w, no figures) · `mobile-app-development-cost-australia` · `website-development-cost` · `custom-software-development-{uk,australia}` | 0% | 0.63 | The global app-cost page explains cost drivers without numbers. There is no global web-application cost page. Publishing prices is blocked on owner-approved ranges (global audit P2-8). | UPDATE the app-cost page with verifiable fixed costs and a worksheet. Hold the web-app cost page (RESEARCH MORE) until the owner supplies ranges. |
| MVP | `mvp-development-australia` · `mvp-development-uae` (body cos 0.75 with each other) · `saas-roadmap-prioritization` · `software-product-discovery-australia` | 1.0% | 0.75 | Two regional MVP guides exist, but there is **no market-neutral MVP or feature-scoping article**. `software-product-discovery-australia` has a global H1 but an Australian slug. | CREATE the SaaS MVP scoping article, linking out to the regional guides for local tax and funding detail. |

## 4. Corpus-wide observations (not Batch 1 decisions)

These came up during the scan. They are logged for the owner and **not acted on**:

- **Self-ranked `best-*-in-india` lists** are near-identical in title pattern (title similarity 0.81–0.93) and duplicate the `how-to-choose-*` intent. These were already raised as global audit F2 and P2-7, and still await approval.
- **`how-to-choose-website-development-company` vs `how-to-choose-ecommerce-development-company`** (title 0.92). These are probably distinct buyers, but check with Search Console.
- **Vertical matrices** (`{beauty,sports,food,grocery}-ecommerce-{website-design,ux,website-development,redesign}`) reach title similarity 0.94. The global audit already says not to extend them, and the Batch 2 roadmap respects this.
- **`product-design-vs-ux-design` / `ui-design-vs-ux-design` / `ui-ux-design-guide`** (0.83–0.87): a likely intent overlap. Review with data before any merge.

## 5. What this report does *not* establish

- Whether Google currently ranks either URL in any pair, or treats any pair as cannibalising. That needs Search Console query-to-page data.
- Search volumes. None were available and none are stated.
