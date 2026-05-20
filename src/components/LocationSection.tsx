import { MapPin, Phone, Clock } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-24 bg-transparent relative" id="onde-estamos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-mastertop-blue font-subheading text-sm font-bold tracking-widest uppercase mb-3">Onde estamos</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-8 bg-gradient-to-r from-mastertop-blue via-slate-800 to-mastertop-gold bg-clip-text text-transparent">
              Venha nos visitar
            </h3>
            
            <div className="space-y-8 font-sans text-gray-600 text-lg">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-mastertop-blue/10 flex items-center justify-center text-mastertop-blue shrink-0 border border-mastertop-blue/20">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-mastertop-dark mb-1">Endereço</h4>
                  <p>Av. Ayrton Senna, n° 831, SL 04, Petrópolis<br/>Dias D'Ávila/BA - CEP: 42850-000</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-mastertop-blue/10 flex items-center justify-center text-mastertop-blue shrink-0 border border-mastertop-blue/20">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-mastertop-dark mb-1">Telefone / WhatsApp</h4>
                  <p>(71) 9 9200-9443</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-mastertop-blue/10 flex items-center justify-center text-mastertop-blue shrink-0 border border-mastertop-blue/20">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-mastertop-dark mb-1">Horário de Funcionamento</h4>
                  <p>Segunda a Sexta: 08:00 às 18:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 animate-scale-in delay-200">
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
        </div>
      </div>
    </section>
  );
}
