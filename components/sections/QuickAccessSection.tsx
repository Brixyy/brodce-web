import Link from "next/link"
import {
  CreditCard,
  AlertTriangle,
  Trash2,
  Landmark,
  Clock,
  FileText,
  Calendar,
  MapPin,
} from "lucide-react"

const QUICK_LINKS = [
  {
    icon: CreditCard,
    label: "Zaplatit poplatek",
    sub: "odpady, psi, prostranství",
    href: "/urad#platby",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: AlertTriangle,
    label: "Hlásit závadu",
    sub: "výtluky, osvětlení, odpady",
    href: "/urad#zavada",
    color: "text-orange-600 bg-orange-50",
  },
  {
    icon: Trash2,
    label: "Svoz odpadů",
    sub: "harmonogram, třídění",
    href: "/urad#odpady",
    color: "text-green-600 bg-green-50",
  },
  {
    icon: Landmark,
    label: "Czech POINT",
    sub: "výpisy, ověření – po a st",
    href: "/urad#czechpoint",
    color: "text-purple-600 bg-purple-50",
  },
  {
    icon: Clock,
    label: "Úřední hodiny",
    sub: "po, st 8–17 · pá 8–11",
    href: "/kontakt",
    color: "text-sky-600 bg-sky-50",
  },
  {
    icon: FileText,
    label: "Úřední deska",
    sub: "vyhlášky, záměry, dokumenty",
    href: "/urad#uredni-deska",
    color: "text-rose-600 bg-rose-50",
  },
  {
    icon: Calendar,
    label: "Akce v obci",
    sub: "kalendář událostí",
    href: "/urad#akce",
    color: "text-amber-600 bg-amber-50",
  },
  {
    icon: MapPin,
    label: "Kde nás najdete",
    sub: "Brodce č.p. 48, 294 73",
    href: "/kontakt",
    color: "text-teal-600 bg-teal-50",
  },
]

export default function QuickAccessSection() {
  return (
    <section
      aria-labelledby="quickaccess-heading"
      className="bg-gradient-to-b from-white to-stone-50/70 border-b border-stone-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p
          id="quickaccess-heading"
          className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4"
        >
          Nejčastěji hledáte
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {QUICK_LINKS.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.label}
                href={item.href}
                className="group flex flex-col items-center text-center p-3 rounded-xl hover:bg-stone-50 transition-colors gap-2"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-800 leading-tight">
                    {item.label}
                  </p>
                  <p className="text-[10px] text-stone-400 leading-tight mt-0.5 hidden sm:block">
                    {item.sub}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
