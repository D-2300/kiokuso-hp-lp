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
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: M.dark,
      }}
      className="m-hero"
    >
      <style>{`
        @media (max-width: 767px) {
          .m-hero { min-height: 90vh !important; }
          .m-hero-inner { min-height: 90vh !important; }
          .m-hero-h1 { font-size: 28px !important; }
          .m-hero-sub { font-size: 15px !important; }
        }
        @media (min-width: 768px) {
          .m-hero-h1 { font-size: 36px !important; }
          .m-hero-sub { font-size: 17px !important; }
        }
      `}</style>

      {/* Background image - grayscale */}
      <img
        src="/images/m-hero-gray.webp"
        srcSet="/images/m-hero-gray-sm.webp 480w, /images/m-hero-gray.webp 720w"
        alt=""
        width="720"
        height="403"
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.7)",
        }}
      />

      {/* Dark overlay with purple tint */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to bottom, rgba(68,41,64,0.75) 0%, rgba(68,41,64,0.4) 40%, rgba(68,41,64,0.7) 100%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* Content */}
      <div
        className="m-hero-inner"
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "28px 20px 0",
          paddingTop: "72px",
          maxWidth: "720px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <div>
          {/* Logo */}
          <div style={{ marginBottom: "20px" }}>
            <img
              src="/images/logo-manshitsu-h-gold.png"
              alt="記憶荘 満室デザインLABO"
              style={{ height: "36px", objectFit: "contain" }}
            />
          </div>

          {/* Badge */}
          <div style={{ marginBottom: "20px" }}>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(4px)",
                padding: "6px 16px",
                borderRadius: "4px",
                fontSize: "clamp(13px, 2vw, 15px)",
                fontWeight: 500,
                color: "#333",
              }}
            >
              仙台・宮城の賃貸オーナー様へ
            </span>
          </div>

          {/* Eyebrow */}
          <p
            style={{
              margin: "0 0 8px",
              fontSize: "13px",
              fontWeight: 400,
              letterSpacing: "3px",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            賃貸リノベーション
          </p>

          {/* H1 */}
          <h1 style={{ margin: 0, padding: 0 }}>
            <span
              className="m-hero-h1"
              style={{
                display: "block",
                fontFamily: "'Noto Serif JP', serif",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.45,
                letterSpacing: "-0.01em",
                textShadow: "0 2px 20px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.5)",
              }}
            >
              退去から<span style={{ color: C.gold }}>2週間</span>で、
            </span>
            <span
              className="m-hero-h1"
              style={{
                display: "block",
                fontFamily: "'Noto Serif JP', serif",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.45,
                letterSpacing: "-0.01em",
                textShadow: "0 2px 20px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.5)",
              }}
            >
              内見が入る部屋にします。
            </span>
          </h1>

          {/* Subtext */}
          <div style={{ marginTop: "16px", marginBottom: "20px" }}>
            <div style={{ width: "40px", height: "1px", backgroundColor: C.gold, margin: "0 0 12px" }} />
            <p
              className="m-hero-sub"
              style={{
                margin: 0,
                fontWeight: 500,
                color: C.gold,
                textShadow: "0 1px 6px rgba(0,0,0,0.4)",
                lineHeight: 1.8,
              }}
            >
              店舗内装のプロが、中間マージンなしで直接施工。<br />
              ただ元に戻すだけじゃない。<br />
              次の入居者が決まる部屋をつくります。
            </p>
          </div>

          {/* Feature badges */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "0 0 16px" }}>
            {["中間マージンなし", "自社施工・一括対応", "退去当日の見積もり可", "断りはLINE1本"].map((t) => (
              <span key={t} style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.85)",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "4px",
                padding: "4px 10px",
                border: "1px solid rgba(255,255,255,0.15)",
              }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Price + CTA at bottom */}
        <div style={{ marginTop: "auto" }}>
          {/* Price box */}
          <div
            style={{
              border: `1px solid ${C.gold}`,
              borderRadius: "4px",
              padding: "14px 20px",
              marginBottom: "20px",
              backgroundColor: "rgba(201,168,76,0.08)",
              backdropFilter: "blur(4px)",
              textAlign: "center",
            }}
          >
            <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.6)", letterSpacing: "0.05em", marginBottom: "4px" }}>
              クロス張替え
            </p>
            <p style={{ margin: 0, fontFamily: "'Noto Serif JP', serif" }}>
              <span style={{ fontSize: "clamp(24px, 6vw, 32px)", color: C.gold, fontWeight: 600 }}>900</span>
              <span style={{ fontSize: "14px", color: C.goldLight }}> 円/㎡〜（税別）</span>
            </p>
            <p style={{ margin: "4px 0 0", fontSize: "11px", color: "rgba(255,255,255,0.45)" }}>
              めくり・下地処理・廃材処分込み
            </p>
          </div>

          {/* CTA buttons */}
          <div style={{ padding: "0 0 40px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
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
                borderRadius: "999px",
                padding: "14px 24px",
                fontSize: "clamp(14px, 2vw, 16px)",
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
                borderRadius: "999px",
                padding: "12px 24px",
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
            <p style={{ margin: "6px 0 0", fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>
              受付 9:00〜18:00（土日対応可）/ LINEは24時間受付
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
