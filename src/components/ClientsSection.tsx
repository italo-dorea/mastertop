import ScrollReveal from "./ScrollReveal";

export default function ClientsSection() {
  const clients = [
    { id: 1, name: "EMBASA", logo: "/images/clientes/embasa.jpg" },
    { id: 2, name: "CAGEPA", logo: "/images/clientes/cagepa.jpeg" },
    { id: 3, name: "JK Construtora", logo: "/images/clientes/jk construtora.png" },
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-mastertop-gold font-subheading text-sm font-bold tracking-widest uppercase mb-3">
            Parceiros de Confiança
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Quem Confia em nosso trabalho
          </h3>
        </ScrollReveal>

        {/* Client cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <ScrollReveal key={client.id} delay={index * 120} direction="scale">
              <div
                className="group relative bg-white rounded-2xl p-8 flex items-center justify-center h-32 border border-white/20 hover:border-mastertop-gold/40 hover:shadow-[0_0_30px_rgba(217,160,54,0.1)] hover:-translate-y-1 transition-all duration-500"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-[160px] max-h-[60px] object-contain group-hover:scale-110 transition-transform duration-500"
                />
                {/* Hover label */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-mastertop-dark border border-white/10 text-white text-xs font-subheading font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {client.name}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
