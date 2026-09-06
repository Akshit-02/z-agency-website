import {
  Globe,
  Smartphone,
  ShoppingBag,
  Sparkles,
  Workflow,
  PenTool,
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "website-development",
    name: "Website Development",
    shortName: "Websites",
    tagline: "Sites built to load fast, rank well, and convert.",
    prompt: "I need a website that actually works.",
    description:
      "We design and build corporate sites, startup homepages, SaaS marketing sites, and custom web applications on modern frameworks — the kind that hold up under real traffic and don't need a rebuild in eighteen months.",
    icon: Globe,
    color: "ink",
    capabilities: [
      "Corporate and brand websites",
      "Startup and product launch sites",
      "SaaS marketing sites",
      "High-converting landing pages",
      "Custom web applications",
      "E-commerce storefronts",
      "Web app dashboards and portals",
      "Website migrations and rebuilds",
    ],
    problems: [
      {
        title: "The current site doesn't reflect where the business is now",
        description:
          "Most rebuilds start here — a company outgrew its site two product launches ago, and the gap between what the business does and what the homepage says is starting to cost deals.",
      },
      {
        title: "Traffic is coming in, but it isn't converting",
        description:
          "Analytics look fine, pipeline doesn't. Usually it's a messaging problem or a friction problem, and both are fixable with the right diagnosis before a single line of code changes.",
      },
      {
        title: "The site is slow, hard to update, or both",
        description:
          "Legacy page builders and bloated CMS setups make small edits take days. We rebuild on infrastructure your team can actually operate.",
      },
    ],
    approach: [
      {
        title: "We start with the business case, not the homepage",
        description:
          "Before any design work, we get clear on who the site needs to convince and what they need to believe by the time they leave the page.",
      },
      {
        title: "Content and structure before visuals",
        description:
          "We map the information architecture and write real copy early, so the design is solving a communication problem instead of decorating placeholder text.",
      },
      {
        title: "Built on infrastructure that scales with you",
        description:
          "Next.js, a proper CMS where needed, and hosting that doesn't fall over during a launch or a press mention.",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Sanity / Contentful",
      "Vercel",
      "Node.js",
    ],
    deliverables: [
      "Discovery and content strategy",
      "Information architecture and wireframes",
      "Visual design system",
      "Responsive, accessible front-end build",
      "CMS setup for your team",
      "Performance and SEO baseline",
      "Analytics and tracking setup",
    ],
    faqs: [
      {
        question: "How long does a typical website project take?",
        answer:
          "A focused marketing site usually runs 4 to 7 weeks from kickoff to launch. A larger custom web application with a CMS and integrations is closer to 8 to 14 weeks. We'll give you a real timeline after scoping, not a placeholder number.",
      },
      {
        question: "Will I be able to update the site myself after launch?",
        answer:
          "Yes. We build most sites on a CMS your team can use without touching code — for copy, images, blog posts, and new pages. Anything structurally new still goes through us, which is normal for any custom build.",
      },
      {
        question: "Do you write the copy, or do we need to provide it?",
        answer:
          "Both models work. Some clients bring finished copy, others want us to write it based on positioning workshops. We'll tell you upfront which makes sense for your project and timeline.",
      },
      {
        question: "Can you migrate an existing site without losing SEO rankings?",
        answer:
          "Yes, this is a standard part of our process for rebuilds — redirect mapping, metadata parity, and a staged rollout so search visibility carries over instead of resetting.",
      },
    ],
    relatedCaseStudySlugs: ["northgate-capital", "lumen-health", "fieldworks-logistics"],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    shortName: "Mobile Apps",
    tagline: "iOS, Android, and cross-platform apps that ship on schedule.",
    prompt: "I have an app idea I can't stop thinking about.",
    description:
      "From a first MVP to an enterprise-grade release, we build native and cross-platform mobile applications with the architecture decisions made upfront, not discovered the hard way during App Store review.",
    icon: Smartphone,
    color: "coral",
    capabilities: [
      "iOS application development",
      "Android application development",
      "Cross-platform apps with React Native",
      "Startup MVP development",
      "Enterprise mobile applications",
      "App modernization and rebuilds",
      "Backend and API architecture",
      "App Store and Play Store launch support",
    ],
    problems: [
      {
        title: "You need to validate an idea before over-investing",
        description:
          "Most startups don't need a five-platform app on day one. We help you scope an MVP that tests the real hypothesis without burning your runway on features nobody's asked for yet.",
      },
      {
        title: "The existing app is slow, buggy, or hard to extend",
        description:
          "Technical debt in mobile compounds fast. We audit the codebase honestly and tell you whether to refactor or rebuild — and why.",
      },
      {
        title: "One platform needs to become two",
        description:
          "Going from iOS-only to iOS and Android (or vice versa) is a common inflection point. We plan the shared architecture so you're not maintaining two separate products.",
      },
    ],
    approach: [
      {
        title: "Architecture decisions happen before the first screen",
        description:
          "Native versus cross-platform, offline support, push infrastructure, and data sync strategy get decided with your product and growth plans in mind, not by default.",
      },
      {
        title: "We design for the platform, not just the brand",
        description:
          "An app that feels native to iOS and Android individually performs better than one that looks identical everywhere and belongs nowhere.",
      },
      {
        title: "Built for App Store approval the first time",
        description:
          "We know the review guidelines that trip up first-time submissions and design around them from the start.",
      },
    ],
    technologies: [
      "React Native",
      "Swift",
      "Kotlin",
      "Flutter",
      "Node.js",
      "Firebase",
      "GraphQL",
    ],
    deliverables: [
      "Product scoping and technical architecture",
      "UI/UX design for iOS and Android",
      "Native or cross-platform development",
      "API and backend integration",
      "QA across device matrix",
      "App Store and Play Store submission",
      "Post-launch monitoring setup",
    ],
    faqs: [
      {
        question: "Should we build native or cross-platform?",
        answer:
          "It depends on your feature set, budget, and how much of the experience is platform-specific (camera-heavy, hardware-heavy apps often lean native). We'll recommend one honestly after understanding your product, not sell you on whichever we prefer building.",
      },
      {
        question: "How much does an MVP cost?",
        answer:
          "It's driven entirely by scope. A focused single-platform MVP with a handful of core flows is a very different project than a multi-role marketplace app. We scope before quoting.",
      },
      {
        question: "Do you handle App Store submission?",
        answer:
          "Yes, including account setup guidance, listing assets, and resolving review feedback if Apple or Google pushes back on the first submission.",
      },
      {
        question: "What happens after launch?",
        answer:
          "We offer ongoing support retainers for bug fixes, OS updates, and new features. Some clients bring development in-house post-launch and we hand off a clean, documented codebase instead.",
      },
    ],
    relatedCaseStudySlugs: ["ridewell-mobility", "lumen-health"],
  },
  {
    slug: "shopify-development",
    name: "Shopify Development",
    shortName: "Shopify",
    tagline: "Stores engineered to sell, not just to look good.",
    prompt: "I want to sell online without looking like everyone else.",
    description:
      "Custom Shopify builds, theme development, and conversion-focused redesigns for brands that have outgrown template themes and need a store that matches their growth stage.",
    icon: ShoppingBag,
    color: "yellow",
    capabilities: [
      "Custom Shopify store builds",
      "Shopify theme development",
      "Store redesigns and migrations",
      "Shopify Plus implementations",
      "Custom app and integration development",
      "Checkout and conversion optimization",
      "Subscription and membership setups",
      "Performance and Core Web Vitals tuning",
    ],
    problems: [
      {
        title: "The store looks generic and undifferentiated",
        description:
          "Off-the-shelf themes cap how distinct a store can look. We build custom sections and layouts that carry your brand instead of the theme's default identity.",
      },
      {
        title: "Traffic is healthy but conversion rate isn't",
        description:
          "Usually a mix of page speed, product page clarity, and checkout friction. We diagnose with real data before touching design.",
      },
      {
        title: "Growth has outpaced what the current setup can handle",
        description:
          "Inventory complexity, international selling, or B2B wholesale needs often mean a migration to Shopify Plus with custom app logic underneath.",
      },
    ],
    approach: [
      {
        title: "We treat the store as a conversion system, not a template",
        description:
          "Every section on a product and collection page earns its place by answering an objection or building buyer confidence.",
      },
      {
        title: "Custom where it matters, standard where it doesn't",
        description:
          "We build custom functionality for what differentiates you and rely on proven Shopify patterns everywhere else, which keeps the build faster and more maintainable.",
      },
      {
        title: "Speed is a design constraint, not an afterthought",
        description:
          "Every app and section is evaluated for its performance cost before it ships, because slow product pages lose sales quietly.",
      },
    ],
    technologies: [
      "Shopify Liquid",
      "Shopify Hydrogen",
      "React",
      "Shopify Plus",
      "Klaviyo",
      "Shopify Functions",
      "REST & GraphQL Admin API",
    ],
    deliverables: [
      "Store architecture and app audit",
      "Custom theme design and development",
      "Product and collection page systems",
      "Checkout and post-purchase optimization",
      "Third-party integrations",
      "Migration from other platforms",
      "Performance and speed optimization",
    ],
    faqs: [
      {
        question: "Do we need Shopify Plus?",
        answer:
          "Only if you need checkout customization, multiple storefronts, or high-volume wholesale features. Standard Shopify covers most brands well past seven figures in revenue. We'll tell you if Plus is actually necessary.",
      },
      {
        question: "Can you migrate our store from WooCommerce or Magento?",
        answer:
          "Yes. Migrations include product, customer, and order data, redirect mapping to protect SEO, and a staged cutover so the store never goes dark.",
      },
      {
        question: "Will a custom theme slow down our page speed?",
        answer:
          "Done right, custom themes are usually faster than app-heavy template themes, because we control exactly what loads instead of inheriting a theme's default bloat.",
      },
      {
        question: "Do you build custom Shopify apps?",
        answer:
          "Yes, when a workflow genuinely needs logic outside what Shopify or existing apps support — custom pricing rules, B2B portals, or bespoke fulfillment logic.",
      },
    ],
    relatedCaseStudySlugs: ["kindred-goods", "fieldworks-logistics"],
  },
  {
    slug: "ai-solutions",
    name: "AI Solutions",
    shortName: "AI Solutions",
    tagline: "AI applied where it removes real work, not for its own sake.",
    prompt: "I want AI to do more than generate text.",
    description:
      "We build AI-powered features, integrations, and standalone applications — from customer-facing agents to internal tools — grounded in what a model can reliably do today, not marketing claims about what it might do eventually.",
    icon: Sparkles,
    color: "blue",
    capabilities: [
      "AI-powered product features",
      "LLM integration into existing products",
      "Custom AI agents and assistants",
      "Generative AI applications",
      "Retrieval-augmented systems over internal data",
      "Business intelligence and reporting tools",
      "Model evaluation and prompt engineering",
      "AI feature discovery workshops",
    ],
    problems: [
      {
        title: "Leadership wants \"an AI feature\" without a defined use case",
        description:
          "We run a short discovery process to find the two or three places AI actually reduces cost or improves an outcome in your product, and we say no to the rest.",
      },
      {
        title: "An AI feature works in the demo but not in production",
        description:
          "The gap between a prompt that works once and a system that works reliably at scale is where most AI projects stall. That gap is most of what we're hired to close.",
      },
      {
        title: "Internal teams are drowning in manual data work",
        description:
          "Reporting, research, and document review are common places where a well-scoped AI tool returns hours to a team every week.",
      },
    ],
    approach: [
      {
        title: "We scope for reliability, not novelty",
        description:
          "Every AI feature gets evaluated against real inputs and edge cases before launch, with clear fallback behavior for when the model is uncertain.",
      },
      {
        title: "Your data stays yours",
        description:
          "We architect around your existing data infrastructure and privacy requirements rather than routing everything through a black box.",
      },
      {
        title: "Human oversight where it matters",
        description:
          "For anything customer-facing or high-stakes, we build in review points instead of full autonomy, and expand autonomy only once the system has earned it.",
      },
    ],
    technologies: [
      "OpenAI",
      "Anthropic Claude",
      "LangChain",
      "Vector databases",
      "Python",
      "Node.js",
      "RAG pipelines",
    ],
    deliverables: [
      "AI opportunity assessment",
      "Proof of concept and evaluation",
      "Production integration",
      "Prompt and retrieval architecture",
      "Monitoring and evaluation tooling",
      "Documentation and team handoff",
    ],
    faqs: [
      {
        question: "Which AI model should we build on?",
        answer:
          "It depends on the task, latency requirements, and cost profile — we regularly evaluate OpenAI, Anthropic, and open-weight models against your actual data before recommending one, rather than defaulting to whichever is trending.",
      },
      {
        question: "How do you prevent the AI from giving wrong answers?",
        answer:
          "Through retrieval grounded in your real data, evaluation sets built from real edge cases, and confidence thresholds that route uncertain answers to a human instead of guessing.",
      },
      {
        question: "Is our data used to train any models?",
        answer:
          "No, not unless you explicitly want that. We architect integrations to keep your data within your infrastructure and opt out of training on API calls by default.",
      },
      {
        question: "We're not sure AI is right for our product yet. Can you help us figure that out?",
        answer:
          "That's the most common starting point. Our discovery engagement exists specifically to separate real opportunities from AI features that would just add complexity without adding value.",
      },
    ],
    relatedCaseStudySlugs: ["northgate-capital", "meridian-education"],
  },
  {
    slug: "automation",
    name: "Automation",
    shortName: "Automation",
    tagline: "Fewer manual steps, fewer dropped handoffs.",
    prompt: "My team spends too much time on manual busywork.",
    description:
      "We design and build automation across marketing, sales, operations, and internal tooling — connecting the systems you already use so work moves without someone copying it between tabs.",
    icon: Workflow,
    color: "mint",
    capabilities: [
      "Business process automation",
      "CRM and sales workflow automation",
      "Marketing automation",
      "Internal tooling and admin systems",
      "Data pipeline and reporting automation",
      "Third-party API integrations",
      "AI-assisted workflow automation",
      "Legacy system integration",
    ],
    problems: [
      {
        title: "The same manual handoff happens every single day",
        description:
          "If a person is retyping data from one system into another, that's usually a two-to-four-week automation project with a fast payback period.",
      },
      {
        title: "Growth is creating operational strain before it creates revenue",
        description:
          "Order processing, onboarding, and support workflows that worked at 50 customers often break quietly at 500. We rebuild them to scale ahead of the strain.",
      },
      {
        title: "Data lives in five systems that don't talk to each other",
        description:
          "We build the integration layer that keeps your CRM, support tool, and finance systems in sync without a person acting as the API.",
      },
    ],
    approach: [
      {
        title: "We map the workflow before automating it",
        description:
          "Automating a broken process just breaks it faster. We document what actually happens today, including the exceptions, before building anything.",
      },
      {
        title: "Built on tools your team can maintain",
        description:
          "We favor visible, documented automation logic over deeply custom scripts that only we can understand a year from now.",
      },
      {
        title: "Exceptions get handled, not ignored",
        description:
          "Every automation includes a plan for what happens when the data is missing or malformed, so it fails safely instead of silently.",
      },
    ],
    technologies: [
      "n8n",
      "Zapier",
      "Make",
      "Node.js",
      "Python",
      "REST & Webhook APIs",
      "Airtable",
    ],
    deliverables: [
      "Process audit and mapping",
      "Automation architecture design",
      "Workflow build and integration",
      "Exception handling and monitoring",
      "Team training and documentation",
      "Ongoing optimization",
    ],
    faqs: [
      {
        question: "What kind of processes are worth automating first?",
        answer:
          "High-frequency, repetitive, low-judgment tasks — data entry, notifications, status updates, and reporting are almost always the highest-return starting points.",
      },
      {
        question: "Do you build on Zapier/Make, or fully custom?",
        answer:
          "Whichever fits the complexity and your team's ability to maintain it. Simple workflows go on no-code tools; anything with real branching logic or scale requirements gets a custom build.",
      },
      {
        question: "Will this replace the need for our current software?",
        answer:
          "Usually not — automation typically connects the systems you already use rather than replacing them, which keeps the project faster and lower-risk.",
      },
      {
        question: "How do you handle sensitive data in automated workflows?",
        answer:
          "We scope data access narrowly, avoid routing sensitive fields through unnecessary third parties, and document exactly what data moves where.",
      },
    ],
    relatedCaseStudySlugs: ["fieldworks-logistics", "northgate-capital"],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    shortName: "UI/UX Design",
    tagline: "Design decisions backed by a reason, not a trend.",
    prompt: "My product works, but nobody enjoys using it.",
    description:
      "Product design, website design, and design systems for teams that need interfaces which hold up under real usage — informed by research, not just aesthetic preference.",
    icon: PenTool,
    color: "purple",
    capabilities: [
      "Product and SaaS dashboard design",
      "Website and marketing design",
      "Mobile app design",
      "UX research and usability testing",
      "Wireframing and prototyping",
      "Design systems and component libraries",
      "Design audits of existing products",
      "Accessibility review",
    ],
    problems: [
      {
        title: "The product works but nobody enjoys using it",
        description:
          "Functional isn't the same as usable. We identify where the interface is fighting the user and redesign around the actual task flow.",
      },
      {
        title: "Design decisions are being made on opinion, not evidence",
        description:
          "We bring in lightweight research — usability sessions, session recordings, support ticket analysis — so decisions have something behind them.",
      },
      {
        title: "Every new feature makes the product feel more inconsistent",
        description:
          "A design system stops this by giving your team a shared, documented set of components and patterns to build from.",
      },
    ],
    approach: [
      {
        title: "Research informs the design, not the other way around",
        description:
          "We talk to real users and look at real usage data before proposing changes, so the design solves the actual problem instead of a guessed one.",
      },
      {
        title: "Prototype before you commit engineering time",
        description:
          "Interactive prototypes let you and your team validate a direction before a single line of production code gets written.",
      },
      {
        title: "Systems over one-off screens",
        description:
          "Every project builds toward a reusable design system, so future features stay consistent without redesigning from scratch.",
      },
    ],
    technologies: [
      "Figma",
      "Design Tokens",
      "Storybook",
      "Framer",
      "Maze",
      "Adobe Creative Suite",
    ],
    deliverables: [
      "UX research and audit",
      "User flows and wireframes",
      "High-fidelity UI design",
      "Interactive prototypes",
      "Design system and component library",
      "Developer handoff documentation",
    ],
    faqs: [
      {
        question: "Do you only design, or do you also build what you design?",
        answer:
          "Both, and we do our best work when we're doing both — but we also take on design-only engagements and hand off clean, developer-ready files and documentation.",
      },
      {
        question: "What does a design system actually include?",
        answer:
          "Typography and color tokens, a documented component library, spacing and layout rules, and usage guidelines — built in Figma and optionally in code via Storybook.",
      },
      {
        question: "How do you handle user research on a tight timeline?",
        answer:
          "Even five to eight short usability sessions surface most major issues. We scale the research method to your timeline rather than skipping it entirely.",
      },
      {
        question: "Can you redesign part of our product without a full overhaul?",
        answer:
          "Yes — most of our design engagements are scoped to a specific flow or section rather than a full product redesign, which is usually the more responsible way to do it anyway.",
      },
    ],
    relatedCaseStudySlugs: ["lumen-health", "kindred-goods", "meridian-education"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
