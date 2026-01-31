import Link from "next/link";

const navItems = [
  { href: "#menu", label: "Menu" },
  { href: "#reservation", label: "Réserver" },
  { href: "#about", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Maison Lumière
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-neutral-600 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-neutral-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#reservation"
          className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-700"
        >
          Réserver une table
        </a>
      </div>
    </header>
  );
}
