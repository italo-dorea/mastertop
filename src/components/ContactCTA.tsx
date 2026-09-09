import { Phone, Mail, ArrowRight } from "lucide-react";
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
                <p className="hidden sm:block text-slate-400 font-sans text-lg mb-8 max-w-md">
                  Quer saber mais sobre nossas entregas, tirar dúvidas ou propor uma parceria? Estamos à disposição para ouvir você.
                </p>
                <h3 className="text-lg sm:text-xl font-heading text-mastertop-gold font-bold mb-2">Uma reputação construída com transparência e eficácia</h3>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={200}>
                <div className="flex flex-col justify-center divide-y divide-white/10 sm:divide-y-0 sm:space-y-6">
                  <a
                    href="https://wa.me/5571999454369"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 py-4 sm:gap-6 sm:p-6 sm:bg-white/5 sm:border sm:border-white/10 sm:rounded-2xl sm:hover:-translate-y-1 sm:hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 sm:w-14 sm:h-14 flex items-center justify-center text-mastertop-gold shrink-0 sm:bg-white/10 sm:border sm:border-white/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Phone size={18} className="sm:hidden" />
                      <Phone size={24} className="hidden sm:block" />
                    </div>
                    <div className="flex flex-col gap-0.5 sm:gap-1 min-w-0 flex-1">
                      <div className="text-slate-500 text-[0.7rem] sm:text-sm font-sans uppercase tracking-wide">WhatsApp</div>
                      <div className="text-white font-heading font-bold text-sm sm:text-xl group-hover:text-mastertop-gold transition-colors whitespace-nowrap">(71) 99945-4369</div>
                    </div>
                    <ArrowRight size={16} className="text-slate-500 group-hover:text-mastertop-gold group-hover:translate-x-1 transition-all sm:hidden" />
                  </a>

                  <a
                    href="mailto:comercial@mastertopempreendimentos.com.br"
                    className="flex items-center gap-4 py-4 sm:gap-6 sm:p-6 sm:bg-white/5 sm:border sm:border-white/10 sm:rounded-2xl sm:hover:-translate-y-1 sm:hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 sm:w-14 sm:h-14 flex items-center justify-center text-mastertop-gold shrink-0 sm:bg-white/10 sm:border sm:border-white/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Mail size={18} className="sm:hidden" />
                      <Mail size={24} className="hidden sm:block" />
                    </div>
                    <div className="flex flex-col gap-0.5 sm:gap-1 min-w-0 flex-1">
                      <div className="text-slate-500 text-[0.7rem] sm:text-sm font-sans uppercase tracking-wide">E-mail</div>
                      <div className="text-white font-heading font-bold text-xs sm:text-sm group-hover:text-mastertop-gold transition-colors break-words">comercial@mastertopempreendimentos.com.br</div>
                    </div>
                    <ArrowRight size={16} className="text-slate-500 group-hover:text-mastertop-gold group-hover:translate-x-1 transition-all sm:hidden" />
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
