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
        <section className="bg-mastertop-blue/20 backdrop-blur-md border-b border-white/10 pt-36 sm:pt-48 md:pt-64 pb-20 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-medium mb-6 text-white animate-fade-in-up">Trabalhe Conosco</h1>
            <p className="text-lg text-slate-400 font-sans animate-fade-in-up delay-100">
              Faça parte da equipe que constrói o futuro da infraestrutura e engenharia.
            </p>
          </div>
        </section>

        <section className="py-20 bg-transparent">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
               <h2 className="text-2xl font-heading font-bold mb-6 text-white">Envie seu currículo</h2>
               <form name="trabalhe-conosco" method="POST" data-netlify="true" encType="multipart/form-data" className="space-y-6 font-sans">
                  <input type="hidden" name="form-name" value="trabalhe-conosco" />
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Nome Completo</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-white/20 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-mastertop-gold focus:border-mastertop-gold outline-none transition-all placeholder-gray-400" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">E-mail</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-white/20 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-mastertop-gold focus:border-mastertop-gold outline-none transition-all placeholder-gray-400" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">Telefone</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-white/20 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-mastertop-gold focus:border-mastertop-gold outline-none transition-all placeholder-gray-400" placeholder="(71) 99999-9999" />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-slate-300 mb-1">Área de Interesse</label>
                    <select id="role" name="area" required className="w-full px-4 py-2 border border-white/20 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-mastertop-gold focus:border-mastertop-gold outline-none transition-all">
                       <option value="">Selecione uma área</option>
                       <option value="engenharia">Engenharia</option>
                       <option value="obras">Obras / Operacional</option>
                       <option value="admin">Administrativo</option>
                       <option value="tech">Tecnologia</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Mensagem</label>
                    <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-white/20 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-mastertop-gold focus:border-mastertop-gold outline-none transition-all placeholder-gray-400" placeholder="Fale um pouco sobre você..." />
                  </div>
                  <div>
                    <label htmlFor="curriculo" className="block text-sm font-medium text-slate-300 mb-1">
                      Anexar Currículo <span className="text-slate-500 font-normal">(PDF, DOC ou DOCX — máx. 5MB)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="curriculo"
                        name="curriculo"
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        className="w-full px-4 py-2 border border-white/20 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-mastertop-gold focus:border-mastertop-gold outline-none transition-all file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-mastertop-gold/20 file:text-mastertop-gold hover:file:bg-mastertop-gold/30 cursor-pointer"
                      />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-3 px-6 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white hover:text-mastertop-dark transition-colors">
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
