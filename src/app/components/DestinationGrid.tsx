export default async function DestinationGrid() {
  const res = await fetch('/api/destinations', { cache: 'no-store' });
  const destinations = await res.json();

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 ">
        <h2 className="text-2xl font-extrabold text-purple-900 text-left mb-12">
          Popular Destinations<br />
          <span className="text-5xl">Bucket list meets bold <br/> discoveries</span>
        </h2>
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {destinations.map((dest: any) => (
            <div 
              key={dest.name} 
              className="relative group overflow-hidden rounded-3xl aspect-4/5 cursor-pointer"
            >
              {/* REAL IMAGE – YEH LAGAO! */}
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark Overlay + Text */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent flex items-end">
                <h3 className="text-white text-2xl md:text-3xl font-bold p-6 md:p-8 drop-shadow-lg">
                  {dest.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}