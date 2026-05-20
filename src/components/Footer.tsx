import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-mastertop-dark text-mastertop-light pt-16 pb-8 border-t-[6px] border-mastertop-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex flex-col mb-4 bg-white p-2 rounded-lg inline-block shadow-sm">
              <Image 
                src="/logo.jpg" 
                alt="Logo Mastertop Empreendimentos"
                width={200}
                height={80}
                className="h-16 w-auto object-contain"
                priority
              />              
            </div>
            <p className="text-slate-400 text-sm max-w-sm mt-4 leading-relaxed font-sans">
              Com soluções completas em engenharia e construção civil, atuamos em todas as etapas dos projetos: da concepção à operação.
            </p>
          </div>

          {/* Institucional Links */}
          <div>
            <h3 className="text-white font-heading text-lg mb-4 font-semibold uppercase tracking-wider text-sm">Institucional</h3>
            <ul className="space-y-3 font-sans text-sm text-slate-400">
              <li><Link href="/institucional" className="hover:text-mastertop-gold transition-colors">Quem somos</Link></li>
              <li><Link href="/institucional#missao" className="hover:text-mastertop-gold transition-colors">Missão, visão e valores</Link></li>
              <li><Link href="/institucional#sustentabilidade" className="hover:text-mastertop-gold transition-colors">Sustentabilidade</Link></li>
              <li><Link href="/institucional#inovacao" className="hover:text-mastertop-gold transition-colors">Inovação</Link></li>
              <li><Link href="/institucional#seguranca" className="hover:text-mastertop-gold transition-colors">Segurança</Link></li>
            </ul>
          </div>

          {/* Menu Links */}
          <div>
            <h3 className="text-white font-heading text-lg mb-4 font-semibold uppercase tracking-wider text-sm">Navegação</h3>
            <ul className="space-y-3 font-sans text-sm text-slate-400">
              <li><Link href="/obras" className="hover:text-mastertop-gold transition-colors">Obras</Link></li>
              <li><Link href="/servicos" className="hover:text-mastertop-gold transition-colors">Serviços</Link></li>
              <li><Link href="/trabalhe-conosco" className="hover:text-mastertop-gold transition-colors">Trabalhe Conosco</Link></li>
              <li><Link href="/contato" className="hover:text-mastertop-gold transition-colors">Fale com a gente</Link></li>
              <li><Link href="/admin" className="hover:text-mastertop-gold transition-colors">Painel Administrativo</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading text-lg mb-4 font-semibold uppercase tracking-wider text-sm">Contato</h3>
            <ul className="space-y-4 font-sans text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-mastertop-gold shrink-0 mt-0.5" size={18} />
                <a href="https://maps.app.goo.gl/vG33Tskj4pPj9nKx5" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Av. Ayrton Senna, n° 831, SL 04<br/>Petrópolis, Dias D'Ávila/BA<br/>CEP: 42850-000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-mastertop-gold shrink-0" size={18} />
                <a href="tel:+5571992009443" className="hover:text-white transition-colors">+55 (71) 9 9200-9443</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-mastertop-gold shrink-0" size={18} />
                <a href="mailto:contato@mastertop.com.br" className="hover:text-white transition-colors">contato@mastertop.com.br</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 font-sans">
          <p>&copy; {new Date().getFullYear()} - Mastertop Empreendimentos</p>
        </div>
      </div>
    </footer>
  );
}
