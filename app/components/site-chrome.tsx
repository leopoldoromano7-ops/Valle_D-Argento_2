import { useState } from "react";
import { useLocation } from "react-router";

const logoUrl = "/assets/logo-argento-transparent.png";

const navItems = [
  { id: "struttura", label: "La Residenza", href: "/struttura" },
  { id: "accoglienza", label: "Accoglienza", href: "/accoglienza" },
  { id: "info", label: "Informazioni", href: "/informazioni" },
  { id: "contact", label: "Contatti", href: "/contatti" },
];

export function SiteHeader() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeItem =
    location.pathname === "/struttura"
      ? "struttura"
      : location.pathname === "/accoglienza"
        ? "accoglienza"
      : location.pathname === "/informazioni"
        ? "info"
      : location.pathname === "/contatti"
        ? "contact"
      : location.hash.replace("#", "") || "home";

  const navClass = (item: string) =>
    `nav-link border-b-2 pb-1 ${
      activeItem === item
        ? "border-primary text-primary"
        : "border-transparent"
    }`;

  return (
    <header className="fixed top-0 z-50 w-full bg-surface/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-5 px-4 py-4 md:px-12">
        <nav className="hidden items-center gap-5 md:flex">
          {navItems.slice(0, 2).map((item) => (
            <a className={navClass(item.id)} href={item.href} key={item.id}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="logo-pop flex shrink-0 items-center transition-transform duration-200 active:scale-105"
          href="/"
          aria-label="Valle d'Argento 2"
        >
          <img
            alt="Valle d'Argento 2"
            className="h-12 w-auto object-contain md:mx-2 md:h-16"
            src={logoUrl}
          />
        </a>

        <nav className="hidden items-center gap-5 md:flex">
          {navItems.slice(2).map((item) => (
            <a className={navClass(item.id)} href={item.href} key={item.id}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
          className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant bg-white/80 text-primary shadow-sm transition-all hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          <span className="material-symbols-outlined">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-outline-variant/50 bg-surface px-4 py-3 shadow-md md:hidden">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2">
            {navItems.map((item) => (
              <a
                className={`rounded-lg px-4 py-3 font-bold transition-colors ${
                  activeItem === item.id
                    ? "bg-primary text-white"
                    : "text-on-surface-variant hover:bg-surface-container"
                }`}
                href={item.href}
                key={item.id}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-deep-navy py-16 text-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-4 md:px-12">
        <div className="space-y-6">
          <div className="text-2xl font-bold">Valle d'Argento 2</div>
          <p className="max-w-xs text-sm leading-relaxed text-surface-variant/80">
            © 2024 Valle d'Argento 2 - RSA & Senior Living. ISO 9001 Certified
            Quality Care.
          </p>
        </div>

        <FooterLinks
          title="Residenza"
          links={["Servizi Medici", "La Nostra Cucina", "Eventi e Attivita", "Prenota Soggiorno"]}
        />
        <FooterLinks
          title="Informazioni"
          links={["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility Statement"]}
        />

        <div>
          <h3 className="footer-title">Contatti</h3>
          <ul className="space-y-4 text-surface-variant/80">
            <ContactItem icon="location_on" text="Via delle Alpi, 12, 10100 Torino, Italia" />
            <ContactItem icon="call" text="+39 011 123 4567" />
            <ContactItem icon="mail" text="info@valledargento.it" />
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: string[] }) {
  const getHref = (link: string) =>
    title === "Residenza" && link !== "Prenota Soggiorno" ? "/#services" : "/";

  return (
    <div>
      <h3 className="footer-title">{title}</h3>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link}>
            <a
              className="text-sm text-surface-variant/80 underline decoration-soft-gold transition-all hover:text-soft-gold"
              href={getHref(link)}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactItem({ icon, text }: { icon: string; text: string }) {
  return (
    <li className="flex gap-3">
      <span className="material-symbols-outlined text-soft-gold">{icon}</span>
      <span className="text-sm">{text}</span>
    </li>
  );
}
