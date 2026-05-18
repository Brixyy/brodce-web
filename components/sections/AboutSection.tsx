import Image from "next/image"
import Link from "next/link"
import CountUp from "@/components/animations/CountUp"
import FadeInView from "@/components/animations/FadeInView"
import SectionTitle from "@/components/ui/SectionTitle"
import BackgroundAurora from "@/components/ui/BackgroundAurora"
import RiverShape from "@/components/ui/RiverShape"
import { MUNICIPALITY } from "@/data/municipality"

const STATS = [
  { value: MUNICIPALITY.foundedYear, label: "Rok první zmínky", suffix: "" },
  { value: MUNICIPALITY.population, label: "Obyvatel", suffix: "" },
  { value: MUNICIPALITY.area, label: "km² plochy", suffix: "", decimals: 2 },
  { value: MUNICIPALITY.distanceFromMB, label: "km od Ml. Boleslavi", suffix: "" },
]

export default function AboutSection() {
  return (
    <section id="o-obci" className="relative py-20 lg:py-28 bg-stone-50 overflow-hidden">
      <BackgroundAurora variant="river" intensity="subtle" />
      <RiverShape position="bottom-left" size={700} opacity={0.06} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <FadeInView direction="left" className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/gallery/sokolovna.jpg"
                alt="Sokolovna Brodce"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay card */}
              <div className="absolute bottom-5 left-5 right-5 glass-white rounded-2xl p-4">
                <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">Erb Brodce</p>
                <p className="text-sm text-stone-700 font-medium">
                  {MUNICIPALITY.heraldry.description}
                </p>
                <p className="text-xs text-stone-400 mt-1">od roku {MUNICIPALITY.heraldry.year}</p>
              </div>
            </div>

            {/* Decorative element */}
            <div
              className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-20"
              style={{ background: "radial-gradient(circle, #4A90D9, transparent)" }}
            />
          </FadeInView>

          {/* Text column */}
          <FadeInView direction="right" delay={100}>
            <SectionTitle
              title="Historie a charakter"
              subtitle="Tisíc let na Pojizeří"
              className="mb-6"
            />

            <div className="prose prose-stone max-w-none text-stone-600 text-sm sm:text-base leading-relaxed space-y-4 mb-8">
              {MUNICIPALITY.history.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <Link
              href="/o-obci"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-mid transition-colors"
            >
              Více o historii →
            </Link>
          </FadeInView>
        </div>

        {/* Stats row */}
        <div className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <FadeInView key={stat.label} delay={i * 100}>
              <div className="relative bg-white rounded-2xl p-5 sm:p-6 text-center shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-stone-100">
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-primary/50 via-river to-primary/20" />
                <div className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-1 tabular-nums">
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    decimals={"decimals" in stat ? (stat.decimals ?? 0) : 0}
                  />
                </div>
                <p className="text-xs sm:text-sm text-stone-500 font-medium">{stat.label}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
