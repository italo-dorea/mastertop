import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import StatsCounter from "@/components/StatsCounter";
import ServicesGrid from "@/components/ServicesGrid";
import ObrasSectionAccordion from "@/components/ObrasSectionAccordion";
import ContactCTA from "@/components/ContactCTA";
import ClientsSection from "@/components/ClientsSection";
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

        {/* 3. Clientes */}
        <ClientsSection />
        
        {/* 4. Atuação / Serviços */}
        <div className="bg-mastertop-blue/20 backdrop-blur-md border-y border-white/10 py-2">
          <ServicesGrid services={servicosData} />
        </div>
        
        {/* 5. Estatísticas */}
        <StatsCounter stats={homeData.stats} />

        {/* 6. Obras (Accordion) */}
        <div className="bg-mastertop-blue/20 backdrop-blur-md border-y border-white/10">
          <ObrasSectionAccordion />
        </div>
        
        {/* 7. Contato CTA ("Vamos conversar?") */}
        <ContactCTA />

        {/* 8. Localização */}
        <LocationSection />
        
      </main>
      <Footer />
    </>
  );
}
