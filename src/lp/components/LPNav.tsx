import { useState, useEffect } from "react";
import { LINE_URL } from "../../shared/design-tokens";

export default function LPNav() {
  const [s, setS] = useState(false);

  useEffect(() => {
    const f = () => setS(window.scrollY > 50);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: s ? "rgba(74,103,65,0.95)" : "rgba(0,0,0,0)",
        backdropFilter: s ? "blur(8px)" : "none",
        boxShadow: s ? "0 1px 4px rgba(0,0,0,0.15)" : "none",
        borderBottom: "none",
        transition: "background-color 0.3s, backdrop-filter 0.3s, box-shadow 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="/assets/logos/logo-studio-h-gold.webp" alt="記憶荘 STUDIO" style={{ height: "32px", width: "auto" }} />
        </div>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-gtm="line_cta_click"
          style={{
            display: "inline-block",
            backgroundColor: "#06C755",
            color: "#fff",
            borderRadius: "6px",
            padding: "8px 16px",
            fontSize: "12px",
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          LINEで相談
        </a>
      </div>
    </nav>
  );
}
