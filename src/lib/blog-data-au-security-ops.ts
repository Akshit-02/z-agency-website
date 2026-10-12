import type { BlogPost } from "./blog-data";

/**
 * Batch 161–180 security trio: web application penetration testing
 * (educational; ZSpace does not offer specialist penetration testing), cyber
 * incident response planning for Australian organisations, and API security
 * best practices (generic, based on the OWASP API Security Top 10 2023).
 * Differentiated from website-security-australia (operating a site, mapped to
 * the Essential Eight) and secure-web-application-development-australia
 * (build-time checklist). Australian decisions covered: ASD's cyber incident
 * response plan guidance and reporting channels, the Notifiable Data
 * Breaches scheme, ransomware payment reporting, SOCI Act incident reporting
 * for critical infrastructure, and the need for written authorisation before
 * testing.
 * Sources checked 2026-10-09: ASD's ACSC (incident response plan guidance,
 * contact and reporting pages, SOCI reporting via search summaries); OAIC NDB
 * pages and 2025 statistics; Home Affairs ransomware payment reporting
 * factsheet; OWASP API Security Top 10 2023 (via the OWASP project page and
 * secondary summaries); OWASP Web Security Testing Guide; RFC 9700; CREST
 * (secondary, no ASD endorsement claimed). No figure here is ZSpace client
 * data.
 */
export const auSecurityOpsPosts: BlogPost[] = [
  {
    slug: "web-application-penetration-testing-australia",
    title: "Web Application Penetration Testing in Australia: What It Is, How to Scope It and What to Expect",
    seoTitle: "Web Application Penetration Testing in Australia",
    excerpt:
      "Web application penetration testing in Australia: pen test vs scan vs QA, scope, written authorisation, preparation, reports, remediation and retesting.",
    category: "Web Development",
    banner: "secauditflow",
    sceneKind: "security",
    bannerAlt: "A penetration test moving from scoping and written authorisation through testing of a web application, to a report of findings, remediation and retesting",
    date: "2026-10-09",
    readingTime: "7 min read",
    relatedServiceSlugs: ["website-development"],
    relatedIndustrySlugs: ["fintech", "healthcare-healthtech", "saas-technology", "insurtech", "ecommerce"],
    relatedSlugs: ["secure-web-application-development-australia", "website-security-australia", "ecommerce-security-audit"],
    faqs: [
      {
        q: "What is a web application penetration test?",
        a: "A penetration test is an authorised, time-boxed attempt by skilled testers to find and exploit security weaknesses in an application, the way an attacker might, within an agreed scope and rules. The output is a report of findings with evidence, risk ratings and remediation advice. It shows what the testers found in that period, not that no other weaknesses exist.",
      },
      {
        q: "How is a penetration test different from a vulnerability scan?",
        a: "A vulnerability scan is an automated check for known issues, such as outdated software or common misconfigurations, and can run often. A penetration test is led by people who chain weaknesses together, test business logic and authorisation, and verify what can actually be exploited. Scans are useful between tests; they do not replace them for applications handling sensitive data.",
      },
      {
        q: "Does ZSpace Labs do penetration testing?",
        a: "No. ZSpace Labs builds and maintains web and mobile applications and can fix issues found in a test, but we do not offer specialist penetration testing. We recommend engaging an independent testing firm so the test is separate from the team that built the software. This article is educational.",
      },
      {
        q: "Do we need written permission to test our own application?",
        a: "You need clear written authorisation from whoever owns and operates every system in scope, including hosting and third-party services where their terms require it. Unauthorised access to computer systems can be an offence, and cloud and SaaS providers have their own testing policies. Testers should not start without a signed authorisation and agreed rules of engagement.",
      },
      {
        q: "How often should we test?",
        a: "Commonly before launching an application that handles sensitive data or payments, after major changes, and periodically, often annually, for high-risk systems, with automated scanning in between. Customer contracts, regulators or industry standards may set their own requirements, so check those first.",
      },
      {
        q: "What is CREST?",
        a: "CREST is an international not-for-profit body that accredits security testing companies and certifies individual testers through practical examinations, with a chapter for Australia and New Zealand. Some buyers ask for CREST-accredited testers. It is one indicator of capability; still check the testers' experience with applications like yours and the quality of a sample report.",
      },
    ],
    content: [
      {
        heading: "What is web application penetration testing?",
        body: [
          "**A web application penetration test is an authorised, time-boxed attempt by skilled testers to find and exploit weaknesses in your application within an agreed scope, producing a report of verified findings, risk ratings and fixes.** It differs from an automated vulnerability scan, which checks for known issues, and from QA, which checks that features work as intended. A clean test does not prove an application is secure; it shows what was found by those testers, in that scope, at that time.",
          "This guide is for Australian businesses commissioning a test for a customer portal, SaaS product, booking system or other web application. It explains the types of testing, how to scope a test, authorisation, preparation, what testers examine, reports, remediation and retesting. If you are commissioning a test for a [[/blogs/customer-portal-development-australia|customer portal]] or [[/blogs/payment-gateway-integration-australia|payment integration]], scope those journeys explicitly.",
          "**Disclosure:** ZSpace Labs does not offer specialist penetration testing. We build applications and fix issues found by independent testers. For the build-time security baseline, see [[/blogs/secure-web-application-development-australia|building a secure customer-facing web application]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Penetration testing, vulnerability scanning and QA answer different questions; you usually need all three.",
          "Scope by application, environments, user roles and APIs, and say what is out of scope.",
          "Get written authorisation from every owner of systems in scope, and check cloud and SaaS testing policies.",
          "Prepare test accounts for each role, a stable environment and contacts for incidents during testing.",
          "Expect findings with evidence, risk ratings and fixes, not a pass or fail certificate.",
          "Fix, then retest. Track remediation like any other work.",
          "Use an independent tester, separate from the team that built the software.",
        ],
      },
      {
        heading: "Penetration test vs vulnerability scan vs QA",
        body: [],
        table: {
          headers: ["", "Penetration test", "Vulnerability scan", "QA testing"],
          rows: [
            ["**Question answered**", "What can an attacker actually do?", "Are known weaknesses present?", "Do features work as intended?"],
            ["**Who or what**", "Skilled testers, tools as support", "Automated tools", "Testers and automated tests"],
            ["**Strengths**", "Business logic, authorisation, chained issues", "Frequent, broad, cheap", "Functional correctness"],
            ["**Limits**", "Time-boxed snapshot", "Misses logic flaws; false positives", "Not designed to find attacks"],
            ["**Typical frequency**", "Before launch, after major change, periodically", "Continuously or weekly", "Every release"],
          ],
        },
      },
      {
        heading: "Types of testing",
        body: [
          "**Black box** testers start with no inside knowledge, like an external attacker. **Grey box** testers get user accounts and some documentation, which is usually the most efficient for web applications because it lets them test authorisation between roles. **White box** testing adds source code access and architecture review. Many tests also cover the APIs behind the application; see [[/blogs/api-security-best-practices|API security best practices]]. Methodologies such as the OWASP Web Security Testing Guide describe what a thorough web test covers ([[https://owasp.org/www-project-web-security-testing-guide/|OWASP WSTG]]).",
        ],
      },
      {
        heading: "Scoping the test",
        body: [],
        checklist: [
          "Application URLs, environments (production or a production-like staging) and versions.",
          "User roles to test, with a test account for each, including administrators and different tenants.",
          "APIs, mobile app backends and third-party integrations in scope.",
          "Out of scope: denial of service, social engineering or physical testing unless explicitly agreed.",
          "Testing windows, rate limits and systems that must not be disrupted.",
          "Data handling: what testers may access and how they protect and delete it.",
          "Deliverables: report format, severity scheme, a debrief and a retest.",
        ],
      },
      {
        heading: "Authorisation and rules of engagement",
        body: [
          "Testing without permission can be unlawful, even against systems you use. Before testing starts, have a signed authorisation from the owner of each system in scope, and check the testing policies of your cloud host and any SaaS components; some require notice or restrict certain tests. Agree rules of engagement: dates and times, source IP addresses, contacts on both sides, what happens if testers find a critical issue or evidence of an existing compromise, and how to stop testing quickly.",
        ],
      },
      {
        heading: "Preparing for the test",
        body: [],
        checklist: [
          "A stable environment with realistic, non-production data where possible.",
          "Test accounts for each role and tenant, with sample data.",
          "Architecture overview, API documentation and a list of recent changes.",
          "Monitoring and alert owners informed, so testing is not mistaken for an attack (or so you can see whether alerts fire).",
          "Backups confirmed for any environment that will be tested.",
          "A named technical contact available during testing.",
        ],
      },
      {
        heading: "What testers typically examine",
        body: [
          "A web application test commonly covers authentication and session handling, authorisation between users, roles and tenants, input handling and injection, business logic (for example, changing prices or skipping approval steps), file uploads, configuration and security headers, error handling and information leakage, and dependencies with known vulnerabilities. The OWASP Top 10:2025 lists the most critical web application risk categories, with broken access control first ([[https://top10.owasp.org/2025/0x00_2025-Introduction|OWASP]]).",
        ],
      },
      {
        heading: "Reports, remediation and retesting",
        body: [
          "A useful report has an executive summary, the scope and method, and for each finding: description, evidence, affected components, risk rating with reasoning, and specific remediation advice. Ask for a debrief with your developers.",
          "Then fix in priority order, starting with critical and high findings, and fix root causes, such as a missing authorisation check in a shared function, rather than single instances. Ask the tester to retest fixed findings and update the report. Track remediation dates; findings that sit open for months are a common audit problem.",
        ],
        callout: {
          type: "note",
          text: "If testers find evidence that the application has already been compromised, treat it as an incident: follow your incident response plan, preserve evidence and assess whether the Notifiable Data Breaches scheme applies. See [[/blogs/cyber-incident-response-plan-australia|cyber incident response planning]].",
        },
      },
      {
        heading: "Choosing a testing provider",
        body: [],
        checklist: [
          "Experience testing applications like yours (SaaS, payments, health data, APIs).",
          "Named testers and their qualifications; some buyers ask for CREST-accredited firms or certified testers.",
          "A sample report with client details removed.",
          "Clear methodology, rules of engagement and data handling.",
          "Independence from the team that built the software.",
          "Retesting included or priced.",
          "Where testers are located and how they handle your data, especially personal information (APP 8 may apply). For general supplier checks, see [[/blogs/web-development-company-australia|choosing a web development company in Australia]].",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Treating a vulnerability scan report as a penetration test.",
          "Scoping only the public pages and not authenticated roles or APIs.",
          "Testing without written authorisation or checking host policies.",
          "Fixing individual findings but not the shared cause.",
          "No retest, so fixes are never verified.",
          "Presenting a test report as proof the application is secure.",
        ],
      },
      {
        heading: "Related guides",
        body: [
          "For building securely in the first place, see [[/blogs/secure-web-application-development-australia|secure web application development]]. For operating a site safely, see [[/blogs/website-security-australia|website security for Australian small businesses]]. For stores, [[/blogs/ecommerce-security-audit|ecommerce security audit]] covers pre-test reviews.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "[[https://owasp.org/www-project-web-security-testing-guide/|OWASP Web Security Testing Guide]]; [[https://top10.owasp.org/2025/0x00_2025-Introduction|OWASP Top 10:2025]]; [[https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information|OAIC, APP 8]].",
          "Tables and checklists are ours. Nothing here is legal advice. ZSpace Labs does not provide penetration testing services.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A penetration test is a valuable, time-boxed look at your application through an attacker's eyes. Scope it around real roles, data and APIs, authorise it properly, prepare your environment, insist on evidence-based findings, fix root causes and retest. Combine it with secure development and regular scanning, and never treat a single report as proof of security.",
        ],
        cta: {
          title: "Need help fixing findings from a test?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|secure web applications]]. We do not perform penetration tests, but we can help your team remediate findings and build security into delivery.",
        },
      },
    ],
  },
  {
    slug: "cyber-incident-response-plan-australia",
    title: "Cyber Incident Response Planning for Australian Businesses: Roles, Steps and Reporting",
    seoTitle: "Cyber Incident Response Planning in Australia",
    excerpt:
      "How Australian businesses plan for cyber incidents: roles, escalation, backups, communications, evidence, recovery, lessons learned and reporting obligations.",
    category: "Web Development",
    banner: "threatflow",
    sceneKind: "security",
    bannerAlt: "An incident response cycle of preparation, detection, containment, eradication, recovery and lessons learned, with escalation, communications and reporting points",
    date: "2026-10-09",
    readingTime: "7 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["professional-services", "healthcare-healthtech", "retail", "fintech", "manufacturing"],
    relatedSlugs: ["website-security-australia", "web-application-penetration-testing-australia", "ai-agent-incident-response"],
    faqs: [
      {
        q: "What is a cyber incident response plan?",
        a: "A cyber incident response plan sets out how your organisation will prepare for, detect, respond to and recover from cyber security incidents: who decides, who does what, how you escalate, how you communicate, how you preserve evidence, and which reporting obligations you check. ASD publishes guidance and a template that small and medium businesses can adapt.",
      },
      {
        q: "Who should we contact during a cyber incident in Australia?",
        a: "ASD's Australian Cyber Security Centre offers incident reporting at cyber.gov.au/report and a 24/7 hotline, 1300 CYBER1 (1300 292 371). Also contact your IT and software providers, your cyber insurer if you have one, and legal advisers. Cybercrime reports made to ASD are referred to state or territory police. Check current contact details on cyber.gov.au.",
      },
      {
        q: "Do we have to report a data breach?",
        a: "If your business is covered by the Privacy Act and an eligible data breach occurs, likely to result in serious harm to individuals, you must notify affected individuals and the OAIC. If you suspect one, you must take reasonable steps to assess it, generally within 30 days. Other obligations may apply, such as ransomware payment reporting or sector rules. Get advice for your situation.",
      },
      {
        q: "Do we have to report a ransomware payment?",
        a: "Under the Cyber Security Act 2024, businesses with annual turnover over A$3 million, and responsible entities for critical infrastructure assets, must report a ransomware or cyber extortion payment to ASD within 72 hours of making it or becoming aware it was made. Paying is not generally prohibited, but the government strongly discourages it, and other laws such as sanctions may apply.",
      },
      {
        q: "How often should we test our incident response plan?",
        a: "Run a tabletop exercise at least annually and after significant changes to systems, suppliers or staff, walking through realistic scenarios such as ransomware, a compromised email account or a data leak from a supplier. Test backup restoration separately and regularly. Update the plan with what you learn.",
      },
      {
        q: "What should we not do during an incident?",
        a: "Avoid wiping or rebuilding affected systems before preserving evidence, communicating with attackers without advice, making public statements before facts are established, using possibly compromised email to coordinate, and paying a ransom without legal, insurance and law enforcement input. Follow the plan, keep a log of actions and decisions, and escalate early.",
      },
    ],
    content: [
      {
        heading: "What should an Australian incident response plan cover?",
        body: [
          "**An incident response plan should say who leads and decides, how incidents are detected and escalated, how to contain damage while preserving evidence, how to restore from backups, how to communicate with staff, customers and partners, which reporting obligations to check, and how to learn from what happened.** In Australia, those checks typically include the Notifiable Data Breaches scheme, ransomware payment reporting for larger businesses, sector rules such as the SOCI Act, and contacting ASD's ACSC for help.",
          "This guide is for owners and managers of Australian small and medium businesses, and for the IT and software providers who support them. It covers preparation, roles, escalation, backups, communications, evidence, recovery and lessons learned. Every incident is different; use this as a planning framework and verify obligations with official sources or qualified advisers.",
          "ASD publishes cyber incident response plan guidance and a template that this article complements ([[https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/publications/cyber-incident-response-plan|ASD's ACSC]]). For preventive controls, see [[/blogs/website-security-australia|website security for Australian small businesses]] and [[/blogs/secure-web-application-development-australia|secure web application development]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Write the plan before you need it, and keep a printed or offline copy.",
          "Name an incident lead, a decision-maker and deputies, with out-of-hours contacts.",
          "Define what counts as an incident and when to escalate.",
          "Contain without destroying evidence; keep a timeline of actions.",
          "Keep backups separate from production and test restores regularly.",
          "Know your possible reporting obligations: NDB, ransomware payments, sector rules.",
          "Practise with tabletop exercises and update the plan afterwards.",
        ],
      },
      {
        heading: "Preparation: the plan and the people",
        body: [],
        table: {
          headers: ["Role", "Responsibilities"],
          rows: [
            ["**Incident lead**", "Coordinates the response, keeps the timeline, calls meetings"],
            ["**Decision-maker**", "Approves major decisions: shutdowns, notifications, external help, payments"],
            ["**Technical lead**", "Investigation, containment and recovery, with internal IT or providers"],
            ["**Communications lead**", "Staff, customer, partner and media messages, approved by the decision-maker"],
            ["**Privacy and legal**", "Assess breach obligations; engage lawyers and insurers"],
            ["**Providers**", "Hosting, software, managed IT and payment providers, with contacts and contract terms"],
          ],
        },
      },
      {
        heading: "Detection and escalation",
        body: [
          "Define what staff should report and how: suspicious emails clicked, unexpected password resets, unusual payments, ransom notes, customer reports of strange messages, security alerts from tools or providers. Make reporting easy and blame-free.",
          "Set escalation triggers: for example, any suspected access to personal information, any ransomware, any payment redirection, or any system outage with an unknown cause goes to the incident lead immediately. Classify incidents by severity so the response matches the impact.",
        ],
      },
      {
        heading: "Containment, evidence and eradication",
        body: [],
        checklist: [
          "Isolate affected devices or accounts from the network rather than wiping them.",
          "Reset compromised credentials and revoke sessions and API keys, starting with administrators.",
          "Preserve logs, emails, ransom notes and system images where possible, and record who did what and when.",
          "Use a separate, trusted communication channel if email or chat may be compromised.",
          "Check suppliers and integrations that could be affected or be the source.",
          "Remove the attacker's access and the cause (for example, an unpatched system) before restoring.",
          "Get specialist incident response help for anything beyond your team's experience.",
        ],
        callout: {
          type: "tip",
          text: "Our recommendation: keep a simple incident log template ready (time, action, person, outcome). In the first hours people forget what they did, and that record matters for investigation, insurers and regulators.",
        },
      },
      {
        heading: "Backups and recovery",
        body: [
          "Recovery depends on backups that attackers cannot reach and that you have restored before. Keep backups separate from production (offline or immutable where possible), protect backup accounts with MFA, and test restores regularly against agreed recovery objectives. During recovery, restore from known-good backups, rebuild compromised systems rather than cleaning them where possible, patch the entry point, and monitor closely for the attacker returning. Backups are one of ASD's Essential Eight strategies.",
        ],
      },
      {
        heading: "Communications",
        body: [
          "Prepare holding statements in advance for staff, customers and partners (an AI-drafted statement still needs human approval; see [[/blogs/ai-governance-australia|AI governance]]). Communicate facts you have verified, what you are doing and what people should do (for example, watch for phishing that uses their details). Do not speculate. Coordinate with legal advisers and insurers before public statements. If customer data is involved, notifications under the NDB scheme have specific content requirements.",
        ],
      },
      {
        heading: "Reporting obligations to check",
        body: [
          "Obligations depend on your business and the incident. Check each, and get advice.",
        ],
        table: {
          headers: ["Obligation", "Who it applies to", "Key requirement"],
          rows: [
            ["**Notifiable Data Breaches**", "Organisations covered by the Privacy Act", "Assess suspected eligible breaches (generally within 30 days); notify the OAIC and affected individuals if serious harm is likely ([[https://www.oaic.gov.au/privacy/notifiable-data-breaches/about-the-notifiable-data-breaches-scheme|OAIC]])"],
            ["**Ransomware payment reporting**", "Businesses with turnover over A$3 million; critical infrastructure entities", "Report a ransomware or extortion payment to ASD within 72 hours ([[https://www.homeaffairs.gov.au/cyber-security-subsite/files/factsheet-ransomware-payment-reporting.pdf|Home Affairs]])"],
            ["**SOCI Act incident reporting**", "Responsible entities for critical infrastructure assets", "Report critical incidents with a significant impact within 12 hours, and other incidents with a relevant impact within 72 hours"],
            ["**Sector and contract rules**", "For example, financial services, health, government suppliers", "Regulator notifications, customer contract notices, insurer conditions"],
            ["**Reporting to ASD**", "Anyone", "Voluntary reporting and free advice via cyber.gov.au/report or 1300 CYBER1 ([[https://www.cyber.gov.au/about-us/about-asd-acsc/contact-us|ASD's ACSC]])"],
          ],
        },
        callout: {
          type: "note",
          text: "This table summarises obligations for planning purposes as at October 2026. It is not legal advice. Thresholds, timeframes and exemptions matter, so confirm your position with the OAIC, Home Affairs, CISC, your regulator and your lawyers.",
        },
      },
      {
        heading: "Lessons learned",
        body: [
          "After every significant incident, and after exercises, hold a blameless review: what happened, what worked, what did not, and what will change. Turn findings into tracked actions with owners and dates (a [[/blogs/web-application-penetration-testing-australia|penetration test]] can verify fixes for application weaknesses), such as enabling MFA on a missed system, improving logging or updating supplier contracts. Update the plan, contacts and playbooks.",
        ],
      },
      {
        heading: "Practising: tabletop exercises",
        body: [],
        checklist: [
          "Ransomware encrypts the file server on a Friday evening.",
          "A staff email account is compromised and sends fake invoices to customers.",
          "A supplier tells you a database containing your customers' details was exposed.",
          "Your website is defaced or redirects to a scam page.",
          "An AI tool or agent takes an unintended action with customer data; see [[/blogs/ai-agent-incident-response|AI agent incident response]].",
        ],
      },
      {
        heading: "Software and supplier readiness",
        body: [
          "Your software and IT providers are part of the response. Make sure contracts state incident notification timeframes, cooperation, access to logs and support hours; that your business owns admin accounts and can revoke supplier access; and that applications produce the logs investigators need. See [[/blogs/software-maintenance-contracts-australia|software maintenance contracts]] and [[/blogs/application-monitoring-observability|application monitoring and observability]].",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "No plan, or a plan nobody has read.",
          "Contacts that are out of date or only stored on the systems that are down.",
          "Wiping systems before preserving evidence.",
          "Backups on the same network and credentials as production.",
          "Public statements before facts are known.",
          "No review afterwards, so the same gaps remain.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**ASD:** [[https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/publications/cyber-incident-response-plan|ASD's ACSC, cyber incident response plan guidance]]; [[https://www.cyber.gov.au/about-us/about-asd-acsc/contact-us|ASD's ACSC, contact and reporting]].",
          "**Obligations:** [[https://www.oaic.gov.au/privacy/notifiable-data-breaches/about-the-notifiable-data-breaches-scheme|OAIC, about the NDB scheme]]; [[https://www.homeaffairs.gov.au/cyber-security-subsite/files/factsheet-ransomware-payment-reporting.pdf|Home Affairs, ransomware payment reporting factsheet]]; [[https://www.cisc.gov.au/|Cyber and Infrastructure Security Centre]].",
          "SOCI timeframes and some ASD details were confirmed via search summaries of official pages. Tables, checklists and scenarios are ours. Nothing here is legal advice or ZSpace client data.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Good incident response is mostly preparation: a short plan people know, clear roles, tested backups, ready communications and a list of obligations to check. When something happens, contain carefully, preserve evidence, get help early, including from ASD, and learn from it afterwards. Verify your reporting obligations with official sources or advisers rather than assuming.",
        ],
        cta: {
          title: "Want your applications ready for an incident?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|secure, well-logged web applications]]. We are not an incident response provider, but we can help make your software easier to investigate and recover.",
        },
      },
    ],
  },
  {
    slug: "api-security-best-practices",
    title: "API Security Best Practices: Authentication, Authorisation and the OWASP API Top 10",
    seoTitle: "API Security Best Practices: A Practical Checklist",
    excerpt:
      "API security best practices: authentication, object and function authorisation, tokens, rate limits, validation, secrets, logging, inventory and lifecycle.",
    category: "Web Development",
    banner: "apimap",
    sceneKind: "security",
    bannerAlt: "An API request passing through authentication, authorisation checks on objects and functions, rate limiting, input validation and logging before reaching data",
    date: "2026-10-09",
    readingTime: "7 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["fintech", "saas-technology", "ecommerce", "healthcare-healthtech"],
    relatedSlugs: ["secure-web-application-development-australia", "api-integration-australia", "ecommerce-api-gateway"],
    faqs: [
      {
        q: "What is the most common API security problem?",
        a: "Broken object level authorisation, ranked first in the OWASP API Security Top 10 2023. It happens when an API returns or changes a record without checking that the caller is allowed to access that specific record, for example by changing an ID in the request. Every endpoint that takes an object identifier needs a server-side ownership or permission check.",
      },
      {
        q: "Are API keys enough to secure an API?",
        a: "Usually not on their own. API keys identify an application, not a user, and are easily leaked if embedded in front-end code or mobile apps. Use OAuth 2.0 or OpenID Connect for user-level access, short-lived tokens, and authorisation checks per object and function. Keep API keys for server-to-server use, scoped narrowly and stored in a secrets manager.",
      },
      {
        q: "Do internal APIs need the same security?",
        a: "Yes, mostly. Internal networks are not a reliable boundary: attackers who gain a foothold move between services, and 'internal' APIs often become exposed through integrations or mobile apps. Authenticate service-to-service calls, authorise them, and log them. The OWASP API Top 10 includes improper inventory management because forgotten or internal APIs are a common weakness.",
      },
      {
        q: "How should rate limiting work?",
        a: "Apply limits per client, user and endpoint, with stricter limits on expensive or sensitive operations such as login, password reset, search and exports. Return clear responses when limits are hit, and monitor for patterns such as credential stuffing or scraping. Limits protect availability and cost as well as security.",
      },
      {
        q: "How do we secure third-party APIs we consume?",
        a: "Treat their responses as untrusted input: validate data, set timeouts, handle errors safely, and do not blindly follow redirects. Store their credentials securely with the minimum permissions. Unsafe consumption of APIs is in the OWASP API Top 10 because attackers can target the weaker third party to reach you.",
      },
      {
        q: "Can an API gateway secure our APIs for us?",
        a: "A gateway helps with authentication, rate limiting, logging and routing in one place, but it cannot know whether a user may access a specific record or perform a specific business action. Object and function authorisation must still be enforced in the services that own the data.",
      },
    ],
    content: [
      {
        heading: "What are the most important API security practices?",
        body: [
          "**Authenticate every caller, authorise every object and function on the server, use short-lived tokens, validate input and limit what responses expose, rate-limit by client and endpoint, keep secrets out of code, log and monitor access, keep an inventory of every API version, and treat third-party APIs as untrusted.** The OWASP API Security Top 10 2023 is a good checklist of where APIs commonly fail, starting with broken object level authorisation.",
          "This guide is for developers, architects and product owners building or buying APIs for web apps, [[/blogs/mobile-app-backend-development|mobile app backends]], integrations and partners. It complements [[/blogs/secure-web-application-development-australia|building a secure customer-facing web application]] and [[/blogs/api-integration-australia|API integration for Australian businesses]].",
          "No API can be made perfectly secure. These practices reduce risk; testing and monitoring show whether they work.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Check, on the server, that the caller may access each specific object and function.",
          "Use OAuth 2.0 or OpenID Connect for user access; follow current OAuth security guidance.",
          "Return only the fields the client needs; never rely on clients to hide data.",
          "Rate-limit and set quotas by client, user and endpoint.",
          "Store secrets in a secrets manager; never in code, mobile apps or front-end bundles.",
          "Keep an inventory of APIs, versions and owners; retire old versions.",
          "Validate third-party API responses as untrusted input.",
        ],
      },
      {
        heading: "The OWASP API Security Top 10 (2023)",
        body: [
          "OWASP's API Security Top 10 2023 lists the most common API risk categories ([[https://api-security.owasp.org/editions/2023/en/0x11-t10|OWASP]]):",
        ],
        table: {
          headers: ["#", "Risk", "What it looks like"],
          rows: [
            ["API1", "Broken Object Level Authorization", "Changing an ID returns someone else's record"],
            ["API2", "Broken Authentication", "Weak token handling, credential stuffing, missing MFA for sensitive actions"],
            ["API3", "Broken Object Property Level Authorization", "Responses expose fields users should not see, or requests can set fields they should not change"],
            ["API4", "Unrestricted Resource Consumption", "No limits on requests, payload sizes or costly operations"],
            ["API5", "Broken Function Level Authorization", "Regular users can call admin functions"],
            ["API6", "Unrestricted Access to Sensitive Business Flows", "Automated abuse of purchasing, booking or sign-up flows"],
            ["API7", "Server Side Request Forgery", "The API fetches attacker-supplied URLs"],
            ["API8", "Security Misconfiguration", "Verbose errors, permissive CORS, missing TLS settings"],
            ["API9", "Improper Inventory Management", "Forgotten old versions or undocumented endpoints"],
            ["API10", "Unsafe Consumption of APIs", "Trusting third-party API data without validation"],
          ],
        },
      },
      {
        heading: "Authentication and tokens",
        body: [],
        checklist: [
          "Use OAuth 2.0 and OpenID Connect through a proven identity provider for user access; follow the OAuth 2.0 security best current practice ([[https://www.rfc-editor.org/rfc/rfc9700|RFC 9700]]).",
          "Use the authorisation code flow with PKCE for browser and mobile clients; avoid flows that expose tokens in URLs.",
          "Keep access tokens short-lived and scoped; rotate refresh tokens and detect reuse.",
          "Validate tokens fully on every request: signature, issuer, audience, expiry and scopes.",
          "Never put secrets in mobile apps or single-page apps; they can be extracted.",
          "Authenticate service-to-service calls with client credentials, mutual TLS or workload identity.",
          "Protect login, password reset and token endpoints with rate limits and monitoring.",
        ],
      },
      {
        heading: "Authorisation: objects, properties and functions",
        body: [
          "Most serious API breaches are authorisation failures. Enforce three levels on the server:",
        ],
        checklist: [
          "**Object level:** for every request that references an object, check that this caller may access this object (ownership, tenant, role).",
          "**Property level:** return only the fields the caller may see, using explicit response schemas; reject attempts to set fields the caller may not change (mass assignment).",
          "**Function level:** check the caller's role or permission for every operation, especially administrative and bulk actions.",
          "Centralise authorisation logic where possible so it is consistent, and test it with automated tests that try to access other users' and tenants' data.",
          "Unpredictable IDs help but are not a control; the check is the control.",
        ],
        callout: {
          type: "tip",
          text: "Our recommendation: add an automated test for every endpoint that calls it as a different user or tenant and expects a refusal. These tests catch the most common and most damaging API bug class before it ships.",
        },
      },
      {
        heading: "Input validation, output and errors",
        body: [
          "Validate requests against a schema: types, lengths, formats and allowed values. Reject unexpected fields. Use parameterised queries to prevent injection. Limit payload sizes and pagination. Return explicit response schemas so new database fields are not leaked by accident. Return generic error messages and log details privately; stack traces in responses help attackers. Configure CORS narrowly, only for origins that need it.",
        ],
      },
      {
        heading: "Rate limiting and abuse protection",
        body: [
          "Apply rate limits and quotas per client, user, IP and endpoint, with stricter limits on login, password reset, search, exports and costly operations, including AI calls. Protect sensitive business flows (bookings, purchases, account creation) against automation with limits, anomaly detection and, where appropriate, challenges. Limits protect cost and availability as well as security.",
        ],
      },
      {
        heading: "Secrets and dependencies",
        body: [
          "Store API keys, database credentials and signing keys in a secrets manager, give each the minimum permissions, rotate them, and scan repositories for leaks. Keep frameworks and libraries patched, pin versions and scan dependencies in CI; software supply chain failures are now third in the OWASP Top 10:2025 for web applications ([[https://top10.owasp.org/2025/0x00_2025-Introduction|OWASP]]).",
        ],
      },
      {
        heading: "Logging and monitoring",
        body: [
          "Log authentication events, authorisation failures, rate-limit hits, administrative actions and unusual access patterns, with request IDs that link across services. Do not log tokens, passwords or unnecessary personal information. Alert on spikes in authorisation failures, enumeration patterns and unusual data volumes. See [[/blogs/application-monitoring-observability|application monitoring and observability]].",
        ],
      },
      {
        heading: "Inventory and lifecycle",
        body: [
          "You cannot protect APIs you have forgotten. Maintain an inventory of every API, version, environment, owner and consumer, ideally generated from OpenAPI specifications. Version deliberately, publish deprecation timelines, monitor usage of old versions and remove them. Gateways help centralise some controls; see [[/blogs/ecommerce-api-gateway|API gateways]]. For APIs used by AI agents, see [[/blogs/apis-for-ai-agents|APIs for AI agents]]. Keep test and staging APIs away from production data and off the public internet where possible.",
        ],
      },
      {
        heading: "Consuming third-party APIs safely",
        body: [],
        checklist: [
          "Validate third-party responses as untrusted input.",
          "Use timeouts, retries with backoff and circuit breakers.",
          "Do not follow redirects or fetch URLs from responses without checks.",
          "Store their credentials securely with minimum scopes.",
          "Verify webhook signatures and handle replays; see [[/blogs/ecommerce-webhooks|webhook design]].",
          "Monitor their availability and error rates.",
        ],
      },
      {
        heading: "Australian notes",
        body: [
          "If your APIs handle personal information and your business is covered by the Privacy Act, APP 11 requires reasonable steps to protect it, and a breach may trigger the Notifiable Data Breaches scheme. APIs that send data to services overseas raise APP 8 questions. See [[/blogs/cyber-incident-response-plan-australia|cyber incident response planning]] for the reporting side.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Checking that a user is signed in but not that they own the record.",
          "Returning full database objects and filtering in the client.",
          "Long-lived tokens with broad scopes.",
          "API keys in mobile apps or JavaScript bundles.",
          "Old API versions left running and unmonitored.",
          "Relying on a gateway for authorisation decisions it cannot make.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "[[https://api-security.owasp.org/editions/2023/en/0x11-t10|OWASP API Security Top 10 2023]]; [[https://top10.owasp.org/2025/0x00_2025-Introduction|OWASP Top 10:2025]]; [[https://www.rfc-editor.org/rfc/rfc9700|RFC 9700, OAuth 2.0 security best current practice]]; [[https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-11-app-11-security-of-personal-information|OAIC, APP 11]].",
          "Checklists and tables are ours. Nothing here is a security certification or ZSpace client data.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "API security comes down to a few disciplines applied everywhere: authenticate properly, authorise every object and function on the server, expose only what is needed, limit abuse, protect secrets, log what matters and know every API you run. Test authorisation automatically, monitor continuously and treat third-party APIs with the same suspicion as user input. For documenting your API for partners, see [[/blogs/api-documentation-best-practices|API documentation best practices]]. For protecting the keys themselves, see [[/blogs/secrets-management|secrets management]]. For document and image uploads, see [[/blogs/secure-file-uploads|secure file uploads]].",
        ],
        cta: {
          title: "Building or reviewing APIs?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|secure APIs and integrations]] and [[/services/mobile-app-development|mobile app backends]]. If it would help to review your authorisation design, we are happy to talk it through.",
        },
      },
    ],
  },
];
