import type { BlogPost } from "./blog-data";

/**
 * Australian commerce pair: Shopify development for Australian stores, and
 * ecommerce conversion optimisation for Australian shoppers. Differentiated from
 * the generic owners (shopify-store-development, shopify-development-cost,
 * how-to-set-up-a-shopify-store, shopify-checkout-optimization, shopify-cro-guide,
 * why-customers-abandon-checkout, ecommerce-checkout-ux and others) by Australian
 * decisions: GST, the RBA surcharging change, BNPL licensing, delivery and Parcel
 * Lockers, consumer guarantees, ACCC review guidance and the 2027 drip pricing rules.
 * Sources checked 2026-10-09: Australia Post eCommerce Report 2026; ABS Retail
 * Trade (final release, June 2025); RBA media release 2026-10 and Conclusions
 * Paper; ASIC BNPL information sheet; Allens and HWL Ebsworth on the Unfair Trading
 * Practices Bill 2026; ACCC online reviews guidance; Consumer Protection WA
 * (consumer guarantees); ATO (GST); Shopify Help Center (Payments supported
 * countries, Australian tax settings); shopify.dev (checkout.liquid, Scripts
 * deprecation); Affirm and Shopify (BusinessWire); Google Search Central (Product
 * structured data); W3C WCAG 2.2; ABS disability survey; Australian Human Rights
 * Commission; Baymard Institute; Nielsen Norman Group; web.dev; Evan Miller;
 * ACMA (Spam Act). No figure here is ZSpace client data.
 */
export const auCommercePosts: BlogPost[] = [
  {
    slug: "shopify-development-australia",
    title: "Shopify Development Australia: Store Setup, Customisation and Growth",
    seoTitle: "Shopify Development in Australia: Setup to Growth",
    excerpt:
      "Shopify development for Australian stores: architecture, theme vs custom vs headless, GST, payments after the surcharging change, delivery, returns, launch.",
    category: "Shopify & Ecommerce",
    banner: "storefront",
    sceneKind: "shopify",
    bannerAlt:
      "A Shopify storefront mapped to the Australian decisions behind it: GST-inclusive pricing, payment methods without card surcharges, delivery options including Parcel Lockers, returns and launch checks",
    date: "2026-10-09",
    readingTime: "20 min read",
    relatedServiceSlugs: ["shopify-development", "cro-audit", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "retail", "fashion-apparel", "beauty-personal-care"],
    relatedSlugs: ["shopify-store-development", "shopify-development-cost", "how-to-set-up-a-shopify-store"],
    faqs: [
      {
        q: "Is Shopify a good platform for Australian businesses?",
        a: "For most small and mid-sized Australian retailers, yes. Shopify Payments is available in Australia, Shopify offers its Basic Tax service for Australian merchants, and the app ecosystem covers local shipping and accounting needs. It suits brands that want a hosted platform and fast iteration. It suits less well where pricing, configuration or workflows are so unusual that the checkout and admin would be fought at every step.",
      },
      {
        q: "Do Australian Shopify stores have to stop surcharging card payments?",
        a: "The Reserve Bank of Australia decided in March 2026 to remove surcharging on eftpos, Visa and Mastercard debit, prepaid and credit cards, with most changes taking effect from 1 October 2026. American Express, buy now pay later and mobile wallets were not covered and are under separate review. Check your payment provider's guidance and get advice on how the change applies to your store.",
      },
      {
        q: "How should GST be set up on an Australian Shopify store?",
        a: "GST is 10% on most goods and services sold in Australia, according to the ATO, and Australian consumers expect GST-inclusive prices. In Shopify, set prices to include tax, enable the Australian tax settings and check that product-level exemptions are correct. Shopify states that tax is the merchant's responsibility, so confirm registration, exemptions and invoice wording with your accountant or the ATO.",
      },
      {
        q: "Should an Australian store use a theme, a custom theme or headless Shopify?",
        a: "Most new stores should start with a well-supported theme and customise it with sections and metafields. A custom theme makes sense when brand, content or merchandising needs outgrow the theme's blocks. Headless suits stores with multiple front ends, complex content or a dedicated engineering team. Headless adds hosting, build and maintenance work, so it needs a clear reason beyond performance alone.",
      },
      {
        q: "Which delivery options should an Australian Shopify store offer?",
        a: "Offer at least a standard and an express option with clear dates, and consider out-of-home collection such as Parcel Lockers. In the Australia Post eCommerce Report 2026, 69% of shoppers said they prefer a wide range of delivery options at checkout and 32% would switch retailers to get out-of-home collection points. Show cost and estimated dates before checkout.",
      },
      {
        q: "Can an Australian store refuse refunds?",
        a: "A store can choose its own change-of-mind policy, but it cannot exclude the consumer guarantees in the Australian Consumer Law. State consumer agencies explain that for a major failure the consumer chooses a refund or replacement, and that 'no refunds' policies which try to cancel these rights are not allowed. Have your returns page reviewed by a lawyer; this article is not legal advice.",
      },
      {
        q: "Does checkout.liquid still work on Shopify?",
        a: "No. Shopify says checkout.liquid is unsupported for the information, shipping and payment steps, and it and additional scripts were sunset for the thank you and order status pages on 28 August 2025. Shopify Scripts stopped running on 30 June 2026. Customisation now uses checkout UI extensions, Shopify Functions and pixels under Checkout Extensibility.",
      },
      {
        q: "How long does it take to build an Australian Shopify store?",
        a: "It depends on catalogue size, design scope, integrations and data migration, so treat any fixed figure with caution. A theme-based build with clean product data is far quicker than a custom theme with ERP integration and a migration from another platform. The biggest schedule risks are usually product data, payment and tax configuration, shipping rules and content, not the theme itself.",
      },
    ],
    content: [
      {
        heading: "Shopify development in Australia: the short answer",
        body: [
          "**Shopify development in Australia** is mostly standard Shopify work plus a handful of local decisions that change revenue and risk: GST-inclusive pricing, card payments without surcharges after the RBA's 2026 decision, delivery options that include out-of-home collection, returns that respect the consumer guarantees, and a catalogue written the way Australians search. Get those right and the rest is good Shopify practice.",
          "This guide is for Australian founders, ecommerce managers and marketing leads planning a new store, a rebuild or a migration. It does not repeat the generic build process. Our guide to [[/blogs/shopify-store-development|Shopify store development]] covers that depth, [[/blogs/how-to-set-up-a-shopify-store|how to set up a Shopify store]] walks through the admin, and [[/blogs/shopify-development-cost|Shopify development cost]] explains pricing in general terms. Here we focus on what differs when the customers, payments, tax and parcels are Australian.",
          "Facts are attributed to their sources. Recommendations are labelled as ours, and examples are hypothetical. Nothing here is legal, tax or financial advice: for those, go to the ATO, the ACCC, your state consumer agency or an adviser.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Australia Post's eCommerce Report 2026 puts 2025 online spend at $82.6 billion and the online share of retail at 24%. The ABS measured 12.7% in June 2025 using a different method, so never mix the two.",
          "Set prices to include GST (10%, per the ATO) and keep the visible price, structured data and Google Merchant Center feed identical.",
          "The RBA decided to remove surcharging on eftpos, Visa and Mastercard cards from 1 October 2026. Remove those surcharge line items and build card costs into prices. Amex and BNPL were not covered.",
          "Delivery is a conversion lever: 70% of shoppers told Australia Post that poor delivery communication at checkout makes them less likely to buy.",
          "Returns policies must sit alongside the Australian Consumer Law's consumer guarantees, which a store cannot contract out of.",
          "Customise checkout with Checkout Extensibility and Shopify Functions; checkout.liquid and Shopify Scripts are gone.",
          "Choose theme, custom theme or headless by content complexity and team capacity, not by fashion.",
          "Plan accessibility from the design stage. WCAG 2.2 adds criteria that bite in checkout, such as target size and redundant entry.",
        ],
      },
      {
        heading: "The Australian online market: what the research measures",
        body: [
          "**Australia Post eCommerce Report 2026.** The report covers calendar year 2025 and uses CommBank iQ transaction data plus a BNPL estimate for spend, with surveys of at least 1,500 consumers and 600 businesses. It found that Australians spent $82.6 billion online in 2025, up 14% year on year (the media release gives 13.9%). Online made up 24% of total retail spend. Some 9.8 million households, or 82% of all households, shopped online, and 41% of households shopped online at least fortnightly. The average basket was $96, about $10 less than in 2020, and the average household bought from 16 different retailers or brands ([[https://auspost.com.au/ecomreport|Australia Post eCommerce Report 2026]]).",
          "**ABS Retail Trade.** The Australian Bureau of Statistics measured online sales at 12.7% of total retailing in June 2025, in original terms. That was the final issue of Retail Trade, Australia; the ABS has since replaced it with new household spending and business turnover indicators ([[https://www.abs.gov.au/about/cessation-retail-business-survey-and-retail-trade-publication|ABS]]). The ABS and Australia Post figures use different data and definitions. Quote each with its source and do not compare them as if they measured the same thing.",
          "**What this means for a build.** Three findings from the Australia Post report shape store design more than the headline spend. Shoppers spread their purchases across many retailers, so a returning customer needs a reason to come back. Smaller average baskets put pressure on free-delivery thresholds and on any fee added late in checkout. And pure marketplaces such as Amazon and Temu took 23% of online spending, which means your store is often being compared, side by side, with a marketplace listing on price, delivery date and returns.",
        ],
        table: {
          headers: ["2025 category (Australia Post)", "Online spend", "Growth"],
          rows: [
            ["Online marketplaces", "$18.9b", "+13%"],
            ["Food and liquor", "$16b", "+14%"],
            ["Fashion and apparel", "$11.6b", "+11.5%"],
            ["Home and garden", "$11.4b", "+10.5%"],
            ["Consumer electronics", "$9.2b", "+16%"],
            ["Hobbies and recreational goods", "$5b", "+17.1%"],
            ["Health and beauty", "$3.8b", "+15.1%"],
            ["Books, stationery and multimedia", "$2.5b", "+24.1%"],
          ],
        },
      },
      {
        heading: "What changes for an Australian build, and what does not",
        body: [
          "Most of a Shopify build is the same in Sydney, Auckland or London: information architecture, theme work, product data, apps, speed and analytics. The table below separates the generic work from the Australian decisions. It is our framework for scoping, and it is a useful way to spot where a template quote from an overseas agency may have missed something.",
        ],
        table: {
          headers: ["Build area", "Same everywhere", "Australian decision"],
          rows: [
            ["Pricing and tax", "Tax settings, price display, invoices", "GST-inclusive prices at 10%; GST registration; consistent prices in feeds"],
            ["Payments", "Gateway, wallets, fraud settings", "No eftpos, Visa or Mastercard surcharges from 1 October 2026; BNPL providers now need a credit licence"],
            ["Shipping", "Zones, rates, carrier apps", "Australia Post and courier rates, regional delivery, Parcel Locker and collection point options"],
            ["Returns", "Returns flow and policy page", "Consumer guarantees under the Australian Consumer Law sit above any store policy"],
            ["Content", "Product copy, collections, SEO", "Australian spelling and product terms; .com.au or Markets subfolder decisions"],
            ["Reviews and pricing display", "Review apps, sale badges", "ACCC guidance on reviews; drip pricing rules commencing 1 July 2027"],
            ["Accessibility", "WCAG conformance", "Disability Discrimination Act context and the Human Rights Commission's 2025 guidelines"],
          ],
        },
      },
      {
        heading: "Store architecture: plan, markets and catalogue structure",
        body: [
          "**Plan and markets first.** Decide early whether the store sells only in Australia or also to New Zealand and other markets. Shopify Markets can run several markets from one store with separate currencies, prices and domains or subfolders. Selling to New Zealand from an Australian store raises its own questions about currency, duties, delivery promises and returns, so scope them deliberately rather than switching a market on at launch. Our [[/blogs/shopify-seo-guide|Shopify SEO guide]] now includes a section on .com.au domains, subfolders and hreflang for Australian stores.",
          "**Navigation that matches how people shop.** Build the collection tree from search and sales data, not from the warehouse layout. Use automated collections driven by consistent product tags, types and metafields, so new products land in the right place without manual work. Collections that target commercial searches need their own copy and titles; see [[/blogs/shopify-collection-page-seo|Shopify collection page SEO]].",
          "**Australian language in the catalogue.** Write titles, filters and collection names the way Australian customers search. Illustrative examples: 'thongs' rather than 'flip-flops', 'doona cover' rather than 'duvet cover', 'jumpers' alongside 'sweaters', and 'colour' as the filter label. Keep a glossary so product copy, filters and ads use the same terms. Product-level SEO mechanics are the same as anywhere else; see [[/blogs/shopify-product-seo|Shopify product SEO]].",
          "**Product data as infrastructure.** Clean product data drives filters, feeds, search, structured data and, increasingly, AI shopping tools. Australia Post's 2026 report put it bluntly in one of its lessons: 'If you're not visible to AI agents, you're not converting.' Our guide to [[/blogs/ai-ecommerce-australia|AI in Australian ecommerce]] covers that shift; for the build, it means complete attributes, identifiers, dimensions, materials and care details in structured fields, not buried in description text.",
        ],
      },
      {
        heading: "Theme, custom theme or headless: a decision table",
        body: [
          "The decision table below is our framework. It compares the three common ways to build the storefront. 'Theme' means a well-supported theme from the Shopify Theme Store, customised with sections, blocks and metafields. 'Custom theme' means a Liquid theme built for your brand. 'Headless' means a separate front end, such as Hydrogen or a Next.js site, reading from Shopify's Storefront API.",
        ],
        table: {
          headers: ["Factor", "Customised theme", "Custom Liquid theme", "Headless"],
          rows: [
            ["Best fit", "New stores, standard catalogues, small teams", "Established brands with distinct content and merchandising needs", "Multiple front ends, complex content, in-house engineers"],
            ["Time to launch", "Shortest", "Medium", "Longest"],
            ["Merchant editing", "Full theme editor", "Full theme editor if sections are built well", "Depends on the CMS and preview set-up"],
            ["App compatibility", "Highest; most apps target themes", "High, with some theme app extension work", "Lower; many apps need custom integration"],
            ["Checkout", "Shopify checkout with extensions", "Shopify checkout with extensions", "Shopify checkout with extensions"],
            ["Ongoing work", "Theme updates and app hygiene", "Developer maintenance of custom code", "Hosting, builds, API changes and front-end maintenance"],
            ["Main risk", "Looking like every other store", "Custom code nobody documents", "Cost and complexity without a clear benefit"],
          ],
        },
        callout: {
          type: "tip",
          text: "Our recommendation: start with the simplest option that meets the brand and content brief, and move up only when a specific requirement forces it. Our comparisons of [[/blogs/shopify-theme-vs-custom-development|Shopify themes vs custom development]] and [[/blogs/headless-shopify-explained|headless Shopify]] go deeper on each route.",
        },
      },
      {
        heading: "Custom development: sections, apps, Functions and Checkout Extensibility",
        body: [
          "**Sections and metafields.** Most custom work on a modern Shopify theme should be reusable sections and blocks that read from metafields and metaobjects, so merchandisers can build pages without a developer. Typical Australian examples include a delivery-estimate block, a returns summary near the add-to-cart button, a size guide, and a care or compliance panel driven by product metafields.",
          "**Apps versus custom code.** Install an app when the job is common and the vendor maintains it, such as reviews, subscriptions or shipping labels. Build custom when the logic is specific to your business or when several apps would overlap. Every app adds scripts, data access and a supplier, so record why each one is installed and who owns it. See [[/blogs/shopify-app-integration-guide|Shopify app integration]] for the evaluation process.",
          "**Checkout is now extensions only.** Shopify says checkout.liquid is 'now unsupported for the Information, Shipping, and Payment checkout steps', and that checkout.liquid and additional scripts were sunset for the thank you and order status pages on 28 August 2025. Script tags on those pages were sunset for non-Plus stores on 26 August 2026 ([[https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid|shopify.dev]]). Shopify Scripts stopped running on 30 June 2026, with Shopify Functions as the replacement ([[https://shopify.dev/changelog/shopify-scripts-will-be-deprecated-on-june-30-2026|Shopify changelog]]).",
          "**What that means in practice.** Discounts, shipping and payment method rules belong in Shopify Functions. Content and fields inside checkout belong in checkout UI extensions. Tracking belongs in web pixels rather than scripts pasted into the order status page. If you are inheriting an older Australian store, audit for leftover scripts and tracking that silently stopped working after those dates. Our [[/blogs/shopify-checkout-optimization|Shopify checkout optimisation]] and [[/blogs/ecommerce-checkout-ux|ecommerce checkout UX]] guides cover the conversion side of checkout changes, and [[/blogs/mobile-ecommerce-checkout|mobile ecommerce checkout]] covers small-screen detail.",
        ],
      },
      {
        heading: "Payments: Shopify Payments, wallets, BNPL and the end of card surcharges",
        body: [
          "**Shopify Payments.** Australia is on Shopify's list of countries where Shopify Payments is supported ([[https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries|Shopify Help Center]]). Using it keeps cards, accelerated wallets and reporting in one place. Check its current requirements and eligible business types before you plan around it.",
          "**The RBA surcharging decision.** On 31 March 2026 the Reserve Bank announced that its Payments System Board will 'remove surcharging by lifting the prohibition on 'no-surcharge' rules for all designated card networks', covering eftpos, Mastercard and Visa debit, prepaid and credit cards. The RBA said most changes, including the surcharging removal and cuts to domestic interchange, would take effect on 1 October 2026, with some measures following on 1 April 2027 ([[https://rba.gov.au/media-releases/2026/mr-26-10.html|RBA media release 2026-10]]). The RBA also set lower interchange caps, including 0.3% for consumer credit cards ([[https://www.rba.gov.au/payments-and-infrastructure/review-of-retail-payments-regulation/2026-03/conclusions-paper/executive-summary.html|RBA Conclusions Paper]]).",
          "**What it means for a Shopify build.** If your store adds a card surcharge through an app, a fee product added to the cart or a payment provider setting, remove it for eftpos, Visa and Mastercard and build card costs into your prices. Update checkout copy, FAQs and terms that mention surcharges. The decision did not cover buy now pay later, mobile wallets or three-party networks such as American Express; the RBA said those go to further review. Confirm the details with your payment provider and adviser.",
          "**Buy now pay later.** ASIC states that from 10 June 2025, anyone engaging in credit activities involving buy now pay later contracts must hold an Australian credit licence ([[https://asic.gov.au/regulatory-resources/credit/buy-now-pay-later-credit-contracts-credit-licensing/|ASIC]]). For merchants, that means checking that any BNPL provider you add is properly licensed and that your product-page messaging about instalments is accurate. Affirm and Shopify announced Shop Pay Installments for Australia on 27 August 2026, described as powered by Affirm ([[https://www.businesswire.com/news/home/20260827132257/en/|BusinessWire]]); check availability for your store in the Shopify admin. Other BNPL providers connect as third-party payment apps, so confirm their current Shopify integration with the provider.",
        ],
        callout: {
          type: "note",
          text: "Our recommendation: treat payments as a pricing exercise, not only a settings change. If you removed a 1–2% card surcharge, model the margin effect by product before you adjust prices, and keep the visible price, cart total and feed prices identical so customers never see a different number late in checkout.",
        },
      },
      {
        heading: "GST settings: getting the price shoppers see right",
        body: [
          "**The rule.** GST is 10% on most goods and services sold in Australia, and businesses must register once their GST turnover reaches $75,000, according to the ATO ([[https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst|ATO, GST]]). Some products are GST-free, so check product-level tax settings with your accountant, particularly for food and health products.",
          "**In Shopify.** Shopify lists Australia among the countries where merchants can use its Basic Tax service, and states plainly: 'Tax is your responsibility' ([[https://help.shopify.com/en/manual/taxes/regional-tax-settings/australia|Shopify Help Center]]). In practice, a build should switch on tax-inclusive pricing so the shelf price includes GST, configure exemptions for GST-free products, show GST on invoices and order confirmations in the form your accountant specifies, and test the totals for a mixed cart of taxable and GST-free items.",
          "**Keep every price identical.** Google Merchant Center lists Australia among the countries where the product price should include GST, and asks for 'an amount and currency that match the price on your landing page and the checkout pages' ([[https://support.google.com/merchants/answer/6324371|Google Merchant Center Help]]). The same applies to Product structured data on the page; see [[/blogs/product-structured-data-ecommerce|product structured data]]. A theme that shows a GST-inclusive price while an app feeds a GST-exclusive price to Google will cause disapprovals and a poor experience. Confirm registration, exemptions and invoice requirements with your accountant or the ATO; this is not tax advice.",
        ],
      },
      {
        heading: "Shipping and delivery: Australia Post, couriers and Parcel Lockers",
        body: [
          "**What shoppers told Australia Post.** In the 2026 report, 73% said a good delivery experience makes them more likely to shop online rather than in-store, 69% prefer a wide range of delivery options at checkout, and 70% said poor delivery communication at checkout makes them less likely to complete a purchase. Around 26% expect same-day or next-day delivery when a purchase is time-sensitive, and 43% are willing to pay extra for it, rising to 59% for Gen Z and Millennials.",
          "**Speed versus certainty.** The same report asked whether shoppers value speed or certainty of delivery. Older shoppers chose certainty by a wide margin: 70% of Gen X, 87% of Boomers and 90% of the Builders generation, against 51% of Gen Z. For many stores, an accurate delivery date matters more than the fastest possible one.",
          "**Delivery time affects conversion.** THE ICONIC's Blake Egglestone is quoted in the report saying 'we observe a 3-10% decrease in conversion for every additional day added to the delivery time shown at checkout'. That is one retailer's observation, not an industry benchmark, but it is a strong reason to show realistic dates and to keep warehouse cut-off times visible.",
          "**Out-of-home delivery.** Australia Post reports more than 1,200 Parcel Lockers, out-of-home deliveries growing about 17% a year, and 32% of shoppers who would switch retailers for out-of-home collection points. It also found that 42% of consumers don't know about Parcel Lockers, and 74% would consider them once they do. Australia Post offers collection points through a widget, an API or a Shopify app, according to the report. Courier options are available through apps on the Shopify App Store; compare coverage, rates and tracking for regional areas before choosing.",
          "**Our recommendation.** Build delivery as a product feature: a delivery-estimate block on product pages based on postcode, rates and cut-off times that match the carrier contract, at least one collection option, and tracking emails that link to the carrier. Outer regional and remote areas had the highest growth of the report's location groups (+14.4%), so test the checkout with regional postcodes. Our guides to [[/blogs/ecommerce-shipping-ux|ecommerce shipping UX]] and [[/blogs/ecommerce-shipping-integration|shipping integration]] cover the generic mechanics.",
        ],
      },
      {
        heading: "Returns and the Australian Consumer Law",
        body: [
          "**Consumer guarantees come first.** Products sold in Australia must meet a set of basic rights called consumer guarantees. Consumer Protection WA explains that 'the consumer can choose a refund or replacement when there is a major failure', that for minor problems the business can choose to repair, replace or refund, and that it is 'illegal for businesses to try to cancel these rights in store policies or terms and conditions', for example with 'no refunds' policies ([[https://consumerprotection.wa.gov.au/returns-refunds-repairs-and-replacements|Consumer Protection WA]]). The ACCC's [[https://www.accc.gov.au/consumers/buying-products-and-services/consumer-rights-and-guarantees|consumer rights and guarantees]] pages are the national reference.",
          "**Change of mind is a separate choice.** A store is not generally required to refund a change of mind under the consumer guarantees, but if it offers a change-of-mind policy, such as 30-day returns, it must honour it. Australia Post's report found that 57% of Baby Boomers say free returns strongly influence where they shop, the only returns figure in that report.",
          "**What to build.** A returns page written in plain language that separates faulty items from change of mind; a returns portal or app that lets customers start a return without emailing; return labels or drop-off options; and a summary of the policy near the add-to-cart button. Have the wording reviewed by a lawyer. Our [[/blogs/ecommerce-returns-ux|ecommerce returns UX]] guide covers the generic flow design.",
        ],
      },
      {
        heading: "Analytics, accessibility and performance",
        body: [
          "**Analytics.** Set up Shopify's analytics, Google Analytics 4 or your chosen tool with web pixels, server-side conversions where your ad platforms support them, and a consent approach that matches your privacy policy. Define the funnel steps before launch so you have a baseline. See the [[/blogs/shopify-analytics-guide|Shopify analytics guide]].",
          "**Accessibility.** The ABS found that 21.4% of Australians, about 5.5 million people, have disability ([[https://abs.gov.au/media-centre/media-releases/55-million-australians-have-disability|ABS, 2024]]). The Australian Human Rights Commission published its Guidelines on equal access to digital goods and services in April 2025 under the Disability Discrimination Act; the guidelines are not legally binding but set out the Commission's view ([[https://humanrights.gov.au/our-work/disability-rights/publications/guidelines-equal-access-digital-goods-and-services|AHRC]]). WCAG 2.2 adds criteria that matter in stores, including 2.5.8 Target Size (Minimum) and 3.3.7 Redundant Entry ([[https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/|W3C]]). Our guide to [[/blogs/website-accessibility-australia|website accessibility in Australia]] explains the Australian context.",
          "**Performance.** Google's 'good' Core Web Vitals thresholds are LCP of 2.5 seconds or less, INP of 200 milliseconds or less and CLS of 0.1 or less, measured at the 75th percentile ([[https://web.dev/articles/vitals|web.dev]]). Apps, large images and heavy themes are the usual causes of slow Shopify pages. Our [[/blogs/shopify-core-web-vitals-performance-guide|Shopify Core Web Vitals guide]] covers the fixes. Security belongs in the same review: staff accounts, app permissions and admin access; see [[/blogs/website-security-australia|website security for Australian businesses]].",
        ],
      },
      {
        heading: "Integrations: accounting, inventory and fulfilment",
        body: [
          "Australian stores commonly connect Shopify to an accounting package such as Xero or MYOB, an inventory or ERP system, a third-party logistics provider, a marketing platform and a customer service tool. Each connection is a data contract: which system owns stock levels, prices, customer records and order status, and what happens when a sync fails.",
          "**Our recommendation.** Write the integration map before choosing apps. For each flow, note the direction, the frequency, the owner, and how errors are reported. Check that GST is passed correctly to the accounting system for mixed carts and refunds. Where an off-the-shelf connector does not fit, a small custom integration is often cheaper to maintain than chaining several apps. Our guide to [[/blogs/api-integration-australia|API integration for Australian businesses]] covers the patterns.",
        ],
        code: {
          label: "Illustrative integration map (hypothetical store)",
          text: "[Shopify] --orders, refunds, GST--> [Accounting: Xero or MYOB]\n[Shopify] --orders--> [3PL warehouse]\n[3PL warehouse] --tracking, stock--> [Shopify]\n[ERP or inventory] --prices, stock--> [Shopify]\n[Shopify] --customers, events--> [Email and SMS platform]\n\nQuestions per arrow:\n- Which system is the source of truth?\n- How often does it sync?\n- Who is alerted when it fails?",
        },
      },
      {
        heading: "What drives the cost of an Australian Shopify build",
        body: [
          "We do not publish average AUD prices, because a range without your scope is not useful and published averages vary widely. The drivers below explain why two quotes for 'a Shopify store' can differ several times over. For how pricing models compare, see [[/blogs/website-development-cost-australia|website development cost in Australia]] and the generic [[/blogs/shopify-development-cost|Shopify development cost]] guide.",
        ],
        table: {
          headers: ["Cost driver", "Lower effort", "Higher effort"],
          rows: [
            ["Storefront", "Customised theme", "Custom Liquid theme or headless front end"],
            ["Catalogue", "Hundreds of products with clean data", "Thousands of variants, messy data, bundles or configurators"],
            ["Migration", "New store", "Migration with URL redirects, customers, orders and reviews"],
            ["Integrations", "Standard connectors", "ERP, 3PL, custom pricing or B2B workflows"],
            ["Checkout logic", "Standard checkout", "Functions for discounts, delivery or payment rules; checkout UI extensions"],
            ["Markets", "Australia only", "Australia plus NZ or other markets, currencies and languages"],
            ["Content and design", "Brand assets supplied", "Photography, copy, custom design system"],
            ["Quality assurance", "Core flows tested", "Accessibility audit, performance budget, regional delivery tests"],
          ],
        },
      },
      {
        heading: "Launch checklist for an Australian Shopify store",
        body: [
          "Run this list on real devices with real test orders before you open the doors. It is our working list, not an official standard.",
        ],
        checklist: [
          "Prices include GST; GST-free products are correctly exempt; a mixed cart totals correctly",
          "Invoice and order confirmation show GST as your accountant requires",
          "No surcharge line items for eftpos, Visa or Mastercard; terms and FAQs updated",
          "Shopify Payments or your gateway tested with cards, wallets and any BNPL option",
          "Shipping rates match the carrier contract, including regional and remote postcodes",
          "Delivery estimates on product and cart pages; at least one collection option",
          "Returns page separates faulty items from change of mind and has been legally reviewed",
          "Product titles, filters and collections use Australian spelling and terms",
          "Product structured data price matches the visible GST-inclusive price",
          "Google Merchant Center feed approved with GST-inclusive prices",
          "Old URLs redirected if migrating; sitemap submitted in Search Console",
          "Checkout customisations built as extensions and Functions; no legacy scripts",
          "Keyboard and screen reader check of navigation, product page, cart and checkout",
          "Core Web Vitals checked on product and collection templates on mobile",
          "Analytics funnel and conversion tracking verified with test orders",
          "Accounting, inventory and 3PL syncs tested, including refunds",
          "Staff accounts use two-step verification; unused apps removed",
        ],
      },
      {
        heading: "Example: a hypothetical homewares brand moving to Shopify",
        body: [
          "**The situation (hypothetical).** A homewares brand sells through an older ecommerce platform, adds a 1.5% card surcharge at checkout, ships everything by one courier and has a returns page headed 'No refunds on sale items'. It wants to move to Shopify and start selling to New Zealand.",
          "**How we would approach it.** First, scope the Australian decisions: remove the card surcharge for eftpos, Visa and Mastercard and review prices; rewrite the returns page so it no longer suggests consumer guarantees can be excluded, with legal review; add a Parcel Locker or collection point option and a postcode-based delivery estimate. Second, choose a customised theme rather than a custom build, because the catalogue and content are standard. Third, plan the migration with full URL redirects and clean product data. Fourth, launch Australia first and add New Zealand as a separate Shopify market once delivery and returns for that market are worked out.",
          "**What we would measure.** Checkout completion by device, the share of orders using each delivery option, returns contacts per hundred orders, and any change in average order value after the price review. Conversion work after launch follows our guide to [[/blogs/ecommerce-conversion-optimization-australia|ecommerce conversion optimisation in Australia]], with the generic process in the [[/blogs/shopify-cro-guide|Shopify CRO guide]], abandonment research in [[/blogs/why-customers-abandon-checkout|why customers abandon checkout]] and trust signals in [[/blogs/shopify-trust-optimization|Shopify trust optimisation]].",
        ],
      },
      {
        heading: "Common mistakes on Australian Shopify builds",
        body: [],
        checklist: [
          "Treating the RBA decision as optional and leaving surcharge apps running for eftpos, Visa and Mastercard.",
          "Showing GST-exclusive prices on the store or in the Google feed, so prices change late in checkout.",
          "Returns wording that implies customers lose their consumer guarantee rights.",
          "Free-delivery thresholds set without checking them against the average basket.",
          "One delivery option and no date estimate.",
          "American spelling and product terms copied from a supplier feed.",
          "Choosing headless for speed alone, then struggling to maintain it.",
          "Installing overlapping apps that slow the store and duplicate structured data.",
          "Leaving old checkout scripts and tracking that stopped working after the 2025 and 2026 sunsets.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Market data: [[https://auspost.com.au/ecomreport|Australia Post eCommerce Report 2026]] (calendar year 2025; CommBank iQ transaction data and surveys); [[https://www.abs.gov.au/about/cessation-retail-business-survey-and-retail-trade-publication|ABS, cessation of the Retail Trade publication]]; [[https://abs.gov.au/media-centre/media-releases/55-million-australians-have-disability|ABS, 5.5 million Australians have disability]].",
          "Payments and tax: [[https://rba.gov.au/media-releases/2026/mr-26-10.html|RBA media release 2026-10]]; [[https://www.rba.gov.au/payments-and-infrastructure/review-of-retail-payments-regulation/2026-03/conclusions-paper/executive-summary.html|RBA Conclusions Paper]]; [[https://asic.gov.au/regulatory-resources/credit/buy-now-pay-later-credit-contracts-credit-licensing/|ASIC, BNPL credit licensing]]; [[https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst|ATO, GST]]; [[https://www.businesswire.com/news/home/20260827132257/en/|Affirm and Shopify, Shop Pay Installments in Australia]].",
          "Consumer law: [[https://consumerprotection.wa.gov.au/returns-refunds-repairs-and-replacements|Consumer Protection WA, returns, refunds, repairs and replacements]]; [[https://www.accc.gov.au/consumers/buying-products-and-services/consumer-rights-and-guarantees|ACCC, consumer rights and guarantees]].",
          "Platform and standards: [[https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries|Shopify Payments supported countries]]; [[https://help.shopify.com/en/manual/taxes/regional-tax-settings/australia|Shopify, Australian tax settings]]; [[https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid|shopify.dev, checkout.liquid]]; [[https://shopify.dev/changelog/shopify-scripts-will-be-deprecated-on-june-30-2026|Shopify Scripts deprecation]]; [[https://support.google.com/merchants/answer/6324371|Google Merchant Center, price attribute]]; [[https://web.dev/articles/vitals|web.dev, Core Web Vitals]]; [[https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/|W3C, what's new in WCAG 2.2]]; [[https://humanrights.gov.au/our-work/disability-rights/publications/guidelines-equal-access-digital-goods-and-services|AHRC, digital access guidelines]].",
          "Survey figures come from the named organisations. None is ZSpace client data. Rules change: confirm tax, payments and consumer law obligations with the ATO, ACCC, your payment provider or an adviser.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A good Australian Shopify store is mostly good Shopify work, done with a few local decisions made deliberately: GST-inclusive prices that match everywhere, card payments without surcharges, delivery choices with honest dates, returns that respect the consumer guarantees, and a catalogue written in Australian English. Choose the simplest storefront that meets the brief, keep checkout changes inside Shopify's extension model, and launch with a checklist rather than a hope.",
        ],
        cta: {
          title: "Planning an Australian Shopify build or rebuild?",
          description:
            "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses. We help with [[/services/shopify-development|Shopify development]], [[/services/ui-ux-design|UI/UX design]] and [[/services/cro-audit|CRO audits]]. IST is 4.5 hours behind AEST (5.5 during AEDT), so our working day overlaps with Australian afternoons. Our [[/blogs/digital-product-development-australia|digital product development guide]] explains how we scope work.",
        },
      },
    ],
  },
  {
    slug: "ecommerce-conversion-optimization-australia",
    title: "Australian Ecommerce Conversion Optimisation: Checkout, Delivery and Trust",
    seoTitle: "Ecommerce Conversion Optimisation in Australia",
    excerpt:
      "Australian ecommerce CRO: local research, delivery and pricing fixes, surcharging and drip pricing, reviews, returns, a 0–2 audit and testing rules.",
    category: "CRO",
    banner: "trustmap",
    sceneKind: "checkout",
    bannerAlt:
      "An Australian checkout audit grouped into five zones: delivery, pricing and payments, trust and reviews, returns and mobile, each scored from zero to two",
    date: "2026-10-09",
    readingTime: "18 min read",
    relatedServiceSlugs: ["cro-audit", "shopify-development", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "retail", "fashion-apparel", "consumer-electronics"],
    relatedSlugs: ["shopify-checkout-optimization", "why-customers-abandon-checkout", "shopify-trust-optimization"],
    faqs: [
      {
        q: "What is a good ecommerce conversion rate in Australia?",
        a: "There is no reliable public benchmark for Australian ecommerce conversion rates that suits every store, and we do not quote one. Rates vary by category, traffic source, device, price point and how 'conversion' is defined. Compare your store with its own history, segmented by device and channel, and judge changes by controlled tests or clear before-and-after evidence rather than by an industry average.",
      },
      {
        q: "Why do Australian shoppers abandon their carts?",
        a: "Shopify research cited in the Australia Post eCommerce Report 2026 found 52% of Australians had abandoned a cart because checkout was too long or complicated, rising to 67% for higher spenders. Australia Post also found 70% are less likely to buy when delivery communication at checkout is poor. Baymard's US survey adds extra costs, slow delivery and forced account creation as common reasons.",
      },
      {
        q: "Can I still add a card surcharge at checkout?",
        a: "The Reserve Bank of Australia decided in March 2026 to remove surcharging on eftpos, Visa and Mastercard debit, prepaid and credit cards, with most changes effective from 1 October 2026. American Express and buy now pay later were not covered and are under further review. Remove surcharges for those card networks, build costs into prices, and check details with your payment provider or adviser.",
      },
      {
        q: "What is drip pricing and when do the new rules start?",
        a: "Drip pricing is when extra charges appear progressively through the buying process instead of being shown upfront. Parliament has passed the Unfair Trading Practices legislation, which adds a specific drip pricing provision to the Australian Consumer Law. Law firm summaries say the new regime commences on 1 July 2027. Existing misleading conduct rules already apply, so show unavoidable charges early now.",
      },
      {
        q: "Can I offer a discount in exchange for a review?",
        a: "Be careful. ACCC guidance asks businesses to be transparent about commercial relationships and incentives behind reviews, not to publish misleading reviews, and notes that removing or editing negative reviews can be as misleading as posting fake ones. If you offer an incentive, it should not depend on the review being positive and should be disclosed. Check the ACCC's current guidance or get advice.",
      },
      {
        q: "Do I need consent to send abandoned cart emails in Australia?",
        a: "Commercial emails and SMS fall under the Spam Act 2003. In general they need consent, must identify the sender and must include a working unsubscribe option, with requests honoured within five working days. Whether an abandoned cart email counts as commercial and what consent you hold depends on your set-up, so check ACMA guidance and get advice.",
      },
      {
        q: "How long should an ecommerce A/B test run?",
        a: "Decide the sample size before the test starts, based on your baseline conversion rate and the smallest change worth detecting, and run until you reach it. Evan Miller shows that stopping when the result first looks significant inflates false positives. Run for whole weeks to cover weekday and weekend behaviour, and avoid starting or ending tests across major sale events like Black Friday.",
      },
      {
        q: "Which checkout changes usually come first?",
        a: "Start with the zeros on an audit of your own store: missing delivery dates, costs that appear late, surcharges that should no longer exist, hidden guest checkout, unclear returns and mobile form problems. These are low-risk fixes that align with what Australian and US shoppers tell researchers. Save A/B testing for changes where the right answer is genuinely uncertain.",
      },
    ],
    content: [
      {
        heading: "Australian ecommerce conversion optimisation: the short answer",
        body: [
          "**Ecommerce conversion optimisation in Australia** means removing the reasons local shoppers hesitate: unclear delivery dates and costs, prices that change at checkout, payment surcharges the RBA has now removed for most cards, unconvincing reviews, vague returns and awkward mobile forms. Diagnose with your own data, fix the obvious gaps, then test changes where the answer is uncertain, with sample sizes set in advance.",
          "This guide is about Australian shoppers and Australian rules. It does not repeat the generic depth: [[/blogs/shopify-cro-guide|the Shopify CRO guide]] covers the full process, [[/blogs/ecommerce-checkout-ux|ecommerce checkout UX]] covers form and flow design, and [[/blogs/why-customers-abandon-checkout|why customers abandon checkout]] covers abandonment research in general. Here we focus on what Australian research says, what Australian regulation changes, and how to audit an Australian checkout.",
          "Throughout, we label evidence. **Research.** marks findings from a named study, with its geography. **Our recommendation.** marks our professional judgement. Examples are hypothetical. Nothing here is legal advice; for that, go to the ACCC, ACMA, your state consumer agency or a lawyer.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Shopify research cited by Australia Post found 52% of Australians abandoned a cart because checkout was too long or complicated, rising to 67% for higher spenders.",
          "Delivery communication is a conversion issue: 70% told Australia Post that poor delivery communication at checkout makes them less likely to buy.",
          "Remove card surcharges for eftpos, Visa and Mastercard; the RBA's decision takes effect from 1 October 2026. Amex and BNPL were not covered.",
          "Show unavoidable charges upfront now. A specific drip pricing provision in the Australian Consumer Law commences on 1 July 2027.",
          "Reviews must be genuine and complete: the ACCC treats hiding negative reviews as potentially misleading.",
          "Returns copy must not suggest customers lose their consumer guarantees.",
          "Audit five zones: delivery, pricing and payments, trust and reviews, returns, and mobile.",
          "Fix clear defects directly; A/B test only uncertain changes, with the sample size fixed in advance.",
        ],
      },
      {
        heading: "What Australian shoppers tell researchers",
        body: [
          "**Research.** The Australia Post eCommerce Report 2026 (covering 2025) found that Australians spent $82.6 billion online, that online made up 24% of retail spend on its measure, and that 82% of households shopped online. The average basket was $96. Some 73% of shoppers wait for sales events before buying and 81% shop around for the best deal, while the average household bought from 16 different retailers or brands ([[https://auspost.com.au/ecomreport|Australia Post]]). The ABS, using different data, measured online at 12.7% of retail in June 2025 ([[https://www.abs.gov.au/about/cessation-retail-business-survey-and-retail-trade-publication|ABS]]); the two figures are not comparable.",
          "**Research.** On checkout, the Australia Post report cites Shopify research: '52% of Australians abandoned their cart because the checkout process was too long or complicated, rising to 67% for higher spenders.' The same section repeats Shopify's claim that Shop Pay 'can increase conversions by up to 50% compared to guest checkout'. That is a vendor claim with no stated geography, so treat it as Shopify's marketing figure, not an Australian benchmark.",
          "**Research (US).** Baymard Institute's survey of US online shoppers lists the top reasons for abandoning during checkout as extra costs that were too high (40%), delivery that was too slow (20%), not trusting the site with card details (19%) and being made to create an account (18%) ([[https://baymard.com/lists/cart-abandonment-rate|Baymard]]). These are US figures. They are useful as a checklist of failure modes, not as Australian percentages.",
          "**Our recommendation.** Use research to choose where to look, and your own analytics to decide what to fix. A deal-driven, multi-retailer shopper compares your total price, delivery date and returns against a marketplace listing in another tab. Every zone in the audit below is designed around that comparison.",
        ],
      },
      {
        heading: "The five-zone model for Australian checkouts",
        body: [
          "We group Australian conversion problems into five zones. The zones are our framework; they follow the order in which a cautious shopper checks a store they have not bought from before. Each zone has research behind it and a short list of fixes, and the audit later in this article scores the same five zones.",
        ],
        code: {
          label: "Five zones a shopper checks before paying (our framework)",
          text: "1. Delivery        When will it arrive, how, and what will it cost?\n2. Pricing         Is this the real total? How can I pay?\n3. Trust/reviews   Is this store real? Are these reviews genuine?\n4. Returns         What if it is wrong, faulty or I change my mind?\n5. Mobile          Can I finish this on my phone without fighting it?\n\nA 'no' in any zone can end the order. Fix the earliest\nzone where your evidence shows people drop out.",
        },
      },
      {
        heading: "Zone 1: delivery choice and transparency",
        body: [
          "**Research.** In the Australia Post report, 73% of shoppers said a good delivery experience makes them more likely to shop online, 69% prefer a wide range of delivery options at checkout, 70% are less likely to complete a purchase when delivery communication at checkout is poor, and 32% would switch retailers to get out-of-home collection points such as Parcel Lockers. Preferences differ by generation: 70% of Gen X, 87% of Boomers and 90% of the Builders generation chose certainty of delivery over speed, while Gen Z split almost evenly.",
          "**Research (one retailer).** THE ICONIC's Blake Egglestone is quoted in the report: 'we observe a 3-10% decrease in conversion for every additional day added to the delivery time shown at checkout.' This is one Australian retailer's observation, not a benchmark for your store.",
          "**Our recommendation.** Show an estimated delivery date range, not just a service name, on the product page, the cart and the shipping step. Base it on real carrier performance and your warehouse cut-off time, and show the cut-off. Offer at least standard and express, plus a collection option where your carrier supports it. Show the free-delivery threshold in the cart with progress towards it, and check it against your average basket. Test with regional postcodes, because a delivery promise that is accurate in a capital city may not be accurate elsewhere. Our [[/blogs/ecommerce-shipping-ux|ecommerce shipping UX]] guide covers the generic patterns.",
        ],
      },
      {
        heading: "Zone 2: pricing and payments",
        body: [
          "**Regulation: card surcharges.** On 31 March 2026, the Reserve Bank announced it would remove surcharging on eftpos, Mastercard and Visa debit, prepaid and credit cards, with most changes taking effect from 1 October 2026 ([[https://rba.gov.au/media-releases/2026/mr-26-10.html|RBA]]). The RBA says BNPL, mobile wallets, three-party networks such as American Express and ecommerce platforms were not covered and go to further review. For conversion, this is good news: a surcharge line that appears at the payment step is exactly the kind of late cost shoppers dislike.",
          "**Regulation: drip pricing.** The Competition and Consumer Amendment (Unfair Trading Practices) Bill 2026 has passed both Houses of Parliament ([[https://hwlebsworth.com.au/parliament-passes-unfair-trading-practices-reforms-preparing-for-the-new-regime|HWL Ebsworth]]). It adds a drip pricing provision to the Australian Consumer Law: where a transaction-based charge applies, the base price must be shown with the charge (or how it is calculated) in a way that is 'legible, prominent and unambiguous'. Allens reports that the new regime commences on 1 July 2027, with maximum corporate penalties of the greater of $100 million, three times the benefit or 30% of turnover ([[https://www.allens.com.au/insights-news/insights/2026/07/australias-new-unfair-trading-practices-regime-what-businesses-need-to-know/|Allens]]). The legislation is enacted but its obligations have not yet commenced; existing misleading conduct law already applies to pricing in the meantime.",
          "**Payment options.** ASIC requires buy now pay later providers to hold an Australian credit licence from 10 June 2025 ([[https://asic.gov.au/regulatory-resources/credit/buy-now-pay-later-credit-contracts-credit-licensing/|ASIC]]). Affirm and Shopify announced Shop Pay Installments for Australia on 27 August 2026 ([[https://www.businesswire.com/news/home/20260827132257/en/|BusinessWire]]). The Australia Post report has no BNPL usage figure, so we do not give one.",
          "**Our recommendation.** Remove surcharges for the covered cards and update checkout copy and FAQs. Show every unavoidable fee, including delivery and any handling charge, before the payment step, ideally on the product page or cart. Put express wallets at the top of checkout on supported devices. Offer BNPL where basket sizes suit it, show instalment amounts accurately, and do not make BNPL the most prominent option for every product. Our guide to [[/blogs/shopify-development-australia|Shopify development in Australia]] covers the payment configuration side.",
        ],
      },
      {
        heading: "Zone 3: trust and customer reviews",
        body: [
          "**Research.** Nielsen Norman Group identifies four trust factors on the web: design quality, upfront disclosure of information such as prices and shipping, comprehensive and current content, and connection to the rest of the web, with reviews and external sources trusted more than a company's own claims ([[https://www.nngroup.com/articles/trustworthy-design/|NN/g]]). Baymard's US survey found 19% abandoned because they did not trust the site with card details.",
          "**Regulation: reviews.** The ACCC's guidance for business on online reviews sets out three principles: be transparent about commercial relationships, don't post or publish misleading reviews, and recognise that omitting or editing negative reviews can be as misleading as posting fake ones. The ACCC says it 'can investigate if a business misleads people in relation to online reviews' ([[https://www.accc.gov.au/business/advertising-and-promotions/online-product-and-service-reviews|ACCC]]). False or misleading testimonials are prohibited under the Australian Consumer Law, and courts have ordered penalties against businesses that published fake testimonials.",
          "**Our recommendation.** Use a review platform that collects reviews from verified buyers, publish negative reviews as well as positive ones, and reply to complaints publicly and calmly. If you offer an incentive for reviews, disclose it and do not make it conditional on a positive rating. Keep the store secure and say so plainly where shoppers pay; our guide to [[/blogs/website-security-australia|website security for Australian businesses]] covers the basics. Show business details that let a shopper check you are real: a trading name, ABN on the policy pages, a physical returns address and working contact options. Our [[/blogs/shopify-trust-optimization|Shopify trust optimisation]] and [[/blogs/ecommerce-product-reviews-ux|product reviews UX]] guides cover the design side.",
        ],
      },
      {
        heading: "Zone 4: returns",
        body: [
          "**Regulation.** Products sold in Australia come with consumer guarantees. For a major failure, 'the consumer can choose a refund or replacement'; for a minor problem, the business can choose to repair, replace or refund; and it is 'illegal for businesses to try to cancel these rights in store policies or terms and conditions', for example with 'no refunds' policies ([[https://consumerprotection.wa.gov.au/returns-refunds-repairs-and-replacements|Consumer Protection WA]]). Change-of-mind returns are a business choice, but any policy you advertise must be honoured.",
          "**Research.** In the Australia Post report, 57% of Baby Boomers said free returns strongly influence where they shop. In Baymard's US survey, 13% of shoppers abandoned because the returns policy was not satisfactory.",
          "**Our recommendation.** Put a two-line returns summary near the add-to-cart button and again in the cart, linking to the full policy. Separate faulty items from change of mind in plain language. Say who pays return postage for change of mind and how long refunds take. Offer a self-service returns start, a label or drop-off option, and status updates. Have the policy reviewed by a lawyer. See [[/blogs/ecommerce-returns-ux|ecommerce returns UX]] for flow design.",
        ],
      },
      {
        heading: "Zone 5: mobile checkout",
        body: [
          "**Research (US).** Baymard reports that an ideal checkout can be as short as 12 to 14 form elements, while the average US checkout shows 23.48 form elements by default. In US testing, 24% of shoppers had abandoned a cart in the previous quarter solely because they were forced to create an account ([[https://baymard.com/research-articles/make-guest-checkout-prominent|Baymard]]). Nielsen Norman Group recommends labels close to fields, a single-column layout and clearly marked optional fields ([[https://www.nngroup.com/articles/web-form-design/|NN/g]]).",
          "**Standards.** WCAG 2.2 adds criteria that apply directly to checkout: 2.5.8 Target Size (Minimum) requires pointer targets of at least 24 by 24 CSS pixels, with exceptions; 3.3.7 Redundant Entry means information already entered should be auto-populated or available to select, such as billing same as delivery; and 3.3.8 Accessible Authentication (Minimum) means shoppers should not have to solve a cognitive test, so paste must work in password and code fields ([[https://www.w3.org/TR/WCAG22/|W3C]]). The ABS found 21.4% of Australians have disability, so accessibility is a conversion issue as well as a legal one; see [[/blogs/website-accessibility-australia|website accessibility in Australia]].",
          "**Our recommendation.** Make guest checkout the most prominent option and offer account creation after payment. Use address autocomplete with manual fields always visible. Set the right keyboard for each field, validate inline after the shopper leaves a field, and never clear the form on error. Check Core Web Vitals on mobile for product, cart and checkout pages. Our [[/blogs/mobile-ecommerce-checkout|mobile ecommerce checkout]] guide covers the patterns in depth.",
        ],
      },
      {
        heading: "Product information that answers questions before checkout",
        body: [
          "Many checkout problems start on the product page. A shopper who is unsure about size, compatibility or delivery adds to cart as a bookmark, then leaves at checkout when the doubt returns.",
          "**Our recommendation.** For each top product, list the five questions customer service hears most often and answer them on the page: dimensions in metric units, materials and care, what is in the box, compatibility, delivery date and returns. Use Australian terms and spelling. Put the delivery estimate and returns summary near the price. Make sure the GST-inclusive price on the page matches your Product structured data and Merchant Center feed; see [[/blogs/product-structured-data-ecommerce|product structured data]] and the Australian section of our [[/blogs/shopify-seo-guide|Shopify SEO guide]]. For categories where fit or size drives returns, add size guides with measurements and model details. Our [[/blogs/shopify-product-page-optimization|Shopify product page optimisation]] guide covers layout and content in depth.",
        ],
      },
      {
        heading: "Cart recovery with consent",
        body: [
          "**Regulation.** The Spam Act 2003, administered by ACMA, applies to commercial electronic messages such as email and SMS. In general, these must be sent with consent (express or inferred), identify the sender with contact details, and include a functional unsubscribe facility, with unsubscribe requests honoured within five working days. There is no small business exemption. Check [[https://www.acma.gov.au/avoid-sending-spam|ACMA's guidance]] for current wording and get advice on how it applies to your recovery flows.",
          "**Our recommendation.** Collect consent with an unticked checkbox and clear wording about what you will send. Keep recovery messages useful: restore the exact cart, restate delivery dates and returns, and answer the likely objection. Avoid automatic discounts in the first message, which teach shoppers to abandon on purpose, and remember that 73% of shoppers told Australia Post they wait for sales events. Measure recovery against a holdout group so you know how many orders the messages actually created.",
        ],
      },
      {
        heading: "Repeat purchase: earning the second order",
        body: [
          "**Research.** The average Australian household bought from 16 different retailers or brands in 2025, a number Australia Post says has more than doubled over the last decade, and 41% of households shopped online at least fortnightly. Shoppers are active but not loyal by default.",
          "**Our recommendation.** Make the first delivery and returns experience the start of the retention plan: accurate tracking, a post-delivery check-in, and easy reorders for consumables. Build loyalty around something customers value, such as early access to sales or free returns, rather than points nobody redeems. Our guides to [[/blogs/ecommerce-repeat-purchases|ecommerce repeat purchases]] and [[/blogs/ai-ecommerce-australia|AI in Australian ecommerce]] cover personalisation and retention.",
        ],
      },
      {
        heading: "The Australian checkout and trust audit",
        body: [
          "**How to use it.** Score each item 0 (missing or broken), 1 (present but weak) or 2 (done well), for a maximum of 30. Score on a real phone with a test order, not from the admin. Total each zone separately, because the zone totals matter more than the overall score. This is our framework, not an industry standard.",
        ],
        table: {
          headers: ["Zone", "Check", "What a 2 looks like"],
          rows: [
            ["Delivery", "Delivery date shown early", "Date range on product page, cart and shipping step, based on real carrier data"],
            ["Delivery", "Choice of options", "Standard, express and a collection or Parcel Locker option where available"],
            ["Delivery", "Regional accuracy", "Rates and dates tested with regional and remote postcodes"],
            ["Pricing and payments", "No late costs", "Total including delivery and any fee shown before the payment step"],
            ["Pricing and payments", "Surcharges removed", "No surcharge for eftpos, Visa or Mastercard; copy and terms updated"],
            ["Pricing and payments", "Payment choice", "Wallets at the top; BNPL where relevant, with accurate instalment amounts"],
            ["Trust and reviews", "Genuine reviews", "Verified-buyer reviews, negatives published, incentives disclosed"],
            ["Trust and reviews", "Business identity", "Trading name, ABN, returns address and contact options easy to find"],
            ["Trust and reviews", "Help at checkout", "Visible contact or help link with stated hours"],
            ["Returns", "Summary near the buy button", "Two-line returns summary on product page and cart"],
            ["Returns", "Consumer guarantees respected", "Faulty items and change of mind separated; no 'no refunds' wording"],
            ["Returns", "Self-service returns", "Return started online with label or drop-off and status updates"],
            ["Mobile", "Guest checkout prominent", "Guest option first; account offered after payment"],
            ["Mobile", "Form quality", "Address autocomplete, correct keyboards, inline errors, nothing cleared"],
            ["Mobile", "Accessibility and speed", "Targets at least 24 by 24 CSS pixels, paste allowed, good Core Web Vitals"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "Interpretation (our guidance): a zone scoring 0–2 out of 6 is a priority whatever the total. Overall, 26–30 means test refinements; 18–25 means fix every 0 first, starting with the zone where analytics shows the biggest drop; 10–17 means fix delivery and pricing before anything else; under 10 means rework the checkout flow before testing details.",
        },
      },
      {
        heading: "Fix, test or watch: deciding what to do with each finding",
        body: [
          "Not every audit finding needs an A/B test. We sort findings into three groups. **Fix** covers defects and compliance issues, such as a surcharge that should not exist, a 'no refunds' line or a broken form on Android: change them directly. **Test** covers changes where the right answer is uncertain, such as the free-delivery threshold, the order of payment methods or the position of the returns summary. **Watch** covers changes you cannot test with your traffic: ship them carefully and monitor before-and-after metrics by device and channel.",
          "Use your analytics to rank the fixes. A finding in the zone where most shoppers drop out comes first, even if another fix seems more interesting. Our [[/blogs/shopify-checkout-optimization|Shopify checkout optimisation]] guide covers prioritisation for Shopify stores in particular.",
        ],
      },
      {
        heading: "Testing guidance: A/B tests that you can trust",
        body: [
          "**Research.** Evan Miller explains that if you run a test 'until we see a significant difference', then 'all the reported significance levels become meaningless', because 'repeated significance testing always increases the rate of false positives'. His fix: 'Decide on a sample size in advance and wait until the experiment is over' ([[https://www.evanmiller.org/how-not-to-run-an-ab-test.html|Evan Miller]]).",
          "**Our recommendation.** Write the hypothesis, primary metric, guardrail metrics (such as average order value and refunds) and sample size before starting. Run for whole weeks. Avoid starting or ending tests across major sales such as Black Friday and Cyber Monday, when Australia Post found 96% of Gen Z hold out for events and shopper behaviour changes. If traffic is too low for a meaningful test, use the watch approach above instead. Our guides to [[/blogs/ecommerce-ab-testing-checkout|A/B testing checkouts]] and [[/blogs/shopify-ab-testing|Shopify A/B testing]] cover the mechanics.",
        ],
        checklist: [
          "Hypothesis written: change, expected effect and reason",
          "Primary metric and guardrails chosen before launch",
          "Sample size calculated from baseline and minimum detectable effect",
          "Run length in whole weeks, avoiding major sale periods",
          "No peeking-based stopping; results read once the sample is reached",
          "Results segmented by device only after the main result is read",
        ],
      },
      {
        heading: "Common conversion mistakes on Australian stores",
        body: [],
        checklist: [
          "Quoting a generic 'average conversion rate' as a target instead of using your own baseline.",
          "Keeping card surcharges for eftpos, Visa or Mastercard after 1 October 2026.",
          "Revealing delivery or handling fees only at the payment step.",
          "Promising next-day delivery that regional customers do not receive.",
          "Hiding or editing negative reviews, or rewarding only positive ones.",
          "Returns copy that suggests sale items cannot be refunded under any circumstances.",
          "Sending recovery emails without clear consent or a working unsubscribe link.",
          "Discounting every abandoned cart, which trains shoppers to wait.",
          "Stopping A/B tests the moment the dashboard turns green.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Australian research: [[https://auspost.com.au/ecomreport|Australia Post eCommerce Report 2026]] (calendar year 2025; includes Shopify research and a quote from THE ICONIC); [[https://www.abs.gov.au/about/cessation-retail-business-survey-and-retail-trade-publication|ABS, Retail Trade cessation]]; [[https://abs.gov.au/media-centre/media-releases/55-million-australians-have-disability|ABS, disability survey]].",
          "Regulation and guidance: [[https://rba.gov.au/media-releases/2026/mr-26-10.html|RBA media release 2026-10]]; [[https://www.allens.com.au/insights-news/insights/2026/07/australias-new-unfair-trading-practices-regime-what-businesses-need-to-know/|Allens, unfair trading practices regime]]; [[https://hwlebsworth.com.au/parliament-passes-unfair-trading-practices-reforms-preparing-for-the-new-regime|HWL Ebsworth, reforms passed]]; [[https://asic.gov.au/regulatory-resources/credit/buy-now-pay-later-credit-contracts-credit-licensing/|ASIC, BNPL licensing]]; [[https://www.accc.gov.au/business/advertising-and-promotions/online-product-and-service-reviews|ACCC, online reviews]]; [[https://consumerprotection.wa.gov.au/returns-refunds-repairs-and-replacements|Consumer Protection WA, consumer guarantees]]; [[https://www.acma.gov.au/avoid-sending-spam|ACMA, avoid sending spam]].",
          "Platforms: [[https://www.businesswire.com/news/home/20260827132257/en/|Affirm and Shopify, Shop Pay Installments in Australia]].",
          "UX research and standards (global or US): [[https://baymard.com/lists/cart-abandonment-rate|Baymard, cart abandonment]]; [[https://baymard.com/research-articles/make-guest-checkout-prominent|Baymard, guest checkout]]; [[https://www.nngroup.com/articles/trustworthy-design/|NN/g, trustworthy design]]; [[https://www.nngroup.com/articles/web-form-design/|NN/g, web form design]]; [[https://www.w3.org/TR/WCAG22/|W3C, WCAG 2.2]]; [[https://www.evanmiller.org/how-not-to-run-an-ab-test.html|Evan Miller, how not to run an A/B test]].",
          "Baymard figures are US survey data. Survey figures come from the named organisations, some of them vendors. None is ZSpace client data. Rules change: confirm obligations with the RBA, ACCC, ACMA, your payment provider or an adviser.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Australian shoppers compare stores on the same few questions: when it will arrive, what it really costs, whether the store and its reviews are genuine, what happens if it goes wrong, and whether the checkout works on a phone. The 2026 surcharging change and the 2027 drip pricing rules push in the same direction as good CRO: show the real price early and keep it. Audit the five zones, fix the zeros, test what is uncertain, and judge results against your own baseline.",
        ],
        cta: {
          title: "Want your checkout scored against this audit?",
          description:
            "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses. Our [[/services/cro-audit|CRO audits]] review checkout, delivery, pricing and trust, and we implement fixes through [[/services/shopify-development|Shopify development]] and [[/services/ui-ux-design|UI/UX design]]. See also our [[/blogs/digital-product-development-australia|guide to digital product development in Australia]], [[/blogs/api-integration-australia|API integration]] for connected systems and [[/blogs/website-development-cost-australia|website development cost in Australia]] for budgeting rebuilds.",
        },
      },
    ],
  },
];
