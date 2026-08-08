const swatches = [
  { name: "Black", bgClass: "bg-portra-black", hex: "#0B0B0B" },
  { name: "Warm White", bgClass: "bg-portra-white", hex: "#F5F3EE" },
  { name: "Soft Neutral", bgClass: "bg-portra-neutral", hex: "#CFCBC4" },
  { name: "Muted Taupe", bgClass: "bg-portra-taupe", hex: "#8A8175" },
] as const;

export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-24 px-8 py-16 sm:px-16">
      <header className="flex flex-col gap-2">
        <p className="font-mono text-eyebrow uppercase text-portra-taupe">
          Style guide — internal preview
        </p>
        <h1 className="text-h1 font-bold lowercase">portra®</h1>
        <p className="max-w-md text-portra-taupe">
          Base de paleta y tipografía. Esta página se reemplaza por el Home real.
        </p>
      </header>

      <section className="flex flex-col gap-6">
        <p className="font-mono text-eyebrow uppercase text-portra-taupe">
          01 — Paleta
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {swatches.map((s) => (
            <div key={s.name} className="flex flex-col gap-3">
              <div
                className={`h-28 rounded-lg border border-portra-neutral ${s.bgClass}`}
              />
              <div className="font-mono text-sm">
                <p>{s.name}</p>
                <p className="text-portra-taupe">{s.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <p className="font-mono text-eyebrow uppercase text-portra-taupe">
          02 — Tipografía
        </p>
        <div className="flex flex-col gap-6">
          <p className="text-display font-bold lowercase">Studio.</p>
          <p className="text-h1 font-bold">Services.</p>
          <p className="text-h2 font-semibold">Projects.</p>
          <p className="max-w-xl text-base leading-relaxed">
            Portra is an independent creative studio working across strategy,
            creative and production. Raw imagery, precise design.
          </p>
          <p className="font-mono text-eyebrow uppercase">
            Strategy · Creative · Production
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <p className="font-mono text-eyebrow uppercase text-portra-taupe">
          03 — Registro oscuro
        </p>
        <div className="flex flex-col gap-6 rounded-lg bg-portra-black px-8 py-12 text-portra-white">
          <p className="text-h1 font-bold lowercase">portra®</p>
          <p className="max-w-md text-portra-neutral">
            Creative studio for brands, culture &amp; experiences. From brief to
            delivery, without the chaos.
          </p>
        </div>
      </section>
    </main>
  );
}
