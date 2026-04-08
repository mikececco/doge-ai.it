export type SoluzionePage = {
  slug: string;
  targetQuery: string;
  title: string;
  h1: string;
  metaDescription: string;
  intro: string;
  benefits: { title: string; description: string }[];
  useCases: string[];
  faq: { question: string; answer: string }[];
  category: string;
};

export const SOLUZIONI_PAGES: SoluzionePage[] = [
  {
    slug: "consulente-ai-pmi",
    targetQuery: "consulente AI per PMI",
    category: "PMI",
    title: "Consulente AI per PMI - IL DOGE DI VENEZIA",
    h1: "Il consulente AI che lavora come parte del tuo team",
    metaDescription:
      "Cerchi un consulente AI per la tua PMI? IL DOGE DI VENEZIA affianca le piccole e medie imprese italiane con strategie AI concrete, implementazioni rapide e risultati misurabili in 30 giorni.",
    intro:
      "Le PMI italiane non hanno bisogno di un consulente che presenta slide. Hanno bisogno di qualcuno che entra in azienda, capisce i processi reali e costruisce sistemi AI che funzionano davvero. IL DOGE DI VENEZIA lavora a fianco degli imprenditori con un approccio diretto: nessuna teoria, solo risultati misurabili. In 30 giorni puoi avere il primo sistema AI operativo nella tua azienda.",
    benefits: [
      {
        title: "Approccio sartoriale",
        description:
          "Nessun template preconfezionato. Analizziamo i tuoi processi specifici e costruiamo soluzioni AI calibrate sulla tua PMI, non su una PMI generica.",
      },
      {
        title: "Velocità di esecuzione",
        description:
          "Dalla diagnosi al primo prototipo funzionante in meno di due settimane. Iteriamo rapidamente per arrivare al sistema definitivo senza mesi di attesa.",
      },
      {
        title: "Costo prevedibile",
        description:
          "Pacchetti chiari, nessuna sorpresa. Sai esattamente cosa stai comprando e quale ROI puoi aspettarti prima di spendere un euro.",
      },
      {
        title: "Trasferimento di competenze",
        description:
          "Non costruiamo sistemi che richiedono la nostra presenza permanente. Il tuo team impara a gestire e migliorare gli strumenti AI in autonomia.",
      },
    ],
    useCases: [
      "Automazione della gestione ordini e comunicazioni con clienti via agente AI",
      "Sistema di reportistica automatica da dati ERP/CRM esistenti",
      "Chatbot interno per supportare il team operativo con procedure e FAQ aziendali",
      "Analisi automatica di preventivi, contratti e documenti fornitori",
      "Ottimizzazione dei tempi di risposta al customer service con AI",
    ],
    faq: [
      {
        question: "Quanto costa un consulente AI per una PMI?",
        answer:
          "I nostri engagement partono da progetti pilota strutturati con investimento contenuto. Il costo dipende dalla complessità dei processi e dagli obiettivi, ma lavoriamo sempre con budget realistici per le PMI italiane. La prima call è gratuita e senza impegno.",
      },
      {
        question: "Quanta esperienza tecnica serve internamente?",
        answer:
          "Zero. Gestiamo noi l'intera parte tecnica e formiamo il tuo team per usare i sistemi in autonomia. Non serve un reparto IT dedicato.",
      },
      {
        question: "In quanto tempo si vedono i primi risultati?",
        answer:
          "I primi sistemi operativi in 2-4 settimane. I risultati misurabili - risparmio di ore, riduzione errori, aumento conversioni - emergono entro 30-60 giorni dall'implementazione.",
      },
    ],
  },
  {
    slug: "consulenza-intelligenza-artificiale-aziende",
    targetQuery: "consulenza intelligenza artificiale aziende",
    category: "PMI",
    title: "Consulenza Intelligenza Artificiale per Aziende - IL DOGE DI VENEZIA",
    h1: "Consulenza AI per aziende: dalla strategia all'implementazione",
    metaDescription:
      "Consulenza intelligenza artificiale per aziende italiane. Strategia, implementazione e formazione AI con risultati concreti. IL DOGE DI VENEZIA - partner AI per PMI e imprese strutturate.",
    intro:
      "La consulenza AI che serve alle aziende italiane non è teorica: è operativa. IL DOGE DI VENEZIA accompagna imprese di ogni settore attraverso un percorso strutturato che parte dalla mappatura dei processi ad alto potenziale AI, costruisce sistemi funzionanti e misura il ritorno reale sull'investimento. Non vendiamo software: costruiamo capacità AI interna.",
    benefits: [
      {
        title: "Diagnosi approfondita",
        description:
          "Prima di toccare un sistema, capiamo dove l'AI genera valore nella tua azienda. Non ogni processo beneficia dell'automazione: ti diciamo la verità.",
      },
      {
        title: "Implementazione end-to-end",
        description:
          "Dalla scelta degli strumenti all'integrazione con i sistemi esistenti (ERP, CRM, email, database), gestiamo l'intero ciclo senza lasciare nodi tecnici irrisolti.",
      },
      {
        title: "Formazione del team",
        description:
          "Ogni implementazione include training specifico per chi userà i sistemi. L'AI non sostituisce le persone: le potenzia se sanno usarla.",
      },
      {
        title: "Monitoraggio e ottimizzazione",
        description:
          "Definiamo KPI chiari prima di iniziare e monitoriamo i risultati nel tempo. Se un sistema non performa, lo aggiustiamo.",
      },
    ],
    useCases: [
      "Implementazione di sistemi di analisi predittiva su dati vendite e stock",
      "Automazione del processo di onboarding clienti con AI documentale",
      "Costruzione di pipeline di lead generation con qualificazione automatica via AI",
      "Sistemi di monitoring qualità in produzione con computer vision",
      "Integrazione AI in flussi di lavoro esistenti senza sostituzione dei tool aziendali",
    ],
    faq: [
      {
        question: "La consulenza AI è adatta anche a aziende che non hanno mai usato l'AI?",
        answer:
          "Sì, è esattamente il contesto in cui lavoriamo meglio. Partiamo da zero, mappiamo i processi aziendali e costruiamo un percorso graduale che non disorienta il team.",
      },
      {
        question: "Quali settori avete supportato?",
        answer:
          "Manifattura, distribuzione, servizi B2B, e-commerce, real estate e gestione patrimoniale. L'approccio si adatta al settore specifico.",
      },
      {
        question: "Come garantite che l'AI sia sicura per i dati aziendali?",
        answer:
          "Utilizziamo architetture che tengono i dati sensibili all'interno dell'infrastruttura aziendale o in ambienti cloud certificati (ISO 27001). Nessun dato passa su sistemi non controllati.",
      },
    ],
  },
  {
    slug: "implementare-ai-in-azienda",
    targetQuery: "come implementare AI in azienda",
    category: "PMI",
    title: "Come Implementare l'AI in Azienda - Guida Pratica | IL DOGE DI VENEZIA",
    h1: "Come implementare l'AI in azienda: il metodo che funziona davvero",
    metaDescription:
      "Vuoi implementare l'AI nella tua azienda ma non sai da dove partire? IL DOGE DI VENEZIA ha sviluppato un metodo pratico in 4 fasi per portare l'intelligenza artificiale nei processi aziendali italiani.",
    intro:
      "Implementare l'AI in azienda senza una guida esperta significa sprecare tempo e budget su strumenti che non cambiano nulla. Il problema non è la tecnologia -è sapere quali processi automatizzare, in quale ordine, e come misurare il successo. IL DOGE DI VENEZIA ha sviluppato un metodo in 4 fasi testato su decine di PMI italiane: si parte sempre da un problema reale, non da una tecnologia da vendere.",
    benefits: [
      {
        title: "Fase 1: Audit dei processi",
        description:
          "Mappatura dettagliata di tutti i processi ripetitivi, ad alto volume o ad alto rischio errore. Identifichiamo i 3-5 aree con il maggiore potenziale AI.",
      },
      {
        title: "Fase 2: Prototipazione rapida",
        description:
          "Costruiamo un prototipo funzionante sul processo prioritario in meno di 2 settimane. Il team lo testa in condizioni reali prima di qualsiasi impegno maggiore.",
      },
      {
        title: "Fase 3: Integrazione e rollout",
        description:
          "Il sistema validato viene integrato con i tool esistenti (ERP, CRM, email, Slack) e rilasciato progressivamente al team con training dedicato.",
      },
      {
        title: "Fase 4: Misurazione e scaling",
        description:
          "Misuriamo i risultati reali dopo 30 e 90 giorni. Se il ROI è dimostrato, estendiamo l'approccio agli altri processi identificati nella fase 1.",
      },
    ],
    useCases: [
      "Prima implementazione AI su un processo di back-office ad alto volume manuale",
      "Automazione completa del flusso di inserimento e gestione ordini",
      "Integrazione AI in un CRM esistente per la qualificazione automatica dei lead",
      "Sostituzione di reportistica manuale con dashboard AI aggiornate in tempo reale",
      "Costruzione di un knowledge base aziendale interrogabile via AI",
    ],
    faq: [
      {
        question: "Da dove si parte per implementare l'AI in azienda?",
        answer:
          "Sempre da un processo specifico, non da 'voglio usare l'AI'. La prima sessione con noi serve esattamente a identificare quale processo porta il massimo ritorno con il minimo sforzo tecnico.",
      },
      {
        question: "Quanto dura un'implementazione AI tipica?",
        answer:
          "Il primo sistema operativo si ottiene in 4-6 settimane. I cicli successivi sono più rapidi perché il team ha già familiarità con il metodo.",
      },
      {
        question: "Cosa succede se l'implementazione non funziona?",
        answer:
          "Lavoriamo con milestone chiare e KPI predefiniti. Se un prototipo non raggiunge gli obiettivi, lo iteriamo o cambiamo approccio - senza costi aggiuntivi per il cliente nella fase pilota.",
      },
    ],
  },
  {
    slug: "automazione-processi-aziendali-ai",
    targetQuery: "automazione processi aziendali con AI",
    category: "PMI",
    title: "Automazione Processi Aziendali con AI - IL DOGE DI VENEZIA",
    h1: "Automazione dei processi aziendali con AI: meno ore manuali, più crescita",
    metaDescription:
      "Automatizza i processi aziendali ripetitivi con l'intelligenza artificiale. IL DOGE DI VENEZIA costruisce sistemi di automazione AI su misura per PMI italiane. Risparmio misurabile da subito.",
    intro:
      "Ogni azienda ha processi che consumano ore di lavoro qualificato su compiti meccanici e ripetitivi: inserimento dati, gestione email, reportistica, riconciliazioni. L'AI moderna non richiede grandi investimenti per automatizzare questi flussi - richiede il giusto metodo. IL DOGE DI VENEZIA identifica i processi ad alto impatto e li automatizza in settimane, non mesi.",
    benefits: [
      {
        title: "Risparmio immediato di ore",
        description:
          "I processi che automatizziamo in media liberano 15-40 ore/settimana di lavoro manuale. Ore che il tuo team può reinvestire in attività a valore aggiunto.",
      },
      {
        title: "Riduzione degli errori",
        description:
          "I processi manuali generano errori costosi. L'automazione AI opera con precisione costante, 24/7, senza distrazioni o affaticamento.",
      },
      {
        title: "Scalabilità senza assumere",
        description:
          "Un processo automatizzato scala con i volumi senza aumentare il costo del lavoro. Gestisci 10x le operazioni con la stessa struttura.",
      },
      {
        title: "Integrazione con i sistemi esistenti",
        description:
          "Non buttiamo via quello che hai già. Integriamo l'automazione AI con ERP, CRM, gestionali, email e qualsiasi altro strumento in uso.",
      },
    ],
    useCases: [
      "Automazione completa del ciclo ordine-fattura-pagamento con notifiche intelligenti",
      "Estrazione e classificazione automatica di documenti (DDT, fatture, contratti)",
      "Riconciliazione automatica di estratti conto e movimenti contabili",
      "Generazione automatica di report operativi e direzionali su base settimanale",
      "Routing automatico di richieste clienti al team giusto con AI di classificazione",
    ],
    faq: [
      {
        question: "Quali processi si possono automatizzare con l'AI?",
        answer:
          "Qualsiasi processo che segue regole logiche e lavora con testo, numeri o documenti strutturati: inserimento dati, classificazione, risposta a email standard, estrazione di informazioni, reportistica.",
      },
      {
        question: "L'automazione AI richiede di cambiare i software aziendali?",
        answer:
          "No. Costruiamo livelli di automazione che si integrano sopra i sistemi esistenti via API, webhook o RPA. Il tuo team continua a usare gli stessi strumenti.",
      },
      {
        question: "Come si misura il ROI dell'automazione?",
        answer:
          "Contiamo le ore risparmiate, moltiplichiamo per il costo orario medio, sottraiamo il costo dell'implementazione. In media i nostri clienti recuperano l'investimento in 3-6 mesi.",
      },
    ],
  },
  {
    slug: "agenzia-intelligenza-artificiale-italia",
    targetQuery: "agenzia intelligenza artificiale Italia",
    category: "PMI",
    title: "Agenzia Intelligenza Artificiale Italia - IL DOGE DI VENEZIA",
    h1: "L'agenzia AI italiana che costruisce sistemi che funzionano",
    metaDescription:
      "IL DOGE DI VENEZIA è l'agenzia di intelligenza artificiale italiana per PMI e fondi. Strategie AI, agenti autonomi, automazione processi. Risultati misurabili, non promesse.",
    intro:
      "In Italia le agenzie AI si moltiplicano, ma poche hanno la combinazione di competenza tecnica e comprensione del tessuto imprenditoriale italiano. IL DOGE DI VENEZIA è nata per colmare questo gap: un team di ex investitori, ingegneri AI e product manager che conosce le PMI italiane dall'interno e costruisce sistemi AI che si adattano alla realtà operativa di queste imprese.",
    benefits: [
      {
        title: "Competenza tecnica reale",
        description:
          "Il nostro team ha costruito agenti AI, sistemi di automazione e pipeline di dati per aziende in Italia, Germania, Francia e UK. Non siamo rivenditori di strumenti: siamo costruttori.",
      },
      {
        title: "Conoscenza del contesto italiano",
        description:
          "Sappiamo come funzionano le PMI italiane, i loro sistemi gestionali, le resistenze al cambiamento e le opportunità specifiche del mercato. L'approccio è calibrato su questa realtà.",
      },
      {
        title: "Nessun vendor lock-in",
        description:
          "Non siamo rivenditori di nessuna piattaforma specifica. Scegliamo gli strumenti migliori per ogni contesto: OpenAI, Anthropic, tool open source, soluzioni ibride.",
      },
      {
        title: "Partnership a lungo termine",
        description:
          "Non spartiamo dopo il progetto. Molti nostri clienti ci coinvolgono come partner AI continuativi per accompagnare l'evoluzione dei sistemi nel tempo.",
      },
    ],
    useCases: [
      "Strategia AI completa con roadmap implementativa per PMI manifatturiere",
      "Costruzione di agenti AI che gestiscono processi operativi in autonomia",
      "Integrazione AI in portafogli PE per analisi dei dati delle aziende partecipate",
      "Sistemi di business intelligence AI su dati aziendali strutturati e non strutturati",
      "Programmi di formazione AI per team operativi e management",
    ],
    faq: [
      {
        question: "Come scegliete gli strumenti AI da usare?",
        answer:
          "In base al problema da risolvere, non alle partnership commerciali. Valutiamo costo, performance, sicurezza dei dati e compatibilità con i sistemi esistenti.",
      },
      {
        question: "Lavorate anche con aziende fuori dall'Italia?",
        answer:
          "Sì, abbiamo clienti in Germania, Francia e UK. L'approccio è multilingue e adattabile a contesti normativi diversi.",
      },
      {
        question: "Qual è la vostra specializzazione principale?",
        answer:
          "Agenti AI autonomi, automazione di processi documentali e operativi, e sistemi di analisi dati per PMI e fondi di private equity/family office.",
      },
    ],
  },
  {
    slug: "ai-per-manifattura-italiana",
    targetQuery: "AI per manifattura italiana",
    category: "Manifattura",
    title: "AI per la Manifattura Italiana - IL DOGE DI VENEZIA",
    h1: "AI per la manifattura italiana: efficienza operativa senza rivoluzioni",
    metaDescription:
      "Soluzioni AI per aziende manifatturiere italiane. Ottimizzazione produzione, qualità, manutenzione predittiva e gestione supply chain. IL DOGE DI VENEZIA - AI per il manifatturiero italiano.",
    intro:
      "Il manifatturiero italiano è tra i più competitivi al mondo, ma affronta pressioni crescenti su costi, qualità e velocità. L'AI non è la soluzione a tutto - ma in contesti specifici del ciclo produttivo può fare la differenza tra margini compressi e redditività sostenibile. IL DOGE DI VENEZIA lavora con aziende manifatturiere italiane per identificare i nodi di processo dove l'AI porta il massimo valore senza disrupzione operativa.",
    benefits: [
      {
        title: "Controllo qualità potenziato",
        description:
          "Sistemi di visione artificiale che rilevano difetti in linea con precisione superiore all'ispezione umana, riducendo scarti e reclami post-vendita.",
      },
      {
        title: "Manutenzione predittiva",
        description:
          "Analisi dei dati sensor per anticipare guasti prima che fermino la produzione. Meno downtime non pianificato, meno costi di manutenzione d'emergenza.",
      },
      {
        title: "Ottimizzazione della pianificazione",
        description:
          "AI che analizza ordini, stock, capacità produttiva e tempi di consegna per ottimizzare la schedulazione. Meno code, meno ritardi, meno sprechi.",
      },
      {
        title: "Gestione documenti tecnici",
        description:
          "Automazione nella gestione di distinte base, schede tecniche, certificati di conformità e documentazione cliente. Meno errori, più velocità.",
      },
    ],
    useCases: [
      "Ispezione automatica con computer vision per rilevamento difetti su linea produttiva",
      "Sistema di manutenzione predittiva basato su dati vibrazionali e termici",
      "Ottimizzazione automatica della schedulazione produzione su ordini multipli",
      "Analisi AI di non conformità per identificare le cause radice sistemiche",
      "Automazione delle comunicazioni con clienti e fornitori su stato ordini e spedizioni",
    ],
    faq: [
      {
        question: "L'AI richiede di acquistare nuovi macchinari?",
        answer:
          "Non necessariamente. Molti sistemi AI si integrano con sensori e PLC esistenti. Valutiamo caso per caso cosa è già disponibile e cosa è necessario aggiungere.",
      },
      {
        question: "Come gestite la privacy dei dati produttivi?",
        answer:
          "I dati di produzione rimangono all'interno dell'infrastruttura aziendale o in ambienti cloud privati. Non utilizziamo dati produttivi su piattaforme pubbliche.",
      },
      {
        question: "L'AI è applicabile anche a piccole manifatture artigianali?",
        answer:
          "Sì, con gli strumenti giusti. L'automazione documentale e la gestione ordini via AI funzionano anche in contesti con pochi dipendenti e bassa digitalizzazione di partenza.",
      },
    ],
  },
  {
    slug: "ai-per-family-office",
    targetQuery: "AI per family office",
    category: "PE/Family Office",
    title: "AI per Family Office - IL DOGE DI VENEZIA",
    h1: "AI per family office: intelligence patrimoniale e operatività aumentata",
    metaDescription:
      "Soluzioni AI per family office italiani. Analisi portafoglio, due diligence AI, reporting automatico e gestione documentale. IL DOGE DI VENEZIA - AI per la gestione patrimoniale.",
    intro:
      "I family office gestiscono complessità crescente: asset class multiple, reporting multi-giurisdizionale, due diligence continue e una pressione costante sulla riservatezza. L'AI, applicata correttamente, riduce il carico operativo del team e aumenta la qualità delle analisi senza compromettere la discrezione che questo segmento richiede. IL DOGE DI VENEZIA ha sviluppato soluzioni specifiche per la realtà dei family office italiani.",
    benefits: [
      {
        title: "Reporting patrimoniale automatizzato",
        description:
          "Consolida automaticamente dati da banche, custodi e gestori in report periodici strutturati. Meno ore manuali, meno errori di riconciliazione.",
      },
      {
        title: "Due diligence potenziata da AI",
        description:
          "Analisi rapida di memorandum, bilanci e documenti legali con AI che estrae i punti critici e i rischi principali, accelerando il processo decisionale.",
      },
      {
        title: "Knowledge base patrimoniale",
        description:
          "Un sistema AI che centralizza la memoria storica del family office - decisioni passate, posizioni, note di analisi - e la rende interrogabile in linguaggio naturale.",
      },
      {
        title: "Gestione documentale sicura",
        description:
          "Classificazione automatica, archiviazione strutturata e recupero istantaneo di documenti legali, fiscali e finanziari con accesso controllato.",
      },
    ],
    useCases: [
      "Consolidamento automatico di estratti conto da 5+ istituti in un unico report mensile",
      "Analisi AI di CIM e pitch deck per investment committee con executive summary automatico",
      "Sistema di monitoraggio news AI per le aziende partecipate e i mercati rilevanti",
      "Automazione del processo di compliance documentale annuale",
      "Dashboard di portafoglio aggregato con aggiornamento automatico via API bancarie",
    ],
    faq: [
      {
        question: "Come garantite la riservatezza dei dati patrimoniali?",
        answer:
          "I sistemi AI per family office vengono implementati su infrastruttura privata (on-premise o cloud privato dedicato). Nessun dato patrimoniale transita su sistemi pubblici.",
      },
      {
        question: "L'AI può aiutare con le analisi di investimento diretto?",
        answer:
          "Sì. Costruiamo strumenti AI che accelerano la due diligence su aziende target, analizzano documenti finanziari e sintetizzano informazioni da fonti multiple.",
      },
      {
        question: "Quante persone servono per gestire i sistemi AI?",
        answer:
          "I sistemi sono progettati per essere usati da team di 2-5 persone senza competenze tecniche. La complessità è nascosta sotto interfacce semplici.",
      },
    ],
  },
  {
    slug: "ai-per-private-equity",
    targetQuery: "AI per private equity",
    category: "PE/Family Office",
    title: "AI per Private Equity - IL DOGE DI VENEZIA",
    h1: "AI per il private equity: dal deal flow alla gestione del portafoglio",
    metaDescription:
      "Soluzioni AI per fondi di private equity italiani. Screening deal flow, due diligence AI, monitoraggio portafoglio e reporting LP. IL DOGE DI VENEZIA - AI per il PE italiano.",
    intro:
      "I fondi PE italiani operano in un mercato sempre più competitivo dove la velocità e la qualità dell'analisi possono fare la differenza tra aggiudicarsi una transazione e perderla. L'AI applicata al workflow del private equity accelera lo screening, approfondisce la due diligence e migliora il monitoraggio del portafoglio - liberando i professionisti per il lavoro ad alto valore che solo loro possono fare.",
    benefits: [
      {
        title: "Screening deal flow accelerato",
        description:
          "Analisi automatica di CIM, pitch deck e profili aziendali per filtrare rapidamente le opportunità in linea con il mandato del fondo. Meno tempo perso su deal non compatibili.",
      },
      {
        title: "Due diligence più profonda",
        description:
          "AI che analizza bilanci storici, contratti chiave, documenti legali e notizie di mercato per costruire un quadro di rischio più completo in meno tempo.",
      },
      {
        title: "Monitoraggio portafoglio proattivo",
        description:
          "Dashboard AI che aggrega KPI delle partecipate, segnali di rischio e opportunità di value creation. Interventi più tempestivi, meno sorprese a fine periodo.",
      },
      {
        title: "Reporting LP automatizzato",
        description:
          "Generazione automatica di quarterly report e capital account statement riducendo il carico amministrativo del team di investor relations.",
      },
    ],
    useCases: [
      "Sistema di scoring AI per qualificazione automatica del deal flow in entrata",
      "Analisi automatica di bilanci decennali con identificazione di trend e anomalie",
      "Strumento di competitive intelligence AI per il monitoraggio del mercato target",
      "Automazione del processo di raccolta e consolidamento KPI delle partecipate",
      "AI assistant per la preparazione di Investment Committee Memorandum",
    ],
    faq: [
      {
        question: "L'AI può sostituire l'analista nel processo di due diligence?",
        answer:
          "No, e non è questo l'obiettivo. L'AI accelera il lavoro di ricerca e sintesi, ma il giudizio finale su una transazione rimane al team. L'analista lavora su dati più completi in meno tempo.",
      },
      {
        question: "Come si integra con il workflow esistente del fondo?",
        answer:
          "Ci adattiamo agli strumenti in uso - che siano Excel, Notion, Salesforce o piattaforme dedicate al PE. Non chiediamo di cambiare workflow, lo potenziamo.",
      },
      {
        question: "È adatto anche a fondi di dimensioni medie?",
        answer:
          "Sì. Molte nostre soluzioni nascono proprio per fondi mid-market che non hanno un team IT dedicato ma vogliono la stessa qualità analitica dei grandi player.",
      },
    ],
  },
  {
    slug: "chatbot-aziendale-italiano",
    targetQuery: "chatbot aziendale italiano",
    category: "PMI",
    title: "Chatbot Aziendale Italiano - IL DOGE DI VENEZIA",
    h1: "Chatbot aziendale in italiano: assistente AI per il tuo business",
    metaDescription:
      "Costruiamo chatbot aziendali in italiano per PMI. Customer service, supporto interno, qualificazione lead. Chatbot AI su misura integrati con i tuoi sistemi. IL DOGE DI VENEZIA.",
    intro:
      "Un chatbot aziendale non è un widget da mettere sul sito e dimenticare. Un chatbot ben costruito è un sistema intelligente che conosce la tua azienda, risponde in modo accurato nelle situazioni che contano e sa quando passare la conversazione a un operatore umano. IL DOGE DI VENEZIA costruisce chatbot aziendali in italiano che funzionano sul campo - non nella demo.",
    benefits: [
      {
        title: "Addestrato sulla tua azienda",
        description:
          "Il chatbot impara da documenti aziendali reali: catalogo prodotti, listini, FAQ, procedure operative, policy. Risponde con la voce e le informazioni della tua azienda.",
      },
      {
        title: "Multicanale e integrato",
        description:
          "Stesso chatbot su sito web, WhatsApp Business, email e sistemi interni. Un'unica fonte di verità, ovunque il cliente o il dipendente si trovi.",
      },
      {
        title: "Escalation intelligente",
        description:
          "Sa quando non può rispondere e trasferisce la conversazione al reparto giusto con il contesto completo. Il cliente non deve ripetere nulla.",
      },
      {
        title: "Miglioramento continuo",
        description:
          "Ogni conversazione diventa dato per migliorare le risposte. Il chatbot si aggiorna quando cambiano prodotti, prezzi o procedure.",
      },
    ],
    useCases: [
      "Chatbot customer service per PMI e-commerce: ordini, resi, spedizioni, FAQ prodotto",
      "Assistente interno per il team: procedure HR, policy aziendali, onboarding nuovi dipendenti",
      "Qualificazione lead automatica sul sito con passaggio hot lead al commerciale",
      "Supporto post-vendita tecnico con diagnosi guidata via chat",
      "Chatbot multilingue per aziende manifatturiere con clienti internazionali",
    ],
    faq: [
      {
        question: "Quanto tempo ci vuole per costruire un chatbot aziendale?",
        answer:
          "Un chatbot funzionante su un caso d'uso specifico si costruisce in 2-3 settimane. La complessità cresce con il numero di casi d'uso e le integrazioni richieste.",
      },
      {
        question: "Il chatbot capisce l'italiano colloquiale e i dialetti?",
        answer:
          "I modelli che utilizziamo gestiscono molto bene l'italiano informale e le varianti regionali. Per settori con terminologia molto specifica, includiamo una fase di fine-tuning sul vocabolario aziendale.",
      },
      {
        question: "Come si aggiornano le informazioni nel chatbot?",
        answer:
          "Con un pannello semplice dove il team carica i documenti aggiornati. Nessuna competenza tecnica richiesta per aggiornare il knowledge base.",
      },
    ],
  },
  {
    slug: "agenti-ai-per-aziende",
    targetQuery: "agenti AI per aziende",
    category: "PMI",
    title: "Agenti AI per Aziende - IL DOGE DI VENEZIA",
    h1: "Agenti AI per aziende: il tuo team digitale che lavora 24/7",
    metaDescription:
      "Costruiamo agenti AI autonomi per aziende italiane. Agenti che eseguono task complessi, prendono decisioni e integrano sistemi diversi. IL DOGE DI VENEZIA - AI agenti operativi.",
    intro:
      "Un agente AI non è un chatbot. È un sistema autonomo che riceve un obiettivo, pianifica i passi necessari, usa strumenti digitali (email, database, API, browser) e produce risultati - senza supervisione costante. IL DOGE DI VENEZIA costruisce agenti AI operativi per aziende italiane: sistemi che lavorano come un collaboratore digitale su processi definiti, liberando il team umano per decisioni strategiche.",
    benefits: [
      {
        title: "Autonomia operativa reale",
        description:
          "A differenza di un semplice bot, un agente AI gestisce variabilità: situazioni nuove, eccezioni, decisioni multi-step. Lavora come un collaboratore, non come un formulario.",
      },
      {
        title: "Integrazione multi-sistema",
        description:
          "Un agente può leggere email, aggiornare un CRM, cercare informazioni online, compilare report e inviare notifiche - tutto in un unico flusso autonomo.",
      },
      {
        title: "Scalabilità immediata",
        description:
          "Puoi avere 1 o 100 istanze dello stesso agente che lavorano in parallelo. Il costo cresce linearmente con il volume, non esponenzialmente come con il personale.",
      },
      {
        title: "Audit trail completo",
        description:
          "Ogni azione dell'agente viene registrata. Sai esattamente cosa ha fatto, quando e perché - fondamentale per compliance e miglioramento continuo.",
      },
    ],
    useCases: [
      "Agente di ricerca e qualificazione lead: cerca aziende target, valida contatti, aggiorna CRM",
      "Agente di monitoraggio competitor: traccia prezzi, news e attività digitali automaticamente",
      "Agente di gestione inbox: categorizza, risponde e smista email operative in autonomia",
      "Agente di procurement: confronta fornitori, richiede preventivi e sintetizza le opzioni",
      "Agente di analisi: legge report finanziari, estrae KPI e produce executive summary",
    ],
    faq: [
      {
        question: "Qual è la differenza tra un agente AI e un chatbot?",
        answer:
          "Un chatbot risponde a domande. Un agente AI esegue task complessi, usa strumenti esterni e porta a termine obiettivi in modo autonomo, anche su processi che richiedono più passi e decisioni.",
      },
      {
        question: "Un agente AI può fare errori?",
        answer:
          "Sì, come qualsiasi sistema automatizzato. Per questo implementiamo sempre meccanismi di supervisione umana per le azioni ad alto impatto e definiamo chiaramente i limiti di autonomia dell'agente.",
      },
      {
        question: "Quanto costa mantenere un agente AI in produzione?",
        answer:
          "Il costo operativo dipende dal volume di task eseguiti e dagli strumenti AI utilizzati. In media è significativamente inferiore al costo del lavoro equivalente.",
      },
    ],
  },
  {
    slug: "roi-intelligenza-artificiale-pmi",
    targetQuery: "ROI intelligenza artificiale PMI",
    category: "PMI",
    title: "ROI dell'Intelligenza Artificiale per le PMI - IL DOGE DI VENEZIA",
    h1: "Il ROI reale dell'AI nelle PMI italiane: numeri, non promesse",
    metaDescription:
      "Qual è il ritorno sull'investimento dell'AI per una PMI italiana? IL DOGE DI VENEZIA analizza il ROI concreto delle implementazioni AI: risparmio ore, riduzione costi, aumento ricavi.",
    intro:
      "Prima di investire in AI, ogni imprenditore fa la domanda giusta: ne vale la pena? La risposta dipende dal processo che si automatizza, dalla dimensione aziendale e dalla qualità dell'implementazione. IL DOGE DI VENEZIA ha calcolato il ROI reale di decine di implementazioni AI nelle PMI italiane. I numeri sono incoraggianti - ma solo se si parte dal processo giusto.",
    benefits: [
      {
        title: "Risparmio sul lavoro manuale",
        description:
          "Le implementazioni AI tipiche nelle PMI liberano 15-50 ore/settimana di lavoro manuale ripetitivo. A €25/ora media, significa €19.000-€65.000 di risparmio annuo.",
      },
      {
        title: "Riduzione degli errori costosi",
        description:
          "Gli errori in fatturazione, gestione ordini e compliance hanno costi diretti e indiretti. L'AI riduce il tasso di errore del 60-90% su processi strutturati.",
      },
      {
        title: "Aumento della capacità senza assumere",
        description:
          "Un'azienda con AI gestisce volumi superiori con la stessa struttura. Crescita dei ricavi senza crescita proporzionale dei costi operativi.",
      },
      {
        title: "Payback in 3-9 mesi",
        description:
          "La maggior parte delle nostre implementazioni PMI raggiunge il break-even tra 3 e 9 mesi dall'go-live. Dopo, ogni mese è puro risparmio netto.",
      },
    ],
    useCases: [
      "Calcolo ROI specifico per automazione back-office in aziende da 10-50 dipendenti",
      "Analisi costi-benefici di un agente AI per customer service vs. assunzione",
      "Stima del risparmio su errori di inserimento dati con automazione AI",
      "Valutazione dell'impatto su fatturato di una qualificazione lead automatica",
      "Confronto costo AI vs. costo outsourcing per processi operativi standard",
    ],
    faq: [
      {
        question: "Quanto si investe mediamente per implementare l'AI in una PMI?",
        answer:
          "I progetti pilota su un singolo processo partono da poche migliaia di euro. I programmi di trasformazione AI più ampi si collocano nella fascia €15.000-€50.000. Il ritorno è solitamente multiplo dell'investimento entro il primo anno.",
      },
      {
        question: "Come calcolate il ROI prima di iniziare?",
        answer:
          "Con un'analisi dei processi che quantifica le ore manuali coinvolte, il costo del personale corrispondente e la frequenza degli errori. Prima di qualsiasi contratto, vi diamo una stima del ROI atteso.",
      },
      {
        question: "Il ROI è garantito?",
        answer:
          "Non esistono garanzie assolute, ma lavoriamo solo su processi dove il ROI è ragionevolmente calcolabile. Se la stima non regge, ve lo diciamo prima.",
      },
    ],
  },
  {
    slug: "trasformazione-digitale-ai-pmi",
    targetQuery: "trasformazione digitale AI PMI",
    category: "PMI",
    title: "Trasformazione Digitale AI per PMI - IL DOGE DI VENEZIA",
    h1: "Trasformazione digitale con AI per PMI: il percorso pratico",
    metaDescription:
      "Guida alla trasformazione digitale AI per PMI italiane. Come integrare l'intelligenza artificiale nella strategia digitale aziendale con risultati concreti. IL DOGE DI VENEZIA.",
    intro:
      "La trasformazione digitale delle PMI italiane è rimasta troppo spesso a livello di software gestionale e firme digitali. L'AI rappresenta il vero salto: non solo digitalizzare i processi esistenti, ma ridisegnarli con intelligenza. IL DOGE DI VENEZIA accompagna le PMI in questo percorso con un approccio graduato che non destabilizza l'operatività ma porta l'azienda a un livello di efficienza strutturalmente superiore.",
    benefits: [
      {
        title: "Percorso graduale e sostenibile",
        description:
          "Non si cambia tutto in una volta. Si inizia dal processo con il maggiore impatto, si consolida, e si espande. Il team si adatta senza traumi.",
      },
      {
        title: "AI come enabler, non come sostituto",
        description:
          "La trasformazione AI potenzia le persone esistenti. Non richiede di cambiare il team: richiede di equipaggiarlo con strumenti migliori.",
      },
      {
        title: "Competitività strutturale",
        description:
          "Le PMI che completano la trasformazione AI nei prossimi 3 anni avranno un vantaggio competitivo difficile da colmare per chi parte dopo.",
      },
      {
        title: "Supporto al cambiamento",
        description:
          "La resistenza interna al cambiamento è il killer numero uno delle trasformazioni digitali. Includiamo change management e formazione nel percorso.",
      },
    ],
    useCases: [
      "Roadmap di trasformazione AI per PMI manifatturiera con 50-200 dipendenti",
      "Integrazione AI in una PMI già digitalizzata che vuole il passo successivo",
      "Programma di adozione AI per un'azienda familiare che passa alla seconda generazione",
      "Trasformazione AI di una rete di PMI con processi condivisi",
      "Piano di digitalizzazione AI-first per una startup in fase di scaling",
    ],
    faq: [
      {
        question: "La nostra PMI è già pronta per la trasformazione AI?",
        answer:
          "La readiness varia. La prima sessione con noi include una valutazione della maturità digitale attuale e un piano realistico basato su quello che c'è già.",
      },
      {
        question: "Quanto dura un percorso di trasformazione AI?",
        answer:
          "Le prime implementazioni si vedono in 1-2 mesi. Una trasformazione completa di 3-5 processi core dura 6-12 mesi. Il ROI arriva molto prima del completamento.",
      },
      {
        question: "Serve un CTO o un responsabile IT interno?",
        answer:
          "No. Per le PMI tipiche, gestiamo noi la parte tecnica e formiamo un referente interno (che non deve avere competenze tecniche) per la gestione quotidiana.",
      },
    ],
  },
  {
    slug: "ai-per-customer-service-pmi",
    targetQuery: "AI per customer service PMI",
    category: "PMI",
    title: "AI per il Customer Service delle PMI - IL DOGE DI VENEZIA",
    h1: "AI per il customer service delle PMI: più qualità, meno costi",
    metaDescription:
      "Potenzia il customer service della tua PMI con l'AI. Chatbot, automazione ticket, risposte automatiche e analisi del sentiment. IL DOGE DI VENEZIA - AI per il servizio clienti.",
    intro:
      "Il customer service è uno dei processi dove l'AI genera il ROI più rapido per le PMI italiane. Non perché l'AI sia superiore all'empatia umana - ma perché la maggior parte delle richieste cliente sono prevedibili e risolvibili in modo standardizzato. L'AI gestisce l'80% dei casi standard, lasciando al team umano il 20% che richiede davvero giudizio e relazione.",
    benefits: [
      {
        title: "Risposta immediata H24",
        description:
          "I clienti ricevono risposta istantanea anche fuori orario d'ufficio. Riduce l'abbandono per tempi di attesa e migliora la soddisfazione anche nel B2B.",
      },
      {
        title: "Consistenza nelle risposte",
        description:
          "Ogni cliente riceve la stessa qualità di risposta, sempre aggiornata. Nessuna variabilità tra operatori diversi, nessuna informazione sbagliata per stanchezza.",
      },
      {
        title: "Scalabilità durante i picchi",
        description:
          "Il volume di richieste varia molto (stagionalità, lanci, crisi). L'AI gestisce i picchi senza assumere personale temporaneo.",
      },
      {
        title: "Analisi della soddisfazione",
        description:
          "Analisi automatica del sentiment delle conversazioni per identificare problemi ricorrenti, prodotti problematici e aree di miglioramento.",
      },
    ],
    useCases: [
      "Customer service automatico per e-commerce: tracciamento ordini, resi, disponibilità prodotti",
      "Sistema di ticketing intelligente con classificazione e routing automatico",
      "Risposte automatiche email con gestione di richieste standard (preventivi, info, lamentele)",
      "Chatbot post-vendita per assistenza tecnica prodotti con knowledge base strutturato",
      "Survey automatica di soddisfazione con analisi AI e report mensile al management",
    ],
    faq: [
      {
        question: "I clienti si accorgono che stanno parlando con un'AI?",
        answer:
          "Dipende dalla configurazione. Per alcuni contesti preferiamo la trasparenza totale (chatbot dichiarato). Per altri, costruiamo un'assistente con nome e personalità aziendale. Decidiamo insieme.",
      },
      {
        question: "Come si gestisce quando l'AI non sa rispondere?",
        answer:
          "L'agente AI riconosce i limiti del suo knowledge base e trasferisce la conversazione a un operatore umano con tutto il contesto della conversazione già disponibile.",
      },
      {
        question: "Può essere usato su WhatsApp Business?",
        answer:
          "Sì. Costruiamo soluzioni su WhatsApp Business API, email, sito web e Telegram. Il canale preferito dal vostro cliente è il canale che attiviamo.",
      },
    ],
  },
  {
    slug: "ai-per-procurement-aziendale",
    targetQuery: "AI per procurement aziendale",
    category: "PMI",
    title: "AI per il Procurement Aziendale - IL DOGE DI VENEZIA",
    h1: "AI per il procurement: acquisti più intelligenti, costi più bassi",
    metaDescription:
      "Ottimizza il procurement aziendale con l'intelligenza artificiale. Analisi fornitori, gestione contratti, automazione RFQ e previsione costi. IL DOGE DI VENEZIA.",
    intro:
      "Il procurement è uno dei processi aziendali con il maggiore potenziale AI nelle PMI italiane: è ricco di dati strutturati, ha impatto diretto sui margini e coinvolge molta attività manuale a basso valore aggiunto. IL DOGE DI VENEZIA porta l'AI nel processo di acquisto - dall'analisi dei fornitori alla gestione contrattuale - per ridurre i costi e aumentare l'affidabilità della supply chain.",
    benefits: [
      {
        title: "Analisi fornitori automatizzata",
        description:
          "Valutazione continua delle performance dei fornitori su puntualità, qualità, prezzi. Allarmi automatici su deviazioni e identificazione di alternative.",
      },
      {
        title: "Gestione contratti AI",
        description:
          "Estrazione automatica dei termini chiave da contratti fornitori, monitoraggio scadenze, alert su rinnovi e analisi comparative tra condizioni diverse.",
      },
      {
        title: "Previsione fabbisogni",
        description:
          "AI che analizza storici di consumo e previsioni di vendita per anticipare i fabbisogni di acquisto, riducendo urgenze costose e stock eccessivi.",
      },
      {
        title: "Automazione RFQ",
        description:
          "Generazione automatica di richieste di preventivo, raccolta e confronto delle offerte, con sintesi per il buyer che mantiene il controllo decisionale.",
      },
    ],
    useCases: [
      "Sistema AI di vendor rating con aggiornamento automatico basato su dati ERP",
      "Estrazione e classificazione automatica di condizioni da contratti fornitori esistenti",
      "Previsione degli ordini di riapprovvigionamento su 40+ categorie di materie prime",
      "Automazione del processo RFQ per acquisti ricorrenti sotto soglia",
      "Dashboard procurement con analisi spesa, trend prezzi e alert su anomalie",
    ],
    faq: [
      {
        question: "L'AI per il procurement funziona anche senza un ERP avanzato?",
        answer:
          "Sì. Possiamo partire da dati in Excel o da sistemi gestionali base. L'AI non richiede infrastrutture sofisticate per portare valore nel procurement.",
      },
      {
        question: "Come si integra con i fornitori esistenti?",
        answer:
          "Principalmente via elaborazione di documenti (email, PDF, fatture). Non richiede integrazione tecnica con i sistemi del fornitore.",
      },
      {
        question: "Può aiutare a identificare opportunità di risparmio sui fornitori attuali?",
        answer:
          "Sì. L'analisi AI degli storici di spesa e dei prezzi di mercato identifica spesso opportunità di rinegoziazione che passano inosservate con la gestione manuale.",
      },
    ],
  },
  {
    slug: "ridurre-costi-con-ai",
    targetQuery: "ridurre costi aziendali con AI",
    category: "PMI",
    title: "Ridurre i Costi Aziendali con l'AI - IL DOGE DI VENEZIA",
    h1: "Come ridurre i costi aziendali con l'AI: dove intervenire prima",
    metaDescription:
      "Scopri come ridurre i costi aziendali con l'intelligenza artificiale. IL DOGE DI VENEZIA identifica i processi ad alto impatto e costruisce soluzioni AI con ROI misurabile.",
    intro:
      "L'AI non è solo crescita -è anche efficienza. Per molte PMI italiane, il business case più forte per l'AI non è aumentare i ricavi ma ridurre i costi operativi su processi che consumano risorse senza creare valore differenziante. IL DOGE DI VENEZIA ha identificato i 5 aree dove l'AI riduce i costi più velocemente per le PMI italiane.",
    benefits: [
      {
        title: "Costi del lavoro amministrativo",
        description:
          "L'80% del lavoro amministrativo ripetitivo può essere automatizzato: inserimento dati, riconciliazioni, generazione documenti, archiviazione. Risparmio diretto sul costo del personale o redistribuzione verso attività a maggiore valore.",
      },
      {
        title: "Costi degli errori",
        description:
          "Errori in fatturazione, ordini, compliance e qualità hanno costi diretti (rielaborazione, resi, penali) e indiretti (reputazione, fidelizzazione). L'AI riduce questi costi del 60-90%.",
      },
      {
        title: "Costi del customer service",
        description:
          "Gestire 80% delle richieste standard con AI e riservare il team umano ai casi complessi riduce il costo per ticket del 40-70%.",
      },
      {
        title: "Costi di procurement",
        description:
          "Ottimizzazione degli acquisti, riduzione urgenze e migliore negoziazione con fornitori genera risparmi del 5-15% sulla spesa acquisti.",
      },
    ],
    useCases: [
      "Audit dei costi operativi con identificazione dei top 5 processi da automatizzare",
      "Automazione completa del back-office amministrativo in PMI da 20-100 persone",
      "Riduzione costi customer service con AI che gestisce il tier-1 del supporto",
      "Ottimizzazione del magazzino con previsioni AI della domanda",
      "Consolidamento dei tool digitali con un layer AI unificato",
    ],
    faq: [
      {
        question: "Quanto si può risparmiare in media con l'AI?",
        answer:
          "Dipende dal punto di partenza. PMI con processi manuali elevati vedono risparmi del 20-35% sui costi operativi dei processi automatizzati nel primo anno.",
      },
      {
        question: "L'AI porta sempre a riduzione del personale?",
        answer:
          "Non necessariamente. Nella maggior parte dei nostri casi, l'AI redistribuisce il lavoro verso attività a maggiore valore senza ridurre il personale - spesso permettendo la crescita senza nuove assunzioni.",
      },
      {
        question: "Dove si inizia per ridurre i costi con l'AI?",
        answer:
          "Dal processo con il maggiore volume di ore manuali e il minore valore aggiunto per ogni ora. Di solito è l'inserimento dati o la gestione documentale. La prima sessione con noi identifica esattamente questo.",
      },
    ],
  },
  {
    slug: "automazione-marketing-ai",
    targetQuery: "automazione marketing con AI",
    category: "PMI",
    title: "Automazione Marketing con AI - IL DOGE DI VENEZIA",
    h1: "Automazione del marketing con AI: più lead, meno ore",
    metaDescription:
      "Automatizza il marketing della tua azienda con l'intelligenza artificiale. Lead generation, email marketing AI, content automation e analisi campagne. IL DOGE DI VENEZIA.",
    intro:
      "Il marketing delle PMI italiane spesso soffre di due problemi: non abbastanza risorse per fare tutto, e difficoltà a misurare cosa funziona davvero. L'AI risolve entrambi: automatizza le attività ripetitive e porta dati concreti sulle performance. IL DOGE DI VENEZIA costruisce sistemi di marketing automation AI che lavorano anche quando il team è impegnato altrove.",
    benefits: [
      {
        title: "Lead generation automatizzata",
        description:
          "Sistemi AI che identificano prospect in linea con il profilo cliente ideale, costruiscono liste qualificate e personalizzano il primo contatto su scala.",
      },
      {
        title: "Email e contenuti AI",
        description:
          "Generazione assistita di newsletter, follow-up email, post social e content marketing. Velocità 10x rispetto alla produzione manuale, qualità controllata.",
      },
      {
        title: "Nurturing automatico",
        description:
          "Sequenze di comunicazione intelligenti che si adattano al comportamento del prospect. Il lead riceve il contenuto giusto al momento giusto, senza intervento manuale.",
      },
      {
        title: "Analisi campagne in tempo reale",
        description:
          "Dashboard AI che analizza le performance delle campagne, identifica pattern e suggerisce ottimizzazioni. Decisioni basate su dati, non intuizioni.",
      },
    ],
    useCases: [
      "Sistema di outbound B2B automatizzato con personalizzazione AI per PMI",
      "Automazione del nurturing email per pipeline commerciale lunga (6-18 mesi)",
      "Generazione automatica di varianti A/B per landing page e email con AI",
      "Sistema di content marketing AI per blog e social media aziendale",
      "Analisi automatica delle recensioni online e monitoraggio reputazione",
    ],
    faq: [
      {
        question: "L'automazione marketing AI funziona anche per B2B di nicchia?",
        answer:
          "Sì, spesso meglio che per i mercati di massa. In mercati B2B verticali, la personalizzazione AI è più efficace perché i prospect hanno caratteristiche molto definite.",
      },
      {
        question: "Si integra con HubSpot, Salesforce o altri CRM?",
        answer:
          "Sì. Costruiamo soluzioni che si integrano con i CRM e marketing tool già in uso. Non è necessario cambiare piattaforma.",
      },
      {
        question: "I contenuti generati dall'AI sono di qualità?",
        answer:
          "Con il giusto training sul brand e il settore, la qualità è alta per la maggior parte dei contenuti standard. Per contenuti ad alta complessità o thought leadership, lavoriamo in modalità assisted writing (AI + editing umano).",
      },
    ],
  },
  {
    slug: "ai-per-logistica-distribuzione",
    targetQuery: "AI per logistica e distribuzione",
    category: "Settore",
    title: "AI per Logistica e Distribuzione - IL DOGE DI VENEZIA",
    h1: "AI per la logistica: ottimizzare la distribuzione con l'intelligenza artificiale",
    metaDescription:
      "Soluzioni AI per aziende di logistica e distribuzione italiane. Ottimizzazione rotte, previsione domanda, gestione magazzino e tracking intelligente. IL DOGE DI VENEZIA.",
    intro:
      "La logistica e distribuzione italiana affronta pressioni crescenti: costi carburante, aspettative di consegna rapida, complessità della supply chain. L'AI applicata alla logistica non è fantascienza -è ottimizzazione concreta di rotte, previsione della domanda e gestione intelligente del magazzino. IL DOGE DI VENEZIA costruisce sistemi AI per operatori logistici e aziende di distribuzione italiane.",
    benefits: [
      {
        title: "Ottimizzazione delle rotte",
        description:
          "AI che calcola le rotte di consegna ottimali in tempo reale, considerando traffico, finestre di consegna, capacità veicoli e priorità. Risparmio 10-25% sui costi di trasporto.",
      },
      {
        title: "Previsione della domanda",
        description:
          "Analisi dei pattern storici, stagionalità e segnali esterni per prevedere i volumi con settimane di anticipo. Meno urgenze, meno overstock, meno rotture.",
      },
      {
        title: "Gestione magazzino intelligente",
        description:
          "Ottimizzazione degli spazi, dei percorsi di picking e del riapprovvigionamento. AI che impara dalla realtà operativa del magazzino e si adatta continuamente.",
      },
      {
        title: "Visibilità in tempo reale",
        description:
          "Tracking automatico delle spedizioni con notifiche proattive a clienti e al team interno. Meno telefonate di controllo, più soddisfazione cliente.",
      },
    ],
    useCases: [
      "Ottimizzazione rotte per flotta di 10-50 veicoli con finestre di consegna rigide",
      "Sistema di previsione ordini per un distributore FMCG con 500+ SKU",
      "Automazione del processo di ricevimento e stoccaggio merci in magazzino",
      "Tracking intelligente spedizioni con notifiche automatiche proattive ai clienti",
      "Analisi AI delle inefficienze operative su dati TMS/WMS esistenti",
    ],
    faq: [
      {
        question: "L'AI per la logistica richiede di cambiare il TMS/WMS esistente?",
        answer:
          "Non necessariamente. Possiamo costruire un layer AI che si integra sopra i sistemi esistenti via API o tramite elaborazione dei dati esportati.",
      },
      {
        question: "Funziona anche per piccoli operatori logistici?",
        answer:
          "Sì. Anche con 5-10 veicoli e un magazzino medio, l'ottimizzazione AI delle rotte e della gestione stock produce risparmio misurabile.",
      },
      {
        question: "Come si misura il miglioramento?",
        answer:
          "Su metriche concrete: km percorsi per consegna, tasso di consegna alla prima finestra, costo per ordine evaso, rotazione stock. Definiamo le baseline prima di iniziare.",
      },
    ],
  },
  {
    slug: "consulenza-ai-milano",
    targetQuery: "consulenza AI Milano",
    category: "Geo",
    title: "Consulenza AI Milano - IL DOGE DI VENEZIA",
    h1: "Consulenza AI a Milano: il partner per la trasformazione intelligente",
    metaDescription:
      "Consulenza AI a Milano per PMI e aziende. IL DOGE DI VENEZIA offre strategie AI, automazione processi e agenti AI per aziende milanesi e dell'hinterland. Risultati in 30 giorni.",
    intro:
      "Milano è il centro del business italiano, con una concentrazione unica di PMI avanzate, startup, fondi e corporate in trasformazione. Le aziende milanesi che si avvicinano all'AI hanno aspettative alte: non cercano teorici, cercano partner che consegnano risultati. IL DOGE DI VENEZIA lavora con aziende nel milanese con un approccio diretto, tempi rapidi e accountability sui risultati.",
    benefits: [
      {
        title: "Presenza operativa nel Nord Italia",
        description:
          "Il nostro team opera principalmente nel Nord Italia. Possiamo incontrare il vostro management di persona, visitare le operation e costruire una relazione diretta - non solo via video call.",
      },
      {
        title: "Conoscenza del mercato milanese",
        description:
          "Conosciamo il tessuto imprenditoriale milanese: dal manifatturiero dell'hinterland al fintech del centro, dalle PMI dei distretti alle holding patrimoniali.",
      },
      {
        title: "Network di partner locali",
        description:
          "Lavoriamo con studi legali, commercialisti e consulenti manageriali milanesi per implementazioni che considerano anche gli aspetti fiscali e normativi locali.",
      },
      {
        title: "Velocità di risposta",
        description:
          "Essere nello stesso fuso orario e a poca distanza fisica significa tempi di risposta rapidi, disponibilità per incontri on-site e maggiore agilità operativa.",
      },
    ],
    useCases: [
      "Consulenza AI per PMI manifatturiere dell'hinterland milanese",
      "Implementazione AI per studi professionali e società di servizi B2B milanesi",
      "Strategie AI per startup e scale-up nel ecosistema innovazione di Milano",
      "Automazione processi per holding e family office con sede a Milano",
      "Formazione AI per team operativi di medie imprese del commercio milanese",
    ],
    faq: [
      {
        question: "Lavorate solo a Milano?",
        answer:
          "No. Siamo basati nel Nord Est ma lavoriamo con clienti in tutta Italia e internazionali. La prossimità geografica all'area milanese è un vantaggio, non un vincolo.",
      },
      {
        question: "Potete incontrarci di persona a Milano?",
        answer:
          "Assolutamente sì. Le prime sessioni strategiche le preferiamo di persona. Siamo disponibili per incontri a Milano su appuntamento.",
      },
      {
        question: "Avete già clienti a Milano?",
        answer:
          "Sì, lavoriamo con aziende nell'area milanese in diversi settori. Possiamo fornire referenze specifiche per settore su richiesta.",
      },
    ],
  },
  {
    slug: "consulenza-ai-nord-italia",
    targetQuery: "consulenza AI Nord Italia",
    category: "Geo",
    title: "Consulenza AI Nord Italia - IL DOGE DI VENEZIA",
    h1: "Consulenza AI nel Nord Italia: per le imprese che vogliono crescere con intelligenza",
    metaDescription:
      "Consulenza AI per le PMI del Nord Italia. Veneto, Lombardia, Emilia, Piemonte, Trentino. IL DOGE DI VENEZIA - partner AI per il tessuto imprenditoriale del Nord Est e Nord Ovest.",
    intro:
      "Il Nord Italia è il motore manifatturiero, commerciale e finanziario del Paese. Le PMI del Veneto, Lombardia, Emilia-Romagna, Piemonte e Trentino hanno la struttura per adottare l'AI e beneficiarne rapidamente - ma spesso mancano di un partner che conosca sia la tecnologia sia la realtà operativa del tessuto produttivo locale. IL DOGE DI VENEZIA è nata nel Nord Est per questo.",
    benefits: [
      {
        title: "Radici nel tessuto produttivo nordestino",
        description:
          "Conosciamo i distretti produttivi, le filiere, i fornitori e le dinamiche del manifatturiero italiano perché ci lavoriamo da anni. Non arriviamo da fuori con un modello straniero.",
      },
      {
        title: "Copertura geografica completa",
        description:
          "Operiamo in tutto il Nord Italia: Triveneto, Lombardia, Emilia-Romagna, Piemonte, Liguria. Con possibilità di incontri on-site ovunque.",
      },
      {
        title: "Reti di partner regionali",
        description:
          "Collaboriamo con associazioni di categoria, Confindustria locale, CNA e Confartigianato per portare l'AI anche alle PMI più lontane dall'ecosistema tech.",
      },
      {
        title: "AI per le specificità del Nord Italia",
        description:
          "Distretti della moda, meccanica di precisione, agroalimentare, terziario avanzato: ogni settore ha necessità diverse e noi conosciamo le specificità di ognuno.",
      },
    ],
    useCases: [
      "AI per PMI manifatturiere nei distretti produttivi veneti e lombardi",
      "Automazione processi per aziende del settore agroalimentare del Nord Italia",
      "Consulenza AI per studi professionali e intermediari finanziari dell'Emilia",
      "Implementazione AI per PMI nel settore moda e tessile",
      "Programmi AI per associazioni di categoria e Confindustria territoriali",
    ],
    faq: [
      {
        question: "Siete fisicamente presenti nel Nord Italia?",
        answer:
          "Sì. Il nostro team è basato nel Trevigiano (Veneto) con operatività estesa a tutto il Nord Italia. Incontri on-site disponibili su tutto il territorio.",
      },
      {
        question: "Lavorate anche con aziende del Sud Italia?",
        answer:
          "Sì, con alcune collaborazioni remote. La nostra conoscenza approfondita è più forte sul Nord, ma il metodo si applica ovunque.",
      },
      {
        question: "Conoscete le specificità normative delle regioni del Nord Italia?",
        answer:
          "Per la parte tecnologica e di processo, sì. Per gli aspetti legali e fiscali regionali, lavoriamo con partner locali specializzati.",
      },
    ],
  },
  {
    slug: "ai-per-hr-aziende",
    targetQuery: "AI per HR e risorse umane",
    category: "PMI",
    title: "AI per HR e Risorse Umane - IL DOGE DI VENEZIA",
    h1: "AI per le risorse umane: selezione più rapida, gestione più intelligente",
    metaDescription:
      "Soluzioni AI per HR e risorse umane nelle PMI italiane. Screening CV, onboarding automatizzato, analisi performance e gestione documentale HR. IL DOGE DI VENEZIA.",
    intro:
      "La funzione HR nelle PMI italiane è spesso sottodimensionata rispetto alle responsabilità che copre. L'AI non sostituisce la relazione umana nell'HR - ma automatizza l'80% dei task amministrativi e di screening che consumano il tempo del responsabile. IL DOGE DI VENEZIA costruisce sistemi AI HR che fanno il lavoro di routine, lasciando alle persone il lavoro che conta.",
    benefits: [
      {
        title: "Screening candidati accelerato",
        description:
          "AI che analizza CV, identifica i profili in linea con il job description e produce una short list qualificata. Riduce il tempo di screening del 70-80%.",
      },
      {
        title: "Onboarding strutturato",
        description:
          "Sistema AI che guida i nuovi assunti attraverso il percorso di onboarding con materiali personalizzati, quiz di verifica e FAQ aziendali sempre disponibili.",
      },
      {
        title: "Gestione documentale HR",
        description:
          "Archiviazione intelligente di contratti, documenti di formazione, certificazioni e valutazioni. Recupero istantaneo, scadenze monitorate automaticamente.",
      },
      {
        title: "Analytics su persone e team",
        description:
          "Analisi dei dati di performance, assenteismo e formazione per identificare pattern e supportare decisioni HR basate su dati.",
      },
    ],
    useCases: [
      "Sistema di screening CV AI per posizioni ad alto volume di candidature",
      "Chatbot HR interno per domande su ferie, benefit, procedure e policy aziendali",
      "Automazione del processo di onboarding con percorso digitale guidato",
      "Monitoraggio scadenze formative obbligatorie (sicurezza, GDPR) con reminder automatici",
      "Analisi AI di survey engagement con report periodici al management",
    ],
    faq: [
      {
        question: "L'AI per il recruiting rispetta le normative anti-discriminazione?",
        answer:
          "Sì. Costruiamo sistemi che valutano le competenze dichiarate e misurabili, con esplicita esclusione di dati demografici dal processo di scoring. Includiamo audit periodici del sistema.",
      },
      {
        question: "Può integrarsi con i sistemi HR esistenti (Paghe, Presenze)?",
        answer:
          "Sì, via API o importazione/esportazione strutturata. Supportiamo i principali gestori paghe italiani e sistemi di rilevazione presenze.",
      },
      {
        question: "Quanto tempo risparmia l'AI nel processo di selezione?",
        answer:
          "Mediamente 3-5 ore per posizione aperta nella fase di screening iniziale. Per aziende con selezione continua, il risparmio è significativo già nel primo mese.",
      },
    ],
  },
  {
    slug: "agente-ai-personalizzato-azienda",
    targetQuery: "agente AI personalizzato per azienda",
    category: "PMI",
    title: "Agente AI Personalizzato per la Tua Azienda - IL DOGE DI VENEZIA",
    h1: "Agente AI su misura per la tua azienda: autonomo, integrato, tuo",
    metaDescription:
      "Costruiamo agenti AI personalizzati per aziende italiane. Agenti autonomi che conoscono la tua azienda, integrano i tuoi sistemi e lavorano secondo le tue regole. IL DOGE DI VENEZIA.",
    intro:
      "Un agente AI personalizzato non è un prodotto off-the-shelf: è un sistema costruito specificamente per la tua azienda, addestrato sui tuoi dati, integrato con i tuoi strumenti e configurato per le tue regole di business. IL DOGE DI VENEZIA progetta e costruisce agenti AI aziendali che diventano una risorsa operativa permanente - non uno strumento da usare una volta e dimenticare.",
    benefits: [
      {
        title: "Conosce la tua azienda",
        description:
          "Addestrato su documenti aziendali reali: procedure, prodotti, clienti, fornitori, storico operativo. Risponde con la conoscenza interna, non con risposte generiche.",
      },
      {
        title: "Integrato nei tuoi sistemi",
        description:
          "Accede a CRM, ERP, email, database e strumenti aziendali in uso. Non è isolato: è connesso al tessuto operativo della tua azienda.",
      },
      {
        title: "Segue le tue regole di business",
        description:
          "Ogni azienda ha logiche specifiche: condizioni commerciali, eccezioni, autorizzazioni. L'agente impara le regole della tua azienda e le applica nelle decisioni.",
      },
      {
        title: "Evolve con l'azienda",
        description:
          "Non è un sistema statico. Si aggiorna quando cambiano prodotti, prezzi, procedure o priorità. La conoscenza cresce con il business.",
      },
    ],
    useCases: [
      "Agente commerciale AI che gestisce richieste preventivo e qualificazione lead in autonomia",
      "Agente operativo che coordina ordini, spedizioni e comunicazioni con clienti",
      "Agente di analisi che monitora KPI aziendali e genera alert su anomalie",
      "Agente documentale che classifica, archivia e recupera documenti aziendali",
      "Agente di supporto interno che risponde a domande operative del team",
    ],
    faq: [
      {
        question: "Quanto tempo ci vuole per costruire un agente AI personalizzato?",
        answer:
          "La versione base di un agente su un caso d'uso specifico richiede 3-6 settimane. Agenti più complessi con molte integrazioni richiedono 6-12 settimane.",
      },
      {
        question: "I dati aziendali usati per addestrare l'agente sono al sicuro?",
        answer:
          "Sì. Utilizziamo architetture RAG (retrieval augmented generation) che mantengono i dati aziendali nel vostro ambiente. I dati non vengono usati per addestrare modelli pubblici.",
      },
      {
        question: "Cosa succede se l'agente sbaglia?",
        answer:
          "Per azioni ad alto impatto, l'agente richiede sempre approvazione umana prima di eseguire. Per azioni a basso rischio, registra tutto ciò che fa in modo verificabile.",
      },
    ],
  },
  {
    slug: "ai-per-analisi-dati-pmi",
    targetQuery: "AI per analisi dati PMI",
    category: "PMI",
    title: "AI per l'Analisi Dati nelle PMI - IL DOGE DI VENEZIA",
    h1: "AI per l'analisi dati nelle PMI: trasforma i tuoi dati in decisioni",
    metaDescription:
      "Sfrutta i dati della tua PMI con l'intelligenza artificiale. Business intelligence AI, analisi predittiva, dashboard automatiche e insight operativi. IL DOGE DI VENEZIA.",
    intro:
      "Le PMI italiane producono enormi quantità di dati ogni giorno -ordini, movimenti di magazzino, interazioni cliente, dati di produzione - ma la maggior parte di questi dati non viene mai analizzata in modo sistematico. L'AI cambia questo: rende l'analisi dei dati accessibile anche senza un data scientist interno. IL DOGE DI VENEZIA costruisce sistemi di analisi AI che trasformano i dati operativi in insight concreti per il management.",
    benefits: [
      {
        title: "Dashboard intelligenti",
        description:
          "Non solo visualizzazioni: dashboard AI che identificano anomalie, trend emergenti e opportunità nascosti nei dati. Aggiornate in tempo reale, senza lavoro manuale.",
      },
      {
        title: "Analisi predittiva",
        description:
          "Previsioni su vendite, domanda, fabbisogni di cassa e rischi operativi basate sui pattern storici e su variabili esterne. Decisioni anticipate, non reattive.",
      },
      {
        title: "Interrogazione in linguaggio naturale",
        description:
          "Fai domande ai tuoi dati in italiano: 'Quali clienti non ordinano da più di 90 giorni?' 'Quale linea prodotto ha il margine più basso?'. Risposte immediate senza SQL.",
      },
      {
        title: "Integrazione con fonti esistenti",
        description:
          "Consolidiamo dati da ERP, CRM, fogli Excel, e-commerce, magazzino e qualsiasi altra fonte in un unico sistema di analisi.",
      },
    ],
    useCases: [
      "Business intelligence AI per PMI con dati sparsi tra Excel, gestionale e CRM",
      "Sistema di previsione vendite mensile con aggiornamento automatico",
      "Analisi della marginalità per prodotto, cliente e canale con AI",
      "Dashboard cashflow predittivo per PMI con fatturazione irregolare",
      "Sistema di early warning su clienti a rischio churn basato su segnali comportamentali",
    ],
    faq: [
      {
        question: "Serve un data warehouse prima di implementare l'AI per l'analisi dati?",
        answer:
          "No. Possiamo partire da fonti dati esistenti anche non strutturate (Excel, CSV, database gestionali) e costruire l'analisi AI sopra. Il data warehouse si costruisce nel tempo.",
      },
      {
        question: "Quanto tempo ci vuole per avere le prime analisi?",
        answer:
          "Le prime dashboard e analisi di base sono operative in 2-4 settimane. I modelli predittivi richiedono 4-8 settimane per avere dati storici sufficienti.",
      },
      {
        question: "Chi nel team può usare i sistemi di analisi AI?",
        answer:
          "Sono progettati per essere usati dal management e dai responsabili operativi senza competenze tecniche. L'interfaccia è semplice, il linguaggio è quello del business.",
      },
    ],
  },
  {
    slug: "formazione-ai-team-aziendale",
    targetQuery: "formazione AI team aziendale",
    category: "PMI",
    title: "Formazione AI per il Team Aziendale - IL DOGE DI VENEZIA",
    h1: "Formazione AI per il team: come usare davvero l'intelligenza artificiale in azienda",
    metaDescription:
      "Programmi di formazione AI per team aziendali italiani. Workshop pratici, training su strumenti specifici e percorsi di upskilling AI. IL DOGE DI VENEZIA - formazione AI concreta.",
    intro:
      "L'adozione AI fallisce quando la tecnologia è buona ma il team non sa usarla. La formazione AI aziendale non è un corso online generico: è un programma calibrato sugli strumenti e i processi specifici della tua azienda. IL DOGE DI VENEZIA progetta ed eroga formazione AI pratica per team operativi, management e funzioni specialistiche.",
    benefits: [
      {
        title: "Formazione su casi reali",
        description:
          "I workshop partono dai processi e dagli strumenti della tua azienda. Nessun esercizio astratto: i partecipanti imparano risolvendo problemi reali del loro lavoro quotidiano.",
      },
      {
        title: "Livelli differenziati",
        description:
          "Percorsi distinti per operativi, manager e dirigenti. Ogni livello riceve le competenze AI rilevanti per il suo ruolo, non un curriculum unico per tutti.",
      },
      {
        title: "Strumenti pratici immediatamente applicabili",
        description:
          "Alla fine di ogni modulo, i partecipanti hanno strumenti e template AI utilizzabili subito nel loro lavoro. Non teoria: kit operativi.",
      },
      {
        title: "Aggiornamento continuo",
        description:
          "L'AI evolve rapidamente. I programmi includono sessioni di aggiornamento periodiche per tenere il team al passo con le novità rilevanti.",
      },
    ],
    useCases: [
      "Workshop AI foundations per tutto il management di una PMI (mezza giornata)",
      "Training su prompt engineering per team marketing, vendite e customer service",
      "Formazione tecnica su strumenti AI specifici (ChatGPT, Claude, Copilot, Notion AI)",
      "Percorso di AI literacy per operai e personale di produzione",
      "Executive briefing AI per CDA e imprenditori (focus strategico e ROI)",
    ],
    faq: [
      {
        question: "La formazione è disponibile anche in modalità remota?",
        answer:
          "Sì. Offriamo formazione sia in presenza (preferibile per team fino a 20 persone) sia in videoconferenza per team distribuiti o per follow-up modulari.",
      },
      {
        question: "Quanto durano i programmi di formazione?",
        answer:
          "Da mezza giornata per workshop introduttivi fino a percorsi di 3-6 mesi per programmi di trasformazione AI completa. Il formato dipende dagli obiettivi.",
      },
      {
        question: "La formazione è finanziabile con fondi interprofessionali?",
        answer:
          "Sì. La formazione AI rientra nelle categorie finanziabili da Fondimpresa, Fondirigenti e altri fondi interprofessionali italiani. Vi supportiamo nella gestione della pratica.",
      },
    ],
  },
  {
    slug: "audit-processi-ai-azienda",
    targetQuery: "audit processi AI azienda",
    category: "PMI",
    title: "Audit Processi AI per Aziende - IL DOGE DI VENEZIA",
    h1: "Audit AI aziendale: scopri dove l'intelligenza artificiale vale di più nella tua azienda",
    metaDescription:
      "Audit dei processi aziendali per l'implementazione AI. Mappa le opportunità AI, valuta la readiness e ricevi una roadmap prioritizzata. IL DOGE DI VENEZIA - AI audit per PMI.",
    intro:
      "Ogni imprenditore sa che l'AI può aiutare la sua azienda - ma pochi sanno esattamente dove e come. L'audit AI di IL DOGE DI VENEZIA è un'analisi strutturata dei processi aziendali che produce una mappa delle opportunità AI prioritizzata per impatto e fattibilità. In 2-3 giorni di lavoro, hai una roadmap concreta su cui costruire la tua strategia di trasformazione.",
    benefits: [
      {
        title: "Mappa completa delle opportunità",
        description:
          "Analizziamo tutti i processi principali e identifichiamo dove l'AI genera valore: risparmio ore, riduzione errori, aumento velocità, miglioramento qualità.",
      },
      {
        title: "Prioritizzazione per ROI",
        description:
          "Non tutti i processi vale la pena automatizzare. Classifichiamo le opportunità per impatto atteso e facilità di implementazione, dandoti una sequenza logica di intervento.",
      },
      {
        title: "Valutazione della readiness",
        description:
          "Analizziamo la maturità digitale attuale, la qualità dei dati disponibili e le competenze del team per costruire un piano realistico.",
      },
      {
        title: "Roadmap implementativa",
        description:
          "L'audit si conclude con una roadmap dettagliata: processi, tecnologie consigliate, tempi stimati e ROI atteso per ogni iniziativa.",
      },
    ],
    useCases: [
      "Audit AI per PMI che vuole capire da dove partire senza sprecare budget",
      "Valutazione dei processi di una manifattura prima di un investimento IT",
      "Audit AI come primo step di un programma di trasformazione digitale",
      "Assessment readiness AI per azienda in fase di passaggio generazionale",
      "Audit dei processi di una portfolio company post-acquisizione PE",
    ],
    faq: [
      {
        question: "Quanto dura un audit AI aziendale?",
        answer:
          "Dipende dalla dimensione aziendale. Per PMI fino a 100 dipendenti, 2-3 giorni di workshop e analisi. Per aziende più grandi o con processi complessi, 5-7 giorni.",
      },
      {
        question: "Cosa include il deliverable finale?",
        answer:
          "Report strutturato con: mappa dei processi analizzati, opportunità AI identificate con stima di impatto, matrice priorità/fattibilità, roadmap implementativa e budget indicativo.",
      },
      {
        question: "L'audit porta sempre a una proposta commerciale da parte vostra?",
        answer:
          "No. L'audit è un servizio autonomo con un output concreto. Potete usarlo per lavorare con noi o con altri partner. Non esiste obbligo di continuità.",
      },
    ],
  },
  {
    slug: "ai-per-ecommerce-italiano",
    targetQuery: "AI per e-commerce italiano",
    category: "Settore",
    title: "AI per E-commerce Italiano - IL DOGE DI VENEZIA",
    h1: "AI per il tuo e-commerce: vendi di più, gestisci meno",
    metaDescription:
      "Soluzioni AI per e-commerce italiani. Personalizzazione, customer service AI, ottimizzazione prezzi, previsione domanda e automazione operativa. IL DOGE DI VENEZIA.",
    intro:
      "L'e-commerce italiano affronta una competizione crescente dai marketplace internazionali e aspettative sempre più alte degli acquirenti. L'AI applicata all'e-commerce non è un lusso -è la differenza tra un negozio online che performa e uno che lotta per la sopravvivenza. IL DOGE DI VENEZIA porta soluzioni AI concrete per e-commerce italiani di tutte le dimensioni.",
    benefits: [
      {
        title: "Personalizzazione dell'esperienza",
        description:
          "Raccomandazioni prodotto personalizzate, email marketing segmentato per comportamento e contenuti adattativi che aumentano il tasso di conversione.",
      },
      {
        title: "Customer service H24",
        description:
          "Chatbot AI in italiano che gestisce domande su ordini, disponibilità, resi e spedizioni. Riduce i ticket al team e aumenta la soddisfazione degli acquirenti.",
      },
      {
        title: "Ottimizzazione dei prezzi",
        description:
          "AI che monitora i prezzi della concorrenza e la domanda per suggerire o automatizzare aggiustamenti di prezzo che massimizzano margine e conversioni.",
      },
      {
        title: "Previsione e gestione stock",
        description:
          "Previsione della domanda per stagione, trend e promozioni. Meno rotture di stock sui prodotti top, meno overstock su quelli lenti.",
      },
    ],
    useCases: [
      "Implementazione di sistema di raccomandazione prodotti AI su Shopify o WooCommerce",
      "Chatbot customer service e-commerce in italiano integrato su sito e WhatsApp",
      "Automazione del processo di gestione resi con classificazione AI",
      "Sistema di dynamic pricing per e-commerce nel segmento fashion o elettronica",
      "Previsione stagionale della domanda per pianificazione acquisti e promozioni",
    ],
    faq: [
      {
        question: "Funziona anche per piccoli e-commerce con pochi prodotti?",
        answer:
          "Dipende dalla soluzione. Il customer service AI e l'automazione operativa funzionano bene anche per piccoli store. La personalizzazione e il dynamic pricing richiedono volumi minimi di traffico e transazioni.",
      },
      {
        question: "Si integra con Shopify, WooCommerce e Magento?",
        answer:
          "Sì. Abbiamo esperienza di integrazione con le principali piattaforme e-commerce italiane ed europee, sia via plugin/app che via API diretta.",
      },
      {
        question: "L'AI per e-commerce rispetta il GDPR?",
        answer:
          "Sì. Costruiamo sistemi che gestiscono i dati degli acquirenti nel rispetto del GDPR, con consensi espliciti per la personalizzazione e meccanismi di opt-out chiari.",
      },
    ],
  },
];
