import type { RowDataPacket } from "mysql2";
import { execute, queryRows } from "./db.server";

export type NewsStatus = "draft" | "published";

export type NewsItem = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  imagePath: string | null;
  status: NewsStatus;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

type NewsRow = RowDataPacket & {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  image_path: string | null;
  status: NewsStatus;
  published_at: Date | string | null;
  created_at: Date | string;
  updated_at: Date | string;
};

export type NewsInput = {
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  imagePath: string | null;
  status: NewsStatus;
  publishedAt: string | null;
};

function toIsoDate(value: Date | string | null) {
  if (!value) return null;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? String(value) : date.toISOString();
}

function mapNews(row: NewsRow): NewsItem {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt,
    content: row.content,
    imagePath: row.image_path,
    status: row.status,
    publishedAt: toIsoDate(row.published_at),
    createdAt: toIsoDate(row.created_at) || "",
    updatedAt: toIsoDate(row.updated_at) || "",
  };
}

export function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120);
}

export async function getPublishedNews() {
  const rows = await queryRows<NewsRow>(
    `select * from news
     where status = 'published'
       and (published_at is null or published_at <= now())
     order by coalesce(published_at, created_at) desc, id desc`,
  );
  return rows.map(mapNews);
}

export async function getPublishedNewsBySlug(slug: string) {
  const rows = await queryRows<NewsRow>(
    `select * from news
     where slug = :slug
       and status = 'published'
       and (published_at is null or published_at <= now())
     limit 1`,
    { slug },
  );
  return rows[0] ? mapNews(rows[0]) : null;
}

export async function getAllNews() {
  const rows = await queryRows<NewsRow>(
    `select * from news
     order by coalesce(published_at, created_at) desc, id desc`,
  );
  return rows.map(mapNews);
}

export async function getNewsById(id: number) {
  const rows = await queryRows<NewsRow>("select * from news where id = :id limit 1", {
    id,
  });
  return rows[0] ? mapNews(rows[0]) : null;
}

export async function createNews(input: NewsInput) {
  const result = await execute(
    `insert into news
      (title, slug, excerpt, content, image_path, status, published_at)
     values
      (:title, :slug, :excerpt, :content, :imagePath, :status, :publishedAt)`,
    input,
  );
  return result.insertId;
}

export async function updateNews(id: number, input: NewsInput) {
  await execute(
    `update news set
      title = :title,
      slug = :slug,
      excerpt = :excerpt,
      content = :content,
      image_path = :imagePath,
      status = :status,
      published_at = :publishedAt
     where id = :id`,
    { ...input, id },
  );
}

export async function deleteNews(id: number) {
  await execute("delete from news where id = :id", { id });
}

export async function isSlugAvailable(slug: string, exceptId?: number) {
  const rows = await queryRows<RowDataPacket & { total: number }>(
    `select count(*) as total from news
     where slug = :slug and (:exceptId is null or id <> :exceptId)`,
    { slug, exceptId: exceptId ?? null },
  );
  return Number(rows[0]?.total || 0) === 0;
}
