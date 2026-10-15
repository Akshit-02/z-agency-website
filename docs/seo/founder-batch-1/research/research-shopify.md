# Shopify topic research: topics 9–12 (ZSpace Labs)

Checked: 14 Oct 2026. Researcher notes:
- **SERP limits:** The search tool is US-based, so no SERPs were observed for India, UAE, AU, UK or SG. Ranking observations are directional only. Reddit (reddit.com) **cannot be reached** by the search or fetch tools (blocked user agent), so the demand evidence below comes from Shopify Community threads. Check r/shopify and r/ecommerce by hand before citing them.
- **Word counts:** The internal word counts differ from the brief. The repo audit `docs/seo/global-audit-2026-10/09-blog-by-blog-report.csv` lists the CWV guide at 1,006w (brief says 665), the speed checklist at 678w (brief says 515), the integration guide at 888w (brief says 623) and theme-vs-custom at 993w. These may be body-only counts versus full counts. Reconcile them before setting targets.
- **Overlap I found in the repo:** `/blogs/shopify-store-redesign-guide` already has "Signs Your Shopify Store Needs a Redesign", "Set a Performance Budget" and "Apps and Integrations". `/blogs/shopify-app-integration-guide` already covers rate limits, webhooks and the REST-vs-GraphQL change. Both overlap topics 10 and 12.

---

## Topic 9: Shopify theme vs custom Shopify development

1. **Problem:** The founder can't tell whether a premium theme plus tweaks will do, or whether they need a custom theme or custom development. They also worry about cost, theme updates and lock-in.
2. **Intent / stage:** Commercial investigation, at the middle of the funnel. It is often pre-quote, with "how much" close behind.
3. **Queries:** Primary: "shopify theme vs custom development". Related: "custom shopify theme worth it", "premium shopify theme vs custom", "dawn vs custom theme", "horizon theme customize", "when do you need a shopify developer", "custom shopify theme cost".
4. **Evidence it is asked:**
   - Shopify Community, "Dawn Theme VS from Scratch for a large site with customisations: What is best?": https://community.shopify.com/t/dawn-theme-vs-from-scratch-for-a-large-site-with-customisations-what-is-best/407237
   - "Best Shopify Base Theme in 2026? Dawn / Horizon / Pitch": https://community.shopify.com/t/best-shopify-base-theme-in-2026-dawn-horizon-pitch/576488
   - "$450 to update my theme due to custom code?": https://community.shopify.com/t/450-to-update-my-theme-due-to-custom-code/225251 (this one is about cost of ownership after customisation)
   - "Free vs paid themes, does it really matter?": https://community.shopify.com/t/free-vs-paid-themes-does-it-really-matter/586035
5. **Current top content and its gaps:**
   - Shopify blog, "How To Customize a Shopify Store Theme": https://www.shopify.com/blog/customizing-store-theme. It is a how-to for the editor and offers no decision framework.
   - Fuel Themes, https://fuelthemes.net/custom-vs-premium-shopify-themes/. A theme seller arguing that a premium theme suits ">95%" of stores, which is a conflict of interest.
   - Ask Phill, https://askphill.com/blogs/blog/custom-shopify-theme-vs-standard-theme-a-decision-framework-for-growing-brands. An agency framework that leans towards custom.
   - Witscode break-even piece, https://witscode.com/blogs/custom-shopify-theme-breakeven. Its cost model has no citations.
   - **Common gaps:** Most pieces are vendor-biased in one direction. Almost none explain the **upgrade path**: theme-editor settings carry over on an update, but direct code edits may not ("code edits could not be included"). None separate theme work from app, Function or checkout extension work, and none mention the theme-blocks/Horizon architecture.
6. **Buyer potential:** High. Readers are near a budget decision and map directly to a development engagement.
7. **ZSpace contribution:** A "layer ladder" decision table. Each requirement goes to the lightest layer that meets it: theme settings → Custom Liquid/CSS block → custom section or theme block in a duplicated file → app block via a theme app extension → Shopify Function → checkout UI extension (Plus-only for the info/shipping/payment steps) → custom app. Add an "upgrade-safety" column per layer. Also add a short procurement checklist: who owns the code, Git, how updates are applied, and support SLA.
8. **Service / CTA:** /services/shopify-development, with the CTA "Send us your requirement list; we'll map each to the lightest layer".
9. **Decision:** **Agree with KEEP** for the cluster, but fix the mismatch. `/blogs/shopify-theme-vs-custom-development` is titled "Theme Customization: What Can You Actually Change?", which is an intent mismatch. The "custom vs existing theme" intent actually lives at `/blogs/shopify-theme-development`. Recommendation: **don't change URLs**. Retitle the `theme-vs-custom-development` post so it truly answers "theme vs custom development", including the layer ladder above. Keep `/shopify-theme-development` focused on building a theme (process, tooling, Theme Store standards). Make `/when-do-you-need-custom-shopify-development` a short threshold piece that links into the comparison. Then de-duplicate the H2s across the three posts.
10. **Facts:** see the shared fact table, rows F1–F6.

---

## Topic 10: Redesign your Shopify store instead of installing more apps?

1. **Problem:** The store has accumulated a dozen or more apps for widgets, upsells, reviews and badges. Speed and UX have degraded, and adding another app no longer moves conversion. The founder isn't sure whether to prune, redesign or rebuild.
2. **Intent / stage:** Problem-aware, moving into solution evaluation (mid-funnel). These readers are frequently CRO-audit candidates.
3. **Queries:** Primary: "too many apps shopify slow". Related: "should I redesign my shopify store", "shopify app bloat", "remove shopify apps speed", "shopify redesign vs apps", "uninstalled app code left in theme".
4. **Evidence:**
   - "Anyone else struggling with balancing speed, apps and custom code?": https://community.shopify.com/t/anyone-else-struggling-with-balancing-speed-apps-and-custom-code/578816
   - "Are Shopify apps helping or hurting your conversion rate?": https://community.shopify.com/t/are-shopify-apps-helping-or-hurting-your-conversion-rate/586033
   - "My store speed" (score fell from 90+ to 39 after bundle, date-picker and subscription apps): https://community.shopify.com/t/my-store-speed/386433
5. **Current content and its gaps:**
   - Shopify, "Website Redesign Checklist": https://www.shopify.com/blog/website-redesign. Generic triggers such as bounce rate and dated design. Nothing on apps as a trigger.
   - Shopify Partners, "What to Consider When Planning a Website Redesign": https://www.shopify.com/partners/blog/website-redesign. Gives a "2–4 years" cadence, while Shopify's own newer design guide says there is no fixed schedule. The two contradict each other.
   - Shugert, "Shopify app bloat": https://shugert.com.mx/resources/shopify-app-bloat-performance. Agency content with unsourced numbers.
   - Hyperspeed, app-count study: https://hyperspeed.me/blog/how-many-shopify-apps-the-average-store-have. A vendor study of 273 stores, labelled [Vendor].
   - **Gaps:** These pieces treat "apps vs redesign" as either/or. None give a per-app keep/replace/absorb rule, and none mention that the March 2027 ScriptTag shutdown forces an app review anyway (see F9).
6. **Buyer potential:** Medium-high. It feeds both the CRO audit and the redesign scope.
7. **ZSpace contribution:** An **app consolidation matrix**. For each app, ask four things: does it inject site-wide JS, does it duplicate a native feature (Shopify Flow, native bundles/discounts, theme-native sections), is it an app block/embed or legacy injected code, and is it business-critical. The output is one of four actions: keep / replace with native / absorb into theme / remove plus clean residue. Then add a **redesign trigger rule**. If several "absorb into theme" items cluster on the same templates (PDP, cart), that points to a redesign of those templates, not more apps. Also add a "2026–27 forced review" box covering ScriptTag apps (F9) and Thank-you page scripts (F7).
8. **Service / CTA:** /services/cro-audit first ("App & template audit"), with a secondary link to /services/shopify-development.
9. **Decision:** **Agree with UPDATE.** The best target is **`/blogs/shopify-speed-checklist-before-you-add-another-app`**. It already has "How to audit the apps you already have" and "Removing apps safely", and it is the thinnest page, so it gains the most. Add these H2s:
   - (a) "When the fix is a redesign, not another app", with the matrix and trigger rule.
   - (b) "Script tags stop running in March 2027: check your apps now".
   - (c) "Leftover code after uninstalling", citing Shopify Help (F10).
   Add only a short cross-link paragraph to `/shopify-redesign-vs-rebuild` (it's about redesign vs rebuild, a different decision), and avoid creating a third "signs you need a redesign" section, since `/shopify-store-redesign-guide` already has one.
10. **Facts:** F7–F12.

---

## Topic 11: Why is your Shopify store slow? (troubleshooting)

1. **Problem:** The speed score dropped, or Search Console or the Shopify dashboard flags poor LCP or INP. The merchant doesn't know which metric to trust or what to fix first.
2. **Intent / stage:** Informational and diagnostic, at the top to middle of the funnel. Urgent readers are high-intent for a fix-it engagement.
3. **Queries:** Primary: "why is my shopify store slow". Related: "shopify speed score dropped", "shopify LCP poor", "shopify INP fix", "shopify web performance dashboard", "core web vitals shopify", "shopify speed after installing app".
4. **Evidence:**
   - "Improve INP and LCP – issue showing for several hundred products in Google Search Console": https://community.shopify.com/t/improve-inp-and-lcp-issue-showing-for-several-hundred-products-in-google-search-console/359946
   - "Slow website issues": https://community.shopify.com/t/slow-website-issues/580066
   - "Shopify theme performance": https://community.shopify.com/t/shopify-theme-performance/673243
   - "How to speed up my store": https://community.shopify.com/t/how-to-speed-up-my-store/639834
5. **Current content and its gaps:**
   - Shopify, "Site Speed: Why It Matters": https://www.shopify.com/blog/site-speed
   - Shopify Enterprise, "Store Speed and Conversion": https://www.shopify.com/enterprise/blog/store-speed-conversion. Shopify's own correlation study (F14).
   - Shopify Help, Web performance dashboard: https://help.shopify.com/en/manual/online-store/web-performance/web-performance-dashboard. This is the authoritative "how Shopify measures" page, but it has no diagnostic flow.
   - Branded Agency: https://brandedagency.com/blog/shopify-speed-optimization
   - **Gaps:** Most content is tip lists, not a decision tree. Few explain why the lab (Lighthouse/PSI) and field (RUM/CrUX) numbers disagree, or why low-traffic stores see noisy data and a 36-hour lag. Few explain how to tie a regression to an app install. Many still quote the 2018-era "1 second = 7%" figure, which is not a primary source.
6. **Buyer potential:** Medium-high. It is the entry point for both CRO-audit and dev-fix work.
7. **ZSpace contribution:** A **metric-first troubleshooting flow**:
   - Step 0: Confirm the data source. Use the Shopify dashboard (P75, 30-day RUM; needs a non-private store) versus PSI/CrUX versus a single Lighthouse run.
   - Step 1: Find which metric fails and on which page type, using the Page Type report.
   - Step 2: Check the timeline. Was there an app install, theme update or new tag? The Online Store speed report marks app installs, per Community; verify this in the current admin before stating it.
   - Step 3: Branch by metric. LCP goes to the hero image, preload/fetchpriority and render-blocking JS. INP goes to third-party JS, tag managers and heavy app widgets. CLS goes to unsized media, late-injected banners and app widgets.
   - Step 4: Isolate on a duplicate theme, using DevTools request blocking and the Shopify Theme Inspector for slow Liquid.
   - Step 5: Re-measure after the lag window.
   Add a symptom → likely cause → first check table.
8. **Service / CTA:** /services/cro-audit ("Speed & CWV diagnosis") and /services/shopify-development for the fixes.
9. **Decision:** **Agree with UPDATE**, using `/blogs/shopify-core-web-vitals-performance-guide` as the canonical target. It already has "What each metric is actually telling you" and "How to measure on Shopify". Restructure it into the flow above:
   - Retitle towards "Why is my Shopify store slow? A Core Web Vitals troubleshooting guide".
   - Add "Step 0: which number to trust".
   - Add "Diagnose by metric".
   - Add "Did an app or theme update cause it?".
   - Add a "Symptom → cause table".
   The audit already flagged the soft threshold wording ("roughly…"), so state the web.dev thresholds exactly (F13). Keep `/shopify-speed-cro` as the conversion-impact piece and `/why-is-my-website-slow` as the platform-agnostic version, and cross-link all three so they don't compete for the Shopify query.
10. **Facts:** F13–F17.

---

## Topic 12: What to integrate with Shopify before scaling

1. **Problem:** Orders are growing. Inventory, accounting, 3PL, invoicing and marketing data are reconciled by hand, overselling happens, and the founder doesn't know what to integrate first or whether to use a connector or a custom build.
2. **Intent / stage:** Solution-aware planning (mid/bottom of the funnel). Readers are often about to buy an ERP, 3PL or connector.
3. **Queries:** Primary: "shopify integrations before scaling". Related: "shopify erp integration", "shopify inventory sync", "shopify accounting integration", "shopify 3pl integration", "shopify netsuite/odoo/tally integration", "shopify flow vs zapier", "shopify api rate limits".
4. **Evidence:**
   - "Shopify and Netsuite integration – how best to do?": https://community.shopify.com/t/shopify-and-netsuite-integration-how-best-to-do/405828
   - "ERP System And Shopify Inventories": https://community.shopify.com/t/erp-system-and-shopify-inventories/182699
   - "Connect odoo with shopify": https://community.shopify.com/t/connect-odoo-with-shopify/646420
   - "Import orders from the ERP": https://community.shopify.com/t/import-orders-from-the-erp/577832
   - No Tally-specific Community thread was found. The India demand is **unverified** in this tool and should be checked with Indian SERPs.
5. **Current content and its gaps:**
   - Shopify Enterprise, "Ecommerce ERP Integration": https://www.shopify.com/enterprise/blog/ecommerce-erp-integration
   - Shopify Enterprise, "ERP Integration: Methods, Benefits": https://www.shopify.com/enterprise/blog/erp-integration. These Shopify pages list **different** certified-connector sets (F22), and they are Plus-oriented.
   - Firebear, ERP guide: https://firebearstudio.com/blog/shopify-erp-integration-guide.html. Vendor content.
   - Silent Infotech, "Top 10 integrations": https://silentinfotech.com/blog/integration-6/10-shopify-integrations-every-growing-ecommerce-store-needs-522. A listicle with no sequencing.
   - **Gaps:** These pieces list tools but give no **order of operations**. Plan-gated limits (Flow HTTP action, API rate limits) go unmentioned. Data-ownership ("system of record") rules are missing, and so is regional tax and payment plumbing.
6. **Buyer potential:** High. This is project-sized custom-app or middleware work.
7. **ZSpace contribution:** An **integration sequencing checklist**:
   - (1) Payments and tax correctness, which is region-specific.
   - (2) Inventory system of record, plus the oversell guard.
   - (3) Order → fulfilment/3PL and shipping/returns, including COD/RTO handling in India.
   - (4) Accounting/ERP posting (invoices, GST/VAT).
   - (5) Customer, marketing and analytics with consent and web pixels.
   - (6) Automation (Flow) and alerting.
   For each step, record: owner system, direction, trigger (webhook vs schedule), failure handling, and plan dependency (for example, Flow's Send HTTP Request needs Grow or higher). Add a "connector vs middleware vs custom app" rule and an API-limits sanity box (F19–F20).
8. **Service / CTA:** /services/shopify-development, with the CTA "Integration map workshop / sequencing review".
9. **Decision:** **Agree with UPDATE** on `/blogs/shopify-business-systems-integration-guide`. Add these sections:
   - "What to integrate first: a sequencing checklist".
   - "Native before custom: what Shopify already covers" (Flow, Shopify Tax/Basic Tax/Manual Tax by country, POS, Markets, certified ERP connectors).
   - "Plan limits that change the design" (Flow HTTP action, rate limits by plan, GraphQL-only for new public apps).
   - "Regional plumbing" (see below).
   Keep the API mechanics in `/shopify-app-integration-guide` and link to them, rather than duplicating.
10. **Facts:** F18–F27.

**Regional notes (integration planning only):**
- **India:** Shopify Payments is **not available** (F24), so a third-party gateway such as Razorpay, PayU or Cashfree is needed for UPI and cards. That gateway list is [Inference]; check each gateway's app listing. Tax uses **Manual Tax** (F23). Shopify Help has a "GST in India FAQ", but this pass did not confirm whether it covers native GST invoices. Plan for a GST-invoice app or ERP/accounting (Tally/Zoho) posting, which is [Inference, unverified]. COD and RTO reconciliation with shipping aggregators is a real operational need but [Inference]; no primary source was gathered.
- **UAE:** Shopify Payments is listed for the UAE (F24). The Help Center's document requirements include a trade licence and Emirates ID. One search snippet claimed it is "early access, Plus plan required", which is **unverified** because the requirements page did not state it. Tax uses Manual Tax (UAE is not named on the tax-services page). Tabby and Tamara were **not verified** as native options; the Shopify Payments UAE methods page lists cards, Apple Pay, Google Pay and Shop Pay only.
- **Australia:** Shopify Payments is available. Basic Tax covers AU (GST) (F23). Afterpay is **not** listed as a Shopify Payments method on the AU payment-methods page and is offered via apps (Afterpay's own app, and Airwallex). Re-verify before publishing.
- **UK:** Shopify Payments and Shopify Tax (UK) are available. Basic Tax is restricted to regions set up before 13 May 2026 (F23).
- **Singapore:** Shopify Payments is available, and so is Basic Tax.

---

## Shared fact table ("facts an article would need")

| # | Exact claim | Primary source | Checked | Label |
|---|---|---|---|---|
| F1 | Theme Store themes need a minimum average Lighthouse **performance** score of 60, and **accessibility** of 90, across product, collection and home pages, on desktop and mobile. | https://shopify.dev/docs/storefronts/themes/store/requirements | 14 Oct 2026 | [Official] |
| F2 | New Theme Store submissions built on or derived from Dawn or Horizon are not eligible. Skeleton theme is the approved base. | same | 14 Oct 2026 | [Official] |
| F3 | Theme Store themes need all templates as JSON templates (sections everywhere), a Custom Liquid section/block, 4.5:1 body text contrast and 24×24px touch targets. | same | 14 Oct 2026 | [Official] |
| F4 | Theme-editor customisations carry over on theme update. Code edits may fail to merge ("code edits could not be included"), and you then re-apply them manually. | https://help.shopify.com/en/manual/online-store/themes/managing-themes/updating-themes | 14 Oct 2026 (search snippet; re-fetch before quoting) | [Official] |
| F5 | Theme app extensions let apps integrate with Online Store 2.0 themes via app blocks "without editing theme code". | https://shopify.dev/docs/apps/build/online-store/theme-app-extensions | 14 Oct 2026 | [Official] |
| F6 | Shopify's blog cites custom ecommerce builds at roughly $2,000–$20,000+. A different Shopify page says "$5,000+" for a custom theme. The two are inconsistent, so use neither as a firm figure. | https://www.shopify.com/blog/ecommerce-website-cost | 14 Oct 2026 (snippet) | [Vendor] |
| F7 | checkout.liquid and additional scripts were sunset for Thank you/Order status pages on **28 Aug 2025**. Script tags on those pages were sunset 28 Aug 2025 for Plus and **26 Aug 2026 for non-Plus**. | https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid ; https://shopify.dev/docs/apps/build/online-store/script-tag-deprecation/order-status | 14 Oct 2026 | [Official] |
| F7a | The non-Plus deadline to upgrade Thank you/Order status pages was 26 Aug 2026. Existing customisations are replaced, and the Additional scripts box became view-only on 28 Aug 2025. Pausing a store auto-upgrades it permanently. | https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-upgrade | 14 Oct 2026 | [Official] |
| F7b | checkout.liquid is "now unsupported" for Information, Shipping and Payment steps (Plus). The current page gives **no date**. It is widely reported as Aug 2024 but was **not verified** here. | checkout-liquid page above | 14 Oct 2026 | [Official] / date [Unverified] |
| F8 | Customising the information, shipping and payment steps with apps, and the Checkout Branding API, are Plus-only. Thank you/Order status app customisations are available on Basic and higher. | https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility | 14 Oct 2026 | [Official] |
| F9 | New script tags with display_scope `order_status`/`all` blocked from 1 Feb 2025. From **1 Oct 2026**, scriptTagCreate/scriptTagUpdate return errors. Storefront script tags stop running **1 Mar 2027** on all API versions. The replacement is app embed blocks, or web pixels for analytics. | https://shopify.dev/docs/apps/build/online-store/blocking-script-tags ; https://shopify.dev/changelog/online-store-script-tags-deprecation | 14 Oct 2026 (1 Oct date via search summary; re-fetch changelog) | [Official] |
| F10 | Some apps leave code in the theme after uninstall. Shopify advises checking with the developer and removing the leftover snippets. App blocks/embeds don't write theme code. | https://help.shopify.com/en/manual/apps/uninstalling-apps | 14 Oct 2026 (snippet) | [Official] |
| F11 | Shopify Scripts: editing/publishing stopped **15 Apr 2026**. All Scripts stopped executing **30 Jun 2026**. Replacement is Shopify Functions (changelog posted 9 Apr 2026). | https://shopify.dev/changelog/shopify-scripts-will-be-deprecated-on-june-30-2026 | 14 Oct 2026 | [Official] |
| F12 | Vendor study (273 stores): average speed score fell from 53.2 (1–2 apps) to 38.3 (16+ apps). | https://hyperspeed.me/blog/how-many-shopify-apps-the-average-store-have/ | 14 Oct 2026 (snippet) | [Vendor] |
| F13 | Good thresholds: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1, measured at the 75th percentile, segmented mobile/desktop. | https://web.dev/articles/vitals | 14 Oct 2026 | [Official] |
| F14 | Shopify Web performance dashboard: real-user data, past 30 days, P75. Good/Moderate/Poor bands are LCP ≤2.5s / ≤4s / >4s, INP ≤200 / ≤500 / >500ms, CLS ≤0.1 / <0.25 / ≥0.25. Data lags up to 36h, reports keep 90 days, and private-mode or new stores may show no data. | https://help.shopify.com/en/manual/online-store/web-performance/web-performance-dashboard | 14 Oct 2026 | [Official] |
| F15 | Shopify: "for every 100 milliseconds slower a store loads, conversion tends to be about 3.5% lower". Correlation, based on LCP buckets over a 28-day window in Jan–Feb 2026. Published 27 Apr 2026. | https://www.shopify.com/enterprise/blog/store-speed-conversion | 14 Oct 2026 | [Vendor] (Shopify first-party data) |
| F16 | Online store speed report shows markers for app installs/uninstalls. | Community only: https://community.shopify.com/t/shopify-performance/551436/3 | 14 Oct 2026 | [Unverified]; confirm in admin |
| F17 | The "1s delay = 7% conversions" claim traces to a secondary source (MachMetrics via Vitals). **Do not use.** | https://vitals.co/blog/?p=52 | 14 Oct 2026 | [Industry, weak] |
| F18 | REST Admin API is legacy as of 1 Oct 2024. From 1 Apr 2025, new public apps must use the GraphQL Admin API exclusively. No public migration deadline for existing apps was found. | https://shopify.dev/docs/api/admin-rest ; https://shopify.dev/changelog/starting-april-2025-new-public-apps-submitted-to-shopify-app-store-must-use-graphql | 14 Oct 2026 | [Official]; existing-app deadline [Unverified] |
| F19 | GraphQL Admin API restore rate: Standard 100 points/s, Advanced 200, Plus 1,000, Enterprise (Commerce Components) 2,000. A single query is capped at 1,000 points. | https://shopify.dev/docs/apps/build/apis/graphql-admin/rate-limits | 14 Oct 2026 | [Official] |
| F20 | Bucket size and restore rate vary by API and plan. REST uses a request-based bucket. REST figures were not captured here; fetch https://shopify.dev/docs/api/admin-rest/usage/rate-limits before quoting. | https://shopify.dev/docs/api/usage/limits | 14 Oct 2026 | [Official] |
| F21 | Shopify Flow is free on Basic, Grow, Advanced and Plus. Send HTTP Request works only on Grow, Advanced and Plus. Tasks from custom partner apps are Plus-only. ("Grow" appears to be the renamed "Shopify" plan; this is [Inference], so verify on pricing.) | https://help.shopify.com/en/manual/shopify-flow ; https://changelog.shopify.com/posts/shopify-flow-now-available-to-basic-plan (Basic added Jul 2023) | 14 Oct 2026 | [Official] |
| F22 | Shopify's Global ERP Program offers certified connectors. Shopify's own pages list differing sets: NetSuite, Business Central, Acumatica, Brightpearl, Infor in one, and Fulfil and QuickBooks Online in another. Don't publish a fixed list without the current program page. | https://www.shopify.com/news/the-best-in-commerce-joins-the-best-in-enterprise-shopify-launches-global-erp-program ; https://www.shopify.com/enterprise/blog/erp-integration | 14 Oct 2026 | [Vendor] / list [Unverified] |
| F23 | Shopify Tax: US, EU, UK, Canada. Basic Tax: Norway, Switzerland, Australia, NZ, Singapore. Manual Tax: everywhere else (incl. India, UAE by omission). Basic Tax in CA/UK/EU is only for regions set up before 13 May 2026, and US Basic Tax enrolment closed 14 Jul 2025. | https://help.shopify.com/en/manual/taxes/tax-services | 14 Oct 2026 (2026 cutoffs via search summary; re-fetch) | [Official] |
| F24 | Shopify Payments: **not** available in India. Available in UAE, Australia, UK and Singapore (business-category limits apply). | https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries | 14 Oct 2026 | [Official] |
| F25 | Shopify Payments AU payment-methods page lists Apple Pay, Google Pay and Shop Pay plus EU local methods. It does **not** list Afterpay. | https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries/australia/payment-methods | 14 Oct 2026 | [Official] |
| F26 | UAE Shopify Payments needs a trade licence/freelancer permit plus Emirates ID/passport (and an MoA for LLCs). The "Plus-only / early access" claim is **unverified**. | https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries/united-arab-emirates/requirements | 14 Oct 2026 | [Official] / plan claim [Unverified] |
| F27 | Shopify Markets plan limits, Managed Markets availability and POS Lite/Pro inclusions were **not verified** in this pass. The fetched help pages did not state them. | https://help.shopify.com/en/manual/international/markets | 14 Oct 2026 | [Unverified] |

### Existing ZSpace copy to check against these facts
- `src/lib/blog-data.ts` already states REST is legacy and new public apps need GraphQL. That is consistent with F18.
- `src/lib/blog-data-commerce.ts` already cites the Lighthouse 60 threshold. That is consistent with F1, but it omits accessibility 90 and the new "not Dawn/Horizon-derived" rule.
- No existing post found mentions the **1 Mar 2027 ScriptTag shutdown** or the **30 Jun 2026 Scripts shutdown**. Both are timely additions for topics 10 and 12.
