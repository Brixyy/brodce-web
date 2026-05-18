import type { Metadata } from "next"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import NewsCard from "@/components/ui/NewsCard"
import FadeInView from "@/components/animations/FadeInView"
import { NEWS_ARTICLES } from "@/data/news"
import { EVENTS } from "@/data/events"
import { Calendar, MapPin, Clock, Users } from "lucide-react"

export const metadata: Metadata = { title: "Aktuality" }

const CATEGORY_COLORS: Record<string, string> = {
  Obec: "bg-primary/10 text-primary border-primary/20",
  Hasiči: "bg-red-50 text-red-700 border-red-200",
  Sport: "bg-green-50 text-green-700 border-green-200",
  Kultura: "bg-purple-50 text-purple-700 border-purple-200",
  Škola: "bg-amber-50 text-amber-700 border-amber-200",
}

function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString("cs-CZ", { day: "numeric", month: "long", year: "numeric" })
}

function formatDay(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString("cs-CZ", { weekday: "long" })
}

export default function AktualityPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Aktuality */}
          <FadeInView className="mb-10">
            <span className="accent-line" />
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900">Aktuality</h1>
            <p className="mt-2 text-stone-500">Novinky z obce Brodce</p>
          </FadeInView>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {NEWS_ARTICLES.map((article, i) => (
              <FadeInView key={article.id} delay={i * 60}>
                <NewsCard article={article} />
              </FadeInView>
            ))}
          </div>

          {/* Akce a události */}
          <section id="akce" className="scroll-mt-20">
            <FadeInView className="mb-10">
              <span className="accent-line" />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">Akce a události</h2>
              <p className="mt-2 text-stone-500">Nadcházející akce v Brodcích a okolí</p>
            </FadeInView>

            <div className="space-y-4">
              {EVENTS.map((event, i) => {
                const catColor = CATEGORY_COLORS[event.category] ?? "bg-stone-100 text-stone-600 border-stone-200"
                return (
                  <FadeInView key={event.id} delay={i * 60}>
                    <div className={`bg-white rounded-2xl border overflow-hidden shadow-sm hover:shadow-md transition-shadow ${event.highlight ? "border-primary/30 ring-1 ring-primary/10" : "border-stone-200"}`}>
                      <div className="flex gap-0">
                        {/* Datum blok */}
                        <div className={`flex-shrink-0 flex flex-col items-center justify-center px-5 py-4 min-w-[80px] text-center ${event.highlight ? "bg-primary text-white" : "bg-stone-50 text-stone-700 border-r border-stone-100"}`}>
                          <span className="text-2xl font-bold leading-none">
                            {new Date(event.date).getDate()}
                          </span>
                          <span className={`text-xs uppercase font-semibold mt-0.5 ${event.highlight ? "text-white/70" : "text-stone-400"}`}>
                            {new Date(event.date).toLocaleDateString("cs-CZ", { month: "short" })}
                          </span>
                          <span className={`text-[10px] mt-1 ${event.highlight ? "text-white/50" : "text-stone-300"}`}>
                            {new Date(event.date).getFullYear()}
                          </span>
                        </div>

                        {/* Obsah */}
                        <div className="flex-1 px-5 py-4">
                          <div className="flex items-start justify-between gap-3 flex-wrap">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${catColor}`}>
                                  {event.category}
                                </span>
                                {event.highlight && (
                                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                                    Hlavní akce
                                  </span>
                                )}
                              </div>
                              <h3 className="font-semibold text-stone-900 text-base leading-snug">
                                {event.title}
                              </h3>
                            </div>
                          </div>

                          <p className="text-sm text-stone-500 mt-1.5 leading-relaxed">
                            {event.description}
                          </p>

                          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-400">
                            <span className="flex items-center gap-1">
                              <Calendar size={11} />
                              {formatDay(event.date)}, {formatDate(event.date)}
                            </span>
                            {event.time && (
                              <span className="flex items-center gap-1">
                                <Clock size={11} />
                                {event.time}{event.endTime ? `–${event.endTime}` : ""}
                              </span>
                            )}
                            <span className="flex items-center gap-1">
                              <MapPin size={11} />
                              {event.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users size={11} />
                              {event.organizer}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeInView>
                )
              })}
            </div>

            <FadeInView delay={400} className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100 text-sm text-blue-700">
              <strong>Tip:</strong> Chcete přidat akci do kalendáře? Kontaktujte obecní úřad na{" "}
              <a href="mailto:podatelna@brodce.cloud" className="underline hover:no-underline">podatelna@brodce.cloud</a>{" "}
              nebo na tel. +420 326 000 100.
            </FadeInView>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
