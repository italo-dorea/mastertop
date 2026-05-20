import { Bolt, Globe, Car, Building2, Wrench } from "lucide-react";

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
  rig: Building2, // using building as fallback for rig
  bolt: Bolt,
  globe: Globe,
  car: Car,
  default: Wrench,
};

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section className="py-24 bg-transparent sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center animate-fade-in-up">
          <h2 className="text-base font-semibold leading-7 text-mastertop-blue font-subheading tracking-widest uppercase">
            Nossas Áreas de Atuação
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl font-heading bg-gradient-to-r from-mastertop-blue via-slate-800 to-mastertop-gold bg-clip-text text-transparent">
            Tudo o que você precisa para o sucesso do seu projeto
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 font-sans">
            Com tecnologia de ponta e equipe especializada, entregamos soluções integradas que garantem a solidez da sua infraestrutura.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service, index) => {
              const IconComponent = IconMap[service.icon] || IconMap.default;
              return (
                <div 
                  key={service.id} 
                  className={`flex flex-col bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm hover:bg-white hover:border-mastertop-gold/50 hover:shadow-md transition-all animate-scale-in ${
                    index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : index === 2 ? 'delay-300' : 'delay-400'
                  }`}
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-mastertop-dark font-heading text-xl">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mastertop-blue/10 border border-mastertop-blue/20">
                      <IconComponent className="h-6 w-6 text-mastertop-blue" aria-hidden="true" />
                    </div>
                    {service.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 font-sans">
                    <p className="flex-auto">{service.description}</p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
