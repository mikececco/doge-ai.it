import { BlogPost, BLOG_POSTS } from "./blog-data";
import { CityPage, CITIES } from "./cities-data";
import { SoluzionePage, SOLUZIONI_PAGES } from "./soluzioni-data";

function normalize(s: string): string {
  return s.toLowerCase().trim();
}

function scoreOverlap(a: string[], b: string[]): number {
  const normB = b.map(normalize);
  return a.reduce((score, term) => {
    const normTerm = normalize(term);
    // Exact match
    if (normB.includes(normTerm)) return score + 2;
    // Partial match (e.g., "Automazione industriale" contains "Automazione")
    if (normB.some((x) => x.includes(normTerm) || normTerm.includes(x)))
      return score + 1;
    return score;
  }, 0);
}

// Keywords extracted from solution slugs/targetQueries for matching
const SOLUZIONE_KEYWORDS: Record<string, string[]> = {
  "consulente-ai-pmi": ["PMI", "Strategia"],
  "consulenza-intelligenza-artificiale-aziende": ["PMI", "Strategia"],
  "implementare-ai-in-azienda": ["PMI", "Automazione"],
  "automazione-processi-aziendali-ai": ["Automazione", "PMI"],
  "agenzia-intelligenza-artificiale-italia": ["PMI", "Strategia"],
  "ai-per-manifattura-italiana": ["Manifattura", "Automazione industriale", "Manutenzione Predittiva", "Visione Artificiale", "CNC", "Tessile", "Stampaggio"],
  "ai-per-family-office": ["Private equity", "ROI"],
  "ai-per-private-equity": ["Private equity", "ROI"],
  "chatbot-aziendale-italiano": ["Customer service", "Agenti AI", "Prenotazioni", "HORECA"],
  "agenti-ai-per-aziende": ["Agenti AI", "Automazione"],
  "roi-intelligenza-artificiale-pmi": ["ROI", "PMI"],
  "trasformazione-digitale-ai-pmi": ["PMI", "Automazione", "Strategia"],
  "ai-per-customer-service-pmi": ["Customer service", "PMI", "Prenotazioni"],
  "ai-per-procurement-aziendale": ["Procurement", "PMI", "Distribuzione B2B", "Magazzino"],
  "ridurre-costi-con-ai": ["ROI", "PMI", "Automazione", "Manutenzione Predittiva"],
  "automazione-marketing-ai": ["Marketing", "Automazione", "Ecommerce", "Moda", "Retail"],
  "ai-per-logistica-distribuzione": ["Logistica", "Automazione", "Magazzino", "Flotta", "Ultimo Miglio", "Distribuzione B2B"],
  "consulenza-ai-milano": ["PMI", "Manifattura"],
  "consulenza-ai-nord-italia": ["PMI", "Manifattura"],
  "ai-per-hr-aziende": ["HR", "PMI"],
  "agente-ai-personalizzato-azienda": ["Agenti AI", "PMI"],
  "ai-per-analisi-dati-pmi": ["PMI", "ROI", "Precision Farming", "Revenue Management"],
  "formazione-ai-team-aziendale": ["Formazione", "PMI"],
  "audit-processi-ai-azienda": ["Automazione", "PMI", "ROI", "Compliance"],
  "ai-per-ecommerce-italiano": ["Ecommerce", "Marketing", "Moda", "Retail", "Abbigliamento"],
  "agente-ai-risposta-email-commerciali": ["Customer service", "Agenti AI", "Automazione", "PMI", "Vendite"],
  "agente-ai-bandi-finanziamenti-pmi": ["Bandi", "Finanziamenti", "PNRR", "Transizione 5.0", "Credito imposta", "Agenti AI", "PMI"],
  "automazione-preventivi-ai-pmi": ["Automazione", "Preventivi", "Vendite", "PMI", "Agenti AI"],
  "agente-ai-lead-qualification-b2b": ["Lead generation", "Vendite", "B2B", "Agenti AI", "PMI"],
  "ai-due-diligence-fondi-investimento": ["Private Equity", "Due Diligence", "Family Office", "Fondi", "Venture Capital"],
  "ai-portfolio-monitoring-private-equity": ["Private Equity", "Portfolio", "Family Office", "Fondi", "ROI"],
  "consulenza-ai-club-deal-investitori": ["Private Equity", "Club Deal", "Family Office", "Investimenti", "Fondi"],
  "consulenza-ai-manifattura-lombardia": ["Manifattura", "Lombardia", "Milano", "Bergamo", "Brescia", "Strategia", "Automazione industriale"],
};

export function getLinksForCity(citySlug: string): {
  blogPosts: BlogPost[];
  soluzioni: SoluzionePage[];
} {
  const city = CITIES.find((c) => c.slug === citySlug);
  if (!city) return { blogPosts: [], soluzioni: [] };

  const blogPosts = BLOG_POSTS.map((post) => ({
    item: post,
    score: scoreOverlap(city.industries, post.tags),
  }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .filter((x) => x.score > 0)
    .map((x) => x.item);

  // Ensure we always have at least 2 blog posts
  if (blogPosts.length < 2) {
    const existing = new Set(blogPosts.map((p) => p.slug));
    for (const post of BLOG_POSTS) {
      if (!existing.has(post.slug)) {
        blogPosts.push(post);
        if (blogPosts.length >= 3) break;
      }
    }
  }

  const soluzioni = SOLUZIONI_PAGES.map((sol) => ({
    item: sol,
    score: scoreOverlap(
      city.industries,
      SOLUZIONE_KEYWORDS[sol.slug] || [sol.category]
    ),
  }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .filter((x) => x.score > 0)
    .map((x) => x.item);

  if (soluzioni.length < 2) {
    const existing = new Set(soluzioni.map((s) => s.slug));
    for (const sol of SOLUZIONI_PAGES) {
      if (!existing.has(sol.slug) && sol.category === "PMI") {
        soluzioni.push(sol);
        if (soluzioni.length >= 3) break;
      }
    }
  }

  return { blogPosts, soluzioni };
}

export function getLinksForBlog(blogSlug: string): {
  soluzioni: SoluzionePage[];
  cities: CityPage[];
} {
  const post = BLOG_POSTS.find((p) => p.slug === blogSlug);
  if (!post) return { soluzioni: [], cities: [] };

  const soluzioni = SOLUZIONI_PAGES.map((sol) => ({
    item: sol,
    score: scoreOverlap(
      post.tags,
      SOLUZIONE_KEYWORDS[sol.slug] || [sol.category]
    ),
  }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .filter((x) => x.score > 0)
    .map((x) => x.item);

  if (soluzioni.length < 2) {
    const existing = new Set(soluzioni.map((s) => s.slug));
    for (const sol of SOLUZIONI_PAGES) {
      if (!existing.has(sol.slug) && sol.category === "PMI") {
        soluzioni.push(sol);
        if (soluzioni.length >= 3) break;
      }
    }
  }

  const cities = CITIES.map((city) => ({
    item: city,
    score: scoreOverlap(post.tags, city.industries),
  }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .filter((x) => x.score > 0)
    .map((x) => x.item);

  return { soluzioni, cities };
}

/**
 * Returns strategic internal links for blog article pages
 * based on the post's category.
 */
export function getStrategicLinksForBlog(
  category: string
): { href: string; label: string }[] {
  const links: { href: string; label: string }[] = [];

  const cat = category.toLowerCase();

  if (cat === "settori") {
    links.push({ href: "/settori", label: "I settori in cui operiamo" });
    links.push({ href: "/casi-duso", label: "Casi d'uso AI per settore" });
  }

  if (cat === "incentivi") {
    links.push({
      href: "/incentivi",
      label: "Tutti gli incentivi per l'AI",
    });
    links.push({
      href: "/casi-duso",
      label: "Casi d'uso finanziabili",
    });
  }

  if (cat === "ai & pmi") {
    links.push({ href: "/aziende", label: "AI per le aziende italiane" });
    links.push({ href: "/metodo", label: "Il nostro metodo" });
    links.push({ href: "/casi-duso", label: "Casi d'uso AI concreti" });
  }

  if (cat === "automazione" || cat === "tecnologia") {
    links.push({ href: "/casi-duso", label: "Casi d'uso AI per PMI" });
    links.push({ href: "/metodo", label: "Il nostro processo" });
  }

  if (cat === "strategia") {
    links.push({ href: "/metodo", label: "Il nostro metodo" });
    links.push({ href: "/aziende", label: "AI per le aziende" });
    links.push({ href: "/casi-duso", label: "Casi d'uso concreti" });
  }

  if (cat === "compliance") {
    links.push({
      href: "/casi-duso",
      label: "Casi d'uso AI conformi",
    });
    links.push({ href: "/metodo", label: "Il nostro approccio" });
  }

  // Newer expanded categories
  if (
    cat.includes("analisi dati") ||
    cat.includes("ottimizzazione f") ||
    cat.includes("marketing e") ||
    cat.includes("supporto e") ||
    cat.includes("ottimizzazione finanziaria") ||
    cat.includes("partnership")
  ) {
    links.push({ href: "/casi-duso", label: "Casi d'uso AI per PMI" });
    links.push({ href: "/metodo", label: "Il nostro processo" });
  }

  // Always add contatti
  links.push({ href: "/contatti", label: "Parla con un esperto" });

  // Deduplicate by href
  const seen = new Set<string>();
  return links.filter((l) => {
    if (seen.has(l.href)) return false;
    seen.add(l.href);
    return true;
  });
}

/**
 * Returns strategic internal links for caso d'uso detail pages
 * based on the sector.
 */
export function getStrategicLinksForCasoDuso(
  sector: string
): { href: string; label: string }[] {
  const links: { href: string; label: string }[] = [];

  // Map sector to related blog article
  const sectorBlogMap: Record<string, { slug: string; label: string }> = {
    Manifattura: {
      slug: "ai-manifattura-produzione",
      label: "AI nella manifattura: guida completa",
    },
    "Logistica & Trasporti": {
      slug: "ai-logistica-trasporti",
      label: "AI nella logistica: guida completa",
    },
    "Food & Beverage": {
      slug: "ai-food-beverage",
      label: "AI nel food & beverage: guida completa",
    },
    "Retail & Fashion": {
      slug: "ai-retail-fashion",
      label: "AI nel retail e fashion: guida completa",
    },
    "Turismo & Ospitalita": {
      slug: "ai-turismo-ospitalita",
      label: "AI nel turismo: guida completa",
    },
    "Edilizia & Immobiliare": {
      slug: "ai-edilizia-immobiliare",
      label: "AI nell'edilizia: guida completa",
    },
    "Distribuzione B2B": {
      slug: "ai-distribuzione-b2b",
      label: "AI nella distribuzione B2B: guida completa",
    },
    "Servizi Professionali": {
      slug: "ai-servizi-professionali",
      label: "AI nei servizi professionali: guida completa",
    },
    Farmaceutica: {
      slug: "ai-farmaceutica",
      label: "AI nel farmaceutico: guida completa",
    },
    "Sanita Privata": {
      slug: "ai-sanita-privata",
      label: "AI nella sanita privata: guida completa",
    },
  };

  const blogLink = sectorBlogMap[sector];
  if (blogLink) {
    links.push({
      href: `/blog/${blogLink.slug}`,
      label: blogLink.label,
    });
  }

  links.push({
    href: "/incentivi",
    label: "Scopri come finanziare questo progetto",
  });
  links.push({ href: "/metodo", label: "Il nostro processo" });
  links.push({ href: "/contatti", label: "Parla con un esperto" });

  return links;
}

/**
 * Returns strategic internal links for incentivi detail pages.
 */
export function getStrategicLinksForIncentivo(): {
  href: string;
  label: string;
}[] {
  return [
    {
      href: "/blog/finanziamenti-trasformazione-ai-guida",
      label: "Guida pratica ai finanziamenti per l'AI",
    },
    {
      href: "/casi-duso",
      label: "Scopri i casi d'uso finanziabili",
    },
    { href: "/metodo", label: "Il nostro processo" },
    { href: "/contatti", label: "Richiedi un'analisi gratuita" },
  ];
}

/**
 * Returns strategic internal links for soluzioni detail pages.
 */
export function getStrategicLinksForSoluzione(): {
  href: string;
  label: string;
}[] {
  return [
    { href: "/casi-duso", label: "Tutti i casi d'uso AI" },
    {
      href: "/incentivi",
      label: "Incentivi per finanziare il progetto",
    },
    { href: "/contatti", label: "Parla con un esperto" },
  ];
}

/**
 * Returns strategic internal links for consulenza-ai city pages.
 */
export function getStrategicLinksForCity(): {
  href: string;
  label: string;
}[] {
  return [
    { href: "/settori", label: "I settori in cui operiamo" },
    { href: "/casi-duso", label: "I nostri casi d'uso" },
    {
      href: "/incentivi",
      label: "Incentivi disponibili nella tua regione",
    },
    { href: "/metodo", label: "Il nostro metodo di lavoro" },
    { href: "/contatti", label: "Parla con un esperto" },
  ];
}

export function getLinksForSoluzione(soluzioneSlug: string): {
  blogPosts: BlogPost[];
  cities: CityPage[];
} {
  const sol = SOLUZIONI_PAGES.find((s) => s.slug === soluzioneSlug);
  if (!sol) return { blogPosts: [], cities: [] };

  const keywords = SOLUZIONE_KEYWORDS[sol.slug] || [sol.category];

  const blogPosts = BLOG_POSTS.map((post) => ({
    item: post,
    score: scoreOverlap(keywords, post.tags),
  }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .filter((x) => x.score > 0)
    .map((x) => x.item);

  if (blogPosts.length < 2) {
    const existing = new Set(blogPosts.map((p) => p.slug));
    for (const post of BLOG_POSTS) {
      if (!existing.has(post.slug)) {
        blogPosts.push(post);
        if (blogPosts.length >= 3) break;
      }
    }
  }

  const cities = CITIES.map((city) => ({
    item: city,
    score: scoreOverlap(keywords, city.industries),
  }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .filter((x) => x.score > 0)
    .map((x) => x.item);

  return { blogPosts, cities };
}
