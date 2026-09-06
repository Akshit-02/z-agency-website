import type { TechCategory } from "@/types";

export const technologyCategories: TechCategory[] = [
  { name: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { name: "Mobile", items: ["React Native", "Flutter", "Swift", "Kotlin"] },
  { name: "Backend", items: ["Node.js", "Python", "PostgreSQL", "GraphQL"] },
  { name: "Cloud", items: ["AWS", "Vercel", "Docker", "Cloudflare"] },
  { name: "AI", items: ["OpenAI", "Anthropic Claude", "LangChain", "Vector Search"] },
  { name: "Automation", items: ["n8n", "Zapier", "Make", "Webhooks & APIs"] },
];
