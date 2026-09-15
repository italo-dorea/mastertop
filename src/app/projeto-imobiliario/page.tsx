import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoteamentoApp from "@/components/LoteamentoApp";

export const metadata: Metadata = {
  title: "Projeto Imobiliário",
  description: "Ecofazenda Mucugê: 220 lotes de 1.000 m² em 33,5 hectares na região de Praia do Forte (BA). Consulte o mapa de lotes e reserve o seu.",
};

export default function ProjetoImobiliario() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <section className="pt-44 sm:pt-56 md:pt-64 pb-16">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <LoteamentoApp />
          </div>
        </section>

        {/* Formulário oculto para o Netlify Forms detectar em build (o app acima envia via fetch) */}
        <form name="reserva-lote" data-netlify="true" hidden>
          <input type="hidden" name="form-name" value="reserva-lote" />
          <input type="text" name="lote" />
          <input type="text" name="nome" />
          <input type="text" name="telefone" />
          <input type="email" name="email" />
          <textarea name="mensagem" />
        </form>
      </main>
      <Footer />
    </>
  );
}
