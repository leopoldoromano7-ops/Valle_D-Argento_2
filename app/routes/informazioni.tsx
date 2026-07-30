import { useState } from "react";
import type { Route } from "./+types/informazioni";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Informazioni | Valle d'Argento 2" },
    {
      name: "description",
      content:
        "Informazioni su metodi di pagamento, prevenzione Covid-19 e procedure di risk management della RSA Valle d'Argento 2.",
    },
  ];
}

const facilityImage = "/assets/struttura-esterno.jpg";

// Configurazione delle tab: l'ordine qui e lo stesso mostrato nella pagina.
const tabs = [
  { id: "tutele", label: "Tutele" },
  { id: "documenti", label: "Documenti" },
  { id: "pagamento", label: "Metodi di pagamento" },
  { id: "covid", label: "Prevenzione Covid-19" },
  { id: "risk", label: "Risk Management Procedure" },
  { id: "risk-management", label: "Risk Management" },
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

const visitRules = [
  "Prenotazione obbligatoria al numero 089/803498",
  "Mascherina FFP2 correttamente posizionata per tutta la visita",
  "Igienizzazione delle mani all'ingresso",
  "Massima puntualita per consentire sanificazione e attivita di routine",
];

// Contenuti lunghi separati dal JSX per rendere piu semplice aggiornare i testi.
const riskPremises = [
  "Gli eventi avversi in medicina rappresentano un importante problema di sanita pubblica, perche occorre assicurare l'erogazione delle prestazioni sanitarie garantendo la migliore qualita e sicurezza possibile.",
  "All'interno della R.S.A. Valle d'Argento 2 viene perseguita una politica generale di miglioramento continuo della qualita; in questo contesto assume grande rilevanza la gestione del rischio clinico.",
  "Per favorire una gestione efficace degli eventi avversi e necessario raccogliere informazioni e dati relativi a errori e sinistri, rendere disponibili strumenti specifici, ridurre il rischio e promuovere una cultura centrata sulla sicurezza.",
  "La gestione del rischio clinico ha lo scopo di implementare le attivita di prevenzione degli errori e ridurre il contenzioso medico-legale, valorizzando la segnalazione volontaria dei near miss da parte degli operatori sanitari.",
];

const riskStrengths = [
  "Individuare eventi che accadono poco frequentemente e che una singola struttura difficilmente potrebbe rilevare da sola.",
  "Correlare eventi diversi per individuare problematiche trasversali all'organizzazione.",
  "Leggere il singolo evento in modo sistemico, osservando trend e ricorrenze.",
  "Individuare eventi insoliti, non usuali o emergenti.",
  "Reagire rapidamente alle situazioni, poiche la segnalazione avviene normalmente vicino al momento dell'evento.",
];

const riskAdvantages = [
  "Fornire un unico schema di riferimento per eventi nuovi, unici o gia noti.",
  "Monitorare gli eventi e l'efficacia delle azioni correttive introdotte.",
  "Creare consapevolezza negli operatori rispetto ad azioni, eventi ed effetti sulla sicurezza.",
];

const riskPurpose = [
  "Definire una procedura aziendale per la segnalazione e la gestione degli eventi avversi.",
  "Individuare azioni utili a tutela della qualita e sicurezza nei reparti della R.S.A. Valle d'Argento 2.",
  "Favorire il coinvolgimento degli operatori sanitari per il miglioramento continuo della qualita, della sicurezza del paziente e delle cure.",
];

const riskReferences = [
  "Risk management in Sanita. Il problema degli errori; Commissione Tecnica sul rischio Clinico (DM 5 marzo 2003).",
  "D.G.R.C. 1688/2005 - Implementazione e sviluppo nelle Aziende Sanitarie di strumenti per la gestione del rischio clinico.",
  "Linee guida per gestire e comunicare gli eventi avversi in sanita, Ministero della Salute, giugno 2011.",
];

const riskDefinitions = [
  {
    term: "Incident report",
    text: "Segnalazione degli eventi intesi come qualsiasi accadimento che ha causato o aveva la potenzialita di causare un danno a un paziente. La segnalazione e volontaria e/o anonima.",
  },
  {
    term: "Near miss o quasi eventi",
    text: "Situazioni in cui un incidente stava per generare danni al paziente, ma per motivi fortuiti o per l'intervento di barriere non si e verificato.",
  },
  {
    term: "Eventi senza esiti",
    text: "Occasioni in cui un evento si e verificato realmente, ma senza conseguenze negative per il paziente.",
  },
  {
    term: "Eventi avversi",
    text: "Casi in cui il paziente e stato realmente danneggiato, considerando tutte le tipologie di evento presenti nella scheda di incident reporting.",
  },
  {
    term: "Evento sentinella",
    text: "Evento inatteso che comprende morte, gravi lesioni fisiche o psichiche, o il rischio di esse, e richiede un'indagine immediata.",
  },
  {
    term: "Errore di terapia",
    text: "Ogni evento prevedibile che puo causare un uso inappropriato del farmaco o un pericolo per il paziente.",
  },
];

const reportFields = [
  "Tipologia di evento",
  "Qualifica del segnalatore",
  "Circostanze dell'evento",
  "Descrizione dell'evento",
  "Possibili cause e fattori contribuenti",
  "Suggerimenti per prevenire il ripetersi dell'evento",
];

const reportingSheetParts = [
  "La prima parte raccoglie dati sul paziente, data e ora dell'evento e luogo in cui si e verificato.",
  "La seconda parte descrive cosa e successo, perche e successo, conseguenze, fattori che hanno evitato o ridotto il danno, ricorrenze e suggerimenti.",
  "La terza parte raccoglie i dati del rilevatore: data di compilazione, unita operativa, qualifica professionale, nominativo e firma. In caso di anonimato il campo identificativo non viene compilato.",
];

// Classificazioni usate nella tab Risk Management, derivate dal documento fornito.
const rasmussenErrors = [
  {
    title: "Skill-based",
    text: "Comportamenti automatici in risposta a uno stimolo ripetuto, tipici di situazioni routinarie.",
  },
  {
    title: "Rule-based",
    text: "Errore nella scelta della norma o regola adeguata alla circostanza in cui si sta intervenendo.",
  },
  {
    title: "Knowledge-based",
    text: "Errore nella pianificazione di una strategia quando la situazione richiede conoscenze e processi mentali nuovi.",
  },
];

const medicationRisks = [
  "Errori di prescrizione",
  "Errori di preparazione",
  "Errori di trascrizione",
  "Errori di distribuzione",
  "Errori di somministrazione",
  "Errori di monitoraggio",
];

const equipmentRisks = [
  "Malfunzionamento per problemi tecnici",
  "Malfunzionamento dovuto all'utilizzatore",
  "Uso in condizioni non appropriate",
  "Manutenzione inadeguata",
  "Istruzioni inadeguate",
  "Pulizia non corretta",
  "Utilizzo oltre i limiti di durata prevista",
];

const fallRisks = ["Fattori estrinseci", "Fattori intrinseci"];

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
            {activeTab === "pagamento" && <PaymentTab />}
            {activeTab === "covid" && <CovidTab />}
            {activeTab === "risk" && <RiskTab />}
            {activeTab === "risk-management" && <RiskManagementTab />}
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

function CovidTab() {
  return (
    <div>
      <TabTitle icon="health_and_safety" title="Prevenzione Covid-19" />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant lg:col-span-7">
          <p>
            In ottemperanza a quanto richiesto e tenuto conto della possibilita di
            effettuare le visite ai propri cari in sicurezza, in ambiente dedicato,
            arieggiato e sanificato, la Direzione dispone specifiche modalita di
            accesso alla struttura.
          </p>
          <p>
            Gli orari delle visite saranno decisi di volta in volta dal personale
            della struttura in modo da evitare assembramenti.
          </p>
          <p>
            E permesso introdurre all'interno della struttura solo cibi
            confezionati, da consegnare al personale di turno e non direttamente
            all'ospite.
          </p>
        </div>

        <aside className="rounded-xl border border-outline-variant/60 bg-primary-fixed/45 p-6 lg:col-span-5">
          <h3 className="text-xl font-bold text-on-surface">Modalita di accesso</h3>
          <ul className="mt-5 space-y-3">
            {visitRules.map((rule) => (
              <li className="flex items-start gap-3" key={rule}>
                <span className="material-symbols-outlined mt-0.5 text-primary">
                  check_circle
                </span>
                <span className="text-on-surface-variant">{rule}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-lg border border-primary/30 bg-white/70 p-4 text-center">
            <p className="text-sm font-bold text-secondary">
              Per informazioni e prenotazioni
            </p>
            <a className="mt-2 block text-3xl font-bold text-primary" href="tel:089803498">
              089 / 803498
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}

function RiskTab() {
  return (
    <div>
      <TabTitle icon="shield" title="Risk Management Procedure" />
      <div className="space-y-8">
        <section className="rounded-xl border border-outline-variant bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-primary">
            Procedure per la gestione e segnalazione degli eventi avversi
          </h3>
          <div className="mt-5 space-y-4 leading-relaxed text-on-surface-variant">
            {riskPremises.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <InfoCard
            icon="report"
            title="Segnalazione e monitoraggio"
            text="Il sistema di incident reporting supporta la rilevazione, l'analisi e la prevenzione di eventi avversi o potenziali pericoli."
          />
          <InfoCard
            icon="fact_check"
            title="Obiettivo della procedura"
            text="Identificare le aree di rischio, prevenire criticita organizzative e migliorare progressivamente sicurezza e qualita assistenziale."
          />
        </div>

        <InfoDetails title="Come funziona">
          <p>
            Il sistema si basa sulla segnalazione spontanea di un evento, inteso
            come accadimento connesso a un insuccesso potenziale, quasi incidente
            o incidente che ha causato danni.
          </p>
          <p>
            La segnalazione viene effettuata in forma descrittiva su supporto
            cartaceo da medici, infermieri e operatori, in maniera volontaria e
            anonima. Le informazioni vengono poi analizzate e codificate per
            comprendere i fattori che hanno contribuito all'evento.
          </p>
        </InfoDetails>

        <InfoDetails title="Punti di forza dell'incident reporting">
          <BulletList items={riskStrengths} />
        </InfoDetails>

        <InfoDetails title="Vantaggi del sistema">
          <BulletList items={riskAdvantages} />
        </InfoDetails>

        <InfoDetails title="Scopo">
          <BulletList items={riskPurpose} />
        </InfoDetails>

        <InfoDetails title="Campo di applicazione">
          <p>
            Il sistema di incident report e esteso a tutte le figure che operano
            all'interno della R.S.A. La scheda deve essere compilata
            dall'operatore sanitario direttamente coinvolto nell'evento, o da chi
            ha potuto osservare l'accaduto.
          </p>
          <p>
            I report vengono raccolti e valutati dalla Direzione Aziendale, che
            propone al personale eventuali azioni correttive sulla base degli
            eventi avversi rilevati.
          </p>
        </InfoDetails>

        <InfoDetails title="Segnalazione dell'evento">
          <p>
            La procedura indica la tipologia dell'evento da segnalare, chi segnala,
            a chi segnalare e con quali strumenti.
          </p>
          <BulletList items={reportFields} />
        </InfoDetails>

        <InfoDetails title="Descrizione dello strumento">
          <p>
            La scheda di incident reporting permette all'operatore di segnalare
            eventi accaduti o potenziali e di indicare i fattori che possono aver
            contribuito all'evento. L'obiettivo e raccogliere dati qualitativi per
            individuare aree di criticita e attivare percorsi di miglioramento.
          </p>
          <BulletList items={reportingSheetParts} />
          <p>
            Una seconda scheda viene compilata successivamente dalla Direzione
            Aziendale. Ogni evento viene valutato rispetto all'impatto sul paziente
            e al potenziale rischio futuro, stimando gravita, probabilita di
            riaccadimento e azioni da intraprendere.
          </p>
        </InfoDetails>

        <InfoDetails title="Definizioni">
          <div className="space-y-4">
            {riskDefinitions.map((definition) => (
              <div key={definition.term}>
                <h4 className="font-bold text-primary">{definition.term}</h4>
                <p className="mt-1">{definition.text}</p>
              </div>
            ))}
          </div>
        </InfoDetails>

        <InfoDetails title="Documenti di riferimento">
          <BulletList items={riskReferences} />
        </InfoDetails>
      </div>
    </div>
  );
}

function RiskManagementTab() {
  return (
    <div>
      <TabTitle icon="admin_panel_settings" title="Risk Management" />
      <div className="space-y-8">
        <section className="rounded-xl border border-outline-variant bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-primary">Introduzione</h3>
          <div className="mt-5 space-y-4 leading-relaxed text-on-surface-variant">
            <p>
              La R.S.A. Valle d'Argento 2 ha effettuato una precisa analisi delle
              proprie attivita sanitarie. Data la complessita delle prestazioni
              erogate, dei modelli gestionali, delle patologie trattate e delle
              relazioni tra le diverse professioni, possono verificarsi errori in
              grado di causare disabilita o disagi.
            </p>
            <p>
              Gli errori non sono eliminabili del tutto, ma e possibile abbattere
              il rischio che avvengano eventi avversi e ridurne le conseguenze. Il
              rischio clinico viene inteso come la probabilita che un paziente sia
              vittima di un evento avverso, anche involontario, imputabile alle
              cure mediche o assistenziali durante la degenza.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {rasmussenErrors.map((error) => (
            <article
              className="rounded-xl border border-outline-variant bg-white p-6 shadow-sm"
              key={error.title}
            >
              <h3 className="text-xl font-bold text-primary">{error.title}</h3>
              <p className="mt-3 leading-relaxed text-on-surface-variant">
                {error.text}
              </p>
            </article>
          ))}
        </section>

        <InfoDetails title="Errori secondo Reason">
          <p>
            Reason distingue tra errori di esecuzione e azioni compiute secondo le
            intenzioni. Gli errori possono verificarsi a livello di abilita, per
            fallimento della memoria, oppure quando l'obiettivo non viene raggiunto
            per tattiche non idonee.
          </p>
          <p>
            In quest'ultimo caso si distinguono errori rule-based, quando viene
            applicata una procedura non adatta, e knowledge-based, quando la
            conoscenza insufficiente porta a scegliere un percorso sbagliato.
          </p>
          <p>
            Sono considerate anche le violazioni, cioe azioni eseguite nonostante
            la presenza di regolamenti, direttive o protocolli operativi.
          </p>
        </InfoDetails>

        <section className="rounded-xl border border-outline-variant bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-primary">
            Categorie di rischio individuate
          </h3>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            <RiskCategory icon="sanitizer" title="Prevenzione trasmissione infezioni" />
            <RiskCategory icon="medication" title="Errore nell'uso dei farmaci" />
            <RiskCategory icon="medical_information" title="Errore nell'uso di apparecchiature" />
            <RiskCategory icon="elderly" title="Prevenzione del rischio cadute" />
          </div>
        </section>

        <InfoDetails title="Prevenzione trasmissione infezioni">
          <p>
            Per evitare la trasmissione da paziente a paziente, in caso di
            patologie trasmissibili gli ospiti affetti vengono relativamente
            isolati in ambienti con contatti interpersonali ridotti e, se
            compatibile con le condizioni cliniche, invitati a indossare mascherina
            antibatterica per malattie trasmissibili per via aerea.
          </p>
          <p>
            Per la trasmissione da operatore a paziente, la prima misura e il
            lavaggio delle mani, da ripetere al termine della prestazione prima di
            passare al paziente successivo. I guanti devono essere cambiati previo
            lavaggio delle mani.
          </p>
          <p>
            Strumenti chirurgici e presidi utilizzati nelle prestazioni sanitarie
            e assistenziali devono essere sterili, personali o utilizzati per un
            solo paziente. Sono previsti protocolli specifici per indumenti
            contaminati, pannoloni, storte e padelle.
          </p>
        </InfoDetails>

        <InfoDetails title="Errori nell'uso dei farmaci">
          <p>
            Per ridurre il rischio di errore nella gestione dei farmaci sono stati
            adottati due livelli di controllo: la Scheda Unica di Terapia, utile a
            prevenire errori di prescrizione, trascrizione e interpretazione, e
            protocolli operativi mutuati da linee guida internazionali per
            preparazione e somministrazione.
          </p>
          <BulletList items={medicationRisks} />
          <p>
            In assenza di informazioni essenziali come nome del paziente, nome del
            farmaco o dosaggio, l'operatore si astiene dalla somministrazione e
            interpella il medico di turno o reperibile. Sono previsti protocolli
            anche per farmaci particolarmente pericolosi e farmaci LASA.
          </p>
        </InfoDetails>

        <InfoDetails title="Errori nell'uso di apparecchiature">
          <p>
            La struttura utilizza poche apparecchiature elettromedicali e per
            tempi limitati, ma il rischio potenziale per la salute degli ospiti e
            considerato con attenzione. Gli operatori devono conoscere
            caratteristiche tecniche, comandi e sistemi di sicurezza prima
            dell'utilizzo.
          </p>
          <BulletList items={equipmentRisks} />
          <p>
            La manutenzione ordinaria e straordinaria viene annotata su appositi
            registri. Sono previsti protocolli per elettrocardiografo e dispositivi
            elettromedicali, formazione BLS-D e controlli programmati con azienda
            specializzata.
          </p>
        </InfoDetails>

        <InfoDetails title="Prevenzione del rischio cadute">
          <p>
            Le cadute rappresentano una causa importante di morbilita e mortalita
            nelle persone anziane. La prevenzione considera sia fattori legati
            all'ambiente e all'assistenza, sia fattori connessi alle condizioni
            cliniche dell'ospite.
          </p>
          <BulletList items={fallRisks} />
          <p>
            La struttura e stata realizzata nel rispetto dei requisiti normativi;
            il personale e stato formato e sono stati adottati protocolli di
            prevenzione e gestione delle cadute, oltre a schede di valutazione
            all'ingresso come la scheda di Conley.
          </p>
        </InfoDetails>

        <section className="rounded-xl border border-primary/30 bg-primary/5 p-6">
          <h3 className="text-xl font-bold text-primary">
            Documenti di segnalazione e valutazione
          </h3>
          <p className="mt-3 leading-relaxed text-on-surface-variant">
            Particolare attenzione e dedicata alla segnalazione di eventi avversi
            o quasi eventi tramite schede di segnalazione e valutazione. Le schede
            includono una sezione dedicata ai suggerimenti e alle azioni intraprese
            per correggere l'errore evidenziato.
          </p>
        </section>
      </div>
    </div>
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

function InfoCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <article className="rounded-xl border border-outline-variant bg-white p-6 shadow-sm">
      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <span className="material-symbols-outlined filled">{icon}</span>
      </span>
      <h3 className="mt-5 text-xl font-bold text-primary">{title}</h3>
      <p className="mt-3 leading-relaxed text-on-surface-variant">{text}</p>
    </article>
  );
}

function RiskCategory({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-surface-container-low p-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
        <span className="material-symbols-outlined filled">{icon}</span>
      </span>
      <span className="font-bold text-on-surface">{title}</span>
    </div>
  );
}

function InfoDetails({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-xl border border-outline-variant bg-white p-6 shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-primary">
        {title}
        <span className="material-symbols-outlined transition-transform group-open:rotate-180">
          expand_more
        </span>
      </summary>
      <div className="mt-5 space-y-4 leading-relaxed text-on-surface-variant">
        {children}
      </div>
    </details>
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
