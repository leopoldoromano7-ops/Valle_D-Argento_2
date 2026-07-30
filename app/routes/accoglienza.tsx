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
  "Documento di identita e tessera sanitaria",
  "Richiesta di Valutazione Multidimensionale compilata dal medico curante",
  "Documentazione clinica aggiornata",
  "Terapie farmacologiche in corso",
  "Eventuali referti specialistici recenti",
  "Eventuali piani terapeutici e prescrizioni sanitarie",
];

const administrativeDocuments = [
  "Documento di identita del referente familiare o amministratore di sostegno",
  "Codice fiscale dell'ospite e del referente",
  "Verbale di invalidita o altra documentazione socio-assistenziale disponibile",
  "Recapiti telefonici e indirizzi utili per le comunicazioni",
  "Coordinate e riferimenti necessari per gli adempimenti amministrativi",
];

const accessSteps = [
  {
    icon: "assignment",
    title: "Richiesta e valutazione",
    text: "L'accesso alla RSA avviene attraverso la presa in carico e la valutazione dei bisogni sanitari, assistenziali e sociali della persona.",
  },
  {
    icon: "support_agent",
    title: "Colloquio con l'ufficio accettazione",
    text: "La famiglia viene accompagnata nella raccolta delle informazioni e nella verifica dei documenti necessari per l'ingresso.",
  },
  {
    icon: "fact_check",
    title: "Definizione del percorso",
    text: "Prima dell'accoglienza vengono condivise le esigenze dell'ospite, le terapie, le abitudini quotidiane e gli aspetti organizzativi.",
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
                Una pagina pratica per orientare ospiti e familiari nelle fasi di
                ingresso in struttura, dalla richiesta iniziale alla raccolta della
                documentazione sanitaria e amministrativa.
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
                <p>Tel. __________</p>
                <p>Email __________</p>
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
