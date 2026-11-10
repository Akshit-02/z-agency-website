import type { BlogPost } from "./blog-data";

/**
 * International SEO expansion, topics 341–360, first implementation pass
 * (2026-11-10). Research and decisions: international-seo-expansion-341-360/.
 * One CREATE: procurement management system development (354). Topic 353
 * (vendor management portal) is an in-place update of
 * supplier-portal-development (blog-data-au-business-systems.ts), which
 * already earns impressions at an average position of about 7.
 *
 * No external links in article bodies (owner rule). Not tax or legal advice.
 * Section numbers under India's Income-tax Act, 2025 are deliberately not
 * quoted because only secondary sources confirmed the renumbering.
 *
 * Sources checked 2026-11-10:
 * - MSMED Act 2006, s.15: payment to micro and small suppliers by the agreed
 *   date, not exceeding 45 days from acceptance; 15 days where there is no
 *   agreement. Income-tax rule (formerly s.43B(h)) allowing deduction only on
 *   payment continues under the Income-tax Act, 2025 (Finance Ministry reply
 *   in Rajya Sabha, July 2026, via secondary reports; medium-high confidence).
 * - TDS on purchase of goods (formerly s.194Q): 0.1% above ₹50 lakh from a
 *   seller in a year, buyers with turnover above ₹10 crore; renumbered under
 *   the 2025 Act (secondary sources).
 * - GST e-invoicing: AATO above ₹5 crore (Notification 10/2023-CT, from
 *   1 August 2023); invoices of taxpayers with AATO of ₹10 crore and above
 *   must be reported to the IRP within 30 days from 1 April 2025 (GSTN
 *   advisory, 5 November 2024).
 * - Microsoft Learn, Dynamics 365 Finance: three-way matching of purchase
 *   order, product receipt and vendor invoice.
 * - UK: GOV.UK Commercial Payments Bill factsheet (19 May 2026): proposed
 *   60-day maximum payment terms; not yet in force on the check date.
 * - UAE: e-invoicing go-live 1 January 2027 for businesses with revenue of
 *   AED 50 million or more, 1 July 2027 for others (Ministerial decisions as
 *   reported by Deloitte, EY and WAM; MoF PDF unavailable).
 */
export const intlPosts2: BlogPost[] = [
  {
    slug: "procurement-management-system-development",
    title: "How to Build a Procurement Management System for Manufacturers and Distributors",
    seoTitle: "Procurement Management System Development: A Practical Guide",
    excerpt:
      "How to build a procurement management system: requisitions, approvals, RFQs, purchase orders, receipts, three-way match, supplier records and ERP integration.",
    category: "Web Development",
    banner: "procureflow",
    sceneKind: "workflow",
    bannerAlt:
      "A procure-to-pay workflow for a manufacturer: purchase requisition, approval, request for quotation, purchase order, goods receipt, supplier invoice and three-way match, then payment, with the ERP recording each step",
    date: "2026-11-10",
    readingTime: "15 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["manufacturing", "logistics-supply-chain", "b2b-enterprise", "retail"],
    relatedSlugs: ["supplier-portal-development", "ai-procurement-automation", "ai-invoice-processing"],
    faqs: [
      {
        q: "What is a procurement management system?",
        a: "Software that manages how a business buys: purchase requests, approvals, supplier quotes, purchase orders, goods receipts, invoice matching and the handover to payment. It keeps spending within budget and policy, gives finance a clear record, and replaces email and spreadsheet chasing.",
      },
      {
        q: "Should we build a procurement system or use our ERP's purchasing module?",
        a: "Start with your ERP. Most include purchase orders, receipts and invoice matching. Custom development makes sense when your approval rules, sourcing process or supplier collaboration don't fit the ERP, when you run several ERPs or plants, or when buyers and suppliers find the ERP screens too hard to use. A common approach is a custom front end for requests, approvals and RFQs that writes purchase orders back to the ERP.",
      },
      {
        q: "What is three-way matching?",
        a: "Checking that the supplier's invoice agrees with the purchase order and the goods receipt before payment, within tolerances you set for price and quantity. It catches overbilling, short deliveries and duplicate invoices. Two-way matching (order and invoice only) suits services and low-risk purchases.",
      },
      {
        q: "What Indian rules should a procurement system support?",
        a: "Common ones include tracking payment terms to micro and small suppliers (generally no more than 45 days, or 15 days without an agreement, under the MSMED Act, with tax consequences if paid late), TDS on high-value purchases of goods by larger buyers, and checking that supplier invoices above the GST e-invoicing threshold carry a valid IRN. Section numbers changed under the Income-tax Act, 2025, so confirm the current references with your adviser.",
      },
      {
        q: "How long does it take to build?",
        a: "A focused system covering requests, approvals, purchase orders and ERP sync often takes a few months; adding RFQs, a supplier portal, receiving on mobile and invoice matching extends that. Discovery of your actual approval rules and exceptions usually takes longer than teams expect.",
      },
    ],
    content: [
      {
        heading: "What a procurement management system does",
        body: [
          "**A procurement management system controls how a business buys, from the first request to the invoice being approved for payment. For a manufacturer or distributor that means purchase requisitions, approval rules by amount, category and budget, requests for quotation and supplier comparison, purchase orders, goods receipts at the warehouse or plant, invoice matching against orders and receipts, and a clean handover to accounts payable and the ERP.** Done well, it shortens the buying cycle, keeps spend within policy and gives finance a reliable audit trail.",
          "Many growing manufacturers run purchasing on email, spreadsheets and an ERP that only a few people can use. The result is maverick buying, late approvals, invoices that don't match what arrived, and suppliers chasing payment. This guide explains how to design a system that fixes those problems, and when your ERP is enough. For the supplier-facing side, see [[/blogs/supplier-portal-development|supplier and vendor portal development]].",
        ],
      },
      {
        heading: "The procure-to-pay flow",
        body: [],
        table: {
          headers: ["Step", "What happens", "What the system needs"],
          rows: [
            ["**1. Requisition**", "Someone requests materials, parts or services", "Catalogue or free-text items, cost centre, budget check, attachments"],
            ["**2. Approval**", "The request is approved by the right people", "Rules by amount, category, plant and budget; delegation; mobile approval"],
            ["**3. Sourcing (RFQ)**", "Quotes are requested and compared", "Invite suppliers, collect quotes, compare price, lead time and terms"],
            ["**4. Purchase order**", "A PO is issued to the chosen supplier", "PO numbering, terms, delivery schedule, sync to ERP"],
            ["**5. Goods receipt**", "Goods arrive and are checked", "Receiving against the PO, partial deliveries, quality holds, mobile scanning"],
            ["**6. Invoice and match**", "The supplier invoices", "Two- or three-way match with tolerances; exception queue"],
            ["**7. Payment handover**", "Approved invoices go to AP", "Due dates by payment terms, posting to the ERP or accounting system"],
          ],
        },
        diagram: {
          variant: "approvalflow",
          alt: "Approval routing for a purchase requisition: rules by amount, category and budget send it to a line manager, then finance or a plant head above a threshold, with delegation when an approver is away",
          caption: "Approval rules are where most procurement systems succeed or fail. Map the real exceptions before building.",
        },
      },
      {
        heading: "Approvals that people actually use",
        body: [
          "Approval routing is the part buyers complain about most. Capture the real rules: thresholds by amount, extra approval for capital purchases or new suppliers, category owners for things like IT or chemicals, budget checks per cost centre, and what happens when an approver is on leave. Then make approving easy: a clear summary, the quote comparison attached, and one tap on mobile or from an email or WhatsApp notification.",
          "Keep the rules in configuration rather than code, so finance can change thresholds without a release. A [[/blogs/business-rules-engine|business rules engine]] is worth considering when rules change often or vary by plant.",
        ],
      },
      {
        heading: "Sourcing and RFQs",
        body: [
          "For repeat purchases with agreed prices, a catalogue or contract price list is faster than a quote every time. For everything else, an RFQ module lets buyers invite several suppliers, collect quotes in a consistent format, and compare price, lead time, payment terms and past performance side by side. Record why a supplier was chosen; auditors and future buyers will ask.",
        ],
      },
      {
        heading: "Receiving and three-way match",
        body: [
          "Goods receipts are where purchasing meets the warehouse. Let stores staff receive against the PO on a phone or scanner, record partial deliveries and rejected quantities, and flag items for quality inspection before they are accepted. Manufacturers can then pass received lots to the shop floor, where an [[/blogs/mes-development|MES]] tracks which lots go into which batches.",
          "Three-way matching then compares the supplier's invoice with the purchase order and the goods receipt, within tolerances you set for price and quantity, before the invoice is approved for payment. Invoices that match pass straight through; those that don't go to an exception queue with the reason shown. Two-way matching (PO and invoice only) suits services and low-value purchases. [[/blogs/ai-invoice-processing|AI invoice processing]] can read supplier invoices and propose matches, with people reviewing exceptions.",
        ],
        cta: {
          title: "Mapping your procure-to-pay process?",
          description: "ZSpace Labs builds [[/services/website-development|procurement and approval systems]] connected to your ERP, and [[/services/ai-automation|invoice and document automation]] for the steps that still rely on manual checking.",
        },
      },
      {
        heading: "India-specific requirements",
        body: [
          "Indian manufacturers and distributors have a few rules worth building into the system, so that they are tracked automatically rather than remembered. Treat this as a checklist for your finance team and adviser, not as tax advice.",
        ],
        table: {
          headers: ["Requirement", "What to build"],
          rows: [
            ["**Payments to micro and small suppliers**", "Store each supplier's Udyam registration and MSME category; calculate due dates from acceptance (generally no more than 45 days under an agreement, 15 days without one); warn finance before the limit. Late payment has income-tax consequences, a rule that continues under the Income-tax Act, 2025."],
            ["**TDS on purchase of goods**", "Track purchases per supplier per year so larger buyers can apply TDS on high-value purchases of goods (0.1% above ₹50 lakh from a supplier in a year, for buyers with turnover above ₹10 crore). Section numbers changed in 2026; confirm with your adviser."],
            ["**GST and e-invoices**", "Verify supplier GSTINs at onboarding; check that invoices from suppliers above the e-invoicing threshold carry a valid IRN and QR code; flag invoices reported to the IRP outside the 30-day window that applies to larger suppliers."],
            ["**E-way bills**", "Capture e-way bill details on goods receipts for consignments that need them"],
            ["**ERP and accounting**", "Sync POs, receipts and approved invoices to Tally, SAP Business One, Microsoft Dynamics or your ERP"],
          ],
        },
      },
      {
        heading: "Other markets",
        body: [
          "The same system usually needs market-specific settings rather than a different design. In the UK, the Commercial Payments Bill introduced in 2026 proposes a 60-day maximum for business-to-business payment terms; it was not yet in force when this guide was written, so track it before building payment-term rules. In the UAE, the national e-invoicing programme goes live from 1 January 2027 for businesses with revenue of AED 50 million or more and from 1 July 2027 for others, which affects how supplier invoices arrive and are validated. In Australia, large businesses report payment times to small business suppliers, which a procurement system with accurate invoice and payment dates makes easier.",
        ],
      },
      {
        heading: "Integrating with the ERP",
        body: [
          "Decide which system owns each record. A common split is: the procurement system owns requisitions, approvals and RFQs; the ERP owns item masters, supplier masters, purchase orders, receipts for inventory and accounting. Where the ERP is the system of record for POs, the procurement system creates them through the ERP's API and reads back status, so stock and accounts stay correct.",
          "Plan for failures: queue writes to the ERP, retry safely, and show buyers when a PO is waiting to sync. Keep supplier master data clean in one place; duplicate suppliers are a common route to duplicate payments. See [[/blogs/integration-architecture-patterns|integration architecture patterns]] and [[/blogs/master-data-management|master data management]].",
        ],
      },
      {
        heading: "Build, buy or extend",
        body: [],
        table: {
          headers: ["Option", "Fits when", "Watch out for"],
          rows: [
            ["**ERP purchasing module**", "One ERP, standard approvals, users comfortable in the ERP", "Clunky approvals and low adoption outside procurement"],
            ["**Procurement suite (SaaS)**", "Many categories, sourcing events, spend analytics", "Licence cost per user, integration effort, fit with plant operations"],
            ["**Custom front end on the ERP**", "Unusual approval rules, several plants or ERPs, mobile receiving, supplier collaboration", "You own maintenance; keep the ERP as the system of record"],
            ["**Fully custom**", "No suitable ERP, or procurement is part of a larger operational system you already run", "Accounting controls and audit trail must be designed carefully"],
          ],
        },
      },
      {
        heading: "Controls and security",
        body: [],
        checklist: [
          "Segregation of duties: the person who raises a request should not approve it or receive the goods.",
          "Supplier bank detail changes verified out of band, with a payment hold after any change.",
          "Every approval, edit and override logged with user and time.",
          "Role-based access by plant, cost centre and category; see [[/blogs/saas-roles-and-permissions|roles and permissions]].",
          "Duplicate invoice detection by supplier, number, amount and date.",
          "Budget checks before approval, not after the PO is sent.",
        ],
      },
      {
        heading: "Hypothetical example: a components manufacturer",
        body: [
          "**This example is hypothetical.** A manufacturer with three plants buys raw materials, consumables and services through email approvals and a single ERP licence in purchasing. Requests sit for days, and accounts payable spends hours matching invoices to delivery challans.",
          "It builds a web and mobile front end for requisitions and approvals with rules by plant and amount, an RFQ module for non-catalogue items, and mobile goods receipts at each store. POs are created in the ERP through its API, and supplier invoices are matched three ways with a 2% price tolerance. The supplier master records Udyam status so MSME due dates are flagged a week early. The team measures approval time, PO cycle time, match rate and the number of invoices paid after their due date.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Automating the approval chart on paper instead of the approvals that actually happen.",
          "Letting the procurement system and ERP both create suppliers.",
          "Skipping goods receipts for services, then having nothing to match invoices against.",
          "Hard-coding thresholds that finance needs to change.",
          "Ignoring the supplier side; see [[/blogs/supplier-portal-development|supplier portals]].",
        ],
      },
      {
        heading: "Where to start",
        body: [
          "Map one purchasing category end to end, including the exceptions, and measure today's cycle time and match rate. That baseline tells you whether the ERP module needs better screens, a custom front end or a broader system. For automating the paper-heavy steps, see [[/blogs/ai-procurement-automation|AI procurement automation]].",
        ],
        cta: {
          title: "Planning a procurement system?",
          description: "Share your plants, ERP and current approval process with ZSpace Labs, and we will help you decide what to build, what to keep in the ERP and how to connect them. [[/contact|Get in touch]].",
        },
      },
    ],
  },
];
