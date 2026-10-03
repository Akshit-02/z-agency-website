import type { BlogPost } from "./blog-data";

/**
 * AI knowledge hub, part eleven: voice AI. voice-ai-agent-development is the
 * technical hub (pipeline, latency, telephony); the customer-service,
 * receptionist and call-automation guides are scoped to their use cases.
 * Ecommerce voice shopping remains ecommerce-voice-commerce. Regulatory
 * references (FCC declaratory ruling FCC 24-17 on AI-generated voices under
 * the TCPA, February 2024; EU AI Act Article 50 transparency duties from
 * 2 August 2026) are summaries, not legal advice. Platform references
 * (OpenAI Realtime API GA with SIP, Twilio ConversationRelay) checked in
 * October 2026. Merged into `posts` in blog-data.ts.
 */

export const aiCorePosts11: BlogPost[] = [
  // ---------------------------------------- 601 · VOICE AI AGENT DEVELOPMENT
  {
    slug: "voice-ai-agent-development",
    title: "Voice AI Agent Development: A Complete Guide for Businesses",
    seoTitle: "Voice AI Agent Development: Architecture, Latency and Telephony",
    excerpt:
      "How to build voice AI agents: speech-to-text, language models and tools, text-to-speech, speech-to-speech models, turn-taking and interruptions, latency budgets, telephony, testing, compliance and deployment.",
    category: "AI & Automation",
    banner: "voicepipeline",
    bannerAlt:
      "Voice AI pipeline: caller audio, speech to text, language model with tools (highlighted), text to speech, caller hears, turn detection; the note says every step spends part of one latency budget.",
    date: "2026-10-02",
    readingTime: "9 min read",
    relatedServiceSlugs: ["ai-automation", "mobile-app-development"],
    relatedIndustrySlugs: ["healthcare-healthtech", "travel-hospitality", "real-estate"],
    relatedSlugs: ["ai-voice-agents-customer-service", "ai-receptionist", "ai-call-automation"],
    faqs: [
      { q: "What is a voice AI agent?", a: "A system that holds spoken conversations: it converts speech to text or processes audio directly, uses a language model with tools to decide what to say and do, and speaks back with synthesized speech, often over phone lines or in apps." },
      { q: "What is the difference between speech-to-text and text-to-speech?", a: "Speech-to-text (speech recognition) converts spoken audio into text. Text-to-speech (speech synthesis) converts text into spoken audio. Voice agents use both, or a speech-to-speech model that handles audio in and out." },
      { q: "Cascaded pipeline or speech-to-speech model?", a: "A cascaded pipeline (STT, LLM, TTS) gives control and choice of components and visible text at each step. Speech-to-speech models can feel more natural with lower latency but offer less visibility and voice choice. Both need tools, turn detection and safeguards." },
      { q: "Why is latency so important for voice?", a: "In conversation, people notice pauses quickly. Each step (recognition, model, tools, synthesis, network) adds delay, so voice agents need a latency budget, streaming at each step and fast tools." },
      { q: "How do voice agents handle interruptions?", a: "With voice activity detection and barge-in: when the caller speaks while the agent is talking, playback stops, and the agent processes the new input. Platforms provide settings to ignore short backchannel sounds." },
      { q: "How do voice agents connect to phone numbers?", a: "Through telephony providers using SIP trunks or media-streaming APIs. Some model providers accept SIP connections directly; others connect through platforms such as Twilio." },
      { q: "Do callers need to be told they are talking to AI?", a: "In many places, yes or advisably. The EU AI Act requires disclosure for AI systems interacting with people from 2 August 2026 unless it is obvious, and US rules treat AI-generated voices as artificial voices for outbound calling consent. Get legal advice for your markets." },
      { q: "How do you test a voice agent?", a: "With scripted and simulated calls covering accents, noise, interruptions, silence, wrong numbers, edge cases and escalation, measuring task success, latency and transcription accuracy, plus reviewed live pilot calls." },
      { q: "What does a voice agent cost to run?", a: "Per-minute telephony, speech recognition and synthesis or realtime model costs, plus language model tokens and tool calls. Measure cost per handled call in a pilot." },
      { q: "Should the voice agent handle every call?", a: "No. Route urgent, sensitive or complex calls to people, and always provide a clear way to reach a human." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A voice AI agent listens, decides and speaks in real time. The classic architecture is a cascaded pipeline: streaming speech-to-text, a language model with tools and business rules, and streaming text-to-speech, wrapped in turn detection and interruption handling. Speech-to-speech models collapse those steps for lower latency and more natural speech. Either way, production voice agents need a strict latency budget, telephony integration, narrow tools, clear AI disclosure, escalation to people, call recording consent where applicable and testing with realistic audio.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "This is the technical hub for ZSpace Labs' voice AI guides. Use cases are covered in [[/blogs/ai-voice-agents-customer-service|AI voice agents for customer service]], [[/blogs/ai-receptionist|AI receptionists]] and [[/blogs/ai-call-automation|AI call automation]]. Voice shopping is covered in [[/blogs/ecommerce-voice-commerce|ecommerce voice commerce]], and general agent design in [[/blogs/ai-agent-development|AI agent development]].",
        ],
      },
      {
        heading: "Two Architectures",
        diagram: {
          variant: "voicearchcompare",
          alt: "Comparison of a cascaded speech-to-text, LLM and text-to-speech pipeline with a speech-to-speech model by parts, control, latency, voice choice and fit; the note says both need turn detection, interruption handling and tool calls.",
          caption: "Choose the cascade for control and auditability, speech-to-speech for natural conversation.",
        },
        body: [
          "**Cascaded (STT → LLM → TTS):** separate models for recognition, reasoning and synthesis, each swappable. Text exists at every step, which helps logging, compliance checks and debugging. Latency is the sum of steps, so everything must stream.",
          "**Speech-to-speech (realtime) models:** one model takes audio in and produces audio out, handling prosody and turn-taking more naturally. OpenAI's Realtime API, generally available since August 2025, supports WebRTC, WebSocket and SIP connections and tool calls. Visibility into intermediate text and voice choice can be more limited, depending on the provider.",
        ],
      },
      {
        heading: "Core Components",
        body: [],
        table: {
          headers: ["Component", "Job", "Key choices"],
          rows: [
            ["Telephony or WebRTC", "Carry audio between caller and agent", "SIP trunk, media streams, in-app audio"],
            ["Voice activity and turn detection", "Know when the caller has finished", "Endpointing sensitivity, backchannel handling"],
            ["Speech-to-text", "Transcribe streaming audio", "Accuracy by accent and domain, latency, languages"],
            ["Language model + tools", "Decide and act", "Model speed, tool latency, structured outputs"],
            ["Text-to-speech", "Speak the response", "Voice quality, latency, pronunciation control"],
            ["Orchestration", "Coordinate the loop, state and hand-offs", "Platform or custom"],
            ["Escalation", "Transfer to people with context", "Warm transfer, summary, callback"],
          ],
        },
      },
      {
        heading: "Latency Budget",
        body: [
          "Conversations feel broken when replies lag. Break the response time into parts (network, end-of-turn detection, transcription, model time to first token, tool calls, synthesis time to first audio) and set a budget for each. Stream everything, start speaking as soon as the first sentence is ready, keep tool calls fast (or say a short holding phrase while they run), and host components close to each other. Measure latency at the 95th percentile, not just the average.",
        ],
      },
      {
        heading: "Turn-Taking and Interruptions",
        body: [
          "Callers interrupt, pause mid-sentence and say 'mm-hm'. Good voice agents stop talking when interrupted (barge-in), wait appropriately before responding, and ignore short backchannel sounds. Platforms expose settings for this; Twilio's ConversationRelay, for example, offers an interruptible setting and backchannel filtering. Tune endpointing on real calls: too eager and the agent cuts people off, too slow and it feels sluggish.",
        ],
        cta: {
          title: "Planning a voice AI agent for your phone lines or app?",
          description: "ZSpace Labs builds voice agents with streaming pipelines, fast tools, telephony integration and escalation designed in from the start.",
        },
      },
      {
        heading: "Telephony Integration",
        body: [
          "Phone calls reach your agent through a telephony provider. Options include SIP trunks pointed at a voice platform or directly at a realtime model provider that accepts SIP, and media-streaming APIs that send call audio over WebSockets to your application. Plan for call transfer to human agents, DTMF keypad input, call recording (with consent), caller ID and number provisioning in each country you serve.",
        ],
      },
      {
        heading: "Tools, Knowledge and Guardrails",
        body: [
          "Voice agents use the same building blocks as text agents: narrow tools (look up a booking, check availability, create a ticket), retrieval for policies and FAQs, and policy checks enforced in code. Voice raises the stakes on confirmation: read back critical details (dates, amounts, addresses) before acting, and avoid long lists that are hard to follow by ear. See [[/blogs/ai-agent-guardrails|guardrails]].",
        ],
      },
      {
        heading: "Disclosure, Consent and Compliance",
        body: [],
        checklist: [
          "Tell callers they are speaking with an AI agent; the EU AI Act's Article 50 transparency duties apply from 2 August 2026",
          "Disclose call recording and obtain consent where required (rules differ by jurisdiction)",
          "For outbound calls in the US, the FCC has confirmed AI-generated voices count as artificial voices under the TCPA, so prior express consent rules apply",
          "Protect personal and payment data; avoid taking card numbers by voice unless your payment setup is designed for it",
          "Keep transcripts and recordings under retention rules",
          "Confirm obligations for your sector and markets with legal advisers",
        ],
      },
      {
        heading: "Testing Voice Agents",
        body: [
          "Test with real audio, not just text. Cover accents, background noise, poor connections, interruptions, silence, people asking for a human, wrong numbers, ambiguous dates and attempts to manipulate the agent. Measure task success, transcription accuracy on key entities (names, numbers), latency and escalation behaviour. Pilot with a small share of calls and review recordings with consent.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [],
        table: {
          headers: ["Advantages", "Limitations"],
          rows: [
            ["Answer every call, any time, without queues", "Latency and turn-taking are hard to get right"],
            ["Handle routine requests end to end", "Recognition errors on names, numbers and accents"],
            ["Consistent information and data capture", "Regulatory requirements for disclosure and consent"],
            ["Scale for peaks", "Some callers prefer people; escalation must be easy"],
          ],
        },
      },
      {
        heading: "How to Build a Voice Agent Step by Step",
        body: [],
        checklist: [
          "**1. Pick one call type** with clear outcomes, such as booking changes",
          "**2. Analyse recordings or transcripts** of real calls",
          "**3. Choose architecture**: cascaded or speech-to-speech",
          "**4. Build fast, narrow tools** and the knowledge the agent needs",
          "**5. Design the conversation**: greeting with disclosure, confirmations, escalation",
          "**6. Integrate telephony** with transfer and recording controls",
          "**7. Test with realistic audio** and measure latency and success",
          "**8. Pilot on a share of calls**, review and expand",
        ],
      },
      {
        heading: "Choosing Voice AI Components",
        body: [],
        table: {
          headers: ["Component", "What to evaluate"],
          rows: [
            ["Speech-to-text", "Accuracy on your callers' accents and vocabulary, streaming latency, entity accuracy for names and numbers, languages"],
            ["Language model", "Time to first token, tool-calling reliability, cost per minute of conversation"],
            ["Text-to-speech", "Naturalness, latency to first audio, pronunciation controls, voice licensing"],
            ["Speech-to-speech model", "Latency, tool support, voice options, transcript availability"],
            ["Telephony and platform", "SIP support, transfers, recording controls, regions, reliability"],
          ],
        },
      },
      {
        heading: "Monitoring Voice Agents in Production",
        body: [
          "Track per-call metrics: end-to-end response latency per turn (p50 and p95), interruptions and talk-over events, transcription confidence on key entities, task completion, transfers and their reasons, silent periods, hang-ups mid-conversation and cost per call. Review a sample of calls each week with consent, and alert on latency spikes or rising transfer rates, which often signal a failing tool or provider issue. General agent monitoring practices are in [[/blogs/ai-agent-observability|agent observability]].",
        ],
      },
      {
        heading: "Voice Agent Use Cases",
        body: [],
        table: {
          headers: ["Use case", "Typical tasks", "Guide"],
          rows: [
            ["Customer service lines", "Status, simple changes, routing, summaries", "[[/blogs/ai-voice-agents-customer-service|AI voice agents for customer service]]"],
            ["Front desk and reception", "Bookings, FAQs, messages, transfers", "[[/blogs/ai-receptionist|AI receptionist]]"],
            ["Outbound reminders", "Appointments, deliveries, renewals with consent", "[[/blogs/ai-call-automation|AI call automation]]"],
            ["Internal help lines", "IT and HR questions, password resets with verification", "[[/blogs/ai-customer-support-automation|AI customer support automation]]"],
            ["In-app voice", "Hands-free assistance in mobile or field apps", "[[/blogs/ai-api-integration|AI API integration]]"],
          ],
        },
      },
      {
        heading: "Data Protection for Voice",
        body: [
          "Voice recordings and transcripts can contain personal, payment and sometimes health information, and a voice itself can be personal data. Decide what to record and for how long, restrict access, redact sensitive values from transcripts, avoid collecting card numbers by voice unless your payment flow is designed for it, and check where speech and model providers process and retain audio. Document these decisions in your privacy records and in what you tell callers.",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a clinic group's phone lines overflow on Monday mornings. A voice agent handles appointment confirmations, cancellations and rescheduling through the booking system's API, reads back dates before changing anything, and transfers anything clinical or urgent to staff with a summary. Latency testing leads the team to cache the clinic's availability for a few seconds so the agent can answer without pauses.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Ignoring latency until the end",
          "No barge-in, so the agent talks over callers",
          "Long, list-heavy responses",
          "Acting on misheard numbers without read-back",
          "No disclosure or recording consent",
          "No easy route to a human",
        ],
        cta: {
          title: "Ready to build a voice agent callers do not hang up on?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|voice AI agent development]] and [[/services/mobile-app-development|in-app voice experiences]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Voice AI agents combine real-time audio engineering with agent design. Budget latency, handle turn-taking well, keep tools fast and narrow, disclose AI, respect consent and make escalation easy. Related: [[/blogs/ai-voice-agents-customer-service|customer service voice agents]], [[/blogs/ai-receptionist|AI receptionist]] and [[/blogs/ai-call-automation|AI call automation]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 602 · AI VOICE AGENTS FOR CUSTOMER SERVICE
  {
    slug: "ai-voice-agents-customer-service",
    title: "AI Voice Agents for Customer Service: How They Work and What They Can Do",
    seoTitle: "AI Voice Agents for Customer Service: Use Cases, Hand-off, Metrics",
    excerpt:
      "How AI voice agents work in contact centres: caller identification, intent handling, knowledge and account tools, resolution versus hand-off, warm transfers, call summaries, QA and the metrics that matter.",
    category: "AI & Automation",
    banner: "voicecsflow",
    bannerAlt:
      "Customer service voice flow: call in, identify caller, understand intent, answer or act, resolve or hand off (highlighted), summary to CRM; a branch shows complex calls going to a human with context.",
    date: "2026-10-02",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["fintech", "travel-hospitality", "telecommunications"],
    relatedSlugs: ["voice-ai-agent-development", "ai-customer-support-automation", "human-in-the-loop-ai"],
    faqs: [
      { q: "What can AI voice agents do in customer service?", a: "Answer common questions, check order or account status, make simple changes such as rescheduling, take messages, route calls to the right team and summarize calls for human agents, within the tools and permissions they are given." },
      { q: "How do voice agents verify callers?", a: "By matching caller ID, asking for reference numbers or account details, sending one-time codes by SMS, or integrating with existing verification steps, proportionate to the sensitivity of the request." },
      { q: "Do AI voice agents replace IVR menus?", a: "They can replace 'press 1 for...' menus with natural conversation for routing and self-service, while keeping keypad input for callers who prefer it or for sensitive data entry." },
      { q: "What is a warm transfer?", a: "Transferring a call to a human agent together with context, such as a summary and verified details, so the customer does not have to repeat themselves." },
      { q: "How do you measure AI voice agents?", a: "Containment or resolution rate, transfer rate and reasons, repeat calls, customer satisfaction, average handle time, latency, accuracy reviewed through QA, and cost per resolved call." },
      { q: "Which calls should stay with people?", a: "Complaints, vulnerable customers, complex or high-value issues, anything requiring judgement or empathy beyond policy, and any caller who asks for a person." },
      { q: "How do you quality-check AI calls?", a: "Review samples of recordings and transcripts against a scorecard, automatically flag calls with low confidence or negative sentiment, and feed findings into evaluation sets." },
      { q: "Are there legal requirements?", a: "Disclosure that callers are speaking with AI is required or advisable in many markets, and recording consent rules apply. Sector rules such as financial services conduct rules may also apply. Get legal advice for your markets." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "In customer service, AI voice agents answer inbound calls, identify and verify the caller, understand the request in natural speech, answer from approved knowledge or act through narrow account tools, and either resolve the call or transfer it to a person with a summary so the customer does not repeat themselves. Every call ends with notes in the CRM. Success is measured by resolved calls, transfer quality, repeat calls and satisfaction, not by how many calls the AI keeps away from people.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Technical architecture is in [[/blogs/voice-ai-agent-development|voice AI agent development]]. Omnichannel support systems (email, chat and voice) are in [[/blogs/ai-customer-support-automation|AI customer support automation]], and escalation design in [[/blogs/human-in-the-loop-ai|human-in-the-loop AI]].",
        ],
      },
      {
        heading: "What Voice Agents Handle Well",
        body: [],
        table: {
          headers: ["Call type", "Agent capability", "Typical tools"],
          rows: [
            ["Status questions", "Order, booking, claim or ticket status", "Read-only lookups"],
            ["Simple changes", "Reschedule, update contact details, cancel within policy", "Narrow write tools with read-back"],
            ["FAQs", "Opening hours, policies, how-to", "Retrieval over approved content"],
            ["Routing", "Understand intent and send to the right team", "Queue and skill data"],
            ["After-hours", "Take messages, book callbacks", "Ticketing, calendar"],
          ],
        },
      },
      {
        heading: "Identification and Verification",
        body: [
          "Match the caller ID to customer records, then verify in proportion to the request: a store opening hours question needs none; an order status may need an order number and postcode; account changes may need a one-time code. Keep verification steps in code, never let the model decide whether someone is verified, and avoid collecting payment card details by voice unless your setup is designed and certified for it.",
        ],
      },
      {
        heading: "Resolution vs Hand-off",
        body: [
          "Define clearly when the agent resolves and when it hands off: complaints, vulnerable customers, high-value issues, policy exceptions, repeated misunderstanding and any request for a person go to people. Warm transfers pass a summary, verified details and what has been tried, so human agents start where the AI stopped.",
        ],
        diagram: {
          variant: "voicecsmetrics",
          alt: "Measuring customer service voice agents in four columns: containment (resolved by AI, hand-off rate, repeat calls, reasons), quality highlighted (accuracy, customer satisfaction, QA review, tone), speed (answer time, latency, call length, queue time) and safety (disclosure, consent, escalations, data access).",
          caption: "Quality metrics keep containment honest: a deflected call that returns tomorrow is not resolved.",
        },
        cta: {
          title: "Want to take routine calls off your agents' queues?",
          description: "ZSpace Labs builds customer service voice agents connected to your CRM and contact centre, with warm transfers and QA built in.",
        },
      },
      {
        heading: "Contact Centre Integration",
        body: [],
        checklist: [
          "Telephony or contact centre platform for routing and transfers",
          "CRM and order or booking systems for lookups and updates",
          "Knowledge base for approved answers",
          "Ticketing for follow-ups and callbacks",
          "Workforce and QA tools for reviewing AI calls alongside human calls",
          "Analytics for intents, outcomes and transfer reasons",
        ],
      },
      {
        heading: "Quality Assurance",
        body: [
          "Review a sample of AI calls weekly against a scorecard: correct understanding, accurate information, policy compliance, tone, appropriate escalation. Automatically flag calls with repeated misunderstandings, negative sentiment or transfers after long conversations. Turn failures into test cases and fix tools, knowledge or prompts.",
        ],
      },
      {
        heading: "Compliance and Customer Trust",
        body: [
          "Disclose that callers are speaking with an AI agent at the start of the call; in the EU, Article 50 of the AI Act requires this from 2 August 2026 unless it is obvious. Disclose recording and obtain consent where required. Make 'speak to a person' work at any point. Sector rules may add requirements, for example for financial services or healthcare. These are summaries, not legal advice.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Voice agents shorten queues, provide consistent answers at any hour and free human agents for complex conversations. Their limits: recognition errors, frustration when the agent misunderstands, and limited judgement for emotional or unusual situations. Designs that make it easy to reach a person preserve trust while still handling volume.",
        ],
      },
      {
        heading: "How to Roll Out Step by Step",
        body: [],
        checklist: [
          "**1. Analyse call reasons** and pick two or three high-volume, low-risk intents",
          "**2. Map verification** and tools for each intent",
          "**3. Build and test** with recorded or simulated calls",
          "**4. Define hand-off rules** and warm-transfer summaries",
          "**5. Pilot on a share of calls** or after hours",
          "**6. Run weekly QA** and fix failure patterns",
          "**7. Add intents** as quality holds",
        ],
      },
      {
        heading: "Designing the Conversation",
        body: [],
        checklist: [
          "Open with a short greeting, AI disclosure and an invitation to state the need",
          "Confirm understanding briefly before acting ('You want to change your delivery date, is that right?')",
          "Read back critical details: dates, amounts, addresses, reference numbers",
          "Keep responses short; avoid lists longer than three options by voice",
          "Offer the human option clearly and honour it immediately",
          "Close with what will happen next and any confirmation sent by SMS or email",
        ],
      },
      {
        heading: "Tools and Platforms",
        body: [
          "Options range from contact centre platforms with built-in AI agents, to voice AI platforms that connect to your telephony, to custom builds combining telephony APIs, speech services or realtime models and your own orchestration. Built-in options are quickest where your contact centre already runs on that platform; custom builds suit complex integrations, specific compliance needs or multi-channel consistency with your other AI systems. See [[/blogs/voice-ai-agent-development|voice AI agent development]] for component choices.",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: an airline's contact centre sees long queues for booking status and seat questions during disruptions. A voice agent verifies the caller with booking reference and surname, reads flight status from operations systems, rebooks within published disruption rules and transfers everyone else with a summary. During the next disruption, human agents spend their time on complex rebookings instead of status questions.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Measuring success by calls kept from humans",
          "Making it hard to reach a person",
          "Model-decided verification",
          "Cold transfers without context",
          "No QA on AI calls",
        ],
        cta: {
          title: "Planning AI voice for your contact centre?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|customer service voice agents]] and contact centre integration.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Customer service voice agents work when they resolve the right calls well and hand off the rest gracefully. Verify in code, transfer with context and measure quality, not just containment. Related: [[/blogs/voice-ai-agent-development|voice AI development]] and [[/blogs/ai-customer-support-automation|AI customer support automation]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 603 · AI RECEPTIONIST
  {
    slug: "ai-receptionist",
    title: "AI Receptionist: How to Build an Automated Business Phone Assistant",
    seoTitle: "AI Receptionist: Call Answering, Booking and Hand-off",
    excerpt:
      "How to build an AI receptionist for a business phone line: greeting and AI disclosure, FAQs, appointment booking, lead capture, CRM integration, message taking, transfers, emergencies and compliance.",
    category: "AI & Automation",
    banner: "receptionist",
    bannerAlt:
      "AI receptionist in four columns: answer (greeting, hours, FAQs, directions), book (availability, book or change, confirm by SMS, reminders), capture (caller details, reason, urgency, to CRM) and hand off highlighted (transfer, message, callback, emergencies).",
    date: "2026-10-02",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["real-estate", "professional-services", "healthcare-healthtech"],
    relatedSlugs: ["voice-ai-agent-development", "ai-call-automation", "ai-lead-qualification"],
    faqs: [
      { q: "What is an AI receptionist?", a: "A voice AI system that answers a business's phone calls, greets callers, answers common questions, books or changes appointments, captures enquiries and routes or transfers calls, typically connected to a calendar and CRM." },
      { q: "Which businesses use AI receptionists?", a: "Service businesses with frequent calls and appointments: clinics and dental practices, law and accounting firms, real estate agencies, home services, salons, hotels and small offices without a full-time receptionist." },
      { q: "Can an AI receptionist book appointments?", a: "Yes, when connected to a booking system or calendar API. It should check live availability, confirm details by reading them back and send a confirmation by SMS or email." },
      { q: "What happens with urgent calls?", a: "Urgent or sensitive calls should be detected and transferred to a person or given clear emergency instructions immediately. Healthcare and legal settings need especially careful rules." },
      { q: "Does an AI receptionist need to say it is AI?", a: "Disclosure is required in some jurisdictions, such as the EU from 2 August 2026, and is good practice everywhere. A short, friendly disclosure in the greeting works well." },
      { q: "How does it capture leads?", a: "By asking structured questions (name, contact, need, timing), creating or updating a CRM record and notifying the right person, with the call summary attached." },
      { q: "Can callers still reach a person?", a: "They should always be able to. Configure transfer during business hours and message-taking or callbacks after hours." },
      { q: "How much setup is needed?", a: "Defining FAQs and policies, connecting the calendar and CRM, setting routing and transfer rules, writing the greeting and testing with real call scenarios." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An AI receptionist answers your business phone line with a voice AI agent. It greets callers and discloses that it is AI, answers common questions from approved information, books, changes or cancels appointments through your calendar with read-back and SMS confirmation, captures new enquiries into your CRM, takes messages, and transfers urgent, sensitive or complex calls to people. The keys to a good one are accurate business information, live calendar integration, clear escalation rules and easy access to a human.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "The technology is explained in [[/blogs/voice-ai-agent-development|voice AI agent development]]. Outbound calling rules are in [[/blogs/ai-call-automation|AI call automation]], and what happens to captured enquiries in [[/blogs/ai-lead-qualification|AI lead qualification]]. Sector examples include [[/blogs/ai-agents-in-real-estate|AI agents in real estate]] and [[/blogs/ai-agents-for-professional-services|AI agents for professional services]].",
        ],
      },
      {
        heading: "What an AI Receptionist Does",
        body: [],
        table: {
          headers: ["Task", "How it works", "Integration"],
          rows: [
            ["Answer and greet", "Branded greeting with AI disclosure", "Telephony"],
            ["FAQs", "Hours, location, services, prices where published", "Approved knowledge"],
            ["Appointments", "Check availability, book, change, cancel", "Calendar or booking API"],
            ["New enquiries", "Collect details and need", "CRM"],
            ["Messages and callbacks", "Record message, schedule callback", "Ticketing or email"],
            ["Transfers", "Route to the right person or team", "Phone system"],
          ],
        },
      },
      {
        heading: "A Typical Call",
        body: [],
        diagram: {
          variant: "receptionistflow",
          alt: "AI receptionist call: call, greet and disclose AI (highlighted), identify need, answer, book or take a note, confirm by SMS, log to CRM.",
          caption: "Disclosure in the greeting sets expectations and builds trust.",
        },
      },
      {
        heading: "Booking Appointments Reliably",
        body: [
          "Connect to the booking system's API for live availability; never let the AI guess. Ask for the essentials only, read back the date, time and service before booking, send an SMS or email confirmation, and handle changes and cancellations within your policy. Respect buffers, staff skills and room or equipment constraints that the booking system already encodes.",
        ],
        cta: {
          title: "Missing calls and bookings when the front desk is busy?",
          description: "ZSpace Labs builds AI receptionists connected to your calendar, CRM and phone system, with clear escalation for anything urgent.",
        },
      },
      {
        heading: "Escalation and Emergencies",
        body: [],
        checklist: [
          "Transfer immediately when a caller asks for a person",
          "Detect urgent situations with keyword rules as a backstop, not only model judgement",
          "In healthcare, never give clinical advice; direct emergencies to emergency services and urgent issues to clinical staff",
          "After hours, take detailed messages and promise realistic callback times",
          "Pass a short summary with every transfer",
        ],
      },
      {
        heading: "Setting Up Business Information",
        body: [
          "The receptionist is only as accurate as its information. Write concise, approved answers for hours, holidays, locations, parking, services, published prices, policies and common questions. Assign an owner to keep it current, and review unanswered questions weekly to fill gaps.",
        ],
      },
      {
        heading: "Compliance and Trust",
        body: [
          "Disclose AI use in the greeting; in the EU, this is required from 2 August 2026 under the AI Act unless obvious. Disclose call recording and get consent where required. Handle personal and health information according to applicable privacy rules, and keep transcripts under retention limits. These are general points, not legal advice.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [],
        table: {
          headers: ["Advantages", "Limitations"],
          rows: [
            ["Every call answered, including after hours", "Some callers prefer a person"],
            ["Bookings and enquiries captured consistently", "Depends on accurate information and integrations"],
            ["Staff interrupted less", "Recognition errors on names and numbers"],
            ["Data flows straight into CRM and calendar", "Needs careful rules for urgent and sensitive calls"],
          ],
        },
      },
      {
        heading: "How to Set Up an AI Receptionist Step by Step",
        body: [],
        checklist: [
          "**1. List call types** and how each should end",
          "**2. Write approved answers** for FAQs",
          "**3. Connect the calendar and CRM**",
          "**4. Define transfer, message and emergency rules**",
          "**5. Write the greeting** with disclosure",
          "**6. Test with real scenarios**, including accents and interruptions",
          "**7. Start with after-hours or overflow calls**, then expand",
          "**8. Review calls and unanswered questions** weekly",
        ],
      },
      {
        heading: "Setups by Industry",
        body: [],
        table: {
          headers: ["Business type", "Main tasks", "Special care"],
          rows: [
            ["Clinics and dental practices", "Appointments, reminders, directions", "No clinical advice; urgent symptoms to staff or emergency services"],
            ["Law and accounting firms", "Enquiry intake, consultations, messages", "Confidentiality; no legal or tax advice"],
            ["Real estate agencies", "Viewings, property questions, landlord enquiries", "Accurate listing data; fair housing rules where applicable"],
            ["Home services", "Booking jobs, quotes, emergency call-outs", "Emergency routing (gas, water, electrical)"],
            ["Hospitality", "Reservations, opening hours, events", "Live availability; special requests to staff"],
          ],
        },
      },
      {
        heading: "Tools and Integration",
        body: [
          "An AI receptionist needs a phone number or forwarding from your existing line, a voice AI platform or custom voice agent, and integrations with your calendar or booking system, CRM and messaging (SMS, email). Many booking and practice management systems offer APIs; where they do not, a confirmed message to staff may be the safer fallback than automated booking. Keep business information in one maintained source the receptionist reads from.",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a property management office misses calls during viewings. An AI receptionist answers overflow and after-hours calls, books viewings into agents' calendars, logs maintenance requests with urgency (gas, water and security issues go straight to the on-call number) and creates CRM records for new landlord enquiries with a summary for the next morning.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Guessing availability instead of checking the calendar",
          "No read-back before booking",
          "No emergency backstop rules",
          "Outdated business information",
          "Hiding that the caller is speaking with AI",
        ],
        cta: {
          title: "Want every call answered without adding headcount?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|AI receptionist development]] and calendar and CRM integration.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "An AI receptionist is a narrow, well-integrated voice agent: accurate information, live booking, clean lead capture and fast escalation. Related: [[/blogs/voice-ai-agent-development|voice AI development]], [[/blogs/ai-call-automation|AI call automation]] and [[/blogs/ai-lead-qualification|AI lead qualification]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 604 · AI CALL AUTOMATION
  {
    slug: "ai-call-automation",
    title: "AI Call Automation: How to Automate Inbound and Outbound Calls",
    seoTitle: "AI Call Automation: Inbound Routing, Outbound Calls and Consent",
    excerpt:
      "How to automate inbound and outbound business calls with AI: routing, conversational flows, scheduling, reminders and notifications, consent and disclosure rules, call windows, monitoring and telephony integration.",
    category: "AI & Automation",
    banner: "callautomation",
    bannerAlt:
      "Comparison of inbound and outbound (highlighted) AI call automation by how calls start, typical jobs, consent, main risk and measures; the note says outbound AI calls carry consent obligations in many markets.",
    date: "2026-10-02",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["healthcare-healthtech", "fintech", "logistics-supply-chain"],
    relatedSlugs: ["voice-ai-agent-development", "ai-receptionist", "ai-voice-agents-customer-service"],
    faqs: [
      { q: "What is AI call automation?", a: "Using voice AI and telephony to handle calls without a person on the business side for part or all of the call: routing inbound calls, answering requests, and placing outbound calls such as reminders, confirmations or follow-ups." },
      { q: "Is it legal to make outbound AI calls?", a: "It depends on the market and purpose. In the US, the FCC confirmed in February 2024 that AI-generated voices are artificial voices under the TCPA, so prior express consent rules apply to such calls. Other countries have their own telemarketing, consent and disclosure rules. Get legal advice before launching outbound AI calling." },
      { q: "Which outbound calls are good candidates?", a: "Calls customers expect and have agreed to: appointment reminders, delivery scheduling, payment reminders within regulations, service follow-ups and confirmations. Cold sales calls carry the highest legal and reputational risk." },
      { q: "How should AI calls handle opt-outs?", a: "Offer a clear way to opt out during the call, honour it immediately across all channels and record it, alongside do-not-call list checks where required." },
      { q: "What should be monitored in AI calling?", a: "Call outcomes, completion and transfer rates, opt-outs, complaints, consent records, calling times, latency, transcription quality and any compliance flags." },
      { q: "How do inbound AI calls get routed?", a: "The agent understands the caller's need in natural language and routes to the right queue, team or self-service flow, replacing or complementing keypad menus." },
      { q: "Can AI leave voicemails?", a: "Technically yes, but voicemail rules and consent requirements still apply, and voicemails should identify the business and offer a way to opt out where required." },
      { q: "What telephony is needed?", a: "A provider for numbers and calls (SIP trunking or programmable voice APIs), integration with your voice AI platform or model, and caller ID registration and verification where applicable." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI call automation uses voice agents to handle inbound calls (understand the need, answer, act or route) and place outbound calls (reminders, confirmations, scheduling, follow-ups). Inbound automation mostly replaces menus and queues; outbound automation carries regulatory weight. In the US, AI-generated voices count as artificial voices under the TCPA, so prior express consent rules apply, and many other markets regulate automated calls. Automate expected, consented calls first, disclose AI use, offer opt-outs, respect calling windows, log consent and monitor outcomes and complaints.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Voice agent architecture is in [[/blogs/voice-ai-agent-development|voice AI agent development]]; inbound front-desk use in [[/blogs/ai-receptionist|AI receptionist]]; contact centre use in [[/blogs/ai-voice-agents-customer-service|AI voice agents for customer service]].",
        ],
        callout: {
          type: "note",
          text: "Regulatory points here are general summaries, not legal advice. Calling rules vary by country, state and purpose, and change. Confirm your obligations with counsel before launching automated outbound calls.",
        },
      },
      {
        heading: "Inbound vs Outbound Automation",
        body: [],
        table: {
          headers: ["", "Inbound", "Outbound"],
          rows: [
            ["Who starts the call", "Customer", "Business"],
            ["Typical jobs", "Routing, answers, bookings, status", "Reminders, confirmations, scheduling, follow-ups"],
            ["Main design challenge", "Understanding varied requests", "Consent, timing and reaching the right person"],
            ["Regulatory focus", "Disclosure, recording consent", "Prior consent, caller ID, opt-out, calling times"],
            ["Success measure", "Resolution and transfer quality", "Completion, confirmations, opt-outs, complaints"],
          ],
        },
      },
      {
        heading: "Inbound Call Automation",
        body: [
          "Replace 'press 1 for...' menus with a natural question ('How can I help?'), route by intent to the right queue or self-service flow, answer common questions, and act through narrow tools for simple changes. Keep keypad input available, transfer with context and log every call outcome. See [[/blogs/ai-voice-agents-customer-service|customer service voice agents]] for verification and QA.",
        ],
      },
      {
        heading: "Outbound Call Automation",
        body: [
          "Good outbound use cases are calls customers expect: appointment reminders, delivery scheduling, confirmations, service follow-ups. Build each campaign around consent and timing: who agreed to be called and how, which hours are allowed in the recipient's time zone, how many attempts are acceptable and what happens on voicemail.",
        ],
        diagram: {
          variant: "outboundflow",
          alt: "Outbound AI call flow: consent check (highlighted), allowed hours, call and disclose AI, conversation, outcome and opt-out, record and audit.",
          caption: "The consent check comes before the call, not after a complaint.",
        },
      },
      {
        heading: "Consent, Disclosure and Calling Rules",
        body: [],
        checklist: [
          "**United States:** the FCC's February 2024 declaratory ruling confirmed AI-generated voices are 'artificial' under the TCPA, so prior express consent rules apply (stricter written consent for telemarketing); state laws add requirements",
          "**European Union:** from 2 August 2026, AI Act Article 50 requires informing people they are interacting with AI unless obvious; national telemarketing and data protection rules also apply",
          "**Everywhere:** identify the business, offer opt-out, honour do-not-call lists where they exist, respect calling hours and keep consent records",
          "**Recording:** disclose and obtain consent where required; some jurisdictions require all parties' consent",
        ],
        cta: {
          title: "Planning automated calls at scale?",
          description: "ZSpace Labs builds call automation with consent checks, calling windows, opt-out handling and audit logs built into the workflow.",
        },
      },
      {
        heading: "Scheduling and Notifications",
        body: [
          "Many outbound calls are part of a workflow: a reminder 24 hours before an appointment, a reschedule option if the customer cannot attend, an SMS confirmation after the call. Integrate with calendars and CRMs so outcomes update records, and choose the least intrusive channel; sometimes an SMS or email is the better first step.",
        ],
      },
      {
        heading: "Monitoring and Quality",
        body: [],
        checklist: [
          "Outcomes per call: confirmed, rescheduled, voicemail, no answer, transferred, opted out",
          "Opt-out and complaint rates by campaign",
          "Calls attempted outside allowed windows (should be zero)",
          "Consent record coverage (should be complete)",
          "Latency and transcription quality",
          "Sampled call reviews against a scorecard",
        ],
      },
      {
        heading: "Telephony Integration",
        body: [
          "Use a telephony provider for numbers and call control, connected to your voice agent through SIP or media streams. Register and verify caller IDs where schemes exist to reduce spam labelling, set concurrency limits, and handle answering machine detection carefully. Platforms such as Twilio's ConversationRelay and realtime model APIs that accept SIP can shorten the integration.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "AI call automation answers every inbound call and runs routine outbound calls consistently at scale. Its limits are regulatory exposure for outbound, recognition errors, customer frustration when calls feel robotic or unwanted, and carrier spam labelling. Start with calls customers want to receive.",
        ],
      },
      {
        heading: "How to Implement Step by Step",
        body: [],
        checklist: [
          "**1. Choose call types** customers expect and value",
          "**2. Confirm legal requirements** for each market",
          "**3. Build consent and opt-out records** into the CRM",
          "**4. Design the conversation** with disclosure and a human option",
          "**5. Integrate telephony, calendar and CRM**",
          "**6. Test and pilot** with a small group",
          "**7. Monitor outcomes, opt-outs and complaints** before scaling",
        ],
      },
      {
        heading: "Answering Machines and Voicemail",
        body: [
          "Outbound calls often reach voicemail. Answering machine detection is imperfect, so design for both outcomes: a short message that identifies the business, the purpose and how to respond or opt out, and no sensitive details. Voicemail rules and consent requirements still apply to automated messages, so include voicemail behaviour in your legal review. Limit retry attempts and space them sensibly.",
        ],
      },
      {
        heading: "Measuring Outbound Campaigns",
        body: [],
        table: {
          headers: ["Metric", "Why it matters"],
          rows: [
            ["Contact rate", "Share of calls reaching a person"],
            ["Task completion", "Confirmed, rescheduled or resolved"],
            ["Opt-out rate", "Signals unwanted calls"],
            ["Complaint rate", "Regulatory and reputational risk"],
            ["Calls outside permitted windows", "Compliance; should be zero"],
            ["Cost per completed outcome", "Business value versus alternatives such as SMS"],
          ],
        },
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a home services company calls customers the day before appointments to confirm arrival windows. Customers opt in at booking; calls run only between allowed hours in the customer's time zone; the agent discloses it is an AI assistant, confirms or reschedules through the scheduling API and sends an SMS summary. Opt-outs are recorded instantly and suppress future calls.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Launching outbound AI calls without legal review",
          "No consent records",
          "Calling outside permitted hours or time zones",
          "No opt-out in the call",
          "Using AI for cold sales calls first",
        ],
        cta: {
          title: "Want call automation that customers welcome?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|AI call automation]] for inbound and consented outbound calls.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Automate inbound calls for speed and outbound calls only where customers expect them, with consent, disclosure, calling windows and opt-outs built in. Related: [[/blogs/voice-ai-agent-development|voice AI development]], [[/blogs/ai-receptionist|AI receptionist]] and [[/blogs/ai-voice-agents-customer-service|customer service voice agents]].",
        ],
      },
    ],
  },
];
