import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Phone, Mail, Clock, CreditCard, FileText, Landmark,
  AlertTriangle, Inbox, Globe, ExternalLink, ChevronRight,
  Building2, Users, BookOpen, Banknote, Download, Trash2,
  Send, Calendar, Truck,
} from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FadeInView from "@/components/animations/FadeInView"
import { OFFICE_STAFF } from "@/data/staff"
import { MUNICIPALITY } from "@/data/municipality"
import { UREDNI_DESKA } from "@/data/uredni-deska"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Úřad | Městys Brodce",
  description: "Pracovníci úřadu, úřední hodiny, Czech POINT, elektronická podatelna a online služby Městyse Brodce.",
}

const TYPE_STYLES: Record<string, string> = {
  "Vyhláška":     "bg-red-50 text-red-700 border-red-200",
  "Záměr":        "bg-amber-50 text-amber-700 border-amber-200",
  "Oznámení":     "bg-blue-50 text-blue-700 border-blue-200",
  "Rozpočet":     "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Smlouva":      "bg-purple-50 text-purple-700 border-purple-200",
  "Věcné břemeno":"bg-orange-50 text-orange-700 border-orange-200",
  "Výzva":        "bg-sky-50 text-sky-700 border-sky-200",
}

const EGOV_SERVICES = [
  {
    icon: Globe,
    title: "Portál občana",
    description: "Přihlaste se přes bankovní identitu nebo eObčanku – správa řidičáku, výpisy, e-recept.",
    href: "https://portal.gov.cz",
  },
  {
    icon: Inbox,
    title: "Datová schránka",
    description: "ID schránky: demob01 · Podání DS mají stejnou právní váhu jako listinné podání.",
    href: "https://www.mojedatovaschranka.cz",
  },
  {
    icon: Globe,
    title: "Registr smluv",
    description: "Smlouvy uzavřené obcí nad 50 000 Kč jsou povinně zveřejněny v Registru smluv.",
    href: "https://smlouvy.gov.cz",
  },
  {
    icon: FileText,
    title: "Veřejný rejstřík",
    description: "Nahlédněte do obchodního rejstříku, katastru nemovitostí a dalších veřejných registrů.",
    href: "https://or.justice.cz",
  },
]

const DOCUMENTS: { title: string; href?: string }[] = [
  { title: "Územní plán Brodce" },
  { title: "Strategický plán rozvoje 2020–2025" },
  { title: "Obecně závazné vyhlášky", href: "/obec#dokumenty" },
  { title: "Uzavřené smlouvy", href: "/obec#zakazky" },
  { title: "Schválený rozpočet 2026", href: "/obec#rozpocet" },
  { title: "Závěrečný účet 2024" },
  { title: "Digitální povodňový plán" },
  { title: "Plán rozvoje sportu" },
]

const FORMULARE = [
  { id: "f1", nazev: "Žádost o informace (zákon č. 106/1999 Sb.)", ikona: "📄" },
  { id: "f2", nazev: "Ohlašovací lístek trvalého pobytu", ikona: "🏠" },
  { id: "f3", nazev: "Přihláška k místnímu poplatku ze psů", ikona: "🐕" },
  { id: "f4", nazev: "Žádost o vydání rybářského lístku", ikona: "🎣" },
  { id: "f5", nazev: "Žádost o povolení záboru veřejného prostranství", ikona: "🚧" },
  { id: "f6", nazev: "Návrh na uzavření manželství (matrika)", ikona: "💍" },
  { id: "f7", nazev: "Formulář pro ohlášení závady v obci", ikona: "⚠️" },
  { id: "f8", nazev: "Žádost o nahlédnutí do spisu", ikona: "🔍" },
]

const POPLATKY = [
  {
    nazev: "Komunální odpad",
    sazby: [
      { popis: "Dospělá osoba", castka: "1 200 Kč/rok" },
      { popis: "Dítě do 15 let a senior 70+", castka: "600 Kč/rok" },
      { popis: "Rekreační objekt (chata)", castka: "1 200 Kč/rok" },
    ],
    poznamka: "Splatnost: do 31. března každého roku.",
  },
  {
    nazev: "Místní poplatek ze psů",
    sazby: [
      { popis: "1. pes v rodinném domě", castka: "200 Kč/rok" },
      { popis: "2. a každý další pes", castka: "300 Kč/rok" },
      { popis: "Pes z útulku", castka: "100 Kč/rok" },
    ],
    poznamka: "Splatnost: do 31. března. Přihláška na úřadu.",
  },
  {
    nazev: "Veřejné prostranství",
    sazby: [
      { popis: "Dočasná stavba, stánek", castka: "10 Kč/den/m²" },
      { popis: "Skládka materiálu", castka: "5 Kč/den/m²" },
      { popis: "Kulturní a sportovní akce", castka: "2 Kč/den/m²" },
    ],
    poznamka: "Splatnost: předem, při podání žádosti.",
  },
]

const ODPADY_HARMONOGRAM = [
  { typ: "Komunální odpad", barva: "bg-stone-700 text-white", ikona: "🗑️", frekvence: "každý čtvrtek", poznamka: "černá nádoba 120/240 l" },
  { typ: "Plasty + nápojové kartony", barva: "bg-amber-400 text-white", ikona: "♻️", frekvence: "každý lichý čtvrtek", poznamka: "žlutá nádoba" },
  { typ: "Papír a lepenka", barva: "bg-blue-600 text-white", ikona: "📦", frekvence: "každý lichý čtvrtek", poznamka: "modrá nádoba" },
  { typ: "Bioodpad", barva: "bg-forest text-white", ikona: "🌿", frekvence: "každý čtvrtek (duben–říjen)", poznamka: "hnědá nádoba" },
  { typ: "Sklo", barva: "bg-emerald-600 text-white", ikona: "🍾", frekvence: "kontejnery u úřadu a sokolovny", poznamka: "zelený/bílý kontejner" },
  { typ: "Nebezpečný odpad", barva: "bg-red-600 text-white", ikona: "⚠️", frekvence: "2× ročně (květen + říjen)", poznamka: "mobilní sběr u úřadu" },
]

export default function UradPage() {
  const today = new Date().toISOString().split("T")[0]
  const activeDeska = UREDNI_DESKA.filter(
    (d) => !d.validUntil || d.validUntil >= today
  )

  return (
    <>
      <Header />
      <main id="hlavni-obsah" className="min-h-screen bg-stone-50 pt-28 pb-20" tabIndex={-1}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Page header */}
          <FadeInView className="mb-12">
            <span className="accent-line" />
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900">Úřad městyse</h1>
            <p className="mt-2 text-stone-500 max-w-xl">
              Vše, co potřebujete vyřídit – kontakty na pracovníky, úřední hodiny, online služby a dokumenty.
            </p>
          </FadeInView>

          {/* === PRACOVNÍCI === */}
          <section aria-labelledby="staff-heading" className="mb-14">
            <FadeInView>
              <div className="flex items-center gap-3 mb-6">
                <Users size={18} className="text-primary" />
                <h2 id="staff-heading" className="font-semibold text-xl text-stone-900">Pracovníci úřadu</h2>
              </div>
            </FadeInView>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {OFFICE_STAFF.map((staff, i) => (
                <FadeInView key={staff.id} delay={i * 60}>
                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-stone-100 shrink-0">
                        {staff.photo ? (
                          <Image
                            src={staff.photo}
                            alt={staff.name}
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                            {staff.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-stone-900 text-sm leading-tight truncate">{staff.name}</p>
                        <p className="text-xs text-primary font-medium mt-0.5">{staff.role}</p>
                      </div>
                    </div>

                    <p className="text-xs text-stone-500 leading-relaxed flex-1 mb-4">{staff.agenda}</p>

                    <div className="space-y-1.5 mt-auto">
                      {staff.phone && (
                        <a
                          href={`tel:${staff.phone.replace(/\s/g, "")}`}
                          className="flex items-center gap-2 text-xs text-stone-600 hover:text-primary transition-colors"
                        >
                          <Phone size={12} className="text-stone-400 shrink-0" />
                          {staff.phone}
                        </a>
                      )}
                      {staff.email && (
                        <a
                          href={`mailto:${staff.email}`}
                          className="flex items-center gap-2 text-xs text-stone-600 hover:text-primary transition-colors"
                        >
                          <Mail size={12} className="text-stone-400 shrink-0" />
                          {staff.email}
                        </a>
                      )}
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </section>

          {/* === HODINY === */}
          <section id="hodiny" aria-labelledby="hours-heading" className="mb-14 scroll-mt-20">
            <FadeInView>
              <div className="flex items-center gap-3 mb-6">
                <Clock size={18} className="text-primary" />
                <h2 id="hours-heading" className="font-semibold text-xl text-stone-900">Úřední hodiny</h2>
              </div>
            </FadeInView>

            <div className="grid sm:grid-cols-2 gap-5">
              {/* Hodiny tabulka */}
              <FadeInView>
                <div className="bg-primary rounded-2xl p-6 text-white h-full">
                  <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/60">Otevírací doba</h3>
                  <ul className="space-y-3">
                    {MUNICIPALITY.officeHours.map((row) => (
                      <li key={row.day} className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <span className={cn("w-1.5 h-1.5 rounded-full mt-1.5 shrink-0", row.isPublic ? "bg-emerald-400" : "bg-white/20")} />
                          <span className={cn("text-sm font-medium", row.isPublic ? "text-white" : "text-white/50")}>
                            {row.day}
                          </span>
                        </div>
                        <div className="text-right">
                          <p className={cn("text-sm font-mono", row.isPublic ? "text-white" : "text-white/50")}>{row.hours}</p>
                          <p className="text-[10px] text-white/30">{row.note}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs text-white/40 border-t border-white/10 pt-4">
                    Zelené dny = úřední dny pro veřejnost
                  </p>
                </div>
              </FadeInView>

              {/* Adresa + kontakt */}
              <FadeInView delay={80}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 h-full flex flex-col gap-5">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 size={16} className="text-primary" />
                      <h3 className="font-semibold text-stone-900 text-sm">Adresa úřadu</h3>
                    </div>
                    <address className="not-italic text-sm text-stone-600 space-y-0.5">
                      <p>Dobrovická 34</p>
                      <p>294 73 Brodce</p>
                    </address>
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 text-sm mb-2">Podatelna / pokladna</h3>
                    <ul className="space-y-1.5">
                      <li>
                        <a href="tel:+420326000100" className="flex items-center gap-2 text-sm text-stone-600 hover:text-primary transition-colors">
                          <Phone size={13} className="text-stone-400" />
                          +420 326 000 100
                        </a>
                      </li>
                      <li>
                        <a href="mailto:podatelna@brodce.cloud" className="flex items-center gap-2 text-sm text-stone-600 hover:text-primary transition-colors">
                          <Mail size={13} className="text-stone-400" />
                          podatelna@brodce.cloud
                        </a>
                      </li>
                    </ul>
                    <p className="mt-3 text-xs text-stone-400 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
                      Pokladna přijímá <strong>pouze hotovost</strong>.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 text-sm mb-2 flex items-center gap-2">
                      <Inbox size={14} className="text-primary" />
                      Datová schránka
                    </h3>
                    <p className="font-mono text-stone-900 font-bold text-base">{MUNICIPALITY.dataBox}</p>
                    <p className="text-xs text-stone-400 mt-1">Podání DS = listinné podání</p>
                  </div>
                </div>
              </FadeInView>
            </div>
          </section>

          {/* === ÚŘEDNÍ DESKA === */}
          <section id="uredni-deska" aria-labelledby="deska-heading" className="mb-14 scroll-mt-20">
            <FadeInView>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen size={18} className="text-primary" />
                <h2 id="deska-heading" className="font-semibold text-xl text-stone-900">Úřední deska</h2>
              </div>
            </FadeInView>

            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
              <ul className="divide-y divide-stone-100">
                {activeDeska.map((doc, i) => {
                  const inner = (
                    <>
                      <span className={cn(
                        "shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-md border whitespace-nowrap",
                        TYPE_STYLES[doc.type] ?? "bg-stone-50 text-stone-600 border-stone-200"
                      )}>
                        {doc.type}
                      </span>
                      <span className={cn(
                        "flex-1 text-sm min-w-0 truncate transition-colors",
                        doc.href ? "text-stone-800 group-hover:text-primary" : "text-stone-700"
                      )}>
                        {doc.title}
                      </span>
                      <span className="shrink-0 text-xs text-stone-400 whitespace-nowrap">
                        {new Date(doc.publishedAt).toLocaleDateString("cs-CZ", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                      {doc.validUntil && (
                        <span className="shrink-0 text-xs text-stone-400 hidden sm:block">
                          do {new Date(doc.validUntil).toLocaleDateString("cs-CZ", { day: "numeric", month: "short" })}
                        </span>
                      )}
                      {doc.href && <ChevronRight size={14} className="text-stone-300 shrink-0" />}
                    </>
                  )
                  return (
                    <FadeInView key={doc.id} delay={i * 30}>
                      <li>
                        {doc.href ? (
                          <Link
                            href={doc.href}
                            className="flex items-center gap-4 px-5 py-4 hover:bg-stone-50 transition-colors group"
                          >
                            {inner}
                          </Link>
                        ) : (
                          <div
                            title="Dokument bude doplněn"
                            aria-disabled="true"
                            className="flex items-center gap-4 px-5 py-4 cursor-default"
                          >
                            {inner}
                          </div>
                        )}
                      </li>
                    </FadeInView>
                  )
                })}
              </ul>
            </div>
          </section>

          {/* === DOKUMENTY === */}
          <section aria-labelledby="docs-heading" className="mb-14">
            <FadeInView>
              <div className="flex items-center gap-3 mb-6">
                <FileText size={18} className="text-primary" />
                <h2 id="docs-heading" className="font-semibold text-xl text-stone-900">Dokumenty obce</h2>
              </div>
            </FadeInView>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {DOCUMENTS.map((doc, i) => {
                const inner = (
                  <>
                    <FileText size={14} className={cn(
                      "shrink-0 transition-colors",
                      doc.href ? "text-stone-300 group-hover:text-primary" : "text-stone-300"
                    )} />
                    <span className="flex-1 leading-snug">{doc.title}</span>
                    <Download size={11} className={cn(
                      "shrink-0 transition-colors",
                      doc.href ? "text-stone-200 group-hover:text-primary/40" : "text-stone-200"
                    )} />
                  </>
                )
                return (
                  <FadeInView key={doc.title} delay={i * 30}>
                    {doc.href ? (
                      <Link
                        href={doc.href}
                        className="flex items-center gap-3 px-4 py-3.5 bg-white rounded-xl border border-stone-100 shadow-sm hover:shadow-md hover:border-primary/20 hover:text-primary transition-all group text-sm text-stone-700 font-medium"
                      >
                        {inner}
                      </Link>
                    ) : (
                      <div
                        title="Dokument bude doplněn"
                        aria-disabled="true"
                        className="flex items-center gap-3 px-4 py-3.5 bg-white rounded-xl border border-stone-100 shadow-sm text-sm text-stone-500 font-medium cursor-default opacity-80"
                      >
                        {inner}
                      </div>
                    )}
                  </FadeInView>
                )
              })}
            </div>
          </section>

          {/* === CZECH POINT === */}
          <section id="czechpoint" aria-labelledby="czechpoint-heading" className="mb-14 scroll-mt-20">
            <FadeInView>
              <div className="flex items-center gap-3 mb-6">
                <Landmark size={18} className="text-primary" />
                <h2 id="czechpoint-heading" className="font-semibold text-xl text-stone-900">Czech POINT</h2>
              </div>
            </FadeInView>
            <FadeInView delay={60}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
                  <p className="text-sm text-stone-600 leading-relaxed mb-4">
                    Agenda Czech POINT a ověřování podpisů a listin je dostupná{" "}
                    <strong>pouze v pondělí a středu</strong> na úřadě. Bez nutnosti objednání.
                  </p>
                  <ul className="space-y-1.5 text-sm text-stone-600">
                    {[
                      "Výpis z obchodního rejstříku",
                      "Výpis z katastru nemovitostí",
                      "Výpis z rejstříku trestů",
                      "Výpis ze živnostenského rejstříku",
                      "Ověření pravosti podpisu (vidimace)",
                      "Ověření shody opisu s originálem (legalizace)",
                      "Czech POINT@home – aktivace el. podpisu",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6 flex flex-col gap-4">
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">Dostupnost</p>
                    <p className="font-semibold text-stone-900">Pondělí a středa</p>
                    <p className="text-sm text-stone-600">08:00 – 17:00 (přestávka 11:45–12:45)</p>
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">Kde nás najdete</p>
                    <p className="text-sm text-stone-600">Obecní úřad Brodce, Dobrovická 34</p>
                    <p className="text-sm text-stone-600">Přízemí, kancelář č. 1</p>
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">Poplatek</p>
                    <p className="text-sm text-stone-600">Dle sazebníku Czech POINT (zpravidla 100 Kč/výpis)</p>
                  </div>
                </div>
              </div>
            </FadeInView>
          </section>

          {/* === ONLINE SLUŽBY === */}
          <section aria-labelledby="services-heading" className="mb-14">
            <FadeInView>
              <div className="flex items-center gap-3 mb-6">
                <Globe size={18} className="text-primary" />
                <h2 id="services-heading" className="font-semibold text-xl text-stone-900">Online služby a e-Government</h2>
              </div>
            </FadeInView>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {EGOV_SERVICES.map((service, i) => {
                const Icon = service.icon
                return (
                  <FadeInView key={service.title} delay={i * 40}>
                    <Link
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-3 p-5 bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-md hover:-translate-y-0.5 transition-all h-full"
                    >
                      <div className="flex items-start justify-between">
                        <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                          <Icon size={18} className="text-primary" />
                        </div>
                        <ExternalLink size={13} className="text-stone-300 group-hover:text-stone-500 transition-colors mt-1" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-stone-900 text-sm mb-1 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs text-stone-500 leading-relaxed">{service.description}</p>
                      </div>
                    </Link>
                  </FadeInView>
                )
              })}
            </div>
          </section>

          {/* === FORMULÁŘE === */}
          <section id="formulare" aria-labelledby="formulare-heading" className="mb-14 scroll-mt-20">
            <FadeInView>
              <div className="flex items-center gap-3 mb-6">
                <Download size={18} className="text-primary" />
                <h2 id="formulare-heading" className="font-semibold text-xl text-stone-900">Formuláře a žádosti</h2>
              </div>
            </FadeInView>
            <p className="text-sm text-stone-500 mb-5">Ke stažení ve formátu PDF. Vyplněný formulář doručte osobně na podatelnu nebo zasílejte datovou schránkou (<strong className="text-stone-700">demob01</strong>).</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {FORMULARE.map((f, i) => (
                <FadeInView key={f.id} delay={i * 30}>
                  <div
                    title="Formulář bude doplněn"
                    aria-disabled="true"
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-stone-100 cursor-default opacity-80"
                  >
                    <span className="text-2xl shrink-0">{f.ikona}</span>
                    <span className="flex-1 text-sm text-stone-800 leading-snug">{f.nazev}</span>
                    <Download size={13} className="text-stone-300 shrink-0" />
                  </div>
                </FadeInView>
              ))}
            </div>
          </section>

          {/* === PLATBY POPLATKŮ === */}
          <section id="platby" aria-labelledby="platby-heading" className="mb-14 scroll-mt-20">
            <FadeInView>
              <div className="flex items-center gap-3 mb-6">
                <Banknote size={18} className="text-primary" />
                <h2 id="platby-heading" className="font-semibold text-xl text-stone-900">Platby místních poplatků</h2>
              </div>
            </FadeInView>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
              {POPLATKY.map((p, i) => (
                <FadeInView key={p.nazev} delay={i * 60}>
                  <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden h-full">
                    <div className="px-5 py-3 bg-primary/5 border-b border-stone-100">
                      <h3 className="font-semibold text-stone-900 text-sm">{p.nazev}</h3>
                    </div>
                    <ul className="divide-y divide-stone-50">
                      {p.sazby.map((s) => (
                        <li key={s.popis} className="flex items-center justify-between px-5 py-2.5">
                          <span className="text-xs text-stone-600">{s.popis}</span>
                          <span className="text-xs font-bold text-primary tabular-nums whitespace-nowrap">{s.castka}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="px-5 py-3 text-xs text-stone-400 bg-stone-50/50 border-t border-stone-100">{p.poznamka}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
            <FadeInView delay={200}>
              <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5">
                <h3 className="font-semibold text-stone-900 text-sm mb-3">Způsoby platby</h3>
                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex gap-3">
                    <CreditCard size={16} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-stone-800">Online platba</p>
                      <p className="text-xs text-stone-500">Platební brána na webu obce (karta, bankovní tlačítka)</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Banknote size={16} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-stone-800">Pokladna úřadu</p>
                      <p className="text-xs text-stone-500">Hotovost — pondělí a středa 8–17. <strong>Kartou nelze.</strong></p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Inbox size={16} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-stone-800">Bankovní převod</p>
                      <p className="text-xs text-stone-500">Účet: <strong className="font-mono">10928-711/0100</strong> KB · variabilní symbol = RČ nebo IČO</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>
          </section>

          {/* === ODPADY A SVOZ === */}
          <section id="odpady" aria-labelledby="odpady-heading" className="mb-14 scroll-mt-20">
            <FadeInView>
              <div className="flex items-center gap-3 mb-6">
                <Trash2 size={18} className="text-primary" />
                <h2 id="odpady-heading" className="font-semibold text-xl text-stone-900">Odpady a svoz</h2>
              </div>
            </FadeInView>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {ODPADY_HARMONOGRAM.map((o, i) => (
                <FadeInView key={o.typ} delay={i * 40}>
                  <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
                    <div className={`px-4 py-2.5 flex items-center gap-2 ${o.barva}`}>
                      <span>{o.ikona}</span>
                      <span className="font-semibold text-sm">{o.typ}</span>
                    </div>
                    <div className="px-4 py-3">
                      <p className="text-sm font-medium text-stone-900 flex items-center gap-1.5">
                        <Calendar size={13} className="text-stone-400" />
                        {o.frekvence}
                      </p>
                      <p className="text-xs text-stone-400 mt-0.5">{o.poznamka}</p>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
            <FadeInView delay={300}>
              <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-100 rounded-xl text-sm text-amber-800">
                <Truck size={16} className="shrink-0 mt-0.5" />
                <div>
                  <strong>Svoz zajišťuje:</strong> ASA EKO s.r.o. · V případě státního svátku se svoz posouvá na nejbližší pracovní den. Aktuální harmonogram je vždy vyvěšen na úřadu a rozesílán prostřednictvím místního rozhlasu.
                </div>
              </div>
            </FadeInView>
          </section>

          {/* === HLÁSIT ZÁVADU === */}
          <section id="zavada" aria-labelledby="zavada-heading" className="mb-14 scroll-mt-20">
            <FadeInView>
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle size={18} className="text-primary" />
                <h2 id="zavada-heading" className="font-semibold text-xl text-stone-900">Hlásit závadu</h2>
              </div>
            </FadeInView>
            <div className="grid lg:grid-cols-2 gap-8">
              <FadeInView direction="left">
                <p className="text-sm text-stone-600 leading-relaxed mb-5">
                  Narazili jste na výtluk, poškozené veřejné osvětlení, znečistění nebo jinou závadu ve veřejném prostoru? Nahlaste nám ji — co nejdříve zajistíme nápravu.
                </p>
                <div className="space-y-3">
                  {[
                    { label: "Jméno a příjmení", type: "text", placeholder: "Jan Novák" },
                    { label: "Telefon nebo e-mail", type: "text", placeholder: "+420 … nebo e-mail" },
                    { label: "Popis závady", type: "textarea", placeholder: "Stručně popište závadu a přesné místo (ulice, č.p. nebo GPS)…" },
                  ].map((field) => (
                    <div key={field.label}>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">{field.label}</label>
                      {field.type === "textarea" ? (
                        <textarea rows={3} placeholder={field.placeholder} className="w-full px-3 py-2 text-sm border border-stone-200 rounded-xl focus:outline-none focus:border-primary/50 resize-none" />
                      ) : (
                        <input type={field.type} placeholder={field.placeholder} className="w-full px-3 py-2 text-sm border border-stone-200 rounded-xl focus:outline-none focus:border-primary/50" />
                      )}
                    </div>
                  ))}
                  <button className="w-full py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-mid transition-colors flex items-center justify-center gap-2">
                    <Send size={14} />
                    Odeslat hlášení
                  </button>
                </div>
              </FadeInView>
              <FadeInView direction="right" delay={100}>
                <div className="space-y-4">
                  <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100">
                    <h3 className="font-semibold text-stone-900 text-sm mb-3">Nebo nás kontaktujte přímo</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-sm text-stone-600">
                        <Mail size={14} className="text-primary shrink-0" />
                        <a href="mailto:podatelna@brodce.cloud" className="hover:text-primary transition-colors">podatelna@brodce.cloud</a>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-stone-600">
                        <Phone size={14} className="text-primary shrink-0" />
                        <a href="tel:+420326000100" className="hover:text-primary transition-colors">+420 326 000 100</a>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-stone-600">
                        <Inbox size={14} className="text-primary shrink-0" />
                        <span>Datová schránka: <strong className="font-mono text-stone-800">demob01</strong></span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10">
                    <p className="text-xs text-stone-600 leading-relaxed">
                      <strong className="text-stone-800">Zpracování:</strong> Hlášení je evidováno a zpravidla do 5 pracovních dní obdržíte zpětnou vazbu o dalším postupu. Urgentní závady (nebezpečí pro bezpečnost) řeší správce komunikací nebo Hasičský záchranný sbor Středočeského kraje neprodleně.
                    </p>
                  </div>
                </div>
              </FadeInView>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
