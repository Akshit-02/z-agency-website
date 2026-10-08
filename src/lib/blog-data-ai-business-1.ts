import type { BlogPost } from "./blog-data";

/**
 * AI-ready business batch (October 2026), part one: agents in production.
 * Candidate "pilot vs production" was folded into the failures article
 * because ai-poc-vs-pilot-vs-production owns that decision; "choose the right
 * process" and "AI automation vs AI agents" were merged into one decision
 * framework. Sources checked 2026-10-07: Gartner (25 June 2025 press
 * release), McKinsey State of AI 2025, Anthropic "Building effective agents".
 * Merged into `posts` in blog-data.ts.
 */

export const aiBusinessPosts1: BlogPost[] = [
  // ---------------------------------------- AI AGENT ROI
  {
    slug: "ai-agent-roi",
    title: "How to Calculate the ROI of an AI Agent Before You Build One",
    seoTitle: "AI Agent ROI: How to Estimate Cost and Value Before You Build",
    excerpt:
      "How to estimate AI agent ROI before building: baseline the process, model full running cost, price in risk and review, and set kill criteria.",
    category: "AI & Automation",
    banner: "agentroiflow",
    sceneKind: "cost",
    bannerAlt:
      "Estimating AI agent ROI: Business process, Current cost, Automation potential, Agent cost (highlighted), Risk + review, Expected value.",
    date: "2026-10-07",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["b2b-enterprise", "fintech", "ecommerce"],
    relatedSlugs: ["which-processes-suit-ai-agents", "build-vs-buy-ai-agents", "why-ai-agents-fail-in-production"],
    faqs: [
      { q: "How do you calculate the ROI of an AI agent?", a: "Measure what the process costs today (volume × handling time × loaded cost, plus error and delay costs), estimate the share the agent can complete to an acceptable standard, subtract the agent's full cost (build, model usage, integration, review, monitoring and maintenance) and adjust for risk. Compare scenarios rather than a single number." },
      { q: "What does an AI agent cost to run?", a: "Running costs include model usage per task, infrastructure, tool and API fees, monitoring, human review of escalated or sampled cases, and ongoing maintenance as prompts, models and connected systems change. Build cost depends mostly on integrations and controls, not the model." },
      { q: "What is a realistic payback period for an AI agent?", a: "It depends entirely on volume, current cost and how much work the agent can complete without rework. High-volume, well-defined processes can pay back within months; low-volume or judgement-heavy processes may never pay back. Model it per process rather than relying on industry averages." },
      { q: "Why do AI agent business cases fail?", a: "They count gross time saved but ignore review time, exception handling, integration work, model costs at real volume and maintenance. Gartner has predicted that over 40 percent of agentic AI projects will be cancelled by the end of 2027 because of rising costs, unclear value or inadequate risk controls." },
      { q: "Should we measure ROI in hours saved?", a: "Hours saved only matter if they turn into lower cost, more capacity used productively, faster cycle times or better quality. Tie the case to a business outcome such as cost per case, backlog, response time or revenue." },
      { q: "When should we stop an agent project?", a: "Define kill criteria before you start: for example, if the pilot cannot complete a set share of cases at the required accuracy, or if cost per completed case stays above the current process, stop or redesign." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Estimate AI agent ROI per process, not per technology. Start from a measured baseline (volume, handling time, loaded cost, error and delay costs), estimate the share of cases the agent can complete to the required standard, and subtract its full cost: build and integration, model usage at real volume, human review, monitoring and maintenance. Run a pessimistic, expected and optimistic scenario, price in the cost of mistakes, and set kill criteria before you build. If the case only works in the optimistic scenario, choose simpler automation or a smaller scope.",
        ],
      },
      {
        heading: "Why agent business cases go wrong",
        body: [
          "Most agent ROI estimates are written backwards: start from a vendor's productivity claim, multiply by headcount, and call it value. They miss three things. First, agents rarely complete every case; the remainder still needs people, and often more context-switching than before. Second, someone has to review, correct and monitor the agent, permanently. Third, the agent depends on systems (CRM, ERP, ticketing, documents) whose integration and maintenance costs dominate the budget.",
          "The market data reflects this. Gartner predicted in June 2025 that over 40 percent of agentic AI projects will be cancelled by the end of 2027 due to escalating costs, unclear business value or inadequate risk controls. McKinsey's State of AI 2025 found 62 percent of organizations at least experimenting with agents, but only 23 percent scaling one anywhere, usually in one or two functions. A disciplined estimate before building is the cheapest way to avoid becoming part of the first statistic.",
        ],
      },
      {
        heading: "Step 1: Baseline the process as it runs today",
        body: [
          "You cannot estimate savings without knowing current cost. Measure, do not guess:",
        ],
        table: {
          headers: ["Baseline input", "How to get it", "Example"],
          rows: [
            ["Volume", "System records for the last 3–6 months", "4,000 supplier invoices a month"],
            ["Handling time per case", "Time sampling, ticket timestamps", "6 minutes median, 25 minutes for exceptions"],
            ["Loaded cost per hour", "Salary plus overheads", "Finance team blended rate"],
            ["Error and rework cost", "Corrections, credit notes, complaints", "1.5% of invoices need correction"],
            ["Delay cost", "Late fees, missed discounts, lost sales", "Early-payment discounts missed"],
            ["Exception share", "Cases that need judgement or escalation", "18% need a buyer to confirm"],
          ],
        },
        callout: {
          type: "tip",
          text: "Split the baseline into routine cases and exceptions. Agents usually help most on the routine share; exceptions often stay with people.",
        },
      },
      {
        heading: "Step 2: Estimate what the agent can actually complete",
        body: [
          "The key number is the **completion rate at acceptable quality**: the share of cases the agent finishes correctly without human rework. It is not the share it attempts. Estimate it from a small offline test on real historical cases before any build: give the model the same information a person would have and score the output against what actually happened.",
          "Separate three outcomes: completed correctly, escalated to a person (cost: review time), and completed incorrectly (cost: the mistake plus its correction). The third bucket is what makes or breaks the case, because a wrong refund, a misfiled document or an incorrect customer answer can cost more than the agent saves on many correct cases. Our guide to [[/blogs/ai-agent-evaluation|AI agent evaluation]] explains how to build that test set.",
        ],
      },
      {
        heading: "Step 3: Count the full cost of the agent",
        body: [
          "Agent costs fall into one-off and recurring categories. Recurring costs are the ones most often missing from business cases.",
        ],
        table: {
          headers: ["Cost", "One-off or recurring", "What drives it"],
          rows: [
            ["Discovery and process design", "One-off", "Mapping the real process and its exceptions"],
            ["Integrations and tools", "One-off + maintenance", "Number and quality of systems the agent must read and change"],
            ["Controls", "One-off", "Permissions, approvals, audit logging, evaluation set"],
            ["Model usage", "Recurring", "Tokens per task × volume; model choice; retries"],
            ["Infrastructure and tooling", "Recurring", "Hosting, observability, vector stores, platform licences"],
            ["Human review", "Recurring", "Escalations, sampled audits, approvals"],
            ["Maintenance", "Recurring", "Model updates, prompt changes, connected system changes, re-evaluation"],
          ],
        },
      },
      {
        heading: "Step 4: Put it together in scenarios",
        body: [
          "Combine the inputs into a simple monthly model and run it three times with pessimistic, expected and optimistic completion rates and costs.",
        ],
        code: {
          label: "A simple monthly agent value model",
          text: `Routine cases           = volume × (1 − exception share)
Completed by agent      = routine cases × completion rate
Labour saved            = completed × handling time × loaded rate
Escalation cost         = (routine − completed) × review time × loaded rate
Error cost              = completed × error rate × cost per error
Agent running cost      = model usage + infrastructure + review sampling + maintenance

Monthly net value       = labour saved − escalation cost − error cost − agent running cost
Payback (months)        = one-off build cost ÷ monthly net value`,
        },
        callout: {
          type: "takeaway",
          text: "If the project only pays back in the optimistic scenario, it is not ready. Narrow the scope to the most routine cases, use cheaper deterministic automation for parts of it, or choose a different process.",
        },
      },
      {
        heading: "Value that is not labour",
        body: [
          "Labour savings are the easiest benefit to count, but often not the largest. Faster response times can raise conversion; shorter cycle times can release cash; consistent checks can reduce compliance risk; 24-hour coverage can capture demand that is lost today. Count these only where you can measure them before and after, and attach them to an owner who will report on them. Unmeasurable \"strategic value\" is the usual way weak cases survive approval.",
        ],
      },
      {
        heading: "Risk-adjust the estimate",
        body: [
          "Two risks deserve explicit treatment. **Error impact**: list the worst plausible mistake the agent could make, how often controls would let it through, and what it would cost. If a single error could be severe (money movement, legal commitments, safety), budget for approval steps, which reduce the savings, or keep the agent advisory. **Delivery risk**: integrations with legacy systems, unclear process ownership and poor data each add uncertainty; widen the pessimistic scenario accordingly.",
        ],
        cta: {
          title: "Want an honest business case before you build?",
          description: "ZSpace Labs runs short discovery sprints that baseline the process, test model performance on your historical cases and produce a costed, scenario-based case. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Set kill criteria and success metrics up front",
        body: [],
        checklist: [
          "**Completion rate** at required quality on the pilot set (for example, at least a set share of routine cases with no rework)",
          "**Cost per completed case** below the current process, including review",
          "**Error rate** on consequential actions below an agreed threshold",
          "**Cycle time** or response time improvement you can measure",
          "**Adoption:** the team actually uses the outputs",
          "**A stop rule:** if targets are missed after a defined pilot period, stop or redesign",
        ],
      },
      {
        heading: "Worked example (illustrative)",
        body: [
          "An illustrative scenario, not a client case: a distributor processes 4,000 supplier invoices a month. Baseline: 6 minutes per routine invoice, 18 percent exceptions. An offline test on 300 historical invoices shows the agent extracts and matches 85 percent of routine invoices correctly, escalates 12 percent and gets 3 percent wrong, all of which are caught by a three-way match rule before posting. The model shows labour savings on roughly 2,800 invoices a month, against model and infrastructure costs, a reviewer for escalations and maintenance. The expected scenario pays back the build within the first year; the pessimistic scenario does not, so the team pilots on one supplier group first and keeps posting behind the rule-based match.",
        ],
      },
      {
        heading: "Before you choose to build",
        body: [
          "ROI depends heavily on choosing the right process and the right approach. Many processes are better served by deterministic workflow automation, which is cheaper to run and easier to trust; see [[/blogs/which-processes-suit-ai-agents|which processes suit AI agents]]. If you do need an agent, compare platform and custom options in [[/blogs/build-vs-buy-ai-agents|build vs buy AI agents]], and plan for the problems covered in [[/blogs/why-ai-agents-fail-in-production|why AI agents fail in production]]. For model cost control, see [[/blogs/llm-cost-optimization|LLM cost optimization]].",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A credible AI agent ROI estimate is a process baseline, a tested completion rate, a full cost model, three scenarios and a stop rule. It takes a few days to build and saves months of building the wrong thing. If the numbers only work when everything goes right, the answer is usually a smaller scope or simpler automation, not a bigger model.",
        ],
      },
    ],
  },

  // ---------------------------------------- WHICH PROCESSES SUIT AI AGENTS
  {
    slug: "which-processes-suit-ai-agents",
    title: "Which Business Processes Suit AI Agents? A Decision Framework (and When Plain Automation Wins)",
    seoTitle: "Which Business Processes Suit AI Agents? A Decision Framework",
    excerpt:
      "How to tell whether a process needs an AI agent, an AI-assisted workflow or simple rules: six tests, a decision table and examples by department.",
    category: "AI & Automation",
    banner: "agentfitcompare",
    sceneKind: "workflow",
    bannerAlt:
      "Rules automation, AI-assisted workflow and AI agent (highlighted) compared by inputs, path, decisions, cost per run and best use.",
    date: "2026-10-07",
    readingTime: "5 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["b2b-enterprise", "professional-services", "ecommerce"],
    relatedSlugs: ["ai-agent-roi", "agentic-workflow-automation", "rpa-vs-ai-automation"],
    faqs: [
      { q: "When should a business use an AI agent?", a: "When the path through the work genuinely varies from case to case, inputs are unstructured, the agent can check its own progress against something verifiable, and mistakes are recoverable or can be gated by approval. If the steps are predictable, workflow automation is usually cheaper and more reliable." },
      { q: "What is the difference between AI automation and an AI agent?", a: "AI automation usually means a fixed workflow where a model handles specific steps, such as reading an email or extracting fields. An AI agent decides which steps to take and which tools to call to reach a goal. The first is more predictable; the second handles more variation at higher cost and risk." },
      { q: "Is RPA still useful?", a: "Yes, for high-volume, identical steps in systems without APIs. Many good designs combine an agent or model for interpretation with deterministic automation or RPA for the actions." },
      { q: "What processes are bad candidates for AI agents?", a: "Processes with fixed rules and structured inputs (use workflow automation), low volume (not worth building), irreversible high-stakes actions without a review step, or no reliable data and system access for the agent to work with." },
      { q: "Can we start with a workflow and add an agent later?", a: "Yes, and it is often the best path. Automate the predictable spine first, measure where cases fall out, and introduce agentic steps only for the variable parts." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Use an AI agent only when the path through the work varies from case to case and cannot be written down in advance, the inputs are messy, progress can be verified, and mistakes are recoverable or can be gated behind approval. If the steps are predictable, use workflow automation, with a model for the individual steps that need language understanding (reading an email, extracting fields). If the inputs are structured and rules are fixed, plain rules automation is cheapest and most reliable. Most real processes end up as a mix: a deterministic workflow with one or two agentic steps.",
        ],
      },
      {
        heading: "Three approaches, not two",
        body: [
          "Discussions often frame this as \"automation vs AI\". In practice there are three distinct options, and choosing between them is the most important decision in an AI automation project. Anthropic's engineering guidance on building agents draws the same line: **workflows** orchestrate models and tools through predefined code paths, while **agents** let the model direct its own process and tool use, trading latency and cost for flexibility. It recommends starting with the simplest solution and adding autonomy only when it is needed.",
        ],
        table: {
          headers: ["", "Rules automation", "AI-assisted workflow", "AI agent"],
          rows: [
            ["Inputs", "Structured", "Unstructured steps inside a known flow", "Unstructured and varied"],
            ["Path through the work", "Fixed", "Fixed; model handles specific steps", "Decided per case by the model"],
            ["Typical tools", "Workflow engines, RPA, scripts", "Workflow engine + model calls", "Model + tools/MCP + orchestration"],
            ["Cost per run", "Lowest", "Low to moderate", "Highest (multiple model calls)"],
            ["Predictability", "High", "High for flow, moderate for steps", "Lower; needs evaluation and limits"],
            ["Best for", "Approvals, syncing data, notifications", "Invoice capture, email triage, document checks", "Case resolution, research, multi-system investigations"],
          ],
        },
      },
      {
        heading: "Six tests for agent suitability",
        body: [
          "Score a candidate process on these questions. Agents fit when most answers point right.",
        ],
        table: {
          headers: ["Test", "Points toward workflow", "Points toward agent"],
          rows: [
            ["Can you draw the process as a flowchart?", "Yes, with a handful of branches", "No; the next step depends on what you find"],
            ["How varied are the inputs?", "Forms, fields, fixed formats", "Free text, documents, conversations"],
            ["Can progress be checked?", "Not needed; rules are deterministic", "Yes: tests pass, totals match, record exists"],
            ["How costly is a wrong action?", "Any; rules are predictable", "Recoverable, or gated by approval"],
            ["Do systems expose clean access?", "Either", "APIs or tools the agent can call with scoped permissions"],
            ["Is the volume worth it?", "Any volume for cheap rules", "Enough cases to justify build, evaluation and monitoring"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "Before automating with an agent, check whether the underlying workflow is actually variable. Many processes look complicated only because they were never written down; once mapped, they are a workflow with a few exceptions.",
        },
      },
      {
        heading: "Map the process before you decide",
        body: [
          "Most mistakes happen here. Teams pick a process by its reputation (\"customer support is a good fit for AI\") rather than by its actual shape. Spend a few hours mapping 30 to 50 real cases: what came in, what was checked, which systems were touched, where people made judgement calls and where cases got stuck. You will usually find that 60 to 80 percent of cases follow a few paths (workflow material) and a minority need investigation (agent material). That split is the design.",
        ],
      },
      {
        heading: "Examples by department",
        body: [],
        table: {
          headers: ["Process", "Best approach", "Why"],
          rows: [
            ["Syncing orders from store to ERP", "Rules automation", "Structured data, fixed mapping"],
            ["Invoice capture and matching", "AI-assisted workflow", "Model reads documents; rules match and post"],
            ["Support ticket triage and routing", "AI-assisted workflow", "Classification step inside a fixed flow"],
            ["Resolving \"where is my order\" with refunds and carrier checks", "Agent with approval", "Path varies per case across several systems"],
            ["Sales research before a call", "Agent (read-only)", "Open-ended gathering; low risk because it only reads"],
            ["Employee onboarding", "Rules automation + model for documents", "Mostly fixed checklist"],
            ["Supplier risk investigation", "Agent with human decision", "Variable research; decision stays with a person"],
            ["Monthly reporting", "Rules automation", "Same queries every month"],
          ],
        },
        cta: {
          title: "Not sure which approach a process needs?",
          description: "ZSpace Labs maps your process on real cases and designs the simplest reliable automation: rules, AI-assisted workflow or an agent where it earns its cost. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Signs you are over-engineering",
        body: [],
        checklist: [
          "The agent follows the same sequence of tool calls on almost every case",
          "You keep adding instructions that say \"always do X, then Y\"",
          "Most of the cost is model calls deciding things that never change",
          "Debugging means reading long transcripts to find a step that a rule could have done",
          "Reviewers approve nearly everything without changes",
        ],
      },
      {
        heading: "Signs you under-engineered",
        body: [],
        checklist: [
          "The workflow has dozens of branches and still sends many cases to a person",
          "Rules break whenever a document format or email wording changes",
          "Staff spend most of their time on the cases automation could not handle",
          "Exceptions require looking things up across several systems",
        ],
      },
      {
        heading: "A practical path",
        body: [
          "Start with the deterministic spine of the process, add a model where inputs are messy, measure where cases fall out, then introduce an agent only for that variable remainder, with approvals on consequential actions. This keeps cost and risk proportional to the problem and gives you data for an honest business case; see [[/blogs/ai-agent-roi|how to calculate AI agent ROI]]. For whether to automate a process at all, see [[/blogs/when-to-automate-a-business-process|when a process is worth automating]]; for how agentic steps sit inside workflows, see [[/blogs/agentic-workflow-automation|agentic workflow automation]]; and for legacy screen automation, [[/blogs/rpa-vs-ai-automation|RPA vs AI automation]].",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "The right question is not \"where can we use agents?\" but \"how much variation does this process really contain?\" Rules for the fixed parts, models for messy inputs, agents for genuinely variable investigation. Get that split right and the rest of the project (cost, reliability, oversight) becomes far easier.",
        ],
      },
    ],
  },

  // ---------------------------------------- WHY AI AGENTS FAIL IN PRODUCTION
  {
    slug: "why-ai-agents-fail-in-production",
    title: "Why AI Agents Fail in Production: 12 Problems Teams Discover Too Late",
    seoTitle: "Why AI Agents Fail in Production: 12 Problems to Catch Early",
    excerpt:
      "Twelve reasons AI agents that worked in a pilot fail in production, from missing context to cost drift, and how to catch each one early.",
    category: "AI & Automation",
    banner: "agentfailmap",
    sceneKind: "monitor",
    bannerAlt:
      "Why AI agents fail in production, grouped: Data and context (stale data, missing context, permissions), Integration (highlighted: brittle tools, rate limits, side effects), Operations (no evaluation, no monitoring, cost drift) and Organization (no owner, unclear scope, low adoption).",
    date: "2026-10-07",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["b2b-enterprise", "saas-technology", "fintech"],
    relatedSlugs: ["ai-poc-vs-pilot-vs-production", "ai-agent-evaluation", "context-engineering-ai-agents"],
    faqs: [
      { q: "Why do AI agent projects fail?", a: "Usually not because of the model. Common causes are missing or stale context, brittle integrations, no evaluation or monitoring, costs that grow with real volume, unclear ownership and processes that were never suitable for an agent. Gartner has predicted that over 40 percent of agentic AI projects will be cancelled by the end of 2027." },
      { q: "What changes between an agent pilot and production?", a: "Production brings real volume, edge cases, real permissions, integration failures, cost at scale, security threats and people who depend on the output. A pilot that worked on curated cases with a developer watching often has none of the controls those conditions require." },
      { q: "How do you know an agent is ready for production?", a: "It meets agreed quality targets on a representative evaluation set, has scoped permissions and approvals, logs every action, has monitoring and alerting, a named owner, a cost budget, a rollback or kill switch and a tested fallback to the manual process." },
      { q: "Are better models the fix?", a: "Sometimes they help, but most production failures come from context, integrations, permissions and operations. A better model working with stale data and broad permissions still fails." },
      { q: "How long should an agent pilot run?", a: "Long enough to see real variation: typically several weeks of real cases, including month-end or seasonal peaks if the process has them." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI agents that impress in a pilot usually fail in production for reasons unrelated to model quality: they lack the context people use, they work with stale or incomplete data, their integrations break under real volume, nobody evaluates or monitors them, costs grow faster than value, permissions are too broad or too narrow, and nobody owns the outcome. Treat the move from pilot to production as a separate engineering phase with explicit gates: a representative evaluation set, scoped permissions, approvals, logging, monitoring, cost budgets, a fallback and an owner.",
        ],
      },
      {
        heading: "The pilot trap",
        body: [
          "A pilot proves that an agent *can* do the task. Production asks whether it does the task reliably, safely and economically, every day, on cases nobody curated, with real permissions and people relying on it. The gap is wide. McKinsey's State of AI 2025 found most organizations experimenting with agents but only about a quarter scaling one anywhere, and Gartner expects many agentic projects to be cancelled by 2027 over cost, value and risk. The twelve problems below are the ones that most often surface after go-live, grouped by where they come from. For the general staging of AI projects, see [[/blogs/ai-poc-vs-pilot-vs-production|AI proof of concept vs pilot vs production]].",
        ],
      },
      {
        heading: "Data and context problems",
        body: [
          "**1. The agent lacks context people take for granted.** Staff know that a particular customer always pays late, that a supplier's PDFs put the total in a strange place, that \"urgent\" from one account means something different. None of that is in the prompt. The agent makes reasonable decisions on incomplete information. Fix: interview the people who do the work, capture tacit rules, and supply them through retrieval or tools; see [[/blogs/context-engineering-ai-agents|context engineering for AI agents]].",
          "**2. Data is stale or inconsistent across systems.** The pilot used a clean export; production queries live systems where the CRM and ERP disagree. Fix: decide the system of record for each fact and make the agent read from it, with freshness checks.",
          "**3. Permissions do not match the job.** Too broad, and a mistake or manipulation does real damage; too narrow, and the agent escalates everything. Fix: scope permissions per task and per user the agent acts for; see [[/blogs/ai-agent-access-control|AI agent access control]].",
        ],
      },
      {
        heading: "Integration problems",
        body: [
          "**4. Tools are brittle.** APIs time out, return partial data, change formats or rate-limit under load. The agent interprets an error as an answer or retries forever. Fix: design tools with clear errors, timeouts, retries with limits and idempotency; see [[/blogs/ai-agent-tool-design|AI agent tool design]].",
          "**5. Side effects are not reversible.** In a pilot, nothing real happened. In production, the agent sends emails, updates records and moves money. Fix: separate read and write tools, add previews and approvals for consequential writes, and make writes idempotent.",
          "**6. Screen-based automation breaks.** Agents operating legacy UIs through computer use work in demos and fail when a layout changes. Fix: use APIs where they exist; treat UI automation as a temporary bridge with monitoring.",
        ],
      },
      {
        heading: "Operational problems",
        body: [
          "**7. No evaluation set, so no way to know if it got worse.** Model updates, prompt edits and data changes silently shift behaviour. Fix: maintain a representative evaluation set and run it on every change; see [[/blogs/ai-agent-evaluation|AI agent evaluation]].",
          "**8. No monitoring of outcomes.** Teams watch uptime but not whether the agent's decisions are correct. Fix: trace every run, sample outputs for review, alert on unusual patterns; see [[/blogs/ai-agent-observability|AI agent observability]].",
          "**9. Costs drift upward.** Longer contexts, retries and multi-step loops make cost per case several times higher than the pilot estimate. Fix: budgets per run, cost per completed case as a tracked metric, model routing and caching; see [[/blogs/llm-cost-optimization|LLM cost optimization]].",
          "**10. No plan for when it goes wrong.** When the agent misbehaves, nobody knows who can stop it or how to undo its actions. Fix: kill switch, fallback to the manual process, runbook; see [[/blogs/ai-agent-incident-response|AI agent incident response]].",
        ],
      },
      {
        heading: "Organizational problems",
        body: [
          "**11. Nobody owns the agent.** The pilot belonged to an innovation team; production belongs to nobody. Errors are noticed late and fixes never prioritized. Fix: a named business owner accountable for outcomes and a technical owner for operation; see [[/blogs/ai-agent-accountability|who is responsible when an AI agent makes a mistake]].",
          "**12. The process was not a good fit.** Some agents fail because the work was predictable enough for a workflow, or too high-stakes for autonomy, or too low-volume to justify the effort. Fix: re-check fit with [[/blogs/which-processes-suit-ai-agents|which processes suit AI agents]] before scaling.",
        ],
        callout: {
          type: "takeaway",
          text: "The quality of an agent is capped by the quality and accessibility of the systems it can actually query. Most production fixes are data, integration and operations work, not prompt work.",
        },
      },
      {
        heading: "A production readiness gate",
        body: [
          "Before an agent handles real cases unsupervised, confirm each of these.",
        ],
        checklist: [
          "Representative evaluation set (including edge cases and adversarial inputs) passes agreed thresholds",
          "System of record defined for every fact the agent uses; freshness checked",
          "Permissions scoped per task; consequential actions require approval",
          "Tools have timeouts, limited retries, clear errors and idempotent writes",
          "Every run traced: inputs, tool calls, outputs, cost, identity",
          "Outcome monitoring with sampled human review and alerts",
          "Cost budget per run and per month, with alerts",
          "Kill switch and tested fallback to the manual process",
          "Named business and technical owners; escalation path documented",
          "Users trained on what the agent does and when to override it",
        ],
        cta: {
          title: "Have a pilot that needs to survive production?",
          description: "ZSpace Labs takes agent pilots through production hardening: evaluation sets, tool reliability, permissions, monitoring, cost controls and runbooks. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Roll out gradually",
        body: [
          "Do not switch from pilot to full volume in one step. Start in shadow mode (the agent proposes, people act), then let it act on the most routine slice with sampled review, then widen scope as metrics hold. Keep the manual path available throughout. This turns production failures into small, visible problems instead of large, hidden ones.",
        ],
        table: {
          headers: ["Stage", "Agent role", "Exit criterion"],
          rows: [
            ["Shadow", "Proposes; people decide", "Proposals match human decisions at target rate"],
            ["Assisted", "Acts on routine cases with approval", "Approval rate high, corrections rare"],
            ["Supervised autonomy", "Acts alone on routine slice; sampled review", "Error rate and cost per case on target for several weeks"],
            ["Expanded scope", "Additional case types", "Repeat the gates for each new type"],
          ],
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Agents rarely fail because the model was not clever enough. They fail because production exposes missing context, fragile integrations, absent monitoring, unmanaged cost and unclear ownership. Treat each of the twelve problems as a design requirement before go-live, roll out in stages, and the gap between a good pilot and a dependable production system becomes manageable.",
        ],
      },
    ],
  },
];
