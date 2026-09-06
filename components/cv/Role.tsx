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
    </article>
  );
}
