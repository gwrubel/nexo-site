---
name: nexo-seo
description: Technical and on-page SEO for the Nexo site (software studio in Cascavel, PR — Next.js App Router, Portuguese/pt-BR audience) — metadata, Open Graph image, sitemap, robots, JSON-LD structured data, headings and keywords, image/font performance and Core Web Vitals. Use this whenever the user mentions SEO, Google, ranking, aparecer no Google, palavras-chave, meta tags, compartilhamento no WhatsApp/LinkedIn, prévia do link, sitemap, Search Console, Lighthouse, velocidade do site, or asks to add a new page — even if they don't say "SEO" explicitly.
---

# Nexo — SEO

Goal: when a business owner in Brazil searches for things like "desenvolvimento de software
sob medida", "automação de processos" or "criação de sistema web" (especially "em Cascavel"),
Google understands this site is a relevant, fast, trustworthy answer — and when the link is
shared (WhatsApp, LinkedIn) it shows a good preview.

Read `references/templates.md` when you need file templates (sitemap, robots, JSON-LD,
next/font, next/image, OG image).

## The brand-name problem

"Nexo" is a crowded name (there is a large international company with the same name, among
others), so the site will **not** rank for "Nexo" alone. That's fine — clients don't search
for a studio's name, they search for the problem. Lean on service + location terms
("software sob medida em Cascavel") in titles, h1/h2 and copy, and pair the brand with
context when it appears in metadata ("Nexo — Software sob medida em Cascavel, PR"). If the
user ever registers a domain, a descriptive one helps more than the bare name.

## What already exists (start by checking it's still true)

- `lib/site.ts` — single source for name, tagline, description, founder, email, city and
  social links. Import `site` / `siteUrl` from `@/lib/site`; never hard-code these.
- `app/layout.tsx` — `metadata` (title, description, canonical, Open Graph, Twitter) and a
  JSON-LD `@graph` with `Person` (founder) + `Organization` (logo `public/nexo-logo.png`,
  slogan) + `ProfessionalService` (Cascavel/PR address and `areaServed`).
- `app/sitemap.ts`, `app/robots.ts`, `app/icon.svg`, `app/apple-icon.png`, `public/og.jpg`.
- Sora via `next/font/google` (`--font-sora`), images via `next/image`.

Report gaps as a short prioritized list (impact × effort) before implementing, unless the
user already asked for a specific fix.

## Metadata (Next.js Metadata API)

- Use the `metadata` export / `generateMetadata`, never manual `<head>` tags.
- `metadataBase` must be the production URL at build time — remind the user to set
  `NEXT_PUBLIC_SITE_URL` in the hosting environment; without it, OG URLs point to localhost
  and link previews break.
- Title: brand + primary value, ≤ 60 chars. When adding more pages, switch the layout to
  `title: { default: "...", template: "%s | Nexo" }` and give each page its own title.
- Description: 140–160 chars, pt-BR, says what's offered and to whom, includes the main term
  naturally.
- Add `alternates: { canonical: "/" }` (and per page), so duplicate URLs consolidate.
- OG image: `public/og.jpg`, 1200×630, black background, symbol + NEXO + tagline, ~25 KB.
  To regenerate it, render an HTML page with the real Sora font in headless Edge and convert
  to JPG with sharp (see references) — sharp alone can't render Sora text.

## Structured data (JSON-LD)

Confirmed facts: serves Cascavel, Paraná; contact gwrubel@hotmail.com; GitHub and LinkedIn
are the founder's personal profiles (so they go in `Person.sameAs`, not the organization's).
Extend from there (template in references). Only use **true** information — ask the user
for anything missing (WhatsApp, CNPJ/razão social, company social profiles). Invented data
(fake ratings, addresses, reviews) can get the site penalized and misleads visitors. If an
FAQ section is added, also add `FAQPage` with the exact same Q&A text visible on the page.

## On-page content

- The `<h1>` should contain the core offer in plain Portuguese. Headlines can be creative,
  but make sure the main terms appear somewhere prominent (h1, eyebrow, first paragraph,
  section h2s or the tags under each service).
- Target terms (confirm with the user, they know their clients): desenvolvimento de software
  sob medida, sistema web personalizado, automação de processos, integração de sistemas /
  APIs, criação de sites, MVP — plus local variants ("em Cascavel", "no Paraná").
- Write for people first: natural sentences, no keyword stuffing.
- A single page ranks mainly for one theme. Anchor sections (`#servicos`) don't rank
  separately. If the user wants to rank for several services, suggest dedicated pages like
  `app/servicos/automacao-de-processos/page.tsx` with their own metadata and content —
  explain the trade-off and let them decide before creating pages.
- Real cases are the strongest content for both SEO and conversion. The Projects section
  has real cases (gestão de preços de medicamentos, Schinemann, MecList); each new case
  should state problem, solution and a true result.

## Performance (Core Web Vitals)

- Images: use `next/image` with explicit `width`/`height` and a `sizes` matching the rendered
  width; above-the-fold images get `preload` (Next 16 deprecated `priority`). Keep `alt` text
  meaningful in pt-BR. Project screenshots in `public/projetos/` are large — never reference
  them with a plain `<img>`.
- The logo is inline SVG (`NexoMark`), so it costs no request — keep it that way.
- Keep sections as server components; only interactive pieces need `"use client"`.
- Avoid layout shift: fixed dimensions for images and visual blocks.

## Verify before finishing

1. `npm run build` passes; the route stays static (`○`) unless there's a reason otherwise.
2. `npm run start`, then check the rendered `<head>` (view-source or
   `curl http://localhost:3000`) for title, description, canonical, OG tags and JSON-LD.
3. Open `/sitemap.xml` and `/robots.txt` locally.
4. Suggest post-deploy steps: validate JSON-LD in Google's Rich Results Test, run Lighthouse
   (mobile), register the domain in Google Search Console and submit the sitemap, and test
   the link preview by pasting the URL in WhatsApp/LinkedIn.
