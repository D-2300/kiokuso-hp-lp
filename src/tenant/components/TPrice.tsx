import { T, C, LINE_URL } from "../tokens";
import TSectionHeader from "./TSectionHeader";

const prices = [
  { label: "居抜き活用プラン", range: "50万円台〜", note: "既存設備を活かしてコストを抑えた開業" },
  { label: "スケルトン施工", range: "坪単価 15万円〜", note: "自由な空間設計で理想の店舗を実現" },
  { label: "部分改装・リニューアル", range: "30万円台〜", note: "必要な箇所だけを改装して費用を最適化" },
];

declare global {
  interface Window { dataLayer: unknown[]; }
}

function pushEvent(event: string) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event });
  }
}

export default function TPrice() {
  return (
    <section style={{ backgroundColor: T.bg, padding: "48px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <TSectionHeader label="PRICE" heading={"費用の目安"} />

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
          {prices.map((p, i) => (
            <div
              key={i}
              style={{
                padding: "20px",
                backgroundColor: C.white,
                borderRadius: "4px",
                border: `1px solid rgba(44,74,107,0.08)`,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                <p style={{ margin: 0, fontSize: "clamp(14px, 3.5vw, 15px)", fontWeight: 600, color: C.textDark }}>
                  {p.label}
                </p>
                <p style={{ margin: 0, fontSize: "clamp(16px, 4vw, 18px)", fontWeight: 700, color: T.main, fontFamily: "'Noto Serif JP', serif" }}>
                  {p.range}
                </p>
              </div>
              <p style={{ margin: 0, fontSize: "13px", color: C.textMid, lineHeight: 1.6 }}>
                {p.note}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <p style={{ margin: "0 0 16px", fontSize: "clamp(13px, 3.2vw, 14px)", color: C.textMid, lineHeight: 1.8 }}>
            ※業態・物件の状態によって費用は変動します。<br />
            詳しくはLINEでお気軽にご相談ください。
          </p>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-gtm="tenant_line_cta_click"
            onClick={() => pushEvent("line_cta_click_tenant")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: C.lineGreen,
              color: C.white,
              borderRadius: "4px",
              padding: "14px 32px",
              fontSize: "15px",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "0.04em",
              boxShadow: "0 4px 16px rgba(6,199,85,0.25)",
            }}
          >
            LINEで費用を相談する
          </a>
        </div>
      </div>
    </section>
  );
}
