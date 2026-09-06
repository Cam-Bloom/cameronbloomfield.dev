import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Static font instances for build-time image generation (Satori needs non-variable TTFs). */
export async function loadOgFonts() {
  const dir = join(process.cwd(), "assets/fonts");
  const [extraBold, medium] = await Promise.all([
    readFile(join(dir, "PlusJakartaSans-ExtraBold.ttf")),
    readFile(join(dir, "PlusJakartaSans-Medium.ttf")),
  ]);
  return [
    { name: "Plus Jakarta Sans", data: extraBold, weight: 800 as const, style: "normal" as const },
    { name: "Plus Jakarta Sans", data: medium, weight: 500 as const, style: "normal" as const },
  ];
}

/** The header gradient for Satori (no mask support): hue band at the blob's alpha, on white. */
export const ogGradient =
  "linear-gradient(90deg, rgba(199,38,229,0.63) 0%, rgba(199,38,229,0.63) 28%, " +
  "rgba(142,62,240,0.63) 50%, rgba(86,81,255,0.63) 72%, rgba(86,81,255,0.63) 100%)";

/** White fade layered above the hue band, as in the header. */
export const ogFade =
  "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 45%, rgba(255,255,255,1) 82%)";

/** Solid gradient for tiny icons where the fade would wash out. */
export const iconGradient =
  "linear-gradient(135deg, rgb(172,6,249) 0%, rgb(142,62,240) 50%, rgb(102,51,255) 100%)";
