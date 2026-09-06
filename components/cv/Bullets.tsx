interface BulletsProps {
  items: string[];
}

export function Bullets({ items }: BulletsProps) {
  return (
    <ul className="space-y-1">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-1.5 size-2.5 shrink-0 rounded-[3px] bg-bullet" />
          <span className="text-body text-ink">{item}</span>
        </li>
      ))}
    </ul>
  );
}
