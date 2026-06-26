import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-mastertop-blue/30 rounded-full opacity-50 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <ScrollReveal direction="left" className="order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border border-white/10 group">
               <img
                 src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop"
                 alt="Canteiro de Obras MASTERTOP"
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-mastertop-blue/20 group-hover:bg-mastertop-blue/10 transition-colors duration-500"></div>
            </div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-mastertop-dark border border-white/10 text-white p-6 rounded-xl shadow-xl hidden md:block hover:scale-105 transition-transform duration-300">
               <div className="text-4xl font-bold font-heading leading-none mb-1 text-mastertop-gold">+20</div>
               <div className="text-sm font-sans font-medium uppercase tracking-wider text-slate-400">Anos de<br/>Experiência</div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150} className="order-1 lg:order-2">
            <h2 className="text-mastertop-gold font-subheading text-sm font-bold tracking-widest uppercase mb-3">Atuação</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 leading-tight text-white hover:text-mastertop-light transition-colors duration-300">
              Excelência em obras e serviços de engenharia
            </h3>
            
            <div className="space-y-4 font-sans text-slate-300 text-lg leading-relaxed mb-8">
              <p>
                Com soluções completas em construção civil e engenharia elétrica, a Mastertop Empreendimentos atua em todas as etapas dos projetos: da concepção à operação.
              </p>
              <p>
                Nossa expertise vai além da execução de obras. Atuamos com planejamento estratégico, gestão eficiente e comprometimento com resultados de impacto social e ambiental, garantindo excelência técnica, responsabilidade e transparência.
              </p>
            </div>
            
            <Link href="/institucional" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white hover:text-mastertop-dark hover:scale-105 transition-all duration-300 shadow-md group">
              Saiba mais
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
          
        </div>
      </div>
    </section>
  );
}
