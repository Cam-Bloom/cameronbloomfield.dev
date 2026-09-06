/**
 * Reproduces the Figma header: a blurred purple-to-blue blob (rotated 6°),
 * a dashed white grid at 20% opacity, and a fade to white toward the bottom.
 * Everything is CSS and inline SVG so it stays crisp at any size and costs no bytes.
 */
export function HeaderBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="cv-backdrop pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="cv-blob" />
      <svg className="absolute inset-0 size-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cv-grid" width="32" height="29" patternUnits="userSpaceOnUse">
            <path d="M0 0.5H32" stroke="#fff" strokeOpacity="0.2" strokeDasharray="4 4" />
            <path d="M0.5 0V29" stroke="#fff" strokeOpacity="0.2" strokeDasharray="4 4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cv-grid)" />
      </svg>
      <div className="absolute inset-0 bg-linear-to-b from-white/0 to-white" />
    </div>
  );
}
