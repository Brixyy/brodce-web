import type { Metadata } from "next"
import {
  FileText, BookOpen, Download, CheckCircle2, Timer,
  Coins, Phone, Mail, Scale,
} from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FadeInView from "@/components/animations/FadeInView"
import PersonAvatar from "@/components/ui/PersonAvatar"
import { COUNCIL_MEMBERS, FINANCIAL_COMMITTEE, CONTROL_COMMITTEE } from "@/data/council"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Obec | Brodce",
  description: "Zastupitelstvo, zápisy ze zasedání, dokumenty, rozpočet a projekty obce Brodce.",
}

const ZAPISY = [
  { id: "z1", cislo: "4/2026", date: "2026-04-28", body: "Záměr pronájmu sokolovny; RO č. 1/2026; informace o opravě ul. K Jizeře" },
  { id: "z2", cislo: "3/2026", date: "2026-03-10", body: "Projednání žádostí spolků o dotace; zpráva kontrolního výboru" },
  { id: "z3", cislo: "2/2026", date: "2026-02-10", body: "Smlouva na svoz odpadů 2026–2028; zpráva o stavu majetku obce" },
  { id: "z4", cislo: "1/2026", date: "2026-01-13", body: "Plán zasedání 2026; informace o přípravě projektu revitalizace návsi" },
  { id: "z5", cislo: "8/2025", date: "2025-12-09", body: "Schválení rozpočtu na rok 2026; závěrečný účet za rok 2024" },
  { id: "z6", cislo: "7/2025", date: "2025-11-11", body: "Informace o projektu revitalizace; projednání záměru veřejné zakázky" },
  { id: "z7", cislo: "6/2025", date: "2025-09-15", body: "Výsledky hospodaření za 1. pololetí 2025; různé" },
  { id: "z8", cislo: "5/2025", date: "2025-06-23", body: "Projednání záměru opravy vozovky; zpráva finančního výboru za 2024" },
]

const VYHLASKY = [
  { id: "v1", nazev: "OZV č. 1/2024 o místním poplatku za obecní systém odpadového hospodářství", rok: 2024 },
  { id: "v2", nazev: "OZV č. 2/2024 o místním poplatku za zvláštní užívání veřejného prostranství", rok: 2024 },
  { id: "v3", nazev: "OZV č. 1/2023 o pravidlech pro pohyb psů na veřejném prostranství", rok: 2023 },
  { id: "v4", nazev: "OZV č. 2/2022 o nočním klidu", rok: 2022 },
  { id: "v5", nazev: "OZV č. 1/2022 o místním poplatku ze psů", rok: 2022 },
  { id: "v6", nazev: "Řád veřejného pohřebiště Brodce", rok: 2021 },
]

const DOKUMENTY = [
  { id: "d1", nazev: "Územní plán Brodce", rok: "platný od 2018", typ: "Strategický" },
  { id: "d2", nazev: "Strategický plán rozvoje obce 2020–2025", rok: "2020", typ: "Strategický" },
  { id: "d3", nazev: "Schválený rozpočet Brodce 2026", rok: "2025", typ: "Finanční" },
  { id: "d4", nazev: "Závěrečný účet 2024", rok: "2025", typ: "Finanční" },
  { id: "d5", nazev: "Střednědobý výhled rozpočtu 2026–2028", rok: "2025", typ: "Finanční" },
  { id: "d6", nazev: "Digitální povodňový plán Brodce", rok: "2022", typ: "Bezpečnost" },
]

const ROZPOCET = {
  prijmy: 16200000,
  vydaje: 15800000,
  polozky: [
    { nazev: "Veřejná správa a samospráva", castka: 4200000, procent: 27, barva: "bg-primary" },
    { nazev: "Školství (příspěvek ZŠ a MŠ)", castka: 2800000, procent: 18, barva: "bg-river" },
    { nazev: "Technická infrastruktura a opravy", castka: 3100000, procent: 20, barva: "bg-forest" },
    { nazev: "Komunální služby (odpady, zeleň)", castka: 2200000, procent: 14, barva: "bg-amber-500" },
    { nazev: "Kultura, sport a spolky", castka: 800000, procent: 5, barva: "bg-purple-500" },
    { nazev: "Ochrana obyvatelstva a krizové řízení", castka: 600000, procent: 4, barva: "bg-red-500" },
    { nazev: "Ostatní výdaje", castka: 2100000, procent: 12, barva: "bg-stone-300" },
  ],
}

const PROJEKTY = [
  { id: "p1", nazev: "Oprava vozovky ul. K Jizeře", stav: "probíhá", rok: "2026", castka: "1 180 000 Kč", dotace: "SFDI", popis: "Kompletní rekonstrukce povrchu komunikace v délce 340 m vč. odvodňovacího příkopu." },
  { id: "p2", nazev: "Revitalizace centra obce", stav: "probíhá", rok: "2026–2027", castka: "4 500 000 Kč", dotace: "IROP", popis: "Obnova dlažby na návsi, nové lavičky, výsadba stromů a osvětlení centrálního prostoru." },
  { id: "p3", nazev: "Rozšíření kapacity MŠ", stav: "plánováno", rok: "2027", castka: "3 500 000 Kč", dotace: "MF ČR", popis: "Přístavba nové třídy mateřské školy navyšující kapacitu o 20 míst." },
  { id: "p4", nazev: "Dětské hřiště u sokolovny", stav: "dokončeno", rok: "2025", castka: "650 000 Kč", dotace: "vlastní prostředky", popis: "Nové hřiště s prolézačkami, houpačkami a pískovištěm pro děti do 12 let." },
  { id: "p5", nazev: "Zateplení budovy obecního úřadu", stav: "dokončeno", rok: "2024", castka: "1 400 000 Kč", dotace: "OPŽP", popis: "Komplexní zateplení obvodového pláště a výměna oken budovy úřadu." },
  { id: "p6", nazev: "Obnova veřejného osvětlení (LED)", stav: "dokončeno", rok: "2023", castka: "920 000 Kč", dotace: "SFŽP", popis: "Výměna 58 svítidel za energeticky úsporné LED se snížením spotřeby o 65 %." },
]

const STAV_STYLES: Record<string, { label: string; cls: string; Icon: typeof CheckCircle2 }> = {
  "probíhá":   { label: "Probíhá",   cls: "bg-blue-50 text-blue-700 border-blue-200",          Icon: Timer },
  "plánováno": { label: "Plánováno", cls: "bg-amber-50 text-amber-700 border-amber-200",        Icon: Timer },
  "dokončeno": { label: "Dokončeno", cls: "bg-emerald-50 text-emerald-700 border-emerald-200",  Icon: CheckCircle2 },
}

const ZAKAZKY = [
  { id: "z1", nazev: "Oprava vozovky ul. K Jizeře", stav: "Uzavřeno", dodavatel: "Silnice Čechy s.r.o.", castka: "1 180 000 Kč", rok: "2026" },
  { id: "z2", nazev: "Svoz a likvidace komunálního odpadu 2026–2028", stav: "Uzavřeno", dodavatel: "ASA EKO s.r.o.", castka: "2 340 000 Kč", rok: "2026" },
  { id: "z3", nazev: "Pojištění majetku a odpovědnosti obce", stav: "Uzavřeno", dodavatel: "Kooperativa a.s.", castka: "148 000 Kč", rok: "2026" },
  { id: "z4", nazev: "Revitalizace centra obce – projektová dokumentace", stav: "Probíhá", dodavatel: "Atelier A2 s.r.o.", castka: "320 000 Kč", rok: "2026" },
]

const STAV_ZAKAZKY: Record<string, string> = {
  Uzavřeno: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Probíhá:  "bg-blue-50 text-blue-700 border-blue-200",
}

const COMMITTEE_LABELS: Record<string, { label: string; color: string }> = {
  financni: { label: "Finanční výbor", color: "bg-blue-50 text-blue-700 border-blue-200" },
  kontrolni: { label: "Kontrolní výbor", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("cs-CZ", { day: "numeric", month: "long", year: "numeric" })
}

function formatMoney(n: number) {
  return n.toLocaleString("cs-CZ") + " Kč"
}

export default function ObecPage() {
  const mayor = COUNCIL_MEMBERS.find((m) => m.isMayor)!
  const deputy = COUNCIL_MEMBERS.find((m) => m.isDeputy)!
  const others = COUNCIL_MEMBERS.filter((m) => !m.isMayor && !m.isDeputy)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50 pt-28 pb-20">

        {/* Page header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="mb-10">
            <span className="accent-line" />
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900">Samospráva obce</h1>
            <p className="mt-2 text-stone-500">Zastupitelstvo, dokumenty, rozpočet a projekty Brodce</p>
          </FadeInView>
        </div>

        {/* ── #zastupitelstvo ── */}
        <section id="zastupitelstvo" className="py-14 bg-stone-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInView>
              <span className="accent-line" />
              <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
                <div>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">Zastupitelstvo</h2>
                  <p className="mt-2 text-stone-500">9 zastupitelů zvolených na volební období 2022–2026</p>
                </div>
              </div>
            </FadeInView>

            {/* Starostka + Místostarosta */}
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {[mayor, deputy].map((member, i) => (
                <FadeInView key={member.id} delay={i * 80}>
                  <div className={cn(
                    "relative flex items-center gap-5 p-6 rounded-2xl border overflow-hidden",
                    member.isMayor ? "bg-primary text-white border-primary" : "bg-white text-stone-900 border-stone-200 shadow-sm"
                  )}>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[80px] font-serif font-bold select-none pointer-events-none text-white/5">B</div>
                    <div className="relative w-20 h-20 shrink-0 rounded-full overflow-hidden ring-4 ring-white/20">
                      <PersonAvatar iconSize={38} tone={member.isMayor ? "dark" : "light"} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={cn("text-[10px] uppercase tracking-widest font-medium mb-0.5", member.isMayor ? "text-white/60" : "text-stone-400")}>
                        {member.role}
                      </p>
                      <h3 className={cn("font-serif text-xl font-bold", member.isMayor ? "text-white" : "text-stone-900")}>{member.name}</h3>
                      <div className={cn("mt-2 flex flex-col gap-1", member.isMayor ? "text-white/70" : "text-stone-500")}>
                        {member.phone && (
                          <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 text-xs hover:underline">
                            <Phone size={11} />{member.phone}
                          </a>
                        )}
                        {member.email && (
                          <a href={`mailto:${member.email}`} className="flex items-center gap-1.5 text-xs hover:underline">
                            <Mail size={11} />{member.email}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>

            {/* Ostatní zastupitelé */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
              {others.map((member, i) => {
                const badge = member.committee ? COMMITTEE_LABELS[member.committee] : null
                return (
                  <FadeInView key={member.id} delay={160 + i * 50} className="h-full">
                    <div className="h-full bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all border border-stone-100 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-3 rounded-full overflow-hidden ring-2 ring-stone-100">
                        <PersonAvatar iconSize={30} />
                      </div>
                      <h3 className="font-semibold text-sm text-stone-900">{member.name}</h3>
                      <p className="text-xs text-stone-400 mt-0.5">{member.role}</p>
                      {badge && (
                        <span className={cn("mt-2 text-[10px] px-2 py-0.5 rounded-full border font-medium", badge.color)}>
                          {member.committeeRole === "predseda" ? "předseda/kyně" : "člen/ka"} · {badge.label}
                        </span>
                      )}
                    </div>
                  </FadeInView>
                )
              })}
            </div>

            {/* Výbory */}
            <FadeInView delay={400}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
                  <div className="px-5 py-3 bg-blue-50 border-b border-blue-100">
                    <h4 className="font-semibold text-sm text-blue-800">Finanční výbor</h4>
                    <p className="text-xs text-blue-600/70 mt-0.5">Kontrola hospodaření a rozpočtu</p>
                  </div>
                  <ul className="divide-y divide-stone-100">
                    {FINANCIAL_COMMITTEE.map((m) => (
                      <li key={m.name} className="flex items-center justify-between px-5 py-2.5">
                        <span className="text-sm text-stone-800">{m.name}</span>
                        <span className="text-xs text-stone-400 font-medium">{m.role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
                  <div className="px-5 py-3 bg-emerald-50 border-b border-emerald-100">
                    <h4 className="font-semibold text-sm text-emerald-800">Kontrolní výbor</h4>
                    <p className="text-xs text-emerald-600/70 mt-0.5">Kontrola plnění usnesení zastupitelstva</p>
                  </div>
                  <ul className="divide-y divide-stone-100">
                    {CONTROL_COMMITTEE.map((m) => (
                      <li key={m.name} className="flex items-center justify-between px-5 py-2.5">
                        <span className="text-sm text-stone-800">{m.name}</span>
                        <span className="text-xs text-stone-400 font-medium">{m.role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* ── #zapisy ── */}
        <section id="zapisy" className="py-14 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInView>
              <span className="accent-line" />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-2">Zápisy ze zasedání</h2>
              <p className="text-stone-500 mb-8">Zastupitelstvo se schází zpravidla jednou za 6 týdnů.</p>
            </FadeInView>
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
              <ul className="divide-y divide-stone-100">
                {ZAPISY.map((z, i) => (
                  <FadeInView key={z.id} delay={i * 30}>
                    <li>
                      <div
                        title="Zápis bude doplněn"
                        aria-disabled="true"
                        className="flex items-center gap-4 px-5 py-4 cursor-default"
                      >
                        <div className="shrink-0 w-10 h-10 bg-primary/8 rounded-xl flex items-center justify-center">
                          <BookOpen size={15} className="text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm text-stone-900">
                            Zápis č. {z.cislo} ze zasedání zastupitelstva
                          </p>
                          <p className="text-xs text-stone-400 mt-0.5 truncate">{z.body}</p>
                        </div>
                        <div className="shrink-0 text-right">
                          <p className="text-xs text-stone-500 whitespace-nowrap">{formatDate(z.date)}</p>
                          <p className="text-[10px] text-stone-300 mt-0.5">PDF</p>
                        </div>
                        <Download size={14} className="text-stone-300 shrink-0" />
                      </div>
                    </li>
                  </FadeInView>
                ))}
              </ul>
            </div>
            <FadeInView delay={300}>
              <p className="text-xs text-stone-400 mt-4 text-center">
                Starší zápisy jsou k dispozici na vyžádání na úřadu městyse.
              </p>
            </FadeInView>
          </div>
        </section>

        {/* ── #dokumenty ── */}
        <section id="dokumenty" className="py-14 bg-stone-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInView>
              <span className="accent-line" />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-8">Dokumenty a vyhlášky</h2>
            </FadeInView>
            <div className="grid lg:grid-cols-2 gap-8">
              <FadeInView direction="left">
                <h3 className="font-semibold text-stone-900 mb-4 flex items-center gap-2">
                  <FileText size={16} className="text-primary" />Obecně závazné vyhlášky
                </h3>
                <div className="space-y-2">
                  {VYHLASKY.map((v) => (
                    <div
                      key={v.id}
                      title="Vyhláška bude doplněna"
                      aria-disabled="true"
                      className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-stone-100 cursor-default opacity-80"
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                        <FileText size={13} className="text-red-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-stone-800 leading-snug">{v.nazev}</p>
                      </div>
                      <span className="text-xs text-stone-400 shrink-0">{v.rok}</span>
                      <Download size={12} className="text-stone-300 shrink-0" />
                    </div>
                  ))}
                </div>
              </FadeInView>

              <FadeInView direction="right" delay={100}>
                <h3 className="font-semibold text-stone-900 mb-4 flex items-center gap-2">
                  <FileText size={16} className="text-primary" />Strategické a finanční dokumenty
                </h3>
                <div className="space-y-2">
                  {DOKUMENTY.map((d) => (
                    <div
                      key={d.id}
                      title="Dokument bude doplněn"
                      aria-disabled="true"
                      className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-stone-100 cursor-default opacity-80"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                        <FileText size={13} className="text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-stone-800 leading-snug">{d.nazev}</p>
                        <p className="text-[11px] text-stone-400 mt-0.5">{d.typ}</p>
                      </div>
                      <span className="text-xs text-stone-400 shrink-0">{d.rok}</span>
                      <Download size={12} className="text-stone-300 shrink-0" />
                    </div>
                  ))}
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* ── #rozpocet ── */}
        <section id="rozpocet" className="py-14 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInView>
              <span className="accent-line" />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-2">Rozpočet obce 2026</h2>
              <p className="text-stone-500 mb-8">Schválený rozpočet na rok 2026 (v Kč)</p>
            </FadeInView>
            <div className="grid sm:grid-cols-3 gap-5 mb-10">
              <FadeInView>
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
                  <Coins size={22} className="text-emerald-600 mx-auto mb-2" />
                  <p className="text-xs text-emerald-600 uppercase tracking-wider mb-1">Příjmy celkem</p>
                  <p className="font-serif text-2xl font-bold text-emerald-700">{formatMoney(ROZPOCET.prijmy)}</p>
                </div>
              </FadeInView>
              <FadeInView delay={80}>
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center">
                  <Coins size={22} className="text-blue-600 mx-auto mb-2" />
                  <p className="text-xs text-blue-600 uppercase tracking-wider mb-1">Výdaje celkem</p>
                  <p className="font-serif text-2xl font-bold text-blue-700">{formatMoney(ROZPOCET.vydaje)}</p>
                </div>
              </FadeInView>
              <FadeInView delay={160}>
                <div className="bg-primary rounded-2xl p-6 text-center">
                  <Coins size={22} className="text-white/70 mx-auto mb-2" />
                  <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Saldo</p>
                  <p className="font-serif text-2xl font-bold text-white">{formatMoney(ROZPOCET.prijmy - ROZPOCET.vydaje)}</p>
                </div>
              </FadeInView>
            </div>
            <FadeInView delay={200}>
              <h3 className="font-semibold text-stone-900 mb-5">Struktura výdajů</h3>
              <div className="space-y-3">
                {ROZPOCET.polozky.map((p) => (
                  <div key={p.nazev}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-stone-700">{p.nazev}</span>
                      <span className="text-sm font-semibold text-stone-900 tabular-nums">{formatMoney(p.castka)}</span>
                    </div>
                    <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                      <div className={cn("h-full rounded-full transition-all", p.barva)} style={{ width: `${p.procent}%` }} />
                    </div>
                    <p className="text-[11px] text-stone-400 mt-0.5 text-right">{p.procent} %</p>
                  </div>
                ))}
              </div>
            </FadeInView>
            <FadeInView delay={400} className="mt-8">
              <span
                title="PDF rozpočtu bude doplněno"
                aria-disabled="true"
                className="inline-flex items-center gap-2 text-sm font-semibold text-stone-400 cursor-default"
              >
                <Download size={14} />
                Stáhnout schválený rozpočet (PDF)
              </span>
            </FadeInView>
          </div>
        </section>

        {/* ── #zakazky ── */}
        <section id="zakazky" className="py-14 bg-stone-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInView>
              <span className="accent-line" />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-2">Veřejné zakázky</h2>
              <p className="text-stone-500 mb-8">Smlouvy a zakázky uzavřené obcí Brodce</p>
            </FadeInView>
            <FadeInView delay={100}>
              <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-stone-50 border-b border-stone-100">
                        <th className="px-5 py-3 text-left text-xs font-semibold text-stone-500 uppercase tracking-wider">Název zakázky</th>
                        <th className="px-5 py-3 text-left text-xs font-semibold text-stone-500 uppercase tracking-wider">Dodavatel</th>
                        <th className="px-5 py-3 text-right text-xs font-semibold text-stone-500 uppercase tracking-wider">Hodnota</th>
                        <th className="px-5 py-3 text-center text-xs font-semibold text-stone-500 uppercase tracking-wider">Stav</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-50">
                      {ZAKAZKY.map((z) => (
                        <tr key={z.id} className="hover:bg-stone-50 transition-colors">
                          <td className="px-5 py-4">
                            <p className="font-medium text-stone-900">{z.nazev}</p>
                            <p className="text-xs text-stone-400 mt-0.5">{z.rok}</p>
                          </td>
                          <td className="px-5 py-4 text-stone-600">{z.dodavatel}</td>
                          <td className="px-5 py-4 text-right font-semibold text-stone-900 tabular-nums">{z.castka}</td>
                          <td className="px-5 py-4 text-center">
                            <span className={cn("text-[11px] font-semibold px-2.5 py-1 rounded-full border", STAV_ZAKAZKY[z.stav] ?? "bg-stone-50 text-stone-600 border-stone-200")}>
                              {z.stav}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeInView>
            <FadeInView delay={200}>
              <p className="mt-4 flex items-center gap-2 text-xs text-stone-400">
                <Scale size={12} />
                Veškeré smlouvy nad 50 000 Kč jsou zveřejněny v Registru smluv dle zákona č. 340/2015 Sb.
              </p>
            </FadeInView>
          </div>
        </section>

        {/* ── #projekty ── */}
        <section id="projekty" className="py-14 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInView>
              <span className="accent-line" />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-2">Projekty obce</h2>
              <p className="text-stone-500 mb-8">Investiční akce a rozvojové projekty Brodce</p>
            </FadeInView>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PROJEKTY.map((p, i) => {
                const stav = STAV_STYLES[p.stav]
                return (
                  <FadeInView key={p.id} delay={i * 60}>
                    <div className="bg-white rounded-2xl p-5 border border-stone-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <h3 className="font-semibold text-stone-900 text-sm leading-snug">{p.nazev}</h3>
                        <span className={cn("shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-md border", stav.cls)}>
                          {stav.label}
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 leading-relaxed flex-1 mb-4">{p.popis}</p>
                      <div className="pt-3 border-t border-stone-100 grid grid-cols-3 gap-2 text-center">
                        <div>
                          <p className="text-[10px] text-stone-400 uppercase tracking-wide">Rok</p>
                          <p className="text-xs font-semibold text-stone-700 mt-0.5">{p.rok}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-stone-400 uppercase tracking-wide">Náklady</p>
                          <p className="text-xs font-semibold text-stone-700 mt-0.5">{p.castka}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-stone-400 uppercase tracking-wide">Dotace</p>
                          <p className="text-xs font-semibold text-primary mt-0.5">{p.dotace}</p>
                        </div>
                      </div>
                    </div>
                  </FadeInView>
                )
              })}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
