export type IndustryAccent = "blue" | "orange";
export type IndustryVisual = "rows" | "grid" | "shelf" | "bars" | "lines" | "pulse" | "funnel" | "phone";

export type IndustryCategory =
  | "Consumer"
  | "Technology"
  | "Business & Enterprise"
  | "Lifestyle"
  | "Emerging";

export const categoryOrder: IndustryCategory[] = [
  "Consumer",
  "Technology",
  "Business & Enterprise",
  "Lifestyle",
  "Emerging",
];

export const categoryCopy: Record<IndustryCategory, string> = {
  Consumer: "Brands selling directly to people — where product experience decides who buys again.",
  Technology: "Software-first businesses, where the product and the technology are the same thing.",
  "Business & Enterprise": "Operationally heavy businesses, where the right internal tools save more than a redesign ever will.",
  Lifestyle: "Businesses built around experiences people choose to spend time and money on.",
  Emerging: "Newer categories still defining what \"good\" looks like — which is exactly where a sharp early product wins.",
};

export type Industry = {
  slug: string;
  name: string;
  category: IndustryCategory;
  shortDescription: string;
  hasDetailPage: boolean;
  accent: IndustryAccent;
  visual?: IndustryVisual;
  heroTitle?: { text: string; accent?: IndustryAccent }[];
  heroCopy?: string;
  description?: string;
  challenges?: string[];
  solutions?: string[];
  serviceSlugs?: string[];
  useCases?: string[];
  faqs?: { q: string; a: string }[];
  relatedBlogSlugs?: string[];
  ctaTitle?: string;
  ctaDescription?: string;
};

export const industries: Industry[] = [
  // ---------------------------------------------------------------- CONSUMER
  {
    slug: "real-estate",
    name: "Real Estate",
    category: "Business & Enterprise",
    accent: "blue",
    visual: "rows",
    hasDetailPage: true,
    shortDescription: "Property developers, agencies, brokers and PropTech platforms.",
    heroTitle: [
      { text: "Digital products built for " },
      { text: "modern real estate", accent: "blue" },
      { text: " businesses." },
    ],
    heroCopy:
      "From listing platforms to lead-generation sites, we build the technology that helps property businesses convert interest into serious inquiries.",
    description:
      "Real estate runs on trust and information — buyers want to see the property clearly and reach someone fast. Whether you're a developer, an agency or a PropTech platform, the businesses winning right now are the ones whose digital experience is as considered as the property itself.",
    challenges: [
      "Listings that look good on a marketing deck but load slowly and rank poorly.",
      "Leads that go cold because the follow-up depends entirely on manual work.",
      "Search and filtering experiences that don't match how people actually browse property.",
    ],
    solutions: [
      "Fast, SEO-ready websites for developers, agencies and brokerages.",
      "Property listing and search platforms with filtering that matches real buyer behaviour.",
      "AI-assisted lead routing and follow-up, so no inquiry sits untouched.",
      "CRM integrations that keep sales teams working from one source of truth.",
    ],
    serviceSlugs: ["website-development", "ai-automation", "ui-ux-design", "cro-audit"],
    useCases: [
      "Property marketplace with map-based search and saved listings",
      "Lead-generation site for a developer launching a new project",
      "Broker CRM integration with automated inquiry routing",
      "Internal dashboard for tracking inventory across projects",
    ],
    faqs: [
      {
        q: "What technology solutions does ZSpace provide for real estate companies?",
        a: "We build listing and marketplace platforms, developer and agency websites, lead-generation sites, CRM integrations and the AI automation that routes and follows up on inquiries. Every project starts with your actual sales process, not a template.",
      },
      {
        q: "Can you integrate with the CRM our sales team already uses?",
        a: "Yes. We commonly connect real estate websites and lead forms directly into the CRM or spreadsheet workflow a team is already using, so leads don't need manual re-entry.",
      },
      {
        q: "Do you work with individual brokers as well as developers?",
        a: "Yes, from a single broker's lead-generation site to a developer's full project launch platform or a multi-listing marketplace.",
      },
    ],
    relatedBlogSlugs: ["why-page-speed-still-decides-conversion", "when-to-automate-a-business-process"],
    ctaTitle: "Build your next property platform",
    ctaDescription: "Tell us what you're building — a listing site, a marketplace or a lead engine — and we'll scope it honestly.",
  },
  {
    slug: "d2c-consumer",
    name: "D2C & Consumer Brands",
    category: "Consumer",
    accent: "orange",
    visual: "grid",
    hasDetailPage: true,
    shortDescription: "Digital-first consumer brands selling straight to their customer.",
    heroTitle: [
      { text: "Ecommerce experiences built for " },
      { text: "ambitious brands", accent: "orange" },
      { text: "." },
    ],
    heroCopy:
      "D2C brands live or die on the buying experience. We design and build stores, landing pages and product journeys that turn browsers into repeat customers.",
    description:
      "A D2C brand's website is its storefront, its salesperson and often its biggest marketing asset. We work with digital-first consumer brands on the parts of the business that most directly affect revenue: the store, the checkout, the landing pages and the automation behind them.",
    challenges: [
      "A store that looks the same as every other brand on the same theme.",
      "Checkout drop-off that no one can explain, let alone fix.",
      "Marketing driving traffic to a homepage instead of a page built to convert.",
    ],
    solutions: [
      "Custom Shopify builds and theme development that reflect the brand, not a template.",
      "Landing pages designed specifically for paid and organic campaigns.",
      "Conversion audits that find exactly where customers are dropping off.",
      "Automation for order updates, support triage and repeat-purchase flows.",
    ],
    serviceSlugs: ["shopify-development", "cro-audit", "ui-ux-design"],
    useCases: [
      "Custom Shopify storefront built around the brand's own visual system",
      "Campaign-specific landing pages for paid acquisition",
      "Checkout and funnel audit ahead of a major sales event",
      "Post-purchase automation for shipping updates and reorders",
    ],
    faqs: [
      {
        q: "Can ZSpace build a D2C ecommerce website?",
        a: "Yes. We build and redesign Shopify stores and custom ecommerce sites for D2C brands, from the storefront through checkout, and can run a conversion audit on an existing store first if that's the more useful starting point.",
      },
      {
        q: "Do you only work with Shopify?",
        a: "Shopify is where most D2C brands we work with already are, so it's our default. We also build fully custom storefronts where a brand's needs go beyond what a theme-based platform supports well.",
      },
      {
        q: "We already have a store — can you just fix the conversion rate?",
        a: "Yes, a CRO audit is often the right starting point. We review the funnel, flag the highest-impact issues, and can either hand over the findings or implement the fixes directly.",
      },
    ],
    relatedBlogSlugs: ["the-real-cost-of-a-slow-checkout", "shopify-speed-checklist-before-you-add-another-app"],
    ctaTitle: "Turn your store into a better buying experience",
    ctaDescription: "Whether it's a new storefront or a stuck conversion rate, tell us where the friction is.",
  },
  {
    slug: "beauty-personal-care",
    name: "Beauty & Personal Care",
    category: "Consumer",
    accent: "orange",
    visual: "shelf",
    hasDetailPage: true,
    shortDescription: "Skincare, haircare, cosmetics and personal care brands.",
    heroTitle: [
      { text: "Beauty experiences built to " },
      { text: "convert", accent: "orange" },
      { text: ", not just look good." },
    ],
    heroCopy:
      "Beauty is a discovery-driven category. We design product experiences that make it easy to find the right product and easy to buy it.",
    description:
      "Beauty and personal care customers are shopping on trust signals that are hard to fake in person — texture, shade, ingredients, routine. We build ecommerce and content experiences that give shoppers the confidence to buy online, and give the brand a store that performs as well as it photographs.",
    challenges: [
      "Product pages that don't answer the questions shoppers actually have — shade, ingredients, routine fit.",
      "Slow-loading, image-heavy stores that lose mobile shoppers before the page even renders.",
      "No clear system for bundles, subscriptions or routine-based selling.",
    ],
    solutions: [
      "Shopify builds designed around product discovery and routine-building.",
      "Fast, mobile-first product and collection pages.",
      "Conversion optimization across product pages and checkout.",
      "Automation for subscriptions, replenishment reminders and post-purchase flows.",
    ],
    serviceSlugs: ["shopify-development", "ui-ux-design", "cro-audit"],
    useCases: [
      "Shade- and skin-type-matching product finder",
      "Subscription and replenishment flow for consumable products",
      "Routine-based bundle builder on product pages",
      "Mobile-first store redesign for a growing beauty brand",
    ],
    faqs: [
      {
        q: "What services does ZSpace provide to beauty brands?",
        a: "Shopify store builds and redesigns, product discovery experiences, UI/UX design, conversion optimization and the automation around subscriptions and repeat purchases.",
      },
      {
        q: "Can you help with a subscription or replenishment model?",
        a: "Yes, we design and build subscription and reminder flows for consumable beauty products, including the automation that manages renewal and communication.",
      },
    ],
    relatedBlogSlugs: ["the-real-cost-of-a-slow-checkout", "design-systems-for-teams-that-move-fast"],
    ctaTitle: "Build a beauty experience that converts",
    ctaDescription: "Tell us about your product range and where customers are getting stuck.",
  },
  {
    slug: "fashion-apparel",
    name: "Fashion & Apparel",
    category: "Consumer",
    accent: "orange",
    visual: "shelf",
    hasDetailPage: true,
    shortDescription: "Apparel, footwear, accessories and fashion-forward brands.",
    heroTitle: [
      { text: "Editorial-grade ecommerce for " },
      { text: "fashion brands", accent: "orange" },
      { text: "." },
    ],
    heroCopy:
      "Fashion sells on feel as much as fit. We build stores and apps that carry a brand's visual identity all the way through to checkout.",
    description:
      "A fashion brand's site has to do two things at once: look as considered as the collection, and make size, fit and availability effortless to figure out. We build ecommerce and mobile experiences that hold both without compromising either.",
    challenges: [
      "A site that looks premium on the homepage but generic by the product page.",
      "Size and fit uncertainty driving returns and cart abandonment.",
      "No mobile app or mobile experience matching how younger customers actually shop.",
    ],
    solutions: [
      "Custom Shopify and ecommerce builds with genuine editorial design.",
      "Size, fit and availability experiences that reduce returns.",
      "Mobile app development for brands ready to own the shopping experience directly.",
      "Conversion optimization across collections, product pages and checkout.",
    ],
    serviceSlugs: ["shopify-development", "mobile-app-development", "ui-ux-design"],
    useCases: [
      "Lookbook-driven collection pages that still convert",
      "Size and fit guide reducing returns on apparel",
      "Mobile app for a direct-to-customer fashion brand",
      "Drop and limited-release commerce experience",
    ],
    faqs: [
      {
        q: "Can you build a mobile app for our fashion brand, not just a website?",
        a: "Yes, we build both. Many fashion brands start with a strong ecommerce site and move to a mobile app once there's a loyal customer base worth owning a direct channel for.",
      },
      {
        q: "Do you design as well as build the store?",
        a: "Yes, design and development are handled together, which matters for fashion — the visual identity has to survive the transition from lookbook to live product page.",
      },
    ],
    relatedBlogSlugs: ["what-a-good-mobile-app-onboarding-actually-does", "design-systems-for-teams-that-move-fast"],
    ctaTitle: "Build a store that matches the collection",
    ctaDescription: "Tell us about your brand and where the current experience falls short.",
  },
  {
    slug: "ecommerce",
    name: "Ecommerce",
    category: "Consumer",
    accent: "orange",
    visual: "grid",
    hasDetailPage: true,
    shortDescription: "Marketplaces, online retailers and subscription commerce.",
    heroTitle: [
      { text: "Commerce platforms built to " },
      { text: "scale", accent: "orange" },
      { text: " with the catalog, not against it." },
    ],
    heroCopy:
      "From single-brand stores to multi-vendor marketplaces, we build ecommerce platforms engineered for catalog growth and checkout reliability.",
    description:
      "Ecommerce businesses hit a point where a standard theme or template can't keep up with the catalog, the vendor logistics or the traffic. We build the custom parts of the platform — search, checkout, vendor tooling, automation — that a growing store actually needs.",
    challenges: [
      "A catalog too large or complex for a standard storefront theme to manage well.",
      "Checkout and payment flows that break under real order volume.",
      "Manual processes — inventory, vendor payouts, order routing — that don't scale.",
    ],
    solutions: [
      "Custom storefront and marketplace development beyond template limits.",
      "Search, filtering and merchandising built for large catalogs.",
      "Checkout and payment reliability improvements.",
      "Automation for inventory, vendor management and order routing.",
    ],
    serviceSlugs: ["shopify-development", "cro-audit", "ai-automation"],
    useCases: [
      "Multi-vendor marketplace with vendor-facing dashboards",
      "Large-catalog search and filtering rebuild",
      "Subscription commerce billing and renewal automation",
      "Checkout reliability audit ahead of a peak sales season",
    ],
    faqs: [
      {
        q: "Can you handle a large or multi-vendor catalog?",
        a: "Yes, this is exactly where custom development earns its cost over a standard theme — search, filtering, vendor tooling and order routing all need to be built around your specific catalog structure.",
      },
      {
        q: "Do you build marketplaces, not just single-brand stores?",
        a: "Yes, including the vendor-facing side: onboarding, listings, payouts and order management.",
      },
    ],
    relatedBlogSlugs: ["shopify-speed-checklist-before-you-add-another-app", "the-real-cost-of-a-slow-checkout"],
    ctaTitle: "Build commerce infrastructure that scales",
    ctaDescription: "Tell us where your current platform is starting to strain.",
  },

  // -------------------------------------------------------------- TECHNOLOGY
  {
    slug: "fintech",
    name: "FinTech",
    category: "Technology",
    accent: "blue",
    visual: "bars",
    hasDetailPage: true,
    shortDescription: "Payments, digital banking, lending, wealth and personal finance products.",
    heroTitle: [
      { text: "Build a product your customers can " },
      { text: "trust", accent: "blue" },
      { text: "." },
    ],
    heroCopy:
      "FinTech products earn trust through clarity — clean dashboards, transparent flows and interfaces that never make a user guess. That's what we build.",
    description:
      "Financial products carry a higher bar for clarity and trust than almost any other category. We design and build the web and mobile applications, dashboards and customer portals that FinTech, WealthTech and InsurTech teams need — as a technology partner, not a financial service provider.",
    challenges: [
      "Interfaces that bury important information — balances, fees, terms — behind unclear flows.",
      "Dashboards that are accurate but genuinely hard to use.",
      "Onboarding flows that lose users before they reach the product's actual value.",
    ],
    solutions: [
      "Web and mobile application development for financial products.",
      "Customer portals and dashboards designed for clarity under real data.",
      "Onboarding and KYC-adjacent flow design focused on completion, not just compliance.",
      "Automation for reporting, notifications and internal operations.",
    ],
    serviceSlugs: ["website-development", "mobile-app-development", "ui-ux-design"],
    useCases: [
      "Customer-facing dashboard for a lending or investment platform",
      "Mobile app for a personal finance or budgeting product",
      "Onboarding flow redesign to improve activation",
      "Internal reporting and reconciliation automation",
    ],
    faqs: [
      {
        q: "Does ZSpace develop fintech applications?",
        a: "Yes, we build the web and mobile applications, dashboards and customer portals FinTech companies need. We provide technology and digital product development — not regulated financial services.",
      },
      {
        q: "Can you design dashboards that handle complex financial data clearly?",
        a: "Yes, this is a large part of what we do for FinTech clients: making dense, accurate data genuinely usable without hiding the complexity that matters.",
      },
      {
        q: "Do you work with early-stage FinTech startups or only established companies?",
        a: "Both. Early-stage teams often need the first version of the product built well; established teams more often need a specific dashboard, portal or flow redesigned.",
      },
    ],
    relatedBlogSlugs: ["what-a-good-mobile-app-onboarding-actually-does", "design-systems-for-teams-that-move-fast"],
    ctaTitle: "Build a product your customers can trust",
    ctaDescription: "Tell us about the product and the flow that needs the most work.",
  },
  {
    slug: "saas-technology",
    name: "SaaS & Technology",
    category: "Technology",
    accent: "blue",
    visual: "lines",
    hasDetailPage: true,
    shortDescription: "Software companies, developer tools and B2B technology products.",
    heroTitle: [
      { text: "Product development for " },
      { text: "software companies", accent: "blue" },
      { text: " that ship fast." },
    ],
    heroCopy:
      "For SaaS and technology companies, the website and the product are both engineering decisions. We build both with the same care.",
    description:
      "SaaS teams need a marketing site that converts and a product that holds up under real usage — often built by the same small team. We work as an extension of that team: marketing sites, dashboards, design systems and the automation that keeps internal operations from eating engineering time.",
    challenges: [
      "A marketing site that doesn't reflect the quality of the actual product.",
      "A design system that's grown inconsistently as features shipped fast.",
      "Manual internal processes — support, onboarding, reporting — competing with product work for engineering time.",
    ],
    solutions: [
      "Marketing and product websites built on modern frameworks, not page builders.",
      "Design systems that keep the product consistent as it grows.",
      "AI automation for support triage, onboarding and internal reporting.",
      "UI/UX design for complex, feature-dense product interfaces.",
    ],
    serviceSlugs: ["website-development", "ui-ux-design", "ai-automation"],
    useCases: [
      "Marketing site rebuild ahead of a funding round or launch",
      "Design system for a fast-growing product team",
      "Support and onboarding automation to reduce manual load",
      "Complex dashboard or admin panel redesign",
    ],
    faqs: [
      {
        q: "Can you build a design system for our existing product?",
        a: "Yes, we regularly audit and extend existing design systems rather than starting over, so new features stay consistent with what's already shipped.",
      },
      {
        q: "Do you build the marketing site or the product itself?",
        a: "Both, depending on what a team needs. Many SaaS clients bring us in for the marketing site first and the product UI later, once trust is established.",
      },
    ],
    relatedBlogSlugs: ["design-systems-for-teams-that-move-fast", "when-to-automate-a-business-process"],
    ctaTitle: "Ship the parts of the product you haven't had time for",
    ctaDescription: "Tell us what's furthest behind — the marketing site, the design system or the internal tools.",
  },
  {
    slug: "healthcare-healthtech",
    name: "Healthcare & HealthTech",
    category: "Technology",
    accent: "blue",
    visual: "pulse",
    hasDetailPage: true,
    shortDescription: "Clinics, diagnostics, HealthTech platforms and medical technology.",
    heroTitle: [
      { text: "Digital products for " },
      { text: "healthcare teams", accent: "blue" },
      { text: " that need to move faster." },
    ],
    heroCopy:
      "Appointment flows, patient portals and clinical dashboards, designed so the technology never gets in the way of care.",
    description:
      "Healthcare and HealthTech products have to be usable under pressure — by patients who are anxious and staff who are busy. We build patient-facing apps, booking systems and internal dashboards designed for clarity first, with the automation to take manual scheduling and follow-up work off a team's plate.",
    challenges: [
      "Booking and scheduling systems that create more admin work than they remove.",
      "Patient-facing apps that are technically functional but genuinely confusing to use.",
      "No automated way to handle reminders, follow-ups or routine patient communication.",
    ],
    solutions: [
      "Appointment and booking platforms built around real clinic workflows.",
      "Patient-facing mobile apps and portals designed for clarity under stress.",
      "AI automation for reminders, follow-ups and routine communication.",
      "Internal dashboards for scheduling, records and reporting.",
    ],
    serviceSlugs: ["mobile-app-development", "ui-ux-design", "ai-automation"],
    useCases: [
      "Patient booking and appointment management platform",
      "Mobile app for a diagnostics or HealthTech provider",
      "Automated appointment reminders and follow-up messaging",
      "Internal dashboard for clinical or administrative staff",
    ],
    faqs: [
      {
        q: "Can ZSpace build a healthcare booking or patient platform?",
        a: "Yes, we build patient-facing booking systems, portals and mobile apps, along with the internal dashboards clinics and HealthTech teams use to manage them.",
      },
      {
        q: "Do you handle healthcare compliance requirements?",
        a: "We build the technology and design the workflows; compliance requirements specific to your region and use case should be defined by your own legal and clinical advisors, and we build to the requirements you provide.",
      },
    ],
    relatedBlogSlugs: ["what-a-good-mobile-app-onboarding-actually-does"],
    ctaTitle: "Build technology that supports the care, not the admin",
    ctaDescription: "Tell us about the workflow that's costing your team the most time.",
  },

  // ------------------------------------------------------- BUSINESS & ENTERPRISE
  {
    slug: "manufacturing",
    name: "Manufacturing",
    category: "Business & Enterprise",
    accent: "blue",
    visual: "bars",
    hasDetailPage: true,
    shortDescription: "Industrial, automotive, electronics and B2B manufacturing.",
    heroTitle: [
      { text: "Digitize the way your " },
      { text: "manufacturing business", accent: "blue" },
      { text: " actually works." },
    ],
    heroCopy:
      "From B2B websites to internal dashboards, we build the tools that replace spreadsheets and manual coordination with something your team can rely on.",
    description:
      "Manufacturing and industrial businesses often run critical operations on spreadsheets, WhatsApp threads and manual handoffs — not because the team doesn't know better, but because no one's built the right tool yet. We build the B2B websites, customer portals and internal systems that actually fit how the business runs.",
    challenges: [
      "A B2B website that doesn't reflect the scale or capability of the business.",
      "Operational visibility that lives in spreadsheets no one fully trusts.",
      "Customer or distributor communication handled entirely by phone and email.",
    ],
    solutions: [
      "B2B websites built to generate serious inbound inquiries, not just exist.",
      "Customer and distributor portals for orders, status and documentation.",
      "Internal dashboards for production, inventory and workflow visibility.",
      "Automation for order processing, reporting and routine coordination.",
    ],
    serviceSlugs: ["website-development", "ai-automation"],
    useCases: [
      "B2B website built for inbound lead generation",
      "Distributor portal for orders and documentation",
      "Internal dashboard for production and inventory tracking",
      "Automated reporting for operations and management",
    ],
    faqs: [
      {
        q: "Can ZSpace automate manufacturing workflows?",
        a: "Yes, we build automation for the coordination-heavy parts of manufacturing operations — order processing, reporting, status updates — and the dashboards that give visibility into them.",
      },
      {
        q: "Do you build customer or distributor-facing portals?",
        a: "Yes, including order tracking, documentation and communication tools built around how your distributors and customers actually work with you.",
      },
    ],
    relatedBlogSlugs: ["when-to-automate-a-business-process"],
    ctaTitle: "Digitize the way your business works",
    ctaDescription: "Tell us which part of the operation still runs on spreadsheets and phone calls.",
  },

  // -------------------------------------------------------------- LIFESTYLE
  {
    slug: "travel-hospitality",
    name: "Travel & Hospitality",
    category: "Lifestyle",
    accent: "orange",
    visual: "rows",
    hasDetailPage: true,
    shortDescription: "Hotels, resorts, travel companies and booking platforms.",
    heroTitle: [
      { text: "Booking experiences that feel as good as the " },
      { text: "trip itself", accent: "orange" },
      { text: "." },
    ],
    heroCopy:
      "For travel and hospitality brands, the booking flow is the first impression. We build fast, trustworthy booking and discovery experiences.",
    description:
      "Travel and hospitality decisions are high-consideration and often made on a phone, mid-scroll. We build websites and booking platforms designed for that moment — fast to load, easy to filter, and clear enough to book with confidence.",
    challenges: [
      "Booking flows with too many steps between browsing and confirming.",
      "Slow, image-heavy sites that lose mobile travellers before they book.",
      "No easy way to manage availability, pricing or promotions without a developer.",
    ],
    solutions: [
      "Fast, mobile-first websites and booking platforms.",
      "Search and discovery experiences built around how travellers actually decide.",
      "Conversion optimization across the booking funnel.",
      "Content and availability management your team can update directly.",
    ],
    serviceSlugs: ["website-development", "mobile-app-development", "cro-audit"],
    useCases: [
      "Direct booking platform for a hotel or resort group",
      "Availability and pricing management without developer involvement",
      "Mobile app for a travel or tourism brand",
      "Booking funnel audit ahead of peak season",
    ],
    faqs: [
      {
        q: "Can you build a direct booking system that reduces reliance on OTAs?",
        a: "Yes, direct booking platforms designed to convert are one of the most common projects we take on for hotels and travel brands.",
      },
      {
        q: "Do you build mobile apps for travel brands?",
        a: "Yes, particularly for brands with a loyal or repeat customer base worth serving through a dedicated app.",
      },
    ],
    relatedBlogSlugs: ["why-page-speed-still-decides-conversion"],
    ctaTitle: "Build a booking experience worth finishing",
    ctaDescription: "Tell us where travellers are dropping off in your current booking flow.",
  },

  // --------------------------------------------------------------- EMERGING
  {
    slug: "automotive-mobility",
    name: "Automotive & Mobility",
    category: "Emerging",
    accent: "blue",
    visual: "bars",
    hasDetailPage: true,
    shortDescription: "EV companies, dealerships, marketplaces and mobility startups.",
    heroTitle: [
      { text: "Technology for the businesses building " },
      { text: "how we move", accent: "blue" },
      { text: "." },
    ],
    heroCopy:
      "From EV platforms to vehicle marketplaces, we build the digital products that mobility businesses need to move as fast as the category does.",
    description:
      "Automotive and mobility is moving quickly — new categories, new buying behaviour, new expectations for what a digital experience should feel like. We build the websites, apps and dashboards that let mobility businesses, dealerships and EV companies keep up.",
    challenges: [
      "A digital presence that hasn't caught up to a fast-moving category.",
      "Vehicle search and comparison experiences that are hard to use.",
      "Manual coordination across dealership, service or fleet operations.",
    ],
    solutions: [
      "Websites and marketplaces built for vehicle search and comparison.",
      "Mobile apps for service booking, fleet or ownership experiences.",
      "Automation for lead routing, service scheduling and reporting.",
      "UI/UX design for complex product and configuration flows.",
    ],
    serviceSlugs: ["website-development", "ai-automation", "ui-ux-design"],
    useCases: [
      "Vehicle marketplace with search and comparison tools",
      "Service booking app for a dealership or service network",
      "Lead routing automation for a mobility platform",
      "Configuration and comparison flow for an EV product",
    ],
    faqs: [
      {
        q: "Can you build a vehicle marketplace or comparison platform?",
        a: "Yes, including search, filtering and comparison experiences designed around how buyers actually evaluate vehicles.",
      },
      {
        q: "Do you work with EV and mobility startups specifically?",
        a: "Yes, often building the first version of the product alongside the team, since much of mobility is still defining its own category conventions.",
      },
    ],
    relatedBlogSlugs: ["when-to-automate-a-business-process"],
    ctaTitle: "Build the product your category doesn't have yet",
    ctaDescription: "Tell us what you're building and how far along the idea is.",
  },
  {
    slug: "education-edtech",
    name: "Education & EdTech",
    category: "Technology",
    accent: "blue",
    visual: "lines",
    hasDetailPage: true,
    shortDescription: "Schools, coaching businesses, EdTech and learning platforms.",
    heroTitle: [
      { text: "Learning platforms built for " },
      { text: "real completion", accent: "blue" },
      { text: ", not just enrolment." },
    ],
    heroCopy:
      "Enrolment is easy. Completion is the hard part. We build learning platforms and apps designed around how people actually finish a course.",
    description:
      "EdTech and coaching businesses are judged on outcomes, not signups. We build the platforms, apps and dashboards that support real learning — from course delivery to progress tracking to the automation that keeps students engaged between sessions.",
    challenges: [
      "High signup rates but low course or program completion.",
      "A learning platform that feels like a generic template, not the brand's own product.",
      "No automated way to nudge inactive students back in.",
    ],
    solutions: [
      "Custom learning platforms and mobile apps built around your course structure.",
      "Progress tracking and engagement features that support completion.",
      "Automation for reminders, re-engagement and routine communication.",
      "UI/UX design for course delivery and student dashboards.",
    ],
    serviceSlugs: ["website-development", "mobile-app-development", "ui-ux-design"],
    useCases: [
      "Custom learning platform for a coaching or training business",
      "Mobile app for an EdTech product's core learning experience",
      "Student re-engagement automation for inactive learners",
      "Progress dashboard for students and instructors",
    ],
    faqs: [
      {
        q: "Can you build a custom learning platform instead of using an off-the-shelf LMS?",
        a: "Yes, especially where an off-the-shelf LMS is limiting the brand or the specific learning model you've built your program around.",
      },
      {
        q: "Do you build the mobile app as well as the web platform?",
        a: "Yes, and we can start with whichever matches how your students actually learn — many programs are primarily mobile.",
      },
    ],
    relatedBlogSlugs: ["what-a-good-mobile-app-onboarding-actually-does"],
    ctaTitle: "Build a platform students actually finish",
    ctaDescription: "Tell us about your program and where students are dropping off.",
  },

  // ------------------------------------------------- EXTENDED TAXONOMY (no detail page yet)
  { slug: "retail", name: "Retail", category: "Consumer", accent: "orange", shortDescription: "Multi-location and omnichannel retailers.", hasDetailPage: false },
  { slug: "jewelry-luxury", name: "Jewelry & Luxury", category: "Consumer", accent: "orange", shortDescription: "High-consideration luxury and jewelry brands.", hasDetailPage: false },
  { slug: "food-beverage", name: "Food & Beverage", category: "Consumer", accent: "orange", shortDescription: "D2C food brands, cloud kitchens and FoodTech.", hasDetailPage: false },
  { slug: "consumer-electronics", name: "Consumer Electronics", category: "Consumer", accent: "orange", shortDescription: "Electronics and gadget brands selling direct.", hasDetailPage: false },

  { slug: "martech", name: "MarTech", category: "Technology", accent: "blue", shortDescription: "Marketing and advertising technology platforms.", hasDetailPage: false },
  { slug: "legaltech", name: "LegalTech", category: "Technology", accent: "blue", shortDescription: "Legal software and practice management platforms.", hasDetailPage: false },
  { slug: "hrtech", name: "HRTech", category: "Technology", accent: "blue", shortDescription: "Recruitment, HR and workforce platforms.", hasDetailPage: false },
  { slug: "insurtech", name: "Insurance & InsurTech", category: "Technology", accent: "blue", shortDescription: "Insurance platforms and digital-first insurers.", hasDetailPage: false },
  { slug: "cybersecurity", name: "Cybersecurity", category: "Technology", accent: "blue", shortDescription: "Security products and platforms.", hasDetailPage: false },
  { slug: "telecommunications", name: "Telecommunications", category: "Technology", accent: "blue", shortDescription: "Telecom providers and connectivity platforms.", hasDetailPage: false },

  { slug: "logistics-supply-chain", name: "Logistics & Supply Chain", category: "Business & Enterprise", accent: "blue", shortDescription: "Courier, freight, warehousing and delivery platforms.", hasDetailPage: false },
  { slug: "professional-services", name: "Professional Services", category: "Business & Enterprise", accent: "blue", shortDescription: "Consulting, agencies, law and accounting firms.", hasDetailPage: false },
  { slug: "construction-infrastructure", name: "Construction & Infrastructure", category: "Business & Enterprise", accent: "blue", shortDescription: "Construction, architecture and engineering firms.", hasDetailPage: false },
  { slug: "pharmaceuticals", name: "Pharmaceuticals", category: "Business & Enterprise", accent: "blue", shortDescription: "Pharma and life sciences businesses.", hasDetailPage: false },
  { slug: "b2b-enterprise", name: "B2B & Enterprise", category: "Business & Enterprise", accent: "blue", shortDescription: "Corporate technology, procurement and business operations.", hasDetailPage: false },

  { slug: "sports-fitness", name: "Sports & Fitness", category: "Lifestyle", accent: "orange", shortDescription: "Gyms, fitness brands and sports technology.", hasDetailPage: false },
  { slug: "media-entertainment", name: "Media & Entertainment", category: "Lifestyle", accent: "orange", shortDescription: "Content platforms, streaming and digital publications.", hasDetailPage: false },
  { slug: "gaming", name: "Gaming", category: "Lifestyle", accent: "orange", shortDescription: "Gaming platforms and interactive entertainment.", hasDetailPage: false },
  { slug: "creator-economy", name: "Creator Economy", category: "Lifestyle", accent: "orange", shortDescription: "Creator tools, platforms and monetization products.", hasDetailPage: false },

  { slug: "agritech", name: "AgriTech", category: "Emerging", accent: "blue", shortDescription: "Farm technology and agricultural marketplaces.", hasDetailPage: false },
  { slug: "energy-cleantech", name: "Energy & CleanTech", category: "Emerging", accent: "blue", shortDescription: "Renewable energy, solar and sustainability technology.", hasDetailPage: false },
  { slug: "startups", name: "Startups", category: "Emerging", accent: "orange", shortDescription: "Early-stage and venture-backed teams turning an idea into a product.", hasDetailPage: false },
  { slug: "nonprofits-civic", name: "Nonprofits & Civic Technology", category: "Emerging", accent: "orange", shortDescription: "Nonprofits, NGOs and civic technology initiatives.", hasDetailPage: false },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}

export const homepageIndustrySlugs = [
  "real-estate",
  "d2c-consumer",
  "beauty-personal-care",
  "fashion-apparel",
  "fintech",
  "manufacturing",
  "saas-technology",
  "healthcare-healthtech",
  "ecommerce",
  "education-edtech",
  "travel-hospitality",
  "automotive-mobility",
];

export const homepageIndustries = homepageIndustrySlugs
  .map(getIndustryBySlug)
  .filter((industry): industry is Industry => Boolean(industry));

export const industriesWithDetailPages = industries.filter((industry) => industry.hasDetailPage);
