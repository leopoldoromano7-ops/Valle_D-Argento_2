import { Link, useLoaderData } from "react-router";
import type { Route } from "./+types/news-detail";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { getPublishedNewsBySlug } from "../lib/news.server";
import { formatDate } from "../lib/news.shared";

export async function loader({ params }: Route.LoaderArgs) {
  const item = await getPublishedNewsBySlug(params.slug || "");
  if (!item) {
    throw new Response("News non trovata", { status: 404 });
  }

  return { item };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "News | Valle d'Argento 2" },
    {
      name: "description",
      content: "News della RSA Valle d'Argento 2.",
    },
  ];
}

export default function NewsDetail() {
  const { item } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-4 py-14 pt-32 md:px-12">
        <Link
          className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover"
          to="/news"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Tutte le news
        </Link>

        <article className="mt-8">
          <time className="text-sm font-bold uppercase tracking-widest text-secondary">
            {formatDate(item.publishedAt)}
          </time>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-primary md:text-6xl">
            {item.title}
          </h1>
          {item.imagePath && (
            <img
              alt=""
              className="mt-10 aspect-[16/9] w-full object-cover shadow-sm"
              src={item.imagePath}
            />
          )}
          <div className="mt-10 whitespace-pre-line text-lg leading-8 text-on-surface-variant">
            {item.content}
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
