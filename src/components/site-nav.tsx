import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Startseite", href: "#top" },
  { label: "Speisekarte", href: "#speisekarte" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Galerie", href: "#galerie" },
  { label: "Kontakt", href: "#kontakt" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-forest-deep/95 py-3 shadow-[var(--shadow-elegant)] backdrop-blur"
          : "bg-transparent py-6",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="font-display text-3xl leading-none tracking-tight text-cream">
            Pinocchio
          </span>
          <span
            aria-hidden
            className="flex h-3.5 w-6 overflow-hidden rounded-[2px] ring-1 ring-cream/30"
          >
            <i className="h-full flex-1 bg-[#008C45]" />
            <i className="h-full flex-1 bg-[#F4F5F0]" />
            <i className="h-full flex-1 bg-[#CD212A]" />
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm tracking-wide text-cream/85 transition-colors hover:text-gold after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#kontakt"
              className="rounded-sm border border-gold/70 px-5 py-2 text-sm tracking-wide text-gold transition-colors hover:bg-gold hover:text-forest-deep"
            >
              Tisch reservieren
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((v) => !v)}
          className="text-cream md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="mt-4 border-t border-cream/10 bg-forest-deep/98 px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-cream"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="inline-block rounded-sm bg-gold px-5 py-2.5 text-sm tracking-wide text-forest-deep"
              >
                Tisch reservieren
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
