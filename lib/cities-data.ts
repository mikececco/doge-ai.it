export type CityPage = {
  slug: string;
  name: string;
  region: string;
  regionSlug: string;
  description: string;
  industries: string[];
};

export const CITIES: CityPage[] = [
  {
    slug: "agrigento",
    name: "Agrigento",
    region: "Sicilia",
    regionSlug: "sicilia",
    description:
      "Agrigento è una provincia con una forte vocazione agricola e turistica, con il distretto della Valle dei Templi che attira visitatori da tutto il mondo. Le PMI locali operano principalmente nel settore agroalimentare e nell'ospitalità, con crescente interesse per la digitalizzazione dei processi produttivi e gestionali.",
    industries: ["Agroalimentare", "Turismo", "Agricoltura"],
  },
  {
    slug: "alessandria",
    name: "Alessandria",
    region: "Piemonte",
    regionSlug: "piemonte",
    description:
      "Alessandria è un importante polo industriale del Piemonte meridionale, con una consolidata tradizione nella produzione di cappelli, nel settore chimico e nelle lavorazioni meccaniche. La sua posizione strategica tra Milano, Torino e Genova la rende un hub logistico di rilievo per le aziende manifatturiere della regione.",
    industries: ["Manifattura", "Logistica", "Chimica"],
  },
  {
    slug: "ancona",
    name: "Ancona",
    region: "Marche",
    regionSlug: "marche",
    description:
      "Ancona è il capoluogo delle Marche e un porto adriatico di primaria importanza, punto di snodo per i traffici commerciali verso i Balcani e il Medio Oriente. L'economia locale è trainata dalla cantieristica navale, dall'industria manifatturiera e da un tessuto di PMI innovative nei settori del fashion e della meccanica.",
    industries: ["Cantieristica navale", "Manifattura", "Logistica portuale"],
  },
  {
    slug: "aosta",
    name: "Aosta",
    region: "Valle d'Aosta",
    regionSlug: "valle-d-aosta",
    description:
      "Aosta è il cuore della Valle d'Aosta, la regione alpina più piccola d'Italia, con un'economia fortemente orientata verso il turismo montano e le attività outdoor. Le imprese locali operano in contesti sfidanti dal punto di vista della stagionalità, con crescente attenzione alla digitalizzazione per ottimizzare la gestione delle strutture ricettive e dei servizi turistici.",
    industries: ["Turismo", "Agricoltura alpina", "Energia idroelettrica"],
  },
  {
    slug: "arezzo",
    name: "Arezzo",
    region: "Toscana",
    regionSlug: "toscana",
    description:
      "Arezzo è uno dei principali distretti orafi d'Europa, con una concentrazione di aziende specializzate nella lavorazione dell'oro e dei preziosi che esportano in tutto il mondo. Il tessuto economico locale è arricchito da un forte comparto moda e dal turismo culturale, con PMI che necessitano di soluzioni AI per ottimizzare produzione e supply chain.",
    industries: ["Oreficeria", "Moda", "Turismo culturale"],
  },
  {
    slug: "ascoli-piceno",
    name: "Ascoli Piceno",
    region: "Marche",
    regionSlug: "marche",
    description:
      "Ascoli Piceno è una città marchigiana con un'economia diversificata tra manifattura, agroindustria e turismo enogastronomico. Le PMI locali sono attive nella produzione di abbigliamento, calzature e prodotti agroalimentari di qualità, con opportunità significative per l'automazione dei processi produttivi e la gestione intelligente della supply chain.",
    industries: ["Abbigliamento", "Agroalimentare", "Turismo"],
  },
  {
    slug: "asti",
    name: "Asti",
    region: "Piemonte",
    regionSlug: "piemonte",
    description:
      "Asti è il cuore del Piemonte vitivinicolo, famosa per lo Spumante e il Moscato d'Asti che vengono esportati in tutto il mondo. Il distretto enologico locale conta centinaia di cantine e aziende agricole che stanno adottando tecnologie digitali per ottimizzare la produzione e aprire nuovi canali di vendita internazionali.",
    industries: ["Vitivinicolo", "Agroalimentare", "Turismo enogastronomico"],
  },
  {
    slug: "avellino",
    name: "Avellino",
    region: "Campania",
    regionSlug: "campania",
    description:
      "Avellino è una provincia campana con un'economia basata sull'industria manifatturiera, sull'agroindustria e su un tessuto di piccole imprese nei settori della meccanica e dell'elettronica. La zona industriale di Nola-Barra e i distretti produttivi locali offrono opportunità concrete per l'integrazione di soluzioni AI nei processi aziendali.",
    industries: ["Manifattura", "Agroalimentare", "Meccanica"],
  },
  {
    slug: "bari",
    name: "Bari",
    region: "Puglia",
    regionSlug: "puglia",
    description:
      "Bari è il capoluogo della Puglia e il principale centro economico del Sud Italia adriatico, con un porto che gestisce traffici commerciali verso Grecia, Albania e Medio Oriente. La città ospita un vivace ecosistema di startup tecnologiche, un polo universitario di eccellenza e aziende nei settori agroalimentare, ICT e manifatturiero che stanno accelerando la digitalizzazione.",
    industries: ["ICT", "Agroalimentare", "Logistica portuale"],
  },
  {
    slug: "barletta",
    name: "Barletta",
    region: "Puglia",
    regionSlug: "puglia",
    description:
      "Barletta-Andria-Trani è una delle province più giovani d'Italia, con un'economia diversificata tra agroalimentare, industria calzaturiera e turismo costiero. Il distretto calzaturiero di Casarano-Barletta è tra i più importanti del Sud Italia, con aziende che stanno investendo nell'automazione e nella digitalizzazione dei processi produttivi.",
    industries: ["Calzaturiero", "Agroalimentare", "Turismo"],
  },
  {
    slug: "belluno",
    name: "Belluno",
    region: "Veneto",
    regionSlug: "veneto",
    description:
      "Belluno è la capitale dell'occhialeria italiana, con Luxottica e centinaia di aziende dell'indotto che producono montature e lenti per i principali brand mondiali. La concentrazione di competenze manifatturiere di alta precisione e il know-how tecnologico locale rendono Belluno un contesto ideale per l'adozione di AI nella gestione della produzione e del controllo qualità.",
    industries: ["Occhialeria", "Manifattura di precisione", "Turismo alpino"],
  },
  {
    slug: "benevento",
    name: "Benevento",
    region: "Campania",
    regionSlug: "campania",
    description:
      "Benevento è una provincia campana con un'economia prevalentemente agricola e agroalimentare, nota per la produzione di tabacco, cereali e prodotti tipici come il torrone. Il tessuto imprenditoriale locale include PMI manifatturiere e del settore alimentare con crescente interesse per la modernizzazione dei processi di gestione e produzione.",
    industries: ["Agroalimentare", "Manifattura", "Turismo culturale"],
  },
  {
    slug: "bergamo",
    name: "Bergamo",
    region: "Lombardia",
    regionSlug: "lombardia",
    description:
      "Bergamo è uno dei principali distretti manifatturieri d'Italia, con un'altissima concentrazione di PMI eccellenti nei settori della meccanica, dell'automazione industriale e del tessile. La provincia bergamasca vanta uno dei PIL pro capite più alti del Paese e un tessuto imprenditoriale dinamico che abbraccia con pragmatismo le opportunità offerte dall'intelligenza artificiale.",
    industries: ["Meccanica", "Automazione industriale", "Tessile"],
  },
  {
    slug: "biella",
    name: "Biella",
    region: "Piemonte",
    regionSlug: "piemonte",
    description:
      "Biella è la capitale mondiale della lana pregiata, con un distretto tessile che produce filati e tessuti di altissima qualità per i principali brand del lusso internazionale. Le aziende biellesi, molte a conduzione familiare, stanno investendo in digitalizzazione per ottimizzare i processi produttivi e rispondere alle crescenti richieste di tracciabilità e sostenibilità.",
    industries: ["Tessile di lusso", "Lana pregiata", "Moda"],
  },
  {
    slug: "bologna",
    name: "Bologna",
    region: "Emilia-Romagna",
    regionSlug: "emilia-romagna",
    description:
      "Bologna è il cuore pulsante dell'Emilia-Romagna, con un ecosistema economico straordinariamente diversificato che unisce industria alimentare, logistica avanzata e uno dei più importanti poli universitari d'Italia. La Motor Valley e la Food Valley si incontrano qui, creando un tessuto di PMI innovative pronte ad abbracciare soluzioni AI per ottimizzare produzione, distribuzione e gestione aziendale.",
    industries: ["Logistica", "Agroalimentare", "Meccatronica"],
  },
  {
    slug: "bolzano",
    name: "Bolzano",
    region: "Alto Adige",
    regionSlug: "alto-adige",
    description:
      "Bolzano è il capoluogo dell'Alto Adige, una provincia autonoma con il PIL pro capite più alto d'Italia e un'economia fortemente orientata verso il turismo alpino, l'agroalimentare di eccellenza e le energie rinnovabili. Le aziende altoatesine sono note per la precisione gestionale e l'apertura all'innovazione tecnologica, con forti legami con il mercato tedesco e austriaco.",
    industries: ["Turismo alpino", "Agroalimentare", "Energie rinnovabili"],
  },
  {
    slug: "brescia",
    name: "Brescia",
    region: "Lombardia",
    regionSlug: "lombardia",
    description:
      "Brescia è uno dei principali poli industriali d'Italia, con una storica vocazione nella metallurgia, nella produzione di armi civili e nella meccanica di precisione. Il tessuto imprenditoriale bresciano conta migliaia di PMI nei settori siderurgico, della metalmeccanica e dell'automazione, con un forte orientamento all'export e crescente adozione di tecnologie digitali avanzate.",
    industries: ["Metallurgia", "Metalmeccanica", "Automazione"],
  },
  {
    slug: "brindisi",
    name: "Brindisi",
    region: "Puglia",
    regionSlug: "puglia",
    description:
      "Brindisi è un importante porto pugliese con un polo petrolchimico e un'economia che comprende agricoltura, turismo costiero e industria energetica. La città sta attraversando una fase di transizione industriale con investimenti nelle energie rinnovabili e nella logistica portuale, creando nuove opportunità per l'adozione di soluzioni digitali nelle PMI locali.",
    industries: ["Petrolchimico", "Energie rinnovabili", "Logistica portuale"],
  },
  {
    slug: "cagliari",
    name: "Cagliari",
    region: "Sardegna",
    regionSlug: "sardegna",
    description:
      "Cagliari è il capoluogo della Sardegna e il principale centro economico dell'isola, con un'economia basata su turismo, servizi, commercio e industria petrolchimica. La città ospita un crescente ecosistema di startup e PMI tecnologiche, favorite da incentivi regionali e dalla presenza dell'Università di Cagliari, che stanno digitalizzando settori tradizionali come turismo e agroalimentare.",
    industries: ["Turismo", "ICT", "Petrolchimico"],
  },
  {
    slug: "caltanissetta",
    name: "Caltanissetta",
    region: "Sicilia",
    regionSlug: "sicilia",
    description:
      "Caltanissetta è una provincia siciliana con un'economia prevalentemente agricola, nota per la produzione di grano duro e agrumi. Il tessuto produttivo locale è composto principalmente da piccole imprese agroalimentari e artigianali che stanno esplorando le opportunità offerte dalla digitalizzazione per migliorare l'accesso ai mercati e l'efficienza operativa.",
    industries: ["Agroalimentare", "Agricoltura", "Minerario"],
  },
  {
    slug: "campobasso",
    name: "Campobasso",
    region: "Molise",
    regionSlug: "molise",
    description:
      "Campobasso è il capoluogo del Molise, una delle regioni più piccole d'Italia, con un'economia basata sull'agricoltura, sull'artigianato e su un comparto manifatturiero legato alla lavorazione dei metalli e dell'alimentare. Le PMI molisane stanno scoprendo il potenziale dell'AI per competere con realtà più grandi, ottimizzando i costi operativi e migliorando i processi di vendita.",
    industries: ["Agroalimentare", "Manifattura", "Artigianato"],
  },
  {
    slug: "caserta",
    name: "Caserta",
    region: "Campania",
    regionSlug: "campania",
    description:
      "Caserta è una provincia campana in forte sviluppo, con un tessuto produttivo che spazia dall'agroalimentare (mozzarella di bufala DOP) al settore aerospaziale e alla logistica. La vicinanza a Napoli e la disponibilità di spazi industriali hanno attirato investimenti nei settori manifatturiero e della distribuzione, creando un ecosistema imprenditoriale dinamico.",
    industries: ["Agroalimentare", "Aerospazio", "Logistica"],
  },
  {
    slug: "catania",
    name: "Catania",
    region: "Sicilia",
    regionSlug: "sicilia",
    description:
      "Catania è il principale polo tecnologico del Sud Italia, nota come la 'Silicon Valley della Sicilia' grazie alla concentrazione di aziende semiconduttori, ICT e startup innovative. Il polo etneo dell'alta tecnologia, con STMicroelectronics come punta di diamante, ha creato un ecosistema di competenze digitali che alimenta una crescente domanda di soluzioni AI avanzate.",
    industries: ["Semiconduttori", "ICT", "Startup tecnologiche"],
  },
  {
    slug: "catanzaro",
    name: "Catanzaro",
    region: "Calabria",
    regionSlug: "calabria",
    description:
      "Catanzaro è il capoluogo della Calabria, con un'economia basata prevalentemente sui servizi pubblici, sull'agricoltura e su un tessuto di PMI nei settori dell'alimentare e del turismo. La città sta investendo nella digitalizzazione della pubblica amministrazione e nel supporto alle imprese locali per l'adozione di tecnologie innovative.",
    industries: ["Pubblica amministrazione", "Agroalimentare", "Turismo"],
  },
  {
    slug: "chieti",
    name: "Chieti",
    region: "Abruzzo",
    regionSlug: "abruzzo",
    description:
      "Chieti è una provincia abruzzese con un importante polo industriale nella val Pescara, che ospita aziende farmaceutiche, alimentari e manifatturiere. Il tessuto produttivo locale include imprese di medie dimensioni con forti legami con mercati esteri, che stanno adottando soluzioni AI per ottimizzare la produzione e la gestione della supply chain.",
    industries: ["Farmaceutico", "Agroalimentare", "Manifattura"],
  },
  {
    slug: "como",
    name: "Como",
    region: "Lombardia",
    regionSlug: "lombardia",
    description:
      "Como è la capitale mondiale della seta e del tessuto di lusso, con un distretto serico che produce stoffe per i principali brand della moda internazionale da Chanel a Hermès. Le aziende comasche, spesso a conduzione familiare, stanno integrando AI per ottimizzare la gestione degli ordini, automatizzare il controllo qualità e digitalizzare le relazioni con clienti internazionali.",
    industries: ["Seta e tessuti di lusso", "Moda", "Turismo lacustre"],
  },
  {
    slug: "cosenza",
    name: "Cosenza",
    region: "Calabria",
    regionSlug: "calabria",
    description:
      "Cosenza è il principale centro calabrese per istruzione e servizi, con l'Università della Calabria che genera un ecosistema di competenze tecnologiche e un tessuto di PMI nei settori agroalimentare, costruzioni e servizi. La provincia sta vivendo una fase di rinnovamento con investimenti in digitalizzazione e turismo culturale.",
    industries: ["Agroalimentare", "Costruzioni", "Servizi universitari"],
  },
  {
    slug: "cremona",
    name: "Cremona",
    region: "Lombardia",
    regionSlug: "lombardia",
    description:
      "Cremona è famosa nel mondo per la liuteria (Stradivari, Guarneri) e per un'economia agricola avanzata, con la provincia tra le più produttive d'Italia nel settore zootecnico e lattiero-caseario. Le PMI cremonesi operano in settori che combinano tradizione artigianale e innovazione, con crescente interesse per soluzioni AI applicate all'agritech e alla gestione aziendale.",
    industries: ["Agroalimentare", "Zootecnia", "Artigianato artistico"],
  },
  {
    slug: "crotone",
    name: "Crotone",
    region: "Calabria",
    regionSlug: "calabria",
    description:
      "Crotone è una provincia calabrese con un'economia in transizione, che sta cercando di valorizzare le proprie risorse naturali attraverso il turismo balneare e le energie rinnovabili, dopo il declino dell'industria petrolchimica. Le PMI locali, principalmente nel settore turistico e agroalimentare, stanno esplorando le possibilità offerte dalla digitalizzazione per aumentare la competitività.",
    industries: ["Turismo balneare", "Energie rinnovabili", "Agroalimentare"],
  },
  {
    slug: "cuneo",
    name: "Cuneo",
    region: "Piemonte",
    regionSlug: "piemonte",
    description:
      "Cuneo è il cuore del Piemonte agricolo e industriale, con un'economia fortemente diversificata tra agroalimentare di eccellenza, meccanica e un vivace comparto di PMI esportatrici. La Granda, come viene chiamata affettuosamente, è una delle province italiane con il più alto numero di imprese pro capite e un forte orientamento all'innovazione nei settori vitivinicolo e caseario.",
    industries: ["Agroalimentare", "Meccanica", "Vitivinicolo"],
  },
  {
    slug: "enna",
    name: "Enna",
    region: "Sicilia",
    regionSlug: "sicilia",
    description:
      "Enna è il capoluogo dell'entroterra siciliano, con un'economia prevalentemente agricola e turistica. La provincia, nota per i suoi paesaggi e i siti archeologici, sta puntando su un turismo di qualità e sulla valorizzazione dei prodotti agroalimentari tipici, con opportunità per l'adozione di strumenti digitali nella promozione e gestione delle attività.",
    industries: ["Agricoltura", "Turismo culturale", "Agroalimentare"],
  },
  {
    slug: "fermo",
    name: "Fermo",
    region: "Marche",
    regionSlug: "marche",
    description:
      "Fermo è il cuore del distretto calzaturiero marchigiano, una delle aree produttive più importanti d'Italia e d'Europa per la produzione di scarpe di qualità medio-alta. Le aziende fermane esportano in tutto il mondo e stanno investendo in digitalizzazione per ottimizzare la gestione degli ordini, la supply chain e i processi di design.",
    industries: ["Calzaturiero", "Moda", "Manifattura"],
  },
  {
    slug: "ferrara",
    name: "Ferrara",
    region: "Emilia-Romagna",
    regionSlug: "emilia-romagna",
    description:
      "Ferrara è una città emiliana con una forte vocazione agricola e un polo chimico di rilievo nazionale, oltre a un patrimonio culturale UNESCO che alimenta il turismo. L'economia locale è caratterizzata da imprese nei settori chimico-farmaceutico, agroalimentare e logistico, con crescente interesse per l'ottimizzazione dei processi attraverso l'intelligenza artificiale.",
    industries: ["Chimico-farmaceutico", "Agroalimentare", "Logistica"],
  },
  {
    slug: "firenze",
    name: "Firenze",
    region: "Toscana",
    regionSlug: "toscana",
    description:
      "Firenze è il cuore del made in Italy nel settore moda e lusso, con distretterie artigianali di pelletteria, gioielleria e abbigliamento che riforniscono i principali brand mondiali. La città è anche un polo turistico di livello mondiale e un hub per startup creative e tecnologiche, con PMI che cercano soluzioni AI per gestire la crescita internazionale e ottimizzare i processi produttivi artigianali.",
    industries: ["Moda e lusso", "Turismo culturale", "Artigianato"],
  },
  {
    slug: "foggia",
    name: "Foggia",
    region: "Puglia",
    regionSlug: "puglia",
    description:
      "Foggia è il granaio d'Italia, con la piana del Tavoliere che è tra le aree agricole più produttive del Paese per grano duro, pomodoro e altri cereali. L'economia locale è fortemente orientata all'agribusiness, con crescente interesse per le tecnologie agritech e le soluzioni di precision farming che possono ottimizzare le rese e ridurre i costi.",
    industries: ["Agricoltura", "Agroalimentare", "Agritech"],
  },
  {
    slug: "forli",
    name: "Forlì",
    region: "Emilia-Romagna",
    regionSlug: "emilia-romagna",
    description:
      "Forlì-Cesena è una provincia emiliana con un'economia eccellente nel settore aeronautico, con Leonardo e numerose aziende dell'indotto, e un importante comparto manifatturiero e agroalimentare. La Romagna imprenditoriale si distingue per la qualità delle PMI esportatrici, che stanno integrando AI per migliorare i processi di produzione e la competitività sui mercati internazionali.",
    industries: ["Aeronautica", "Manifattura", "Agroalimentare"],
  },
  {
    slug: "frosinone",
    name: "Frosinone",
    region: "Lazio",
    regionSlug: "lazio",
    description:
      "Frosinone ospita uno dei principali poli industriali del Lazio, con grandi stabilimenti automobilistici (Stellantis/ex Fiat), farmaceutici e chimici che impiegano migliaia di lavoratori. Il tessuto produttivo locale, fortemente integrato con la filiera automotive nazionale, sta vivendo una fase di transizione verso l'elettrico e cerca soluzioni AI per adattarsi ai nuovi paradigmi produttivi.",
    industries: ["Automotive", "Farmaceutico", "Chimica"],
  },
  {
    slug: "genova",
    name: "Genova",
    region: "Liguria",
    regionSlug: "liguria",
    description:
      "Genova è il principale porto commerciale italiano e uno dei più grandi del Mediterraneo, con un'economia che combina logistica avanzata, industria navale, tecnologia e servizi finanziari. La città ospita importanti realtà come Leonardo, Fincantieri e Iren, oltre a un vivace ecosistema di startup tecnologiche e PMI innovative che cercano soluzioni AI per ottimizzare operazioni portuali e processi industriali.",
    industries: ["Logistica portuale", "Navalmeccanica", "ICT"],
  },
  {
    slug: "gorizia",
    name: "Gorizia",
    region: "Friuli-Venezia Giulia",
    regionSlug: "friuli-venezia-giulia",
    description:
      "Gorizia è una città di confine italo-slovena, con un'economia caratterizzata da manifattura, commercio transfrontaliero e un crescente settore dei servizi. La sua posizione geografica la rende un punto di incontro tra mercati europei, con opportunità per le PMI locali di espandere la propria presenza internazionale sfruttando soluzioni digitali avanzate.",
    industries: ["Manifattura", "Commercio", "Turismo culturale"],
  },
  {
    slug: "grosseto",
    name: "Grosseto",
    region: "Toscana",
    regionSlug: "toscana",
    description:
      "Grosseto è il capoluogo della Maremma toscana, con un'economia basata su agricoltura di qualità, turismo naturalistico e produzione vitivinicola. La Maremma sta emergendo come destinazione agrituristica premium e polo di eccellenza per vini come il Morellino di Scansano, con PMI che cercano strumenti digitali per valorizzare i propri prodotti sui mercati nazionali e internazionali.",
    industries: ["Vitivinicolo", "Turismo", "Agricoltura"],
  },
  {
    slug: "imperia",
    name: "Imperia",
    region: "Liguria",
    regionSlug: "liguria",
    description:
      "Imperia è il cuore della Riviera dei Fiori, con un'economia fortemente orientata alla floricoltura, all'olivicoltura (olio extravergine DOP) e al turismo costiero. Le PMI locali operano principalmente nel settore agricolo-florovivaistico e nell'ospitalità, con opportunità per l'adozione di soluzioni AI nella gestione delle prenotazioni e nell'ottimizzazione della supply chain agricola.",
    industries: ["Floricoltura", "Olivicoltura", "Turismo costiero"],
  },
  {
    slug: "isernia",
    name: "Isernia",
    region: "Molise",
    regionSlug: "molise",
    description:
      "Isernia è una piccola provincia molisana con un'economia prevalentemente basata su agricoltura, allevamento e un comparto industriale legato alla lavorazione alimentare. Il territorio, poco urbanizzato ma ricco di risorse naturali e culturali, sta cercando di attrarre investimenti attraverso incentivi per le imprese e la digitalizzazione dei servizi locali.",
    industries: ["Agroalimentare", "Allevamento", "Artigianato"],
  },
  {
    slug: "la-spezia",
    name: "La Spezia",
    region: "Liguria",
    regionSlug: "liguria",
    description:
      "La Spezia è un porto militare e commerciale di rilievo, porta d'accesso alle Cinque Terre e a tutto il golfo dei Poeti. L'economia locale combina logistica portuale, industria della difesa, turismo e cantieristica navale da diporto, con PMI che cercano soluzioni digitali per ottimizzare i flussi turistici e i processi industriali.",
    industries: ["Logistica portuale", "Cantieristica", "Turismo"],
  },
  {
    slug: "l-aquila",
    name: "L'Aquila",
    region: "Abruzzo",
    regionSlug: "abruzzo",
    description:
      "L'Aquila è il capoluogo abruzzese, ancora in fase di ricostruzione dopo il terremoto del 2009, con un'economia che punta su tecnologia, ricerca scientifica e un comparto manifatturiero in ripresa. La presenza del Gran Sasso Science Institute e di importanti istituti di ricerca ha creato un ecosistema di innovazione con crescente domanda di soluzioni AI avanzate.",
    industries: ["Ricerca scientifica", "Manifattura", "Costruzioni"],
  },
  {
    slug: "latina",
    name: "Latina",
    region: "Lazio",
    regionSlug: "lazio",
    description:
      "Latina è il cuore dell'Agro Pontino, una delle aree agricole più produttive d'Italia, con un importante comparto chimico-farmaceutico e una crescente presenza di aziende manifatturiere. La provincia è uno dei principali poli italiani per la produzione di farmaci e biologici, con PMI dell'indotto che stanno adottando soluzioni digitali per rimanere competitive.",
    industries: ["Farmaceutico", "Agricoltura", "Manifattura"],
  },
  {
    slug: "lecce",
    name: "Lecce",
    region: "Puglia",
    regionSlug: "puglia",
    description:
      "Lecce è la capitale del Salento e uno dei principali hub turistici del Sud Italia, con un'economia che si basa su turismo di qualità, agroalimentare (olio extravergine, vini del Salento) e un crescente settore creativo e tecnologico. La 'Firenze del Sud' sta attraendo digital nomad e startup, creando opportunità per l'adozione di AI nei servizi turistici e nelle PMI locali.",
    industries: ["Turismo", "Agroalimentare", "Economia creativa"],
  },
  {
    slug: "lecco",
    name: "Lecco",
    region: "Lombardia",
    regionSlug: "lombardia",
    description:
      "Lecco è un importante polo manifatturiero lombardo, famoso per la lavorazione dei metalli, la produzione di componenti meccanici di precisione e un'industria chimica consolidata. Le PMI lecchesi sono altamente specializzate e orientate all'export, con una forte cultura dell'innovazione e crescente adozione di tecnologie di automazione e AI nei processi produttivi.",
    industries: ["Metalmeccanica", "Chimica", "Manifattura di precisione"],
  },
  {
    slug: "livorno",
    name: "Livorno",
    region: "Toscana",
    regionSlug: "toscana",
    description:
      "Livorno è uno dei principali porti commerciali del Tirreno, punto di transito per milioni di tonnellate di merci ogni anno e hub per le rotte mediterranee. L'economia locale combina logistica portuale, industria petrolchimica, cantieristica e commercio, con PMI che cercano soluzioni AI per ottimizzare le operazioni di magazzino e la gestione della supply chain.",
    industries: ["Logistica portuale", "Petrolchimico", "Commercio"],
  },
  {
    slug: "lodi",
    name: "Lodi",
    region: "Lombardia",
    regionSlug: "lombardia",
    description:
      "Lodi è una provincia lombarda con una forte tradizione nel settore zootecnico e lattiero-caseario, con la produzione di Grana Padano e altri formaggi DOP di eccellenza. Il tessuto imprenditoriale locale include anche aziende manifatturiere e del comparto energetico, con crescente interesse per soluzioni AI applicate all'agritech e alla gestione della filiera alimentare.",
    industries: ["Lattiero-caseario", "Zootecnia", "Manifattura"],
  },
  {
    slug: "lucca",
    name: "Lucca",
    region: "Toscana",
    regionSlug: "toscana",
    description:
      "Lucca è una città toscana con un'economia diversificata che comprende un importante distretto cartario, la produzione di olio extravergine, il turismo culturale e un crescente settore IT. Il distretto cartario di Capannori è uno dei più importanti d'Europa, con PMI che stanno adottando automazione e AI per migliorare l'efficienza produttiva e la sostenibilità ambientale.",
    industries: ["Industria cartaria", "Agroalimentare", "Turismo"],
  },
  {
    slug: "macerata",
    name: "Macerata",
    region: "Marche",
    regionSlug: "marche",
    description:
      "Macerata è una provincia marchigiana con un tessuto produttivo diversificato tra calzaturiero, manifattura e agroalimentare. La zona di Civitanova Marche è uno dei poli calzaturieri più importanti d'Italia, con aziende che producono per i principali brand del lusso e del mass market, e che stanno investendo in digitalizzazione per ottimizzare la supply chain globale.",
    industries: ["Calzaturiero", "Manifattura", "Agroalimentare"],
  },
  {
    slug: "mantova",
    name: "Mantova",
    region: "Lombardia",
    regionSlug: "lombardia",
    description:
      "Mantova è una città d'arte lombarda con un'economia industriale solida, dominata da petrolchimico, manifattura e un'eccellente produzione agroalimentare (Grana Padano, Lambrusco, tortelli di zucca). La vicinanza con il Veneto e l'Emilia-Romagna ha favorito lo sviluppo di PMI esportatrici nei settori chimico, meccanico e alimentare.",
    industries: ["Petrolchimico", "Manifattura", "Agroalimentare"],
  },
  {
    slug: "massa",
    name: "Massa",
    region: "Toscana",
    regionSlug: "toscana",
    description:
      "Massa-Carrara è famosa in tutto il mondo per il marmo di Carrara, utilizzato dai più grandi artisti e architetti della storia e oggi apprezzato nell'edilizia di lusso globale. L'economia locale ruota attorno all'industria lapidea, alle cave e alla lavorazione del marmo, con PMI che cercano soluzioni AI per ottimizzare le operazioni di cava e la gestione degli ordini internazionali.",
    industries: ["Industria lapidea", "Marmo", "Manifattura"],
  },
  {
    slug: "matera",
    name: "Matera",
    region: "Basilicata",
    regionSlug: "basilicata",
    description:
      "Matera, Capitale Europea della Cultura nel 2019, è una città in forte sviluppo turistico grazie ai suoi Sassi patrimonio UNESCO, con un'economia che sta diversificando verso servizi creativi, cinema e turismo culturale di alta gamma. Le PMI locali stanno sfruttando la visibilità internazionale per digitalizzare i propri servizi e attrarre nuovi segmenti di clientela.",
    industries: ["Turismo culturale", "Cinema e produzione", "Agroalimentare"],
  },
  {
    slug: "messina",
    name: "Messina",
    region: "Sicilia",
    regionSlug: "sicilia",
    description:
      "Messina è il principale porto di collegamento tra la Sicilia e il continente, con un'economia basata su servizi portuali, commercio, turismo e un comparto industriale in trasformazione. La città universitaria sta sviluppando un ecosistema di startup e PMI innovative nei settori ICT e servizi digitali, sfruttando la connettività strategica dello Stretto.",
    industries: ["Logistica portuale", "Turismo", "Servizi"],
  },
  {
    slug: "milano",
    name: "Milano",
    region: "Lombardia",
    regionSlug: "lombardia",
    description:
      "Milano è il motore economico d'Italia e uno dei principali hub finanziari, della moda e dell'innovazione tecnologica in Europa. La città ospita le sedi di centinaia di multinazionali, il distretto della moda più importante del mondo e un vivacissimo ecosistema di startup e scale-up, con una domanda costante di soluzioni AI per trasformare finanza, retail, logistica e servizi professionali.",
    industries: ["Finanza", "Moda e lusso", "Tecnologia"],
  },
  {
    slug: "modena",
    name: "Modena",
    region: "Emilia-Romagna",
    regionSlug: "emilia-romagna",
    description:
      "Modena è il cuore della Motor Valley italiana, con Ferrari, Maserati, Lamborghini e centinaia di aziende dell'indotto che producono supercar e componentistica per l'automotive di lusso. La città è anche famosa per l'aceto balsamico tradizionale e il Parmigiano Reggiano, con un tessuto di PMI di eccellenza che stanno integrando AI per ottimizzare produzione e internazionalizzazione.",
    industries: ["Automotive di lusso", "Agroalimentare", "Meccanica di precisione"],
  },
  {
    slug: "monza",
    name: "Monza",
    region: "Lombardia",
    regionSlug: "lombardia",
    description:
      "Monza e Brianza è uno dei territori con la più alta densità imprenditoriale d'Italia, con un distretto del mobile e dell'arredo di fama internazionale e migliaia di PMI nei settori manifatturiero, tessile e dei servizi. La vicinanza a Milano e la tradizione industriale della Brianza creano un contesto ideale per l'adozione di soluzioni AI nella gestione aziendale e nei processi produttivi.",
    industries: ["Arredo e design", "Manifattura", "Tessile"],
  },
  {
    slug: "napoli",
    name: "Napoli",
    region: "Campania",
    regionSlug: "campania",
    description:
      "Napoli è il capoluogo del Sud Italia per eccellenza, con un'economia che combina industria aerospaziale (Avio, Leonardo), turismo di massa, agroalimentare d'eccellenza (pizza, pomodoro San Marzano) e un vibrante settore creativo. La città sta vivendo una rinascita digitale con la crescita di un ecosistema tech e startup, aumentando la domanda di soluzioni AI per settori tradizionali e innovativi.",
    industries: ["Aerospazio", "Turismo", "Agroalimentare"],
  },
  {
    slug: "novara",
    name: "Novara",
    region: "Piemonte",
    regionSlug: "piemonte",
    description:
      "Novara è una città piemontese con un'economia fortemente industrializzata nei settori chimico, farmaceutico e manifatturiero, oltre a una significativa produzione risicola nelle risaie della pianura. La vicinanza con Milano e Torino la rende una piazza attrattiva per le PMI della logistica e dell'industria, con crescente adozione di tecnologie digitali.",
    industries: ["Chimico-farmaceutico", "Risicultura", "Logistica"],
  },
  {
    slug: "nuoro",
    name: "Nuoro",
    region: "Sardegna",
    regionSlug: "sardegna",
    description:
      "Nuoro è il cuore della Barbagia sarda, con un'economia basata sull'allevamento ovino, la produzione di formaggi DOP (Pecorino Romano, Fiore Sardo) e un turismo di qualità legato alle tradizioni culturali. Le PMI locali stanno esplorando la digitalizzazione per valorizzare i prodotti tipici sui mercati internazionali e ottimizzare la gestione degli allevamenti.",
    industries: ["Allevamento", "Lattiero-caseario", "Turismo culturale"],
  },
  {
    slug: "oristano",
    name: "Oristano",
    region: "Sardegna",
    regionSlug: "sardegna",
    description:
      "Oristano è una provincia sarda con un'economia prevalentemente agricola e ittica, con la laguna di Cabras che produce la famosa bottarga di muggine e altri prodotti ittici di pregio. Il turismo balneare e culturale rappresenta un'altra risorsa chiave, con PMI che cercano strumenti digitali per migliorare la visibilità e la gestione delle proprie attività.",
    industries: ["Pesca", "Agroalimentare", "Turismo"],
  },
  {
    slug: "padova",
    name: "Padova",
    region: "Veneto",
    regionSlug: "veneto",
    description:
      "Padova è uno dei principali centri universitari e di ricerca d'Italia, con una forte vocazione nell'high-tech, nella meccanica e nella chimica grazie al distretto industriale della zona est. La città ospita alcune delle PMI più innovative del Veneto nei settori dell'automazione, dell'elettronica e dei servizi digitali, con un ecosistema che combina eccellenza accademica e manifattura avanzata.",
    industries: ["Alta tecnologia", "Meccanica", "Ricerca e sviluppo"],
  },
  {
    slug: "palermo",
    name: "Palermo",
    region: "Sicilia",
    regionSlug: "sicilia",
    description:
      "Palermo è il capoluogo della Sicilia e un importante centro culturale, commerciale e turistico del Mediterraneo. L'economia palermitana sta diversificando verso ICT, turismo di qualità e agroalimentare, con una crescente comunità di startup e PMI innovative che sfruttano incentivi regionali e la visibilità della città per sviluppare soluzioni digitali per il mercato locale e nazionale.",
    industries: ["Turismo", "ICT", "Agroalimentare"],
  },
  {
    slug: "parma",
    name: "Parma",
    region: "Emilia-Romagna",
    regionSlug: "emilia-romagna",
    description:
      "Parma è la capitale europea dell'alimentare, sede dell'EFSA e del distretto del Parmigiano Reggiano e Prosciutto di Parma, con un'industria agroalimentare tra le più avanzate al mondo. La città ospita anche importanti aziende farmaceutiche e informatiche, con PMI che cercano soluzioni AI per ottimizzare i processi di produzione alimentare, la tracciabilità e la distribuzione internazionale.",
    industries: ["Agroalimentare di eccellenza", "Farmaceutico", "ICT"],
  },
  {
    slug: "pavia",
    name: "Pavia",
    region: "Lombardia",
    regionSlug: "lombardia",
    description:
      "Pavia è una città universitaria lombarda con una forte tradizione nella ricerca scientifica e biomedica, grazie all'Università degli Studi tra le più antiche d'Europa. L'economia locale combina manifattura, agricoltura nella pianura padana e un crescente polo farmaceutico-biotech, con PMI che sfruttano la vicinanza a Milano per accedere a capitali e mercati.",
    industries: ["Farmaceutico-biotech", "Ricerca scientifica", "Agricoltura"],
  },
  {
    slug: "perugia",
    name: "Perugia",
    region: "Umbria",
    regionSlug: "umbria",
    description:
      "Perugia è il cuore dell'Umbria, famosa per il cioccolato (Perugina/Nestlé), la ceramica di Deruta e un'economia che combina manifattura, agroalimentare e turismo culturale. La città universitaria ospita un ecosistema di PMI innovative nei settori dell'alimentare, dell'artigianato artistico e della tecnologia, con crescente adozione di AI per ottimizzare produzione e marketing.",
    industries: ["Alimentare", "Artigianato artistico", "Turismo"],
  },
  {
    slug: "pesaro",
    name: "Pesaro",
    region: "Marche",
    regionSlug: "marche",
    description:
      "Pesaro e Urbino è una provincia marchigiana con un distretto del mobile e dell'arredamento di fama internazionale, concentrato principalmente a Pesaro e dintorni. Le aziende del distretto producono per i mercati globali e stanno adottando soluzioni digitali per ottimizzare la personalizzazione dei prodotti, la gestione degli ordini e la supply chain internazionale.",
    industries: ["Arredamento", "Manifattura", "Turismo culturale"],
  },
  {
    slug: "pescara",
    name: "Pescara",
    region: "Abruzzo",
    regionSlug: "abruzzo",
    description:
      "Pescara è il principale centro economico dell'Abruzzo, con un'economia che combina commercio, servizi, turismo balneare e un comparto manifatturiero nelle zone industriali limitrofe. La città è anche un emergente polo tecnologico abruzzese, con PMI nei settori ICT, e-commerce e servizi digitali che stanno crescendo rapidamente.",
    industries: ["Commercio", "Turismo balneare", "ICT"],
  },
  {
    slug: "piacenza",
    name: "Piacenza",
    region: "Emilia-Romagna",
    regionSlug: "emilia-romagna",
    description:
      "Piacenza è uno dei principali hub logistici d'Italia grazie alla sua posizione strategica tra Milano, Torino, Bologna e il porto di Genova. La città ospita giganteschi magazzini e centri di distribuzione di aziende nazionali e internazionali, oltre a un solido comparto manifatturiero e agroalimentare che produce il Grana Padano e altri prodotti DOP di eccellenza.",
    industries: ["Logistica", "Agroalimentare", "Manifattura"],
  },
  {
    slug: "pisa",
    name: "Pisa",
    region: "Toscana",
    regionSlug: "toscana",
    description:
      "Pisa è uno dei principali centri di ricerca scientifica e tecnologica d'Italia, con la Scuola Normale Superiore, la Scuola Superiore Sant'Anna e l'Università che generano un ecosistema di eccellenza in AI, robotica e ICT. La città è anche un polo aeronautico con Piaggio Aerospace e un hub turistico internazionale, con PMI tech che sviluppano soluzioni innovative per il mercato globale.",
    industries: ["Ricerca scientifica e AI", "Aeronautica", "Turismo"],
  },
  {
    slug: "pistoia",
    name: "Pistoia",
    region: "Toscana",
    regionSlug: "toscana",
    description:
      "Pistoia è la capitale europea del florovivaismo, con un distretto che produce piante ornamentali esportate in tutto il mondo e rifornisce i principali garden center europei. L'economia locale combina floricoltura, manifattura e un comparto ferroviario significativo con Hitachi Rail, con PMI che cercano soluzioni digitali per ottimizzare la logistica e i processi di produzione vivaistica.",
    industries: ["Florovivaismo", "Ferroviario", "Manifattura"],
  },
  {
    slug: "pordenone",
    name: "Pordenone",
    region: "Friuli-Venezia Giulia",
    regionSlug: "friuli-venezia-giulia",
    description:
      "Pordenone è uno dei principali distretti industriali del Friuli, con una forte tradizione nella produzione di elettrodomestici (Zanussi/Electrolux), sedie e arredamento e componenti industriali. Le PMI pordenonesi sono altamente specializzate nell'esportazione e stanno adottando soluzioni AI per automatizzare i processi produttivi e ottimizzare la gestione delle operation.",
    industries: ["Elettrodomestici", "Arredamento", "Manifattura industriale"],
  },
  {
    slug: "potenza",
    name: "Potenza",
    region: "Basilicata",
    regionSlug: "basilicata",
    description:
      "Potenza è il capoluogo della Basilicata, una regione con un'economia in trasformazione grazie alle royalties petrolifere, al comparto automobilistico (Stellantis a Melfi) e a un crescente settore delle energie rinnovabili. Le risorse derivanti dall'estrazione petrolifera stanno finanziando investimenti nell'innovazione e nella digitalizzazione delle PMI locali.",
    industries: ["Petrolio ed energia", "Automotive", "Agroalimentare"],
  },
  {
    slug: "prato",
    name: "Prato",
    region: "Toscana",
    regionSlug: "toscana",
    description:
      "Prato è il principale distretto tessile d'Italia e uno dei più importanti d'Europa, con centinaia di aziende specializzate nella produzione di filati, tessuti e abbigliamento. Il distretto pratese è noto per la capacità di lavorare materiali rigenerati e per la velocità di risposta alle richieste del mercato, con PMI che stanno adottando AI per ottimizzare il design, la produzione e la gestione degli ordini.",
    industries: ["Tessile", "Moda", "Manifattura sostenibile"],
  },
  {
    slug: "ragusa",
    name: "Ragusa",
    region: "Sicilia",
    regionSlug: "sicilia",
    description:
      "Ragusa è il cuore dell'agricoltura in serra della Sicilia meridionale, con il distretto ibleo che produce pomodori, ortaggi e prodotti ortofrutticoli esportati in tutta Europa. L'economia locale si basa anche sulla zootecnia (Ragusano DOP), il turismo culturale delle città barocche patrimonio UNESCO e un crescente comparto del turismo enogastronomico.",
    industries: ["Orticoltura", "Zootecnia", "Turismo culturale"],
  },
  {
    slug: "ravenna",
    name: "Ravenna",
    region: "Emilia-Romagna",
    regionSlug: "emilia-romagna",
    description:
      "Ravenna è uno dei principali poli petroliferi e chimici d'Italia, con Eni e numerose aziende della chimica che hanno qui importanti stabilimenti, e il porto che gestisce traffici di rilievo nazionale. La città sta guidando la transizione energetica con massicci investimenti nell'eolico offshore e nelle rinnovabili, creando nuove opportunità per PMI del settore energia e tecnologia.",
    industries: ["Petrolchimico", "Energie rinnovabili", "Logistica portuale"],
  },
  {
    slug: "reggio-calabria",
    name: "Reggio Calabria",
    region: "Calabria",
    regionSlug: "calabria",
    description:
      "Reggio Calabria è il principale centro urbano della Calabria, nota per la produzione di bergamotto (usato nella profumeria di lusso e nel the Earl Grey) e per la sua posizione strategica affacciata sulla Sicilia. L'economia locale sta diversificando verso il turismo culturale e il commercio, con PMI che cercano soluzioni digitali per valorizzare i prodotti tipici calabresi sui mercati nazionali e internazionali.",
    industries: ["Bergamotto", "Turismo culturale", "Agroalimentare"],
  },
  {
    slug: "reggio-emilia",
    name: "Reggio Emilia",
    region: "Emilia-Romagna",
    regionSlug: "emilia-romagna",
    description:
      "Reggio Emilia è il cuore della produzione del Parmigiano Reggiano DOP e un importante polo manifatturiero con aziende di eccellenza nei settori delle macchine automatiche, della ceramica e dell'abbigliamento. Il territorio reggiano è noto per l'altissima qualità delle sue PMI esportatrici e per il modello cooperativo emiliano che favorisce l'innovazione condivisa.",
    industries: ["Parmigiano Reggiano", "Macchine automatiche", "Manifattura"],
  },
  {
    slug: "rieti",
    name: "Rieti",
    region: "Lazio",
    regionSlug: "lazio",
    description:
      "Rieti è una piccola provincia laziale con un'economia basata sull'agricoltura, sull'allevamento e su un comparto industriale legato alla lavorazione alimentare e alla chimica. Il territorio, a cavallo tra Lazio, Abruzzo e Umbria, sta sviluppando il turismo naturalistico e le energie rinnovabili come nuovi motori di crescita per le PMI locali.",
    industries: ["Agroalimentare", "Chimica", "Turismo naturalistico"],
  },
  {
    slug: "rimini",
    name: "Rimini",
    region: "Emilia-Romagna",
    regionSlug: "emilia-romagna",
    description:
      "Rimini è la capitale europea del turismo balneare e del business travel, con la Fiera di Rimini che ospita eventi internazionali come il Sigep e il TTG. L'economia riminese combina un'eccellente industria dell'ospitalità, il settore fieristico e un comparto manifatturiero di PMI innovative, con crescente adozione di AI nella gestione degli hotel e nell'organizzazione di eventi.",
    industries: ["Turismo e ospitalità", "Fieristico", "Manifattura"],
  },
  {
    slug: "roma",
    name: "Roma",
    region: "Lazio",
    regionSlug: "lazio",
    description:
      "Roma è la capitale d'Italia e il primo polo economico del Centro-Sud, con un'economia che combina pubblica amministrazione, turismo internazionale di massa, media e intrattenimento e un crescente settore tech. La città ospita le sedi di centinaia di aziende nazionali e internazionali, con una domanda crescente di soluzioni AI per ottimizzare i servizi pubblici, l'hospitality e i processi aziendali.",
    industries: ["Pubblica amministrazione", "Turismo", "Media e tecnologia"],
  },
  {
    slug: "rovigo",
    name: "Rovigo",
    region: "Veneto",
    regionSlug: "veneto",
    description:
      "Rovigo è una provincia veneta con un'economia prevalentemente agricola, nota per la produzione di barbabietola da zucchero, mais e soia nel Polesine. Il tessuto produttivo locale include anche aziende manifatturiere e del commercio, con PMI che stanno esplorando le opportunità offerte dalla digitalizzazione per modernizzare le pratiche agricole e ottimizzare la gestione aziendale.",
    industries: ["Agricoltura", "Manifattura", "Commercio"],
  },
  {
    slug: "salerno",
    name: "Salerno",
    region: "Campania",
    regionSlug: "campania",
    description:
      "Salerno è il secondo capoluogo della Campania, con un porto commerciale in forte sviluppo e un'economia diversificata tra logistica, turismo costiero (Costiera Amalfitana) e un tessuto di PMI nell'agroalimentare e nella manifattura. La città sta emergendo come alternativa attrattiva a Napoli per le imprese che cercano posizione strategica e costi competitivi.",
    industries: ["Logistica portuale", "Turismo", "Agroalimentare"],
  },
  {
    slug: "sassari",
    name: "Sassari",
    region: "Sardegna",
    regionSlug: "sardegna",
    description:
      "Sassari è il secondo capoluogo sardo e il principale centro del nord dell'isola, con un'economia che combina agricoltura, allevamento, turismo costiero e un polo universitario di rilievo. La città sta sviluppando un ecosistema di innovazione grazie all'Università degli Studi e a incentivi regionali per le startup, con PMI che cercano soluzioni digitali per crescere nel turismo e nell'agroalimentare.",
    industries: ["Turismo", "Agroalimentare", "Ricerca universitaria"],
  },
  {
    slug: "savona",
    name: "Savona",
    region: "Liguria",
    regionSlug: "liguria",
    description:
      "Savona è una provincia ligure con un porto commerciale attivo, un importante polo siderurgico e un'economia che sta diversificando verso il turismo costiero e le energie rinnovabili. Le PMI locali operano principalmente nei settori industriale, portuale e turistico, con crescente interesse per la digitalizzazione e l'ottimizzazione dei processi operativi.",
    industries: ["Siderurgia", "Logistica portuale", "Turismo"],
  },
  {
    slug: "siena",
    name: "Siena",
    region: "Toscana",
    regionSlug: "toscana",
    description:
      "Siena è una città toscana di straordinario valore storico-culturale, con un'economia basata sul turismo di lusso, sul vitivinicolo (Chianti Classico, Brunello di Montalcino) e su un settore bancario di lunga tradizione. Le PMI locali nel turismo e nell'agroalimentare stanno adottando soluzioni AI per personalizzare le esperienze dei visitatori e ottimizzare la distribuzione internazionale dei vini.",
    industries: ["Vitivinicolo", "Turismo di lusso", "Bancario"],
  },
  {
    slug: "siracusa",
    name: "Siracusa",
    region: "Sicilia",
    regionSlug: "sicilia",
    description:
      "Siracusa è una città siciliana con un patrimonio culturale UNESCO eccezionale e un importante polo petrolchimico nell'area di Augusta-Priolo. L'economia locale sta cercando di bilanciare lo sviluppo industriale con la valorizzazione del turismo culturale e dell'agroalimentare, con PMI che esplorano l'AI per diversificare le proprie attività.",
    industries: ["Petrolchimico", "Turismo culturale", "Agroalimentare"],
  },
  {
    slug: "sondrio",
    name: "Sondrio",
    region: "Lombardia",
    regionSlug: "lombardia",
    description:
      "Sondrio è il capoluogo della Valtellina, con un'economia basata sul turismo alpino, la viticoltura eroica (Valtellina Superiore DOCG, Sforzato) e un piccolo ma dinamico tessuto di PMI nella manifattura e nei servizi. Le aziende locali stanno adottando soluzioni digitali per aumentare la visibilità internazionale dei propri vini e ottimizzare la gestione delle strutture ricettive.",
    industries: ["Vitivinicolo", "Turismo alpino", "Energia idroelettrica"],
  },
  {
    slug: "carbonia",
    name: "Carbonia",
    region: "Sardegna",
    regionSlug: "sardegna",
    description:
      "Sud Sardegna è una provincia sarda nata dalla fusione di Carbonia-Iglesias e Medio Campidano, con un'economia in transizione che punta su turismo, agricoltura e energie rinnovabili dopo il declino minerario. Il territorio, ricco di risorse naturali e siti storici, sta investendo nella digitalizzazione per valorizzare le proprie specificità e attrarre nuovi investimenti.",
    industries: ["Turismo", "Energie rinnovabili", "Agricoltura"],
  },
  {
    slug: "taranto",
    name: "Taranto",
    region: "Puglia",
    regionSlug: "puglia",
    description:
      "Taranto è una città pugliese in profonda trasformazione industriale, con il dismissione dell'ex Ilva (ora Acciaierie d'Italia) che apre spazio a nuovi investimenti in energie rinnovabili, logistica e turismo del mare. La posizione strategica nel Golfo di Taranto e il porto di grande profondità rappresentano risorse chiave per il rilancio economico della città.",
    industries: ["Siderurgia", "Logistica portuale", "Energie rinnovabili"],
  },
  {
    slug: "teramo",
    name: "Teramo",
    region: "Abruzzo",
    regionSlug: "abruzzo",
    description:
      "Teramo è una provincia abruzzese con un tessuto produttivo diversificato tra agroalimentare, manifattura e turismo montano nel Gran Sasso. Le PMI teramane sono attive nei settori della meccanica, dell'alimentare e dell'abbigliamento, con crescente interesse per la digitalizzazione come leva di competitività sui mercati nazionali e internazionali.",
    industries: ["Agroalimentare", "Manifattura", "Turismo montano"],
  },
  {
    slug: "terni",
    name: "Terni",
    region: "Umbria",
    regionSlug: "umbria",
    description:
      "Terni è la capitale industriale dell'Umbria, con una forte tradizione siderurgica (Acciai Speciali Terni, ora Arvedi) e un tessuto di PMI manifatturiere nei settori della meccanica, della chimica e dei materiali avanzati. La città sta diversificando verso l'economia creativa e il turismo, sfruttando la cascata delle Marmore e il patrimonio naturale del territorio.",
    industries: ["Siderurgia", "Manifattura", "Chimica"],
  },
  {
    slug: "torino",
    name: "Torino",
    region: "Piemonte",
    regionSlug: "piemonte",
    description:
      "Torino è la capitale dell'automotive italiano e uno dei principali hub dell'aerospazio e della manifattura avanzata in Europa, con Stellantis, Leonardo e centinaia di aziende dell'indotto che costituiscono una catena del valore unica al mondo. La città si sta reinventando come polo tecnologico e creativo, con un ecosistema di startup e centri di ricerca sull'AI che la posizionano tra le città più innovative d'Italia.",
    industries: ["Automotive", "Aerospazio", "Manifattura avanzata"],
  },
  {
    slug: "trapani",
    name: "Trapani",
    region: "Sicilia",
    regionSlug: "sicilia",
    description:
      "Trapani è la capitale della vitivinicoltura siciliana, con il distretto del Marsala e i vini DOC trapanesi che si affermano sui mercati internazionali, oltre a una delle flotte pescherecce più importanti d'Italia per il tonno rosso. L'economia locale si basa anche sul turismo verso le isole Egadi e Pantelleria, con PMI che stanno digitalizzando la gestione delle attività turistiche e agroalimentari.",
    industries: ["Vitivinicolo", "Pesca", "Turismo costiero"],
  },
  {
    slug: "trento",
    name: "Trento",
    region: "Trentino-Alto Adige",
    regionSlug: "trentino-alto-adige",
    description:
      "Trento è il capoluogo del Trentino, una provincia autonoma con uno dei sistemi economici più avanzati d'Italia, caratterizzato da alta qualità della vita, eccellente sistema cooperativo e un polo universitario di ricerca d'avanguardia. L'economia trentina unisce turismo alpino, frutticoltura d'eccellenza (mela Val di Non IGP), enologia e un crescente settore tecnologico.",
    industries: ["Turismo alpino", "Frutticoltura", "Tecnologia e ricerca"],
  },
  {
    slug: "treviso",
    name: "Treviso",
    region: "Veneto",
    regionSlug: "veneto",
    description:
      "Treviso è uno dei motori economici del Nordest italiano, sede di Benetton, De'Longhi, Geox e molti altri brand internazionali che hanno trasformato una provincia agricola in un hub del made in Italy globale. Il prosecco DOCG di Conegliano Valdobbiadene contribuisce a rendere Treviso una delle province con il più alto benessere economico d'Italia.",
    industries: ["Moda e retail", "Prosecco e vitivinicolo", "Manifattura"],
  },
  {
    slug: "trieste",
    name: "Trieste",
    region: "Friuli-Venezia Giulia",
    regionSlug: "friuli-venezia-giulia",
    description:
      "Trieste è uno dei principali hub scientifici e di ricerca d'Europa, con la più alta concentrazione di ricercatori per abitante del continente grazie a ICTP, SISSA, Elettra Sincrotrone e decine di istituti internazionali. La città è anche un porto franco strategico per i traffici verso l'Europa centrale e orientale, con un ecosistema di startup tech e PMI innovative.",
    industries: ["Ricerca scientifica", "Logistica portuale", "ICT"],
  },
  {
    slug: "udine",
    name: "Udine",
    region: "Friuli-Venezia Giulia",
    regionSlug: "friuli-venezia-giulia",
    description:
      "Udine è il cuore economico del Friuli, con un'economia diversificata tra manifattura avanzata, agroalimentare d'eccellenza (prosciutto di San Daniele, vini friulani) e servizi. Le PMI udinesi sono altamente orientate all'export verso Germania, Austria e Balcani, con una cultura imprenditoriale pragmatica che abbraccia l'innovazione come strumento di crescita.",
    industries: ["Manifattura", "Agroalimentare", "Commercio con l'estero"],
  },
  {
    slug: "varese",
    name: "Varese",
    region: "Lombardia",
    regionSlug: "lombardia",
    description:
      "Varese è una delle province più industrializzate d'Italia, con un distretto aeronautico di eccellenza (Leonardo, AgustaWestland) e migliaia di PMI nei settori meccanico, chimico e dei beni di consumo. La vicinanza con la Svizzera e Malpensa la rende una piazza attrattiva per investimenti internazionali e un hub per PMI esportatrici con forti legami con i mercati europei.",
    industries: ["Aeronautica", "Meccanica", "Chimica"],
  },
  {
    slug: "venezia",
    name: "Venezia",
    region: "Veneto",
    regionSlug: "veneto",
    description:
      "Venezia è uno dei luoghi più visitati al mondo e il cuore del Veneto produttivo, con un'economia che combina turismo internazionale di massa, industria pesante a Marghera e un tessuto di PMI nei settori della moda, del vetro artistico di Murano e dell'agroalimentare. La città sta affrontando le sfide del sovraffollamento turistico con soluzioni digitali e tecnologiche innovative.",
    industries: ["Turismo", "Industria chimica", "Artigianato artistico"],
  },
  {
    slug: "verbania",
    name: "Verbania",
    region: "Piemonte",
    regionSlug: "piemonte",
    description:
      "Verbano-Cusio-Ossola è una provincia piemontese lacustre e alpina, con un'economia basata sul turismo dei laghi (Maggiore, Orta), sulla produzione industriale tradizionale e sull'artigianato. Le PMI locali operano principalmente nel settore dell'ospitalità e dei servizi, con opportunità per l'adozione di tecnologie digitali per ottimizzare la gestione delle strutture ricettive.",
    industries: ["Turismo lacustre", "Manifattura", "Artigianato"],
  },
  {
    slug: "vercelli",
    name: "Vercelli",
    region: "Piemonte",
    regionSlug: "piemonte",
    description:
      "Vercelli è la capitale della risicultura italiana, con le risaie della Pianura Padana che producono il Carnaroli e l'Arborio esportati in tutto il mondo. La provincia ha anche una tradizione tessile e manifatturiera, con PMI che stanno adottando tecnologie agritech per ottimizzare la coltivazione del riso e soluzioni digitali per la commercializzazione internazionale.",
    industries: ["Risicultura", "Tessile", "Agroalimentare"],
  },
  {
    slug: "verona",
    name: "Verona",
    region: "Veneto",
    regionSlug: "veneto",
    description:
      "Verona è uno dei principali hub commerciali del Nordest, sede del Vinitaly (la più grande fiera mondiale del vino) e di importanti distretti produttivi nel marmo, nel farmaceutico e nell'agroalimentare. La posizione baricentrica tra Milano, Bologna e Monaco di Baviera rende Verona un punto di transito strategico per le merci europee, con PMI altamente orientate all'export.",
    industries: ["Vitivinicolo", "Farmaceutico", "Logistica"],
  },
  {
    slug: "vibo-valentia",
    name: "Vibo Valentia",
    region: "Calabria",
    regionSlug: "calabria",
    description:
      "Vibo Valentia è una piccola provincia calabrese con un'economia prevalentemente agricola e legata al turismo costiero della Costa degli Dei. La produzione di cipolla di Tropea IGP è tra le eccellenze agroalimentari locali, con PMI che stanno cercando di valorizzare questi prodotti tipici sui mercati nazionali e internazionali attraverso la digitalizzazione.",
    industries: ["Agroalimentare", "Turismo costiero", "Agricoltura"],
  },
  {
    slug: "vicenza",
    name: "Vicenza",
    region: "Veneto",
    regionSlug: "veneto",
    description:
      "Vicenza è la capitale mondiale dell'oreficeria e del gioiello, con Vicenzaoro che è la fiera di riferimento internazionale per il settore, e un importante distretto della concia del cuoio a Arzignano. La provincia vicentina vanta anche un solido comparto meccanico e tessile, con PMI esportatrici che cercano soluzioni AI per ottimizzare produzione, design e gestione clienti internazionali.",
    industries: ["Oreficeria", "Concia del cuoio", "Meccanica"],
  },
  {
    slug: "viterbo",
    name: "Viterbo",
    region: "Lazio",
    regionSlug: "lazio",
    description:
      "Viterbo è una provincia laziale con un'economia basata sull'agricoltura, sul turismo termale e culturale e su un piccolo comparto industriale. La Tuscia viterbese è nota per la produzione di nocciole (Nocciola della Tuscia IGP), olio extravergine e vini DOC, con PMI agroalimentari che stanno adottando soluzioni digitali per ampliare la distribuzione e valorizzare i prodotti tipici.",
    industries: ["Agroalimentare", "Turismo termale", "Agricoltura"],
  },
];
