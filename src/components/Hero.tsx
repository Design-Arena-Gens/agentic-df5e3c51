import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[80vh] flex-col justify-end overflow-hidden rounded-4xl bg-neutral-100"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=1600&q=80"
          alt="Salle de restaurant élégante"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>
      <div className="relative z-10 space-y-6 px-8 pb-16 pt-32 text-white sm:px-16 sm:pb-24">
        <p className="text-sm uppercase tracking-[0.3em] text-white/70">
          Gastronomie contemporaine
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
          Une expérience culinaire immersive au cœur de Paris
        </h1>
        <p className="max-w-xl text-lg text-white/85">
          Savourez une cuisine de saison sublimée par nos chefs, dans une atmosphère
          chaleureuse et raffinée. Réservez votre table et laissez-vous guider.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#reservation"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-lg transition hover:bg-neutral-200"
          >
            Réserver maintenant
          </a>
          <a
            href="#menu"
            className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
          >
            Découvrir le menu
          </a>
        </div>
      </div>
    </section>
  );
}
