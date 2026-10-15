# 05 — Batch 2 Implementation, Metadata, Linking and QA

Implemented and validated on 14 October 2026 in the working tree on `master`, on top of the uncommitted Batch 1 changes. **Not committed and not deployed.**

**Owner approvals on 14 Oct 2026:**
- Implement everything planned in `03`.
- Fix the `shopify-funnel-audit` error, but **do not** merge or redirect it.

## 1. What changed

### New articles (7)

| # | URL | Category | Data file |
|---|---|---|---|
| 22 | `/blogs/api-integration-development-cost` | Web Development | `src/lib/blog-data-founder-2-build.ts` |
| 27 | `/blogs/mobile-app-launch-checklist` | Mobile Apps | same |
| 35 | `/blogs/saas-dashboard-design` | UI/UX | `src/lib/blog-data-founder-2-insight.ts` |
| 39 | `/blogs/measure-multi-channel-website-conversions` | CRO | same |
| 29 | `/blogs/woocommerce-to-shopify-migration-checklist` | Shopify & Ecommerce | `src/lib/blog-data-founder-2-commerce.ts` |
| 31 | `/blogs/shopify-for-b2b-ecommerce` | Shopify & Ecommerce | same |
| 32 | `/blogs/shopify-checkout-customisation-guide` | Shopify & Ecommerce | `src/lib/blog-data-founder-2-checkout.ts` |

The four files are registered in `src/lib/blog-data.ts` (4 imports, plus 4 spreads at the end of `posts.push`). No routes, components, config or dependencies changed.

### Substantial updates (12 pages)

All 12 keep their URL and `date`, and set `updated: "2026-10-14"`.

| # | URL | Main change |
|---|---|---|
| 21 | `website-requirements-document` | Permissions matrix, integration register, measurable NFRs, untestable → testable table, founder vs agency decisions, two-tier template. H1 now covers web apps. |
| 23 | `website-redesign-vs-rebuild` | Five-stage modernisation roadmap; "stage the back end, not the URL change" (Google site moves); PHP 8.2 end of life on 31 Dec 2026. H1 now includes "Staged Modernisation". |
| 24 | `software-vendor-handover-checklist` | Website and marketing-stack checklist, safe order of steps, Google account lockout details, ICANN transfer rules, email-sending records, the uncooperative vendor. Now market-neutral. |
| 25 | `mobile-app-backend-development` | Custom vs managed decision table, data-residency regions, limits, exit plan. Corrected the claim that Sign in with Apple is mandatory (Guideline 4.8 requires an *equivalent* privacy-preserving login). |
| 26 | `mobile-app-data-privacy` | Store pre-flight table, privacy manifests and required-reason APIs (ITMS-91053), account deletion vs deactivation, Data safety for apps that collect nothing, the photo/video policy, MASVS-PRIVACY, an SDK audit worksheet, regional notes. |
| 28 | `mobile-app-push-notifications` | Strategy layer: permission timing, transactional vs marketing (Guideline 4.5.4, HIG), interruption levels, a send / don't send table, a policy template, signals to watch. |
| 30 | `shopify-markets` | Plan table, Managed Markets eligibility, India-based store limits, a destination-rules table (UK, Australia, Dubai), readiness checklist, duties fees. Corrected "only Shopify Payments supports multi-currency" to "Shopify Payments or Adyen". |
| 33 | `usability-testing` | Pre-redesign benchmarking: the Learn / Compare / Prove plan, a script, a freeze sheet, re-test timing and SUS. |
| 34 | `website-accessibility-guide` | 22-row pre-launch audit checklist (with a "can a scanner catch it?" column), WCAG 2.2 additions, web app patterns, a market triage table. |
| 36 | `saas-onboarding-optimization` | Time-to-value measurement, a "subtract before you add" table, NN/g citations. About 500 words added, so it was treated as substantial. |
| 37 | `landing-page-development` | Intent → page type → CTA matrix, message match worksheet, paid vs organic, Quality Score facts, a doorway-page warning. New H1. |
| 38 | `saas-pricing-page-optimization` | A table of dark patterns on pricing, trials and cancellation, a market rules table (UK verified; India and Australia sourced to law firms and labelled; US FTC rule vacated), and a market-neutral rewrite of the Australia-only content. New H1. |

### Minor updates, corrections and trims (no date change)

| Page | Change |
|---|---|
| `ecommerce-conversion-funnel` (topic 40) | Official citations; the GA4 checkout funnel exploration; note that Shopify's funnel has no product-view step |
| `shopify-funnel-audit` | **Correction:** Shopify's "Conversion rate breakdown" steps are sessions → cart additions → reached checkout → completed checkout. Removed the "product views" stage. Not merged. |
| `find-shopify-conversion-problems` | **Correction:** the same product-views error in one sentence |
| `shopify-plus-development` | **Correction:** B2B is on all plans (changelog, 2 Apr 2026); "B2B on Plus" is now "B2B: What Plus Adds" |
| `b2b-ecommerce-website-development` | **Correction:** market-tailored B2B is on Advanced and Plus |
| `migrating-to-shopify-guide` | **Correction:** customer passwords and sign-in after the 26 Feb 2026 change. The Woo worked example was cut to a link. |
| `shopify-checkout-optimization` | **Trim:** the plan table became a summary that links to topic 32; plan, Functions and post-purchase FAQs reworded; checkout.liquid wording corrected to give the end dates; `readingTime` corrected (15 → 8 min) |

### Backlinks added (18; no date changes)

| From | To |
|---|---|
| `website-api-integration`, `website-api-integrations-list`, `api-integration-reliability`, `custom-web-application-development-cost` | `api-integration-development-cost` |
| `mobile-app-testing`, `mobile-app-release-management`, `mobile-app-development-process` | `mobile-app-launch-checklist` |
| `ecommerce-data-migration`, `ecommerce-platform-migration-checklist` | `woocommerce-to-shopify-migration-checklist` |
| `wholesale-ecommerce-website`, `shopify-plus-vs-shopify` | `shopify-for-b2b-ecommerce` |
| `shopify-checkout-audit`, `shopify-plus-vs-shopify` | `shopify-checkout-customisation-guide` |
| `saas-product-design`, `ecommerce-dashboard-design`, `marketplace-seller-dashboard` | `saas-dashboard-design` |
| `ecommerce-attribution`, `improve-website-enquiry-form-conversions` | `measure-multi-channel-website-conversions` |

The new and updated pages also link to each other and to the Batch 1 articles where useful. The corrected pages link to their new canonical guides: B2B, WooCommerce and checkout.

## 2. Metadata summary (rendered from the production build)

Notes on the table:
- **Title:** the rendered `<title>` with its character count; " — ZSpace Labs" is appended when it fits.
- **Desc:** meta description length.
- **Words:** rendered main content, approximate.
- **H2s:** includes the template's FAQ, related and CTA headings.

| URL | Type | Title (chars) | Desc | Words | H2s | Ext. sources | FAQs | Published / Modified |
|---|---|---|---|---|---|---|---|---|
| `api-integration-development-cost` | New | API Integration Cost: A Scoping Worksheet — ZSpace Labs (55) | 157 | ~3,410 | 17 | 8 | 5 | 2026-10-14 / 2026-10-14 |
| `mobile-app-launch-checklist` | New | First App Launch Checklist: Testing to Release — ZSpace Labs (60) | 154 | ~3,420 | 18 | 18 | 5 | 2026-10-14 / 2026-10-14 |
| `woocommerce-to-shopify-migration-checklist` | New | WooCommerce to Shopify Migration Checklist — ZSpace Labs (56) | 154 | ~3,120 | 19 | 9 | 6 | 2026-10-14 / 2026-10-14 |
| `shopify-for-b2b-ecommerce` | New | Is Shopify Right for B2B Ecommerce? What to Evaluate — ZSpace Labs (66) | 151 | ~2,540 | 17 | 8 | 6 | 2026-10-14 / 2026-10-14 |
| `shopify-checkout-customisation-guide` | New | Shopify Checkout Customisation: What Each Plan Allows — ZSpace Labs (67) | 144 | ~3,710 | 20 | 18 | 6 | 2026-10-14 / 2026-10-14 |
| `saas-dashboard-design` | New | SaaS Dashboard Design: Help Users Act, Not Just Look — ZSpace Labs (66) | 156 | ~3,190 | 19 | 7 | 6 | 2026-10-14 / 2026-10-14 |
| `measure-multi-channel-website-conversions` | New | Measuring Conversions Across Channels for Lead-Gen — ZSpace Labs (64) | 153 | ~3,230 | 20 | 10 | 6 | 2026-10-14 / 2026-10-14 |
| `website-requirements-document` | Updated | Website Requirements Document: What to Include — ZSpace Labs (60) | 154 | ~3,190 | 20 | 6 | 10 | 2026-09-19 / 2026-10-14 |
| `website-redesign-vs-rebuild` | Updated | Website Redesign vs Rebuild: Which Do You Need? — ZSpace Labs (61) | 151 | ~2,600 | 17 | 6 | 10 | 2026-09-20 / 2026-10-14 |
| `software-vendor-handover-checklist` | Updated | Website and Software Handover Checklist — ZSpace Labs (53) | 148 | ~2,820 | 19 | 7 | 7 | 2026-10-10 / 2026-10-14 |
| `mobile-app-backend-development` | Updated | Mobile App Backend: Do You Need a Custom One? — ZSpace Labs (59) | 153 | ~3,440 | 22 | 14 | 11 | 2026-09-25 / 2026-10-14 |
| `mobile-app-data-privacy` | Updated | App Privacy Before Launch: Apple and Google Rules — ZSpace Labs (63) | 154 | ~3,300 | 21 | 19 | 12 | 2026-09-25 / 2026-10-14 |
| `mobile-app-push-notifications` | Updated | Push Notifications: Strategy and Implementation — ZSpace Labs (61) | 152 | ~3,410 | 25 | 8 | 12 | 2026-09-25 / 2026-10-14 |
| `shopify-markets` | Updated | Shopify Markets: Build a Multi-Market Ecommerce Store — ZSpace Labs (67) | 148 | ~3,430 | 25 | 12 | 13 | 2026-09-29 / 2026-10-14 |
| `usability-testing` | Updated | Usability Testing: How to Test a Website or Digital Product (59) | 147 | ~3,570 | 29 | 6 | 13 | 2026-09-25 / 2026-10-14 |
| `website-accessibility-guide` | Updated | Website Accessibility Guide and Pre-Launch Audit Checklist (58) | 158 | ~2,790 | 16 | 12 | 10 | 2026-09-24 / 2026-10-14 |
| `saas-onboarding-optimization` | Updated | SaaS Onboarding Optimisation: Activation and Time to Value (58) | 153 | ~2,440 | 19 | 3 | 7 | 2026-10-09 / 2026-10-14 |
| `landing-page-development` | Updated | Landing Page Development: Match Intent, Convert Better — ZSpace Labs (68) | 147 | ~2,770 | 18 | 6 | 11 | 2026-09-24 / 2026-10-14 |
| `saas-pricing-page-optimization` | Updated | SaaS Pricing Page Optimisation Without Dark Patterns — ZSpace Labs (66) | 126 | ~2,800 | 19 | 10 | 7 | 2026-10-10 / 2026-10-14 |

**Every page above has:**
- one H1;
- a self-referencing canonical;
- valid BlogPosting JSON-LD, with headline equal to the H1 and correct dates;
- a 4-item BreadcrumbList;
- FAQPage markup whose questions are visible on the page (verified).

The author remains the Organization; there is still no genuine named author to credit.

**CTAs:** each page has one in-article section CTA plus the template CTA, using the existing `/contact?src=/blogs/<slug>` pattern. No analytics code was touched, and `generate_lead` is unchanged.

## 3. QA and validation results

| Check | Result |
|---|---|
| `npx tsc --noEmit` | Pass |
| `npx eslint src` | 0 errors; 9 warnings, all pre-existing (unchanged since 13 Oct) |
| `npx next build` | Pass. 3,190 static outputs (Batch 1: 3,169; +21 = 7 articles × 3) |
| Automated tests | None exist in the repo |
| Full sitemap crawl of the local production build | **1,076 URLs** (1,062 live + 7 Batch 1 + 7 Batch 2). 0 non-200, 0 H1 problems, 0 duplicate titles, 0 duplicate meta descriptions, 0 canonical problems, 0 noindex, 0 invalid JSON-LD, 0 images without alt. 1,084 internal link targets, 0 broken |
| Sitemap and robots | All 7 new URLs are in the sitemap; robots.txt is unchanged |
| Mobile (Chrome headless, 390 px) | All **44** touched pages: no horizontal overflow; every table is in a scroll container |
| Raw markup in rendered text | None on all 44 pages |
| CTA target | `/contact?src=…` returns 200 |
| Data validator, whole corpus | 0 errors in Batch 2 pages. The one pre-existing issue (markdown link in `llms-txt`) was left untouched. Warnings remain only on the minor-edit pages and come from their original text (em dashes, no Sources section); they were not rewritten. |
| Claims scan (risky phrasing, uncited %, price figures) | Clean. The only money figures are verified store fees (US$99, US$25) and Shopify's post-purchase US$0.50 minimum |

**Fixed during QA:**
- Removed an Indie Hackers link from the Sources section of `mobile-app-backend-development`. Its content had not been read, so it should not be presented as a source.
- Corrected the stale reading time on `shopify-checkout-optimization`.
- Corrected the product-views error in a second article, `find-shopify-conversion-problems`.

**Not checked:** Search Console URL Inspection, Rich Results Test, GA4 DebugView and field Core Web Vitals. All need a deployment. A build does not show indexing, ranking or AI-answer inclusion.

## 4. For human review before deploying

1. **Read the 7 new articles and the 12 substantial updates.** They are AI-drafted, with every changing fact checked against a primary source on 14 Oct 2026.
2. **Changed H1s:** `website-requirements-document`, `website-redesign-vs-rebuild`, `software-vendor-handover-checklist`, `mobile-app-backend-development`, `mobile-app-data-privacy`, `mobile-app-push-notifications`, `landing-page-development`, `saas-pricing-page-optimization`. URLs are unchanged.
3. **Editorial judgements labelled as such in the text:**
   - dashboard scorecard bands;
   - app launch lead times;
   - the "can a scanner catch it?" column;
   - API integration driver scores;
   - ICANN sequencing advice.
4. **Law-firm-sourced points, labelled in the text.** Confirm them against official texts before relying on them:
   - India CCPA dark-patterns guidelines;
   - Australia's 2027 unfair trading practices law and whether it applies to B2B;
   - India DPDP phase dates;
   - UAE PDPL regulations.
5. **Shopify source conflicts, noted in the articles:**
   - Store Migration app scope (Help Center vs App Store listing);
   - Apple Pay and B2B (payment methods page vs considerations page);
   - per-market Checkout Blocks (changelog says Advanced, help page says Plus);
   - the Checkout Blocks page has not caught up with the 13 Apr order-value-limits change.
6. **Re-check at publication:**
   - Apple screenshot sizes;
   - Shopify fees and plan matrices;
   - Google Ads Data Manager API status;
   - the ATO A$1,000 rule (the official page was unreachable, so it is worded cautiously).
7. **Still open:**
   - MERGE of `why-is-my-website-not-converting` (from Batch 1);
   - author bylines;
   - the bulk-publishing pause;
   - committing Batch 1 and Batch 2.
