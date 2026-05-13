"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, MapPin, CalendarDays, Clock, ArrowRight, Move, X, Plane } from "lucide-react"
import { MUNICIPALITY } from "@/data/municipality"
import { EVENTS } from "@/data/events"

// Vlastní embed HTML (/public/tour-embed.html) — loaduje krpano + tour.xml z brodce.cz,
// ale aplikuje autorotate.speed = 1.4 (-53 %) po onready a při každé změně scény.
const TOUR_URL = "/tour-embed.html"
const HOME_SCENE = "scene_65251" // Letecký pohled (default scéna v tour.xml)
// Poster — letecký pohled na Brodce (Wikimedia, 5184×2876). Visuálně koresponduje s úvodní scénou
// krpano prohlídky („Letecký pohled"). Zobrazen pod průhledným iframem dokud krpano nenačte tiles.
const POSTER_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/0/0c/Brodce_letecky.JPG"

type KrpanoWindow = Window & {
  krpano_get?: (cmd: string) => string | number | boolean | null
  krpano_call?: (cmd: string) => void
}

function getNextEvent() {
  const todayStr = new Date().toISOString().slice(0, 10)
  return [...EVENTS].sort((a, b) => a.date.localeCompare(b.date)).find(e => e.date >= todayStr) ?? EVENTS[0]
}

function getTodayOffice() {
  const day = new Date().getDay()
  const map: Record<number, number> = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4 }
  return map[day] !== undefined ? MUNICIPALITY.officeHours[map[day]] : null
}

function formatEventDate(dateStr: string) {
  const [year, month, day] = dateStr.split("-")
  return `${parseInt(day)}.${parseInt(month)}.${year}`
}

export default function HeroSection() {
  const [hour, setHour] = useState(0)
  const [tourActive, setTourActive] = useState(false)
  const [currentScene, setCurrentScene] = useState(HOME_SCENE)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    setHour(new Date().getHours())
  }, [])

  // ESC deaktivuje tour interakci
  useEffect(() => {
    if (!tourActive) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setTourActive(false)
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [tourActive])

  // Polling aktuální scény z krpana (iframe je same-origin)
  useEffect(() => {
    if (!tourActive) return
    const interval = setInterval(() => {
      const w = iframeRef.current?.contentWindow as KrpanoWindow | null
      if (!w?.krpano_get) return
      const scene = w.krpano_get("xml.scene")
      if (typeof scene === "string" && scene && scene !== currentScene) {
        setCurrentScene(scene)
      }
    }, 400)
    return () => clearInterval(interval)
  }, [tourActive, currentScene])

  const goHomeScene = () => {
    const w = iframeRef.current?.contentWindow as KrpanoWindow | null
    w?.krpano_call?.(`loadscene(${HOME_SCENE}, null, MERGE, BLEND(1))`)
  }

  const greeting =
    hour < 12 ? "Dobré ráno" : hour < 18 ? "Dobrý den" : "Dobrý večer"

  const today = new Date().toLocaleDateString("cs-CZ", {
    weekday: "long",
    day: "numeric",
    month: "long",
  })

  const nextEvent = getNextEvent()
  const todayOffice = getTodayOffice()

  return (
    <section id="hero" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Virtual tour iframe — interactive background */}
      <div className="absolute inset-0 bg-dark-navy">
        {/* Poster — letecký pohled, viditelný dokud krpano nenačte tiles (iframe je transparent) */}
        <Image
          src={POSTER_IMAGE}
          alt="Letecký pohled na Brodce"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <iframe
          ref={iframeRef}
          src={TOUR_URL}
          title="Virtuální prohlídka Brodce 360°"
          className="absolute left-0 top-0 w-full border-0"
          allow="accelerometer; gyroscope; fullscreen; xr-spatial-tracking"
          style={{
            pointerEvents: tourActive ? "auto" : "none",
            // schová spodní krpano thumbnail lištu — padne pod viewport (parent má overflow-hidden)
            height: "calc(100% + 140px)",
          }}
        />
      </div>

      {/* Activation overlay — když !tourActive, klik aktivuje prohlídku */}
      {!tourActive && (
        <button
          type="button"
          onClick={() => setTourActive(true)}
          aria-label="Aktivovat virtuální prohlídku — rozhlédněte se"
          className="absolute inset-0 z-[15] cursor-pointer group"
        >
          {/* Hint badge — centered, pulsing */}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-sm shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Move size={14} className="text-river" />
            Klikněte pro 360° rozhlédnutí
          </span>
        </button>
      )}

      {/* Tour controls — pravý horní roh, když tourActive */}
      {tourActive && (
        <div className="absolute top-24 right-6 sm:right-10 z-[20] flex items-center gap-2">
          {currentScene !== HOME_SCENE && (
            <button
              type="button"
              onClick={goHomeScene}
              aria-label="Vrátit se na výchozí letecký pohled"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/70 backdrop-blur-md border border-white/20 text-white text-xs font-medium hover:bg-primary/85 transition-colors shadow-xl pointer-events-auto animate-fade-in-up"
            >
              <Plane size={14} />
              Letecký pohled
            </button>
          )}
          <button
            type="button"
            onClick={() => setTourActive(false)}
            aria-label="Zavřít interakci s prohlídkou"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white/90 text-xs font-medium hover:bg-black/75 transition-colors shadow-xl pointer-events-auto"
          >
            <X size={14} />
            Zavřít <span className="opacity-50 ml-1">(Esc)</span>
          </button>
        </div>
      )}

      {/* Gradient overlays — pointer-events:none, krpano drag funguje skrz */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />
      <div className="absolute inset-0 hero-mesh pointer-events-none" />

      {/* Content layer — pointer-events:none kromě tlačítek/karet */}
      <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div
              className="flex items-center gap-2 mb-4 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <MapPin size={14} className="text-river" />
              <span className="text-white/70 text-sm tracking-wide">
                Středočeský kraj · Pojizeří
              </span>
            </div>

            {/* Main title */}
            <h1
              className="font-serif text-gradient leading-none mb-4 animate-fade-in-up"
              style={{
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                letterSpacing: "-0.02em",
                animationDelay: "0.25s",
              }}
            >
              Brodce
            </h1>

            {/* Tagline */}
            <p
              className="text-white/85 text-lg sm:text-xl leading-relaxed mb-8 animate-fade-in-up max-w-xl drop-shadow"
              style={{ animationDelay: "0.4s" }}
            >
              Živý městys na břehu Jizery.<br />
              S historií sahající do roku {MUNICIPALITY.foundedYear}.
            </p>

            {/* CTA buttons — pointer-events:auto */}
            <div
              className="flex flex-wrap gap-3 animate-fade-in-up pointer-events-auto"
              style={{ animationDelay: "0.55s" }}
            >
              <Link
                href="/aktuality"
                className="px-6 py-3 bg-primary-light text-white rounded-xl font-semibold hover:bg-primary-mid transition-colors shadow-lg"
              >
                Aktuality
              </Link>
              <Link
                href="/o-obci"
                className="px-6 py-3 glass text-white rounded-xl font-semibold hover:bg-white/15 transition-colors"
              >
                O obci →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating info card — pointer-events:auto */}
      <div
        className="absolute bottom-20 right-6 sm:right-10 z-10 glass-dark rounded-2xl p-4 w-56 animate-fade-in-up hidden sm:block pointer-events-auto"
        style={{ animationDelay: "0.7s" }}
      >
        <p className="text-white/50 text-[10px] uppercase tracking-widest mb-1">{greeting}</p>
        <p className="text-white text-sm font-semibold mb-3 capitalize">{today}</p>
        <div className="space-y-2.5">
          {/* Příští akce */}
          <div className="flex items-start gap-2 text-white/70 text-xs">
            <CalendarDays size={11} className="text-river shrink-0 mt-0.5" />
            <div>
              <p className="text-white/40 text-[10px] uppercase tracking-wide mb-0.5">Příští akce</p>
              <p className="text-white/85 leading-snug">{nextEvent.title}</p>
              <p className="text-river">{formatEventDate(nextEvent.date)}</p>
            </div>
          </div>
          {/* Úřad dnes */}
          <div className="flex items-start gap-2 text-white/70 text-xs">
            <Clock size={11} className={todayOffice?.isPublic ? "text-emerald-400 shrink-0 mt-0.5" : "text-white/30 shrink-0 mt-0.5"} />
            <div>
              <p className="text-white/40 text-[10px] uppercase tracking-wide mb-0.5">Úřad dnes</p>
              {todayOffice ? (
                <>
                  <p className={todayOffice.isPublic ? "text-emerald-400" : "text-white/50"}>
                    {todayOffice.isPublic ? "Otevřeno pro veřejnost" : "Interní provoz"}
                  </p>
                  <p className="text-white/50">{todayOffice.hours}</p>
                </>
              ) : (
                <p className="text-white/30">Zavřeno</p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-white/10">
          <a href="/aktuality" className="flex items-center gap-1 text-[10px] text-river/80 hover:text-river transition-colors">
            <ArrowRight size={10} />
            Všechny aktuality
          </a>
        </div>
      </div>

      {/* Tour instruction — zobrazuje se jen když je tour aktivní */}
      {tourActive && (
        <div
          className="absolute bottom-10 left-6 sm:left-10 z-10 hidden md:flex items-center gap-2 text-white/70 text-xs pointer-events-none animate-fade-in-up"
        >
          <Move size={13} className="text-river" />
          <span>Tažením rozhlédnete · kolečko myši zvětší / zmenší</span>
        </div>
      )}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 bounce-arrow text-white/45 pointer-events-none">
        <ChevronDown size={26} />
      </div>

    </section>
  )
}
