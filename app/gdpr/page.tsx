import type { Metadata } from "next"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = { title: "Ochrana osobních údajů" }

export default function GdprPage() {
  return (
    <>
      <Header />
      <main id="hlavni-obsah" className="min-h-screen bg-stone-50 pt-28 pb-20" tabIndex={-1}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
            Ochrana osobních údajů (GDPR)
          </h1>
          <div className="prose prose-stone max-w-none text-stone-600 space-y-4">
            <p>
              Správcem osobních údajů je <strong>Městys Brodce</strong>, Brodce č.p. 48, 294 73 Brodce,
              IČO: 00237078.
            </p>
            <h2 className="font-serif text-xl font-bold text-stone-900 mt-6 mb-2">Pověřenec pro ochranu osobních údajů</h2>
            <p>
              Kontakt na DPO: <a href="mailto:dpo@brodce.cz" className="text-primary underline">dpo@brodce.cz</a>
            </p>
            <h2 className="font-serif text-xl font-bold text-stone-900 mt-6 mb-2">Účel zpracování</h2>
            <p>
              Osobní údaje zpracováváme výhradně za účelem plnění zákonných povinností obce
              (zákon č. 128/2000 Sb. a navazující předpisy), komunikace s občany a poskytování
              služeb veřejné správy.
            </p>
            <h2 className="font-serif text-xl font-bold text-stone-900 mt-6 mb-2">Vaše práva</h2>
            <p>
              Máte právo na přístup k osobním údajům, jejich opravu, výmaz, omezení zpracování
              a právo podat stížnost u Úřadu pro ochranu osobních údajů (uoou.cz).
            </p>
            <p className="text-xs text-stone-400 mt-8">
              Aktualizováno: 13. května 2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
