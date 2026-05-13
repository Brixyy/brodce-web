"use client"

import { useState } from "react"
import Image from "next/image"
import { ZoomIn } from "lucide-react"
import LightboxModal from "./LightboxModal"
import type { GalleryImage } from "@/types"

type Props = {
  images: GalleryImage[]
  maxCount?: number
}

export default function MasonryGrid({ images, maxCount }: Props) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)
  const displayed = maxCount ? images.slice(0, maxCount) : images

  const open = (i: number) => setLightboxIdx(i)
  const close = () => setLightboxIdx(null)
  const prev = () =>
    setLightboxIdx((i) =>
      i !== null ? (i - 1 + displayed.length) % displayed.length : null
    )
  const next = () =>
    setLightboxIdx((i) =>
      i !== null ? (i + 1) % displayed.length : null
    )

  return (
    <>
      <div
        className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3"
      >
        {displayed.map((img, i) => (
          <div
            key={img.id}
            className="break-inside-avoid cursor-pointer group relative rounded-xl overflow-hidden"
            onClick={() => open(i)}
          >
            <div
              className="relative w-full"
              style={{ paddingBottom: `${(img.height / img.width) * 100}%` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn
                size={28}
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
              />
            </div>
            {/* Category badge */}
            <span className="absolute bottom-2 left-2 px-2 py-0.5 text-[10px] font-medium rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              {img.category}
            </span>
          </div>
        ))}
      </div>

      {lightboxIdx !== null && (
        <LightboxModal
          images={displayed}
          index={lightboxIdx}
          onCloseAction={close}
          onPrevAction={prev}
          onNextAction={next}
        />
      )}
    </>
  )
}
