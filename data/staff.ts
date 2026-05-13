export type StaffMember = {
  id: string
  name: string
  role: string
  agenda: string
  phone?: string
  email?: string
  photo?: string
}

export const OFFICE_STAFF: StaffMember[] = [
  {
    id: "1",
    name: "Edita Nová",
    role: "Starostka",
    agenda: "Vedení úřadu, reprezentace obce, investiční akce",
    phone: "+420 326 312 225",
    email: "starosta@brodce.cz",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: "2",
    name: "Petr Šelepa",
    role: "Místostarosta",
    agenda: "Zastupování starostky, technická správa obce",
    email: "mistostarosta@brodce.cz",
    photo: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    id: "3",
    name: "Ing. Lucie Stibrányi Nová",
    role: "Referentka",
    agenda: "Matrika, Czech POINT, podatelna, evidence obyvatel",
    phone: "+420 326 312 204",
    email: "podatelna@brodce.cz",
    photo: "https://randomuser.me/api/portraits/women/31.jpg",
  },
  {
    id: "4",
    name: "Ilona Kolpeková",
    role: "Referentka",
    agenda: "Zastupující matrikářka, podatelna, pokladna",
    phone: "+420 326 312 204",
    email: "podatelna@brodce.cz",
    photo: "https://randomuser.me/api/portraits/women/47.jpg",
  },
]
