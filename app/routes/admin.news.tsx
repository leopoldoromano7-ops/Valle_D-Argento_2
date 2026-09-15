import { Form, Link, redirect, useLoaderData } from "react-router";
import type { Route } from "./+types/admin.news";
import { logoutAdmin, requireNewsAdmin } from "../lib/admin-session.server";
import { deleteNews, getAllNews, getNewsById } from "../lib/news.server";
import { formatDate } from "../lib/news.shared";
import { removeNewsImage } from "../lib/upload.server";

export async function loader({ request }: Route.LoaderArgs) {
  await requireNewsAdmin(request);
  return { news: await getAllNews() };
}

export async function action({ request }: Route.ActionArgs) {
  await requireNewsAdmin(request);
  const formData = await request.formData();
  const intent = String(formData.get("intent") || "");

  if (intent === "logout") {
    return logoutAdmin(request);
  }

  if (intent === "delete") {
    const id = Number(formData.get("id"));
    const item = await getNewsById(id);
    if (item) {
      await deleteNews(id);
      await removeNewsImage(item.imagePath);
    }
  }

  return redirect("/admin/news");
}

export default function AdminNews() {
  const { news } = useLoaderData<typeof loader>();

  return (
    <main className="min-h-screen bg-background px-4 py-10 text-on-surface md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-secondary">
              Admin News
            </span>
            <h1 className="mt-2 text-4xl font-bold text-primary">Gestione news</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link className="btn-primary" to="/admin/news/new">
              <span className="material-symbols-outlined">add</span>
              Nuova news
            </Link>
            <Form method="post">
              <input name="intent" type="hidden" value="logout" />
              <button
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-outline-variant bg-white px-5 py-4 font-bold text-primary hover:bg-surface-container"
                type="submit"
              >
                <span className="material-symbols-outlined">logout</span>
                Logout
              </button>
            </Form>
          </div>
        </div>

        <section className="mt-8 overflow-hidden border border-outline-variant bg-white shadow-sm">
          {news.length === 0 ? (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-primary">Nessuna news</h2>
              <p className="mt-2 text-on-surface-variant">
                Crea la prima comunicazione per iniziare.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-outline-variant">
              {news.map((item) => (
                <article
                  className="grid gap-4 p-5 md:grid-cols-[1fr_auto] md:items-center"
                  key={item.id}
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ${
                          item.status === "published"
                            ? "bg-secondary/15 text-secondary"
                            : "bg-surface-container text-on-surface-variant"
                        }`}
                      >
                        {item.status === "published" ? "Pubblicata" : "Bozza"}
                      </span>
                      <time className="text-sm text-on-surface-variant">
                        {formatDate(item.publishedAt)}
                      </time>
                    </div>
                    <h2 className="mt-2 text-2xl font-bold text-primary">
                      {item.title}
                    </h2>
                    <p className="mt-1 break-all text-sm text-on-surface-variant">
                      /news/{item.slug}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      className="inline-flex items-center gap-2 rounded-lg border border-outline-variant px-4 py-3 font-bold text-primary hover:bg-surface-container"
                      to={`/admin/news/${item.id}/edit`}
                    >
                      <span className="material-symbols-outlined">edit</span>
                      Modifica
                    </Link>
                    <Form
                      method="post"
                      onSubmit={(event) => {
                        if (!confirm("Eliminare definitivamente questa news?")) {
                          event.preventDefault();
                        }
                      }}
                    >
                      <input name="intent" type="hidden" value="delete" />
                      <input name="id" type="hidden" value={item.id} />
                      <button
                        className="inline-flex items-center gap-2 rounded-lg border border-red-200 px-4 py-3 font-bold text-red-700 hover:bg-red-50"
                        type="submit"
                      >
                        <span className="material-symbols-outlined">delete</span>
                        Elimina
                      </button>
                    </Form>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
