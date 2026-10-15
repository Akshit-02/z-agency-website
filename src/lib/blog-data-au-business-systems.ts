import type { BlogPost } from "./blog-data";

/**
 * Batch 331–380 business systems set: supplier portals, asset maintenance
 * management (absorbing work order management), warranty management in
 * Australia, business rules engines, technical discovery before estimating,
 * and a software vendor handover checklist. Generic slugs in Australian
 * English except warranty management, where the Australian Consumer Law
 * changes the advice. No prices, savings or client results are quoted.
 * Sources checked 2026-10-10: ACCC warranties guidance and mandatory
 * warranty-against-defects text (reg 90, Competition and Consumer
 * Regulations 2010; ACCC blocks automated fetch, cited from search summary);
 * Payment Times Reporting Regulator site; OMG DMN; Modern Slavery Act
 * reporting threshold (general). Not legal advice.
 */
export const auBusinessSystemsPosts: BlogPost[] = [
  {
    slug: "supplier-portal-development",
    title: "Supplier Portal Development: Purchase Orders, Approvals and Supplier Onboarding",
    seoTitle: "Supplier Portal Development: A Practical Guide",
    excerpt:
      "How to plan a supplier portal: onboarding and verification, purchase orders, delivery notices, invoice matching, payment status, compliance and build vs buy.",
    category: "Web Development",
    banner: "procureflow",
    sceneKind: "workflow",
    bannerAlt: "Suppliers using a portal to complete onboarding, acknowledge purchase orders, send delivery notices, submit invoices and check payment status, connected to the buyer's ERP",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["manufacturing", "retail", "construction-infrastructure", "logistics-supply-chain", "b2b-enterprise"],
    relatedSlugs: ["ai-procurement-automation", "b2b-portal-development-australia", "accounting-software-integration-australia"],
    faqs: [
      {
        q: "What does a supplier portal do?",
        a: "It gives suppliers a secure place to register and keep their details current, receive and acknowledge purchase orders, confirm deliveries, submit invoices, see payment status and provide compliance documents. It replaces email and phone chasing for both sides.",
      },
      {
        q: "Should we build a supplier portal or use our ERP's?",
        a: "Check your ERP or procurement suite first; many include supplier portals. Custom development makes sense when your processes are unusual, you use several ERPs, the packaged portal is hard for suppliers to use, or you need deep integration with operational systems such as scheduling or quality.",
      },
      {
        q: "How can a portal reduce invoice fraud?",
        a: "Require verified supplier users with multi-factor authentication, control changes to bank details with a separate verification step (such as calling a known contact), notify suppliers of changes, and match invoices to purchase orders and receipts before payment.",
      },
      {
        q: "Do Australian payment reporting rules affect supplier portals?",
        a: "Large businesses covered by the Payment Times Reporting Scheme (broadly those with more than $100 million in consolidated revenue) report how quickly they pay small business suppliers. A portal that tracks invoice receipt and payment dates helps produce accurate data. Check your obligations with the regulator.",
      },
      {
        q: "Can small suppliers use e-invoicing instead of the portal?",
        a: "Yes, and you should allow it. Peppol e-invoicing lets suppliers send structured invoices from their accounting software. A portal can accept Peppol invoices, uploads and manual entry, so suppliers are not forced into one channel.",
      },
    ],
    content: [
      {
        heading: "What should a supplier portal include?",
        body: [
          "**A supplier portal should let suppliers onboard and maintain their details with verification, receive and acknowledge purchase orders, send delivery notices, submit invoices (including e-invoices) that are matched to orders and receipts, see payment status, and upload compliance documents, all integrated with your ERP or accounting system.** Check whether your ERP's supplier module meets these needs before building.",
          "This guide is for procurement, finance and operations leaders. For the customer-facing equivalent, see [[/blogs/b2b-portal-development-australia|B2B portal development]]; for AI in purchasing, [[/blogs/ai-procurement-automation|AI procurement automation]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Start from the supplier's journey, not the ERP screens.",
          "Verify suppliers and protect bank detail changes.",
          "Match invoices to orders and receipts automatically.",
          "Show payment status to cut chasing.",
          "Accept Peppol e-invoices as well as uploads.",
          "Check packaged options before custom development.",
        ],
      },
      {
        heading: "Core workflows",
        body: [],
        table: {
          headers: ["Workflow", "What suppliers do", "What the business gains"],
          rows: [
            ["**Onboarding**", "Register, provide ABN, bank and insurance details, accept terms", "Verified, complete supplier records"],
            ["**Purchase orders**", "Receive, acknowledge, propose changes", "Confirmed dates and quantities"],
            ["**Delivery notices**", "Send advance shipping notices and documents", "Planned receiving"],
            ["**Invoices**", "Submit e-invoices or uploads against POs", "Automatic two- or three-way matching"],
            ["**Payment status**", "See approval and payment dates", "Fewer calls to accounts payable"],
            ["**Compliance**", "Upload certificates, insurance, questionnaires", "Expiry alerts and audit trail"],
          ],
        },
      },
      {
        heading: "Australian considerations",
        body: [],
        checklist: [
          "Check ABNs and GST registration with ABN Lookup during onboarding.",
          "Large entities in the Payment Times Reporting Scheme report payment times to small business suppliers ([[https://paymenttimes.gov.au/|Payment Times Reporting Regulator]]); accurate invoice and payment dates help.",
          "Entities required to report under the Modern Slavery Act 2018 (broadly those over $100 million consolidated revenue) often collect supplier questionnaires; a portal can manage them.",
          "Accept Peppol e-invoices; see [[/blogs/accounting-software-integration-australia|accounting software integration]].",
          "Supplier contacts' personal information may be covered by the Privacy Act; collect only what you need.",
          "This is general information; confirm your obligations with advisers.",
        ],
      },
      {
        heading: "Security and fraud controls",
        body: [
          "Supplier portals are a target for payment redirection fraud. Use named supplier users with multi-factor authentication and roles, verify bank detail changes out of band, hold payments briefly after changes, notify the supplier's existing contacts of any change, and log every action. Limit what suppliers can see to their own orders and invoices. See [[/blogs/saas-roles-and-permissions|roles and permissions]].",
        ],
      },
      {
        heading: "Build or buy",
        body: [],
        table: {
          headers: ["Option", "Fits when"],
          rows: [
            ["**ERP supplier module**", "One ERP, standard processes, acceptable supplier experience"],
            ["**Procurement suite**", "Sourcing, contracts and spend analytics needed as well"],
            ["**Custom portal**", "Several ERPs, unusual workflows, operational integrations or a better supplier experience"],
            ["**Hybrid**", "Packaged procurement with a custom portal for specific supplier groups"],
          ],
        },
      },
      {
        heading: "Hypothetical example: a food manufacturer",
        body: [
          "**This example is hypothetical.** A manufacturer with about 300 suppliers managed POs by email and spent hours answering payment queries. It built a portal integrated with its ERP: suppliers acknowledged POs, sent delivery notices with batch and expiry details, submitted invoices (or sent Peppol e-invoices) matched automatically to receipts, and saw payment dates. Bank detail changes required a call-back to a known contact. The team tracked PO acknowledgement time, matching exceptions and accounts payable enquiries.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Forcing suppliers to re-key invoices they can send as e-invoices.",
          "Bank detail changes without independent verification.",
          "A portal that does not show payment status.",
          "Suppliers seeing other suppliers' data.",
          "Building custom before checking the ERP's module.",
        ],
      },
      {
        heading: "Related guides",
        body: [],
        checklist: [
          "[[/blogs/ai-invoice-processing|AI invoice processing]] for matching and exceptions.",
          "[[/blogs/master-data-management|Master data management]] for clean supplier records.",
          "[[/blogs/integration-architecture-patterns|Integration architecture patterns]] for connecting the ERP.",
          "[[/blogs/digital-forms-development-australia|Digital forms development]] for accessible onboarding forms.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A supplier portal works when it saves suppliers effort and protects the business: verified onboarding, acknowledged orders, matched invoices, visible payment status and strong controls on bank details. Check packaged options first and build where your processes or integrations need it.",
        ],
        cta: {
          title: "Planning a supplier portal?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|portals and ERP integrations]] and [[/services/ai-automation|procure-to-pay automation]]. If it would help to map your supplier workflows, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "asset-maintenance-management-software",
    title: "Asset Maintenance Management Software: Equipment Registers, Work Orders and Preventive Maintenance",
    seoTitle: "Asset Maintenance Software: Registers and Work Orders",
    excerpt:
      "How asset maintenance software works: equipment registers, preventive and condition-based maintenance, work orders, parts, inspections and build vs buy.",
    category: "Web Development",
    banner: "itsmflow",
    sceneKind: "workflow",
    bannerAlt: "An equipment register feeding preventive maintenance schedules and work orders to technicians on mobile devices, with parts, inspection records and maintenance metrics",
    date: "2026-10-10",
    updated: "2026-10-10",
    readingTime: "5 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["manufacturing", "construction-infrastructure", "logistics-supply-chain", "energy-cleantech", "agritech"],
    relatedSlugs: ["field-service-management-software-australia", "inventory-management-software-australia", "manufacturing-software-integration"],
    faqs: [
      {
        q: "What is the difference between asset management and field service software?",
        a: "Asset maintenance software (often called a CMMS or EAM system) manages your own equipment, buildings and vehicles: registers, maintenance schedules and work orders. Field service software manages technicians doing jobs at customers' sites: scheduling, dispatch, quoting and invoicing. Some businesses need both.",
      },
      {
        q: "What is preventive maintenance?",
        a: "Maintenance scheduled by time or usage (such as every three months or every 500 hours) to reduce breakdowns, as opposed to reactive maintenance after failure. Condition-based maintenance triggers work from measurements such as vibration, temperature or meter readings.",
      },
      {
        q: "What should a work order contain?",
        a: "The asset, problem or task, priority, assigned people, required parts and tools, safety requirements, checklists, time and parts used, photos, sign-off and status history. Mobile access, including offline, matters for technicians.",
      },
      {
        q: "Which maintenance metrics are useful?",
        a: "Common ones include the share of planned versus reactive work, preventive maintenance completion on time, backlog, mean time between failures (MTBF) and mean time to repair (MTTR) for critical assets, and maintenance cost per asset. Define each clearly before comparing.",
      },
      {
        q: "Should we build or buy maintenance software?",
        a: "Buy if a CMMS product fits your assets and processes. Custom development makes sense when maintenance must integrate tightly with production, operational or customer systems, when assets or compliance processes are unusual, or when you are building maintenance features into your own product.",
      },
          {
        q: "When is predictive maintenance worth it?",
        a: "When failures of critical assets are costly, sensors can measure early warning signs, and you have recorded failures and maintenance history linked to the same assets. Without that data, start with preventive schedules and condition-based alerts, and record failure causes on work orders so predictive models become possible later.",
      },
],
    content: [
      {
        heading: "What should asset maintenance software do?",
        body: [
          "**Asset maintenance software keeps a register of equipment and facilities, schedules preventive and condition-based maintenance, manages work orders from request to sign-off on mobile devices, tracks parts, records inspections for compliance, and reports on reliability and backlog.** It is usually bought as a CMMS; custom work fits when integration or unusual processes demand it.",
          "This guide is for maintenance, operations and asset managers. For technicians working at customer sites, see [[/blogs/field-service-management-software-australia|field service management software]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "A clean asset register is the foundation.",
          "Shift from reactive to planned work over time.",
          "Mobile, offline-capable work orders for technicians.",
          "Link parts to work orders and inventory.",
          "Keep inspection and compliance records searchable.",
          "Measure planned vs reactive work and backlog.",
        ],
      },
      {
        heading: "Core capabilities",
        body: [],
        table: {
          headers: ["Capability", "What it covers"],
          rows: [
            ["**Asset register**", "Hierarchy (site, area, asset, component), make, model, serial, location, criticality, documents"],
            ["**Maintenance plans**", "Time-, usage- and condition-based schedules with task lists"],
            ["**Work orders**", "Requests, approval, scheduling, assignment, checklists, time, parts, photos, sign-off"],
            ["**Parts and stores**", "Stock levels, reservations for work orders, reorder points"],
            ["**Inspections and compliance**", "Checklists, test results, certificates, expiry alerts"],
            ["**Reporting**", "Planned vs reactive, backlog, MTBF and MTTR, cost per asset"],
          ],
        },
      },
      {
        heading: "Work order lifecycle",
        body: [
          "A typical lifecycle runs from request (by staff or a sensor alert) to triage, approval, planning (parts, permits, people), scheduling, execution on a mobile device, completion with time and parts recorded, sign-off and closure. Keep statuses few and clear. Technicians need offline access, photos and quick checklists; see [[/blogs/offline-first-mobile-app-development|offline-first mobile apps]].",
        ],
      },
      {
        heading: "Compliance and safety records",
        body: [
          "Many organisations have work health and safety duties for plant and equipment, plus industry-specific inspection requirements. Software helps by scheduling inspections, recording results and certificates, and flagging overdue items, but it does not discharge legal duties. Confirm your obligations with your WHS regulator and advisers.",
        ],
      },
      {
        heading: "Integrations and sensors",
        body: [],
        checklist: [
          "ERP or accounting for parts purchasing and costs.",
          "Inventory for spare parts; see [[/blogs/inventory-management-software-australia|inventory management software]].",
          "Production or SCADA data for usage-based schedules; see [[/blogs/manufacturing-software-integration|manufacturing software integration]].",
          "Sensors for condition-based alerts, with thresholds tuned to avoid noise.",
          "Field service software if technicians also work at customer sites.",
        ],
      },
      {
        heading: "Hypothetical example: a cold-chain logistics company",
        body: [
          "**This example is hypothetical.** A cold-chain operator tracked refrigeration units, forklifts and vehicles in spreadsheets, and most maintenance was reactive. It adopted a CMMS for the register and preventive schedules, and commissioned a custom integration that turned temperature sensor alerts into work orders with the asset and recent readings attached. Technicians used a mobile app that worked offline in freezers. The team tracked the share of planned work and repeat failures on critical units.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Starting with an incomplete, inconsistent asset register.",
          "Too many work order statuses and fields.",
          "No offline mode for technicians.",
          "Sensor alerts that create noise instead of useful work.",
          "Metrics without clear definitions.",
        ],
      },
      {
        heading: "Related guides",
        body: [],
        checklist: [
          "[[/blogs/energy-management-software-australia|Energy management software]] for metering assets.",
          "[[/blogs/master-data-management|Master data management]] for keeping registers clean.",
          "[[/blogs/low-code-vs-custom-software|Low-code vs custom software]] for simpler maintenance workflows.",
          "[[/blogs/business-intelligence-dashboards-australia|Business intelligence dashboards]] for reliability reporting.",
        ],
      },
      {
        heading: "Predictive maintenance: when the data supports it",
        body: [
          "Predictive maintenance uses sensor readings and maintenance history to estimate when an asset is likely to fail, so work is scheduled before breakdown. It needs enough relevant data: consistent sensor readings, recorded failures with causes, and maintenance history linked to the same asset IDs. Many organisations should first get preventive schedules and condition alerts working well.",
        ],
        checklist: [
          "Start with critical assets where failures are costly and sensors are practical.",
          "Record failure modes and causes consistently on work orders; models depend on it.",
          "Compare predictions with actual failures before trusting them.",
          "Keep maintenance planners in the loop to review and override.",
        ],
        table: {
          headers: ["Stage", "What it needs"],
          rows: [
            ["**Condition-based alerts**", "Sensors and agreed thresholds; see [[/blogs/iot-monitoring-platform-development|IoT monitoring platforms]]"],
            ["**Trend detection**", "Clean time-series data and simple rules on rates of change"],
            ["**Predictive models**", "Recorded failures and causes, enough comparable assets, and evaluation against a baseline; see [[/blogs/predictive-analytics-vs-generative-ai|predictive analytics]]"],
          ],
        },
      },
      {
        heading: "Asset lifecycle and replacement decisions",
        body: [
          "Maintenance data also supports lifecycle decisions from acquisition to disposal. Link the asset register to procurement (purchase date, cost, warranty), maintenance (cost and downtime history), and finance (depreciation), then review assets that are near end of life, costly to keep running, or no longer fit for purpose.",
        ],
        checklist: [
          "Record purchase details, expected life and warranty at acquisition.",
          "Track cumulative maintenance cost and downtime per asset.",
          "Flag assets approaching end of life or rising repair costs for review.",
          "Compare repair, refurbish and replace options with total cost over the remaining life.",
          "Record disposal and transfer the history if the asset is redeployed.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Good asset maintenance software rests on a clean register, planned schedules, mobile work orders and reliable records. Buy a CMMS where it fits, integrate it with parts, finance and sensors, and build custom only where your operations require it. For rented housing in the UK, see [[/blogs/property-compliance-management-software-uk|property compliance management software]]. For goods and passenger vehicles, see [[/blogs/fleet-maintenance-software-uk|fleet maintenance software in the UK]].",
        ],
        cta: {
          title: "Connecting maintenance with the rest of your operations?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|operational software and integrations]] and [[/services/mobile-app-development|technician mobile apps]]. If it would help to plan your maintenance systems, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "warranty-management-software-australia",
    title: "Warranty Management Software in Australia: Registration, Claims and Service Workflows",
    seoTitle: "Warranty Management Software in Australia",
    excerpt:
      "Warranty software for Australian businesses: consumer guarantees vs warranties, mandatory text, product registration, claims, repairs and supplier recovery.",
    category: "Web Development",
    banner: "exchangeflow",
    sceneKind: "workflow",
    bannerAlt: "A customer registering a product and lodging a claim, with proof of purchase, triage, repair, replacement or refund decisions and supplier recovery tracked in one system",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["consumer-electronics", "retail", "manufacturing", "d2c-consumer"],
    relatedSlugs: ["ecommerce-returns-australia", "customer-portal-development-australia", "ai-document-processing-australia"],
    faqs: [
      {
        q: "What is the difference between a warranty and a consumer guarantee in Australia?",
        a: "Consumer guarantees under the Australian Consumer Law apply automatically to goods and services sold to consumers and cannot be excluded. A warranty against defects is a promise a business chooses to give, such as a manufacturer's warranty; it is in addition to the guarantees. Extended warranties are optional paid products and do not replace consumer guarantee rights.",
      },
      {
        q: "Is there mandatory text for warranties?",
        a: "Yes. Warranty against defects documents must include mandatory text, beginning 'Our goods come with guarantees that cannot be excluded under the Australian Consumer Law', along with specific information such as how to claim and the warrantor's details. The ACCC publishes the required wording. Get legal advice on your documents.",
      },
      {
        q: "Can product registration be required to claim?",
        a: "Registration can help service and safety recalls, but consumer guarantee rights do not depend on registering. Software should not block a claim because a product was not registered; proof of purchase can take many forms.",
      },
      {
        q: "What should a warranty claims workflow include?",
        a: "Claim intake with product and purchase details, evidence such as photos, triage against the type of failure, decisions on repair, replacement or refund, service agent assignment, parts, customer updates, closure and records for supplier recovery and quality analysis.",
      },
      {
        q: "Can AI help with warranty claims?",
        a: "It can extract details from receipts and photos, suggest likely failure categories and draft customer messages. Keep people responsible for decisions, avoid automated rejections, and check outputs, because wrongly refusing a remedy can breach the Australian Consumer Law.",
      },
    ],
    content: [
      {
        heading: "What should warranty management software do in Australia?",
        body: [
          "**Warranty management software should register products (optionally), take claims online with proof of purchase and evidence, triage them, route repairs to service agents, decide on repair, replacement or refund in line with the Australian Consumer Law, keep customers updated, recover costs from suppliers, and report on failure trends.** In Australia it must treat consumer guarantees, which apply automatically, separately from voluntary warranties.",
          "This guide is for manufacturers, importers, retailers and service networks. It is general information, not legal advice. For online returns, see [[/blogs/ecommerce-returns-australia|ecommerce returns in Australia]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Design for consumer guarantees first, warranties second.",
          "Never make registration a condition of a valid claim.",
          "Include the ACCC's mandatory text in warranty documents.",
          "Track claims, decisions and reasons for disputes and audits.",
          "Capture data for supplier recovery and quality improvement.",
        ],
      },
      {
        heading: "Guarantees, warranties and extended warranties",
        body: [],
        table: {
          headers: ["Type", "Source", "Notes"],
          rows: [
            ["**Consumer guarantees**", "Australian Consumer Law, automatic", "Cannot be excluded; remedies depend on major or minor failure"],
            ["**Warranty against defects**", "Voluntary promise by the business", "Must include mandatory text and claim details"],
            ["**Extended warranty**", "Optional paid product", "Must not mislead about guarantee rights"],
          ],
        },
      },
      {
        heading: "The mandatory text",
        body: [
          "Warranty against defects documents must include text set out in the Competition and Consumer Regulations, starting 'Our goods come with guarantees that cannot be excluded under the Australian Consumer Law', followed by statements about remedies for major and minor failures, plus the warrantor's details and how to claim. The ACCC publishes the wording and requirements ([[https://www.accc.gov.au/business/selling-products-and-services/warranties|ACCC warranties]]). Store approved templates in the system so every document uses current wording.",
        ],
      },
      {
        heading: "Claims workflow",
        body: [],
        checklist: [
          "**Intake:** accessible online form, product and serial number, proof of purchase (receipt, bank statement or order record), photos or video.",
          "**Triage:** check product, purchase date and failure description; flag safety issues.",
          "**Assessment:** in-house or service agent inspection; record whether the failure is major or minor.",
          "**Remedy:** repair, replacement or refund, with reasons recorded.",
          "**Logistics:** pick-up, drop-off or on-site service; parts ordering.",
          "**Communication:** status updates and expected timeframes.",
          "**Closure and recovery:** claim costs recovered from suppliers or manufacturers where agreements allow.",
        ],
      },
      {
        heading: "Data, integrations and reporting",
        body: [
          "Connect claims to orders (ecommerce and POS), the product catalogue with serial numbers, service agent systems, parts inventory and accounting. Report on claim rates by product and batch, time to resolution, remedies and costs, and recurring failures to feed back into product quality. Handle customers' personal information in line with the Privacy Act if it applies. See [[/blogs/customer-portal-development-australia|customer portals]] for claim status tracking.",
        ],
      },
      {
        heading: "Hypothetical example: an appliance importer",
        body: [
          "**This example is hypothetical.** An importer handled warranty claims by email with retailers forwarding customers. It built a claims portal where customers or retailers lodged claims with photos and proof of purchase, the system checked the product and serial number, and claims were routed to the nearest authorised repairer. Decisions and reasons were recorded, warranty documents were generated from approved templates including the mandatory text, and claim data by batch was shared with the manufacturer for recovery.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Rejecting claims because a product was not registered.",
          "Warranty terms that imply guarantee rights do not exist.",
          "Outdated templates missing the mandatory text.",
          "No record of reasons for decisions.",
          "Automated refusals without human review.",
        ],
      },
      {
        heading: "Related guides",
        body: [],
        checklist: [
          "[[/blogs/ai-document-processing-australia|AI document processing]] for receipts and repair reports.",
          "[[/blogs/digital-forms-development-australia|Digital forms development]] for accessible claim forms.",
          "[[/blogs/field-service-management-software-australia|Field service management software]] for on-site repairs.",
          "[[/blogs/human-in-the-loop-ai|Human-in-the-loop AI]] for keeping decisions with people.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Warranty software in Australia must start from consumer guarantees, use current mandatory text, accept claims easily, record decisions and reasons, and turn claims data into supplier recovery and better products. Have your documents and processes reviewed by a lawyer.",
        ],
        cta: {
          title: "Managing warranty claims by email?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|claims portals and integrations]] and [[/services/ai-automation|document and claims automation]]. We are not lawyers, but if it would help to plan the software, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "business-rules-engine",
    title: "Business Rules Engines: When to Separate Rules from Application Code",
    seoTitle: "Business Rules Engines: When to Use One",
    excerpt:
      "When a business rules engine helps and when it does not: decision tables, DMN, configuration vs code, governance, testing, audit trails and alternatives.",
    category: "Web Development",
    banner: "approvalflow",
    sceneKind: "workflow",
    bannerAlt: "Pricing, eligibility and approval rules moved from application code into versioned decision tables managed by business owners, tested and audited before release",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["insurtech", "fintech", "b2b-enterprise", "logistics-supply-chain"],
    relatedSlugs: ["workflow-automation", "low-code-vs-custom-software", "feature-flag-implementation"],
    faqs: [
      {
        q: "What is a business rules engine?",
        a: "Software that evaluates business rules, such as pricing, eligibility, discounts, routing or approval thresholds, kept separately from application code, often as decision tables. Changing a rule then becomes a governed configuration change rather than a code release.",
      },
      {
        q: "When should we use one?",
        a: "When rules change often, are owned by business teams, vary by product, region or customer, need audit trails explaining decisions, or are numerous enough that hard-coding them makes the application hard to change.",
      },
      {
        q: "When is a rules engine overkill?",
        a: "When rules are few, stable and owned by developers. A simple configuration table, a small rules module in code, or feature flags are easier to maintain and test than a full engine.",
      },
      {
        q: "What is DMN?",
        a: "Decision Model and Notation is an OMG standard for modelling decisions with decision tables and a defined expression language, so business and technical people share one model. Several rules engines support it.",
      },
      {
        q: "Can business users change rules safely?",
        a: "Yes, with guardrails: versioned rules, validation, automated tests against example cases, approval before release, the ability to roll back, and an audit trail of which rule version made each decision.",
      },
    ],
    content: [
      {
        heading: "When should you separate business rules from code?",
        body: [
          "**Separate business rules from application code when they change often, are owned by business teams, vary by product or customer, or must be explained and audited; keep them in code or simple configuration when they are few, stable and developer-owned. If you separate them, manage rules like code: versioned, tested against example cases, approved before release and logged with every decision.** A rules engine is a tool for change and transparency, not a default.",
          "This guide is for CTOs, architects and product owners. For workflow tools, see [[/blogs/workflow-automation|workflow automation]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Rules engines pay off when rules change often and are business-owned.",
          "Decision tables are readable by both business and engineering.",
          "Version, test and approve rule changes.",
          "Log which rule version made each decision.",
          "Simple options often beat a full engine.",
        ],
      },
      {
        heading: "Options compared",
        body: [],
        table: {
          headers: ["Option", "Fits when", "Trade-off"],
          rows: [
            ["**Rules in code**", "Few, stable, developer-owned rules", "Every change is a release"],
            ["**Configuration tables**", "Values change (thresholds, rates) but logic is stable", "Limited expressiveness"],
            ["**Decision tables / DMN engine**", "Many conditional rules owned by business teams", "New tooling and governance"],
            ["**Workflow tool rules**", "Rules inside approval or routing flows", "Tied to the platform"],
            ["**Feature flags**", "Turning behaviour on for segments", "Not for complex business logic"],
          ],
        },
      },
      {
        heading: "Decision tables and DMN",
        body: [
          "Decision tables list conditions and outcomes in rows, such as customer type, order value and region leading to a discount or approval level. They are easy to review and test. Decision Model and Notation (DMN), a standard from the Object Management Group ([[https://www.omg.org/dmn/|OMG]]), defines decision tables and an expression language that several engines execute. Keep tables small and focused, and avoid encoding entire processes in rules.",
        ],
      },
      {
        heading: "Governance and testing",
        body: [],
        checklist: [
          "Store rules in version control or a versioned repository.",
          "Maintain example cases with expected outcomes and run them on every change.",
          "Require approval for changes, with separation between author and approver for sensitive rules.",
          "Release with effective dates and the ability to roll back.",
          "Log the rule version and inputs for every decision.",
          "Review rules regularly and retire unused ones.",
        ],
      },
      {
        heading: "Performance and explainability",
        body: [
          "Most rules evaluate quickly, but large rule sets in hot paths need profiling and caching. Explainability is a major benefit: record which rules fired so staff can explain outcomes to customers and auditors. Where decisions significantly affect individuals and are substantially automated, Australian Privacy Act transparency requirements commencing on 10 December 2026 may apply; get advice. See [[/blogs/human-in-the-loop-ai|human-in-the-loop AI]].",
        ],
      },
      {
        heading: "Hypothetical example: a freight quoting system",
        body: [
          "**This example is hypothetical.** A freight company's quoting logic, covering surcharges by zone, weight, dangerous goods and customer contracts, was scattered across code and changed weekly by the pricing team through developer tickets. It moved surcharge and eligibility logic into versioned decision tables, kept core calculation in code, and gave the pricing team an editor with test cases and approval. Each quote stored the rule version used.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Adopting an engine for a handful of stable rules.",
          "Letting anyone change production rules without tests or approval.",
          "Encoding whole workflows as rules.",
          "No record of which rules made a decision.",
          "Duplicated rules in code and the engine.",
        ],
      },
      {
        heading: "Related guides",
        body: [],
        checklist: [
          "[[/blogs/low-code-vs-custom-software|Low-code vs custom software]] for platform choices.",
          "[[/blogs/feature-flag-implementation|Feature flag implementation]] for release toggles.",
          "[[/blogs/insurance-claims-software-australia|Insurance claims software]] for rules in triage.",
          "[[/blogs/automated-regression-testing|Automated regression testing]] for keeping rules tested.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A business rules engine helps when rules change often and need business ownership and explanation. Choose the simplest option that fits, manage rules with versioning, tests and approval, and log every decision.",
        ],
        cta: {
          title: "Rules buried in your code?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|business applications and rules-driven systems]] and [[/services/ai-automation|workflow automation]]. If it would help to decide where your rules should live, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "technical-discovery-software-projects",
    title: "Technical Discovery for Software Projects: What to Assess Before Estimating",
    seoTitle: "Technical Discovery: What to Assess Before Estimating",
    excerpt:
      "What technical discovery covers before a software estimate: existing systems, integrations, data, non-functional needs, security, risks and spikes.",
    category: "Web Development",
    banner: "archaudit",
    sceneKind: "roadmap",
    bannerAlt: "A software project scoped through technical discovery: existing systems, integrations, data, non-functional requirements and risks assessed, producing an architecture outline and estimate ranges",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development", "ai-automation"],
    relatedIndustrySlugs: ["startups", "saas-technology", "b2b-enterprise", "professional-services"],
    relatedSlugs: ["software-product-discovery-australia", "software-architecture-review", "custom-software-development-australia"],
    faqs: [
      {
        q: "What is technical discovery?",
        a: "A short, structured investigation of the technical side of a project before committing to an estimate: existing systems and code, integrations, data, non-functional requirements, security and compliance, hosting and technical risks. It complements product discovery, which validates the problem and users.",
      },
      {
        q: "Why not estimate straight from a requirements list?",
        a: "Because the biggest uncertainties are often technical: undocumented APIs, poor data quality, legacy constraints or performance needs. Estimates made without investigating them tend to be wrong or padded. Discovery turns unknowns into explicit assumptions and risks.",
      },
      {
        q: "How long does technical discovery take?",
        a: "It depends on scope. For many projects it is a matter of days to a few weeks. Larger integrations or modernisation projects may need longer. Agree the questions to answer and the outputs before starting.",
      },
      {
        q: "What should we receive at the end?",
        a: "An architecture outline, an integration and data assessment, non-functional requirements, a risk list with mitigations, results of any technical spikes, and estimate ranges with stated assumptions and a phased plan.",
      },
      {
        q: "What should we prepare?",
        a: "Access to existing systems, documentation, API details and sample data where possible, a list of integrations, known pain points, constraints such as hosting, data location or compliance, and the people who know how current systems behave.",
      },
    ],
    content: [
      {
        heading: "What should technical discovery assess before an estimate?",
        body: [
          "**Technical discovery should assess existing systems and code, every integration and its API, the data to migrate or use (volume, quality and ownership), non-functional requirements such as performance, availability, security and accessibility, compliance and data location constraints, and hosting, then test the riskiest assumptions with short technical spikes. The output is an architecture outline, a risk list and estimate ranges with stated assumptions.** It makes estimates honest rather than hopeful.",
          "This guide is for buyers commissioning software and for technical leads. For validating the product idea, see [[/blogs/software-product-discovery-australia|software product discovery]]; for reviewing an existing system, [[/blogs/software-architecture-review|software architecture review]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Investigate the riskiest technical unknowns before estimating.",
          "Check integrations against real API documentation and sandboxes.",
          "Look at real data, not descriptions of it.",
          "Write non-functional requirements down.",
          "Expect estimate ranges with assumptions, not single numbers.",
        ],
      },
      {
        heading: "What discovery assesses",
        body: [],
        table: {
          headers: ["Area", "Questions"],
          rows: [
            ["**Existing systems**", "What exists, who owns it, how it is built and hosted, what must be kept?"],
            ["**Integrations**", "Which systems, which APIs, limits, authentication, sandbox availability, data ownership?"],
            ["**Data**", "Volumes, quality, duplicates, migration needs, retention and privacy?"],
            ["**Non-functional**", "Users and load, response times, availability, accessibility (WCAG 2.2 AA), browsers and devices?"],
            ["**Security and compliance**", "Personal or sensitive data, Privacy Act, industry rules, data location?"],
            ["**Hosting and operations**", "Where it will run, who supports it, monitoring and backups?"],
            ["**Technical risks**", "Unknowns that could change the approach or cost significantly?"],
          ],
        },
      },
      {
        heading: "Technical spikes",
        body: [
          "A spike is a short, time-boxed experiment to answer a specific technical question, such as whether an accounting API supports the needed fields, whether a legacy database can be replicated, or whether a mapping library performs on a mid-range phone. Spikes turn the largest risks into evidence before the estimate. See [[/blogs/api-integration-australia|API integration]] for common integration questions.",
        ],
      },
      {
        heading: "Outputs",
        body: [],
        checklist: [
          "Architecture outline and key technology choices with reasons.",
          "Integration map with API findings.",
          "Data assessment and migration approach.",
          "Non-functional requirements.",
          "Risk register with likelihood, impact and mitigation.",
          "Estimate ranges with assumptions and exclusions.",
          "A phased delivery plan, starting with the riskiest parts.",
        ],
      },
      {
        heading: "Preparing for discovery",
        body: [
          "Gather documentation, access to systems or sandboxes, sample data (de-identified where possible), a list of integrations and constraints, and the people who know how current systems behave. Be open about known problems; hiding them only moves the risk into delivery. Decide who will make decisions when trade-offs appear.",
        ],
      },
      {
        heading: "Hypothetical example: a field operations platform",
        body: [
          "**This example is hypothetical.** A services company asked for an estimate to replace its job management system. Discovery found that its payroll system's API did not expose the award interpretation data needed, that 15 years of job history had inconsistent customer records, and that technicians often worked without mobile coverage. Spikes confirmed an export-based payroll integration and an offline sync approach. The estimate was given as a range with these assumptions, and the plan started with data clean-up and offline sync.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Estimating from feature lists alone.",
          "Assuming an API supports what is needed without checking.",
          "Ignoring data quality until migration.",
          "Single-number estimates for uncertain work.",
          "Discovery with no agreed questions or outputs.",
        ],
      },
      {
        heading: "Related guides",
        body: [],
        checklist: [
          "[[/blogs/custom-software-development-australia|Custom software development in Australia]] for the wider project.",
          "[[/blogs/product-requirements-document|Product requirements documents]] for capturing what to build.",
          "[[/blogs/data-migration-australia|Data migration]] for assessing data early.",
          "[[/blogs/legacy-software-modernization-australia|Legacy software modernisation]] for replacing older systems.",
          "[[/blogs/custom-web-application-development-cost|Estimating the cost of a custom web application]] for turning discovery outputs into a comparable estimate.",
          "[[/blogs/scope-creep-software-projects|Controlling scope creep]] once the build has started.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Technical discovery is the cheapest point to find the problems that make projects late. Assess systems, integrations, data and non-functional needs, test the riskiest assumptions with spikes, and expect estimate ranges with explicit assumptions. For public sector projects, see [[/blogs/uk-public-sector-software-procurement|UK public sector software procurement and delivery]].",
        ],
        cta: {
          title: "Need an estimate you can trust?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|web applications]], [[/services/mobile-app-development|mobile apps]] and [[/services/ai-automation|AI and automation]]. If it would help to scope the technical side of your project, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "software-vendor-handover-checklist",
    title: "Website and Software Handover Checklist: Code, Accounts, Domains and Ownership",
    seoTitle: "Website and Software Handover Checklist",
    excerpt:
      "A handover checklist for websites and software: code, domains, DNS, analytics, Search Console, email records and licences, in a safe order of steps.",
    category: "Web Development",
    banner: "auditsteps",
    sceneKind: "security",
    bannerAlt: "A handover checklist moving code, cloud access, domains, DNS, analytics, Search Console, email records, licences and backups from a previous vendor to the business that owns them",
    date: "2026-10-10",
    updated: "2026-10-14",
    readingTime: "11 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["startups", "saas-technology", "professional-services", "b2b-enterprise"],
    relatedSlugs: ["secrets-management", "website-security-checklist", "website-migration-guide"],
    faqs: [
      {
        q: "What should a software vendor hand over?",
        a: "Source code and full history, infrastructure and cloud account access, credentials and secrets (then rotated), domains, DNS and certificates, third-party service accounts, app store accounts, data and backups, documentation and runbooks, CI/CD pipelines, monitoring, and a list of open issues and known risks. For a website, add the registrar, DNS or CDN account, CMS admin, analytics, tag manager, Search Console, email sending records and premium licences.",
      },
      {
        q: "Who should own the cloud and app store accounts?",
        a: "Ideally your business, from the start, with vendors given access as users. If accounts are in the vendor's name, plan the transfer carefully; app store transfers and cloud account moves have specific processes and can take time.",
      },
      {
        q: "Do we own the code?",
        a: "It depends on your contract. Check intellectual property assignment, licences for third-party and open-source components, and any vendor libraries or frameworks you are allowed to keep using. Get legal advice before ending a relationship.",
      },
      {
        q: "How do we know the handover is complete?",
        a: "Prove it: a new team builds the application from the repository on a clean machine, deploys to a test environment using the documented pipeline, restores a backup, and rotates credentials without the old vendor's help.",
      },
      {
        q: "Should we rotate all credentials after handover?",
        a: "Yes. Rotate every password, API key, token and certificate the previous vendor could access, remove their user accounts, and review audit logs. Do this after the new team has confirmed access to everything.",
      },
      {
        q: "How do I remove an old agency from Google Search Console?",
        a: "First make sure you are a verified owner yourself, for example with a DNS record you control. Then remove the agency's user and delete all of their verification tokens; Google warns that a removed owner whose tokens remain can re-verify. Check whether the same token also verifies other Google services before deleting it.",
      },
      {
        q: "Our developer registered the domain in their own name. What can we do?",
        a: "Ask in writing for it to be transferred to you, and check your contract. Under ICANN's rules for generic domains, the registrar's obligations run to the registered holder, so if the developer is the holder you need their cooperation or a legal route. Dispute procedures exist for some situations; take legal advice.",
      },
    ],
    content: [
      {
        heading: "What should a website or software handover include?",
        body: [
          "**A complete handover gives your business owner-level control of everything the product runs on: source code with history, cloud and hosting accounts, the domain registrar, DNS, analytics, tag manager, Search Console, email sending records, app store accounts, third-party services, licences, data and backups, pipelines, documentation and runbooks. Do it in a safe order: confirm your own owner access first, back up, then rotate credentials and remove the old vendor.** Verify the result by building, deploying and restoring without the previous team. Contracts decide ownership of code and IP, so involve a lawyer early.",
          "This checklist is for business owners and technical leads changing vendors, bringing work in-house or ending a contract, whether the previous team is helpful or not. For ongoing support arrangements after the handover, see [[/blogs/software-maintenance-contracts-australia|software maintenance contracts]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Own your accounts from day one where possible; give vendors user access, not ownership.",
          "Get owner-level access yourself before removing anyone or rotating anything.",
          "Separate access from ownership: an admin login is not the same as being the account owner.",
          "Inventory every service that sends email as your domain before touching DNS.",
          "Verify by building, deploying and restoring without the old vendor, then rotate every credential.",
        ],
      },
      {
        heading: "The safe order of steps",
        body: [
          "Most handover lockouts come from doing the right things in the wrong order, such as removing the agency from an account before anyone at your company is an owner of it, or moving DNS without copying the email records. Follow this sequence.",
        ],
        checklist: [
          "**1. Inventory.** List every account, service, domain, licence and integration, with who owns it today. Use the two tables below.",
          "**2. Secure ownership.** Get your business made owner or top-level administrator on each account, using a company email address rather than one person's.",
          "**3. Confirm access.** Log in to each account yourself and check you can manage users. Do not rely on the vendor saying it is done.",
          "**4. Back up.** Take full backups of code, database, files and DNS records (export the zone), and test a restore.",
          "**5. Transfer.** Move domains, licences, app store apps and billing to accounts you own.",
          "**6. Verify by doing.** Build, deploy and restore without the vendor (see the verification list).",
          "**7. Rotate.** Change passwords, API keys, tokens and certificates the vendor could access.",
          "**8. Remove the vendor.** Delete their users and verification tokens, and revoke API keys and SSH keys.",
          "**9. Monitor.** Watch uptime, form submissions, email delivery and analytics for a few weeks.",
        ],
      },
      {
        heading: "Software handover checklist",
        body: [],
        table: {
          headers: ["Area", "What to receive or confirm"],
          rows: [
            ["**Code**", "All repositories with full history, branches, tags; build instructions; licences of dependencies"],
            ["**Intellectual property**", "IP assignment per contract; third-party and vendor component licences (legal advice)"],
            ["**Infrastructure**", "Cloud accounts or admin access, infrastructure as code, environment list"],
            ["**Credentials**", "Inventory of secrets and where they live; plan to rotate"],
            ["**Domains and certificates**", "Registrar access, DNS, certificate renewal, email sending records (see the website table)"],
            ["**Third-party services**", "Payment, email, SMS, maps, analytics, monitoring accounts and billing"],
            ["**App stores**", "Apple and Google developer accounts, signing keys and certificates"],
            ["**Data and backups**", "Database access, backup locations, a tested restore"],
            ["**CI/CD**", "Pipelines, runners, deployment permissions"],
            ["**Documentation**", "Architecture, runbooks, known issues, decisions, onboarding notes"],
            ["**Operations**", "Monitoring, alerts, on-call contacts, incident history"],
          ],
        },
      },
      {
        heading: "Website and marketing stack checklist",
        body: [
          "Websites add a layer of accounts that software checklists often miss, and many sit in an agency's own account by default. For each one, check ownership, not just access.",
        ],
        table: {
          headers: ["Asset", "Who should own it", "How to verify", "Common trap"],
          rows: [
            ["Domain registrar", "Your business, in your own registrar account, with you as registrant", "Registrant details show your company; you can unlock and request the transfer code", "Domain registered in the agency's or a developer's own name"],
            ["DNS host or CDN (for example Cloudflare)", "Your business", "You are the account owner and can edit records", "Registrar is yours, but DNS runs through the agency's CDN account"],
            ["Hosting", "Your business, or a contract that names you", "You hold the billing and top-level login", "Site on the agency's shared server"],
            ["CMS admins", "Your named staff; vendors as separate users", "List all admin accounts; each person has their own", "Shared admin login; old developer accounts left active"],
            ["Google Analytics 4", "Your business, as Administrator at account level", "The account access list shows your company user as Administrator", "Property sits inside the agency's account"],
            ["Google Tag Manager", "Your business, as account Administrator", "You can manage users on the account and publish the container", "Only container access, so you cannot manage users"],
            ["Google Search Console", "Your business, as a verified owner", "Your own verification (for example a DNS record you control)", "You are only a delegated owner; agency tokens remain"],
            ["Email sending domains", "Your business controls the DNS records", "SPF, DKIM and DMARC records listed and matched to each sending service", "Forms or newsletters stop delivering after a DNS move"],
            ["Theme and plugin licences", "Licences bought in your name", "Licence keys and renewal accounts are yours", "Premium licences in the agency's account, so updates stop"],
            ["Forms, CRM and consent tools", "Your business", "Submissions reach your inbox or CRM; you own the consent tool account", "Form notifications go to an agency address"],
            ["Backups", "Your business holds a copy", "A recent backup restores on a test server", "Only the agency has backups"],
          ],
        },
      },
      {
        heading: "Google accounts: the details that cause lockouts",
        body: [
          "**Search Console** has owners, full users and restricted users. A verified owner proved ownership with a token, such as a DNS record, HTML file or meta tag; a delegated owner was granted ownership by a verified owner. If every verified owner is removed, Google says remaining users and delegated owners \"will lose access to the property after a grace period\". So add your own verification first. When removing an agency, delete all of their verification tokens for the property, otherwise they can re-verify, and check whether a token is also used by another Google service before removing it ([[https://support.google.com/webmasters/answer/7687615|Search Console Help]]).",
          "**Google Analytics 4** access can be granted at account level, which applies to every property in the account, or at property level. Permissions can be added lower down but not reduced below what was set higher up, and deleting users requires the Administrator role at account level ([[https://support.google.com/analytics/answer/9305788|Analytics Help]]). Your business should hold account-level Administrator. If the property sits inside an account the agency owns, agree how it will be moved to or managed from an account you control before the contract ends.",
          "**Google Tag Manager** separates account permissions (Admin or User) from container permissions (from Read to Publish). Only an account Administrator can manage users ([[https://support.google.com/tagmanager/answer/6107011|Tag Manager Help]]).",
        ],
      },
      {
        heading: "Domains and transfer locks",
        body: [
          "For generic domains such as .com, ICANN's Transfer Policy sets the current rules. The registrar must give the registered holder the transfer (AuthInfo) code, and remove any transfer lock it set, within five calendar days of the holder's request if the holder cannot do this themselves, and must not refuse solely because of a payment dispute. A registrar may deny a transfer within 60 days of the domain's creation or of a previous transfer. After a change of registrant, the registrar must apply a 60-day lock on moving to another registrar, unless the holder opted out beforehand ([[https://www.icann.org/resources/pages/transfer-policy-2016-06-01-en|ICANN Transfer Policy]]).",
          "In practice: if the domain needs both a new registrant (you) and a new registrar, plan the order with your registrar so the 60-day lock does not surprise you. Country-code domains such as .in, .ae, .co.uk or .com.au follow their own registry's rules, so check with the registrar. These rules can change; check the current policy before you start.",
        ],
      },
      {
        heading: "Email: do not break sending when DNS moves",
        body: [
          "Contact forms, CRMs, newsletter tools and shops often send email as your domain, authorised by SPF, DKIM and DMARC records in DNS. If DNS moves and a record is missed, those messages can be rejected or sent to spam. Gmail requires all senders to set up SPF or DKIM; senders of more than 5,000 messages a day to Gmail accounts need SPF and DKIM, a DMARC record (a policy of none is allowed), alignment and one-click unsubscribe for marketing messages ([[https://support.google.com/a/answer/81126|Gmail sender guidelines]]). Yahoo sets similar rules for all and for bulk senders ([[https://senders.yahooinc.com/best-practices/|Yahoo sender best practices]]).",
          "Before changing DNS, export the full zone, list every service that sends as your domain, and check the new DNS host has every MX, SPF, DKIM and DMARC record. Send a test from each service afterwards.",
        ],
      },
      {
        heading: "Knowledge transfer",
        body: [
          "Schedule sessions covering architecture, codebase walkthrough, deployment, operations and incidents, and record them. Ask for written answers to recurring questions. Pair the new team with the previous one on at least one real release and one support issue if the relationship allows. Agree a short period during which the previous vendor answers questions.",
        ],
      },
      {
        heading: "Verifying the handover",
        body: [],
        checklist: [
          "Build the application from a fresh clone on a clean machine using the documentation.",
          "Deploy to a test environment through the pipeline.",
          "Restore a database backup to a test environment.",
          "Release a small change to production.",
          "Renew or confirm automatic renewal of certificates and domains.",
          "Submit each website form and confirm delivery to your inbox or CRM.",
          "Send a test email from every service that sends as your domain.",
          "Check analytics and tag manager still record visits and key events.",
          "Rotate credentials and remove the previous vendor's access; see [[/blogs/secrets-management|secrets management]].",
        ],
      },
      {
        heading: "If the vendor won't cooperate",
        body: [
          "Start politely and in writing: send a dated list of what you need and by when, and keep copies of every request and reply. Then separate what you can recover yourself from what needs the vendor or a lawyer.",
        ],
        table: {
          headers: ["Situation", "What you can usually do yourself", "When you need more"],
          rows: [
            ["Search Console held by the agency", "Verify ownership yourself with a DNS record, if you control DNS, then remove their tokens", "If you do not control DNS, recover that first"],
            ["Domain in your name at the registrar", "Ask the registrar for the transfer code; it must not be refused solely over a payment dispute", "Rarely, unless the account itself is the agency's"],
            ["Domain registered in the developer's name", "Ask in writing; check what the contract says", "Legal advice; dispute procedures exist for some cases"],
            ["Hosting and CMS in your accounts", "Reset admin passwords through the host; remove their users", "Rarely"],
            ["Analytics in the agency's account", "Set up a property you own so new data is collected", "Historical data stays where it is unless they share or move it"],
            ["Code and IP", "Check the contract's IP and handover clauses", "Legal advice before withholding payment or taking other action"],
          ],
        },
        callout: { type: "note", text: "This is general information, not legal advice. Rights over code, domains and data depend on your contract and local law." },
      },
      {
        heading: "Hypothetical example: a booking app and its website",
        body: [
          "**This example is hypothetical.** A tourism operator moved its booking web app, mobile apps and marketing website to a new supplier. The checklist found that the app store accounts and the payment provider account were registered to the previous agency, that there were no infrastructure scripts, and that the website's DNS ran through the agency's CDN account although the registrar account was the operator's. The operator's lawyer confirmed IP ownership under the contract. The operator added itself as a verified owner in Search Console and account Administrator in GA4, recreated the DNS zone in its own account, including the booking system's DKIM record, and tested email before switching nameservers. The new team rebuilt infrastructure as code, restored a backup and shipped a release before the previous agency's access was removed and all keys rotated.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Accounts registered in the vendor's name.",
          "Removing the vendor before your own owner access is confirmed.",
          "Receiving a code zip without history.",
          "Missing app signing keys.",
          "Moving DNS without copying email authentication records.",
          "Leaving old Search Console verification tokens in place.",
          "Premium licences that lapse because they were in the agency's account.",
          "Not rotating credentials after the vendor leaves.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "[[https://support.google.com/webmasters/answer/7687615|Google Search Console Help: managing owners, users and permissions]]; [[https://support.google.com/analytics/answer/9305788|Google Analytics Help: access management for accounts and properties]]; [[https://support.google.com/tagmanager/answer/6107011|Google Tag Manager Help: user permissions]]; [[https://www.icann.org/resources/pages/transfer-policy-2016-06-01-en|ICANN: Transfer Policy]]; [[https://support.google.com/a/answer/81126|Gmail: email sender guidelines]]; [[https://senders.yahooinc.com/best-practices/|Yahoo: sender best practices]].",
          "Accessed 14 October 2026. Platform rules and policies change; check the current pages before acting.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A good handover leaves you able to build, deploy, restore and operate your software and website without the previous vendor. Work in order: inventory, secure ownership, confirm access, back up, transfer, verify, rotate, then remove. For what to check in the code you inherit, see [[/blogs/software-architecture-review|software architecture review]] and [[/blogs/open-source-software-audit|open-source software audit]]; for a site you are also moving, see the [[/blogs/website-migration-guide|website migration guide]]. Our [[/services/website-development|website and web app development]] page explains how we take on work built by other teams.",
        ],
        cta: {
          title: "Get a handover reviewed",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/website-development|websites and web applications]] and [[/services/mobile-app-development|mobile apps]], including software built by other teams. If useful, we can talk through your handover list and the order to do it in.",
        },
      },
    ],
  },
];
