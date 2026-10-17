/**
 * First-touch attribution for enquiries
 * -------------------------------------
 * Records, once per browser session, the page a visitor landed on, the site
 * that referred them (domain only) and any utm_* campaign tags. The contact
 * form sends these with the enquiry so leads can be reported by channel and
 * landing page. Stored in sessionStorage only: nothing is kept after the tab
 * session ends and nothing is sent anywhere until the visitor submits.
 */

export type Attribution = {
  landingPage?: string;
  referrer?: string;
  utm?: string;
};

const KEY = "zs_attribution";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

/** Call on every client navigation; only the first call in a session is kept. */
export function recordFirstTouch() {
  try {
    if (window.sessionStorage.getItem(KEY)) return;
    const url = new URL(window.location.href);
    const utm = UTM_KEYS.map((k) => (url.searchParams.get(k) ? `${k}=${url.searchParams.get(k)}` : ""))
      .filter(Boolean)
      .join("&");
    let referrer = "";
    if (document.referrer) {
      const host = new URL(document.referrer).hostname;
      if (host !== url.hostname) referrer = host;
    }
    const value: Attribution = {
      landingPage: url.pathname.slice(0, 200),
      referrer: referrer.slice(0, 200) || undefined,
      utm: utm.slice(0, 200) || undefined,
    };
    window.sessionStorage.setItem(KEY, JSON.stringify(value));
  } catch {
    // Storage blocked (private mode, disabled cookies): attribution is optional.
  }
}

export function readFirstTouch(): Attribution {
  try {
    const raw = window.sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}
