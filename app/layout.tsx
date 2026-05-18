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
    default: "Brodce – náš domov | Vize moderního webu městyse",
    template: "%s | Brodce – náš domov",
  },
  description:
    "Vizuální návrh moderního webu městyse Brodce — volební kampaň uskupení Brodce – náš domov. Toto není oficiální web obce, ten najdete na www.brodce.cz.",
  keywords: ["Brodce", "Brodce náš domov", "volby", "Pojizeří", "Mladá Boleslav"],
  openGraph: {
    siteName: "Brodce – náš domov",
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
