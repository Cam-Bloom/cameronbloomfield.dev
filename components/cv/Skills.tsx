import type { SkillGroup } from "@/content/cv";
import { TagList } from "./Chip";

export function Skills({ groups }: { groups: SkillGroup[] }) {
  return (
    <dl className="space-y-4">
      {groups.map((group) => (
        <div key={group.label} className="flex flex-col gap-1.5 sm:flex-row sm:gap-0">
          <dt className="w-35 shrink-0 text-body font-semibold text-ink-muted">{group.label}</dt>
          <dd className="min-w-0 flex-1">
            <TagList items={group.items} label={`${group.label} skills`} spacing="loose" />
          </dd>
        </div>
      ))}
    </dl>
  );
}
