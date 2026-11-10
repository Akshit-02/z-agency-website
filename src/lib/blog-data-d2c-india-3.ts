import type { BlogPost } from "./blog-data";

/**
 * SEO content expansion 301–320, first implementation pass (2026-11-10).
 * Research and decisions: seo-content-expansion-301-320/. This file holds
 * the one CREATE in this pass: Shopify migration cost in India (topic 303).
 * Topics 301, 302, 307 and 310 are in-place updates of
 * ecommerce-platform-migration (blog-data-commerce-42.ts),
 * migrating-to-shopify-guide (blog-data-commerce-rewrites.ts),
 * ecommerce-security and ecommerce-privacy-customer-data
 * (blog-data-commerce-61.ts).
 *
 * No external links in article bodies (owner rule). The INR ranges are
 * indicative planning ranges consistent with the tiers in
 * ecommerce-website-development-cost-india; they are not ZSpace rate cards
 * and are flagged for owner review. No figure here is client data.
 *
 * Sources checked 2026-11-10:
 * - Shopify App Store, Store Migration (by Shopify): free; sources include
 *   WooCommerce, Wix, Square, Etsy, Amazon, eBay, Clover and Lightspeed;
 *   imports products and customers, not orders.
 * - Shopify Help Center: "Orders can't be imported to Shopify by using a CSV
 *   file" (use migration apps or the Order/Transaction APIs); customer
 *   passwords can't be migrated; URL redirects up to 100,000 (Plus up to
 *   20,000,000), CSV import supported, redirects only fire when the old URL
 *   no longer resolves; gift cards via apps or the GiftCard API; saved card
 *   migration only for Plus/Enterprise via Professional Services.
 * - Shopify App Store listing for Matrixify (INR prices shown on the check
 *   date, quoted as a listing, not an endorsement).
 * - RBI circular, 28 July 2022: card-on-file data held by merchants purged by
 *   1 October 2022 (tokenisation), so saved cards stay with the gateway.
 */
export const d2cIndiaPosts3: BlogPost[] = [
  {
    slug: "shopify-migration-cost-india",
    title: "How Much Does Shopify Migration Cost in India? A Practical Breakdown for Businesses",
    seoTitle: "Shopify Migration Cost in India: A Practical Breakdown",
    excerpt:
      "What a Shopify migration costs in India: indicative ranges by scope, what drives the price, tool and app costs, hidden costs and how to compare quotes.",
    category: "Shopify & Ecommerce",
    banner: "costdrivers",
    sceneKind: "cost",
    bannerAlt:
      "Cost drivers of a Shopify migration: catalogue size and data quality, order history, URL redirects and SEO, design and theme work, integrations and apps, and testing and launch support",
    date: "2026-11-10",
    readingTime: "12 min read",
    relatedServiceSlugs: ["shopify-development", "website-development"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "retail"],
    relatedSlugs: ["migrating-to-shopify-guide", "ecommerce-website-development-cost-india", "woocommerce-to-shopify-migration-checklist"],
    faqs: [
      {
        q: "How much does it cost to migrate a store to Shopify in India?",
        a: "As an indicative planning range, a small store moving products and customers onto a configured theme often costs ₹50,000 to ₹1.5 lakh in services, a mid-sized store with order history, design work and several integrations ₹1.5 to ₹5 lakh, and complex migrations with large catalogues, B2B, subscriptions or ERP integration ₹5 lakh to ₹15 lakh or more. Add Shopify's plan, app subscriptions and any paid migration tool. Quotes vary with scope, so compare them line by line.",
      },
      {
        q: "Is Shopify's own migration app free?",
        a: "Yes. Shopify's Store Migration app is free and supports several source platforms, including WooCommerce, Wix, Square, Etsy, Amazon and eBay. It imports products and customers, not orders, so stores that need order history use a paid migration app or a custom import through Shopify's API.",
      },
      {
        q: "Can we migrate order history with a CSV file?",
        a: "No. Shopify's Help Center says orders can't be imported using a CSV file. Historical orders are moved with migration apps or through the Order and Transaction APIs, which is one reason order history adds to the cost.",
      },
      {
        q: "Will customers have to re-enter their saved cards?",
        a: "Usually, yes. In India, card details are tokenised with the payment gateway rather than stored by the merchant, and moving to a new gateway setup generally means customers save cards again. Shopify only offers saved-card migration on Plus or Enterprise through its Professional Services, and some methods cannot be migrated at all.",
      },
      {
        q: "How long does a Shopify migration take?",
        a: "A small store with clean data can move in a few weeks. A mid-sized store with design work and integrations commonly takes two to three months, and complex migrations longer. Data clean-up, redirect mapping and integration testing take more time than the import itself.",
      },
    ],
    content: [
      {
        heading: "The short answer",
        body: [
          "**For most Indian businesses, a Shopify migration costs somewhere between ₹50,000 and ₹15 lakh or more in services, depending on what moves and what gets rebuilt. A small store moving products and customers onto a configured theme sits at the low end; a mid-sized D2C brand with order history, a redesigned theme and several integrations typically falls in the ₹1.5–5 lakh range; and large catalogues, B2B, subscriptions or ERP integration push it higher.** Then add running costs: Shopify's plan, apps, any paid migration tool and Shopify's transaction fee on third-party gateways.",
          "These are indicative planning ranges based on the scope described in each tier, not a quote and not ZSpace's rate card. The aim of this guide is to help you see what drives the number, so you can scope your own migration and compare quotes that are otherwise hard to compare. For the steps themselves, see the [[/blogs/migrating-to-shopify-guide|Shopify migration checklist]].",
        ],
      },
      {
        heading: "Why migration quotes vary so much",
        body: [
          "Two quotes for \"moving our store to Shopify\" can differ by ten times because they describe different jobs. One may mean importing products into a free theme. Another may include order history, every old URL mapped and redirected, a new design, logistics and WhatsApp integrations, content migration, testing on real devices and a month of post-launch support. Neither is wrong; they are not the same project.",
          "The fix is to agree the scope before comparing prices. The sections below break a migration into the parts that carry cost.",
        ],
      },
      {
        heading: "Indicative cost by scope",
        body: [
          "Ranges are for services from an Indian agency or experienced freelancer, exclude GST, and assume your team supplies content and approvals on time.",
        ],
        table: {
          headers: ["Scope", "Typically includes", "Indicative services cost"],
          rows: [
            ["**Small store**", "Up to a few hundred products, customers, a configured theme, payment gateway and COD setup, shipping app, redirects for main URLs, basic QA", "₹50,000–₹1.5 lakh"],
            ["**Mid-sized D2C store**", "Up to a few thousand SKUs with variants and metafields, order history, a customised or redesigned theme, full redirect map, reviews and content migration, 3–6 integrations (logistics, WhatsApp, reviews, analytics), device and order testing", "₹1.5–5 lakh"],
            ["**Complex migration**", "Large or messy catalogues, B2B pricing, subscriptions, gift card balances, ERP or OMS integration, multiple storefronts, custom apps, staged cutover and rollback plan", "₹5–15 lakh+"],
          ],
        },
        callout: {
          type: "note",
          text: "If you are redesigning at the same time, the design work often costs more than the migration itself. Many teams migrate onto a close match of the current design first and redesign once the new platform is stable.",
        },
      },
      {
        heading: "What drives the price",
        body: [],
        table: {
          headers: ["Driver", "Why it costs", "How to keep it down"],
          rows: [
            ["**Catalogue size and data quality**", "Variants beyond three options, attributes in free text and duplicate products need cleaning and remodelling", "Clean product data before the project starts"],
            ["**Order history**", "Orders can't be imported by CSV; they need a migration app or API work, plus checks that they link to the right customers and products", "Decide how many years of orders you actually need in Shopify"],
            ["**URLs and SEO**", "Every page with traffic, links or revenue needs a mapped 301 redirect; Shopify uses fixed paths such as /products/ and /collections/", "Export URLs with traffic from Search Console and analytics early"],
            ["**Design and theme**", "A configured theme is quick; custom sections or a new design take much longer", "Separate migration from redesign where possible"],
            ["**Integrations**", "Payment gateway, logistics aggregator, WhatsApp, reviews, ERP or accounting each need setup and testing", "List every integration up front; replace plugins with apps where they exist"],
            ["**Special data**", "Gift card balances, subscriptions, loyalty points and saved payment methods each have their own migration route and limits", "Plan them in the first week, not the last"],
            ["**Testing and launch**", "Test orders on every payment method, redirects, tracking, emails and mobile layouts; launch-day and post-launch support", "Agree a QA checklist and a support window"],
          ],
        },
      },
      {
        heading: "Tool and running costs",
        body: [
          "Shopify's own Store Migration app is free and covers products and customers from several platforms. Order history and more complex imports usually need a paid migration app or a custom script. Matrixify, for example, listed plans in rupees on the Shopify App Store when we checked in November 2026, starting at ₹1,879 a month; check the current listing and whether you need it for one month or longer.",
          "After launch, budget for the Shopify plan (from ₹1,499 a month for Basic billed yearly, as of November 2026), app subscriptions that replace your old plugins, and Shopify's third-party transaction fee on prepaid orders, because Shopify Payments is not available in India. Our [[/blogs/ecommerce-website-development-cost-india|India ecommerce cost guide]] has the full plan and fee table.",
        ],
        cta: {
          title: "Want a migration quote you can compare line by line?",
          description: "Share your current platform, product count, integrations and launch window, and ZSpace Labs will scope your [[/services/shopify-development|Shopify migration]] by workstream, with tool and running costs listed separately.",
        },
      },
      {
        heading: "Costs specific to Indian stores",
        body: [],
        checklist: [
          "**Payment gateway setup.** Shopify Payments isn't available in India, so you will set up or reconnect a gateway such as Razorpay, PayU or Cashfree, and test UPI, cards, netbanking and wallets.",
          "**Saved cards.** Card details are tokenised with the gateway under RBI's rules, so customers usually need to save cards again after a migration; plan the communication.",
          "**COD and RTO tooling.** COD rules, order confirmation and prepaid incentives often come from apps or custom logic that must be rebuilt, not copied.",
          "**Logistics.** Pincode serviceability, label generation and tracking from your aggregator need reconnecting and testing.",
          "**GST invoices.** Invoice numbering, HSN codes and GSTIN capture for business buyers must continue without gaps across the switch.",
          "**WhatsApp and SMS.** Order notifications and templates need to point at the new store's events before launch day.",
        ],
      },
      {
        heading: "Hidden costs that catch businesses out",
        body: [],
        checklist: [
          "Running both platforms in parallel during testing and cutover.",
          "A temporary dip in organic traffic if redirects or metadata are incomplete; the cost of fixing it later is higher than doing it first.",
          "Staff time for content checks, approvals and training on the new admin.",
          "Apps that seemed free but charge by order volume once you scale.",
          "Rebuilding custom features that were plugins or custom code on the old platform.",
          "Customer support load in the first weeks: sign-in questions, saved cards and order lookups.",
        ],
      },
      {
        heading: "Hypothetical example: a mid-sized D2C migration",
        body: [
          "**This example is hypothetical.** A personal-care brand on WooCommerce has 450 products with variants, 30,000 customers, three years of orders and 1,800 URLs with search traffic. It wants to keep its current look, keep two years of order history, and reconnect Razorpay, a shipping aggregator, WhatsApp notifications and a reviews app.",
          "The scope includes cleaning product data into Shopify's three-option variant model, importing customers with the free Store Migration app, importing two years of orders with a paid migration app, rebuilding the theme to match the current design, a full redirect map, reconnecting four integrations, and two weeks of post-launch monitoring. That places it in the mid-sized tier. Adding a full redesign would roughly double the design effort and the timeline.",
        ],
      },
      {
        heading: "How to compare migration quotes",
        body: [],
        checklist: [
          "Does the quote say which data moves: products, customers, how many years of orders, reviews, blogs, gift cards, subscriptions?",
          "Is there a full redirect map, or only redirects for top pages?",
          "Is the theme configured, customised or newly designed?",
          "Which integrations are included, and who sets up the payment gateway and logistics?",
          "What testing is included, and on which devices and payment methods?",
          "What happens after launch: how long is support, and what does it cover?",
          "Who owns the theme code, apps and admin accounts after handover?",
        ],
      },
      {
        heading: "Planning the budget",
        body: [
          "Start by listing what must move and what must keep working on day one, then get quotes against that list. Keep the migration separate from a redesign unless you have a strong reason to combine them, and budget for running costs as well as the project. For the full step-by-step process, see the [[/blogs/migrating-to-shopify-guide|Shopify migration checklist]]; if you are coming from WooCommerce, the [[/blogs/woocommerce-to-shopify-migration-checklist|WooCommerce to Shopify checklist]] covers the field-level details.",
        ],
        cta: {
          title: "Planning a move to Shopify?",
          description: "ZSpace Labs can help you scope the migration, keep your search traffic and integrations intact, and launch with a clear rollback plan. [[/contact|Talk to our team]] about your current setup.",
        },
      },
    ],
  },
];
