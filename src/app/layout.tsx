import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Octant - Mídia Digital | Escale sua marca na era digital",
  description: "Especialistas em Marketing Digital, Gestão de Tráfego, Branding e Performance.",
};

import { CookieConsent } from "../components/layout/CookieConsent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${inter.variable}`}>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
