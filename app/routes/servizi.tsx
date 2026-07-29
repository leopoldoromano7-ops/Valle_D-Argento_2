import type { Route } from "./+types/servizi";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "I Servizi | Valle d'Argento 2" },
    {
      name: "description",
      content:
        "Scopri i servizi sanitari, riabilitativi, sociali e alberghieri della residenza Valle d'Argento 2.",
    },
  ];
}

const facilityImage = "/assets/foto-struttura.jpg";

// Immagini derivate dal mockup servizi per dare identita visiva a ogni area.
const serviceImages = {
  medical:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCpUYMJEMKI2FLjW3X8DApzrc25Xy77Tcr71KRJiE80PKdQi1z8hx9Hnc6Kp7UodrOVI9CD5r9TCAUqkMRJU3MBFGKK2M_4PmWSk2GwelKIteWqyCpwKk4-TLXIhm-jnM87o2uHzFGZx8TYVPFxaVPNguab8vt8hTT1tb690dQ3dCzqRiG_sxqsNiWnmrcBOKEnE-TQ67MXB6HrcCQXNRnd7_CUXPUQoHskCjJ7ufEZPdkkl5OCf-iHH4aABcbdOWiAK19sbYHWzks",
  rehab:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD3QuKr9qS68RqDeteRA4wgafoIfiuX1mnyUPGrMQTi0B4-iqrLB3Ljw4Dq-vdhHErUMsrQE_GgIFOFcPlCgl8wvNmzY6ZyN1lkODAIHjZHpGEHX-DKNcYUUDitczsO-M1SO9qiVqNgS3NAQkkd1gKkJrOPkr56bVKGFgvvmZBFyrA8CG3Rd_SuBXUkNgUC6jc3jfE_c_vHt2T_nYXaSGEre_uK1xarYHms9871X9OQY5sMCsROfr-x2oQd5WuljHBbEKqnLFtWAW8",
  workshop:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDZpGsQlGsuxx_yuynxDvH2Cewwb2FSDz-4C7fQqzZKS4JVuunyU7MeWFUM0szfH5JVpXyU_tOtw8lEZRefup6FypZf_zHRy8EhYLcfCK9jOPKPxTvKzrL5pYVjsF1bcW0RmuSezEppDSwde5tg0RwX7v9y4-YpDI7yhQtRePcJ0pnkozbTlOVcbPmPiqSINan2YohntACY-ireNuMU_YRvBS6ihTT3g29CaUMO1ckOUrlI-HnwdHzjAU3lQGxd6DjDUcBatOlj6Dc",
  social:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBrgKL0Cp3pIdznlAVvBQSytG23L3LACyNCBny_lbpWzCVc-dX8KN31d3Oa3PTxWQYui6KNkZO5MN6onM2iQQcaEF87KdwD-KbXl1HpuPwwyiOrZZ2bwCcw6-XfdTajGLuf_zfFLCaSkhjmkn_H-Jux-elhdrEPeeoLi6tTMiPAF1-m8f5vWXXQquIBDkHxFjWJ5To-D7LC-dgfRjiGz0gxJpUirrfTvBPMNFFyFAHF52ihI4sKUxYNpjKv0bS451CL2naiXBsYbOk",
  dining:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBagbIelFPehYQkGGvkAWaYok9EfYG1yEG-h4OVDj50fXSfWfYoVh4NNWFEqRQtp4UG2ag0NvaEZgvZ5q8zWlLuWodRavUnCki8sAh5WOk6q9HR6JWkHDXiRhYb9chUktioGu7oSKmrU0T6PoFk54oOcXmViIUlwIHg5vCl4iZ_QL_j6Lcr6KfYxLJB7aOhC54VxwM5y4kMeltyy3mbkmKGkVQVKTfLEyhjsQAXCuMYe-Fl61kfr9wcG89JcNMJ9qqQXAAe8LNqjBM",
};

const medicalFeatures = [
  "Monitoraggio costante",
  "Somministrazione terapie",
  "Supporto geriatrico",
  "Gestione emergenze",
];

// Voci sintetiche per la sezione di supporto quotidiano.
const careServices = [
  ["psychology", "Supporto psicologico"],
  ["cleaning_services", "Igiene e cura personale"],
  ["medication", "Gestione farmaci"],
  ["family_restroom", "Relazione con le famiglie"],
];

const institutionalServices = [
  {
    icon: "medical_services",
    title: "Assistenza sanitaria",
    description:
      "L'equipe multifunzionale, coordinata dal Direttore Sanitario, si occupa di diagnosi, cura, prevenzione e riabilitazione, avvalendosi quando necessario di consulenze specifiche ed esami di diagnostica strumentale.",
  },
  {
    icon: "health_and_safety",
    title: "Assistenza infermieristica h24",
    description:
      "Gli infermieri garantiscono le prestazioni di routine, tra cui terapia iniettiva, fleboclisi, prelievi e medicazioni, e segnalano tempestivamente eventuali modificazioni dello stato di salute degli ospiti.",
  },
  {
    icon: "directions_walk",
    title: "Riabilitazione quotidiana",
    description:
      "Le attivita riabilitative sono affidate ai fisioterapisti, che lavorano quotidianamente per favorire il mantenimento delle abilita funzionali residue.",
  },
  {
    icon: "volunteer_activism",
    title: "Supporto socio-assistenziale",
    description:
      "Il personale O.S.S. e O.S.A. garantisce igiene, cura, aiuto, sorveglianza e mobilizzazione periodica in caso di allettamento prolungato, anche per la prevenzione delle lesioni da decubito.",
  },
];

export default function Servizi() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <SiteHeader />

      <main className="pt-20">
        <section className="relative flex h-[72vh] min-h-[540px] items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              alt="Valle d'Argento 2 immersa nel verde"
              className="h-full w-full object-cover"
              src={facilityImage}
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white md:px-12">
            <h1 className="mb-5 text-4xl font-bold md:text-6xl">
              I Nostri Servizi
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
              Presidio socio-assistenziale residenziale e permanente rivolto ad
              adulti non autosufficienti, con percorsi di cura pensati per salute,
              autonomia e qualita della vita.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a className="btn-primary" href="#assistenza">
                Scopri di piu
                <span className="material-symbols-outlined">expand_more</span>
              </a>
              <a className="btn-ghost-light" href="/struttura">
                Tour struttura
              </a>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-12 md:px-12">
            <div className="md:col-span-4">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                Presidio R3
              </span>
              <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">
                Servizi orientati alla persona e alla continuita della cura
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant md:col-span-8">
              <p>
                La R.S.A. Valle d'Argento 2 si pone come presidio
                socio-assistenziale di carattere residenziale, permanente, rivolto
                a persone adulte giunte allo stato di non autosufficienza fisica
                e/o psichica, totale o parziale, per le quali non sia possibile la
                permanenza nel proprio ambito familiare e sociale.
              </p>
              <p>
                Agli ospiti vengono garantite prestazioni e servizi che concorrono
                al mantenimento dello stato di salute, delle capacita funzionali
                residue e della cura di se, oppure al recupero della massima
                autonomia possibile, in funzione del raggiungimento e/o
                mantenimento del miglior livello possibile di qualita della vita.
              </p>
            </div>
          </div>
        </section>

        <section id="assistenza" className="scroll-mt-24 py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 md:grid-cols-12 md:px-12">
            <article className="relative overflow-hidden rounded-xl border border-outline-variant bg-white p-6 shadow-sm md:col-span-8 md:p-9">
              <div className="absolute inset-y-0 left-0 w-2 bg-primary" />
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_320px]">
                <div>
                  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    24/7 Presidio Medico
                  </span>
                  <h2 className="mt-5 text-3xl font-bold text-primary md:text-4xl">
                    Assistenza Medica & Infermieristica
                  </h2>
                  <p className="mt-5 leading-relaxed text-on-surface-variant md:text-lg">
                    L'assistenza sanitaria e composta da un'equipe multifunzionale
                    che garantisce cura, prevenzione, riabilitazione e monitoraggio
                    costante. L'assistenza infermieristica e presente in struttura
                    h24.
                  </p>
                  <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {medicalFeatures.map((feature) => (
                      <li className="flex items-center gap-3 font-bold" key={feature}>
                        <span className="material-symbols-outlined filled text-primary">
                          check_circle
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <img
                  alt="Infermiera che assiste una persona anziana"
                  className="h-80 w-full rounded-xl object-cover shadow-md"
                  src={serviceImages.medical}
                />
              </div>
            </article>

            <article className="rounded-xl bg-primary-fixed p-6 text-on-surface shadow-sm md:col-span-4 md:p-9">
              <span className="material-symbols-outlined mb-7 text-4xl">
                fitness_center
              </span>
              <h2 className="text-2xl font-bold md:text-3xl">
                Riabilitazione e Fisioterapia
              </h2>
              <p className="mt-5 leading-relaxed">
                Attivita quotidiane affidate ai fisioterapisti, orientate al
                mantenimento delle abilita dei pazienti e al recupero funzionale.
              </p>
              <img
                alt="Palestra riabilitativa con attrezzature dedicate"
                className="mt-9 h-52 w-full rounded-xl object-cover shadow-inner"
                src={serviceImages.rehab}
              />
            </article>

            <article className="rounded-xl border border-outline-variant/40 bg-surface-container-high p-6 shadow-sm md:col-span-4 md:p-9">
              <span className="mb-7 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                <span className="material-symbols-outlined">groups</span>
              </span>
              <h2 className="text-2xl font-bold text-on-surface md:text-3xl">
                Vita Sociale e Animazione
              </h2>
              <p className="mt-5 leading-relaxed text-on-surface-variant">
                Le attivita sociali e di animazione favoriscono integrazione,
                socializzazione, rapporti familiari e superamento della solitudine.
              </p>
              <div className="mt-9 grid grid-cols-2 gap-3">
                <img
                  alt="Laboratorio creativo per ospiti"
                  className="h-24 w-full rounded-lg object-cover"
                  src={serviceImages.workshop}
                />
                <img
                  alt="Momento di socialita tra ospiti e personale"
                  className="h-24 w-full rounded-lg object-cover"
                  src={serviceImages.social}
                />
              </div>
            </article>

            <article className="rounded-xl border border-outline-variant bg-surface-container p-6 shadow-sm md:col-span-8 md:p-9">
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                <div>
                  <span className="material-symbols-outlined mb-5 text-4xl text-primary">
                    restaurant
                  </span>
                  <h2 className="text-3xl font-bold text-on-surface md:text-4xl">
                    Ristorazione e Benessere
                  </h2>
                  <p className="mt-5 leading-relaxed text-on-surface-variant md:text-lg">
                    I pasti sono preparati dalla cucina interna e seguono le
                    esigenze quantitative e qualitative dei singoli ospiti. La
                    somministrazione avviene generalmente nella Sala Ristorante
                    comune.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <span className="inline-flex items-center gap-2 rounded-lg border border-outline-variant bg-white px-4 py-3 font-bold">
                      <span className="material-symbols-outlined text-primary">
                        local_dining
                      </span>
                      Menu Personalizzati
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-lg border border-outline-variant bg-white px-4 py-3 font-bold">
                      <span className="material-symbols-outlined text-primary">
                        eco
                      </span>
                      Prodotti Bio
                    </span>
                  </div>
                </div>

                <img
                  alt="Sala ristorante apparecchiata per il pranzo"
                  className="h-80 w-full rounded-xl object-cover shadow-md lg:h-full"
                  src={serviceImages.dining}
                />
              </div>
            </article>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 md:grid-cols-2 md:px-12 lg:grid-cols-4">
            {institutionalServices.map((service) => (
              <article
                className="rounded-xl border border-outline-variant bg-white p-6 shadow-sm"
                key={service.title}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <span className="material-symbols-outlined filled">
                    {service.icon}
                  </span>
                </span>
                <h3 className="mt-5 text-xl font-bold text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-on-surface-variant">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-surface-container-low py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-12">
            <div className="mb-10 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                Cura quotidiana
              </span>
              <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">
                Servizi alberghieri e relazioni quotidiane
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-on-surface-variant">
                La struttura garantisce vitto e alloggio, lavanderia, stireria e
                guardaroba. All'ingresso viene assegnato un posto letto in camera
                singola, doppia o tripla, tutte dotate di servizi igienici
                attrezzati. Il guardaroba viene catalogato dal personale, mentre la
                biancheria da letto e fornita direttamente dalla R.S.A.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {careServices.map(([icon, label]) => (
                <div
                  className="rounded-xl border border-outline-variant/50 bg-white p-6 shadow-sm"
                  key={label}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined filled">{icon}</span>
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-on-surface">{label}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-deep-navy py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 text-center md:px-12">
            <h2 className="text-3xl font-bold md:text-5xl">
              Vuoi conoscere i servizi dal vivo?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-surface-variant">
              Organizziamo visite guidate su appuntamento per mostrare ambienti,
              personale e percorsi assistenziali.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
