import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sora",
});

const title = "Nexo — Software sob medida em Cascavel, PR";
const description =
  "Desenvolvimento de software sob medida em Cascavel (PR): sistemas web, automação de processos, integrações e sites para empresas que querem crescer.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  authors: [{ name: site.founder, url: site.linkedin }],
  openGraph: {
    title,
    description,
    url: "/",
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#founder`,
      name: site.founder,
      jobTitle: "Desenvolvedor de software",
      sameAs: [site.github, site.linkedin],
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: site.name,
      url: siteUrl,
      logo: `${siteUrl}/nexo-logo.png`,
      slogan: site.tagline,
      email: site.email,
      founder: { "@id": `${siteUrl}/#founder` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: site.name,
      url: siteUrl,
      image: `${siteUrl}/og.jpg`,
      email: site.email,
      description,
      parentOrganization: { "@id": `${siteUrl}/#organization` },
      address: {
        "@type": "PostalAddress",
        addressLocality: site.city,
        addressRegion: site.region,
        addressCountry: "BR",
      },
      areaServed: [
        { "@type": "City", name: `${site.city}, ${site.regionName}` },
        { "@type": "State", name: site.regionName },
      ],
      knowsAbout: [
        "Desenvolvimento de software sob medida",
        "Sistemas web",
        "Automação de processos",
        "Integração de sistemas",
        "Criação de sites",
        "MVP",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={sora.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
