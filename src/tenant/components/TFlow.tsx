import { T, C } from "../tokens";
import TSectionHeader from "./TSectionHeader";

const steps = [
  {
    n: "1",
    title: "LINEで友だち追加",
    body: "まずはLINEで友だち追加するだけ。30秒で完了します。",
    tag: "無料",
    tagColor: "#2D8A5E",
  },
  {
    n: "2",
    title: "希望条件のヒアリング",
    body: "希望エリア・業態・予算をLINEでお聞きします。まだぼんやりでも大丈夫です。",
    tag: null,
    tagColor: "",
  },
  {
    n: "3",
    title: "物件情報をLINEでお届け",
    body: "条件に合う物件情報を、非公開物件を含めてLINEでお届けします。",
    tag: "非公開含む",
    tagColor: T.main,
  },
  {
    n: "4",
    title: "内装費込みの総額を概算",
    body: "気になる物件があれば、内装費を含めた開業総額の概算をすぐにお出しします。",
    tag: "無料",
    tagColor: "#2D8A5E",
  },
  {
    n: "5",
    title: "物件契約→内装工事→開業",
    body: "物件が決まったら、契約のサポートから内装工事、開業準備まで一本の窓口で完結します。",
    tag: "ワンストップ",
    tagColor: T.mid,
  },
];

export default function TFlow() {
  return (
    <section style={{ backgroundColor: C.white, padding: "48px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <TSectionHeader label="FLOW" heading={"LINEで友だち追加するだけ。"} />

        <div style={{ position: "relative", paddingLeft: "24px" }}>
          <div
            style={{
              position: "absolute",
              left: "14px",
              top: "16px",
              bottom: "16px",
              width: "1px",
              backgroundColor: C.gold,
              opacity: 0.3,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {steps.map((step) => (
              <div key={step.n} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <span
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      border: `2px solid ${C.gold}`,
                      color: C.gold,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "13px",
                      fontWeight: 700,
                      backgroundColor: C.white,
                      fontFamily: "'Noto Serif JP', serif",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {step.n}
                  </span>
                </div>
                <div style={{ paddingTop: "2px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "5px", flexWrap: "wrap" }}>
                    <p style={{ margin: 0, fontSize: "clamp(14px, 3.5vw, 15px)", fontWeight: 600, color: C.textDark }}>
                      {step.title}
                    </p>
                    {step.tag && (
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          color: C.white,
                          backgroundColor: step.tagColor,
                          borderRadius: "2px",
                          padding: "2px 7px",
                          letterSpacing: "0.03em",
                        }}
                      >
                        {step.tag}
                      </span>
                    )}
                  </div>
                  <p style={{ margin: 0, fontSize: "clamp(13px, 3.2vw, 14px)", color: C.textMid, lineHeight: 1.8 }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
