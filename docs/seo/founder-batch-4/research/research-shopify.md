# Batch 4 research: Shopify topics 69–72
Checked 15 Oct 2026. Sources: shopify.dev, help.shopify.com, changelog.shopify.com / shopify.dev/changelog, rbi.org.in, Google and Meta help pages. Batch 2 (B2) and Batch 3 (B3) facts are reused where noted and were not re-researched.
Limits: search is US-only and Reddit is unreachable, and People Also Ask boxes were not visible. Demand evidence therefore comes from Shopify Community threads and the competitor SERP.

## Headline findings that change the brief

1. **Hydrogen changed yesterday (14 Oct 2026).** Hydrogen 2026-10 is now "a framework-agnostic JavaScript library to add Shopify commerce to your existing stack". It has starters for React Router and Next.js, and Oxygen "is still free". Existing storefronts "keep working as they do now".
   - Every ZSpace headless page frames the choice as "Hydrogen (React Router) vs other headless (e.g. Next.js)", and that framing is now outdated. The affected pages are `shopify-hydrogen-vs-traditional-shopify`, `shopify-hydrogen`, `headless-shopify-explained` and `headless-ecommerce-architecture`.
   - The shopify.dev pages on fundamentals, deployments and analytics now say "These pages refer to Hydrogen versions 2026-04 and earlier".
2. **Oxygen is no longer "paid plans except Starter".** It is available at no extra charge on Starter, Basic, Grow, Advanced, Plus and Pause and build, and on development stores, Plus Partner Sandbox stores and trial plans. It is not available on Agentic plans.
   - Public environments: Plus gets 25 and every other paid plan gets 1. Development and trial stores get 0.
   - The `shopify-hydrogen` FAQ ("Plus plan page lists up to 25 Hydrogen storefronts") should be reworded as public environments per plan.
3. **Batch 9 overlap.** `founder-batch-9/03-batch-9-decisions.md` topic 169 plans to UPDATE `headless-shopify-explained` (a readiness scorecard). This brief treats the same page as a pending MERGE source (SHP-09). The two plans conflict, so the owner must decide SHP-09 before either is drafted.
4. **India subscription gap.** The native Shopify Subscriptions app's gateways are Shopify Payments, PayPal Express, Authorize.net, Adyen (existing approval only) and Stripe (select merchants). Shopify Payments isn't available in India (B3), and RBI's E-mandate Framework 2026 (21 Apr 2026) governs every recurring card, PPI or UPI debit. No ZSpace page covers this, and it is the one real gap in the subscription cluster.
5. **The SHP-29 analytics audit is a genuine new intent.** Detail is under topic 72.

---

## Topic 69. How to build a subscription business on Shopify

1. **Founder question and pain.** "Can I run subscriptions on Shopify without an expensive app stack, and will the numbers work?" The pain points:
   - choosing between native and third-party apps
   - margin erosion from subscriber discounts
   - failed renewals
   - in India, discovering that the native app's gateways don't fit, or that card renewals above a threshold need customer re-authentication
2. **Intent and stage.** Consideration to implementation. Readers are D2C founders with consumables (coffee, supplements, pet, beauty) who are adding or launching subscriptions.
3. **Queries.**
   - Primary: "Shopify subscription business" / "how to sell subscriptions on Shopify".
   - Supporting: "Shopify Subscriptions app vs Recharge", "Shopify subscriptions India", "Shopify subscription Razorpay", "UPI Autopay Shopify", "subscription box Shopify", "subscription unit economics".
4. **Demand evidence (moderate, vendor-dominated).**
   - The SERP is almost entirely subscription-app vendors writing guides: easysubscription.io, recurpay.com, tevello.com, powercommerce.com, praella.com, subscribed.fyi.
   - India-specific demand is visible only through vendor content (Recurpay is an India-focused app), so treat that signal as weak.
5. **Existing ZSpace coverage (checked in source).** The cluster is dense: 6 named pages plus `subscription-product-page-design`, `ecommerce-subscription-checkout`, `subscription-management-portal`, `subscription-ecommerce-cancellation-flow`, `subscription-billing-architecture`, `ecommerce-recurring-payments`, `subscription-ecommerce-australia`, `beauty-ecommerce-subscription` and `subscription-food-ecommerce`.
   - `shopify-subscription-store` (1,196 words; `blog-data-commerce-17.ts`) has had the B3 gateway fix applied: it lists Adyen and Stripe with their limits and says Shopify Payments isn't offered in India. It already contains a **Launch Checklist**, a worked example, a headless section and a native-vs-app table.
   - Unit economics are already covered. `subscription-ecommerce-vs-one-time-purchase` has a "Financial Considerations" section and table (discount, billing costs, app fees, failed payments, support, retention by cohort, margin per customer). `subscription-ecommerce-website` has "Measuring a Subscription Business". A separate unit-economics page would cannibalise these.
   - **Missing:**
     - (a) Practical guidance for India-based stores. It should cover which gateways and apps can actually run recurring charges, and what RBI e-mandate rules mean for the customer: one-time registration with additional factor authentication (AFA), a pre-debit notice at least 24 hours before each charge, and AFA again above ₹15,000.
     - (b) A list of native-app limits the page doesn't state. Bundles aren't compatible. Subscriptions can't be used with draft orders. The order edits API doesn't support subscriptions. Local, manual or non-card payment methods may not be available. Script and gift-card discounts apply only to the first payment.
     - (c) The `subscription-ecommerce-website` "Legal and Policy Considerations" section is generic. It doesn't mention India's e-mandate rules, while the US rules (FTC click-to-cancel rule vacated, ROSCA still applies) appear only on `ecommerce-compliance` (commerce-61).
6. **SERP weaknesses.**
   - https://www.recurpay.com/blog/how-to-add-subscriptions-to-a-shopify-store (vendor)
   - https://easysubscription.io/planning-your-2026-subscription-strategy/ (vendor)
   - https://tevello.com/blogs/subscriptions/how-to-set-up-a-subscription-service-on-shopify-a-comprehensive-guide (vendor)
   - https://metizsoft.com/blog/shopify-subscription-business (agency)
   - https://powercommerce.com/blogs/shopify-hub/how-to-start-a-subscription-box-business-with-shopify-a-comprehensive-guide

   None of these state the native app's gateway list, and none address India's recurring-payment rules. Most claim setup takes "under an hour".
7. **Qualified-buyer potential.** Medium-high for India D2C. The gateway and e-mandate problem is exactly where merchants need a developer, so it produces stronger leads than generic "how to start" traffic.
8. **Format and original asset.** No new pillar page. Add a decision table, "Can I use native Shopify Subscriptions?", with these columns:
   - store country
   - gateway available
   - native app possible?
   - what to check (e-mandate / AFA / pre-debit notice for India; Shopify Payments for UAE/AU/UK/SG)
9. **Service and CTA.** /services/shopify-development, with the CTA "Subscription setup and gateway check". The secondary is /services/cro-audit, for the subscription product page.
10. **Recommendation: KEEP + minor UPDATE of `shopify-subscription-store`. I agree.**
    - Add an H2, "Subscriptions for India-based Shopify stores" (~250 words). It should cover the native gateway list against India availability, the RBI E-mandate Framework 2026 points below, and the need to confirm with the chosen app or gateway that it supports RBI-compliant mandates (cards or UPI Autopay).
    - Add the native-app limits (bundles, draft orders, order edits, first-payment-only discounts) to the existing "Choosing Between…" table.
    - Add one sentence plus a link from `subscription-ecommerce-website` "Legal and Policy Considerations" to that H2 and to `ecommerce-compliance`.
    - **No CREATE.** The launch checklist already exists, and unit economics are already on `subscription-ecommerce-vs-one-time-purchase`. Optionally, link "Launch Checklist" in `shopify-subscription-store` to that page's "Financial Considerations" section.
11. **Facts an article would need**

| Claim | Source | Checked | Label |
|---|---|---|---|
| Native app gateways: Shopify Payments; PayPal Express ("Third-party transaction fees are charged if Shopify Payments isn't activated"); Authorize.net (PayPal is the only wallet, with no Apple Pay or Google Pay); Adyen ("limited to organizations with an existing Adyen approval"); Stripe ("Available only to select merchants"). "Payment gateway availability depends on your region and the gateway's terms of service." | https://help.shopify.com/en/manual/products/purchase-options/shopify-subscriptions/considerations | 15 Oct 2026 | [Official] |
| "Subscription products are supported only on the online store, Shopify POS, Shop, and custom storefront sales channels." "Bundles aren't compatible with the Shopify Subscriptions app." "Subscriptions can't be used with draft orders." "The order edits API doesn't support subscriptions." "Local, manual, or non-credit-card payment methods might not be available for subscriptions." Script and gift-card discounts apply only to the first payment. | same | 15 Oct 2026 | [Official] |
| Shopify Payments is not available in India. | https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries | 15 Oct 2026 (B3) | [Official] |
| B2B can't use subscriptions. | https://help.shopify.com/en/manual/b2b/getting-started/considerations | 14 Oct 2026 (B2) | [Official] |
| RBI "Digital Payments – E-mandate Framework, 2026", 21 Apr 2026 (RBI/DPSS/2026-27/396). It applies to recurring transactions, domestic or cross-border, "using cards / PPI / UPI". "All recurring transactions may be authorised without AFA up to ₹15,000/- per transaction." Pre-debit notification "at least 24 hours prior to the actual charge / debit". One-time registration requires AFA. | https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=13374 | 15 Oct 2026 | [Official] |
| ₹1,00,000 no-AFA limit for insurance premiums, mutual funds and credit card bills. | search snippets of the same direction | 15 Oct 2026 | [Official], partially verified. It is irrelevant to D2C, so omit it. |
| Native app availability for India-based merchants via PayPal Express / Stripe | none | — | **[Unverified]**. Don't state that it works or doesn't work; tell readers to confirm with Shopify support or the gateway. Stripe's India onboarding status is also unverified. |
| India-focused third-party subscription apps support Razorpay / UPI Autopay | vendor sites (e.g. recurpay.com) | — | [Vendor]/[Unverified]. Name no app unless the listing is checked at writing. |

---

## Topic 70. Headless Shopify vs traditional Shopify: costs, benefits and trade-offs

1. **Founder question and pain.** "An agency says we need headless or Hydrogen. Is it worth the build and running cost, and what breaks?" The pain is a six-figure build quote, lost theme-editor autonomy, apps that "don't support headless", and fear of SEO and tracking regressions.
2. **Intent and stage.** Commercial investigation. Readers are funded D2C brands and Plus or Advanced merchants with in-house or agency React teams.
3. **Queries.**
   - Primary: "headless Shopify vs Shopify theme" / "is headless Shopify worth it" (SHP-09).
   - Supporting: "Shopify Hydrogen cost", "Hydrogen vs Next.js", "Oxygen hosting limits", "Shopify apps headless", "Shopify Markets headless", "Storefront API rate limit".
4. **Demand evidence (strong).**
   - https://community.shopify.com/t/to-headless-or-not-to-headless-a-shopify-expert-s-guide-to-the-pros-and-cons/588578
   - https://community.shopify.com/t/basic-plan-3rd-party-app-on-headless-headless-update-maintenance-security-using-the-same-ui/328059
   - https://community.shopify.dev/t/how-do-apps-work-with-hydrogen-or-any-other-framework/29594
   - https://community.shopify.com/t/shopify-with-hydrogen-is-there-an-app-to-alert-the-customer-of-a-restock-of-an-article-if-it-is-fi/332261/1
5. **Existing ZSpace coverage (checked).**
   - `shopify-hydrogen-vs-traditional-shopify` (1,279 words; `blog-data-commerce-60.ts`) has no external links.
     - Its structure is good: "Three Options, Not Two", "What Stays the Same", a TCO section, a decision guide and a middle path.
     - **Outdated:** its banner, table and copy define Hydrogen as "React Router" against "other headless (any framework)". Since 14 Oct 2026 Hydrogen is a framework-agnostic library with a Next.js starter, so the three-option split needs reframing. The new options are Liquid theme; Hydrogen library on React Router or Next.js (Oxygen or self-host); and Storefront API without Hydrogen.
     - **Missing:**
       - the Oxygen plan matrix, public environment limits and runtime limits
       - Storefront API limits (no fixed limit on buyer traffic, a checkout-creation throttle, the `Shopify-Storefront-Buyer-IP` header requirement for server-side calls)
       - theme app extensions working only with Online Store 2.0 themes
       - Markets in headless (`@inContext(country:)` plus cart `buyerIdentity.countryCode`; currencies must be enabled)
       - Headless channel limits (100 active storefronts and tokens; each storefront is its own channel for publishing and attribution)
       - analytics and consent
     - Its TCO section lists cost categories but has no worksheet.
   - `shopify-hydrogen` (1,303 words; `blog-data-commerce.ts`) has a "Do I need Plus" FAQ citing "up to 25 Hydrogen storefronts for Plus". Reword it as public environments: 25 on Plus, 1 on other paid plans. Its "Is Hydrogen built on Remix?" FAQ needs a 2026-10 line.
   - `headless-shopify-explained` (786 words) overlaps almost completely: theme vs headless, good and weak reasons, TCO, the middle path, and the same checkout and apps FAQs.
6. **SERP weaknesses.**
   - https://weaverse.io/blogs/is-shopify-hydrogen-worth-it-2026-headless-roi-honest-answer (a Hydrogen vendor)
   - https://www.askphill.com/shopify-hydrogen-remix/ (an agency)
   - https://eseospace.com/blog/shopify-liquid-vs-hydrogen/ (quotes cost ranges and an unverified "~20–40% of apps" figure)
   - https://www.contentgrip.com/shopify-hydrogen-cost-benefit-analysis/
   - https://www.shopify.com/enterprise/blog/headless-commerce (Shopify, promotional)

   Every one predates the 14 Oct 2026 Hydrogen library change. Most invent build-price ranges. None give Oxygen's per-plan public environments or its runtime limits.
7. **Qualified-buyer potential.** High. These are larger budgets, and the reader is often at the point of deciding between agency quotes.
8. **Format and original asset.**
   - **(a) A "What changes when you go headless" matrix.** One row per feature: checkout, apps (theme app extensions vs API or SDK apps), theme editor and content, Markets, customer accounts, analytics and consent, search and filters, SEO. Columns: Liquid theme / Hydrogen / own stack, each with "native, rebuild or integrate".
   - **(b) A TCO worksheet with no prices.** Rows for build, CMS licence, hosting (Oxygen free / your host), monitoring and logging (Oxygen keeps runtime logs up to one month, so you need a log drain), app replacements, the release and upgrade cadence (quarterly Storefront API versions), and in-house or retainer engineering hours. Columns: one-off, monthly, owner. The reader fills in their own quotes.
9. **Service and CTA.** /services/shopify-development, with the CTA "Headless readiness review". The secondary is /services/website-development.
10. **Recommendation: UPDATE `shopify-hydrogen-vs-traditional-shopify` (agree), and make the SHP-09 MERGE of `headless-shopify-explained` into it the preferred option, subject to the owner's decision.** Changes:
    - Reframe the three options for Hydrogen 2026-10.
    - Add the feature matrix and the TCO worksheet.
    - Add 6–8 official citations.
    - Make light fixes to `shopify-hydrogen`: the plan/environment FAQ and a 2026-10 note.
    - Add one sentence to `headless-ecommerce-architecture` "Headless on Shopify".

    **Conflict:** Batch 9 #169 plans to UPDATE `headless-shopify-explained` with a readiness scorecard. If SHP-09 is approved, put that scorecard into this page instead and do not update `headless-shopify-explained`. Get the owner's decision first.
11. **Facts an article would need**

| Claim | Source | Checked | Label |
|---|---|---|---|
| Hydrogen 2026-10 (14 Oct 2026): "A framework-agnostic JavaScript library to add Shopify commerce to your existing stack"; "Hydrogen now works with any JavaScript framework"; starters for React Router and Next.js; "host it anywhere, including Oxygen, which is still free"; "Existing Hydrogen storefronts keep working as they do now". | https://shopify.dev/changelog/blog/hydrogen-2026-10-is-now-available ; https://community.shopify.dev/t/hydrogen-2026-10-now-available/38602 | 15 Oct 2026 | [Official] |
| Hydrogen 2026-10 moves to Storefront/Customer Account API 2026-10. Breaking changes include Order.shippingTitle → Order.shippingLine.title, and Checkout types removed. | search summaries of the release notes | 15 Oct 2026 | [Unverified]. Fetch the release notes before stating this. |
| Pre-2026-10 docs: "Hydrogen projects are React Router apps". | https://shopify.dev/docs/storefronts/headless/hydrogen/fundamentals | 15 Oct 2026 | [Official], legacy page ("Hydrogen versions 2026-04 and earlier") |
| "Oxygen is available at no extra charge on paid Shopify plans": Starter, Basic, Grow, Advanced, Plus, Pause and build. "Oxygen isn't available on Agentic plans." It is available on development stores, Plus Partner Sandbox stores and trial plans. | same | 15 Oct 2026 | [Official] |
| Oxygen workers must be ≤10 MB, start up in ≤400 ms, get 30 s CPU per request and 128 MB memory, and allow 110 custom env vars. Outbound requests must complete within 2 minutes. | same | 15 Oct 2026 | [Official]. Re-check against the 2026-10 docs at writing. |
| Public environments: Starter, Basic, Grow, Advanced, Pause and build, and Plus Partner Sandbox get 1 each; Shopify Plus gets 25; development stores and trial plans get 0. Retail, nonprofit and custom plans get 1. "Environments are private by default." | https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/environments | 15 Oct 2026 | [Official] |
| "Oxygen deployments remain accessible for a minimum of six months". The 10 most recent per environment always remain accessible. Runtime logs are kept "up to one month". | https://shopify.dev/docs/storefronts/headless/hydrogen/deployments | 15 Oct 2026 | [Official] |
| Storefront API: "requests from real buyers aren't subject to a fixed request-per-minute limit"; "Shopify limits the amount of checkouts that can be created on the Storefront API per minute"; tokenless query complexity limit 1,000. Server requests should send `Shopify-Storefront-Buyer-IP`, because without it "Shopify can't differentiate requests from different buyers". Private tokens are for server contexts. The latest version is 2026-10. | https://shopify.dev/docs/api/storefront ; https://shopify.dev/docs/api/usage/limits | 15 Oct 2026 | [Official] |
| Headless channel: "maximum of 100 active storefronts and access tokens per shop". Storefronts share API permissions. Each headless storefront is a unique channel for publishing and order attribution. | https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/manage-headless-channels ; https://changelog.shopify.com/posts/each-headless-storefront-supports-unique-resource-publishing-and-order-attribution | 15 Oct 2026 | [Official] (from search snippets; open both before quoting) |
| Customers on a custom storefront complete purchases through "the Shopify Checkout". | https://help.shopify.com/en/manual/custom-storefronts/headless | 15 Oct 2026 | [Official] |
| "Theme app extensions can integrate with Online Store 2.0 themes". Headless isn't mentioned, so apps that rely only on theme app extensions need an API, SDK or manual integration. | https://shopify.dev/docs/apps/build/online-store/theme-app-extensions | 15 Oct 2026 | [Official] + [Inference] |
| Markets in headless: `@inContext(country: FR)` returns local prices and filters unpublished products. Cart `buyerIdentity.countryCode` contextualises cart cost. Currencies must be enabled in payment settings, otherwise prices fall back to the store currency. Language is handled in a separate guide. Domains and subfolders are not covered (the storefront must implement routing). | https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/markets/international-pricing | 15 Oct 2026 | [Official] + [Inference] for routing |
| Local-currency checkout needs Shopify Payments or Adyen, so an India-based store checks out in store currency. | B2 topic 30 | 14 Oct 2026 | [Official] |
| Hydrogen analytics: built-in components send data to Shopify analytics. Consent must be handled first, and Shopify recommends the Customer Privacy API and its native cookie banner (or a third-party consent service). | https://shopify.dev/docs/storefronts/headless/hydrogen/analytics | 15 Oct 2026 | [Official], legacy page. Re-check the 2026-10 docs. |
| Headless "Order again" in new customer accounts redirects to the Online Store theme. | B3 (community report) | — | [Unverified] |
| Shopify plan list prices | https://www.shopify.com/pricing | — | Not needed. The worksheet uses no prices, per the policy. |

---

## Topic 71. How to design a better Shopify product page: a practical checklist

1. **Founder question and pain.** "My product pages get traffic but few add-to-carts. What exactly should I fix, and what can Shopify do natively?" The pain points:
   - checklists full of generic advice
   - themes that can't show 2,048 variants or swatches across separate products
   - specs and size guides hard-coded into descriptions
   - unknowingly failing accessibility basics
2. **Intent and stage.** Implementation. Readers are post-launch merchants and in-house ecommerce managers who want to audit their own pages before hiring.
3. **Queries.**
   - Primary: "Shopify product page checklist".
   - Supporting: "Shopify product page best practices", "Shopify product page audit", "Shopify product page design", "combined listings Shopify", "Shopify metafields product page", "Shopify product images size".
4. **Demand evidence (moderate, vendor-dominated SERP).**
   - easysellapp.com, cartylabs.com and craftshift.com all publish 2026 "Shopify product page checklist" or "30-point audit" pages.
   - The Shopify Community has evergreen threads on swatches, variants and metafields; not individually checked this batch.
5. **Existing ZSpace coverage (checked).**
   - **`shopify-product-page-audit`** (770 words; `blog-data-shopify-cro-3.ts` ~L700–810) is titled "40 Things to Check". It has 7 checklist groups (above the fold, imagery, pricing and variants, trust, description, mobile and technical, cross-sell) and no sources.
     - **Missing:** native Shopify features (metafields and metaobjects as dynamic sources, combined listings, the 2,048-variant / 250-media limits, alternate templates), accessibility (none at all), Baymard-backed items (unit price, total cost estimate, returns link, size buttons), and analytics checks (product-level add-to-cart rate).
   - **`shopify-product-page-optimization`** (1,988 words; `blog-data-shopify-cro.ts`) is the pillar. It already has "Implementing Product Page Changes on Shopify" (OS 2.0 JSON templates, alternate templates, metafields as dynamic sources), an 11-item "Shopify Product Page CRO Checklist", a problems → metrics table, and 2 Shopify Help links.
   - **`ecommerce-product-page-design`** (811 words) is platform-neutral UX anatomy.
   - Also present: `d2c-product-page-optimization`, `product-page-traffic-no-sales`, `ecommerce-ab-testing-product-pages`, `subscription-product-page-design`, and 8 vertical product-page-design pages (fashion, beauty, food, electronics, furniture, jewelry, sports).
   - **Ownership call.** `shopify-product-page-audit` should own "Shopify product page checklist", because its title and format already match the query.
     - `shopify-product-page-optimization` keeps "how to optimise / why". Reduce its 11-item checklist section to a 3-line summary plus a link, so two pages don't compete for "checklist".
     - `ecommerce-product-page-design` stays the platform-neutral UX guide. It links to the audit once ("For a Shopify-specific checklist…").
     - The vertical pages link to the audit from their conclusions only where they mention Shopify.
     - The audit links up to the optimisation page (method and testing) and to `ecommerce-ab-testing-product-pages`.
6. **SERP weaknesses.**
   - https://easysellapp.com/blogs/wiki/shopify-product-page-checklist-2026 (vendor; uses its own "66% more mobile orders" testing claim)
   - https://cartylabs.com/blog/shopify-product-page-best-practices
   - https://craftshift.com/shopify-product-page-30-point-audit-2026/ (pads the list with llms.txt and "agentic" items)
   - https://www.launchtip.com/blog/the-complete-shopify-store-launch-checklist

   None cite Baymard's current benchmark figures with dates. None cover WCAG 2.2 (target size, focus hidden by sticky add-to-cart bars). None state Shopify's real limits: 250 media per product, 2,048 variants, combined listings being Plus-only with a 60-product cap.
7. **Qualified-buyer potential.** High. This is the direct path to a CRO audit, and readers who run the checklist and find 10+ failures are good leads.
8. **Format and original asset.** A downloadable-style checklist table with these columns:
   - item
   - why (with a source)
   - how to check (a 5-minute test)
   - Shopify method (theme editor / metafield / app / code)

   Group it as: buy box; media; variants and options; price and total cost; delivery and returns; reviews; content and specs; accessibility (WCAG 2.2 AA); performance; measurement. Each item gets a "pass/fail" test, for example "Tab to Add to cart with a sticky bar visible: is the focus ring at least partly visible?" That keeps the list tight at around 40 items, not padded.
9. **Service and CTA.** /services/cro-audit, with the CTA "Product page audit". The secondary is /services/shopify-development, for metafields, templates and combined-listing builds.
10. **Recommendation: UPDATE `shopify-product-page-audit`. I agree.**
    - Retitle it to "Shopify Product Page Checklist: 40 Things to Check (2026)" and keep the slug.
    - Rebuild it to roughly 1,500–1,800 words with sources.
    - Trim the checklist on `shopify-product-page-optimization` to a summary plus a link.
    - Add one link from `ecommerce-product-page-design`.
    - Coordinate with Batch 5 topic 90 (`manage-large-shopify-product-catalogue`, which covers the 2,048-variant limit). The audit page should mention the limit in one line and link there rather than explain catalogue structure.
11. **Facts an article would need**

| Claim | Source | Checked | Label |
|---|---|---|---|
| Baymard, "Product Page UX 2026: 10 Pitfalls and Best Practices" (updated 18 Mar 2026): 155+ benchmarked sites and 30,000+ product-page usability scores. 52% of desktop, 62% of mobile and 64% of app sites are "mediocre or worse". No site is "perfect". | https://baymard.com/blog/current-state-ecommerce-product-page-ux | 15 Oct 2026 | [Industry]. Cite as leading US and European sites, not Shopify stores. |
| Same source, share of sites *not* doing each practice: buttons for size selection 57%; "in scale" images 37%; human model image 23%; easy "Save" 89%; unit price for multi-quantity 81%; total order cost estimate near buy section 67%; return policy on product page 44%; gifting options 78%; responding to negative reviews 89%; navigating reviews by customer images 63%. | same | 15 Oct 2026 | [Industry] |
| Variant limit is 2,048 per product, with up to 3 options. It rose from 100 on 15 Oct 2025, and many themes and apps still cap at 100. | https://changelog.shopify.com/posts/we-ve-increased-the-product-variant-limit-to-2048 | 14 Oct 2026 (B2) | [Official] |
| Max 250 media (images, 3D models, videos) per product, which the 2,048-variant change did not raise. | https://help.shopify.com/en/manual/products/product-media/add-media (search snippet) | 15 Oct 2026 | [Official]. Open the page before quoting. |
| Images up to 5000 × 5000 px (25 MP) and under 20 MB. "For square product images, a size of 2048 x 2048 px usually displays best." Formats: PNG, JPEG, TIFF, BMP, GIF, SVG, HEIC, WebP. Video up to 10 min, 1 GB, 4K (.mp4/.mov/.webm), or YouTube/Vimeo embeds. 3D models up to 500 MB (GLB/USDZ). | https://help.shopify.com/en/manual/products/product-media/product-media-types | 15 Oct 2026 | [Official] |
| Combined listings: "available only on Plus and enterprise commerce plans". Up to 60 products per listing, up to 3 extra options, and up to 2,048 variants across child products by default. The listing can have its own title, description, URL and gallery. It displays on free Shopify themes v15.0.0+, and other themes may need code. | https://help.shopify.com/en/manual/products/combined-listings-app | 15 Oct 2026 | [Official] |
| Metafields: "If you have a theme that supports dynamic sources, then you can connect most metafields to your theme by using the theme editor." Vintage themes need code edits. Category metafields use metaobjects for values. | https://help.shopify.com/en/manual/custom-data/metafields/connect-metafields | 15 Oct 2026 | [Official] |
| Shopify accessibility guidance: alt text for screen readers; body and button text contrast 4.5:1, large text 3:1; caption videos. "only following guidelines below doesn't guarantee that your online store is fully accessible." | https://help.shopify.com/en/manual/online-store/themes/customizing-themes/accessibility | 15 Oct 2026 | [Official] |
| WCAG 2.2 (W3C Recommendation, 5 Oct 2023): 2.4.11 Focus Not Obscured (Minimum, AA), where a focused item must be at least partly visible and not hidden by sticky content; 2.5.8 Target Size (Minimum, AA), at least 24 × 24 CSS px with exceptions; 2.5.7 Dragging Movements (AA), relevant to image carousels and 360° viewers. | https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/ | 15 Oct 2026 | [Official] |
| Regional accessibility law (EAA in force 28 Jun 2025 for EU sales; UK, AU, IN rules) | not re-verified this batch | — | [Unverified]. Link to existing ZSpace accessibility pages rather than restating. |
| Product-level funnel: Shopify's conversion breakdown has no product-view step. Use GA4 or product reports for PDP drop-off. | B2 research-cro (ecommerce-conversion-funnel) | 14 Oct 2026 | [Official]/[Inference] |

---

## Topic 72. Shopify analytics and tracking audit: are your ecommerce numbers reliable?

1. **Founder question and pain.** "Shopify says 120 orders, GA4 says 85, Meta says 140. Which is right, and is my tracking broken?" The pain:
   - lost trust in dashboards
   - ad budgets set on inflated or deflated numbers
   - duplicate purchase events after app installs
   - tracking silently broken by the 2025–26 checkout upgrades
   - a sudden sessions and conversion-rate shift that is really Shopify's late-September 2026 session-measurement change
2. **Intent and stage.** Problem-aware, mid-funnel. Readers are founders and marketers spending on ads, who will often hire someone to fix it.
3. **Queries.**
   - Primary: "Shopify sales not matching GA4" (SHP-29) and "Shopify tracking audit".
   - Supporting: "Shopify GA4 purchase event not firing", "duplicate purchase events Shopify", "Shopify Meta conversions API setup", "Shopify customer events custom pixel", "Shopify sessions dropped", "Shopify consent mode v2".
4. **Demand evidence (strong).**
   - https://community.shopify.com/t/enabling-all-events-in-ga4/583880
   - https://community.shopify.dev/t/web-pixel-google-youtube-app-always-pushing-default-granted/23016
   - https://community.shopify.dev/t/shopify-pixels-shopify-consent-banner-and-google-consent-mode-v2/2123
   - https://community.shopify.dev/t/customer-privacy-api-bug-not-implementing-google-consent-mode-correctly/903
   - A crowded vendor SERP (below).
5. **Existing ZSpace coverage (checked).**
   - `shopify-analytics-guide` (775 words; `blog-data-commerce-rewrites.ts` ~L1200–1280) is "what metrics to track". It has short sections on conversion rate, GA4, pixels and attribution, a setup checklist, and a FAQ "Why don't Shopify and GA4 numbers match?" with a two-line answer. It has no sources.
     - **Outdated:** it doesn't reflect the 21–23 Sep 2026 session-measurement update (no more midnight-UTC session split, bot sessions filtered by default, sessions without pageviews counted), or that Sessions count "Only … when visitors consent to cookies through your cookie banner".
   - `ecommerce-analytics-architecture` is a platform-neutral data-stack design page.
   - `ecommerce-event-tracking` is a platform-neutral event plan; its FAQ covers duplicate purchases in general.
   - `ecommerce-attribution` covers models and incrementality.
   - **The audit intent is distinct:** it is a test procedure (test order, ID reconciliation, consent states, duplicate detection) that none of these provide. Planned CRO-18 (`cookie-consent-impact-on-conversion-tracking`) overlaps on consent. Keep consent in the audit to Shopify mechanics plus a link to CRO-18.
6. **SERP weaknesses.**
   - https://weltpixel.com/blogs/news/meta-google-ads-and-ga4-show-three-different-purchase-counts-the-discrepancy-hub (vendor; good on click-date vs purchase-date)
   - https://branvas.com/blogs/news/shopify-ga4-revenue-discrepancy
   - https://www.ruleranalytics.com/?p=26074 (vendor)
   - https://querio.ai/articles/ai-analytics-ecommerce-reconciling-shopify-meta-ga4-numbers (vendor)
   - https://www.audiense.com/resources/blog/why-your-data-does-not-match-across-shopify-meta-ga4/

   None mention Shopify's Sep 2026 session change, consent-gated Shopify sessions, Meta's 48-hour dedup window, or GA4 dedup being web-stream-only and per-user. Most end in a tool pitch.
7. **Qualified-buyer potential.** High. Anyone spending on ads who runs the tests and finds a gap needs implementation help.
8. **Format and original asset.** A **14-step audit with tests**, each with a pass condition:
   1. Freeze a date range, and record the store time zone and the GA4/Meta reporting time zones.
   2. Build the Shopify baseline: online-store orders only (exclude POS, draft, admin, subscription renewals, test orders).
   3. List every tracking source. Pixels in Settings → Customer events (app vs custom), legacy theme.liquid code, GTM, and the Additional scripts view-only box. Any duplicates fail.
   4. Place a real test order with a cheap product and a discount code. Note the order number.
   5. GA4 DebugView / Realtime: exactly one `purchase`, `transaction_id` equals the Shopify order identifier, `value`, `currency` and `items` present.
   6. Meta Events Manager: one Purchase, with browser and server events deduplicated (matching event_id; dedup only within 48 h).
   7. Repeat in a consent-declined browser (EEA/UK via VPN or region settings). Expect no analytics or marketing pixel; Shopify sessions are also not counted.
   8. Repeat with an ad blocker. GA4 and the Meta Pixel are missing; Meta CAPI (Enhanced/Maximum) still reports.
   9. Check that the accelerated checkouts you use (Shop Pay, PayPal) appear as purchases in GA4.
   10. Refund the test order and check how each tool reflects it.
   11. Export 30 days of GA4 transaction IDs and match them against Shopify order IDs. Report the match rate, duplicates and blank IDs.
   12. Compare against the bot-filtered "Human" session baseline after 7 Oct 2025, and re-baseline after 21–23 Sep 2026.
   13. Write down attribution windows (GA4 lookback; Meta attribution setting) and note click-date vs purchase-date.
   14. Keep a change log.

   Pair it with a "Why the numbers differ" table: cause → which tool is affected → expected direction.
9. **Service and CTA.** /services/cro-audit, with the CTA "Tracking and analytics audit". The secondary is /services/shopify-development, for pixel, consent and CAPI fixes.
10. **Recommendation: CREATE `/blogs/shopify-analytics-tracking-audit`, absorbing SHP-29. I agree.** Do not also create `shopify-ga4-sales-mismatch`: put the mismatch explanation in this page as an H2 ("Why Shopify, GA4 and Meta never show the same sales") and drop that slug from the roadmap.
    - Update `shopify-analytics-guide` lightly:
      - rewrite the FAQ answer with the consent-gated sessions and the Sep 2026 update, and link it to the audit
      - add 2–3 Shopify Help citations
      - change "Pixels and Customer Events" to link to the audit
    - `ecommerce-event-tracking` gets one link.
    - Coordinate with CRO-18 (consent) and with B2's `ecommerce-conversion-funnel` notes.
11. **Facts an article would need**

| Claim | Source | Checked | Label |
|---|---|---|---|
| Sessions: "Number of online store visits… Only counted when visitors consent to cookies through your cookie banner." Conversion rate = "sessions that completed checkout / sessions". It "Might appear lower than expected due to bot traffic"; filter by "Human". | https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/analytics-fields | 15 Oct 2026 | [Official] |
| Session-measurement update rolled out "from September 21 to 23, 2026". Sessions are "based on continued customer activity, instead of ending at midnight… (UTC)". Some sessions without a pageview are now counted, and bot sessions are filtered by default. "your conversion rate can also change, even when your orders or sales haven't changed." History is not reprocessed. "Bot classification applies only to sessions from October 7, 2025 and after". | https://help.shopify.com/en/manual/reports-and-analytics/discrepancies/session-measurement-update | 15 Oct 2026 | [Official] |
| A session ends after 30 minutes of inactivity. | same (search snippet); https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/marketing-performance | 15 Oct 2026 | [Official], from a snippet. Confirm the exact sentence. |
| Shopify's stated discrepancy causes: reload counting, bots and session definitions, "Google can only count visitors with JavaScript and cookies activated", browser extensions blocking GA, "different reporting time zones", and different proprietary tracking. Attribution and refunds are **not** mentioned. | https://help.shopify.com/en/manual/reports-and-analytics/discrepancies | 15 Oct 2026 | [Official] |
| Pixels load on storefront, checkout, Thank you and Order status pages, run in a sandbox, and run only with the required permissions. | https://help.shopify.com/en/manual/promoting-marketing/pixels/overview | 14 Oct 2026 (B2) | [Official] |
| App pixels load in a **strict** sandbox and custom pixels in a **lax** sandbox. Custom pixels have no `settings` access. | https://shopify.dev/docs/api/web-pixels-api | 15 Oct 2026 | [Official] |
| Custom pixels: "Adding and using custom pixels is unsupported by Shopify." "Compliance with applicable laws, consents, code security, troubleshooting, and updates are your responsibility." "Not all pixel functionality works in the sandbox." | https://help.shopify.com/en/manual/promoting-marketing/pixels/custom-pixels | 15 Oct 2026 | [Official] |
| App pixels declare customer-privacy needs (analytics, marketing, preferences, sale of data), and the pixel manager "will only load your pixel if there is visitor permission for all of the settings". Consent changes are exposed via `visitorConsentCollected`. | https://shopify.dev/docs/api/web-pixels-api/pixel-privacy | 15 Oct 2026 | [Official] |
| Standard customer events (15): page_viewed, product_viewed, collection_viewed, search_submitted, product_added_to_cart, product_removed_from_cart, cart_viewed, checkout_started, checkout_contact_info_submitted, checkout_address_info_submitted, checkout_shipping_info_submitted, payment_info_submitted, checkout_completed, alert_displayed, ui_extension_errored. | https://shopify.dev/docs/api/web-pixels-api/standard-events | 15 Oct 2026 | [Official] |
| GA4 through the Google & YouTube sales channel. GA "can't track events until you deactivate private mode". | https://help.shopify.com/en/manual/reports-and-analytics/google-analytics/google-analytics-4 ; .../tracking-ecommerce-events-using-analytics | 15 Oct 2026 | [Official] |
| Google: Shopify automatically collects begin_checkout, add_payment_info and purchase (Checkout journey report), and add_to_cart, begin_checkout and purchase (Ecommerce purchases report). Newer events: view_item_list, remove_from_cart, view_cart, add_shipping_info. "Check that you don't have duplicate tags"; "remove legacy tags to prevent duplicate measurement". | https://support.google.com/analytics/answer/14000977 ; https://support.google.com/analytics/answer/12924131 ; https://support.google.com/analytics/answer/12183125 | 15 Oct 2026 | [Official]. **There is no single complete official list.** Tell readers to verify in DebugView. |
| GA4 purchase: `transaction_id` and `items` are required. `value` and `currency` are required for revenue ("If you set value then currency is required"). Refund requires `transaction_id`. | https://developers.google.com/analytics/devguides/collection/ga4/reference/events | 15 Oct 2026 | [Official] |
| GA4 "deduplicates purchase events with the same transaction ID". Same user only, web streams only. An empty transaction_id causes all such purchases to be deduplicated. Reusing IDs undercounts. | https://support.google.com/analytics/answer/12313109 | 15 Oct 2026 | [Official] |
| GA4 lookback windows (acquisition 30 days default; others 90) and attribution models (DDA, paid and organic last click, Google paid channels last click). | B2 research-cro | 14 Oct 2026 | [Official] |
| Facebook & Instagram app data sharing: Standard is the Meta pixel only. Enhanced adds Conversions API plus personal info for matching. Maximum is CAPI plus pixel plus "Facebook's latest advertising technology". "The Conversions API sends the purchase event between Shopify and Facebook servers." An ad blocker can block the pixel. Remove manual pixel code from theme.liquid, or you get "duplicate or incorrect data". | https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-data-sharing ; https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-pixel | 15 Oct 2026 | [Official] |
| Meta dedup: identical events are judged on event_id + event_name. Duplicates arriving "within 48 hours" are discarded. Pixel and CAPI together is recommended. | https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/ | 15 Oct 2026 | [Official] |
| Meta default attribution setting (7-day click / 1-day view vs 7-day click) | https://www.facebook.com/business/help/460276478298895 | — | **[Unverified]**. Pages conflict. Say "check the ad set's attribution setting". |
| Customer privacy settings: cookie banner and opt-out per region (from Markets). With a banner, data is collected only after consent, and session counts and conversion rates may drop. Third-party banners must "integrate… with Shopify's customer privacy settings". Without Consent Mode v2 and valid consent, EEA data isn't used for personalised ads. Custom web pixels need a manual snippet for Consent Mode v2. | https://help.shopify.com/en/manual/privacy-and-security/privacy/customer-privacy-settings/understanding-customer-privacy-settings | 15 Oct 2026 | [Official] |
| Google: "Use a CMP that integrates with Shopify's Customer Privacy API". With the Google & YouTube app and a CMP, consent mode "should work automatically". "After you've enabled your consent banner, consent mode is enabled automatically." | https://support.google.com/google-ads/answer/14563069 | 15 Oct 2026 | [Official] |
| Community reports that the Google & YouTube app pushed default consent "granted" and that the native banner didn't map to Consent Mode v2 (2024–25). | community.shopify.dev threads above | 15 Oct 2026 | Community [Unverified]. Use only as "test it", never as current fact. |
| GA4 behavioural modelling thresholds; EEA consent-mode v2 mapping (Mar 2024). | B2 research-cro | 14 Oct 2026 | [Official] (the v2 mapping only partially verified) |
| Checkout tracking: checkout.liquid stopped working in checkout steps on 13 Aug 2024. TY/OS checkout.liquid and Additional scripts were sunset 28 Aug 2025 (Plus); TY/OS script tags 26 Aug 2026 (non-Plus). The Additional scripts box is view-only. Pixels and web pixel extensions are the replacement on all plans (Basic+). ScriptTag API errors from 1 Oct 2026, and storefront script tags stop 1 Mar 2027. | B2 topic 32 / B1 F7, F9 | 14 Oct 2026 | [Official] |
| Click-date (Google Ads) vs purchase-date (GA4 and Shopify) reporting | weltpixel.com | 15 Oct 2026 | [Vendor]. Verify on Google Ads Help before stating. |

---

## Open items before drafting
1. The owner decides SHP-09 (merge) vs Batch 9 #169 (update `headless-shopify-explained`).
2. Fetch the Hydrogen 2026-10 release notes for breaking changes, and the 2026-10 versions of the Oxygen fundamentals and analytics pages, which may have moved.
3. Confirm the 250-media limit and the 30-minute session sentence directly on help.shopify.com (both are from snippets).
4. Confirm native Shopify Subscriptions availability for India-based merchants with Shopify support. Do not publish a yes or no without that.
5. Confirm Meta's current default attribution setting, and Google Ads click-date reporting.
