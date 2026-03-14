import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-data";

const BASE_URL = "https://dogedivenezia.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/chi-siamo",
    "/aziende",
    "/fondi",
    "/metodo",
    "/casi-duso",
    "/blog",
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

  return [...staticPages, ...blogPosts];
}
