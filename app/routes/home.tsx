import type { Route } from "./+types/home";
import type { CSSProperties } from "react";
import type { Icon } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { BrainIcon } from "@phosphor-icons/react/Brain";
import { ChurchIcon } from "@phosphor-icons/react/Church";
import { ConfettiIcon } from "@phosphor-icons/react/Confetti";
import { FirstAidKitIcon } from "@phosphor-icons/react/FirstAidKit";
import { ForkKnifeIcon } from "@phosphor-icons/react/ForkKnife";
import { HandHeartIcon } from "@phosphor-icons/react/HandHeart";
import { HeartbeatIcon } from "@phosphor-icons/react/Heartbeat";
import { HouseLineIcon } from "@phosphor-icons/react/HouseLine";
import { PottedPlantIcon } from "@phosphor-icons/react/PottedPlant";
import { SparkleIcon } from "@phosphor-icons/react/Sparkle";
import { StethoscopeIcon } from "@phosphor-icons/react/Stethoscope";
import { UsersThreeIcon } from "@phosphor-icons/react/UsersThree";
import { WheelchairMotionIcon } from "@phosphor-icons/react/WheelchairMotion";
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

const serviceModalImages: Record<string, string> = {
  medical_services:
    "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80",
  health_and_safety:
    "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?auto=format&fit=crop&w=1200&q=80",
  accessibility_new:
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
  psychology:
    "https://images.unsplash.com/photo-1758691462321-9b6c98c40f7e?auto=format&fit=crop&w=1200&q=80",
  support_agent:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
  diversity_3:
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
  volunteer_activism:
    "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
  spa:
    "https://images.pexels.com/photos/8834079/pexels-photo-8834079.jpeg?auto=compress&cs=tinysrgb&w=1200",
  room_service:
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
  celebration:
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
  church:
    "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1200&q=80",
  add_circle:
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
  default:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
};

type ServiceSection = {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
};

type Service = {
  icon: string;
  label: string;
  title: string;
  sections: ServiceSection[];
};

const services: Service[] = [
  {
    icon: "medical_services",
    label: "Servizio Medico",
    title: "Servizio Medico",
    sections: [
      {
        heading: "Team di specialisti",
        paragraphs: [
          "L'assistenza sanitaria della RSA Valle d'Argento 2 e coordinata dal Direttore Sanitario e garantita da un'equipe multidisciplinare composta da medici, infermieri, fisioterapisti, operatori socio-sanitari e altre figure professionali specialistiche.",
          "Il medico effettua la valutazione clinica dell'ospite nella fase di ammissione e ne segue costantemente l'evoluzione durante la permanenza in struttura, definendo con l'equipe gli obiettivi assistenziali e terapeutici piu appropriati.",
        ],
      },
      {
        heading: "Fascicolo sanitario assistenziale",
        paragraphs: [
          "All'ingresso ogni ospite viene sottoposto a una valutazione multidimensionale e viene predisposto il Fascicolo Sanitario, che raccoglie la documentazione clinica, assistenziale e terapeutica.",
          "Sulla base della valutazione iniziale, l'equipe elabora il Piano Assistenziale Individualizzato (PAI), periodicamente verificato e aggiornato in relazione all'evoluzione delle condizioni cliniche e ai bisogni della persona.",
          "I medici della struttura sono a disposizione dei familiari, negli orari dedicati o su appuntamento, per fornire informazioni sullo stato di salute degli ospiti e condividere il percorso assistenziale.",
        ],
      },
    ],
  },
  {
    icon: "health_and_safety",
    label: "Servizio Infermieristico",
    title: "Servizio Infermieristico",
    sections: [
      {
        paragraphs: [
          "Il servizio infermieristico della RSA e composto da un team di infermieri iscritti all'Albo Professionale, organizzati in conformita con gli standard gestionali regionali vigenti.",
          "Il servizio infermieristico h24 garantisce un'assistenza qualificata e continuativa, in stretta collaborazione con il Direttore Sanitario e l'equipe multidisciplinare.",
        ],
        bullets: [
          "Somministrazione delle terapie farmacologiche prescritte",
          "Monitoraggio dei parametri vitali e delle condizioni cliniche",
          "Medicazioni semplici e complesse e trattamento delle lesioni cutanee",
          "Gestione di cateteri, stomie, sondini e altri presidi sanitari",
          "Prevenzione e trattamento delle lesioni da pressione",
          "Prelievi ematici ed esami diagnostici di competenza infermieristica",
          "Assistenza nelle urgenze e attivazione dei percorsi sanitari previsti",
          "Aggiornamento della documentazione clinico-assistenziale",
          "Collaborazione al Piano Assistenziale Individualizzato (PAI)",
          "Educazione sanitaria e supporto a ospiti e familiari",
        ],
      },
    ],
  },
  {
    icon: "accessibility_new",
    label: "Terapia e Riabilitazione",
    title: "Servizio Terapia Fisica, Occupazionale e Riabilitazione",
    sections: [
      {
        heading: "Riabilitazione funzionale e neuromotoria",
        paragraphs: [
          "La RSA Valle d'Argento 2 offre un servizio di fisioterapia e riabilitazione finalizzato al mantenimento, al recupero e al potenziamento delle capacita funzionali dell'ospite.",
          "L'equipe riabilitativa opera con il Direttore Sanitario e con le altre figure professionali, promuovendo interventi orientati al recupero dell'autonomia residua e al miglioramento della qualita di vita.",
        ],
        bullets: [
          "Valutazione funzionale e programma riabilitativo individuale",
          "Rieducazione motoria e neuromotoria",
          "Riabilitazione ortopedica e post-traumatica",
          "Recupero della deambulazione e dell'equilibrio",
          "Mobilizzazione attiva, passiva e assistita",
          "Esercizi di rinforzo muscolare, coordinazione e training del cammino",
          "Prevenzione delle complicanze legate all'immobilita",
          "Trattamento del dolore muscolo-scheletrico con tecniche fisioterapiche",
        ],
      },
      {
        heading: "Palestra riabilitativa e terapia occupazionale",
        paragraphs: [
          "Le attivita si svolgono in una palestra dedicata e possono essere individuali o in piccoli gruppi, secondo le condizioni cliniche e gli obiettivi definiti nel PAI.",
          "Quando clinicamente indicato, il programma riabilitativo viene integrato con terapie fisiche strumentali, nel rispetto delle prescrizioni mediche.",
        ],
        bullets: [
          "Esercizi per le autonomie nelle attivita della vita quotidiana",
          "Training per motricita fine e coordinazione",
          "Orientamento spazio-temporale e stimolazione cognitiva",
          "Laboratori manuali, creativi ed espressivi",
          "Attivita ludico-ricreative e di socializzazione",
          "Stimolazione sensoriale e occupazionale per demenza e Alzheimer",
        ],
      },
    ],
  },
  {
    icon: "psychology",
    label: "Supporto Psicologico",
    title: "Servizio Supporto Psicologico",
    sections: [
      {
        paragraphs: [
          "La RSA Valle d'Argento 2 garantisce interventi di supporto psicologico attraverso professionisti qualificati presenti in struttura, con l'obiettivo di favorire il benessere emotivo e relazionale degli ospiti.",
          "L'attivita psicologica sostiene l'accoglienza, l'elaborazione del cambiamento legato all'ingresso in struttura, le situazioni di fragilita emotiva, il mantenimento delle capacita cognitive e la promozione delle relazioni sociali.",
          "Il professionista collabora con l'equipe multidisciplinare nella valutazione dei bisogni dell'ospite e contribuisce alla definizione del PAI, offrendo supporto e ascolto anche ai familiari.",
        ],
      },
    ],
  },
  {
    icon: "support_agent",
    label: "Assistenza Sociale",
    title: "Servizio Assistenza Sociale",
    sections: [
      {
        paragraphs: [
          "La RSA Valle d'Argento 2 garantisce il supporto del servizio sociale attraverso professionisti qualificati, accompagnando l'ospite e la famiglia durante tutte le fasi del percorso assistenziale.",
          "L'assistente sociale cura l'accoglienza e l'orientamento, supporta le procedure di ingresso in struttura e favorisce il raccordo con i servizi territoriali, sanitari e istituzionali.",
          "Il servizio offre supporto informativo e consulenziale alle famiglie, facilitando l'accesso alle risorse disponibili e una comunicazione costante tra ospite, familiari, struttura e territorio.",
        ],
      },
    ],
  },
  {
    icon: "diversity_3",
    label: "Equipe Multidisciplinare",
    title: "Equipe Multidisciplinare",
    sections: [
      {
        heading: "Valutazione multidimensionale",
        paragraphs: [
          "All'ingresso ogni ospite viene preso in carico da un'equipe multidisciplinare composta da medico, infermieri, operatori socio-sanitari, fisioterapista, educatore o animatore e dagli altri professionisti coinvolti nell'assistenza.",
          "La valutazione multidimensionale analizza stato di salute, livello di autonomia e bisogni assistenziali, riabilitativi e relazionali della persona.",
        ],
      },
      {
        heading: "Progetto Assistenziale Individuale (PAI)",
        paragraphs: [
          "Sulla base della valutazione viene predisposto il PAI, che definisce obiettivi e interventi personalizzati per garantire un'assistenza completa e centrata sulla persona.",
          "L'equipe verifica periodicamente il Piano di Assistenza Individualizzato, monitorando l'evoluzione delle condizioni dell'ospite e aggiornandolo quando necessario.",
        ],
      },
    ],
  },
  {
    icon: "volunteer_activism",
    label: "Socio-Assistenziale",
    title: "Servizio Socio-Assistenziale",
    sections: [
      {
        heading: "Operatori qualificati",
        paragraphs: [
          "L'assistenza agli ospiti e garantita 24 ore su 24 da Operatori Socio Sanitari (OSS) e Operatori Socio Assistenziali (OSA), presenti in ogni nucleo di degenza.",
          "Gli operatori affiancano gli ospiti nelle attivita della vita quotidiana, offrendo assistenza nell'igiene personale, nella mobilizzazione, nell'alimentazione e nella cura della persona.",
          "La loro presenza costante promuove il mantenimento delle capacita residue e favorisce, quando possibile, l'autonomia dell'ospite, integrandosi con il lavoro dell'equipe multidisciplinare.",
        ],
      },
    ],
  },
  {
    icon: "spa",
    label: "Servizi alla Persona",
    title: "Servizi alla Persona",
    sections: [
      {
        heading: "Cura della persona",
        paragraphs: [
          "La RSA offre servizi dedicati alla cura e al benessere della persona, svolti direttamente all'interno della struttura da professionisti qualificati.",
          "Il servizio di parrucchiere, incluso nella retta, e disponibile una volta al mese e comprende taglio e piega per le signore e taglio capelli per i signori. La cura della barba e garantita dal personale assistenziale.",
          "E inoltre disponibile un servizio periodico di pedicure, compreso nella retta, finalizzato all'igiene, alla cura e alla prevenzione delle principali problematiche del piede.",
          "Su richiesta e possibile usufruire di ulteriori prestazioni a tariffe agevolate, tra cui podologia per le problematiche legate alla cura del piede.",
        ],
      },
    ],
  },
  {
    icon: "room_service",
    label: "Servizi Alberghieri",
    title: "Servizi Alberghieri",
    sections: [
      {
        heading: "Servizio di cucina e ristorazione",
        paragraphs: [
          "La RSA offre un servizio di ristorazione interno con pasti preparati quotidianamente nella cucina della struttura, nel rispetto delle normative igienico-sanitarie e del sistema HACCP.",
          "I menu sono vari e bilanciati e tengono conto delle esigenze nutrizionali, delle prescrizioni mediche e, ove possibile, delle preferenze degli ospiti.",
        ],
      },
      {
        heading: "Servizio lavanderia e guardaroba",
        paragraphs: [
          "La struttura garantisce un servizio interno di lavanderia, stireria e guardaroba. Tutti gli indumenti personali vengono etichettati per assicurarne la corretta identificazione e riconsegna.",
        ],
      },
      {
        heading: "Servizio di pulizia",
        paragraphs: [
          "La pulizia e la sanificazione di camere, servizi igienici e spazi comuni vengono effettuate quotidianamente da personale qualificato, nel rispetto di rigorosi protocolli igienico-sanitari.",
        ],
      },
    ],
  },
  {
    icon: "celebration",
    label: "Animazione Sociale",
    title: "Servizi di Animazione Sociale",
    sections: [
      {
        heading: "Servizio di animazione ed attivita ludico ricreative",
        paragraphs: [
          "Il servizio promuove il benessere, la socializzazione e la qualita della vita degli ospiti, contribuendo a creare un ambiente accogliente e ricco di occasioni di incontro.",
          "Attraverso attivita educative, ricreative e occupazionali, gli animatori favoriscono il mantenimento delle relazioni sociali, stimolano le capacita cognitive e manuali e incoraggiano la partecipazione attiva.",
          "Il programma comprende laboratori creativi, giochi, gruppi di conversazione, feste, attivita musicali, ricorrenze, eventi, uscite e, quando possibile, gite.",
        ],
      },
    ],
  },
  {
    icon: "church",
    label: "Assistenza Spirituale",
    title: "Servizio Religioso e di Assistenza Spirituale",
    sections: [
      {
        paragraphs: [
          "La RSA garantisce un servizio religioso finalizzato al sostegno spirituale degli ospiti, assicurando un'assistenza interconfessionale nel rispetto delle diverse convinzioni personali, culturali e religiose.",
          "Per gli ospiti di fede cattolica viene periodicamente celebrata la Santa Messa all'interno della struttura. Un sacerdote e inoltre disponibile, su richiesta, per accompagnamento personale, celebrazioni e momenti di preghiera.",
          "La RSA assicura inoltre, su richiesta, il supporto necessario agli ospiti appartenenti ad altre confessioni religiose, attivando i contatti con i ministri di culto di riferimento.",
        ],
      },
    ],
  },
  {
    icon: "add_circle",
    label: "Altri Servizi",
    title: "Altri Servizi",
    sections: [
      {
        heading: "Servizio trasporti",
        paragraphs: [
          "In caso di necessita, per trasferimenti programmati o urgenti, la RSA si avvale di servizi di trasporto sanitario forniti da associazioni ed enti qualificati presenti sul territorio.",
        ],
      },
      {
        heading: "Servizio telefonia",
        paragraphs: [
          "La RSA offre un servizio di telefonia dedicato agli ospiti, con la possibilita di trasferire la linea telefonica tramite dispositivo mobile direttamente nella camera.",
        ],
      },
      {
        heading: "Servizio corrispondenza",
        paragraphs: [
          "La gestione della corrispondenza e curata dall'Ufficio Accettazione e dal personale incaricato, con consegna della posta in arrivo e raccolta di quella in partenza.",
        ],
      },
      {
        heading: "Servizio di ristoro",
        paragraphs: [
          "Presso il Salone, al pian terra, sono disponibili distributori automatici con prodotti confezionati, bevande calde e fredde.",
        ],
      },
    ],
  },
];

const loopedServices = [...services, ...services];

const serviceIcons: Record<string, Icon> = {
  medical_services: StethoscopeIcon,
  health_and_safety: FirstAidKitIcon,
  accessibility_new: WheelchairMotionIcon,
  psychology: BrainIcon,
  support_agent: HandHeartIcon,
  diversity_3: UsersThreeIcon,
  volunteer_activism: HeartbeatIcon,
  spa: PottedPlantIcon,
  room_service: ForkKnifeIcon,
  celebration: ConfettiIcon,
  church: ChurchIcon,
  add_circle: HouseLineIcon,
};

function ServiceIconGlyph({
  className,
  icon,
}: {
  className?: string;
  icon: string;
}) {
  const Icon = serviceIcons[icon] ?? HouseLineIcon;

  return <Icon aria-hidden="true" className={className} weight="duotone" />;
}

export default function Home() {
  const servicesScrollerRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<(typeof services)[number] | null>(
    null,
  );

  useEffect(() => {
    // Rivela progressivamente le sezioni della home durante lo scroll.
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

  const scrollServices = (direction: "left" | "right") => {
    const scroller = servicesScrollerRef.current;

    if (!scroller) {
      return;
    }

    const loopWidth = scroller.scrollWidth / 2;

    if (loopWidth > 0) {
      if (direction === "left" && scroller.scrollLeft <= 10) {
        scroller.scrollLeft += loopWidth;
      }

      if (direction === "right" && scroller.scrollLeft >= loopWidth - 370) {
        scroller.scrollLeft -= loopWidth;
      }
    }

    const firstService = scroller.querySelector<HTMLElement>("button");
    const scrollerStyle = window.getComputedStyle(scroller);
    const gap = Number.parseFloat(scrollerStyle.columnGap || scrollerStyle.gap || "0");
    const scrollAmount = firstService
      ? firstService.offsetWidth + (Number.isNaN(gap) ? 0 : gap)
      : 192;

    scroller.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

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
            <div className="max-w-4xl">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/90 px-5 py-2 text-sm font-extrabold uppercase text-primary ring-1 ring-soft-gold/40 backdrop-blur-sm [text-shadow:none]">
                <span className="material-symbols-outlined filled text-lg">
                  verified
                </span>
                Eccellenza Certificata ISO 9001
              </span>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                ACCOGLIAMO CON IL CUORE, ASSISTIAMO CON COMPETENZA
              </h1>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  className="group inline-flex w-fit items-center justify-center gap-4 rounded-lg bg-white px-8 py-5 text-lg font-extrabold uppercase text-primary ring-2 ring-soft-gold/80 transition-all hover:-translate-y-0.5 hover:bg-soft-gold hover:text-deep-navy focus:outline-none focus:ring-4 focus:ring-white/80 md:px-10 md:text-xl [text-shadow:none]"
                  href="#services"
                >
                  <span className="material-symbols-outlined filled text-3xl">
                    medical_services
                  </span>
                  <span>Scopri i servizi</span>
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-y-1">
                    arrow_downward
                  </span>
                </a>

                <a
                  className="group inline-flex w-fit items-center justify-center gap-3 rounded-lg border border-white bg-white px-7 py-5 text-lg font-extrabold uppercase text-primary transition-all hover:-translate-y-0.5 hover:bg-soft-gold hover:text-deep-navy focus:outline-none focus:ring-4 focus:ring-white/70 md:px-9 md:text-xl [text-shadow:none]"
                  href="/accoglienza#modalita-accesso"
                >
                  <span className="material-symbols-outlined text-3xl">
                    how_to_reg
                  </span>
                  <span>Modalita di accesso</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-reveal bg-surface py-14">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:px-12 lg:grid-cols-12">
            <div className="space-y-5 lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                Residenza Sanitaria Assistenziale
              </span>
              <h2 className="text-3xl font-bold text-primary md:text-4xl">
                Accoglienza qualificata e percorsi di cura continuativi
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-on-surface-variant">
                <p>
                  La nostra e una Residenza Sanitaria Assistenziale accreditata
                  con il Servizio Sanitario Nazionale, dedicata all'accoglienza di
                  persone non autosufficienti che necessitano di assistenza
                  sanitaria e socio-assistenziale continuativa.
                </p>
                <p>
                  La struttura, classificata come RSA di tipologia R3, e rivolta
                  prevalentemente ad anziani con elevati bisogni assistenziali,
                  comprese le persone affette da demenze e malattie
                  neurodegenerative. Grazie a un'equipe multidisciplinare,
                  garantisce assistenza medica, infermieristica, riabilitativa e
                  tutelare, attraverso percorsi di cura personalizzati finalizzati
                  al mantenimento delle capacita residue e al miglioramento della
                  qualita della vita degli ospiti.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-1">
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
        </section>

        <section className="scroll-reveal bg-surface-container-low py-14">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:px-12 lg:grid-cols-12">
            <div className="space-y-8 text-lg leading-relaxed text-on-surface-variant lg:col-span-8">
              <div className="space-y-4">
                <p>
                  La RSA Valle d'Argento 2, con sede a Giffoni Valle Piana (SA),
                  e una Residenza Sanitaria Assistenziale accreditata con il
                  Servizio Sanitario Nazionale e convenzionata con l'ASL Salerno.
                  Rappresenta un punto di riferimento per l'erogazione di servizi
                  e attivita a supporto della persona. Assistenza residenziale
                  rivolta ad anziani, soggetti con condizioni di fragilita e/o
                  patologie, persone non autosufficienti, con compromissione
                  cognitiva e patologie neurodegenerative.
                </p>
                <p>
                  Nata nel 2003 dalla visione imprenditoriale dei fratelli
                  Pantalena, la struttura si e evoluta nel tempo per rispondere in
                  modo sempre piu qualificato ai bisogni del territorio. Dalla
                  iniziale attivita di Casa Albergo, e cresciuta fino a diventare
                  una realta socio-sanitaria accreditata, capace di offrire oggi
                  servizi residenziali in un ambiente sicuro, accogliente e
                  orientato alla qualita della cura.
                </p>
              </div>

              <div className="space-y-4 border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold text-primary">
                  Lo spirito che anima il nostro servizio
                </h3>
                <p>
                  Alla base dell'attivita della RSA Valle d'Argento 2 vi e la
                  convinzione che ogni persona debba essere accolta con dignita,
                  rispetto e attenzione alla propria storia di vita. L'assistenza
                  non si limita alla risposta ai bisogni sanitari, ma comprende il
                  sostegno alla persona nella sua globalita, promuovendo il
                  benessere fisico, psicologico e relazionale.
                </p>
                <p>
                  L'equipe multidisciplinare opera quotidianamente con
                  professionalita, competenza e umanita, costruendo percorsi
                  assistenziali personalizzati e coinvolgendo, quando possibile,
                  le famiglie nel progetto di cura. L'obiettivo e offrire un
                  ambiente sereno e familiare, nel quale ogni ospite possa sentirsi
                  ascoltato, protetto e valorizzato.
                </p>
                <p>
                  Prendersi cura delle persone piu fragili significa per noi
                  coniugare qualita delle prestazioni sanitarie, attenzione ai
                  bisogni individuali e vicinanza umana, affinche ogni giorno
                  trascorso nella nostra struttura sia vissuto nel massimo comfort,
                  nel rispetto della persona e dei suoi diritti.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 lg:pt-1">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                Chi siamo
              </span>
              <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">
                Una storia di cura, presenza e qualita
              </h2>
            </div>
          </div>
        </section>

        <section className="scroll-reveal bg-surface py-14">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:px-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                Mission e Valori
              </span>
              <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">
                Qualita della cura, dignita della persona
              </h2>
            </div>

            <div className="space-y-8 lg:col-span-8">
              <div className="space-y-4 text-lg leading-relaxed text-on-surface-variant">
                <h3 className="text-2xl font-bold text-primary">Mission</h3>
                <p>
                  La mission della RSA e offrire un'assistenza socio-sanitaria
                  residenziale di elevata qualita alle persone non autosufficienti,
                  garantendo cure personalizzate, continuita assistenziale e un
                  ambiente sicuro, accogliente e rispettoso della dignita di ogni
                  ospite.
                </p>
                <p>
                  L'obiettivo e promuovere il benessere, preservare le capacita
                  residue e migliorare la qualita della vita, sostenendo al tempo
                  stesso le famiglie nel percorso di cura.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary">I nostri valori</h3>
                <p className="mt-4 text-lg leading-relaxed text-on-surface-variant">
                  L'attivita della RSA Valle d'Argento 2 si fonda su principi che
                  orientano ogni intervento assistenziale:
                </p>

                <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    [
                      "Centralita della persona",
                      "Ogni ospite e accolto nel rispetto della propria storia, delle proprie esigenze e della propria dignita.",
                    ],
                    [
                      "Professionalita e competenza",
                      "Un'equipe multidisciplinare qualificata garantisce assistenza sanitaria e socio-assistenziale secondo elevati standard di qualita.",
                    ],
                    [
                      "Umanita e rispetto",
                      "Ascolto, empatia e attenzione alla relazione rappresentano elementi essenziali della cura.",
                    ],
                    [
                      "Personalizzazione dell'assistenza",
                      "Ogni progetto assistenziale e costruito sulla base dei bisogni clinici, funzionali e relazionali della persona.",
                    ],
                    [
                      "Collaborazione con la famiglia",
                      "Il dialogo e il coinvolgimento dei familiari sono parte integrante del percorso assistenziale.",
                    ],
                    [
                      "Qualita e miglioramento continuo",
                      "L'impegno nell'aggiornamento professionale e nell'innovazione organizzativa consente di offrire servizi sempre piu rispondenti ai bisogni degli ospiti.",
                    ],
                  ].map(([title, description]) => (
                    <li
                      className="border-l-4 border-primary bg-surface-container-low px-5 py-4"
                      key={title}
                    >
                      <h4 className="font-bold text-primary">{title}</h4>
                      <p className="mt-2 leading-relaxed text-on-surface-variant">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-reveal bg-surface py-16">
          <div className="mx-auto mb-12 max-w-7xl px-4 text-center md:px-12">
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
              Servizi
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
          </div>

          <div className="mx-auto flex max-w-[96rem] items-center gap-4 px-4 md:gap-6 md:px-8">
            <button
              aria-label="Servizi precedenti"
              className="mb-8 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-outline-variant bg-white/95 text-primary shadow-lg transition-all hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={() => scrollServices("left")}
              type="button"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>

            <div
              className="no-scrollbar flex min-w-0 flex-1 gap-8 overflow-x-auto pb-8"
              ref={servicesScrollerRef}
            >
              {loopedServices.map((service, index) => (
                <button
                  className="scroll-reveal-item group flex w-40 shrink-0 flex-col items-center gap-4 text-center"
                  key={`${service.label}-${index}`}
                  onClick={() => setSelectedService(service)}
                  style={
                    {
                      "--reveal-delay": `${Math.min((index % services.length) * 70, 560)}ms`,
                    } as CSSProperties
                  }
                  type="button"
                >
                  <span className="relative flex h-24 w-24 items-center justify-center rounded-[2rem] border border-secondary/25 bg-secondary/10 transition-all duration-300 group-hover:border-secondary/50 group-hover:bg-secondary/15">
                    <span className="absolute right-3 top-3 h-3 w-3 rounded-full bg-soft-gold/70" />
                    <ServiceIconGlyph
                      className="h-12 w-12 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:text-primary"
                      icon={service.icon}
                    />
                  </span>
                  <span className="text-sm font-bold text-on-surface">
                    {service.label}
                  </span>
                </button>
              ))}
            </div>

            <button
              aria-label="Servizi successivi"
              className="mb-8 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-outline-variant bg-white/95 text-primary shadow-lg transition-all hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={() => scrollServices("right")}
              type="button"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>

          <p className="-mt-3 text-center text-sm font-bold text-primary underline decoration-primary decoration-2 underline-offset-4">
            Scorri per vedere tutti i servizi e cliccaci sopra per scoprirli
          </p>
        </section>

        {/* Sezione mantenuta commentata per una possibile riattivazione futura.
        <section className="scroll-reveal bg-surface-container-low py-16">
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
        */}

        <section id="info" className="scroll-reveal bg-surface-container py-16">
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

        {/* Blocco CTA visite mantenuto commentato per eventuale riattivazione futura.
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
        */}
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
          <div className="relative max-h-[88vh] w-full max-w-3xl overflow-hidden rounded-xl bg-surface shadow-2xl">
            <div className="max-h-[88vh] overflow-y-auto p-6 md:p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                  <ServiceIconGlyph
                    className="h-7 w-7 text-secondary"
                    icon={selectedService.icon}
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  {selectedService.title}
                </h3>
              </div>

              <img
                alt=""
                className="mb-8 h-44 w-full rounded-lg object-cover md:h-56"
                loading="lazy"
                src={
                  serviceModalImages[selectedService.icon] ??
                  serviceModalImages.default
                }
              />

              <div className="mb-10 space-y-7">
                {selectedService.sections.map((section) => (
                  <section className="space-y-3" key={section.heading ?? section.paragraphs[0]}>
                    {section.heading && (
                      <h4 className="text-lg font-bold text-primary">
                        {section.heading}
                      </h4>
                    )}
                    {section.paragraphs.map((paragraph) => (
                      <p
                        className="leading-relaxed text-on-surface-variant"
                        key={paragraph}
                      >
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                        {section.bullets.map((feature) => (
                          <li className="flex items-start gap-3" key={feature}>
                            <span className="material-symbols-outlined mt-0.5 text-sm text-primary">
                              check_circle
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

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
