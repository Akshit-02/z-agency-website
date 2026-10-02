import type { BlogPost } from "./blog-data";

/**
 * AI knowledge hub, part thirty-one: AI product design continued.
 * ai-ux-design covers practical interaction patterns and states;
 * human-ai-interaction-design covers research-based principles (Microsoft
 * HAX guidelines, Google PAIR); ai-chat-interface-design is general (the
 * ecommerce-specific version is ecommerce-chatbot-ux); ai-copilot-ux is the
 * design view of copilots (engineering is ai-copilot-development).
 * Merged into `posts` in blog-data.ts.
 */

export const aiOpsPosts8: BlogPost[] = [
  // ---------------------------------------- 692 · AI UX DESIGN
  {
    slug: "ai-ux-design",
    title: "AI UX Design: How to Design Better Experiences for AI Applications",
    seoTitle: "AI UX Design: Patterns, States, Uncertainty and User Control",
    excerpt:
      "How to design user experiences for AI applications: setting expectations, choosing interaction patterns, input design, loading and streaming states, showing uncertainty and sources, error recovery, user control, feedback and accessibility.",
    category: "UI/UX",
    banner: "aiuxpatterns",
    bannerAlt:
      "AI UX design in four columns: input (Prompts, Suggestions, Context, Attachments), progress (Streaming, Steps, Cancel, Estimates), output highlighted (Sources, Uncertainty, Editing, Formats) and control (Undo, Confirm, Feedback, Settings).",
    date: "2026-10-02",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ui-ux-design", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise", "martech"],
    relatedSlugs: ["ai-product-design", "human-ai-interaction-design", "ai-chat-interface-design"],
    faqs: [
      { q: "What is AI UX design?", a: "Designing how people interact with AI features: how they give input, understand progress, interpret and verify outputs, correct mistakes and stay in control, given that AI outputs vary and are sometimes wrong." },
      { q: "Should every AI feature be a chat interface?", a: "No. Chat suits open-ended exploration. Many tasks work better as buttons, inline suggestions, autocomplete, generated drafts in existing forms or background automation with review." },
      { q: "How should AI interfaces show loading?", a: "Stream output where possible, show meaningful progress for multi-step work such as 'searching documents' or 'checking order', allow cancelling and avoid silent spinners for long waits." },
      { q: "How do we show uncertainty to users?", a: "Through sources users can check, plain-language qualifiers, highlighting low-confidence fields, offering alternatives and asking clarifying questions, rather than raw probability numbers that users struggle to interpret." },
      { q: "How do we help users write good prompts?", a: "Reduce the need: offer suggested actions, templates and examples, use context the product already has, and ask follow-up questions when requests are ambiguous." },
      { q: "What controls should users have?", a: "Edit outputs before use, undo AI actions, confirm consequential actions, turn features off, choose what data the AI may use and give feedback." },
      { q: "How does accessibility apply to AI interfaces?", a: "Streaming text, dynamic updates and generated content must work with screen readers and keyboard navigation, with announcements for updates, sufficient contrast and alternatives to voice or image-only input." },
      { q: "How do we test AI UX?", a: "With real models and realistic tasks, including failure cases. Observe whether users notice errors, how they verify outputs and whether they trust the feature appropriately." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Good AI UX sets honest expectations, chooses the simplest interaction pattern for the task (often not chat), reduces prompt writing through suggestions and product context, shows progress while the AI works, presents outputs with sources and clear signals of uncertainty, keeps outputs editable and actions reversible, makes errors easy to spot and recover from, collects feedback in context and works for everyone, including keyboard and screen reader users.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "This article covers practical UX patterns. Research-based principles are in [[/blogs/human-ai-interaction-design|human-AI interaction design]], the end-to-end process in [[/blogs/ai-product-design|AI product design]], and specific topics in [[/blogs/ai-chat-interface-design|chat interfaces]], [[/blogs/ai-transparency-ux|transparency]] and [[/blogs/ai-error-handling-ux|error handling]]. General UX practice is in our [[/blogs/ux-design-process|UX design process]] guide.",
        ],
      },
      {
        heading: "Choosing an Interaction Pattern",
        body: [],
        table: {
          headers: ["Pattern", "Example", "Best for"],
          rows: [
            ["Inline suggestion", "Autocomplete, suggested reply", "Frequent, small tasks in a flow"],
            ["One-click action", "Summarize this document, Draft response", "Well-defined tasks with clear output"],
            ["Generated draft in a form", "Pre-filled fields from an uploaded file", "Data entry with review"],
            ["Chat or command panel", "Ask about this account", "Open-ended questions and exploration"],
            ["Background automation", "Auto-tagging with review queue", "High volume, low error cost"],
          ],
        },
      },
      {
        heading: "Input: Reducing the Prompt Burden",
        body: [
          "Most users do not want to write prompts. Use what the product already knows, such as the current record, selected text or user role, as context. Offer suggested actions relevant to the screen, templates for common requests and examples that show what is possible. When a request is ambiguous, ask a short clarifying question rather than guessing. For file and image input, show what was received and what the AI could read.",
        ],
      },
      {
        heading: "Progress and Waiting",
        body: [
          "AI responses take seconds or longer, and agents may take minutes. Stream text so users can start reading. For multi-step work, show steps in plain language ('Searching 3 knowledge sources', 'Checking order status'). Allow cancelling. For long tasks, let users leave and notify them when results are ready. Avoid fake progress bars that do not reflect real work.",
        ],
        diagram: {
          variant: "aiuxstates",
          alt: "AI interaction states: Idle + suggestions, Input, Working steps, Streaming (highlighted), Result + sources, Recover.",
          caption: "Designing every state, not just the happy result, is what makes AI features feel dependable.",
        },
      },
      {
        heading: "Presenting Outputs",
        body: [
          "Outputs should be easy to verify and use. Show sources next to claims, with links to the exact passage. Format for the task: a table for comparisons, a short answer with details on expansion, structured fields for data. Make outputs editable before they are used, and make the next action obvious (insert, send, apply). Distinguish AI-generated content visually where it matters, without cluttering every screen. See [[/blogs/ai-transparency-ux|AI transparency in UX]].",
        ],
        cta: {
          title: "Designing an AI feature users will actually trust?",
          description: "ZSpace Labs designs AI experiences around real model behaviour, from patterns to error states. See [[/services/ui-ux-design|our UI/UX design services]].",
        },
      },
      {
        heading: "Communicating Uncertainty",
        body: [
          "Raw confidence scores rarely help users. Better signals include sources (or the absence of them), plain qualifiers ('based on the 2025 policy; the 2026 version may differ'), highlighting fields the AI was unsure about, offering alternatives, and saying 'I don't know' when the system lacks information. Calibrate language to actual reliability: confident wording on unreliable outputs erodes trust when users discover errors.",
        ],
      },
      {
        heading: "Control and Recovery",
        body: [
          "Users should stay in charge. Let them edit or regenerate outputs, undo AI actions, confirm anything consequential with a clear preview, and turn features off. When something goes wrong, offer specific recovery: rephrase, provide missing information, try a narrower request or contact a person. Error patterns are detailed in [[/blogs/ai-error-handling-ux|AI error handling UX]].",
        ],
      },
      {
        heading: "Feedback in Context",
        body: [
          "Collect feedback where the output appears: quick ratings with optional reasons, corrections captured when users edit outputs, and reporting for harmful content. Explain how feedback is used and avoid interrupting tasks. See [[/blogs/ai-feedback-ux|AI feedback UX]].",
        ],
      },
      {
        heading: "Accessibility",
        body: [
          "Streaming and dynamic content can overwhelm screen readers. Use polite live region announcements for completed responses rather than every token, keep focus stable when content updates, support full keyboard operation, provide text alternatives to voice and image input and meet contrast requirements in [[https://www.w3.org/TR/WCAG22/|WCAG 2.2]]. Test generated content too: AI-written alt text and summaries need checking. More in our [[/blogs/accessible-ui-ux-design|accessible UI/UX design]] guide.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Thoughtful AI UX turns uncertain technology into dependable tools and lifts adoption more than model upgrades often do. It cannot rescue a feature whose quality is too low for its context; UX and model quality must be improved together.",
        ],
      },
      {
        heading: "How to Design AI UX Step by Step",
        body: [],
        checklist: [
          "**1. Pick the simplest pattern** that fits the task",
          "**2. Use product context** to minimize prompting",
          "**3. Design every state**: waiting, streaming, partial, error, uncertain",
          "**4. Show sources** and keep outputs editable",
          "**5. Add confirmation, undo and off switches**",
          "**6. Collect feedback** in context",
          "**7. Test with real models**, including failures, and with assistive technology",
        ],
      },
      {
        heading: "Designing AI Into Forms and Workflows",
        body: [
          "Many of the most useful AI features are invisible as AI: a form that pre-fills from an uploaded document, a search box that understands natural language, a list that sorts by likely priority. These work well because they fit existing mental models. Make AI-filled values visually distinct until confirmed, let users correct them easily and keep manual paths available. Users then get speed without learning a new interaction model; see [[/blogs/ai-copilot-ux|AI copilot UX]] for embedded patterns.",
        ],
      },
      {
        heading: "Testing AI UX",
        body: [
          "Usability tests for AI features need real model outputs and realistic tasks, including tasks where the AI is likely to fail. Observe whether participants notice errors, how they verify outputs, whether they over-trust or under-trust and how they recover. Run diary studies or longer pilots where habits matter, since first impressions of AI features change with repeated use. Combine qualitative findings with metrics such as acceptance, edits and abandonment once features ship. See [[/blogs/ux-heuristic-evaluation|UX heuristic evaluation]] for review methods you can adapt.",
        ],
      },
      {
        heading: "Writing for AI Interfaces",
        body: [
          "Interface text around AI features shapes expectations. Name features by what they do ('Summarize', 'Draft reply') rather than by the technology. Write empty states that show scope and examples. Label AI-generated content plainly. Write error and uncertainty messages that say what happened and what to do next. Keep limitation notes specific to the task.",
          "System prompts also affect the voice users experience, so align them with your content style guide: tone, formality, length, terminology and how to refuse or redirect. Review generated outputs for voice as well as accuracy, and adjust prompts or examples when they drift from your brand. Practical guidance is in [[/blogs/ux-writing|UX writing]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a CRM adds a chat panel for account questions, but usage stays low. Interviews show sales reps want a summary when they open an account, not a conversation. The team adds a one-click account brief with sources at the top of the record, keeps chat for follow-up questions and adds a 'last updated' line. Usage and repeat use increase over the following weeks.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Chat as the default for every AI feature",
          "Silent spinners during long AI work",
          "Confident wording on unreliable outputs",
          "Outputs that cannot be edited or undone",
          "Streaming content that breaks screen readers",
        ],
        cta: {
          title: "Want a UX review of your AI features?",
          description: "Talk to ZSpace Labs about an [[/services/ui-ux-design|AI UX audit]] covering patterns, states, trust and accessibility.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "AI UX is about helping people use imperfect, powerful tools well. Choose fitting patterns, reduce prompting, design every state, make outputs verifiable and editable, and keep users in control.",
        ],
      },
    ],
  },

  // ---------------------------------------- 693 · HUMAN-AI INTERACTION DESIGN
  {
    slug: "human-ai-interaction-design",
    title: "Human-AI Interaction Design: Principles for Building Useful AI Products",
    seoTitle: "Human-AI Interaction Design: Principles, Guidelines and Examples",
    excerpt:
      "Research-based principles for human-AI interaction: communicating capabilities, conveying how well the system performs, appropriate automation, timing, correction and dismissal, explanation, learning over time and global controls, with Microsoft and Google guidance.",
    category: "UI/UX",
    banner: "haiprinciples",
    bannerAlt:
      "Human-AI interaction in four columns: initially (Can do, How well, Examples, Scope), during (Timing, Context, Norms, Bias), when wrong highlighted (Invoke, Dismiss, Correct, Explain) and over time (Remember, Learn, Adapt, Notify).",
    date: "2026-10-02",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ui-ux-design", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "healthcare-healthtech", "b2b-enterprise"],
    relatedSlugs: ["ai-ux-design", "ai-transparency-ux", "human-in-the-loop-ai"],
    faqs: [
      { q: "What is human-AI interaction design?", a: "The design of how people and AI systems work together: what the AI does, how it communicates, when it acts, how people oversee, correct and dismiss it, and how the relationship changes over time." },
      { q: "What are Microsoft's Guidelines for Human-AI Interaction?", a: "Eighteen research-based guidelines published by Microsoft, grouped by when they apply: initially, during interaction, when the system is wrong and over time. They are available with examples in the HAX Toolkit." },
      { q: "What is Google's People + AI Guidebook?", a: "A guide from Google's People + AI Research team covering user needs, data, mental models, explainability and trust, feedback and control, and errors and graceful failure, with worksheets and patterns." },
      { q: "What is appropriate reliance?", a: "Users relying on AI when it is right and not relying on it when it is wrong. Design aims for calibrated trust rather than maximum trust." },
      { q: "What is automation bias?", a: "The tendency to accept automated suggestions without sufficient checking, even when they are wrong. Interfaces that show evidence, require active confirmation for important decisions and make errors visible help reduce it." },
      { q: "How should AI systems learn from users over time?", a: "Cautiously and visibly: remember relevant context, adapt to preferences, avoid disruptive changes, let users see and reset what the system has learned and notify them of significant updates." },
      { q: "How much should AI explain its outputs?", a: "Enough for users to judge whether to rely on them: sources, key factors or reasoning summaries for consequential outputs, with detail available on demand rather than by default." },
      { q: "Do these principles apply to agents?", a: "Yes, with more emphasis on scoping actions, confirmation, visibility of what the agent is doing and easy interruption." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Good human-AI interaction makes clear what the system can do and how well, acts at the right time with relevant context, avoids bias and respects social norms, makes AI easy to invoke, dismiss and correct, explains why it did something, narrows its scope when uncertain, learns from users cautiously and visibly, and gives people global control and notice of changes. These principles, drawn from Microsoft's Guidelines for Human-AI Interaction and Google's People + AI Guidebook, aim for calibrated trust rather than maximum trust.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "This article explains principles. Practical patterns are in [[/blogs/ai-ux-design|AI UX design]], communication of limits in [[/blogs/ai-transparency-ux|AI transparency in UX]] and approval workflows for automated decisions in [[/blogs/human-in-the-loop-ai|human-in-the-loop AI]].",
        ],
      },
      {
        heading: "Two Research-Based References",
        body: [
          "Microsoft's [[https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/|Guidelines for Human-AI Interaction]] are 18 evidence-based guidelines grouped by when they apply: initially, during interaction, when the system is wrong and over time. The [[https://www.microsoft.com/en-us/haxtoolkit/|HAX Toolkit]] adds a design library and workbook. Google's [[https://pair.withgoogle.com/guidebook/|People + AI Guidebook]] covers user needs, mental models, explainability and trust, feedback and control, and errors and graceful failure. Both are free and worth using as checklists during design reviews.",
        ],
      },
      {
        heading: "Principles by Phase",
        body: [],
        diagram: {
          variant: "haiphases",
          alt: "Human-AI interaction phases: Before use, Set expectations, During use, When wrong (highlighted), Over time, Notify changes.",
          caption: "Most trust is won or lost in how the system behaves when it is wrong.",
        },
        table: {
          headers: ["Phase", "Principles (summarized from Microsoft HAX)"],
          rows: [
            ["Initially", "Make clear what the system can do; make clear how well it can do it"],
            ["During interaction", "Time services based on context; show contextually relevant information; match social norms; mitigate social biases"],
            ["When wrong", "Support efficient invocation, dismissal and correction; scope services when in doubt; make clear why the system did what it did"],
            ["Over time", "Remember recent interactions; learn from behaviour; update and adapt cautiously; encourage granular feedback; convey consequences of actions; provide global controls; notify users about changes"],
          ],
        },
      },
      {
        heading: "Communicating Capability and Performance",
        body: [
          "Users form mental models quickly, often over-estimating AI after a few good answers. State what the feature is for, what it cannot do and how reliable it is in plain terms ('drafts replies for common billing questions; review before sending'). Example prompts and sample outputs teach scope better than long explanations. When capabilities change, say so.",
        ],
      },
      {
        heading: "Appropriate Automation and Timing",
        body: [
          "Decide how proactive the AI should be. Interrupting users with suggestions they did not ask for is costly; offering help at natural moments, such as after uploading a document or when a form has errors, is welcome. Match automation to error cost: automate what is safe and reversible, suggest where people have context, inform where decisions must stay human. Scope down when uncertain: a narrower, correct answer is better than a broad, wrong one.",
        ],
        cta: {
          title: "Want AI features that people rely on appropriately?",
          description: "ZSpace Labs applies human-AI interaction research to product design and AI implementation. See [[/services/ui-ux-design|AI product design services]].",
        },
      },
      {
        heading: "Oversight, Correction and Dismissal",
        body: [
          "People should be able to invoke AI easily, dismiss it without penalty and correct it efficiently. Corrections should stick: if a user fixes a field, the system should not overwrite it. Dismissed suggestions should not keep returning. For consequential outputs, design active confirmation that requires the user to look at the evidence, which counters automation bias, rather than a single default 'accept' button.",
        ],
      },
      {
        heading: "Explanation",
        body: [
          "Explanations help users decide whether to rely on an output. Useful forms include sources and quotes, the main factors behind a recommendation, the data the system used and what it did not consider. Keep explanations short by default, with detail on request, and never invent explanations that do not reflect how the output was actually produced.",
        ],
      },
      {
        heading: "Learning Over Time",
        body: [
          "Personalization and memory make AI more useful but can surprise users. Make learned preferences visible and editable, let users reset them, adapt gradually rather than changing behaviour abruptly and notify users when significant updates change how the feature works. Provide global controls for data use and features, not just per-interaction options.",
        ],
      },
      {
        heading: "Bias and Social Norms",
        body: [
          "AI outputs can reflect stereotypes and exclude groups. Test outputs across demographics, languages and contexts relevant to your users, avoid language that assumes gender, culture or ability, and design tone appropriate to the setting. For decisions affecting people, combine design with governance; see [[/blogs/ai-governance-framework|AI governance framework]].",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Principle-based design gives teams a shared vocabulary and catches many trust problems early. Principles need interpretation for each product, and following them does not fix poor model quality. Use them in design reviews alongside real-model prototypes and user testing.",
        ],
      },
      {
        heading: "How to Apply the Principles Step by Step",
        body: [],
        checklist: [
          "**1. Review your design** against each guideline phase",
          "**2. Write capability and limitation statements** in plain language",
          "**3. Define automation levels** from error cost",
          "**4. Design correction, dismissal and confirmation** flows",
          "**5. Add explanations** proportionate to stakes",
          "**6. Make learning visible** and controllable",
          "**7. Test for calibrated reliance** with real users and failure cases",
        ],
      },
      {
        heading: "Calibrated Trust in Practice",
        body: [
          "Calibrated trust means users rely on AI exactly where it performs well. Designs that support it share traits: evidence is visible (sources, highlighted uncertainty), checking is quick (side-by-side views, previews), confirmation for important decisions requires engaging with that evidence and performance information is honest and specific. Measure calibration in testing by comparing how often users accept outputs that were right and outputs that were wrong; a design that raises acceptance of both has increased trust, not calibration.",
        ],
      },
      {
        heading: "Principles for Agents",
        body: [
          "As AI systems act on users' behalf, interaction principles extend to delegation: make clear what the agent will do before it does it, show progress and let users pause or stop, keep consequential actions behind confirmation, report what was done in a reviewable form and make it easy to undo or correct. Scope agents narrowly when they are uncertain and ask rather than guess. Approval workflows are covered in [[/blogs/human-in-the-loop-ai|human-in-the-loop AI]] and agent permissions in [[/blogs/ai-agent-access-control|AI agent access control]].",
        ],
      },
      {
        heading: "Using the Guidelines in Design Reviews",
        body: [
          "Guidelines are most useful as a structured review. For each AI feature, walk through the four phases and ask concrete questions: Does onboarding state what the feature can and cannot do? Does the feature act at sensible moments? When it is wrong, can users dismiss, correct and understand why? Does it adapt visibly and notify users of changes? Record which guidelines apply, how the design addresses them and which gaps are accepted and why.",
          "Pair the review with evidence: usability sessions with real model outputs, especially failure cases, and metrics such as acceptance and correction rates after launch. The HAX Toolkit includes a workbook designed for this kind of review, and the [[https://pair.withgoogle.com/guidebook/|People + AI Guidebook]] offers worksheets for user needs, mental models and feedback.",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a clinical documentation tool drafts visit notes. Early testing shows clinicians approving drafts with errors because a single 'Approve' button is prominent. The redesign highlights sections derived from uncertain audio, links each section to the transcript, requires review of highlighted sections before signing and lets clinicians set preferred note styles that persist. Reviewers spot more errors in testing, and adoption holds.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Overselling capability in onboarding",
          "Proactive suggestions at disruptive moments",
          "One-click approval for consequential outputs",
          "Explanations that do not reflect how outputs were produced",
          "Silent changes in behaviour after updates",
        ],
        cta: {
          title: "Want a human-AI interaction review?",
          description: "Talk to ZSpace Labs about evaluating your AI features against [[/services/ui-ux-design|research-based interaction guidelines]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Human-AI interaction design aims for people to rely on AI exactly as much as it deserves. Communicate capability honestly, act at the right time, make correction easy, explain enough, learn visibly and give people control.",
        ],
      },
    ],
  },

  // ---------------------------------------- 694 · AI CHAT INTERFACE DESIGN
  {
    slug: "ai-chat-interface-design",
    title: "AI Chat Interface Design: How to Design More Effective AI Conversations",
    seoTitle: "AI Chat Interface Design: Layout, Context, Sources and States",
    excerpt:
      "How to design AI chat interfaces: conversation layout, empty states and suggestions, context visibility, source references, message states, tool activity, attachments, feedback, error recovery, history and responsive design.",
    category: "UI/UX",
    banner: "chatuianatomy",
    bannerAlt:
      "AI chat interface in four columns: header (Context, Mode, New chat, Settings), conversation highlighted (Messages, Sources, Tool steps, States), composer (Input, Attachments, Suggestions, Stop) and around it (History, Feedback, Handoff, Privacy).",
    date: "2026-10-02",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ui-ux-design", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce", "b2b-enterprise"],
    relatedSlugs: ["ai-ux-design", "ecommerce-chatbot-ux", "ai-copilot-ux"],
    faqs: [
      { q: "What makes a good AI chat interface?", a: "Clear scope and suggestions at the start, visible context, readable streaming responses, sources users can check, visible tool activity, easy stopping and retrying, feedback, smooth handoff to people and a layout that works on all screen sizes." },
      { q: "Should a chat show which data the AI is using?", a: "Yes. Show the current context, such as the selected document, account or workspace, so users know what the AI can see and can change it." },
      { q: "How should sources be displayed?", a: "As inline citations linked to a source list or preview showing the exact passage, so users can verify claims without leaving the conversation." },
      { q: "How should tool activity appear?", a: "As compact, plain-language steps such as 'Looked up order 4821', expandable for detail, with clear confirmation prompts before consequential actions." },
      { q: "Do chat interfaces need a stop button?", a: "Yes. Users should be able to stop generation or long agent runs at any time, and to edit their message and retry." },
      { q: "How should errors appear in chat?", a: "As specific messages with next steps: retry, rephrase, provide missing details or contact a person, while preserving the user's message so it is not lost." },
      { q: "How do we design chat for mobile?", a: "Keep the composer accessible above the keyboard, use full-width messages, collapse sources and tool steps, support voice input where useful and make long outputs easy to copy or open." },
      { q: "When is chat the wrong interface?", a: "When tasks are repetitive and well defined, when users do not know what to ask, or when outputs belong inside an existing workflow. Buttons, inline actions or forms may serve better." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Effective AI chat interfaces open with clear scope and useful suggested prompts, show what context the AI is using, stream readable responses with inline sources users can check, display tool activity in plain language with confirmation before consequential actions, let users stop, edit and retry easily, handle errors with specific next steps, collect feedback per message, offer a handoff to people and adapt cleanly to mobile and assistive technology.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "General AI UX patterns, including when not to use chat, are in [[/blogs/ai-ux-design|AI UX design]]. Embedded assistants are covered in [[/blogs/ai-copilot-ux|AI copilot UX]], shopping assistants specifically in [[/blogs/ecommerce-chatbot-ux|ecommerce chatbot UX]] and error states in [[/blogs/ai-error-handling-ux|AI error handling UX]].",
        ],
      },
      {
        heading: "Anatomy of a Chat Interface",
        body: [],
        table: {
          headers: ["Element", "Purpose", "Design notes"],
          rows: [
            ["Context bar", "Shows what the AI can see", "Workspace, document, account; changeable"],
            ["Empty state", "Teaches scope", "Short description, 3 to 5 suggested prompts"],
            ["Messages", "Conversation", "Readable widths, clear roles, Markdown rendered safely"],
            ["Sources", "Verification", "Inline citations, previews, links to exact passages"],
            ["Tool steps", "Transparency of actions", "Collapsed by default, plain language"],
            ["Composer", "Input", "Multiline, attachments, stop, keyboard shortcuts"],
            ["Message actions", "Use and feedback", "Copy, insert, retry, rate, report"],
          ],
        },
      },
      {
        heading: "Starting the Conversation",
        body: [
          "A blank text box gives users no idea what the assistant can do. Use the empty state to state scope in one line and offer suggested prompts based on the user's role, current page or recent activity. Suggestions double as onboarding; see [[/blogs/ai-onboarding-ux|AI onboarding UX]]. Keep a privacy note visible if conversations are stored or reviewed.",
        ],
      },
      {
        heading: "Message States",
        body: [],
        diagram: {
          variant: "chatstates",
          alt: "Chat message lifecycle: Sent, Thinking steps, Streaming (highlighted), Complete, Sources + actions, Feedback; branch: error leads to retry  ;  stop leads to edit.",
          caption: "Each state needs its own design, including stopped and failed, not only the finished answer.",
        },
      },
      {
        heading: "Context and Sources",
        body: [
          "Users need to know what the AI is looking at. Show the active context, such as the selected file, project or customer, and let users add or remove sources. In answers, place citations next to claims and open a preview of the passage on click, so users can verify without losing their place. When the answer is not based on available sources, say so.",
        ],
        cta: {
          title: "Building a chat assistant into your product?",
          description: "ZSpace Labs designs and builds AI chat experiences with sources, tool steps and handoff. See [[/services/ui-ux-design|our product design services]].",
        },
      },
      {
        heading: "Tool Activity and Confirmation",
        body: [
          "When the assistant calls tools, show compact steps ('Searched help centre', 'Checked order 4821'), expandable for details. Before consequential actions, such as cancelling a subscription or sending an email, show a confirmation card with exactly what will happen and the option to edit or cancel. Never hide actions inside prose.",
        ],
      },
      {
        heading: "Composer and Attachments",
        body: [
          "Support multiline input, paste and drag-and-drop attachments with clear file chips, size and type limits stated upfront, and indicators of what the AI could read from each file. Provide a stop button during generation and allow editing the last message to retry. Keyboard shortcuts help power users; make sure Enter behaviour is clear on each platform.",
        ],
      },
      {
        heading: "Errors, Handoff and History",
        body: [
          "On failure, keep the user's message, explain briefly and offer retry or alternatives. Offer a handoff to a person where support exists, passing the conversation along. Let users find past conversations, rename or delete them and start new ones easily, since long conversations degrade both performance and clarity.",
        ],
      },
      {
        heading: "Responsive and Accessible Design",
        body: [
          "On mobile, keep the composer visible above the keyboard, use full-width messages, collapse sources and tool steps, and make tables scroll horizontally within the message rather than breaking the layout. For accessibility, announce completed messages through live regions rather than every streamed token, keep focus predictable, label icon buttons and ensure contrast meets [[https://www.w3.org/TR/WCAG22/|WCAG 2.2]].",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "A well-designed chat interface makes open-ended AI capabilities approachable and verifiable. Chat still places the burden of asking on users, and long conversations become hard to navigate. Combine chat with inline actions and structured outputs where tasks are predictable.",
        ],
      },
      {
        heading: "How to Design an AI Chat Step by Step",
        body: [],
        checklist: [
          "**1. Define scope** and write suggested prompts",
          "**2. Show context** and let users change it",
          "**3. Design all message states**, including stopped and failed",
          "**4. Add inline sources** with previews",
          "**5. Show tool steps** and confirmation cards",
          "**6. Add feedback, handoff and history**",
          "**7. Test on mobile** and with screen readers",
        ],
      },
      {
        heading: "Long Conversations and Context Limits",
        body: [
          "Conversations grow, and models have context limits; older messages may be summarized or dropped, and quality can degrade in very long threads. Design for this: suggest starting a new conversation when the topic changes, show when earlier context has been summarized, let users pin important information, and give each conversation a clear title for later retrieval. For assistants that remember across conversations, show what is remembered and allow deletion; see [[/blogs/ai-agent-memory|AI agent memory]].",
        ],
      },
      {
        heading: "Rendering Rich Output Safely",
        body: [
          "Chat interfaces often render Markdown, tables, code, links and images from model output. Sanitize rendered HTML, restrict external images and links to allowed domains or require a click to load them, open links with clear destination previews and render code as text, never executing it. These measures prevent cross-site scripting and data exfiltration through generated content. See [[/blogs/ai-data-leakage|AI data leakage]] for the security reasoning.",
        ],
      },
      {
        heading: "Handoff to People",
        body: [
          "Where people stand behind an assistant, such as support agents, HR or account managers, the handoff is part of the chat design. Offer it visibly, not only after repeated failures. Pass the full conversation, retrieved context and what the assistant tried, so the person does not start over. Set expectations about response times and channels. When the person replies in the same interface, make it clear who is speaking. After resolution, the conversation becomes valuable feedback for improving the assistant; see [[/blogs/ai-customer-support-automation|AI customer support automation]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: an internal policy assistant receives complaints that answers cannot be trusted. The redesign adds a context bar showing which policy collections are searched, inline citations that open the exact paragraph, a 'not found in policies' state instead of guesses and a button to ask HR directly with the conversation attached. Usage grows and HR receives fewer duplicate questions.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Blank chat boxes with no guidance",
          "Answers without sources or with sources users cannot open",
          "Hidden tool actions",
          "No stop button or retry",
          "Layouts that break on mobile with tables or code",
        ],
        cta: {
          title: "Want a review of your AI chat experience?",
          description: "Talk to ZSpace Labs about a [[/services/ui-ux-design|chat UX review]] covering scope, sources, states and accessibility.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Chat interfaces work when users know what to ask, can see what the AI is using, can check what it says and stay in control of what it does. Design every state and verify on every screen size.",
        ],
      },
    ],
  },

  // ---------------------------------------- 695 · AI COPILOT UX
  {
    slug: "ai-copilot-ux",
    title: "AI Copilot UX: How to Design Assistants That Fit Into Existing Workflows",
    seoTitle: "AI Copilot UX: Inline Help, Approval, Editing and Undo",
    excerpt:
      "How to design AI copilots that fit existing workflows: contextual assistance, inline suggestions, side panels, editable outputs, user approval, previews, undo, discoverability and balancing automation with user control.",
    category: "UI/UX",
    banner: "copilotuxpatterns",
    bannerAlt:
      "AI copilot UX patterns compared (Inline, Action, Panel and Draft, with Action highlighted) by interrupts, effort, best for and control.",
    date: "2026-10-02",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ui-ux-design", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise", "martech"],
    relatedSlugs: ["ai-copilot-development", "ai-ux-design", "ai-chat-interface-design"],
    faqs: [
      { q: "What is an AI copilot in UX terms?", a: "An assistant embedded in an existing product that understands the user's current context and helps complete tasks there, through suggestions, drafts and confirmed actions, rather than in a separate chat tool." },
      { q: "Inline suggestions or a side panel?", a: "Inline suggestions suit small, frequent tasks in the flow of work, such as completing text or filling fields. A side panel suits open questions, multi-step help and work spanning several objects. Many copilots offer both." },
      { q: "How do we keep users in control?", a: "Make every output a draft until accepted, show previews of changes, require confirmation for consequential actions, support undo and let users turn suggestions off or adjust how proactive the copilot is." },
      { q: "How do users discover copilot features?", a: "Through contextual entry points on relevant screens, suggestions at natural moments, empty-state examples and short onboarding, rather than a single generic button." },
      { q: "Should copilots act automatically?", a: "Only for low-risk, reversible tasks users have opted into. Most copilot actions should be proposed and confirmed, especially in shared or customer-facing data." },
      { q: "How do we design copilot actions on many records?", a: "Show a preview list of affected records and changes, allow deselecting items, confirm with a count and provide bulk undo." },
      { q: "How do we measure copilot UX?", a: "Through suggestion acceptance and edit rates, undo rates, task time, adoption by segment and feedback, compared with workflows without the copilot." },
      { q: "What about copilot fatigue?", a: "Too many suggestions train users to ignore them. Limit proactive suggestions to high-value moments and learn from dismissals." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Design copilots to fit the work users already do: use the current screen and selection as context, offer inline suggestions for small frequent tasks and a side panel for open questions, treat every output as an editable draft, preview changes before applying them, require confirmation for consequential or bulk actions, support undo, keep proactive suggestions rare and well timed, make features discoverable where they help and let users control how much the copilot does.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Engineering a copilot, including context, tools and permissions, is in [[/blogs/ai-copilot-development|AI copilot development]]. General patterns are in [[/blogs/ai-ux-design|AI UX design]] and conversation design in [[/blogs/ai-chat-interface-design|AI chat interface design]].",
        ],
      },
      {
        heading: "Copilot Patterns",
        body: [],
        table: {
          headers: ["Pattern", "Example", "Interruption", "Best for"],
          rows: [
            ["Inline suggestion", "Ghost text, suggested field values", "Low", "Frequent small tasks"],
            ["Contextual action", "Summarize this ticket, Draft reply", "None until clicked", "Defined tasks on one object"],
            ["Side panel", "Ask about this project", "None until opened", "Questions, multi-step help"],
            ["Proactive nudge", "Three invoices look duplicated", "Medium", "High-value moments only"],
            ["Background draft", "Prepared weekly report awaiting review", "Low", "Recurring outputs"],
          ],
        },
      },
      {
        heading: "The Suggest, Review, Apply Loop",
        body: [],
        diagram: {
          variant: "copilotuxflow",
          alt: "Copilot interaction loop: Work in context, Suggest or invoke, Draft + preview (highlighted), User edits, Apply or dismiss, Undo.",
          caption: "The preview and edit step is where users stay in control of what the copilot changes.",
        },
      },
      {
        heading: "Context Is the Copilot's Advantage",
        body: [
          "A copilot knows where the user is: the record open, the selection, the step in the workflow. Use that to make suggestions specific and to reduce prompting: 'Summarize this ticket' needs no explanation. Show what context the copilot used, especially when it draws from other records, so users understand why it suggested something and can correct it.",
        ],
      },
      {
        heading: "Drafts, Previews and Approval",
        body: [
          "Treat every output as a draft. Text suggestions should be easy to accept partially, edit or reject. Changes to data should be shown as a preview with differences highlighted before applying. Actions affecting other people, external systems or many records need explicit confirmation with a clear summary. Approval should require looking at what matters, not just clicking through.",
        ],
        cta: {
          title: "Adding a copilot to your product?",
          description: "ZSpace Labs designs and builds copilots that fit existing workflows, from inline suggestions to confirmed actions. See [[/services/ui-ux-design|product design]] and [[/services/ai-automation|AI development]].",
        },
      },
      {
        heading: "Undo and Recovery",
        body: [
          "Undo is what makes users comfortable trying AI actions. Support undo for every copilot change, including bulk changes, for a reasonable period. Where undo is impossible, such as sent emails, require confirmation and say so. Record copilot actions in history so users and colleagues can see what changed and why.",
        ],
      },
      {
        heading: "Timing and Proactivity",
        body: [
          "Proactive suggestions are powerful and easily overused. Reserve them for moments where help is clearly valuable, such as a likely error, a repetitive task or a deadline. Let users dismiss suggestions with one action, remember dismissals and offer settings to adjust how proactive the copilot is. Measure dismissal rates; frequent dismissals mean the copilot is interrupting rather than helping.",
        ],
      },
      {
        heading: "Discoverability",
        body: [
          "A single sparkle button in a toolbar rarely explains what a copilot can do. Place entry points where tasks happen: next to the field, on the record, in the empty state. Use short examples during onboarding and show suggested actions relevant to the current screen. See [[/blogs/ai-onboarding-ux|AI onboarding UX]].",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Well-integrated copilots deliver value without forcing users to change tools or learn prompting. They require deep knowledge of workflows and careful design of many small interactions, and poorly timed suggestions quickly become noise. Start with a few high-value tasks and expand.",
        ],
      },
      {
        heading: "How to Design a Copilot Step by Step",
        body: [],
        checklist: [
          "**1. Map workflows** and pick high-frequency, high-friction tasks",
          "**2. Choose patterns** per task: inline, action, panel or nudge",
          "**3. Design drafts and previews** for every output",
          "**4. Define confirmation rules** for consequential and bulk actions",
          "**5. Implement undo** and action history",
          "**6. Limit proactive suggestions** and learn from dismissals",
          "**7. Measure acceptance, edits, undo and task time**",
        ],
      },
      {
        heading: "Personalization and Settings",
        body: [
          "Different users want different levels of help. Offer settings for proactivity (always suggest, suggest on request, off), tone and length of drafts, and which data sources the copilot may use. Learn preferences from behaviour cautiously, such as preferred length from edits, and show what has been learned so users can adjust it. Administrators in business products need organization-wide controls, such as disabling features or restricting data sources for certain teams.",
        ],
      },
      {
        heading: "Copilots in Shared and Collaborative Work",
        body: [
          "In shared documents, projects and records, copilot actions affect colleagues. Show who requested an AI change and mark AI-generated content until a person reviews it. Respect each viewer's permissions when the copilot summarizes shared content, and avoid surfacing information from records a collaborator cannot access. Notify affected people of significant AI-initiated changes, just as you would for a teammate's edits. Permission handling is covered in [[/blogs/ai-copilot-development|AI copilot development]].",
        ],
      },
      {
        heading: "Measuring Copilot Experience",
        body: [],
        table: {
          headers: ["Metric", "What it tells you"],
          rows: [
            ["Suggestion acceptance rate", "Whether suggestions are useful"],
            ["Edit distance before acceptance", "How much users fix drafts"],
            ["Dismissal rate of proactive suggestions", "Whether timing is right"],
            ["Undo rate after actions", "Whether actions match intent"],
            ["Task time with and without copilot", "Real productivity effect"],
            ["Repeat use by segment", "Which users benefit"],
          ],
        },
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a project management tool launches a copilot that rewrites task descriptions automatically, and users complain about unwanted changes. The redesign shows rewrites as suggestions with a diff, adds a 'tidy up' action users invoke themselves, keeps automatic behaviour only for formatting checklists and adds undo for all copilot edits. Suggestion acceptance improves and complaints stop.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Copilots that change data without preview",
          "Too many proactive suggestions",
          "A single generic entry point with no context",
          "No undo for AI changes",
          "Forcing chat for tasks that need one click",
        ],
        cta: {
          title: "Want feedback on your copilot design?",
          description: "Talk to ZSpace Labs about a [[/services/ui-ux-design|copilot UX review]] grounded in your users' workflows.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "The best copilots feel like part of the product, not a separate assistant. Use context, keep outputs as drafts, preview changes, confirm what matters, support undo and speak up only when it helps.",
        ],
      },
    ],
  },
];
