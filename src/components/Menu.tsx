import { menuSections } from "@/data/menu";

export function Menu() {
  return (
    <section id="menu" className="space-y-12 rounded-4xl bg-white p-10 shadow-lg">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-neutral-500">
          Menu de Saison
        </p>
        <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
          Des créations qui évoluent au fil des inspirations du chef
        </h2>
        <p className="max-w-2xl text-neutral-600">
          Chaque plat est conçu avec des produits locaux soigneusement sélectionnés.
          Notre équipe renouvelle la carte toutes les six semaines pour mettre à
          l&apos;honneur la richesse des saveurs françaises.
        </p>
      </div>
      <div className="grid gap-10 lg:grid-cols-3">
        {menuSections.map((section) => (
          <div key={section.title} className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-900">
                {section.title}
              </h3>
              <div className="mt-2 h-0.5 w-12 bg-neutral-900/90" />
            </div>
            <ul className="space-y-6">
              {section.items.map((item) => (
                <li key={item.name} className="space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-base font-semibold text-neutral-900">
                      {item.name}
                    </p>
                    <span className="text-sm font-medium text-neutral-500">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600">{item.description}</p>
                  {item.isSignature ? (
                    <span className="inline-flex rounded-full bg-neutral-900/90 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white">
                      Signature
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
