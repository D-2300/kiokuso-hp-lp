import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../../shared/Logo";

type LogoEntity = "group" | "studio" | "koumuten" | "reform" | "fudousan";

interface NavLink {
  to: string;
  label: string;
}

interface EntityNavProps {
  themeColor: string;
  themeLight: string;
  themeBg: string;
  title: string;
  logoEntity?: LogoEntity;
  links?: NavLink[];
}

function hexToRgba(hex: string, alpha: number): string {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export default function EntityNav({
  themeColor,
  themeLight,
  themeBg,
  logoEntity = "group",
  links = [],
}: EntityNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const solidBg = hexToRgba(themeColor, 0.95);
  const navBg = scrolled || menuOpen ? solidBg : "transparent";

  const mobileLinks: NavLink[] = [{ to: "/", label: "← Group Top" }];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          backgroundColor: navBg,
          height: "64px",
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          transition: "background-color 0.3s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo entity={logoEntity} color="gold" layout="horizontal" height={36} centered={false} />
        </div>

        {/* PC nav */}
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            gap: "32px",
            alignItems: "center",
          }}
          className="entity-nav-pc"
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                color: themeLight,
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "0.1em",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = themeBg)}
              onMouseLeave={(e) => (e.currentTarget.style.color = themeLight)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/"
            style={{
              fontSize: "11px",
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none",
              letterSpacing: "0.05em",
              transition: "opacity 0.2s",
              paddingLeft: links.length > 0 ? "8px" : "0",
              borderLeft: links.length > 0 ? "1px solid rgba(255,255,255,0.2)" : "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
          >
            ← Group Top
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="entity-nav-hamburger"
          style={{
            marginLeft: "auto",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
          aria-label="メニューを開く"
        >
          <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#fff", borderRadius: "1px" }} />
          <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#fff", borderRadius: "1px" }} />
          <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#fff", borderRadius: "1px" }} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 300,
          backgroundColor: solidBg,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
        className="entity-nav-overlay"
      >
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            position: "absolute",
            top: "20px",
            right: "24px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            fontSize: "28px",
            lineHeight: 1,
            padding: "8px",
          }}
          aria-label="メニューを閉じる"
        >
          ✕
        </button>
        {mobileLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              color: "#fff",
              fontSize: "18px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textDecoration: "none",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <style>{`
        .entity-nav-pc { display: flex; }
        .entity-nav-hamburger { display: none; }
        .entity-nav-overlay { display: flex; }
        @media (max-width: 768px) {
          .entity-nav-pc { display: none !important; }
          .entity-nav-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .entity-nav-overlay { display: none !important; }
        }
      `}</style>
    </>
  );
}
