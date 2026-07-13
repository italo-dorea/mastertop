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
        <section className="bg-mastertop-blue/20 backdrop-blur-md border-b border-white/10 pt-36 sm:pt-48 md:pt-64 pb-20 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-medium mb-6 text-white animate-fade-in-up">Fale Conosco</h1>
            <p className="text-lg text-slate-400 font-sans animate-fade-in-up delay-100">
              Quer tirar dúvidas ou propor parcerias? Estamos à disposição.
            </p>
          </div>
        </section>

        <section className="py-24 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-8 text-white">
                  Entre em Contato
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/5 p-4 rounded-xl text-mastertop-gold shrink-0 border border-white/10">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-white">Endereço Principal</h3>
                      <p className="text-slate-400 mt-1 font-sans text-sm sm:text-base">
                        Av. Ayrton Senna, n° 831, SL 04, Petrópolis<br/>Dias D'Ávila/BA - CEP: 42850-000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/5 p-4 rounded-xl text-mastertop-gold shrink-0 border border-white/10">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-white">Telefones de Contato</h3>
                      <a href="tel:+5571999454369" className="block text-slate-300 mt-1 font-sans text-sm sm:text-base hover:text-white transition-colors">
                        +55 (71) 99945-4369 (Celular / WhatsApp)
                      </a>
                      <a href="tel:+557132171471" className="block text-slate-300 mt-1 font-sans text-sm sm:text-base hover:text-white transition-colors">
                        +55 (71) 3217-1471 (Fixo)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/5 p-4 rounded-xl text-mastertop-gold shrink-0 border border-white/10">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-white">E-mails</h3>
                      <a href="mailto:comercial@mastertopempreendimentos.com.br" className="block text-slate-300 mt-1 font-sans text-sm sm:text-base hover:text-white transition-colors break-all">
                        comercial@mastertopempreendimentos.com.br (Comercial)
                      </a>
                      <a href="mailto:carlosaraujo@mastertopempreendimentos.com.br" className="block text-slate-300 mt-1 font-sans text-sm sm:text-base hover:text-white transition-colors break-all">
                        carlosaraujo@mastertopempreendimentos.com.br (Diretoria)
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulário Netlify Forms */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12">
                <form name="contato" method="POST" data-netlify="true" className="space-y-6">
                  <input type="hidden" name="form-name" value="contato" />
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300">Nome Completo</label>
                    <input type="text" id="name" name="name" required className="mt-2 block w-full rounded-xl border border-white/20 bg-white text-gray-900 shadow-sm focus:border-mastertop-gold focus:ring-mastertop-gold py-3 px-4 outline-none placeholder-gray-400" placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300">E-mail</label>
                    <input type="email" id="email" name="email" required className="mt-2 block w-full rounded-xl border border-white/20 bg-white text-gray-900 shadow-sm focus:border-mastertop-gold focus:ring-mastertop-gold py-3 px-4 outline-none placeholder-gray-400" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300">Telefone</label>
                    <input type="tel" id="phone" name="phone" className="mt-2 block w-full rounded-xl border border-white/20 bg-white text-gray-900 shadow-sm focus:border-mastertop-gold focus:ring-mastertop-gold py-3 px-4 outline-none placeholder-gray-400" placeholder="(71) 99999-9999" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300">Mensagem</label>
                    <textarea id="message" name="message" required rows={4} className="mt-2 block w-full rounded-xl border border-white/20 bg-white text-gray-900 shadow-sm focus:border-mastertop-gold focus:ring-mastertop-gold py-3 px-4 outline-none placeholder-gray-400" placeholder="Como podemos ajudar?"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-white/10 border border-white/20 text-white rounded-xl py-4 font-semibold hover:bg-white hover:text-mastertop-dark transition-colors">
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
