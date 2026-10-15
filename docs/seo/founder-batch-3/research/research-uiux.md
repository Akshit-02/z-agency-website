# Batch 3 research: UI/UX (Topics 53 to 56)

Checked 15 Oct 2026. Tool limits: WebSearch is US-only and Reddit is unreachable, so community evidence comes from HN, vendor blogs and practitioner sites. No search volumes are given. Reused Batch 1 and 2 facts are marked "(Batch 1/2)".

---

## Topic 53: What should a UI/UX designer deliver before developers start building?

**1. Founder question and pain.** "I've paid for design. How do I know the Figma file is actually ready for my developers (or for a fixed quote)?" Founders receive a handoff that looks finished but lacks states, responsive rules and copy. Developers then guess, estimates pad out, and the build drifts from the design. Often the founder is sitting between a freelance designer and a separate dev shop.

**2. Intent and stage.** Commercial investigation, mid-funnel. The reader is scoping a design engagement or is about to start a build. Two sub-audiences: (a) founders comparing design proposals ("what should I get for my money"); (b) PMs or founders checking a handoff before sprint 1.

**3. Queries (qualitative).** Primary: "what should a UI/UX designer deliver", "UX design deliverables before development". Supporting: "design handoff checklist", "is my Figma file ready for development", "definition of ready design", "what files does a developer need from a designer", "Figma Dev Mode do developers need a seat", "accessibility annotations handoff", "UI/UX agency deliverables list".

**4. Evidence of demand.** Moderate. Many agencies write about it, which suggests commercial demand, but I found no strong community threads. Vendor tools also exist, such as Figr's "Developer Handoff Checklist Generator" (https://figr.design/tools/dev-handoff-checklist), which shows people search for checklists. Figma's own blog ("5 things designers need to know for a smooth handoff", https://www.figma.com/blog/5-things-designers-need-to-know-for-a-smooth-handoff/) frames "Ready for dev" as a status that has to be earned. Reddit (r/UXDesign, r/webdev) is the likely real community source but was unreachable.

**5. Existing ZSpace pages.**
- **/blogs/design-handoff** (1,312 words, `blog-data-design-2.ts`, 0 external links). It is stronger than the word count suggests: a prep checklist, components, tokens, type and spacing, responsive behaviour, a states matrix, assets, interaction specs, accessibility annotations, Figma handoff, walkthrough, design QA and versioning. Missing:
  - (a) **deliverables by project type**. The page treats all projects the same: no marketing site vs SaaS app vs Shopify theme vs mobile app.
  - (b) A **definition of ready / sign-off gate**.
  - (c) **Sources**. None at all.
  - (d) The Dev Mode wording "available on paid plans with a Full or Dev seat" is right, but it doesn't name the plans or mention Code Connect / Ready for dev / Completed status differences.
  - (e) No DTCG mention.
  - (f) No "what you should own at the end" (file ownership, library, licences).
- **/blogs/how-much-ux-design-before-development** (Batch 1, `blog-data-founder-product.ts`) **already has "The ready-to-build checklist"**: 9 items covering core flows, testing, states, real content, responsive behaviour, component baseline, accessibility annotations, analytics events and open questions. **Do not write a second definition of ready.** The handoff page should link to it and add only the handoff-specific gates it lacks: file hygiene, ready-for-dev marking, the developer walkthrough done, open questions with owners, and acceptance or design-QA criteria agreed.
- **/blogs/ux-design-process** (509 words) has a "Deliverables by Step" H2. The roadmap row **UX-16** targets *this* page ("Expand 'Deliverables by Step' H2 into a full checklist"), **not** /blogs/design-handoff. Flag the conflict (see 10).
- /blogs/figma-product-design has a Dev Mode section and the FAQ "Do developers need a paid Figma seat?". Make the plan wording consistent with the handoff page.

**6. SERP weaknesses (do not copy).**
- https://merge.rocks/blog/the-ultimate-ux-design-hand-off-checklist-a-step-by-step-guide: a generic checklist with no project-type split.
- https://www.webstacks.com/blog/web-design-handoff: marketing-site oriented, five deliverables, thin on states and accessibility.
- https://mobidev.biz/blog/ui-ux-design-stages-deliverables-checklist: deliverables by stage, but an agency-process view, not "what you should hold before dev".
- https://www.theskinsfactory.com/uiux-design-questions-answers/what-ui-ux-deliverables-should-a-project-manager-expect-before-developer-handoff: a list without a sign-off gate.
- https://phenomenonstudio.com/article-faq/what-deliverables-should-you-expect-from-a-ui-ux-design-agency/: agency FAQ; cites WCAG 2.1 rather than 2.2.

Common gaps: no split by project type; Figma plan and seat facts are vague or stale; WCAG 2.1 rather than 2.2; rarely say what the *client* should own (editable source files, library, font and stock licences); no single "go / no-go" gate.

**7. Qualified-buyer potential.** Medium to high. Readers are about to spend on a build or are unhappy with a design file. Natural follow-ons: a design-to-dev readiness review, or a combined design plus build engagement.

**8. Format and original asset.**
- **"Deliverables by project type" matrix.** Rows are deliverables (sitemap/IA, user flows, wireframes, high-fi screens, states matrix, responsive specs, component library + tokens, prototype, copy deck, CMS content model, accessibility annotations, analytics event list, asset pack, design QA criteria). Columns are project types (marketing website / Shopify store / SaaS web app / mobile app). Cells are Required / Recommended / Optional. Shopify: theme sections and blocks map plus metafields. Marketing site: CMS content model and editor-editable fields. Mobile: platform conventions and OS-level states (permissions, offline, push).
- **Handoff sign-off gate.** 6 to 8 handoff-specific gates that sit *after* the existing ready-to-build checklist (link to it), e.g. "frames marked Ready for dev", "walkthrough held and recorded", "every open question has an owner and a date", "design QA acceptance criteria agreed", "client owns editable files and licences".
- Keep the existing states matrix. Add a short "Figma Dev Mode: what developers actually need" box with the plan facts below.

**9. Service page and CTA.** /services/ui-ux-design (primary), /services/website-development (secondary). CTA: "Send us your Figma file. We'll tell you what's missing before your developers start."

**10. Recommendation: UPDATE /blogs/design-handoff. I agree, with two conditions.**
- **(i) Don't duplicate the ready-to-build checklist.** Reference /blogs/how-much-ux-design-before-development for the content-readiness items, and keep this page's gate about handoff mechanics.
- **(ii) Resolve UX-16.** The roadmap names /blogs/ux-design-process as the update target. Recommendation: keep the deliverables-by-project-type matrix on /blogs/design-handoff, because that is where "before developers start" intent lands. Trim ux-design-process's "Deliverables by Step" to a short list that links across. Otherwise two pages will target "UX deliverables". Optionally retitle the handoff page to "Design Handoff: What a Designer Should Deliver Before Development (Checklist)".

**11. Facts an article would need.**

| Claim | Source | Checked | Label |
|---|---|---|---|
| Dev Mode features: inspect (layer types, layout and spacing, colours, styles and variables, prototype interactions; code or list view); compare changes (frame vs earlier versions; instance vs main component); annotations and measurements; Ready for dev marking with a list view; Code Connect (shows design-system code snippets instead of auto-generated code); component playground, asset download, plugins, Figma for VS Code. | https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode | 15 Oct 2026 | [Vendor] |
| Dev Mode is available on "Professional, Education, Organization, Government, and Enterprise plans" and needs "a Full or Dev seat". The ready-for-dev view is also open to viewer seats on Org/Enterprise. The "Completed" status is Org/Enterprise only. Code Connect: Professional, Organization and Enterprise. The page shows no date; Figma changes plans often, so re-check at publish. Not on the Starter (free) plan, by implication; not stated explicitly. | same | 15 Oct 2026 | [Vendor] |
| Figma's blog frames "Ready for dev" as a status that should mean the design is actually ready, and stresses annotating intent and asking developers what they need called out. | https://www.figma.com/blog/5-things-designers-need-to-know-for-a-smooth-handoff/ | 15 Oct 2026 (search snippet only, not fetched) | [Vendor] |
| The Scrum Guide (Nov 2020) does **not** define a "Definition of Ready". It says only that items "that can be Done by the Scrum Team within one Sprint are deemed ready for selection in a Sprint Planning event." Present "definition of ready" as a team convention, not a Scrum rule. | https://scrumguides.org/scrum-guide.html | 15 Oct 2026 | [Official] (Scrum Guide) |
| DTCG: the first stable Design Tokens Specification (2025.10) was announced 28 Oct 2025. It is a W3C **Community Group** spec, not a W3C Recommendation. (Batch 1) | https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/ | 14 Oct 2026 | [Official] (CG) |
| W3C WAI "Designing for Web Accessibility" gives 10 design tips: contrast; don't use colour alone; identifiable interactive elements; consistent navigation; associated form labels; identifiable feedback; headings and spacing; designs for different viewport sizes; image and media alternatives; controls for auto-playing content. Last updated 16 Jul 2024. It doesn't prescribe an annotation format. **I found no official W3C guidance on handoff annotations.** | https://www.w3.org/WAI/tips/designing/ | 15 Oct 2026 | [Official] |
| GitHub's open-source Annotation Toolkit is a Figma library of annotation stamps for accessibility and design intent, available via figma.com/@github and github.com/github/annotation-toolkit. It was published 18 Nov 2025 by Andrea Griffiths. It claims "nearly half of accessibility audit issues (48%) could have been prevented" with better upfront documentation of design intent. That figure is from **GitHub's internal audit data** and is not independently verified; attribute it. | https://github.blog/enterprise-software/collaboration/level-up-design-to-code-collaboration-with-githubs-open-source-annotation-toolkit/ | 15 Oct 2026 | [Vendor] |
| WCAG 2.2 AA new criteria include 2.4.11 Focus Not Obscured (Min), 2.5.7 Dragging Movements, 2.5.8 Target Size (Min), 3.3.8 Accessible Authentication (Min); A-level 3.2.6 Consistent Help and 3.3.7 Redundant Entry. (Batch 2) | https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/ | 14 Oct 2026 | [Official] |
| Practical annotation list (heading levels, landmarks, focus order, accessible names, alt text, error messages, live regions) appears across practitioner sources (TetraLogical, Adhoc, Deque). | e.g. https://adhoc.team/2023/06/28/become-an-accessibility-champion-by-using-simple-mockup-annotations | 15 Oct 2026 (snippet) | [Industry] |
| "Deliverables vary by project type" matrix. | ZSpace framework | n/a | [Inference]; present as our framework |

---

## Topic 54: How to plan responsive website design for mobile, tablet and desktop

**1. Founder question and pain.** "My designer gave me a desktop design and a 'mobile version'. My developer asks what happens on tablets and in between, and the live site breaks on some phones." A founder or marketer is commissioning a site and wants to know what to specify, which breakpoints, and how to test before launch, without overpaying for every screen at every size.

**2. Intent and stage.** Informational to commercial, at the planning stage (pre-design or during the design brief). It is also used by in-house PMs who write briefs.

**3. Queries (qualitative).** Primary: "how to plan responsive website design", "responsive design for mobile tablet and desktop". Supporting: "what breakpoints should I use", "responsive breakpoints 2026", "mobile first vs desktop first", "how many breakpoints", "container queries vs media queries", "how to test responsive design on devices", "responsive design checklist", "what screen sizes to design for".

**4. Evidence of demand.** Moderate to strong for the breakpoint sub-question. There are many vendor guides (Framer, Webflow, Ramotion, freeCodeCamp), and even college course review pages answer "which breakpoints". I couldn't get HN or Reddit threads (Reddit unreachable; HN search returned nothing relevant). The "which breakpoints" question is perennial, but evidence of *planning-method* demand is weaker. Answer it inside the breakpoint query.

**5. Existing ZSpace pages.**
- **/blogs/responsive-ui-design** (533 words, `blog-data-design-2.ts`, no external links). It has the right H2s (mobile-first, fluid grids, content-based breakpoints, a responsive component table with 6 rows, typography, touch, content priority, a testing checklist). But every section is one paragraph and there is **no method**:
  - no per-breakpoint content priority worksheet;
  - no way to choose breakpoints from analytics;
  - no component behaviour spec format;
  - no device matrix;
  - no container queries;
  - no WCAG 1.4.10 Reflow (320 CSS px);
  - no sources.
  The touch-target FAQ cites "44 points on iOS and 48 dp on Android" without a source (not verified this session; see facts). The mobile-first indexing claim is correct but uncited.
- **/blogs/how-to-make-a-website-mobile-friendly** (707 words): the implementation and test checklist. The responsive page already splits "design decisions vs implementation" and links to it. Keep that split. The device matrix belongs in the responsive page as a *planning* artefact, and the mobile-friendly page can link to it.
- **/blogs/design-handoff** has a "Responsive Behaviour" section. The new component-behaviour spec should be the canonical version, and handoff should link to it.

**6. SERP weaknesses.**
- https://www.framer.com/blog/responsive-breakpoints/: vendor, tool-tied.
- https://www.ramotion.com/blog/breakpoints-for-responsive-design/: a device-width list.
- https://www.freecodecamp.org/news/breakpoints-for-responsive-web-design/: dev-centric CSS.
- https://webflow.com/blog/responsive-breakpoints: Webflow's fixed breakpoints.
- https://www.exemplifi.io/insights/what-responsive-breakpoints-should-we-build-for/: closest to a founder angle; recommends analytics.

Gaps: most publish **fixed device-width lists** (320–480 / 768 / 1024 / 1280), which contradicts web.dev's "don't define breakpoints based on device classes". Few mention **container queries** being Baseline widely available, or **Reflow at 320 CSS px** as a hard accessibility floor. None gives a component behaviour spec template or a regional device matrix. None ties breakpoints to the client's own analytics with a method.

**7. Qualified-buyer potential.** Medium. Readers are pre-build planners; the next step is a website design or build engagement. Higher for India-first audiences, where mobile dominates.

**8. Format and original asset.** Expand to about 2,000–2,500 words with a four-part **Responsive Planning Kit**:
1. **Content priority worksheet**: per template, rank blocks 1..n and mark for each width class "show / collapse / move / defer". Rule: no content is *removed* on mobile (Google parity plus web.dev).
2. **Breakpoint selection method**:
   - (a) design at 360 and check at 320 (Reflow floor);
   - (b) widen until the layout breaks to find the *major* breakpoints, and add *minor* ones for type and spacing (web.dev);
   - (c) pull the client's GA4 "screen resolution" report for the last 90 days, list the widths covering about 90% of sessions, and make sure each falls comfortably inside a layout band, not on an edge;
   - (d) use container queries for components that appear in several column widths.
3. **Component behaviour spec template**: component, container widths, layout at each band, what truncates, what moves into a menu or sheet, touch target, hover fallback, and reflow at 320.
4. **Test device matrix**: rows are real devices and emulator widths (320, 360, 390–393, 412, 768 portrait, 1024 landscape, 1280, 1440, 1920), plus 200% text zoom and 400% zoom at 1280. Columns are browsers (Chrome Android, Safari iOS, Samsung Internet, desktop Chrome/Safari/Edge/Firefox). Include an India-first note on low-end Android widths. Present the widths as *examples drawn from StatCounter, dated*, not as targets.

**9. Service page and CTA.** /services/website-development (primary), /services/ui-ux-design. CTA: "Get a responsive spec before you build: content priority, breakpoints from your analytics, and a device test plan."

**10. Recommendation: UPDATE /blogs/responsive-ui-design. I agree.** The URL and H2s already match the intent, and the page is thin, so a new URL would cannibalise it. Retitle to something like "Responsive Website Design: How to Plan for Mobile, Tablet and Desktop" and keep the slug. Add a Sources section. Fix the touch-target FAQ to cite only verified figures. Add a reciprocal link from how-to-make-a-website-mobile-friendly.

**11. Facts an article would need.**

| Claim | Source | Checked | Label |
|---|---|---|---|
| "Don't define breakpoints based on device classes, or any product, brand name, or operating system." Design small first, then "expand the screen until a breakpoint becomes necessary" (major breakpoints). Add minor breakpoints for margins, padding and type. Line length about 70–80 characters. Include the meta viewport tag. Don't hide content because the screen is small. Use Chrome DevTools "Show media queries" for testing. Authors: Pete LePage, Rachel Andrew. The page says "Last updated 2019-02-12", so cite it as a long-standing guide, not as new. | https://web.dev/articles/responsive-web-design-basics | 15 Oct 2026 | [Official] (Google) |
| `@container` is "Baseline Widely available", "available across browsers since February 2023", with an asterisk noting "Some parts of this feature may have varying levels of support". Range syntax in style queries is flagged as not universally implemented. Container queries let components respond to their container's size, not the viewport's. | https://developer.mozilla.org/en-US/docs/Web/CSS/@container ; https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries | 15 Oct 2026 | [Official] (MDN) |
| Container queries reached Baseline Widely available in Aug 2025 (per the web.dev Baseline digest). This is consistent with Feb 2023 + 30 months. Read from a search summary, not fetched directly; fetch before quoting. | https://web.dev/blog/baseline-digest-aug-2025 | 15 Oct 2026 (snippet) | [Official] (Google) |
| WCAG 2.2 SC 1.4.10 Reflow (AA): "Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for: Vertical scrolling content at a width equivalent to 320 CSS pixels; Horizontal scrolling content at a height equivalent to 256 CSS pixels. Except for parts of the content which require two-dimensional layout for usage or meaning." Note: "320 CSS pixels is equivalent to a starting viewport width of 1280 CSS pixels wide at 400% zoom." | https://www.w3.org/WAI/WCAG22/Understanding/reflow.html | 15 Oct 2026 | [Official] |
| WCAG 2.2 SC 2.5.8 Target Size (Minimum) (AA): "The size of the target for pointer inputs is at least 24 by 24 CSS pixels, except when" Spacing / Equivalent / Inline / User Agent Control / Essential (exact exception wording on the page). | https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html | 15 Oct 2026 | [Official] |
| WCAG 2.5.5 Target Size (Enhanced) is AAA at 44×44 CSS px. From memory and secondary sources; **not fetched**. | https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html | not fetched | [Official], unverified |
| Apple HIG 44×44 pt and Material 48×48 dp minimum touch targets. **Not verified.** Both official pages render client-side and returned no text. Secondary sources agree. Either verify manually or drop the numbers from the FAQ ("platform guidelines recommend larger targets than WCAG's minimum"). | https://developer.apple.com/design/human-interface-guidelines/accessibility ; https://m3.material.io/ | 15 Oct 2026 (failed) | [Official], UNVERIFIED |
| "Google uses the mobile version of a site's content, crawled with the smartphone agent, for indexing and ranking." "Make sure that your mobile site contains the same content as your desktop site." Accordions and tabs are acceptable. "Google recommends Responsive Web Design because it's the easiest design pattern to implement and maintain." Last updated 10 Dec 2025. | https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing | 15 Oct 2026 | [Official] (Google) |
| StatCounter, **September 2026**, platform share. India: mobile 77.3%, desktop 22.1%, tablet 0.6%. UAE: mobile 60.04%, desktop 38.91%, tablet 1.05%. UK: mobile 53.56%, desktop 41.78%, tablet 4.66%. Australia: mobile 48.57%, desktop 48.48%, tablet 2.95%. **Caveat:** these are page-view shares from sites running StatCounter's tracker, not users or purchases, and they vary month to month. Always say "StatCounter, Sept 2026" and advise readers to use their own analytics. | https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/india (swap the country slug: united-arab-emirates, united-kingdom, australia) | 15 Oct 2026 | [Industry] |
| StatCounter, India mobile screen resolutions, Sept 2026: 360×800 15.28%; 393×873 6.56%; 384×832 4.16%; 385×854 4.04%; 393×876 3.67%; 360×804 3.47%. The long tail is very fragmented, which supports "design for ranges, not devices". Same caveat as above. | https://gs.statcounter.com/screen-resolution-stats/mobile/india | 15 Oct 2026 | [Industry] |
| Common vendor breakpoint sets (e.g. 375/768/1024/1280) are conventions, not standards. | e.g. https://www.framer.com/blog/responsive-breakpoints/ | 15 Oct 2026 (snippet) | [Vendor] |
| GA4 exposes screen resolution as a dimension that can be used to pick widths. From product knowledge; **verify the current GA4 report path** before writing step-by-step instructions. | https://support.google.com/analytics/ | not checked | [Vendor], unverified |

Regional note: the device mix genuinely differs. India is overwhelmingly mobile (77% in Sept 2026), so test on low-to-mid Android and Chrome. The UK has the highest tablet share of the four markets checked (4.66%), so iPad portrait/landscape deserves a row. In Australia, desktop share is roughly equal to mobile. The rules (WCAG, Google) are the same everywhere.

---

## Topic 55: How to test a website prototype before committing to full development (absorbs UX-20)

**1. Founder question and pain.** "Before I sign a build quote, can I test whether this design works with a Figma prototype, or with one I made in Lovable or Figma Make, and how do I make sure the test isn't fooling me?" The pain is spending on development and then discovering that users can't find pricing, abandon onboarding, or don't understand the offer. A second pain: a polished prototype gets a "looks great" from stakeholders and nothing is learned.

**2. Intent and stage.** Commercial investigation, pre-build. The reader has designs or an idea and is deciding whether a prototype test is worth the time before development.

**3. Queries (qualitative).** Primary: "how to test a prototype before development", "test website prototype". Supporting:
- "should I build a clickable prototype before coding" (UX-20)
- "prototype testing", "how to user test a Figma prototype"
- "moderated vs unmoderated prototype testing"
- "prototype test tasks examples"
- "paper vs clickable prototype"
- "testing AI prototypes / Lovable prototype testing"
- "how many users to test prototype"

**4. Evidence of demand.** Moderate.
- HN threads exist but are mostly old: "Ask HN: Clickable Prototypes" (https://news.ycombinator.com/item?id=588397, 2009). A 2022 comment recommends linking greyscale wireframes into clickable prototypes and testing before coding (https://news.ycombinator.com/item?id=31381840). Sceptical comments say interactivity can make a prototype "*look* like it's demonstrating a whole lot" while missing the details developers need (from the same thread cluster; read via search summary).
- Figma community thread "Interactive text inputs in prototype mode" (https://forum.figma.com/t/interactive-text-inputs-in-prototype-mode/366) runs from 2021 with replies into 2025, including a user who had to rewrite a usability test because a free-text field couldn't be prototyped. This is real practitioner pain about the limits of prototype tests.
- Vendors invest heavily in the topic (Lyssna, Maze, Great Question, Contentsquare), so there is commercial SERP interest.
- **New in 2025–26:** NN/g published on AI prototyping (Oct 2025, Sept 2026). Lyssna has a "How to test your Lovable prototypes" template. This is a fresh angle few service sites cover.

**5. Existing ZSpace pages: overlap check.**
- **/blogs/usability-testing** (about 2,650 words by posts.json; the brief said about 3,500). The general method page: plan, moderated vs unmoderated, recruiting, tasks and script, pilot (mentions "broken prototype links"), metrics, sample size, analysis, a large pre-redesign section, mobile. On prototypes it has only one FAQ: "Can you test a prototype? Yes… one of the most valuable uses". **Nothing on** what each fidelity can and cannot test, prototype-specific task writing (scoping tasks to built paths, seeded data), dead ends, fake data, text-input limits, moderator recovery, or AI-built prototypes.
- **/blogs/wireframing-vs-prototyping** (398 words): definitions, "Choosing Fidelity" in one paragraph, and a CTA "Want to test a flow before you build it?". It is a definitional page, not a test plan.
- **/blogs/how-much-ux-design-before-development** (Batch 1): decision matrix by riskiest unknown, the fidelity dimensions (Pernice), how many users, ready-to-build checklist. It answers *how much* design and *whether* to test. It doesn't say *how* to run a prototype test.
- Roadmap UX-20 proposed /blogs/clickable-prototype-before-building (CREATE, P2), noting "no general prototype-validation page". My check confirms that.

**Verdict on overlap:** the gap is distinct. It is the *execution* of a prototype test, which sits between "how much design" (decision) and "usability testing" (generic method). One new page fits, provided it (a) links to usability-testing for recruiting, metrics and analysis rather than repeating them, and (b) links to how-much-ux-design for the "should we" decision and keeps its own "should we" section to a short decision box (this is where UX-20 is absorbed).

**6. SERP weaknesses.**
- https://www.lyssna.com/guides/prototype-testing-guide/: vendor; pushes unmoderated in its own tool.
- https://maze.co/blog/test-figma-prototypes/: vendor; unmoderated metrics (misclicks, heatmaps); doesn't discuss what an unmoderated prototype test *can't* tell you.
- https://contentsquare.com/blog/test-website-prototype/: vendor; good "one question per test" advice; generic.
- https://www.parallelhq.com/blog/how-to-test-prototype: agency piece, Oct 2025.
- https://www2.gov.bc.ca/gov/content/governments/services-for-government/service-experience-digital-delivery/service-content-design/methods-and-tools/prototype-and-test: government method; solid but not founder-oriented.

Gaps: vendors favour unmoderated, while NN/g says early prototypes are hard to test unmoderated. Nobody gives a "fidelity × what it can and cannot validate" table. Few address the text-input and fake-data problem or Wizard-of-Oz. Almost none covers testing **AI-generated prototypes** and the "polish trap" NN/g warns about. None ties the result to a build go/no-go.

**7. Qualified-buyer potential.** High. Readers are pre-build with a budget decision pending. The natural sale is a "prototype + 5-user test sprint" before a website or app build, which ZSpace can do under ui-ux-design and feed into a build quote.

**8. Format and original asset: a Prototype Test Plan (downloadable or copyable).**
1. **Fidelity capability table.** Rows: paper/sketch; greyscale clickable wireframe; high-fi clickable (Figma); high-fi with variables/conditionals; coded or AI-built prototype (Lovable / Figma Make / v0-style); Wizard-of-Oz. Columns: "Can validate" (findability, IA, flow order, comprehension of the offer, visual hierarchy, form friction, real-data edge cases, performance) / "Cannot validate" / "Best moderation mode".
2. **Writing tasks for prototypes.** McCloskey's three rules, plus prototype-specific rules:
   - write tasks only along paths that are built;
   - seed realistic data, never lorem ipsum or "John Doe" everywhere;
   - give typed values in the task card when text input is faked;
   - define the "success frame" for each task;
   - add a first-click question for nav tasks.
3. **Moderated vs unmoderated for prototypes.** A decision rule: early or partial prototype → moderated (NN/g). Highly functional prototype with narrow tasks → unmoderated is OK, with a pilot. Note on over-recruiting for unmoderated (industry practice, not sourced).
4. **Pitfall checklist:**
   - dead ends and unlinked hotspots;
   - Figma "hotspot hinting" teaching the answer (verify the Figma setting name before mentioning it);
   - fake or perfect data hiding edge cases;
   - the text-input gap;
   - prototype loading on mobile;
   - testing the prototype tool rather than the product (UX Mastery anecdote);
   - polish making stakeholders stop iterating (Pernice; NN/g 2026);
   - PII in AI prototypes.
5. **Go / no-go sheet.** For each task: pass/fail and severity. Rule: "fix and retest" vs "build". Link to how-much-ux-design for depth.

Short "Should you build a clickable prototype at all?" box (UX-20): yes when the main risk is usability or comprehension; skip to a coded MVP or landing-page test when the risk is demand or feasibility (link to the Batch 1 matrix).

**9. Service page and CTA.** /services/ui-ux-design (primary); secondary /services/website-development or mobile-app-development. CTA: "Test before you build: a clickable prototype of your key flows, tested with 5 target users, with a go/no-go report you can hand to any developer."

**10. Recommendation: CREATE /blogs/test-website-prototype-before-development. I agree with your call.** It absorbs UX-20 (drop /blogs/clickable-prototype-before-building from the roadmap and redirect any planned links). Conditions:
- **(a)** add reciprocal links: from usability-testing's "Can you test a prototype?" FAQ (expand to 2 sentences + link), from wireframing-vs-prototyping's CTA paragraph, and from how-much-ux-design's "How many users" section;
- **(b)** don't repeat sample-size or metrics content; link out;
- **(c)** consider the slug /blogs/how-to-test-a-prototype-before-development if keyword parity matters. "website" in the slug narrows it, but the brief title says website, so either is fine. Keep the scope "website and web app" and mention mobile only in passing.

**11. Facts an article would need.**

| Claim | Source | Checked | Label |
|---|---|---|---|
| Fidelity "refers to how closely it matches the look-and-feel of the final system", and varies on interactivity, visuals, and content and commands. (Batch 1) | https://www.nngroup.com/articles/ux-prototype-hi-lo-fidelity/ (Kara Pernice, 18 Dec 2016) | 14–15 Oct 2026 | [Industry] |
| Same article: "building an interactive prototype can be time consuming"; "it's easy for an executive to fall into the trap of saying, 'this looks good'"; "Once we invest more time and sweat in a design, it's harder to give it up if it does not work well." With static prototypes, "there is a lot of pressure on the 'computer'". "Too long of a lag… can break the users' flow." "Wizard of Oz testing is particularly useful for testing AI-based systems before you have implemented the artificial intelligence." | same | 15 Oct 2026 | [Industry] |
| "Early-prototype testing is difficult without a moderator." "Unmoderated studies work best for evaluating live websites and apps or highly functional prototypes." Unmoderated suits activities that "don't require a lot of imagination or emotion from participants." Kathryn Whitenton, 27 Oct 2019. | https://www.nngroup.com/articles/unmoderated-usability-testing/ | 15 Oct 2026 | [Industry] |
| Task-writing tips: "Make the Task Realistic", "Make the Task Actionable", "Avoid Giving Clues and Describing the Steps". Marieke McCloskey, 12 Jan 2014. | https://www.nngroup.com/articles/task-scenarios-usability-testing/ | 15 Oct 2026 | [Industry] |
| NN/g, "Test Complex Interactions Earlier with AI Prototyping", Megan Chan, 11 Sep 2026: "AI tools make it feasible to build fully interactive prototypes of complex interfaces". Allows realistic participant data, many states and free input. Cautions: "AI-generated prototypes may look complete while introducing all sorts of assumptions and inaccuracies"; "its polish might cause people to stop working to improve it". No PII should be uploaded. Its cases (Ramp, Purdue) are illustrations, not controlled studies. | https://www.nngroup.com/articles/test-earlier-with-ai/ | 15 Oct 2026 | [Industry] |
| NN/g, "Good from Afar, But Far from Good: AI Prototyping in Real Design Contexts", Huei-Hsin Wang and Megan Brown, 24 Oct 2025 (reviewed 19 Aug 2026). Tools "lack the sophistication to weigh design tradeoffs"; outputs "are biased toward mainstream design conventions". | https://www.nngroup.com/articles/ai-prototyping/ | 15 Oct 2026 | [Industry] |
| 5 users per round for qualitative testing, with caveats (comparable users; 3–4 per distinct group; iterate). (Batch 1) | https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/ | 14 Oct 2026 | [Industry] |
| Figma: prototypes must be in a frame to Preview or Present. When connections exist, only connected frames display during playback. "Responsive" preview needs constraints and auto layout. Anyone with view access on any plan can play prototypes. | https://help.figma.com/hc/en-us/articles/360040318013-Guide-to-prototyping-in-Figma | 15 Oct 2026 | [Vendor] |
| Figma: variables in prototypes, including Set variable and Conditional actions with expressions, are "Available on any paid plan". Expressions are limited to Set variable and Conditional actions; string expressions support only "+". | https://help.figma.com/hc/en-us/articles/15253194385943-Use-variables-in-prototypes | 15 Oct 2026 | [Vendor] |
| Figma standard prototypes don't offer real typed text input. This comes from a long-running feature-request thread (2021 → 2025 replies), **not an official statement**; I found no Figma doc confirming or denying it. Say "standard Figma prototypes don't natively accept typed input (as of our check)" and re-verify. Figma Make generates code-based functional prototypes, which is the official route to working inputs (per a Figma blog and help search summary; not fetched). | https://forum.figma.com/t/interactive-text-inputs-in-prototype-mode/366 ; https://www.figma.com/blog/introducing-figma-make-embeds/ | 15 Oct 2026 (snippets) | [Vendor/community], partly unverified |
| Schirra, Volkov, Narasimha and Bentley (Google), CHI 2023 Extended Abstracts: interviewed 22 experienced research participants. "a majority of the issues are distributed across research platforms, requestor protocols and prototypes"; responses range "from filing support tickets to simply quitting studies". | https://research.google/pubs/prototypes-platforms-and-protocols-identifying-common-issues-with-remote-unmoderated-studies-and-their-impact-on-research-participants/ | 15 Oct 2026 | [Industry] (peer-reviewed EA) |
| GitLab handbook: in unmoderated tests you can't get participants back on track; suggests about 15–20 minute tests. | https://handbook.gitlab.com/handbook/upstream-studios/experience-research/unmoderated-testing/ | 15 Oct 2026 (snippet) | [Industry] |
| Over-recruit for unmoderated tests because some sessions are low quality. A common practitioner claim; no primary figure. | n/a | n/a | [Inference] |

---

## Topic 56: Why your website looks inconsistent as it grows, and how to fix the UI system

**1. Founder question and pain.** "Our site started clean. Two years, three freelancers and 60 landing pages later, every page looks slightly different: four button styles, random greys, hero sections that don't match, forms that behave differently. Do we need a redesign?" The symptom is brand erosion and slower page production. Marketing builds one-offs in the CMS or page builder because no reusable block fits. The founder fears a costly redesign that will drift again.

**2. Intent and stage.** Problem-aware, mid-funnel. The reader owns a live marketing site or store (WordPress, Webflow, Shopify, headless) and is choosing between a redesign, a "design system" and a clean-up. Marketing leads and founders, not product designers.

**3. Queries (qualitative).** Primary: "website looks inconsistent", "how to keep website design consistent", "website UI consistency". Supporting:
- "marketing design system", "interface inventory / UI audit"
- "too many button styles", "website style guide vs design system"
- "CMS component library", "lock down page builder styles"
- "redesign or fix inconsistent website", "design debt"

**4. Evidence of demand.** Weak to moderate, and mostly practitioner and agency content: Prose Media's "marketing design system" playbook, Flatline on marketing autonomy, Axelerant on HubSpot governance, EvolvingWeb on governance, and Adobe's marketing design system story. The consistent theme is editor freedom versus component governance. No forum threads were found (Reddit unreachable). This is symptom-led demand that probably shows up as "redesign" leads rather than explicit searches. Treat search volume as low and judge it on buyer value.

**5. Existing ZSpace pages.**
- **/blogs/design-systems-for-teams-that-move-fast** (888 words, `blog-data.ts`, updated 2026-10-09, 0 external links):
  - It is titled "Design Systems: What They Are and Why Products Need Them", tagged saas-technology/fintech, and framed around *products* (layers, tokens, components and states, accessibility, starting small, keeping it alive, design system vs component library).
  - It has a one-line checklist item "Audit existing screens for repeated elements and inconsistencies" and a governance bullet.
  - **Nothing on:** marketing websites, CMS or page-builder editors, landing-page sprawl, multiple agencies, interface inventory method, consolidation decisions, or locking CMS controls.
  - It still has no DTCG mention or NN/g sources (the Batch 1 recommendations look unapplied; my grep found no "dtcg/designtokens/nngroup" in that entry).
- /blogs/ui-design-principles has a "Consistency" H2 (generic).
- /blogs/when-does-your-website-need-a-redesign and /blogs/website-redesign-vs-rebuild are the "redesign" decision pages. The new piece should be the "you may not need a redesign; consolidate first" alternative, linked from both.
- /blogs/multi-brand-website-architecture covers multi-brand sharing, a different problem. Link it.
- /blogs/how-to-choose-a-cms, /blogs/headless-cms-vs-traditional-cms: platform choice, not editor governance.

**6. SERP weaknesses.**
- https://www.prosemedia.com/blog/marketing-design-system-lean-playbook: good lean framing, no inventory method.
- https://www.flatlineagency.com/blog/website-operating-marketing-autonomy/: a strong governance rule ("new needs become new components"), but it's an agency pitch.
- https://evolvingweb.com/blog/why-design-system-without-governance-wont-work: governance only.
- https://adobe.design/stories/design-for-scale/designing-design-systems-adapting-product-design-systems-for-marketing-interfaces: enterprise scale, not SMB.
- https://www.webstacks.com/client-stories/workgrid: case study; vendor-reported outcomes.

Gaps: no one gives an SMB-sized, step-by-step **inventory → consolidate → rebuild as CMS blocks → govern** path. No one names the CMS-native controls (WordPress theme.json presets / block locking / patterns; Shopify section and block schema presets; Webflow or headless component allow-lists). No one frames it as "fix vs redesign".

**7. Qualified-buyer potential.** Medium to high. Readers have a live site with real traffic and an ongoing content team, so they are a natural fit for a "consolidation sprint" (audit + component library + CMS rebuild) or a retainer. It can pre-empt or right-size a redesign sale, and the value is high even though volume is low.

**8. Format and original asset: a "Website Consistency Fix" in four steps, with templates.**
1. **Interface inventory** (Brad Frost method adapted for marketing sites): a category list (buttons, links, headings, colours, heroes, cards, forms, CTAs, testimonials/proof, pricing tables, FAQs, footers, icons, imagery styles). Screenshot unique variants, 30–90 min time box. Output: the count of variants per category.
2. **Consolidation sheet:** for each variant, keep / merge into X / retire. Rule of thumb: one primary and one secondary button, one type scale, tokenised colour palette. Map to tokens (DTCG mention).
3. **CMS component library:** rebuild the 12–20 most-used sections as CMS blocks with *limited* options (preset colours, preset spacing, fixed heading levels). Platform notes: WordPress (theme.json presets, block locking, patterns); Shopify (section/block schema, presets); Webflow / headless (component props and allowed blocks). Rule: "editors compose; owners change components".
4. **Governance-lite:**
   - a named owner (NN/g "enforcer");
   - a request path ("new need → new block, never a one-off");
   - a quarterly 1-hour re-inventory;
   - UX-debt scoring (impact × frequency × effort, per NN/g).

A "fix vs redesign" decision box: if the IA, positioning and conversion paths work and the problem is mainly visual drift, consolidate. If not, link to the redesign pages.

**9. Service page and CTA.** /services/website-development (primary, since the CMS rebuild is dev work), /services/ui-ux-design (secondary). CTA: "Book a UI consistency audit: we inventory every component on your site and give you a consolidation plan and a CMS block library spec."

**10. Recommendation: CREATE /blogs/maintain-website-ui-consistency, plus a small UPDATE to design-systems-for-teams-that-move-fast.** This is a choice between your two options. Reasons:
- **Different reader:** the existing page targets product teams ("Why Products Need Them", SaaS/fintech). This reader is a marketing site or store owner with CMS editors, a different reader with a different CTA (website-development).
- **Different query family:** the queries are symptom-led ("looks inconsistent", "fix") rather than definitional ("what is a design system").
- **A new asset:** the inventory → consolidation → CMS block → governance path is substantial (about 1,800–2,200 words). Bolting it onto an 888-word definitional page would turn that page into two articles.
- **Cannibalisation guard:** keep "design system" out of the new page's H1 and title (e.g. "Why Your Website Looks Inconsistent as It Grows, and How to Fix It"). Add a short H2 on the design-systems page, "Marketing websites: consistency without a full design system", that links across. Apply the pending Batch 1 refresh (DTCG, NN/g Design Systems 101 caveat) at the same time.
- **Fallback:** if the editor wants fewer URLs, UPDATE the design-systems page instead. But then retitle it to cover "products and websites" and accept a weaker match for symptom queries.
- **Priority:** P3 (lower volume, high value).

**11. Facts an article would need.**

| Claim | Source | Checked | Label |
|---|---|---|---|
| "An interface inventory is a comprehensive collection of the bits and pieces that make up your interface." It "helps expose unintentional inconsistencies and encourages consistent, deliberate design decisions" and is "the first step toward establishing a common interface language." Method: screenshot unique variants (not every instance), group by category, present to stakeholders. Brad Frost, 10 Jul 2013. | https://bradfrost.com/blog/post/interface-inventory/ | 15 Oct 2026 | [Industry] |
| Atomic Design ch. 4 ("The Atomic Workflow"): 5 steps (round up the troops; prepare for screenshotting; screenshot exercise of about 30–90 min; present findings; regroup and establish next steps). "You don't need to be a designer to recognize that having 37 unique button styles probably isn't a good idea." The inventory "can be a tremendously powerful tool for convincing stakeholders, bosses, and clients to invest in an interface design system." | https://atomicdesign.bradfrost.com/chapter-4/ | 15 Oct 2026 | [Industry] |
| NN/g heuristic 4: "Users should not have to wonder whether different words, situations, or actions mean the same thing." Internal consistency is "consistency within a product or a family of products"; external consistency is "established conventions in an industry or on the web at large". Tips include periodic consistency audits and design reviews. Rachel Krause, 10 Jan 2021. | https://www.nngroup.com/articles/consistency-and-standards/ | 15 Oct 2026 | [Industry] |
| Design system definition and ROI caveat ("best when the company foresees years of future, replicable design work"; needs maintenance). Therese Fessenden, NN/g, 11 Apr 2021, reviewed 27 Aug 2026. (Batch 1) | https://www.nngroup.com/articles/design-systems-101/ | 14 Oct 2026 | [Industry] |
| "Small deviations compound quickly." "Teams optimize locally, not globally." Design systems erode without an active steward or enforcer. Laura Klein, NN/g, 6 Feb 2026. | https://www.nngroup.com/articles/design-system-enforcer/ | 15 Oct 2026 | [Industry] |
| NN/g Design-System Maturity framework: 6 dimensions (organizational alignment, team effectiveness, infrastructure robustness, governance, support, adoption). Governance is "the operating model for making decisions, managing contributions, and maintaining coherence…". Huei-Hsin Wang, 10 Jul 2026. | https://www.nngroup.com/articles/design-system-maturity/ | 15 Oct 2026 | [Industry] |
| UX debt is "any ongoing problems in the experience due to launching a fast, easy, or careless solution". Causes include disregarding brand standards and style guides. Prioritise by user impact, frequency and effort. Anna Kaley, NN/g, 11 Nov 2018. | https://www.nngroup.com/articles/ux-debt/ | 15 Oct 2026 | [Industry] |
| Nathan Curtis's team models (solitary / centralized / federated), 2015. Read via secondary republication summaries only; **fetch the original before quoting**. | https://articles.centercentre.com/?p=860 (republication) | 15 Oct 2026 (snippet) | [Industry], unverified wording |
| WordPress editor curation mechanisms: block locking, patterns, theme.json global settings, filters and hooks, disabling editor features. E.g. "only allowing specific preset colors to be used for the background of a Cover block" or "locking down what blocks can be deleted". Specific setting keys (e.g. `color.custom: false`, `templateLock`) were **not verified** on this page; check the theme.json reference. | https://developer.wordpress.org/block-editor/how-to-guides/curating-the-editor-experience/ | 15 Oct 2026 | [Official] (WordPress) |
| Shopify theme blocks use `{% schema %}` with `name`, `settings`, `blocks` and `presets`, which control merchant options in the theme editor. Section `limit`/`max_blocks` keys were **not verified** on shopify.dev. | https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/schema ; https://shopify.dev/docs/themes/architecture/sections/section-schema | 15 Oct 2026 (snippet) | [Official] (Shopify) |
| DTCG 2025.10 stable (Community Group spec, not a W3C Recommendation). (Batch 1) | https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/ | 14 Oct 2026 | [Official] (CG) |
| "Editors compose with blocks; owners change blocks; new needs become new blocks." | Flatline agency blog (above) + ZSpace framing | 15 Oct 2026 (snippet) | [Industry]/[Inference] |
| Typical consolidation targets (e.g. 1 primary + 1 secondary button, 12–20 blocks). | ZSpace framework | n/a | [Inference]; present as a heuristic, not a standard |

---

## Summary

1. **53 Handoff:** UPDATE /blogs/design-handoff (agree). Add deliverables by project type (marketing site / Shopify / SaaS / mobile) and a handoff sign-off gate. Do NOT duplicate the existing "ready-to-build checklist" in how-much-ux-design-before-development; link to it. Resolve the roadmap conflict: UX-16 names /blogs/ux-design-process as its target.
2. **53 facts:** Figma Dev Mode is on Professional/Education/Org/Gov/Enterprise with a Full or Dev seat; Code Connect on Pro/Org/Ent; "Completed" status Org/Ent only. The Scrum Guide has no "Definition of Ready". There is no official W3C handoff-annotation guidance (only WAI design tips). GitHub's Annotation Toolkit "48%" figure is internal vendor data.
3. **54 Responsive:** UPDATE /blogs/responsive-ui-design (agree). Build a 4-part planning kit (content priority, breakpoints from content + GA4, component spec, device matrix). Add Reflow at 320 CSS px, 2.5.8 at 24×24, container queries (Baseline widely available; cross-browser since Feb 2023) and Google mobile-first indexing (page updated 10 Dec 2025).
4. **54 data:** StatCounter Sept 2026 mobile shares: India 77.3%, UAE 60.0%, UK 53.6%, AU 48.6%. Use only with date and caveat. The Apple 44pt / Material 48dp figures in the current FAQ remain UNVERIFIED (official pages didn't render).
5. **55 Prototype testing:** CREATE /blogs/test-website-prototype-before-development (agree). It absorbs UX-20; drop /blogs/clickable-prototype-before-building. The existing pages cover the decision (how-much-ux) and the generic method (usability-testing), not prototype-specific execution.
6. **55 asset:** fidelity capability table, prototype task rules, moderated-vs-unmoderated rule (NN/g: early prototypes need a moderator), pitfalls (dead ends, fake data, Figma's lack of typed input, AI-prototype polish trap; NN/g Sept 2026 and Oct 2025), go/no-go sheet.
7. **56 Consistency:** CREATE /blogs/maintain-website-ui-consistency (P3), plus a small UPDATE linking from design-systems-for-teams-that-move-fast. The existing page is product/SaaS-framed. The marketing-site/CMS reader, symptom queries and website-development CTA are distinct. Fallback: UPDATE if fewer URLs are wanted.
8. **56 sources:** Brad Frost interface inventory (2013) + Atomic Design ch. 4; NN/g heuristic 4 (Krause 2021), Design Systems 101, Enforcer (Feb 2026), Maturity (Jul 2026), UX Debt (2018). CMS controls: WordPress curation docs and Shopify block schema (specific keys unverified).
9. **Unapplied Batch 1 work:** the Batch 1 refresh of the design-systems page (DTCG, NN/g caveat) does not appear to have been applied. Bundle it with Topic 56.
10. **Limits:** Reddit was unreachable and search is US-only. Demand evidence is moderate for 53–55 and weak for 56. No volumes were invented. Flagged items need manual verification before publishing.
