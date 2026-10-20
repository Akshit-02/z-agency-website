import type { BlogPost } from "./blog-data";

/**
 * Founder Batch 3, build set: fixed price vs time and materials (topic 42) and
 * scope creep and change control during delivery (topic 43). Global, British
 * English, governance and risk allocation rather than cost. No prices, no
 * market averages, no client stories; examples are labelled hypothetical.
 * The requirements document page owns the pre-contract baseline and the UAT
 * page owns defects vs changes at acceptance; both are linked, not repeated.
 * Sources checked 2026-10-15:
 * - GOV.UK Contracting for Agile guidance note (updated 20 Jun 2023); paragraph
 *   numbers 2.5, 4.5, 4.7, 4.19, 4.20, 4.22, 4.24, 5.3, 6.4 and 6.5 checked
 *   against the HTML version.
 * - GOV.UK DDaT Playbook (updated 20 Jun 2023), chapter 8 "Payment mechanism
 *   and pricing approach" and the supplier relationships passage on change
 *   management.
 * - GOV.UK "How to pay for Digital Outcomes and Specialists services"
 *   (withdrawn 31 Dec 2025; cited as historical practice only).
 * - GOV.UK Service Manual: Planning in agile (updated 31 Mar 2026), Deciding
 *   on priorities (updated 6 Dec 2018), Writing user stories.
 * Not used: the PMI scope creep definition and the PMI 2018 Pulse figure
 * (pmi.org returned 403, so neither could be verified); Standish CHAOS figures
 * (no primary source).
 */


export const founderBuildPosts3: BlogPost[] = [
  {
    slug: "fixed-price-vs-time-and-materials",
    title: "Fixed Price vs Time and Materials: Which Contract Model Suits Your Development Project?",
    seoTitle: "Fixed Price vs Time and Materials: Which to Choose",
    excerpt:
      "Fixed price, time and materials or capped T&M for a web or app build? How each model allocates risk, plus a clause checklist and a model-choice table.",
    category: "Web Development",
    banner: "compare3",
    sceneKind: "compare",
    bannerAlt:
      "Three development contract models compared side by side: fixed price, time and materials, and capped time and materials, with the risk each one places on the client and the supplier",
    date: "2026-10-15",
    readingTime: "14 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["startups", "saas-technology", "b2b-enterprise", "professional-services"],
    relatedSlugs: [
      "how-to-choose-website-development-company",
      "custom-web-application-development-cost",
      "software-vendor-handover-checklist",
    ],
    faqs: [
      {
        q: "Is a fixed price contract safer for the client?",
        a: "Only against one risk: the supplier taking longer than planned on the scope you wrote down. Unwritten scope becomes paid change, quality you did not define can be cut, and suppliers add a premium for uncertainty. A fixed price is safest when the scope is small, stable and fully specified.",
      },
      {
        q: "What is capped time and materials?",
        a: "Time and materials with a ceiling on what you pay. Contracts use the term in two ways: a hard cap, where the supplier finishes the agreed work at its own cost once the cap is reached, or a budget ceiling that needs your approval to exceed. State in writing which one applies and what counts as finished.",
      },
      {
        q: "Can agile development work under a fixed price?",
        a: "Yes, if the price is fixed per sprint, release or phase rather than for a frozen full scope, and you can re-prioritise the backlog between phases. UK government contracting guidance describes fixed-price sprints contracted in phases as a way to manage commercial risk on uncertain projects.",
      },
      {
        q: "How should payment milestones be set in a software contract?",
        a: "Tie each payment to something you can test and accept, such as a release in staging that meets its acceptance criteria. Avoid milestones based on completed sprints, phases started or hours used, because they pay for activity rather than results.",
      },
      {
        q: "Which contract model suits an MVP or a first app release?",
        a: "Usually a paid discovery, then fixed price per phase or capped time and materials, with you owning the backlog. An MVP is meant to change as you learn, so a single fixed price for the whole product tends to turn every lesson into a change request.",
      },
      {
        q: "Can we change the contract model partway through a project?",
        a: "Yes. A common pattern is time and materials for discovery or early prototyping, fixed-price phases once the scope is clearer, and a retainer after launch. Build the switch points into the contract as phase boundaries so nobody has to renegotiate under pressure.",
      },
    ],
    content: [
      {
        heading: "Fixed price or time and materials: the short answer",
        body: [
          "**Choose the model by how certain your scope is and how much you expect to learn during the build, then spend most of your effort on the clauses around it. A fixed price works when the scope is small, written down and unlikely to move. Time and materials works when you expect to change course, provided you own the backlog and watch spend closely. For most new web apps and mobile apps a hybrid is safer: a short paid discovery, then fixed-price phases or capped time and materials for the build.** Whichever model you pick, the real protection comes from change control, payment tied to accepted work, a written Definition of Done and the right to stop at a break point without termination costs.",
          "This guide is about who carries which risk and how the contract governs change, not about what the work should cost. For estimating, see [[/blogs/custom-web-application-development-cost|how to estimate the cost of a custom web application]]. The advice applies to websites, web applications and mobile apps; points specific to apps have their own section.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "A fixed price moves delivery risk to the supplier only for the scope you wrote down. Everything else becomes a change request.",
          "Time and materials keeps flexibility but leaves quality and budget risk with you unless you manage it actively.",
          "\"Capped\" means different things in different contracts. Write down what happens when the cap is reached.",
          "Pay against accepted deliverables, not against sprints completed or hours logged.",
          "Agree change control, acceptance and a Definition of Done before signing, whatever the model.",
          "Contract in phases so either side can stop at a break point without termination costs.",
        ],
      },
      {
        heading: "What each model allocates",
        body: [
          "The pricing model decides who absorbs the cost when the work takes longer or changes. It does not decide quality, ownership or how disputes are settled; those come from other clauses.",
        ],
        table: {
          headers: ["Model", "How it works", "Delivery risk sits with", "How change is handled", "Supplier's incentive", "Best fit"],
          rows: [
            [
              "**Fixed price, whole project**",
              "One price for a defined scope and timescale",
              "Mostly the supplier, but only for the written scope",
              "Every change is a priced change request",
              "Finish the agreed scope efficiently; resist or price changes",
              "Small, fully specified builds, such as a marketing site from approved designs",
            ],
            [
              "**Fixed price per phase or sprint**",
              "A fixed price for each phase, release or sprint, agreed in turn",
              "Shared; each side's exposure is roughly one phase",
              "The backlog is re-prioritised between phases before the next one is priced",
              "Deliver each phase well enough to win the next",
              "New products where the first release is clear but later ones are not",
            ],
            [
              "**Time and materials (T&M)**",
              "You pay for time at agreed rates",
              "Mostly you, including the risk of poor quality",
              "Flexible: you re-prioritise at any time",
              "Sell time; productivity depends on your oversight",
              "Discovery, technical spikes and work where scope genuinely moves",
            ],
            [
              "**Capped T&M**",
              "T&M up to a ceiling",
              "Depends on what the contract says happens at the cap",
              "As T&M, within the cap",
              "Finish within the cap, if overruns are at the supplier's cost",
              "Builds with moderate uncertainty where you need a ceiling but not a frozen scope",
            ],
            [
              "**Dedicated team or retainer**",
              "Fixed monthly capacity from named people",
              "You, for what the capacity produces",
              "You set priorities each cycle",
              "Keep the team busy and the client satisfied",
              "Ongoing product development after launch",
            ],
          ],
        },
      },
      {
        heading: "What government contracting guidance says",
        body: [
          "The most useful public source on this question is the UK government's Contracting for Agile guidance note, a companion to its Digital, Data and Technology (DDaT) Playbook, last updated on 20 June 2023. It is written for public-sector buyers, so treat it as a set of tested principles rather than rules for your own contract. The points that matter most for a private web or app build:",
        ],
        checklist: [
          "**Scope is the variable.** Agile delivery constrains time and cost, and \"the scope becomes the variable\" (para 2.5). A contract that fixes scope, time and cost all at once works against the method.",
          "**Fixed price is simple but rigid for uncertain work.** Its main benefit is \"its simplicity\" (4.5). Projects with very limited information are less likely to achieve their outcomes under a rigid fixed price, and the note suggests managing that risk with fixed-price sprints contracted in phases (4.7).",
          "**Time and materials can drive the wrong behaviours.** It offers \"a high-level of flexibility\", but the buyer \"bears the risk of poor quality\" and T&M \"does not incentivise the supplier to deliver as much as other pricing models\" (4.19).",
          "**Use T&M for discovery, then move on.** The note sees T&M fitting best as initial discovery work, after which the parties move to a more structured model (4.20).",
          "**Exit should be cheap.** The commercial structure should support exit \"without the authority incurring termination costs or the provider being saddled with stranded costs\", so the worst case is roughly the cost of one sprint cycle (4.22).",
          "**Pay for deliverables, not process.** Buyers should \"always avoid basing payment milestones on the delivery of the agile process itself\", such as a number of completed sprints, and link payments to deliverables or code releases (4.24).",
          "**Define quality.** The contract should state a Definition of Ready, a Definition of Done and the level of defects acceptable after release (5.3).",
          "**The buyer owns the backlog.** The buyer \"must retain ownership of the backlog\", and the structure should not allow scope creep or let the supplier push all the difficult items to the end (6.4 and 6.5).",
        ],
        callout: {
          type: "note",
          text: "The DDaT Playbook (chapter 8) puts the principle in one sentence: \"Where the scope of a project is certain, then fixed pricing may be appropriate and where there is increased uncertainty in scope, a variable approach may be more suitable to achieve best value for money.\"",
        },
      },
      {
        heading: "Capped time and materials: write down what the cap means",
        body: [
          "\"Capped\" is one of the most misunderstood words in development contracts, because it is used for two arrangements that allocate risk in opposite directions.",
        ],
        table: {
          headers: ["Meaning", "What happens at the cap", "Who carries the overrun"],
          rows: [
            ["**Hard cap**", "The supplier finishes the agreed work at its own cost", "The supplier"],
            ["**Budget ceiling**", "Work stops, or continues only after you approve more budget", "You"],
          ],
        },
        checklist: [
          "Which meaning applies, in plain words.",
          "What the cap covers: the whole project, a phase or a single release.",
          "A notification point before the cap, for example a written forecast once a set share of the budget is used. This is common practice, not a legal requirement; choose a level that leaves you time to decide.",
          "What \"finished\" means at the cap: the scope list, acceptance criteria and Definition of Done.",
          "Whether approved change requests raise the cap, and by how much.",
        ],
      },
      {
        heading: "Where the hard cap idea comes from",
        body: [
          "The hard-cap meaning is the one the UK government's former buying guidance for the Digital Outcomes and Specialists framework used: if the cap is reached before the work is finished, \"the supplier has to complete the work at their own cost\", and if the work finishes early you pay only for the time taken. The same guidance said a fixed price \"works best when your requirements are well defined\" and that under T&M \"you own more of the risk\". It was withdrawn on 31 December 2025, so read it as past government practice, not current rules.",
          "In commercial contracts, \"cap\" is often used in the looser budget-ceiling sense. Neither is wrong. A hard cap only works when \"the work\" is defined well enough to know when it is finished, which brings back many of the scope arguments a fixed price has, and a supplier will usually price that risk into its rates or narrow the scope. A budget ceiling is easier to agree, but protects you only if you get early warning.",
        ],
      },
      {
        heading: "The clauses that matter more than the pricing model",
        body: [
          "**Change control.** Write down who may request a change, who may approve it, how its effect on time, cost and other features is assessed, and that no work starts until the change is approved in writing. Under a fixed price, this is how the price moves; under T&M, it is how you stop spend drifting. The day-to-day process, with a template and change log, is in [[/blogs/scope-creep-software-projects|how to control scope creep during delivery]].",
          "**Milestones tied to accepted work.** Link each payment to something you can test and accept: a release in a staging environment, a feature set that passes its acceptance criteria, or an app build ready for store submission. Avoid milestones such as \"sprint 4 complete\", \"design phase started\" or a share of hours used; they pay for activity, not results.",
          "**Acceptance and Definition of Done.** Agree how long you have to test each delivery, what happens if you do not respond, and how defects are separated from changes. The [[/blogs/user-acceptance-testing-business-software|user acceptance testing guide]] covers acceptance windows and sign-off. Then write a Definition of Done that means more than \"it works on the developer's machine\": code reviewed, tests passing, deployed to staging, documented, and meeting the non-functional requirements you set for speed, security and accessibility.",
          "**A scope baseline.** Every model needs a dated, versioned description of what is being built. A [[/blogs/website-requirements-document|requirements document with numbered requirements]] lets quotes, acceptance tests and change requests refer to the same items.",
          "**Exit and ownership.** Contract in phases with break points, give either side the right to stop at a break point without termination costs, and make sure you own the code, designs and accounts as you pay, with repository access throughout. The [[/blogs/software-vendor-handover-checklist|software handover checklist]] lists what you should be able to walk away with.",
        ],
      },
      {
        heading: "Model-choice decision table",
        body: [
          "Three questions decide most cases: how certain is the scope, how much will you learn during the build, and how much time can you spend managing the supplier? T&M needs the most client involvement; a fixed price needs the most definition up front.",
        ],
        table: {
          headers: ["Your situation", "Better fit", "Guard rails to add"],
          rows: [
            ["Small, fully specified build (for example a marketing site from approved designs)", "Fixed price", "Signed-off designs and content list as the baseline; priced change requests; warranty period"],
            ["New product or MVP where you will learn from users", "Paid discovery, then fixed price per phase or capped T&M", "You own the backlog; break points between phases; payment on accepted releases"],
            ["Requirements unclear or integrations unknown", "Discovery on T&M or a fixed fee", "Defined discovery outputs that you own; no commitment to the build"],
            ["Hard budget limit with some uncertainty", "Capped T&M or fixed price per phase", "Written meaning of the cap; early-warning point; rule for swapping scope"],
            ["Little time to manage the project yourself", "Fixed price per phase", "Clear acceptance criteria; T&M needs oversight you cannot give"],
            ["Ongoing improvement of a live product", "Dedicated team or retainer", "Named people; monthly priorities; reporting on what shipped"],
            ["Taking over a stalled project from another supplier", "Short T&M assessment, then re-plan", "Code and access audit before any fixed commitment"],
          ],
        },
      },
      {
        heading: "Contract-clause checklist for any model",
        body: [
          "Use this when reviewing a proposal or draft contract. Every item applies whether the price is fixed, capped or open.",
        ],
        checklist: [
          "**Scope baseline:** the requirements document or backlog version and date that the price or estimate is based on.",
          "**Assumptions and client dependencies:** content, decisions, access and third-party accounts you must provide, and by when.",
          "**Change control:** who can request and who can approve, impact assessment, written approval before work starts, and how changes are priced.",
          "**Cap or budget ceiling:** which meaning applies, what it covers and the early-warning point.",
          "**Payment milestones:** tied to accepted deliverables or releases, not to sprints, phases started or hours used.",
          "**Acceptance:** a testing window for each delivery, what happens if you do not respond, and defects kept separate from change requests.",
          "**Definition of Ready and Definition of Done:** written down, including non-functional requirements.",
          "**Backlog ownership:** you set priorities; the supplier advises on sizing and sequence.",
          "**Reporting:** a regular report of work done, time or budget used against plan, and risks.",
          "**Governance trigger:** a meeting and an agreed remedy when delivery speed or quality falls below an agreed level.",
          "**Team:** named key people and how replacements are agreed.",
          "**Break points and exit:** the right to stop at the end of a phase without termination costs.",
          "**IP and access:** IP assigned on payment; repositories, hosting and app store accounts in your name from the start.",
          "**Warranty:** a defect-fixing period after acceptance, and what support costs afterwards.",
          "**Third-party costs:** who pays for hosting, licences, APIs and developer accounts.",
          "**Disputes:** escalation steps before formal dispute resolution.",
        ],
        callout: {
          type: "tip",
          text: "Ask each shortlisted supplier to mark up this list against their standard terms. How they respond tells you as much as their price does.",
        },
      },
      {
        heading: "App builds: risks to assign in writing",
        body: [
          "Mobile apps add events that neither side fully controls, which is where many fixed-price disputes start. Decide in the contract who carries each one.",
        ],
        checklist: [
          "**Store review.** Apple and Google review every submission, and a rejection can mean rework. Say whether fixing a rejection caused by the agreed design is within the price, and who handles content or policy questions.",
          "**Operating system and store requirement changes.** New iOS and Android versions, and store rules such as Google Play's target API level requirements, can force updates during or after a build. Define them as changes or as maintenance.",
          "**Third-party SDKs.** Payment, analytics, maps and login SDKs change versions and terms. List the ones in scope.",
          "**Devices and OS versions.** The list of devices and OS versions to be tested is part of the scope baseline.",
          "**Developer accounts.** The Apple and Google developer accounts should be in your company's name, with the supplier added as team members.",
        ],
      },
      {
        heading: "What a fixed price does not protect you from",
        body: [
          "A fixed price is often chosen because it feels safe. It protects you from the supplier taking longer than estimated on the scope you described. It does not protect you from:",
        ],
        checklist: [
          "Scope you did not write down, which becomes paid change.",
          "Quality you did not define. If performance, accessibility or test coverage are not in the contract, they can be cut to protect the supplier's margin.",
          "Slow decisions, late content or unavailable stakeholders on your side, which usually justify time extensions or extra charges.",
          "Building the wrong thing. A fixed scope delivered exactly is still wasted if users needed something else.",
          "Risk premiums. Suppliers price uncertainty into a fixed quote, so you may pay for risks that never happen.",
        ],
      },
      {
        heading: "Hypothetical example: a booking platform with web and mobile apps",
        body: [
          "**Hypothetical example:** a founder wants a booking web app plus iOS and Android apps. Two proposals arrive: a fixed price for \"the full platform\" based on a two-page brief, and open time and materials with no cap. Neither is safe. The founder instead pays for a four-week discovery with defined outputs: user flows, a numbered requirements list, an integration list and a release plan.",
          "The build is then contracted in three fixed-price phases, each paid on acceptance of a release in staging, with a change budget held by the founder. The contract says store rejections caused by the agreed design are fixed within the phase price, while OS and store requirement changes after launch fall under a separate maintenance agreement. After phase one, user feedback moves two features out and one in. The swap goes through change control, and phase two is priced on the revised backlog.",
        ],
      },
      {
        heading: "When this advice does not fit",
        body: [
          "**Public procurement and regulated sectors** may impose their own pricing model and terms. The UK guidance quoted above is written for that context and refers to UK procurement rules.",
          "**Very small jobs** of a few days rarely justify phased contracts and governance meetings. A clear quote, a short scope, a warranty and an out-of-scope list may be enough.",
          "**If nobody on your side can make product decisions every week**, T&M and agile phasing will struggle. A well-specified fixed price may suit you better even if it includes a risk premium.",
          "**This is not legal advice.** Termination rights, IP assignment and how variations are enforced depend on local law in India, the UAE, the UK, Australia, Singapore and elsewhere. Have a lawyer review the final contract.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Comparing a fixed-price quote with a T&M estimate as if they carried the same risk.",
          "Signing a fixed price on a brief with no out-of-scope list.",
          "Using the word \"capped\" without defining it.",
          "Paying on dates, sprints or hours rather than accepted work.",
          "Letting the supplier own the backlog and set priorities.",
          "Leaving repositories and app store accounts in the supplier's name until final payment.",
          "Having no break points, so the only way out is termination.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "GOV.UK: Contracting for Agile guidance note (updated 20 June 2023); paragraph numbers as cited above.",
          "GOV.UK: The Digital, Data and Technology Playbook, chapter 8, payment mechanism and pricing approach (updated 20 June 2023).",
          "GOV.UK: How to pay for Digital Outcomes and Specialists services (withdrawn 31 December 2025; cited as historical practice).",
          "Accessed 15 October 2026. Government guidance is written for public-sector buyers and may be revised. Take legal advice on your own contract.",
        ],
      },
      {
        heading: "Conclusion and next steps",
        body: [
          "The pricing model matters less than the governance around it. Pick fixed price, T&M or a hybrid based on how certain your scope is and how much you will learn, then make sure the contract has a versioned baseline, written change control, payment on accepted work, a Definition of Done, and break points with a clean exit. If you are still comparing suppliers, [[/blogs/how-to-choose-website-development-company|how to choose a web development company]] covers the checks to make before you reach the contract. For the build itself, see our [[/services/website-development|web application development services]].",
        ],
        cta: {
          title: "Want a second opinion on a proposal or contract structure?",
          description:
            "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/website-development|web applications]] and [[/services/mobile-app-development|mobile apps]]. If useful, we can talk through your project and suggest a contract structure after a short discovery.",
        },
      },
    ],
  },
  {
    slug: "scope-creep-software-projects",
    title: "Why Web Development Projects Go Over Budget, and How to Control Scope Creep",
    seoTitle: "Scope Creep in Software Projects: How to Control It",
    excerpt:
      "Why web and app projects overrun, and how to control change during delivery: a scope-baseline checklist, change-request template, change log and triage table.",
    category: "Web Development",
    banner: "gauge",
    sceneKind: "workflow",
    bannerAlt:
      "A budget gauge moving towards its limit as change requests are raised, triaged, assessed and approved against a fixed scope baseline",
    date: "2026-10-15",
    readingTime: "11 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["startups", "saas-technology", "b2b-enterprise", "professional-services"],
    relatedSlugs: [
      "website-requirements-document",
      "user-acceptance-testing-business-software",
      "technical-discovery-software-projects",
    ],
    faqs: [
      {
        q: "What is scope creep in software development?",
        a: "Scope creep is change that enters a project without anyone assessing and agreeing its effect on time, cost and other work. Approved, priced changes are not scope creep, and nor is clarifying detail within a requirement that was already agreed.",
      },
      {
        q: "Should small changes go through the change process?",
        a: "They should be logged, but they need not use the full template. Agree a threshold: clarifications and tiny adjustments are agreed in the ticket, while anything that adds effort, a screen, a user role, an integration or a business rule gets an impact note and a named approval.",
      },
      {
        q: "Who should approve change requests?",
        a: "A named person on the client side with budget authority, usually the product owner or founder. Developers and other stakeholders can raise requests but should not approve them, and nobody should start a change before the decision is written down.",
      },
      {
        q: "How big should a change budget be?",
        a: "There is no reliable universal percentage. Size it from the unknowns found in discovery: unproven integrations, unclear requirements, content risk and how much you expect to learn from users. Hold it separately from the build budget so that its use stays visible.",
      },
      {
        q: "Can scope creep happen under time and materials?",
        a: "Yes, and it is harder to notice because there is no price to argue about. Every unplanned item simply adds hours. Track budget used against accepted scope and keep a change log even when the contract does not require one.",
      },
      {
        q: "What is gold plating in a software project?",
        a: "Gold plating is the delivery team adding features or polish that nobody asked for. It can look generous, but it spends your budget on unrequested work. Ask for time reports against backlog items and question work that has no ticket.",
      },
    ],
    content: [
      {
        heading: "Why do web development projects go over budget?",
        body: [
          "**Most overruns are not one big mistake. They are many small, unpriced additions to a scope that was never pinned down: \"quick\" requests, extra stakeholders, slow decisions, late content and integration surprises, each reasonable at the time. You control them by fixing a dated scope baseline before work starts, sending every change through a short written process with a named approver, and tracking approved changes against a budget you hold. Change is not the problem; change that nobody priced is.**",
          "This guide covers change control during delivery, for websites, web apps and mobile apps. What goes into the baseline before you sign is covered in the [[/blogs/website-requirements-document|website requirements document guide]], and choosing a contract model in [[/blogs/fixed-price-vs-time-and-materials|fixed price vs time and materials]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Separate scope creep, controlled change and clarification. Only the first is a problem.",
          "Fix a versioned baseline with numbered requirements and an out-of-scope list before kickoff.",
          "Send every request through one channel, and triage it as a defect, a clarification or a change.",
          "Name one approver with budget authority. No work starts before a written decision.",
          "Keep a change log and a change budget separate from the build budget.",
          "If you are already over budget, freeze new scope and re-baseline before spending more.",
        ],
      },
      {
        heading: "Scope creep, controlled change and clarification",
        body: [
          "**Scope creep** is change that enters the project without anyone assessing and agreeing its effect on time, cost and other work. **Controlled change** is a new, modified or removed requirement that has been assessed, approved by the right person and reflected in the plan and budget. **Clarification** (project managers sometimes call it progressive elaboration) adds detail to something already agreed, such as the wording of an error message or which fields a filter uses, without changing its intent.",
          "The distinction matters because the cure is different. You should not try to prevent change: the GOV.UK Service Manual says plainly that \"In agile, you change your plans as you do more work and learn more about your users\". What you prevent is change that nobody assessed. The UK government's Contracting for Agile guidance note makes the same point from the buyer's side: the buyer keeps control of scope, including moving user stories up and down the backlog, and the contract structure \"should not allow, for example, scope creep\" (paras 6.4 and 6.5).",
        ],
      },
      {
        heading: "Where overruns come from",
        body: [],
        table: {
          headers: ["Cause", "Who mostly controls it", "Early sign"],
          rows: [
            ["No clear baseline: scope agreed in calls and emails", "Both sides, before signing", "Client and supplier describe the same feature differently"],
            ["\"Quick\" requests sent straight to developers", "Client", "Work appears in demos that nobody approved"],
            ["Stakeholders outside the process, such as a director, sales lead or investor", "Client", "Late feedback reopens approved designs"],
            ["Slow decisions and late content", "Client", "Tasks blocked waiting for answers, copy or images"],
            ["Gold plating: unrequested polish or features", "Supplier", "Time logged against items not in the backlog"],
            ["Under-estimated integrations or data migration", "Both; discovery reduces it", "Spikes and workarounds on third-party APIs"],
            ["Defects relabelled as changes, or changes disguised as defects", "Both", "Arguments about who pays for a ticket"],
            ["Learning from real users", "Client", "Legitimate, but still needs funding or a trade"],
          ],
        },
        callout: {
          type: "note",
          text: "Many causes sit on the client side. That is not a criticism: founders are busy, and a good process makes the cost of a request visible before it is made. Integration and data surprises shrink with proper [[/blogs/technical-discovery-software-projects|technical discovery before estimating]].",
        },
      },
      {
        heading: "Scope-baseline checklist (before kickoff)",
        body: [
          "Change control only works against something fixed. The requirements document guide covers what to write; this checklist confirms the baseline is complete enough to judge changes against.",
        ],
        checklist: [
          "Requirements document version and date, with every requirement numbered.",
          "An out-of-scope list agreed by both sides.",
          "Assumptions written down, such as who supplies content and by what date.",
          "Client dependencies and named decision owners, with an agreed turnaround for decisions (for example, a set number of working days).",
          "Acceptance criteria for each requirement or user story. GOV.UK describes these as \"a list of outcomes that you use as a checklist\".",
          "Each integration listed with the owner of the third-party account or API.",
          "The design sign-off point, after which design changes go through change control.",
          "Who writes, supplies and loads content.",
          "Environments, browsers, devices and OS versions in scope.",
          "A change budget held by the client, separate from the build budget.",
          "Who may raise changes and who may approve them, by name.",
          "The contract model and what it says about changes.",
        ],
      },
      {
        heading: "The change process in six steps",
        body: [
          "**1. Capture.** Every request goes into one place, such as a form, a ticket type or a shared log, not into chats with individual developers. Developers point requests politely to that channel.",
          "**2. Triage.** Within an agreed time, the supplier's lead and your product owner label the request a defect, a clarification or a change, using the table in the next section. Defects and clarifications go into normal delivery; only changes continue.",
          "**3. Assess impact.** The supplier estimates effort, the effect on the timeline and other features, new risks, and which tests and acceptance criteria change. Keep it proportionate: a small change needs a short note, not a report.",
          "**4. Decide.** The named approver chooses one of four options: do it now, swap it for an item of similar size, defer it to a later phase, or reject it. No work starts before a written decision.",
          "**5. Update the baseline.** Approved changes update the requirements document version, the backlog, the plan and the budget forecast.",
          "**6. Communicate.** Record the decision in the change log and tell everyone affected, including whoever raised the request.",
          "The UK DDaT Playbook calls \"clear and agreed reporting, change management and dispute resolution mechanisms\" a critical success factor in supplier relationships, and the GOV.UK guidance on deciding on priorities says priority decisions \"should be made regularly\". In practice, batch routine change requests into a weekly or per-sprint review and keep a fast path for urgent ones.",
        ],
      },
      {
        heading: "Is it a defect, a clarification or a change?",
        body: [
          "Use this table at the triage step. It is about classifying requests during delivery; handling defects found in acceptance testing, and linking sign-off to the contract, is covered in the [[/blogs/user-acceptance-testing-business-software|user acceptance testing guide]].",
        ],
        table: {
          headers: ["Situation", "Usually", "Why"],
          rows: [
            ["It does not meet a written acceptance criterion", "**Defect**", "It fails something already agreed"],
            ["Something that worked before has stopped working", "**Defect**", "A regression; fix it before new work"],
            ["It misses a written non-functional requirement, such as page speed, accessibility or security", "**Defect**", "Measurable requirements are part of the scope"],
            ["The requirement is silent on a detail, and the team needs an answer that fits its intent", "**Clarification**", "Adds detail, not scope; answer quickly to avoid delay"],
            ["The request adds a screen, user role, integration, report, rule or data field", "**Change**", "Not in the baseline"],
            ["It works as specified, but you now want it to work differently", "**Change**", "The baseline was met; the requirement moved"],
            ["A third-party API or platform changed its behaviour", "**Change**, unless the contract gives this risk to the supplier", "Neither side caused it, so the contract decides"],
            ["It fails on a browser, device or OS version outside the agreed list", "**Change**", "Coverage is part of the baseline"],
            ["Content looks wrong because it arrived late or incomplete", "**Client dependency**", "Fix the content and record any delay it caused"],
          ],
        },
        callout: {
          type: "tip",
          text: "When the label is genuinely disputed, record the disagreement in the log, agree a provisional label so work can continue, and settle it at the next review. Do not let one argument block the whole backlog.",
        },
      },
      {
        heading: "Copyable change-request template",
        body: [
          "Copy this into a document, form or ticket template. The requirement IDs and baseline version tie each change to the requirements document, so nobody has to argue later about what was originally agreed.",
        ],
        code: {
          label: "Change request template (plain text)",
          text: `CHANGE REQUEST
CR ID:                     CR-___
Date raised:
Raised by:
Requirement IDs affected:  (from requirements document v__)
Type:                      [ ] New scope  [ ] Modified scope  [ ] Removed scope
Description:               What should change, in one or two sentences
Reason and value:          Why it matters now (users, revenue, compliance, risk)

IMPACT (completed by the delivery team)
Effort estimate:           (range, with assumptions)
Timeline effect:           (none / release date moves by __)
Other features affected:
Risks introduced:
Tests and acceptance criteria to add or change:

OPTIONS
[ ] Do now, from the change budget
[ ] Swap for item(s) of similar size: ____
[ ] Defer to phase __
[ ] Reject

DECISION
Decision:
Approved by:               Date:
Baseline updated to:       requirements document v__`,
        },
      },
      {
        heading: "Keep a change log",
        body: [
          "The log is the single view of every change, its decision and its effect on the baseline. A spreadsheet is enough. The entries below are hypothetical, for illustration only.",
        ],
        table: {
          headers: ["CR ID", "Requirement", "Summary", "Type", "Effort estimate", "Decision", "Approver and when", "Baseline"],
          rows: [
            ["CR-01", "R-14", "Add CSV export to the orders report", "New", "2 to 3 days", "Do now, from change budget", "Product owner, week 3", "v1.1"],
            ["CR-02", "R-22", "Replace map search with postcode search", "Modified", "4 to 6 days", "Swap: R-31 (saved searches) moved to phase 2", "Product owner, week 5", "v1.2"],
            ["CR-03", "New", "Second language", "New", "More than 10 days", "Deferred to phase 2", "Founder, week 5", "v1.2"],
            ["CR-04", "R-08", "Remove social login", "Removed", "Saves 1 to 2 days", "Do now", "Product owner, week 6", "v1.3"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "The swap rule: under a fixed price per phase or a capped budget, a change can often be absorbed without new money by removing an unstarted item of similar size. Both sides must agree the sizes are comparable, and the swap is logged like any other change. Swaps only work for work not yet built, so make them early.",
        },
      },
      {
        heading: "Early warning signs to track",
        body: [],
        checklist: [
          "**Budget used against scope accepted:** at every milestone or sprint review, compare the share of budget spent with the share of scope accepted.",
          "**Change budget used:** the total of approved changes against the change budget you set aside.",
          "**Open requests:** how many changes are waiting for a decision, and for how long.",
          "**Decision time on your side:** how long clarifications and approvals take.",
          "**Unplanned work:** time spent on items not in the backlog.",
        ],
        callout: {
          type: "note",
          text: "These are prompts for a conversation, not benchmarks. There is no reliable universal figure for a healthy number of changes; compare against your own plan.",
        },
      },
      {
        heading: "If the project is already over budget",
        body: [
          "Re-baselining is not an admission of failure. It turns an argument about the past into a decision about the future.",
        ],
        checklist: [
          "**Freeze new scope** until the position is clear. Defect fixing and approved work continue.",
          "**Re-baseline:** list what is accepted, what is in progress and what is left, with fresh estimates for the remainder.",
          "**Re-prioritise what is left using MoSCoW.** GOV.UK defines must haves as \"essential things that your product cannot function without\" and will not haves as \"low priority things that the team has agreed not to do\".",
          "**Cut to the release goal:** the smallest version that achieves the outcome you need now.",
          "**Agree the remaining budget or cap in writing**, and restart change control from the new baseline.",
          "**If trust has broken down**, get an independent review of the code and plan before committing more money, and check what your contract allows at the next break point.",
        ],
      },
      {
        heading: "Hypothetical example: a request that bypassed the process",
        body: [
          "**Hypothetical example:** a training company is building a course-booking web app with a capped budget for the first release. In week four, the sales director emails a developer asking for corporate invoicing. Under the new process, the developer logs the request instead of starting work. Triage marks it a change: it adds a payment method and an accounting integration that are not in the baseline.",
          "The impact note gives an effort range, a two-week delay to the release and new tests for refunds. The founder, as approver, defers full invoicing to phase two and approves a smaller change instead: a \"request an invoice\" form that the team handles manually for now. The change log, baseline version and budget forecast are updated the same day, and the sales director gets a written answer with the reason.",
        ],
      },
      {
        heading: "Limits: when change control gets in the way",
        body: [
          "Change control has costs. A process that needs a form and a meeting for every wording tweak slows a small team and encourages people to work around it. Set a threshold so clarifications are agreed in the ticket and only real scope changes use the full template.",
          "A supplier can also use change control defensively, labelling every clarification as a paid change. If most requests end up priced, review the baseline quality and the triage rules together rather than arguing ticket by ticket.",
          "On very early products where the goal is learning, a time-boxed budget with a backlog you own may work better than detailed change requests; the discipline moves to prioritisation rather than approval. And the contractual effect of variations differs between countries, so take local legal advice before a disagreement turns into a dispute.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "GOV.UK: Contracting for Agile guidance note (updated 20 June 2023).",
          "GOV.UK: The Digital, Data and Technology Playbook (updated 20 June 2023).",
          "GOV.UK Service Manual: Planning in agile (updated 31 March 2026); Deciding on priorities (updated 6 December 2018); Writing user stories.",
          "Accessed 15 October 2026. Guidance may be revised; check the current versions.",
        ],
      },
      {
        heading: "Conclusion and next steps",
        body: [
          "Budgets rarely blow up in one go. Before kickoff, fix a versioned baseline with an out-of-scope list and named approvers. During delivery, run every request through capture, triage, impact, decision, baseline update and communication, and keep the change log and change budget visible. If you are already over, freeze, re-baseline and re-prioritise before spending more. For help planning or rescuing a build, see our [[/services/website-development|web application development services]].",
        ],
        cta: {
          title: "Project drifting, or about to start one?",
          description:
            "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/website-development|web applications]] and [[/services/mobile-app-development|mobile apps]]. If useful, we can review your scope baseline and change process, or talk through a project that has drifted.",
        },
      },
    ],
  },
];
