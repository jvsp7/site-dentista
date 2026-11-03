import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { CLINIC, SITE_URL } from "@/lib";
import "./globals.css";

// Fontes auto-hospedadas: Plus Jakarta Sans (texto) + Cormorant Garamond (títulos)
const sans = localFont({
  src: [
    { path: "../fonts/plus-jakarta-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/plus-jakarta-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/plus-jakarta-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});
const serif = localFont({
  src: [
    { path: "../fonts/cormorant-garamond-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin-500-italic.woff2", weight: "500", style: "italic" },
  ],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const title = "Dra. Malu Casini Bigi | Dentista em Ribeirão Pires";
const description =
  "Dra. Maria Luiza Casini Bigi, cirurgiã-dentista (CROSP 177386) no centro de Ribeirão Pires. Consulta, prevenção, clareamento, resina, cirurgia oral e prótese. Agende pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: CLINIC.name,
  authors: [{ name: CLINIC.doctor }],
  keywords: [
    "dentista Ribeirão Pires",
    "cirurgiã-dentista Ribeirão Pires",
    "clareamento dental Ribeirão Pires",
    "restauração em resina",
    "extração de dente",
    "prótese dentária",
    "Dra. Malu Casini Bigi",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: CLINIC.name,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fcfcfa",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${serif.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
