import type { Route } from "./+types/home";
import { useState } from "react";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Valle d'Argento 2 | RSA & Senior Living" },
    {
      name: "description",
      content:
        "Residenza per anziani immersa nel verde, con assistenza professionale e ambienti familiari.",
    },
  ];
}

const facilityImage = "/assets/foto-struttura.jpg";

const accrediaImage = "/assets/accredia.png";
const tuvAustriaImage = "/assets/tuv-austria-iso-9001.jpg";

const services = [
  {
    icon: "medical_services",
    label: "Assistenza Medica",
    title: "Assistenza Medica Specialistica",
    description:
      "Un'equipe medica multidisciplinare garantisce un monitoraggio costante e professionale 24 ore su 24.",
    features: [
      "Monitoraggio H24",
      "Medici specialisti in sede",
      "Piani di cura personalizzati",
      "Gestione farmaci",
    ],
  },
  {
    icon: "health_and_safety",
    label: "Infermieristica",
    title: "Assistenza Infermieristica",
    description:
      "Presenza qualificata e continuita assistenziale per seguire ogni ospite nelle necessita quotidiane.",
    features: ["Supporto quotidiano", "Controllo parametri", "Terapie programmate"],
  },
  {
    icon: "accessibility_new",
    label: "Riabilitazione",
    title: "Percorsi Riabilitativi",
    description:
      "Attivita pensate per mantenere autonomia, mobilita e benessere fisico in modo progressivo.",
    features: ["Valutazioni dedicate", "Esercizi assistiti", "Obiettivi individuali"],
  },
  {
    icon: "fitness_center",
    label: "Palestra",
    title: "Palestra Attrezzata",
    description:
      "Spazi funzionali e sicuri per attivita motorie supervisionate dal personale specializzato.",
    features: ["Spazi protetti", "Sedute guidate", "Attrezzature dedicate"],
  },
  {
    icon: "groups",
    label: "Attivita Ricreative",
    title: "Attivita Ricreative",
    description:
      "Momenti di socialita e stimolazione pensati per rendere viva e familiare la quotidianita.",
    features: ["Laboratori", "Incontri di gruppo", "Animazione sociale"],
  },
  {
    icon: "restaurant",
    label: "Cucina Interna",
    title: "Cucina Interna",
    description:
      "Menu preparati in struttura, con attenzione alle esigenze nutrizionali e ai gusti personali.",
    features: ["Pasti equilibrati", "Diete personalizzate", "Qualita controllata"],
  },
];

export default function Home() {
  const [selectedService, setSelectedService] = useState<(typeof services)[number] | null>(
    null,
  );

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <SiteHeader />

      <main id="top" className="pt-20">
        <section className="relative flex h-[85vh] min-h-[560px] items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              alt="Esterno della struttura Valle d'Argento 2"
              className="h-full w-full object-cover"
              src={facilityImage}
            />
          </div>

          <div className="relative z-20 mx-auto w-full max-w-7xl px-4 text-white [text-shadow:0_2px_18px_rgb(0_0_0_/_0.45)] md:px-12">
            <div className="max-w-2xl">
              <span className="mb-6 inline-block rounded-full border border-soft-gold/30 bg-soft-gold/20 px-4 py-1 text-sm font-bold uppercase text-soft-gold backdrop-blur-sm">
                Eccellenza Certificata ISO 9001
              </span>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                Il calore di casa, la sicurezza di una cura professionale
              </h1>
              <p className="mb-10 max-w-xl text-lg leading-relaxed text-surface-variant md:text-xl">
                Una residenza immersa nel verde dedicata al benessere e alla dignita
                dei nostri ospiti.
              </p>
              <a className="btn-ghost-light" href="/servizi">
                Scopri i servizi
              </a>
            </div>
          </div>
        </section>

        <section id="info" className="bg-surface-container-low py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 md:px-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-5">
              <div className="inline-flex items-center gap-2 font-bold text-secondary">
                <span className="material-symbols-outlined">verified</span>
                <span className="text-xs uppercase tracking-widest">
                  Affidabilita & Qualita
                </span>
              </div>
              <h2 className="text-3xl font-bold text-primary md:text-4xl">
                Eccellenza Clinica e Umana
              </h2>
              <p className="text-lg leading-relaxed text-on-surface-variant">
                Ogni giorno lavoriamo per garantire i piu alti standard di
                assistenza. La nostra struttura non e solo un luogo di cura, ma un
                ecosistema protetto dove la dignita della persona e al centro.
              </p>
              <ul className="space-y-4">
                {[
                  "Standard di igiene e sicurezza ospedaliera",
                  "Monitoraggio costante 24/7 con personale specializzato",
                ].map((item) => (
                  <li className="flex items-start gap-3" key={item}>
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                      <span className="material-symbols-outlined filled text-sm">
                        check
                      </span>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-shadow flex flex-col items-center gap-5 rounded-xl border border-outline-variant/30 bg-white p-5 md:flex-row md:p-7 lg:col-span-6 lg:col-start-7">
              <div className="flex w-full justify-center md:w-1/2">
                <img
                  alt="Logo Accredia ente di accreditamento"
                  className="h-auto max-w-[130px] transition-transform duration-500 hover:scale-105 md:max-w-[150px]"
                  src={accrediaImage}
                />
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-3 border-t border-outline-variant/30 pt-5 md:w-1/2 md:border-l md:border-t-0 md:pl-5 md:pt-0">
                <img
                  alt="Certificazione TUV Austria ISO 9001"
                  className="h-auto max-h-36 max-w-full object-contain md:max-h-40"
                  src={tuvAustriaImage}
                />
                <span className="text-sm font-bold uppercase text-secondary">
                  Qualita Garantita
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-surface py-16">
          <div className="mx-auto mb-12 max-w-7xl px-4 text-center md:px-12">
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
              Servizi Integrati per il Benessere
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
          </div>

          <div className="no-scrollbar mx-auto flex max-w-7xl snap-x gap-8 overflow-x-auto px-4 pb-8 md:px-12">
            {services.map((service) => (
              <button
                className="group flex w-40 shrink-0 snap-center flex-col items-center gap-4 text-center"
                key={service.label}
                onClick={() => setSelectedService(service)}
                type="button"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-fixed/30 transition-all duration-300 group-hover:bg-primary">
                  <span className="material-symbols-outlined filled text-4xl text-primary transition-all duration-300 group-hover:text-white">
                    {service.icon}
                  </span>
                </span>
                <span className="text-sm font-bold text-primary">{service.label}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="bg-surface-container py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-12">
            <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-2xl lg:flex-row-reverse">
              <div className="h-[400px] lg:h-auto lg:w-1/2">
                <img
                  alt="Struttura Valle d'Argento 2 circondata dal verde"
                  className="h-full w-full object-cover"
                  src={facilityImage}
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-12 lg:w-1/2">
                <h2 className="mb-6 text-3xl font-bold text-primary md:text-4xl">
                  Un ambiente sereno e rigenerante
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-on-surface-variant">
                  Situata in una posizione privilegiata, la nostra struttura offre
                  ampi spazi verdi, terrazze panoramiche e ambienti familiari.
                </p>
                <a className="btn-primary w-fit" href="/struttura">
                  Scopri la struttura
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-deep-navy py-16">
          <div className="mx-auto max-w-7xl px-4 text-center md:px-12">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
              Vuoi venire a trovarci?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-surface-variant">
              Siamo aperti per visite guidate su appuntamento. Il nostro staff sara
              lieto di mostrarti la struttura e rispondere a ogni tua domanda.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />

      {selectedService && (
        <div
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
        >
          <button
            aria-label="Chiudi"
            className="absolute inset-0 bg-on-surface/60 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
            type="button"
          />
          <div className="relative w-full max-w-2xl overflow-hidden rounded-xl bg-surface shadow-2xl">
            <div className="p-8 md:p-12">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-fixed/30">
                  <span className="material-symbols-outlined filled text-3xl text-primary">
                    {selectedService.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  {selectedService.title}
                </h3>
              </div>

              <p className="mb-8 leading-relaxed text-on-surface-variant">
                {selectedService.description}
              </p>

              <ul className="mb-10 space-y-3">
                {selectedService.features.map((feature) => (
                  <li className="flex items-center gap-3" key={feature}>
                    <span className="material-symbols-outlined text-sm text-primary">
                      check_circle
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-center">
                <button
                  className="w-full rounded-lg bg-surface-container-high px-8 py-4 font-bold text-on-surface-variant transition-all hover:bg-surface-variant sm:w-auto sm:min-w-[200px]"
                  onClick={() => setSelectedService(null)}
                  type="button"
                >
                  Chiudi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
