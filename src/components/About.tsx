import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="grid items-center gap-10 rounded-4xl bg-neutral-100 p-10 lg:grid-cols-[1.15fr_1fr]"
    >
      <div className="space-y-5">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-neutral-500">
          À propos
        </p>
        <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
          Une cuisine audacieuse qui sublime les produits du terroir
        </h2>
        <p className="text-neutral-600">
          Maison Lumière est née de la rencontre entre notre chef, Camille
          Dufresne, et son envie de revisiter les classiques français avec une
          sensibilité contemporaine. Chaque service est une chorégraphie où la
          créativité du chef dialogue avec les saisons et les producteurs locaux.
        </p>
        <p className="text-neutral-600">
          Nous privilégions une cuisine sincère, respectueuse et généreuse. Notre
          sommelière vous guidera parmi plus de 300 références pour des accords
          sur-mesure.
        </p>
        <ul className="grid gap-3 text-sm text-neutral-600 sm:grid-cols-2">
          <li className="rounded-2xl bg-white px-5 py-3 font-medium text-neutral-900 shadow-sm">
            Menu dégustation 6 services
          </li>
          <li className="rounded-2xl bg-white px-5 py-3 font-medium text-neutral-900 shadow-sm">
            Accord mets & vins personnalisés
          </li>
          <li className="rounded-2xl bg-white px-5 py-3 font-medium text-neutral-900 shadow-sm">
            Produits bio et pêche durable
          </li>
          <li className="rounded-2xl bg-white px-5 py-3 font-medium text-neutral-900 shadow-sm">
            Salle privée jusqu&apos;à 14 convives
          </li>
        </ul>
      </div>
      <div className="relative h-full min-h-[320px] overflow-hidden rounded-3xl">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
          alt="Chef dressant un plat gastronomique"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
