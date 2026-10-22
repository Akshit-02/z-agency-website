import type { BlogPost } from "./blog-data";

/**
 * Mobile App Development cluster (part four): authentication, security,
 * data privacy, push notifications and offline-first development. Same
 * additive module pattern, merged into `posts` in blog-data.ts.
 */

export const mobilePosts4: BlogPost[] = [
  // ---------------------------------------------------------- AUTHENTICATION
  {
    slug: "mobile-app-authentication",
    title: "Mobile App Authentication: Login, Signup, OTP, Social Login and Security",
    seoTitle: "Mobile App Authentication: Login, OTP, Social Login and Security",
    excerpt:
      "How mobile app authentication works: choosing between passwords, OTP, passkeys, social login and biometrics, handling tokens and sessions safely, and designing login flows users complete.",
    category: "Mobile Apps",
    banner: "authflow",
    date: "2026-09-25",
    readingTime: "14 min read",
    relatedServiceSlugs: ["mobile-app-development", "ui-ux-design"],
    relatedIndustrySlugs: ["fintech", "healthcare-healthtech", "ecommerce"],
    faqs: [
      { q: "What is the difference between authentication and authorization?", a: "Authentication confirms who the user is. Authorization decides what that user is allowed to do. An app can sign someone in correctly and still expose data if the server doesn't check permissions on every request." },
      { q: "What is the most secure login method for a mobile app?", a: "Passkeys are among the strongest options for most consumer apps because they resist phishing and there's no shared secret to steal. For higher-risk apps, combine a strong primary method with multi-factor authentication." },
      { q: "Is SMS OTP secure?", a: "It's convenient but has known weaknesses, including SIM-swap attacks and interception. It's reasonable for low-to-moderate risk sign-in, but high-risk actions deserve stronger factors such as passkeys or authenticator apps." },
      { q: "Is biometric login a replacement for a password?", a: "On mobile, Face ID, Touch ID and Android biometrics usually unlock a credential stored securely on the device. They confirm the person holding the phone; the server still relies on tokens or passkeys." },
      { q: "Where should a mobile app store tokens?", a: "In the platform's secure storage: the Keychain on iOS and Keystore-backed encrypted storage on Android. Never in plain preferences, local files or logs." },
      { q: "How long should access tokens last?", a: "Access tokens should be short-lived, typically minutes rather than days, with a refresh token used to obtain new ones. Rotate refresh tokens and revoke them on logout." },
      { q: "Do I need Sign in with Apple?", a: "Apple's App Review Guidelines require apps that offer certain third-party or social login options to also offer an equivalent privacy-focused option such as Sign in with Apple, with some exceptions. Check the current guideline for your case." },
      { q: "Should users be able to see and sign out of other devices?", a: "For apps holding personal or financial data, yes. A session list with remote sign-out helps users respond to lost phones or suspicious activity." },
      { q: "Should login use the system browser or a native form?", a: "For OAuth and third-party identity providers, the recommended practice for native apps is to use the system browser or a platform authentication session, with PKCE, rather than an embedded web view." },
      { q: "How does this relate to overall app security?", a: "Authentication is one part of security. Storage, networking, API authorization, dependencies and testing are covered in the mobile app security guide." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Mobile app authentication is how an app confirms who a user is and keeps them signed in safely. A sound setup picks sign-in methods that fit the app's risk and audience (passkeys, social login, email and password, or one-time codes), adds multi-factor authentication where the stakes justify it, issues short-lived access tokens with rotating refresh tokens, stores them in the Keychain or Keystore, and enforces authorization on the server for every request. Recovery, logout and session management complete the picture.",
        ],
      },
      {
        heading: "Authentication vs Authorization",
        body: [
          "Authentication answers \"who is this?\" Authorization answers \"what may they do?\" Mobile apps often get the first right and the second wrong: the app hides a button, but the API still returns another user's data if asked. Every API endpoint must check that the authenticated user is allowed to perform the action. The broader security picture is covered in [[/blogs/mobile-app-security|how to build secure mobile apps]].",
        ],
      },
      {
        heading: "How Mobile Authentication Works",
        body: [
          "The app sends the user's credentials or proof of identity to an authentication server. The server verifies it and returns an access token (short-lived, attached to API calls) and a refresh token (longer-lived, used only to get new access tokens). The app keeps both in secure storage, refreshes the access token before it expires, and discards both on logout.",
        ],
        visual: { variant: "rows", accent: "orange", caption: "App → auth server → tokens → secure storage → API, with refresh happening quietly in the background." },
      },
      {
        heading: "Sign-In Methods Compared",
        body: [],
        table: {
          headers: ["Method", "Strengths", "Weaknesses", "Good fit"],
          rows: [
            ["Email and password", "Familiar, works everywhere", "Reuse, phishing, forgotten passwords", "Baseline option, paired with password managers"],
            ["Email magic link or OTP", "No password to remember", "Depends on email access; context switch", "Low-frequency use apps"],
            ["SMS OTP", "Fast, familiar in many markets", "SIM swap, interception, cost", "Low-to-moderate risk, phone-first markets"],
            ["Passkeys", "Phishing-resistant, no shared secret", "Newer; needs account recovery design", "Most consumer and business apps"],
            ["Social login", "Very fast signup", "Dependency on the provider", "Consumer apps with broad audiences"],
            ["Biometrics", "Fast re-entry", "Local unlock, not a server credential", "Returning users"],
            ["Enterprise SSO", "Central control for organizations", "Integration effort", "B2B and internal apps"],
          ],
        },
      },
      {
        heading: "Email and Password",
        body: [
          "Still the most widely understood method. Support password managers and autofill, allow long passphrases, check new passwords against known breached passwords, rate-limit attempts, and hash passwords on the server with a modern algorithm. Never send or store passwords in plain text, and never log them.",
        ],
      },
      {
        heading: "OTP and Passwordless Authentication",
        body: [
          "One-time codes by SMS or email remove the need to remember a password. They're convenient, but SMS codes can be intercepted or redirected through SIM swapping, so treat them as moderate-assurance. Make codes short-lived and single-use, limit attempts, and support platform autofill for one-time codes to reduce friction.",
        ],
      },
      {
        heading: "Passkeys",
        body: [
          "Passkeys use public-key cryptography: the device holds a private key unlocked by biometrics or device PIN, and the server stores only a public key. They resist phishing and there's no shared secret to leak. iOS supports them through the AuthenticationServices framework and Android through Credential Manager, with syncing across a user's devices. Design recovery carefully for users who lose access to all their devices.",
        ],
      },
      {
        heading: "Social Login and Sign in with Apple",
        body: [
          "Signing in with Google, Apple or similar providers shortens signup considerably. Use the providers' official SDKs or OAuth 2.0 with PKCE through the system browser, following the native-app best practices in RFC 8252, rather than an embedded web view. Apple's App Review Guidelines require apps offering certain third-party login options to also offer an equivalent privacy-focused option such as Sign in with Apple, with listed exceptions.",
        ],
      },
      {
        heading: "Biometric Authentication",
        body: [
          "Face ID, Touch ID and Android BiometricPrompt confirm that the person holding the device is its owner. In practice they unlock a credential or key stored in the Keychain or Keystore, which then authenticates with your server. Always provide a fallback such as device passcode, and don't treat a biometric check performed on the device as proof the server can trust on its own.",
        ],
        cta: {
          title: "Designing sign-in for a new app?",
          description: "ZSpace Labs plans authentication across UX, app and backend, so login is both easy to complete and safe to run.",
        },
      },
      {
        heading: "Multi-Factor Authentication",
        body: [
          "Add a second factor where the impact of account takeover is high: financial actions, health data, admin access. Authenticator apps and passkeys are stronger than SMS. Use step-up authentication, asking for an extra factor only when the user attempts a sensitive action, to keep everyday use smooth.",
        ],
      },
      {
        heading: "Access Tokens, Refresh Tokens and Sessions",
        body: [
          "Keep access tokens short-lived and scoped. Use refresh tokens to obtain new ones, rotate refresh tokens on use, and detect reuse of an old refresh token as a sign of theft. Handle refresh in one shared networking layer, as described in [[/blogs/mobile-app-api-integration|mobile app API integration]], so screens never deal with expired tokens directly.",
        ],
      },
      {
        heading: "Secure Token Storage",
        body: [
          "Store tokens in the iOS Keychain and in Android Keystore-backed encrypted storage. Don't keep them in UserDefaults, SharedPreferences, plain files, JavaScript storage without encryption, or crash logs. Clear them fully on logout and when the app detects a compromised session.",
        ],
      },
      {
        heading: "Account Recovery, Logout and Device Management",
        body: [
          "Recovery is where many accounts are actually taken over, so protect it as carefully as login. Logout should revoke the refresh token on the server, not just delete it locally. For sensitive apps, show users their active sessions and devices with the ability to sign them out remotely. Both Apple and Google also require in-app account deletion for apps that let users create accounts.",
        ],
      },
      {
        heading: "Authentication UX",
        body: [
          "Let users explore before forcing signup where possible, offer the fastest options first, support autofill and password managers, show clear error messages that don't reveal whether an account exists, and keep users signed in for a sensible period. The [[/blogs/what-a-good-mobile-app-onboarding-actually-does|onboarding guide]] covers when to ask for an account.",
        ],
      },
      {
        heading: "Backend and API Requirements",
        body: [],
        checklist: [
          "Server-side validation of every token and authorization check on every endpoint",
          "Rate limiting on login, OTP and recovery endpoints",
          "Password hashing with a modern algorithm, never reversible encryption",
          "Refresh token rotation, reuse detection and server-side revocation",
          "Audit logs of sign-ins, recovery and security changes",
          "Account deletion flow that meets App Store and Google Play requirements",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Tokens stored in plain local storage or logged in analytics",
          "Long-lived access tokens with no refresh or revocation",
          "OAuth flows inside embedded web views",
          "Logout that only clears local data",
          "Authorization checked only in the app, not on the server",
          "Recovery flows weaker than the login they protect",
          "Error messages revealing which emails are registered",
        ],
        cta: {
          title: "Want your authentication flow reviewed?",
          description: "Talk to ZSpace Labs about a review of your sign-in UX, token handling and backend checks. Learn more about our [[/services/mobile-app-development|React Native app development]].",
        },
      },
      {
        heading: "Choosing the Right Approach",
        body: [
          "For most consumer apps: passkeys plus social login, with email as a fallback and biometrics for returning users. For fintech and health apps: add MFA and step-up checks for sensitive actions. For B2B and internal apps: enterprise SSO. Whatever you choose, the token handling and server-side authorization described above apply. For the wider build context, see the [[/blogs/mobile-app-development-guide|mobile app development guide]].",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Good authentication balances friction and risk: fast sign-in options for everyday use, stronger factors where the stakes are high, and careful handling of tokens, sessions, recovery and logout behind the scenes. Pair it with server-side authorization and the broader practices in [[/blogs/mobile-app-security|mobile app security]]. For the protocols behind sign-in, see [[/blogs/oauth-vs-openid-connect|OAuth 2.0 vs OpenID Connect]]. For phishing-resistant sign-in, see [[/blogs/passkeys-implementation|adding passkeys]].",
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- SECURITY
  {
    slug: "mobile-app-security",
    title: "How to Build Secure Mobile Apps: Mobile App Security Best Practices",
    excerpt:
      "A practical security guide for mobile apps: threat modeling, storage, networking, API security, secrets, dependencies, tampering, logging and testing, aligned with OWASP guidance.",
    category: "Mobile Apps",
    banner: "securitylock",
    date: "2026-09-25",
    readingTime: "15 min read",
    relatedServiceSlugs: ["mobile-app-development"],
    relatedIndustrySlugs: ["fintech", "healthcare-healthtech", "ecommerce"],
    faqs: [
      { q: "What is OWASP MASVS?", a: "The OWASP Mobile Application Security Verification Standard, a set of security requirements for mobile apps grouped into storage, cryptography, authentication, network, platform interaction, code quality, resilience and privacy." },
      { q: "What is the OWASP Mobile Top 10?", a: "A list of the most significant mobile app security risks, including improper credential usage, supply chain weaknesses, insecure authentication and authorization, insecure communication, insecure data storage and insufficient cryptography." },
      { q: "Can API keys be hidden inside a mobile app?", a: "No. Anything shipped in an app can be extracted. Keep secret keys on your backend and give the app only short-lived, scoped credentials." },
      { q: "Should my app use certificate pinning?", a: "It raises the bar against interception for high-risk apps, but it adds operational risk: a certificate change can break the app for users. Many apps rely on platform TLS validation instead; decide based on risk and your ability to manage pin rotation." },
      { q: "Should apps block rooted or jailbroken devices?", a: "Detection is easy to bypass, so treat it as one signal, not a guarantee. High-risk apps may restrict sensitive features on compromised devices and rely on server-side checks and app attestation." },
      { q: "Does obfuscation make an app secure?", a: "No. Obfuscation slows reverse engineering but doesn't protect secrets or fix vulnerabilities. It's a supporting layer, not a primary control." },
      { q: "Is encryption at rest needed if the phone is encrypted?", a: "Device encryption protects data when the phone is locked. For sensitive data, also use platform secure storage and file protection classes, and avoid storing data you don't need." },
      { q: "How do I test mobile app security?", a: "Combine automated scanning of code and dependencies, review against MASVS, the OWASP Mobile Application Security Testing Guide, and penetration testing for higher-risk apps." },
      { q: "How is security different from privacy?", a: "Security protects data and systems from unauthorized access. Privacy is about what data you collect, why, with what consent and for how long. The mobile app data privacy guide covers that side." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Building a secure mobile app means assuming the device and network can't be fully trusted. Keep secrets and business rules on the server, authenticate users properly and authorize every API request, encrypt traffic and use platform secure storage for sensitive data, keep dependencies updated, avoid logging sensitive information, and test against OWASP's Mobile Application Security Verification Standard (MASVS). Add resilience measures such as obfuscation, app attestation and compromised-device checks in proportion to the app's risk.",
        ],
      },
      {
        heading: "Why Mobile Security Is Different",
        body: [
          "A mobile app runs on hardware you don't control. Attackers can install it on a rooted or jailbroken device, inspect its code, intercept its traffic on networks they control, and call your API directly without the app at all. Security therefore has to live mainly on the server, with the app designed so that a compromised copy can't do more damage than a legitimate user could.",
        ],
        visual: { variant: "grid", accent: "orange", caption: "The attack surface spans the device, the app binary, the network, the API and third-party SDKs." },
      },
      {
        heading: "Start With Threat Modeling",
        body: [
          "List what the app protects (accounts, payments, health data, business data), who might attack it, and how: stolen devices, malicious networks, reverse engineering, abused APIs, compromised SDKs. Rank risks by impact and likelihood, then choose controls. A banking app and a recipe app need very different depth.",
        ],
      },
      {
        heading: "OWASP Mobile Guidance",
        body: [
          "OWASP's Mobile Application Security project provides the MASVS standard and a testing guide. MASVS groups requirements into control areas that make a useful checklist structure.",
        ],
        table: {
          headers: ["MASVS group", "What it covers"],
          rows: [
            ["MASVS-STORAGE", "Sensitive data stored on the device"],
            ["MASVS-CRYPTO", "Correct use of cryptography"],
            ["MASVS-AUTH", "Authentication and authorization"],
            ["MASVS-NETWORK", "Secure communication with backends"],
            ["MASVS-PLATFORM", "Safe use of OS features and interaction with other apps"],
            ["MASVS-CODE", "Secure coding, input handling, dependencies, updates"],
            ["MASVS-RESILIENCE", "Resistance to reverse engineering and tampering"],
            ["MASVS-PRIVACY", "Privacy controls protecting users"],
          ],
        },
      },
      {
        heading: "Authentication and Authorization",
        body: [
          "Use proven sign-in methods, short-lived tokens and secure token storage, covered in depth in [[/blogs/mobile-app-authentication|mobile app authentication]]. Then enforce authorization on the server for every request. Broken object-level authorization, where changing an ID in a request returns someone else's data, remains one of the most common API flaws.",
        ],
      },
      {
        heading: "API Security",
        body: [
          "Treat the API as public, because it effectively is. Authenticate and authorize every endpoint, validate all input, return only the fields the app needs, rate-limit sensitive operations, and log security-relevant events. The [[/blogs/secure-business-website-development|secure development guide]] covers the server side in more detail.",
        ],
      },
      {
        heading: "Encryption in Transit and Certificate Validation",
        body: [
          "Use HTTPS everywhere with modern TLS. iOS App Transport Security and Android's network security configuration both block cleartext traffic by default; don't add exceptions without a strong reason. Never disable certificate validation, even in debug code that might ship. Certificate pinning adds protection for high-risk apps but needs a rotation plan so a certificate change doesn't lock users out.",
        ],
      },
      {
        heading: "Encryption at Rest and Secure Local Storage",
        body: [
          "Store the minimum sensitive data on the device. Keep credentials and keys in the iOS Keychain and Android Keystore. Use iOS data protection classes and Android encrypted storage for sensitive files and databases. Exclude sensitive data from backups where appropriate, and clear it on logout.",
        ],
        cta: {
          title: "Building an app that handles sensitive data?",
          description: "ZSpace Labs designs mobile apps with security in the architecture, from token storage to API authorization.",
        },
      },
      {
        heading: "Secrets and API Keys",
        body: [
          "Anything in the app binary can be extracted, so there's no safe place to hide a secret key in a mobile app. Keep secret keys on your backend, proxy third-party calls that need them, and give the app only short-lived, narrowly scoped credentials. Public identifiers meant for client use, such as some SDK keys, should still be restricted to your app where the provider allows it.",
        ],
      },
      {
        heading: "Session Handling and Input Validation",
        body: [
          "Expire sessions appropriately, revoke tokens on logout and password change, and bind sensitive actions to recent authentication. Validate input on the server even if the app validates it too, and treat deep link parameters, push payloads and data from other apps as untrusted input. See [[/blogs/mobile-app-deep-linking|mobile app deep linking]] for link-specific risks.",
        ],
      },
      {
        heading: "Dependency and Supply Chain Security",
        body: [
          "Third-party SDKs run with your app's permissions and see your users' data. Vet SDKs before adding them, keep them updated, scan dependencies for known vulnerabilities, and remove unused ones. Inadequate supply chain security is a named risk in the OWASP Mobile Top 10.",
        ],
      },
      {
        heading: "Obfuscation, Tampering and Compromised Devices",
        body: [
          "Obfuscation (such as R8 on Android) makes reverse engineering slower. Root and jailbreak detection can flag risky environments but is routinely bypassed. App attestation services, Play Integrity on Android and App Attest on iOS, let your server check that requests come from a genuine app on a genuine device. Use these in layers, proportionate to risk, and keep critical decisions on the server.",
        ],
      },
      {
        heading: "Logging and Sensitive Data",
        body: [
          "Never log passwords, tokens, full card numbers, health details or personal identifiers. Check that crash reports and analytics events don't capture them either; see [[/blogs/mobile-app-crash-reporting|crash reporting and monitoring]]. Strip verbose debug logging from release builds.",
        ],
      },
      {
        heading: "Secure Backend Architecture",
        body: [
          "Keep business rules, pricing, entitlements and fraud checks on the server. Separate environments, restrict admin access, encrypt sensitive data at rest, and monitor for anomalies. See [[/blogs/mobile-app-backend-development|mobile app backend development]] for the components involved.",
        ],
      },
      {
        heading: "Security Testing",
        body: [
          "Scan code and dependencies automatically on every build, review against MASVS, use the OWASP Mobile Application Security Testing Guide for manual checks, and commission penetration testing for higher-risk apps and major releases. Include security cases in regular QA, as described in [[/blogs/mobile-app-testing|mobile app testing]].",
        ],
      },
      {
        heading: "Common Mobile Security Vulnerabilities",
        body: [],
        checklist: [
          "Hardcoded secret keys and credentials in the app",
          "Tokens and personal data in insecure local storage or logs",
          "Missing server-side authorization on API endpoints",
          "Cleartext traffic or disabled certificate validation",
          "Outdated or unvetted third-party SDKs",
          "Untrusted deep link and intent input acted on without validation",
          "Business logic enforced only in the app",
        ],
      },
      {
        heading: "Mobile App Security Checklist",
        body: [],
        checklist: [
          "Threat model written and reviewed",
          "Sign-in methods and MFA matched to risk",
          "Short-lived tokens in Keychain or Keystore",
          "Authorization enforced on every API request",
          "HTTPS only; no cleartext exceptions; certificate validation intact",
          "Sensitive local data minimized and encrypted",
          "No secret keys in the app binary",
          "Dependencies vetted, updated and scanned",
          "No sensitive data in logs, analytics or crash reports",
          "Obfuscation and attestation applied where risk justifies",
          "Security testing against MASVS before major releases",
        ],
        cta: {
          title: "Want a security review of your app?",
          description: "Talk to ZSpace Labs about assessing your app and API against MASVS and prioritizing fixes. See how we approach [[/services/mobile-app-development|mobile app development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Secure mobile apps assume the device, network and binary can be inspected, and keep the decisions that matter on the server. Use OWASP MASVS as a structure, protect storage, network and credentials, manage dependencies, and test regularly. For what data you should collect in the first place, see [[/blogs/mobile-app-data-privacy|mobile app data privacy]]. For the wider build context, see the [[/blogs/mobile-app-development-guide|mobile app development guide]].",
        ],
      },
    ],
  },

  // ----------------------------------------------------------------- PRIVACY
  {
    slug: "mobile-app-data-privacy",
    title: "Mobile App Data Privacy: What Apple and Google Require Before Launch",
    seoTitle: "App Privacy Before Launch: Apple and Google Rules",
    excerpt:
      "Privacy manifests, Data safety, account deletion and photo permissions: what Apple and Google require before an app launches, with a pre-launch checklist.",
    category: "Mobile Apps",
    banner: "datalifecycle",
    sceneKind: "security",
    bannerAlt: "The lifecycle of personal data in a mobile app, from collection and permissions to store declarations, retention and account deletion",
    date: "2026-09-25",
    updated: "2026-10-14",
    readingTime: "13 min read",
    relatedServiceSlugs: ["mobile-app-development", "ui-ux-design"],
    relatedIndustrySlugs: ["healthcare-healthtech", "fintech", "education-edtech"],
    relatedSlugs: ["mobile-app-security", "mobile-app-launch-checklist", "mobile-app-authentication"],
    faqs: [
      { q: "What is mobile app data privacy?", a: "The practices that control what personal data an app collects, why, how it's used and shared, how long it's kept, and what control users have over it." },
      { q: "What counts as personal data?", a: "Broadly, any information relating to an identifiable person: names, emails, phone numbers, precise location, device identifiers, photos, health data, and behavioural data linked to an account or device. Definitions vary by law." },
      { q: "What is data minimisation?", a: "Collecting and keeping only the data needed for a clear purpose. It reduces risk, simplifies compliance and builds user trust." },
      { q: "Do I need a privacy policy for my app?", a: "Both the App Store and Google Play require a privacy policy for apps, and many privacy laws require one as well. It must accurately describe what the app does with data." },
      { q: "What are Apple's App Privacy details?", a: "The \"privacy nutrition label\" developers complete in App Store Connect, describing data collected by the app and its third-party partners, including SDKs, and whether it's used for tracking. You can update the answers without submitting a new build." },
      { q: "What is Google Play's Data safety section?", a: "A declaration in Play Console describing what data an app collects and shares, security practices and deletion options, displayed on the store listing. Every app on a closed, open or production track needs one, even if it collects no data." },
      { q: "What is ITMS-91053?", a: "The error developers report receiving from App Store Connect when a build uses one of Apple's required-reason APIs without declaring an approved reason in a privacy manifest. Since 1 May 2024, Apple does not accept such builds. The fix is to add the declaration to your app's manifest or update the SDK that uses the API." },
      { q: "Is deactivating an account enough for Apple?", a: "No. Apple's guidance says that only offering to temporarily deactivate or disable an account is insufficient. You can offer deactivation as an extra option, but users must be able to start full deletion in the app." },
      { q: "What is App Tracking Transparency?", a: "Apple's framework requiring apps to ask permission before tracking users across other companies' apps and websites or accessing the advertising identifier for that purpose." },
      { q: "Must apps let users delete their accounts?", a: "Apple and Google both require apps that allow account creation to let users request account deletion, and Google Play also requires a web-based deletion option." },
      { q: "Does GDPR apply to my app?", a: "It can apply to apps processing personal data of people in the EU, depending on circumstances, and the UK has its own version. Other regions have different laws. Get qualified legal advice for your specific situation." },
      { q: "Is this article legal advice?", a: "No. It explains technical, product and store requirements. Privacy obligations depend on jurisdiction, industry and specifics, so confirm requirements with qualified legal counsel." },
    ],
    content: [
      {
        heading: "What do you need on privacy before launching an app?",
        body: [
          "**Before you submit, Apple and Google expect five things to be true:** your store privacy declarations (Apple's App Privacy details and Google Play's Data safety form) match what the app and every SDK in it actually collect; your iOS build declares an approved reason for each required-reason API in a privacy manifest; users who can create an account can also start deleting it inside the app, with a web link as well on Google Play; you request only the permissions the features need, using the Android photo picker where broad media access is not core; and you have an accurate privacy policy linked from the app and the listings.",
          "Underneath the store rules sits the real work: collect less, ask at the right moment, control third-party SDKs, keep data only as long as needed and honour deletion everywhere it is stored. Local privacy laws add obligations that vary by market. This page explains technical and store requirements; it is not legal advice, so confirm legal obligations with qualified counsel.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Missing required-reason declarations stop iOS builds being accepted (reported as ITMS-91053).",
          "Apple treats deactivation as insufficient; deletion must start in the app.",
          "Google Play needs an in-app deletion path and a web link for deletion requests.",
          "Every Play app needs a Data safety form, even one that collects nothing.",
          "Broad photo and video access on Play is only for apps whose core function needs it.",
          "You are responsible for what your SDKs collect, in both stores.",
        ],
      },
      {
        heading: "Store privacy pre-flight: Apple and Google",
        body: [
          "Use this table as a pre-flight check. The last column is what tends to go wrong when a row is skipped.",
        ],
        table: {
          headers: ["Requirement", "Apple App Store", "Google Play", "What goes wrong if you skip it"],
          rows: [
            ["Privacy declaration", "App Privacy details in App Store Connect, including data collected by third-party partners", "Data safety form for every app on closed, open or production tracks, including apps that collect no data", "Submission blocked, or a declaration that does not match the app; on Play, discrepancies can lead to blocked updates or removal"],
            ["Privacy policy", "Required", "Required, including for apps that collect no data", "Listing incomplete; rejection"],
            ["Required-reason APIs", "Approved reason declared in a privacy manifest", "No equivalent", "Build not accepted by App Store Connect"],
            ["Third-party SDKs", "Privacy manifests (and signatures for binary dependencies) for SDKs on Apple's list", "SDK data included in Data safety", "Rejection, or declarations that understate collection"],
            ["Account deletion", "Start deletion in the app; deactivation alone is insufficient", "In-app path and a web link for deletion requests", "Rejection or policy enforcement"],
            ["Photos and videos", "Purpose strings for each permission", "READ_MEDIA_IMAGES and READ_MEDIA_VIDEO only if core functionality needs broad access; otherwise the photo picker", "Policy rejection on Play"],
            ["Notifications", "User permission required", "POST_NOTIFICATIONS runtime permission on Android 13+", "Notifications silently not shown"],
            ["Tracking", "App Tracking Transparency before tracking", "Advertising ID controls and policy rules", "Rejection; inaccurate tracking disclosure"],
          ],
        },
      },
      {
        heading: "Privacy manifests and required-reason APIs (ITMS-91053)",
        body: [
          "Apple keeps a list of APIs that can be misused to fingerprint devices, called required-reason APIs. If your app or any SDK in it uses one, the privacy manifest (PrivacyInfo.xcprivacy) must declare the API category and an approved reason. Apple's documentation is direct: \"Starting May 1, 2024, apps that don't describe their use of required reason API in their privacy manifest file aren't accepted by App Store Connect.\" Developers report this failure as ITMS-91053, a missing API declaration.",
          "Separately, Apple publishes a list of commonly used third-party SDKs (it includes Firebase packages, Flutter, Alamofire and OneSignal, among others). When a new app or an update adds one of them, the SDK must include its own privacy manifest, and a signature if it is a binary dependency. Apple's note on this is worth repeating to the whole team: \"You are responsible for all the code the SDK includes.\"",
          "In practice: update SDKs to versions that ship manifests, add your own app-level manifest for your code, and check the upload email from App Store Connect before you plan a release date around the build.",
        ],
      },
      {
        heading: "Account deletion: deactivating is not deleting",
        body: [
          "Apple's App Review Guideline 5.1.1(v) says: \"If your app supports account creation, you must also offer account deletion within the app.\" Apple's account deletion guidance adds that \"only offering to temporarily deactivate or disable an account is insufficient\". If users must visit a website to finish, link directly to the right page. Apps outside highly regulated industries should not require a phone call, an email or another support flow to delete an account. Apps that use Sign in with Apple should revoke the user's tokens through the Sign in with Apple REST API.",
          "Google Play requires an in-app path and \"a web link resource where users can request app account deletion and associated data deletion\", so people who have already uninstalled the app can still ask. You may keep some data for legitimate reasons such as security, fraud prevention or regulatory compliance, as long as you disclose that.",
          "The engineering part is making deletion reach every system: the main database, file storage, analytics, support tools, email platforms and backups on their normal expiry. The [[/blogs/mobile-app-authentication|authentication guide]] covers how sign-in and tokens fit in.",
        ],
      },
      {
        heading: "Google Play Data safety, even if you collect nothing",
        body: [
          "Every app published on Google Play's closed, open or production tracks must complete the Data safety form, including apps that collect no user data; those still need a privacy policy link. The form covers data collected and shared by SDKs in the app, not only your own code. Google does not verify the answers up front, but says that discrepancies can lead to blocked updates or removal. Apple's App Privacy details work the same way in spirit: you declare, and you are accountable for accuracy. Apple lets you update those answers without shipping a new build.",
        ],
      },
      {
        heading: "Photo, video and notification permissions on Android",
        body: [
          "Google Play's Photo and Video Permissions policy limits READ_MEDIA_IMAGES and READ_MEDIA_VIDEO to apps whose core functionality needs broad access to photos and videos, such as a gallery app. Others should use the system photo picker. Full compliance has been mandatory since 28 May 2025. The Android photo picker gives the app access only to the media the user selects; it is available on Android 11 and later through system updates, and on Android 4.4 to 10 through Google Play services.",
          "Android 13 (API 33) added the POST_NOTIFICATIONS runtime permission, and notifications are off by default for new installs. Ask for it when the user can see why, not on first launch. [[/blogs/mobile-app-push-notifications|Push notification strategy]] covers timing and marketing consent in detail.",
          "On both platforms, request the least access that works (approximate rather than precise location, while-in-use rather than always) and keep the app usable if a permission is denied.",
        ],
      },
      {
        heading: "Third-party SDK audit worksheet",
        body: [
          "Analytics, advertising, attribution, crash reporting and support SDKs often collect data themselves, and both stores hold you responsible for disclosing it. Fill in one row per SDK before you answer either store's questionnaire. Check each SDK's own documentation for what it collects, and configure it to collect less where it allows. AI SDKs and model providers raise similar questions; see [[/blogs/ai-data-privacy|AI data privacy]].",
          "Hypothetical example: the filled row below is illustrative, not a statement about any specific product.",
        ],
        table: {
          headers: ["SDK", "Data it collects", "Linked to the user?", "Privacy manifest present?", "Data safety entry", "App Privacy entry", "Can collection be reduced?"],
          rows: [
            ["Example crash reporter", "Crash logs, device model, OS version", "Linked if you attach a user ID", "Check the SDK release notes", "App info and performance: crash logs", "Diagnostics: crash data", "Do not attach user IDs unless needed"],
            ["Your analytics SDK", "", "", "", "", "", ""],
            ["Your advertising or attribution SDK", "", "", "", "", "", ""],
            ["Your support or chat SDK", "", "", "", "", "", ""],
          ],
        },
      },
      {
        heading: "Privacy vs security, and MASVS-PRIVACY",
        body: [
          "Security protects data from unauthorised access; it is covered in [[/blogs/mobile-app-security|mobile app security]]. Privacy asks whether you should have the data at all, what users agreed to, and who else receives it. A perfectly secure app can still breach privacy by collecting too much or sharing it without consent.",
          "If your team uses the OWASP Mobile Application Security Verification Standard, version 2.1.0 (January 2024) added a MASVS-PRIVACY group with four controls: the app minimises access to sensitive data and resources; prevents identification of the user; is transparent about data collection and usage; and offers user control over their data. They map neatly onto the rest of this page and give testers a shared vocabulary.",
        ],
      },
      {
        heading: "Personal data and what apps commonly collect",
        body: [
          "Personal data is information relating to an identifiable person. On mobile, that includes obvious items like names and emails, and less obvious ones like precise location, device identifiers, photos and contacts, and usage data tied to an account or device. Aggregated, genuinely anonymised data is generally treated differently, but anonymisation is harder than it looks.",
        ],
        table: {
          headers: ["Data type", "Typical purpose", "Questions to ask"],
          rows: [
            ["Account details", "Sign-in, communication", "Do we need a phone number and an email?"],
            ["Location", "Maps, delivery, local content", "Is approximate location enough? Only while in use?"],
            ["Contacts and photos", "Sharing, uploads", "Can we use a system picker instead of full access?"],
            ["Device identifiers", "Analytics, advertising, fraud", "Is tracking consent required?"],
            ["Usage analytics", "Product improvement", "Is it linked to identity? For how long?"],
            ["Health or financial data", "Core features", "Which extra legal and store rules apply?"],
            ["Crash and diagnostic data", "Stability", "Could logs contain personal data?"],
          ],
        },
        visual: { variant: "funnel", accent: "blue", caption: "Collect, use, store, share, retain, delete: privacy decisions apply at every stage of the data lifecycle." },
      },
      {
        heading: "Data minimisation and consent",
        body: [
          "Decide what data each feature needs before building it, prefer less precise data where it works, process on the device where possible, and set retention periods from the start. Privacy by design is cheaper than retrofitting consent and deletion into an app that collected everything by default. The [[/blogs/what-a-good-mobile-app-onboarding-actually-does|onboarding guide]] covers when to ask for permissions.",
          "Where consent is the legal basis for processing, it generally needs to be informed, specific and as easy to withdraw as to give; requirements vary by law. Keep a short in-app explanation at the point of collection and a clear, accurate privacy policy linked from the app and its store listings.",
          "On iOS, App Tracking Transparency requires permission before tracking users across other companies' apps and websites or using the advertising identifier for that purpose. Android lets users reset or delete their advertising ID. Design analytics to work well without cross-app tracking, as described in [[/blogs/mobile-app-analytics|mobile app analytics]].",
        ],
      },
      {
        heading: "Retention, access and deletion requests",
        body: [
          "Store personal data securely on the device and server, restrict internal access, and define how long each type is kept. Delete or anonymise data when its purpose ends. Retention periods should also cover backups, logs and analytics exports, which are easy to forget.",
          "Many privacy laws give users rights to access, correct, export and delete their data. These are separate from the store account deletion rules, but the same plumbing serves both: a way to find every record about a user across your systems and third-party services.",
        ],
      },
      {
        heading: "Regional notes",
        body: [
          "Store rules apply everywhere. Privacy law differs by market, and so do its timelines. The notes below are a starting point for a conversation with counsel, not a summary of obligations. The EU GDPR, California's CCPA as amended by the CPRA, Canada's PIPEDA and sector rules such as health or children's privacy laws may also apply.",
        ],
        table: {
          headers: ["Market", "Main law", "What to check"],
          rows: [
            ["India", "Digital Personal Data Protection Act 2023 and the DPDP Rules 2025", "The Rules were notified in November 2025 and phase in; law-firm summaries put most obligations around May 2027. Confirm current dates against the official text."],
            ["UAE", "Federal Decree-Law No. 45 of 2021 (PDPL), in effect since 2 January 2022", "Cross-border transfer requirements; whether Executive Regulations are in force (check with UAE counsel); the DIFC has its own data protection law."],
            ["UK", "UK GDPR and the Data Protection Act 2018", "The ICO publishes guidance on privacy in the product design lifecycle, including launch."],
            ["Australia", "Privacy Act 1988 and the Australian Privacy Principles", "APP 1 (open management and a privacy policy), APP 8 (overseas disclosure), APP 11 (security)."],
            ["Singapore", "Personal Data Protection Act 2012", "The PDPC lists obligations including transfer limitation and data breach notification."],
          ],
        },
      },
      {
        heading: "Pre-launch privacy checklist",
        body: [
          "Work through this before the first submission and again before any update that adds an SDK, a permission or a new kind of data. For the rest of the release process, see the [[/blogs/mobile-app-launch-checklist|app launch checklist]].",
        ],
        checklist: [
          "Data inventory written: what is collected, why, where it goes, how long it is kept",
          "SDK audit worksheet filled in for every SDK, with collection reduced where possible",
          "SDKs updated to versions with privacy manifests; app-level manifest declares required-reason APIs",
          "Test upload to App Store Connect done early, with no missing-declaration warnings",
          "App Privacy details and Data safety answers match the worksheet",
          "Privacy policy accurate, and linked in the app and both listings",
          "Account deletion starts in the app, is not just deactivation, and reaches every system",
          "Web link for deletion requests published and added in Play Console",
          "Sign in with Apple tokens revoked on deletion, if you use it",
          "Photo picker used unless broad media access is core; permission declarations ready if not",
          "Notification, location and other permissions requested in context, with the app usable if denied",
          "Tracking consent requested before any cross-app tracking",
          "Retention periods enforced, including logs and backups",
          "Legal requirements confirmed with qualified counsel for each market",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Filling in store declarations from memory instead of from an SDK audit",
          "Offering \"deactivate account\" and calling it deletion",
          "Making users email support to delete an account",
          "Requesting broad photo access for a profile picture upload",
          "Forgetting that an SDK update can change what is collected and what must be declared",
          "Deleting the user record but leaving their data in analytics, support and email tools",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Privacy before launch comes down to knowing exactly what your app and its SDKs collect, declaring it accurately in both stores, building real account deletion, and asking for the least access at the right moment. Store rules set a baseline everywhere; local laws add requirements that vary by market, so confirm those with counsel. For protecting the data you do keep, read [[/blogs/mobile-app-security|mobile app security]]. If you would like help building these flows, ZSpace Labs works on [[/services/mobile-app-development|iOS and Android app development]]. For related guides, see [[/blogs/ecommerce-privacy-customer-data|ecommerce privacy and customer data]] and the [[/blogs/mobile-app-development-guide|mobile app development guide]].",
        ],
        cta: {
          title: "Want a privacy and store-compliance check before you submit?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/mobile-app-development|mobile apps]] and [[/services/ui-ux-design|permission and consent UX]]. If useful, we can go through your SDKs, declarations and deletion flow with you, alongside your legal advisers.",
        },
      },
      {
        heading: "Sources",
        body: [
          "Apple: App Review Guidelines (5.1.1(v)); offering account deletion in your app; App Privacy details; third-party SDK requirements; describing use of required reason API; Apple Developer News, 7 December 2023: privacy manifests and required reasons.",
          "Google: Play account deletion requirements; Data safety section; Photo and Video Permissions policy; Android photo picker; notification runtime permission.",
          "Standards and industry: OWASP MASVS v2.1.0 release: MASVS-PRIVACY; Donny Wals: privacy manifests and required-reason APIs (ITMS-91053).",
          "Law and regulation: UAE government: data protection laws; OAIC: Australian Privacy Principles quick reference; PDPC: data protection obligations; ICO: privacy in the product design lifecycle, launch; AZB & Partners: DPDP Act phased roll-out (law-firm commentary).",
          "Accessed 14 October 2026. Store policies and privacy laws change, and dates may move; check the current pages. Nothing here is legal advice.",
        ],
      },
    ],
  },

  // ---------------------------------------------------------- PUSH NOTIFICATIONS
  {
    slug: "mobile-app-push-notifications",
    title: "Push Notifications in Mobile Apps: When to Send Them and How to Build Them",
    seoTitle: "Push Notifications: Strategy and Implementation",
    excerpt:
      "When push notifications are worth sending, when to ask for permission, Apple's rules on marketing pushes, and how APNs, FCM, tokens and deep links work.",
    category: "Mobile Apps",
    banner: "pushflow",
    sceneKind: "mobile",
    bannerAlt: "A push notification travelling from an app's backend through APNs or FCM to a phone, with permission, category and deep-link steps along the way",
    date: "2026-09-25",
    updated: "2026-10-14",
    readingTime: "14 min read",
    relatedServiceSlugs: ["mobile-app-development", "ui-ux-design", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "media-entertainment", "fintech"],
    relatedSlugs: ["mobile-app-deep-linking", "mobile-app-analytics", "mobile-app-data-privacy"],
    faqs: [
      { q: "How do push notifications work?", a: "Your backend sends a message to the platform push service, Apple Push Notification service for iOS or Firebase Cloud Messaging for Android, addressed to a device token. The service delivers it to the device, and the operating system displays it or passes it to the app." },
      { q: "Should I ask for notification permission on first launch?", a: "Usually not. Apple recommends asking in a context that shows people why the app needs it, for example after they schedule their first task, and Android's guidance also suggests asking from a user action. The exception is iOS provisional authorisation, which can be requested at first launch because it does not show a prompt." },
      { q: "Can I ask for notification permission again?", a: "On iOS, the system prompt appears only the first time you request authorisation; after that, people must change it in Settings, so link them there from your in-app preferences. On Android, apps targeting Android 12L or lower get one prompt at first channel creation, and a single \"Don't allow\" blocks re-prompting until the app is reinstalled or targets Android 13 or later." },
      { q: "Can I send marketing push notifications on iOS?", a: "Only with explicit opt-in. App Review Guideline 4.5.4 says push notifications should not be used for promotions or direct marketing unless customers have opted in through consent language shown in your app, and you provide a way in the app to opt out. Apple's design guidelines also say never to use the Time Sensitive level for marketing." },
      { q: "What is a device token?", a: "An identifier issued by APNs or FCM for a specific app installation. Your backend stores it and uses it to address notifications. Tokens can change or become invalid, so they must be refreshed and cleaned up." },
      { q: "Do Android apps need permission to send notifications?", a: "On Android 13 and later, apps must request the POST_NOTIFICATIONS runtime permission, and notifications are off by default for new installs. iOS has always required users to grant notification permission." },
      { q: "Can I use Firebase Cloud Messaging for iOS?", a: "Yes. FCM can deliver to iOS by forwarding messages through APNs, which is still required. You need APNs credentials configured either way." },
      { q: "What is a silent or data notification?", a: "A message that carries data to the app without showing an alert, for example to trigger a background refresh. Platforms limit how often these are delivered and don't guarantee timing." },
      { q: "What are notification channels?", a: "On Android 8.0 and later, every notification belongs to a channel, such as order updates or promotions. Users can control each channel separately in system settings, and the app cannot change a channel's importance after creating it." },
      { q: "How often should an app send push notifications?", a: "There's no universal number. Send when there's something timely and relevant to that user, let users control categories and frequency, and watch opt-out and uninstall signals." },
      { q: "What happens when a user taps a notification?", a: "The app should open directly to the relevant screen using a deep link or route in the payload, handling cases where the user needs to sign in first or the content no longer exists." },
      { q: "Why are some notifications not delivered?", a: "Invalid or expired tokens, disabled permissions, battery optimisations, payload errors, rate limiting or misconfigured credentials. Log send results and remove tokens the push service reports as invalid." },
    ],
    content: [
      {
        heading: "When should your app use push notifications?",
        body: [
          "**Use push when something has changed that the user would want to know about before they next open the app:** an order shipped, a payment failed, a message arrived, an appointment is soon, a security event happened on their account. Those notifications are expected and tend to stay switched on. Push becomes a problem when it is used to pull people back into the app for your reasons rather than theirs: generic reminders, promotions sent to everyone, or several alerts about the same thing. That is when people mute the app, turn off notifications or uninstall it.",
          "Three rules follow. Ask for permission when the user can see the value, not on first launch. Keep marketing separate from service messages, and on iOS send marketing only to people who explicitly opted in, with an in-app way to opt out (Apple's App Review Guideline 4.5.4). And treat every opt-out as feedback about what you sent.",
          "The first half of this page is the strategy: when to ask, what to send and how to tell if it is working. The second half covers implementation with APNs, FCM, tokens, payloads and deep links.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Push is worth it for timely, personal, expected information; it is a liability as a generic re-engagement tool.",
          "iOS shows its permission prompt once; use an in-app explanation first so you do not waste it.",
          "Android 13+ needs the POST_NOTIFICATIONS permission, and notifications are off by default for new installs.",
          "Marketing pushes on iOS need explicit opt-in and an in-app opt-out, and must never use the Time Sensitive level.",
          "Separate categories and channels so people can keep service messages and mute promotions.",
          "Watch opt-outs, permission changes and invalid tokens by message type, not just open rates.",
        ],
      },
      {
        heading: "When push is worth it, and when it becomes a problem",
        body: [
          "A useful test is whether the user would be annoyed **not** to receive the notification. If yes, it is probably worth sending. If they would never notice its absence, it is probably noise.",
          "Push tends to earn its place in apps with real events: commerce and delivery, bookings, payments and banking, messaging, collaboration and anything with deadlines. It is weaker in apps where nothing changes unless the user acts, where the honest answer to \"why are we sending this?\" is engagement targets. In those apps, in-app messages, email or a better home screen may do the job without spending the user's trust.",
          "Push is also not a delivery guarantee. Users can switch it off, the operating system can delay or group it, and Apple's guideline says push notifications must not be required for the app to function. Anything critical, such as a receipt or a password reset, needs another channel too.",
        ],
      },
      {
        heading: "When to ask for permission",
        body: [
          "On iOS, Apple's documentation says: \"The first time your app makes this authorization request, the system prompts the person to grant or deny the request and records that response. Subsequent authorization requests don't prompt the person.\" A refusal sends people to Settings if they change their mind. Apple recommends making the request \"in a context that helps people understand why your app needs authorization\", for example after someone schedules their first task.",
          "That is why many apps show a **pre-permission prompt** first: an honest in-app screen that explains what you will send and why, with \"Turn on notifications\" and \"Not now\". Only a yes triggers the system dialog. A no costs nothing, and you can offer again at a better moment. Keep it plainly your own screen, not something styled to look like the system alert.",
          "iOS also offers **provisional authorisation**: notifications are delivered quietly to Notification Center without a prompt, and people choose to keep or turn them off when they see one. Apple notes you can request this at first launch, because no prompt is shown. It suits apps whose value is easier to show than to describe.",
          "On **Android 13 (API 33)** and later, POST_NOTIFICATIONS is a runtime permission and notifications are off by default for new installs. Apps that target Android 13 or later decide when the dialog appears; Android's guidance is to ask from a user action. Apps that target Android 12L or lower get the dialog when they create their first notification channel, and one \"Don't allow\" blocks the prompt until the app is reinstalled or updated to target Android 13. Existing eligible apps keep permission when the device upgrades, and media session notifications are exempt.",
        ],
        table: {
          headers: ["Situation", "What to do"],
          rows: [
            ["User has just done something with an obvious follow-up (placed an order, booked, sent a message)", "Show the pre-permission prompt now, naming that update"],
            ["First launch, no action yet", "Do not ask. On iOS, consider provisional authorisation instead"],
            ["User tapped \"Not now\" on your screen", "Offer again at the next relevant action, not on every launch"],
            ["User refused the system prompt", "Do not nag. Show the state in in-app preferences, with a link to system settings"],
            ["You want to send marketing", "Ask separately, with explicit consent wording, after service permission is settled"],
          ],
        },
      },
      {
        heading: "Transactional vs marketing notifications",
        body: [
          "Transactional notifications (order shipped, payment failed, appointment tomorrow, new message) respond to something the user did or is waiting for. Marketing notifications (offers, new features, re-engagement nudges) are your agenda. They need different consent, categories and limits.",
          "Apple's App Review Guideline 4.5.4 is the rule to know: push notifications \"should not be used for promotions or direct marketing purposes unless customers have explicitly opted in to receive them via consent language displayed in your app's UI, and you provide a method in your app for a user to opt out from receiving such messages.\" The same guideline says pushes must not be required for the app to function and should not carry sensitive personal or confidential information.",
          "Apple's Human Interface Guidelines add detail. Before sending marketing, create \"an alert, modal view, or other interface that describes the types of information you want to send and gives people a clear way to opt in or out\". Provide an in-app settings screen where people can change that choice. And: \"Never use the Time Sensitive interruption level to send a marketing notification.\"",
          "Google Play does not have a direct equivalent of Guideline 4.5.4 that we could verify. Its Ads policy is about ads, not your own messages: ads must not imitate system notifications. On Android the practical control is notification channels, so put marketing in its own channel that users can switch off without losing order updates.",
        ],
        callout: {
          type: "note",
          text: "Store rules are not the only rules. General marketing, consumer and privacy laws in your markets may apply to promotional messages whatever the channel. We have not found push-specific consent rules that we could verify for each market, so confirm the position with counsel rather than relying on store policy alone.",
        },
      },
      {
        heading: "Interruption levels and Android channels",
        body: [
          "On iOS, interruption levels decide how loudly a notification arrives. Use Time Sensitive only for events that are happening now or within an hour, as Apple's guidance puts it, and never for marketing. Critical alerts need a special entitlement from Apple and are meant for health and safety. On Android, each channel has an importance level that the user can change but your app cannot change after creating the channel, so plan channels before launch.",
        ],
        table: {
          headers: ["iOS level", "What it does", "Typical use"],
          rows: [
            ["Passive", "Delivered quietly, viewed at leisure", "Recommendations, digests, most marketing"],
            ["Active (default)", "Normal alert", "Messages, order updates"],
            ["Time Sensitive", "Breaks through Focus and scheduled summary", "Account security issue, delivery arriving now"],
            ["Critical", "Also overrides the Ring/Silent switch; needs an entitlement", "Health and safety only"],
          ],
        },
      },
      {
        heading: "Frequency, timing and quiet hours",
        body: [
          "There is no reliable universal frequency figure; the numbers in vendor blogs are illustrative. Start from the user's events, cap marketing per user per week, and test changes against opt-outs rather than opens alone. Apple's guidance is to avoid sending multiple notifications for the same thing, so collapse updates (\"3 new messages\" rather than three alerts) and cancel reminders when the user has already acted.",
          "Send in the user's local time zone, hold non-urgent messages during quiet hours, and schedule reminders close to the moment they matter. Segment by what people have done and said they want, not by sending everything to everyone. Store each user's category preferences on the server, so every sending system honours them.",
        ],
      },
      {
        heading: "Send or don't send: a decision table",
        body: [
          "Use this as a team rule when someone proposes a new notification.",
        ],
        table: {
          headers: ["Message", "Send?", "Why"],
          rows: [
            ["Order shipped, with tracking", "Send", "Expected, personal, timely"],
            ["Payment failed or card expiring", "Send", "The user needs to act to keep the service"],
            ["New sign-in from an unknown device", "Send, Time Sensitive if urgent", "Security; affects the user directly"],
            ["Reply to the user's message", "Send, grouped by conversation", "Expected; collapse bursts"],
            ["Appointment reminder", "Send once, at a useful time", "Cancel it if the user has already confirmed or cancelled"],
            ["Price drop on an item the user saved", "Send only to marketing opt-ins", "Useful, but promotional"],
            ["Weekly offer to all users", "Don't send by push", "Use email or in-app messages; or marketing opt-ins only, at the Passive level"],
            ["\"We miss you\" after a few days away", "Don't send", "Your goal, not theirs; a common reason to turn notifications off"],
            ["Anything containing health, financial or other sensitive detail in the text", "Don't send that text", "It can show on a lock screen; send a generic message and show detail in the app"],
            ["The same update a second time", "Don't send", "Apple advises against multiple notifications for the same thing"],
          ],
        },
      },
      {
        heading: "Notification policy template",
        body: [
          "Write one line per message type and keep it with the product spec. Fill the frequency cap and quiet hours with your own numbers and revisit them when opt-outs move.",
        ],
        table: {
          headers: ["Type", "Consent", "iOS level", "Android channel", "Frequency cap", "Opt-out location"],
          rows: [
            ["Account and security", "Notification permission", "Active or Time Sensitive", "Account, high importance", "As needed", "System settings"],
            ["Transactional", "Notification permission", "Active", "Orders or bookings", "Per event, collapsed", "In-app preferences and system settings"],
            ["Reminders", "Permission plus a user setting", "Active or Passive", "Reminders", "Your cap", "In-app preferences"],
            ["Marketing", "Separate explicit opt-in shown in the app", "Passive or Active, never Time Sensitive", "Promotions, low or default importance", "Your cap", "In-app preferences (required on iOS) and system settings"],
          ],
        },
      },
      {
        heading: "Signals to watch: opt-outs and uninstalls",
        body: [
          "Open rates show whether a message was interesting. Opt-outs show whether it cost you the channel. Track, by message type and campaign: Push is only one lever; [[/blogs/improve-mobile-app-retention|improving app retention without leaning on notifications]] covers the others.",
        ],
        checklist: [
          "Permission status on each launch (granted, denied, provisional) and changes since the last session",
          "Category and channel opt-outs in your in-app preferences",
          "Marketing opt-in rate when you ask, and opt-out rate after each campaign",
          "Tokens the push service reports as invalid, which often follow an uninstall",
          "Uninstalls and churn in the days after a campaign, compared with a holdout group",
          "Support complaints and store reviews that mention notifications",
        ],
      },
      {
        heading: "Hypothetical example: a food-ordering app",
        body: [
          "Hypothetical example: a food-ordering app asks nothing at first launch. After the first order, a pre-permission screen says \"Get updates when your order is accepted and on its way\". Order updates go to an Orders channel at the Active level. Two weeks later, the app asks separately whether the user wants offers, with clear consent wording and a link to preferences. Offers go to a Promotions channel at the Passive level, are capped per week, and are held during quiet hours. The team reviews opt-outs per campaign; when one campaign doubles the Promotions opt-out rate, they stop that format rather than sending more.",
        ],
      },
      {
        heading: "How Push Notification Systems Work",
        body: [
          "The app registers with the operating system and receives a device token from APNs or FCM. It sends that token to your backend, linked to the user. When something happens, your backend builds a payload and sends it to the push service, which delivers it to the device. The OS displays the notification, and a tap opens the app to the relevant screen. For where this sits in the backend, see [[/blogs/mobile-app-backend-development|mobile app backend development]].",
        ],
        visual: { variant: "rows", accent: "orange", caption: "Your backend → APNs or FCM → device → notification → the right screen in your app." },
      },
      {
        heading: "APNs and Firebase Cloud Messaging",
        body: [
          "Apple Push Notification service is the only route for delivering notifications to iOS devices. Firebase Cloud Messaging delivers to Android and can also send to iOS by forwarding through APNs. Many teams use FCM as a single sending API for both platforms, but APNs credentials must still be configured for iOS. Current FCM sending uses the HTTP v1 API.",
        ],
      },
      {
        heading: "Device Tokens",
        body: [
          "Tokens identify an app installation, not a person. A user may have several devices, and tokens change after reinstalls, restores or at the service's discretion. Send the latest token to your backend at every launch, associate it with the signed-in user, remove it on logout, and delete tokens that APNs or FCM report as invalid.",
        ],
      },
      {
        heading: "Android vs iOS Considerations",
        body: [],
        table: {
          headers: ["Area", "iOS", "Android"],
          rows: [
            ["Delivery service", "APNs", "FCM"],
            ["Permission", "Required; prompt shown once; provisional option", "Runtime permission on Android 13+; off by default for new installs"],
            ["User categories", "Notification settings per app; interruption levels", "Notification channels per category (Android 8.0+); importance fixed by the app at creation"],
            ["Rich content", "Notification service and content extensions", "Expanded styles, images, actions"],
            ["Background data messages", "Throttled; not guaranteed", "Subject to battery optimisations"],
          ],
        },
      },
      {
        heading: "Payloads and Deep Linking",
        body: [
          "Keep payloads small (both APNs and FCM cap payload size) and include a route or deep link identifying where the tap should go, plus an ID for analytics. Don't put sensitive personal data in the visible text, which can appear on a locked screen, and write a generic preview for when previews are hidden. The [[/blogs/mobile-app-deep-linking|deep linking guide]] covers routing, including signed-out users and missing content.",
        ],
      },
      {
        heading: "Rich Notifications and Handling Taps",
        body: [
          "Images, action buttons and grouped threads make notifications more useful when they carry real information. Write short, specific text, lead with what changed, and make the tap destination obvious. For store-specific uses such as restock and price-drop alerts, see [[/blogs/ecommerce-app-personalization|ecommerce app personalisation]].",
          "The app may be closed, in the background or in the foreground when a tap arrives. Handle all three. Route to the destination screen, prompt sign-in first if needed and then continue to the destination, and show a helpful state if the content has been removed.",
        ],
      },
      {
        heading: "Analytics and Delivery Failures",
        body: [
          "Track sends, delivery results reported by the push service, opens, the actions taken afterwards, and opt-outs by category. Log errors from APNs and FCM, remove invalid tokens, and alert on sudden drops in delivery that may signal expired credentials. See [[/blogs/mobile-app-analytics|mobile app analytics]] for measuring impact beyond opens.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Requesting permission on first launch without context, and losing the one iOS prompt",
          "Sending marketing to people who only agreed to order updates",
          "Marking promotions as Time Sensitive",
          "One Android channel for everything, so muting offers also mutes order updates",
          "Several notifications for the same event",
          "Never refreshing or cleaning up device tokens",
          "Taps that open the home screen instead of the relevant content",
          "Sensitive data visible on the lock screen",
          "Ignoring push service error responses",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Push notifications work when the plumbing is reliable (tokens, payloads, error handling) and the content is timely, relevant and easy to control. Ask for permission in context, keep marketing separate and opt-in, use interruption levels and channels honestly, and judge success by opt-outs as well as opens. For the privacy declarations that sit alongside notifications, see [[/blogs/mobile-app-data-privacy|mobile app data privacy before launch]]. ZSpace Labs works on [[/services/mobile-app-development|mobile app development]], including notification systems. For the wider build context, see the [[/blogs/mobile-app-development-guide|mobile app development guide]].",
        ],
        cta: {
          title: "Want to plan your notification and permission strategy?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/mobile-app-development|mobile apps]] and [[/services/ui-ux-design|permission and onboarding UX]]. If useful, we can go through your message types, consent screens and channels with you.",
        },
      },
      {
        heading: "Sources",
        body: [
          "Apple: App Review Guidelines (4.5.4 Push Notifications); Human Interface Guidelines: managing notifications; Human Interface Guidelines: notifications; asking permission to use notifications.",
          "Google: notification runtime permission; create and manage notification channels; Google Play Ads policy.",
          "Accessed 14 October 2026. Platform rules change; check the current pages before relying on them.",
        ],
      },
    ],
  },

  // ---------------------------------------------------------- OFFLINE-FIRST
  {
    slug: "offline-first-mobile-app-development",
    title: "Should Your App Work Offline? Offline-First Planning and Development Guide",
    seoTitle: "Offline Mobile App Development: An Offline-First Guide",
    excerpt: "Offline mobile app development, job by job: which tasks need offline support, what drives the effort, and how local data, sync queues and conflicts fit.",
    category: "Mobile Apps",
    banner: "offlinesync",
    sceneKind: "mobile",
    bannerAlt: "A mobile app writing to a local database and a sync queue while offline, then syncing changes with the server and resolving conflicts when the connection returns",
    date: "2026-09-25",
    updated: "2026-10-15",
    readingTime: "15 min read",
    relatedServiceSlugs: ["mobile-app-development"],
    relatedIndustrySlugs: ["logistics-supply-chain", "healthcare-healthtech", "construction-infrastructure", "agritech"],
    relatedSlugs: ["mobile-app-architecture", "mobile-app-backend-development", "mobile-app-performance-optimization"],
    faqs: [
      { q: "What does offline-first mean?", a: "An app designed so the local database on the device is the primary source for the UI. Users can read and change data without a connection, and changes sync with the server when connectivity returns." },
      { q: "What's the difference between offline-first and offline-capable?", a: "Offline-capable apps cache some content to show when the connection drops. Offline-first apps are built so core workflows, including creating and editing data, work fully offline and sync later." },
      { q: "When is offline-first worth it?", a: "When users work in places with unreliable connectivity, such as field service, logistics, healthcare visits, travel, or construction sites, and losing work or waiting would be costly." },
      { q: "What databases are used for offline apps?", a: "Commonly SQLite and libraries built on it, such as Room on Android, Core Data or SwiftData on iOS, and cross-platform options for React Native and Flutter. Some managed backends include offline support: Cloud Firestore, for example, enables offline persistence by default on Android and Apple platforms. Realm's on-device database continues as an open source project, but MongoDB's Atlas Device Sync reached end of life on 30 September 2025, so Realm no longer comes with a managed sync service from MongoDB." },
      { q: "How are sync conflicts resolved?", a: "Common strategies include server-wins, last-write-wins, field-level merging, and asking the user. The right choice depends on the data; financial records and shared documents need different rules." },
      { q: "What are optimistic updates?", a: "Showing a change in the UI immediately as if it succeeded, while the sync happens in the background, and rolling back or flagging it if the server rejects it." },
      { q: "Is offline data secure?", a: "It's as secure as you make it. Sensitive offline data should be minimised, encrypted using platform facilities, and cleared on logout." },
      { q: "How do you test offline behaviour?", a: "Use airplane mode and network conditioning to simulate no connection, slow connections and flaky networks, and test sync after long offline periods and with conflicting edits." },
      { q: "Does offline-first make development more expensive?", a: "Yes, typically. Sync, conflict handling and testing add real work, which is why it should be reserved for apps where offline use genuinely matters." },
      { q: "Can payments or bookings work offline?", a: "They should not be committed offline. Anything that moves money or claims a scarce resource, such as a stock unit or an appointment slot, needs the server to confirm it. The app can save the request, show it clearly as pending, and submit it when the connection returns, but the user should not be told it succeeded until the server says so." },
      { q: "Do we need offline support for the whole app?", a: "Rarely. Most apps have a few jobs that must work without signal and many that can simply show a clear error or cached data. Deciding job by job usually cuts the scope, and the cost, considerably." },
    ],
    content: [
      {
        heading: "Should your app work offline?",
        body: [
          "**Your app should work offline for the specific jobs where users regularly lose signal and where waiting or losing entered data would stop their work. For everything else, good caching and clear error messages are usually enough.** Offline support is a per-job product decision, not an all-or-nothing architecture choice. A field inspection form may need full offline writing; the same app's payment screen should stay online-only.",
          "Android's architecture guidance defines an offline-first app as one that can perform \"all, or a critical subset of its core functionality without access to the internet\". The phrase \"a critical subset\" is the useful part: decide which subset, then build only that.",
          "Offline-first development makes the device's local database the app's primary data source: the UI reads and writes locally, a sync queue sends changes to the server when connected, and the app pulls server updates and resolves conflicts. That is worth the added complexity for field service, logistics, healthcare visits and construction. Many other apps only need offline-capable caching.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Decide offline support job by job, not for the whole app.",
          "Use Android's three write strategies as a shared vocabulary: online-only, queued and lazy.",
          "Never commit money, bookings or stock offline; show a clear pending state instead.",
          "The biggest effort drivers are shared records, attachments, long offline periods and the testing matrix.",
          "Managed sync services can be withdrawn; keep your sync layer replaceable.",
        ],
      },
      {
        heading: "Offline-first vs offline-capable",
        body: [
          "Most apps benefit from some caching so screens load quickly and show something when the connection drops; the [[/blogs/mobile-app-architecture|mobile app architecture guide]] covers that baseline. Offline-first goes further: creating, editing and completing core tasks all work without a connection, and synchronisation becomes a first-class part of the design.",
        ],
        table: {
          headers: ["", "Offline-capable", "Offline-first"],
          rows: [
            ["Primary data source for UI", "Network, with cache fallback", "Local database"],
            ["Reading offline", "Recently viewed content", "All data needed for the workflow"],
            ["Writing offline", "Blocked or limited", "Fully supported, synced later"],
            ["Sync complexity", "Low", "High: queues, conflicts, retries"],
            ["Typical apps", "Content, commerce, social", "Field work, logistics, inspections, travel"],
          ],
        },
      },
      {
        heading: "The job-by-job offline worksheet",
        body: [
          "List every job a user does in the app, then fill one row per job. The write strategies come from Android's official guidance, and they apply equally to iOS and cross-platform apps:",
        ],
        checklist: [
          "**Online-only write:** write to the server first and only update the device after it succeeds. Android's example is a bank transfer. Offline, the app disables the action or explains that a connection is needed.",
          "**Queued write:** put the write in a queue and send it later with exponential backoff. Suited to non-critical data, such as analytics events, where the user does not need to know if it failed.",
          "**Lazy write:** save locally first, then queue it for the server. Android calls this \"the correct choice when the data is critical to the app\", such as a task or form a user must not lose. It needs conflict handling.",
        ],
      },
      {
        heading: "Worksheet columns and how to score them",
        body: [
          "Use these columns. The last one is the verdict that goes into your scope.",
        ],
        table: {
          headers: ["Column", "What to record"],
          rows: [
            ["**Job**", "One user task, such as \"complete an inspection\" or \"check stock level\""],
            ["**Where it happens**", "The real connectivity: office Wi-Fi, vehicles, basements, rural sites, flights"],
            ["**Offline need**", "None / read only / read and write"],
            ["**Freshness tolerance**", "How old can the data be before it causes harm: seconds, minutes, hours or days"],
            ["**Conflict risk**", "Single-owner record / shared record / scarce resource (money, stock, a time slot)"],
            ["**Write strategy**", "Online-only / queued / lazy"],
            ["**Verdict**", "Online-only with good errors / cached read / full offline-first"],
          ],
        },
      },
      {
        heading: "Hypothetical example: a property inspection app",
        body: [
          "**This example is hypothetical.** A company sends inspectors to buildings with poor signal in plant rooms and basements. Its worksheet looks like this:",
        ],
        table: {
          headers: ["Job", "Where", "Offline need", "Freshness", "Conflict risk", "Write strategy", "Verdict"],
          rows: [
            ["View today's assigned jobs", "Office, then on site", "Read", "Hours", "Single owner", "None", "Cached read, refreshed each morning"],
            ["Complete inspection checklist", "Basements, plant rooms", "Read and write", "Hours", "Single owner", "Lazy", "Full offline-first"],
            ["Attach photos", "On site", "Write", "Hours", "Single owner", "Lazy, uploaded on Wi-Fi", "Full offline-first with an upload queue"],
            ["Edit shared site notes", "On site", "Read and write", "Minutes", "Shared record", "Lazy with merge rules", "Offline-first, field-level merge"],
            ["Book a follow-up visit slot", "Anywhere", "None", "Seconds", "Scarce resource", "Online-only", "Online-only with a clear message"],
            ["Usage analytics", "Anywhere", "Write", "Days", "None", "Queued", "Queued, silently retried"],
          ],
        },
      },
      {
        heading: "The \"never offline-commit\" rule",
        body: [
          "Jobs that move money or claim something scarce should never be confirmed on the device alone: taking a payment, booking an appointment slot, reserving a seat, or decrementing stock. Two offline devices can both believe they got the last unit. Use Android's online-only strategy for these, or let the app save the request as **pending** and have the server accept or reject it when the connection returns. The interface must make the pending state obvious and must not show a success message until the server confirms.",
        ],
        callout: {
          type: "tip",
          text: "If a job's conflict risk is \"scarce resource\", its write strategy should be online-only or server-reconciled with a visible pending state. If it is \"single owner\" and the work is valuable, lazy writes are usually right.",
        },
      },
      {
        heading: "What drives the extra effort",
        body: [
          "There is no fixed price for \"adding offline\". These are the factors that make it more or less work, so you can compare estimates on the same basis. Put the relevant ones in the brief for any [[/services/mobile-app-development|mobile app build]] you are scoping. For overall budgeting, see [[/blogs/mobile-app-development-cost|mobile app development cost]].",
        ],
        table: {
          headers: ["Cost driver", "Lower effort", "Higher effort"],
          rows: [
            ["**Offline-write entities**", "One or two record types", "Many related record types"],
            ["**Shared records**", "Each record has one owner", "Several people edit the same record"],
            ["**Attachments and media**", "None, or small images", "Many photos, video or large files"],
            ["**Data volume per user**", "A small assigned set", "Large catalogues or history on the device"],
            ["**Time spent offline**", "Minutes to hours (pull-based sync can cope)", "Days (push-based replica needed)"],
            ["**Authentication offline**", "Short sessions, always online at start", "Tokens that expire while users are offline"],
            ["**Schema changes**", "Rare", "Frequent, requiring on-device migrations"],
            ["**Testing matrix**", "One platform, simple flows", "Several platforms, conflicts, long offline periods"],
            ["**Sync technology**", "Your own simple API", "A managed sync service you depend on"],
          ],
        },
      },
      {
        heading: "Pull-based or push-based sync",
        body: [
          "Android's guidance describes two sync models. **Pull-based** sync fetches data when the app needs it, often just before a screen is shown. It \"works best when the app expects brief to intermediate periods of no network connectivity\" and is simpler to build, but long outages leave users facing empty or stale screens. **Push-based** sync keeps a local replica of the data the user needs and relies on the server to signal changes, so the app can work offline for extended periods; it needs data versioning and a server that supports sync. Many apps use both: pull for fast-changing feeds, push for the records a user is responsible for.",
        ],
      },
      {
        heading: "The architecture",
        body: [
          "The UI reads from and writes to a local database. Writes are also recorded in a sync queue. A sync engine sends queued changes to the API when connectivity allows, pulls changes made elsewhere, resolves conflicts and updates the local database, which updates the UI. Android's guidance makes the local data source \"the canonical source of truth\", with the UI never talking to the network layer directly.",
        ],
        visual: { variant: "rows", accent: "blue", caption: "UI → local database → sync queue → API → server data, with changes pulled back and conflicts resolved." },
      },
      {
        heading: "Local storage and databases",
        body: [
          "SQLite underpins most mobile offline storage, through Room on Android, Core Data or SwiftData on iOS, and libraries for React Native and Flutter. Room \"provides an abstraction layer over SQLite\". SwiftData can optionally sync across one person's devices through iCloud, which is not the same as a multi-user business backend. Managed options such as Cloud Firestore include offline persistence, enabled by default on Android and Apple platforms, with offline writes syncing on reconnect.",
          "Model the local schema around what users need offline, not a full copy of the server. Decide how much data to download: everything a user is assigned, or a recent window.",
        ],
        callout: {
          type: "note",
          text: "Sync-vendor risk: MongoDB deprecated its Atlas Device SDKs and Atlas Device Sync in September 2024, and they reached end of life and were removed on 30 September 2025. Apps built on Device Sync had to move to another solution or remove sync. The on-device Realm database continues as an open source project, with community branches that remove the sync code. The lesson is not to avoid managed sync, but to keep your sync layer behind your own interface, own your server-side data model, and know how you would migrate if a vendor withdrew the service.",
        },
      },
      {
        heading: "Caching",
        body: [
          "Even offline-first apps cache differently by data type. Reference data (product catalogues, forms) can refresh periodically; user-generated records sync continuously; large media may download on demand. Define freshness rules for each, using the freshness column from your worksheet.",
        ],
      },
      {
        heading: "Synchronisation",
        body: [
          "Sync usually combines pushing local changes and pulling server changes since the last sync, using timestamps, version numbers or change tokens. Run sync when connectivity returns and on a schedule, using platform facilities for deferred work such as WorkManager on Android and background tasks on iOS, which the OS may delay. On Android, the queue can be a Room table drained by WorkManager.",
        ],
      },
      {
        heading: "Queueing changes and retries",
        body: [
          "Record each change as an operation in a durable queue that survives app restarts. Send operations in order where order matters, retry with exponential backoff, and make server endpoints idempotent so a retried operation isn't applied twice. Give each operation a client-generated ID for this purpose.",
        ],
      },
      {
        heading: "Conflict resolution",
        body: [
          "Android notes that for mobile apps \"a common approach is 'last write wins'\", using timestamps. It is simple, but it silently discards the earlier edit, so choose per data type:",
        ],
        table: {
          headers: ["Strategy", "How it works", "Suits"],
          rows: [
            ["Server wins", "Server version replaces local change", "Reference data, admin-controlled records"],
            ["Last write wins", "Most recent change kept", "Low-stakes personal data"],
            ["Field-level merge", "Non-overlapping field changes combined", "Records edited by several people"],
            ["User decides", "Conflict shown for manual resolution", "High-value records where silent loss is unacceptable"],
            ["Domain rules", "Business logic decides", "Inventory, bookings, financial data"],
          ],
        },
      },
      {
        heading: "Optimistic updates and data consistency",
        body: [
          "Show changes immediately and mark them as pending until synced. If the server rejects a change, for example because stock ran out, explain it clearly and offer a fix. Keep validation rules consistent between app and server so offline edits don't fail later for avoidable reasons.",
        ],
      },
      {
        heading: "Connectivity detection",
        body: [
          "Platform network APIs tell you whether a network is available, not whether your server is reachable. Treat actual request success as the real signal, and don't block the UI on connectivity checks in an offline-first app. On iOS, `NWPathMonitor` reports network changes, and the path's `isExpensive` (cellular or Personal Hotspot) and `isConstrained` (Low Data Mode) properties let you postpone large syncs such as photo uploads.",
        ],
      },
      {
        heading: "Security of local data",
        body: [
          "Offline apps store more data on the device, so minimise what's downloaded, encrypt sensitive databases and files with platform facilities, clear data on logout, and consider remote wipe for managed devices. See [[/blogs/mobile-app-security|mobile app security]].",
        ],
      },
      {
        heading: "UX for offline states",
        body: [
          "Show connection status unobtrusively, mark items waiting to sync, show when data was last updated, and never let users lose entered work. Explain clearly when an action genuinely needs a connection. See [[/blogs/mobile-app-ux-design|mobile app UX design]] for designing these states.",
        ],
      },
      {
        heading: "Testing offline scenarios",
        body: [],
        checklist: [
          "Airplane mode during creation and editing",
          "Slow and flaky networks, not just fully offline",
          "App killed and restarted with a non-empty sync queue",
          "Long offline periods followed by large syncs",
          "Conflicting edits from two devices",
          "Server rejection of queued changes",
          "Logout with unsynced changes",
          "Expired login while offline",
        ],
      },
      {
        heading: "When offline-first is the wrong choice",
        body: [
          "Field service and maintenance, inspections and audits, delivery and logistics, sales teams visiting customers, healthcare visits, and travel apps are typical candidates. These are illustrative patterns; the deciding factor is always how users work and what failure costs them.",
          "It is usually the wrong choice when users are on stable connections, when the core jobs depend on live data (live prices, availability, payments), when data must never be stored on a device for regulatory or security reasons, or when the team cannot yet support sync and migrations properly. In those cases, a well-cached online app with honest error states is cheaper and more reliable. Common mistakes include building full offline sync for every screen, letting users \"complete\" payments or bookings offline, and choosing a managed sync service without an exit plan.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Android: Build an offline-first app; Save data in a local database using Room. Apple: SwiftData; NWPathMonitor; NWPath. SQLite: Appropriate uses for SQLite.",
          "Vendor documentation: Firebase: access data offline; MongoDB: Atlas Device SDKs deprecation.",
          "Accessed 15 October 2026. Platform APIs and vendor services change; check current documentation before choosing a sync approach.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Offline-first is a deliberate architecture: local data as the source of truth, a durable sync queue, clear conflict rules, secure local storage and honest offline UX. Decide it job by job. Next steps: fill in the worksheet for every user job, mark the scarce-resource jobs as online-only, check which cost drivers apply, and only then ask for estimates. For the wider build context, see the [[/blogs/mobile-app-development-guide|mobile app development guide]], and for keeping sync from draining battery and data, [[/blogs/mobile-app-performance-optimization|mobile app performance optimisation]]. For maps and location features in field apps, see [[/blogs/gis-application-development|GIS application development]].",
        ],
        cta: {
          title: "Scoping an app for field teams?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/mobile-app-development|mobile app development]]. If useful, we can map which of your users' jobs need offline support and what that adds to the build before you commit.",
        },
      },
    ],
  },
];
