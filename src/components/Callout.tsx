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
  const accentBorder = accent === "blue" ? "border-l-blue bg-blue-tint/60" : "border-l-orange bg-orange-tint/60";

  return (
    <div className={`flex gap-4 rounded-r-2xl border-l-[3px] py-5 pl-6 pr-6 ${accentBorder}`}>
      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ${accentText}`}><Icon className="h-4 w-4" aria-hidden="true" /></span>
      <div>
        <p className={`text-[0.8rem] font-medium uppercase tracking-[0.08em] ${accentText}`}>{label}</p>
        <p className="mt-1.5 text-pretty text-[1.02rem] leading-relaxed text-ink-soft">
          {renderInline(text)}
        </p>
      </div>
    </div>
  );
}
