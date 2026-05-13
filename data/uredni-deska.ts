export type UredniDeskaDokument = {
  id: string
  title: string
  type: "Vyhláška" | "Záměr" | "Oznámení" | "Rozpočet" | "Smlouva" | "Výzva" | "Věcné břemeno"
  publishedAt: string
  validUntil?: string
  href?: string
}

export const UREDNI_DESKA: UredniDeskaDokument[] = [
  {
    id: "1",
    title: "Záměr pronájmu sokolovny – školní rok 2026/2027",
    type: "Záměr",
    publishedAt: "2026-05-05",
    validUntil: "2026-06-05",
  },
  {
    id: "2",
    title: "Oznámení záměru zřízení věcného břemene (přeložka přípojky)",
    type: "Věcné břemeno",
    publishedAt: "2026-04-30",
    validUntil: "2026-05-22",
  },
  {
    id: "3",
    title: "Veřejná vyhláška – Daň z nemovitých věcí 2026",
    type: "Vyhláška",
    publishedAt: "2026-04-27",
    validUntil: "2026-06-01",
  },
  {
    id: "4",
    title: "Porovnání položek výpočtu cen pro vodné a stočné 2026 (VaK MB)",
    type: "Oznámení",
    publishedAt: "2026-04-29",
    validUntil: "2026-06-30",
  },
  {
    id: "5",
    title: "Rozpočtové opatření č. 1/2026",
    type: "Rozpočet",
    publishedAt: "2026-03-19",
    validUntil: "2026-12-31",
  },
  {
    id: "6",
    title: "Schválený rozpočet Městyse Brodce pro rok 2026",
    type: "Rozpočet",
    publishedAt: "2025-12-23",
    validUntil: "2026-12-31",
  },
  {
    id: "7",
    title: "Nařízení – záměr zadat zpracování lesních hospodářských osnov",
    type: "Vyhláška",
    publishedAt: "2025-05-19",
    validUntil: "2026-08-31",
  },
  {
    id: "8",
    title: "Oznámení o změně ceny vodného a stočného (VaK MB)",
    type: "Oznámení",
    publishedAt: "2025-11-28",
    validUntil: "2026-12-31",
  },
]
