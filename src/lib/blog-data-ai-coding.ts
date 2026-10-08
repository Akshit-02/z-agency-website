import type { BlogPost } from "./blog-data";

/**
 * AI-built software cluster (October 2026 batch). Existing articles
 * ai-coding-agents, ai-assisted-development-vs-agentic-coding,
 * ai-software-development and ai-code-review cover professional team
 * workflows; these six answer the business questions they leave open:
 * vibe coding vs production, hardening an AI-built app, security of
 * generated code, cost impact, coding-agent security and tool choice.
 * Research checked 2026-10-07: Veracode 2026 GenAI Code Security Report,
 * METR (2025 RCT, Feb 2026 update, May 2026 survey), DORA 2025, Stack
 * Overflow 2025, USENIX Security 2025 package hallucination study, NVD
 * (CVE-2025-48757, CVE-2025-53773) and official Claude Code, Codex and
 * Cursor documentation. Merged into `posts` in blog-data.ts.
 */

export const aiCodingPosts: BlogPost[] = [
  // ---------------------------------------- VIBE CODING VS PRODUCTION
  {
    slug: "vibe-coding-vs-production-software",
    title: "Vibe Coding vs Production Software Development: What Businesses Should Know",
    seoTitle: "Vibe Coding vs Production Software: What Businesses Should Know",
    excerpt:
      "What vibe coding is good for, where it stops being safe, and how to tell when an AI-built prototype needs production engineering before launch.",
    category: "Web Development",
    banner: "vibevsprod",
    bannerAlt:
      "Vibe coding vs production software compared (Vibe coding and Production, with Production highlighted) by goal, code review, security, testing and when it breaks.",
    date: "2026-10-07",
    readingTime: "7 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["saas-technology", "fintech", "healthcare-healthtech"],
    relatedSlugs: ["vibe-coded-app-to-production", "ai-generated-code-security", "ai-software-development-cost"],
    faqs: [
      { q: "What is vibe coding?", a: "Building software by describing what you want to an AI tool and accepting what it generates, largely without reading or understanding the code. Andrej Karpathy coined the term in February 2025, and Collins Dictionary named it Word of the Year for 2025." },
      { q: "Is vibe coding bad?", a: "No. It is an excellent way to explore ideas, build prototypes, internal tools for a few people and throwaway experiments. It becomes risky when the result handles real users' data, money or business-critical processes without anyone reviewing the code." },
      { q: "Can a vibe-coded app go to production?", a: "Sometimes, after hardening: review of authentication and data access, secrets management, tests, monitoring and a deployment process. Some prototypes are better rebuilt using the prototype as a specification. A code audit tells you which." },
      { q: "Is AI-generated code less secure than human code?", a: "Studies find it frequently contains vulnerabilities when security is not specified. Veracode's 2026 GenAI Code Security Report found models chose an insecure option in about 44 percent of security-relevant coding tasks. Human code has vulnerabilities too; the difference is whether anyone reviews and tests it." },
      { q: "What is the difference between vibe coding and AI-assisted development?", a: "In AI-assisted or agentic development, engineers use AI tools but still own the design, read the changes, run tests and review before merging. Vibe coding skips that ownership. The tools can be the same; the process is different." },
      { q: "Should my company ban vibe coding?", a: "Banning it usually pushes it out of sight. A better policy defines where it is allowed (prototypes, personal productivity, internal tools without sensitive data) and what must happen before anything reaches customers or production data." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Vibe coding (building software by prompting an AI and accepting the result without really reading the code) is a fast, legitimate way to explore ideas and build prototypes. Production software is different: it has real users, real data and real consequences when it fails, so someone has to understand, review, test, secure and operate it. The line is not the tool you used but what the software touches. Once an AI-built app stores personal data, takes payments, runs a business process or is relied on by customers, it needs production engineering: an audit, fixes to authentication and data access, tests, monitoring and a deployment process.",
        ],
      },
      {
        heading: "What vibe coding actually means",
        body: [
          "Andrej Karpathy described vibe coding in February 2025 as fully giving in to the vibes and forgetting the code even exists: describe what you want, accept the changes, paste errors back in, repeat until it mostly works. Collins Dictionary made it Word of the Year for 2025 after usage spread far beyond developers.",
          "Tools such as Lovable, Bolt, Replit, v0 and general coding agents made this accessible to founders, marketers and operations staff with no engineering background. That is genuinely useful. A founder can show investors a working product instead of slides; an operations lead can build a tool that saves hours a week. The risk lies in a specific misunderstanding: that software which works in a demo is software that is ready for customers.",
        ],
      },
      {
        heading: "Vibe coding vs production development compared",
        body: [],
        table: {
          headers: ["Aspect", "Vibe coding", "Production development (with or without AI)"],
          rows: [
            ["Goal", "Something that works now", "Something that keeps working, safely, as it changes"],
            ["Who understands the code", "Often nobody", "The team that maintains it"],
            ["Review", "None or by the AI itself", "Human review of changes, plus automated checks"],
            ["Security", "Whatever the generated defaults were", "Designed: authentication, authorization, secrets, data protection"],
            ["Testing", "Clicking around", "Automated tests on critical paths, run on every change"],
            ["Data", "Sample or early real data", "Backups, migrations, retention and privacy obligations"],
            ["Operations", "It runs on a hosted builder", "Monitoring, logging, alerting, rollback, on-call"],
            ["Changing it later", "Prompt again and hope", "Predictable changes with known effects"],
          ],
        },
      },
      {
        heading: "Where vibe coding is the right choice",
        body: [
          "Use it freely where the cost of failure is low and the value of speed is high:",
        ],
        checklist: [
          "**Prototypes and demos** to test an idea with users or investors",
          "**Clickable specifications** that show developers what you want better than a document",
          "**Personal and team productivity tools** with no sensitive data and a handful of users",
          "**Internal experiments** you expect to throw away",
          "**Landing pages and simple static sites** with no logins or stored data, reviewed before publishing",
        ],
        callout: {
          type: "tip",
          text: "A vibe-coded prototype is one of the best briefs you can hand a development team. It shows flows, priorities and edge cases more clearly than most written specifications.",
        },
      },
      {
        heading: "Where it stops being safe",
        body: [
          "The risks come from what generated code tends to get wrong when nobody checks it, and they are well documented.",
          "**Security defaults.** Veracode's 2026 GenAI Code Security Report tested models on security-relevant coding tasks and found an average security pass rate of 56 percent, almost unchanged from its first report. Code compiled almost every time; it was secure only about half the time. Cross-site scripting and log injection were handled correctly in only 15 and 12 percent of cases.",
          "**Data access.** Many app builders pair a front end with a hosted database. If row-level security is not configured, the public key shipped to every browser can read or write other users' data. CVE-2025-48757 describes exactly this pattern in apps generated with one popular builder (the vendor disputes the record, noting that each customer is responsible for securing their application's data), and that dispute is the point: the platform will not take responsibility for your data model.",
          "**Dependencies.** Code models sometimes suggest packages that do not exist. A USENIX Security 2025 study found 19.7 percent of package suggestions across 16 models were hallucinated, and many names recurred, which lets attackers register them with malicious code (\"slopsquatting\").",
          "**Maintainability.** When nobody understands the code, every change is a gamble. Developers surveyed by Stack Overflow in 2025 named \"AI solutions that are almost right, but not quite\" as their biggest frustration (66 percent).",
        ],
      },
      {
        heading: "Four questions that tell you where the line is",
        body: [
          "Instead of judging the tool, ask what the software touches. If the answer to any question below is yes, treat the app as production software.",
        ],
        table: {
          headers: ["Question", "If yes, you need"],
          rows: [
            ["Does it store or process personal, health, financial or customer data?", "Data access review, encryption, privacy compliance, backups"],
            ["Does it take payments or move money?", "Payment provider integration review, fraud and refund handling, audit trail"],
            ["Will people outside your team rely on it?", "Tests, monitoring, support process, uptime expectations"],
            ["Would a failure or breach cost more than rebuilding it properly?", "Security review and an engineering owner"],
          ],
        },
        cta: {
          title: "Have an AI-built app that is about to meet real users?",
          description: "ZSpace Labs audits AI-built prototypes and tells you whether to harden or rebuild, then does the work. See [[/services/website-development|web application development]].",
        },
      },
      {
        heading: "AI-assisted development is not the same as vibe coding",
        body: [
          "Professional teams use the same AI tools differently. Engineers write specifications, let coding agents implement them, read the diffs, run the tests and review before merging. The AI writes much of the code; humans still own the design and the decisions. Our guides to [[/blogs/ai-coding-agents|AI coding agents]] and [[/blogs/ai-assisted-development-vs-agentic-coding|AI-assisted development vs agentic coding]] describe those workflows.",
          "The evidence suggests that this ownership is what makes AI pay off. Google's DORA 2025 report found that AI adoption is now associated with higher delivery throughput but still with lower delivery stability, and describes AI as an amplifier of whatever engineering practices a team already has. Strong review, testing and small changes turn AI speed into results; weak practices turn it into incidents.",
        ],
      },
      {
        heading: "A sensible company policy",
        body: [
          "If people in your organization are building with AI (they almost certainly are), give them clear rules rather than a ban.",
        ],
        checklist: [
          "**Allowed freely:** prototypes, demos and personal tools with no customer or sensitive data",
          "**Allowed with review:** internal tools used by a team, once an engineer has checked data access and secrets",
          "**Requires engineering ownership:** anything customer-facing, handling personal data or payments, or integrated with core systems",
          "**Never:** pasting production credentials or customer data into AI tools that are not approved for it",
          "**Always:** a named owner for every app that is in use, and an inventory of what exists",
        ],
      },
      {
        heading: "Harden or rebuild?",
        body: [
          "When a prototype crosses the line, there are two routes. Hardening keeps the code and fixes it: right for small apps on a sensible stack where the data model is sound. Rebuilding uses the prototype as a living specification and writes production code (often with AI assistance, under engineering control): right when the data model is wrong, the code is tangled or the platform cannot meet your requirements. Our step-by-step [[/blogs/vibe-coded-app-to-production|guide to taking a vibe-coded app to production]] covers both routes and how to choose.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Vibe coding is a new way to get from idea to working software, and businesses should use it. It is not a way to skip the engineering that keeps customer data safe and systems running. Judge each app by what it touches, give AI-built tools an owner once people depend on them, and bring in production engineering before real users and real data arrive, not after the first incident.",
        ],
      },
    ],
  },

  // ---------------------------------------- VIBE-CODED APP TO PRODUCTION
  {
    slug: "vibe-coded-app-to-production",
    title: "How to Take a Vibe-Coded App to Production: A Hardening Checklist",
    seoTitle: "How to Take a Vibe-Coded App to Production: Hardening Checklist",
    excerpt:
      "A step-by-step checklist for turning an AI-built prototype into production software, plus how to decide between hardening it and rebuilding.",
    category: "Web Development",
    banner: "vibehardenflow",
    bannerAlt:
      "Hardening an AI-built app: Audit, Auth + data access (highlighted), Secrets, Data model, Tests, Monitor + deploy.",
    date: "2026-10-07",
    readingTime: "8 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["saas-technology", "healthcare-healthtech", "fintech"],
    relatedSlugs: ["vibe-coding-vs-production-software", "ai-generated-code-security", "secure-business-website-development"],
    faqs: [
      { q: "How long does it take to make a vibe-coded app production-ready?", a: "It depends on size and how sound the foundations are. A small app with a reasonable data model might need one to three weeks of focused hardening; a larger app with tangled code or a flawed data model may be faster to rebuild. An audit of a few days usually answers the question." },
      { q: "What is the most common security problem in AI-built apps?", a: "Broken data access: database tables readable or writable by any logged-in user, or by anyone with the public API key, because row-level security or server-side authorization was never set up. Exposed secrets in front-end code are a close second." },
      { q: "Can I keep using Lovable, Bolt or Replit after going to production?", a: "Sometimes. Many builders now export code to a Git repository and let you deploy elsewhere. Whether to stay depends on whether the platform meets your requirements for security, compliance, performance and control over deployments." },
      { q: "Should I rebuild instead of fixing?", a: "Rebuild when the data model is wrong, the code is too tangled to test, the stack cannot meet your requirements, or fixing would touch most files anyway. Use the prototype as the specification; it is still valuable." },
      { q: "Do I need tests if the app already works?", a: "Yes. Tests are what let you change the app safely later, including with AI tools. Start with the few journeys that would hurt most if they broke: sign-up, login, payment and the core task." },
      { q: "What should I check before letting real users in?", a: "That users can only see and change their own data, that no secrets are in the browser bundle, that backups exist and restore, that errors are monitored and that you can roll back a bad release." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "To take a vibe-coded app to production: get the code into version control you own, audit it, then fix things in order of risk. First make sure every user can only access their own data (server-side authorization and database row-level security), move all secrets out of the front end and rotate them, and review the data model and migrations. Then check dependencies, add automated tests for critical journeys, set up separate environments, error monitoring, logging and backups, and deploy through a pipeline with rollback. If the audit shows a flawed data model or tangled code, rebuild using the prototype as the specification instead.",
        ],
      },
      {
        heading: "Before you start: own the code",
        body: [
          "Production software needs a home you control. Export or sync the project to a Git repository owned by your company account, not a personal one, and make sure you can build and run it outside the builder. Record which services it depends on (database, authentication, storage, email, payments, AI APIs) and who holds the accounts. Many teams discover at this point that the app's database and keys sit in a founder's personal account.",
        ],
        checklist: [
          "Code in a company-owned Git repository with history",
          "Can be built and run locally or in CI from documented steps",
          "List of every external service, account owner and billing owner",
          "Admin access to the database, authentication provider and hosting",
        ],
      },
      {
        heading: "Step 1: Audit before you change anything",
        body: [
          "Spend a few days understanding what you have. A good audit reads the code paths that matter, maps the data model, lists every place data is read and written, tests access controls directly against the API or database, and scans for secrets and vulnerable dependencies. The output is a prioritized list of issues and a recommendation: harden or rebuild.",
        ],
        table: {
          headers: ["Audit area", "What to look for"],
          rows: [
            ["Data access", "Tables or endpoints any user, or the public key, can read or write"],
            ["Authentication", "Missing checks on routes, client-side-only guards, weak password reset"],
            ["Secrets", "API keys, service-role keys or tokens in front-end code or the repository"],
            ["Data model", "Missing relations and constraints, duplicated data, no migrations"],
            ["Dependencies", "Unknown, unmaintained or non-existent packages; known vulnerabilities"],
            ["Business logic", "Prices, discounts, limits or permissions enforced only in the browser"],
            ["Operations", "No backups, no monitoring, single environment, manual deploys"],
          ],
        },
      },
      {
        heading: "Step 2: Fix authentication and data access",
        body: [
          "This is where most AI-built apps fail, and the consequences are the most serious. Generated code often checks permissions in the user interface (hiding a button) but not on the server or database, so anyone who calls the API directly can read or change other people's data.",
          "If the app uses a hosted database accessed from the browser, such as Supabase or Firebase, enable row-level security or security rules on every table and write policies that restrict each row to its owner or organization. Supabase's documentation is explicit that tables exposed through its API need row-level security. CVE-2025-48757 records apps built with one AI builder whose tables were readable or writable without authentication because of missing row-level security (the vendor disputes the record, saying each customer is responsible for their app's data). Whatever the platform, that responsibility is yours.",
        ],
        checklist: [
          "Every table or collection has row-level security or rules enabled, with tested policies",
          "Every API route checks the user's identity and permission on the server",
          "Prices, discounts, quotas and roles are enforced server-side, never trusted from the client",
          "Admin functions live behind separate roles and are not reachable by normal users",
          "Password reset, email change and invitation flows cannot be abused to take over accounts",
          "Test access as two different users and as a logged-out visitor, directly against the API",
        ],
        callout: {
          type: "takeaway",
          text: "If you fix only one thing before launch, make it this: prove that user A cannot read or change user B's data by calling your API or database directly.",
        },
      },
      {
        heading: "Step 3: Remove and rotate secrets",
        body: [
          "AI tools often place API keys where they make the demo work: in front-end code, in committed environment files, or in prompts pasted into chat. Anything shipped to the browser is public. Move secret keys (database service keys, payment secret keys, AI provider keys, email and SMS keys) to server-side functions, store them in your host's secret manager, and **rotate every key** that was ever exposed in code, a repository or an AI tool. Use separate keys for development, staging and production.",
          "Calls to paid AI APIs deserve special care: an exposed key or an unauthenticated endpoint that proxies to a model can run up large bills quickly. Put rate limits and per-user quotas on them.",
        ],
      },
      {
        heading: "Step 4: Review the data model and migrations",
        body: [
          "Prototypes tend to grow their database one prompt at a time. Look for missing foreign keys and constraints, duplicated fields that drift apart, text fields used for numbers or dates, and no record of how the schema was created. Introduce migrations so every schema change is versioned and repeatable, add constraints that protect data integrity, and set up automated backups. Then restore a backup to a test environment to prove it works.",
          "If the data model is fundamentally wrong for the business (for example, single-user tables in what must be a multi-tenant product), that is the strongest signal to rebuild rather than patch.",
        ],
      },
      {
        heading: "Step 5: Check dependencies",
        body: [
          "Review every package the app installs. Remove what is unused, replace abandoned packages, and confirm each one is the real, widely used package rather than a lookalike. Research presented at USENIX Security 2025 found code models hallucinated package names in 19.7 percent of suggestions, and attackers register those names. Turn on automated dependency and vulnerability scanning in your repository and lock versions.",
        ],
      },
      {
        heading: "Step 6: Add tests where failure hurts",
        body: [
          "You do not need complete coverage before launch. You need automated tests for the journeys that would cost you most if they broke, running on every change.",
        ],
        checklist: [
          "Sign-up, login, logout and password reset",
          "Access control: users cannot see or change each other's data",
          "Payments and subscription changes, including failures and refunds",
          "The core task the product exists for",
          "Any calculation involving money, quantities or dates",
        ],
        cta: {
          title: "Want a second opinion on your AI-built app?",
          description: "ZSpace Labs audits vibe-coded apps, fixes security and data issues, adds tests and sets up production deployment, or rebuilds from your prototype when that is faster. See [[/services/website-development|web application development]] and [[/services/mobile-app-development|mobile app development]].",
        },
      },
      {
        heading: "Step 7: Environments, monitoring and deployment",
        body: [
          "Production needs to be separate from where you experiment. Set up at least a staging and a production environment with separate databases and keys. Deploy through a pipeline that runs tests and checks on every change, and make rollback a one-step action. Add error monitoring for front end and back end, structured logs, uptime checks and alerts that reach a person. Decide who responds when something breaks.",
        ],
        table: {
          headers: ["Need", "Minimum for launch"],
          rows: [
            ["Environments", "Staging and production, separate data and keys"],
            ["Deployment", "Automated pipeline with tests, one-step rollback"],
            ["Monitoring", "Error tracking, uptime checks, alerts to a named person"],
            ["Logging", "Structured logs without passwords, tokens or sensitive personal data"],
            ["Backups", "Automated, tested restore"],
            ["Performance", "Check key pages and queries with realistic data volume"],
          ],
        },
      },
      {
        heading: "Step 8: Privacy, compliance and terms",
        body: [
          "Real users bring legal obligations. Publish a privacy policy that matches what the app actually collects, add consent where required, decide data retention, and check where each service stores data. If you are in a regulated sector (health, finance, children's data), get specific advice before launch. Check that AI features do not send personal data to providers in ways your policy does not allow; see [[/blogs/ai-data-privacy|AI data privacy]].",
        ],
      },
      {
        heading: "Harden or rebuild: how to decide",
        body: [],
        table: {
          headers: ["Signal", "Harden", "Rebuild"],
          rows: [
            ["Data model", "Sound, needs constraints", "Wrong for the business (tenancy, relations)"],
            ["Code structure", "Readable, modest size", "Tangled, duplicated, untestable"],
            ["Stack", "Mainstream and supported", "Platform cannot meet security, compliance or performance needs"],
            ["Scope of fixes", "Targeted", "Would touch most files"],
            ["Team", "Can maintain this stack", "Would need to learn an unfamiliar or proprietary setup"],
          ],
        },
        callout: {
          type: "note",
          text: "Rebuilding does not waste the prototype. It answers most product questions, gives developers a precise reference and can cut the time to a production version substantially.",
        },
      },
      {
        heading: "After launch: keep using AI safely",
        body: [
          "Going to production does not mean giving up AI tools. It means using them inside a process: changes on branches, reviewed diffs, tests that must pass, and no AI tool with direct access to production data or credentials. Our guides to [[/blogs/ai-generated-code-security|AI-generated code security]] and [[/blogs/ai-coding-agent-security|securing AI coding agents]] cover the guardrails.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A vibe-coded app is a strong starting point and a weak finishing point. Own the code, audit it, fix data access and secrets first, put the data model under migrations, check dependencies, test the journeys that matter, and deploy with monitoring and rollback. When the audit says the foundations are wrong, rebuild from the prototype rather than patching around it. For the strategic view, read [[/blogs/vibe-coding-vs-production-software|vibe coding vs production software]].",
        ],
      },
    ],
  },

  // ---------------------------------------- AI-GENERATED CODE SECURITY
  {
    slug: "ai-generated-code-security",
    title: "AI-Generated Code Security: What to Check Before You Launch",
    seoTitle: "AI-Generated Code Security: A Pre-Launch Checklist",
    excerpt:
      "What research shows about AI-generated code security, the vulnerabilities that appear most often, and a pre-launch checklist with CI controls.",
    category: "Web Development",
    banner: "aicodesecflow",
    bannerAlt:
      "Securing AI-generated code: Generate, Static scan, Dependency check, Human review (highlighted), Security tests, Ship.",
    date: "2026-10-07",
    readingTime: "7 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["fintech", "healthcare-healthtech", "saas-technology"],
    relatedSlugs: ["ai-code-review", "ai-coding-agent-security", "vibe-coded-app-to-production"],
    faqs: [
      { q: "Is AI-generated code secure?", a: "Not reliably by default. Veracode's 2026 GenAI Code Security Report found an average security pass rate of 56 percent across models on security-relevant tasks, with the best model at 68 percent. It must be reviewed and tested like any other code, with extra attention to known weak spots." },
      { q: "What vulnerabilities are most common in AI-generated code?", a: "Cross-site scripting and log injection were handled correctly least often in Veracode's 2026 tests (15 and 12 percent pass rates). In real apps, missing server-side authorization, hard-coded secrets, unsafe deserialization and hallucinated or outdated dependencies are also frequent." },
      { q: "What is slopsquatting?", a: "Registering package names that AI models hallucinate, so that developers who install a suggested but non-existent package get attacker-controlled code. A USENIX Security 2025 study found 19.7 percent of package suggestions from 16 models were hallucinations." },
      { q: "Are coding-specialized models more secure?", a: "Not according to Veracode's 2026 report, which found coding-specialized models no more secure on average than general-purpose ones. Reasoning models did somewhat better." },
      { q: "Can AI review its own code for security?", a: "AI review helps catch issues, but it should complement deterministic tools (static analysis, dependency and secret scanning) and human review, not replace them. Models miss issues and can be confidently wrong." },
      { q: "Does telling the AI to write secure code help?", a: "It helps somewhat: clear security requirements, approved libraries and examples in your repository instructions improve results. It does not remove the need for scanning, tests and review." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI-generated code is functional far more often than it is secure. Independent testing in 2026 found models chose insecure options in roughly 44 percent of security-relevant tasks, with cross-site scripting and log injection handled worst, and studies show models invent package names attackers can exploit. Before launch, treat AI-written code as untrusted: run static analysis, dependency and secret scanning in CI, have a human review authentication, authorization, input handling and data access, test access controls directly, verify every dependency exists and is the real package, and give your coding tools written security requirements so fewer problems are generated in the first place.",
        ],
      },
      {
        heading: "What the research shows",
        body: [
          "Three findings matter most for anyone shipping AI-written code.",
          "**Security has not improved as fast as capability.** Veracode's 2026 GenAI Code Security Report (July 2026) tested 11 models on tasks where a secure and an insecure implementation were both possible. Code compiled almost every time, but the average security pass rate was 56 percent, barely changed from 55 percent in its first report. The best model reached 68 percent. Coding-specialized models were no more secure than general-purpose ones.",
          "**Some vulnerability classes are handled much worse than others.** In the same report, SQL injection and cryptographic algorithm choice were handled correctly most of the time (83 and 87 percent), while cross-site scripting (15 percent) and log injection (12 percent) were usually wrong. Context-dependent issues, where safety depends on how data flows through the app, are the hardest for models.",
          "**Models invent dependencies.** Spracklen and colleagues (USENIX Security 2025) analysed 576,000 code samples from 16 models and found 19.7 percent of suggested packages did not exist. Many hallucinated names recurred across runs, which makes them predictable targets for attackers who register them.",
        ],
        table: {
          headers: ["Finding", "Source", "Implication"],
          rows: [
            ["Average security pass rate 56%", "Veracode 2026 GenAI Code Security Report", "Assume generated code needs security review"],
            ["XSS 15%, log injection 12% pass rates", "Veracode 2026", "Focus review on output encoding and logging"],
            ["19.7% of package suggestions hallucinated", "USENIX Security 2025", "Verify every new dependency"],
            ["46% of developers distrust AI output accuracy", "Stack Overflow Developer Survey 2025", "Teams already sense the problem; formalize the checks"],
          ],
        },
      },
      {
        heading: "Why AI code goes wrong",
        body: [
          "Models learn from public code, much of which is insecure or written for tutorials. They optimize for code that runs and satisfies the prompt, and prompts rarely state security requirements. They do not see your threat model, your other services or which inputs are attacker-controlled. And in agentic workflows they make many changes quickly, which increases the volume reviewers must check; DORA's 2025 research describes larger batches and review load as a key reason AI is still associated with lower delivery stability.",
        ],
      },
      {
        heading: "The vulnerability patterns to check first",
        body: [],
        table: {
          headers: ["Pattern", "What it looks like in generated code", "Check"],
          rows: [
            ["Broken authorization", "Routes check login but not ownership; permissions enforced only in UI", "Test as a second user and logged-out against the API"],
            ["Cross-site scripting", "Raw HTML rendering of user content; unsafe use of innerHTML-style APIs", "Search for raw HTML sinks; rely on framework escaping"],
            ["Injection", "String-built SQL, shell commands or queries", "Parameterized queries; no shell with user input"],
            ["Log injection and leaks", "User input logged unsanitized; tokens or personal data in logs", "Sanitize log fields; redact secrets"],
            ["Hard-coded secrets", "API keys in source, front end or config committed to Git", "Secret scanning; move to secret manager; rotate"],
            ["Insecure defaults", "CORS set to allow everything, debug mode on, permissive cookies", "Review configuration explicitly"],
            ["Weak crypto and randomness", "Home-made token generation, outdated hashing", "Use platform libraries; verified password hashing"],
            ["Hallucinated or stale dependencies", "Packages that do not exist, lookalikes, outdated versions", "Verify each package; lockfiles; vulnerability scanning"],
            ["Unsafe file and data handling", "Path traversal in uploads, unsafe deserialization", "Validate paths and types; avoid unsafe parsers"],
          ],
        },
      },
      {
        heading: "A pre-launch checklist",
        body: [
          "Run through this before any AI-assisted code reaches real users. It complements the OWASP Top 10 and ASVS, which remain the right references for web application security.",
        ],
        checklist: [
          "Every route and query enforces authentication and object-level authorization on the server",
          "Access control tested directly against the API as multiple users and as an anonymous visitor",
          "No secrets in source, front-end bundles, logs or Git history; exposed keys rotated",
          "All user input validated on the server; outputs encoded for their context (HTML, URL, SQL, shell)",
          "Every dependency verified as the intended, maintained package; lockfile committed",
          "Static analysis, dependency and secret scanning run in CI and block on high-severity findings",
          "Security headers, CORS, cookie flags and error handling reviewed in configuration",
          "Logging excludes passwords, tokens and sensitive personal data",
          "Rate limits on login, sign-up, password reset and any endpoint calling paid APIs",
          "A human who understands the code has reviewed authentication, authorization and data handling",
        ],
        cta: {
          title: "Shipping code your team built with AI?",
          description: "ZSpace Labs runs pre-launch security reviews of AI-assisted codebases and sets up the CI checks that keep them clean. See [[/services/website-development|web application development]].",
        },
      },
      {
        heading: "Build the checks into CI, not memory",
        body: [
          "Manual checklists decay. Put the deterministic parts into your pipeline so they run on every pull request, whoever (or whatever) wrote it.",
        ],
        table: {
          headers: ["Control", "Catches", "Notes"],
          rows: [
            ["Static analysis (SAST)", "Injection, XSS sinks, unsafe APIs", "Tune rules to your stack to limit noise"],
            ["Dependency scanning", "Known vulnerable or unmaintained packages", "Enable automatic update pull requests"],
            ["Secret scanning", "Keys and tokens in code and history", "Also enable push protection where available"],
            ["Tests for access control", "Broken authorization", "The highest-value tests for most apps"],
            ["AI code review", "Logic issues, missing checks, risky patterns", "Useful second reader; not a gate on its own"],
            ["Human review", "Design flaws and context-specific risk", "Required for authentication, payments and data access changes"],
          ],
        },
        callout: {
          type: "tip",
          text: "Require human review for changes touching authentication, authorization, payments, cryptography or data deletion, even when everything else can merge with lighter review.",
        },
      },
      {
        heading: "Generate fewer vulnerabilities in the first place",
        body: [
          "Coding agents follow repository instructions. Write your security rules down where they will be read (an AGENTS.md or CLAUDE.md file, Cursor rules or equivalent): which libraries to use for authentication, database access and HTML rendering, that secrets must never be hard-coded, that every route needs an authorization check, and that new dependencies require approval. Point agents to secure examples in your own code. Veracode's results suggest that giving models explicit security guidance improves outcomes, though not enough to skip the checks above.",
          "For agent-specific risks (agents running commands, reading untrusted files or holding credentials), see [[/blogs/ai-coding-agent-security|securing AI coding agents]]. For using AI as a reviewer, see [[/blogs/ai-code-review|AI code review]].",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "AI makes code cheap to produce and does not make it secure. Treat generated code as untrusted input to your codebase: scan it automatically, verify its dependencies, test access control directly and keep a knowledgeable human on the changes that matter. With those controls, AI-assisted development can be as safe as any other; without them, it ships the same well-known vulnerabilities faster.",
        ],
      },
    ],
  },

  // ---------------------------------------- AI SOFTWARE DEVELOPMENT COST
  {
    slug: "ai-software-development-cost",
    title: "Does AI Make Software Development Cheaper? What Actually Changes in Cost and Timelines",
    seoTitle: "Does AI Make Software Development Cheaper? Cost and Timeline Impact",
    excerpt:
      "What AI coding tools really change in software budgets and timelines: what the research shows, which phases get faster, and the new costs AI adds.",
    category: "Web Development",
    banner: "aidevcost",
    bannerAlt:
      "How much AI tools change each phase of a software project: discovery and design (small), implementation (large), automated tests (large), integration (small to moderate), review and QA (can increase), operations (small).",
    date: "2026-10-07",
    readingTime: "7 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise"],
    relatedSlugs: ["website-development-cost", "mobile-app-development-cost", "ai-software-development"],
    faqs: [
      { q: "Does AI make software development cheaper?", a: "For some parts of a project, yes: writing routine code, tests, migrations and documentation can be much faster. Discovery, design decisions, integration with other systems, review, QA and operations change less. Most projects see a real but partial saving, not a fraction of the old cost." },
      { q: "How much faster are developers with AI?", a: "The evidence is mixed. METR's 2025 randomized trial found experienced open-source developers took 19 percent longer with early-2025 tools; its 2026 follow-up estimated a speedup but with wide uncertainty and selection problems. Surveys report larger self-reported gains. Results depend heavily on the task, codebase and team practices." },
      { q: "Should a development agency charge less if it uses AI?", a: "Compare outcomes, not hours. An agency using AI well may deliver faster or include more (tests, documentation) for a similar price. Be wary of large discounts that come from skipping review, testing or security work." },
      { q: "What new costs does AI add?", a: "Tool subscriptions and usage, more review and testing effort to match higher code volume, security scanning, and time spent fixing code that was almost right. For products with AI features, model API costs are a separate, ongoing operating cost." },
      { q: "Can I build my app myself with AI instead of hiring developers?", a: "You can build a prototype, and that is valuable. Production software that handles customer data or payments still needs engineering ownership for security, data, testing and operations." },
      { q: "Will AI reduce maintenance costs?", a: "It can make routine upgrades and fixes faster, especially with good tests. It can also increase maintenance if code was generated quickly without structure or understanding. Maintainability depends on how the code was produced and reviewed." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI makes some parts of software development much cheaper and others barely cheaper. Writing routine code, tests, data migrations and documentation can be substantially faster with AI coding agents. Understanding the problem, making design and architecture decisions, integrating with other systems, reviewing, testing, securing and operating the software change much less, and some of that work increases because there is more code to check. The research on overall productivity is mixed. Expect real but partial savings on the implementation share of a budget, faster prototypes and more thorough testing for the same money, not a project at a fraction of the old price.",
        ],
      },
      {
        heading: "What the evidence says about productivity",
        body: [
          "Claims about AI productivity range from \"10x\" to \"slower\". The strongest evidence is more modest and more interesting than either.",
        ],
        table: {
          headers: ["Study", "Finding", "Caveat"],
          rows: [
            ["METR randomized trial (July 2025)", "16 experienced open-source developers took 19% longer on 246 real tasks with early-2025 AI tools, while believing they were about 20% faster", "Experts on familiar, large codebases; tools have improved since"],
            ["METR follow-up (Feb 2026)", "Later data pointed to a speedup (around 18% for returning developers) but with confidence intervals including no effect", "METR called the signal unreliable: developers increasingly refused to work without AI"],
            ["METR survey (May 2026)", "Technical workers self-reported a median 1.4–2x increase in the value of their work from AI", "Self-reported; the 2025 trial showed perception can diverge from measurement"],
            ["DORA State of AI-assisted Software Development (2025)", "AI adoption now associated with higher delivery throughput but still lower delivery stability", "Effects depend on team practices; AI amplifies strengths and weaknesses"],
            ["Stack Overflow Developer Survey (2025)", "84% use or plan to use AI tools; 46% distrust the accuracy of output", "Adoption and trust are moving in opposite directions"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "AI speeds up writing code more reliably than it speeds up delivering working software. The gap is review, testing, integration and fixing what is almost right.",
        },
      },
      {
        heading: "Where the money goes in a software project",
        body: [
          "Implementation (writing code) is usually not the majority of a project's cost. A typical custom web or mobile project spreads effort across discovery and design, implementation, integration with other systems, testing and QA, project management and review, and deployment and early operations. AI compresses some of these far more than others.",
        ],
        table: {
          headers: ["Phase", "Effect of AI tools", "Why"],
          rows: [
            ["Discovery and requirements", "Small", "Needs stakeholders, decisions and domain knowledge; AI helps with drafts and research"],
            ["UX and visual design", "Small to moderate", "Faster exploration and prototypes; decisions still human"],
            ["Implementation of routine features", "Large", "CRUD screens, forms, APIs, migrations and boilerplate are where agents excel"],
            ["Complex domain logic", "Moderate", "Helps, but correctness needs careful specification and review"],
            ["Integrations with other systems", "Small to moderate", "Undocumented behaviour, credentials, environments and coordination dominate"],
            ["Automated tests", "Large", "Writing tests is fast; deciding what to test still needs judgement"],
            ["Code review and QA", "Can increase", "More code arrives faster; review becomes the bottleneck"],
            ["Security", "Mixed", "Faster fixes, but generated code introduces common vulnerabilities"],
            ["Deployment and operations", "Small", "Infrastructure, monitoring and incident response remain hands-on"],
          ],
        },
      },
      {
        heading: "New costs AI adds",
        body: [
          "Using AI well is not free. Budget for:",
        ],
        checklist: [
          "**Tools and usage:** seat licences and, for agentic tools, usage-based charges that grow with heavier use",
          "**Review capacity:** more and larger changes need more reviewer time, or quality drops",
          "**Testing and scanning:** automated checks become essential, not optional (see [[/blogs/ai-generated-code-security|AI-generated code security]])",
          "**Rework:** fixing code that compiles and looks right but is subtly wrong",
          "**Governance:** rules for what tools may access, especially customer data and credentials",
          "**AI features in the product:** model API costs are an ongoing operating expense, separate from development (see [[/blogs/llm-cost-optimization|LLM cost optimization]])",
        ],
      },
      {
        heading: "What this means for your budget",
        body: [
          "For buyers of software, the useful shift is not \"same project, much lower price\". It is a mix of three effects:",
          "**Faster early stages.** Clickable, working prototypes now take days rather than weeks, so you can test ideas with real users before committing to a full build. That reduces the biggest cost of all: building the wrong thing.",
          "**More quality for the same money.** Teams that use AI well spend the time saved on routine code on tests, documentation, accessibility and performance work that used to be cut.",
          "**Moderate savings on implementation-heavy work.** Projects dominated by standard features (admin panels, forms, internal tools, standard integrations) benefit most. Projects dominated by novel logic, complex integrations or regulation benefit least.",
        ],
        cta: {
          title: "Planning a project and want a realistic estimate?",
          description: "ZSpace Labs uses AI coding tools inside a reviewed, tested process and will show you where that changes the estimate and where it does not. See [[/services/website-development|website and web app development]] or [[/contact|talk to us]].",
        },
      },
      {
        heading: "How to evaluate a quote that mentions AI",
        body: [
          "Ask vendors to be specific. A good answer explains where AI is used and what controls surround it.",
        ],
        checklist: [
          "Which phases use AI, and how did that change the estimate?",
          "Who reviews AI-generated code, and what must pass before it merges?",
          "What automated testing, security scanning and dependency checks run on every change?",
          "Do AI tools have access to our data, credentials or production systems? Under what terms?",
          "Who owns the code and the prompts or instructions used to generate it?",
          "How is maintainability ensured: documentation, structure, handover?",
        ],
        callout: {
          type: "note",
          text: "A quote far below others because \"AI writes the code\" usually means review, testing or security has been removed from the plan. Those costs return later, often as incidents.",
        },
      },
      {
        heading: "DIY with AI or hire a team?",
        body: [
          "AI tools let non-developers build working software, and for prototypes and internal tools that is often the right choice. The calculation changes when software handles customer data, payments or critical processes, because the expensive failures (data breaches, lost data, outages) come from exactly the areas AI-built apps tend to get wrong. A common, cost-effective path: build the prototype yourself, then bring in engineers to harden or rebuild it. See [[/blogs/vibe-coding-vs-production-software|vibe coding vs production software]].",
        ],
      },
      {
        heading: "Timelines: what to expect",
        body: [
          "Prototype and MVP timelines have shortened the most. Full production timelines shorten less, because coordination, feedback cycles, content, approvals, app store reviews, security testing and integration with third parties do not speed up with code generation. For reference ranges by project type, see our guides to [[/blogs/website-development-cost|website development cost]] and [[/blogs/mobile-app-development-cost|mobile app development cost]].",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "AI is changing the economics of software, just not uniformly. It makes code cheaper to write and prototypes much faster to build; it does not make understanding, deciding, integrating, reviewing or operating software cheap. Budget for real savings on routine implementation, invest some of them in quality, and be sceptical of any estimate that treats writing code as the whole job.",
        ],
      },
    ],
  },

  // ---------------------------------------- AI CODING AGENT SECURITY
  {
    slug: "ai-coding-agent-security",
    title: "Securing AI Coding Agents: Sandboxes, Permissions, Secrets and Prompt Injection",
    seoTitle: "AI Coding Agent Security: Sandboxes, Permissions and Secrets",
    excerpt:
      "How to use Claude Code, Codex, Cursor and Copilot safely: the threat model, sandboxing, permissions, secrets, MCP servers and a team policy.",
    category: "AI & Automation",
    banner: "codingagentsecflow",
    bannerAlt:
      "Layers that contain a coding agent: Agent, Permission rules, Sandbox (highlighted), Scoped credentials, Branch + PR review, Protected main.",
    date: "2026-10-07",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["saas-technology", "fintech", "cybersecurity"],
    relatedSlugs: ["ai-coding-agents", "ai-generated-code-security", "prompt-injection-prevention"],
    faqs: [
      { q: "Are AI coding agents safe to use?", a: "They can be, with the right setup. The risk comes from combining a model that can be manipulated with the ability to run commands, read files and use credentials. Sandboxing, limited permissions, no production secrets and review before merging contain most of that risk." },
      { q: "How can a coding agent be attacked?", a: "Mostly through prompt injection: instructions hidden in files, issues, web pages, dependencies or tool outputs that the agent reads and follows. Researchers have demonstrated this against several agents, for example CVE-2025-53773 in GitHub Copilot and Visual Studio, where injected instructions could lead to code execution." },
      { q: "Should I let a coding agent run commands without approval?", a: "Only inside a sandbox that limits file system and network access, and never with production credentials available. Outside a sandbox, keep approval for commands that change systems, install software or reach the network." },
      { q: "What about secrets in my repository?", a: "Keep secrets out of the repository and the agent's environment wherever possible. Use development-only credentials with minimal scope, and assume anything the agent can read could end up in a prompt, log or output." },
      { q: "Are cloud coding agents safer than local ones?", a: "They isolate work from your laptop, which removes some risks, but they have their own: repository access tokens, network access from the cloud environment and secrets configured there. Configure their environments as carefully as CI." },
      { q: "Do MCP servers add risk to coding agents?", a: "Yes. Each MCP server adds tools and content the agent can use and be influenced by. Use trusted servers, review their permissions and keep write access narrow." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A coding agent combines a model that can be tricked with hands that can act: it reads files, runs commands, installs packages, calls tools and pushes code. Secure it by containing those hands. Run agents in an OS-level sandbox or isolated container that restricts file and network access; use permission rules so risky commands need approval; keep production credentials and real customer data out of reach; treat issues, web pages, dependencies and tool outputs as untrusted input; vet MCP servers; and require every change to land on a branch and pass review and CI before reaching the main branch. Write this down as a team policy that differs by environment.",
        ],
      },
      {
        heading: "Why coding agents are a different security problem",
        body: [
          "An autocomplete suggestion can only be accepted or rejected by a developer. An agent acts. Modern coding agents edit many files, run test suites and shell commands, install dependencies, browse documentation, call MCP tools and open pull requests, often for minutes at a time without a person watching each step. That autonomy is the point, and it is also the attack surface.",
          "The core risk is the combination the security community calls the lethal trifecta for agents: access to private data, exposure to untrusted content, and a way to send data out or take actions. A coding agent on a developer laptop often has all three: source code and local credentials, a repository full of third-party files, and a terminal with network access.",
        ],
      },
      {
        heading: "The threat model",
        body: [],
        table: {
          headers: ["Threat", "How it happens", "Example impact"],
          rows: [
            ["Prompt injection via content", "Instructions hidden in files, issues, PR comments, docs, web pages or package READMEs", "Agent runs a command or edits config that the developer did not ask for"],
            ["Secret exfiltration", "Agent reads .env files, credentials or tokens and sends them out via a command, URL or commit", "Leaked API keys or cloud credentials"],
            ["Malicious dependencies", "Agent installs a hallucinated or lookalike package", "Attacker code running on developer machines or in CI"],
            ["Configuration tampering", "Agent edits its own settings, CI files or editor config to reduce safeguards", "Safeguards silently disabled"],
            ["Over-broad tool access", "MCP servers or CLIs with write access to production systems", "Changes to live data or infrastructure"],
            ["Unreviewed changes", "Agent pushes directly to main or auto-merges", "Vulnerable or broken code in production"],
          ],
        },
      },
      {
        heading: "This has already happened",
        body: [
          "These are not theoretical. In August 2025, Microsoft disclosed CVE-2025-53773 in GitHub Copilot and Visual Studio: researchers showed that instructions injected into content the agent processed could get it to modify workspace settings to auto-approve its own actions and then execute commands. It was patched, and similar issues have been reported and fixed in other agents and editors. The pattern is consistent: untrusted content plus the ability to change configuration or run commands equals code execution.",
          "The OWASP Top 10 for Agentic Applications captures the same risks under Agent Goal Hijack (ASI01), Unexpected Code Execution (ASI05) and Agentic Supply Chain Vulnerabilities (ASI04). Our [[/blogs/owasp-top-10-agentic-applications|OWASP agentic guide]] explains each.",
        ],
        callout: {
          type: "takeaway",
          text: "Assume any file, issue or web page an agent reads could contain instructions written by someone else. Design the environment so that following them cannot cause serious harm.",
        },
      },
      {
        heading: "Control 1: Sandbox the agent",
        body: [
          "Sandboxing is the most effective single control because it limits what an agent can do even when it is manipulated. The major tools now include it. Claude Code's sandbox uses operating-system mechanisms on macOS, Linux and WSL2 to restrict which files and network hosts shell commands can reach, which lets it run sandboxed commands without asking for approval each time. Codex documents sandboxing and approval modes for its CLI and IDE extension. Cursor's cloud agents run in isolated virtual machines with controls for secrets and allowed domains.",
          "Check exactly what the sandbox covers. Claude Code's documentation, for example, notes that its sandbox applies to shell commands, while its file tools, MCP servers and hooks run outside it, governed by permission rules instead. Where tools offer no sandbox, run the agent inside a dev container or VM with no access to your home directory and a network allowlist. Security controls differ between products, which is one of the main criteria in our [[/blogs/claude-code-vs-codex-vs-cursor|Claude Code vs Codex vs Cursor comparison]].",
        ],
        checklist: [
          "File writes limited to the project directory",
          "Network access limited to package registries and approved hosts",
          "No access to SSH keys, cloud credential files or browser profiles",
          "Sandbox enabled by default in team settings, not left to each developer",
        ],
      },
      {
        heading: "Control 2: Permission rules and approvals",
        body: [
          "Use the agent's permission system to separate safe actions from risky ones. Allow read-only operations, running tests and linting freely; require approval for installing packages, network calls outside the allowlist, editing CI or agent configuration, and anything touching git remotes. Deny outright commands that should never run, such as deploying to production or reading credential directories.",
          "Manage these settings centrally where the tool supports it (managed or organization-level settings) so individual developers cannot accidentally weaken them, and protect the settings files themselves from edits by the agent.",
        ],
      },
      {
        heading: "Control 3: Keep secrets out of reach",
        body: [
          "Anything an agent can read can end up in a prompt, a log, a commit or an outbound request. Keep production credentials off developer machines used with agents, use development credentials with minimal scope and short lifetimes, load secrets from a manager at runtime rather than `.env` files in the repository, and add secret scanning with push protection. If you suspect a key was exposed to an agent session, rotate it.",
        ],
      },
      {
        heading: "Control 4: Treat inputs as untrusted",
        body: [
          "Be deliberate about what you point agents at. Asking an agent to \"fix the issue in this GitHub link\" or \"follow the setup in this README\" feeds it third-party text. For public repositories and issues from unknown users, run agents in the most restricted mode, and do not combine untrusted input with access to secrets or the ability to push. Review new dependencies the agent proposes before installing; hallucinated package names are a known attack route.",
          "For background on the attack technique, see [[/blogs/indirect-prompt-injection|indirect prompt injection]] and [[/blogs/prompt-injection-prevention|prompt injection prevention]].",
        ],
      },
      {
        heading: "Control 5: Vet MCP servers and integrations",
        body: [
          "MCP servers give agents new tools (databases, ticketing, cloud consoles, browsers), and each one adds both capability and attack surface. Use official or well-maintained servers, pin versions, read the tool list and descriptions, grant read-only access unless writes are needed, and never connect an agent to production databases or infrastructure through MCP without strong approvals. See [[/blogs/mcp-security|MCP security]].",
        ],
      },
      {
        heading: "Control 6: Review before merge, always",
        body: [
          "Agents should work on branches and open pull requests, never push to protected branches. Branch protection, required CI checks (tests, static analysis, dependency and secret scanning) and human review for sensitive areas ensure that a manipulated or simply wrong change does not ship. AI review tools are a useful extra reader; see [[/blogs/ai-code-review|AI code review]] and [[/blogs/ai-generated-code-security|AI-generated code security]].",
        ],
        cta: {
          title: "Rolling out coding agents across a team?",
          description: "ZSpace Labs helps teams set up coding agents with sandboxing, managed permissions, secrets handling and review workflows that keep velocity without the risk. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "A team policy by environment",
        body: [],
        table: {
          headers: ["Environment", "Allowed", "Required controls"],
          rows: [
            ["Developer laptop", "Interactive agent on company repositories", "Sandbox on, managed permissions, no production secrets, approvals for installs and network"],
            ["Dev container or VM", "Longer autonomous runs", "Isolated file system, network allowlist, development credentials only"],
            ["Cloud agent", "Background tasks producing pull requests", "Scoped repo token, environment secrets limited to test services, domain allowlist"],
            ["CI (agent in pipeline)", "Review, triage, small fixes", "Read-only by default, no deploy credentials, outputs as PR comments or PRs"],
            ["Production", "Not for coding agents", "No direct access; changes only through reviewed deploys"],
          ],
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Coding agents are worth using, and they are a new kind of privileged process on your machines and in your pipelines. Contain them the way you would any untrusted automation: sandbox their execution, restrict their permissions, keep secrets out of reach, treat everything they read as potentially hostile, and let nothing they produce reach production without passing the same checks as human code. For how teams use agents day to day, see [[/blogs/ai-coding-agents|AI coding agents]].",
          "Turn these controls into company rules with [[/blogs/ai-coding-policy|an AI coding policy]], and govern which MCP servers coding agents may connect to with [[/blogs/mcp-governance|MCP governance]].",
        ],
      },
    ],
  },

  // ---------------------------------------- CLAUDE CODE VS CODEX VS CURSOR
  {
    slug: "claude-code-vs-codex-vs-cursor",
    title: "Claude Code vs Codex vs Cursor: How to Choose AI Coding Tools for a Team",
    seoTitle: "Claude Code vs Codex vs Cursor: Choosing AI Coding Tools for Teams",
    excerpt:
      "Claude Code, Codex and Cursor compared for teams as of October 2026: where each runs, controls, repository instructions, and how to run a fair trial.",
    category: "AI & Automation",
    sceneKind: "code",
    banner: "codingtoolscompare",
    bannerAlt:
      "Claude Code, Codex and Cursor compared by home surface, also runs in, cloud agents, repository instructions and code review.",
    date: "2026-10-07",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["saas-technology"],
    relatedSlugs: ["ai-coding-agents", "ai-coding-agent-security", "ai-software-development-cost"],
    faqs: [
      { q: "Which is better: Claude Code, Codex or Cursor?", a: "None is best for every team. Cursor suits developers who want the agent inside an AI-native editor. Claude Code and Codex are agent-first tools that run across terminal, IDE, desktop and cloud surfaces. The right choice depends on your workflows, controls and how each performs on your own codebase." },
      { q: "Can we use more than one?", a: "Yes, and many teams do. Shared repository instructions (AGENTS.md is supported or readable by all three) make it easier, but standardizing on one primary tool simplifies security settings, training and cost control." },
      { q: "Is Claude Code only a terminal tool?", a: "No. Anthropic documents Claude Code on the terminal, VS Code and JetBrains, a desktop app and the web, plus integrations with GitHub Actions, GitLab CI/CD and Slack." },
      { q: "Do benchmarks tell us which to choose?", a: "Only roughly. Public benchmarks change with every model release and measure specific task types. A two-week trial on your own repositories, with real tickets and your review process, is far more informative." },
      { q: "What about GitHub Copilot and other tools?", a: "GitHub Copilot, Gemini CLI, Windsurf and others are credible options too. This comparison focuses on the three most often compared, but the evaluation criteria apply to any tool." },
      { q: "How should we compare cost?", a: "Look at seat prices and usage-based charges for agentic work under realistic use, plus the cost of review time. Pricing changes frequently, so check each vendor's current plans." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "As of October 2026, **Cursor** is an AI-native code editor with an agent built in, plus cloud agents that work in isolated VMs; it suits teams who want AI inside their editing workflow. **Claude Code** (Anthropic) and **Codex** (OpenAI) are agent-first tools that run in the terminal, IDE extensions, desktop apps and the cloud, with CI and chat integrations; they suit teams that want to delegate larger tasks and automate around them. All three support repository instructions, MCP or similar integrations, and automated code review. Choose by running a structured trial on your own codebase with your security settings, not by benchmark headlines.",
        ],
      },
      {
        heading: "How the three tools differ in approach",
        body: [
          "The products have converged a lot, and all three now offer local agents, cloud agents and review features. The differences that remain are about where each one is centred.",
          "**Cursor** starts from the editor. It is a VS Code-based editor in which the agent sees what you see, proposes changes inline and works alongside you. Its cloud agents (formerly called background agents) clone your repository into isolated cloud VMs, work on a branch and hand back merge-ready pull requests, with environment controls for secrets and allowed domains.",
          "**Claude Code** starts from the agent. Anthropic describes it as an agentic coding tool that reads your codebase, edits files, runs commands and integrates with your tools, available in the terminal, VS Code and JetBrains, a desktop app and the browser. It is configured through CLAUDE.md files (it can also read AGENTS.md), skills, hooks and MCP servers, and integrates with GitHub Actions, GitLab CI/CD and Slack.",
          "**Codex** also starts from the agent, inside OpenAI's ecosystem. It runs as a CLI, an IDE extension, a cloud product and in the ChatGPT desktop app, with GitHub code review and chat integrations. It uses AGENTS.md for repository instructions and documents sandboxing and approval modes.",
        ],
      },
      {
        heading: "Side-by-side comparison (October 2026)",
        body: [
          "Based on each vendor's official documentation as of October 2026. Features change frequently; confirm details before deciding.",
        ],
        table: {
          headers: ["Criterion", "Claude Code", "Codex", "Cursor"],
          rows: [
            ["Centre of gravity", "Agent across surfaces", "Agent across surfaces", "AI-native editor"],
            ["Surfaces", "Terminal, VS Code, JetBrains, desktop app, web, mobile", "CLI, IDE extension, cloud, ChatGPT desktop app", "Editor, cloud agents"],
            ["Cloud or background work", "Web sessions, routines, background agents", "Codex cloud", "Cloud agents in isolated VMs"],
            ["Repository instructions", "CLAUDE.md; reads AGENTS.md", "AGENTS.md", "Rules; AGENTS.md support"],
            ["Extensibility", "MCP, skills, hooks, subagents, Agent SDK", "MCP, subagents, profiles", "MCP, rules, plugins"],
            ["Execution safety", "Permission modes, OS-level sandbox for shell commands", "Sandboxing and approval modes", "Command approval locally; VM isolation for cloud agents"],
            ["Code review and CI", "GitHub Code Review, GitHub Actions, GitLab CI/CD", "GitHub code review", "Review features in the product"],
            ["Model choice", "Anthropic Claude models", "OpenAI models", "Multiple providers"],
          ],
        },
        callout: {
          type: "note",
          text: "Comparison articles online often contain outdated claims, such as describing Claude Code as terminal-only. Use the vendors' current documentation and your own trial as the source of truth.",
        },
      },
      {
        heading: "What actually matters for a team",
        body: [
          "Individual developers can pick by feel. Teams need to look at criteria that affect everyone:",
        ],
        table: {
          headers: ["Criterion", "Questions to ask"],
          rows: [
            ["Fit with workflow", "Do developers live in an editor, a terminal or both? Do you want background agents producing PRs?"],
            ["Security controls", "Sandboxing, managed permission settings, network restrictions, audit logs, data retention terms"],
            ["Admin and governance", "SSO, central policy, usage visibility, seat management, approved models"],
            ["Repository instructions", "Can one AGENTS.md serve all tools you allow? How are rules shared?"],
            ["Integration", "GitHub or GitLab, CI, issue tracker, chat, MCP servers you need"],
            ["Quality on your code", "Success rate on real tickets, review effort per change, test pass rates"],
            ["Cost", "Seat plus usage under heavy agentic use; predictability; budgets and limits"],
          ],
        },
      },
      {
        heading: "How to run a fair two-week trial",
        body: [
          "Benchmarks change with every model release and rarely reflect your codebase. A short structured trial gives a better answer.",
        ],
        checklist: [
          "**Pick 20–30 real tasks** from your backlog: bug fixes, small features, tests, refactors, upgrades",
          "**Write shared repository instructions** (AGENTS.md) so every tool gets the same context",
          "**Configure security first:** sandbox, permissions, no production secrets (see [[/blogs/ai-coding-agent-security|securing AI coding agents]])",
          "**Split tasks across tools and developers** so no tool gets only the easy ones",
          "**Measure:** task success without major rework, review time, CI pass rate, defects found later, cost",
          "**Collect developer feedback** on workflow fit, not just output quality",
          "**Decide on a primary tool** and an exceptions policy",
        ],
        cta: {
          title: "Want help choosing and rolling out AI coding tools?",
          description: "ZSpace Labs helps engineering teams evaluate coding agents on their own codebase, set up repository instructions and security controls, and measure the impact. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "One tool or several?",
        body: [
          "Many developers use more than one tool, for example an editor-based agent for everyday work and a CLI or cloud agent for larger delegated tasks. That is workable if instructions and controls are shared. AGENTS.md helps: it began as an open format in 2025, is now stewarded by the Agentic AI Foundation under the Linux Foundation, and is read by many agents, including Codex and Cursor, while Claude Code can read it in place of CLAUDE.md.",
          "The cost of variety is governance: each tool has its own settings, data terms and admin console. Most teams settle on one primary tool with approved exceptions.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Claude Code, Codex and Cursor are all capable, and they keep borrowing each other's features. Choose based on how your team works, the controls you need and measured results on your own repositories. Set up security and shared instructions before the trial, measure review effort as well as speed, and revisit the decision every six months. For how coding agents fit a development process, read [[/blogs/ai-coding-agents|AI coding agents]], and for the budget view, [[/blogs/ai-software-development-cost|does AI make software development cheaper?]].",
        ],
      },
    ],
  },
];
