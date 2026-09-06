const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

/** Accepts "YYYY" or "YYYY-MM" and returns "YYYY" or "Mon YYYY". */
export function formatDate(iso: string): string {
  const [year, month] = iso.split("-");
  if (!month) return year;
  const label = MONTHS[Number(month) - 1];
  return label ? `${label} ${year}` : year;
}
