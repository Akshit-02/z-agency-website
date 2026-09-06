import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Understanding the business, the users, and the real opportunity.",
    details: [
      "Stakeholder interviews and goal alignment",
      "Audit of existing product, site, or systems",
      "Competitive and market context",
    ],
  },
  {
    number: "02",
    title: "Strategy",
    description: "Defining the product, technology approach, and roadmap.",
    details: [
      "Scope and success metrics defined",
      "Technical architecture decisions",
      "Timeline and milestone planning",
    ],
  },
  {
    number: "03",
    title: "Design",
    description: "Creating experiences that are intuitive and built to perform.",
    details: [
      "Wireframes and information architecture",
      "Visual design and prototyping",
      "Stakeholder review cycles",
    ],
  },
  {
    number: "04",
    title: "Build",
    description: "Developing scalable, production-grade software.",
    details: [
      "Iterative development in visible sprints",
      "Code review and QA throughout",
      "Weekly progress check-ins",
    ],
  },
  {
    number: "05",
    title: "Launch",
    description: "Testing, hardening, and shipping with confidence.",
    details: [
      "Cross-device and edge-case testing",
      "Performance and security checks",
      "Staged rollout and monitoring",
    ],
  },
  {
    number: "06",
    title: "Grow",
    description: "Supporting and improving the product as the business evolves.",
    details: [
      "Post-launch monitoring and iteration",
      "Ongoing support retainers available",
      "Roadmap planning for what's next",
    ],
  },
];
