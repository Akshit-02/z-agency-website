# 05 — Batch 4 Final Report: Implementation, Metadata, Linking and QA

Implemented and validated on 15 October 2026 (IST), in the working tree on `master`. It sits on top of the uncommitted Batches 1–3. **Not committed and not deployed.**

**Owner approvals (15 Oct 2026):**
- Implement everything planned in `03`.
- **Do not** merge `headless-shopify-explained` yet (SHP-09).

**Execution notes:**
- Four writers were cut off by a usage limit and one by a network error. Every file they owned was checked for partial edits. Completed work was validated, and the unfinished items (information architecture, the Hydrogen comparison, the product page checklist, the Plus wording fixes and one backlink) were re-run and finished.
- One type error was fixed: a callout type of `warning`, which is not valid; it is now `note`.

## 1. Topics and decisions (deliverables 1–3)

See `03-batch-4-decisions.md` for:
- every topic with its decision, evidence, overlapping URLs, primary URL, service page and audience;
- the 14 proposed slugs not used, and why;
- the cross-batch coordination table.

**Summary:** 7 CREATE, 9 UPDATE, 4 KEEP + minor; no MERGE, DEFER or REJECT.

## 2. Created and updated articles (deliverables 4–5)

### New (7)

| # | URL | Data file |
|---|---|---|
| 61 | `/blogs/web-application-hosting-cost` | `src/lib/blog-data-founder-4-build.ts` |
| 62 | `/blogs/admin-panel-build-vs-buy` | same |
| 65 | `/blogs/mobile-app-monetisation-models` | `src/lib/blog-data-founder-4-mobile.ts` |
| 72 | `/blogs/shopify-analytics-tracking-audit` | `src/lib/blog-data-founder-4-commerce.ts` |
| 75 | `/blogs/multi-step-form-ux-design` | `src/lib/blog-data-founder-4-ux.ts` |
| 76 | `/blogs/ux-metrics-beyond-conversion-rate` | same |
| 77 | `/blogs/should-you-show-prices-on-your-website` | `src/lib/blog-data-founder-4-cro.ts` |

The five files are registered in `src/lib/blog-data.ts`. No routes, components, config, dependencies or redirects changed.

### Substantial updates (9)

All keep their URL and `date`, with `updated: "2026-10-15"`:
- `multi-tenant-saas-architecture` (64)
- `app-store-optimization` (66)
- `offline-first-mobile-app-development` (67)
- `mobile-app-payments` (68, retitled)
- `shopify-hydrogen-vs-traditional-shopify` (70)
- `shopify-product-page-audit` (71, now the 40-point checklist)
- `information-architecture` (74)
- `website-trust-and-credibility` (78)
- `why-customers-abandon-checkout` (79, now the checkout audit)

### Minor updates, corrections and trims (no date change)

| Page | Change |
|---|---|
| `website-security-checklist` (63) | Pre-launch security sign-off table: security.txt (RFC 9116), cross-account (BOLA) test, restore test, named sign-off |
| `shopify-subscription-store` (69) | India e-mandate section (RBI framework, 21 Apr 2026: 24-hour notice, ₹15,000 threshold); native Subscriptions app limits |
| `how-to-conduct-a-ux-audit` (73), `ux-heuristic-evaluation` | Deliverables table; NN/g heuristics and severity links |
| `ecommerce-ab-testing-framework` (80) | SRM and Twyman trust checks (worked example verified: 10,000 vs 10,600 gives p ≈ 0.00003); "from result to next test" table |
| `shopify-checkout-audit` | **Correction:** checkout.liquid dates (13 Aug 2024; 28 Aug 2025 for Plus; 26 Aug 2026 script tags for non-Plus) |
| `shopify-hydrogen`, `headless-shopify-explained` | **Correction:** Hydrogen 2026-10 is framework-agnostic (14 Oct 2026); Oxygen environments are 25 on Plus and 1 elsewhere |
| `shopify-plus-development`, `shopify-plus-vs-shopify` | **Correction:** "25 Hydrogen storefronts" changed to "25 public Oxygen environments (1 on other paid plans)" |
| `shopify-analytics-guide` | **Correction:** Shopify's 21–23 Sep 2026 session-measurement change |
| `mobile-app-development-cost` | **Correction:** Google Play "Rest of World" fee rollout dated 30 Sep 2027 |
| `shopify-product-page-optimization` | Checklist trimmed to a summary that links to the audit page |
| `ecommerce-product-page-design`, `custom-web-application-development-cost` | One contextual link each |

## 3. Metadata (deliverable 5), rendered from the production build

| URL | Type | H1 | Title (chars) | Desc | Words | Ext. sources | FAQs | Published / Modified |
|---|---|---|---|---|---|---|---|---|
| `web-application-hosting-cost` | New | How Much Does It Cost to Host a Web Application? | Web Application Hosting Cost: The Monthly Bill, Line by Line (60) | 156 | ~4,090 | 19 | 6 | 2026-10-15 / 2026-10-15 |
| `admin-panel-build-vs-buy` | New | CMS, Framework Admin, Internal-Tool Builder or Custom: How to Choose Your Admin Panel | Admin Panel: CMS, Framework, Builder or Custom Build? — ZSpace Labs (67) | 150 | ~2,748 | 12 | 6 | 2026-10-15 / 2026-10-15 |
| `mobile-app-monetisation-models` | New | How to Monetise a Mobile App: Subscriptions, Freemium, Ads and One-Time Payments | How to Monetise a Mobile App: Models, Rules and Fees — ZSpace Labs (66) | 160 | ~3,938 | 13 | 7 | 2026-10-15 / 2026-10-15 |
| `ux-metrics-beyond-conversion-rate` | New | UX Metrics That Matter Beyond Conversion Rate | UX Metrics That Matter Beyond Conversion Rate — ZSpace Labs (59) | 157 | ~3,193 | 15 | 5 | 2026-10-15 / 2026-10-15 |
| `multi-step-form-ux-design` | New | How to Design Better Multi-Step Forms Without Frustrating Users | Multi-Step Form UX: Design Without Frustration — ZSpace Labs (60) | 159 | ~3,424 | 12 | 6 | 2026-10-15 / 2026-10-15 |
| `shopify-analytics-tracking-audit` | New | Shopify Analytics and Tracking Audit: Are Your Ecommerce Numbers Reliable? | Shopify Tracking Audit: Are Your Numbers Reliable? — ZSpace Labs (64) | 155 | ~4,051 | 20 | 6 | 2026-10-15 / 2026-10-15 |
| `should-you-show-prices-on-your-website` | New | Should You Show Prices on Your Website? How to Be Transparent Without Undervaluing Your Service | Should You Show Prices on Your Website? — ZSpace Labs (53) | 155 | ~3,028 | 5 | 6 | 2026-10-15 / 2026-10-15 |
| `shopify-product-page-audit` | Updated | Shopify Product Page Checklist: 40 Things to Check (2026) | Shopify Product Page Checklist: 40 Things to Check (2026) (57) | 149 | ~3,779 | 11 | 10 | 2026-08-17 / 2026-10-15 |
| `website-trust-and-credibility` | Updated | How to Improve Website Trust and Credibility: Trust Signals by Page, and What Not to Fake | How to Improve Website Trust and Credibility — ZSpace Labs (58) | 149 | ~3,103 | 7 | 10 | 2026-09-24 / 2026-10-15 |
| `offline-first-mobile-app-development` | Updated | Should Your App Work Offline? Offline-First Planning and Development Guide | Should Your App Work Offline? Offline-First Guide — ZSpace Labs (63) | 152 | ~2,935 | 9 | 11 | 2026-09-25 / 2026-10-15 |
| `mobile-app-payments` | Updated | Mobile App Payments: How to Choose a Gateway and Build a Secure Checkout | Mobile App Payments: Choosing a Gateway and Checkout — ZSpace Labs (66) | 153 | ~3,306 | 13 | 12 | 2026-09-25 / 2026-10-15 |
| `information-architecture` | Updated | Information Architecture: How to Structure a Website or Digital Product | Information Architecture: Structure a Site or Product — ZSpace Labs (67) | 147 | ~2,962 | 10 | 10 | 2026-09-25 / 2026-10-15 |
| `why-customers-abandon-checkout` | Updated | Why Customers Abandon Checkout: Causes and a Checkout Audit Checklist | Checkout Abandonment: Causes and an Audit Checklist — ZSpace Labs (65) | 152 | ~3,184 | 7 | 9 | 2026-09-28 / 2026-10-15 |
| `shopify-hydrogen-vs-traditional-shopify` | Updated | Shopify Hydrogen vs Traditional Shopify: Is Headless Worth It? | Hydrogen vs Traditional Shopify: Is Headless Worth It? — ZSpace Labs (68) | 149 | ~3,146 | 14 | 10 | 2026-09-29 / 2026-10-15 |
| `multi-tenant-saas-architecture` | Updated | Multi-Tenant SaaS Architecture: Organisations, Roles, Isolation and Data Residency | Multi-Tenant SaaS Architecture: Orgs, Roles and Isolation (57) | 156 | ~3,621 | 13 | 8 | 2026-10-10 / 2026-10-15 |
| `app-store-optimization` | Updated | App Store Optimisation Checklist Before Launch: Metadata Limits, Screenshots, Experiments and Ratings | App Store Optimisation Checklist Before Launch — ZSpace Labs (60) | 157 | ~2,766 | 17 | 8 | 2026-10-10 / 2026-10-15 |

Primary intent for each page is listed in `03`. Every page has:
- one H1;
- a self-referencing canonical;
- BlogPosting JSON-LD whose headline matches the H1 and whose dates are real;
- a 4-item BreadcrumbList;
- FAQPage markup whose questions are visible on the page (verified).

Author: Organization (unchanged; no named author exists).

## 4. Sources and dates (deliverable 6)

- All sources are listed per topic in `research/` (checked 15 Oct 2026).
- Each article has a Sources section with "Accessed 15 October 2026".
- Vendor list prices (hosting, Retool and others) appear with date, currency and billing basis, labelled as list prices that change.
- Law-firm or secondary claims are labelled or omitted.

## 5. Internal links and CTAs (deliverables 7–8)

### Backlinks added from existing pages (20)

| From | To |
|---|---|
| `custom-cms-vs-wordpress`, `how-to-choose-a-cms`, `low-code-vs-custom-software` | `admin-panel-build-vs-buy` |
| `custom-web-application-development-cost` | `web-application-hosting-cost` |
| `mobile-app-development-guide`, `mobile-app-analytics`, `improve-mobile-app-retention` | `mobile-app-monetisation-models` |
| `ecommerce-analytics-architecture`, `ecommerce-attribution`, `shopify-analytics-guide` | `shopify-analytics-tracking-audit` |
| `improve-website-enquiry-form-conversions`, `ecommerce-checkout-ux` | `multi-step-form-ux-design` |
| `ecommerce-conversion-rate`, `saas-onboarding-optimization`, `usability-testing` | `ux-metrics-beyond-conversion-rate` |
| `saas-pricing-page-optimization`, `improve-website-lead-quality`, `b2b-ecommerce-pricing`, `website-trust-and-credibility` | `should-you-show-prices-on-your-website` |
| `shopify-trust-optimization` | `website-trust-and-credibility` ("what not to fake") |

New and updated pages link to each other, to Batch 1–3 pages and to their service page:
- `/services/website-development`: 61, 62, 64
- `/services/mobile-app-development`: 65–68
- `/services/shopify-development`: 69–72
- `/services/ui-ux-design`: 73–76
- `/services/cro-audit`: 77–80

**CTAs:**
- Each page has one in-article section CTA plus the template CTA, using the existing `/contact?src=/blogs/<slug>` flow (target returns 200).
- No new forms, pop-ups or analytics code. `generate_lead` is unchanged.

## 6. Regional localisation (deliverable 9)

There are no regional pages. Market notes appear only where the answer differs:

| Topic | Note |
|---|---|
| 61 | Cloud regions |
| 65 | Play fee timing by region, Apple EU terms, US litigation |
| 68, 69 | RBI rules for India |
| 77 | UK CMA rules (verified; India and Australia hedged) |
| 78 | Fake-review rules by market |

## 7. Technical SEO and structured data (deliverable 10)

- No template, schema, sitemap or robots changes.
- The new URLs appear in the generated sitemap automatically.
- Excerpts are all 160 characters or fewer, so descriptions render in full.

## 8. Checks (deliverable 11)

| Check | Result |
|---|---|
| `npx tsc --noEmit` | Pass |
| `npx eslint src` | 0 errors; 9 pre-existing warnings |
| `npx next build` | Pass; 3,229 static outputs (Batch 3: 3,208; +21 = 7 articles × 3) |
| Automated tests | None exist in the repo, so none were run |
| Content validator (whole corpus, 1,057 articles) | 0 errors in Batch 4 pages; the one pre-existing `llms-txt` issue is untouched |
| Full sitemap crawl (local production build) | 1,089 URLs. 0 non-200, 0 H1 problems, 0 duplicate titles, 0 duplicate descriptions, 0 canonical problems, 0 noindex, 0 invalid JSON-LD, 0 images without alt. 1,097 link targets, 0 broken |
| Mobile, 390 px (48 touched pages) | Pass, after fixing one overflow: a 102-character comma-separated keyword example on `app-store-optimization` was rewritten so it wraps |
| Raw-markup scan (48 pages) | No `[[` or `**` in rendered text |
| Claims scan | Clean. All money figures are dated vendor list prices, statutory fines or labelled hypothetical arithmetic |
| Accessibility | The template already scores 96 in Lighthouse (13 Oct audit); content adds tables in scroll containers and no new interactive elements. A full Lighthouse re-run was **not** done |
| Form submission | Not re-tested (no form code changed; verified on 13 Oct with a mocked API) |

**Not checkable before deployment:**
- Search Console URL Inspection
- Rich Results Test on live URLs
- GA4 DebugView
- field Core Web Vitals

A build does not show indexing, ranking or AI-answer inclusion.

## 9. Outstanding issues (deliverable 12)

1. **Inline code is not supported by the renderer.** Backticks show literally, e.g. "`qualify_lead`". This affects 25 committed strings plus some new ones. The smallest fix is to add a `` `code` `` token to `TOKEN_RE` in `src/lib/inline-content.tsx`. **Needs approval**, because it is a template change.
2. **Reading times are inconsistent across the site** (565+ articles). A one-time recalculation is recommended (see Batch 3).
3. **Product page checklist H1 contains "(2026)".** Titles with a year need an annual refresh.
4. **Cross-batch hand-offs:** the audit-only Batches 7–9 plan updates to 7 pages this batch has changed. They must re-read those pages (see `03`).
5. **Facts to re-check at publication:**
   - the Play and Apple fee timelines (South Korea, 31 Dec 2026; Rest of World, 30 Sep 2027; US litigation)
   - Hydrogen and Oxygen plan facts
   - vendor list prices
   - Baymard figures
6. **Hedged and unverified items** are listed in `03` and `research/`. These include the UAE CBUAE licence categories, EU SCA thresholds, India and Australia price-display rules, and whether the native Shopify Subscriptions app works in India.

## 10. Changes requiring your approval before publication or deployment (deliverable 13)

- **Review:**
  - the 7 new articles;
  - the 9 substantial updates;
  - the changed H1s: `mobile-app-payments`, `shopify-hydrogen-vs-traditional-shopify`, `shopify-product-page-audit`, `information-architecture`, `website-trust-and-credibility`, `why-customers-abandon-checkout`, `multi-tenant-saas-architecture`, `app-store-optimization`, `offline-first-mobile-app-development`.
- **Merge decisions:**
  - SHP-09 (headless pages; you said not yet);
  - `why-is-my-website-not-converting`;
  - `best-*` lists.
- **Inline-code renderer change**, if wanted.
- **Commit, then deploy**, Batches 1–4 together or separately.
- **Still open:** author bylines and the bulk-publishing pause.
