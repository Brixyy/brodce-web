import Link from "next/link"
import { Phone, Mail, MapPin, Inbox, ExternalLink } from "lucide-react"
import { MUNICIPALITY } from "@/data/municipality"

const MAPS_URL = `https://www.openstreetmap.org/?mlat=${MUNICIPALITY.coordinates.lat}&mlon=${MUNICIPALITY.coordinates.lng}#map=17/${MUNICIPALITY.coordinates.lat}/${MUNICIPALITY.coordinates.lng}`

export default function Footer() {
  return (
    <footer className="bg-primary text-white" role="contentinfo">
      {/* Hlavní obsah footeru */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Identita */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <p className="font-serif text-xl font-bold leading-tight">
                Brodce – náš domov
              </p>
              <p className="text-white/45 text-[10px] uppercase tracking-[0.2em]">
                Volební kampaň · vize nového webu
              </p>
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-5 max-w-sm">
              Ukázka, jak by mohl vypadat moderní web městyse Brodce. Vizuální
              návrh připravený volebním uskupením „Brodce – náš domov“.
            </p>
            <p className="text-xs text-white/40 max-w-sm leading-relaxed">
              Není to oficiální web obce. Uvedené osoby, kontakty a dokumenty
              jsou ilustrativní a smyšlené.
            </p>
          </div>

          {/* Kontakt */}
          <div className="lg:col-span-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 shrink-0 text-river" />
                <div className="flex-1">
                  <p>{MUNICIPALITY.address}, {MUNICIPALITY.postCode} {MUNICIPALITY.name}</p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-1 text-[11px] text-river/90 hover:text-river transition-colors"
                  >
                    Otevřít na mapě
                    <ExternalLink size={10} />
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="shrink-0 text-river" />
                <a
                  href={`tel:${MUNICIPALITY.phone.replace(/\s/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {MUNICIPALITY.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="shrink-0 text-river" />
                <a
                  href={`mailto:${MUNICIPALITY.email}`}
                  className="hover:text-white transition-colors"
                >
                  {MUNICIPALITY.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Inbox size={14} className="shrink-0 text-river" />
                <span className="font-mono text-[13px]">{MUNICIPALITY.dataBox}</span>
                <span className="text-white/35 text-[11px]">datová schránka</span>
              </li>
            </ul>
          </div>

          {/* Úřední hodiny */}
          <div className="lg:col-span-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">
              Úřední hodiny
            </h3>
            <ul className="space-y-1.5 text-sm">
              {MUNICIPALITY.officeHours.map((row) => (
                <li
                  key={row.day}
                  className="flex items-baseline justify-between gap-4 py-1 border-b border-white/8 last:border-0"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                        row.isPublic ? "bg-emerald-400" : "bg-white/20"
                      }`}
                    />
                    <span className={row.isPublic ? "text-white" : "text-white/55"}>
                      {row.day}
                    </span>
                  </div>
                  <span className="text-white/70 tabular-nums text-[13px]">
                    {row.hours}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-white/35">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/70" />
                pro veřejnost
              </span>
              <span className="text-white/30">·</span>
              <span>Czech POINT: po + st</span>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer – neoficiální web */}
      <div className="border-t border-white/10 bg-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-xs sm:text-[13px] text-white/75 leading-relaxed">
            <strong className="text-white">
              Toto není oficiální web městyse Brodce.
            </strong>{" "}
            Jde o vizuální návrh vytvořený v rámci volební kampaně uskupení
            „Brodce – náš domov“. Oficiální web obce najdete na{" "}
            <a
              href="https://www.brodce.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white"
            >
              www.brodce.cz
            </a>
            . Jména osob, kontakty, dokumenty a aktuality uvedené na tomto webu
            jsou ilustrativní a smyšlené.
          </p>
        </div>
      </div>

      {/* Spodní lišta – zákonné povinnosti */}
      <div className="border-t border-white/10" style={{ background: "#132948" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/35">
            <span>© 2026 volební uskupení Brodce – náš domov</span>
            <nav aria-label="Právní dokumenty" className="flex flex-wrap gap-x-5 gap-y-1">
              <Link href="/pristupnost" className="hover:text-white/70 transition-colors">
                Prohlášení o přístupnosti
              </Link>
              <Link href="/gdpr" className="hover:text-white/70 transition-colors">
                Ochrana osobních údajů
              </Link>
              <Link href="/cookies" className="hover:text-white/70 transition-colors">
                Cookies
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
