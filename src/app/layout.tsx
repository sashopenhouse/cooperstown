import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "New York Sash | Historic Window & Door Replacements in Cooperstown, NY",
  description:
    "New York Sash brings 35+ years of Central New York craftsmanship to Cooperstown's historic homes. ENERGY STAR® certified, custom-made to fit, and installed by our own in-house team — never subcontractors.",
  keywords:
    "New York Sash Cooperstown, historic home windows 13326, period correct windows Cooperstown NY, replacement windows Otsego County, New York Sash historic homes, custom windows Central New York",
  openGraph: {
    title: "New York Sash | Historic Window & Door Replacements in Cooperstown, NY",
    description:
      "Preserving Cooperstown's Historic Character. Architectural-grade window and door replacements by New York Sash — serving Central New York since 1989.",
    type: "website",
    url: "https://www.newyorksash.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
