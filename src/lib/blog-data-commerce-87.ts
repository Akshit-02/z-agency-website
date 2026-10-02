import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, batch eleven, part five: order and inventory
 * system boundaries, sourcing and future-stock selling. Slot 541 ("ecommerce
 * order management system") duplicates the existing OMS hub, so it is
 * replaced by pre-orders and backorders, which were only covered for
 * wholesale. Distributed order management owns sourcing logic; the OMS hub
 * keeps the order lifecycle. Merged into `posts` in blog-data.ts.
 */

export const commercePosts87: BlogPost[] = [
  // ---------------------------------------- 542 · OMS VS IMS
  {
    slug: "oms-vs-ims",
    title: "Order Management System vs Inventory Management System: What's the Difference?",
    seoTitle: "OMS vs IMS: Order Management vs Inventory Management Systems",
    excerpt:
      "The difference between an order management system (OMS) and an inventory management system (IMS): responsibilities, data ownership, where they overlap, how they integrate and how to choose.",
    category: "Shopify & Ecommerce",
    banner: "omsvsims",
    bannerAlt:
      "Comparison of an OMS and an IMS by core question, what each owns, time focus, key output, main users and connected systems; the note says they overlap at availability and one system must own it.",
    date: "2026-10-02",
    readingTime: "7 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "ai-automation"],
    relatedIndustrySlugs: ["ecommerce", "retail", "logistics-supply-chain"],
    relatedSlugs: ["ecommerce-order-management-system", "distributed-order-management", "ecommerce-warehouse-management-integration"],
    faqs: [
      { q: "What is the difference between an OMS and an IMS?", a: "An OMS manages customer orders from capture to delivery and returns: validation, routing, fulfilment status, changes and communication. An IMS manages stock: quantities by location, movements, adjustments, counts and replenishment." },
      { q: "Do I need both an OMS and an IMS?", a: "Smaller stores often use their ecommerce platform for both. Separate systems become useful with multiple channels, several warehouses or stores, complex fulfilment or purchasing and replenishment needs." },
      { q: "Which system should own available-to-sell inventory?", a: "One system must own it. Often the IMS or ERP owns on-hand stock and the OMS calculates available to sell by subtracting reservations and safety stock, but some OMS platforms own availability across locations. Decide explicitly." },
      { q: "How is an IMS different from a WMS?", a: "An IMS tracks how much stock exists and where at a summary level. A WMS runs operations inside a warehouse: bins, picking, packing, receiving and labour." },
      { q: "Where does an ERP fit?", a: "An ERP often includes inventory and order modules alongside finance and purchasing. Many ecommerce businesses use the ERP as the inventory and financial system of record and an OMS for customer order orchestration." },
      { q: "Does Shopify include an OMS and IMS?", a: "Shopify includes order management and multi-location inventory suitable for many merchants. Larger or more complex operations add dedicated OMS, inventory or ERP systems through apps and integrations." },
      { q: "What data flows between an OMS and an IMS?", a: "Availability from IMS to OMS, reservations and allocations from OMS to IMS, fulfilment and shipment confirmations that decrement stock, and returns that may add stock back after inspection." },
      { q: "What goes wrong when responsibilities are unclear?", a: "Overselling, double counting reservations, conflicting stock numbers across channels and manual reconciliation work." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An order management system (OMS) answers 'what happens to this order?': it captures orders from every channel, validates them, reserves stock, routes them to fulfilment locations, tracks status, handles changes and returns and keeps customers informed. An inventory management system (IMS) answers 'what stock do we have and where?': it records quantities by location, movements, adjustments, counts and replenishment. They overlap at availability, so decide which system owns available-to-sell stock and how reservations flow between them.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "The full OMS guide is [[/blogs/ecommerce-order-management-system|ecommerce order management system]]. Inventory synchronization across channels is in [[/blogs/ecommerce-inventory-management-integration|inventory management integration]] and [[/blogs/retail-inventory-visibility|retail inventory visibility]]. Warehouse operations are in [[/blogs/ecommerce-warehouse-management-integration|WMS integration]].",
        ],
      },
      {
        heading: "OMS vs IMS at a Glance",
        body: [],
        table: {
          headers: ["", "Order management system (OMS)", "Inventory management system (IMS)"],
          rows: [
            ["Core question", "What happens to this order?", "What stock is where?"],
            ["Owns", "Orders, order lines, routing decisions, statuses, returns", "Quantities, locations, movements, adjustments"],
            ["Typical functions", "Order capture, validation, allocation, split shipments, cancellations, customer updates", "Receiving, transfers, cycle counts, reorder points, purchase suggestions"],
            ["Time focus", "The life of each order, often hours to days", "Stock now and future replenishment"],
            ["Main users", "Customer service, operations, ecommerce teams", "Buyers, planners, warehouse and finance teams"],
            ["Connects to", "Storefronts, marketplaces, payments, 3PLs, carriers", "WMS, ERP, suppliers, POS"],
          ],
        },
      },
      {
        heading: "What an OMS Does",
        body: [
          "An OMS sits between sales channels and fulfilment. It receives orders from the website, marketplaces, apps and sometimes stores, checks them (payment status, fraud holds, address), reserves stock, decides which location fulfils each line, sends requests to warehouses or 3PLs, tracks statuses and handles cancellations, changes and returns. Customer service usually works in the OMS because it holds the complete order story.",
        ],
      },
      {
        heading: "What an IMS Does",
        body: [
          "An IMS keeps the record of stock. It tracks quantities by SKU and location, records receipts, transfers, adjustments, damages and counts, and supports replenishment with reorder points and purchase suggestions. Its users plan and buy stock, and finance relies on it for inventory value, often through an ERP.",
        ],
      },
      {
        heading: "Where They Overlap: Availability",
        body: [
          "Both systems care about how much can be sold. The IMS knows on-hand quantities; the OMS knows what is already promised to orders. Available to sell is roughly on hand minus reservations minus safety stock, and only one system should calculate the number that channels see. If both do, they will disagree, and channels will oversell or undersell.",
        ],
        diagram: {
          variant: "omsimsflow",
          alt: "OMS and IMS flow: stock by location in the IMS, available to sell (highlighted), order placed in the OMS, stock reserved, routed and fulfilled, then stock decremented and synced.",
          caption: "The handoff at 'available to sell' is where most overselling problems start.",
        },
      },
      {
        heading: "Common Ownership Patterns",
        body: [],
        table: {
          headers: ["Pattern", "Inventory record", "Availability", "Fits"],
          rows: [
            ["Platform does both", "Ecommerce platform", "Ecommerce platform", "Single-channel or simple multi-location stores"],
            ["ERP + platform", "ERP", "Platform from ERP feed", "Brands with established ERPs and one main channel"],
            ["ERP/IMS + OMS", "ERP or IMS", "OMS, across channels and locations", "Multi-channel, multi-location retail"],
            ["OMS-centred", "OMS with WMS feeds", "OMS", "Operations built around order orchestration"],
          ],
        },
        cta: {
          title: "Unsure which system should own your stock numbers?",
          description: "ZSpace Labs can map data ownership across your platform, OMS, IMS, ERP and warehouses before integrations are built on the wrong assumptions.",
        },
      },
      {
        heading: "How OMS and IMS Integrate",
        body: [],
        checklist: [
          "**Availability feed:** IMS to OMS, as events on change plus periodic full snapshots for correction",
          "**Reservations:** OMS records reservations when orders are placed and releases them on cancellation",
          "**Allocation:** OMS assigns lines to locations; the IMS or WMS confirms",
          "**Fulfilment confirmation:** shipment events decrement on-hand stock",
          "**Returns:** stock returns to sellable only after inspection, as a separate movement",
          "**Reconciliation:** scheduled comparison of counts with alerts on drift",
        ],
      },
      {
        heading: "How the WMS and ERP Relate",
        body: [
          "A warehouse management system runs the inside of a warehouse: bins, picking routes, packing and labour. It reports stock movements to the IMS or ERP. An ERP often includes inventory, purchasing and finance, and may act as the IMS. The OMS orchestrates orders across all of these. See [[/blogs/ecommerce-erp-integration|ERP integration]] and [[/blogs/ecommerce-order-management-integration|order management integration]].",
        ],
      },
      {
        heading: "How to Choose",
        body: [
          "Start with the problems. Overselling across channels, routing orders across several locations and complex returns point to OMS capability. Stockouts, overstock, inaccurate counts and purchasing pain point to IMS or ERP capability. Many businesses need better data ownership more than new software. When evaluating, check integration patterns, real-time availability, multi-location support and how each system handles reservations.",
        ],
      },
      {
        heading: "Signs You Need a Dedicated OMS or IMS",
        body: [
          "Most growing stores begin with their commerce platform handling both orders and stock. Specific symptoms suggest which capability to add next.",
        ],
        table: {
          headers: ["Symptom", "Points to", "Why"],
          rows: [
            ["Oversells across marketplaces and site", "OMS (or central availability)", "One place must own reservations across channels"],
            ["Orders need routing across warehouses or stores", "OMS with sourcing", "Decisions per order and line; see distributed order management"],
            ["Customer service cannot see order status across systems", "OMS", "One order record and timeline"],
            ["Frequent stockouts and overstock", "IMS or ERP planning", "Replenishment and demand planning"],
            ["Counts differ between warehouse and books", "IMS, WMS and process fixes", "Movements and adjustments not recorded"],
            ["Purchasing done in spreadsheets", "IMS or ERP", "Purchase orders, suppliers and lead times"],
          ],
        },
      },
      {
        heading: "Advantages and Limitations of Separate Systems",
        body: [
          "Separate systems let each do its job well: an OMS built for orchestration across channels and an IMS or ERP built for stock accuracy and planning. The cost is integration. Every boundary is a place where data can lag or disagree, so separate systems only pay off when responsibilities and data ownership are explicit. An all-in-one platform is simpler to run but may hit limits in routing, multi-location availability or planning as the business grows.",
        ],
      },
      {
        heading: "How to Define Responsibilities Step by Step",
        body: [],
        checklist: [
          "**1. List data types:** orders, on-hand stock, reservations, available to sell, shipments, returns",
          "**2. Assign one system of record** to each, in writing",
          "**3. Define events and snapshots** between systems, with frequency and latency targets",
          "**4. Decide how reservations are created, released and expired**",
          "**5. Define returns handling** from receipt to sellable stock; see [[/blogs/ecommerce-refund-automation|refund automation]]",
          "**6. Build reconciliation and drift alerts**",
          "**7. Test peak scenarios** such as drops and sales",
          "**8. Revisit** when channels, warehouses or fulfilment models change, for example adding [[/blogs/ecommerce-fulfilment-integration|a 3PL]]",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a homeware brand sells on its site, two marketplaces and in three stores. Its ERP and its ecommerce platform both calculate available stock, and marketplace oversells happen weekly. The team makes the ERP the record for on-hand stock, adds an OMS that owns reservations and availability for all channels, and feeds channels only from the OMS. Oversells drop, and store stock becomes available for online orders.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Two systems calculating available to sell",
          "Returning stock to sellable before inspection",
          "No reservation release on cancellation",
          "Relying only on events without periodic reconciliation",
          "Buying an OMS to fix an inventory accuracy problem",
        ],
        cta: {
          title: "Planning order and inventory systems for multi-channel growth?",
          description: "Talk to ZSpace Labs about [[/services/website-development|OMS and inventory integration]], [[/services/shopify-development|Shopify multi-location setups]] and [[/services/ai-automation|reconciliation automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "An OMS manages orders; an IMS manages stock. They meet at availability, which must have one owner. Define responsibilities, integrate reservations and confirmations carefully and reconcile regularly. Related: [[/blogs/ecommerce-order-management-system|OMS guide]], [[/blogs/distributed-order-management|distributed order management]] and [[/blogs/ecommerce-warehouse-management-integration|WMS integration]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 543 · DISTRIBUTED ORDER MANAGEMENT
  {
    slug: "distributed-order-management",
    title: "Distributed Order Management: How to Fulfil Orders Across Multiple Locations",
    seoTitle: "Distributed Order Management (DOM): Sourcing and Splits",
    excerpt:
      "How distributed order management works: sourcing rules across warehouses, stores and suppliers, availability, split shipments, capacity, ship-from-store, re-sourcing and how to measure routing decisions.",
    category: "Shopify & Ecommerce",
    banner: "domflow",
    bannerAlt:
      "Distributed order management flow: order lines, eligible fulfilment nodes, score by rules (highlighted), decide split or single shipment, allocate and reserve, release to node; a branch shows a node rejection triggering re-sourcing.",
    date: "2026-10-02",
    readingTime: "7 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "ai-automation"],
    relatedIndustrySlugs: ["retail", "ecommerce", "logistics-supply-chain"],
    relatedSlugs: ["oms-vs-ims", "ecommerce-fulfilment-integration", "omnichannel-ecommerce-architecture"],
    faqs: [
      { q: "What is distributed order management?", a: "Distributed order management (DOM) is the use of rules to decide which locations, such as warehouses, stores, 3PLs or suppliers, should fulfil each order or order line, based on availability, cost, speed and capacity." },
      { q: "How is DOM different from an OMS?", a: "DOM is a capability, often part of an OMS, focused on sourcing decisions across many locations. An OMS also covers order capture, status, changes, returns and customer communication." },
      { q: "What are sourcing rules?", a: "Rules that rank eligible locations for an order, using factors such as stock depth, distance to the customer, shipping cost, split-shipment cost, cut-off times and daily capacity." },
      { q: "Should orders be split across locations?", a: "Only when splitting is better than waiting or shipping from a farther location. Splits add packaging and shipping costs and can confuse customers, so many rules prefer a single location that can fill the whole order." },
      { q: "What is ship-from-store?", a: "Fulfilling online orders from store stock. It increases available inventory and can speed delivery, but depends on accurate store stock and staff capacity." },
      { q: "What happens if a location cannot fulfil its allocation?", a: "It rejects or short-picks, and the DOM re-sources the affected lines to another location or notifies the customer if none can fulfil." },
      { q: "How often should availability be updated for DOM?", a: "As close to real time as your systems allow, with safety stock to absorb latency, especially for store inventory, which changes with in-store sales." },
      { q: "How do we know if routing rules are working?", a: "Measure fulfilment cost per order, split rate, delivery time against promise, re-sourcing rate, cancellations due to stock and capacity utilization by location." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Distributed order management decides where each order should be fulfilled when stock sits in several warehouses, stores, 3PLs or suppliers. For every order, it finds eligible locations with available stock, scores them with weighted rules (full-order fill, distance and delivery promise, shipping and split costs, capacity and cut-off times), decides whether to split, reserves stock and releases fulfilment requests. When a location rejects or short-picks, it re-sources. Measure cost, speed, split rate and re-sourcing to tune the rules.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "DOM is usually part of an OMS; the full order lifecycle is in [[/blogs/ecommerce-order-management-system|ecommerce order management system]] and system boundaries in [[/blogs/oms-vs-ims|OMS vs IMS]]. Connecting to 3PLs is in [[/blogs/ecommerce-fulfilment-integration|fulfilment integration]], and store fulfilment patterns such as [[/blogs/bopis-ecommerce|BOPIS]] are part of [[/blogs/omnichannel-ecommerce-architecture|omnichannel architecture]].",
        ],
      },
      {
        heading: "Fulfilment Nodes",
        body: [
          "A node is any location that can fulfil orders. Each has its own stock, capabilities and constraints.",
        ],
        table: {
          headers: ["Node type", "Strengths", "Constraints"],
          rows: [
            ["Distribution centre", "Depth of stock, efficient picking, carrier rates", "Distance to some customers"],
            ["3PL warehouse", "Regional coverage, flexible capacity", "Integration latency, per-order fees"],
            ["Retail store", "Proximity, more available stock, pickup", "Stock accuracy, staff time, packing supplies"],
            ["Drop-ship supplier", "Wider range without holding stock", "Less control over speed and packaging"],
          ],
        },
      },
      {
        heading: "Sourcing Rules",
        body: [
          "Sourcing rules decide which eligible node fulfils each line. Treat them as weighted trade-offs rather than one sort order. Cheapest shipping may mean a slower promise; nearest store may mean a split. Most teams start with a short sequence: filter to nodes that can ship the item to the destination within the promise, prefer nodes that can fill the whole order, then rank by cost and capacity.",
        ],
        diagram: {
          variant: "domrules",
          alt: "Distributed order management sourcing inputs in four columns: availability highlighted (stock by node, safety stock, full-order fill, reservations), cost (shipping zone, split cost, handling cost, markdown risk), speed (distance, cut-off times, carrier SLA, promise date) and capacity (daily limits, store staffing, backlog, blackouts).",
          caption: "Availability filters the candidates; cost, speed and capacity rank them.",
        },
        code: {
          label: "Example: sourcing rule sequence (illustrative configuration)",
          text: "sourcing:\n  filter:\n    - has_available_stock\n    - can_meet_promise_date\n    - not_at_daily_capacity\n  prefer:\n    - fills_entire_order          # avoid splits\n  rank_by:\n    - shipping_cost: weight 0.5\n    - distance_km: weight 0.3\n    - stock_depth: weight 0.2     # protect low-stock stores\n  split:\n    allowed: true\n    max_shipments: 2\n    only_if: no_single_node_can_fill",
        },
      },
      {
        heading: "Split Shipments",
        body: [
          "When no single node has every item, the DOM can split the order, wait for stock, or ship partially and backorder the rest. Splits add packaging, shipping and customer confusion; waiting delays everything. Set rules: maximum shipments per order, when a split is allowed, and whether low-value lines can wait. Tell customers clearly when an order arrives in more than one parcel, with tracking for each.",
        ],
      },
      {
        heading: "Ship-From-Store",
        body: [
          "Stores add stock and proximity, but store inventory is less accurate than warehouse inventory and staff have other work. Use higher safety stock for store nodes, daily capacity limits, exclusion of display stock and fast rejection when an item cannot be found. Measure store pick accuracy separately; a store that rejects many allocations should get fewer.",
        ],
        cta: {
          title: "Routing orders across warehouses, 3PLs and stores?",
          description: "ZSpace Labs can design sourcing rules, availability feeds and re-sourcing flows that fit your nodes and carriers.",
        },
      },
      {
        heading: "Availability and Reservations",
        body: [
          "DOM decisions are only as good as availability data. Feed stock by node from warehouses, 3PLs and POS, subtract reservations and safety stock, and update as close to real time as possible with periodic full snapshots to correct drift. Reserve stock at the chosen node when the decision is made, and release reservations promptly on cancellation or re-sourcing. See [[/blogs/retail-inventory-visibility|inventory visibility]].",
        ],
      },
      {
        heading: "Re-Sourcing and Exceptions",
        body: [
          "Allocations fail: a store cannot find the item, a warehouse short-picks, a 3PL rejects an order. The DOM should receive the rejection, release the reservation, re-run sourcing for the affected lines and update the customer only if the promise changes. Cap re-sourcing attempts and route unresolved lines to a person.",
        ],
      },
      {
        heading: "When to Route: At Order Time or Later",
        body: [
          "Routing at order time lets you promise accurate delivery dates and reserve stock immediately. Delayed routing, after a short batching window, can combine orders and use updated capacity information. Many operations route at order time with the option to re-route before release to the node.",
        ],
      },
      {
        heading: "Measuring DOM",
        body: [],
        checklist: [
          "Fulfilment and shipping cost per order",
          "Split shipment rate and parcels per order",
          "Delivery time against promise",
          "Re-sourcing and rejection rate by node",
          "Cancellations due to stock",
          "Capacity utilization by node and day",
        ],
      },
      {
        heading: "Advantages and Limitations of DOM",
        body: [],
        table: {
          headers: ["Advantages", "Limitations"],
          rows: [
            ["More sellable stock across all locations", "Depends on accurate, timely stock data from every node"],
            ["Faster delivery from closer nodes", "More split shipments if rules are loose"],
            ["Lower markdowns by selling slow store stock online", "Store staff time and packing quality become variables"],
            ["Resilience when one node is constrained", "Rules become complex and need ongoing tuning"],
            ["Better delivery promises with node-aware dates", "Requires OMS capability and integrations to every node"],
          ],
        },
      },
      {
        heading: "Delivery Promises and DOM",
        body: [
          "DOM and the delivery date shown to customers are linked. If the product page promises next-day delivery based on the nearest warehouse, but sourcing later chooses a distant store, the promise breaks. Either calculate promises from the same sourcing logic (often a simplified version run at product and cart level) or promise conservatively. Store the promised date on the order so sourcing can treat it as a constraint and reporting can measure promise accuracy. See [[/blogs/ecommerce-shipping-integration|shipping integration]].",
        ],
      },
      {
        heading: "How to Introduce DOM Step by Step",
        body: [],
        checklist: [
          "**1. Map nodes** with their stock feeds, capabilities, cut-offs and capacity",
          "**2. Improve stock accuracy** at the nodes you plan to add, starting with stores",
          "**3. Define the first rule set:** eligibility, prefer full fill, rank by cost and distance",
          "**4. Set split limits** and customer messaging for multi-parcel orders",
          "**5. Integrate rejections and re-sourcing** with each node, including [[/blogs/ecommerce-warehouse-management-integration|WMS]] and [[/blogs/ecommerce-fulfilment-integration|3PL]] connections",
          "**6. Pilot with a few nodes** and compare cost and speed",
          "**7. Add capacity limits and peak rules**",
          "**8. Review rules monthly** using node-level metrics",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a sporting goods retailer ships everything from one warehouse while stores hold end-of-season stock that later gets marked down. It adds stores as nodes for online orders, with capacity limits and higher safety stock. Orders near stores ship from store when the store can fill the whole order. Markdowns fall, and the team adjusts rules after seeing which stores reject most allocations.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Routing on distance alone",
          "No limit on split shipments",
          "Store stock with no safety buffer",
          "No re-sourcing when nodes reject",
          "Capacity ignored during peaks",
          "No measurement of rule outcomes",
        ],
        cta: {
          title: "Want sourcing decisions you can measure and improve?",
          description: "Talk to ZSpace Labs about [[/services/website-development|OMS and sourcing development]], [[/services/shopify-development|Shopify multi-location fulfilment]] and [[/services/ai-automation|operations automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Distributed order management turns many stock locations into one fulfilment network. Filter by availability and promise, rank by cost and capacity, limit splits, re-source on rejection and measure outcomes by node. Related: [[/blogs/oms-vs-ims|OMS vs IMS]], [[/blogs/ecommerce-fulfilment-integration|fulfilment integration]] and [[/blogs/ecommerce-preorders-backorders|pre-orders and backorders]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 541 (alternative) · PRE-ORDERS AND BACKORDERS
  {
    slug: "ecommerce-preorders-backorders",
    title: "Ecommerce Pre-Orders and Backorders: How to Sell Stock You Don't Have Yet",
    seoTitle: "Ecommerce Pre-Orders and Backorders: Payments, Allocation, UX",
    excerpt:
      "How to run ecommerce pre-orders and backorders: when to use each, payment options, inventory caps, mixed carts, allocation when stock arrives, delivery date messaging, delays and cancellations.",
    category: "Shopify & Ecommerce",
    banner: "preordercompare",
    bannerAlt:
      "Comparison of pre-orders (highlighted), backorders and sold-out products by stock situation, button, payment, promise and main risk; the note says show the date before payment and update it when it moves.",
    date: "2026-10-02",
    readingTime: "7 min read",
    relatedServiceSlugs: ["shopify-development", "website-development", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "consumer-electronics"],
    relatedSlugs: ["distributed-order-management", "ecommerce-inventory-management-integration", "ecommerce-order-tracking"],
    faqs: [
      { q: "What is the difference between a pre-order and a backorder?", a: "A pre-order is for a product that has not been released or received yet. A backorder is for a product that has sold out but will be restocked. Both let customers buy now and receive later." },
      { q: "Should customers pay for pre-orders upfront?", a: "It depends on the product and your payment provider. Options include full payment at order, a deposit with the balance later, or saving the payment method and charging at shipment. Card authorizations expire after a short time, so they do not suit long waits." },
      { q: "How long can a card authorization be held?", a: "Typically only days for online card payments, varying by card network and transaction type. For longer waits, charge upfront or save the card with consent and charge later." },
      { q: "How should a store limit pre-orders?", a: "Set a cap based on confirmed incoming stock, decrement it as orders arrive, and stop or switch to a waitlist when it is reached." },
      { q: "What happens to mixed carts with in-stock and pre-order items?", a: "Either split the order and ship in-stock items now, or hold the whole order until everything is available. Tell the customer which before payment and charge shipping accordingly." },
      { q: "How should pre-orders be allocated when stock arrives?", a: "Usually first come, first served by order time, with rules for partial arrivals and for orders whose payment fails at shipment." },
      { q: "What if a pre-order is delayed?", a: "Tell customers promptly with a new date and offer the option to cancel with a refund. Some jurisdictions have rules about shipping times and notice of delays, so check consumer law for your markets." },
      { q: "Does Shopify support pre-orders?", a: "Shopify supports deferred purchase options through selling plans and apps that add pre-order and backorder functionality. Capabilities differ by app, so check payment timing, caps and mixed-cart behaviour." },
      { q: "Should backorders be allowed on every product?", a: "No. Allow them only where restock dates are reliable. For items with uncertain supply, show 'notify me' instead." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Pre-orders sell products before release; backorders sell sold-out products ahead of restock. Both need a clear expected date shown before payment, a cap tied to confirmed incoming stock, a payment policy (full upfront, deposit, or save the card and charge at shipment, since authorizations expire within days), rules for mixed carts, fair allocation when stock arrives, and proactive communication with an option to cancel when dates slip. Only offer them where supply dates are reliable; otherwise use a back-in-stock notification.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Future stock interacts with availability, covered in [[/blogs/ecommerce-inventory-management-integration|inventory management integration]], and with sourcing in [[/blogs/distributed-order-management|distributed order management]]. Post-purchase communication is in [[/blogs/ecommerce-order-tracking|order tracking]]. Wholesale seasonal pre-orders are covered in [[/blogs/wholesale-ecommerce-website|wholesale ecommerce]].",
        ],
      },
      {
        heading: "Pre-Order, Backorder or Sold Out?",
        body: [],
        table: {
          headers: ["Situation", "Use", "Customer sees"],
          rows: [
            ["New product, launch date confirmed", "Pre-order", "Pre-order button, release or ship date"],
            ["Sold out, restock with a confirmed date", "Backorder", "Order now, estimated ship date"],
            ["Sold out, no reliable date", "Back-in-stock notification", "Notify me when available"],
            ["Limited edition, never restocked", "Sold out", "Sold out, with alternatives"],
            ["Made to order", "Production lead time", "Ships in X weeks"],
          ],
        },
      },
      {
        heading: "Payment Options",
        body: [
          "Payment timing is the biggest design decision. Full payment upfront is simplest and secures commitment, but it means holding customer money for a period and refunding if plans change. A deposit with balance later suits high-value or long-lead items. Saving the payment method with consent and charging at shipment is customer-friendly but risks failed payments when you finally charge.",
          "Card authorizations are not a good fit for long waits: [[https://docs.stripe.com/payments/place-a-hold-on-a-payment-method|holds on online card payments]] typically expire within days, varying by network and transaction type. Shopify supports deferred payment through [[https://shopify.dev/docs/apps/build/purchase-options/deferred|deferred purchase options]] used by pre-order apps.",
        ],
        table: {
          headers: ["Option", "Pros", "Cons"],
          rows: [
            ["Full payment at order", "Simple, committed customers, no failed later charges", "Refunds if delayed or cancelled; customer money held"],
            ["Deposit, balance later", "Lower barrier for expensive items", "Two payments to manage; balance may fail"],
            ["Save card, charge at shipment", "Customer pays when goods ship", "Failed charges at shipment; dunning needed"],
            ["Authorize now, capture later", "Funds reserved", "Only for waits shorter than authorization validity"],
          ],
        },
      },
      {
        heading: "Caps and Inventory",
        body: [
          "Treat incoming stock as its own inventory state. Set a pre-order cap from confirmed purchase orders, minus a buffer for supplier shortfall, and decrement it as orders arrive. When the cap is reached, close pre-orders or switch to a waitlist. Keep pre-order quantities separate from on-hand stock so channels and reports do not confuse promised future stock with sellable stock now.",
        ],
        diagram: {
          variant: "preorderflow",
          alt: "Pre-order flow: set cap and date, pre-order placed, payment policy, stock arrives, allocate in order (highlighted), ship and notify; a branch shows a delay triggering a notification and an offer to cancel.",
          caption: "Allocation order and delay handling decide whether pre-order customers become repeat customers.",
        },
      },
      {
        heading: "Mixed Carts",
        body: [
          "When a cart contains in-stock and pre-order items, either split the order (ship available items now, the rest later, possibly with extra shipping) or hold everything until the pre-order item arrives. Splitting is usually better for customers, but it affects shipping charges, payment timing and returns. Say which will happen in the cart and at checkout, not after payment.",
        ],
        cta: {
          title: "Launching a product before stock lands?",
          description: "ZSpace Labs can set up pre-order caps, payment timing, mixed-cart rules and delivery messaging so launches do not turn into support queues.",
        },
      },
      {
        heading: "Allocating Stock When It Arrives",
        body: [
          "Allocate in order of purchase unless you have a published reason not to (for example, priority for members). Handle partial arrivals by shipping the earliest orders first and updating later ones. If you charge at shipment, attempt payment before allocating stock; failed payments go through a short recovery window before stock moves to the next customer. The OMS should treat pre-orders as orders awaiting stock, with a clear status for customer service.",
        ],
      },
      {
        heading: "Messaging the Date",
        body: [],
        checklist: [
          "Show the expected ship or release date on the product page, cart, checkout and confirmation",
          "Use a range or month when the exact date is uncertain, rather than an optimistic day",
          "Label pre-order items clearly in the cart and order confirmation",
          "Explain payment timing in plain words before payment",
          "Show pre-order status and date in the customer account",
          "Send updates when the date changes, not only when the item ships",
        ],
      },
      {
        heading: "Delays and Cancellations",
        body: [
          "Supply dates slip. When they do, tell affected customers promptly, give the new date and offer cancellation with a full refund. Some consumer protection rules set expectations for shipping times and notice of delays (for example, the US FTC's mail, internet or telephone order rule), so check obligations in your markets. Let customers cancel pre-orders easily from their account before shipment.",
        ],
      },
      {
        heading: "Platform Notes",
        body: [
          "On Shopify, pre-order and backorder behaviour usually comes from apps using selling plans, plus inventory policy settings that allow selling when out of stock. Check how an app handles caps, deferred payments, mixed carts, partial fulfilment and its sync with your OMS or 3PL. On custom platforms, model pre-order stock and order states explicitly rather than allowing negative inventory.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [],
        table: {
          headers: ["Advantages", "Limitations"],
          rows: [
            ["Captures demand before stock arrives", "Customers wait, and some cancel"],
            ["Validates demand for new products", "Supply delays turn into support load"],
            ["Can fund production with upfront payments", "Holding customer money creates refund obligations"],
            ["Keeps bestsellers selling through stockouts", "Mixed carts complicate shipping and payment"],
            ["Gives buying teams real demand signals", "Unreliable dates damage trust quickly"],
          ],
        },
      },
      {
        heading: "How to Launch Pre-Orders Step by Step",
        body: [],
        checklist: [
          "**1. Confirm supply:** quantities and dates from purchase orders, with a buffer",
          "**2. Choose payment timing** and check authorization limits with your provider",
          "**3. Configure the cap** and what happens when it is reached",
          "**4. Decide mixed-cart behaviour** and shipping charges",
          "**5. Write the messaging** for product page, cart, checkout, confirmation and account",
          "**6. Set up OMS status and allocation rules** for arrival, connected to [[/blogs/distributed-order-management|sourcing]] and your [[/blogs/ecommerce-fulfilment-integration|3PL integration]]",
          "**7. Prepare delay and cancellation templates** in advance",
          "**8. After launch, track** cancellations, delays, support contacts and conversion from pre-order to delivered order",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a consumer electronics brand opens pre-orders for a new speaker with full payment and a confirmed month. The supplier ships 80% of the first batch. The team allocates by order time, ships the earliest 80% and emails the rest with a revised date and a one-click cancel option. Few cancel, and support volume stays manageable because the update arrived before customers asked.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Allowing negative inventory instead of a capped pre-order state",
          "Relying on card authorizations for long waits",
          "No date shown before payment",
          "Mixed-cart behaviour decided after checkout",
          "No proactive delay notices",
          "Backorders on items with no reliable restock date",
        ],
        cta: {
          title: "Need pre-orders and backorders that work with your OMS and 3PL?",
          description: "Talk to ZSpace Labs about [[/services/shopify-development|Shopify pre-order setups]], [[/services/website-development|custom inventory and order states]] and [[/services/ui-ux-design|date and status messaging]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Selling future stock works when the promise is clear and kept: a date before payment, a cap tied to real supply, a deliberate payment policy, fair allocation and honest updates. Related: [[/blogs/distributed-order-management|distributed order management]], [[/blogs/ecommerce-inventory-management-integration|inventory integration]] and [[/blogs/ecommerce-order-tracking|order tracking]].",
        ],
      },
    ],
  },
];
