# SEO templates for Nexo

Business facts live in `lib/site.ts` — import `siteUrl` / `site` from `@/lib/site` instead of
repeating them. Already implemented: `app/sitemap.ts`, `app/robots.ts`, JSON-LD in
`app/layout.tsx`, Sora via `next/font`, `app/icon.svg`, `app/apple-icon.png`,
`public/nexo-logo.png`, `public/og.jpg`. The templates below are for extending them.

## app/sitemap.ts (add one entry per real page)

```ts
import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    // { url: `${siteUrl}/servicos/automacao-de-processos`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
```

## Metadata for a new page

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automação de processos em Cascavel", // layout template adds " | Nexo"
  description: "…140–160 caracteres, pt-BR, com o termo principal…",
  alternates: { canonical: "/servicos/automacao-de-processos" },
};
```

Remember to switch the root layout to `title: { default: "Nexo — Software sob medida em
Cascavel, PR", template: "%s | Nexo" }` when the first extra page is created.

## JSON-LD

The live graph is in `app/layout.tsx` (`Person` + `Organization` + `ProfessionalService`).
When adding fields, use only confirmed facts. Always serialize with:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
/>
```

The `.replace(/</g, "\\u003c")` prevents a `</script>` inside any string from breaking out of
the tag.

### FAQPage (only if a visible FAQ section exists)

```ts
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};
```

Import `faqItems` from the FAQ section's data so page text and structured data never diverge.

## next/image for screenshots

```tsx
import Image from "next/image";

<Image
  src="/projetos/exemplo.png"
  alt="Descrição do que aparece na tela, em pt-BR"
  width={1440} // intrinsic size of the file
  height={810}
  sizes="(max-width: 820px) 100vw, 60vw" // real rendered width, so Next serves a small file
  // preload — Next 16 replacement for `priority`; only for above-the-fold images
/>
```

Get the intrinsic size with sharp:
`node -e "require('sharp')('public/projetos/x.png').metadata().then(m=>console.log(m.width,m.height))"`.

## Regenerating the Open Graph image (public/og.jpg)

sharp can't render the Sora font, so render HTML in headless Edge instead:

1. Copy `assets/og.html` (1200×630, black, symbol + NEXO + tagline + footer line) to a temp
   folder and edit the text if needed.
2. `node scripts/render-html.mjs "file:///C:/caminho/og.html" C:/caminho/og 1200 630`
   — writes `og-hero.png` (viewport) and `og-full.png`.
3. Convert: `node -e "require('sharp')('C:/caminho/og-hero.png').jpeg({quality:88,mozjpeg:true}).toFile('public/og.jpg')"`
4. Look at the result before shipping. Keep it under ~300 KB (WhatsApp drops large previews).

The same script captures any public page (used for the Schinemann screenshot in
`public/projetos/`): pass the URL, an output prefix and the viewport size.
