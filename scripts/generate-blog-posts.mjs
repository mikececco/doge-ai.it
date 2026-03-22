import fs from 'fs';
import path from 'path';

const TEMPLATE = fs.readFileSync('/Users/openmaiku/Projects/doge-website/blog/post-template.html', 'utf8');
const MD_DIR = '/Users/openmaiku/.openclaw/workspace-supalabs/blog/v2';
const OUT_DIR = '/Users/openmaiku/Projects/doge-website/blog';

const POSTS = [
  {
    slug: 'aziende-insostituibili-era-ai',
    pillar: 'Trasformazione AI',
    date: '18 Marzo 2026',
    readTime: 5,
    sourceUrl: 'https://linkedin.com',
    sourceLabel: 'LinkedIn — Thread AI Skills',
  },
  {
    slug: 'agenti-ai-per-aziende-guida-pratica',
    pillar: 'Sistemi AI',
    date: '19 Marzo 2026',
    readTime: 6,
    sourceUrl: 'https://linkedin.com',
    sourceLabel: 'LinkedIn — OpenClaw Tips 1–6',
  },
  {
    slug: 'sistema-ai-aziendale-sicuro-scalabile',
    pillar: 'Architettura AI',
    date: '20 Marzo 2026',
    readTime: 7,
    sourceUrl: 'https://linkedin.com',
    sourceLabel: 'LinkedIn — OpenClaw Tips 7–12',
  },
  {
    slug: 'ecosistema-ai-aziendale-strumenti-che-contano',
    pillar: 'Strumenti AI',
    date: '21 Marzo 2026',
    readTime: 6,
    sourceUrl: 'https://linkedin.com',
    sourceLabel: 'LinkedIn — Top 50 Claude Skills pt.1',
  },
  {
    slug: 'architettura-ai-tre-layer-che-contano',
    pillar: 'Architettura AI',
    date: '22 Marzo 2026',
    readTime: 7,
    sourceUrl: 'https://linkedin.com',
    sourceLabel: 'LinkedIn — Top 50 Claude Skills pt.2',
  },
  {
    slug: 'intelligenza-istituzionale-ai-per-aziende',
    pillar: 'Strategia AI',
    date: '22 Marzo 2026',
    readTime: 8,
    sourceUrl: 'https://linkedin.com',
    sourceLabel: 'LinkedIn — CTO Executive Assistant Thread',
  },
  {
    slug: 'guida-di-stile-ai-scrivere-come-te',
    pillar: 'AI Writing',
    date: '22 Marzo 2026',
    readTime: 6,
    sourceUrl: 'https://linkedin.com',
    sourceLabel: 'Guida di Stile AI',
  },
];

function mdToHtml(md) {
  // Extract title (first H1)
  const titleMatch = md.match(/^# (.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : '';

  // Extract subtitle/excerpt (first *italic* line)
  const excerptMatch = md.match(/^\*(.+)\*$/m);
  const excerpt = excerptMatch ? excerptMatch[1].trim() : '';

  // Remove title, excerpt, --- dividers
  let body = md
    .replace(/^# .+$/m, '')
    .replace(/^\*.+\*$/m, '')
    .replace(/^---$/gm, '')
    .trim();

  // Remove CTA block (from **[il Doge di Venezia] onward)
  body = body.replace(/\n+\*\*\[il Doge di Venezia\][\s\S]*$/, '');

  // Remove tags line
  body = body.replace(/\n+\*Tag:[\s\S]*$/, '');

  body = body.trim();

  // Convert headings
  body = body.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  body = body.replace(/^### (.+)$/gm, '<h3>$1</h3>');

  // Convert tables (must happen before list/paragraph processing)
  body = body.replace(/\|(.+)\|\n\|[-|:\s]+\|\n((?:\|.+\|\n?)*)/g, (match, headerRow, bodyRows) => {
    const headers = headerRow.split('|').map(s => s.trim()).filter(Boolean)
      .map(h => `<th style="padding:.75rem 1rem;text-align:left;border-bottom:1px solid rgba(255,255,255,.1);color:#fff">${h}</th>`).join('');
    const rows = bodyRows.trim().split('\n').map(row => {
      const cells = row.split('|').map(s => s.trim()).filter(Boolean)
        .map(c => `<td style="padding:.75rem 1rem;border-bottom:1px solid rgba(255,255,255,.06);color:rgba(255,255,255,.7)">${c}</td>`).join('');
      return `<tr>${cells}</tr>`;
    }).join('\n');
    return `<div style="overflow-x:auto;margin:2rem 0"><table style="width:100%;border-collapse:collapse;background:#111"><thead><tr style="background:rgba(250,237,38,.08)">${headers}</tr></thead><tbody>${rows}</tbody></table></div>\n`;
  });

  // Convert unordered lists (collect consecutive - lines)
  body = body.replace(/((?:^- .+$\n?)+)/gm, (match) => {
    const items = match.trim().split('\n')
      .map(line => `  <li>${line.replace(/^- /, '')}</li>`).join('\n');
    return `<ul>\n${items}\n</ul>\n`;
  });

  // Convert bold+link
  body = body.replace(/\*\*\[(.+?)\]\((.+?)\)\*\*/g, '<strong><a href="$2" target="_blank" rel="noopener">$1</a></strong>');

  // Convert inline links
  body = body.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

  // Convert bold
  body = body.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Convert italic (not list markers)
  body = body.replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, '<em>$1</em>');

  // Wrap text blocks in <p> (blocks separated by blank lines)
  const blocks = body.split(/\n{2,}/);
  body = blocks.map(block => {
    block = block.trim();
    if (!block) return '';
    if (/^<(h[1-6]|ul|ol|table|div|blockquote|figure)/.test(block)) return block;
    return `<p>${block.replace(/\n/g, ' ')}</p>`;
  }).filter(Boolean).join('\n\n');

  return { title, excerpt, body };
}

let indexCards = [];

for (const post of POSTS) {
  const mdPath = path.join(MD_DIR, `${post.slug}.md`);
  if (!fs.existsSync(mdPath)) {
    console.warn(`⚠️  Missing: ${mdPath}`);
    continue;
  }

  const md = fs.readFileSync(mdPath, 'utf8');
  const { title, excerpt, body } = mdToHtml(md);

  let html = TEMPLATE
    .replace(/{{POST_TITLE}}/g, title)
    .replace(/{{POST_EXCERPT}}/g, excerpt)
    .replace(/{{POST_PILLAR}}/g, post.pillar)
    .replace(/{{POST_DATE}}/g, post.date)
    .replace(/{{READ_TIME}}/g, post.readTime)
    .replace(/{{POST_CONTENT}}/g, body)
    .replace(/{{SOURCE_URL}}/g, post.sourceUrl)
    .replace(/{{SOURCE_LABEL}}/g, post.sourceLabel);

  const outPath = path.join(OUT_DIR, `${post.slug}.html`);
  fs.writeFileSync(outPath, html);
  console.log(`✅ ${post.slug}.html`);

  indexCards.push({ ...post, title, excerpt });
}

// Update blog/index.html with post cards
const indexPath = path.join(OUT_DIR, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

const cards = indexCards.map((post, i) => {
  const featured = i === 0 ? ' featured' : '';
  return `      <a href="/blog/${post.slug}.html" class="post-card${featured}">
        <div class="post-meta">
          <span class="post-pillar">${post.pillar}</span>
          <span class="post-date">${post.date}</span>
        </div>
        <h2>${post.title}</h2>
        <p>${post.excerpt}</p>
        <span class="post-read-more">${post.readTime} min read</span>
      </a>`;
}).join('\n');

indexHtml = indexHtml.replace(
  /(<div class="blog-grid-inner" id="posts-grid">)[\s\S]*?(<\/div>)/,
  `$1\n${cards}\n    $2`
);

fs.writeFileSync(indexPath, indexHtml);
console.log('✅ blog/index.html updated');
