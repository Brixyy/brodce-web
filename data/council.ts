import type { CouncilMember } from "@/types"

export const COUNCIL_MEMBERS: CouncilMember[] = [
  {
    id: "1",
    name: "Edita Nová",
    role: "Starostka",
    email: "starosta@brodce.cz",
    phone: "+420 326 312 225",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    isMayor: true,
  },
  {
    id: "2",
    name: "Petr Šelepa",
    role: "Místostarosta",
    email: "mistostarosta@brodce.cz",
    photo: "https://randomuser.me/api/portraits/men/42.jpg",
    isDeputy: true,
  },
  {
    id: "3",
    name: "Mgr. Petra Hrnčířová",
    role: "Zastupitelka",
    photo: "https://randomuser.me/api/portraits/women/25.jpg",
    committee: "financni",
    committeeRole: "predseda",
  },
  {
    id: "4",
    name: "Martin Hůlka",
    role: "Zastupitel",
    photo: "https://randomuser.me/api/portraits/men/15.jpg",
    committee: "financni",
    committeeRole: "clen",
  },
  {
    id: "5",
    name: "Jiří Stibrányi",
    role: "Zastupitel",
    photo: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: "6",
    name: "Marie Stříbrná",
    role: "Zastupitelka",
    photo: "https://randomuser.me/api/portraits/women/42.jpg",
    committee: "kontrolni",
    committeeRole: "clen",
  },
  {
    id: "7",
    name: "Petr Šulc",
    role: "Zastupitel",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
    committee: "kontrolni",
    committeeRole: "clen",
  },
  {
    id: "8",
    name: "Ing. Jaroslav Trojan",
    role: "Zastupitel",
    photo: "https://randomuser.me/api/portraits/men/68.jpg",
    committee: "kontrolni",
    committeeRole: "predseda",
  },
  {
    id: "9",
    name: "Miloslav Vydra",
    role: "Zastupitel",
    photo: "https://randomuser.me/api/portraits/men/77.jpg",
  },
]

export const FINANCIAL_COMMITTEE = [
  { name: "Mgr. Petra Hrnčířová", role: "předsedkyně" },
  { name: "Martin Hůlka", role: "člen" },
  { name: "Věra Písecká", role: "členka" },
]

export const CONTROL_COMMITTEE = [
  { name: "Ing. Jaroslav Trojan", role: "předseda" },
  { name: "Marie Stříbrná", role: "členka" },
  { name: "Petr Šulc", role: "člen" },
]
