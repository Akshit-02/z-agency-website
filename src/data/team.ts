export type TeamRole = {
  role: string;
  focus: string;
};

/** Structured by role rather than fabricated bios — replace with real team members as hires are made public. */
export const teamRoles: TeamRole[] = [
  { role: "Strategy & Product", focus: "Scoping, positioning, and making sure we build the right thing" },
  { role: "Design", focus: "Product, brand, and interface design grounded in research" },
  { role: "Engineering", focus: "Web, mobile, and backend systems built to scale" },
  { role: "AI & Automation", focus: "Applied AI, agents, and workflow systems" },
];

export const values = [
  {
    title: "Say the honest thing",
    description:
      "If a feature won't help, we say so before it's built, not after it's billed. Clients keep coming back because they trust what we tell them.",
  },
  {
    title: "Understand before you propose",
    description:
      "We'd rather spend an extra week in discovery than guess our way into the wrong solution.",
  },
  {
    title: "Ship things that hold up",
    description:
      "Code and design that someone else can maintain after us. We build like we're not the only ones who'll ever touch it.",
  },
  {
    title: "Complexity is a cost, not a flex",
    description:
      "The simplest system that solves the actual problem wins, even when a more impressive-sounding one is available.",
  },
];
