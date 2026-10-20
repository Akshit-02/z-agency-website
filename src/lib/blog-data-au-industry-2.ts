import type { BlogPost } from "./blog-data";

/**
 * Australian industry operations, part 2: logistics software development and
 * property management software development. Both are product-requirements
 * pages for operators and software owners, distinct from the AI-agent pages
 * (ai-agents-in-logistics-and-supply-chain, ai-agents-in-property-management),
 * from real-estate-website-development (marketing sites) and from the
 * ecommerce shipping pages. Australian decisions covered: where the Heavy
 * Vehicle National Law applies (not WA or the NT), NHVR-approved electronic
 * work diaries, chain of responsibility record-keeping, Australia Post and
 * StarTrack APIs, and state-by-state differences in rental bonds, entry and
 * trust accounting that property software must be configurable for. No
 * tenancy, legal or transport-compliance advice is given.
 * Sources checked 2026-10-09 (NTC, NHVR and state authority pages via search
 * summaries where fetches were blocked): National Transport Commission HVNL
 * page; NHVR electronic work diary and chain of responsibility pages;
 * Australia Post developer centre; NSW Fair Trading Rental Bonds Online;
 * Victoria's RTBA; Queensland RTA; OAIC. No figure here is ZSpace client data.
 */
export const auIndustryPosts2: BlogPost[] = [
  {
    slug: "logistics-software-development-australia",
    title: "Logistics Software Development in Australia: Dispatch, Visibility and Proof of Delivery",
    seoTitle: "Logistics Software Development in Australia: A Guide",
    excerpt:
      "Planning logistics software in Australia: dispatch, driver apps, proof of delivery, shipment visibility, HVNL and NHVR records and carrier integrations.",
    category: "Web Development",
    banner: "trackingevents",
    sceneKind: "orders",
    bannerAlt: "Consignments planned into runs, dispatched to drivers' apps, tracked through pickup and delivery with proof of delivery, and reported back to customers and the office",
    date: "2026-10-09",
    updated: "2026-10-10",
    readingTime: "9 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development", "ai-automation"],
    relatedIndustrySlugs: ["logistics-supply-chain", "retail", "manufacturing", "food-beverage", "ecommerce"],
    relatedSlugs: ["ai-agents-in-logistics-and-supply-chain", "inventory-management-software-australia", "field-service-management-software-australia"],
    faqs: [
      {
        q: "Should a logistics business build its own software?",
        a: "Only for the parts that set it apart. Transport management systems, route planning tools, telematics and carrier platforms cover standard dispatch, tracking and proof of delivery well. Custom software makes sense for distinctive operations, a customer portal that combines several systems, or integrations between telematics, warehouse, accounting and customer systems that products do not provide.",
      },
      {
        q: "Does the Heavy Vehicle National Law apply everywhere in Australia?",
        a: "No. The National Transport Commission says the Heavy Vehicle National Law applies to heavy vehicles over 4.5 tonnes gross vehicle mass in Queensland, New South Wales, the ACT, Victoria, Tasmania and South Australia. Western Australia and the Northern Territory have their own arrangements, although operators crossing into participating jurisdictions must comply there. Software that manages heavy vehicle work should know which rules apply to each trip.",
      },
      {
        q: "Can we build our own electronic work diary?",
        a: "Electronic work diaries used to record fatigue-regulated work and rest must be approved by the National Heavy Vehicle Regulator, and approval involves meeting published standards and assessment. Most businesses integrate with an NHVR-approved EWD provider rather than building their own. Check the NHVR's list of approved EWDs and its current framework before planning any work in this area.",
      },
      {
        q: "What is proof of delivery in logistics software?",
        a: "Proof of delivery is the evidence that a consignment reached the right place: typically a timestamp, GPS location, recipient name, signature, photos of the goods and the delivery location, and notes about damage or exceptions. Capture it in the driver app, attach it to the consignment and make it visible to the customer and your finance team.",
      },
      {
        q: "How do we give customers shipment visibility?",
        a: "Publish status events from your dispatch and driver systems, such as picked up, in transit, out for delivery, delivered and exception, and expose them through tracking pages, notifications and an API or portal for business customers. Estimated times should be honest and updated when plans change. Visibility built on unreliable events causes more calls than it prevents.",
      },
      {
        q: "Can software reduce fuel use and delivery times?",
        a: "It can help, through better route planning, load consolidation and fewer failed deliveries, but results depend heavily on the starting point, the quality of address and time-window data, and how drivers and dispatchers use the tools. Measure your own baseline and results rather than relying on vendor percentages.",
      },
          {
        q: "Should we build our own fleet tracking?",
        a: "Rarely. Telematics hardware, connectivity and platforms are mature and cheaper to buy. Custom software adds value in dispatch, customer tracking, pricing and integrations that use telematics data. Check driver privacy and surveillance obligations before rolling out tracking.",
      },
],
    content: [
      {
        heading: "What should logistics software do?",
        body: [
          "**Logistics software should turn orders and consignments into planned runs, get clear instructions to drivers, capture pickup and delivery with proof of delivery, publish honest status to customers, and feed accurate data to billing and reporting.** In Australia it may also need to support Heavy Vehicle National Law record-keeping where it applies and integrate with carriers such as Australia Post and StarTrack. Most operators buy core systems and build integrations and customer-facing layers.",
          "This guide is for transport operators, distributors, 3PLs and businesses running their own delivery fleets. It covers dispatch planning, driver apps, proof of delivery, shipment visibility, route data, integration architecture, regulatory record-keeping and reporting.",
          "For AI uses in logistics, see [[/blogs/ai-agents-in-logistics-and-supply-chain|AI agents in logistics and supply chain]]. We do not quote fuel or time savings: they depend on your operation. Nothing here is legal or transport-compliance advice.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Clean addresses, time windows and consignment data matter more than any optimisation algorithm.",
          "The driver app must work offline and capture proof of delivery every time.",
          "Publish status as events so customers, portals and finance see the same truth.",
          "Know where the HVNL applies (not WA or the NT) and use NHVR-approved EWDs for fatigue records.",
          "Chain of responsibility means scheduling and loading data can matter for safety, not just efficiency.",
          "Buy core TMS, routing and telematics; build integrations and customer-facing layers where you differ.",
        ],
      },
      {
        heading: "Dispatch planning",
        body: [
          "Dispatch turns a day's consignments into runs. Good planning considers vehicle capacity (weight, volume, pallets), vehicle type and access, driver hours and licences, customer time windows, pickup and delivery order, and depot locations.",
          "Route optimisation tools can help once data is reliable, but they cannot fix wrong addresses, missing time windows or unrealistic service times. Keep dispatchers able to override plans, record why, and feed actual service times back into planning so estimates improve.",
        ],
      },
      {
        heading: "Driver apps and proof of delivery",
        body: [],
        checklist: [
          "Run sheet with stops, instructions, contacts and access notes, available offline.",
          "Scan consignments at pickup and delivery to confirm the right goods.",
          "Proof of delivery: time, GPS, recipient name, signature, photos and exception notes.",
          "Exception flows for failed deliveries, damage, refusals and partial deliveries.",
          "Navigation hand-off to the driver's preferred maps app.",
          "Minimal interaction while driving; designed to be used when stopped.",
          "Reliable background sync when coverage returns, especially in regional areas.",
        ],
        callout: {
          type: "note",
          text: "Driver safety comes first: design the app so drivers do not need to interact with it while driving, and follow road rules on mobile phone use in each state and territory.",
        },
      },
      {
        heading: "Australian regulatory records: HVNL, EWDs and chain of responsibility",
        body: [
          "**Where the HVNL applies.** The Heavy Vehicle National Law regulates heavy vehicles over 4.5 tonnes gross vehicle mass and is in force in Queensland, New South Wales, the ACT, Victoria, Tasmania and South Australia; Western Australia and the Northern Territory are not participating jurisdictions. Operators crossing borders must follow the rules where they operate. Software that schedules heavy vehicle work should know which jurisdiction each trip is in.",
          "**Electronic work diaries.** The National Heavy Vehicle Regulator approves electronic work diaries for recording work and rest under fatigue rules, and drivers, operators and record keepers have the same obligations using an EWD as with a written diary. Most businesses integrate with an approved EWD provider rather than building one. Check the NHVR's current list of approved EWDs.",
          "**Chain of responsibility.** Under the HVNL, responsibility for heavy vehicle safety extends beyond drivers to parties ranging, in the NHVR's words, \"from the business that employs a driver or owns a vehicle, to the business that sends or receives goods\", and each party has a primary duty to ensure, so far as is reasonably practicable, the safety of its transport activities. Scheduling that ignores driver fatigue limits or loading data that is inaccurate is a safety issue, not just an efficiency one. Software can help by flagging schedules that conflict with rest requirements and keeping accurate load records, but it does not discharge anyone's duties. Get advice from a transport compliance specialist.",
        ],
      },
      {
        heading: "Shipment visibility for customers",
        body: [
          "Build visibility on events, not on screens. Each meaningful change (booked, picked up, in transit, out for delivery, delivered, exception) becomes an event that updates tracking pages, notifications, customer portals and APIs at the same time.",
          "Give business customers a portal or API with consignment status, proof of delivery and invoices, and consumers a tracking page with an honest delivery window. Keep notifications factual; marketing needs consent under the Spam Act. See [[/blogs/customer-portal-development-australia|customer portal development]] and [[/blogs/ecommerce-delivery-tracking|delivery tracking]] for patterns.",
        ],
      },
      {
        heading: "Integration architecture",
        body: [
          "Logistics software rarely stands alone. A typical architecture connects order sources (ecommerce, ERP, B2B portals, EDI), a transport management or dispatch system, telematics and EWD providers, driver apps, carriers for outsourced legs, the warehouse system, and accounting for billing.",
        ],
        code: {
          label: "Event-driven logistics integration (outline)",
          text: `Orders: ecommerce / ERP / portal / EDI
        -> consignment created
Dispatch/TMS -> run planned -> driver app
Driver app  -> picked up / delivered / exception
            -> event bus
Event bus   -> tracking page, notifications,
               customer portal / API,
               billing (accounting), reporting
Carriers    <-> labels and tracking (API)
Telematics/EWD -> location and fatigue data`,
        },
      },
      {
        heading: "Carrier integrations in Australia",
        body: [
          "If you use carriers for some legs, integrate for labels, manifests and tracking. Australia Post's developer centre provides shipping and tracking APIs, which are available to businesses with eParcel or StarTrack contracts. Other carriers and aggregators offer their own APIs. Normalise carrier statuses into your own event model so customers see consistent tracking regardless of who carries the goods.",
        ],
      },
      {
        heading: "Operational reporting",
        body: [
          "Report on what drives cost and service: on-time delivery against promised windows, failed and repeat deliveries by reason, stops per run, kilometres per drop, vehicle utilisation, proof-of-delivery completeness and time from delivery to invoice. Define each measure precisely and capture data at source. See [[/blogs/business-intelligence-dashboards-australia|business intelligence dashboards]].",
        ],
      },
      {
        heading: "Build or buy",
        body: [],
        table: {
          headers: ["Component", "Usually best", "Build when"],
          rows: [
            ["Transport management and dispatch", "Buy a TMS or routing product", "Planning rules are unusual and central to your service"],
            ["Telematics and EWD", "Buy; EWDs must be NHVR-approved", "Rarely; integrate instead"],
            ["Driver app", "Use the TMS app", "You need workflows the TMS app cannot support"],
            ["Customer portal and API", "Use the TMS portal if adequate", "Customers need a combined view across systems"],
            ["Integrations and event layer", "Integration platform or custom service", "Most operators need some custom work here"],
          ],
        },
      },
      {
        heading: "Hypothetical example: a regional distributor's own fleet",
        body: [
          "**This example is hypothetical.** A building supplies distributor in regional Victoria runs twelve trucks, some above 4.5 tonnes, delivering to building sites with narrow time windows. Drivers carry paper run sheets; customers phone to ask where deliveries are.",
          "The distributor adopts a routing and dispatch product with a driver app, integrates an NHVR-approved EWD for drivers who need one, and builds a small event service that pushes delivery status and photo proof of delivery into its customer portal and sends factual SMS updates. Schedules that would breach driver rest requirements are flagged to dispatchers. The business measures failed deliveries and customer calls about delivery status before and after.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Buying route optimisation before cleaning address and time-window data.",
          "Driver apps that require interaction while driving or fail offline.",
          "Proof of delivery that is optional, then disputes that cannot be resolved.",
          "Building a custom EWD instead of integrating an approved one.",
          "Tracking pages built on screens rather than events, so they disagree.",
          "Quoting savings to the board before measuring a baseline.",
        ],
      },
      {
        heading: "Related guides",
        body: [
          "For stock and warehouses, see [[/blogs/inventory-management-software-australia|inventory management software]]. For technicians rather than drivers, see [[/blogs/field-service-management-software-australia|field service management software]]. For integration patterns, see [[/blogs/api-integration-australia|API integration for Australian businesses]], and for offline apps, [[/blogs/offline-first-mobile-app-development|offline-first mobile app development]].",
        ],
      },
      {
        heading: "Fleet management and telematics",
        body: [
          "Fleet software tracks vehicles, drivers and jobs: GPS location, trip history, maintenance schedules, fuel, and driver hours. Most Australian operators buy telematics hardware and a platform rather than build them, then integrate that data with dispatch, customer portals and accounting.",
        ],
        checklist: [
          "Check heavy vehicle obligations under the Heavy Vehicle National Law with the NHVR, and Western Australian and Northern Territory rules where they differ; this is not legal advice.",
          "Tell drivers what is tracked and why. Workplace surveillance laws apply in some states, such as New South Wales, and privacy obligations may apply to driver data.",
          "Prefer providers with documented APIs, webhooks and data export.",
          "Plan for coverage gaps in regional areas: buffer data on devices and sync later.",
          "Keep location history only as long as you need it.",
        ],
        table: {
          headers: ["Need", "Typical approach"],
          rows: [
            ["**Vehicle location and trips**", "Telematics provider platform and API"],
            ["**Driver fatigue and work diaries**", "Electronic work diary approved by the NHVR where required, or compliant written records"],
            ["**Maintenance**", "Odometer or engine-hour based schedules from telematics data"],
            ["**Customer ETAs**", "Location data feeding a tracking page or portal"],
            ["**Job and dispatch**", "Custom or packaged dispatch software integrated with telematics"],
          ],
        },
      },
      {
        heading: "Sources",
        body: [
          "**Transport regulation:** National Transport Commission, Heavy Vehicle National Law; NHVR, electronic work diary; NHVR, chain of responsibility.",
          "**Carriers:** Australia Post developer centre.",
          "Regulatory points are summarised from official guidance; check current NHVR and state guidance. The architecture, tables and example are ours. Nothing here is legal or compliance advice or ZSpace client data.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Logistics software pays off when data is clean, drivers have a dependable app, every delivery has proof, and customers and finance see the same events. Respect Australian regulatory records where they apply, integrate approved EWDs rather than building them, and invest custom effort in the integrations and customer-facing layers that make your service different. For planning efficient runs, see [[/blogs/route-optimization-software|route optimisation software]]. For waste receipt reporting in the UK, see [[/blogs/digital-waste-tracking-software-uk|digital waste tracking software in the UK]].",
        ],
        cta: {
          title: "Planning logistics software?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|logistics integrations and customer portals]] and [[/services/mobile-app-development|driver apps]]. If it would help to map what to buy and what to build, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "property-management-software-australia",
    title: "Property Management Software Development in Australia: Requirements for Agencies and Owners",
    seoTitle: "Property Management Software Development in Australia",
    excerpt:
      "Property management software requirements in Australia: records, maintenance, inspections, tenant and owner portals, payments and state-based rules.",
    category: "Web Development",
    banner: "hub",
    sceneKind: "crm",
    bannerAlt: "A property management system linking property records, tenancies, maintenance requests, inspections, documents and payments with tenant and owner portals",
    date: "2026-10-09",
    readingTime: "8 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development", "ui-ux-design"],
    relatedIndustrySlugs: ["real-estate", "professional-services", "construction-infrastructure"],
    relatedSlugs: ["ai-agents-in-property-management", "customer-portal-development-australia", "real-estate-website-development"],
    faqs: [
      {
        q: "Should an agency build its own property management software?",
        a: "Usually not for core trust accounting and tenancy management, which established Australian property management platforms handle and keep current with state rules. Custom development is more often justified for portals, maintenance and trades workflows, inspection apps, reporting, or integrations that platforms do not cover. Build-to-rent operators and large owners with unusual operations are more likely to justify a custom system.",
      },
      {
        q: "Why do state rules matter so much for property software?",
        a: "Residential tenancy rules are made by each state and territory. Bond lodgement, notice periods for entry and inspections, rent increase limits, minimum standards and forms differ between them. Software used across states must store the jurisdiction for each property and apply the right rules, templates and timeframes. Check rules with the relevant state authority and get legal advice.",
      },
      {
        q: "Can tenants pay bonds through our software?",
        a: "In most states and territories, bonds must be lodged with a government bond authority, such as Rental Bonds Online in New South Wales or the Residential Tenancies Bond Authority in Victoria, within set timeframes. The Northern Territory has no central authority. Software can guide the process, link to the authority's online service and track lodgement, but should not hold bonds that must be lodged.",
      },
      {
        q: "What should a maintenance request system include?",
        a: "Structured requests with category, urgency, photos and access details; triage that separates urgent repairs from routine ones; work orders to trades with approval limits; status updates to tenants and owners; invoices linked to the job; and records of completion. Urgent repair rules differ by state, so make urgency categories and response expectations configurable.",
      },
      {
        q: "What privacy issues apply to property management software?",
        a: "Rental applications and tenancies involve identity documents, income, references and contact details. If your business is covered by the Privacy Act, collect only what you need, protect it, restrict staff and trades access, keep it no longer than necessary and plan for data breaches. Some states also limit the information that can be requested in rental applications, so check local rules.",
      },
      {
        q: "Should tenants and owners have separate portals?",
        a: "They need different views but can share one platform. Tenants need maintenance requests, documents, rent information and messages. Owners need statements, approvals for repairs above a limit, inspection reports and documents. Both need secure sign-in and clear notifications. Design each journey separately even if the system underneath is shared.",
      },
    ],
    content: [
      {
        heading: "What does property management software need to do in Australia?",
        body: [
          "**Property management software keeps an accurate record of each property, tenancy and owner; runs maintenance, inspections and documents; gives tenants and owners self-service portals; and handles payments and statements, while applying the tenancy rules of the state or territory each property is in.** Most agencies use an established platform for trust accounting and core tenancy management, and build or integrate around it for portals, maintenance, inspections and reporting.",
          "This guide is for property managers, agencies, build-to-rent operators and owners planning software, and for product teams building property technology. It focuses on product requirements: data model, maintenance, inspections, portals, documents, payments, notifications, permissions, integrations and jurisdiction-aware rules.",
          "It is not property investment or tenancy advice. For AI uses in property management, see [[/blogs/ai-agents-in-property-management|AI agents in property management]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Store the state or territory for every property and drive rules, forms and timeframes from it.",
          "Leave trust accounting to platforms built and maintained for it, unless you have specialist capability.",
          "Bonds in most jurisdictions go to a government authority; software should track lodgement, not hold bonds.",
          "Design tenant and owner journeys separately, on shared data.",
          "Make maintenance triage, approvals and trades access explicit and auditable.",
          "Protect rental application and tenancy data; collect less and delete when no longer needed.",
        ],
      },
      {
        heading: "Core data model",
        body: [],
        table: {
          headers: ["Entity", "Key information"],
          rows: [
            ["**Property**", "Address, jurisdiction, features, compliance items, keys, photos"],
            ["**Owner**", "Owners, ownership shares, contact, disbursement and approval limits"],
            ["**Tenancy**", "Tenants, dates, rent, bond reference, agreement documents, notices"],
            ["**Maintenance job**", "Request, urgency, trade, quotes, approvals, status, invoices"],
            ["**Inspection**", "Type, date, notice given, report, photos, follow-up actions"],
            ["**Document**", "Type, version, who can see it, retention period"],
            ["**Transaction**", "Rent, fees, invoices, disbursements, linked to the trust ledger"],
          ],
        },
      },
      {
        heading: "Jurisdiction-aware rules",
        body: [
          "Residential tenancy law is made by each state and territory, so the same action can have different rules depending on where a property is.",
          "**Bonds.** In most states and territories, residential bonds are lodged with a government authority within a set time, for example through NSW Fair Trading's Rental Bonds Online or Victoria's Residential Tenancies Bond Authority; the Northern Territory has no central bond authority, and deadlines and caps differ. Software should record which authority applies, link to its online service and track lodgement and refund status.",
          "**Notices, entry and inspections.** Notice periods for entry and routine inspections, how often inspections can occur, and required forms differ by jurisdiction. Store the rules as configuration, not code, so they can be updated when laws change.",
          "**Trust money.** Real estate agents generally must handle rent and other client money through trust accounts under state and territory laws, with record-keeping and audit requirements. Trust accounting is specialised; most agencies use a platform built for it and integrate other software with it.",
          "Rules change regularly. Have a property lawyer or compliance adviser confirm your configuration for each jurisdiction, and review it when laws change. Software cannot make a process compliant on its own.",
        ],
      },
      {
        heading: "Maintenance requests and trades",
        body: [],
        checklist: [
          "Tenant requests with category, description, photos, access details and pets or alarm notes.",
          "Triage into urgent and routine, with configurable urgency rules per jurisdiction.",
          "Work orders to trades with scope, access and approval limits set by the owner.",
          "Quote approval by owners above the limit, with reminders.",
          "Status updates to tenants and owners at each stage.",
          "Trade invoices matched to jobs and paid through the trust ledger.",
          "Trades see only the jobs and contact details they need, for as long as they need them.",
        ],
        callout: {
          type: "tip",
          text: "Our recommendation: make the maintenance request form do most of the triage. Asking the right question for each category (Is water leaking now? Is the property secure?) saves more time than any back-office automation. AI triage can help later; see [[/blogs/ai-agents-in-property-management|AI in property management]].",
        },
      },
      {
        heading: "Inspections",
        body: [
          "Inspection apps should work offline, capture room-by-room condition with photos, compare against the entry condition report, record issues as follow-up actions and produce a report for owners. Record when and how notice was given. Store photos with timestamps and keep the originals; disputes often depend on them.",
        ],
      },
      {
        heading: "Tenant and owner portals",
        body: [
          "Tenants want to report problems, see progress, find their documents and understand payments. Owners want statements, approvals, inspection reports and documents, and fewer emails. Use one platform with separate journeys, secure sign-in with multi-factor authentication, and notifications that are factual and timely.",
          "Most of the design principles in [[/blogs/customer-portal-development-australia|customer portal development]] apply: start from the tasks that generate the most calls and emails, integrate with the system of record instead of copying data, and make every task usable on a phone and accessible.",
        ],
      },
      {
        heading: "Payments and statements",
        body: [
          "Rent payment methods include direct deposit, direct debit, card and payment services; each needs reconciliation against the tenancy ledger. Card surcharges on eftpos, Visa and Mastercard were removed from 1 October 2026 under the RBA's decision. Owner statements and disbursements come from the trust ledger. If you build payment features, use an established payment provider and integrate with the trust accounting platform rather than duplicating its logic. See [[/blogs/payment-gateway-integration-australia|payment gateway integration in Australia]].",
        ],
      },
      {
        heading: "Privacy, security and permissions",
        body: [
          "Property data includes identity documents, income evidence, references and contact details, and attackers know it. If your business is covered by the Privacy Act, take reasonable steps to protect personal information and destroy or de-identify it when no longer needed. Collect only what each process needs; some jurisdictions limit what can be requested in rental applications.",
          "Use role-based access for staff, owners, tenants and trades; log access to documents; expire external access when a tenancy or job ends; and secure document links. See [[/blogs/secure-web-application-development-australia|building a secure customer-facing web application]].",
        ],
      },
      {
        heading: "Integrations",
        body: [
          "Common integrations include the trust accounting and property management platform, accounting software, listing portals and CRM for leasing, e-signature for agreements, bond authority online services, payment providers, SMS and email, and trades marketplaces. Decide which system owns properties, tenancies, owners and money before integrating. Our guide to [[/blogs/api-integration-australia|API integration for Australian businesses]] covers the patterns.",
        ],
      },
      {
        heading: "Hypothetical example: a build-to-rent operator",
        body: [
          "**This example is hypothetical.** A build-to-rent operator manages several hundred apartments in Melbourne and Brisbane, with on-site teams. It uses a property management platform for tenancies and trust accounting, but maintenance runs through email and spreadsheets, and residents call the front desk for updates.",
          "The operator builds a resident app and a maintenance system integrated with the platform: requests with photos and access permissions, triage rules configured separately for Victoria and Queensland, work orders to in-house staff and external trades, and status updates in the app. Inspection reports are captured on tablets offline. Bond lodgement is tracked against the relevant state authority. The operator's lawyers review the jurisdiction settings before launch.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Hard-coding one state's rules and later expanding interstate.",
          "Rebuilding trust accounting without the specialist capability to maintain it.",
          "Collecting more applicant data than the process needs, and keeping it forever.",
          "Giving trades lasting access to tenant details.",
          "Maintenance status that only staff can see.",
          "Treating software configuration as legal advice.",
        ],
      },
      {
        heading: "Related guides",
        body: [
          "For the marketing site, see [[/blogs/real-estate-website-development|real estate website development]]. For bookings of inspections or viewings, see [[/blogs/booking-system-development-australia|online booking systems]]. For moving records from an old system, see [[/blogs/data-migration-australia|data migration planning]], and for app budgets, [[/blogs/mobile-app-development-cost-australia|mobile app development cost in Australia]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**Bonds:** NSW Fair Trading, Rental Bonds Online; Residential Tenancies Bond Authority (Victoria); Residential Tenancies Authority (Queensland).",
          "**Privacy:** OAIC, APP 11.",
          "State rules were summarised from authority and secondary sources via search; confirm current requirements with each authority. The data model, checklists and example are ours. Nothing here is legal or tenancy advice or ZSpace client data.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Property management software works when it is jurisdiction-aware, leaves trust accounting to specialist platforms, makes maintenance and inspections visible to everyone who needs them, and gives tenants and owners portals they actually use. Store rules as configuration, protect tenant data carefully, and have your settings reviewed by people who know each state's law. For UK safety certificates and Awaab's Law timescales, see [[/blogs/property-compliance-management-software-uk|property compliance management software in the UK]].",
        ],
        cta: {
          title: "Building property technology?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|property portals and integrations]], [[/services/mobile-app-development|resident and inspection apps]] and [[/services/ui-ux-design|portal UX]]. If it would help to scope what to build around your platform, we are happy to talk it through.",
        },
      },
    ],
  },
];
