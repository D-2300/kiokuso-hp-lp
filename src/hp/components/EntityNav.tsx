import { Link } from "react-router-dom";
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

export default function EntityNav({
  themeColor,
  themeLight,
  themeBg,
  title,
  logoEntity = "group",
  links = [],
}: EntityNavProps) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: themeColor,
        height: "64px",
        display: "flex",
        alignItems: "center",
        padding: "0 32px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Logo entity={logoEntity} color="dark" layout="horizontal" height={36} centered={false} />
      </div>

      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          gap: "32px",
          alignItems: "center",
        }}
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
      </div>
    </nav>
  );
}
