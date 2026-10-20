import type { BlogPost } from "./blog-data";

/**
 * Australian platforms pair: marketplace development and subscription
 * ecommerce. Both clusters already have deep generic coverage
 * (marketplace-website-development plus 13 marketplace pages;
 * subscription-ecommerce-website plus 13 subscription pages), so these are
 * Australian decision pages that link into that depth rather than repeat it.
 * Australian decisions covered: the sharing economy reporting regime for
 * electronic distribution platform operators (and its exclusion for supplies
 * that only transfer title to goods), GST and electronic distribution
 * platforms, Australian Consumer Law and fake reviews, the Scams Prevention
 * Framework (designated sectors; obligations still commencing), the Unfair
 * Trading Practices regime commencing 1 July 2027 (drip pricing and
 * subscription rules), the RBA surcharging change from 1 October 2026, PayTo
 * versus BECS direct debit, and the Spam Act.
 * Sources checked 2026-10-09 (ATO, ACCC and some law-firm pages via search
 * summaries where fetches were blocked): ATO SERR and GST for non-resident
 * businesses; Australia Post eCommerce Report 2026; ACCC online reviews;
 * Treasury and legislation.gov.au (Scams Prevention Framework Act 2025);
 * Allens and HWL Ebsworth on the unfair trading practices regime; RBA
 * surcharging conclusions; NPP Australia (PayTo); ACMA spam guidance; Stripe
 * global availability. No figure here is ZSpace client data.
 */
export const auPlatformPosts: BlogPost[] = [
  {
    slug: "marketplace-development-australia",
    title: "Marketplace App Development in Australia: How to Build a Platform for Buyers and Sellers",
    seoTitle: "Marketplace App Development in Australia: A Guide",
    excerpt:
      "Building a marketplace in Australia: models, seller onboarding, listings, payments and payouts, reviews, disputes, ATO platform reporting and MVP scope.",
    category: "Shopify & Ecommerce",
    banner: "marketplacearch",
    sceneKind: "orders",
    bannerAlt: "A two-sided marketplace connecting buyers and sellers through listings, search, payments with commission and payouts, reviews and dispute handling",
    date: "2026-10-09",
    readingTime: "10 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development", "shopify-development"],
    relatedIndustrySlugs: ["startups", "ecommerce", "travel-hospitality", "real-estate", "creator-economy"],
    relatedSlugs: ["marketplace-website-development", "marketplace-payment-architecture", "marketplace-trust-and-safety"],
    faqs: [
      {
        q: "How do you build a marketplace app in Australia?",
        a: "Start by choosing the business model and the narrowest market where you can attract both sides, then design seller onboarding, listings, search, payments with commission and payouts, reviews and dispute handling. Check Australian obligations early, including ATO platform reporting, GST and consumer law. Launch a focused MVP, often with manual operations behind the scenes, and automate once transactions prove the model.",
      },
      {
        q: "Do Australian marketplaces have to report seller income to the ATO?",
        a: "Many do. Under the sharing economy reporting regime, operators of electronic distribution platforms report certain transactions made through the platform to the ATO. Ride-sourcing and short-term accommodation were included first, and most other reportable transactions from 1 July 2024. Supplies that only transfer ownership of goods or real property, and financial supplies, are excluded. Check the ATO's current guidance and get tax advice for your model.",
      },
      {
        q: "Is the marketplace or the seller responsible for GST?",
        a: "Usually the seller, but not always. Australian GST law has specific rules for electronic distribution platforms, under which the platform operator can be treated as the supplier for some sales, such as certain imported services, digital products and low value imported goods sold to consumers. The answer depends on your model, sellers and customers, so get advice from a registered tax agent before launch.",
      },
      {
        q: "How do marketplace payments and commissions work?",
        a: "Typically, the buyer pays the platform through a payment provider with a marketplace product, the platform's commission is deducted, and the balance is paid out to the seller after delivery or a holding period. Sellers are verified by the provider. Using an established provider avoids holding customer funds yourself, which can raise financial services and anti-money-laundering questions that need specialist advice.",
      },
      {
        q: "Who is responsible under consumer law, the marketplace or the seller?",
        a: "Sellers in trade generally owe consumer guarantees to buyers under the Australian Consumer Law, but the platform also has obligations, for example not to mislead consumers about who they are buying from, prices, reviews or their rights. Make each seller's identity, terms and returns clear, handle complaints fairly and get legal advice on your terms of service and the platform's role.",
      },
      {
        q: "How should a marketplace handle fake reviews?",
        a: "Only let verified buyers review a transaction, disclose any incentives, never suppress or edit negative reviews selectively, and detect and remove fake reviews. The ACCC has said that businesses can mislead consumers through how they manage online reviews, and false or misleading testimonials are prohibited under the Australian Consumer Law. Write and publish a clear review moderation policy.",
      },
      {
        q: "Does the Scams Prevention Framework apply to marketplaces?",
        a: "It applies only to sectors and businesses designated under the Scams Prevention Framework Act 2025. The first designations, made in 2026, cover banks, telecommunications providers and specified digital platform services, with most obligations commencing later. Whether a particular marketplace is covered depends on the designation, so check current Treasury and ACCC guidance. Strong seller verification and scam reporting are good practice regardless.",
      },
    ],
    content: [
      {
        heading: "How do you build a marketplace for the Australian market?",
        body: [
          "**Pick a narrow market where you can attract both buyers and sellers, then build the minimum needed for them to transact safely: seller onboarding, listings and search, payments with commission and payouts, reviews and dispute handling.** In Australia, check ATO platform reporting, GST rules for electronic distribution platforms and consumer law obligations before launch, because they shape the data you collect and the terms you write.",
          "This guide is for founders and established businesses planning a two-sided platform, whether for products, services, rentals or bookings. It covers business models, onboarding, listings and search, payments, disputes and trust, reviews, admin tools, Australian obligations, MVP scope and scaling. Our generic guide to [[/blogs/marketplace-website-development|marketplace development]] and the linked guides go deeper on each component.",
          "Marketplace payments, consumer law and tax treatment can require specialist advice. Nothing here is legal, tax or financial advice.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Choose the model and the narrowest viable niche before choosing technology.",
          "Solve the chicken-and-egg problem with supply first, often manually.",
          "Use an established payment provider's marketplace product for split payments and seller payouts.",
          "Check whether you must report seller transactions to the ATO under the sharing economy reporting regime.",
          "Get tax advice on GST: platforms can be treated as the supplier in some cases.",
          "Design reviews and disputes to comply with consumer law, and publish your moderation policy.",
          "Launch with a focused MVP and manual operations; automate what volume proves necessary.",
        ],
      },
      {
        heading: "Australian context: where marketplaces already sit",
        body: [
          "Australian shoppers already use marketplaces heavily. The Australia Post eCommerce Report 2026 found that online marketplaces were the largest category of online spend in 2025 at $18.9 billion, that pure marketplaces such as Amazon and Temu accounted for 23% of total online spending, and that 69% of shoppers used marketplace apps. Competing with general marketplaces is hard; most new marketplaces succeed by serving a niche those platforms serve poorly, such as specialist trades, local services, rentals or B2B supply.",
        ],
      },
      {
        heading: "Choose the marketplace model",
        body: [],
        table: {
          headers: ["Model", "Examples of what is exchanged", "Key design issues"],
          rows: [
            ["**Product marketplace**", "New or second-hand goods from many sellers", "Catalogue quality, shipping by seller, returns, split orders"],
            ["**Services marketplace**", "Trades, freelancers, tutors, cleaners", "Quoting, scheduling, quality assurance, licensing checks"],
            ["**Rental and booking**", "Equipment, venues, accommodation", "Availability, deposits, damage and cancellation policies"],
            ["**B2B marketplace**", "Wholesale supply, surplus stock", "Account pricing, invoicing, credit terms"],
            ["**Managed marketplace**", "Curated providers with platform quality control", "Higher operational cost; higher trust"],
          ],
        },
        callout: {
          type: "tip",
          text: "Our recommendation: define the single transaction your marketplace exists to make easier, and the reason both sides would do it through you rather than directly. If you cannot answer the second part, disintermediation will be your biggest problem.",
        },
      },
      {
        heading: "Seller onboarding and verification",
        body: [
          "Supply quality decides buyer trust. Onboarding should be fast for good sellers and hard for bad ones.",
        ],
        checklist: [
          "Collect identity and business details, including the ABN for business sellers, and validate them.",
          "Use your payment provider's verification for payouts.",
          "Check licences or qualifications where your category requires them, such as some trades.",
          "Collect the data you may need for ATO reporting from the start.",
          "Agree seller terms: fees, service levels, returns, prohibited items and conduct.",
          "Help sellers create their first good listing; it predicts whether they stay.",
        ],
      },
      {
        heading: "Listings, search and filtering",
        body: [
          "Listings need structured attributes, not just free text, so buyers can filter and compare. Define attributes per category, require good photos and clear pricing (including GST where relevant), and moderate new listings until a seller has a track record. Search should rank by relevance and quality signals, not only by recency or fees paid, and buyers should be able to filter by location, availability and price. See [[/blogs/marketplace-search-and-filters|marketplace search]] and [[/blogs/marketplace-product-catalog-management|multi-seller catalogue management]].",
        ],
      },
      {
        heading: "Payments, commission and payouts",
        body: [
          "Most marketplaces should not build payment handling themselves. Use a payment provider's marketplace or platform product, which handles seller verification, split payments, commission and payouts; Stripe, for example, lists Australia among its supported countries. Holding or moving customer funds yourself can raise financial services licensing and anti-money-laundering questions, so get specialist advice before designing anything unusual.",
          "Design the money flow end to end: when the buyer is charged, when funds are released to sellers, how refunds and partial refunds work, and how commission appears on invoices. Card surcharges on eftpos, Visa and Mastercard were removed from 1 October 2026 under the RBA's decision, so build payment costs into your fees. Our guides to [[/blogs/marketplace-payment-architecture|marketplace payments]] and [[/blogs/marketplace-commission-system|commission models]] cover the architecture.",
        ],
        code: {
          label: "Typical marketplace money flow",
          text: `Buyer pays -> payment provider (platform account)
            -> hold until delivery or service done
            -> commission to platform
            -> payout to verified seller
Refund     -> reverse payout or recover from seller
Dispute    -> hold funds; evidence from both sides`,
        },
      },
      {
        heading: "Australian obligations to check before launch",
        body: [
          "**ATO platform reporting.** Under the sharing economy reporting regime, operators of electronic distribution platforms report certain transactions made through their platforms to the ATO. Taxi travel and short-term accommodation were reportable first; most other reportable transactions, such as asset hire, food delivery and services, followed from 1 July 2024. Supplies that only transfer title to goods or real property, and financial supplies, are excluded. A services or rental marketplace is therefore more likely to report than a pure goods marketplace. Build the data capture in from the start.",
          "**GST.** Australian GST law has rules under which an electronic distribution platform operator can be treated as the supplier, for example for certain imported services and digital products sold to Australian consumers. Whether that applies depends on your model and sellers. Get advice from a registered tax agent.",
          "**Consumer law.** Sellers in trade owe consumer guarantees, and the platform must not mislead consumers about who they are buying from, prices, reviews or their rights. Since 9 November 2023, unfair terms in standard form contracts with consumers and small businesses can attract penalties, which matters for both buyer and seller terms. From 1 July 2027, the unfair trading practices regime adds drip pricing and subscription rules; see [[/blogs/subscription-ecommerce-australia|subscription ecommerce in Australia]].",
          "**Scams.** The Scams Prevention Framework Act 2025 applies to designated sectors. The first designations in 2026 cover banks, telecommunications providers and specified digital platform services, with most obligations still to commence. Check whether your platform falls within a designation. Either way, seller verification, scam reporting and warnings about off-platform payments are good practice.",
          "**Privacy.** If you are covered by the Privacy Act, you hold personal information for both sides of the market. Collect only what you need, secure it and plan for data breaches. See [[/blogs/secure-web-application-development-australia|building a secure customer-facing web application]].",
        ],
      },
      {
        heading: "Trust: reviews, disputes and moderation",
        body: [
          "**Reviews.** Only verified buyers should review a transaction. The ACCC's guidance says businesses should be transparent about commercial relationships, should not post or publish misleading reviews, and that omitting or editing negative reviews can be as misleading as fake ones. Publish your review policy and apply it consistently. See [[/blogs/ecommerce-product-reviews-ux|review design]].",
          "**Disputes.** Define what buyers and sellers can raise, the evidence you need, timeframes, and how decisions affect payouts. Keep communication on the platform so evidence exists, and escalate to a person for anything ambiguous.",
          "**Moderation.** Screen listings and messages for prohibited items, scams and off-platform payment requests. Combine automated checks with human review, and track repeat offenders. Our [[/blogs/marketplace-trust-and-safety|trust and safety guide]] covers controls in depth.",
        ],
      },
      {
        heading: "Admin tools the operator needs",
        body: [],
        checklist: [
          "Seller management: applications, verification status, suspensions and notes.",
          "Listing moderation queues with reasons and audit trails.",
          "Order and booking oversight across sellers. See [[/blogs/marketplace-order-management|marketplace order management]].",
          "Payment, refund and payout views reconciled with the provider.",
          "Dispute case management.",
          "Reporting on liquidity: listings, searches, conversion, repeat buyers and seller retention.",
          "Data exports for ATO reporting where it applies.",
        ],
      },
      {
        heading: "MVP scope",
        body: [
          "The fastest way to fail is to build a full platform before proving that both sides will transact. Many successful marketplaces launched with manual matching, concierge onboarding and spreadsheets behind a simple front end.",
        ],
        table: {
          headers: ["Release", "Scope"],
          rows: [
            ["**MVP**", "Narrow category and region, seller sign-up with manual approval, structured listings, search with key filters, checkout through a marketplace payment product, basic reviews, admin moderation, manual dispute handling"],
            ["**Next**", "Seller dashboard, messaging, automated payouts by rule, better ranking, notifications, ATO reporting exports where applicable"],
            ["**Later**", "Mobile apps, advanced fraud and scam controls, seller tools such as promotions, expansion to new categories and regions"],
          ],
        },
        callout: {
          type: "note",
          text: "Measure liquidity, not just sign-ups: the share of listings that sell or get booked, and the share of searches that lead to a transaction. Our guide to [[/blogs/mvp-development-australia|MVP development for Australian startups]] covers setting evidence thresholds before scaling.",
        },
      },
      {
        heading: "Scaling the platform",
        body: [
          "As volume grows, the hard problems shift from features to operations: search relevance, payout reconciliation, fraud, support volume and seller quality. Architecture decisions that matter early are a clean data model for sellers, listings and transactions, an event log of state changes, idempotent payment webhooks and background jobs for notifications and payouts. See [[/blogs/ecommerce-marketplace-scalability|marketplace scalability]].",
        ],
      },
      {
        heading: "Hypothetical example: a regional equipment hire marketplace",
        body: [
          "**This example is hypothetical.** A founder in regional New South Wales wants a marketplace where farmers and contractors hire out machinery to each other. It is a rental marketplace, so the founder takes tax advice early on whether the platform's transactions are reportable under the sharing economy reporting regime, and builds seller ABN capture and transaction exports into the MVP.",
          "Payments use a marketplace payment product with deposits held until the hire ends. Damage disputes follow a published process with photo evidence at pick-up and return. Reviews are limited to completed hires. The MVP covers one region and three equipment categories, with the founder matching early requests by phone to build liquidity before automating.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Launching nationally across every category with too little supply anywhere.",
          "Building custom payment handling instead of using a marketplace payment product.",
          "Discovering ATO reporting or GST obligations after launch.",
          "Letting buyers and sellers move off-platform without addressing why.",
          "Treating reviews as marketing rather than a regulated trust signal.",
          "Over-engineering for scale before liquidity is proven.",
        ],
      },
      {
        heading: "Related guides",
        body: [
          "For deeper dives, see [[/blogs/multi-vendor-ecommerce-marketplace|multi-vendor ecommerce]], [[/blogs/ecommerce-marketplace-seller-onboarding|seller onboarding]], [[/blogs/marketplace-seller-dashboard|seller dashboards]] and [[/blogs/ecommerce-marketplace-vs-online-store|marketplace vs online store]]. If you are budgeting a marketplace app, [[/blogs/mobile-app-development-cost-australia|mobile app development cost in Australia]] covers the cost model.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**Tax:** ATO, sharing economy reporting regime; ATO, how Australian GST works for non-resident businesses.",
          "**Consumer law and scams:** ACCC, online product and service reviews; Scams Prevention Framework Act 2025.",
          "**Market and payments:** Australia Post eCommerce Report 2026; Stripe global availability; RBA, surcharging conclusions.",
          "ATO and ACCC points, and the Scams Prevention Framework designation status, are summarised from official guidance; check the current position. The models, release plan and example are ours. Nothing here is legal, tax or financial advice or ZSpace client data.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Building a marketplace in Australia is mostly about liquidity and trust: a niche where both sides gain from transacting through you, safe payments, honest reviews and fair disputes. Check ATO platform reporting, GST and consumer law before you write your terms, use an established payment provider, and launch narrow. Technology scales well; empty marketplaces do not.",
        ],
        cta: {
          title: "Planning a marketplace?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|marketplace platforms]], [[/services/mobile-app-development|marketplace apps]] and [[/services/ui-ux-design|two-sided UX]]. If it would help to pressure-test your MVP scope, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "subscription-ecommerce-australia",
    title: "Subscription Ecommerce in Australia: How to Build a Recurring-Revenue Online Store",
    seoTitle: "Subscription Ecommerce in Australia: Build and Comply",
    excerpt:
      "Building a subscription store in Australia: models, recurring billing, failed payments, PayTo vs cards, online cancellation, 2027 law changes and platforms.",
    category: "Shopify & Ecommerce",
    banner: "subscriptionlifecycle",
    sceneKind: "checkout",
    bannerAlt: "A subscription lifecycle from sign-up and first order through recurring billing, failed payment recovery, plan changes, pauses and an easy online cancellation",
    date: "2026-10-09",
    updated: "2026-10-10",
    readingTime: "9 min read",
    relatedServiceSlugs: ["shopify-development", "website-development", "cro-audit"],
    relatedIndustrySlugs: ["d2c-consumer", "food-beverage", "beauty-personal-care", "sports-fitness", "ecommerce"],
    relatedSlugs: ["subscription-ecommerce-website", "subscription-billing-architecture", "subscription-ecommerce-cancellation-flow"],
    faqs: [
      {
        q: "How do I start a subscription ecommerce business in Australia?",
        a: "Confirm customers want your product on a recurring basis, choose a model such as replenishment, curated boxes or access, and design an offer with clear pricing, delivery frequency and cancellation terms. Then choose a platform and subscription app or billing system, set up payments and failed payment handling, integrate fulfilment, and write customer communications. Check Australian consumer law obligations, including the rules commencing in 2027.",
      },
      {
        q: "What are the new subscription rules in Australia?",
        a: "The unfair trading practices reforms passed in 2026 include specific subscription rules and a drip pricing provision, and are reported to commence on 1 July 2027. Law firm summaries say they require, among other things, that a subscription signed up to online can be cancelled online, in a way that is easy to find and straightforward. Check the legislation and ACCC guidance and get legal advice on your flows.",
      },
      {
        q: "Can we make customers call to cancel a subscription?",
        a: "It is risky now and will be harder to justify once the 2027 rules commence, which reportedly require online cancellation for online sign-ups. Making cancellation difficult can already raise issues under existing consumer law if it misleads customers or is unconscionable. Offer a clear online cancellation path, and if you present retention offers, make them easy to decline.",
      },
      {
        q: "Can we add a card surcharge to subscription payments?",
        a: "Not for eftpos, Mastercard or Visa cards. Under the Reserve Bank's March 2026 decision, surcharges on those networks' debit, prepaid and credit cards were removed from 1 October 2026. American Express and UnionPay also removed surcharging from 1 October 2026, and PayPal from 5 October 2026, by their own decision rather than RBA regulation; buy now pay later and other methods remain under review. Build card costs into your prices and check current RBA guidance.",
      },
      {
        q: "Should subscriptions use cards, direct debit or PayTo?",
        a: "Cards are the most common for ecommerce subscriptions and are well supported by subscription apps. BECS direct debit can suit higher-value or B2B subscriptions. PayTo, built on the New Payments Platform, lets customers authorise recurring payments in their banking app and pause or cancel the agreement there. Support depends on your payment provider, so check availability and fees before choosing.",
      },
      {
        q: "How do we reduce failed subscription payments?",
        a: "Use card updater services where your provider offers them, retry failed payments on a sensible schedule, notify customers clearly with a secure link to update details, pause rather than cancel after repeated failures, and send reminders before expiring cards fail. Track involuntary churn separately from voluntary cancellations, because the fixes are different.",
      },
      {
        q: "Do renewal reminders need consent under the Spam Act?",
        a: "Purely factual messages about an existing subscription, such as an upcoming renewal, a payment failure or a shipping update, are treated differently from marketing and do not need the same consent and unsubscribe facility, though they must identify the sender. If a message also promotes other products, it is likely a commercial message and the full rules apply. Keep account messages factual.",
      },
    ],
    content: [
      {
        heading: "How do you build a subscription store for Australian customers?",
        body: [
          "**Build a subscription store around a product people genuinely reorder, a plan they understand, billing that recovers from failures, a customer portal where they can skip, pause, change and cancel online, and fulfilment that runs on schedule.** In Australia, design now for the unfair trading practices rules reported to commence on 1 July 2027, which include online cancellation for online sign-ups, and for the removal of card surcharges from 1 October 2026.",
          "This guide is an Australian decision page for brands and retailers adding subscriptions. It covers models, recurring billing and payment methods, failed payments, customer accounts and plan management, cancellation and retention, fulfilment, communications, data security and platform choice. Our [[/blogs/subscription-ecommerce-website|subscription ecommerce development guide]] and the linked guides cover the generic depth.",
          "We do not promise revenue or retention outcomes, and nothing here is legal advice. Consumer law in this area is changing; check current ACCC guidance.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Validate recurring demand before building: subscriptions amplify both good and bad products.",
          "Make price, frequency, delivery costs and commitment clear before checkout.",
          "Offer online cancellation that is easy to find. Rules reported to commence on 1 July 2027 will require it for online sign-ups.",
          "Remove card surcharges on eftpos, Visa and Mastercard (removed from 1 October 2026).",
          "Treat failed payments as a product feature: retries, updates, pauses and clear messages.",
          "Consider PayTo or direct debit where they suit your customers and provider.",
          "Keep account messages factual; marketing needs consent under the Spam Act.",
        ],
      },
      {
        heading: "Choose the subscription model",
        body: [],
        table: {
          headers: ["Model", "How it works", "Fits", "Watch for"],
          rows: [
            ["**Replenishment**", "Regular delivery of the same consumable", "Coffee, pet food, skincare, supplements", "Customers stockpiling; frequency mismatch"],
            ["**Curated box**", "A selection that changes each cycle", "Gifts, snacks, hobbies", "Curation cost; churn after novelty"],
            ["**Access or membership**", "Paid membership for benefits, pricing or content", "Retailers with frequent buyers", "Delivering enough value each period"],
            ["**Subscribe and save**", "Optional subscription on standard products", "Existing stores adding recurring orders", "Discount eroding margin"],
          ],
        },
      },
      {
        heading: "Design an offer customers understand",
        body: [
          "Show the per-delivery price, frequency, any delivery charges, the total per period, the minimum commitment if any, and how to skip, pause and cancel, before checkout. Avoid surprise charges added late in checkout: Australia's drip pricing provision, part of the unfair trading practices reforms, will set specific rules on how transaction-based charges are displayed when it commences.",
          "If you offer a free trial or an introductory price, say clearly when it ends, what the customer will be charged and when, and remind them before the first full charge. See [[/blogs/subscription-ecommerce-pricing|subscription pricing]] and [[/blogs/subscription-product-page-design|subscription product page design]].",
        ],
      },
      {
        heading: "Australian rules to design for",
        body: [
          "**Unfair trading practices reforms.** Law firm summaries report that the Competition and Consumer Amendment (Unfair Trading Practices) legislation passed both Houses in July 2026 and commences on 1 July 2027. It includes a general prohibition on unfair trading practices, subscription-specific rules and a drip pricing provision. Among the subscription rules, a subscription signed up to online must be able to be cancelled online, in a way that is easy to find and straightforward. Build that now; it is good practice regardless.",
          "**Existing consumer law.** Consumer guarantees apply to goods sold by subscription, and unfair terms in standard form consumer contracts can attract penalties since 9 November 2023. Automatic renewals, lock-in periods and cancellation fees deserve legal review.",
          "**Surcharging.** The Reserve Bank's decision removed surcharges on eftpos, Mastercard and Visa debit, prepaid and credit cards from 1 October 2026.",
          "**Spam Act.** Factual account messages, such as renewal notices and payment failures, are treated differently from marketing, but must identify the sender; promotional content changes that.",
        ],
        callout: {
          type: "note",
          text: "These rules are summarised from law firm commentary and official sources as at October 2026. The ACCC is expected to publish guidance before commencement. Have a lawyer review your sign-up, renewal and cancellation flows.",
        },
      },
      {
        heading: "Recurring billing and payment methods",
        body: [
          "Most ecommerce subscriptions charge a stored card through a subscription app or billing system that schedules orders and payments. Australia also has bank-based options.",
        ],
        table: {
          headers: ["Method", "Strengths", "Considerations"],
          rows: [
            ["**Cards and wallets**", "Familiar; widely supported by subscription apps", "Expiry and declines; no surcharge on eftpos, Visa or Mastercard"],
            ["**BECS direct debit**", "Bank account billing; suits higher-value or B2B plans", "Slower failure notification; mandate management"],
            ["**PayTo**", "Customer authorises an agreement in their banking app and can pause or cancel it there; real-time payments on the NPP", "Provider support and customer familiarity vary"],
          ],
        },
      },
      {
        heading: "Failed payments and involuntary churn",
        body: [
          "Failed payments end many subscriptions that customers wanted to keep. Design recovery as carefully as checkout.",
        ],
        checklist: [
          "Use card updater services if your payment provider supports them.",
          "Retry on a schedule that suits your billing cycle, not immediately and repeatedly.",
          "Notify the customer with a secure link to update payment details; never ask for card details by email.",
          "Remind customers before a card expires.",
          "Pause the subscription after repeated failures rather than cancelling silently.",
          "Track involuntary churn separately from voluntary cancellations.",
        ],
        callout: {
          type: "tip",
          text: "Our recommendation: write every failed-payment message in plain language with one action. Customers who cannot see what went wrong and what to do will often let the subscription lapse.",
        },
      },
      {
        heading: "Customer accounts and plan management",
        body: [
          "A self-service portal reduces support load and builds trust. Let customers change frequency, quantity and products, skip or delay a delivery, update address and payment, pause, and cancel online. Show the next order date and amount clearly. See [[/blogs/subscription-management-portal|subscription management]] and [[/blogs/ecommerce-subscription-ux|subscription UX]].",
        ],
      },
      {
        heading: "Cancellation and fair retention",
        body: [
          "Retention should come from value and flexibility, not friction. A good cancellation flow is easy to find, asks a short optional reason, may offer a relevant alternative such as skipping or pausing, and confirms cancellation clearly, with an email record. Offers must be easy to decline.",
          "Track voluntary churn by reason and cohort, and fix the causes: product fit, frequency, price or delivery. See [[/blogs/subscription-ecommerce-cancellation-flow|cancellation flow design]] and [[/blogs/subscription-ecommerce-retention|reducing subscription churn]].",
        ],
      },
      {
        heading: "Inventory, fulfilment and delivery",
        body: [
          "Subscriptions make demand more predictable, but only if you use the data. Forecast inventory from upcoming orders, batch fulfilment where it helps, and handle substitutions with customer consent. Delivery matters to Australian shoppers: the Australia Post eCommerce Report 2026 found 73% say a good delivery experience makes them more likely to shop online. Give regional customers realistic delivery windows and send tracking with every shipment.",
        ],
      },
      {
        heading: "Customer communications",
        body: [],
        checklist: [
          "Sign-up confirmation with plan details, next charge date and how to cancel.",
          "Reminder before the first full charge after a trial or introductory price.",
          "Upcoming order notices, with links to skip or change.",
          "Shipping and delivery updates.",
          "Payment failure and card expiry notices.",
          "Cancellation confirmation, with what happens to any pending order.",
          "Marketing only to customers who have consented, sent separately from account messages.",
        ],
      },
      {
        heading: "Security and customer data",
        body: [
          "Use your payment provider's hosted fields or checkout so card data never touches your servers, which keeps your PCI DSS scope small. Protect customer accounts with secure sign-in and safe account recovery, because subscription accounts hold addresses and payment methods. If you are covered by the Privacy Act, collect only what you need and plan for data breaches. See [[/blogs/ecommerce-payment-security|ecommerce payment security]].",
        ],
      },
      {
        heading: "Platform selection",
        body: [],
        table: {
          headers: ["Option", "Fits when", "Watch for"],
          rows: [
            ["**Shopify with a subscription app**", "Physical products, standard plans, fast launch", "App fees; app's portal and cancellation flow quality; checkout limits"],
            ["**Other ecommerce platform with subscription extension**", "Existing store on that platform", "Extension maturity and payment method support"],
            ["**Dedicated subscription billing platform plus store**", "Complex plans, B2B, usage or mixed billing", "Integration effort"],
            ["**Custom subscription engine**", "Unusual models or deep integration needs", "You own billing logic, retries and compliance changes"],
          ],
        },
      },
      {
        heading: "Hypothetical example: a coffee roaster",
        body: [
          "**This example is hypothetical.** A Melbourne coffee roaster sells beans online and wants subscriptions. Customer interviews show regular buyers want flexibility more than discounts. The roaster launches on its existing Shopify store with a subscription app, offering two-weekly, three-weekly and monthly deliveries, with the total per delivery including delivery cost shown on the product page.",
          "The portal lets customers skip, change grind or frequency, pause and cancel online in two steps. Payment failures trigger a retry schedule and a plain-language email with a secure update link, and subscriptions pause rather than cancel after repeated failures. Card surcharges are removed and costs built into prices. The team tracks voluntary and involuntary churn separately each month.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Launching subscriptions for a product customers do not reorder.",
          "Hiding delivery costs or the total per period until late in checkout.",
          "Making cancellation hard to find or phone-only.",
          "Mixing promotions into account messages without consent.",
          "Ignoring failed payments until churn reports reveal them.",
          "Discounts so deep that subscribers are unprofitable.",
        ],
      },
      {
        heading: "Related guides",
        body: [
          "For Shopify specifics, see [[/blogs/shopify-subscription-store|Shopify subscription stores]] and [[/blogs/shopify-development-australia|Shopify development in Australia]]. For billing internals, see [[/blogs/subscription-billing-architecture|subscription billing architecture]]; for checkout, [[/blogs/ecommerce-subscription-checkout|subscription checkout]]; and for conversion, [[/blogs/ecommerce-conversion-optimization-australia|ecommerce conversion optimisation in Australia]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**Consumer law:** Allens, Australia's new unfair trading practices regime; HWL Ebsworth, Parliament passes unfair trading practices reforms; ACCC, contracts.",
          "**Payments:** RBA, surcharging conclusions; NPP Australia, PayTo.",
          "**Messages and delivery:** ACMA, avoid sending spam; Australia Post eCommerce Report 2026.",
          "Legislative status is taken from law firm summaries and should be checked against the Federal Register of Legislation and ACCC guidance. The models, tables and example are ours. Nothing here is legal advice or ZSpace client data.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Subscription ecommerce in Australia works when customers get a product they want on a schedule they control, with clear pricing and an easy way out. Build billing that recovers from failures, a portal that handles changes and online cancellation, fulfilment that uses subscription data, and communications that stay factual. Design for the 2027 consumer law changes now, and retention will come from value rather than friction.",
        ],
        cta: {
          title: "Adding subscriptions to your store?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/shopify-development|Shopify subscription stores]], [[/services/website-development|custom subscription systems]] and [[/services/cro-audit|subscription conversion audits]]. If it would help to review your offer and flows, we are happy to talk it through.",
        },
      },
    ],
  },
];
