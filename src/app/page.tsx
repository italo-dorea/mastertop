import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import StatsCounter from "@/components/StatsCounter";
import ServicesGrid from "@/components/ServicesGrid";
import ContactCTA from "@/components/ContactCTA";
import ClientsSection from "@/components/ClientsSection";
import PhotoGallery from "@/components/PhotoGallery";
import LocationSection from "@/components/LocationSection";

import homeData from "@/content/home.json";
import servicosData from "@/content/servicos.json";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero 
          title={homeData.hero.title}
          subtitle={homeData.hero.subtitle}
          ctaText={homeData.hero.ctaText}
          ctaLink={homeData.hero.ctaLink}
        />
        
        {/* 2. Sobre / Excelência */}
        <AboutSection />
        
        {/* 3. Atuação / Serviços */}
        <div className="bg-slate-50/85 backdrop-blur-md border-y border-slate-200/50 py-2">
          <ServicesGrid services={servicosData} />
        </div>
        
        {/* 4. Estatísticas */}
        <StatsCounter stats={homeData.stats} />
        
        {/* 5. Contato CTA ("Vamos conversar?") */}
        <ContactCTA />

        {/* 6. Localização */}
        <LocationSection />
        
        {/* 7. Clientes */}
        <ClientsSection />
        
        {/* 8. Galeria */}
        <PhotoGallery />
        
      </main>
      <Footer />
    </>
  );
}
