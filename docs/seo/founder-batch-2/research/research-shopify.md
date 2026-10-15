# Batch 2 research: Shopify topics 29–32
Checked 14 Oct 2026. Sources are shopify.dev, help.shopify.com, changelog.shopify.com, shopify.com/pricing (served in INR from this location), GOV.UK, ATO and Dubai Customs. Batch 1 facts F7–F11, F21–F24 are reused from `docs/seo/founder-batch-1/research/research-shopify.md`; they are labelled "B1" and were not re-researched.
Limits on this research: search is US-only, Reddit is unreachable, and People Also Ask boxes were not visible. Demand evidence therefore relies on Shopify Community threads and the competitor SERP. One fetch was blocked (the ATO page returned 403), so the AU facts come from search snippets of ato.gov.au. Re-fetch that page before quoting it.

---

## Headline findings that change the brief

1. **B2B is no longer Plus-only.** Since 2 Apr 2026, Basic, Grow and Advanced include companies, payment terms, volume pricing, vaulted cards and up to 3 active B2B catalogs. Plus keeps unlimited and direct-to-company catalogs, deposits and partial payments. Contextual B2B storefront and checkout need **Advanced or Plus**, not Plus only. Our `/blogs/shopify-plus-development` "B2B on Plus" section reads as if these were Plus features. `/blogs/b2b-ecommerce-website-development` says contextual customisation is "on Plus" when it is Advanced+.
2. **The variant limit is 2,048 per product, with up to 3 options.** It rose from 100 on 15 Oct 2025, and many themes and apps still cap at 100.
3. **Shopify's own WooCommerce guide** says its Store Migration app handles products only and is "in early access". The App Store listing says "product and customer data". Historical orders and reviews do **not** migrate natively.
4. **Legacy customer accounts were deprecated on 26 Feb 2026.** New customer accounts sign in with email plus a one-time code, with no password. The "invite customers to reset passwords" advice in our migration posts is therefore half-outdated.
5. **Local-currency checkout needs Shopify Payments or Adyen.** Shopify Payments is unavailable in India (B1 F24), so an India-based store checks out in its store currency. Managed Markets is limited to US-based merchants plus "certain stores in Canada and the UK", so Indian merchants cannot use it.
6. **Checkout plan matrix has moved since May 2026.** Order value limits came to all plans on 13 Apr 2026. Per-market checkout and accounts customisation came to Advanced and Plus on 16 Mar 2026. Scripts stopped on 30 Jun 2026 (B1). Our checkout-optimization table is accurate but incomplete (details under topic 32).

---

## Topic 29. Migrating from WooCommerce to Shopify without losing store data

1. **Founder question and pain:** "Will I lose products, customers, orders, reviews or rankings if I move off WooCommerce?" The pain is plugin sprawl, hosting and security upkeep, and fear of a traffic drop and broken customer logins.
2. **Intent and stage:** Decision to implementation (BOFU). The founder has usually already chosen Shopify.
3. **Queries:** Primary is "WooCommerce to Shopify migration". Supporting queries are "WooCommerce to Shopify checklist", "migrate WooCommerce reviews to Shopify", "WooCommerce variations to Shopify variants", "WooCommerce to Shopify redirects / URL structure", "will customers need new passwords Shopify", and "import WooCommerce orders to Shopify".
4. **Demand evidence (moderate, community):**
   - https://community.shopify.com/t/migrating-from-woocommerce-to-shopify-looking-for-advice/653418
   - https://community.shopify.com/t/tracking-and-seo-issues-after-product-migration-from-woocommerce/65769
   - https://community.shopify.com/c/shopify-discussions/i-want-to-bring-my-woo-commerce-store-on-shopify-but-keep-my-url/m-p/2144685
   - https://community.shopify.com/t/how-can-i-migrate-my-ecom-website-from-woocom-to-shopify-without-losing-design-and-rankings/284355

   There are at least 8 Woo-specific importer apps on the App Store (Ablestar, Cart2Cart, LitExtension, AppsByB and others). That signals a commercial niche.
5. **Existing ZSpace pages:**
   - `/blogs/migrating-to-shopify-guide` (1,423w, 0 external links, in `blog-data-commerce-rewrites.ts`). It is generic and has a one-paragraph illustrative Woo worked example. Its password FAQ says "invite them to activate their accounts", which predates the Feb 2026 legacy-accounts deprecation. It does not cover the 3-option limit, the variant-limit nuance for themes and apps, the review-export problem, or the Woo plugin → app mapping.
   - `/blogs/ecommerce-data-migration` (1,151w) is platform-agnostic.
   - `blog-data-commerce-rewrites.ts:886` already states "up to 2,048 variants", which is correct.
   - **Cannibalisation:** low. The generic guide targets "migrate to Shopify" and the new page targets "WooCommerce to Shopify". Shorten the generic guide's Woo example to two sentences and link out, so the two pages don't compete for the Woo query.
6. **SERP weaknesses:**
   - https://elsner.com/woocommerce-to-shopify-migration-checklist
   - https://aureatelabs.com/blog/woocommerce-to-shopify-migration-checklist/
   - https://www.shopping-cart-migration.com/migration-guides/woocommerce-to-shopify-migration-accelerate-your-success-with-the-detailed-checklist
   - https://ecosire.com/blog/woocommerce-to-shopify-migration-guide

   Most of these are migration-tool vendors pushing their own tool. They still say "100 variants", or don't state the 3-option limit. They ignore new customer accounts (no passwords). None give a field-level Woo → Shopify mapping or a plugin → app table with native-first options.
7. **Qualified-buyer potential:** High. Woo stores with 1k+ SKUs, reviews and SEO equity are exactly the clients who pay for a managed migration.
8. **Format and original asset:** A checklist guide. Assets:
   - **(a)** A Woo → Shopify field mapping table: simple/variable products, attributes → options (max 3) and variants (max 2,048), product categories/tags → collections (manual or automated), customers, orders, coupons → discounts, reviews, Woo Subscriptions, blog posts, pages.
   - **(b)** A URL pattern map: `/product/x` → `/products/x`, `/product-category/x` → `/collections/x`, `/blog-slug/` → `/blogs/news/slug`, `/my-account` → `/account`.
   - **(c)** A plugin → native/app equivalence table: Yoast → native SEO fields, WooCommerce Subscriptions → subscription app, a reviews plugin → review app, Woo product add-ons → app or metafields.
   - **(d)** A downloadable redirect CSV template.
9. **Service and CTA:** /services/shopify-development, with the CTA "Get a migration scope and data-mapping review". The secondary CTA is /services/website-development for content and SEO.
10. **Recommendation: CREATE `/blogs/woocommerce-to-shopify-migration-checklist`.** I agree with your call. Also UPDATE `/blogs/migrating-to-shopify-guide` in two places: the password FAQ, and trimming the Woo example to a link.
11. **Facts an article would need:**

| Claim | Source | Checked | Label |
|---|---|---|---|
| "You can create up to 2,048 variants for a product." "Each product can have up to three options." Some third-party themes, theme app extensions, public apps, sales channels and custom apps "might not support more than 100 variants"; Stocky and legacy Order Printer don't. | https://help.shopify.com/en/manual/products/variants/add-variants | 14 Oct 2026 | [Official] |
| Variant limit raised from "long-standing limit of 100" to 2,048; post dated 15 Oct 2025. | https://changelog.shopify.com/posts/we-ve-increased-the-product-variant-limit-to-2048 | 14 Oct 2026 | [Official] |
| Shopify's Woo guide: the first-party Store Migration app is for products, is "in early access", and is available only for certain stores on desktop. Woo products are exported via Products > Export to CSV. Customers and orders need a Woo export plugin. Customer CSV needs editing ("no data mapping support"). | https://help.shopify.com/en/manual/migrating-to-shopify/migrating-from-woocommerce | 14 Oct 2026 | [Official] |
| "Products with greater than 3 options won't have their options imported." The workaround is apps or metafields. | same | 14 Oct 2026 | [Official] |
| Historical orders aren't imported natively. Shopify names LitExtension, Matrixify and Ablestar. "You can't export or migrate reviews from WooCommerce to Shopify". It suggests Judge.me, Loox or Yotpo for manual import. | same | 14 Oct 2026 | [Official] |
| The Store Migration app listing (developer: Shopify, free, launched 17 Jul 2024, 3.2★ from 78 reviews) names WooCommerce among its sources and says it moves "product and customer data". **This conflicts** with the help page's "products only, early access", so state the scope cautiously. | https://apps.shopify.com/store-migration | 14 Oct 2026 | [Official]/[Vendor] conflict |
| Import order: products, then customers, then historical orders. Staff get a new-order email for each imported order unless notifications are turned off. | https://help.shopify.com/en/manual/migrating-to-shopify/import-store-app/woocommerce-migration | 14 Oct 2026 | [Official] |
| Passwords: "you can't migrate customer passwords from another online store using a CSV". You "need to invite your customers to create new passwords". | https://help.shopify.com/en/manual/customers/import-export-customers | 14 Oct 2026 | [Official] (this describes legacy accounts) |
| Legacy customer accounts deprecated 26 Feb 2026 and no longer available to new stores; a final sunset date is to be announced. New accounts: "Customers sign in with their email and a one-time code". | https://changelog.shopify.com/posts/legacy-customer-accounts-are-now-deprecated | 14 Oct 2026 | [Official] |
| New customer accounts: "A password isn't required to sign in". A customer with a profile in admin "can sign in with the email address associated with their customer profile". | https://help.shopify.com/en/manual/customers/customer-accounts | 14 Oct 2026 | [Official]. That imported customers need **no invite** under new accounts is [Inference]; test on a dev store before stating it. |
| Redirects: max 100,000 (standard) and 20,000,000 (Plus). Redirects work "only from broken URLs" (404). Use relative paths inside the primary domain. Query strings "might not work as expected". CSV import uses Shopify's sample file. | https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect | 14 Oct 2026 | [Official]. Column headers "Redirect from" / "Redirect to" are [Unverified]; copy from the sample CSV. |
| Woo `/product/`, `/product-category/` → Shopify `/products/`, `/collections/`. | Shopify fixed paths: help page above (URL structure note). Woo defaults are [Industry] knowledge; community confirmation: https://community.shopify.com/t/migrating-from-woocommerce-to-shopify-looking-for-advice/653418 | 14 Oct 2026 | [Official]/[Industry] |
| "20–40% traffic dip, recovery in 4–8 weeks" | community post only | — | **Do not use** (unsourced) |

---

## Topic 30. Preparing a Shopify store to sell in multiple countries

1. **Founder question and pain:** "We're an Indian or UAE brand. Can our Shopify store sell to the UK, Australia or the UAE in local currency with duties handled, or do we need separate stores?" The pain is surprise duties at the door (refused parcels), INR-only checkout, translation work and SEO duplication.
2. **Intent and stage:** Consideration to implementation.
3. **Queries:** Primary is "sell internationally on Shopify" / "Shopify Markets setup". Supporting queries are "Shopify multi currency without Shopify Payments India", "Shopify duties at checkout", "Shopify Managed Markets eligibility", "DDP vs DAP Shopify", "Shopify Markets vs expansion store", and "Shopify Translate & Adapt".
4. **Demand evidence (strong for India):**
   - https://community.shopify.com/c/payments-shipping-and/how-can-i-enable-multi-currency-checkout-in-india-without/m-p/2322328/highlight/true
   - https://community.shopify.com/t/multi-currency-error-with-razorpay-paypal-india-store-unable-to-set-eur-pricing/621134
   - https://community.shopify.com/t/im-located-in-india-can-i-sell-in-different-currencies/25595/1
   - https://community.shopify.com/t/selling-in-multiple-currencies-from-india/349404/2
   - https://community.shopify.com/t/duties-not-being-collected-at-checkout/561140

   This is a recurring, unresolved India pain point.
5. **Existing page `/blogs/shopify-markets`** (1,142w, `blog-data-commerce-39.ts`, dated 2026-09-29, no external links). It is largely accurate: four market types, unlimited country markets on all plans, and "selling in multiple currencies requires Shopify Payments". **Missing:**
   - Adyen as the other multi-currency processor.
   - What an India-based store actually experiences (store-currency checkout, workarounds).
   - Managed Markets eligibility (US, plus certain CA/UK stores only) and fees.
   - The duties-at-checkout requirements and fee.
   - A per-market plan table: theme and checkout customisation per market need Advanced+ (16 Mar 2026), and checkout blocks per market need Plus.
   - That post-purchase apps work only in the default currency.
   - DDP vs DAP.
   - A readiness checklist (HS codes, country of origin, shipping rates per country, returns).
   - Destination low-value import rules for the UK, AU and UAE.
   - Zero sources. The "Managed Markets for eligible stores" line is vague.
6. **SERP weaknesses:**
   - https://addigitech.com/blog/shopify-international-expansion-checklist
   - https://gropulse.com/shopify-international-selling/
   - https://ecommercefastlane.com/how-to-sell-internationally-on-shopify/
   - https://ecosire.com/blog/shopify-markets-international-pricing-tax-currency

   ecosire states unverified market caps ("Free plan caps at three markets") that contradict Shopify's "no limit". Competitors are US-centric, ignore the no-Shopify-Payments case, and mix up the Markets Pro and Managed Markets names and fees.
7. **Qualified-buyer potential:** High for India D2C brands going global, which is ZSpace's core market, and for UAE brands into GCC/UK.
8. **Format and original asset:** Update with:
   - **(a)** An "International readiness checklist" in 4 blocks: payments and currency, duties and tax, catalog and content, ops and returns.
   - **(b)** A decision table by store country: India / UAE / UK / AU base × "can show local currency at checkout? can collect duties at checkout? Managed Markets?"
   - **(c)** A destination box: UK £135, AU A$1,000, and the Dubai AED 1,000 duty exemption.
   - **(d)** A plan-by-feature table for Markets.
9. **Service and CTA:** /services/shopify-development, with the CTA "International store readiness review". Secondary is /services/cro-audit for localised checkout.
10. **Recommendation: UPDATE `/blogs/shopify-markets`.** I agree. The page is recent and sound, so expand rather than replace it. Add the checklist, the India section, a Managed Markets eligibility correction, a per-plan table and sources. Consider retitling to include "selling in multiple countries".
11. **Facts an article would need:**

| Claim | Source | Checked | Label |
|---|---|---|---|
| Four market types: country/region, retail (POS), B2B, channel. Country/region markets on all plans: "There's no limit to the number of country or region markets you can create." Retail catalog customisation needs POS Pro or Plus. B2B: 3 active catalogs on Basic/Grow/Advanced, unlimited on Plus. | https://help.shopify.com/en/manual/markets/getting-started/market-types | 14 Oct 2026 | [Official] |
| "To accept payments in multiple currencies, you need to use Shopify Payments or Adyen as your payment processor." With another processor, customers in all markets pay in the store's default currency. | https://help.shopify.com/en/manual/markets/getting-started/requirements-and-considerations | 14 Oct 2026 | [Official] |
| You need shipping rates configured for each country to activate its market. Fixed-amount discounts only in the default currency. "Post-purchase apps work only in your store's default currency." One published theme at a time. | same | 14 Oct 2026 | [Official] |
| Per-market theme and checkout/accounts customisation: Advanced and higher. Per-market checkout blocks and business entities: Plus. Domains, languages, currencies, duties/taxes per market: all plans. | same (availability table) | 14 Oct 2026 | [Official] |
| Changelog, 16 Mar 2026: "The checkout and accounts editor now lets merchants on Advanced and Plus customize settings, branding, and blocks by market." | https://changelog.shopify.com/posts/customize-checkout-and-customer-accounts-by-market | 14 Oct 2026 | [Official] |
| Pricing page: "Show prices in local currencies" on all plans, with the footnote "Requires Shopify Payments". "Assign local domains" and "Estimate and collect duties and taxes" on all plans. | https://www.shopify.com/pricing | 14 Oct 2026 | [Official] |
| Shopify Payments is not available in India; it is available in UAE, AU, UK and SG. | B1 F24 (https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries) | 14 Oct 2026 | [Official] |
| Whether Adyen is offered to India-based or non-Plus stores | — | — | [Unverified]. Adyen for Shopify is generally an enterprise/Plus option; confirm before suggesting it. |
| Indian merchants using Razorpay/PayPal can't get native multi-currency checkout. Workarounds discussed: a USD store currency, converter apps (display only), or a separate store. | community threads in point 4 | 14 Oct 2026 | [Industry/community], consistent with the official rule above |
| Duties at checkout requirements: a carrier that supports DDP labels (if using labels), not using Shopify Fulfillment Network, HS codes on products. Otherwise use a third-party app. Fee: a temporary 0.5% for all merchants effective 2 Feb 2025. Otherwise 0.85% with Shopify Payments and 1.5% with other providers. No fee on domestic or intra-EU orders. | https://help.shopify.com/manual/markets/duties-and-import-taxes/charging-duties | 14 Oct 2026 | [Official]. A search snippet claimed Advanced/Plus are required; the live page lists **no plan requirement** and the pricing page shows it on all plans, so treat the plan restriction as removed. Store-country eligibility (India?) is **not stated**, so mark it [Unverified]. |
| Managed Markets (Global-e as merchant of record): "available to businesses based in the continental United States" and "certain stores in Canada and the United Kingdom". Needs Basic+, an online store and Shopify Payments. Fees: 3.5% (Basic/Grow/Advanced), 3.25% (Plus), plus FX and processing. **India-based merchants are not eligible** (by omission). | https://help.shopify.com/en/manual/markets/markets-pro/overview ; https://help.shopify.com/en/manual/international/managed-markets | 14 Oct 2026 | [Official] |
| Managed Markets doesn't support B2B orders. | https://help.shopify.com/en/manual/b2b/getting-started/considerations (search summary) | 14 Oct 2026 | [Official], snippet |
| The new Markets APIs (2025-04) replaced "primary market" with a backup region; a web presence can belong to several markets. | https://shopify.dev/changelog/new-markets-apis | 14 Oct 2026 | [Official] |
| Translate & Adapt translates products, collections, blogs, policies and pages manually or with AI; "Auto-sync" exists in some countries. The free language count and language caps are **not stated** on the fetched pages. | https://help.shopify.com/en/manual/markets/languages/translate-adapt-app | 14 Oct 2026 | [Official]; limits [Unverified] |
| UK: consignments ≤£135 from outside the UK: "The seller must charge and account for VAT at the point of sale" (B2C), and the seller should register for UK VAT. Above £135, normal import VAT and customs rules apply. (Page last updated 13 May 2022.) | https://www.gov.uk/guidance/vat-and-overseas-goods-sold-directly-to-customers-in-the-uk | 14 Oct 2026 | [Official] |
| UK: the £135 customs-duty relief is to be removed. Autumn Budget 2025 said "March 2029 at the latest". A June 2026 announcement accelerated it to Oct 2028. The July 2026 consultation response intends mandatory new LVI arrangements for ≤£135 consignments. | https://www.gov.uk/government/publications/reforming-customs-rules-for-low-value-imports ; https://www.gov.uk/government/news/government-backs-high-street-with-acceleration-of-cheap-import-reforms-and-crackdown-on-dodgy-online-sellers | 14 Oct 2026 | [Official] (via search summary; fetch before quoting dates) |
| Australia: non-resident sellers must charge GST at sale on goods with customs value ≤A$1,000 (excluding tobacco and alcohol) once GST turnover from Australia is ≥A$75,000. Goods >A$1,000 are taxed at the border. EDP (marketplace) operators may be liable instead. | https://www.ato.gov.au/businesses-and-organisations/international-tax-for-business/gst-for-non-resident-businesses/gst-on-low-value-imported-goods | 14 Oct 2026 (403 on fetch; snippet only) | [Official], re-fetch |
| UAE (Dubai): Dubai Customs Circular 16/2026 (30 Jul 2026) raised the e-commerce customs duty exemption from AED 300 to AED 1,000 CIF. | https://www.dubaicustoms.gov.ae/en/mobile/pages/newsdetails.aspx?itemid=2195 (news, 4 Sep 2026) | 14 Oct 2026 | [Official]. Dubai only; other emirates [Unverified]. |
| UAE import VAT is 5% on customs value (plus duty), unless zero-rated or exempt. | https://tax.gov.ae/DataFolder/Files/Pdf/E-Commerce%20-%20VAT%20Guide%20-%20EN%20-%2009%2008%202020.pdf | 14 Oct 2026 (2020 guide) | [Official], dated; check currency |
| DDP vs DAP definitions | Incoterms (ICC) | — | [Industry]. Use plain-English definitions; no number needed. |

Regional note: Indian export-side rules (LUT for zero-rated GST exports, courier export limits) were **not researched**. Add them only after checking CBIC/DGFT.

---

## Topic 31. Is Shopify right for B2B ecommerce?

1. **Founder question and pain:** "Can we run wholesale on our existing Shopify store, do we need Plus, or should we use an app or a separate platform?" The pain is spreadsheets and WhatsApp orders, wrong prices shown to the public, and ERP re-keying.
2. **Intent and stage:** Consideration (platform evaluation) to decision.
3. **Queries:** Primary is "Shopify B2B". Supporting queries are "Shopify B2B without Plus", "Shopify wholesale vs B2B", "Shopify B2B limitations", "Shopify B2B ERP integration", "Shopify blended vs separate wholesale store", and "best B2B ecommerce platform Shopify vs Adobe Commerce".
4. **Demand evidence:**
   - https://community.shopify.com/t/how-to-set-up-b2b-selling-without-using-shopify-plus/281450/28 (a long thread whose answers flip in 2026)
   - https://community.shopify.com/t/best-way-to-create-b2b-accounts-pricing-and-rules-for-a-b2c-store/391957/2
   - https://community.shopify.com/t/new-b2b-site-no-way-to-approve-wholesale-applications/248641/1

   The April 2026 change created a wave of fresh explainer content. That is a timing opportunity: much of the SERP is still stale.
5. **Existing ZSpace pages:**
   - `/blogs/b2b-ecommerce-website-development` and `/blogs/wholesale-ecommerce-website` (`blog-data-commerce-19.ts`) **already say B2B is on all plans**, which is correct. One error: `b2b-ecommerce-website-development` says contextual customisation is "on Plus", but it is **Advanced and Plus**.
   - `/blogs/shopify-plus-development` "B2B on Plus" and its FAQ list volume pricing, quantity rules, payment terms and vaulted payment methods as Plus features, with no note that these are now on all plans. That is misleading and should be updated.
   - None of the pages give the 3-catalog limit, the incompatibility list (no accelerated wallets, subscriptions, local delivery and so on), the 500-line-item cap, or a "when not Shopify" section.
6. **SERP weaknesses:**
   - https://magebit.com/blog/shopify-b2b-on-every-plan-what-no-one-tells-you-about-costs-limits-scale
   - https://www.djust.io/blog/ecommerce/shopify-b2b-solutions-suitable-for-complex-businesses (a competitor vendor, biased)
   - https://www.skailama.com/blog/guide-to-shopify-b2b
   - https://wholesalehelper.io/blog/?p=1125 (an app vendor)

   These are vendor-biased in both directions. Few cite the official plan matrix row by row. None are written for India/UAE distributors, where Shopify Payments, vaulted cards and terms interact differently.
7. **Qualified-buyer potential:** High. B2B builds and ERP integrations are larger tickets.
8. **Format and original asset:** A decision guide built around:
   - **(a)** A three-way decision matrix: native B2B (blended store) vs a dedicated B2B store vs a wholesale app, scored on catalog count, gating, inventory separation, app cost duplication and ERP.
   - **(b)** A plan matrix reproduced from the official table.
   - **(c)** A "Shopify is NOT right when…" checklist: native RFQ and multi-level approvals needed, >500 lines per order, EDI/punchout mandatory, ERP-driven real-time pricing, or wallets and subscriptions required for B2B buyers.
   - **(d)** ERP integration patterns: certified connector, iPaaS/middleware or custom app, with system-of-record rules.
9. **Service and CTA:** /services/shopify-development, with the CTA "B2B fit assessment". Link to `/blogs/b2b-ecommerce-erp-integration`.
10. **Recommendation: CREATE `/blogs/shopify-for-b2b-ecommerce`**, absorbing SHP-13. I agree. Also UPDATE `shopify-plus-development` (the B2B section and FAQ) and fix the one "contextual on Plus" line in `b2b-ecommerce-website-development`, so the cluster agrees with itself.
11. **Facts an article would need:**

| Claim | Source | Checked | Label |
|---|---|---|---|
| Changelog, 2 Apr 2026: Basic, Grow and Advanced get "up to 3 active B2B catalogs (assigned via Markets)", "company profiles", "payment terms", "volume pricing", "ACH payments (U.S. only)" and "vaulted credit cards" "at no additional cost". Plus-only: "Unlimited catalogs for customer-specific pricing", "direct catalog assignment to companies and locations", "partial payments", "deposits". | https://changelog.shopify.com/posts/key-b2b-features-now-available-on-non-plus-plans | 14 Oct 2026 | [Official] |
| Full plan matrix. **All plans:** companies, company locations, location-level permissions, quantity rules, quantity price breaks, net terms, payment reminders, ACH (US), vaulted cards, draft order to invoice, checkout to draft, easy reorders, PO numbers, sales staff permissions, Trade theme, quick order list, Flow with B2B objects. **Advanced + Plus:** contextual checkout and contextual storefront (via Markets). **Plus only:** direct company catalogs, unlimited catalogs, deposits (companies and draft orders), partial payments, payment requests per fulfilment. Non-Plus B2B catalogs require the new Shopify Markets. | https://help.shopify.com/en/manual/b2b/getting-started/plan-features | 14 Oct 2026 | [Official] |
| Payment terms offered: Net 7/15/30/45/60/90 and due on fulfilment. | https://help.shopify.com/en/manual/b2b/getting-started/features | 14 Oct 2026 | [Official] |
| Not compatible with B2B: accelerated checkouts (Shop Pay, Apple Pay, Google Pay, Amazon Pay), local delivery, pickup points, tipping, subscriptions, legacy customer accounts, agentic storefronts, some third-party apps, checkout.liquid. Orders max 500 line items. Shop Pay, Shop Cash and Shop Pay Installments are incompatible as B2B payment methods. | https://help.shopify.com/en/manual/b2b/getting-started/considerations ; https://help.shopify.com/en/manual/b2b/checkout-and-orders/payment-methods | 14 Oct 2026 | [Official] |
| Gift cards at B2B checkout: Plus only. In blended stores, restricting payment methods by customer type needs Checkout Blocks, an app, or the Payment Customization Function. | same considerations page (search summary) / store-type page | 14 Oct 2026 | [Official] |
| Blended vs dedicated store. In a blended store, inventory can't be allocated by customer type and the store can't be gated to B2B only. A dedicated store needs apps set up and paid for again. "It's not easy to change at a later time." | https://help.shopify.com/en/manual/b2b/getting-started/store-type | 14 Oct 2026 | [Official] |
| Vaulted cards are listed under the Shopify Payments section of the B2B payment-methods page. | https://help.shopify.com/en/manual/b2b/checkout-and-orders/payment-methods | 14 Oct 2026 | [Official]. That vaulted cards are **unavailable to India-based stores** is [Inference]; verify. |
| Managed Markets doesn't support B2B orders. | considerations page (snippet) | 14 Oct 2026 | [Official], snippet |
| Native B2B has no self-serve application/approval form; merchants use apps (for example Helium Customer Fields). | community thread above | 14 Oct 2026 | [Industry/community]. Confirm in the help docs whether a native form now exists. |
| ERP: Shopify's Global ERP program lists certified connectors, but the lists differ across Shopify pages. | B1 F22 | 14 Oct 2026 | [Vendor]; list [Unverified] |
| Flow free on all plans; Send HTTP Request on Grow+. | B1 F21 | 14 Oct 2026 | [Official] |
| Plus price "from ₹175,000/mo" (India pricing page). The USD price was not captured because the page geo-served INR. | https://www.shopify.com/pricing | 14 Oct 2026 | [Official]; use "see current pricing" |

---

## Topic 32. Can you customise Shopify checkout? Options, limits, what to know

1. **Founder question and pain:** "Can I add a field, upsell, gift message, GST number or custom payment rule at checkout, or do I need Plus?" The pain is that the agency quotes "Plus only", legacy hacks died with checkout.liquid and Scripts, and tracking broke on the thank-you page.
2. **Intent and stage:** Consideration to implementation. Often triggered by a forced deadline (Aug 2026 thank-you page upgrade, Jun 2026 Scripts end).
3. **Queries:** Primary is "Shopify checkout customization". Supporting queries are "customize Shopify checkout without Plus", "Shopify checkout extensibility", "add custom field Shopify checkout", "Shopify Functions non-Plus", "Shopify one page vs three page checkout", "Shopify post-purchase upsell", and "Shopify checkout tracking pixels".
4. **Demand evidence (strong, evergreen):**
   - https://community.shopify.com/t/how-can-i-add-custom-fields-to-checkout-without-shopify-plus/192629
   - https://community.shopify.com/t/can-i-modify-the-checkout-page-without-shopify-plus/275950
   - https://community.shopify.com/c/shopify-apps/checkout-customization-without-shopify-plus-possible/td-p/2102922
   - https://community.shopify.com/t/adding-a-custom-data-input-on-checkout-without-plus/367156
5. **Existing page `/blogs/shopify-checkout-optimization`** (`blog-data-shopify-cro.ts` ~L290–335). The "What You Can Customize on Each Plan" table is **accurate for every row it has**. Each row matches the official checkout-apps table. It is **incomplete and slightly dated**:
   - **Missing:** web pixel extensions (all plans), customer account UI extensions (all plans), and Checkout Blocks (content blocks on TY/OS pages on Basic+, other features Plus).
   - **Missing:** order value limits on all plans (13 Apr 2026), and per-market checkout customisation on Advanced+ (16 Mar 2026).
   - **Missing:** the Scripts end date (30 Jun 2026) and the TY/OS non-Plus upgrade deadline (26 Aug 2026).
   - **Missing:** Starter is excluded ("Basic and higher").
   - **Missing:** removal of background images in the main content area (5 Feb 2026).
   - **Missing:** post-purchase caveats. Its docs say beta with access requests, and it doesn't render for wallet or installment payments, duties or multi-currency orders, local delivery, or non-Online-Store channels.
   - **Wording:** the FAQ "checkout.liquid, which Shopify has deprecated" should say it is unsupported for checkout steps since 13 Aug 2024 and sunset for TY/OS on 28 Aug 2025.
   - The "Rollouts" FAQ plan availability is unverified.

   **Verdict:** not wrong, but outdated by omission. Cannibalisation risk is real, because its FAQ "Can I customize Shopify checkout on any plan?" targets the same query.
6. **SERP weaknesses:**
   - https://www.shopify.com/enterprise/blog/customize-shopify-checkout (Plus-centric)
   - https://bogos.io/shopify-custom-checkout/ (app vendor)
   - https://sherocommerce.com/blogs/insights/how-to-customize-the-shopify-checkout-without-plus
   - https://easysellapp.com/blogs/wiki/shopify-checkout-blocks-setup-guide-every-plan-2026

   Most of these blur "Checkout Blocks on all plans" with "all Blocks features". Few separate the Functions *public app vs custom app* rule. None give a requirement → layer → plan → cost lookup table.
7. **Qualified-buyer potential:** High. These are Plus merchants migrating off Scripts and non-Plus merchants deciding whether to upgrade.
8. **Format and original asset:** A capability guide built around:
   - **(a)** A requirement lookup table, for example "add GST/VAT number field", "hide COD over ₹X", "B2B-only payment terms", "upsell after payment", "track purchase in GA4/Meta". Columns: method (editor / Checkout Blocks / public Function app / custom Function / UI extension / pixel), and minimum plan.
   - **(b)** A timeline graphic: checkout.liquid (13 Aug 2024 and 28 Aug 2025), Scripts (15 Apr and 30 Jun 2026), non-Plus TY/OS (26 Aug 2026), ScriptTag (1 Oct 2026 API errors and 1 Mar 2027 stop).
   - **(c)** A "should you upgrade to Plus for checkout?" decision box.
9. **Service and CTA:** /services/shopify-development, with the CTA "Checkout customisation scoping". Secondary is /services/cro-audit.
10. **Recommendation: CREATE `/blogs/shopify-checkout-customisation-guide`.** I agree, with conditions. Keep `shopify-checkout-optimization` CRO-focused and replace its plan table with a 3-line summary plus a link. Move the plan FAQ, the Functions FAQ and the post-purchase FAQ to the new page, or reword them so they don't target the same query. Fix the checkout.liquid wording and add the missing rows if the table stays. Spelling: the site uses US "customize/optimization" in existing slugs. "customisation" in the new slug is fine for UK/AU/IN, but keep it consistent across the cluster.
11. **Facts an article would need:**

| Claim | Source | Checked | Label |
|---|---|---|---|
| Basic or higher: checkout and accounts editor, and apps customising thank you and order status pages. Plus: apps customising the information, shipping and payment pages, and the Checkout Branding API. "Advanced checkout customization features are available only on the Shopify Plus plan." | https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility | 14 Oct 2026 | [Official] |
| Plan table. Basic+ and Plus: web pixel extensions, post-purchase extensions, public apps using Functions, UI extensions on TY/OS pages, UI extensions on all customer-account pages. **Plus only:** custom apps using Functions, UI extensions on information/shipping/payment. Checkout Blocks: Basic+ with feature limits. | https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-apps | 14 Oct 2026 | [Official] |
| "Checkout UI extensions for the information, shipping, and payment steps are available only to stores on a Shopify Plus plan." The latest API version is 2026-07. | https://shopify.dev/docs/api/checkout-ui-extensions | 14 Oct 2026 | [Official] |
| Functions: "stores on any plan can use public apps that are distributed through the Shopify App Store and contain functions". "Only stores on a Shopify Plus plan can use custom apps that contain Shopify Function APIs." APIs: Cart Transform, Discount, Fulfillment Constraints, Order Routing, Pickup Point and Local Pickup delivery option generators, Delivery Customization, Payment Customization, Cart and Checkout Validation. The network-access "fetch" target is limited to custom apps on Plus/Enterprise. | https://shopify.dev/docs/api/functions ; https://shopify.dev/docs/api/functions/latest/discount | 14 Oct 2026 | [Official] |
| Checkout Blocks: on Basic+, only the dynamic and static content blocks on TY/OS pages. "All other features of Checkout Blocks are available only to Shopify Plus." | https://help.shopify.com/en/manual/checkout-settings/checkout-blocks | 14 Oct 2026 | [Official] |
| **Exception:** "Order value limits in Checkout Blocks are now available on Basic, Grow, Advanced, and Plus plans" (13 Apr 2026). This conflicts with the Blocks help page above, which hasn't caught up; cite the changelog. | https://changelog.shopify.com/posts/checkout-blocks-order-value-limits-available-on-all-plans | 14 Oct 2026 | [Official] |
| Per-market checkout/accounts settings, branding and blocks: Advanced and Plus (16 Mar 2026). | https://changelog.shopify.com/posts/customize-checkout-and-customer-accounts-by-market | 14 Oct 2026 | [Official] |
| Editor branding: logo (width, alignment), colour palette, header colours, main content background colour (background **image removed 5 Feb 2026**), order summary colour or image, accent/button colours, input fields, heading/body fonts from a list, address autocomplete, Buy again, show discount field on mobile. Plus adds the Branding API, Checkout Blocks advanced branding and third-party address autocomplete. | https://help.shopify.com/en/manual/checkout-settings/customize-checkout-configurations/checkout-style | 14 Oct 2026 | [Official] |
| "By default, the checkout layout on your store is set to be a one-page checkout." You can switch to three-page in admin. Customisations carry over between layouts. | same; https://help.shopify.com/en/manual/checkout-settings/one-page-checkout (snippet) | 14 Oct 2026 | [Official] |
| Post-purchase extensions are available on Basic+ (help table). Dev docs: "in beta", and live stores must "request access". Not supported: gateways that need CVV kept (Braintree, Payflow Pro, PayPal Payments Pro, Eway); wallet or installment payments; non-Online-Store channels; local delivery; orders with duties or multiple currencies; orders under $0.50. | https://shopify.dev/docs/apps/build/checkout/product-offers/post-purchase | 14 Oct 2026 | [Official] |
| Pixels: "Pixels automatically load on the Storefront, Checkout, Thank you page, and Order status page". They run in a sandbox, can't render UI, and respect consent ("run only when visitors have provided the permissions required"). | https://help.shopify.com/en/manual/promoting-marketing/pixels/overview | 14 Oct 2026 | [Official] |
| checkout.liquid: "customizations will no longer work for in-checkout pages starting August 13, 2024" (changelog post 13 Feb 2023). This resolves B1 F7b. | https://changelog.shopify.com/posts/the-checkout-liquid-theme-file-is-being-deprecated | 14 Oct 2026 | [Official] |
| checkout.liquid and additional scripts on TY/OS were sunset 28 Aug 2025. Script tags on TY/OS were sunset 28 Aug 2025 (Plus) and 26 Aug 2026 (non-Plus). The Additional scripts box has been view-only since 28 Aug 2025. Paused stores auto-upgrade permanently. | https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid ; https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-upgrade (B1 F7/F7a) | 14 Oct 2026 | [Official] |
| Shopify Scripts: editing stopped 15 Apr 2026 and execution stopped 30 Jun 2026; the replacement is Functions. | B1 F11 | 14 Oct 2026 | [Official] |
| ScriptTag API errors from 1 Oct 2026; storefront script tags stop 1 Mar 2027. | B1 F9 (re-fetch the changelog for the 1 Oct date) | 14 Oct 2026 | [Official] |
| Pricing page: checkout customisation "Limited" on Basic/Grow/Advanced and "Full" on Plus. | https://www.shopify.com/pricing | 14 Oct 2026 | [Official] |
| Rollouts (A/B tests of checkout configurations) plan availability | — | — | [Unverified]. Don't state plans. |

---

## Cross-cluster fixes (existing copy)
- `blog-data-commerce-60.ts` (`shopify-plus-development`): the "B2B on Plus" section and FAQ need an "available on all plans since Apr 2026, Plus adds…" rewrite.
- `blog-data-commerce-19.ts` (`b2b-ecommerce-website-development`): "contextual customization on Plus" should become "contextual storefront and checkout on Advanced and Plus".
- `blog-data-commerce-rewrites.ts` (`migrating-to-shopify-guide`): the password FAQ and worked example should mention new customer accounts (one-time code) and the legacy deprecation of 26 Feb 2026.
- `blog-data-shopify-cro.ts` (`shopify-checkout-optimization`): see topic 32, point 5.
- `blog-data-commerce-39.ts` (`shopify-markets`): add Adyen, Managed Markets eligibility and the per-plan table; see topic 30.
