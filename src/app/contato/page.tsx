import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Fale Conosco",
  description: "Entre em contato com a equipe comercial e técnica da MASTERTOP EMPREENDIMENTOS. Solicite orçamentos, tire dúvidas ou faça parcerias.",
};

export default function Contato() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-mastertop-blue/10 via-slate-50/80 to-mastertop-gold/15 backdrop-blur-md border-b border-slate-200/50 pt-64 pb-20 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-medium mb-6 bg-gradient-to-r from-mastertop-blue via-slate-800 to-mastertop-gold bg-clip-text text-transparent animate-fade-in-up">Fale Conosco</h1>
            <p className="text-lg text-slate-600 font-sans animate-fade-in-up delay-100">
              Quer tirar dúvidas ou propor parcerias? Estamos à disposição.
            </p>
          </div>
        </section>

        <section className="py-24 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-8 bg-gradient-to-r from-mastertop-blue via-slate-800 to-mastertop-gold bg-clip-text text-transparent">
                  Entre em Contato
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-mastertop-blue/10 p-4 rounded-xl text-mastertop-gold shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-mastertop-dark">Endereço Principal</h3>
                      <p className="text-slate-600 mt-1 font-sans text-sm sm:text-base">
                        Av. Ayrton Senna, n° 831, SL 04, Petrópolis<br/>Dias D'Ávila/BA - CEP: 42850-000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-mastertop-blue/10 p-4 rounded-xl text-mastertop-gold shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-mastertop-dark">Telefone / WhatsApp</h3>
                      <a href="tel:+5571992009443" className="block text-slate-600 mt-1 font-sans text-sm sm:text-base hover:text-mastertop-blue transition-colors">
                        +55 (71) 9 9200-9443
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-mastertop-blue/10 p-4 rounded-xl text-mastertop-gold shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-mastertop-dark">E-mail</h3>
                      <a href="mailto:contato@mastertop.com.br" className="block text-slate-600 mt-1 font-sans text-sm sm:text-base hover:text-mastertop-blue transition-colors">
                        contato@mastertop.com.br
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulário Mockado */}
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-sm">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome Completo</label>
                    <input type="text" id="name" className="mt-2 block w-full rounded-xl border border-gray-300 bg-white text-gray-900 shadow-sm focus:border-mastertop-gold focus:ring-mastertop-gold py-3 px-4 outline-none placeholder-gray-400" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                    <input type="email" id="email" className="mt-2 block w-full rounded-xl border border-gray-300 bg-white text-gray-900 shadow-sm focus:border-mastertop-gold focus:ring-mastertop-gold py-3 px-4 outline-none placeholder-gray-400" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                    <textarea id="message" rows={4} className="mt-2 block w-full rounded-xl border border-gray-300 bg-white text-gray-900 shadow-sm focus:border-mastertop-gold focus:ring-mastertop-gold py-3 px-4 outline-none placeholder-gray-400"></textarea>
                  </div>
                  <button type="button" className="w-full bg-mastertop-blue text-white rounded-xl py-4 font-semibold hover:bg-mastertop-gold transition-colors shadow-md hover:shadow-lg">
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
