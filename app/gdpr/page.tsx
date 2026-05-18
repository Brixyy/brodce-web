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
            <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              Tento web <strong>není oficiálním webem městyse Brodce</strong>. Jde
              o vizuální návrh vytvořený v rámci volební kampaně uskupení „Brodce –
              náš domov“. Oficiální web obce najdete na{" "}
              <a href="https://www.brodce.cz" target="_blank" rel="noopener noreferrer" className="underline">
                www.brodce.cz
              </a>.
            </p>
            <h2 className="font-serif text-xl font-bold text-stone-900 mt-6 mb-2">Provozovatel webu</h2>
            <p>
              Provozovatelem a správcem tohoto webu je volební uskupení{" "}
              <strong>„Brodce – náš domov“</strong>. Web slouží jako prezentace
              kandidátů a jejich vize moderního webu obce.
            </p>
            <h2 className="font-serif text-xl font-bold text-stone-900 mt-6 mb-2">Jaké údaje zpracováváme</h2>
            <p>
              Web je čistě prezentační. <strong>Neobsahuje žádné kontaktní
              formuláře ani přihlašování</strong> a <strong>nesbírá od návštěvníků
              žádné osobní údaje</strong>. Nepoužíváme analytické ani reklamní
              nástroje a nepředáváme žádná data třetím stranám.
            </p>
            <h2 className="font-serif text-xl font-bold text-stone-900 mt-6 mb-2">Osoby uvedené na webu</h2>
            <p>
              Jména zastupitelů, úředníků a další osobní údaje zobrazené v ukázkovém
              obsahu jsou <strong>smyšlená a ilustrativní</strong>. Neodpovídají
              konkrétním žijícím osobám a slouží pouze k předvedení podoby webu.
            </p>
            <h2 className="font-serif text-xl font-bold text-stone-900 mt-6 mb-2">Vaše práva a kontakt</h2>
            <p>
              Pokud máte k tomuto webu dotaz nebo námitku, napište nám na{" "}
              <a href="mailto:info@brodce.cloud" className="text-primary underline">info@brodce.cloud</a>.
              V souvislosti se zpracováním osobních údajů máte právo podat stížnost
              u Úřadu pro ochranu osobních údajů (uoou.cz).
            </p>
            <p className="text-xs text-stone-400 mt-8">
              Aktualizováno: 18. května 2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
