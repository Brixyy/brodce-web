import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, ChevronRight } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"
import FadeInView from "@/components/animations/FadeInView"
import BackgroundAurora from "@/components/ui/BackgroundAurora"
import { COUNCIL_MEMBERS, FINANCIAL_COMMITTEE, CONTROL_COMMITTEE } from "@/data/council"
import { cn } from "@/lib/utils"

const COMMITTEE_LABELS: Record<string, { label: string; color: string }> = {
  financni: { label: "Finanční výbor", color: "bg-blue-50 text-blue-700 border-blue-200" },
  kontrolni: { label: "Kontrolní výbor", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
}

export default function CouncilSection() {
  const mayor = COUNCIL_MEMBERS.find((m) => m.isMayor)!
  const deputy = COUNCIL_MEMBERS.find((m) => m.isDeputy)!
  const others = COUNCIL_MEMBERS.filter((m) => !m.isMayor && !m.isDeputy)

  return (
    <section id="zastupitele" className="relative py-20 lg:py-28 bg-stone-50 overflow-hidden">
      <BackgroundAurora variant="soft" intensity="subtle" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeInView className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <div>
            <SectionTitle
              title="Zastupitelstvo"
              subtitle="9 zastupitelů zvolených na období 2022–2026"
            />
          </div>
          <Link
            href="/obec#zapisy"
            className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-mid transition-colors whitespace-nowrap"
          >
            Zápisy ze zasedání
            <ChevronRight size={15} />
          </Link>
        </FadeInView>

        {/* Starostka + Místostarosta — featured row */}
        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          {[mayor, deputy].map((member, i) => (
            <FadeInView key={member.id} delay={i * 80}>
              <div
                className={cn(
                  "relative flex items-center gap-5 p-6 rounded-2xl border overflow-hidden",
                  member.isMayor
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-stone-900 border-stone-200 shadow-sm"
                )}
              >
                {/* Subtle background shield */}
                <div
                  className={cn(
                    "absolute right-4 top-1/2 -translate-y-1/2 text-[80px] font-serif font-bold select-none pointer-events-none",
                    member.isMayor ? "text-white/5" : "text-stone-900/3"
                  )}
                >
                  B
                </div>

                <div className="relative w-20 h-20 shrink-0 rounded-full overflow-hidden ring-4 ring-white/20">
                  <Image
                    src={member.photo ?? "https://randomuser.me/api/portraits/lego/1.jpg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className={cn(
                    "text-[10px] uppercase tracking-widest font-medium mb-0.5",
                    member.isMayor ? "text-white/60" : "text-stone-400"
                  )}>
                    {member.role}
                  </p>
                  <h3 className={cn(
                    "font-serif text-xl font-bold leading-tight",
                    member.isMayor ? "text-white" : "text-stone-900"
                  )}>
                    {member.name}
                  </h3>

                  <div className={cn(
                    "mt-2.5 flex flex-col gap-1",
                    member.isMayor ? "text-white/70" : "text-stone-500"
                  )}>
                    {member.phone && (
                      <a
                        href={`tel:${member.phone.replace(/\s/g, "")}`}
                        className={cn(
                          "flex items-center gap-1.5 text-xs transition-colors hover:underline",
                          member.isMayor ? "hover:text-white" : "hover:text-primary"
                        )}
                      >
                        <Phone size={11} />
                        {member.phone}
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className={cn(
                          "flex items-center gap-1.5 text-xs transition-colors hover:underline",
                          member.isMayor ? "hover:text-white" : "hover:text-primary"
                        )}
                      >
                        <Mail size={11} />
                        {member.email}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

        {/* Ostatní zastupitelé — grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {others.map((member, i) => {
            const badge = member.committee ? COMMITTEE_LABELS[member.committee] : null
            return (
              <FadeInView key={member.id} delay={160 + i * 50}>
                <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all group border border-stone-100 flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-3 rounded-full overflow-hidden ring-2 ring-stone-100 group-hover:ring-primary/30 transition-colors">
                    <Image
                      src={member.photo ?? "https://randomuser.me/api/portraits/lego/1.jpg"}
                      alt={member.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="font-semibold text-sm text-stone-900 leading-snug">{member.name}</h3>
                  <p className="text-xs text-stone-400 mt-0.5">{member.role}</p>
                  {badge && (
                    <span className={cn(
                      "mt-2 text-[10px] px-2 py-0.5 rounded-full border font-medium",
                      badge.color
                    )}>
                      {member.committeeRole === "predseda" ? "předseda/kyně" : "člen/ka"} · {badge.label}
                    </span>
                  )}
                </div>
              </FadeInView>
            )
          })}
        </div>

        {/* Výbory */}
        <FadeInView delay={600}>
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Finanční výbor */}
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

            {/* Kontrolní výbor */}
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

        {/* Prógramy zasedání */}
        <FadeInView delay={700} className="mt-6 text-center">
          <p className="text-xs text-stone-400">
            Zastupitelstvo se schází zpravidla jednou za měsíc.{" "}
            <Link
              href="/obec#zastupitelstvo"
              className="text-primary underline underline-offset-2 hover:no-underline"
            >
              Program příštího zasedání →
            </Link>
          </p>
        </FadeInView>

      </div>
    </section>
  )
}
