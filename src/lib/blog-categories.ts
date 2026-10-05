/**
 * Topic hubs for the blog. Each category maps to a crawlable hub page at
 * /blogs/category/[slug] with an introduction, a link to the matching
 * service and hand-picked starting guides, followed by every article in
 * the category.
 */

export type BlogCategoryMeta = {
  slug: string;
  name: string; // must match BlogPost.category exactly
  title: string;
  description: string;
  intro: string[];
  serviceSlug: string;
  serviceLabel: string;
  startHere: string[];
};

export const blogCategories: BlogCategoryMeta[] = [
  {
    slug: "web-development",
    name: "Web Development",
    title: "Website Development Guides",
    description:
      "Guides to planning, building and running business websites and web apps: costs, Next.js and React, performance, security, CMS choices and migrations.",
    intro: [
      "These guides cover the decisions behind a business website or web application: what it should cost, how the build process works, which frameworks and content systems fit, and how to keep the site fast, secure and easy to change after launch.",
      "Start with the overview guides below, then use the full list to go deeper into architecture, integrations, performance, migrations and ecommerce engineering.",
    ],
    serviceSlug: "website-development",
    serviceLabel: "Website development services",
    startHere: ["website-development-guide", "website-development-cost", "website-development-process", "nextjs-website-development", "website-performance-optimization", "website-redesign-vs-rebuild", "best-web-development-agencies-in-india"],
  },
  {
    slug: "mobile-apps",
    name: "Mobile Apps",
    title: "Mobile App Development Guides",
    description:
      "Guides to building iOS and Android apps: costs and timelines, native vs cross-platform, React Native, architecture, backends, security, testing and maintenance.",
    intro: [
      "These guides explain how mobile apps are planned, built and maintained: realistic costs and timelines, choosing between native and cross-platform development, app architecture and backends, and what it takes to keep an app secure and up to date.",
    ],
    serviceSlug: "mobile-app-development",
    serviceLabel: "Mobile app development services",
    startHere: ["mobile-app-development-guide", "mobile-app-development-cost", "native-vs-cross-platform-app-development", "react-native-app-development", "mobile-app-architecture", "mobile-app-maintenance", "best-mobile-app-development-companies-in-india"],
  },
  {
    slug: "shopify-ecommerce",
    name: "Shopify & Ecommerce",
    title: "Shopify and Ecommerce Guides",
    description:
      "Shopify and ecommerce guides: store development, themes, redesigns, speed, integrations, payments, fulfilment, product data and conversion-focused store design.",
    intro: [
      "These guides cover building and running online stores, with a focus on Shopify: store and theme development, redesigns, app and system integrations, performance, payments, product data and the operational side of ecommerce.",
      "Conversion-specific topics are collected in the CRO hub, and store design and UX topics in the UI/UX hub.",
    ],
    serviceSlug: "shopify-development",
    serviceLabel: "Shopify development services",
    startHere: ["shopify-store-development", "shopify-theme-development", "shopify-development-cost", "shopify-store-redesign-guide", "shopify-core-web-vitals-performance-guide", "shopify-plus-vs-shopify", "best-shopify-development-agencies-in-india"],
  },
  {
    slug: "ui-ux",
    name: "UI/UX",
    title: "UI/UX and Product Design Guides",
    description:
      "UI/UX and product design guides: research, user flows, design systems, accessibility, UX audits, SaaS and mobile design, ecommerce UX and AI product design.",
    intro: [
      "These guides cover how digital products are designed: research and user flows, interface principles, design systems, accessibility, UX audits, and design patterns for SaaS products, mobile apps, online stores and AI features.",
    ],
    serviceSlug: "ui-ux-design",
    serviceLabel: "UI/UX design services",
    startHere: ["ui-ux-design-guide", "product-design-process", "ux-audit", "design-systems-for-teams-that-move-fast", "accessible-ui-ux-design", "ai-product-design", "best-ui-ux-design-agencies-in-india"],
  },
  {
    slug: "ai-automation",
    name: "AI & Automation",
    title: "AI Automation and AI Development Guides",
    description:
      "AI automation guides: workflow and process automation, AI agents, RAG, MCP, document processing, LLMOps, AI security, data engineering and industry use cases.",
    intro: [
      "These guides explain how businesses put AI and automation to work: when a process is worth automating, how AI workflows and agents are built and secured, how retrieval and integrations work, and how AI applications are evaluated and operated in production.",
      "Industry guides show how the same techniques apply to finance, healthcare, real estate, manufacturing and other sectors.",
    ],
    serviceSlug: "ai-automation",
    serviceLabel: "AI automation services",
    startHere: ["ai-workflow-automation", "business-process-automation", "ai-agent-development", "when-to-automate-a-business-process", "retrieval-augmented-generation", "llmops", "best-ai-automation-agencies-in-india"],
  },
  {
    slug: "cro",
    name: "CRO",
    title: "Conversion Rate Optimisation (CRO) Guides",
    description:
      "Conversion rate optimisation guides: CRO audits, landing pages, product pages, checkout, testing roadmaps, analytics and Shopify conversion improvements.",
    intro: [
      "These guides cover finding and fixing the friction that stops visitors from converting: CRO audits, funnel analysis, landing and product pages, checkout, A/B testing and the measurement needed to know whether changes worked.",
    ],
    serviceSlug: "cro-audit",
    serviceLabel: "CRO audit services",
    startHere: ["shopify-cro-guide", "ecommerce-cro-audit", "shopify-cro-audit", "shopify-checkout-optimization", "ecommerce-cro-testing-roadmap", "shopify-cro-checklist", "best-cro-agencies-in-india"],
  },
];

export function getCategoryBySlug(slug: string) {
  return blogCategories.find((c) => c.slug === slug);
}

export function getCategoryByName(name: string) {
  return blogCategories.find((c) => c.name === name);
}
