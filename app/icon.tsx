import { ImageResponse } from "next/og";
import { iconGradient, loadOgFonts } from "@/lib/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
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
        borderRadius: 7,
        color: "#fff",
        fontFamily: "Plus Jakarta Sans",
        fontWeight: 800,
        fontSize: 17,
        letterSpacing: -0.5,
      }}
    >
      CB
    </div>,
    { ...size, fonts },
  );
}
