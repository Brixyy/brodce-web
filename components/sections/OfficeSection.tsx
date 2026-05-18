"use client"

import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Phone, Mail, Clock, CreditCard, FileText, Landmark, AlertTriangle, Inbox, Globe } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"
import FadeInView from "@/components/animations/FadeInView"
import { OFFICE_STAFF } from "@/data/staff"
import { MUNICIPALITY } from "@/data/municipality"
import { cn } from "@/lib/utils"

const EGOV_SERVICES = [
  {
    icon: Globe,
    title: "Portál občana",
    description: "Přihlaste se přes bankovní identitu nebo eObčanku a vyřiďte vše online.",
    href: "https://portal.gov.cz",
    external: true,
    badge: "portal.gov.cz",
  },
  {
    icon: CreditCard,
    title: "Platba poplatků online",
    description: "Zaplaťte poplatek za odpady, ze psů nebo za veřejné prostranství – bez hotovosti.",
    href: "https://www.brodce.cz/online%2Dplatby%2Dmistnich%2Dpoplatku%2Da%2Dformulare%2Dpro%2Dobcany/ms-9212/p1=9212",
    external: true,
    badge: "Online platba",
  },
  {
    icon: Inbox,
    title: "Elektronická podatelna",
    description: "Doručte podání e-mailem nebo přes datovou schránku — stejná právní váha jako listina.",
    href: "mailto:podatelna@brodce.cloud",
    external: false,
    badge: "podatelna@brodce.cloud",
  },
  {
    icon: Landmark,
    title: "Czech POINT",
    description: "Výpisy z rejstříků, ověření podpisů a listin — pouze pondělí a středa na úřadě.",
    href: "/urad",
    external: false,
    badge: "Po a St na úřadě",
  },
  {
    icon: FileText,
    title: "Formuláře a žádosti",
    description: "Tiskopisy pro matrika, stavební odbor, povolení, čestná prohlášení a další.",
    href: "https://www.brodce.cz/dokumenty%2Duradu%2Dmestyse/ms-3715/p1=3715",
    external: true,
    badge: "Ke stažení",
  },
  {
    icon: AlertTriangle,
    title: "Hlásit závadu",
    description: "Nahlaste výtluk, poruchu veřejného osvětlení nebo jinou závadu v obci.",
    href: "mailto:podatelna@brodce.cloud",
    external: false,
    badge: "E-mailem",
  },
]

export default function OfficeSection() {
  return (
    <section
      id="urad"
      aria-labelledby="office-heading"
      className="py-16 lg:py-24 bg-dark-navy relative overflow-hidden"
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Glow */}
      <div
        className="absolute top-0 right-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(46,106,168,0.12) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <FadeInView className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <SectionTitle
            id="office-heading"
            title="Úřad městyse Brodce"
            subtitle="Pracovníci, úřední hodiny a online služby"
            light
          />
          <Link
            href="/urad"
            className="text-sm font-semibold text-primary-light hover:text-white transition-colors whitespace-nowrap"
          >
            Celá stránka úřadu →
          </Link>
        </FadeInView>

        <div className="grid lg:grid-cols-5 gap-6">

          {/* LEFT — pracovníci + hodiny (2/5) */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Staff */}
            <FadeInView>
              <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                <div className="px-5 py-3 border-b border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-white/40 font-medium">Pracovníci úřadu</span>
                </div>
                <ul className="divide-y divide-white/5">
                  {OFFICE_STAFF.map((staff) => (
                    <li key={staff.id} className="flex items-center gap-3 px-4 py-3">
                      <div className="w-9 h-9 shrink-0 rounded-full overflow-hidden ring-1 ring-white/10">
                        {staff.photo ? (
                          <Image
                            src={staff.photo}
                            alt={staff.name}
                            width={36}
                            height={36}
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <div className="w-full h-full bg-white/10 flex items-center justify-center text-white/40 text-xs font-bold">
                            {staff.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white/90 leading-none truncate">{staff.name}</p>
                        <p className="text-xs text-white/40 mt-0.5 truncate">{staff.role} · {staff.agenda.split(",")[0]}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        {staff.phone && (
                          <a href={`tel:${staff.phone.replace(/\s/g, "")}`} className="text-white/30 hover:text-primary-light transition-colors">
                            <Phone size={12} />
                          </a>
                        )}
                        {staff.email && (
                          <a href={`mailto:${staff.email}`} className="text-white/30 hover:text-primary-light transition-colors">
                            <Mail size={12} />
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInView>

            {/* Office hours */}
            <FadeInView delay={80}>
              <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                <div className="px-5 py-3 border-b border-white/10 flex items-center gap-2">
                  <Clock size={12} className="text-white/40" />
                  <span className="text-[10px] uppercase tracking-wider text-white/40 font-medium">Úřední hodiny</span>
                </div>
                <ul className="divide-y divide-white/5">
                  {MUNICIPALITY.officeHours.map((row) => (
                    <li
                      key={row.day}
                      className={cn(
                        "flex items-center justify-between px-5 py-2.5",
                        row.isPublic ? "text-white/80" : "text-white/40"
                      )}
                    >
                      <div className="flex items-center gap-2">
                        {row.isPublic && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        )}
                        {!row.isPublic && (
                          <span className="w-1.5 h-1.5 rounded-full bg-white/15 shrink-0" />
                        )}
                        <span className="text-sm font-medium">{row.day}</span>
                      </div>
                      <span className="text-xs font-mono">{row.hours}</span>
                    </li>
                  ))}
                </ul>
                <div className="px-5 py-3 border-t border-white/10 space-y-1">
                  <p className="text-[10px] text-white/30">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 -mb-px" />
                    Dny označené zeleně = úřední dny pro veřejnost
                  </p>
                  <p className="text-[10px] text-white/30">Czech POINT + ověřování: pouze Po a St · Pokladna: pouze hotovost</p>
                </div>
              </div>
            </FadeInView>

            {/* DS */}
            <FadeInView delay={120}>
              <div className="rounded-xl bg-white/5 border border-white/10 px-5 py-3 flex items-center gap-4">
                <Inbox size={15} className="text-primary-light shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/40">Datová schránka</p>
                  <p className="font-mono text-white/90 font-semibold text-sm mt-0.5">{MUNICIPALITY.dataBox}</p>
                </div>
              </div>
            </FadeInView>
          </div>

          {/* RIGHT — e-Government services (3/5) */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3 content-start">
            {EGOV_SERVICES.map((service, i) => {
              const Icon = service.icon
              return (
                <FadeInView key={service.title} delay={i * 50}>
                  <Link
                    href={service.href}
                    target={service.external ? "_blank" : undefined}
                    rel={service.external ? "noopener noreferrer" : undefined}
                    className="group flex gap-3.5 p-4 rounded-2xl glass hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 h-full"
                  >
                    <div className="w-9 h-9 rounded-xl bg-primary-light/10 flex items-center justify-center shrink-0 group-hover:bg-primary-light/20 transition-colors mt-0.5">
                      <Icon size={16} className="text-primary-light" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1 mb-1">
                        <h3 className="font-semibold text-sm text-white group-hover:text-primary-light transition-colors leading-snug">
                          {service.title}
                        </h3>
                        {service.external && (
                          <ExternalLink size={11} className="text-white/20 group-hover:text-white/50 shrink-0 mt-0.5 transition-colors" />
                        )}
                      </div>
                      <p className="text-xs text-white/45 leading-relaxed">{service.description}</p>
                      <span className="mt-2 inline-block text-[10px] font-medium px-2 py-0.5 rounded-md bg-primary-light/10 text-primary-light">
                        {service.badge}
                      </span>
                    </div>
                  </Link>
                </FadeInView>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
