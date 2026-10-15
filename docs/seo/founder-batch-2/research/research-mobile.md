# Batch 2 research: mobile topics 25–28

Checked 14 Oct 2026. Facts reused from batch 1 (`docs/seo/founder-batch-1/research/research-mobile.md`) are marked "(batch 1)" and were not re-researched.

Limits of this pass:
- Reddit can't be reached directly, so one Reddit thread is cited through a redlib mirror.
- Search is US-only.
- Some Apple pages (the privacy-manifest docs and the HIG) render with JavaScript and come back empty through WebFetch. I read the HIG through Apple's JSON data endpoint (`developer.apple.com/tutorials/data/design/human-interface-guidelines/<page>.json`).
- I could not reach primary Indian government (MeitY, PIB, e-Gazette) or UAE text for the DPDP Rules and PDPL details. Those rows are labelled [Industry] and need checking before publication.

---

## Topic 25: Does your mobile app need a custom backend?

**1. Founder question and pain.** "Can we ship on Firebase or Supabase, or do we need our own backend? Will we regret it later?" The pain is fear of a rebuild, surprise bills, lock-in, and an investor or enterprise customer asking where the data lives.

**2. Intent and stage.** Commercial investigation, at mid-funnel. Founders ask this during scoping, after they've decided to build an app.

**3. Queries.**
- Primary: "does my app need a backend" / "firebase vs custom backend".
- Supporting:
  - "supabase vs firebase for mobile app"
  - "when to move off firebase"
  - "firebase vendor lock-in"
  - "backend as a service vs custom backend"
  - "firebase data location india"
  - "supabase region mumbai"
  - "do I need a server for my app"

**4. Demand evidence (moderate).**
- Indie Hackers, "Why would you not use Firebase?": https://www.indiehackers.com/post/why-would-you-not-use-firebase-2f5e49dcfc. Commenters say leaving Firebase is painful because of its data model.
- r/Firebase "Vendor lock in" (Mar 2025), seen through the mirror https://redlib.hackliberty.org/r/Firebase/comments/1jb18dn/vendor_lock_in. Commenters say auth, storage and security rules are tied together, so leaving means rewriting several layers. The original is reddit.com/r/Firebase/comments/1jb18dn, which I couldn't fetch.
- I found no dedicated recent HN "Ask HN" thread. The query has plenty of vendor and agency content, which suggests commercial demand.

**5. Existing ZSpace coverage.** `/blogs/mobile-app-backend-development` (640 words, in `blog-data-mobile-2.ts`):
- Sections: components (APIs, DB, auth, notifications, payments, admin, integrations), "What Different Apps Typically Need", and a short "Managed Services or Custom Backend" section.
- It has no external sources.
- It mentions account deletion and Sign in with Apple correctly.

What's missing:
- Any named BaaS facts (Firebase or Supabase capabilities and limits).
- A decision framework with explicit triggers for when BaaS stops fitting.
- Data location and residency.
- Exit and export paths.
- The cost-shape difference (per-operation versus per-instance).

Related pages: `/blogs/mobile-app-architecture` (629 words), `/blogs/scalable-mobile-app-development` (498 words) and `/blogs/rest-api-vs-graphql-mobile-apps`. Link to them, don't merge.

**6. SERP weaknesses.**
- https://www.anything.com/blog/mobile-app-backend-options-solo-developers and https://www.create.xyz/blog/mobile-app-backend-options-solo-developers are the same text on two domains. They're vendor content that pushes their own builder.
- https://netclues.com/blog/supabase-vs-firebase-baas-comparison-guide is a generic feature table with no residency or exit angle.
- https://metacto.com/blogs/supabase-competitors-alternatives-a-comprehensive-guide is a list, not a decision.
- https://site.cut-the-saas.com/guides/supabase-vs-firebase is opinionated, with no regional data-location facts.

Across all of them: nobody covers the India, UAE or Australia region availability, the Firestore location being immutable, or what an export actually contains.

**7. Qualified-buyer potential: High.** A founder at this point has budget and is choosing an architecture, which leads directly to a build engagement or a backend review.

**8. Format and original asset.** A decision guide with:
- A "BaaS fit test" table: 8–10 triggers (complex transactional logic, heavy relational reporting, long-running jobs, residency demands, multi-tenant B2B permissions, cost per read at scale, integrations, compliance audits), each mapped to "stay / add functions / hybrid / custom".
- A region-availability matrix for India, UAE, Australia, UK and Singapore across Firestore and Supabase, built from the verified facts below.
- An "exit plan" checklist: what you can export and what you'd have to rewrite.

**9. Service and CTA.** `/services/mobile-app-development`. CTA: "Get a backend architecture review before you commit."

**10. Recommendation: UPDATE `/blogs/mobile-app-backend-development`. I agree with your call.** The slug already owns "backend for a mobile app". Expand it to about 1,800–2,200 words around the managed-versus-custom decision, keeping the component overview as the second half. Keep app-versus-website and MVP scope out of it, as you said. Consider retitling it along the lines of "Mobile App Backend: Do You Need a Custom Backend or Is Firebase/Supabase Enough?"

**11. Facts an article would need**

| Claim | Source | Checked | Label |
|---|---|---|---|
| Once you provision a Firestore database, "you cannot change its location setting" | https://firebase.google.com/docs/firestore/locations | 14 Oct 2026 | [Vendor] |
| Firestore regional locations include asia-south1 (Mumbai), asia-south2 (Delhi), asia-southeast1 (Singapore), australia-southeast1 (Sydney), europe-west2 (London), me-central1 (Doha), me-central2 (Dammam) and me-west1 (Tel Aviv). No UAE region is listed | same | 14 Oct 2026 | [Vendor] |
| Firebase location guidance: you choose a location for Firestore, Realtime Database, Cloud Storage (per bucket), Cloud Functions (per function), App Hosting and Analytics reporting. Cloud Functions default to us-central1 if unset. "Some Firebase products … don't support location selection," but the page doesn't list them. Don't claim Auth or FCM are regional | https://firebase.google.com/docs/projects/locations | 14 Oct 2026 | [Vendor] |
| Supabase regions include ap-south-1 (Mumbai), ap-southeast-1 (Singapore), ap-southeast-2 (Sydney) and eu-west-2 (London). No Middle East region is listed. The page doesn't say whether a project's region can be changed | https://supabase.com/docs/guides/platform/regions | 14 Oct 2026 | [Vendor] |
| Firestore managed export writes files to a Cloud Storage bucket, needs the Blaze plan, is "not an exact database snapshot", costs one read per document exported, and can be loaded into BigQuery | https://firebase.google.com/docs/firestore/manage-data/export-import | 14 Oct 2026 | [Vendor] |
| Supabase backups are three `supabase db dump` commands (roles, schema, data). Storage objects are not in the dump and move with a separate script | https://supabase.com/docs/guides/platform/migrating-within-supabase/backup-restore | 14 Oct 2026 | [Vendor] |
| Self-hosted Supabase (Docker Compose) lacks branching, managed backups/PITR, advanced metrics, ETL and the Management API. It's community-supported, and you handle HA, scaling, security and updates | https://supabase.com/docs/guides/self-hosting | 14 Oct 2026 | [Vendor] |
| Firestore limits: max document size 1 MiB; transactions up to 270 s; composite indexes 200 without billing and 1,000 with billing; Security Rules allow 10 `get()`/`exists()` calls per single-doc request (20 for multi-doc) | https://firebase.google.com/docs/firestore/quotas | 14 Oct 2026 | [Vendor] |
| Supabase Edge Functions: 256 MB memory, 2 s CPU time, wall clock 150 s on Free and 400 s on paid plans, 150 s request idle timeout | https://supabase.com/docs/guides/functions/limits | 14 Oct 2026 | [Vendor] |
| Supabase Free tier and Firebase Spark/Blaze free-tier boundaries (no prices to be quoted, per brief) | supabase.com/pricing, firebase.google.com/pricing | (batch 1) | [Vendor] |
| India DPDP Rules 2025 (G.S.R. 846(E), 13 Nov 2025) are phased. Board provisions apply immediately, consent managers from about 13 Nov 2026, and most obligations, including Rule 15 (cross-border), from about 13 May 2027 | Secondary: https://ssrana.in/articles/meity-notifies-final-digital-personal-data-protection-rules-2025/ ; https://www.azbpartners.com/bank/indias-digital-personal-data-protection-act-phased-rollout-and-key-compliance-milestones/ | 14 Oct 2026 | [Industry]. **Unverified against MeitY or e-Gazette.** Sources differ by a day (13 or 14 Nov) |
| DPDP Act s.16 uses a negative-list approach: the Central Government may restrict transfers to notified countries, and there is no general localisation rule. s.16(2) preserves stricter sectoral rules (for example RBI). Rule 13(4) lets the government require localisation of specified data for Significant Data Fiduciaries | Secondary: https://ksandk.com/data-protection-and-data-privacy/cross-border-data-transfers-dpdp-act-india/ | 14 Oct 2026 | [Industry]. Verify against the Act text on meity.gov.in |
| UAE PDPL (Federal Decree-Law 45/2021) took effect 2 Jan 2022, covers electronic processing, and "sets out the requirements for the cross-border transfer"; the UAE Data Office is the regulator. DIFC has its own law (DIFC Law No. 5 of 2020) | https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws | 14 Oct 2026 | [Official] |
| UAE PDPL Executive Regulations: sources conflict on whether they've been issued | Secondary (Modulos, ConsentStack, Clym) | 14 Oct 2026 | **Unverified.** Say "check current status with UAE counsel" |
| Australia APP 8: steps an entity must take before disclosing personal information overseas | https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-quick-reference | 14 Oct 2026 | [Official] |
| BaaS fits standard CRUD, auth and realtime apps. Common triggers to move are complex server-side transactions, heavy relational reporting, long jobs beyond function limits, strict residency (for example UAE, which has no listed BaaS region), and per-operation cost at scale | Derived from the limits above | — | [Inference] |
| Firebase Data Connect (Postgres via Cloud SQL) as a lock-in mitigation | mentioned in Reddit thread | — | **Unverified**, don't state without checking firebase.google.com/docs/data-connect |

Regional note: the UAE is the only market where neither Firestore nor Supabase lists an in-country region. Firestore has Doha and Dammam nearby. If a UAE client needs in-country hosting, that points toward a custom backend on a cloud provider with a UAE region. That last step is [Inference]: I did not verify which hyperscalers have UAE regions in this pass.

---

## Topic 26: Privacy and security requirements before launching an app

**1. Founder question and pain.** "What do Apple and Google make us do on privacy before we can launch, and what will get us rejected?" The pain is rejection loops (ITMS-91053, missing account deletion), wrong Data safety answers leading to blocked updates, and SDKs collecting data the founder doesn't know about.

**2. Intent and stage.** Informational and practical, late-stage, from teams that are about to submit. Very close to purchase for teams without in-house mobile experience.

**3. Queries.**
- Primary: "app privacy requirements app store google play" / "app privacy checklist before launch".
- Supporting:
  - "privacy manifest required reason API"
  - "ITMS-91053"
  - "app store account deletion requirement"
  - "google play account deletion web link"
  - "data safety form"
  - "android photo picker policy"
  - "MASVS"

**4. Demand evidence (good, developer-heavy).**
- Apple Developer Forums on required-reason APIs: https://developer.apple.com/forums/thread/751216 and https://developer.apple.com/forums/thread/748271
- Many explainers on ITMS-91053, for example https://www.donnywals.com/how-to-add-a-privacy-manifest-file-to-your-app-for-required-reason-api-usage/ and https://bugfender.com/blog/apple-privacy-requirements/
- Tooling has appeared around it, such as the PyPI `xcprivacy` validator (https://pypi.org/project/xcprivacy/), which is a signal of real pain.
- I found no HN thread on this.

**5. Existing ZSpace coverage.**

`/blogs/mobile-app-data-privacy` (985 words, `blog-data-mobile-4.ts`, no sources) is good conceptually:
- It covers privacy versus security, data minimisation, permissions, SDKs and ATT.
- It states correctly that both stores require account deletion and that Google requires a web link.
- It mentions privacy manifests for "commonly used SDKs" only.

What's missing:
- Required-reason APIs and the ITMS-91053 failure mode.
- Apple's rule that deactivation alone isn't deletion, and the support-flow restriction.
- Sign in with Apple token revocation.
- That Data safety is required even for apps that collect no data, and that inaccurate declarations lead to blocked updates.
- The Play Photo and Video Permissions policy, which has been fully enforced since 28 May 2025.
- Android 13 POST_NOTIFICATIONS.
- MASVS-PRIVACY.
- Primary-source links.
- The legal paragraph lists laws but has no India DPDP Rules timeline.

`/blogs/mobile-app-security` (1,052 words) covers OWASP and MASVS conceptually. Keep it separate, as you said; add a cross-link.

**6. SERP weaknesses.**
- https://www.goodbarber.com/blog/mobile-app-privacy-checklist-what-to-prepare-before-submission-a1599/ has a useful "keep the app, policy and labels in sync" idea, but it's vendor content with no regional coverage.
- https://bugfender.com/blog/apple-privacy-requirements/ is Apple-only.
- https://development.capgo.app/blog/us-privacy-laws-mobile-app-checklist/ is US-only and has an unverified fine claim.
- https://www.thomashelbing.com/node/148 is GDPR-only.

None combines both stores with a founder-level checklist and India, UAE, AU, UK and SG notes.

**7. Qualified-buyer potential: Medium-high.** Teams near launch, and agencies inheriting apps, often need help with this.

**8. Format and original asset.** Update the article with a "Store privacy pre-flight" table: Apple versus Google, one row per requirement, with "what fails if you skip it". Add an SDK audit worksheet (SDK → data collected → manifest present? → Data safety row → App Privacy row). Keep the regional notes to five short bullets.

**9. Service and CTA.** `/services/mobile-app-development`. CTA: "Pre-submission privacy and store-compliance review".

**10. Recommendation: UPDATE `/blogs/mobile-app-data-privacy`. I agree, and I agree on not merging with security.** The security page answers "how do we protect data" and the privacy page answers "should we have it, and what must we declare". Put the store-requirements section near the top and expand to about 1,800–2,200 words. Mention MASVS only briefly here (MASVS-PRIVACY) and link to `/blogs/mobile-app-security` for the rest. Children's privacy needs one line only: Play's Families policy and Apple's Kids category apply if you target children. I did not verify that wording, so check it before publishing.

**11. Facts an article would need**

| Claim | Source | Checked | Label |
|---|---|---|---|
| Guideline 5.1.1(v): "If your app supports account creation, you must also offer account deletion within the app." Apps without significant account features should let people use them without login | https://developer.apple.com/app-store/review/guidelines/ | 14 Oct 2026 | [Official] |
| Apple: deletion must be initiated in-app; "only offering to temporarily deactivate or disable an account is insufficient"; a direct link to a web page is allowed if needed; apps outside highly regulated industries "should not require people to make a phone call, send an email…"; Sign in with Apple apps should revoke tokens through the REST API | https://developer.apple.com/support/offering-account-deletion-in-your-app/ | 14 Oct 2026 | [Official] |
| App Privacy details are required for new apps and updates, and include third-party partners' (SDK) collection. Apple's definition of "tracking" is quotable. Optional disclosure only applies if *all* criteria are met. Answers can be updated without an app update | https://developer.apple.com/app-store/app-privacy-details/ | 14 Oct 2026 | [Official] |
| Privacy manifests are required for listed commonly used SDKs (for example Firebase packages, Flutter, Alamofire, OneSignal) when a new app or update adds them. Signatures are required when they're binary dependencies. "You are responsible for all the code the SDK includes" | https://developer.apple.com/support/third-party-SDK-requirements/ | 14 Oct 2026 | [Official] |
| Required-reason APIs: uploads must include an approved reason in the privacy manifest "starting in spring 2024" (news post of 7 Dec 2023). The exact enforcement date was 1 May 2024 per the Upcoming Requirements page | https://developer.apple.com/news/?id=r1henawx ; https://developer.apple.com/news/upcoming-requirements/ (batch 1) | 14 Oct 2026 | [Official] |
| ITMS-91053 = missing API declaration (a common rejection) | https://www.donnywals.com/how-to-add-a-privacy-manifest-file-to-your-app-for-required-reason-api-usage/ | 14 Oct 2026 | [Industry] |
| Google Play: provide an in-app path *and* "a web link resource where users can request app account deletion and associated data deletion". Data may be retained for security, fraud or regulatory reasons if disclosed. Deadline was 7 Dec 2023, with extensions to 31 May 2024 | https://support.google.com/googleplay/android-developer/answer/13327111 | 14 Oct 2026 | [Official] |
| Data safety form: every app published on closed, open or production tracks must complete it, including apps that collect no data (with a privacy policy link). It covers SDK data. Google doesn't verify it; discrepancies can lead to "blocked updates or removal" | https://support.google.com/googleplay/android-developer/answer/10787469 | 14 Oct 2026 | [Official] |
| Play Photo and Video Permissions policy: READ_MEDIA_IMAGES/VIDEO only for apps whose core functionality needs broad access; others use the system photo picker. Full compliance became mandatory 28 May 2025 | https://support.google.com/googleplay/android-developer/answer/14115180 | 14 Oct 2026 | [Official] |
| Android photo picker: available on Android 11+ via system updates, and backported to Android 4.4–10 through Google Play services. It grants access only to the selected media | https://developer.android.com/training/data-storage/shared/photo-picker | 14 Oct 2026 | [Official]. The page doesn't explicitly say "no permission needed", so word it carefully |
| Android 13 (API 33) added POST_NOTIFICATIONS. Notifications are off by default for new installs | https://developer.android.com/develop/ui/views/notifications/notification-permission | 14 Oct 2026 | [Official] |
| OWASP MASVS v2.1.0 (Jan 2024) added MASVS-PRIVACY with four controls. Control groups: STORAGE, CRYPTO, AUTH, NETWORK, PLATFORM, CODE, RESILIENCE, PRIVACY | https://mas.owasp.org/news/2024/01/18/masvs-v210-release--masvs-privacy/ ; https://mas.owasp.org/MASVS/ | 14 Oct 2026 | [Official]. I didn't confirm that no later version (2.2) exists; check https://github.com/OWASP/owasp-masvs/releases |
| Target API 36 for new apps and updates from 31 Aug 2026 (extension to 1 Nov 2026); Xcode 26 SDK required since 28 Apr 2026 | (batch 1) | — | [Official] |
| India DPDP Rules phased timeline (see Topic 25) | — | — | [Industry], unverified against MeitY |
| UAE PDPL basics (see Topic 25) | u.ae | 14 Oct 2026 | [Official] |
| Australia: APP 1 (open management/privacy policy), APP 8 (overseas disclosure), APP 11 (security) | https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-quick-reference | 14 Oct 2026 | [Official]. The status of the 2024 reform tranche wasn't verified (the OAIC reform URL returned 404) |
| UK GDPR: ICO "privacy in the product design lifecycle: launch" guidance exists | https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/designing-products-that-protect-privacy/privacy-in-the-product-design-lifecycle/launch/ (found on the cy. mirror) | 14 Oct 2026 | [Official]. I only found the URL; the content wasn't read |
| Singapore PDPA: Transfer Limitation and Data Breach Notification obligations | https://www.pdpc.gov.sg/overview-of-pdpa/the-legislation/personal-data-protection-act/data-protection-obligations | 14 Oct 2026 | **The page body wasn't retrievable.** Re-check before quoting |

---

## Topic 27: Your first app launch: testing, store submission and release checklist

**1. Founder question and pain.** "We're nearly done. What exactly has to happen between 'build works' and 'live in both stores', and how long does it take?" The pain is a missed launch date because of the 12-tester/14-day closed test, screenshots at the wrong size, a missing demo account, rejections, and not knowing that staged rollout isn't available for a first release.

**2. Intent and stage.** Transactional and practical, late-stage. Searched by founders, PMs and agencies.

**3. Queries.**
- Primary: "app launch checklist" / "app store submission checklist".
- Supporting:
  - "how long does app store review take"
  - "google play closed testing 12 testers"
  - "app store screenshot sizes 2026"
  - "play store feature graphic size"
  - "app review demo account"
  - "phased release app store"
  - "staged rollout first release"

**4. Demand evidence (strong).**
- Batch 1 threads about the 12 testers over 14 days: https://www.indiehackers.com/post/google-made-me-find-12-strangers-willing-to-test-my-app-for-14-days-nobody-warned-me-how-hard-that-actually-is-de14e6d90e and https://news.ycombinator.com/item?id=40520051
- A recent HN thread on review delays: https://news.ycombinator.com/item?id=49857980
- Commercial checklists sell as products, for example https://andrasferencz.gumroad.com/l/Android-App-Store-Submission-Checklist

**5. Existing ZSpace coverage.**
- `/blogs/mobile-app-testing` (633 words) is QA-focused. It has short "Store Submission" and "Pre-Launch Checklist" sections with no specs or timelines.
- `/blogs/mobile-app-release-management` (549 words) covers rollouts, flags and kill switches. It already has the verified 7-day phased percentages and the Play staged-rollout source.
- `/blogs/mobile-app-development-process` (678 words) has a one-paragraph "Launch" step.
- `/blogs/app-store-optimization` (552 words) covers listing experiments.

Nothing covers accounts, listing assets and specs, review information, review timing, the closed-test gate, or first-release limits end to end.

**Is the intent distinct? Yes.**
- "Testing" intent is "what QA types do we need".
- "Release management" intent is "how do we ship updates safely". It's for teams that are already live: both phased release and staged rollout are update-only mechanics, as the facts below show.
- "Launch checklist" intent is "what's the sequence to get v1 live". A first release can't use staged rollout on Play, and Apple's phased release is documented for version updates only. That alone makes a first-launch page structurally different from the release-management page.

**6. SERP weaknesses.**
- https://www.chopdawg.com/the-complete-app-launch-checklist-for-2026/ is agency content that mixes marketing with submission and has few primary links.
- https://studio.adalo.com/blog/app-store-submission-checklist is no-code-vendor content that leans on its own platform.
- https://www.perfectiongeeks.com/mobile-app-development/guides/app-store-submission-checklist is generic.
- https://www.anything.com/blog/product-launch-checklist-mobile is vendor content that cites "target API 35", which is out of date (API 36 has been required since 31 Aug 2026).
- https://help.appmiral.com/app-store-submission-prep-guide is iOS-centric.

Common gaps: outdated target-API and screenshot specs, no closed-test timeline, and no statement that the first release can't be staged.

**7. Qualified-buyer potential: High.** Teams on a launch deadline, and founders whose freelancer disappeared before submission.

**8. Format and original asset.**
- A hub checklist in this order: accounts → app records and IDs → listing assets → privacy declarations → testing tracks → review submission → release → first 14 days of monitoring.
- A "launch timeline calculator" table. Example: for a new personal Play account, the closed test needs at least 14 consecutive days, plus review time; Apple typically reviews 90% of submissions in under 48 hours.
- A downloadable asset spec sheet with every pixel size from the official pages.

Link out to testing, release management, ASO, data privacy, crash reporting, and the future MOB-16 and MOB-27 pages.

**9. Service and CTA.** `/services/mobile-app-development`. CTA: "Launch-readiness review: we check your build, listing and declarations before you submit."

**10. Recommendation: CREATE `/blogs/mobile-app-launch-checklist`. I agree.** Keep the depth on testing types and rollout mechanics in the existing pages; the hub only summarises and links to them. Also make sure the closed-testing and rejection detail stays for MOB-16 and MOB-27: give each a short paragraph and a link, not full coverage. Suggested length is 2,000–2,800 words.

**11. Facts an article would need**

| Claim | Source | Checked | Label |
|---|---|---|---|
| Apple Developer Program 99 USD/year (or local currency); Google Play US$25 one-time | (batch 1) | — | [Official] |
| New personal Play accounts (created after 13 Nov 2023) need a closed test with ≥12 testers opted in for ≥14 consecutive days before applying for production | (batch 1) https://support.google.com/googleplay/android-developer/answer/14151465 | — | [Official] |
| TestFlight: up to 100 internal and 10,000 external testers; the first external build needs App Review | (batch 1) | — | [Official] |
| App Store Connect required fields: Description (4,000 chars), Keywords (100 bytes), Support URL (must lead to real contact info), Copyright, Screenshots. "What's New" is required for every version after the first. Promotional Text (170 chars) and Marketing URL are optional. App Review notes max 4,000 bytes. A demo account is required if login is required, and it must not expire | https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information | 14 Oct 2026 | [Official] |
| Apple screenshots: 1–10 per device size, .jpeg/.jpg/.png, no alpha. Required: at least one "iPhone with Dynamic Island (medium display)" (1206×2622 or 1179×2556 portrait), and iPad 13-inch (2064×2752 or 2048×2732) if the app supports iPad. App Store Connect scales down from the highest required resolution | https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications | 14 Oct 2026 | [Official]. **Re-check at publication:** older guidance made the 6.9-inch size the required one; this fetch says medium Dynamic Island |
| Guideline 2.1(a): submissions must be final, with no placeholder content; test on-device; "include demo account info (and turn on your back-end service!)"; Apple will reject binaries that crash | https://developer.apple.com/app-store/review/guidelines/ | 14 Oct 2026 | [Official] |
| Apple: "typically reviewing at least 50% of submissions in less than 24 hours and 90% in less than 48 hours." Expedited review is available for critical bug fixes or events | https://developer.apple.com/distribute/app-review/ | 14 Oct 2026 | [Official] |
| Google Play: for certain developer accounts, review may take "up to seven days or longer in exceptional cases". Managed publishing lets you control when approved changes go live | https://support.google.com/googleplay/android-developer/answer/9859751 | 14 Oct 2026 | [Official] |
| Play listing: icon 512×512 32-bit PNG with alpha, ≤1024 KB; feature graphic 1024×500 JPEG or 24-bit PNG with no alpha; at least 2 screenshots to publish and up to 8 per device type, 320–3840 px with aspect ≤2:1; short description 80 chars. For recommendation eligibility: ≥4 screenshots at ≥1080 px | https://support.google.com/googleplay/android-developer/answer/9866151 | 14 Oct 2026 | [Official]. The app name and full description limits weren't on that page; confirm separately (commonly cited as 30 and 4,000 chars) |
| Pre-launch report runs automatically on upload (subject to lab capacity) on Android 9+ devices including phones, tablets, Wear OS and ChromeOS. It checks stability, Android compatibility, performance and accessibility. No device count is given | https://support.google.com/googleplay/android-developer/answer/9842757 | 14 Oct 2026 | [Official] |
| Play staged rollouts "can only be used for app updates, not when publishing an app for the first time". You set and raise the percentage manually; halt/resume; countries can't be removed once started; recover by shipping a fixed release | https://support.google.com/googleplay/android-developer/answer/6346149 | 14 Oct 2026 | [Official] |
| Apple phased release (version updates, auto-update users): day 1 = 1%, 2%, 5%, 10%, 20%, 50%, day 7 = 100%. Pause up to 30 days total, with unlimited pauses. Anyone can still download manually | https://developer.apple.com/help/app-store-connect/update-your-app/release-a-version-update-in-phases/ | 14 Oct 2026 | [Official] |
| Policy deadlines: target API 36 from 31 Aug 2026 (extension to 1 Nov 2026); Xcode 26 / iOS 26 SDK since 28 Apr 2026; minimum iOS 13 target from 9 Sep 2026 | (batch 1) | — | [Official] |
| Privacy declarations (App Privacy, Data safety, account deletion, privacy manifests) | See Topic 26 | 14 Oct 2026 | [Official] |
| Android developer verification starts 30 Sep 2026 in Brazil, Indonesia, Singapore and Thailand. It's relevant to Singapore founders sideloading test builds | (batch 1) | — | [Official] |

---

## Topic 28: When should your app use push notifications, and when do they become a problem?

**1. Founder question and pain.** "Should we ask for notification permission on first launch? How many marketing pushes are too many? Can we even send promos?" The pain is a low opt-in rate after asking too early, opt-outs and uninstalls, and an App Review rejection or user complaints over promotional pushes.

**2. Intent and stage.** Informational and strategy-level, mid-funnel. Product owners and growth leads search for it, usually around launch or during a retention push.

**3. Queries.**
- Primary: "push notification best practices" / "when to ask for push notification permission".
- Supporting:
  - "push notification frequency"
  - "marketing push notifications apple guidelines"
  - "app store guideline 4.5.4"
  - "transactional vs promotional push notifications"
  - "android 13 notification permission"
  - "time sensitive notifications"

**4. Demand evidence (moderate; most of it is vendor content).**
- Long-running user frustration: Marco Arment on unenforced promo-push rules, https://marco.org/2014/12/
- A recent Spanish tech article on promotional notification spam: https://www.xataka.com/aplicaciones/notificaciones-promocionales-se-han-convertido-puro-spam-a-menudo-no-podemos-desactivarlas-perder-importantes
- I didn't find a recent HN thread. The vendor SERP is crowded, which suggests demand.

**5. Existing ZSpace coverage.** `/blogs/mobile-app-push-notifications` (789 words, `blog-data-mobile-4.ts`, no sources) is implementation-first: APNs and FCM, tokens, payloads, taps and delivery failures. It already contains:
- A short transactional-versus-marketing section.
- One line on "Respect time zones and quiet hours, cap frequency".
- The correct POST_NOTIFICATIONS and channels facts, and the iOS provisional option.

What's missing:
- Guideline 4.5.4: explicit in-app consent language and an in-app opt-out for marketing pushes.
- The HIG rules: never mark marketing as Time Sensitive; Time Sensitive only for things happening now or within an hour; avoid repeat notifications for the same thing; provide an in-app settings screen.
- The four interruption levels.
- Android channel importance being fixed after creation.
- An Android 13 nuance: apps targeting 12L or lower get the prompt at first channel creation, and one denial blocks re-prompting until reinstall or retarget.
- Regional marketing-consent notes.
- Primary sources.

**6. SERP weaknesses.**
- https://reteno.com/blog/push-notification-best-practices-ultimate-guide-for-2026 and https://applikeweb.com/blog/push-notification-best-practices/ are vendor posts with illustrative cadence numbers and no primary data.
- https://trtc.io/blog/details/push-notification-permission-opt-in-guide is vendor content.
- https://gojilabs.com/blog/notifications-dos-donts-push-notification-best-practices/ is agency content and generic.
- https://appwrite.io/blog/post/push-notifications-best-practices.md is BaaS-vendor content.

Almost none quote Guideline 4.5.4 or the HIG's marketing rules verbatim, and none cover the regional consent law angle.

**7. Qualified-buyer potential: Medium.** The reader is often already live, so this is more a retention and maintenance lead than a new build.

**8. Format and original asset.**
- A "Notification policy template": one table per message type (transactional, account/security, reminders, marketing) with consent basis, iOS interruption level, Android channel and importance, a frequency cap, quiet hours, and opt-out location.
- A permission-timing decision flow.

Put the strategy layer first and keep the existing implementation sections below it.

**9. Service and CTA.** `/services/mobile-app-development` (secondary: `/services/ui-ux-design` for permission UX). CTA: "Design your notification and permission strategy."

**10. Recommendation: UPDATE `/blogs/mobile-app-push-notifications`. I agree.** Add about 900–1,200 words of strategy and expand the FAQ, for example "Can I send marketing push notifications on iOS?" and "Can I ask for permission again?". Keep a single page: the strategy and implementation intents overlap heavily on this query, and splitting would cannibalise.

**11. Facts an article would need**

| Claim | Source | Checked | Label |
|---|---|---|---|
| Guideline 4.5.4: pushes "must not be required for the app to function", shouldn't carry sensitive data, and "should not be used for promotions or direct marketing purposes unless customers have explicitly opted in … via consent language displayed in your app's UI, and you provide a method in your app for a user to opt out" | https://developer.apple.com/app-store/review/guidelines/ | 14 Oct 2026 | [Official] |
| HIG "Sending marketing notifications": get explicit permission via an alert or modal describing the content; "Never use the Time Sensitive interruption level to send a marketing notification"; you must provide an in-app settings screen for changing the choice | https://developer.apple.com/design/human-interface-guidelines/managing-notifications | 14 Oct 2026 (via JSON endpoint) | [Official] |
| HIG interruption levels: Passive, Active (default), Time Sensitive (breaks through Focus and scheduled summary) and Critical (also overrides the Ring/Silent switch, needs an entitlement). Time Sensitive is for events "happening now or will happen within an hour", and the system periodically lets users re-evaluate it | same | 14 Oct 2026 | [Official] |
| HIG best practices: "Avoid sending multiple notifications for the same thing"; avoid sensitive info; give generic preview text for when previews are hidden | https://developer.apple.com/design/human-interface-guidelines/notifications | 14 Oct 2026 (via JSON endpoint) | [Official] |
| iOS provisional authorisation (quiet delivery to Notification Center first) | Already in the article. I didn't re-fetch the UserNotifications docs | — | [Official], re-link before publishing |
| Android 13 (API 33) POST_NOTIFICATIONS: off by default for new installs; apps targeting 13+ control when the dialog appears; apps targeting 12L or lower get it at first channel creation, and one "Don't allow" blocks re-prompting until reinstall or retarget; pre-granted on OS upgrade for eligible existing apps; media sessions exempt. Best practice: ask from a user action (for example after ordering food) | https://developer.android.com/develop/ui/views/notifications/notification-permission | 14 Oct 2026 | [Official] |
| Android 8.0+: all notifications need a channel, otherwise they don't appear. Users can change channel settings. The app can't change importance after creation | https://developer.android.com/develop/ui/views/notifications/channels | 14 Oct 2026 | [Official] |
| Google Play Ads policy: ads must not "simulate or impersonate … notifications", and "Ads may only be displayed inside of the app serving them" | https://support.google.com/googleplay/android-developer/answer/9857753 | 14 Oct 2026 | [Official]. Note that this is about ads, not first-party marketing pushes. Play has no direct equivalent to 4.5.4 that I could verify |
| UK: the ICO's (2020 draft) direct marketing code treats in-app messages and push notifications as "electronic mail" under PECR, which needs consent or soft opt-in | Secondary: https://www.lewissilkin.com/en/insights/ico-consults-on-new-direct-marketing-code-of-practice- ; https://twobirds.com/insights/2020/uk/information-commissioner-consults-on-draft-code-of-practice-on-direct-marketing | 14 Oct 2026 | [Industry]. **Unverified on ico.org.uk** and possibly contested; the final code status (and the Data (Use and Access) Act 2025 changes to PECR) wasn't checked. Hedge or omit |
| India, UAE, Australia and Singapore marketing-consent rules specifically for push | — | — | **Not found in primary sources.** Don't claim; fall back to the store rules |
| Frequency caps and optimal cadence numbers | Vendor blogs only | — | [Vendor]. Don't quote numbers; recommend testing and watching opt-outs |

---

## Cross-topic notes

- **Internal linking:**
  - The new launch checklist links to data-privacy (declarations), push-notifications (permission timing), backend (turn the backend on for review, as Guideline 2.1(a) says), testing, release-management and ASO.
  - Data-privacy and push both cite Guideline 4.5.4 and POST_NOTIFICATIONS. Keep the deep version of each in its own page and summarise it in the other.
- **Staleness to fix on existing pages:**
  - `mobile-app-testing` says personal Play accounts "may need" a closed test. Make it specific (12 testers, 14 days) or link to MOB-16.
  - Both `mobile-app-data-privacy` and `mobile-app-push-notifications` have zero external sources.
