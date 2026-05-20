import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Trabalhe Conosco",
  description: "Faça parte da equipe que constrói o futuro da infraestrutura e engenharia. Envie seu currículo para a MASTERTOP EMPREENDIMENTOS.",
};

export default function TrabalheConosco() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-mastertop-blue/10 via-slate-50/80 to-mastertop-gold/15 backdrop-blur-md border-b border-slate-200/50 pt-64 pb-20 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-medium mb-6 bg-gradient-to-r from-mastertop-blue via-slate-800 to-mastertop-gold bg-clip-text text-transparent animate-fade-in-up">Trabalhe Conosco</h1>
            <p className="text-lg text-slate-600 font-sans animate-fade-in-up delay-100">
              Faça parte da equipe que constrói o futuro da infraestrutura e engenharia.
            </p>
          </div>
        </section>

        <section className="py-20 bg-transparent">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-lg">
               <h2 className="text-2xl font-heading font-bold mb-6 bg-gradient-to-r from-mastertop-blue via-slate-800 to-mastertop-gold bg-clip-text text-transparent">Envie seu currículo</h2>
               <form className="space-y-6 font-sans">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-mastertop-gold focus:border-mastertop-gold outline-none transition-all placeholder-gray-400" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-mastertop-gold focus:border-mastertop-gold outline-none transition-all placeholder-gray-400" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Área de Interesse</label>
                    <select id="role" className="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-mastertop-gold focus:border-mastertop-gold outline-none transition-all">
                       <option value="">Selecione uma área</option>
                       <option value="engenharia">Engenharia</option>
                       <option value="obras">Obras / Operacional</option>
                       <option value="admin">Administrativo</option>
                       <option value="tech">Tecnologia</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem ou Link do LinkedIn</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-mastertop-gold focus:border-mastertop-gold outline-none transition-all placeholder-gray-400" placeholder="Fale um pouco sobre você..." />
                  </div>
                  <button type="submit" className="w-full py-3 px-6 bg-mastertop-gold text-white font-medium rounded-lg hover:bg-mastertop-blue transition-colors shadow-md">
                    Enviar Candidatura
                  </button>
               </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
