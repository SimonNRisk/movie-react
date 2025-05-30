export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getDate())) return "Invalid Date";

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
