import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Brodce – Městys v srdci Pojizeří",
    template: "%s | Brodce",
  },
  description:
    "Oficiální web městyse Brodce. Aktuality, úřední deska, akce a informace pro občany.",
  keywords: ["Brodce", "městys", "Pojizeří", "Mladá Boleslav", "Středočeský kraj"],
  openGraph: {
    siteName: "Brodce",
    locale: "cs_CZ",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className={`${inter.variable} ${playfair.variable} overflow-x-clip`}>
      <body className="overflow-x-clip">{children}</body>
    </html>
  )
}
