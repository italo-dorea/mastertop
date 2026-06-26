import { Droplets, Building2, Drill, Waves, Mountain, Wrench } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface ServicesGridProps {
  services: ServiceItem[];
}

const IconMap: Record<string, React.ElementType> = {
  droplets: Droplets,
  building: Building2,
  drill: Drill,
  waves: Waves,
  mountain: Mountain,
  default: Wrench,
};

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section className="py-24 bg-transparent sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-mastertop-gold font-subheading tracking-widest uppercase">
            Nossas Áreas de Atuação
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl font-heading text-white">
            Tudo o que você precisa para o sucesso do seu projeto
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-400 font-sans">
            Com tecnologia de ponta e equipe especializada, entregamos soluções integradas que garantem a solidez da sua infraestrutura.
          </p>
        </ScrollReveal>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const IconComponent = IconMap[service.icon] || IconMap.default;
              return (
                <ScrollReveal key={service.id} delay={index * 100} direction="up">
                  <div 
                    className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-mastertop-gold/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full group"
                  >
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white font-heading text-xl">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mastertop-gold/10 border border-mastertop-gold/20 group-hover:scale-110 group-hover:bg-mastertop-gold/20 transition-all duration-300">
                        <IconComponent className="h-6 w-6 text-mastertop-gold" aria-hidden="true" />
                      </div>
                      {service.title}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-400 font-sans">
                      <p className="flex-auto">{service.description}</p>
                    </dd>
                  </div>
                </ScrollReveal>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
