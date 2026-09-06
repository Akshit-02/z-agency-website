import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#111827",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 80,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <svg width="46" height="46" viewBox="0 0 48 48" fill="none">
              <path
                d="M11 13H37L11 35H37"
                stroke="#FFFFFF"
                strokeWidth="6"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
              <rect x="36" y="9.5" width="6" height="6" fill="#FF6B5E" />
            </svg>
            <span style={{ fontSize: 30, fontWeight: 600, color: "#FFFFFF" }}>Zspace</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 920 }}>
            <span style={{ fontSize: 54, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.12 }}>
              {siteConfig.tagline}
            </span>
            <span style={{ fontSize: 24, color: "rgba(255,255,255,0.55)" }}>
              Strategy · Web · Mobile · Shopify · AI · Automation
            </span>
          </div>
        </div>
        <div style={{ display: "flex", width: "100%", height: 14 }}>
          {["#2563EB", "#7C3AED", "#FF6B5E", "#F4B740", "#0F9D6C"].map((c) => (
            <div key={c} style={{ flex: 1, backgroundColor: c }} />
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
