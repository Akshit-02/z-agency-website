import type { BlogPost } from "./blog-data";

/**
 * AI agent governance cluster, part one (published 2026-10-08): the
 * governance hub (absorbing the rejected "runtime controls" and "risk
 * assessment" proposals), control plane, shadow AI agents and lifecycle
 * management. See docs/seo/next-20-ai-governance-content-audit.md for the
 * twelve rejected proposals. Evergreen copy: no specific years in titles,
 * headings, FAQs or body text. Sources checked 2026-10-08: Microsoft
 * (Agent 365 described as a control plane for agents; Entra Agent ID;
 * Work Trend Index on employees bringing their own AI tools), GitHub
 * changelog (MCP allowlists), OWASP Top 10 for Agentic Applications.
 */

export const aiGovernancePosts1: BlogPost[] = [
  // ---------------------------------------- AI AGENT GOVERNANCE (hub)
  {
    slug: "ai-agent-governance",
    title: "AI Agent Governance: What Businesses Need to Control Before Agents Go Autonomous",
    seoTitle: "AI Agent Governance: What to Control Before Agents Go Autonomous",
    excerpt:
      "An eight-layer framework for governing AI agents, from identity and access to runtime controls, audit and incident response, enforced in systems.",
    category: "AI & Automation",
    banner: "agentgovlayers",
    sceneKind: "security",
    bannerAlt:
      "AI agent governance in four groups: Who and what (identity, access), Rules (highlighted: policy, runtime controls), Watch (observability, evaluation) and Respond (audit, incident response).",
    date: "2026-10-08",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["fintech", "healthcare-healthtech", "b2b-enterprise"],
    relatedSlugs: ["ai-control-plane", "ai-agent-lifecycle-management", "ai-governance-framework"],
    faqs: [
      { q: "What is AI agent governance?", a: "The set of controls that decide which AI agents exist, who owns them, what they may access and do, how their actions are checked, recorded and evaluated, and how incidents are handled. For agents, those controls must be enforced in the systems agents use, not only written in policy." },
      { q: "How is agent governance different from AI governance in general?", a: "General AI governance covers policies, risk tiers and accountability for all AI use. Agent governance adds controls for software that acts: identities, tool permissions, runtime policy checks, spending and action limits, approvals and rollback." },
      { q: "Why isn't a written AI policy enough?", a: "A policy says what should happen; an agent does what its permissions and code allow. If a policy says refunds over a limit need approval but the refund tool has no limit, the policy is not enforced. Governance has to exist in identity systems, tool code and runtime checks." },
      { q: "Where should a business start?", a: "With an inventory of agents and automations, a named owner for each, a risk tier for each workflow and least-privilege access. Runtime controls, audit trails and evaluations follow, starting with the highest-risk agents." },
      { q: "Does a small company need agent governance?", a: "Yes, in proportion. A startup with two agents needs an owner, scoped credentials, logs and approval for risky actions, not a committee. The layers are the same; the effort scales with risk." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI agent governance is the set of enforceable controls around agents that can act: who they are, what they may touch, which actions are allowed, how actions are checked as they happen, how behaviour is observed and evaluated, how everything is recorded, and how incidents are handled. Think of it as eight layers: **identity, access, policy, runtime controls, observability, evaluation, audit and incident response**, plus a lifecycle that runs from creation to retirement. The key difference from traditional governance is that written policy is not enough: rules have to be enforced in identity systems, tool code and runtime checks, because the agent will do whatever its permissions allow.",
        ],
      },
      {
        heading: "Why agents need their own governance",
        body: [
          "The moment an AI agent can change a database record, send an email or spend money, the problem stops being model quality alone. You now have an operational control problem: software making decisions at runtime, often on behalf of a person, sometimes triggered by content an attacker wrote. Traditional software governance assumes code does what developers wrote; agent behaviour depends on context, instructions and data that change every run.",
          "General [[/blogs/ai-governance-framework|AI governance frameworks]] remain the foundation: risk tiers, policies, accountability. Agent governance adds the controls that make those policies real for software that acts.",
        ],
        table: {
          headers: ["", "Traditional software governance", "AI agent governance"],
          rows: [
            ["Behaviour", "Determined by code", "Varies with context, data and model"],
            ["Change control", "Code releases", "Releases plus prompt, model, tool and data changes"],
            ["Access", "Service accounts with fixed scope", "Delegated, per-task, often on behalf of users"],
            ["Main risks", "Bugs, misconfiguration", "Plus manipulation through content, wrong actions, runaway loops"],
            ["Enforcement point", "Deployment and access reviews", "Runtime: every tool call and action"],
          ],
        },
      },
      {
        heading: "The AI agent governance framework",
        body: [
          "Each layer answers one question. Together they make an agent's behaviour bounded, visible and accountable.",
        ],
        code: {
          label: "Eight layers of agent governance",
          text: `Identity            Who is this agent, and on whose behalf is it acting?
   ↓
Access              Which systems, data and tools may it reach?
   ↓
Policy              Which actions are allowed, under which conditions?
   ↓
Runtime controls    Is this specific action allowed right now? (checked per call)
   ↓
Observability       What is it doing, how well, at what cost?
   ↓
Evaluation          Is it still good enough after each change?
   ↓
Audit               Can we prove what happened and who approved it?
   ↓
Incident response   Can we stop it, reverse it and learn from it?`,
        },
        table: {
          headers: ["Layer", "Minimum control", "Read more"],
          rows: [
            ["Identity", "Own identity per agent; delegated tokens when acting for users", "[[/blogs/ai-agent-authentication|AI agent authentication]]"],
            ["Access", "Least privilege per task; scoped, short-lived credentials", "[[/blogs/ai-agent-access-control|AI agent access control]]"],
            ["Policy", "Action rules by risk tier, written as code where possible", "Risk tiers below"],
            ["Runtime controls", "Per-call permission checks, limits, approvals, breakers", "[[/blogs/ai-agent-guardrails|AI agent guardrails]]"],
            ["Observability", "Traces of runs, tool calls, cost and outcomes", "[[/blogs/ai-agent-observability|AI agent observability]]"],
            ["Evaluation", "Test set re-run on every change; production sampling", "[[/blogs/ai-agent-evaluation|AI agent evaluation]]"],
            ["Audit", "Append-only records linking identity, decisions, approvals and changes", "[[/blogs/ai-agent-audit-trail|AI agent audit trail]]"],
            ["Incident response", "Kill switch, degraded modes, rollback, runbook", "[[/blogs/ai-agent-incident-response|AI agent incident response]]"],
          ],
        },
      },
      {
        heading: "Policy is not enough: governance must run at runtime",
        body: [
          "A written policy might say: refunds above a set amount require a manager's approval. If the refund tool accepts any amount and the agent's credential can call it, the policy is a hope. Runtime governance moves the rule into the path of every action.",
        ],
        code: {
          label: "Runtime control path for one agent action",
          text: `Request (agent wants to call issue_refund)
   → Identity check      valid agent identity + user delegation?
   → Permission check    is issue_refund in this agent's allowed tools?
   → Policy check        amount ≤ auto-limit? order owned by this customer?
   → Risk assessment     tier of this action; anomaly signals (volume, value)
   → Approval gate       above limit → queue for a person with a preview
   → Action              execute with idempotency key
   → Validation          re-read the record; confirm the expected change
   → Logging             audit event with trace ID, inputs, result, approver`,
        },
        callout: {
          type: "takeaway",
          text: "If a rule only exists in a document or a prompt, assume the agent can break it. Put every rule that matters into identity, permissions, tool code or a policy check that runs on each call.",
        },
      },
      {
        heading: "Classify agent workflows by risk",
        body: [
          "Not every agent needs heavy controls. Score each workflow on the dimensions that make mistakes costly, then apply controls by tier.",
        ],
        table: {
          headers: ["Dimension", "Lower risk", "Higher risk"],
          rows: [
            ["Data sensitivity", "Public or internal", "Personal, financial, health, credentials"],
            ["Action impact", "Read, draft, tag", "Change records, move money, delete"],
            ["Financial impact", "None or small", "Payments, refunds, pricing"],
            ["Reversibility", "Easily undone", "Irreversible (messages sent, data disclosed)"],
            ["External communication", "Internal only", "Customers, partners, public"],
            ["Regulatory sensitivity", "None", "Regulated decisions or data"],
            ["Permission level", "Narrow, read-only", "Broad or administrative"],
            ["Frequency and blast radius", "Occasional, single record", "High volume, many records at once"],
          ],
        },
      },
      {
        heading: "Controls by risk tier",
        body: [],
        table: {
          headers: ["Tier", "Example", "Autonomy", "Approval", "Monitoring", "Testing", "Logging"],
          rows: [
            ["Low", "Summarize internal documents; tag tickets", "Act alone", "None", "Sampled", "Basic evaluation set", "Standard"],
            ["Medium", "Answer customer questions from approved sources; create draft records", "Act within boundaries", "On exceptions", "Outcome metrics + sampling", "Evaluation + adversarial cases", "Full run traces"],
            ["High", "Issue refunds; change prices; update customer records", "Execute with approval above limits", "Thresholds and previews", "Real-time alerts on anomalies", "Sandbox + staging + shadow mode", "Full audit trail"],
            ["Critical", "Payments, legal commitments, regulated decisions", "Advise only", "A qualified person decides", "Continuous", "Formal sign-off", "Full audit trail, long retention"],
          ],
        },
        cta: {
          title: "Putting agents into production across the business?",
          description: "ZSpace Labs builds agents with governance designed in: identities, scoped tools, runtime policy checks, approvals, audit trails and evaluation. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Inventory and ownership come first",
        body: [
          "You cannot govern agents you do not know about. Keep an inventory of every agent and automation: purpose, owner, risk tier, identity, tools and data it can reach, models used, where it runs and when it was last reviewed. Each needs a named business owner (accountable for outcomes) and a technical owner (accountable for operation). Unknown agents built by employees or embedded in SaaS tools are the most common gap; see [[/blogs/shadow-ai-agents|shadow AI agents]]. Organizations running many agents often centralize inventory, identity and policy in a [[/blogs/ai-control-plane|control plane]].",
        ],
      },
      {
        heading: "Governance across the agent lifecycle",
        body: [
          "Governance is not a one-time approval. Controls apply at design (risk tier, permissions), before release (evaluation, sandbox), in production (runtime checks, monitoring), on every change (versioned prompts, models and tools re-evaluated) and at retirement (credentials revoked, data handled). See [[/blogs/ai-agent-lifecycle-management|AI agent lifecycle management]] and, for change control, [[/blogs/ai-application-release-management|AI release management]].",
        ],
      },
      {
        heading: "A practical starting sequence",
        body: [],
        checklist: [
          "**Inventory** every agent and automation; assign owners",
          "**Tier** each workflow by risk using the dimensions above",
          "**Fix identity and access:** own identities, least privilege, no shared admin keys",
          "**Enforce the riskiest rules at runtime:** limits, approvals, allowlists",
          "**Add audit trails and observability** to medium and higher tiers",
          "**Set up evaluation** and re-run it on every change",
          "**Prepare incident response:** kill switch, rollback, runbook",
          "**Review quarterly**, and whenever an agent's tools, data or autonomy change",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Treating a policy document or system prompt as the control",
          "One governance process for all agents regardless of risk",
          "Agents running under shared or personal credentials",
          "No inventory, so retired or unknown agents keep their access",
          "Approval steps that show too little to judge, so approvers rubber-stamp",
          "Governance designed after the first incident",
        ],
      },
      {
        heading: "Governing agents you buy as well as agents you build",
        body: [
          "Many agents arrive inside products: helpdesk, CRM, office suites and developer tools now ship their own. The same layers apply, but enforcement shifts. For built agents you control the code, so policies can live in tools and gateways. For bought agents you rely on the vendor's admin controls, your identity provider and contracts, so governance means configuring scopes and approvals carefully, exporting logs into your own monitoring, and assessing the vendor before granting access (see [[/blogs/ai-agent-vendor-assessment|how to assess an AI agent vendor]]).",
        ],
        table: {
          headers: ["Layer", "Agents you build", "Agents you buy"],
          rows: [
            ["Identity", "Your identity provider issues agent identities", "Vendor app registration and OAuth scopes you approve"],
            ["Access", "Tool code and gateways enforce least privilege", "Vendor permission settings; minimal scopes"],
            ["Runtime controls", "Policy checks in tools; limits in orchestration", "Vendor approval and limit features; network controls"],
            ["Observability and audit", "Your tracing and audit store", "Vendor logs exported to your systems"],
            ["Incident response", "Your kill switch and rollback", "Vendor disable controls plus revoking grants"],
          ],
        },
      },
      {
        heading: "How to know governance is working",
        body: [
          "Measure governance like any other operational control, with a small set of indicators reviewed monthly.",
        ],
        table: {
          headers: ["Indicator", "What good looks like"],
          rows: [
            ["Agents in inventory with owners", "All production agents; shadow agents found and resolved"],
            ["Agents with own identity and scoped access", "No shared or personal credentials"],
            ["Consequential actions covered by runtime checks", "Every high-tier action has a limit or approval"],
            ["Evaluation coverage", "Every production agent has a test set re-run on changes"],
            ["Audit completeness", "Any action traceable to agent, user, inputs and approver"],
            ["Incident drills", "Kill switch and rollback tested for high-tier agents"],
            ["Overdue reviews", "None past their review date"],
          ],
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Agent governance is engineering as much as policy: identities, permissions, runtime checks, observation, evaluation, records and a way to stop and repair. Tier workflows by risk so controls are proportionate, start with inventory and ownership, and enforce the rules that matter on every action. For the OWASP view of agent-specific risks, see [[/blogs/owasp-top-10-agentic-applications|the OWASP agentic Top 10]].",
        ],
      },
    ],
  },

  // ---------------------------------------- AI CONTROL PLANE
  {
    slug: "ai-control-plane",
    title: "AI Control Plane: What Organizations Need to Manage Many AI Agents",
    seoTitle: "AI Control Plane: How to Manage Many AI Agents in One Place",
    excerpt:
      "What an AI control plane is, how it differs from the data plane and orchestration, what it should manage, and when an organization actually needs one.",
    category: "AI & Automation",
    banner: "controlplanemap",
    sceneKind: "pipeline",
    bannerAlt:
      "Control plane vs data plane: Control plane (highlighted: registry, identity, policy, cost and budgets, lifecycle) and Data plane (agents, model gateway, tool gateway, business systems); configuration flows down and telemetry flows up.",
    date: "2026-10-08",
    readingTime: "5 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["b2b-enterprise", "fintech", "saas-technology"],
    relatedSlugs: ["ai-agent-governance", "ai-platform-engineering", "mcp-governance"],
    faqs: [
      { q: "What is an AI control plane?", a: "A management layer that provides visibility, identity, access control, policy enforcement, monitoring, cost tracking and lifecycle management across an organization's AI agents and their tools, separate from the systems that actually run the agents' work." },
      { q: "What is the difference between the control plane and the data plane?", a: "The data plane is where work happens: agents run, call models and tools, and change business systems. The control plane decides and records what is allowed: which agents exist, their identities and permissions, policies, budgets and versions, and it collects telemetry from the data plane." },
      { q: "Is an AI control plane the same as orchestration?", a: "No. Orchestration coordinates the steps of a task. A control plane governs the population of agents: inventory, identity, policy, cost and lifecycle, regardless of how each agent orchestrates its work." },
      { q: "Does every company need an AI control plane?", a: "No. With a handful of agents built by one team, a shared inventory, identity provider, gateway and logging are enough. A dedicated control plane becomes worthwhile when many agents, teams, vendors and tools make central visibility and policy hard to maintain." },
      { q: "Can we buy a control plane?", a: "Partly. Major platforms now offer agent registries and governance features for their ecosystems; Microsoft, for example, describes Agent 365 as a control plane for AI agents. Most organizations still combine vendor features with their identity provider, gateways and internal tooling." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An AI control plane is a management layer that gives an organization one place to see and govern its AI agents: an **agent registry**, **identities and permissions**, **policy enforcement**, **tool and model access**, **monitoring and cost tracking**, **deployment and version management**, **lifecycle** and **audit**. It sits above the data plane, where agents actually run and change business systems. Small organizations can assemble these functions from an identity provider, an AI gateway and good logging; a dedicated control plane pays off when many agents, teams and vendors make central control hard.",
        ],
      },
      {
        heading: "Control plane vs data plane",
        body: [
          "The terms come from networking and cloud infrastructure: the data plane moves packets or runs workloads; the control plane decides how it should behave. Applied to AI, the split clarifies responsibilities.",
        ],
        table: {
          headers: ["", "Control plane", "Data plane"],
          rows: [
            ["Purpose", "Decide, configure, observe, govern", "Do the work"],
            ["Contains", "Registry, identities, policies, budgets, versions, telemetry", "Agents, model calls, tool calls, business system changes"],
            ["Changes", "Infrequent, approved", "Every request"],
            ["Owned by", "Platform, security, governance", "Product and automation teams"],
            ["Failure impact", "Governance gaps", "Wrong actions, outages"],
          ],
        },
        code: {
          label: "Where a control plane sits",
          text: `                CONTROL PLANE
  registry · identity · policy · tool/model access
  budgets · versions · lifecycle · audit · dashboards
        │ configure / enforce        ▲ telemetry, events
        ▼                            │
                 DATA PLANE
  agents → model gateway → models
     └──→ tool / MCP gateway → APIs → business systems`,
        },
      },
      {
        heading: "What a control plane manages",
        body: [],
        table: {
          headers: ["Capability", "What it does", "Why it matters"],
          rows: [
            ["Agent registry", "Lists every agent: owner, purpose, risk tier, version, status", "You cannot govern what you cannot see"],
            ["Identity", "Issues and manages agent identities and delegation", "Every action attributable"],
            ["Access and tools", "Which tools, MCP servers, models and data each agent may use", "Least privilege at scale"],
            ["Policy", "Rules applied at runtime by gateways and tools", "Consistent enforcement across teams"],
            ["Cost", "Budgets and spend per agent, team and customer", "No surprise bills"],
            ["Deployment and versions", "Which version runs where; promotion and rollback", "Controlled change"],
            ["Monitoring and audit", "Central view of behaviour, incidents and records", "Oversight and evidence"],
            ["Lifecycle", "Onboarding, review, quarantine, retirement", "No orphaned agents with live credentials"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "Orchestration decides how one agent completes one task. A control plane decides which agents may exist and what all of them are allowed to do.",
        },
      },
      {
        heading: "Enforcement points",
        body: [
          "A control plane mostly configures; enforcement happens in the data plane at a few chokepoints: the **identity provider** (who can authenticate), a **model gateway** (which models, budgets, logging; see [[/blogs/llm-gateway|LLM gateway]]), a **tool or MCP gateway** with allowlists (see [[/blogs/mcp-governance|MCP governance]]), **client policies** in AI tools, and **policy checks inside tools** for business rules. Designing these chokepoints matters more than the dashboard: without them, the control plane only observes.",
        ],
      },
      {
        heading: "Build, buy or assemble",
        body: [
          "Large platforms increasingly ship control-plane features for their own ecosystems. Microsoft describes Agent 365 as a control plane for AI agents, with a registry, access control, visualization, interoperability and security, and builds agent identities into Entra Agent ID. Developer tool vendors add central policies such as enterprise MCP allowlists. Most organizations end up assembling: vendor controls inside each ecosystem, a central identity provider, gateways for models and tools, and an internal registry and dashboards that span everything. See [[/blogs/ai-platform-engineering|AI platform engineering]] for the shared infrastructure side.",
        ],
      },
      {
        heading: "When you actually need one",
        body: [],
        table: {
          headers: ["Situation", "What is enough"],
          rows: [
            ["A few agents, one team", "Spreadsheet or repo-based inventory, identity provider, gateway logging"],
            ["Several teams, one main platform", "That platform's governance features plus shared identity and logging"],
            ["Many teams, several vendors, external-facing agents", "A dedicated control plane: registry, central policy, budgets, lifecycle"],
            ["Regulated or high-risk agents at scale", "Control plane with formal audit, approvals and evidence"],
          ],
        },
        cta: {
          title: "Managing a growing number of agents?",
          description: "ZSpace Labs designs agent registries, gateways, identity integration and governance dashboards that work across vendors and teams. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Implementation steps",
        body: [],
        checklist: [
          "Start the registry: every agent, owner, risk tier, tools, data and version",
          "Route model traffic through a gateway; tag calls with agent identity",
          "Route tool and MCP access through allowlists or a gateway",
          "Issue agent identities from your identity provider; remove shared keys",
          "Set budgets per agent and team; alert before limits",
          "Connect telemetry and audit events to one view",
          "Add lifecycle states (draft, active, quarantined, retired) and review dates",
        ],
      },
      {
        heading: "Policy as code: an example",
        body: [
          "A control plane is most useful when policies are data the enforcement points can read, rather than prose. An illustrative policy for one agent:",
        ],
        code: {
          label: "Agent policy record (illustrative)",
          text: `agent: support-refunds
owner: { business: "head-of-support", technical: "platform-team" }
risk_tier: high
identity: entra-agent-id/support-refunds
models: [ "approved-small-model", "approved-large-model" ]
tools:
  allow: [ orders.read, customers.read, credits.issue ]
  deny:  [ customers.delete, payments.refund_card ]
limits:
  credits.issue: { max_amount: 25, per_order: 1, per_day: 200 }
  budget: { per_run_tokens: 40000, per_day_cost: "team budget" }
approvals:
  credits.issue: { above_amount: 25, approver_group: "support-leads" }
data: { tenants: own, pii: masked_in_logs }
lifecycle: { status: active, review_by: "next quarter" }`,
        },
        callout: {
          type: "tip",
          text: "Keep policies in version control and deploy them like code. A policy change is as consequential as a prompt or model change.",
        },
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Building dashboards before enforcement points exist",
          "A registry that teams must update by hand and quickly goes stale",
          "Centralizing so much that teams route around the control plane",
          "Covering only one vendor's agents while others run unmanaged",
          "No lifecycle states, so retired agents keep their access",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A control plane is how an organization keeps many agents governable: one registry, consistent identity and policy, and central visibility of behaviour and cost, enforced through gateways and tools in the data plane. Build it in proportion to how many agents you run and how much they can do. For the governance framework it implements, see [[/blogs/ai-agent-governance|AI agent governance]].",
        ],
      },
    ],
  },

  // ---------------------------------------- SHADOW AI AGENTS
  {
    slug: "shadow-ai-agents",
    title: "Shadow AI Agents: How to Discover and Govern Unapproved AI Automation",
    seoTitle: "Shadow AI Agents: Discovering and Governing Unapproved AI Automation",
    excerpt:
      "Where shadow AI agents come from, the risks of unapproved automations, a discovery checklist and a governance approach that does not rely on bans.",
    category: "AI & Automation",
    banner: "shadowaiflow",
    sceneKind: "security",
    bannerAlt:
      "Governing shadow AI agents: Discover, Classify by risk (highlighted), Decide (approve, migrate or retire), Secure, Register, Review.",
    date: "2026-10-08",
    readingTime: "5 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["b2b-enterprise", "professional-services", "fintech"],
    relatedSlugs: ["ai-agent-governance", "mcp-governance", "ai-agent-lifecycle-management"],
    faqs: [
      { q: "What is shadow AI?", a: "AI tools and automations used in an organization without the knowledge or approval of IT, security or governance teams. Shadow AI agents are the subset that can act: automations, bots and agents that read data, call tools or change systems." },
      { q: "Where do shadow AI agents come from?", a: "Employees building agents in no-code automation or assistant platforms, AI features switched on inside SaaS tools, personal AI assistants connected to work accounts, coding agents with MCP servers, and scripts using personal API keys." },
      { q: "Should we ban unapproved AI tools?", a: "Bans tend to push usage out of sight. Microsoft's Work Trend Index research found most AI users bring their own AI tools to work. A better approach is to discover usage, provide approved alternatives, and govern by risk." },
      { q: "How do we find shadow AI agents?", a: "Review OAuth grants and connected apps in identity and SaaS admin consoles, API keys and service accounts, automation platform workspaces, network and proxy logs for AI services, AI client configurations including MCP servers, expense data and a simple amnesty survey." },
      { q: "What should happen to a discovered agent?", a: "Classify its risk, then approve and register it, migrate it to an approved platform, or retire it and revoke its access. Every kept agent gets an owner, scoped credentials and a review date." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Shadow AI agents are automations and agents running in your organization without approval or oversight: employee-built agents in no-code tools, AI features switched on inside SaaS products, personal assistants connected to work accounts, coding agents with unvetted MCP servers, and scripts using personal API keys. They create data, security, compliance and cost risks precisely because nobody knows they exist. Do not respond with a blanket ban; **discover** them, **classify** them by risk, **decide** whether to approve, migrate or retire each one, **secure** the ones you keep, **register** them and **review** regularly, while giving people approved tools that meet the same needs.",
        ],
      },
      {
        heading: "From shadow IT to shadow agents",
        body: [
          "Shadow IT used to mean unapproved apps. Shadow AI added unapproved chat tools, mostly a data-leakage concern. Shadow agents raise the stakes again because they act: an automation that reads a shared mailbox and posts summaries to an external tool, an agent with write access to the CRM, a coding agent connected to a production database through an MCP server. The usage is real and widespread; Microsoft's Work Trend Index research found that most people using AI at work were bringing their own AI tools.",
        ],
      },
      {
        heading: "Where shadow agents hide",
        body: [],
        table: {
          headers: ["Source", "Example", "Typical access"],
          rows: [
            ["No-code automation and agent builders", "Agent that triages a shared inbox and updates a spreadsheet", "OAuth to mail, drive, CRM"],
            ["SaaS products with built-in agents", "AI features enabled by a team admin in a helpdesk or CRM", "Vendor-side access to company data"],
            ["Personal AI assistants", "Assistant connected to a work calendar and email", "Delegated user access"],
            ["Coding agents and MCP servers", "Community MCP server connected to an internal database", "Credentials on developer machines"],
            ["Scripts and notebooks", "Scheduled script calling a model API with a personal key", "Hard-coded keys, broad data exports"],
            ["Browser extensions", "Extension that reads pages to summarize them", "Everything the browser can see"],
          ],
        },
      },
      {
        heading: "The risks",
        body: [],
        table: {
          headers: ["Risk", "How it shows up"],
          rows: [
            ["Data leakage", "Customer or confidential data sent to unvetted services or stored outside policy"],
            ["Uncontrolled actions", "Records changed, messages sent, tickets closed without review or audit"],
            ["Security blind spots", "Long-lived tokens and API keys nobody rotates; unvetted MCP servers"],
            ["Compliance", "Regulated data processed without assessment, records or consent"],
            ["Duplicated automation", "Several teams building the same agent differently"],
            ["Vendor risk", "Data terms nobody reviewed; tools without security commitments"],
            ["Unpredictable cost", "Usage-based AI spend on personal cards and team budgets"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "Shadow agents usually exist because people found real value. Treat discovery as a source of use cases to support properly, not only as a list of violations.",
        },
      },
      {
        heading: "Shadow AI agent discovery checklist",
        body: [],
        checklist: [
          "OAuth grants and connected apps in your identity provider and major SaaS admin consoles",
          "API keys, service accounts and personal access tokens with access to company data",
          "Workspaces in automation and agent-builder platforms used with company accounts",
          "AI features enabled inside SaaS tools (helpdesk, CRM, docs, project management)",
          "Network or secure web gateway logs for AI service domains",
          "AI client configurations on managed devices, including MCP server lists",
          "Expense reports and card spend on AI subscriptions and API usage",
          "Code repositories for model API keys and agent frameworks",
          "A short, no-blame survey asking teams what they use and why",
        ],
      },
      {
        heading: "Shadow AI governance framework",
        body: [],
        code: {
          label: "From discovery to governed agent",
          text: `Discover   → inventory every agent, automation and AI connection found
Classify   → risk tier: data, actions, external reach, volume
Decide     → approve as is | migrate to approved platform | retire
Secure     → own identity, scoped credentials, logging, limits
Register   → add to the agent inventory with owner and review date
Review     → re-check on schedule and when access or tools change`,
        },
      },
      {
        heading: "Make the approved path easier",
        body: [
          "People build shadow agents when the approved route is slow or missing. Provide a short list of approved AI tools and agent platforms, a lightweight request process with clear turnaround, templates for common automations, and guidance on what data may be used where. For developers, central controls such as managed MCP allowlists help; see [[/blogs/mcp-governance|MCP governance]] and [[/blogs/ai-coding-policy|AI coding policy]]. The broader policy layer is covered in [[/blogs/ai-governance-framework|AI governance framework]].",
        ],
        cta: {
          title: "Need to find out what AI is really running in your business?",
          description: "ZSpace Labs runs shadow AI discovery across identity, SaaS and code, then migrates valuable automations onto governed, supported platforms. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Announcing a ban without offering alternatives",
          "Discovering agents once and never again",
          "Revoking access abruptly and breaking processes people rely on",
          "Ignoring AI features enabled inside approved SaaS tools",
          "Treating developer tools and MCP servers as out of scope",
        ],
      },
      {
        heading: "Classifying what you find",
        body: [
          "Use the same risk dimensions as for approved agents (data sensitivity, actions, external reach, volume) and decide quickly. Most findings fall into a few patterns.",
        ],
        table: {
          headers: ["Finding", "Typical risk", "Typical decision"],
          rows: [
            ["Personal assistant summarizing a user's own email", "Medium (data use terms)", "Move to an approved assistant with business data terms"],
            ["Team automation posting internal data to an external tool", "High (data leakage)", "Migrate to an approved platform or retire"],
            ["SaaS AI feature enabled by a team admin", "Varies", "Assess vendor terms; configure scopes; register"],
            ["Coding agent with a community MCP server on a database", "High (access, supply chain)", "Remove; provide an approved server with read-only access"],
            ["Script with a personal API key processing customer data", "High", "Rotate key; rebuild under a service identity or retire"],
            ["Low-risk productivity agent on public information", "Low", "Approve and register with an owner"],
          ],
        },
      },
      {
        heading: "Who should own the response",
        body: [
          "Discovery usually sits with security or IT, but decisions need the business owner of each automation and, for bigger programmes, an AI automation function that can provide approved alternatives (see [[/blogs/ai-automation-center-of-excellence|AI automation center of excellence]]). Keep the process collaborative: an amnesty window, quick decisions, help migrating valuable automations, and clear rules for what happens to automations nobody claims.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Shadow AI agents are a symptom of demand. Discover them systematically, classify by risk, keep and secure what is valuable, retire what is not, and make the approved path faster than the shadow one. Then manage every kept agent through its lifecycle; see [[/blogs/ai-agent-lifecycle-management|AI agent lifecycle management]] and [[/blogs/ai-agent-governance|AI agent governance]].",
        ],
      },
    ],
  },

  // ---------------------------------------- LIFECYCLE MANAGEMENT
  {
    slug: "ai-agent-lifecycle-management",
    title: "AI Agent Lifecycle Management: From Creation to Retirement",
    seoTitle: "AI Agent Lifecycle Management: From Creation to Retirement",
    excerpt:
      "How to manage AI agents from discovery and design through testing, approval, deployment, monitoring, updates and retirement, with a lifecycle checklist.",
    category: "AI & Automation",
    banner: "agentlifecycleflow",
    sceneKind: "roadmap",
    bannerAlt:
      "AI agent lifecycle: Discover, Design, Build + test, Approve + deploy, Monitor + update (highlighted), Retire, with a loop showing every change returns to testing.",
    date: "2026-10-08",
    readingTime: "5 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["b2b-enterprise", "saas-technology", "fintech"],
    relatedSlugs: ["ai-agent-governance", "ai-application-release-management", "shadow-ai-agents"],
    faqs: [
      { q: "What is AI agent lifecycle management?", a: "Managing an agent through every stage of its existence (discovery, design, development, testing, approval, deployment, monitoring, updates and retirement) with an owner, records and controls at each stage." },
      { q: "Why do unused agents become security risks?", a: "Agents that nobody uses or owns often keep their credentials, tool access and data connections. If those are compromised or the agent is triggered unexpectedly, nobody is watching. The OWASP Top 10 for Agentic Applications lists rogue agents among its risks for this reason." },
      { q: "What counts as a change to an agent?", a: "Any change to its model, instructions, tools or tool schemas, workflow, policies, retrieval sources, memory configuration or permissions. Each can change behaviour and should be versioned and re-evaluated." },
      { q: "How should an agent be retired?", a: "Disable triggers, revoke credentials and tool access, export or delete data according to retention rules, keep audit records for the required period, archive the version manifest and update the inventory and any dependent workflows." },
      { q: "Who owns an agent's lifecycle?", a: "A named business owner accountable for its purpose and outcomes and a technical owner accountable for operation and changes, with a governance or platform team providing standards and the inventory." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI agent lifecycle management means every agent has an owner, a record and controls at each stage: **discover** the need, **design** scope and risk tier, **build and test** in a sandbox, **approve** against a checklist, **deploy** gradually, **monitor** behaviour and cost, **update** through versioned, re-evaluated changes and **retire** cleanly by revoking credentials and access. The stage most often skipped is retirement, which is why forgotten agents with live credentials are a real security risk.",
        ],
      },
      {
        heading: "Why agents need lifecycle management",
        body: [
          "Agents accumulate quickly: a pilot here, a team automation there, a vendor agent switched on in a SaaS tool. Each holds credentials, tool connections and data access, and each depends on models, prompts and APIs that change underneath it. Without lifecycle discipline you end up with agents nobody owns, behaviour nobody re-tested after a model update and access nobody remembers granting. The OWASP Top 10 for Agentic Applications names rogue agents (agents operating outside intended oversight) as a risk category; most rogue agents start as forgotten ones.",
        ],
      },
      {
        heading: "The lifecycle",
        body: [],
        table: {
          headers: ["Stage", "Key questions", "Outputs"],
          rows: [
            ["Discovery", "What problem, for whom, is an agent the right tool?", "Use case, process fit, initial risk view"],
            ["Design", "Scope, tools, data, autonomy level, risk tier, owner", "Design record, permission plan"],
            ["Development", "Tools, prompts, workflow, identity", "Versioned components and manifest"],
            ["Testing", "Does it work, fail safely, resist manipulation?", "Evaluation and sandbox results"],
            ["Approval", "Does it meet the gate for its tier?", "Signed-off readiness checklist"],
            ["Deployment", "Shadow, limited rollout, full production", "Release record, rollback plan"],
            ["Monitoring", "Quality, cost, incidents, drift", "Dashboards, alerts, sampled reviews"],
            ["Updating", "What changed, was it re-evaluated?", "New version, evaluation results"],
            ["Retirement", "Who depends on it, what must be revoked and kept?", "Revoked access, archived records, updated inventory"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "An agent is never finished. Every change to its model, prompts, tools or data is a new version that needs the same checks as the first release.",
        },
      },
      {
        heading: "Ownership and records",
        body: [
          "Every agent needs a business owner and a technical owner, recorded in the inventory with a review date. When an owner leaves, ownership must transfer, not lapse. Identity platforms are adding this: Microsoft's Entra Agent ID, for example, includes sponsors for agent identities and lifecycle workflows that reassign sponsorship when a sponsor changes role or leaves. Whatever tool you use, the record should include purpose, risk tier, identities, tools, data sources, models, current version, dependencies and last evaluation date.",
        ],
      },
      {
        heading: "Changes: version everything that affects behaviour",
        body: [
          "An agent is more than a model. Its behaviour depends on instructions, prompts, model and provider version, tool definitions and schemas, workflow logic, policies, retrieval sources, memory configuration and permissions. Changing any one can change outcomes. Record them together in a version manifest, re-run evaluations on every change and promote changes through the same staged rollout as a release; see [[/blogs/ai-application-release-management|AI release management]] for release units, canaries and rollback, and [[/blogs/prompt-versioning|prompt versioning]] for prompts specifically.",
        ],
      },
      {
        heading: "Retirement done properly",
        body: [],
        checklist: [
          "Confirm no workflows, users or other agents still depend on it",
          "Disable triggers, schedules and webhooks",
          "Revoke credentials, tokens, OAuth grants and tool or MCP access",
          "Remove it from gateways, allowlists and client configurations",
          "Export or delete data and memories according to retention rules",
          "Keep audit records for the required period; archive the final manifest",
          "Mark it retired in the inventory with date and reason",
        ],
        cta: {
          title: "Running more agents than anyone can keep track of?",
          description: "ZSpace Labs sets up agent inventories, version manifests, review cycles and clean retirement processes alongside your identity provider. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "AI agent lifecycle checklist",
        body: [],
        checklist: [
          "Inventory entry with business and technical owner",
          "Risk tier and autonomy level recorded",
          "Own identity; least-privilege tool and data access",
          "Version manifest covering model, prompts, tools, workflow, policies, sources",
          "Evaluation set and sandbox results before approval",
          "Staged deployment with rollback criteria",
          "Monitoring for quality, cost and incidents",
          "Every change versioned and re-evaluated",
          "Scheduled access and ownership review",
          "Retirement procedure that revokes access and archives records",
        ],
      },
      {
        heading: "The agent version manifest",
        body: [
          "Record everything that affects behaviour in one versioned manifest, so you can say exactly what was running when something happened and roll back as a unit.",
        ],
        code: {
          label: "Agent version manifest (illustrative)",
          text: `agent: invoice-matching
version: 3.2.0
model: { provider: "approved-provider", name: "model-name", version: "pinned" }
instructions: prompts/invoice-matching/system@v14
tools:
  - erp.get_purchase_order@v2   (schema hash: …)
  - erp.post_invoice@v3         (idempotent, limit 10k)
workflow: workflows/invoice-matching@v7
policies: policies/finance-agents@v5
retrieval: sources/supplier-terms@snapshot-id
memory: disabled
permissions: entra-agent-id/invoice-matching (scopes: erp.read, erp.post_invoice)
evaluation: evals/invoice-matching@v9 (pass rate recorded at release)
owners: { business: "finance-ops", technical: "automation-team" }`,
        },
      },
      {
        heading: "Review cadence by risk tier",
        body: [],
        table: {
          headers: ["Risk tier", "Access and ownership review", "Evaluation re-run", "Retirement check"],
          rows: [
            ["Low", "Twice a year", "On every change", "Twice a year"],
            ["Medium", "Quarterly", "On every change + monthly sample", "Quarterly"],
            ["High", "Quarterly, plus on any scope change", "On every change + weekly sample", "Quarterly"],
            ["Critical", "Monthly", "Continuous sampling", "Monthly"],
          ],
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Lifecycle management keeps agents owned, current and contained from the first idea to the last day. Record owners and versions, gate releases, monitor continuously, treat every change as a release and retire agents as carefully as you launch them. Agents discovered outside this process belong in the same lifecycle; see [[/blogs/shadow-ai-agents|shadow AI agents]].",
          "Automations that skip lifecycle discipline become [[/blogs/ai-automation-technical-debt|AI automation technical debt]].",
        ],
      },
    ],
  },
];
