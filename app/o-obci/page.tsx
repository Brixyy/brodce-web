import type { Metadata } from "next"
import Image from "next/image"
import {
  Users, TreePine, BookOpen, ExternalLink,
  Waves, MapPin, Bike, Fish,
} from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FadeInView from "@/components/animations/FadeInView"
import CountUp from "@/components/animations/CountUp"
import { MUNICIPALITY } from "@/data/municipality"

export const metadata: Metadata = {
  title: "O obci | Brodce",
  description: "Historie, příroda, spolky a školství v Brodcích — malé obci s velkou historií v srdci Pojizeří.",
}

const STATS = [
  { label: "Rok první zmínky", value: MUNICIPALITY.foundedYear, suffix: "" },
  { label: "Obyvatel", value: MUNICIPALITY.population, suffix: "" },
  { label: "km² plochy", value: MUNICIPALITY.area, suffix: "", decimals: 2 },
  { label: "km od Ml. Boleslavi", value: MUNICIPALITY.distanceFromMB, suffix: "" },
]

export default function OObciPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50 pt-28 pb-20">

        {/* Page header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="mb-10">
            <span className="accent-line" />
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900">O obci Brodce</h1>
            <p className="mt-2 text-stone-500">Malá obec s velkou historií v srdci Pojizeří</p>
          </FadeInView>
        </div>

        {/* Statistiky */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((s, i) => (
              <FadeInView key={s.label} delay={i * 80}>
                <div className="relative bg-white rounded-2xl p-5 text-center shadow-sm border border-stone-100 overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-primary/50 via-river to-primary/20" />
                  <div className="font-serif text-3xl font-bold text-primary tabular-nums">
                    <CountUp target={s.value} suffix={s.suffix} decimals={"decimals" in s ? (s.decimals ?? 0) : 0} />
                  </div>
                  <p className="text-xs text-stone-500 mt-1">{s.label}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>

        {/* ── #historie ── */}
        <section id="historie" className="py-14 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <FadeInView direction="left">
                <span className="accent-line" />
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Historie</h2>
                <div className="space-y-4 text-stone-600 leading-relaxed text-sm sm:text-base">
                  {MUNICIPALITY.history.split("\n\n").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </FadeInView>
              <FadeInView direction="right" delay={100}>
                <div className="space-y-4">
                  <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                    <h3 className="font-semibold text-stone-900 mb-4 text-sm">Základní informace</h3>
                    <dl className="space-y-2.5 text-sm">
                      {[
                        ["Status", MUNICIPALITY.type],
                        ["Kraj", MUNICIPALITY.region],
                        ["Okres", MUNICIPALITY.district],
                        ["PSČ", MUNICIPALITY.postCode],
                        ["Katastrální výměra", `${MUNICIPALITY.area} km²`],
                        ["Počet obyvatel", MUNICIPALITY.population.toLocaleString("cs-CZ")],
                        ["Nadmořská výška", "197 m n. m."],
                        ["Řeka", MUNICIPALITY.river],
                      ].map(([k, v]) => (
                        <div key={k as string} className="flex justify-between gap-4 border-b border-stone-100 pb-2 last:border-0 last:pb-0">
                          <dt className="text-stone-400">{k}</dt>
                          <dd className="font-medium text-stone-700 text-right">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  <div className="bg-primary rounded-2xl p-6 text-white">
                    <h3 className="font-semibold mb-1 text-sm uppercase tracking-wider text-white/60">Erb Brodce</h3>
                    <p className="font-serif text-lg font-bold mb-2">{MUNICIPALITY.heraldry.description}</p>
                    <p className="text-white/50 text-xs">Uděleno roku {MUNICIPALITY.heraldry.year}</p>
                  </div>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* ── #priroda ── */}
        <section id="priroda" className="py-14 bg-stone-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInView>
              <span className="accent-line" />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-8">Příroda a Jizera</h2>
            </FadeInView>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <FadeInView direction="left">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/gallery/jizera.jpg"
                    alt="Příroda v okolí Brodce"
                    fill className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </FadeInView>
              <FadeInView direction="right" delay={100}>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-river/10 flex items-center justify-center">
                      <Waves size={18} className="text-river" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-1">Řeka Jizera</h3>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        Jizera protéká přímo pod Brodcemi. Oblíbené místo pro koupání je tradičně u mlýna, kde se řeka rozšiřuje do klidnějšího přechodu. Na Jizerském úseku jsou povoleny vodní sporty a jízda na kánoi.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-forest/10 flex items-center justify-center">
                      <Bike size={18} className="text-forest" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-1">Cyklotrasy</h3>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        Pojizerská cyklotrasa (KČT č. 4111) vede podél břehu Jizery přímo přes obec. Brodce jsou výhodným výchozím bodem pro výlety do Bezdězu, Mělníka i Mladé Boleslavi.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-forest/10 flex items-center justify-center">
                      <Fish size={18} className="text-forest" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-1">Rybaření</h3>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        Jizera v úseku Brodce nabízí bohaté rybářské revíry. Revír spravuje Pojizerský rybářský svaz. Lístek lze získat na úřadu nebo v prodejnách v Mladé Boleslavi.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-stone-100 flex items-center justify-center">
                      <TreePine size={18} className="text-forest" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-1">Pojizeří a okolí</h3>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        Brodce leží na okraji krajiny Pojizeří s přirozeně zachovalými luhy a remízy podél řeky. Nedaleko je CHKO Kokořínsko-Máchův kraj a přírodní park Střední Pojizeří.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* ── #spolky ── */}
        <section id="spolky" className="py-14 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInView>
              <span className="accent-line" />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-2">Spolky a sport</h2>
              <p className="text-stone-500 mb-8">Aktivní občanský život tvoří páteř komunity Brodce</p>
            </FadeInView>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <FadeInView delay={0}>
                <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100 shadow-sm h-full">
                  <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-4">
                    <Users size={22} className="text-amber-600" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">TJ Sokol Brodce</h3>
                  <p className="text-sm text-stone-600 leading-relaxed mb-4">
                    Tělovýchovná jednota provozující sokolovnu a sportovní hřiště v centru obce. Zajišťuje sportovní oddíly a pořádá tradiční kulturní a sportovní akce pro občany.
                  </p>
                  <div className="space-y-1 text-xs text-stone-500">
                    <p>📍 Sokolovna Brodce</p>
                  </div>
                </div>
              </FadeInView>
              <FadeInView delay={80}>
                <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100 shadow-sm h-full">
                  <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center mb-4">
                    <MapPin size={22} className="text-stone-600" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">Klub vojenské historie</h3>
                  <p className="text-sm text-stone-600 leading-relaxed mb-4">
                    Klub se specializuje na dokumentaci a prezentaci vojenské historie. Provozuje nástěnku a fotogalerii, pořádá výstavy historické techniky a uniforem pro občany i návštěvníky.
                  </p>
                  <div className="space-y-1 text-xs text-stone-500">
                    <p>📍 Brodce</p>
                  </div>
                </div>
              </FadeInView>
              <FadeInView delay={160}>
                <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100 shadow-sm h-full">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                    <BookOpen size={22} className="text-blue-600" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">Knihovna Brodce</h3>
                  <p className="text-sm text-stone-600 leading-relaxed mb-4">
                    Neprofesionální knihovna zřizovaná městysem, evidovaná pod číslem 3883 u Ministerstva kultury ČR. Knihovnice Jana Procházková.
                  </p>
                  <div className="space-y-1 text-xs text-stone-500">
                    <p>📍 Dobrovická 34, 294 73 Brodce</p>
                    <p>🕒 Každý pátek 16:00 – 18:00</p>
                  </div>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* ── #skoly ── */}
        <section id="skoly" className="py-14 bg-stone-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInView className="flex items-end justify-between flex-wrap gap-4 mb-8">
              <div>
                <span className="accent-line" />
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-2">Školství</h2>
                <p className="text-stone-500">Masarykova ZŠ a MŠ Brodce — společná příspěvková organizace v areálu Rudé armády 300</p>
              </div>
              <a
                href="https://www.zsbrodce.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary-mid transition-colors shadow-sm"
              >
                Web školy
                <ExternalLink size={14} />
              </a>
            </FadeInView>

            <div className="grid lg:grid-cols-2 gap-8">
              <FadeInView direction="left">
                <div className="group bg-white rounded-3xl overflow-hidden border border-stone-100 hover:shadow-md transition-all flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/images/gallery/skola.jpg"
                      alt="Masarykova základní škola Brodce"
                      fill className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-5">
                      <span className="bg-white/90 text-primary text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">ZŠ</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-serif text-xl font-bold text-stone-900 mb-1">Základní škola</h3>
                    <p className="text-xs text-stone-400 mb-3">9 ročníků · 11 tříd · 259 žáků (2025/26)</p>
                    <p className="text-sm text-stone-600 leading-relaxed mb-4">
                      Plně organizovaná škola s 1. i 2. stupněm — každý stupeň má vlastní budovu v areálu. Součástí je školní družina a jídelna. Ředitel: <strong className="text-stone-700">Mgr. Bc. Jan Svoboda</strong>.
                    </p>
                    <div className="space-y-1 text-xs text-stone-500 mb-5">
                      <p>📍 Rudé armády 300, 294 73 Brodce</p>
                      <p>📞 <a href="tel:+420326000233" className="hover:text-primary transition-colors">326 000 233</a></p>
                      <p>📧 <a href="mailto:skola@brodce.cloud" className="hover:text-primary transition-colors">skola@brodce.cloud</a></p>
                    </div>
                    <a
                      href="https://www.zsbrodce.cz/zakladni-skola"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-between gap-2 px-4 py-2.5 bg-primary/8 text-primary rounded-xl text-sm font-semibold hover:bg-primary hover:text-white transition-colors"
                    >
                      <span>Detail základní školy</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </FadeInView>
              <FadeInView direction="right" delay={100}>
                <div className="group bg-white rounded-3xl overflow-hidden border border-stone-100 hover:shadow-md transition-all flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/images/hero/skola.jpg"
                      alt="Mateřská škola Brodce"
                      fill className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-5">
                      <span className="bg-white/90 text-amber-700 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">MŠ</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-serif text-xl font-bold text-stone-900 mb-1">Mateřská škola</h3>
                    <p className="text-xs text-stone-400 mb-3">Předškolní vzdělávání · vlastní budova v areálu školy</p>
                    <p className="text-sm text-stone-600 leading-relaxed mb-4">
                      MŠ je součástí Masarykovy ZŠ a MŠ Brodce a má vlastní budovu v areálu školy. Děti zde tráví předškolní léta v prostředí navazujícím přímo na základní školu.
                    </p>
                    <div className="space-y-1 text-xs text-stone-500 mb-5">
                      <p>📍 Rudé armády 300, 294 73 Brodce (areál školy)</p>
                      <p>📞 <a href="tel:+420326000001" className="hover:text-primary transition-colors">326 000 001</a></p>
                      <p>📧 <a href="mailto:ms@brodce.cloud" className="hover:text-primary transition-colors">ms@brodce.cloud</a></p>
                    </div>
                    <a
                      href="https://www.zsbrodce.cz/materska-skola"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-between gap-2 px-4 py-2.5 bg-amber-50 text-amber-700 rounded-xl text-sm font-semibold hover:bg-amber-500 hover:text-white transition-colors"
                    >
                      <span>Detail mateřské školy</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </FadeInView>
            </div>

            {/* Doplňující info — školní jídelna */}
            <FadeInView delay={200} className="mt-6">
              <div className="bg-white rounded-2xl border border-stone-100 p-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                <div className="flex items-center gap-2 text-stone-700 font-medium">
                  <span className="text-lg">🍽️</span>
                  Školní jídelna
                </div>
                <span className="text-stone-400 text-xs">v areálu školy</span>
                <a href="tel:+420326000000" className="text-stone-500 hover:text-primary transition-colors">
                  326 000 000
                </a>
                <a href="mailto:jidelna@brodce.cloud" className="text-stone-500 hover:text-primary transition-colors">
                  jidelna@brodce.cloud
                </a>
                <a
                  href="https://www.zsbrodce.cz/skolni-jidelna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-1.5 text-primary font-semibold hover:text-primary-mid transition-colors text-xs"
                >
                  Detail jídelny
                  <ExternalLink size={12} />
                </a>
              </div>
            </FadeInView>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
