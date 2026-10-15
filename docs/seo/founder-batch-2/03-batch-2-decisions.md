# 03 — Batch 2 (Topics 21–40): Topic-by-Topic Decisions

Decided 14 October 2026 (IST), the same research date as all sources in `research/`.

**Evidence base:**
- Similarity scoring against all 1,037 articles in the working tree (the 1,030 live articles plus the 7 Batch 1 articles, which are not yet deployed).
- A manual read of every overlapping article's H2s and FAQs.
- The 200-topic roadmap.
- Five primary-source research files.

**Limits:** there is no Search Console, GA4 or keyword data, so every priority is qualitative. Reddit and People Also Ask were unreachable, and SERPs were observed from the US only.

## Summary

| # | Working title | Decision | URL that serves the intent | Roadmap row | Priority |
|---|---|---|---|---|---|
| 21 | Requirements document for a website or web app | **UPDATE** | `/blogs/website-requirements-document` | WEB-18 | P2 |
| 22 | Cost of third-party API integration | **CREATE** (worksheet, no prices) | `/blogs/api-integration-development-cost` | WEB-26 (repurposed) | P1 |
| 23 | Rebuild a legacy website or modernise in stages | **UPDATE** | `/blogs/website-redesign-vs-rebuild` | UX-03 (KEEP → UPDATE) | P2 |
| 24 | Handover checklist for a web project | **UPDATE** | `/blogs/software-vendor-handover-checklist` | WEB-29 | P1 |
| 25 | Does your app need a custom backend? | **UPDATE** | `/blogs/mobile-app-backend-development` | MOB-10 | P2 |
| 26 | App privacy and security before launch | **UPDATE** | `/blogs/mobile-app-data-privacy` | MOB-30 (widened) | P2 |
| 27 | First app launch checklist | **CREATE** | `/blogs/mobile-app-launch-checklist` | MOB-34 (replaced) | P1 |
| 28 | Push notification strategy | **UPDATE** | `/blogs/mobile-app-push-notifications` | MOB-24 | P2 |
| 29 | WooCommerce → Shopify migration | **CREATE** | `/blogs/woocommerce-to-shopify-migration-checklist` | SHP-06 (UPDATE → CREATE) | P1 |
| 30 | Preparing Shopify for multiple countries | **UPDATE** | `/blogs/shopify-markets` | SHP-10 | P1 |
| 31 | Is Shopify right for B2B? | **CREATE** | `/blogs/shopify-for-b2b-ecommerce` | SHP-13 (slug changed) | P1 |
| 32 | Can you customise Shopify checkout? | **CREATE** | `/blogs/shopify-checkout-customisation-guide` | SHP-30 (replaced) | P1 |
| 33 | Usability testing before a redesign | **UPDATE** | `/blogs/usability-testing` | UX-22 (KEEP → UPDATE) | P2 |
| 34 | Pre-launch accessibility audit | **UPDATE** | `/blogs/website-accessibility-guide` | WEB-34 | P2 |
| 35 | SaaS dashboards that drive action | **CREATE** | `/blogs/saas-dashboard-design` (roadmap slug kept) | UX-24 | P2 |
| 36 | SaaS onboarding without more steps | **KEEP + minor update** | `/blogs/saas-onboarding-optimization` | UX-23 | P3 |
| 37 | Landing page that matches search intent | **UPDATE** | `/blogs/landing-page-development` | CRO-10 | P2 |
| 38 | SaaS pricing page without dark patterns | **UPDATE** | `/blogs/saas-pricing-page-optimization` | UX-31 | P2 |
| 39 | Measuring conversions across channels | **CREATE** (hub, lead-gen and B2B scope) | `/blogs/measure-multi-channel-website-conversions` | CRO-12 (replaced; it duplicated CRO-29) | P2 |
| 40 | Where ecommerce customers abandon | **KEEP + citation update** | `/blogs/ecommerce-conversion-funnel` | CRO-26 (replaced) | P3 |

**Totals:**

| Decision | Count | Topics |
|---|---|---|
| CREATE | 7 | 22, 27, 29, 31, 32, 35, 39 |
| UPDATE | 11 | 21, 23, 24, 25, 26, 28, 30, 33, 34, 37, 38 |
| KEEP with a minor update | 2 | 36, 40 |
| MERGE | 0 new | One existing MERGE proposal is re-raised (below) |
| DEFER | 0 | |

Two proposed slugs were changed:
- **35:** uses the slug already reserved in the roadmap.
- **38:** `saas-pricing-page-optimisation` would duplicate the existing `saas-pricing-page-optimization` (British vs US spelling), so the existing page is updated instead.

**Accuracy corrections found during research** (pages outside the 20 topics):
- `shopify-plus-development` presents B2B as a Plus feature ("B2B on Plus" section and FAQ). Since 2 Apr 2026 the core B2B features are on every plan (Shopify changelog).
- `b2b-ecommerce-website-development` says market-tailored ("contextual") B2B customisation is on Plus. It is Advanced and Plus.
- `shopify-funnel-audit` describes a "product views" stage in Shopify's conversion funnel. Shopify's report has no such step (Shopify Help).

These are corrections, not rewrites, so no `updated` date change.

---

## Full-stack development

### 21. Requirements document: UPDATE `website-requirements-document`
- **Founder question.** "What do I give agencies so quotes are comparable and the build matches what I meant?"
- **Intent and stage.** Informational; timeline and scope, before requesting quotes.
- **Existing pages.**
  - The target page is 891 words, with one or two sentences per section and no sources.
  - `product-requirements-document` (532 words) is a per-feature PRD, a different intent.
  - The roadmap already planned this update (WEB-18).
- **What is missing from the target page.**
  - A roles × actions permission matrix.
  - An integration register (direction, trigger, frequency, source of record).
  - Measurable non-functional requirements.
  - An "untestable → testable" rewrite table.
  - Who decides what: the founder or the agency.
  - A copyable two-tier template: website, plus the extra sections a web app needs.
- **Sources.**
  - GOV.UK Service Manual on user needs and user stories ("it's done when…").
  - ISO/IEC/IEEE 29148, described only at a high level and paraphrased; the primary page returned 403.
- **Demand evidence.** Weak in founder forums; mainly agency content. This is why it is an update, not a new page.
- **Service and CTA.** `/services/website-development`. CTA: "Get a scope reviewed".

### 22. API integration cost: CREATE `api-integration-development-cost`
- **Founder question.** "We need Stripe/Razorpay, Xero/Zoho, a CRM and a shipping API. Why does each integration cost so differently, and what will it cost to keep running?"
- **Why it is a new page.** No page answers it:
  - `custom-web-application-development-cost` treats integrations as one cost driver.
  - `website-api-integration` explains how integrations work.
  - `api-integration-australia` and `api-integration-uae` are regional guides.
- **SERP weakness.** Competitors lead with dollar ranges that contradict each other.
- **Original asset.** A per-integration scoring worksheet across 10 cost drivers:
  - authentication model
  - data mapping
  - sync direction
  - volume and rate limits
  - webhooks and ordering
  - error handling and reconciliation
  - sandbox fidelity
  - vendor API fees
  - versioning and deprecation cadence
  - monitoring

  Plus a register of recurring costs.
- **Pricing.** No prices (owner policy). Vendor pricing and limit pages are cited as things to check.
- **Verified hooks.**
  - Shopify releases a new API version every quarter and supports each for at least 12 months.
  - Meta Graph API versions are supported for at least two years.
  - Stripe's sandbox has lower rate limits, and Stripe discourages load testing against it.
  - Stripe webhooks can arrive out of order or more than once.
  - Xero introduced connection-based developer pricing tiers on 2 Mar 2026.
  - HubSpot API limits depend on the subscription tier.
- **Before writing.** Check the cost sections of the Australian and UAE API posts so the new article links to them rather than repeating them.
- **Slug.** The proposed slug is kept (the research suggested `api-integration-cost-estimate`).
- **Service and CTA.** `/services/website-development`. CTA: "Scope your integrations".

### 23. Rebuild or modernise a legacy website in stages: UPDATE `website-redesign-vs-rebuild`
- **Why not a new page.** `website-redesign-vs-rebuild` already frames redesign, rebuild and incremental improvement. `strangler-fig-pattern` and `legacy-software-modernization-australia` cover software, not websites.
- **What to add.** A staged roadmap:
  1. Stabilise.
  2. Upgrade in place.
  3. Rebuild section by section behind a routing layer.
  4. One URL cutover.
  5. Decommission.
- **Key nuance (Google Search Central, site moves).** Google recommends moving all URLs at once for small and medium sites. **Stage the back end, not the URL change.**
- **Timely hook.** PHP 8.2 reaches end of life on 31 Dec 2026 (php.net), and WordPress recommends PHP 8.3+. Fowler's strangler fig article (2024) is cited.
- **Status change.** Batch 1 marked this page KEEP for topic 15. Batch 2 changes it to UPDATE because the staged-modernisation question is not answered there.

### 24. Handover checklist: UPDATE `software-vendor-handover-checklist`
- **Why not a new page.** The target page (555 words) matches the intent at 0.70. A second handover checklist would compete with it.
- **What to add.**
  - A website and marketing-stack table: registrar, DNS or Cloudflare account, CMS admins, GA4 account-level Administrator, GTM, Search Console verified owners, email sending domains, theme and plugin licences, backups.
  - A **safe order of steps**: confirm your own owner access before rotating credentials or removing the vendor.
  - A "vendor won't cooperate" section (absorbs WEB-29's angle).
- **Verified facts.** Search Console verified vs delegated owners and removal of old verification tokens; GA4 account vs property access; ICANN's current 60-day transfer locks; the Gmail and Yahoo sender requirements.
- **Kept out.** ICANN's proposed change to the post-update lock (unconfirmed on icann.org), and ccTLD-specific transfer rules.
- **Scope.** Points to WEB-23 (code and IP ownership) for legal ownership; this page stays a checklist.
- **Service and CTA.** `/services/website-development`. CTA: "Get a handover reviewed".

## Mobile apps

### 25. Custom backend: UPDATE `mobile-app-backend-development`
- **Why not a new page.** The target page (640 words, no sources) already has a "Managed Services or Custom Backend" section.
- **What to add.** An architecture-led decision table covering:
  - auth, data model and rules
  - server-side logic, jobs and webhooks
  - data residency
  - export and lock-in
  - limits
  - when BaaS (backend-as-a-service) stops fitting
- **Verified (vendor documentation).**
  - Firestore's location cannot be changed after creation.
  - Firestore and Supabase both offer Mumbai, Singapore, Sydney and London regions. Neither lists a UAE region; Firestore has Doha and Dammam.
  - Export and self-hosting options.
  - Function limits.
- **India DPDP cross-border rules.** The negative-list approach is described only at a high level, because it is sourced from law firms and the Gazette was unreachable.
- **Scope.** Stays about architecture. The app-vs-website and MVP pages are linked, not repeated.

### 26. Privacy and security before launch: UPDATE `mobile-app-data-privacy`
- **Keep separate from `mobile-app-security`** (body similarity 0.44). Privacy-before-launch is a store-compliance intent.
- **What the page is missing.**
  - Apple required-reason APIs and privacy manifests (missing ones cause ITMS-91053 rejections).
  - Apple's rule that deactivating an account is not deleting it (Guideline 5.1.1(v)).
  - Play's Data safety form is required even for apps that collect no data.
  - Play account deletion, including the web deletion link.
  - The Play photo and video permissions policy (mandatory since 28 May 2025).
  - MASVS-PRIVACY (MASVS v2.1.0).
  - A pre-launch checklist.
- **Regional box.** A short one, with no unverified dates (DPDP phase dates and UAE PDPL regulation status are hedged).
- **Roadmap.** The MOB-30 row is widened to "privacy and security before launch": privacy is updated now, the `mobile-app-security` refresh later.

### 27. App launch checklist: CREATE `mobile-app-launch-checklist`
- **Why it is a new page.** For a *first* release:
  - Google Play's staged rollout cannot be used.
  - Apple documents phased release only for updates.

  So `mobile-app-release-management` does not serve someone launching v1, and `mobile-app-testing` is QA only.
- **Demand.** Strongest in this cluster: the Google Play closed-testing requirement generates many questions.
- **Original asset.** An end-to-end checklist with an owner and a lead time per item:
  1. Accounts and agreements.
  2. Store listings: required metadata, and the current screenshot sizes, to be re-checked at publication.
  3. Privacy labels.
  4. Testing tracks: TestFlight, and Play closed testing (12 testers, 14 days for new personal accounts).
  5. Review: Apple says it reviews most submissions within 24 hours and 90% within 48 hours. Google says some reviews take up to 7 days or longer.
  6. Release choices.
  7. Day-1 monitoring.
- **Later pages.** Links to MOB-16 (closed testing) and MOB-27 (rejections) when they exist.

### 28. Push notification strategy: UPDATE `mobile-app-push-notifications`
- **What to add.** A strategy layer above the existing implementation content:
  - when to ask for permission (pre-permission prompt, Android 13 `POST_NOTIFICATIONS`)
  - transactional vs marketing
  - frequency and quiet hours
  - opt-out signals
- **Rules to quote.** App Review Guideline 4.5.4 (marketing pushes need explicit opt-in consent and an in-app opt-out), and the HIG (no Time Sensitive level for marketing).
- **Kept out.** UK PECR's application to push notifications rests on a 2020 ICO draft code, so it is omitted or hedged. No market-specific push consent law is claimed.

## Shopify and ecommerce

### 29. WooCommerce → Shopify: CREATE `woocommerce-to-shopify-migration-checklist`
- **Why it is a new page.** It is a platform-specific migration intent. The generic `migrating-to-shopify-guide` has only a one-paragraph Woo example. Cannibalisation risk is low, provided that paragraph is cut to two sentences with a link.
- **Original asset.** A Woo → Shopify data mapping table plus a plugin → app checklist.
- **Verified facts.**
  - 2,048 variants and 3 options per product, raised from 100 on 15 Oct 2025. Some themes and apps still stop at 100.
  - Woo products with more than 3 attributes lose options on import.
  - Shopify's migration tooling: its own docs say products only and early access, while the App Store listing says products and customers. The article will be cautious.
  - Historical orders and reviews need third-party apps.
  - Woo's `/product/` URLs become `/products/` on Shopify and need a redirect import.
  - Since 26 Feb 2026, new customer accounts sign in with an email code, so "invite customers to reset passwords" advice is partly outdated. The exact behaviour for imported customers will be stated as "test on a development store".
- **Roadmap.** SHP-06 changes from UPDATE to CREATE.

### 30. Selling in multiple countries: UPDATE `shopify-markets`
- **Why not a new page.** The target page (1,142 words, no sources) is largely accurate but missing important limits. The readiness checklist belongs there.
- **What to add.**
  - A readiness checklist and a capability-by-plan table.
  - Local-currency checkout needs Shopify Payments **or Adyen**. Shopify Payments is unavailable in India, so an India-based store checks out in its store currency.
  - Managed Markets is limited to US merchants plus certain Canadian and UK stores, so Indian merchants cannot use it.
  - Duties at checkout no longer show a plan requirement on the help page. Fees: a temporary 0.5%; otherwise 0.85% with Shopify Payments or 1.5% with others.
  - Per-market checkout and theme customisation needs Advanced or higher (changelog, 16 Mar 2026).
- **Destination box (an India-first store selling abroad, all verified).**
  - UK: £135 VAT-at-sale rule; the £135 duty relief is due to be removed by Oct 2028.
  - Australia: A$1,000 GST rule. The ATO page was reachable only via search snippets, so re-check it at writing.
  - Dubai: e-commerce duty exemption raised to AED 1,000 (Circular 16/2026).
- **Not added.** Separate per-country pages.

### 31. Shopify for B2B: CREATE `shopify-for-b2b-ecommerce`
- **Why it is a new page.** Existing pages are generic (`wholesale-ecommerce-website`, `b2b-ecommerce-website-development`) or Plus-specific (`shopify-plus-development`). The roadmap already planned this (SHP-13); the slug changes from `shopify-b2b-wholesale` to the proposed one.
- **Key fact.** B2B is now on **every plan** (changelog, 2 Apr 2026):

  | Plan | B2B capability |
  |---|---|
  | Basic, Grow, Advanced | Companies, payment terms, volume pricing, vaulted cards, up to 3 B2B catalogs |
  | Advanced and Plus | Market-tailored B2B storefront and checkout |
  | Plus only | Unlimited catalogs, direct catalog assignment, deposits and partial payments |

  **Not supported for B2B:** Shop Pay and express wallets, subscriptions, local delivery, more than 500 line items per order.
- **Original asset.**
  - An "is Shopify right for your B2B model?" evaluation.
  - A native vs separate store vs app vs B2B platform decision table.
  - A "when Shopify is not right" section.
- **Linked correction.** Fix `shopify-plus-development`'s Plus-only framing.

### 32. Shopify checkout customisation: CREATE `shopify-checkout-customisation-guide`
- **Why it is a new page.** Capability intent ("can I customise…, on which plan?") differs from CRO intent. The capability detail is currently scattered across `shopify-checkout-optimization`, `shopify-plus-development` and `shopify-plus-vs-shopify`.
- **Condition.** `shopify-checkout-optimization` must stay conversion-focused. Its plan table shrinks to a summary plus a link, and its plan, Functions and post-purchase FAQs are reworded to point here. Otherwise the two pages compete.
- **Verified plan matrix.**

  | Capability | Plan |
  |---|---|
  | UI extensions on the information, shipping and payment steps | Plus only |
  | Checkout Branding API | Plus only |
  | Custom apps using Functions | Plus only |
  | Public Function apps | Basic and up |
  | Pixels / Customer Events | Basic and up |
  | Post-purchase extensions | Basic and up (still labelled beta; access must be requested; not shown for wallet, duties or multi-currency orders) |
  | Thank-you and order-status extensions | Basic and up |
  | Customer-account extensions | Basic and up |
  | Order value limits | All plans (changelog, 13 Apr 2026) |
  | Per-market customisation | Advanced and up |

  **checkout.liquid end dates:** the information, shipping and payment steps stopped on 13 Aug 2024; the Thank-you and Order status pages on 28 Aug 2025. Scripts stopped on 30 Jun 2026.
- **Roadmap.** SHP-12 (a checkout upgrade broke tracking) stays a separate troubleshooting page.

## UI/UX

### 33. Usability testing before a redesign: UPDATE `usability-testing`
- **Why not a new page.** The target page (1,297 words) is the complete how-to and already has a test script. What is missing is the pre-redesign benchmark use case.
- **What to add.**
  - A "Learn / Compare / Prove" test-plan table.
  - A pre-redesign script with a "freeze sheet" so the re-test repeats the same tasks and conditions.
  - NN/g sources: benchmarking (Kendrick 2020, including how long to wait before re-measuring), and "your old site is the best prototype" (Loranger 2014).
  - The SUS average of 68 (MeasuringU).
  - 4–6 outbound citations, since the page has none.
- **Overlap rule.** The test protocol lives here. Roadmap row UX-28 (measuring whether UX work paid off) will own business-metric attribution, with links both ways.

### 34. Pre-launch accessibility audit: UPDATE `website-accessibility-guide`
- **Why not a new page.** There are already six accessibility pages plus three roadmap rows (UX-07, UX-26, WEB-34). Another page would cannibalise them.
- **What to add.**
  - A two-tier pre-launch checklist with a "can a scanner catch it?" column.
  - Web-app patterns (WEB-34's scope) in the same edit.
  - A one-line-per-market triage box.
- **Verified facts.**
  - W3C Easy Checks.
  - WCAG-EM 2.0 (W3C Group Note, 23 Jul 2026; confirm the title at writing).
  - WCAG 2.2's 9 new criteria.
  - W3C: tools "can not determine accessibility".
  - GOV.UK's 2017 tool test: the best single tool found 41% of barriers; all 10 tools combined found 71%.
  - WebAIM Million 2026: 95.9% of home pages had detected failures.
- **Hedged, to verify before publishing.**
  - EAA micro-enterprise wording: needs a full-text read.
  - India's RPwD rules for private websites: unverified.
  - UAE: no private-sector mandate was found.

### 35. SaaS dashboards: CREATE `saas-dashboard-design`
- **Why it is a new page.** No existing page shares the intent:
  - `ecommerce-dashboard-design` covers a store team's internal analytics.
  - `saas-product-design` has one short section.
  - `marketplace-seller-dashboard` will be linked, not repeated.
- **Original asset.** A "Dashboard Action Scorecard" of about 12 criteria.
- **Sources.**
  - Few's dashboard definition (2004).
  - NN/g on dashboards and empty states.
  - WCAG 1.4.1 and 1.4.11.
  - Cleveland & McGill, cited only at a high level because the paper itself was not read.
- **Slug.** Uses the slug already reserved in the roadmap (UX-24) rather than `saas-dashboard-ux-best-practices`.

### 36. Onboarding without more steps: KEEP + minor update `saas-onboarding-optimization`
- **Why KEEP.** The page covers activation and the path to it.
- **Minor update (~300–400 words).**
  - An H2 on measuring time-to-value (median, by segment).
  - A "subtract before you add" table: delete, automate, defer or keep each step.
  - The NN/g article on tutorials vs contextual help (Feb 2023).
  - One FAQ.
  - A neutral wording for the Australia-only Spam Act line.
- **Do not use.** Two vendor statistics, which are flagged.
- **Date.** Treated as a minor update, so `updated` is set only if the change is judged substantial at writing.

## CRO

### 37. Search-intent landing pages: UPDATE `landing-page-development`
- **Why not a new page.** The target page (747 words, no sources) is the generic landing-page guide. The roadmap's paid-landing-page update (CRO-10) is done in the same pass.
- **Original asset.** An "intent → page type → CTA commitment" matrix and a paid vs organic box.
- **Verified facts (Google).**
  - Ads Help: the three Quality Score components, and that Quality Score "is not an input in the ad auction".
  - Search Central spam policy on doorway pages: a warning against making many near-identical landing pages.

### 38. SaaS pricing page without dark patterns: UPDATE `saas-pricing-page-optimization`
- **Why not a new page.** The page exists, and the proposed slug differs only by spelling.
- **What to add.**
  - A dark-patterns section limited to pricing, trials and cancellation. It links to roadmap UX-27 (the India dark-patterns guide, when written) for the full list.
  - The roadmap's planned India price-display section (UX-31).
  - The Australia-only GST section reframed into a market box.
- **Verified on official pages (UK).**
  - Unfair-practice rules in force since 6 Apr 2025.
  - CMA price transparency guidance (CMA209) published 18 Nov 2025.
  - UK subscription contract rules moved to **January 2027** (gov.uk release dated 9 Aug 2026).
- **Law-firm sourced only; state cautiously or omit.**
  - India CCPA dark-patterns guidelines (30 Nov 2023) and the 5 Jun 2025 self-audit advisory. Sources disagree on 12 vs 13 patterns.
  - Australia's unfair trading practices law (from 1 Jul 2027), including whether drip pricing applies only to consumer offers.
  - US: the FTC click-to-cancel rule was vacated on 8 Jul 2025, and rulemaking restarted in 2026.
- **UAE.** Omitted; nothing verifiable was found.

### 39. Measuring conversions across channels: CREATE `measure-multi-channel-website-conversions`
- **Scope.** Lead-generation, B2B and service businesses only. The ecommerce attribution pages (`ecommerce-attribution`, `ecommerce-attribution-models`) are store-focused and are linked, not repeated.
- **Role.** A hub page. Roadmap rows CRO-17 (offline conversion import) and CRO-18 (consent impact) are rescoped as narrow how-to pages it links to. CRO-15 (lead quality) and CRO-16 (GA4 key-event setup) stay separate.
- **Original asset.** A measurement plan:
  - capture: UTMs and CRM source fields
  - connect: CRM stages back to Ads/GA4
  - ask: self-reported attribution
  - read: what each tool can and cannot say
- **Verified (Google).**
  - GA4 has three attribution models (the others were removed in Nov 2023).
  - The GA4 lookback maximum is 90 days, shorter than many B2B sales cycles.
  - How enhanced conversions for leads works.
  - From 15 Jun 2026, offline conversion imports move to the Data Manager API. This date has passed; re-check how it applies at writing.
  - Consent Mode modelling thresholds: 1,000 events a day and 1,000 users a day, which rules out most small sites.
  - Consent policy scope: EEA, UK and Switzerland.
- **Do not use.** Vendor attribution-accuracy figures.

### 40. Ecommerce abandonment: KEEP `ecommerce-conversion-funnel` (+ citations)
- **Why KEEP.** Four pages already serve this intent (`ecommerce-conversion-funnel`, `shopify-funnel-audit`, `shopify-conversion-funnel-optimization`, `ecommerce-customer-journey-analytics`).
- **Accuracy.** `ecommerce-conversion-funnel`'s description of Shopify's report and GA4 funnels matches the official docs.
- **Minor update.**
  - Add official citations.
  - Name GA4's checkout funnel template.
  - Note that Shopify's funnel has no product-view step.
- **Correction.** Fix `shopify-funnel-audit`'s "product views" error.
- **Re-raised MERGE.** `shopify-funnel-audit` → `shopify-conversion-funnel-optimization` (0.75 body similarity), first proposed on 13 Oct. It needs approval and a 301 redirect, and is **not** part of this batch.

---

## Cross-cutting decisions

- **International relevance.** Every topic stays global and India-first.
  - Market boxes appear only where rules differ: 26 (privacy law), 30 (import tax and Shopify availability), 34 (accessibility law) and 38 (price display and subscription law).
  - No country-specific copies.
  - No UAE claims where nothing was verifiable (38).
- **No prices anywhere.** This applies the owner policy from Batch 1.
- **Facts not verified are kept out or hedged.** The open list is in the README.
