export type Settore = {
  number: string;
  title: string;
  slug: string;
  useCases: string[];
};

export const SETTORI: Settore[] = [
  {
    number: "01",
    title: "Manifattura & Produzione",
    slug: "ai-manifattura-produzione",
    useCases: [
      "Controllo qualit\u00E0 automatizzato - telecamere AI rilevano difetti in tempo reale",
      "Preventivazione tecnica automatizzata - AI genera preventivi dai disegni tecnici",
      "Customer service tecnico B2B - risponde a domande su specifiche",
    ],
  },
  {
    number: "02",
    title: "Distribuzione B2B & Grossisti",
    slug: "ai-distribuzione-b2b",
    useCases: [
      "Riassortimento automatico - monitora stock e auto-ordina",
      "Agente ordini omnicanale - telefono, WhatsApp, gestionale",
      "Gestione logistica consegne - risponde su disponibilit\u00E0, tempi di consegna",
    ],
  },
  {
    number: "03",
    title: "Retail, Fashion & Design",
    slug: "ai-retail-fashion",
    useCases: [
      "Customer service omnicanale - gestisce resi, ordini, WhatsApp, social",
      "Gestione campionario e catalogo - classificazione AI automatica",
      "Programma di loyalty dinamico - storico vendite e segmenti di mercato",
    ],
  },
  {
    number: "04",
    title: "Turismo & Ospitalit\u00E0",
    slug: "ai-turismo-ospitalita",
    useCases: [
      "Revenue management dinamico - prezzi in tempo reale basati su occupazione",
      "Concierge AI multilingue - assistente prenotazioni 24/7",
      "Gestione review e reputazione - monitora piattaforme, genera risposte",
    ],
  },
  {
    number: "05",
    title: "Logistica & Trasporti",
    slug: "ai-logistica-trasporti",
    useCases: [
      "Calcolo e ottimizzazione rotte - riduce km a vuoto",
      "Automazione documenti - driver, fotografia CMR/DDT, AI aggiorna",
      "Agente ordini inbound - gestisce il 50% di chiamate",
    ],
  },
  {
    number: "06",
    title: "Servizi Professionali",
    slug: "ai-servizi-professionali",
    useCases: [
      "Riconciliazione bancaria automatica",
      "Due diligence documentale - analizza documenti M&A e conformit\u00E0",
      "Prioritizzazione polizze - AI confronta prodotti e genera rapporto",
    ],
  },
  {
    number: "07",
    title: "Farmaceutica & Dispositivi Medici",
    slug: "ai-farmaceutica",
    useCases: [
      "Gestione scadenze e serializzazione",
      "Customer service tecnico - gestisce richieste su device",
      "Gestione ordini farmaci e ospedali - riconosce ordini da canali diversi",
    ],
  },
  {
    number: "08",
    title: "Food & Beverage",
    slug: "ai-food-beverage",
    useCases: [
      "Gestione ordini B2B e HORECA - AI legge email, PDF ed EDI",
      "Tracciabilit\u00E0 filiera - SFA+AI certifica fornitori",
      "Gestione ricette e schede tecniche - automazione su varianti, allergeni",
    ],
  },
  {
    number: "09",
    title: "Edilizia & Immobiliare",
    slug: "ai-edilizia-immobiliare",
    useCases: [
      "Gestione documentale cantieri - SAL, DDT e bolle",
      "Coordinamento subappaltatori - gestione documenti di sicurezza",
      "Due diligence commerciali - analisi di contenuti e valori",
    ],
  },
  {
    number: "10",
    title: "Sanit\u00E0 Privata",
    slug: "ai-sanita-privata",
    useCases: [
      "Front-office automatizzato - prenotazioni, invio reminder e riduce i no-show",
      "Gestione cartelle cliniche - AI estrae dati da referti",
      "Customer service pazienti 24/7 - risponde a domande amministrative",
    ],
  },
];
