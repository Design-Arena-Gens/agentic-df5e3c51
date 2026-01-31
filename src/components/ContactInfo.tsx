export function ContactInfo() {
  return (
    <section
      id="contact"
      className="rounded-4xl bg-white px-10 py-12 text-neutral-900 shadow-lg"
    >
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-neutral-500">
          Contact
        </p>
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Nous rendre visite
        </h2>
        <p className="max-w-xl text-neutral-600">
          58 rue des Lumières, 75003 Paris
        </p>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Horaires
          </p>
          <ul className="mt-3 space-y-1 text-sm text-neutral-600">
            <li>Mardi - Samedi : 12h30 - 14h30 & 19h - 23h</li>
            <li>Dimanche : 12h - 15h</li>
            <li>Lundi : fermé</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Réservations
          </p>
          <ul className="mt-3 space-y-1 text-sm text-neutral-600">
            <li>
              Téléphone :{" "}
              <a href="tel:+33184230345" className="font-medium text-neutral-900">
                +33 1 84 23 03 45
              </a>
            </li>
            <li>
              Email :{" "}
              <a
                href="mailto:reservation@maisonlumiere.fr"
                className="font-medium text-neutral-900"
              >
                reservation@maisonlumiere.fr
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 rounded-3xl border border-dashed border-neutral-200 p-6 text-sm text-neutral-500">
        <p className="font-medium text-neutral-700">Privatisation & événements</p>
        <p className="mt-2">
          Pour vos événements privés ou professionnels, notre salon Lumière peut
          accueillir jusqu&apos;à 30 invités autour d&apos;une expérience sur mesure.
          Contactez-nous pour un devis personnalisé.
        </p>
      </div>
    </section>
  );
}
