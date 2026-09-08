import type { School } from "@/content/cv";
import { TagList } from "./Chip";
import { DateBadge } from "./DateBadge";

/** Renders "1st" as 1<sup>st</sup>, matching the superscript in the design. */
function Detail({ text }: { text: string }) {
  const match = /^(\d+)(st|nd|rd|th)\b(.*)$/.exec(text);
  if (!match) return <>({text})</>;
  const [, number, suffix, rest] = match;
  return (
    <>
      ({number}
      <sup className="text-[0.7em]">{suffix}</sup>
      {rest})
    </>
  );
}

export function Education({ schools }: { schools: School[] }) {
  return (
    <ul className="space-y-5">
      {schools.map((school) => (
        <li key={school.org} className="cv-avoid-break">
          <div className="flex items-start justify-between gap-x-4">
            <h3 className="min-w-0 flex-1 text-heading wrap-break-word text-ink">
              <span className="font-bold">{school.org}</span>
              <span className="font-normal"> — {school.title}</span>
              {school.detail && (
                <span className="text-[0.9em] text-ink-muted">
                  {" "}
                  <Detail text={school.detail} />
                </span>
              )}
            </h3>
            <DateBadge start={school.start} end={school.end} />
          </div>
          {school.tags && (
            <div className="mt-2.5">
              <TagList items={school.tags} label={`Curriculum at ${school.org}`} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
