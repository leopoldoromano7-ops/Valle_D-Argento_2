import type { Route } from "./+types/struttura";
import type { CSSProperties } from "react";
import { useEffect } from "react";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "La Residenza | Valle d'Argento 2" },
    {
      name: "description",
      content:
        "Scopri ambienti, camere, spazi comuni, vita in comunita e orari di visita della RSA Valle d'Argento 2.",
    },
  ];
}

const facilityImage = "/assets/struttura-giardino.jpg";
const facilityCloseImage = "/assets/struttura-esterno.jpg";

// Dati editoriali della pagina: modificare questi array aggiorna le card.
const moduleSpaces = [
  {
    icon: "weekend",
    title: "Soggiorno",
    text: "Ambiente soggiorno-pranzo arredato con tavoli, sedie, salotti e poltrone, dotato di TV e destinato anche alla somministrazione dei pasti.",
  },
  {
    icon: "local_cafe",
    title: "Tisaneria e cucinetta",
    text: "Spazio dedicato alla preparazione delle colazioni e alla gestione delle esigenze di ristoro degli ospiti durante la giornata.",
  },
  {
    icon: "support_agent",
    title: "Presidio di modulo",
    text: "Postazione dedicata alla gestione e al coordinamento delle attivita assistenziali.",
  },
  {
    icon: "accessible_forward",
    title: "Bagno assistito",
    text: "Ambiente attrezzato con ausili specifici per garantire sicurezza e comfort durante le attivita di igiene personale.",
  },
];

const roomFeatures = [
  "Bagno privato",
  "Arredi funzionali",
  "Letti articolati e regolabili elettricamente",
  "TV e sistema di chiamata del personale",
  "Dispositivi di comunicazione interna",
  "Armadio, comodino e spazi personali dedicati",
];

const communitySpaces = [
  "Spazi per accoglienza e orientamento di ospiti e visitatori",
  "Aree dedicate al relax e alla socializzazione",
  "Ambienti per attivita riabilitative, ricreative e di supporto alla cura",
  "Aree per animazione, socialita, raccoglimento spirituale e pratica religiosa",
  "Cucina, lavanderia-guardaroba, depositi e spazi riservati al personale",
  "Spazi esterni accessibili e sicuri per relax e vita all'aria aperta",
];

const dailySchedule = [
  {
    time: "Ore 6.30",
    title: "Risveglio e cura della persona",
    text: "Supporto del personale assistenziale e infermieristico per igiene personale, vestizione, mobilizzazione, cambio biancheria, terapie, medicazioni e prestazioni sanitarie programmate.",
  },
  {
    time: "Ore 8.15",
    title: "Colazione",
    text: "Colazione nelle aree dedicate e primi momenti di pausa e convivialita.",
  },
  {
    time: "Ore 8.45",
    title: "Attivita mattutine",
    text: "La mattinata e dedicata al benessere, alla socializzazione e al mantenimento delle capacita individuali. Gli ospiti possono partecipare, secondo le proprie esigenze e condizioni, ad attivita di animazione, stimolazione cognitiva, musica, lettura, giochi, laboratori creativi e ginnastica dolce. Inoltre sono svolte le attivita di fisioterapia e riabilitazione, insieme alle prestazioni mediche, infermieristiche e assistenziali programmate. La mattinata prevede anche momenti di pausa e convivialita.",
  },
  {
    time: "Ore 12.00",
    title: "Pranzo e momento di relax",
    text: "Il pranzo e un momento di convivialita. Nel pomeriggio sono previsti riposo e relax negli spazi personali o nelle aree comuni.",
  },
  {
    time: "Dalle ore 14.30",
    title: "Attivita e socializzazione",
    text: "Proseguono animazione, socializzazione e fisioterapia. Alle 15.30/16.00 viene proposta la merenda.",
  },
  {
    time: "Dalle ore 18.00",
    title: "Sera e riposo notturno",
    text: "Cena, preparazione al riposo, terapie serali e assistenza notturna continua per sorveglianza, bisogni degli ospiti e interventi necessari.",
  },
];

const communityLifeItems = [
  {
    icon: "photo_library",
    title: "Foto eventi e attivita",
    text: "La vita in RSA viene raccontata attraverso momenti di socializzazione, laboratori, feste, attivita ricreative e iniziative condivise con ospiti, familiari e personale.",
  },
  {
    icon: "event_available",
    title: "Attivita in programma",
    text: "Le proposte vengono organizzate in base agli interessi e alle capacita degli ospiti, alternando attivita educative, occupazionali, musicali e momenti di incontro.",
  },
  {
    icon: "campaign",
    title: "Inviti e manifestazioni",
    text: "La struttura promuove occasioni di partecipazione alla vita comunitaria, valorizzando ricorrenze, eventi interni e iniziative aperte alla presenza dei familiari.",
  },
];

export default function Struttura() {
  useEffect(() => {
    // Attiva le animazioni di ingresso solo quando i blocchi entrano in viewport.
    const revealElements = document.querySelectorAll<HTMLElement>(".scroll-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <SiteHeader />

      <main className="pt-20">
        <section className="relative flex h-[72vh] min-h-[520px] items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              alt="Esterno della RSA Valle d'Argento 2"
              className="h-full w-full object-cover"
              src={facilityImage}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/70" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white md:px-12">
            <span className="text-xs font-bold uppercase tracking-widest text-soft-gold">
              La Residenza
            </span>
            <h1 className="mt-4 text-4xl font-bold md:text-6xl">
              Ambienti sicuri, accoglienti e pensati per la vita quotidiana
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
              Camere, moduli autonomi, spazi comuni e aree esterne sono organizzati
              per favorire comfort, autonomia, socializzazione e continuita della
              cura.
            </p>
          </div>
        </section>

        <section id="ambienti-spazi-interni" className="scroll-mt-28 bg-surface py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-4 md:px-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                Ambienti e spazi interni
              </span>
              <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">
                Spazi progettati per comfort, sicurezza e qualita della vita
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  ["14", "Stanze arredate"],
                  ["31", "Posti letto"],
                  ["2", "Nuclei ordinari"],
                ].map(([value, label]) => (
                  <div
                    className="border-l-4 border-primary bg-surface-container-low px-5 py-4"
                    key={label}
                  >
                    <div className="text-4xl font-bold text-primary">{value}</div>
                    <div className="mt-1 text-sm font-bold uppercase tracking-wider text-on-surface-variant">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="space-y-5 text-lg leading-relaxed text-on-surface-variant lg:col-span-8"
              style={{ paddingTop: "30px" }}
            >
              <p>
                La RSA Valle d'Argento 2 e organizzata in moduli autonomi,
                progettati per garantire un ambiente assistenziale funzionale,
                accogliente e rispondente alle esigenze delle persone anziane non
                autosufficienti.
              </p>
              <p>
                Gli spazi abitativi e le aree comuni sono organizzati per offrire
                comfort, sicurezza e qualita della vita, con ambienti pensati per
                favorire la socializzazione, l'autonomia e il benessere quotidiano
                degli ospiti.
              </p>
              <p>
                Sono inoltre presenti spazi dedicati all'assistenza sanitaria,
                quali ambulatorio e postazioni infermieristiche, per garantire in
                qualsiasi momento della giornata un supporto tempestivo e
                qualificato.
              </p>
            </div>
          </div>
        </section>

        <section id="moduli" className="scroll-mt-28 bg-surface-container-low py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-12">
            <div className="mb-10 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                Ogni modulo dispone di
              </span>
              <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">
                Spazi funzionali alla cura e alla quotidianita
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {moduleSpaces.map((space) => (
                <article
                  className="border border-outline-variant bg-white p-6 shadow-sm"
                  key={space.title}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined filled">
                      {space.icon}
                    </span>
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-primary">
                    {space.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-on-surface-variant">
                    {space.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="spazi-ambienti-esterni" className="scroll-mt-28 py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2 md:px-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                Spazi e ambienti esterni
              </span>
              <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">
                Aree accessibili per relax, passeggiate e socializzazione
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-on-surface-variant">
                <p>
                  Gli spazi esterni della RSA sono progettati per offrire agli
                  ospiti un ambiente piacevole, sicuro e accogliente, favorendo
                  momenti di relax, socializzazione e permanenza all'aria aperta.
                </p>
                <p>
                  Le aree esterne, accessibili e prive di barriere architettoniche,
                  consentono agli ospiti di usufruire di spazi dedicati alle
                  passeggiate e alle attivita ricreative.
                </p>
              </div>
            </div>

            <img
              alt="Spazi esterni della RSA Valle d'Argento 2"
              className="h-96 w-full object-cover shadow-lg"
              src={facilityCloseImage}
            />
          </div>
        </section>

        <section id="camere-degenza" className="scroll-mt-28 bg-surface-container-low py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-12 md:px-12">
            <div className="md:col-span-5">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                Camere di degenza
              </span>
              <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">
                Privacy, sicurezza e comfort personale
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-on-surface-variant">
                Le camere sono progettate per garantire agli ospiti un ambiente
                confortevole, sicuro e funzionale, adeguato ai diversi bisogni
                assistenziali e personali.
              </p>
            </div>

            <div className="md:col-span-7">
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {roomFeatures.map((feature) => (
                  <li
                    className="flex items-start gap-3 border-l-4 border-primary bg-white px-5 py-4 shadow-sm"
                    key={feature}
                  >
                    <span className="material-symbols-outlined mt-0.5 text-primary">
                      check_circle
                    </span>
                    <span className="font-bold text-on-surface-variant">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="ambienti-vita-collettivi" className="scroll-mt-28 py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:px-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                Ambienti di vita collettivi
              </span>
              <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">
                Area ristoro, relax e servizi comuni
              </h2>
            </div>

            <div className="lg:col-span-8">
              <p className="text-lg leading-relaxed text-on-surface-variant">
                La residenza e organizzata per garantire ambienti facilmente
                accessibili, funzionali e confortevoli, progettati per favorire la
                sicurezza, l'autonomia e la socializzazione.
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {communitySpaces.map((space) => (
                  <li className="flex items-start gap-3" key={space}>
                    <span className="material-symbols-outlined mt-0.5 text-primary">
                      check_circle
                    </span>
                    <span className="leading-relaxed text-on-surface-variant">
                      {space}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="attivita-giornata" className="scroll-mt-28 bg-surface-container-low py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-12">
            <div className="mb-10 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                Attivita di giornata
              </span>
              <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">
                Una quotidianita fatta di cura, riposo e relazioni
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-on-surface-variant">
                La giornata in RSA e pensata per offrire equilibrio tra cura,
                sicurezza, autonomia e relazioni, rispettando ritmi personali,
                abitudini e necessita di ciascun ospite.
              </p>
            </div>

            <div className="space-y-4">
              {dailySchedule.map((item, index) => (
                <article
                  className="scroll-reveal grid grid-cols-1 gap-4 border-l-4 border-primary bg-white p-5 shadow-sm md:grid-cols-[180px_1fr]"
                  key={item.title}
                  style={
                    {
                      transitionDelay: `${Math.min(index * 80, 320)}ms`,
                    } as CSSProperties
                  }
                >
                  <div className="font-bold text-primary">{item.time}</div>
                  <div>
                    <h3 className="text-xl font-bold text-on-surface">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-on-surface-variant">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="vita-comunita" className="scroll-mt-28 py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-12 md:px-12">
            <div className="md:col-span-5">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                La vita in comunita
              </span>
              <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">
                Attivita, relazioni e momenti condivisi
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-on-surface-variant">
                <p>
                  La RSA Valle d'Argento 2 promuove una vita comunitaria attiva,
                  fatta di occasioni di incontro, attivita ricreative e momenti di
                  partecipazione pensati per sostenere il benessere emotivo e
                  relazionale degli ospiti.
                </p>
                <p>
                  Le iniziative vengono programmate periodicamente e adattate ai
                  bisogni, agli interessi e alle possibilita di ciascuna persona,
                  favorendo socializzazione, continuita affettiva e senso di
                  appartenenza.
                </p>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {communityLifeItems.map((item) => (
                  <article
                    className="border border-outline-variant bg-white p-5 shadow-sm"
                    key={item.title}
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <span className="material-symbols-outlined filled">
                        {item.icon}
                      </span>
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <img
                  alt="Giardino e spazi esterni della RSA Valle d'Argento 2"
                  className="h-64 w-full object-cover shadow-lg"
                  src={facilityImage}
                />
                <img
                  alt="Esterno della struttura Valle d'Argento 2"
                  className="h-64 w-full object-cover shadow-lg"
                  src={facilityCloseImage}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="orari-visita" className="scroll-mt-28 py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-12 md:px-12">
            <div className="md:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                Orari di visita consigliati
              </span>
              <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">
                Una residenza aperta alle relazioni
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-on-surface-variant">
                <p>
                  La RSA Valle d'Argento 2 valorizza il mantenimento dei legami
                  familiari e sociali, favorendo la presenza di familiari, amici e
                  persone significative nella vita degli ospiti.
                </p>
                <p>
                  Le visite sono consentite tutti i giorni dalle 9.00 alle 18.00,
                  nel rispetto delle esigenze organizzative della struttura e dei
                  ritmi di vita degli ospiti.
                </p>
                <p>
                  Si consiglia di evitare le visite durante gli orari dei pasti e
                  del riposo pomeridiano, dalle 12.00 alle 14.30 e dalle 18.00 in
                  poi, salvo particolari esigenze o autorizzazioni del Medico.
                </p>
              </div>
            </div>

            <aside className="border-l-4 border-primary bg-surface-container-low p-6 md:col-span-5">
              <h3 className="text-2xl font-bold text-primary">
                Uscite temporanee
              </h3>
              <p className="mt-4 leading-relaxed text-on-surface-variant">
                Compatibilmente con le condizioni cliniche dell'ospite e previa
                valutazione del Direttore Sanitario, sono possibili uscite
                temporanee con i familiari, anche per piu giorni. Il personale
                infermieristico provvede alla preparazione e alla consegna della
                terapia necessaria.
              </p>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
