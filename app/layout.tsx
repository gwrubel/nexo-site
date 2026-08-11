import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Wrubel Labs — Soluções Digitais";
const description =
  "Laboratório de software para criar sistemas web, automações e produtos digitais com performance, estratégia e resultado.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "portfolio-criativo-0826.gwrubel.chatgpt.site";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const origin = `${protocol}://${host}`;
  const socialImage = `${origin}/og.png`;

  return {
    metadataBase: new URL(origin),
    title,
    description,
    openGraph: {
      title,
      description,
      url: origin,
      siteName: "Wrubel Labs",
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: socialImage,
          width: 1731,
          height: 909,
          alt: "Wrubel Labs — Build, Code, Solve",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
