export default function PhotoGallery() {
  const photos = [
    { id: 1, src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop", alt: "Construção Civil e Guindastes", span: "col-span-1 md:col-span-2 row-span-2" },
    { id: 2, src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop", alt: "Planejamento e Engenharia", span: "col-span-1 row-span-1" },
    { id: 3, src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop", alt: "Equipe de Trabalho em Campo", span: "col-span-1 row-span-1" },
    { id: 4, src: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=600&auto=format&fit=crop", alt: "Estruturas de Concreto e Pilares", span: "col-span-1 row-span-1" },
    { id: 5, src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop", alt: "Arquitetura e Construção Moderna", span: "col-span-1 row-span-1" },
  ];

  return (
    <section className="py-2 bg-transparent">
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-2">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className={`${photo.span} relative group overflow-hidden`}
            >
              <img 
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-mastertop-blue/10 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-semibold uppercase tracking-wider">{photo.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
