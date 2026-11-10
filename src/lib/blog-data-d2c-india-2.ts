import type { BlogPost } from "./blog-data";

/**
 * D2C and ecommerce cluster, second set, batch 1 (topics 261–265,
 * 2026-11-10). Audit and research records: seo-audit/d2c-ecommerce-batch-261-280/.
 * This file holds the two CREATE topics: WhatsApp commerce for D2C brands
 * (261, which absorbs 263, click-to-WhatsApp journeys) and WhatsApp Shopify
 * integration (262). Topics 264 and 265 are in-place updates of
 * conversational-ecommerce (blog-data-commerce-59.ts) and
 * ecommerce-customer-account-ux (blog-data-commerce-40.ts).
 *
 * No external links in article bodies (owner rule from earlier batches).
 * No per-message rates are quoted because Meta's rate card varies by
 * recipient country and changes; readers are pointed to Meta's pricing docs
 * by name. No figure here is ZSpace client data; examples are hypothetical.
 *
 * Sources checked 2026-11-10:
 * - Meta for Developers, WhatsApp Business Platform pricing
 *   (developers.facebook.com/docs/whatsapp/pricing): per-message pricing since
 *   1 July 2025; five categories (marketing, utility, authentication, service,
 *   Meta Business Agent from 1 July 2026); 1,000 free service messages per
 *   month; from 1 October 2026 utility messages sent inside an open customer
 *   service window are charged; Click-to-WhatsApp ads open a free entry point
 *   window of up to 7 days (mobile apps only); eligible Indian accounts must
 *   move to INR billing by 31 December 2026. NOTE: Meta's marketing pricing
 *   page still showed the older 72-hour / free-service wording on this date;
 *   the developer docs were treated as authoritative.
 * - WhatsApp Business Messaging Policy (updated 23 September 2026): opt-in,
 *   honouring opt-outs, human escalation path; Commerce Policy applies.
 * - WhatsApp Help Center: Business app supports up to 4 linked devices, more
 *   with multi-agent on Meta Verified plans.
 * - Meta developer docs: multi-product messages up to 30 products; Payments
 *   API (India) with supported gateways including Razorpay and PayU; per-user
 *   marketing message limits are engagement-based (error 131049).
 * - Shopify Help Center, manual payments: no third-party transaction fee on
 *   manual methods such as cash on delivery.
 * - shopify.dev, blocking script tags: script tags removed from the order
 *   status page (26 August 2026); use customer account UI extensions and web
 *   pixels instead.
 * - No native WhatsApp channel in Shopify was found; integrations run through
 *   apps or Business Solution Providers.
 */
export const d2cIndiaPosts2: BlogPost[] = [
  // ------------------------------------------------------- WHATSAPP COMMERCE
  {
    slug: "whatsapp-commerce",
    title: "WhatsApp Commerce for D2C Brands: How to Build a Shopping and Ordering Experience",
    seoTitle: "WhatsApp Commerce for D2C Brands: A Practical Build Guide",
    excerpt:
      "How D2C brands build WhatsApp commerce: Business app vs Platform, click-to-WhatsApp journeys, payments, order updates, opt-in and 2026 pricing.",
    category: "Shopify & Ecommerce",
    banner: "convflow",
    sceneKind: "chat",
    bannerAlt:
      "A WhatsApp commerce journey: a shopper arrives from a click-to-WhatsApp ad, browses a product catalogue in chat, receives a payment link or COD confirmation, and gets order and delivery updates, with a human agent available at each step",
    date: "2026-11-10",
    readingTime: "16 min read",
    relatedServiceSlugs: ["shopify-development", "ai-automation", "website-development"],
    relatedIndustrySlugs: ["d2c-consumer", "ecommerce", "beauty-personal-care", "food-beverage"],
    relatedSlugs: ["whatsapp-shopify-integration", "conversational-ecommerce", "d2c-website-features"],
    faqs: [
      {
        q: "Is the WhatsApp Business app enough for a D2C brand?",
        a: "For a very small brand answering a few dozen chats a day, often yes: it has a catalogue, quick replies, labels and a handful of linked devices. Once you need automated order updates from your store, several agents, integration with your CRM or helpdesk, or campaigns at volume, you need the WhatsApp Business Platform, usually through a provider or app.",
      },
      {
        q: "How much does WhatsApp commerce cost?",
        a: "On the WhatsApp Business Platform, Meta charges per delivered message, with rates by message category and the recipient's country. Since 1 October 2026, utility messages sent inside an open customer service window are charged too, and service replies are free only up to 1,000 a month. Providers and apps add their own fees. Model your monthly volume by message type rather than relying on an old 'conversation' price.",
      },
      {
        q: "Can customers pay inside WhatsApp in India?",
        a: "Yes, for businesses set up with Meta's payments integration for India through a supported gateway, such as Razorpay or PayU. Many brands instead send a secure payment link or a link to a pre-filled checkout, which works with any gateway. Cash on delivery remains common; WhatsApp is often used to confirm COD orders before dispatch.",
      },
      {
        q: "Do I need customer consent to message them on WhatsApp?",
        a: "Yes. WhatsApp's Business Messaging Policy requires opt-in before you message someone, and you must honour opt-out requests. Collect opt-in clearly, for example with a checkbox at checkout or when a customer starts a chat, and keep a record of it.",
      },
      {
        q: "Should WhatsApp replace our website?",
        a: "Rarely. The website remains the best place for browsing a full range, search traffic, detailed product information and a reliable checkout. WhatsApp works best alongside it: answering questions, guiding choices, recovering carts, confirming COD orders and keeping customers informed after purchase.",
      },
    ],
    content: [
      {
        heading: "What WhatsApp commerce actually means for a D2C brand",
        body: [
          "**WhatsApp commerce is selling and serving customers inside WhatsApp: answering product questions, sharing a catalogue, taking orders or sending payment links, confirming cash-on-delivery orders, and sending order, shipping and support messages. For most D2C brands it works best as a channel connected to the online store, not a replacement for it.** The store stays the system of record for products, prices, stock and orders; WhatsApp becomes the place where conversations, confirmations and repeat orders happen.",
          "In India, where many shoppers already message brands before they buy and where COD orders need confirming, WhatsApp is often the most used customer channel a brand has. That makes it worth designing properly: which journeys belong in chat, what is automated, when a person takes over, and how every message connects back to the order. This guide walks through those decisions. The technical integration with Shopify is covered separately in [[/blogs/whatsapp-shopify-integration|how to integrate WhatsApp with Shopify]].",
        ],
      },
      {
        heading: "WhatsApp Business app vs WhatsApp Business Platform",
        body: [
          "The first decision is which product you are building on. They share a name but are different tools, and many disappointing \"WhatsApp integrations\" come from trying to stretch the free app beyond what it is designed for.",
        ],
        table: {
          headers: ["", "WhatsApp Business app", "WhatsApp Business Platform (Cloud API)"],
          rows: [
            ["**Who it suits**", "Very small brands handling chats by hand", "Brands that need automation, integrations or volume"],
            ["**Access**", "A phone app; a few linked devices, more with paid Meta plans", "API access, directly from Meta or through a Business Solution Provider or app"],
            ["**Store integration**", "Manual: share links and catalogue items yourself", "Automated messages from store events such as order placed or shipped"],
            ["**Team inbox**", "Limited multi-agent support", "Any number of agents through a helpdesk or shared inbox tool"],
            ["**Messages outside a customer's chat**", "Broadcast lists to saved contacts", "Pre-approved template messages to opted-in customers"],
            ["**Cost**", "Free app; optional paid Meta plans", "Per-message charges by category and country, plus provider fees"],
          ],
        },
      },
      {
        heading: "The journeys worth building",
        body: [
          "Not every part of shopping belongs in chat. These are the journeys where WhatsApp tends to earn its place for a D2C brand, roughly in the order most brands build them.",
        ],
        checklist: [
          "**Order and shipping updates.** Confirmation, dispatch, out for delivery and delivered, with a link to tracking. This is usually the first integration and the one customers notice most.",
          "**COD confirmation.** A message asking the customer to confirm a cash-on-delivery order before it ships, with a nudge to prepay. Unconfirmed orders can be held, called or cancelled according to your own rules.",
          "**Pre-purchase questions.** Sizing, ingredients, compatibility and delivery questions answered by a person, a bot, or a bot that hands over to a person.",
          "**Guided selling.** A short conversation that recommends a product and sends it from the catalogue, with a link to buy.",
          "**Cart and checkout recovery.** A reminder to shoppers who opted in and left a checkout, linking straight back to it.",
          "**Reorders.** A reorder prompt timed to your product's usage cycle, with a one-tap link to repeat the last order.",
          "**Delivery problems and returns.** Failed delivery attempts, address corrections and return or exchange requests, routed to the right team with the order attached.",
        ],
      },
      {
        heading: "Designing the click-to-WhatsApp journey",
        body: [
          "Click-to-WhatsApp ads on Facebook and Instagram open a chat with your brand instead of a landing page. They suit products that need a conversation before purchase, higher-priced items and audiences more comfortable messaging than filling in forms. The ad is the easy part; what happens after the click decides whether it works.",
          "Plan the first message, a few quick-reply options (\"Help me choose\", \"See bestsellers\", \"Talk to someone\"), the path to a product, and the hand-off to payment. Keep the shopper in one thread: send catalogue items or a multi-product message, then a payment link or a link to a pre-filled checkout, then the order confirmation in the same chat.",
          "When a customer messages you from a click-to-WhatsApp ad on the mobile app, Meta opens a free entry point window of up to seven days, during which messages to that customer are not charged (Meta Business Agent messages excepted). Use it for a proper conversation, not a burst of promotions, and record the ad that started the chat against the eventual order so you can judge the campaign on revenue rather than chats started.",
        ],
        diagram: {
          variant: "convshoppingflow",
          alt: "A click-to-WhatsApp journey: ad, welcome message with quick replies, product recommendation from the catalogue, payment link or COD confirmation, order created in the store, and updates in the same chat",
          caption: "Keep the shopper in one thread from ad click to delivery, and tie the order back to the ad that started it.",
        },
      },
      {
        heading: "Catalogues, carts and payments in chat",
        body: [
          "WhatsApp can show products from a catalogue managed in Meta Commerce Manager, which many brands sync from their store. A multi-product message can show up to 30 items, and a customer can build a cart in chat and send it to you. That cart then has to become a real order: someone or something must check stock, apply the right price and offers, and create the order in the store.",
          "For payment there are two common routes in India. Meta's payments integration lets customers pay inside WhatsApp through supported gateways, including Razorpay and PayU. The more flexible option is a payment link or a link to a pre-filled store checkout, which works with whatever gateway and discount logic you already use. Whichever you choose, the store must remain the place where the order, payment status and invoice live.",
        ],
        callout: {
          type: "note",
          text: "Check the catalogue sync carefully. Stale prices or out-of-stock items in a WhatsApp catalogue create exactly the kind of support conversation you were trying to avoid.",
        },
      },
      {
        heading: "Automation, AI and human handover",
        body: [
          "Rule-based flows handle predictable steps well: order status, COD confirmation, return requests and simple menus. AI assistants can answer product questions from your own catalogue and policies, if they are grounded in that data and limited to it. Both need a clear way to reach a person, and WhatsApp's policy expects one.",
          "Hand over when a customer asks for a person, when the conversation involves money (refunds, failed payments, damaged goods), or when the bot has not understood twice. Pass the order details and conversation history so the customer does not repeat themselves. For more on grounding and escalation, see [[/blogs/ai-customer-support-ecommerce|AI customer support for ecommerce]].",
        ],
      },
      {
        heading: "Consent, policy and message categories",
        body: [
          "WhatsApp's Business Messaging Policy requires opt-in before you message someone, an easy way to opt out, and a path to a human. Collect opt-in where it is natural (a checkbox at checkout, a choice in your account area, or the customer starting a chat), say what kind of messages they will receive, and store the consent record alongside the customer profile.",
          "Messages outside a customer's own chat must use pre-approved templates, and each template falls into a category: marketing, utility (order and account updates) or authentication. Replies within 24 hours of a customer's last message are service messages and can be free-form. Getting categories right matters for cost and for delivery: Meta limits how many marketing messages a person receives based on their engagement, so heavy promotion can stop messages arriving at all.",
        ],
      },
      {
        heading: "What it costs in 2026",
        body: [
          "Since July 2025, Meta has charged per delivered message rather than per conversation, at rates that depend on the message category and the recipient's country. Two changes from 1 October 2026 matter for D2C brands: utility messages sent inside an open customer service window are now charged, and free service replies are capped at 1,000 a month. Eligible Indian accounts also have to move to rupee billing by 31 December 2026.",
          "To budget, list each journey, the template category it uses and how many messages it sends per order, then multiply by order volume using the current rate card on Meta's developer pricing page. Add your provider or app fees. Much older content online still describes free 24-hour conversations; it no longer reflects how WhatsApp is billed.",
        ],
        table: {
          headers: ["Journey", "Typical category", "Cost note"],
          rows: [
            ["Order confirmation, dispatch, delivery", "Utility", "Charged per message; count messages per order"],
            ["COD confirmation", "Utility", "Charged; often pays for itself if it prevents failed deliveries"],
            ["Replies to customer questions", "Service", "First 1,000 a month free, then charged"],
            ["Cart recovery, offers, launches", "Marketing", "Highest rates in most markets; subject to per-user limits"],
            ["Login codes", "Authentication", "Charged; separate rates in some markets"],
            ["Chats started from click-to-WhatsApp ads", "Any", "Free during the entry point window, up to 7 days, on mobile"],
          ],
        },
        cta: {
          title: "Want to map your WhatsApp journeys before you build?",
          description: "ZSpace Labs can help you decide which journeys belong in WhatsApp, which messages they need, and how they connect to your [[/services/shopify-development|Shopify store]] and support tools, with a realistic monthly messaging budget.",
        },
      },
      {
        heading: "Hypothetical example: a skincare brand's first three journeys",
        body: [
          "**This example is hypothetical.** A skincare brand with a high share of COD orders starts with three journeys. Every new COD order triggers a confirmation message with \"Confirm\" and \"Pay online and save\" buttons; unconfirmed orders get one reminder and are then called before dispatch. Shipping updates go out at dispatch, out-for-delivery and delivery. A \"Help me choose\" flow asks two questions about skin type and concern, sends three matching products and offers to connect to a skincare adviser.",
          "Only after these are stable does the brand add replenishment reminders timed to each product's typical usage, and it measures each journey by orders and failed deliveries, not by messages read.",
        ],
      },
      {
        heading: "Measuring whether it works",
        body: [],
        table: {
          headers: ["Journey", "Measure"],
          rows: [
            ["COD confirmation", "Confirmation rate, prepaid switch rate, failed deliveries on confirmed vs unconfirmed orders"],
            ["Order updates", "Change in \"where is my order\" contacts per 100 orders"],
            ["Guided selling and ads", "Orders and revenue attributed to chats, cost per order including messaging"],
            ["Cart recovery", "Recovered orders net of discounts and message costs"],
            ["Support", "First response time, handover rate, resolution without escalation"],
          ],
        },
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Running a growing brand's WhatsApp from one phone with the Business app.",
          "Sending promotions to customers who only agreed to order updates.",
          "Letting the WhatsApp catalogue drift out of sync with store prices and stock.",
          "Bots with no route to a person.",
          "Budgeting from outdated conversation-based pricing.",
          "Taking orders in chat that never reach the store's order system.",
        ],
      },
      {
        heading: "Where to start",
        body: [
          "Start with the journeys that save money or prevent problems (order updates and COD confirmation), then add selling journeys once the plumbing is reliable. Keep the store as the source of truth, collect consent properly, and measure each flow by orders and costs. For how this differs from selling through the website, see [[/blogs/conversational-ecommerce|conversational commerce vs traditional ecommerce]].",
        ],
        cta: {
          title: "Building WhatsApp into your D2C store?",
          description: "Tell ZSpace Labs which journeys you want to run in WhatsApp. We will help you choose between an app, a provider and a custom integration, and build the connections to your store, CRM and support desk.",
        },
      },
    ],
  },

  // -------------------------------------------- WHATSAPP SHOPIFY INTEGRATION
  {
    slug: "whatsapp-shopify-integration",
    title: "How to Integrate WhatsApp with Shopify for Order Updates, Customer Support and Repeat Sales",
    seoTitle: "WhatsApp Shopify Integration: Order Updates, Support and Sales",
    excerpt:
      "How to connect WhatsApp with Shopify: apps vs a custom build, which store events trigger which messages, COD confirmation, opt-in and support.",
    category: "Shopify & Ecommerce",
    banner: "webhookflow",
    sceneKind: "orders",
    bannerAlt:
      "Shopify order and fulfilment events flowing through webhooks to a WhatsApp integration layer, which sends template messages for confirmation, COD verification, shipping and reorders, and routes replies to a support inbox",
    date: "2026-11-10",
    readingTime: "13 min read",
    relatedServiceSlugs: ["shopify-development", "website-development", "ai-automation"],
    relatedIndustrySlugs: ["d2c-consumer", "ecommerce"],
    relatedSlugs: ["whatsapp-commerce", "ecommerce-webhooks", "shopify-custom-app-development-guide"],
    faqs: [
      {
        q: "Does Shopify have a built-in WhatsApp integration?",
        a: "Not a native one for automated messaging. Stores add WhatsApp through Shopify apps or WhatsApp Business Solution Providers, or through a custom app that connects Shopify's webhooks and APIs to the WhatsApp Business Platform. A simple chat button linking to your WhatsApp number needs no integration at all.",
      },
      {
        q: "Should we use an app or build a custom integration?",
        a: "Start with an established app if your needs are standard: order updates, COD confirmation, cart recovery and a shared inbox. Consider a custom integration when you need logic the apps do not support, data from systems beyond Shopify (an OMS, ERP or courier platform), strict control over data, or when app costs at your volume exceed the cost of running your own.",
      },
      {
        q: "How do we confirm COD orders through WhatsApp on Shopify?",
        a: "When an order with a cash-on-delivery payment method is created, the integration sends a utility template asking the customer to confirm, often with an option to pay online instead. The reply updates the order, for example with a tag, so your fulfilment process can ship confirmed orders and follow up the rest.",
      },
      {
        q: "Can we add WhatsApp tracking links to Shopify's order status page?",
        a: "Yes, but use the supported extension points. Shopify removed script tags from the order status page in 2026; customisations there now use customer account UI extensions, and tracking uses web pixels. Older script-based widgets need replacing.",
      },
    ],
    content: [
      {
        heading: "The short answer",
        body: [
          "**To integrate WhatsApp with Shopify, connect Shopify's order, fulfilment and checkout events to the WhatsApp Business Platform through an app, a Business Solution Provider or a custom app. Each event sends a pre-approved template message (order confirmed, COD confirmation, shipped, delivered, reorder reminder) to customers who have opted in, and customer replies land in a shared inbox linked to the order.** Shopify has no native WhatsApp messaging channel, so the choice is which integration layer to use and how much of it you control.",
          "This is the technical companion to our [[/blogs/whatsapp-commerce|WhatsApp commerce guide for D2C brands]], which covers which journeys to build and why.",
        ],
      },
      {
        heading: "Three ways to connect the two",
        body: [],
        table: {
          headers: ["Option", "What it is", "Good for", "Watch out for"],
          rows: [
            ["**Click-to-chat button**", "A link or widget that opens WhatsApp with your number", "Letting shoppers ask questions", "No automation, no link to orders"],
            ["**Shopify WhatsApp app or provider**", "An app that listens to Shopify events and sends templates through the Platform", "Standard order updates, COD confirmation, cart recovery, shared inbox", "Per-message and subscription costs; limits on custom logic; another app on the store"],
            ["**Custom integration**", "Your own app or service using Shopify webhooks and APIs and the WhatsApp Cloud API", "Unusual flows, several systems, data control, high volume", "You own the build, hosting, monitoring and template management"],
          ],
        },
      },
      {
        heading: "Which Shopify events trigger which messages",
        body: [
          "Most integrations come down to a mapping between store events and message templates. Write this table for your own store before choosing a tool; it becomes the specification.",
        ],
        table: {
          headers: ["Shopify event", "Message", "Template category", "Notes"],
          rows: [
            ["Order created", "Order confirmation with summary", "Utility", "Send once; avoid duplicating the email if customers find both noisy"],
            ["Order created, COD payment", "Please confirm your order (optionally: pay online)", "Utility", "Reply updates the order with a tag or note"],
            ["Checkout abandoned (opted-in customers)", "Reminder with link back to checkout", "Marketing", "Respect per-user marketing limits; one reminder is often enough"],
            ["Fulfilment created", "Shipped, with tracking link", "Utility", "Use your branded tracking page if you have one"],
            ["Courier status updates", "Out for delivery, delivery failed, delivered", "Utility", "Usually from your shipping platform, not Shopify itself"],
            ["Refund created", "Refund issued and how long it takes", "Utility", "Reduces follow-up questions"],
            ["Days since delivery, by product", "Reorder or review request", "Marketing", "Time it to the product's usage cycle"],
          ],
        },
      },
      {
        heading: "How the integration works underneath",
        body: [
          "Shopify sends webhooks when orders, fulfilments, checkouts and refunds change. The integration layer receives them, decides whether a message should be sent (has this customer opted in, is this a COD order, has the message already been sent), fills in a template with order data and sends it through the WhatsApp Cloud API or a provider's API. Delivery and read receipts come back as webhooks from WhatsApp, and customer replies arrive the same way.",
          "Build for the failure cases. Webhooks can arrive late, twice or out of order, so record which messages have been sent for each order and make sending idempotent. Template sends fail when templates are paused, numbers are invalid or a customer has hit Meta's marketing limit, so log failures and retry or fall back to SMS or email where it matters. Our guide to [[/blogs/ecommerce-webhooks|receiving ecommerce webhooks reliably]] covers the patterns.",
        ],
        diagram: {
          variant: "webhookflow",
          alt: "Shopify webhooks for order, checkout, fulfilment and refund events feeding an integration service that checks consent and deduplicates, sends WhatsApp templates, receives delivery receipts and replies, and writes results back to the Shopify order",
          caption: "The integration layer owns consent checks, deduplication and retries; Shopify remains the record of the order.",
        },
      },
      {
        heading: "Capturing opt-in on Shopify",
        body: [
          "WhatsApp requires opt-in before you message customers. On Shopify, the common places to collect it are a checkbox at checkout (through checkout extensibility, or the phone-marketing consent field where it fits your use), your account area, and the moment a customer starts a chat. Be clear about what they are agreeing to: order updates and promotions are different, and many customers will accept the first but not the second.",
          "Store consent with a timestamp and source against the customer record, and make opting out work from inside WhatsApp. If you also collect SMS or email consent, keep the three separate.",
        ],
      },
      {
        heading: "COD confirmation and prepaid nudges",
        body: [
          "For Indian stores, COD confirmation is often the integration that pays for itself first. When a COD order is created, send a utility template asking the customer to confirm. Offer a \"pay online\" button that opens a payment link for the same order, perhaps with a small prepaid benefit if your margins allow. Record the reply on the order as a tag so your warehouse or shipping platform can ship confirmed orders, follow up unconfirmed ones by phone, and cancel those that never respond after your chosen window.",
          "Shopify does not charge its third-party transaction fee on manual payment methods such as COD, but failed COD deliveries cost you shipping both ways, so a confirmation step that prevents some of them is usually worth the message cost. Measure it: compare delivery success on confirmed and unconfirmed orders.",
        ],
        cta: {
          title: "Need WhatsApp flows your current app cannot handle?",
          description: "ZSpace Labs builds [[/services/shopify-development|custom Shopify integrations]] that connect WhatsApp to your orders, shipping platform and support tools, with consent, retries and reporting built in.",
        },
      },
      {
        heading: "Support: one inbox with the order attached",
        body: [
          "Replies need somewhere to go. A shared inbox (in the WhatsApp app you choose, or a helpdesk that supports WhatsApp) lets several people answer, see the customer's orders alongside the chat, and hand conversations between a bot and a person. Route by intent where you can: delivery problems to the operations team, product questions to customer care, refunds to whoever can approve them.",
          "If you use an AI assistant, ground it in your catalogue, policies and order data, and have it hand over on refunds, complaints and anything it cannot answer. See [[/blogs/ai-customer-support-ecommerce|AI customer support for ecommerce]].",
        ],
      },
      {
        heading: "Order status page and tracking",
        body: [
          "Many stores add a \"Questions? Chat on WhatsApp\" button and tracking details to the order status page. In 2026 Shopify removed script tags from that page, so older widgets injected by scripts stop working. Use customer account UI extensions for visible elements and web pixels for tracking. If you rely on an app for this, check it has moved to the supported approach. For the tracking experience itself, see [[/blogs/ecommerce-order-tracking|ecommerce order tracking]].",
        ],
      },
      {
        heading: "Choosing an app or provider",
        body: [],
        checklist: [
          "Which Shopify events it supports out of the box, including COD confirmation and refunds.",
          "Whether replies can update the Shopify order (tags, notes, cancellations).",
          "Shared inbox, routing and handover to people, and whether it connects to your helpdesk.",
          "How it collects and stores opt-in, and how opt-outs are handled.",
          "Pricing: its subscription, any markup on Meta's per-message charges, and costs at your expected volume.",
          "Template management and reporting by journey, not just by message.",
          "Data access: can you export conversations and consent records if you move?",
        ],
      },
      {
        heading: "When a custom integration makes sense",
        body: [
          "A custom build is worth considering when messages depend on data outside Shopify (courier platforms, an OMS or ERP, subscription tools), when you need logic no app supports, such as COD rules by pincode or risk score, when several brands share one integration, or when app fees at your volume clearly exceed the cost of running your own service. It means owning template approval, webhook handling, monitoring and changes when Meta or Shopify update their platforms. See [[/blogs/shopify-custom-app-development-guide|when a custom Shopify app makes sense]].",
        ],
      },
      {
        heading: "Hypothetical example: from app to custom",
        body: [
          "**This example is hypothetical.** A D2C apparel brand starts with a Shopify WhatsApp app for order updates and COD confirmation. A year later it ships through two courier aggregators, runs an exchange-first returns process and wants COD confirmation only for orders above a risk threshold. The app cannot read the courier and returns data or apply the risk rule, so the brand builds a small service that listens to Shopify, courier and returns webhooks, applies its rules and sends templates through the Cloud API, while keeping the app's shared inbox for support.",
        ],
      },
      {
        heading: "Getting it live",
        body: [
          "List your events and messages, decide what each reply should change in Shopify, set up consent capture, and choose an app or a custom route based on that list. Launch the utility journeys first, check delivery rates and costs for a few weeks, then add marketing journeys carefully.",
        ],
        cta: {
          title: "Planning your WhatsApp and Shopify setup?",
          description: "Share your event list with ZSpace Labs and we will recommend an app, a provider or a [[/services/website-development|custom integration]], and estimate the build and messaging costs.",
        },
      },
    ],
  },
];
