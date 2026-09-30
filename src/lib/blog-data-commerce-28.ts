import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, batch four, part seven: food product pages,
 * grocery redesign, B2B ecommerce website design and B2B product catalogs.
 * Merged into `posts` in blog-data.ts.
 */

export const commercePosts28: BlogPost[] = [
  // ------------------------------------------------- 189 · FOOD PRODUCT PAGE
  {
    slug: "food-ecommerce-product-page-design",
    title: "Food Ecommerce Product Page Design: What Customers Need Before Buying",
    seoTitle: "Food Product Page Design: What Customers Need Before Buying",
    excerpt:
      "How to design food product pages: appetizing imagery, size and servings, ingredients and allergens, nutrition, storage, delivery dates, freshness and reviews.",
    category: "UI/UX",
    banner: "foodpdpzones",
    bannerAlt:
      "Food product page zones: basics (name and size, price per unit, servings, images of contents), ingredients and allergens (full ingredients, allergens emphasized, may-contain, origin), nutrition and diet (nutrition table, verified dietary tags, calories per serving, certifications) and storage and delivery (storage, shelf life, delivery method, freshness promise), noting that mandatory food information must be available before purchase in many markets.",
    date: "2026-09-29",
    readingTime: "15 min read",
    relatedServiceSlugs: ["ui-ux-design", "shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["food-beverage", "d2c-consumer"],
    faqs: [
      { q: "What should a food product page include?", a: "Appetizing, accurate photos; name, size, servings and price (with unit price where relevant); ingredients with allergens emphasized; nutrition; dietary attributes; storage and shelf life; delivery information and cut-off; and reviews about taste and freshness." },
      { q: "Where should allergens appear on a food product page?", a: "Within the ingredients list, emphasized (for example in bold), and summarized near the top of the page. Never hide them behind a click the shopper may not make." },
      { q: "Do food product pages legally need ingredients?", a: "In many markets, yes. In the EU, mandatory food information for prepacked food sold at a distance must be available before the purchase is concluded, except the date mark. Check the rules for each market with a qualified adviser." },
      { q: "How should nutrition be displayed?", a: "As a readable table (not an image of the label) with consistent units, per 100 g or 100 ml and per serving where relevant." },
      { q: "Should food product pages show delivery dates?", a: "Yes. Perishable and gift purchases depend on arrival date, so show the next available delivery date and the order cut-off on the page." },
      { q: "What images work for food products?", a: "Honest photos of the product as delivered, the product in use or served, the packaging, and scale references. Avoid images that overstate portion or appearance." },
      { q: "How should reviews work for food?", a: "Encourage reviews about taste, freshness, packaging and delivery, with photos. Show them honestly, including critical ones." },
      { q: "Should product pages show label images?", a: "They can supplement structured text, but information should also be available as text so it can be read by screen readers, searched and zoomed." },
      { q: "How do I show dietary claims?", a: "As badges only when verified and substantiated, and consistent with the ingredients. Regulated claims need approved wording." },
      { q: "How is this different from general product page design?", a: "General product page guidance applies. This guide covers food-specific information: safety, freshness, delivery timing and taste." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A food product page has to make the product appealing and give shoppers the facts they need safely. Show honest, appetizing photos; the name, size, servings, price and unit price; ingredients with allergens emphasized and summarized near the top; a readable nutrition table; verified dietary badges; storage and shelf-life information; the next delivery date and order cut-off; and reviews about taste and freshness. Keep information as text, not only label images, and keep it in sync with packaging.",
        ],
      },
      {
        heading: "Two Jobs: Appetite and Assurance",
        body: [
          "Food product pages persuade and inform at the same time. Appetite comes from photography, taste descriptions, serving ideas and reviews. Assurance comes from ingredients, allergens, nutrition, freshness and delivery facts. Shoppers with allergies or dietary needs will not buy without assurance, however good the photos. The diagram above groups the essential information into four zones: basics, ingredients and allergens, nutrition and diet, and storage and delivery. Below, the page is organized as a shopper reads it: decide, facts, delivery and proof.",
          "For general product page structure, see [[/blogs/ecommerce-product-page-design|ecommerce product page design]]. For food store design more broadly, see [[/blogs/food-ecommerce-website-design|food ecommerce website design]].",
        ],
      },
      {
        heading: "Zone 1: Decide",
        body: [
          "The top of the page should answer what it is, how much, how many servings and when it can arrive. Show size or weight and servings next to the price, a unit price for comparison (per 100 g, per kg, per litre), quantity controls and the add button. On mobile this zone should fit on the first screen with the main image.",
        ],
        table: {
          headers: ["Element", "Why it matters"],
          rows: [
            ["Size and servings", "Shoppers compare value and plan meals"],
            ["Unit price", "Fair comparison across pack sizes"],
            ["Allergen summary", "Immediate screening for shoppers with allergies"],
            ["Next delivery date", "Perishable and gift timing"],
            ["Subscription option", "Where regular purchase is common"],
          ],
        },
      },
      {
        heading: "Zone 2: Ingredients, Allergens and Nutrition",
        body: [
          "Display full ingredients as text, with allergens emphasized within the list, and a summary of allergens and may-contain statements near the top. Show nutrition in a readable table with consistent units. Provide label images as a supplement if useful, never as the only source. In the EU, mandatory food information for prepacked food sold at a distance must be available before purchase, except the date mark, which must be available at delivery ([[https://food.ec.europa.eu/food-safety/labelling-and-nutrition/food-information-consumers-legislation/distance-selling_en|European Commission]]). Other markets have their own rules.",
        ],
        callout: {
          type: "note",
          text: "Source every field from structured product data maintained alongside the label, not from copy pasted into a description. When the recipe changes, the page changes in the same release.",
        },
      },
      {
        heading: "Dietary Badges and Claims",
        body: [
          "Badges such as vegan, gluten-free or organic help shoppers screen quickly, but they must be verified and consistent with ingredients. Many claims are regulated (nutrition and health claims, organic certification). Use approved wording, keep evidence on file and avoid implying health benefits you can't substantiate.",
        ],
      },
      {
        heading: "Zone 3: Delivery, Storage and Freshness",
        body: [
          "For perishables, arrival timing is part of the product. Show the next available delivery date and the order cut-off for it, how the product is packed (chilled, frozen, insulated), how to store it on arrival and its typical shelf life on arrival where you can commit to it. For gifts, show date selection and gift message options.",
        ],
        cta: {
          title: "Food product pages not converting?",
          description: "ZSpace designs food product pages that balance appetite with the facts shoppers need before they buy.",
        },
      },
      {
        heading: "Imagery That Sets Honest Expectations",
        body: [],
        checklist: [
          "The product as it arrives, including packaging",
          "The product served or in use, with realistic portions",
          "Scale reference (in hand, next to common items)",
          "Close-up texture for baked goods, meat or produce",
          "Label and back-of-pack images as a supplement",
          "Consistent lighting and background across the range",
        ],
      },
      {
        heading: "Zone 4: Proof",
        body: [
          "Reviews should cover taste, freshness, packaging and delivery. Prompt reviewers on these topics and allow photos. Add serving suggestions, pairings and recipes that show how the product is used. Origin and sourcing information builds trust where you can document it. See [[/blogs/ecommerce-product-reviews-ux|product reviews UX]].",
        ],
      },
      {
        heading: "Mobile Layout",
        body: [
          "On mobile, keep the decide zone and allergen summary above the fold, then use clearly labelled sections (ingredients, nutrition, storage, delivery) that expand without hiding the most important facts. Make nutrition tables scroll or reflow without breaking. See [[/blogs/grocery-ecommerce-mobile-ux|grocery mobile UX]].",
        ],
      },
      {
        heading: "Accessibility",
        body: [
          "Food information is safety information, so accessibility matters. Provide ingredients and nutrition as text, use real table markup for nutrition, don't rely on colour alone for allergen emphasis, and give images useful alt text. See [[/blogs/website-accessibility-guide|website accessibility]].",
        ],
      },
      {
        heading: "Worked Example: A Chilled Ready Meal Page",
        body: [
          "An illustrative scenario: a chilled lasagne sold for next-day delivery. The top of the page shows the photo as served, name, 400 g and two servings, price and price per 100 g, an allergen summary (contains milk, wheat, egg), the next delivery date with the order cut-off and an add button. Below: full ingredients with allergens in bold, a nutrition table per 100 g and per serving, storage (keep refrigerated, use within the date on pack, minimum days of life on arrival where guaranteed), reheating instructions, packaging (insulated box with ice packs) and reviews focused on taste, portion and freshness.",
        ],
      },
      {
        heading: "Common Food PDP Mistakes",
        body: [],
        checklist: [
          "Allergens only in an image of the label",
          "Nutrition table as an image",
          "Serving photos that overstate portion size",
          "No delivery date or cut-off on the page",
          "Dietary badges that contradict the ingredients",
          "Storage and shelf-life information missing",
        ],
      },
      {
        heading: "Food Product Page Checklist",
        body: [],
        checklist: [
          "Size, servings, price and unit price together",
          "Allergen summary near the top",
          "Full ingredients as text with allergens emphasized",
          "Nutrition as an accessible table",
          "Dietary badges verified",
          "Storage, shelf life and packaging explained",
          "Next delivery date and cut-off shown",
          "Reviews on taste and freshness",
          "Information matches current packaging",
        ],
        cta: {
          title: "Ready to redesign your food product pages?",
          description: "Talk to ZSpace about [[/services/ui-ux-design|food product page design]], [[/services/shopify-development|Shopify food builds]] and [[/services/cro-audit|conversion audits]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "The best food product pages make shoppers hungry and certain at the same time: appetizing, honest presentation with every fact they need before buying. For building the data behind these pages, see [[/blogs/food-ecommerce-website-development|food ecommerce website development]] and [[/blogs/shopify-food-store|Shopify food store]].",
        ],
      },
    ],
  },

  // -------------------------------------------------- 190 · GROCERY REDESIGN
  {
    slug: "grocery-ecommerce-redesign",
    title: "Grocery Ecommerce Redesign: How to Improve Online Grocery Shopping",
    seoTitle: "Grocery Ecommerce Redesign: Improve Online Grocery Shopping",
    excerpt:
      "How to redesign an online grocery store: evidence from baskets and search, protecting weekly habits, slots and substitutions, phased rollout and measurement.",
    category: "UI/UX",
    banner: "groceryredesign",
    bannerAlt:
      "Grocery redesign sequence: basket and slot data, search and aisles (highlighted), basket UX, slots and substitutions, build and migrate, then measure.",
    date: "2026-09-29",
    readingTime: "14 min read",
    relatedServiceSlugs: ["ui-ux-design", "cro-audit", "website-development"],
    relatedIndustrySlugs: ["food-beverage", "retail"],
    faqs: [
      { q: "When does an online grocery store need a redesign?", a: "When evidence shows structural problems: slow basket-building, poor search, confusing slots or fees, low trust in substitutions, weak mobile experience or a platform that can't support needed features." },
      { q: "What's the biggest risk in a grocery redesign?", a: "Disrupting weekly habits. Regular shoppers know where things are and how to reorder; moving everything at once can reduce orders from your most valuable customers." },
      { q: "What evidence should a grocery redesign start with?", a: "Basket composition, search logs and zero-result queries, slot and checkout abandonment, substitution rejections and refunds, support contacts and observation of real weekly shops." },
      { q: "Should a grocery redesign be launched all at once?", a: "Usually not. Phase the rollout, starting with the biggest friction, and let regular shoppers opt in or migrate gradually where possible." },
      { q: "How do I protect lists and order history in a redesign?", a: "Migrate saved lists, favourites, previous orders and preferences, and test that they work before launch. Losing them is a major reason regulars leave." },
      { q: "What should I measure after a grocery redesign?", a: "Time to basket, search success, slot and checkout conversion, substitution acceptance, weekly repeat rate and basket value, by new vs returning shoppers." },
      { q: "Does a grocery redesign require a new platform?", a: "Not always. Many improvements are UX and search changes. Replatform only when the current system blocks essential capabilities." },
      { q: "How long does a grocery redesign take?", a: "It depends on scope. Phased improvements can start delivering in weeks; full redesigns with replatforming take much longer." },
      { q: "How do I involve regular shoppers?", a: "Test prototypes with weekly shoppers, run beta programmes, and collect feedback after launch with clear ways to report problems." },
      { q: "How is this different from a general ecommerce redesign?", a: "General redesign guidance applies. Grocery adds weekly habits, lists, slots, substitutions and large baskets that must be protected." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A grocery ecommerce redesign should start from evidence and protect weekly habits. Gather basket data, search logs, slot and checkout abandonment, substitution rejections, refunds and observations of real weekly shops; identify the biggest friction; prototype the weekly shop end to end; test with regular shoppers; migrate lists, favourites and order history; roll out in phases; and measure time to basket, search success, substitution acceptance and weekly repeat rate for new and returning shoppers separately.",
        ],
      },
      {
        heading: "Why Grocery Redesigns Are Risky",
        body: [
          "Grocery customers form habits. They know how to reorder, where their items are and how substitutions work. A redesign that changes everything at once can slow down your most valuable shoppers, even if it helps new ones. The goal is to remove friction without breaking routines. For the general approach, see [[/blogs/ecommerce-website-redesign|ecommerce website redesign]].",
        ],
      },
      {
        heading: "Evidence to Gather",
        body: [],
        table: {
          headers: ["Source", "What it reveals"],
          rows: [
            ["Basket and order data", "Typical basket size, regulars, repeat rate"],
            ["Search logs", "Zero results, poor generic-term relevance"],
            ["Funnel analytics", "Postcode, slot, basket and checkout drop-off"],
            ["Substitution and refund data", "Trust and picking problems"],
            ["Support contacts", "Recurring confusion (slots, edits, fees)"],
            ["Observed weekly shops", "Time sinks on real phones"],
            ["Platform limitations", "Features you can't deliver today"],
          ],
        },
      },
      {
        heading: "Common Findings",
        body: [
          "Grocery audits often find similar issues: search that returns related items for generic terms, lists and previous orders buried in the account, slots and fees revealed late, substitution preferences hidden in checkout, weak mobile quantity controls and editing that's hard to find after checkout. Prioritize by how often each affects the weekly shop and how much it affects repeat orders. See [[/blogs/grocery-ecommerce-conversion-optimization|grocery CRO]].",
        ],
      },
      {
        heading: "Prototype the Weekly Shop",
        body: [
          "Design and test the whole loop, not isolated pages: arrive, check slot, add from lists and search, review basket, set substitutions, check out, edit before cut-off, receive delivery with substitutions and refunds. Test with regular shoppers using their real lists; time to basket is the headline metric.",
        ],
        cta: {
          title: "Planning a grocery redesign?",
          description: "ZSpace redesigns grocery journeys from evidence and tests them with the shoppers who order every week.",
        },
      },
      {
        heading: "Protect What Regulars Depend On",
        body: [],
        checklist: [
          "Saved lists, favourites and previous orders migrated",
          "Substitution preferences and notes preserved",
          "Delivery addresses and slot preferences kept",
          "Saved payment methods retained where possible",
          "Familiar aisle names and structure where they work",
          "Clear “what's changed” guidance at launch",
        ],
      },
      {
        heading: "Platform Decisions",
        body: [
          "Many grocery improvements are search tuning and UX changes on the existing platform. Replatforming is justified when essential capabilities are missing, such as store-level inventory, slot capacity, substitutions or performance at peak. See [[/blogs/ecommerce-replatforming|ecommerce replatforming]] and [[/blogs/grocery-ecommerce-website-development|grocery ecommerce development]].",
        ],
      },
      {
        heading: "Phased Rollout",
        body: [
          "Release in phases: for example search first, then basket and substitutions, then home and lists. Use beta groups or percentage rollouts where the platform allows, monitor weekly repeat and support contacts, and keep a rollback plan for each phase.",
        ],
      },
      {
        heading: "Worked Example: A Phased Grocery Redesign",
        body: [
          "An illustrative scenario: a regional grocer's online store has high first-order abandonment and falling weekly repeat. Evidence points to late slot visibility, poor search for generic terms and hard-to-find previous orders. Phase one tunes search and adds inline add on results; phase two moves slot selection and fees to the start and adds minimum-order progress; phase three rebuilds the returning shopper's home around regulars and lists. Each phase launches to a share of shoppers first, with time to basket, repeat rate and support contacts compared against the rest.",
        ],
      },
      {
        heading: "Common Grocery Redesign Mistakes",
        body: [],
        checklist: [
          "Losing saved lists or favourites in migration",
          "Renaming aisles shoppers know",
          "Launching before a peak holiday",
          "Measuring only new-shopper conversion",
          "Redesigning without search log analysis",
          "No rollback plan",
        ],
      },
      {
        heading: "Measuring Success",
        body: [],
        table: {
          headers: ["Metric", "Segment"],
          rows: [
            ["Time to basket", "Returning shoppers"],
            ["First-order conversion", "New shoppers"],
            ["Search success and zero results", "All"],
            ["Slot and checkout abandonment", "All"],
            ["Substitution acceptance and refunds", "All"],
            ["Weekly repeat and basket value", "Returning shoppers"],
          ],
        },
        cta: {
          title: "Ready to improve your online grocery store?",
          description: "Talk to ZSpace about [[/services/ui-ux-design|grocery UX redesign]], [[/services/cro-audit|grocery CRO audits]] and [[/services/website-development|grocery platform development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Grocery redesigns succeed when they fix measured friction without breaking weekly habits. Start from evidence, prototype the whole weekly shop, protect lists and preferences, roll out in phases and measure returning shoppers separately. For the UX principles, see [[/blogs/grocery-ecommerce-ux|grocery ecommerce UX]].",
        ],
      },
    ],
  },

  // ------------------------------------------------ 191 · B2B WEBSITE DESIGN
  {
    slug: "b2b-ecommerce-website-design",
    title: "B2B Ecommerce Website Design: Features, UX and Best Practices",
    excerpt:
      "How to design a B2B ecommerce website: account-aware pages, catalogs and specs, price display, quick order, quotes, approvals, account areas and design system.",
    category: "UI/UX",
    banner: "b2bdesign",
    bannerAlt:
      "B2B ecommerce website design in four areas: public site (clear who you serve, apply for an account, browse with or without prices, contact sales), logged-in storefront (company pricing, quick order, reorder panel, approvals banner), product pages (specs and documents, pack sizes and MOQs, tier pricing, stock by location) and account (orders and invoices, users and roles, addresses and terms, quotes).",
    date: "2026-09-29",
    readingTime: "18 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development", "shopify-development"],
    relatedIndustrySlugs: ["manufacturing", "ecommerce"],
    faqs: [
      { q: "What is B2B ecommerce website design?", a: "Designing an online store where businesses buy from businesses. It covers public pages for prospects, account-aware catalogs and pricing, efficient ordering (quick order, bulk add, quotes, approvals) and self-service account areas." },
      { q: "How does B2B ecommerce design differ from B2C?", a: "B2B buyers often know exactly what they need, order large quantities repeatedly, have negotiated prices, need approvals and invoices, and use the site as a work tool. Efficiency and accuracy matter more than persuasion." },
      { q: "Should B2B sites show prices publicly?", a: "It depends on your pricing model. Show list prices publicly when they're meaningful, and account-specific prices after login. Hiding all prices can deter new buyers; explain how to get pricing." },
      { q: "What features does a B2B ecommerce site need?", a: "Search by part number and spec, account-specific catalogs and prices, quick order and bulk add, quotes, approvals, multiple users and roles, multiple locations, payment on terms, invoices and reorder." },
      { q: "What makes a good B2B product page?", a: "Detailed specifications, documents (datasheets, certificates, CAD files), pack sizes and minimum order quantities, availability and lead times, account pricing and volume breaks, and related parts." },
      { q: "How should B2B navigation work?", a: "Categories that match how buyers classify products, strong search by part number and spec, filters by technical attributes and shortcuts to recent orders and lists." },
      { q: "Do B2B sites need a design system?", a: "Usually yes. B2B sites have many dense components (tables, filters, forms, account screens), and a design system keeps them consistent and faster to build." },
      { q: "Can Shopify support B2B website design?", a: "Shopify supports B2B features including companies, locations, catalogs, price breaks, quantity rules, net terms and quick order lists, with some capabilities limited to Shopify Plus. Complex quoting or configuration may need apps or custom development." },
      { q: "How do I serve both B2B and B2C?", a: "Use shared product data with separate experiences by customer type: different pricing, catalogs, ordering tools and checkout options, on one platform or separate storefronts." },
      { q: "How is this different from B2B ecommerce UX?", a: "The UX guide focuses on buyer workflows. This guide covers the site's page types, features and design decisions." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "B2B ecommerce website design turns a store into a work tool for business buyers. Public pages must explain products and how to buy; catalogs need search by part number and filters by specification; pricing must reflect each account; ordering must support quick order, bulk add, quotes and approvals; and the account area must handle users, roles, locations, orders, invoices and reorders. Design for accuracy and speed over persuasion, use a design system for dense components and test with real buyers doing real tasks.",
        ],
      },
      {
        heading: "Who You're Designing For",
        body: [
          "B2B sites serve several people inside one customer: purchasing staff placing routine orders, engineers or specifiers researching products, approvers controlling spend and finance teams handling invoices. Each has different tasks. The diagram above maps the page types they use. For workflow-level UX, see [[/blogs/b2b-ecommerce-ux|B2B ecommerce UX]]; for the build, see [[/blogs/b2b-ecommerce-website-development|B2B ecommerce website development]].",
        ],
        table: {
          headers: ["Role", "Main tasks", "Design priority"],
          rows: [
            ["Buyer / purchaser", "Routine orders, reorders", "Quick order, lists, reorder"],
            ["Specifier / engineer", "Find the right part", "Specs, documents, filters, comparisons"],
            ["Approver", "Control spend", "Approval queue, budgets, clear order details"],
            ["Finance", "Pay and reconcile", "Invoices, statements, payment on terms"],
            ["Admin", "Manage the account", "Users, roles, locations"],
          ],
        },
      },
      {
        heading: "Public Pages: Prospects and Specifiers",
        body: [
          "Not every visitor has an account. Public pages should explain what you sell, who you sell to and how to buy: product information, specifications and documents, how pricing works, minimum orders and how to open an account. Make “Request access” or “Open an account” easy and explain how long approval takes. Gated catalogs lose search visibility and frustrate specifiers; gate prices rather than product information when possible.",
        ],
      },
      {
        heading: "Pricing Display",
        body: [
          "B2B pricing is often account-specific: contract prices, price lists, volume breaks and customer discounts. Show logged-in buyers their own price with breaks, and show public visitors list prices or clear instructions. Never show a price that won't be honoured at checkout or invoice. See [[/blogs/b2b-ecommerce-pricing|B2B ecommerce pricing]].",
        ],
        callout: {
          type: "tip",
          text: "Show the buyer's price, the break they're currently in and the next break on product pages and in the cart. “Order 12 more for the next price tier” is useful information, not an upsell.",
        },
      },
      {
        heading: "Catalog and Product Pages",
        body: [
          "B2B catalogs can hold thousands of SKUs with technical attributes. Categories should match how buyers classify products; filters should use specifications; search must handle part numbers, supplier references and partial codes. Product pages need full specs, documents, pack sizes, minimum order quantities, availability and lead times, and related or replacement parts. See [[/blogs/b2b-ecommerce-product-catalog|B2B product catalog]] and [[/blogs/b2b-ecommerce-search|B2B search]].",
        ],
        table: {
          headers: ["Product page element", "B2B detail"],
          rows: [
            ["Specifications", "Full technical table, units, tolerances"],
            ["Documents", "Datasheets, certificates, safety sheets, CAD"],
            ["Ordering", "Pack size, MOQ, increments, account price, breaks"],
            ["Availability", "Stock by warehouse, lead time"],
            ["Related", "Accessories, replacements, alternatives"],
          ],
        },
      },
      {
        heading: "Ordering Tools",
        body: [
          "B2B buyers often know exactly what they need. Give them fast routes: quick order by SKU and quantity, bulk add from spreadsheets or pasted lists, saved lists, reorder from history and variant grids for adding many sizes at once. Enforce quantity rules (minimums, increments) in the interface with clear messages. See [[/blogs/b2b-ecommerce-reordering|B2B reordering]].",
        ],
        cta: {
          title: "Designing a B2B store buyers will actually use?",
          description: "ZSpace designs B2B ecommerce around real buyer roles, account pricing and fast ordering.",
        },
      },
      {
        heading: "Quotes and Approvals",
        body: [
          "Large or custom orders often need a quote. Let buyers request quotes from the cart or product page, track status and convert approved quotes to orders. Approval workflows let buyers submit orders that approvers review against limits. Design both as clear, trackable states. See [[/blogs/b2b-ecommerce-rfq|B2B RFQ]].",
        ],
      },
      {
        heading: "Checkout for Business Buyers",
        body: [],
        checklist: [
          "Choose delivery location from saved company locations",
          "Purchase order number field",
          "Payment on terms, card, bank transfer or ACH as agreed",
          "Delivery date or partial delivery options",
          "Order notes for receiving teams",
          "Tax exemption handling where applicable",
        ],
      },
      {
        heading: "Account Area",
        body: [
          "The account area is where B2B customers spend much of their time: orders and tracking, invoices and statements, users and roles, locations, lists, quotes and approvals. Design it as a dashboard with clear navigation, searchable tables and exportable data. See [[/blogs/b2b-ecommerce-customer-portal|B2B customer portal]].",
        ],
      },
      {
        heading: "Visual Design and Design Systems",
        body: [
          "B2B interfaces are dense: tables, filters, forms and status indicators. Clarity beats decoration. A design system with components for data tables, filters, quantity inputs, status badges and forms keeps the experience consistent and speeds up development. See [[/blogs/design-systems-for-teams-that-move-fast|design systems]].",
        ],
      },
      {
        heading: "Platform Considerations",
        body: [
          "Shopify's B2B features include companies and locations, catalogs, price breaks, quantity rules, net terms, vaulted payment methods and quick order lists on all plans, with some capabilities such as unlimited catalogs, deposits and checkout customization limited to Shopify Plus ([[https://help.shopify.com/en/manual/b2b|Shopify Help Center]]). Complex quoting, configuration or ERP-driven pricing may need apps, custom development or a specialized B2B platform.",
        ],
      },
      {
        heading: "Worked Example: An Industrial Distributor",
        body: [
          "An illustrative scenario, not a client case: a distributor of industrial consumables with around 20,000 SKUs sells to maintenance teams and contractors. Public pages show full product information and list prices with an “Open a trade account” route. Logged-in buyers see their contract prices, stock at their nearest branch and lead times. Search handles SKUs, manufacturer part numbers and customer part numbers. Product pages carry datasheets and safety data sheets. Quick order and CSV upload serve buyers who reorder from their own systems. Orders above a buyer's limit route to an approver. The account area shows invoices and statements from the ERP.",
          "The team measures online share of orders, time to reorder, search success for identifier queries and the reduction in routine calls to branches.",
        ],
      },
      {
        heading: "B2B Design Research",
        body: [
          "B2B design research needs real buyers and real tasks. Observe purchasing staff placing typical orders, engineers finding a part to a specification and approvers reviewing orders. Use their actual order histories where possible. Analyse search logs for identifier queries and support contacts for recurring confusion. Sales reps are a useful source of hypotheses but not a substitute for buyers. See [[/blogs/user-research-methods|user research methods]].",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Hiding all product information behind login",
          "Showing prices that differ from invoices",
          "Search that can't find part numbers",
          "No quick order or bulk add",
          "Quantity rules enforced only at checkout",
          "Account areas that can't show invoices",
          "Designing a B2C store with a login added",
        ],
        cta: {
          title: "Ready to design your B2B ecommerce site?",
          description: "Talk to ZSpace about [[/services/ui-ux-design|B2B UX and design]], [[/services/website-development|B2B platform development]] and [[/services/shopify-development|Shopify B2B]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "B2B ecommerce design is about making buying work easier: accurate account pricing, fast ordering, reliable information and self-service accounts. Design for each role, test with real buyers and treat the site as a tool customers use every week. For B2B vs B2C differences, see [[/blogs/b2b-vs-b2c-ecommerce|B2B vs B2C ecommerce]].",
        ],
      },
    ],
  },

  // -------------------------------------------------- 192 · B2B PRODUCT CATALOG
  {
    slug: "b2b-ecommerce-product-catalog",
    title: "B2B Ecommerce Product Catalog: How to Organize Complex Product Data",
    seoTitle: "B2B Ecommerce Product Catalog: Organize Complex Product Data",
    excerpt:
      "How to organize a B2B product catalog: taxonomy, attributes and units, variants and pack sizes, documents, account catalogs, PIM and ERP sources and data quality.",
    category: "Web Development",
    banner: "b2bcatalog",
    bannerAlt:
      "B2B product catalog in four columns: taxonomy (categories buyers use, families and variants, accessories and spares, replacements), product data (SKUs and part numbers, specs with units, pack and case sizes, compliance data), catalog access (catalogs per account, assortment rules, hidden SKUs, contract items) and documents (datasheets, certificates, manuals, safety sheets).",
    date: "2026-09-29",
    readingTime: "17 min read",
    relatedServiceSlugs: ["website-development", "ui-ux-design", "shopify-development"],
    relatedIndustrySlugs: ["manufacturing", "ecommerce"],
    faqs: [
      { q: "What is a B2B ecommerce product catalog?", a: "The structured set of products a business sells online to other businesses: taxonomy, product families and variants, technical attributes, pack sizes, documents, and rules about which accounts can see and buy which products." },
      { q: "How should a B2B catalog be organized?", a: "By how buyers classify products (type, application, industry), with product families grouping related variants, consistent technical attributes per category and clear rules for account visibility." },
      { q: "What attributes do B2B products need?", a: "Technical specifications with units, dimensions and tolerances, materials, compliance and certifications, pack sizes, minimum order quantities, order increments and identifiers such as SKU, manufacturer part number and GTIN where relevant." },
      { q: "Where should B2B product data live?", a: "Often in a PIM for descriptive and technical data and an ERP for prices, stock and order rules, with the ecommerce platform receiving data from both." },
      { q: "What are account-specific catalogs?", a: "Catalogs that control which products and prices a particular company or segment can see and buy, used for contracts, regional ranges and restricted products." },
      { q: "How should variants be handled in B2B?", a: "Group variants into product families where buyers choose between options, and use separate products when variants differ substantially in specs or use. Very large variant counts may need a different structure." },
      { q: "How should discontinued products be handled?", a: "Keep pages available where useful, mark them discontinued and link to replacements, so buyers with old part numbers can still find the right product." },
      { q: "How do I improve catalog data quality?", a: "Define required attributes per category, validate units and formats, assign ownership, monitor completeness and fix issues at the source system." },
      { q: "Does Shopify handle large B2B catalogs?", a: "Shopify supports B2B catalogs and large product counts, with platform limits on variants and API throughput that large catalogs should plan for. Check current limits against your catalog size." },
      { q: "How is this different from B2B search?", a: "This guide covers structuring the catalog data. The B2B search guide covers how buyers find products in it." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A B2B product catalog works when its structure matches how buyers think and its data is complete and consistent. Organize categories by buyer logic, group variants into product families, define required technical attributes with units per category, attach documents such as datasheets and certificates, capture pack sizes, minimum order quantities and increments, control visibility with account catalogs, and handle discontinued products with replacements. Keep descriptive data in a PIM and commercial data in the ERP, and monitor quality continuously.",
        ],
      },
      {
        heading: "Why B2B Catalogs Are Hard",
        body: [
          "B2B catalogs often contain thousands to hundreds of thousands of SKUs, with technical attributes that differ by category, supplier data in inconsistent formats, multiple identifiers per product and rules about who can buy what. Catalog quality directly affects search, filters, product pages, feeds and order accuracy. The diagram above shows the four areas to structure: taxonomy, product data, catalog access and documents.",
        ],
      },
      {
        heading: "Taxonomy",
        body: [
          "Categories should reflect how buyers classify products, not internal departments or supplier structures. Many B2B buyers look by product type; others by application or industry. Use a primary hierarchy by type and add secondary navigation by application or industry where it helps. Validate with card sorting and search logs. See [[/blogs/information-architecture|information architecture]].",
        ],
      },
      {
        heading: "Product Families and Variants",
        body: [
          "A product family groups items buyers choose between: the same fastener in different lengths, the same glove in different sizes. Families simplify browsing and product pages. Separate products when variants differ in specification or application enough that buyers compare them as different products. Very large families may need variant grids or tables rather than dropdowns.",
        ],
        table: {
          headers: ["Situation", "Structure"],
          rows: [
            ["Same product, different size or colour", "One family, variants"],
            ["Same product, different pack sizes", "Variants or order units, clearly labelled"],
            ["Different materials or ratings", "Separate products or family with spec table"],
            ["Hundreds of variants", "Family page with filterable variant table"],
          ],
        },
      },
      {
        heading: "Attributes and Units",
        body: [
          "Define an attribute set for each category: which specs are required, their units and allowed values. Normalize units so filters work (mm vs inches, kg vs lb), store numeric values separately from display text, and keep identifiers (SKU, manufacturer part number, GTIN, customer part numbers) in dedicated fields. Consistent attributes power filters, comparisons and search. See [[/blogs/ecommerce-product-data-ai-search|product data for AI search]].",
        ],
        callout: {
          type: "tip",
          text: "Start attribute work with the filters buyers need most in each category. A complete set of ten attributes beats an incomplete set of fifty.",
        },
      },
      {
        heading: "Ordering Attributes",
        body: [],
        table: {
          headers: ["Attribute", "Example", "Used for"],
          rows: [
            ["Pack size / unit of measure", "Box of 100", "Price display, quantity input"],
            ["Minimum order quantity", "5 boxes", "Quantity validation"],
            ["Order increment", "Multiples of 5", "Quantity validation"],
            ["Lead time", "3–5 days", "Availability messaging"],
            ["Hazardous / restricted", "Yes", "Shipping and access rules"],
          ],
        },
      },
      {
        heading: "Documents and Assets",
        body: [
          "B2B buyers often need documents before ordering: datasheets, certificates of conformity, safety data sheets, installation guides, CAD files. Store them as structured assets linked to products (with type, language and version), make them downloadable from product pages and searchable where useful.",
        ],
        cta: {
          title: "Catalog data holding back your B2B store?",
          description: "ZSpace structures B2B catalogs, attributes and integrations so buyers can find and order the right parts.",
        },
      },
      {
        heading: "Access: Account Catalogs and Restrictions",
        body: [
          "Many B2B businesses show different products and prices to different customers: contract ranges, regional availability, restricted products for licensed buyers. Model these as catalogs or rules assigned to companies or segments. Shopify B2B, for example, uses catalogs assigned to company locations to control products and prices ([[https://help.shopify.com/en/manual/b2b|Shopify Help Center]]).",
        ],
      },
      {
        heading: "Sources of Truth: PIM, ERP and Platform",
        body: [
          "Catalog data rarely starts in the ecommerce platform. Decide which system owns each field, sync in one direction per field and avoid editing the same data in two places. A common split is shown below; smaller businesses may keep descriptive data in the platform itself. See [[/blogs/b2b-ecommerce-erp-integration|B2B ERP integration]].",
        ],
        table: {
          headers: ["System", "Typically owns"],
          rows: [
            ["ERP", "SKUs, prices, stock, order rules, customers"],
            ["PIM", "Descriptions, attributes, assets, translations"],
            ["DAM", "Images and media (sometimes in PIM)"],
            ["Ecommerce platform", "Merchandising, storefront presentation"],
          ],
        },
      },
      {
        heading: "Scale and Platform Limits",
        body: [
          "Large catalogs test platform limits and integrations. Shopify documents limits such as a maximum of 2,048 variants per product and restrictions on how quickly stores above a large variant count can add new variants on non-Plus plans; API calls are rate-limited, and pagination has limits ([[https://shopify.dev/docs/api/usage/limits|Shopify developer docs]]). Plan bulk imports, sync jobs and catalog structure against current limits.",
        ],
      },
      {
        heading: "Discontinued Products and Replacements",
        body: [
          "Buyers reorder from old part numbers and old documents. Keep discontinued product pages where useful, mark them clearly, link to replacements and redirect when a page must go. Map old identifiers to new products in search.",
        ],
      },
      {
        heading: "Worked Example: Normalizing Supplier Data",
        body: [
          "An illustrative scenario: a distributor imports products from 40 suppliers. Lengths arrive as “40mm”, “40 mm”, “4cm” and “1.57in”; materials as “SS”, “Stainless”, “A2” and “304”. The team defines attribute sets per category with units and allowed values, maps supplier values on import (storing the original alongside the normalized value), flags products missing required attributes and prioritizes fixes by sales. Filters and search become consistent, and supplier onboarding includes a data template. See [[/blogs/ecommerce-product-feeds|product feeds]].",
        ],
      },
      {
        heading: "Catalog Presentation",
        body: [
          "Structure drives presentation. Category pages for technical products often work better as filterable tables than image grids, with key attributes as columns. Product family pages can show a variant table with specs, pack sizes, availability and quantity inputs. Keep images consistent and useful (product, dimensions drawing), and put documents where specifiers expect them. See [[/blogs/ecommerce-category-page-design|product listing page UX]].",
        ],
      },
      {
        heading: "Data Quality",
        body: [],
        checklist: [
          "Required attributes defined per category",
          "Completeness monitored by category and supplier",
          "Units and formats validated on import",
          "Owners assigned for each data domain",
          "Fixes made at the source system",
          "Regular audits of top-selling products",
        ],
        cta: {
          title: "Ready to organize your B2B catalog?",
          description: "Talk to ZSpace about [[/services/website-development|B2B catalog and integration builds]], [[/services/ui-ux-design|B2B catalog UX]] and [[/services/shopify-development|Shopify B2B]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A well-structured B2B catalog makes search, filters, product pages and ordering accurate. Organize by buyer logic, define attributes and units, attach documents, control access and keep data flowing from the right source systems. For how buyers find products in it, see [[/blogs/b2b-ecommerce-search|B2B ecommerce search]].",
        ],
      },
    ],
  },
];
