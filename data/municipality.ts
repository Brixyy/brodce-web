export const MUNICIPALITY = {
  name: "Brodce",
  type: "Městys",
  foundedYear: 1130,
  population: 1045,
  area: 10.98,
  distanceFromMB: 12,
  region: "Středočeský kraj",
  district: "Mladá Boleslav",
  postCode: "294 73",
  address: "Dobrovická 34",
  addressCp: "Brodce č.p. 48",
  phone: "+420 326 312 204",
  email: "podatelna@brodce.cz",
  dataBox: "2zvbp7e",
  ico: "00237078",
  mayor: {
    name: "Edita Nová",
    title: "Starostka",
    phone: "+420 326 312 225",
    email: "starosta@brodce.cz",
  },
  deputy: {
    name: "Petr Šelepa",
    title: "Místostarosta",
    email: "mistostarosta@brodce.cz",
  },
  officeHours: [
    { day: "Pondělí", hours: "08:00 – 17:00", note: "přestávka 11:45–12:45", isPublic: true },
    { day: "Úterý",   hours: "07:30 – 15:30", note: "přestávka 11:45–12:45", isPublic: false },
    { day: "Středa",  hours: "08:00 – 17:00", note: "přestávka 11:45–12:45", isPublic: true },
    { day: "Čtvrtek", hours: "07:30 – 15:30", note: "přestávka 11:45–12:45", isPublic: false },
    { day: "Pátek",   hours: "07:30 – 13:30", note: "přestávka 11:45–12:45", isPublic: true },
  ],
  coordinates: { lat: 50.33116100829444, lng: 14.868220086547415 },
  heraldry: {
    description: "Modrý štít se stříbrnou hradební zdí a věží",
    year: 1575,
  },
  river: "Jizera",
  organizations: ["TJ Sokol Brodce", "Klub vojenské historie Brodce", "Knihovna Brodce"],
  schools: ["Masarykova základní škola Brodce", "Mateřská škola Brodce"],
  history: `Brodce jsou jednou z nejstarších obcí Pojizeří. První písemná zmínka pochází z roku 1130, kdy jsou zmiňovány v listinách Kapituly Vyšehradské. Území bylo osídleno již mnohem dříve — archeologické nálezy dokládají přítomnost únětické kultury (2000–1700 př. n. l.) i stopy keltského osídlení.

Jméno obce se odvozuje od brodu přes řeku Jizeru. Brodce získaly trhová práva kolem roku 1451 a v roce 1575 obdržely erb — modrý štít se stříbrnou hradební zdí a věží. V roce 1871 byla v obci zřízena cukrovarská výroba, která fungovala až do roku 1993.

V roce 2008 byl Brodcím obnoven titul městys. Dnes jsou Brodce živou komunitou s aktivními spolky (TJ Sokol, Klub vojenské historie, Knihovna), moderní základní školou a výbornou dostupností do Mladé Boleslavi i Prahy.`,
} as const
