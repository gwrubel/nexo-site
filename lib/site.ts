// Defina NEXT_PUBLIC_SITE_URL no ambiente de produção (ex.: https://nexo.dev.br).
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
  /\/$/,
  "",
);

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
