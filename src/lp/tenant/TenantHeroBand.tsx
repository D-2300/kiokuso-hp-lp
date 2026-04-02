export default function TenantHeroBand() {
  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <img
        src="/images/kai-ken-blueprint-meeting-sm.webp"
        alt="KAIとKENが施工現場で図面を広げて打ち合わせ"
        style={{
          width: "100%",
          height: "clamp(180px, 25vw, 280px)",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
      />
      {/* Top gradient overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "40px",
          background: "linear-gradient(to bottom, #1a1f14, transparent)",
          pointerEvents: "none",
        }}
      />
      {/* Bottom gradient overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40px",
          background: "linear-gradient(to top, #ffffff, transparent)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
