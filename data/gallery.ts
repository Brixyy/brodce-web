import type { GalleryImage } from "@/types"

const VISMO = (id: number, datum?: string) =>
  datum
    ? `https://www.brodce.cz/assets/Image.ashx?id_org=1268&id_obrazky=${id}&datum=${datum}`
    : `https://www.brodce.cz/assets/Image.ashx?id_org=1268&id_obrazky=${id}&sizeForce=0`

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "1",
    src: VISMO(27787, "6%2F13%2F2022+11%3A38%3A24+AM"),
    alt: "Den městyse Brodce – slavnosti na návsi",
    category: "Akce",
    width: 1200,
    height: 800,
  },
  {
    id: "2",
    src: VISMO(22939),
    alt: "Sokolovna Brodce",
    category: "Obec",
    width: 1200,
    height: 800,
  },
  {
    id: "3",
    src: VISMO(37990),
    alt: "Pálení čarodějnic 2026 u Jizery",
    category: "Akce",
    width: 1100,
    height: 800,
  },
  {
    id: "4",
    src: VISMO(22935),
    alt: "Budova úřadu městyse Brodce",
    category: "Obec",
    width: 1200,
    height: 900,
  },
  {
    id: "5",
    src: VISMO(14315),
    alt: "Základní a mateřská škola Brodce",
    category: "Obec",
    width: 900,
    height: 700,
  },
  {
    id: "6",
    src: VISMO(38044),
    alt: "Brodce – jaro 2026",
    category: "Příroda",
    width: 1200,
    height: 800,
  },
  {
    id: "7",
    src: VISMO(37661),
    alt: "Akce v Brodcích – podzim 2025",
    category: "Akce",
    width: 900,
    height: 1100,
  },
  {
    id: "8",
    src: VISMO(37570),
    alt: "Brodce – podzim 2025",
    category: "Příroda",
    width: 1300,
    height: 750,
  },
  {
    id: "9",
    src: VISMO(37316),
    alt: "Brodce – kulturní akce",
    category: "Akce",
    width: 1200,
    height: 800,
  },
  {
    id: "10",
    src: VISMO(37300),
    alt: "Brodce – akce 2025",
    category: "Akce",
    width: 900,
    height: 900,
  },
  {
    id: "11",
    src: VISMO(36690),
    alt: "Brodce – léto 2025",
    category: "Příroda",
    width: 1100,
    height: 800,
  },
  {
    id: "12",
    src: VISMO(36342),
    alt: "Pohled na Brodce",
    category: "Obec",
    width: 1200,
    height: 780,
  },
]
