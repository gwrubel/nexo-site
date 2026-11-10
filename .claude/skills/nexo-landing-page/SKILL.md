---
name: nexo-landing-page
description: Build, edit or refine sections of the Nexo landing page (software studio in Cascavel, PR) (Next.js + CSS Modules, pt-BR) following the site's brand, component structure, motion system and copy voice. Use this whenever the user asks to create a new section (depoimentos, FAQ, processo, cases, preços, CTA), change the hero, rewrite copy, adjust layout/responsiveness, add icons or animations, or otherwise touch anything under app/ or components/ of this site — even if they just say "melhora essa parte", "cria uma seção de…" or "deixa mais bonito".
---

# Nexo — landing page

The site is a single-page landing for **Nexo**, a software studio in Cascavel, PR, founded by
Gabriel Wrubel, that builds custom systems, automations, sites and MVPs. Brand idea: "Nexo é o
ponto onde ideias, pessoas e tecnologia se conectam para virar resultado." Tagline:
**Conecte · Crie · Evolua**. The page's job is to make a business owner understand what is
offered, trust it, and click through to `#contato`. Every change should serve that path.

The visual identity reference is the "Nexo — Identidade Visual" board (monochrome palette,
Sora, the "N." symbol). Brand facts (name, tagline, description, founder, email, city,
social links) live in `lib/site.ts` — import `site` instead of hard-coding them.

## Stack and where things live

- Next.js App Router, React 19, TypeScript, **CSS Modules** (Tailwind is installed only for its
  reset; don't write utility classes — the whole site is CSS Modules and mixing styles makes it
  harder to maintain).
- `app/page.tsx` only composes sections in order. Keep logic and content out of it.
- `app/layout.tsx` holds metadata; `app/globals.css` holds tokens and base styles.
- Sections: `components/sections/<Name>/<Name>Section.tsx` + `<Name>Section.module.css`.
- Layout: `components/layout/Header`, `components/layout/Footer`.
- Shared: `components/shared/SectionLabel`, `ActionLink` (`variant="primary" | "secondary"`),
  `Brand` (lockup: symbol | NEXO; `compact` = big symbol only) and `Brand/NexoMark`
  (the bare SVG symbol; uses `currentColor`, pass `title` when it carries meaning).
- Imports use the `@/` alias. Components are **named exports** (`export function FooSection`).
- Components are server components by default. Add `"use client"` only when the component
  itself needs state or browser APIs (like `Hero/LabVisual.tsx`); keeping everything else on
  the server keeps the JS bundle small.

## Anatomy of a section

Follow the pattern the existing sections use (read `Services/ServicesSection.tsx` as the
reference implementation before creating a new one):

```tsx
import { SectionLabel } from "@/components/shared/SectionLabel/SectionLabel";
import styles from "./FaqSection.module.css";

const items = [ /* content as a typed array at the top of the file */ ];

export function FaqSection() {
  return (
    <section className={styles.faq} id="faq">
      <div className={styles.intro} data-reveal>
        <div>
          <SectionLabel>05 / Dúvidas</SectionLabel>
          <h2>
            Primeira linha curta.
            <br />
            <em>Segunda linha em destaque.</em>
          </h2>
        </div>
        <p>Parágrafo de apoio em tom direto, 1–2 frases.</p>
      </div>
      {/* grid / list of cards, each with data-reveal data-reveal-delay={index + 1} */}
    </section>
  );
}
```

Checklist when adding a section:
1. `id` is a short pt-BR slug without accents (`inicio`, `servicos`, `projetos`, `sobre`, `contato`).
2. `SectionLabel` numbering is sequential (`01 / Serviços` … `04 / Contato`). Inserting a
   section means renumbering the ones after it.
3. Register it in `app/page.tsx` in the right order.
4. If it's a main destination, add the link to the `Header` nav (the nav highlight works
   automatically for any `main section[id]`).
5. Content lives in a data array at the top of the file, not hard-coded repeated JSX.

## Visual language

Tokens in `app/globals.css` — use them instead of new hex values:

| Token | Use |
|---|---|
| `--black` `--graphite` `--gray-dark` `--gray` `--gray-light` `--white` | the brand palette: #000, #151515, #3A3A3A, #8A8A8A, #D4D4D4, #FFF |
| `--night` / `--night-deep` | page background (pure black) |
| `--surface` / `--surface-soft` | cards, panels (#0B0B0B / #151515) |
| `--accent` | emphasis = white (there is **no** color accent) |
| `--text` / `--light` / `--muted` / `--mid` | text hierarchy (white → #D4D4D4 → #9A9A9A → #8A8A8A) |
| `--line` | 1px borders and dividers (#262626) |
| `--shell` | section width: `width: var(--shell); margin: 0 auto;` |
| `--button-radius` | 4px radius |

The brand is **strictly monochrome** — don't reintroduce blue or any hue. Contrast, weight,
scale and motion do the work color used to do. The light section (Projects) uses the
identity's light palette: background #F2F2F2, panels #FFF, lines #D6D6D6, text #000,
secondary #6E6E6E / #5F5F5F.

Recurring patterns:
- Font is Sora. Headlines are big and tight: `font-size: clamp(2.4rem, 4.2vw, 4.8rem);
  line-height: 1; letter-spacing: -0.055em; font-weight: 700`.
- `<em>` inside headings is the second beat in gray: `color: var(--mid); font-style: normal`
  (#6E6E6E on the light section).
- Primary button: white fill, black text; secondary: transparent with `--mid` border, white on hover.
- Brand motif: small **squares** (the dot of the "N."), not circles — use them for bullets,
  status dots and decorative nodes. The identity's node graph (squares joined by thin lines)
  is a good decorative element.
- Wordmark: "NEXO" in Sora 700, uppercase, `letter-spacing: 0.32em` with `margin-right: -0.32em`.
- Small technical details (indexes, tags, IDs like `P.01`) use monospace at 9–10px, uppercase,
  with letter-spacing — this gives the "lab" feel.
- Cards: thin `--line` borders forming a grid, dark surface, soft white radial spotlight on
  hover using `--spot-x`/`--spot-y` (set by `data-tilt` / `data-spotlight`).
- Icons: `lucide-react` line icons (matches the identity's 1.5px strokes), `strokeWidth={1.6}`,
  `aria-hidden="true"`, colored `var(--light)`, white on hover.
- Section vertical padding ~72–96px; breakpoints used everywhere: **1100px, 820px, 560px**.
  Grids collapse 4 → 2 → 1 columns.

## Motion system (no new JS needed)

`components/interactions/SiteInteractions.tsx` wires everything globally through data
attributes. Use them rather than writing new observers or animation libraries — they already
respect `prefers-reduced-motion`.

- `data-reveal` — fades/slides in when scrolled into view.
- `data-reveal-delay="1".."4"` — staggers siblings (use `index + 1`, max 4).
- `data-tilt` — 3D tilt + spotlight on pointer move (standalone visuals). Don't use it on
  cards that share grid borders — tilting each cell breaks the 1px lines.
- `data-spotlight` — put it on a grid container; every direct child gets `--spot-x`/`--spot-y`
  (px, relative to itself) so a cursor glow can spill across neighbouring cards
  (see the Services cards).
- A component that declares its own `transition` on a `data-reveal` element must start the
  list with `var(--reveal-transition)`, otherwise the entrance animation is lost.
- `data-magnetic` — element follows the pointer slightly (small CTAs).

## Copy voice (pt-BR)

- First person **plural** — Nexo speaks as a studio: "desenvolvemos", "automatizamos",
  "retornamos", "conectamos". The About section says who founded it (Gabriel Wrubel), so the
  plural never hides that it's a small, close studio.
- Brand pillars (use them as the backbone of claims): **Conexão** (ligamos pessoas, ideias e
  sistemas), **Clareza** (código limpo, processos claros, entregas previsíveis), **Foco no
  cliente** (entendemos o problema antes de propor a solução), **Evolução** (tecnologia atual
  para o negócio crescer). Verbs of connection fit the name: conectar, ligar, unir.
- Talk about the client's business outcome (tempo, organização, menos trabalho manual,
  crescimento), not about technologies. Tech names belong in tags, not headlines.
- Headlines: two short beats, the second in `<em>` ("Código com propósito. / Solução para evoluir.").
- Supporting paragraphs: 1–2 sentences, plain words a non-technical owner understands.
- Every section should make the next step obvious; the conversion target is `#contato`
  (primary `ActionLink`). One primary CTA per view; secondary actions use `variant="secondary"`.
- **Don't invent** clients, testimonials, numbers or results. The Projects section holds real
  cases (gestão de preços de medicamentos, Schinemann, MecList — whose gallery has the admin, mechanic and client screens
  in public/projetos); when more proof is needed, ask the user for real cases or
  leave a clearly marked placeholder.

## Accessibility

- Exactly one `<h1>` (in the hero). Each section gets an `<h2>`, cards get `<h3>`.
- Decorative visuals get `aria-hidden="true"`; meaningful images get a pt-BR `alt`.
- Lists of tags use `<ul>` with an `aria-label`.
- Keep `--muted` text at ≥ 13px on dark backgrounds; smaller text should use `--light`.

## Gotcha: accents in files

Files are UTF-8. Windows PowerShell 5.1 `Get-Content` shows accents as garbage (`SoluÃ§Ãµes`)
— that's a display issue, not file corruption. Read files with the Read tool and never "fix"
those characters. When writing files, write them as UTF-8.

## Verify before finishing

1. `npm run dev` and look at the page at ~375px, ~820px and ~1440px widths. Check for
   horizontal scroll (`document.documentElement.scrollWidth > innerWidth`).
2. `npm run lint` and `npm run build` must pass.
3. Summarize what changed and point out any copy that needs the user's real information.
