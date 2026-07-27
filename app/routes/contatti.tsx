import type { Route } from "./+types/contatti";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contatti | Valle d'Argento 2" },
    {
      name: "description",
      content:
        "Contatta la RSA Valle d'Argento 2 per informazioni sui servizi o per prenotare una visita guidata.",
    },
  ];
}

const mailToAddress = "rsa.valledargento2@gmail.com";
const mapsQuery = "Via U. Linguiti 53, 84095 Giffoni Valle Piana SA";

export default function Contatti() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 py-14 pt-32 md:px-12">
        <header className="mb-12 max-w-3xl">
          <h1 className="text-4xl font-bold text-primary md:text-6xl">Contatti</h1>
          <p className="mt-5 text-lg leading-relaxed text-on-surface-variant md:text-xl">
            Siamo qui per rispondere a ogni tua domanda. Contattaci per
            informazioni sui nostri servizi di assistenza o per prenotare una
            visita guidata alla struttura.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-5">
            <section className="card-shadow rounded-xl border-t-4 border-primary bg-white p-6 md:p-8">
              <h2 className="mb-8 text-2xl font-bold text-secondary md:text-3xl">
                Informazioni Istituzionali
              </h2>
              <div className="space-y-6">
                <ContactRow icon="corporate_fare">
                  <p className="font-bold text-on-surface">
                    NUOVA VALLE D'ARGENTO S.R.L.
                  </p>
                  <p className="text-on-surface-variant">RSA Valle d'Argento 2</p>
                </ContactRow>
                <ContactRow icon="location_on">
                  <p className="text-on-surface-variant">
                    Via U. Linguiti n. 53 - 84095
                    <br />
                    Giffoni Valle Piana (SA)
                  </p>
                </ContactRow>
                <ContactRow icon="call">
                  <a className="text-on-surface-variant hover:text-primary" href="tel:089803498">
                    Tel. / fax 089.803.498
                  </a>
                </ContactRow>
                <ContactRow icon="mail">
                  <a
                    className="text-on-surface-variant hover:text-primary"
                    href={`mailto:${mailToAddress}`}
                  >
                    {mailToAddress}
                  </a>
                </ContactRow>
                <div className="border-t border-outline-variant pt-6">
                  <ContactRow icon="person">
                    <p className="text-xs font-bold uppercase text-primary">
                      Legale rappresentante
                    </p>
                    <p className="font-bold text-on-surface">Rosario Pantalena</p>
                  </ContactRow>
                </div>
              </div>
            </section>

            <section className="card-shadow overflow-hidden rounded-xl bg-white">
              <iframe
                aria-label="Mappa della RSA Valle d'Argento 2"
                className="h-80 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`}
                title="Mappa RSA Valle d'Argento 2"
              />
              <a
                className="flex items-center gap-3 border-t border-outline-variant px-5 py-4 font-bold text-on-surface transition-colors hover:text-primary"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`}
                rel="noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-primary">pin_drop</span>
                Apri su Google Maps
              </a>
            </section>
          </div>

          <section className="card-shadow h-fit rounded-xl bg-white p-6 md:p-8 lg:col-span-7">
            <h2 className="mb-8 text-2xl font-bold text-secondary md:text-3xl">
              Inviaci un messaggio
            </h2>
            {/* Placeholder mailto: da sostituire con SMTP/API quando il cliente fornisce le credenziali. */}
            <form
              action={`mailto:${mailToAddress}`}
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
              encType="text/plain"
              method="post"
            >
              <FormField
                id="name"
                label="Il tuo nome"
                name="nome"
                placeholder="Inserisci il tuo nome completo"
                required
                type="text"
              />
              <FormField
                id="email"
                label="La tua email"
                name="email"
                placeholder="esempio@email.it"
                required
                type="email"
              />
              <FormField
                className="md:col-span-2"
                id="subject"
                label="Oggetto"
                name="oggetto"
                placeholder="Di cosa hai bisogno?"
                required
                type="text"
              />
              <div className="md:col-span-2">
                <label className="mb-2 block font-bold text-on-surface-variant" htmlFor="message">
                  Il tuo messaggio (facoltativo)
                </label>
                <textarea
                  className="min-h-40 w-full resize-none rounded-lg border border-outline-variant bg-white px-4 py-3 text-on-surface outline-none transition-all focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  id="message"
                  name="messaggio"
                  placeholder="Scrivi qui la tua richiesta..."
                  rows={6}
                />
              </div>
              <div className="md:col-span-2">
                <button className="btn-primary" type="submit">
                  <span className="material-symbols-outlined filled">send</span>
                  Invia Messaggio
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

function ContactRow({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="material-symbols-outlined mt-1 text-primary">{icon}</span>
      <div>{children}</div>
    </div>
  );
}

function FormField({
  className = "",
  id,
  label,
  name,
  placeholder,
  required,
  type,
}: {
  className?: string;
  id: string;
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  type: string;
}) {
  return (
    <div className={className}>
      <label className="mb-2 block font-bold text-on-surface-variant" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full rounded-lg border border-outline-variant bg-white px-4 py-3 text-on-surface outline-none transition-all focus:border-secondary focus:ring-2 focus:ring-secondary/20"
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </div>
  );
}
