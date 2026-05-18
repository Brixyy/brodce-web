import type { CouncilMember } from "@/types"

export const COUNCIL_MEMBERS: CouncilMember[] = [
  {
    id: "1",
    name: "Jana Veselá",
    role: "Starostka",
    email: "starosta@brodce.cloud",
    phone: "+420 326 000 101",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    isMayor: true,
  },
  {
    id: "2",
    name: "Tomáš Dvořák",
    role: "Místostarosta",
    email: "mistostarosta@brodce.cloud",
    photo: "https://randomuser.me/api/portraits/men/42.jpg",
    isDeputy: true,
  },
  {
    id: "3",
    name: "Mgr. Lenka Marková",
    role: "Zastupitelka",
    photo: "https://randomuser.me/api/portraits/women/25.jpg",
    committee: "financni",
    committeeRole: "predseda",
  },
  {
    id: "4",
    name: "Pavel Horák",
    role: "Zastupitel",
    photo: "https://randomuser.me/api/portraits/men/15.jpg",
    committee: "financni",
    committeeRole: "clen",
  },
  {
    id: "5",
    name: "Jiří Beneš",
    role: "Zastupitel",
    photo: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: "6",
    name: "Hana Kučerová",
    role: "Zastupitelka",
    photo: "https://randomuser.me/api/portraits/women/42.jpg",
    committee: "kontrolni",
    committeeRole: "clen",
  },
  {
    id: "7",
    name: "Martin Pokorný",
    role: "Zastupitel",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
    committee: "kontrolni",
    committeeRole: "clen",
  },
  {
    id: "8",
    name: "Ing. Josef Němec",
    role: "Zastupitel",
    photo: "https://randomuser.me/api/portraits/men/68.jpg",
    committee: "kontrolni",
    committeeRole: "predseda",
  },
  {
    id: "9",
    name: "Karel Procházka",
    role: "Zastupitel",
    photo: "https://randomuser.me/api/portraits/men/77.jpg",
  },
]

export const FINANCIAL_COMMITTEE = [
  { name: "Mgr. Lenka Marková", role: "předsedkyně" },
  { name: "Pavel Horák", role: "člen" },
  { name: "Eva Sedláčková", role: "členka" },
]

export const CONTROL_COMMITTEE = [
  { name: "Ing. Josef Němec", role: "předseda" },
  { name: "Hana Kučerová", role: "členka" },
  { name: "Martin Pokorný", role: "člen" },
]
