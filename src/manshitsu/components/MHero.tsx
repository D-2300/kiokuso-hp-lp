import { M, C, LINE_URL, TEL, TEL_DISPLAY } from "../tokens";

declare global {
  interface Window { dataLayer: unknown[]; }
}

function pushEvent(event: string) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event });
  }
}

export default function MHero() {
  return (
    <section
      style={{
        background: `linear-gradient(160deg, ${M.main} 0%, ${M.dark} 100%)`,
        padding: "56px 20px 48px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 70% 30%, rgba(201,168,76,0.08) 0%, transparent 60%)`,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "720px", margin: "0 auto", position: "relative" }}>
        <div style={{ marginBottom: "20px" }}>
          <img
            src="/assets/logos/logo-manshitsu-h-gold.png"
            alt="記憶荘 満室デザイン工房"
            style={{ height: "40px", objectFit: "contain" }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <span
            style={{
              display: "inline-block",
              border: `1px solid ${C.gold}`,
              color: C.gold,
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              padding: "5px 14px",
              borderRadius: "2px",
            }}
          >
            仙台・宮城の賃貸オーナー様へ
          </span>
        </div>

        <div style={{ marginBottom: "4px" }}>
          <div style={{ width: "40px", height: "1px", backgroundColor: C.gold, opacity: 0.5, margin: "0 auto 16px" }} />
        </div>

        <h1
          style={{
            fontFamily: "'Noto Serif JP', serif",
            fontSize: "clamp(21px, 5.5vw, 28px)",
            fontWeight: 600,
            color: C.white,
            lineHeight: 1.55,
            margin: "0 0 20px",
            letterSpacing: "0.02em",
          }}
        >
          退去から<span style={{ color: C.gold }}>2週間</span>で、<br />
          内見が入る部屋にします。
        </h1>

        <p
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: "clamp(13px, 3.5vw, 15px)",
            color: "rgba(255,255,255,0.82)",
            lineHeight: 1.85,
            margin: "0 0 28px",
            letterSpacing: "0.02em",
          }}
        >
          店舗内装のプロが、中間マージンなしで直接施工。<br />
          ただ元に戻すだけじゃない。<br />
          次の入居者が決まる部屋をつくります。
        </p>

        <div
          style={{
            display: "inline-block",
            border: `1px solid ${C.gold}`,
            borderRadius: "4px",
            padding: "12px 20px",
            marginBottom: "28px",
            backgroundColor: "rgba(201,168,76,0.06)",
          }}
        >
          <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.6)", letterSpacing: "0.05em", marginBottom: "4px" }}>
            クロス張替え
          </p>
          <p style={{ margin: 0, fontFamily: "'Noto Serif JP', serif" }}>
            <span style={{ fontSize: "clamp(22px, 5vw, 28px)", color: C.gold, fontWeight: 600 }}>900</span>
            <span style={{ fontSize: "13px", color: C.goldLight }}> 円/㎡〜（税別）</span>
          </p>
          <p style={{ margin: "4px 0 0", fontSize: "11px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.02em" }}>
            めくり・下地処理・廃材処分込み
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            justifyContent: "center",
            marginBottom: "32px",
          }}
        >
          {["✓ 中間マージンなし", "✓ 自社施工・一括対応", "✓ 退去当日の見積もり可"].map((t) => (
            <span
              key={t}
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.75)",
                backgroundColor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "2px",
                padding: "4px 10px",
                letterSpacing: "0.02em",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => pushEvent("line_cta_click_manshitsu")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: C.lineGreen,
              color: C.white,
              borderRadius: "4px",
              padding: "15px 36px",
              fontSize: "16px",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "0.04em",
              width: "100%",
              maxWidth: "320px",
              justifyContent: "center",
              boxShadow: "0 4px 16px rgba(6,199,85,0.25)",
            }}
          >
            LINEで無料相談する
          </a>
          <a
            href={`tel:${TEL}`}
            onClick={() => pushEvent("phone_cta_click_manshitsu")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "transparent",
              color: C.white,
              border: "1px solid rgba(255,255,255,0.35)",
              borderRadius: "4px",
              padding: "13px 36px",
              fontSize: "15px",
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: "0.04em",
              width: "100%",
              maxWidth: "320px",
              justifyContent: "center",
            }}
          >
            📞 {TEL_DISPLAY}
          </a>
        </div>

        <p style={{ margin: "14px 0 0", fontSize: "11px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.02em" }}>
          受付時間 9:00〜18:00（土日も対応可）/ LINEは24時間受付
        </p>
      </div>
    </section>
  );
}
