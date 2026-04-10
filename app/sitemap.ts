import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-data";
import { SOLUZIONI_PAGES } from "@/lib/soluzioni-data";
import { CITIES } from "@/lib/cities-data";
import { INCENTIVI, REGIONI } from "@/lib/incentivi-data";
import { CASI_DUSO } from "@/lib/casi-duso-data";
import { INCENTIVI_SETTORIALI } from "@/lib/incentivi-settoriali-data";
import { CASI_STUDIO } from "@/lib/casi-studio-data";
import { SETTORI_WITH_SLUGS } from "@/lib/settore-slugs";
import { GUIDE } from "@/lib/guide-data";

export const dynamic = "force-static";

const BASE_URL = "https://doge-ai.it";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/chi-siamo",
    "/aziende",
    "/fondi",
    "/metodo",
    "/casi-duso",
    "/blog",
    "/soluzioni",
    "/settori",
    "/incentivi",
    "/lavora-con-noi",
    "/contatti",
    "/privacy",
    "/cookie-policy",
  ];

  const staticPages: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${BASE_URL}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : page === "/blog" ? "weekly" : "monthly",
    priority: page === "" ? 1 : page === "/blog" ? 0.9 : 0.8,
  }));

  const coreSlugPatterns = [
    "ai-pmi", "claude", "chatgpt", "agenti", "automazione", "agentic",
    "n8n", "gtm", "consulenza-ai", "quanto-costa", "insostituibili",
    "evals", "infrastruttura", "video-ai", "collasso", "prompt",
  ];

  const blogPosts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => {
    const isCore = coreSlugPatterns.some((p) => post.slug.includes(p));
    return {
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: isCore ? 0.75 : 0.65,
    };
  });

  const soluzioniPages: MetadataRoute.Sitemap = SOLUZIONI_PAGES.map((page) => ({
    url: `${BASE_URL}/soluzioni/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const guidePages: MetadataRoute.Sitemap = GUIDE.map((guide) => ({
    url: `${BASE_URL}/guida/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const consulenzaAIIndex: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/consulenza-ai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const consulenzaAICities: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${BASE_URL}/consulenza-ai/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const incentiviPages: MetadataRoute.Sitemap = [...INCENTIVI, ...REGIONI].map((item) => ({
    url: `${BASE_URL}/incentivi/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const casiDusoPages: MetadataRoute.Sitemap = CASI_DUSO.map((caso) => ({
    url: `${BASE_URL}/casi-duso/${caso.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  // pSEO: City x Sector pages (107 x 10 = 1,070)
  const consulenzaAISettori: MetadataRoute.Sitemap = CITIES.flatMap((city) =>
    SETTORI_WITH_SLUGS.map((settore) => ({
      url: `${BASE_URL}/consulenza-ai/${city.slug}/${settore.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  // pSEO: City x Use Case pages (107 x 20 = 2,140)
  const crossIndustryIds = [
    "assistenti-personali-ai", "copilota-ai-dipendente", "automazione-meeting-notes",
    "knowledge-base-interna-ai", "document-generation-automatica", "automazione-hr-payroll",
    "onboarding-digitale", "screening-cv-ai", "agenti-ai-operativi", "customer-service-automation",
    "procurement-intelligence", "supplier-scoring-selezione", "contract-management-ai",
    "gestione-automatica-email", "report-generation-ai", "lead-scoring-predittivo",
    "crm-automation-enrichment", "brand-visibility-piattaforme-ai", "content-generation-ai",
    "seo-aeo-automation",
  ];
  const aiCasoCitta: MetadataRoute.Sitemap = CITIES.flatMap((city) =>
    crossIndustryIds.map((casoId) => ({
      url: `${BASE_URL}/ai/${city.slug}/${casoId}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.55,
    }))
  );

  // pSEO: Region x Sector incentivi pages (100)
  const incentiviSettorialiPages: MetadataRoute.Sitemap = INCENTIVI_SETTORIALI.map((is) => ({
    url: `${BASE_URL}/incentivi-settoriali/${is.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  // Case Studies (20)
  const casiStudioIndex: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/casi-studio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const casiStudioPages: MetadataRoute.Sitemap = CASI_STUDIO.map((cs) => ({
    url: `${BASE_URL}/casi-studio/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...blogPosts,
    ...soluzioniPages,
    ...guidePages,
    ...consulenzaAIIndex,
    ...consulenzaAICities,
    ...consulenzaAISettori,
    ...incentiviPages,
    ...incentiviSettorialiPages,
    ...casiDusoPages,
    ...casiStudioIndex,
    ...casiStudioPages,
    ...aiCasoCitta,
  ];
}
