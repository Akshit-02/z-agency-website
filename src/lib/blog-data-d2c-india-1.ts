import type { BlogPost } from "./blog-data";

/**
 * D2C and ecommerce cluster, batch 1 (topics 241–245, 2026-11-10). Audit and
 * research records live in seo-audit/d2c-ecommerce/. This file holds the two
 * topics classified CREATE: D2C website features (244) and ecommerce website
 * development cost in India (243). Topic 241 is an in-place update of
 * d2c-website-development (blog-data-commerce-rewrites-2.ts); topic 242 is an
 * in-place update of shopify-plus-vs-custom-ecommerce
 * (blog-data-au-build-decisions.ts), which also absorbs topic 245.
 *
 * No external links in article bodies (owner rule carried over from earlier
 * batches); sources are recorded here instead. No figure in these articles is
 * ZSpace client data, and all examples are labelled hypothetical.
 *
 * Sources checked 2026-11-10:
 * - Central Consumer Protection Authority, Guidelines for Prevention and
 *   Regulation of Dark Patterns, 2023 (notified 30 November 2023): false
 *   urgency, basket sneaking, drip pricing among the specified patterns.
 * - Legal Metrology (Packaged Commodities) Rules, 2011, rule 6(10) as amended
 *   in 2017: e-commerce entities must display the mandatory package
 *   declarations on the platform. Amendment Rules 2026 (notified 13 February
 *   2026) add rule 6(10A): a searchable and sortable country-of-origin filter
 *   for imported goods.
 * - Digital Personal Data Protection Rules, 2025 (notified November 2025):
 *   notice and consent obligations apply 18 months after publication (around
 *   May 2027); consent manager registration after one year.
 * - RBI e-mandate framework for recurring payments: recurring debits up to
 *   ₹15,000 per transaction can run without additional authentication once the
 *   mandate is registered with AFA; higher limits only for specified
 *   categories.
 * - Shopify pricing pages (shopify.com/in/pricing) and Help Center for plan
 *   names and checkout capabilities; see the research file for the exact
 *   prices recorded on the check date.
 */
export const d2cIndiaPosts1: BlogPost[] = [
  // ------------------------------------------------------- D2C WEBSITE FEATURES
  {
    slug: "d2c-website-features",
    title: "15 Essential Features Every D2C Ecommerce Website Needs to Convert Visitors into Customers",
    seoTitle: "D2C Website Features: 15 Essentials That Drive Conversions",
    excerpt:
      "15 D2C website features that turn first-time visitors into repeat customers, from delivery-date checks and COD controls to returns, reorders and trust pages.",
    category: "Shopify & Ecommerce",
    banner: "dtcframework",
    sceneKind: "pdp",
    bannerAlt:
      "A D2C store broken into feature groups along the buying journey: product education and proof, delivery and price clarity, checkout and payments, post-purchase and retention, and the data and compliance foundation underneath",
    date: "2026-11-10",
    readingTime: "14 min read",
    relatedServiceSlugs: ["shopify-development", "cro-audit", "website-development"],
    relatedIndustrySlugs: ["d2c-consumer", "ecommerce", "beauty-personal-care", "fashion-apparel"],
    relatedSlugs: ["d2c-website-development", "ecommerce-website-development-cost-india", "d2c-product-page-optimization"],
    faqs: [
      {
        q: "Which D2C website features matter most at launch?",
        a: "The ones on the path to the first order: product pages that explain and prove the product, a clear total price, delivery-date information, a fast mobile checkout with the payment methods your customers use, and order tracking. Retention features such as reorders and subscriptions can follow once you know what customers buy again.",
      },
      {
        q: "Should a D2C brand offer cash on delivery?",
        a: "Usually yes in India, at least at the start, because many first-time buyers will not prepay a brand they do not know. Control the cost instead of removing it: confirm COD orders before dispatch, offer a modest prepaid incentive, and limit COD on high-value or high-risk orders based on your own return-to-origin data.",
      },
      {
        q: "Do I need custom development for these features?",
        a: "Not for most of them. On Shopify, many come from the theme, built-in settings and well-chosen apps. Custom work tends to be needed for unusual offers, deeper integrations with logistics or ERP systems, or when several apps are fighting over the same page. Decide feature by feature.",
      },
      {
        q: "Are product quizzes worth building?",
        a: "For ranges where shoppers genuinely struggle to choose, such as skincare, supplements or sizing-heavy apparel, a short quiz can help and gives you consented preference data. For a small, obvious range, better product pages and comparison tables usually do more.",
      },
    ],
    content: [
      {
        heading: "What features does a D2C ecommerce website need?",
        body: [
          "**A D2C website needs features that do four jobs: explain and prove the product to someone who has never heard of the brand, make the full price and delivery date clear before checkout, let the shopper pay quickly in the way they prefer, and make the second order easier than the first.** In practice that means educational product pages, real reviews, a delivery-date check, transparent pricing, a mobile-first checkout with UPI, cards and controlled COD, tracking, easy returns, reorders, consented data capture, fast pages and the legal declarations Indian buyers and regulators expect.",
          "Feature lists for ecommerce sites are usually long and flat: wishlist, mega menu, live chat, newsletter popup. This one is ordered around the reasons D2C visitors leave without buying, and it notes which features you can get from a platform and which usually need development. For the wider build plan, start with the [[/blogs/d2c-website-development|D2C ecommerce website development guide]].",
        ],
      },
      {
        heading: "How this list was chosen",
        body: [
          "A D2C brand pays to acquire most of its first-time visitors, usually through Meta, Google or influencer traffic landing on a product page on a phone. Each feature below either removes a reason that visitor would hesitate, reduces a cost that eats margin after the order (failed COD deliveries, returns, support tickets), or raises the chance of a repeat purchase. Features that mostly look impressive in a pitch deck did not make the list.",
        ],
      },
      {
        heading: "1. Product pages that answer the buying question",
        body: [
          "A marketplace listing tells people what a product is. A D2C product page has to tell them why this one, for whom and how it works, because the shopper has no prior trust in the brand. Lead with the outcome, then show the details that decide the purchase: ingredients and what they do, fabric and fit, dimensions, how to use it, what is in the box.",
          "Write for the person who has one specific doubt. Sizing, skin type, compatibility and \"will this work for me\" questions should be answered on the page, not in a support chat. The [[/blogs/d2c-product-page-optimization|D2C product page optimisation guide]] covers layout and content in detail.",
        ],
      },
      {
        heading: "2. Reviews, customer photos and questions that look real",
        body: [
          "Reviews matter more for a brand nobody has heard of. Show the rating distribution, let shoppers filter by attributes such as skin type or size bought, and include customer photos where the category suits them. Answer questions publicly so the next shopper sees the answer.",
          "Do not hide negative reviews or seed fake ones. Apart from the trust cost when shoppers notice, fake reviews and manufactured urgency fall within India's consumer protection rules. Our guide to [[/blogs/ecommerce-product-reviews-ux|review UX]] covers the display patterns.",
        ],
      },
      {
        heading: "3. A delivery-date and pincode check on the product page",
        body: [
          "\"When will it arrive?\" and \"Do you deliver to my area?\" are two of the most common pre-purchase questions in Indian ecommerce. A pincode field on the product page that returns serviceability, an estimated delivery date and whether COD is available removes both before the shopper reaches checkout.",
          "The estimate should come from your logistics aggregator or courier serviceability data and your own dispatch cut-off, not a fixed \"3–7 days\" line. Shoppers in smaller towns, where delivery times vary more, benefit most from a specific date.",
        ],
      },
      {
        heading: "4. A clear total price before checkout",
        body: [
          "Show MRP, selling price and any discount clearly, and make shipping fees, COD fees and the free-shipping threshold visible before the shopper commits. Surprise charges at the final step are a well-known cause of abandonment, and revealing price components piecemeal is listed as \"drip pricing\" in the CCPA's 2023 guidelines on dark patterns.",
          "If you run automatic offers, show the final price on the product page or in the cart rather than asking the shopper to find a coupon code somewhere else.",
        ],
      },
      {
        heading: "5. A mobile-first checkout with phone-number login",
        body: [
          "Most D2C orders in India start on a phone. The checkout should let a shopper identify with a mobile number and OTP, prefill a saved address where possible, validate pincodes as they type, and keep the number of fields small. Guest checkout should be the default; account creation can happen after the order.",
          "On Shopify you work inside Shopify Checkout and its extensibility options; on custom builds you own the whole flow. See [[/blogs/ecommerce-checkout-ux|ecommerce checkout UX]] and [[/blogs/mobile-ecommerce-checkout|mobile checkout design]] for the detail.",
        ],
      },
      {
        heading: "6. The payment methods your customers actually use",
        body: [
          "For Indian D2C, that usually means UPI first (with intent flows that open the shopper's UPI app on mobile), then cards, netbanking and wallets, with EMI or pay-later options where the order value justifies them. Show the methods in the order your own data says customers choose them.",
          "Watch payment success rates by method, not just conversion overall. A gateway with a weak UPI success rate on one bank can quietly cost more than any design change. The [[/blogs/ecommerce-payment-gateway-integration|payment gateway integration guide]] covers routing and failure handling.",
        ],
      },
      {
        heading: "7. Cash on delivery with controls",
        body: [
          "Removing COD often reduces orders more than it reduces costs. The better approach is to keep COD and manage its risk: confirm COD orders by WhatsApp, SMS or call before dispatch (our [[/blogs/whatsapp-commerce|WhatsApp commerce guide]] covers the confirmation flow), nudge shoppers to prepay with a modest discount or faster dispatch, add a COD fee if your margins need it, and restrict COD for very high order values or pincodes with a poor return-to-origin (RTO) history.",
          "Measure RTO by pincode, product and traffic source. The same campaign can produce good prepaid orders and expensive COD failures, and you only see it if the data is joined up.",
        ],
        callout: {
          type: "tip",
          text: "Treat COD settings as something you tune monthly from your own RTO data, not a one-time checkbox. The right prepaid incentive for a ₹499 order and a ₹4,999 order is rarely the same.",
        },
      },
      {
        heading: "8. Guided discovery for ranges that need it",
        body: [
          "If your range is small, clear navigation and a comparison table may be all you need. If shoppers face a real choice (which serum, which protein, which size), a short quiz or a \"find your fit\" flow helps them decide and gives you consented preference data for later messages.",
          "Keep quizzes short, explain why each question is asked and always end in a specific recommendation with a way to buy. See [[/blogs/d2c-product-discovery|D2C product discovery]] for patterns that work with a focused range.",
        ],
      },
      {
        heading: "9. Bundles and offers that protect margin",
        body: [
          "Kits, bundles and \"buy more, save more\" offers raise order value and help shoppers try more of the range. Build them so the maths is clear on the page, stock is handled correctly for each component, and the discount logic cannot stack into a loss. On Shopify this may be native bundles, an app or a Shopify Function; on custom builds it is part of your pricing engine.",
          "Our guide to [[/blogs/ecommerce-product-bundles|ecommerce product bundles]] covers bundle types and inventory handling.",
        ],
      },
      {
        heading: "10. Order tracking customers do not have to ask about",
        body: [
          "\"Where is my order?\" tickets are expensive and avoidable. Send proactive updates on the channel customers read (WhatsApp, where they have opted in, or SMS and email; see [[/blogs/whatsapp-shopify-integration|connecting WhatsApp to Shopify]]), and give them a branded tracking page that shows a plain-language status rather than courier jargon. That page is also a good place for usage tips and a reorder prompt.",
          "See [[/blogs/ecommerce-order-tracking|ecommerce order tracking]].",
        ],
      },
      {
        heading: "11. Self-serve returns and exchanges",
        body: [
          "A clear policy, linked from the product page, reduces hesitation before purchase. After purchase, let customers start a return or exchange themselves, choose a reason and see what happens next. Offer exchanges first for size and colour issues, because an exchange keeps the revenue.",
          "Track return reasons by product. They often point to a product page that sets the wrong expectation. The [[/blogs/ecommerce-returns-ux|returns UX guide]] goes into the flow.",
        ],
      },
      {
        heading: "12. Reorders, accounts and subscriptions",
        body: [
          "Consumables, personal care and food brands live on repeat purchase. A one-tap reorder from the account, the order email or the tracking page is the simplest retention feature you can build. Subscriptions suit products with a predictable usage cycle, but in India recurring card and UPI debits run on RBI's e-mandate rules: the customer authenticates the mandate once, and debits above ₹15,000 still need extra authentication for most categories.",
          "See [[/blogs/d2c-repeat-purchase-ux|D2C repeat purchase UX]] and [[/blogs/subscription-ecommerce-website|subscription ecommerce website development]].",
        ],
      },
      {
        heading: "13. Consented first-party data and analytics you trust",
        body: [
          "The direct relationship is the reason to be D2C rather than marketplace-only. Capture purchases, preferences and opt-ins with clear consent, keep customer records consistent across the store, messaging tools and support desk, and track the events that matter: product views, add to cart, checkout steps, payment success, COD confirmation and RTO.",
          "India's Digital Personal Data Protection Rules, 2025 bring detailed notice and consent obligations into force in stages, with the main obligations due around May 2027. Building consent and data access properly now is cheaper than retrofitting it. See [[/blogs/ecommerce-analytics|ecommerce analytics]] and [[/blogs/ecommerce-privacy-customer-data|ecommerce privacy and customer data]].",
        ],
        cta: {
          title: "Planning which features to build first?",
          description: "ZSpace Labs helps D2C brands decide what to configure, what to add with apps and what is worth building, then delivers it on [[/services/shopify-development|Shopify]] or [[/services/website-development|a custom stack]].",
        },
      },
      {
        heading: "14. Speed and stability on sale days",
        body: [
          "D2C pages are often heavy with video, apps and tracking scripts, and the traffic arrives in spikes when a campaign or influencer post lands. Keep product and collection pages fast on mid-range Android phones and patchy mobile data, audit app scripts regularly, and load-test anything custom before a big sale.",
          "If you are on Shopify, the [[/blogs/shopify-core-web-vitals-performance-guide|Shopify Core Web Vitals guide]] covers the common culprits; for other stacks, see [[/blogs/website-performance-optimization|website performance optimisation]].",
        ],
      },
      {
        heading: "15. Trust and compliance details that are easy to find",
        body: [
          "Indian shoppers look for signs that a real business stands behind a new brand: a registered business name and address, a working phone number or WhatsApp line, clear shipping, returns and refund policies, and GST invoices. For packaged goods, the Legal Metrology rules require ecommerce sellers to display the mandatory declarations, such as MRP, net quantity, manufacturer or importer details and country of origin, on the listing itself.",
          "The Consumer Protection (E-Commerce) Rules also expect grievance contact details. These are not conversion tricks, but missing them makes a new brand look less trustworthy and creates avoidable risk. Confirm current requirements with your legal adviser.",
        ],
      },
      {
        heading: "What can wait until later",
        body: [
          "Several features are useful but rarely decide whether a young D2C brand grows: a loyalty points programme before you have repeat buyers to reward, a native mobile app before your mobile website converts well, AI chat before your product pages answer the basic questions, multi-currency before you have demand outside India, and complex personalisation before you have enough traffic to tell whether it works.",
        ],
      },
      {
        heading: "Priority by stage",
        body: [
          "Use this as a starting point and adjust it to your category. A supplements brand may need subscriptions earlier; a fashion brand may need exchanges on day one.",
        ],
        table: {
          headers: ["Stage", "Build or configure", "Usually from platform or apps", "Usually needs development"],
          rows: [
            ["**Launch**", "1, 2, 4, 5, 6, 7, 10, 15", "Reviews, payments, COD, basic tracking", "Pincode and delivery-date logic if your aggregator has no ready integration"],
            ["**First 6–12 months**", "3, 9, 11, 12, 13", "Returns portal, bundles, reorders", "Clean event tracking, COD confirmation joined to RTO data"],
            ["**Scaling**", "8, 14, deeper 12 and 13", "Quiz and subscription apps", "Custom offers logic, ERP and warehouse integration, performance work"],
          ],
        },
      },
      {
        heading: "Common mistakes when choosing features",
        body: [],
        checklist: [
          "Adding an app for every idea until the product page loads slowly and scripts conflict.",
          "Copying a large brand's feature set without its traffic or team.",
          "Turning off COD to fix RTO instead of controlling it.",
          "Building retention features before the first-order experience works.",
          "Launching offers whose stacking rules nobody has tested.",
          "Measuring conversion rate without payment success, RTO and return rates.",
        ],
      },
      {
        heading: "Choosing what to build next",
        body: [
          "Walk your own store on a mid-range phone as a first-time visitor from an ad, and note every moment you would hesitate. Most D2C brands find their biggest gains in features 1 to 7. Once those are solid, the retention and data features compound. For budgeting, see [[/blogs/ecommerce-website-development-cost-india|what an ecommerce website costs to build in India]].",
        ],
        cta: {
          title: "Want a second opinion on your store's feature gaps?",
          description: "Share your store with ZSpace Labs and we will walk the buying journey with you, flagging which gaps cost you orders and which can wait. See our [[/services/cro-audit|CRO audit]] and [[/services/shopify-development|Shopify development]] services.",
        },
      },
    ],
  },

  // ------------------------------------------- ECOMMERCE WEBSITE COST IN INDIA
  {
    slug: "ecommerce-website-development-cost-india",
    title: "How Much Does It Cost to Build an Ecommerce Website in India in 2027?",
    seoTitle: "Ecommerce Website Development Cost in India (2027 Guide)",
    excerpt:
      "What an ecommerce website costs to build and run in India: build cost by scope, Shopify's INR prices and fees, gateway, app and GST costs and plan break-evens.",
    category: "Shopify & Ecommerce",
    banner: "costbreakdown",
    sceneKind: "cost",
    bannerAlt:
      "An ecommerce budget split into one-time build costs (design, development, integrations, product data and migration) and monthly running costs (platform plan, transaction and gateway fees, apps, hosting and support)",
    date: "2026-11-10",
    readingTime: "15 min read",
    relatedServiceSlugs: ["shopify-development", "website-development"],
    relatedIndustrySlugs: ["d2c-consumer", "ecommerce", "retail"],
    relatedSlugs: ["shopify-development-cost", "d2c-website-features", "shopify-plus-vs-custom-ecommerce"],
    faqs: [
      {
        q: "What is the minimum cost of an ecommerce website in India?",
        a: "A small store on a Shopify theme set up by a freelancer can launch for well under ₹1 lakh in build cost, plus the monthly plan (Shopify Basic is ₹1,499 a month billed yearly as of November 2026), apps and payment fees. Below that you are usually trading away product data quality, testing or a reliable payments and shipping setup.",
      },
      {
        q: "Is Shopify Payments available in India?",
        a: "No. Indian Shopify stores use third-party gateways such as Razorpay, PayU or Cashfree. Shopify then charges its own third-party transaction fee on those payments (2% on Basic, 1% on Grow, 0.6% on Advanced and 0.2% on Plus according to its India pricing page), on top of the gateway's fee. Manual methods such as cash on delivery do not attract Shopify's fee.",
      },
      {
        q: "Is a custom ecommerce website cheaper than Shopify in the long run?",
        a: "Sometimes, at high volume and with a team to maintain it. A custom build removes platform plan and Shopify transaction fees but adds hosting, security, maintenance and the cost of building features Shopify gives you. Compare three-year totals for your own requirements rather than build quotes alone.",
      },
      {
        q: "Do quotes include GST?",
        a: "Check. Many Indian agency quotes are exclusive of 18% GST, and payment gateway fees are also subject to GST. If you are GST-registered you may be able to claim input tax credit, but your cash flow still needs to cover it.",
      },
      {
        q: "How long does it take to build an ecommerce website?",
        a: "A theme-based launch with clean product data can take a few weeks. A custom-designed Shopify store with integrations commonly takes two to four months, and headless or custom builds longer. Product data, content and payment approvals are the most common causes of delay.",
      },
    ],
    content: [
      {
        heading: "The short answer",
        body: [
          "**In India, building an ecommerce website typically costs from about ₹40,000 for a theme-based Shopify store set up by a freelancer, to ₹1.5–6 lakh for a customised Shopify store built by an agency, ₹6–20 lakh for a custom-designed store with significant integrations, and ₹15 lakh to well over ₹50 lakh for headless or fully custom platforms.** On top of that come running costs: the platform plan, Shopify's third-party transaction fee, gateway fees, apps, and maintenance. For many growing brands the monthly costs outweigh the build cost within two or three years.",
          "These build ranges are indicative planning ranges, based on our review of published Indian agency and freelancer pricing in November 2026 and the scope we describe for each tier. They are not a quote. The platform figures, by contrast, come from Shopify's official India pricing page as checked on 10 November 2026, and Shopify changes them from time to time.",
        ],
      },
      {
        heading: "Why published price ranges are so wide",
        body: [
          "Search for this question and you will find ranges from ₹10,000 to ₹45 lakh. Both ends can be honest, because they describe different things. A ₹15,000 store is usually a free theme with your logo and a handful of products. A ₹45 lakh project is usually a multi-brand or marketplace platform with ERP, warehouse and custom checkout logic.",
          "The useful question is not \"what does an ecommerce website cost\" but \"what does this scope cost\". Before asking for quotes, write down the number of products and variants, the page templates you need, the payment and shipping setup, every integration, whether you are migrating from another platform, and who will write content and shoot photos. Quotes built on that list can be compared; quotes built on a phone call cannot.",
        ],
      },
      {
        heading: "Build cost by scope",
        body: [
          "Each tier below describes what is typically included, so you can match it to your own requirements. Ranges assume an Indian freelancer or agency and exclude GST.",
        ],
        table: {
          headers: ["Tier", "Typical scope", "Indicative build cost", "Fits"],
          rows: [
            ["**Theme-based launch**", "Free or premium Shopify theme configured, up to about 100 products loaded, payment gateway, COD, shipping aggregator app, policy pages", "₹40,000–₹1.5 lakh", "A new brand testing demand"],
            ["**Customised Shopify store**", "Designed homepage, collection and product templates; custom sections; reviews, WhatsApp and tracking apps; basic analytics; migration of a small catalogue", "₹1.5–6 lakh", "Most funded early-stage D2C brands"],
            ["**Custom-designed store with integrations**", "Bespoke theme, offers and bundle logic, subscriptions, ERP or inventory integration, server-side tracking, performance work, SEO-safe migration", "₹6–20 lakh", "Brands with traction, several channels or a large catalogue"],
            ["**Headless or fully custom platform**", "Custom front end (for example Next.js or Hydrogen) on Shopify, or a custom commerce platform; complex integrations; dedicated QA", "₹15 lakh to ₹50 lakh+", "Content-heavy, multi-brand or unusual commerce models"],
          ],
        },
      },
      {
        heading: "What moves the price within a tier",
        body: [],
        checklist: [
          "**Design depth.** A configured theme costs far less than custom-designed templates and a design system.",
          "**Catalogue and data.** Products, variants, attributes, images and mandatory declarations all need preparing. Messy data from a spreadsheet or old platform adds days.",
          "**Integrations.** Each connection to a logistics provider, ERP, accounting tool, CRM or marketplace adds cost, and more if no reliable app exists.",
          "**Offer logic.** Bundles, tiered discounts, gift-with-purchase and subscriptions are simple until they must stack correctly.",
          "**Migration.** Moving products, customers, orders and URLs from WooCommerce or another platform, with redirects to protect search traffic.",
          "**Content and photography.** Often left out of quotes and then done in a hurry.",
          "**Testing.** Real-device testing and test orders on every payment method take time and are worth paying for.",
          "**Who builds it.** Freelancers are usually cheaper; agencies bring design, development, QA and project management in one team.",
        ],
      },
      {
        heading: "Monthly running costs, with official Shopify prices",
        body: [
          "Shopify's India pricing page listed the following on 10 November 2026. Prices exclude taxes and change from time to time, so check the current page before you budget.",
        ],
        table: {
          headers: ["Shopify plan", "Price per month (billed yearly / monthly)", "Third-party transaction fee", "Staff accounts"],
          rows: [
            ["**Basic**", "₹1,499 / ₹1,994", "2%", "Not included"],
            ["**Grow**", "₹5,599 / ₹7,447", "1%", "5"],
            ["**Advanced**", "₹22,680 / ₹30,164", "0.6%", "15"],
            ["**Plus**", "From ₹1,75,000 (term-based)", "0.2%", "Unlimited"],
          ],
        },
      },
      {
        heading: "The fee most Indian store budgets miss",
        body: [
          "Shopify Payments is not available in India, so Indian stores take online payments through third-party gateways such as Razorpay, PayU or Cashfree. That means two layers of fees on every prepaid order: the gateway's fee (commonly around 2% on standard plans, plus GST on the fee) and Shopify's third-party transaction fee from the table above. Cash on delivery and other manual payment methods do not attract Shopify's fee, but they carry their own costs in courier COD charges and failed deliveries.",
          "Because Shopify's fee falls as you move up plans, the plan choice is partly a fee calculation. Using the yearly prices above, the extra plan cost is covered by the lower fee at roughly these levels of monthly prepaid revenue through a gateway:",
        ],
        table: {
          headers: ["Move", "Extra plan cost per month", "Fee saving", "Break-even prepaid revenue per month"],
          rows: [
            ["Basic → Grow", "₹4,100", "1 percentage point", "About ₹4.1 lakh"],
            ["Grow → Advanced", "₹17,081", "0.4 percentage points", "About ₹42.7 lakh"],
            ["Advanced → Plus", "From ₹1,52,320", "0.4 percentage points", "About ₹3.8 crore"],
          ],
        },
        callout: {
          type: "note",
          text: "This is fee arithmetic only, on prepaid orders through a third-party gateway. Plan features such as staff accounts, reporting, checkout customisation and B2B often matter more than the fee saving. Plus pricing can also vary by term and volume.",
        },
      },
      {
        heading: "Other running costs to budget for",
        body: [],
        table: {
          headers: ["Cost", "What to expect", "Notes"],
          rows: [
            ["**Apps**", "Often a few thousand to a few tens of thousands of rupees a month in total", "Reviews, subscriptions, COD management, WhatsApp, search, returns; many are priced in USD"],
            ["**Payment gateway**", "A percentage of prepaid revenue plus GST", "Negotiate as volume grows; compare success rates, not only rates"],
            ["**Shipping and COD**", "Per-shipment courier charges plus COD handling fees", "Return-to-origin shipments cost you both ways"],
            ["**Messaging**", "Per-message charges for WhatsApp, SMS and email at volume", "Order updates and abandoned-cart flows add up"],
            ["**Maintenance and improvements**", "A monthly retainer or a budget for planned work", "Theme updates, app changes, fixes, new campaigns"],
            ["**Hosting**", "Included on Shopify; separate for WooCommerce, headless front ends and custom builds", "Plus monitoring and security for anything self-hosted"],
          ],
        },
      },
      {
        heading: "Shopify, WooCommerce or custom: how the costs differ",
        body: [
          "WooCommerce has no platform plan fee, which makes it look cheap. You pay instead for hosting, security, extensions and the developer time to keep WordPress, WooCommerce and plugins updated and working together. It suits teams that already run WordPress well.",
          "Shopify front-loads less cost and moves more into monthly fees, in exchange for hosting, security, checkout and updates handled by the platform. Custom platforms reverse that: high build cost and ongoing engineering, no platform or Shopify transaction fees. For the decision itself, see [[/blogs/shopify-plus-vs-custom-ecommerce|Shopify vs custom ecommerce]].",
        ],
        cta: {
          title: "Want a quote you can compare line by line?",
          description: "Send ZSpace Labs your product count, integrations and launch date, and we will scope your [[/services/shopify-development|Shopify]] or [[/services/website-development|custom ecommerce]] build tier by tier, with running costs alongside.",
        },
      },
      {
        heading: "Hypothetical example: first-year budget for a new D2C brand",
        body: [
          "**This example is hypothetical and for illustration only.** A skincare brand launches with 30 products on a customised Shopify store built by an agency for ₹3.5 lakh plus GST. It chooses Shopify Grow at ₹5,599 a month billed yearly, and spends about ₹12,000 a month on apps. It averages ₹8 lakh a month in revenue, 70% of it prepaid through a gateway.",
          "On the prepaid ₹5.6 lakh a month, Shopify's 1% fee is about ₹5,600 and a 2% gateway fee about ₹11,200 before GST. Add the plan and apps and the store's recurring platform and payment costs come to roughly ₹34,000 a month before GST on the gateway fee, or a little over ₹4 lakh a year: about the same as the build itself, every year. Shipping, COD charges and returns sit on top. This is why the cheapest build is rarely the cheapest store.",
        ],
      },
      {
        heading: "Hidden costs that catch founders out",
        body: [],
        checklist: [
          "GST on agency fees and gateway charges, if the quote or rate card excludes it.",
          "App subscriptions billed in USD, which rise with exchange rates and order volume.",
          "Product photography, copywriting and product data entry.",
          "Courier COD fees and return-to-origin costs.",
          "Redirects and SEO work when migrating from another platform.",
          "Paid theme licences and the cost of updating a heavily modified theme later.",
          "Time from your own team for approvals, content and testing.",
        ],
      },
      {
        heading: "How to compare quotes",
        body: [
          "Ask every vendor to quote against the same written scope and to separate design, development, integrations, migration, QA and post-launch support. Ask what is excluded, how change requests are priced, who owns the theme code and accounts, and what support looks like in the first 90 days. A low quote that excludes migration, testing or payment setup is not a lower price; it is a smaller job. If you are moving an existing store rather than building a new one, see [[/blogs/shopify-migration-cost-india|Shopify migration cost in India]]. [[/blogs/how-to-choose-a-shopify-development-agency|How to choose a Shopify development agency]] has a fuller checklist, and [[/blogs/shopify-development-cost|Shopify development cost]] explains the global cost drivers in more depth.",
        ],
      },
      {
        heading: "Ways to keep the budget under control",
        body: [],
        checklist: [
          "Launch with the features on the path to the first order, and add retention features once you have customers. Our [[/blogs/d2c-website-features|D2C website features list]] shows what can wait.",
          "Prefer theme customisation and proven apps before custom code, but remove apps that duplicate each other.",
          "Get product data clean before development starts.",
          "Pay yearly for the plan once you are confident in the platform.",
          "Review the fee break-even table above every quarter as revenue grows.",
        ],
      },
      {
        heading: "Budgeting with the whole picture",
        body: [
          "The build quote is the most visible number and often not the largest. Budget for the first two or three years: build, plan, transaction and gateway fees, apps, shipping and improvements. Choose the platform and plan that fit that total and your team, and revisit it as your revenue mix changes. For the full plan of what to build, start with our [[/blogs/d2c-website-development|D2C ecommerce website development guide]].",
        ],
        cta: {
          title: "Planning your ecommerce budget?",
          description: "ZSpace Labs can help you size the build, choose a Shopify plan using your own revenue mix, and phase the work so you launch sooner. [[/contact|Talk to our team]].",
        },
      },
    ],
  },
];
