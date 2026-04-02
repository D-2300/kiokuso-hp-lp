import { T, C } from "../tokens";

export default function TAgitate() {
  return (
    <section style={{ backgroundColor: C.white, padding: "48px 20px" }}>
      <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ width: "40px", height: "1px", backgroundColor: C.gold, opacity: 0.5, margin: "0 auto 28px" }} />

        <p
          style={{
            margin: "0 0 24px",
            fontFamily: "'Noto Serif JP', serif",
            fontSize: "clamp(15px, 3.8vw, 18px)",
            fontWeight: 400,
            color: C.textDark,
            lineHeight: 2.0,
            letterSpacing: "0.04em",
          }}
        >
          不動産屋は、物件を決めてほしい。<br />
          内装屋は、物件が決まってから。
        </p>

        <p
          style={{
            margin: "0 0 24px",
            fontSize: "clamp(13px, 3.2vw, 15px)",
            color: C.textMid,
            lineHeight: 1.9,
            letterSpacing: "0.02em",
          }}
        >
          でも本当に必要なのは、<br />
          <span style={{ fontWeight: 600, color: T.main }}>
            物件選びの段階から内装費を見据えたアドバイス。
          </span>
        </p>

        <p
          style={{
            margin: 0,
            fontSize: "clamp(13px, 3.2vw, 15px)",
            color: C.textMid,
            lineHeight: 1.9,
            letterSpacing: "0.02em",
          }}
        >
          この"隙間"を埋められる存在が、<br />
          仙台にはほとんどいません。
        </p>

        <div style={{ width: "40px", height: "1px", backgroundColor: C.gold, opacity: 0.5, margin: "28px auto 0" }} />
      </div>
    </section>
  );
}
