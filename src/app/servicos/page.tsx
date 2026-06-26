import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import servicesData from "@/content/servicos.json";
import { Bolt, Globe, Car, Building2, Wrench } from "lucide-react";

const IconMap: Record<string, React.ElementType> = {
  rig: Building2,
  bolt: Bolt,
  globe: Globe,
  car: Car,
  default: Wrench,
};

export const metadata: Metadata = {
  title: "Serviços",
  description: "Serviços especializados em engenharia elétrica, infraestrutura para plataformas petrolíferas, soluções geotérmicas e tecnologia automobilística.",
};

export default function Servicos() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <section className="bg-mastertop-blue/20 backdrop-blur-md border-b border-white/10 pt-64 pb-20 text-center">
          <div className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-4xl md:text-5xl font-heading font-medium mb-6 text-white animate-fade-in-up">Serviços</h1>
            <p className="text-lg text-slate-400 font-sans animate-fade-in-up delay-100">
              Soluções completas com excelência e qualidade para os mais variados setores.
            </p>
          </div>
        </section>

        <section className="py-24 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicesData.map((service, index) => {
                const IconComponent = IconMap[service.icon] || IconMap.default;
                return (
                  <div 
                    key={service.id} 
                    className={`flex gap-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-mastertop-gold/30 transition-all duration-300 animate-scale-in ${
                      index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : index === 2 ? 'delay-300' : 'delay-400'
                    }`}
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-mastertop-gold/10 border border-mastertop-gold/20 text-mastertop-gold">
                      <IconComponent className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 font-sans leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
