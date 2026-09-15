import { Lightbulb, TrendingUp, Info } from "lucide-react";
import { renderInline } from "@/lib/inline-content";

export type CalloutType = "tip" | "takeaway" | "note";

const config: Record<CalloutType, { label: string; icon: typeof Lightbulb; accent: "blue" | "orange" }> = {
  tip: { label: "Pro tip", icon: Lightbulb, accent: "orange" },
  takeaway: { label: "Key takeaway", icon: TrendingUp, accent: "blue" },
  note: { label: "Worth noting", icon: Info, accent: "blue" },
};

export function Callout({ type, text }: { type: CalloutType; text: string }) {
  const { label, icon: Icon, accent } = config[type];
  const accentText = accent === "blue" ? "text-blue" : "text-orange";
  const accentBorder = accent === "blue" ? "border-l-blue" : "border-l-orange";

  return (
    <div className={`flex gap-4 rounded-r-lg border-l-2 bg-[#f3f2ee] py-5 pl-6 pr-6 ${accentBorder}`}>
      <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${accentText}`} aria-hidden="true" />
      <div>
        <p className={`text-[0.8rem] font-medium uppercase tracking-[0.08em] ${accentText}`}>{label}</p>
        <p className="mt-1.5 text-pretty text-[1.02rem] leading-relaxed text-ink-soft">
          {renderInline(text)}
        </p>
      </div>
    </div>
  );
}
