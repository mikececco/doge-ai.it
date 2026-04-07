import { SETTORI, type Settore } from "./settori-data";

/**
 * Mapping from settore title to URL-safe slug.
 * Manually defined for SEO control (no auto-slugify surprises).
 */
const SLUG_MAP: Record<string, string> = {
  Manifattura: "manifattura",
  "Distribuzione B2B & Grossisti": "distribuzione-b2b",
  "Retail, Fashion & Design": "retail-fashion",
  "Turismo & Ospitalità": "turismo-ospitalita",
  "Logistica & Trasporti": "logistica-trasporti",
  "Servizi Professionali": "servizi-professionali",
  "Farmaceutica & Dispositivi Medici": "farmaceutica",
  "Food & Beverage": "food-beverage",
  "Edilizia & Immobiliare": "edilizia-immobiliare",
  "Sanità Privata": "sanita-privata",
};

export type SettoreWithSlug = Settore & { slug: string };

export const SETTORI_WITH_SLUGS: SettoreWithSlug[] = SETTORI.map((s) => ({
  ...s,
  slug: SLUG_MAP[s.title] ?? s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
}));

export function getSettoreBySlug(slug: string): SettoreWithSlug | undefined {
  return SETTORI_WITH_SLUGS.find((s) => s.slug === slug);
}
