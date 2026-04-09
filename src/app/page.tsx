import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VillageBoard from "@/components/VillageBoard";
import ProductGallery from "@/components/ProductGallery";
import ArtisanStandard from "@/components/ArtisanStandard";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const siteUrl = "https://www.newyorksash-cooperstown.com";
  const primaryImage = `${siteUrl}/images/IMG_1049.jpg`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "New York Sash | Cooperstown & the Leatherstocking Region",
        inLanguage: "en-US",
        publisher: {
          "@id": `${siteUrl}/#localbusiness`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "New York Sash | Custom Window & Door Replacements in Cooperstown & the Leatherstocking Region, NY",
        description:
          "New York Sash brings 35+ years of craftsmanship to Cooperstown and the Leatherstocking Region. ENERGY STAR® certified, custom-made to fit, and installed by our own in-house team — never subcontractors.",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#localbusiness`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: primaryImage,
          width: 1200,
          height: 630,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${siteUrl}/#localbusiness`,
        name: "New York Sash",
        url: siteUrl,
        image: [primaryImage],
        telephone: "+1-315-624-7344",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+1-315-624-7344",
            contactType: "customer service",
            areaServed: "US-NY",
            availableLanguage: ["English"],
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "349 Oriskany Blvd",
          addressLocality: "Whitesboro",
          addressRegion: "NY",
          postalCode: "13492",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 42.7006,
          longitude: -74.9243,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "08:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "13:00",
          },
        ],
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: "The Leatherstocking Region",
          },
          {
            "@type": "City",
            name: "Cooperstown",
          },
          {
            "@type": "AdministrativeArea",
            name: "Central New York",
          },
        ],
        brand: {
          "@type": "Brand",
          name: "New York Sash",
        },
        sameAs: [
          "https://www.newyorksash.com",
          "https://newyorksashoffers.com/",
          "https://cnyopenhouse.com/",
          "https://uticateddybeartoss.com/",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Window and Door Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Replacement Windows",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Entry & Patio Doors",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Storm Doors",
              },
            },
          ],
        },
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/#services`,
        name: "Custom window and door replacement",
        url: `${siteUrl}/#products`,
        provider: {
          "@id": `${siteUrl}/#localbusiness`,
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Central New York",
        },
        serviceType: ["Replacement Windows", "Entry & Patio Doors", "Storm Doors"],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <VillageBoard />
        <ProductGallery />
        <Testimonials />
        <ArtisanStandard />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
