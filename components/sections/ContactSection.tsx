import { Phone, Mail, MapPin, Clock, Inbox } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"
import FadeInView from "@/components/animations/FadeInView"
import BackgroundAurora from "@/components/ui/BackgroundAurora"
import { MUNICIPALITY } from "@/data/municipality"

export default function ContactSection() {
  return (
    <section id="kontakt" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <BackgroundAurora variant="river" intensity="subtle" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView className="mb-10">
          <SectionTitle title="Kontakt" subtitle="Jsme tu pro vás" />
        </FadeInView>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact info */}
          <FadeInView direction="left">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-stone-900 mb-3">Obecní úřad Brodce</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-stone-600">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                    <span>{MUNICIPALITY.address}, {MUNICIPALITY.postCode}</span>
                  </li>
                  <li className="flex items-center gap-3 text-stone-600">
                    <Phone size={16} className="shrink-0 text-primary" />
                    <a href={`tel:${MUNICIPALITY.phone}`} className="hover:text-primary transition-colors">
                      {MUNICIPALITY.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-stone-600">
                    <Mail size={16} className="shrink-0 text-primary" />
                    <a href={`mailto:${MUNICIPALITY.email}`} className="hover:text-primary transition-colors">
                      {MUNICIPALITY.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-stone-600">
                    <Inbox size={16} className="shrink-0 text-primary" />
                    <span>Datová schránka: {MUNICIPALITY.dataBox}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-stone-900 mb-3 flex items-center gap-2">
                  <Clock size={16} className="text-primary" />
                  Úřední hodiny
                </h3>
                <ul className="space-y-2">
                  {MUNICIPALITY.officeHours.map((row) => (
                    <li key={row.day} className="flex justify-between text-sm text-stone-600 max-w-xs">
                      <span className="font-medium text-stone-900">{row.day}</span>
                      <span>{row.hours}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-stone-400">
                  Czech POINT a ověřování podpisů: pouze pondělí a středa.<br />
                  Pokladna přijímá pouze hotovost.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div>
                  <p className="text-xs text-stone-400 mb-0.5">Starostka</p>
                  <p className="font-medium text-stone-900">{MUNICIPALITY.mayor.name}</p>
                  <a href={`mailto:${MUNICIPALITY.mayor.email}`} className="text-xs text-primary hover:underline">
                    {MUNICIPALITY.mayor.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-stone-400 mb-0.5">Místostarosta</p>
                  <p className="font-medium text-stone-900">{MUNICIPALITY.deputy.name}</p>
                  <a href={`mailto:${MUNICIPALITY.deputy.email}`} className="text-xs text-primary hover:underline">
                    {MUNICIPALITY.deputy.email}
                  </a>
                </div>
              </div>
            </div>
          </FadeInView>

          {/* Map */}
          <FadeInView direction="right" delay={100}>
            <div className="rounded-2xl overflow-hidden shadow-lg h-80 lg:h-full min-h-72 bg-stone-100">
              {(() => {
                const { lat, lng } = MUNICIPALITY.coordinates
                const bbox = `${(lng - 0.03).toFixed(4)},${(lat - 0.02).toFixed(4)},${(lng + 0.03).toFixed(4)},${(lat + 0.02).toFixed(4)}`
                return (
                  <iframe
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "288px" }}
                    loading="lazy"
                    title="Mapa Brodce"
                    className="w-full h-full"
                  />
                )
              })()}
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}
