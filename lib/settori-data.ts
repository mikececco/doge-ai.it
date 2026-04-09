export type SubSettore = {
  number: string;
  title: string;
  slug: string;
  description: string;
};

export type Settore = {
  number: string;
  title: string;
  slug: string;
  useCases: string[];
  subSectors: SubSettore[];
};

export const SETTORI: Settore[] = [
  {
    number: "01",
    title: "Manifattura & Produzione",
    slug: "ai-manifattura-produzione",
    useCases: [
      "Controllo qualit\u00e0 automatizzato - telecamere AI rilevano difetti in tempo reale",
      "Preventivazione tecnica automatizzata - AI genera preventivi dai disegni tecnici",
      "Customer service tecnico B2B - risponde a domande su specifiche",
    ],
    subSectors: [
      { number: "01a", title: "Controllo Qualit\u00e0 con Visione Artificiale", slug: "ai-controllo-qualita-visione-artificiale", description: "Telecamere AI e reti neurali per il controllo qualit\u00e0 al 100% sulla linea di produzione" },
      { number: "01b", title: "Manutenzione Predittiva Macchinari", slug: "ai-manutenzione-predittiva-macchinari", description: "Sensori IoT e AI prevengono guasti e fermi macchina non pianificati" },
      { number: "01c", title: "Stampaggio Plastica & Iniezione", slug: "ai-stampaggio-plastica-iniezione", description: "Ottimizzazione parametri di processo e riduzione scarti nello stampaggio" },
      { number: "01d", title: "Tessile & Confezionamento", slug: "ai-tessile-confezionamento", description: "AI per il Made in Italy: qualit\u00e0 tessuti, taglio ottimizzato e gestione ordini" },
      { number: "01e", title: "Metalmeccanica & Lavorazioni CNC", slug: "ai-metalmeccanica-cnc", description: "Programmazione CNC assistita da AI e controllo dimensionale automatico" },
    ],
  },
  {
    number: "02",
    title: "Distribuzione B2B & Grossisti",
    slug: "ai-distribuzione-b2b",
    useCases: [
      "Riassortimento automatico - monitora stock e auto-ordina",
      "Agente ordini omnicanale - telefono, WhatsApp, gestionale",
      "Gestione logistica consegne - risponde su disponibilit\u00e0, tempi di consegna",
    ],
    subSectors: [
      { number: "02a", title: "Gestione Magazzino & WMS Intelligente", slug: "ai-gestione-magazzino-wms", description: "AI ottimizza lo stoccaggio, il picking e la rotazione scorte in magazzino" },
      { number: "02b", title: "Grossisti Alimentari HORECA", slug: "ai-grossista-alimentare-horeca", description: "Previsione domanda e riassortimento automatico per il canale HORECA" },
      { number: "02c", title: "Distributori Ricambi Auto & Aftermarket", slug: "ai-distributore-ricambi-auto", description: "Identificazione ricambi da foto e gestione catalogo con AI" },
      { number: "02d", title: "Ferramenta & Materiali Edili", slug: "ai-ferramenta-materiali-edili", description: "Gestione scorte stagionali e preventivazione automatica per cantieri" },
      { number: "02e", title: "Distribuzione Farmaceutica B2B", slug: "ai-distribuzione-farmaceutica-b2b", description: "Tracciabilit\u00e0 lotti, gestione scadenze e ordini ospedalieri automatizzati" },
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
    subSectors: [
      { number: "03a", title: "Negozi di Abbigliamento & Moda", slug: "ai-negozio-abbigliamento-moda", description: "Previsione trend, gestione taglie e personalizzazione dell'esperienza in negozio" },
      { number: "03b", title: "E-commerce & Personalizzazione AI", slug: "ai-ecommerce-personalizzazione", description: "Raccomandazioni prodotto, pricing dinamico e customer journey personalizzato" },
      { number: "03c", title: "Centri Ottici & Optometria", slug: "ai-centro-ottico-optometria", description: "Gestione prescrizioni, try-on virtuale e follow-up automatizzato pazienti" },
      { number: "03d", title: "Gioiellerie & Oreficeria", slug: "ai-gioielleria-oreficeria", description: "Valutazione pietre con AI, gestione inventario prezioso e CRM clientela" },
      { number: "03e", title: "Arredamento, Showroom & Interior Design", slug: "ai-arredamento-showroom-design", description: "Rendering AI, configuratore prodotto e gestione progetti d'arredo" },
    ],
  },
  {
    number: "04",
    title: "Turismo & Ospitalit\u00e0",
    slug: "ai-turismo-ospitalita",
    useCases: [
      "Revenue management dinamico - prezzi in tempo reale basati su occupazione",
      "Concierge AI multilingue - assistente prenotazioni 24/7",
      "Gestione review e reputazione - monitora piattaforme, genera risposte",
    ],
    subSectors: [
      { number: "04a", title: "Hotel & Revenue Management Dinamico", slug: "ai-hotel-revenue-management", description: "Pricing dinamico, overbooking intelligente e massimizzazione RevPAR" },
      { number: "04b", title: "Agriturismi & B&B", slug: "ai-agriturismo-bed-breakfast", description: "Automazione prenotazioni, gestione canali OTA e comunicazione ospiti" },
      { number: "04c", title: "Ristoranti & Gestione Prenotazioni", slug: "ai-ristorante-gestione-prenotazioni", description: "Prenotazioni AI, riduzione no-show e ottimizzazione tavoli e menu" },
      { number: "04d", title: "Tour Operator & Agenzie Viaggio", slug: "ai-tour-operator-agenzia-viaggi", description: "Pacchetti personalizzati con AI, gestione fornitori e pricing dinamico" },
      { number: "04e", title: "Stabilimenti Balneari & Camping", slug: "ai-stabilimento-balneare-camping", description: "Prenotazione ombrelloni AI, gestione stagionale e servizi ospiti digitali" },
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
    subSectors: [
      { number: "05a", title: "Ottimizzazione Rotte & Gestione Flotta", slug: "ai-ottimizzazione-rotte-flotta", description: "Algoritmi AI per rotte ottimali, riduzione km a vuoto e fleet management" },
      { number: "05b", title: "Consegna Ultimo Miglio", slug: "ai-consegna-ultimo-miglio", description: "Routing dinamico, tracking in tempo reale e gestione tentativi di consegna" },
      { number: "05c", title: "Spedizionieri & Documentazione Doganale", slug: "ai-spedizioniere-documentazione-doganale", description: "Compilazione automatica documenti doganali e classificazione merci" },
      { number: "05d", title: "Magazzini Automatici & Picking", slug: "ai-magazzino-automatico-picking", description: "Ottimizzazione percorsi di picking, slotting AI e automazione magazzino" },
      { number: "05e", title: "Logistica Alimentare & Catena del Freddo", slug: "ai-logistica-alimentare-catena-freddo", description: "Monitoraggio temperatura IoT+AI, HACCP automatizzato e tracciabilit\u00e0" },
    ],
  },
  {
    number: "06",
    title: "Servizi Professionali",
    slug: "ai-servizi-professionali",
    useCases: [
      "Riconciliazione bancaria automatica",
      "Due diligence documentale - analizza documenti M&A e conformit\u00e0",
      "Prioritizzazione polizze - AI confronta prodotti e genera rapporto",
    ],
    subSectors: [
      { number: "06a", title: "Studi Legali & Avvocati", slug: "ai-studio-legale-avvocati", description: "Ricerca giurisprudenziale AI, analisi contratti e gestione scadenze legali" },
      { number: "06b", title: "Commercialisti & Studi Tributari", slug: "ai-commercialista-studio-tributario", description: "Riconciliazione automatica, dichiarazioni fiscali e analisi bilanci con AI" },
      { number: "06c", title: "Broker Assicurativi & Gestione Polizze", slug: "ai-broker-assicurativo-polizze", description: "Confronto polizze automatico, gestione sinistri e rinnovi intelligenti" },
      { number: "06d", title: "Consulenti del Lavoro & Paghe", slug: "ai-consulente-lavoro-paghe", description: "Elaborazione cedolini automatizzata, compliance normativa e gestione presenze" },
      { number: "06e", title: "Studi di Architettura & Ingegneria", slug: "ai-studio-architettura-ingegneria", description: "Generazione computi metrici, analisi strutturale AI e gestione progetto" },
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
    subSectors: [
      { number: "07a", title: "Farmacia Ospedaliera & Gestione Farmaci", slug: "ai-farmacia-ospedaliera-gestione", description: "Gestione formulario, interazioni farmacologiche e distribuzione unitaria AI" },
      { number: "07b", title: "Produzione Dispositivi Medici", slug: "ai-produzione-dispositivi-medici", description: "Controllo qualit\u00e0 certificato, tracciabilit\u00e0 UDI e validazione processi" },
      { number: "07c", title: "Parafarmacie & Erboristerie", slug: "ai-parafarmacia-erboristeria", description: "Gestione assortimento, consulenza prodotto AI e fidelizzazione clienti" },
      { number: "07d", title: "Laboratori di Analisi Privati", slug: "ai-laboratorio-analisi-privato", description: "Refertazione assistita AI, gestione prenotazioni e integrazione LIS" },
      { number: "07e", title: "Farmacovigilanza & Compliance Regolatoria", slug: "ai-farmacovigilanza-compliance", description: "Monitoraggio eventi avversi, segnalazioni AIFA automatiche e audit trail" },
    ],
  },
  {
    number: "08",
    title: "Food & Beverage",
    slug: "ai-food-beverage",
    useCases: [
      "Gestione ordini B2B e HORECA - AI legge email, PDF ed EDI",
      "Tracciabilit\u00e0 filiera - SFA+AI certifica fornitori",
      "Gestione ricette e schede tecniche - automazione su varianti, allergeni",
    ],
    subSectors: [
      { number: "08a", title: "Cantine Vinicole & Produzione Vino", slug: "ai-cantina-vinicola-vino", description: "Monitoraggio fermentazione, gestione vendemmia e marketing diretto AI" },
      { number: "08b", title: "Ristorazione Commerciale & HORECA", slug: "ai-ristorazione-horeca", description: "Menu engineering, food cost AI e gestione turni e prenotazioni" },
      { number: "08c", title: "Panifici, Pasticcerie & Gelaterie", slug: "ai-panificio-pasticceria-gelateria", description: "Previsione produzione giornaliera, riduzione sprechi e gestione ordini" },
      { number: "08d", title: "Agricoltura & Precision Farming", slug: "ai-agricoltura-precision-farming", description: "Monitoraggio colture satellitare, irrigazione intelligente e previsione resa" },
      { number: "08e", title: "Salumifici, Caseifici & Frantoi", slug: "ai-salumificio-caseificio-frantoio", description: "Controllo stagionatura AI, tracciabilit\u00e0 DOP/IGP e ottimizzazione produzione" },
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
    subSectors: [
      { number: "09a", title: "BIM & Progettazione Digitale Cantieri", slug: "ai-bim-progettazione-cantieri", description: "Modellazione BIM con AI, clash detection automatica e digital twin" },
      { number: "09b", title: "Agenzie Immobiliari & PropTech", slug: "ai-agenzia-immobiliare-proptech", description: "Valutazione immobili AI, matching acquirente-immobile e tour virtuali" },
      { number: "09c", title: "Imprese Edili & Gestione Cantiere", slug: "ai-impresa-edile-gestione-cantiere", description: "Pianificazione lavori AI, monitoraggio avanzamento e sicurezza cantiere" },
      { number: "09d", title: "Studi di Geometri & Perizie", slug: "ai-studio-geometra-perizie", description: "Perizie automatizzate, catasto digitale e pratiche edilizie AI" },
      { number: "09e", title: "Facility Management & Condomini", slug: "ai-facility-management-condomini", description: "Manutenzione predittiva edifici, gestione ticket e efficienza energetica" },
    ],
  },
  {
    number: "10",
    title: "Sanit\u00e0 Privata",
    slug: "ai-sanita-privata",
    useCases: [
      "Front-office automatizzato - prenotazioni, invio reminder e riduce i no-show",
      "Gestione cartelle cliniche - AI estrae dati da referti",
      "Customer service pazienti 24/7 - risponde a domande amministrative",
    ],
    subSectors: [
      { number: "10a", title: "Studi Dentistici & Odontoiatria", slug: "ai-studio-dentistico-odontoiatria", description: "Analisi radiografie AI, gestione piani di cura e richiami automatici" },
      { number: "10b", title: "Cliniche Veterinarie", slug: "ai-clinica-veterinaria", description: "Cartelle cliniche AI, promemoria vaccinazioni e gestione appuntamenti" },
      { number: "10c", title: "Centri Estetici & Parrucchieri", slug: "ai-centro-estetico-parrucchiere", description: "Prenotazioni AI, analisi pelle/capelli e programmi fidelizzazione" },
      { number: "10d", title: "Fisioterapia & Riabilitazione", slug: "ai-fisioterapia-riabilitazione", description: "Piani riabilitativi personalizzati, monitoraggio progressi e telemedicina" },
      { number: "10e", title: "Palestre & Centri Fitness", slug: "ai-palestra-centro-fitness", description: "Schede allenamento AI, gestione abbonamenti e analisi churn membri" },
    ],
  },
];
