import type { BlogPost } from "./blog-data";

/**
 * Production AI batch (2026-10-08), part one: agent engineering. Candidate
 * evaluation, multi-agent, observability and memory articles were not
 * created because existing articles own those intents (they were updated
 * instead; see docs/seo/next-20-content-decisions.md). Cost and loops were
 * merged into runaway-ai-agents. Durable execution and computer use are
 * research replacements. Sources checked 2026-10-08: Feng, McDonald & Zhang
 * (arXiv 2506.12469, June 2025), Anthropic engineering (multi-agent research
 * system, June 2025), Temporal/OpenAI Agents SDK announcement (July 2025),
 * Anthropic, OpenAI and Google computer-use documentation.
 */

export const prodAiPosts1: BlogPost[] = [
  // ---------------------------------------- AGENT AUTONOMY LEVELS
  {
    slug: "ai-agent-autonomy-levels",
    title: "How Much Autonomy Should You Give an AI Agent? A Five-Level Framework",
    seoTitle: "How Much Autonomy Should an AI Agent Have? A Five-Level Framework",
    excerpt:
      "A five-level framework for AI agent autonomy, from suggesting to acting alone, with the conditions, controls and evidence each level requires.",
    category: "AI & Automation",
    banner: "autonomylevels",
    sceneKind: "agent",
    bannerAlt:
      "Five levels of AI agent autonomy: Suggest, Draft, Execute with approval, Execute within boundaries (highlighted), Autonomous, with a loop to raise or lower the level based on evidence.",
    date: "2026-10-08",
    updated: "2026-10-08",
    readingTime: "5 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["fintech", "ecommerce", "b2b-enterprise"],
    relatedSlugs: ["human-in-the-loop-ai", "ai-agent-guardrails", "ai-agent-accountability"],
    faqs: [
      { q: "How much autonomy should an AI agent have?", a: "As much as the evidence supports for that specific task, and no more. Start at a level where people review the agent's output, measure its accuracy on real cases, and raise autonomy only for case types where errors are rare, reversible and cheap." },
      { q: "What are the levels of AI agent autonomy?", a: "A practical scale is: suggest, draft, execute with approval, execute within strict boundaries, and autonomous execution under monitoring. Each level moves more decisions from a person to the agent and requires stronger controls and evidence." },
      { q: "Is more autonomy always better?", a: "No. Higher autonomy saves time only when the agent is reliable for that case type. Researchers at the University of Washington argue autonomy should be a deliberate design choice, separate from what the model is capable of." },
      { q: "Can one agent have different autonomy levels?", a: "Yes, and it usually should. An agent can answer order-status questions autonomously, issue small refunds within limits, and only draft larger refunds for approval." },
      { q: "When should autonomy be reduced?", a: "When error rates rise, the agent's inputs change (new products, new policies, a model update), a security issue appears, or reviewers start correcting more outputs. Lowering autonomy should be a configuration change, not a rebuild." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Give an AI agent the lowest level of autonomy that still delivers value, then raise it per case type as evidence accumulates. A practical scale has five levels: **1. Suggest** (agent recommends, a person acts), **2. Draft** (agent prepares the work, a person sends or applies it), **3. Execute with approval** (agent acts after explicit sign-off), **4. Execute within boundaries** (agent acts alone inside hard limits on amount, scope and reversibility), **5. Autonomous** (agent acts under monitoring with sampled review). Choose the level from three factors: how often the agent is right on that case type, how costly and reversible a mistake is, and how quickly someone would notice.",
        ],
      },
      {
        heading: "Autonomy is a design decision, not a capability",
        body: [
          "It is tempting to set autonomy by what the model can do: if it handles a refund correctly in a demo, let it issue refunds. Feng, McDonald and Zhang's 2025 paper *Levels of Autonomy for AI Agents* makes the opposite argument: autonomy should be chosen deliberately, separately from capability and environment, by deciding what role the user plays (operator, collaborator, consultant, approver or observer). That framing is useful for businesses because it turns a vague debate into a configurable decision per task.",
        ],
      },
      {
        heading: "The five levels",
        body: [],
        table: {
          headers: ["Level", "What the agent does", "What the person does", "Typical use"],
          rows: [
            ["1. Suggest", "Recommends an action or answer", "Decides and acts", "Research, triage hints, next-best-action"],
            ["2. Draft", "Prepares the email, record, order or change", "Reviews, edits and sends", "Customer replies, quotes, reports"],
            ["3. Execute with approval", "Acts after explicit sign-off on a preview", "Approves or rejects each action", "Refunds above a limit, vendor payments, data changes"],
            ["4. Execute within boundaries", "Acts alone inside hard limits", "Sets limits; reviews samples and exceptions", "Small refunds, rescheduling, tagging, routing"],
            ["5. Autonomous", "Plans and acts end to end", "Monitors outcomes; handles escalations", "High-volume, low-risk, well-measured tasks"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "Most valuable business agents run at levels 2 to 4. Level 5 is rarely justified for anything that touches money, customers or records unless the actions are trivially reversible.",
        },
      },
      {
        heading: "Choosing the level: three questions",
        body: [
          "Score each case type the agent handles, not the agent as a whole.",
        ],
        table: {
          headers: ["Question", "Points to lower autonomy", "Points to higher autonomy"],
          rows: [
            ["How often is the agent right on this case type?", "Below your target on a representative test set", "Consistently at or above target over weeks of real cases"],
            ["What does a mistake cost, and can it be undone?", "Money, legal commitments, customer harm, irreversible", "Small, reversible, internal"],
            ["How quickly would someone notice an error?", "Days later, or only if a customer complains", "Immediately, through validation or monitoring"],
          ],
        },
      },
      {
        heading: "What each level requires",
        body: [
          "Autonomy is earned with controls. Each step up removes a human check, so something else has to take its place.",
        ],
        table: {
          headers: ["Level", "Minimum controls"],
          rows: [
            ["1–2", "Grounded sources, logging, easy feedback from the reviewer"],
            ["3", "Clear previews of what will happen, approval records, idempotent actions"],
            ["4", "Hard limits enforced in code (amounts, quantities, scope), validation after each action, sampled review, alerts"],
            ["5", "All of the above plus outcome monitoring, cost budgets, a tested kill switch and a regular evaluation cycle"],
          ],
        },
        cta: {
          title: "Deciding how far to trust an agent?",
          description: "ZSpace Labs designs agents with autonomy set per case type, the limits and approvals that go with it, and the measurements needed to raise it safely. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Mixed autonomy inside one agent",
        body: [
          "A customer service agent illustrates why autonomy should be set per action, not per agent (an illustrative design, not a client case):",
          "The per-action interface decisions (act, notify, approve or hand to a person) are covered in [[/blogs/ai-action-confirmation-ux|AI action confirmation UX]].",
        ],
        checklist: [
          "**Answer order status and delivery questions:** level 5, grounded in order data",
          "**Reschedule a delivery:** level 4, within carrier rules",
          "**Refund under a small threshold:** level 4, once per order, logged",
          "**Refund above the threshold or outside policy:** level 3, preview sent for approval",
          "**Respond to a complaint mentioning legal action:** level 1, route to a person with a summary",
        ],
      },
      {
        heading: "Raising and lowering autonomy safely",
        body: [
          "Move up one level at a time, for one case type at a time, after a defined period meeting targets. Run the higher level in shadow mode first (the agent decides, a person still acts) and compare decisions. Move down immediately when accuracy drops, inputs change, a model is updated, or a security concern appears; this should be a configuration flag, not a code change. Record each change and the evidence behind it, which also supports accountability; see [[/blogs/ai-agent-accountability|who is responsible when an AI agent makes a mistake]].",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Setting one autonomy level for the whole agent",
          "Granting autonomy because a demo worked, without a test set",
          "Approval steps that show too little to judge, so reviewers approve everything (see [[/blogs/human-in-the-loop-ai|human-in-the-loop AI]])",
          "Limits written in the prompt instead of enforced in code (see [[/blogs/ai-agent-guardrails|AI agent guardrails]])",
          "No way to lower autonomy quickly when something changes",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Autonomy is the main dial in any agent deployment. Set it per case type, start low, raise it with evidence and lower it without hesitation. The goal is not maximum independence but the most useful level the evidence supports. For how agents can operate software directly, and the autonomy questions that raises, see [[/blogs/computer-use-agents|computer-use agents]].",
        ],
      },
    ],
  },

  // ---------------------------------------- RUNAWAY AGENTS: LOOPS AND COST
  {
    slug: "runaway-ai-agents",
    title: "How to Stop AI Agents Looping and Running Up Costs: Step Limits, Budgets and Circuit Breakers",
    seoTitle: "How to Stop AI Agents Looping and Running Up Costs",
    excerpt:
      "Why AI agents loop, retry and overspend, and the engineering controls that stop them: step limits, budgets, timeouts, circuit breakers and state checks.",
    category: "AI & Automation",
    banner: "runawaycontrols",
    sceneKind: "cost",
    bannerAlt:
      "Controls that contain a runaway agent: Step limit, Token + cost budget, Timeouts, Retry budget, Circuit breaker (highlighted), Escalate to a person.",
    date: "2026-10-08",
    readingTime: "5 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce", "b2b-enterprise"],
    relatedSlugs: ["llm-cost-optimization", "durable-ai-agents", "ai-agent-observability"],
    faqs: [
      { q: "Why do AI agents get stuck in loops?", a: "Common causes are tool errors the agent treats as transient, ambiguous goals with no clear finish condition, state the agent cannot see changing (so it repeats a step), and two agents handing a task back and forth. The model is not broken; the system lacks stopping rules." },
      { q: "Why are AI agents more expensive than chatbots?", a: "Each step re-sends a growing context and may call tools, and multi-step plans multiply that. Anthropic reported in 2025 that its agents used about four times the tokens of chat interactions and its multi-agent research system about fifteen times." },
      { q: "What is a circuit breaker for an AI agent?", a: "A rule that stops calls to a failing tool or halts the agent after a threshold of errors, repeated identical actions or spend, and routes the case to a person or a fallback instead of retrying." },
      { q: "Is using a cheaper model the best way to cut agent cost?", a: "Not always. A cheaper model that takes more steps, retries more or makes more mistakes can cost more per completed task. Measure cost per successful outcome, not cost per call." },
      { q: "How many steps should an agent be allowed?", a: "Set limits from data: look at how many steps successful runs take for each task type, then cap slightly above the high end. Runs that hit the cap should escalate, not silently fail." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Agents run away for predictable reasons: unclear finish conditions, tool errors treated as temporary, state they cannot see, and other agents bouncing work back. Stop it with controls outside the model: a maximum number of steps per run, a token and cost budget per run and per day, timeouts on every tool call, a retry budget with backoff, circuit breakers that trip on repeated identical actions or errors, validation of state after each action, and escalation to a person when any limit is hit. Then measure cost per completed task, because the cheapest model is not always the cheapest system.",
        ],
      },
      {
        heading: "Why agents cost more than you expect",
        body: [
          "A chatbot answers once. An agent plans, calls a tool, reads the result, reasons again and repeats, and each step usually re-sends the growing conversation. Anthropic's 2025 engineering write-up on its research system put numbers on it: agents typically used about four times more tokens than chat interactions, and its multi-agent system about fifteen times more. That can be worth it for valuable tasks; it becomes a problem when the extra steps are loops rather than progress.",
        ],
      },
      {
        heading: "Five ways agents run away",
        body: [],
        table: {
          headers: ["Pattern", "What happens", "Typical cause"],
          rows: [
            ["Infinite loop", "Agent repeats the same plan or tool call", "No finish condition; result not recognized as success"],
            ["Repeated tool calls", "Same query with tiny variations", "Tool returns ambiguous or empty results"],
            ["Retry storm", "Many retries against a failing API, often across many runs at once", "Errors treated as transient; no backoff or shared limit"],
            ["Circular handoffs", "Agents pass a task back and forth", "Overlapping responsibilities in multi-agent setups"],
            ["State errors", "Agent redoes completed work or acts on stale data", "State not persisted or not re-read after actions"],
          ],
        },
      },
      {
        heading: "The controls, in order of importance",
        body: [
          "Every one of these lives in your orchestration code, not in the prompt. Instructions such as \"do not repeat yourself\" help, but they are not enforcement.",
        ],
        table: {
          headers: ["Control", "What it does", "How to set it"],
          rows: [
            ["Step limit", "Caps reasoning/tool iterations per run", "From the step distribution of successful runs, plus margin"],
            ["Run budget", "Caps tokens and spend per run", "From cost per successful run; alert at 80%"],
            ["Daily/tenant budget", "Caps total spend per day, customer or feature", "From expected volume; hard stop with alert"],
            ["Timeouts", "Bounds every tool and model call", "Per tool, from normal latency"],
            ["Retry budget", "Limits retries with exponential backoff", "Small number per call; shared across runs for the same dependency"],
            ["Circuit breaker", "Stops calling a failing tool; halts on repeated identical actions", "Trip on error rate or N identical calls"],
            ["State validation", "Checks the world after each action", "Re-read the record; confirm the expected change"],
            ["Escalation", "Hands the case to a person with context", "Triggered by any limit or breaker"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "A run that hits a limit should end in a useful handoff (what was tried, what failed, what is left), not a silent failure and not another retry.",
        },
      },
      {
        heading: "Design tools that do not invite loops",
        body: [
          "Many loops start with tools. A search tool that returns an empty list without explanation invites endless rephrasing; an API error that just says \"failed\" invites retries. Return explicit outcomes (\"no orders found for this email; ask the customer for an order number\"), mark errors as retryable or not, and make write tools idempotent so a retry cannot duplicate an action. See [[/blogs/ai-agent-tool-design|AI agent tool design]].",
        ],
      },
      {
        heading: "Cost control beyond loops",
        body: [
          "Once runaway behaviour is contained, the normal levers apply. The difference for agents is to judge them by **cost per completed task**, not cost per call.",
        ],
        table: {
          headers: ["Lever", "Agent-specific note"],
          rows: [
            ["Model routing", "Use smaller models for classification and extraction steps, larger ones for planning; see [[/blogs/llm-routing|LLM routing]]"],
            ["Context reduction", "Compact history and trim tool outputs; long contexts are re-sent every step"],
            ["Prompt caching", "Keep instructions and tool definitions stable at the start of the context so providers can cache them"],
            ["Fewer tool calls", "Task-shaped tools that return what the next step needs in one call"],
            ["Task decomposition", "Deterministic code for fixed steps; the model only where judgement is needed"],
            ["Batching", "Use batch APIs for non-urgent background work where providers offer discounts"],
          ],
        },
        cta: {
          title: "Agents costing more than they should?",
          description: "ZSpace Labs audits agent traces for loops, retries and waste, then adds budgets, breakers and routing that cut cost per completed task. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Why the cheapest model is not always the cheapest system",
        body: [
          "An illustrative comparison: a small model costs a fraction per token, but on a multi-step task it takes more steps, retries failed tool calls and completes fewer cases correctly, so people handle the rest. A larger model costs more per token, finishes in fewer steps and completes more cases. Cost per completed task, including human handling of failures, can favour the larger model. Measure both on the same test set before deciding; see [[/blogs/small-language-models|small language models]] for when the smaller option wins.",
        ],
      },
      {
        heading: "Monitor for runaway behaviour",
        body: [],
        checklist: [
          "Steps per run and tokens per run, by task type",
          "Repeated identical tool calls within a run",
          "Retry counts and error rates per tool",
          "Runs ending at a limit (and why)",
          "Cost per completed task and daily spend vs budget",
          "Escalations created by limits",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Loops and overspending are engineering problems with engineering solutions. Put hard limits around every run, make tools give clear outcomes, contain failing dependencies with breakers, validate state after actions and escalate with context when limits are hit. Then optimize cost per completed task. For agents that must survive crashes and restarts mid-task, see [[/blogs/durable-ai-agents|durable execution for AI agents]]; for tracing, see [[/blogs/ai-agent-observability|AI agent observability]] and [[/blogs/llm-cost-optimization|LLM cost optimization]].",
          "Test limits and breakers before go-live in an isolated environment; see [[/blogs/ai-agent-sandbox|AI agent sandbox]].",
        ],
      },
    ],
  },

  // ---------------------------------------- DURABLE AI AGENTS
  {
    slug: "durable-ai-agents",
    title: "Durable Execution for AI Agents: How to Make Long-Running Agents Survive Failures",
    seoTitle: "Durable Execution for AI Agents: Surviving Crashes and Restarts",
    excerpt:
      "What durable execution is, why long-running AI agents need it, and how to persist state, checkpoint steps, retry safely and pause for human approval.",
    category: "AI & Automation",
    banner: "durableagentflow",
    sceneKind: "workflow",
    bannerAlt:
      "Durable agent run: Start, Step + checkpoint (highlighted), Tool call, Crash or rate limit, Resume from checkpoint, Complete, with a branch to wait for human approval.",
    date: "2026-10-08",
    updated: "2026-10-08",
    readingTime: "4 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "fintech", "logistics-supply-chain"],
    relatedSlugs: ["runaway-ai-agents", "ai-agent-orchestration", "why-ai-agents-fail-in-production"],
    faqs: [
      { q: "What is durable execution?", a: "A way of running code so that its progress is recorded step by step and it can resume exactly where it stopped after a crash, deployment, timeout or rate limit, without repeating completed steps. Workflow engines such as Temporal provide it." },
      { q: "Why do AI agents need durable execution?", a: "Agents run many steps over minutes, hours or days, call slow and rate-limited models and APIs, and sometimes wait for human approval. Without durable state, any failure restarts the whole task, repeats side effects and wastes tokens." },
      { q: "Do all agents need it?", a: "No. Short, interactive agents that finish in seconds can simply retry from the start. Durable execution matters for long-running, multi-step, background or approval-gated agents, especially those that change external systems." },
      { q: "Which tools provide durable execution?", a: "Workflow engines such as Temporal (which has an integration with OpenAI's Agents SDK), cloud workflow services, and some agent frameworks with checkpointing. The choice depends on your stack and how long runs last." },
      { q: "How does durable execution relate to idempotency?", a: "Durable engines may re-run a step that crashed mid-way, so tools that change external systems must be idempotent: running them twice must not create two payments or two emails." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Durable execution records an agent's progress step by step so it can resume exactly where it stopped after a crash, deployment, timeout or rate limit, instead of starting over. Long-running agents need it because they make many slow, failure-prone calls, change external systems and often wait for people. In practice: run the agent loop inside a workflow engine or a framework with checkpointing, treat each model and tool call as a recorded step, make every external action idempotent, model human approvals as waits, and set timeouts and retry policies per step. Short interactive agents can skip it.",
        ],
      },
      {
        heading: "Why agents fail differently from web requests",
        body: [
          "A web request lasts milliseconds; if it fails, the user retries. An agent task can run for minutes or days: research, reconciliation, onboarding, multi-system investigations. Along the way it hits rate-limited models, flaky APIs, deployments that restart servers, and pauses while a person approves something. Anthropic's engineering team described this directly when writing about its multi-agent research system: minor failures can be catastrophic for agents, so the system had to resume from where the agent was rather than restart from the beginning.",
          "Restarting from scratch is not just slow. It re-spends tokens, re-runs tool calls that already changed external systems and may produce a different plan the second time.",
        ],
      },
      {
        heading: "How durable execution works",
        body: [],
        table: {
          headers: ["Concept", "What it means for an agent"],
          rows: [
            ["Recorded steps", "Each model call and tool call is persisted with its result"],
            ["Replay and resume", "After a failure, the run continues from the last completed step using recorded results"],
            ["Retries per step", "Failed calls retry with backoff according to policy, without repeating earlier steps"],
            ["Durable timers and waits", "The run can sleep for hours or wait for a human signal without holding a server"],
            ["Deterministic orchestration", "The orchestration code is replayable; non-deterministic work (model calls, APIs) happens in recorded steps"],
          ],
        },
        callout: {
          type: "note",
          text: "Temporal and OpenAI announced an integration in July 2025 that runs OpenAI Agents SDK agents with durable execution, so rate-limited model calls resume when capacity recovers and crashed runs continue where they stopped. Similar patterns exist in other workflow engines and agent frameworks.",
        },
      },
      {
        heading: "Implementation patterns",
        body: [],
        checklist: [
          "**Wrap the agent loop in a workflow:** each iteration's model call and each tool call becomes a recorded activity",
          "**Make side effects idempotent:** pass an idempotency key derived from the run and step to payment, email and record-changing tools",
          "**Model approvals as signals:** the workflow waits for an approve/reject event instead of polling or blocking a thread",
          "**Set per-step timeouts and retry policies:** different for model calls, internal APIs and third-party APIs",
          "**Persist agent state explicitly:** plan, notes and decisions stored as data the run can reload, not only in the model context",
          "**Version workflows:** in-flight runs must keep working when you deploy a new version of the agent",
          "**Combine with run limits:** durability keeps runs alive; budgets and breakers stop the ones that should not continue (see [[/blogs/runaway-ai-agents|runaway AI agents]])",
        ],
      },
      {
        heading: "When you need it and when you do not",
        body: [],
        table: {
          headers: ["Agent type", "Durable execution?", "Why"],
          rows: [
            ["Chat assistant answering in seconds", "No", "Retry from the start is fine"],
            ["Agent that only reads and summarizes", "Usually no", "No side effects; restart is cheap"],
            ["Multi-step agent that changes records or sends messages", "Yes", "Avoid duplicate side effects after failures"],
            ["Background agents running minutes to hours", "Yes", "Crashes, deploys and rate limits are likely mid-run"],
            ["Agents waiting for human approval", "Yes", "Waits can last hours or days"],
          ],
        },
        cta: {
          title: "Building agents that run for more than a few seconds?",
          description: "ZSpace Labs builds long-running agents on durable workflow engines with idempotent tools, approval waits and run budgets. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Observability gets easier",
        body: [
          "A side benefit: the recorded history of each run is an audit trail. You can see every step, input, output, retry and approval, replay a failed run in a test environment and answer \"what did the agent do?\" precisely. Connect it to your tracing so model-level detail sits alongside workflow history; see [[/blogs/ai-agent-observability|AI agent observability]].",
          "How users start, follow and receive long-running agent work is covered in [[/blogs/background-ai-agent-ux|background AI agent UX]].",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Long-running agents fail mid-task; durable execution makes that survivable. Record steps, resume instead of restarting, keep side effects idempotent, model approvals as waits and pair durability with hard limits. For coordinating several agents, see [[/blogs/ai-agent-orchestration|AI agent orchestration]]; for the broader list of production pitfalls, [[/blogs/why-ai-agents-fail-in-production|why AI agents fail in production]].",
        ],
      },
    ],
  },

  // ---------------------------------------- COMPUTER-USE AGENTS
  {
    slug: "computer-use-agents",
    title: "Computer-Use Agents for Business: When AI Should Operate Screens (and When to Use an API)",
    seoTitle: "Computer-Use Agents: When AI Should Operate Screens vs Use APIs",
    excerpt:
      "When computer-use agents that click and type through software make sense, how they compare with APIs and RPA, and the controls they need in production.",
    category: "AI & Automation",
    banner: "computerusecompare",
    sceneKind: "agent",
    bannerAlt:
      "API integration, RPA and computer-use agent (highlighted) compared by setup, handles change, speed, cost per task and best for.",
    date: "2026-10-08",
    readingTime: "4 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["b2b-enterprise", "healthcare-healthtech", "logistics-supply-chain"],
    relatedSlugs: ["rpa-vs-ai-automation", "apis-for-ai-agents", "ai-agent-autonomy-levels"],
    faqs: [
      { q: "What is a computer-use agent?", a: "An AI agent that operates software the way a person does: it looks at screenshots (and sometimes the page structure), then moves the mouse, clicks and types to complete a task. Anthropic, OpenAI and Google all offer computer-use capabilities in their models and products." },
      { q: "Is computer use better than RPA?", a: "It handles variation and layout changes better because it interprets the screen rather than following fixed selectors. It is slower, more expensive per task and less predictable. For stable, high-volume screen work, RPA can still be the better tool." },
      { q: "When should we use an API instead?", a: "Whenever a reliable API exists. APIs are faster, cheaper, more accurate and easier to secure. Computer use is a bridge for systems that have no API or where building an integration is not yet justified." },
      { q: "Is it safe to let an AI operate our systems?", a: "With precautions: run it in an isolated environment with its own low-privilege account, restrict which applications and sites it can reach, require confirmation for consequential actions, and record sessions. Treat on-screen content as untrusted, since it can contain injected instructions." },
      { q: "How fast are computer-use agents?", a: "Much slower than an API call and usually slower than a skilled person on familiar tasks, because each step involves taking and interpreting a screenshot. They suit background work where speed matters less than avoiding manual effort." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Computer-use agents operate software through its interface, reading screenshots and clicking and typing like a person. Use them when the work lives in systems without usable APIs (legacy desktop apps, supplier portals, government sites), the volume does not justify building an integration, and the task varies enough to break RPA scripts. Prefer an API whenever one exists: it is faster, cheaper, more reliable and easier to secure. If you do use computer use, run it in an isolated environment with a low-privilege account, an allowlist of applications and sites, confirmation before consequential actions and recorded sessions.",
        ],
      },
      {
        heading: "Three ways to automate work in other systems",
        body: [],
        table: {
          headers: ["", "API integration", "RPA", "Computer-use agent"],
          rows: [
            ["How it works", "Calls documented endpoints", "Replays scripted clicks using selectors", "Model interprets the screen and decides actions"],
            ["Setup", "Engineering per integration", "Script per process", "Instructions and guardrails per task"],
            ["Handles UI changes", "Not affected", "Often breaks", "Usually adapts"],
            ["Speed", "Fastest", "Fast", "Slow (screenshot per step)"],
            ["Cost per task", "Lowest", "Low", "Highest (model calls per step)"],
            ["Predictability", "High", "High until something changes", "Lower; needs evaluation"],
            ["Best for", "Any system with a good API", "Stable, high-volume screen work", "Variable tasks in systems without APIs"],
          ],
        },
      },
      {
        heading: "Where computer use earns its place",
        body: [],
        checklist: [
          "Supplier, insurer or government portals with no API, used a few times a day",
          "Legacy desktop software whose vendor will not provide an integration",
          "Variable data entry across forms that change layout often",
          "Testing and QA of your own web applications through the real interface",
          "Short-term bridges while a proper integration is being built",
        ],
        callout: {
          type: "takeaway",
          text: "Treat computer use as a bridge, not a foundation. If a workflow becomes important or high-volume, replace the screen automation with an API integration.",
        },
      },
      {
        heading: "What the platforms offer",
        body: [
          "Anthropic, OpenAI and Google each provide computer-use capabilities: models that take screenshots as input and return mouse and keyboard actions, plus consumer products in which agents browse websites for users. The approaches differ in detail, some working at the level of a full desktop and others optimized for the browser, and capabilities have improved quickly through 2025 and 2026. Check each provider's current documentation for supported environments and safety guidance, and test on your own tasks rather than relying on public benchmarks.",
        ],
      },
      {
        heading: "Controls for production use",
        body: [],
        table: {
          headers: ["Risk", "Control"],
          rows: [
            ["Acting on the wrong system or record", "Isolated VM or container; allowlist of applications and domains"],
            ["Excessive access", "Dedicated low-privilege account; no saved admin credentials"],
            ["Prompt injection from screen content", "Treat page text as untrusted; never let it change the task or permissions"],
            ["Consequential mistakes", "Confirmation before submitting, paying, deleting or sending"],
            ["No audit trail", "Record screenshots and actions per step; keep logs with the run"],
            ["Runaway sessions", "Step limits, time limits and cost budgets (see [[/blogs/runaway-ai-agents|runaway AI agents]])"],
          ],
        },
        cta: {
          title: "Stuck with systems that have no API?",
          description: "ZSpace Labs evaluates whether to build an integration, script RPA or use a computer-use agent, then implements it with isolation, approvals and logging. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "The other side: your website as the screen",
        body: [
          "Computer-use and browser agents increasingly visit business websites on behalf of customers. If you run a website, the same technology is reading your pages; accessible, stable interfaces help them succeed. See [[/blogs/how-ai-agents-use-websites|how AI agents use websites]] and, for offering a structured alternative, [[/blogs/apis-for-ai-agents|APIs for AI agents]].",
        ],
      },
      {
        heading: "Running a computer-use pilot",
        body: [
          "Treat a computer-use agent like any other automation pilot, with extra attention to reliability and cost per task.",
        ],
        checklist: [
          "Pick one task in one system, with 30–50 real examples to test against",
          "Run in an isolated environment with a test or low-privilege account",
          "Measure completion rate, time per task, cost per task and the share needing a person",
          "Record every session; review failures to separate model errors from interface problems",
          "Compare against the alternatives: building an API integration, an RPA script or keeping it manual",
          "Decide with a sunset date if it is a bridge until an integration exists",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Computer-use agents fill a real gap: work trapped in software without APIs. They are slower, costlier and less predictable than integrations, so use them deliberately, contain them tightly and replace them with APIs where volume grows. Set their autonomy per action with [[/blogs/ai-agent-autonomy-levels|the five-level framework]], and compare with scripted automation in [[/blogs/rpa-vs-ai-automation|RPA vs AI automation]].",
        ],
      },
    ],
  },
];
