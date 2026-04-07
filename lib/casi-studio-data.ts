export type CasoStudio = {
  slug: string;
  title: string;
  sector: string;
  company: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
  timeline: string;
  investment: string;
  tags: string[];
};

export const CASI_STUDIO: CasoStudio[] = [
  {
    slug: "automazione-ordini-b2b-distribuzione-alimentare-veneto",
    title: "Automazione Ordini B2B per Distributore Alimentare",
    sector: "Distribuzione B2B & Grossisti",
    company: "Distributore alimentare del Veneto - 85 dipendenti, 2.400 clienti HORECA",
    challenge:
      "Il distributore riceveva oltre 600 ordini al giorno via email, telefono, WhatsApp e fax. Il team di 8 operatori dedicati alla presa ordini commetteva errori nel 12% dei casi, con ritardi di evasione e resi costosi. I clienti HORECA lamentavano tempi di risposta lenti e impossibilita di ordinare fuori orario.",
    solution:
      "Implementazione di un agente AI omnicanale che legge e interpreta ordini da email, PDF, messaggi WhatsApp e chiamate vocali. L'agente verifica automaticamente disponibilita, prezzi e condizioni cliente, genera la conferma d'ordine e la inserisce nel gestionale ERP. Per i casi ambigui, l'agente chiede conferma all'operatore umano prima di procedere.",
    results: [
      { metric: "Ordini gestiti automaticamente", value: "78%" },
      { metric: "Errori di presa ordini", value: "-91% (da 12% a 1,1%)" },
      { metric: "Tempo medio evasione", value: "-65% (da 4h a 1,4h)" },
      { metric: "Resi per errore ordine", value: "-85%" },
      { metric: "Operatori riallocati ad attivita a valore", value: "5 su 8" },
    ],
    timeline: "8 settimane (4 sviluppo + 2 test + 2 go-live graduale)",
    investment: "45.000 - 65.000 \u20AC (coperto al 50% con PNRR Digitalizzazione PMI)",
    tags: ["ordini B2B", "HORECA", "distribuzione", "agente AI", "Veneto"],
  },
  {
    slug: "customer-service-ai-manifattura-lombardia",
    title: "Customer Service AI per Azienda Manifatturiera",
    sector: "Manifattura",
    company: "Azienda manifatturiera della Lombardia - 120 dipendenti, produzione componenti meccanici di precisione",
    challenge:
      "Il customer service tecnico B2B riceveva 200+ richieste settimanali su specifiche tecniche, stato ordini, certificazioni e tempistiche di consegna. Il team di 3 persone non riusciva a gestire il volume, con tempi di risposta medi di 48 ore e clienti insoddisfatti che cercavano fornitori alternativi.",
    solution:
      "Agente AI addestrato su catalogo prodotti, specifiche tecniche, certificazioni e stato ordini dal gestionale. Risponde in autonomia alle richieste ricorrenti (80% del volume) via email e chat. Per le richieste complesse, raccoglie le informazioni e le instrada al tecnico competente con un brief strutturato.",
    results: [
      { metric: "Tempo medio prima risposta", value: "-94% (da 48h a 3h)" },
      { metric: "Richieste gestite senza intervento umano", value: "72%" },
      { metric: "Customer satisfaction score", value: "+35% (da 6.2 a 8.4/10)" },
      { metric: "Clienti recuperati", value: "12 clienti persi riattivati" },
      { metric: "Fatturato incrementale", value: "+180.000 \u20AC/anno" },
    ],
    timeline: "6 settimane (3 sviluppo + 1 training AI + 2 go-live)",
    investment: "35.000 - 50.000 \u20AC (credito d'imposta Industria 4.0 del 20%)",
    tags: ["customer service", "manifattura", "B2B", "agente AI", "Lombardia"],
  },
  {
    slug: "quality-control-visivo-produttore-meccanico-emilia-romagna",
    title: "Controllo Qualita Visivo AI per Produttore Meccanico",
    sector: "Manifattura",
    company: "Produttore di componenti meccanici dell'Emilia-Romagna - 65 dipendenti, 3 linee di produzione",
    challenge:
      "Il controllo qualita manuale a fine linea identificava solo il 87% dei difetti, con un tasso di resi dal cliente del 3,5%. Ogni reso costava mediamente 1.200 \u20AC tra logistica, rilavorazione e danno d'immagine. Il costo annuo dei resi superava i 180.000 \u20AC.",
    solution:
      "Sistema di visione artificiale con telecamere ad alta risoluzione posizionate a fine linea. L'AI identifica difetti superficiali, dimensionali e di finitura in tempo reale, classificando ogni pezzo come conforme, da rilavorare o da scartare. Dashboard di qualita con trend e alert per la manutenzione preventiva degli stampi.",
    results: [
      { metric: "Difetti identificati", value: "99,2% (da 87%)" },
      { metric: "Tasso resi cliente", value: "-89% (da 3,5% a 0,4%)" },
      { metric: "Costo annuo resi", value: "-160.000 \u20AC" },
      { metric: "Velocita ispezione", value: "+400% (0,3s per pezzo vs 8s manuale)" },
      { metric: "ROI primo anno", value: "3,8x" },
    ],
    timeline: "12 settimane (6 sviluppo + 3 training modello + 3 calibrazione)",
    investment: "70.000 - 95.000 \u20AC (Transizione 5.0 fino al 45%)",
    tags: ["quality control", "visione artificiale", "manifattura", "Emilia-Romagna"],
  },
  {
    slug: "ottimizzazione-rotte-logistica-piemonte",
    title: "Ottimizzazione Rotte AI per Azienda di Logistica",
    sector: "Logistica & Trasporti",
    company: "Azienda di logistica e trasporti del Piemonte - 45 dipendenti, flotta di 28 mezzi",
    challenge:
      "La pianificazione manuale delle rotte generava il 22% di km a vuoto, con costi carburante elevati e ritardi frequenti. I dispatcher impiegavano 3 ore ogni mattina per pianificare le consegne del giorno, spesso con risultati subottimali.",
    solution:
      "Piattaforma AI di ottimizzazione rotte che considera finestre di consegna, capacita mezzi, traffico in tempo reale, priorita clienti e vincoli normativi. Il sistema suggerisce le rotte ottimali e si aggiorna dinamicamente durante la giornata. Integrata con il TMS aziendale e i dispositivi GPS della flotta.",
    results: [
      { metric: "Km a vuoto", value: "-62% (da 22% a 8,4%)" },
      { metric: "Costo carburante mensile", value: "-28.000 \u20AC" },
      { metric: "Consegne puntuali", value: "+34% (da 71% a 95%)" },
      { metric: "Tempo pianificazione giornaliera", value: "-85% (da 3h a 25min)" },
      { metric: "Emissioni CO2 annue", value: "-18 tonnellate" },
    ],
    timeline: "10 settimane (5 sviluppo + 3 integrazione TMS + 2 go-live)",
    investment: "55.000 - 75.000 \u20AC (Transizione 5.0 fino al 45% per riduzione emissioni)",
    tags: ["logistica", "ottimizzazione rotte", "fleet management", "Piemonte"],
  },
  {
    slug: "revenue-management-catena-hotel-toscana",
    title: "Revenue Management AI per Catena Hotel",
    sector: "Turismo & Ospitalita",
    company: "Catena di 4 hotel in Toscana - 95 dipendenti, 280 camere totali tra Firenze, Siena e costa toscana",
    challenge:
      "I prezzi delle camere venivano aggiornati manualmente 2 volte a settimana basandosi su intuizione ed esperienza. L'occupazione media annua era del 62% con un RevPAR di 78 \u20AC, significativamente sotto il potenziale del mercato toscano. Nessuna differenziazione dinamica tra canali di vendita.",
    solution:
      "Sistema di revenue management AI che analizza in tempo reale: occupazione, booking pace, eventi locali, meteo, competitor pricing, storico stagionale e domanda per canale. Aggiorna i prezzi automaticamente su tutti i canali (booking engine, OTA, tour operator) ogni 4 ore con strategia differenziata per segmento.",
    results: [
      { metric: "RevPAR medio", value: "+41% (da 78 a 110 \u20AC)" },
      { metric: "Occupazione media annua", value: "+12 punti (da 62% a 74%)" },
      { metric: "Fatturato camere", value: "+620.000 \u20AC/anno" },
      { metric: "Tempo gestione pricing", value: "-90% (da 15h/sett a 1,5h)" },
      { metric: "ADR bassa stagione", value: "+28%" },
    ],
    timeline: "8 settimane (4 sviluppo + 2 integrazione PMS/channel manager + 2 tuning)",
    investment: "40.000 - 60.000 \u20AC (Bando Innovazione Digitale fino a 100.000 \u20AC)",
    tags: ["revenue management", "hotel", "turismo", "pricing AI", "Toscana"],
  },
  {
    slug: "gestione-documentale-cantieri-costruzioni-lazio",
    title: "Gestione Documentale AI per Impresa di Costruzioni",
    sector: "Edilizia & Immobiliare",
    company: "Impresa di costruzioni del Lazio - 180 dipendenti, 12 cantieri attivi contemporaneamente",
    challenge:
      "La gestione di SAL, DDT, bolle, documenti di sicurezza e certificazioni dei subappaltatori era interamente cartacea e frammentata. Ogni cantiere generava 400+ documenti al mese. Ritardi nella raccolta documenti causavano slittamenti nei pagamenti di 45 giorni medi e contenziosi con committenti.",
    solution:
      "Piattaforma di gestione documentale con AI che acquisisce documenti da foto, email e scan, li classifica automaticamente, estrae i dati chiave (importi, date, riferimenti), verifica completezza e conformita, e genera alert per scadenze e documenti mancanti. Dashboard per direttori lavori con stato avanzamento in tempo reale.",
    results: [
      { metric: "Tempo gestione documenti", value: "-75% (da 40h/sett a 10h)" },
      { metric: "Ritardo medio pagamenti", value: "-60% (da 45 a 18 giorni)" },
      { metric: "Documenti mancanti alla chiusura SAL", value: "-92%" },
      { metric: "Contenziosi documentali", value: "-80%" },
      { metric: "Cash flow migliorato", value: "+320.000 \u20AC/anno" },
    ],
    timeline: "10 settimane (5 sviluppo + 3 integrazione + 2 rollout cantieri)",
    investment: "60.000 - 85.000 \u20AC (PNRR Digitalizzazione PMI fino al 50%)",
    tags: ["edilizia", "gestione documentale", "cantieri", "BIM", "Lazio"],
  },
  {
    slug: "procurement-intelligence-manifattura-veneto",
    title: "Procurement Intelligence AI per Manifattura",
    sector: "Manifattura",
    company: "Azienda manifatturiera del Veneto - 200 dipendenti, 350+ fornitori attivi, 15.000 codici articolo",
    challenge:
      "Il procurement gestiva 350 fornitori con spreadsheet e memoria storica del buyer senior. Nessuna analisi sistematica dei prezzi, nessun benchmarking tra fornitori e frequenti stock-out per mancata previsione dei lead time. Il costo degli approvvigionamenti rappresentava il 58% del fatturato.",
    solution:
      "Piattaforma di procurement intelligence AI che analizza storico ordini, prezzi, lead time e affidabilita di ogni fornitore. Genera raccomandazioni di acquisto basate su demand forecasting, suggerisce fornitori alternativi con benchmarking prezzi, e invia alert per rinegoziazioni strategiche e rischi di stock-out.",
    results: [
      { metric: "Costo medio approvvigionamenti", value: "-8,5% (saving 420.000 \u20AC/anno)" },
      { metric: "Stock-out", value: "-73% (da 15 a 4 episodi/mese)" },
      { metric: "Tempo analisi fornitori", value: "-80%" },
      { metric: "Lead time medio", value: "-12% grazie a fornitori alternativi" },
      { metric: "ROI primo anno", value: "5,2x" },
    ],
    timeline: "12 settimane (6 sviluppo + 3 integrazione ERP + 3 training modello)",
    investment: "65.000 - 90.000 \u20AC (Credito d'imposta Industria 4.0 del 20%)",
    tags: ["procurement", "supply chain", "manifattura", "fornitori", "Veneto"],
  },
  {
    slug: "hr-automation-servizi-professionali-milano",
    title: "HR Automation AI per Societa di Servizi Professionali",
    sector: "Servizi Professionali",
    company: "Societa di consulenza e servizi professionali di Milano - 350 dipendenti, 4 sedi in Italia",
    challenge:
      "Il team HR di 6 persone gestiva 2.000+ candidature annue, onboarding di 80 nuovi assunti e 350 dipendenti. L'80% del tempo era dedicato ad attivita ripetitive: screening CV, scheduling colloqui, gestione documentazione e risposte a domande ricorrenti su buste paga, ferie e benefit.",
    solution:
      "Suite di agenti AI per HR: (1) screening automatico CV con matching su job requirements e scoring candidati, (2) chatbot interno per dipendenti che risponde a domande su policy, buste paga e benefit, (3) automazione workflow di onboarding con checklist intelligente e document collection automatizzata.",
    results: [
      { metric: "Tempo screening candidature", value: "-85% (da 20min a 3min per CV)" },
      { metric: "Time-to-hire medio", value: "-40% (da 45 a 27 giorni)" },
      { metric: "Richieste HR gestite dal chatbot", value: "68% senza intervento umano" },
      { metric: "Tempo onboarding documentale", value: "-70%" },
      { metric: "Soddisfazione dipendenti su servizi HR", value: "+42%" },
    ],
    timeline: "10 settimane (5 sviluppo + 3 integrazione HRMS + 2 go-live)",
    investment: "50.000 - 70.000 \u20AC (Voucher Innovation Manager fino a 80.000 \u20AC)",
    tags: ["HR", "recruiting", "servizi professionali", "chatbot", "Milano"],
  },
  {
    slug: "demand-forecasting-food-beverage-campania",
    title: "Demand Forecasting AI per Food & Beverage",
    sector: "Food & Beverage",
    company: "Produttore alimentare della Campania - 110 dipendenti, 800 referenze, distribuzione nazionale",
    challenge:
      "La previsione della domanda era basata su medie storiche e intuizione dei commerciali. Lo scarto medio tra previsione e venduto era del 35%, causando: 280.000 \u20AC/anno di sprechi per prodotti scaduti, stock-out ricorrenti sulle referenze best-seller e costi di produzione non ottimizzati per lotti di emergenza.",
    solution:
      "Modello di demand forecasting AI che integra: storico vendite per referenza/canale/area, stagionalita, promozioni pianificate, trend di mercato, meteo e eventi. Genera previsioni settimanali per referenza con intervalli di confidenza, suggerisce piani di produzione ottimizzati e anticipa le esigenze di acquisto materie prime.",
    results: [
      { metric: "Errore previsionale medio", value: "-68% (da 35% a 11%)" },
      { metric: "Sprechi prodotti scaduti", value: "-220.000 \u20AC/anno" },
      { metric: "Stock-out su best-seller", value: "-82%" },
      { metric: "Costi lotti di emergenza", value: "-75%" },
      { metric: "Margine operativo", value: "+3,2 punti percentuali" },
    ],
    timeline: "14 settimane (6 data engineering + 4 modello + 2 integrazione + 2 tuning)",
    investment: "55.000 - 80.000 \u20AC (PNRR Digitalizzazione PMI fino al 50%)",
    tags: ["demand forecasting", "food & beverage", "produzione", "sprechi", "Campania"],
  },
  {
    slug: "front-office-ai-clinica-privata-roma",
    title: "Front-Office AI per Clinica Privata",
    sector: "Sanita Privata",
    company: "Clinica privata polispecialistica di Roma - 45 medici, 30 dipendenti, 180 visite/giorno",
    challenge:
      "Il centralino riceveva 300+ chiamate al giorno di cui il 40% andava perso per linee occupate. I no-show alle visite erano al 18%, con un mancato incasso di 15.000 \u20AC/mese. Il personale di front-office dedicava l'80% del tempo a rispondere a domande ripetitive su orari, preparazione esami e coperture assicurative.",
    solution:
      "Agente AI per il front-office che gestisce: (1) prenotazioni vocali e via chat 24/7, (2) invio automatico reminder via SMS/WhatsApp con istruzioni di preparazione, (3) risposte automatiche su orari, tariffe, preparazione esami e convenzioni, (4) gestione cancellazioni e riassegnazione slot liberi ad altri pazienti in lista d'attesa.",
    results: [
      { metric: "Chiamate perse", value: "-92% (da 40% a 3%)" },
      { metric: "No-show alle visite", value: "-72% (da 18% a 5%)" },
      { metric: "Mancato incasso recuperato", value: "+12.000 \u20AC/mese" },
      { metric: "Prenotazioni fuori orario", value: "+35% del totale (prima 0%)" },
      { metric: "Tempo front-office su attivita ripetitive", value: "-70%" },
    ],
    timeline: "6 settimane (3 sviluppo + 1 integrazione gestionale + 2 go-live)",
    investment: "30.000 - 45.000 \u20AC (Bando Innovazione Digitale fino a 100.000 \u20AC)",
    tags: ["sanita", "front-office", "prenotazioni", "no-show", "Roma"],
  },
  {
    slug: "lead-scoring-distribuzione-b2b-lombardia",
    title: "Lead Scoring AI per Distribuzione B2B",
    sector: "Distribuzione B2B & Grossisti",
    company: "Distributore B2B di materiale elettrico in Lombardia - 60 dipendenti, 15 agenti commerciali",
    challenge:
      "I 15 agenti commerciali gestivano 3.200 clienti senza prioritizzazione. Il 70% del tempo veniva dedicato a clienti a basso potenziale. Il tasso di conversione su nuovi clienti era del 4% e il churn rate annuo del 15% perche i clienti strategici non ricevevano attenzione sufficiente.",
    solution:
      "Sistema di lead scoring e customer intelligence AI che analizza: storico acquisti, frequenza ordini, marginalita, trend di crescita, settore merceologico e comportamento di acquisto. Genera un ranking dinamico dei clienti e suggerisce azioni specifiche: cross-selling, visite prioritarie, offerte personalizzate e alert su rischio churn.",
    results: [
      { metric: "Tasso conversione nuovi clienti", value: "+175% (da 4% a 11%)" },
      { metric: "Churn rate annuo", value: "-53% (da 15% a 7%)" },
      { metric: "Fatturato per agente", value: "+22%" },
      { metric: "Cross-selling riuscito", value: "+65% su clienti target" },
      { metric: "Fatturato incrementale annuo", value: "+380.000 \u20AC" },
    ],
    timeline: "8 settimane (4 sviluppo + 2 integrazione CRM + 2 training agenti)",
    investment: "40.000 - 55.000 \u20AC (PNRR Digitalizzazione PMI fino al 50%)",
    tags: ["lead scoring", "distribuzione B2B", "CRM", "vendite", "Lombardia"],
  },
  {
    slug: "riconciliazione-bancaria-studio-commercialista",
    title: "Riconciliazione Bancaria AI per Studio Commercialista",
    sector: "Servizi Professionali",
    company: "Studio commercialista associato - 18 professionisti, 450 clienti tra PMI e professionisti",
    challenge:
      "La riconciliazione bancaria per 450 clienti richiedeva 320 ore/mese di lavoro manuale. Gli errori di abbinamento erano frequenti (5%) e le scadenze fiscali creavano picchi di lavoro insostenibili. Il team dedicava troppo tempo ad attivita a basso valore, limitando la capacita di offrire consulenza strategica.",
    solution:
      "Agente AI di riconciliazione bancaria che: (1) importa automaticamente estratti conto da 12 banche diverse, (2) abbina movimenti a fatture emesse/ricevute con matching intelligente, (3) classifica automaticamente le spese per categoria contabile, (4) segnala anomalie e movimenti non riconciliabili per revisione umana.",
    results: [
      { metric: "Ore mensili di riconciliazione", value: "-82% (da 320h a 58h)" },
      { metric: "Errori di abbinamento", value: "-94% (da 5% a 0,3%)" },
      { metric: "Clienti gestiti per collaboratore", value: "+45%" },
      { metric: "Tempo liberato per consulenza", value: "+260 ore/mese" },
      { metric: "Nuovi clienti acquisiti (capacita)", value: "+80 in 12 mesi" },
    ],
    timeline: "8 settimane (4 sviluppo + 2 integrazione software contabile + 2 testing)",
    investment: "35.000 - 50.000 \u20AC (Voucher Innovation Manager fino a 80.000 \u20AC)",
    tags: ["contabilita", "riconciliazione", "studio commercialista", "automazione"],
  },
  {
    slug: "gestione-campionario-moda-toscana",
    title: "Gestione Campionario AI per Azienda di Moda",
    sector: "Retail, Fashion & Design",
    company: "Azienda di moda del distretto toscano - 80 dipendenti, 1.200 referenze a stagione, export 60%",
    challenge:
      "La gestione del campionario stagionale (1.200 referenze, 4 collezioni/anno) era manuale: fotografia, catalogazione, creazione schede tecniche e line sheet per buyer internazionali. Il processo richiedeva 6 settimane e 3 persone dedicate per ogni collezione, con ritardi che penalizzavano la campagna vendite.",
    solution:
      "Piattaforma AI per la gestione campionario che: (1) classifica automaticamente i capi per categoria, colore, materiale e vestibilita dalla foto, (2) genera schede tecniche strutturate con specifiche estratte, (3) crea line sheet personalizzati per mercato e buyer, (4) traduce automaticamente contenuti in 5 lingue.",
    results: [
      { metric: "Tempo creazione campionario digitale", value: "-70% (da 6 a 1,8 settimane)" },
      { metric: "Costo per collezione", value: "-55.000 \u20AC" },
      { metric: "Errori nelle schede tecniche", value: "-88%" },
      { metric: "Buyer raggiunti con line sheet personalizzati", value: "+40%" },
      { metric: "Ordini da nuovi mercati", value: "+18% nel primo anno" },
    ],
    timeline: "10 settimane (5 sviluppo + 3 training modello su storico + 2 go-live)",
    investment: "50.000 - 70.000 \u20AC (Bando Moda e Design Digitale Toscana fino a 120.000 \u20AC)",
    tags: ["moda", "campionario", "fashion", "catalogo", "Toscana"],
  },
  {
    slug: "concierge-multilingue-resort-sardegna",
    title: "Concierge AI Multilingue per Resort",
    sector: "Turismo & Ospitalita",
    company: "Resort 5 stelle in Sardegna - 120 dipendenti stagionali, 85 camere, clientela 70% internazionale",
    challenge:
      "Il concierge desk gestiva 150+ richieste/giorno in alta stagione da ospiti che parlavano 8+ lingue diverse. Solo 2 addetti parlavano fluentemente inglese e tedesco. Le richieste di prenotazione ristoranti, escursioni e servizi spa andavano perse o gestite con ritardi, penalizzando l'esperienza e le review online (score medio 8.2/10).",
    solution:
      "Concierge AI multilingue accessibile via WhatsApp, chat in-app e totem nella lobby, che gestisce richieste in 12 lingue: prenotazione ristoranti e esperienze, informazioni su servizi del resort, suggerimenti personalizzati basati su preferenze dell'ospite e condizioni meteo, prenotazione transfer e escursioni con partner locali.",
    results: [
      { metric: "Richieste gestite senza intervento umano", value: "65%" },
      { metric: "Revenue da servizi ancillari", value: "+45% (escursioni, spa, ristoranti)" },
      { metric: "Review score medio", value: "+0,6 punti (da 8.2 a 8.8/10)" },
      { metric: "Upselling automatico", value: "+120.000 \u20AC/stagione" },
      { metric: "Lingue supportate", value: "12 (prima 3)" },
    ],
    timeline: "8 settimane (4 sviluppo + 2 integrazione PMS + 2 pre-stagione)",
    investment: "45.000 - 65.000 \u20AC (Bando Turismo Sardegna Digitale fino a 120.000 \u20AC)",
    tags: ["concierge", "resort", "multilingue", "turismo", "Sardegna"],
  },
  {
    slug: "tracciabilita-filiera-vitivinicolo-veneto",
    title: "Tracciabilita Filiera AI nel Vitivinicolo",
    sector: "Food & Beverage",
    company: "Cantina vitivinicola del Veneto - 35 dipendenti, 800.000 bottiglie/anno, export 45%",
    challenge:
      "La tracciabilita della filiera vitivinicola era gestita con registri cartacei e spreadsheet. La certificazione DOC/DOCG richiedeva settimane di lavoro manuale per raccogliere e verificare i dati. I buyer internazionali chiedevano sempre piu trasparenza sulla filiera per i mercati nordici e anglosassoni.",
    solution:
      "Sistema di tracciabilita AI che monitora l'intera filiera: (1) acquisisce dati da sensori in vigna (meteo, suolo, maturazione), (2) registra automaticamente tutte le operazioni di cantina, (3) genera il passaporto digitale di ogni bottiglia con QR code, (4) automatizza la documentazione per certificazioni DOC/DOCG.",
    results: [
      { metric: "Tempo certificazione DOC/DOCG", value: "-80% (da 3 settimane a 3 giorni)" },
      { metric: "Errori documentazione", value: "-95%" },
      { metric: "Prezzo medio bottiglia export", value: "+12% (premium trasparenza)" },
      { metric: "Nuovi buyer acquisiti (trasparenza filiera)", value: "+8 in 12 mesi" },
      { metric: "Engagement consumatore QR code", value: "22% scansioni su prodotto" },
    ],
    timeline: "14 settimane (6 sviluppo + 4 integrazione sensori + 4 testing vendemmia)",
    investment: "60.000 - 85.000 \u20AC (Bando Filiera Agroalimentare Veneto fino a 250.000 \u20AC)",
    tags: ["vitivinicolo", "tracciabilita", "DOC", "filiera", "Veneto"],
  },
  {
    slug: "automazione-fatture-pmi-manifatturiera",
    title: "Automazione Fatture AI per PMI Manifatturiera",
    sector: "Manifattura",
    company: "PMI manifatturiera del Nord Italia - 40 dipendenti, 2.500 fatture passive/anno da 180 fornitori",
    challenge:
      "La gestione di 2.500 fatture passive annue era interamente manuale: ricezione via email/PEC, registrazione nel gestionale, verifica con DDT e ordini, approvazione e pagamento. Il processo richiedeva 2 persone full-time con errori nel 7% dei casi e ritardi che causavano la perdita di sconti per pagamento anticipato (25.000 \u20AC/anno).",
    solution:
      "Agente AI per la gestione del ciclo passivo che: (1) acquisisce fatture da email, PEC e SDI, (2) estrae automaticamente tutti i dati (fornitore, importi, voci, IVA), (3) abbina a ordini e DDT corrispondenti, (4) verifica correttezza contabile e segnala anomalie, (5) predispone il file per la registrazione contabile.",
    results: [
      { metric: "Tempo registrazione fatture", value: "-78% (da 15min a 3,3min per fattura)" },
      { metric: "Errori di registrazione", value: "-93% (da 7% a 0,5%)" },
      { metric: "Sconti pagamento anticipato recuperati", value: "+22.000 \u20AC/anno" },
      { metric: "Personale riallocato", value: "1,5 FTE ad attivita di controllo e analisi" },
      { metric: "ROI primo anno", value: "4,1x" },
    ],
    timeline: "6 settimane (3 sviluppo + 2 integrazione gestionale + 1 go-live)",
    investment: "25.000 - 40.000 \u20AC (Nuova Sabatini - contributo in conto interessi)",
    tags: ["fatturazione", "ciclo passivo", "automazione", "PMI", "contabilita"],
  },
  {
    slug: "chatbot-interno-grande-distribuzione",
    title: "Chatbot Interno AI per Grande Distribuzione",
    sector: "Distribuzione B2B & Grossisti",
    company: "Catena di grande distribuzione organizzata - 1.200 dipendenti, 18 punti vendita nel Nord Italia",
    challenge:
      "I 1.200 dipendenti su 18 punti vendita generavano 500+ richieste settimanali alla sede: domande su procedure operative, gestione turni, richieste HR, segnalazioni IT e dubbi su promozioni in corso. Il team di sede impiegava 3 persone full-time solo per rispondere a queste richieste, con tempi medi di risposta di 24 ore.",
    solution:
      "Chatbot interno AI accessibile via app aziendale e computer in store, addestrato su: (1) procedure operative e manuali di vendita, (2) policy HR (turni, ferie, malattia, buste paga), (3) schede prodotto e promozioni in corso, (4) procedure IT e troubleshooting. Escalation automatica al reparto competente per richieste complesse.",
    results: [
      { metric: "Richieste gestite automaticamente", value: "74%" },
      { metric: "Tempo medio risposta", value: "-96% (da 24h a 45 secondi)" },
      { metric: "Personale sede riallocato", value: "2 FTE su attivita strategiche" },
      { metric: "Errori procedurali in store", value: "-35%" },
      { metric: "Soddisfazione dipendenti (survey)", value: "+28 punti NPS" },
    ],
    timeline: "10 settimane (4 sviluppo + 3 knowledge base + 3 rollout graduale)",
    investment: "55.000 - 75.000 \u20AC (Credito d'imposta Formazione 4.0 per componente training)",
    tags: ["chatbot", "GDO", "comunicazione interna", "HR", "retail"],
  },
  {
    slug: "email-automation-servizi-finanziari",
    title: "Email Automation AI per Servizi Finanziari",
    sector: "Servizi Professionali",
    company: "Societa di consulenza finanziaria indipendente - 25 consulenti, 1.800 clienti gestiti",
    challenge:
      "Ogni consulente riceveva 80+ email/giorno da clienti, banche, SGR e compagnie assicurative. Il 60% delle email richiedeva solo classificazione, inoltro o risposte standard (conferme di ricezione, stato pratiche, documenti richiesti). I consulenti perdevano 3 ore/giorno in gestione email a scapito della relazione col cliente.",
    solution:
      "Agente AI per la gestione email che: (1) classifica automaticamente le email per tipologia, urgenza e cliente, (2) genera bozze di risposta per richieste standard, (3) estrae allegati e li archivia nel fascicolo cliente corretto, (4) invia alert per comunicazioni urgenti e scadenze, (5) genera un digest giornaliero per ogni consulente.",
    results: [
      { metric: "Tempo gestione email per consulente", value: "-65% (da 3h a 1h/giorno)" },
      { metric: "Email classificate automaticamente", value: "92%" },
      { metric: "Risposte generate (bozze approvate)", value: "58% del volume" },
      { metric: "Tempo consulenza recuperato", value: "+50h/mese per team" },
      { metric: "AUM incrementale (piu tempo relazione)", value: "+8% in 12 mesi" },
    ],
    timeline: "8 settimane (4 sviluppo + 2 integrazione CRM + 2 go-live)",
    investment: "35.000 - 50.000 \u20AC (Voucher Innovation Manager fino a 80.000 \u20AC)",
    tags: ["email automation", "servizi finanziari", "consulenza", "CRM"],
  },
  {
    slug: "digital-twin-impianto-industriale",
    title: "Digital Twin AI per Impianto Industriale",
    sector: "Manifattura",
    company: "Impianto di produzione industriale del Piemonte - 250 dipendenti, 3 linee di produzione continua",
    challenge:
      "I fermi macchina non pianificati costavano mediamente 15.000 \u20AC/ora di mancata produzione. La manutenzione era puramente reattiva o basata su calendari fissi, con il 40% degli interventi programmati risultati non necessari e il 25% dei guasti che coglievano di sorpresa. Il downtime non pianificato era di 180 ore/anno.",
    solution:
      "Digital twin AI dell'impianto che integra dati da 200+ sensori IoT (vibrazioni, temperatura, pressione, consumo energetico). Il modello prevede guasti con 72h di anticipo, suggerisce la finestra ottimale di manutenzione e simula scenari what-if per ottimizzare i parametri di produzione. Dashboard in tempo reale per il responsabile di stabilimento.",
    results: [
      { metric: "Downtime non pianificato", value: "-78% (da 180 a 40 ore/anno)" },
      { metric: "Mancata produzione evitata", value: "+2.100.000 \u20AC/anno" },
      { metric: "Interventi manutenzione inutili", value: "-60%" },
      { metric: "Efficienza energetica", value: "+12% (ottimizzazione parametri)" },
      { metric: "OEE (Overall Equipment Effectiveness)", value: "+15 punti (da 68% a 83%)" },
    ],
    timeline: "16 settimane (6 infrastruttura IoT + 4 modello AI + 4 integrazione + 2 tuning)",
    investment: "120.000 - 180.000 \u20AC (Transizione 5.0 fino al 45% + risparmio energetico certificato)",
    tags: ["digital twin", "manutenzione predittiva", "IoT", "industria", "Piemonte"],
  },
  {
    slug: "ai-agent-customer-service-ecommerce-fashion",
    title: "AI Agent per Customer Service E-commerce Fashion",
    sector: "Retail, Fashion & Design",
    company: "E-commerce fashion italiano - 35 dipendenti, 120.000 ordini/anno, 85% clientela italiana, 15% internazionale",
    challenge:
      "Il customer service gestiva 800+ ticket/giorno di cui l'80% erano richieste ripetitive: stato ordine, resi e rimborsi, taglie e vestibilita, disponibilita prodotto. Il team di 6 operatori era costantemente sotto pressione con tempi di risposta medi di 18 ore e un CSAT di 6.8/10. In alta stagione (Black Friday, saldi) il servizio collassava.",
    solution:
      "AI agent per il customer service che gestisce autonomamente: (1) tracking ordini con aggiornamenti proattivi, (2) processo resi e rimborsi end-to-end, (3) consigli taglia basati su storico acquisti e tabelle del brand, (4) disponibilita e alternative prodotto, (5) FAQ e policy. Escalation intelligente agli operatori per casi complessi con contesto completo.",
    results: [
      { metric: "Ticket gestiti automaticamente", value: "76%" },
      { metric: "Tempo medio prima risposta", value: "-97% (da 18h a 30 secondi)" },
      { metric: "CSAT score", value: "+2,8 punti (da 6.8 a 9.6/10)" },
      { metric: "Tasso di reso per taglia errata", value: "-45%" },
      { metric: "Costo per ticket", value: "-68% (da 4.50 a 1.45 \u20AC)" },
      { metric: "Conversione da interazione CS", value: "+22% (upselling contestuale)" },
    ],
    timeline: "8 settimane (4 sviluppo + 2 integrazione e-commerce + 2 go-live)",
    investment: "40.000 - 60.000 \u20AC (Bando Innovazione Digitale fino a 100.000 \u20AC)",
    tags: ["e-commerce", "customer service", "fashion", "agente AI", "resi"],
  },
];
