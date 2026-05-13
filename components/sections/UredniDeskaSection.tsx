import Link from "next/link"
import { FileText, ExternalLink } from "lucide-react"
import { UREDNI_DESKA } from "@/data/uredni-deska"
import { formatDateShort } from "@/lib/utils"
import FadeInView from "@/components/animations/FadeInView"
import SectionTitle from "@/components/ui/SectionTitle"

const TYPE_COLORS: Record<string, string> = {
  Vyhláška: "bg-red-100 text-red-700",
  Záměr: "bg-amber-100 text-amber-700",
  Oznámení: "bg-blue-100 text-blue-700",
  Rozpočet: "bg-green-100 text-green-700",
  Smlouva: "bg-purple-100 text-purple-700",
  Výzva: "bg-orange-100 text-orange-700",
}

export default function UredniDeskaSection() {
  return (
    <section
      id="uredni-deska"
      aria-labelledby="uredni-deska-heading"
      className="py-14 bg-stone-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView className="flex items-end justify-between mb-6 gap-4 flex-wrap">
          <SectionTitle
            id="uredni-deska-heading"
            title="Úřední deska"
            subtitle="Aktuální dokumenty a oznámení"
          />
          <Link
            href="/urad#uredni-deska"
            className="text-sm font-semibold text-primary hover:text-primary-mid transition-colors whitespace-nowrap flex items-center gap-1"
          >
            Celá úřední deska →
          </Link>
        </FadeInView>

        <div className="space-y-2">
          {UREDNI_DESKA.map((doc, i) => {
            const inner = (
              <>
                <div className="shrink-0 w-9 h-9 rounded-lg bg-stone-50 border border-stone-100 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                  <FileText size={16} className="text-stone-400 group-hover:text-primary transition-colors" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium truncate transition-colors ${
                    doc.href ? "text-stone-800 group-hover:text-primary" : "text-stone-700"
                  }`}>
                    {doc.title}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <time className="text-xs text-stone-400" dateTime={doc.publishedAt}>
                      Vyvěšeno {formatDateShort(doc.publishedAt)}
                    </time>
                    {doc.validUntil && (
                      <span className="text-xs text-stone-300">
                        · do {formatDateShort(doc.validUntil)}
                      </span>
                    )}
                  </div>
                </div>

                <span
                  className={`shrink-0 hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                    TYPE_COLORS[doc.type] ?? "bg-stone-100 text-stone-600"
                  }`}
                >
                  {doc.type}
                </span>

                {doc.href && (
                  <ExternalLink
                    size={14}
                    className="shrink-0 text-stone-300 group-hover:text-primary transition-colors"
                  />
                )}
              </>
            )
            return (
              <FadeInView key={doc.id} delay={i * 40}>
                {doc.href ? (
                  <Link
                    href={doc.href}
                    className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-100 hover:border-primary/30 hover:shadow-sm transition-all"
                  >
                    {inner}
                  </Link>
                ) : (
                  <div
                    title="Dokument bude doplněn"
                    aria-disabled="true"
                    className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-100 cursor-default opacity-90"
                  >
                    {inner}
                  </div>
                )}
              </FadeInView>
            )
          })}
        </div>
      </div>
    </section>
  )
}
