export type Settore = {
  number: string;
  title: string;
  useCases: string[];
};

export const SETTORI: Settore[] = [
  {
    number: "01",
    title: "Manifattura",
    useCases: [
      "Controllo qualit\u00E0 automatizzato \u2014 telecamere AI rilevano difetti in tempo reale",
      "Preventivazione tecnica automatizzata \u2014 AI genera preventivi dai disegni tecnici",
      "Customer service tecnico B2B \u2014 risponde a domande su specifiche",
    ],
  },
  {
    number: "02",
    title: "Distribuzione B2B & Grossisti",
    useCases: [
      "Riassortimento automatico \u2014 monitora stock e auto-ordina",
      "Agente ordini omnicanale \u2014 telefono, WhatsApp, gestionale",
      "Gestione logistica consegne \u2014 risponde su disponibilit\u00E0, tempi di consegna",
    ],
  },
  {
    number: "03",
    title: "Retail, Fashion & Design",
    useCases: [
      "Customer service omnicanale \u2014 gestisce resi, ordini, WhatsApp, social",
      "Gestione campionario e catalogo \u2014 classificazione AI automatica",
      "Programma di loyalty dinamico \u2014 storico vendite e segmenti di mercato",
    ],
  },
  {
    number: "04",
    title: "Turismo & Ospitalit\u00E0",
    useCases: [
      "Revenue management dinamico \u2014 prezzi in tempo reale basati su occupazione",
      "Concierge AI multilingue \u2014 assistente prenotazioni 24/7",
      "Gestione review e reputazione \u2014 monitora piattaforme, genera risposte",
    ],
  },
  {
    number: "05",
    title: "Logistica & Trasporti",
    useCases: [
      "Calcolo e ottimizzazione rotte \u2014 riduce km a vuoto",
      "Automazione documenti \u2014 driver, fotografia CMR/DDT, AI aggiorna",
      "Agente ordini inbound \u2014 gestisce il 50% di chiamate",
    ],
  },
  {
    number: "06",
    title: "Servizi Professionali",
    useCases: [
      "Riconciliazione bancaria automatica",
      "Due diligence documentale \u2014 analizza documenti M&A e conformit\u00E0",
      "Prioritizzazione polizze \u2014 AI confronta prodotti e genera rapporto",
    ],
  },
  {
    number: "07",
    title: "Farmaceutica & Dispositivi Medici",
    useCases: [
      "Gestione scadenze e serializzazione",
      "Customer service tecnico \u2014 gestisce richieste su device",
      "Gestione ordini farmaci e ospedali \u2014 riconosce ordini da canali diversi",
    ],
  },
  {
    number: "08",
    title: "Food & Beverage",
    useCases: [
      "Gestione ordini B2B e HORECA \u2014 AI legge email, PDF ed EDI",
      "Tracciabilit\u00E0 filiera \u2014 SFA+AI certifica fornitori",
      "Gestione ricette e schede tecniche \u2014 automazione su varianti, allergeni",
    ],
  },
  {
    number: "09",
    title: "Edilizia & Immobiliare",
    useCases: [
      "Gestione documentale cantieri \u2014 SAL, DDT e bolle",
      "Coordinamento subappaltatori \u2014 gestione documenti di sicurezza",
      "Due diligence commerciali \u2014 analisi di contenuti e valori",
    ],
  },
  {
    number: "10",
    title: "Sanit\u00E0 Privata",
    useCases: [
      "Front-office automatizzato \u2014 prenotazioni, invio reminder e riduce i no-show",
      "Gestione cartelle cliniche \u2014 AI estrae dati da referti",
      "Customer service pazienti 24/7 \u2014 risponde a domande amministrative",
    ],
  },
];
