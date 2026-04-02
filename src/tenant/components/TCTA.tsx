import { T, C, LINE_URL, TEL, TEL_DISPLAY } from "../tokens";

declare global {
  interface Window { dataLayer: unknown[]; }
}

function pushEvent(event: string) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event });
  }
}

export default function TCTA() {
  return (
    <section
      style={{
        backgroundColor: T.main,
        padding: "52px 20px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 30% 70%, rgba(201,168,76,0.06) 0%, transparent 60%)`,
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: "640px", margin: "0 auto", position: "relative" }}>
        <div style={{ width: "40px", height: "1px", backgroundColor: C.gold, opacity: 0.5, margin: "0 auto 20px" }} />

        <h2
          style={{
            fontFamily: "'Noto Serif JP', serif",
            fontSize: "clamp(18px, 4.5vw, 22px)",
            fontWeight: 600,
            color: C.white,
            lineHeight: 1.6,
            margin: "0 0 12px",
            letterSpacing: "0.02em",
          }}
        >
          まずはLINEで、<br />
          物件情報を受け取ってください。
        </h2>

        <p
          style={{
            margin: "0 0 28px",
            fontSize: "clamp(13px, 3.5vw, 14px)",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.8,
          }}
        >
          非公開物件を含む情報を、無料でお届けします。
        </p>

        {/* QR code */}
        <div style={{ marginBottom: "24px" }}>
          <img
            src="/images/line-qr.png"
            alt="LINE QRコード"
            width="140"
            height="140"
            loading="lazy"
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "8px",
              border: "4px solid rgba(255,255,255,0.9)",
              display: "block",
              margin: "0 auto",
            }}
          />
          <p style={{ margin: "8px 0 0", fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>
            QRコードで友だち追加
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
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
              padding: "16px 40px",
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
            LINEで物件情報を受け取る
          </a>
          <a
            href={`tel:${TEL}`}
            data-gtm="tenant_phone_cta_click"
            onClick={() => pushEvent("phone_cta_click_tenant")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "transparent",
              color: C.white,
              border: "1px solid rgba(255,255,255,0.35)",
              borderRadius: "4px",
              padding: "14px 40px",
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

        <p style={{ margin: "16px 0 0", fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.02em" }}>
          受付時間 9:00〜18:00（土日も対応可）/ LINEは24時間受付
        </p>
      </div>
    </section>
  );
}
