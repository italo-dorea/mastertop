import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Obras Concluídas",
  description: "Portfólio de grandes obras e projetos de engenharia civil, montagem industrial e infraestrutura da MASTERTOP EMPREENDIMENTOS.",
};

const obras = [
  { 
    id: 1, 
    title: "Complexo de Estacionamento Estrutural", 
    desc: "Estrutura de 5 andares com capacidade para 2000 veículos, utilizando concreto armado protendido de alta resistência.", 
    category: "Civil",
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=600&auto=format&fit=crop"
  },
  { 
    id: 2, 
    title: "Instalação Subterrânea Delta", 
    desc: "Instalação subterrânea de alta segurança projetada para data center resiliente com controle de temperatura redundante.", 
    category: "Engenharia",
    image: "https://images.unsplash.com/photo-1508459855340-fb63ac591728?q=80&w=600&auto=format&fit=crop"
  },
  { 
    id: 3, 
    title: "Modernização da Plataforma P-75", 
    desc: "Upgrade completo do sistema de distribuição elétrica e controle industrial offshore para aumento de eficiência operacional.", 
    category: "Óleo & Gás",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop"
  },
  { 
    id: 4, 
    title: "Usina Geotérmica Piloto Alpha", 
    desc: "Desenvolvimento e construção civil de usina piloto para geração de energia geotérmica sustentável.", 
    category: "Energia",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop"
  },
];

export default function Obras() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-mastertop-blue/10 via-slate-50/80 to-mastertop-gold/15 backdrop-blur-md border-b border-slate-200/50 pt-64 pb-20 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-medium mb-6 bg-gradient-to-r from-mastertop-blue via-slate-800 to-mastertop-gold bg-clip-text text-transparent animate-fade-in-up">Obras Concluídas</h1>
            <p className="text-lg text-slate-600 font-sans animate-fade-in-up delay-100">
              Nosso portfólio reflete a nossa capacidade de entregar projetos complexos com excelência.
            </p>
          </div>
        </section>

        <section className="py-24 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {obras.map(obra => (
                <div key={obra.id} className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:bg-white hover:border-mastertop-gold/50 hover:shadow-md transition-all duration-300 group">
                  <div className="h-64 relative overflow-hidden">
                    <img 
                      src={obra.image} 
                      alt={obra.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-mastertop-dark/5 group-hover:bg-mastertop-dark/20 transition-colors"></div>
                  </div>
                  <div className="p-8">
                    <span className="text-sm font-subheading text-mastertop-gold uppercase tracking-wider font-semibold">
                      {obra.category}
                    </span>
                    <h3 className="mt-2 text-2xl font-heading font-bold text-mastertop-dark">
                      {obra.title}
                    </h3>
                    <p className="mt-4 text-gray-600 font-sans line-clamp-3">
                      {obra.desc}
                    </p>
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
