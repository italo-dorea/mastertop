import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 text-mastertop-dark font-sans">
      {/* Topbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center border-b border-slate-200">
        {/* Logo */}
        <Link href="/" className="hover:opacity-90 transition-opacity bg-white p-2 rounded-lg shadow-sm">
          <Image 
            src="/logo.jpg" 
            alt="Mastertop Empreendimentos" 
            width={160} 
            height={60} 
            className="object-contain"
          />
        </Link>
        
        {/* Contact Info */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <div className="flex gap-4 items-center">
            <Link href="#" className="hover:text-mastertop-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </Link>
            <Link href="#" className="hover:text-mastertop-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </Link>
          </div>
          
          <a href="tel:+5571992009443" className="flex items-center gap-3 hover:text-mastertop-gold transition-colors">
            <div className="border border-slate-300 rounded-full p-2">
              <Phone size={16} />
            </div>
            <div className="flex flex-col">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-500">Telefone</span>
              <span className="font-bold text-mastertop-dark">+55 (71) 9 9200-9443</span>
            </div>
          </a>
          
          <a href="mailto:contato@mastertop.com.br" className="flex items-center gap-3 hover:text-mastertop-gold transition-colors">
            <div className="border border-slate-300 rounded-full p-2">
              <Mail size={16} />
            </div>
            <div className="flex flex-col">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-500">E-mail</span>
              <span className="font-bold text-mastertop-dark">contato@mastertop.com.br</span>
            </div>
          </a>
        </div>
        
        <button className="md:hidden p-2 hover:text-mastertop-gold">
          <Menu size={28} />
        </button>
      </div>

      {/* Main Nav Bar (Blue and Gray) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 hidden md:block">
        <div className="flex">
          <div className="bg-mastertop-blue/95 backdrop-blur flex-grow py-4 px-8 rounded-l-lg flex items-center gap-8 font-bold text-[0.8rem] tracking-wider uppercase text-white">
            <Link href="/" className="hover:text-mastertop-gold transition-colors">Home</Link>
            <Link href="/institucional" className="hover:text-mastertop-gold transition-colors">Institucional</Link>
            <Link href="/obras" className="hover:text-mastertop-gold transition-colors">Obras</Link>
            <Link href="/servicos" className="hover:text-mastertop-gold transition-colors">Serviços</Link>
            <Link href="/trabalhe-conosco" className="hover:text-mastertop-gold transition-colors">Trabalhe Conosco</Link>
          </div>
          
          {/* Angled Gray bar for Contact */}
          <Link href="/contato" className="bg-[#595959]/95 backdrop-blur px-10 flex items-center gap-3 rounded-r-lg font-bold text-[0.8rem] tracking-wider uppercase hover:bg-white hover:text-mastertop-gold transition-colors group relative text-white font-heading" style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)", paddingLeft: "3rem", marginLeft: "-1.5rem" }}>
            Contato
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
