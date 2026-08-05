import type { Route } from "./+types/news";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "News | Valle d'Argento 2" },
    {
      name: "description",
      content:
        "La sezione news della RSA Valle d'Argento 2 e in costruzione.",
    },
  ];
}

export default function News() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <SiteHeader />

      <main className="mx-auto flex min-h-[70vh] max-w-7xl items-center px-4 py-14 pt-32 md:px-12">
        <section className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-sm font-bold uppercase tracking-widest text-secondary">
            <span className="material-symbols-outlined">newspaper</span>
            News
          </span>
          <h1 className="mt-6 text-4xl font-bold text-primary md:text-6xl">
            Sezione in costruzione
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-on-surface-variant md:text-xl">
            Stiamo preparando questo spazio per raccontare novita, comunicazioni e
            iniziative della RSA Valle d'Argento 2.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
