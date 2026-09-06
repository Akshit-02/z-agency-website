import type { CaseStudy } from "@/types";

/**
 * Representative engagements illustrating typical scope, process, and
 * outcomes. Client names are placeholders — swap in verified case studies
 * from live engagements as they become available. See the disclosure
 * rendered on /case-studies and /case-studies/[slug].
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "northgate-capital",
    client: "Northgate Capital",
    industry: "Fintech",
    serviceSlugs: ["website-development", "ai-solutions", "automation"],
    technologies: ["Next.js", "TypeScript", "OpenAI", "AWS", "Node.js"],
    title: "A due-diligence tool that cut research time from days to hours",
    summary:
      "A private markets research platform paired with an AI-assisted document review system for a mid-size investment firm.",
    challenge:
      "Northgate's analysts were spending most of their week manually reading through data rooms — hundreds of pages of financial statements, contracts, and disclosures per deal — before they could even begin real analysis. The firm's public site also undersold their track record to prospective LPs.",
    solution:
      "We rebuilt the firm's website around a clearer investment thesis and rebuilt their internal workflow around an AI-assisted document review tool that flags key terms, inconsistencies, and risk factors across a data room, with every flag linked back to its source document for analyst verification.",
    process: [
      {
        title: "Workflow mapping",
        description:
          "We shadowed two analysts through a full deal cycle to understand exactly where time was going and where AI assistance would actually help versus get in the way.",
      },
      {
        title: "Retrieval architecture",
        description:
          "Built a document ingestion and retrieval pipeline that keeps every AI-generated flag traceable to its exact source passage.",
      },
      {
        title: "Analyst-in-the-loop design",
        description:
          "Designed the review interface so analysts stay the final decision-maker — the system surfaces and ranks, it doesn't conclude.",
      },
    ],
    results: [
      { metric: "68%", label: "Reduction in initial document review time" },
      { metric: "3.2x", label: "More deals reviewed per analyst per quarter" },
      { metric: "4 wks", label: "From kickoff to first production use" },
    ],
    year: "2025",
    heroAccent: "blue",
    gallery: 4,
  },
  {
    slug: "lumen-health",
    client: "Lumen Health",
    industry: "Healthcare",
    serviceSlugs: ["mobile-app-development", "ui-ux-design", "website-development"],
    technologies: ["React Native", "Node.js", "PostgreSQL", "Figma"],
    title: "A patient app that made a 12-minute intake form take 90 seconds",
    summary:
      "A patient-facing mobile app and redesigned intake experience for a multi-location outpatient clinic network.",
    challenge:
      "Lumen's patients were abandoning digital intake forms partway through, which pushed the work back onto front-desk staff and created delays at check-in across all nine clinic locations.",
    solution:
      "We redesigned the entire intake flow around what patients actually needed to provide at each stage, then built a native mobile app with saved profiles, appointment reminders, and a conversational intake flow that adapts based on visit type.",
    process: [
      {
        title: "Usability research at three locations",
        description:
          "Observed real patients completing intake on the old system to identify exactly where confusion and drop-off happened.",
      },
      {
        title: "Progressive intake redesign",
        description:
          "Restructured the form into short, contextual steps instead of one long document, with returning patients skipping fields already on file.",
      },
      {
        title: "Native app build and clinic rollout",
        description:
          "Phased rollout across locations with front-desk training and fallback support during the transition period.",
      },
    ],
    results: [
      { metric: "83%", label: "Reduction in average intake completion time" },
      { metric: "41%", label: "Fewer check-in delays reported by staff" },
      { metric: "9", label: "Clinic locations onboarded in the rollout" },
    ],
    year: "2024",
    heroAccent: "coral",
    gallery: 4,
  },
  {
    slug: "fieldworks-logistics",
    client: "Fieldworks Logistics",
    industry: "Logistics",
    serviceSlugs: ["automation", "website-development", "shopify-development"],
    technologies: ["n8n", "Node.js", "Shopify Plus", "REST APIs"],
    title: "Removing 30 hours a week of manual order reconciliation",
    summary:
      "End-to-end order and inventory automation connecting a Shopify Plus storefront to warehouse and freight systems.",
    challenge:
      "Fieldworks was manually reconciling orders across their storefront, warehouse management system, and freight carriers every day — a process prone to errors that occasionally shipped the wrong quantities or missed orders entirely.",
    solution:
      "We built an automation layer that syncs inventory and order status across all three systems in real time, with exception handling that flags mismatches for human review instead of failing silently or guessing.",
    process: [
      {
        title: "Systems and data audit",
        description:
          "Mapped every place order and inventory data lived and where it drifted out of sync between systems.",
      },
      {
        title: "Automation build with exception routing",
        description:
          "Built the sync logic with explicit handling for edge cases — backorders, partial shipments, address corrections — routed to a review queue instead of silently dropped.",
      },
      {
        title: "Team handoff and monitoring",
        description:
          "Delivered a monitoring dashboard and documentation so the ops team can trace any order's automation history themselves.",
      },
    ],
    results: [
      { metric: "30 hrs", label: "Manual reconciliation work removed weekly" },
      { metric: "94%", label: "Drop in order mismatch incidents" },
      { metric: "6 wks", label: "From audit to full production rollout" },
    ],
    year: "2025",
    heroAccent: "mint",
    gallery: 3,
  },
  {
    slug: "ridewell-mobility",
    client: "Ridewell Mobility",
    industry: "Travel",
    serviceSlugs: ["mobile-app-development", "ui-ux-design"],
    technologies: ["React Native", "Flutter", "Firebase", "Google Maps Platform"],
    title: "Launching a two-sided mobility app across iOS and Android in one cycle",
    summary:
      "A rider and driver app for a regional mobility startup, built to launch on both platforms simultaneously on a fixed runway.",
    challenge:
      "Ridewell needed to launch a two-sided marketplace app — riders and drivers — on both iOS and Android at once, with a small team and a fixed amount of runway before their next funding milestone.",
    solution:
      "We scoped a genuinely minimal but complete MVP, built on a shared cross-platform codebase, and prioritized the driver-side reliability features that mattered most for launch-day trust.",
    process: [
      {
        title: "Ruthless MVP scoping",
        description:
          "Cut the initial feature list to what riders and drivers needed to complete a trip reliably, deferring everything else to post-launch.",
      },
      {
        title: "Shared cross-platform build",
        description:
          "Built rider and driver apps on one codebase to hit both app stores without duplicating engineering effort.",
      },
      {
        title: "Launch-week reliability focus",
        description:
          "Extra QA cycles on payment, matching, and location accuracy — the three failure points most likely to break user trust in week one.",
      },
    ],
    results: [
      { metric: "2", label: "Platforms launched simultaneously" },
      { metric: "11 wks", label: "From kickoff to public launch" },
      { metric: "4.6★", label: "Combined app store rating at 90 days" },
    ],
    year: "2024",
    heroAccent: "coral",
    gallery: 3,
  },
  {
    slug: "kindred-goods",
    client: "Kindred Goods",
    industry: "E-commerce",
    serviceSlugs: ["shopify-development", "ui-ux-design"],
    technologies: ["Shopify Hydrogen", "React", "Klaviyo", "Shopify Functions"],
    title: "A custom Shopify storefront that lifted conversion by 37%",
    summary:
      "A ground-up custom Shopify Hydrogen storefront and product page redesign for a home goods DTC brand.",
    challenge:
      "Kindred's store ran on a heavily modified template theme that was slow, hard to update, and didn't reflect the brand's growing product line. Mobile conversion in particular was well below their category benchmark.",
    solution:
      "We rebuilt the storefront on Shopify Hydrogen with custom product and collection templates, redesigned the mobile purchase flow around fewer taps to checkout, and rebuilt their email flows in Klaviyo around actual purchase behavior.",
    process: [
      {
        title: "Conversion audit",
        description:
          "Analyzed session recordings and funnel data to isolate exactly where mobile shoppers were dropping off.",
      },
      {
        title: "Custom storefront build",
        description:
          "Rebuilt product, collection, and cart experiences from scratch instead of patching the existing theme further.",
      },
      {
        title: "Post-purchase and retention flows",
        description:
          "Rebuilt lifecycle email flows to match how customers actually browsed and bought, not a generic template sequence.",
      },
    ],
    results: [
      { metric: "37%", label: "Increase in overall conversion rate" },
      { metric: "52%", label: "Improvement in mobile page load speed" },
      { metric: "22%", label: "Increase in repeat purchase rate" },
    ],
    year: "2025",
    heroAccent: "yellow",
    gallery: 4,
  },
  {
    slug: "meridian-education",
    client: "Meridian Education",
    industry: "Education",
    serviceSlugs: ["ai-solutions", "ui-ux-design", "website-development"],
    technologies: ["Next.js", "OpenAI", "PostgreSQL", "Figma"],
    title: "An AI study assistant built around how students actually study",
    summary:
      "An AI-assisted study platform and marketing site for an online education company serving university students.",
    challenge:
      "Meridian wanted an AI study assistant to differentiate their platform, but earlier internal prototypes felt like a generic chatbot bolted onto their courses and tested poorly with students.",
    solution:
      "We redesigned the assistant around specific study tasks — practice question generation grounded in the actual course material, and explanations tied to where a student was stuck — instead of an open-ended chat box, then rebuilt the marketing site to lead with real learning outcomes.",
    process: [
      {
        title: "Student usability testing",
        description:
          "Tested the open-ended chatbot prototype with real students first to understand why it wasn't landing before proposing a direction.",
      },
      {
        title: "Task-specific AI redesign",
        description:
          "Replaced the general chat interface with specific, scoped study tools grounded in each course's actual material.",
      },
      {
        title: "Outcomes-led site rebuild",
        description:
          "Rebuilt the marketing site around measurable learning outcomes instead of generic platform features.",
      },
    ],
    results: [
      { metric: "58%", label: "Increase in weekly assistant engagement" },
      { metric: "29%", label: "Improvement in course completion rate" },
      { metric: "4.7★", label: "Average student rating of the study tool" },
    ],
    year: "2024",
    heroAccent: "purple",
    gallery: 3,
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug);
}
