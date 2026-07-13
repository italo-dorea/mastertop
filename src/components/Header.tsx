"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 text-white font-sans">
      {/* Topbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center bg-mastertop-dark/40 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none border-b border-white/20">
        {/* Logo */}
        <Link href="/" className="hover:opacity-90 transition-opacity bg-white p-2 rounded-lg shadow-sm">
          <Image
            src="/logo-app.png"
            alt="Mastertop Empreendimentos"
            width={160}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Contact Info */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <div className="flex gap-4 items-center">
            <a href="https://www.instagram.com/mastertopempreendimentos/" target="_blank" rel="noopener noreferrer" className="hover:text-mastertop-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
          </div>

          <a href="tel:+5571999454369" className="flex items-center gap-3 hover:text-mastertop-gold transition-colors">
            <div className="border border-white/40 rounded-full p-2">
              <Phone size={16} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-white/60">Contato / WhatsApp</span>
              <span className="font-bold text-white">+55 (71) 99945-4369</span>
            </div>
          </a>

          <a href="mailto:comercial@mastertopempreendimentos.com.br" className="flex items-center gap-3 hover:text-mastertop-gold transition-colors">
            <div className="border border-white/40 rounded-full p-2">
              <Mail size={16} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-white/60">E-mail Comercial</span>
              <span className="font-bold text-white">comercial@mastertopempreendimentos.com.br</span>
            </div>
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:text-mastertop-gold transition-colors focus:outline-none"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Bar Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg animate-fade-in-up duration-300">
          <div className="px-4 pt-2 pb-6 space-y-3 font-heading font-bold text-[0.9rem] uppercase tracking-wider">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block py-2.5 px-4 rounded-xl hover:bg-mastertop-blue/5 text-mastertop-dark hover:text-mastertop-blue transition-all"
            >
              Home
            </Link>
            <Link
              href="/institucional"
              onClick={() => setIsOpen(false)}
              className="block py-2.5 px-4 rounded-xl hover:bg-mastertop-blue/5 text-mastertop-dark hover:text-mastertop-blue transition-all"
            >
              Institucional
            </Link>
            <Link
              href="/obras"
              onClick={() => setIsOpen(false)}
              className="block py-2.5 px-4 rounded-xl hover:bg-mastertop-blue/5 text-mastertop-dark hover:text-mastertop-blue transition-all"
            >
              Obras
            </Link>
            <Link
              href="/servicos"
              onClick={() => setIsOpen(false)}
              className="block py-2.5 px-4 rounded-xl hover:bg-mastertop-blue/5 text-mastertop-dark hover:text-mastertop-blue transition-all"
            >
              Serviços
            </Link>
            <Link
              href="/trabalhe-conosco"
              onClick={() => setIsOpen(false)}
              className="block py-2.5 px-4 rounded-xl hover:bg-mastertop-blue/5 text-mastertop-dark hover:text-mastertop-blue transition-all"
            >
              Trabalhe Conosco
            </Link>
            <Link
              href="/contato"
              onClick={() => setIsOpen(false)}
              className="block py-2.5 px-4 rounded-xl bg-mastertop-blue text-white text-center hover:bg-mastertop-blue/90 shadow-sm transition-all"
            >
              Contato
            </Link>

            {/* Mobile Contact Information */}
            <div className="pt-6 border-t border-slate-100 mt-4 space-y-4 text-xs sm:text-sm font-sans normal-case text-slate-600 font-normal">
              <a href="tel:+5571999454369" className="flex items-center gap-3 py-1 px-4 hover:text-mastertop-blue transition-colors">
                <Phone size={18} className="text-mastertop-gold" />
                <span>+55 (71) 99945-4369</span>
              </a>
              <a href="mailto:comercial@mastertopempreendimentos.com.br" className="flex items-center gap-3 py-1 px-4 hover:text-mastertop-blue transition-colors">
                <Mail size={18} className="text-mastertop-gold" />
                <span>comercial@mastertopempreendimentos.com.br</span>
              </a>
              <div className="flex gap-4 items-center px-4 pt-2">
                <a href="https://www.instagram.com/mastertopempreendimentos/" target="_blank" rel="noopener noreferrer" className="hover:text-mastertop-gold transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Nav Bar (Blue and Gray) - Desktop */}
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
