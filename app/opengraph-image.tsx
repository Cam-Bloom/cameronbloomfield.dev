import { ImageResponse } from "next/og";
import { cv } from "@/content/cv";
import { loadOgFonts, ogFade, ogGradient } from "@/lib/og";

export const alt = "Cameron Bloomfield · Front-End Focused Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fonts = await loadOgFonts();
  const { profile } = cv;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundColor: "#ffffff",
        backgroundImage: ogGradient,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: ogFade,
          fontFamily: "Plus Jakarta Sans",
          color: "#334155",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: -1, lineHeight: 1.1 }}>
          {profile.name}
        </div>
        <div style={{ marginTop: 12, fontSize: 36, fontWeight: 500, color: "#64748b" }}>
          {profile.headline}
        </div>
        <div
          style={{
            marginTop: 56,
            display: "flex",
            gap: 28,
            fontSize: 26,
            fontWeight: 500,
            color: "#64748b",
          }}
        >
          <span>{profile.location}</span>
          <span style={{ color: "#cbd5e1" }}>·</span>
          <span>cameronbloomfield.dev</span>
        </div>
      </div>
    </div>,
    { ...size, fonts },
  );
}
