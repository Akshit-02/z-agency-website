import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, batch three, part seven: order value — cross-
 * selling (complementary products), upselling (better or larger versions),
 * average order value and merchandising vs personalization. Merged into
 * `posts` in blog-data.ts.
 */

export const commercePosts16: BlogPost[] = [
  // ---------------------------------------------------- 137 · CROSS-SELLING
  {
    slug: "ecommerce-cross-selling",
    title: "Ecommerce Cross-Selling: How to Recommend Relevant Products",
    seoTitle: "Ecommerce Cross-Selling: How to Recommend Relevant Products",
    excerpt:
      "How to cross-sell well in ecommerce: finding genuine complements, placement on product, cart and post-purchase pages, presentation, data sources and measurement.",
    category: "CRO",
    banner: "crosssell",
    bannerAlt:
      "Cross-selling placements: product page (goes with, accessories, complete the look), cart (low-cost add-ons, compatible items, quick add), after purchase (order page ideas, how-to content, refills) and email and account (replenishment, care products, next in routine).",
    date: "2026-09-29",
    readingTime: "12 min read",
    relatedServiceSlugs: ["cro-audit", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "consumer-electronics", "fashion-apparel"],
    faqs: [
      { q: "What is cross-selling in ecommerce?", a: "Recommending complementary products that go with what a shopper is buying or viewing, such as a case with a phone, a belt with trousers or refills with a device." },
      { q: "What's the difference between cross-selling and upselling?", a: "Cross-selling adds complementary products. Upselling offers a better, larger or more complete version of the product being considered." },
      { q: "Where should cross-sells appear?", a: "Below the buy area on product pages, in the cart for small add-ons and required accessories, on order confirmation pages, and in post-purchase emails timed to use." },
      { q: "How do I choose which products to cross-sell?", a: "Use orders (what's bought together), compatibility data, merchandiser knowledge of genuine complements and, for larger catalogs, recommendation models. Exclude out-of-stock items." },
      { q: "Can cross-selling hurt conversion?", a: "Yes, if it distracts from the main purchase, clutters the cart or suggests irrelevant items. Keep it relevant and out of the way of checkout." },
      { q: "Should cross-sells be discounted?", a: "Sometimes, as a bundle, but many genuine complements sell without discounts. Test whether the discount adds margin or only gives it away." },
      { q: "What is an attach rate?", a: "The share of orders containing the main product that also include the cross-sold item. It's a core cross-sell metric." },
      { q: "How many cross-sell products should I show?", a: "A few relevant ones, typically one row. More options dilute attention." },
      { q: "Are post-purchase cross-sells effective?", a: "They can be, because the main decision is done. Offer genuinely useful complements and keep them optional." },
      { q: "How do I measure cross-selling?", a: "Attach rate, average order value, margin per order, conversion and returns, compared with a holdout." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Cross-selling works when it recommends genuine complements at the moment they're useful. Find them from what customers buy together, compatibility data and merchandising knowledge. Place them below the buy area on product pages, as small add-ons or required accessories in the cart, on order confirmation pages and in emails timed to product use. Show few, relevant, in-stock items with quick add, keep them away from the checkout button, and measure attach rate, order value and margin against a holdout rather than clicks.",
        ],
      },
      {
        heading: "Cross-Selling vs Upselling",
        body: [
          "Cross-selling adds complementary products; upselling offers a better version of the product being considered. They answer different shopper needs and belong in different places. See [[/blogs/ecommerce-upselling|ecommerce upselling]]. Both are specific uses of [[/blogs/ecommerce-product-recommendations|product recommendations]].",
        ],
      },
      {
        heading: "Finding Genuine Complements",
        body: [],
        table: {
          headers: ["Source", "Finds", "Watch out"],
          rows: [
            ["Orders (bought together)", "Real pairings", "Popular items appear with everything"],
            ["Compatibility data", "Required or fitted accessories", "Must be accurate"],
            ["Merchandiser knowledge", "Intended pairings, routines, looks", "Needs maintenance"],
            ["Recommendation models", "Scale for large catalogs", "Needs data and testing"],
            ["Support questions", "What customers realise they needed", "Qualitative"],
          ],
        },
      },
      {
        heading: "Placement by Moment",
        body: [
          "On the product page, shoppers are still deciding, so cross-sells belong below the buy area. In the cart, the decision is made, so small, relevant add-ons and required accessories fit. After purchase, the order page and emails can suggest complements and refills without risking the sale.",
        ],
        cta: {
          title: "Are your cross-sells adding revenue or noise?",
          description: "ZSpace Labs reviews cross-sell logic, placements and measurement, and tests what actually increases margin per order.",
        },
      },
      {
        heading: "Presentation",
        body: [],
        checklist: [
          "A title that explains the relationship: “You'll also need”, “Goes with”",
          "One row of a few items",
          "Image, name, price and quick add, with variant choice where needed",
          "Compatibility stated for accessories",
          "Never between the shopper and the checkout button",
          "Accessible carousels or simple rows",
        ],
      },
      {
        heading: "Required vs Optional Complements",
        body: [
          "Some complements are necessary: batteries, cables, mounting kits. Say so clearly on the product page, so shoppers don't discover it after delivery. Optional complements, such as a matching accessory, should feel like suggestions, not pressure.",
        ],
      },
      {
        heading: "Pricing and Bundles",
        body: [
          "Genuine complements often sell at full price. Where a discount helps, a bundle presents the pairing clearly. Check margin: a discounted add-on that would have sold anyway reduces profit. See [[/blogs/ecommerce-product-bundles|product bundles]].",
        ],
      },
      {
        heading: "Measuring Cross-Selling",
        body: [],
        table: {
          headers: ["Metric", "Why"],
          rows: [
            ["Attach rate", "How often the complement joins the main product"],
            ["Average order value", "Basket size effect"],
            ["Margin per order", "Profit, not just revenue"],
            ["Conversion", "Guardrail: cross-sells mustn't cost sales"],
            ["Returns", "Irrelevant add-ons often come back"],
          ],
        },
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Recommending the same popular items everywhere",
          "Cross-sells above the buy area",
          "Crowded carts that delay checkout",
          "Out-of-stock or incompatible suggestions",
          "Judging success on clicks",
        ],
        cta: {
          title: "Want cross-sells that customers are glad to see?",
          description: "Talk to ZSpace Labs about [[/services/cro-audit|cross-sell testing]] and [[/services/ui-ux-design|product page and cart UX]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Cross-selling is helpful when it anticipates what shoppers need next. Choose genuine complements, place them where they don't compete with the main decision, present them clearly and measure margin. For the effect on basket size, see [[/blogs/ecommerce-average-order-value|average order value]].",
          "Related: [[/blogs/ecommerce-product-recommendations|product recommendations]], [[/blogs/ecommerce-upselling|upselling]], [[/blogs/ecommerce-cart-ux|cart UX]] and [[/blogs/shopify-product-recommendations|Shopify product recommendations]].",
        ],
      },
    ],
  },

  // ---------------------------------------------------- 138 · UPSELLING
  {
    slug: "ecommerce-upselling",
    title: "Ecommerce Upselling: How to Increase Order Value Without Adding Friction",
    seoTitle: "Ecommerce Upselling: Increase Order Value Without Friction",
    excerpt:
      "How to upsell in ecommerce without friction: upsell types, timing, honest comparison, placement, protection plans, subscriptions and avoiding dark patterns.",
    category: "CRO",
    banner: "upsell",
    bannerAlt:
      "Upsell types compared by when they help and their friction risk: better model, larger size or pack, bundle, protection or warranty, subscription and faster delivery.",
    date: "2026-09-29",
    updated: "2026-10-01",
    readingTime: "12 min read",
    relatedServiceSlugs: ["cro-audit", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "consumer-electronics"],
    faqs: [
      { q: "What is upselling in ecommerce?", a: "Offering a shopper a higher-value option than the one they're considering: a better model, a larger size, a pack, a bundle, a protection plan or faster delivery." },
      { q: "When should upsells be shown?", a: "While the shopper is choosing, usually on the product page near variant or model selection, rather than as interruptions after they've decided." },
      { q: "Do post-add-to-cart upsell pop-ups work?", a: "They can raise order value but often add friction. Test them against inline options, and measure conversion as well as order value." },
      { q: "How do I make upsells feel helpful?", a: "Explain the difference in plain terms, show the price difference, and recommend the upgrade only when it fits the shopper's needs." },
      { q: "Should warranties be pre-selected?", a: "No. Pre-selecting add-ons is a dark pattern that erodes trust and may breach consumer rules in some markets. Offer them as clear, optional choices." },
      { q: "Is subscription an upsell?", a: "It can be, when a product is used regularly. Offer it as a clear alternative to one-time purchase with the terms shown." },
      { q: "What's the difference between upselling and cross-selling?", a: "Upselling replaces or upgrades the item; cross-selling adds complementary items." },
      { q: "How do I measure upselling?", a: "Upgrade take rate, average order value, margin, conversion and returns, against a control." },
      { q: "Can upselling increase returns?", a: "Yes, if shoppers are pushed into options they didn't need. Honest comparison reduces this." },
      { q: "Is free-shipping threshold messaging an upsell?", a: "It encourages larger orders, which is related. Keep thresholds honest and show progress without pressure." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Upselling increases order value by offering a better, larger or more complete option while the shopper is still choosing: a higher model, a bigger size or pack, a bundle, a protection plan, a subscription or faster delivery. It works without friction when the difference is explained plainly, the price difference is visible, the option fits the shopper's needs and saying no is easy. Avoid pre-selected add-ons, interruptive pop-ups that delay checkout and pressure tactics. Measure upgrade take rate, order value, margin, conversion and returns.",
        ],
      },
      {
        heading: "Upselling vs Cross-Selling",
        body: [
          "Upselling changes what the shopper buys; [[/blogs/ecommerce-cross-selling|cross-selling]] adds to it. Both raise [[/blogs/ecommerce-average-order-value|average order value]], but upsells belong earlier, where the shopper is choosing between options.",
        ],
      },
      {
        heading: "Upselling, Cross-Selling, Bundles and Recommendations Compared",
        body: [
          "These terms overlap in everyday use, which leads teams to place the wrong offer at the wrong moment. The distinction is about what the shopper is being offered and when.",
        ],
        table: {
          headers: ["Tactic", "What it offers", "Best moment", "Watch out for"],
          rows: [
            ["Upsell", "A better or larger version of what they are choosing", "During choice on the product page", "Pushing beyond the shopper's need or budget"],
            ["Cross-sell", "A different product that complements the choice", "Product page, cart, post-purchase", "Irrelevant or incompatible items"],
            ["Complementary product", "An item that is used with the main one (refill, case, cable)", "Product page and cart", "Required items presented as optional"],
            ["Bundle", "A predefined set, often with a price benefit", "Product and collection pages", "Bundles that hide individual prices"],
            ["Recommendation", "Products selected by rules or models for this context", "Across the journey", "Recommendations used as a dumping ground for stock"],
          ],
        },
        checklist: [
          "Product page: upsells during choice, plus complements and bundles",
          "Cart: a few relevant complements, never interrupting the path to checkout",
          "Checkout: little or nothing; keep it focused",
          "Post-purchase: complements and replenishment, after the order is confirmed",
          "Never use pre-ticked add-ons, countdowns that reset or misleading 'savings'",
        ],
      },
      {
        heading: "Upsell Types",
        body: [
          "Each helps in some situations and adds friction in others.",
        ],
      },
      {
        heading: "Offer Upsells During the Choice",
        body: [
          "The best place for an upsell is inside the decision: a model or size selector that shows each option's price and what it adds, a “good, better, best” comparison, or a pack-size choice with unit price. Shoppers compare there anyway; the upsell becomes information rather than interruption.",
        ],
        table: {
          headers: ["Pattern", "Example"],
          rows: [
            ["Option selector with differences", "128 GB vs 256 GB: price difference and what it means"],
            ["Good / better / best", "Three models with key differences side by side"],
            ["Pack sizes with unit price", "1, 3 or 6 with price per unit"],
            ["Subscribe option", "One-time or every 4 weeks with terms"],
          ],
        },
        cta: {
          title: "Want upsells that don't slow shoppers down?",
          description: "ZSpace Labs designs option selectors and comparisons that raise order value while keeping decisions easy.",
        },
      },
      {
        heading: "Protection Plans and Add-Ons",
        body: [
          "Warranties and protection plans suit high-value items. Present them as optional, with clear terms and price, and never pre-selected. Pre-selected add-ons are a dark pattern that damages trust and may breach consumer protection rules in some markets.",
        ],
      },
      {
        heading: "Post-Add-to-Cart Upsells",
        body: [
          "Pop-ups after adding to cart can raise order value, but they interrupt a shopper who has just decided. If you use them, keep them relevant, easy to dismiss and infrequent, and test against a version without them on conversion and revenue per session, not order value alone.",
        ],
      },
      {
        heading: "Honesty Protects Order Value",
        body: [
          "Upsells that oversell lead to returns and lost trust. Recommend the upgrade when it genuinely fits (“If you shoot video, 256 GB fills more slowly”), and let shoppers see when the cheaper option is enough.",
        ],
      },
      {
        heading: "Measuring Upsells",
        body: [],
        checklist: [
          "Upgrade take rate by product",
          "Average order value and margin",
          "Conversion rate (guardrail)",
          "Returns on upgraded purchases",
          "Complaints about add-ons",
        ],
      },
      {
        heading: "Dark Patterns to Avoid",
        body: [],
        checklist: [
          "Pre-selected warranties or add-ons",
          "Confirm-shaming copy (“No, I don't want protection”)",
          "Fake scarcity on the upgraded option",
          "Hiding the basic option",
          "Interruptions between the shopper and checkout",
        ],
        cta: {
          title: "Want higher order value without the friction?",
          description: "Talk to ZSpace Labs about [[/services/cro-audit|offer testing]] and [[/services/ui-ux-design|product page design]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Good upselling is good product comparison: shown while shoppers choose, explained honestly, priced clearly and easy to decline. It raises order value and satisfaction together. For the full set of levers, see [[/blogs/ecommerce-average-order-value|average order value]].",
          "Related: [[/blogs/ecommerce-cross-selling|cross-selling]], [[/blogs/ecommerce-average-order-value|average order value]], [[/blogs/ecommerce-product-bundles|product bundles]], [[/blogs/ecommerce-checkout-ux|checkout UX]] and [[/blogs/shopify-cart-optimization|Shopify cart optimization]].",
        ],
      },
    ],
  },

  // ---------------------------------------------- 139 · AVERAGE ORDER VALUE
  {
    slug: "ecommerce-average-order-value",
    title: "Ecommerce Average Order Value: How to Increase AOV",
    excerpt:
      "How to increase ecommerce average order value: the AOV formula, items per order vs price per item, bundles, cross-sells, upsells, thresholds and guardrails.",
    category: "CRO",
    banner: "aovtree",
    bannerAlt:
      "Average order value driver tree: revenue divided by orders, split into items per order (bundles, cross-sells, free-delivery threshold, quantity breaks) and price per item (upsells, premium ranges, fewer blanket discounts, merchandising mix), with guardrails of conversion, margin and returns.",
    date: "2026-09-29",
    readingTime: "12 min read",
    relatedServiceSlugs: ["cro-audit", "ui-ux-design", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer"],
    faqs: [
      { q: "What is average order value?", a: "Total revenue divided by the number of orders in a period. It shows how much customers spend per order on average." },
      { q: "How do I calculate AOV?", a: "Revenue ÷ orders. Decide whether revenue includes shipping, tax, discounts and returns, and keep the definition consistent." },
      { q: "How can I increase AOV?", a: "Increase items per order (bundles, cross-sells, free-delivery thresholds, quantity breaks) or price per item (upsells, premium ranges, less blanket discounting), while watching conversion and margin." },
      { q: "Is a higher AOV always better?", a: "No. If it lowers conversion or margin, revenue per visitor or profit can fall. Read AOV alongside conversion rate and margin." },
      { q: "How should I set a free-delivery threshold?", a: "Look at your order value distribution and set the threshold somewhat above the typical order, where a small addition gets shoppers over it, then test." },
      { q: "Do discounts increase AOV?", a: "Tiered discounts (spend more, save more) can. Blanket discounts usually reduce price per item and may not increase items per order." },
      { q: "What's a good AOV?", a: "It depends on category and price points. Track your own trend and segments rather than comparing with other stores." },
      { q: "How does AOV relate to revenue per visitor?", a: "Revenue per visitor equals conversion rate × AOV, so it captures both. It's a better single measure than either alone." },
      { q: "Why is my AOV falling?", a: "Common reasons: more discounting, a shift to cheaper products or new customers, removed bundles or thresholds, or a change in traffic mix." },
      { q: "How do I test AOV changes?", a: "A/B test with revenue per visitor as the primary metric and AOV, conversion and margin as secondary metrics." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Average order value is revenue divided by orders. Increase it through two drivers: more items per order (bundles, relevant cross-sells, a well-set free-delivery threshold, quantity breaks) and higher price per item (upsells to better or larger options, premium ranges, less blanket discounting). Always read AOV next to conversion rate and margin, because a higher AOV that costs conversions or profit isn't a win. Revenue per visitor, which is conversion rate × AOV, is the better primary metric for testing.",
        ],
      },
      {
        heading: "The AOV Driver Tree",
        body: [
          "In short, the approach breaks AOV into items per order and price per item, with levers under each and guardrails at the bottom. Knowing which driver is weak tells you which levers to try.",
        ],
      },
      {
        heading: "Define AOV Consistently",
        body: [
          "Decide whether revenue includes shipping, tax, discounts and refunds, and exclude test and staff orders. Shopify, analytics tools and finance reports often define it differently, so pick one definition for decisions. See [[/blogs/ecommerce-kpi-dashboard|ecommerce KPI dashboard]].",
        ],
      },
      {
        heading: "Levers for Items per Order",
        body: [],
        table: {
          headers: ["Lever", "Works when", "Guardrail"],
          rows: [
            ["Bundles and multipacks", "Items are used together or bought repeatedly", "Margin after discount"],
            ["Cross-sells", "Genuine complements exist", "Conversion, returns"],
            ["Free-delivery threshold", "Typical orders sit just below a sensible level", "Delivery cost vs margin"],
            ["Quantity breaks", "Consumables, B2B", "Unit margin"],
            ["Gift with purchase", "Launches, samples", "Cost of gift"],
          ],
        },
      },
      {
        heading: "Levers for Price per Item",
        body: [],
        table: {
          headers: ["Lever", "Works when", "Guardrail"],
          rows: [
            ["Upsells to better models or sizes", "Real differences exist", "Returns"],
            ["Premium ranges", "Customers value quality or features", "Positioning"],
            ["Less blanket discounting", "Discounts are habitual", "Conversion"],
            ["Merchandising mix", "Higher-value products are under-featured", "Stock"],
          ],
        },
        cta: {
          title: "Want to raise order value without losing conversions?",
          description: "ZSpace Labs analyses your order values and tests the levers that fit your products and margins.",
        },
      },
      {
        heading: "Setting a Free-Delivery Threshold",
        body: [
          "Look at the distribution of order values, not just the average. A threshold a little above the most common order value gives many shoppers a realistic reason to add an item. Show progress in the cart, suggest relevant low-cost items to close the gap, and check that delivery costs saved exceed the margin given up. Test thresholds rather than guessing.",
        ],
      },
      {
        heading: "Read AOV With Other Metrics",
        body: [
          "A pop-up upsell might raise AOV while lowering conversion; a big discount might raise items per order while cutting margin. Use revenue per visitor as the primary metric in tests, with AOV, conversion, margin and returns alongside. See [[/blogs/ecommerce-conversion-rate|ecommerce conversion rate]].",
        ],
      },
      {
        heading: "Segment AOV",
        body: [
          "AOV differs by new vs returning customers, channel, device and category. A fall in overall AOV can simply reflect more new customers or a cheaper traffic source. Segment before acting.",
        ],
      },
      {
        heading: "AOV Plan Checklist",
        body: [],
        checklist: [
          "Consistent AOV definition",
          "Order value distribution reviewed",
          "Weak driver identified: items or price",
          "Levers chosen to fit products and margin",
          "Tests with revenue per visitor as primary metric",
          "Guardrails: conversion, margin, returns",
        ],
        cta: {
          title: "Planning AOV experiments?",
          description: "Talk to ZSpace Labs about [[/services/cro-audit|AOV testing]], [[/services/ui-ux-design|cart and product page UX]] and [[/services/shopify-development|Shopify offer setup]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "AOV rises when shoppers find more of what they need and choose options that suit them better, not when they're pushed. Use the driver tree, pick levers that fit your products, test on revenue per visitor and protect conversion and margin. For the levers in detail, see [[/blogs/ecommerce-product-bundles|bundles]], [[/blogs/ecommerce-cross-selling|cross-selling]] and [[/blogs/ecommerce-upselling|upselling]].",
          "For related guides, see [[/blogs/ecommerce-loyalty-program-ux|loyalty program UX]].",
        ],
      },
    ],
  },

  // ------------------------------------- 140 · MERCHANDISING VS PERSONALIZATION
  {
    slug: "ecommerce-merchandising-vs-personalization",
    title: "Ecommerce Merchandising vs Personalization: What's the Difference?",
    seoTitle: "Ecommerce Merchandising vs Personalization: The Difference",
    excerpt:
      "The difference between ecommerce merchandising and personalization: who decides, what they're based on, strengths and risks, and how the two work together.",
    category: "CRO",
    banner: "merchvspers",
    bannerAlt:
      "Merchandising compared with personalization: who decides, what it's based on, who sees the same thing, strengths, risks, and how they work together, with merchandising setting the shelf and personalization ordering it per shopper.",
    date: "2026-09-29",
    readingTime: "10 min read",
    relatedServiceSlugs: ["cro-audit", "ai-automation", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "fashion-apparel"],
    faqs: [
      { q: "What's the difference between merchandising and personalization?", a: "Merchandising is the team deciding what products appear and in what order, based on strategy, stock and margin. Personalization adapts what each shopper sees based on their behavior and context, usually through rules or algorithms." },
      { q: "Does personalization replace merchandising?", a: "No. Merchandising sets the range, rules and priorities; personalization orders and selects within them. Without merchandising guardrails, personalization can promote out-of-stock or low-margin items." },
      { q: "When is merchandising better?", a: "For launches, brand storytelling, campaigns, new visitors with no history, small catalogs and when control matters more than individual relevance." },
      { q: "When is personalization better?", a: "For large catalogs, returning visitors, recommendations and search ranking where individual relevance adds value and there's enough data." },
      { q: "Can they conflict?", a: "Yes: a pinned campaign product might not suit an individual shopper, or a personalized ranking might hide a launch. Decide which placements each controls." },
      { q: "Who should own personalization?", a: "Usually the ecommerce or merchandising team, with data and technical support, so personalization reflects business priorities." },
      { q: "How do I measure each?", a: "Merchandising by category performance, sell-through and conversion from placements; personalization against a holdout group." },
      { q: "Is AI merchandising the same as personalization?", a: "Not necessarily. AI can support merchandising decisions for everyone, such as ranking by predicted performance, without tailoring to individuals." },
      { q: "Where should a small store start?", a: "With good merchandising: clear structure, sensible sorting and planned placements. Add personalization as traffic and catalog grow." },
      { q: "What placements suit each?", a: "Merchandising: homepage hero, campaign pages, category default order, launches. Personalization: recommendations, recently viewed, search ranking, email product selection." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Merchandising is the team deciding which products appear, where and in what order, based on strategy, stock, margin and the trading calendar; everyone in a segment sees the same thing. Personalization adapts what each shopper sees based on their behavior and context, through rules or models. They aren't alternatives: merchandising sets the shelf and the guardrails, and personalization orders and selects within them. Use merchandising for launches, campaigns, new visitors and small catalogs; add personalization for recommendations, search ranking and returning visitors in larger catalogs.",
        ],
      },
      {
        heading: "Side by Side",
        body: [""],
      },
      {
        heading: "What Merchandising Does Best",
        body: [
          "Merchandising expresses business intent: launches, brand stories, seasonal campaigns, clearance and margin priorities. It gives predictable results, works without shopper history and is easy to explain. Its risk is staleness: rules and pins that nobody updates. See [[/blogs/ecommerce-merchandising|ecommerce merchandising]].",
        ],
      },
      {
        heading: "What Personalization Does Best",
        body: [
          "Personalization scales relevance: showing each returning shopper products related to their interests, ranking search results by preference, and choosing email products per recipient. It needs data and measurement against a holdout, and can be opaque. See [[/blogs/ecommerce-personalization|ecommerce personalization]] and [[/blogs/ai-personalization-ecommerce|AI personalization]].",
        ],
        cta: {
          title: "Not sure which placements should be personalized?",
          description: "ZSpace Labs maps your placements to merchandising or personalization and sets up the guardrails between them.",
        },
      },
      {
        heading: "Who Controls Which Placement",
        body: [],
        table: {
          headers: ["Placement", "Usually controlled by", "Why"],
          rows: [
            ["Homepage hero", "Merchandising", "Brand and campaign intent"],
            ["Campaign landing pages", "Merchandising", "Specific story"],
            ["Category default order", "Merchandising, with personalization for returning visitors", "Balance of intent and relevance"],
            ["Search ranking", "Relevance, then personalization, with merchandising boosts", "Shopper intent comes first"],
            ["Recommendations", "Personalization within merchandising rules", "Relevance at scale"],
            ["Email product selection", "Personalization", "Per-recipient relevance"],
          ],
        },
      },
      {
        heading: "Guardrails Merchandising Sets for Personalization",
        body: [],
        checklist: [
          "Exclude out-of-stock and low-stock variants",
          "Respect margin floors and exclusions",
          "Protect launches and campaigns in defined slots",
          "Keep diversity so shoppers see the range",
          "Exclude products unsuitable for recommendation",
        ],
      },
      {
        heading: "Choosing by Store Stage",
        body: [
          "Small catalogs and young stores get most from strong merchandising. As traffic, catalog size and returning visitors grow, personalization adds value in recommendations and search first, then category ranking. At every stage, measure personalization against a holdout.",
        ],
        cta: {
          title: "Want merchandising and personalization working together?",
          description: "Talk to ZSpace Labs about [[/services/cro-audit|merchandising strategy]], [[/services/ai-automation|personalization]] and [[/services/ui-ux-design|experience design]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Merchandising decides what the business wants to show; personalization decides what each shopper is most likely to want within that. Give each the placements that suit it, set guardrails, and measure both. For the planning side, see [[/blogs/ecommerce-product-merchandising|product merchandising strategy]].",
          "Related: [[/blogs/ai-personalization-ecommerce|AI personalization]] and [[/blogs/ecommerce-product-sorting|product sorting]].",
        ],
      },
    ],
  },
];
