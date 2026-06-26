import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import obrasData from "@/content/obras.json";

export const metadata: Metadata = {
  title: "Obras Concluídas",
  description: "Portfólio de grandes obras e projetos de engenharia civil, montagem industrial e infraestrutura da MASTERTOP EMPREENDIMENTOS.",
};

export default function Obras() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <section className="bg-mastertop-dark/40 backdrop-blur-md border-b border-white/10 pt-64 pb-20 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-medium mb-6 text-white animate-fade-in-up">Obras Concluídas</h1>
            <p className="text-lg text-slate-400 font-sans animate-fade-in-up delay-100">
              Nosso portfólio reflete a nossa capacidade de entregar projetos complexos com excelência.
            </p>
          </div>
        </section>

        <section className="py-24 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {obrasData.map((obra) => (
                <div key={obra.id} className="bg-mastertop-dark/50 border border-white/10 rounded-2xl overflow-hidden hover:border-mastertop-gold/30 transition-all duration-500 group">
                  <div className="h-64 relative overflow-hidden">
                    <img 
                      src={obra.image} 
                      alt={obra.title} 
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-subheading font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10">
                        {obra.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-mastertop-gold transition-colors">
                      {obra.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
