import type { BlogPost } from "./blog-data";

/**
 * Production AI batch (2026-10-08), part two: AI coding and agent governance.
 * Candidates on reviewing AI code, legacy code, secure coding workflows and
 * "development without vibe coding" were not created because existing
 * articles own them (ai-code-review, ai-legacy-code-modernization,
 * ai-coding-agent-security, ai-software-development-lifecycle). Governance
 * was repositioned as a company policy; spec-driven development, MCP
 * governance and measurement are replacements. Sources checked 2026-10-08:
 * GitHub blog (Spec Kit, 2 Sep 2025), GitHub changelog (MCP allowlists,
 * 6 Aug 2026), MCP Registry preview (8 Sep 2025), DORA 2025 report and AI
 * Capabilities Model, METR (Feb 2026), Stack Overflow 2025 survey.
 */

export const prodAiPosts2: BlogPost[] = [
  // ---------------------------------------- SPEC-DRIVEN DEVELOPMENT
  {
    slug: "spec-driven-development",
    title: "Spec-Driven Development: A Production Workflow for AI Coding Agents",
    seoTitle: "Spec-Driven Development: A Production Workflow for AI Coding",
    excerpt:
      "How spec-driven development turns AI coding from prompting into a reviewable workflow: specify, plan, break into tasks, implement, test, review and ship.",
    category: "Web Development",
    banner: "specdrivenflow",
    sceneKind: "code",
    bannerAlt:
      "Spec-driven development workflow: Requirement, Spec (highlighted), Plan, Tasks, Implement + test, Review + CI, Deploy + monitor, with human approval gates after the spec, the plan and the review.",
    date: "2026-10-08",
    readingTime: "5 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["saas-technology", "fintech"],
    relatedSlugs: ["ai-coding-agents", "vibe-coding-vs-production-software", "ai-native-engineering-team"],
    faqs: [
      { q: "What is spec-driven development?", a: "A way of building software with AI coding agents in which a written specification, not a chat prompt, is the source of truth. The agent turns the spec into a technical plan and small tasks, implements them, and every change can be traced back to the spec and reviewed." },
      { q: "How is it different from vibe coding?", a: "Vibe coding accepts whatever the AI produces from conversational prompts. Spec-driven development fixes intent, constraints and acceptance criteria first, then has people approve the plan and review small changes against them." },
      { q: "Which tools support spec-driven development?", a: "GitHub released Spec Kit as an open-source toolkit in September 2025 that works with agents such as GitHub Copilot, Claude Code and Gemini CLI, and AWS's Kiro is built around specs. You can also follow the workflow with plain Markdown files and any capable coding agent." },
      { q: "Does writing specs slow teams down?", a: "It adds time at the start and usually saves more later: fewer misunderstood requirements, smaller reviewable changes, less rework and documentation that stays current. For tiny fixes, a short task description is enough." },
      { q: "Where should humans approve?", a: "At three points at minimum: the specification (is this what we want?), the technical plan (is this how we should build it?) and the code review before merge. Security-sensitive changes need additional review." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Spec-driven development is the production alternative to vibe coding. Instead of prompting an AI until something works, you write a specification of what to build and why (user journeys, constraints, acceptance criteria), have the coding agent produce a technical plan, break it into small tasks, and implement and test each task as a reviewable change. People approve the spec, the plan and each merge. The spec becomes durable documentation, and every line of code traces back to a stated requirement. GitHub's open-source Spec Kit and AWS's Kiro both formalize this workflow, but it works with any capable coding agent and plain Markdown files.",
        ],
      },
      {
        heading: "Why prompts are not enough for production",
        body: [
          "Prompts are ephemeral. The intent behind a feature lives in a chat history nobody will read again, the agent fills gaps with assumptions, and large AI-generated changes are hard to review. Google's DORA 2025 research found AI adoption associated with higher throughput but lower delivery stability, and among the capabilities it identifies as amplifying AI's benefits are working in small batches and strong version control. Spec-driven development is a practical way to get both: intent written down, work broken into small, reviewable pieces.",
        ],
      },
      {
        heading: "The workflow",
        body: [],
        table: {
          headers: ["Stage", "Who leads", "Output", "Human approval?"],
          rows: [
            ["1. Requirement", "Product owner", "Problem, users, outcome", "—"],
            ["2. Specify", "Agent drafts, people refine", "Spec: user journeys, rules, edge cases, acceptance criteria", "Yes: product and engineering"],
            ["3. Plan", "Agent proposes from stack and constraints", "Architecture, data model, interfaces, risks", "Yes: tech lead or architect"],
            ["4. Tasks", "Agent", "Small, independently testable tasks", "Light check"],
            ["5. Implement + test", "Agent, developer supervising", "Code and tests per task on a branch", "—"],
            ["6. Review + CI", "Developers + automated checks", "Merged changes", "Yes: code review"],
            ["7. Security", "Automated scans + reviewer for sensitive areas", "Findings resolved", "Yes for auth, payments, data"],
            ["8. Deploy + monitor", "Pipeline + owners", "Released feature, monitoring", "Release approval as usual"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "The spec is where business intent is reviewed; the plan is where architecture is reviewed; the pull request is where code is reviewed. Each gate checks a different thing, so none of them should be skipped.",
        },
      },
      {
        heading: "What a good spec contains",
        body: [],
        checklist: [
          "The problem and the users affected, in plain language",
          "User journeys and the outcome each should produce",
          "Business rules and edge cases (refund limits, time zones, permissions)",
          "Non-functional requirements: performance, accessibility, security, privacy",
          "Out of scope, stated explicitly",
          "Acceptance criteria that can become tests",
          "Constraints: stack, libraries, patterns to follow, systems not to touch",
        ],
      },
      {
        heading: "Tools: Spec Kit, Kiro and plain Markdown",
        body: [
          "GitHub introduced **Spec Kit** on 2 September 2025 as an open-source toolkit that structures the work into specify, plan, tasks and implement phases, with templates and commands for agents including GitHub Copilot, Claude Code and Gemini CLI. AWS's **Kiro** is an agentic development environment built around specs, requirements and task lists, and has since become generally available with a CLI. Many teams simply keep spec and plan files in the repository and point their coding agent at them through repository instructions (AGENTS.md or equivalent). The discipline matters more than the tool.",
        ],
      },
      {
        heading: "Making it work in a team",
        body: [
          "Keep specs in the repository next to the code, versioned and reviewed like code. Size tasks so each pull request is small enough to understand in one review. Make acceptance criteria executable as tests before implementation where possible. Update the spec when requirements change, then regenerate the affected plan and tasks rather than patching code ad hoc. For security-relevant changes, add the checks from [[/blogs/ai-generated-code-security|AI-generated code security]], and for how agents fit into daily work, see [[/blogs/ai-coding-agents|AI coding agents]].",
        ],
        cta: {
          title: "Want AI-assisted delivery without the vibe-coding risk?",
          description: "ZSpace Labs builds web and mobile products with coding agents inside a spec-driven, reviewed and tested workflow. See [[/services/website-development|web development]] and [[/services/mobile-app-development|mobile app development]].",
        },
      },
      {
        heading: "When to use it, and when not",
        body: [],
        table: {
          headers: ["Work", "Approach"],
          rows: [
            ["New feature or product", "Full spec-driven workflow"],
            ["Significant change to existing behaviour", "Spec update + plan + tasks"],
            ["Legacy modernization", "Spec of current behaviour first (see [[/blogs/ai-legacy-code-modernization|AI legacy code modernization]])"],
            ["Small bug fix", "Short task description with acceptance test"],
            ["Throwaway prototype", "Vibe coding is fine; specify before productionizing (see [[/blogs/vibe-coding-vs-production-software|vibe coding vs production software]])"],
          ],
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Spec-driven development keeps what makes AI coding fast and adds what production needs: written intent, reviewed architecture, small changes and traceability. Approve the spec, approve the plan, review every merge, and let the agent do the implementation in between. For how team roles change around this workflow, see [[/blogs/ai-native-engineering-team|what an AI-native software team looks like]].",
        ],
      },
    ],
  },

  // ---------------------------------------- AI CODING POLICY
  {
    slug: "ai-coding-policy",
    title: "AI Coding Policy: What Companies Should Decide Before Rolling Out Coding Agents",
    seoTitle: "AI Coding Policy: What to Decide Before Rolling Out Coding Agents",
    excerpt:
      "What a company AI coding policy should cover: approved tools, data rules, agent permissions, review, IP and licensing, MCP servers, audit and production access.",
    category: "AI & Automation",
    banner: "aicodingpolicy",
    sceneKind: "security",
    bannerAlt:
      "AI coding policy areas: Tools and data (approved tools, data rules, licensing), Agent access (highlighted: repo permissions, secrets, MCP servers), Delivery (branch protection, review, CI) and Accountability (audit logs, production access, ownership).",
    date: "2026-10-08",
    readingTime: "4 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["saas-technology", "fintech", "b2b-enterprise"],
    relatedSlugs: ["ai-coding-agent-security", "mcp-governance", "ai-generated-code-security"],
    faqs: [
      { q: "Does my company need an AI coding policy?", a: "If developers use AI coding tools (most do), yes. Without one, people choose tools individually, paste sensitive code into unapproved services, give agents broad access and merge unreviewed AI code. A short, practical policy prevents that without banning useful tools." },
      { q: "What should an AI coding policy include?", a: "Approved tools and plans, what code and data may be shared, agent permissions in repositories and environments, secrets handling, approved MCP servers, review and testing requirements, licensing and IP rules, audit logging and who owns exceptions." },
      { q: "Should AI-generated code be labelled?", a: "Many teams require disclosure in pull requests when an agent wrote substantial parts of a change, so reviewers adjust their scrutiny. Line-by-line labelling is rarely practical." },
      { q: "Can coding agents have access to production?", a: "As a rule, no direct access. Changes reach production through the same reviewed pipeline as human code. Exceptions, such as read-only incident diagnostics, should be explicit, time-limited and logged." },
      { q: "Who should own the policy?", a: "Engineering leadership, with security and legal input. Review it every few months, because tools and vendor terms change quickly." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A useful AI coding policy fits on a few pages and answers eight questions: which tools and plans are approved; what code and data may be sent to them; what agents may do in repositories and environments; how secrets are kept out of reach; which MCP servers and integrations are allowed; what review and testing every change needs; how licensing and IP are handled; and what is logged and who owns exceptions. The aim is to let teams benefit from coding agents without giving them unrestricted access, not to ban them.",
        ],
      },
      {
        heading: "Why a policy, not just security settings",
        body: [
          "Technical controls (sandboxes, permission modes, branch protection) are essential and covered in [[/blogs/ai-coding-agent-security|securing AI coding agents]]. A policy decides what those controls should enforce and covers what tooling cannot: which vendors' data terms are acceptable, what developers may paste into a chat, how to treat generated code in client work, and who approves exceptions. It also gives developers clarity. Stack Overflow's 2025 survey found 84 percent of developers using or planning to use AI tools; the question is whether they do it in ways the company has agreed to.",
        ],
      },
      {
        heading: "The policy, section by section",
        body: [],
        table: {
          headers: ["Section", "Decide", "Typical rule"],
          rows: [
            ["Approved tools", "Which products and plans", "Business or enterprise plans only, with data-use terms reviewed"],
            ["Data rules", "What may be shared", "Company code yes on approved tools; customer data, credentials and regulated data never"],
            ["Repository permissions", "What agents can do in Git", "Work on branches; open pull requests; never push to protected branches"],
            ["Environments", "Where agents run and what they reach", "Sandboxed by default; network allowlist; no production credentials"],
            ["Secrets", "How keys stay out of reach", "Secrets manager, development-only keys, secret scanning with push protection"],
            ["MCP servers and integrations", "Which tools agents may connect to", "Allowlist managed centrally (see [[/blogs/mcp-governance|MCP governance]])"],
            ["Review and testing", "What every change needs", "Human review, CI checks, extra review for auth, payments and data"],
            ["IP and licensing", "Ownership and open-source risk", "Follow vendor IP terms; scan dependencies and licences"],
            ["Disclosure", "When to mention AI use", "Note substantial agent-written changes in the pull request"],
            ["Audit and ownership", "What is logged; who approves exceptions", "Agent actions attributable; named owner for exceptions"],
          ],
        },
      },
      {
        heading: "Agent identity and audit",
        body: [
          "Agents should act under identities you can attribute: a bot account or app installation for automated agents, and the developer's identity (with agent activity recorded) for interactive use. Logs should answer which agent made a change, on whose instruction, with which permissions. This becomes important when something goes wrong or a client asks how their code was produced. The same principles as business agents apply; see [[/blogs/ai-agent-authentication|AI agent identity and authentication]].",
        ],
      },
      {
        heading: "Production access",
        body: [
          "The simplest rule is the safest: coding agents do not touch production. Changes reach production through the same reviewed, tested pipeline as any other change. If you allow agents to assist with incidents, make the access read-only, time-limited, approved per incident and fully logged.",
        ],
        callout: {
          type: "takeaway",
          text: "Coding agents can write most of a change; they should not be able to merge it, deploy it or reach production data on their own.",
        },
        cta: {
          title: "Rolling out coding agents across a team?",
          description: "ZSpace Labs helps engineering teams write a practical AI coding policy and configure the tools to enforce it. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Rolling it out",
        body: [],
        checklist: [
          "Inventory which AI tools developers already use, and how",
          "Pick approved tools and plans; review their data-use terms",
          "Write the policy on a few pages, with examples of allowed and not-allowed use",
          "Configure enforcement: managed settings, branch protection, secret scanning, MCP allowlists",
          "Add repository instructions so agents follow the same rules (see [[/blogs/ai-coding-agents|AI coding agents]])",
          "Train the team; collect exceptions and questions",
          "Review quarterly as tools and terms change",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "An AI coding policy turns individual experimentation into a team capability. Decide tools, data, permissions, review and ownership once, enforce them in configuration, and revisit them regularly. For the review checklist that sits under the policy, see [[/blogs/ai-generated-code-security|AI-generated code security]] and [[/blogs/ai-code-review|AI code review]].",
        ],
      },
    ],
  },

  // ---------------------------------------- AI-NATIVE ENGINEERING TEAM
  {
    slug: "ai-native-engineering-team",
    title: "What Is an AI-Native Software Team? How Roles Change When Coding Agents Join",
    seoTitle: "What Is an AI-Native Software Team? How Roles Change With Agents",
    excerpt:
      "How developer, architect, designer, product and QA roles change when coding agents do more implementation, and why human expertise moves to design and review.",
    category: "Web Development",
    banner: "ainativeteam",
    sceneKind: "roadmap",
    bannerAlt:
      "Where human expertise moves in an AI-native team: Product decisions, Architecture, Specs, Agents implement (highlighted), Review + validation, Operate + measure.",
    date: "2026-10-08",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "startups"],
    relatedSlugs: ["spec-driven-development", "measure-ai-coding-impact", "ai-software-development"],
    faqs: [
      { q: "What is an AI-native software team?", a: "A team that designs its workflow around coding agents doing much of the implementation, while people concentrate on product decisions, architecture, specifications, review, validation and operation. It is a change in how work is divided, not a team without engineers." },
      { q: "Do AI coding agents replace developers?", a: "No. They shift developer time from typing code to specifying, reviewing, testing, integrating and owning systems. Research such as DORA's 2025 report describes AI as an amplifier of existing practices; strong engineers and practices matter more, not less." },
      { q: "Which roles change the most?", a: "Developers (more review and specification), QA (more test strategy and automation, less manual scripting) and tech leads (more architecture and review capacity planning). Product managers and designers gain the ability to prototype directly." },
      { q: "Do junior developers still have a role?", a: "Yes, but their learning path changes. They need deliberate practice reading, testing and debugging code, and mentorship on design, because agents can produce code they do not yet understand." },
      { q: "How should we measure an AI-native team?", a: "With delivery outcomes (lead time, change failure rate, recovery time), quality signals and business results, not lines of code or the share of code written by AI." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An AI-native software team is organized around coding agents doing a large share of implementation, with people concentrating on what agents cannot own: deciding what to build, designing architecture, writing specifications, reviewing and validating changes, and operating systems in production. Engineers do not become unnecessary; their work moves up the stack toward judgement. The teams that benefit most are the ones with strong fundamentals already in place (small batches, good tests, clear ownership, a solid internal platform), because AI amplifies whatever practices exist.",
        ],
      },
      {
        heading: "What changes, and what does not",
        body: [
          "Google's DORA 2025 research describes AI as an amplifier: it magnifies the strengths of high-performing organizations and the dysfunctions of struggling ones. Its AI Capabilities Model names seven capabilities that amplify AI's benefits: a clear and communicated AI stance, healthy data ecosystems, AI-accessible internal data, strong version control practices, working in small batches, a user-centric focus and quality internal platforms. None of them is about typing speed. They are about how a team decides, validates and ships.",
        ],
      },
      {
        heading: "How each role shifts",
        body: [],
        table: {
          headers: ["Role", "Less of", "More of"],
          rows: [
            ["Developer", "Writing boilerplate and routine code", "Specifying tasks, reviewing agent output, testing, debugging, integration, owning services"],
            ["Tech lead / architect", "Implementing core features personally", "Architecture decisions, plans, review standards, keeping changes small and coherent"],
            ["QA / test engineer", "Manual test scripting", "Test strategy, acceptance criteria, evaluation sets, exploratory testing"],
            ["Product manager", "Long requirement documents nobody reads", "Precise specs with acceptance criteria; prototypes to test ideas"],
            ["Designer", "Static handoff only", "Working prototypes, design systems agents can follow, UX validation"],
            ["Coding agents", "—", "Implementation, tests, refactors, documentation, migrations under supervision"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "Review capacity becomes the constraint. If agents produce more changes than people can review well, quality drops. Plan review time explicitly and keep changes small.",
        },
      },
      {
        heading: "The new bottlenecks",
        body: [],
        checklist: [
          "**Review:** more and larger changes arrive faster; reviewers become the limiting resource",
          "**Specification quality:** vague tasks produce plausible but wrong code faster than before",
          "**Integration and environments:** agents need working dev environments, test data and CI to be productive",
          "**Context:** agents need access to internal docs and conventions (DORA's AI-accessible internal data)",
          "**Judgement skills:** the team must be able to tell good code from code that merely runs",
        ],
      },
      {
        heading: "Team practices that work",
        body: [
          "Teams that adapt well tend to share a few habits: spec-driven work for anything non-trivial (see [[/blogs/spec-driven-development|spec-driven development]]); small pull requests with explicit review time; repository instructions so agents follow team conventions; tests and acceptance criteria written before or alongside implementation; a written AI coding policy (see [[/blogs/ai-coding-policy|AI coding policy]]); and regular measurement of delivery outcomes (see [[/blogs/measure-ai-coding-impact|how to measure AI coding impact]]).",
        ],
        cta: {
          title: "Want a team that ships faster with AI without losing quality?",
          description: "ZSpace Labs works with product teams using coding agents inside reviewed, spec-driven workflows, and helps set up the practices that make it work. See [[/services/website-development|web and product development]].",
        },
      },
      {
        heading: "Juniors, seniors and hiring",
        body: [
          "Senior engineers become more valuable because judgement, design and review are now the scarce skills. Junior engineers still matter, but they need deliberate practice understanding code, not just producing it: reading agent output critically, writing tests, debugging and explaining design choices. When hiring, test for reviewing and reasoning about code and systems, not only writing it from scratch.",
        ],
      },
      {
        heading: "A 90-day transition plan",
        body: [
          "Moving a team to an AI-native way of working is a process change, so treat it like one: small steps, measured, with the team involved.",
        ],
        table: {
          headers: ["Period", "Focus", "Done when"],
          rows: [
            ["Weeks 1–2", "Baseline delivery metrics; agree an AI coding policy; pick approved tools", "Policy published; baseline recorded"],
            ["Weeks 3–6", "Repository instructions, test coverage on core paths, small-PR norms; pilot on one stream of work", "Agents follow conventions; PRs stay reviewable"],
            ["Weeks 7–10", "Spec-driven workflow for new features; review capacity planned explicitly; QA shifts to acceptance criteria", "Specs and plans reviewed before implementation"],
            ["Weeks 11–13", "Compare metrics with baseline; adjust roles, review load and training; decide what to scale", "Decision documented with evidence"],
          ],
        },
      },
      {
        heading: "Conclusion",
        body: [
          "An AI-native team is not a smaller team with a chatbot. It is a team that has moved human expertise to product decisions, architecture, specification, review and operation, and has the practices to keep quality high as output increases. For the broader picture of AI in software delivery, see [[/blogs/ai-software-development|AI software development]].",
        ],
      },
    ],
  },

  // ---------------------------------------- MEASURE AI CODING IMPACT
  {
    slug: "measure-ai-coding-impact",
    title: "How to Measure the Impact of AI Coding Tools on a Development Team",
    seoTitle: "How to Measure the Impact of AI Coding Tools on Your Team",
    excerpt:
      "Which metrics show whether AI coding tools help a team (delivery, quality, review load, cost, experience), which mislead, and how to run a fair comparison.",
    category: "Web Development",
    banner: "aicodingmetrics",
    sceneKind: "analytics",
    bannerAlt:
      "AI coding impact metrics in four groups: Delivery (lead time, deployment frequency), Stability (highlighted: change failure rate, recovery time, rework), Review and flow (PR size, review time) and Cost and experience (tool spend, developer survey).",
    date: "2026-10-08",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology"],
    relatedSlugs: ["ai-software-development-cost", "ai-native-engineering-team", "claude-code-vs-codex-vs-cursor"],
    faqs: [
      { q: "How do you measure AI coding productivity?", a: "Track delivery outcomes before and after adoption (lead time for changes, deployment frequency, change failure rate, recovery time), plus review time, pull request size, rework, tool cost and developer experience. Compare against a baseline rather than relying on how fast people feel." },
      { q: "Is the percentage of AI-written code a good metric?", a: "No. It measures activity, not value. More AI-written code can mean more review load and more rework. Use it, at most, as context." },
      { q: "Why do developers' impressions differ from measurements?", a: "METR's 2025 randomized trial found experienced developers expected AI to speed them up but were measured as 19 percent slower on those tasks, while still believing they had been faster. Perception is useful for experience, not for productivity claims." },
      { q: "How long should we measure before deciding?", a: "At least one to two months of baseline and a similar period after adoption, covering normal variation in work. Short trials mostly measure novelty." },
      { q: "What if delivery speeds up but quality drops?", a: "That is the pattern DORA's 2025 research warns about: throughput up, stability down. Slow down: smaller changes, more review capacity and stronger tests, before expanding use." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Measure AI coding tools by team outcomes, not activity. Keep the four DORA delivery metrics (lead time for changes, deployment frequency, change failure rate, time to restore) as the core, add flow signals that AI affects directly (pull request size, review time, rework), track cost (tool spend per developer and per merged change), and survey developer experience. Compare against a baseline from before adoption or a comparable team, over months rather than weeks. Avoid vanity metrics such as the share of code written by AI or lines of code.",
        ],
      },
      {
        heading: "Why this is harder than it looks",
        body: [
          "AI coding tools change what developers spend time on, not just how much they produce. Self-reports are unreliable: METR's 2025 randomized trial found experienced open-source developers took 19 percent longer on real tasks with early-2025 tools while estimating they had been about 20 percent faster. METR's later work suggested speedups with newer tools but with wide uncertainty. Google's DORA 2025 research found AI adoption associated with higher throughput and lower stability. Any of these effects can show up in your team, which is why you need your own measurements.",
        ],
      },
      {
        heading: "The metric set",
        body: [],
        table: {
          headers: ["Group", "Metric", "What it tells you"],
          rows: [
            ["Delivery", "Lead time for changes", "Whether work reaches users faster"],
            ["Delivery", "Deployment frequency", "Whether the team ships more often"],
            ["Stability", "Change failure rate", "Whether faster changes break more things"],
            ["Stability", "Time to restore service", "Whether the team can still fix problems quickly"],
            ["Stability", "Rework rate", "Share of changes reverted or fixed soon after merge"],
            ["Flow", "Pull request size", "Whether changes stay reviewable"],
            ["Flow", "Review time and wait time", "Whether review has become the bottleneck"],
            ["Cost", "Tool spend per developer and per merged change", "Whether usage-based costs are proportional to value"],
            ["Experience", "Developer survey (focus, frustration, trust)", "Adoption barriers and burnout risk"],
            ["Outcome", "Features or fixes delivered against roadmap", "Whether it matters to the business"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "If lead time improves but change failure rate and rework rise, AI is moving work downstream, not removing it. Fix review and testing before scaling usage.",
        },
      },
      {
        heading: "Metrics that mislead",
        body: [],
        checklist: [
          "**Lines of code or commits:** AI inflates both without adding value",
          "**Share of code written by AI:** activity, not outcome",
          "**Suggestion acceptance rate:** says little about correctness or rework",
          "**Self-reported time saved:** useful sentiment, unreliable measurement",
          "**Individual leaderboards:** encourage gaming and discourage careful review",
        ],
      },
      {
        heading: "Running a fair comparison",
        body: [],
        checklist: [
          "Record a baseline for one to two months before broad adoption",
          "Roll out to one team or one type of work first, keeping a comparable group",
          "Keep other changes (process, staffing) stable during the comparison where possible",
          "Measure for at least as long as the baseline",
          "Review results with the team, including survey findings",
          "Decide what to scale, change or stop, and repeat when tools change",
        ],
        cta: {
          title: "Want to know whether AI tools are helping your team?",
          description: "ZSpace Labs helps engineering teams set baselines, instrument delivery metrics and run fair comparisons of AI coding tools. See [[/services/website-development|engineering services]].",
        },
      },
      {
        heading: "Turning measurements into decisions",
        body: [
          "Use the data to adjust practices, not just to justify spend: if review time grows, cap pull request size and schedule review capacity; if rework grows, strengthen specs and tests (see [[/blogs/spec-driven-development|spec-driven development]]); if one type of work benefits clearly, expand there first. For the external evidence on cost and productivity, see [[/blogs/ai-software-development-cost|does AI make software development cheaper?]], and for comparing tools during a trial, [[/blogs/claude-code-vs-codex-vs-cursor|Claude Code vs Codex vs Cursor]].",
        ],
      },
      {
        heading: "Reading common patterns",
        body: [
          "Most teams see one of a handful of patterns in the first months. Each points to a different action.",
        ],
        table: {
          headers: ["Pattern", "Likely meaning", "Action"],
          rows: [
            ["Lead time down, failure rate flat", "AI is helping without hurting quality", "Expand gradually; keep measuring"],
            ["Lead time down, failure rate and rework up", "Work is moving downstream to review and fixes", "Smaller PRs, stronger tests, more review time"],
            ["PR size up, review time up", "Agents produce changes too large to review well", "Split tasks; enforce size limits; spec-driven work"],
            ["No change in delivery, high tool spend", "Usage without workflow change", "Train on specific workflows; reconsider plan tiers"],
            ["Survey shows frustration with \"almost right\" output", "Context or task design problems", "Better repository instructions and specs; narrower tasks"],
          ],
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Measure AI coding tools the way you would measure any process change: outcomes over activity, a baseline, a comparison group and enough time. Keep stability metrics next to speed metrics, because faster delivery that breaks more often is not progress.",
        ],
      },
    ],
  },

  // ---------------------------------------- MCP GOVERNANCE
  {
    slug: "mcp-governance",
    title: "MCP Governance: How Companies Control Which MCP Servers Agents Can Use",
    seoTitle: "MCP Governance: Allowlists, Registries and Gateways for Agents",
    excerpt:
      "How companies govern MCP servers across AI tools and agents: inventories, approval, allowlists, private registries, gateways, identity and monitoring.",
    category: "AI & Automation",
    banner: "mcpgovflow",
    sceneKind: "security",
    bannerAlt:
      "MCP governance flow: Request a server, Security review, Add to registry, Allowlist in clients (highlighted), Gateway + auth, Monitor + review.",
    date: "2026-10-08",
    readingTime: "4 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["b2b-enterprise", "fintech", "saas-technology"],
    relatedSlugs: ["mcp-security", "model-context-protocol", "ai-coding-policy"],
    faqs: [
      { q: "What is MCP governance?", a: "The organizational controls that decide which Model Context Protocol servers employees and agents may connect to, how they are approved, how they authenticate and how their use is monitored. It complements MCP security, which is about hardening individual servers." },
      { q: "Why do companies need it?", a: "MCP servers give AI tools access to data and actions. Without governance, anyone can connect an agent to an unvetted server that reads company data or performs actions, and nobody knows which servers are in use." },
      { q: "What is an MCP allowlist?", a: "A centrally managed list of permitted servers that AI clients enforce. GitHub, for example, made MCP allowlists generally available in enterprise managed settings for Copilot clients in August 2026." },
      { q: "What is an MCP registry?", a: "A catalog of MCP servers with metadata. The official MCP Registry launched in preview in September 2025 for public servers; companies can also run private registries listing approved internal and external servers." },
      { q: "What does an MCP gateway do?", a: "It sits between clients and servers to centralize authentication, authorization, logging, rate limits and policy, so controls do not depend on each client's configuration." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "MCP governance decides which MCP servers people and agents may use and under what conditions. A practical setup has five parts: an **inventory** of servers in use, an **approval process** with a security review, a **private registry** listing approved servers, **allowlists enforced in AI clients** (coding tools, assistants, agent platforms), and a **gateway or shared auth layer** for logging, permissions and rate limits on important servers. Review approvals on every server update, because MCP servers can change their tools and descriptions after you trust them.",
        ],
      },
      {
        heading: "Why MCP needs organizational control",
        body: [
          "The [[/blogs/model-context-protocol|Model Context Protocol]] made it easy to connect AI tools to anything: databases, ticketing, cloud consoles, browsers, internal APIs. That is its value and its risk. A developer can add a community server to their coding agent in seconds; a business user can connect an assistant to a third-party server that reads their mailbox. Each server is a supply-chain component with access to data and actions, and the OWASP Top 10 for Agentic Applications lists agentic supply chain vulnerabilities and tool misuse among the top risks (see [[/blogs/owasp-top-10-agentic-applications|the OWASP agentic guide]]).",
          "[[/blogs/mcp-security|MCP security]] covers how to secure an individual server. Governance answers the organizational questions: which servers, for whom, approved by whom, and how do we know what is in use?",
        ],
      },
      {
        heading: "The building blocks",
        body: [],
        table: {
          headers: ["Control", "What it does", "Examples"],
          rows: [
            ["Inventory", "Shows which servers are in use, by whom", "Client configuration scans, gateway logs, surveys"],
            ["Approval and review", "Checks publisher, permissions, data access, tool descriptions", "Security review template, risk tiers"],
            ["Registry", "Single list of approved servers with metadata and versions", "Private registry; the official MCP Registry for public server metadata"],
            ["Client allowlists", "Clients refuse servers not on the list", "GitHub enterprise managed settings for Copilot (GA August 2026)"],
            ["Gateway / auth layer", "Central authentication, authorization, logging and rate limits", "MCP gateway in front of internal and high-risk servers"],
            ["Monitoring and re-review", "Detects new tools, changed descriptions, unusual use", "Alerts on server updates; periodic access review"],
          ],
        },
      },
      {
        heading: "Allowlists and registries in practice",
        body: [
          "Client-side enforcement is where governance becomes real. GitHub made `allowedMcpServers` and `deniedMcpServers` generally available in enterprise managed settings on 6 August 2026, enforced in the GitHub Copilot app, Copilot CLI and VS Code, with matching by server URL for remote servers and by exact command for local ones (a user-assigned name is a convenience label, not a security control), and a fail-closed default if the policy is malformed. GitHub also previewed pointing Copilot at a company-managed registry so only listed servers can run.",
          "For public server metadata, the official MCP Registry launched in preview on 8 September 2025, with namespace verification through GitHub accounts or domain ownership. A private registry can reference approved entries from it alongside internal servers.",
        ],
        callout: {
          type: "note",
          text: "Enforcement depends on each client. Check which of your AI tools support central allowlists, and use a gateway or network controls for those that do not.",
        },
      },
      {
        heading: "A review checklist for new servers",
        body: [],
        checklist: [
          "Who publishes and maintains it? Official vendor, known open-source project or unknown?",
          "What tools does it expose, and are any destructive or able to send data out?",
          "What data can it read, and where does that data go?",
          "How does it authenticate (OAuth with scoped tokens, or long-lived keys)?",
          "Do tool descriptions contain anything that could instruct a model?",
          "Can it run remotely behind your gateway instead of locally on laptops?",
          "Which version is approved, and how will updates be re-reviewed?",
        ],
        cta: {
          title: "Need control over the MCP servers your teams use?",
          description: "ZSpace Labs sets up MCP inventories, private registries, client allowlists and gateways, and builds internal MCP servers with proper auth. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Start small",
        body: [
          "You do not need every control at once. Start with an inventory and a short approved list, enforce it in the clients that support allowlists, route internal and high-risk servers through a gateway with logging, and re-review on updates. Fold the rules into your [[/blogs/ai-coding-policy|AI coding policy]] for developer tools and your broader AI governance for business assistants.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "MCP turned integrations into something any user can add, which means governance has to catch up. Know what is in use, approve deliberately, enforce allowlists in clients, centralize auth and logging for important servers, and watch for changes. That keeps the benefits of MCP without letting every agent connect to everything.",
          "MCP servers added without approval are one form of shadow automation; see [[/blogs/shadow-ai-agents|shadow AI agents]].",
        ],
      },
    ],
  },
];
