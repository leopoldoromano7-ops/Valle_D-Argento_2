import type { Route } from "./+types/accoglienza";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Accoglienza | Valle d'Argento 2" },
    {
      name: "description",
      content:
        "Modalita di accesso, ufficio accettazione e documenti necessari per l'ingresso nella RSA Valle d'Argento 2.",
    },
  ];
}

const healthDocuments = [
  "Certificazione del medico curante relativa alle condizioni cliniche dell'utente",
  "Cartelle cliniche e lettere di dimissione ospedaliera di ricoveri precedenti",
  "Referti di visite specialistiche ed esami diagnostici recenti, preferibilmente effettuati negli ultimi 3 mesi",
  "Referti di esami ematochimici e strumentali disponibili",
  "Terapia farmacologica in corso con indicazione di farmaci, dosaggi e modalita di somministrazione",
  "Relazioni sanitarie e assistenziali precedenti: ADI, servizi territoriali, altre strutture residenziali o semiresidenziali",
  "Documentazione relativa a patologie croniche, interventi chirurgici pregressi e condizioni cliniche rilevanti",
  "Certificazioni relative ad allergie, intolleranze farmacologiche o alimentari",
  "Indicazioni su eventuali necessita dietetiche specifiche",
];

const administrativeDocuments = [
  "Documento di identita in corso di validita",
  "Codice fiscale",
  "Tessera sanitaria",
  "Certificato di invalidita, di accompagnamento ed eventuale documentazione relativa all'esenzione ticket",
  "Eventuale documento di identita e codice fiscale del familiare, tutore o amministratore di sostegno referente",
  "Documentazione relativa alla nomina di tutore, curatore o amministratore di sostegno, se presente",
  "Recapiti aggiornati dei familiari o referenti da contattare in caso di necessita",
];

const accessSteps = [
  {
    icon: "assignment",
    title: "Richiesta e valutazione",
    text: "Il medico di medicina generale, i servizi sociali territoriali o altri servizi sanitari segnalano il bisogno assistenziale dell'utente e viene richiesta una valutazione multidimensionale.",
  },
  {
    icon: "groups",
    title: "Valutazione UVI distrettuale",
    text: "L'Unita di Valutazione Integrata dell'ASL valuta non autosufficienza, bisogni sanitari e sociali e impossibilita di garantire adeguata assistenza al domicilio.",
  },
  {
    icon: "fact_check",
    title: "Autorizzazione e ingresso",
    text: "L'accesso in RSA viene autorizzato dal Distretto Sanitario competente. L'ingresso avviene in base all'autorizzazione ricevuta, alla disponibilita di posti e alla tipologia assistenziale necessaria.",
  },
];

export default function Accoglienza() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <SiteHeader />

      <main className="pt-20">
        <section className="bg-surface-container-low py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-12 md:px-12">
            <div className="md:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                Accoglienza
              </span>
              <h1 className="mt-3 text-4xl font-bold text-primary md:text-6xl">
                Modalita di accesso e documenti per l'ingresso
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
                L'accesso alla RSA Valle d'Argento 2 avviene attraverso un
                percorso autorizzato dall'ASL, con il supporto della struttura
                nelle fasi informative, organizzative e documentali.
              </p>
            </div>

            <aside className="h-fit border-l-4 border-primary bg-white p-6 shadow-sm md:col-span-5">
              <h2 className="text-2xl font-bold text-primary">
                Ufficio accettazione
              </h2>
              <p className="mt-4 leading-relaxed text-on-surface-variant">
                Per informazioni sulle modalita di accesso e sulla documentazione
                necessaria e possibile contattare l'ufficio accettazione.
              </p>
              <div className="mt-6 space-y-3 font-bold text-on-surface">
                <p>Tel. 089 803498</p>
                <p>Email rsa.valledargento2@gmail.com</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-12">
            <div className="mb-10 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                Percorso di ingresso
              </span>
              <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">
                Dalla richiesta alla presa in carico
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {accessSteps.map((step) => (
                <article
                  className="border border-outline-variant bg-white p-6 shadow-sm"
                  key={step.title}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined filled">
                      {step.icon}
                    </span>
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-on-surface-variant">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-12 md:px-12">
            <div className="space-y-5 text-lg leading-relaxed text-on-surface-variant md:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                Modalita di accesso
              </span>
              <h2 className="text-3xl font-bold text-primary md:text-4xl">
                Accesso da domicilio
              </h2>
              <p>
                La RSA Valle d'Argento 2 e una struttura accreditata al Servizio
                Sanitario Nazionale regionale. L'accesso dell'utente proveniente
                dal proprio domicilio avviene generalmente attraverso un percorso
                autorizzato dall'ASL, non con il solo contatto diretto con la
                struttura.
              </p>
              <p>
                Se la valutazione risulta appropriata, viene predisposto un Piano
                Assistenziale Individualizzato e l'utente viene inserito nella rete
                dei servizi residenziali dal Distretto Sanitario competente.
              </p>
              <p>
                La quota sanitaria e a carico del SSN nei limiti previsti.
                L'eventuale quota sociale puo essere compartecipata dall'utente e
                dall'ente competente, secondo la normativa applicabile e la
                situazione economica dell'assistito.
              </p>
            </div>

            <aside className="h-fit border-l-4 border-primary bg-white p-6 shadow-sm md:col-span-5">
              <h3 className="text-2xl font-bold text-primary">
                Accesso da ospedale o casa di cura
              </h3>
              <p className="mt-4 leading-relaxed text-on-surface-variant">
                Nel caso in cui l'ingresso in RSA avvenga a seguito di dimissione
                da una struttura ospedaliera o da una casa di cura, la presa in
                carico viene programmata in collaborazione con i servizi sanitari
                competenti e con la struttura dimettente.
              </p>
            </aside>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-12">
            <DocumentList
              icon="clinical_notes"
              items={healthDocuments}
              title="Documenti sanitari necessari"
            />
            <DocumentList
              icon="folder_managed"
              items={administrativeDocuments}
              title="Documenti amministrativi necessari"
            />
          </div>
          <div className="mx-auto mt-8 max-w-7xl px-4 md:px-12">
            <p className="border-l-4 border-secondary bg-surface-container-low p-5 leading-relaxed text-on-surface-variant">
              Al momento della disponibilita del posto letto, il personale della
              RSA contatta i familiari o il referente dell'utente per concordare
              data e modalita di ingresso. La documentazione raccolta consente una
              presa in carico appropriata e la continuita delle cure.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function DocumentList({
  icon,
  items,
  title,
}: {
  icon: string;
  items: string[];
  title: string;
}) {
  return (
    <article className="bg-white p-6 shadow-sm md:p-8">
      <div className="mb-6 flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
          <span className="material-symbols-outlined filled">{icon}</span>
        </span>
        <h2 className="text-2xl font-bold text-primary">{title}</h2>
      </div>
      <ul className="space-y-4">
        {items.map((item) => (
          <li className="flex items-start gap-3" key={item}>
            <span className="material-symbols-outlined mt-0.5 text-sm text-primary">
              check_circle
            </span>
            <span className="leading-relaxed text-on-surface-variant">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
