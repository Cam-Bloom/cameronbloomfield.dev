import type { Role as RoleData } from "@/content/cv";
import { Bullets } from "./Bullets";
import { TagList } from "./Chip";
import { DateBadge } from "./DateBadge";

export function Role({ role }: { role: RoleData }) {
  return (
    <article className="space-y-2.5">
      <header className="cv-avoid-break flex flex-wrap items-end justify-between gap-x-4 gap-y-1">
        <h3 className="text-heading text-ink">
          <span className="font-bold">{role.org}</span>
          <span className="font-normal"> — {role.title}</span>
        </h3>
        <DateBadge start={role.start} end={role.end} />
      </header>
      {role.context && <p className="text-body text-ink-soft">{role.context}</p>}
      {role.note && <p className="text-body text-ink-soft">{role.note}</p>}
      {role.tags && <TagList items={role.tags} label={`Technologies used at ${role.org}`} />}
      <Bullets items={role.bullets} />
      {role.details && (
        <details className="cv-print-hide rounded-lg border border-line px-4 open:bg-chip/40">
          <summary className="cursor-pointer rounded-sm py-2 text-body font-semibold text-ink-muted hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
            {role.details.label}
            <span className="sr-only">
              {" "}
              — {role.org}, {role.title}
            </span>
          </summary>
          <div className="pb-4">
            <Bullets items={role.details.bullets} />
          </div>
        </details>
      )}
    </article>
  );
}
