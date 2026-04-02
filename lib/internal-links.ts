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
  "ai-per-manifattura-italiana": ["Manifattura", "Automazione industriale"],
  "ai-per-family-office": ["Private equity", "ROI"],
  "ai-per-private-equity": ["Private equity", "ROI"],
  "chatbot-aziendale-italiano": ["Customer service", "Agenti AI"],
  "agenti-ai-per-aziende": ["Agenti AI", "Automazione"],
  "roi-intelligenza-artificiale-pmi": ["ROI", "PMI"],
  "trasformazione-digitale-ai-pmi": ["PMI", "Automazione", "Strategia"],
  "ai-per-customer-service-pmi": ["Customer service", "PMI"],
  "ai-per-procurement-aziendale": ["Procurement", "PMI"],
  "ridurre-costi-con-ai": ["ROI", "PMI", "Automazione"],
  "automazione-marketing-ai": ["Marketing", "Automazione"],
  "ai-per-logistica-distribuzione": ["Logistica", "Automazione"],
  "consulenza-ai-milano": ["PMI", "Manifattura"],
  "consulenza-ai-nord-italia": ["PMI", "Manifattura"],
  "ai-per-hr-aziende": ["HR", "PMI"],
  "agente-ai-personalizzato-azienda": ["Agenti AI", "PMI"],
  "ai-per-analisi-dati-pmi": ["PMI", "ROI"],
  "formazione-ai-team-aziendale": ["Formazione", "PMI"],
  "audit-processi-ai-azienda": ["Automazione", "PMI", "ROI"],
  "ai-per-ecommerce-italiano": ["Ecommerce", "Marketing"],
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
