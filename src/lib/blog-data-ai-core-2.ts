import type { BlogPost } from "./blog-data";

/**
 * AI knowledge hub, part two: running agents. Orchestration here means
 * coordinating agent runs (routing, state, recovery); connecting models,
 * retrieval and tools inside one application is ai-orchestration. Agentic
 * workflow automation owns the agent-led multi-step pattern; LLM steps
 * inside deterministic workflows are ai-workflow-automation. Merged into
 * `posts` in blog-data.ts.
 */

export const aiCorePosts2: BlogPost[] = [
  // ---------------------------------------- 565 · AI AGENT ORCHESTRATION
  {
    slug: "ai-agent-orchestration",
    title: "AI Agent Orchestration: How to Coordinate Multiple AI Agents",
    seoTitle: "AI Agent Orchestration: Routing, State, Retries and Recovery",
    excerpt:
      "How AI agent orchestration works: routing tasks to agents, managing shared state, execution flow, parallel steps, budgets, retries, fallbacks, escalation and the tools used to run it.",
    category: "AI & Automation",
    banner: "agentorchestrator",
    bannerAlt:
      "AI agent orchestration in four columns: routing (intent, skills, load, priority), task state highlighted (inputs, progress, outputs, checkpoints), execution (timeouts, parallel steps, budgets, idempotency) and recovery (retries, fallbacks, escalation, compensation).",
    date: "2026-10-02",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise"],
    relatedSlugs: ["single-agent-vs-multi-agent-systems", "ai-orchestration", "agent-to-agent-communication"],
    faqs: [
      { q: "What is AI agent orchestration?", a: "The coordination layer that decides which agent handles which task or step, manages shared state, controls execution order and parallelism, enforces budgets and handles failures through retries, fallbacks and escalation." },
      { q: "How is agent orchestration different from AI orchestration?", a: "Agent orchestration coordinates agent runs and hand-offs. AI orchestration is broader: connecting models, retrieval, tools and workflow state inside an AI application, whether or not agents are involved." },
      { q: "Should the orchestrator be an LLM or code?", a: "Often both. Code handles routing rules, state, budgets and recovery deterministically; a model may decide routing or decomposition where inputs vary. Keep the parts that must be reliable in code." },
      { q: "What tools are used for agent orchestration?", a: "Graph frameworks such as LangGraph, provider SDKs with hand-offs such as the OpenAI Agents SDK, durable workflow engines, and in simpler cases queues plus your own database." },
      { q: "How do you handle a failing agent step?", a: "Classify the error, retry transient failures with backoff, fall back to an alternative model or path, and escalate to a person when retries are exhausted or the action is risky. Make steps idempotent so retries are safe." },
      { q: "What is compensation in agent workflows?", a: "Undoing or offsetting earlier actions when a later step fails, such as cancelling a booking made earlier in the run. It matters when a run spans several systems that cannot share a transaction." },
      { q: "How do you stop agents looping?", a: "With step limits, cost and time budgets per run, detection of repeated identical tool calls and a forced escalation when limits are reached." },
      { q: "Does orchestration need a message queue?", a: "Not always, but queues help for background work, retries and load control. Long-running or human-approval steps benefit from durable state and a queue." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI agent orchestration coordinates the work of one or more agents: it routes each task or step to the right agent, keeps task state outside the models, controls the order and parallelism of steps, enforces step, time and cost budgets, and recovers from failures with retries, fallbacks, compensation and escalation to people. Keep orchestration logic in deterministic code or a workflow engine wherever possible, use a model only for decisions that genuinely need judgement, and trace every hand-off so failures can be explained.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Read [[/blogs/single-agent-vs-multi-agent-systems|single-agent vs multi-agent systems]] first to decide whether you need several agents. For connecting models, retrieval and tools inside one application, see [[/blogs/ai-orchestration|AI orchestration]]. Cross-system agent communication is in [[/blogs/agent-to-agent-communication|agent-to-agent communication]].",
        ],
      },
      {
        heading: "What an Orchestrator Is Responsible For",
        body: [],
        table: {
          headers: ["Responsibility", "What it covers", "Usually decided by"],
          rows: [
            ["Routing", "Which agent or path handles this task", "Rules, a classifier or a supervisor model"],
            ["State", "Inputs, progress, outputs, pending approvals", "Code and a durable store"],
            ["Flow control", "Order, branching, parallel steps, joins", "Code or a workflow graph"],
            ["Budgets", "Steps, time, tokens and cost per run", "Code"],
            ["Recovery", "Retries, fallbacks, compensation, escalation", "Code with clear policies"],
            ["Visibility", "Traces, run history, metrics", "Platform"],
          ],
        },
      },
      {
        heading: "Routing Tasks to Agents",
        body: [
          "Routing can be a rule ('invoices go to the AP agent'), a small classifier model, or a supervisor agent that decomposes a goal. Rules are cheapest and most predictable. Classifiers handle varied inputs; return a confidence score and send low-confidence cases to a default path or a person. Supervisors suit open-ended goals but add tokens and failure modes, so constrain them to a known set of specialists with clear descriptions.",
        ],
      },
      {
        heading: "Managing State",
        body: [
          "Shared state is the backbone of orchestration. Store a run record with the task, structured inputs, each agent's outputs, current step, pending approvals and errors. Pass agents the parts they need as structured data rather than entire transcripts. Checkpoint after each step so a run can pause for a human or resume after a failure. Durable execution frameworks and [[https://docs.langchain.com/oss/python/langgraph/interrupts|LangGraph checkpointers]] provide this; a database plus a queue works for simpler systems.",
        ],
        diagram: {
          variant: "orchestrationrun",
          alt: "Orchestration run: task in, route to agent, run step, persist state (highlighted), validate output, next or finish; a branch shows failures triggering retry, fallback or escalation.",
          caption: "Persisting state after each step is what lets a run pause, resume and be audited.",
        },
      },
      {
        heading: "Execution Flow: Sequential, Parallel and Conditional",
        body: [
          "Most runs are sequential. Parallel steps help when subtasks are independent, such as analysing five documents at once; join their results with a deterministic merge or a final summarizing step. Conditional branches route on validated outputs, not on free text. Put timeouts on every step and a total budget on every run.",
        ],
      },
      {
        heading: "Failure Handling and Recovery",
        body: [],
        checklist: [
          "**Classify errors:** transient (timeouts, rate limits), invalid output (schema failures), tool errors (business rule rejections) and policy denials",
          "**Retry transient errors** with exponential backoff and jitter, a small number of times",
          "**Repair invalid outputs** by re-asking with the validation error, once or twice",
          "**Fall back** to another model or a simpler path when a provider fails",
          "**Compensate** earlier actions when a later step fails and they cannot stand alone",
          "**Escalate** to a person with the full context when limits are reached",
          "**Make write actions idempotent** so retries and resumptions never duplicate them",
        ],
        cta: {
          title: "Running agents that need to recover gracefully?",
          description: "ZSpace Labs builds orchestration with durable state, budgets, retries and human escalation, so failures end in a clear outcome instead of a silent stall.",
        },
      },
      {
        heading: "Orchestration Tools",
        body: [],
        table: {
          headers: ["Option", "Strengths", "Watch for"],
          rows: [
            ["Graph frameworks (for example LangGraph)", "State, checkpoints, interrupts, agent graphs", "Framework concepts to learn"],
            ["Provider agent SDKs", "Native tools, hand-offs, tracing", "Tie-in to one provider's conventions"],
            ["Durable workflow engines", "Retries, timers, long-running steps", "More infrastructure"],
            ["Low-code platforms (n8n, Make, Zapier)", "Fast for internal workflows", "Limits on testing and complex control"],
            ["Queue plus your own code", "Full control, few dependencies", "You build state and recovery yourself"],
          ],
        },
      },
      {
        heading: "Human Hand-offs",
        body: [
          "Treat a human decision as a step in the run: pause, store state, create a review task with the evidence and proposed action, and resume with the decision. Set timeouts and reminders so runs do not wait forever. See [[/blogs/human-in-the-loop-ai|human-in-the-loop AI]].",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Good orchestration makes agents dependable: every run has a known state, failures are handled consistently and people see what happened. The limits are cost and complexity. Every layer adds latency and code to maintain, and a model-driven supervisor can itself be wrong. Use the least orchestration that meets the reliability requirement.",
        ],
      },
      {
        heading: "How to Implement Orchestration Step by Step",
        body: [],
        checklist: [
          "**1. Write down the run lifecycle:** states, transitions, approvals and end conditions",
          "**2. Define agent contracts:** structured inputs and outputs for each agent",
          "**3. Choose routing:** rules first, a classifier or supervisor only if needed",
          "**4. Add durable state** and checkpoints",
          "**5. Add budgets, timeouts and retry policies**",
          "**6. Add escalation and compensation paths**",
          "**7. Trace every step** with a run ID; see [[/blogs/ai-agent-observability|agent observability]]",
          "**8. Evaluate whole runs**, not just individual agents",
        ],
      },
      {
        heading: "A Run State Model",
        body: [
          "Most orchestration problems become simpler once the run has an explicit state record. Keep it in a database rather than in memory or in the model's context, so it survives restarts and can be inspected by support staff.",
        ],
        code: {
          label: "Example: run record for an orchestrated agent task (illustrative)",
          text: "{\n  \"run_id\": \"run_7f3a\",\n  \"task_type\": \"shipment_exception\",\n  \"status\": \"waiting_for_approval\",   // queued | running | waiting_for_approval | completed | failed | escalated\n  \"current_step\": \"propose_resolution\",\n  \"budget\": { \"max_steps\": 12, \"steps_used\": 5, \"max_cost_usd\": 0.40, \"cost_usd\": 0.11 },\n  \"steps\": [\n    { \"agent\": \"carrier_agent\", \"tool\": \"get_tracking\", \"status\": \"ok\" },\n    { \"agent\": \"carrier_agent\", \"tool\": \"get_tracking\", \"status\": \"retried\", \"error\": \"timeout\" }\n  ],\n  \"pending_approval\": { \"action\": \"reship_order\", \"assigned_to\": \"ops-team\", \"expires_at\": \"2026-10-04T09:00:00Z\" }\n}",
        },
      },
      {
        heading: "Observability for Orchestrated Runs",
        body: [
          "Instrument the orchestrator as well as the agents. Each run should produce a trace with spans for routing decisions, every agent step, tool calls, retries, approvals and compensation actions. Dashboards should show runs by status, time spent waiting for people, retry and fallback rates, budget exhaustion and cost per completed run. Alerts on stuck runs (waiting longer than an SLA) and on rising escalation rates catch problems that individual agent metrics miss. Use the OpenTelemetry GenAI conventions so traces from different frameworks line up; see [[/blogs/ai-agent-observability|agent observability]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a logistics company orchestrates shipment exception handling. A rule routes each exception by type; a carrier agent queries tracking APIs; a customer agent drafts a notice. State is checkpointed after each step, carrier API timeouts retry with backoff, and if no resolution is found within the step budget the case goes to a coordinator with everything gathered so far.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "State kept only in the model context",
          "No budgets, so runs loop and burn tokens",
          "Retries on non-idempotent actions",
          "Supervisor agents choosing from vague specialist descriptions",
          "Human approvals with no timeout",
        ],
        cta: {
          title: "Need agent workflows that survive real-world failures?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|agent orchestration and automation]] and [[/services/website-development|durable backends and integrations]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Orchestration is what turns agents into a system: clear routing, durable state, controlled execution and predictable recovery. Keep it deterministic where you can. Related: [[/blogs/single-agent-vs-multi-agent-systems|single vs multi-agent]], [[/blogs/ai-orchestration|AI orchestration]] and [[/blogs/agentic-workflow-automation|agentic workflows]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 566 · AGENTIC WORKFLOW AUTOMATION
  {
    slug: "agentic-workflow-automation",
    title: "Agentic Workflow Automation: How AI Agents Execute Multi-Step Tasks",
    seoTitle: "Agentic Workflow Automation vs Deterministic Automation",
    excerpt:
      "How agentic workflows work: planning, tool use, task state, decision points, validation and human approval, how they differ from deterministic automation, and how to combine the two safely.",
    category: "AI & Automation",
    banner: "agenticvsdeterministic",
    bannerAlt:
      "Comparison of deterministic and agentic workflows by path, inputs, testing, cost, failure and when to use each; the note says good systems combine fixed rails with AI inside steps.",
    date: "2026-10-02",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["b2b-enterprise", "logistics-supply-chain"],
    relatedSlugs: ["ai-workflow-automation", "workflow-automation", "human-in-the-loop-ai"],
    faqs: [
      { q: "What is an agentic workflow?", a: "A workflow in which an AI agent decides some or all of the steps at run time, using tools to gather information and act, checking results and adjusting its plan, rather than following a path fixed in advance." },
      { q: "How is agentic automation different from traditional automation?", a: "Traditional automation follows predefined rules and branches, so the same input always takes the same path. Agentic automation lets a model choose the path, which handles variety better but is less predictable and needs evaluation and controls." },
      { q: "When should I use an agentic workflow?", a: "When inputs vary enough that fixed rules break, the steps needed depend on what the agent discovers, and results can be validated. When steps are known, deterministic automation is cheaper and safer." },
      { q: "Can agentic and deterministic automation be combined?", a: "Yes, and that is usually best: a deterministic workflow handles triggers, system writes and approvals, and an agent handles the open-ended part, such as investigating an exception." },
      { q: "How do you control an agentic workflow?", a: "With an allow-list of tools, validated arguments, step and cost budgets, checks after each action, approval gates for consequential steps and full tracing." },
      { q: "What is planning in an agentic workflow?", a: "The agent proposing the steps it will take, explicitly or implicitly, then executing them one by one and revising the plan when results differ from expectations." },
      { q: "Do agentic workflows replace workflow tools like n8n or Zapier?", a: "No. Those platforms now include agent steps, and many agentic workflows run inside them. The question is which parts should be agentic." },
      { q: "How do you test agentic workflows?", a: "With evaluation sets of real cases scored on task success, step validity and policy compliance, plus regression runs whenever prompts, tools or models change." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An agentic workflow lets an AI agent choose the steps of a task at run time: it plans, calls tools, checks the results and replans until the goal is met or it needs help. Traditional workflow automation follows a fixed path. Use agentic workflows where inputs and required steps vary; keep deterministic automation where the path is known. The most reliable designs combine both: fixed rails for triggers, system writes and approvals, with an agent handling the open-ended part inside budgets and checks.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Deterministic automation is covered in [[/blogs/workflow-automation|workflow automation]] and single AI steps inside workflows in [[/blogs/ai-workflow-automation|AI workflow automation]]. Approval design is in [[/blogs/human-in-the-loop-ai|human-in-the-loop AI]], and the agent foundations are in [[/blogs/ai-agent-development|AI agent development]].",
        ],
      },
      {
        heading: "Deterministic vs Agentic: The Core Difference",
        body: [
          "In deterministic automation, a person designs every branch in advance: if the invoice total is above X, route to Y. In an agentic workflow, the designer defines the goal, the tools and the limits, and the model decides the sequence. That shift moves effort from designing branches to designing tools, checks and evaluation.",
        ],
        table: {
          headers: ["", "Deterministic workflow", "Agentic workflow"],
          rows: [
            ["Path", "Designed in advance", "Decided at run time"],
            ["Handles new situations", "Only if a branch exists", "Often, within its tools"],
            ["Predictability", "Same input, same path", "Paths can vary"],
            ["Testing", "Exact assertions", "Evaluation sets and scoring"],
            ["Cost per run", "Low and fixed", "Higher and variable"],
            ["Typical failure", "Stops with an error", "Wrong step, loop or drift"],
          ],
        },
      },
      {
        heading: "How an Agentic Workflow Runs",
        body: [
          "A trigger starts the run with structured inputs. The agent forms a plan, explicitly as a list of steps or implicitly through its next tool call. It acts with a tool, checks the result against expectations and either continues, replans or stops. Consequential actions pass an approval gate. The run ends with a validated result written to a system or handed to a person.",
        ],
        diagram: {
          variant: "agenticworkflowflow",
          alt: "Agentic workflow: trigger, plan, act with tools, check result (highlighted), approval gate, complete; the loop notes replanning when a check fails, within a fixed step budget.",
          caption: "The check after each action is what keeps an agentic workflow from drifting.",
        },
      },
      {
        heading: "Decision Points: Where the Model Decides",
        body: [
          "Be explicit about which decisions belong to the model. Good model decisions: interpreting an email, choosing which record to look up next, deciding that more information is needed, drafting text. Poor model decisions: whether a refund over a threshold is allowed, whether to skip an approval, whether a payment is complete. Encode the second group in tools and policies so the model cannot change them.",
        ],
      },
      {
        heading: "Validation After Every Action",
        body: [],
        checklist: [
          "Validate tool arguments before execution (schema and business rules)",
          "Check tool results for errors and unexpected values",
          "Verify the intended change actually happened (read after write)",
          "Validate final outputs against a schema and rules",
          "Detect repeated identical calls as a loop and stop",
          "Stop the run when the step, time or cost budget is reached",
        ],
        cta: {
          title: "Considering agentic automation for a messy process?",
          description: "ZSpace Labs can identify which parts of your workflow need an agent and which should stay deterministic, then build both with proper checks.",
        },
      },
      {
        heading: "Human Approval in Agentic Workflows",
        body: [
          "Place approval gates where mistakes are costly or irreversible: payments, customer communications, contract changes, deletions. Show the reviewer the goal, the evidence gathered, the proposed action and the reason. Approve, edit or reject should each be one step, and the decision should be recorded for evaluation.",
        ],
      },
      {
        heading: "Combining Agentic and Deterministic Steps",
        body: [
          "A practical pattern: a deterministic workflow receives the trigger, fetches known data and validates inputs; an agent investigates the variable part; the workflow validates the agent's output, applies business rules, asks for approval if needed and performs the system writes. Workflow platforms such as [[https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/tools-agent|n8n]], Make and Zapier now include agent steps, and code frameworks support the same split.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [],
        table: {
          headers: ["Advantages", "Limitations"],
          rows: [
            ["Handles exceptions fixed rules cannot", "Less predictable; needs evaluation"],
            ["Fewer branches to design and maintain", "Higher, variable cost per run"],
            ["Can investigate across systems", "More security exposure through tools"],
            ["Adapts to new input formats", "Harder to explain individual decisions"],
          ],
        },
      },
      {
        heading: "How to Build an Agentic Workflow Step by Step",
        body: [],
        checklist: [
          "**1. Map the process** and mark which steps are fixed and which vary",
          "**2. Keep fixed steps deterministic**",
          "**3. Define the agent's goal, tools and limits** for the variable part",
          "**4. Add validation** after each action and on the final output",
          "**5. Add approval gates** for consequential actions",
          "**6. Build an evaluation set** from past cases; see [[/blogs/ai-agent-evaluation|agent evaluation]]",
          "**7. Run in shadow mode** alongside the current process",
          "**8. Go live with monitoring** and review failures weekly",
        ],
      },
      {
        heading: "Where Agentic Workflows Pay Off",
        body: [],
        table: {
          headers: ["Process", "Variable part handled by an agent", "Deterministic parts"],
          rows: [
            ["Order exceptions", "Investigate why an order failed and propose a fix", "Intake, stock lookup, order update"],
            ["Supplier communication", "Interpret replies and decide the next question", "Sending templates, logging, deadlines"],
            ["IT support", "Diagnose from logs and ticket text", "Approved fixes, ticket updates, access changes"],
            ["Research and preparation", "Gather and summarize from several sources", "Formatting, storage, notification"],
            ["Claims or case triage", "Read documents and identify missing information", "Eligibility rules, routing, approvals"],
          ],
        },
      },
      {
        heading: "Security and Permissions in Agentic Workflows",
        body: [
          "Because the agent chooses its own path, its permissions must be bounded by design rather than by the path. Give it read-only tools for investigation and route all writes through deterministic workflow steps or approval-gated tools with argument validation. Treat every input it reads (emails, attachments, web pages, tool results) as untrusted; a supplier email could contain instructions aimed at the agent. Log every tool call with arguments and results so investigations are possible. See [[/blogs/ai-agent-guardrails|AI agent guardrails]] and [[/blogs/prompt-injection-prevention|prompt injection prevention]].",
          "Platform choice matters here. Low-code tools make it easy to give an agent broad connector access with a single credential; check what each connected account can actually do, and prefer dedicated service accounts with minimal scopes.",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a wholesaler's order-exception workflow previously had 40 branches and still sent most cases to people. The new design keeps intake, stock lookup and order updates deterministic, and uses an agent only to investigate why an order failed (credit hold, stock, address, pricing) and propose a fix. Proposed fixes under a value limit apply automatically after validation; the rest go to a coordinator with the investigation attached.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Making the whole workflow agentic when only one step varies",
          "No checks after actions",
          "Business rules written only in the prompt",
          "No step or cost budgets",
          "Skipping shadow mode",
        ],
        cta: {
          title: "Ready to automate the exceptions your rules cannot handle?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|agentic workflow automation]] and [[/services/website-development|integration with your systems]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Agentic workflows are for the variable parts of a process. Keep the rest deterministic, validate after every action and gate consequential steps. Related: [[/blogs/ai-workflow-automation|AI workflow automation]], [[/blogs/business-process-automation|business process automation]] and [[/blogs/human-in-the-loop-ai|human-in-the-loop AI]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 567 · HUMAN-IN-THE-LOOP AI
  {
    slug: "human-in-the-loop-ai",
    title: "Human-in-the-Loop AI: How to Combine AI Automation With Human Approval",
    seoTitle: "Human-in-the-Loop AI: Approvals, Thresholds and Review Design",
    excerpt:
      "How to design human-in-the-loop AI: when to require approval, confidence and risk thresholds, review interfaces, escalation, accountability, audit trails and how to reduce review load safely over time.",
    category: "AI & Automation",
    banner: "hitlmodes",
    bannerAlt:
      "Human-in-the-loop modes in four columns: before action (review draft, edit freely, nothing sent, training data), approve action highlighted (show the plan, one-click approve, then execute, audit trail), after action (sample review, spot checks, undo window, quality score) and on doubt (low confidence, high value, policy match, escalate).",
    date: "2026-10-02",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ai-automation", "ui-ux-design"],
    relatedIndustrySlugs: ["fintech", "healthcare-healthtech", "b2b-enterprise"],
    relatedSlugs: ["ai-agent-guardrails", "agentic-workflow-automation", "ai-agent-evaluation"],
    faqs: [
      { q: "What is human-in-the-loop AI?", a: "A design in which people review, approve, correct or take over AI outputs or actions at defined points, so that automation handles volume while humans keep control of consequential decisions." },
      { q: "When should AI actions require human approval?", a: "When an action is costly, irreversible, external-facing, legally significant or outside the AI's evaluated range, and whenever the AI's confidence or a risk check falls below a threshold." },
      { q: "Are model confidence scores reliable?", a: "Raw model self-reported confidence is often poorly calibrated. Better signals combine validation results, business-rule checks, retrieval quality, classifier probabilities calibrated on your data and the value or risk of the action." },
      { q: "What should a review interface show?", a: "The original input, the evidence used, the proposed output or action, why it was proposed, what will happen on approval and one-step approve, edit and reject controls." },
      { q: "Does human review make automation pointless?", a: "No. Reviewing a prepared draft is usually much faster than doing the work from scratch, and review load can be reduced over time as evaluation shows which cases are safe to automate." },
      { q: "What is automation bias?", a: "The tendency of reviewers to accept automated suggestions without proper scrutiny. Reduce it by showing evidence, sampling for quality, rotating reviewers and measuring agreement." },
      { q: "How do you reduce review load safely?", a: "Track reviewer decisions, find case types where the AI is consistently approved without edits, and move those to automatic handling with sampled after-the-fact review." },
      { q: "Is human-in-the-loop required by regulation?", a: "Some rules require human oversight for certain decisions, such as high-risk AI systems under the EU AI Act or automated decisions with legal effects under data protection laws. Check obligations for your sector and market." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Human-in-the-loop AI puts people at defined decision points: reviewing drafts before they are sent, approving consequential actions before they execute, sampling results after the fact, or taking over when confidence is low. Decide where by the cost of a mistake, route cases with validation results, risk rules and calibrated confidence rather than the model's own opinion, give reviewers the evidence and one-step controls, record every decision, and use those decisions to safely automate more over time.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Approval gates are one layer of [[/blogs/ai-agent-guardrails|AI agent guardrails]]. They appear inside [[/blogs/agentic-workflow-automation|agentic workflows]] and [[/blogs/ai-workflow-automation|AI workflows]], and reviewer decisions feed [[/blogs/ai-agent-evaluation|AI agent evaluation]].",
        ],
      },
      {
        heading: "Four Human-in-the-Loop Modes",
        body: [],
        table: {
          headers: ["Mode", "How it works", "Use for"],
          rows: [
            ["Review before use", "AI drafts; a person edits and sends", "Customer emails, reports, contracts"],
            ["Approve before action", "AI proposes an action; a person approves", "Refunds, record changes, payments"],
            ["Review after action", "AI acts; a sample is checked", "Low-risk, high-volume tasks with proven accuracy"],
            ["Escalate on doubt", "AI hands over when checks fail", "Any task, as a safety net"],
          ],
        },
      },
      {
        heading: "Deciding Where Humans Belong",
        body: [
          "Score each action by impact (money, customer trust, legal effect), reversibility (can it be undone?), visibility (does it leave the company?) and evidence (has evaluation shown the AI handles this case type well?). High impact, irreversible or external actions start with approval. Reversible internal actions with strong evaluation results can move to after-the-fact review.",
        ],
      },
      {
        heading: "Routing: Confidence and Risk Thresholds",
        body: [
          "Do not rely on asking the model how confident it is; self-reported confidence is often poorly calibrated. Combine better signals: schema and business-rule validation, retrieval quality (were relevant sources found?), calibrated classifier probabilities, agreement between methods, action value and customer risk. Route to automatic handling only when all checks pass and the case type is within the evaluated range.",
        ],
        diagram: {
          variant: "hitlflow",
          alt: "Human-in-the-loop flow: AI proposes, confidence and risk assessment (highlighted), automatic or queued, human reviews, approve, edit or reject, record decision; reviewer decisions become evaluation data.",
          caption: "The routing step decides how much people see; the record step is how automation earns more trust.",
        },
      },
      {
        heading: "Designing the Review Interface",
        body: [],
        checklist: [
          "The original input and the AI's proposed output or action side by side",
          "Evidence: sources, records and tool results the AI used",
          "A short reason for the proposal",
          "What will happen on approval, stated plainly",
          "One-step approve, edit and reject, with a reason field on reject",
          "Keyboard shortcuts and batching for high-volume queues",
          "Queue priorities and timeouts so urgent items are not stuck",
        ],
        cta: {
          title: "Building review screens your team will actually use?",
          description: "ZSpace Labs designs approval queues and review interfaces that make checking AI work fast, with evidence and audit trails built in.",
        },
      },
      {
        heading: "Accountability and Audit Trails",
        body: [
          "Record who approved what, when, with which evidence and AI version. When something goes wrong, you need to know whether the AI proposed it, a person approved it or a policy allowed it automatically. Clear ownership also matters: each automated process should have a named owner responsible for its review rules and outcomes.",
        ],
      },
      {
        heading: "Avoiding Automation Bias",
        body: [
          "Reviewers who approve hundreds of good suggestions start approving without reading. Counter it with evidence-first layouts, occasional known-bad test items, sampled second reviews, tracking edit rates and time per review, and rotating reviewers on high-stakes queues.",
        ],
      },
      {
        heading: "Regulatory Context",
        body: [
          "Human oversight is a requirement in some regimes: the EU AI Act requires human oversight measures for high-risk AI systems, and data protection laws such as the GDPR restrict solely automated decisions with legal or similarly significant effects. These are summaries, not legal advice; confirm obligations for your use case and market.",
          "Governance structures for deciding oversight levels are covered in [[/blogs/ai-governance-framework|AI governance framework]].",
        ],
      },
      {
        heading: "Reducing Review Load Over Time",
        body: [],
        checklist: [
          "**1. Start with approval** on all consequential actions",
          "**2. Log every decision** and edit with the case type",
          "**3. Find case types** with consistently unedited approvals over a meaningful sample",
          "**4. Move them to automatic handling** with sampled after-the-fact review",
          "**5. Keep monitoring** and move them back if quality drops",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Human-in-the-loop design lets businesses adopt AI where errors would otherwise be unacceptable, and it produces labelled data for improvement. Its costs are reviewer time, latency for approval steps and the risk of rubber-stamping. Poorly designed queues can make automation slower than the manual process, which is why the review experience deserves as much design as the AI.",
        ],
      },
      {
        heading: "Designing Approval Queues at Scale",
        body: [
          "When volumes grow, the queue design decides whether human review is a safeguard or a bottleneck. Group similar items so reviewers build rhythm; sort by deadline, value and risk; show the most decision-relevant evidence first; and let reviewers approve batches of low-risk items after sampling. Assign queues to named teams with SLAs and escalation when items age. Track reviewer workload so automation gains are not lost to a backlog.",
        ],
        checklist: [
          "Queues by case type and risk, each with an owner and SLA",
          "Priority by deadline, value and customer impact",
          "Evidence-first layout with the proposed action and its effect",
          "Bulk approval for low-risk items, with mandatory sampling",
          "Ageing alerts and reassignment",
          "Reason codes on rejections and edits",
        ],
      },
      {
        heading: "Metrics for Human-in-the-Loop Systems",
        body: [],
        table: {
          headers: ["Metric", "What it tells you"],
          rows: [
            ["Share of cases auto-handled vs reviewed", "How much automation the evidence supports"],
            ["Approval rate without edits, by case type", "Where AI is ready for more autonomy"],
            ["Edit and rejection reasons", "What to fix in the AI or the data"],
            ["Time to decision", "Whether review is creating delays"],
            ["Errors found in sampled auto-handled cases", "Whether autonomy is still justified"],
            ["Reviewer agreement on double-reviewed items", "Consistency and automation bias"],
          ],
        },
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a finance team uses AI to propose journal entries for supplier credit notes. Initially every proposal needs approval. After three months, reviewers approve credit notes under a set value from known suppliers without edits in nearly all cases, so those move to automatic posting with weekly sampling, while new suppliers and larger amounts stay in the approval queue.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Using the model's self-reported confidence as the only routing signal",
          "Review screens that hide the evidence",
          "No record of decisions, so automation never improves",
          "Approval queues without timeouts or owners",
          "Removing review without data to support it",
        ],
        cta: {
          title: "Want automation with the right amount of human control?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|human-in-the-loop automation]] and [[/services/ui-ux-design|review and approval interface design]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Human-in-the-loop AI is a design discipline: put people where mistakes are costly, route with real signals, make review fast and evidence-based, and earn more automation through recorded decisions. Related: [[/blogs/ai-agent-guardrails|guardrails]], [[/blogs/ai-agent-evaluation|evaluation]] and [[/blogs/agentic-workflow-automation|agentic workflows]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 568 · AI AGENT EVALUATION
  {
    slug: "ai-agent-evaluation",
    title: "AI Agent Evaluation: How to Test Accuracy, Reliability and Performance",
    seoTitle: "AI Agent Evaluation: Datasets, Metrics and Regression Testing",
    excerpt:
      "How to evaluate AI agents: building evaluation datasets, task success, tool-call accuracy, groundedness, policy compliance, latency, cost, LLM-as-judge, regression testing and production evaluation.",
    category: "AI & Automation",
    banner: "agentevalmetrics",
    bannerAlt:
      "AI agent evaluation metrics in four columns: outcome (task success, correct end state, human acceptance, escalation rate), steps highlighted (tool choice, valid arguments, step count, loops avoided), quality (groundedness, policy compliance, tone, safety) and operations (latency, cost per task, error rate, regression).",
    date: "2026-10-02",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "fintech"],
    relatedSlugs: ["ai-agent-observability", "ai-agent-guardrails", "human-in-the-loop-ai"],
    faqs: [
      { q: "What is AI agent evaluation?", a: "Measuring whether an agent completes tasks correctly, safely and efficiently, using test cases with expected outcomes, scoring of each step and the final result, and comparison across versions." },
      { q: "How is evaluating an agent different from evaluating a chatbot?", a: "A chatbot is mostly judged on its answer. An agent must also be judged on its trajectory: which tools it called, with what arguments, in what order, whether it respected policies and whether the end state in other systems is correct." },
      { q: "How many test cases do I need?", a: "Enough to cover your main case types and known edge cases with several examples each. Many teams start with 50 to 200 real cases and grow the set from production failures." },
      { q: "What is LLM-as-a-judge?", a: "Using a language model to score outputs against criteria such as correctness or groundedness. It scales evaluation but must be checked against human judgements, and it should not be the only measure for critical decisions." },
      { q: "What is tool-call accuracy?", a: "Whether the agent chose the right tool with valid, correct arguments at each step, compared with expected calls or validated by checking the resulting state." },
      { q: "What is groundedness?", a: "Whether claims in the output are supported by the sources or tool results the agent had, rather than invented." },
      { q: "When should evaluations run?", a: "Before every release that changes prompts, tools, models or retrieval, on a schedule against production samples, and after incidents to add new test cases." },
      { q: "Can agents be evaluated in production?", a: "Yes, through sampled scoring of live runs, user feedback, reviewer decisions and outcome metrics such as escalations and corrections, with privacy controls on stored data." },
      { q: "What success rate is good enough?", a: "It depends on the cost of errors and the fallback. A drafting assistant reviewed by people can launch with a lower rate than an agent acting automatically. Agree the threshold with the process owner before testing." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Evaluate AI agents on whole tasks, not single answers. Build a dataset of real cases with expected outcomes, run the agent against it, and score the final result (task success, correct end state), the trajectory (tool choice, argument validity, step count, policy compliance), output quality (groundedness, tone) and operations (latency, cost per task). Use deterministic checks wherever possible, LLM-as-judge with human calibration where needed, gate every release on regression results and keep scoring sampled production runs.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Evaluation needs traces from [[/blogs/ai-agent-observability|agent observability]], informs the thresholds in [[/blogs/human-in-the-loop-ai|human-in-the-loop design]] and tests the controls in [[/blogs/ai-agent-guardrails|guardrails]]. For retrieval-specific metrics, see [[/blogs/retrieval-augmented-generation|RAG]].",
          "Evaluation of individual models and prompts, rather than whole agents, is covered in [[/blogs/ai-model-evaluation|AI model evaluation]].",
        ],
      },
      {
        heading: "What to Measure",
        body: [],
        table: {
          headers: ["Level", "Metric", "How to score"],
          rows: [
            ["Outcome", "Task success", "Compare end state or output with expected result"],
            ["Outcome", "Escalation correctness", "Did it hand off when it should, and only then?"],
            ["Trajectory", "Tool-call accuracy", "Right tool, valid and correct arguments"],
            ["Trajectory", "Efficiency", "Steps, loops, redundant calls"],
            ["Quality", "Groundedness", "Claims supported by sources or tool results"],
            ["Safety", "Policy compliance", "No forbidden actions or disclosures"],
            ["Operations", "Latency and cost per task", "Measured per run"],
          ],
        },
      },
      {
        heading: "Building an Evaluation Dataset",
        body: [
          "Start from real cases, anonymized where needed. Include typical cases, known edge cases, cases where the right answer is to escalate, and adversarial inputs such as prompt injection attempts. For each case record the input, relevant context or system state, the expected outcome and, where useful, expected tool calls. Label who agreed the expected outcome. Keep a held-out set you do not tune against.",
        ],
        checklist: [
          "Typical cases weighted by real volume",
          "Edge cases from support tickets and incident reports",
          "Should-escalate cases",
          "Adversarial and malformed inputs",
          "Cases that exercise every tool and policy",
          "A held-out set for honest comparison",
        ],
      },
      {
        heading: "Scoring Methods",
        body: [
          "Prefer deterministic checks: did the order status become 'cancelled'? Does the output match the schema? Was the refund under the limit? Use reference comparison for extracted fields. Use LLM-as-judge for qualities such as helpfulness or groundedness, with a written rubric, and calibrate it by comparing its scores with human ratings on a sample. Use human review for high-stakes or ambiguous cases.",
        ],
        diagram: {
          variant: "evallifecycle",
          alt: "Evaluation lifecycle: collect cases, build dataset, run offline, score, gate release (highlighted), monitor live; production failures become new test cases.",
          caption: "A release gate turns evaluation from a report into a control.",
        },
      },
      {
        heading: "Evaluating Tool Use and Trajectories",
        body: [
          "For agents, the path matters. An agent that reaches the right answer by calling a forbidden tool has failed. Score each step: was the tool appropriate, were arguments valid, was the call necessary? Compare against expected calls where the path is fixed, and against state checks where several paths are acceptable. Flag loops and excessive steps, which drive cost and latency.",
        ],
        cta: {
          title: "Shipping agent changes without knowing what they break?",
          description: "ZSpace Labs sets up evaluation datasets, scoring and release gates so every prompt, model or tool change is tested against real cases.",
        },
      },
      {
        heading: "Regression Testing and Release Gates",
        body: [
          "Run the evaluation set on every change to prompts, tools, retrieval or model version, and compare against the current production version. Define gates: overall success must not drop, safety failures must be zero, cost and latency must stay within budgets. Track results by case type, because averages hide regressions in small but important categories.",
          "Rollout strategies after the gate, such as shadow tests and canaries, are covered in [[/blogs/ai-application-release-management|AI application release management]].",
        ],
      },
      {
        heading: "Production Evaluation",
        body: [
          "Offline sets never capture everything. In production, score a sample of live runs automatically, collect user and reviewer feedback, watch outcome signals (corrections, escalations, complaints) and review failures weekly. Turn every confirmed failure into a new test case. Store traces with privacy controls, because they contain customer data.",
        ],
      },
      {
        heading: "Tools for Agent Evaluation",
        body: [
          "Options include evaluation features in model providers' platforms, open-source frameworks, observability platforms with evaluation built in, and simple custom harnesses that replay cases and score results. Choose tools that store datasets with versions, run on every change, and link scores to traces so failures can be debugged.",
        ],
      },
      {
        heading: "Advantages and Limitations of Evaluation Approaches",
        body: [],
        table: {
          headers: ["Method", "Strengths", "Limitations"],
          rows: [
            ["Deterministic checks", "Exact, cheap, repeatable", "Only for checkable outcomes"],
            ["Reference comparison", "Clear for extraction tasks", "Needs labelled answers"],
            ["LLM-as-judge", "Scales to open-ended quality", "Bias, needs calibration"],
            ["Human review", "Most trusted", "Slow and costly"],
            ["Production signals", "Real behaviour", "Lagging and noisy"],
          ],
        },
      },
      {
        heading: "How to Set Up Evaluation Step by Step",
        body: [],
        checklist: [
          "**1. Agree success criteria** with the process owner",
          "**2. Collect and label 50 to 200 real cases**",
          "**3. Write deterministic checks** for end states and schemas",
          "**4. Add rubric-based judging** for open-ended quality, calibrated against humans",
          "**5. Run a baseline** and record results by case type",
          "**6. Add the run to CI** as a release gate",
          "**7. Sample production runs** and feed failures back into the set",
        ],
      },
      {
        heading: "Anatomy of an Evaluation Case",
        body: [
          "A good evaluation case records enough to replay the task and judge it objectively. Store cases as versioned data alongside the code they test.",
        ],
        code: {
          label: "Example: one agent evaluation case (illustrative)",
          text: "{\n  \"id\": \"refund-017\",\n  \"input\": \"I was charged twice for order ORD-104233, please fix it\",\n  \"setup\": { \"order\": \"ORD-104233\", \"payments\": [\"pi_a\", \"pi_b\"], \"delivered_days_ago\": 3 },\n  \"expected\": {\n    \"outcome\": \"refund_issued\",\n    \"refund_amount\": 59.90,\n    \"tools_required\": [\"get_order\", \"list_payments\", \"refund_payment\"],\n    \"tools_forbidden\": [\"cancel_order\"],\n    \"must_escalate\": false\n  },\n  \"checks\": [\"end_state_refund_count == 1\", \"reply_mentions_refund_timeline\"],\n  \"labelled_by\": \"support-lead\",\n  \"tags\": [\"refund\", \"duplicate_charge\"]\n}",
        },
      },
      {
        heading: "Evaluating Retrieval Inside Agents",
        body: [
          "Many agents depend on retrieval for policies or records. When an agent gives a wrong answer, check whether it retrieved the right sources before blaming the model. Add retrieval checks to evaluation cases (which sources should appear?) and measure faithfulness of the final answer to what was retrieved. The RAG-specific metrics are covered in [[/blogs/retrieval-augmented-generation|the RAG guide]].",
        ],
      },
      {
        heading: "Who Owns Evaluation",
        body: [
          "Evaluation works when ownership is clear. The process owner agrees what correct looks like and approves labels; engineers maintain the harness, CI gates and production sampling; reviewers or QA staff label new cases from production failures. Review results together after each release and monthly for trends.",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a support agent passes informal testing, but an evaluation set of 250 real tickets shows it issues refunds on orders outside the return window in a small share of cases. The fix is a policy check inside the refund tool, not a prompt change. The case is added to the regression set, and the release gate now requires zero policy violations.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Testing with a handful of invented examples",
          "Scoring only the final answer, not the actions",
          "Trusting an uncalibrated LLM judge",
          "Averages that hide failures in important case types",
          "No evaluation when the model provider updates a model",
          "Not adding production failures to the test set",
        ],
        cta: {
          title: "Want evidence that your agent is ready for production?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|AI evaluation and agent development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Agent evaluation is how you earn the right to automate. Build datasets from real cases, score outcomes and trajectories, gate releases and keep learning from production. Related: [[/blogs/ai-agent-observability|observability]], [[/blogs/ai-agent-guardrails|guardrails]] and [[/blogs/ai-agent-development|agent development]].",
        ],
      },
    ],
  },
];
