export type Incentivo = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  eligibility: string;
  amount: string;
  deadline: string;
  howToApply: string;
  category: "nazionale" | "regionale";
  tags: string[];
};

export const INCENTIVI: Incentivo[] = [
  {
    slug: "credito-imposta-4-0",
    title: "Credito d'Imposta Industria 4.0",
    shortTitle: "Industria 4.0",
    description:
      "Credito d'imposta del 20% sul costo di acquisizione di beni strumentali nuovi, materiali e immateriali, funzionali alla trasformazione tecnologica e digitale delle imprese.",
    eligibility:
      "Tutte le imprese residenti in Italia, indipendentemente dalla forma giuridica e dal settore economico. Escluse le imprese in stato di crisi.",
    amount: "20% su beni strumentali nuovi, fino a 2.000.000 \u20AC",
    deadline: "31 dicembre 2026",
    howToApply:
      "Compensazione tramite modello F24 in 3 quote annuali. Necessaria comunicazione preventiva al MIMIT e perizia tecnica asseverata per beni superiori a 300.000 \u20AC.",
    category: "nazionale",
    tags: ["beni strumentali", "credito d'imposta", "digitalizzazione"],
  },
  {
    slug: "transizione-5-0",
    title: "Piano Transizione 5.0",
    shortTitle: "Transizione 5.0",
    description:
      "Credito d'imposta fino al 45% per investimenti in beni strumentali che combinano trasformazione digitale e riduzione dei consumi energetici. Premiata la doppia transizione green+digital.",
    eligibility:
      "Imprese residenti in Italia che effettuano investimenti in strutture produttive sul territorio nazionale con riduzione certificata dei consumi energetici di almeno il 3% (struttura) o 5% (processo).",
    amount: "Fino al 45% per investimenti fino a 2.500.000 \u20AC",
    deadline: "31 dicembre 2026",
    howToApply:
      "Prenotazione tramite piattaforma GSE. Servono certificazione ex ante ed ex post dei risparmi energetici da parte di un valutatore indipendente.",
    category: "nazionale",
    tags: ["green", "efficienza energetica", "credito d'imposta"],
  },
  {
    slug: "pnrr-digitalizzazione",
    title: "Fondi PNRR Digitalizzazione PMI",
    shortTitle: "PNRR Digitale",
    description:
      "Contributi a fondo perduto fino al 50% per progetti di digitalizzazione delle PMI, con focus su cloud, cybersecurity, ERP e soluzioni AI. Parte della Missione 1 del Piano Nazionale di Ripresa e Resilienza.",
    eligibility:
      "Micro, piccole e medie imprese con sede operativa in Italia. Priorit\u00E0 a imprese del Mezzogiorno e a conduzione femminile.",
    amount: "Contributo a fondo perduto fino al 50%, massimo 40.000 \u20AC",
    deadline: "30 giugno 2026 (fino ad esaurimento fondi)",
    howToApply:
      "Domanda tramite portale Invitalia. Procedura a sportello: ordine cronologico di presentazione.",
    category: "nazionale",
    tags: ["fondo perduto", "PNRR", "digitalizzazione", "PMI"],
  },
  {
    slug: "nuova-sabatini",
    title: "Nuova Sabatini",
    shortTitle: "Nuova Sabatini",
    description:
      "Agevolazione a supporto degli investimenti delle PMI per acquisto o leasing di macchinari, attrezzature, impianti, beni strumentali e hardware/software. Contributo in conto interessi su finanziamenti bancari.",
    eligibility:
      "PMI di tutti i settori produttivi (inclusi agricoltura e pesca) che richiedono un finanziamento bancario per beni strumentali.",
    amount: "Contributo pari al 3,575% annuo (7,7% per investimenti 4.0 e green)",
    deadline: "Domande aperte fino ad esaurimento fondi - rifinanziata annualmente",
    howToApply:
      "Domanda tramite piattaforma MiMIT. Serve il finanziamento deliberato da una banca/intermediario finanziario convenzionato.",
    category: "nazionale",
    tags: ["finanziamento", "beni strumentali", "PMI", "leasing"],
  },
  {
    slug: "bando-innovazione-digitale",
    title: "Bando Innovazione Digitale",
    shortTitle: "Innovazione Digitale",
    description:
      "Contributo a fondo perduto fino a 100.000 \u20AC destinato a PMI che investono in progetti di innovazione digitale: AI, IoT, blockchain, big data e automazione dei processi aziendali.",
    eligibility:
      "PMI iscritte al Registro Imprese con almeno 2 bilanci depositati. Progetto di innovazione con impatto misurabile su produttivit\u00E0 o fatturato.",
    amount: "Contributo a fondo perduto fino a 100.000 \u20AC (copertura 50%)",
    deadline: "15 settembre 2026",
    howToApply:
      "Domanda tramite portale dedicato MIMIT. Valutazione a graduatoria con punteggi su innovativit\u00E0, impatto occupazionale e sostenibilit\u00E0.",
    category: "nazionale",
    tags: ["innovazione", "AI", "fondo perduto", "PMI"],
  },
  {
    slug: "voucher-innovation-manager",
    title: "Voucher Innovation Manager",
    shortTitle: "Innovation Manager",
    description:
      "Contributo a fondo perduto per l'acquisto di consulenze specialistiche in ambito trasformazione digitale, ammodernamento organizzativo e manageriale dell'impresa.",
    eligibility:
      "Micro e piccole imprese: voucher fino a 80.000 \u20AC (50%). Medie imprese: voucher fino a 25.000 \u20AC (30%). Reti di imprese: fino a 80.000 \u20AC.",
    amount: "Fino a 80.000 \u20AC per consulenza specializzata",
    deadline: "Prossima finestra: marzo 2026",
    howToApply:
      "Domanda tramite piattaforma MIMIT in finestre temporali predefinite. L'innovation manager deve essere iscritto all'albo MIMIT o essere una societ\u00E0 accreditata.",
    category: "nazionale",
    tags: ["consulenza", "innovation manager", "voucher", "PMI"],
  },
  {
    slug: "fondo-garanzia-pmi",
    title: "Fondo di Garanzia per le PMI",
    shortTitle: "Fondo Garanzia PMI",
    description:
      "Garanzia pubblica sui finanziamenti bancari alle PMI, che copre fino all'80% del credito erogato. Non \u00E8 un contributo diretto ma facilita l'accesso al credito eliminando la necessit\u00E0 di garanzie reali.",
    eligibility:
      "Tutte le PMI e i professionisti iscritti agli ordini. Valutazione automatica del merito creditizio tramite modello di scoring interno.",
    amount: "Garanzia statale fino all'80% del finanziamento (massimo 5.000.000 \u20AC)",
    deadline: "Sempre aperto - operativo in via continuativa",
    howToApply:
      "La richiesta viene presentata dalla banca/confidi per conto dell'impresa. Tempi di risposta: 5-10 giorni lavorativi.",
    category: "nazionale",
    tags: ["garanzia", "credito", "finanziamento", "banca"],
  },
  {
    slug: "patent-box",
    title: "Patent Box",
    shortTitle: "Patent Box",
    description:
      "Regime opzionale di detassazione dei redditi derivanti dall'utilizzo di beni immateriali: brevetti, software protetto da copyright, disegni e modelli. Super-deduzione del 110% dei costi di R&S.",
    eligibility:
      "Tutti i soggetti titolari di reddito d'impresa che svolgono attivit\u00E0 di R&S connesse allo sviluppo, mantenimento o accrescimento di beni immateriali qualificati.",
    amount: "Super-deduzione del 110% dei costi R&S su beni immateriali",
    deadline: "Regime permanente - opzione in dichiarazione dei redditi",
    howToApply:
      "Opzione esercitata in dichiarazione dei redditi. Necessaria documentazione idonea a dimostrare il nexus tra costi R&S e beni immateriali (penalty protection).",
    category: "nazionale",
    tags: ["brevetti", "R&S", "detassazione", "software"],
  },
  {
    slug: "credito-formazione-4-0",
    title: "Credito d'Imposta Formazione 4.0",
    shortTitle: "Formazione 4.0",
    description:
      "Credito d'imposta fino al 70% delle spese per la formazione del personale dipendente nelle tecnologie abilitanti del Piano Industria 4.0: AI, big data, cybersecurity, IoT, cloud, integrazione digitale.",
    eligibility:
      "Tutte le imprese residenti in Italia. Piccole imprese: 70%. Medie imprese: 50%. Grandi imprese: 30%. Condizionato alla certificazione delle competenze.",
    amount: "Fino al 70% dei costi formativi (massimo 300.000 \u20AC/anno)",
    deadline: "31 dicembre 2026",
    howToApply:
      "Compensazione tramite F24 a partire dal periodo d'imposta successivo. Serve certificazione delle competenze acquisite e relazione finale delle attivit\u00E0 formative.",
    category: "nazionale",
    tags: ["formazione", "competenze", "credito d'imposta", "4.0"],
  },
  {
    slug: "smart-factory",
    title: "Smart & Start Italia",
    shortTitle: "Smart & Start",
    description:
      "Finanziamento agevolato a tasso zero per startup innovative che sviluppano prodotti, servizi o soluzioni nell'ambito dell'economia digitale, AI, industria 4.0 e transizione ecologica.",
    eligibility:
      "Startup innovative iscritte alla sezione speciale del Registro Imprese, costituite da non pi\u00F9 di 60 mesi, con sede in Italia.",
    amount: "Finanziamento agevolato fino a 1.500.000 \u20AC a tasso zero (80% delle spese ammissibili, 90% per startup del Mezzogiorno o a prevalenza femminile/giovanile)",
    deadline: "Sempre aperto - procedura a sportello",
    howToApply:
      "Domanda online tramite piattaforma Invitalia. Business plan dettagliato e documentazione tecnico-finanziaria. Valutazione entro 60 giorni.",
    category: "nazionale",
    tags: ["startup", "finanziamento agevolato", "tasso zero", "innovazione"],
  },
];

export const REGIONI: { slug: string; name: string; incentivi: string[] }[] = [
  {
    slug: "lombardia",
    name: "Lombardia",
    incentivi: [
      "Bando AI Hub - fino a 200.000 \u20AC per progetti di intelligenza artificiale nelle PMI lombarde",
      "Linea Sviluppo Aziendale - finanziamento agevolato fino a 1.500.000 \u20AC per investimenti produttivi",
      "Voucher Digitale I4.0 - contributo fino a 10.000 \u20AC per servizi di consulenza e formazione digitale",
      "Al Via Impresa - microcredito e tutoraggio per nuove imprese e startup innovative",
    ],
  },
  {
    slug: "veneto",
    name: "Veneto",
    incentivi: [
      "POR FESR Veneto Azione Digitale - contributo fino al 40% per innovazione e digitalizzazione PMI",
      "Bando Ricerca e Sviluppo - fino a 300.000 \u20AC per progetti collaborativi impresa-universit\u00E0",
      "Fondo Rotativo Veneto Sviluppo - finanziamento a tasso agevolato per investimenti aziendali",
    ],
  },
  {
    slug: "emilia-romagna",
    name: "Emilia-Romagna",
    incentivi: [
      "Bando Data Valley - fino a 150.000 \u20AC per progetti di big data e AI nel tessuto manifatturiero",
      "Contributo Innovazione PMI - fondo perduto fino al 50% per digitalizzazione processi produttivi",
      "Rete Alta Tecnologia - voucher fino a 20.000 \u20AC per accesso ai laboratori di ricerca regionali",
      "Fondo Starter - finanziamento agevolato per startup innovative emiliano-romagnole",
    ],
  },
  {
    slug: "piemonte",
    name: "Piemonte",
    incentivi: [
      "Polo di Innovazione AI - contributo fino a 250.000 \u20AC per progetti collaborativi sull'AI",
      "Bando IR2 Piemonte - fondo perduto fino al 60% per investimenti in ricerca industriale",
      "Voucher Digitalizzazione PMI - fino a 15.000 \u20AC per consulenza e strumenti digitali",
    ],
  },
  {
    slug: "toscana",
    name: "Toscana",
    incentivi: [
      "Bando Artigianato Digitale - contributo fino a 50.000 \u20AC per digitalizzazione imprese artigiane",
      "POR FESR Toscana Innovazione - fino al 50% su progetti di innovazione tecnologica",
      "Fondo Futuro - finanziamento agevolato per investimenti in transizione digitale ed ecologica",
    ],
  },
  {
    slug: "lazio",
    name: "Lazio",
    incentivi: [
      "Lazio Innova Digital - contributo fino a 80.000 \u20AC per progetti di trasformazione digitale",
      "Pre-Seed e Seed Capital - fino a 120.000 \u20AC per startup tecnologiche del Lazio",
      "Voucher Internazionalizzazione - fino a 10.000 \u20AC per PMI che esportano con strumenti digitali",
      "Bando Impresa Sicura 4.0 - contributo per investimenti in cybersecurity e AI",
    ],
  },
  {
    slug: "campania",
    name: "Campania",
    incentivi: [
      "Campania Startup - fino a 200.000 \u20AC per startup innovative ad alto contenuto tecnologico",
      "POR FESR Campania Impresa Digitale - contributo fino al 60% per digitalizzazione PMI",
      "Bando Manifattura 4.0 - fondo perduto per automazione e robotica nelle imprese campane",
    ],
  },
  {
    slug: "puglia",
    name: "Puglia",
    incentivi: [
      "TecnoNidi Puglia - fino a 200.000 \u20AC (fondo perduto + prestito) per startup tecnologiche",
      "Bando Innova.re - contributo fino al 80% per progetti di innovazione nelle PMI pugliesi",
      "PIN Pugliesi Innovativi - fino a 30.000 \u20AC per giovani imprenditori con progetti digitali",
    ],
  },
  {
    slug: "sicilia",
    name: "Sicilia",
    incentivi: [
      "PO FESR Sicilia Agenda Digitale - contributo fino al 70% per digitalizzazione PMI siciliane",
      "Bando Nuove Imprese - fondo perduto fino a 50.000 \u20AC per avvio di attivit\u00E0 innovative",
      "Voucher Innovazione Sicilia - fino a 15.000 \u20AC per consulenza tecnologica e brevetti",
    ],
  },
  {
    slug: "sardegna",
    name: "Sardegna",
    incentivi: [
      "Sardegna Ricerche - contributo fino a 100.000 \u20AC per progetti di R&S e trasferimento tecnologico",
      "Bando Impresa Digitale Sardegna - fondo perduto fino al 50% per digitalizzazione PMI",
      "Fondo Microcredito FSE - finanziamento fino a 25.000 \u20AC per microimprese e professionisti",
      "Cluster Top Down - progetti collaborativi impresa-ricerca su AI e tecnologie avanzate",
    ],
  },
];
