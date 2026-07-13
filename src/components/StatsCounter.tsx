import ScrollReveal from "./ScrollReveal";

interface StatItem {
  value: string;
  label: string;
}

interface StatsCounterProps {
  stats: StatItem[];
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  return (
    <section className="bg-transparent py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 150} direction="up">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4 group hover:scale-105 transition-transform duration-300">
                <dt className="text-base leading-7 text-slate-400 font-sans font-medium">{stat.label}</dt>
                <dd className="order-first text-5xl font-bold tracking-tight font-heading sm:text-6xl text-white group-hover:text-mastertop-gold transition-colors duration-300">
                  {stat.value}
                </dd>
              </div>
            </ScrollReveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
