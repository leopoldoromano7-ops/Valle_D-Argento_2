import { Link, useLoaderData } from "react-router";
import type { Route } from "./+types/news";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { getPublishedNews } from "../lib/news.server";
import { formatDate } from "../lib/news.shared";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "News | Valle d'Argento 2" },
    {
      name: "description",
      content:
        "Novita, comunicazioni e iniziative della RSA Valle d'Argento 2.",
    },
  ];
}

export async function loader() {
  return { news: await getPublishedNews() };
}

export default function News() {
  const { news } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <SiteHeader />

      <main className="mx-auto min-h-[70vh] max-w-7xl px-4 py-14 pt-32 md:px-12">
        <section className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-sm font-bold uppercase tracking-widest text-secondary">
            <span className="material-symbols-outlined">newspaper</span>
            News
          </span>
          <h1 className="mt-6 text-4xl font-bold text-primary md:text-6xl">
            Novita e comunicazioni
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-on-surface-variant md:text-xl">
            Aggiornamenti, iniziative e informazioni utili dalla RSA Valle
            d'Argento 2.
          </p>
        </section>

        {news.length === 0 ? (
          <section className="mt-14 border border-outline-variant bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary">
              Nessuna news pubblicata
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-on-surface-variant">
              Torna presto in questa sezione per leggere i prossimi aggiornamenti
              della struttura.
            </p>
          </section>
        ) : (
          <section className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <article
                className="overflow-hidden border border-outline-variant bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
                key={item.id}
              >
                {item.imagePath ? (
                  <img
                    alt=""
                    className="aspect-[16/10] w-full object-cover"
                    src={item.imagePath}
                  />
                ) : (
                  <div className="flex aspect-[16/10] items-center justify-center bg-surface-container text-primary">
                    <span className="material-symbols-outlined text-5xl">
                      newspaper
                    </span>
                  </div>
                )}
                <div className="p-6">
                  <time className="text-sm font-bold uppercase tracking-widest text-secondary">
                    {formatDate(item.publishedAt)}
                  </time>
                  <h2 className="mt-3 text-2xl font-bold leading-tight text-primary">
                    <Link className="hover:text-primary-hover" to={`/news/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h2>
                  {item.excerpt && (
                    <p className="mt-4 line-clamp-4 leading-relaxed text-on-surface-variant">
                      {item.excerpt}
                    </p>
                  )}
                  <Link
                    className="mt-6 inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover"
                    to={`/news/${item.slug}`}
                  >
                    Leggi la news
                    <span className="material-symbols-outlined text-lg">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </section>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
