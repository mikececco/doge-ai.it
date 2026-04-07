export type IncentivoSettoriale = {
  slug: string;
  regione: string;
  settore: string;
  title: string;
  description: string;
  bandiSpecifici: string[];
  incentiviNazionali: string[];
};

const REGIONI_SETTORIALI = [
  { slug: "lombardia", name: "Lombardia" },
  { slug: "veneto", name: "Veneto" },
  { slug: "emilia-romagna", name: "Emilia-Romagna" },
  { slug: "piemonte", name: "Piemonte" },
  { slug: "toscana", name: "Toscana" },
  { slug: "lazio", name: "Lazio" },
  { slug: "campania", name: "Campania" },
  { slug: "puglia", name: "Puglia" },
  { slug: "sicilia", name: "Sicilia" },
  { slug: "sardegna", name: "Sardegna" },
] as const;

const SETTORI_SETTORIALI = [
  { slug: "manifattura", name: "Manifattura", nameArticle: "la Manifattura" },
  { slug: "distribuzione-b2b", name: "Distribuzione B2B", nameArticle: "la Distribuzione B2B" },
  { slug: "retail-fashion", name: "Retail, Fashion & Design", nameArticle: "il Retail, Fashion & Design" },
  { slug: "turismo-ospitalita", name: "Turismo & Ospitalita", nameArticle: "il Turismo & Ospitalita" },
  { slug: "logistica-trasporti", name: "Logistica & Trasporti", nameArticle: "la Logistica & Trasporti" },
  { slug: "servizi-professionali", name: "Servizi Professionali", nameArticle: "i Servizi Professionali" },
  { slug: "farmaceutica", name: "Farmaceutica & Dispositivi Medici", nameArticle: "la Farmaceutica & Dispositivi Medici" },
  { slug: "food-beverage", name: "Food & Beverage", nameArticle: "il Food & Beverage" },
  { slug: "edilizia-immobiliare", name: "Edilizia & Immobiliare", nameArticle: "l'Edilizia & Immobiliare" },
  { slug: "sanita-privata", name: "Sanita Privata", nameArticle: "la Sanita Privata" },
] as const;

// Region-specific bandi mapped to sectors
const BANDI_REGIONALI: Record<string, Record<string, string[]>> = {
  lombardia: {
    manifattura: [
      "Bando AI Hub Lombardia - fino a 200.000 \u20AC per progetti AI nella manifattura lombarda, con priorita a controllo qualita e automazione linee produttive",
      "Linea Sviluppo Aziendale - finanziamento agevolato fino a 1.500.000 \u20AC per investimenti in macchinari intelligenti e robotica collaborativa",
      "Voucher Digitale I4.0 Lombardia - contributo fino a 10.000 \u20AC per consulenza su digital twin e manutenzione predittiva",
    ],
    "distribuzione-b2b": [
      "Bando AI Hub Lombardia - fino a 200.000 \u20AC per automazione ordini e gestione magazzino intelligente nei grossisti lombardi",
      "Linea Internazionalizzazione Digitale - contributo fino a 100.000 \u20AC per piattaforme B2B e gestione ordini omnicanale",
      "Voucher Digitale I4.0 - fino a 10.000 \u20AC per consulenza su ottimizzazione supply chain con AI",
    ],
    "retail-fashion": [
      "Bando Artigianato e Manifattura Creativa - fino a 80.000 \u20AC per digitalizzazione del campionario e catalogo con AI",
      "Linea Sviluppo Aziendale - finanziamento agevolato per sistemi di customer service omnicanale e personalizzazione AI",
      "Voucher per la Digitalizzazione del Commercio - fino a 10.000 \u20AC per e-commerce intelligente e gestione inventory",
    ],
    "turismo-ospitalita": [
      "Bando Turismo Lombardo Digitale - fino a 50.000 \u20AC per sistemi di revenue management e concierge AI nelle strutture ricettive",
      "Al Via Impresa Turismo - microcredito e contributi per startup nel turismo digitale e esperienziale",
      "Voucher Digitale Turismo - fino a 10.000 \u20AC per chatbot multilingue e gestione review automatizzata",
    ],
    "logistica-trasporti": [
      "Bando Logistica Sostenibile Lombardia - fino a 300.000 \u20AC per ottimizzazione rotte e riduzione emissioni con AI",
      "Linea Sviluppo Aziendale - finanziamento agevolato per automazione documenti di trasporto e tracciabilita AI",
      "Voucher Digitale I4.0 - fino a 10.000 \u20AC per consulenza su fleet management intelligente",
    ],
    "servizi-professionali": [
      "Bando Innovazione Servizi Lombardia - fino a 100.000 \u20AC per automazione processi in studi professionali",
      "Voucher Digitale I4.0 - fino a 10.000 \u20AC per consulenza su AI applicata a contabilita e compliance",
      "Al Via Impresa - supporto per startup di servizi professionali basati su AI e legal-tech",
    ],
    farmaceutica: [
      "Bando Scienze della Vita Lombardia - fino a 500.000 \u20AC per progetti AI in ambito farmaceutico e dispositivi medici",
      "Linea R&S Collaborativa - contributo fino al 50% per progetti impresa-universita su AI nella serializzazione e tracciabilita farmaci",
      "Voucher Digitale I4.0 - fino a 10.000 \u20AC per consulenza su gestione ordini farmaci con AI",
    ],
    "food-beverage": [
      "Bando Filiere Agroalimentari Lombardia - fino a 200.000 \u20AC per tracciabilita e automazione ordini B2B nel food",
      "Linea Sviluppo Aziendale - finanziamento agevolato per sistemi AI di gestione HORECA e supply chain alimentare",
      "Voucher Digitale I4.0 - fino a 10.000 \u20AC per consulenza su AI per schede tecniche e conformita alimentare",
    ],
    "edilizia-immobiliare": [
      "Bando Edilizia Digitale Lombardia - fino a 150.000 \u20AC per gestione documentale cantieri e BIM con AI",
      "Linea Sviluppo Aziendale - finanziamento agevolato per piattaforme di coordinamento subappaltatori intelligenti",
      "Voucher Digitale I4.0 - fino a 10.000 \u20AC per consulenza su automazione SAL e sicurezza cantieri con AI",
    ],
    "sanita-privata": [
      "Bando Sanita Digitale Lombardia - fino a 200.000 \u20AC per front-office automatizzato e gestione prenotazioni AI nelle cliniche private",
      "Linea Innovazione Sanitaria - contributo fino al 40% per cartelle cliniche intelligenti e AI diagnostica",
      "Voucher Digitale Sanita - fino a 15.000 \u20AC per implementazione chatbot pazienti e sistemi di reminder",
    ],
  },
  veneto: {
    manifattura: [
      "POR FESR Veneto Azione Digitale - contributo fino al 40% per controllo qualita visivo AI e automazione linee produttive nel distretto manifatturiero veneto",
      "Bando Ricerca e Sviluppo Veneto - fino a 300.000 \u20AC per progetti collaborativi impresa-universita su AI nella produzione",
      "Fondo Rotativo Veneto Sviluppo - finanziamento a tasso agevolato per investimenti in robotica e manutenzione predittiva",
    ],
    "distribuzione-b2b": [
      "POR FESR Veneto Azione Digitale - contributo fino al 40% per piattaforme di gestione ordini AI nei distretti distributivi veneti",
      "Bando Logistica e Distribuzione - fino a 150.000 \u20AC per automazione magazzino e riassortimento intelligente",
      "Fondo Rotativo Veneto Sviluppo - finanziamento agevolato per sistemi di agente ordini omnicanale",
    ],
    "retail-fashion": [
      "POR FESR Veneto Azione Digitale - contributo fino al 40% per digitalizzazione retail e customer experience AI",
      "Bando Distretti del Commercio - fino a 80.000 \u20AC per sistemi di loyalty AI e personalizzazione offerta",
      "Fondo Rotativo Veneto Sviluppo - finanziamento per piattaforme e-commerce con raccomandazione AI",
    ],
    "turismo-ospitalita": [
      "Bando Turismo Veneto Digitale - fino a 100.000 \u20AC per revenue management AI e concierge multilingue",
      "POR FESR Veneto - contributo fino al 40% per digitalizzazione strutture turistiche e hospitality AI",
      "Fondo Rotativo Veneto Sviluppo - finanziamento per piattaforme di gestione review e reputazione AI",
    ],
    "logistica-trasporti": [
      "POR FESR Veneto Azione Digitale - contributo fino al 40% per ottimizzazione rotte e gestione flotte con AI nel polo logistico veneto",
      "Bando Interporto Digitale - fino a 200.000 \u20AC per automazione documenti di trasporto e tracciabilita",
      "Fondo Rotativo Veneto Sviluppo - finanziamento per sistemi di last-mile delivery intelligente",
    ],
    "servizi-professionali": [
      "POR FESR Veneto Azione Digitale - contributo fino al 40% per automazione studi professionali veneti",
      "Bando Innovazione Servizi - fino a 80.000 \u20AC per AI in contabilita, revisione e due diligence documentale",
      "Fondo Rotativo Veneto Sviluppo - finanziamento per piattaforme di legal-tech e compliance AI",
    ],
    farmaceutica: [
      "POR FESR Veneto Azione Digitale - contributo fino al 40% per AI nella gestione ordini e serializzazione farmaceutica",
      "Bando Ricerca e Sviluppo Veneto - fino a 300.000 \u20AC per progetti AI su dispositivi medici e tracciabilita farmaci",
      "Fondo Rotativo Veneto Sviluppo - finanziamento per sistemi di gestione scadenze e compliance farmaceutica con AI",
    ],
    "food-beverage": [
      "Bando Filiera Agroalimentare Veneto - fino a 250.000 \u20AC per tracciabilita vitivinicola e automazione ordini HORECA con AI",
      "POR FESR Veneto - contributo fino al 40% per AI nella gestione qualita e certificazioni alimentari",
      "Fondo Rotativo Veneto Sviluppo - finanziamento per sistemi di demand forecasting e gestione scorte nel food",
    ],
    "edilizia-immobiliare": [
      "POR FESR Veneto Azione Digitale - contributo fino al 40% per BIM intelligente e gestione cantieri con AI",
      "Bando Innovazione Edilizia Veneto - fino a 120.000 \u20AC per automazione documentale e sicurezza cantieri",
      "Fondo Rotativo Veneto Sviluppo - finanziamento per piattaforme di coordinamento subappaltatori e due diligence immobiliare AI",
    ],
    "sanita-privata": [
      "POR FESR Veneto Azione Digitale - contributo fino al 40% per front-office AI e gestione cartelle cliniche nelle strutture sanitarie private",
      "Bando Sanita e Innovazione Veneto - fino a 150.000 \u20AC per AI diagnostica e automazione prenotazioni",
      "Fondo Rotativo Veneto Sviluppo - finanziamento per chatbot pazienti e sistemi di triage intelligente",
    ],
  },
  "emilia-romagna": {
    manifattura: [
      "Bando Data Valley Emilia-Romagna - fino a 150.000 \u20AC per big data e AI nel tessuto manifatturiero emiliano, focus su Motor Valley e packaging",
      "Contributo Innovazione PMI - fondo perduto fino al 50% per digitalizzazione processi produttivi e controllo qualita AI",
      "Rete Alta Tecnologia - voucher fino a 20.000 \u20AC per accesso ai laboratori di ricerca su AI e robotica industriale",
    ],
    "distribuzione-b2b": [
      "Bando Data Valley - fino a 150.000 \u20AC per piattaforme di gestione ordini B2B con AI nel distretto distributivo emiliano",
      "Contributo Innovazione PMI - fondo perduto fino al 50% per automazione magazzino e supply chain intelligente",
      "Rete Alta Tecnologia - voucher fino a 20.000 \u20AC per consulenza su riassortimento automatico e demand sensing",
    ],
    "retail-fashion": [
      "Bando Data Valley - fino a 150.000 \u20AC per AI nel retail e fashion emiliano-romagnolo",
      "Contributo Innovazione PMI - fondo perduto fino al 50% per personalizzazione cliente e gestione campionario AI",
      "Fondo Starter - finanziamento agevolato per startup fashion-tech e retail innovativo",
    ],
    "turismo-ospitalita": [
      "Bando Turismo Emilia-Romagna Digitale - fino a 80.000 \u20AC per revenue management e concierge AI sulla Riviera Romagnola",
      "Contributo Innovazione PMI - fondo perduto fino al 50% per sistemi di gestione turistica intelligente",
      "Rete Alta Tecnologia - voucher fino a 20.000 \u20AC per consulenza su dynamic pricing e hospitality AI",
    ],
    "logistica-trasporti": [
      "Bando Data Valley - fino a 150.000 \u20AC per ottimizzazione logistica e trasporti con AI nel polo intermodale emiliano",
      "Contributo Innovazione PMI - fondo perduto fino al 50% per fleet management e automazione documenti di trasporto",
      "Rete Alta Tecnologia - voucher fino a 20.000 \u20AC per consulenza su rotte intelligenti e riduzione emissioni",
    ],
    "servizi-professionali": [
      "Bando Data Valley - fino a 150.000 \u20AC per AI nei servizi professionali: automazione contabile e compliance",
      "Contributo Innovazione PMI - fondo perduto fino al 50% per digitalizzazione studi professionali con AI",
      "Fondo Starter - finanziamento agevolato per startup di servizi professionali AI-based",
    ],
    farmaceutica: [
      "Bando Data Valley - fino a 150.000 \u20AC per AI nel polo farmaceutico emiliano, serializzazione e tracciabilita",
      "Contributo Innovazione PMI - fondo perduto fino al 50% per gestione ordini ospedalieri e compliance farmaceutica AI",
      "Rete Alta Tecnologia - voucher fino a 20.000 \u20AC per accesso a laboratori di ricerca su AI medicale",
    ],
    "food-beverage": [
      "Bando Filiera Agroalimentare Emilia-Romagna - fino a 200.000 \u20AC per AI nella Food Valley: tracciabilita DOP/IGP e gestione ordini HORECA",
      "Contributo Innovazione PMI - fondo perduto fino al 50% per automazione schede tecniche e conformita alimentare",
      "Rete Alta Tecnologia - voucher fino a 20.000 \u20AC per consulenza su demand forecasting e gestione ricette AI",
    ],
    "edilizia-immobiliare": [
      "Bando Data Valley - fino a 150.000 \u20AC per BIM intelligente e gestione cantieri AI in Emilia-Romagna",
      "Contributo Innovazione PMI - fondo perduto fino al 50% per automazione SAL e documenti di cantiere",
      "Rete Alta Tecnologia - voucher fino a 20.000 \u20AC per consulenza su sicurezza cantieri e coordinamento subappaltatori AI",
    ],
    "sanita-privata": [
      "Bando Data Valley - fino a 150.000 \u20AC per AI nella sanita privata emiliana: front-office e gestione cartelle cliniche",
      "Contributo Innovazione PMI - fondo perduto fino al 50% per automazione prenotazioni e riduzione no-show",
      "Rete Alta Tecnologia - voucher fino a 20.000 \u20AC per consulenza su triage AI e chatbot pazienti",
    ],
  },
  piemonte: {
    manifattura: [
      "Polo di Innovazione AI Piemonte - contributo fino a 250.000 \u20AC per progetti collaborativi su AI nella manifattura piemontese, focus automotive e aerospazio",
      "Bando IR2 Piemonte - fondo perduto fino al 60% per investimenti in ricerca industriale e controllo qualita AI",
      "Voucher Digitalizzazione PMI - fino a 15.000 \u20AC per consulenza su manutenzione predittiva e digital twin",
    ],
    "distribuzione-b2b": [
      "Polo di Innovazione AI - contributo fino a 250.000 \u20AC per automazione supply chain e gestione ordini B2B intelligente",
      "Bando IR2 Piemonte - fondo perduto fino al 60% per ricerca su riassortimento automatico e demand sensing",
      "Voucher Digitalizzazione PMI - fino a 15.000 \u20AC per consulenza su piattaforme distributive AI",
    ],
    "retail-fashion": [
      "Polo di Innovazione AI - contributo fino a 250.000 \u20AC per AI nel retail piemontese e customer experience",
      "Bando IR2 Piemonte - fondo perduto fino al 60% per ricerca su personalizzazione e raccomandazione AI",
      "Voucher Digitalizzazione PMI - fino a 15.000 \u20AC per consulenza su gestione campionario e loyalty AI",
    ],
    "turismo-ospitalita": [
      "Bando Turismo Piemonte 4.0 - fino a 100.000 \u20AC per revenue management AI e valorizzazione territorio con concierge digitale",
      "Polo di Innovazione AI - contributo fino a 250.000 \u20AC per hospitality AI e dynamic pricing",
      "Voucher Digitalizzazione PMI - fino a 15.000 \u20AC per consulenza su gestione review e booking AI",
    ],
    "logistica-trasporti": [
      "Polo di Innovazione AI - contributo fino a 250.000 \u20AC per ottimizzazione rotte e logistica intelligente nel polo piemontese",
      "Bando IR2 Piemonte - fondo perduto fino al 60% per ricerca su fleet management AI e riduzione emissioni",
      "Voucher Digitalizzazione PMI - fino a 15.000 \u20AC per consulenza su automazione documenti trasporto",
    ],
    "servizi-professionali": [
      "Polo di Innovazione AI - contributo fino a 250.000 \u20AC per AI nei servizi professionali piemontesi",
      "Bando IR2 Piemonte - fondo perduto fino al 60% per ricerca su automazione contabile e legal-tech",
      "Voucher Digitalizzazione PMI - fino a 15.000 \u20AC per consulenza su due diligence e compliance AI",
    ],
    farmaceutica: [
      "Polo di Innovazione AI - contributo fino a 250.000 \u20AC per AI nel farmaceutico piemontese e dispositivi medici",
      "Bando IR2 Piemonte - fondo perduto fino al 60% per ricerca su serializzazione e tracciabilita AI",
      "Voucher Digitalizzazione PMI - fino a 15.000 \u20AC per consulenza su gestione ordini farmaci intelligente",
    ],
    "food-beverage": [
      "Bando Filiere Agroalimentari Piemonte - fino a 180.000 \u20AC per AI nella filiera vitivinicola e agroalimentare piemontese",
      "Polo di Innovazione AI - contributo fino a 250.000 \u20AC per tracciabilita e gestione qualita AI nel food",
      "Voucher Digitalizzazione PMI - fino a 15.000 \u20AC per consulenza su demand forecasting e gestione ordini HORECA",
    ],
    "edilizia-immobiliare": [
      "Polo di Innovazione AI - contributo fino a 250.000 \u20AC per BIM intelligente e gestione cantieri AI in Piemonte",
      "Bando IR2 Piemonte - fondo perduto fino al 60% per ricerca su automazione documentale cantieri",
      "Voucher Digitalizzazione PMI - fino a 15.000 \u20AC per consulenza su coordinamento subappaltatori AI",
    ],
    "sanita-privata": [
      "Polo di Innovazione AI - contributo fino a 250.000 \u20AC per AI nella sanita privata piemontese",
      "Bando IR2 Piemonte - fondo perduto fino al 60% per ricerca su diagnostica AI e gestione clinica",
      "Voucher Digitalizzazione PMI - fino a 15.000 \u20AC per consulenza su front-office AI e riduzione no-show",
    ],
  },
  toscana: {
    manifattura: [
      "POR FESR Toscana Innovazione - fino al 50% su progetti di AI per la manifattura toscana, focus su tessile, pelletteria e meccanica di precisione",
      "Bando Artigianato Digitale - contributo fino a 50.000 \u20AC per digitalizzazione imprese artigiane con AI e visione artificiale",
      "Fondo Futuro Toscana - finanziamento agevolato per investimenti in automazione e controllo qualita AI",
    ],
    "distribuzione-b2b": [
      "POR FESR Toscana Innovazione - fino al 50% su progetti di automazione ordini e supply chain AI per distributori toscani",
      "Bando Artigianato Digitale - contributo fino a 50.000 \u20AC per digitalizzazione processi distributivi",
      "Fondo Futuro Toscana - finanziamento agevolato per piattaforme B2B intelligenti e gestione magazzino AI",
    ],
    "retail-fashion": [
      "Bando Moda e Design Digitale Toscana - fino a 120.000 \u20AC per AI nella gestione campionario, catalogo e personalizzazione cliente nel distretto fashion toscano",
      "POR FESR Toscana Innovazione - fino al 50% per digitalizzazione retail con AI e customer experience",
      "Fondo Futuro Toscana - finanziamento agevolato per e-commerce intelligente e gestione inventory AI",
    ],
    "turismo-ospitalita": [
      "Bando Turismo Toscana Digitale - fino a 80.000 \u20AC per revenue management AI e concierge multilingue nelle strutture toscane",
      "POR FESR Toscana Innovazione - fino al 50% per hospitality AI e valorizzazione territorio",
      "Fondo Futuro Toscana - finanziamento per piattaforme di dynamic pricing e gestione review AI",
    ],
    "logistica-trasporti": [
      "POR FESR Toscana Innovazione - fino al 50% per ottimizzazione logistica e trasporti con AI in Toscana",
      "Bando Artigianato Digitale - contributo fino a 50.000 \u20AC per automazione documenti di trasporto e tracciabilita",
      "Fondo Futuro Toscana - finanziamento agevolato per fleet management intelligente e riduzione km a vuoto",
    ],
    "servizi-professionali": [
      "POR FESR Toscana Innovazione - fino al 50% per AI nei servizi professionali toscani",
      "Bando Artigianato Digitale - contributo fino a 50.000 \u20AC per automazione contabile e gestione documentale AI",
      "Fondo Futuro Toscana - finanziamento per piattaforme di compliance e due diligence AI",
    ],
    farmaceutica: [
      "POR FESR Toscana Innovazione - fino al 50% per AI nel polo farmaceutico toscano e dispositivi medici",
      "Bando Scienze della Vita Toscana - fino a 200.000 \u20AC per serializzazione e tracciabilita farmaci AI",
      "Fondo Futuro Toscana - finanziamento per gestione ordini ospedalieri e compliance farmaceutica AI",
    ],
    "food-beverage": [
      "Bando Filiera Agroalimentare Toscana - fino a 150.000 \u20AC per tracciabilita vitivinicola e olio DOP con AI",
      "POR FESR Toscana Innovazione - fino al 50% per automazione ordini HORECA e gestione qualita AI",
      "Fondo Futuro Toscana - finanziamento per demand forecasting e conformita alimentare AI",
    ],
    "edilizia-immobiliare": [
      "POR FESR Toscana Innovazione - fino al 50% per BIM intelligente e restauro assistito da AI in Toscana",
      "Bando Artigianato Digitale - contributo fino a 50.000 \u20AC per gestione documentale cantieri AI",
      "Fondo Futuro Toscana - finanziamento per coordinamento subappaltatori e due diligence immobiliare AI",
    ],
    "sanita-privata": [
      "POR FESR Toscana Innovazione - fino al 50% per front-office AI e gestione cartelle cliniche nelle strutture sanitarie toscane",
      "Bando Sanita Digitale Toscana - fino a 100.000 \u20AC per automazione prenotazioni e triage AI",
      "Fondo Futuro Toscana - finanziamento per chatbot pazienti e riduzione no-show con AI",
    ],
  },
  lazio: {
    manifattura: [
      "Lazio Innova Digital - contributo fino a 80.000 \u20AC per progetti di AI nella manifattura laziale, automazione e controllo qualita",
      "Pre-Seed e Seed Capital Lazio - fino a 120.000 \u20AC per startup manifatturiere basate su AI e Industry 4.0",
      "Bando Impresa Sicura 4.0 - contributo per investimenti in cybersecurity industriale e AI per la sicurezza produttiva",
    ],
    "distribuzione-b2b": [
      "Lazio Innova Digital - contributo fino a 80.000 \u20AC per automazione ordini e gestione magazzino AI nei distributori laziali",
      "Voucher Internazionalizzazione - fino a 10.000 \u20AC per PMI che esportano con piattaforme B2B intelligenti",
      "Bando Impresa Sicura 4.0 - contributo per sicurezza supply chain e automazione documentale",
    ],
    "retail-fashion": [
      "Lazio Innova Digital - contributo fino a 80.000 \u20AC per customer experience AI nel retail romano e laziale",
      "Pre-Seed e Seed Capital Lazio - fino a 120.000 \u20AC per startup fashion-tech e retail innovativo",
      "Voucher Internazionalizzazione - fino a 10.000 \u20AC per e-commerce AI e personalizzazione clientela internazionale",
    ],
    "turismo-ospitalita": [
      "Bando Turismo Lazio Digitale - fino a 100.000 \u20AC per revenue management AI e concierge multilingue nella capitale e dintorni",
      "Lazio Innova Digital - contributo fino a 80.000 \u20AC per hospitality AI e gestione reputazione online",
      "Pre-Seed e Seed Capital - fino a 120.000 \u20AC per startup nel turismo digitale laziale",
    ],
    "logistica-trasporti": [
      "Lazio Innova Digital - contributo fino a 80.000 \u20AC per ottimizzazione logistica e last-mile delivery AI a Roma e nel Lazio",
      "Bando Impresa Sicura 4.0 - contributo per automazione documenti di trasporto e tracciabilita sicura",
      "Voucher Internazionalizzazione - fino a 10.000 \u20AC per logistica export con AI",
    ],
    "servizi-professionali": [
      "Lazio Innova Digital - contributo fino a 80.000 \u20AC per AI negli studi professionali romani: automazione contabile e legal-tech",
      "Pre-Seed e Seed Capital Lazio - fino a 120.000 \u20AC per startup di servizi AI-based",
      "Bando Impresa Sicura 4.0 - contributo per cybersecurity e compliance AI negli studi professionali",
    ],
    farmaceutica: [
      "Lazio Innova Digital - contributo fino a 80.000 \u20AC per AI nel polo farmaceutico laziale e biotech romano",
      "Pre-Seed e Seed Capital Lazio - fino a 120.000 \u20AC per startup pharma-tech e health-tech",
      "Bando Impresa Sicura 4.0 - contributo per sicurezza dati sanitari e compliance farmaceutica AI",
    ],
    "food-beverage": [
      "Lazio Innova Digital - contributo fino a 80.000 \u20AC per AI nella filiera agroalimentare laziale e gestione HORECA",
      "Bando Filiere Agricole Lazio - fino a 100.000 \u20AC per tracciabilita prodotti tipici e gestione qualita AI",
      "Voucher Internazionalizzazione - fino a 10.000 \u20AC per export food con piattaforme AI",
    ],
    "edilizia-immobiliare": [
      "Lazio Innova Digital - contributo fino a 80.000 \u20AC per BIM intelligente e gestione cantieri AI a Roma",
      "Pre-Seed e Seed Capital Lazio - fino a 120.000 \u20AC per startup proptech e construction-tech AI",
      "Bando Impresa Sicura 4.0 - contributo per sicurezza cantieri e automazione documentale con AI",
    ],
    "sanita-privata": [
      "Lazio Innova Digital - contributo fino a 80.000 \u20AC per front-office AI e gestione pazienti nelle cliniche private romane",
      "Pre-Seed e Seed Capital Lazio - fino a 120.000 \u20AC per startup health-tech e sanita digitale",
      "Bando Impresa Sicura 4.0 - contributo per sicurezza dati sanitari e privacy AI nella sanita",
    ],
  },
  campania: {
    manifattura: [
      "POR FESR Campania Impresa Digitale - contributo fino al 60% per digitalizzazione PMI manifatturiere campane, focus aerospazio e automotive",
      "Bando Manifattura 4.0 Campania - fondo perduto per automazione e robotica con AI nelle imprese campane",
      "Campania Startup - fino a 200.000 \u20AC per startup manifatturiere ad alto contenuto tecnologico AI",
    ],
    "distribuzione-b2b": [
      "POR FESR Campania Impresa Digitale - contributo fino al 60% per automazione ordini e gestione magazzino AI nei distributori campani",
      "Bando Manifattura 4.0 - fondo perduto per supply chain intelligente e riassortimento automatico AI",
      "Campania Startup - fino a 200.000 \u20AC per startup distributive basate su piattaforme AI",
    ],
    "retail-fashion": [
      "POR FESR Campania Impresa Digitale - contributo fino al 60% per AI nel retail campano e customer experience",
      "Bando Manifattura 4.0 - fondo perduto per digitalizzazione campionario e gestione catalogo AI",
      "Campania Startup - fino a 200.000 \u20AC per startup fashion-tech e commercio digitale AI",
    ],
    "turismo-ospitalita": [
      "Bando Turismo Campania Digitale - fino a 120.000 \u20AC per revenue management AI nella costiera e isole campane",
      "POR FESR Campania Impresa Digitale - contributo fino al 60% per concierge multilingue e gestione booking AI",
      "Campania Startup - fino a 200.000 \u20AC per startup turismo digitale e hospitality AI",
    ],
    "logistica-trasporti": [
      "POR FESR Campania Impresa Digitale - contributo fino al 60% per ottimizzazione logistica portuale e trasporti con AI a Napoli",
      "Bando Manifattura 4.0 - fondo perduto per fleet management AI e automazione documenti trasporto",
      "Campania Startup - fino a 200.000 \u20AC per startup logtech campane basate su AI",
    ],
    "servizi-professionali": [
      "POR FESR Campania Impresa Digitale - contributo fino al 60% per AI nei servizi professionali napoletani e campani",
      "Bando Manifattura 4.0 - fondo perduto per automazione contabile e compliance AI",
      "Campania Startup - fino a 200.000 \u20AC per startup di servizi professionali AI-based",
    ],
    farmaceutica: [
      "POR FESR Campania Impresa Digitale - contributo fino al 60% per AI nel polo farmaceutico campano",
      "Bando Manifattura 4.0 - fondo perduto per serializzazione e tracciabilita farmaci AI",
      "Campania Startup - fino a 200.000 \u20AC per startup pharma-tech e health-tech campane",
    ],
    "food-beverage": [
      "Bando Filiera Agroalimentare Campania - fino a 180.000 \u20AC per AI nella filiera mozzarella DOP, conserve e pasta campana",
      "POR FESR Campania Impresa Digitale - contributo fino al 60% per automazione ordini HORECA e tracciabilita AI",
      "Campania Startup - fino a 200.000 \u20AC per startup food-tech campane con AI",
    ],
    "edilizia-immobiliare": [
      "POR FESR Campania Impresa Digitale - contributo fino al 60% per BIM intelligente e gestione cantieri AI in Campania",
      "Bando Manifattura 4.0 - fondo perduto per automazione documentale cantieri e sicurezza AI",
      "Campania Startup - fino a 200.000 \u20AC per startup proptech e construction-tech AI campane",
    ],
    "sanita-privata": [
      "POR FESR Campania Impresa Digitale - contributo fino al 60% per front-office AI e gestione cliniche private campane",
      "Bando Sanita Digitale Campania - fino a 150.000 \u20AC per automazione prenotazioni e cartelle cliniche AI",
      "Campania Startup - fino a 200.000 \u20AC per startup health-tech campane basate su AI",
    ],
  },
  puglia: {
    manifattura: [
      "Bando Innova.re Puglia - contributo fino all'80% per progetti di innovazione AI nella manifattura pugliese, focus meccanica e agroalimentare",
      "TecnoNidi Puglia - fino a 200.000 \u20AC (fondo perduto + prestito) per startup manifatturiere tecnologiche con AI",
      "PIN Pugliesi Innovativi - fino a 30.000 \u20AC per giovani imprenditori con progetti di automazione e AI nella produzione",
    ],
    "distribuzione-b2b": [
      "Bando Innova.re Puglia - contributo fino all'80% per automazione ordini e gestione magazzino AI nei distributori pugliesi",
      "TecnoNidi Puglia - fino a 200.000 \u20AC per startup distributive basate su piattaforme B2B intelligenti",
      "PIN Pugliesi Innovativi - fino a 30.000 \u20AC per giovani con progetti di supply chain AI",
    ],
    "retail-fashion": [
      "Bando Innova.re Puglia - contributo fino all'80% per AI nel retail pugliese e customer experience digitale",
      "TecnoNidi Puglia - fino a 200.000 \u20AC per startup fashion-tech e commercio digitale AI",
      "PIN Pugliesi Innovativi - fino a 30.000 \u20AC per giovani imprenditori nel retail innovativo AI",
    ],
    "turismo-ospitalita": [
      "Bando Turismo Puglia Digitale - fino a 100.000 \u20AC per revenue management AI e concierge nelle masserie e strutture turistiche pugliesi",
      "TecnoNidi Puglia - fino a 200.000 \u20AC per startup turismo digitale e hospitality AI",
      "PIN Pugliesi Innovativi - fino a 30.000 \u20AC per giovani con progetti di turismo AI nel Salento e Gargano",
    ],
    "logistica-trasporti": [
      "Bando Innova.re Puglia - contributo fino all'80% per ottimizzazione logistica portuale e intermodale con AI in Puglia",
      "TecnoNidi Puglia - fino a 200.000 \u20AC per startup logtech pugliesi basate su AI",
      "PIN Pugliesi Innovativi - fino a 30.000 \u20AC per giovani con progetti di trasporto intelligente",
    ],
    "servizi-professionali": [
      "Bando Innova.re Puglia - contributo fino all'80% per AI nei servizi professionali pugliesi",
      "TecnoNidi Puglia - fino a 200.000 \u20AC per startup di servizi professionali AI-based",
      "PIN Pugliesi Innovativi - fino a 30.000 \u20AC per giovani professionisti con progetti di automazione AI",
    ],
    farmaceutica: [
      "Bando Innova.re Puglia - contributo fino all'80% per AI nel settore farmaceutico e biotech pugliese",
      "TecnoNidi Puglia - fino a 200.000 \u20AC per startup pharma-tech pugliesi con AI",
      "PIN Pugliesi Innovativi - fino a 30.000 \u20AC per giovani con progetti di health-tech e dispositivi medici AI",
    ],
    "food-beverage": [
      "Bando Filiera Agroalimentare Puglia - fino a 200.000 \u20AC per AI nella filiera olivicola, vinicola e agroalimentare pugliese",
      "TecnoNidi Puglia - fino a 200.000 \u20AC per startup food-tech pugliesi con tracciabilita AI",
      "PIN Pugliesi Innovativi - fino a 30.000 \u20AC per giovani con progetti di food-tech e HORECA AI",
    ],
    "edilizia-immobiliare": [
      "Bando Innova.re Puglia - contributo fino all'80% per BIM intelligente e gestione cantieri AI in Puglia",
      "TecnoNidi Puglia - fino a 200.000 \u20AC per startup proptech e construction-tech AI pugliesi",
      "PIN Pugliesi Innovativi - fino a 30.000 \u20AC per giovani con progetti di edilizia digitale e AI",
    ],
    "sanita-privata": [
      "Bando Innova.re Puglia - contributo fino all'80% per front-office AI e gestione cliniche private pugliesi",
      "TecnoNidi Puglia - fino a 200.000 \u20AC per startup health-tech pugliesi con AI",
      "PIN Pugliesi Innovativi - fino a 30.000 \u20AC per giovani con progetti di sanita digitale AI",
    ],
  },
  sicilia: {
    manifattura: [
      "PO FESR Sicilia Agenda Digitale - contributo fino al 70% per digitalizzazione PMI manifatturiere siciliane con AI e automazione",
      "Bando Nuove Imprese Sicilia - fondo perduto fino a 50.000 \u20AC per avvio di attivita manifatturiere innovative con AI",
      "Voucher Innovazione Sicilia - fino a 15.000 \u20AC per consulenza su controllo qualita AI e manutenzione predittiva",
    ],
    "distribuzione-b2b": [
      "PO FESR Sicilia Agenda Digitale - contributo fino al 70% per automazione ordini e gestione magazzino AI nei distributori siciliani",
      "Bando Nuove Imprese Sicilia - fondo perduto fino a 50.000 \u20AC per startup distributive con piattaforme AI",
      "Voucher Innovazione Sicilia - fino a 15.000 \u20AC per consulenza su supply chain intelligente",
    ],
    "retail-fashion": [
      "PO FESR Sicilia Agenda Digitale - contributo fino al 70% per AI nel retail siciliano e customer experience digitale",
      "Bando Nuove Imprese Sicilia - fondo perduto fino a 50.000 \u20AC per startup retail-tech e fashion AI",
      "Voucher Innovazione Sicilia - fino a 15.000 \u20AC per consulenza su e-commerce AI e personalizzazione",
    ],
    "turismo-ospitalita": [
      "Bando Turismo Sicilia Digitale - fino a 120.000 \u20AC per revenue management AI e concierge multilingue nelle strutture turistiche siciliane",
      "PO FESR Sicilia Agenda Digitale - contributo fino al 70% per hospitality AI e valorizzazione patrimonio culturale",
      "Voucher Innovazione Sicilia - fino a 15.000 \u20AC per consulenza su dynamic pricing e gestione review AI",
    ],
    "logistica-trasporti": [
      "PO FESR Sicilia Agenda Digitale - contributo fino al 70% per ottimizzazione logistica portuale e insulare con AI in Sicilia",
      "Bando Nuove Imprese Sicilia - fondo perduto fino a 50.000 \u20AC per startup logtech siciliane basate su AI",
      "Voucher Innovazione Sicilia - fino a 15.000 \u20AC per consulenza su fleet management e rotte intelligenti",
    ],
    "servizi-professionali": [
      "PO FESR Sicilia Agenda Digitale - contributo fino al 70% per AI nei servizi professionali siciliani",
      "Bando Nuove Imprese Sicilia - fondo perduto fino a 50.000 \u20AC per startup di servizi professionali AI",
      "Voucher Innovazione Sicilia - fino a 15.000 \u20AC per consulenza su automazione contabile e compliance AI",
    ],
    farmaceutica: [
      "PO FESR Sicilia Agenda Digitale - contributo fino al 70% per AI nel settore farmaceutico siciliano",
      "Bando Nuove Imprese Sicilia - fondo perduto fino a 50.000 \u20AC per startup pharma-tech e health-tech AI",
      "Voucher Innovazione Sicilia - fino a 15.000 \u20AC per consulenza su tracciabilita farmaci e compliance AI",
    ],
    "food-beverage": [
      "Bando Filiera Agroalimentare Sicilia - fino a 150.000 \u20AC per AI nella filiera agrumicola, vinicola e agroalimentare siciliana",
      "PO FESR Sicilia Agenda Digitale - contributo fino al 70% per automazione ordini HORECA e tracciabilita AI",
      "Voucher Innovazione Sicilia - fino a 15.000 \u20AC per consulenza su conformita alimentare e gestione qualita AI",
    ],
    "edilizia-immobiliare": [
      "PO FESR Sicilia Agenda Digitale - contributo fino al 70% per BIM e gestione cantieri AI in Sicilia",
      "Bando Nuove Imprese Sicilia - fondo perduto fino a 50.000 \u20AC per startup proptech e construction-tech AI",
      "Voucher Innovazione Sicilia - fino a 15.000 \u20AC per consulenza su automazione SAL e sicurezza cantieri AI",
    ],
    "sanita-privata": [
      "PO FESR Sicilia Agenda Digitale - contributo fino al 70% per front-office AI e gestione cliniche private siciliane",
      "Bando Sanita Digitale Sicilia - fino a 100.000 \u20AC per automazione prenotazioni e cartelle cliniche AI",
      "Voucher Innovazione Sicilia - fino a 15.000 \u20AC per consulenza su chatbot pazienti e riduzione no-show",
    ],
  },
  sardegna: {
    manifattura: [
      "Sardegna Ricerche - contributo fino a 100.000 \u20AC per progetti di R&S su AI nella manifattura sarda, focus su agroalimentare e minerario",
      "Bando Impresa Digitale Sardegna - fondo perduto fino al 50% per digitalizzazione PMI manifatturiere con AI",
      "Cluster Top Down Sardegna - progetti collaborativi impresa-ricerca su AI e automazione industriale",
    ],
    "distribuzione-b2b": [
      "Bando Impresa Digitale Sardegna - fondo perduto fino al 50% per automazione ordini e gestione magazzino AI nei distributori sardi",
      "Sardegna Ricerche - contributo fino a 100.000 \u20AC per R&S su supply chain intelligente e riassortimento AI",
      "Fondo Microcredito FSE - finanziamento fino a 25.000 \u20AC per microimprese distributive con piattaforme AI",
    ],
    "retail-fashion": [
      "Bando Impresa Digitale Sardegna - fondo perduto fino al 50% per AI nel retail sardo e artigianato digitale",
      "Sardegna Ricerche - contributo fino a 100.000 \u20AC per R&S su customer experience AI e personalizzazione",
      "Fondo Microcredito FSE - finanziamento fino a 25.000 \u20AC per microimprese retail con e-commerce AI",
    ],
    "turismo-ospitalita": [
      "Bando Turismo Sardegna Digitale - fino a 120.000 \u20AC per revenue management AI e concierge multilingue nei resort e strutture turistiche sarde",
      "Sardegna Ricerche - contributo fino a 100.000 \u20AC per R&S su hospitality AI e valorizzazione territorio",
      "Cluster Top Down - progetti collaborativi su turismo esperienziale e AI per la Costa Smeralda e oltre",
    ],
    "logistica-trasporti": [
      "Bando Impresa Digitale Sardegna - fondo perduto fino al 50% per ottimizzazione logistica insulare e portuale con AI",
      "Sardegna Ricerche - contributo fino a 100.000 \u20AC per R&S su fleet management e trasporto intermodale AI",
      "Fondo Microcredito FSE - finanziamento fino a 25.000 \u20AC per microimprese di trasporto con automazione AI",
    ],
    "servizi-professionali": [
      "Bando Impresa Digitale Sardegna - fondo perduto fino al 50% per AI nei servizi professionali sardi",
      "Sardegna Ricerche - contributo fino a 100.000 \u20AC per R&S su automazione contabile e legal-tech AI",
      "Fondo Microcredito FSE - finanziamento fino a 25.000 \u20AC per professionisti con strumenti AI",
    ],
    farmaceutica: [
      "Bando Impresa Digitale Sardegna - fondo perduto fino al 50% per AI nel settore farmaceutico sardo",
      "Sardegna Ricerche - contributo fino a 100.000 \u20AC per R&S su tracciabilita farmaci e dispositivi medici AI",
      "Cluster Top Down - progetti collaborativi su AI medicale e health-tech in Sardegna",
    ],
    "food-beverage": [
      "Bando Filiera Agroalimentare Sardegna - fino a 150.000 \u20AC per AI nella filiera casearia, vinicola e agroalimentare sarda",
      "Sardegna Ricerche - contributo fino a 100.000 \u20AC per R&S su tracciabilita e certificazioni DOP con AI",
      "Cluster Top Down - progetti collaborativi su food-tech e AI nella filiera agroalimentare sarda",
    ],
    "edilizia-immobiliare": [
      "Bando Impresa Digitale Sardegna - fondo perduto fino al 50% per BIM e gestione cantieri AI in Sardegna",
      "Sardegna Ricerche - contributo fino a 100.000 \u20AC per R&S su automazione documentale cantieri e sicurezza AI",
      "Fondo Microcredito FSE - finanziamento fino a 25.000 \u20AC per microimprese edili con strumenti AI",
    ],
    "sanita-privata": [
      "Bando Impresa Digitale Sardegna - fondo perduto fino al 50% per front-office AI e gestione cliniche private sarde",
      "Sardegna Ricerche - contributo fino a 100.000 \u20AC per R&S su diagnostica AI e gestione pazienti",
      "Fondo Microcredito FSE - finanziamento fino a 25.000 \u20AC per ambulatori e studi medici con AI",
    ],
  },
};

// National incentives relevant per sector
const INCENTIVI_NAZIONALI: Record<string, string[]> = {
  manifattura: [
    "Credito d'Imposta Industria 4.0 - 20% su beni strumentali nuovi per automazione e robotica AI",
    "Piano Transizione 5.0 - fino al 45% per investimenti che combinano AI e riduzione consumi energetici",
    "Credito d'Imposta Formazione 4.0 - fino al 70% per formazione del personale su AI e Industry 4.0",
  ],
  "distribuzione-b2b": [
    "Nuova Sabatini - contributo in conto interessi per acquisto software e hardware AI per gestione ordini",
    "Fondi PNRR Digitalizzazione PMI - fino al 50% a fondo perduto per piattaforme B2B e automazione AI",
    "Credito d'Imposta Formazione 4.0 - fino al 70% per formazione su AI e gestione digitale ordini",
  ],
  "retail-fashion": [
    "Fondi PNRR Digitalizzazione PMI - fino al 50% a fondo perduto per e-commerce AI e customer experience",
    "Nuova Sabatini - contributo per software di gestione campionario e catalogo AI",
    "Bando Innovazione Digitale - fino a 100.000 \u20AC per AI, customer service e personalizzazione",
  ],
  "turismo-ospitalita": [
    "Fondi PNRR Digitalizzazione PMI - fino al 50% per sistemi di revenue management e booking AI",
    "Bando Innovazione Digitale - fino a 100.000 \u20AC per concierge AI e gestione reputazione online",
    "Credito d'Imposta Formazione 4.0 - fino al 70% per formazione del personale su hospitality AI",
  ],
  "logistica-trasporti": [
    "Piano Transizione 5.0 - fino al 45% per ottimizzazione rotte AI con riduzione consumi ed emissioni",
    "Credito d'Imposta Industria 4.0 - 20% per sistemi di fleet management e automazione documentale AI",
    "Nuova Sabatini - contributo per piattaforme di gestione logistica e tracciabilita AI",
  ],
  "servizi-professionali": [
    "Voucher Innovation Manager - fino a 80.000 \u20AC per consulenza su trasformazione digitale con AI",
    "Fondi PNRR Digitalizzazione PMI - fino al 50% per software AI di automazione contabile e documentale",
    "Credito d'Imposta Formazione 4.0 - fino al 70% per formazione su AI per professionisti",
  ],
  farmaceutica: [
    "Credito d'Imposta Industria 4.0 - 20% per sistemi AI di serializzazione e tracciabilita farmaci",
    "Patent Box - super-deduzione 110% per software AI proprietari nel settore farmaceutico",
    "Smart & Start - fino a 1.500.000 \u20AC a tasso zero per startup pharma-tech basate su AI",
  ],
  "food-beverage": [
    "Piano Transizione 5.0 - fino al 45% per AI nella filiera alimentare con riduzione sprechi energetici",
    "Fondi PNRR Digitalizzazione PMI - fino al 50% per tracciabilita e automazione ordini HORECA con AI",
    "Nuova Sabatini - contributo per hardware e software AI per gestione qualita e conformita alimentare",
  ],
  "edilizia-immobiliare": [
    "Credito d'Imposta Industria 4.0 - 20% per software BIM intelligente e automazione cantieri AI",
    "Fondi PNRR Digitalizzazione PMI - fino al 50% per piattaforme di gestione documentale cantieri AI",
    "Nuova Sabatini - contributo per investimenti in droni, sensori IoT e piattaforme AI per l'edilizia",
  ],
  "sanita-privata": [
    "Fondi PNRR Digitalizzazione PMI - fino al 50% per front-office AI e gestione cartelle cliniche digitali",
    "Bando Innovazione Digitale - fino a 100.000 \u20AC per chatbot pazienti e automazione prenotazioni AI",
    "Credito d'Imposta Formazione 4.0 - fino al 70% per formazione del personale sanitario su AI",
  ],
};

// Sector-specific descriptions per region
function generateDescription(regione: string, settore: string): string {
  const descriptions: Record<string, Record<string, string>> = {
    lombardia: {
      manifattura: `Scopri tutti gli incentivi e bandi attivi per implementare l'intelligenza artificiale nella manifattura in Lombardia. Dalla Linea Sviluppo Aziendale al Bando AI Hub, le PMI manifatturiere lombarde possono accedere a contributi fino a 200.000 \u20AC per automazione, controllo qualita visivo AI e manutenzione predittiva. Cumulabili con incentivi nazionali Industria 4.0 e Transizione 5.0.`,
      "distribuzione-b2b": `Tutti i bandi e incentivi per l'AI nella distribuzione B2B in Lombardia. Le PMI lombarde del settore distributivo possono finanziare automazione ordini, gestione magazzino intelligente e riassortimento automatico con AI grazie a contributi regionali fino a 200.000 \u20AC e incentivi nazionali cumulabili.`,
      "retail-fashion": `Incentivi per l'intelligenza artificiale nel retail, fashion e design in Lombardia. Le imprese lombarde possono accedere a bandi per customer service omnicanale AI, gestione campionario automatizzata e programmi loyalty intelligenti, con contributi regionali e nazionali cumulabili.`,
      "turismo-ospitalita": `Bandi e agevolazioni per l'AI nel turismo e ospitalita in Lombardia. Dalle strutture ricettive ai tour operator, scopri come finanziare revenue management dinamico, concierge AI multilingue e gestione reputazione online con incentivi regionali e nazionali.`,
      "logistica-trasporti": `Incentivi per l'intelligenza artificiale nella logistica e trasporti in Lombardia. Le imprese di trasporto e logistica lombarde possono finanziare ottimizzazione rotte AI, fleet management intelligente e automazione documenti con contributi fino a 300.000 \u20AC.`,
      "servizi-professionali": `Bandi e agevolazioni per l'AI nei servizi professionali in Lombardia. Studi commercialisti, avvocati e consulenti lombardi possono finanziare automazione contabile, due diligence AI e compliance automatizzata con incentivi regionali e nazionali.`,
      farmaceutica: `Incentivi per l'AI nella farmaceutica e dispositivi medici in Lombardia. Il polo farmaceutico lombardo puo accedere a contributi fino a 500.000 \u20AC per serializzazione AI, tracciabilita farmaci e gestione ordini ospedalieri intelligenti.`,
      "food-beverage": `Bandi per l'intelligenza artificiale nel food & beverage in Lombardia. Le imprese agroalimentari lombarde possono finanziare tracciabilita filiera AI, automazione ordini HORECA e gestione qualita con contributi regionali fino a 200.000 \u20AC.`,
      "edilizia-immobiliare": `Incentivi per l'AI nell'edilizia e immobiliare in Lombardia. Le imprese edili lombarde possono accedere a contributi per BIM intelligente, gestione documentale cantieri AI e coordinamento subappaltatori automatizzato.`,
      "sanita-privata": `Bandi e agevolazioni per l'AI nella sanita privata in Lombardia. Le cliniche private e gli studi medici lombardi possono finanziare front-office AI, gestione cartelle cliniche intelligenti e chatbot pazienti con incentivi fino a 200.000 \u20AC.`,
    },
    veneto: {
      manifattura: `Incentivi AI per la manifattura in Veneto. Il tessuto manifatturiero veneto puo accedere al POR FESR con contributi fino al 40% per controllo qualita visivo AI, preventivazione automatizzata e automazione linee produttive. Cumulabili con Industria 4.0 e Transizione 5.0.`,
      "distribuzione-b2b": `Bandi per l'AI nella distribuzione B2B in Veneto. I grossisti e distributori veneti possono finanziare automazione ordini omnicanale, riassortimento intelligente e gestione logistica AI con contributi regionali fino al 40% e incentivi nazionali.`,
      "retail-fashion": `Incentivi per l'intelligenza artificiale nel retail e fashion in Veneto. Le imprese venete del retail possono accedere a contributi per customer experience AI, gestione campionario e programmi loyalty intelligenti.`,
      "turismo-ospitalita": `Bandi per l'AI nel turismo in Veneto. Le strutture ricettive venete, da Venezia alle Dolomiti, possono finanziare revenue management AI, concierge multilingue e gestione review con contributi fino a 100.000 \u20AC.`,
      "logistica-trasporti": `Incentivi AI per la logistica e trasporti in Veneto. Le imprese logistiche venete possono accedere a contributi fino al 40% per ottimizzazione rotte, automazione documenti e tracciabilita con AI.`,
      "servizi-professionali": `Bandi per l'AI nei servizi professionali in Veneto. Studi e professionisti veneti possono finanziare automazione contabile, riconciliazione bancaria AI e due diligence documentale con incentivi regionali e nazionali.`,
      farmaceutica: `Incentivi per l'AI nella farmaceutica in Veneto. Il settore farmaceutico veneto puo accedere a contributi fino a 300.000 \u20AC per serializzazione, tracciabilita farmaci e gestione ordini ospedalieri AI.`,
      "food-beverage": `Bandi per l'AI nel food & beverage in Veneto. La filiera agroalimentare veneta, dal vitivinicolo al conserviero, puo finanziare tracciabilita AI, automazione ordini HORECA e gestione qualita con contributi fino a 250.000 \u20AC.`,
      "edilizia-immobiliare": `Incentivi AI per l'edilizia in Veneto. Le imprese edili venete possono accedere a contributi fino al 40% per BIM intelligente, gestione cantieri e automazione documentale con AI.`,
      "sanita-privata": `Bandi per l'AI nella sanita privata in Veneto. Le strutture sanitarie private venete possono finanziare front-office AI, gestione cartelle cliniche e chatbot pazienti con contributi fino a 150.000 \u20AC.`,
    },
    "emilia-romagna": {
      manifattura: `Incentivi AI per la manifattura in Emilia-Romagna. Dal Bando Data Valley alla Rete Alta Tecnologia, le PMI manifatturiere emiliane possono accedere a contributi fino a 150.000 \u20AC per big data, controllo qualita AI e automazione nella Motor Valley e packaging.`,
      "distribuzione-b2b": `Bandi per l'AI nella distribuzione B2B in Emilia-Romagna. I distributori emiliano-romagnoli possono finanziare piattaforme ordini AI e supply chain intelligente con contributi fino a 150.000 \u20AC dal Bando Data Valley.`,
      "retail-fashion": `Incentivi AI per il retail e fashion in Emilia-Romagna. Le imprese del retail emiliano possono accedere a contributi per personalizzazione cliente, gestione campionario AI e customer experience digitale.`,
      "turismo-ospitalita": `Bandi per l'AI nel turismo in Emilia-Romagna. Dalla Riviera Romagnola alle citta d'arte, le strutture turistiche possono finanziare revenue management AI e concierge multilingue con contributi fino a 80.000 \u20AC.`,
      "logistica-trasporti": `Incentivi AI per la logistica in Emilia-Romagna. Le imprese logistiche emiliane possono accedere a contributi fino a 150.000 \u20AC per ottimizzazione rotte, fleet management e automazione documenti con AI.`,
      "servizi-professionali": `Bandi per l'AI nei servizi professionali in Emilia-Romagna. Studi e professionisti emiliani possono finanziare automazione contabile e compliance AI con il Bando Data Valley e la Rete Alta Tecnologia.`,
      farmaceutica: `Incentivi AI per la farmaceutica in Emilia-Romagna. Il polo farmaceutico emiliano puo accedere a contributi fino a 150.000 \u20AC per serializzazione, tracciabilita e gestione ordini farmaci con AI.`,
      "food-beverage": `Bandi per l'AI nel food & beverage in Emilia-Romagna. La Food Valley emiliana puo finanziare tracciabilita DOP/IGP, automazione ordini HORECA e gestione ricette AI con contributi fino a 200.000 \u20AC.`,
      "edilizia-immobiliare": `Incentivi AI per l'edilizia in Emilia-Romagna. Le imprese edili emiliane possono accedere a contributi fino a 150.000 \u20AC per BIM intelligente, gestione cantieri e sicurezza con AI.`,
      "sanita-privata": `Bandi per l'AI nella sanita privata in Emilia-Romagna. Le strutture sanitarie private emiliane possono finanziare front-office AI, gestione cartelle cliniche e chatbot pazienti con il Bando Data Valley.`,
    },
    piemonte: {
      manifattura: `Incentivi AI per la manifattura in Piemonte. Il Polo di Innovazione AI piemontese offre contributi fino a 250.000 \u20AC per progetti collaborativi su AI nell'automotive, aerospazio e meccanica. Cumulabili con il Bando IR2 fino al 60%.`,
      "distribuzione-b2b": `Bandi per l'AI nella distribuzione B2B in Piemonte. I distributori piemontesi possono finanziare automazione supply chain e ordini AI con il Polo di Innovazione e contributi fino a 250.000 \u20AC.`,
      "retail-fashion": `Incentivi AI per il retail e fashion in Piemonte. Le imprese del retail piemontese possono accedere a contributi fino a 250.000 \u20AC per customer experience AI e personalizzazione con il Polo di Innovazione.`,
      "turismo-ospitalita": `Bandi per l'AI nel turismo in Piemonte. Le strutture turistiche piemontesi, dalle Langhe a Torino, possono finanziare revenue management AI e concierge digitale con contributi fino a 100.000 \u20AC.`,
      "logistica-trasporti": `Incentivi AI per la logistica in Piemonte. Le imprese logistiche piemontesi possono accedere al Polo di Innovazione AI con contributi fino a 250.000 \u20AC per ottimizzazione rotte e fleet management.`,
      "servizi-professionali": `Bandi per l'AI nei servizi professionali in Piemonte. Studi e professionisti piemontesi possono finanziare automazione contabile e legal-tech AI con contributi fino a 250.000 \u20AC dal Polo di Innovazione.`,
      farmaceutica: `Incentivi AI per la farmaceutica in Piemonte. Il settore farmaceutico piemontese puo accedere a contributi fino a 250.000 \u20AC per serializzazione AI e tracciabilita farmaci con il Polo di Innovazione.`,
      "food-beverage": `Bandi per l'AI nel food & beverage in Piemonte. La filiera agroalimentare piemontese, dal vitivinicolo al tartufo, puo finanziare tracciabilita AI e gestione qualita con contributi fino a 250.000 \u20AC.`,
      "edilizia-immobiliare": `Incentivi AI per l'edilizia in Piemonte. Le imprese edili piemontesi possono accedere al Polo di Innovazione AI con contributi fino a 250.000 \u20AC per BIM intelligente e gestione cantieri.`,
      "sanita-privata": `Bandi per l'AI nella sanita privata in Piemonte. Le cliniche private piemontesi possono finanziare front-office AI e diagnostica con il Polo di Innovazione e contributi fino a 250.000 \u20AC.`,
    },
    toscana: {
      manifattura: `Incentivi AI per la manifattura in Toscana. Le PMI manifatturiere toscane, dal tessile alla pelletteria e meccanica, possono accedere a contributi fino al 50% con il POR FESR e il Bando Artigianato Digitale.`,
      "distribuzione-b2b": `Bandi per l'AI nella distribuzione B2B in Toscana. I distributori toscani possono finanziare automazione ordini e supply chain AI con contributi fino al 50% dal POR FESR Toscana Innovazione.`,
      "retail-fashion": `Incentivi AI per il retail e fashion in Toscana. Il distretto fashion toscano puo accedere al Bando Moda e Design Digitale con contributi fino a 120.000 \u20AC per gestione campionario AI e personalizzazione.`,
      "turismo-ospitalita": `Bandi per l'AI nel turismo in Toscana. Le strutture ricettive toscane, dal Chianti alla costa, possono finanziare revenue management AI e concierge multilingue con contributi fino a 80.000 \u20AC.`,
      "logistica-trasporti": `Incentivi AI per la logistica in Toscana. Le imprese logistiche toscane possono accedere a contributi fino al 50% per ottimizzazione rotte, fleet management e automazione documenti con AI.`,
      "servizi-professionali": `Bandi per l'AI nei servizi professionali in Toscana. Studi e professionisti toscani possono finanziare automazione contabile e gestione documentale AI con il POR FESR fino al 50%.`,
      farmaceutica: `Incentivi AI per la farmaceutica in Toscana. Il settore farmaceutico toscano puo accedere al Bando Scienze della Vita con contributi fino a 200.000 \u20AC per serializzazione e tracciabilita AI.`,
      "food-beverage": `Bandi per l'AI nel food & beverage in Toscana. La filiera agroalimentare toscana, dal vitivinicolo all'olio DOP, puo finanziare tracciabilita AI e gestione qualita con contributi fino a 150.000 \u20AC.`,
      "edilizia-immobiliare": `Incentivi AI per l'edilizia in Toscana. Le imprese edili toscane possono accedere a contributi fino al 50% per BIM intelligente, restauro assistito da AI e gestione cantieri.`,
      "sanita-privata": `Bandi per l'AI nella sanita privata in Toscana. Le cliniche private toscane possono finanziare front-office AI e automazione prenotazioni con il Bando Sanita Digitale fino a 100.000 \u20AC.`,
    },
    lazio: {
      manifattura: `Incentivi AI per la manifattura nel Lazio. Le PMI manifatturiere laziali possono accedere a Lazio Innova Digital con contributi fino a 80.000 \u20AC per automazione produttiva e controllo qualita AI.`,
      "distribuzione-b2b": `Bandi per l'AI nella distribuzione B2B nel Lazio. I distributori laziali possono finanziare automazione ordini e gestione magazzino AI con Lazio Innova Digital fino a 80.000 \u20AC.`,
      "retail-fashion": `Incentivi AI per il retail nel Lazio. Le imprese del retail romano e laziale possono accedere a contributi fino a 120.000 \u20AC per customer experience AI e startup fashion-tech.`,
      "turismo-ospitalita": `Bandi per l'AI nel turismo nel Lazio. Le strutture turistiche della capitale e del Lazio possono finanziare revenue management AI e concierge multilingue con contributi fino a 100.000 \u20AC.`,
      "logistica-trasporti": `Incentivi AI per la logistica nel Lazio. Le imprese logistiche laziali possono accedere a Lazio Innova Digital con contributi fino a 80.000 \u20AC per ottimizzazione rotte e last-mile delivery AI.`,
      "servizi-professionali": `Bandi per l'AI nei servizi professionali nel Lazio. Studi e professionisti romani possono finanziare automazione contabile e legal-tech AI con Lazio Innova Digital fino a 80.000 \u20AC.`,
      farmaceutica: `Incentivi AI per la farmaceutica nel Lazio. Il polo biotech romano e laziale puo accedere a contributi fino a 120.000 \u20AC per startup pharma-tech e tracciabilita farmaci AI.`,
      "food-beverage": `Bandi per l'AI nel food & beverage nel Lazio. Le imprese agroalimentari laziali possono finanziare tracciabilita e gestione HORECA AI con Lazio Innova Digital e il Bando Filiere Agricole.`,
      "edilizia-immobiliare": `Incentivi AI per l'edilizia nel Lazio. Le imprese edili romane e laziali possono accedere a contributi fino a 120.000 \u20AC per BIM intelligente, gestione cantieri e proptech AI.`,
      "sanita-privata": `Bandi per l'AI nella sanita privata nel Lazio. Le cliniche private romane possono finanziare front-office AI e gestione pazienti con Lazio Innova Digital fino a 80.000 \u20AC.`,
    },
    campania: {
      manifattura: `Incentivi AI per la manifattura in Campania. Le PMI manifatturiere campane possono accedere al POR FESR con contributi fino al 60% per automazione, robotica AI e digitalizzazione produttiva nel settore aerospazio e automotive.`,
      "distribuzione-b2b": `Bandi per l'AI nella distribuzione B2B in Campania. I distributori campani possono finanziare automazione ordini e supply chain AI con contributi fino al 60% dal POR FESR Campania.`,
      "retail-fashion": `Incentivi AI per il retail in Campania. Le imprese del retail campano possono accedere a contributi fino al 60% per customer experience AI e digitalizzazione del commercio.`,
      "turismo-ospitalita": `Bandi per l'AI nel turismo in Campania. Dalla costiera amalfitana a Capri, le strutture turistiche campane possono finanziare revenue management AI e concierge multilingue con contributi fino a 120.000 \u20AC.`,
      "logistica-trasporti": `Incentivi AI per la logistica in Campania. Le imprese logistiche e portuali campane possono accedere a contributi fino al 60% per ottimizzazione rotte e fleet management AI.`,
      "servizi-professionali": `Bandi per l'AI nei servizi professionali in Campania. Studi e professionisti napoletani possono finanziare automazione contabile e compliance AI con il POR FESR fino al 60%.`,
      farmaceutica: `Incentivi AI per la farmaceutica in Campania. Il polo farmaceutico campano puo accedere a contributi fino al 60% per serializzazione AI e tracciabilita farmaci.`,
      "food-beverage": `Bandi per l'AI nel food & beverage in Campania. La filiera agroalimentare campana, dalla mozzarella DOP alla pasta, puo finanziare tracciabilita AI e automazione ordini con contributi fino a 180.000 \u20AC.`,
      "edilizia-immobiliare": `Incentivi AI per l'edilizia in Campania. Le imprese edili campane possono accedere a contributi fino al 60% per BIM intelligente e gestione cantieri AI.`,
      "sanita-privata": `Bandi per l'AI nella sanita privata in Campania. Le cliniche private campane possono finanziare front-office AI e automazione prenotazioni con contributi fino a 150.000 \u20AC.`,
    },
    puglia: {
      manifattura: `Incentivi AI per la manifattura in Puglia. Le PMI manifatturiere pugliesi possono accedere a Innova.re con contributi fino all'80% e TecnoNidi fino a 200.000 \u20AC per automazione e controllo qualita AI.`,
      "distribuzione-b2b": `Bandi per l'AI nella distribuzione B2B in Puglia. I distributori pugliesi possono finanziare automazione ordini e gestione magazzino AI con Innova.re fino all'80% di contributo.`,
      "retail-fashion": `Incentivi AI per il retail in Puglia. Le imprese del retail pugliese possono accedere a contributi fino all'80% per customer experience AI e commercio digitale con Innova.re e TecnoNidi.`,
      "turismo-ospitalita": `Bandi per l'AI nel turismo in Puglia. Dalle masserie del Salento al Gargano, le strutture turistiche pugliesi possono finanziare revenue management AI con contributi fino a 200.000 \u20AC.`,
      "logistica-trasporti": `Incentivi AI per la logistica in Puglia. Le imprese logistiche e portuali pugliesi possono accedere a contributi fino all'80% per ottimizzazione rotte e automazione documenti AI.`,
      "servizi-professionali": `Bandi per l'AI nei servizi professionali in Puglia. Studi e professionisti pugliesi possono finanziare automazione contabile e compliance AI con Innova.re fino all'80%.`,
      farmaceutica: `Incentivi AI per la farmaceutica in Puglia. Il settore farmaceutico pugliese puo accedere a contributi fino all'80% per serializzazione AI e tracciabilita con Innova.re e TecnoNidi.`,
      "food-beverage": `Bandi per l'AI nel food & beverage in Puglia. La filiera olivicola e vinicola pugliese puo finanziare tracciabilita AI e automazione HORECA con contributi fino a 200.000 \u20AC.`,
      "edilizia-immobiliare": `Incentivi AI per l'edilizia in Puglia. Le imprese edili pugliesi possono accedere a contributi fino all'80% per BIM intelligente e gestione cantieri AI con Innova.re.`,
      "sanita-privata": `Bandi per l'AI nella sanita privata in Puglia. Le cliniche private pugliesi possono finanziare front-office AI e gestione pazienti con contributi fino all'80% da Innova.re.`,
    },
    sicilia: {
      manifattura: `Incentivi AI per la manifattura in Sicilia. Le PMI manifatturiere siciliane possono accedere al PO FESR con contributi fino al 70% per digitalizzazione, automazione e controllo qualita AI.`,
      "distribuzione-b2b": `Bandi per l'AI nella distribuzione B2B in Sicilia. I distributori siciliani possono finanziare automazione ordini e supply chain AI con contributi fino al 70% dal PO FESR Sicilia.`,
      "retail-fashion": `Incentivi AI per il retail in Sicilia. Le imprese del retail siciliano possono accedere a contributi fino al 70% per customer experience AI e e-commerce intelligente.`,
      "turismo-ospitalita": `Bandi per l'AI nel turismo in Sicilia. Le strutture turistiche siciliane, dalla costa ai borghi, possono finanziare revenue management AI e concierge multilingue con contributi fino a 120.000 \u20AC.`,
      "logistica-trasporti": `Incentivi AI per la logistica in Sicilia. Le imprese logistiche e portuali siciliane possono accedere a contributi fino al 70% per ottimizzazione rotte insulari e automazione documenti AI.`,
      "servizi-professionali": `Bandi per l'AI nei servizi professionali in Sicilia. Studi e professionisti siciliani possono finanziare automazione contabile e compliance AI con il PO FESR fino al 70%.`,
      farmaceutica: `Incentivi AI per la farmaceutica in Sicilia. Il settore farmaceutico siciliano puo accedere a contributi fino al 70% per tracciabilita farmaci e compliance AI.`,
      "food-beverage": `Bandi per l'AI nel food & beverage in Sicilia. La filiera agrumicola e vinicola siciliana puo finanziare tracciabilita AI e automazione ordini HORECA con contributi fino a 150.000 \u20AC.`,
      "edilizia-immobiliare": `Incentivi AI per l'edilizia in Sicilia. Le imprese edili siciliane possono accedere a contributi fino al 70% per BIM e gestione cantieri AI con il PO FESR.`,
      "sanita-privata": `Bandi per l'AI nella sanita privata in Sicilia. Le cliniche private siciliane possono finanziare front-office AI e automazione prenotazioni con contributi fino a 100.000 \u20AC.`,
    },
    sardegna: {
      manifattura: `Incentivi AI per la manifattura in Sardegna. Le PMI manifatturiere sarde possono accedere a Sardegna Ricerche con contributi fino a 100.000 \u20AC e al Bando Impresa Digitale fino al 50% per automazione e AI.`,
      "distribuzione-b2b": `Bandi per l'AI nella distribuzione B2B in Sardegna. I distributori sardi possono finanziare automazione ordini e supply chain AI con il Bando Impresa Digitale fino al 50%.`,
      "retail-fashion": `Incentivi AI per il retail in Sardegna. Le imprese del retail sardo possono accedere a contributi fino al 50% per customer experience AI e artigianato digitale.`,
      "turismo-ospitalita": `Bandi per l'AI nel turismo in Sardegna. Dai resort della Costa Smeralda agli agriturismi, le strutture turistiche sarde possono finanziare revenue management AI e concierge multilingue con contributi fino a 120.000 \u20AC.`,
      "logistica-trasporti": `Incentivi AI per la logistica in Sardegna. Le imprese logistiche sarde possono accedere a contributi fino al 50% per ottimizzazione logistica insulare e automazione documenti AI.`,
      "servizi-professionali": `Bandi per l'AI nei servizi professionali in Sardegna. Studi e professionisti sardi possono finanziare automazione contabile e legal-tech AI con il Bando Impresa Digitale fino al 50%.`,
      farmaceutica: `Incentivi AI per la farmaceutica in Sardegna. Il settore farmaceutico sardo puo accedere a Sardegna Ricerche con contributi fino a 100.000 \u20AC per tracciabilita farmaci AI.`,
      "food-beverage": `Bandi per l'AI nel food & beverage in Sardegna. La filiera casearia e vinicola sarda puo finanziare tracciabilita AI e certificazioni DOP con contributi fino a 150.000 \u20AC.`,
      "edilizia-immobiliare": `Incentivi AI per l'edilizia in Sardegna. Le imprese edili sarde possono accedere a contributi fino al 50% per BIM e gestione cantieri AI con il Bando Impresa Digitale.`,
      "sanita-privata": `Bandi per l'AI nella sanita privata in Sardegna. Le cliniche private e studi medici sardi possono finanziare front-office AI e gestione pazienti con contributi fino a 100.000 \u20AC.`,
    },
  };

  return descriptions[regione]?.[settore] || "";
}

// Generate all 100 combinations
export const INCENTIVI_SETTORIALI: IncentivoSettoriale[] = REGIONI_SETTORIALI.flatMap(
  (regione) =>
    SETTORI_SETTORIALI.map((settore) => {
      const regioneName = regione.name;
      const settoreName = settore.name;
      const settoreArticle = settore.nameArticle;

      return {
        slug: `${regione.slug}-${settore.slug}`,
        regione: regioneName,
        settore: settoreName,
        title: `Incentivi AI per ${settoreArticle} in ${regioneName}`,
        description: generateDescription(regione.slug, settore.slug),
        bandiSpecifici: BANDI_REGIONALI[regione.slug]?.[settore.slug] || [],
        incentiviNazionali: INCENTIVI_NAZIONALI[settore.slug] || [],
      };
    })
);
