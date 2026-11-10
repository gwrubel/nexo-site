// Defina NEXT_PUBLIC_SITE_URL no ambiente de produção (ex.: https://nexo.dev.br).
// Sem ela, na Vercel usa o domínio de produção do projeto (ex.: nexo-site.vercel.app).
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000")
).replace(/\/$/, "");

// O Google só indexa o site quando NEXT_PUBLIC_SITE_INDEXABLE=true (defina no lançamento).
export const siteIndexable = process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true";

export const site = {
  name: "Nexo",
  tagline: "Conecte · Crie · Evolua",
  description:
    "Nexo é o ponto onde ideias, pessoas e tecnologia se conectam para virar resultado.",
  founder: "Gabriel Wrubel",
  email: "gwrubel@hotmail.com",
  city: "Cascavel",
  region: "PR",
  regionName: "Paraná",
  github: "https://github.com/gwrubel",
  linkedin: "https://www.linkedin.com/in/gabriel-wrubel-640a89247/",
};
