#!/usr/bin/env npx tsx
/**
 * GSC Analyzer — parses Google Search Console CSV exports and surfaces:
 *   1. Striking distance keywords (position 5-20, sorted by impressions)
 *   2. CTR problems (CTR < 2% despite high impressions)
 *   3. Cannibalization (multiple pages ranking for the same query)
 *   4. Page-level optimization recommendations
 *
 * Usage:
 *   npx tsx scripts/gsc-analyzer.ts docs/Queries.csv docs/Pages.csv
 *   npx tsx scripts/gsc-analyzer.ts docs/Queries.csv              # queries-only mode
 */

import { readFileSync } from "fs";
import { resolve } from "path";

// ─── CSV parsing ────────────────────────────────────────────────────────────

function parseCSV(raw: string): Record<string, string>[] {
  const lines = raw.trim().split("\n");
  if (lines.length < 2) return [];

  const headers = parseLine(lines[0]);
  return lines.slice(1).map((line) => {
    const values = parseLine(line);
    const row: Record<string, string> = {};
    headers.forEach((h, i) => {
      row[h.trim()] = (values[i] ?? "").trim();
    });
    return row;
  });
}

function parseLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;
  for (const ch of line) {
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === "," && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  result.push(current);
  return result;
}

// ─── Type helpers ───────────────────────────────────────────────────────────

interface QueryRow {
  query: string;
  page: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

interface PageRow {
  page: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

function toQueryRow(raw: Record<string, string>): QueryRow | null {
  // GSC exports use various header names depending on language
  const query =
    raw["Top queries"] ?? raw["Query"] ?? raw["query"] ?? raw["Principali query"] ?? "";
  const page = raw["Page"] ?? raw["page"] ?? raw["Pagina"] ?? raw["Top pages"] ?? "";
  const clicks = parseNum(raw["Clicks"] ?? raw["clicks"] ?? raw["Clic"] ?? "0");
  const impressions = parseNum(
    raw["Impressions"] ?? raw["impressions"] ?? raw["Impressioni"] ?? "0"
  );
  const ctr = parsePct(raw["CTR"] ?? raw["ctr"] ?? "0");
  const position = parseNum(raw["Position"] ?? raw["position"] ?? raw["Posizione"] ?? "0");

  if (!query && !page) return null;
  return { query, page, clicks, impressions, ctr, position };
}

function toPageRow(raw: Record<string, string>): PageRow | null {
  const page =
    raw["Top pages"] ?? raw["Page"] ?? raw["page"] ?? raw["Pagina"] ?? raw["Principali pagine"] ?? "";
  const clicks = parseNum(raw["Clicks"] ?? raw["clicks"] ?? raw["Clic"] ?? "0");
  const impressions = parseNum(
    raw["Impressions"] ?? raw["impressions"] ?? raw["Impressioni"] ?? "0"
  );
  const ctr = parsePct(raw["CTR"] ?? raw["ctr"] ?? "0");
  const position = parseNum(raw["Position"] ?? raw["position"] ?? raw["Posizione"] ?? "0");

  if (!page) return null;
  return { page, clicks, impressions, ctr, position };
}

function parseNum(s: string): number {
  return parseFloat(s.replace(/[^0-9.\-]/g, "")) || 0;
}

function parsePct(s: string): number {
  // "1.5%" → 1.5  |  "0.015" → 1.5
  const n = parseFloat(s.replace(/[^0-9.\-]/g, ""));
  if (isNaN(n)) return 0;
  return s.includes("%") ? n : n * 100;
}

// ─── Analysis ───────────────────────────────────────────────────────────────

function strikingDistance(queries: QueryRow[]): QueryRow[] {
  return queries
    .filter((q) => q.position >= 5 && q.position <= 20 && q.impressions > 0)
    .sort((a, b) => b.impressions - a.impressions);
}

function ctrProblems(queries: QueryRow[]): QueryRow[] {
  return queries
    .filter((q) => q.impressions >= 10 && q.ctr < 2)
    .sort((a, b) => b.impressions - a.impressions);
}

function cannibalization(queries: QueryRow[]): Map<string, QueryRow[]> {
  const byQuery = new Map<string, QueryRow[]>();
  for (const q of queries) {
    if (!q.query || !q.page) continue;
    const existing = byQuery.get(q.query) ?? [];
    existing.push(q);
    byQuery.set(q.query, existing);
  }

  const result = new Map<string, QueryRow[]>();
  for (const [query, rows] of byQuery) {
    const uniquePages = new Set(rows.map((r) => r.page));
    if (uniquePages.size > 1) {
      result.set(query, rows.sort((a, b) => b.impressions - a.impressions));
    }
  }
  return result;
}

interface PageRecommendation {
  page: string;
  impressions: number;
  clicks: number;
  ctr: number;
  position: number;
  issues: string[];
}

function pageRecommendations(pages: PageRow[]): PageRecommendation[] {
  return pages
    .map((p) => {
      const issues: string[] = [];

      if (p.position <= 10 && p.ctr < 2 && p.impressions >= 10) {
        issues.push(
          `Page 1 but CTR only ${p.ctr.toFixed(1)}% — rewrite title/description for this page`
        );
      }
      if (p.position > 10 && p.position <= 20 && p.impressions >= 20) {
        issues.push(
          `Striking distance (pos ${p.position.toFixed(1)}) — add internal links and content depth`
        );
      }
      if (p.impressions >= 50 && p.clicks === 0) {
        issues.push(`${p.impressions} impressions with 0 clicks — likely broken title/description`);
      }
      if (p.position > 20 && p.impressions >= 30) {
        issues.push(
          `Below page 2 but visible (${p.impressions} impr) — content may need expansion`
        );
      }

      return {
        page: p.page,
        impressions: p.impressions,
        clicks: p.clicks,
        ctr: p.ctr,
        position: p.position,
        issues,
      };
    })
    .filter((p) => p.issues.length > 0)
    .sort((a, b) => b.impressions - a.impressions);
}

// ─── Output helpers ─────────────────────────────────────────────────────────

function heading(text: string) {
  console.log(`\n${"═".repeat(70)}`);
  console.log(`  ${text}`);
  console.log(`${"═".repeat(70)}\n`);
}

function table(
  headers: string[],
  rows: string[][],
  widths: number[]
) {
  const sep = widths.map((w) => "─".repeat(w)).join("─┼─");
  const hdr = headers.map((h, i) => h.padEnd(widths[i])).join(" │ ");
  console.log(hdr);
  console.log(sep);
  for (const row of rows) {
    console.log(row.map((cell, i) => cell.slice(0, widths[i]).padEnd(widths[i])).join(" │ "));
  }
}

// ─── Main ───────────────────────────────────────────────────────────────────

function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error(
      "Usage: npx tsx scripts/gsc-analyzer.ts <Queries.csv> [Pages.csv]"
    );
    process.exit(1);
  }

  const queriesPath = resolve(args[0]);
  const queriesRaw = readFileSync(queriesPath, "utf-8");
  const queriesParsed = parseCSV(queriesRaw);
  const queries = queriesParsed.map(toQueryRow).filter(Boolean) as QueryRow[];

  console.log(`Loaded ${queries.length} query rows from ${args[0]}`);

  let pages: PageRow[] = [];
  if (args[1]) {
    const pagesPath = resolve(args[1]);
    const pagesRaw = readFileSync(pagesPath, "utf-8");
    const pagesParsed = parseCSV(pagesRaw);
    pages = pagesParsed.map(toPageRow).filter(Boolean) as PageRow[];
    console.log(`Loaded ${pages.length} page rows from ${args[1]}`);
  }

  // 1. Striking Distance
  heading("1. STRIKING DISTANCE KEYWORDS (pos 5-20)");
  const sd = strikingDistance(queries).slice(0, 30);
  if (sd.length === 0) {
    console.log("  No striking distance keywords found.");
  } else {
    table(
      ["Query", "Page", "Pos", "Impr", "Clicks", "CTR"],
      sd.map((q) => [
        q.query,
        q.page.replace("https://doge-ai.it", ""),
        q.position.toFixed(1),
        String(q.impressions),
        String(q.clicks),
        `${q.ctr.toFixed(1)}%`,
      ]),
      [45, 40, 5, 6, 6, 6]
    );
  }

  // 2. CTR Problems
  heading("2. CTR PROBLEMS (CTR < 2%, 10+ impressions)");
  const ctr = ctrProblems(queries).slice(0, 20);
  if (ctr.length === 0) {
    console.log("  No CTR problems found.");
  } else {
    table(
      ["Query", "Page", "Pos", "Impr", "CTR"],
      ctr.map((q) => [
        q.query,
        q.page.replace("https://doge-ai.it", ""),
        q.position.toFixed(1),
        String(q.impressions),
        `${q.ctr.toFixed(1)}%`,
      ]),
      [45, 40, 5, 6, 6]
    );
  }

  // 3. Cannibalization
  heading("3. QUERY CANNIBALIZATION (multiple pages same query)");
  const cannibal = cannibalization(queries);
  if (cannibal.size === 0) {
    console.log("  No cannibalization detected.");
  } else {
    let count = 0;
    for (const [query, rows] of cannibal) {
      if (count >= 15) break;
      console.log(`  Query: "${query}"`);
      for (const r of rows) {
        console.log(
          `    ${r.page.replace("https://doge-ai.it", "").padEnd(45)} pos ${r.position.toFixed(1).padStart(5)} | ${r.impressions} impr | ${r.clicks} clicks`
        );
      }
      console.log();
      count++;
    }
  }

  // 4. Page Recommendations
  if (pages.length > 0) {
    heading("4. PAGE OPTIMIZATION RECOMMENDATIONS");
    const recs = pageRecommendations(pages).slice(0, 20);
    if (recs.length === 0) {
      console.log("  No page-level issues found.");
    } else {
      for (const rec of recs) {
        console.log(
          `  ${rec.page.replace("https://doge-ai.it", "")}`
        );
        console.log(
          `    pos ${rec.position.toFixed(1)} | ${rec.impressions} impr | ${rec.clicks} clicks | CTR ${rec.ctr.toFixed(1)}%`
        );
        for (const issue of rec.issues) {
          console.log(`    → ${issue}`);
        }
        console.log();
      }
    }
  }

  // Summary
  heading("SUMMARY");
  console.log(`  Striking distance keywords: ${sd.length}`);
  console.log(`  CTR problems:               ${ctr.length}`);
  console.log(`  Cannibalized queries:        ${cannibal.size}`);
  if (pages.length > 0) {
    console.log(
      `  Pages needing work:          ${pageRecommendations(pages).length}`
    );
  }
}

main();
