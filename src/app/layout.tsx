import type { Metadata } from "next";
import Script from "next/script";
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
  title: "New York Sash | Custom Window & Door Replacements in Cooperstown & the Leatherstocking Region, NY",
  description:
    "New York Sash brings 35+ years of craftsmanship to Cooperstown and the Leatherstocking Region. ENERGY STAR® certified, custom-made to fit, and installed by our own in-house team — never subcontractors.",
  metadataBase: new URL("https://www.newyorksash-cooperstown.com"),
  keywords:
    "New York Sash Cooperstown, window replacement Cooperstown NY, Leatherstocking Region window replacement, custom replacement windows, replacement windows Otsego County, New York Sash, custom windows Central New York",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "New York Sash | Custom Window & Door Replacements in Cooperstown & the Leatherstocking Region, NY",
    description:
      "Preserving Cooperstown and the Leatherstocking Region's original character. Architectural-grade window and door replacements by New York Sash — serving Central New York since 1989.",
    type: "website",
    url: "https://www.newyorksash-cooperstown.com",
    siteName: "New York Sash | Cooperstown & the Leatherstocking Region",
    locale: "en_US",
    images: [
      {
        url: "/images/IMG_1049.jpg",
        width: 1200,
        height: 630,
        alt: "Federal-style home with New York Sash sign on the lawn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New York Sash | Custom Window & Door Replacements in Cooperstown & the Leatherstocking Region, NY",
    description:
      "Preserving Cooperstown and the Leatherstocking Region's original character with architectural-grade window and door replacements.",
    images: ["/images/IMG_1049.jpg"],
  },
  icons: {
    icon: "/nys-favicon.png",
    shortcut: "/nys-favicon.png",
    apple: "/nys-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-69QYXR8DBP"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-69QYXR8DBP');`}
        </Script>
        {children}
      </body>
    </html>
  );
}
