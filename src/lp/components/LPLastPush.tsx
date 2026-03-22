import { LINE_URL } from "../../shared/design-tokens";

export default function LPLastPush() {
  return (
    <section style={{ backgroundColor: "#EAF0E8", padding: "48px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>

        {/* 見出し */}
        <p style={{
          margin: "0 0 10px",
          fontSize: "clamp(17px, 3vw, 22px)",
          fontWeight: 700,
          color: "#333",
          textAlign: "center",
        }}>
          まだ先の話だから、と思っていませんか。
        </p>
        <p style={{
          margin: "0 0 28px",
          fontSize: "clamp(13px, 2vw, 14px)",
          color: "#777",
          textAlign: "center",
          lineHeight: 1.8,
        }}>
          設計・見積もりに1〜2ヶ月、施工に2〜3ヶ月。<br />
          オープン日から逆算すると、半年前には動き始める方がほとんどです。
        </p>

        {/* 特典エリア */}
        <div style={{
          backgroundColor: "#4A6741",
          borderRadius: "12px",
          padding: "28px 20px",
        }}>
          <p style={{
            margin: "0 0 20px",
            fontSize: "clamp(14px, 2.5vw, 16px)",
            fontWeight: 700,
            color: "#fff",
            textAlign: "center",
            lineHeight: 1.8,
          }}>
            LINE登録で、2つの
            <span style={{ color: "#C9A84C" }}>無料特典</span>
            をお渡ししています。
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {/* 特典1 */}
            <div style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "10px",
              overflow: "hidden",
              display: "flex",
              alignItems: "stretch",
            }}>
              <div style={{
                flex: "0 0 100px",
                minHeight: "100px",
                overflow: "hidden",
              }}>
                <img
                  src="/images/why-estimate-detail.webp"
                  alt="見積もりの虎の巻"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div style={{ padding: "14px 16px", flex: 1 }}>
                <p style={{ margin: "0 0 4px", fontSize: "11px", color: "#C9A84C", fontWeight: 700 }}>特典1</p>
                <p style={{ margin: "0 0 6px", fontSize: "clamp(13px, 2vw, 15px)", fontWeight: 700, color: "#fff" }}>
                  内装見積もりの虎の巻（PDF）
                </p>
                <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
                  相場感と見積もりの読み方をまとめたPDF
                </p>
              </div>
            </div>

            {/* 特典2 */}
            <div style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "10px",
              overflow: "hidden",
              display: "flex",
              alignItems: "stretch",
            }}>
              <div style={{
                flex: "0 0 100px",
                minHeight: "100px",
                overflow: "hidden",
              }}>
                <img
                  src="/images/solution-ai-pers.webp"
                  alt="AIパース"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div style={{ padding: "14px 16px", flex: 1 }}>
                <p style={{ margin: "0 0 4px", fontSize: "11px", color: "#C9A84C", fontWeight: 700 }}>特典2</p>
                <p style={{ margin: "0 0 6px", fontSize: "clamp(13px, 2vw, 15px)", fontWeight: 700, color: "#fff" }}>
                  AIパースを無料で作成
                </p>
                <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
                  LINEで間取りを送ると完成イメージをお届け
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
