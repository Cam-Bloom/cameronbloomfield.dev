import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  label: string;
  children: ReactNode;
}

/**
 * The label | content row from the design. Labels sit in a left column from the
 * `cv` breakpoint up and become section headings above the content below it.
 */
export function Section({ id, label, children }: SectionProps) {
  return (
    <section
      aria-labelledby={`${id}-heading`}
      className="grid gap-y-3 border-b border-line py-6 cv:grid-cols-[14rem_minmax(0,1fr)] cv:gap-y-0 print:grid-cols-[12rem_minmax(0,1fr)] print:gap-y-0 print:py-4"
    >
      <h2 id={`${id}-heading`} className="text-heading font-bold text-ink">
        {label}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
