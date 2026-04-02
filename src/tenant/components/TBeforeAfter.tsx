import { T, C } from "../tokens";
import TSectionHeader from "./TSectionHeader";

const cases = [
  {
    type: "カフェ・居抜き活用",
    area: "仙台市青葉区",
    beforeSrc: "/images/crossover-before-01-sm.webp",
    afterSrc: "/images/crossover-after-01-sm.webp",
  },
  {
    type: "バー・スケルトンから施工",
    area: "仙台市青葉区",
    beforeSrc: "/images/crossover-before-02-sm.webp",
    afterSrc: "/images/crossover-after-02-sm.webp",
  },
];

export default function TBeforeAfter() {
  return (
    <section style={{ backgroundColor: T.dark, padding: "48px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <TSectionHeader
          label="WORKS"
          heading={"物件選びから内装まで。\n実際の施工事例です。"}
          headingColor={C.white}
          labelColor={C.goldLight}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "16px" }}>
          {cases.map((c, i) => (
            <div
              key={i}
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "4px",
                overflow: "hidden",
                backgroundColor: "rgba(255,255,255,0.04)",
              }}
            >
              <div style={{ display: "flex", minHeight: "140px" }}>
                <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                  <img
                    src={c.beforeSrc}
                    alt={`${c.type} 施工前`}
                    width="480"
                    height="361"
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      filter: "brightness(0.85)",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "8px",
                      left: "8px",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      padding: "3px 10px",
                      borderRadius: "2px",
                      backgroundColor: "rgba(0,0,0,0.65)",
                      color: "rgba(255,255,255,0.9)",
                    }}
                  >
                    BEFORE
                  </span>
                </div>
                <div style={{ width: "2px", backgroundColor: "rgba(255,255,255,0.1)" }} />
                <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                  <img
                    src={c.afterSrc}
                    alt={`${c.type} 施工後`}
                    width="480"
                    height="361"
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "8px",
                      left: "8px",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      padding: "3px 10px",
                      borderRadius: "2px",
                      backgroundColor: C.gold,
                      color: T.dark,
                    }}
                  >
                    AFTER
                  </span>
                </div>
              </div>
              <div style={{ padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <p style={{ margin: "0 0 2px", fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>
                  {c.type}
                </p>
                <p style={{ margin: 0, fontSize: "13px", color: C.goldLight }}>
                  {c.area}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            margin: 0,
            textAlign: "center",
            fontSize: "12px",
            color: "rgba(255,255,255,0.4)",
            lineHeight: 1.7,
            letterSpacing: "0.02em",
          }}
        >
          ※施工事例は店舗内装の実績です。テナント物件の内装もお任せください。
        </p>
      </div>
    </section>
  );
}
