import type { BlogPost } from "./blog-data";

/**
 * Australian AI cluster, part 3: AI automation budgeting for Australian
 * businesses and practical AI governance (privacy, security, responsible
 * adoption). Generic owners linked rather than repeated: llm-cost-optimization,
 * ai-agent-roi, ai-automation-roi, ai-software-development-cost,
 * ai-poc-vs-pilot-vs-production, ai-governance-framework, ai-agent-governance,
 * ai-data-privacy, ai-agent-vendor-assessment, shadow-ai-agents,
 * ai-agent-incident-response, ai-security-business-applications,
 * human-in-the-loop-ai.
 * Sources checked 2026-10-09: Anthropic, OpenAI, Google Gemini and Azure
 * OpenAI pricing and batch documentation (structure only, no prices); AWS,
 * Azure and Google Cloud region lists; OAIC (APP 8 guidelines, small business,
 * commercially available AI products guidance, Notifiable Data Breaches pages,
 * 2025 NDB statistics release, 29 Nov 2024 release on the privacy bill);
 * Federal Register of Legislation (Privacy and Other Legislation Amendment Act
 * 2024, commencement table); Home Affairs ransomware payment reporting
 * factsheet; business.gov.au (R&D Tax Incentive eligibility, Industry Growth
 * Program); ATO (GST registration, R&D Tax Incentive proposed changes, as
 * found by search); DISR/NAIC (Guidance for AI Adoption, National AI Plan, AI
 * Safety Institute, as reported where official pages timed out); Treasury
 * review of AI and the ACL (as reported); HSF Kramer on the tranche 2 draft
 * bill (as reported); ACSC (Essential Eight, questions for managed service
 * providers); AustLII (Copyright Act s196); ABS Characteristics of Australian
 * Business 2024-25; Gartner (as reported); MIT NANDA via Fortune; OWASP Top 10
 * for LLM Applications 2025; NIST AI RMF; Xero and MYOB developer portals.
 * No figure here is ZSpace client data. No Australian price benchmark was
 * found, so no price ranges are given; all AUD figures in the example are
 * labelled illustrative assumptions.
 */

export const auAiPosts3: BlogPost[] = [
  // ------------------------------------------- AI AUTOMATION COST AUSTRALIA
  // Australian budgeting page. Different structure from ai-development-cost-uae:
  // organised around a Build / Connect / Run / Own model, three levels of
  // automation, an Australian trades quote-request example presented by
  // stage, GST and R&D Tax Incentive checks. Generic owners: llm-cost-
  // optimization (model levers), ai-agent-roi (pre-build business case),
  // ai-automation-roi (measurement), ai-poc-vs-pilot-vs-production (stages).
  {
    slug: "ai-automation-cost-australia",
    title: "AI Automation Costs in Australia: What Businesses Should Budget For",
    seoTitle: "AI Automation Cost in Australia: What to Budget For",
    excerpt:
      "No reliable AUD benchmark exists for AI automation, so budget it by component: build, connect, run and own, with formulas and an illustrative trades example.",
    category: "AI & Automation",
    banner: "costdrivers",
    sceneKind: "cost",
    bannerAlt: "A breakdown of AI automation cost drivers grouped into four layers: building the workflow, connecting it to business systems, running it each month and owning it over time",
    date: "2026-10-09",
    readingTime: "19 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["professional-services", "construction-infrastructure", "retail", "healthcare-healthtech", "b2b-enterprise"],
    relatedSlugs: ["ai-agent-roi", "llm-cost-optimization", "ai-poc-vs-pilot-vs-production"],
    faqs: [
      { q: "How much does AI automation cost in Australia?", a: "We found no credible public benchmark for AI automation prices in Australia, so any single range would be a guess. Cost depends on how many systems the automation connects to, the state of your data, request volumes, how much human review you keep and where data must be hosted. Build the budget component by component from your own scope, and ask suppliers to quote against the same written assumptions." },
      { q: "What is usually the biggest cost in a small AI automation project?", a: "In most business projects the largest one-off cost is integration: connecting the AI to the job management system, CRM, inbox, accounting software or document store, and handling errors and edge cases. Over a full year, the people costs of maintenance and human review often outweigh model usage. The model itself is rarely the largest line unless volumes are high or the design uses agents that make many calls per task." },
      { q: "Are AI model fees charged in Australian dollars?", a: "Major model providers price usage per million tokens, with input and output priced separately, and many quote those prices in US dollars. Your AUD cost will therefore move with the exchange rate as well as with usage. Check how your provider or cloud marketplace bills you, include a currency margin in the budget, and record the exchange rate you assumed so later variances can be explained." },
      { q: "Do I need to host my AI automation in Australia?", a: "Not always. AWS, Microsoft Azure and Google Cloud all run Australian regions, but the right choice depends on the data involved, your contracts and your obligations. If the Privacy Act applies to you and personal information goes to an overseas recipient, APP 8 requires reasonable steps to ensure that recipient does not breach the APPs. Classify the data first, then decide which steps need Australian hosting." },
      { q: "Should GST be included in an AI automation budget?", a: "Yes, as a line to check. The ATO sets GST at 10%, and quotes from GST-registered suppliers for taxable supplies will include it. Whether you can claim GST credits, and how GST applies to services or subscriptions from overseas suppliers, depends on your circumstances. Ask suppliers to state whether prices include GST, and confirm the treatment with your accountant or registered tax agent." },
      { q: "Can the R&D Tax Incentive pay for an AI automation project?", a: "It may be relevant only where the work involves genuine experimental activity whose outcome cannot be known in advance, and the program has eligibility rules, including that claimants are companies and generally spend at least AUD 20,000 on R&D in the income year. Routine integration of existing AI tools is unlikely to qualify on its own. Changes have also been announced. Seek advice from a registered tax agent or R&D adviser." },
      { q: "How much contingency should I add to an AI automation budget?", a: "There is no standard percentage. Set contingency by uncertainty: higher where a connected system has a poorly documented API, where your data has never been cleaned, or where accuracy targets have not been tested on real cases. A short discovery and proof of concept reduces uncertainty more cheaply than a large contingency, so fund those first and re-estimate before committing to the full build." },
      { q: "How should I compare quotes from AI automation suppliers?", a: "Give every supplier the same written scope, volumes and accuracy targets. Ask each to separate one-off from recurring costs, show model usage assumptions in tasks and tokens, say who holds the model and cloud accounts, include testing, security and training, and describe maintenance and handover. Compare the cost of the first 12 months of operation, not just the build price, and check who owns the code and prompts." },
    ],
    content: [
      {
        heading: "What should an Australian business budget for AI automation?",
        body: [
          "Budget for four things, not one: building the automation, connecting it to your systems, running it every month and owning it over time. We found no credible Australian price benchmark for AI automation, so the reliable method is to estimate each component from your own scope and volumes, separate one-off from recurring costs, and plan at least the first 12 months of operation.",
          "This guide gives you that method. It explains what drives each cost, how model usage is priced, when Australian hosting matters, a worksheet with formulas, an illustrative AUD example for a trades business automating quote requests, and the questions that make supplier quotes comparable. It does not give price ranges, because we could not find any that were based on more than vendor marketing.",
          "If you are still choosing what to automate, start with [[/blogs/ai-automation-australia|AI automation for Australian businesses]]. For the business case of an agent before you build it, see [[/blogs/ai-agent-roi|how to calculate AI agent ROI]], and for measuring returns once something is live, see [[/blogs/ai-automation-roi|how to measure AI automation ROI]]. Those pages cover the generic depth; this one is about the budget.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "There is no reliable public AUD benchmark for AI automation prices; estimate from components, not from a headline range.",
          "Use four layers: Build (one-off), Connect (one-off plus upkeep), Run (monthly) and Own (monthly people time).",
          "Integrations usually dominate the build; maintenance and human review usually dominate running costs. Model usage is often a small line until volumes or agent loops grow.",
          "Model APIs are priced per million tokens, input and output separately, and Anthropic, OpenAI, Google and Azure OpenAI each document a 50% discount for batch work.",
          "Australian cloud regions exist on AWS, Azure and Google Cloud. If the Privacy Act applies to you, APP 8 governs sending personal information overseas.",
          "GST is 10% (ATO). Ask suppliers to state prices with and without GST, and check overseas supplies with your accountant.",
          "Compare quotes on the cost of the first 12 months of operation, against the same written assumptions.",
        ],
      },
      {
        heading: "Why there is no reliable price list",
        body: [
          "**The research gap.** We looked for government, ABS or independent survey data on what Australian businesses pay for AI implementation and found none. Published ranges come from suppliers, mix very different projects and rarely say what was included. A chatbot answering FAQs and a workflow that writes records into your job management system can both be called AI automation, yet they have little in common on cost.",
          "**Adoption is still uneven.** The ABS reports that 12% of Australian businesses used AI in 2024-25, up from 1% in its previous survey, with use far higher in information, media and telecommunications (38%) than in transport, postal and warehousing (1%). Many owners are budgeting for their first project, without internal reference points, which is another reason to build the estimate from parts.",
          "**Overruns are common enough to plan for.** Gartner predicted in July 2024, as reported, that at least 30% of generative AI projects would be abandoned after proof of concept by the end of 2025, citing poor data quality, inadequate risk controls, escalating costs or unclear business value. The MIT NANDA report widely summarised as saying 95% of pilots fail is preliminary and contested: as reported by Fortune, about 5% of enterprise pilots achieved rapid revenue acceleration, and critics note its narrow, six-month definition of success. Treat both as reasons to stage spending, not as forecasts for your project.",
        ],
      },
      {
        heading: "Three levels of automation, three cost profiles",
        body: [
          "Before estimating anything, decide which level you are buying. The level changes which cost lines exist at all.",
          "**Level 1: AI-assisted staff.** People use an AI tool inside software they already have, such as drafting emails or summarising documents. Costs are mostly subscriptions, a usage policy and training. There is little or no build, but unmanaged tools are a governance cost later; see [[/blogs/shadow-ai-agents|shadow AI agents]].",
          "**Level 2: AI-assisted workflow.** A fixed process with one or more AI steps, such as reading an inbound request, extracting the details and drafting a reply for a person to approve. This is where most small and mid-sized business automation sits. Costs include discovery, integrations, testing, model usage, hosting and review time.",
          "**Level 3: AI agent.** The AI decides which tools to call and in what order to complete a goal. Agents make more model calls per task, need tighter permissions, more evaluation and more monitoring, and therefore cost more to build and run. [[/blogs/ai-agents-australia|AI agents for Australian businesses]] explains when an agent is worth it; many processes are cheaper and safer as a level 2 workflow.",
        ],
        table: {
          headers: ["Level", "Main one-off costs", "Main recurring costs", "Biggest budgeting risk"],
          rows: [
            ["1. AI-assisted staff", "Policy, set-up, training", "Licences per user", "Paying for seats nobody uses; staff pasting personal information into public tools"],
            ["2. AI-assisted workflow", "Discovery, data preparation, integrations, testing", "Model usage, hosting, maintenance, human review", "Under-scoping integrations and exception handling"],
            ["3. AI agent", "All of level 2, plus permission design and deeper evaluation", "Higher model usage, monitoring, review and incident handling", "Model calls per task growing in loops; controls added late"],
          ],
        },
      },
      {
        heading: "The Build, Connect, Run, Own budget model",
        body: [
          "**The answer first:** group every cost into four layers. Build and Connect are mostly one-off and happen before launch. Run and Own recur every month for as long as the automation is used. Most first budgets cover Build in detail and miss most of Own.",
        ],
        code: {
          label: "Four layers of an AI automation budget",
          text: `BEFORE LAUNCH (mostly one-off)
  BUILD    discovery, data preparation, development,
           security set-up, testing, staff training
  CONNECT  integrations with inbox, forms, CRM, job
           management, Xero or MYOB, document stores

AFTER LAUNCH (every month)
  RUN      model and API usage, hosting, logging,
           monitoring tools, software subscriptions
  OWN      maintenance, human review, retraining staff,
           governance and periodic re-testing`,
        },
        callout: {
          type: "tip",
          text: "Write the Own layer first. If you cannot name who will review outputs, who will update prompts and content when your prices or policies change, and how many hours a month that takes, the budget is not finished.",
        },
      },
      {
        heading: "Build and Connect: the one-off cost drivers",
        body: [
          "**Discovery.** Mapping the current process, its volumes, exceptions and owners, and agreeing what success means. A few days here reduces uncertainty in every other line. [[/blogs/ai-implementation-australia|Our AI implementation guide for Australian businesses]] covers how to run this step.",
          "**Data preparation.** Cleaning the price book, product data, FAQs, templates or historical jobs the AI relies on, removing outdated content and building a labelled test set of real cases. It is mostly your staff's time, so it is often left out of supplier quotes and then appears as delay.",
          "**Development.** Building the workflow, prompts, rules, review screens and fallbacks. The cost rises with the number of request types and exceptions, not with the cleverness of the model. AI coding tools can change development effort, but not evenly; [[/blogs/ai-software-development-cost|does AI make software development cheaper?]] looks at the evidence.",
          "**Integrations.** Usually the largest build line. Xero publishes an accounting API and an Australian payroll API using OAuth 2.0, and MYOB publishes its MYOB Business API among others, so the common accounting connections are documented. Job management, practice management and older on-premise systems vary much more. Price each connection separately and ask what happens when a call fails part-way. [[/blogs/api-integration-australia|API integration for Australian businesses]] covers the plumbing in depth.",
          "**Security set-up.** Least-privilege access for every system the AI can touch, secrets management, audit logging and defences against prompt injection. OWASP's Top 10 for LLM Applications 2025 lists risks such as prompt injection, sensitive information disclosure, excessive agency and unbounded consumption; each needs a control and time to test it. Customer-facing forms and portals also need ordinary web security; see [[/blogs/website-security-australia|website security for Australian businesses]]. For businesses already working towards ASD's Essential Eight, which is guidance rather than a legal obligation for private businesses, budget for the automation to fit those controls, such as multi-factor authentication and restricted administrative privileges. See [[/blogs/ai-security-business-applications|AI security for business applications]].",
          "**Testing and evaluation.** Running the automation against your test set, fixing failures, re-testing, then user acceptance testing with the people who will rely on it.",
          "**Staff training and change.** Teaching the team when to trust, check or override the AI, and updating procedures. Automations that nobody adopts are the most expensive kind.",
        ],
      },
      {
        heading: "Run: what model and API usage really costs",
        body: [
          "**Structure, not prices.** We do not quote per-token prices because they change often and differ by model and deployment. The structure is stable, and it is what you need for a budget.",
          "**Per-token pricing.** Anthropic, OpenAI, Google's Gemini API and Azure OpenAI price usage per million tokens, with input tokens (instructions, retrieved documents, conversation history and tool definitions) priced separately from output tokens. Anthropic's documentation notes that tool definitions count as input tokens, and Google's pricing notes that output prices include thinking tokens for reasoning models. Long prompts cost money on every call.",
          "**Batch discounts.** For work that can wait, each of these providers documents a batch option at a 50% discount: Anthropic on both input and output tokens, OpenAI against its synchronous APIs with batches completing within 24 hours, Google on its paid tier, and Azure against Global Standard pricing. Overnight classification of the day's emails or end-of-week report drafting are typical candidates.",
          "**Model choice and routing.** Small models often handle extraction and classification well; larger ones may be needed for complex drafting. Routing each step to the cheapest model that passes your test set is usually the biggest saving. [[/blogs/llm-cost-optimization|Our guide to LLM cost optimisation]] covers caching, routing, context trimming and step budgets in depth.",
          "**Currency.** Many providers quote in US dollars, so AUD costs move with the exchange rate. Record the rate you assumed.",
        ],
        code: {
          label: "Estimating monthly model usage (replace every input)",
          text: `Calls per task   = model calls to finish one task
                   (1-2 for a simple step, more for agents)
Cost per call    = input tokens x input price
                   + output tokens x output price
Cost per task    = calls per task x cost per call
Monthly usage    = cost per task x tasks per month
                   x (1 + retries and testing margin)
Batch saving     = batch-eligible usage x 50%
AUD estimate     = monthly usage in USD x assumed rate`,
        },
        callout: {
          type: "note",
          text: "Measure tokens from a sample of 50 to 100 real tasks during a proof of concept rather than trusting a calculator. Real inputs, such as long email threads and attachments, are usually larger than the examples used in demos.",
        },
      },
      {
        heading: "Run: hosting and when Australian data location matters",
        body: [
          "**The answer first:** Australian hosting is available from all three major clouds, but whether you need it depends on the data each step handles and on your obligations and contracts. Decide per step, not for the whole system.",
          "**Regions.** AWS runs Asia Pacific (Sydney), enabled by default, and Asia Pacific (Melbourne), which requires opt-in. Microsoft Azure runs Australia East (New South Wales) paired with Australia Southeast (Victoria), plus Australia Central and Australia Central 2 in Canberra, where access to Central 2 is restricted. Google Cloud runs australia-southeast1 (Sydney) and australia-southeast2 (Melbourne). Model availability varies by region and deployment type, so confirm that the model you tested is offered where you want to run it, and on what pricing terms.",
          "**APP 8 and overseas processing.** If the Privacy Act applies to your business, the OAIC's APP 8 guidelines say that before disclosing personal information to an overseas recipient you must take reasonable steps to ensure the recipient does not breach the APPs, and you can remain accountable for its handling. The guidelines also explain that using overseas cloud storage can be a use rather than a disclosure where a binding contract limits the provider's handling and you keep effective control. These are summaries, not legal advice; check your position with the OAIC's guidance or an adviser.",
          "**What it means for cost.** Keeping some steps onshore may narrow your choice of models or deployment options, and so change the price per task. Sending only the minimum data a step needs, and removing identifiers where possible, often avoids the question for most steps. [[/blogs/ai-data-privacy|Our AI data privacy guide]] covers those design patterns, and [[/blogs/ai-governance-australia|AI governance for Australian businesses]] covers the wider privacy picture.",
        ],
      },
      {
        heading: "One-off vs recurring costs",
        body: [
          "Use this table as a completeness check. Every row should appear somewhere in your budget, even if the amount is small.",
        ],
        table: {
          headers: ["Cost item", "Paid once", "Keeps costing", "Easy to miss because"],
          rows: [
            ["Discovery", "Yes", "Short reviews before each new phase", "It feels like a sales conversation"],
            ["Data preparation", "Yes", "Content updates when prices or policies change", "It is your staff's time, not an invoice"],
            ["Development", "Yes", "Small changes and new request types", "Scope grows after users see the first version"],
            ["Integrations", "Yes", "Fixes when connected software updates its API", "Each extra system adds testing, not just code"],
            ["Model and API usage", "Testing only", "Every task, every month", "Pilot volumes understate production volumes"],
            ["Hosting and storage", "Set-up", "Monthly", "Logs and backups grow over time"],
            ["Security", "Review and controls", "Patching, access reviews, re-testing", "Treated as a launch task only"],
            ["Testing and evaluation", "Initial test set", "Re-runs when prompts or models change", "Model updates arrive without warning"],
            ["Monitoring", "Dashboards and alerts", "Tool fees and someone checking", "Tools are cheap; attention is not"],
            ["Maintenance", "No", "Monthly", "Rarely written into the quote"],
            ["Human review", "No", "Every reviewed task", "Counted as existing staff time"],
            ["Staff training", "Initial sessions", "New starters and process changes", "Left to whoever built it"],
          ],
        },
      },
      {
        heading: "A budgeting worksheet with formulas",
        body: [
          "Copy this into a spreadsheet. Fill every input from your own scope, supplier estimates and current provider pages. Keep the assumptions next to the numbers so anyone reviewing the budget can challenge them.",
        ],
        code: {
          label: "AI automation budget worksheet (AUD, excluding GST)",
          text: `INPUTS
  day rate        supplier blended rate per person-day
  staff rate      your loaded internal cost per hour
  tasks/month     requests the automation will handle
  contingency %   set by uncertainty, not by habit

BUILD (one-off)
  Discovery       = days x day rate
  Data prep       = supplier days x day rate
                    + staff hours x staff rate
  Development     = days x day rate
  Security        = days x day rate
  Testing         = days x day rate
                    + staff hours x staff rate
  Training        = staff x hours x staff rate

CONNECT (one-off)
  Integrations    = sum of (days per system x day rate)

RUN (per month)
  Model usage     = see model usage formula
  Hosting         = provider estimate for chosen region
  Tools           = monitoring and software fees

OWN (per month)
  Maintenance     = days per month x day rate
  Review          = tasks x share reviewed
                    x minutes each / 60 x staff rate

TOTALS
  One-off         = (Build + Connect) x (1 + contingency %)
  First 12 months = One-off + 12 x (Run + Own)
  Running cost    = (Run + Own) / tasks per month
  per task`,
        },
      },
      {
        heading: "Illustrative example: a trades business automating quote requests",
        body: [
          "**This example is illustrative only.** The business, effort estimates, rates and running costs are assumptions chosen to show the arithmetic. They are not market rates, quotes, benchmarks or client results. Replace every number with your own.",
          "**Scenario.** A hypothetical residential electrical contractor receives around 600 quote requests a month through its website form and a shared inbox. Today an office administrator reads each one, chases missing details and photos, checks the suburb is in the service area and keys the job into the job management system for an estimator. The proposed automation reads each request, extracts job type, address, urgency and photos, asks the customer for anything missing, flags out-of-area jobs, creates a quote-request job and drafts a quote from the price book. An estimator approves or edits every draft before it is sent, and the customer record is synced to Xero. It is a level 2 workflow, not an agent.",
          "**Assumptions.** A blended supplier rate of AUD 1,100 per person-day and an internal staff cost of AUD 55 per hour (both round placeholders for arithmetic, not market rates). Contingency of 15% on supplier work, because the job management system's API is documented but untested. Every draft is reviewed, at three minutes each. Run figures are placeholder monthly amounts; in a real budget the model line would come from the usage formula and current provider pricing. Recurring costs are counted for 12 months after launch. All figures exclude GST.",
        ],
        table: {
          headers: ["Stage and line", "Assumption", "AUD"],
          rows: [
            ["**Stage 1: discovery and proof of concept**", "", ""],
            ["Discovery", "5 days", "5,500"],
            ["Proof of concept on 100 past requests", "6 days", "6,600"],
            ["**Stage 2: build for pilot and launch**", "", ""],
            ["Data preparation", "8 days: price book clean-up, service-area rules, 200-case test set", "8,800"],
            ["Integrations", "16 days: web form, shared inbox, job management API, Xero contacts", "17,600"],
            ["Workflow and estimator review screen", "12 days", "13,200"],
            ["Security and privacy review", "4 days", "4,400"],
            ["Testing and acceptance", "7 days", "7,700"],
            ["Training and procedures", "3 days", "3,300"],
            ["**Supplier subtotal**", "61 days x AUD 1,100", "**67,100**"],
            ["Contingency", "15% of supplier subtotal", "10,065"],
            ["Internal staff time", "40 hours x AUD 55 (estimator and administrator)", "2,200"],
            ["**One-off total**", "", "**79,365**"],
            ["**Monthly running costs**", "", ""],
            ["Model usage", "Placeholder monthly figure", "250"],
            ["Hosting, database and logs", "Placeholder monthly figure", "350"],
            ["Monitoring and integration tools", "Placeholder monthly figure", "350"],
            ["Maintenance", "1.5 days x AUD 1,100", "1,650"],
            ["Estimator review", "600 drafts x 3 minutes = 30 hours x AUD 55", "1,650"],
            ["**Monthly total**", "", "**4,250 (51,000 over 12 months)**"],
            ["**First 12 months of operation**", "79,365 + 51,000", "**130,365**"],
            ["Running cost per request", "4,250 / 600", "about 7.08"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "Under these assumptions, integrations are the largest single build line (about 26% of supplier days), running costs are about 39% of the first 12 months, and maintenance plus review make up about 78% of the monthly bill while model usage is about 6%. Your numbers will differ; the shape is the point. Halving review time as confidence grows would save far more than switching to a cheaper model.",
        },
      },
      {
        heading: "Reading the example: what to do with the numbers",
        body: [
          "**Compare against today's cost, not zero.** The running cost per request means little on its own. Measure how long the current process takes per request, including chasing missing details, and multiply by your staff rate. The AI agent ROI guide linked above shows how to turn that baseline into a business case with kill criteria.",
          "**Release budget by stage.** The example deliberately separates stage 1 from stage 2. Commit to discovery and the proof of concept first, then re-estimate stage 2 with real token counts and real integration findings. [[/blogs/ai-poc-vs-pilot-vs-production|Proof of concept vs pilot vs production]] explains what each stage should prove.",
          "**Plan to reduce review deliberately.** Review is the biggest lever after launch. Track how often estimators change drafts, and only reduce review for request types with a sustained low edit rate. [[/blogs/human-in-the-loop-ai|Our human-in-the-loop guide]] covers thresholds and sampling.",
          "**Budget for governance time.** Someone has to register the automation, check the vendor, set approval rules and plan for incidents. These are hours, not big invoices, but they belong in the Own layer. Our [[/blogs/ai-governance-framework|AI governance framework]], [[/blogs/ai-agent-vendor-assessment|vendor assessment questions]] and [[/blogs/ai-agent-incident-response|incident response guide]] cover each task.",
          "**Add GST at the end.** The ATO sets GST at 10%. Quotes from GST-registered suppliers will include it where the supply is taxable. Whether you can claim GST credits, and how GST applies to services or subscriptions bought from overseas suppliers, depends on your circumstances; confirm with your accountant.",
        ],
      },
      {
        heading: "How to compare AI automation quotes",
        body: [
          "Quotes are only comparable when they answer the same questions. Send every supplier the same scope, volumes, systems list and accuracy target, then check each response against this table.",
        ],
        table: {
          headers: ["Ask the supplier", "Why it matters", "Warning sign"],
          rows: [
            ["Which costs are one-off and which recur?", "Year-one cost can be much higher than the build price", "A single fixed price with no running costs"],
            ["What usage did you assume, in tasks and tokens?", "Model costs scale with volume and prompt size", "Usage described as negligible without numbers"],
            ["Whose accounts hold the model, cloud and integration tools?", "Control, billing visibility and exit", "Everything runs on the supplier's accounts with no transfer plan"],
            ["How will you test accuracy before launch?", "Testing is often the first thing cut", "No test set or acceptance criteria"],
            ["Where will each type of data be processed and stored?", "Privacy obligations and APP 8", "Unable to name regions or sub-processors"],
            ["What does maintenance include, and at what cost?", "Prompts, content and integrations need upkeep", "Maintenance excluded or undefined"],
            ["Who owns the code, prompts and configuration?", "Contractor copyright generally needs a written assignment", "No IP clause in the contract"],
            ["Are prices shown with and without GST?", "Budget accuracy", "GST treatment not stated"],
          ],
        },
        callout: {
          type: "note",
          text: "Under section 196(3) of the Copyright Act 1968, an assignment of copyright has no effect unless it is in writing and signed by or on behalf of the assignor. If you want to own the code and configuration a supplier writes, make sure the contract says so, and seek legal advice on the wording.",
        },
      },
      {
        heading: "Grants and tax incentives: check, do not assume",
        body: [
          "**R&D Tax Incentive.** It may be relevant where a project involves genuine experimental activity whose outcome cannot be known in advance. According to business.gov.au, it is available to eligible companies, and R&D expenditure generally must be at least AUD 20,000 in the income year, with activities registered. Deploying and integrating existing AI tools in a standard way is unlikely to qualify on its own. The Government has also announced changes that business.gov.au says will start from 1 July 2028; they are proposed, not yet law. Seek advice from a registered tax agent or R&D adviser before counting on any benefit.",
          "**Industry Growth Program.** As at 9 October 2026, business.gov.au states that the program is paused to new applications.",
          "**Our view.** Budget the project so it stands on its own merits. Treat any incentive as a possible upside to confirm with an adviser, not as part of the funding plan.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "**Budgeting from a headline range.** Ranges from other projects say little about your systems, data and volumes.",
          "**Stopping at launch.** In the illustrative example, running costs are about 39% of the first 12 months.",
          "**Leaving out internal time.** Data preparation, testing and review are mostly your staff's hours.",
          "**Buying an agent when a workflow would do.** Agents cost more per task and need more controls.",
          "**Assuming offshore processing is fine, or that onshore is always required.** Classify the data and check APP 8.",
          "**Ignoring currency.** Many model prices are quoted in US dollars.",
          "**No written IP assignment.** Contractor copyright does not transfer without one.",
          "**Comparing quotes on build price alone.** Compare the first 12 months against the same assumptions.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Model pricing structure (no prices quoted): [[https://platform.claude.com/docs/en/about-claude/pricing|Anthropic pricing]]; [[https://developers.openai.com/api/docs/guides/batch|OpenAI Batch API]]; [[https://ai.google.dev/gemini-api/docs/pricing|Google Gemini API pricing]]; [[https://azure.microsoft.com/en-us/pricing/details/cognitive-services/openai-service/|Azure OpenAI pricing]].",
          "Cloud regions and privacy: [[https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html|AWS Regions]]; [[https://learn.microsoft.com/en-us/azure/reliability/regions-list|Azure regions list]]; [[https://docs.cloud.google.com/compute/docs/regions-zones|Google Cloud regions and zones]]; [[https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information|OAIC APP 8 guidelines]].",
          "Integrations and security: [[https://developer.xero.com/documentation/|Xero developer documentation]]; [[https://developer.myob.com/|MYOB developer portal]]; [[https://genai.owasp.org/llm-top-10/|OWASP Top 10 for LLM Applications 2025]]; [[https://www.cyber.gov.au/sites/default/files/2023-11/PROTECT%20-%20Essential%20Eight%20Maturity%20Model%20(November%202023).pdf|ASD Essential Eight Maturity Model]].",
          "Tax and programs: [[https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/registering-for-gst|ATO: registering for GST]]; [[https://business.gov.au/grants-and-programs/research-and-development-tax-incentive/check-if-you-are-eligible-for-the-randd-tax-incentive|business.gov.au: R&D Tax Incentive eligibility]]; [[https://www.ato.gov.au/about-ato/new-legislation/in-detail/businesses/tax-reform-better-targeting-the-research-and-development-tax-incentive|ATO: proposed R&D Tax Incentive changes]]; [[https://business.gov.au/grants-and-programs/industry-growth-program|business.gov.au: Industry Growth Program]]; [[https://www6.austlii.edu.au/au/legis/cth/consol_act/ca1968133/s196.html|Copyright Act 1968 s196 (AustLII)]].",
          "Context: [[https://www.abs.gov.au/statistics/industry/technology-and-innovation/characteristics-australian-business/latest-release|ABS: Characteristics of Australian Business 2024-25]]; [[https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025|Gartner prediction on generative AI projects (as reported)]]; [[https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/|Fortune on the MIT NANDA report]].",
          "Provider prices, region availability and program status change often; check current pages before budgeting. The worked example uses assumptions, not market rates or client data. Nothing here is tax, legal or financial advice.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "There is no honest single figure for what AI automation costs in Australia, but there is an honest way to budget it. Choose the level of automation, list every cost under Build, Connect, Run and Own, estimate each with a formula and your own volumes, decide where each type of data must be processed, add GST and contingency, and release money stage by stage. Then make suppliers quote against the same assumptions and compare the first 12 months, not the build price.",
          "If the automation will touch customer data, settle the governance questions before you sign: [[/blogs/ai-governance-australia|our guide to AI governance for Australian businesses]] covers privacy, security and staff policies. For customer-facing use cases, see [[/blogs/ai-customer-service-australia|AI customer service for Australian businesses]], and for larger builds, [[/blogs/custom-software-development-australia|custom software development in Australia]] or the wider [[/blogs/digital-product-development-australia|digital product development guide]].",
        ],
        cta: {
          title: "Want a line-by-line estimate you can check?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/ai-automation|AI automation]] and [[/services/website-development|web applications and integrations]]. India is 4.5 hours behind AEST (5.5 hours during AEDT), which leaves a workable overlap. If useful, we can walk through your scope and write down every assumption behind the estimate.",
        },
      },
    ],
  },

  // ----------------------------------------------- AI GOVERNANCE AUSTRALIA
  // Australian governance page. Distinguishes existing obligations, commenced
  // or commencing reforms, and proposals or voluntary guidance; maps APPs to
  // AI controls; starter kit. Generic owners: ai-governance-framework,
  // ai-agent-governance, ai-data-privacy, ai-agent-vendor-assessment,
  // shadow-ai-agents, ai-agent-incident-response,
  // ai-security-business-applications, human-in-the-loop-ai.
  {
    slug: "ai-governance-australia",
    title: "AI Governance for Australian Businesses: Privacy, Security and Responsible Adoption",
    seoTitle: "AI Governance in Australia: A Practical Business Guide",
    excerpt:
      "How Australian businesses can govern AI: what is law, what is commencing and what is voluntary, plus privacy, security, staff policy and a starter kit.",
    category: "AI & Automation",
    banner: "framework",
    sceneKind: "security",
    bannerAlt: "A governance framework for business AI use, showing a register of AI uses, risk assessment, vendor checks, human oversight, monitoring and incident response connected in a review loop",
    date: "2026-10-09",
    readingTime: "18 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["professional-services", "healthcare-healthtech", "fintech", "b2b-enterprise", "retail"],
    relatedSlugs: ["ai-governance-framework", "ai-data-privacy", "ai-agent-governance"],
    faqs: [
      { q: "Is there an AI law in Australia?", a: "Not an AI-specific law for private businesses, as at October 2026. The Government's National AI Plan of December 2025 did not proceed with the proposed mandatory guardrails at this time, as reported, and relies on existing laws instead. Your AI use is still governed by the Privacy Act, the Australian Consumer Law, the Notifiable Data Breaches scheme, cyber security reporting rules, workplace and anti-discrimination laws, and sector rules." },
      { q: "Does the Privacy Act apply to my small business's use of AI?", a: "It depends. The OAIC says most businesses with annual turnover of AUD 3 million or less are not covered, but some are covered regardless of turnover, including health service providers, businesses that trade in personal information and Commonwealth contracted service providers. From 1 July 2026, many newly regulated AML/CTF businesses are covered for AML/CTF-related handling. Check the OAIC's small business guidance or ask an adviser." },
      { q: "What changes on 10 December 2026?", a: "Under the Privacy and Other Legislation Amendment Act 2024, the automated decision-making transparency amendments commence on 10 December 2026. Privacy policies of covered entities will need to describe the kinds of personal information used, and the kinds of decisions made, where a computer program makes or substantially contributes to decisions that could significantly affect individuals. The OAIC must also register a Children's Online Privacy Code within 24 months of 10 December 2024." },
      { q: "Are the mandatory AI guardrails law in Australia?", a: "No. The Government consulted on ten proposed mandatory guardrails for AI in high-risk settings in September 2024. Under the National AI Plan released in December 2025, it decided, as reported, not to proceed with them at this time, preferring to rely on and clarify existing laws while leaving room for targeted regulation later. Treat any article describing them as current law as out of date." },
      { q: "What is the Guidance for AI Adoption?", a: "It is voluntary national guidance from the National AI Centre, published in October 2025, which updates and condenses the Voluntary AI Safety Standard of September 2024 from ten guardrails to six essential practices: deciding who is accountable, understanding impacts, measuring and managing risks, sharing essential information, testing and monitoring, and maintaining human control. It comes with templates including an AI policy and an AI register." },
      { q: "Can staff put customer information into public AI tools?", a: "The OAIC recommends that organisations do not enter personal information, and particularly sensitive information, into publicly available generative AI tools, because of the significant and complex privacy risks. A sensible staff policy names the approved tools, says which data classes each may receive, requires business accounts with appropriate data terms, and gives staff a quick way to ask before using something new." },
      { q: "Who owns content created with AI?", a: "It is not fully settled in Australia. Whether, and when, material generated with AI attracts copyright protection has been under consideration by the Government's Copyright and AI Reference Group, as reported. Do not assume you own exclusive rights in purely AI-generated output, check your AI provider's terms, and get legal advice for material that matters commercially. Code written by contractors needs a written assignment to transfer copyright." },
      { q: "Do we have to report an AI incident?", a: "There is no AI-specific reporting duty, but existing ones apply. If an incident involves personal information and is likely to result in serious harm, the Notifiable Data Breaches scheme requires covered organisations to notify affected individuals and the OAIC. Businesses with turnover over AUD 3 million that make a ransomware or cyber extortion payment must report it to ASD within 72 hours. Contracts and sector rules may add more." },
    ],
    content: [
      {
        heading: "What does AI governance mean for an Australian business?",
        body: [
          "AI governance is the set of decisions, records and controls that keep your use of AI lawful, secure and accountable. In Australia there is no AI-specific law for private businesses as at October 2026, so governance means applying existing obligations, mainly privacy, consumer law, data breach and cyber reporting rules, to AI, preparing for reforms with fixed commencement dates, and using voluntary national guidance where it helps.",
          "This guide separates those three categories carefully, because much online commentary blurs them. It then walks through the controls that matter in practice: data handling, access, vendor checks, human oversight, output verification, security, monitoring, incident handling, staff policies and intellectual property. It ends with a starter kit you can adapt.",
          "Two cautions. This is general information, not legal advice; for your situation, use the OAIC's guidance, the ACCC or a lawyer. And no checklist, including ours, can ensure compliance. A checklist helps you ask the right questions; the answers depend on your data, systems, contracts and sector. For the generic framework behind this page, see [[/blogs/ai-governance-framework|our AI governance framework guide]], which covers roles, risk classification and international standards in depth. If you are planning a first project, [[/blogs/ai-implementation-australia|our AI implementation guide for Australian businesses]] shows where governance fits in the sequence.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "No AI-specific law applies to private businesses as at October 2026; existing laws apply to AI use.",
          "The proposed mandatory guardrails are not law: under the December 2025 National AI Plan the Government did not proceed with them at this time (as reported).",
          "Fixed dates to plan for: automated decision-making transparency in privacy policies from 10 December 2026, and a Children's Online Privacy Code due to be registered by the same date.",
          "Many small businesses are outside the Privacy Act, but not all: health service providers, businesses trading in personal information and others are covered regardless of turnover.",
          "The OAIC recommends not entering personal information, particularly sensitive information, into publicly available generative AI tools.",
          "Existing reporting duties cover AI incidents too: Notifiable Data Breaches, and ransomware payment reporting within 72 hours for businesses over AUD 3 million.",
          "The voluntary Guidance for AI Adoption (October 2025) gives six practices and templates; use them as a structure, not as a compliance certificate.",
        ],
      },
      {
        heading: "Where the rules stand: existing law, reforms and voluntary guidance",
        body: [
          "**The answer first:** sort every rule you hear about into one of three columns before acting on it. Existing obligations apply now. Commenced or commencing reforms are enacted, with dates. Proposals and voluntary guidance are not legal obligations, although they show where expectations are heading and can be useful structure.",
        ],
        table: {
          headers: ["Existing obligations (in force)", "Commenced or commencing reforms (enacted)", "Proposals and voluntary guidance (not law)"],
          rows: [
            [
              "**Privacy Act 1988 and the 13 APPs** for APP entities: generally businesses over AUD 3 million turnover, plus some smaller businesses regardless of turnover (OAIC)",
              "**Statutory tort for serious invasions of privacy:** commenced 10 June 2025 (Federal Register commencement table)",
              "**Mandatory guardrails for high-risk AI:** proposed September 2024; not proceeding at this time under the National AI Plan, December 2025 (as reported)",
            ],
            [
              "**Notifiable Data Breaches scheme:** notify affected individuals and the OAIC when a breach is likely to result in serious harm",
              "**Automated decision-making transparency in privacy policies:** commences 10 December 2026",
              "**Guidance for AI Adoption (AI6):** voluntary, October 2025, condensing the 2024 Voluntary AI Safety Standard into six practices",
            ],
            [
              "**Australian Consumer Law:** misleading or deceptive conduct and false representations apply to what a chatbot tells customers",
              "**Children's Online Privacy Code:** OAIC must register it within 24 months of 10 December 2024; an exposure draft was released in 2026 (as reported)",
              "**Australian AI Safety Institute:** announced November 2025 with AUD 29.9 million; advisory, with no enforcement powers (as reported)",
            ],
            [
              "**Cyber Security Act 2024 ransomware payment reporting:** active from 30 May 2025 for businesses over AUD 3 million turnover and critical infrastructure entities (Home Affairs)",
              "**AML/CTF tranche 2:** from 1 July 2026, newly regulated small reporting entities are covered by the Privacy Act for AML/CTF-related handling (OAIC; secondary summaries)",
              "**Privacy Act tranche 2:** a draft bill released for consultation in 2026, as reported; it does not address the small business exemption, which still stands",
            ],
            [
              "**Sector and other rules:** health, financial services, critical infrastructure (SOCI Act), workplace, anti-discrimination and the Spam Act",
              "**ACCC penalty increases:** higher maximum corporate penalties commenced 28 March 2026 (as summarised by law firms)",
              "**International frameworks:** NIST AI RMF and ISO/IEC 42001 are voluntary and useful for structure",
            ],
          ],
        },
        callout: {
          type: "note",
          text: "Dates in the middle column come from the commencement table of the Privacy and Other Legislation Amendment Act 2024 on the Federal Register of Legislation (Royal Assent 10 December 2024). Items marked 'as reported' were checked against secondary sources because the official pages could not be loaded; confirm them on industry.gov.au, ai.gov.au or ag.gov.au before relying on them.",
        },
      },
      {
        heading: "The small business exemption, and why it is not a free pass",
        body: [
          "**What the OAIC says.** Most small businesses, defined as those with annual turnover of AUD 3 million or less, are not covered by the Privacy Act. But some are covered regardless of turnover, including health service providers, businesses that trade in personal information, Commonwealth contracted service providers, credit reporting bodies, AML/CTF reporting entities, businesses related to a covered business, and businesses that opt in.",
          "**Why it matters for AI.** A small clinic using an AI scribe, or a small business selling enriched customer lists, may be fully covered. From 1 July 2026, many newly regulated AML/CTF businesses, such as real estate agents, lawyers, conveyancers and accountants, are covered for AML/CTF-related handling, according to OAIC and law-firm summaries.",
          "**Why exempt businesses should still govern AI.** The exemption does not cover the Australian Consumer Law, the Spam Act, workplace law or your contracts. Larger customers increasingly ask suppliers about data handling in due diligence. And a data incident still damages trust whether or not a law requires notification. Treating the APPs as good practice is usually cheaper than retrofitting them later.",
        ],
      },
      {
        heading: "A working model: the AI governance loop",
        body: [
          "Governance fails when it is a document nobody uses. We suggest a loop of seven steps that every AI use passes through, scaled to its risk. A staff member using an approved writing assistant passes through it in minutes; an automation that changes customer records takes weeks.",
        ],
        code: {
          label: "The AI governance loop",
          text: `1 REGISTER   record the AI use, owner, data, vendor
      |
2 ASSESS     privacy, security, consumer and
      |      operational risk; rate low/medium/high
3 APPROVE    named approver, conditions attached
      |
4 CONTROL    access, data minimisation, human review,
      |      output checks, logging
5 VERIFY     test before launch and after changes
      |
6 MONITOR    quality, incidents, drift, cost
      |
7 REVIEW     on schedule or after an incident,
      |      then back to 1 with changes
      +--------------------------------------> 1`,
        },
        callout: {
          type: "note",
          text: "The loop mirrors the six practices in the voluntary Guidance for AI Adoption: accountability (register and approve), understanding impacts and managing risks (assess), sharing information (disclosure in the controls), testing and monitoring, and maintaining human control. The generic framework guide linked above adds roles and risk tiers.",
        },
      },
      {
        heading: "Data handling: mapping the APPs to AI controls",
        body: [
          "The OAIC's October 2024 guidance on commercially available AI products is the clearest official starting point. Its top takeaways include that privacy obligations apply to personal information input into an AI system and to outputs that contain personal information; that businesses should update privacy policies and notices and identify public-facing tools such as chatbots as AI; that generating or inferring personal information with AI is a collection under APP 3; and that use and disclosure should generally be limited to the primary purpose under APP 6. The table maps these to practical controls for APP entities.",
        ],
        table: {
          headers: ["APP", "What it means for AI use", "Practical control"],
          rows: [
            ["APP 1: open and transparent management", "Privacy policy must reflect AI use; from 10 December 2026, also certain automated decisions", "Review the policy whenever a new AI use is registered"],
            ["APP 3: collection", "AI-generated or inferred personal information counts as a collection", "Only generate inferences you would be entitled to collect; avoid sensitive inferences"],
            ["APP 5: notification", "People should know when and how AI is used with their information", "Label chatbots as AI; update collection notices"],
            ["APP 6: use and disclosure", "Inputs are generally limited to the primary purpose unless consent or a reasonably expected secondary use applies", "Check vendor terms on using your inputs for training"],
            ["APP 8: cross-border disclosure", "Reasonable steps before disclosing personal information overseas; you can remain accountable", "Record processing regions and sub-processors for each vendor"],
            ["APP 10: quality", "AI outputs can be inaccurate or out of date", "Verify outputs before they are relied on or stored"],
            ["APP 11: security", "Reasonable steps to protect information, including in prompts and logs", "Access control, retention limits, log redaction"],
            ["APPs 12 and 13: access and correction", "People can ask for and correct their information", "Know where AI-held copies and logs are kept"],
          ],
        },
        callout: {
          type: "tip",
          text: "The simplest control with the biggest effect is data minimisation: send each AI step only the fields it needs, and strip identifiers where the task does not require them. Our [[/blogs/ai-data-privacy|AI data privacy guide]] covers redaction, retention and privacy-aware architecture in depth.",
        },
      },
      {
        heading: "Access control and security",
        body: [
          "**Least privilege, by default.** An AI tool or agent should have its own identity and only the permissions its task needs: read-only where reading is enough, no access to systems outside its scope, and no shared administrator credentials. OWASP's Top 10 for LLM Applications 2025 calls the failure mode excessive agency, alongside prompt injection, sensitive information disclosure, improper output handling and unbounded consumption.",
          "**Treat inputs as untrusted.** Emails, documents and web pages an AI reads can contain instructions designed to manipulate it. Do not let content the AI reads decide what the AI is allowed to do; enforce permissions in your systems, not in the prompt.",
          "**Build on existing security basics.** ASD's Essential Eight, which includes multi-factor authentication, restricting administrative privileges, patching and regular backups, is guidance rather than a legal obligation for private businesses, but it is a sound baseline for the systems AI connects to. For websites and customer portals, see [[/blogs/website-security-australia|website security for Australian businesses]].",
          "**Log what the AI does.** Record which user or process triggered each action, what data was accessed, which tools were called and what changed. Without logs you cannot investigate an incident or answer an access request. [[/blogs/ai-security-business-applications|Our AI security guide]] covers threat modelling, tool permissions and runtime monitoring in depth, and [[/blogs/ai-agent-governance|AI agent governance]] covers controls specific to agents. If you are weighing whether an agent is needed at all, see [[/blogs/ai-agents-australia|AI agents for Australian businesses]].",
        ],
      },
      {
        heading: "Vendor assessment: questions before you sign",
        body: [
          "Most Australian businesses buy AI rather than build models, so the vendor's practices become yours. Ask in writing, keep the answers in your AI register, and repeat the check when the vendor changes its terms or models. Where the AI connects to your own systems, the integration itself needs the same scrutiny; [[/blogs/api-integration-australia|API integration for Australian businesses]] covers authentication and error handling.",
        ],
        checklist: [
          "**Data use:** are our inputs and outputs used to train or improve models, and can we opt out by contract, not just by a setting?",
          "**Location:** in which countries are data stored and processed, including sub-processors? What does that mean for APP 8?",
          "**Retention:** how long are prompts, files and logs kept, and can we delete them?",
          "**Security:** which controls are in place, how is administrator access managed, and is there independent assurance we can review?",
          "**Access:** can we enforce single sign-on, multi-factor authentication and role-based permissions?",
          "**Incidents:** how and how quickly will you tell us about a breach affecting our data?",
          "**Change:** how are model changes announced, and can we test before they reach production?",
          "**Exit:** can we export our data, configuration and prompts, and what happens to our data when we leave?",
        ],
        callout: {
          type: "note",
          text: "For outsourced IT, the ACSC suggests asking managed service providers whether they implement better-practice security such as the Essential Eight, administer systems securely, monitor activity, assess their systems regularly and are prepared to respond to incidents. The same questions work for AI vendors. Our [[/blogs/ai-agent-vendor-assessment|AI agent vendor assessment guide]] has a fuller question set.",
        },
      },
      {
        heading: "Human oversight and output verification",
        body: [
          "**Decide where a person must approve.** Require human approval before AI output is sent to customers in high-impact situations, changes financial or customer records, or affects someone's access to a service, employment or credit. The voluntary Guidance for AI Adoption lists maintaining human control as one of its six practices. [[/blogs/human-in-the-loop-ai|Our human-in-the-loop guide]] covers approval thresholds and review interfaces.",
          "**Prepare for automated decision transparency.** From 10 December 2026, covered entities' privacy policies must describe the kinds of personal information used, and the kinds of decisions made, where a computer program makes or does something substantially and directly related to making a decision that could reasonably be expected to significantly affect an individual's rights or interests. The amendment applies to decisions made after it commences. Your AI register is the natural place to identify which uses are in scope; confirm the analysis with an adviser.",
          "**Verify outputs that customers rely on.** The Australian Consumer Law's prohibitions on misleading or deceptive conduct and false or misleading representations apply to what a business tells customers, including through a chatbot. A chatbot that misstates refund or warranty rights is your statement, not the software's. Treasury's October 2025 review of AI and the Australian Consumer Law found the ACL broadly capable of handling AI-enabled goods and services, as reported, so expect existing rules to be applied rather than new AI-specific ones. Ground customer-facing answers in approved content, test them against real questions, and route uncertain cases to a person. [[/blogs/ai-customer-service-australia|AI customer service for Australian businesses]] covers this in detail.",
          "**Sample, even when confidence is high.** Review a regular sample of outputs that were not escalated. Errors that never trigger a review are the ones that drift unnoticed.",
        ],
      },
      {
        heading: "Monitoring and incident handling",
        body: [
          "**Monitor quality, not just uptime.** Track accuracy on a fixed test set, escalation and correction rates, complaints, unusual data access and cost per task. Set thresholds that trigger a review.",
          "**Know the reporting duties that already apply.** The Notifiable Data Breaches scheme requires covered organisations to notify affected individuals and the OAIC when a data breach is likely to result in serious harm; the OAIC says an organisation that suspects an eligible breach must quickly assess it. An AI tool exposing personal information to the wrong person is a data breach like any other. The OAIC received 1,205 notifications in 2025, the highest since the scheme began, with malicious or criminal attacks the leading cause.",
          "**Ransomware payments.** Under the Cyber Security Act 2024, businesses with annual turnover over AUD 3 million (per Home Affairs), and responsible entities for critical infrastructure assets, must report a ransomware or cyber extortion payment to ASD within 72 hours of making it or becoming aware of it. No report is required if a demand is made but nothing is paid.",
          "**Plan the AI-specific steps.** Your incident plan should say who can switch off an AI feature or revoke an agent's credentials, how to find every action it took during the incident window, and how to reverse them. [[/blogs/ai-agent-incident-response|Our AI agent incident response guide]] walks through detection, containment and root-cause analysis.",
        ],
      },
      {
        heading: "Staff policies: an acceptable-use policy outline",
        body: [
          "Most early AI risk comes from well-meaning staff using tools nobody approved. Bans tend to push use out of sight; a short, specific policy works better. The Guidance for AI Adoption includes an AI policy template you can adapt. Whatever template you use, cover these points in plain language.",
        ],
        checklist: [
          "**Purpose and scope:** which staff, contractors and tools the policy covers.",
          "**Approved tools:** a list, with the business account each must be used through, and how to request a new tool.",
          "**Data rules:** which data classes may go into which tools; no personal or sensitive information in public generative AI tools, consistent with the OAIC's recommendation.",
          "**Verification:** staff are responsible for checking AI output before relying on it, sending it or publishing it.",
          "**Disclosure:** when to tell customers or colleagues that AI was used, including labelling chatbots.",
          "**Prohibited uses:** for example, decisions about individuals without review, or generating content that imitates real people.",
          "**Intellectual property:** check provider terms; do not paste in confidential third-party material.",
          "**Incidents:** how to report a mistake or suspected data exposure, without blame, and quickly.",
          "**Ownership and review:** who owns the policy and when it is next reviewed.",
        ],
        callout: {
          type: "tip",
          text: "Pair the policy with discovery. Ask teams which AI tools and automations they already use, and register them rather than penalising them. [[/blogs/shadow-ai-agents|Our guide to shadow AI agents]] explains how to find unapproved automations without driving them underground.",
        },
      },
      {
        heading: "Intellectual property: proceed with caution",
        body: [
          "**Copyright in AI outputs is unsettled.** Whether, and when, material generated with AI attracts copyright protection in Australia is not settled; it was among the questions put to the Government's Copyright and AI Reference Group, established in December 2023, as reported. Until it is clarified, do not assume your business holds exclusive rights in purely AI-generated text, images or code, and keep a record of the human contribution to work that matters commercially.",
          "**Contractor work needs a written assignment.** Under section 196(3) of the Copyright Act 1968, an assignment of copyright does not have effect unless it is in writing and signed by or on behalf of the assignor. Law-firm and Business Victoria guidance notes that a business paying a non-employee developer does not automatically own the code. If a supplier builds your AI automation, the contract should say who owns the code, prompts, configuration and evaluation data. [[/blogs/custom-software-development-australia|Our guide to custom software development in Australia]] covers contracts and ownership more broadly.",
          "**Check provider terms and inputs.** Read what your AI provider's terms say about ownership of outputs and use of your inputs, and do not feed in material you are not licensed to use. None of this is legal advice; get it for anything you intend to sell, licence or rely on as an asset.",
        ],
      },
      {
        heading: "An AI governance starter kit",
        body: [
          "**The answer first:** five artefacts cover most of what a small or mid-sized business needs to start. Keep them short, give each an owner, and review them on a schedule. The Guidance for AI Adoption offers templates for a policy and a register that can be adapted.",
        ],
        table: {
          headers: ["Artefact", "What it contains", "Owner", "Review cadence"],
          rows: [
            ["AI acceptable-use policy", "Approved tools, data rules, verification, disclosure, incident reporting", "Business owner or operations lead", "Every six months, and when a major tool is added"],
            ["Register of AI uses", "Each use: purpose, owner, vendor, data classes, processing regions, risk rating, controls, automated-decision flag", "Named register owner", "Monthly additions; full review quarterly"],
            ["Risk assessment template", "Privacy (APPs), consumer law, security, operational and reputational risks; rating; required controls", "Use owner, with privacy or IT input", "Before launch and after significant change"],
            ["Vendor questionnaire", "Data use, location, retention, security, access, incidents, change, exit", "Procurement or IT", "At onboarding and on renewal or terms change"],
            ["Incident and review log", "AI incidents, near misses, complaints, decisions taken, follow-ups", "Operations lead", "Reviewed at each governance meeting"],
          ],
        },
        checklist: [
          "**Week 1:** appoint an accountable owner and start the register with the AI tools already in use.",
          "**Week 2:** publish the acceptable-use policy and a list of approved tools.",
          "**Week 3:** rate each registered use low, medium or high risk and assess the high-risk ones first.",
          "**Week 4:** send the vendor questionnaire to providers of high-risk uses, and check your privacy policy and collection notices.",
          "**Ongoing:** a short quarterly governance review, plus an extra review before 10 December 2026 for any use that may involve significant automated decisions.",
        ],
        callout: {
          type: "takeaway",
          text: "A starter kit does not make you compliant. It gives you a record of what AI you use, why, with what data and under whose authority, which is what you will need when a customer, regulator or adviser asks. For businesses that want a formal management system later, [[/blogs/iso-42001-ai-management-system|ISO/IEC 42001]] and the voluntary NIST AI Risk Management Framework provide fuller structures.",
        },
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "**Treating proposals as law, or guidance as a certificate.** Mandatory guardrails are not law; the Guidance for AI Adoption is voluntary.",
          "**Assuming the small business exemption covers everyone under AUD 3 million.** Health providers and several other categories are covered regardless of turnover.",
          "**Governing models but not data.** Most risk comes from what you send to AI and where it goes.",
          "**Letting prompts enforce permissions.** Enforce access in systems, not in instructions to the model.",
          "**No owner for each AI use.** Unowned tools are never reviewed.",
          "**Forgetting existing reporting duties.** AI incidents can trigger Notifiable Data Breaches and other obligations.",
          "**Leaving the 10 December 2026 change until December.** Identifying automated decisions takes time.",
          "**Assuming you own AI output.** Copyright in AI-generated material is unsettled; contractor work needs a written assignment.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Privacy: [[https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products|OAIC guidance on privacy and commercially available AI products]]; [[https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business|OAIC small business guidance]]; [[https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information|OAIC APP 8 guidelines]]; [[https://www.legislation.gov.au/C2024A00128/asmade|Privacy and Other Legislation Amendment Act 2024 (Federal Register of Legislation)]]; [[https://www.oaic.gov.au/news/media-centre/pasing-of-bill-a-significant-step-for-australias-privacy-law|OAIC on the passage of the privacy bill]]; [[https://www.oaic.gov.au/engage-with-us/consultations/draft-childrens-online-privacy-code-consultation-for-industry,-civil-society,-academia|OAIC Children's Online Privacy Code consultation]]; [[https://www.hsfkramer.com/insights/2026-09/the-draft-tranche-2-privacy-act-reforms-whats-there-whats-new-and-whats-missing|HSF Kramer on the draft tranche 2 reforms (as reported)]].",
          "Breaches and cyber: [[https://www.oaic.gov.au/privacy/notifiable-data-breaches/about-the-notifiable-data-breaches-scheme|OAIC: about the Notifiable Data Breaches scheme]]; [[https://www.oaic.gov.au/news/media-centre/data-breach-notifications-increase-to-all-time-high-in-2025,-new-ndb-stats-show|OAIC 2025 NDB statistics]]; [[https://www.homeaffairs.gov.au/cyber-security-subsite/files/factsheet-ransomware-payment-reporting.pdf|Home Affairs ransomware payment reporting factsheet]]; [[https://www.cyber.gov.au/business-government/supplier-cyber-risk-management/managed-service-providers/questions-to-ask-managed-service-providers|ACSC questions to ask managed service providers]]; [[https://www.cyber.gov.au/sites/default/files/2023-11/PROTECT%20-%20Essential%20Eight%20Maturity%20Model%20(November%202023).pdf|ASD Essential Eight Maturity Model]].",
          "AI policy (official pages timed out; checked via search and secondary coverage): [[https://www.industry.gov.au/publications/guidance-ai-adoption|Guidance for AI Adoption (DISR)]]; [[https://www.industry.gov.au/sites/default/files/2025-12/national-ai-plan.pdf|National AI Plan (DISR)]]; [[https://www.minister.industry.gov.au/ministers/timayres/media-releases/establishment-australian-ai-safety-institute|Ministerial release on the AI Safety Institute]]; [[https://piperalderman.com.au/insight/australia-now-has-a-national-ai-plan-now-what/|Piper Alderman on the National AI Plan]]; [[https://treasury.gov.au/sites/default/files/2025-10/p2025-702329-fr.pdf|Treasury review of AI and the Australian Consumer Law]].",
          "Security frameworks and IP: [[https://genai.owasp.org/llm-top-10/|OWASP Top 10 for LLM Applications 2025]]; [[https://www.nist.gov/itl/ai-risk-management-framework|NIST AI Risk Management Framework]]; [[https://www6.austlii.edu.au/au/legis/cth/consol_act/ca1968133/s196.html|Copyright Act 1968 s196 (AustLII)]]; [[https://hub.business.vic.gov.au/legal/4-intellectual-property-considerations-for-software-ownership/|Business Victoria on software ownership]]; [[https://www.cyberdaily.au/digital-transformation/9899-albanese-government-to-address-ai-copyright-issues-with-new-reference-group|Cyber Daily on the Copyright and AI Reference Group]].",
          "Policy status changes; check the official pages before relying on any date or status here. This article is general information, not legal advice.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Good AI governance in Australia today is mostly disciplined application of laws you already have: know which AI you use and with what data, keep personal information out of tools that should not have it, control what AI can access, keep people accountable for decisions that matter, and know what you must report when something goes wrong. Add the 10 December 2026 privacy policy change to your plan now, use the voluntary Guidance for AI Adoption as structure, and review the starter kit on a schedule.",
          "Governance also shapes budgets: controls, review time and vendor checks all cost money, which [[/blogs/ai-automation-cost-australia|our guide to AI automation costs in Australia]] accounts for. To choose where AI should go first, see [[/blogs/ai-automation-australia|AI automation for Australian businesses]], and for the broader picture of building AI-enabled products, [[/blogs/digital-product-development-australia|digital product development in Australia]].",
        ],
        cta: {
          title: "Building AI with governance designed in?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/ai-automation|AI automation]] with access controls, review steps and audit logging built in from the start. We are not lawyers, so we work alongside your advisers. If useful, we can review a planned AI use with you and map the controls it needs.",
        },
      },
    ],
  },
];
