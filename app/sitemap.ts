import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-data";
import { SOLUZIONI_PAGES } from "@/lib/soluzioni-data";
import { CITIES } from "@/lib/cities-data";
import { INCENTIVI, REGIONI } from "@/lib/incentivi-data";
import { CASI_DUSO } from "@/lib/casi-duso-data";

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

  return [
    ...staticPages,
    ...blogPosts,
    ...soluzioniPages,
    ...consulenzaAIIndex,
    ...consulenzaAICities,
    ...incentiviPages,
    ...casiDusoPages,
  ];
}
