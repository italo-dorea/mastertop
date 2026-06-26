"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import obrasData from "@/content/obras.json";

interface ObraItem {
  id: number;
  title: string;
  desc: string;
  category: string;
  image: string;
}

const INITIAL_COUNT = 3;

export default function ObrasSectionAccordion() {
  const [isExpanded, setIsExpanded] = useState(false);
  const obras: ObraItem[] = obrasData as ObraItem[];
  const visibleObras = isExpanded ? obras : obras.slice(0, INITIAL_COUNT);

  return (
    <section className="py-24 bg-transparent" id="obras">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-mastertop-gold font-subheading text-sm font-bold tracking-widest uppercase mb-3">
            Portfólio
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Nossas Obras
          </h3>
          <p className="mt-4 text-lg text-slate-400 font-sans">
            Projetos que demonstram nossa capacidade técnica e compromisso com a excelência.
          </p>
        </div>

        {/* Obras Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleObras.map((obra, index) => (
            <div
              key={obra.id}
              className={`bg-mastertop-dark/50 border border-white/10 rounded-2xl overflow-hidden hover:border-mastertop-gold/30 transition-all duration-500 group animate-scale-in ${
                index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : index === 2 ? 'delay-300' : 'delay-400'
              }`}
            >
              <div className="h-56 sm:h-64 relative overflow-hidden">
                <img
                  src={obra.image}
                  alt={obra.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-subheading font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10">
                    {obra.category}
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-mastertop-gold transition-colors">
                  {obra.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Accordion Toggle + View All Link */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          {obras.length > INITIAL_COUNT && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white font-heading font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              {isExpanded ? (
                <>
                  Ver menos
                  <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                </>
              ) : (
                <>
                  Ver mais obras ({obras.length - INITIAL_COUNT} restantes)
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          )}
          <Link
            href="/obras"
            className="group flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-heading font-semibold rounded-xl hover:bg-white hover:text-mastertop-dark transition-all duration-300"
          >
            Ver portfólio completo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
