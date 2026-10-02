import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, batch eleven, part six: connecting stores to
 * outsourced (3PL) and in-house (WMS) fulfilment. Fulfilment integration is
 * scoped to the store-to-3PL message contract; WMS integration to warehouse
 * events and stock movements; ecommerce-fulfillment-technology remains the
 * strategy overview. Shopify behaviour follows the FulfillmentOrder and
 * fulfillment service documentation on shopify.dev. Merged into `posts` in
 * blog-data.ts.
 */

export const commercePosts88: BlogPost[] = [
  // ---------------------------------------- 544 · FULFILMENT (3PL) INTEGRATION
  {
    slug: "ecommerce-fulfilment-integration",
    title: "Ecommerce Fulfilment Integration: How to Connect Your Store With 3PL Partners",
    seoTitle: "Ecommerce 3PL Integration: Orders, Tracking, Inventory, Exceptions",
    excerpt:
      "How to integrate an ecommerce store with a 3PL fulfilment partner: order release, acknowledgements, cancellations, shipment confirmation and tracking, inventory sync, ASNs, returns, exceptions and testing.",
    category: "Shopify & Ecommerce",
    banner: "threeplflow",
    bannerAlt:
      "3PL integration flow: order ready, send to 3PL, 3PL acknowledges (highlighted), pick and pack, ship confirmation with tracking, inventory sync; a branch shows rejected orders going to an exception queue.",
    date: "2026-10-02",
    readingTime: "8 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "ai-automation"],
    relatedIndustrySlugs: ["ecommerce", "logistics-supply-chain", "d2c-consumer"],
    relatedSlugs: ["ecommerce-warehouse-management-integration", "distributed-order-management", "ecommerce-fulfillment-technology"],
    faqs: [
      { q: "What is a 3PL integration?", a: "The connection between your ecommerce platform or OMS and a third-party logistics provider's systems, so orders flow to the 3PL automatically and shipment, tracking, inventory and returns data flow back." },
      { q: "What data does a 3PL need from the store?", a: "Order and line details, SKUs, quantities, shipping address and contact, shipping method or service level, gift messages and packing instructions, and for international orders, customs data such as HS codes and declared values." },
      { q: "What does the 3PL send back?", a: "Order acknowledgements or rejections, shipment confirmations with carrier and tracking numbers per package, inventory levels and adjustments, receipts against inbound shipments and returns received." },
      { q: "What is an ASN?", a: "An advance shipping notice tells the warehouse what inbound stock to expect, so it can receive and put it away against an expected quantity." },
      { q: "How do 3PLs integrate: API, EDI or files?", a: "All three are common. Modern 3PLs offer REST APIs and platform apps; larger or traditional operations use EDI documents; some still exchange CSV files over SFTP. Choose based on the 3PL's strongest supported method." },
      { q: "How does Shopify connect to 3PLs?", a: "Through fulfillment service apps that use Shopify's FulfillmentOrder model: Shopify sends fulfilment requests to the service, which accepts or rejects them and then creates fulfilments with tracking. Many 3PLs provide ready-made apps." },
      { q: "How should cancellations work with a 3PL?", a: "Send a cancellation request and wait for the 3PL to confirm. If the order has already been picked or shipped, the cancellation may fail, and the order becomes a return or interception case." },
      { q: "Which inventory number is right, ours or the 3PL's?", a: "The 3PL's physical count is usually the source of truth for on-hand stock in its warehouse. Your systems subtract open orders and reservations to calculate what you can sell." },
      { q: "What should we monitor in a 3PL integration?", a: "Orders sent but not acknowledged, orders acknowledged but not shipped within SLA, rejected orders, inventory differences, missing tracking and failed messages." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A 3PL integration sends orders from your store or OMS to the fulfilment partner when they are ready to ship, receives acknowledgements or rejections, handles cancellations and address changes before pick, and receives shipment confirmations with tracking per package, which update the order and trigger customer notifications. Inventory flows back as snapshots and adjustments, inbound stock is announced with ASNs, and returns received are reported for refunds. Design for exceptions first: rejections, short picks, holds and delays need queues, alerts and owners.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Choosing a fulfilment model and partner is covered in [[/blogs/ecommerce-fulfillment-technology|ecommerce fulfillment technology]]. Running your own warehouse software is in [[/blogs/ecommerce-warehouse-management-integration|WMS integration]], deciding which location fulfils each order in [[/blogs/distributed-order-management|distributed order management]], and carriers and labels in [[/blogs/ecommerce-shipping-integration|shipping integration]].",
        ],
      },
      {
        heading: "The Messages in a 3PL Integration",
        body: [
          "Write down the message contract before building anything. Most integration problems come from missing message types, not from the transport.",
        ],
        diagram: {
          variant: "threepldata",
          alt: "3PL integration messages in four columns: outbound (fulfilment request, cancellation, address change, product master), inbound (ASN and receipts, ship confirmation, tracking, returns received), inventory (snapshots, adjustments, reserved, damaged) and exceptions highlighted (rejections, short picks, holds, delays).",
          caption: "The happy path takes a week to build; the exceptions take the rest of the project.",
        },
      },
      {
        heading: "Releasing Orders to the 3PL",
        body: [
          "Decide when an order is ready to release: payment captured or authorized, fraud checks passed, address validated, all lines available or a split decided. Many stores add a short hold (for example 30 to 60 minutes) so customers can correct addresses or cancel before the order reaches the warehouse. Send all the data the 3PL needs to ship without asking: SKUs that match the 3PL's item master, service level, packing instructions, gift options and customs data for international orders.",
        ],
        table: {
          headers: ["Field group", "Examples", "Common problem"],
          rows: [
            ["Order identity", "Order number, channel, created time", "Duplicate releases without an idempotent key"],
            ["Lines", "SKU, quantity, bundle components", "Bundles sent as one SKU the 3PL does not stock"],
            ["Shipping", "Address, phone, service level, requested date", "Free-text service names that do not map"],
            ["Packing", "Gift wrap, notes, inserts, branded packaging", "Instructions lost in a notes field"],
            ["International", "HS code, origin, declared value, duties model", "Missing customs data holds parcels"],
          ],
        },
      },
      {
        heading: "Acknowledgements and Rejections",
        body: [
          "Treat a sent order as unconfirmed until the 3PL acknowledges it. Rejections (unknown SKU, invalid address, insufficient stock) must arrive back with reasons and create an exception for someone to resolve. On Shopify, [[https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services|fulfillment service apps]] receive fulfilment requests and must accept or reject them, using the [[https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder|FulfillmentOrder]] model to track the state of each request.",
        ],
      },
      {
        heading: "Cancellations and Changes",
        body: [
          "Customers cancel and change addresses after ordering. Send changes as requests and wait for confirmation, because the warehouse may already have picked or shipped. If a cancellation fails, the order becomes an interception attempt with the carrier or a return. Show customer service the 3PL status before they promise anything, and close the change window in the storefront once the order is in progress.",
        ],
      },
      {
        heading: "Shipment Confirmation and Tracking",
        body: [
          "When the 3PL ships, it sends a confirmation with carrier, service and tracking number for each package, plus which lines and quantities are in each. Partial shipments and multi-package orders are common, so the integration must handle several confirmations per order. Each confirmation updates the order, triggers the customer notification and starts tracking. See [[/blogs/ecommerce-order-tracking|order tracking]].",
        ],
        cta: {
          title: "Connecting a new 3PL or replacing a fragile integration?",
          description: "ZSpace can define the message contract, build the connector and set up exception queues and monitoring for your fulfilment partner.",
        },
      },
      {
        heading: "Inventory Synchronization",
        body: [
          "The 3PL's physical count is usually the source of truth for on-hand stock in its warehouse. Receive incremental adjustments (receipts, damages, count corrections) as they happen and full snapshots on a schedule to correct drift. Your OMS or platform subtracts unshipped orders and reservations to calculate what can be sold, and should compare its expected stock with the 3PL's snapshot and alert on differences. See [[/blogs/ecommerce-inventory-management-integration|inventory integration]].",
        ],
      },
      {
        heading: "Inbound Stock and ASNs",
        body: [
          "Tell the 3PL what is coming with advance shipping notices: supplier, expected date, SKUs and quantities, carton details. The 3PL receives against the ASN and reports differences. Receipts update available stock and can trigger release of waiting [[/blogs/ecommerce-preorders-backorders|pre-orders and backorders]].",
        ],
      },
      {
        heading: "Returns Through the 3PL",
        body: [
          "If the 3PL processes returns, it reports items received, their condition and disposition (restock, refurbish, dispose). These events should trigger refunds or exchanges and stock updates. Returned stock should not become sellable until inspection confirms it. See [[/blogs/ecommerce-returns-management|returns management]] and [[/blogs/ecommerce-refund-automation|refund automation]].",
        ],
      },
      {
        heading: "API, EDI or Files?",
        body: [],
        table: {
          headers: ["Method", "Typical use", "Watch out for"],
          rows: [
            ["Platform app", "Shopify and similar, standard flows", "Gaps for bundles, custom packing or multiple stores"],
            ["REST API and webhooks", "Modern 3PLs, custom stacks", "Rate limits, webhook reliability"],
            ["EDI (for example X12 940 and 945)", "Larger and traditional 3PLs", "Mapping effort, VAN costs, slower change"],
            ["CSV over SFTP", "Small or legacy operations", "Batch delays, silent file failures"],
          ],
        },
      },
      {
        heading: "Monitoring and Exceptions",
        body: [],
        checklist: [
          "Orders sent but not acknowledged within minutes",
          "Orders acknowledged but not shipped within the SLA",
          "Rejections by reason, with an owner and a queue",
          "Shipments without tracking numbers",
          "Inventory differences above a threshold",
          "Failed or retried messages, with dead-letter handling; see [[/blogs/ecommerce-queue-architecture|queue architecture]]",
        ],
      },
      {
        heading: "Testing Before Go-Live",
        body: [
          "Test with the 3PL's sandbox or a test account: single and multi-line orders, bundles, partial and split shipments, cancellations before and after pick, address changes, rejections for unknown SKUs, international orders with customs data, returns and inventory snapshots with differences. Run a small live pilot before moving all volume.",
        ],
      },
      {
        heading: "Advantages and Limitations of Working Through a 3PL",
        body: [
          "A 3PL brings warehouse space, labour, carrier rates and regional reach without building your own operation. The trade-off is that your customer promise depends on another company's systems. Integration quality decides how visible that dependency is: with a good integration, you see acknowledgements, picks, shipments and stock in near real time; with a weak one, you learn about problems from customers. Factor integration capability into 3PL selection alongside price, and ask for sandbox access and API documentation before signing.",
        ],
      },
      {
        heading: "How to Integrate a 3PL Step by Step",
        body: [],
        checklist: [
          "**1. Agree the message contract:** every message type, field and status, including exceptions",
          "**2. Align identifiers:** SKUs, bundles, units of measure, service levels and locations",
          "**3. Choose the transport:** platform app, API, EDI or files, based on the 3PL's strongest method",
          "**4. Build release logic** with holds, validation and idempotent sending",
          "**5. Handle acknowledgements, rejections and cancellations**",
          "**6. Process shipment confirmations** per package and trigger notifications",
          "**7. Sync inventory** with events plus snapshots, and alert on drift",
          "**8. Connect ASNs and returns**, including [[/blogs/ecommerce-exchange-management|exchange replacements]]",
          "**9. Test end to end, pilot, then migrate volume**",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a D2C supplements brand moves to a 3PL. In the first week, bundles fail because the store sends bundle SKUs the 3PL does not stock. The team explodes bundles into component SKUs before release, adds a 45-minute release hold for address changes, and creates an exception queue for rejections with alerts to operations. Acknowledgement and shipping SLAs become visible on a dashboard, and missed shipments drop.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Assuming sent means accepted",
          "No release hold for customer changes",
          "Bundles and kits not mapped to component SKUs",
          "One tracking number assumed per order",
          "Returned stock marked sellable before inspection",
          "No alerting on unshipped orders",
        ],
        cta: {
          title: "Need a 3PL integration that handles the exceptions?",
          description: "Talk to ZSpace about [[/services/website-development|fulfilment integration development]], [[/services/shopify-development|Shopify fulfillment service setups]] and [[/services/ai-automation|exception handling automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A reliable 3PL integration starts with a complete message contract and is judged by how it handles rejections, changes and differences. Release orders deliberately, confirm acknowledgements, track every package, reconcile inventory and monitor SLAs. Related: [[/blogs/ecommerce-warehouse-management-integration|WMS integration]], [[/blogs/distributed-order-management|distributed order management]] and [[/blogs/ecommerce-order-management-integration|order management integration]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 545 · WMS INTEGRATION
  {
    slug: "ecommerce-warehouse-management-integration",
    title: "Ecommerce Warehouse Management Integration: How Stores Connect With WMS Platforms",
    seoTitle: "Ecommerce WMS Integration: Orders, Picking, Stock and Events",
    excerpt:
      "How to integrate an ecommerce store or OMS with a warehouse management system: order release, waves, picking and packing events, short picks, stock movements, receiving, shipping and reconciliation.",
    category: "Shopify & Ecommerce",
    banner: "wmsevents",
    bannerAlt:
      "WMS integration events in four columns: receive (purchase order or ASN, receipt, quality check, putaway), store (locations, cycle counts, adjustments, transfers), pick and pack highlighted (waves, short pick, substitution only under agreed rules, pack verification) and ship (label, manifest, ship confirmation, tracking).",
    date: "2026-10-02",
    readingTime: "7 min read",
    relatedServiceSlugs: ["website-development", "ai-automation", "shopify-development"],
    relatedIndustrySlugs: ["logistics-supply-chain", "retail", "ecommerce"],
    relatedSlugs: ["ecommerce-fulfilment-integration", "oms-vs-ims", "distributed-order-management"],
    faqs: [
      { q: "What is a WMS?", a: "A warehouse management system runs operations inside a warehouse: receiving, putaway, storage locations, picking, packing, shipping, counts and labour." },
      { q: "Why integrate a WMS with an ecommerce store?", a: "So orders reach the warehouse automatically, stock levels reflect what is physically available, and shipping and tracking information returns to the store and customers without manual work." },
      { q: "Should the store connect to the WMS directly or through an OMS or ERP?", a: "Simple setups connect the platform directly. With multiple channels or warehouses, an OMS or ERP usually sits between, so the WMS receives orders from one place and reports to one place." },
      { q: "What is a wave in warehouse picking?", a: "A group of orders released together for picking, planned by carrier cut-off, zone or priority to make picking efficient." },
      { q: "What is a short pick?", a: "When a picker cannot find enough stock at the location for an order line. The WMS reports it, and the order is re-sourced, partly shipped or the customer is told." },
      { q: "How often should the WMS send stock updates?", a: "Movement events as they happen for sellable stock changes, plus regular full snapshots to correct drift. The right frequency depends on sales velocity and how close to zero stock runs." },
      { q: "Should substitutions happen in the warehouse?", a: "Only under rules the customer has agreed to, such as grocery substitution preferences. Otherwise, a short pick should lead to re-sourcing or a customer decision, not a silent swap." },
      { q: "What is pack verification?", a: "Scanning items at packing to confirm the right products and quantities are in the parcel before it is sealed, which reduces mis-ships." },
      { q: "How do we test a WMS integration?", a: "With end-to-end scenarios in a test environment: order release, waves, short picks, multi-package shipments, cancellations at each stage, receiving with differences, cycle count adjustments and returns." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A WMS integration releases orders from your store or OMS to the warehouse, receives events as orders move through picking, packing and shipping, and reports every stock movement (receipts, putaway, adjustments, counts, transfers, damages) back to the system that calculates availability. Design for events, not just final states: short picks need re-sourcing, cancellations must stop work in progress, and multi-package shipments need tracking per parcel. Reconcile stock with scheduled snapshots and alert when the store and warehouse disagree.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "When fulfilment is outsourced, the integration is with a 3PL, covered in [[/blogs/ecommerce-fulfilment-integration|fulfilment integration]]. System boundaries between order, inventory and warehouse systems are in [[/blogs/oms-vs-ims|OMS vs IMS]], and choosing which warehouse fulfils each order is in [[/blogs/distributed-order-management|distributed order management]].",
        ],
      },
      {
        heading: "What a WMS Owns",
        body: [
          "A WMS knows things nobody else does: which bin holds which stock, which orders are in which wave, who picked what and what is on the dock waiting for the carrier. It should own these operational details. Your store or OMS should own the customer order, promises and communication. The integration exchanges just enough between them.",
        ],
        table: {
          headers: ["Data", "Usually owned by", "Shared with"],
          rows: [
            ["Customer order and promise", "Platform or OMS", "WMS (as fulfilment request)"],
            ["Bin locations and pick paths", "WMS", "Nobody else"],
            ["On-hand stock per warehouse", "WMS", "IMS, ERP or OMS"],
            ["Available to sell", "OMS, IMS or platform", "Sales channels"],
            ["Shipment and tracking", "WMS (with carrier)", "OMS, platform, customer"],
            ["Inventory value", "ERP", "Finance"],
          ],
        },
      },
      {
        heading: "Order Release and Waves",
        body: [
          "Orders leave the store or OMS as fulfilment requests. The WMS groups them into waves or batches by carrier cut-off, priority, zone or order profile. The integration should send priority information (express service, promised date) so the WMS can plan, and receive status events back: released, in wave, picking, packed, shipped. Customer service needs these statuses to answer 'can I still change my order?'.",
        ],
        diagram: {
          variant: "wmsflow",
          alt: "WMS order flow: order released, wave planned, pick (highlighted), pack and verify, ship confirmation, stock and status sync; a branch shows a short pick leading to re-sourcing or customer notification.",
          caption: "Picking is where reality meets the stock record; short picks must flow back immediately.",
        },
      },
      {
        heading: "Picking, Short Picks and Substitutions",
        body: [
          "A short pick means the stock record was wrong. The WMS should report it immediately with the line and quantity, adjust the location's stock, and let the OMS decide: re-source from another location, ship what is available and backorder the rest, or contact the customer. Substitutions should only happen under rules the customer agreed to, as in grocery. Repeated short picks on the same SKU or location should trigger a cycle count.",
        ],
      },
      {
        heading: "Packing and Shipping",
        body: [
          "Pack verification by scanning reduces mis-ships. At packing, the WMS or a shipping system selects carton size, prints labels and records package weights and dimensions. Ship confirmation must include each package's carrier, tracking number and contents, so partial and multi-parcel shipments are represented accurately in the store and in customer notifications. Carrier details are in [[/blogs/ecommerce-shipping-integration|shipping integration]].",
        ],
        cta: {
          title: "Connecting your storefront to a warehouse system?",
          description: "ZSpace can design the event contract between your platform, OMS and WMS so statuses, stock and tracking stay consistent.",
        },
      },
      {
        heading: "Stock Movements and Receiving",
        body: [
          "Every movement that changes sellable stock should produce an event: receipts against purchase orders or ASNs, putaway completion, adjustments, damages, cycle count corrections, transfers between warehouses and returns restocked. Send events with movement type, SKU, quantity, location and reason, so the receiving system can update availability and finance can value the change. Stock received but not yet put away should not be sellable.",
        ],
      },
      {
        heading: "Reconciliation",
        body: [
          "Events get lost and systems drift. Schedule full stock snapshots from the WMS, compare them with the expected position in the OMS or IMS, and alert on differences above a threshold. Investigate patterns: a SKU that drifts every week usually has a process problem, such as bundles, unit-of-measure mismatches or returns booked in the wrong place.",
        ],
      },
      {
        heading: "Integration Patterns",
        body: [],
        checklist: [
          "Events over queues for status and stock movements; see [[/blogs/ecommerce-event-driven-architecture|event-driven architecture]]",
          "Idempotent processing with event IDs and sequence handling for each SKU and order",
          "Periodic snapshots for correction",
          "Shared identifiers: SKUs, units of measure and order numbers agreed up front",
          "Dead-letter handling and alerts for failed messages",
          "Middleware or an integration platform when several systems are involved",
        ],
      },
      {
        heading: "Peak Season Considerations",
        body: [
          "During peaks, order volume, wave sizes and stock changes all spike. Load test the integration at expected peak volumes, check API rate limits on both sides, decide in advance which updates can be batched, and agree a manual fallback (for example, file-based order release) if the integration fails during a sale.",
        ],
      },
      {
        heading: "Advantages and Limitations of Direct WMS Integration",
        body: [],
        table: {
          headers: ["Advantages", "Limitations"],
          rows: [
            ["Real-time view of picking, packing and shipping", "More events to process and monitor"],
            ["Accurate stock from the system that counts it", "WMS data models vary; mapping takes effort"],
            ["Faster handling of short picks and exceptions", "Requires agreed identifiers and units across systems"],
            ["Better customer status updates", "Peak loads stress both sides of the integration"],
            ["Less manual reconciliation", "Changes in either system need coordinated releases"],
          ],
        },
      },
      {
        heading: "How to Integrate a WMS Step by Step",
        body: [],
        checklist: [
          "**1. Agree data ownership** between platform, OMS, IMS or ERP and WMS",
          "**2. Align identifiers and units of measure** for every SKU and bundle",
          "**3. Define the event list:** order statuses, short picks, packages, stock movements, receipts",
          "**4. Choose integration patterns:** queues for events, snapshots for reconciliation",
          "**5. Build order release** with priority and promise data",
          "**6. Handle short picks** with re-sourcing rules in the [[/blogs/oms-vs-ims|order management layer]]",
          "**7. Process shipments per package** and send tracking to customers",
          "**8. Reconcile stock daily** and alert on drift",
          "**9. Load test for peaks** and agree a manual fallback",
          "**10. Connect returns processing**, including [[/blogs/ecommerce-refund-automation|refund triggers]] on inspection",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a homeware retailer's WMS reports stock only at night, so daytime oversells happen whenever a fast-moving item runs low. The team adds movement events for picks, adjustments and receipts, keeps the nightly snapshot for reconciliation and applies safety stock on fast sellers. Oversells fall, and short picks now trigger automatic re-sourcing to the second warehouse.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Stock updates only once a day",
          "Short picks handled manually by email",
          "One tracking number assumed per order",
          "Received stock sellable before putaway",
          "Unit-of-measure mismatches (each versus case)",
          "No load testing before peak",
        ],
        cta: {
          title: "Want warehouse data your storefront can trust?",
          description: "Talk to ZSpace about [[/services/website-development|WMS and OMS integration]], [[/services/ai-automation|reconciliation and exception automation]] and [[/services/shopify-development|Shopify fulfilment workflows]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A good WMS integration exchanges events, not just end states, so every pick, short pick, package and stock movement reaches the systems that need it. Agree ownership and identifiers, handle exceptions explicitly and reconcile regularly. Related: [[/blogs/ecommerce-fulfilment-integration|3PL integration]], [[/blogs/oms-vs-ims|OMS vs IMS]] and [[/blogs/distributed-order-management|distributed order management]].",
        ],
      },
    ],
  },
];
