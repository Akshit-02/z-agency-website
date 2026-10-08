import type { BlogPost } from "./blog-data";

/**
 * AI agent operations cluster, part one (published 2026-10-08): audit
 * trails, rollback, sandboxes and tool selection. Twelve proposals in this
 * brief were rejected as duplicates of existing articles (see
 * docs/seo/next-20-ai-agent-content-audit.md). Copy is evergreen by
 * request: no specific years in titles, headings, FAQs or body text.
 * Sources checked 2026-10-08: EU AI Act Articles 12 and 19, W3C Trace
 * Context, OpenTelemetry GenAI semantic conventions (development status),
 * Anthropic engineering on advanced tool use, OpenAI function-calling guide.
 */

export const agentOpsPosts1: BlogPost[] = [
  // ---------------------------------------- AUDIT TRAIL
  {
    slug: "ai-agent-audit-trail",
    title: "How to Build an Audit Trail for AI Agent Actions",
    seoTitle: "How to Build an Audit Trail for AI Agent Actions",
    excerpt:
      "What an AI agent audit trail should record, how to structure audit events with trace and correlation IDs, and how to keep them tamper-resistant and private.",
    category: "AI & Automation",
    banner: "agentauditflow",
    sceneKind: "security",
    bannerAlt:
      "AI agent audit trail: Request (who + task), Agent run (trace ID), Tool calls (highlighted: inputs and outputs), Approvals, Resulting changes, Append-only store.",
    date: "2026-10-08",
    readingTime: "5 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["fintech", "healthcare-healthtech", "b2b-enterprise"],
    relatedSlugs: ["ai-agent-access-control", "ai-agent-authentication", "ai-agent-rollback"],
    faqs: [
      { q: "What is an AI agent audit trail?", a: "A tamper-resistant record of what an AI agent did: who asked, which agent acted and on whose behalf, which tools it called with which inputs, what came back, what was approved and what changed in business systems, linked by IDs so any action can be traced end to end." },
      { q: "How is an audit trail different from observability?", a: "Observability helps engineers debug and monitor performance and is often sampled and short-lived. An audit trail is a complete, durable record of consequential actions for accountability, investigations and compliance. They can share data, but their retention, access and integrity requirements differ." },
      { q: "Should we log full prompts and model outputs?", a: "Log enough to reconstruct decisions. For consequential actions that usually means the inputs to each tool call, the outputs that informed the decision and references to the sources used. Full prompts may contain personal or confidential data, so store them separately with stricter access and shorter retention, or store hashes and references." },
      { q: "How long should agent audit logs be kept?", a: "Long enough to cover disputes, investigations and legal obligations for the actions involved. For high-risk AI systems, the EU AI Act requires providers to keep automatically generated logs for at least six months unless other law says otherwise. Set retention per data type with legal advice." },
      { q: "How do we make audit logs tamper-resistant?", a: "Write them to append-only storage the agent cannot modify, separate write and read permissions, hash-chain or sign records, and restrict deletion to an audited retention process." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An AI agent audit trail records every consequential thing an agent does in a form you can trust later: **who** requested the task, **which agent** acted and **on whose behalf**, **what** it decided, **which tools** it called with which inputs and outputs, **who approved** what, and **what changed** in business systems, all linked by a trace ID and written to append-only storage the agent cannot alter. Design it before the agent can change data, call paid APIs or contact customers, because reconstructing those actions afterwards from scattered application logs rarely works.",
        ],
      },
      {
        heading: "Why agents need a dedicated audit trail",
        body: [
          "An AI agent becomes hard to account for the moment it can change records, spend money or message customers without a person approving every step. When something goes wrong, three questions come up immediately: what exactly did it do, why did it do it, and who allowed it? Application logs answer fragments of those questions across many systems. A purpose-built audit trail answers them in one place.",
          "Audit trails also make other controls work. Rollback depends on knowing precisely which actions to reverse (see [[/blogs/ai-agent-rollback|AI agent rollback]]); accountability depends on evidence (see [[/blogs/ai-agent-accountability|who is responsible when an AI agent makes a mistake]]); and regulated uses may require automatic logging. The EU AI Act, for example, requires high-risk AI systems to support automatic recording of events over their lifetime and providers to keep those logs for at least six months unless other law provides otherwise.",
        ],
      },
      {
        heading: "Audit trail vs observability vs application logs",
        body: [],
        table: {
          headers: ["", "Audit trail", "Observability traces", "Application logs"],
          rows: [
            ["Purpose", "Accountability, investigation, compliance", "Debugging, performance, quality", "Troubleshooting a service"],
            ["Coverage", "Every consequential action, complete", "Often sampled", "Whatever developers log"],
            ["Retention", "Months to years, by policy", "Days to weeks", "Days to weeks"],
            ["Integrity", "Append-only, tamper-evident", "Best effort", "Best effort"],
            ["Access", "Restricted, audited", "Engineering", "Engineering"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "Use observability to understand agents and an audit trail to account for them. Share IDs between them so an investigator can jump from an audit event to the detailed trace.",
        },
      },
      {
        heading: "What to record",
        body: [
          "Record events at the level of decisions and actions, not every token. For each agent run:",
        ],
        table: {
          headers: ["Field group", "Contents"],
          rows: [
            ["Identity", "Agent identity and version; user it acted for; authorizing session or delegation; tenant"],
            ["Task", "Request or trigger, channel, task type, autonomy level in force"],
            ["Context references", "Sources retrieved (document IDs, record IDs, versions), not necessarily full text"],
            ["Decisions", "Chosen action and a short structured reason; model and prompt version"],
            ["Tool calls", "Tool name and version, validated inputs, outputs or output references, status, duration"],
            ["Approvals", "Approver identity, what they were shown, decision, timestamp"],
            ["Changes", "System, record, before/after or diff reference, external IDs (refund ID, message ID)"],
            ["Timing and linkage", "Timestamps, trace ID, event ID, parent event ID, correlation IDs to business systems"],
          ],
        },
      },
      {
        heading: "Trace, event and correlation IDs",
        body: [
          "IDs turn scattered records into a story. Use a **trace ID** for the whole agent run (W3C Trace Context's trace ID works well if you already use distributed tracing), a unique **event ID** for each audit record with a **parent event ID** to show sequence, and **correlation IDs** that connect to business systems: the order number, ticket ID or payment reference. Pass the trace ID into every tool call and store it with every change, so an auditor can start from a refund in your payment system and find the agent run, the approval and the inputs that led to it.",
          "If you trace AI workloads with OpenTelemetry, its generative AI semantic conventions define attributes for model calls, tools and agent runs. They are still marked as in development, so treat attribute names as subject to change.",
        ],
      },
      {
        heading: "An example audit event",
        body: [],
        code: {
          label: "Audit event for a refund issued by an agent (illustrative)",
          text: `{
  "event_id": "evt_01J9Z6K4Q8",
  "parent_event_id": "evt_01J9Z6K3X2",
  "trace_id": "4bf92f3577b34da6a3ce929d0e0e4736",
  "timestamp": "<ISO 8601 UTC timestamp>",
  "event_type": "tool_call.completed",
  "agent": { "id": "support-agent", "version": "3.4.1", "model": "provider/model-name@version" },
  "on_behalf_of": { "user_id": "cust_88231", "delegation_id": "del_5521" },
  "task": { "type": "refund_request", "channel": "chat", "autonomy_level": 4 },
  "tool": { "name": "issue_store_credit", "version": "2" },
  "input": { "order_id": "ORD-104552", "amount": 18.00, "currency": "GBP", "reason_code": "late_delivery" },
  "policy": { "rule": "refund_under_25_auto", "result": "allowed" },
  "result": { "status": "success", "external_id": "cr_77310" },
  "correlation": { "order_id": "ORD-104552", "ticket_id": "T-55102" },
  "sources": ["policy:refunds@v12", "order:ORD-104552@rev7"]
}`,
        },
        callout: {
          type: "tip",
          text: "Store the policy rule that allowed the action and the versions of the sources used. When policies change, you can still explain why an older action was permitted at the time.",
        },
      },
      {
        heading: "Tamper resistance, privacy and retention",
        body: [],
        checklist: [
          "**Append-only storage** the agent and application cannot modify or delete",
          "**Separate permissions** for writing, reading and administering logs; log access itself is audited",
          "**Hash chaining or signing** so gaps and edits are detectable",
          "**Data minimization:** store references and hashes for large or sensitive content; redact secrets and payment data",
          "**Tiered retention:** decision and change records kept longer than raw prompts and outputs",
          "**Deletion by policy only**, through an audited process that respects legal holds and privacy rights",
        ],
        cta: {
          title: "Putting agents in front of real systems?",
          description: "ZSpace Labs designs agent audit trails, identity and approval records alongside the agents themselves, so every action can be explained and reversed. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Relying on model provider logs or chat transcripts as the audit record",
          "Logging the agent's actions without the user it acted for",
          "No link between the agent run and the change in the business system",
          "Storing full prompts with personal data indefinitely",
          "Letting the same service that acts also edit or delete its own logs",
          "Designing the audit trail after an incident",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "An audit trail is what makes an agent accountable: identity, task, decisions, tool calls, approvals and changes, linked by IDs and stored where they cannot be quietly altered. Build it alongside [[/blogs/ai-agent-access-control|access control]] and [[/blogs/ai-agent-authentication|agent authentication]], connect it to [[/blogs/ai-agent-observability|observability]] for detail, and use it as the foundation for rollback and incident response.",
        ],
      },
    ],
  },

  // ---------------------------------------- ROLLBACK
  {
    slug: "ai-agent-rollback",
    title: "AI Agent Rollback: How to Safely Undo Autonomous Actions",
    seoTitle: "AI Agent Rollback: How to Safely Undo Autonomous Actions",
    excerpt:
      "How to reverse or compensate for AI agent actions: transactions, compensating actions, versioning, idempotency, and what to do when an action cannot be undone.",
    category: "AI & Automation",
    banner: "rollbacktree",
    sceneKind: "workflow",
    bannerAlt:
      "Rollback decision path: Wrong action found, Still pending?, Reversible operation?, Compensating action (highlighted), Correct + notify, Record in audit trail.",
    date: "2026-10-08",
    readingTime: "4 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["fintech", "ecommerce", "b2b-enterprise"],
    relatedSlugs: ["ai-agent-audit-trail", "ai-agent-incident-response", "durable-ai-agents"],
    faqs: [
      { q: "What is AI agent rollback?", a: "A rollback mechanism lets a system reverse, or compensate for, an action an AI agent took when the action is incorrect, unsafe or no longer valid. Depending on the action, that may mean cancelling it before it completes, restoring a previous version, or performing a compensating action such as a refund reversal." },
      { q: "Can every agent action be undone?", a: "No. Database changes and many business operations can be reversed or compensated; sent messages, disclosed information, physical shipments and some payments cannot be literally undone. For those, the options are prevention (approval before the action) and correction afterwards." },
      { q: "What is a compensating action?", a: "A new action that semantically cancels an earlier one when the original cannot simply be deleted: issuing a reversal for a charge, cancelling a booking, restoring stock. It is the standard approach for undoing work that spans several systems, known from the saga pattern in distributed systems." },
      { q: "Why does idempotency matter for rollback?", a: "Agents and workflows retry. If actions are idempotent, a retried action does not run twice, and a retried compensation does not over-correct. Without idempotency, recovery can create new errors." },
      { q: "Who should trigger a rollback?", a: "Automatic rollback for clear, rule-based failures (a validation check fails after the action); a person for anything involving judgement, customers or money. Every rollback should itself be recorded in the audit trail." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI agent rollback means reversing or compensating for an agent's action when it turns out to be wrong. Not every action can literally be undone, so design for it before the agent goes live: classify each action by reversibility, prefer reversible operations, keep pending or draft states where possible, record enough in the audit trail to know exactly what changed, make actions and their compensations idempotent, and require approval for actions that cannot be reversed. When something goes wrong, cancel if it is still pending, restore a version if one exists, otherwise run a compensating action, then correct, notify and record.",
        ],
      },
      {
        heading: "Undo, reverse and compensate are different things",
        body: [
          "In a single database, a transaction can roll back cleanly before it commits. Agents rarely work inside one transaction: they call several systems over seconds or hours, each committing on its own. Once a refund is issued, an email sent or a stock level changed, the original operation is done, and the only way back is a new operation that offsets it. Distributed systems have long handled this with the saga pattern: each step has a defined compensating step that runs if a later step fails or the outcome is rejected.",
        ],
        table: {
          headers: ["Mechanism", "How it works", "Example"],
          rows: [
            ["Transaction rollback", "Uncommitted changes discarded in one system", "Multi-row update aborted on validation failure"],
            ["Cancellation", "Pending action stopped before it takes effect", "Scheduled email or payout cancelled"],
            ["Version restore", "Previous version of a record or document reinstated", "Product description reverted from history"],
            ["Snapshot restore", "Whole dataset or environment returned to a point in time", "Restore a test catalogue after a bulk edit"],
            ["Compensating action", "New action that offsets the original", "Reverse a credit, cancel a booking, re-add stock"],
            ["Manual correction", "A person fixes what cannot be reversed", "Follow-up message correcting wrong information"],
          ],
        },
      },
      {
        heading: "Classify actions by reversibility",
        body: [
          "Before giving an agent a tool, decide which class it belongs to. The class decides how much autonomy the action can have; see [[/blogs/ai-agent-autonomy-levels|how much autonomy to give an AI agent]].",
        ],
        table: {
          headers: ["Class", "Examples", "Design rule"],
          rows: [
            ["Freely reversible", "Tagging, drafts, internal notes, status in a sandbox", "Agent may act; log it"],
            ["Reversible with effort", "Record edits with history, price changes, stock adjustments", "Version every change; scripted compensation"],
            ["Compensable", "Refunds, credits, bookings, orders", "Defined compensating action; limits; idempotency keys"],
            ["Irreversible", "Messages sent, data disclosed, deletions without backup, some payments", "Approval before acting; delay windows; drafts"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "The cheapest rollback is the one you never need: put irreversible actions behind approval or a short delay window, and let agents act freely only where you can undo the result.",
        },
      },
      {
        heading: "A rollback decision tree",
        body: [],
        code: {
          label: "When an agent action is found to be wrong",
          text: `Is the action still pending (queued, scheduled, draft)?
├─ Yes → Cancel it. Record the cancellation.
└─ No → Does the system keep versions or snapshots?
        ├─ Yes → Restore the previous version. Verify. Record.
        └─ No → Is there a defined compensating action?
                ├─ Yes → Run it with an idempotency key. Verify the
                │        net effect. Record.
                └─ No → Irreversible. Escalate to a person:
                         correct, notify affected people, record,
                         and add an approval gate for this action type.`,
        },
      },
      {
        heading: "Design patterns that make rollback possible",
        body: [],
        checklist: [
          "**Drafts and pending states:** agents create drafts or scheduled actions that become final after approval or a delay",
          "**Versioning:** record histories for documents, records, prices and configuration",
          "**Idempotency keys:** every write and every compensation carries a key derived from the run and step, so retries never double-apply",
          "**Compensation registry:** each write tool declares its compensating tool and the data it needs",
          "**Audit linkage:** every change stores the trace ID and before/after state (see [[/blogs/ai-agent-audit-trail|AI agent audit trail]])",
          "**Bulk-change limits:** cap the number of records an agent can change per run, so a mistake stays small",
          "**Post-action checks:** validate the result immediately and trigger compensation automatically on rule failures",
        ],
        cta: {
          title: "Want agents whose mistakes you can undo?",
          description: "ZSpace Labs designs agent tools with versioning, idempotency and compensating actions built in, connected to audit trails and approvals. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Rollback across a multi-step run",
        body: [
          "When a run of several steps fails halfway, decide in advance whether to compensate completed steps or continue later. Long-running agents on a durable workflow engine can resume from the failed step or run compensations in reverse order; see [[/blogs/durable-ai-agents|durable execution for AI agents]]. Make the policy explicit per workflow: for an order change, completed steps might be compensated; for a research task, partial results might simply be kept.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Assuming a database backup is a rollback plan for business actions",
          "Compensations that are not idempotent, so a retry refunds twice",
          "No record of the before state, so nobody knows what to restore",
          "Irreversible actions allowed at full autonomy",
          "Rolling back silently without telling affected customers",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Rollback for AI agents is mostly design work done in advance: know which actions are reversible, keep drafts and versions, define compensating actions, make everything idempotent and gate what cannot be undone. When something does go wrong, follow the decision tree and record every step. For the wider response process, see [[/blogs/ai-agent-incident-response|AI agent incident response]].",
        ],
      },
    ],
  },

  // ---------------------------------------- SANDBOX
  {
    slug: "ai-agent-sandbox",
    title: "AI Agent Sandbox: How to Isolate Agents Before They Get Production Access",
    seoTitle: "AI Agent Sandbox: Isolating Agents Before Production Access",
    excerpt:
      "How to isolate AI agents before production: files, network, data, secrets and tools, mock systems, and how sandbox, staging and production differ.",
    category: "AI & Automation",
    banner: "sandboxcompare",
    sceneKind: "security",
    bannerAlt:
      "Sandbox, staging and production (sandbox highlighted) compared by data, tools, network, secrets and purpose.",
    date: "2026-10-08",
    updated: "2026-10-08",
    readingTime: "4 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["fintech", "saas-technology", "healthcare-healthtech"],
    relatedSlugs: ["ai-agent-evaluation", "ai-coding-agent-security", "ai-agent-rollback"],
    faqs: [
      { q: "What is an AI agent sandbox?", a: "An isolated environment where an agent can run with realistic tools and data but cannot affect production systems, real customers or real money. It restricts files, network access, data, secrets and tools, and is usually disposable so each test starts clean." },
      { q: "How is a sandbox different from staging?", a: "A sandbox is for exploring and testing agent behaviour safely, often with mock tools and synthetic data, and is reset frequently. Staging mirrors production configuration and integrations as closely as possible to validate a release before it goes live." },
      { q: "Can agents be tested safely against real systems?", a: "Use vendor sandbox or test modes where they exist (payments, messaging, commerce platforms), read-only access to copies of data, and mock services for systems without test modes. Never point a new agent at production write APIs to see what happens." },
      { q: "What data should a sandbox use?", a: "Synthetic or masked copies of production data that preserve realistic patterns without exposing personal or confidential information. Include edge cases and adversarial inputs deliberately." },
      { q: "Do sandboxes matter after launch?", a: "Yes. Every change to models, prompts, tools or policies should run through the sandbox and staging again before reaching production." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An AI agent sandbox is an isolated, usually disposable environment where an agent can use realistic tools and data without touching production. Isolate five things: **files** (no access outside a workspace), **network** (allowlisted destinations only), **data** (synthetic or masked copies), **secrets** (test credentials only) and **tools** (mocks or vendor test modes for anything that writes). Add execution limits on steps, time and cost. Use the sandbox to explore behaviour and run scenario tests, staging to validate a release against production-like integrations, and production only after both pass.",
        ],
      },
      {
        heading: "Why agents need isolation before production",
        body: [
          "A new agent is unpredictable in ways traditional software is not. It may call tools in an order you did not expect, follow instructions hidden in a test document, retry a failing call dozens of times or act on the wrong record. Discovering that in production means real refunds, real emails and real data changes. A sandbox lets you see that behaviour first, cheaply, and without consequences.",
        ],
      },
      {
        heading: "Sandbox vs staging vs production",
        body: [],
        table: {
          headers: ["", "Sandbox", "Staging", "Production"],
          rows: [
            ["Purpose", "Explore and test agent behaviour", "Validate a release end to end", "Serve real users"],
            ["Data", "Synthetic or masked", "Masked or production-like", "Real"],
            ["Tools", "Mocks and vendor test modes", "Real integrations in test mode", "Real integrations"],
            ["Network", "Allowlist only", "Production-like, restricted", "Production"],
            ["Secrets", "Test credentials", "Staging credentials", "Production credentials, tightly scoped"],
            ["Lifetime", "Disposable, reset per run or suite", "Long-lived, mirrors production", "Permanent"],
            ["Who uses it", "Developers, testers, evaluation jobs", "Release process", "Customers and staff"],
          ],
        },
      },
      {
        heading: "What to isolate",
        body: [],
        table: {
          headers: ["Layer", "Isolation", "Why"],
          rows: [
            ["Filesystem", "Workspace-only access in a container or VM", "Agents with code or file tools can read or overwrite anything they reach"],
            ["Network", "Egress allowlist; no access to internal admin endpoints", "Prevents data leaving and accidental calls to production"],
            ["Databases", "Separate instance with synthetic or masked data", "Mistakes stay contained; no personal data exposure"],
            ["Secrets", "Test keys only; injected at runtime; never in prompts", "A leaked test key is an inconvenience, not an incident"],
            ["Tools", "Mock services or vendor sandboxes for every write", "Write actions behave realistically without real effects"],
            ["Execution", "Step, time, token and cost limits", "Loops and runaway runs end quickly (see [[/blogs/runaway-ai-agents|runaway AI agents]])"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "Isolate by default and open access deliberately. An agent should earn each production permission by passing tests in an environment where that permission could do no harm.",
        },
      },
      {
        heading: "Mock tools and vendor test modes",
        body: [
          "Many platforms provide test modes: payment providers, messaging services and commerce platforms offer test keys and development stores. Use them where they exist. For internal systems without test modes, build mock services that implement the same interface and return realistic responses, including errors, timeouts and partial data, so you can test how the agent handles failure. Record the calls each mock receives so tests can assert what the agent tried to do, not just what it said.",
        ],
      },
      {
        heading: "What to test in the sandbox",
        body: [],
        checklist: [
          "Normal scenarios from real (anonymized) cases",
          "Edge cases: missing data, conflicting records, unusual formats",
          "Tool failures: timeouts, errors, rate limits, malformed responses",
          "Adversarial inputs: instructions hidden in documents, emails and web pages",
          "Permission boundaries: requests the agent must refuse or escalate",
          "Cost and step usage per scenario",
          "Rollback and compensation paths (see [[/blogs/ai-agent-rollback|AI agent rollback]])",
        ],
        cta: {
          title: "Need a safe place to test agents before go-live?",
          description: "ZSpace Labs builds sandbox environments with mock tools, masked data and evaluation suites for business agents. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "From sandbox to production",
        body: [
          "Treat environments as gates. An agent moves from sandbox to staging when it passes its scenario and adversarial tests; from staging to production when it passes the release checks in [[/blogs/ai-agent-evaluation|AI agent evaluation]] with production-like integrations; and into wider autonomy only after it performs well on real cases with review. Every later change to models, prompts, tools or permissions goes through the same path. For coding agents specifically, see [[/blogs/ai-coding-agent-security|securing AI coding agents]].",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Testing with a copy of production data that still contains personal information",
          "Production API keys in the sandbox \"just for one test\"",
          "Mocks that only return happy-path responses",
          "No network restrictions, so the agent can reach production endpoints",
          "Sandboxes that drift from production until results stop being meaningful",
        ],
      },
      {
        heading: "Simulation, evaluation, staging and digital twins",
        body: [
          "These terms overlap, so be precise. **Simulation** runs an agent against synthetic users, mock tools and scripted failures to see how it behaves across many scenarios. **Evaluation** scores the results against expected outcomes (see [[/blogs/ai-agent-evaluation|AI agent evaluation]]). **Staging** validates a release against production-like integrations. A **digital twin** is a model of a real system kept in sync with its state; for most business workflows a full twin is impractical, but a realistic simulation of the systems an agent touches, seeded from masked production data, delivers most of the value. Be wary of claims that any simulation captures everything production will throw at an agent: real users, real data drift and real third-party behaviour still need staged rollout and monitoring.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A sandbox is where agents make their first mistakes safely. Isolate files, network, data, secrets and tools, use mocks and vendor test modes for anything that writes, limit execution, and promote agents through sandbox and staging gates before they touch production.",
        ],
      },
    ],
  },

  // ---------------------------------------- TOOL SELECTION
  {
    slug: "ai-agent-tool-selection",
    title: "AI Agent Tool Selection: Why Too Many Tools Make Agents Worse",
    seoTitle: "AI Agent Tool Selection: Why Too Many Tools Make Agents Worse",
    excerpt:
      "How AI agents choose which tool to call, why large toolsets reduce accuracy and cost more, and how routing, tool search and scoped toolsets fix it.",
    category: "AI & Automation",
    banner: "toolselectflow",
    sceneKind: "agent",
    bannerAlt:
      "How an agent picks a tool: Task, Scope by permission, Route to toolset, Tool search (highlighted), Choose + validate, Call tool.",
    date: "2026-10-08",
    readingTime: "4 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise"],
    relatedSlugs: ["ai-agent-tool-design", "mcp-governance", "context-engineering-ai-agents"],
    faqs: [
      { q: "How do AI agents decide which tool to use?", a: "The model reads the names, descriptions and input schemas of the tools available in its context, compares them with the task and conversation so far, and outputs a call to the tool that best fits. It does not see your code, so descriptions and the size of the toolset largely determine how well it chooses." },
      { q: "Why do too many tools reduce reliability?", a: "Every tool definition takes context space and gives the model more similar options to confuse. Accuracy falls as overlapping tools multiply, and costs rise because definitions are sent with every request. OpenAI's guidance suggests keeping the number of functions available at the start of a turn small." },
      { q: "What is tool search?", a: "A pattern in which the agent first searches a catalogue of tools and loads only the few relevant definitions, instead of receiving every tool up front. Anthropic and OpenAI both support deferring tool definitions so large tool libraries do not crowd the context." },
      { q: "Should the model choose tools or should code route them?", a: "Use code where the choice is deterministic (a request type always maps to one workflow) and let the model choose among a small, relevant set where judgement is needed. Combining both is common." },
      { q: "How do permissions affect tool selection?", a: "Agents should only see tools the current user and task are allowed to use. Filtering by permission before the model chooses improves both security and accuracy." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An agent chooses a tool by matching the task against the names, descriptions and schemas of the tools in its context. The more tools it sees, especially overlapping ones, the more often it picks the wrong one, and the more each request costs. Keep toolsets small and distinct per task, filter tools by permission before the model sees them, route deterministic choices in code, and use tool search or deferred loading when a large library is unavoidable. Then measure tool-selection accuracy on real tasks and fix descriptions that cause confusion.",
        ],
      },
      {
        heading: "How tool selection actually works",
        body: [
          "The model never inspects your code. On each step it sees a list of tool definitions (name, description, input schema) alongside the instructions, conversation and previous tool results, and produces either text or a structured request to call one of those tools. Everything that influences its choice is in that context: how clearly tools are described, how similar they are to each other, how many there are and what the task looks like. That is why tool selection is as much a context problem as a model problem; see [[/blogs/context-engineering-ai-agents|context engineering]].",
        ],
      },
      {
        heading: "Why more tools make agents worse",
        body: [
          "Connecting an agent to several MCP servers can add dozens or hundreds of tools at once. Anthropic's engineering team has described setups where tool definitions alone consumed tens of thousands of tokens before the agent read the user's request, and reported that letting the model search for relevant tools instead of loading all of them improved accuracy on its tool-use evaluations. OpenAI's function-calling guidance similarly suggests keeping the functions available at the start of a turn small, with tool search to defer large or rarely used parts of the tool surface.",
        ],
        table: {
          headers: ["Problem", "Effect"],
          rows: [
            ["Overlapping tools (search_orders, find_order, lookup_order_status)", "Wrong tool chosen; inconsistent behaviour"],
            ["Large definitions loaded every request", "Higher cost and latency; less room for task context"],
            ["Tools irrelevant to the task", "Distraction; occasional bizarre calls"],
            ["Tools the user may not use", "Security risk and refused calls that derail the run"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "Adding a tool is not free. Each one should earn its place by covering a real task that no other tool covers.",
        },
      },
      {
        heading: "Five ways to improve tool selection",
        body: [],
        table: {
          headers: ["Technique", "How it works", "When to use"],
          rows: [
            ["Fewer, task-shaped tools", "Merge endpoint-level tools into task-level ones (see [[/blogs/ai-agent-tool-design|AI agent tool design]])", "Always"],
            ["Permission filtering", "Only expose tools the current user, tenant and task may use", "Always"],
            ["Deterministic routing", "Code picks the toolset or workflow from request type before the model runs", "When categories are clear"],
            ["Tool search / deferred loading", "Agent searches a catalogue and loads only relevant definitions", "Large libraries, many MCP servers"],
            ["Specialist sub-agents", "Each sub-agent has a small toolset for one domain", "Several distinct domains in one product"],
          ],
        },
      },
      {
        heading: "Factors beyond relevance",
        body: [
          "The best tool for a step is not only the most relevant one. When several tools could work, encode preferences explicitly rather than hoping the model infers them:",
        ],
        checklist: [
          "**Cost:** prefer cached or internal lookups over paid external APIs",
          "**Latency:** prefer fast reads for interactive replies",
          "**Reliability:** avoid tools with known instability unless necessary; route around them when a circuit breaker is open",
          "**Risk:** prefer read-only tools; require confirmation for write tools",
          "**Confidence:** if the agent cannot decide between tools, ask a clarifying question instead of guessing",
        ],
      },
      {
        heading: "Measure and fix selection errors",
        body: [
          "Add tool-selection checks to your evaluation set: for each test case, record which tool should be called with which arguments, then measure how often the agent gets it right (see [[/blogs/ai-agent-evaluation|AI agent evaluation]]). Read transcripts of wrong choices. Most fixes are descriptive: rename tools, state when not to use each one, merge near-duplicates, or remove tools nobody needs. Re-run the evaluation after every toolset change, including when an MCP server you depend on updates its tools; see [[/blogs/mcp-governance|MCP governance]].",
        ],
        cta: {
          title: "Agents calling the wrong tools?",
          description: "ZSpace Labs audits agent toolsets, restructures tools and routing, and adds tool-selection evaluation so changes are measurable. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Connecting every available MCP server \"in case it is useful\"",
          "Several tools with nearly identical names and descriptions",
          "Exposing admin tools to every user's agent session",
          "Letting the model choose when a simple rule would do",
          "Never testing tool choice separately from final answers",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Tool selection improves when the agent sees fewer, clearer, permitted tools. Design task-shaped tools, filter by permission, route in code where you can, use tool search for large libraries and measure selection accuracy. For making the calls themselves dependable, see [[/blogs/llm-structured-outputs|structured outputs]] and [[/blogs/ai-tool-security|AI tool security]].",
        ],
      },
    ],
  },
];
