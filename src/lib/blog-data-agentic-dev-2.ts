import type { BlogPost } from "./blog-data";

/**
 * Agentic software development cluster, part two (published 2026-10-08):
 * AI-generated code provenance, AI code change risk scoring and the Git
 * workflow for coding agents. Sources checked 2026-10-08: Agent Trace draft
 * specification (agent-trace.dev); SLSA provenance specification; GitHub
 * docs on co-authored commits, CODEOWNERS, rulesets and reviewing Copilot
 * pull requests; git-interpret-trailers reference.
 */

export const agenticDevPosts2: BlogPost[] = [
  // ---------------------------------------- AI-GENERATED CODE PROVENANCE
  {
    slug: "ai-generated-code-provenance",
    title: "AI-Generated Code Provenance: How Teams Should Track Code Written by AI",
    seoTitle: "AI-Generated Code Provenance: Tracking Code Written by AI",
    excerpt:
      "How to record human, AI-assisted and agent-written code through commits, trailers, pull requests and build provenance, and what you cannot reliably detect.",
    category: "Web Development",
    banner: "aicodingpolicy",
    sceneKind: "code",
    date: "2026-10-08",
    readingTime: "7 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["fintech", "saas-technology", "healthcare-healthtech"],
    relatedSlugs: ["ai-coding-policy", "ai-coding-agents-git-workflow", "ai-supply-chain-security"],
    faqs: [
      { q: "What is AI-generated code provenance?", a: "It is the record of how code came to exist: whether a person wrote it, an AI assistant suggested it, or an agent generated it; which tool and model were involved where known; who instructed and reviewed it; and which commits, pull requests and builds it went through." },
      { q: "Can you reliably detect AI-generated code after the fact?", a: "No. Detectors that guess from code style are unreliable, and code is routinely edited by both people and tools. Provenance has to be recorded when the code is created and reviewed, not inferred later." },
      { q: "How do teams mark commits made by AI agents?", a: "Common practices are agent-specific bot identities for autonomous agents, Git trailers such as Co-authored-by or a custom trailer naming the tool, pull request labels and templates that state AI involvement, and agent session logs linked from the pull request." },
      { q: "Why does code provenance matter?", a: "For audits and compliance, software supply chain security, licensing review, debugging (knowing how a change was produced and reviewed) and accountability. It also lets teams measure where AI-produced changes cause rework or incidents." },
      { q: "Is there a standard for AI code attribution?", a: "Not an established one yet. Agent Trace, proposed by Cursor, is a draft open specification for recording AI and human contributions in version control. Build provenance standards such as SLSA cover how artifacts were built, not who or what wrote the code." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "**AI-generated code provenance** is the record of how a change came to exist: whether it was **human-written**, **AI-assisted** (a person accepting suggestions) or **agent-generated** (an agent writing and editing files), which tool and model were involved where that is known, who gave the instruction, who reviewed and approved it, and which commits, pull requests and builds it passed through.",
          "The key point is that provenance must be **recorded at creation**, not detected later. No tool can reliably tell AI-written code from human-written code after the fact, especially once both have edited it. Use agent identities, commit trailers, pull request metadata, session logs and build provenance to capture what actually happened.",
        ],
      },
      {
        heading: "Why teams need to know how code was produced",
        body: [],
        table: {
          headers: ["Need", "Question provenance answers"],
          rows: [
            ["Auditability", "Who or what made this change, on whose instruction, and who approved it?"],
            ["Security", "Which changes came from agents that read untrusted input or had broad permissions?"],
            ["Compliance", "Can we show regulators or customers how AI was used and reviewed in this code?"],
            ["Software supply chain", "What went into this build, and was every step trusted?"],
            ["Licensing", "Did we enable public-code matching filters; was anything flagged?"],
            ["Debugging", "How was this bug introduced, and what context did the author (human or agent) have?"],
            ["Accountability", "Which person owns this change and its consequences?"],
            ["Improvement", "Do agent-produced changes cause more rework or incidents in certain areas?"],
          ],
        },
      },
      {
        heading: "Human, AI-assisted and agent-generated: useful categories",
        body: [
          "Most teams need only a few categories, recorded at the commit or pull request level. Line-level attribution is possible with some tools but rarely necessary for governance.",
        ],
        table: {
          headers: ["Category", "Typical source", "How to record it"],
          rows: [
            ["Human-written", "Developer writes code, maybe with search or docs", "Default; developer identity"],
            ["AI-assisted", "Developer accepts inline suggestions or chat snippets and edits them", "PR checkbox or label; tool named in team policy"],
            ["Agent-generated, human-supervised", "Interactive agent edits files under a developer's direction", "Developer identity plus trailer naming the agent"],
            ["Agent-generated, autonomous", "Background or cloud agent produces a branch or PR", "Agent bot identity; PR links to task and session"],
            ["Agent modification of human code", "Agent fixes review comments or failing tests on a PR", "Separate commits under agent identity or trailer"],
          ],
        },
        callout: {
          type: "note",
          text: "Do not claim precision you do not have. 'Agent-generated' at commit level is honest and useful. 'This file is 63 percent AI-written' usually is not, because people and tools edit each other's lines.",
        },
      },
      {
        heading: "Commits: identities and trailers",
        body: [
          "**Identities.** Autonomous agents should commit under their own bot account or app identity, never a developer's personal account, so git log shows the agent as author and permissions can be scoped. GitHub's Copilot coding agent, for example, works on its own branch and opens a pull request for a person to review, and approvals from the person who asked for the work may not count toward required reviews, which keeps an independent reviewer in the loop ([[https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/review-copilot-prs|GitHub on reviewing Copilot pull requests]]).",
          "**Trailers.** For interactive agent work under a developer's identity, add Git trailers at the end of the commit message. Co-authored-by is widely understood and displayed by GitHub ([[https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors|GitHub on co-authored commits]]); some agents add one automatically, and their settings control it. Teams that want machine-readable detail add custom trailers, which Git can parse with git interpret-trailers.",
        ],
        code: {
          label: "Commit with provenance trailers (illustrative)",
          text: `Add retry with backoff to webhook sender

Retries 5xx and timeouts up to 5 times with jittered
exponential backoff. Idempotency key reused across retries.

Co-authored-by: Coding Agent <agent-bot@example.com>
AI-Tool: <agent name> <version>
AI-Model: <model identifier, if exposed>
AI-Session: https://internal.example.com/agent-sessions/8f2c
Reviewed-by: A. Developer <a.dev@example.com>`,
        },
      },
      {
        heading: "Pull requests: the best place for provenance",
        body: [
          "The pull request is where intent, change, evidence and review meet, so it is the most useful provenance record. Use a template with an 'AI involvement' section (none, assisted, agent-generated), the task or spec it implemented, the agent session link, test evidence and any files the agent was told not to touch. Labels (ai-agent, ai-assisted) make reporting easy. Review history then records who examined and approved the change. Our guide to [[/blogs/ai-coding-agents-git-workflow|AI coding agents and Git]] covers the full pull request workflow.",
        ],
      },
      {
        heading: "Agent session logs",
        body: [
          "For agent-generated changes, the session log (the instructions, files read, commands run, tool calls and intermediate failures) is the richest provenance there is. Store it, or a summary, for a defined retention period and link it from the pull request. It answers questions commits cannot: what context the agent had, whether it read untrusted content, and whether it was asked to weaken a test. Apply the same access controls and secret scanning to these logs as to the code itself.",
        ],
      },
      {
        heading: "Emerging attribution formats",
        body: [
          "Tool vendors are starting to standardize attribution. **Agent Trace** is a draft open specification, proposed by Cursor, for recording which code ranges came from AI, humans or both, with optional model identifiers, stored alongside version control in files, Git notes or a database ([[https://agent-trace.dev/|Agent Trace]]). It is a proposal, so check adoption by the tools you use before depending on it. Separately, **build provenance** frameworks such as SLSA describe verifiable information about how an artifact was built, from which source and by which builder ([[https://slsa.dev/spec/v1.0/provenance|SLSA provenance]]). They complement each other: code provenance covers authorship; build provenance covers the path from source to artifact.",
        ],
      },
      {
        heading: "Security and the software supply chain",
        body: [
          "Agent-produced code adds supply chain questions: did the agent add dependencies, were they verified, did it read instructions from untrusted sources, did it run with network access? Provenance helps you answer them after an incident and target reviews before one. Pair it with dependency review, secret scanning and signed builds. Our guides to [[/blogs/ai-supply-chain-security|AI supply chain security]] and [[/blogs/ai-generated-code-security|AI-generated code security]] cover the checks.",
        ],
      },
      {
        heading: "What you cannot reliably do",
        body: [
          "Be clear internally about limits. You cannot reliably detect AI-generated code by style. Developers can paste AI output from tools outside your control. Inline suggestions are accepted and edited in ways no log captures line by line. Provenance policies therefore rely partly on honest self-reporting for assisted work, and on enforced identities and logs for agent work. That is still valuable: it covers the changes with the most autonomy, which are the ones that matter most for risk.",
        ],
      },
      {
        heading: "Implementation checklist",
        body: [],
        checklist: [
          "Define a small set of categories (human, assisted, agent-supervised, agent-autonomous)",
          "Give autonomous agents their own bot identities with scoped permissions",
          "Standardize commit trailers for agent involvement",
          "Add an AI involvement section and labels to the pull request template",
          "Link agent session logs from pull requests; set retention",
          "Require an independent human approval for agent pull requests",
          "Record dependency additions and their review",
          "Generate build provenance for release artifacts",
          "Report rework, incidents and review time by category",
          "Write the policy down; see our AI coding policy guide",
        ],
      },
      {
        heading: "Common mistakes",
        body: [
          "Buying an 'AI code detector' instead of recording provenance. Letting agents commit as the developer who started them, which hides autonomy. Tracking percentages of AI code as a productivity metric, which invites gaming (see [[/blogs/measure-ai-coding-impact|measuring AI coding impact]]). Storing session logs with secrets in them. And treating provenance as blame: its purpose is to understand and improve the process.",
        ],
        cta: {
          title: "Setting up governed AI-assisted development?",
          description: "ZSpace Labs builds software with coding agents under clear identities, review gates and traceable pull requests. See [[/services/website-development|full-stack development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Code provenance for AI is a recording problem, not a detection problem. Use agent identities, commit trailers, pull request metadata, session logs and build provenance to capture how each change was produced and reviewed. Be honest about what cannot be tracked, focus on the changes with the most autonomy, and use the record for audits, security, debugging and improving how your team works with agents. Our [[/blogs/ai-coding-policy|AI coding policy guide]] covers the surrounding rules.",
        ],
      },
    ],
  },

  // ---------------------------------------- AI CODE CHANGE RISK SCORING
  {
    slug: "ai-code-change-risk-scoring",
    title: "AI Code Change Risk Scoring: How to Decide Which AI-Generated Changes Need Human Review",
    seoTitle: "AI Code Change Risk Scoring: Which AI Changes Need Review",
    excerpt:
      "A practical framework for scoring AI-generated code changes by risk, with low, medium, high and critical tiers mapped to testing, review and deployment.",
    category: "Web Development",
    banner: "aicodesecflow",
    sceneKind: "security",
    date: "2026-10-08",
    readingTime: "6 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["fintech", "saas-technology", "ecommerce"],
    relatedSlugs: ["ai-code-review", "ai-coding-policy", "ai-generated-code-security"],
    faqs: [
      { q: "What is code change risk scoring?", a: "It is a way of rating each change by how much harm it could cause if it is wrong, based on what it touches (authentication, payments, data, infrastructure), how widely it applies, how well it is tested and how easily it can be reversed. The score decides which checks, reviews and deployment steps it needs." },
      { q: "Do all AI-generated changes need human review?", a: "In most organizations, yes, at least a light review before merge. Risk scoring decides how deep that review is, who does it, whether extra approvals are needed and how the change is deployed. Some teams allow very low-risk agent changes, such as documentation, to merge after automated checks and a quick review." },
      { q: "Should AI changes be scored differently from human changes?", a: "The same risk factors apply to both. AI changes may warrant an extra point where the agent had broad context access or read untrusted input, and where the reviewer cannot ask the author about intent. Many teams simply apply the same framework to everything." },
      { q: "How do you calculate the score automatically?", a: "Use path rules (CODEOWNERS-style patterns for sensitive directories), file-type detection (migrations, infrastructure, dependency manifests), diff size, test coverage on changed lines and keywords in the diff, combined in a simple points model. Keep the model explainable." },
      { q: "Can an AI reviewer decide the risk level?", a: "It can help by summarizing the change and flagging sensitive areas, but the tier should come from deterministic rules that cannot be argued down by the change itself. AI review is an input, not the gate." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "**AI code change risk scoring** rates each change by how much damage it could do if it is wrong, then uses that rating to decide **testing**, **human review**, **approvals** and **deployment strategy**. Score on what the change touches (authentication, payments, permissions, data, infrastructure, dependencies, public APIs), its **blast radius**, its **test coverage** and its **reversibility**.",
          "Map scores to four tiers. **Low**: automated checks and a quick review. **Medium**: a standard review by someone familiar with the area. **High**: an expert reviewer, extra tests and a staged rollout. **Critical**: two approvals including a code owner, security review where relevant and a planned, monitored release, or a human-led change.",
        ],
      },
      {
        heading: "Why AI-generated changes need risk-based review",
        body: [
          "Coding agents increase the number of changes a team produces. Review capacity does not grow at the same rate. Reviewing everything with the same depth either slows delivery or, more often, makes reviews shallow everywhere. Risk scoring spends human attention where mistakes are expensive.",
          "AI changes also differ in ways that matter for review: the author cannot be asked what they meant, the code can look plausible while missing a rule, and agents sometimes change more than the task required. A framework makes review depth predictable instead of dependent on how busy the reviewer is. It complements [[/blogs/ai-code-review|AI code review]] tooling, which helps reviewers but should not set the gate.",
        ],
      },
      {
        heading: "Risk factors",
        body: [
          "Score each factor that applies. The points below are a starting point; tune them to your systems.",
        ],
        table: {
          headers: ["Factor", "Raises risk when the change...", "Points (example)"],
          rows: [
            ["Authentication", "Touches login, sessions, tokens, MFA, password reset", "+4"],
            ["Payments", "Touches pricing, checkout, charges, refunds, payouts", "+4"],
            ["Permissions", "Changes roles, authorization checks, tenant isolation", "+4"],
            ["Security", "Changes crypto, input validation, CSP, secrets handling", "+3"],
            ["Database migrations", "Alters schema, backfills data, drops or renames columns", "+3"],
            ["Data handling", "Touches personal data, exports, retention, logging of user data", "+3"],
            ["Infrastructure", "Changes IaC, networking, CI/CD, deployment config", "+3"],
            ["Dependencies", "Adds or upgrades packages, especially major versions", "+2"],
            ["API changes", "Changes public or partner-facing contracts", "+2"],
            ["Blast radius", "Shared library, core path or all tenants affected", "+1 to +3"],
            ["Test coverage", "Changed lines lack meaningful tests", "+2"],
            ["Reversibility", "Cannot be rolled back cleanly (data migrations, emails sent, external calls)", "+3"],
            ["Size", "Large diff that is hard to review in one sitting", "+1 to +2"],
            ["Agent context", "Agent read untrusted input or had broad permissions during the task", "+1"],
          ],
        },
      },
      {
        heading: "The four tiers",
        body: [
          "Sum the points and map them to a tier, with overrides: any change to authentication, payments or permissions is at least High regardless of size, and irreversible data migrations in production are Critical.",
        ],
        table: {
          headers: ["Tier", "Example score", "Typical changes"],
          rows: [
            ["LOW", "0–2", "Docs, copy, tests only, internal tooling, small isolated UI fixes"],
            ["MEDIUM", "3–5", "Feature work in one module, new endpoint behind auth, minor dependency upgrade"],
            ["HIGH", "6–9", "Permission logic, schema migration, public API change, infrastructure config"],
            ["CRITICAL", "10+ or override", "Auth flows, payment logic, tenant isolation, irreversible data changes, security controls"],
          ],
        },
      },
      {
        heading: "Mapping tiers to testing, review, approval and deployment",
        body: [],
        table: {
          headers: ["Tier", "Testing", "Human review", "Approval", "Deployment"],
          rows: [
            ["LOW", "CI: build, lint, types, existing tests", "Quick review of the diff and summary", "One approver", "Normal pipeline"],
            ["MEDIUM", "CI plus new or updated tests for the change", "Standard review by someone who knows the module", "One approver; not the requester", "Normal pipeline; monitor errors"],
            ["HIGH", "Above plus integration tests; security scan; migration dry run", "Experienced reviewer reads every line; checks edge cases", "Code owner approval", "Feature flag or canary; rollback plan written"],
            ["CRITICAL", "Above plus targeted security tests, threat review, staging soak", "Two reviewers incl. domain expert; security review", "Code owner + second approver; change record", "Staged rollout with monitoring; scheduled window; or human-led change"],
          ],
        },
        code: {
          label: "Risk scoring in the pull request flow (diagram)",
          text: `Agent opens PR
     │
     ▼
Risk scorer (deterministic rules)
  paths · file types · diff size · coverage · overrides
     │
     ├─ LOW ──────▶ CI ─▶ quick review ─▶ merge ─▶ deploy
     ├─ MEDIUM ───▶ CI + new tests ─▶ module reviewer ─▶ merge
     ├─ HIGH ─────▶ CI + integration + scan ─▶ code owner
     │              ─▶ merge behind flag ─▶ canary
     └─ CRITICAL ─▶ all checks + security review
                    ─▶ 2 approvals ─▶ staged rollout + watch
     (label + required checks set automatically on the PR)`,
        },
      },
      {
        heading: "Automating the score",
        body: [
          "Make the scorer deterministic and explainable, and run it in CI on every pull request. Inputs: path patterns for sensitive areas (the same patterns you use in a CODEOWNERS file, [[https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners|GitHub CODEOWNERS]]), file types (migrations, Terraform, workflow files, lockfiles), diff size, coverage on changed lines and whether dependency manifests changed. Output: a tier label, the reasons, and the required checks and reviewers. Enforce the outcome with branch protection or rulesets so the tier cannot be skipped ([[https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets|GitHub rulesets]]).",
          "An AI reviewer can add useful signals, such as 'this change alters an authorization check', but should only ever raise the tier, never lower it.",
        ],
        callout: {
          type: "tip",
          text: "Agents can be told the risk tiers too. Ask them to stop and request a human-led change when a task would touch a Critical area, rather than discovering it at review.",
        },
      },
      {
        heading: "A worked example",
        body: [
          "A hypothetical agent pull request adds a 'bulk export' button to an admin dashboard. The scorer sees: new endpoint returning customer data (+3 data handling), changes to an authorization check for the admin role (+4 permissions, override to at least High), 220 changed lines (+1), tests added for the happy path but not for non-admin users (+2 coverage). Total 10: **Critical**. The pull request is labelled, a code owner and a security reviewer are requested, the export ships behind a feature flag to one internal tenant first, and a test for non-admin access is required before merge. The same agent's next pull request, fixing a typo in the help text, scores 0 and merges after a quick review.",
        ],
      },
      {
        heading: "Calibrating the framework",
        body: [
          "Review the framework monthly at first. Look at incidents and rollbacks: which tier did the cause have? If Low-tier changes cause incidents, a factor is missing. If almost everything lands in High, reviewers will start skimming; adjust thresholds or improve tests so fewer changes need deep review. Track review time and change failure rate per tier; see [[/blogs/measure-ai-coding-impact|measuring AI coding impact]].",
        ],
      },
      {
        heading: "Common mistakes",
        body: [
          "Letting the AI decide its own risk tier. Scoring only by diff size, which misses one-line permission changes. Treating test presence as test quality. Applying the framework to agent pull requests but not to human ones, which creates gaps. And setting tiers so strict that every change needs a senior reviewer, which recreates the bottleneck the framework was meant to fix. Our [[/blogs/ai-coding-policy|AI coding policy]] guide covers where these rules sit in a wider policy, and [[/blogs/ai-agent-autonomy-levels|AI agent autonomy levels]] applies the same thinking to business agents.",
        ],
        cta: {
          title: "Building review gates for agent-written code?",
          description: "ZSpace Labs sets up CI, risk-based review and deployment pipelines for teams adopting coding agents. See [[/services/website-development|full-stack development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Risk scoring lets teams accept more AI-generated changes without lowering the bar where it matters. Score what a change touches, how far it reaches, how well it is tested and how easily it can be undone; map four tiers to concrete testing, review, approval and deployment rules; automate the score; and calibrate it against real incidents.",
        ],
      },
    ],
  },

  // ---------------------------------------- AI CODING AGENTS + GIT
  {
    slug: "ai-coding-agents-git-workflow",
    title: "AI Coding Agents and Git: How Branches, Commits and Pull Requests Need to Change",
    seoTitle: "AI Coding Agents and Git: Branches, Commits and PRs",
    excerpt:
      "A Git workflow for AI coding agents: branch naming, commits, pull request summaries, test evidence, review, merge gates and rollback, for one or many agents.",
    category: "Web Development",
    banner: "vibehardenflow",
    sceneKind: "code",
    date: "2026-10-08",
    readingTime: "5 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "startups"],
    relatedSlugs: ["parallel-ai-coding-agents", "ai-generated-code-provenance", "ai-code-change-risk-scoring"],
    faqs: [
      { q: "Should AI coding agents commit directly to main?", a: "No. Agents should work on their own branches and deliver changes through pull requests, with branch protection on main requiring passing checks and human approval." },
      { q: "How should agent branches be named?", a: "Use a predictable prefix that identifies the agent and the task, such as agent/claude/1234-fix-retry or agent/copilot/search-filters. It makes agent work easy to filter, clean up and apply policies to." },
      { q: "What should an AI-generated pull request include?", a: "A summary of what changed and why, the task or spec it implements, files and areas affected, test evidence (commands run and results), risks and open questions, AI involvement and a link to the agent session." },
      { q: "Can the person who asked the agent approve its pull request?", a: "Many teams require an independent reviewer for agent pull requests, because the requester shaped the task and may review less critically. Some platforms enforce this; for example, GitHub notes that the requester's approval of a Copilot coding agent pull request may not count toward required approvals." },
      { q: "How do you roll back an agent's change?", a: "The same way as any change: revert the merge commit or disable the feature flag. Small, single-purpose pull requests and flags make rollback quick. Database migrations need a planned backward path." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Coding agents fit Git best when every agent works on **its own branch**, makes **small, well-described commits**, and delivers through a **pull request** that includes a **generated summary**, **test evidence** and **AI involvement**. Main stays protected by **merge gates** (required checks, required human approval, code owners for sensitive paths), and every merged change can be **rolled back** by revert or feature flag.",
          "The core Git model does not change. What changes is volume and authorship: more branches, more pull requests and an author you cannot ask about intent. Conventions that were optional for a few developers become necessary.",
        ],
      },
      {
        heading: "What changes when agents use Git",
        body: [
          "Agents produce changes faster than people review them, they may run in parallel, they can commit under bot identities, and their reasoning lives in a session log rather than in someone's head. That pushes the workflow towards stricter branch hygiene, richer pull request descriptions, evidence over assertion and automated gates that do not depend on the reviewer remembering everything.",
        ],
      },
      {
        heading: "Agent branches and branch naming",
        body: [
          "Give agents a branch namespace. It lets you filter agent work, apply rules (for example, agents may only push to agent/*), and clean up stale branches automatically.",
        ],
        code: {
          label: "Branch naming convention (illustrative)",
          text: `agent/<tool>/<ticket>-<short-slug>

agent/claude/482-webhook-retry
agent/codex/511-csv-export-timezone
agent/copilot/519-a11y-form-labels

# rules
- branch from latest main (or an agreed integration branch)
- one task per branch; no unrelated changes
- delete after merge; auto-close if idle for 7 days`,
        },
      },
      {
        heading: "Commits",
        body: [
          "Ask agents for small, logical commits with clear messages: what changed and why, not 'update files'. Keep mechanical changes (formatting, renames) in separate commits from behaviour changes, so reviewers can skip the noise. Record agent involvement with an identity or trailers; see [[/blogs/ai-generated-code-provenance|AI-generated code provenance]]. Teams that squash-merge can be less strict about intermediate commits, but the final squash message should still carry the summary and trailers.",
        ],
      },
      {
        heading: "Pull requests: summaries and test evidence",
        body: [
          "The pull request is where an agent's work is judged, so it must carry everything a reviewer needs. Agents are good at writing summaries; require them to fill a template instead of free text, and require evidence rather than claims.",
        ],
        code: {
          label: "Pull request template for agent changes (illustrative)",
          text: `## What and why
<2-4 sentences; link to issue/spec>

## Changes
- <file/area>: <change>

## Test evidence
- Commands run: pnpm --filter api test
- Result: 214 passed, 0 failed (output attached)
- New tests: tests/webhooks/retry.test.ts (5 cases)

## Risk
- Tier: MEDIUM (auto-scored) · Reasons: <list>
- Rollback: revert; no migration

## AI involvement
- Agent: <tool> · Session: <link> · Human requester: @name
- Tests modified (not added)?  no

## Open questions for reviewer
- <anything the agent was unsure about>`,
        },
        callout: {
          type: "tip",
          text: "Add an explicit question: 'Were existing tests modified or deleted?' Agents sometimes make failures disappear by changing tests. Reviewers should see that at a glance.",
        },
      },
      {
        heading: "Review",
        body: [
          "Review agent pull requests the way you would a capable new contributor's: does it solve the stated problem, does it change anything unrelated, do the tests exercise the change, does it follow conventions, does it add dependencies without reason? Use AI review for a first pass, but a person approves. Require an independent reviewer rather than the person who prompted the agent. Depth of review should follow risk; see [[/blogs/ai-code-change-risk-scoring|AI code change risk scoring]]. Our guide to [[/blogs/ai-code-review|AI code review]] covers tooling and noise management.",
        ],
      },
      {
        heading: "Merge gates",
        body: [
          "Merge gates are the controls that do not rely on anyone's memory. On main, require: passing CI (build, tests, lint, type checks, security scans), at least one human approval that is not the requester, code owner approval for sensitive paths, up-to-date branches before merge, and signed or verified commits if your organization uses them. Platform rules can also block force-pushes and restrict who can merge. Agents should never hold permissions that bypass these gates; see [[/blogs/ai-coding-agent-security|securing AI coding agents]].",
        ],
      },
      {
        heading: "Rollback",
        body: [
          "Plan for rollback before merge. Single-purpose pull requests revert cleanly. Feature flags let you switch behaviour off without a deploy. Database migrations need expand-and-contract patterns so a revert does not break the schema. When an agent's change causes an incident, revert first and investigate second; the session log and provenance record will help find out what went wrong.",
        ],
      },
      {
        heading: "Single agent vs multiple agents",
        body: [
          "With one agent at a time, the workflow looks like a normal feature-branch flow with stronger templates. With several agents in parallel, coordination becomes the main problem: isolated workspaces, decomposition, merge order and duplicate work. See [[/blogs/parallel-ai-coding-agents|parallel AI coding agents]] for that side.",
        ],
        table: {
          headers: ["", "Single agent", "Multiple agents"],
          rows: [
            ["Workspace", "Developer's checkout or one sandbox", "One worktree, container or sandbox per agent"],
            ["Branches", "One agent branch at a time", "Many short-lived agent branches"],
            ["Conflicts", "Rare", "Likely without decomposition by file or module"],
            ["Shared changes", "Handled inline", "Landed first, serially, before parallel tasks"],
            ["Merge order", "Not a concern", "Planned; rebase and re-run CI after each merge"],
            ["Review load", "Manageable", "Must cap concurrency to review capacity"],
            ["Visibility", "Developer knows the state", "Need a board or dashboard of agent tasks"],
          ],
        },
      },
      {
        heading: "Recommended Git workflow for coding agents",
        body: [],
        checklist: [
          "Protect main: required checks, independent human approval, code owners, no force-push",
          "Give agents bot identities with push rights only to agent/* branches",
          "One task per branch, named agent/<tool>/<ticket>-<slug>, branched from latest main",
          "Small, descriptive commits; separate mechanical from behavioural changes",
          "Agent records involvement via identity or trailers",
          "Pull request uses the agent template with test evidence and risk tier",
          "AI first-pass review, then a human review sized to the risk tier",
          "Rebase before merge; merge parallel work in a planned order",
          "Ship risky changes behind flags; write the rollback step in the PR",
          "Auto-delete merged branches and close idle agent branches",
        ],
      },
      {
        heading: "Common mistakes",
        body: [
          "Letting agents push to main 'just for small fixes'. Accepting pull requests that say 'all tests pass' without output. Allowing the requester to be the only approver. Running several agents on overlapping files without a plan. Leaving hundreds of abandoned agent branches. And squashing away the provenance trailers when merging.",
        ],
        cta: {
          title: "Bringing coding agents into your Git workflow?",
          description: "ZSpace Labs sets up branch protection, PR templates, CI gates and agent identities for teams adopting coding agents. See [[/services/website-development|full-stack development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Git already has the right primitives for agentic development: branches for isolation, commits for history, pull requests for review and reverts for recovery. Agents raise the volume and change the author, so make the conventions explicit: agent branch namespaces, structured pull requests with evidence, independent review, enforced merge gates and planned rollback. Those habits keep a faster stream of changes safe to merge.",
        ],
      },
    ],
  },
];
