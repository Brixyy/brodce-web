"use client"

import { useEffect, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import type { GalleryImage } from "@/types"

type Props = {
  images: GalleryImage[]
  index: number
  onCloseAction: () => void
  onPrevAction: () => void
  onNextAction: () => void
}

export default function LightboxModal({
  images,
  index,
  onCloseAction,
  onPrevAction,
  onNextAction,
}: Props) {
  const image = images[index]

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseAction()
      if (e.key === "ArrowLeft") onPrevAction()
      if (e.key === "ArrowRight") onNextAction()
    },
    [onCloseAction, onPrevAction, onNextAction]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [handleKey])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4"
      onClick={onCloseAction}
    >
      {/* Main image */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>

      {/* Caption */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
        <p className="text-white/80 text-sm">{image.alt}</p>
        <p className="text-white/40 text-xs mt-1">
          {index + 1} / {images.length}
        </p>
      </div>

      {/* Controls */}
      <button
        onClick={onCloseAction}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        aria-label="Zavřít"
      >
        <X size={20} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onPrevAction() }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        aria-label="Předchozí"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNextAction() }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        aria-label="Další"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  )
}
