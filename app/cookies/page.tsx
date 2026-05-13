import type { Metadata } from "next"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = { title: "Zásady cookies" }

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main id="hlavni-obsah" className="min-h-screen bg-stone-50 pt-28 pb-20" tabIndex={-1}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
            Zásady používání cookies
          </h1>
          <div className="prose prose-stone max-w-none text-stone-600 space-y-4">
            <p>
              Tento web používá pouze technicky nezbytné cookies nutné pro správnou funkci stránek.
              Nepoužíváme analytické ani reklamní cookies bez vašeho souhlasu.
            </p>
            <h2 className="font-serif text-xl font-bold text-stone-900 mt-6 mb-2">Technické cookies</h2>
            <p>
              Tyto cookies jsou nezbytné pro fungování webu a nelze je vypnout. Neobsahují
              žádné osobní údaje.
            </p>
            <p className="text-xs text-stone-400 mt-8">Aktualizováno: 13. května 2026</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
