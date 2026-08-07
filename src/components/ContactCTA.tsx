import { Phone, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="bg-mastertop-dark/80 border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative hover:border-white/20 transition-all duration-500">
            
            {/* Background pattern/overlay */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 p-10 md:p-16 gap-12 relative z-10">
              <ScrollReveal direction="left" delay={100}>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 hover:text-mastertop-light transition-colors duration-300">Vamos conversar?</h2>
                <p className="text-slate-400 font-sans text-lg mb-8 max-w-md">
                  Quer saber mais sobre nossas entregas, tirar dúvidas ou propor uma parceria? Estamos à disposição para ouvir você.
                </p>
                <h3 className="text-xl font-heading text-mastertop-gold font-bold mb-2">Uma reputação construída com transparência e eficácia</h3>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={200}>
                <div className="flex flex-col justify-center space-y-6">
                  <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl hover:-translate-y-1 hover:bg-white/10 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-mastertop-gold shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone size={24} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-slate-500 text-sm font-sans mb-1 uppercase tracking-wider">Telefones de Contato</div>
                      <a href="tel:+5571999454369" className="text-white font-heading font-bold text-lg sm:text-xl hover:text-mastertop-gold transition-colors">+55 (71) 99945-4369</a>
                      <a href="tel:+557132171471" className="text-white font-heading font-bold text-lg sm:text-xl hover:text-mastertop-gold transition-colors">+55 (71) 3217-1471</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl hover:-translate-y-1 hover:bg-white/10 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-mastertop-gold shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Mail size={24} />
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <div className="text-slate-500 text-sm font-sans mb-1 uppercase tracking-wider">Envie um e-mail</div>
                      <a href="mailto:comercial@mastertopempreendimentos.com.br" className="text-white font-heading font-bold text-xs sm:text-sm hover:text-mastertop-gold transition-colors break-all">comercial@mastertopempreendimentos.com.br</a>
                      <a href="mailto:carlosaraujo@mastertopempreendimentos.com.br" className="text-white font-heading font-bold text-xs sm:text-sm hover:text-mastertop-gold transition-colors break-all">carlosaraujo@mastertopempreendimentos.com.br</a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
