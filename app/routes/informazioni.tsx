import { useState } from "react";
import type { Route } from "./+types/informazioni";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Informazioni | Valle d'Argento 2" },
    {
      name: "description",
      content:
        "Informazioni su documenti, trasparenza, metodi di pagamento e procedure di risk management della RSA Valle d'Argento 2.",
    },
  ];
}

const facilityImage = "/assets/struttura-esterno.jpg";

// Configurazione delle tab: l'ordine qui e lo stesso mostrato nella pagina.
const tabs = [
  { id: "tutele", label: "Tutele" },
  { id: "documenti", label: "Documenti" },
  { id: "trasparenza", label: "Trasparenza" },
  { id: "pagamento", label: "Metodi di pagamento" },
  { id: "gestione", label: "Gestione" },
];

const datItems = [
  "Accertamenti diagnostici",
  "Scelte terapeutiche",
  "Singoli trattamenti sanitari",
];

const usefulDocuments = [
  "Carta dei Servizi",
  "Regolamento",
  "Informativa Privacy",
  "Documenti ingresso ospiti",
  "Corredo personale ospite",
  "Politica della qualita",
  "Modulo reclami, encomi, suggerimenti",
  "Coordinate bancarie",
];

const excludedCosts = [
  "Medicinali, materiale sanitario e medicazioni",
  "Visite specialistiche a pagamento",
  "Ticket su esami strumentali e di laboratorio",
  "Trasporto e accompagnamento in ospedale",
  "Oneri concernenti decesso e spese funerarie",
];

const parmObjectives = [
  "Prevenire e ridurre gli eventi avversi",
  "Promuovere una cultura della sicurezza tra gli operatori",
  "Monitorare i processi assistenziali e organizzativi",
  "Individuare e attuare azioni di miglioramento",
];

const parmRiskAreas = [
  "Sicurezza della terapia farmacologica e corretta gestione dei farmaci",
  "Prevenzione delle cadute degli ospiti",
  "Prevenzione e gestione delle lesioni da pressione",
  "Prevenzione delle infezioni correlate all'assistenza",
  "Gestione delle emergenze e sicurezza degli ambienti",
  "Appropriatezza assistenziale e continuita delle cure",
];

const parmActivities = [
  "Monitoraggio degli eventi avversi e delle non conformita",
  "Verifiche periodiche dei processi assistenziali",
  "Audit interni e analisi delle criticita",
  "Formazione e aggiornamento del personale",
  "Applicazione di procedure e protocolli aziendali",
];

const parmEvents = [
  {
    type: "Cadute accidentali degli ospiti",
    count: "3",
    analysis: "Eventi valutati dall'equipe assistenziale con analisi dei fattori di rischio individuali e ambientali",
    actions: "Rivalutazione del rischio caduta, aggiornamento PAI, interventi di prevenzione e sorveglianza",
  },
  {
    type: "Lesioni da pressione",
    count: "2",
    analysis: "Monitoraggio degli ospiti a rischio e verifica dell'applicazione delle procedure assistenziali",
    actions: "Valutazione periodica della cute, utilizzo di presidi antidecubito e pianificazione assistenziale personalizzata",
  },
  {
    type: "Errori o criticita nella gestione della terapia farmacologica",
    count: "1",
    analysis: "Verifica delle modalita di prescrizione, preparazione e somministrazione della terapia",
    actions: "Controlli periodici, applicazione delle procedure interne e sensibilizzazione del personale",
  },
  {
    type: "Eventi infettivi correlati all'assistenza",
    count: "0",
    analysis: "Monitoraggio degli episodi infettivi e delle misure di prevenzione adottate",
    actions: "Applicazione protocolli igienico-sanitari, formazione operatori e controllo delle procedure",
  },
  {
    type: "Reclami/segnalazioni di ospiti e familiari",
    count: "2",
    analysis: "Analisi delle segnalazioni ricevute e valutazione delle criticita organizzative",
    actions: "Gestione delle segnalazioni, risposta agli interessati e attivazione di eventuali miglioramenti",
  },
  {
    type: "Infortuni del personale",
    count: "0",
    analysis: "Analisi degli eventi e verifica delle condizioni di sicurezza",
    actions: "Applicazione procedure di sicurezza, formazione e prevenzione dei rischi lavorativi",
  },
  {
    type: "Near miss",
    count: "1",
    analysis: "Raccolta e analisi delle segnalazioni per migliorare i processi",
    actions: "Azioni preventive e revisione delle procedure operative",
  },
];

const legalMonitoring = [
  ["Denunce da parte di ospiti o familiari", "0", "Nessuna denuncia presentata nell'anno 2025"],
  ["Apertura di pratiche assicurative per richieste di risarcimento danni", "0", "Nessuna pratica assicurativa aperta nell'anno 2025"],
  ["Provvedimenti legali", "0", "Nessun provvedimento legale adottato o ricevuto nel corso dell'anno 2025"],
];

const satisfactionAreas = [
  "La giornata in struttura: organizzazione, orari, igiene personale, abbigliamento, colazione, ristorazione, animazione e riposo",
  "L'assistenza e le cure: operato di medici, infermieri, fisioterapisti e personale ausiliario",
  "I rapporti con il personale: gentilezza, disponibilita, ascolto e attenzione ai bisogni",
  "La Residenza: comfort della stanza, qualita degli spazi comuni e aree esterne",
];

const satisfactionResults = [
  ["Soddisfacente", "81%"],
  ["Accettabile", "16%"],
  ["Non soddisfacente", "3%"],
];

export default function Informazioni() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <SiteHeader />

      <main className="pt-20">
        <section className="bg-surface-container-low py-14">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-12 md:px-12">
            <div className="md:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Trasparenza e sicurezza
              </span>
              <h1 className="mt-3 text-4xl font-bold text-on-surface md:text-5xl">
                Informazioni e Trasparenza
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
                Indicazioni utili per famiglie e ospiti: accesso alla RSA,
                compartecipazione alla retta, visite in sicurezza e procedure per
                il monitoraggio dei rischi.
              </p>
            </div>

            <div className="md:col-span-6">
              <img
                alt="Esterno della RSA Valle d'Argento 2"
                className="h-80 w-full rounded-xl border-4 border-white object-cover shadow-lg"
                src={facilityImage}
              />
            </div>
          </div>
        </section>

        <section className="sticky top-20 z-30 border-y border-outline-variant bg-surface/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 md:px-12">
            {tabs.map((tab) => (
              <button
                className={`shrink-0 border-b-2 px-3 py-4 text-sm font-bold transition-colors ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-on-surface-variant hover:text-primary"
                }`}
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-12">
            {activeTab === "tutele" && <TuteleTab />}
            {activeTab === "documenti" && <DocumentsTab />}
            {activeTab === "trasparenza" && <TransparencyTab />}
            {activeTab === "pagamento" && <PaymentTab />}
            {activeTab === "gestione" && <ManagementTab />}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function TuteleTab() {
  return (
    <div>
      <TabTitle icon="verified_user" title="Tutele" />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <article className="rounded-xl border border-outline-variant bg-white p-6 shadow-sm md:p-8">
          <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined filled">balance</span>
          </span>
          <h3 className="mt-5 text-2xl font-bold text-primary">
            Amministratore di Sostegno
          </h3>
          <div className="mt-5 space-y-4 leading-relaxed text-on-surface-variant">
            <p>
              L'Amministratore di Sostegno e una figura prevista dalla legge per
              tutelare e supportare le persone che, a causa di condizioni di
              fragilita fisica o psichica, non sono in grado di provvedere
              autonomamente ai propri interessi, anche in modo parziale o
              temporaneo.
            </p>
            <p>
              Il suo compito e accompagnare la persona nelle decisioni e negli atti
              necessari alla gestione della vita quotidiana, garantendo protezione,
              sostegno e rispetto della sua volonta.
            </p>
            <p>
              Per informazioni sulla procedura di nomina e sulla presentazione
              della domanda e possibile consultare la sezione dedicata del
              Tribunale di Salerno.
            </p>
          </div>
        </article>

        <article className="rounded-xl border border-outline-variant bg-white p-6 shadow-sm md:p-8">
          <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
            <span className="material-symbols-outlined filled">
              clinical_notes
            </span>
          </span>
          <h3 className="mt-5 text-2xl font-bold text-primary">
            Disposizioni Anticipate di Trattamento (DAT)
          </h3>
          <div className="mt-5 space-y-4 leading-relaxed text-on-surface-variant">
            <p>
              Le Disposizioni Anticipate di Trattamento, conosciute anche come
              testamento biologico, sono regolate dalla Legge n. 219/2017 e
              consentono a ogni persona maggiorenne e capace di intendere e di
              volere di esprimere preventivamente le proprie volonta in merito ai
              trattamenti sanitari.
            </p>
            <p>Le DAT possono riguardare:</p>
            <BulletList items={datItems} />
            <p>
              La RSA garantisce il rispetto delle volonta espresse dall'ospite
              secondo quanto previsto dalla normativa vigente. Per informazioni
              sulle modalita di redazione e deposito delle DAT e possibile
              rivolgersi al proprio Comune di residenza o agli uffici competenti.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

function DocumentsTab() {
  return (
    <div>
      <TabTitle icon="folder_open" title="Documenti" />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="space-y-5 text-lg leading-relaxed text-on-surface-variant lg:col-span-5">
          <p>
            In questa sezione sono disponibili i documenti utili per conoscere la
            RSA e accedere ai suoi servizi.
          </p>
          <p>
            E possibile consultare e scaricare la modulistica per l'ammissione, la
            Carta dei Servizi, i regolamenti interni e la documentazione
            informativa relativa alla struttura e alle modalita di accoglienza.
          </p>
          <p>
            L'area documenti e pensata per offrire a ospiti e familiari un accesso
            semplice e trasparente alle informazioni necessarie.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
          {usefulDocuments.map((document) => (
            <div
              className="flex items-center justify-between gap-4 rounded-xl border border-outline-variant bg-white p-5 shadow-sm"
              key={document}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">description</span>
                </span>
                <span className="font-bold text-on-surface">{document}</span>
              </div>
              <span className="material-symbols-outlined text-primary">
                download
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TransparencyTab() {
  return (
    <div>
      <TabTitle icon="visibility" title="Trasparenza" />
      <div className="space-y-10">
        <section className="rounded-xl border border-outline-variant bg-white p-6 shadow-sm md:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="space-y-5 text-lg leading-relaxed text-on-surface-variant lg:col-span-7">
              <h3 className="text-2xl font-bold text-primary">
                PARM - Piano Annuale di Risk Management
              </h3>
              <p>
                La RSA R3 Valle d'Argento 2 adotta il Piano Annuale di Risk
                Management quale strumento per la gestione del rischio clinico e
                organizzativo, con l'obiettivo di garantire la sicurezza degli
                ospiti, migliorare la qualita dell'assistenza e promuovere il
                miglioramento continuo dei processi.
              </p>
              <p>
                Gli esiti delle attivita di Risk Management vengono valutati
                periodicamente dalla Direzione e dall'equipe della struttura, al
                fine di individuare eventuali criticita e definire interventi
                correttivi e migliorativi.
              </p>
            </div>

            <aside className="rounded-lg bg-surface-container-low p-5 lg:col-span-5">
              <h4 className="font-bold text-primary">Data di aggiornamento</h4>
              <p className="mt-2 text-3xl font-bold text-on-surface">
                23/01/2026
              </p>
              <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
                Monitoraggio riferito all'anno 2025.
              </p>
            </aside>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <InfoPanel title="Obiettivi del PARM" items={parmObjectives} />
            <InfoPanel title="Aree monitorate" items={parmRiskAreas} />
            <InfoPanel title="Attivita previste" items={parmActivities} />
          </div>
        </section>

        <section className="rounded-xl border border-outline-variant bg-white p-6 shadow-sm md:p-8">
          <h3 className="text-2xl font-bold text-primary">
            Eventi monitorati 2025
          </h3>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-[920px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-outline-variant bg-surface-container-low text-primary">
                  <th className="p-4 font-bold">Tipologia di evento</th>
                  <th className="p-4 font-bold">N. eventi</th>
                  <th className="p-4 font-bold">Analisi</th>
                  <th className="p-4 font-bold">Azioni adottate</th>
                </tr>
              </thead>
              <tbody>
                {parmEvents.map((event) => (
                  <tr className="border-b border-outline-variant/60" key={event.type}>
                    <td className="p-4 font-bold text-on-surface">{event.type}</td>
                    <td className="p-4 text-on-surface-variant">{event.count}</td>
                    <td className="p-4 text-on-surface-variant">{event.analysis}</td>
                    <td className="p-4 text-on-surface-variant">{event.actions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 leading-relaxed text-on-surface-variant">
            Nel corso dell'anno 2025 gli eventi rilevati sono stati analizzati
            dall'equipe della struttura attraverso strumenti di verifica interna,
            con l'obiettivo di garantire la sicurezza degli ospiti, la qualita
            dell'assistenza e il miglioramento continuo dei processi organizzativi
            e assistenziali.
          </p>
        </section>

        <section className="rounded-xl border border-outline-variant bg-white p-6 shadow-sm md:p-8">
          <h3 className="text-2xl font-bold text-primary">
            Monitoraggio eventi con rilevanza medico-legale
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {legalMonitoring.map(([label, count, result]) => (
              <article
                className="border-l-4 border-primary bg-surface-container-low p-5"
                key={label}
              >
                <p className="text-sm font-bold text-on-surface">{label}</p>
                <p className="mt-3 text-4xl font-bold text-primary">{count}</p>
                <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                  {result}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-6 leading-relaxed text-on-surface-variant">
            Nel 2025 non si sono verificati eventi che abbiano determinato
            conseguenze di natura legale, denunce da parte di ospiti o familiari,
            ne richieste di risarcimento con apertura di pratiche assicurative.
          </p>
        </section>

      </div>
    </div>
  );
}

function ManagementTab() {
  return (
    <div>
      <TabTitle icon="assignment_turned_in" title="Gestione" />
      <div className="space-y-8">
        <section className="rounded-xl border border-primary/30 bg-primary/5 p-6 md:p-8">
          <h3 className="text-2xl font-bold text-primary">
            Gestione della lista di attesa
          </h3>
          <div className="mt-5 space-y-4 leading-relaxed text-on-surface-variant">
            <p>
              Presso la RSA Valle d'Argento 2 non e presente una lista d'attesa
              gestita direttamente dalla struttura, in quanto tutti i posti letto
              sono accreditati con il Servizio Sanitario Regionale.
            </p>
            <p>
              L'accesso alla Residenza avviene esclusivamente attraverso il
              percorso previsto dalla normativa regionale: richieste di
              inserimento, formazione e gestione delle liste d'attesa, nonche
              autorizzazione agli ingressi, sono di competenza del Distretto
              Sanitario territorialmente competente.
            </p>
            <p>
              La struttura provvede all'accoglienza degli utenti sulla base delle
              autorizzazioni e delle assegnazioni trasmesse dal Distretto
              Sanitario, nel rispetto della disponibilita dei posti letto
              accreditati e delle procedure previste dalla programmazione
              sociosanitaria regionale.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-outline-variant bg-white p-6 shadow-sm md:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="space-y-5 text-lg leading-relaxed text-on-surface-variant lg:col-span-7">
              <h3 className="text-2xl font-bold text-primary">
                Risultati soddisfazione utenti
              </h3>
              <p>
                Nel corso dell'anno 2025 e stato somministrato il questionario di
                soddisfazione agli ospiti e, ove necessario, ai loro familiari o
                caregiver. Sono state raccolte e analizzate 38 schede di
                valutazione, per un totale di 684 risposte complessive.
              </p>
              <BulletList items={satisfactionAreas} />
            </div>

            <aside className="space-y-4 lg:col-span-5">
              {satisfactionResults.map(([label, value]) => (
                <div className="rounded-lg bg-surface-container-low p-5" key={label}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-bold text-on-surface">{label}</span>
                    <span className="text-2xl font-bold text-primary">{value}</span>
                  </div>
                  <div className="mt-3 h-3 overflow-hidden rounded-full bg-white">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: value }}
                    />
                  </div>
                </div>
              ))}
            </aside>
          </div>
          <p className="mt-6 leading-relaxed text-on-surface-variant">
            L'analisi evidenzia un livello di soddisfazione complessivamente
            positivo. I livelli di gradimento piu elevati riguardano gentilezza e
            disponibilita del personale, assistenza infermieristica e ausiliaria,
            igiene personale degli ospiti e clima di accoglienza della struttura.
          </p>
        </section>
      </div>
    </div>
  );
}

function PaymentTab() {
  return (
    <div>
      <TabTitle icon="payments" title="Metodi di Pagamento" />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant lg:col-span-8">
          <p>
            L'accesso alla RSA avviene esclusivamente attraverso la presa in
            carico tramite S.S.R.: il medico curante compila la modulistica
            predisposta dalla Regione Campania per la richiesta di Valutazione
            Sanitaria e, tramite UVI della ASL di appartenenza, viene stabilito il
            bisogno assistenziale della persona.
          </p>
          <p>
            La ripartizione degli oneri della retta giornaliera e suddivisa in
            una quota a carico del Servizio Sanitario Regionale per le prestazioni
            sanitarie erogate in RSA e una quota riservata agli assistiti, con
            eventuale partecipazione del Comune secondo normativa regionale.
          </p>
          <p>
            Tale partecipazione copre l'intera quota qualora l'ospite e/o i
            familiari non siano in grado di provvedere al pagamento.
          </p>
        </div>

        <aside className="rounded-xl border border-primary/30 bg-white p-6 shadow-sm lg:col-span-4">
          <h3 className="text-xl font-bold text-primary">Spese non incluse</h3>
          <ul className="mt-5 space-y-3">
            {excludedCosts.map((cost) => (
              <li className="flex items-start gap-3" key={cost}>
                <span className="material-symbols-outlined mt-0.5 text-sm text-primary">
                  remove_circle
                </span>
                <span className="text-sm text-on-surface-variant">{cost}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}

function InfoPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-lg bg-surface-container-low p-5">
      <h4 className="font-bold text-primary">{title}</h4>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li className="flex items-start gap-3" key={item}>
            <span className="material-symbols-outlined mt-0.5 text-sm text-primary">
              check_circle
            </span>
            <span className="text-sm leading-relaxed text-on-surface-variant">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function TabTitle({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <span className="material-symbols-outlined text-primary">{icon}</span>
      <h2 className="text-3xl font-bold text-on-surface">{title}</h2>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li className="flex items-start gap-3" key={item}>
          <span className="material-symbols-outlined mt-0.5 text-sm text-primary">
            check_circle
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
