import Link from "next/link"
import MasonryGrid from "@/components/gallery/MasonryGrid"
import SectionTitle from "@/components/ui/SectionTitle"
import FadeInView from "@/components/animations/FadeInView"
import BackgroundAurora from "@/components/ui/BackgroundAurora"
import Fireflies from "@/components/ui/Fireflies"
import { GALLERY_IMAGES } from "@/data/gallery"

export default function GallerySection() {
  return (
    <section id="galerie" className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-stone-50/60 overflow-hidden">
      <BackgroundAurora variant="primary" intensity="subtle" />
      <Fireflies count={18} color="rgba(91, 163, 201, 0.6)" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <SectionTitle
            title="Fotogalerie"
            subtitle="Brodce v obrazech"
          />
          <Link
            href="/galerie"
            className="text-sm font-semibold text-primary hover:text-primary-mid transition-colors whitespace-nowrap"
          >
            Celá galerie →
          </Link>
        </FadeInView>

        <MasonryGrid images={GALLERY_IMAGES} maxCount={8} />
      </div>
    </section>
  )
}
