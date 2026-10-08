import type { BlogPost } from "./blog-data";

/**
 * Agentic software development cluster, part one (published 2026-10-08):
 * the AI software factory, parallel AI coding agents and coding agent
 * context. Sources checked 2026-10-08: Claude Code worktree documentation;
 * git-worktree reference; GitHub Agent HQ announcement coverage; GitHub
 * Copilot repository custom instructions docs; agents.md; agentskills.io.
 */

export const agenticDevPosts1: BlogPost[] = [
  // ---------------------------------------- AI SOFTWARE FACTORY
  {
    slug: "ai-software-factory",
    title: "The AI Software Factory: How AI Agents Could Change the Software Development Pipeline",
    seoTitle: "The AI Software Factory: How Agents Change the Dev Pipeline",
    excerpt:
      "What an AI software factory is, how planning, coding, testing and review agents fit a governed pipeline, and why human approval and quality gates remain.",
    category: "Web Development",
    banner: "specdrivenflow",
    sceneKind: "workflow",
    date: "2026-10-08",
    readingTime: "6 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "startups"],
    relatedSlugs: ["ai-software-development-lifecycle", "spec-driven-development", "parallel-ai-coding-agents"],
    faqs: [
      { q: "What is an AI software factory?", a: "An AI software factory is an engineering pipeline in which AI agents carry out many of the steps from requirement to deployed change (planning, coding, testing, security checks, documentation), coordinated by orchestration, governed by policy and quality gates, with people approving at defined points." },
      { q: "Is a fully autonomous software factory realistic today?", a: "For narrow, well-specified, low-risk work with strong automated tests, agents can take a change from ticket to pull request with little help. End-to-end autonomy from product idea to production is not a safe default for most organizations; review, architecture and risk decisions still need people." },
      { q: "How is it different from CI/CD?", a: "CI/CD automates building, testing and deploying code that people wrote. An AI software factory adds agents that produce the code, tests and documentation themselves, so it also needs shared context, agent identity, orchestration and gates that judge AI-produced work." },
      { q: "Where should humans approve?", a: "At minimum: approving the specification or plan, reviewing and approving merges (especially for high-risk changes), approving production deployments for sensitive systems and owning incident response. Risk-based policies decide where else." },
      { q: "What does a team need before building one?", a: "Reliable automated tests, a clean CI pipeline, small-batch delivery, repository instructions for agents, branch protection, secure sandboxes and a way to measure delivery and quality. Agents amplify whatever process already exists." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An **AI software factory** is a software delivery pipeline in which AI agents perform many of the steps between a product requirement and a running change: planning, specification, coding, testing, security checks and documentation. Orchestration routes the work, shared context keeps agents consistent, every agent has an identity, quality gates judge the output and people approve at defined points.",
          "It is a useful way to think about where agentic development is heading, not a product you switch on. Fully autonomous pipelines are not production-ready for most software today. What works now is a supervised factory: agents do the repetitive production work, and people own requirements, architecture, risk and final approval.",
        ],
      },
      {
        heading: "Defining the concept carefully",
        body: [
          "The phrase borrows from manufacturing: repeatable stations, standard inputs, inspection and flow. Applied to software, it means treating the path from requirement to deployment as a pipeline of well-defined stages, several of which are performed by agents. The emphasis is on the system (stages, handoffs, gates) rather than on any single coding agent.",
          "Two misreadings are worth avoiding. It does not mean 'no developers': someone has to define what to build, design the system, set the gates and own failures. And it does not mean every stage is automated: the factory decides which stages agents perform, which people perform and which require approval, based on risk. This builds on the stage-by-stage view in [[/blogs/ai-software-development-lifecycle|the AI software development lifecycle]].",
        ],
      },
      {
        heading: "The pipeline, stage by stage",
        body: [],
        code: {
          label: "AI software factory pipeline (diagram)",
          text: `Product requirements        (people: problem, outcome, limits)
        │
        ▼
Planning agents             break into tasks, find affected code
        │                   ◆ human approves plan for non-trivial work
        ▼
Design / specification      spec, interfaces, acceptance criteria
        │                   ◆ architect signs off on design changes
        ▼
Coding agents               one task per branch / worktree
        │
        ▼
Testing agents              run, extend and diagnose tests
        │
        ▼
Security checks             SAST, dependency, secrets, policy
        │
        ▼
Review                      AI first pass + human review by risk
        │                   ◆ human approves merge
        ▼
Deployment                  progressive rollout, feature flags
        │                   ◆ approval for high-risk systems
        ▼
Observability               errors, performance, business signals
        │
        ▼
Feedback ─────────────────▶ new tasks, test cases, spec fixes
                            (loops back to requirements/planning)`,
        },
        table: {
          headers: ["Stage", "What agents can do", "What people own"],
          rows: [
            ["Requirements", "Draft user stories, find gaps and contradictions", "The problem, priority, success criteria"],
            ["Planning", "Decompose into tasks, map affected code, estimate", "Approving the plan and scope"],
            ["Design and spec", "Draft specs, interfaces, test plans", "Architecture decisions and trade-offs"],
            ["Coding", "Implement tasks, refactor, migrate", "Boundaries, conventions, hard problems"],
            ["Testing", "Run suites, add tests, reproduce bugs, diagnose", "Test strategy, what 'correct' means"],
            ["Security", "Run scanners, explain findings, propose fixes", "Risk acceptance, sensitive changes"],
            ["Review", "First-pass review, summaries, evidence", "Approval and accountability"],
            ["Deployment", "Prepare releases, notes, rollout configs", "Go/no-go for risky releases"],
            ["Observability", "Triage alerts, correlate errors to changes", "Incident command, customer impact"],
          ],
        },
      },
      {
        heading: "Orchestration",
        body: [
          "Orchestration decides which agent works on what, in what order, with what inputs, and what happens when a stage fails. In practice it ranges from a developer running several agent sessions by hand, to issue-driven setups where assigning a ticket to an agent produces a pull request, to platforms that track many agents' tasks in one place. GitHub's Agent HQ, announced in late 2025, is an example of the last: a single place to assign, steer and track work from several vendors' coding agents inside existing issues, branches and pull requests.",
          "Good orchestration keeps tasks small and independent, limits how many run at once to what reviewers can absorb, and stops runs that exceed time or cost budgets. See [[/blogs/parallel-ai-coding-agents|parallel AI coding agents]] for the coordination details.",
        ],
      },
      {
        heading: "Shared context",
        body: [
          "A factory only produces consistent output if every agent works from the same knowledge: architecture, conventions, commands, boundaries and the current spec. That means repository instruction files, specs stored with the code, and documentation agents can read. Without it, five agents produce five styles. [[/blogs/ai-coding-agent-context|AI coding agent context]] covers what to provide and how to keep it current, and [[/blogs/spec-driven-development|spec-driven development]] covers the spec itself.",
        ],
      },
      {
        heading: "Identity and governance",
        body: [
          "Every agent in the factory should act under an identity you can attribute: a bot account or app installation with scoped permissions, never a developer's personal token shared across runs. Commits, pull requests and deployments should show which agent did what, on whose instruction. Governance sets the rules: which repositories agents may change, which paths need human-led changes, which tools and MCP servers are approved and how secrets are handled. Our guides to an [[/blogs/ai-coding-policy|AI coding policy]] and [[/blogs/ai-coding-agent-security|securing AI coding agents]] cover these controls, and an [[/blogs/ai-control-plane|AI control plane]] is the same idea applied across all agents in an organization.",
        ],
      },
      {
        heading: "Quality gates and human approval",
        body: [
          "Gates are what make a factory safe rather than fast and fragile. Automated gates (build, tests, type checks, linting, security scans, policy checks, size limits) run on every change. Human gates are placed by risk: a documentation fix may merge after automated checks and a light review, while a change to payments or authentication needs an experienced reviewer and a staged rollout. [[/blogs/ai-code-change-risk-scoring|AI code change risk scoring]] gives a framework for deciding which is which.",
        ],
        callout: {
          type: "takeaway",
          text: "The factory's throughput is set by its slowest trustworthy gate, usually human review. Invest in smaller changes, better evidence and risk-based review before adding more coding agents.",
        },
      },
      {
        heading: "How mature is this today?",
        body: [
          "It is uneven. Agents are already effective at well-specified tasks inside codebases with good tests: bug fixes, small features, refactors, migrations, test additions, documentation. They are less reliable at ambiguous requirements, cross-cutting architecture, subtle concurrency or security work, and anything where 'correct' is hard to test. Google's DORA research on AI-assisted delivery describes AI as an amplifier of existing strengths and weaknesses, which matches what teams see: the factory works where the underlying engineering system is already healthy.",
          "A realistic goal is a pipeline where routine changes flow from ticket to reviewed pull request mostly through agents, while people spend their time on specs, architecture, review of risky changes and production ownership.",
        ],
      },
      {
        heading: "How to start building one",
        body: [],
        checklist: [
          "Fix the foundations first: reliable tests, fast CI, small batches",
          "Write repository instructions and keep specs next to the code",
          "Give agents their own identities and sandboxed environments",
          "Protect main: required checks, required reviews, CODEOWNERS for sensitive paths",
          "Start with one task type (for example dependency updates or small bugs)",
          "Add a planning step with human approval for anything non-trivial",
          "Define risk tiers and the gates each tier requires",
          "Measure lead time, change failure rate, rework and review load",
          "Expand to new task types only when quality holds",
        ],
      },
      {
        heading: "Common mistakes",
        body: [
          "Adding many coding agents before review capacity exists creates a queue of unreviewed pull requests. Skipping the spec stage produces fast, wrong work. Letting agents share one human's credentials destroys attribution. Treating test success as proof of correctness invites agents to weaken tests (see [[/blogs/agentic-qa|agentic QA]]). And measuring success by the volume of AI-generated code rewards the wrong thing; see [[/blogs/measure-ai-coding-impact|how to measure the impact of AI coding tools]].",
        ],
        cta: {
          title: "Setting up agent-assisted delivery?",
          description: "ZSpace Labs builds web and mobile products with agent-assisted workflows, specs, review gates and CI designed in. See [[/services/website-development|full-stack development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "The AI software factory is a helpful model: a pipeline of stages, some performed by agents, connected by orchestration and shared context, controlled by identity, gates and human approval. It is not a promise of autonomous software delivery. Build it on healthy engineering foundations, place people where judgment and accountability matter, and grow the share of work agents handle only as fast as quality allows.",
        ],
      },
    ],
  },

  // ---------------------------------------- PARALLEL AI CODING AGENTS
  {
    slug: "parallel-ai-coding-agents",
    title: "Parallel AI Coding Agents: How Multiple Agents Can Work on the Same Software Project",
    seoTitle: "Parallel AI Coding Agents: Running Several Agents on One Repo",
    excerpt:
      "How to run several AI coding agents on one project: task decomposition, Git worktrees, shared dependencies, merge conflicts and when one agent is better.",
    category: "Web Development",
    banner: "codingagentsecflow",
    sceneKind: "agent",
    date: "2026-10-08",
    readingTime: "6 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "startups"],
    relatedSlugs: ["ai-coding-agents-git-workflow", "ai-coding-agents", "single-agent-vs-multi-agent-systems"],
    faqs: [
      { q: "Can multiple AI coding agents work on the same repository?", a: "Yes, if each works in isolation (its own Git worktree, container or cloud sandbox on its own branch) on a task that does not overlap with the others, and the results come back as separate pull requests for review." },
      { q: "What is a Git worktree and why does it help?", a: "A Git worktree is an additional working directory attached to the same repository, checked out on its own branch. Several agents can edit files at the same time without touching each other's working copy, while sharing the repository's history." },
      { q: "When is one agent better than several?", a: "When the task is tightly coupled, touches the same files, needs a single coherent design or is small enough that coordination overhead outweighs the speed-up. Parallelism helps with independent tasks, not with one task split artificially." },
      { q: "How do you avoid merge conflicts between agents?", a: "Decompose work by module or file ownership, land shared changes (schemas, interfaces, dependencies) first, keep branches short-lived, rebase frequently and merge in a planned order." },
      { q: "Does running more agents make a team faster?", a: "Only if review keeps up. Parallel agents multiply the number of changes waiting for review and testing. Cap concurrency to your review capacity and track cost and rework per merged change." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Several AI coding agents can work on one project at the same time if each has an **independent task**, an **isolated workspace** and its **own branch**. The usual setup is one Git worktree, container or cloud sandbox per agent, tasks decomposed so they touch different files, shared changes (schemas, interfaces, dependencies) landed first and every result returned as a separate pull request.",
          "Parallelism is useful for independent work: separate bugs, separate modules, exploring alternative implementations. One agent is better for tightly coupled changes that need a single coherent design. And the real limit is rarely the agents; it is how many changes your reviewers and CI can absorb.",
        ],
      },
      {
        heading: "Why teams run agents in parallel",
        body: [
          "Coding agents work for minutes to hours on a task. While one runs, a developer can start another. Background and cloud agents make this explicit: you can assign several issues and receive several pull requests. Common reasons: clearing a backlog of small independent fixes, running large mechanical changes split by directory, trying two or three approaches to the same problem and keeping the best, or letting one agent write tests while another implements. Our guide to [[/blogs/ai-coding-agents|AI coding agents]] covers interactive versus background agents.",
        ],
      },
      {
        heading: "Isolation: worktrees, containers and cloud sandboxes",
        body: [
          "Agents must not share a working directory. Two agents editing the same checkout overwrite each other's changes, run tests against each other's half-finished work and corrupt each other's context. There are three common forms of isolation.",
          "**Git worktrees** give each agent its own directory and branch on the same machine while sharing repository history ([[https://git-scm.com/docs/git-worktree|git-worktree reference]]). Claude Code, for example, has a --worktree option that creates a worktree under .claude/worktrees on a new branch, and can run subagents in their own worktrees ([[https://code.claude.com/docs/en/worktrees|Claude Code worktree docs]]). **Containers or dev environments** add isolation of dependencies, ports and databases. **Cloud sandboxes**, used by cloud coding agents, run each task in its own remote environment and return a branch or pull request.",
        ],
        table: {
          headers: ["Isolation", "Isolates", "Watch out for"],
          rows: [
            ["Git worktree", "Files and branch", "Shared ports, local databases, caches; reinstall dependencies per worktree"],
            ["Container / dev environment", "Files, dependencies, services", "Setup time, resource use on one machine"],
            ["Cloud sandbox", "Everything; runs remotely", "Secrets and network access policies; cost per task"],
          ],
        },
        code: {
          label: "Worktree per agent (illustrative commands)",
          text: `# from the main checkout
git worktree add ../app-wt-search  -b agent/search-filters
git worktree add ../app-wt-billing -b agent/invoice-pdf
git worktree add ../app-wt-a11y    -b agent/form-labels

# each agent works in its own directory, runs its own tests
# when done: push branch, open PR, then clean up
git worktree remove ../app-wt-search
git worktree list`,
        },
      },
      {
        heading: "Task decomposition",
        body: [
          "Parallel work succeeds or fails at decomposition. Good parallel tasks are independent (no task needs another's unfinished output), separable by file or module, individually testable and small enough to review in one sitting. Write each as a short spec with acceptance criteria; see [[/blogs/spec-driven-development|spec-driven development]].",
        ],
        table: {
          headers: ["Decomposition", "Parallel-friendly?", "Why"],
          rows: [
            ["Separate bugs in different modules", "Yes", "Independent files and tests"],
            ["Same mechanical change across directories", "Yes, split by directory", "Identical pattern, disjoint files"],
            ["Feature: API + UI + tests", "Partly", "Land the API contract first, then UI and tests in parallel"],
            ["Refactor of a core abstraction", "No", "Every task depends on the new design"],
            ["Alternative implementations of one task", "Yes, as competing attempts", "Keep one, discard the rest"],
          ],
        },
      },
      {
        heading: "Shared dependencies and interfaces",
        body: [
          "Most conflicts come from shared things: a database schema, a shared type, a package manifest, a lockfile, a route table. Handle them first and serially. If three tasks need a new column, one agent adds the migration and model, it merges, and then the three tasks branch from the updated main. Forbid parallel tasks from changing dependencies or lockfiles unless that is their whole job.",
        ],
        callout: {
          type: "tip",
          text: "Land interfaces before implementations. A merged API contract or type definition lets several agents build against it without coordinating with each other.",
        },
      },
      {
        heading: "Merge conflicts, duplicate work and drift",
        body: [
          "Even with good decomposition, parallel branches drift from main. Keep branches short-lived, rebase or merge main before review, and merge in a deliberate order (shared foundations first). Duplicate work happens when two agents independently create the same helper or fix the same underlying bug; reduce it by giving every agent the same context about existing utilities and by reviewing parallel pull requests together. Our guide to [[/blogs/ai-coding-agents-git-workflow|AI coding agents and Git]] covers branch naming, commits and merge gates in detail.",
        ],
      },
      {
        heading: "Coordination patterns",
        body: [
          "**Human as coordinator.** A developer decomposes work, starts agents, reviews and merges. Simple and effective for small teams. **Lead agent with subagents.** One agent plans and delegates subtasks to subagents, each with clean context and, ideally, its own worktree, then integrates results. Useful for large mechanical changes. **Issue-driven.** Tasks live in the issue tracker; assigning an issue to an agent produces a pull request. Works well with existing team workflows and makes status visible. In every pattern, keep a single place that shows which agent is working on what, to prevent overlap. For general multi-agent trade-offs, see [[/blogs/single-agent-vs-multi-agent-systems|single-agent vs multi-agent systems]].",
        ],
      },
      {
        heading: "When parallel agents are useful vs when one agent is better",
        body: [],
        table: {
          headers: ["Use parallel agents when...", "Use one agent when..."],
          rows: [
            ["Tasks are independent and touch different files", "Changes are tightly coupled or touch the same files"],
            ["You want to compare alternative approaches", "The work needs one coherent design"],
            ["A mechanical change can be split by directory", "The task is small; coordination costs more than it saves"],
            ["Review capacity can absorb more pull requests", "Reviewers are already the bottleneck"],
            ["Tests are fast and reliable per area", "Only a slow, flaky end-to-end suite exists"],
          ],
        },
      },
      {
        heading: "A practical workflow",
        body: [],
        checklist: [
          "Write a short plan listing tasks, the files each touches and dependencies between them",
          "Land shared changes (schema, interfaces, dependencies) first, serially",
          "Create one isolated workspace and branch per remaining task",
          "Give every agent the same repository instructions plus a task-specific spec",
          "Cap concurrent agents to what reviewers can handle this day",
          "Require each agent to run tests and report evidence in its pull request",
          "Rebase on main before review; review related pull requests together",
          "Merge in a planned order; re-run CI after each merge",
          "Clean up worktrees and branches; record cost and rework per merged change",
        ],
      },
      {
        heading: "Costs and limits",
        body: [
          "Each agent consumes model usage and compute, and each pull request consumes reviewer time. Track cost per merged change and review time per agent change, not the number of agents running. If parallel work increases rework or change failure rate, slow down. [[/blogs/measure-ai-coding-impact|Measuring the impact of AI coding tools]] covers the metrics.",
        ],
        cta: {
          title: "Scaling development with coding agents?",
          description: "ZSpace Labs delivers web and mobile builds using agent-assisted workflows with isolation, review gates and CI designed in. See [[/services/website-development|full-stack development]] and [[/services/mobile-app-development|mobile app development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Parallel coding agents work when the work is genuinely parallel. Isolate each agent with a worktree, container or sandbox; decompose by file and module; land shared changes first; keep branches short; and size concurrency to review capacity. For coupled work, one well-briefed agent and one careful reviewer usually beat several agents and a merge headache.",
        ],
      },
    ],
  },

  // ---------------------------------------- AI CODING AGENT CONTEXT
  {
    slug: "ai-coding-agent-context",
    title: "AI Coding Agent Context: How to Give Coding Agents the Right Project Knowledge",
    seoTitle: "AI Coding Agent Context: Giving Agents the Right Knowledge",
    excerpt:
      "What coding agents need to know about your project, how AGENTS.md, CLAUDE.md, rules and skills fit together, and why more context is not better context.",
    category: "Web Development",
    banner: "contextflow",
    sceneKind: "code",
    date: "2026-10-08",
    readingTime: "6 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "startups"],
    relatedSlugs: ["context-engineering-ai-agents", "spec-driven-development", "ai-coding-agents"],
    faqs: [
      { q: "What context does an AI coding agent need?", a: "The project's architecture, repository structure, commands to build and test, coding conventions, dependencies and approved libraries, the requirement and acceptance criteria for the task, test strategy, security rules, deployment environment, database structure and examples of existing patterns to follow." },
      { q: "What is AGENTS.md?", a: "AGENTS.md is an open, plain Markdown format for project instructions aimed at coding agents. Many agents read it, including OpenAI Codex, Cursor and GitHub Copilot; Claude Code uses CLAUDE.md and can be pointed at an existing AGENTS.md." },
      { q: "Is more context always better for coding agents?", a: "No. Long, generic or outdated instructions dilute attention and can contradict the code. Agents do better with short always-on rules, task-specific context and the ability to look things up in the repository when needed." },
      { q: "Where should coding agent context live?", a: "In the repository, versioned with the code: a root instruction file, scoped files for subdirectories or paths, specs for current work and reusable skills or playbooks for recurring procedures." },
      { q: "How do you keep agent context up to date?", a: "Treat it like code: review changes, update it in the same pull request that changes a convention or command, prune stale rules regularly and fix the instruction file whenever an agent repeats the same mistake." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI coding agents produce better changes when they know how your project works: its **architecture**, **repository structure**, **commands**, **conventions**, **dependencies**, **test strategy**, **security rules**, **deployment environment**, **database structure** and the **existing patterns** to follow, plus the requirement for the task at hand.",
          "But more context is not better context. Keep always-loaded instructions short and accurate, scope rules to the parts of the codebase they apply to, give each task its own spec and let the agent read code and docs on demand. Context that is stale or contradicts the code is worse than none.",
        ],
      },
      {
        heading: "What coding agents actually need to know",
        body: [],
        table: {
          headers: ["Knowledge", "What to provide", "Where it lives"],
          rows: [
            ["Architecture", "Main components, boundaries, data flow, key decisions", "Short architecture doc; decision records"],
            ["Repository structure", "Where things are; generated vs hand-written code", "Root instruction file"],
            ["Commands", "Install, build, test one area, lint, type-check, run locally", "Root instruction file"],
            ["Coding conventions", "Language rules, error handling, naming, patterns to avoid", "Root or scoped instruction files; linters"],
            ["Dependencies", "Approved libraries; rules for adding new ones", "Instruction file; dependency policy"],
            ["Product requirements", "The goal, acceptance criteria, out-of-scope items", "Task spec or issue"],
            ["Test strategy", "Which tests to add, where, how to run them, what not to mock", "Instruction file; testing guide"],
            ["Security rules", "Auth and data access libraries, secrets, protected paths", "Instruction file; policy"],
            ["Deployment environment", "Runtimes, environment variables, feature flags, constraints", "Docs; config files"],
            ["Database structure", "Schema, migration rules, what never to change", "Schema files; migration guide"],
            ["Existing patterns", "One or two reference implementations to imitate", "Links in the spec or instruction file"],
          ],
        },
      },
      {
        heading: "More context is not better context",
        body: [
          "Models have a limited attention budget. Anthropic's engineering guidance on context engineering makes the point that useful context is the smallest set of high-signal information that gets the job done, and that recall degrades as context grows ([[https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents|Anthropic on context engineering]]). For coding agents this means a 2,000-line instruction file is a liability: rules get ignored, contradictions creep in and the agent spends tokens on things irrelevant to the task.",
          "Three kinds of bad context cause most problems: **generic** advice ('write clean code') that adds nothing; **stale** instructions that describe commands or patterns the code no longer uses; and **contradictory** rules across files. When an agent repeatedly does the wrong thing, check the context before blaming the model. The general principles are in our guide to [[/blogs/context-engineering-ai-agents|context engineering]].",
        ],
      },
      {
        heading: "The context hierarchy",
        body: [
          "Organize coding agent context in layers, from always-on to on-demand. Each layer should be as small as it can be.",
        ],
        code: {
          label: "Coding agent context hierarchy (diagram)",
          text: `ALWAYS LOADED (keep short)
  org / user rules ............ personal or company defaults
  root instruction file ....... AGENTS.md / CLAUDE.md /
                                .github/copilot-instructions.md
        │
SCOPED (loaded for matching paths)
  subdirectory files .......... packages/api/AGENTS.md
  path rules .................. *.instructions.md (applyTo)
        │
PER TASK
  spec / issue ................ goal, acceptance criteria,
                                files likely affected, examples
        │
ON DEMAND (agent fetches when relevant)
  skills / playbooks .......... "how we write migrations"
  code search, docs, schema ... read when needed
  tool results ................ test output, logs, CI results`,
        },
      },
      {
        heading: "Repository documentation formats",
        body: [
          "**AGENTS.md** is an open, plain Markdown format for agent instructions, read by many agents including OpenAI Codex, Cursor and GitHub Copilot; nested files in subdirectories can scope instructions to a package ([[https://agents.md/|agents.md]]). **CLAUDE.md** is Claude Code's equivalent; it can import or point to an existing AGENTS.md so you keep one source. **GitHub Copilot** reads repository-wide instructions from .github/copilot-instructions.md and path-specific instructions from .github/instructions/*.instructions.md files with an applyTo pattern, and also supports AGENTS.md ([[https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions|GitHub Copilot custom instructions]]). Cursor supports project rules as well.",
          "**Skills** package procedures an agent loads only when relevant: a folder with a SKILL.md file of instructions plus optional scripts and references. Agent Skills started at Anthropic and is now published as an open format supported by several agents ([[https://agentskills.io/|agentskills.io]]). Skills suit recurring procedures ('add a database migration', 'release a mobile build') that would bloat the root file.",
        ],
        callout: {
          type: "tip",
          text: "If your team uses several agents, keep one canonical AGENTS.md and make tool-specific files point to it. Duplicated instructions drift apart within weeks.",
        },
      },
      {
        heading: "What goes in the root file, and what does not",
        body: [
          "A good root file fits on a screen or two. It contains commands, the project map, the non-obvious conventions, boundaries (generated code, protected paths, migrations already merged) and security rules. It does not contain the whole architecture, style rules your linter already enforces, or task-specific details.",
        ],
        code: {
          label: "Root instruction file (illustrative)",
          text: `# Agent instructions

## Commands
- Install: pnpm i
- Test one package: pnpm --filter api test
- Lint + types: pnpm lint && pnpm typecheck

## Map
- apps/web: Next.js storefront (App Router)
- packages/api: REST API; handlers in src/routes
- packages/db: schema + migrations (Drizzle)

## Conventions
- Money in integer minor units; never floats
- Validate input with zod schemas in packages/api/src/schemas
- Follow packages/api/src/routes/orders.ts as the reference handler

## Boundaries
- Never edit src/generated/ or merged migrations
- Auth, payments (packages/api/src/{auth,payments}): human-led changes
- No new dependencies without noting why in the PR

## Before finishing
- Run tests for touched packages; include output in the PR`,
        },
      },
      {
        heading: "Task-specific context",
        body: [
          "Most of the value comes from the task, not the root file. A good task brief states the goal, acceptance criteria, what is out of scope, the files or modules likely involved, one reference implementation to imitate and how to verify the change. [[/blogs/spec-driven-development|Spec-driven development]] formalizes this into spec, plan and tasks that the agent and reviewer both work from. For larger work, ask the agent to explore and propose a plan before writing code, and correct its understanding early.",
        ],
      },
      {
        heading: "Context selection and freshness",
        body: [
          "Let agents select context rather than pre-loading it. Capable agents search the codebase, read relevant files and run commands; give them good entry points instead of pasting files into the prompt. Keep context fresh by updating instruction files in the same pull request that changes a command, convention or structure, and by adding a rule whenever an agent repeats a mistake that a sentence would prevent. Review these files periodically and delete rules that no longer apply.",
        ],
        checklist: [
          "Root file: commands, map, conventions, boundaries, security rules",
          "Scoped files for packages or paths with different rules",
          "One reference implementation per common pattern",
          "Specs for non-trivial tasks, stored with the code",
          "Skills for recurring multi-step procedures",
          "Linters and type checks for rules that can be enforced mechanically",
          "Instruction changes reviewed like code changes",
          "A periodic prune of stale or duplicated rules",
        ],
      },
      {
        heading: "Security and context",
        body: [
          "Context is also an attack surface. Instruction files, issues, documentation and dependency READMEs are all text the agent may follow, so treat external content as untrusted and keep secrets out of anything agents read. Put security rules (approved auth and data-access libraries, no hard-coded secrets, protected directories) in the root file, and enforce the important ones with permissions and CI rather than instructions alone. See [[/blogs/ai-coding-agent-security|securing AI coding agents]] and [[/blogs/ai-generated-code-security|AI-generated code security]].",
        ],
      },
      {
        heading: "Common mistakes",
        body: [
          "Writing a long, generic instruction file once and never updating it. Maintaining separate, conflicting files for each agent tool. Describing conventions the linter could enforce. Omitting test commands, so agents guess. Giving no reference implementations, so agents invent new patterns. And blaming the model for mistakes that a single accurate sentence of context would have prevented.",
        ],
        cta: {
          title: "Preparing a codebase for coding agents?",
          description: "ZSpace Labs sets up repositories, instructions, specs and CI so teams get consistent results from coding agents. See [[/services/website-development|full-stack development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Coding agents are only as consistent as the project knowledge they receive. Provide the essentials in short, accurate, versioned files; scope rules to where they apply; put the real detail in task specs; let agents fetch everything else on demand; and keep it all fresh as the code changes. Better context, not more context, is what turns agent output into code your team would have written.",
        ],
      },
    ],
  },
];
