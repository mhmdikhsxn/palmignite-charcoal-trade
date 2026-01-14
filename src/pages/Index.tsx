import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";

import ExportSection from "@/components/ExportSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-[Onest]">
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />

        <ExportSection />
        <GallerySection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
