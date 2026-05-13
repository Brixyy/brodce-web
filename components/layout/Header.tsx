"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

// Next.js 16.2.6 má bug v Link při hash navigaci (concatenates hash místo replace).
// Pro hrefy obsahující "#" použij native <a>, abychom obešli problém.
type NavLinkProps = {
  href: string
  className?: string
  onClick?: () => void
  children: React.ReactNode
}
function NavLink({ href, ...rest }: NavLinkProps) {
  if (href.includes("#")) return <a href={href} {...rest} />
  return <Link href={href} {...rest} />
}

const NAV = [
  {
    label: "Aktuality",
    href: "/aktuality",
    children: [
      { label: "Aktuality a zprávy", href: "/aktuality" },
      { label: "Akce a události", href: "/aktuality#akce" },
    ],
  },
  {
    label: "Obec",
    href: "/obec",
    children: [
      { label: "Zastupitelstvo", href: "/obec#zastupitelstvo" },
      { label: "Zápisy ze zasedání", href: "/obec#zapisy" },
      { label: "Dokumenty a vyhlášky", href: "/obec#dokumenty" },
      { label: "Rozpočet obce", href: "/obec#rozpocet" },
      { label: "Veřejné zakázky", href: "/obec#zakazky" },
      { label: "Projekty obce", href: "/obec#projekty" },
    ],
  },
  {
    label: "Úřad",
    href: "/urad",
    children: [
      { label: "Hodiny a kontakty", href: "/urad#hodiny" },
      { label: "Úřední deska", href: "/urad#uredni-deska" },
      { label: "Czech POINT", href: "/urad#czechpoint" },
      { label: "Formuláře a žádosti", href: "/urad#formulare" },
      { label: "Platby poplatků", href: "/urad#platby" },
      { label: "Odpady a svoz", href: "/urad#odpady" },
      { label: "Hlásit závadu", href: "/urad#zavada" },
    ],
  },
  {
    label: "O obci",
    href: "/o-obci",
    children: [
      { label: "Historie", href: "/o-obci#historie" },
      { label: "Příroda a Jizera", href: "/o-obci#priroda" },
      { label: "Spolky a sport", href: "/o-obci#spolky" },
      { label: "Školství", href: "/o-obci#skoly" },
    ],
  },
  { label: "Galerie", href: "/galerie" },
  { label: "Kontakt", href: "/kontakt" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const closeRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const solid = !isHome || scrolled

  const openMenu = (label: string) => {
    if (closeRef.current) clearTimeout(closeRef.current)
    setActiveDropdown(label)
  }

  const scheduleClose = () => {
    closeRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  return (
    <>
      {/* Hlavní header */}
      <header
        className="fixed left-1/2 -translate-x-1/2 z-50 w-full"
        style={{
          top: solid ? "1rem" : "0",
          maxWidth: solid ? "min(960px, calc(100% - 1.5rem))" : "none",
          borderRadius: solid ? "9999px" : "0",
          transition: "top 400ms cubic-bezier(0.22,0.61,0.36,1), max-width 400ms cubic-bezier(0.22,0.61,0.36,1), border-radius 300ms ease-out",
        }}
        role="banner"
      >
        {/* Liquid glass vrstva — fade in po scrollu, žádný flicker (jen opacity transition) */}
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 rounded-[inherit] transition-opacity duration-500 ease-out pointer-events-none",
            "bg-white/55 backdrop-blur-2xl backdrop-saturate-200",
            "shadow-[0_10px_40px_-8px_rgba(15,34,64,0.22),inset_0_1px_0_0_rgba(255,255,255,0.7),inset_0_-1px_0_0_rgba(15,34,64,0.04)]",
            solid ? "opacity-100" : "opacity-0"
          )}
        />

        <div
          className={cn(
            "relative mx-auto transition-[padding,max-width] duration-400 ease-out",
            solid
              ? "px-6 sm:px-8"
              : "max-w-7xl px-4 sm:px-6 lg:px-8"
          )}
        >
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <NavLink href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-9 shrink-0">
                <Image
                  src="/icons/brodce-erb.svg"
                  alt="Erb Brodce"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span
                  className={cn(
                    "font-serif text-xl font-bold transition-colors leading-none",
                    solid ? "text-primary" : "text-white"
                  )}
                >
                  Brodce
                </span>
                <span
                  className={cn(
                    "text-[10px] uppercase tracking-widest transition-colors",
                    solid ? "text-stone-400" : "text-white/60"
                  )}
                >
                  Oficiální stránky městyse
                </span>
              </div>
            </NavLink>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-0"
              aria-label="Hlavní navigace"
            >
              {NAV.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children ? openMenu(item.label) : scheduleClose()}
                  onMouseLeave={scheduleClose}
                >
                  <NavLink
                    href={item.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors rounded-lg flex items-center gap-1",
                      solid
                        ? "text-stone-700 hover:text-primary hover:bg-stone-50"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <svg width="10" height="6" viewBox="0 0 10 6" className="opacity-50 mt-0.5">
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                      </svg>
                    )}
                  </NavLink>

                  {/* Dropdown – pt-1 bridges the hover gap */}
                  {item.children && activeDropdown === item.label && (
                    <div
                      className="absolute top-full left-0 pt-1 z-50"
                      onMouseEnter={() => openMenu(item.label)}
                      onMouseLeave={scheduleClose}
                    >
                      <div className="w-52 bg-white rounded-xl shadow-xl border border-stone-100 py-1.5">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-stone-700 hover:bg-stone-50 hover:text-primary transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Telefon + hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+420326312204"
                className={cn(
                  "items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-300",
                  // Telefon viditelný jen v default (full-width) stavu; po scrollu se schová
                  solid
                    ? "hidden"
                    : "hidden sm:flex text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                <Phone size={13} />
                <span className="hidden xl:inline">+420 326 312 204</span>
              </a>
              <button
                onClick={() => setOpen(true)}
                aria-label="Otevřít mobilní menu"
                aria-expanded={open}
                className={cn(
                  "lg:hidden p-2 rounded-lg transition-colors",
                  solid
                    ? "text-stone-700 hover:bg-stone-100"
                    : "text-white hover:bg-white/10"
                )}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Mobilní menu">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-80 bg-white shadow-2xl flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-stone-100 sticky top-0 bg-white">
              <div>
                <span className="font-serif text-xl font-bold text-primary block">Brodce</span>
                <span className="text-xs text-stone-400">Oficiální stránky městyse</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg text-stone-500 hover:bg-stone-100"
                aria-label="Zavřít menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col p-3 gap-0.5" aria-label="Mobilní navigace">
              {NAV.map((item) => (
                <div key={item.label}>
                  <NavLink
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center px-4 py-2.5 rounded-xl text-stone-800 hover:text-primary hover:bg-stone-50 font-medium transition-colors text-sm"
                  >
                    {item.label}
                  </NavLink>
                  {item.children && (
                    <div className="pl-4 pb-1">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block px-4 py-1.5 text-sm text-stone-500 hover:text-primary transition-colors"
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-auto p-5 border-t border-stone-100 space-y-3">
              <a href="tel:+420326312204" className="flex items-center gap-3 text-sm text-stone-600">
                <Phone size={15} className="text-primary" />
                +420 326 312 204
              </a>
              <div className="text-xs text-stone-400 space-y-0.5">
                <p>IČO: 00237078 · DS: 2zvbp7e</p>
                <p>Brodce č.p. 48, 294 73</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
