export const NAV_ITEMS = [
  { label: "Chi Siamo", href: "/chi-siamo" },
  {
    label: "Cosa Facciamo",
    children: [
      { label: "Per le Aziende", href: "/aziende" },
      { label: "Per i Fondi PE", href: "/fondi" },
    ],
  },
  { label: "Il Codice del Doge", href: "/metodo" },
  { label: "Casi d'Uso", href: "/casi-duso" },
  { label: "Lavora con Noi", href: "/lavora-con-noi" },
] as const;

export const FOOTER_LINKS = {
  navigation: [
    { label: "Chi Siamo", href: "/chi-siamo" },
    { label: "Per le Aziende", href: "/aziende" },
    { label: "Per i Fondi PE", href: "/fondi" },
    { label: "Il Codice del Doge", href: "/metodo" },
    { label: "Casi d'Uso", href: "/casi-duso" },
    { label: "Lavora con Noi", href: "/lavora-con-noi" },
    { label: "Contatti", href: "/contatti" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
} as const;

export const CONTACT_INFO = {
  email: "dogedivenezia.ai@gmail.com",
  phone: "+39 345 9656145",
  address: "Via Giardino Generale, 6\n31017, Pieve del Grappa (TV)",
  piva: "P.IVA IT04596950248",
} as const;

export const TEAM_MEMBERS = [
  {
    name: "Alessandro Bonetto",
    role: "AI Strategy & System Integration",
    flags: "\u{1F1EE}\u{1F1F9} \u{1F1E9}\u{1F1EA} \u{1F1EB}\u{1F1F7} \u{1F1EC}\u{1F1E7}",
    image: "/team/alessandro.webp",
    bio: "Ex investitore in fondi VC europei, focus su startup AI. Traduce la frontiera tecnologica in sistemi aziendali concreti.",
  },
  {
    name: "Mike Cecconello",
    role: "Automation & AI Engineering",
    flags: "\u{1F1EE}\u{1F1F9} \u{1F1EF}\u{1F1F5} \u{1F1EE}\u{1F1F1} \u{1F1EB}\u{1F1F7}",
    image: "/team/mike.webp",
    bio: "Progetta e sviluppa sistemi automatizzati e agenti AI operativi. Background in engineering e prodotto in contesti internazionali.",
  },
  {
    name: "Gianmaria Dalboni",
    role: "Product Manager",
    flags: "\u{1F1EE}\u{1F1F9} \u{1F1E8}\u{1F1ED}",
    image: "/team/gianmaria.webp",
    bio: "Designer con esperienza in UX/UI per prodotti complessi. Focus sull'adozione reale — non solo sul funzionamento tecnico.",
  },
  {
    name: "Marcello Gamberale",
    role: "AI Transformation & Solution Architect",
    flags: "\u{1F1EE}\u{1F1F9} \u{1F1EC}\u{1F1E7} \u{1F1EE}\u{1F1F9}",
    image: "/team/marcello.webp",
    bio: "Founder seriale di startup tecnologiche (exit su eBay). Traduce obiettivi di business in sistemi implementabili.",
  },
] as const;
