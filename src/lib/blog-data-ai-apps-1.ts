import type { BlogPost } from "./blog-data";

/**
 * AI knowledge hub, part fourteen: AI in software engineering. Here "AI
 * software development" means using AI across engineering work (the
 * coding-agent cluster); building AI-powered products is
 * ai-application-development. Tool statements (GitHub Copilot coding agent
 * generally available for paid Copilot plans, Copilot CLI GA February 2026,
 * Claude Code GitHub Actions, OpenAI Codex cloud agent and CLI) were checked
 * against vendor documentation and changelogs in October 2026 and are kept
 * descriptive because features change monthly. No productivity statistics
 * are claimed. Merged into `posts` in blog-data.ts.
 */

export const aiAppsPosts1: BlogPost[] = [
  // ---------------------------------------- 611 · AI SOFTWARE DEVELOPMENT (HUB)
  {
    slug: "ai-software-development",
    title: "AI Software Development: A Complete Guide for Businesses",
    seoTitle: "AI Software Development: How Teams Use AI to Build Software",
    excerpt:
      "How businesses use AI across software development: coding assistants and agents, code review, testing, debugging, documentation and modernization, plus policies, security, measurement and an adoption plan.",
    category: "AI & Automation",
    banner: "aisdhub",
    bannerAlt:
      "AI in software development in four columns: plan (requirements, specs, estimates, design notes), build (completion, coding agents, refactoring, migrations), verify highlighted (code review, test generation, security scans, debugging) and operate (docs, incident triage, upgrades, maintenance); the note says speed gains only count if verification keeps up.",
    date: "2026-10-02",
    readingTime: "10 min read",
    relatedServiceSlugs: ["website-development", "ai-automation", "mobile-app-development"],
    relatedIndustrySlugs: ["saas-technology", "startups", "b2b-enterprise"],
    relatedSlugs: ["ai-coding-agents", "ai-software-development-lifecycle", "ai-code-review"],
    faqs: [
      { q: "What is AI software development?", a: "Using AI tools across the work of building software: generating and completing code, running coding agents on scoped tasks, reviewing pull requests, writing tests, debugging, documenting and modernizing older systems, with developers supervising and owning the result." },
      { q: "Is AI software development the same as building AI applications?", a: "No. This guide is about using AI to build any software faster and better. Building products that contain AI features, such as chat assistants or recommendation engines, is AI application development." },
      { q: "Which AI tools do development teams use?", a: "Code completion and chat in the IDE, agentic coding tools in the IDE or terminal, background coding agents that open pull requests (for example GitHub Copilot coding agent, OpenAI Codex or Claude Code in GitHub Actions), AI code review, and AI features in testing and observability tools." },
      { q: "Does AI make developers faster?", a: "It can speed up many tasks, but results vary widely by task, codebase and team practice, and time can shift to review and debugging. Measure delivery outcomes such as cycle time and change failure rate in your own team rather than relying on headline figures." },
      { q: "Is AI-generated code secure?", a: "Not automatically. It can introduce vulnerabilities, outdated dependencies or licence issues like any code. Keep code review, automated security scanning, dependency checks and tests in place, and never let AI bypass them." },
      { q: "Who owns AI-generated code?", a: "Ownership and licensing depend on your agreements with tool providers and applicable law. Review provider terms, enable features that filter suggestions matching public code where available, and keep normal licence compliance checks." },
      { q: "Should we let AI agents commit directly to the main branch?", a: "No. Agents should work on branches and open pull requests that pass CI and human review, with branch protection enforced." },
      { q: "How should a company start with AI in development?", a: "With a written usage policy, approved tools, a pilot team, baseline delivery metrics and a review of results after a few weeks, before rolling out widely." },
      { q: "Can AI help with legacy systems?", a: "Yes, for explaining unfamiliar code, mapping dependencies, adding tests and refactoring in small steps. It works best when changes are protected by tests and reviewed by people who understand the system." },
      { q: "What skills do developers need with AI tools?", a: "Clear task specification, reviewing and testing code critically, understanding architecture and security, and knowing when to stop an agent and do the work directly." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI software development means using AI throughout engineering work: completion and chat in the editor, coding agents that implement scoped tasks and open pull requests, AI-assisted code review, test generation, debugging, documentation and legacy modernization. The value is real but uneven, and it depends on verification keeping pace with generation. Adopt it with a usage policy, approved tools with appropriate data settings, branch protection and mandatory review, strong tests and security scanning, and delivery metrics measured before and after rollout.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "This hub covers using AI to build software. Deep dives: [[/blogs/ai-coding-agents|AI coding agents]], [[/blogs/ai-assisted-development-vs-agentic-coding|AI-assisted vs agentic coding]], [[/blogs/ai-code-review|AI code review]], [[/blogs/ai-software-testing|AI software testing]], [[/blogs/ai-test-generation|AI test generation]], [[/blogs/ai-debugging|AI debugging]], [[/blogs/ai-code-documentation|AI code documentation]], [[/blogs/ai-legacy-code-modernization|legacy modernization]] and the process view in [[/blogs/ai-software-development-lifecycle|the AI software development lifecycle]]. Building AI-powered products is covered separately in [[/blogs/ai-application-development|AI application development]].",
        ],
      },
      {
        heading: "Where AI Helps in Software Development",
        body: [],
        table: {
          headers: ["Activity", "How AI helps", "What stays human"],
          rows: [
            ["Requirements and design", "Drafts specs, asks clarifying questions, compares options", "Scope, trade-offs and approval"],
            ["Implementation", "Completion, chat edits, agents implementing scoped tasks", "Task definition, architecture, review"],
            ["Code review", "Flags bugs, security issues and convention problems", "Approval and judgement on findings"],
            ["Testing", "Generates test cases, finds gaps, triages failures", "Deciding what correct behaviour is"],
            ["Debugging", "Reads stack traces and logs, proposes causes and fixes", "Confirming root cause and fix"],
            ["Documentation", "Drafts docs from code and keeps them updated", "Accuracy review and architecture intent"],
            ["Maintenance", "Dependency upgrades, refactors, migrations", "Release decisions and risk"],
          ],
        },
      },
      {
        heading: "The Main Categories of Tools",
        body: [
          "**Editor assistants** offer inline completion and chat inside IDEs. **Agentic coding tools** in the IDE or terminal can read the repository, edit multiple files and run commands with the developer watching; examples include agent modes in IDE assistants, Claude Code and the Codex CLI. **Background coding agents** take an issue and work asynchronously in a cloud or CI environment, then open a pull request: GitHub Copilot coding agent, OpenAI Codex's cloud agent and Claude Code run through [[https://code.claude.com/docs/en/github-actions|GitHub Actions]] work this way. **Review and testing tools** add AI to pull requests, test suites and security scanning.",
          "These products change quickly, so evaluate them on your own repositories and check current data handling terms before rollout. The comparison of supervision levels is in [[/blogs/ai-assisted-development-vs-agentic-coding|AI-assisted vs agentic coding]].",
        ],
      },
      {
        heading: "Verification Is the Bottleneck",
        body: [
          "AI makes producing code cheap; it does not make producing correct, secure, maintainable code cheap. Teams that benefit most invest in the verification side: fast and meaningful test suites, CI that runs on every agent pull request, static analysis and secret scanning, clear coding conventions the AI can follow, and reviewers with time to read what was generated. Without these, AI increases the volume of code faster than the team can trust it.",
        ],
        diagram: {
          variant: "aisdadoption",
          alt: "Adoption flow: usage policy, pilot team, measure (highlighted), guardrails, scale tools, review; the note says measure delivery outcomes, not lines of code generated.",
          caption: "Measurement before scaling is what separates real gains from perceived ones.",
        },
      },
      {
        heading: "Policies and Guardrails",
        body: [],
        checklist: [
          "Approved tools and accounts, with enterprise data settings where available",
          "What code and data may be shared with AI tools (for example no production secrets or customer data)",
          "Agents work on branches; branch protection, required reviews and CI checks on every pull request",
          "Least-privilege tokens for agents in CI; no production credentials",
          "Security scanning, dependency and licence checks unchanged for AI-written code",
          "Disclosure in pull requests when a change was largely AI-generated, so reviewers adjust scrutiny",
          "Rules for sensitive areas (authentication, payments, cryptography) where AI changes need senior review",
        ],
        cta: {
          title: "Planning to bring AI into your engineering workflow?",
          description: "ZSpace Labs helps teams choose tools, set guardrails and pilot AI-assisted development on real projects, alongside our own AI-assisted delivery.",
        },
      },
      {
        heading: "Security and Intellectual Property",
        body: [
          "AI-generated code can contain injection flaws, weak cryptography, unsafe defaults or hallucinated packages that attackers can register under the suggested name. Keep static analysis, dependency verification and secret scanning in CI, pin dependencies and review new packages. Agents that run commands need sandboxes and scoped tokens; repository content such as issues or files can contain instructions that try to manipulate an agent, so treat it as untrusted. For IP, check provider terms on code retention and training, and use filters for suggestions matching public code where offered. See [[/blogs/prompt-injection-prevention|prompt injection prevention]].",
        ],
      },
      {
        heading: "Measuring Impact",
        body: [
          "Self-reported speed is unreliable. Track delivery metrics before and after adoption: lead time for changes, deployment frequency, change failure rate and time to restore (the DORA measures), plus review time, escaped defects and developer satisfaction. Segment by task type; AI often helps more with boilerplate, tests and unfamiliar code than with complex design work.",
          "The [[https://dora.dev/guides/dora-metrics-four-keys/|DORA delivery metrics]] are a widely used, tool-neutral starting point.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [],
        table: {
          headers: ["Advantages", "Limitations"],
          rows: [
            ["Faster boilerplate, tests and routine changes", "Plausible code that is subtly wrong"],
            ["Easier onboarding to unfamiliar code", "Review load can grow faster than capacity"],
            ["Agents handle well-scoped backlog tasks", "Weak on ambiguous or architectural work"],
            ["Better documentation and test coverage when used deliberately", "Security and licence risks need active controls"],
          ],
        },
      },
      {
        heading: "How to Adopt AI in Development Step by Step",
        body: [],
        checklist: [
          "**1. Write a usage policy** covering tools, data, review and sensitive areas",
          "**2. Record baseline delivery metrics** for the pilot team",
          "**3. Choose tools** and configure data settings and permissions",
          "**4. Strengthen verification:** tests, CI, scanning, branch protection",
          "**5. Pilot for several weeks** on real work with a mix of task types",
          "**6. Review metrics and feedback**, including where AI slowed work down",
          "**7. Scale with training** on task specification and reviewing AI output",
          "**8. Revisit quarterly** as tools and models change",
        ],
      },
      {
        heading: "How to Evaluate AI Development Tools",
        body: [
          "Tool demos use clean examples. Evaluate on your own repositories, with your languages, frameworks and conventions, over a few weeks of real work.",
        ],
        table: {
          headers: ["Criterion", "What to check"],
          rows: [
            ["Code quality on your stack", "Merge rate and review effort on real tasks"],
            ["Repository context", "How well it finds relevant code in large repositories"],
            ["Data handling", "Retention, training use, regions, enterprise controls"],
            ["Permissions", "Branch-only work, token scopes, sandboxing for agents"],
            ["Integration", "IDE, terminal, repository host, CI, issue tracker"],
            ["Administration", "Seat management, policies, audit logs, usage reporting"],
            ["Cost", "Seat and usage pricing at realistic adoption"],
          ],
        },
      },
      {
        heading: "Team Practices That Make AI Work",
        body: [],
        checklist: [
          "Agent-ready tickets with acceptance criteria and test commands (see [[/blogs/ai-coding-agents|AI coding agents]])",
          "Repository instruction files describing conventions, build and test steps",
          "Small pull requests, with AI-generated changes labelled",
          "Tests treated as the contract; changes to tests reviewed carefully (see [[/blogs/ai-test-generation|AI test generation]])",
          "Regular sharing of prompts, patterns and failures across the team",
          "Pairing junior developers with reviewers so AI does not replace learning",
        ],
      },
      {
        heading: "What Changes for Each Role",
        body: [
          "**Developers** spend less time typing boilerplate and more time specifying, reviewing and integrating. The skills that matter most shift toward reading code critically, writing precise acceptance criteria and knowing when a generated solution is subtly wrong. Developers who treat AI output as a draft from a fast but unreliable colleague tend to get the best results.",
          "**Tech leads and architects** become more important, not less. AI tools follow the patterns they see, so a codebase with clear conventions, good tests and documented decisions gets better AI output than one without. Leads also decide which work is suitable for agents and which needs a human-led design.",
          "**QA and platform engineers** own much of the verification pipeline that makes AI-generated code safe to merge: fast CI, reliable tests, preview environments and security scanning. Investment here pays off twice, because it helps human and AI contributions alike. **Engineering managers** need new metrics; counting lines or pull requests rewards volume, while lead time, change failure rate and rework show whether AI is actually helping.",
        ],
      },
      {
        heading: "Choosing Where to Start",
        body: [
          "Most teams get early value from tasks that are frequent, low-risk and easy to verify: writing tests for existing code, small bug fixes with clear reproduction steps, documentation updates, dependency upgrades and internal tooling. These build familiarity and reveal gaps in tests and instructions without exposing critical systems.",
          "Postpone AI-led work on authentication, payments, data migrations and concurrency until review practices are mature. Those areas fail in ways that are expensive and hard to detect, and they are where confident but wrong code does the most damage. The comparison in [[/blogs/ai-assisted-development-vs-agentic-coding|assisted vs agentic coding]] helps decide how much autonomy each task type deserves, and [[/blogs/ai-software-testing|AI software testing]] covers the verification side.",
        ],
      },
      {
        heading: "Open Source, Licensing and Provenance",
        body: [
          "AI tools are trained on public code and can occasionally produce output closely matching existing code. Some tools offer filters that block suggestions matching public code, or references showing where matches came from. Enable these where available, particularly for code you distribute.",
          "Dependencies suggested by AI need the same scrutiny as any other dependency: confirm the package exists under that exact name, check maintenance, licence and security history, and pin versions. Attackers register packages with names that models commonly hallucinate, so a non-existent package suggestion is a supply chain risk, not just an error. Your existing software composition analysis tools remain essential.",
          "GitHub documents how its [[https://docs.github.com/en/copilot/concepts/completions/code-referencing|code referencing feature]] flags suggestions that match public code, and NIST's [[https://csrc.nist.gov/projects/ssdf|Secure Software Development Framework]] provides a baseline for supply chain practices.",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a product team pilots a background coding agent on its backlog. Small, well-specified issues (validation bugs, copy changes, adding tests) produce mergeable pull requests after one review round; vague issues produce large, off-target changes. The team adds an issue template with acceptance criteria and test expectations, limits agent work to labelled issues and tracks review time. After the pilot, agents handle a steady share of small changes while engineers focus on design-heavy work.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Measuring lines of code or suggestions accepted instead of delivery outcomes",
          "Rolling out tools without a data and security policy",
          "Letting agents bypass review or CI",
          "Weak test suites that cannot catch AI mistakes",
          "Assigning vague tasks to agents",
          "Ignoring hallucinated or unvetted dependencies",
        ],
        cta: {
          title: "Want an AI-assisted engineering setup that stays safe?",
          description: "Talk to ZSpace Labs about [[/services/website-development|AI-assisted software development]], [[/services/mobile-app-development|mobile engineering]] and [[/services/ai-automation|AI workflow integration]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "AI changes how software is written, but not who is responsible for it. Pair generation with strong verification, clear policies and honest measurement. Next: [[/blogs/ai-coding-agents|AI coding agents]], [[/blogs/ai-code-review|AI code review]] and [[/blogs/ai-software-development-lifecycle|the AI SDLC]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 612 · AI CODING AGENTS
  {
    slug: "ai-coding-agents",
    title: "AI Coding Agents: How They Work and How Development Teams Use Them",
    seoTitle: "AI Coding Agents: How They Work, Permissions and Team Workflows",
    excerpt:
      "How AI coding agents work: repository exploration, planning, editing, running tests, iterating and opening pull requests, plus task design, permissions, sandboxing, review and where agents struggle.",
    category: "AI & Automation",
    banner: "codingagentflow",
    bannerAlt:
      "Coding agent flow: issue or task, explore repository, plan, edit code, run tests (highlighted), pull request; a branch shows failing tests leading to iteration within a budget.",
    date: "2026-10-02",
    readingTime: "9 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "startups"],
    relatedSlugs: ["ai-assisted-development-vs-agentic-coding", "ai-code-review", "ai-software-development"],
    faqs: [
      { q: "What is an AI coding agent?", a: "An AI system that takes a software task, explores the repository, plans changes, edits files, runs commands such as tests and builds, iterates on failures and produces a result such as a pull request, with tools and permissions defined by the environment it runs in." },
      { q: "How is a coding agent different from code completion?", a: "Completion suggests the next lines while a developer types. An agent works on a whole task across files, runs code and decides its next steps, usually with the developer supervising or reviewing the outcome." },
      { q: "Where do coding agents run?", a: "Interactively in an IDE or terminal on a developer's machine, or in the background in a cloud sandbox or CI environment, where they work on a branch and open a pull request." },
      { q: "What tasks are coding agents good at?", a: "Well-specified, verifiable tasks: bug fixes with reproduction steps, adding tests, small features with clear acceptance criteria, refactors, dependency upgrades and documentation updates." },
      { q: "What tasks do agents struggle with?", a: "Ambiguous requirements, large architectural changes, work needing knowledge outside the repository, subtle performance or concurrency issues and anything without tests to verify results." },
      { q: "Are coding agents safe to give repository access?", a: "With limits: branch-only write access, no production secrets, sandboxed execution, network restrictions where possible, and mandatory review and CI before merge." },
      { q: "How do agents understand a large codebase?", a: "By searching and reading files on demand, following imports, reading tests and any project instructions files the tool supports, rather than holding the whole codebase in context at once." },
      { q: "How should tasks be written for agents?", a: "Like a good ticket for a new teammate: the goal, relevant files or areas, acceptance criteria, how to test, and constraints such as what not to change." },
      { q: "Do coding agents replace developers?", a: "No. They shift work toward specifying tasks, reviewing changes and handling the complex problems agents cannot. Developers remain accountable for what ships." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An AI coding agent takes a software task and works through it like a junior engineer with fast hands: it explores the repository, plans a change, edits files, runs tests and builds, reads the failures, iterates and hands back a result, usually a pull request. Agents run interactively in an IDE or terminal, or in the background in a cloud sandbox or CI. They work best on well-specified, testable tasks, need least-privilege access and sandboxing, and every change should pass CI and human review before merge.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "The broader picture is in [[/blogs/ai-software-development|AI software development]]. How agents compare with completion and chat is in [[/blogs/ai-assisted-development-vs-agentic-coding|AI-assisted vs agentic coding]], and reviewing their output in [[/blogs/ai-code-review|AI code review]]. General agent design principles apply too; see [[/blogs/ai-agent-architecture|AI agent architecture]].",
        ],
      },
      {
        heading: "How a Coding Agent Works",
        body: [
          "Underneath, a coding agent is the same loop as any AI agent, specialised with developer tools: search the codebase, read files, edit files, run shell commands (tests, linters, builds), and sometimes browse documentation or call issue trackers. The model decides which tool to use next; the environment decides what each tool is allowed to touch.",
        ],
        diagram: {
          variant: "codingagentperms",
          alt: "Coding agent permissions in four columns: read (repository, issues, docs, CI logs), write (branch only, draft pull request, tests, comments), execute (tests, linters, builds, sandboxed) and never highlighted (push to main, production secrets, merge alone, deploy to production).",
          caption: "Agents work on branches; people review and merge.",
        },
        checklist: [
          "**Explore:** search for relevant files, read code, tests and project instructions",
          "**Plan:** outline the change, sometimes shown to the developer for approval",
          "**Edit:** modify files across the codebase",
          "**Verify:** run tests, type checks, linters and builds",
          "**Iterate:** read failures and fix them, within a step or time budget",
          "**Hand off:** summarize changes and open a pull request or present a diff",
        ],
      },
      {
        heading: "Interactive vs Background Agents",
        body: [],
        table: {
          headers: ["", "Interactive (IDE or terminal)", "Background (cloud or CI)"],
          rows: [
            ["Where it runs", "Developer's machine or dev container", "Hosted sandbox or CI runner"],
            ["Supervision", "Developer watches and steers", "Developer reviews the pull request"],
            ["Good for", "Exploratory work, debugging, larger changes with guidance", "Backlog issues, routine fixes, parallel tasks"],
            ["Risks", "Commands run with the developer's local access", "Less steering; vague tasks drift"],
            ["Examples", "Agent modes in IDE assistants, Claude Code, Codex CLI", "GitHub Copilot coding agent, Codex cloud tasks, Claude Code in GitHub Actions"],
          ],
        },
      },
      {
        heading: "Writing Tasks Agents Can Complete",
        body: [
          "Most failed agent runs start with a vague task. Write issues as you would for a capable new teammate who knows nothing about the history: what the problem is, where the relevant code is, what done looks like, how to verify it and what must not change. Many tools also read repository instruction files (for example conventions, commands and architecture notes), which improves results across all tasks.",
        ],
        code: {
          label: "Example: an agent-ready issue (illustrative)",
          text: "Title: Reject expired coupon codes at checkout\n\nProblem: Expired coupons are accepted; discount applied after expiry date.\nWhere: src/checkout/coupons.ts (validateCoupon), tests in tests/checkout/\nAcceptance criteria:\n  - validateCoupon returns { valid: false, reason: \"expired\" } when now > expires_at\n  - Timezone: compare in UTC\n  - Existing valid-coupon tests still pass\nVerify: npm test -- tests/checkout\nDo not change: coupon schema, public API response shape",
        },
        cta: {
          title: "Want coding agents working on your backlog safely?",
          description: "ZSpace Labs can set up agent workflows, repository instructions, CI guardrails and review practices on your codebase.",
        },
      },
      {
        heading: "Permissions and Sandboxing",
        body: [],
        checklist: [
          "Branch-only write access; branch protection on main with required reviews and checks",
          "Scoped, short-lived tokens; no production credentials or customer data in the environment",
          "Sandboxed execution for commands, with network restrictions where possible",
          "Approval prompts for risky commands in interactive tools",
          "Treat issue text, comments and repository files as untrusted input that may contain injected instructions",
          "Log agent actions and keep pull request history as the audit trail",
        ],
      },
      {
        heading: "Reviewing Agent Pull Requests",
        body: [
          "Review agent output as you would a new contributor's: check that it solved the stated problem, did not change unrelated code, added or updated tests that actually exercise the change, follows conventions and does not introduce dependencies without reason. Keep pull requests small; ask the agent to split large changes. AI review tools can help triage, but a person approves. See [[/blogs/ai-code-review|AI code review]].",
        ],
      },
      {
        heading: "Where Agents Struggle",
        body: [
          "Agents are weaker when requirements are ambiguous, when the right answer depends on knowledge outside the repository (business rules, customer commitments), when changes span many services, and in areas where tests are thin. They can also loop on failing tests or 'fix' tests to pass instead of fixing code. Step budgets, clear acceptance criteria and reviewers watching for test changes address most of this.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [],
        table: {
          headers: ["Advantages", "Limitations"],
          rows: [
            ["Handle well-scoped tasks end to end", "Need precise tasks and good tests"],
            ["Run in parallel on backlog items", "Review load shifts to developers"],
            ["Explore unfamiliar code quickly", "Can make confident, wrong changes"],
            ["Iterate against tests automatically", "Security exposure if permissions are loose"],
          ],
        },
      },
      {
        heading: "How to Introduce Coding Agents Step by Step",
        body: [],
        checklist: [
          "**1. Add repository instructions:** build and test commands, conventions, architecture notes",
          "**2. Make tests fast and reliable** so agents can verify work",
          "**3. Configure permissions:** branch-only, scoped tokens, sandbox",
          "**4. Create an agent-ready issue template**",
          "**5. Pilot on labelled small issues** and track merge rate and review time",
          "**6. Expand task types** as results justify",
          "**7. Review security and cost** monthly",
        ],
      },
      {
        heading: "Repository Instructions That Help Agents",
        body: [
          "Most agent tools read a project instruction file (names vary by tool) before starting work. A short, accurate file saves every agent run from rediscovering the basics and steers it toward your conventions.",
        ],
        code: {
          label: "Example: repository instructions for coding agents (illustrative)",
          text: "# Project notes for AI agents\n\n## Commands\n- Install: npm ci\n- Test all: npm test\n- Test one area: npm test -- tests/checkout\n- Lint and types: npm run lint && npx tsc --noEmit\n\n## Conventions\n- TypeScript strict; no `any` in new code\n- Money in integer minor units (pence), never floats\n- Errors: throw typed errors from src/errors.ts; never swallow\n\n## Boundaries\n- Do not edit generated files in src/generated/\n- Do not change database migrations that are already merged\n- Payment and auth code (src/payments, src/auth) needs a human-led change",
        },
      },
      {
        heading: "Cost, Throughput and Parallel Work",
        body: [
          "Background agents can work on several issues in parallel, which raises throughput but also review load and usage costs. Track cost per merged pull request and review time per agent change, cap concurrent agent tasks per team to what reviewers can handle and stop runs that exceed step or time budgets. Parallelism is only useful if the review pipeline keeps up; see [[/blogs/ai-code-review|AI code review]] for first-pass help.",
        ],
      },
      {
        heading: "Choosing a Coding Agent",
        body: [
          "The main options in 2026 include GitHub Copilot's coding agent, which works from assigned issues and opens pull requests; Claude Code, which runs in the terminal, IDEs and GitHub Actions; and OpenAI Codex, available as a cloud agent and a CLI. Several IDEs also include agent modes. Capabilities change quickly, so evaluate on your own repositories rather than on published comparisons.",
          "Practical selection questions: Where does the agent run, and can you control its network access and secrets? Does it work with your repository host and CI? Can administrators set policies, view audit logs and limit which repositories it can touch? How is usage priced, and how predictable is cost when agents run long tasks? What happens to your code and prompts under the provider's data terms? Teams often end up with more than one tool: an interactive agent for developers and a background agent for well-specified issues.",
          "Official documentation: [[https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent|GitHub Copilot coding agent]] and [[https://developers.openai.com/codex|OpenAI Codex]].",
        ],
      },
      {
        heading: "Handling Agent Failures",
        body: [
          "Agents fail in recognizable ways: they loop on a failing test, make a change that passes tests by weakening them, misread the task and solve a different problem, or produce a sprawling diff touching unrelated files. Step and time limits stop loops; review checks catch weakened tests; small, explicit tasks reduce misreading.",
          "When an agent's pull request is wrong, resist the urge to fix it by hand on the same branch. Close it, record why, and improve the task description or repository instructions so the next run succeeds. Over time these notes reveal which task types agents handle well in your codebase. Debugging techniques for agent-produced changes are in [[/blogs/ai-debugging|AI debugging]], and the wider lifecycle in [[/blogs/ai-software-development-lifecycle|AI in the SDLC]].",
        ],
      },
      {
        heading: "Agents in CI and Automation",
        body: [
          "Beyond working on issues, agents can run inside CI workflows: proposing fixes for failing builds, updating dependencies, triaging new issues or responding to review comments. Claude Code, for example, has a GitHub Actions integration, and other tools offer similar hooks. These workflows are powerful because they run unattended, which is also why they need the strictest permissions.",
          "Run CI agents with tokens limited to the repository and to creating branches and pull requests, never to merging or deploying. Restrict which events can trigger them, since comments from outside contributors can carry prompt injection. Log every run and review a sample regularly. Security principles for agents are in [[/blogs/ai-security-business-applications|AI security for business applications]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a team labels 30 small issues for a background agent. Twenty produce pull requests merged after light review, six need significant rework and four are abandoned because the issue lacked context. The team updates its issue template, adds a missing test command to the repository instructions and excludes issues touching billing logic, where reviewers found the agent's changes risky.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Vague one-line tasks",
          "Giving agents broad tokens or production access",
          "Merging without reading the diff",
          "Not noticing agents edited tests to make them pass",
          "Large pull requests that are hard to review",
        ],
        cta: {
          title: "Planning an agentic development workflow?",
          description: "Talk to ZSpace Labs about [[/services/website-development|AI-assisted development]] and [[/services/ai-automation|agent workflow design]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Coding agents are productive when tasks are clear, tests are strong, permissions are narrow and people review every change. Related: [[/blogs/ai-assisted-development-vs-agentic-coding|assisted vs agentic coding]], [[/blogs/ai-code-review|AI code review]] and [[/blogs/ai-test-generation|AI test generation]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 613 · AI-ASSISTED VS AGENTIC CODING
  {
    slug: "ai-assisted-development-vs-agentic-coding",
    title: "AI-Assisted Software Development vs Agentic Coding: What's the Difference?",
    seoTitle: "AI-Assisted Development vs Agentic Coding: Key Differences",
    excerpt:
      "How AI-assisted development (completion and chat) differs from agentic coding (agents that plan, edit, run and iterate): autonomy, supervision, task fit, risks and how teams combine them.",
    category: "AI & Automation",
    banner: "assistvsagentic",
    bannerAlt:
      "Comparison of code completion, chat assistance and agentic coding (highlighted) by unit of work, who drives, whether code is run, when review happens and best use.",
    date: "2026-10-02",
    readingTime: "8 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "startups"],
    relatedSlugs: ["ai-coding-agents", "ai-software-development", "ai-code-review"],
    faqs: [
      { q: "What is AI-assisted development?", a: "Developers write code with AI help: inline completion as they type and chat that explains, drafts or edits code on request. The developer drives every step." },
      { q: "What is agentic coding?", a: "Delegating a task to an AI agent that explores the codebase, plans, edits multiple files, runs tests and iterates, returning a result for review. The agent drives the steps within limits." },
      { q: "Which is better?", a: "Neither in general. Assistance suits work where the developer is thinking through the problem; agentic coding suits well-specified tasks that can be verified by tests. Most teams use both." },
      { q: "Is agentic coding riskier?", a: "It carries more risk per task because the agent makes more decisions and can run commands. Sandboxing, scoped permissions, CI and review keep the risk manageable." },
      { q: "What is vibe coding?", a: "An informal term for building software by prompting AI and accepting its output with little review. It can be fine for throwaway prototypes and is unsuitable for production code without proper review and testing." },
      { q: "Do I need different tools for each?", a: "Often the same products offer both, such as IDE assistants with an agent mode. Background agents that open pull requests are usually separate integrations with your repository host." },
      { q: "How does review differ?", a: "With assistance, review happens as the developer accepts suggestions. With agents, review happens on the finished change, so pull request review and tests matter more." },
      { q: "Which should a team adopt first?", a: "Usually assistance first, because it is lower risk and builds familiarity, then agentic coding for selected task types once tests, CI and review practices are ready." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI-assisted development keeps the developer in the driver's seat: completion suggests code as you type and chat explains or drafts changes on request, with review happening as you accept each suggestion. Agentic coding delegates a whole task: an agent explores the repository, plans, edits across files, runs tests and iterates, then hands back a change for review. Assistance fits thinking-heavy work; agents fit well-specified, testable tasks. Most teams use both, with stronger guardrails and review for agents.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Agents are explained in depth in [[/blogs/ai-coding-agents|AI coding agents]], and the overall approach in [[/blogs/ai-software-development|AI software development]]. Reviewing agent output is covered in [[/blogs/ai-code-review|AI code review]].",
        ],
      },
      {
        heading: "Three Modes Compared",
        body: [],
        table: {
          headers: ["Dimension", "Completion", "Chat assistance", "Agentic coding"],
          rows: [
            ["Unit of work", "Line or block", "Snippet, function or file", "Task across files"],
            ["Who decides next step", "Developer", "Developer", "Agent, within limits"],
            ["Runs code", "No", "Sometimes, on request", "Yes: tests, builds, commands"],
            ["Context", "Current file and nearby code", "Selected files and conversation", "Whole repository, explored on demand"],
            ["Review moment", "Each accepted suggestion", "Before applying changes", "Diff or pull request at the end"],
            ["Main risk", "Accepting subtle errors", "Pasting unverified code", "Larger wrong or unsafe changes"],
          ],
        },
      },
      {
        heading: "The Autonomy Ladder",
        body: [
          "It helps to see these as steps on a ladder rather than separate products. Each step up delegates more decisions and moves review later in the process; the final merge decision stays with people at every step.",
        ],
        diagram: {
          variant: "codingautonomy",
          alt: "Autonomy ladder: completion, chat edits, agent in IDE, background agent, pull request review (highlighted), human merges; the note says autonomy grows but human review of the merge does not go away.",
          caption: "More autonomy means review moves later, so it must get more thorough.",
        },
      },
      {
        heading: "When Each Mode Fits",
        body: [],
        table: {
          headers: ["Task", "Best mode", "Why"],
          rows: [
            ["Writing new logic you are still designing", "Completion and chat", "You are thinking; AI speeds typing and lookups"],
            ["Understanding unfamiliar code", "Chat", "Explanations on demand"],
            ["Bug fix with clear reproduction and tests", "Agent", "Verifiable end to end"],
            ["Adding tests to existing code", "Agent or chat", "Repetitive, checkable"],
            ["Large refactor or migration", "Agent, supervised, in slices", "Many files, needs steering"],
            ["Security-sensitive changes", "Assistance with senior review", "Judgement-heavy"],
            ["Architecture decisions", "Chat as a sounding board", "Humans decide"],
          ],
        },
        cta: {
          title: "Deciding how far to go with AI in your team?",
          description: "ZSpace Labs can help define which tasks to assist, which to delegate to agents, and the guardrails each needs.",
        },
      },
      {
        heading: "Supervision and Review Differences",
        body: [
          "With assistance, review is continuous and small; the risk is fatigue and accepting plausible but wrong suggestions. With agents, review is concentrated on a finished change; the risk is large diffs that are hard to evaluate. Keep agent changes small, require tests that exercise the change, check for edits to tests or configuration that weaken checks, and require CI to pass before review.",
        ],
      },
      {
        heading: "Security Differences",
        body: [
          "Completion and chat mostly risk insecure code being accepted. Agents add operational risk: they run commands, install packages and read untrusted content such as issue text. Use sandboxes, scoped tokens, branch-only access and network limits for agents, and keep secret scanning and dependency checks in CI for everything. See [[/blogs/ai-agent-guardrails|AI agent guardrails]].",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [],
        table: {
          headers: ["", "Advantages", "Limitations"],
          rows: [
            ["AI-assisted", "Low risk, keeps developer in flow, easy to adopt", "Gains limited to what the developer drives"],
            ["Agentic", "Completes tasks end to end, parallel work", "Needs clear tasks, strong tests and careful review"],
          ],
        },
      },
      {
        heading: "How to Combine Them Step by Step",
        body: [],
        checklist: [
          "**1. Roll out assistance** with a usage policy and data settings",
          "**2. Improve tests and CI** to support delegation",
          "**3. Add repository instructions** for agents",
          "**4. Pilot agents** on labelled, well-specified issues",
          "**5. Define review rules** for agent pull requests",
          "**6. Measure delivery metrics** and adjust which tasks go to agents",
        ],
      },
      {
        heading: "Team Policies for Each Mode",
        body: [],
        table: {
          headers: ["Policy area", "Assisted (completion, chat)", "Agentic"],
          rows: [
            ["Approved tools", "IDE assistants with enterprise settings", "Agents with branch-only access and sandboxing"],
            ["Data rules", "No secrets or customer data in prompts", "Same, plus no production credentials in environments"],
            ["Review", "Normal pull request review", "PR review plus check of test and config changes"],
            ["Task types", "Any", "Labelled, well-specified issues"],
            ["Sensitive areas", "Senior review", "Excluded or human-led"],
            ["Metrics", "Delivery metrics", "Merge rate, rework, review time, cost per merged PR"],
          ],
        },
      },
      {
        heading: "Measuring the Difference",
        body: [
          "To decide how far to move along the ladder, compare task types rather than tools. For a sample of similar tasks, measure time to merge, review rounds, rework within a month and escaped defects with assisted versus agentic approaches. Expect agents to win on routine, well-tested work and lose on ambiguous work, and shape your task routing accordingly. The lifecycle view is in [[/blogs/ai-software-development-lifecycle|the AI SDLC]].",
          "The [[https://dora.dev/guides/dora-metrics-four-keys/|DORA metrics]] (lead time, deployment frequency, change failure rate, recovery time) provide a consistent baseline for these comparisons.",
        ],
      },
      {
        heading: "Skills and Learning",
        body: [
          "A common concern is that junior developers who rely on AI do not learn fundamentals. The risk is real when AI output is accepted without understanding. It is lower when juniors use assistants to explain unfamiliar code, generate examples and check their own reasoning, while still writing and debugging significant code themselves.",
          "Agentic coding changes the skill mix further. Delegating a task to an agent requires the ability to specify it precisely, predict edge cases and review a complete change critically, which are senior skills. Teams that introduce agents should pair them with explicit mentoring: juniors review agent pull requests alongside a senior, discuss what is wrong and why, and take on human-led tasks that build depth.",
        ],
      },
      {
        heading: "Cost Models Compared",
        body: [
          "Assistants are usually priced per seat, so cost scales with headcount and is predictable. Agents often add usage-based charges because a single task can involve many model calls, tool runs and CI minutes. A long-running agent task can cost more than a seat for a month, and failed runs still cost money.",
          "Compare cost per merged change rather than per seat or per run. If an agent completes routine tasks that would take a developer an hour, at a fraction of that cost including review time, it is worth it for those tasks. If merge rates are low and review is heavy, assisted mode is cheaper. Track both before expanding agent use; see [[/blogs/ai-coding-agents|AI coding agents]] for throughput controls.",
        ],
      },
      {
        heading: "A Practical Decision Guide",
        body: [],
        table: {
          headers: ["If the task is...", "Prefer", "Why"],
          rows: [
            ["Small, in the file you are editing", "Completion", "Fastest, lowest overhead"],
            ["Unfamiliar code or an error to understand", "Chat", "Explanation before action"],
            ["Well-specified, tested, low-risk change", "Background agent", "Parallel work, reviewed via PR"],
            ["Multi-file change you want to steer", "Interactive agent", "Speed with oversight at each step"],
            ["Ambiguous, high-risk or design-heavy", "Human-led, AI-assisted", "Judgement matters most"],
          ],
        },
      },
      {
        heading: "Signals You Are Over-Delegating",
        body: [
          "Watch for rising review times, pull requests closed without merging, defects traced to agent changes, developers unable to explain code they merged and tests modified to pass. Any of these suggests tasks are being delegated beyond what specifications and verification support. Move those task types back toward assisted mode, improve task descriptions and tests, then try again. The review side is covered in [[/blogs/ai-code-review|AI code review]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a mobile team uses completion daily and starts delegating test-writing and small UI bug fixes to an agent. Design changes and payment code stay in assisted mode with senior review. After a quarter, the team sees agent work concentrated in maintenance tasks, freeing time for feature design.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Treating agent output with the same light review as single suggestions",
          "Delegating ambiguous design work to agents",
          "Giving agents the developer's full local credentials",
          "Shipping 'vibe-coded' prototypes to production",
        ],
        cta: {
          title: "Want a practical AI coding setup for your team?",
          description: "Talk to ZSpace Labs about [[/services/website-development|AI-assisted development practices]] and [[/services/ai-automation|agentic workflows]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Assistance and agents are points on one ladder. Climb it task by task, strengthen review as autonomy grows and keep people responsible for what merges. Related: [[/blogs/ai-coding-agents|AI coding agents]] and [[/blogs/ai-code-review|AI code review]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 614 · AI CODE REVIEW
  {
    slug: "ai-code-review",
    title: "AI Code Review: How to Automate Code Quality Checks With AI",
    seoTitle: "AI Code Review: Pull Request Checks, Security and Human Approval",
    excerpt:
      "How AI code review works on pull requests: what it catches, how it complements linters and security scanners, context, severity, false positives, configuration, metrics and why humans still approve.",
    category: "AI & Automation",
    banner: "aireviewflow",
    bannerAlt:
      "AI code review flow: pull request opened, diff and context, AI review, comments by severity, human reviewer (highlighted), merge or fix.",
    date: "2026-10-02",
    readingTime: "8 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "fintech"],
    relatedSlugs: ["ai-coding-agents", "ai-software-testing", "ai-security-business-applications"],
    faqs: [
      { q: "What is AI code review?", a: "Using AI to read pull request changes and comment on likely bugs, security issues, missing tests, readability and convention problems, as a first pass before or alongside human reviewers." },
      { q: "Can AI replace human code reviewers?", a: "No. AI is useful for catching certain issues quickly and consistently, but it misses context about requirements and architecture and produces false positives. A person should approve every merge." },
      { q: "How is AI review different from linters and static analysis?", a: "Linters and static analysers apply deterministic rules and are precise for what they check. AI review can reason about intent and logic across a change but is probabilistic. Use both." },
      { q: "What does AI code review catch well?", a: "Off-by-one and null-handling bugs, missing error handling, inconsistent naming, missing tests, obvious security issues such as unsanitized input or hard-coded secrets, and changes that contradict nearby code." },
      { q: "How do you reduce false positives?", a: "Give the reviewer project conventions and context, tune severity thresholds, suppress categories that are noisy, ask developers to mark unhelpful comments and review those patterns regularly." },
      { q: "Is it safe to send code to AI review tools?", a: "Check the provider's data handling, retention and training terms, and use enterprise settings or self-hosted options for sensitive code." },
      { q: "Should AI review block merges?", a: "Usually not on its own. Deterministic checks (tests, linters, security scanners) can block; AI comments are advisory, with high-severity findings requiring a human response." },
      { q: "How do you measure AI code review?", a: "Track comment acceptance rate, false-positive rate, issues found before merge, escaped defects and review time, per repository and category." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI code review reads each pull request with its surrounding context and comments on likely bugs, security issues, missing tests and convention problems, ideally grouped by severity. It complements deterministic tools (linters, type checkers, static analysis, secret and dependency scanning) rather than replacing them, and it complements human reviewers rather than replacing them. Configure it with your conventions, keep its comments advisory, track acceptance and false-positive rates, and require a person to approve every merge.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Review becomes more important as [[/blogs/ai-coding-agents|coding agents]] produce more changes. Testing is covered in [[/blogs/ai-software-testing|AI software testing]], security more broadly in [[/blogs/ai-security-business-applications|AI security]], and the overall approach in [[/blogs/ai-software-development|AI software development]].",
        ],
      },
      {
        heading: "What AI Review Checks",
        body: [],
        diagram: {
          variant: "reviewchecks",
          alt: "What AI code review checks in four columns: correctness (logic errors, edge cases, null handling, tests present), security highlighted (injection, secrets, authorization checks, dependencies), maintainability (naming, duplication, complexity, conventions) and process (severity labels, human approval, false-positive log, metrics).",
          caption: "Security comments deserve the most attention, and the most validation.",
        },
      },
      {
        heading: "AI Review vs Deterministic Tools",
        body: [],
        table: {
          headers: ["Tool", "Strength", "Limitation"],
          rows: [
            ["Linters and formatters", "Precise, fast, consistent", "Only rules they know"],
            ["Type checkers", "Catch type errors reliably", "Not logic errors"],
            ["Static analysis (SAST)", "Known vulnerability patterns", "False positives, limited intent"],
            ["Secret and dependency scanning", "Leaked keys, vulnerable packages", "Only their specific risks"],
            ["AI review", "Reasons about logic and intent across the change", "Probabilistic, can be wrong or noisy"],
            ["Human review", "Requirements, architecture, judgement", "Time and attention"],
          ],
        },
      },
      {
        heading: "Context Makes or Breaks AI Review",
        body: [
          "A reviewer that only sees the diff misses what the diff breaks elsewhere. Better tools pull in related files, the pull request description, linked issues and repository conventions. Write a short review guide (error handling patterns, logging rules, security requirements, test expectations) the tool can use, and make pull request descriptions state intent so the reviewer can check the change against it.",
        ],
        cta: {
          title: "More pull requests than reviewers can handle?",
          description: "ZSpace Labs can set up AI review alongside your existing checks, tuned to your conventions and measured for usefulness.",
        },
      },
      {
        heading: "Managing False Positives and Noise",
        body: [],
        checklist: [
          "Start with high-severity categories only: likely bugs and security",
          "Group comments by severity; collapse low-severity style notes",
          "Let developers mark comments as unhelpful and review those weekly",
          "Suppress noisy categories per repository",
          "Prefer one summary comment plus inline comments only for real issues",
          "Never let AI comments block merges on their own",
        ],
      },
      {
        heading: "Security Review With AI",
        body: [
          "AI can spot obvious issues such as unsanitized input reaching queries, missing authorization checks or secrets in code, and explain them in context. It can also miss issues and invent ones that do not exist. Keep dedicated security tooling (static analysis, secret scanning, dependency checks) as the baseline, treat AI security comments as leads to verify, and require senior review for changes to authentication, payments and cryptography.",
        ],
      },
      {
        heading: "Tools and Setup",
        body: [
          "Options include AI review built into repository platforms (for example Copilot code review on GitHub), AI review apps and bots, and running a general coding agent in CI with a review prompt (for example Claude Code through GitHub Actions). Check data handling terms, where code is processed, and whether the tool can be limited to specific repositories. Configure it to post as a reviewer that cannot approve.",
          "Examples include [[https://docs.github.com/en/copilot/concepts/agents/code-review|GitHub Copilot code review]]; the [[https://owasp.org/www-project-code-review-guide/|OWASP Code Review Guide]] is a useful source for security review priorities.",
        ],
      },
      {
        heading: "Measuring Usefulness",
        body: [],
        table: {
          headers: ["Metric", "What it shows"],
          rows: [
            ["Comment acceptance rate", "Share of comments leading to a change"],
            ["False-positive rate", "Noise that wastes reviewer time"],
            ["Issues caught before merge", "Value added"],
            ["Escaped defects", "Whether quality improves after merge"],
            ["Review cycle time", "Whether review gets faster or slower"],
          ],
        },
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "AI review is fast, consistent and tireless, catches some issues humans skim past and gives authors feedback before a human looks. It is limited by context, produces false positives, can miss important problems and cannot judge whether a change does what the business needs. Used as a first pass with measured usefulness, it makes human review more focused.",
        ],
      },
      {
        heading: "How to Roll Out AI Code Review Step by Step",
        body: [],
        checklist: [
          "**1. Confirm deterministic checks** run on every pull request",
          "**2. Choose a tool** and confirm data handling terms",
          "**3. Write a review guide** with conventions and security rules",
          "**4. Enable on a few repositories** with high-severity categories only",
          "**5. Collect feedback** on comment usefulness for a month",
          "**6. Tune or expand** based on acceptance and false-positive rates",
        ],
      },
      {
        heading: "Writing a Review Guide",
        body: [
          "AI reviewers are more useful when they know what your team cares about. Keep a short guide in the repository and point the review tool at it.",
        ],
        code: {
          label: "Example: AI review guide (illustrative)",
          text: "# Review priorities\n1. Correctness: edge cases, null/undefined, off-by-one, time zones (store UTC)\n2. Security: authorization on every endpoint, parameterized queries, no secrets\n3. Tests: new behaviour has tests that would fail without the change\n4. Errors: use AppError subclasses; log with request_id; never expose stack traces\n\n# Ignore\n- Formatting (handled by the formatter)\n- Import order (handled by the linter)\n\n# Escalate to a human reviewer\n- Changes under src/auth, src/payments, migrations/",
        },
      },
      {
        heading: "Reviewing AI-Generated Pull Requests",
        body: [],
        checklist: [
          "Does the change solve the stated problem and only that problem?",
          "Were tests added that exercise the change, and were existing tests weakened?",
          "Any new dependencies, and are they real, maintained and licensed appropriately?",
          "Any configuration, CI or permission changes hidden in the diff?",
          "Does the code follow existing patterns rather than inventing new ones?",
          "Is the change small enough to understand? If not, ask for it to be split",
        ],
      },
      {
        heading: "Where AI Review Fits in the Pipeline",
        body: [
          "AI review works best as a layer between automated checks and human review. Linters, formatters, type checkers and security scanners run first, because they are deterministic and fast. AI review runs next and comments on logic, missing tests, unclear naming and risky patterns that rules cannot express. Human reviewers then focus on design, intent and anything the AI flagged as uncertain.",
          "Keep AI comments advisory rather than blocking at first. Blocking merges on probabilistic feedback frustrates developers when comments are wrong. Once you have data on which categories of comment are reliably useful, you can make specific checks mandatory, for example missing authorization on new endpoints, while leaving style and design suggestions optional.",
        ],
      },
      {
        heading: "Developer Experience",
        body: [
          "Review tools succeed or fail on noise. A tool that posts twenty comments per pull request, most of them trivial, will be ignored within weeks. Configure it to comment only above a confidence threshold, group related comments, avoid repeating what linters already say and stay silent on clean changes.",
          "Make it easy to respond: reacting to mark a comment unhelpful, dismissing with a reason or asking a follow-up question in the thread. Those signals tell you which rules to tune. Share examples of valuable catches in team channels, which builds trust faster than metrics alone. AI review also helps with agent-generated pull requests from [[/blogs/ai-coding-agents|coding agents]], but those still need a human approver.",
        ],
      },
      {
        heading: "AI Review for Infrastructure and Configuration",
        body: [
          "Infrastructure as code, CI workflows and configuration files are often reviewed less carefully than application code, yet errors there can expose data or break production. AI review can flag public storage buckets, overly broad permissions, missing encryption settings, secrets in configuration and risky CI triggers.",
          "Combine it with policy-as-code tools that enforce rules deterministically, and use AI to explain findings and suggest fixes. Changes to CI workflows deserve particular attention because they control what automated agents and pipelines can do. Agent-specific risks are in [[/blogs/ai-coding-agents|AI coding agents]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a fintech team enables AI review on two services. In the first month, developers accept roughly half of its bug and security comments but ignore most style comments. The team disables style notes (the linter covers them), adds its error-handling and logging conventions to the review guide and keeps senior human review mandatory for payment code.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Treating AI approval as sufficient to merge",
          "Dropping linters or security scanners",
          "Enabling every comment category and drowning developers",
          "No measurement of usefulness",
          "Sending sensitive code to tools without checking data terms",
        ],
        cta: {
          title: "Want review that keeps up with AI-generated code?",
          description: "Talk to ZSpace Labs about [[/services/website-development|engineering quality practices]] and [[/services/ai-automation|AI tooling in CI]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "AI code review is a useful first pass, not a gatekeeper. Combine it with deterministic checks, tune it with context, measure it and keep humans approving. Related: [[/blogs/ai-coding-agents|AI coding agents]], [[/blogs/ai-software-testing|AI software testing]] and [[/blogs/ai-security-business-applications|AI security]].",
        ],
      },
    ],
  },
];
