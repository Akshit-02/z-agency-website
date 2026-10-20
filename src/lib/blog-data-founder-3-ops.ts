import type { BlogPost } from "./blog-data";

/**
 * Founder Batch 3 operations set (topics 49 and 55 in
 * docs/seo/founder-batch-3/03-batch-3-decisions.md): Shopify multi-location
 * inventory, and testing a website prototype before development.
 * No prices or cost ranges are quoted (owner decision). No figure here is
 * ZSpace client data; worked examples are labelled hypothetical.
 *
 * Sources checked 2026-10-15:
 * - Shopify Help: setting up locations (limits by plan, 3PL app locations,
 *   online-orders setting); inventory states; order routing; local delivery;
 *   pickup in store; inventory transfers; multi-managed inventory; Stocky;
 *   Shopify Flow (plans); Shopify Fulfillment Network; Shopify Payments
 *   supported countries (India not listed); Shop channel availability.
 * - shopify.dev: Order Routing Location Rule Function API (Plus only, by
 *   request; unsupported for subscriptions, pre-orders/TBYB, checkout edits).
 * - Shopify changelog: transfers flexibility (6 Jan 2026); purchase orders
 *   create transfers (22 Jun 2026); new SFN partners (26 Aug 2025).
 * - FreightWaves: Flexport completes acquisition of Shopify logistics
 *   business (6 Jun 2023).
 * - NN/g: Pernice (fidelity, 2016); Whitenton (unmoderated testing, 2019);
 *   McCloskey (task scenarios, 2014); Chan (AI prototyping, Sep 2026);
 *   Wang and Brown (AI prototyping, Oct 2025); Nielsen (5 users).
 * - Figma Help: guide to prototyping; variables in prototypes (paid plans).
 * - Figma community forum thread on text inputs (community source, worded
 *   cautiously). Google Research: Schirra et al., CHI 2023 EA.
 */
export const founderOpsPosts3: BlogPost[] = [
  {
    slug: "shopify-multi-location-inventory-management",
    title: "How to Manage Shopify Inventory Across Multiple Warehouses and Sales Channels",
    seoTitle: "Shopify Multi-Location Inventory: A Practical Guide",
    excerpt:
      "How Shopify handles stock across warehouses, stores and 3PLs: location limits, inventory states, order routing, transfers, Stocky's shutdown and setup checks.",
    category: "Shopify & Ecommerce",
    banner: "integration",
    sceneKind: "orders",
    bannerAlt:
      "A Shopify store connected to a warehouse, a retail shop and a third-party logistics provider, with order routing rules deciding which location fulfils each order",
    date: "2026-10-15",
    readingTime: "13 min read",
    relatedServiceSlugs: ["shopify-development", "website-development"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "retail", "fashion-apparel"],
    relatedSlugs: ["oms-vs-ims", "distributed-order-management", "ecommerce-inventory-management-integration"],
    faqs: [
      {
        q: "How many locations can a Shopify store have?",
        a: "Shopify's help centre lists active location limits of 2 on Starter, 10 on Basic, Grow and Advanced, and 200 on Shopify Plus (checked 15 October 2026). Deactivated locations do not count, and apps that physically stock inventory for you, such as 3PL apps, are treated as locations but do not count toward the limit. Limits can change, so check the current page.",
      },
      {
        q: "Why does Shopify show a product as out of stock when we have units on the shelf?",
        a: "Usually because the units are not in the Available state at a location that sells online. Units can be Committed to unfulfilled orders, draft orders or transfers marked ready to ship, held as Unavailable (damaged, quality control, safety stock), still Incoming, or sitting at a location where the setting that makes inventory available for online orders is switched off.",
      },
      {
        q: "Can I write my own order routing logic on Shopify?",
        a: "Within the admin you can reorder and customise routing rules, including rules based on location metafields. Fully custom routing through the Order Routing Location Rule Function API is available only by request to Shopify Plus merchants, and Shopify's documentation says it does not support subscriptions, pre-orders, Try Before You Buy or checkout order edits.",
      },
      {
        q: "What replaced Stocky?",
        a: "Shopify says Stocky is no longer available after 31 August 2026 and that merchants need to move to the inventory management features in the Shopify admin. For needs the admin does not cover, such as demand forecasting, the options are dedicated inventory planning apps or a full inventory or ERP system. Compare them on the workflows you actually used in Stocky.",
      },
      {
        q: "Is Shopify Fulfillment Network still Shopify's own warehouse service?",
        a: "No. Shopify sold its logistics business, including Deliverr, to Flexport, and the deal completed on 6 June 2023. Today the Shopify Fulfillment Network app connects you with third-party logistics partners who store and ship your stock. You contract and pay according to the partner's terms, so check them directly.",
      },
      {
        q: "Can I use Shopify Flow for low-stock alerts on the Starter plan?",
        a: "No. Shopify describes Flow as a free app available on the Basic, Grow, Advanced and Plus plans, so Starter stores need another approach, such as an inventory app with alerts or a manual review routine.",
      },
    ],
    content: [
      {
        heading: "Can Shopify manage inventory across warehouses and channels on its own?",
        body: [
          "**For many growing stores, yes. Shopify tracks stock per location, splits each location's stock into five states, routes online orders to locations by rules you control, and moves stock between locations with transfers and purchase orders. It runs out of road when you need demand forecasting, kitting or bundles across warehouses, complex marketplace allocation, or routing logic beyond the admin's rules, which only Plus stores can extend, and only on request.**",
          "This guide is for founders and operations leads adding a second warehouse, a retail shop or a 3PL. It covers what Shopify itself does, where it stops, and how to set locations up so stock counts match reality. For the theory behind order management and inventory systems, see [[/blogs/oms-vs-ims|the difference between an OMS and an IMS]] and [[/blogs/distributed-order-management|how distributed order management works]]. This page sticks to Shopify's mechanics.",
          "Everything here was checked on Shopify's own help centre, developer docs and changelog on 15 October 2026. Shopify changes these features often, so recheck anything you are about to rely on.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Location limits: 2 on Starter, 10 on Basic, Grow and Advanced, 200 on Plus. 3PL app locations do not count toward the limit.",
          "Only Available units can be sold. On hand equals Committed plus Unavailable plus Available; Incoming is not sellable until received.",
          "Order routing needs at least two active locations. The default rules minimise split shipments, stay within the destination market, then ship from the closest location.",
          "Custom routing through a Shopify Function is Plus-only, by request, and does not support subscriptions.",
          "Stocky is no longer available after 31 August 2026. Purchase orders now live in the admin and create linked transfers.",
          "Shopify Fulfillment Network is now a marketplace of 3PL partners, not Shopify-run warehouses.",
        ],
      },
      {
        heading: "Locations: what counts and what the limits are",
        body: [
          "A location is any place you stock products, fulfil orders or sell in person: a warehouse, a shop, a pop-up or a supplier that ships for you. Shopify's location setup page lists these limits on active locations:",
        ],
        table: {
          headers: ["Plan", "Active locations", "Notes"],
          rows: [
            ["Starter", "2", "Shopify Flow is not available on this plan"],
            ["Basic", "10", ""],
            ["Grow", "10", ""],
            ["Advanced", "10", ""],
            ["Shopify Plus", "200", "Also the only plan that can request custom routing Functions"],
          ],
        },
      },
      {
        heading: "Locations: settings that change what you can sell",
        body: [
          "Three details catch most stores out. First, deactivated locations do not count toward the limit, but you cannot deactivate your default location without changing the default first. Second, apps that physically stock inventory for you, such as 3PL, dropshipping and custom fulfilment service apps, are treated as locations but do not count toward the limit. Third, each location has a setting that makes its inventory available to fulfil online orders. It is on by default for new locations. Turn it off for a shop whose stock should not be promised to web customers, and that stock stops counting toward online sales.",
          "If you hold the same product in your own warehouse and at a 3PL, Shopify's multi-managed inventory page says fulfilment services are being migrated, from February 2026, to support stock for one product at your locations and the fulfilment app at the same time. Older services are updated automatically. Confirm with your 3PL app that it handles split stock before you rely on it.",
        ],
      },
      {
        heading: "The five inventory states, and why stock seems to disappear",
        body: [
          "Shopify's inventory states page splits each location's stock into five states:",
        ],
        table: {
          headers: ["State", "What it means", "Sellable?"],
          rows: [
            ["On hand", "All units at the location. Equals Committed + Unavailable + Available.", "Partly"],
            ["Available", "Units you can sell: not committed and not set aside.", "Yes"],
            ["Committed", "Set aside for unfulfilled orders, reserved in draft orders, or in a transfer marked ready to ship.", "No"],
            ["Unavailable", "Set aside by apps or held for other reasons, such as damaged, quality control or safety stock.", "No"],
            ["Incoming", "On the way from a transfer, purchase order or app. Becomes Available only when received.", "Not yet"],
          ],
        },
      },
      {
        heading: "Worked example: how much can you actually sell online?",
        body: [
          "**Hypothetical example:** a skincare brand stocks one serum in a main warehouse and a retail shop. The numbers are invented to show the arithmetic.",
        ],
        table: {
          headers: ["Line", "Main warehouse", "Retail shop"],
          rows: [
            ["On hand", "120", "14"],
            ["Committed (unfulfilled online orders)", "18", "0"],
            ["Committed (transfer to the shop, marked ready to ship)", "6", "0"],
            ["Unavailable: damaged", "4", "1"],
            ["Unavailable: safety stock held back", "10", "0"],
            ["Available (on hand minus committed minus unavailable)", "82", "13"],
            ["Incoming (purchase order not yet received)", "40", "6 (the transfer)"],
            ["Location set to fulfil online orders?", "Yes", "No"],
            ["Units online customers can buy", "82", "0"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "In this example the team thinks it has 134 units, plus 40 on order. Online customers can buy 82. The gap is not a bug: it is committed orders, a transfer in progress, damaged and safety stock, a purchase order not yet received, and a shop that does not sell online. Check those five things before raising a support ticket.",
        },
      },
      {
        heading: "Order routing: who ships which order",
        body: [
          "When an online order arrives, Shopify picks the fulfilling location using order routing. Routing needs two or more active locations. It applies rules in sequence, and the default strategy is: minimise split fulfilments by choosing locations that can fulfil every item, stay within the destination market where possible, then ship from the closest location. You can change the order of rules and add custom rules that prioritise particular warehouses or balance stock. You can also base rules on location metafields, for example a warehouse's capacity or fulfilment speed. New locations go to the bottom of the routing list, so review it every time you add one.",
          "If the admin rules cannot express your logic, Shopify Plus stores can request access to the Order Routing Location Rule Function API and run their own code. The documentation states it is available only by request for Plus merchants. It does not support subscriptions (recurring orders), pre-orders or Try Before You Buy, or order edits at checkout. Admin order edits are supported only for new items, and POS only when shipping to a customer. If a large share of your revenue is subscriptions, custom routing will not cover those orders.",
          "In plain English: routing decides where an order should ship from. It does not create stock. If the best location is empty, routing falls back to the next rule, which may mean a split shipment or a more distant warehouse.",
        ],
      },
      {
        heading: "Local delivery and pickup: per-location limits",
        body: [
          "Both are set up per location, so they interact with your stock data. From Shopify's local delivery and pickup in store pages:",
        ],
        checklist: [
          "Local delivery allows up to 10 delivery zones per location, with a radius of up to 160 km (100 miles) or postal code lists of up to 3,000 characters, and up to 3 extra price rules per zone.",
          "Local delivery is not supported at B2B checkout. It is not offered when the customer chooses Apple Pay, Google Pay, Amazon Pay or PayPal in the first checkout step, though it works with Shop Pay.",
          "Shipped and locally delivered items cannot be combined in one order. Zones do not cross a country border.",
          "By default, pickup is offered only when the entire order is in stock at the pickup location. You can enable store transfers to move stock to the pickup location, with its own processing time.",
          "Customers see pickup locations only in their own country, and each pickup location needs a shipping zone.",
        ],
      },
      {
        heading: "3PLs, and what happened to Shopify Fulfillment Network",
        body: [
          "Shopify once ran its own fulfilment business. That changed in 2023: Flexport completed its acquisition of Shopify's logistics business, including Deliverr, on 6 June 2023, with Shopify taking an equity stake. Older guides that describe the network as Shopify's own warehouses are out of date.",
          "Today the Shopify Fulfillment Network app connects you with third-party logistics providers that store your stock and fulfil orders for you, managed from the admin. On 26 August 2025 Shopify's changelog announced five new partners: Amazon Multi-Channel Fulfillment, DHL Fulfillment Network, Bigblue, Mayple and GoBolt. Pricing, minimum volumes and countries served are set by each partner, so check them directly.",
          "Whether your 3PL comes through that app or its own integration, the inventory questions are the same: which system is the source of truth for counts, how often counts sync, and what happens to orders the 3PL rejects. Our guide to [[/blogs/ecommerce-fulfilment-integration|3PL and fulfilment integration]] covers the message flows.",
        ],
      },
      {
        heading: "Transfers and purchase orders after the 2026 changes",
        body: [
          "Transfers move stock between your locations, or to and from external locations such as suppliers. Shipments are created automatically, and you can receive all or part of a shipment. Two changelog updates matter this year:",
        ],
        checklist: [
          "6 January 2026: you can add, remove or adjust items in a shipment even after it is in transit or received; leave the origin blank to record stock arriving from outside Shopify; leave the destination blank to write stock off or send it to an untracked location.",
          "22 June 2026: purchase orders create a linked transfer when you are ready to receive them. Stock can be received in the admin or in POS, one transfer can hold several shipments, line items can be imported by CSV, and costs pre-fill from previous purchase prices or the product's cost per item.",
        ],
        callout: {
          type: "tip",
          text: "Use a write-off transfer (blank destination) for damaged stock you are disposing of, rather than editing the on-hand count. You keep a record of what left and why.",
        },
      },
      {
        heading: "Stocky is gone: what to do now",
        body: [
          "Shopify's Stocky page says the app \"will no longer be available after August 31st, 2026\" and that merchants need to move to the inventory management features in the admin. It can no longer be installed. Shopify also advises against uninstalling it because data might not be retrievable afterwards. If you still have access, keep it installed until you have your records.",
          "The replacement options fall into three groups. Native admin inventory, with purchase orders, transfers and counts, suits stores whose Stocky use was mainly POs and receiving. Inventory planning apps add forecasting, reorder suggestions and supplier management on top of Shopify. A full inventory management or ERP system suits stores that also need manufacturing, kitting, multi-entity accounting or many marketplaces. Pick based on the workflows you actually used, not on feature lists.",
        ],
        checklist: [
          "List every Stocky workflow your team used: purchase orders, receiving, stocktakes, supplier records, reorder points, reports.",
          "Export what you can of open and historical purchase orders, supplier details, cost history and stocktake results, and store them outside Shopify.",
          "Recreate open purchase orders in the admin so receiving creates transfers.",
          "Decide where reorder logic now lives: a person, a Flow workflow, or a planning app.",
          "Run one full receiving and one stock count in the new process before your next busy period.",
        ],
      },
      {
        heading: "Automating alerts with Shopify Flow",
        body: [
          "Shopify Flow is a free automation app on the Basic, Grow, Advanced and Plus plans. It is not on Starter. Inventory workflows are triggered when a product variant's inventory quantity changes. Typical uses are a low-stock email or chat alert, tagging items when they are restocked, or hiding a product when it reaches zero. Test each workflow on a single product first: a loose condition can hide a whole collection.",
        ],
      },
      {
        heading: "Location setup checklist",
        body: [
          "Use this when adding a warehouse, shop or 3PL. Each item is something Shopify lets you configure; none needs an app.",
        ],
        checklist: [
          "Name each location for what it is (\"Main warehouse\", \"Shop: High Street\", \"3PL: partner name\"), not for a person or a project.",
          "Check the plan's active location limit before signing a lease or a 3PL contract. Remember 3PL app locations do not count.",
          "Decide for each location whether its stock should be available for online orders, and set it.",
          "Confirm which location is the default, and that it is one you will not need to deactivate.",
          "Enter opening stock as on-hand counts, then move damaged, quality control and safety stock into Unavailable so Available is honest.",
          "Review the order routing rule order. New locations go to the bottom of the list.",
          "Run four test orders: one each to near and far addresses, one with items held at different locations, and one to another market if you sell abroad.",
          "If offering pickup or local delivery, set zones, a shipping zone for each pickup location, and decide whether store transfers are allowed.",
          "Decide which system is the source of truth for each location's counts (Shopify, the 3PL or an IMS) and write it down.",
          "Set up low-stock alerts (Flow, or an app on Starter) and a monthly count for each location.",
        ],
      },
      {
        heading: "When native Shopify is not enough",
        body: [
          "Native features are usually enough with a few locations, one or two channels and simple products. Look beyond them when one of these applies:",
        ],
        table: {
          headers: ["Situation", "Why native features struggle", "Typical next step"],
          rows: [
            ["Bundles or kits built from shared components", "Stock is tracked per variant, not per component", "Bundle app, or IMS with bill of materials"],
            ["Several marketplaces with their own stock pools", "Marketplace sync depends on each channel app", "Multichannel IMS as source of truth"],
            ["Reordering needs forecasting", "The admin records POs but does not forecast", "Inventory planning app"],
            ["Routing depends on rules the admin cannot express", "Custom Functions are Plus-only, by request", "Plus with a custom Function, or an OMS"],
            ["Subscriptions with complex routing", "Custom routing Functions do not support subscriptions", "Keep routing simple, or route in an OMS"],
            ["Finance needs landed cost and multi-entity stock", "Accounting depth is outside Shopify's scope", "ERP integration"],
          ],
        },
      },
      {
        heading: "Before adding another system",
        body: [
          "Adding a system brings sync delays, mapping work and another source of truth to argue with, so do it for a specific gap, not by default. The patterns are in our guide to [[/blogs/ecommerce-inventory-management-integration|inventory management integration]] and the wider [[/blogs/shopify-business-systems-integration-guide|Shopify business systems integration guide]]. If you need help mapping locations, routing and 3PL sync, ZSpace Labs offers [[/services/shopify-development|Shopify development and integration work]].",
        ],
      },
      {
        heading: "A note for India-based stores",
        body: [
          "Shopify's Shopify Payments country list does not include India, and Shopify says the Shop channel is available only in countries where Shopify Payments is supported. Features that depend on Shopify Payments or Shop will be limited for India-based stores. The inventory features in this guide (locations, states, routing, transfers, purchase orders) carry no country restriction on the pages we checked. The pages we checked do not say which 3PL partners serve India, so confirm with the partner.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Adding a shop as a location without switching off online fulfilment, so web orders get promised stock that is on the shop floor.",
          "Editing on-hand numbers to hide damaged stock instead of marking it Unavailable or writing it off with a transfer.",
          "Adding a location and forgetting that it sits at the bottom of the routing list.",
          "Relying on old guides that describe Shopify Fulfillment Network as Shopify's own warehouses, or that quote location limits from third parties.",
          "Uninstalling Stocky before exporting purchase orders and supplier data.",
          "Planning custom routing for a subscription business without checking the Function's limits.",
        ],
      },
      {
        heading: "Conclusion and next steps",
        body: [
          "Shopify's multi-location tools are stronger than many guides suggest. Locations, five honest stock states, rule-based routing, and transfers linked to purchase orders cover most growing stores. Start by making Available mean what it says, then set routing deliberately, then automate alerts. Add an inventory app or IMS only when you hit a gap from the table above. If you are moving off Stocky, export first and rebuild your purchase order process in the admin before your next peak.",
        ],
        cta: {
          title: "Adding a warehouse, shop or 3PL?",
          description:
            "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/shopify-development|Shopify builds and integrations]]. If useful, we can talk through your locations, routing rules and 3PL sync before you add the next one.",
        },
      },
      {
        heading: "Sources",
        body: [
          "Shopify Help Center: Setting up your locations; Inventory states; Multi-managed inventory; Order routing; Local delivery; Pickup in store; Transfers; Stocky; Shopify Flow; Shopify Fulfillment Network; Shopify Payments supported countries; Shop channel.",
          "Shopify developer docs and changelog: Order Routing Location Rule Function API; Greater flexibility for inventory transfers (6 January 2026); Purchase orders now create transfers (22 June 2026); New partners join Shopify Fulfillment Network (26 August 2025).",
          "Industry: FreightWaves: Flexport completes acquisition of Shopify logistics business.",
          "Accessed 15 October 2026. Plan limits, features and partner lists change; check Shopify's current pages before relying on them.",
        ],
      },
    ],
  },
  {
    slug: "test-website-prototype-before-development",
    title: "How to Test a Website Prototype Before Committing to Full Development",
    seoTitle: "How to Test a Website Prototype Before Development",
    excerpt:
      "A prototype test plan for founders: what each fidelity can test, how to write tasks, when to moderate, pitfalls like fake data, and a go/no-go sheet.",
    category: "UI/UX",
    banner: "decisiontree",
    sceneKind: "design",
    bannerAlt:
      "A prototype test plan as a decision tree: choose fidelity, write tasks, choose moderated or unmoderated sessions, run the test, then decide whether to build or iterate",
    date: "2026-10-15",
    readingTime: "10 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development"],
    relatedIndustrySlugs: ["startups", "saas-technology", "professional-services"],
    relatedSlugs: ["usability-testing", "how-much-ux-design-before-development", "wireframing-vs-prototyping"],
    faqs: [
      {
        q: "How many people should test a website prototype?",
        a: "For a qualitative test aimed at finding problems, NN/g's long-standing guidance is about five users per round, provided they are similar to each other and you run another round after fixing what you found. Distinct audiences need their own small groups. If you need numbers you can compare, such as success rates between two designs, you need far more participants.",
      },
      {
        q: "Can I test a prototype with unmoderated tools?",
        a: "Yes, for highly functional prototypes and narrow tasks. NN/g notes that early-prototype testing is difficult without a moderator, because participants hit unbuilt areas and nobody can get them back on track. Pilot an unmoderated test with one or two people before launching it.",
      },
      {
        q: "Is a prototype test the same as validating demand?",
        a: "No. A prototype test tells you whether people can find, understand and complete things. It does not tell you whether they will pay. If your biggest risk is demand, a landing page, pre-sales or a small coded launch will answer that question better.",
      },
      {
        q: "Can I test a prototype made with an AI tool?",
        a: "Yes, and AI-built prototypes can make complex interactions testable earlier, including realistic data and free text input. NN/g cautions that they can look complete while carrying hidden assumptions, and that their polish can stop teams improving them. Review the flows yourself before testing, and do not put real personal data into them.",
      },
      {
        q: "What should I give the developers after a prototype test?",
        a: "The prototype itself, the list of issues with what was changed, any open questions the test did not answer, and the parts of the prototype that were faked (data, inputs, states). Developers need to know which behaviours were real decisions and which were shortcuts.",
      },
    ],
    content: [
      {
        heading: "How do you test a website prototype before development?",
        body: [
          "**Decide the one or two questions the test must answer, build a prototype just detailed enough to answer them, write three to five realistic tasks that only use paths you have built, and watch about five target users try them, moderated if the prototype is early. Then score each task and make an explicit decision: build, fix and retest, or rethink.** The value comes from the decision at the end, not from the prototype.",
          "This guide is for founders and product owners holding a design, or an AI-generated prototype, who want evidence before they commit to a build. It covers running the test. For the general method (recruiting, scripts, metrics and analysis), see our guide to [[/blogs/usability-testing|usability testing]]. This page covers what changes when the thing being tested is not real yet.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Match fidelity to the question. Paper can test structure; it cannot test form friction.",
          "Write tasks only along paths that exist, and seed realistic data.",
          "Moderate early prototypes. Use unmoderated tools only for functional prototypes and narrow tasks.",
          "Dead ends, fake data and text fields that do not accept typing are the most common ways a prototype test misleads.",
          "Polished AI prototypes are useful but can stop a team questioning them.",
          "End with a written go/no-go decision per task, not a general impression.",
        ],
      },
      {
        heading: "Should you build a clickable prototype at all?",
        body: [
          "Build one when your biggest risk is that people will not find, understand or complete something: navigation, the order of a sign-up flow, whether visitors grasp the offer. Skip it when the risk is elsewhere. If you do not know whether anyone wants the product, test demand with a landing page or pre-sales. If you do not know whether something is technically possible, build a small technical spike. If the site is a familiar pattern (a brochure site, a standard store) with little new interaction, a light wireframe review may be enough.",
          "The wider question of how much design to do, and a decision matrix by type of risk, is in [[/blogs/how-much-ux-design-before-development|how much UX design to do before development]]. If you are unsure what separates a wireframe from a prototype, start with [[/blogs/wireframing-vs-prototyping|wireframing vs prototyping]].",
        ],
      },
      {
        heading: "Step 1: choose the fidelity your question needs",
        body: [
          "NN/g defines prototype fidelity as how closely a prototype matches the final system, and notes it varies on three dimensions: interactivity, visuals, and content and commands. The table below is our planning aid, based on that framing. It sets out what each level can and cannot tell you.",
        ],
        table: {
          headers: ["Prototype type", "Can test", "Cannot test", "Run it"],
          rows: [
            ["Paper or sketch", "Page structure, labels, whether the offer makes sense, flow order", "Visual hierarchy, form friction, timing, anything on a real device", "Moderated, with a facilitator acting as the \"computer\""],
            ["Greyscale clickable wireframe", "Navigation and findability, information architecture, step order", "Visual appeal, trust signals, real content length", "Moderated"],
            ["High-fidelity clickable (for example Figma)", "Visual hierarchy, comprehension of real copy, calls to action, first impressions", "Typed input and validation, real data edge cases, performance", "Moderated, or unmoderated if every task path is built"],
            ["High fidelity with variables and conditions", "Simple state: a basket count, a toggled option, branching", "Complex logic, free text, real integrations", "Either, with a pilot"],
            ["Coded or AI-built prototype", "Free input, realistic data, many states, complex interactions", "Production performance, security, edge cases nobody built", "Either; review the flows yourself first"],
            ["Wizard of Oz (a person fakes the system behind the scenes)", "Whether a smart or automated feature is useful before building it", "Speed and consistency of the real system", "Moderated"],
          ],
        },
        callout: {
          type: "note",
          text: "Figma notes that variables and conditional actions in prototypes are available on paid plans, and that a prototype only shows connected frames during playback. Check the current Figma help pages for your plan.",
        },
      },
      {
        heading: "Step 2: write tasks that a prototype can survive",
        body: [
          "NN/g's task-writing advice applies to any usability test: make the task realistic, make it actionable, and avoid giving clues or describing the steps. Prototypes add their own rules:",
        ],
        checklist: [
          "Write tasks only along paths you have built. If a reasonable participant could take a different route, build that route or accept you will need to redirect them.",
          "Define success for each task before the test: the screen or state that counts as done.",
          "Seed realistic data. Real-looking product names, prices, dates and long names expose layout problems that \"Lorem ipsum\" and \"John Doe\" hide.",
          "If the prototype cannot accept typing, give the values on the task card (\"Your postcode is…\") and treat form friction as untested.",
          "For navigation questions, add a first-click question: where would you click first to find X?",
          "Keep to three to five tasks. Unmoderated sessions in particular should be short.",
        ],
      },
      {
        heading: "Task examples: weak versus better",
        body: [
          "**Hypothetical example:** a founder is testing a prototype for a booking site for physiotherapy clinics.",
        ],
        table: {
          headers: ["Weak task", "Why it fails", "Better task"],
          rows: [
            ["\"Click Book Now and choose a time.\"", "Describes the steps; tests reading, not finding", "\"Your knee has been sore for a week. Book the first available appointment this Thursday.\""],
            ["\"Explore the site and tell us what you think.\"", "No success point; the participant wanders into unbuilt pages", "\"Find out whether this clinic treats sports injuries, then tell me how you knew.\""],
            ["\"Sign up for an account.\"", "Needs typed input the prototype cannot take", "\"Create an account using the details on your card. Tell me if anything would stop you.\""],
          ],
        },
      },
      {
        heading: "Step 3: decide whether to moderate",
        body: [
          "NN/g says that \"early-prototype testing is difficult without a moderator\" and that unmoderated studies work best for live sites or highly functional prototypes. The practical rule:",
        ],
        checklist: [
          "Moderate when the prototype is partial, has unbuilt areas, uses Wizard of Oz, or the question involves understanding or emotion (\"would you trust this?\").",
          "Unmoderated is reasonable when every task path is built, tasks are narrow, and the main questions are about finding and completing.",
          "Always pilot an unmoderated test with one or two people. A Google study of experienced remote participants found that many issues traced back to platforms, study protocols and prototypes, and that participants respond by filing support tickets or simply quitting.",
          "In moderated sessions, agree beforehand how the facilitator will recover a participant who reaches a dead end, so recoveries are consistent and noted.",
        ],
      },
      {
        heading: "Step 4: pre-flight checks for prototype pitfalls",
        body: [
          "Most misleading prototype tests fail for the same few reasons. Run through these before the first session.",
        ],
        checklist: [
          "**Dead ends:** click every hotspot on every task path. Unlinked buttons look like usability problems and waste session time.",
          "**Fake or perfect data:** short names, round prices and full stock hide the edge cases real content creates. Add one long name, an out-of-stock item and an empty state.",
          "**Typed input:** standard Figma prototypes have long been reported not to accept real typed text. This comes from a long-running Figma community request thread, not an official statement, so check the current tools. Where typing is faked, count form friction as untested and plan to test it in code.",
          "**Device and loading:** open the prototype on the device participants will use. A slow load or a desktop frame on a phone becomes the finding.",
          "**Lag:** NN/g warns that too long a lag can break the user's flow, so rehearse transitions and any facilitator-driven steps.",
          "**Testing the tool:** if participants talk about the prototype viewer's controls, the test is measuring the tool, not your design.",
          "**Personal data:** do not load real customer data into a prototype or an AI tool.",
        ],
      },
      {
        heading: "AI-generated prototypes: useful, with a polish trap",
        body: [
          "Tools that generate working prototypes from a prompt change what can be tested early. In September 2026 NN/g wrote that AI tools make it feasible to build fully interactive prototypes of complex interfaces, with realistic data, many states and free input. That removes the typed-input and fake-data limits above.",
          "The same article warns that AI-generated prototypes \"may look complete while introducing all sorts of assumptions and inaccuracies\", and that their polish \"might cause people to stop working to improve it\". An earlier NN/g piece found the tools lack the sophistication to weigh design trade-offs and are biased toward mainstream conventions. Pernice made the same point about any high-fidelity prototype: once a team has invested in a design, it is harder to give up.",
          "Before testing an AI-built prototype, walk every task path yourself, list what the tool assumed (copy, rules, defaults), and decide which of those assumptions the test is meant to challenge. Treat the output as a test material, not as the design.",
        ],
      },
      {
        heading: "Step 5: the go/no-go decision sheet",
        body: [
          "Fill in one row per task after the last session. Severity is your judgement of impact: **critical** blocks the task or causes a serious mistake; **major** causes significant delay or confusion; **minor** is friction most people get past.",
        ],
        table: {
          headers: ["Task", "Completed without help (of 5)", "Worst severity seen", "Was the path fully built?", "Decision"],
          rows: [
            ["1. Find pricing", "", "", "", "Build / Fix and retest / Rethink"],
            ["2. Book a first appointment", "", "", "", ""],
            ["3. Understand what is included", "", "", "", ""],
            ["4. Create an account", "", "", "", ""],
          ],
        },
        callout: {
          type: "takeaway",
          text: "A simple rule: build when no task shows a critical issue and any major issues have an agreed fix that does not change the flow. Fix and retest when a critical issue appears, or a fix changes the flow. Rethink when participants misunderstand what the product is, because no layout change will fix that. Treat tasks on partly built paths as inconclusive, not as a pass.",
        },
      },
      {
        heading: "Hypothetical example: one round, one decision",
        body: [
          "**Hypothetical example:** a founder tests a high-fidelity prototype of a subscription coffee site with five target customers. Four of five find the plans page quickly. Two of five think the \"pause anytime\" promise applies only after three deliveries, because the copy is ambiguous. Nobody can test the address form because the prototype does not accept typing.",
          "The sheet says: build the navigation as designed; fix the plans copy and retest it with three new people, a short session; and mark the checkout form as untested, to be checked in the first coded build. That is a decision developers can work from, rather than \"people liked it\".",
        ],
      },
      {
        heading: "Limits of prototype testing",
        body: [
          "A prototype test is a small qualitative study. It finds problems; it does not measure conversion or prove demand. Five users tell you what is broken, not how many customers it affects. It cannot test performance, real integrations, security or how the site behaves with years of content. Do not use it to settle visual taste between stakeholders. And it is not worth running when the design is a well-known pattern with nothing new to learn. Then the time is better spent on content or on a quick test of the live site after launch.",
        ],
      },
      {
        heading: "Conclusion and next steps",
        body: [
          "Pick the question, then the fidelity. Write tasks the prototype can survive, moderate if it is early, check for dead ends and fake data, and finish with a sheet that says build, fix or rethink for each task. Then pass the prototype, findings and the list of faked behaviours to the developers, as covered in our guide to [[/blogs/design-handoff|design handoff]]. If you want help shaping or testing a prototype, ZSpace Labs offers [[/services/ui-ux-design|UI/UX design and prototyping]].",
        ],
        cta: {
          title: "Want evidence before you sign a build quote?",
          description:
            "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/ui-ux-design|UX design and prototype testing]] and [[/services/website-development|website development]]. If useful, we can talk through which flows are worth prototyping and how to test them.",
        },
      },
      {
        heading: "Sources",
        body: [
          "Nielsen Norman Group: Kara Pernice, UX prototypes: low fidelity vs high fidelity; Kathryn Whitenton, Unmoderated user tests; Marieke McCloskey, Turn user goals into task scenarios; Megan Chan, Test complex interactions earlier with AI prototyping; Huei-Hsin Wang and Megan Brown, AI prototyping in real design contexts; Jakob Nielsen, Why you only need to test with 5 users.",
          "Research: Schirra, Volkov, Narasimha and Bentley, Prototypes, platforms and protocols (CHI 2023 Extended Abstracts).",
          "Vendor and community: Figma: Guide to prototyping; Figma: Use variables in prototypes; Figma community forum: interactive text inputs in prototype mode (a user request thread, not official documentation).",
          "Accessed 15 October 2026. Tool features change; check current documentation.",
        ],
      },
    ],
  },
];
