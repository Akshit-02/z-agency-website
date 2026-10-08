import type { BlogPost } from "./blog-data";

/**
 * AI agent governance cluster, part three (published 2026-10-08): turning an
 * existing SaaS product into an AI-native one, AI automation technical debt
 * and the AI automation center of excellence. Evergreen copy: no specific
 * years in titles, headings, FAQs or body text. Sources checked 2026-10-08:
 * Sculley et al., "Hidden Technical Debt in Machine Learning Systems"
 * (Google, NeurIPS); DORA research on AI-assisted delivery.
 */

export const aiGovernancePosts3: BlogPost[] = [
  // ---------------------------------------- SAAS TO AI-NATIVE
  {
    slug: "turn-saas-product-into-ai-native-product",
    title: "How to Turn an Existing SaaS Product Into an AI-Native Product",
    seoTitle: "How to Turn an Existing SaaS Product Into an AI-Native Product",
    excerpt:
      "A ten-stage roadmap for moving an existing SaaS product from AI features to AI-native workflows, from opportunity mapping to pilots and scale.",
    category: "Web Development",
    banner: "saasainativeflow",
    sceneKind: "roadmap",
    bannerAlt:
      "SaaS to AI-native roadmap in four phases: Discover (opportunities, workflows), Design (assist points, action points), Build (highlighted: tools, controls, evaluation) and Prove (pilot, measure, scale).",
    date: "2026-10-08",
    readingTime: "6 min read",
    relatedServiceSlugs: ["website-development", "ui-ux-design", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise"],
    relatedSlugs: ["ai-native-vs-ai-enabled-software", "ai-powered-saas-development", "ai-agent-autonomy-levels"],
    faqs: [
      { q: "How do you make a SaaS product AI-native?", a: "Start from the jobs users hire the product for, find where AI can do meaningful parts of that work, expose those capabilities as safe tools over your existing domain logic, add permissions, limits and evaluation, pilot with real customers, measure outcomes and scale. A chat panel alone is not the transformation." },
      { q: "Do we need to rebuild the product?", a: "Usually not. Most of the work is exposing existing business logic as task-shaped tools, improving data access, and redesigning key workflows and UX. Rebuilds are rarely necessary unless the data model blocks it." },
      { q: "Where should we start?", a: "With one high-frequency workflow where users spend real effort, outcomes are measurable and mistakes are recoverable. Let AI assist first, then act with approval, then act within limits as evidence accumulates." },
      { q: "How does pricing change?", a: "AI usage has real variable cost, so many products add usage-based or outcome-linked elements, credits or tiered limits. Model costs per customer before launch so heavy users do not erase margins." },
      { q: "What do enterprise customers expect?", a: "Admin controls over AI features, data-use commitments (no training on their data without consent), audit logs of AI actions, permission controls, and clear documentation of how AI decisions are made and reviewed." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Turning an existing SaaS product into an AI-native one is a workflow and architecture change, not a feature launch. Work through ten stages: **identify** AI opportunities in the jobs users hire you for; **map** those workflows; decide where AI should **assist** and where it can **act**; build an agent and **tool architecture** over your existing domain logic; add **permissions and controls**; set up **evaluation**; **pilot** with real customers; **measure** outcomes, cost and trust; and **scale** what works. Adding a chat panel to the dashboard is an AI feature, not a transformation.",
        ],
      },
      {
        heading: "Why the chatbot-in-the-corner approach disappoints",
        body: [
          "Many SaaS teams start by adding an assistant panel that answers questions about the product or the user's data. It demos well and often goes unused, because it sits beside the work rather than inside it. Users still click through the same screens to get their job done. The products that change user behaviour are the ones where AI does part of the job itself: drafts the report from the data, reconciles the records, resolves the routine case, prepares the next actions. That requires changes underneath: tools, permissions, verification and evaluation. See [[/blogs/ai-native-vs-ai-enabled-software|AI-native vs AI-enabled software]] for the distinction.",
        ],
      },
      {
        heading: "The ten-stage roadmap",
        body: [],
        table: {
          headers: ["Stage", "What to do", "Output"],
          rows: [
            ["1. Identify opportunities", "List the jobs users hire the product for; find where they spend time, make errors or wait", "Ranked opportunity list"],
            ["2. Map workflows", "Document real user workflows step by step, with data and decisions", "Workflow maps for top candidates"],
            ["3. Decide where AI assists", "Steps where AI can suggest, draft or explain", "Assist points"],
            ["4. Decide where AI acts", "Steps AI can perform, with autonomy level per action", "Action list with risk tiers"],
            ["5. Build tool architecture", "Expose domain logic as task-shaped tools; context and retrieval", "Tool layer, context design"],
            ["6. Add permissions and controls", "Agent identity, user delegation, limits, approvals, audit", "Control layer"],
            ["7. Add evaluation", "Test sets from real cases; release gates; quality monitoring", "Evaluation pipeline"],
            ["8. Pilot", "Design partners or a customer segment; shadow, then assisted", "Pilot results"],
            ["9. Measure", "Task completion, time saved, intervention rate, cost per task, retention", "Evidence for decisions"],
            ["10. Scale", "Roll out, price, document, support; repeat for the next workflow", "Production capability"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "Pick one workflow and take it all the way to production before spreading AI thinly across the product. Depth in one job beats a dozen shallow features.",
        },
      },
      {
        heading: "Choosing the first workflow",
        body: [],
        table: {
          headers: ["Criterion", "Good first candidate"],
          rows: [
            ["Frequency", "Users do it often"],
            ["Effort", "It takes real time or skill today"],
            ["Data", "The product already holds the data needed"],
            ["Verifiability", "Results can be checked by rules or by the user quickly"],
            ["Recoverability", "Mistakes can be undone or caught before they matter"],
            ["Value", "Completion maps to something customers pay for"],
          ],
        },
      },
      {
        heading: "Architecture: reuse your domain logic",
        body: [
          "The most valuable asset an existing SaaS product has is its domain logic and data: validation rules, permissions, workflows, integrations. Do not let the AI layer bypass them. Expose existing services as task-shaped tools that enforce the same rules as the UI, give the agent identity and delegated permissions per user and tenant, and supply context from your data with tenant isolation. The same tools can later power an MCP server or API for customers' own agents; see [[/blogs/apis-for-ai-agents|APIs for AI agents]]. For building blocks such as metering, tenancy and enterprise controls, see [[/blogs/ai-powered-saas-development|AI-powered SaaS development]].",
        ],
      },
      {
        heading: "UX: from screens to goals, with control",
        body: [
          "AI-native UX lets users state a goal and see a plan, progress and results, while keeping control: previews before consequential actions, clear explanations, undo, and an easy path back to the manual workflow. Set autonomy per action using [[/blogs/ai-agent-autonomy-levels|the five-level autonomy framework]], and design approvals that show enough to judge. Our guides to [[/blogs/ai-ux-design|AI UX design]] and [[/blogs/ai-copilot-ux|AI copilot UX]] cover the patterns.",
        ],
        cta: {
          title: "Taking an existing SaaS product AI-native?",
          description: "ZSpace Labs works with SaaS teams on the full path: workflow mapping, tool architecture over existing domain logic, controls, evaluation, UX and pilots. See [[/services/website-development|web application development]] and [[/services/ui-ux-design|UI/UX design]].",
        },
      },
      {
        heading: "Pricing, cost and enterprise readiness",
        body: [
          "AI work has variable cost, so model cost per task and per customer before launch, add limits or credits for heavy usage, and consider usage- or outcome-linked pricing where it reflects value. Enterprise customers will ask for admin controls over AI features, commitments on data use, audit logs of AI actions and documentation of how AI decisions are reviewed; build these in from the pilot, not after the first security questionnaire.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Shipping a generic assistant panel and calling the product AI-native",
          "AI layer that bypasses existing permissions and validation",
          "No evaluation, so quality changes silently with model updates",
          "Spreading shallow AI features across many screens",
          "No cost model per customer before pricing",
          "Ignoring tenant isolation in retrieval and memory",
        ],
      },
      {
        heading: "Measuring success",
        body: [
          "Measure the workflow, not the feature. Usage of an AI button says little; whether users get their job done faster, with fewer errors, and keep using the product says a lot.",
        ],
        table: {
          headers: ["Metric", "What it tells you"],
          rows: [
            ["Task completion rate with AI", "Whether AI finishes the job users start"],
            ["Time to outcome", "Whether the workflow is actually faster"],
            ["Intervention and correction rate", "How much users still fix or redo"],
            ["Approval and undo rate", "Trust and quality of AI actions"],
            ["Cost per completed task", "Whether margins survive heavy use"],
            ["Retention and expansion of AI users", "Whether it creates lasting value"],
          ],
        },
      },
      {
        heading: "An illustrative example",
        body: [
          "A hypothetical B2B invoicing SaaS. Users spend most of their time matching incoming payments to invoices. Stage 1–2 mapping shows that most matches follow clear rules while a minority need investigation. The team exposes existing matching and ledger services as tools, lets an agent propose matches with explanations (assist), then auto-apply matches above a confidence threshold with an undo window (act within limits), sending the rest to a review queue. Evaluation uses months of historical matches; a pilot with design partners measures time to reconcile, correction rate and cost per match before pricing the capability as a usage-based add-on.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "An existing SaaS product becomes AI-native one workflow at a time: AI doing real work inside the jobs users hire you for, built on your existing domain logic, contained by permissions and verification, measured by evaluation and outcomes. Start with one workflow, take it to production, then repeat.",
        ],
      },
    ],
  },

  // ---------------------------------------- AI AUTOMATION TECHNICAL DEBT
  {
    slug: "ai-automation-technical-debt",
    title: "AI Automation Technical Debt: Why AI Workflows Become Hard to Maintain",
    seoTitle: "AI Automation Technical Debt: Why AI Workflows Get Hard to Maintain",
    excerpt:
      "How AI automations accumulate technical debt (undocumented prompts, duplicated agents, stale tools, unmanaged credentials) and how to pay it down.",
    category: "AI & Automation",
    banner: "aidebtmap",
    sceneKind: "monitor",
    bannerAlt:
      "Sources of AI automation technical debt: Knowledge (prompts, workflows, ownership), Integration (highlighted: hard-coded APIs, stale tools, credentials), Quality (no evaluation, no monitoring) and Dependencies (model lock-in, vendor lock-in, data drift).",
    date: "2026-10-08",
    updated: "2026-10-08",
    readingTime: "5 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["b2b-enterprise", "saas-technology", "ecommerce"],
    relatedSlugs: ["ai-agent-lifecycle-management", "shadow-ai-agents", "ai-automation-architecture"],
    faqs: [
      { q: "What is AI automation technical debt?", a: "The accumulated cost of shortcuts in AI workflows (undocumented prompts, hard-coded integrations, duplicated agents, unmanaged credentials, missing evaluation and monitoring) that makes automations fragile, risky and expensive to change." },
      { q: "Why does AI automation accumulate debt faster than normal software?", a: "AI workflows depend on things that change outside your code: model versions, provider behaviour, prompts, data and connected APIs. They are also easy to build quickly in no-code tools, so many exist without engineering practices around them." },
      { q: "What are the warning signs?", a: "Nobody can explain why an automation behaves as it does, changes break things unexpectedly, the same task is automated several times, failures are noticed by customers first, and costs or credentials cannot be traced to an owner." },
      { q: "How do we reduce it?", a: "Inventory automations and owners, version prompts and configurations, add evaluation and monitoring, consolidate duplicates, replace hard-coded integrations with shared tools, rotate and scope credentials, and retire what is unused." },
      { q: "Is some debt acceptable?", a: "Yes, for experiments and short-lived prototypes. The problem is when prototypes quietly become production processes without anyone paying the debt down." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI automations accumulate technical debt faster than ordinary software because they depend on things that change outside your code (models, prompts, provider behaviour, data and connected APIs) and because they are easy to build without engineering discipline. The usual forms are undocumented prompts and workflows, hard-coded integrations, duplicated agents, stale tools, unmanaged credentials, unclear ownership, missing evaluation and monitoring, model and vendor lock-in and inconsistent data. Pay it down with an inventory, versioning, evaluation, shared integrations, credential hygiene, consolidation and retirement, and stop new debt by putting production automations through a lightweight engineering gate.",
        ],
      },
      {
        heading: "Why AI workflows get hard to maintain",
        body: [
          "Google researchers warned years ago, in *Hidden Technical Debt in Machine Learning Systems*, that the model is a small part of a real ML system and that glue code, configuration and data dependencies create most of the maintenance burden. AI automation repeats the pattern at higher speed. A workflow built in an afternoon with a no-code tool, a prompt and a personal API key can become a process the business depends on within weeks, and nobody planned for its maintenance.",
          "Change pressure comes from everywhere: providers update models, APIs change fields, the business changes policies, data drifts. Without versioning and evaluation, each change is a silent risk.",
          "This is different from debt in source code written with coding agents, which is covered in [[/blogs/ai-generated-code-technical-debt|AI-generated code technical debt]].",
        ],
      },
      {
        heading: "The forms of AI automation debt",
        body: [],
        table: {
          headers: ["Debt", "What it looks like", "Consequence"],
          rows: [
            ["Undocumented prompts", "Instructions edited in place, no history", "Nobody knows why behaviour changed"],
            ["Undocumented workflows", "Logic spread across no-code steps and scripts", "Changes break unrelated paths"],
            ["Hard-coded integrations", "Each automation calls APIs its own way", "API changes break many automations at once"],
            ["Duplicated agents", "Several teams automate the same task differently", "Inconsistent results, wasted cost"],
            ["Stale tools", "Tools left after a process changed", "Agents act on outdated rules"],
            ["Unmanaged credentials", "Personal keys, long-lived tokens, broad scopes", "Security exposure, breakage when people leave"],
            ["Unclear ownership", "Built by someone who moved on", "Failures unnoticed; nobody to fix them"],
            ["Missing evaluation", "No test set; quality checked by complaint", "Regressions after model or prompt changes"],
            ["Missing monitoring", "No traces, cost or outcome tracking", "Problems discovered by customers"],
            ["Model and vendor lock-in", "Logic tied to one model's quirks or one platform", "Costly to switch or upgrade"],
            ["Inconsistent data", "Automations read different sources of truth", "Conflicting actions and records"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "The most dangerous AI debt is the prototype that became a production process without anyone deciding it should.",
        },
      },
      {
        heading: "AI automation technical debt checklist",
        body: [],
        checklist: [
          "Is every automation in an inventory with a business and technical owner?",
          "Are prompts, model versions and configurations versioned with history?",
          "Is there a test set, and is it run when anything changes?",
          "Are runs traced, with cost and outcome metrics and alerts?",
          "Do automations use shared, task-shaped tools instead of their own API code?",
          "Are credentials scoped, rotated and owned by service identities, not people?",
          "Are duplicate automations for the same task identified and consolidated?",
          "Does each automation read from defined systems of record?",
          "Could you switch model provider without rewriting the workflow?",
          "Are unused automations retired with access revoked?",
        ],
      },
      {
        heading: "AI automation maintenance framework",
        body: [],
        table: {
          headers: ["Practice", "What it involves", "Cadence"],
          rows: [
            ["Inventory and ownership", "Registry of automations, owners, risk tiers", "Continuous; review quarterly"],
            ["Versioning", "Prompts, models, tools, workflows and policies under version control", "Every change"],
            ["Evaluation", "Test sets per automation; release gates (see [[/blogs/ai-agent-evaluation|AI agent evaluation]])", "Every change; monthly sampling"],
            ["Monitoring", "Traces, cost, outcomes, failure alerts", "Continuous"],
            ["Shared integration layer", "Common tools, gateways and MCP servers instead of per-automation code", "When building or refactoring"],
            ["Credential hygiene", "Service identities, scoped tokens, rotation", "Quarterly and on staff changes"],
            ["Consolidation", "Merge duplicates; standardize patterns", "Quarterly"],
            ["Retirement", "Remove unused automations and access (see [[/blogs/ai-agent-lifecycle-management|lifecycle management]])", "Quarterly"],
          ],
        },
        cta: {
          title: "Inherited a tangle of AI automations?",
          description: "ZSpace Labs audits AI workflows, consolidates duplicates, moves integrations onto shared tools, adds evaluation and monitoring, and retires what is no longer needed. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Stop new debt at the gate",
        body: [
          "You do not need heavy process for experiments. You need a clear moment when an automation becomes production: when others depend on it, when it touches customer data or money, or when it runs unattended. At that point require an owner, versioned configuration, a basic test set, monitoring, scoped credentials and registration. Many shadow automations arrive at this gate late; see [[/blogs/shadow-ai-agents|shadow AI agents]]. For architecture that keeps integrations shared and replaceable, see [[/blogs/ai-automation-architecture|AI automation architecture]].",
        ],
      },
      {
        heading: "What to fix first",
        body: [
          "You cannot pay all the debt at once. Prioritize by risk and by how much each item slows change.",
        ],
        table: {
          headers: ["Priority", "Debt", "Why first"],
          rows: [
            ["1", "Unmanaged credentials and broad access", "Direct security exposure"],
            ["2", "No owner", "Nobody will fix anything else"],
            ["3", "No monitoring on customer- or money-facing automations", "Failures reach customers first"],
            ["4", "No evaluation where models or prompts change often", "Silent regressions"],
            ["5", "Duplicated automations", "Wasted cost and inconsistent outcomes"],
            ["6", "Hard-coded integrations", "Each API change breaks many workflows"],
            ["7", "Model and vendor lock-in", "Strategic, but rarely urgent"],
          ],
        },
      },
      {
        heading: "An illustrative example",
        body: [
          "A hypothetical operations team has fourteen automations built over a year: email triage, invoice capture, CRM updates and several reports. An audit finds three versions of email triage, four automations using one former employee's API key, no test sets and no alerts. The team rotates keys onto service identities, assigns owners, merges the triage automations into one with a shared classification tool, adds a small test set and alerts to the two customer-facing workflows, and retires three reports nobody reads. Later changes to the model provider take a day instead of a week.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "AI automation debt is mostly invisible until something breaks. Make it visible with an inventory and checklist, pay it down with versioning, evaluation, shared integrations and credential hygiene, and prevent new debt with a lightweight production gate. The automations that matter will then stay changeable as models, data and the business move on.",
        ],
      },
    ],
  },

  // ---------------------------------------- AI AUTOMATION CENTER OF EXCELLENCE
  {
    slug: "ai-automation-center-of-excellence",
    title: "AI Automation Center of Excellence: How to Organize AI Workflows at Scale",
    seoTitle: "AI Automation Center of Excellence: Organizing AI Workflows at Scale",
    excerpt:
      "What an AI automation center of excellence does, who belongs in it, when you need one, and operating models for startups, mid-market and enterprise.",
    category: "AI & Automation",
    banner: "aicoemodels",
    sceneKind: "roadmap",
    bannerAlt:
      "AI automation CoE operating models compared (startup, mid-market and enterprise, with mid-market highlighted) by team, standards, platform, delivery and governance.",
    date: "2026-10-08",
    readingTime: "5 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["b2b-enterprise", "manufacturing", "fintech"],
    relatedSlugs: ["enterprise-ai-implementation", "ai-agent-governance", "ai-control-plane"],
    faqs: [
      { q: "What is an AI automation center of excellence?", a: "A small central function that sets standards, provides shared platforms and components, governs risk and helps business teams deliver AI automations well. It is a capability that makes other teams faster and safer, not a team that builds everything itself." },
      { q: "When does a business need an AI CoE?", a: "When several teams are building or buying AI automations, duplication and inconsistent controls appear, risk or regulatory exposure is growing, or leadership needs a portfolio view of AI value. A startup with one or two automations does not need a formal CoE." },
      { q: "Who should be in it?", a: "Typically an accountable leader, AI and automation engineers, security and data representatives, a product or process lead and links to business teams, legal and finance. In smaller organizations these are part-time roles." },
      { q: "Should the CoE build all automations?", a: "Usually not. Centralizing all delivery creates a bottleneck. Most successful models are hub-and-spoke: the hub provides standards, platform and governance; business teams or embedded engineers deliver." },
      { q: "How do we measure a CoE?", a: "By outcomes across the portfolio (value delivered, cost per automation, time to production, incidents, reuse of shared components) rather than by the number of projects it runs itself." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An AI automation center of excellence (CoE) is a small central function that makes AI automation across the business consistent, safe and faster: it selects and prioritizes use cases, sets architecture and security standards, runs the agent inventory and shared platform, provides reusable components, governs evaluation, monitoring and cost, manages vendors and spreads knowledge. It should enable business teams rather than build everything. A startup needs a named owner and a few standards, not a CoE; a mid-market company benefits from a small hub; an enterprise needs a hub-and-spoke model with formal governance.",
        ],
      },
      {
        heading: "Why organizations create one",
        body: [
          "AI automation tends to spread unevenly: one team builds agents in a no-code platform, another buys a vendor product, a third writes custom code. Each solves a local problem, and together they create duplicated effort, inconsistent security, untracked cost and no portfolio view of value. A CoE addresses this by owning the shared parts (standards, platform, governance) so teams can focus on their processes. It complements the enterprise operating model described in [[/blogs/enterprise-ai-implementation|enterprise AI implementation]].",
        ],
      },
      {
        heading: "Responsibilities",
        body: [],
        table: {
          headers: ["Responsibility", "What it means in practice"],
          rows: [
            ["Use-case selection", "Intake, prioritization by value and risk, decision on automation vs agent (see [[/blogs/which-processes-suit-ai-agents|which processes suit AI agents]])"],
            ["Architecture standards", "Reference architecture, integration patterns, approved models and tools"],
            ["Security standards", "Identity, access, data rules, runtime controls"],
            ["Agent inventory", "Registry of agents and automations with owners and risk tiers"],
            ["Reusable components", "Shared tools, connectors, MCP servers, prompts, evaluation sets"],
            ["Evaluation", "Release gates and test standards"],
            ["Monitoring", "Shared observability, incident process"],
            ["Cost governance", "Budgets, chargeback or showback, cost per automation"],
            ["Vendor management", "Assessment, contracts, renewals (see [[/blogs/ai-agent-vendor-assessment|AI vendor assessment]])"],
            ["Knowledge sharing", "Patterns, training, community of practice"],
          ],
        },
      },
      {
        heading: "Who is involved",
        body: [],
        table: {
          headers: ["Role", "Contribution"],
          rows: [
            ["Accountable leader", "Mandate, priorities, reporting to leadership"],
            ["AI and automation engineering", "Platform, reference implementations, reviews"],
            ["Security", "Standards, reviews of high-risk automations, incident response"],
            ["Data", "Systems of record, data access, quality"],
            ["Product or process lead", "Use-case discovery, workflow design, adoption"],
            ["Operations and business teams", "Process owners, domain experts, embedded builders"],
            ["Legal, risk and finance", "Regulatory review, contracts, budgets"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "A CoE that builds everything becomes a bottleneck. A CoE that only writes policy becomes irrelevant. The useful middle is a hub that provides platform, standards and review while teams deliver.",
        },
      },
      {
        heading: "Operating models by organization size",
        body: [],
        table: {
          headers: ["", "Startup", "Mid-market", "Enterprise"],
          rows: [
            ["Team", "Named owner (often CTO or ops lead), part-time", "Small hub: lead plus a few engineers and part-time security/data", "Dedicated hub plus embedded spokes in business units"],
            ["Standards", "Short checklist: owner, scoped keys, logging, approvals for risky actions", "Reference architecture, security standard, risk tiers", "Formal standards, policies and control frameworks"],
            ["Platform", "One or two approved tools", "Shared gateway, tool layer, inventory", "Platform with control plane, gateways, observability"],
            ["Delivery", "Builders automate their own work within the checklist", "Hub builds complex automations; teams build simple ones", "Spokes deliver; hub reviews high-risk and provides components"],
            ["Governance", "Monthly review of what exists", "Risk-tiered reviews, quarterly portfolio review", "Formal governance board, audit, regulatory alignment"],
          ],
        },
        cta: {
          title: "Organizing AI automation across teams?",
          description: "ZSpace Labs helps companies set up the shared platform, standards and governance behind an AI automation function sized to their stage. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Setting one up",
        body: [],
        checklist: [
          "Agree the mandate: what the CoE owns and what teams own",
          "Inventory existing automations and agents, including shadow ones (see [[/blogs/shadow-ai-agents|shadow AI agents]])",
          "Publish a short reference architecture and security standard",
          "Stand up shared components: gateway, tools, evaluation sets, inventory",
          "Create an intake process with fast turnaround",
          "Define risk tiers and review requirements (see [[/blogs/ai-agent-governance|AI agent governance]])",
          "Report portfolio outcomes: value, cost, incidents, reuse, time to production",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Building a large central team before there is demand",
          "Making the CoE the only route to any AI work, creating a queue",
          "Standards nobody can follow without the CoE's help",
          "Measuring the CoE by projects delivered instead of portfolio outcomes",
          "No shared platform, so every team rebuilds the basics",
        ],
      },
      {
        heading: "The first 90 days",
        body: [],
        table: {
          headers: ["Period", "Focus", "Outcome"],
          rows: [
            ["Days 1–30", "Mandate, inventory, quick wins, intake process", "Known portfolio; visible early value"],
            ["Days 31–60", "Reference architecture, security standard, risk tiers, shared gateway", "Teams can build safely without asking every time"],
            ["Days 61–90", "Shared components, evaluation standard, portfolio reporting", "Reuse begins; leadership sees value and risk"],
          ],
        },
      },
      {
        heading: "Measuring the CoE",
        body: [],
        table: {
          headers: ["Metric", "Why"],
          rows: [
            ["Time from idea to production", "Whether the CoE speeds teams up"],
            ["Reuse of shared components", "Whether the platform is earning its keep"],
            ["Value delivered across the portfolio", "Outcome, not activity"],
            ["Cost per automation and AI spend vs budget", "Financial control"],
            ["Incidents and their severity", "Whether standards work"],
            ["Share of automations in inventory with owners", "Governance coverage"],
          ],
        },
      },
      {
        heading: "Conclusion",
        body: [
          "An AI automation CoE exists to make many teams' automation safe, consistent and efficient. Size it to your stage, keep it focused on platform, standards and governance, let teams deliver, and measure it by the outcomes of the whole portfolio. As agent numbers grow, the CoE usually owns the [[/blogs/ai-control-plane|AI control plane]].",
        ],
      },
    ],
  },
];
