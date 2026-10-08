import type { BlogPost } from "./blog-data";

/**
 * Agentic software development cluster, part three (published 2026-10-08):
 * agentic QA and AI-generated code technical debt. Sources checked
 * 2026-10-08: Playwright test agents documentation (planner, generator,
 * healer); Sculley et al., "Hidden Technical Debt in Machine Learning
 * Systems" (NeurIPS); DORA research on AI-assisted delivery; GitClear's
 * published analyses of code duplication and refactoring trends (cited
 * qualitatively; the report page blocks automated access).
 */

export const agenticDevPosts3: BlogPost[] = [
  // ---------------------------------------- AGENTIC QA
  {
    slug: "agentic-qa",
    title: "AI Agentic QA: How AI Agents Can Test Software Beyond Generating Test Cases",
    seoTitle: "Agentic QA: How AI Agents Test Software Beyond Test Cases",
    excerpt:
      "How QA agents plan, execute, inspect, diagnose and report on software tests, how that differs from AI test generation, and how to stop agents gaming tests.",
    category: "Web Development",
    banner: "agentverifyflow",
    sceneKind: "agent",
    date: "2026-10-08",
    readingTime: "6 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce"],
    relatedSlugs: ["ai-software-testing", "ai-test-generation", "computer-use-agents"],
    faqs: [
      { q: "What is agentic QA?", a: "Agentic QA uses AI agents that carry out testing work in a loop: they plan what to test, run tests or drive the application in a browser or through APIs, inspect results, diagnose failures, retry or narrow down the cause and report findings, rather than only writing test code." },
      { q: "How is agentic QA different from AI test generation?", a: "Test generation produces test code for people or CI to run. Agentic QA also executes tests and explores the application, interprets outcomes, reproduces bugs, analyses failures and maintains tests, with a person reviewing what it proposes." },
      { q: "Can AI agents replace QA engineers?", a: "No. Agents can take on repetitive execution, reproduction and triage, but deciding what quality means, designing test strategy, judging risk and exploratory testing of new experiences still need people. QA roles shift towards strategy and oversight." },
      { q: "What is the risk of letting agents fix failing tests?", a: "An agent asked to make tests pass may weaken assertions, skip tests or change expected values so the failure disappears while the bug remains. Agents should not be allowed to modify tests and code in the same change without explicit review of the test changes." },
      { q: "What tools support agentic QA?", a: "Examples include Playwright's test agents (planner, generator and healer), browser automation exposed to agents through MCP servers, coding agents that run test suites in sandboxes and computer-use agents for applications without good automation hooks." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "**Agentic QA** is software testing carried out by AI agents that work in a loop: **observe** the application and the change, **plan** what to test, **execute** tests or drive the app through a browser or API, **inspect** the results, **diagnose** failures, **retry** or narrow down the cause, and **report** findings with evidence.",
          "It goes beyond [[/blogs/ai-test-generation|AI test generation]], which writes test code. Agentic QA also runs, explores, reproduces, triages and maintains. The main risk is an agent that makes failures disappear by changing tests rather than finding bugs, so agents should propose test changes, not approve them.",
        ],
      },
      {
        heading: "Agentic QA vs AI test generation",
        body: [
          "The two are complementary but solve different problems. Test generation increases coverage. Agentic QA increases the amount of testing work that gets done: running, investigating, reproducing and keeping suites healthy.",
        ],
        table: {
          headers: ["", "AI test generation", "Agentic QA"],
          rows: [
            ["Output", "Test code", "Test runs, findings, reproductions, diagnoses, proposed fixes"],
            ["Runs the app?", "No (CI runs the tests later)", "Yes, through test runners, browsers and APIs"],
            ["Handles failures", "No", "Inspects, diagnoses, retries, reports"],
            ["Explores", "No", "Can explore flows not covered by tests"],
            ["Main risk", "Weak tests that assert little", "Agent 'fixes' tests to hide real bugs"],
            ["Human role", "Review generated tests", "Set strategy, review findings and any test changes"],
          ],
        },
      },
      {
        heading: "The agent loop",
        body: [
          "Every agentic QA workflow follows a version of the same loop. The difference between a useful agent and a noisy one is mostly in the inspect and diagnose steps.",
        ],
        code: {
          label: "Agentic QA loop (diagram)",
          text: `   ┌──────────▶ OBSERVE ─────────────┐
   │   change diff, spec, app state   │
   │                                  ▼
 REPORT                             PLAN
 findings, evidence,           what to test, which
 repro steps, proposed         layer (unit/API/UI),
 fixes (for review)            data and environment
   ▲                                  │
   │                                  ▼
 RETRY ◀──── DIAGNOSE ◀──── INSPECT ◀── EXECUTE
 narrow cause,  bug in code?   logs, screenshots,  run suites,
 rerun once,    test? data?    traces, network,    drive browser,
 vary inputs    environment?   DOM, responses      call APIs`,
        },
      },
      {
        heading: "Test planning",
        body: [
          "Given a change (a diff, a spec or a ticket), a QA agent can propose what to test: affected flows, edge cases, regression areas and which layer suits each check. Playwright's test agents illustrate the pattern: a **planner** explores the app and writes a Markdown test plan, a **generator** turns the plan into Playwright tests and a **healer** runs failing tests and attempts repairs ([[https://playwright.dev/docs/test-agents|Playwright test agents]]). The plan is the right point for human review; it is short and shows whether the agent understood the feature.",
        ],
      },
      {
        heading: "Test execution and browser interaction",
        body: [
          "Execution ranges from running existing suites in a sandbox to driving a real browser. Browser automation can be exposed to agents as tools, for example through MCP servers that let an agent navigate, click, fill forms and read the page's accessibility tree. Agents use these to walk through user journeys, check visual and functional behaviour and capture evidence (screenshots, console logs, network requests). For applications without automation hooks, [[/blogs/computer-use-agents|computer-use agents]] operate the interface visually, at higher cost and lower speed.",
        ],
      },
      {
        heading: "API testing and regression testing",
        body: [
          "API testing suits agents well: contracts are explicit, responses are structured and failures are easy to inspect. An agent can read an OpenAPI description, call endpoints with valid and invalid inputs, check status codes, schemas and side effects, and flag differences from the documented behaviour. For regression testing, agents select and run the tests relevant to a change, compare results with the previous run and investigate new failures before a person looks at them.",
        ],
      },
      {
        heading: "Bug reproduction and failure analysis",
        body: [
          "Two of the most time-consuming QA tasks are reproducing reported bugs and working out why a test failed. Agents can take a bug report, attempt to reproduce it in a test environment, reduce it to minimal steps and write a failing test that captures it. For failing tests, they can classify the likely cause (product bug, test bug, test data, environment, flakiness), correlate with recent changes and gather the evidence a developer needs. Our guide to [[/blogs/ai-debugging|AI debugging]] covers the diagnosis side.",
        ],
        table: {
          headers: ["Failure class", "Signals the agent looks for", "Appropriate action"],
          rows: [
            ["Product bug", "Behaviour contradicts spec; reproducible", "Report with repro and failing test; do not touch the test"],
            ["Test bug", "Selector or assertion outdated after an intended change", "Propose a test change, linked to the intended change"],
            ["Test data", "Missing or stale fixtures; collisions", "Fix data setup; report"],
            ["Environment", "Timeouts, service down, config", "Retry once; escalate to platform owner"],
            ["Flaky", "Passes and fails on identical runs", "Quarantine with a ticket; never silently retry forever"],
          ],
        },
      },
      {
        heading: "Test maintenance",
        body: [
          "UI changes break selectors and flows. Agents can update tests after intended changes, consolidate duplicates and remove dead tests. This is valuable and risky in equal measure, because maintenance and cheating look similar in a diff. The rule: a test may change only when the expected behaviour changed intentionally, and the reviewer must be able to see which change made it necessary.",
        ],
      },
      {
        heading: "The risk: agents that make failures disappear",
        body: [
          "An agent given the goal 'make the tests pass' will find the shortest path. Sometimes that path is fixing the bug. Sometimes it is loosening an assertion, changing an expected value to match the wrong output, adding a skip, increasing a timeout until a race hides, or mocking away the component that fails. The suite goes green and the defect ships.",
        ],
        checklist: [
          "Separate roles: the agent that writes code should not approve its own test changes",
          "Flag any pull request that modifies or deletes existing assertions, and require explicit review",
          "Forbid skip, only and expected-value rewrites without a linked spec change",
          "Ask agents to classify failures before fixing them, and report product bugs instead of patching tests",
          "Keep a protected set of acceptance tests that agents cannot modify",
          "Use mutation testing or assertion checks to catch tests that no longer test anything",
          "Review the healer's output: a 'healed' test is a proposal, not a fix",
        ],
        callout: {
          type: "takeaway",
          text: "Green tests are evidence only if the tests themselves were not changed to produce them. Make test modifications the most visible part of every agent pull request.",
        },
      },
      {
        heading: "How to introduce agentic QA",
        body: [
          "Start where the loop is cheap and safe: failure triage on CI runs, bug reproduction from tickets, and API exploration in a test environment. Then add test planning for new features with human review of plans. Leave autonomous test maintenance until you have the guardrails above. Run agents against test environments with synthetic data, not production, and keep their credentials scoped. See [[/blogs/ai-software-testing|AI software testing]] for where AI fits across the wider testing pipeline.",
        ],
      },
      {
        heading: "Measuring whether it helps",
        body: [
          "Measure outcomes, not activity: escaped defects, time from failure to diagnosis, time to reproduce reported bugs, flaky test rate, share of agent findings confirmed as real, and how often agent-proposed test changes are rejected in review. A rising rejection rate on test changes is an early warning that the agent is gaming the suite.",
        ],
        cta: {
          title: "Strengthening QA for a web or mobile product?",
          description: "ZSpace Labs builds products with automated testing, CI and agent-assisted QA workflows designed in. See [[/services/website-development|website development]] and [[/services/mobile-app-development|mobile app development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Agentic QA moves AI from writing tests to doing testing work: planning, executing, inspecting, diagnosing, retrying and reporting. It is most useful for triage, reproduction, API exploration and keeping suites healthy. Its biggest risk is quietly weakening the tests it runs, so keep test changes visible, separate roles and treat every 'healed' test as a proposal for a person to approve.",
        ],
      },
    ],
  },

  // ---------------------------------------- AI-GENERATED CODE TECHNICAL DEBT
  {
    slug: "ai-generated-code-technical-debt",
    title: "AI-Generated Code and Technical Debt: How to Keep Agent-Written Codebases Maintainable",
    seoTitle: "AI-Generated Code Technical Debt: Keeping Code Maintainable",
    excerpt:
      "How AI coding tools create technical debt through duplication, inconsistent patterns and code nobody understands, and the practices that keep code maintainable.",
    category: "Web Development",
    banner: "aidebtmap",
    sceneKind: "code",
    date: "2026-10-08",
    readingTime: "6 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["saas-technology", "startups"],
    relatedSlugs: ["ai-automation-technical-debt", "vibe-coding-vs-production-software", "ai-coding-agent-context"],
    faqs: [
      { q: "Does AI-generated code create technical debt?", a: "It can. AI tools make adding code cheap, so teams accumulate duplication, inconsistent patterns, unnecessary dependencies and code no one on the team fully understands, unless review, conventions and refactoring keep pace." },
      { q: "What is comprehension debt?", a: "It is the gap between the code a team owns and the code it understands. When agents write large amounts of code that is merged after a quick review, the team can lose the ability to change it confidently later." },
      { q: "Is AI-generated code lower quality than human code?", a: "Not inherently. Quality depends on the task, the context the agent received, tests and review. The bigger difference is volume: more code is produced faster, so weak review or missing conventions compound more quickly." },
      { q: "How is this different from AI automation technical debt?", a: "AI automation debt is about prompts, workflows, integrations and evaluation in AI-powered business processes. AI-generated code debt is about the maintainability of software source code written with AI coding tools." },
      { q: "How do we reduce technical debt from coding agents?", a: "Give agents good context and reference implementations, keep changes small, review for design as well as correctness, enforce conventions with linters, track duplication and churn, schedule refactoring, and make sure someone understands every important module." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI coding tools make writing code cheap. That is their value and the source of a new kind of technical debt. Without guardrails, agent-assisted codebases accumulate **duplicated logic**, **inconsistent patterns**, **unnecessary dependencies**, **over-engineered or dead code** and, most importantly, **code nobody on the team fully understands**.",
          "The fix is not to avoid AI but to keep maintainability work in step with output: give agents reference patterns and conventions, keep changes small, review for design as well as correctness, enforce rules mechanically, measure duplication and churn, refactor deliberately and make sure every important module has a person who understands it.",
        ],
      },
      {
        heading: "This is about code, not AI workflows",
        body: [
          "Two kinds of 'AI technical debt' are easily confused. [[/blogs/ai-automation-technical-debt|AI automation technical debt]] is the maintenance burden of AI-powered business workflows: prompts, integrations, evaluation and model dependencies. This article is about something different: the maintainability of ordinary software source code written with the help of coding assistants and agents. Machine learning systems have long been known to carry their own hidden debt ([[https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems|Sculley et al., NeurIPS]]); AI-written application code adds debt of a more familiar shape, at a faster pace.",
        ],
      },
      {
        heading: "How AI-generated code creates debt",
        body: [],
        table: {
          headers: ["Debt pattern", "How it happens", "What it costs later"],
          rows: [
            ["Duplication", "Agent writes a new helper instead of finding the existing one", "Bugs fixed in one copy, not the others"],
            ["Pattern drift", "Each task solved in a slightly different style", "Harder onboarding; inconsistent behaviour"],
            ["Dependency sprawl", "Agent adds a package for something trivial", "Security updates, licence review, bundle size"],
            ["Over-engineering", "Speculative abstractions and options nobody asked for", "More code to read, test and change"],
            ["Dead and defensive code", "Unused branches, redundant checks, leftover experiments", "Noise that hides real logic"],
            ["Shallow tests", "Tests that mirror the implementation rather than the requirement", "Refactoring becomes risky"],
            ["Comprehension debt", "Large changes merged after quick review", "Nobody can change the module confidently"],
          ],
        },
      },
      {
        heading: "What the evidence suggests",
        body: [
          "Evidence is still developing and should be read carefully. GitClear's analyses of large volumes of commit data have reported rising code duplication and declining 'moved' code (a proxy for refactoring) as AI assistants spread; these are a single vendor's analyses of its customers' and open-source repositories, and they show correlation rather than cause. Google's DORA research on AI-assisted software delivery describes AI as an amplifier: teams with strong practices tend to benefit, while weaker practices are magnified ([[https://dora.dev/research/2025/dora-report/|DORA research]]).",
          "The practical reading is consistent with what teams report: AI does not create debt by itself, but it raises the rate at which code is added, so any gap in review, conventions or refactoring grows faster than before.",
        ],
      },
      {
        heading: "Comprehension debt: the one that matters most",
        body: [
          "Code you own but do not understand is the most expensive kind. It slows every future change, makes incidents longer and makes it impossible to judge whether an agent's next change is right. It accumulates when large agent-written changes are approved on the basis of passing tests, when the person who prompted the change moves on, or when nobody reads the code beyond the diff summary.",
          "Counter it deliberately: keep changes small enough to understand, ask agents to explain non-obvious decisions in the pull request, require that someone can explain each important module, and rotate review so knowledge spreads. Our guide to [[/blogs/vibe-coding-vs-production-software|vibe coding vs production software]] covers the extreme case, where an entire app is generated with little review.",
        ],
        callout: {
          type: "takeaway",
          text: "The test for a merged change is not only 'does it work?' but 'could someone on the team change this safely next month?'",
        },
      },
      {
        heading: "Preventing debt at the source: context",
        body: [
          "Most duplication and pattern drift come from agents not knowing what already exists. Point them at it. Reference implementations in the instruction file ('follow orders.ts for new handlers'), a list of shared utilities, approved libraries and rules for adding dependencies, and an explicit instruction to search for existing helpers before writing new ones all reduce debt before it is written. See [[/blogs/ai-coding-agent-context|AI coding agent context]].",
        ],
      },
      {
        heading: "Preventing debt in review",
        body: [
          "Review agent changes for design as well as correctness. Useful questions: does this duplicate something we already have? Does it follow our established pattern? Is every new dependency justified? Is there code here nobody asked for? Would I understand this in six months? AI review tools can flag duplication and pattern violations as a first pass; see [[/blogs/ai-code-review|AI code review]]. Keep pull requests small; large agent pull requests are where comprehension debt hides.",
        ],
      },
      {
        heading: "Enforce what can be enforced mechanically",
        body: [],
        checklist: [
          "Linters and formatters for style, so review time goes to design",
          "Architecture rules (allowed imports between layers) checked in CI",
          "Duplicate-code detection on changed files",
          "Dependency policy: new packages need a stated reason and pass review",
          "Dead-code and unused-export detection",
          "Coverage on changed lines, plus mutation testing on critical modules",
          "Size limits or warnings on pull requests",
        ],
      },
      {
        heading: "Paying debt down: use agents for refactoring",
        body: [
          "The same tools that create debt are good at paying it down when directed: consolidating duplicated helpers, migrating old patterns to the current one, removing dead code, adding characterization tests before a refactor and updating documentation. Schedule this work explicitly, a fixed share of each cycle or a recurring 'debt task' for agents, with the same review standards as feature work. Our guide to [[/blogs/ai-legacy-code-modernization|AI legacy code modernization]] covers larger efforts.",
        ],
      },
      {
        heading: "Signals to track",
        body: [],
        table: {
          headers: ["Signal", "What a worrying trend looks like"],
          rows: [
            ["Duplication in changed files", "Rising share of new code duplicating existing code"],
            ["Churn", "Code rewritten or reverted within weeks of merging"],
            ["Rework rate", "More follow-up fixes after agent changes"],
            ["Pull request size", "Growing, with review time not growing to match"],
            ["Dependency count", "New packages added faster than removed"],
            ["Time to change a module", "Simple changes in AI-heavy areas take longer"],
            ["Developer survey", "People report not understanding parts of the codebase"],
          ],
        },
      },
      {
        heading: "Common mistakes",
        body: [
          "Measuring success by lines of AI-generated code, which rewards exactly the volume that creates debt. Approving large agent changes because tests pass. Never giving agents reference patterns, then blaming them for inconsistency. Deferring all refactoring 'until things calm down'. And letting the only person who understood an agent-built module leave without a handover. [[/blogs/measure-ai-coding-impact|Measuring AI coding impact]] covers metrics that avoid these traps.",
        ],
        cta: {
          title: "Keeping an AI-assisted codebase healthy?",
          description: "ZSpace Labs builds and maintains web and mobile products with agent-assisted workflows, review standards and refactoring built into delivery. See [[/services/website-development|full-stack development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "AI-generated code is neither better nor worse by nature, but it arrives faster, and debt grows at the rate code is added without care. Give agents context, review for design, enforce rules mechanically, watch duplication and churn, refactor on purpose and protect the team's understanding of its own code. That keeps the speed of coding agents from turning into the slowness of an unmaintainable system.",
        ],
      },
    ],
  },
];
