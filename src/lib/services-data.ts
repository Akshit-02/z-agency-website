export type ServiceAccent = "blue" | "orange";

export type Service = {
  slug: string;
  index: string;
  name: string;
  short: string;
  accent: ServiceAccent;
  summary: string;
  heroCopy: string;
  whatWeDo: string[];
  problems: string[];
  approach: { title: string; body: string }[];
  deliverables: string[];
  technology: string[];
  whyZspace: string[];
  faq: { q: string; a: string }[];
  industrySlugs?: string[];
};

export const services: Service[] = [
  {
    slug: "website-development",
    industrySlugs: ["real-estate", "manufacturing", "saas-technology", "fintech", "education-edtech", "travel-hospitality", "automotive-mobility"],
    index: "01",
    name: "Full-Stack Website Development",
    short: "Websites and web apps",
    accent: "blue",
    summary:
      "Fast, scalable websites and web applications built on modern frameworks, not templates.",
    heroCopy:
      "Your website is the one property you fully control. We build it to load fast, rank well, and hold up as your product and traffic grow.",
    whatWeDo: [
      "Marketing sites, product sites and web applications built with modern frameworks like Next.js and React.",
      "Custom design systems so new pages and features stay consistent as the site grows.",
      "Backend architecture, APIs and database design for anything beyond a static site.",
      "Migration off slow page builders and legacy CMS platforms onto faster infrastructure.",
    ],
    problems: [
      "The current site is slow, was outgrown, or breaks every time content changes.",
      "Design and development live in separate teams, so nothing ships without friction.",
      "Marketing needs to launch pages independently without waiting on engineering for every change.",
      "The site was built for launch day, not for the traffic and features that came after.",
    ],
    approach: [
      {
        title: "Architecture before pixels",
        body: "We map information architecture, content structure and technical requirements before a single screen is designed, so the site can grow without a rebuild.",
      },
      {
        title: "Design and build in parallel",
        body: "Design and engineering work off the same component library from day one, which shortens the path from design file to production.",
      },
      {
        title: "Performance as a requirement",
        body: "Core Web Vitals, image strategy and loading behaviour are decided during planning, not patched in after launch.",
      },
    ],
    deliverables: [
      "Production-ready website or web application",
      "Reusable component and design system",
      "CMS or content workflow suited to your team",
      "Performance and SEO baseline configuration",
      "Documentation for future development",
    ],
    technology: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    whyZspace: [
      "One team owns design and engineering, so nothing gets lost in handoff.",
      "We build on frameworks used by teams shipping at scale, not locked-in page builders.",
      "Every project ships with a component system your internal team can extend later.",
    ],
    faq: [
      {
        q: "How long does a website project take?",
        a: "A marketing site typically takes four to eight weeks from kickoff to launch. Web applications with custom backends take longer depending on scope, usually eight to fourteen weeks.",
      },
      {
        q: "Do you work with an existing design or brand?",
        a: "Yes. We can build from an existing design system, extend a partial one, or design from scratch depending on where you are starting from.",
      },
      {
        q: "Can our team edit content after launch?",
        a: "We set up a content workflow, usually a headless CMS, so your team can update copy, images and pages without needing a developer for routine changes.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    industrySlugs: ["fashion-apparel", "fintech", "healthcare-healthtech", "education-edtech", "travel-hospitality"],
    index: "02",
    name: "Mobile App Development",
    short: "iOS and Android apps",
    accent: "orange",
    summary:
      "Polished native and cross-platform mobile applications for startups and growing businesses.",
    heroCopy:
      "A mobile app is a commitment to your users. We design and build apps that feel fast, native and considered, from first open to daily use.",
    whatWeDo: [
      "Cross-platform apps for iOS and Android built with React Native, plus native development where it matters.",
      "App architecture planning for offline support, push notifications, payments and authentication.",
      "Integration with backend services, third-party APIs and existing business systems.",
      "App store preparation, submission and release management.",
    ],
    problems: [
      "An idea needs to become a real product without hiring a full in-house mobile team.",
      "An existing app feels slow, dated, or is expensive to maintain across two platforms.",
      "The product needs offline behaviour, notifications or device features a website cannot deliver.",
      "The team has design direction but no one to turn it into a shipped, store-ready app.",
    ],
    approach: [
      {
        title: "Product thinking first",
        body: "Before any screen is built, we define the core user flow the app has to get right and design around that flow.",
      },
      {
        title: "One codebase, two platforms",
        body: "We default to cross-platform development to move faster and keep iOS and Android in sync, using native modules only where the experience demands it.",
      },
      {
        title: "Built for the store",
        body: "App store guidelines, review requirements and release process are planned early so launch is not the first time we think about them.",
      },
    ],
    deliverables: [
      "iOS and Android application, ready for submission",
      "Backend and API integration",
      "App store listing assets and submission support",
      "Analytics and crash reporting setup",
      "Release and versioning process for future updates",
    ],
    technology: ["React Native", "Swift", "Kotlin", "Node.js", "Firebase", "REST & GraphQL APIs"],
    whyZspace: [
      "We design and build the app together, so the shipped product matches the intended experience.",
      "Cross-platform expertise means one investment reaches both iOS and Android.",
      "We stay involved past launch to handle updates, OS changes and store requirements.",
    ],
    faq: [
      {
        q: "Should we build native or cross-platform?",
        a: "For most products, cross-platform gets you to market faster without a meaningful difference in feel. We recommend native only when an app depends heavily on device-specific performance or hardware.",
      },
      {
        q: "Do you handle App Store and Play Store submission?",
        a: "Yes, we prepare listing assets, handle the submission process and manage the back-and-forth with app store review teams.",
      },
      {
        q: "What happens after the app is live?",
        a: "We offer ongoing support for updates, OS compatibility and new features, structured around what your product needs after launch.",
      },
    ],
  },
  {
    slug: "ai-automation",
    industrySlugs: ["manufacturing", "saas-technology", "healthcare-healthtech", "ecommerce", "automotive-mobility", "real-estate"],
    index: "03",
    name: "AI Automation",
    short: "Automated workflows",
    accent: "blue",
    summary:
      "Automate the repetitive parts of your business using AI, APIs and connected systems.",
    heroCopy:
      "Most businesses lose hours a week to work that a system could handle. We find that work and build the automation that removes it.",
    whatWeDo: [
      "Map manual, repetitive processes across sales, support, operations and content.",
      "Build automations connecting your existing tools, APIs and internal data.",
      "Implement AI-powered workflows for support, content generation, data processing and reporting.",
      "Set up monitoring so automations stay reliable as your business changes.",
    ],
    problems: [
      "The same manual task is repeated across the team every day or every week.",
      "Customer support or sales response times are limited by how many people are available.",
      "Data lives in five different tools with no system connecting them.",
      "The team wants to use AI but does not know where it would actually help.",
    ],
    approach: [
      {
        title: "Find the real bottleneck",
        body: "We audit current workflows to find where time is genuinely lost, rather than automating for the sake of automating.",
      },
      {
        title: "Design for reliability",
        body: "Automations are built with error handling, fallbacks and human checkpoints where decisions matter, not as fragile one-off scripts.",
      },
      {
        title: "Connect, then improve",
        body: "We start by connecting the tools you already use, then layer in AI where it adds clear, measurable value.",
      },
    ],
    deliverables: [
      "Documented workflow map of automated processes",
      "Working automation connected to your existing tools",
      "AI-assisted workflow for the identified use case",
      "Monitoring and alerting for automation health",
      "Handover documentation for your internal team",
    ],
    technology: ["OpenAI & Anthropic APIs", "Node.js", "Python", "Zapier & Make", "Webhooks", "Vector databases"],
    whyZspace: [
      "We start from your actual workflows, not a generic automation template.",
      "Automations are engineered like software, with monitoring and fallbacks, not fragile scripts.",
      "We are honest about where AI helps and where it does not.",
    ],
    faq: [
      {
        q: "What kind of processes are worth automating?",
        a: "Anything repetitive, rule-based, or high-volume, such as lead routing, support triage, reporting, data entry and content drafts, is usually a strong candidate.",
      },
      {
        q: "Do we need our own AI infrastructure?",
        a: "No. Most automations connect to existing AI providers through APIs. We handle the integration and keep your data flow secure.",
      },
      {
        q: "How is this different from using off-the-shelf automation tools alone?",
        a: "Off-the-shelf tools handle simple cases well. We step in where workflows are more complex, need custom logic, or need to connect systems that do not talk to each other natively.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    industrySlugs: ["d2c-consumer", "beauty-personal-care", "fashion-apparel", "fintech", "saas-technology", "healthcare-healthtech", "real-estate"],
    index: "04",
    name: "UI/UX Design",
    short: "Product & interface design",
    accent: "orange",
    summary:
      "Interfaces and digital experiences that are clear, considered and built to convert.",
    heroCopy:
      "Good design is not decoration. It is the difference between a product people understand instantly and one they abandon.",
    whatWeDo: [
      "Product and website UI/UX design, from early concept through final interface.",
      "User research and flow mapping to understand what the interface actually needs to do.",
      "Design systems that keep every screen and future feature visually consistent.",
      "Prototyping and usability testing before a line of code is written.",
    ],
    problems: [
      "The product works, but users get confused, drop off, or need explaining.",
      "The interface has grown inconsistently as new features were added.",
      "There is no design system, so every new screen is designed from scratch.",
      "The current design does not reflect the quality of the product behind it.",
    ],
    approach: [
      {
        title: "Understand before designing",
        body: "We study how users actually move through the product before proposing any interface changes.",
      },
      {
        title: "Systems, not screens",
        body: "We design in components and patterns so the interface scales consistently as your product grows.",
      },
      {
        title: "Test before you build",
        body: "Prototypes are validated with real usage patterns before development begins, reducing costly rework later.",
      },
    ],
    deliverables: [
      "Complete UI design files, ready for development",
      "Design system with reusable components",
      "Interactive prototype for validation",
      "Developer handoff documentation",
      "Usability findings and recommendations",
    ],
    technology: ["Figma", "Design tokens", "Prototyping tools", "Accessibility standards (WCAG)"],
    whyZspace: [
      "We design with implementation in mind, so nothing gets lost between design and engineering.",
      "Our design decisions are grounded in usability, not just visual trend.",
      "We can carry the design directly into development under one roof.",
    ],
    faq: [
      {
        q: "Do you only design, or do you also build the product?",
        a: "Both. We frequently design and develop under one engagement, but design-only engagements are available if you have an internal engineering team.",
      },
      {
        q: "What if we already have a partial design system?",
        a: "We audit what exists, keep what works, and extend it rather than starting over unnecessarily.",
      },
      {
        q: "How do you measure whether a design is working?",
        a: "Through usability testing, flow completion rates and, post-launch, real behavioural data rather than opinion alone.",
      },
    ],
  },
  {
    slug: "shopify-development",
    industrySlugs: ["d2c-consumer", "beauty-personal-care", "fashion-apparel", "ecommerce"],
    index: "05",
    name: "Shopify Store Setup & Optimization",
    short: "Shopify builds & CRO",
    accent: "blue",
    summary:
      "Build, redesign and optimize Shopify stores for better experience, speed and conversions.",
    heroCopy:
      "A Shopify store is only as good as the experience between browsing and checkout. We build and tune stores to close that gap.",
    whatWeDo: [
      "New Shopify store builds, from theme development to checkout configuration.",
      "Redesigns of underperforming stores, focused on speed and clarity.",
      "Custom Shopify theme development and app integration.",
      "Ongoing conversion optimization for existing stores.",
    ],
    problems: [
      "The store looks generic and does not reflect the brand.",
      "Page speed is poor, especially on mobile, where most shoppers browse.",
      "Product pages and checkout flow are losing customers before purchase.",
      "Too many apps have been layered on, slowing the store and complicating maintenance.",
    ],
    approach: [
      {
        title: "Audit the funnel first",
        body: "We review the full path from landing page to checkout to find where customers are actually dropping off.",
      },
      {
        title: "Build lean",
        body: "We prioritize custom theme development and essential apps over stacking plugins that slow the store down.",
      },
      {
        title: "Optimize with data",
        body: "Post-launch, we track store performance and iterate on the pages and flows that most affect revenue.",
      },
    ],
    deliverables: [
      "Custom or customized Shopify theme",
      "Optimized product, collection and checkout pages",
      "Speed and mobile performance improvements",
      "App audit and consolidation",
      "Conversion tracking setup",
    ],
    technology: ["Shopify Liquid", "Shopify Hydrogen", "Shopify APIs", "Klaviyo & app integrations"],
    whyZspace: [
      "We treat Shopify as a product to be engineered, not just a theme to be installed.",
      "Design and development are handled together, so the store looks as good as it performs.",
      "We focus on the metrics that affect revenue, not surface-level polish alone.",
    ],
    faq: [
      {
        q: "Can you work with our existing Shopify theme?",
        a: "Yes. We can optimize an existing theme or move to a custom build depending on how much the current setup is limiting you.",
      },
      {
        q: "Do you handle app and plugin integrations?",
        a: "Yes, including auditing existing apps for ones that are slowing the store down unnecessarily.",
      },
      {
        q: "Can you help after the store is live?",
        a: "Yes, ongoing optimization is often where the biggest conversion gains happen, well after initial launch.",
      },
    ],
  },
  {
    slug: "cro-audit",
    industrySlugs: ["d2c-consumer", "beauty-personal-care", "ecommerce", "travel-hospitality", "real-estate"],
    index: "06",
    name: "CRO Audit",
    short: "Conversion audits",
    accent: "orange",
    summary:
      "A structured audit that identifies exactly where your website or store is losing customers.",
    heroCopy:
      "Traffic is not the problem for most businesses. Conversion is. We find out exactly where visitors are dropping off, and why.",
    whatWeDo: [
      "Full-funnel audit of your website or store, from landing page to conversion.",
      "Heuristic and usability review against conversion best practices.",
      "Analysis of key pages: homepage, product or service pages, pricing, checkout or contact forms.",
      "A prioritized action plan ranked by expected impact and effort.",
    ],
    problems: [
      "Traffic looks healthy, but conversion rate has stalled or declined.",
      "There is no clear reason why visitors leave without converting.",
      "Recent redesigns or feature launches have not moved the numbers.",
      "The team needs an external, objective read on what is actually holding conversions back.",
    ],
    approach: [
      {
        title: "Audit against behaviour, not opinion",
        body: "We evaluate the experience against known conversion patterns and, where available, your existing analytics data.",
      },
      {
        title: "Prioritize by impact",
        body: "Findings are ranked by how much they likely affect conversion versus how much effort they take to fix.",
      },
      {
        title: "Hand over a real plan",
        body: "You receive a clear, prioritized report your team can act on immediately, with or without ZSpace implementing it.",
      },
    ],
    deliverables: [
      "Full conversion audit report",
      "Prioritized list of issues and recommendations",
      "Page-by-page breakdown of friction points",
      "Suggested tests and expected impact",
      "Optional implementation support",
    ],
    technology: ["Heuristic evaluation frameworks", "Analytics review", "Heatmap & session data (where available)"],
    whyZspace: [
      "The audit is built by people who also design and build, so recommendations are practical, not theoretical.",
      "We prioritize by impact, so your team knows exactly what to fix first.",
      "We can implement the recommendations directly if you want a single team handling both.",
    ],
    faq: [
      {
        q: "What do you need from us to run the audit?",
        a: "Access to the live site or store, and analytics data if available. Analytics is helpful but not required to deliver a useful audit.",
      },
      {
        q: "How long does an audit take?",
        a: "Typically one to two weeks depending on the size of the site and depth of analytics available.",
      },
      {
        q: "Do you also implement the fixes?",
        a: "Yes, implementation is available as a follow-on engagement, but the audit stands alone as a usable deliverable either way.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
