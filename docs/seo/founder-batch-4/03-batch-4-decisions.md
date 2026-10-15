# 03 — Batch 4 (Topics 61–80): Topic-by-Topic Decisions

Decided 15 October 2026 (IST). All sources in `research/` were checked on 15 Oct 2026.

**Evidence base:**
- Similarity scoring against all 1,050 articles in the working tree (1,030 live, plus 20 from Batches 1–3, none deployed).
- A manual read of the H2s and FAQs of every overlapping article.
- The master roadmap.
- Five primary-source research files.
- A check against the audit-only decision files that other sessions have written for Batches 5–10.

**Limits:**
- There is no Search Console, GA4 or keyword data, so priorities are qualitative.
- Reddit and People Also Ask were unreachable, and search results were US-only.
- Demand evidence is weak for most topics in this batch.

## Summary

| # | Proposed topic | Decision | Primary URL | Roadmap row | Priority |
|---|---|---|---|---|---|
| 61 | Web application hosting cost | **CREATE** | `/blogs/web-application-hosting-cost` | WEB-15 (reserved slug `web-app-hosting-running-costs` retired) | P1 |
| 62 | CMS vs custom admin panel | **CREATE** (slug changed) | `/blogs/admin-panel-build-vs-buy` (roadmap slug) | WEB-10 | P2 |
| 63 | Web app security checklist before launch | **KEEP + minor** | `/blogs/website-security-checklist` | WEB-31 | P2 |
| 64 | SaaS architecture for multiple roles and organisations | **UPDATE** (slug exists) | `/blogs/multi-tenant-saas-architecture` | WEB-13 (KEEP → UPDATE) | P2 |
| 65 | Mobile app monetisation models | **CREATE** (hub) | `/blogs/mobile-app-monetisation-models` | MOB-08 (replaced) | P1 |
| 66 | App store optimisation checklist | **UPDATE** | `/blogs/app-store-optimization` | MOB-22 (replaced) | P2 |
| 67 | Should your app work offline? | **UPDATE** | `/blogs/offline-first-mobile-app-development` | MOB-17 (replaced) | P2 |
| 68 | Choosing a payment gateway for an app | **UPDATE** (retitle) | `/blogs/mobile-app-payments` | MOB-30 note (payments) | P1 |
| 69 | Subscription business on Shopify | **KEEP + minor** | `/blogs/shopify-subscription-store` | SHP-14 | P3 |
| 70 | Headless vs traditional Shopify | **UPDATE** (+ corrections) | `/blogs/shopify-hydrogen-vs-traditional-shopify` | SHP-09 (MERGE still pending) | P2 |
| 71 | Shopify product page checklist | **UPDATE** | `/blogs/shopify-product-page-audit` | SHP-18 (replaced) | P2 |
| 72 | Shopify analytics and tracking audit | **CREATE** | `/blogs/shopify-analytics-tracking-audit` | SHP-29 (slug `shopify-ga4-sales-mismatch` retired) | P1 |
| 73 | UX audit process and deliverables | **KEEP + minor** | `/blogs/how-to-conduct-a-ux-audit` | UX-06 note | P3 |
| 74 | Website information architecture | **UPDATE** (+ correction) | `/blogs/information-architecture` | UX-25 (replaced) | P2 |
| 75 | Multi-step form UX | **CREATE** | `/blogs/multi-step-form-ux-design` | UX-29 (replaced) | P2 |
| 76 | UX metrics beyond conversion rate | **CREATE** | `/blogs/ux-metrics-beyond-conversion-rate` | UX-28 (slug `how-to-measure-ux-improvements` retired) | P2 |
| 77 | Pricing transparency for service businesses | **CREATE** | `/blogs/should-you-show-prices-on-your-website` (roadmap slug) | CRO-29 | P1 |
| 78 | Website trust signals | **UPDATE** | `/blogs/website-trust-and-credibility` | CRO-23 | P2 |
| 79 | Ecommerce checkout UX audit | **UPDATE** (+ correction) | `/blogs/why-customers-abandon-checkout` | CRO-40 (replaced) | P2 |
| 80 | Analysing CRO experiments | **KEEP + minor** | `/blogs/ecommerce-ab-testing-framework` | CRO-24 (replaced) | P3 |

**Totals:**

| Decision | Count | Topics |
|---|---|---|
| CREATE | 7 | 61, 62, 65, 72, 75, 76, 77 |
| UPDATE | 9 | 64, 66, 67, 68, 70, 71, 74, 78, 79 |
| KEEP + minor | 4 | 63, 69, 73, 80 |
| MERGE / DEFER / REJECT | 0 | |

**Proposed slugs not used:**

| Topic | Proposed slug | Why |
|---|---|---|
| 62 | `cms-vs-custom-admin-panel` | A "CMS vs…" slug would compete with three existing CMS pages. The roadmap's reserved `admin-panel-build-vs-buy` names the actual decision |
| 64 | `multi-tenant-saas-architecture` | **Already exists**; updated in place |
| 66 | `app-store-optimisation-checklist` | Same intent as `app-store-optimization` |
| 67 | `offline-functionality-mobile-apps` | 0.84 match with `offline-first-mobile-app-development` |
| 68 | `mobile-app-payment-gateway-selection` | Ranking pages combine choosing and integrating, and ZSpace already has three choosing-a-provider sections. A fourth URL would compete |
| 69 | `shopify-subscription-business-guide` | 0.86 match with `shopify-subscription-store`, which already has a launch checklist |
| 70 | `headless-shopify-vs-traditional-shopify` | 0.71 match with `shopify-hydrogen-vs-traditional-shopify` |
| 71 | `shopify-product-page-design-checklist` | Same intent as `shopify-product-page-audit` ("40 things to check") |
| 73 | `ux-audit-process-checklist` | Same intent as `how-to-conduct-a-ux-audit` |
| 74 | `website-information-architecture-guide` | Same intent as `information-architecture` |
| 77 | `website-pricing-transparency` | The roadmap's reserved `should-you-show-prices-on-your-website` matches the founder's question word for word |
| 78 | `website-trust-signals` | 0.62 match with `website-trust-and-credibility` |
| 79 | `ecommerce-checkout-ux-audit` | Three checkout pages already exist; the audit belongs on `why-customers-abandon-checkout` |
| 80 | `cro-experiment-analysis-guide` | Four experiment pages already exist |

**Accuracy corrections found during research** (no `updated` date change):

| Page | Problem | Source |
|---|---|---|
| `information-architecture` | The SEO FAQ implies Google uses URL structure to understand site structure. Google says it "generally doesn't look at the structure of URLs"; internal links matter | Google Search Central |
| `shopify-checkout-audit` | Says checkout.liquid was "deprecated in 2024", which is incomplete. Information, shipping and payment steps: 13 Aug 2024. Thank-you and order-status pages: 28 Aug 2025 (Plus). Script tags: 26 Aug 2026 (non-Plus) | shopify.dev (Batch 2 verified) |
| `shopify-hydrogen`, `headless-shopify-explained` (and topic 70's page) | Describe Hydrogen as React Router–only. Since 14 Oct 2026, Hydrogen 2026-10 is a framework-agnostic library with React Router and Next.js starters; Oxygen is still free. `shopify-hydrogen` also says "25 Hydrogen storefronts for Plus"; the current wording is 25 public environments on Plus and 1 on other paid plans | shopify.dev changelog (14 Oct 2026) |
| `shopify-analytics-guide` | Predates Shopify's session-measurement change of 21–23 Sep 2026 (no midnight split; bots filtered by default), which can shift conversion rates with no change in sales | Shopify changelog |
| `mobile-app-development-cost` (Batch 1) | Says India, UAE and Singapore Play fees are "unchanged until updated fees roll out". Google has now dated the "Rest of World" move: 30 Sep 2027 | Android Developers blog |

---

## Web development

### 61. Hosting cost: CREATE `web-application-hosting-cost`
- **Why a new page.** The hosting bill is a distinct question. Batch 1's web-app cost guide has only a 7-row running-cost table, which will link to this page.
- **Original asset.**
  - A cost table: line items (compute, bandwidth and egress, database, storage, CDN, email, monitoring, backups, environments) against four architectures (static/Jamstack, PaaS, cloud serverless or containers, VPS).
  - What each item is billed by, and where each free tier ends.
  - A region table.
- **Pricing.** Owner policy is no ZSpace prices and no market averages. **Verified vendor list prices** are cited with date, currency and billing basis, labelled as list prices that change:
  - Vercel Hobby is non-commercial. Vercel Pro is a US$20/month platform fee with one seat and US$20 usage credit.
  - Netlify, Railway and Cloudflare Workers list prices.
  - DigitalOcean from US$4/month.
  - Render's free Postgres expires after 30 days.
  - AWS, Google Cloud and Azure free tiers.
- **Regions (verified).**
  - AWS: Mumbai, Hyderabad and UAE. Hyderabad and UAE are opt-in regions.
  - Azure: UAE North, and India South Central (Hyderabad).
  - Google Cloud: no UAE region.
- **Verify at writing.**
  - Render's paid pricing page did not load.
  - Two AWS pages disagree on 6 vs 12 months of free tier.
  - "Prices vary by region" is an inference.

### 62. Admin panel: CREATE `admin-panel-build-vs-buy`
- **The distinction.** A content CMS and an operational back office are different jobs; Django's own documentation draws that line.
- **Options.** A CMS, a framework admin (Django admin, Laravel Filament/Nova), an internal-tool builder (Retool, Appsmith), or fully custom.
- **Original asset.** A table of common admin jobs against the four options, plus a back-office requirements checklist.
- **Verified facts.**
  - Retool, Appsmith and Nova list prices.
  - Filament is MIT-licensed.
  - Directus now uses its own source-available licence. Competitors calling it "BSL" are out of date.
- **Closest overlap.** `low-code-vs-custom-software`; link both ways.

### 63. Security checklist: KEEP + minor `website-security-checklist`
- **Why KEEP.** The page has 2,168 words, was updated on 9 Oct, and maps to the OWASP Top 10:2025 and NIST CSF.
- **Minor update.** Add a "Pre-launch security sign-off" table: check, evidence, owner, blocks launch?
  - security.txt (RFC 9116)
  - a cross-account access test (BOLA)
  - a tested backup restore
  - a named sign-off
- **Optional.** An SEO title that also catches "web app" searches.
- **Cannibalisation.** The three security pages split by stage and market. No action needed.
- **Hand-off.** Batch 9 topic 164 plans a "preparing for a security review" section on the pen-testing page. Link to it, don't repeat it.

### 64. Multi-tenant SaaS: UPDATE `multi-tenant-saas-architecture`
- **Add.**
  - A neutral data model: organisations, users, memberships, roles, permissions, time-boxed support access, per-org SSO.
  - A tenant isolation decision table.
  - Cross-tenant risks: OWASP Multi-Tenant cheat sheet, BOLA, PostgreSQL row-level security and the connections that bypass it.
  - Per-tenant data residency.
- **Keep short.** SSO and SCIM link to `enterprise-sso-implementation`.
- **Market-neutral.** Replace "Australian considerations" with a market-neutral section that keeps APP 8 as one bullet.
- **Keep distinct.** `saas-roles-and-permissions` owns permission design inside one organisation; link both ways.
- **Hand-off.** Batch 9 topic 161 plans the same update. This batch does it; Batch 9 should re-check the page and narrow its scope.

## Mobile apps

### 65. Monetisation: CREATE `mobile-app-monetisation-models` (hub)
- **Why a new page.** No page covers monetisation. `mobile-app-payments` has only one unsourced paragraph on rules, and no page covers ads. MOB-13 (in-app purchase vs external payment) and MOB-26 (subscriptions) remain deep dives.
- **Original asset.** Each model mapped to its payment route and the exact clause: Apple App Review Guidelines 3.1.x, or the Google Play Payments policy section.
- **Ads.**
  - AdMob: no clicking your own ads.
  - Play: no full-screen ads that can't be closed after 15 seconds.
  - A consent tool is required for the EEA, UK and Switzerland.
  - ATT.
- **Fees (re-verified 15 Oct).**
  - **Google Play:** 10% on the first US$1M and on subscriptions, plus a 5% billing fee in the US, UK, EEA, Australia and Japan. South Korea moves on 31 Dec 2026. **"Rest of World" (including India, UAE, Singapore) moves on 30 Sep 2027;** until then, 15%/30%.
  - **Apple EU (from 1 Oct 2026):** 26% for IAP, 20% with alternative payment processing, 15% on link-outs. The 5% Core Technology Commission applies only to apps distributed **outside** the App Store; it is not added to App Store fees (corrected 15 Oct during writing).
  - **US iOS link-outs:** no commission at present; the rate is still being decided in court.
- **Other notes.** Google Play has no equivalent of Apple's reader-app exception. No revenue benchmarks are given; none with a stated method was found.

### 66. ASO: UPDATE `app-store-optimization`
- **Add.** A pre-launch ASO checklist (discoverability and listing conversion; the Batch 2 launch checklist owns submission).
- **Limits, all verified.**
  - Apple: name and subtitle 30, keywords 100, promotional text 170; 10 screenshots; 3 previews of 15–30 s; 70 custom product pages.
  - Google Play: title 30, short description 80, full description 4,000; up to 50 custom store listings, now targetable by search keyword.
- **Flag.** One Apple page counts the keyword field in characters, another in bytes. This matters for Hindi and Arabic.
- **Ratings prompts.**
  - Apple: at most 3 per 365 days. `SKStoreReviewController` is deprecated in favour of `RequestReviewAction`.
  - Google: the limit is undisclosed. Don't trigger the prompt from a button, and don't pre-ask "Do you like the app?".

### 67. Offline: UPDATE `offline-first-mobile-app-development`
- **Add.**
  - A job-by-job decision worksheet using Android's official vocabulary: online-only; queued and lazy writes; pull vs push sync.
  - Cost drivers, in effort terms.
  - A sync-vendor risk box.
- **Verified fact.** MongoDB Atlas Device Sync was deprecated in September 2024 and reached end of life on 30 Sep 2025. The local Realm database continues as open source.
- **Hand-off.** Batch 9 topic 165 rejected an "offline sync" topic as already covered by this page. That is still consistent.

### 68. Payment gateway for an app: UPDATE `mobile-app-payments` (retitle)
- **Add.**
  - A gateway selection scorecard: platform rules first; then supported methods by market, SDKs, settlement, onboarding, fee structure (no rates), PCI scope, 3DS/SCA and recurring payments.
  - Market notes.
- **India (verified on rbi.org.in).**
  - Payment aggregator directions, 15 Sep 2025: online, physical and cross-border categories; non-bank aggregators need authorisation and escrow.
  - E-mandate Framework, 21 Apr 2026:
    - recurring debits up to ₹15,000 can go through without extra authentication;
    - the limit is ₹1 lakh for insurance, mutual funds and card bills;
    - customers must be notified at least 24 hours before each debit;
    - no charge to the customer.
- **Hedge or omit.** UAE (CBUAE) licence categories, EU SCA thresholds and Singapore thresholds were not verified on primary sources.
- **Unchanged.** MOB-23 (UPI) stays separate.
- **Hand-off.** Batch 8 topic 145 lists `mobile-app-payments` as related, so re-check it there.

## Shopify and ecommerce

### 69. Subscriptions on Shopify: KEEP + minor `shopify-subscription-store`
- **Why KEEP.** The Batch 3 gateway fix and a launch checklist are already in place, and unit economics are covered in `subscription-ecommerce-vs-one-time-purchase`.
- **Minor update.**
  - An "India-based stores" H2 on the RBI e-mandate rules: 24-hour pre-debit notice, extra authentication above ₹15,000.
  - The native app's limits: no bundles, no draft orders, no order edits, some discounts apply to the first payment only.
- **Not stated.** Whether the native Subscriptions app works for India-based merchants is unverified.
- **Consistent with Batch 10.** Batch 10 topic 190 rejected a Shopify subscriptions topic as covered by this page.

### 70. Headless vs traditional: UPDATE `shopify-hydrogen-vs-traditional-shopify`
- **Reframe the options.** Since 14 Oct 2026 Hydrogen is a framework-agnostic library. The options become:
  - a Liquid theme;
  - the Hydrogen library on React Router or Next.js, on Oxygen or self-hosted;
  - the Storefront API without Hydrogen.
- **Add.**
  - Oxygen's plan matrix: free on all paid plans, including Starter, but not on Agentic plans; 25 public environments on Plus, 1 elsewhere.
  - Runtime limits.
  - Storefront API limits, including the checkout-creation throttle and the buyer-IP header for server-side calls.
  - Theme app extensions are Online Store 2.0–only.
  - Markets in headless.
  - Headless channel limits.
  - A cost-of-ownership worksheet with no prices.
- **Also correct.** The `shopify-hydrogen` and `headless-shopify-explained` framing.
- **Owner decision.** Roadmap SHP-09 proposes merging `headless-shopify-explained` into this page (body cosine 0.82). Batch 9 topic 169 plans to update `headless-shopify-explained` instead. Approve or decline the merge; this batch only corrects facts on that page.

### 71. Product page checklist: UPDATE `shopify-product-page-audit`
- **Ownership.** This page owns "Shopify product page checklist". Trim `shopify-product-page-optimization`'s 11-item checklist to a summary plus a link (body cosine 0.78), and add a link from `ecommerce-product-page-design`.
- **Verified facts.**
  - Baymard 2026 (updated 18 Mar 2026): 52% of desktop, 62% of mobile and 64% of app product pages are "mediocre or worse".
  - Combined listings: Plus-only, up to 60 products and 2,048 variants.
  - Official media size limits.
  - WCAG 2.2: 2.4.11 (focus hidden by sticky add-to-cart bars) and 2.5.8 (target size).
- **Verify.** The 250-media-per-product limit comes from a search snippet only.

### 72. Tracking audit: CREATE `shopify-analytics-tracking-audit`
- **Why a new page.** The audit intent ("are my numbers reliable?") is distinct from `shopify-analytics-guide` (which metrics to track). SHP-29 (why Shopify, GA4 and Meta differ) becomes an H2 here.
- **Original asset.** An audit checklist with tests: place a test order, compare transaction IDs, check consent states, and so on.
- **Verified facts.**
  - Shopify counts sessions only from visitors who accept cookies.
  - The 21–23 Sep 2026 session change.
  - GA4 deduplicates purchases only for the same user on web streams.
  - Meta deduplicates Pixel and CAPI events only within 48 hours.
  - App pixels run in a strict sandbox; Shopify does not support custom pixels (lax sandbox).
- **Do not state.** Meta's default attribution window, Google Ads click-date reporting, a full official list of Google & YouTube app events.

## UI/UX

### 73. UX audit: KEEP + minor `how-to-conduct-a-ux-audit`
- **No cannibalisation.** The split already exists: `ux-audit` covers what it is and whether you need one; this page covers method. The workflow has 12 steps and already uses Nielsen's severity scale.
- **Minor update.**
  - Add a "what you should receive" deliverables table after the report step.
  - Link NN/g's heuristics, severity ratings and heuristic-evaluation articles (verified), here and on `ux-heuristic-evaluation`.
- **Unchanged.** UX-06 (audit cost) remains for later.
- **Hand-off.** Batch 7 and Batch 9 reference both pages, so re-check them there.

### 74. Information architecture: UPDATE `information-architecture` (+ correction)
- **Add.**
  - Content audit.
  - Open, closed and hybrid card sorting, with NN/g sample sizes.
  - Tree-test metrics.
  - Navigation models, briefly.
  - A sitemap deliverable.
  - URL and breadcrumb guidance.
- **Correct.** The URL-structure FAQ (see corrections).
- **Verify.** Google breadcrumbs are desktop-only since January 2025 (seen via a search summary only), and the "~50 participants" tree-test figure.
- **Hand-off.** Batch 8 topic 155 plans a "testing navigation before a redesign" update to this page, so re-check it there.

### 75. Multi-step forms: CREATE `multi-step-form-ux-design`
- **Why a new page.** Overlap is low. The Batch 1 enquiry-form page mentions multi-step forms once, and the checkout pages are checkout-only.
- **Sources.**
  - GOV.UK question pages, check answers, task list and error summary patterns. GOV.UK says to test without a progress indicator first; a 12-step indicator was removed from Carer's Allowance with no effect on completion.
  - NN/g on wizards.
  - WCAG 3.3.7, 2.4.3 and 2.2.1.
  - Baymard checkout steps.
- **Measurement.** GA4's built-in form events cannot show which step people abandon, so the page explains custom step events.
- **Do not use.** "Multi-step converts X% better" claims; they are unsourced.
- **Unchanged.** UX-37 (SaaS signup abandonment) stays, narrowed to diagnosis.

### 76. UX metrics: CREATE `ux-metrics-beyond-conversion-rate`
- **Absorbs UX-28.** Its reserved slug is retired.
- **Original asset.** A metric selection table: question → metric → method → sample-size caveat.
- **Verified.**
  - HEART (Rodden, Hutchinson and Fu, CHI 2010).
  - CASTLE (NN/g's framework for workplace tools).
  - SEQ.
  - NN/g's success rate guidance.
  - Bain's NPS definition, plus NN/g's 2024 cautions and the Keiningham 2007 critique (abstract only).
  - SUS average of 68.
  - Core Web Vitals.
  - GA4 engagement definition.
- **Do not use.** A "78% task success median" figure; it was not found on NN/g.
- **Scope.** Links to `usability-testing` for methods.

## CRO

### 77. Pricing transparency: CREATE `should-you-show-prices-on-your-website`
- **Roadmap.** Uses the slug reserved by CRO-29. The title carries the "transparent without undervaluing" angle.
- **Audience.** Service businesses. The Batch 2 SaaS pricing page stays SaaS-specific.
- **Original asset.**
  - A matrix of 7 price-display formats.
  - A "scope transparency" block (what's included, what's excluded, what moves the price, timescales, who does the work), modelled on the UK SRA's mandatory price-information items (verified).
- **Legal facts.**
  - **Verified (CMA summary on gov.uk):** "from" or indicative prices must include all mandatory charges. If the total can't be calculated in advance, explain how it is calculated, with equal prominence.
  - **Secondary-sourced only, hedged:** the UK Provision of Services Regulations, India's Clinical Establishments rule, Australia's single-price rule.
- **Hand-off.** Batch 6 topic 119 (service packages) deferred into CRO-29, so this page should cover packages briefly.

### 78. Trust signals: UPDATE `website-trust-and-credibility`
- **Add.**
  - A trust-signal inventory by page type and stage.
  - A "no case studies yet" section (absorbs CRO-23).
  - A "what not to fake" list by market.
- **Scope.** The Shopify trust page stays separate and links to the list.
- **Verified.**
  - Fogg's Stanford guidelines: 2002, unmaintained, so cite as foundational only.
  - NN/g's four credibility factors (2016).
  - Google's Who/How/Why guidance (updated 5 Oct 2026).
  - UK fake-review ban and CMA guidance (4 Apr 2025).
  - FTC reviews rule (announced 14 Aug 2024).
- **Secondary only, hedged.** FTC effective date; India IS 19000; ACCC and Ahpra points.
- **Hand-off.** Batch 8 topic 159 (placing trust signals) plans an update to this page, so re-check it there.

### 79. Checkout UX audit: UPDATE `why-customers-abandon-checkout` (owns "audit")
- **Why this page.** It already has a cause-to-evidence table.
  - It gains a checkout audit checklist with an evidence column. Baymard's own audit article has no evidence column.
  - `ecommerce-checkout-ux` stays the design guide; the audit links to it for fixes.
  - `shopify-checkout-audit` stays the Shopify version, with its FAQ corrected.
  - This also separates the two pages with the highest text overlap measured so far (7.4% shared 8-grams, 0.80 cosine).
- **Verified.** Baymard: 70.22% abandonment across 50 studies (updated 22 Sep 2025); no newer figure as of today.
- **Hand-off.** Batch 9 topic 177 plans a minor update here, so re-check it there.

### 80. Experiment analysis: KEEP + minor `ecommerce-ab-testing-framework`
- **Add.**
  - A "trust checks before reading the result" block at the start of Analysis:
    - sample ratio mismatch (SRM), checked with a chi-square test. Microsoft uses p < 0.0005; its 2020 article reports SRM in about 6% of its tests;
    - Twyman's law, described without quoting the book.
  - A "from result to next test" table after Decision Rules, handing off to the prioritisation page.
- **Do not use.** "67–90% of tests are inconclusive" (vendor claim).
- **Hand-off.** Batch 7 topic 140 (when to stop a test) plans an update to this page, so re-check it there.

---

## Cross-batch coordination

Other sessions have written **audit-only** decision files for Batches 5–10. None has changed site files. Because Batch 4 is implemented first, these later items must re-read their target pages before acting:

| Later batch item | Page | What Batch 4 does there |
|---|---|---|
| B7 #140 (when to stop a test) | `ecommerce-ab-testing-framework` | Adds trust checks and a next-test table |
| B8 #143 (RBAC) | `saas-roles-and-permissions` | Links only (the page is kept as the permissions page) |
| B8 #155 (navigation testing) | `information-architecture` | Substantial update, including tree testing |
| B8 #159 (placing trust signals) | `website-trust-and-credibility` | Substantial update, including an inventory by page type |
| B9 #161 (multi-tenant) | `multi-tenant-saas-architecture` | **The same update, done here.** B9 should narrow or drop it |
| B9 #169 (headless readiness) | `headless-shopify-explained` | Fact corrections only; SHP-09 merge pending |
| B9 #177 (cart abandonment) | `why-customers-abandon-checkout` | Becomes the checkout audit page |

## International relevance

Every topic is global and India-first. Market notes appear only where the answer differs:

| Topic | Market note |
|---|---|
| 61 | Cloud regions per market |
| 65 | Play fee timing by region; EU Apple terms; US litigation |
| 68 | RBI rules for India; UAE, EU and Singapore hedged |
| 69 | RBI e-mandate for India |
| 77 | UK CMA, verified; India and Australia hedged |
| 78 | Fake-review rules by market |

No regional copies.
