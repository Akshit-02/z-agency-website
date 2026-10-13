import type { BlogPost } from "./blog-data";

/**
 * Australian data, payments and migration trio: customer data integration,
 * payment gateway integration and data migration planning. Differentiated
 * from the generic owners (payment-gateway-integration,
 * ecommerce-payment-gateway-integration, ecommerce-data-migration,
 * ecommerce-crm-integration) and from batch 121–140 pages (custom CRM,
 * legacy modernisation, cloud migration) by their scope and Australian
 * decisions: APP 3, 6, 7, 8 and 11 for combined customer data, Spam Act
 * consent propagation, the RBA's removal of card surcharges from 1 October
 * 2026, dual-network debit and least-cost routing, PayTo, BNPL credit
 * licensing, AUD and GST, ATO record retention and destruction or
 * de-identification of personal information no longer needed.
 * Sources checked 2026-10-09: RBA surcharging conclusions and least-cost
 * routing pages; ASIC BNPL credit licensing; NPP Australia (PayTo); PCI
 * Security Standards Council; OAIC APP guidelines (chapters 6, 8, 11) and
 * NDB 2025; ACMA spam guidance; business.gov.au record keeping. No figure
 * here is ZSpace client data and no gateway fees are quoted.
 */
export const auDataPaymentPosts: BlogPost[] = [
  {
    slug: "customer-data-integration-australia",
    title: "Customer Data Integration in Australia: A Single Customer View Without the Risks",
    seoTitle: "Customer Data Integration in Australia",
    excerpt:
      "How Australian businesses integrate customer data across CRM, ecommerce and support: identity resolution, sync, data quality, consent, privacy and ownership.",
    category: "Web Development",
    banner: "datalifecycle",
    sceneKind: "crm",
    bannerAlt: "Customer records from CRM, ecommerce, support and billing matched into a single customer view, with consent flags, data quality checks and access controls",
    date: "2026-10-09",
    updated: "2026-10-10",
    readingTime: "8 min read",
    relatedServiceSlugs: ["website-development", "ai-automation", "shopify-development"],
    relatedIndustrySlugs: ["retail", "ecommerce", "fintech", "professional-services", "b2b-enterprise"],
    relatedSlugs: ["custom-crm-development-australia", "api-integration-australia", "ecommerce-crm-integration"],
    faqs: [
      {
        q: "What is customer data integration?",
        a: "Customer data integration connects the systems that hold customer information, such as CRM, ecommerce, support, billing and marketing tools, so records are matched, kept in sync and usable together. The goal is a reliable view of each customer and consistent data across systems, with clear ownership of each field and controls over who can use the data for what.",
      },
      {
        q: "Do we need a customer data platform?",
        a: "Not necessarily. A customer data platform collects behavioural and profile data, resolves identities and sends audiences to marketing tools. It suits businesses with high-volume, multichannel marketing needs. Many businesses get most of the value by integrating CRM, ecommerce and support systems directly, with one system acting as the source of truth for customer records.",
      },
      {
        q: "Does integrating customer data make it compliant to use?",
        a: "No. Combining data does not change the purposes for which it was collected. If your business is covered by the Privacy Act, using personal information for a purpose other than the one it was collected for generally needs consent or another exception, and direct marketing has its own rules. Check purposes and consent before using combined data, and get advice for new uses.",
      },
      {
        q: "How do you match customers across systems?",
        a: "Use the strongest shared identifiers first, such as a customer number or a verified email address, then combine weaker attributes like name, phone and address with rules or scoring. Send uncertain matches to people, never merge on weak evidence, and keep a record of which source records make up each customer so merges can be reversed.",
      },
      {
        q: "How do we keep unsubscribe and consent consistent?",
        a: "Treat consent as data with its own source of truth. Record what the person agreed to, through which channel and when, and propagate withdrawals to every system that sends messages. Under the Spam Act, unsubscribe requests must be honoured within five working days, so syncing them once a week is not good enough.",
      },
      {
        q: "Who should own customer data integration?",
        a: "A named business owner should decide definitions, purposes and access, and a technical owner should run the integrations, monitoring and data quality. Without both, duplicate records, conflicting values and unclear permissions creep back. Write down which system owns each field and review it when systems change.",
      },
          {
        q: "Is a consent banner enough to comply with Australian rules?",
        a: "No. A banner records a choice, but compliance depends on what data you collect, how you use and share it, whether withdrawals reach every system, and, for marketing messages, consent and unsubscribe under the Spam Act. Integrate consent across systems and keep an audit trail.",
      },
],
    content: [
      {
        heading: "What does good customer data integration look like?",
        body: [
          "**Good customer data integration gives each team an accurate, consistent view of a customer by matching records across systems, syncing changes reliably, fixing data quality at the source, and controlling who can use which data for which purposes.** It is not the same as buying a customer data platform, and combining data does not make new uses of it lawful: in Australia, the Privacy Act's purpose, direct marketing and security principles, and the Spam Act, still apply.",
          "This guide is for operations, marketing and technology leaders connecting CRM, ecommerce, support, billing and marketing systems. It covers identity resolution, synchronisation, data quality, duplicates, ownership, consent, access control, event pipelines and when a CDP is worth considering.",
          "For CRM choices, see [[/blogs/custom-crm-development-australia|custom vs off-the-shelf CRM]]; for integration mechanics, [[/blogs/api-integration-australia|API integration for Australian businesses]]; for ecommerce specifics, [[/blogs/ecommerce-crm-integration|ecommerce CRM integration]] and [[/blogs/ecommerce-privacy-customer-data|ecommerce privacy]]. Nothing here is legal advice.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Name a source of truth for each customer field; most problems come from two systems claiming the same field.",
          "Match on strong identifiers first, review uncertain matches, and keep merges reversible.",
          "Fix data quality where data is captured, not only in the integration.",
          "Treat consent as data and propagate withdrawals quickly.",
          "Combining data does not authorise new uses; check purposes under the Privacy Act.",
          "Limit access to combined profiles; they are attractive to attackers and broaden breach impact.",
          "Choose integration or a CDP based on use cases, not on tooling fashion.",
        ],
      },
      {
        heading: "Integration vs customer data platform",
        body: [],
        table: {
          headers: ["", "Direct integration", "Customer data platform (CDP)"],
          rows: [
            ["**Main purpose**", "Keep operational systems consistent", "Unify behavioural and profile data for marketing and personalisation"],
            ["**Typical sources**", "CRM, ecommerce, support, billing", "Web and app events plus operational systems"],
            ["**Strength**", "Simpler, fits most operational needs", "Identity resolution at scale, audience building"],
            ["**Risks**", "Point-to-point sprawl if unmanaged", "Cost, complexity, broad data collection"],
            ["**Fits when**", "Teams need consistent records and history", "High-volume multichannel marketing with clear purposes"],
          ],
        },
      },
      {
        heading: "Ownership: who owns which field?",
        body: [
          "Before building anything, write a field ownership table. For example, the billing system owns billing address and payment status; the CRM owns account owner and lifecycle stage; the ecommerce platform owns order history; the email platform holds send history but not the master consent record. Each integration then knows which direction data flows and which value wins in a conflict.",
        ],
        callout: {
          type: "tip",
          text: "Our recommendation: add a 'last updated by system' and timestamp to synced fields. When two systems disagree, you can see which change came last and from where, which makes most sync bugs easy to diagnose.",
        },
      },
      {
        heading: "Identity resolution and duplicates",
        body: [],
        checklist: [
          "Use strong identifiers first: customer number, account ID, verified email, ABN for business customers.",
          "Use weaker attributes (name, phone, address) only in combination, with rules or scoring.",
          "Normalise before matching: case, whitespace, phone formats, Australian address formats.",
          "Send uncertain matches to a review queue; never auto-merge on weak evidence.",
          "Keep links to every source record so merges can be audited and reversed.",
          "Handle businesses and people separately: one person can belong to several organisations.",
        ],
      },
      {
        heading: "Synchronisation patterns",
        body: [
          "Use events or webhooks for changes that matter quickly, such as consent withdrawals, new orders and status changes, and scheduled syncs for bulk or low-urgency data. Make updates idempotent, handle out-of-order events with timestamps, retry with backoff, and alert when a sync stops. Reconcile periodically by comparing counts and samples across systems. Our [[/blogs/api-integration-australia|API integration guide]] covers retries, queues and monitoring, and [[/blogs/ecommerce-event-driven-architecture|event-driven architecture]] covers event pipelines.",
        ],
      },
      {
        heading: "Data quality",
        body: [
          "Most data quality problems are created at capture: free-text fields, optional fields that should be required, inconsistent picklists, staff creating new records instead of searching. Fix forms and processes first, validate formats (email, phone, ABN, postcode), and report quality metrics such as duplicate rate and completeness by source. See [[/blogs/workflow-digitization-australia|workflow digitisation]] for structured capture.",
        ],
      },
      {
        heading: "Privacy, consent and access control in Australia",
        body: [
          "**Purpose.** If your business is covered by the Privacy Act, APP 6 generally limits the use and disclosure of personal information to the purpose for which it was collected, unless an exception applies, such as consent or a related secondary purpose the person would reasonably expect ([[https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-6-app-6-use-or-disclosure-of-personal-information|OAIC]]). Combining support records with marketing data, for example, may be a new purpose. APP 7 sets rules for direct marketing, and APP 3 limits collection to what is reasonably necessary.",
          "**Consent and unsubscribes.** Under the Spam Act, commercial electronic messages generally need consent, and unsubscribe requests must be honoured within five working days ([[https://www.acma.gov.au/avoid-sending-spam|ACMA]]). Store consent with its source and time, and push withdrawals to every sending system promptly.",
          "**Security and breach scope.** Combined profiles concentrate personal information, so a breach affects more data. Restrict access by role, log access to full profiles, keep sensitive information out of marketing tools, and assess overseas data flows under APP 8. The OAIC received 1,205 data breach notifications in 2025 ([[https://www.oaic.gov.au/news/media-centre/data-breach-notifications-increase-to-all-time-high-in-2025,-new-ndb-stats-show|OAIC]]).",
          "**Tracking data.** If behavioural data from websites or apps joins customer profiles, apply the OAIC's guidance on tracking pixels; see [[/blogs/product-analytics-implementation-australia|product analytics implementation]].",
        ],
      },
      {
        heading: "A phased approach",
        body: [],
        checklist: [
          "**Phase 1:** inventory systems and fields (see [[/blogs/data-migration-australia|data migration planning]] for profiling techniques), write the ownership table, agree definitions and purposes.",
          "**Phase 2:** integrate the two systems with the most valuable shared records (often CRM and ecommerce or billing).",
          "**Phase 3:** add identity resolution with review queues; clean historical duplicates.",
          "**Phase 4:** propagate consent across sending tools; add monitoring and reconciliation.",
          "**Phase 5:** consider a CDP only if marketing use cases justify it, with purposes documented. Reporting on the combined data is covered in [[/blogs/business-intelligence-dashboards-australia|business intelligence dashboards]].",
        ],
      },
      {
        heading: "Hypothetical example: a homewares retailer",
        body: [
          "**This example is hypothetical.** A homewares retailer with stores and an online shop has customers in its ecommerce platform, a loyalty app, its POS system and a support tool, with different emails and phone formats in each. Marketing sends to people who unsubscribed in another tool. (Retention use cases are covered in [[/blogs/ecommerce-customer-retention-technology|retention technology]].)",
          "The retailer names the ecommerce platform as the source of truth for customer profiles and the email platform as the source for marketing consent, with withdrawals pushed to every sending tool within minutes. Store and loyalty records are matched on verified email or loyalty number, with uncertain matches reviewed by the customer service team. Support notes stay in the support tool and are not copied into marketing profiles. A CDP is deferred until the team has documented marketing use cases.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Two systems both writing the same field with no rule for conflicts.",
          "Automatic merges on name and postcode.",
          "Weekly unsubscribe syncs.",
          "Buying a CDP before defining use cases and purposes.",
          "Copying support notes or sensitive data into marketing tools.",
          "No owner, so quality drifts after the project ends.",
        ],
      },
      {
        heading: "Consent management integration",
        body: [
          "Consent works only if every system that uses customer data respects the same, current preferences.",
        ],
        checklist: [
          "A single source of truth for consent and preferences, by channel and purpose, with source and timestamp.",
          "A preference centre customers can use to change choices at any time.",
          "Real-time or near real-time propagation of withdrawals to email, SMS, advertising audiences and CRM.",
          "An audit trail of consent changes for complaints and regulator questions.",
          "Consent banners are not enough on their own: what matters is how data is actually collected, used and shared under the Privacy Act and Spam Act.",
          "See [[/blogs/privacy-by-design-software-australia|privacy by design]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**Privacy:** [[https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-6-app-6-use-or-disclosure-of-personal-information|OAIC, APP 6]]; [[https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information|OAIC, APP 8]]; [[https://www.oaic.gov.au/news/media-centre/data-breach-notifications-increase-to-all-time-high-in-2025,-new-ndb-stats-show|OAIC, NDB statistics 2025]].",
          "**Messages:** [[https://www.acma.gov.au/avoid-sending-spam|ACMA, avoid sending spam]].",
          "Tables, checklists and example are ours. Nothing here is legal advice or ZSpace client data.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Customer data integration pays off when every field has an owner, matches are careful and reversible, consent travels with the data, and access to combined profiles is controlled. Start with direct integrations between the systems that matter most, fix quality at the source, check purposes before new uses, and consider a CDP only when clear use cases justify it. For choosing tools, see [[/blogs/cdp-vs-crm|CDP vs CRM]].",
        ],
        cta: {
          title: "Customer data in too many places?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|data integrations]], [[/services/shopify-development|ecommerce and CRM connections]] and [[/services/ai-automation|automation]]. If it would help to map your customer data, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "payment-gateway-integration-australia",
    title: "Payment Gateway Integration in Australia: Checkout Flows, Webhooks and the 2026 Changes",
    seoTitle: "Payment Gateway Integration in Australia",
    excerpt:
      "Integrating a payment gateway in Australia: hosted vs embedded checkout, webhooks, refunds, reconciliation, surcharging removal, least-cost routing and PayTo.",
    category: "Shopify & Ecommerce",
    banner: "paymentflow",
    sceneKind: "checkout",
    bannerAlt: "A checkout sending a payment to a gateway, the gateway confirming by webhook, the order updating, and refunds and settlements reconciling with accounting",
    date: "2026-10-09",
    updated: "2026-10-10",
    readingTime: "8 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "mobile-app-development"],
    relatedIndustrySlugs: ["ecommerce", "retail", "fintech", "saas-technology", "travel-hospitality"],
    relatedSlugs: ["payment-gateway-integration", "ecommerce-payment-gateway-integration", "subscription-ecommerce-australia"],
    faqs: [
      {
        q: "Which payment gateway is best in Australia?",
        a: "There is no single best gateway. The right choice depends on your platform, payment methods your customers use, recurring billing needs, marketplace or split payments, least-cost routing support, reporting, settlement times, fraud tools, support and pricing for your volume. Shortlist providers that support your platform and requirements, and compare quotes on the same transaction mix.",
      },
      {
        q: "Can Australian businesses still add a card surcharge?",
        a: "Not on eftpos, Mastercard or Visa debit, prepaid or credit cards. The Reserve Bank decided in March 2026 to remove surcharging on those networks from 1 October 2026. American Express and UnionPay also removed surcharging from 1 October 2026, and PayPal from 5 October 2026, by their own decision rather than RBA regulation; buy now pay later and other methods remain under review. Check current RBA guidance and update checkout and invoice templates.",
      },
      {
        q: "What is least-cost routing?",
        a: "Most Australian debit cards are dual-network cards that can be processed through eftpos or an international scheme. Least-cost routing lets the merchant's provider send a transaction through the cheaper network. The RBA expects providers to offer it, and in-person availability is broad, but online enablement has lagged. Ask your gateway whether it supports least-cost routing online and how it is enabled.",
      },
      {
        q: "Should we use a hosted checkout or an embedded payment form?",
        a: "A hosted checkout page or hosted payment fields keep card data off your servers, which reduces your PCI DSS scope and security burden. Embedded flows using the provider's secure fields keep customers on your page with similar scope benefits. Building your own card form that sends card data through your servers greatly increases your obligations and is rarely justified.",
      },
      {
        q: "Why are webhooks important for payments?",
        a: "Because the browser redirect after payment is not reliable: customers close tabs and networks fail. The gateway's webhook tells your server the final payment outcome, including asynchronous results such as later failures, disputes and refunds. Verify webhook signatures, process events idempotently and make the webhook, not the redirect, the source of truth for order status.",
      },
      {
        q: "What is PayTo?",
        a: "PayTo is a payment service on Australia's New Payments Platform that lets a customer authorise a business to take payments from their bank account through an agreement approved in their banking app. Customers can view, pause or cancel agreements in their bank. It can suit recurring and account-to-account payments. Availability depends on your payment provider and the customer's bank.",
      },
    ],
    content: [
      {
        heading: "How should an Australian business integrate a payment gateway?",
        body: [
          "**Use the provider's hosted checkout or secure fields so card data never touches your servers, treat the gateway's signed webhooks as the source of truth for payment status, handle failures, refunds and disputes deliberately, reconcile settlements with your accounts, and test every path.** In Australia, also remove card surcharges on eftpos, Visa and Mastercard (from 1 October 2026), ask about least-cost routing for debit cards, and consider PayTo for account-to-account and recurring payments.",
          "This guide is for businesses and developers adding payments to a website, app, SaaS product, [[/blogs/booking-system-development-australia|booking system]] or custom checkout. It covers hosted versus embedded flows, payment status and webhooks, refunds and failed payments, reconciliation, testing, security and mobile, plus the Australian payment changes that affect design. For the generic version, see [[/blogs/payment-gateway-integration|how to integrate payment gateways]].",
          "We do not quote gateway fees or recommend one provider for every business; pricing and capabilities change and depend on your volume.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Keep card data off your servers with hosted checkout or secure fields.",
          "Make webhooks, not browser redirects, the source of truth for order status.",
          "Process events idempotently; providers retry, and duplicates happen.",
          "Remove surcharges on eftpos, Visa and Mastercard cards (from 1 October 2026).",
          "Ask whether the provider supports least-cost routing online.",
          "Plan refunds, partial refunds, failed payments and disputes before launch.",
          "Reconcile payouts, fees and refunds with your accounting system.",
        ],
      },
      {
        heading: "Hosted, embedded or custom?",
        body: [],
        table: {
          headers: ["Approach", "How it works", "Trade-offs"],
          rows: [
            ["**Hosted checkout page**", "Customer is redirected to the provider's page, then returns", "Fastest and smallest PCI scope; less control over design"],
            ["**Embedded secure fields**", "Provider's fields or elements sit inside your page; card data goes straight to the provider", "Integrated look and feel with reduced scope; more integration work"],
            ["**Wallets (Apple Pay, Google Pay)**", "Device wallet supplies a token", "Fast on mobile; needs domain or app setup per wallet"],
            ["**Platform checkout**", "Ecommerce platform's own checkout and payments", "Least work; limited to platform capabilities"],
            ["**Custom card form via your servers**", "Card data passes through your systems", "Large PCI DSS burden; rarely justified"],
          ],
        },
        callout: {
          type: "note",
          text: "PCI DSS applies to anyone who stores, processes or transmits cardholder data. Using hosted pages or secure fields keeps most of that with the provider, but you still have responsibilities, such as protecting the page that loads the payment form. Check your obligations with your provider and the PCI Security Standards Council ([[https://www.pcisecuritystandards.org/|PCI SSC]]).",
        },
      },
      {
        heading: "Australian payment changes that affect your integration",
        body: [
          "**Surcharging.** The Reserve Bank's March 2026 decision removed surcharging on eftpos, Mastercard and Visa debit, prepaid and credit cards from 1 October 2026; the RBA reports that American Express and UnionPay also removed surcharging from 1 October 2026, and PayPal from 5 October 2026, by their own decision rather than RBA regulation; buy now pay later and other methods remain under review ([[https://www.rba.gov.au/payments-and-infrastructure/review-of-retail-payments-regulation/2026-03/conclusions-paper/faqs/|RBA FAQs]]; [[https://www.rba.gov.au/payments-and-infrastructure/review-of-retail-payments-regulation/2026-03/conclusions-paper/executive-summary.html|RBA]]). Remove surcharge lines for those networks from checkout, invoices and receipts, and build costs into prices.",
          "**Least-cost routing.** Around nine in ten Australian debit cards are dual-network cards that can be processed through eftpos or an international network, and least-cost routing lets merchants send transactions through the cheaper one. The RBA expects providers to offer least-cost routing, but has reported that online enablement lags in-person; it planned further consultation on online and mobile wallet routing from mid-2026 ([[https://www.rba.gov.au/payments-and-infrastructure/debit-cards/least-cost-routing/|RBA]]). Ask your provider whether it is available for your online payments and how it is enabled.",
          "**PayTo.** PayTo, on the New Payments Platform, lets customers approve payment agreements in their banking app and manage them there, which can suit recurring and account-to-account payments ([[https://www.nppa.com.au/the-platform/payto/|NPP Australia]]). Provider support varies.",
          "**Buy now pay later.** From 10 June 2025, buy now pay later contracts are regulated credit, and providers need an Australian credit licence ([[https://asic.gov.au/regulatory-resources/credit/buy-now-pay-later-credit-contracts-credit-licensing/|ASIC]]). Merchants integrate BNPL through providers' own checkouts or a gateway that supports them, and should display BNPL terms accurately. For marketplaces that split payments between sellers, see [[/blogs/marketplace-development-australia|marketplace development in Australia]].",
          "**Currency and GST.** Show prices in AUD including GST for consumers (see [[/blogs/shopify-development-australia|Shopify development in Australia]] for platform settings), make sure the amounts sent to the gateway match displayed totals, and record GST correctly in reconciliation.",
        ],
      },
      {
        heading: "Payment status and webhooks",
        body: [
          "The redirect back to your site after payment is not proof of payment: customers close tabs, networks drop and some outcomes arrive later. Let the gateway's signed webhooks drive order status, and show a 'processing' state until the webhook arrives.",
        ],
        code: {
          label: "Order and payment state, driven by webhooks",
          text: `Checkout   -> create order (pending_payment)
           -> create payment intent / session
Customer   -> pays on hosted page or fields
Redirect   -> show 'processing' (not proof)
Webhook    -> verify signature
           -> payment_succeeded: order = paid
           -> payment_failed: order = failed
           -> refunded / disputed: update order
Every event: store event ID, ignore repeats`,
        },
      },
      {
        heading: "Refunds, failed payments and disputes",
        body: [],
        checklist: [
          "Support full and partial refunds from your admin, with reasons recorded.",
          "Reflect refunds from the provider's dashboard via webhooks, so systems stay in sync.",
          "Show clear, specific messages for declined payments and let customers retry or use another method.",
          "For subscriptions, retry failed renewals on a schedule and notify customers with a secure update link; see [[/blogs/subscription-ecommerce-australia|subscription ecommerce in Australia]].",
          "Handle disputes: notify staff, gather evidence (order, delivery, communication) and respond within the provider's deadline.",
          "Use 3-D Secure where risk or rules call for it; see [[/blogs/3d-secure-ecommerce|3D Secure]].",
        ],
      },
      {
        heading: "Reconciliation",
        body: [
          "Payments are not finished when the customer pays. Providers settle funds in batches, net of fees and refunds. Reconcile each payout with the orders, refunds and fees it contains, and post them correctly to Xero, MYOB or your ERP. Store the provider's transaction IDs on orders and invoices so every amount can be traced. See [[/blogs/api-integration-australia|API integration for Australian businesses]].",
        ],
      },
      {
        heading: "Testing checklist",
        body: [],
        checklist: [
          "Successful payments for each method and card type you support.",
          "Declines, insufficient funds, expired cards and 3-D Secure challenges, using provider test cards.",
          "Customer closes the tab after paying: does the order still complete via webhook?",
          "Duplicate and out-of-order webhooks.",
          "Full and partial refunds from both your admin and the provider dashboard.",
          "Disputes in test mode, if the provider supports them.",
          "Wallet payments on real iOS and Android devices.",
          "Checkout totals with GST, discounts and delivery match the amount charged.",
          "No surcharge shown for eftpos, Visa or Mastercard.",
        ],
      },
      {
        heading: "Security and mobile",
        body: [
          "Keep API keys in a secrets manager, use restricted keys where the provider offers them, verify webhook signatures, and never log card data. Protect the pages that load payment forms against script injection, for example with a Content Security Policy and monitoring of scripts. On mobile, use the provider's native SDKs and wallet support rather than web views where possible. See [[/blogs/mobile-app-payments|mobile app payments]] and [[/blogs/ecommerce-payment-security|payment security]].",
        ],
      },
      {
        heading: "Choosing a provider: questions to ask",
        body: [],
        checklist: [
          "Does it support our platform, and our payment methods (cards, wallets, BNPL, PayTo)?",
          "Is least-cost routing available for online debit payments, and how is it enabled?",
          "What are settlement times and payout reporting like?",
          "Does it support recurring billing, card updater and retries?",
          "Does it support marketplaces or split payments, if we need them?",
          "What fraud and dispute tools are included?",
          "What does pricing look like for our actual transaction mix? (Ask for a written quote.)",
        ],
      },
      {
        heading: "Hypothetical example: a SaaS adding card and PayTo payments",
        body: [
          "**This example is hypothetical.** An Australian SaaS for sports clubs bills monthly by card through a gateway and has been adding a card surcharge. Before 1 October 2026 it removes the surcharge from checkout and invoices for eftpos, Visa and Mastercard, adjusts prices, and confirms with its provider how least-cost routing applies to its online debit payments. It adds PayTo as an option for clubs that prefer bank payments, moves order status to webhooks after finding orders stuck when users closed the tab, and reconciles payouts to Xero daily.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Marking orders paid on the redirect instead of the webhook.",
          "Not verifying webhook signatures or handling duplicates.",
          "Leaving card surcharges in templates after 1 October 2026.",
          "Assuming least-cost routing is on without asking.",
          "Card data passing through your servers unnecessarily.",
          "No reconciliation between payouts and accounts.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**Australian payments:** [[https://www.rba.gov.au/payments-and-infrastructure/review-of-retail-payments-regulation/2026-03/conclusions-paper/executive-summary.html|RBA, surcharging conclusions]]; [[https://www.rba.gov.au/payments-and-infrastructure/debit-cards/least-cost-routing/|RBA, least-cost routing]]; [[https://www.nppa.com.au/the-platform/payto/|NPP Australia, PayTo]]; [[https://asic.gov.au/regulatory-resources/credit/buy-now-pay-later-credit-contracts-credit-licensing/|ASIC, BNPL credit licensing]].",
          "**Security:** [[https://www.pcisecuritystandards.org/|PCI Security Standards Council]].",
          "Least-cost routing and PayTo points are summarised from official guidance and provider documentation. Tables, checklists and example are ours. No fees are quoted. Nothing here is financial or legal advice or ZSpace client data.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A good payment integration is mostly about the unglamorous paths: webhooks, retries, refunds, disputes and reconciliation. In Australia, update for the October 2026 surcharging change, ask about least-cost routing, and consider PayTo where bank payments suit your customers. Choose a provider for your platform and transaction mix, keep card data off your servers, and test every path before launch.",
        ],
        cta: {
          title: "Integrating payments?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|payment integrations]], [[/services/shopify-development|Shopify checkouts]] and [[/services/mobile-app-development|in-app payments]]. If it would help to review your payment flows, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "data-migration-australia",
    title: "Data Migration Planning in Australia: Mapping, Cleansing, Testing and Cutover",
    seoTitle: "Data Migration Planning in Australia: A Practical Checklist",
    excerpt:
      "How to plan a data migration in Australia: mapping, cleansing, deduplication, backups, test migrations, reconciliation, cutover, rollback and privacy.",
    category: "Web Development",
    banner: "datamigflow",
    sceneKind: "pipeline",
    bannerAlt: "Data moving from an old system to a new one through profiling, mapping, cleansing, rehearsal migrations and reconciliation, with a backup and rollback path at cutover",
    date: "2026-10-09",
    updated: "2026-10-10",
    readingTime: "8 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["professional-services", "manufacturing", "healthcare-healthtech", "retail", "b2b-enterprise"],
    relatedSlugs: ["ecommerce-data-migration", "legacy-software-modernization-australia", "cloud-migration-australia"],
    faqs: [
      {
        q: "What does a data migration involve?",
        a: "Moving data from one system to another accurately: profiling the source data, mapping fields to the new system, cleaning and deduplicating, transforming formats, loading in the right order, verifying that the result matches, and switching over with a plan to roll back if needed. It usually includes several rehearsal migrations before the real one.",
      },
      {
        q: "Can a data migration have zero downtime and zero data loss?",
        a: "Nobody should promise either. Careful planning, rehearsals, replication of changes during cutover and reconciliation can keep downtime short and make loss very unlikely, but some risk remains. Agree acceptable downtime and how you will verify completeness, back up the source, and keep it available until the migration is accepted.",
      },
      {
        q: "How many test migrations should we run?",
        a: "At least two full rehearsals is a common rule of practice, and more for complex or high-risk migrations. Each rehearsal should use a recent copy of production data, follow the real runbook, be timed, and be reconciled. Keep rehearsing until the run is predictable and reconciliation passes.",
      },
      {
        q: "Should we migrate all historical data?",
        a: "Not necessarily. Migrate what people need to do their work, archive the rest in a readable, searchable form, and check legal retention requirements before deleting anything. Business records are generally kept for five years for tax purposes, and other laws may require longer. Personal information no longer needed may need to be destroyed or de-identified.",
      },
      {
        q: "How do we prove a migration worked?",
        a: "Reconcile: compare record counts by type, financial totals, key fields on random samples, and relationships such as orders to customers. Have business users check real records they know. Document results and get sign-off before decommissioning the old system.",
      },
      {
        q: "Can we use an offshore team for data migration?",
        a: "You can, but if the data includes personal information and your business is covered by the Privacy Act, APP 8 requires reasonable steps before disclosing it overseas, and you may remain accountable for how it is handled. Consider whether the team needs access to real personal data, use masked data where possible, and put protections in the contract.",
      },
          {
        q: "How do we migrate to a different database engine safely?",
        a: "Assess engine-specific features first, convert and review the schema, load data and keep it current with replication or change data capture, validate with counts, checksums and business reports, test performance with real workloads, and rehearse the cutover with a rollback plan. See [[/blogs/database-performance-optimization|database performance optimisation]] for tuning after the move.",
      },
],
    content: [
      {
        heading: "How should you plan a data migration?",
        body: [
          "**Plan a data migration as its own project: profile the source data, map every field, clean and deduplicate, rehearse the migration at least twice on recent copies, reconcile counts, totals and samples, plan the cutover with a rehearsed rollback, and validate with business users before switching off the old system.** In Australia, also check record retention, destruction or de-identification of personal information no longer needed, and overseas access by migration teams. Nobody should promise zero downtime or zero data loss.",
          "This guide is for businesses moving data between business systems: CRM, ERP, accounting, practice management, job management or custom applications. For online stores, see [[/blogs/ecommerce-data-migration|ecommerce data migration]]; for the wider system decision, [[/blogs/legacy-software-modernization-australia|legacy software modernisation]].",
          "It includes a practical checklist at the end. Nothing here is legal or tax advice.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Profile before mapping; data rarely matches what the documentation says.",
          "Decide what not to migrate, and archive it properly.",
          "Clean at source where you can; let business owners decide ambiguous records.",
          "Rehearse on recent production copies, time each run and reconcile every time.",
          "Back up the source and keep it available until sign-off.",
          "Write and rehearse the rollback plan before cutover.",
          "Apply retention, destruction and overseas-access rules to personal information.",
        ],
      },
      {
        heading: "Step 1: Inventory and profile the data",
        body: [
          "List every source: the main system, spreadsheets, shared drives, other tools that hold related records. For each, profile the data: volumes, field fill rates, unique values, odd formats, duplicates, orphaned records and free-text fields used as codes. Profiling turns assumptions into facts and usually changes the plan.",
        ],
      },
      {
        heading: "Step 2: Map fields and decide scope",
        body: [],
        table: {
          headers: ["Decision", "Questions to answer"],
          rows: [
            ["**Field mapping**", "Where does each source field go? What transformation is needed?"],
            ["**Reference data**", "How do codes, categories and picklists translate?"],
            ["**History**", "How far back do transactions, notes and attachments go?"],
            ["**Archive**", "Where does unmigrated data live, and how is it searched?"],
            ["**Relationships**", "What order must records load in to keep links intact?"],
            ["**Ownership**", "Which business owner approves each mapping?"],
          ],
        },
      },
      {
        heading: "Step 3: Cleanse and deduplicate",
        body: [
          "Fix what you can in the source before migration, so the new system starts clean. Standardise formats (phone numbers, addresses, ABNs, dates), merge duplicates with business review, close or archive inactive records, and fill required fields. Automated rules handle the obvious cases; people should decide the ambiguous ones. Track cleansing progress by measure, such as the duplicate rate, rather than by effort. See [[/blogs/customer-data-integration-australia|customer data integration]] for matching techniques.",
        ],
      },
      {
        heading: "Step 4: Build and rehearse the migration",
        body: [
          "Script the migration so it is repeatable: extract, transform, load and verify. Run it end to end on a recent copy of production data in a test environment, timed, following the runbook. Reconcile, fix problems, and run it again. Each rehearsal should be more predictable than the last; the final rehearsal tells you how long cutover will take.",
        ],
        callout: {
          type: "tip",
          text: "Our recommendation: treat reconciliation reports as the main output of each rehearsal. If you cannot produce a clean report, you are not ready to cut over, whatever the schedule says.",
        },
      },
      {
        heading: "Step 5: Reconcile and validate",
        body: [],
        checklist: [
          "Record counts by entity, source vs target.",
          "Financial totals: balances, invoice totals, outstanding amounts.",
          "Random samples compared field by field.",
          "Relationships: contacts to accounts, orders to customers, attachments to records.",
          "Edge cases: special characters, long text, historical statuses.",
          "Business users test real tasks with records they know.",
          "Written sign-off on reconciliation results.",
        ],
      },
      {
        heading: "Step 6: Plan cutover, downtime and rollback",
        body: [
          "Agree acceptable downtime with the business and choose an approach: a freeze-and-migrate cutover during a quiet period, or a phased cutover with change replication so the final switch only moves recent changes. Communicate timings to staff and customers.",
          "Write the rollback plan before cutover: what triggers it, who decides, how long rollback remains possible, and what happens to data entered in the new system in the meantime. Back up the source fully before starting and keep it read-only and available until the migration is accepted. A rollback plan that has not been rehearsed is an assumption. For high-risk systems, consider a parallel run; see [[/blogs/ecommerce-parallel-run|parallel runs]].",
        ],
      },
      {
        heading: "Access control during migration",
        body: [
          "Migrations create extra copies of data in extracts, staging databases and spreadsheets, often with broader access than production. Limit who can access migration data, use masked or synthetic data where real data is not needed, encrypt extracts, log access, and delete temporary copies when the migration is accepted.",
        ],
      },
      {
        heading: "Australian considerations",
        body: [
          "**Retention.** Business guidance generally says most business records must be kept for five years, and electronic records are acceptable when they are true and complete reproductions ([[https://business.gov.au/finance/accounting/record-keeping|business.gov.au]]). Other laws may require longer retention for some records. Check before deciding what not to migrate or archive.",
          "**Destruction or de-identification.** If you are covered by the Privacy Act, APP 11 requires reasonable steps to destroy or de-identify personal information you no longer need, unless a law requires you to keep it ([[https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-11-app-11-security-of-personal-information|OAIC]]). A migration is a natural point to apply this, rather than moving everything forward forever.",
          "**Overseas access.** If migration staff or tools outside Australia access personal information, APP 8 applies ([[https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information|OAIC]]). Use masked data where possible and put protections in contracts.",
          "**Breaches.** Lost extracts and misconfigured staging environments are common breach causes. If an eligible data breach occurs, the Notifiable Data Breaches scheme applies. See [[/blogs/website-security-australia|website security for Australian small businesses]] for the incident sequence.",
        ],
      },
      {
        heading: "Step 7: After go-live",
        body: [
          "Watch closely for the first weeks: data errors reported by users, integration failures and performance. Fix issues at source and record lessons. When the business has signed off, decommission the old system according to plan, keeping archives accessible for the retention period and deleting temporary migration copies.",
        ],
      },
      {
        heading: "Data migration checklist",
        body: [],
        checklist: [
          "Sources inventoried and profiled.",
          "Field mappings approved by business owners.",
          "Scope decided: what migrates, what is archived, what is destroyed or de-identified.",
          "Retention requirements checked.",
          "Cleansing and deduplication complete to agreed measures.",
          "Migration scripted and repeatable.",
          "At least two timed rehearsals with clean reconciliation.",
          "Cutover plan, communications and downtime agreed.",
          "Full source backup taken and tested.",
          "Rollback plan written and rehearsed.",
          "Access to migration data restricted; temporary copies tracked.",
          "Post-go-live monitoring and support in place.",
          "Sign-off before decommissioning.",
        ],
      },
      {
        heading: "Hypothetical example: moving to a new practice management system",
        body: [
          "**This example is hypothetical.** An accounting practice is moving from a self-hosted practice system used for fifteen years to a cloud product. Profiling finds thousands of duplicate contacts, job codes stored in free text, and documents linked by file paths. The practice migrates seven years of jobs and invoices, archives older records in a searchable read-only format after its accountant confirms retention needs, de-identifies data for clients who left long ago where it is not required to keep it, and runs three rehearsals before a weekend cutover. Reconciliation compares work-in-progress and debtor balances to the cent.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Mapping from documentation instead of profiled data.",
          "Migrating everything, including data that should be deleted.",
          "One rehearsal, or none.",
          "Reconciling only record counts.",
          "Decommissioning the old system before sign-off.",
          "Unsecured spreadsheets of extracted personal data.",
        ],
      },
      {
        heading: "Related guides",
        body: [
          "For cloud moves, see [[/blogs/cloud-migration-australia|cloud migration for Australian businesses]]. For CRM changes, see [[/blogs/custom-crm-development-australia|custom vs off-the-shelf CRM]]. For stores, see [[/blogs/ecommerce-migration-testing|ecommerce migration testing]].",
        ],
      },
      {
        heading: "Database engine migrations",
        body: [
          "Moving between database engines, for example from SQL Server or Oracle to PostgreSQL, or from a self-managed database to a managed cloud service, is more than copying tables. Data types, functions, stored procedures, collations, time zones and performance behaviour differ, and applications often rely on engine-specific features.",
        ],
        checklist: [
          "Check time zone handling: store timestamps in UTC and test Australian daylight saving transitions.",
          "Confirm the target region keeps data where your contracts and privacy obligations require.",
          "Rehearse cutover at least once with production-sized data.",
          "Keep the source read-only and available until reconciliation is signed off.",
        ],
        table: {
          headers: ["Stage", "What it involves"],
          rows: [
            ["**Assessment**", "Inventory schemas, stored procedures, triggers, jobs and application queries; flag engine-specific features"],
            ["**Schema conversion**", "Convert types, constraints and code using tools such as AWS Schema Conversion Tool or manual rewrite, then review by hand"],
            ["**Data movement**", "Initial bulk load, then change data capture or replication to keep the target current"],
            ["**Validation**", "Row counts, checksums, sampled record comparisons and business report reconciliation"],
            ["**Performance testing**", "Run real query workloads; review indexes and query plans on the new engine"],
            ["**Cutover**", "Freeze writes or switch replication, point applications to the new database, keep a rollback path"],
          ],
        },
      },
      {
        heading: "Sources",
        body: [
          "[[https://business.gov.au/finance/accounting/record-keeping|business.gov.au, record keeping]]; [[https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-11-app-11-security-of-personal-information|OAIC, APP 11]]; [[https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information|OAIC, APP 8]].",
          "The checklist, tables and example are ours. Nothing here is legal or tax advice or ZSpace client data.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Data migrations succeed through preparation and proof: profile, map, clean, rehearse, reconcile, and only then cut over with a way back. In Australia, use the migration to apply retention and privacy rules properly, and control access to the extra copies migrations create. Promise careful verification, not perfection.",
        ],
        cta: {
          title: "Planning a data migration?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|system migrations and integrations]] and [[/services/ai-automation|data automation]]. If it would help to plan rehearsals and reconciliation, we are happy to talk it through.",
        },
      },
    ],
  },
];
