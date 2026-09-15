export function formatDate(value: string | null) {
  if (!value) return "Non pubblicata";
  return new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}
