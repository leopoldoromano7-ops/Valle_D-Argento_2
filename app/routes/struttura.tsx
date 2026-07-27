import type { Route } from "./+types/struttura";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "La Struttura | Valle d'Argento 2" },
    {
      name: "description",
      content:
        "Scopri gli spazi, le camere, il parco e le terrazze della residenza Valle d'Argento 2.",
    },
  ];
}

const facilityImage = "/assets/struttura-giardino.jpg";
const facilityCloseImage = "/assets/struttura-esterno.jpg";

const commonSpaces = [
  {
    title: "Sala Ristorante",
    description: "Cucina curata e momenti conviviali in un ambiente luminoso.",
    icon: "restaurant",
    className: "md:col-span-2 md:row-span-2",
    image: facilityCloseImage,
  },
  {
    title: "Area Relax & Lounge",
    description: "Spazi tranquilli per lettura, visite e conversazioni.",
    icon: "weekend",
    className: "md:col-span-2",
    image: facilityImage,
  },
  {
    title: "Giardini",
    description: "Percorsi accessibili e zone verdi per vivere l'esterno.",
    icon: "park",
    className: "md:col-span-1",
    image: facilityImage,
  },
  {
    title: "Sale Polivalenti",
    description: "Ambienti dedicati ad attivita, laboratori e socialita.",
    icon: "groups",
    className: "md:col-span-1",
    image: facilityCloseImage,
  },
];

const roomFeatures = [
  "Sistemi di chiamata d'emergenza 24/7",
  "Letti articolati a comando elettrico",
  "Climatizzazione personalizzata e Wi-Fi",
];

const outdoorFeatures = [
  ["park", "Percorsi Vita"],
  ["sunny", "Solarium"],
  ["deck", "Terrazze Relax"],
  ["groups", "Aree Incontro"],
];

export default function Struttura() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <SiteHeader />

      <main className="pt-20">
        <section className="relative flex h-[85vh] min-h-[560px] items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              alt="Esterno della struttura Valle d'Argento 2"
              className="h-full w-full object-cover"
              src={facilityImage}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/75" />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white md:px-12">
            <h1 className="mb-5 text-4xl font-bold md:text-6xl">
              Un'oasi di pace nel cuore del verde
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/90">
              Architettura moderna e paesaggi naturali si fondono per offrire un
              soggiorno all'insegna del benessere, della sicurezza e della serenita.
            </p>
            <a className="btn-light" href="#spazi-comuni">
              Scopri gli spazi
              <span className="material-symbols-outlined">expand_more</span>
            </a>
          </div>
        </section>

        <section id="spazi-comuni" className="scroll-mt-24 py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-12">
            <div className="mb-8 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Eccellenza nell'accoglienza
              </span>
              <h2 className="mt-2 text-3xl font-bold text-secondary md:text-4xl">
                Spazi comuni: socialita e comfort
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2">
              {commonSpaces.map((space) => (
                <div
                  className={`group relative min-h-[240px] overflow-hidden rounded-xl bg-white shadow-sm ${space.className}`}
                  key={space.title}
                >
                  <img
                    alt={space.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={space.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-white/15 backdrop-blur-md">
                      <span className="material-symbols-outlined">{space.icon}</span>
                    </span>
                    <h3 className="text-xl font-bold">{space.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/85">
                      {space.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-12 md:px-12">
            <div className="md:col-span-4">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                La residenza
              </span>
              <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">
                Accoglienza, cura e spazi pensati per la quotidianita
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant md:col-span-8">
              <p>
                La R.S.A. Valle d'Argento 2 nasce dalla trasformazione di un
                esistente albergo ristorante "San Katrin" in una struttura di cura
                per adulti non autosufficienti (R3).
              </p>
              <p>
                La struttura, localizzata a circa 20 km da Salerno, e facilmente
                raggiungibile da qualsiasi localita ed e servita dai mezzi pubblici
                con fermata dinanzi all'ingresso della residenza. Immersa nel verde,
                con circa 4000 m2 di giardino attrezzato e organizzato con arredo
                per esterni, risulta molto confortevole data la tranquillita e
                salubrita dei luoghi.
              </p>
              <p>
                La struttura interna si sviluppa su due livelli, zona giorno e zona
                notte. A piano terra vi e la zona di accoglienza, con reception,
                direzione e amministrazione. La maggior parte della superficie e
                occupata dall'ampio salone con camino, dotato di grandi vetrate che
                offrono un'ottima luminosita; qui si svolgono le attivita di vita
                comune durante la giornata.
              </p>
              <p>
                Al piano terra sono presenti anche i locali sanitari: Sala Medici
                con ambulatorio, infermeria con annessa farmacia e palestra
                utilizzata per le specifiche attivita di riabilitazione,
                fisioterapia e terapia occupazionale. Completano il livello la
                cucina, il locale barberia e parruccheria e un'area bar con
                distribuzione di snack e bevande.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2 md:px-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                Privacy e sicurezza
              </span>
              <h2 className="mt-2 text-3xl font-bold text-on-surface md:text-4xl">
                Le camere: il tuo spazio personale
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-on-surface-variant">
                Ogni camera e progettata per garantire comfort, luce naturale e
                facilita di movimento. Arredi funzionali e dotazioni attente alla
                sicurezza creano uno spazio personale accogliente.
              </p>
              <ul className="mt-8 space-y-4">
                {roomFeatures.map((feature) => (
                  <li className="flex items-start gap-3" key={feature}>
                    <span className="material-symbols-outlined filled text-primary">
                      check_circle
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  alt="Dettaglio esterno della residenza"
                  className="h-64 w-full rounded-xl object-cover shadow-md"
                  src={facilityCloseImage}
                />
                <div className="rounded-xl bg-white p-5 shadow-md">
                  <span className="material-symbols-outlined mb-3 text-secondary">
                    bedroom_parent
                  </span>
                  <h3 className="font-bold text-primary">Camere singole e doppie</h3>
                  <p className="mt-2 text-sm text-on-surface-variant">
                    Soluzioni flessibili per esigenze diverse.
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-10">
                <div className="rounded-xl bg-white p-5 shadow-md">
                  <span className="material-symbols-outlined mb-3 text-secondary">
                    accessible
                  </span>
                  <h3 className="font-bold text-primary">Accessibilita</h3>
                  <p className="mt-2 text-sm text-on-surface-variant">
                    Spazi pensati per movimenti semplici e sicuri.
                  </p>
                </div>
                <img
                  alt="Vista della residenza nel verde"
                  className="h-80 w-full rounded-xl object-cover shadow-md"
                  src={facilityImage}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 md:grid-cols-3 md:px-12">
            <div className="rounded-xl border border-outline-variant bg-white p-6 shadow-sm">
              <span className="material-symbols-outlined mb-4 text-primary">
                meeting_room
              </span>
              <h3 className="text-xl font-bold text-primary">Zona notte</h3>
              <p className="mt-3 leading-relaxed text-on-surface-variant">
                Al piano superiore, servito da appositi ascensori, sono presenti 15
                stanze di degenza, ciascuna confortevolmente arredata nel rispetto
                dei criteri previsti per le residenze sanitarie.
              </p>
            </div>

            <div className="rounded-xl border border-outline-variant bg-white p-6 shadow-sm">
              <span className="material-symbols-outlined mb-4 text-primary">
                local_laundry_service
              </span>
              <h3 className="text-xl font-bold text-primary">Locali di servizio</h3>
              <p className="mt-3 leading-relaxed text-on-surface-variant">
                La struttura comprende bagni sanitari assistiti, tisanerie, locali
                per la sorveglianza notturna, lavanderia, camera ardente, depositi,
                dispensa, archivio, spogliatoi e sala riunioni con i parenti.
              </p>
            </div>

            <div className="rounded-xl border border-outline-variant bg-white p-6 shadow-sm">
              <span className="material-symbols-outlined mb-4 text-primary">
                accessible
              </span>
              <h3 className="text-xl font-bold text-primary">Accessibilita</h3>
              <p className="mt-3 leading-relaxed text-on-surface-variant">
                Tutti gli spazi interni ed esterni sono concepiti con attenzione
                alla fruibilita, all'abbattimento delle barriere architettoniche e
                alla mobilita degli ospiti con disabilita o ridotta autonomia.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-12">
            <div className="overflow-hidden rounded-xl border border-outline-variant bg-white shadow-sm">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img
                    alt="Parco e terrazze della struttura"
                    className="h-full min-h-[420px] w-full object-cover"
                    src={facilityCloseImage}
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:w-1/2 md:p-12">
                  <h2 className="mb-5 text-3xl font-bold text-primary md:text-4xl">
                    Vivere all'aria aperta
                  </h2>
                  <p className="mb-8 text-lg leading-relaxed text-on-surface-variant">
                    Il parco e le terrazze panoramiche offrono agli ospiti la
                    possibilita di godere della natura in ogni stagione, con zone
                    pensate per il relax, l'incontro e il movimento leggero.
                  </p>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {outdoorFeatures.map(([icon, label]) => (
                      <div className="flex items-center gap-3" key={label}>
                        <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                          <span className="material-symbols-outlined filled">
                            {icon}
                          </span>
                        </span>
                        <span className="font-bold">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
