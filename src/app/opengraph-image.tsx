import { ImageResponse } from "next/og";

export const alt = "Kapil Badgujjar — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#050507",
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(99,102,241,0.40), transparent 42%), radial-gradient(circle at 100% 100%, rgba(236,72,153,0.32), transparent 42%)",
          fontFamily: "sans-serif",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 10,
            color: "#a5b4fc",
            marginBottom: 26,
          }}
        >
          SOFTWARE ENGINEER
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 100,
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: -2,
          }}
        >
          Kapil Badgujjar
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "#a1a1aa",
            marginTop: 30,
            maxWidth: 960,
          }}
        >
          Cloud-native architecture · Backend automation · Full-stack
        </div>
        <div style={{ display: "flex", gap: 14, marginTop: 46 }}>
          {["Next.js", "Node.js", "FastAPI", "AWS", "PostgreSQL"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                border: "1px solid rgba(255,255,255,0.16)",
                borderRadius: 999,
                padding: "10px 24px",
                fontSize: 24,
                color: "#e4e4e7",
              }}
            >
              {t}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 70,
            right: 80,
            fontSize: 24,
            color: "#71717a",
          }}
        >
          kapilbadgujjar99@gmail.com
        </div>
      </div>
    ),
    { ...size }
  );
}
