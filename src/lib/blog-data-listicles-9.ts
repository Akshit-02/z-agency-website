import type { BlogPost } from "./blog-data";

/**
 * Listicle batch 7, second pass (2026-11-05): candidates 121–140 re-audited
 * against the full inventory after the first pass (2026-10-28, see
 * blog-data-listicles-8.ts). Four topics the first pass skipped had only a
 * sentence or paragraph of coverage elsewhere and became new articles here:
 * device and OS test matrix (126), mobile session edge cases (127),
 * design-system governance (132) and A/B test guardrail metrics (138).
 * Split-order scenarios (130) became an update to
 * ecommerce-order-management-system. No external links (owner rule).
 * Sources checked 2026-11-05:
 * - Play Console Help, target API level requirements: from 31 August 2026 new
 *   apps and updates must target Android 16 (API 36), extension to 1 November
 *   2026 on request; apps targeting API 34 or lower are only offered to
 *   devices running an Android version at or below their target.
 * - Android 16 behaviour changes: for apps targeting API 36, orientation,
 *   resizability and aspect-ratio restrictions are ignored on displays with
 *   smallest width 600dp or more; games are excluded; a temporary opt-out is
 *   not available to apps targeting Android 17 (API 37).
 * - Android 15 behaviour changes: edge-to-edge is enforced for apps targeting
 *   API 35. Android 13: POST_NOTIFICATIONS runtime permission.
 * - Apple Developer, upcoming requirements: from 28 April 2026 uploads must be
 *   built with Xcode 26 and the iOS 26 SDK (or the matching platform SDK).
 * - IETF RFC 9700 (OAuth 2.0 Security BCP): refresh tokens for public clients
 *   must be sender-constrained or rotated. RFC 8252 (OAuth 2.0 for Native
 *   Apps).
 * - Android Developers, data backup overview and Block Store: apps should
 *   check that restored data is usable; Block Store recommended for
 *   credentials.
 * - Semantic Versioning 2.0.0 (semver.org).
 * - Kohavi, Tang and Xu, Trustworthy Online Controlled Experiments (Cambridge
 *   University Press, 2020): organisational and trust-related guardrail
 *   metrics, sample ratio mismatch.
 */
export const listiclePosts9: BlogPost[] = [
  // ------------------------------------------------ MOBILE DEVICE TEST MATRIX
  {
    slug: "mobile-app-device-test-matrix",
    title: "15 Device and OS Combinations to Consider When Planning Mobile App Testing",
    seoTitle: "Mobile App Device Test Matrix: 15 Device and OS Combinations",
    excerpt:
      "Fifteen device and OS combinations to consider for a mobile app test matrix, from oldest supported OS and low-end Android to foldables, tablets and OS upgrades.",
    category: "Mobile Apps",
    banner: "testmatrix",
    sceneKind: "mobile",
    bannerAlt: "A mobile test matrix grid with device types such as small iPhone, low-end Android, tablet and foldable down one side and OS versions across the top, with priority cells highlighted",
    date: "2026-11-05",
    readingTime: "11 min read",
    relatedServiceSlugs: ["mobile-app-development"],
    relatedIndustrySlugs: ["ecommerce", "fintech", "healthcare-healthtech"],
    relatedSlugs: ["mobile-app-testing", "mobile-app-display-settings-testing", "mobile-app-release-management"],
    faqs: [
      {
        q: "How many devices should a mobile app be tested on?",
        a: "There is no fixed number. Start from your own analytics: cover the OS versions and device types that make up most of your active users, plus your oldest supported OS, one low-end Android device and any form factor you claim to support, such as tablets. Many teams keep a small set of real devices for every release and use cloud device services for wider coverage before major releases.",
      },
      {
        q: "Are emulators and simulators enough?",
        a: "They are good for layout, OS-version and screen-size checks early in development. They are weaker for performance, camera, biometrics, push notifications, background behaviour and manufacturer-specific changes, which need real hardware before release.",
      },
      {
        q: "When should an app drop support for an old OS version?",
        a: "When the share of active users on that version is small enough that the testing and engineering cost outweighs them, or when a platform or library requirement forces it. Check the version share in your own analytics, warn affected users, and remember that store rules on target and SDK versions change every year.",
      },
    ],
    content: [
      {
        heading: "Which devices and OS versions should you test a mobile app on?",
        body: [
          "**Build the test matrix from your own users, not from a generic device list. Cover your oldest supported iOS and Android versions, the latest releases and the versions you target, at least one low-end Android device, small and large screens, tablets and foldables if you support them, the manufacturers your users actually use, and the upgrade paths from older OS and app versions.** Test the highest-risk combinations on real devices for every release and use emulators and cloud device services for wider coverage.",
          "Testing on every device is impossible, and testing only on the team's own phones misses the people most likely to have problems. This list is for product owners, QA leads and developers planning release testing. It complements the wider [[/blogs/mobile-app-testing|mobile app testing guide]], which covers test types, beta testing and store submission; for text size, dark mode and motion settings, see [[/blogs/mobile-app-display-settings-testing|12 text and display settings to test]].",
        ],
      },
      {
        heading: "Before you choose: where the matrix comes from",
        body: [
          "Pull OS versions, device models and screen sizes from your app analytics or crash reporting tool, and look at your store consoles: Google Play Console shows the devices and Android versions of your users. For a new app, use data from your website's mobile visitors in the target markets as a starting point and replace it with app data after launch.",
          "Then rank combinations by two things: how many users they represent and how likely they are to break. A device used by few people but at the edge of your support range (the oldest OS, the smallest screen, the least memory) often finds more bugs than another popular flagship.",
        ],
      },
      {
        heading: "iOS combinations",
        body: [
          "**1. Oldest supported iOS version on the smallest supported iPhone.** This is where layout overflow, missing APIs and availability checks fail. If your deployment target is several versions back, check that code paths guarded for newer APIs still work, and that the smallest screen still fits key buttons with larger text.",
          "**2. The latest iOS release on a current iPhone.** New releases change system UI, permissions prompts and default behaviours. Apple also sets minimum SDK requirements for uploads: from 28 April 2026, apps uploaded to App Store Connect must be built with Xcode 26 and the iOS 26 SDK. Building with a new SDK can change behaviour even on older devices, so retest after every SDK upgrade.",
          "**3. iPad, if your app runs on it.** Universal apps need layout checks in both orientations, with split view and slide over, and with a keyboard and pointer. iPhone-only apps can still be installed on iPad in compatibility mode in many cases; decide whether that is acceptable and check that it does not look broken.",
          "**4. iPhones with different display shapes.** Notch, Dynamic Island and home indicator areas affect headers, bottom navigation and full-screen media. Check safe areas on at least one older design and one current design.",
        ],
      },
      {
        heading: "Android combinations",
        body: [
          "**5. Your minimum Android version (minSdk) on a low-memory device.** Old OS versions tend to sit on older, slower hardware. Check startup time, scrolling, image-heavy screens and what happens when the system kills your app in the background. See [[/blogs/mobile-app-performance-optimization|app performance optimisation]].",
          "**6. The Android version you target (targetSdk).** Behaviour changes in Android often apply only when your app targets the new version, so raising targetSdk can break things on current devices. Google Play requires new apps and updates to target Android 16 (API 36) from 31 August 2026, with extensions to 1 November 2026 available on request, so the target version changes every year.",
          "**7. The latest Android release on a near-stock device.** A Pixel or similar device shows the platform's own behaviour without manufacturer changes. It is the reference when deciding whether a bug comes from your code or from a manufacturer.",
          "**8. The manufacturers your users actually use.** Manufacturers customise Android, including background task limits, battery optimisation, notification handling, keyboards and camera behaviour. If a large share of your users are on one or two brands, test on those, especially for push notifications, background sync and file uploads.",
          "**9. A low-end Android device.** Low RAM, slower storage and older GPUs expose memory leaks, janky animations and timeouts that never appear on development phones. This matters most in markets where budget devices are common.",
          "**10. Edge-to-edge and display cutouts.** Android 15 enforces edge-to-edge display for apps targeting API 35, so content draws behind the status and navigation bars unless you handle insets. Check that headers, bottom bars and floating buttons are not hidden on devices with cutouts and gesture navigation.",
          "**11. Tablets and foldables.** For apps targeting Android 16 (API 36), the system ignores orientation, resizability and aspect-ratio restrictions on displays with a smallest width of 600dp or more; games are excluded, and the temporary opt-out is not available to apps targeting Android 17. An app that was locked to portrait may now appear in landscape and resizable windows on tablets and unfolded foldables, so test those layouts and the fold and unfold transition.",
        ],
        cta: {
          title: "Planning QA for an iOS and Android release?",
          description: "ZSpace Labs plans device coverage and release testing as part of building and maintaining apps. See our [[/services/mobile-app-development|mobile app development service]].",
        },
      },
      {
        heading: "Conditions that cut across devices",
        body: [
          "**12. Rotation, split screen and multi-window.** Configuration changes recreate screens on Android and resize them on iPad. Check that form input, scroll position, video playback and in-progress uploads survive rotation and window resizing.",
          "**13. OS versions where permissions changed.** Permission behaviour differs by OS version: Android 13 introduced a runtime permission for notifications, and iOS lets users share approximate location or a limited set of photos. Test your permission flows on versions before and after each change you depend on, including the path where the user says no.",
          "**14. A mid-range device on a poor network.** Combine slow, unreliable and switching connections with a mid-range device. Check loading states, timeouts, retries and offline behaviour; see [[/blogs/offline-first-mobile-app-development|offline-first planning]].",
          "**15. Upgrades: a new OS under an existing install, and a new app version over old data.** Many real users get your update on top of months of cached data and settings, sometimes after an OS upgrade. Install the previous store version, use it, then upgrade the OS or the app and check migrations, stored sessions and settings. Fresh installs on clean devices miss these bugs.",
        ],
      },
      {
        heading: "A matrix template",
        body: [
          "Split devices into tiers so the matrix stays affordable. The table is an illustrative structure; fill it from your own analytics.",
        ],
        table: {
          headers: ["Tier", "What it covers", "When to run", "How"],
          rows: [
            ["Tier 1", "Most-used iOS and Android versions, oldest supported OS, one low-end Android, your main manufacturers", "Every release", "Real devices"],
            ["Tier 2", "Tablets, foldables, small screens, older display shapes, OS versions with permission changes", "Releases that touch affected screens, and major releases", "Real or cloud devices"],
            ["Tier 3", "Long tail of models and versions", "Major releases and SDK or targetSdk upgrades", "Cloud device services and emulators"],
            ["Beta OS", "Next iOS and Android betas", "Before each major OS release", "Real devices enrolled in betas"],
          ],
        },
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Testing only on the team's own recent phones.",
          "Choosing devices from global market share rather than your own users.",
          "Treating emulators as enough for notifications, camera, biometrics and background behaviour.",
          "Raising targetSdk or the iOS SDK without a regression pass on current devices.",
          "Never testing upgrades from the previous app version with real data.",
          "Keeping the matrix unchanged for years while the user base moves to new OS versions.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A useful device matrix is small, based on your own users and weighted towards the edges of what you support: the oldest OS, the cheapest device, the largest screen and the upgrade path. Review it every few months against analytics and before each major OS release, and pair it with a staged rollout so problems that escape testing reach fewer people; see [[/blogs/mobile-app-release-management|mobile app release management]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Google Play Console Help, target API level requirements for Google Play apps. Android Developers, behaviour changes for apps targeting Android 15 and Android 16. Android Developers, notification runtime permission (Android 13). Apple Developer, upcoming requirements (SDK minimum requirements). Accessed 5 November 2026.",
        ],
      },
    ],
  },

  // ------------------------------------------------ MOBILE SESSION EDGE CASES
  {
    slug: "mobile-app-session-edge-cases",
    title: "10 Mobile Session-Management Edge Cases to Handle Before Release",
    seoTitle: "10 Mobile App Session Edge Cases to Handle Before Release",
    excerpt:
      "Ten mobile session edge cases that log users out or leak data: refresh races, expiry mid-form, offline queues, revoked sessions, clock skew, reinstalls and deep links.",
    category: "Mobile Apps",
    banner: "authflow",
    sceneKind: "security",
    bannerAlt: "A mobile app sending several requests that fail with expired tokens, a single shared refresh step obtaining new tokens, and the original requests being retried",
    date: "2026-11-05",
    readingTime: "10 min read",
    relatedServiceSlugs: ["mobile-app-development", "website-development"],
    relatedIndustrySlugs: ["fintech", "healthcare-healthtech", "ecommerce"],
    relatedSlugs: ["mobile-app-authentication", "mobile-app-api-integration", "mobile-app-security"],
    faqs: [
      {
        q: "Why do users get logged out of a mobile app randomly?",
        a: "Common causes are refresh-token races, where several requests refresh at once and the server treats the second refresh as token reuse; treating network errors as authentication failures; tokens lost after a restore or reinstall; and server-side revocation the app does not explain. Each is fixable once identified.",
      },
      {
        q: "Should a mobile app use refresh token rotation?",
        a: "RFC 9700, the OAuth 2.0 Security Best Current Practice, says refresh tokens issued to public clients such as mobile apps must be either sender-constrained or rotated. If you rotate, the app must make sure only one refresh happens at a time, or the server must tolerate a short overlap.",
      },
      {
        q: "How do you test session edge cases?",
        a: "Use a staging environment with very short token lifetimes, a proxy that can return 401 responses on demand, airplane mode, a changed device clock, process death (for example, Android's developer option to not keep activities) and installs over previous app versions.",
      },
    ],
    content: [
      {
        heading: "Which session edge cases should a mobile app handle?",
        body: [
          "**Before release, check what happens when a token expires during a request or a half-filled form, when several requests refresh at once, when the app resumes after hours in the background, when the user is offline, when the server revokes a session, when logout is partial, when the user has several devices, when the device clock is wrong, when the app is reinstalled or restored, and when a deep link or notification arrives for a signed-out or different user.** Each one either logs people out unexpectedly or shows data to the wrong person.",
          "Login screens get careful design; the session that follows usually gets less. Most session bugs appear only under timing, network or lifecycle conditions that rarely happen on a developer's phone. This list is for mobile developers, backend developers and QA. For sign-in methods, token storage and account recovery, see [[/blogs/mobile-app-authentication|mobile app authentication]].",
        ],
      },
      {
        heading: "Token expiry and refresh",
        body: [
          "**1. The access token expires in the middle of a request or a long form.** The user fills in a form for ten minutes, taps submit and is sent to the login screen, losing everything. Handle a 401 by refreshing the token and retrying the request once, inside one shared networking layer, as described in [[/blogs/mobile-app-api-integration|mobile app API integration]]. Keep form state locally so a full re-login does not discard it.",
          "**2. Several requests try to refresh at the same time.** A screen loads five resources, all get 401, and each starts its own refresh. With refresh token rotation, the first refresh invalidates the old refresh token, the second looks like token reuse, and a server with reuse detection revokes the whole session. Use a single-flight refresh: the first request refreshes, the others wait for its result. RFC 9700 requires refresh tokens for public clients to be sender-constrained or rotated, but leaves concurrency to implementers, so some teams also allow a short grace period on the server.",
          "**3. The app resumes after a long time in the background.** The access token and perhaps the refresh token have expired, and the last screen is still showing, sometimes with private data. On resume, check the session before showing sensitive content or accepting actions. For sensitive apps, hide content in the app-switcher snapshot and consider requiring biometrics or a passcode after a period of inactivity.",
          "**4. The device is offline when the session expires.** A network failure is not an authentication failure. Do not log users out because a refresh request timed out; keep them in an offline state, queue actions where the app supports it, and refresh when the connection returns. Give queued writes idempotency keys so replays do not create duplicates; see [[/blogs/api-idempotency-patterns|API idempotency patterns]].",
        ],
      },
      {
        heading: "Revocation and sign-out",
        body: [
          "**5. The server revokes the session.** Password changes, account suspension, account deletion, sign-out from another device and security events should all revoke refresh tokens. The app should recognise the specific error, clear local data and explain what happened (\"You were signed out because your password changed\"), rather than showing a generic error or looping on refresh.",
          "**6. Logout leaves data behind.** Deleting the token is not enough. Revoke the refresh token on the server, unregister the push token for that user, and clear the local database, caches, image caches, web view cookies, widget data and any files downloaded for that account. Test by logging out and logging in as a different user on the same device and looking for anything from the first account.",
          "**7. The user is signed in on several devices.** Decide whether sessions are unlimited, limited or exclusive, and what happens to the oldest when a limit is reached. For sensitive apps, show a list of active devices with the ability to sign them out, and make sure that sign-out reaches the other devices on their next request.",
        ],
        cta: {
          title: "Seeing unexplained logouts or session bugs?",
          description: "ZSpace Labs builds and maintains mobile apps and their APIs, including authentication and session handling. See our [[/services/mobile-app-development|mobile app development service]].",
        },
      },
      {
        heading: "Device and lifecycle cases",
        body: [
          "**8. The device clock is wrong.** If the app decides whether a token has expired by comparing its expiry time with the device clock, a clock set minutes or hours wrong causes constant refreshes or use of expired tokens. Treat the server's response as the authority: refresh on 401, and if you check expiry locally, allow a margin or calculate an offset from server time.",
          "**9. Reinstall, backup restore and moving to a new phone.** Whether stored credentials survive an uninstall, a backup restore or a device-to-device transfer depends on the platform, the storage used and the user's settings. Test each path on the OS versions you support rather than assuming. Android's backup guidance warns that if an app cannot use the data it restores, users lose their settings and progress without seeing an error, and recommends its Block Store API for credentials. Make sure a restored but unusable token leads to a clean sign-in, not a crash or a loop.",
          "**10. A deep link or notification arrives for a signed-out or different user.** A notification about an order, or a link to a private screen, opens while the user is signed out, or signed in to a different account. Send the user through sign-in and then on to the original destination, and check that the content belongs to the current account before showing it. See [[/blogs/mobile-app-deep-linking|mobile app deep linking]] and [[/blogs/mobile-app-push-notifications|push notifications]].",
        ],
      },
      {
        heading: "Edge case summary and how to test it",
        body: [],
        table: {
          headers: ["Edge case", "Typical symptom", "How to test"],
          rows: [
            ["1. Expiry mid-request or form", "Lost input, forced login", "Short token lifetime in staging; submit after expiry"],
            ["2. Concurrent refresh", "Random logouts", "Proxy returns 401 to several parallel requests"],
            ["3. Long background", "Stale private data on resume", "Background the app past token lifetime"],
            ["4. Offline expiry", "Logout on network loss", "Airplane mode before and during refresh"],
            ["5. Server revocation", "Refresh loop or generic error", "Change password or revoke from another device"],
            ["6. Partial logout", "Previous user's data visible", "Log out, log in as another user, inspect"],
            ["7. Several devices", "Sign-out does not propagate", "Sign out remotely; use the other device"],
            ["8. Wrong clock", "Constant refresh or rejected tokens", "Set the device clock forward and back"],
            ["9. Reinstall or restore", "Crash, loop or silent logout", "Uninstall and reinstall; restore from backup; transfer device"],
            ["10. Deep link or notification", "Private screen shown to wrong user", "Open links while signed out and as another user"],
          ],
        },
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Refreshing tokens in individual screens instead of one shared networking layer.",
          "Logging users out on any error from the refresh endpoint, including timeouts.",
          "Rotating refresh tokens without single-flight refresh in the app.",
          "Logging out only on the device, leaving the refresh token valid on the server.",
          "Forgetting push tokens, caches and web view cookies when signing out.",
          "Testing only with long token lifetimes, so expiry never happens during QA.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Session bugs are timing and lifecycle bugs, so they need deliberate tests: shorten token lifetimes in staging, force 401s, go offline, change the clock and reinstall. Centralise refresh in one place, distinguish network failures from authentication failures, and make logout and revocation complete. For broader security practices, see [[/blogs/mobile-app-security|mobile app security]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "IETF RFC 9700, Best Current Practice for OAuth 2.0 Security (refresh token protection). IETF RFC 8252, OAuth 2.0 for Native Apps. Android Developers, data backup overview and Block Store. Accessed 5 November 2026.",
        ],
      },
    ],
  },

  // ------------------------------------------------ DESIGN SYSTEM GOVERNANCE
  {
    slug: "design-system-governance",
    title: "10 Design-System Governance Rules for Teams Shipping Features Frequently",
    seoTitle: "10 Design System Governance Rules for Fast-Moving Teams",
    excerpt:
      "Ten design-system governance rules for teams that ship often: ownership, contribution paths, local-first components, definition of done, versioning, deprecation and adoption.",
    category: "UI/UX",
    banner: "designsystemflow",
    sceneKind: "design",
    bannerAlt: "A design system contribution flow: a feature team proposes a component, it is reviewed, built, documented and released as a new version that other teams adopt",
    date: "2026-11-05",
    readingTime: "10 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce", "fintech"],
    relatedSlugs: ["design-systems-for-teams-that-move-fast", "design-token-categories", "design-handoff"],
    faqs: [
      {
        q: "What is design system governance?",
        a: "The rules for who decides what goes into a design system, how teams propose and contribute changes, how changes are reviewed, versioned and released, and how old parts are retired. Its purpose is to keep the system consistent without slowing down the teams that use it.",
      },
      {
        q: "Who should own a design system?",
        a: "Someone with decision rights over each layer, usually a designer and an engineer together for components, and a named owner for tokens. In small teams this can be part of existing roles; larger organisations often have a dedicated team that accepts contributions from product teams.",
      },
      {
        q: "How do you stop teams detaching or overriding components?",
        a: "Make the right way faster than the wrong way: a quick path to request or contribute variants, permission to build a local component when needed, and automated checks that flag hard-coded values. Then review detachments regularly, since frequent overrides usually mean the system is missing something.",
      },
    ],
    content: [
      {
        heading: "How should a design system be governed when teams ship often?",
        body: [
          "**Name owners with clear decision rights, define what belongs in the system, give feature teams a fast contribution path, let them ship local components first and promote them later, set a definition of done for components, version and document every release, retire components with a deprecation policy, keep tokens as the single source of values, automate enforcement, and measure adoption.** Governance should make the consistent option the fastest one, not add a review queue.",
          "Without rules, design systems drift: designs and code diverge, teams detach components to meet deadlines, and near-duplicate buttons multiply. With too many rules, teams route around the system. This list is for design leads, frontend leads and product managers. For what a design system is and when it is worth building, start with [[/blogs/design-systems-for-teams-that-move-fast|design systems explained]].",
        ],
      },
      {
        heading: "Ownership and scope",
        body: [
          "**1. Name owners and their decision rights.** Decide who can approve new tokens, components and patterns, and who has the final say when design and engineering disagree. Pair a designer and an engineer for components so the Figma library and the code library are maintained together. Publish the names; an unowned system decays.",
          "**2. Define what belongs in the system and what stays local.** A common rule of thumb is that a component enters the system when more than one team or product needs it; one-off marketing layouts and experimental features usually stay local. Write the rule down so arguments are about evidence, not taste.",
        ],
      },
      {
        heading: "Contribution and speed",
        body: [
          "**3. A contribution path with a response time.** Feature teams should know how to propose a new component or variant, what to include (the use case, screens, states and accessibility needs) and how quickly they will get an answer. A proposal that waits weeks teaches teams not to ask.",
          "**4. Ship locally, promote later.** Allow teams to build a local component when the system lacks one, as long as it uses system tokens, is labelled as local and is reviewed at a set interval. Components that prove useful are promoted into the system; the rest are replaced or removed. This keeps delivery moving without letting one-offs become permanent.",
          "**5. A definition of done for system components.** Before release, a component should have all its states (default, hover, focus, disabled, loading, error, empty), meet accessibility requirements such as contrast, keyboard use and screen reader labels, use tokens rather than raw values, work at all supported sizes, have usage documentation and match between design and code. See [[/blogs/accessible-ui-ux-design|accessibility in UI/UX design]].",
        ],
        cta: {
          title: "Setting up or rescuing a design system?",
          description: "ZSpace Labs designs and builds design systems in Figma and code, with tokens, components and documentation. See our [[/services/ui-ux-design|UI/UX design service]].",
        },
      },
      {
        heading: "Change management",
        body: [
          "**6. Version releases and publish release notes.** Treat the code library like any dependency. Semantic versioning is a common convention: a major version for breaking changes, a minor version for new features and a patch for fixes. Each release should say what changed, why, and what teams need to do. Release on a predictable cadence so teams can plan upgrades.",
          "**7. Deprecate before you delete.** Mark the old component as deprecated in both design and code, point to its replacement, give a migration window, and provide migration notes or automated code changes where possible. Remove it only after usage has dropped. Deleting a component without warning breaks the next build for every team that used it.",
          "**8. Tokens are the single source of values.** Colours, spacing, typography, radii, shadows and motion should come from shared design tokens used by both the design tool and code, so a change in one place reaches every product. See [[/blogs/design-token-categories|12 design token categories]].",
        ],
      },
      {
        heading: "Enforcement and measurement",
        body: [
          "**9. Automate the checks you can.** Lint rules can flag hard-coded colours and spacing, visual regression tests can catch unintended changes to components, and automated accessibility checks can run in continuous integration. Automation catches drift without anyone acting as a gatekeeper on every pull request.",
          "**10. Measure adoption and review it regularly.** Track where system components are used, how often they are detached or overridden, how many local components exist and how long contributions take. Where your design tool offers library usage analytics, use them. Review these numbers every quarter: frequent overrides of one component usually mean it is missing a variant, not that teams are careless.",
        ],
      },
      {
        heading: "Choosing a governance model",
        body: [],
        table: {
          headers: ["Model", "How it works", "Suits", "Watch out for"],
          rows: [
            ["Centralised", "One team builds and owns everything", "Early systems, strict brand or compliance needs", "Becomes a bottleneck as teams grow"],
            ["Federated", "Product teams contribute; a small group sets standards", "Several teams shipping in parallel", "Inconsistent quality without a definition of done"],
            ["Hybrid", "Core team owns tokens and core components; teams contribute patterns", "Most growing product organisations", "Needs clear boundaries between core and contributed parts"],
          ],
        },
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "A design library and a code library maintained by different people with no sync process.",
          "Reviews with no response time, which push teams to build around the system.",
          "Accepting components without states, accessibility or documentation.",
          "Breaking changes released without a version bump or migration notes.",
          "Treating detachments as rule-breaking rather than as feedback.",
          "Governance documents nobody reads; put the rules where people work, in the library and the repository.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Good governance is light: clear owners, a fast contribution path, a definition of done, versioned releases, deprecation before deletion and automated checks. Measure adoption and treat workarounds as signals. When the system and the product team both move quickly, design-to-development handoff gets easier too; see [[/blogs/design-handoff|design handoff]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Semantic Versioning 2.0.0 (semver.org). The governance rules above are recommendations, not a standard; adapt them to your team size and release process. Accessed 5 November 2026.",
        ],
      },
    ],
  },

  // ------------------------------------------------ A/B TEST GUARDRAIL METRICS
  {
    slug: "ab-test-guardrail-metrics",
    title: "12 Guardrail Metrics to Monitor Alongside Your Primary Conversion Goal",
    seoTitle: "12 A/B Test Guardrail Metrics to Track With Your Primary Goal",
    excerpt:
      "Twelve guardrail metrics for A/B tests, from revenue per visitor, margin, returns and lead quality to speed, errors and sample ratio mismatch, with how to set thresholds.",
    category: "CRO",
    banner: "abframeworkflow",
    sceneKind: "abtest",
    bannerAlt: "An A/B test dashboard where the variant wins on the primary conversion metric while guardrail metrics for revenue per visitor, returns, page speed and errors are checked against limits",
    date: "2026-11-05",
    readingTime: "11 min read",
    relatedServiceSlugs: ["cro-audit", "shopify-development", "website-development"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "saas-technology"],
    relatedSlugs: ["ecommerce-ab-testing-framework", "ecommerce-experimentation-mistakes", "website-ab-testing-ideas"],
    faqs: [
      {
        q: "What is a guardrail metric in A/B testing?",
        a: "A metric that a change must not harm, monitored alongside the primary metric that decides the test. A variant that lifts conversion but lowers revenue per visitor, increases returns or slows the page may not be a real improvement.",
      },
      {
        q: "How many guardrail metrics should a test have?",
        a: "Few: usually two to four business guardrails chosen for the specific change, plus standard data-quality checks such as sample ratio mismatch. Every extra metric increases the chance of a false alarm from noise.",
      },
      {
        q: "What happens if the primary metric wins but a guardrail gets worse?",
        a: "Decide in advance. Common rules are: do not ship if a guardrail is clearly worse than the agreed limit; investigate if the result is uncertain; and ship only if the guardrails show no meaningful harm. If a trust guardrail such as sample ratio mismatch fails, the whole result is unreliable.",
      },
    ],
    content: [
      {
        heading: "Which guardrail metrics should you monitor in an A/B test?",
        body: [
          "**Pick a few business guardrails that the change could plausibly harm, such as revenue per visitor, margin, refunds and returns, lead quality, page speed, errors, unsubscribes, support contacts, later funnel steps and retention, and always add trust guardrails such as sample ratio mismatch and tracking integrity.** Set an acceptable limit for each before the test starts, and agree what happens if the primary metric wins but a guardrail is breached.",
          "A test decided on one metric invites changes that move that metric at the expense of something else: a bigger discount banner raises conversion and cuts margin; a shorter form raises leads and lowers their quality. This list is for CRO practitioners, product managers and analysts. For the full test plan, see the [[/blogs/ecommerce-ab-testing-framework|A/B testing framework]], which places guardrails in a metric hierarchy alongside primary, secondary and diagnostic metrics.",
          "The textbook Trustworthy Online Controlled Experiments (Kohavi, Tang and Xu, 2020) separates two kinds of guardrail: organisational guardrails, which protect the business, and trust-related guardrails, which check that the experiment itself can be believed. This list follows that split.",
        ],
      },
      {
        heading: "Business guardrails: value and margin",
        body: [
          "**1. Revenue per visitor.** When the primary metric is conversion rate, revenue per visitor shows whether more orders came at lower value. It combines conversion and order value, so it is noisier; treat it as a guardrail rather than the decision metric unless traffic is high.",
          "**2. Average order value and gross margin.** Offers, bundles, free-shipping thresholds and discount messaging change what people buy. Where possible, measure margin per order or per visitor from order data rather than revenue alone.",
          "**3. Refund, return and cancellation rates.** Clearer or more persuasive product pages can increase purchases that are later returned. These are lagging metrics, so set a follow-up window after the test ends and join test assignment to order outcomes.",
          "**4. Lead quality for lead generation.** For B2B and service sites, a form change that increases submissions may reduce the share that become qualified leads, meetings or opportunities. Pass the variant to your CRM with each lead so you can compare later stages; see [[/blogs/website-ab-testing-ideas|website A/B testing ideas]].",
        ],
      },
      {
        heading: "Business guardrails: experience and downstream",
        body: [
          "**5. Page speed.** New scripts, images, personalisation or client-side testing tools can slow the variant. Track loading and responsiveness metrics, such as Largest Contentful Paint and Interaction to Next Paint, for each variant. A slower variant can hide a good idea behind a poor implementation.",
          "**6. Errors.** JavaScript errors, failed API calls, payment failures and form validation errors by variant. These are the guardrails worth checking daily, because a broken variant should be stopped rather than left to finish.",
          "**7. Unsubscribe, opt-out and permission rates.** Changes to email capture, pop-ups, notifications and consent prompts can grow a list while increasing unsubscribes or reducing permission rates later.",
          "**8. Support contacts.** Contacts per order or per visitor, by variant, where your support tool can record it. Confusing delivery messages, new payment options or changed policies often show up here first.",
          "**9. Later funnel steps.** If the primary metric is add-to-cart, checkout completion is a guardrail: more items added but fewer orders completed is not a win. The same applies to trial starts versus activation in SaaS.",
          "**10. Retention and repeat purchase.** Some changes trade future value for short-term conversion. Measure these with a long-term holdout or a follow-up analysis of the test cohorts, since most tests are too short to show them directly.",
        ],
        cta: {
          title: "Want a testing programme you can trust?",
          description: "ZSpace Labs runs CRO audits that cover measurement, test plans and guardrails as well as test ideas. See our [[/services/cro-audit|CRO audit service]].",
        },
      },
      {
        heading: "Trust guardrails: is the result believable?",
        body: [
          "**11. Sample ratio mismatch (SRM).** If you planned a 50/50 split and the variants received, say, 50,000 and 48,500 visitors, a chi-square test tells you whether that gap is likely to be chance. A significant mismatch usually means a bug in assignment, redirects, bot filtering or tracking, and the result should not be trusted until the cause is found. See [[/blogs/ecommerce-experimentation-mistakes|experimentation mistakes]].",
          "**12. Tracking integrity by variant.** Compare event volumes with source systems: purchases recorded in analytics against orders in the platform, form submissions against CRM records, for each variant. A variant that breaks a tracking tag can appear to lose, or win, without any change in behaviour. Check for flicker and inconsistent assignment across pages and devices too.",
        ],
      },
      {
        heading: "Setting guardrail limits",
        body: [
          "A guardrail needs a limit, not just a chart. Before the test, write down for each guardrail the largest drop you would accept, often called a non-inferiority margin, and the decision rule. The numbers below are illustrative, not recommendations; base yours on margins and risk.",
          "Guardrails usually have less statistical power than the primary metric, because the test was sized for the primary metric. A guardrail that shows no significant change has not been proven safe; look at the confidence interval and ask whether it rules out the harm you care about. For important guardrails, size the test for them too, or accept the uncertainty knowingly.",
        ],
        table: {
          headers: ["Guardrail", "Illustrative limit", "If breached"],
          rows: [
            ["Revenue per visitor", "No drop larger than 1%", "Do not ship; review pricing or offer"],
            ["Return rate (30-day)", "No increase above 0.5 percentage points", "Hold rollout until returns data is in"],
            ["Payment or JavaScript errors", "No increase", "Stop the test and fix"],
            ["Qualified lead rate", "No drop larger than 5% relative", "Do not ship; review form or offer"],
            ["Sample ratio mismatch", "p-value above 0.001 (a common threshold)", "Treat the result as invalid; debug"],
          ],
        },
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Choosing guardrails after seeing the results.",
          "Adding many guardrails, then reacting to whichever one moves by chance.",
          "Reading a non-significant guardrail as proof of no harm.",
          "Measuring returns and lead quality only within the test window.",
          "Ignoring sample ratio mismatch because the primary result looks good.",
          "Not stopping a test with a clear error or payment-failure spike.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Guardrails turn a single-metric test into a business decision. Choose a few that the change could plausibly harm, add trust checks to every test, set limits and decision rules in the plan, and follow lagging metrics after the test ends. For related reading, see [[/blogs/ecommerce-ab-testing|ecommerce A/B testing]] and [[/blogs/feature-flag-implementation|feature flags for experiments]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Ron Kohavi, Diane Tang and Ya Xu, Trustworthy Online Controlled Experiments: A Practical Guide to A/B Testing (Cambridge University Press, 2020), on guardrail metrics and sample ratio mismatch. Accessed 5 November 2026.",
        ],
      },
    ],
  },
];
