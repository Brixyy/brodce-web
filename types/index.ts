export type NewsCategory =
  | "Úřední deska"
  | "Akce"
  | "Bezpečnost"
  | "Škola"
  | "Sport"
  | "Kultura"
  | "Ostatní"

export type NewsArticle = {
  id: string
  slug: string
  title: string
  perex: string
  content: string
  category: NewsCategory
  publishedAt: string
  image: string
  imageAlt: string
  featured: boolean
  readingMinutes: number
}

export type EventCategory = "Obec" | "Hasiči" | "Sport" | "Kultura" | "Škola"

export type Event = {
  id: string
  title: string
  date: string
  time: string
  endTime?: string
  location: string
  description: string
  organizer: string
  category: EventCategory
  highlight?: boolean
}

export type CouncilMember = {
  id: string
  name: string
  role: string
  email?: string
  phone?: string
  photo?: string
  isMayor?: boolean
  isDeputy?: boolean
  committee?: "financni" | "kontrolni"
  committeeRole?: "predseda" | "clen"
}

export type GalleryCategory = "Příroda" | "Obec" | "Akce" | "Historie"

export type GalleryImage = {
  id: string
  src: string
  alt: string
  category: GalleryCategory
  width: number
  height: number
}

export type OfficeService = {
  id: string
  title: string
  description: string
  icon: string
  linkLabel: string
  linkHref: string
}
