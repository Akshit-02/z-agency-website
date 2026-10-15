import type { BlogPost } from "./blog-data";

/**
 * Founder Batch 4, UI/UX topics 75 and 76: multi-step form design and UX
 * metrics beyond conversion rate. No ZSpace prices, no market averages and no
 * client data. No "multi-step converts X% better" claim and no "78% task
 * success median": neither could be traced to a primary source.
 * Sources checked 2026-10-15:
 * - GOV.UK Design System: question pages (one question per page, back link,
 *   browser back, "Continue", progress indicators and the Carer's Allowance
 *   12-step indicator removal), check answers, complete multiple tasks
 *   (task list, statuses, returning sessions) and error summary.
 * - NN/g: wizards (Budiu, 2017); success rate (Nielsen and Budiu, 2001,
 *   reviewed 2021); how many test users; CASTLE (Laubheimer, 2023); NPS and
 *   UX (Fessenden, 2024).
 * - W3C WCAG 2.2 Understanding: 3.3.7 Redundant Entry, 2.4.3 Focus Order,
 *   2.2.1 Timing Adjustable, 3.3.1 Error Identification.
 * - Baymard: checkout flow average steps and form fields (Scott, 2024).
 * - Google Analytics Help: enhanced measurement form events; engaged
 *   sessions, engagement rate and bounce rate.
 * - MeasuringU: SEQ (Sauro, 2012, average updated 2019); SUS average of 68
 *   (Sauro, 2011); average task times (Sauro, 2010); summary of Keiningham et
 *   al. 2007.
 * - Google Research: Rodden, Hutchinson and Fu, CHI 2010 (HEART), abstract.
 * - Bain Net Promoter System: NPS question, groups and formula. Reichheld,
 *   HBR, December 2003.
 * - Keiningham, Cooil, Andreassen and Aksoy, Journal of Marketing 71(3),
 *   2007 (abstract level only).
 * - web.dev: Core Web Vitals thresholds and 75th percentile guidance.
 * Not used: a GOV.UK "save and return" pattern page (not verified) and the
 * HEART paper's body text (PDF not readable); only the abstract is relied on.
 */
export const founderUxPosts4: BlogPost[] = [
  {
    slug: "multi-step-form-ux-design",
    title: "How to Design Better Multi-Step Forms Without Frustrating Users",
    seoTitle: "Multi-Step Form UX: Design Without Frustration",
    excerpt:
      "When to split a long form into steps and how to design each one: progress, back button, validation, check answers, save and resume, accessibility and tracking.",
    category: "UI/UX",
    banner: "userflowmap",
    sceneKind: "design",
    bannerAlt: "A multi-step form flow: question pages with branching, an error state that returns to the same step, a check answers page and a confirmation",
    date: "2026-10-15",
    readingTime: "13 min read",
    relatedServiceSlugs: ["ui-ux-design", "cro-audit"],
    relatedIndustrySlugs: ["fintech", "insurtech", "education-edtech", "saas-technology"],
    relatedSlugs: ["improve-website-enquiry-form-conversions", "ecommerce-checkout-ux", "accessible-ui-ux-design"],
    faqs: [
      {
        q: "Are multi-step forms better than single-page forms?",
        a: "Neither is better in general. Splitting helps when a form has branching, many questions, or questions people need to think about or look up. A short form with a handful of fields is usually simpler on one page. There is no reliable, independent figure showing that multi-step forms convert better, so test your own form rather than relying on vendor claims.",
      },
      {
        q: "How many steps should a multi-step form have?",
        a: "There is no recommended maximum. The number of questions you ask matters more than how you divide them; Baymard's checkout research found field count affects usability far more than step count. Remove questions first, then group the rest so each step has one clear purpose.",
      },
      {
        q: "Should the step label say Next or Continue?",
        a: "GOV.UK recommends a button labelled Continue rather than Next. NN/g suggests that labels which describe what happens next are more helpful than generic Next and Previous. On the final step before submitting, name the action, such as Submit application.",
      },
      {
        q: "Do I need a progress bar on a multi-step form?",
        a: "Not always. GOV.UK advises testing the form without one first, because a simple, well-ordered form may not need it. If people still feel lost, a plain 'Question 3 of 9' or 'Step 2 of 4' is enough, as long as the total stays accurate when questions branch.",
      },
      {
        q: "How do I track which step people abandon in GA4?",
        a: "Send your own events when each step is shown and completed, with the form name, step number and step name as parameters, and register those parameters as custom dimensions. GA4's built-in form events fire on first interaction and on submit, so on their own they cannot tell you which step people left from.",
      },
      {
        q: "Does WCAG require save and resume?",
        a: "No. WCAG 2.2 Redundant Entry (3.3.7) applies within a single process and does not require you to store information between sessions. Save and resume is a design decision for long forms that people may not finish in one sitting, not an accessibility requirement in itself.",
      },
    ],
    content: [
      {
        heading: "Should your form be split into steps?",
        body: [
          "**Split a form into steps when it has many questions, branches depending on earlier answers, or asks for information people may need to find or think about. Keep it on one page when it is short and the same for everyone. Either way, the bigger win is usually asking fewer questions.** A multi-step form only helps if each step is clear, the back button keeps answers, errors are easy to fix and you can see which step people abandon.",
          "This guide is for founders and product teams building quote, application, onboarding, booking or B2B signup flows. For short lead forms, see [[/blogs/improve-website-enquiry-form-conversions|how to improve enquiry form conversions]]. Checkout has its own conventions, covered in [[/blogs/ecommerce-checkout-ux|ecommerce checkout UX]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Cut questions before deciding how to split them.",
          "Start with one question per page and group only when research shows it helps.",
          "Test without a progress indicator first, as GOV.UK advises.",
          "The browser back button and your back link must return people to their answers, not wipe them.",
          "Validate each step, show an error summary, and move focus to it.",
          "Add a check answers page before submission for small to medium forms.",
          "GA4's built-in form events cannot show the step people abandon; add custom step events.",
        ],
      },
      {
        heading: "One page or several: a decision table",
        body: [
          "Use the table to score your form. If most answers fall in the right-hand column, split it. If most fall in the middle, keep it on one page and spend the effort on removing fields. Mixed results usually mean a short single page for the essentials, then optional detail later (for example, after the account is created).",
        ],
        table: {
          headers: ["Question", "Keep on one page", "Split into steps"],
          rows: [
            ["**How many questions?**", "A handful that fit comfortably on a phone screen", "Many, and none can be removed or deferred"],
            ["**Do later questions depend on earlier answers?**", "No, everyone answers the same set", "Yes, answers decide which questions follow"],
            ["**Must people look something up?**", "No, they know every answer", "Yes, such as policy numbers, income or documents"],
            ["**Will people finish in one sitting?**", "Almost always", "Often not; they may need to come back"],
            ["**Who fills it in, and how often?**", "Experts or repeat users doing it often", "New or occasional users doing it once"],
            ["**Do people need to compare answers across sections?**", "Yes; one page lets them scan and edit", "No; each section stands alone"],
          ],
        },
        callout: {
          type: "note",
          text: "NN/g recommends wizards \"for novice users or infrequent processes\" and warns they become annoying for tasks done repeatedly. Wizards also make it hard to compare information from different steps. Those two points explain the last two rows.",
        },
      },
      {
        heading: "Fewer questions first, then steps",
        body: [
          "Splitting a form does not make it shorter. Baymard's checkout research found that \"the number of form fields in a checkout impacts overall usability far more than the number of steps\", and that the average checkout in 2024 had 5.1 steps and 11.3 form fields. That is checkout data, but the principle carries over: every question needs a reason.",
          "For each question, write down who uses the answer and what happens if you do not ask. Defer anything you only need later, derive anything you can work out from other answers, and delete anything nobody reads. Only then decide how to group what is left.",
        ],
      },
      {
        heading: "Designing each step",
        body: [
          "GOV.UK's question pages pattern is a well-documented starting point because it comes from government services tested with a very wide range of users. It says that \"asking just one question per question page helps users understand what you're asking them to do\" and recommends starting with one question per page. Grouping related fields, such as the parts of an address, is still fine; the rule is one *thing* per page, not one input.",
          "Make the question the page heading, so screen reader users and anyone scanning hear the question first. Use a primary button labelled \"Continue\" rather than \"Next\", per GOV.UK; on the final step, name the real action (\"Send application\"). NN/g adds that labels describing what comes next tell people more than generic Next and Previous.",
          "**Back behaviour.** GOV.UK says to include a back link at the top of question pages and \"do not break the browser back button\". Both should return the user to the previous page as they last saw it, with their answers in place. The exception is an action that should happen only once, such as taking a payment; there, going back should show a sensible message rather than repeat it. In single-page apps, this means each step needs its own URL or history entry, and form state must survive navigation.",
        ],
      },
      {
        heading: "Progress indicators: test without one first",
        body: [
          "GOV.UK's advice is: \"Start by testing your form without a progress indicator to see if it's simple enough that users do not need one.\" If people still struggle after you have improved the order, type and number of questions, try a simple indicator such as \"Question 3 of 9\", and only show a total if you can keep it accurate.",
          "The same guidance cites the Carer's Allowance service, whose team removed a 12-step progress indicator with no effect on completion rates or times. That is one service, not a general rule, but it is a useful reminder that a progress bar is not automatically helpful.",
          "GOV.UK advises against the style that lists every step, lets people jump between them and highlights the current one. It says these are often not noticed, do not scale well on small screens and make conditional sections hard to handle. NN/g, writing about wizards for software set-up, takes a more positive view of showing the list of steps. If your audience and context differ, test both.",
        ],
      },
      {
        heading: "Branching without losing people",
        body: [
          "Branching (conditional logic) is the strongest reason to split a form, because people never see questions that do not apply to them. It also creates most of the bugs.",
          "Keep the rules in one place, as data, rather than scattered through the interface code. Decide what happens to answers on a branch the user later leaves: if someone changes \"Do you have a co-applicant?\" from Yes to No, delete or ignore the co-applicant answers rather than submitting them. Make any step count honest: if branches change the total, say \"Step 2\" rather than \"Step 2 of 6\".",
          "**Hypothetical example:** an insurance quote form asks whether the property is rented. \"Yes\" adds two questions about the landlord; \"No\" skips them. During testing, a user answers Yes, goes back, switches to No and reaches the check answers page, which still lists landlord details. The fix is to clear dependent answers whenever the parent answer changes, and to recalculate the route before showing check answers.",
        ],
      },
      {
        heading: "Validation and the error summary",
        body: [
          "Validate each step when the user presses Continue, and do not let them move on with errors on that step. Re-check everything on the server at final submission too, because client-side checks can be bypassed and data may have changed.",
          "When there are errors, GOV.UK's error summary pattern is a good model. Put the summary at the top of the main content, below the back link and above the heading. Move keyboard focus to it. Add \"Error: \" to the start of the page title so screen readers announce the problem early. Link each error to the field it refers to, and repeat the message next to that field. This also covers WCAG 3.3.1 Error Identification, which requires the error to be identified and described in text.",
          "Write messages that say how to fix the problem (\"Enter your date of birth, for example 27 3 1990\") rather than only that something is wrong.",
        ],
      },
      {
        heading: "Check answers before the final submit",
        body: [
          "GOV.UK recommends showing \"a single check answers page immediately before the confirmation screen for small to medium-sized transactions\". For very long forms, a check page at the end of each section can help.",
          "Give each answer or section a \"Change\" link, with hidden text that tells screen reader users what each link changes. After someone edits an answer, Continue should take them straight back to the check answers page, not through the rest of the form. If the change triggers new questions (a branch), ask those first, then return.",
        ],
      },
      {
        heading: "Long forms over several sessions: task lists and save and resume",
        body: [
          "Some forms cannot be finished in one go: grant applications, onboarding that needs documents, or B2B account set-up that involves several people. GOV.UK's \"complete multiple tasks\" pattern (formerly the task list) is designed for \"longer transactions involving multiple tasks that users may need to complete over a number of sessions\". It also says to try to simplify the transaction before using one.",
          "The page lists each task with a status. GOV.UK suggests starting with as few statuses as possible, such as Completed and Incomplete, and adding others (In progress, Cannot start yet, There is a problem) only if research shows they help. It recommends showing the task list at the start of each returning session so people can pick up where they left off.",
          "GOV.UK does not prescribe how to store progress, so that part is an engineering decision. The usual options are saving to an account, or sending a resume link by email when there is no account. Save on the server after each step rather than only in the browser, tell people how long a saved form will be kept, and treat a resume link like a password: it should expire, and it should not expose personal data in the URL.",
        ],
      },
      {
        heading: "Accessibility points specific to multi-step forms",
        body: [
          "General form accessibility is covered in [[/blogs/accessible-ui-ux-design|accessible UI/UX design]]. Three WCAG 2.2 success criteria come up repeatedly once a form spans several steps:",
        ],
        table: {
          headers: ["WCAG 2.2 criterion", "What it requires", "What it means for a multi-step form"],
          rows: [
            ["**3.3.7 Redundant Entry (A)**", "Information already entered or provided in the same process must be auto-populated or available to select, unless re-entry is essential, needed for security, or the earlier answer is no longer valid", "Do not ask for the same email or address twice; offer \"same as billing address\". It applies within one process and does not require storing data between sessions"],
            ["**2.4.3 Focus Order (A)**", "Focusable components receive focus in an order that preserves meaning and operability", "When a new step loads without a page reload, move focus to its heading or the error summary, not leave it on a button that has disappeared"],
            ["**2.2.1 Timing Adjustable (A)**", "For each time limit, users can turn it off, adjust it, or are warned and given at least 20 seconds to extend it with a simple action (at least ten times); limits longer than 20 hours are exempt", "If the session times out, warn before it expires and offer a one-click extension. Saving progress reduces the damage when it does expire"],
          ],
        },
      },
      {
        heading: "Measuring where people leave",
        body: [
          "GA4's enhanced measurement includes two form events. According to Google, form_start fires \"the first time a user interacts with a form in a session\" and form_submit fires when the form is submitted. Both carry the form's id, name and destination. Because the first fires once and the second only on submission, they cannot show at which step people stopped. Multi-step forms built as single-page apps may not fire them the way you expect either, so check in DebugView.",
          "The fix is a small set of custom events. The plan below is a suggested naming scheme, not a Google standard. Register form_name, step_number and step_name as custom dimensions so they appear in reports, then build a funnel exploration from one step to the next. Never send answers, names, emails or other personal data as event parameters.",
          "Numbers tell you where people leave, not why. Pair the drop-off report with a few observed sessions or a short [[/blogs/usability-testing|usability test]] on the step with the biggest fall.",
        ],
        code: {
          label: "Suggested step events (example scheme, not a GA4 standard)",
          text: "// When a step is shown\ngtag('event', 'form_step_view', {\n  form_name: 'quote_request',\n  step_number: 3,\n  step_name: 'property_details'\n});\n\n// When a step passes validation and the user continues\ngtag('event', 'form_step_complete', {\n  form_name: 'quote_request',\n  step_number: 3,\n  step_name: 'property_details'\n});\n\n// When validation fails (count errors, never send the values)\ngtag('event', 'form_step_error', {\n  form_name: 'quote_request',\n  step_number: 3,\n  error_count: 2\n});",
        },
      },
      {
        heading: "Step design checklist",
        body: ["Use this to review each step of an existing form, or as acceptance criteria when building a new one."],
        checklist: [
          "The step has one clear purpose, and its heading is the question.",
          "Every question on it has a known use; nothing could be deferred or derived.",
          "The step has its own URL or history entry, and browser back returns to the previous step with answers intact.",
          "A back link sits at the top; the primary button says Continue (or names the final action).",
          "Answers given earlier are reused, not asked for again (WCAG 3.3.7).",
          "Errors are checked on Continue; an error summary appears above the heading, receives focus, and links to each field.",
          "\"Error: \" is added to the page title when errors are shown.",
          "Focus moves to the new step's heading when it loads without a full page refresh (WCAG 2.4.3).",
          "Any session timeout gives a warning and a simple way to extend (WCAG 2.2.1).",
          "Branch rules are defined once, and changing an answer clears answers that no longer apply.",
          "Any step count shown stays accurate across branches.",
          "Progress is saved on the server if the form may take more than one sitting.",
          "The step fires a view and a complete event with form name, step number and step name, and no personal data.",
          "The step has been tried on a small phone, with a keyboard only, and with a screen reader.",
        ],
      },
      {
        heading: "Common mistakes, and when multi-step is the wrong choice",
        body: [
          "Most problems with multi-step forms come from treating the split as the improvement, rather than the questions. The frequent ones:",
        ],
        checklist: [
          "Splitting a short, linear form into steps just to make it look lighter. It adds clicks and page loads without removing work.",
          "Asking for an email or phone number on step 1 to capture partial leads, without telling people why or how it will be used.",
          "Losing answers on browser back or refresh, especially in single-page apps.",
          "A step indicator that promises \"Step 2 of 5\" and then grows to seven.",
          "Validating only at the very end, so people are sent back several steps to fix errors.",
          "Generic Next and Previous labels, with no hint of what comes next.",
          "Copying vendor statistics about multi-step conversion rates into a business case instead of testing your own form.",
        ],
        callout: {
          type: "tip",
          text: "Multi-step is the wrong choice for forms that experts complete repeatedly (an internal order entry screen, for example), for forms where people need to see and compare all their answers at once, and for short forms that everyone answers the same way. In those cases a well-structured single page with clear sections is usually faster.",
        },
      },
      {
        heading: "Sources",
        body: [
          "GOV.UK Design System: [[https://design-system.service.gov.uk/patterns/question-pages/|question pages (including progress indicators)]]; [[https://design-system.service.gov.uk/patterns/check-answers/|check answers]]; [[https://design-system.service.gov.uk/patterns/complete-multiple-tasks/|complete multiple tasks]]; [[https://design-system.service.gov.uk/components/error-summary/|error summary]]. GOV.UK patterns are design guidance, not law.",
          "Research: [[https://www.nngroup.com/articles/wizards/|NN/g, Wizards: definition and design recommendations (Raluca Budiu, 2017)]]; [[https://baymard.com/blog/checkout-flow-average-form-fields|Baymard Institute, checkout flow average form fields (Edward Scott, 2024)]].",
          "Accessibility: [[https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html|WCAG 2.2 Understanding 3.3.7 Redundant Entry]]; [[https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html|2.4.3 Focus Order]]; [[https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html|2.2.1 Timing Adjustable]]; [[https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html|3.3.1 Error Identification]].",
          "Analytics: [[https://support.google.com/analytics/answer/9216061|Google Analytics Help, enhanced measurement events]].",
          "Accessed 15 October 2026. Design system guidance and analytics features change; check the current pages.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A good multi-step form starts as a shorter form. Decide whether to split using the table above, then build each step to the checklist: one purpose, honest progress, a back button that keeps answers, errors that are easy to find and fix, a check answers page, and step events so you can see where people leave. Next steps: list every question and its use, map the branches, add step tracking to the current form to get a baseline, and test the redesigned flow with a few real users before launch.",
          "If the form is part of a wider product redesign, our [[/services/ui-ux-design|UI/UX design service]] covers flows like these from research to build-ready designs.",
        ],
        cta: {
          title: "Losing people halfway through a form?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/ui-ux-design|UI/UX design]] and [[/services/cro-audit|conversion audits]]. If useful, we can review your form step by step against the checklist above and talk through what to change first.",
        },
      },
    ],
  },
  {
    slug: "ux-metrics-beyond-conversion-rate",
    title: "UX Metrics That Matter Beyond Conversion Rate",
    seoTitle: "UX Metrics That Matter Beyond Conversion Rate",
    excerpt:
      "UX metrics to track beyond conversion rate: task success, time, errors, SEQ, SUS, NPS limits, HEART, CASTLE and Web Vitals, and how to prove a change worked.",
    category: "UI/UX",
    banner: "gauge",
    sceneKind: "analytics",
    bannerAlt: "A gauge summarising user experience measures: task success, ease ratings, usability score and page speed, alongside conversion rate",
    date: "2026-10-15",
    readingTime: "9 min read",
    relatedServiceSlugs: ["ui-ux-design", "cro-audit"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise", "startups"],
    relatedSlugs: ["usability-testing", "cro-strategy-low-traffic-websites", "ux-audit"],
    faqs: [
      {
        q: "What is a good SUS score?",
        a: "MeasuringU reports an average SUS score of 68 across about 500 studies, so above 68 is above average and below it is below average. A score of 74 sits at roughly the 70th percentile. Treat the score as relative: compare it with your own earlier score or a competitor tested the same way.",
      },
      {
        q: "Is NPS a UX metric?",
        a: "It measures willingness to recommend, which depends on price, brand, support and alternatives as well as usability. NN/g points out that it rarely reflects specific design changes, is unreliable from small samples and is easy to game. Use it as a relationship measure, alongside task-level UX metrics, not instead of them.",
      },
      {
        q: "What is the difference between HEART and CASTLE?",
        a: "HEART (Happiness, Engagement, Adoption, Retention, Task success) was published by Google researchers for web applications people choose to use. CASTLE, from NN/g, is for tools people must use at work, where engagement and retention say little; it looks at cognitive load, advanced feature usage, satisfaction, task efficiency, learnability and errors. NN/g describes it as a sibling to HEART, not a replacement.",
      },
      {
        q: "How many users do I need to measure UX?",
        a: "To find usability problems, NN/g recommends about five users per round. To put a number on something, such as a success rate or a SUS score, it recommends at least 20, and more for narrower confidence intervals. Survey metrics like NPS need much larger samples before small changes mean anything.",
      },
      {
        q: "Is a high GA4 engagement rate a sign of good UX?",
        a: "Not on its own. GA4 counts a session as engaged if it lasts more than 10 seconds, has a key event or has two or more page views. Confused users clicking around also meet that bar. Use it to spot pages where people leave immediately, not as evidence that the experience is good.",
      },
    ],
    content: [
      {
        heading: "What should you measure besides conversion rate?",
        body: [
          "**Measure whether people can complete the tasks that matter (task success), how long and how hard it is for them (time on task, errors, a post-task ease rating), how usable the product feels overall (SUS), and whether the experience holds up in live use (Core Web Vitals, retention or adoption). Conversion rate is the business outcome; these measures tell you whether the experience is the reason it moved.** Pick a handful tied to specific questions, measure them before and after a change, and use the same tasks each time.",
          "Conversion rate is affected by traffic mix, pricing, seasonality, campaigns and stock as much as by design. A redesign can improve the experience and still see conversion flat because of a price change, or see conversion rise because of a promotion. UX metrics separate the two. This guide covers which metrics to use and how to tell if a change worked; running the studies themselves is covered in [[/blogs/usability-testing|the usability testing guide]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Start from the question you need answered, then choose the metric and method.",
          "Behavioural metrics (success, time, errors) show what people do; attitudinal ones (SEQ, SUS) show how it felt.",
          "Five users find problems; you need 20 or more to put a number on a rate.",
          "NPS is a relationship measure. It is too coarse and too easy to game to judge a design change.",
          "Use HEART for products people choose; CASTLE for tools they have to use at work.",
          "Core Web Vitals are field measures of experience; judge them at the 75th percentile.",
          "Prove a change by re-running the same tasks with the same metrics and comparing confidence intervals.",
        ],
      },
      {
        heading: "Metric selection table",
        body: [
          "Read across from the question you are trying to answer. The caveat column is the part most guides skip: many metrics are meaningless at the sample sizes small teams can manage, so it tells you what evidence each one needs.",
        ],
        table: {
          headers: ["Question you are asking", "Metric", "Method", "Sample size and caveats"],
          rows: [
            ["Can people complete the key task?", "**Task success rate**", "Moderated or unmoderated task-based test", "Five users show where people fail; 20 or more to estimate a rate. If you grade partial success, report each level separately; do not average the grades"],
            ["How long does it take?", "**Time on task**", "Timed test with the same task wording", "Times are skewed: below about 25 users report the geometric mean, above that the median, with confidence intervals"],
            ["Where do people go wrong?", "**Error count or error rate**; live: validation errors, support contacts per 1,000 sessions", "Test observation; event tracking; support tags", "Define what counts as an error before testing. Support volume also moves with traffic and policy changes"],
            ["How hard did a task feel?", "**SEQ** (Single Ease Question)", "One 7-point question right after each task", "Averages hover around 5.3 to 5.6, so compare against your own baseline. Needs the larger quantitative sample to compare versions"],
            ["How usable does the product feel overall?", "**SUS** (System Usability Scale)", "10-item questionnaire after a session or in-product", "68 is average. Measures perception, not task performance; pair it with task success"],
            ["Would people recommend us?", "**NPS**", "Relationship survey to a broad sample of customers", "Needs large samples; slow to move; easily gamed. Not suitable for judging a single design change"],
            ["Did the pages get faster and steadier?", "**Core Web Vitals** (LCP, INP, CLS)", "Field data from real users", "Judge the 75th percentile, separately for mobile and desktop. Lab tests catch regressions but do not replace field data"],
            ["Do people adopt the feature and come back?", "**Adoption and retention** (HEART)", "Product analytics, by cohort", "Needs enough users and time for cohorts to mature; affected by marketing and pricing"],
            ["Is a required work tool efficient to use?", "**CASTLE** measures, such as task efficiency and errors", "Analytics plus observation and surveys", "Retention is meaningless when use is compulsory; measure efficiency and learnability instead"],
            ["Do visitors leave immediately?", "**GA4 engagement rate**", "Analytics", "An engaged session can be just 10 seconds. A screening signal, not a quality measure"],
          ],
        },
      },
      {
        heading: "Behavioural measures: what people actually do",
        body: [
          "**Task success** is the simplest and most useful UX metric. NN/g defines success rate as \"the percentage of users who were able to complete a task in a study\". If you want to give partial credit, use labelled levels (complete success, success with a minor issue, success with a major issue, failure) and report how many people fell into each. Nielsen and Budiu are explicit that turning those levels into numbers and averaging them is wrong, because they are labels on an ordinal scale. There is no universal benchmark for a \"good\" success rate; compare with your own baseline.",
          "**Time on task** matters for anything people do often, such as searching a catalogue or processing an order. Time data is skewed by a few slow participants, so MeasuringU recommends the geometric mean for samples under about 25 and the median above that, with confidence intervals. Only compare times for the same task wording and starting point, and decide in advance how to treat failed attempts.",
          "**Errors** include wrong paths, validation errors and actions that need undoing. In a live product you can count validation errors per form step, or support contacts tagged to a feature. A falling error count after a change is often more persuasive to a team than a satisfaction score.",
        ],
      },
      {
        heading: "Attitudinal measures: how it felt",
        body: [
          "The **Single Ease Question** asks, straight after each task, how difficult or easy it was on a 7-point scale. MeasuringU reports that the average across a large set of tasks \"hovers between about 5.3 and 5.6\". It is quick, which makes it practical in unmoderated tests, and a low score next to a successful task often points to friction people pushed through.",
          "The **System Usability Scale** is a 10-item questionnaire with five response options, scored from 0 to 100. Jeff Sauro's analysis of about 500 studies puts the average at 68. SUS is useful for comparing versions or competitors over time, but a decent SUS score can hide a task that most people fail, so never report it alone.",
        ],
        callout: {
          type: "note",
          text: "A SUS score of 68 is a percentile reference, not a percentage. MeasuringU notes that a raw score of 74 converts to roughly the 70th percentile.",
        },
      },
      {
        heading: "Where NPS fits, and where it does not",
        body: [
          "Net Promoter Score asks \"How likely are you to recommend us to a friend or colleague?\" on a 0 to 10 scale. According to Bain, which owns the system, 9 to 10 are promoters, 7 to 8 passives and 0 to 6 detractors, and NPS is the percentage of promoters minus the percentage of detractors. Frederick Reichheld introduced it in Harvard Business Review in December 2003 as \"the one number you need to grow\".",
          "That growth claim has been challenged. Keiningham and colleagues, writing in the Journal of Marketing in 2007, examined Norwegian customer data over time and did not find the clear superiority over other satisfaction and loyalty measures that had been claimed. MeasuringU's summary of the paper notes that its samples of firms were small, which limits conclusions in both directions.",
          "For UX specifically, NN/g's 2024 article sets out the problems. NPS shows perception but not the reason for it. It is not valid from the small samples in a typical usability study. Grouping scores into three bins throws information away, so a user moving from 2 to 5 is still a detractor. Loyalty is affected by price, lack of alternatives and brand, not just usability. A single global score rarely reflects a specific design change. And it is easy to game, for example by surveying only happy customers. NN/g suggests pairing it with behavioural measures such as task success and with SUS.",
          "Use NPS, if at all, as a slow relationship measure across the whole customer base. Do not use it to judge whether a new onboarding flow or checkout is better.",
        ],
      },
      {
        heading: "Frameworks for choosing: HEART and CASTLE",
        body: [
          "Frameworks help you pick a few metrics that map to goals, rather than tracking everything. **HEART** (Happiness, Engagement, Adoption, Retention, Task success) comes from Kerry Rodden, Hilary Hutchinson and Xin Fu at Google, published at CHI 2010. The paper pairs the categories with a process for mapping product goals to metrics. In practice: write down the goal, decide what user behaviour or attitude would show progress towards it, then choose one metric that tracks that signal. You do not need a metric in every category.",
          "**CASTLE** (Cognitive load, Advanced feature usage, Satisfaction, Task efficiency, Learnability, Errors) is NN/g's framework for products that are compulsory for users, such as workplace and internal tools. NN/g's Page Laubheimer states that it \"is not intended to replace or supersede HEART\". The reason it exists: if staff must use an ordering portal, high retention tells you nothing about whether it is good.",
        ],
        table: {
          headers: ["Goal", "Signal", "Metric", "Framework category"],
          rows: [
            ["New customers can set up their account unaided", "They finish set-up without contacting support", "Share of new accounts completing set-up within 7 days", "HEART: Adoption / Task success"],
            ["Search helps people find products", "Searches lead to a product view", "Share of searches followed by a product view; zero-result rate", "HEART: Task success"],
            ["Staff process orders faster in the new portal", "Fewer steps and corrections per order", "Median time per order; corrections per 100 orders", "CASTLE: Task efficiency / Errors"],
            ["New staff become productive quickly", "They complete core tasks without help", "Days until a new user completes core tasks unaided", "CASTLE: Learnability"],
          ],
        },
      },
      {
        heading: "Live experience signals: Core Web Vitals and GA4 engagement",
        body: [
          "Speed and stability are part of the experience. Google's Core Web Vitals are Largest Contentful Paint (loading; good is 2.5 seconds or less), Interaction to Next Paint (responsiveness; 200 milliseconds or less) and Cumulative Layout Shift (visual stability; 0.1 or less). web.dev recommends assessing them at the 75th percentile of page loads, separately for mobile and desktop, and says only field data from real users gives the complete picture. They are useful UX metrics because they come from real visits, not a lab.",
          "GA4's **engagement rate** is the share of engaged sessions, where an engaged session lasts more than 10 seconds, has a key event or has two or more page views. Bounce rate is the inverse. These are cheap to watch but weak evidence of quality: a lost user clicking through three pages counts as engaged. Use engagement rate to find pages that people abandon at once, then investigate with task-based testing.",
        ],
      },
      {
        heading: "How to tell whether a UX change worked",
        body: [
          "Most arguments about whether a redesign \"worked\" come from measuring different things before and after. A before/after measurement plan avoids that:",
        ],
        checklist: [
          "**Before the change:** write down the two or three questions the change should answer and pick one metric for each from the table above.",
          "**Fix the tasks:** write task scenarios with the same wording, starting point and success criteria, and keep them unchanged for the second round.",
          "**Measure a baseline:** run the tasks on the current version (20 or more participants if you want to compare numbers) and record live metrics over a stable period that avoids sales and campaigns.",
          "**Note other changes:** log pricing, traffic, campaigns and releases during the measurement windows so you can explain shifts.",
          "**Measure again:** after launch, re-run the same tasks with comparable participants, and collect live metrics over a period of similar length and season.",
          "**Compare ranges, not points:** report confidence intervals. If the ranges overlap heavily, say the result is inconclusive rather than claiming a win.",
          "**Read conversion last:** if task success and ease improved but conversion did not, look at other causes before undoing the design.",
        ],
        callout: {
          type: "tip",
          text: "Low traffic makes live A/B tests slow or impossible. Task-based testing with a fixed task set still gives a fair before/after comparison. See [[/blogs/cro-strategy-low-traffic-websites|CRO strategy for low-traffic websites]] for other options.",
        },
      },
      {
        heading: "A worked example",
        body: [
          "**Hypothetical example:** a B2B software company redesigns its account set-up flow. Its questions are: can new admins set up an account unaided, and does it feel easier? Before the redesign it runs five set-up tasks with 20 participants, recording success levels, time per task and SEQ, then a SUS questionnaire. In live data it tracks the share of new accounts completing set-up within seven days and support tickets tagged \"set-up\".",
          "After launch it repeats the same five tasks with 20 similar participants. If success on the hardest task improves and the confidence intervals barely overlap, that is reasonable evidence. If SUS rises but success does not, the flow looks better but is not easier to complete. If live set-up completion rises in the same month as a sales push that brought in larger customers, the team notes the confounder rather than claiming the credit.",
        ],
      },
      {
        heading: "Pitfalls and limits",
        body: [],
        checklist: [
          "Tracking a dashboard of metrics nobody uses to make a decision. Fewer, linked to questions, is better.",
          "Quoting percentages from five-person tests as if they were rates. Five users show problems; they do not estimate how common those problems are.",
          "Averaging graded success scores or quoting the mean task time from a skewed sample.",
          "Using benchmark figures from vendor blogs that cannot be traced to a source. Compare with your own baseline instead.",
          "Rewarding teams on NPS or SUS alone, which invites gaming.",
          "Treating Lighthouse lab scores as the user experience; field data at the 75th percentile is the measure.",
          "Changing the task wording between rounds, which makes before/after comparisons meaningless.",
        ],
        callout: {
          type: "note",
          text: "When these metrics are not worth the effort: for a very early product with a few dozen users, observing five people and fixing what you see will teach you more than any score. Quantitative UX metrics pay off once there is a stable product, enough users to sample, and a decision that depends on the answer.",
        },
      },
      {
        heading: "Sources",
        body: [
          "Frameworks: [[https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/|Rodden, Hutchinson and Fu, Measuring the user experience on a large scale (CHI 2010)]]; [[https://www.nngroup.com/articles/castle-framework/|NN/g, the CASTLE framework (Page Laubheimer, 2023)]].",
          "Task and survey metrics: [[https://www.nngroup.com/articles/success-rate-the-simplest-usability-metric/|NN/g, success rate (Nielsen and Budiu)]]; [[https://www.nngroup.com/articles/how-many-test-users/|NN/g, how many test users]]; [[https://measuringu.com/seq10/|MeasuringU, the Single Ease Question]]; [[https://measuringu.com/sus/|MeasuringU, measuring usability with SUS]]; [[https://measuringu.com/?p=352|MeasuringU, average task times in usability tests]].",
          "NPS: [[https://www.netpromotersystem.com/about/measuring-your-net-promoter-score/|Bain, measuring your Net Promoter Score]] (vendor source; Bain owns NPS); [[https://hbr.org/2003/12/the-one-number-you-need-to-grow|Reichheld, The one number you need to grow (HBR, 2003)]]; [[https://doi.org/10.1509/jmkg.71.3.39|Keiningham et al., A longitudinal examination of Net Promoter and firm revenue growth (Journal of Marketing, 2007)]] (abstract) and [[https://measuringu.com/article-summaries/a-longitudinal-examination-of-net-promoter-and-firm-revenue-growth/|MeasuringU's summary]]; [[https://www.nngroup.com/articles/nps-ux/|NN/g, NPS and UX (Therese Fessenden, 2024)]].",
          "Live metrics: [[https://web.dev/articles/vitals|web.dev, Web Vitals]]; [[https://support.google.com/analytics/answer/12195621|Google Analytics Help, engagement rate and bounce rate]].",
          "Accessed 15 October 2026. Analytics definitions and thresholds can change; check the current pages.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Conversion rate tells you whether the business outcome moved; UX metrics tell you whether the experience is why. Choose a few metrics from the selection table based on the questions you need answered, measure a baseline with fixed tasks before you change anything, and compare like with like afterwards. Next steps: write down the two or three questions your next design change should answer, pick a metric for each, and schedule the baseline round before design work starts. For finding problems before you measure them, see [[/blogs/ux-audit|what a UX audit covers]].",
          "Our [[/services/ui-ux-design|UI/UX design work]] can include setting these success measures at the start of a project.",
        ],
        cta: {
          title: "Set success metrics before the redesign",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/ui-ux-design|UI/UX design]] and [[/services/cro-audit|conversion audits]]. If useful, we can help you choose the metrics and baseline tasks for a planned change, so you can judge it fairly afterwards.",
        },
      },
    ],
  },
];
