# Nexo

Site institucional da **Nexo** (Conecte · Crie · Evolua), estúdio de software sob medida em
Cascavel, PR, fundado por Gabriel Wrubel. Feito com Next.js (App Router), React e CSS Modules.

## Requisitos

- Node.js 20.9 ou superior

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

## Scripts

- `npm run dev`: servidor de desenvolvimento
- `npm run build`: build de produção
- `npm start`: roda o build de produção
- `npm run lint`: ESLint

## Estrutura

- `app/`: layout, página, estilos globais (paleta da marca em `globals.css`) e ícones
- `components/layout/`: Header e Footer
- `components/sections/`: seções da página (Hero, Serviços, Projetos, ...)
- `components/shared/`: componentes reutilizáveis, incluindo o símbolo da marca (`Brand/NexoMark.tsx`)
- `lib/site.ts`: nome, slogan, contato e redes, em um lugar só
- `public/`: logo, imagem de compartilhamento e prints dos projetos

## Identidade visual

- Paleta monocromática: `#000000`, `#151515`, `#3A3A3A`, `#8A8A8A`, `#D4D4D4`, `#FFFFFF`
- Tipografia: Sora
- Símbolo: "N" com ponto quadrado, em SVG (`NexoMark`), sempre na cor do texto

Ao publicar, defina `NEXT_PUBLIC_SITE_URL` com o domínio final para as tags Open Graph.
