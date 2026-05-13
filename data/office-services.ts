import type { OfficeService } from "@/types"

export const OFFICE_SERVICES: OfficeService[] = [
  {
    id: "1",
    title: "Zaplatit poplatek",
    description: "Poplatek za odpady, ze psů a za veřejné prostranství online",
    icon: "CreditCard",
    linkLabel: "Platit online",
    linkHref: "#",
  },
  {
    id: "2",
    title: "Podat žádost",
    description: "Elektronické formuláře a žádosti – vše vyřídíte z domova",
    icon: "FileText",
    linkLabel: "Formuláře",
    linkHref: "#",
  },
  {
    id: "3",
    title: "Czech POINT",
    description: "Výpisy z rejstříků a ověření dokumentů — po a st",
    icon: "Landmark",
    linkLabel: "Více info",
    linkHref: "#",
  },
  {
    id: "4",
    title: "Hlásit závadu",
    description: "Nahlaste závadu v obci – výtluky, veřejné osvětlení, odpady",
    icon: "AlertTriangle",
    linkLabel: "Nahlásit",
    linkHref: "#",
  },
  {
    id: "5",
    title: "Úřední hodiny",
    description: "Po, St 8–17 hod · Pá 8–11 hod · Pokladna jen hotovost",
    icon: "Clock",
    linkLabel: "Kontakt",
    linkHref: "#kontakt",
  },
  {
    id: "6",
    title: "Úřední deska",
    description: "Veřejné vyhlášky, záměry, rozpočty a úřední dokumenty",
    icon: "BookOpen",
    linkLabel: "Zobrazit",
    linkHref: "#",
  },
]
