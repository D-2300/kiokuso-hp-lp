import { useRef } from "react";

const cases = [
  {
    type: "カフェ",
    cost: "120万円",
    tsubo: "12坪",
    period: "6週間",
    desc: "居抜き活用。既存カウンターを活かし、壁と照明で印象を一新。",
    before: "/images/crossover-before-01.webp",
    after: "/images/crossover-after-01.webp",
  },
  {
    type: "居酒屋",
    cost: "180万円",
    tsubo: "18坪",
    period: "8週間",
    desc: "スケルトンから施工。厨房レイアウトを一から設計。",
    before: "/images/crossover-before-02.webp",
    after: "/images/crossover-after-02.webp",
  },
  {
    type: "美容室",
    cost: "150万円",
    tsubo: "15坪",
    period: "7週間",
    desc: "施主支給の鏡とチェアでコスト削減。清潔感を重視。",
    before: "/images/salon-before-01.webp",
    after: "/images/salon-after-01.webp",
  },
  {
    type: "テイクアウト",
    cost: "90万円",
    tsubo: "8坪",
    period: "4週間",
    desc: "一人で回せる動線設計。小規模だからこそ、1cm単位で工夫。",
    before: "/images/owl-before-01.webp",
    after: "/images/owl-after-01.webp",
  },
];

export default function LPBeforeAfter() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 16
      : 300;
    el.scrollBy({ left: dir === "next" ? cardWidth : -cardWidth, behavior: "smooth" });
  };

  return (
    <section style={{ padding: "48px 0", backgroundColor: "#fff", overflow: "hidden" }}>
      <style>{`
        .ba-track::-webkit-scrollbar { display: none; }
        .ba-track { scrollbar-width: none; }
        @media (max-width: 767px) {
          .ba-card { min-width: 85vw !important; }
        }
      `}</style>

      {/* Full-bleed carousel breakout */}
      <div
        style={{
          position: "relative",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
        }}
      >
        <div
          ref={trackRef}
          className="ba-track"
          style={{
            display: "flex",
            gap: "16px",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            padding: "0 5vw",
          }}
        >
          {cases.map((c) => (
            <div
              key={c.type}
              className="ba-card"
              style={{
                flexShrink: 0,
                minWidth: "70vw",
                scrollSnapAlign: "start",
                backgroundColor: "#fff",
                border: "1px solid #eee",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                {(["Before", "After"] as const).map((label) => (
                  <div key={label} style={{ position: "relative" }}>
                    <div style={{ height: "clamp(144px, 20vw, 240px)", overflow: "hidden" }}>
                      <img
                        src={label === "Before" ? c.before : c.after}
                        alt={`${c.type} ${label}`}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <span
                      style={{
                        position: "absolute",
                        bottom: "8px",
                        left: "8px",
                        fontSize: "12px",
                        fontWeight: 700,
                        color: "#fff",
                        backgroundColor: label === "Before" ? "rgba(55,65,81,0.85)" : "rgba(22,163,74,0.85)",
                        padding: "3px 10px",
                        borderRadius: "4px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ padding: "14px 16px" }}>
                <p style={{ margin: 0, fontSize: "clamp(13px, 2vw, 15px)", fontWeight: 500, color: "#555" }}>
                  {c.type}
                </p>
                <p style={{ margin: "4px 0 0", fontSize: "clamp(17px, 3vw, 20px)", fontWeight: 700, color: "#222" }}>
                  {c.cost}
                </p>
                <p style={{ margin: "4px 0 0", fontSize: "clamp(12px, 2vw, 13px)", color: "#999" }}>
                  {c.tsubo} ／ {c.period}
                </p>
                <p style={{ margin: "6px 0 0", fontSize: "clamp(12px, 2vw, 13px)", color: "#777", lineHeight: 1.7 }}>
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow buttons — centred within normal flow */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        <button
          onClick={() => scroll("prev")}
          aria-label="前へ"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid #ddd",
            backgroundColor: "#fff",
            cursor: "pointer",
            fontSize: "18px",
            color: "#555",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 6px rgba(0,0,0,0.10)",
          }}
        >
          ‹
        </button>
        <button
          onClick={() => scroll("next")}
          aria-label="次へ"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid #ddd",
            backgroundColor: "#fff",
            cursor: "pointer",
            fontSize: "18px",
            color: "#555",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 6px rgba(0,0,0,0.10)",
          }}
        >
          ›
        </button>
      </div>

      <p style={{ textAlign: "center", fontSize: "14px", color: "#999", marginTop: "12px" }}>
        ← スワイプで見る →
      </p>
    </section>
  );
}
