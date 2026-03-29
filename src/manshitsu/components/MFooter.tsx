import { M, C } from "../tokens";

export default function MFooter() {
  return (
    <footer style={{ backgroundColor: M.dark, padding: "40px 20px 32px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
        <img
          src="/images/logo-manshitsu-h-gold.png"
          alt="記憶荘 満室デザインLABO"
          style={{ height: "40px", objectFit: "contain", marginBottom: "12px" }}
        />
        <p style={{ margin: "0 0 10px", fontSize: "13px", color: C.gold, fontWeight: 500, letterSpacing: "0.06em" }}>
          記憶荘｜満室デザインLABO
        </p>
        <p style={{ margin: "0 0 6px", fontSize: "12px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
          〒◯◯◯-◯◯◯◯ 宮城県仙台市◯◯
        </p>
        <p style={{ margin: "0 0 20px", fontSize: "12px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
          📞 080-6900-3314　✉ studio@kiokuso.jp
        </p>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "16px",
          }}
        >
          <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.04em" }}>
            © 記憶荘 満室デザインLABO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
