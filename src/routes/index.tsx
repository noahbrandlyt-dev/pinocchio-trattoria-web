import { createFileRoute } from "@tanstack/react-router";
import {
  ChevronDown,
  Facebook,
  Globe,
  Instagram,
  Leaf,
  MapPin,
  Phone,
  Pizza,
  Star,
  Wine,
  Clock,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SiteNav } from "@/components/site-nav";
import { ReservationForm } from "@/components/reservation-form";

import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import dishBruschetta from "@/assets/dish-bruschetta.jpg";
import dishDiavolo from "@/assets/dish-diavolo.jpg";
import dishGambas from "@/assets/dish-gambas.jpg";
import dishSteak from "@/assets/dish-steak.jpg";
import dishTiramisu from "@/assets/dish-tiramisu.jpg";
import dishPannacotta from "@/assets/dish-pannacotta.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const TITLE = "Restaurant Pinocchio Bückeburg — Italienische Küche, Pizza & Pasta";
const DESCRIPTION =
  "Authentische italienische Küche in Bückeburg: Pizza, frische Pasta, Saisongerichte und ein charmanter Biergarten. Jetzt Tisch reservieren — ab 17:00 Uhr geöffnet.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const highlights = [
  { icon: Pizza, title: "Pizza & Pasta", text: "Frisch zubereitet" },
  { icon: Leaf, title: "Saisonküche", text: "Regionale Zutaten" },
  { icon: Wine, title: "Biergarten", text: "Genuss im Freien" },
];

const dishes = [
  { name: "Bruschetta", text: "Klassisch & knusprig", img: dishBruschetta },
  { name: "Pizza Diavolo", text: "Scharf & aromatisch", img: dishDiavolo },
  { name: "Pizza Gambas", text: "Mit frischen Garnelen", img: dishGambas },
  { name: "Argentinisches Rumpsteak", text: "Auf den Punkt", img: dishSteak },
  { name: "Tiramisu", text: "Hausgemacht & cremig", img: dishTiramisu },
  { name: "Panna Cotta", text: "Zart & verfeinert", img: dishPannacotta },
];

const events = [
  { day: "Donnerstag", title: "Pizzakarussell", emoji: "🍕" },
  { day: "Freitag & Sonntag", title: "Nudelbuffet", emoji: "🍝" },
  { day: "Samstag", title: "Dolce Vita Buffet", emoji: "🇮🇹" },
];

const reviews = [
  { text: "Das Essen super lecker und die Bedienung sehr zuvorkommend.", author: "Google" },
  {
    text: "Steaks auf den Punkt zubereitet, sehr gute Qualität und schön angerichtet.",
    author: "Google",
  },
  {
    text: "Sehr leckeres Essen, kam schnell trotz großer Gruppe. Zuvorkommendes, freundliches Personal.",
    author: "Alexandra V., Google",
  },
];

const galleryImages = [
  { src: gallery1, alt: "Biergarten des Restaurant Pinocchio mit Lichterketten" },
  { src: gallery2, alt: "Pizzabäcker beim Formen des frischen Teigs" },
  { src: gallery3, alt: "Frische hausgemachte Tagliatelle mit Basilikum" },
  { src: gallery4, alt: "Gäste stoßen mit Rotwein an" },
  { src: aboutImg, alt: "Heller Gastraum mit eingedeckten Tischen" },
  { src: dishDiavolo, alt: "Pizza Diavolo aus dem Steinofen" },
];

function Index() {
  return (
    <div id="top" className="bg-background">
      <SiteNav />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Stimmungsvoller Gastraum des Restaurant Pinocchio bei Kerzenlicht"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

        <div className="relative mx-auto max-w-4xl px-6 pt-24 pb-32 text-center">
          <Reveal>
            <p className="eyebrow text-gold">Ristorante · Bückeburg</p>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,5.4rem)] leading-[1.05] text-cream">
              Authentische italienische Küche in Bückeburg
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base text-cream/80 sm:text-lg">
              Pizza, Pasta &amp; Saisonküche — seit Jahren ein Genuss
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#kontakt"
                className="w-full rounded-sm px-8 py-4 text-sm tracking-[0.18em] uppercase text-forest-deep transition-transform hover:-translate-y-0.5 sm:w-auto"
                style={{ background: "var(--gradient-gold)" }}
              >
                Tisch reservieren
              </a>
              <a
                href="#speisekarte"
                className="w-full rounded-sm border border-cream/50 px-8 py-4 text-sm tracking-[0.18em] uppercase text-cream transition-colors hover:border-cream hover:bg-cream/10 sm:w-auto"
              >
                Speisekarte ansehen
              </a>
            </div>
          </Reveal>
        </div>

        <a
          href="#highlights"
          aria-label="Weiter scrollen"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream"
        >
          <ChevronDown className="animate-scroll-hint h-7 w-7" />
        </a>
      </section>

      {/* HIGHLIGHTS */}
      <section id="highlights" className="bg-forest-deep py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 120} className="flex items-center gap-4">
              <h.icon className="h-8 w-8 shrink-0 text-gold" strokeWidth={1.3} />
              <div>
                <p className="font-display text-2xl text-cream">{h.title}</p>
                <p className="text-sm text-cream/65">{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="ueber-uns" className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Über uns</p>
            <span className="gold-rule mt-5" />
            <h2 className="mt-6 font-display text-[clamp(2.2rem,4vw,3.4rem)] leading-tight">
              Ihr italienisches Wohlfühlrestaurant
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Willkommen im Restaurant Pinocchio — Ihr italienisches Wohlfühlrestaurant in
              Bückeburg. In drei hell gestalteten Räumen und unserem charmanten Biergarten servieren
              wir Pizza, frische Pasta und abwechslungsreiche Saisongerichte. Seit Jahren sind wir
              für unsere Gäste da — mit Herzlichkeit, Qualität und echtem italienischen Flair.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 rounded-sm border border-gold/40 bg-secondary px-4 py-2.5">
                <Star className="h-4 w-4 fill-gold text-gold" />
                <span className="text-sm">
                  <strong className="font-medium">4,4 / 5</strong> — 682 Google-Bewertungen
                </span>
              </div>
              <div className="rounded-sm border border-border px-4 py-2.5 text-sm text-muted-foreground">
                Preisniveau 20–30 € p. P.
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="absolute -top-5 -left-5 hidden h-full w-full border border-gold/40 lg:block" />
            <img
              src={aboutImg}
              alt="Heller Gastraum des Restaurant Pinocchio mit eingedeckten Tischen"
              loading="lazy"
              width={1024}
              height={1280}
              className="relative h-[560px] w-full object-cover shadow-[var(--shadow-elegant)]"
            />
          </Reveal>
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section id="speisekarte" className="bg-secondary py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center">
            <p className="eyebrow">Aus unserer Küche</p>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.4rem)]">Unsere Highlights</h2>
            <span className="gold-rule mx-auto mt-5" />
          </Reveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {dishes.map((d, i) => (
              <Reveal
                key={d.name}
                delay={(i % 3) * 120}
                as="article"
                className="group overflow-hidden bg-card shadow-[var(--shadow-card)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="px-6 py-6">
                  <h3 className="font-display text-2xl">{d.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{d.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 text-center">
            <a
              href="#kontakt"
              className="inline-block rounded-sm bg-primary px-9 py-4 text-sm tracking-[0.18em] uppercase text-primary-foreground transition-colors hover:bg-forest-deep"
            >
              Zur vollständigen Speisekarte
            </a>
          </Reveal>
        </div>
      </section>

      {/* EVENTS */}
      <section className="bg-forest py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center">
            <p className="eyebrow">Feste Termine</p>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.4rem)] text-cream">
              Unsere Buffet-Wochentage
            </h2>
            <span className="gold-rule mx-auto mt-5" />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {events.map((e, i) => (
              <Reveal
                key={e.title}
                delay={i * 120}
                className="border border-cream/15 bg-forest-deep/60 px-8 py-10 text-center transition-colors hover:border-gold/50"
              >
                <span className="text-3xl">{e.emoji}</span>
                <p className="mt-4 text-xs tracking-[0.28em] uppercase text-gold">{e.day}</p>
                <h3 className="mt-3 font-display text-3xl text-cream">{e.title}</h3>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex items-center justify-center gap-2 text-sm text-cream/70">
            <Clock className="h-4 w-4 text-gold" />
            Ab 17:00 Uhr geöffnet
          </Reveal>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center">
            <p className="eyebrow">Bewertungen</p>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.4rem)]">
              Was unsere Gäste sagen
            </h2>
            <span className="gold-rule mx-auto mt-5" />
          </Reveal>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal
                key={r.author + i}
                delay={i * 120}
                className="flex h-full flex-col justify-between border border-border bg-card px-8 py-9"
              >
                <div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="mt-5 font-display text-xl leading-relaxed">„{r.text}“</p>
                </div>
                <p className="mt-7 text-xs tracking-[0.22em] uppercase text-muted-foreground">
                  {r.author}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 flex justify-center">
            <div className="flex items-center gap-3 rounded-sm border border-gold/40 px-6 py-3">
              <Star className="h-5 w-5 fill-gold text-gold" />
              <span className="text-sm">
                <strong className="font-medium">4,4</strong> auf Google — 682 Bewertungen
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galerie" className="bg-secondary py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center">
            <p className="eyebrow">Galerie</p>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.4rem)]">
              Einblicke ins Pinocchio
            </h2>
            <span className="gold-rule mx-auto mt-5" />
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryImages.map((g, i) => (
              <Reveal
                key={i}
                delay={(i % 3) * 100}
                className={`group overflow-hidden ${i === 0 ? "md:row-span-2" : ""}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    i === 0 ? "h-64 md:h-[544px]" : "h-64"
                  }`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Kontakt</p>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.4rem)] leading-tight">
              Reservieren Sie Ihren Tisch
            </h2>
            <span className="gold-rule mt-5" />

            <ul className="mt-10 space-y-6">
              <li className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} />
                <span>
                  Hinüberstraße 1<br />
                  31675 Bückeburg
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} />
                <a href="tel:+4957225049" className="transition-colors hover:text-gold">
                  05722 5049
                </a>
              </li>
              <li className="flex gap-4">
                <Globe className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} />
                <a
                  href="https://pinocchio-restaurant.de"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  pinocchio-restaurant.de
                </a>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} />
                <span>
                  Öffnungszeit: Ab 17:00 Uhr
                  <br />
                  <span className="text-muted-foreground">(Details auf Anfrage)</span>
                </span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={150} className="border border-border bg-card p-8 shadow-[var(--shadow-card)] sm:p-10">
            <h3 className="font-display text-2xl">Reservierungsanfrage</h3>
            <p className="mt-1 mb-7 text-sm text-muted-foreground">
              Wir bestätigen Ihre Anfrage persönlich.
            </p>
            <ReservationForm />
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-forest-deep py-16 text-cream/70">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl text-cream">Pinocchio</p>
            <p className="mt-3 text-sm">Buon Appetito — Restaurant Pinocchio Bückeburg</p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="border border-cream/20 p-2.5 transition-colors hover:border-gold hover:text-gold"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
                className="border border-cream/20 p-2.5 transition-colors hover:border-gold hover:text-gold"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.28em] uppercase text-gold">Navigation</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[
                ["Startseite", "#top"],
                ["Speisekarte", "#speisekarte"],
                ["Über uns", "#ueber-uns"],
                ["Galerie", "#galerie"],
                ["Kontakt", "#kontakt"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-gold">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.28em] uppercase text-gold">Kontakt</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>Hinüberstraße 1, 31675 Bückeburg</li>
              <li>
                <a href="tel:+4957225049" className="transition-colors hover:text-gold">
                  05722 5049
                </a>
              </li>
              <li>Ab 17:00 Uhr geöffnet</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-6xl border-t border-cream/10 px-6 pt-6 text-xs text-cream/50">
          © 2026 Restaurant Pinocchio
        </div>
      </footer>
    </div>
  );
}
