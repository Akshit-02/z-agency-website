import type { BlogPost } from "./blog-data";

/**
 * AI interfaces cluster, part three (published 2026-10-08): multimodal AI
 * product design, background AI agent UX and the AI interface patterns hub.
 * Sources checked 2026-10-08: W3C WCAG 2.2; Google People + AI Guidebook;
 * MCP Apps announcement.
 */

export const aiInterfacePosts3: BlogPost[] = [
  // ---------------------------------------- MULTIMODAL PRODUCT DESIGN
  {
    slug: "multimodal-ai-product-design",
    title: "Multimodal AI Product Design: Designing Experiences Across Text, Voice, Images and Video",
    seoTitle: "Multimodal AI Product Design: Text, Voice, Images and Video",
    excerpt:
      "How product designers choose between text, voice, images, video, documents and screenshots for each AI task, with examples and accessibility in mind.",
    category: "UI/UX",
    banner: "ondeviceflow",
    sceneKind: "design",
    date: "2026-10-08",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ui-ux-design", "mobile-app-development"],
    relatedIndustrySlugs: ["retail", "healthcare-healthtech", "real-estate"],
    relatedSlugs: ["multimodal-ai-applications", "voice-ai-agent-development", "ai-ux-design"],
    faqs: [
      { q: "What is multimodal AI product design?", a: "It is deciding which input and output modalities (text, voice, images, video, documents, screenshots) a product should use for each task, and designing how they work together, so people can show, say or type whatever is easiest and receive results in the most useful form." },
      { q: "When should a product use voice?", a: "When hands or eyes are busy, when typing is slow or difficult, or for quick commands and conversations. Voice is weak for long lists, comparisons, precise edits and anything people need to review or keep." },
      { q: "When is image input better than text?", a: "When the thing is easier to show than describe: a damaged product, a skin condition (with care), a room, a part number on a label, a chart or a screen with an error. A photo plus one sentence often beats a paragraph." },
      { q: "Should outputs match the input modality?", a: "Not necessarily. A spoken question about a delivery may be best answered by voice, but a spoken question comparing five products is better answered on screen. Choose output by what the user needs to do next." },
      { q: "How does multimodal design affect accessibility?", a: "It can help, by letting people choose the modality that works for them, but every key task must remain possible without any single modality: captions for audio, text alternatives for images and non-voice paths for voice features." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "**Multimodal AI product design** is choosing, for each task, how people should give information to an AI (type it, say it, show it with a photo, video, document or screenshot) and how the AI should respond (text, speech, images, structured UI). The right choice depends on the task, the context the person is in and what they need to do next, not on what the model can handle.",
          "A useful rule: let people use the cheapest way to express what they mean, and return results in the form that makes the next step easiest.",
        ],
      },
      {
        heading: "What each modality is good at",
        body: [],
        table: {
          headers: ["Modality", "Strengths", "Weaknesses", "Typical uses"],
          rows: [
            ["Text", "Precise, reviewable, searchable, easy to edit", "Slow to type on mobile; hard to describe visual things", "Questions, instructions, drafts"],
            ["Voice", "Fast, hands-free, natural for conversation", "Linear, hard to review, noisy environments, privacy in public", "Commands, driving, field work, phone support"],
            ["Image / photo", "Shows what is hard to describe", "Quality varies; privacy of what is in frame", "Damage claims, product identification, inspections"],
            ["Video", "Shows motion, sequence, sound", "Large, slow to process and review", "How-to, diagnostics, demonstrations"],
            ["Documents", "Complete, authoritative context", "Long, mixed layouts, sensitive content", "Contracts, invoices, statements, specs"],
            ["Screenshots", "Exact on-screen state", "May include sensitive data", "Support, bug reports, 'what does this mean?'"],
          ],
        },
      },
      {
        heading: "How to decide modality for each task",
        body: [
          "Ask four questions per task. **What is the person's context?** Hands busy, walking, in a noisy store, at a desk. **What is easiest to express?** Something seen (photo), something said quickly (voice), something precise (text). **What will they do with the result?** Review and edit (text or UI), act immediately (voice or a single button), compare (a table on screen). **What are the risks?** Privacy of camera and microphone, misrecognition, accessibility.",
        ],
        code: {
          label: "Choosing modalities (diagram)",
          text: `Task
 │
 ├─ Is the subject visual (object, damage, screen)?
 │     └─ yes → photo / screenshot input (+ short text)
 ├─ Are the person's hands or eyes busy?
 │     └─ yes → voice input; brief spoken output
 ├─ Is the source a long document?
 │     └─ yes → upload; answer with cited passages
 └─ otherwise → text input
 │
 Output: what happens next?
 ├─ compare / choose   → table or cards on screen
 ├─ act now            → one clear action + confirmation
 ├─ understand         → short text, sources on demand
 └─ hands busy         → speech, with a saved text copy`,
        },
      },
      {
        heading: "Examples",
        body: [
          "**Ecommerce returns (hypothetical).** Instead of a long form, the customer photographs the damaged item and says what happened. The AI pre-fills the return reason and condition, shows the result on screen for review and asks for confirmation. **Field service.** A technician speaks while working, asks for the wiring diagram, and receives a short spoken answer plus the diagram on a tablet. **Insurance claim intake.** A video walk-through of a room plus a few spoken notes becomes a structured draft claim the adjuster reviews. **Software support.** A user pastes a screenshot of an error; the assistant identifies the screen, explains the message and links the fix. **Real estate.** A buyer uploads a floor plan and asks which rooms fit a desk and a sofa; the answer marks the plan rather than describing it.",
        ],
      },
      {
        heading: "Combining modalities in one flow",
        body: [
          "The best multimodal products switch modality within a task. Voice for the request, screen for the comparison, a tap to confirm, a text receipt to keep. Design the hand-offs between modalities explicitly: what appears on screen when the user speaks, how a spoken answer points to on-screen detail ('I've put the three options on your screen'), and how the conversation continues if the user switches from voice to typing mid-task.",
        ],
      },
      {
        heading: "Feedback, errors and confirmation per modality",
        body: [
          "Each modality fails differently. Voice mishears: show or read back what was understood before acting on anything consequential. Photos are blurred or ambiguous: say what is unclear and ask for another angle rather than guessing. Documents are long: cite the passages used. Always confirm consequential actions in a form the user can review, usually on screen, even if the request was spoken; see [[/blogs/ai-action-confirmation-ux|AI action confirmation UX]].",
        ],
      },
      {
        heading: "Privacy and accessibility",
        body: [
          "Camera, microphone and screenshots capture more than the task needs: faces, other people's voices, other open windows. Ask for access only when needed, say what is stored and for how long, and offer to blur or crop. For accessibility, multimodal design can widen access by letting people choose, but no key task should depend on a single modality: provide captions and transcripts, text alternatives for images and a non-voice path for every voice feature, in line with [[https://www.w3.org/TR/WCAG22/|WCAG 2.2]]. See [[/blogs/accessible-ui-ux-design|accessibility in UI/UX design]].",
        ],
      },
      {
        heading: "Design checklist",
        body: [],
        checklist: [
          "Map each task to the easiest input and the most useful output",
          "Let people switch modality mid-task without losing context",
          "Read back or show what was understood before consequential actions",
          "Ask for better input instead of guessing from poor images or audio",
          "Keep a text record of spoken interactions",
          "Request camera and microphone access only in context; explain storage",
          "Ensure every task works without any single modality",
          "Test in real environments: noise, light, one-handed use",
        ],
        cta: {
          title: "Designing a multimodal AI experience?",
          description: "ZSpace Labs designs and builds AI features across web and mobile, including voice, camera and document flows. See [[/services/ui-ux-design|UI/UX design]] and [[/services/mobile-app-development|mobile app development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Multimodal AI is a product decision before it is a model decision. Choose modalities per task based on context, expressiveness and what happens next; combine them within a flow; design for each modality's failure modes; and protect privacy and accessibility. For the engineering side, see [[/blogs/multimodal-ai-applications|multimodal AI applications]], and for voice specifically, [[/blogs/voice-ai-agent-development|voice AI agent development]].",
        ],
      },
    ],
  },

  // ---------------------------------------- BACKGROUND AGENT UX
  {
    slug: "background-ai-agent-ux",
    title: "Background AI Agent UX: Designing for Tasks That Run While Users Are Away",
    seoTitle: "Background AI Agent UX: Designing Long-Running AI Tasks",
    excerpt:
      "How to design long-running AI agent tasks: starting them, showing status, notifying at the right moments, pausing for input and presenting results.",
    category: "UI/UX",
    banner: "durableagentflow",
    sceneKind: "agent",
    date: "2026-10-08",
    readingTime: "5 min read",
    relatedServiceSlugs: ["ui-ux-design", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise"],
    relatedSlugs: ["durable-ai-agents", "ai-agent-trust-ux", "ai-agent-handoffs"],
    faqs: [
      { q: "What is a background AI agent?", a: "An agent that works on a task for minutes, hours or days without the user watching, such as researching suppliers, processing a batch of documents or monitoring orders, and reports back when it needs input or has finished." },
      { q: "How should background agent progress be shown?", a: "In a task list or inbox with each task's goal, status, current step, progress, what it is waiting for and an estimate only if it is reliable. Details and the activity log should be one click away." },
      { q: "When should a background agent notify the user?", a: "When it needs a decision, when it fails or is blocked, when it finishes, and when something important and time-sensitive is found. Routine progress should be visible but not pushed as notifications." },
      { q: "What happens if the agent needs input while the user is away?", a: "It should pause the affected step, keep working on anything independent, notify the user with a clear question and a deadline, and follow a safe default (usually do nothing) if no answer arrives." },
      { q: "How is this different from a progress bar?", a: "A progress bar suits deterministic jobs. Agent tasks change plans, wait for people and can partially succeed, so they need status, explanations, intermediate results and ways to steer, not just a percentage." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "**Background agents** work on tasks while users do something else: researching, processing batches, monitoring, preparing drafts. Their UX has five moments: **start** (scope and limits), **status** (what is happening, without demanding attention), **interrupt** (asking for input at the right time), **result** (what was done, with evidence and partial outcomes) and **steer** (pause, change, cancel).",
          "The core rule: make progress visible but quiet, and make interruptions rare, clear and actionable.",
        ],
      },
      {
        heading: "Why long-running tasks need different UX",
        body: [
          "Chat assumes the user is present and waiting. Background agents break that assumption. They may run for hours, wait for approvals, retry failed steps, change plans and finish with partial results. Engineering handles survival across crashes and waits (see [[/blogs/durable-ai-agents|durable execution for AI agents]]); UX handles how people delegate, follow and receive that work. Short waits are covered by the progress patterns in [[/blogs/ai-ux-design|AI UX design]]; this article is about work measured in minutes to days, typical of [[/blogs/agentic-workflow-automation|agentic workflow automation]].",
        ],
      },
      {
        heading: "Starting a task",
        body: [
          "Capture enough to avoid interruptions later: the goal, scope, limits (budget, recipients, systems), what counts as done, and decisions the agent may take alone versus those it must ask about. Show a short plan and an honest idea of duration if it is predictable. Offer to notify on completion and let the user choose channels.",
        ],
      },
      {
        heading: "Showing status without demanding attention",
        body: [
          "Put background tasks in a task list or inbox rather than in the chat scroll. Each task card shows the goal, status from a small set (queued, running, waiting for you, blocked, done, failed, cancelled), the current step in plain language, progress if meaningful, and the time of the last update. Avoid fake precision: an estimate that keeps slipping is worse than none.",
        ],
        code: {
          label: "Background task lifecycle (diagram)",
          text: `start ─▶ queued ─▶ running ──────────────▶ done
                    │   ▲                   (results +
                    │   │ answer             receipt)
                    ▼   │
              waiting_for_you ── no answer by deadline
                    │                 └─▶ safe default
                    ▼                     (skip step / stop)
                 blocked ─▶ notify + suggested fix
                    │
                 failed ──▶ partial results + retry option
   user can: pause · edit scope · cancel at any point`,
        },
      },
      {
        heading: "Notifications and interruptions",
        body: [],
        table: {
          headers: ["Event", "Notify?", "How"],
          rows: [
            ["Needs a decision", "Yes", "Specific question, options, deadline, safe default"],
            ["Blocked or failed", "Yes", "What failed, impact, suggested next step"],
            ["Finished", "Yes (if the user opted in)", "Summary, results link, anything needing review"],
            ["Important time-sensitive finding", "Yes", "What was found and why it matters now"],
            ["Routine progress", "No", "Visible in the task card only"],
          ],
        },
        callout: {
          type: "tip",
          text: "Batch questions. If the agent will need three decisions, ask them together at the first point it must stop, rather than interrupting three times.",
        },
      },
      {
        heading: "Pausing for input safely",
        body: [
          "When the agent needs a person, it should pause only the dependent step and continue independent work. The request should stand alone: what is needed, why, the options with consequences and when it will apply the safe default. The safe default for consequential actions is to not act. See [[/blogs/ai-action-confirmation-ux|AI action confirmation UX]] for which actions need approval.",
        ],
      },
      {
        heading: "Presenting results",
        body: [
          "A finished task should open on a summary: what was achieved, what was not and why, items needing review, and links to evidence and the full activity log. Partial success is normal for agent work; present it honestly ('Processed 182 of 200 invoices; 18 need your review') rather than as a failure or a success. Every action taken should have a receipt and, where possible, an undo; see [[/blogs/ai-agent-trust-ux|AI agent trust UX]].",
        ],
      },
      {
        heading: "Steering and cancelling",
        body: [
          "Users should be able to pause, change the scope or limits, and cancel at any time. Cancelling should say what has already happened and what will be reversed, since some completed steps (emails sent, orders placed) cannot be undone automatically. Handing the task to a colleague should carry its full context; see [[/blogs/ai-agent-handoffs|AI agent handoffs]].",
        ],
      },
      {
        heading: "Design checklist",
        body: [],
        checklist: [
          "Capture goal, scope, limits and done-criteria at the start",
          "Show tasks in a list or inbox, not only in chat",
          "Use a small set of clear statuses with plain-language current step",
          "Notify only for decisions, blocks, completion and urgent findings",
          "Batch questions; give deadlines and safe defaults",
          "Present partial results honestly with items to review",
          "Offer pause, edit and cancel; explain what cancelling cannot undo",
          "Keep an activity log and receipts for everything the agent did",
        ],
        cta: {
          title: "Building agents that run long tasks?",
          description: "ZSpace Labs designs task inboxes, notifications and review flows for background agents, backed by durable workflows. See [[/services/ai-automation|AI automation]] and [[/services/ui-ux-design|UI/UX design]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Background agents change the interaction from a conversation to delegation. Design how work is handed over, how status stays visible without noise, when and how the agent interrupts, how partial results are presented and how users steer. Done well, people can delegate real work and come back to clear outcomes. For the full pattern set, see [[/blogs/ai-interface-patterns|AI interface patterns]].",
        ],
      },
    ],
  },

  // ---------------------------------------- AI INTERFACE PATTERNS (HUB)
  {
    slug: "ai-interface-patterns",
    title: "AI Interface Patterns: 15 Interaction Patterns for AI-Powered Products",
    seoTitle: "AI Interface Patterns: 15 Patterns for AI-Powered Products",
    excerpt:
      "Fifteen interaction patterns for AI products, from inline generation to approval cards and background tasks, with when to use each, when not to and the risks.",
    category: "UI/UX",
    banner: "interfacelayers",
    sceneKind: "design",
    date: "2026-10-08",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce", "b2b-enterprise"],
    relatedSlugs: ["generative-ui", "ai-ux-design", "agent-ux-design"],
    faqs: [
      { q: "What are AI interface patterns?", a: "Reusable interaction designs for products that include AI, such as conversational input, inline generation, approval cards and activity timelines. Each solves a recurring problem in how people ask AI for help, review its output or supervise its actions." },
      { q: "Is chat the main AI interface pattern?", a: "It is one of many. Chat suits open-ended questions, but many AI features work better embedded in existing workflows: suggestions, inline generation, generated forms, approval cards and background tasks." },
      { q: "How do I choose the right pattern?", a: "Start from the task: how often it happens, how open-ended it is, how consequential the result is and whether the user is present. Frequent small tasks suit inline patterns; open-ended tasks suit conversation; consequential actions need approval patterns; long tasks need background patterns." },
      { q: "Which patterns help with trust?", a: "Source and evidence display, uncertainty states, activity timelines, undo and approval cards. Together they let people check outputs, see what agents did and reverse mistakes." },
      { q: "Do AI patterns replace normal UX patterns?", a: "No. They sit on top of a usable product. Good navigation, forms, accessibility and performance still matter; AI patterns fail on top of a confusing interface." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI products need interaction patterns for three jobs: **asking** the AI for help, **reviewing** what it produced and **supervising** what it does. The fifteen patterns below cover all three. Each entry says what the pattern is, when to use it, when not to and the main UX risk.",
          "No product needs all fifteen. Choose by task: frequent small tasks suit inline patterns, open-ended questions suit conversation, consequential actions need approval and undo, and long tasks need background progress.",
        ],
      },
      {
        heading: "The pattern map",
        body: [],
        code: {
          label: "AI interface pattern map (diagram)",
          text: `ASK                     REVIEW                  SUPERVISE
──────────────────      ──────────────────      ──────────────────
1 conversational input  9  progressive          5  task card
2 suggested actions        disclosure           6  approval card
3 inline generation     13 source / evidence    10 human handoff
4 AI side panel         14 uncertainty state    11 undo
7 generated form        8  dynamic table        12 activity timeline
                                                15 background progress`,
        },
      },
      {
        heading: "1. Conversational input",
        body: [
          "**What:** a text or voice box where people describe what they want in their own words. **Use when:** tasks are open-ended or users do not know where a feature lives. **Avoid when:** the task is frequent and well-defined; a button is faster than a sentence. **Risk:** the blank-box problem: users do not know what to ask or what the AI can do. Offer examples and scoped prompts. See [[/blogs/ai-chat-interface-design|AI chat interface design]].",
        ],
      },
      {
        heading: "2. Suggested actions",
        body: [
          "**What:** context-aware chips or buttons ('Summarize thread', 'Draft reply', 'Find similar orders'). **Use when:** the next likely steps are predictable from context. **Avoid when:** suggestions would be generic or crowd the interface. **Risk:** suggestions that are wrong for the context teach users to ignore them; measure usage and prune.",
        ],
      },
      {
        heading: "3. Inline generation",
        body: [
          "**What:** AI writes or completes content directly where the user is working (a field, a document, an email). **Use when:** the output belongs in that place and the user will edit it. **Avoid when:** the content is high-stakes and must be authored deliberately. **Risk:** users accept plausible text without reading; mark generated content until edited or accepted. See [[/blogs/ai-copilot-ux|AI copilot UX]].",
        ],
      },
      {
        heading: "4. AI side panel",
        body: [
          "**What:** an assistant panel beside the main workspace that knows the current context. **Use when:** users need help across many tasks without leaving the screen. **Avoid when:** it becomes the only AI entry point and sits unused beside the real work. **Risk:** 'chatbot in the corner' that adds little; connect it to actions on the page.",
        ],
      },
      {
        heading: "5. Task card",
        body: [
          "**What:** a compact card representing a delegated task with goal, status and next step. **Use when:** AI performs work that outlives a single message. **Avoid when:** the task completes instantly. **Risk:** cards with vague statuses ('working on it') that hide problems; use a small set of explicit states.",
        ],
      },
      {
        heading: "6. Approval card",
        body: [
          "**What:** a structured request to approve, edit, reject or delegate a proposed action, with impact and evidence. **Use when:** actions are consequential or irreversible. **Avoid when:** actions are low-risk and undoable; approvals for everything cause fatigue. **Risk:** rubber-stamping. Show only what matters and make the decision fast. See [[/blogs/ai-action-confirmation-ux|AI action confirmation UX]].",
        ],
      },
      {
        heading: "7. Generated form",
        body: [
          "**What:** the AI produces a short form, pre-filled from context, for a one-off task ('Change delivery address'). **Use when:** the task needs structured input that a fixed screen does not cover well. **Avoid when:** a standard form already exists and is used often. **Risk:** missing or mislabelled fields; render from design-system components with schemas. See [[/blogs/generative-ui|generative UI]].",
        ],
      },
      {
        heading: "8. Dynamic table",
        body: [
          "**What:** results returned as a sortable, filterable table with row actions instead of prose. **Use when:** answers involve several items with comparable attributes. **Avoid when:** there is one answer. **Risk:** numbers that look authoritative but came from the model; populate tables from tools and systems of record.",
        ],
      },
      {
        heading: "9. Progressive disclosure",
        body: [
          "**What:** a short answer first, with detail, reasoning and sources available on demand. **Use when:** most users need the conclusion and some need the detail. **Avoid when:** a critical caveat would be hidden. **Risk:** burying limitations; keep essential warnings in the first layer. See [[/blogs/ai-transparency-ux|AI transparency UX]].",
        ],
      },
      {
        heading: "10. Human handoff",
        body: [
          "**What:** moving a task or conversation to a person with context. **Use when:** the AI reaches its limits or the user asks for a person. **Avoid when:** it is used to deflect rather than resolve. **Risk:** the user repeats everything. Pass a structured summary. See [[/blogs/ai-agent-handoffs|AI agent handoffs]].",
        ],
      },
      {
        heading: "11. Undo",
        body: [
          "**What:** a clear way to reverse an AI action for a period. **Use when:** actions are reversible; undo often replaces confirmation. **Avoid when:** reversal is impossible (sent email, captured payment); confirm before acting instead. **Risk:** promising undo the system cannot deliver; say exactly what will be reversed.",
        ],
      },
      {
        heading: "12. Activity timeline",
        body: [
          "**What:** a chronological list of what the AI did, with receipts and links. **Use when:** agents act on the user's behalf. **Avoid when:** the AI only answers questions. **Risk:** noisy logs nobody reads; summarize, group and highlight what needs attention. See [[/blogs/ai-agent-trust-ux|AI agent trust UX]].",
        ],
      },
      {
        heading: "13. Source and evidence display",
        body: [
          "**What:** citations, documents, records and data timestamps behind an answer or action. **Use when:** correctness matters and sources exist. **Avoid when:** the content is purely creative. **Risk:** citations that do not support the claim; link to the exact passage and test grounding.",
        ],
      },
      {
        heading: "14. Uncertainty state",
        body: [
          "**What:** a visible signal that the AI made an assumption, lacked data or found conflicting information. **Use when:** uncertainty is real and changes what the user should do. **Avoid when:** it would be decorative. **Risk:** uncalibrated confidence scores that mislead; prefer specific statements ('No price data after March') over percentages.",
        ],
      },
      {
        heading: "15. Background task progress",
        body: [
          "**What:** status for tasks that run while the user is away, with notifications for decisions and completion. **Use when:** tasks take minutes or longer. **Avoid when:** results arrive in seconds. **Risk:** notification overload or silent failure. See [[/blogs/background-ai-agent-ux|background AI agent UX]].",
        ],
      },
      {
        heading: "Choosing patterns for a feature",
        body: [],
        table: {
          headers: ["If the task is...", "Start with", "Add"],
          rows: [
            ["Frequent and small", "Inline generation, suggested actions", "Undo"],
            ["Open-ended", "Conversational input, side panel", "Progressive disclosure, sources"],
            ["Multi-item answer", "Dynamic table", "Sources, row actions"],
            ["One-off structured task", "Generated form", "Approval card if consequential"],
            ["Consequential action", "Approval card", "Activity timeline, audit"],
            ["Long-running", "Task card, background progress", "Human handoff, timeline"],
            ["Used by AI agents, not people", "Machine-readable actions and states", "See agent UX"],
          ],
        },
        callout: {
          type: "note",
          text: "When the user of your interface is itself an AI agent, the patterns change: names, schemas, states and typed errors replace layout. See agent UX design.",
        },
      },
      {
        heading: "Related guides in this cluster",
        body: [
          "For the architecture behind generated views, see [[/blogs/generative-ui|generative UI]]; for interfaces inside ChatGPT and Claude, [[/blogs/ai-assistant-app-ux|AI assistant app UX]]; for designing for agents as users, [[/blogs/agent-ux-design|agent UX]]; for what changes when AI becomes the primary interface, [[/blogs/ai-native-vs-ai-enabled-software|AI-native vs AI-enabled software]]; for recovering from mistakes, [[/blogs/ai-error-handling-ux|AI error handling UX]]; and for choosing modalities, [[/blogs/multimodal-ai-product-design|multimodal AI product design]].",
        ],
        cta: {
          title: "Designing an AI-powered product?",
          description: "ZSpace Labs designs AI features into real workflows, from pattern selection to design systems and the APIs behind them. See [[/services/ui-ux-design|UI/UX design]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "AI products are built from a small set of recurring interaction patterns. Use the ones that fit the task, respect each pattern's limits and design for its risks: blank boxes, rubber-stamped approvals, unread logs, misleading numbers and false confidence. Combined with a solid underlying product, these patterns let people ask, review and supervise AI with confidence. The broader principles are in [[/blogs/ai-ux-design|AI UX design]].",
        ],
      },
    ],
  },
];
