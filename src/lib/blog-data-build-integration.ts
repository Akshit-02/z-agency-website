import type { BlogPost } from "./blog-data";

/**
 * UK batch 531–580, generic build and integration set: replacing
 * spreadsheets with custom software (533), Amazon and eBay marketplace
 * integration (554, with a UK VAT note on online marketplaces) and SaaS audit
 * logging (567). Generic slugs in British English. No benchmarks, prices or
 * savings are quoted.
 * Sources checked 2026-10-10: Amazon SP-API docs (Orders, Notifications);
 * eBay developer program; GOV.UK policy paper on VAT for overseas goods sold
 * through online marketplaces (£135 consignments); OWASP Logging Cheat
 * Sheet; NIST SP 800-92; AWS S3 Object Lock.
 */
export const buildIntegrationPosts: BlogPost[] = [
  {
    slug: "replacing-spreadsheets-with-custom-software",
    title: "Replacing Spreadsheets with Custom Software: When It Is Worth It and How to Do It",
    seoTitle: "Replacing Spreadsheets with Custom Software: A Guide",
    excerpt:
      "When a business should replace critical spreadsheets with software, the warning signs, options from SaaS to custom builds, and a safe, step-by-step migration.",
    category: "Web Development",
    banner: "legacyflow",
    sceneKind: "workflow",
    bannerAlt: "Several shared spreadsheets with copied data and manual checks replaced by one application with a database, roles, validation, an audit trail and integrations, migrated in stages",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["b2b-enterprise", "professional-services", "manufacturing", "logistics-supply-chain"],
    relatedSlugs: ["low-code-vs-custom-software", "workflow-digitization-australia", "data-migration-australia"],
    faqs: [
      {
        q: "When should a business replace a spreadsheet with software?",
        a: "When the spreadsheet runs a process that matters and shows warning signs: several people editing copies, data re-keyed between files, errors reaching customers or finance, no record of who changed what, one person who understands it, or it is too slow or large to use. A spreadsheet used by one person for analysis is usually fine.",
      },
      {
        q: "Is custom software the only alternative?",
        a: "No. Many processes fit an existing SaaS product, a low-code platform or a database-backed tool. Custom software makes sense when the process is distinctive, needs integrations with several systems, or must scale beyond what low-code handles.",
      },
      {
        q: "How do we avoid losing data during the switch?",
        a: "Profile and clean the data first, migrate in rehearsals, reconcile record counts and totals, and run old and new side by side for a short period with a clear cut-over date. Keep a read-only archive of the final spreadsheets.",
      },
      {
        q: "Will people accept the new system?",
        a: "More readily if it is at least as fast for their daily tasks, keeps useful spreadsheet habits such as bulk editing and exports, and removes work they dislike, like re-keying. Involve the heaviest users in design and testing.",
      },
      {
        q: "Can we keep Excel for reporting?",
        a: "Yes. Exports, scheduled reports or a connection from a reporting tool let people analyse data in spreadsheets while the source of truth sits in the application.",
      },
    ],
    content: [
      {
        heading: "When is it worth replacing a spreadsheet with software?",
        body: [
          "**Replace a spreadsheet when it runs an important shared process and shows the warning signs: copies with conflicting data, re-keying between files and systems, errors reaching customers or finance, no audit trail, dependence on one person, or performance problems. Start by mapping the process, then choose the lightest option that works (SaaS, low-code or custom software), migrate data in rehearsed stages, and keep exports so people can still analyse in Excel.** Spreadsheets are excellent for analysis and prototypes; they are weak as multi-user operational systems.",
          "This guide is for operations and finance leads at growing businesses whose processes have outgrown spreadsheets.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Replace the shared operational spreadsheets, not every spreadsheet.",
          "Map the process and the rules hidden in formulas before choosing tools.",
          "Pick the lightest option that meets the requirements.",
          "Clean and rehearse the data migration.",
          "Keep exports and reporting for spreadsheet users.",
        ],
      },
      {
        heading: "Warning signs",
        body: [],
        table: {
          headers: ["Sign", "Why it matters"],
          rows: [
            ["**Multiple copies and versions**", "Decisions are made on different numbers"],
            ["**Re-keying into other systems**", "Errors and wasted time at every hand-off"],
            ["**No audit trail or access control**", "No record of who changed what; sensitive data open to everyone"],
            ["**Key-person dependency**", "Only one person understands the formulas and macros"],
            ["**Performance and size limits**", "Files slow down, break or exceed row limits"],
            ["**Customer-facing errors**", "Wrong prices, stock or deliveries reach customers"],
          ],
        },
      },
      {
        heading: "Options, from lightest to heaviest",
        body: [],
        table: {
          headers: ["Option", "Fits when", "Watch-outs"],
          rows: [
            ["**SaaS product**", "A standard process (CRM, stock, job management) with a good market product", "Fit to your process; per-user costs; data export"],
            ["**Low-code or database tool**", "Simple data and workflows, modest users, few integrations", "Limits at scale; governance; platform lock-in"],
            ["**Custom application**", "Distinctive processes, several integrations, complex rules or many users", "Build and ownership cost; needs a good partner"],
            ["**Hybrid**", "SaaS for standard parts plus a custom layer for the distinctive process", "Integration design"],
          ],
        },
        callout: {
          type: "tip",
          text: "See [[/blogs/low-code-vs-custom-software|low-code vs custom software]] for a fuller comparison.",
        },
      },
      {
        heading: "How to replace a spreadsheet safely",
        body: [],
        checklist: [
          "**Map the process:** who enters what, when, approvals, outputs and downstream systems.",
          "**Extract the rules:** document formulas, lookups, macros and manual checks; many are undocumented business rules.",
          "**Design the data model:** entities, relationships, validation and permissions rather than columns.",
          "**Build the smallest useful release:** the workflow that causes the most errors or re-keying.",
          "**Profile and clean data:** duplicates, free-text fields, inconsistent codes.",
          "**Rehearse migration:** import, reconcile counts and totals, fix, repeat.",
          "**Parallel run and cut-over:** a short period with both, then a clear switch date and a read-only archive.",
          "**Keep exports and reports:** for people who analyse in Excel.",
        ],
      },
      {
        heading: "Hypothetical example: a hire and service business",
        body: [
          "**This example is hypothetical.** A business that hires and services equipment ran bookings, servicing and invoicing from three linked spreadsheets maintained by one office manager. Double bookings and missed service dates were common. It mapped the process, found 40 informal rules in formulas and habits, and built a small web application for availability, bookings and service schedules, integrated with its accounting software. Data was migrated in three rehearsals, and staff still export weekly reports to Excel.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Rebuilding the spreadsheet's layout instead of the process.",
          "Missing rules hidden in formulas and habits.",
          "Migrating dirty data unchanged.",
          "Removing the ability to export and analyse.",
          "No owner for the new system.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Replace spreadsheets that run shared, important processes, not every spreadsheet. Map the process and its hidden rules, choose the lightest suitable option, migrate data in rehearsals and keep the analysis people value. For broader digitisation, see [[/blogs/workflow-digitization-australia|workflow digitisation]], and for moving data safely, [[/blogs/data-migration-australia|data migration]]. UK buyers commissioning a build can also read [[/blogs/custom-software-development-uk|custom software development in the UK]].",
        ],
        cta: {
          title: "Running a key process on spreadsheets?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/website-development|custom business applications]] and [[/services/ai-automation|workflow automation]]. If it would help to map the process and the options, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "amazon-ebay-marketplace-integration",
    title: "Marketplace Integration for Retailers: Connecting Amazon, eBay and Your Own Store",
    seoTitle: "Amazon and eBay Marketplace Integration for Retailers",
    excerpt:
      "How retailers connect Amazon, eBay and their own store: listings and product data, stock sync, orders and fulfilment, returns, fees and UK VAT on marketplaces.",
    category: "Shopify & Ecommerce",
    banner: "inventorysync",
    sceneKind: "orders",
    bannerAlt: "Products and stock held in one source of truth syncing to Amazon, eBay and a Shopify store, with orders flowing back for fulfilment, returns and fee reconciliation",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["shopify-development", "website-development"],
    relatedIndustrySlugs: ["ecommerce", "retail", "d2c-consumer", "consumer-electronics"],
    relatedSlugs: ["ecommerce-product-information-management", "omnichannel-ecommerce-architecture", "ecommerce-product-feeds"],
    faqs: [
      {
        q: "Should we use a multichannel tool or a custom integration?",
        a: "Start with an established multichannel listing or inventory tool if it supports your channels, catalogue and fulfilment. Custom integration makes sense when you have unusual product data, bundles or kits, several warehouses, an ERP that must stay the source of truth, or volumes where off-the-shelf tools struggle.",
      },
      {
        q: "How do we avoid overselling across channels?",
        a: "Hold stock in one system, sync availability to channels frequently and on every stock change, keep a buffer for fast-selling items, and reserve stock as soon as an order arrives from any channel.",
      },
      {
        q: "Which Amazon and eBay APIs are used?",
        a: "Amazon's Selling Partner API (SP-API) covers listings, orders, inventory, reports and notifications. eBay's Sell APIs cover inventory, offers and order fulfilment. Both require developer registration and authorisation by the seller.",
      },
      {
        q: "Do marketplaces handle UK VAT?",
        a: "In some cases. Online marketplaces are generally responsible for VAT on goods sold by overseas sellers to UK consumers where the goods are in the UK at the point of sale, and on imported consignments of £135 or less. UK-established sellers usually account for their own VAT. Confirm with your accountant.",
      },
      {
        q: "How do we reconcile marketplace payouts?",
        a: "Import settlement reports, match orders, refunds, fees and adjustments to payouts, and post summarised entries to your accounting system. See our guide to payment reconciliation automation.",
      },
    ],
    content: [
      {
        heading: "How should retailers integrate Amazon, eBay and their own store?",
        body: [
          "**Keep one source of truth for products and stock (your ecommerce platform, a PIM, an inventory system or an ERP), publish listings and availability to Amazon and eBay from it, pull marketplace orders back into one order flow for fulfilment, and reconcile marketplace payouts, fees and refunds in accounting.** Most retailers start with a multichannel tool; custom integration earns its place when catalogues, fulfilment or systems are complex.",
          "This guide is for ecommerce managers and technical leads at retailers selling on their own store and marketplaces.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Decide the source of truth for products, stock and orders.",
          "Map product data to each marketplace's categories and attributes.",
          "Sync stock on every change, with buffers for fast sellers.",
          "Bring all orders into one fulfilment flow.",
          "Reconcile payouts, fees and refunds, not just orders.",
        ],
      },
      {
        heading: "Integration architecture",
        body: [],
        table: {
          headers: ["Flow", "Direction", "Key points"],
          rows: [
            ["**Product data and listings**", "Source of truth → marketplaces", "Category mapping, required attributes, identifiers (GTINs), images, variations"],
            ["**Prices and offers**", "Source → marketplaces", "Channel-specific pricing, fees, promotions"],
            ["**Stock availability**", "Inventory → marketplaces", "Frequent sync, buffers, reservations"],
            ["**Orders**", "Marketplaces → order management", "Notifications or polling; de-duplication; customer data handling"],
            ["**Fulfilment and tracking**", "Order management → marketplaces", "Ship confirmations and tracking within marketplace deadlines"],
            ["**Returns and refunds**", "Both ways", "Marketplace return rules; stock and refund updates"],
            ["**Settlements**", "Marketplaces → accounting", "Payout reports, fees, adjustments"],
          ],
        },
      },
      {
        heading: "Marketplace APIs",
        body: [
          "Amazon's Selling Partner API provides APIs for listings, orders, inventory, reports and notifications, with seller authorisation and rate limits per operation. eBay's developer programme provides Sell APIs for inventory, offers and fulfilment. Both change over time, so isolate each marketplace behind an adapter and monitor deprecations. For Amazon fulfilment (FBA), stock held in Amazon's network needs separate tracking from your own warehouse stock.",
        ],
      },
      {
        heading: "Product data is the hard part",
        body: [
          "Each marketplace has its own categories, required attributes, variation rules and content limits. Rejected or suppressed listings usually trace back to missing attributes or identifiers. Keep rich product data in one place, with channel-specific mappings and overrides, rather than editing listings by hand. See [[/blogs/ecommerce-product-information-management|product information management]].",
        ],
      },
      {
        heading: "Stock sync and overselling",
        body: [],
        checklist: [
          "Push availability on every stock change, plus a periodic full sync to catch drift.",
          "Reserve stock as soon as any channel's order arrives.",
          "Use per-channel buffers for fast-moving or low-stock items.",
          "Handle bundles and kits by computing availability from components.",
          "Alert when a channel's listed quantity diverges from your system.",
        ],
      },
      {
        heading: "UK VAT note",
        body: [
          "Since 1 January 2021, online marketplaces have been responsible for VAT on goods sold to UK consumers by overseas sellers where the goods are in the UK at the point of sale, and on imported consignments of £135 or less. Northern Ireland has different rules for some goods. UK-established sellers generally account for their own VAT. Your integration should record which party accounted for VAT on each order so accounting is correct. Confirm the treatment with your accountant.",
        ],
      },
      {
        heading: "Hypothetical example: a homeware retailer",
        body: [
          "**This example is hypothetical.** A UK homeware retailer selling on Shopify, Amazon and eBay oversold popular items during promotions because stock was updated hourly from a spreadsheet. It made Shopify the source of truth for products and stock, connected Amazon and eBay through a multichannel tool, added component-based availability for gift sets with a small custom service, and imported settlement reports into its accounting system weekly. Oversells became rare and marketplace fees became visible by product.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Editing listings by hand in each marketplace.",
          "Slow or batch-only stock sync.",
          "Orders processed in each marketplace separately.",
          "Ignoring fees and adjustments in reconciliation.",
          "No monitoring of API changes and suppressed listings.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Amazon Selling Partner API documentation; SP-API Orders API; eBay Developers Program; GOV.UK: VAT treatment of overseas goods sold to customers.",
          "Accessed 10 October 2026. Nothing here is tax advice.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Marketplace integration works when products and stock have one source of truth, product data is mapped once per channel, stock syncs on every change, orders flow into one fulfilment process and payouts are reconciled. Start with a multichannel tool and add custom services where your catalogue or systems need them. See [[/blogs/omnichannel-ecommerce-architecture|omnichannel ecommerce architecture]] and [[/blogs/payment-reconciliation-automation|payment reconciliation automation]].",
        ],
        cta: {
          title: "Overselling or re-keying marketplace orders?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/shopify-development|Shopify builds and integrations]] and [[/services/website-development|custom commerce integrations]]. If it would help to map your channels and systems, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "saas-audit-logging",
    title: "SaaS Audit Logging: Designing Evidence Trails for Enterprise Customers",
    seoTitle: "SaaS Audit Logging: Designing Enterprise Audit Trails",
    excerpt:
      "How to design audit logs for a B2B SaaS product: which events to record, event schema, tamper evidence, retention, customer access, exports and SIEM streaming.",
    category: "Web Development",
    banner: "secauditflow",
    sceneKind: "security",
    bannerAlt: "User and system actions in a SaaS product recorded as structured audit events with actor, action, target and context, stored in tamper-evident storage and exposed to customer admins through search, export and SIEM streaming",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise", "cybersecurity", "fintech"],
    relatedSlugs: ["saas-roles-and-permissions", "enterprise-sso-implementation", "multi-tenant-saas-architecture"],
    faqs: [
      {
        q: "What is the difference between audit logs and application logs?",
        a: "Application logs help engineers debug and are often sampled, verbose and short-lived. Audit logs record who did what, to which resource, when and from where, for accountability and investigation, and need completeness, integrity and defined retention.",
      },
      {
        q: "Which events should a SaaS audit log record?",
        a: "Authentication events, changes to users, roles and permissions, security settings, data exports and bulk actions, configuration and integration changes, billing and ownership changes, and access to sensitive records. Record failed attempts as well as successes for security events.",
      },
      {
        q: "How do we make audit logs tamper-evident?",
        a: "Write events append-only, restrict who can delete or change them, store them in write-once storage such as object locking, and consider hash chaining so gaps or edits can be detected. Monitor and alert on changes to logging itself.",
      },
      {
        q: "How long should audit logs be kept?",
        a: "Long enough for customers' investigation and compliance needs, often a year or more for enterprise plans, balanced against data minimisation because logs contain personal data. Make retention clear in your documentation and contracts.",
      },
      {
        q: "Should customers be able to access audit logs?",
        a: "Enterprise customers increasingly expect it: an admin view with search and filters, exports, an API and streaming to their SIEM. Scope access by tenant and role.",
      },
    ],
    content: [
      {
        heading: "What should SaaS audit logging include?",
        body: [
          "**A SaaS audit log should record security-relevant and business-critical actions as structured events (actor, action, target, tenant, time, source and outcome), write them append-only to tamper-evident storage, keep them for a defined retention period, and give customer admins search, export, an API and SIEM streaming, scoped to their tenant.** Enterprise buyers ask for it in security reviews because it lets them investigate incidents and show control over who did what.",
          "This guide is for product and engineering leads at B2B SaaS companies selling to larger customers.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Separate audit events from application debug logs.",
          "Use one structured schema for every event.",
          "Record failures as well as successes for security events.",
          "Make storage append-only and tamper-evident.",
          "Give customers search, export, API and streaming.",
          "Treat logs as personal data: minimise and set retention.",
        ],
      },
      {
        heading: "Which events to record",
        body: [],
        table: {
          headers: ["Category", "Examples"],
          rows: [
            ["**Authentication**", "Sign-in success and failure, MFA changes, SSO configuration, session revocation"],
            ["**Users and access**", "Invitations, role changes, permission grants, SCIM provisioning and deprovisioning"],
            ["**Security settings**", "IP allow lists, password policy, API keys and tokens created or revoked"],
            ["**Data access and export**", "Exports, bulk downloads, viewing sensitive records, report sharing"],
            ["**Configuration**", "Workflow, integration and webhook changes; feature settings"],
            ["**Data changes**", "Create, update and delete of important records, with before and after values where appropriate"],
            ["**Support access**", "Vendor staff impersonation or support sessions, with reason and approval"],
          ],
        },
      },
      {
        heading: "Event schema",
        body: [
          "Use one schema for every event so customers can search and stream consistently. The OWASP Logging Cheat Sheet covers which attributes to record and what to exclude.",
        ],
        code: {
          label: "Example audit event (illustrative)",
          text: `{
  "id": "evt_01J9X4",
  "tenantId": "org_482",
  "occurredAt": "2026-10-10T09:41:12Z",
  "actor": { "type": "user", "id": "usr_77", "email": "a.patel@example.com" },
  "action": "role.assigned",
  "target": { "type": "user", "id": "usr_91" },
  "changes": { "role": { "from": "member", "to": "admin" } },
  "context": { "ip": "203.0.113.10", "userAgent": "Mozilla/5.0", "requestId": "req_9f2" },
  "outcome": "success"
}`,
        },
      },
      {
        heading: "Integrity, storage and retention",
        body: [],
        checklist: [
          "Write audit events in the same transaction as the change, or through an outbox, so none are lost.",
          "Store append-only; restrict deletion to a retention process.",
          "Use write-once storage such as S3 Object Lock for archives.",
          "Consider hash chaining per tenant to detect gaps or edits.",
          "Synchronise clocks and record times in UTC.",
          "Exclude secrets, passwords and full payment data; minimise personal data.",
          "Define retention per plan and document it.",
        ],
      },
      {
        heading: "Customer access",
        body: [
          "Enterprise customers expect to use audit data in their own tools. Provide an admin view with filters by actor, action, target and date; CSV or JSON export; an API with pagination; and streaming to SIEM tools via webhooks or cloud storage delivery. Scope everything by tenant, restrict access to admin roles, and log access to the audit log itself. For tenant isolation patterns, see [[/blogs/multi-tenant-saas-architecture|multi-tenant SaaS architecture]].",
        ],
      },
      {
        heading: "Hypothetical example: a B2B HR platform",
        body: [
          "**This example is hypothetical.** An HR SaaS company kept a free-text activity feed that failed several enterprise security reviews. It defined 60 audit event types, added a common schema, wrote events through an outbox from the same database transactions, archived them to write-once storage, and built an admin audit view with export and a streaming option for enterprise plans. Security questionnaires became easier to answer with documented retention and examples.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Treating debug logs as audit logs.",
          "Free-text messages instead of structured events.",
          "Recording only successful actions.",
          "Logging secrets or full personal data.",
          "No customer access, so support exports logs by hand.",
          "Audit events lost when a background job fails.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "OWASP Logging Cheat Sheet; NIST SP 800-92: Guide to Computer Security Log Management; AWS S3 Object Lock.",
          "Accessed 10 October 2026.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Good audit logging is a product feature: complete structured events, tamper-evident storage, clear retention and customer access through search, export and streaming. Build it before enterprise security reviews ask for it. For permissions and access lifecycle, see [[/blogs/saas-roles-and-permissions|SaaS roles and permissions]] and [[/blogs/joiner-mover-leaver-automation|joiner-mover-leaver automation]].",
        ],
        cta: {
          title: "Enterprise security reviews asking for audit logs?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/website-development|SaaS engineering and security features]]. If it would help to design your audit event model and customer access, we are happy to talk it through.",
        },
      },
    ],
  },
];
