import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seu Nome — Designer & Desenvolvedor(a)",
  description:
    "Portfólio de projetos, habilidades e experiências digitais de Seu Nome.",
};

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
