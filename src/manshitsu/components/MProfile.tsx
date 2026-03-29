import { M, C } from "../tokens";
import MSectionHeader from "./MSectionHeader";

export default function MProfile() {
  return (
    <section style={{ backgroundColor: C.white, padding: "48px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <MSectionHeader label="ABOUT" heading={"記憶荘について"} />

        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "flex-start",
            padding: "24px",
            border: `1px solid rgba(107,64,102,0.1)`,
            borderRadius: "4px",
            backgroundColor: M.bg,
            flexWrap: "wrap",
          }}
        >
          <img
            src="/images/logo-manshitsu-mark-gold.png"
            alt="記憶荘 満室デザインLABO ロゴ"
            style={{ width: "80px", height: "80px", objectFit: "contain", flexShrink: 0 }}
          />
          <div style={{ flex: 1, minWidth: "200px" }}>
            <p style={{ margin: "0 0 2px", fontSize: "11px", letterSpacing: "0.08em", color: M.main, fontWeight: 500 }}>
              記憶荘｜満室デザインLABO
            </p>
            <p style={{ margin: "0 0 12px", fontSize: "clamp(15px, 3.5vw, 17px)", fontWeight: 600, color: C.textDark }}>
              代表 ◯◯
            </p>
            <p style={{ margin: 0, fontSize: "clamp(12px, 3vw, 13px)", color: C.textMid, lineHeight: 1.9 }}>
              仙台で店舗内装の設計・施工を手がけています。カフェ、バー、美容室など、「人が集まる空間」をつくる仕事をしてきました。その技術を、賃貸物件の空室対策に活かせないかと考え、オーナー様向けのサービスを始めました。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
