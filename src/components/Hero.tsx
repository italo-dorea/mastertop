import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export default function Hero({ title, subtitle, ctaText, ctaLink }: HeroProps) {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-transparent">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-extrabold tracking-tight max-w-4xl animate-fade-in-up leading-tight bg-gradient-to-r from-mastertop-blue via-slate-800 to-mastertop-gold bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="mt-8 text-base sm:text-lg text-slate-600 max-w-2xl font-sans leading-relaxed animate-fade-in-up delay-100">
          {subtitle}
        </p>
        <div className="mt-12 flex items-center gap-x-6 animate-fade-in-up delay-200">
          <Link
            href={ctaLink}
            className="group flex items-center gap-2 rounded-xl bg-mastertop-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg hover:bg-mastertop-blue hover:text-white transition-all duration-300"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
