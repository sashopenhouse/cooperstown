import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VillageBoard from "@/components/VillageBoard";
import ProductGallery from "@/components/ProductGallery";
import ArtisanStandard from "@/components/ArtisanStandard";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
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
