export type GlossarioTerm = {
  slug: string;
  term: string;
  definition: string;
  category: string;
  relatedTerms: string[];
};

export const GLOSSARIO_CATEGORIES = [
  "AI Fondamentali",
  "NLP & Linguaggio",
  "Machine Learning",
  "Computer Vision",
  "Automazione & RPA",
  "Business & Strategia",
  "Strumenti & Piattaforme",
  "Settore-specifici",
] as const;

export const GLOSSARIO: GlossarioTerm[] = [
  // ──────────────────────────────────────────────────────────────────────
  // AI FONDAMENTALI (30)
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: "intelligenza-artificiale",
    term: "Intelligenza Artificiale",
    definition:
      "L'intelligenza artificiale e la disciplina informatica che sviluppa sistemi capaci di svolgere compiti che normalmente richiedono intelligenza umana: comprendere il linguaggio, riconoscere immagini, prendere decisioni. Per le PMI italiane, l'AI rappresenta un'opportunita concreta per automatizzare processi ripetitivi e ottenere vantaggi competitivi misurabili.",
    category: "AI Fondamentali",
    relatedTerms: ["machine-learning", "deep-learning", "ai-generativa"],
  },
  {
    slug: "machine-learning",
    term: "Machine Learning",
    definition:
      "Il machine learning e un sottocampo dell'AI in cui i sistemi imparano automaticamente dai dati senza essere programmati esplicitamente per ogni scenario. Gli algoritmi di ML analizzano pattern nei dati storici per fare previsioni su dati nuovi. Nella pratica aziendale, si usa per prevedere la domanda, classificare documenti e ottimizzare processi produttivi.",
    category: "AI Fondamentali",
    relatedTerms: ["deep-learning", "supervised-learning", "unsupervised-learning"],
  },
  {
    slug: "deep-learning",
    term: "Deep Learning",
    definition:
      "Il deep learning e una tecnica avanzata di machine learning che utilizza reti neurali con molti strati (da qui 'deep') per apprendere rappresentazioni complesse dei dati. E alla base dei moderni sistemi di riconoscimento vocale, traduzione automatica e generazione di testo. Richiede grandi quantita di dati ma produce risultati straordinariamente accurati.",
    category: "AI Fondamentali",
    relatedTerms: ["rete-neurale", "machine-learning", "cnn"],
  },
  {
    slug: "rete-neurale",
    term: "Rete Neurale",
    definition:
      "Una rete neurale artificiale e un modello computazionale ispirato al funzionamento del cervello umano, composto da nodi (neuroni) organizzati in strati interconnessi. Ogni connessione ha un peso che viene regolato durante l'addestramento. Le reti neurali sono alla base di quasi tutti i sistemi AI moderni, dal riconoscimento immagini alla generazione di testo.",
    category: "AI Fondamentali",
    relatedTerms: ["deep-learning", "peso", "parametro"],
  },
  {
    slug: "modello-linguistico",
    term: "Modello Linguistico",
    definition:
      "Un modello linguistico e un sistema AI addestrato su enormi quantita di testo per comprendere e generare linguaggio naturale. I modelli linguistici di grandi dimensioni (LLM) come GPT e Claude possono scrivere testi, rispondere a domande, tradurre e ragionare su problemi complessi. Per le aziende, rappresentano assistenti versatili per qualsiasi compito basato sul testo.",
    category: "AI Fondamentali",
    relatedTerms: ["llm", "gpt", "transformer"],
  },
  {
    slug: "gpt",
    term: "GPT",
    definition:
      "GPT (Generative Pre-trained Transformer) e l'architettura alla base di ChatGPT, sviluppata da OpenAI. E un modello linguistico pre-addestrato su vasti corpora di testo che puo essere usato per generare contenuti, rispondere a domande e svolgere compiti testuali complessi. GPT-4 e le versioni successive hanno dimostrato capacita di ragionamento sempre piu avanzate.",
    category: "AI Fondamentali",
    relatedTerms: ["transformer", "chatgpt", "openai"],
  },
  {
    slug: "transformer",
    term: "Transformer",
    definition:
      "Il Transformer e l'architettura di rete neurale introdotta da Google nel 2017 che ha rivoluzionato l'AI. Utilizza un meccanismo chiamato 'attenzione' per processare sequenze di dati in parallelo, anziche in modo sequenziale. Praticamente tutti i modelli linguistici moderni (GPT, Claude, Gemini, LLaMA) sono basati su questa architettura.",
    category: "AI Fondamentali",
    relatedTerms: ["gpt", "modello-linguistico", "token"],
  },
  {
    slug: "token",
    term: "Token",
    definition:
      "Un token e l'unita base di testo elaborata dai modelli linguistici. Puo corrispondere a una parola, una parte di parola o un carattere di punteggiatura. Per esempio, 'automazione' potrebbe essere un singolo token, mentre 'automatizzazione' potrebbe essere suddiviso in piu token. Il costo dei servizi AI e spesso calcolato in base al numero di token elaborati.",
    category: "AI Fondamentali",
    relatedTerms: ["tokenizzazione", "context-window", "modello-linguistico"],
  },
  {
    slug: "prompt",
    term: "Prompt",
    definition:
      "Il prompt e l'istruzione o la domanda che si fornisce a un modello AI per ottenere una risposta. La qualita del prompt determina in larga misura la qualita dell'output. Scrivere prompt efficaci (prompt engineering) e una competenza chiave per sfruttare al meglio gli strumenti AI in azienda, dalla generazione di report alla creazione di contenuti.",
    category: "AI Fondamentali",
    relatedTerms: ["prompt-engineering", "few-shot", "chain-of-thought"],
  },
  {
    slug: "fine-tuning",
    term: "Fine-Tuning",
    definition:
      "Il fine-tuning e il processo di addestramento aggiuntivo di un modello AI pre-addestrato su dati specifici del proprio dominio. Permette di specializzare un modello generico per compiti particolari, come classificare documenti aziendali o rispondere a domande sul proprio settore. E piu economico e veloce rispetto ad addestrare un modello da zero.",
    category: "AI Fondamentali",
    relatedTerms: ["transfer-learning", "training", "dataset"],
  },
  {
    slug: "rag",
    term: "RAG (Retrieval-Augmented Generation)",
    definition:
      "RAG e una tecnica che combina la ricerca di informazioni da una base documentale con la generazione di testo tramite AI. Invece di affidarsi solo alla conoscenza del modello, il sistema cerca prima i documenti rilevanti (manuali, FAQ, contratti) e poi genera risposte basate su quei documenti. E l'approccio piu efficace per creare chatbot aziendali affidabili.",
    category: "AI Fondamentali",
    relatedTerms: ["embedding", "vettore", "knowledge-graph"],
  },
  {
    slug: "embedding",
    term: "Embedding",
    definition:
      "Un embedding e una rappresentazione numerica (vettore) di un testo, un'immagine o altri dati che cattura il significato semantico. Testi con significato simile hanno embedding vicini nello spazio vettoriale. Questa tecnica e fondamentale per la ricerca semantica, i sistemi di raccomandazione e il RAG, permettendo di trovare informazioni per significato e non solo per parole chiave.",
    category: "AI Fondamentali",
    relatedTerms: ["vettore", "word-embedding", "cosine-similarity"],
  },
  {
    slug: "vettore",
    term: "Vettore",
    definition:
      "In ambito AI, un vettore e una lista ordinata di numeri che rappresenta un concetto, un documento o un dato. I database vettoriali (come Pinecone o Weaviate) memorizzano e cercano efficientemente questi vettori, permettendo di trovare contenuti simili per significato. Sono il cuore dei moderni sistemi RAG e delle applicazioni di ricerca semantica aziendale.",
    category: "AI Fondamentali",
    relatedTerms: ["embedding", "pinecone", "weaviate"],
  },
  {
    slug: "inferenza",
    term: "Inferenza",
    definition:
      "L'inferenza e il processo con cui un modello AI gia addestrato produce previsioni o risposte a partire da nuovi dati. Mentre l'addestramento avviene una volta (ed e costoso), l'inferenza avviene ogni volta che usi il modello. I costi operativi dell'AI dipendono principalmente dall'inferenza: per questo ottimizzare la velocita e il costo di inferenza e cruciale per le PMI.",
    category: "AI Fondamentali",
    relatedTerms: ["training", "model-serving", "token"],
  },
  {
    slug: "training",
    term: "Training (Addestramento)",
    definition:
      "Il training e la fase in cui un modello AI impara dai dati, regolando i propri parametri per migliorare le prestazioni su un compito specifico. Puo richiedere enormi risorse computazionali e grandi quantita di dati. Le PMI raramente addestrano modelli da zero: usano modelli pre-addestrati tramite fine-tuning o prompt engineering, riducendo drasticamente costi e tempi.",
    category: "AI Fondamentali",
    relatedTerms: ["fine-tuning", "dataset", "parametro"],
  },
  {
    slug: "dataset",
    term: "Dataset",
    definition:
      "Un dataset e un insieme strutturato di dati utilizzato per addestrare, validare o testare un modello AI. La qualita del dataset e direttamente proporzionale alla qualita dei risultati: dati incompleti, sbilanciati o errati producono modelli inaffidabili. Per le PMI, organizzare e pulire i propri dati aziendali e spesso il primo passo verso l'adozione dell'AI.",
    category: "AI Fondamentali",
    relatedTerms: ["training", "bias", "data-augmentation"],
  },
  {
    slug: "bias",
    term: "Bias (Pregiudizio)",
    definition:
      "Il bias nell'AI si riferisce a distorsioni sistematiche nei risultati di un modello, spesso causate da dati di addestramento non rappresentativi. Per esempio, un sistema di screening CV addestrato su dati storici potrebbe discriminare inconsapevolmente. Riconoscere e mitigare i bias e essenziale per un uso etico e affidabile dell'AI in azienda, specialmente in HR e customer service.",
    category: "AI Fondamentali",
    relatedTerms: ["ethics-ai", "responsible-ai", "dataset"],
  },
  {
    slug: "hallucination",
    term: "Hallucination (Allucinazione)",
    definition:
      "Un'allucinazione AI si verifica quando un modello linguistico genera informazioni false presentandole come vere con sicurezza. I LLM non 'sanno' cosa e vero: generano testo statisticamente probabile. Per le aziende, questo significa che ogni output AI va verificato, e i sistemi RAG sono preferibili perche ancorano le risposte a documenti reali.",
    category: "AI Fondamentali",
    relatedTerms: ["rag", "modello-linguistico", "temperatura"],
  },
  {
    slug: "temperatura",
    term: "Temperatura",
    definition:
      "La temperatura e un parametro che controlla la casualita delle risposte generate da un modello AI. Valori bassi (0-0.3) producono risposte prevedibili e conservative, ideali per compiti strutturati come classificazione documenti. Valori alti (0.7-1.0) generano risposte piu creative e variegate, utili per brainstorming e generazione contenuti.",
    category: "AI Fondamentali",
    relatedTerms: ["top-p", "prompt", "inferenza"],
  },
  {
    slug: "top-p",
    term: "Top-p (Nucleus Sampling)",
    definition:
      "Top-p e un parametro di campionamento che limita la scelta del modello ai token la cui probabilita cumulativa non supera il valore p. Con top-p=0.9, il modello considera solo i token che coprono il 90% della probabilita totale, escludendo opzioni improbabili. Insieme alla temperatura, permette di bilanciare creativita e affidabilita nelle risposte AI.",
    category: "AI Fondamentali",
    relatedTerms: ["temperatura", "token", "inferenza"],
  },
  {
    slug: "chain-of-thought",
    term: "Chain-of-Thought",
    definition:
      "Chain-of-thought e una tecnica di prompt engineering che guida il modello AI a ragionare passo per passo prima di fornire una risposta. Chiedendo esplicitamente 'ragiona step by step', si ottengono risposte piu accurate su problemi complessi come analisi finanziarie, calcoli e decisioni strategiche. E particolarmente utile per task aziendali che richiedono ragionamento logico.",
    category: "AI Fondamentali",
    relatedTerms: ["prompt-engineering", "few-shot", "zero-shot"],
  },
  {
    slug: "few-shot",
    term: "Few-Shot Learning",
    definition:
      "Il few-shot learning e una tecnica in cui si forniscono al modello AI alcuni esempi del compito desiderato direttamente nel prompt. Per esempio, mostrando 3 email classificate come 'urgente' o 'normale', il modello impara il pattern e classifica le email successive. E un modo rapido e pratico per personalizzare l'AI senza necessita di fine-tuning.",
    category: "AI Fondamentali",
    relatedTerms: ["zero-shot", "prompt-engineering", "chain-of-thought"],
  },
  {
    slug: "zero-shot",
    term: "Zero-Shot Learning",
    definition:
      "Lo zero-shot learning e la capacita di un modello AI di svolgere un compito senza aver mai visto esempi specifici di quel compito. Si fornisce solo una descrizione testuale di cosa fare. I modelli moderni come Claude e GPT-4 eccellono nello zero-shot, rendendo possibile usare l'AI per nuovi compiti aziendali semplicemente descrivendo cosa serve.",
    category: "AI Fondamentali",
    relatedTerms: ["few-shot", "prompt", "transfer-learning"],
  },
  {
    slug: "multimodale",
    term: "Multimodale",
    definition:
      "Un modello AI multimodale e in grado di elaborare e generare diversi tipi di dati: testo, immagini, audio, video. Per esempio, puo analizzare una foto di un componente difettoso e descrivere il problema in testo, o leggere un documento scansionato e estrarne informazioni strutturate. La multimodalita apre scenari come il quality control visivo automatizzato nelle fabbriche.",
    category: "AI Fondamentali",
    relatedTerms: ["computer-vision", "speech-to-text", "ocr"],
  },
  {
    slug: "agente-ai",
    term: "Agente AI",
    definition:
      "Un agente AI e un sistema autonomo che puo pianificare azioni, utilizzare strumenti (API, database, email) e completare compiti complessi senza intervento umano continuo. A differenza di un chatbot che risponde a domande, un agente puo eseguire un workflow completo: analizzare un ordine, verificare la disponibilita, generare un preventivo e inviarlo al cliente.",
    category: "AI Fondamentali",
    relatedTerms: ["copilota-ai", "workflow-automation", "intelligent-automation"],
  },
  {
    slug: "copilota-ai",
    term: "Copilota AI",
    definition:
      "Un copilota AI e un assistente intelligente che lavora al fianco dell'utente, suggerendo azioni e automatizzando compiti ripetitivi senza sostituire il controllo umano. A differenza dell'agente autonomo, il copilota richiede conferma prima di agire. Microsoft Copilot, GitHub Copilot e i copiloti aziendali personalizzati sono esempi di questa filosofia 'human-in-the-loop'.",
    category: "AI Fondamentali",
    relatedTerms: ["agente-ai", "copilot", "chatbot"],
  },
  {
    slug: "ai-generativa",
    term: "AI Generativa",
    definition:
      "L'AI generativa comprende modelli capaci di creare contenuti nuovi: testo, immagini, codice, musica, video. ChatGPT genera testo, DALL-E genera immagini, Copilot genera codice. Per le PMI, l'AI generativa accelera la produzione di contenuti marketing, documentazione tecnica, proposte commerciali e comunicazioni personalizzate ai clienti.",
    category: "AI Fondamentali",
    relatedTerms: ["modello-linguistico", "dall-e", "stable-diffusion"],
  },
  {
    slug: "foundation-model",
    term: "Foundation Model",
    definition:
      "Un foundation model e un modello AI di grandi dimensioni addestrato su dati vastissimi e diversificati che puo essere adattato a molteplici compiti specifici. GPT-4, Claude e Gemini sono foundation model. Invece di costruire un modello per ogni esigenza, le aziende possono partire da un foundation model e specializzarlo per le proprie necessita tramite fine-tuning o prompt engineering.",
    category: "AI Fondamentali",
    relatedTerms: ["fine-tuning", "transfer-learning", "llm"],
  },
  {
    slug: "parametro",
    term: "Parametro",
    definition:
      "I parametri sono i valori numerici interni che un modello AI regola durante l'addestramento per migliorare le proprie prestazioni. Un modello con piu parametri e generalmente piu capace ma anche piu costoso da eseguire. GPT-4 ha centinaia di miliardi di parametri, mentre modelli piu piccoli e efficienti possono essere eseguiti su hardware locale.",
    category: "AI Fondamentali",
    relatedTerms: ["peso", "training", "foundation-model"],
  },
  {
    slug: "peso",
    term: "Peso",
    definition:
      "In una rete neurale, i pesi sono i valori numerici associati alle connessioni tra neuroni che determinano l'importanza di ciascun input. Durante l'addestramento, i pesi vengono continuamente aggiustati per minimizzare l'errore del modello. I 'pesi' di un modello sono essenzialmente la sua conoscenza appresa, e vengono salvati in file che possono pesare gigabyte.",
    category: "AI Fondamentali",
    relatedTerms: ["parametro", "rete-neurale", "training"],
  },

  // ──────────────────────────────────────────────────────────────────────
  // NLP & LINGUAGGIO (25)
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: "nlp",
    term: "NLP (Natural Language Processing)",
    definition:
      "L'NLP e il campo dell'AI che si occupa dell'interazione tra computer e linguaggio umano. Include compiti come analisi del sentiment, estrazione di entita, traduzione automatica e generazione di testo. Per le PMI, l'NLP permette di automatizzare l'analisi di email, recensioni clienti, documenti legali e comunicazioni interne.",
    category: "NLP & Linguaggio",
    relatedTerms: ["sentiment-analysis", "named-entity-recognition", "llm"],
  },
  {
    slug: "sentiment-analysis",
    term: "Sentiment Analysis",
    definition:
      "La sentiment analysis e la tecnica NLP che determina automaticamente il tono emotivo di un testo: positivo, negativo o neutro. Le aziende la usano per monitorare le recensioni dei clienti, analizzare il sentiment sui social media riguardo al brand e identificare rapidamente problemi di soddisfazione. Puo essere applicata a migliaia di testi in pochi secondi.",
    category: "NLP & Linguaggio",
    relatedTerms: ["nlp", "text-mining", "classificazione-testo"],
  },
  {
    slug: "named-entity-recognition",
    term: "Named Entity Recognition (NER)",
    definition:
      "La NER e una tecnica NLP che identifica e classifica automaticamente entita come nomi di persone, aziende, luoghi, date e importi monetari all'interno di un testo. In ambito aziendale, si usa per estrarre informazioni chiave da contratti, fatture, email e documenti legali, risparmiando ore di lavoro manuale nella data entry.",
    category: "NLP & Linguaggio",
    relatedTerms: ["nlp", "estrazione-informazioni", "document-parsing"],
  },
  {
    slug: "tokenizzazione",
    term: "Tokenizzazione",
    definition:
      "La tokenizzazione e il processo di suddivisione di un testo in unita piu piccole (token) che il modello AI puo elaborare. Diversi modelli usano strategie diverse: alcuni dividono per parole, altri per sotto-parole. Capire la tokenizzazione aiuta a stimare i costi API (calcolati per token) e a ottimizzare i prompt per rimanere nei limiti della context window.",
    category: "NLP & Linguaggio",
    relatedTerms: ["token", "context-window", "nlp"],
  },
  {
    slug: "bert",
    term: "BERT",
    definition:
      "BERT (Bidirectional Encoder Representations from Transformers) e un modello linguistico sviluppato da Google che comprende il contesto di una parola guardando sia a sinistra che a destra nel testo. E particolarmente efficace per compiti di comprensione come classificazione, risposta a domande e ricerca semantica. Molti sistemi di ricerca aziendale usano BERT dietro le quinte.",
    category: "NLP & Linguaggio",
    relatedTerms: ["transformer", "nlp", "word-embedding"],
  },
  {
    slug: "classificazione-testo",
    term: "Classificazione Testo",
    definition:
      "La classificazione del testo e il compito di assegnare automaticamente una o piu categorie a un documento. Applicazioni pratiche includono: smistare ticket di supporto per priorita, catalogare email per reparto, classificare documenti contabili per tipo. I modelli moderni raggiungono precisioni superiori al 95% su molti compiti di classificazione aziendale.",
    category: "NLP & Linguaggio",
    relatedTerms: ["nlp", "sentiment-analysis", "precision"],
  },
  {
    slug: "estrazione-informazioni",
    term: "Estrazione Informazioni",
    definition:
      "L'estrazione di informazioni e il processo automatico di identificare e strutturare dati rilevanti da testi non strutturati. Per esempio, estrarre numeri d'ordine, date di consegna e importi da email dei fornitori, o dati anagrafici da documenti scansionati. Riduce drasticamente il tempo di data entry e gli errori umani nelle PMI.",
    category: "NLP & Linguaggio",
    relatedTerms: ["named-entity-recognition", "document-parsing", "ocr"],
  },
  {
    slug: "summarizzazione",
    term: "Summarizzazione",
    definition:
      "La summarizzazione automatica e la capacita dell'AI di generare riassunti concisi di testi lunghi, mantenendo le informazioni chiave. Si usa per riassumere report finanziari, verbali di riunioni, articoli di settore e documenti legali. I modelli moderni possono produrre riassunti in diversi formati: bullet point, executive summary o sintesi di una riga.",
    category: "NLP & Linguaggio",
    relatedTerms: ["nlp", "modello-linguistico", "llm"],
  },
  {
    slug: "traduzione-automatica",
    term: "Traduzione Automatica",
    definition:
      "La traduzione automatica usa l'AI per tradurre testo da una lingua all'altra. I sistemi moderni basati su transformer (come quelli di Google, DeepL e i LLM) producono traduzioni di qualita quasi umana per molte coppie linguistiche. Per le PMI che esportano, permette di tradurre cataloghi, schede prodotto e comunicazioni con clienti esteri in tempo reale.",
    category: "NLP & Linguaggio",
    relatedTerms: ["nlp", "transformer", "multimodale"],
  },
  {
    slug: "chatbot",
    term: "Chatbot",
    definition:
      "Un chatbot e un programma che simula una conversazione con gli utenti, rispondendo a domande e guidando attraverso processi. I chatbot moderni basati su AI comprendono il linguaggio naturale e possono gestire richieste complesse. Per le PMI, un chatbot aziendale puo gestire il primo livello di customer service, rispondere a FAQ e raccogliere lead 24/7.",
    category: "NLP & Linguaggio",
    relatedTerms: ["conversational-ai", "intent-detection", "rag"],
  },
  {
    slug: "conversational-ai",
    term: "Conversational AI",
    definition:
      "La conversational AI comprende tutte le tecnologie che permettono interazioni naturali tra umani e macchine tramite voce o testo. Va oltre il semplice chatbot: gestisce conversazioni multi-turno, mantiene il contesto, comprende sfumature e puo eseguire azioni. Include assistenti vocali, chatbot intelligenti e agenti di customer service automatizzati.",
    category: "NLP & Linguaggio",
    relatedTerms: ["chatbot", "agente-ai", "speech-to-text"],
  },
  {
    slug: "intent-detection",
    term: "Intent Detection",
    definition:
      "L'intent detection e la capacita di un sistema AI di identificare l'intenzione dell'utente da un messaggio in linguaggio naturale. Per esempio, 'vorrei restituire il prodotto' viene classificato come intent 'reso'. E fondamentale nei chatbot aziendali per instradare correttamente le richieste al reparto o workflow giusto.",
    category: "NLP & Linguaggio",
    relatedTerms: ["chatbot", "nlp", "classificazione-testo"],
  },
  {
    slug: "text-mining",
    term: "Text Mining",
    definition:
      "Il text mining e il processo di estrarre informazioni utili e pattern da grandi volumi di testo non strutturato. Combina tecniche NLP, statistica e machine learning per analizzare documenti, email, recensioni e report. Per le aziende, permette di scoprire trend nei feedback dei clienti, monitorare la concorrenza e analizzare contratti in massa.",
    category: "NLP & Linguaggio",
    relatedTerms: ["nlp", "sentiment-analysis", "estrazione-informazioni"],
  },
  {
    slug: "word-embedding",
    term: "Word Embedding",
    definition:
      "Un word embedding e una rappresentazione vettoriale di una parola che ne cattura il significato semantico e le relazioni con altre parole. Parole con significati simili hanno vettori vicini. Word2Vec e GloVe sono stati tra i primi modelli di word embedding. Oggi i modelli contestuali (BERT, GPT) generano embedding che variano in base al contesto della frase.",
    category: "NLP & Linguaggio",
    relatedTerms: ["embedding", "vettore", "bert"],
  },
  {
    slug: "tf-idf",
    term: "TF-IDF",
    definition:
      "TF-IDF (Term Frequency-Inverse Document Frequency) e una tecnica statistica che misura l'importanza di una parola in un documento rispetto a una collezione di documenti. Parole frequenti nel documento ma rare nella collezione ricevono un punteggio alto. E usata nei motori di ricerca interni aziendali e come feature per modelli di classificazione testo.",
    category: "NLP & Linguaggio",
    relatedTerms: ["text-mining", "classificazione-testo", "nlp"],
  },
  {
    slug: "cosine-similarity",
    term: "Cosine Similarity",
    definition:
      "La cosine similarity e una metrica che misura la somiglianza tra due vettori calcolando il coseno dell'angolo tra di essi. In ambito AI, si usa per confrontare embedding di testi e trovare documenti o frasi semanticamente simili. E alla base dei sistemi di ricerca semantica e delle pipeline RAG che alimentano i chatbot aziendali.",
    category: "NLP & Linguaggio",
    relatedTerms: ["embedding", "vettore", "rag"],
  },
  {
    slug: "knowledge-graph",
    term: "Knowledge Graph",
    definition:
      "Un knowledge graph e una struttura dati che rappresenta entita (persone, prodotti, concetti) e le relazioni tra di esse in formato grafo. Google lo usa per arricchire i risultati di ricerca. In azienda, un knowledge graph puo collegare clienti, prodotti, ordini e ticket di supporto, permettendo all'AI di navigare la conoscenza aziendale in modo strutturato.",
    category: "NLP & Linguaggio",
    relatedTerms: ["rag", "named-entity-recognition", "question-answering"],
  },
  {
    slug: "question-answering",
    term: "Question Answering",
    definition:
      "Il question answering e il compito AI di rispondere a domande in linguaggio naturale basandosi su una base di conoscenza o un insieme di documenti. Sistemi moderni combinano ricerca documentale e generazione di testo (RAG) per fornire risposte precise con riferimenti alle fonti. E la tecnologia dietro i chatbot FAQ e gli assistenti interni aziendali.",
    category: "NLP & Linguaggio",
    relatedTerms: ["rag", "chatbot", "knowledge-graph"],
  },
  {
    slug: "text-to-speech",
    term: "Text-to-Speech (TTS)",
    definition:
      "Il text-to-speech e la tecnologia che converte testo scritto in parlato sintetico. I sistemi moderni producono voci naturali e espressive, praticamente indistinguibili da quelle umane. Le aziende lo usano per IVR telefonici intelligenti, assistenti vocali, accessibilita e narrazione automatica di contenuti formativi interni.",
    category: "NLP & Linguaggio",
    relatedTerms: ["speech-to-text", "conversational-ai", "nlp"],
  },
  {
    slug: "speech-to-text",
    term: "Speech-to-Text (STT)",
    definition:
      "Lo speech-to-text e la tecnologia che converte il parlato in testo scritto. I sistemi moderni raggiungono precisioni superiori al 95% anche in ambienti rumorosi. Si usa per trascrivere riunioni, chiamate di supporto, dettatura di documenti e comandi vocali in fabbrica. Combinato con l'NLP, permette di analizzare automaticamente il contenuto delle conversazioni.",
    category: "NLP & Linguaggio",
    relatedTerms: ["text-to-speech", "nlp", "conversational-ai"],
  },
  {
    slug: "ocr",
    term: "OCR (Optical Character Recognition)",
    definition:
      "L'OCR e la tecnologia che converte immagini di testo (documenti scansionati, foto di fatture, DDT) in testo digitale editabile e ricercabile. I sistemi OCR moderni basati su deep learning gestiscono anche layout complessi, tabelle e testi scritti a mano. E il primo passo per digitalizzare e automatizzare i processi documentali nelle PMI.",
    category: "NLP & Linguaggio",
    relatedTerms: ["document-parsing", "estrazione-informazioni", "computer-vision"],
  },
  {
    slug: "document-parsing",
    term: "Document Parsing",
    definition:
      "Il document parsing e il processo automatico di analizzare la struttura di un documento (fattura, contratto, ordine) ed estrarne i dati in formato strutturato. Combina OCR, NLP e regole di business per identificare campi come importi, date, parti coinvolte. Permette di automatizzare la registrazione di documenti che oggi richiede data entry manuale.",
    category: "NLP & Linguaggio",
    relatedTerms: ["ocr", "estrazione-informazioni", "fatturazione-elettronica"],
  },
  {
    slug: "llm",
    term: "LLM (Large Language Model)",
    definition:
      "Un LLM e un modello linguistico di grandi dimensioni, addestrato su enormi quantita di testo, in grado di comprendere e generare linguaggio naturale con capacita di ragionamento avanzate. Claude, GPT-4 e Gemini sono LLM. Per le PMI, gli LLM sono lo strumento piu versatile disponibile: possono scrivere, tradurre, analizzare, programmare e ragionare su problemi complessi.",
    category: "NLP & Linguaggio",
    relatedTerms: ["modello-linguistico", "foundation-model", "prompt-engineering"],
  },
  {
    slug: "prompt-engineering",
    term: "Prompt Engineering",
    definition:
      "Il prompt engineering e l'arte e la scienza di scrivere istruzioni efficaci per ottenere i migliori risultati dai modelli AI. Include tecniche come few-shot learning, chain-of-thought, ruoli di sistema e strutturazione dell'output. E una competenza chiave per qualsiasi azienda che usi AI: un buon prompt puo fare la differenza tra un output inutile e uno eccellente.",
    category: "NLP & Linguaggio",
    relatedTerms: ["prompt", "few-shot", "chain-of-thought"],
  },
  {
    slug: "context-window",
    term: "Context Window",
    definition:
      "La context window e la quantita massima di testo (misurata in token) che un modello AI puo elaborare in un singolo prompt. Modelli con context window piu ampia possono analizzare documenti piu lunghi in una volta. Claude offre finestre fino a 200K token, permettendo di analizzare interi manuali tecnici o contratti complessi senza doverli suddividere.",
    category: "NLP & Linguaggio",
    relatedTerms: ["token", "tokenizzazione", "llm"],
  },

  // ──────────────────────────────────────────────────────────────────────
  // MACHINE LEARNING (25)
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: "supervised-learning",
    term: "Supervised Learning",
    definition:
      "L'apprendimento supervisionato e la tecnica di ML in cui il modello impara da esempi etichettati: per ogni input si fornisce l'output corretto. Per esempio, mostrando migliaia di email etichettate come 'spam' o 'non spam', il modello impara a classificare nuove email. E l'approccio piu comune nelle applicazioni aziendali perche produce risultati affidabili e interpretabili.",
    category: "Machine Learning",
    relatedTerms: ["classificazione", "regressione", "unsupervised-learning"],
  },
  {
    slug: "unsupervised-learning",
    term: "Unsupervised Learning",
    definition:
      "L'apprendimento non supervisionato e la tecnica di ML in cui il modello trova pattern nei dati senza etichette predefinite. Il modello scopre autonomamente strutture nascoste come gruppi di clienti simili (clustering) o anomalie nei dati. E utile quando non si sa cosa cercare: l'AI puo rivelare segmenti di mercato o comportamenti anomali che non avevi considerato.",
    category: "Machine Learning",
    relatedTerms: ["clustering", "anomaly-detection", "supervised-learning"],
  },
  {
    slug: "reinforcement-learning",
    term: "Reinforcement Learning",
    definition:
      "L'apprendimento per rinforzo e una tecnica di ML in cui un agente impara interagendo con un ambiente e ricevendo premi o penalita. E usato per ottimizzare strategie complesse come pricing dinamico, routing logistico e gestione del magazzino. L'agente sperimenta diverse azioni e impara quale strategia massimizza il risultato nel lungo periodo.",
    category: "Machine Learning",
    relatedTerms: ["agente-ai", "pricing-dinamico", "supervised-learning"],
  },
  {
    slug: "classificazione",
    term: "Classificazione",
    definition:
      "La classificazione e il compito di ML che assegna un'etichetta categorica a un input. Esempi: classificare email (spam/non spam), ticket di supporto (urgente/normale/basso), documenti (fattura/ordine/contratto) o immagini di prodotti (conforme/difettoso). E uno degli usi piu diffusi e immediati di AI nelle PMI, con ROI rapido e misurabile.",
    category: "Machine Learning",
    relatedTerms: ["supervised-learning", "random-forest", "precision"],
  },
  {
    slug: "regressione",
    term: "Regressione",
    definition:
      "La regressione e il compito di ML che prevede un valore numerico continuo. A differenza della classificazione che assegna categorie, la regressione stima quantita: previsione delle vendite, stima del prezzo di un immobile, previsione dei costi di produzione. E fondamentale per il demand forecasting e la pianificazione finanziaria nelle PMI.",
    category: "Machine Learning",
    relatedTerms: ["supervised-learning", "demand-forecasting", "gradient-boosting"],
  },
  {
    slug: "clustering",
    term: "Clustering",
    definition:
      "Il clustering e una tecnica di ML non supervisionato che raggruppa automaticamente dati simili. Si usa per segmentare clienti in base al comportamento d'acquisto, raggruppare prodotti simili, identificare pattern nelle chiamate di supporto. Non serve dire al modello quanti gruppi cercare (in molti algoritmi): li scopre autonomamente nei dati.",
    category: "Machine Learning",
    relatedTerms: ["k-means", "unsupervised-learning", "anomaly-detection"],
  },
  {
    slug: "random-forest",
    term: "Random Forest",
    definition:
      "Random Forest e un algoritmo di ML che combina centinaia di alberi decisionali per produrre previsioni robuste e accurate. Ogni albero vota e il risultato finale e la scelta della maggioranza. E popolare in azienda perche funziona bene con poca ottimizzazione, gestisce dati mancanti e fornisce informazioni su quali variabili sono piu importanti per la previsione.",
    category: "Machine Learning",
    relatedTerms: ["gradient-boosting", "classificazione", "feature-engineering"],
  },
  {
    slug: "gradient-boosting",
    term: "Gradient Boosting",
    definition:
      "Il gradient boosting e una tecnica di ML che costruisce modelli sequenzialmente, dove ogni nuovo modello corregge gli errori del precedente. XGBoost, LightGBM e CatBoost sono implementazioni popolari. E spesso l'algoritmo piu performante per dati tabulari strutturati (come fogli Excel e database aziendali), rendendolo ideale per previsioni su dati finanziari e operativi.",
    category: "Machine Learning",
    relatedTerms: ["random-forest", "regressione", "classificazione"],
  },
  {
    slug: "svm",
    term: "SVM (Support Vector Machine)",
    definition:
      "Le Support Vector Machine sono algoritmi di ML che trovano il confine ottimale per separare classi di dati. Funzionano bene con dataset di dimensioni moderate e sono particolarmente efficaci quando le classi sono chiaramente separabili. In azienda si usano per classificazione di documenti, rilevamento frodi e controllo qualita su dataset strutturati.",
    category: "Machine Learning",
    relatedTerms: ["classificazione", "supervised-learning", "random-forest"],
  },
  {
    slug: "k-means",
    term: "K-Means",
    definition:
      "K-Means e l'algoritmo di clustering piu utilizzato, che divide i dati in K gruppi minimizzando la distanza tra ciascun punto e il centro del suo gruppo. E semplice, veloce e intuitivo. Si usa per segmentare clienti, raggruppare prodotti per caratteristiche simili, analizzare zone geografiche di vendita e ottimizzare percorsi logistici.",
    category: "Machine Learning",
    relatedTerms: ["clustering", "unsupervised-learning", "anomaly-detection"],
  },
  {
    slug: "anomaly-detection",
    term: "Anomaly Detection",
    definition:
      "L'anomaly detection e la capacita di identificare automaticamente dati o comportamenti che si discostano significativamente dalla norma. In azienda si usa per rilevare frodi nei pagamenti, guasti imminenti nei macchinari (manutenzione predittiva), anomalie nei dati contabili e comportamenti sospetti nella sicurezza informatica. Trasforma i dati in un sistema di allerta precoce.",
    category: "Machine Learning",
    relatedTerms: ["manutenzione-predittiva", "clustering", "unsupervised-learning"],
  },
  {
    slug: "overfitting",
    term: "Overfitting",
    definition:
      "L'overfitting si verifica quando un modello ML impara troppo bene i dati di addestramento, memorizzando anche il rumore, e performa male su dati nuovi. E come studiare a memoria le risposte di un esame invece di capire la materia. Si previene con tecniche come cross-validation, regolarizzazione e data augmentation. E uno dei rischi piu comuni nei progetti AI aziendali.",
    category: "Machine Learning",
    relatedTerms: ["underfitting", "cross-validation", "data-augmentation"],
  },
  {
    slug: "underfitting",
    term: "Underfitting",
    definition:
      "L'underfitting si verifica quando un modello e troppo semplice per catturare i pattern nei dati, producendo prestazioni scarse sia sui dati di addestramento che su quelli nuovi. La soluzione e usare un modello piu complesso, aggiungere feature o aumentare i dati di addestramento. Bilanciare overfitting e underfitting e la sfida centrale del machine learning.",
    category: "Machine Learning",
    relatedTerms: ["overfitting", "feature-engineering", "cross-validation"],
  },
  {
    slug: "cross-validation",
    term: "Cross-Validation",
    definition:
      "La cross-validation e una tecnica per valutare le prestazioni reali di un modello ML dividendo i dati in parti (fold) e usando ciascuna a turno come set di test. Fornisce una stima piu affidabile delle prestazioni rispetto a una singola divisione train/test. E una pratica essenziale per evitare di mettere in produzione modelli che funzionano solo sui dati di sviluppo.",
    category: "Machine Learning",
    relatedTerms: ["overfitting", "precision", "f1-score"],
  },
  {
    slug: "feature-engineering",
    term: "Feature Engineering",
    definition:
      "La feature engineering e il processo di creare, selezionare e trasformare le variabili (feature) che alimentano un modello ML. Per esempio, da una data di ordine si possono derivare feature come giorno della settimana, mese, distanza dalla festivita piu vicina. Spesso il fattore che fa la differenza tra un modello mediocre e uno eccellente nelle applicazioni aziendali.",
    category: "Machine Learning",
    relatedTerms: ["dataset", "random-forest", "gradient-boosting"],
  },
  {
    slug: "data-augmentation",
    term: "Data Augmentation",
    definition:
      "La data augmentation e la tecnica di espandere artificialmente un dataset applicando trasformazioni ai dati esistenti. Per le immagini: rotazioni, zoom, variazioni di luce. Per il testo: parafrasi, sinonimi, traduzione inversa. E cruciale quando si hanno pochi dati di addestramento, situazione comune nelle PMI che iniziano il percorso AI.",
    category: "Machine Learning",
    relatedTerms: ["dataset", "overfitting", "transfer-learning"],
  },
  {
    slug: "transfer-learning",
    term: "Transfer Learning",
    definition:
      "Il transfer learning e la tecnica di riutilizzare un modello addestrato su un compito per risolverne un altro correlato. Invece di partire da zero, si parte da un modello che ha gia imparato pattern generali e lo si adatta al proprio caso specifico. E il motivo per cui le PMI possono ottenere risultati eccellenti con l'AI anche con pochi dati proprietari.",
    category: "Machine Learning",
    relatedTerms: ["fine-tuning", "foundation-model", "data-augmentation"],
  },
  {
    slug: "automl",
    term: "AutoML",
    definition:
      "AutoML (Automated Machine Learning) e l'insieme di strumenti che automatizzano il processo di costruzione di modelli ML: selezione dell'algoritmo, ottimizzazione dei parametri, feature engineering. Piattaforme come Google AutoML e H2O permettono a non-esperti di costruire modelli efficaci. Per le PMI senza data scientist interni, AutoML democratizza l'accesso al machine learning.",
    category: "Machine Learning",
    relatedTerms: ["feature-engineering", "mlops", "machine-learning"],
  },
  {
    slug: "mlops",
    term: "MLOps",
    definition:
      "MLOps e la disciplina che combina machine learning e operations per gestire il ciclo di vita completo dei modelli AI in produzione. Include versioning dei dati, addestramento automatizzato, monitoraggio delle prestazioni e aggiornamento dei modelli. Per le aziende che hanno piu modelli in produzione, MLOps e essenziale per garantire affidabilita e manutenibilita nel tempo.",
    category: "Machine Learning",
    relatedTerms: ["model-serving", "automl", "data-pipeline"],
  },
  {
    slug: "model-serving",
    term: "Model Serving",
    definition:
      "Il model serving e il processo di rendere un modello ML disponibile per l'uso in produzione tramite API o servizi web. Include la gestione del carico, la scalabilita, il monitoraggio delle latenze e la gestione delle versioni. Piattaforme come AWS SageMaker, Google Vertex AI e soluzioni open source rendono il deployment accessibile anche alle PMI.",
    category: "Machine Learning",
    relatedTerms: ["mlops", "inferenza", "api"],
  },
  {
    slug: "ab-testing",
    term: "A/B Testing",
    definition:
      "L'A/B testing e un metodo sperimentale in cui si confrontano due versioni (A e B) di un elemento per determinare quale performa meglio. Nel contesto AI, si usa per testare diversi modelli, prompt o strategie prima di adottarli in produzione. Per le PMI, e fondamentale per validare che l'AI porti reali miglioramenti rispetto al processo attuale.",
    category: "Machine Learning",
    relatedTerms: ["precision", "kpi", "roi"],
  },
  {
    slug: "precision",
    term: "Precision",
    definition:
      "La precision e una metrica che misura quante delle previsioni positive di un modello sono effettivamente corrette. Se un sistema di anomaly detection segnala 100 transazioni sospette e 80 sono realmente fraudolente, la precision e dell'80%. E importante quando i falsi positivi hanno un costo alto, come nel rilevamento frodi o nella diagnostica.",
    category: "Machine Learning",
    relatedTerms: ["recall", "f1-score", "confusion-matrix"],
  },
  {
    slug: "recall",
    term: "Recall",
    definition:
      "La recall misura quante delle istanze positive reali vengono effettivamente identificate dal modello. Se ci sono 100 email di phishing e il sistema ne rileva 90, la recall e del 90%. E critica quando il costo di non rilevare un caso positivo e alto, come nella sicurezza, nel quality control e nella diagnostica medica.",
    category: "Machine Learning",
    relatedTerms: ["precision", "f1-score", "confusion-matrix"],
  },
  {
    slug: "f1-score",
    term: "F1 Score",
    definition:
      "L'F1 score e la media armonica di precision e recall, fornendo una singola metrica che bilancia entrambe. Un F1 score alto indica che il modello e sia preciso nelle sue previsioni positive sia capace di trovare la maggior parte dei casi positivi. E la metrica piu usata per valutare modelli di classificazione in contesti aziendali dove servono sia precisione che completezza.",
    category: "Machine Learning",
    relatedTerms: ["precision", "recall", "confusion-matrix"],
  },
  {
    slug: "confusion-matrix",
    term: "Confusion Matrix (Matrice di Confusione)",
    definition:
      "La matrice di confusione e una tabella che visualizza le prestazioni di un modello di classificazione, mostrando veri positivi, veri negativi, falsi positivi e falsi negativi. Permette di capire non solo quanto il modello sbaglia, ma come sbaglia. E fondamentale per decidere se un modello AI e pronto per la produzione e dove serve migliorarlo.",
    category: "Machine Learning",
    relatedTerms: ["precision", "recall", "f1-score"],
  },

  // ──────────────────────────────────────────────────────────────────────
  // COMPUTER VISION (15)
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: "computer-vision",
    term: "Computer Vision",
    definition:
      "La computer vision e il campo dell'AI che permette ai computer di interpretare immagini e video. Include riconoscimento oggetti, ispezione qualita, lettura targhe, analisi video di sicurezza. Nella manifattura italiana, la computer vision automatizza il controllo qualita visivo, riducendo i difetti che raggiungono il cliente e velocizzando le linee di produzione.",
    category: "Computer Vision",
    relatedTerms: ["object-detection", "image-classification", "quality-inspection"],
  },
  {
    slug: "object-detection",
    term: "Object Detection",
    definition:
      "L'object detection e la tecnica di computer vision che identifica e localizza oggetti specifici in un'immagine o video, disegnando un riquadro attorno a ciascuno. Si usa per contare prodotti su un nastro trasportatore, rilevare difetti in componenti, monitorare aree di sicurezza. Algoritmi come YOLO permettono il rilevamento in tempo reale, anche su dispositivi edge.",
    category: "Computer Vision",
    relatedTerms: ["yolo", "computer-vision", "cnn"],
  },
  {
    slug: "image-classification",
    term: "Image Classification",
    definition:
      "La classificazione di immagini e il compito di assegnare automaticamente una categoria a un'immagine. Per esempio: 'pezzo conforme' vs 'pezzo difettoso', oppure classificare automaticamente documenti scansionati per tipo. Le CNN (reti neurali convoluzionali) raggiungono accuratezze superiori al 99% su molti compiti di classificazione industriale.",
    category: "Computer Vision",
    relatedTerms: ["cnn", "computer-vision", "quality-inspection"],
  },
  {
    slug: "segmentation",
    term: "Segmentation",
    definition:
      "La segmentazione di immagini e la tecnica che classifica ogni singolo pixel di un'immagine, identificando con precisione i contorni di ogni oggetto. A differenza dell'object detection che disegna riquadri, la segmentazione delinea la forma esatta. Si usa per misurazioni precise, analisi di immagini mediche, e guida autonoma di robot e veicoli in fabbrica.",
    category: "Computer Vision",
    relatedTerms: ["computer-vision", "object-detection", "cnn"],
  },
  {
    slug: "face-recognition",
    term: "Face Recognition",
    definition:
      "Il riconoscimento facciale e la tecnologia che identifica o verifica l'identita di una persona analizzando le caratteristiche del volto. Nelle aziende si usa per controllo accessi, registrazione presenze e sicurezza. E importante implementarlo nel rispetto del GDPR e delle normative europee sull'AI, che pongono limiti stringenti all'uso del riconoscimento biometrico.",
    category: "Computer Vision",
    relatedTerms: ["computer-vision", "gdpr", "ethics-ai"],
  },
  {
    slug: "quality-inspection",
    term: "Quality Inspection (Ispezione Qualita)",
    definition:
      "L'ispezione qualita AI usa la computer vision per verificare automaticamente la conformita di prodotti sulla linea di produzione. Telecamere ad alta risoluzione e algoritmi di deep learning rilevano graffi, ammaccature, difetti di colore e irregolarita dimensionali con una velocita e costanza impossibili per l'occhio umano. Riduce i resi e i costi di rilavorazione.",
    category: "Computer Vision",
    relatedTerms: ["computer-vision", "object-detection", "smart-factory"],
  },
  {
    slug: "visual-search",
    term: "Visual Search (Ricerca Visiva)",
    definition:
      "La ricerca visiva permette di trovare prodotti o informazioni partendo da un'immagine invece che da una parola chiave. Un tecnico puo fotografare un componente e il sistema trova automaticamente il codice prodotto, le specifiche e la disponibilita. Nell'e-commerce, permette ai clienti di cercare prodotti simili a quelli in una foto.",
    category: "Computer Vision",
    relatedTerms: ["embedding", "image-classification", "computer-vision"],
  },
  {
    slug: "image-generation",
    term: "Image Generation (Generazione Immagini)",
    definition:
      "La generazione di immagini AI crea immagini originali a partire da descrizioni testuali o da immagini di riferimento. Strumenti come DALL-E, Midjourney e Stable Diffusion producono immagini fotorealistiche o artistiche. Per le aziende, accelera la creazione di contenuti marketing, mockup di prodotto, immagini per cataloghi e materiale formativo.",
    category: "Computer Vision",
    relatedTerms: ["dall-e", "stable-diffusion", "gan", "ai-generativa"],
  },
  {
    slug: "dall-e",
    term: "DALL-E",
    definition:
      "DALL-E e il modello di generazione immagini sviluppato da OpenAI che crea immagini a partire da descrizioni testuali. DALL-E 3, integrato in ChatGPT, produce immagini di alta qualita con un controllo preciso su composizione, stile e dettagli. Le aziende lo usano per creare rapidamente visual per social media, presentazioni e materiale marketing.",
    category: "Computer Vision",
    relatedTerms: ["image-generation", "stable-diffusion", "openai"],
  },
  {
    slug: "stable-diffusion",
    term: "Stable Diffusion",
    definition:
      "Stable Diffusion e un modello open source di generazione immagini che puo essere eseguito localmente sui propri server. A differenza di DALL-E, non richiede l'invio di dati a servizi cloud, offrendo maggiore privacy e personalizzazione. Puo essere fine-tunato su prodotti specifici dell'azienda per generare immagini di catalogo perfettamente coerenti con il brand.",
    category: "Computer Vision",
    relatedTerms: ["image-generation", "dall-e", "gan"],
  },
  {
    slug: "gan",
    term: "GAN (Generative Adversarial Network)",
    definition:
      "Le GAN sono architetture AI composte da due reti neurali che competono: una genera contenuti (generatore) e l'altra li valuta (discriminatore). Questa competizione produce risultati sempre piu realistici. Le GAN sono state pioniere nella generazione di immagini e si usano anche per data augmentation, creazione di dati sintetici e simulazione di scenari.",
    category: "Computer Vision",
    relatedTerms: ["image-generation", "data-augmentation", "rete-neurale"],
  },
  {
    slug: "cnn",
    term: "CNN (Convolutional Neural Network)",
    definition:
      "Le CNN sono reti neurali specializzate nell'analisi di immagini, ispirate al sistema visivo biologico. Usano filtri convoluzionali per rilevare automaticamente feature come bordi, texture e forme complesse. Sono alla base di quasi tutte le applicazioni di computer vision industriale, dal controllo qualita al riconoscimento di difetti nei prodotti.",
    category: "Computer Vision",
    relatedTerms: ["computer-vision", "deep-learning", "image-classification"],
  },
  {
    slug: "yolo",
    term: "YOLO (You Only Look Once)",
    definition:
      "YOLO e un algoritmo di object detection estremamente veloce che analizza un'intera immagine in un singolo passaggio. Le versioni piu recenti (YOLOv8, YOLOv9) combinano velocita e accuratezza, permettendo il rilevamento in tempo reale su video a 30+ fps anche su hardware modesto. E lo standard de facto per applicazioni real-time come il monitoraggio di linee produttive.",
    category: "Computer Vision",
    relatedTerms: ["object-detection", "cnn", "edge-ai"],
  },
  {
    slug: "edge-ai",
    term: "Edge AI",
    definition:
      "L'edge AI e l'esecuzione di modelli AI direttamente sul dispositivo (telecamera, sensore, macchinario) invece che su server cloud. Elimina la latenza di rete, funziona offline e protegge la privacy dei dati. In fabbrica, permette ispezioni qualita in tempo reale sulla linea, senza dipendere dalla connessione internet. Dispositivi come NVIDIA Jetson rendono l'edge AI accessibile.",
    category: "Computer Vision",
    relatedTerms: ["yolo", "computer-vision", "iot"],
  },

  // ──────────────────────────────────────────────────────────────────────
  // AUTOMAZIONE & RPA (20)
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: "rpa",
    term: "RPA (Robotic Process Automation)",
    definition:
      "L'RPA e la tecnologia che usa 'robot software' per automatizzare compiti ripetitivi normalmente svolti da persone: copiare dati tra sistemi, compilare form, generare report. Non richiede modifiche ai sistemi esistenti perche interagisce con le interfacce come farebbe un utente. Per le PMI, e il modo piu rapido per automatizzare processi senza cambiare il software gestionale.",
    category: "Automazione & RPA",
    relatedTerms: ["workflow-automation", "intelligent-automation", "bot"],
  },
  {
    slug: "workflow-automation",
    term: "Workflow Automation",
    definition:
      "L'automazione dei workflow e la progettazione e esecuzione automatica di sequenze di attivita aziendali. Per esempio: quando arriva un ordine, il sistema verifica il credito del cliente, controlla la disponibilita, genera la conferma d'ordine e notifica il magazzino. Strumenti come n8n, Zapier e Make permettono di costruire workflow complessi senza scrivere codice.",
    category: "Automazione & RPA",
    relatedTerms: ["n8n", "zapier", "make"],
  },
  {
    slug: "process-mining",
    term: "Process Mining",
    definition:
      "Il process mining e la tecnica che analizza i log dei sistemi informativi per ricostruire e visualizzare i processi aziendali come avvengono realmente, non come dovrebbero avvenire. Rivela colli di bottiglia, deviazioni e inefficienze nascoste. E il punto di partenza ideale prima di automatizzare: mostra dove l'automazione porterebbe il maggior beneficio.",
    category: "Automazione & RPA",
    relatedTerms: ["task-mining", "workflow-automation", "kpi"],
  },
  {
    slug: "task-mining",
    term: "Task Mining",
    definition:
      "Il task mining osserva come gli utenti interagiscono con il computer (click, digitazione, navigazione tra applicazioni) per identificare attivita ripetitive automatizzabili. A differenza del process mining che analizza i log di sistema, il task mining cattura il lavoro quotidiano degli impiegati. Rivela automazioni che nessun manager vedrebbe analizzando solo i processi ufficiali.",
    category: "Automazione & RPA",
    relatedTerms: ["process-mining", "rpa", "workflow-automation"],
  },
  {
    slug: "intelligent-automation",
    term: "Intelligent Automation",
    definition:
      "L'automazione intelligente combina RPA con AI per automatizzare non solo compiti ripetitivi ma anche quelli che richiedono comprensione e decisione. Un bot RPA 'classico' copia dati; un'automazione intelligente legge una fattura, ne comprende il contenuto, decide come classificarla e la registra nel gestionale. E l'evoluzione naturale dell'RPA per le aziende mature.",
    category: "Automazione & RPA",
    relatedTerms: ["rpa", "hyperautomation", "agente-ai"],
  },
  {
    slug: "hyperautomation",
    term: "Hyperautomation",
    definition:
      "L'hyperautomation e la strategia di automatizzare il maggior numero possibile di processi aziendali combinando AI, RPA, process mining e strumenti low-code. Non si tratta di automatizzare un singolo compito ma di ripensare interi flussi di lavoro end-to-end. Gartner la identifica come un mega-trend tecnologico. Per le PMI, e un obiettivo a medio termine dopo le prime automazioni pilota.",
    category: "Automazione & RPA",
    relatedTerms: ["intelligent-automation", "rpa", "process-mining"],
  },
  {
    slug: "bot",
    term: "Bot",
    definition:
      "Un bot e un programma software che esegue compiti automatizzati. Nell'ambito RPA, un bot replica le azioni di un utente su applicazioni desktop o web. Nell'ambito chatbot, un bot gestisce conversazioni con gli utenti. I bot possono funzionare 24/7 senza pause, elaborare volumi che sarebbero impossibili manualmente e ridurre gli errori umani.",
    category: "Automazione & RPA",
    relatedTerms: ["rpa", "chatbot", "workflow-automation"],
  },
  {
    slug: "api",
    term: "API (Application Programming Interface)",
    definition:
      "Un'API e un'interfaccia che permette a due sistemi software di comunicare tra loro. Per esempio, l'API di Claude permette di integrare l'AI direttamente nel gestionale aziendale. Le API sono il tessuto connettivo dell'automazione moderna: collegano CRM, ERP, email, e-commerce e qualsiasi altro sistema senza dover riscrivere il software.",
    category: "Automazione & RPA",
    relatedTerms: ["webhook", "integrazione", "middleware"],
  },
  {
    slug: "webhook",
    term: "Webhook",
    definition:
      "Un webhook e un meccanismo con cui un sistema notifica automaticamente un altro sistema quando si verifica un evento. Per esempio, quando un cliente compila un form sul sito, un webhook puo attivare automaticamente un workflow: inviare una notifica su Slack, creare un contatto nel CRM e programmare un'email di follow-up. E il 'trigger' di molte automazioni aziendali.",
    category: "Automazione & RPA",
    relatedTerms: ["api", "trigger", "workflow-automation"],
  },
  {
    slug: "etl",
    term: "ETL (Extract, Transform, Load)",
    definition:
      "ETL e il processo di estrarre dati da diverse fonti (ERP, CRM, fogli Excel), trasformarli in un formato uniforme e caricarli in un sistema di destinazione (data warehouse, dashboard). E il fondamento della business intelligence e dell'analytics. Per le PMI, un buon processo ETL elimina le ore spese a consolidare manualmente dati da sistemi diversi.",
    category: "Automazione & RPA",
    relatedTerms: ["data-pipeline", "data-warehouse", "data-lake"],
  },
  {
    slug: "data-pipeline",
    term: "Data Pipeline",
    definition:
      "Una data pipeline e un flusso automatizzato che muove e trasforma dati da una sorgente a una destinazione. A differenza dell'ETL tradizionale, le pipeline moderne processano dati in tempo reale o quasi. Per esempio, una pipeline puo raccogliere dati IoT dai macchinari, aggregarli e alimentare una dashboard di produzione aggiornata al minuto.",
    category: "Automazione & RPA",
    relatedTerms: ["etl", "data-warehouse", "orchestrazione"],
  },
  {
    slug: "orchestrazione",
    term: "Orchestrazione",
    definition:
      "L'orchestrazione e la coordinazione automatica di piu servizi, processi o sistemi per completare un workflow complesso. Un orchestratore decide l'ordine di esecuzione, gestisce errori e retry, e monitora lo stato di avanzamento. In contesto AI, orchestrare significa coordinare piu modelli, API e database per produrre un risultato finale completo.",
    category: "Automazione & RPA",
    relatedTerms: ["workflow-automation", "microservizi", "data-pipeline"],
  },
  {
    slug: "scheduling",
    term: "Scheduling",
    definition:
      "Lo scheduling e la pianificazione automatica dell'esecuzione di compiti a orari o intervalli predefiniti. Un sistema di scheduling puo lanciare report giornalieri, aggiornare dashboard, sincronizzare dati tra sistemi e generare comunicazioni periodiche. Cron job, schedulatori cloud e strumenti come n8n permettono di automatizzare qualsiasi attivita ripetitiva basata sul tempo.",
    category: "Automazione & RPA",
    relatedTerms: ["workflow-automation", "trigger", "n8n"],
  },
  {
    slug: "trigger",
    term: "Trigger",
    definition:
      "Un trigger e un evento che avvia automaticamente un workflow o un'azione. Puo essere basato sul tempo (ogni lunedi alle 9:00), su un evento (nuovo ordine ricevuto), su una condizione (stock sotto la soglia minima) o su un'azione utente (click su un pulsante). Definire i trigger giusti e il primo passo per progettare automazioni aziendali efficaci.",
    category: "Automazione & RPA",
    relatedTerms: ["webhook", "scheduling", "workflow-automation"],
  },
  {
    slug: "low-code",
    term: "Low-Code",
    definition:
      "Le piattaforme low-code permettono di costruire applicazioni e automazioni con minima scrittura di codice, usando prevalentemente interfacce visuali drag-and-drop. Riducono drasticamente i tempi e i costi di sviluppo. Per le PMI, strumenti low-code come n8n, Retool e Budibase permettono di creare soluzioni personalizzate senza dipendere completamente da sviluppatori esterni.",
    category: "Automazione & RPA",
    relatedTerms: ["no-code", "n8n", "workflow-automation"],
  },
  {
    slug: "no-code",
    term: "No-Code",
    definition:
      "Le piattaforme no-code permettono di costruire applicazioni e automazioni senza scrivere alcuna riga di codice. Strumenti come Zapier, Make e Airtable consentono a chiunque in azienda di creare workflow automatizzati, database e interfacce. Democratizzano la tecnologia, permettendo ai reparti business di automatizzare i propri processi senza attendere l'IT.",
    category: "Automazione & RPA",
    relatedTerms: ["low-code", "zapier", "make"],
  },
  {
    slug: "integrazione",
    term: "Integrazione",
    definition:
      "L'integrazione e il processo di far comunicare e lavorare insieme sistemi software diversi. Per esempio, collegare il CRM con l'ERP, l'e-commerce con il magazzino, il sistema di fatturazione con la banca. Le integrazioni eliminano la doppia digitazione, riducono gli errori e permettono ai dati di fluire automaticamente tra i reparti dell'azienda.",
    category: "Automazione & RPA",
    relatedTerms: ["api", "middleware", "etl"],
  },
  {
    slug: "middleware",
    term: "Middleware",
    definition:
      "Il middleware e il software che fa da 'collante' tra sistemi diversi, traducendo formati, gestendo code di messaggi e coordinando le comunicazioni. Nelle aziende con sistemi legacy (vecchi ERP, gestionali personalizzati), il middleware permette di integrare questi sistemi con strumenti moderni e AI senza doverli sostituire.",
    category: "Automazione & RPA",
    relatedTerms: ["integrazione", "api", "microservizi"],
  },
  {
    slug: "microservizi",
    term: "Microservizi",
    definition:
      "L'architettura a microservizi suddivide un'applicazione in servizi indipendenti, ciascuno responsabile di una funzione specifica. Ogni servizio puo essere sviluppato, distribuito e scalato indipendentemente. Per le PMI, i microservizi permettono di aggiungere funzionalita AI (chatbot, OCR, analytics) al sistema esistente senza toccare il software gestionale principale.",
    category: "Automazione & RPA",
    relatedTerms: ["api", "serverless", "middleware"],
  },
  {
    slug: "serverless",
    term: "Serverless",
    definition:
      "Il computing serverless permette di eseguire codice senza gestire server, pagando solo per l'utilizzo effettivo. Per l'AI, significa poter eseguire inferenze, elaborare documenti o processare dati senza investire in infrastruttura. AWS Lambda, Google Cloud Functions e Vercel Serverless Functions sono piattaforme serverless. Ideale per PMI: nessun server da mantenere, costi proporzionali all'uso.",
    category: "Automazione & RPA",
    relatedTerms: ["microservizi", "vercel", "api"],
  },

  // ──────────────────────────────────────────────────────────────────────
  // BUSINESS & STRATEGIA (30)
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: "digital-transformation",
    term: "Digital Transformation (Trasformazione Digitale)",
    definition:
      "La trasformazione digitale e il processo di integrazione di tecnologie digitali in tutte le aree aziendali per migliorare operazioni, esperienze clienti e modelli di business. Non e solo adottare nuovi software: e ripensare processi e cultura aziendale. L'AI e oggi il principale acceleratore della trasformazione digitale per le PMI italiane.",
    category: "Business & Strategia",
    relatedTerms: ["roadmap-ai", "ai-readiness", "change-management"],
  },
  {
    slug: "roi",
    term: "ROI (Return on Investment)",
    definition:
      "Il ROI misura il rendimento di un investimento rispetto al suo costo. Per i progetti AI, il ROI si calcola confrontando i benefici (risparmi di tempo, riduzione errori, aumento vendite) con i costi (licenze, sviluppo, formazione). Un progetto AI ben pianificato per una PMI dovrebbe mostrare ROI positivo entro 3-6 mesi dall'implementazione.",
    category: "Business & Strategia",
    relatedTerms: ["tco", "kpi", "value-creation"],
  },
  {
    slug: "tco",
    term: "TCO (Total Cost of Ownership)",
    definition:
      "Il TCO e il costo totale di possesso di una soluzione tecnologica, includendo non solo il prezzo di acquisto ma anche implementazione, formazione, manutenzione, aggiornamenti e costi operativi nel tempo. Per le soluzioni AI, il TCO include i costi API, l'infrastruttura cloud, il personale dedicato e la manutenzione dei modelli. E essenziale per confronti realistici.",
    category: "Business & Strategia",
    relatedTerms: ["roi", "scalabilita", "time-to-value"],
  },
  {
    slug: "mvp",
    term: "MVP (Minimum Viable Product)",
    definition:
      "L'MVP e la versione minima ma funzionante di un prodotto o servizio, lanciata per validare un'ipotesi con il minimo investimento. Per i progetti AI, un MVP potrebbe essere un chatbot che gestisce le 10 FAQ piu frequenti, o un sistema di classificazione automatica su un singolo tipo di documento. Si inizia piccoli, si misura e si scala.",
    category: "Business & Strategia",
    relatedTerms: ["poc", "time-to-value", "ab-testing"],
  },
  {
    slug: "poc",
    term: "POC (Proof of Concept)",
    definition:
      "Un POC e un progetto pilota a scala ridotta per dimostrare la fattibilita tecnica e il valore di una soluzione prima di investire nell'implementazione completa. Un POC AI tipico dura 2-4 settimane, usa un subset dei dati reali e produce metriche concrete. E il modo piu sicuro per le PMI di validare l'AI prima di impegnare budget significativi.",
    category: "Business & Strategia",
    relatedTerms: ["mvp", "roi", "ai-readiness"],
  },
  {
    slug: "scalabilita",
    term: "Scalabilita",
    definition:
      "La scalabilita e la capacita di un sistema o processo di gestire volumi crescenti senza degradare le prestazioni o richiedere costi proporzionalmente crescenti. Un sistema AI scalabile puo passare da 100 a 10.000 documenti elaborati al giorno senza riprogettazione. La scalabilita e una delle promesse principali dell'AI: una volta costruito, il costo marginale per unita diminuisce.",
    category: "Business & Strategia",
    relatedTerms: ["serverless", "microservizi", "roi"],
  },
  {
    slug: "kpi",
    term: "KPI (Key Performance Indicator)",
    definition:
      "I KPI sono metriche chiave che misurano le prestazioni di un processo, reparto o azienda rispetto agli obiettivi. Per i progetti AI, i KPI tipici includono: tempo medio di risposta, tasso di errore, volume di documenti processati, risparmio ore/mese, incremento conversioni. Definire KPI chiari prima di implementare l'AI e essenziale per misurarne il successo.",
    category: "Business & Strategia",
    relatedTerms: ["okr", "roi", "analytics"],
  },
  {
    slug: "okr",
    term: "OKR (Objectives and Key Results)",
    definition:
      "Gli OKR sono un framework di definizione obiettivi che combina obiettivi ambiziosi (Objectives) con risultati misurabili (Key Results). Per esempio: Obiettivo 'Automatizzare il customer service', Key Results 'Ridurre il tempo medio di risposta del 60%' e 'Gestire il 40% dei ticket senza intervento umano'. Gli OKR allineano il team sulle priorita AI dell'azienda.",
    category: "Business & Strategia",
    relatedTerms: ["kpi", "roadmap-ai", "change-management"],
  },
  {
    slug: "time-to-value",
    term: "Time-to-Value",
    definition:
      "Il time-to-value e il tempo necessario perche un investimento (in questo caso un progetto AI) inizi a produrre benefici tangibili. Le PMI dovrebbero puntare a soluzioni AI con time-to-value breve (settimane, non mesi): chatbot, automazione email, classificazione documenti. Progetti con time-to-value lungo richiedono piu fiducia e budget dall'organizzazione.",
    category: "Business & Strategia",
    relatedTerms: ["mvp", "poc", "roi"],
  },
  {
    slug: "change-management",
    term: "Change Management",
    definition:
      "Il change management e l'insieme di strategie per gestire il cambiamento organizzativo introdotto da nuove tecnologie come l'AI. Include comunicazione, formazione, gestione delle resistenze e supporto ai dipendenti. Molti progetti AI falliscono non per ragioni tecniche ma perche il team non e stato preparato e coinvolto. Il change management e il 50% del successo.",
    category: "Business & Strategia",
    relatedTerms: ["digital-transformation", "ai-readiness", "formazione-ai-team-aziendale"],
  },
  {
    slug: "data-driven",
    term: "Data-Driven",
    definition:
      "Un approccio data-driven basa le decisioni aziendali su dati e analisi piuttosto che su intuizioni o consuetudini. L'AI amplifica la capacita data-driven perche puo analizzare volumi di dati impossibili per gli umani e scoprire pattern non evidenti. Per le PMI italiane, diventare data-driven significa smettere di decidere 'a sensazione' e iniziare a decidere con evidenze.",
    category: "Business & Strategia",
    relatedTerms: ["business-intelligence", "analytics", "predictive-analytics"],
  },
  {
    slug: "business-intelligence",
    term: "Business Intelligence (BI)",
    definition:
      "La business intelligence comprende le tecnologie, le pratiche e le strategie per raccogliere, integrare e analizzare dati aziendali per supportare le decisioni. Dashboard, report, analisi trend e visualizzazioni dati sono strumenti BI. L'AI sta evolvendo la BI da descrittiva (cosa e successo) a predittiva (cosa succedera) e prescriptiva (cosa fare).",
    category: "Business & Strategia",
    relatedTerms: ["dashboard", "analytics", "data-driven"],
  },
  {
    slug: "dashboard",
    term: "Dashboard",
    definition:
      "Una dashboard e un'interfaccia visuale che mostra le metriche chiave e lo stato di processi aziendali in tempo reale. Dashboard AI-powered vanno oltre la visualizzazione statica: evidenziano automaticamente anomalie, prevedono trend e suggeriscono azioni. Per un CEO di PMI, una buona dashboard e lo strumento quotidiano per prendere decisioni rapide e informate.",
    category: "Business & Strategia",
    relatedTerms: ["business-intelligence", "kpi", "analytics"],
  },
  {
    slug: "analytics",
    term: "Analytics",
    definition:
      "L'analytics e la disciplina che trasforma i dati grezzi in insight utili per le decisioni aziendali. Si divide in descrittiva (cosa e successo), diagnostica (perche e successo), predittiva (cosa succedera) e prescriptiva (cosa fare). L'AI sta rendendo l'analytics accessibile anche alle PMI senza team di data scientist, grazie a strumenti che analizzano i dati con il linguaggio naturale.",
    category: "Business & Strategia",
    relatedTerms: ["predictive-analytics", "prescriptive-analytics", "business-intelligence"],
  },
  {
    slug: "predictive-analytics",
    term: "Predictive Analytics",
    definition:
      "La predictive analytics usa modelli statistici e ML per prevedere eventi futuri basandosi su dati storici. Previsione vendite, stima della domanda, probabilita di churn dei clienti, previsione guasti macchinari: tutte applicazioni concrete per le PMI. Non e una sfera di cristallo: e una stima probabilistica che migliora significativamente le decisioni rispetto all'intuizione.",
    category: "Business & Strategia",
    relatedTerms: ["prescriptive-analytics", "demand-forecasting", "machine-learning"],
  },
  {
    slug: "prescriptive-analytics",
    term: "Prescriptive Analytics",
    definition:
      "La prescriptive analytics va oltre la previsione e suggerisce le azioni ottimali da intraprendere. Non dice solo 'le vendite caleranno del 10%' ma 'per evitare il calo, aumenta il budget marketing sul canale X del 15% e lancia la promozione Y'. E il livello piu avanzato di analytics AI e richiede dati di qualita e modelli ben calibrati.",
    category: "Business & Strategia",
    relatedTerms: ["predictive-analytics", "analytics", "data-driven"],
  },
  {
    slug: "data-lake",
    term: "Data Lake",
    definition:
      "Un data lake e un repository centralizzato che archivia dati grezzi in qualsiasi formato (strutturato, semi-strutturato, non strutturato) a basso costo. A differenza del data warehouse, non richiede uno schema predefinito. Per le PMI che producono dati da molte fonti (IoT, CRM, ERP, web), un data lake permette di conservare tutto e analizzarlo quando serve.",
    category: "Business & Strategia",
    relatedTerms: ["data-warehouse", "etl", "data-pipeline"],
  },
  {
    slug: "data-warehouse",
    term: "Data Warehouse",
    definition:
      "Un data warehouse e un database ottimizzato per l'analisi e il reporting, che contiene dati strutturati e puliti provenienti da diverse fonti aziendali. A differenza del data lake, i dati sono organizzati in uno schema predefinito. E la scelta giusta quando si ha bisogno di dashboard affidabili, report finanziari e analytics strutturate.",
    category: "Business & Strategia",
    relatedTerms: ["data-lake", "etl", "business-intelligence"],
  },
  {
    slug: "governance-ai",
    term: "Governance AI",
    definition:
      "La governance AI e l'insieme di politiche, processi e controlli che un'organizzazione adotta per gestire l'uso dell'AI in modo sicuro, etico e conforme. Include la definizione di chi puo usare quali strumenti AI, come vengono gestiti i dati, come si verificano i risultati e come si gestiscono i rischi. Con l'AI Act europeo, la governance AI non e piu opzionale.",
    category: "Business & Strategia",
    relatedTerms: ["compliance", "ethics-ai", "responsible-ai"],
  },
  {
    slug: "compliance",
    term: "Compliance",
    definition:
      "La compliance e la conformita alle normative, regolamenti e standard applicabili. Per l'AI in azienda, include il GDPR per i dati personali, l'AI Act europeo per l'uso dei sistemi AI e le normative di settore. Le PMI devono assicurarsi che i propri sistemi AI non violino privacy, non discriminino e siano trasparenti nelle decisioni automatizzate.",
    category: "Business & Strategia",
    relatedTerms: ["gdpr", "governance-ai", "ai-audit"],
  },
  {
    slug: "gdpr",
    term: "GDPR",
    definition:
      "Il GDPR (General Data Protection Regulation) e il regolamento europeo sulla protezione dei dati personali. Nell'ambito AI, impone regole su come i dati personali vengono usati per addestrare modelli, richiede trasparenza nelle decisioni automatizzate e garantisce il diritto alla spiegazione. Ogni PMI che usa AI con dati di clienti o dipendenti deve rispettare il GDPR.",
    category: "Business & Strategia",
    relatedTerms: ["compliance", "governance-ai", "ethics-ai"],
  },
  {
    slug: "ethics-ai",
    term: "Ethics AI (Etica dell'AI)",
    definition:
      "L'etica dell'AI si occupa di garantire che i sistemi AI siano equi, trasparenti, non discriminatori e rispettosi dei diritti umani. Include evitare bias, garantire la privacy, mantenere il controllo umano sulle decisioni critiche e assicurare la spiegabilita dei risultati. L'UE e all'avanguardia nella regolamentazione etica dell'AI con l'AI Act.",
    category: "Business & Strategia",
    relatedTerms: ["responsible-ai", "bias", "governance-ai"],
  },
  {
    slug: "responsible-ai",
    term: "Responsible AI (AI Responsabile)",
    definition:
      "L'AI responsabile e l'approccio allo sviluppo e all'uso dell'AI che priorizza sicurezza, equita, trasparenza e accountabilita. Include testare i modelli per bias, documentare le decisioni di design, monitorare i risultati in produzione e avere piani per gestire errori. Per le PMI, adottare AI responsabile significa costruire fiducia con clienti, dipendenti e regolatori.",
    category: "Business & Strategia",
    relatedTerms: ["ethics-ai", "ai-audit", "governance-ai"],
  },
  {
    slug: "ai-audit",
    term: "AI Audit",
    definition:
      "Un AI audit e una valutazione sistematica dei sistemi AI di un'organizzazione per verificarne prestazioni, sicurezza, equita e conformita normativa. Include testare i modelli per bias, verificare la qualita dei dati, valutare i rischi e documentare i risultati. Con l'AI Act europeo, gli audit AI diventeranno obbligatori per i sistemi ad alto rischio.",
    category: "Business & Strategia",
    relatedTerms: ["governance-ai", "compliance", "responsible-ai"],
  },
  {
    slug: "maturity-model",
    term: "Maturity Model (Modello di Maturita)",
    definition:
      "Un modello di maturita AI valuta a che punto e un'organizzazione nel percorso di adozione dell'AI, da 'iniziale' (nessun uso) a 'ottimizzato' (AI integrata in tutti i processi). Aiuta a capire dove si e, definire obiettivi realistici e pianificare i prossimi passi. Per le PMI, la maggior parte e ai livelli 1-2, con enormi opportunita di crescita.",
    category: "Business & Strategia",
    relatedTerms: ["ai-readiness", "roadmap-ai", "digital-transformation"],
  },
  {
    slug: "roadmap-ai",
    term: "Roadmap AI",
    definition:
      "Una roadmap AI e il piano strategico che definisce come un'organizzazione adottera l'AI nel tempo. Include prioritizzazione dei casi d'uso, timeline, budget, risorse necessarie e milestone. Una buona roadmap AI per PMI parte da quick win (automazioni semplici con ROI rapido) e progredisce verso soluzioni piu avanzate (agenti AI, analytics predittive).",
    category: "Business & Strategia",
    relatedTerms: ["maturity-model", "ai-readiness", "poc"],
  },
  {
    slug: "value-creation",
    term: "Value Creation (Creazione di Valore)",
    definition:
      "La creazione di valore tramite AI si manifesta in tre forme principali: riduzione costi (automazione, efficienza), aumento ricavi (personalizzazione, nuovi servizi) e mitigazione rischi (compliance, quality control). Per le PMI, il primo impatto e quasi sempre nella riduzione costi; con la maturita, l'AI diventa leva per creare nuovi flussi di ricavo.",
    category: "Business & Strategia",
    relatedTerms: ["roi", "kpi", "digital-transformation"],
  },
  {
    slug: "ebitda",
    term: "EBITDA",
    definition:
      "L'EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization) e un indicatore della redditivita operativa aziendale. I fondi di investimento e le PMI in crescita lo usano come metrica chiave di performance. L'AI impatta l'EBITDA sia riducendo i costi operativi (automazione) sia aumentando i margini (pricing ottimizzato, riduzione sprechi).",
    category: "Business & Strategia",
    relatedTerms: ["roi", "due-diligence-ai", "value-creation"],
  },
  {
    slug: "due-diligence-ai",
    term: "Due Diligence AI",
    definition:
      "La due diligence AI e il processo di valutazione della maturita tecnologica e AI di un'azienda target in operazioni di M&A o investimento. Include l'analisi dell'infrastruttura dati, dei sistemi AI in uso, della qualita dei dataset e del potenziale di automazione. I fondi di investimento la usano per valutare il potenziale di value creation post-acquisizione.",
    category: "Business & Strategia",
    relatedTerms: ["ebitda", "ai-readiness", "maturity-model"],
  },
  {
    slug: "ai-readiness",
    term: "AI Readiness",
    definition:
      "L'AI readiness misura quanto un'organizzazione e pronta ad adottare l'AI con successo. Include la qualita e disponibilita dei dati, le competenze del team, l'infrastruttura tecnologica, la cultura aziendale e il supporto del management. Valutare l'AI readiness e il primo passo di qualsiasi percorso AI: permette di identificare gap e priorita prima di investire.",
    category: "Business & Strategia",
    relatedTerms: ["maturity-model", "roadmap-ai", "change-management"],
  },

  // ──────────────────────────────────────────────────────────────────────
  // STRUMENTI & PIATTAFORME (25)
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: "claude",
    term: "Claude",
    definition:
      "Claude e il modello AI sviluppato da Anthropic, progettato per essere utile, onesto e sicuro. Eccelle in analisi di documenti complessi, ragionamento, scrittura e programmazione. Con una context window fino a 200K token, puo analizzare interi report finanziari, contratti e manuali tecnici in una sola conversazione. E il modello preferito per applicazioni aziendali che richiedono affidabilita.",
    category: "Strumenti & Piattaforme",
    relatedTerms: ["anthropic", "llm", "context-window"],
  },
  {
    slug: "chatgpt",
    term: "ChatGPT",
    definition:
      "ChatGPT e l'applicazione AI di OpenAI basata sui modelli GPT che ha portato l'AI generativa al grande pubblico. Permette conversazioni in linguaggio naturale, generazione di contenuti, analisi dati e creazione di immagini. Per le PMI, e spesso il primo punto di contatto con l'AI: dal brainstorming alla stesura di email, dalla traduzione all'analisi di report.",
    category: "Strumenti & Piattaforme",
    relatedTerms: ["openai", "gpt", "copilot"],
  },
  {
    slug: "gemini",
    term: "Gemini",
    definition:
      "Gemini e la famiglia di modelli AI multimodali di Google, integrata in Google Workspace e disponibile tramite API. Eccelle nell'analisi di grandi volumi di dati e nell'integrazione con l'ecosistema Google. Per le aziende che usano Google Workspace, Gemini puo analizzare email, creare presentazioni, elaborare fogli di calcolo e rispondere a domande sui propri documenti.",
    category: "Strumenti & Piattaforme",
    relatedTerms: ["google-ai", "multimodale", "llm"],
  },
  {
    slug: "perplexity",
    term: "Perplexity",
    definition:
      "Perplexity e un motore di ricerca AI che risponde a domande in linguaggio naturale citando le fonti. A differenza dei motori di ricerca tradizionali che restituiscono link, Perplexity fornisce risposte strutturate con riferimenti verificabili. Per le aziende, e uno strumento eccellente per ricerche di mercato, analisi della concorrenza e aggiornamento su normative e trend di settore.",
    category: "Strumenti & Piattaforme",
    relatedTerms: ["chatgpt", "gemini", "question-answering"],
  },
  {
    slug: "copilot",
    term: "Copilot (Microsoft)",
    definition:
      "Microsoft Copilot e l'assistente AI integrato in Microsoft 365 (Word, Excel, PowerPoint, Outlook, Teams). Permette di generare documenti, analizzare dati in Excel con il linguaggio naturale, creare presentazioni da brief e riassumere riunioni Teams. Per le PMI che usano Microsoft 365, Copilot e il modo piu immediato per portare l'AI nel lavoro quotidiano di ogni dipendente.",
    category: "Strumenti & Piattaforme",
    relatedTerms: ["copilota-ai", "chatgpt", "gemini"],
  },
  {
    slug: "openai",
    term: "OpenAI",
    definition:
      "OpenAI e l'azienda che ha sviluppato ChatGPT, GPT-4, DALL-E e Whisper. E il principale provider di modelli AI via API, con milioni di sviluppatori e aziende che integrano i suoi modelli nei propri prodotti. Per le PMI, le API OpenAI offrono accesso a capacita AI avanzate con costi pay-per-use, senza necessita di infrastruttura AI proprietaria.",
    category: "Strumenti & Piattaforme",
    relatedTerms: ["chatgpt", "gpt", "dall-e"],
  },
  {
    slug: "anthropic",
    term: "Anthropic",
    definition:
      "Anthropic e l'azienda che ha sviluppato Claude, con un focus sulla sicurezza e l'affidabilita dell'AI. Fondata da ex-membri di OpenAI, si distingue per l'approccio 'AI responsabile' e per modelli che eccellono in compiti aziendali complessi come analisi documentale e ragionamento. Le API Anthropic sono scelte da aziende che priorizzano accuratezza e sicurezza.",
    category: "Strumenti & Piattaforme",
    relatedTerms: ["claude", "responsible-ai", "llm"],
  },
  {
    slug: "google-ai",
    term: "Google AI",
    definition:
      "Google AI e la divisione di Google dedicata alla ricerca e ai prodotti AI. Include Gemini (modelli linguistici), Vertex AI (piattaforma ML), Google Cloud AI (servizi API), e le integrazioni AI in Google Workspace. L'ecosistema Google AI e particolarmente attraente per le aziende gia integrate con Google Cloud e Workspace.",
    category: "Strumenti & Piattaforme",
    relatedTerms: ["gemini", "automl", "bert"],
  },
  {
    slug: "mistral",
    term: "Mistral",
    definition:
      "Mistral AI e un'azienda francese che sviluppa modelli linguistici open-weight ad alte prestazioni. I suoi modelli offrono un eccellente rapporto prestazioni/costo e possono essere eseguiti on-premise per garantire la privacy dei dati. Per le aziende europee attente alla sovranita dei dati, Mistral rappresenta un'alternativa europea ai modelli americani.",
    category: "Strumenti & Piattaforme",
    relatedTerms: ["llm", "llama", "claude"],
  },
  {
    slug: "llama",
    term: "LLaMA (Meta)",
    definition:
      "LLaMA e la famiglia di modelli linguistici open source di Meta (Facebook). Disponibile gratuitamente per uso commerciale, puo essere eseguito su server propri garantendo privacy totale dei dati. Per le PMI con competenze tecniche o partner IT, LLaMA permette di costruire soluzioni AI personalizzate senza dipendere da servizi cloud a pagamento.",
    category: "Strumenti & Piattaforme",
    relatedTerms: ["mistral", "llm", "fine-tuning"],
  },
  {
    slug: "n8n",
    term: "n8n",
    definition:
      "n8n e una piattaforma di automazione open source che permette di collegare centinaia di servizi e creare workflow automatizzati con un'interfaccia visuale. A differenza di Zapier e Make, n8n puo essere self-hosted (installato sui propri server), offrendo totale controllo sui dati. E lo strumento preferito per automazioni aziendali complesse che coinvolgono AI.",
    category: "Strumenti & Piattaforme",
    relatedTerms: ["zapier", "make", "workflow-automation"],
  },
  {
    slug: "zapier",
    term: "Zapier",
    definition:
      "Zapier e la piattaforma no-code piu popolare per automatizzare workflow tra applicazioni web. Collega oltre 6.000 app con logica 'se succede X, fai Y'. Per le PMI, Zapier permette di automatizzare rapidamente compiti come: sincronizzare contatti tra form e CRM, notificare il team su Slack quando arriva un ordine, generare report automatici.",
    category: "Strumenti & Piattaforme",
    relatedTerms: ["n8n", "make", "no-code"],
  },
  {
    slug: "make",
    term: "Make (ex Integromat)",
    definition:
      "Make e una piattaforma di automazione visuale che permette di costruire workflow complessi con un'interfaccia drag-and-drop intuitiva. Offre piu flessibilita di Zapier per scenari complessi come loop, condizioni multiple e gestione errori. Per le PMI che hanno bisogno di automazioni piu sofisticate senza scrivere codice, Make e un'ottima scelta.",
    category: "Strumenti & Piattaforme",
    relatedTerms: ["n8n", "zapier", "no-code"],
  },
  {
    slug: "langchain",
    term: "LangChain",
    definition:
      "LangChain e un framework open source per costruire applicazioni basate su LLM. Semplifica la creazione di catene di prompt, agenti AI, sistemi RAG e workflow complessi con i modelli linguistici. Per gli sviluppatori che costruiscono soluzioni AI per PMI, LangChain accelera lo sviluppo di chatbot aziendali, assistenti e automazioni basate su AI.",
    category: "Strumenti & Piattaforme",
    relatedTerms: ["llamaindex", "rag", "agente-ai"],
  },
  {
    slug: "llamaindex",
    term: "LlamaIndex",
    definition:
      "LlamaIndex e un framework open source specializzato nel collegare LLM con dati aziendali. Eccelle nella creazione di sistemi RAG che permettono all'AI di rispondere basandosi su documenti interni. Se LangChain e un framework generico, LlamaIndex e lo specialista per 'dare all'AI accesso ai tuoi dati'. Ideale per chatbot aziendali e knowledge management.",
    category: "Strumenti & Piattaforme",
    relatedTerms: ["langchain", "rag", "embedding"],
  },
  {
    slug: "pinecone",
    term: "Pinecone",
    definition:
      "Pinecone e un database vettoriale cloud-managed progettato per applicazioni AI su larga scala. Memorizza embedding e permette ricerche di similarita ultra-veloci. E lo standard de facto per sistemi RAG in produzione. Per le PMI, Pinecone gestisce la complessita dell'infrastruttura vettoriale, permettendo al team di concentrarsi sulla logica di business.",
    category: "Strumenti & Piattaforme",
    relatedTerms: ["weaviate", "embedding", "vettore"],
  },
  {
    slug: "weaviate",
    term: "Weaviate",
    definition:
      "Weaviate e un database vettoriale open source che puo essere self-hosted o usato in cloud. Supporta ricerca ibrida (vettoriale + keyword), multimodalita e integrazione nativa con i principali modelli AI. Per le aziende europee che preferiscono mantenere i dati on-premise per compliance GDPR, Weaviate offre flessibilita e controllo totale.",
    category: "Strumenti & Piattaforme",
    relatedTerms: ["pinecone", "embedding", "rag"],
  },
  {
    slug: "supabase",
    term: "Supabase",
    definition:
      "Supabase e una piattaforma open source alternativa a Firebase che fornisce database PostgreSQL, autenticazione, storage e funzioni serverless. Con l'estensione pgvector, supporta anche la ricerca vettoriale per applicazioni AI. Per le PMI e le startup, Supabase offre un backend completo con AI capabilities a costi contenuti e con la possibilita di self-hosting.",
    category: "Strumenti & Piattaforme",
    relatedTerms: ["vercel", "serverless", "vettore"],
  },
  {
    slug: "vercel",
    term: "Vercel",
    definition:
      "Vercel e la piattaforma di deployment per applicazioni web, creatrice di Next.js. Offre hosting, serverless functions, edge computing e strumenti AI-ready come AI SDK per integrare LLM nelle applicazioni web. Per le PMI che costruiscono siti web, portali clienti o applicazioni interne con AI, Vercel semplifica il deployment e la scalabilita.",
    category: "Strumenti & Piattaforme",
    relatedTerms: ["nextjs", "serverless", "react"],
  },
  {
    slug: "nextjs",
    term: "Next.js",
    definition:
      "Next.js e il framework React piu popolare per la creazione di siti web e applicazioni web moderne. Offre rendering server-side, generazione statica, API routes e ottimizzazione automatica per SEO e performance. Molti siti aziendali AI-powered (incluso questo) sono costruiti con Next.js per garantire velocita, SEO e integrazione AI.",
    category: "Strumenti & Piattaforme",
    relatedTerms: ["vercel", "react", "tailwind"],
  },
  {
    slug: "tailwind",
    term: "Tailwind CSS",
    definition:
      "Tailwind CSS e un framework CSS utility-first che permette di costruire interfacce web personalizzate rapidamente. Invece di scrivere CSS custom, si usano classi predefinite direttamente nell'HTML. E lo standard moderno per lo sviluppo frontend, adottato da aziende come Netflix, Shopify e NASA. Accelera lo sviluppo di interfacce per applicazioni AI aziendali.",
    category: "Strumenti & Piattaforme",
    relatedTerms: ["nextjs", "react", "vercel"],
  },
  {
    slug: "react",
    term: "React",
    definition:
      "React e la libreria JavaScript piu utilizzata al mondo per costruire interfacce utente. Sviluppata da Meta, permette di creare applicazioni web interattive e reattive. E alla base di molti strumenti AI con interfaccia web: dashboard, chatbot widget, portali clienti e applicazioni interne. La maggior parte delle interfacce AI moderne e costruita con React.",
    category: "Strumenti & Piattaforme",
    relatedTerms: ["nextjs", "tailwind", "nodejs"],
  },
  {
    slug: "nodejs",
    term: "Node.js",
    definition:
      "Node.js e l'ambiente runtime che permette di eseguire JavaScript lato server. E alla base di molti servizi web, API e automazioni. Per le applicazioni AI, Node.js e spesso usato per costruire API che collegano il frontend con i modelli AI, gestire webhook e orchestrare workflow. Insieme a TypeScript, offre un ecosistema maturo per applicazioni AI production-ready.",
    category: "Strumenti & Piattaforme",
    relatedTerms: ["nextjs", "api", "python"],
  },
  {
    slug: "python",
    term: "Python",
    definition:
      "Python e il linguaggio di programmazione dominante nell'AI e nel machine learning. Il suo ecosistema include librerie come TensorFlow, PyTorch, scikit-learn e pandas. Quasi tutti i modelli AI vengono sviluppati in Python. Per le PMI che vogliono costruire competenze AI interne, Python e il linguaggio da imparare. Anche i non-programmatori possono usarlo per automazioni semplici.",
    category: "Strumenti & Piattaforme",
    relatedTerms: ["machine-learning", "hugging-face", "nodejs"],
  },
  {
    slug: "hugging-face",
    term: "Hugging Face",
    definition:
      "Hugging Face e la piattaforma open source piu importante per modelli AI, con oltre 500.000 modelli disponibili gratuitamente. Offre hosting di modelli, dataset, spazi demo e strumenti per fine-tuning. Per le PMI con competenze tecniche, Hugging Face e un marketplace dove trovare modelli pre-addestrati per qualsiasi compito, dal text classification all'OCR.",
    category: "Strumenti & Piattaforme",
    relatedTerms: ["python", "llm", "fine-tuning"],
  },

  // ──────────────────────────────────────────────────────────────────────
  // SETTORE-SPECIFICI (30)
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: "erp",
    term: "ERP (Enterprise Resource Planning)",
    definition:
      "L'ERP e il sistema gestionale che integra i principali processi aziendali: produzione, magazzino, vendite, acquisti, contabilita. SAP, Oracle, Odoo e TeamSystem sono ERP diffusi nelle PMI italiane. L'AI si integra con l'ERP per automatizzare data entry, prevedere la domanda, ottimizzare il magazzino e generare report intelligenti.",
    category: "Settore-specifici",
    relatedTerms: ["crm", "mes", "digital-transformation"],
  },
  {
    slug: "crm",
    term: "CRM (Customer Relationship Management)",
    definition:
      "Il CRM e il sistema che gestisce le relazioni con i clienti: contatti, opportunita, pipeline di vendita, storico comunicazioni. Salesforce, HubSpot e Pipedrive sono CRM popolari. L'AI nel CRM automatizza il lead scoring (quali contatti sono piu promettenti), prevede la probabilita di chiusura e suggerisce le azioni di follow-up piu efficaci.",
    category: "Settore-specifici",
    relatedTerms: ["erp", "lead-scoring", "churn-prediction"],
  },
  {
    slug: "mes",
    term: "MES (Manufacturing Execution System)",
    definition:
      "Il MES e il sistema che gestisce e monitora la produzione in fabbrica in tempo reale: avanzamento ordini, stato macchinari, controllo qualita, tracciabilita. L'AI nel MES abilita la manutenzione predittiva, ottimizza la pianificazione della produzione e rileva automaticamente anomalie nei processi produttivi. E il cuore della smart factory.",
    category: "Settore-specifici",
    relatedTerms: ["erp", "scada", "smart-factory"],
  },
  {
    slug: "wms",
    term: "WMS (Warehouse Management System)",
    definition:
      "Il WMS e il sistema che gestisce le operazioni di magazzino: ricezione merce, stoccaggio, picking, spedizione e inventario. L'AI nel WMS ottimizza il posizionamento dei prodotti, calcola i percorsi di picking piu efficienti, prevede i livelli di stock ottimali e riduce gli errori di spedizione. Per le aziende con magazzini, l'AI nel WMS ha ROI immediato.",
    category: "Settore-specifici",
    relatedTerms: ["tms", "inventory-management", "supply-chain"],
  },
  {
    slug: "tms",
    term: "TMS (Transportation Management System)",
    definition:
      "Il TMS e il sistema che gestisce pianificazione, esecuzione e ottimizzazione dei trasporti. L'AI nel TMS ottimizza i percorsi di consegna in tempo reale considerando traffico, meteo e priorita. Riduce i costi di trasporto del 10-15%, migliora i tempi di consegna e diminuisce l'impatto ambientale. Essenziale per aziende di logistica e distribuzione.",
    category: "Settore-specifici",
    relatedTerms: ["wms", "supply-chain", "demand-forecasting"],
  },
  {
    slug: "plm",
    term: "PLM (Product Lifecycle Management)",
    definition:
      "Il PLM e il sistema che gestisce l'intero ciclo di vita di un prodotto: dalla progettazione alla produzione, dalla manutenzione al ritiro. L'AI nel PLM accelera il design (generative design), prevede problemi di qualita prima della produzione e ottimizza i costi di materiali. Per la manifattura italiana, l'AI nel PLM e un vantaggio competitivo nella qualita prodotto.",
    category: "Settore-specifici",
    relatedTerms: ["erp", "mes", "digital-twin"],
  },
  {
    slug: "bim",
    term: "BIM (Building Information Modeling)",
    definition:
      "Il BIM e il processo di creazione e gestione di modelli digitali di edifici e infrastrutture. L'AI nel BIM automatizza la rilevazione di conflitti nel progetto, stima i costi con maggiore accuratezza, ottimizza l'efficienza energetica e accelera la generazione di documentazione. Per le imprese edili italiane, il BIM con AI e un requisito crescente per i bandi pubblici.",
    category: "Settore-specifici",
    relatedTerms: ["digital-twin", "plm", "industry-4-0"],
  },
  {
    slug: "scada",
    term: "SCADA",
    definition:
      "SCADA (Supervisory Control and Data Acquisition) e il sistema che monitora e controlla impianti industriali: temperature, pressioni, livelli, velocita. L'AI applicata ai dati SCADA rileva anomalie prima che diventino guasti, ottimizza i parametri di processo e riduce i consumi energetici. E un pilastro della manutenzione predittiva nella manifattura.",
    category: "Settore-specifici",
    relatedTerms: ["iot", "manutenzione-predittiva", "mes"],
  },
  {
    slug: "iot",
    term: "IoT (Internet of Things)",
    definition:
      "L'IoT e la rete di dispositivi fisici (sensori, macchinari, veicoli) connessi a internet che raccolgono e trasmettono dati. L'AI analizza i dati IoT per manutenzione predittiva, ottimizzazione energetica e monitoraggio in tempo reale. Nelle fabbriche italiane, sensori IoT + AI trasformano macchinari tradizionali in sistemi intelligenti senza doverli sostituire.",
    category: "Settore-specifici",
    relatedTerms: ["scada", "edge-ai", "digital-twin"],
  },
  {
    slug: "digital-twin",
    term: "Digital Twin (Gemello Digitale)",
    definition:
      "Un digital twin e una replica virtuale di un oggetto fisico, processo o sistema che si aggiorna in tempo reale con dati reali. Per una fabbrica, il digital twin simula l'intera linea produttiva, permette di testare modifiche senza rischi e prevede l'impatto di decisioni. L'AI alimenta il digital twin con previsioni e ottimizzazioni automatiche.",
    category: "Settore-specifici",
    relatedTerms: ["iot", "smart-factory", "manutenzione-predittiva"],
  },
  {
    slug: "manutenzione-predittiva",
    term: "Manutenzione Predittiva",
    definition:
      "La manutenzione predittiva usa sensori IoT e algoritmi AI per prevedere quando un macchinario si guastera, permettendo di intervenire prima del fermo. Riduce i fermi macchina non pianificati del 30-50% e i costi di manutenzione del 20-25%. Per la manifattura italiana, e uno dei casi d'uso AI con ROI piu rapido e misurabile.",
    category: "Settore-specifici",
    relatedTerms: ["iot", "anomaly-detection", "scada"],
  },
  {
    slug: "demand-forecasting",
    term: "Demand Forecasting (Previsione Domanda)",
    definition:
      "Il demand forecasting usa algoritmi ML per prevedere la domanda futura di prodotti o servizi basandosi su dati storici, stagionalita, trend e fattori esterni. Permette di ottimizzare produzione, acquisti e scorte di magazzino. Per le PMI, previsioni accurate riducono sia gli sprechi (sovrapproduzione) sia le mancate vendite (stock-out).",
    category: "Settore-specifici",
    relatedTerms: ["predictive-analytics", "inventory-management", "supply-chain"],
  },
  {
    slug: "pricing-dinamico",
    term: "Pricing Dinamico",
    definition:
      "Il pricing dinamico usa algoritmi AI per adeguare i prezzi in tempo reale in base a domanda, concorrenza, stagionalita e altri fattori. Amazon cambia i prezzi milioni di volte al giorno. Per le PMI, il pricing dinamico puo essere applicato a e-commerce, revenue management alberghiero e listini B2B, massimizzando margini senza perdere competitivita.",
    category: "Settore-specifici",
    relatedTerms: ["revenue-management", "demand-forecasting", "reinforcement-learning"],
  },
  {
    slug: "revenue-management",
    term: "Revenue Management",
    definition:
      "Il revenue management e la disciplina che ottimizza i ricavi vendendo il prodotto giusto al cliente giusto al momento giusto al prezzo giusto. L'AI lo rende accessibile anche alle PMI: hotel, ristoranti, trasporti e servizi possono usare algoritmi per ottimizzare tariffe, occupancy e mix di clienti, massimizzando il ricavo per unita disponibile.",
    category: "Settore-specifici",
    relatedTerms: ["pricing-dinamico", "demand-forecasting", "predictive-analytics"],
  },
  {
    slug: "supply-chain",
    term: "Supply Chain (Catena di Fornitura)",
    definition:
      "La supply chain comprende tutti i processi dalla materia prima al prodotto finito nelle mani del cliente: approvvigionamento, produzione, logistica, distribuzione. L'AI ottimizza la supply chain prevedendo la domanda, identificando rischi nei fornitori, ottimizzando le rotte logistiche e riducendo le scorte di sicurezza. Per le PMI manifatturiere italiane, e un'area ad alto impatto.",
    category: "Settore-specifici",
    relatedTerms: ["demand-forecasting", "procurement", "wms"],
  },
  {
    slug: "procurement",
    term: "Procurement (Approvvigionamento)",
    definition:
      "Il procurement e il processo di acquisto di beni e servizi per l'azienda. L'AI automatizza la gestione delle richieste d'acquisto, il confronto preventivi, la valutazione fornitori e il monitoraggio delle consegne. Puo anche prevedere le necessita di acquisto basandosi sulla produzione pianificata e suggerire il momento ottimale per ordinare.",
    category: "Settore-specifici",
    relatedTerms: ["supply-chain", "erp", "workflow-automation"],
  },
  {
    slug: "fatturazione-elettronica",
    term: "Fatturazione Elettronica",
    definition:
      "La fatturazione elettronica e il processo digitale di emissione, invio e conservazione delle fatture in formato XML tramite il Sistema di Interscambio (SDI). L'AI automatizza la riconciliazione delle fatture con ordini e DDT, rileva anomalie e errori, e suggerisce la corretta registrazione contabile. Riduce i tempi di gestione amministrativa e gli errori di data entry.",
    category: "Settore-specifici",
    relatedTerms: ["document-parsing", "erp", "riconciliazione-bancaria"],
  },
  {
    slug: "riconciliazione-bancaria",
    term: "Riconciliazione Bancaria",
    definition:
      "La riconciliazione bancaria e il processo di confronto tra i movimenti bancari e le registrazioni contabili per identificare discrepanze. L'AI automatizza l'abbinamento dei movimenti con le fatture corrispondenti, anche quando i riferimenti sono incompleti o diversi. Riduce un compito che richiede ore a pochi minuti, con un'accuratezza superiore al 95%.",
    category: "Settore-specifici",
    relatedTerms: ["fatturazione-elettronica", "erp", "anomaly-detection"],
  },
  {
    slug: "customer-service-ai",
    term: "Customer Service AI",
    definition:
      "Il customer service AI usa chatbot, sistemi di routing intelligente e analisi automatica per gestire le richieste dei clienti. Puo rispondere alle domande frequenti 24/7, instradare i ticket al reparto giusto, suggerire risposte agli operatori e analizzare il sentiment delle conversazioni. Per le PMI, un chatbot AI puo gestire il 40-60% delle richieste senza intervento umano.",
    category: "Settore-specifici",
    relatedTerms: ["chatbot", "rag", "sentiment-analysis"],
  },
  {
    slug: "lead-scoring",
    term: "Lead Scoring",
    definition:
      "Il lead scoring e il processo di assegnare un punteggio ai potenziali clienti in base alla probabilita che diventino clienti effettivi. L'AI analizza comportamento sul sito, interazioni con email, dati demografici e firmografici per classificare i lead. Permette al team commerciale di concentrarsi sui contatti piu promettenti, aumentando il tasso di conversione.",
    category: "Settore-specifici",
    relatedTerms: ["crm", "predictive-analytics", "churn-prediction"],
  },
  {
    slug: "churn-prediction",
    term: "Churn Prediction (Previsione Abbandono)",
    definition:
      "La churn prediction usa algoritmi ML per identificare i clienti a rischio di abbandono prima che se ne vadano. Analizza pattern di utilizzo, frequenza di acquisto, ticket di supporto e altri segnali per generare un 'risk score'. Permette di attivare azioni di retention mirate (sconti, chiamate, offerte personalizzate) sui clienti giusti al momento giusto.",
    category: "Settore-specifici",
    relatedTerms: ["lead-scoring", "predictive-analytics", "crm"],
  },
  {
    slug: "inventory-management",
    term: "Inventory Management (Gestione Inventario)",
    definition:
      "La gestione dell'inventario con AI ottimizza automaticamente i livelli di stock, i punti di riordino e le quantita d'acquisto basandosi su previsioni di domanda, lead time dei fornitori e vincoli di spazio. Riduce sia l'overstock (capitale immobilizzato) sia gli stock-out (vendite perse). Per le PMI con magazzino, l'impatto sul cash flow e immediato.",
    category: "Settore-specifici",
    relatedTerms: ["wms", "demand-forecasting", "supply-chain"],
  },
  {
    slug: "quality-control",
    term: "Quality Control (Controllo Qualita)",
    definition:
      "Il quality control AI combina computer vision, analisi dati e anomaly detection per automatizzare e migliorare il controllo qualita. Telecamere AI ispezionano prodotti sulla linea, sensori rilevano anomalie nei processi e algoritmi prevedono difetti prima che si verifichino. Per la manifattura italiana, nota per la qualita, l'AI eleva ulteriormente gli standard riducendo i costi.",
    category: "Settore-specifici",
    relatedTerms: ["quality-inspection", "computer-vision", "anomaly-detection"],
  },
  {
    slug: "document-management",
    term: "Document Management (Gestione Documentale)",
    definition:
      "La gestione documentale AI va oltre l'archiviazione: classifica automaticamente i documenti in arrivo, estrae informazioni chiave, li collega ai processi di business e li rende ricercabili per contenuto semantico. Per le PMI italiane sommerse dalla carta, l'AI trasforma archivi caotici in una base di conoscenza strutturata e interrogabile in linguaggio naturale.",
    category: "Settore-specifici",
    relatedTerms: ["document-parsing", "ocr", "rag"],
  },
  {
    slug: "workflow-approval",
    term: "Workflow Approval (Flusso Approvativo)",
    definition:
      "I workflow approvativi AI gestiscono automaticamente i processi che richiedono approvazioni: ordini di acquisto, richieste ferie, note spese, modifiche contratti. L'AI puo pre-approvare richieste che rientrano nei parametri, segnalare anomalie per revisione umana e instradare le approvazioni alla persona giusta. Riduce i colli di bottiglia e accelera i processi decisionali.",
    category: "Settore-specifici",
    relatedTerms: ["workflow-automation", "rpa", "erp"],
  },
  {
    slug: "onboarding-digitale",
    term: "Onboarding Digitale",
    definition:
      "L'onboarding digitale AI automatizza l'inserimento di nuovi dipendenti o clienti. Per i dipendenti: generazione documenti, configurazione accessi, pianificazione formazione, assegnazione mentor. Per i clienti: verifica identita, firma contratti, attivazione servizi. L'AI personalizza il percorso e riduce il tempo di onboarding del 40-60%.",
    category: "Settore-specifici",
    relatedTerms: ["workflow-automation", "document-management", "rpa"],
  },
  {
    slug: "smart-factory",
    term: "Smart Factory (Fabbrica Intelligente)",
    definition:
      "La smart factory e un impianto produttivo in cui macchinari, sensori e sistemi comunicano tra loro e con l'AI per ottimizzare autonomamente produzione, qualita e manutenzione. E la realizzazione pratica di Industry 4.0. Per le PMI manifatturiere italiane, la smart factory non richiede di sostituire i macchinari: basta aggiungere sensori IoT e AI agli impianti esistenti.",
    category: "Settore-specifici",
    relatedTerms: ["industry-4-0", "iot", "digital-twin"],
  },
  {
    slug: "industry-4-0",
    term: "Industry 4.0",
    definition:
      "Industry 4.0 e la quarta rivoluzione industriale caratterizzata dalla digitalizzazione della manifattura: IoT, AI, cloud computing, robotica avanzata e analisi dati in tempo reale. L'Italia ha supportato questa transizione con incentivi fiscali significativi. Per le PMI manifatturiere, Industry 4.0 non e un concetto astratto: e un insieme di tecnologie con benefici concreti e incentivi disponibili.",
    category: "Settore-specifici",
    relatedTerms: ["transizione-5-0", "smart-factory", "iot"],
  },
  {
    slug: "transizione-5-0",
    term: "Transizione 5.0",
    definition:
      "La Transizione 5.0 e il programma italiano ed europeo che aggiunge alla digitalizzazione di Industry 4.0 gli obiettivi di sostenibilita ambientale e centralita della persona. Offre incentivi fiscali per investimenti in tecnologie che riducono i consumi energetici, inclusi sistemi AI per l'efficientamento. Per le PMI, rappresenta un'opportunita di finanziamento per progetti AI green.",
    category: "Settore-specifici",
    relatedTerms: ["industry-4-0", "sustainability-ai", "smart-factory"],
  },
  {
    slug: "sustainability-ai",
    term: "Sustainability AI (AI per la Sostenibilita)",
    definition:
      "La sustainability AI usa l'intelligenza artificiale per ridurre l'impatto ambientale delle attivita aziendali: ottimizzazione dei consumi energetici, riduzione degli sprechi di produzione, ottimizzazione dei trasporti, monitoraggio delle emissioni. Per le PMI italiane, l'AI per la sostenibilita e sia un obbligo crescente (ESG) sia un'opportunita di risparmio e accesso a incentivi Transizione 5.0.",
    category: "Settore-specifici",
    relatedTerms: ["transizione-5-0", "smart-factory", "digital-twin"],
  },
];
