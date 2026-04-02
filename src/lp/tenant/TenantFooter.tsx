import { Link } from "react-router-dom";

export default function TenantFooter() {
  return (
    <footer style={{ background: "#141810", padding: "24px", textAlign: "center" }}>
      <p style={{ fontSize: "10px", color: "rgba(255,255,255,.2)", marginBottom: "4px" }}>
        &copy; 2026 KAI &amp; KEN ／{" "}
        <Link
          to="/studio"
          style={{ color: "rgba(255,255,255,.2)", textDecoration: "none" }}
          onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
          onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
        >
          記憶荘 店舗内装スタジオ
        </Link>
      </p>
      <p style={{ fontSize: "10px", color: "rgba(255,255,255,.2)" }}>
        仙台の店舗内装 設計・施工・物件相談
      </p>
    </footer>
  );
}
