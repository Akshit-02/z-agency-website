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
  seoTitle: string;
  metaDescription: string;
  definition: { question: string; answer: string[] };
  audience: string[];
  useCases: { title: string; body: string }[];
  /** Hand-picked hub articles shown as "Guides" on the service page. */
  guides: string[];
  industrySlugs?: string[];
  /** India-wide positioning: commercial keyword, H1 and a service-specific section. */
  india: {
    eyebrow: string;
    h1: string;
    heading: string;
    intro: string[];
    points: { title: string; body: string }[];
  };
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
    seoTitle: "Web Development Company in India | Next.js & React",
    metaDescription: "Web development company serving businesses across India: fast Next.js and React websites, custom web apps, ecommerce builds, redesigns and integrations.",
    india: {
      "eyebrow": "Web development company in India",
      "h1": "A web development partner for businesses ready to build better.",
      "heading": "Websites for how India actually browses and buys",
      "intro": [
            "We work with businesses across India, remotely, from first-time founders to established companies replacing an older site. Most of the work is the same anywhere: clear structure, fast pages, a CMS your team can use and clean integrations. What changes in India is the context the site has to perform in.",
            "That context shapes decisions early. Pages are tested on mid-range Android phones and slower connections, not only on a fast laptop. Enquiry flows account for how people here prefer to get in touch, and the site is built so adding a regional-language version later doesn't mean a rebuild."
      ],
      "points": [
            {
                  "title": "Mobile-first, for real devices",
                  "body": "Most visits arrive on phones, many of them mid-range Android devices on variable networks. We set performance budgets for those conditions and check Core Web Vitals on mobile before launch."
            },
            {
                  "title": "Enquiries that reach the right person",
                  "body": "Forms, click-to-call and WhatsApp links routed into your inbox or CRM, so leads from Delhi, Mumbai, Bengaluru or a tier-2 city don't get lost in a shared mailbox."
            },
            {
                  "title": "Ready for more than one language",
                  "body": "Content models and URL structures that can take Hindi or another regional language later, with the right hreflang and metadata, instead of a duplicated site."
            },
            {
                  "title": "Payments and integrations",
                  "body": "When a site sells or takes bookings, we integrate the payment gateway you use, including UPI checkout flows, plus CRM, ERP or booking systems through their APIs."
            }
      ]
},
    definition: {
          "question": "What is website development?",
          "answer": [
                "Website development is the work of planning, building and maintaining a website or web application: information architecture, front-end code that renders pages in the browser, back-end services and databases, content management, integrations with other systems, hosting and ongoing performance and security work.",
                "For most businesses the website is the main sales and trust channel, so development decisions affect search visibility, speed, how easily marketing can publish, and how well the site connects to CRM, payments and analytics. We build on Next.js and React with TypeScript, which gives fast, search-friendly pages and room to grow into a full web application."
          ]
    },
    audience: [
          "Businesses replacing a slow page-builder or legacy CMS site",
          "Startups and SaaS companies that need a marketing site and a web app on one stack",
          "Teams whose marketing needs to publish without waiting on developers",
          "Companies that need integrations with CRM, payments, booking or internal systems"
    ],
    useCases: [
          {
                "title": "Marketing and lead-generation sites",
                "body": "Fast, structured sites with a CMS, analytics and forms that route enquiries to the right place."
          },
          {
                "title": "Custom web applications",
                "body": "Portals, dashboards and internal tools with authentication, roles, APIs and databases."
          },
          {
                "title": "Website redesign and replatforming",
                "body": "Rebuilding an existing site on a faster stack while protecting URLs, content and search equity."
          },
          {
                "title": "Headless and content-heavy sites",
                "body": "Large content libraries, documentation and multi-team publishing on a headless CMS."
          }
    ],
    guides: [
          "website-development-guide",
          "website-development-cost",
          "website-development-process",
          "nextjs-website-development",
          "best-web-development-agencies-in-india",
          "how-to-choose-website-development-company"
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
      {
        q: "How much does website development cost?",
        a: "It depends on scope: the number of templates, content migration, integrations, CMS needs and whether the project includes a web application. We scope each project after a short discovery call and give a fixed estimate per phase. Our website development cost guide explains the main cost drivers.",
      },
      {
        q: "Why do you build with Next.js and React?",
        a: "Next.js supports server rendering and static generation, which helps page speed and search visibility, and React lets marketing pages and application features share one component system. We still recommend simpler tools when a project does not need them.",
      },
      {
        q: "Will our new website be SEO-ready?",
        a: "Yes. Every build includes clean URLs, metadata, structured data, sitemaps, redirects from old URLs, image optimisation and Core Web Vitals checks. Rankings still depend on content and authority, which we can advise on.",
      },
      {
        q: "Do you provide website maintenance after launch?",
        a: "Yes. We offer ongoing support for updates, dependency and security patches, performance monitoring and new features, or we hand over documentation so your team can maintain it.",
      },
      {
        q: "Do you work with businesses across India?",
        a: "Yes. We are remote-first and work with businesses in any Indian city through video calls, shared project boards and regular demos. We don't operate local branch offices, so we don't claim a presence in cities where we don't have one.",
      },
      {
        q: "What does a web development company in India typically charge?",
        a: "Pricing varies widely across Indian agencies and depends on scope: number of page templates, custom features, integrations, content migration and whether a web application is involved. We give a fixed estimate per phase after a short discovery call rather than a one-size price. Our website development cost guide explains the main cost drivers.",
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
    seoTitle: "Mobile App Development Company in India | iOS & Android",
    metaDescription: "Mobile app development company serving businesses across India: iOS and Android apps with React Native, native where needed, from scoping to store launch.",
    india: {
      "eyebrow": "Mobile app development company in India",
      "h1": "Mobile apps built around the people who use them.",
      "heading": "Building apps for India's mobile-first users",
      "intro": [
            "India is one of the largest smartphone markets in the world, and most of it runs on Android. We plan apps for that reality, working with startups and businesses across India, remotely, from first product scoping through Play Store and App Store launch.",
            "The right technical approach depends on the product. Cross-platform React Native suits most business apps because one codebase reaches Android and iOS. Native Swift or Kotlin is the better choice when an app leans heavily on device hardware, complex animation or platform-specific features."
      ],
      "points": [
            {
                  "title": "Android-first testing",
                  "body": "We test on a range of Android devices and OS versions, not just flagship phones, because that is where most of your users are."
            },
            {
                  "title": "Small downloads, low data use",
                  "body": "App size, image delivery and offline behaviour are planned up front, so the app works on patchy connections and doesn't eat into data plans."
            },
            {
                  "title": "Payments and sign-in people expect",
                  "body": "Phone-number login with OTP, UPI and wallet payments through your payment provider, and notifications that respect users rather than spam them."
            },
            {
                  "title": "Cross-platform or native, decided early",
                  "body": "We recommend React Native or native development based on your features, team and budget, and explain the trade-off before any code is written."
            }
      ]
},
    definition: {
          "question": "What is mobile app development?",
          "answer": [
                "Mobile app development covers designing, building, testing and releasing applications for iOS and Android: defining the core user flows, designing the interface for small screens, writing the app, building or connecting the backend, integrating payments, notifications and analytics, and handling App Store and Google Play submission and updates.",
                "Most products we build use React Native, which shares one codebase across both platforms, with native Swift or Kotlin modules where a feature needs deeper device access. The right choice depends on the features, performance needs and the team that will maintain the app."
          ]
    },
    audience: [
          "Founders turning a validated idea into a first app release",
          "Businesses adding an app alongside an existing website or platform",
          "Teams with an ageing or expensive-to-maintain app on two codebases",
          "Products that need offline use, notifications, payments or device features"
    ],
    useCases: [
          {
                "title": "Consumer apps",
                "body": "Onboarding, accounts, content, purchases and notifications designed around a few core flows."
          },
          {
                "title": "Commerce and booking apps",
                "body": "Catalogues, carts, payments, bookings and order tracking connected to your existing systems."
          },
          {
                "title": "Internal and field apps",
                "body": "Apps for staff and field teams with offline support, forms, photos and sync."
          },
          {
                "title": "App modernisation",
                "body": "Moving an older native or hybrid app onto a maintainable cross-platform codebase."
          }
    ],
    guides: [
          "mobile-app-development-guide",
          "mobile-app-development-cost",
          "native-vs-cross-platform-app-development",
          "react-native-app-development",
          "best-mobile-app-development-companies-in-india",
          "how-to-choose-a-mobile-app-development-company"
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
      {
        q: "How much does it cost to build a mobile app?",
        a: "Cost depends on the number of screens and user roles, backend complexity, integrations, offline needs and whether both platforms launch together. We estimate after scoping the core flows. Our mobile app development cost guide covers the main drivers.",
      },
      {
        q: "How long does it take to build an app?",
        a: "A focused first version usually takes a few months from discovery to store release, longer for apps with complex backends or many roles. We plan releases so a useful version reaches users early.",
      },
      {
        q: "Can you build the backend and admin panel too?",
        a: "Yes. We build APIs, databases, authentication and admin tools, or integrate with your existing backend and third-party services.",
      },
      {
        q: "Do you design the app as well as build it?",
        a: "Yes. Mobile UX and interface design are part of the process, so flows are tested before development and the shipped app matches the design.",
      },
      {
        q: "Do you build apps for startups across India?",
        a: "Yes. We work remotely with founders and product teams in any Indian city, from first-version scoping to launch and post-launch improvements. Many projects start as a focused first version that we extend once real usage data comes in.",
      },
      {
        q: "Should we build for Android first in India?",
        a: "Often, yes, because Android has most of the market. With React Native we can usually ship Android and iOS together at little extra cost. If budget is tight, launching on Android first and adding iOS later is a reasonable path we can plan for.",
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
    seoTitle: "AI Automation Agency in India | Workflows & AI Agents",
    metaDescription: "AI automation agency serving businesses across India: workflow automation, AI agents, CRM automation, document processing and integrations with your tools.",
    india: {
      "eyebrow": "AI automation agency in India",
      "h1": "Less repetitive work. More room to move.",
      "heading": "Automation that fits how Indian teams already work",
      "intro": [
            "Many Indian businesses run on a mix of spreadsheets, WhatsApp groups, email and a CRM or ERP that nobody fully trusts. We work with teams across India, remotely, to find the repetitive steps in that mix and automate them, sometimes with AI and often without it.",
            "AI is the right tool when a step involves reading unstructured input like emails, documents, chats or forms and deciding what to do next. Plain workflow automation is better, cheaper and more predictable when the rules are already clear. We say which one a process needs before building anything."
      ],
      "points": [
            {
                  "title": "Lead capture and qualification",
                  "body": "Enquiries from your website, ads and WhatsApp collected in one place, enriched, scored and routed to the right person, with follow-ups that go out on time."
            },
            {
                  "title": "Documents and data entry",
                  "body": "Invoices, purchase orders, KYC documents and forms read and extracted into your systems, with a person reviewing anything the system isn't confident about."
            },
            {
                  "title": "Support and operations",
                  "body": "Ticket triage, order-status answers and internal requests handled automatically, escalating to your team with full context when needed."
            },
            {
                  "title": "Human approval where it matters",
                  "body": "Consequential actions such as payments, refunds or customer-facing messages can require a person's approval. Every run is logged so you can see what happened."
            }
      ]
},
    definition: {
          "question": "What is AI automation?",
          "answer": [
                "AI automation uses language models and other AI components inside business workflows to handle work that rules alone cannot: reading emails and documents, classifying requests, drafting replies, extracting data and deciding the next step. It is combined with conventional automation, APIs and human approval so each step is reliable and auditable.",
                "We start by mapping a process and deciding which steps should stay deterministic, which benefit from AI and where a person should approve. Then we build the integrations, evaluation and monitoring that keep the workflow accurate after launch."
          ]
    },
    audience: [
          "Teams spending hours on repetitive email, document or data-entry work",
          "Sales and support teams that need faster routing and responses",
          "Businesses with processes spread across CRM, spreadsheets and inboxes",
          "Companies exploring AI agents but needing guardrails and measurable results"
    ],
    useCases: [
          {
                "title": "Document and email processing",
                "body": "Extracting data from invoices, forms and emails, validating it and writing it to your systems."
          },
          {
                "title": "Lead qualification and routing",
                "body": "Enriching and scoring enquiries, routing them to the right person and drafting first responses."
          },
          {
                "title": "Customer support automation",
                "body": "Triage, suggested replies and self-service answers grounded in your own documentation."
          },
          {
                "title": "AI agents with approvals",
                "body": "Multi-step agents that use your tools within defined permissions, budgets and approval rules."
          }
    ],
    guides: [
          "ai-workflow-automation",
          "business-process-automation",
          "ai-agent-development",
          "when-to-automate-a-business-process",
          "best-ai-automation-agencies-in-india",
          "how-to-choose-an-ai-automation-agency"
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
      {
        q: "How do we know if a process is worth automating with AI?",
        a: "Good candidates are frequent, time-consuming, reasonably stable and tolerant of a review step. We assess volume, error cost and data availability before building, and sometimes recommend simpler non-AI automation.",
      },
      {
        q: "Is our data safe when using AI models?",
        a: "We use providers and settings that match your data rules, minimise what is sent to models, keep permissions enforced in your systems and avoid storing sensitive data in prompts or logs.",
      },
      {
        q: "How do you measure whether automation is working?",
        a: "We define success metrics before building, such as time saved, accuracy and escalation rates, test against real examples and monitor quality and cost after launch.",
      },
      {
        q: "Can AI automation work with our existing tools?",
        a: "Usually yes. We connect to CRMs, help desks, email, spreadsheets and internal systems through APIs, webhooks or integration platforms.",
      },
      {
        q: "Do you build AI automations for businesses across India?",
        a: "Yes. We work remotely with businesses in any Indian city, starting with a review of the workflows that take the most time, then building and monitoring the automations that are worth it.",
      },
      {
        q: "Is our data safe if we use AI automation?",
        a: "We design automations so only the data a step needs is sent to an AI model, use providers and settings that don't train on your data where available, keep access scoped and log every run. We also discuss obligations under India's data protection law with you before handling personal data.",
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
    seoTitle: "UI/UX Design Agency in India | Product Design",
    metaDescription: "UI/UX design agency serving businesses across India: user research, flows, wireframes, prototypes, interface design, design systems and UX audits.",
    india: {
      "eyebrow": "UI/UX design agency in India",
      "h1": "Digital products should feel as good as they work.",
      "heading": "Design for the full range of people who use your product",
      "intro": [
            "Good UX connects what users are trying to do with what the business needs them to do. Design that only looks good tends to fail on both. We work with startups, SaaS teams and established businesses across India, remotely, on research, flows, interfaces and design systems.",
            "Designing for Indian users means designing for range: first-time internet users and power users, English and regional languages, small screens and slow networks. We design and test for that range, not just for the team building the product."
      ],
      "points": [
            {
                  "title": "Research with real users",
                  "body": "Interviews, usability tests and analytics reviews, so design decisions rest on what people actually do rather than internal opinion."
            },
            {
                  "title": "Clear flows before polish",
                  "body": "User flows and wireframes agreed before visual design, which is where most usability problems are cheapest to fix."
            },
            {
                  "title": "Language and literacy aware",
                  "body": "Layouts that hold up when text is translated, plain-language copy and icons that don't rely on English to make sense."
            },
            {
                  "title": "Design systems that scale",
                  "body": "Components, tokens and documentation your developers can build from directly, so the product stays consistent as it grows."
            }
      ]
},
    definition: {
          "question": "What is UI/UX design?",
          "answer": [
                "UX (user experience) design shapes how a product works: understanding users, structuring information, designing user flows and testing whether people can complete their tasks. UI (user interface) design shapes how it looks and feels: layout, typography, colour, components and interaction details.",
                "Good product design combines both and connects them to business goals and engineering. We design in Figma with a component system that maps to code, so designs ship as intended and new screens stay consistent."
          ]
    },
    audience: [
          "SaaS and product teams planning a new product or major feature",
          "Businesses whose website or app is hard to use or inconsistent",
          "Teams without in-house designers who need design and development together",
          "Companies preparing a redesign who want evidence before changing everything"
    ],
    useCases: [
          {
                "title": "Product and SaaS design",
                "body": "Research, flows, prototypes and interfaces for dashboards, onboarding and core product journeys."
          },
          {
                "title": "Website and app redesigns",
                "body": "Clearer structure and interface for existing products, based on audits and user evidence."
          },
          {
                "title": "Design systems",
                "body": "Tokens, components and documentation shared by design and development."
          },
          {
                "title": "UX audits",
                "body": "Heuristic reviews and usability findings prioritised by impact and effort."
          }
    ],
    guides: [
          "ui-ux-design-guide",
          "product-design-process",
          "ux-audit",
          "design-systems-for-teams-that-move-fast",
          "best-ui-ux-design-agencies-in-india",
          "how-to-choose-a-ui-ux-design-agency"
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
      {
        q: "What is the difference between UI and UX design?",
        a: "UX covers how a product works and whether people can achieve their goals; UI covers the visual and interactive layer. We handle both, because a clear flow still fails with a confusing interface and vice versa.",
      },
      {
        q: "Do you do user research?",
        a: "Yes, scaled to the project: stakeholder interviews, user interviews, analytics review, usability testing of prototypes and reviewing support feedback.",
      },
      {
        q: "What do we receive at the end of a design project?",
        a: "Figma files with organised components, prototypes of key flows, a design system or style guide and documentation for development, or a built product if we also develop it.",
      },
      {
        q: "Can you run a UX audit of our existing product?",
        a: "Yes. A UX audit reviews key journeys against usability heuristics, accessibility and analytics, and produces prioritised recommendations.",
      },
      {
        q: "Do you work with product teams across India?",
        a: "Yes. We work remotely with startups, SaaS companies and businesses in any Indian city, from a single UX audit to ongoing product design alongside your developers.",
      },
      {
        q: "Do you design for regional languages?",
        a: "Yes. We design layouts and components that handle longer or differently structured text, and plan content so a regional-language version can be added without redesigning screens.",
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
    seoTitle: "Shopify Development Company in India | Stores & Themes",
    metaDescription: "Shopify development company serving brands across India: store builds, custom themes and sections, redesigns, app integrations, speed and conversion work.",
    india: {
      "eyebrow": "Shopify development company in India",
      "h1": "Shopify experiences built to make buying easier.",
      "heading": "Shopify stores for Indian D2C and retail brands",
      "intro": [
            "A good Shopify store is more than a nice theme. It is fast on mobile, makes products easy to find and compare, answers delivery and returns questions before they become doubts, and gets out of the way at checkout. We build and improve Shopify stores for brands across India, remotely.",
            "Selling in India brings specific requirements: cash on delivery and UPI expectations, pin-code-level delivery promises, GST-ready invoicing and a shopping journey that often starts on Instagram or WhatsApp. We plan the store around those from the start instead of bolting on apps later."
      ],
      "points": [
            {
                  "title": "Payments and COD, configured properly",
                  "body": "UPI, cards, wallets and cash on delivery set up through your payment provider and Shopify's settings, with clear rules so COD doesn't quietly erode margins."
            },
            {
                  "title": "Delivery promises customers trust",
                  "body": "Pin-code checks, delivery estimates and shipping integrations so buyers know when an order will arrive before they pay."
            },
            {
                  "title": "Fewer apps, faster pages",
                  "body": "We audit the app stack and build custom sections where an app would slow the theme, because speed on mobile is what most Indian shoppers notice first."
            },
            {
                  "title": "Built for social-led traffic",
                  "body": "Landing pages, collections and product pages designed for visitors arriving from Instagram, WhatsApp and marketplaces, not only from the homepage."
            }
      ]
},
    definition: {
          "question": "What does Shopify development involve?",
          "answer": [
                "Shopify development is building and improving stores on Shopify: theme development and customisation in Liquid, custom sections merchants can edit, product and collection templates, app and system integrations, performance work and, for some brands, headless storefronts with Hydrogen.",
                "Shopify handles hosting, checkout and core commerce, so development focuses on the shopping experience, speed, merchandising flexibility and how the store connects to marketing, inventory and fulfilment systems."
          ]
    },
    audience: [
          "Brands launching on Shopify or migrating from another platform",
          "Growing stores whose theme has become slow or hard to change",
          "Teams that want custom sections without depending on developers for every page",
          "D2C brands focused on product pages, conversion and repeat purchase"
    ],
    useCases: [
          {
                "title": "New store builds",
                "body": "Theme selection or custom theme, product structure, collections, apps and launch checklist."
          },
          {
                "title": "Theme customisation and custom sections",
                "body": "Flexible sections and templates so merchandisers can build pages themselves."
          },
          {
                "title": "Store redesigns",
                "body": "Improving navigation, product pages and mobile experience without losing SEO or data."
          },
          {
                "title": "Speed and conversion work",
                "body": "Reducing app and script bloat and improving product, cart and checkout journeys."
          }
    ],
    guides: [
          "shopify-store-development",
          "shopify-theme-development",
          "shopify-development-cost",
          "shopify-store-redesign-guide",
          "best-shopify-development-agencies-in-india",
          "how-to-choose-a-shopify-development-agency"
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
      {
        q: "How much does Shopify development cost?",
        a: "Cost depends on whether you use and customise an existing theme or build a custom one, the number of templates, integrations and migration work. Our Shopify development cost guide explains the drivers; we estimate after a short scoping call.",
      },
      {
        q: "Should we use a theme or a custom Shopify theme?",
        a: "A well-chosen theme with custom sections suits many stores. A custom theme makes sense when the brand experience, performance goals or merchandising needs outgrow what themes support.",
      },
      {
        q: "Can you speed up our Shopify store?",
        a: "Usually. We audit apps, scripts, images and theme code, remove what is unused and fix the heaviest issues, then measure Core Web Vitals before and after.",
      },
      {
        q: "Do you work with Shopify Plus?",
        a: "Yes, including stores using Shopify Plus features. Platform features change, so we confirm current capabilities against Shopify's documentation during scoping.",
      },
      {
        q: "Do you work with Shopify brands across India?",
        a: "Yes. We work remotely with D2C and retail brands in any Indian city on new stores, redesigns, theme development, integrations and conversion improvements.",
      },
      {
        q: "Can you set up COD, UPI and GST invoicing on Shopify?",
        a: "Yes. These are configured through Shopify's settings, your payment provider and invoicing apps or integrations. We set them up, test the flows end to end and document how they work for your team.",
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
        body: "You receive a clear, prioritized report your team can act on immediately, with or without ZSpace Labs implementing it.",
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
    seoTitle: "CRO Agency in India | Conversion Rate Optimisation",
    metaDescription: "CRO agency serving businesses across India: conversion audits, funnel and checkout analysis, landing page and product page optimisation and A/B testing.",
    india: {
      "eyebrow": "CRO agency in India",
      "h1": "Make more of the traffic you already have.",
      "heading": "Conversion work grounded in your own data",
      "intro": [
            "Most sites lose buyers to a handful of avoidable problems: slow mobile pages, unclear offers, missing delivery or returns information, and checkouts that ask for too much. We find those problems in your own analytics and recordings, then fix the ones that matter most. We work with stores and businesses across India, remotely.",
            "We don't promise percentage lifts before seeing your data. A good CRO engagement starts with measurement, because many apparent conversion problems turn out to be tracking problems. Then it moves to clear hypotheses and, where traffic allows, controlled tests."
      ],
      "points": [
            {
                  "title": "Mobile checkout first",
                  "body": "For most Indian stores, mobile is where the money is lost: payment options, COD rules, OTP steps and form fields are reviewed on real phones."
            },
            {
                  "title": "Trust and delivery clarity",
                  "body": "Delivery estimates, return policies and payment security made visible where hesitation happens, not hidden in the footer."
            },
            {
                  "title": "Measurement you can rely on",
                  "body": "GA4 events, funnel definitions and data quality checked before any recommendations, so decisions rest on numbers that are right."
            },
            {
                  "title": "Tests sized to your traffic",
                  "body": "A/B tests where you have the traffic to reach a result. Where you don't, we use prioritised fixes and before-and-after measurement instead."
            }
      ]
},
    definition: {
          "question": "What is a CRO audit?",
          "answer": [
                "Conversion rate optimisation (CRO) is the practice of finding and removing the friction that stops visitors from taking action: enquiring, signing up or buying. A CRO audit is a structured review of your funnel, analytics, page experience and checkout that identifies where and why people drop off.",
                "Our audits combine analytics review, heuristic UX evaluation, mobile and speed checks and, where data allows, session and heatmap evidence. The output is a prioritised list of fixes and test ideas ranked by expected impact and effort."
          ]
    },
    audience: [
          "Stores and websites with steady traffic but disappointing conversion",
          "Shopify brands preparing a redesign who want evidence first",
          "Teams running ads who need landing pages that convert",
          "Businesses without in-house CRO or analytics specialists"
    ],
    useCases: [
          {
                "title": "Ecommerce and Shopify audits",
                "body": "Product pages, collections, cart, checkout, mobile and trust signals reviewed end to end."
          },
          {
                "title": "Lead-generation website audits",
                "body": "Forms, calls to action, page structure and enquiry routing for service businesses."
          },
          {
                "title": "Landing page optimisation",
                "body": "Message match, structure and form design for paid and campaign traffic."
          },
          {
                "title": "Testing roadmaps",
                "body": "Hypotheses, test design and measurement plans your team can run."
          }
    ],
    guides: [
          "shopify-cro-guide",
          "ecommerce-cro-audit",
          "shopify-cro-audit",
          "ux-audit",
          "best-cro-agencies-in-india",
          "how-to-choose-a-cro-agency"
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
      {
        q: "What is a good conversion rate?",
        a: "It varies widely by industry, traffic source, price point and device, so averages are a weak target. We focus on your own funnel: where people drop off, and how each step compares over time.",
      },
      {
        q: "Do we need lots of traffic for CRO?",
        a: "A/B testing needs enough traffic for reliable results, but audits, usability fixes and analytics improvements help sites of any size. We recommend testing only where traffic supports it.",
      },
      {
        q: "What is the difference between a CRO audit and a UX audit?",
        a: "A UX audit focuses on usability and experience; a CRO audit connects those findings to funnel data and business outcomes and prioritises fixes by likely conversion impact.",
      },
      {
        q: "Can you also run A/B tests?",
        a: "Yes. We can design and run tests, or provide a roadmap and specifications for your team.",
      },
      {
        q: "Do you run CRO for businesses across India?",
        a: "Yes. We work remotely with ecommerce brands, SaaS companies and lead-generation businesses in any Indian city, starting with an audit and moving to implementation and testing.",
      },
      {
        q: "How much traffic do we need for A/B testing?",
        a: "It depends on your current conversion rate and the size of change you want to detect. Lower-traffic sites usually can't reach reliable test results in a reasonable time. For them we prioritise high-confidence fixes and measure before and after instead of running underpowered tests.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
