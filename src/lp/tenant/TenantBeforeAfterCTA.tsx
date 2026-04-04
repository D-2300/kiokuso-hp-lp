import { useRef, useState, useCallback, useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const LINE_URL = "https://lin.ee/HVV0QJO";

const lineSvgPath =
  "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314";

const guidePoints = [
  "フリーレント交渉で実質40万円節約する方法",
  "仲介手数料を減らす「物元」直アプローチ",
  "保証会社を使って敷金を大幅削減",
  "不動産屋の「囲い込み」を見抜く方法",
  "居抜き物件の権利関係チェックポイント",
  "原状回復ルール — 契約前に決めないと数百万の損",
  "大家に工事費を負担させる交渉術",
  "物件探し→内装の一気通貫で得する理由",
];

function TenantBASlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const isDragging = useRef(false);
  const hasFiredEvent = useRef(false);

  const getPosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return 50;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    return Math.max(0, Math.min(100, (x / rect.width) * 100));
  }, []);

  const fireSliderEvent = useCallback(() => {
    if (!hasFiredEvent.current) {
      hasFiredEvent.current = true;
      window.dataLayer?.push({ event: "ba_slider_interact" });
    }
  }, []);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging.current) return;
      fireSliderEvent();
      setPosition(getPosition(clientX));
    },
    [getPosition, fireSliderEvent]
  );

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) handleMove(e.touches[0].clientX);
    };
    const onEnd = () => {
      isDragging.current = false;
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onEnd);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onEnd);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [handleMove]);

  const startDrag = (clientX: number) => {
    isDragging.current = true;
    fireSliderEvent();
    setPosition(getPosition(clientX));
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={(e) => {
        e.preventDefault();
        startDrag(e.clientX);
      }}
      onTouchStart={(e) => {
        if (e.touches[0]) startDrag(e.touches[0].clientX);
      }}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "4/3",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "ew-resize",
        userSelect: "none",
        WebkitUserSelect: "none",
        touchAction: "pan-y",
      }}
    >
      <img
        src="/images/crossover-after-01-sm.webp"
        alt="CROSSOVER After"
        width="480"
        height="360"
        loading="lazy"
        draggable={false}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <img
          src="/images/crossover-before-01-sm.webp"
          alt="CROSSOVER Before"
          width="480"
          height="360"
          loading="lazy"
          draggable={false}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${position}%`,
          width: "3px",
          backgroundColor: "#fff",
          transform: "translateX(-50%)",
          boxShadow: "0 0 8px rgba(0,0,0,0.4)",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: `${position}%`,
          transform: "translate(-50%, -50%)",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ pointerEvents: "none" }}>
          <path d="M6 4L2 10L6 16" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 4L18 10L14 16" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span
        style={{
          position: "absolute",
          top: "12px",
          left: "12px",
          backgroundColor: "rgba(55,65,81,0.85)",
          color: "#fff",
          fontSize: "12px",
          fontWeight: 700,
          padding: "4px 12px",
          borderRadius: "4px",
          letterSpacing: "0.06em",
          zIndex: 1,
        }}
      >
        Before
      </span>
      <span
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          backgroundColor: "rgba(22,163,74,0.85)",
          color: "#fff",
          fontSize: "12px",
          fontWeight: 700,
          padding: "4px 12px",
          borderRadius: "4px",
          letterSpacing: "0.06em",
          zIndex: 1,
        }}
      >
        After
      </span>
    </div>
  );
}

export default function TenantBeforeAfterCTA() {
  const handleGuideCTAClick = () => {
    window.dataLayer?.push({
      event: "line_cta_click",
      cta_location: "tenant_lp_guide",
    });
    window.open(LINE_URL, "_blank");
  };

  return (
    <section style={{ backgroundColor: "#fff", padding: "56px 24px 0" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <p
            style={{
              margin: "0 0 10px",
              fontSize: "0.7rem",
              fontWeight: 300,
              letterSpacing: "4px",
              color: "#C9A84C",
              textTransform: "uppercase",
            }}
          >
            BEFORE &amp; AFTER
          </p>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(1.2rem, 4vw, 1.6rem)",
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.5,
            }}
          >
            この物件を見つけてから<br />5週間で、こうなりました。
          </h2>
        </div>

        {/* Slider */}
        <TenantBASlider />
        <p style={{ textAlign: "center", fontSize: "11px", color: "#999", margin: "10px 0 0" }}>
          ◀ スライドして比較 ▶
        </p>

        {/* Case info */}
        <div
          style={{
            marginTop: "16px",
            padding: "16px 20px",
            backgroundColor: "#f9f8f6",
            borderRadius: "10px",
            border: "1px solid #eee",
          }}
        >
          <p style={{ margin: "0 0 4px", fontSize: "clamp(16px, 3vw, 20px)", fontWeight: 700, color: "#222" }}>
            CROSSOVER
            <span style={{ fontSize: "clamp(11px, 2vw, 13px)", fontWeight: 400, color: "#888", marginLeft: "8px" }}>
              Cafe &amp; Bar
            </span>
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontSize: "13px", color: "#666" }}>
              工期: <strong style={{ color: "#333" }}>5週間</strong>
            </span>
            <span style={{ fontSize: "13px", color: "#666" }}>
              費用: <strong style={{ color: "#C9A84C", fontSize: "16px" }}>90万円</strong>
            </span>
            <span style={{ fontSize: "13px", color: "#666" }}>18坪・スケルトン</span>
          </div>
        </div>

        {/* Story bridge */}
        <p
          style={{
            textAlign: "center",
            fontSize: "clamp(13px, 2.3vw, 15px)",
            color: "#666",
            lineHeight: 1.8,
            margin: "24px 0",
          }}
        >
          物件探しから内装まで一気通貫でサポート。<br />
          あなたの物件探しから、一緒に。
        </p>

        {/* Guide CTA card */}
        <div
          style={{
            background: "#1a1f14",
            borderRadius: "16px",
            padding: "32px 24px",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <p
            style={{
              margin: "0 0 6px",
              fontSize: "11px",
              fontWeight: 700,
              color: "#C9A84C",
              textAlign: "center",
              letterSpacing: "0.1em",
            }}
          >
            LINE登録で無料プレゼント
          </p>
          <p
            style={{
              margin: "0 0 20px",
              fontSize: "clamp(16px, 3vw, 20px)",
              fontWeight: 700,
              color: "#fff",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            プロが教える<br />物件探し＆不動産屋攻略ガイド
          </p>
          <p
            style={{
              margin: "0 0 20px",
              fontSize: "clamp(12px, 2vw, 13px)",
              color: "rgba(255,255,255,0.45)",
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            知ってるだけで数十万〜数百万変わる。<br />物件契約の前に読んでください。
          </p>

          {/* Guide points */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "8px",
              marginBottom: "24px",
            }}
          >
            {guidePoints.map((point, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  fontSize: "clamp(12px, 2vw, 13px)",
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: "#C9A84C", flexShrink: 0, fontSize: "11px", marginTop: "2px" }}>✓</span>
                <span>{point}</span>
              </div>
            ))}
          </div>

          <p
            style={{
              margin: "0 0 20px",
              fontSize: "11px",
              color: "rgba(255,255,255,0.3)",
              textAlign: "center",
              lineHeight: 1.7,
              fontStyle: "italic",
            }}
          >
            ※ ここに書いたのはほんの一部。融資・消防・保健所の裏技は個別にお伝えします。
          </p>

          <button
            onClick={handleGuideCTAClick}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              width: "100%",
              background: "#06C755",
              color: "#fff",
              borderRadius: "999px",
              padding: "16px 24px",
              fontSize: "clamp(14px, 2.5vw, 16px)",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.03em",
              boxShadow: "0 4px 24px rgba(6,199,85,0.35)",
              boxSizing: "border-box",
            }}
          >
            <svg viewBox="0 0 24 24" style={{ width: "22px", height: "22px", fill: "#fff", flexShrink: 0 }}>
              <path d={lineSvgPath} />
            </svg>
            LINEで攻略ガイドを受け取る
          </button>
          <p style={{ margin: "12px 0 0", fontSize: "11px", color: "rgba(255,255,255,0.25)", textAlign: "center" }}>
            無料・営業なし・LINE追加するだけ
          </p>
        </div>
      </div>
    </section>
  );
}
