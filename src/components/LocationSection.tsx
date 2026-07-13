import { MapPin, Phone, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function LocationSection() {
  return (
    <section className="py-24 bg-transparent relative" id="onde-estamos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <h2 className="text-mastertop-gold font-subheading text-sm font-bold tracking-widest uppercase mb-3">Onde estamos</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-white hover:text-mastertop-light transition-colors duration-300">
              Localização
            </h3>
            
            <div className="space-y-8 font-sans text-slate-300 text-lg">
              <div className="flex gap-4 items-start group hover:-translate-y-0.5 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-mastertop-gold shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Endereço</h4>
                  <p className="text-slate-400">Av. Ayrton Senna, n° 831, SL 04, Petrópolis<br/>Dias D'Ávila/BA - CEP: 42850-000</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group hover:-translate-y-0.5 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-mastertop-gold shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Telefone / WhatsApp</h4>
                  <p className="text-slate-400">(71) 99945-4369</p>
                </div>
              </div>

              <div className="flex gap-4 items-start group hover:-translate-y-0.5 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-mastertop-gold shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Horário de Funcionamento</h4>
                  <p className="text-slate-400">Segunda a Sexta: 08:00 às 18:00</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={200}>
            <div className="h-[280px] sm:h-[360px] lg:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:border-mastertop-gold/30 transition-all duration-500 hover:shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15570.672535032034!2d-38.30396078335039!3d-12.62324449999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7165d0aeaaaaaab%3A0x31e6d594018bf9e0!2sMastertop%20Empreendimentos%20Eireli!5e0!3m2!1spt-BR!2sbr!4v1715634567890!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Mastertop"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
