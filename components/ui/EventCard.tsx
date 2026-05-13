import { MapPin } from "lucide-react"
import type { Event } from "@/types"
import { formatDay, formatMonth } from "@/lib/utils"
import { cn } from "@/lib/utils"

const CATEGORY_COLORS: Record<string, string> = {
  Obec: "bg-primary/10 text-primary",
  Hasiči: "bg-red-100 text-red-700",
  Sport: "bg-purple-100 text-purple-700",
  Kultura: "bg-amber-100 text-amber-700",
  Škola: "bg-green-100 text-green-700",
}

type Props = { event: Event }

export default function EventCard({ event }: Props) {
  return (
    <div
      className={cn(
        "flex gap-4 p-4 rounded-2xl transition-all hover:shadow-md",
        event.highlight
          ? "bg-primary text-white shadow-lg"
          : "bg-white hover:bg-stone-50"
      )}
    >
      {/* Date block */}
      <div
        className={cn(
          "shrink-0 w-14 rounded-xl flex flex-col items-center justify-center py-2",
          event.highlight ? "bg-white/15" : "bg-stone-50"
        )}
      >
        <span
          className={cn(
            "text-2xl font-bold leading-none",
            event.highlight ? "text-white" : "text-primary"
          )}
        >
          {formatDay(event.date)}
        </span>
        <span
          className={cn(
            "text-[10px] uppercase font-semibold tracking-wide mt-0.5",
            event.highlight ? "text-white/70" : "text-stone-400"
          )}
        >
          {formatMonth(event.date)}
        </span>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span
            className={cn(
              "text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide",
              event.highlight
                ? "bg-white/20 text-white"
                : (CATEGORY_COLORS[event.category] ?? "bg-stone-100 text-stone-500")
            )}
          >
            {event.category}
          </span>
          {event.highlight && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-gold/30 text-gold font-bold uppercase">
              Hlavní akce
            </span>
          )}
        </div>
        <h3
          className={cn(
            "font-semibold text-sm leading-snug",
            event.highlight ? "text-white" : "text-stone-900"
          )}
        >
          {event.title}
        </h3>
        <div
          className={cn(
            "flex items-center gap-1 mt-1 text-xs",
            event.highlight ? "text-white/70" : "text-stone-400"
          )}
        >
          <MapPin size={10} />
          <span>{event.time} · {event.location}</span>
        </div>
      </div>
    </div>
  )
}
