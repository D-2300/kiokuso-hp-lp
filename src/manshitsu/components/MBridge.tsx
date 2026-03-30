import { C } from "../tokens";

export default function MBridge({ text }: { text: string }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px 24px",
        backgroundColor: C.warmWhite,
      }}
    >
      <p
        style={{
          margin: 0,
          fontFamily: "'Noto Serif JP', serif",
          fontSize: "clamp(13px, 3vw, 15px)",
          color: C.warmGray,
          letterSpacing: "0.08em",
          fontWeight: 400,
        }}
      >
        {text}
      </p>
    </div>
  );
}
