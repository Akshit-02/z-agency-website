import type { BlogSceneData } from "./blog-scenes";

/**
 * Realistic interface scenes for each service, drawn with the same scene
 * system as the blog covers. `seed` picks the accent colour and, for some
 * scenes, the layout variant.
 */
type ServiceScenes = { primary: BlogSceneData; secondary: BlogSceneData };

export const serviceScenes: Record<string, ServiceScenes> = {
  "website-development": {
    primary: {
      kind: "landing",
      label: "Websites that pull their weight",
      items: ["Fast, SEO-ready pages", "Editable CMS for marketing", "Integrations that just work"],
      seed: 4,
    },
    secondary: {
      kind: "speed",
      label: "Performance you can measure",
      items: ["Defer third-party scripts", "Optimise the hero image", "Ship less JavaScript"],
      seed: 8,
    },
  },
  "mobile-app-development": {
    primary: {
      kind: "mobile",
      label: "An app people come back to",
      items: ["Onboarding in three steps", "Works offline, syncs later", "Push that's actually useful", "Secure sign-in"],
      seed: 5,
    },
    secondary: {
      kind: "monitor",
      flavor: "app",
      label: "Release health · v2.4",
      items: ["Cold start time", "Checkout screen errors", "Slow image loading", "Store rating"],
      seed: 9,
    },
  },
  "shopify-development": {
    primary: {
      kind: "shopify",
      label: "Make buying the easiest part",
      items: ["Free shipping unlocked at $75", "Bundles that add value", "Clear delivery dates"],
      seed: 14,
    },
    secondary: {
      kind: "shopify",
      label: "Store performance",
      items: ["Speed up collection pages", "Audit the app stack", "Set up Shopify Markets", "Clean product data"],
      seed: 9,
    },
  },
  "ui-ux-design": {
    primary: {
      kind: "design",
      label: "Design that makes sense",
      items: ["Navigation", "Checkout flow", "Account settings"],
      seed: 6,
    },
    secondary: {
      kind: "heatmap",
      label: "Usability review · checkout",
      items: ["Primary action is unclear", "Form asks for too much", "Low-contrast labels", "Shipping cost shown late"],
      seed: 3,
    },
  },
  "ai-automation": {
    primary: {
      kind: "workflow",
      label: "Inbound lead routing",
      items: ["Enrich and score the lead", "Route to the right rep", "Update CRM and notify"],
      seed: 7,
    },
    secondary: {
      kind: "agent",
      label: "Triage new support tickets",
      items: ["Read and classify the ticket", "Look up the order", "Draft a reply", "Ask a human to approve"],
      seed: 8,
    },
  },
  "cro-audit": {
    primary: {
      kind: "abtest",
      label: "Checkout: delivery date above the fold",
      items: ["Show delivery date early", "Fewer form fields", "Express pay first"],
      seed: 1,
    },
    secondary: {
      kind: "funnel",
      label: "Checkout funnel · last 30 days",
      items: ["Viewed product", "Added to cart", "Started checkout", "Completed purchase"],
      seed: 10,
    },
  },
};

export const sceneForService = (slug: string, which: keyof ServiceScenes = "primary") =>
  (serviceScenes[slug] ?? serviceScenes["website-development"])[which];
