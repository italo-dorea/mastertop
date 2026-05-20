export default function ClientsSection() {
  // Mock data for clients
  const clients = [
    { id: 1, name: "Cliente 1" },
    { id: 2, name: "Cliente 2" },
    { id: 3, name: "Cliente 3" },
    { id: 4, name: "Cliente 4" },
    { id: 5, name: "Cliente 5" },
    { id: 6, name: "Cliente 6" },
  ];

  return (
    <section className="py-24 bg-mastertop-blue text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-12 shadow-xl relative overflow-hidden">
      {/* Background pattern/overlay for richness */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-mastertop-gold font-subheading text-sm font-bold tracking-widest uppercase mb-3">Parcerias</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r from-white via-amber-100 to-mastertop-gold bg-clip-text text-transparent">Nossos Clientes</h3>
        </div>

        {/* Carousel/Grid of logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-85 hover:opacity-100 transition-opacity duration-500 animate-scale-in delay-200">
          {clients.map((client) => (
            <div key={client.id} className="w-32 h-20 bg-white/5 border border-white/10 flex items-center justify-center rounded-lg grayscale hover:grayscale-0 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <span className="font-heading font-bold text-white/80">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
