export type CasoDuso = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  sector: string;
  department: string;
};

export const DEPARTMENTS = [
  "Produttivita",
  "HR & Payroll",
  "Operazioni",
  "Logistica",
  "Procurement",
  "Comunicazione",
  "Sales & CRM",
  "Marketing",
] as const;

export const SECTORS = [
  "Trasversale",
  "Manifattura",
  "Logistica & Trasporti",
  "Food & Beverage",
  "Distribuzione B2B",
  "Servizi Professionali",
  "Edilizia & Immobiliare",
  "Retail & Fashion",
  "Farmaceutica",
  "Sanita Privata",
  "Turismo & Ospitalita",
] as const;

export const CASI_DUSO: CasoDuso[] = [
  // ──────────────────────────────────────────────────────────────────────
  // PRODUTTIVITA (5)
  // ──────────────────────────────────────────────────────────────────────
  {
    id: "assistenti-personali-ai",
    title: "ASSISTENTI PERSONALI AI",
    description:
      "Ogni dipendente riceve un assistente AI personale che risponde a domande, riassume documenti, prepara bozze email e organizza le attivita quotidiane riducendo il carico cognitivo.",
    bullets: [
      "Riduzione del 35% del tempo speso in attivita amministrative ripetitive per ogni dipendente",
      "Integrazione nativa con Google Workspace, Microsoft 365 e Slack per un flusso di lavoro senza interruzioni",
      "Risposte contestualizzate basate su storico conversazioni, ruolo aziendale e progetti attivi",
    ],
    tags: ["#PRODUTTIVITA", "#MULTI-MODELLO", "#ASSISTENTE"],
    sector: "Trasversale",
    department: "Produttivita",
  },
  {
    id: "copilota-ai-dipendente",
    title: "COPILOTA AI PER DIPENDENTE",
    description:
      "Un copilota AI integrato negli strumenti di lavoro quotidiani che suggerisce azioni, completa task e fornisce insight in tempo reale durante lo svolgimento delle attivita.",
    bullets: [
      "Aumento della produttivita individuale del 40% grazie a suggerimenti proattivi e automazione inline",
      "Completamento automatico di report, fogli di calcolo e presentazioni con dati aggiornati",
      "Apprendimento continuo dalle abitudini dell'utente per suggerimenti sempre piu precisi nel tempo",
    ],
    tags: ["#PRODUTTIVITA", "#COPILOTA", "#AUTOMAZIONE"],
    sector: "Trasversale",
    department: "Produttivita",
  },
  {
    id: "automazione-meeting-notes",
    title: "AUTOMAZIONE MEETING NOTES",
    description:
      "Trascrizione automatica, sintesi intelligente e distribuzione dei verbali di riunione con action item assegnati e scadenze tracciate.",
    bullets: [
      "Trascrizione in tempo reale con accuratezza del 97% in italiano, inglese e tedesco",
      "Estrazione automatica di decisioni, action item e owner con invio diretto su Notion, Asana o Jira",
      "Risparmio medio di 5 ore settimanali per manager nella gestione post-riunione",
    ],
    tags: ["#PRODUTTIVITA", "#MEETING", "#NLP"],
    sector: "Trasversale",
    department: "Produttivita",
  },
  {
    id: "knowledge-base-interna-ai",
    title: "KNOWLEDGE BASE INTERNA AI",
    description:
      "Una base di conoscenza aziendale interrogabile in linguaggio naturale che consolida documenti, procedure, policy e know-how disperso in un unico punto di accesso intelligente.",
    bullets: [
      "Riduzione del 60% del tempo di ricerca informazioni interne rispetto a cartelle condivise tradizionali",
      "Indicizzazione automatica di PDF, email, wiki, ticket e conversazioni Slack/Teams",
      "Risposte con citazione della fonte originale per garantire tracciabilita e compliance",
    ],
    tags: ["#PRODUTTIVITA", "#KNOWLEDGE-MANAGEMENT", "#RAG"],
    sector: "Trasversale",
    department: "Produttivita",
  },
  {
    id: "document-generation-automatica",
    title: "DOCUMENT GENERATION AUTOMATICA",
    description:
      "Generazione automatizzata di documenti aziendali standardizzati a partire da template, dati strutturati e input in linguaggio naturale.",
    bullets: [
      "Creazione di contratti, offerte, report e lettere in meno di 30 secondi con dati precompilati",
      "Conformita automatica a brand guidelines, formattazione aziendale e requisiti legali",
      "Integrazione con CRM ed ERP per popolare automaticamente dati cliente, prodotto e condizioni commerciali",
    ],
    tags: ["#PRODUTTIVITA", "#DOCUMENTI", "#AUTOMAZIONE"],
    sector: "Trasversale",
    department: "Produttivita",
  },

  // ──────────────────────────────────────────────────────────────────────
  // HR & PAYROLL (5)
  // ──────────────────────────────────────────────────────────────────────
  {
    id: "automazione-hr-payroll",
    title: "AUTOMAZIONE HR E PAYROLL",
    description:
      "Automatizzazione end-to-end dei processi HR e payroll, dalla gestione presenze al calcolo buste paga, eliminando errori manuali e riducendo i tempi di elaborazione.",
    bullets: [
      "Riduzione del 80% degli errori di elaborazione payroll grazie a validazione automatica dei dati",
      "Calcolo automatico di straordinari, ferie, malattia e variabili contrattuali per ogni CCNL",
      "Generazione automatica di cedolini, CU e adempimenti fiscali con invio diretto ai dipendenti",
    ],
    tags: ["#HR", "#PAYROLL", "#AUTOMAZIONE"],
    sector: "Trasversale",
    department: "HR & Payroll",
  },
  {
    id: "onboarding-digitale",
    title: "ONBOARDING DIGITALE",
    description:
      "Percorso di onboarding completamente digitalizzato con chatbot AI che guida il nuovo dipendente attraverso documenti, formazione e integrazione nel team.",
    bullets: [
      "Riduzione del tempo di onboarding da 3 settimane a 5 giorni con percorsi personalizzati per ruolo",
      "Raccolta automatica di documenti, firma digitale contratti e configurazione accessi IT in un unico flusso",
      "Chatbot dedicato che risponde alle domande del nuovo assunto 24/7 durante i primi 90 giorni",
    ],
    tags: ["#HR", "#ONBOARDING", "#CHATBOT"],
    sector: "Trasversale",
    department: "HR & Payroll",
  },
  {
    id: "screening-cv-ai",
    title: "SCREENING CV AI",
    description:
      "Analisi e ranking automatico dei CV ricevuti utilizzando AI per identificare i candidati piu in linea con i requisiti della posizione aperta.",
    bullets: [
      "Analisi di 500+ CV in meno di 10 minuti con scoring basato su competenze, esperienza e fit culturale",
      "Eliminazione dei bias inconsci grazie a valutazione anonimizzata e criteri oggettivi configurabili",
      "Integrazione con LinkedIn, Indeed e portali ATS per importazione automatica delle candidature",
    ],
    tags: ["#HR", "#RECRUITING", "#NLP"],
    sector: "Trasversale",
    department: "HR & Payroll",
  },
  {
    id: "workforce-planning-predittivo",
    title: "WORKFORCE PLANNING PREDITTIVO",
    description:
      "Modelli predittivi AI che analizzano trend di turnover, carichi di lavoro stagionali e gap di competenze per pianificare le esigenze di organico in anticipo.",
    bullets: [
      "Previsione del turnover con accuratezza dell'85% fino a 6 mesi in anticipo per interventi proattivi",
      "Simulazione di scenari what-if per valutare impatto di assunzioni, promozioni e riorganizzazioni",
      "Mappatura automatica delle competenze aziendali e identificazione dei gap critici per reparto",
    ],
    tags: ["#HR", "#PREDITTIVO", "#ANALYTICS"],
    sector: "Manifattura",
    department: "HR & Payroll",
  },
  {
    id: "compliance-contrattuale-automatizzata",
    title: "COMPLIANCE CONTRATTUALE AUTOMATIZZATA",
    description:
      "Monitoraggio continuo della conformita contrattuale e normativa del personale, con alert automatici per scadenze, rinnovi e aggiornamenti CCNL.",
    bullets: [
      "Tracciamento automatico di scadenze contratti, periodi di prova, rinnovi e obblighi formativi",
      "Aggiornamento in tempo reale alle modifiche normative CCNL con impatto calcolato su costi e processi",
      "Generazione automatica di lettere di variazione, proroghe e comunicazioni obbligatorie",
    ],
    tags: ["#HR", "#COMPLIANCE", "#LEGALE"],
    sector: "Trasversale",
    department: "HR & Payroll",
  },

  // ──────────────────────────────────────────────────────────────────────
  // OPERAZIONI (5)
  // ──────────────────────────────────────────────────────────────────────
  {
    id: "agenti-ai-operativi",
    title: "AGENTI AI OPERATIVI",
    description:
      "Agenti AI autonomi che eseguono task operativi complessi in sequenza, prendendo decisioni basate su regole aziendali e dati in tempo reale senza intervento umano.",
    bullets: [
      "Esecuzione autonoma di workflow multi-step con gestione eccezioni e escalation automatica",
      "Riduzione del 50% dei tempi di gestione ordini grazie a orchestrazione intelligente tra sistemi",
      "Dashboard di monitoraggio in tempo reale con log completo di ogni decisione presa dall'agente",
    ],
    tags: ["#OPERAZIONI", "#AGENTI-AI", "#WORKFLOW"],
    sector: "Trasversale",
    department: "Operazioni",
  },
  {
    id: "customer-service-automation",
    title: "CUSTOMER SERVICE AUTOMATION",
    description:
      "Automazione del servizio clienti con AI conversazionale che gestisce richieste, reclami e supporto tecnico su tutti i canali di contatto.",
    bullets: [
      "Gestione automatica del 70% delle richieste di primo livello senza intervento operatore",
      "Tempo medio di risposta ridotto da 4 ore a 30 secondi per richieste standard via chat, email e telefono",
      "Escalation intelligente agli operatori umani con contesto completo e suggerimento di risoluzione",
    ],
    tags: ["#OPERAZIONI", "#CUSTOMER-SERVICE", "#CHATBOT"],
    sector: "Distribuzione B2B",
    department: "Operazioni",
  },
  {
    id: "order-management-ai",
    title: "ORDER MANAGEMENT AI",
    description:
      "Gestione intelligente del ciclo ordine completo, dall'acquisizione alla fatturazione, con validazione automatica, routing e prioritizzazione AI-driven.",
    bullets: [
      "Riduzione del 90% degli errori di inserimento ordine grazie a parsing automatico da email, PDF e portali",
      "Routing intelligente degli ordini ai magazzini ottimali in base a disponibilita, costi e tempi di consegna",
      "Riconciliazione automatica tra ordini, DDT e fatture con segnalazione anomalie in tempo reale",
    ],
    tags: ["#OPERAZIONI", "#ORDER-MANAGEMENT", "#ERP"],
    sector: "Distribuzione B2B",
    department: "Operazioni",
  },
  {
    id: "quality-control-automatizzato",
    title: "QUALITY CONTROL AUTOMATIZZATO",
    description:
      "Sistemi di controllo qualita basati su computer vision e sensori IoT che ispezionano prodotti in tempo reale sulla linea di produzione.",
    bullets: [
      "Rilevamento difetti con accuratezza del 99.2% tramite analisi visiva AI su linea di produzione",
      "Riduzione degli scarti del 25% grazie a identificazione precoce di derive di processo",
      "Tracciabilita completa di ogni lotto con report qualita generati automaticamente per audit e certificazioni",
    ],
    tags: ["#OPERAZIONI", "#QUALITA", "#COMPUTER-VISION"],
    sector: "Manifattura",
    department: "Operazioni",
  },
  {
    id: "process-mining-ottimizzazione",
    title: "PROCESS MINING E OTTIMIZZAZIONE",
    description:
      "Analisi automatica dei flussi di lavoro aziendali tramite process mining per identificare colli di bottiglia, inefficienze e opportunita di automazione.",
    bullets: [
      "Mappatura automatica dei processi reali a partire dai log di ERP, CRM e sistemi operativi",
      "Identificazione di colli di bottiglia e varianti di processo che causano ritardi fino al 40%",
      "Suggerimenti AI di ottimizzazione con stima del ROI per ogni intervento proposto",
    ],
    tags: ["#OPERAZIONI", "#PROCESS-MINING", "#ANALYTICS"],
    sector: "Manifattura",
    department: "Operazioni",
  },

  // ──────────────────────────────────────────────────────────────────────
  // LOGISTICA (5)
  // ──────────────────────────────────────────────────────────────────────
  {
    id: "robotica-automazione-magazzino",
    title: "ROBOTICA PER AUTOMAZIONE MAGAZZINO",
    description:
      "Integrazione di robot autonomi e sistemi AI per la gestione del magazzino, dal ricevimento merci al picking, packing e spedizione.",
    bullets: [
      "Aumento della produttivita di picking del 300% con AMR (Autonomous Mobile Robots) coordinati da AI",
      "Riduzione degli errori di preparazione ordini al 0.1% grazie a verifica automatica via computer vision",
      "Ottimizzazione dinamica del layout magazzino basata su frequenza di prelievo e stagionalita",
    ],
    tags: ["#LOGISTICA", "#ROBOTICA", "#MAGAZZINO"],
    sector: "Logistica & Trasporti",
    department: "Logistica",
  },
  {
    id: "ottimizzazione-rotte-consegne",
    title: "OTTIMIZZAZIONE ROTTE CONSEGNE",
    description:
      "Algoritmi AI di route optimization che calcolano i percorsi di consegna ottimali considerando traffico, finestre di consegna, capacita mezzi e priorita cliente.",
    bullets: [
      "Riduzione del 20% dei chilometri percorsi e del 15% dei costi carburante su base mensile",
      "Ricalcolo dinamico delle rotte in tempo reale in base a traffico, meteo e cancellazioni",
      "Rispetto delle finestre di consegna nel 95% dei casi con ottimizzazione multi-vincolo",
    ],
    tags: ["#LOGISTICA", "#ROUTING", "#OTTIMIZZAZIONE"],
    sector: "Logistica & Trasporti",
    department: "Logistica",
  },
  {
    id: "inventory-management-predittivo",
    title: "INVENTORY MANAGEMENT PREDITTIVO",
    description:
      "Gestione predittiva delle scorte con AI che analizza storico vendite, stagionalita e trend di mercato per mantenere livelli di inventario ottimali.",
    bullets: [
      "Riduzione del 30% del capitale immobilizzato in magazzino mantenendo un service level del 98%",
      "Previsione della domanda con margine di errore inferiore al 10% su orizzonte di 12 settimane",
      "Alert automatici per riordino, overstock e rischio stockout con suggerimento quantita ottimale",
    ],
    tags: ["#LOGISTICA", "#INVENTARIO", "#PREDITTIVO"],
    sector: "Distribuzione B2B",
    department: "Logistica",
  },
  {
    id: "demand-forecasting",
    title: "DEMAND FORECASTING",
    description:
      "Modelli predittivi avanzati che combinano dati interni, segnali di mercato e fattori esterni per prevedere la domanda a breve e medio termine.",
    bullets: [
      "Accuratezza previsionale del 92% sulla domanda settimanale per SKU grazie a modelli ensemble AI",
      "Integrazione di variabili esogene: meteo, eventi, trend social media e indicatori economici",
      "Simulazione scenari promozionali per stimare impatto sulle vendite e pianificare produzione e approvvigionamento",
    ],
    tags: ["#LOGISTICA", "#FORECASTING", "#MACHINE-LEARNING"],
    sector: "Food & Beverage",
    department: "Logistica",
  },
  {
    id: "last-mile-delivery-ai",
    title: "LAST-MILE DELIVERY AI",
    description:
      "Ottimizzazione dell'ultimo miglio di consegna con AI che gestisce assegnazione corrieri, tracking in tempo reale e comunicazione automatica con il destinatario.",
    bullets: [
      "Riduzione del 25% dei costi di consegna ultimo miglio tramite batching intelligente e slot ottimizzati",
      "Notifiche automatiche al cliente con ETA preciso aggiornato in tempo reale e opzione di riprogrammazione",
      "Gestione automatica delle consegne fallite con riprogrammazione e routing alternativo",
    ],
    tags: ["#LOGISTICA", "#LAST-MILE", "#REAL-TIME"],
    sector: "Retail & Fashion",
    department: "Logistica",
  },

  // ──────────────────────────────────────────────────────────────────────
  // PROCUREMENT (5)
  // ──────────────────────────────────────────────────────────────────────
  {
    id: "procurement-intelligence",
    title: "PROCUREMENT INTELLIGENCE",
    description:
      "Piattaforma AI che analizza mercati di fornitura, trend di prezzo e rischi geopolitici per supportare decisioni di acquisto strategiche e negoziazione.",
    bullets: [
      "Monitoraggio in tempo reale di prezzi materie prime con previsioni a 90 giorni e accuratezza dell'88%",
      "Identificazione automatica di fornitori alternativi in caso di rischi supply chain o aumenti di prezzo",
      "Benchmark automatico dei prezzi di acquisto rispetto a indici di mercato e competitor",
    ],
    tags: ["#PROCUREMENT", "#INTELLIGENCE", "#ANALYTICS"],
    sector: "Manifattura",
    department: "Procurement",
  },
  {
    id: "supplier-scoring-selezione",
    title: "SUPPLIER SCORING E SELEZIONE",
    description:
      "Sistema AI di valutazione e ranking dei fornitori basato su performance storiche, affidabilita, qualita, sostenibilita e rischio finanziario.",
    bullets: [
      "Scoring automatico su 15+ KPI con pesi configurabili per categoria merceologica e strategia aziendale",
      "Integrazione con banche dati esterne per verifica solidita finanziaria, certificazioni e reputazione",
      "Alert proattivi su deterioramento performance fornitore con suggerimento azioni correttive",
    ],
    tags: ["#PROCUREMENT", "#FORNITORI", "#SCORING"],
    sector: "Trasversale",
    department: "Procurement",
  },
  {
    id: "contract-management-ai",
    title: "CONTRACT MANAGEMENT AI",
    description:
      "Gestione intelligente del ciclo di vita dei contratti di fornitura, dalla negoziazione al rinnovo, con analisi clausole, scadenze e conformita.",
    bullets: [
      "Analisi automatica di clausole contrattuali con evidenziazione rischi e deviazioni da standard aziendali",
      "Tracciamento di 100% delle scadenze contrattuali con reminder automatici 90, 60 e 30 giorni prima",
      "Confronto automatico tra condizioni negoziate e condizioni effettivamente applicate nelle fatture",
    ],
    tags: ["#PROCUREMENT", "#CONTRATTI", "#NLP"],
    sector: "Trasversale",
    department: "Procurement",
  },
  {
    id: "spend-analysis-automatizzata",
    title: "SPEND ANALYSIS AUTOMATIZZATA",
    description:
      "Analisi automatica della spesa aziendale con categorizzazione AI, identificazione di saving opportunity e visibilita completa su tutti gli acquisti.",
    bullets: [
      "Categorizzazione automatica del 95% della spesa con tassonomia multi-livello personalizzabile",
      "Identificazione di opportunita di risparmio del 8-15% tramite consolidamento fornitori e rinegoziazione",
      "Dashboard interattive con drill-down per categoria, fornitore, centro di costo e periodo temporale",
    ],
    tags: ["#PROCUREMENT", "#SPEND-ANALYSIS", "#SAVINGS"],
    sector: "Trasversale",
    department: "Procurement",
  },
  {
    id: "purchase-order-automation",
    title: "PURCHASE ORDER AUTOMATION",
    description:
      "Automazione completa del ciclo di acquisto, dalla richiesta di acquisto all'emissione dell'ordine, con approvazioni intelligenti e matching automatico.",
    bullets: [
      "Riduzione del 70% dei tempi di elaborazione ordini di acquisto grazie a workflow automatizzati",
      "Three-way matching automatico tra ordine, bolla e fattura con gestione eccezioni AI-driven",
      "Generazione automatica di RDA basata su livelli di riordino, consumi storici e previsioni di fabbisogno",
    ],
    tags: ["#PROCUREMENT", "#AUTOMAZIONE", "#P2P"],
    sector: "Manifattura",
    department: "Procurement",
  },

  // ──────────────────────────────────────────────────────────────────────
  // COMUNICAZIONE (5)
  // ──────────────────────────────────────────────────────────────────────
  {
    id: "gestione-automatica-email",
    title: "GESTIONE AUTOMATICA EMAIL",
    description:
      "AI che classifica, prioritizza e risponde automaticamente alle email aziendali, riducendo il sovraccarico informativo e velocizzando i tempi di risposta.",
    bullets: [
      "Classificazione automatica delle email in 12+ categorie con accuratezza del 94% e prioritizzazione smart",
      "Bozze di risposta generate automaticamente per il 60% delle email ricorrenti con tono aziendale coerente",
      "Riduzione del tempo dedicato alla gestione email da 2.5 ore a 45 minuti al giorno per dipendente",
    ],
    tags: ["#COMUNICAZIONE", "#EMAIL", "#NLP"],
    sector: "Trasversale",
    department: "Comunicazione",
  },
  {
    id: "follow-up-ai-automatizzati",
    title: "FOLLOW-UP AI AUTOMATIZZATI",
    description:
      "Sistema AI che traccia conversazioni, impegni e scadenze, inviando follow-up automatici personalizzati quando necessario per mantenere il momentum comunicativo.",
    bullets: [
      "Tracciamento automatico di tutti gli impegni presi via email, chat e riunioni con reminder contestuali",
      "Generazione di follow-up personalizzati con tono e contenuto adattati al destinatario e alla relazione",
      "Aumento del 45% del tasso di risposta grazie a tempistiche di follow-up ottimizzate da AI",
    ],
    tags: ["#COMUNICAZIONE", "#FOLLOW-UP", "#AUTOMAZIONE"],
    sector: "Servizi Professionali",
    department: "Comunicazione",
  },
  {
    id: "report-generation-ai",
    title: "REPORT GENERATION AI",
    description:
      "Generazione automatica di report periodici e on-demand a partire da dati aziendali, con narrative AI, grafici e insight chiave evidenziati.",
    bullets: [
      "Creazione automatica di report settimanali, mensili e trimestrali con narrative in linguaggio naturale",
      "Evidenziazione automatica di anomalie, trend significativi e KPI fuori soglia con spiegazioni contestuali",
      "Personalizzazione del livello di dettaglio e formato in base al destinatario: C-level, manager o operativo",
    ],
    tags: ["#COMUNICAZIONE", "#REPORT", "#DATA-STORYTELLING"],
    sector: "Trasversale",
    department: "Comunicazione",
  },
  {
    id: "chatbot-interni-aziendali",
    title: "CHATBOT INTERNI AZIENDALI",
    description:
      "Chatbot AI interni che rispondono alle domande dei dipendenti su policy, procedure, benefit, IT e servizi aziendali, riducendo il carico su HR e helpdesk.",
    bullets: [
      "Risoluzione autonoma dell'80% delle richieste interne con tempo medio di risposta sotto i 15 secondi",
      "Knowledge base auto-aggiornata da documenti HR, policy IT, manuali e FAQ aziendali",
      "Supporto multilingua italiano-inglese con handoff trasparente a operatore umano quando necessario",
    ],
    tags: ["#COMUNICAZIONE", "#CHATBOT", "#HELPDESK"],
    sector: "Trasversale",
    department: "Comunicazione",
  },
  {
    id: "meeting-scheduling-intelligente",
    title: "MEETING SCHEDULING INTELLIGENTE",
    description:
      "Assistente AI che coordina la pianificazione di riunioni tra piu partecipanti, ottimizzando orari, sale e formato in base a preferenze e disponibilita.",
    bullets: [
      "Riduzione del 90% del tempo di coordinamento grazie a negoziazione automatica tra calendari multipli",
      "Suggerimento intelligente di durata, formato (in presenza/remoto) e agenda basato sul tipo di meeting",
      "Prenotazione automatica di sale riunioni, link videoconferenza e invio materiali preparatori",
    ],
    tags: ["#COMUNICAZIONE", "#SCHEDULING", "#CALENDARIO"],
    sector: "Trasversale",
    department: "Comunicazione",
  },

  // ──────────────────────────────────────────────────────────────────────
  // SALES & CRM (5)
  // ──────────────────────────────────────────────────────────────────────
  {
    id: "customer-engagement-whatsapp-chat",
    title: "CUSTOMER ENGAGEMENT WHATSAPP E CHAT",
    description:
      "Piattaforma AI di engagement clienti su WhatsApp Business, webchat e canali messaging per vendita assistita, supporto e nurturing in tempo reale.",
    bullets: [
      "Aumento del 35% del tasso di conversione grazie a interazioni personalizzate su WhatsApp Business API",
      "Gestione simultanea di 500+ conversazioni con risposte contestualizzate su catalogo, prezzi e disponibilita",
      "Handoff intelligente al venditore umano con scoring della conversazione e suggerimento next best action",
    ],
    tags: ["#SALES", "#WHATSAPP", "#CONVERSATIONAL-AI"],
    sector: "Retail & Fashion",
    department: "Sales & CRM",
  },
  {
    id: "lead-scoring-predittivo",
    title: "LEAD SCORING PREDITTIVO",
    description:
      "Modello AI di scoring dei lead che analizza dati comportamentali, firmografici e di engagement per identificare le opportunita con maggiore probabilita di conversione.",
    bullets: [
      "Aumento del 50% del tasso di conversione focalizzando il team sales sui lead con score piu alto",
      "Scoring dinamico aggiornato in tempo reale basato su 40+ segnali: visite sito, email aperte, download e interazioni social",
      "Integrazione nativa con HubSpot, Salesforce e Pipedrive per alimentazione automatica della pipeline",
    ],
    tags: ["#SALES", "#LEAD-SCORING", "#PREDITTIVO"],
    sector: "Servizi Professionali",
    department: "Sales & CRM",
  },
  {
    id: "crm-automation-enrichment",
    title: "CRM AUTOMATION E ENRICHMENT",
    description:
      "Automazione della gestione CRM con arricchimento automatico dei contatti, aggiornamento dati e suggerimenti di azione per ogni opportunita in pipeline.",
    bullets: [
      "Arricchimento automatico dei contatti con dati da LinkedIn, sito web aziendale e fonti pubbliche",
      "Riduzione del 60% del tempo di data entry CRM grazie a logging automatico di email, chiamate e meeting",
      "Suggerimenti AI di next best action per ogni deal in pipeline basati su pattern di chiusura storici",
    ],
    tags: ["#SALES", "#CRM", "#DATA-ENRICHMENT"],
    sector: "Trasversale",
    department: "Sales & CRM",
  },
  {
    id: "sales-forecasting-ai",
    title: "SALES FORECASTING AI",
    description:
      "Previsioni di vendita AI-powered che analizzano pipeline, trend storici e segnali di mercato per proiezioni accurate di fatturato a breve e medio termine.",
    bullets: [
      "Accuratezza delle previsioni di fatturato trimestrale migliorata dal 65% al 90% rispetto a metodi tradizionali",
      "Analisi automatica della pipeline health con identificazione di deal a rischio e suggerimenti di recupero",
      "Scenari what-if per simulare impatto di variazioni prezzo, nuovi prodotti e cambiamenti di mercato sul forecast",
    ],
    tags: ["#SALES", "#FORECASTING", "#ANALYTICS"],
    sector: "Trasversale",
    department: "Sales & CRM",
  },
  {
    id: "churn-prediction-retention",
    title: "CHURN PREDICTION E RETENTION",
    description:
      "Modelli predittivi che identificano i clienti a rischio di abbandono e attivano automaticamente campagne di retention personalizzate.",
    bullets: [
      "Identificazione dei clienti a rischio churn con 60 giorni di anticipo e accuratezza dell'82%",
      "Attivazione automatica di azioni di retention personalizzate: sconti, chiamate commerciali, survey di soddisfazione",
      "Riduzione del tasso di churn del 25% con incremento del Customer Lifetime Value medio del 18%",
    ],
    tags: ["#SALES", "#CHURN", "#RETENTION"],
    sector: "Distribuzione B2B",
    department: "Sales & CRM",
  },

  // ──────────────────────────────────────────────────────────────────────
  // MARKETING (5)
  // ──────────────────────────────────────────────────────────────────────
  {
    id: "brand-visibility-piattaforme-ai",
    title: "BRAND VISIBILITY SU PIATTAFORME AI",
    description:
      "Strategia e ottimizzazione della presenza del brand nelle risposte di motori AI come ChatGPT, Perplexity e Google AI Overview per massimizzare la visibilita organica.",
    bullets: [
      "Monitoraggio della menzione del brand nelle risposte di 5+ piattaforme AI con report settimanale",
      "Ottimizzazione dei contenuti web per essere citati come fonte autorevole dai modelli di linguaggio",
      "Aumento del 40% del traffico organico da fonti AI-driven entro 6 mesi dall'implementazione",
    ],
    tags: ["#MARKETING", "#AEO", "#BRAND"],
    sector: "Trasversale",
    department: "Marketing",
  },
  {
    id: "content-generation-ai",
    title: "CONTENT GENERATION AI",
    description:
      "Creazione automatizzata di contenuti marketing multicanale con AI: blog post, newsletter, case study, white paper e contenuti social in linea con la brand voice.",
    bullets: [
      "Produzione di 10x piu contenuti mantenendo qualita e coerenza stilistica grazie a brand voice training",
      "Generazione multilingua italiano-inglese-tedesco con adattamento culturale automatico per mercati target",
      "Workflow editoriale integrato: briefing AI, bozza, revisione umana, pubblicazione schedulata",
    ],
    tags: ["#MARKETING", "#CONTENT", "#GENERATIVE-AI"],
    sector: "Trasversale",
    department: "Marketing",
  },
  {
    id: "seo-aeo-automation",
    title: "SEO E AEO AUTOMATION",
    description:
      "Automazione della strategia SEO e Answer Engine Optimization con AI che analizza keyword, ottimizza contenuti e monitora il posizionamento su motori tradizionali e AI.",
    bullets: [
      "Analisi automatica di 1000+ keyword con clustering semantico e prioritizzazione per impatto business",
      "Ottimizzazione on-page automatizzata: meta tag, struttura heading, schema markup e internal linking",
      "Monitoraggio posizionamento su Google, Bing e risposte AI con alert su variazioni significative",
    ],
    tags: ["#MARKETING", "#SEO", "#AEO"],
    sector: "Trasversale",
    department: "Marketing",
  },
  {
    id: "social-media-ai-management",
    title: "SOCIAL MEDIA AI MANAGEMENT",
    description:
      "Gestione AI-powered dei canali social aziendali con creazione contenuti, pianificazione editoriale, pubblicazione automatica e analisi performance.",
    bullets: [
      "Generazione di 30+ post mensili per LinkedIn, Instagram e X con visual e copy ottimizzati per ogni piattaforma",
      "Scheduling intelligente basato su analisi dei momenti di massimo engagement del pubblico target",
      "Analisi sentiment e trend in tempo reale con suggerimenti di contenuti reattivi e newsjacking",
    ],
    tags: ["#MARKETING", "#SOCIAL-MEDIA", "#CONTENT"],
    sector: "Trasversale",
    department: "Marketing",
  },
  {
    id: "competitor-monitoring-ai",
    title: "COMPETITOR MONITORING AI",
    description:
      "Monitoraggio continuo dei competitor con AI che traccia movimenti di mercato, campagne, pricing, assunzioni e innovazioni per alimentare decisioni strategiche.",
    bullets: [
      "Tracking automatico di 20+ competitor su sito web, social, PR, offerte di lavoro e brevetti",
      "Alert in tempo reale su lanci prodotto, variazioni prezzo, campagne marketing e partnership dei competitor",
      "Report mensile automatico di competitive intelligence con trend, minacce e opportunita evidenziate",
    ],
    tags: ["#MARKETING", "#COMPETITOR", "#INTELLIGENCE"],
    sector: "Trasversale",
    department: "Marketing",
  },

  // ──────────────────────────────────────────────────────────────────────
  // SETTORIALI — MANIFATTURA (4)
  // ──────────────────────────────────────────────────────────────────────
  {
    id: "controllo-qualita-visivo-ai",
    title: "CONTROLLO QUALITA VISIVO AI",
    description:
      "Telecamere con intelligenza artificiale rilevano difetti e anomalie in tempo reale direttamente sulla linea di produzione, riducendo scarti e costi di rilavorazione.",
    bullets: [
      "Ispezione visiva automatica al 100% dei pezzi senza rallentare la linea produttiva",
      "Riduzione scarti fino al 70% grazie a rilevamento difetti sub-millimetrici in tempo reale",
      "Dashboard con alert immediati e storico difettosita per turno, linea e tipologia di difetto",
    ],
    tags: ["#QUALITA", "#VISIONE-ARTIFICIALE", "#PRODUZIONE", "#INDUSTRIA-4.0"],
    sector: "Manifattura",
    department: "Operazioni",
  },
  {
    id: "preventivazione-tecnica-automatizzata",
    title: "PREVENTIVAZIONE TECNICA AUTOMATIZZATA",
    description:
      "L'AI analizza disegni tecnici CAD e genera preventivi accurati in pochi minuti, eliminando ore di lavoro manuale dell'ufficio tecnico.",
    bullets: [
      "Estrazione automatica di materiali, lavorazioni e tempi ciclo dai file CAD 2D e 3D",
      "Generazione preventivo completo in meno di 10 minuti invece delle tradizionali 2-3 ore",
      "Storico preventivi che migliora la precisione nel tempo grazie a machine learning continuo",
    ],
    tags: ["#CAD", "#PREVENTIVI", "#UFFICIO-TECNICO"],
    sector: "Manifattura",
    department: "Operazioni",
  },
  {
    id: "manutenzione-predittiva-iot",
    title: "MANUTENZIONE PREDITTIVA",
    description:
      "Sensori IoT combinati con algoritmi AI predicono guasti e fermi macchina prima che accadano, riducendo drasticamente i tempi di inattivita non pianificati.",
    bullets: [
      "Monitoraggio continuo di vibrazioni, temperatura e consumo energetico dei macchinari critici",
      "Previsione guasti con 72 ore di anticipo e accuratezza superiore al 90%",
      "Riduzione fermi macchina non pianificati fino all'80% e allungamento vita utile impianti del 20%",
    ],
    tags: ["#IOT", "#MANUTENZIONE", "#PREDITTIVO", "#INDUSTRIA-4.0"],
    sector: "Manifattura",
    department: "Operazioni",
  },
  {
    id: "digital-twin-produzione",
    title: "DIGITAL TWIN DI PRODUZIONE",
    description:
      "Simulazione AI del processo produttivo che crea una replica digitale della fabbrica per testare ottimizzazioni senza interrompere la produzione reale.",
    bullets: [
      "Replica digitale completa della linea produttiva alimentata con dati in tempo reale dai sensori",
      "Simulazione scenari what-if per ottimizzare layout, flussi e scheduling di produzione",
      "Aumento OEE medio del 15-25% grazie a ottimizzazioni validate virtualmente prima dell'implementazione",
    ],
    tags: ["#DIGITAL-TWIN", "#SIMULAZIONE", "#PRODUZIONE"],
    sector: "Manifattura",
    department: "Operazioni",
  },

  // ──────────────────────────────────────────────────────────────────────
  // SETTORIALI — LOGISTICA & TRASPORTI (3)
  // ──────────────────────────────────────────────────────────────────────
  {
    id: "automazione-documenti-trasporto",
    title: "AUTOMAZIONE DOCUMENTI DI TRASPORTO",
    description:
      "OCR avanzato su CMR, DDT e bolle di consegna con aggiornamento automatico dei sistemi gestionali, eliminando la digitazione manuale.",
    bullets: [
      "Lettura automatica di CMR, DDT e documenti di trasporto cartacei e digitali via OCR AI",
      "Aggiornamento in tempo reale di ERP e TMS senza intervento manuale degli operatori",
      "Riduzione errori di data entry del 95% e risparmio di 3+ ore al giorno per operatore",
    ],
    tags: ["#OCR", "#DOCUMENTI-TRASPORTO", "#AUTOMAZIONE"],
    sector: "Logistica & Trasporti",
    department: "Logistica",
  },
  {
    id: "gestione-flotta-predittiva",
    title: "GESTIONE FLOTTA PREDITTIVA",
    description:
      "Manutenzione dei veicoli basata su dati telematici reali anziche su chilometraggi fissi, ottimizzando costi e disponibilita della flotta.",
    bullets: [
      "Analisi continua dei dati telematici: motore, freni, pneumatici e consumi carburante",
      "Pianificazione manutenzione basata su usura reale del veicolo, non su scadenze fisse",
      "Riduzione costi manutenzione del 30% e aumento disponibilita veicoli del 20%",
    ],
    tags: ["#FLOTTA", "#TELEMATICA", "#PREDITTIVO"],
    sector: "Logistica & Trasporti",
    department: "Operazioni",
  },
  {
    id: "cross-docking-intelligente",
    title: "CROSS-DOCKING INTELLIGENTE",
    description:
      "AI ottimizza lo smistamento merci in hub logistici, riducendo tempi di permanenza e massimizzando l'efficienza delle baie di carico e scarico.",
    bullets: [
      "Assegnazione automatica baie di carico basata su priorita, destinazione e urgenza delle merci",
      "Riduzione tempi di permanenza in hub del 40% con orchestrazione AI dei flussi in entrata e uscita",
      "Ottimizzazione carico mezzi in uscita per massimizzare saturazione e ridurre viaggi a vuoto",
    ],
    tags: ["#CROSS-DOCKING", "#HUB-LOGISTICO", "#SMISTAMENTO"],
    sector: "Logistica & Trasporti",
    department: "Logistica",
  },

  // ──────────────────────────────────────────────────────────────────────
  // SETTORIALI — FOOD & BEVERAGE (3)
  // ──────────────────────────────────────────────────────────────────────
  {
    id: "tracciabilita-filiera-automatizzata",
    title: "TRACCIABILITA FILIERA AUTOMATIZZATA",
    description:
      "Sistema SFA potenziato da AI che certifica automaticamente fornitori e lotti, garantendo conformita normativa e tracciabilita completa dal campo alla tavola.",
    bullets: [
      "Tracciamento automatico di ogni lotto dalla materia prima al prodotto finito senza inserimenti manuali",
      "Certificazione fornitori con scoring AI basato su storico qualita, conformita e affidabilita",
      "Generazione automatica documentazione per audit HACCP e certificazioni BRC/IFS in tempo reale",
    ],
    tags: ["#TRACCIABILITA", "#HACCP", "#FILIERA", "#FOOD-SAFETY"],
    sector: "Food & Beverage",
    department: "Operazioni",
  },
  {
    id: "gestione-ordini-horeca-multicanale",
    title: "GESTIONE ORDINI HORECA MULTICANALE",
    description:
      "Parsing automatico degli ordini ricevuti via email, PDF, WhatsApp ed EDI da clienti HORECA, con inserimento diretto nel gestionale aziendale.",
    bullets: [
      "Lettura e interpretazione automatica ordini da email, PDF, messaggi WhatsApp e portali EDI",
      "Inserimento ordini nel gestionale in secondi invece di minuti, anche durante i picchi stagionali",
      "Riduzione errori ordine del 90% e gestione volumi elevati senza personale aggiuntivo",
    ],
    tags: ["#HORECA", "#ORDINI", "#MULTICANALE"],
    sector: "Food & Beverage",
    department: "Operazioni",
  },
  {
    id: "controllo-qualita-alimentare",
    title: "CONTROLLO QUALITA ALIMENTARE",
    description:
      "Visione artificiale per classificazione automatica dei prodotti alimentari per calibro, colore, maturazione e presenza di difetti o corpi estranei.",
    bullets: [
      "Classificazione automatica prodotti per calibro, colore e grado di maturazione sulla linea",
      "Rilevamento corpi estranei e difetti superficiali con accuratezza superiore al 99%",
      "Velocita di ispezione fino a 1000 pezzi al minuto senza affaticamento operatore",
    ],
    tags: ["#VISIONE-ARTIFICIALE", "#QUALITA", "#FOOD-SAFETY"],
    sector: "Food & Beverage",
    department: "Operazioni",
  },

  // ──────────────────────────────────────────────────────────────────────
  // SETTORIALI — DISTRIBUZIONE B2B (2)
  // ──────────────────────────────────────────────────────────────────────
  {
    id: "riassortimento-predittivo-automatico",
    title: "RIASSORTIMENTO PREDITTIVO AUTOMATICO",
    description:
      "AI monitora livelli di stock in tempo reale e genera automaticamente ordini di riassortimento basati su previsioni di domanda e lead time fornitori.",
    bullets: [
      "Monitoraggio continuo giacenze con soglie dinamiche basate su stagionalita, trend e promozioni",
      "Generazione automatica ordini fornitori ottimizzati per quantita, timing e lotto economico",
      "Riduzione rotture di stock del 60% e diminuzione overstock del 25% contemporaneamente",
    ],
    tags: ["#RIASSORTIMENTO", "#STOCK", "#PREDITTIVO"],
    sector: "Distribuzione B2B",
    department: "Logistica",
  },
  {
    id: "pricing-dinamico-b2b",
    title: "PRICING DINAMICO B2B",
    description:
      "AI calcola prezzi ottimali per ogni combinazione cliente, prodotto e momento, massimizzando margini e competitivita sul mercato B2B.",
    bullets: [
      "Calcolo prezzo ottimale basato su storico acquisti cliente, margini target e concorrenza di mercato",
      "Scontistica personalizzata automatica per cliente con protezione margine minimo configurabile",
      "Aumento margine medio del 3-5% mantenendo competitivita e soddisfazione cliente",
    ],
    tags: ["#PRICING", "#MARGINI", "#B2B"],
    sector: "Distribuzione B2B",
    department: "Operazioni",
  },

  // ──────────────────────────────────────────────────────────────────────
  // SETTORIALI — RETAIL & FASHION (3)
  // ──────────────────────────────────────────────────────────────────────
  {
    id: "gestione-campionario-ai",
    title: "GESTIONE CAMPIONARIO AI",
    description:
      "Classificazione automatica del campionario con generazione di foto, schede prodotto e cataloghi digitali tramite intelligenza artificiale.",
    bullets: [
      "Catalogazione automatica capi per categoria, materiale, colore, taglia e stagione",
      "Generazione schede prodotto complete con descrizioni multilingua ottimizzate per SEO e marketplace",
      "Riduzione tempi di go-to-market del campionario del 50% rispetto al processo manuale tradizionale",
    ],
    tags: ["#CAMPIONARIO", "#CATALOGO", "#FASHION"],
    sector: "Retail & Fashion",
    department: "Operazioni",
  },
  {
    id: "virtual-try-on-configuratore",
    title: "VIRTUAL TRY-ON E CONFIGURATORE",
    description:
      "AI permette ai clienti di provare virtualmente i prodotti e configurarli su misura, aumentando conversioni online e riducendo drasticamente i resi.",
    bullets: [
      "Prova virtuale realistica di capi e accessori su foto o video del cliente in tempo reale",
      "Configuratore prodotto 3D con visualizzazione istantanea di varianti colore, tessuto e vestibilita",
      "Riduzione tasso di reso del 25-40% e aumento conversion rate e-commerce del 30%",
    ],
    tags: ["#VIRTUAL-TRY-ON", "#CONFIGURATORE", "#E-COMMERCE"],
    sector: "Retail & Fashion",
    department: "Operazioni",
  },
  {
    id: "demand-planning-stagionale",
    title: "DEMAND PLANNING STAGIONALE",
    description:
      "Previsioni di domanda basate su trend di mercato, dati meteo, eventi locali e storici di vendita per ottimizzare acquisti e produzione stagionale.",
    bullets: [
      "Modelli predittivi che integrano trend social, dati meteo, eventi locali e storici POS",
      "Pianificazione acquisti per stagione con accuratezza previsionale superiore all'85%",
      "Riduzione invenduto di fine stagione del 30% e ottimizzazione del capitale circolante",
    ],
    tags: ["#DEMAND-PLANNING", "#PREVISIONI", "#STAGIONALITA"],
    sector: "Retail & Fashion",
    department: "Operazioni",
  },

  // ──────────────────────────────────────────────────────────────────────
  // SETTORIALI — TURISMO & OSPITALITA (3)
  // ──────────────────────────────────────────────────────────────────────
  {
    id: "revenue-management-dinamico",
    title: "REVENUE MANAGEMENT DINAMICO",
    description:
      "Pricing in tempo reale delle camere basato su occupazione, domanda prevista, eventi locali e comportamento della concorrenza.",
    bullets: [
      "Aggiornamento automatico tariffe su tutti i canali OTA e booking engine diretto simultaneamente",
      "Algoritmi che analizzano domanda, eventi locali, meteo e competitor per calcolare il prezzo ottimale",
      "Aumento RevPAR medio del 15-20% rispetto a pricing manuale o basato su regole statiche",
    ],
    tags: ["#REVENUE-MANAGEMENT", "#PRICING", "#HOSPITALITY"],
    sector: "Turismo & Ospitalita",
    department: "Operazioni",
  },
  {
    id: "concierge-ai-multilingue",
    title: "CONCIERGE AI MULTILINGUE",
    description:
      "Assistente virtuale disponibile 24/7 che gestisce prenotazioni, richieste informazioni e servizi ancillari in oltre 30 lingue per ospiti internazionali.",
    bullets: [
      "Risposta immediata in 30+ lingue su chat, WhatsApp e voice per ogni tipo di richiesta",
      "Gestione autonoma prenotazioni ristorante, spa, escursioni e servizi ancillari con upselling intelligente",
      "Aumento revenue servizi ancillari del 25% e riduzione carico reception del 40%",
    ],
    tags: ["#CONCIERGE", "#MULTILINGUE", "#CHATBOT"],
    sector: "Turismo & Ospitalita",
    department: "Operazioni",
  },
  {
    id: "gestione-review-automatizzata",
    title: "GESTIONE REVIEW AUTOMATIZZATA",
    description:
      "Monitoraggio automatico delle recensioni su tutte le piattaforme con generazione di risposte personalizzate e analisi aggregata del sentiment.",
    bullets: [
      "Monitoraggio in tempo reale di recensioni su Google, Booking, TripAdvisor e social media",
      "Generazione risposte personalizzate nel tono del brand entro 1 ora dalla pubblicazione",
      "Analisi sentiment aggregata per identificare aree di miglioramento prioritarie e trend ricorrenti",
    ],
    tags: ["#RECENSIONI", "#REPUTATION", "#SENTIMENT"],
    sector: "Turismo & Ospitalita",
    department: "Operazioni",
  },

  // ──────────────────────────────────────────────────────────────────────
  // SETTORIALI — SERVIZI PROFESSIONALI (3)
  // ──────────────────────────────────────────────────────────────────────
  {
    id: "due-diligence-documentale-ma",
    title: "DUE DILIGENCE DOCUMENTALE M&A",
    description:
      "Sistema RAG applicato alle data room che estrae dati chiave, identifica rischi e genera report strutturati per operazioni di M&A.",
    bullets: [
      "Analisi automatica di migliaia di documenti in data room con RAG specializzato su documentazione legale",
      "Estrazione clausole critiche, passivita potenziali e red flag contrattuali con citazione della fonte",
      "Riduzione tempi di due diligence del 60% con report strutturato, verificabile e condivisibile",
    ],
    tags: ["#DUE-DILIGENCE", "#M&A", "#RAG", "#LEGALE"],
    sector: "Servizi Professionali",
    department: "Operazioni",
  },
  {
    id: "riconciliazione-bancaria-automatica",
    title: "RICONCILIAZIONE BANCARIA AUTOMATICA",
    description:
      "Matching automatico tra movimenti bancari e fatture emesse e ricevute, con gestione intelligente delle eccezioni e degli abbinamenti complessi.",
    bullets: [
      "Abbinamento automatico movimenti-fatture con accuratezza superiore al 95% anche su causali ambigue",
      "Gestione intelligente di pagamenti parziali, cumulativi e con riferimenti incompleti o errati",
      "Risparmio di 2-4 ore al giorno per il reparto amministrativo con chiusura rapida dei conti",
    ],
    tags: ["#RICONCILIAZIONE", "#CONTABILITA", "#BANCA"],
    sector: "Servizi Professionali",
    department: "Operazioni",
  },
  {
    id: "redazione-contrattuale-ai",
    title: "REDAZIONE CONTRATTUALE AI",
    description:
      "Generazione automatica di bozze contrattuali a partire da template validati e dati specifici della controparte, con controllo coerenza clausole.",
    bullets: [
      "Generazione bozze contratti da template approvati dallo studio con inserimento dati automatico",
      "Verifica automatica coerenza clausole e conformita a normativa vigente italiana e comunitaria",
      "Riduzione tempi di redazione del 70% con output revisionabile e personalizzabile dal professionista",
    ],
    tags: ["#CONTRATTI", "#LEGALE", "#GENERAZIONE-DOCUMENTI"],
    sector: "Servizi Professionali",
    department: "Operazioni",
  },

  // ──────────────────────────────────────────────────────────────────────
  // SETTORIALI — EDILIZIA & IMMOBILIARE (2)
  // ──────────────────────────────────────────────────────────────────────
  {
    id: "gestione-documentale-cantieri",
    title: "GESTIONE DOCUMENTALE CANTIERI",
    description:
      "Automazione di SAL, DDT e bolle di cantiere con tracciamento digitale di materiali, avanzamento lavori e documentazione di conformita.",
    bullets: [
      "Generazione automatica SAL con dati da app di cantiere e foto georeferenziate del progresso lavori",
      "Tracciamento digitale DDT e bolle materiali con riconciliazione automatica rispetto al computo metrico",
      "Archivio documentale strutturato per commessa accessibile in tempo reale da cantiere e ufficio",
    ],
    tags: ["#CANTIERE", "#SAL", "#DOCUMENTALE"],
    sector: "Edilizia & Immobiliare",
    department: "Operazioni",
  },
  {
    id: "bim-ai-progettazione",
    title: "BIM + AI PER PROGETTAZIONE",
    description:
      "Ottimizzazione strutturale e preventivazione automatica integrando modelli BIM con intelligenza artificiale per progetti edili e infrastrutturali.",
    bullets: [
      "Analisi automatica modelli BIM per ottimizzazione materiali, strutture e costi complessivi",
      "Generazione computi metrici estimativi direttamente dal modello 3D con prezzi aggiornati",
      "Riduzione tempi di preventivazione del 50% e maggiore accuratezza nelle stime rispetto al metodo tradizionale",
    ],
    tags: ["#BIM", "#PROGETTAZIONE", "#PREVENTIVAZIONE"],
    sector: "Edilizia & Immobiliare",
    department: "Operazioni",
  },

  // ──────────────────────────────────────────────────────────────────────
  // SETTORIALI — FARMACEUTICA (1)
  // ──────────────────────────────────────────────────────────────────────
  {
    id: "gestione-scadenze-serializzazione",
    title: "GESTIONE SCADENZE E SERIALIZZAZIONE",
    description:
      "Tracking automatico di lotti e scadenze con serializzazione conforme alle normative EU, gestione FEFO e alert proattivi su prodotti in scadenza.",
    bullets: [
      "Tracciamento automatico scadenze per lotto con logica FEFO integrata nel WMS aziendale",
      "Serializzazione conforme a Direttiva Anticontraffazione EU 2011/62 e regolamento FMD",
      "Alert proattivi 90, 60 e 30 giorni prima della scadenza con suggerimenti di smaltimento e redistribuzione",
    ],
    tags: ["#SERIALIZZAZIONE", "#SCADENZE", "#PHARMA", "#COMPLIANCE"],
    sector: "Farmaceutica",
    department: "Logistica",
  },

  // ──────────────────────────────────────────────────────────────────────
  // SETTORIALI — SANITA PRIVATA (1)
  // ──────────────────────────────────────────────────────────────────────
  {
    id: "front-office-automatizzato-sanita",
    title: "FRONT-OFFICE AUTOMATIZZATO",
    description:
      "Sistema AI per prenotazioni, conferme e reminder automatici che riduce i no-show del 40% e libera il personale di segreteria per attivita a maggior valore.",
    bullets: [
      "Prenotazione autonoma visite via chat AI, telefono con voice bot e portale web 24 ore su 24",
      "Reminder multicanale intelligenti via SMS, WhatsApp ed email con conferma attiva del paziente",
      "Riduzione no-show del 40% e recupero automatico slot cancellati tramite lista d'attesa dinamica",
    ],
    tags: ["#PRENOTAZIONI", "#NO-SHOW", "#SANITA"],
    sector: "Sanita Privata",
    department: "Operazioni",
  },
];
