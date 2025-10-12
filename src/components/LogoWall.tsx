export default function LogoWall() {
  const partners = [
    "Partener 1",
    "Partener 2",
    "Partener 3",
    "Partener 4",
    "Partener 5",
    "Partener 6",
  ];

  return (
    <section className="py-32 px-4 border-b border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <p className="text-white/30 font-gotham-condensed uppercase tracking-widest text-xs mb-4">
            Parteneri
          </p>
          <h2 className="text-3xl md:text-5xl font-gotham-condensed font-bold text-white uppercase tracking-tight">
            În curând
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="aspect-square flex items-center justify-center bg-black hover:bg-white/5 transition-colors group border border-white/10"
            >
              <div className="text-white/20 text-xs font-gotham-condensed font-bold group-hover:text-white/40 transition-colors uppercase tracking-wider">
                {partner}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

