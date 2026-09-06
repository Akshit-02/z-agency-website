import { Clock, Video } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

/**
 * Placeholder scheduling panel — swap the inner markup for a real Calendly /
 * Cal.com embed (e.g. <InlineWidget url="https://calendly.com/your-team" />)
 * once a scheduling link exists. Kept as its own component for a one-place swap.
 */
export function BookingEmbed() {
  const days = ["Mon 9", "Tue 10", "Wed 11", "Thu 12", "Fri 13"];
  const times = ["10:00 AM", "11:30 AM"];

  return (
    <div className="border border-line">
      <div className="flex items-center justify-between border-b border-line px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center border border-line-strong">
            <Video className="size-4 text-ink" />
          </div>
          <div>
            <p className="font-medium text-ink">30-minute intro call</p>
            <p className="text-xs text-ink-faint">Video call · scheduling link coming soon</p>
          </div>
        </div>
        <Clock className="size-4 text-ink-faint" />
      </div>

      <div className="grid grid-cols-5 gap-2 p-6 opacity-70">
        {days.map((day) => (
          <div key={day} className="text-center">
            <p className="font-mono-label text-[0.65rem] font-medium text-ink-soft">{day}</p>
            <div className="mt-3 flex flex-col gap-1.5">
              {times.map((time) => (
                <span
                  key={time}
                  className="border border-line px-1.5 py-1.5 text-[0.62rem] text-ink-faint"
                >
                  {time}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-line bg-mist px-6 py-5 text-center">
        <p className="text-sm text-ink-soft">
          Our scheduling calendar is being finalized. In the meantime, send a message and
          we&rsquo;ll set up a time directly.
        </p>
        <ButtonLink href="/contact" size="sm" className="mt-4">
          Request a time
        </ButtonLink>
      </div>
    </div>
  );
}
