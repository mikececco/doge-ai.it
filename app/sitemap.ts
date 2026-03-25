import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-data";
import { SOLUZIONI_PAGES } from "@/lib/soluzioni-data";

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

  const blogPosts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const soluzioniPages: MetadataRoute.Sitemap = SOLUZIONI_PAGES.map((page) => ({
    url: `${BASE_URL}/soluzioni/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...blogPosts, ...soluzioniPages];
}
