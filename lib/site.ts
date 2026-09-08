import { cv } from "@/content/cv";

export const site = {
  name: cv.profile.name,
  url: "https://cameronbloomfield.dev",
  title: `${cv.profile.name} · ${cv.profile.headline}`,
  description: cv.description,
  cvPdfPath: "/Cameron-Bloomfield-CV.pdf",
} as const;
