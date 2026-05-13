"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Maximize2, ExternalLink } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"
import FadeInView from "@/components/animations/FadeInView"
import BackgroundAurora from "@/components/ui/BackgroundAurora"

const TOUR_URL = "https://brodce.cz/html/prohlidka/"
const PREVIEW_IMAGE =
  "https://www.brodce.cz/assets/Image.ashx?id_org=1268&id_obrazky=22935&sizeForce=0"

export default function VirtualTourSection() {
  const [active, setActive] = useState(false)

  return (
    <section
      id="virtualni-prohlidka"
      className="relative py-20 lg:py-28 bg-stone-50 overflow-hidden"
    >
      <BackgroundAurora variant="primary" intensity="subtle" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <SectionTitle
            title="Virtuální prohlídka"
            subtitle="Projděte si Brodce z domova — 360°"
          />
          <a
            href={TOUR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-mid transition-colors whitespace-nowrap"
          >
            Otevřít v novém okně
            <ExternalLink size={14} />
          </a>
        </FadeInView>

        <FadeInView delay={100}>
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-stone-900 ring-1 ring-stone-200">
            {active ? (
              <iframe
                src={TOUR_URL}
                title="Virtuální prohlídka Brodce 360°"
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; gyroscope; fullscreen; xr-spatial-tracking"
                loading="lazy"
              />
            ) : (
              <button
                type="button"
                onClick={() => setActive(true)}
                aria-label="Spustit virtuální prohlídku"
                className="group absolute inset-0 w-full h-full"
              >
                <Image
                  src={PREVIEW_IMAGE}
                  alt="Náhled virtuální prohlídky Brodce"
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Dark overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 group-hover:from-black/70 group-hover:via-black/30 transition-colors" />

                {/* Center play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Ping effect */}
                    <span className="absolute inset-0 rounded-full bg-white/40 animate-ping" />
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-2xl group-hover:bg-white group-hover:scale-110 transition-all">
                      <Play
                        size={32}
                        className="text-primary translate-x-0.5"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-white bg-primary/80 backdrop-blur px-2.5 py-1 rounded-full uppercase tracking-wider">
                      <Maximize2 size={10} />
                      360° panorama
                    </span>
                  </div>
                  <p className="font-serif text-xl sm:text-3xl text-white font-bold leading-tight max-w-2xl drop-shadow-lg">
                    Projděte se obcí Brodce
                  </p>
                  <p className="text-white/75 text-sm sm:text-base mt-1.5 max-w-xl">
                    Centrum obce, úřad, sokolovna a okolí Jizery
                  </p>
                </div>
              </button>
            )}
          </div>
        </FadeInView>

        {/* Help text */}
        <FadeInView delay={200}>
          <p className="text-xs text-stone-400 text-center mt-4">
            Pro nejlepší zážitek otevřete prohlídku{" "}
            <a
              href={TOUR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 hover:no-underline"
            >
              v novém okně
            </a>
            {" "}— funguje i na mobilu s gyroskopem.
          </p>
        </FadeInView>
      </div>
    </section>
  )
}
