import type { BlogPost } from "./blog-data";

/**
 * AI interfaces cluster, part two (published 2026-10-08): AI agent handoffs,
 * AI action confirmation UX (absorbs the proposed human-in-the-loop UX
 * article) and AI agent trust UX. Sources checked 2026-10-08: Microsoft
 * Guidelines for Human-AI Interaction (Amershi et al., CHI 2019); Google
 * People + AI Guidebook; UCP checkout specification (requires_escalation
 * and continue_url handoff).
 */

export const aiInterfacePosts2: BlogPost[] = [
  // ---------------------------------------- AGENT HANDOFFS
  {
    slug: "ai-agent-handoffs",
    title: "AI Agent Handoffs: How Humans and AI Should Transfer Tasks Between Each Other",
    seoTitle: "AI Agent Handoffs: Transferring Tasks Between Humans and AI",
    excerpt:
      "How to design handoffs from human to AI, AI to human and AI to AI: what context, state, ownership, permissions and evidence must travel with the task.",
    category: "UI/UX",
    banner: "durableagentflow",
    sceneKind: "agent",
    date: "2026-10-08",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ai-automation", "ui-ux-design"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise", "ecommerce"],
    relatedSlugs: ["human-in-the-loop-ai", "agent-to-agent-communication", "ai-customer-support-automation"],
    faqs: [
      { q: "What is an AI agent handoff?", a: "It is the transfer of an in-progress task between a person and an AI agent, or between two agents, together with the context, state, permissions and ownership needed for the receiver to continue without starting over." },
      { q: "When should an AI hand off to a human?", a: "When the task exceeds its permissions or confidence, when a policy requires human judgment, when the user asks for a person, when repeated attempts fail, or when the situation is sensitive, such as complaints, vulnerability or legal risk." },
      { q: "What should a handoff include?", a: "The goal, current status, what has been done and decided, open questions, relevant evidence and records, who owns the task now, what the receiver is allowed to do and any deadline. A transcript alone is not a good handoff." },
      { q: "How do agents hand off to other agents?", a: "Through a structured task message containing the goal, inputs, constraints, permissions and expected output, often over agent-to-agent protocols or an orchestration layer. Ownership and the audit trail must stay clear across the chain." },
      { q: "What makes handoffs fail?", a: "Lost context so the customer repeats themselves, unclear ownership so nobody acts, permission mismatches, and incomplete work that looks finished. Each can be designed out with a handoff record and explicit status." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An **AI agent handoff** transfers an in-progress task between a person and an agent, or between two agents. A good handoff moves more than the conversation: it carries the **goal**, **current state**, **what was done and decided**, **evidence**, **open questions**, **who owns the task now** and **what the receiver is permitted to do**.",
          "Design three directions separately. **Human → AI** is delegation: scope and permissions matter most. **AI → human** is escalation: context and urgency matter most. **AI → AI** is orchestration: structured inputs, ownership and audit matter most.",
        ],
      },
      {
        heading: "Three directions, three design problems",
        body: [],
        table: {
          headers: ["Direction", "Typical moment", "Main risk", "What matters most"],
          rows: [
            ["Human → AI", "'Handle the follow-ups for these 12 accounts'", "Agent exceeds intent or permissions", "Clear scope, limits, deadline, approval rules"],
            ["AI → Human", "Agent cannot resolve a complaint", "Person must start over; customer repeats everything", "Summary, evidence, state, urgency, suggested next step"],
            ["AI → AI", "Triage agent passes a case to a billing agent", "Lost constraints; unclear ownership", "Structured task, permissions, single owner, trace ID"],
          ],
        },
      },
      {
        heading: "What a handoff must transfer",
        body: [
          "**Context transfer** means the receiver understands the situation: who the customer or requester is, what they want and why. **State transfer** means the receiver knows exactly where the task stands: which steps are complete, which are pending, which records were created. **Ownership** must move explicitly; a task with two owners has none. **Task status** tells everyone whether it is in progress, waiting or blocked. **Permissions** may change at the handoff: a human supervisor may approve what the agent could not, or a specialist agent may need different access. **Conversation history** should be available, but summarized; nobody should have to read 60 messages. **Evidence** (documents, tool results, screenshots) shows why decisions were made. **Incomplete work** must be labelled as such, so a half-done refund is not mistaken for a finished one. **Escalation** details say why the handoff happened and how urgent it is.",
        ],
        code: {
          label: "Handoff record (illustrative)",
          text: `handoff:
  task_id: case-88213
  direction: ai_to_human
  reason: refund above agent limit (EUR 420 > EUR 150)
  urgency: normal          # SLA: respond within 4 business hours
  goal: customer wants refund for damaged sofa
  status: waiting_for_approval
  done:
    - verified order #55120, delivered 3 days ago
    - collected 4 photos of damage (attached)
    - offered repair visit; customer declined
  pending:
    - approve full refund or partial + repair
  evidence: [photos x4, delivery note, chat summary]
  customer_expectation: told "a specialist will reply today"
  new_owner: support-tier2 queue
  permissions_needed: refunds.approve (up to EUR 1,000)
  transcript: link (summary above; full log available)`,
        },
      },
      {
        heading: "Human → AI: delegating well",
        body: [
          "Delegation fails when the agent's mandate is vague. The interface for handing work to an agent should capture the goal in the user's words, the scope (which accounts, which date range), the limits (spend, recipients, actions allowed), when to ask for approval and when the task should be considered done. Show the user a short plan before the agent starts on anything non-trivial, and make the task visible afterwards in a task list with status. For long-running delegated work, see [[/blogs/background-ai-agent-ux|background AI agent UX]].",
        ],
      },
      {
        heading: "AI → Human: escalating without starting over",
        body: [
          "The most visible failure in AI support is the customer who explains their problem to a bot, gets transferred, and explains it again. Prevent it by generating a handoff record (as above) and showing it to the person receiving the task before they reply. Tell the customer honestly what happens next and when. Route by reason and urgency, not just to a general queue; [[/blogs/ai-customer-support-automation|AI customer support automation]] covers routing in support teams. In commerce protocols the same idea appears as a formal escalation state: the UCP checkout specification, for example, requires the merchant to return a continue_url when a checkout needs buyer input the agent cannot provide, so the buyer can finish on the merchant's site ([[https://ucp.dev/specification/shopping/checkout/|UCP checkout]]).",
        ],
        checklist: [
          "Escalate on policy limits, low confidence, repeated failure, user request or sensitive situations",
          "Generate a structured summary, not just a transcript link",
          "Attach evidence and the actions already taken",
          "Mark incomplete actions clearly (pending, reversed, not started)",
          "Set the new owner and an SLA; tell the user what to expect",
          "Let the human hand the task back to the agent with new instructions or approval",
        ],
      },
      {
        heading: "AI → AI: structured, owned and traceable",
        body: [
          "When one agent hands work to another, use a structured task message rather than free text: goal, inputs, constraints, permissions, expected output format and deadline. The receiving agent should run with its own scoped permissions, not inherit everything the sender had. Keep a single owner (usually the orchestrator) responsible for the overall task, and carry one trace ID through every hop so the audit trail is complete. See [[/blogs/agent-to-agent-communication|agent-to-agent communication]] and [[/blogs/ai-agent-orchestration|AI agent orchestration]].",
        ],
      },
      {
        heading: "A practical handoff architecture",
        body: [
          "Treat handoffs as first-class objects in your system, not as side effects of a chat.",
        ],
        code: {
          label: "Handoff architecture (diagram)",
          text: `            ┌──────────── Task store ────────────┐
            │ task_id · goal · status · owner     │
            │ state · evidence · permissions      │
            └───────▲───────────────▲────────────┘
                    │ read/write    │ read/write
   Human (UI) ──────┤               ├────── Agent A
   task inbox,      │  handoff      │       (triage)
   approve/edit     │  record       │          │ structured
                    │               │          ▼ task message
                    │               ├────── Agent B
                    │               │       (billing)
            ┌───────┴───────────────┴────────────┐
            │ Router: reason + urgency → owner    │
            │ Notifications · SLA timers · audit  │
            └─────────────────────────────────────┘`,
        },
      },
      {
        heading: "Measuring handoff quality",
        body: [
          "Useful signals: how often customers repeat information after a handoff, time from escalation to first human action, share of handoffs returned because context was missing, tasks that stall with no owner, and resolution rate after handoff. Review a sample of handoff records each week; they show exactly where the agent's scope or context is wrong.",
        ],
        cta: {
          title: "Designing workflows where people and agents share tasks?",
          description: "ZSpace Labs builds AI automation with task stores, escalation routing and review interfaces. See [[/services/ai-automation|AI automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Handoffs are where human-AI systems succeed or frustrate people. Treat each one as a structured transfer of goal, state, evidence, ownership and permissions, design the three directions separately and make tasks visible in a shared store with a single owner. For when an agent should stop and ask instead of handing off, see [[/blogs/ai-action-confirmation-ux|AI action confirmation UX]].",
        ],
      },
    ],
  },

  // ---------------------------------------- ACTION CONFIRMATION UX
  {
    slug: "ai-action-confirmation-ux",
    title: "AI Action Confirmation UX: When Should an AI Ask Before Doing Something?",
    seoTitle: "AI Action Confirmation UX: When Should AI Ask Before Acting?",
    excerpt:
      "A decision framework for when an AI should act automatically, notify, ask for approval or hand control to a person, and how to design approval screens.",
    category: "UI/UX",
    banner: "autonomylevels",
    sceneKind: "agent",
    date: "2026-10-08",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ui-ux-design", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "fintech", "ecommerce"],
    relatedSlugs: ["human-in-the-loop-ai", "ai-agent-autonomy-levels", "ai-agent-trust-ux"],
    faqs: [
      { q: "When should an AI ask for confirmation?", a: "When an action is hard to reverse, spends money, communicates externally, exposes personal data, uses elevated permissions or affects many people or records. Low-risk, reversible actions inside the user's own workspace usually should not need confirmation." },
      { q: "How do you avoid confirmation fatigue?", a: "Confirm only actions that are consequential, batch related approvals, make low-risk actions undoable instead of confirmable, show only what changes, and let users raise or lower confirmation levels for routine tasks within policy." },
      { q: "What should an approval request show?", a: "What will happen, to what and whom, the cost or impact, why the AI proposes it, the data it relied on, a risk indicator, and clear options to approve, edit, reject or delegate, plus what happens if nobody responds." },
      { q: "Is undo better than confirmation?", a: "For reversible actions, often yes: act immediately and offer undo for a period. For irreversible actions such as payments, external emails or deletions without recovery, confirm before acting." },
      { q: "Who decides the confirmation level?", a: "The product and risk owners set defaults by action type; users may tighten them, and sometimes loosen them within limits. The decision should be enforced in the backend, not only in the interface." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An AI should ask before acting when getting it wrong would be costly or hard to undo. Score each action on seven factors: **risk**, **reversibility**, **financial impact**, **external communication**, **privacy**, **permissions** and **blast radius**. Then map the score to one of four modes: **automatic** for low risk, **notify with optional review** for medium, **explicit approval** for high and **human-controlled** for critical actions.",
          "Asking too often is a failure too. People approve without reading when every step needs a click. Prefer undo for reversible actions, batch related approvals and reserve confirmation for actions that matter.",
        ],
      },
      {
        heading: "The seven factors",
        body: [],
        table: {
          headers: ["Factor", "Lower risk", "Higher risk"],
          rows: [
            ["Risk of error", "AI is accurate on this task; easy to check", "Ambiguous request; judgment involved"],
            ["Reversibility", "Undo available (draft, archive, toggle)", "Irreversible (payment captured, email sent, record deleted)"],
            ["Financial impact", "None or trivial", "Spends, refunds or commits money"],
            ["External communication", "Internal or private", "Message to customers, partners or the public"],
            ["Privacy", "No personal data moves", "Shares or exposes personal or sensitive data"],
            ["Permissions", "Within the user's normal rights", "Uses elevated or delegated rights"],
            ["Blast radius", "One item, one user", "Many records, many recipients, production systems"],
          ],
        },
      },
      {
        heading: "The decision framework",
        body: [
          "Classify by the highest-risk factor, not the average: a single irreversible external payment is high risk even if everything else is low.",
        ],
        table: {
          headers: ["Tier", "Typical actions", "Mode", "UX"],
          rows: [
            ["LOW", "Tag a ticket, draft a reply, sort a list, summarize", "Automatic", "Do it; show in activity log; offer undo"],
            ["MEDIUM", "Update a CRM field, reschedule an internal meeting, apply a small credit within policy", "Notify / optional review", "Do it, notify, allow review and undo for a window"],
            ["HIGH", "Send an email to a customer, place an order, issue a refund, share a document externally", "Explicit approval", "Approval card before acting; approve, edit or reject"],
            ["CRITICAL", "Large payments, bulk deletion, contract changes, production changes, legal or medical decisions", "Human-controlled", "AI prepares and recommends; a person performs or co-signs the action"],
          ],
        },
        code: {
          label: "Human approval flow (diagram)",
          text: `Agent proposes action
        │
        ▼
Score: risk · reversibility · money · external ·
       privacy · permissions · blast radius
        │
  ┌─────┼───────────────┬──────────────────┐
  ▼     ▼               ▼                  ▼
LOW   MEDIUM           HIGH             CRITICAL
act   act + notify     approval card    human performs /
log   undo window      approve·edit·    co-signs; AI
undo                   reject·delegate  prepares evidence
        │               │ no response?
        │               └─▶ expire safely (do nothing)
        ▼
Activity log + audit record for every tier`,
        },
      },
      {
        heading: "Designing the approval request",
        body: [
          "When an action needs approval, the request should let a person decide in seconds without opening other tools. It needs an **action summary** in plain language, the **object and recipients** affected, the **impact** (amount, number of records), a **risk indicator** and why it is that level, the **context and evidence** the AI used, and four responses: **approve**, **reject**, **edit** and **delegate** to someone else, plus an **escalation** path when the approver is unsure. State what happens if nobody responds; the safe default is that nothing happens.",
          "For actions that were taken automatically, undo must be real: reversing a database change is easy, but recalling an email or a payment is not. [[/blogs/ai-agent-rollback|AI agent rollback]] covers what can be reversed and how.",
        ],
        code: {
          label: "Approval card anatomy (illustrative)",
          text: `┌──────────────────────────────────────────────┐
│ ● HIGH  Refund requires your approval        │
│                                              │
│ Refund EUR 420.00 to Maria K.                │
│ Order #55120 · sofa delivered damaged        │
│                                              │
│ Why: damage confirmed in 4 photos; customer  │
│ declined repair. Policy allows full refund   │
│ within 14 days (day 3).                      │
│ Evidence: photos · delivery note · chat      │
│                                              │
│ [ Approve refund ] [ Edit amount ] [ Reject ]│
│ Delegate…   Escalate to finance…             │
│ Expires in 24 h — no action if not approved  │
└──────────────────────────────────────────────┘`,
        },
      },
      {
        heading: "Approve, reject, edit, delegate",
        body: [
          "**Approve** should commit exactly what was shown; if anything changed since (price, stock, recipient), show it again. **Reject** should ask for a short reason, which becomes feedback for the agent and its evaluation set. **Edit** lets the approver correct details without rejecting the whole action, and the edited version is what executes. **Delegate** sends the request to someone with more context or authority, keeping the history. For queues of many approvals, see the operational guidance in [[/blogs/human-in-the-loop-ai|human-in-the-loop AI]].",
        ],
      },
      {
        heading: "Avoiding confirmation fatigue",
        body: [
          "Over-confirming has real costs: slower work, users who stop reading and approve everything, and frustration that pushes people to disable the AI. Practical ways to keep confirmations meaningful:",
        ],
        checklist: [
          "Use undo instead of confirmation for reversible actions",
          "Batch related actions into one review ('send these 8 follow-ups')",
          "Show only what changes, highlighted, not the whole record",
          "Remember approvals for identical repeated actions within limits the user sets",
          "Let users tighten levels freely and loosen them only within policy",
          "Track approval rates: near-100 percent approval with seconds of review suggests the step is either unnecessary or not being read",
        ],
      },
      {
        heading: "Enforce it in the backend",
        body: [
          "A confirmation that exists only in the interface can be bypassed by a bug, a different client or a prompt injection. Store the confirmation tier per action in policy, require an approval token from the right person for high-tier actions at the API, and log who approved what. The same thinking at the level of the whole agent is in [[/blogs/ai-agent-autonomy-levels|AI agent autonomy levels]].",
        ],
        cta: {
          title: "Designing approvals for AI features?",
          description: "ZSpace Labs designs approval flows, review screens and the backend controls that enforce them. See [[/services/ui-ux-design|UI/UX design]] and [[/services/ai-automation|AI automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "The right answer to 'should the AI ask first?' depends on what the action can break. Score actions on risk, reversibility, money, external reach, privacy, permissions and blast radius; automate the low tier, notify on the medium, require approval on the high and keep people in control of the critical. Design approval requests that can be judged in seconds, prefer undo where it is genuine and enforce the rules on the server. For explaining actions after they happen, see [[/blogs/ai-agent-trust-ux|AI agent trust UX]].",
        ],
      },
    ],
  },

  // ---------------------------------------- AGENT TRUST UX
  {
    slug: "ai-agent-trust-ux",
    title: "AI Agent Trust UX: How Products Should Make Autonomous Actions Understandable",
    seoTitle: "AI Agent Trust UX: Making Autonomous Actions Understandable",
    excerpt:
      "How to show what an AI agent is doing, why, with which data, what will happen, what happened and what can be undone, without overclaiming certainty.",
    category: "UI/UX",
    banner: "agentauditflow",
    sceneKind: "agent",
    date: "2026-10-08",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ui-ux-design", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "fintech"],
    relatedSlugs: ["ai-transparency-ux", "human-ai-interaction-design", "ai-agent-audit-trail"],
    faqs: [
      { q: "What is AI agent trust UX?", a: "It is the design of interface elements that make an agent's actions understandable: plans before acting, live activity during a task, receipts afterwards, the data and reasons behind decisions and clear undo or correction options." },
      { q: "How is it different from AI transparency?", a: "AI transparency usually concerns outputs: what the AI can do, its limits, sources and uncertainty. Agent trust UX concerns actions over time: what the agent will do, is doing and did, and how to reverse it." },
      { q: "Should agents show their reasoning?", a: "Show a concise, faithful explanation of why an action was chosen and what data it relied on. Long raw reasoning traces are hard to read and may not reflect the real basis for a decision, so they are a poor substitute for clear evidence." },
      { q: "How should uncertainty be shown?", a: "Only where it is meaningful and calibrated: flag when the agent lacked data, made an assumption or chose between close alternatives, and say what the user can check. Avoid decorative confidence percentages that are not measured." },
      { q: "Does more transparency always increase trust?", a: "No. The goal is appropriate reliance: users should trust the agent where it is reliable and check it where it is not. Too much detail is ignored; too little hides problems." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "**AI agent trust UX** makes autonomous actions understandable at three moments: **before** (what the agent plans to do and why), **during** (what it is doing now) and **after** (what happened, what changed and what can be undone). Across all three, show **what data it used** and be honest about **uncertainty** where it is real.",
          "The goal is not maximum trust. It is appropriate reliance: people should rely on the agent where it is reliable and check it where it is not.",
        ],
      },
      {
        heading: "Trust UX vs AI transparency",
        body: [
          "[[/blogs/ai-transparency-ux|AI transparency]] covers what an AI system can and cannot do, its sources and its uncertainty, mostly around outputs. Agent trust UX applies the same honesty to actions over time. An agent sending emails, updating records or buying things needs interfaces that let a person follow, verify and reverse its work, not just read its answers. Both build on established guidance such as Microsoft's Guidelines for Human-AI Interaction, which include making clear what the system can do, showing why it did what it did and supporting efficient correction ([[https://www.microsoft.com/en-us/research/publication/guidelines-for-human-ai-interaction/|Microsoft Research]]).",
        ],
      },
      {
        heading: "Six questions the interface should answer",
        body: [],
        table: {
          headers: ["Question", "Interface element", "Example"],
          rows: [
            ["What is the agent doing?", "Live status, current step", "'Checking stock with 3 suppliers (2 of 3 done)'"],
            ["Why?", "Short reason tied to the goal", "'Supplier B is cheapest that can deliver by Friday'"],
            ["What data did it use?", "Evidence links, as-of times", "'Price list updated today 09:12; your budget rule'"],
            ["What will happen?", "Plan or action preview", "'Order 40 units from Supplier B for EUR 1,860'"],
            ["What happened?", "Receipt, activity timeline", "'Order PO-7781 placed 10:04; confirmation received'"],
            ["What can be undone?", "Undo, cancel or correct, with deadlines", "'Cancel free of charge until 16:00 today'"],
          ],
        },
      },
      {
        heading: "Before: plans and previews",
        body: [
          "For multi-step tasks, show a short plan before starting: the steps, the systems the agent will touch and the points where it will ask for approval. Let people edit or reject the plan. For single consequential actions, show a preview with the exact effect; [[/blogs/ai-action-confirmation-ux|AI action confirmation UX]] covers when that preview must become an approval.",
        ],
      },
      {
        heading: "During: visible progress",
        body: [
          "Show the current step in plain language, progress through the plan and anything the agent is waiting for. Make it possible to pause or stop. Avoid raw tool names and JSON; translate them ('Searching your CRM for open deals' rather than crm.search). For tasks that run in the background, see [[/blogs/background-ai-agent-ux|background AI agent UX]].",
        ],
      },
      {
        heading: "After: receipts and an activity timeline",
        body: [
          "Every completed action should leave a receipt: what was done, to which objects, with identifiers, amounts and times, and how to reverse it. An activity timeline collects receipts so people can review what the agent did today without reading transcripts. Behind the interface, the same events should be recorded in an audit trail; see [[/blogs/ai-agent-audit-trail|AI agent audit trail]].",
        ],
        code: {
          label: "Activity timeline (illustrative)",
          text: `Today · Procurement agent
──────────────────────────────────────────────────────
10:04  Placed order PO-7781 · Supplier B · 40 units
       EUR 1,860 · approved by you 10:02
       ↺ Cancel free until 16:00
09:58  Compared 3 suppliers · price list as of 09:12
       Evidence ▸
09:41  Drafted reorder for SKU-2231 (stock below 15)
       Rule: reorder point ▸
09:40  Skipped SKU-1180 · price rose 22% vs last order
       Needs your decision ▸`,
        },
      },
      {
        heading: "Showing data and reasons",
        body: [
          "Explanations should be short, specific and faithful: the rule, data and constraint that led to the action, with links to the evidence. Prefer 'Chosen because it is the only supplier with stock that delivers by Friday' over a generic 'Based on analysis of multiple factors'. Show when data was last updated, because stale data is a common cause of wrong actions. Long raw reasoning traces are not a good substitute: they are hard to read and may not reflect what actually drove the decision.",
        ],
      },
      {
        heading: "Communicating uncertainty carefully",
        body: [
          "Uncertainty is useful only when it is meaningful. Flag the specific cases where the agent made an assumption, lacked data, found conflicting sources or chose between close options, and say what the user could check. Avoid numeric confidence scores unless they are calibrated against measured accuracy; an unmeasured '92% confident' invites misplaced trust. Do not claim that a particular design will make users trust the product more; measure behaviour instead, such as how often people check, correct or undo agent actions and whether those corrections were warranted.",
        ],
      },
      {
        heading: "Design checklist",
        body: [],
        checklist: [
          "Plans shown before multi-step work, editable by the user",
          "Live status in plain language with pause and stop",
          "Receipts for every action with identifiers and undo deadlines",
          "A filterable activity timeline per agent",
          "Evidence links and data timestamps for decisions",
          "Specific, honest uncertainty flags; no uncalibrated percentages",
          "Clear labelling of what was done by the agent vs by a person",
          "The same events recorded in the audit trail",
        ],
        cta: {
          title: "Designing products with autonomous AI features?",
          description: "ZSpace Labs designs agent interfaces, activity logs and review flows backed by real audit data. See [[/services/ui-ux-design|UI/UX design]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "People can work with autonomous agents when they can see what the agent intends, what it is doing and what it did, why, using which data, and how to reverse it. Design for those moments, keep explanations specific and evidence-based, treat uncertainty honestly and measure reliance rather than claiming trust. For handling the cases where the agent gets it wrong, see [[/blogs/ai-error-handling-ux|AI error handling UX]].",
        ],
      },
    ],
  },
];
