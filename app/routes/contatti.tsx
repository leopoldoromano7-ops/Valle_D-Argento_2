import { useState } from "react";
import type { FormEvent } from "react";
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
const pecAddress = "nuovavalledargento@pec.it";
const mapsQuery = "Via U. Linguiti 53, 84095 Giffoni Valle Piana SA";
const contactStockImage =
  "https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?auto=format&fit=crop&w=1200&q=80";

export default function Contatti() {
  const [formStatus, setFormStatus] = useState<
    { type: "success" | "error"; message: string } | null
  >(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    const form = event.currentTarget;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const result = (await response.json().catch(() => null)) as {
        message?: string;
      } | null;

      if (!response.ok) {
        throw new Error(result?.message || "Invio non riuscito.");
      }

      form.reset();
      setFormStatus({
        type: "success",
        message: result?.message || "Messaggio inviato correttamente.",
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Non siamo riusciti a inviare il messaggio. Riprova piu tardi.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

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
                <ContactRow icon="alternate_email">
                  <a
                    className="text-on-surface-variant hover:text-primary"
                    href={`mailto:${pecAddress}`}
                  >
                    PEC {pecAddress}
                  </a>
                </ContactRow>
                <ContactRow icon="receipt_long">
                  <div className="space-y-1 text-on-surface-variant">
                    <p>P.IVA 06054190654</p>
                    <p>n. REA SA-493717</p>
                  </div>
                </ContactRow>
                <div className="border-t border-outline-variant pt-6">
                  <ContactRow icon="person">
                    <p className="text-xs font-bold uppercase text-primary">
                      Legale rappresentante
                    </p>
                    <p className="font-bold text-on-surface">Rosario Pantalena</p>
                  </ContactRow>
                </div>
                <div className="border-t border-outline-variant pt-6">
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
                    Seguici
                  </h3>
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
            <img
              alt="Telefono, quaderno e penna su una scrivania"
              className="mb-8 h-56 w-full rounded-lg object-cover"
              loading="lazy"
              src={contactStockImage}
            />
            <form
              action="/contact.php"
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
              method="post"
              onSubmit={handleContactSubmit}
            >
              <input
                aria-hidden="true"
                autoComplete="off"
                className="hidden"
                name="website"
                tabIndex={-1}
                type="text"
              />
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
                {formStatus && (
                  <p
                    className={`mb-4 rounded-lg border px-4 py-3 text-sm font-bold ${
                      formStatus.type === "success"
                        ? "border-secondary/30 bg-secondary/10 text-secondary"
                        : "border-red-200 bg-red-50 text-red-700"
                    }`}
                    role="status"
                  >
                    {formStatus.message}
                  </p>
                )}
                <button className="btn-primary" disabled={isSubmitting} type="submit">
                  <span className="material-symbols-outlined filled">send</span>
                  {isSubmitting ? "Invio in corso..." : "Invia Messaggio"}
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
      className="flex h-12 w-12 items-center justify-center rounded-full border border-outline-variant bg-surface-container-low text-primary transition-all hover:border-primary hover:bg-primary hover:text-white"
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
