import type { BlogPost } from "./blog-data";

/**
 * Batch 331–380 product practice set: product requirements documents,
 * product-led growth for B2B SaaS, and UX debt. Generic slugs in Australian
 * English. Differentiated from website-requirements-document (websites),
 * saas-onboarding-optimization, reducing-saas-churn and
 * saas-pricing-page-optimization (stages of the funnel), and
 * ux-heuristic-evaluation and ux-audit (point-in-time reviews). No conversion,
 * growth or benchmark figures are quoted. Australian notes limited to GST
 * display and online cancellation reforms (from 1 July 2027, as recorded in
 * the batch 231–280 sources).
 */
export const auProductPracticePosts: BlogPost[] = [
  {
    slug: "product-requirements-document",
    title: "Product Requirements Documents: Turning Business Needs into Buildable Software",
    seoTitle: "Product Requirements Document (PRD): A Practical Guide",
    excerpt:
      "How to write a product requirements document: problem, users, outcomes, scope and non-goals, journeys, functional and non-functional requirements.",
    category: "UI/UX",
    banner: "specshierarchy",
    sceneKind: "roadmap",
    bannerAlt: "A product requirements document linking the problem, users and outcomes to scope, user journeys, functional and non-functional requirements, acceptance criteria and open questions",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["startups", "saas-technology", "b2b-enterprise", "professional-services"],
    relatedSlugs: ["software-product-discovery-australia", "technical-discovery-software-projects", "website-requirements-document"],
    faqs: [
      {
        q: "What is a product requirements document?",
        a: "A PRD describes what a product or feature should achieve and do: the problem, users, desired outcomes, scope, user journeys, requirements and constraints. It aligns business, design and engineering before and during delivery. It is not a detailed technical design.",
      },
      {
        q: "How long should a PRD be?",
        a: "As long as it needs to be clear and no longer. A small feature may need a page or two; a new product more. Focus on decisions and open questions rather than exhaustive detail that will change.",
      },
      {
        q: "PRD vs user stories: do we need both?",
        a: "Often yes. The PRD gives context, outcomes and scope; user stories and acceptance criteria break the work into deliverable pieces in the backlog. Stories without a PRD can lose the bigger picture.",
      },
      {
        q: "Who writes the PRD?",
        a: "Usually a product manager or product owner, with input from design, engineering, operations and stakeholders. In smaller businesses the founder or project sponsor may own it, ideally with help from the delivery team.",
      },
      {
        q: "Can AI write our PRD?",
        a: "AI tools can help structure notes and draft sections, but they cannot know your users, constraints or priorities. Review every statement, remove invented details, and make sure decisions are yours.",
      },
    ],
    content: [
      {
        heading: "What should a product requirements document contain?",
        body: [
          "**A good PRD states the problem and who has it, the outcomes and how you will measure them, what is in and out of scope, the key user journeys, functional requirements with acceptance criteria, non-functional requirements (performance, security, accessibility, data), dependencies and integrations, risks and assumptions, and open questions.** It should be short enough to read, specific enough to build from, and kept up to date.",
          "This guide is for founders, product managers and business owners commissioning software. For website projects, see [[/blogs/website-requirements-document|website requirements documents]]; for the work that comes before, [[/blogs/software-product-discovery-australia|software product discovery]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Lead with the problem and outcomes, not features.",
          "Say what is out of scope.",
          "Write acceptance criteria people can test.",
          "Include non-functional requirements.",
          "List assumptions, risks and open questions.",
          "Keep it current as decisions change.",
        ],
      },
      {
        heading: "A PRD template",
        body: [],
        table: {
          headers: ["Section", "What to include"],
          rows: [
            ["**Problem and context**", "Who has the problem, evidence, why now"],
            ["**Users and roles**", "Primary users, other roles, permissions"],
            ["**Outcomes and metrics**", "What success looks like and how it is measured"],
            ["**Scope and non-goals**", "What is included in this release, and what is not"],
            ["**User journeys**", "Key flows from start to finish"],
            ["**Functional requirements**", "What the software must do, with acceptance criteria"],
            ["**Non-functional requirements**", "Performance, availability, security, privacy, accessibility (WCAG 2.2 AA), devices"],
            ["**Data and integrations**", "Data sources, migrations, external systems"],
            ["**Risks and assumptions**", "What could go wrong; what you are assuming"],
            ["**Open questions**", "Decisions still to be made, with owners"],
          ],
        },
      },
      {
        heading: "Writing good requirements",
        body: [],
        checklist: [
          "Describe behaviour, not implementation: 'a manager can approve or reject a request with a reason'.",
          "Make acceptance criteria testable: given, when, then.",
          "Use consistent terms; add a glossary for domain words.",
          "Prioritise: must, should, could, won't (this release).",
          "Link to designs, research and technical findings rather than copying them.",
          "Note legal or regulatory requirements to confirm with advisers.",
        ],
      },
      {
        heading: "Keeping it alive",
        body: [
          "A PRD is most useful when it reflects current decisions. Keep it in a shared place with history, record changes and their reasons, and update it when research or technical discovery changes the plan. Link it to the backlog so stories trace back to requirements. See [[/blogs/technical-discovery-software-projects|technical discovery]] for the technical inputs.",
        ],
      },
      {
        heading: "Hypothetical example: a staff leave approvals feature",
        body: [
          "**This example is hypothetical.** A business wanted leave requests and approvals in its staff portal. The PRD described the problem (requests lost in email), users (staff, managers, payroll), outcomes (requests approved within two working days, fewer payroll corrections), scope (requests, approvals, balances from payroll; not rostering), journeys, acceptance criteria, accessibility and privacy requirements, the payroll integration as a dependency, and open questions about delegation when managers are away.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Feature lists with no problem or outcomes.",
          "No non-goals, so scope keeps growing.",
          "Vague requirements that cannot be tested.",
          "Forgetting non-functional requirements.",
          "A document written once and never updated.",
        ],
      },
      {
        heading: "Related guides",
        body: [],
        checklist: [
          "[[/blogs/user-research-methods|User research methods]] for evidence behind requirements.",
          "[[/blogs/saas-roadmap-prioritization|SaaS roadmap prioritisation]] for choosing what goes in.",
          "[[/blogs/design-handoff|Design handoff]] for connecting designs to build.",
          "[[/blogs/mvp-development-australia|MVP development]] for scoping a first release.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A useful PRD connects business needs to buildable, testable requirements: problem, outcomes, scope, journeys, functional and non-functional requirements, risks and open questions. Keep it concise, specific and current. To make requirements testable, see [[/blogs/user-acceptance-testing-business-software|acceptance criteria and UAT]].",
        ],
        cta: {
          title: "Turning an idea into requirements?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/ui-ux-design|product discovery and design]], [[/services/website-development|web applications]] and [[/services/mobile-app-development|mobile apps]]. If it would help to shape your requirements, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "product-led-growth-b2b-saas",
    title: "Product-Led Growth for B2B SaaS: Activation, Engagement and Expansion",
    seoTitle: "Product-Led Growth for B2B SaaS: A Practical Guide",
    excerpt:
      "Product-led growth for B2B SaaS: free trial vs freemium, when PLG fits, activation, product-qualified leads, pricing, expansion and combining PLG with sales.",
    category: "UI/UX",
    banner: "d2cfunnel",
    sceneKind: "funnel",
    bannerAlt: "B2B SaaS users signing up, reaching first value, inviting colleagues and upgrading, with product-qualified leads handed to sales for larger accounts",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["ui-ux-design", "cro-audit", "website-development"],
    relatedIndustrySlugs: ["saas-technology", "startups", "hrtech", "fintech"],
    relatedSlugs: ["saas-onboarding-optimization", "reducing-saas-churn", "saas-pricing-page-optimization"],
    faqs: [
      {
        q: "What is product-led growth?",
        a: "A go-to-market approach where the product itself drives acquisition, conversion and expansion: people can sign up, get value and often buy without talking to sales, and usage spreads within organisations. Sales and success teams still play a role, especially for larger accounts.",
      },
      {
        q: "Free trial or freemium?",
        a: "A free trial gives full or broad access for a limited time and suits products whose value appears quickly. Freemium offers a permanently free tier with limits and suits products with wide appeal and low cost to serve. A reverse trial starts users on paid features and moves them to free if they do not buy.",
      },
      {
        q: "Does PLG work for every B2B product?",
        a: "No. It fits products individuals or small teams can adopt without heavy setup, procurement or integration. Complex enterprise products that need configuration, data migration or security reviews usually need sales-led motions, sometimes with a product-led entry point.",
      },
      {
        q: "What is a product-qualified lead?",
        a: "An account or user whose behaviour in the product suggests readiness to buy or expand, such as reaching activation, inviting colleagues or hitting plan limits. PQLs help sales focus on accounts already getting value.",
      },
      {
        q: "What should we measure?",
        a: "Sign-up to activation rate, time to first value, team invites, conversion from free or trial to paid, expansion revenue, and retention by cohort. Avoid relying only on sign-ups.",
      },
    ],
    content: [
      {
        heading: "How does product-led growth work in B2B SaaS?",
        body: [
          "**Product-led growth lets people discover, try, adopt and often buy the product themselves: a low-friction sign-up, fast time to first value, features that spread use across a team, pricing that converts and expands with usage, and signals that tell sales which accounts are ready for a conversation. It fits products that individuals or small teams can adopt without heavy setup; complex enterprise products usually combine it with sales.** It is a model to choose deliberately, not a default.",
          "This guide is for SaaS founders and product leaders. Specific stages are covered in [[/blogs/saas-onboarding-optimization|SaaS onboarding optimisation]], [[/blogs/saas-pricing-page-optimization|pricing page optimisation]] and [[/blogs/reducing-saas-churn|reducing churn]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "PLG fits self-serve products with quick time to value.",
          "Define activation from your own retention data.",
          "Design for team spread, not just individual use.",
          "Price on a metric that grows with value.",
          "Use product-qualified leads to guide sales.",
          "Measure cohorts, not sign-ups.",
        ],
      },
      {
        heading: "When PLG fits and when it does not",
        body: [],
        table: {
          headers: ["Factor", "PLG fits", "Sales-led fits"],
          rows: [
            ["**Setup effort**", "Minutes to hours", "Weeks; configuration and migration"],
            ["**Buyer**", "User or team lead", "Committee and procurement"],
            ["**Price point**", "Low to moderate, self-serve", "High, negotiated"],
            ["**Security review**", "Light at entry", "Required before use"],
            ["**Value visibility**", "Obvious in the product quickly", "Realised over months"],
          ],
        },
      },
      {
        heading: "Entry models",
        body: [],
        checklist: [
          "**Free trial:** time-limited access; suits fast time to value.",
          "**Freemium:** permanent free tier with limits; suits broad appeal and low cost to serve.",
          "**Reverse trial:** paid features first, then free tier; shows full value early.",
          "**Product-led sales:** self-serve entry, sales for larger accounts.",
        ],
      },
      {
        heading: "Activation, spread and expansion",
        body: [
          "Find the actions most associated with retention in your data and design onboarding around them. In B2B, value often depends on teams, so make inviting colleagues, sharing and collaboration natural, with sensible [[/blogs/saas-roles-and-permissions|roles and permissions]]. Expansion comes from more seats, higher plans or usage; make limits and upgrade paths clear rather than surprising. Track these through [[/blogs/product-analytics-implementation-australia|product analytics]].",
        ],
      },
      {
        heading: "PLG with sales",
        body: [
          "Use product-qualified signals, such as activation, multiple active users, integrations connected or approaching limits, to route accounts to sales or success. Sales then helps with security reviews, procurement, larger plans and onboarding for the wider organisation. Make sure sales outreach respects consent and the Spam Act for commercial messages.",
        ],
      },
      {
        heading: "Australian notes",
        body: [
          "State clearly whether prices include GST and in which currency they are charged. Make cancellation of online subscriptions easy; Australian reforms commencing 1 July 2027 reportedly require online cancellation to be straightforward for online sign-ups. Get advice on your terms. See [[/blogs/saas-pricing-page-optimization|pricing page optimisation]].",
        ],
      },
      {
        heading: "Hypothetical example: a scheduling tool for clinics",
        body: [
          "**This example is hypothetical.** A clinic scheduling product relied on demos for every sale. The team added a 14-day trial with a sample calendar, guided setup for the first practitioner, and prompts to invite reception staff. Accounts that connected a calendar and invited a colleague were flagged as product-qualified, and sales contacted multi-location practices among them. Larger groups still went through a sales-led process with security questions. The team compared trial-to-paid conversion and retention by cohort with the demo-led period.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Adopting PLG for a product that needs heavy setup.",
          "Measuring sign-ups instead of activation and retention.",
          "Single-user value in a team product.",
          "Surprise limits and confusing upgrades.",
          "Sales ignoring product signals, or chasing every sign-up.",
        ],
      },
      {
        heading: "Related guides",
        body: [
        ],
        checklist: [
          "[[/blogs/saas-onboarding-optimization|SaaS onboarding optimisation]] for activation.",
          "[[/blogs/product-analytics-implementation-australia|Product analytics implementation]] for measuring PLG.",
          "[[/blogs/saas-integration-marketplace|SaaS integration marketplaces]] for stickiness.",
          "[[/blogs/ux-debt|UX debt]] for keeping self-serve experiences usable.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Product-led growth works when the product delivers value quickly, spreads through teams and makes buying and expanding easy, with sales supporting larger accounts. Choose it where it fits, define activation from evidence, and measure cohorts over time.",
        ],
        cta: {
          title: "Considering a product-led model?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/ui-ux-design|SaaS product design]], [[/services/cro-audit|conversion analysis]] and [[/services/website-development|SaaS engineering]]. If it would help to assess whether PLG fits your product, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "ux-debt",
    title: "UX Debt in Software Products: How to Identify and Prioritise Experience Problems",
    seoTitle: "UX Debt: How to Identify and Prioritise It",
    excerpt:
      "What UX debt is, how it builds up, how to find it with support data, analytics, reviews and testing, how to log and prioritise it, and how to stop it growing.",
    category: "UI/UX",
    banner: "heuristicflow",
    sceneKind: "design",
    bannerAlt: "Inconsistent screens, workflow friction and accessibility gaps collected into a UX debt log, scored by impact and frequency, and scheduled into the product roadmap",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["ui-ux-design", "cro-audit"],
    relatedIndustrySlugs: ["saas-technology", "fintech", "healthcare-healthtech", "ecommerce"],
    relatedSlugs: ["ux-audit", "ux-heuristic-evaluation", "design-systems-for-teams-that-move-fast"],
    faqs: [
      {
        q: "What is UX debt?",
        a: "The accumulated experience problems in a product: inconsistent patterns, confusing workflows, accessibility gaps, outdated content and workarounds that were never fixed. Like technical debt, it builds up through shortcuts and change, and it slows users and teams down.",
      },
      {
        q: "How is UX debt different from a UX audit?",
        a: "A UX audit is a point-in-time review. UX debt management is the ongoing practice of recording, prioritising and paying down experience problems, using audits as one source alongside support data, analytics and research.",
      },
      {
        q: "How do we prioritise UX debt?",
        a: "Score each item on user impact, how many users and how often it affects them, business risk (including accessibility and legal risk), and effort. Fix high-impact, frequent problems first, and group related items so fixes are efficient.",
      },
      {
        q: "Is accessibility part of UX debt?",
        a: "Yes, and often the most urgent part, because it can exclude people entirely and create legal risk. Track accessibility issues against WCAG 2.2 AA and prioritise barriers on key tasks.",
      },
      {
        q: "How do we stop UX debt growing?",
        a: "Use a design system, include UX and accessibility checks in the definition of done, review designs before build, test with users, and reserve regular capacity for fixes rather than waiting for a redesign.",
      },
    ],
    content: [
      {
        heading: "How do you identify and prioritise UX debt?",
        body: [
          "**Collect experience problems from support tickets, analytics, session reviews, heuristic and accessibility reviews and usability tests; log each with evidence, affected users and frequency; score by impact, reach, risk and effort; fix the most damaging problems on key tasks first; and prevent new debt with a design system, design reviews and accessibility checks in the definition of done.** UX debt is managed continuously, not only during redesigns.",
          "This guide is for product managers, designers and engineering leads. For one-off reviews, see [[/blogs/ux-audit|UX audits]] and [[/blogs/ux-heuristic-evaluation|heuristic evaluation]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Log UX debt in one place with evidence.",
          "Prioritise by user impact, reach and risk.",
          "Treat accessibility barriers as urgent.",
          "Reserve regular capacity for fixes.",
          "Prevent new debt with standards and reviews.",
        ],
      },
      {
        heading: "Types of UX debt",
        body: [],
        table: {
          headers: ["Type", "Examples"],
          rows: [
            ["**Inconsistency**", "Different buttons, patterns and terms for the same thing"],
            ["**Workflow friction**", "Extra steps, re-entering data, unclear next actions"],
            ["**Accessibility**", "Missing labels, poor contrast, keyboard traps, inaccessible errors"],
            ["**Content**", "Outdated help, unclear error messages, jargon"],
            ["**Outdated patterns**", "Screens built for old workflows or devices"],
            ["**Performance**", "Slow screens on key tasks"],
          ],
        },
      },
      {
        heading: "Finding it",
        body: [],
        checklist: [
          "Support tickets and sales objections tagged by screen or task.",
          "Analytics: drop-offs, repeated actions, rage clicks, long task times.",
          "Heuristic reviews against consistent principles.",
          "Accessibility testing; see [[/blogs/accessibility-testing-australia|accessibility testing]].",
          "Usability tests on key tasks; see [[/blogs/usability-testing|usability testing]].",
          "Team knowledge: workarounds staff explain to customers.",
        ],
      },
      {
        heading: "Logging and prioritising",
        body: [
          "Keep a UX debt log with: description, screen or task, evidence, users affected, frequency, severity, accessibility impact, proposed fix and effort. Score items consistently, for example impact times reach, adjusted for risk and divided by effort, and review the log monthly. Group related items into themes so fixes address whole workflows. Feed top items into the roadmap alongside features; see [[/blogs/saas-roadmap-prioritization|roadmap prioritisation]].",
        ],
      },
      {
        heading: "Preventing new debt",
        body: [],
        checklist: [
          "A design system with documented components and patterns; see [[/blogs/design-systems-for-teams-that-move-fast|design systems]].",
          "Design reviews before build for new flows.",
          "Accessibility and content checks in the definition of done.",
          "Usability testing for significant changes.",
          "A standing share of capacity for UX fixes.",
        ],
      },
      {
        heading: "Hypothetical example: an HR platform",
        body: [
          "**This example is hypothetical.** An HR platform had grown through several teams, with three date pickers, two approval patterns and inaccessible error messages. The team built a UX debt log from support tickets, analytics and an accessibility review, scored about 80 items, and grouped them into themes. The first quarter fixed the approval workflow and form errors, which accounted for the most tickets, and replaced date pickers through the design system. New features had to use design system components to pass review.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Waiting for a full redesign to fix anything.",
          "A debt log with no evidence or scoring.",
          "Ignoring accessibility because few people complain.",
          "Fixing cosmetic issues before workflow problems.",
          "New features that keep adding inconsistency.",
        ],
      },
      {
        heading: "Related guides",
        body: [
        ],
        checklist: [
          "[[/blogs/ux-audit|UX audit]] for a structured review.",
          "[[/blogs/website-accessibility-australia|Website accessibility in Australia]] for accessibility obligations.",
          "[[/blogs/user-research-methods|User research methods]] for evidence.",
          "[[/blogs/product-requirements-document|Product requirements documents]] for capturing fixes.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "UX debt grows quietly and costs users and teams time. Log it with evidence, prioritise by impact and risk, fix whole workflows, and prevent new debt with standards, reviews and regular capacity.",
        ],
        cta: {
          title: "Product feeling harder to use than it should?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/ui-ux-design|UX reviews, design systems and redesigns]] and [[/services/cro-audit|conversion and usability audits]]. If it would help to map your UX debt, we are happy to talk it through.",
        },
      },
    ],
  },
];
