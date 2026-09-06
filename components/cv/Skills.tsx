import type { SkillGroup } from "@/content/cv";
import { TagList } from "./Chip";

export function Skills({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="space-y-5">
      {groups.map((group) => (
        <div key={group.title} className="space-y-2.5">
          <h3 className="text-heading font-bold text-ink">{group.title}</h3>
          <dl className="space-y-2.5">
            {group.rows.map((row) => (
              <div key={row.label} className="flex flex-col gap-1.5 sm:flex-row sm:gap-0">
                <dt className="w-35 shrink-0 text-body text-ink-muted">{row.label}</dt>
                <dd className="min-w-0 flex-1">
                  <TagList items={row.items} label={`${row.label} skills`} spacing="loose" />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}
