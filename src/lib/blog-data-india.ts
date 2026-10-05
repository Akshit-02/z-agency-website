import type { BlogPost, BlogSection } from "./blog-data";
import type { SceneKind } from "./blog-scenes";

/**
 * India agency comparison articles (publisher-disclosed shortlists).
 *
 * Editorial rules applied to every article here:
 * - ZSpace Labs publishes these and is listed first as the publisher's own
 *   featured entry. This is disclosed in each article and is not presented as
 *   an independent ranking.
 * - Other companies were verified on their official websites on 2026-10-04
 *   (see docs/seo/india-competitor-database.md). Only their stated services,
 *   locations and focus areas are described; no ratings, scores, client
 *   claims or negative statements are included.
 */

const VERIFIED = "4 October 2026";

const DISCLOSURE =
  "Editorial disclosure: This comparison is published by ZSpace Labs, which is included in the list. We have identified the companies using publicly available information and the criteria described below. Readers should independently evaluate providers against their own project requirements.";

export type Profile = {
  name: string;
  /** Official website, for external profiles. ZSpace Labs links to its own service page. */
  url?: string;
  domain?: string;
  base: string;
  specialisation: string;
  services: string;
  bestFit: string;
  focus: string;
  alsoOffers: string;
  paragraphs: string[];
  consider: string;
};

export type ListicleInput = {
  slug: string;
  title: string;
  seoTitle: string;
  excerpt: string;
  category: string;
  banner: BlogPost["banner"];
  sceneKind: SceneKind;
  service: string;
  serviceLabel: string;
  relatedSlugs: string[];
  relatedIndustrySlugs?: string[];
  quickAnswer: string;
  criteria: string[];
  methodNote: string;
  profiles: Profile[];
  lookFor: string[];
  questions: string[];
  considerations: string[];
  conclusion: string[];
  cta: { title: string; description: string };
  faqs: { q: string; a: string }[];
  readingTime: string;
  /** Location the shortlist covers; defaults to India. */
  where?: string;
  /** Location-specific sections, placed after the disclosure. */
  context?: BlogSection[];
  /** Extra sentence for the sources section (e.g. how locations were checked). */
  sourcesNote?: string;
};

export function listicle(o: ListicleInput): BlogPost {
  const profileSections: BlogSection[] = o.profiles.map((p, i) => ({
    heading: `${i + 1}. ${p.name}`,
    body: [
      ...p.paragraphs,
      p.url
        ? `**Official website:** [[${p.url}|${p.domain}]]`
        : `**Learn more:** [[/services/${o.service}|${o.serviceLabel}]] and [[/about|about ZSpace Labs]].`,
      `**Who might consider it:** ${p.consider}`,
    ],
  }));

  return {
    slug: o.slug,
    title: o.title,
    seoTitle: o.seoTitle,
    excerpt: o.excerpt,
    category: o.category,
    banner: o.banner,
    sceneKind: o.sceneKind,
    bannerAlt: `Illustrative interface for ${o.serviceLabel.toLowerCase()}`,
    date: "2026-10-04",
    readingTime: o.readingTime,
    relatedServiceSlugs: [o.service],
    relatedIndustrySlugs: o.relatedIndustrySlugs,
    relatedSlugs: o.relatedSlugs,
    faqs: o.faqs,
    content: [
      {
        heading: "Quick answer",
        body: [o.quickAnswer],
        checklist: o.profiles.map((p) => `**${p.name}** (${p.base}): ${p.bestFit}`),
      },
      {
        heading: "Editorial disclosure",
        body: [
          "ZSpace Labs wrote this article and appears first in it as the publisher's featured entry. That ordering reflects who published the list, not an independent ranking, and we would rather say so plainly than imply otherwise.",
        ],
        callout: { type: "note", text: DISCLOSURE },
      },
      ...(o.context ?? []),
      {
        heading: "How we chose these companies",
        body: [
          `We started from the companies that appear repeatedly in search results, directories and industry lists for this service in ${o.where ?? "India"}, then checked each one's official website to confirm what it actually offers, where it is based and who it works with. We kept companies whose own published services match the brief, and dropped ones whose focus sat elsewhere.`,
          o.methodNote,
          "Every company was described against the same criteria:",
        ],
        checklist: o.criteria,
      },
      {
        heading: "The shortlist at a glance",
        body: [],
        table: {
          headers: ["Agency", "Main specialisation", "Relevant services", "Best fit"],
          rows: o.profiles.map((p) => [p.name, p.specialisation, p.services, p.bestFit]),
        },
      },
      ...profileSections,
      {
        heading: "Services and capabilities compared",
        body: [
          "The table below summarises each company's published focus and the related services it lists. It reflects what each company says about itself, checked on its official website, and is not an assessment of quality.",
        ],
        table: {
          headers: ["Agency", "Based in", "Published focus", "Also offers"],
          rows: o.profiles.map((p) => [p.name, p.base, p.focus, p.alsoOffers]),
        },
      },
      {
        heading: "What to look for when choosing",
        body: ["Whichever company you shortlist, these are the things that separate a good fit from a frustrating project:"],
        checklist: o.lookFor,
      },
      {
        heading: "Questions to ask before you hire",
        body: ["Ask every shortlisted company the same questions, in writing, so the answers are comparable:"],
        checklist: o.questions,
      },
      {
        heading: "Typical project considerations",
        body: o.considerations,
      },
      {
        heading: "Conclusion",
        body: o.conclusion,
        cta: o.cta,
      },
      {
        heading: "Sources and verification",
        body: [
          `Company information in this article was checked on each company's official website on ${VERIFIED}, with office locations confirmed from public company listings where a homepage did not state them. Services and focus areas change, so confirm current details with each company directly. Figures that companies publish about themselves, such as client or project counts, are deliberately left out because we could not verify them independently.${o.sourcesNote ? ` ${o.sourcesNote}` : ""}`,
        ],
        checklist: o.profiles
          .filter((p) => p.url)
          .map((p) => `${p.name}: [[${p.url}|${p.domain}]]`)
          .concat([`ZSpace Labs: [[/services/${o.service}|zspace.in/services/${o.service}]]`]),
      },
    ],
  };
}

/* ------------------------------------------------------------- shared */

export const ZSPACE_BASE = "Remote-first, serving businesses across India";

export const COMMON_CRITERIA = [
  "**Relevance**: the company's published services match this specific service, not just a long list of everything",
  "**Verifiable presence**: an official website and an Indian base we could confirm",
  "**Clarity of offer**: whether its site explains what it builds, how it works and who it works with",
  "**Fit**: the kinds of businesses and projects it appears best suited to, based on its own stated focus",
];

/* ================================================================ web */

const web = listicle({
  slug: "best-web-development-agencies-in-india",
  title: "5 Best Web Development Agencies in India: A Curated Shortlist",
  seoTitle: "5 Best Web Development Agencies in India (Curated Shortlist)",
  excerpt:
    "A disclosed shortlist of five web development companies in India, what each one focuses on, who it suits and how to choose between them for your project.",
  category: "Web Development",
  banner: "compare3",
  sceneKind: "landing",
  service: "website-development",
  serviceLabel: "Website development services",
  readingTime: "13 min read",
  relatedSlugs: ["how-to-choose-website-development-company", "website-development-cost", "website-development-company-vs-freelancer"],
  relatedIndustrySlugs: ["saas-technology", "real-estate", "manufacturing"],
  quickAnswer:
    "There is no single best web development company in India. The right choice depends on whether you need a fast marketing site, a custom web application, an ecommerce build or a large enterprise programme. This shortlist covers five companies with different strengths: ZSpace Labs (the publisher) for design-led Next.js and React builds by one team, SparxIT Solutions and TatvaSoft for broad custom software and enterprise delivery, GeekyAnts for React and Next.js product engineering, and Aalpha for outsourced web and software development with offshore teams.",
  criteria: [
    ...COMMON_CRITERIA,
    "**Technology approach**: modern frameworks, performance and how sites are maintained after launch",
  ],
  methodNote:
    "Webenza was also researched. Its site positions it primarily as a digital marketing agency, with web development as one of several services, so it is a better fit for marketing-led briefs than for an engineering comparison and was not included here.",
  profiles: [
    {
      name: "ZSpace Labs",
      base: ZSPACE_BASE,
      specialisation: "Design-led websites and web apps on Next.js and React",
      services: "Marketing sites, custom web apps, redesigns, CMS, integrations",
      bestFit: "Businesses that want one team for design and engineering on a fast, modern build",
      focus: "Websites and web applications with performance and SEO foundations built in",
      alsoOffers: "Mobile apps, Shopify, UI/UX, AI automation, CRO",
      paragraphs: [
        "ZSpace Labs is an independent technology and digital product studio. One team handles both design and engineering, so a website moves from structure to interface to code without the hand-offs that usually slow projects down. It works with businesses across India remotely.",
        "For web development, ZSpace Labs builds marketing and lead-generation sites, custom web applications such as portals and dashboards, redesigns and replatforming, and headless content sites. It builds on Next.js, React and TypeScript, sets performance budgets during planning rather than after launch, and ships each site with a component system and CMS the client's team can keep using.",
        "**Where it is not the best fit:** ZSpace Labs is a studio, not a large IT services firm. It does not publish client case studies, certifications such as CMMI or ISO, or a long public portfolio, and it isn't set up for large enterprise programmes that need big dedicated teams. Companies that require those should look at the larger firms below.",
      ],
      consider:
        "Startups, SaaS companies and growing businesses replacing a slow site or building a web app, who value design quality and want to work directly with the people building it.",
    },
    {
      name: "SparxIT Solutions",
      url: "https://www.sparxitsolutions.com",
      domain: "sparxitsolutions.com",
      base: "Noida",
      specialisation: "Enterprise digital engineering and custom development",
      services: "Web and mobile development, AI/ML, cloud, DevOps, QA",
      bestFit: "Businesses needing a broad engineering partner or extra developers",
      focus: "Enterprise digital engineering, offshore delivery and talent hiring",
      alsoOffers: "Mobile apps, cloud and DevOps, cybersecurity, staff augmentation",
      paragraphs: [
        "SparxIT Solutions is a Noida-based technology company, established in 2007 according to public company listings. Its website positions it as an enterprise AI and digital engineering firm covering web and mobile development, AI and machine learning, cloud services, DevOps, cybersecurity and quality engineering.",
        "Alongside project-based development, it offers talent hiring and staff augmentation across several technology stacks, and its site lists a wide range of industries including healthcare, insurance, retail, manufacturing, real estate and education. It also highlights compliance experience with frameworks such as HIPAA, GDPR and India's DPDP Act.",
      ],
      consider:
        "Businesses that need a large engineering partner across several technologies, or want to add developers to an existing team rather than outsource a single website.",
    },
    {
      name: "GeekyAnts",
      url: "https://geekyants.com",
      domain: "geekyants.com",
      base: "Bengaluru",
      specialisation: "Product engineering with React, Next.js and React Native",
      services: "Web (React, Next.js), mobile, backend, DevOps, AI consulting",
      bestFit: "Product companies building on the React ecosystem",
      focus: "Product engineering, modernisation and React-ecosystem expertise",
      alsoOffers: "Mobile (React Native, Flutter), QA, AI consulting",
      paragraphs: [
        "GeekyAnts is a Bengaluru-based product engineering company. Its web work centres on React and Next.js, alongside mobile development with React Native and Flutter, backend engineering, DevOps and QA.",
        "A distinctive detail is its open-source work: it maintains projects such as NativeBase and gluestack-ui, which are used by other developers. Its site describes work across fintech, healthcare, manufacturing, media, ecommerce and real estate, and positions it as combining strategy consulting with hands-on engineering for longer-term product relationships.",
      ],
      consider:
        "Funded startups and product companies that are committed to the React ecosystem and want a team with visible open-source involvement in it.",
    },
    {
      name: "TatvaSoft",
      url: "https://www.tatvasoft.com",
      domain: "tatvasoft.com",
      base: "Ahmedabad",
      specialisation: "Custom software and web development for SMEs and enterprises",
      services: "Custom software, web, mobile, ecommerce, QA, UI/UX",
      bestFit: "Organisations that want a long-established firm with formal processes",
      focus: "Custom software engineering with certifications and enterprise processes",
      alsoOffers: "Mobile apps, ecommerce, AI solutions, testing",
      paragraphs: [
        "TatvaSoft is an Ahmedabad-headquartered software company, with additional offices in Rajkot, that states it has been in IT services for more than 25 years. Its services cover custom software, web development, mobile apps, ecommerce, AI solutions, testing and UI/UX design.",
        "Its site lists CMMI Level 3 and a Microsoft Solutions Partner designation, and describes work for clients ranging from startups to large enterprises across finance, insurance, healthcare, retail, logistics, education and the public sector.",
      ],
      consider:
        "Organisations that need documented processes and certifications, for example for procurement, alongside custom web and software development.",
    },
    {
      name: "Aalpha Information Systems",
      url: "https://www.aalpha.net",
      domain: "aalpha.net",
      base: "Hubballi and Bengaluru",
      specialisation: "Outsourced web, mobile and software development",
      services: "Web, mobile and software development, SaaS, ecommerce, AI/ML",
      bestFit: "Companies outsourcing development, including to offshore teams",
      focus: "Outsourced development and offshore development centres",
      alsoOffers: "SaaS platforms, cloud apps, AI/ML, ecommerce",
      paragraphs: [
        "Aalpha Information Systems is based in Hubballi and Bengaluru, Karnataka, and states it has been operating for more than 18 years. It offers web, mobile and software development, SaaS platforms, cloud applications, ecommerce and AI/ML work.",
        "Its site emphasises offshore development centres and dedicated teams, with ISO 27001 certification and experience across healthcare, fintech, manufacturing, education, hospitality and retail. That makes it oriented towards outsourcing arrangements as much as one-off website projects.",
      ],
      consider:
        "Businesses, including overseas companies, that want to outsource ongoing web or software development to a dedicated offshore team in India.",
    },
  ],
  lookFor: [
    "**Work that resembles yours**: a marketing site, a web app and an ecommerce build need different skills. Ask to see comparable projects.",
    "**Performance on mobile**: ask how they set and check Core Web Vitals, and test their own site on a mid-range phone.",
    "**Who does the work**: the people you meet in sales should be close to the people designing and coding your site.",
    "**Content and CMS**: your team should be able to publish without a developer for routine changes.",
    "**SEO foundations**: clean URLs, metadata, structured data and redirects when replacing an existing site.",
    "**Ownership**: you should own the code, domain, hosting accounts and design files.",
  ],
  questions: [
    "Which of your past projects is closest to ours, and what would you do differently now?",
    "Who will design and build our site, and will they stay on the project throughout?",
    "Which framework and CMS do you recommend for us, and why not the alternatives?",
    "How do you protect existing search rankings during a redesign?",
    "What is included in the estimate, and what would count as a change in scope?",
    "What happens after launch: support, updates, security patches and hand-over?",
  ],
  considerations: [
    "**Scope drives cost more than location.** The number of page templates, custom features, integrations, content migration and whether a web application is involved matter far more than the agency's city. Get estimates broken into phases so you can compare like for like. Our [[/blogs/website-development-cost|website development cost guide]] explains the main drivers.",
    "**Timelines follow decisions.** A marketing site often takes a few weeks to a couple of months; web applications take longer. Delays usually come from content and approvals on the client side rather than from development itself, so plan who signs off on what.",
    "**Agency, studio or freelancer.** Larger firms bring capacity and formal processes; studios bring a smaller senior team and closer collaboration; freelancers suit small, well-defined jobs. See [[/blogs/website-development-company-vs-freelancer|website development company vs freelancer]] for the trade-offs, and [[/blogs/how-to-choose-website-development-company|how to choose a website development company]] for a full checklist.",
  ],
  conclusion: [
    "The best web development company in India for you is the one whose strengths match your project. Large, process-heavy programmes point towards firms like TatvaSoft or SparxIT; React-centred product engineering points towards GeekyAnts; outsourced dedicated teams point towards Aalpha.",
    "If you want one team to design and build a fast, maintainable website or web app, and to work directly with the people doing the work, ZSpace Labs is built for that. Either way, compare at least three proposals against the same written brief.",
    "Looking for a partner in a particular city? See our [[/blogs/best-web-development-companies-in-bengaluru|Bengaluru web development shortlist]].",
  ],
  cta: {
    title: "Planning a new website or web app?",
    description: "Tell us what you're building and we'll give you an honest read on scope, approach and whether we're the right fit, through our [[/services/website-development|website development service]].",
  },
  faqs: [
    { q: "Which is the best web development company in India?", a: "It depends on the project. For enterprise programmes and certifications, larger firms such as TatvaSoft or SparxIT Solutions are common choices; for React and Next.js product engineering, GeekyAnts; for design-led websites and web apps from one team, ZSpace Labs. Compare proposals against your own written brief." },
    { q: "Is this list an independent ranking?", a: "No. It is a curated shortlist published by ZSpace Labs, which appears first as the publisher. The other companies were selected using the criteria in the article and their official websites, without scores or paid placement." },
    { q: "Did any company pay to be included?", a: "No. None of the companies listed paid for inclusion, and none were contacted before publication." },
    { q: "How much does website development cost in India?", a: "It varies with scope: templates, custom features, integrations, migration and whether a web app is needed. Ask each shortlisted company for an estimate broken into phases so you can compare them fairly." },
    { q: "Should I choose a large IT company or a smaller studio?", a: "Large firms suit big, process-heavy programmes and procurement requirements. Smaller studios suit projects where you want senior people closely involved and fewer hand-offs. Both can work; the deciding factor is fit with your project." },
    { q: "What technology should a business website use?", a: "Most business sites need fast pages, a usable CMS and solid SEO foundations. Next.js and React suit sites that may grow into applications, while a well-built CMS-led site can be enough for simpler needs. Ask each company to justify its recommendation." },
  ],
});

/* ============================================================= mobile */

const mobile = listicle({
  slug: "best-mobile-app-development-companies-in-india",
  title: "5 Best Mobile App Development Companies in India: A Curated Shortlist",
  seoTitle: "5 Best Mobile App Development Companies in India",
  excerpt:
    "A disclosed shortlist of five mobile app development companies in India, what each specialises in, which projects they suit and what to ask before hiring.",
  category: "Mobile Apps",
  banner: "compare3",
  sceneKind: "mobile",
  service: "mobile-app-development",
  serviceLabel: "Mobile app development services",
  readingTime: "13 min read",
  relatedSlugs: ["how-to-choose-a-mobile-app-development-company", "mobile-app-development-cost", "native-vs-cross-platform-app-development"],
  relatedIndustrySlugs: ["fintech", "healthcare-healthtech", "education-edtech"],
  quickAnswer:
    "The best mobile app development company in India depends on what you're building and how big the programme is. This shortlist covers five companies with different strengths: ZSpace Labs (the publisher) for product-focused React Native apps designed and built by one team, Appinventiv and Simform for large-scale product engineering, OpenXcell for AI-oriented custom apps with fixed-price engagements, and Konstant Infosolutions for a long-established app development company.",
  criteria: [
    ...COMMON_CRITERIA,
    "**Platform approach**: cross-platform, native, or both, and how the company decides between them",
  ],
  methodNote:
    "Mobile app development is crowded in India, with hundreds of firms listed on directories. We favoured companies whose official sites make mobile development a central service rather than one line in a long list, and whose Indian base we could confirm.",
  profiles: [
    {
      name: "ZSpace Labs",
      base: ZSPACE_BASE,
      specialisation: "Product-focused iOS and Android apps",
      services: "Scoping, mobile UX, React Native, native modules, backends, launch",
      bestFit: "Startups and businesses building a focused first version or rebuilding an app",
      focus: "Cross-platform apps with native code where needed, designed and built by one team",
      alsoOffers: "Web apps, UI/UX, AI automation, Shopify, CRO",
      paragraphs: [
        "ZSpace Labs designs and builds mobile apps with one team covering product scoping, mobile UX and engineering. It works with startups and businesses across India remotely, from defining the first version through Play Store and App Store submission and post-launch improvements.",
        "Most apps are built with React Native, which reaches Android and iOS from one codebase, with native Swift or Kotlin modules where a feature needs them. ZSpace Labs also builds the backends and APIs apps depend on, and plans for India-specific realities such as Android-first testing, app size and OTP-based sign-in.",
        "**Where it is not the best fit:** ZSpace Labs does not publish app case studies or download figures, and it is not set up for very large programmes that need many parallel teams or formal certifications. Those projects are better served by the larger firms in this list.",
      ],
      consider:
        "Founders and product teams who want a senior, design-led team to shape and build a focused app, and who value working directly with the people building it.",
    },
    {
      name: "Appinventiv",
      url: "https://appinventiv.com",
      domain: "appinventiv.com",
      base: "Noida",
      specialisation: "Large-scale app and digital product development",
      services: "Mobile, web and cloud apps, AI, IoT, automation",
      bestFit: "Enterprises and well-funded startups with large programmes",
      focus: "End-to-end product development across mobile, AI and cloud",
      alsoOffers: "AI development, IoT, RPA, web and cloud applications",
      paragraphs: [
        "Appinventiv is headquartered in Noida and was founded in 2015, according to public company listings, with offices in the USA, UK, Australia and the UAE. It offers full-cycle mobile, web and cloud application development, alongside AI, IoT and robotic process automation.",
        "It positions itself for both startups and large enterprises, and has grown into one of the more widely known app development companies in India. That scale makes it suited to programmes that need sizeable, multi-disciplinary teams.",
      ],
      consider:
        "Enterprises and funded companies running large app programmes that need breadth across mobile, AI, IoT and cloud from one vendor.",
    },
    {
      name: "Simform",
      url: "https://www.simform.com",
      domain: "simform.com",
      base: "Ahmedabad (primary development centre)",
      specialisation: "Product and platform engineering",
      services: "Product engineering, mobile and web, cloud and DevOps, data, AI/ML",
      bestFit: "Mid-size and enterprise companies modernising or scaling platforms",
      focus: "Co-engineering with product teams on cloud, data and AI-heavy platforms",
      alsoOffers: "Cloud and DevOps, data engineering, AI/ML, managed services",
      paragraphs: [
        "Simform was founded in 2010 and has its primary development operations in Ahmedabad, with a US headquarters in Orlando and other US offices. Its services cover product and platform engineering, cloud and DevOps, data engineering, AI/ML and digital experience.",
        "Its site describes a co-engineering model, working alongside clients' own product teams, and lists technology partnerships with Microsoft, Databricks and Snowflake. Mobile development sits within that broader engineering offer rather than as a standalone specialism.",
      ],
      consider:
        "Companies with an existing product team that need engineering capacity and depth in cloud, data and AI around their apps.",
    },
    {
      name: "OpenXcell",
      url: "https://www.openxcell.com",
      domain: "openxcell.com",
      base: "Ahmedabad",
      specialisation: "Custom software and AI-oriented app development",
      services: "Web and mobile apps, custom software, AI and generative AI, integration",
      bestFit: "Businesses wanting custom apps on top of existing SaaS stacks",
      focus: "AI-native custom app development with fixed-price engagements",
      alsoOffers: "Generative AI, systems integration, data analytics",
      paragraphs: [
        "OpenXcell is based in Ahmedabad, with an office in Las Vegas. Its services span custom software, web and mobile app development, AI and generative AI, systems integration and data analytics.",
        "Its current positioning is AI-native: senior engineers building custom business applications on top of existing SaaS tools, using fixed pricing and early working software. That suits businesses that want a defined scope and price rather than an open-ended engagement.",
      ],
      consider:
        "Businesses that want a custom app connected to the tools they already use, with a fixed price and clearly scoped delivery.",
    },
    {
      name: "Konstant Infosolutions",
      url: "https://www.konstantinfo.com",
      domain: "konstantinfo.com",
      base: "Jaipur",
      specialisation: "Mobile and web app development",
      services: "Mobile apps, web apps, AI development, dedicated developers",
      bestFit: "Businesses wanting an established app developer across many app types",
      focus: "Long-running mobile and web app development, including on-demand apps",
      alsoOffers: "AI agent development, web apps, developer hiring",
      paragraphs: [
        "Konstant Infosolutions is based in Jaipur and has been operating since 2003, according to its site. It builds mobile and web applications, and has added AI development and AI agent work to its services, alongside dedicated developer hiring.",
        "Its site lists app work across healthcare, food and restaurants, travel, entertainment, on-demand services, real estate and education, which reflects a long track record across consumer app categories.",
      ],
      consider:
        "Businesses building consumer or on-demand apps that want an established developer with experience across many app categories.",
    },
  ],
  lookFor: [
    "**Apps in your category**: ask for apps you can download and use, not just screenshots.",
    "**A clear platform recommendation**: React Native, Flutter or native, explained against your features and budget.",
    "**Android depth**: most users in India are on Android; ask how they test across devices and OS versions.",
    "**Backend and APIs**: who builds and hosts the server side, and who owns it afterwards.",
    "**Release and store experience**: Play Store and App Store submission, review issues and release processes.",
    "**Post-launch support**: crash monitoring, OS updates and a plan for the next versions.",
  ],
  questions: [
    "Which apps you've built are closest to ours, and can we try them?",
    "Would you build ours cross-platform or native, and why?",
    "Who designs the app, and how early do we see clickable prototypes?",
    "How do you handle sign-in, payments and notifications for Indian users?",
    "What does the estimate include: backend, admin panel, store submission, testing?",
    "What happens after launch, and how are updates and bugs prioritised and charged?",
  ],
  considerations: [
    "**Cost depends on features and platforms.** Screens, user roles, integrations, backend complexity and whether you need both platforms at launch drive the estimate. See the [[/blogs/mobile-app-development-cost|mobile app development cost guide]] for the main drivers.",
    "**Cross-platform is the default for most business apps.** One React Native or Flutter codebase reaches Android and iOS at lower cost; native development earns its place for hardware-heavy or highly platform-specific apps. Read [[/blogs/native-vs-cross-platform-app-development|native vs cross-platform development]] for the trade-offs.",
    "**Plan a first version, not the whole roadmap.** A focused first release gets real usage data sooner and makes later decisions cheaper. Our [[/blogs/how-to-choose-a-mobile-app-development-company|guide to choosing an app development company]] covers the evaluation in more depth.",
  ],
  conclusion: [
    "For large, multi-disciplinary app programmes, Appinventiv and Simform bring scale; for fixed-price custom apps on existing tools, OpenXcell; for a long-established developer across consumer app categories, Konstant Infosolutions.",
    "If you want a senior team to shape and build a focused app with design and engineering together, that is what ZSpace Labs does. Ask every company the same questions and compare their answers side by side.",
    "Based in the capital region? See our [[/blogs/best-mobile-app-development-companies-in-delhi-ncr|Delhi NCR app development shortlist]].",
  ],
  cta: {
    title: "Planning an app?",
    description: "Share the idea and we'll help you scope a sensible first version. See our [[/services/mobile-app-development|mobile app development service]].",
  },
  faqs: [
    { q: "Which is the best mobile app development company in India?", a: "It depends on project size and type. Large programmes often go to firms such as Appinventiv or Simform; fixed-price custom apps to firms such as OpenXcell; design-led focused apps from one team to studios such as ZSpace Labs. Compare against your own brief." },
    { q: "Is this an independent ranking?", a: "No. ZSpace Labs published this shortlist and lists itself first as the publisher. The other companies were chosen using the stated criteria and their official websites, with no paid placement." },
    { q: "Should I build for Android or iOS first in India?", a: "Android usually has most users in India, so many teams start there. With React Native you can often launch on both at little extra cost." },
    { q: "React Native or Flutter?", a: "Both are mature cross-platform options. The choice usually comes down to your team's skills and the company's experience. Ask each shortlisted company which it recommends and why." },
    { q: "How long does it take to build an app?", a: "A focused first version commonly takes a few months from scoping to launch, longer for complex backends or regulated features. Ask for a timeline broken into phases." },
    { q: "Do these companies build the backend too?", a: "All five list backend or full-cycle development among their services. Confirm who builds, hosts and owns the backend before signing." },
  ],
});

/* ============================================================ shopify */

const shopify = listicle({
  slug: "best-shopify-development-agencies-in-india",
  title: "5 Best Shopify Development Agencies in India: A Curated Shortlist",
  seoTitle: "5 Best Shopify Development Agencies in India (Shortlist)",
  excerpt:
    "A disclosed shortlist of five Shopify development agencies in India, what each focuses on, which brands they suit and how to compare them before you hire.",
  category: "Shopify & Ecommerce",
  banner: "compare3",
  sceneKind: "shopify",
  service: "shopify-development",
  serviceLabel: "Shopify development services",
  readingTime: "12 min read",
  relatedSlugs: ["how-to-choose-a-shopify-development-agency", "shopify-development-cost", "shopify-theme-vs-custom-development"],
  relatedIndustrySlugs: ["d2c-consumer", "fashion-apparel", "beauty-personal-care"],
  quickAnswer:
    "The best Shopify development agency in India depends on your brand's size and what you need: a new store, a redesign, Shopify Plus, headless or ongoing optimisation. This shortlist covers five agencies with different strengths: ZSpace Labs (the publisher) for design-led Shopify builds with performance and conversion in the same team, Aureate Labs for Shopify development with in-house growth marketing, Magneto IT Solutions and Codilar for multi-platform and enterprise commerce, and CartCoders for a Shopify-focused development team.",
  criteria: [
    ...COMMON_CRITERIA,
    "**Shopify depth**: theme development, custom sections, apps and integrations, not only store setup",
  ],
  methodNote:
    "Many Indian Shopify agencies appear on DesignRush and Clutch. We favoured agencies whose official websites make Shopify a central, clearly described service and whose Indian base we could confirm.",
  profiles: [
    {
      name: "ZSpace Labs",
      base: ZSPACE_BASE,
      specialisation: "Design-led Shopify builds with performance and CRO",
      services: "Store builds, custom themes and sections, redesigns, integrations, speed, CRO",
      bestFit: "D2C brands that want design, development and conversion in one team",
      focus: "Shopify stores built around how customers actually buy",
      alsoOffers: "CRO audits, UI/UX, web apps, AI automation",
      paragraphs: [
        "ZSpace Labs builds and improves Shopify stores with one team covering UX, design, theme development and conversion work. It works with D2C and retail brands across India remotely, on new stores, redesigns, custom sections, app and system integrations, and speed and conversion improvements.",
        "Its Shopify approach starts from how customers buy rather than from a theme: product discovery, delivery and returns clarity, mobile performance and a checkout that doesn't get in the way. For Indian brands that includes UPI and cash-on-delivery configuration, pin-code delivery promises and keeping app bloat down.",
        "**Where it is not the best fit:** ZSpace Labs does not publish Shopify case studies or store-count figures, and it doesn't offer ongoing paid advertising management. Brands that want an agency running their ads alongside the store should look at agencies with in-house marketing.",
      ],
      consider:
        "D2C brands launching or rebuilding a store who want strong design, a fast theme and conversion thinking from the same team.",
    },
    {
      name: "Aureate Labs",
      url: "https://aureatelabs.com",
      domain: "aureatelabs.com",
      base: "Surat",
      specialisation: "Shopify development with ecommerce growth services",
      services: "Shopify builds, performance, migration, maintenance, marketing",
      bestFit: "Brands wanting Shopify development and growth marketing from one agency",
      focus: "Shopify development alongside paid ads, SEO, CRO and retention marketing",
      alsoOffers: "Adobe Commerce, Hyvä, paid ads, SEO, email and SMS, Amazon",
      paragraphs: [
        "Aureate Labs is based in Surat, with a presence in the USA. It offers Shopify store development, performance optimisation, migrations and maintenance, and is also an Adobe Commerce and Hyvä partner.",
        "What sets its offer apart is the marketing side: its site lists paid advertising, SEO, conversion optimisation, email and SMS marketing and Amazon marketplace management alongside development. It works mainly with B2C and D2C brands.",
      ],
      consider:
        "D2C brands that want one agency for both building the store and running growth marketing around it.",
    },
    {
      name: "Magneto IT Solutions",
      url: "https://magnetoitsolutions.com",
      domain: "magnetoitsolutions.com",
      base: "Ahmedabad",
      specialisation: "Multi-platform ecommerce development",
      services: "Shopify Plus, Adobe Commerce/Magento, BigCommerce, headless",
      bestFit: "Larger retailers, B2B and marketplace projects",
      focus: "B2C, B2B, D2C and marketplace commerce across several platforms",
      alsoOffers: "Adobe Commerce, BigCommerce, headless commerce, marketplaces",
      paragraphs: [
        "Magneto IT Solutions is an Ahmedabad-based ecommerce agency, founded in 2009 according to public company listings, with a presence in several other countries. It builds on Shopify Plus as well as Adobe Commerce (Magento), BigCommerce and headless stacks.",
        "Its site covers B2C, B2B, D2C and marketplace builds, and lists sectors including jewellery, grocery, automotive, fashion, furniture and electronics. That platform breadth helps when the right platform isn't settled yet.",
      ],
      consider:
        "Larger retailers and B2B sellers comparing Shopify Plus against other platforms, or building marketplaces.",
    },
    {
      name: "Codilar",
      url: "https://www.codilar.com",
      domain: "codilar.com",
      base: "Bengaluru",
      specialisation: "Enterprise and luxury ecommerce",
      services: "Shopify and Shopify Plus, Adobe Commerce, AEM, custom storefronts",
      bestFit: "Enterprise and premium retail brands",
      focus: "High-performance enterprise commerce across Shopify and Adobe",
      alsoOffers: "Adobe Commerce, AEM, Pimcore, CRO, hosting",
      paragraphs: [
        "Codilar is headquartered in Bengaluru, with offices in several other countries. It builds on Shopify and Shopify Plus, Adobe Commerce and Adobe Experience Manager, and is a partner of Adobe, Shopify and Pimcore.",
        "Its site highlights work for international fashion, luxury and retail brands and custom storefronts that go beyond standard themes. Its enterprise orientation suits complex catalogues and multi-region commerce.",
      ],
      consider:
        "Enterprise and premium brands with complex catalogues, multiple regions or a mix of Shopify and Adobe platforms.",
    },
    {
      name: "CartCoders",
      url: "https://www.cartcoders.com",
      domain: "cartcoders.com",
      base: "Ahmedabad",
      specialisation: "Shopify-focused development",
      services: "Store builds, custom apps, themes, Shopify Plus, migrations, CRO audits",
      bestFit: "Brands and agencies wanting a Shopify-only development team",
      focus: "Shopify development, including white-label work for other agencies",
      alsoOffers: "Headless Shopify, integrations, white-label development",
      paragraphs: [
        "CartCoders is an Ahmedabad-based development company focused on Shopify. Its services include store development, custom Shopify apps, theme customisation, Shopify Plus, headless builds, migrations, integrations and CRO audits.",
        "It also offers white-label Shopify development for other agencies, and lists work for D2C, B2B and enterprise brands in categories such as jewellery, fashion, beauty, electronics and furniture.",
      ],
      consider:
        "Brands that want a Shopify-specialist development team, and agencies looking for white-label Shopify capacity.",
    },
  ],
  lookFor: [
    "**Live stores you can test**: browse them on your phone, add to cart and check speed.",
    "**Theme and custom-section skills**: not only installing apps, which slows stores down.",
    "**Indian commerce setup**: UPI, cash on delivery, pin-code delivery checks and GST invoicing.",
    "**Performance discipline**: how they keep the theme fast as apps and sections are added.",
    "**Conversion thinking**: product pages, collections and checkout designed around buyer questions.",
    "**Ownership and access**: your Shopify account, theme code and apps should stay yours.",
  ],
  questions: [
    "Which Shopify stores have you built that are similar to ours, and can we see them live?",
    "Would you use an existing theme, customise one, or build custom sections, and why?",
    "Which apps would you add, and what would you build instead of using an app?",
    "How do you set up COD, UPI, delivery estimates and invoicing for Indian customers?",
    "What does the estimate include: design, migration, integrations, testing, training?",
    "What support do you offer after launch, and how are changes charged?",
  ],
  considerations: [
    "**Theme versus custom work drives cost.** A customised premium theme is quicker and cheaper; custom sections and a bespoke design take longer but fit the brand and stay faster. See [[/blogs/shopify-theme-vs-custom-development|Shopify theme vs custom development]] and the [[/blogs/shopify-development-cost|Shopify development cost guide]].",
    "**Shopify or Shopify Plus.** Most growing Indian D2C brands start on standard Shopify plans; Plus becomes relevant with higher volumes, B2B, or advanced checkout and automation needs. Read [[/blogs/shopify-plus-vs-shopify|Shopify Plus vs Shopify]].",
    "**Agency versus freelancer.** A freelancer can suit small changes; a store build or redesign usually needs design, development and QA together. Our [[/blogs/how-to-choose-a-shopify-development-agency|guide to choosing a Shopify agency]] goes deeper.",
  ],
  conclusion: [
    "If you want development and growth marketing together, Aureate Labs offers both. For multi-platform or enterprise commerce, Magneto IT Solutions and Codilar bring platform breadth. For a Shopify-only development team, including white-label work, CartCoders fits.",
    "If you want a store designed, built and tuned for conversion by one team, ZSpace Labs is set up for that. Test each agency's live stores on your phone before deciding.",
    "Selling from Gujarat? See our [[/blogs/best-shopify-development-agencies-in-gujarat|Gujarat Shopify agency shortlist]].",
  ],
  cta: {
    title: "Building or rebuilding a Shopify store?",
    description: "Tell us about the brand and we'll recommend a sensible scope. See our [[/services/shopify-development|Shopify development service]].",
  },
  faqs: [
    { q: "Which is the best Shopify development agency in India?", a: "It depends on your brand and needs. For development plus growth marketing, agencies like Aureate Labs; for enterprise or multi-platform commerce, Codilar or Magneto IT Solutions; for a Shopify-only team, CartCoders; for design, development and CRO from one team, ZSpace Labs." },
    { q: "Is this list a ranking?", a: "No. It is a curated shortlist published by ZSpace Labs, which appears first as the publisher. The others were chosen using the article's criteria and their official websites, without payment." },
    { q: "Do I need Shopify Plus?", a: "Most growing brands don't need it at the start. Plus becomes worthwhile at higher order volumes, for B2B, or for advanced checkout customisation and automation." },
    { q: "Can Shopify handle COD and UPI in India?", a: "Yes. Cash on delivery and UPI are configured through Shopify's payment settings and your payment provider. Ask any agency to show how they set up and test these flows." },
    { q: "How long does a Shopify store build take?", a: "A store on a customised theme can launch in a few weeks; custom designs, migrations and integrations take longer. Ask for a phased timeline." },
    { q: "Should I hire a Shopify Partner?", a: "Partner status shows an agency works with Shopify regularly, but it doesn't guarantee quality. Judge agencies on live stores, process and references." },
  ],
});

/* ================================================================= AI */

const ai = listicle({
  slug: "best-ai-automation-agencies-in-india",
  title: "5 Best AI Automation Agencies in India: A Curated Shortlist",
  seoTitle: "5 Best AI Automation Agencies in India (Curated Shortlist)",
  excerpt:
    "A disclosed shortlist of five AI automation companies in India, from enterprise AI firms to practical workflow automation, and how to choose the right one.",
  category: "AI & Automation",
  banner: "compare3",
  sceneKind: "workflow",
  service: "ai-automation",
  serviceLabel: "AI automation services",
  readingTime: "13 min read",
  relatedSlugs: ["how-to-choose-an-ai-automation-agency", "business-process-automation", "rpa-vs-ai-automation"],
  relatedIndustrySlugs: ["fintech", "manufacturing", "healthcare-healthtech"],
  quickAnswer:
    "The best AI automation agency in India depends on scale. Enterprise AI transformation and practical workflow automation for a growing business are very different projects. This shortlist covers five companies: ZSpace Labs (the publisher) for practical workflow automation and AI agents connected to the tools a business already uses, Fractal for large-enterprise AI, Ksolves for AI alongside Salesforce and Odoo, AQe Digital for enterprise software and workflow automation, and Rytsense Technologies for production-focused custom AI.",
  criteria: [
    ...COMMON_CRITERIA,
    "**Practicality**: whether the company explains when AI is and isn't the right tool, and how it handles human review and data",
  ],
  methodNote:
    "AI is now listed by almost every Indian software company, so we looked for firms whose official sites describe AI and automation as a core offer with concrete services, rather than a new line added to an existing menu.",
  profiles: [
    {
      name: "ZSpace Labs",
      base: ZSPACE_BASE,
      specialisation: "Practical workflow automation and AI agents",
      services: "Workflow automation, AI agents, CRM automation, document processing, integrations",
      bestFit: "Growing businesses automating repetitive work across existing tools",
      focus: "Automations connected to CRMs, inboxes and internal tools, with human approval",
      alsoOffers: "Web and mobile apps, UI/UX, Shopify, CRO",
      paragraphs: [
        "ZSpace Labs builds AI automations and agents for businesses across India, working remotely. Its focus is practical: finding the repetitive steps in a team's day, such as lead routing, document and email processing, support triage and internal requests, and automating them across the tools the business already uses.",
        "It is explicit about when AI is the wrong tool. Plain workflow automation is cheaper and more predictable when rules are clear, so ZSpace Labs uses AI only where a step involves reading unstructured input or making a judgement. Consequential actions can require human approval, and runs are logged and monitored.",
        "**Where it is not the best fit:** ZSpace Labs does not publish automation case studies, and it doesn't offer large-scale data science or model training programmes. Enterprises planning organisation-wide AI transformation should look at firms like Fractal.",
      ],
      consider:
        "Businesses with clear, repetitive workflows, such as sales, operations, support or finance admin, that want automations built and monitored by a small senior team.",
    },
    {
      name: "Fractal",
      url: "https://www.fractal.ai",
      domain: "fractal.ai",
      base: "Mumbai",
      specialisation: "Enterprise AI and analytics",
      services: "AI consulting, agentic AI platforms, data foundations, AI adoption",
      bestFit: "Large enterprises running AI transformation programmes",
      focus: "Operationalising AI at scale with data foundations and governance",
      alsoOffers: "Proprietary AI products, analytics, workforce enablement",
      paragraphs: [
        "Fractal is a Mumbai-headquartered AI and analytics company with operations in the USA, UK and UAE. It works with large enterprises on AI consulting and transformation, including agentic AI platforms, data foundations and helping workforces adopt AI.",
        "Its site emphasises integrating AI through data foundations and governance rather than standalone pilots, and lists proprietary products. It serves consumer goods, retail, healthcare, financial services, insurance and manufacturing enterprises.",
      ],
      consider:
        "Large enterprises that need organisation-wide AI strategy, data foundations and governance, not a single workflow.",
    },
    {
      name: "Ksolves",
      url: "https://www.ksolves.com",
      domain: "ksolves.com",
      base: "Noida (also Pune and Indore)",
      specialisation: "AI alongside enterprise platforms",
      services: "AI/ML, agentic AI, big data, Salesforce, Odoo",
      bestFit: "Businesses running Salesforce or Odoo that want AI built in",
      focus: "AI and data engineering combined with Salesforce and Odoo",
      alsoOffers: "Salesforce, Odoo, big data, Databricks",
      paragraphs: [
        "Ksolves India Limited is a publicly listed technology company with offices in Noida, Pune and Indore. Its services combine AI and machine learning, including agentic AI, with big data engineering and the Salesforce and Odoo platforms.",
        "It lists Salesforce and Odoo partnerships, which makes it a natural option for businesses whose operations already run on those platforms and want AI added to them.",
      ],
      consider:
        "Businesses running Salesforce or Odoo that want AI and data capabilities built into those systems.",
    },
    {
      name: "AQe Digital",
      url: "https://www.aqedigital.com",
      domain: "aqedigital.com",
      base: "Ahmedabad",
      specialisation: "Enterprise software and workflow automation",
      services: "AI and data, workflow automation, voice bots, enterprise software",
      bestFit: "Mid-size and enterprise firms automating operations",
      focus: "Enterprise software engineering with automation products",
      alsoOffers: "ERP, BIM, custom enterprise software",
      paragraphs: [
        "AQe Digital is headquartered in Ahmedabad. It offers AI and data solutions, workflow automation, AI voice bots and enterprise software engineering, along with its own automation products.",
        "Its site describes work for clients across healthcare, manufacturing, automotive, retail and finance, with a focus on reducing manual processes inside larger organisations.",
      ],
      consider:
        "Mid-size and larger companies that want automation tied into enterprise software such as ERP systems.",
    },
    {
      name: "Rytsense Technologies",
      url: "https://www.rytsensetech.com",
      domain: "rytsensetech.com",
      base: "Chennai",
      specialisation: "Custom AI and agentic systems",
      services: "Custom AI, agentic AI, generative AI, ML, modernisation",
      bestFit: "Mid-to-large enterprises building production AI systems",
      focus: "Production-ready AI rather than proofs of concept",
      alsoOffers: "Cloud infrastructure, legacy modernisation, staff augmentation",
      paragraphs: [
        "Rytsense Technologies is headquartered in Chennai. It builds custom AI, agentic AI, generative AI and machine learning systems, alongside legacy modernisation and cloud work.",
        "Its site stresses production-ready systems over proofs of concept and mentions industry depth such as healthcare revenue-cycle automation. It offers fixed-price, dedicated-team and staff-augmentation models.",
      ],
      consider:
        "Mid-to-large organisations that need custom AI systems built for production, especially in healthcare and similar regulated sectors.",
    },
  ],
  lookFor: [
    "**Process before technology**: a good agency maps your workflow before proposing AI.",
    "**Honesty about AI versus plain automation**: not every problem needs a language model.",
    "**Human review**: clear approval steps for consequential actions such as payments, refunds or customer messages.",
    "**Data handling**: what data is sent to which AI provider, retention settings and DPDP Act obligations.",
    "**Monitoring**: logs, error alerts and how failures are caught and fixed.",
    "**Integration skill**: real experience with your CRM, ERP, helpdesk and messaging tools.",
  ],
  questions: [
    "Which processes would you automate first for us, and which would you leave alone?",
    "Where would you use AI, and where would ordinary automation be better?",
    "What data will each step send to an AI model, and how is it protected?",
    "How will a person review or approve what the automation does?",
    "How do you measure whether the automation is working and saving time?",
    "What happens when a connected tool changes its API or the AI makes a mistake?",
  ],
  considerations: [
    "**Start with one workflow.** The best automation projects begin with a single high-volume, well-understood process, prove the value and then expand. See [[/blogs/when-to-automate-a-business-process|when to automate a business process]].",
    "**Running costs matter as much as build costs.** AI steps have per-use costs and need monitoring; ordinary automations are cheaper to run. Ask for an estimate of both. Read [[/blogs/rpa-vs-ai-automation|RPA vs AI automation]] for the trade-offs.",
    "**Choose for your scale.** Enterprise AI programmes and practical workflow automation are different purchases. Our [[/blogs/how-to-choose-an-ai-automation-agency|guide to choosing an AI automation agency]] covers what to compare.",
  ],
  conclusion: [
    "For enterprise AI transformation, Fractal is built for that scale. For AI inside Salesforce or Odoo, Ksolves; for automation tied to enterprise software, AQe Digital; for custom production AI systems, Rytsense Technologies.",
    "For growing businesses that want practical automations across the tools they already use, with human review built in, ZSpace Labs focuses on exactly that. Start with one workflow and measure it.",
    "For manufacturers and traders in Gujarat, see our [[/blogs/best-ai-automation-companies-in-ahmedabad|Ahmedabad AI automation shortlist]].",
  ],
  cta: {
    title: "Got a workflow that eats your team's time?",
    description: "Tell us about it and we'll tell you honestly whether AI, plain automation or neither is the right answer. See our [[/services/ai-automation|AI automation service]].",
  },
  faqs: [
    { q: "Which is the best AI automation agency in India?", a: "It depends on scale. Enterprise AI programmes suit firms like Fractal; Salesforce or Odoo-centred work suits Ksolves; enterprise-software automation suits AQe Digital; custom production AI suits Rytsense; practical workflow automation for growing businesses suits studios like ZSpace Labs." },
    { q: "Is this an independent ranking?", a: "No. ZSpace Labs published this shortlist and lists itself first as the publisher. Other companies were selected using the stated criteria and their official websites, without payment." },
    { q: "Do I need AI, or just automation?", a: "If the rules are clear and the inputs are structured, ordinary workflow automation is usually cheaper and more reliable. AI helps when steps involve reading emails, documents or chats, or making judgements." },
    { q: "Is AI automation safe for customer data?", a: "It can be, with care: send only necessary data, use providers and settings that don't train on your data, restrict access, log activity and meet India's DPDP Act obligations. Ask every agency how they handle this." },
    { q: "What should we automate first?", a: "A frequent, repetitive, well-understood process with a measurable cost, such as lead routing, invoice entry or ticket triage, is usually the best first candidate." },
    { q: "Will AI automation replace our staff?", a: "Well-designed automation removes repetitive steps so people spend time on judgement, customers and exceptions. Consequential decisions should stay with people." },
  ],
});

/* ============================================================== UI/UX */

const uiux = listicle({
  slug: "best-ui-ux-design-agencies-in-india",
  title: "5 Best UI/UX Design Agencies in India: A Curated Shortlist",
  seoTitle: "5 Best UI/UX Design Agencies in India (Curated Shortlist)",
  excerpt:
    "A disclosed shortlist of five UI/UX and product design agencies in India, what each specialises in, which products they suit and how to choose.",
  category: "UI/UX",
  banner: "compare3",
  sceneKind: "design",
  service: "ui-ux-design",
  serviceLabel: "UI/UX design services",
  readingTime: "12 min read",
  relatedSlugs: ["how-to-choose-a-ui-ux-design-agency", "ui-design-vs-ux-design", "product-design-process"],
  relatedIndustrySlugs: ["saas-technology", "fintech", "healthcare-healthtech"],
  quickAnswer:
    "The best UI/UX design agency in India depends on whether you need research-heavy product design, a design system, a quick UX audit or design that is built straight into code. This shortlist covers five agencies: ZSpace Labs (the publisher) for product design delivered alongside engineering, Lollypop Design Studio for multi-city, full-service product design, Octet Design Studio and ProCreator for SaaS and enterprise products, and Yellow Slice for research-first UX and service design.",
  criteria: [
    ...COMMON_CRITERIA,
    "**Research practice**: whether the agency describes user research and usability testing, not only visual design",
  ],
  methodNote:
    "India has a strong product design scene, and several well-known studios publish their own agency lists. We chose agencies whose sites describe a clear research and product design practice and whose Indian base we could confirm.",
  profiles: [
    {
      name: "ZSpace Labs",
      base: ZSPACE_BASE,
      specialisation: "Product design delivered with engineering",
      services: "Research, flows, wireframes, prototypes, UI, design systems, UX audits",
      bestFit: "Teams that want design and development from the same people",
      focus: "Usable interfaces and design systems that go straight into production code",
      alsoOffers: "Web and mobile development, Shopify, AI automation, CRO",
      paragraphs: [
        "ZSpace Labs designs websites, apps and SaaS products with one team that also builds them. It works with startups, product teams and businesses across India remotely, covering user research, flows and wireframes, prototypes, interface design, design systems and UX audits.",
        "Because design and engineering sit together, components are designed with how they'll be built in mind, and design systems are delivered as code-ready tokens and components. That shortens the gap between an approved design and a shipped product.",
        "**Where it is not the best fit:** ZSpace Labs does not publish design case studies or awards, and it isn't a dedicated research consultancy for large, multi-country research programmes. Organisations that need that depth should look at research-first studios.",
      ],
      consider:
        "Startups and product teams who want design and development to move together, and want usable products shipped rather than design files handed over.",
    },
    {
      name: "Lollypop Design Studio",
      url: "https://lollypop.design",
      domain: "lollypop.design",
      base: "Bengaluru (also Mumbai, Chennai, Hyderabad)",
      specialisation: "Full-service UI/UX and product design",
      services: "Research, UI/UX, branding, interaction design, prototyping, front-end",
      bestFit: "Companies wanting a large, established design studio",
      focus: "Human-centred product design across many industries",
      alsoOffers: "Digital branding, motion graphics, front-end and app development",
      paragraphs: [
        "Lollypop Design Studio has offices in Bengaluru, Mumbai, Chennai and Hyderabad, as well as outside India. It offers research, UI/UX design, digital branding, interaction design, prototyping and motion design, plus front-end and application development.",
        "Its site lists work across healthcare, fintech, agritech, enterprise and logistics, edtech, telecom, SaaS, ecommerce and real estate, which reflects a broad, established design practice.",
      ],
      consider:
        "Companies that want an established, multi-city design studio covering research, branding and product design.",
    },
    {
      name: "Octet Design Studio",
      url: "https://octet.design",
      domain: "octet.design",
      base: "Mumbai, Bengaluru, Ahmedabad",
      specialisation: "UI/UX for SaaS and enterprise products",
      services: "User research, UI/UX design, usability testing, UI development",
      bestFit: "SaaS, B2B and enterprise product teams",
      focus: "Research-driven design for complex SaaS and B2B products",
      alsoOffers: "UI development, usability testing",
      paragraphs: [
        "Octet Design Studio has offices in Mumbai, Bengaluru and Ahmedabad. It offers user research, UI/UX design, usability testing and UI development.",
        "Its focus is on SaaS, enterprise and B2B products, including fintech, healthtech, logistics and martech. That specialism matters for complex, data-heavy interfaces where general consumer-design experience is not enough.",
      ],
      consider:
        "SaaS and B2B companies designing complex dashboards, workflows and data-heavy products.",
    },
    {
      name: "ProCreator",
      url: "https://procreator.design",
      domain: "procreator.design",
      base: "Mumbai (also Singapore, USA)",
      specialisation: "Product design for SaaS and enterprise",
      services: "UX research, UI design, prototyping, design systems, AI experience design",
      bestFit: "SaaS and enterprise teams wanting flexible engagement models",
      focus: "Adoption-focused design with subscription and audit options",
      alsoOffers: "Web, mobile and no-code development",
      paragraphs: [
        "ProCreator is a Mumbai-based design agency with offices in Singapore and the USA. Its services include UX research, UI design, prototyping, design systems and AI experience design, along with development.",
        "It focuses on SaaS and enterprise products across fintech, edtech, healthtech, BFSI and ecommerce, and offers subscription, fixed-scope and UX-audit engagements, which gives buyers flexibility in how they work with it.",
      ],
      consider:
        "SaaS and enterprise teams that want ongoing design support on a subscription basis, or a focused UX audit.",
    },
    {
      name: "Yellow Slice",
      url: "https://www.yellowslice.in",
      domain: "yellowslice.in",
      base: "Mumbai",
      specialisation: "Research-first UX and service design",
      services: "UX research, digital product design, CX and service design, brand strategy",
      bestFit: "Businesses where customer experience spans digital and offline",
      focus: "Strategic, research-first design across product and service experience",
      alsoOffers: "Service design, brand strategy",
      paragraphs: [
        "Yellow Slice is a Mumbai-based strategic design company that says it has worked for more than 15 years. It offers UX research, digital product design, customer-experience and service design, and brand strategy.",
        "Its research-first approach and service-design capability suit problems where the customer journey crosses apps, websites and offline touchpoints, across sectors such as fintech, SaaS, ecommerce, edtech, medtech and travel.",
      ],
      consider:
        "Businesses whose customer experience spans digital products and offline service, and who want research-led design strategy.",
    },
  ],
  lookFor: [
    "**Research in the process**: interviews and usability tests, not only visual design.",
    "**Case studies that show decisions**: why a design changed, not only final screens.",
    "**Experience with your product type**: SaaS dashboards, consumer apps and ecommerce differ.",
    "**Design systems**: reusable components and documentation developers can use.",
    "**Developer hand-off**: how designs reach production, and who answers questions during build.",
    "**Accessibility and range**: contrast, text size, regional languages and low-end devices.",
  ],
  questions: [
    "How would you research our users, and how many sessions would you plan?",
    "Can you walk us through a case study, including what changed and why?",
    "What exactly will we receive: flows, prototypes, a design system, specs?",
    "How do you work with our developers during build?",
    "How do you design for regional languages and accessibility?",
    "How do you measure whether the redesign worked?",
  ],
  considerations: [
    "**UX and UI are different jobs.** UX shapes flows and structure; UI shapes the visual interface. Many projects need both, but a UX audit alone can be the right start. See [[/blogs/ui-design-vs-ux-design|UI design vs UX design]].",
    "**Scope by outcomes.** Price usually depends on the number of flows and screens, the depth of research and whether a design system is included. Agree what is in scope before visual design begins.",
    "**Design that ships.** The best design work is wasted if it doesn't reach production intact. Our [[/blogs/how-to-choose-a-ui-ux-design-agency|guide to choosing a UI/UX design agency]] covers hand-off and collaboration in more depth.",
  ],
  conclusion: [
    "For a large, established multi-city studio, Lollypop; for SaaS and B2B products, Octet and ProCreator; for research-first design across digital and service experiences, Yellow Slice.",
    "If you want design and engineering from the same team, so what's designed is what ships, ZSpace Labs works that way. Ask each agency to walk you through one case study from research to launch.",
    "Working in Mumbai? See our [[/blogs/best-ui-ux-design-agencies-in-mumbai|Mumbai UI/UX agency shortlist]].",
  ],
  cta: {
    title: "Product feeling harder to use than it should?",
    description: "Start with a focused UX review or a full design engagement. See our [[/services/ui-ux-design|UI/UX design service]].",
  },
  faqs: [
    { q: "Which is the best UI/UX design agency in India?", a: "It depends on your product. Lollypop is a large full-service studio; Octet and ProCreator focus on SaaS and enterprise; Yellow Slice is research-first with service design; ZSpace Labs delivers design alongside engineering." },
    { q: "Is this list a ranking?", a: "No. ZSpace Labs published it and appears first as the publisher. The other agencies were chosen using the stated criteria and their official websites, without payment." },
    { q: "What does a UI/UX design agency deliver?", a: "Typically research findings, user flows, wireframes, prototypes, final interface designs and, often, a design system with specs for developers." },
    { q: "Do we need user research?", a: "Almost always some. Even a handful of usability sessions catches problems that internal teams miss. Large research programmes are only needed for bigger or riskier products." },
    { q: "How long does a UI/UX project take?", a: "A focused audit can take a couple of weeks; designing a full product or redesign takes longer depending on the number of flows. Ask for a phased plan." },
    { q: "Can the same team design and build?", a: "Yes. Some studios, including ZSpace Labs, do both, which reduces hand-off problems. Others focus on design and work with your developers." },
  ],
});

/* ================================================================ CRO */

const cro = listicle({
  slug: "best-cro-agencies-in-india",
  title: "5 Best CRO Agencies in India: A Curated Shortlist",
  seoTitle: "5 Best CRO Agencies in India (Curated Shortlist)",
  excerpt:
    "A disclosed shortlist of five conversion rate optimisation agencies in India, how their approaches differ, who each suits and what to ask before hiring.",
  category: "CRO",
  banner: "compare3",
  sceneKind: "abtest",
  service: "cro-audit",
  serviceLabel: "CRO audit services",
  readingTime: "12 min read",
  relatedSlugs: ["how-to-choose-a-cro-agency", "shopify-cro-checklist", "ecommerce-website-not-converting"],
  relatedIndustrySlugs: ["d2c-consumer", "ecommerce", "saas-technology"],
  quickAnswer:
    "The best CRO agency in India depends on your business model and traffic. Ecommerce, B2B SaaS and lead-generation sites convert for different reasons. This shortlist covers five companies: ZSpace Labs (the publisher) for audit-led CRO that also designs and builds the fixes, upGrowth and ROI Minds for CRO within broader growth and performance marketing, UnOptimised for B2B and AI SaaS funnels, and Tenet for ecommerce CRO combined with UX and analytics.",
  criteria: [
    ...COMMON_CRITERIA,
    "**Method**: whether the agency describes measurement, research and testing rather than design changes alone",
  ],
  methodNote:
    "Many CRO lists for India are published by CRO software vendors or agencies, often without disclosure. We kept agencies with an Indian base we could confirm and a clearly described CRO practice. Convertcart was researched but excluded because its official site does not state an Indian office.",
  profiles: [
    {
      name: "ZSpace Labs",
      base: ZSPACE_BASE,
      specialisation: "Audit-led CRO with design and development in-house",
      services: "Conversion audits, funnel and checkout analysis, UX fixes, A/B testing",
      bestFit: "Stores and businesses that want fixes designed and built, not just recommended",
      focus: "Finding friction in your own data, then designing and shipping the fixes",
      alsoOffers: "Shopify development, UI/UX, web development, AI automation",
      paragraphs: [
        "ZSpace Labs runs conversion audits for websites and Shopify stores across India, working remotely. Audits cover analytics and tracking quality, funnels, product and checkout pages, mobile UX and speed, ending in a prioritised list of fixes and tests.",
        "Because the same team designs and develops, ZSpace Labs can also implement the fixes and set up experiments, instead of handing a report to another team. It sizes testing to traffic: A/B tests where there is enough traffic to reach a result, and prioritised fixes with before-and-after measurement where there isn't.",
        "**Where it is not the best fit:** ZSpace Labs does not publish CRO case studies or promise percentage lifts, and it doesn't manage paid advertising. Businesses that want CRO bundled with ad management should consider performance-marketing agencies.",
      ],
      consider:
        "Ecommerce brands and businesses that want an honest audit and the fixes designed, built and measured by one team.",
    },
    {
      name: "upGrowth",
      url: "https://upgrowth.in",
      domain: "upgrowth.in",
      base: "Pune",
      specialisation: "CRO within growth marketing",
      services: "CRO, SEO, growth strategy, fractional CMO",
      bestFit: "Companies wanting CRO as part of a wider growth programme",
      focus: "Experimentation and CRO inside a broader digital growth practice",
      alsoOffers: "SEO, content, fractional CMO, product engineering",
      paragraphs: [
        "upGrowth is a Pune-headquartered growth marketing agency that works with companies across several Indian cities. It offers conversion optimisation alongside SEO, growth strategy and fractional CMO services.",
        "Its site describes CRO as part of a systematic, test-and-measure growth practice for startups and larger businesses in ecommerce, fintech, SaaS, education and healthcare.",
      ],
      consider:
        "Companies that want CRO run alongside SEO and growth strategy by one marketing partner.",
    },
    {
      name: "ROI Minds",
      url: "https://roiminds.com",
      domain: "roiminds.com",
      base: "Mohali",
      specialisation: "CRO with performance marketing",
      services: "CRO, Google and Meta ads, SEO, social media",
      bestFit: "Ecommerce and D2C brands spending on paid acquisition",
      focus: "Full-funnel growth combining paid acquisition and conversion",
      alsoOffers: "Google Ads, Meta Ads, SEO, social media",
      paragraphs: [
        "ROI Minds is a digital marketing agency based in Mohali, Punjab. It combines conversion rate optimisation with performance marketing on Google and Meta, SEO and social media.",
        "Its site focuses on ecommerce and D2C brands, alongside service businesses, which makes it a fit where paid acquisition and on-site conversion need to be managed together.",
      ],
      consider:
        "D2C and ecommerce brands that spend significantly on paid ads and want acquisition and conversion handled by one agency.",
    },
    {
      name: "UnOptimised",
      url: "https://www.unoptimised.com",
      domain: "unoptimised.com",
      base: "India",
      specialisation: "CRO for B2B SaaS and AI SaaS",
      services: "CRO, landing pages, trial-to-paid optimisation, go-to-market",
      bestFit: "B2B and AI SaaS companies improving signups and trial conversion",
      focus: "SaaS funnels: messaging, landing pages and trial-to-paid",
      alsoOffers: "Go-to-market strategy, paid media",
      paragraphs: [
        "UnOptimised is an India-based CRO practice that works exclusively with B2B SaaS and AI SaaS companies. Its services cover conversion optimisation, landing pages, trial-to-paid improvements and go-to-market strategy.",
        "That SaaS-only focus means its work centres on messaging, signup and demo flows and trial conversion, which differ substantially from ecommerce checkout optimisation.",
      ],
      consider:
        "B2B and AI SaaS companies that want specialist help with signup, demo and trial-to-paid conversion.",
    },
    {
      name: "Tenet",
      url: "https://www.wearetenet.com",
      domain: "wearetenet.com",
      base: "Noida",
      specialisation: "Ecommerce CRO with UX and analytics",
      services: "Ecommerce CRO, A/B testing, landing pages, UX/UI, analytics",
      bestFit: "Online retailers wanting CRO, design and analytics together",
      focus: "Ecommerce conversion across Shopify, WooCommerce and Magento",
      alsoOffers: "UX/UI design, analytics implementation, SEO",
      paragraphs: [
        "Tenet is a Noida-based agency offering ecommerce CRO, A/B testing, landing page optimisation, ecommerce UX/UI design and analytics implementation.",
        "Its site describes work across Shopify, WooCommerce and Magento stores and with B2B and SaaS clients, with CRO connected to its design and marketing teams.",
      ],
      consider:
        "Online retailers on Shopify, WooCommerce or Magento that want CRO, UX design and analytics from one agency.",
    },
  ],
  lookFor: [
    "**Measurement first**: an agency should check your tracking before recommending changes.",
    "**Research, not opinions**: analytics, recordings, surveys and usability tests behind every hypothesis.",
    "**Honest testing**: experiments sized to your traffic, with clear rules for calling results.",
    "**No guaranteed lifts**: be wary of promised percentage increases before they've seen your data.",
    "**Ability to implement**: who designs and builds the changes, and how quickly.",
    "**Fit with your model**: ecommerce, SaaS and lead generation need different expertise.",
  ],
  questions: [
    "What will you check before making any recommendations?",
    "How do you decide what to test first?",
    "How much traffic do we need for A/B testing, and what if we don't have it?",
    "Who designs and builds the changes you recommend?",
    "How will you report results, including tests that don't win?",
    "What experience do you have with our business model specifically?",
  ],
  considerations: [
    "**Many conversion problems are tracking problems.** Broken events and misconfigured funnels make good pages look bad. Make sure measurement is right before acting.",
    "**Testing needs traffic.** Lower-traffic sites usually get more from prioritised, high-confidence fixes than from underpowered A/B tests. See [[/blogs/shopify-cro-checklist|the Shopify CRO checklist]] for common high-impact fixes.",
    "**Match the agency to the funnel.** Checkout optimisation, SaaS trial conversion and lead-form optimisation are different specialisms. Our [[/blogs/how-to-choose-a-cro-agency|guide to choosing a CRO agency]] covers what to compare.",
  ],
  conclusion: [
    "For CRO inside a wider growth programme, upGrowth; for CRO alongside paid acquisition, ROI Minds; for SaaS funnels, UnOptimised; for ecommerce CRO with design and analytics, Tenet.",
    "If you want an honest audit and the fixes designed, built and measured by one team, without promised lifts, ZSpace Labs works that way. Whoever you choose, start by checking that your tracking is right.",
  ],
  cta: {
    title: "Getting traffic but not enough sales or leads?",
    description: "Start with an audit of where visitors drop off. See our [[/services/cro-audit|CRO audit service]].",
  },
  faqs: [
    { q: "Which is the best CRO agency in India?", a: "It depends on your model. For growth programmes, upGrowth; with paid ads, ROI Minds; for SaaS, UnOptimised; for ecommerce CRO with design and analytics, Tenet; for audits plus designed and built fixes, ZSpace Labs." },
    { q: "Is this list an independent ranking?", a: "No. ZSpace Labs published it and appears first as the publisher. The other companies were selected using the stated criteria and their official websites, without payment." },
    { q: "What does a CRO agency do?", a: "It finds where and why visitors drop off using analytics and research, prioritises fixes, designs changes, runs tests where traffic allows and measures the results." },
    { q: "How much traffic do I need for CRO?", a: "Any site can benefit from an audit and fixes. A/B testing specifically needs enough conversions per variant to reach reliable results, which many smaller sites don't have." },
    { q: "Should a CRO agency guarantee results?", a: "No credible agency can guarantee a percentage lift before analysing your data. Treat guaranteed numbers as a warning sign." },
    { q: "How long before CRO shows results?", a: "Clear fixes can show effects within weeks; testing programmes compound over months. Ask for a roadmap with milestones." },
  ],
});

export const indiaListicles: BlogPost[] = [web, mobile, shopify, ai, uiux, cro];

/* ======================================================= support guides */

export const indiaSupportPosts: BlogPost[] = [
  {
    slug: "how-to-choose-an-ai-automation-agency",
    title: "How to choose an AI automation agency",
    seoTitle: "How to Choose an AI Automation Agency: A Practical Checklist",
    excerpt:
      "What separates an AI automation partner that saves your team time from one that ships fragile demos: process, data handling, human review and monitoring.",
    category: "AI & Automation",
    banner: "framework",
    sceneKind: "workflow",
    date: "2026-10-04",
    readingTime: "9 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["b2b-enterprise", "professional-services"],
    relatedSlugs: ["best-ai-automation-agencies-in-india", "rpa-vs-ai-automation", "when-to-automate-a-business-process"],
    faqs: [
      { q: "What should an AI automation agency do first?", a: "Map the process. A good agency asks how the work happens today, how often, who does it and what it costs before proposing any tool or model." },
      { q: "How do I know if a process needs AI at all?", a: "If inputs are structured and rules are clear, ordinary workflow automation is usually cheaper and more reliable. AI earns its place when a step means reading emails, documents or chats, or making a judgement." },
      { q: "What questions should I ask about data?", a: "Ask which data each step sends to which provider, whether that provider trains on it, how long it is retained, who can access logs and how the setup meets India's DPDP Act obligations." },
      { q: "Should automations act without a person checking?", a: "Low-risk, reversible steps can. Consequential actions such as payments, refunds, account changes or customer messages should have a human approval step, at least until the automation has a track record." },
      { q: "How should we measure success?", a: "Agree a baseline before building: time per task, volume handled, error rates or response times. Then measure the same things after launch." },
      { q: "Is a large AI company better than a small studio?", a: "For organisation-wide AI programmes, large firms bring scale and governance. For automating specific workflows across your existing tools, a smaller senior team is often faster and closer to the work." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Choose an AI automation agency by how it thinks about your process, not by how impressive its demo looks. A good partner maps your workflow first, tells you where AI is unnecessary, designs human review into consequential steps, is specific about what data goes where, and plans monitoring from day one. Ask for an estimate of running costs as well as build costs, and start with one well-understood workflow.",
        ],
      },
      {
        heading: "Why demos are a poor filter",
        body: [
          "AI demos are easy to make impressive. A model summarising a sample email or drafting a reply works well on the examples chosen for the demo. Production is different: real inputs are messy, connected tools change, edge cases are constant and errors have consequences.",
          "The difference between agencies shows up in the questions they ask before building, and in what happens when something goes wrong. That is what to evaluate.",
        ],
      },
      {
        heading: "AI automation agency checklist",
        body: ["A capable partner should be able to answer each of these concretely:"],
        checklist: [
          "**Process discovery**: they ask how the work is done today, with volumes and time spent",
          "**AI versus plain automation**: they recommend ordinary automation where rules are clear",
          "**Human review**: approval steps for actions that move money, change records or contact customers",
          "**Data handling**: which data goes to which provider, retention, access and DPDP Act obligations",
          "**Integration experience**: real work with your CRM, helpdesk, ERP, email and messaging tools",
          "**Monitoring**: logs, alerts and a clear owner when a run fails",
          "**Running costs**: per-use AI costs and platform fees estimated up front",
          "**Ownership**: you keep the accounts, workflows, prompts and documentation",
        ],
      },
      {
        heading: "Questions to ask on the first call",
        body: [],
        checklist: [
          "Which of our processes would you automate first, and which would you leave alone?",
          "Where would you use AI, and why not ordinary automation for those steps?",
          "What will each step send to an AI model, and how is that data protected?",
          "How will a person review or approve what the automation does?",
          "How will we know it's working, and what does it cost to run each month?",
          "What happens when a connected tool changes or the model gets something wrong?",
        ],
      },
      {
        heading: "Warning signs",
        body: [
          "Be cautious when an agency proposes an AI agent before understanding the process, promises a percentage of staff time saved before seeing your workflows, can't explain where your data goes, or treats monitoring as an optional extra. Equally, an agency that wants to automate everything at once is taking on more risk than a phased plan needs.",
        ],
        callout: { type: "tip", text: "Ask the agency to describe a time an automation failed in production and what they changed afterwards. The answer tells you more than any case study." },
      },
      {
        heading: "Enterprise AI firm or automation studio?",
        body: [
          "These are different purchases. Enterprise AI firms suit organisation-wide strategy, data platforms, governance and model work. Automation studios suit specific workflows, such as lead routing, document processing or support triage, built across the tools you already use.",
          "For a comparison of companies at both ends in India, see our disclosed shortlist of [[/blogs/best-ai-automation-agencies-in-india|AI automation agencies in India]]. For the technology choice itself, read [[/blogs/rpa-vs-ai-automation|RPA vs AI automation]].",
        ],
      },
      {
        heading: "Start small, then expand",
        body: [
          "The most reliable path is one workflow with a measurable cost, a baseline taken before building, a few weeks of monitored running with human review, and only then the next workflow. Our guide on [[/blogs/when-to-automate-a-business-process|when to automate a business process]] helps pick the first candidate.",
        ],
        cta: { title: "Want a second opinion on what to automate?", description: "Describe the workflow and we'll tell you honestly whether AI, plain automation or neither fits. See our [[/services/ai-automation|AI automation service]]." },
      },
    ],
  },
  {
    slug: "how-to-choose-a-ui-ux-design-agency",
    title: "How to choose a UI/UX design agency",
    seoTitle: "How to Choose a UI/UX Design Agency: Checklist and Questions",
    excerpt:
      "Portfolios show final screens, not decisions. Here is how to judge a UI/UX design agency on research, process, hand-off and whether its designs actually ship.",
    category: "UI/UX",
    banner: "framework",
    sceneKind: "design",
    date: "2026-10-04",
    readingTime: "9 min read",
    relatedServiceSlugs: ["ui-ux-design"],
    relatedIndustrySlugs: ["saas-technology", "startups"],
    relatedSlugs: ["best-ui-ux-design-agencies-in-india", "ui-design-vs-ux-design", "ux-design-process"],
    faqs: [
      { q: "What should I look for in a UI/UX design portfolio?", a: "Look for case studies that explain the problem, the research, the options considered and why the final design was chosen. Final screens alone show taste, not process." },
      { q: "Do I need user research?", a: "Almost always some. A handful of usability sessions with real users catches problems internal teams can't see. Large research programmes are only needed for bigger or riskier products." },
      { q: "What deliverables should a UI/UX agency provide?", a: "Typically research findings, user flows, wireframes, interactive prototypes, final designs and a design system or component library with specs developers can use." },
      { q: "Should the design agency also build the product?", a: "Not necessarily, but someone must own the hand-off. Agencies that also build reduce translation errors; design-only agencies should show how they support your developers during build." },
      { q: "How do I compare UI/UX agency quotes?", a: "Compare scope, not totals: number of flows and screens, depth of research, whether a design system is included, rounds of revision and support during development." },
      { q: "How do we know the redesign worked?", a: "Agree measures before design starts, such as task completion, conversion, support tickets or activation, and check them after launch." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Choose a UI/UX design agency on its process, not its prettiest screens. Ask to walk through a case study from problem to launch, confirm it does user research and usability testing, check what you'll actually receive, and understand how designs reach production. Match the agency to your product type, compare quotes on scope rather than price, and agree how you'll measure success before design begins.",
        ],
      },
      {
        heading: "Why portfolios mislead",
        body: [
          "Design portfolios are curated final screens, often polished after the project ended. They tell you an agency has visual skill, which most do. They rarely show whether the design solved a real problem, whether users could complete their tasks, or whether the product that shipped looks anything like the mock-ups.",
          "Ask instead for the story behind one project: what the team learned, what changed because of research, and what the results were.",
        ],
      },
      {
        heading: "UI/UX agency checklist",
        body: [],
        checklist: [
          "**Research in the process**: interviews, analytics review and usability testing, scaled to the project",
          "**Case studies with reasoning**: problem, options, decisions and outcomes, not only screens",
          "**Relevant product experience**: SaaS dashboards, consumer apps, ecommerce and enterprise tools differ",
          "**Clear deliverables**: flows, prototypes, final designs and a design system with specs",
          "**Developer hand-off**: how components are specified and who answers questions during build",
          "**Accessibility**: contrast, text size, keyboard use and screen readers considered from the start",
          "**Indian users**: regional languages, low-end Android devices and patchy networks where relevant",
        ],
      },
      {
        heading: "Questions to ask",
        body: [],
        checklist: [
          "Can you walk us through one case study from research to launch?",
          "How would you research our users, and how many sessions would you plan?",
          "What exactly will we receive, and in what format?",
          "How do you work with our developers once design is approved?",
          "How do you handle disagreements between research findings and stakeholder opinions?",
          "How will we measure whether the new design works better?",
        ],
      },
      {
        heading: "UX, UI or both?",
        body: [
          "UX design shapes structure, flows and how a product works; UI design shapes how it looks and feels. Some projects need a UX audit and restructuring more than new visuals; others need a visual refresh on sound foundations. Knowing which you need sharpens every conversation with agencies. See [[/blogs/ui-design-vs-ux-design|UI design vs UX design]] for the distinction.",
        ],
      },
      {
        heading: "Design that ships",
        body: [
          "The most common failure in design projects isn't bad design; it's design that gets diluted in development. Components that weren't specified, states nobody designed and spacing that drifts all add up. Agencies that design with build constraints in mind, or build themselves, reduce that gap.",
          "For a comparison of design agencies in India, see our disclosed shortlist of [[/blogs/best-ui-ux-design-agencies-in-india|UI/UX design agencies in India]].",
        ],
        cta: { title: "Product harder to use than it should be?", description: "Start with a focused UX review. See our [[/services/ui-ux-design|UI/UX design service]]." },
      },
    ],
  },
  {
    slug: "how-to-choose-a-cro-agency",
    title: "How to choose a CRO agency",
    seoTitle: "How to Choose a CRO Agency: What to Check Before Hiring",
    excerpt:
      "How to judge a conversion rate optimisation agency: measurement first, research over opinion, honest testing for your traffic, and no guaranteed lifts.",
    category: "CRO",
    banner: "framework",
    sceneKind: "abtest",
    date: "2026-10-04",
    readingTime: "9 min read",
    relatedServiceSlugs: ["cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer"],
    relatedSlugs: ["best-cro-agencies-in-india", "shopify-cro-checklist", "ecommerce-website-not-converting"],
    faqs: [
      { q: "What does a CRO agency actually do?", a: "It finds where and why visitors drop off using analytics and research, prioritises fixes, designs changes, runs tests where traffic allows, and measures results." },
      { q: "Should a CRO agency guarantee a conversion lift?", a: "No. Nobody can know the size of an improvement before analysing your data. A guaranteed percentage is a warning sign, not a strength." },
      { q: "How much traffic do I need for A/B testing?", a: "Enough conversions per variant to reach a reliable result within a few weeks. Many smaller sites don't have that, and are better served by prioritised fixes measured before and after." },
      { q: "What should a CRO audit include?", a: "A tracking and analytics check, funnel analysis, page-by-page review of key templates, mobile UX and speed, qualitative research where possible, and a prioritised list of fixes and tests." },
      { q: "Can a CRO agency also implement changes?", a: "Some can, some only recommend. If yours only recommends, confirm who will design and build the changes and how quickly, because slow implementation stalls CRO programmes." },
      { q: "How long before we see results?", a: "Clear fixes can show effects in weeks. Testing programmes compound over months. Agree milestones up front." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Choose a CRO agency that checks your measurement before recommending anything, bases hypotheses on research rather than opinion, sizes its testing to your traffic, reports losing tests honestly and never guarantees a lift before seeing your data. Confirm who designs and builds the changes, and pick an agency that knows your business model: ecommerce, SaaS and lead generation convert for different reasons.",
        ],
      },
      {
        heading: "Start with measurement",
        body: [
          "A surprising share of conversion problems are tracking problems: duplicate events, missing checkout steps, broken attribution or consent banners blocking analytics. An agency that recommends design changes before checking tracking is optimising numbers that may be wrong.",
        ],
        callout: { type: "takeaway", text: "The first deliverable from a good CRO agency is usually a list of measurement fixes, not a redesign." },
      },
      {
        heading: "CRO agency checklist",
        body: [],
        checklist: [
          "**Measurement audit first**: tracking, events and funnels verified before analysis",
          "**Research-backed hypotheses**: analytics, session recordings, surveys and usability tests",
          "**Prioritisation**: impact, confidence and effort scored transparently",
          "**Honest testing**: sample sizes planned in advance, no stopping tests early on a good day",
          "**Implementation**: a clear owner for designing and building changes",
          "**Reporting**: wins, losses and inconclusive tests all reported",
          "**Model fit**: experience with your type of funnel",
        ],
      },
      {
        heading: "Questions to ask",
        body: [],
        checklist: [
          "What do you check before recommending any change?",
          "How do you decide what to test first?",
          "Is our traffic enough for A/B testing? What do you do if it isn't?",
          "Who designs and builds the changes you recommend?",
          "Can you show a report that includes tests that didn't win?",
          "What experience do you have with businesses like ours?",
        ],
      },
      {
        heading: "Low traffic changes the approach",
        body: [
          "For stores and sites without much traffic, A/B tests can run for months without a clear answer. A good agency will say so, and instead focus on high-confidence fixes from research and best practice, measured before and after. Our [[/blogs/shopify-cro-checklist|Shopify CRO checklist]] lists the common ones.",
        ],
      },
      {
        heading: "Match the agency to your funnel",
        body: [
          "Ecommerce CRO focuses on product pages, carts and checkout; SaaS CRO on messaging, signup and trial-to-paid; lead-generation CRO on forms, trust and follow-up speed. Some agencies combine CRO with paid ads or SEO, which suits businesses wanting one marketing partner.",
          "For a comparison of CRO agencies in India, see our disclosed shortlist of [[/blogs/best-cro-agencies-in-india|CRO agencies in India]].",
        ],
        cta: { title: "Not sure where visitors drop off?", description: "Start with an audit. See our [[/services/cro-audit|CRO audit service]]." },
      },
    ],
  },
  {
    slug: "ui-design-vs-ux-design",
    title: "UI design vs UX design: what's the difference?",
    seoTitle: "UI Design vs UX Design: The Difference, Explained",
    excerpt:
      "UX design shapes how a product works; UI design shapes how it looks and responds. Here's how they differ, how they overlap and which one your project needs.",
    category: "UI/UX",
    banner: "fork",
    sceneKind: "design",
    date: "2026-10-04",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ui-ux-design"],
    relatedIndustrySlugs: ["saas-technology", "startups"],
    relatedSlugs: ["product-design-vs-ux-design", "ux-design-process", "how-to-choose-a-ui-ux-design-agency"],
    faqs: [
      { q: "What is the main difference between UI and UX design?", a: "UX design decides how a product works: structure, flows and whether people can complete their tasks. UI design decides how it looks and responds: layout, type, colour, components and interaction details." },
      { q: "Which comes first, UX or UI?", a: "Usually UX: research, structure and flows are worked out first, then UI gives them a visual form. In practice the two overlap and iterate together." },
      { q: "Can one designer do both?", a: "Yes. Many product designers work across both, especially in smaller teams. Larger teams often split them into specialised roles." },
      { q: "Is UX design only about research?", a: "No. Research is part of it, but UX also covers information architecture, user flows, wireframes, prototyping and usability testing." },
      { q: "Which does my project need?", a: "If users struggle to find things or complete tasks, start with UX. If the product works but looks dated or inconsistent, UI work may be enough. Many projects need both." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "UX (user experience) design shapes how a product works: what it does, how it's structured and whether people can complete their tasks easily. UI (user interface) design shapes how it looks and responds: layout, typography, colour, components and interaction details. UX comes first in principle, but in practice they overlap and are often done by the same product designers.",
        ],
      },
      {
        heading: "What UX design covers",
        body: ["UX design is concerned with whether a product is useful and usable. Typical work includes:"],
        checklist: [
          "User research: interviews, analytics review and observing how people actually work",
          "Information architecture: how content and features are organised and named",
          "User flows: the steps people take to complete each task",
          "Wireframes and prototypes: testing structure before visual design",
          "Usability testing: watching real users attempt real tasks",
        ],
      },
      {
        heading: "What UI design covers",
        body: ["UI design turns structure into an interface people can see and use. Typical work includes:"],
        checklist: [
          "Visual layout, spacing and hierarchy",
          "Typography and colour, including contrast for accessibility",
          "Components such as buttons, forms, tables and navigation, and all their states",
          "Interaction details: feedback, transitions and microinteractions",
          "Design systems: reusable, documented components and tokens",
        ],
      },
      {
        heading: "Side by side",
        body: [],
        table: {
          headers: ["", "UX design", "UI design"],
          rows: [
            ["Main question", "Does this work for people?", "Is this clear, consistent and pleasant to use?"],
            ["Typical outputs", "Research findings, flows, wireframes, prototypes", "Final screens, components, design system"],
            ["Measured by", "Task success, drop-off, support requests", "Consistency, accessibility, visual clarity"],
            ["Common tools", "Research tools, whiteboards, Figma prototypes", "Figma, design tokens, component libraries"],
          ],
        },
      },
      {
        heading: "Where they overlap",
        body: [
          "The line is blurry in practice. A confusing button label is a UX problem and a UI problem. A layout that hides a key action affects both. That's why many teams hire product designers who work across both, and why a good UI designer still thinks about flows and a good UX designer still cares how things look.",
          "Product design is a broader role again, adding business goals and product strategy. See [[/blogs/product-design-vs-ux-design|product design vs UX design]].",
        ],
      },
      {
        heading: "Which does your project need?",
        body: [
          "If people can't find things, abandon tasks halfway or keep contacting support with the same question, start with UX. If the product works well but looks dated or inconsistent, UI work may be enough. New products need both. When briefing an agency, saying which problem you have saves everyone time; our guide on [[/blogs/how-to-choose-a-ui-ux-design-agency|choosing a UI/UX design agency]] covers the rest.",
        ],
        cta: { title: "Need UX, UI or both?", description: "We'll help you work out which, and design it. See our [[/services/ui-ux-design|UI/UX design service]]." },
      },
    ],
  },
  {
    slug: "crm-automation-guide",
    title: "CRM automation: what to automate and how to start",
    seoTitle: "CRM Automation Guide: What to Automate and How to Start",
    excerpt:
      "A practical guide to CRM automation: lead capture and routing, follow-ups, data hygiene and where AI helps, with the guardrails that keep it reliable.",
    category: "AI & Automation",
    banner: "integration",
    sceneKind: "crm",
    date: "2026-10-04",
    readingTime: "9 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["real-estate", "professional-services", "b2b-enterprise"],
    relatedSlugs: ["crm-website-integration", "business-process-automation", "how-to-choose-an-ai-automation-agency"],
    faqs: [
      { q: "What is CRM automation?", a: "Using rules, integrations and sometimes AI to handle repetitive CRM work automatically: capturing leads, assigning them, sending follow-ups, updating records and creating tasks." },
      { q: "What should we automate first in our CRM?", a: "Usually lead capture and routing: getting every enquiry from forms, WhatsApp, calls and marketplaces into the CRM, assigned to the right person quickly." },
      { q: "Where does AI help in CRM automation?", a: "In steps that involve reading or writing text: summarising enquiries, extracting details from emails, classifying intent, drafting replies for review and flagging records that need attention." },
      { q: "Can CRM automation work with WhatsApp?", a: "Yes, through the WhatsApp Business Platform and an approved provider. Messages need opt-in and approved templates for outbound contact." },
      { q: "What are the risks of CRM automation?", a: "Duplicate records, messages sent to the wrong person, and silent failures when an integration breaks. Deduplication rules, approval steps for customer messages and failure alerts reduce them." },
      { q: "Do we need a new CRM to automate?", a: "Rarely. Most popular CRMs support automation and integrations. Fix data quality and process first; switching CRMs is a separate decision." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "CRM automation means letting rules, integrations and, where useful, AI handle the repetitive parts of managing leads and customers. Start with lead capture and routing so no enquiry is missed, then automate follow-up reminders, record updates and data hygiene. Use AI for reading and summarising messy text, keep a person in the loop for customer-facing messages, and set alerts for when an integration fails.",
        ],
      },
      {
        heading: "Why CRMs drift out of date",
        body: [
          "Most CRMs fail quietly. Enquiries arrive through website forms, WhatsApp, phone calls, email and marketplaces, and someone copies them in by hand when they have time. Follow-ups depend on memory. Records go stale, duplicates pile up, and reports stop reflecting reality.",
          "Automation fixes the plumbing so the CRM stays accurate without anyone having to remember to update it.",
        ],
      },
      {
        heading: "What to automate, in order",
        body: [],
        checklist: [
          "**Lead capture**: forms, WhatsApp, call tracking, email and marketplace enquiries flow straight into the CRM",
          "**Deduplication**: match on phone number and email before creating new records",
          "**Routing**: assign by service, location, language or deal size, with a fallback owner",
          "**Speed-to-lead alerts**: notify the owner instantly and escalate if nobody responds",
          "**Follow-up tasks**: create reminders based on stage and last contact",
          "**Record updates**: sync orders, payments and support tickets back to the contact",
          "**Reporting**: scheduled pipeline and source reports without manual exports",
        ],
      },
      {
        heading: "Where AI helps, and where it doesn't",
        body: [
          "Rules handle most CRM automation well: if a field says X, assign to Y. AI is useful where the input is free text: summarising a long enquiry, pulling budget and timeline out of an email, classifying intent, or drafting a reply for a salesperson to review.",
          "It is less suitable for deciding things that should follow clear rules, like pricing or eligibility, and it shouldn't send customer messages unreviewed until it has a track record. For the wider choice, see [[/blogs/rpa-vs-ai-automation|RPA vs AI automation]].",
        ],
      },
      {
        heading: "Common Indian setups",
        body: [
          "For many Indian businesses, WhatsApp is the main enquiry channel, so connecting the WhatsApp Business Platform to the CRM is often the highest-value step. Others are capturing leads from property portals or marketplaces, tracking calls from ads, and syncing payment status from UPI or payment gateways. Contact data is personal data under the DPDP Act, so collect consent, limit access and keep only what you need.",
        ],
        callout: { type: "note", text: "Outbound WhatsApp messages require customer opt-in and approved templates. Build these rules into the automation rather than relying on people to remember them." },
      },
      {
        heading: "Guardrails that keep it reliable",
        body: [],
        checklist: [
          "Alerts when an integration fails or volumes drop suddenly",
          "Approval steps before automated messages go to customers",
          "A log of what each automation changed, and when",
          "A named owner for every workflow",
          "A monthly review of duplicates, unassigned leads and stale records",
        ],
      },
      {
        heading: "Getting started",
        body: [
          "Map where enquiries come from today and how long they take to reach a person. That single measure, time to first response, usually shows the value of automation clearly. Fix capture and routing first, measure again, then expand. If you plan to bring in help, our guide on [[/blogs/how-to-choose-an-ai-automation-agency|choosing an AI automation agency]] covers what to ask.",
        ],
        cta: { title: "Leads slipping through the cracks?", description: "We connect forms, WhatsApp and your CRM so every enquiry is captured and routed. See our [[/services/ai-automation|AI automation service]]." },
      },
    ],
  },
];
