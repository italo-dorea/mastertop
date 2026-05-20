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
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600 font-sans font-medium">{stat.label}</dt>
              <dd className="order-first text-5xl font-bold tracking-tight font-heading sm:text-6xl bg-gradient-to-r from-mastertop-blue to-mastertop-gold bg-clip-text text-transparent">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
