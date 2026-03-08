# Tenex Italy — Website Build Brief

## Goal
Replicate https://www.tenex.co/ as a static HTML/CSS/JS site adapted for the Italian market.
Deploy to Netlify.

## Reference Site
- Original: https://www.tenex.co/
- Built with Webflow originally — rebuild from scratch as static HTML
- Screenshot saved for reference

## Italian Adaptation
This is "Tenex Italia" — targeting Italian manufacturing companies (PMI manifatturiere) in Veneto
and across Italy who need AI transformation support.

## Design (match closely)
- **Background**: #0a0a0a (near-black)
- **Accent color**: #FAED26 (yellow)
- **Text**: White / off-white
- **Font**: Use Google Fonts — "DM Serif Display" (headings, italic) + "Inter" (body)
- **Style**: Bold, minimal, dark luxury, statue imagery (Greek/Roman)

## Pages to build
1. **index.html** — Homepage (priority #1, full faithful replica adapted for Italy)
2. **trasformazione-ai.html** — AI Transformation page
3. **ingegneria-ai.html** — AI Engineering page
4. **chi-siamo.html** — About Us
5. **inizia.html** — Get Started (contact form)

## Homepage Sections (in order)

### 1. Nav
- Logo: "IX Tenex" in white (use text + pixel-art X icon styled with CSS)
- Hamburger menu → fullscreen block overlay with colored blocks per nav item
- Links: Home, Trasformazione AI, Ingegneria AI, Chi Siamo, Risorse ▾, Inizia

### 2. Hero
- Large H1: **"Vinci il prossimo decennio."**
- Background: animated GIF statue (use this URL directly): 
  https://cdn.prod.website-files.com/68af31ddf12f0b14be84dba1/68bda3bb47ddddd3659d54d3_Main-Guy2.gif
- Subtitle: "Il tuo partner per la trasformazione AI."
- Body: "Definiamo ed eseguiamo la tua strategia AI aziendale alla velocità di una startup."
- CTA button → /trasformazione-ai

### 3. Approach (sticky scroll cards)
- Eyebrow: "Il nostro approccio"
- Title: "**Tenex** ti aiuta a passare da AI-assente ad AI-nativo."
- 3 cards (scroll-stacked):
  
  **Strategia**
  Niente strategia da 6 mesi. Niente presentazioni da 200 slide. Analizziamo la tua azienda in profondità per identificare i casi d'uso AI più ad alto impatto.
  Image: https://cdn.prod.website-files.com/68af31ddf12f0b14be84dba1/68bda43009572fe84dc57f3b_Brain.webp

  **Trasformazione**
  Partnership su misura che combina change management e strumenti AI con metriche baseline per generare ROI misurabile.
  Image: https://cdn.prod.website-files.com/68af31ddf12f0b14be84dba1/68bda472611a11a9f0cc5cfa_Hammer.webp

  **Ingegneria**
  Squad di ingegneria in abbonamento, basati su risultati. Usiamo l'accelerazione AI per rilasciare software più velocemente e a costi inferiori — paghi per le feature consegnate, non per le ore.
  Image: https://cdn.prod.website-files.com/68af31ddf12f0b14be84dba1/68bda47fcc91fe7beb9f31e5_Globe.webp

### 4. Disruption section (dark, full-width)
- Title: "Hai una scelta. **Disrompi te stesso.** O lascia che siano gli altri a farlo."
- Long paragraph (Italian translation of the original)
- CTA: "Inizia ora"

### 5. AI isn't scary
- Right-aligned: "L'AI non fa paura. **Ignorarla sì.**"
- Background statue GIF: https://cdn.prod.website-files.com/68af31ddf12f0b14be84dba1/68b794d5d51d8c79b4eb5d81_Goggles.gif
- Logo bar: "Trusted by the best:" + placeholder logos (or leave empty for now)

### 6. Testimonials (Swiper carousel)
Use Swiper.js CDN. 3 cards with placeholder Italian testimonials:
- "Tenex ci ha dato l'equivalente di un team di ingegneria di livello internazionale. Consegniamo 3x le feature in meno tempo." — PMI Veneto
- "Il team di Tenex è brillante — reattivo, adattabile e capace di semplificare la complessità." — Azienda manifatturiera
- "La velocità, la comunicazione e la cura che Tenex ha per noi come cliente è impeccabile." — Imprenditore

### 7. Ticker / Marquee
- Text: "Costruito da builder, scelto dai leader • " (repeating, scrolling left)
- Yellow background (#FAED26), black text

### 8. FAQ Accordion
- "Domande? Abbiamo le risposte."
- 5 FAQs (Italian translation of original)

### 9. CTA Section
- "Resta dalla parte giusta della storia."
- CTA button: "Inizia ora"
- Right: laptop GIF: https://cdn.prod.website-files.com/68af31ddf12f0b14be84dba1/68b7949841b31d8f52405755_Laptop-Ladies2_Width560.gif

### 10. Footer
- Logo left, "2026 Tenex Italia. Tutti i diritti riservati."
- Right: email (human@tenex.it placeholder), Twitter/LinkedIn icons

## Animations
Use GSAP (CDN) for:
- Page load grid wipe animation (black squares that fall away)
- Hero H1 word-by-word stagger reveal
- Approach cards: sticky scroll effect
- Text type-in effect on the disruption paragraph

## Tech Stack
- Plain HTML5 + CSS (no framework, no build step needed)
- Vanilla JS + GSAP (CDN) + Swiper.js (CDN)
- No React, no Next.js — must work as pure static files
- `netlify.toml` for deploy config

## File Structure
```
tenex-italy/
├── index.html
├── trasformazione-ai.html
├── ingegneria-ai.html  
├── chi-siamo.html
├── inizia.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   └── (any local assets)
└── netlify.toml
```

## netlify.toml
```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Quality Bar
- Pixel-close to original on desktop (1440px)
- Fully responsive (mobile 375px)
- All animations smooth (60fps)
- Hamburger menu works
- FAQ accordion works
- Testimonial swiper works
- No console errors

## When done
Run: `openclaw system event --text "Done: Tenex Italy website built and ready for Netlify deploy" --mode now`
