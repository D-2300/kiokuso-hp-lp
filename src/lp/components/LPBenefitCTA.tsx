import { LINE_URL } from "../../shared/design-tokens";

interface LPBenefitCTAProps {
  showPushText?: boolean;
}

export default function LPBenefitCTA({ showPushText = false }: LPBenefitCTAProps) {
  return (
    <div style={{ padding: "0 20px" }}>
      {showPushText && (
        <p style={{
          fontSize: "16px",
          fontWeight: 500,
          color: "#333",
          textAlign: "center",
          marginBottom: "24px",
          marginTop: 0,
        }}>
          知っているだけで、数十万円変わります。
        </p>
      )}

      <div style={{
        backgroundColor: "#2E4229",
        borderRadius: "16px",
        padding: "32px 20px",
        maxWidth: "480px",
        margin: "0 auto",
        border: "0.5px solid rgba(201,168,76,0.2)",
        boxSizing: "border-box",
      }}>
        <p style={{
          margin: "0 0 20px",
          fontSize: "18px",
          fontWeight: 700,
          color: "#C9A84C",
          textAlign: "center",
        }}>
          LINE登録で無料プレゼント
        </p>

        <div style={{ display: "flex", gap: "12px" }}>
          <div style={{
            flex: 1,
            background: "rgba(255,255,255,0.08)",
            borderRadius: "10px",
            overflow: "hidden",
            border: "0.5px solid rgba(201,168,76,0.15)",
          }}>
            <div style={{ height: "90px", overflow: "hidden" }}>
              <img
                src="/images/why-estimate-detail.webp"
                alt="内装見積もりの虎の巻"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div style={{ padding: "12px" }}>
              <p style={{ margin: "0 0 4px", fontSize: "11px", color: "#C9A84C", fontWeight: 700 }}>特典 1</p>
              <p style={{ margin: "0 0 6px", fontSize: "14px", fontWeight: 700, color: "#fff", lineHeight: 1.4 }}>
                内装見積もりの虎の巻
              </p>
              <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>
                知っているだけで数十万円変わる、見積もりチェックのポイント集。悪徳業者に騙されないための必読書。
              </p>
            </div>
          </div>

          <div style={{
            flex: 1,
            background: "rgba(255,255,255,0.08)",
            borderRadius: "10px",
            overflow: "hidden",
            border: "0.5px solid rgba(201,168,76,0.15)",
          }}>
            <div style={{ height: "90px", overflow: "hidden" }}>
              <img
                src="/images/about-conversation.webp"
                alt="AIパース"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div style={{ padding: "12px" }}>
              <p style={{ margin: "0 0 4px", fontSize: "11px", color: "#C9A84C", fontWeight: 700 }}>特典 2</p>
              <p style={{ margin: "0 0 6px", fontSize: "14px", fontWeight: 700, color: "#fff", lineHeight: 1.4 }}>
                +AIパースで完成イメージも作成
              </p>
              <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>
                物件写真を送るだけ。最短即日。
              </p>
            </div>
          </div>
        </div>

        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            backgroundColor: "#06C755",
            color: "#fff",
            fontSize: "15px",
            fontWeight: 700,
            textAlign: "center",
            textDecoration: "none",
            padding: "14px 0",
            borderRadius: "28px",
            marginTop: "20px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          LINEで特典を受け取る
        </a>
      </div>
    </div>
  );
}
