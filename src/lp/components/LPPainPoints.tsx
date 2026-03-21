const pains = [
  {
    icon: "¥",
    text: "費用がわかりにくい。見積もりが適正かも判断できない。",
    sub: "「一式」でまとめられると、何にいくら使っているのかわからない。",
  },
  {
    icon: "?",
    text: "物件の坪数で何席取れるのか、インフラ費用も見えない。",
    sub: "水道・ガス・空調の工事が別途かかると後から言われることも。",
  },
  {
    icon: "⏱",
    text: "オープンに間に合うか不安。工期がどれくらいか不明瞭。",
    sub: "着工してから「あと1ヶ月かかります」と言われるケースも。",
  },
  {
    icon: "…",
    text: "そもそも進め方がわからない。まだ物件が確定していない。",
    sub: "何から手をつければいいのか、相談する相手もいない。",
  },
];

export default function LPPainPoints() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "48px 20px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "clamp(17px, 3vw, 22px)",
            fontWeight: 700,
            color: "#333",
            textAlign: "center",
            marginBottom: "28px",
          }}
        >
          内装工事を考えているけど、わからないことが多すぎる
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {pains.map((p) => (
            <div
              key={p.icon}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
                padding: "18px 20px",
                backgroundColor: "#fafafa",
                borderRadius: "10px",
                border: "1px solid #eee",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "#EAF0E8",
                  fontSize: "20px",
                  color: "#555",
                  flexShrink: 0,
                }}
              >
                {p.icon}
              </span>
              <div style={{ flex: 1, paddingTop: "8px" }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: "clamp(14px, 2.5vw, 16px)",
                    color: "#333",
                    lineHeight: 1.8,
                  }}
                >
                  {p.text}
                </p>
                <p
                  style={{
                    margin: "6px 0 0",
                    fontSize: "clamp(12px, 2vw, 13px)",
                    color: "#999",
                    lineHeight: 1.7,
                  }}
                >
                  {p.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
