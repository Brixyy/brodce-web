import type { Metadata } from "next"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import MasonryGrid from "@/components/gallery/MasonryGrid"
import FadeInView from "@/components/animations/FadeInView"
import { GALLERY_IMAGES } from "@/data/gallery"

export const metadata: Metadata = { title: "Galerie" }

export default function GaleriePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="mb-10">
            <span className="accent-line" />
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900">Fotogalerie</h1>
            <p className="mt-2 text-stone-500">Brodce v obrazech</p>
          </FadeInView>

          <MasonryGrid images={GALLERY_IMAGES} />
        </div>
      </main>
      <Footer />
    </>
  )
}
