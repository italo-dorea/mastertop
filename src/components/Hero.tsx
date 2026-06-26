import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export default function Hero({ title, subtitle, ctaText, ctaLink }: HeroProps) {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-44 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-mastertop-gold"></div>
                <span className="text-mastertop-gold font-subheading text-sm font-bold tracking-widest uppercase">
                  Engenharia & Construção
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-extrabold tracking-tight max-w-xl leading-tight text-white">
                {title}
              </h1>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={150}>
              <p className="mt-8 text-base sm:text-lg text-slate-300 max-w-lg font-sans leading-relaxed">
                {subtitle}
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={300}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href={ctaLink}
                  className="group flex items-center gap-2 rounded-xl bg-mastertop-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg hover:bg-white hover:text-mastertop-dark hover:scale-105 transition-all duration-300"
                >
                  {ctaText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/institucional"
                  className="group flex items-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white/80 hover:text-white transition-all duration-300"
                >
                  Quem Somos
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 hover:border-white/60 transition-colors">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-scroll-bounce"></div>
        </div>
      </div>
    </section>
  );
}
