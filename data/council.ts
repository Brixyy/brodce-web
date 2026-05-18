import type { CouncilMember } from "@/types"

export const COUNCIL_MEMBERS: CouncilMember[] = [
  {
    id: "1",
    name: "Jana Veselá",
    role: "Starostka",
    email: "starosta@brodce.cloud",
    phone: "+420 326 000 101",
    isMayor: true,
  },
  {
    id: "2",
    name: "Tomáš Dvořák",
    role: "Místostarosta",
    email: "mistostarosta@brodce.cloud",
    isDeputy: true,
  },
  {
    id: "3",
    name: "Mgr. Lenka Marková",
    role: "Zastupitelka",
    committee: "financni",
    committeeRole: "predseda",
  },
  {
    id: "4",
    name: "Pavel Horák",
    role: "Zastupitel",
    committee: "financni",
    committeeRole: "clen",
  },
  {
    id: "5",
    name: "Jiří Beneš",
    role: "Zastupitel",
  },
  {
    id: "6",
    name: "Hana Kučerová",
    role: "Zastupitelka",
    committee: "kontrolni",
    committeeRole: "clen",
  },
  {
    id: "7",
    name: "Martin Pokorný",
    role: "Zastupitel",
    committee: "kontrolni",
    committeeRole: "clen",
  },
  {
    id: "8",
    name: "Ing. Josef Němec",
    role: "Zastupitel",
    committee: "kontrolni",
    committeeRole: "predseda",
  },
  {
    id: "9",
    name: "Karel Procházka",
    role: "Zastupitel",
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
