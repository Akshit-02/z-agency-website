# ZSpace Labs: Founder-Focused Content Programme, Batch 2 (Topics 21–40)

Prepared 14 October 2026 (IST). This is the research date for every source in this folder.

**Status: complete and validated in the working tree.** On 14 Oct 2026 the owner approved everything, with the funnel error fixed and no merge. Done:
- 7 new articles
- 12 substantial updates
- 1 minor update
- 6 corrections and trims
- 18 backlinks

See `05-implementation-and-qa.md`. **Nothing is committed or deployed.**

**Baseline.** Batch 1 (7 new articles, 7 updates) is still uncommitted in the working tree. It was preserved and treated as existing content. Git status at the start of Batch 2: 19 modified `src/lib/blog-data*.ts` files, 3 new founder data files and the `docs/seo/founder-batch-1/` folder, all from Batch 1.

## Deliverables

| # (brief) | Deliverable | File | Status |
|---|---|---|---|
| 1 | Complete blog inventory and URL map (1,037 rows, with a `batch2_topic_overlap` column) | `01-blog-inventory.csv` | Done |
| 2 | Research notes with dated sources (one file per cluster) | `research/research-{webdev,mobile,shopify,uiux,cro}.md` | Done |
| 3 | Topic-by-topic decisions for 21–40 | `03-batch-2-decisions.md` | Done |
| 4 | Cannibalisation and overlap report | `02-overlap-and-cannibalisation.md` | Done |
| 5 | Updated master 200-topic tracker | `../founder-batch-1/04-editorial-roadmap-200.csv` (the single master; new `batch` column) | Done |
| 6 | Created / updated / merged / kept / deferred list | `03` summary table + `05` §1 | Done |
| 7 | Final content for approved articles | `src/lib/blog-data-founder-2-{build,insight,commerce,checkout}.ts` + 19 edited articles (`05` §1) | Done |
| 8 | Metadata, internal-linking and CTA changes | `05` §1–2 | Done |
| 9 | Build and QA results | `05` §3 | Done |
| 10, 11 | Outstanding issues and Batch 3 priorities | this README | Done |

**Unchanged since Batch 1:**
- Architecture: TypeScript data files, `/blogs/[slug]`, a self-referencing canonical, BlogPosting + BreadcrumbList + FAQPage JSON-LD, Organization author, section CTA → `/contact?src=`.
- The no-prices policy.
- Google guidance as researched on 12 Oct (`../global-audit-2026-10/05-market-research.md`).
- No redirects exist for blog URLs.
- Performance data: still none (no Search Console, GA4 or keyword access).

## Decisions in brief

**CREATE (7):**
- 22: API integration cost, as a scoping worksheet
- 27: app launch checklist
- 29: WooCommerce → Shopify migration
- 31: Shopify for B2B
- 32: Shopify checkout customisation by plan
- 35: SaaS dashboards, at the reserved slug `saas-dashboard-design`
- 39: multi-channel conversion measurement for lead-gen and B2B (hub)

**UPDATE (11):**
- 21: requirements document
- 23: redesign vs rebuild, adding staged modernisation
- 24: handover checklist
- 25: app backend
- 26: app privacy
- 28: push notifications
- 30: Shopify Markets
- 33: usability testing
- 34: accessibility guide
- 37: landing pages
- 38: SaaS pricing page

**KEEP + minor update (2):**
- 36: onboarding. Add time-to-value.
- 40: funnel analysis. Add citations.

**Factual corrections found in existing pages (4; a fifth was found during QA in `find-shopify-conversion-problems`):**
- `shopify-plus-development`: B2B presented as Plus-only.
- `b2b-ecommerce-website-development`: market-tailored B2B is Advanced and Plus, not Plus only.
- `shopify-funnel-audit`: describes a "product views" step that Shopify's funnel report doesn't have.
- `migrating-to-shopify-guide`: password FAQ is outdated since the 26 Feb 2026 customer-account change.

**Supporting trims, so the new pages don't compete:**
- `shopify-checkout-optimization`: reduce the plan table to a summary that links to topic 32.
- `migrating-to-shopify-guide`: cut the Woo paragraph to a link to topic 29.

## Implementation plan (approved and done 14 Oct 2026)

1. **New articles.** Seven, in a new `src/lib/blog-data-founder-2.ts` (or one file per cluster), registered in `blog-data.ts`. Same conventions as Batch 1:
   - answer first
   - one original asset each
   - Sources H2 with the access date
   - hypothetical examples labelled
   - no prices, no em dashes, British English
2. **Updates.** Thirteen pages, in place, keeping each URL and `date`:
   - 11 substantial updates set `updated: "2026-10-14"`;
   - the 2 minor ones don't.
3. **Corrections and trims.** Six pages; no date change.
4. **Links.** Reciprocal links from related existing articles to each new page, plus links between the new and updated pages.
5. **QA.** Same suite as Batch 1:
   - tsc, lint and build
   - full sitemap crawl (status, H1, canonical, titles and descriptions, JSON-LD, broken links)
   - 390 px mobile overflow check
   - raw-markup scan and claims scan
   - CTA targets

Writers will run in parallel, each with their own files.

## Outstanding issues and items for human review

**Owner decisions:**
1. ~~Approve Batch 2~~: approved and implemented.
2. ~~Funnel MERGE~~: declined for now; the error is fixed in both affected articles. Revisit with Search Console data.
2a. **Review before deploying:** see `05` §4 (new articles, 8 changed H1s, labelled editorial judgements, law-firm-sourced points).
3. **Still open from Batch 1 and the global audit:**
   - review of the 7 Batch 1 articles before deploy
   - real author bylines
   - the `why-is-my-website-not-converting` merge
   - the bulk-publishing pause
   - committing Batch 1

**Facts to verify before they appear in an article** (all flagged in `research/`):
- **Shopify**
  - Translate & Adapt limits.
  - Adyen availability for India-based or non-Plus stores.
  - Vaulted B2B cards without Shopify Payments.
  - Rollouts plan availability.
  - The exact customer-account behaviour for imported customers (test on a dev store).
  - Store Migration app scope: Shopify's own docs and the App Store listing conflict.
- **Legal and regulatory**
  - India: CCPA dark-patterns text (12 vs 13 patterns), DPDP phase dates, RPwD rules for private websites.
  - Australia: drip-pricing applicability to B2B; the ATO A$1,000 page (403 during research).
  - UAE: PDPL regulations status.
  - EU: EAA micro-enterprise wording (full text).
  - UK: PECR and push notifications (draft code only).
- **Platforms**
  - Google Data Manager API status after 15 Jun 2026.
  - Apple screenshot sizes at publication.
  - WCAG-EM 2.0 title.
  - ICANN post-update lock change.
- **Other**
  - The date GA4 renamed conversions to "key events" (open since Batch 1).

**Research limits.**
- Reddit and People Also Ask were unreachable from every route.
- SERPs were observed from the US only.
- Demand evidence comes from Hacker News, Indie Hackers, the Shopify Community and the Figma forum, and is weakest for topics 21 and 34.
- No search-volume claims are made.

**Roadmap housekeeping.**
- Batch 1 left one duplicate pair (CRO-12 and CRO-29). It is now resolved.
- Five low-value rows were reused for Batch 2 topics. Each reuse is recorded in the row.
- The tracker still has 200 rows with no duplicate URLs: 110 CREATE, 59 UPDATE, 26 KEEP, 4 MERGE, 1 RESEARCH MORE.

## Recommended priorities for Batch 3

Wait until Batch 1 and 2 are live and Search Console has 60–90 days of data. Then, from the roadmap's P1 rows:

- **Buyer protection:**
  - WEB-14 fixed price vs time and materials
  - WEB-23 code and app ownership
  - SHP-19 Shopify store ownership
  - UX-15 Figma file ownership

  Together with topic 24 (handover), these form a "working with an agency safely" cluster.
- **India-first commerce:** SHP-25 COD/RTO, SHP-26 payment gateways, WEB-32 the DPDP checklist (websites, web apps, apps) and UX-27 dark patterns. Topic 38 now links to UX-27, so it should follow soon.
- **Lead-gen measurement:** CRO-16 GA4 key events, CRO-15 lead quality, CRO-17 offline conversions. These sit under the topic 39 hub, so write them next.
- **Time-sensitive platform pages:**
  - SHP-11: Scripts → Functions
  - MOB-16: Play closed testing
  - MOB-13: in-app purchase vs external payments, which needs a review date because the litigation is ongoing
  - SHP-12: checkout upgrade broke tracking, a natural companion to topic 32

No ranking, AI-citation or lead outcome is guaranteed.
