import { CalendarIcon } from "@/components/icons";
import { formatDate } from "@/lib/dates";

interface DateBadgeProps {
  start: string;
  end: string | null;
}

export function DateBadge({ start, end }: DateBadgeProps) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1 font-mono text-date font-medium tracking-[-0.05em] whitespace-nowrap text-ink">
      <CalendarIcon className="size-5 text-ink-muted" />
      <span>
        <time dateTime={start}>{formatDate(start)}</time>
        {" - "}
        {end ? <time dateTime={end}>{formatDate(end)}</time> : "Present"}
      </span>
    </span>
  );
}
