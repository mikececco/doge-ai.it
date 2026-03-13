import { MetadataRoute } from "next";

const BASE_URL = "https://dogedivenezia.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/chi-siamo",
    "/aziende",
    "/fondi",
    "/metodo",
    "/casi-duso",
    "/contatti",
    "/privacy",
    "/cookie-policy",
  ];

  return pages.map((page) => ({
    url: `${BASE_URL}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1 : 0.8,
  }));
}
