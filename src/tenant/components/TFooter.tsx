import { T, C } from "../tokens";

export default function TFooter() {
  return (
    <footer style={{ backgroundColor: T.dark, padding: "40px 20px 32px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
        <img
          src="/images/logo-group-gold.webp"
          alt="記憶荘"
          style={{ height: "44px", objectFit: "contain", marginBottom: "12px", opacity: 0.85, display: "block", marginLeft: "auto", marginRight: "auto" }}
        />
        <p style={{ margin: "0 0 10px", fontSize: "13px", color: C.gold, fontWeight: 500, letterSpacing: "0.06em" }}>
          記憶荘｜テナント物件探し＋内装工事
        </p>
        <p style={{ margin: "0 0 6px", fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
          対応エリア：仙台市・宮城県全域
        </p>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
          📞 080-6900-3314　✉ studio@kiokuso.jp
        </p>
        <p style={{ margin: "0 0 20px", fontSize: "11px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
          ※不動産仲介は行いません。物件情報の提供は無料です。
        </p>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "16px",
          }}
        >
          <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.04em" }}>
            © 記憶荘. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
