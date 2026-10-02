import type { BlogPost } from "./blog-data";

/**
 * AI knowledge hub, part thirty-two: AI product design continued with
 * onboarding, transparency, error handling and feedback UX. General app
 * onboarding stays in what-a-good-mobile-app-onboarding-actually-does.
 * Merged into `posts` in blog-data.ts.
 */

export const aiOpsPosts9: BlogPost[] = [
  // ---------------------------------------- 696 · AI ONBOARDING UX
  {
    slug: "ai-onboarding-ux",
    title: "AI Onboarding UX: How to Help Users Understand and Adopt AI Features",
    seoTitle: "AI Onboarding UX: First Use, Examples, Limits and Activation",
    excerpt:
      "How to onboard users to AI features: first-use education, showing capabilities with real examples, sample tasks, progressive disclosure, privacy explanations, setting expectations about limits and measuring activation and repeat use.",
    category: "UI/UX",
    banner: "aionboarding",
    bannerAlt:
      "AI onboarding in four columns: discover (Entry points, In context, Examples, Value), first use highlighted (Sample task, Own data, Quick win, Guidance), understand (Limits, Privacy, Control, Feedback) and adopt (Habits, Advanced tips, Activation, Nudges).",
    date: "2026-10-02",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ui-ux-design", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise", "education-edtech"],
    relatedSlugs: ["ai-ux-design", "ai-transparency-ux", "what-a-good-mobile-app-onboarding-actually-does"],
    faqs: [
      { q: "Why do AI features need special onboarding?", a: "Users often do not know what an AI feature can do, how to ask for it, how reliable it is or what happens to their data. Without guidance they try one vague request, get a weak result and give up." },
      { q: "What should first use of an AI feature look like?", a: "A short, guided task that produces a useful result on the user's own data or a realistic sample within a minute, with a clear next step." },
      { q: "Should onboarding explain limitations?", a: "Yes, briefly and concretely, such as 'may miss details in scanned documents; check totals before posting'. Honest limits build trust and prevent over-reliance." },
      { q: "How do we explain privacy in AI onboarding?", a: "In plain language at the moment it matters: what data the feature uses, whether it is stored or used for training, who can see it and how to turn it off, with a link to full details." },
      { q: "What is progressive disclosure in AI onboarding?", a: "Teaching basics first and revealing advanced capabilities, such as custom instructions or multi-step tasks, as users show readiness, rather than everything at once." },
      { q: "What is AI feature activation?", a: "The point where a user has achieved meaningful value from the feature, defined per product, such as accepting a generated draft or completing a task with the assistant." },
      { q: "How do we measure onboarding success?", a: "Activation rate, time to first value, repeat use within a week or month, depth of use and feedback, compared across onboarding variants." },
      { q: "Should AI features be on by default?", a: "It depends on risk and data. Low-risk features can be on by default with easy controls; features that process sensitive data or act on users' behalf often need explicit opt-in." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Onboard users to AI features by introducing them where the relevant task happens, showing concrete examples rather than generic claims, guiding a first task that produces real value quickly, explaining limits and data use in plain language at the moment they matter, revealing advanced capabilities gradually and measuring activation and repeat use rather than clicks on announcements.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "General app onboarding principles are in [[/blogs/what-a-good-mobile-app-onboarding-actually-does|what good mobile app onboarding does]]. AI-specific patterns build on [[/blogs/ai-ux-design|AI UX design]] and [[/blogs/ai-transparency-ux|AI transparency in UX]].",
        ],
      },
      {
        heading: "Why AI Onboarding Is Different",
        body: [
          "Most features have an obvious purpose: a button labelled 'Export' exports. AI features are open-ended and probabilistic. Users must learn what to ask, what good output looks like, when to check results and what happens to their data. Their first experience shapes their mental model: one impressive result can create over-trust, one poor result can end adoption. Onboarding has to manage both.",
        ],
      },
      {
        heading: "The Onboarding Journey",
        body: [],
        diagram: {
          variant: "aionboardflow",
          alt: "AI onboarding journey: Entry point, Value example, Guided first task (highlighted), Result + limits, Next task, Advanced tips.",
          caption: "A real result on the user's own work teaches more than any tour.",
        },
      },
      {
        heading: "Discovery: Introduce Features Where They Help",
        body: [
          "Announcements and modal tours are easy to dismiss. Introduce AI features in context: a 'summarize' action appears the first time a user opens a long document; a drafting suggestion appears when composing a reply. Show a concrete before-and-after example relevant to the user's role. Avoid generic claims about intelligence; describe the task and the time saved.",
        ],
      },
      {
        heading: "First Use: A Quick, Real Win",
        body: [
          "Design a first task that works reliably and produces value in under a minute. Pre-fill it with the user's own data where possible, or a realistic sample if they have none yet. Suggested prompts or one-click actions remove the blank-page problem. After the result, suggest one natural next step to build a habit rather than listing every capability.",
        ],
        cta: {
          title: "Launching an AI feature and worried about adoption?",
          description: "ZSpace Labs designs onboarding and activation flows for AI features. See [[/services/ui-ux-design|our UI/UX design services]].",
        },
      },
      {
        heading: "Setting Expectations About Limits",
        body: [
          "Tell users what the feature does well and where to be careful, in specific terms tied to their task. Short, contextual notes work better than disclaimers: 'Totals are extracted automatically; check them against the invoice before approving.' This sets calibrated trust from the start, which reduces disappointment and risky over-reliance. See [[/blogs/human-ai-interaction-design|human-AI interaction design]].",
        ],
      },
      {
        heading: "Explaining Privacy and Data Use",
        body: [
          "Users increasingly ask what happens to their data. Explain at first use, in plain language: what the feature reads, whether content is stored, whether it is used to train models, who can see it and how to turn the feature off. Link to full details. For workplace products, administrators need the same information in admin settings. Privacy design is covered in [[/blogs/ai-data-privacy|AI data privacy]].",
        ],
      },
      {
        heading: "Progressive Disclosure",
        body: [
          "Teach the core task first. Reveal advanced capabilities, such as custom instructions, saved prompts, multi-step tasks or integrations, once users have succeeded with basics, through contextual tips, release notes or 'did you know' moments tied to behaviour. Different roles may need different paths: an administrator configures; an end user uses.",
        ],
      },
      {
        heading: "Measuring Activation and Adoption",
        body: [],
        table: {
          headers: ["Metric", "Definition", "Why it matters"],
          rows: [
            ["Discovery", "Users who see or try the entry point", "Whether introduction works"],
            ["Activation", "Users reaching a defined value moment", "Whether first use succeeds"],
            ["Time to first value", "Time from first exposure to activation", "Friction in onboarding"],
            ["Repeat use", "Users returning within 7 or 30 days", "Whether value is real"],
            ["Depth", "Variety of tasks used", "Whether progressive disclosure works"],
            ["Feedback and opt-outs", "Ratings, disables, complaints", "Trust and fit"],
          ],
        },
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Good onboarding turns curiosity into lasting use and prevents the early bad experiences that end adoption. It cannot compensate for a feature that is unreliable for its main task. Fix quality issues revealed by onboarding analytics before adding more guidance.",
        ],
      },
      {
        heading: "How to Onboard Users to AI Step by Step",
        body: [],
        checklist: [
          "**1. Define the activation moment** for the feature",
          "**2. Place entry points** where the task happens",
          "**3. Design a guided first task** with real or realistic data",
          "**4. Add contextual limits** and a privacy explanation",
          "**5. Suggest a next step** after first success",
          "**6. Reveal advanced features** progressively",
          "**7. Measure activation and repeat use** and iterate",
        ],
      },
      {
        heading: "Onboarding Administrators and Teams",
        body: [
          "In business software, administrators decide whether AI features are enabled, which data they can use and who can access them. Give administrators their own onboarding: a clear summary of what each feature does, data handling and retention, controls available, and a rollout guide for enabling features for pilot groups first. Provide materials they can share with their teams. Adoption often stalls at the administrator stage when these questions go unanswered; see [[/blogs/ai-powered-saas-development|AI-powered SaaS development]].",
        ],
      },
      {
        heading: "Re-Onboarding After Changes",
        body: [
          "AI features change more often than most features: new capabilities, different models, changed limits. Significant changes deserve brief re-onboarding: what is new, what behaves differently and what to check. Avoid surprising users with changed behaviour in tasks they rely on, and offer a short 'what changed' note in context the first time they use the updated feature. This also supports the principle of notifying users about changes described in [[/blogs/human-ai-interaction-design|human-AI interaction design]].",
        ],
      },
      {
        heading: "Sample Data and Sandboxes",
        body: [
          "New users often have no data yet, or are reluctant to try AI on real work. Sample data lets them see value immediately: a sample invoice for extraction, a demo document for summarization, a test project for a copilot. Make samples realistic for the user's industry, label them clearly as samples and offer an easy switch to their own data. For features that take actions, a sandbox mode where actions are simulated lets users explore safely before connecting live systems.",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: an accounting app launches AI invoice capture with a banner announcement, and few users try it. The team replaces the banner with a prompt on the bills page ('Upload an invoice and we'll fill in the details'), a sample invoice for new accounts, a short note on checking totals and a follow-up suggestion to set up email forwarding. Activation and repeat use rise in the following month.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Generic announcements disconnected from tasks",
          "Blank prompt boxes on first use",
          "Overselling capability, then disappointing",
          "No explanation of data use",
          "Measuring announcement clicks instead of activation",
        ],
        cta: {
          title: "Want to improve adoption of your AI features?",
          description: "Talk to ZSpace Labs about an [[/services/ui-ux-design|AI activation review]] covering entry points, first use and measurement.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "AI onboarding is about a fast, real win with honest expectations. Introduce features in context, guide a first task, explain limits and data use, grow capability gradually and measure what users actually achieve.",
        ],
      },
    ],
  },

  // ---------------------------------------- 697 · AI TRANSPARENCY UX
  {
    slug: "ai-transparency-ux",
    title: "AI Transparency in UX: How to Communicate Capabilities, Limits and Uncertainty",
    seoTitle: "AI Transparency in UX: Disclosure, Sources, Uncertainty, Review",
    excerpt:
      "How to design transparency into AI products: disclosing AI involvement, communicating capabilities and limits, showing sources and provenance, expressing uncertainty, indicating human review and meeting disclosure obligations without overwhelming users.",
    category: "UI/UX",
    banner: "aitransparency",
    bannerAlt:
      "AI transparency layers compared (Shown and Contents, with Contents highlighted) by always, on use, on request and policies.",
    date: "2026-10-02",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ui-ux-design", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "healthcare-healthtech", "fintech"],
    relatedSlugs: ["human-ai-interaction-design", "ai-ux-design", "ai-governance-framework"],
    faqs: [
      { q: "What is AI transparency in UX?", a: "Designing interfaces that let people know when AI is involved, what it can and cannot do, where its outputs come from, how certain they are and whether a person has reviewed them, so they can decide how much to rely on them." },
      { q: "Do we have to tell users they are talking to AI?", a: "In many contexts, yes. For example, the EU AI Act's transparency obligations, applying from August 2026, include informing people when they interact with an AI system unless it is obvious, and marking certain AI-generated content. Check rules that apply to you." },
      { q: "How do we show sources well?", a: "Inline citations next to claims, linking to the exact passage or record, with a preview, and a clear statement when no source supports an answer." },
      { q: "Should we show confidence scores?", a: "Rarely as raw numbers. Plain-language cues, highlighted uncertain fields, alternatives and explicit 'not sure' states are usually more useful to non-experts." },
      { q: "How do we avoid overwhelming users with transparency?", a: "Layer it: brief labels and key limits always visible, sources and uncertainty on interaction, details on request and full documentation in policies." },
      { q: "Should AI-generated content be labelled?", a: "Where it matters for trust, rights or regulation, yes: generated images, synthetic voices, published text and content shown to third parties. For internal drafts the user edits, lighter indicators may suffice." },
      { q: "What is content provenance?", a: "Information about where content came from and how it was created or edited. Standards such as C2PA attach verifiable provenance metadata to media files." },
      { q: "How do we communicate human review?", a: "Indicate when outputs have been reviewed or approved by a person, by whom in role terms, and when outputs are fully automated." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Design AI transparency in layers. Make AI involvement and key limits visible where outputs appear; show sources and uncertainty cues when users interact with outputs; offer details on request about how the feature works and what data it used; and document providers, data handling and review processes in policies. Use plain language rather than raw confidence scores, indicate when a person reviewed an output, label generated media where trust or regulation requires it and avoid disclaimer overload that users learn to ignore.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Transparency is one of the principles in [[/blogs/human-ai-interaction-design|human-AI interaction design]] and appears throughout [[/blogs/ai-ux-design|AI UX design]]. Regulatory and governance context is in [[/blogs/ai-governance-framework|AI governance framework]].",
        ],
      },
      {
        heading: "What to Be Transparent About",
        body: [],
        table: {
          headers: ["Topic", "User question", "Design response"],
          rows: [
            ["AI involvement", "Is this AI?", "Labels, avatars, disclosure at start of interaction"],
            ["Capabilities and limits", "What can I trust it with?", "Short scope statements, contextual limits"],
            ["Sources and provenance", "Where did this come from?", "Citations, previews, data used"],
            ["Uncertainty", "How sure is it?", "Plain cues, highlighted fields, alternatives"],
            ["Human review", "Did anyone check this?", "Reviewed or automated indicators"],
            ["Data use", "What happens to my input?", "Contextual privacy notes, settings"],
          ],
        },
      },
      {
        heading: "Layering Transparency",
        body: [],
        diagram: {
          variant: "transparencylayers",
          alt: "Transparency layers from most to least visible: AI label, Key limits, Sources + uncertainty (highlighted), Details on request, Policies, Docs.",
          caption: "Most users need the first two layers; the rest must exist for those who look.",
        },
      },
      {
        heading: "Disclosing AI Involvement",
        body: [
          "People should know when they are interacting with AI rather than a person, and when content they see was generated. Disclose at the start of conversations, label AI-generated drafts and summaries, and use consistent visual language across the product. Regulation increasingly requires this: the EU AI Act's [[https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai|transparency obligations]] apply from 2 August 2026 and cover informing people about AI interactions and marking certain synthetic content. Requirements vary by role and context, so confirm with legal advice.",
        ],
      },
      {
        heading: "Sources and Provenance",
        body: [
          "Sources are the most useful transparency feature for factual outputs. Place citations next to the claims they support, link to the exact passage, show previews and state clearly when an answer is not supported by available sources. For generated media, provenance standards such as [[https://c2pa.org/|C2PA]] attach verifiable information about how content was created.",
        ],
        cta: {
          title: "Need to make your AI features more transparent?",
          description: "ZSpace Labs designs disclosure, citation and uncertainty patterns that build calibrated trust. See [[/services/ui-ux-design|AI product design services]].",
        },
      },
      {
        heading: "Expressing Uncertainty",
        body: [
          "Most users struggle to interpret '72% confidence'. Better approaches: highlight fields or sentences the system is less sure about, offer alternatives ('did you mean...'), ask a clarifying question, state what information was missing and use a distinct 'I don't know' state. Match wording to reliability; hedging everything trains users to ignore hedges, while confident language on weak outputs causes over-reliance.",
        ],
      },
      {
        heading: "Indicating Human Review",
        body: [
          "When outputs reach customers or affect decisions, say whether a person reviewed them. A support reply might show 'Drafted with AI, reviewed by our team'; an automated categorization might show 'Automatically categorized; change if wrong'. Internally, show reviewers which parts are AI-generated so they focus attention appropriately.",
        ],
      },
      {
        heading: "Avoiding Transparency Overload",
        body: [
          "Long disclaimers on every screen become noise. Keep always-visible elements minimal and specific, put detail behind an info control, and write limits that relate to the task at hand. Test whether users notice and understand the key messages, not just whether they are present.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Good transparency builds appropriate trust, supports compliance and helps users catch errors. It adds design and content work, and too much of it can reduce usability. Some uncertainty is hard to measure reliably, so cues must be validated against actual error rates.",
        ],
      },
      {
        heading: "How to Design Transparency Step by Step",
        body: [],
        checklist: [
          "**1. List transparency questions** users and regulators will ask",
          "**2. Decide what is always visible**, on interaction and on request",
          "**3. Add disclosure** of AI involvement consistently",
          "**4. Implement sources and 'not found' states**",
          "**5. Design uncertainty cues** validated against error data",
          "**6. Indicate human review** where relevant",
          "**7. Test comprehension** with users",
        ],
      },
      {
        heading: "Writing Limitation Statements",
        body: [
          "Good limitation statements are short, specific and actionable. Compare 'AI may produce inaccurate information' with 'Summaries can miss figures in tables; check totals in the original'. The second tells users what to watch for and what to do. Base statements on evaluation results and real failure patterns, place them where the relevant output appears and update them when the system improves. UX writing guidance in our [[/blogs/ux-writing|UX writing]] article applies directly.",
        ],
      },
      {
        heading: "Transparency for Organizations and Regulators",
        body: [
          "Beyond end users, business customers and regulators want transparency about providers, data handling, evaluation and human oversight. Prepare a concise AI use statement, a list of model providers and sub-processors, a description of how outputs are evaluated and reviewed and contact points for questions. Keep these consistent with in-product disclosures. Governance documentation is covered in [[/blogs/ai-governance-framework|AI governance framework]].",
        ],
      },
      {
        heading: "Explanations for Recommendations and Decisions",
        body: [
          "When AI ranks, recommends or influences decisions, users often want to know why. Useful explanations name the main factors in plain language ('suggested because you viewed similar items' or 'flagged because the amount exceeds your usual range'), show the data used and offer a way to correct inputs or give feedback. Keep explanations faithful to how the system actually works; generated justifications that sound plausible but do not reflect the real logic mislead users.",
          "Where decisions significantly affect people, such as credit, hiring or access to services, explanation and the ability to contest may be legal requirements. Coordinate design with legal and governance; see [[/blogs/ai-governance-framework|AI governance framework]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a property listing platform generates listing descriptions with AI. Buyers complain about details that do not match photos. The platform adds an 'AI-assisted description, confirmed by agent' label only after agents review, highlights generated claims agents have not verified, and shows a provenance note on AI-enhanced photos. Complaints about mismatched details fall.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "No disclosure that users are talking to AI",
          "Generic disclaimers instead of specific limits",
          "Raw confidence numbers users cannot interpret",
          "Citations that do not support the claim",
          "Labelling content as reviewed when it was not",
        ],
        cta: {
          title: "Preparing for AI transparency requirements?",
          description: "Talk to ZSpace Labs about [[/services/ui-ux-design|transparency design]] for AI features, from disclosure to provenance.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Transparency helps people decide how much to trust AI. Disclose involvement, show sources, express uncertainty in plain language, indicate review and layer details so the interface stays usable.",
        ],
      },
    ],
  },

  // ---------------------------------------- 698 · AI ERROR HANDLING UX
  {
    slug: "ai-error-handling-ux",
    title: "AI Error Handling UX: How to Design for Incorrect or Incomplete AI Responses",
    seoTitle: "AI Error Handling UX: Correction, Retry, Clarification, Recovery",
    excerpt:
      "How to design for AI errors: types of AI failure, graceful system failures, wrong and incomplete answers, clarification, retry and regeneration, correction, source inspection, fallback, escalation to people and recovering from incorrect actions.",
    category: "UI/UX",
    banner: "aierrortypes",
    bannerAlt:
      "AI error types in four columns: system (Timeouts, Outages, Limits, Failed tools), wrong output highlighted (Factual error, Misread intent, Wrong data, Hallucination), incomplete (Missing info, Truncated, Partial, Refusals) and wrong action (Wrong change, Wrong person, Bulk error, Side effects).",
    date: "2026-10-02",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ui-ux-design", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "fintech", "ecommerce"],
    relatedSlugs: ["llm-application-reliability", "ai-ux-design", "ai-feedback-ux"],
    faqs: [
      { q: "What kinds of errors do AI features make?", a: "System errors such as timeouts and outages; wrong outputs such as incorrect facts or misread intent; incomplete outputs such as missing information or refusals; and wrong actions such as changing the wrong record. Each needs different design." },
      { q: "How should an AI interface handle a timeout or outage?", a: "Preserve the user's input, explain briefly, offer retry and an alternative path, and switch to a degraded mode if available, rather than showing a generic error or endless spinner." },
      { q: "How can users spot wrong AI answers?", a: "Through sources they can check, highlighted uncertain parts, previews before actions and outputs designed for verification, such as showing extracted values next to the original document." },
      { q: "Should AI ask clarifying questions?", a: "Yes, when a request is ambiguous and a wrong guess would be costly. Keep questions short, offer choices and avoid asking when the answer is obvious from context." },
      { q: "What is a good retry experience?", a: "Retry or regenerate options that keep the original request, optionally with guidance such as 'shorter' or 'use the latest policy', and access to previous versions so users do not lose a better earlier answer." },
      { q: "How do users correct AI outputs?", a: "By editing directly, selecting alternatives or telling the AI what was wrong, with corrections persisting and ideally feeding improvement." },
      { q: "What if the AI took a wrong action?", a: "Provide undo where possible, show exactly what changed, offer guided recovery and contact with a person, and log the event for investigation." },
      { q: "How should refusals be designed?", a: "Briefly explain that the request is outside scope, suggest what the user can do instead and avoid lecturing. Track refusals to find legitimate requests being blocked." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Design AI features expecting four kinds of failure: system errors, wrong outputs, incomplete outputs and wrong actions. Preserve user input and offer retry and alternatives when systems fail; make wrong outputs detectable with sources, highlights and side-by-side verification; ask clarifying questions instead of guessing on ambiguous requests; let users edit, regenerate and select alternatives; prevent wrong actions with previews and confirmation, and recover from them with undo, clear change records and escalation to a person.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "The engineering side of failure handling, such as retries, fallbacks and circuit breakers, is in [[/blogs/llm-application-reliability|LLM application reliability]]. General patterns are in [[/blogs/ai-ux-design|AI UX design]] and capturing corrections as feedback in [[/blogs/ai-feedback-ux|AI feedback UX]].",
        ],
      },
      {
        heading: "Error Types and Design Responses",
        body: [],
        table: {
          headers: ["Error type", "Example", "Design response"],
          rows: [
            ["System failure", "Timeout, provider outage, tool unavailable", "Keep input, explain, retry, degraded mode"],
            ["Wrong output", "Incorrect fact, misread request", "Sources, highlights, easy edit, report"],
            ["Incomplete output", "Missing fields, truncated answer, refusal", "Show what is missing, ask, continue"],
            ["Ambiguity", "Request could mean several things", "Clarifying question with choices"],
            ["Wrong action", "Updated the wrong record", "Preview, confirm, undo, change log"],
          ],
        },
      },
      {
        heading: "Recovery Paths",
        body: [],
        diagram: {
          variant: "aierrorflow",
          alt: "AI error recovery path: Error, Keep input, Clarify or retry, User corrects (highlighted), Fallback or escalate, Record as feedback.",
          caption: "Every recovery path starts by never losing what the user already did.",
        },
      },
      {
        heading: "Designing for Detectability",
        body: [
          "Users can only fix errors they notice. Make verification easy at the point of use: show extracted values next to the source document region, link claims to passages, highlight low-confidence fields, and show diffs for proposed changes. For high-stakes outputs, design review steps that require looking at the evidence. Automation bias, the tendency to accept automated outputs, is reduced when evidence is visible and checking is quick.",
        ],
      },
      {
        heading: "Clarification Instead of Guessing",
        body: [
          "When a request is ambiguous and the cost of a wrong guess is meaningful, ask. Good clarifying questions are short, offer likely options ('Do you mean the March invoice or the April one?') and remember the answer for the rest of the task. Do not ask when context makes the answer clear; unnecessary questions feel obstructive.",
        ],
        cta: {
          title: "Users losing trust after AI mistakes?",
          description: "ZSpace Labs designs detection, correction and recovery into AI features. See [[/services/ui-ux-design|our UI/UX design services]].",
        },
      },
      {
        heading: "Retry, Regenerate and Correct",
        body: [
          "Offer regenerate with optional guidance ('more concise', 'use only the 2026 policy'), keep earlier versions accessible and preserve the original request. Let users edit outputs directly, and when they do, keep their edits rather than overwriting them on the next generation. Where a correction indicates a systematic problem, such as wrong data, capture it as feedback for the team.",
        ],
      },
      {
        heading: "System Failures and Degraded Modes",
        body: [
          "When the AI is unavailable or slow, the interface should never lose the user's input or freeze. Show a brief, honest message, offer retry, and provide a non-AI path where possible: manual entry, standard search results or contacting support. Design these states with engineering so they reflect real fallback behaviour; see [[/blogs/llm-application-reliability|LLM application reliability]].",
        ],
      },
      {
        heading: "Recovering From Wrong Actions",
        body: [
          "Actions are where AI errors cost most. Prevent them with previews and confirmation; recover with undo, a clear record of what changed and guided steps for actions that cannot be undone, such as sent messages. Offer a fast route to a person for consequential mistakes, and log incidents so the team can find the cause.",
        ],
      },
      {
        heading: "Designing Refusals",
        body: [
          "Refusals are errors from the user's perspective when the request was legitimate. Keep refusals brief, explain scope rather than moralizing, suggest an alternative and avoid repeated refusals for similar safe requests. Track refusal rates and review samples to find over-refusal.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Designing for errors keeps users productive and trusting even when AI is imperfect, and it often matters more to adoption than small accuracy gains. It requires designing many additional states and close coordination with engineering on what failures look like. Prioritize the errors that are most frequent and most costly.",
        ],
      },
      {
        heading: "How to Design Error Handling Step by Step",
        body: [],
        checklist: [
          "**1. List likely errors** from evaluation results and testing",
          "**2. Rank them** by frequency and cost",
          "**3. Design detection**: sources, highlights, previews",
          "**4. Design recovery**: clarify, retry, edit, fallback, escalate",
          "**5. Preserve input** in every failure state",
          "**6. Add undo and change records** for actions",
          "**7. Capture corrections** as feedback",
        ],
      },
      {
        heading: "Error Messages That Help",
        body: [
          "Good AI error messages say what happened in plain language, preserve the user's work and offer the next step. 'I couldn't find this in your policy documents. Try rephrasing, or ask HR directly' is better than 'Error'. Avoid blaming the user, avoid technical codes in the main message and avoid apologizing at length. Vary messages by cause: timeouts suggest retrying, missing data suggests uploading or rephrasing, out-of-scope requests suggest alternatives. Guidance on tone is in [[/blogs/ux-writing|UX writing]].",
        ],
      },
      {
        heading: "Learning From Errors",
        body: [
          "Every error state is a data point. Log which error states users hit, how often, what they did next and whether they succeeded. Frequent clarifying questions may mean the AI lacks context it could get automatically; frequent regenerations may signal poor default output; frequent escalations may reveal gaps in knowledge. Feed these patterns into prioritization and evaluation sets; see [[/blogs/ai-feedback-ux|AI feedback UX]] and [[/blogs/llm-observability|LLM observability]].",
        ],
      },
      {
        heading: "Error States Checklist",
        body: [],
        checklist: [
          "Timeout or provider outage: input kept, retry offered, non-AI path available",
          "No sources found: clear 'not found' state instead of a guess",
          "Low confidence: uncertain parts highlighted, alternatives or a question offered",
          "Partial output: what is missing is stated, with an option to continue",
          "Refusal: brief reason, alternative suggestion, path to a person if relevant",
          "Wrong action: undo or recovery steps, change record, contact option",
          "Repeated failures: escalation with context",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: an expense app's receipt reader sometimes reads totals wrongly, and users discover this only when finance rejects claims. The redesign shows the receipt image beside extracted fields, highlights the total when the image is blurry, asks the user to confirm the total for amounts above a threshold and lets them correct it inline. Finance rejections for wrong totals drop.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Generic 'something went wrong' messages that lose input",
          "Outputs that cannot be checked against sources",
          "Guessing on ambiguous requests with costly outcomes",
          "Regeneration that discards user edits",
          "AI actions with no undo or change record",
        ],
        cta: {
          title: "Want your AI error states reviewed?",
          description: "Talk to ZSpace Labs about an [[/services/ui-ux-design|AI error handling review]] across failures, wrong outputs and actions.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "AI will be wrong sometimes; good design makes errors visible, cheap to fix and safe to recover from. Preserve input, show evidence, ask when unsure, support editing and undo, and keep a person within reach.",
        ],
      },
    ],
  },

  // ---------------------------------------- 699 · AI FEEDBACK UX
  {
    slug: "ai-feedback-ux",
    title: "AI Feedback UX: How to Collect Useful Feedback From Users",
    seoTitle: "AI Feedback UX: Ratings, Corrections, Implicit Signals, Privacy",
    excerpt:
      "How to design feedback for AI features: explicit and implicit feedback, contextual ratings, reasons and corrections, feedback quality, avoiding fatigue, privacy and consent, and how feedback flows into evaluation and product improvement.",
    category: "UI/UX",
    banner: "aifeedbacktypes",
    bannerAlt:
      "AI feedback types compared (Effort and Signal, with Signal highlighted) by ratings, reasons, corrections, implicit and reports.",
    date: "2026-10-02",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ui-ux-design", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise", "ecommerce"],
    relatedSlugs: ["llm-observability", "ai-error-handling-ux", "llm-evaluation-pipeline"],
    faqs: [
      { q: "What kinds of feedback can AI features collect?", a: "Explicit feedback such as ratings, reasons, comments and reports, corrections when users edit outputs, and implicit signals such as accepting, copying, retrying, abandoning or escalating." },
      { q: "Are thumbs up and down useful?", a: "As a quick, low-effort signal, yes, especially combined with an optional reason. On their own they are sparse and biased toward strong reactions, so pair them with implicit signals and sampled review." },
      { q: "What are implicit feedback signals?", a: "Behaviour that reveals quality without asking: accepting or inserting outputs, editing them heavily, regenerating, abandoning a task, escalating to a person or undoing an AI action." },
      { q: "How do we get better feedback reasons?", a: "Offer a few task-specific reasons, such as 'wrong information', 'missing detail', 'didn't follow instructions' or 'outdated', plus an optional comment." },
      { q: "How do we avoid feedback fatigue?", a: "Keep feedback controls small and optional, ask for detail only after negative ratings or occasionally, and never block tasks with feedback prompts." },
      { q: "What privacy issues does feedback raise?", a: "Feedback is often linked to conversation content that may contain personal or confidential data. Tell users how it is used and reviewed, restrict access, set retention and respect enterprise settings that disable review." },
      { q: "How should feedback be used?", a: "To find failure patterns, prioritize fixes, add test cases to evaluation sets, compare releases and, with care and consent, improve prompts or models." },
      { q: "Should we tell users what happened to their feedback?", a: "Where practical, yes. Release notes that mention improvements based on feedback encourage more and better feedback." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Collect AI feedback in context and with little effort: small rating controls on each output with optional task-specific reasons, corrections captured when users edit outputs, and implicit signals such as acceptance, retries, abandonment and escalation. Link feedback to the trace that produced the output, protect it as potentially sensitive data, explain how it is used, avoid interrupting tasks and route it into weekly review, evaluation datasets and release comparisons so it actually improves the product.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Feedback connects UX to engineering: traces in [[/blogs/llm-observability|LLM observability]], test cases in [[/blogs/llm-evaluation-pipeline|LLM evaluation pipeline]] and corrections in [[/blogs/ai-error-handling-ux|AI error handling UX]]. Broader principles are in [[/blogs/human-ai-interaction-design|human-AI interaction design]].",
        ],
      },
      {
        heading: "Types of Feedback",
        body: [],
        table: {
          headers: ["Type", "User effort", "Signal quality", "Best use"],
          rows: [
            ["Ratings (thumbs, stars)", "Very low", "Low to medium", "Trends, finding bad outputs"],
            ["Reasons and comments", "Low to medium", "High when given", "Diagnosing failure types"],
            ["Corrections and edits", "Part of the task", "High", "Specific errors, evaluation data"],
            ["Implicit signals", "None", "Medium, noisy", "Large-scale quality trends"],
            ["Reports", "Medium", "High for safety", "Harmful or inappropriate content"],
          ],
        },
      },
      {
        heading: "From Feedback to Improvement",
        body: [],
        diagram: {
          variant: "feedbackloop",
          alt: "Feedback loop: Output, Feedback + trace ID, Triage (highlighted), Fix, Add to eval set, Release + measure; loop: measure whether the fix worked.",
          caption: "Feedback only matters if it reaches triage and becomes tests and fixes.",
        },
      },
      {
        heading: "Designing Explicit Feedback",
        body: [
          "Place small, consistent controls on each AI output: thumbs up and down, or a similar binary. After a negative rating, offer three to five reasons specific to the feature, such as 'incorrect', 'incomplete', 'didn't follow my request', 'outdated' or 'inappropriate', and an optional comment. Do not require reasons, and do not interrupt the user's task with modal surveys. Occasionally, and sparingly, ask for detail after positive ratings too, to learn what works.",
        ],
      },
      {
        heading: "Capturing Corrections",
        body: [
          "Edits are the richest feedback because they show what the right output looked like. When users edit an AI draft, extracted field or classification, record the original and the final version with the trace ID. Aggregate edit distance as a quality metric, and sample corrections for review. Corrected examples, reviewed for quality and privacy, make excellent evaluation cases.",
        ],
        cta: {
          title: "Collecting feedback but not learning from it?",
          description: "ZSpace Labs designs feedback capture and connects it to evaluation and improvement workflows. See [[/services/ui-ux-design|product design]] and [[/services/ai-automation|AI development]].",
        },
      },
      {
        heading: "Implicit Signals",
        body: [
          "Behaviour provides feedback at scale: inserting or copying outputs, accepting suggestions, regenerating, abandoning a flow, undoing an AI action or escalating to a person. These signals are noisy, since users regenerate out of curiosity and copy outputs they later fix, so interpret them as trends by feature and release rather than judgements on individual outputs.",
        ],
      },
      {
        heading: "Feedback Quality and Bias",
        body: [
          "Feedback comes disproportionately from users who are very pleased or very frustrated, and from certain segments. Combine it with sampled review of random outputs, compare rates by segment and watch for changes caused by UI tweaks rather than quality. A drop in thumbs-down after moving the button is not an improvement.",
        ],
      },
      {
        heading: "Privacy and Consent",
        body: [
          "Feedback usually includes the conversation or document it refers to. Explain in plain language how feedback is used and who may review it, restrict access, set retention and respect enterprise settings that disable human review or data use for improvement. Avoid using feedback content for model training without clear consent and terms; see [[/blogs/ai-data-privacy|AI data privacy]].",
        ],
      },
      {
        heading: "Closing the Loop",
        body: [
          "Triage feedback weekly: categorize negative feedback, find patterns, link to traces and assign fixes. Add representative failures to evaluation sets so they stay fixed. Compare feedback rates by release. Tell users about improvements made from feedback in release notes or in-product messages, which encourages more useful feedback.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Well-designed feedback reveals real-world failures that tests miss and shows whether releases help. It is sparse, biased and sensitive, and it is wasted without a review process. Treat it as one input alongside sampled evaluation and behavioural metrics.",
        ],
      },
      {
        heading: "How to Design AI Feedback Step by Step",
        body: [],
        checklist: [
          "**1. Add per-output rating controls** with optional reasons",
          "**2. Capture edits and corrections** with trace IDs",
          "**3. Define implicit signals** to track",
          "**4. Explain data use** and set access and retention",
          "**5. Triage weekly** and assign fixes",
          "**6. Turn failures into evaluation cases**",
          "**7. Report improvements** back to users",
        ],
      },
      {
        heading: "Feedback in Enterprise Products",
        body: [
          "Business customers often restrict how their data is reviewed. Offer administrator settings that disable human review of conversations or exclude them from improvement, and respect them in pipelines. Where review is allowed, limit access to trained staff, log access and keep retention short. Provide aggregate feedback reports to customer administrators so they can see quality trends in their organization without exposing individual users' content.",
        ],
      },
      {
        heading: "Turning Feedback Into Evaluation Cases",
        body: [
          "Negative feedback with a clear reason is a ready-made test case: the input, the context the system used, what went wrong and, if the user corrected it, what right looks like. After review and privacy checks, add representative cases to evaluation sets tagged by failure type, so future changes are tested against real problems. Track how many evaluation cases came from feedback; it is a good indicator that the loop works. See [[/blogs/llm-evaluation-pipeline|LLM evaluation pipeline]].",
        ],
      },
      {
        heading: "Feedback Data Model",
        body: [
          "Store feedback in a structure that links it to everything needed for analysis, so reviewers do not have to reconstruct context.",
        ],
        code: {
          label: "Example: feedback record (illustrative)",
          text: "feedback_id: fb_20261002_5521\ntrace_id: 7f3c...\nfeature: support_answer\nrelease: 2026.10.2  prompt: support_answer@v12  model: <model-version>\nrating: negative\nreason: outdated\ncomment: \"Policy changed in September\"\ncorrection: null\nuser_segment: customer_plan_pro  locale: en-GB\nreview_allowed: true  retention_until: 2026-12-31\ntriage: { category: retrieval_stale_doc, owner: kb-team, status: fixed, eval_case: billing-118 }",
        },
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a legal drafting tool collects thumbs ratings but the team rarely looks at them. They add reasons specific to drafting, capture lawyers' edits to clauses and review the most edited clause types weekly. The data shows one clause template generating most edits; fixing its prompt and adding the cases to the evaluation set reduces edits on that clause type.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Feedback with no link to the output's trace",
          "Mandatory surveys that interrupt work",
          "Generic reasons that do not diagnose anything",
          "No review process, so feedback piles up unused",
          "Using feedback content for training without consent",
        ],
        cta: {
          title: "Want a feedback loop that improves your AI?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|feedback and evaluation workflows]] for AI features.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Useful AI feedback is easy to give, specific, linked to traces, respectful of privacy and reviewed regularly. Combine ratings, corrections and implicit signals, then turn what you learn into tests and fixes.",
        ],
      },
    ],
  },
];
