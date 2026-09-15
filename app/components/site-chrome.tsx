import { useState } from "react";
import { useLocation } from "react-router";

const logoUrl = "/assets/logo-argento-transparent.png";

const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "struttura", label: "La Residenza", href: "/struttura" },
  { id: "accoglienza", label: "Accoglienza", href: "/accoglienza" },
  { id: "info", label: "Informazioni", href: "/informazioni" },
  { id: "news", label: "News", href: "/news" },
  { id: "contact", label: "Contatti", href: "/contatti" },
];

const residenceLinks = [
  { label: "Panoramica", href: "/struttura" },
  {
    label: "Ambienti e spazi interni",
    href: "/struttura#ambienti-spazi-interni",
  },
  {
    label: "Moduli",
    href: "/struttura#moduli",
  },
  {
    label: "Spazi e ambienti esterni",
    href: "/struttura#spazi-ambienti-esterni",
  },
  {
    label: "Camere di degenza",
    href: "/struttura#camere-degenza",
  },
  {
    label: "Ambienti di vita collettivi",
    href: "/struttura#ambienti-vita-collettivi",
  },
  { label: "Attivita di giornata", href: "/struttura#attivita-giornata" },
  {
    label: "La vita in comunita",
    href: "/struttura#vita-comunita",
  },
  {
    label: "Orari di visita consigliati",
    href: "/struttura#orari-visita",
  },
];

const contactEmail = "rsa.valledargento2@gmail.com";

export function SiteHeader() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResidenceOpen, setIsResidenceOpen] = useState(false);
  const pathname =
    location.pathname.length > 1
      ? location.pathname.replace(/\/+$/, "")
      : location.pathname;
  const activeItem =
    pathname === "/"
      ? "home"
      : pathname === "/struttura"
      ? "struttura"
      : pathname === "/accoglienza"
        ? "accoglienza"
      : pathname === "/informazioni"
        ? "info"
      : pathname.startsWith("/news")
        ? "news"
      : pathname === "/contatti"
        ? "contact"
      : location.hash.replace("#", "") || "home";

  const navClass = (item: string) =>
    `nav-link border-b-2 pb-1 hover:border-primary ${
      activeItem === item
        ? "border-primary text-primary"
        : "border-transparent"
    }`;

  return (
    <header className="fixed top-0 z-50 w-full bg-surface/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 md:px-12">
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
          {navItems.map((item) => (
            item.id === "struttura" ? (
              <div className="relative" key={item.id}>
                <button
                  aria-expanded={isResidenceOpen}
                  className={`${navClass(item.id)} flex items-center gap-1`}
                  onClick={() => setIsResidenceOpen((open) => !open)}
                  type="button"
                >
                  <span>{item.label}</span>
                  <span className="material-symbols-outlined text-lg">
                    expand_more
                  </span>
                </button>

                {isResidenceOpen && (
                  <div className="absolute left-0 top-full mt-4 max-h-[70vh] w-80 overflow-y-auto border border-outline-variant/60 bg-white p-2 text-left shadow-xl">
                    {residenceLinks.map((link) => (
                      <a
                        className="block rounded-md px-4 py-3 text-sm font-bold text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
                        href={link.href}
                        key={link.href}
                        onClick={() => setIsResidenceOpen(false)}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a className={navClass(item.id)} href={item.href} key={item.id}>
                {item.label}
              </a>
            )
          ))}
        </nav>

        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant bg-white/80 text-primary shadow-sm transition-all hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:hidden"
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
              item.id === "struttura" ? (
                <div key={item.id}>
                  <button
                    aria-expanded={isResidenceOpen}
                    className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-left font-bold transition-colors ${
                      activeItem === item.id
                        ? "bg-primary text-white"
                        : "text-on-surface-variant hover:bg-surface-container"
                    }`}
                    onClick={() => setIsResidenceOpen((open) => !open)}
                    type="button"
                  >
                    <span>{item.label}</span>
                    <span className="material-symbols-outlined">
                      {isResidenceOpen ? "expand_less" : "expand_more"}
                    </span>
                  </button>

                  {isResidenceOpen && (
                    <div className="mt-2 grid gap-1 border-l-4 border-primary/30 pl-3">
                      {residenceLinks.map((link) => (
                        <a
                          className="rounded-lg px-4 py-3 text-sm font-bold text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
                          href={link.href}
                          key={link.href}
                          onClick={() => {
                            setIsResidenceOpen(false);
                            setIsMenuOpen(false);
                          }}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
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
              )
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
            © 2024 Valle d'Argento 2 - Residenza Sanitaria Assistenziale
            accreditata con il Servizio Sanitario Nazionale.
          </p>
          <div className="flex items-center gap-3">
            <SocialLink
              href="https://www.facebook.com/RSAVALLEDARGENTO2/?locale=it_IT"
              label="Facebook"
              type="facebook"
            />
            <SocialLink
              href="https://www.instagram.com/rsa_valledargento2_/"
              label="Instagram"
              type="instagram"
            />
          </div>
        </div>

        <FooterLinks
          title="Residenza"
          links={[
            ["La Residenza", "/struttura"],
            ["Servizi", "/#services"],
            ["Accoglienza", "/accoglienza"],
            ["Vita in comunita", "/struttura"],
          ]}
        />
        <FooterLinks
          title="Informazioni"
          links={[
            ["Documenti", "/informazioni"],
            ["Tutele", "/informazioni"],
            ["Trasparenza", "/informazioni"],
            ["Contatti", "/contatti"],
          ]}
        />

        <div>
          <h3 className="footer-title">Contatti</h3>
          <ul className="space-y-4 text-surface-variant/80">
            <ContactItem icon="location_on" text="Via U. Linguiti n. 53 - 84095 Giffoni Valle Piana (SA)" />
            <ContactItem icon="call" text="Tel. / fax 089.803.498" />
            <ContactItem icon="mail" text={contactEmail} />
            <ContactItem icon="receipt_long" text="P.IVA 06054190654" />
            <ContactItem icon="badge" text="n. REA SA-493717" />
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h3 className="footer-title">{title}</h3>
      <ul className="space-y-4">
        {links.map(([label, href]) => (
          <li key={label}>
            <a
              className="text-sm text-surface-variant/80 underline decoration-soft-gold transition-all hover:text-soft-gold"
              href={href}
            >
              {label}
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

function SocialLink({
  href,
  label,
  type,
}: {
  href: string;
  label: string;
  type: "facebook" | "instagram";
}) {
  return (
    <a
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-surface-variant/30 text-surface-variant transition-all hover:border-soft-gold hover:bg-soft-gold hover:text-deep-navy"
      href={href}
      rel={href === "#" ? undefined : "noreferrer"}
      target={href === "#" ? undefined : "_blank"}
    >
      {type === "facebook" ? <FacebookIcon /> : <InstagramIcon />}
    </a>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <rect height="16" rx="5" width="16" x="4" y="4" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M17.5 6.8h.01" />
    </svg>
  );
}
