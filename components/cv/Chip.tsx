interface TagListProps {
  items: string[];
  label: string;
  /** Figma uses a 4px gap inside experience entries and 8px in the skills matrix. */
  spacing?: "tight" | "loose";
}

export function TagList({ items, label, spacing = "tight" }: TagListProps) {
  return (
    <ul aria-label={label} className={`flex flex-wrap ${spacing === "tight" ? "gap-1" : "gap-2"}`}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md bg-chip px-1.5 py-0.5 font-medium whitespace-nowrap text-chip text-chip-text"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
