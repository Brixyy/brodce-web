import type { Metadata } from "next"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = { title: "Prohlášení o přístupnosti" }

export default function PristupnostPage() {
  return (
    <>
      <Header />
      <main id="hlavni-obsah" className="min-h-screen bg-stone-50 pt-28 pb-20" tabIndex={-1}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
            Prohlášení o přístupnosti
          </h1>

          <div className="prose prose-stone max-w-none text-stone-600 space-y-4">
            <p>
              Uskupení „Brodce – náš domov“ se snaží, aby byl tento web přístupný co
              nejširšímu okruhu návštěvníků. Jako vzor jsme zvolili normu EN 301 549
              (WCAG 2.1 AA), kterou používají i weby veřejné správy.
            </p>

            <h2 className="font-serif text-xl font-bold text-stone-900 mt-6 mb-2">Stav souladu</h2>
            <p>
              Tento web je <strong>částečně v souladu</strong> s normou EN 301 549 V2.1.2 (WCAG 2.1 AA).
              Níže jsou uvedeny části, které ještě nesplňují požadavky.
            </p>

            <h2 className="font-serif text-xl font-bold text-stone-900 mt-6 mb-2">Nepřístupný obsah</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Starší PDF dokumenty nemusí být plně přístupné pro čtečky obrazovky.</li>
              <li>Některé vložené mapy třetích stran nesplňují plně požadavky WCAG 2.1 AA.</li>
            </ul>

            <h2 className="font-serif text-xl font-bold text-stone-900 mt-6 mb-2">Zpětná vazba a kontakt</h2>
            <p>
              Pokud narazíte na bariéru v přístupu k obsahu, kontaktujte nás:
            </p>
            <ul className="list-none space-y-1">
              <li>E-mail: <a href="mailto:info@brodce.cloud" className="text-primary underline">info@brodce.cloud</a></li>
            </ul>
            <p>Na vaši zprávu odpovíme do 30 pracovních dnů.</p>

            <h2 className="font-serif text-xl font-bold text-stone-900 mt-6 mb-2">Kontrolní mechanismus</h2>
            <p>
              V případě nespokojenosti s naší odpovědí se můžete obrátit na{" "}
              <a href="https://www.dia.gov.cz" className="text-primary underline" target="_blank" rel="noopener noreferrer">
                Digitální a informační agenturu (DIA)
              </a>
              , která je orgánem pro vymáhání přístupnosti v ČR.
            </p>

            <p className="text-xs text-stone-400 mt-8">
              Toto prohlášení bylo naposledy aktualizováno 13. května 2026.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
