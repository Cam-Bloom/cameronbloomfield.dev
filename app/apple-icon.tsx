import { ImageResponse } from "next/og";
import { iconGradient, loadOgFonts } from "@/lib/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const fonts = await loadOgFonts();
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: iconGradient,
        color: "#fff",
        fontFamily: "Plus Jakarta Sans",
        fontWeight: 800,
        fontSize: 92,
        letterSpacing: -3,
      }}
    >
      CB
    </div>,
    { ...size, fonts },
  );
}
