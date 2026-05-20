import { Phone, Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-mastertop-blue rounded-3xl overflow-hidden shadow-2xl relative">
          
          {/* Background pattern/overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 p-10 md:p-16 gap-12 relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Vamos conversar?</h2>
              <p className="text-mastertop-light/90 font-sans text-lg mb-8 max-w-md">
                Quer saber mais sobre nossas entregas, tirar dúvidas ou propor uma parceria? Estamos à disposição para ouvir você.
              </p>
              <h3 className="text-xl font-heading text-mastertop-gold font-bold mb-2">Uma reputação construída com transparência e eficácia</h3>
            </div>
            
            <div className="flex flex-col justify-center space-y-6">
              <a href="tel:+5511999999999" className="flex items-center gap-6 p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors group">
                <div className="w-14 h-14 bg-mastertop-gold rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-mastertop-light/60 text-sm font-sans mb-1 uppercase tracking-wider">Telefone</div>
                  <div className="text-white font-heading font-bold text-xl md:text-2xl">+55 (11) 99999-9999</div>
                </div>
              </a>
              
              <a href="mailto:contato@mastertop.com.br" className="flex items-center gap-6 p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors group">
                <div className="w-14 h-14 bg-mastertop-gold rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-mastertop-light/60 text-sm font-sans mb-1 uppercase tracking-wider">Envie um e-mail</div>
                  <div className="text-white font-heading font-bold text-lg md:text-xl break-all">contato@mastertop.com.br</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
