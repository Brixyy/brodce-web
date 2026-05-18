export type StaffMember = {
  id: string
  name: string
  role: string
  agenda: string
  phone?: string
  email?: string
}

export const OFFICE_STAFF: StaffMember[] = [
  {
    id: "1",
    name: "Jana Veselá",
    role: "Starostka",
    agenda: "Vedení úřadu, reprezentace obce, investiční akce",
    phone: "+420 326 000 101",
    email: "starosta@brodce.cloud",
  },
  {
    id: "2",
    name: "Tomáš Dvořák",
    role: "Místostarosta",
    agenda: "Zastupování starostky, technická správa obce",
    email: "mistostarosta@brodce.cloud",
  },
  {
    id: "3",
    name: "Bc. Petra Nováková",
    role: "Referentka",
    agenda: "Matrika, Czech POINT, podatelna, evidence obyvatel",
    phone: "+420 326 000 100",
    email: "podatelna@brodce.cloud",
  },
  {
    id: "4",
    name: "Marie Krejčí",
    role: "Referentka",
    agenda: "Zastupující matrikářka, podatelna, pokladna",
    phone: "+420 326 000 100",
    email: "podatelna@brodce.cloud",
  },
]
