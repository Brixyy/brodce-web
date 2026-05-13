import type { Metadata } from "next"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FadeInView from "@/components/animations/FadeInView"
import ContactSection from "@/components/sections/ContactSection"

export const metadata: Metadata = { title: "Kontakt" }

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50 pt-24 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-4">
          <FadeInView>
            <span className="accent-line" />
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 mb-2">Kontakt</h1>
            <p className="text-stone-500">Obecní úřad Brodce</p>
          </FadeInView>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
