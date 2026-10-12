import type { BlogPost } from "./blog-data";

/**
 * Batch 181–230 retail and hospitality pair. Ecommerce returns merges topics
 * 191 (returns portal) and 195 (returns UX) into one Australian page built
 * around the Australian Consumer Law, linking the generic returns pages for
 * depth. Hospitality software merges topics 201 (hospitality software) and
 * 202 (restaurant apps). Australian decisions covered: consumer guarantees
 * (major and minor failures, change of mind, no-refund signs), surcharge
 * display for restaurants and cafes on Sundays and public holidays, card
 * surcharge removal from 1 October 2026, Spam Act, privacy for ordering
 * data, and Australia Post returns.
 * Sources checked 2026-10-10 (ACCC pages via search summaries where blocked):
 * ACCC repair, replace, refund guidance; WA Consumer Protection returns page;
 * ACCC restaurant and cafe surcharge media releases; RBA surcharging
 * conclusions; Australia Post eCommerce Report 2026 (via batch research);
 * OAIC tracking pixels guidance. No figure here is ZSpace client data.
 */
export const auRetailHospitalityPosts: BlogPost[] = [
  {
    slug: "ecommerce-returns-australia",
    title: "Ecommerce Returns in Australia: Consumer Law, Returns Portals and a Better Customer Journey",
    seoTitle: "Ecommerce Returns in Australia: Law, Portals and UX",
    excerpt:
      "How Australian online stores handle returns: consumer guarantees vs change of mind, clear policies, a returns portal, refunds, exchanges and status updates.",
    category: "Shopify & Ecommerce",
    banner: "returnsuxflow",
    sceneKind: "orders",
    bannerAlt: "A customer looking up an order, choosing items and a reason, seeing the right remedy for a fault or change of mind, printing a label and tracking the refund",
    date: "2026-10-10",
    readingTime: "6 min read",
    relatedServiceSlugs: ["shopify-development", "website-development", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "retail", "fashion-apparel", "consumer-electronics", "d2c-consumer"],
    relatedSlugs: ["ecommerce-returns-management", "ecommerce-returns-ux", "ecommerce-reverse-logistics"],
    faqs: [
      {
        q: "Do Australian online stores have to accept returns?",
        a: "For faulty goods, goods that do not match their description, or goods that are not fit for purpose, yes: the consumer guarantees under the Australian Consumer Law apply to online sales and cannot be excluded. Stores are not required to accept change-of-mind returns, but if they offer a change-of-mind policy, they must honour it. This is general information, not legal advice.",
      },
      {
        q: "What is the difference between a major and a minor failure?",
        a: "According to the ACCC, a minor failure can be fixed in a reasonable time, and the business can choose to repair, replace or refund. A major failure includes products that are unsafe, significantly different from the description, or would not have been bought had the customer known about the problem; the customer can choose a refund or replacement and may claim compensation for reduced value.",
      },
      {
        q: "Can we say 'no refunds on sale items'?",
        a: "Not as a blanket statement. The ACCC says it is illegal to rely on policies or signs that deny consumer guarantee rights, such as 'no refunds' or 'no refunds on sale items'. You can say you do not offer change-of-mind refunds on sale items, as long as you make clear that consumers' rights for faulty items are unaffected.",
      },
      {
        q: "Can we charge for return postage?",
        a: "For change-of-mind returns you can set your own terms, including return shipping costs, if they are clear before purchase. For goods with a failure under the consumer guarantees, the business is generally responsible for reasonable costs of returning goods that cannot easily be returned. Get advice on your specific policy wording.",
      },
      {
        q: "Should we build a custom returns portal?",
        a: "Usually not at first. Ecommerce platforms and returns apps cover order lookup, reasons, labels and refunds well. Custom work makes sense for complex rules, such as warranty assessments, exchanges across channels, or integration with your own ERP and warehouse. Whatever you use, configure it so it does not deny consumer guarantee rights.",
      },
      {
        q: "What should customers see while a return is processing?",
        a: "Clear status at each step: request received, label created, parcel in transit, received, inspected, and refund or exchange issued, with expected timeframes. Send factual notifications at each stage. Most 'where is my refund' contacts come from missing status updates, not from slow processing.",
      },
    ],
    content: [
      {
        heading: "How should an Australian online store handle returns?",
        body: [
          "**Separate two different things: consumer guarantee claims, which the law requires you to handle (faulty, not as described, not fit for purpose), and change-of-mind returns, which are optional but must be honoured if you offer them. Then make both easy: a clear policy, an order lookup that asks the right questions, the correct remedy, labels and drop-off options, status updates and prompt refunds.** Policies cannot remove consumer guarantee rights.",
          "This guide combines the legal, customer experience and engineering sides of returns for Australian ecommerce. For generic depth, see [[/blogs/ecommerce-returns-management|returns management]], [[/blogs/ecommerce-returns-ux|returns UX]] and [[/blogs/ecommerce-reverse-logistics|reverse logistics]]. Nothing here is legal advice; check ACCC guidance and get advice on your policy.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Consumer guarantees apply to online sales and cannot be excluded by your policy.",
          "Change-of-mind returns are optional, but if offered, must be honoured as stated.",
          "Never use blanket 'no refunds' wording; it is misleading under the ACL.",
          "Design the portal to route faults and change of mind differently.",
          "Show status at every step; most return contacts are status questions.",
          "Integrate returns with inventory, refunds and accounting so records match.",
        ],
      },
      {
        heading: "The legal basics, in plain terms",
        body: [],
        table: {
          headers: ["Situation", "What applies", "Who chooses the remedy"],
          rows: [
            ["**Major failure** (unsafe, significantly not as described, would not have bought it)", "Consumer guarantees", "The customer: refund or replacement, plus possible compensation"],
            ["**Minor failure** (can be fixed in a reasonable time)", "Consumer guarantees", "The business: repair, replace or refund"],
            ["**Change of mind**", "Your store policy, if any", "As your policy states"],
            ["**Misuse or a fault the customer knew about**", "Generally not covered", "—"],
          ],
        },
        callout: {
          type: "note",
          text: "The ACCC says businesses must not rely on policies such as 'no refunds' or 'no refunds or exchanges on sale items' that deny these rights, and that a business may assess the product before providing a remedy ([[https://www.accc.gov.au/business/problem-with-a-product-or-service-you-sold/repair-replace-refund-cancel|ACCC]]). Manufacturer warranties are in addition to these rights.",
        },
      },
      {
        heading: "Writing a clear returns policy",
        body: [],
        checklist: [
          "State that consumer guarantee rights apply in addition to the policy.",
          "Explain change-of-mind terms, if offered: timeframe, condition, exclusions, who pays postage.",
          "Explain how to report a fault, what evidence helps (photos, order number), and how long assessment takes.",
          "Explain refund method and timing, including for buy now pay later and gift cards.",
          "Use plain language, link the policy near the add-to-cart button and in confirmation emails.",
          "Review wording with a lawyer.",
        ],
      },
      {
        heading: "Designing the returns portal",
        body: [
          "A good portal guides the customer to the right path in a few steps:",
        ],
        code: {
          label: "Returns portal flow",
          text: `Find order   -> email + order number, or account
Choose items -> quantities, eligible items shown
Reason       -> fault / not as described /
                wrong item / change of mind
Fault path   -> photos, description, assessment,
                remedy per consumer guarantees
Change mind  -> policy terms, exchange or refund
Return       -> label, Parcel Locker or post office,
                or store drop-off
Track        -> received, inspected, refunded`,
        },
      },
      {
        heading: "Customer journey and accessibility",
        body: [
          "Keep the flow short, explain each step, and show costs (if any) before the customer commits. Offer exchanges as easily as refunds. Make the portal accessible: labelled fields, keyboard access, clear error messages and readable status pages, in line with WCAG 2.2; see [[/blogs/digital-forms-development-australia|digital forms development]]. Delivery and returns convenience matter to Australian shoppers: Australia Post's eCommerce Report 2026 found 69% prefer a wide range of delivery options including out-of-home collection and returns.",
        ],
      },
      {
        heading: "Status updates and notifications",
        body: [
          "Send a factual message at each stage: request received with instructions, label created, parcel received, assessment result, and refund or exchange issued with timing. Factual transactional messages are treated differently from marketing under the Spam Act; keep promotions out of them.",
        ],
      },
      {
        heading: "Integrations",
        body: [],
        checklist: [
          "Ecommerce platform: orders, refunds, exchanges and store credit.",
          "Carriers: return labels and tracking, for example Australia Post, which also offers Parcel Locker returns.",
          "Inventory and warehouse: expected returns, receiving, grading and restocking; see [[/blogs/inventory-management-software-australia|inventory management software]].",
          "Payments: refunds to the original method, including BNPL providers.",
          "Accounting: refunds, credit notes and GST adjustments posted correctly.",
          "Support desk: return status visible to agents.",
        ],
      },
      {
        heading: "Operational trade-offs",
        body: [
          "Generous change-of-mind policies can build trust but increase costs and fraud; tighter ones reduce cost but may lose sales. Decide with data: return rates by product and reason, cost per return, and repeat purchase rates. Reduce avoidable returns at the source with accurate product descriptions, sizing information and photos, which also reduces 'not as described' claims under consumer law. See [[/blogs/ecommerce-conversion-optimization-australia|ecommerce conversion optimisation in Australia]].",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "'No refunds on sale items' or similar blanket wording.",
          "Treating faults as change of mind, with fees or deadlines that do not apply.",
          "No status updates, leading to support contacts and chargebacks.",
          "Refunds issued in one system but not reflected in inventory or accounting.",
          "A portal that is hard to use on a phone or with assistive technology.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "[[https://www.accc.gov.au/business/problem-with-a-product-or-service-you-sold/repair-replace-refund-cancel|ACCC, repair, replace, refund, cancel]]; [[https://consumerprotection.wa.gov.au/returns-refunds-repairs-and-replacements|WA Consumer Protection, returns]]; [[https://auspost.com.au/business/ecommerce/ecommerce-report|Australia Post eCommerce Report 2026]]; [[https://www.acma.gov.au/avoid-sending-spam|ACMA, avoid sending spam]].",
          "Consumer law points were confirmed via search summaries of ACCC and state regulator material. The flow, tables and checklists are ours. Nothing here is legal advice or ZSpace client data.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Returns in Australia start with the law: consumer guarantees for failures, your own policy for change of mind, and no wording that denies customers' rights. Build a portal that routes each case correctly, keeps customers informed and connects to inventory, payments and accounts, and use returns data to prevent the next return. For product registration and warranty claims, see [[/blogs/warranty-management-software-australia|warranty management software]].",
        ],
        cta: {
          title: "Improving your returns experience?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/shopify-development|Shopify returns flows]], [[/services/website-development|custom returns portals and integrations]] and [[/services/ui-ux-design|returns UX]]. If it would help to review your flow, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "hospitality-software-development-australia",
    title: "Hospitality Software Development in Australia: Ordering Apps, Venue Operations and Integrations",
    seoTitle: "Hospitality and Restaurant Software in Australia",
    excerpt:
      "Hospitality software in Australia: ordering apps vs platforms, menus, card surcharge removal, public holiday surcharge display, kitchen workflows and guests.",
    category: "Web Development",
    banner: "foodux",
    sceneKind: "orders",
    bannerAlt: "A guest ordering from a phone at a venue, the order reaching the kitchen display, payment completed, and the venue's POS, bookings and loyalty systems kept in sync",
    date: "2026-10-10",
    readingTime: "6 min read",
    relatedServiceSlugs: ["mobile-app-development", "website-development", "ui-ux-design"],
    relatedIndustrySlugs: ["travel-hospitality", "food-beverage", "retail"],
    relatedSlugs: ["ai-agents-in-travel-and-hospitality", "booking-system-development-australia", "payment-gateway-integration-australia"],
    faqs: [
      {
        q: "Should a restaurant build its own ordering app?",
        a: "Usually not at first. Established ordering, POS and delivery platforms cover menus, ordering, payments and kitchen tickets, and customers already use them. A custom app or ordering site makes sense for groups with many venues, strong repeat customers, loyalty programs, or workflows the platforms handle poorly, and where avoiding marketplace commissions on direct orders justifies the build and upkeep.",
      },
      {
        q: "Can Australian restaurants add a public holiday surcharge?",
        a: "Yes, if it is properly disclosed. Under the Australian Consumer Law, restaurants and cafes that apply a surcharge on certain days can display a statement of the surcharge on the menu, at least as prominently as the most prominent price, rather than listing surcharge-inclusive prices for every item. Ordering apps should apply and display the surcharge consistently. Check current ACCC guidance.",
      },
      {
        q: "Can venues still add a card surcharge?",
        a: "Not on eftpos, Visa or Mastercard cards from 1 October 2026, under the Reserve Bank's decision to remove surcharging on those networks. American Express and UnionPay also removed surcharging from 1 October 2026, and PayPal from 5 October 2026, by their own decision rather than RBA regulation; buy now pay later and other methods remain under review. Ordering apps and POS settings should remove card surcharges for those networks. Check current RBA guidance.",
      },
      {
        q: "What integrations does hospitality software need?",
        a: "Commonly the POS, kitchen display or printers, payment provider, online ordering and delivery platforms, table bookings, loyalty or CRM, accounting software such as Xero or MYOB, and rostering. For accommodation, a property management system and channel manager. Decide which system owns menus, prices and stock before integrating.",
      },
      {
        q: "Is QR code ordering a privacy issue?",
        a: "It can be. Ordering flows often collect names, phone numbers, emails and purchase history, and some add tracking for marketing. If your business is covered by the Privacy Act, collect only what ordering needs, explain any marketing use, get consent for marketing messages under the Spam Act, and follow OAIC guidance on tracking pixels.",
      },
      {
        q: "What about accommodation and hotels?",
        a: "Hotels and other accommodation providers typically rely on a property management system, channel manager and booking engine. Custom work tends to focus on guest apps, upselling, integrations and reporting rather than replacing the core systems. Tourism operators can list products on the Australian Tourism Data Warehouse to reach state tourism websites and distributors.",
      },
    ],
    content: [
      {
        heading: "What software do Australian hospitality businesses need?",
        body: [
          "**Most venues need reliable core systems (POS, payments, kitchen displays, bookings, rostering and accounting) more than custom software. Custom development pays off for multi-venue groups and brands with loyal repeat guests: direct ordering apps, loyalty, guest accounts, integrations and reporting across venues.** In Australia, design for the October 2026 removal of card surcharges on eftpos, Visa and Mastercard, disclose any public holiday surcharge correctly, and handle guest data under the Privacy Act and Spam Act.",
          "This guide is for restaurant and cafe groups, pubs and clubs, hotels and accommodation, and venue operators. It covers guest journeys, ordering and pickup, delivery options, payments, kitchen workflows, venue operations, integrations and reporting, and compares custom apps with established platforms. For bookings and tourism experiences, see [[/blogs/booking-system-development-australia|online booking systems]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Choose proven POS, payments and kitchen systems first; build on top of them.",
          "Custom ordering apps suit groups with repeat customers and loyalty, not single venues by default.",
          "Remove card surcharges for eftpos, Visa and Mastercard from 1 October 2026.",
          "Display Sunday or public holiday surcharges as required, consistently across menus and apps.",
          "Make the kitchen workflow the centre of ordering design.",
          "Collect only the guest data you need; marketing needs consent.",
        ],
      },
      {
        heading: "Custom app or established platform?",
        body: [],
        table: {
          headers: ["Option", "Fits when", "Watch for"],
          rows: [
            ["**POS-integrated ordering (QR, kiosk, web)**", "Most venues", "Per-order or subscription fees; limited branding"],
            ["**Delivery marketplaces**", "Reach new customers", "Commissions; customer relationship stays with the platform"],
            ["**White-label ordering app**", "Branded ordering without a full build", "Platform constraints; app store accounts in your name"],
            ["**Custom ordering app and loyalty**", "Multi-venue groups, strong repeat customers, distinctive workflows", "Build and upkeep cost; adoption effort"],
          ],
        },
        callout: {
          type: "tip",
          text: "Our recommendation: before building an app, measure how many orders come from repeat guests and what marketplace commissions cost you. If repeat direct ordering is small, invest in your website ordering and loyalty first. See [[/blogs/mobile-app-development-cost-australia|mobile app development cost in Australia]].",
        },
      },
      {
        heading: "Guest journeys and ordering",
        body: [],
        checklist: [
          "**Menus:** categories, modifiers, allergens and dietary tags, availability by time and venue, out-of-stock toggles.",
          "**Ordering modes:** table service, QR ordering, counter pickup, scheduled pickup and delivery.",
          "**Pickup:** realistic ready times based on kitchen load, and status notifications.",
          "**Delivery:** in-house drivers, delivery platforms or courier integrations, with zones and fees shown upfront.",
          "**Accounts:** optional guest checkout, saved favourites and reorder for repeat customers.",
          "**Accessibility:** readable menus, large targets and screen reader support; see [[/blogs/accessibility-testing-australia|accessibility testing]].",
        ],
      },
      {
        heading: "Payments and pricing in Australia",
        body: [
          "**Card surcharges.** From 1 October 2026, surcharges on eftpos, Mastercard and Visa debit, prepaid and credit cards were removed under the Reserve Bank's decision; the RBA reports that American Express and UnionPay also removed surcharging from 1 October 2026, and PayPal from 5 October 2026, by their own decision rather than RBA regulation; buy now pay later and other methods remain under review ([[https://www.rba.gov.au/payments-and-infrastructure/review-of-retail-payments-regulation/2026-03/conclusions-paper/faqs/|RBA FAQs]]; [[https://www.rba.gov.au/payments-and-infrastructure/review-of-retail-payments-regulation/2026-03/conclusions-paper/executive-summary.html|RBA]]). Update POS and app settings.",
          "**Day surcharges.** Restaurants and cafes that apply a surcharge on Sundays or public holidays can show a statement of the surcharge on the menu, at least as prominently as the most prominent price, instead of a separate surcharge-inclusive price for every item ([[https://www.accc.gov.au/media-release/misleading-menus-invite-infringement-notices|ACCC]]). Apps should show the surcharge clearly before payment and apply it on the right days, including state-specific public holidays.",
          "**Tips and splits:** optional tipping, bill splitting and pre-authorisation for tabs, handled by your payment provider. See [[/blogs/payment-gateway-integration-australia|payment gateway integration]].",
        ],
      },
      {
        heading: "Kitchen workflows",
        body: [
          "Ordering apps succeed or fail in the kitchen. Route items to the right stations, pace orders to kitchen capacity, show modifiers and allergens clearly on kitchen displays, and let staff pause online ordering or mark items unavailable instantly. Test peak-time scenarios before launch: a burst of app orders on a Friday night should not overwhelm the line.",
        ],
      },
      {
        heading: "Venue operations and accommodation",
        body: [
          "Beyond ordering, groups often need cross-venue reporting (sales, labour, waste), stock and supplier ordering, rostering integration and compliance checklists. Accommodation providers rely on a property management system, channel manager and booking engine; custom work usually focuses on guest apps, upselling and integration. Tourism operators can list on the Australian Tourism Data Warehouse, whose content is used by state tourism websites and distributors; see [[/blogs/booking-system-development-australia|booking systems]].",
        ],
      },
      {
        heading: "Guest data, marketing and privacy",
        body: [
          "If your business is covered by the Privacy Act, collect only what ordering and bookings need, explain marketing uses, and protect guest data. Marketing messages need consent and an unsubscribe option under the Spam Act; order status messages are factual and treated differently. If ordering pages use advertising pixels, follow the OAIC's guidance on tracking pixels ([[https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/tracking-pixels-and-privacy-obligations|OAIC]]).",
        ],
      },
      {
        heading: "Integrations and reporting",
        body: [
          "Decide the source of truth for menus, prices and stock (usually the POS), then integrate ordering, delivery platforms, loyalty, accounting (Xero or MYOB) and rostering. Reconcile payments and payouts daily. Build reporting across venues on agreed definitions; see [[/blogs/business-intelligence-dashboards-australia|business intelligence dashboards]] and [[/blogs/retail-ecommerce-integration|retail system integration]].",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Building an app before proving demand for direct repeat ordering.",
          "Menus maintained separately in the POS, website and app.",
          "Card surcharges still configured after 1 October 2026.",
          "Public holiday surcharges not shown clearly, or applied on the wrong days.",
          "Ordering that ignores kitchen capacity.",
          "Collecting guest data for marketing without consent.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "[[https://www.rba.gov.au/payments-and-infrastructure/review-of-retail-payments-regulation/2026-03/conclusions-paper/executive-summary.html|RBA, surcharging conclusions]]; [[https://www.accc.gov.au/media-release/misleading-menus-invite-infringement-notices|ACCC, misleading menus]]; [[https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/tracking-pixels-and-privacy-obligations|OAIC, tracking pixels]]; [[https://data.gov.au/data/dataset/927d00f3-e64c-4331-9bae-52b4f64d2fcb|data.gov.au, ATDW API]].",
          "Restaurant surcharge rules were confirmed via search summaries of ACCC material, including the 2013 change to single-price rules for restaurant surcharges; check current ACCC guidance. Tables and checklists are ours. Nothing here is legal advice or ZSpace client data.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Hospitality software works when the core systems are reliable and everything else is built around the kitchen and the guest. Use established POS and ordering platforms where they fit, build direct ordering and loyalty when repeat guests justify it, and keep pricing, surcharges and guest data handling right for Australian rules.",
        ],
        cta: {
          title: "Planning ordering or venue software?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/mobile-app-development|ordering and loyalty apps]], [[/services/website-development|venue integrations]] and [[/services/ui-ux-design|guest experience design]]. If it would help to decide what to build, we are happy to talk it through.",
        },
      },
    ],
  },
];
