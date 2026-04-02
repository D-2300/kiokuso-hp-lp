import { T, C } from "../tokens";
import TSectionHeader from "./TSectionHeader";

export default function TProfile() {
  return (
    <section style={{ backgroundColor: C.white, padding: "48px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <TSectionHeader label="ABOUT" heading={"記憶荘について"} />

        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src="/images/logo-group-gold.webp"
            alt="記憶荘"
            loading="lazy"
            style={{ width: "72px", height: "72px", objectFit: "contain", display: "block", margin: "0 auto" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "flex-start",
            padding: "24px",
            border: `1px solid rgba(44,74,107,0.1)`,
            borderRadius: "4px",
            backgroundColor: T.bg,
          }}
        >
          <div style={{ flexShrink: 0, textAlign: "center" }}>
            <img
              src="/images/about-dai-sm.webp"
              alt="代表"
              width="56"
              height="56"
              loading="lazy"
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <p style={{ margin: "6px 0 0", fontSize: "11px", letterSpacing: "0.06em", color: T.mid, fontWeight: 500 }}>
              代表
            </p>
            <p style={{ margin: 0, fontSize: "14px", fontWeight: 600, color: C.textDark }}>
              KEN
            </p>
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ margin: 0, fontSize: "clamp(13px, 3.2vw, 14px)", color: C.textMid, lineHeight: 1.9 }}>
              不動産業界で物件仲介を経験した後、店舗内装の世界へ。カフェ・バー・美容室など年間50件以上の内装を手がける中で「物件選びの段階から内装を見据えた判断ができれば、もっと良い出店ができる」と確信。物件探しから内装工事までワンストップで支援する現在のスタイルを確立しました。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
