import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsCounter from "@/components/StatsCounter";
import ClientsSection from "@/components/ClientsSection";
import homeData from "@/content/home.json";

export const metadata: Metadata = {
  title: "Quem Somos",
  description: "Conheça a história, a missão, a visão, os valores, o compromisso com a sustentabilidade e a cultura de segurança da MASTERTOP EMPREENDIMENTOS.",
};

export default function Sobre() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <section className="bg-mastertop-blue/20 backdrop-blur-md border-b border-white/10 pt-64 pb-20 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-medium mb-6 text-white animate-fade-in-up">Quem Somos</h1>
            <p className="text-lg text-slate-300 font-sans animate-fade-in-up delay-100">
              Conheça a história e os valores que construíram a MASTERTOP EMPREENDIMENTOS ao longo das décadas.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6 text-white animate-fade-in-up">
                  Nossa História
                </h2>
                <div className="space-y-4 font-sans text-slate-300 text-lg leading-relaxed">
                  <p className="animate-fade-in-up delay-100">
                    A MASTERTOP EMPREENDIMENTOS nasceu com o propósito de transformar a infraestrutura nacional através da engenharia de ponta.
                    Desde a nossa fundação, temos sido pioneiros em soluções complexas para os setores automotivo, petrolífero e civil.
                  </p>
                  <p className="animate-fade-in-up delay-200">
                    Nossa equipe é formada por especialistas que compartilham a mesma visão: entregar projetos que aliam extrema segurança,
                    sustentabilidade e inovação tecnológica. Nossas operações geotérmicas e construções elétricas são referência no mercado.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl h-96 relative overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
                  alt="Construção Civil MASTERTOP"
                  className="w-full h-full object-cover animate-fade-in"
                />
                <div className="absolute inset-0 bg-mastertop-dark/10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section id="missao" className="py-20 bg-mastertop-blue/20 backdrop-blur-md border-y border-white/10 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-heading font-bold text-white animate-fade-in-up">
                Diretrizes Estratégicas
              </h2>
              <p className="text-slate-400 font-sans mt-4 animate-fade-in-up delay-100">
                Os pilares fundamentais que norteiam nossas decisões diárias e projetos futuros.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all animate-scale-in">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-mastertop-gold mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m3 12 18 0"/><path d="M12 3a18.25 18.25 0 0 0-4 9 18.25 18.25 0 0 0 4 9"/><path d="M12 3a18.25 18.25 0 0 1 4 9 18.25 18.25 0 0 1-4 9"/></svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-4">Missão</h3>
                <p className="text-slate-400 font-sans text-sm leading-relaxed">
                  Prover soluções inovadoras e de alto padrão em engenharia e infraestrutura, gerando valor real para clientes, colaboradores e sociedade.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all animate-scale-in delay-100">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-mastertop-gold mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-4">Visão</h3>
                <p className="text-slate-400 font-sans text-sm leading-relaxed">
                  Ser reconhecida nacionalmente como referência de solidez, sustentabilidade e inovação tecnológica na execução de grandes empreendimentos.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all animate-scale-in delay-200">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-mastertop-gold mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-4">Valores</h3>
                <p className="text-slate-400 font-sans text-sm leading-relaxed">
                  Segurança em primeiro lugar, qualidade inegociável, ética transparente, inovação constante e sustentabilidade ativa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sustentabilidade */}
        <section id="sustentabilidade" className="py-20 bg-transparent scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="rounded-2xl h-96 relative overflow-hidden shadow-lg md:order-2">
                <img
                  src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=800&auto=format&fit=crop"
                  alt="Sustentabilidade e Natureza"
                  className="w-full h-full object-cover animate-fade-in"
                />
                <div className="absolute inset-0 bg-emerald-950/10"></div>
              </div>
              <div className="md:order-1">
                <h2 className="text-emerald-700 font-subheading text-sm font-bold tracking-widest uppercase mb-3 animate-fade-in-up">Sustentabilidade</h2>
                <h3 className="text-3xl font-heading font-bold mb-6 bg-gradient-to-r from-emerald-800 to-teal-600 bg-clip-text text-transparent animate-fade-in-up delay-100">
                  Compromisso com o nosso planeta
                </h3>
                <p className="text-slate-300 font-sans text-lg leading-relaxed mb-6 animate-fade-in-up delay-200">
                  Planejamos e executamos nossas obras de modo a minimizar os impactos socioambientais. Adotamos práticas rígidas de gestão de resíduos, reciclagem de materiais em canteiros de obra e especificação de soluções ecoeficientes que garantam construções sustentáveis para as futuras gerações.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Inovação */}
        <section id="inovacao" className="py-20 bg-mastertop-blue/20 backdrop-blur-md border-y border-white/10 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="rounded-2xl h-96 relative overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop"
                  alt="Tecnologia e Engenharia Moderna"
                  className="w-full h-full object-cover animate-fade-in"
                />
                <div className="absolute inset-0 bg-mastertop-blue/10"></div>
              </div>
              <div>
                <h2 className="text-mastertop-blue font-subheading text-sm font-bold tracking-widest uppercase mb-3 animate-fade-in-up">Inovação</h2>
                <h3 className="text-3xl font-heading font-bold mb-6 bg-gradient-to-r from-mastertop-blue via-slate-800 to-mastertop-gold bg-clip-text text-transparent animate-fade-in-up delay-100">
                  Liderando a transformação digital
                </h3>
                <p className="text-slate-300 font-sans text-lg leading-relaxed mb-6 animate-fade-in-up delay-200">
                  Utilizamos metodologias avançadas como modelagem BIM, inteligência de dados aplicada ao planejamento e maquinário de altíssima precisão. Isso reduz prazos de entrega, eleva os padrões de controle de qualidade e garante exatidão em cada etapa do projeto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Clientes */}
        <ClientsSection />

        <StatsCounter stats={homeData.stats} />
      </main>
      <Footer />
    </>
  );
}

