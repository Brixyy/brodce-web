import Link from "next/link"
import EventCard from "@/components/ui/EventCard"
import SectionTitle from "@/components/ui/SectionTitle"
import FadeInView from "@/components/animations/FadeInView"
import BackgroundAurora from "@/components/ui/BackgroundAurora"
import { EVENTS } from "@/data/events"

export default function EventsSection() {
  const sorted = [...EVENTS].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  )

  return (
    <section id="akce" className="relative py-20 lg:py-28 bg-stone-50 overflow-hidden">
      <BackgroundAurora variant="warm" intensity="subtle" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <SectionTitle
            title="Nadcházející akce"
            subtitle="Co chystáme v Brodcích"
          />
          <Link
            href="/aktuality#akce"
            className="text-sm font-semibold text-primary hover:text-primary-mid transition-colors whitespace-nowrap"
          >
            Všechny akce →
          </Link>
        </FadeInView>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sorted.map((event, i) => (
            <FadeInView key={event.id} delay={i * 60}>
              <EventCard event={event} />
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
