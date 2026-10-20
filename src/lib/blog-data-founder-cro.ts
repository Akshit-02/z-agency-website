import type { BlogPost } from "./blog-data";

/**
 * Founder Batch 1, CRO cluster (topics 19 and 20): enquiry forms that do not
 * attract low-quality leads, and a CRO roadmap for low-traffic sites.
 * Sources checked 2026-10-14: GA4 recommended events reference (generate_lead
 * and lead-lifecycle events); Google reCAPTCHA v3 docs (0.5 default
 * threshold); Cloudflare Turnstile widget modes; Google Optimize sunset notice
 * (30 Sep 2023); Baymard checkout field and phone-field research (checkout
 * data, used only as an analogy); NN/g form and usability-testing articles;
 * GOV.UK Design System question pages; WCAG 2.2 Understanding docs (1.3.5,
 * 3.3.1, 3.3.7, 3.3.8); GOV.UK DUAA PECR factsheet; ACMA spam guidance; PDPC
 * DNC guide. Sample sizes were calculated, not sourced. No figure here is
 * ZSpace client data and no results are claimed.
 */
export const founderCroPosts: BlogPost[] = [
  {
    slug: "improve-website-enquiry-form-conversions",
    title: "How to Improve Website Enquiry Forms Without Attracting Low-Quality Leads",
    seoTitle: "Better Enquiry Forms Without Low-Quality Leads",
    excerpt:
      "Which enquiry form fields to keep, drop or make optional, how to stop bots without puzzles, and how to measure lead quality rather than form volume.",
    category: "CRO",
    banner: "reqchecklist",
    sceneKind: "crm",
    bannerAlt: "An enquiry form broken into fields, each marked ask, optional, ask later or drop, with bot, fake-detail and low-intent submissions filtered separately",
    date: "2026-10-14",
    readingTime: "12 min read",
    relatedServiceSlugs: ["cro-audit", "ui-ux-design"],
    relatedIndustrySlugs: ["professional-services", "b2b-enterprise", "startups"],
    relatedSlugs: ["website-lead-generation", "website-gets-traffic-but-no-leads", "ai-lead-qualification"],
    faqs: [
      {
        q: "How many fields should an enquiry form have?",
        a: "There is no reliable number for enquiry forms. Start from the fields your team actually uses to reply and route the enquiry, which for most service businesses is name, email, a short description of the need and one or two banded qualifying questions. Every other field should earn its place by changing what you do next.",
      },
      {
        q: "Should the phone number be required?",
        a: "Usually not. Make it optional and say why you might call, for example \"if you would prefer a call back\". Baymard's checkout research found many sites demand a phone number without explanation and some shoppers refuse to give one; enquiry forms are a different context, but the same reluctance applies.",
      },
      {
        q: "Will adding a budget question reduce enquiries?",
        a: "It may reduce some, and that can be the point if those enquiries could never become customers. Reduce the cost to genuine buyers by using bands rather than free text, adding a \"not sure yet\" option and explaining that the answer helps you suggest the right scope.",
      },
      {
        q: "Do I need a CAPTCHA on a contact form?",
        a: "Not necessarily a puzzle. A hidden honeypot field plus server-side validation stops a lot of simple bots. If spam persists, add a low-friction check such as Cloudflare Turnstile or reCAPTCHA v3, which score or challenge in the background rather than asking people to identify images.",
      },
      {
        q: "Is a privacy notice required on a simple enquiry form?",
        a: "In most places where data protection law applies, you need to tell people who you are, what you will use their details for and where to find your privacy policy, at or before the point of collection. Marketing consent is separate and should be its own unticked option. Check the current rules for each country you serve.",
      },
    ],
    content: [
      {
        heading: "The short answer",
        body: [
          "**Remove fields that do not change what you do next, explain the ones you keep, and add one or two banded qualifying questions instead of a long form. Then deal with spam, fake details and low-intent enquiries as three separate problems, because each has a different fix. Finally, judge any change by how many qualified leads it produces, not by how many forms are submitted.**",
          "Shortening a form and lengthening it are both blunt tools. A short form can flood sales with enquiries they cannot use; a long one can lose good buyers who were ready to talk. The useful question for each field is: what does this cost the visitor, and what does it tell us that we would act on?",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Audit fields one by one: friction cost against qualification value.",
          "Use banded questions (budget, timeline) with a \"not sure yet\" option rather than free text or forced answers.",
          "Bots, fake details and low-intent humans are different problems. Do not fight all three with one CAPTCHA.",
          "Use visible labels, validate after the visitor leaves a field and describe errors in text.",
          "Track generate_lead only when a submission actually arrives, then record qualify_lead and disqualify_lead so quality is measurable.",
          "Tell people what you will do with their details, and keep marketing consent separate.",
        ],
      },
      {
        heading: "Field-by-field: what to ask, and when",
        body: [
          "This table is a starting point for a typical service business: an agency, consultancy, software studio or B2B supplier. The friction and value ratings are judgement, not measured data, so adjust them to how your sales process works. \"Ask later\" means collect it on the first call or in a follow-up email, once the visitor has a reason to share it.",
        ],
        table: {
          headers: ["Field", "Friction cost", "Qualification value", "Recommendation"],
          rows: [
            ["**Name**", "Low", "Low, but needed to reply personally", "**Ask** (one field, not first and last name separately unless your CRM needs it)"],
            ["**Email**", "Low", "Medium: domain hints at company vs personal", "**Ask**, with input type and autocomplete set"],
            ["**Phone**", "Medium to high: many people dislike giving it", "Low to medium, depending on whether you call", "**Make optional** and say why; drop it if nobody calls"],
            ["**Company**", "Low", "Medium for B2B routing", "**Make optional**, or ask if you only sell to businesses"],
            ["**Website**", "Low", "High for agencies and auditors: lets you prepare before replying", "**Make optional**, accept \"example.com\" without https://"],
            ["**Budget**", "Medium: feels intrusive if open-ended", "High: the strongest single fit signal", "**Ask** as bands with \"not sure yet\"; explain why you ask"],
            ["**Timeline**", "Low if banded", "Medium to high: separates research from buying", "**Ask** as bands, or fold into the message prompt"],
            ["**Service needed**", "Low as a dropdown", "High for routing to the right person", "**Ask** as a short list with \"not sure yet\""],
            ["**Message**", "Medium: a blank box is hard to start", "High: shows intent and context", "**Ask**, with a prompt that tells people what to include"],
            ["**How did you hear about us?**", "Low to medium", "Low for qualifying; useful for attribution", "**Ask later** or capture the source page automatically"],
          ],
        },
        callout: {
          type: "note",
          text: "The most-quoted form research is from checkout, not enquiries. Baymard's 2024 benchmark found the average **ecommerce checkout** had 11.3 form fields and that \"most sites need only 8\", and that field count affects usability more than the number of steps. Treat that as an analogy (fewer, better fields help) rather than a target for an enquiry form.",
        },
      },
      {
        heading: "Three different problems, three different fixes",
        body: [
          "\"Low-quality leads\" usually mixes three things. Sort a month of enquiries into these buckets before changing anything, because the fixes pull in different directions.",
          "**1. Bots.** Gibberish names, link-stuffed messages, bursts of submissions at odd hours. Fix these out of sight of real visitors. A honeypot is a hidden field that people never see but simple bots fill in; reject any submission where it has a value. Validate everything again on the server, since bots can skip your page entirely. If spam persists, add a background check. Cloudflare Turnstile has three widget modes: Managed (the visitor is asked to tick a box only if a further check is needed), Non-interactive (a spinner, never a prompt) and Invisible (no widget at all; Cloudflare says you must then reference its Turnstile privacy addendum in your privacy policy). Google reCAPTCHA v3 returns a score for each request without interrupting the visitor, where 1.0 is very likely a good interaction and 0.0 very likely a bot; Google says that \"by default, you can use a threshold of 0.5\" and that you should verify the action name on your server.",
          "**2. Fake details from real people.** Phone numbers like 0000000000, throwaway email addresses, \"asdf\" in the company field. These are often a symptom of the form, not the visitor: people invent details when a field is required and they do not see why. Baymard's checkout research found 39% of benchmarked sites required a phone number \"without any sort of explanation\", and 14% of 1,026 surveyed shoppers said they would never give an online store their phone number. Make such fields optional, explain why you ask, and the fake answers tend to become blanks, which are more honest and easier to handle.",
          "**3. Genuine but low-intent enquiries.** Students, job seekers, people wanting a free opinion, or buyers whose budget or scope will never fit. CAPTCHAs do nothing here because these are real humans. Fix them with copy and routing: say above the form who you work with and what a typical engagement involves; offer a self-serve route (a guide, a pricing explainer, a careers page) for people who are not buying; use the service and budget answers to route enquiries automatically, so a poor fit gets a polite, useful reply instead of a sales call.",
        ],
      },
      {
        heading: "Labels, prompts and validation",
        body: [
          "Small details decide whether a good buyer finishes the form. NN/g recommends clear, visible labels placed outside empty fields rather than placeholder text, which disappears as soon as someone types. For errors, NN/g advises waiting until the user has finished with a field and moved on before showing an error, placing the message next to the field. The exception is complex input such as a new password.",
          "The GOV.UK Design System's question pages pattern says to \"only ask users for information you really need\" and to make it clear why you are asking each question. That second point is the cheapest improvement most enquiry forms can make: a short hint under the budget or phone field often does more than removing it. If your form needs several steps, see [[/blogs/multi-step-form-ux-design|how to design multi-step forms]].",
        ],
        checklist: [
          "Turn the message box into a prompt: \"What are you trying to fix or build, and is there a deadline? Rough ideas are fine.\"",
          "Write the button as the action: \"Send enquiry\" or \"Request a call back\", not \"Submit\".",
          "Show what happens next after submission: who replies and what they will need.",
          "Keep error messages specific: \"Enter an email address like name@company.com\", not \"Invalid input\".",
          "Do not clear the form when the server rejects a submission.",
        ],
      },
      {
        heading: "Accessibility checks that also reduce drop-off",
        body: [
          "Several WCAG 2.2 criteria apply directly to enquiry forms, and meeting them tends to help everyone, not only people using assistive technology. For a broader view, see [[/blogs/accessible-ui-ux-design|accessibility in UI/UX design]].",
        ],
        checklist: [
          "WCAG 3.3.1 Error Identification (Level A): identify the field in error and describe the error in text, not only with a red border.",
          "WCAG 1.3.5 Identify Input Purpose (Level AA): make the purpose of personal-data fields programmatically determinable. In practice, set autocomplete values such as name, email, tel, organization and url so browsers can fill them.",
          "WCAG 3.3.7 Redundant Entry (Level A): in a multi-step form, do not ask people to retype information they already gave in the same process; carry it forward or let them select it.",
          "**Puzzle CAPTCHAs:** 3.3.8 Accessible Authentication (Minimum) is about login and authentication steps, so it does not strictly apply to a contact form. It still points the right way: background checks are kinder than image or text puzzles.",
        ],
      },
      {
        heading: "Measure lead quality, not form volume",
        body: [
          "If the only number you track is submissions, any change that adds junk looks like a win. Google Analytics 4 has recommended events for the whole lead lifecycle, listed in the GA4 events reference: To connect those quality signals back to the channels that produced them, see [[/blogs/measure-multi-channel-website-conversions|measuring conversions across multiple channels]].",
        ],
        table: {
          headers: ["Event", "What Google says it measures", "When to send it"],
          rows: [
            ["**generate_lead**", "\"When a lead has been generated (for example, through a form)\"", "From the browser, only after your server confirms the enquiry was received"],
            ["**qualify_lead**", "When a user is marked as meeting the criteria to become a qualified lead", "From your CRM or a back-end process, when someone reviews the enquiry"],
            ["**disqualify_lead**", "When a user is marked as disqualified, with a disqualified_lead_reason parameter", "Same, with a consistent reason list (spam, wrong service, budget, location)"],
            ["**close_convert_lead**", "When a qualified lead is successfully converted into a customer", "When the deal is won"],
          ],
        },
        callout: {
          type: "tip",
          text: "The disqualified_lead_reason values tell you which of the three problems you have. Mostly \"spam\" means a bot fix; mostly \"budget\" or \"wrong service\" means copy and qualifying questions. Sending lifecycle events from a CRM needs server-side work, so a simple weekly spreadsheet that tags each enquiry is a reasonable start.",
        },
      },
      {
        heading: "What the form must tell people: a regional check",
        body: [
          "This is a practical summary, not legal advice. Rules differ by country and change, so check current rules with the regulator or a lawyer for each market you serve. The common thread: say who you are, why you want the details and where your privacy policy is, and ask for marketing consent separately with an unticked box.",
        ],
        table: {
          headers: ["Region", "What to check on an enquiry form"],
          rows: [
            ["**India**", "The Digital Personal Data Protection Act 2023 and the DPDP Rules 2025, notified in November 2025 with obligations phased in over the following months. The Rules set out detailed requirements for consent notices. Commencement dates have been reported differently; check the current Gazette text before relying on a date."],
            ["**UK**", "UK GDPR requires clear privacy information when you collect personal data. PECR governs marketing emails, texts and calls, and was amended by the Data (Use and Access) Act 2025, which comes into force in stages. Check the ICO for which changes apply now."],
            ["**UAE**", "Federal Decree-Law No. 45 of 2021 (PDPL). Some free zones, such as DIFC and ADGM, run their own data protection regimes. Check the current status of the executive regulations and which regime covers you."],
            ["**Australia**", "If the Privacy Act applies to your business, tell people how you will handle their information. Under the Spam Act, commercial emails and texts need consent, must identify the sender and must include a working unsubscribe. The ACMA expects consent to be clear; an unticked, separate opt-in is the safe design."],
            ["**Singapore**", "PDPA notification and consent apply to the enquiry. If you plan to call or text a Singapore number with marketing, the PDPC's DNC guide says you must check the Do Not Call Registry unless the person has given clear and unambiguous consent. A consent option next to the phone field is a sensible way to capture it."],
          ],
        },
      },
      {
        heading: "How this site's own contact form handles it",
        body: [
          "As a factual reference, not a result: the ZSpace Labs contact form asks for name, email and project details as required fields; company, website and phone are optional, and the website field accepts an address without https://. It asks what the visitor needs and a budget range from a short list that includes \"Let's discuss\". A one-line privacy notice with a link to the privacy policy sits under the submit button. A hidden honeypot field is checked on the server, and the generate_lead event is sent to GA4 only after the server confirms the enquiry was delivered, never on the button click.",
        ],
      },
      {
        heading: "Hypothetical example: a consultancy with a busy, noisy form",
        body: [
          "Hypothetical example: a 12-person IT consultancy gets around 60 form submissions a month. A partner tags a month of them and finds roughly a third are spam, a third are job seekers or students, and a third are genuine buyers, several with fake phone numbers.",
          "They make four changes. A honeypot and Turnstile in Managed mode for the spam. The phone field becomes optional, with \"only if you'd like a call back\". The careers page and a short guide are linked above the form for non-buyers. A banded \"What are you looking for?\" question routes partnership and job enquiries away from sales. Submissions fall, which is expected. Whether the change worked is judged by qualified enquiries per month and the reasons in disqualify_lead, compared over the next two or three months with an eye on seasonality.",
        ],
      },
      {
        heading: "Mistakes to avoid",
        body: [],
        checklist: [
          "Adding a puzzle CAPTCHA to fix low-intent enquiries. It only adds friction for buyers.",
          "Making every field required \"to improve quality\". It mostly produces fake answers.",
          "Firing generate_lead on button click, so failed submissions count as leads.",
          "Asking for budget as free text, which people skip or answer with \"depends\".",
          "Shipping form changes without testing that enquiries still reach the inbox or CRM, including spam folders.",
          "Removing the message box. It is often the best signal of intent you have.",
        ],
      },
      {
        heading: "When this approach is not the answer",
        body: [
          "If almost all your submissions are genuine but few become customers, the form may not be the problem: the traffic, the offer or the follow-up might be. Work through [[/blogs/website-gets-traffic-but-no-leads|why a site gets traffic but no leads]] first. If you get very few enquiries of any kind, adding qualifying questions will make that worse; focus on reach and the offer, and see the wider [[/blogs/website-lead-generation|lead generation guide]]. For high-volume, inbound-led businesses, scoring and routing after submission may matter more than the form; [[/blogs/ai-lead-qualification|automated lead qualification]] covers that side. If the form is fine but enquiries still do not close, work through [[/blogs/improve-website-lead-quality|how to improve lead quality]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Measurement and bot controls: Google: GA4 recommended events reference; Google: reCAPTCHA v3 (vendor documentation); Cloudflare: Turnstile widget modes (vendor documentation).",
          "Form usability: Baymard: checkout flow average form fields (ecommerce checkout research, published 26 June 2024); Baymard: explain the phone number field (checkout research); NN/g: placeholders in form fields are harmful; NN/g: guidelines for reporting errors in forms; GOV.UK Design System: question pages.",
          "Accessibility: W3C WCAG 2.2 Understanding documents for 3.3.1, 1.3.5, 3.3.7 and 3.3.8.",
          "Regional: GOV.UK: DUAA factsheet, PEC Regulations; ACMA: consent expectations for businesses using direct marketing; PDPC: Do Not Call Registry for organisations; Baker McKenzie: UAE key data laws (law-firm commentary).",
          "Accessed 14 October 2026. Vendor features, analytics events and data protection rules change; check the current versions. Nothing here is legal advice.",
        ],
      },
      {
        heading: "Next steps",
        body: [
          "Export the last two or three months of enquiries and tag each one as bot, fake details, low intent or genuine. Then walk the field table against your own form, fix whichever bucket is largest first, and set up generate_lead and qualify_lead so the next change can be judged on quality. If you want an outside view, a [[/services/cro-audit|CRO audit]] can cover the form, the page around it and the tracking together.",
        ],
        cta: {
          title: "Want a second pair of eyes on your enquiry form?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/cro-audit|CRO audits]] and [[/services/ui-ux-design|form and page redesign]]. If useful, we can talk through your form, your spam and lead-quality picture, and what to change first.",
        },
      },
    ],
  },
  {
    slug: "cro-strategy-low-traffic-websites",
    title: "How to Build a CRO Roadmap When You Have Limited Traffic and Budget",
    seoTitle: "CRO Roadmap for Low-Traffic Websites",
    excerpt:
      "Why most small lead-gen sites cannot run valid A/B tests, the sample-size maths that shows it, and a 90-day CRO roadmap that works without a testing tool.",
    category: "CRO",
    banner: "roadmap",
    sceneKind: "roadmap",
    bannerAlt: "A 90-day CRO roadmap in four phases: measurement, research without A/B tests, obvious fixes, and one bold change measured before and after",
    date: "2026-10-14",
    readingTime: "9 min read",
    relatedServiceSlugs: ["cro-audit", "ui-ux-design"],
    relatedIndustrySlugs: ["professional-services", "b2b-enterprise", "startups"],
    relatedSlugs: ["website-gets-traffic-but-no-leads", "usability-testing", "ecommerce-experimentation-mistakes"],
    faqs: [
      {
        q: "How much traffic do I need to run an A/B test?",
        a: "It depends on your conversion rate and the size of change you want to detect. With a 2% enquiry rate, detecting a 20% relative improvement at the usual settings needs roughly 21,000 visitors in each variant. Run the calculation for your own numbers before buying a testing tool.",
      },
      {
        q: "Can I just run an A/B test for longer to make up for low traffic?",
        a: "Longer tests do collect more visitors, but over many months seasonality, campaigns, cookie loss and site changes all distort the result. If the required duration runs into many months, the better choice is usually research-led changes rather than a stretched test.",
      },
      {
        q: "What happened to Google Optimize?",
        a: "Google says Optimize and Optimize 360 have been unavailable since 30 September 2023. It pointed users to A/B testing tools that integrate with GA4, naming AB Tasty, Optimizely and VWO.",
      },
      {
        q: "Is before-and-after measurement worthless?",
        a: "No, but it is weaker evidence than a controlled test. It cannot separate your change from seasonality or a shift in traffic. Use it for large, well-reasoned changes, compare like-for-like periods, note anything else that changed, and treat the result as directional.",
      },
      {
        q: "Should I optimise for form fills or qualified leads?",
        a: "Qualified leads where you can. Form fills give you more data sooner, but a change that adds poor-fit enquiries can look like a win. Track generate_lead alongside qualify_lead or a simple weekly tag in your CRM.",
      },
    ],
    content: [
      {
        heading: "What to do instead of A/B testing",
        body: [
          "**If your site gets a few thousand visitors a month and converts a few per cent of them into enquiries, you almost certainly cannot run statistically valid A/B tests on small changes. Build your CRO roadmap around fixing measurement, then research that needs no test (five-user usability tests, form analytics, session review, message-match checks and customer conversations), then shipping the obvious fixes, and finally making one bold change and reading its effect honestly.** A/B testing comes later, and only on pages where the numbers allow it.",
          "This is written for service and B2B sites where the goal is an enquiry, call or demo request. Online stores have more conversions to work with; for them see [[/blogs/ecommerce-ab-testing|what to A/B test first on an ecommerce site]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "At lead-gen conversion rates, valid tests of modest changes need tens of thousands of visitors per variant.",
          "Do the sample-size sum before buying a testing tool.",
          "Measurement comes first: a lead you cannot count cannot be optimised.",
          "Qualitative research finds the biggest problems with very few participants.",
          "Ship clear fixes without testing them; save experiments for genuine uncertainty.",
          "Read before-and-after changes as directional evidence, not proof.",
        ],
      },
      {
        heading: "The sample-size reality check",
        body: [
          "The table shows roughly how many visitors each variant needs to detect a given relative lift, using the standard formula for comparing two proportions. These are calculated values, not benchmarks.",
          "**Assumptions:** a two-sided test at α = 0.05 (5% chance of a false positive) and 80% power (80% chance of detecting the lift if it is real), two variants with a 50/50 split, and visitors as the unit. **Formula:** n per variant = [1.96 × √(2p̄(1 − p̄)) + 0.84 × √(p₁(1 − p₁) + p₂(1 − p₂))]² ÷ (p₂ − p₁)², where p₁ is the baseline rate, p₂ = p₁ × (1 + lift) and p̄ is their average.",
          "Worked check: at a 2% baseline and a 20% relative lift, p₂ = 2.4% and p̄ = 2.2%. The formula gives about 21,100 visitors per variant, or about 42,200 in total. That is around 420 enquiries in each arm before you can tell 2.0% from 2.4% with these settings. Online calculators such as Evan Miller's use slightly different formulas, so expect small differences.",
        ],
        table: {
          headers: ["Baseline enquiry rate", "Detect +10% relative", "Detect +20% relative", "Detect +50% relative"],
          rows: [
            ["**1%**", "~163,100 per variant", "~42,700 per variant", "~7,750 per variant"],
            ["**2%**", "~80,700 per variant", "~21,100 per variant", "~3,830 per variant"],
            ["**5%**", "~31,200 per variant", "~8,160 per variant", "~1,470 per variant"],
          ],
        },
      },
      {
        heading: "What that means in weeks",
        body: [
          "Turn the table into time by dividing total visitors needed (two variants) by weekly traffic to the page under test. The arithmetic below assumes all of the site's traffic reaches that page, which is optimistic; most tests run on one page with a share of the traffic.",
          "**2,000 visitors a month** is about 460 a week (2,000 × 12 ÷ 52). At a 2% baseline, detecting a 20% lift needs 42,200 visitors, which is about 91 weeks. Detecting a 50% lift needs about 7,650 visitors, about 17 weeks.",
          "**10,000 visitors a month** is about 2,300 a week. At a 2% baseline, a 20% lift takes about 18 weeks and a 50% lift about 3 to 4 weeks. At 5%, a 20% lift takes about 7 weeks.",
          "So a smaller site can test only very large differences, and a mid-sized one can test large differences on its busiest pages. Practitioners disagree on rules of thumb: the testing vendor Convert suggests about 10,000 visitors per variant with around 1,000 conversions, and others quote different thresholds. Your own calculation is more useful than any of them.",
        ],
        callout: {
          type: "note",
          text: "Running a test longer does not rescue a small sample cleanly. Over many months, seasonality, campaigns, cleared cookies and other site changes all mix into the result. If the sum says a year, choose a different method.",
        },
      },
      {
        heading: "The 90-day roadmap",
        body: [
          "This sequence suits a site with a few thousand to a few tens of thousands of monthly visitors, a small team and no dedicated analyst. Durations assume someone can give it a few hours a week; stretch them if not.",
        ],
        table: {
          headers: ["Phase", "Weeks", "What you do", "Output"],
          rows: [
            ["**1. Measurement and plumbing**", "1–2", "Submit test enquiries on mobile and desktop and confirm they arrive. Send GA4 generate_lead only after the server confirms a submission and mark it as a key event. Agree how leads will be tagged as qualified or not.", "A lead count you trust and a quality baseline"],
            ["**2. Research, no A/B test**", "3–5", "Five-user usability tests on the main enquiry path; form analytics (starts, abandons, error fields); a review of 20 to 30 session recordings; a message-match audit of top ads and search landing pages; four to six customer interviews and a read of recent sales-call notes.", "A ranked list of problems, each with evidence"],
            ["**3. Obvious fixes**", "6–9", "Fix anything broken, confusing or inaccessible: form errors, missing trust information, mismatched headlines, slow or broken mobile pages, unclear next steps.", "Fixes shipped, with the date of each change logged"],
            ["**4. One bold change**", "10–13", "Pick the biggest unresolved problem on the highest-intent page and make a substantial change: a new offer, a rewritten page or a restructured form. Measure before and after.", "A directional read and a decision on what comes next"],
          ],
        },
      },
      {
        heading: "Research methods that need no test",
        body: [
          "**Five-user tests.** Nielsen's NN/g article argues that testing with five users finds about 85% of usability problems, based on an average 31% chance of a single user hitting each problem, and that several small rounds beat one large study. It also notes that quantitative studies need more participants (around 20). Recruit people who resemble your buyers and ask them to find out whether you can help with a realistic problem, then to get in touch. Our [[/blogs/usability-testing|usability testing guide]] covers the mechanics.",
          "**Form analytics.** Track form starts, the field where people abandon and which errors appear. A form that is started often and finished rarely is a better lead than any page-level metric. For what to change, see [[/blogs/improve-website-enquiry-form-conversions|improving enquiry forms without attracting low-quality leads]].",
          "**Session review.** Watch recordings filtered to people who reached the enquiry page but did not submit. Look for patterns, not anecdotes: three people stuck in the same place matters; one is noise. Check what your tool records and that form inputs are masked.",
          "**Message-match audit.** For each top ad, campaign and search landing page, put the promise people clicked on next to the page headline and first screen. Mismatches are common and cheap to fix.",
          "**Customer and sales-call interviews.** Ask recent customers what nearly stopped them and what they compared you with, and ask sales what prospects repeatedly misunderstand. This is where offer and positioning problems show up.",
        ],
      },
      {
        heading: "Reading the bold change honestly",
        body: [
          "A before-and-after comparison is weaker than a controlled test, so plan for its limits rather than ignoring them.",
        ],
        checklist: [
          "Compare equal periods, ideally the same weeks last year as well as the weeks just before.",
          "Write down everything else that changed: campaigns, budgets, prices, seasonality, site outages.",
          "Look at qualified leads and their source, not only total submissions.",
          "Decide in advance what result would make you keep, adjust or revert the change.",
          "Only make one big change in the window, or you will not know which one mattered.",
          "Treat a small difference as no difference. Only a large, sustained shift is informative.",
        ],
      },
      {
        heading: "If you do have the traffic: what to test first on a lead-gen site",
        body: [
          "Once a page can reach the sample in roughly a month or two, testing becomes worthwhile. The free option that many small sites relied on has gone: Google says Optimize and Optimize 360 are no longer available as of 30 September 2023, and it pointed to GA4 integrations with AB Tasty, Optimizely and VWO. Budget for a tool before planning a programme.",
          "On lead-generation sites, test the things most likely to move results by a large margin, because small effects are too expensive to detect: the offer itself (a call versus an audit versus a guide), the headline and value proposition on the main landing page, the number and type of form fields, the call to action and what it promises, and the proof shown near the form. Measure qualified leads as well as submissions where volume allows, since a variant can win on fills and lose on quality. Ecommerce teams have different priorities; see [[/blogs/ecommerce-experiment-prioritization|how stores prioritise experiments]].",
        ],
      },
      {
        heading: "Hypothetical example: a B2B services firm with 6,000 visits a month",
        body: [
          "Hypothetical example: a firm gets about 6,000 visits a month and around 90 enquiries, a 1.5% rate. A sales lead tags last quarter's enquiries and finds half are poor fits. The sample-size sum shows a 20% lift would need about 28,300 visitors per variant, roughly 56,600 in total, which is more than nine months of the whole site's traffic, so testing is off the table.",
          "Weeks 1 and 2 fix a contact form that silently failed on one mobile browser and move generate_lead to fire after server confirmation. Five-user tests in weeks 3 to 5 show visitors cannot tell which services are core. Weeks 6 to 9 rewrite the services page and add banded qualifying questions. In week 10 the firm replaces its generic \"Contact us\" with a defined discovery offer, and compares qualified enquiries over the next eight weeks against both the prior period and the same period last year, noting a trade show that happened in between.",
        ],
      },
      {
        heading: "Where this roadmap does not fit",
        body: [
          "If your site has plenty of traffic and a steady flow of conversions, this roadmap is too cautious; run experiments, and read [[/blogs/ecommerce-experimentation-mistakes|why tests mislead]] before you start. If the problem is that too few of the right people arrive, CRO will not fix it; start with [[/blogs/website-gets-traffic-but-no-leads|diagnosing traffic that does not produce leads]]. And if you are about to rebuild the whole site anyway, fold the research phase into the redesign rather than optimising pages you will replace.",
          "Counting proxy events such as form starts or button clicks gives you more data sooner, but those events may not track qualified leads. Use them to find friction, not to declare winners.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Google: Optimize sunset notice; Google: GA4 recommended events reference; NN/g: why you only need to test with 5 users; Evan Miller: sample size calculator; Convert: not enough traffic to A/B test (vendor view).",
          "Sample sizes and week conversions are our own calculations using the stated formula and assumptions. Accessed 14 October 2026. Tool availability and analytics features change; check current versions.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "With limited traffic, the most valuable CRO work is not experimentation. Count leads properly, find the biggest problems through research, fix what is clearly wrong, and make one meaningful change at a time. Run the sample-size sum for each page; when a page passes it, start testing there. A [[/services/cro-audit|research-led CRO audit]] can compress the first two phases if you lack the time to run them yourself.",
        ],
        cta: {
          title: "Not sure where your CRO effort should go first?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/cro-audit|CRO audits]] and [[/services/ui-ux-design|UX improvements]]. If useful, we can talk through your traffic, your tracking and a realistic first 90 days, with or without a testing tool.",
        },
      },
    ],
  },
];
