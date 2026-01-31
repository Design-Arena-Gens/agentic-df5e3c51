export function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 pt-8 text-sm text-neutral-500">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 pb-8 sm:flex-row">
        <p>© {new Date().getFullYear()} Maison Lumière. Tous droits réservés.</p>
        <div className="flex gap-4">
          <a href="#reservation" className="hover:text-neutral-900">
            Réservations
          </a>
          <a href="#menu" className="hover:text-neutral-900">
            Menu
          </a>
          <a href="#contact" className="hover:text-neutral-900">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
