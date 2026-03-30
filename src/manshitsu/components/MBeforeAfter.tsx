import { M, C } from "../tokens";
import MSectionHeader from "./MSectionHeader";

const cases = [
  {
    type: "1K・築18年アパート",
    cost: "施工費 ¥105,000",
    beforeLabel: "退去直後",
    afterLabel: "施工後",
  },
  {
    type: "ワンルーム・築22年マンション",
    cost: "施工費 ¥85,000",
    beforeLabel: "退去直後",
    afterLabel: "施工後",
  },
];

function ImagePlaceholder({ label, isDark }: { label: string; isDark: boolean }) {
  return (
    <div
      style={{
        flex: 1,
        minHeight: "140px",
        position: "relative",
        backgroundColor: isDark ? "rgba(0,0,0,0.35)" : "rgba(201,168,76,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "8px",
          left: "8px",
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          padding: "3px 8px",
          borderRadius: "2px",
          backgroundColor: isDark ? "rgba(0,0,0,0.6)" : C.gold,
          color: isDark ? "rgba(255,255,255,0.8)" : M.dark,
        }}
      >
        {isDark ? "BEFORE" : "AFTER"}
      </span>
      <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.04em" }}>
        {label}
      </p>
    </div>
  );
}

export default function MBeforeAfter() {
  return (
    <section style={{ backgroundColor: M.dark, padding: "48px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <MSectionHeader
          label="BEFORE / AFTER"
          heading={"管理会社と同じ予算で、\nここまで変わります。"}
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
                <ImagePlaceholder label={c.beforeLabel} isDark={true} />
                <div style={{ width: "1px", backgroundColor: "rgba(255,255,255,0.1)" }} />
                <ImagePlaceholder label={c.afterLabel} isDark={false} />
              </div>
              <div style={{ padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <p style={{ margin: "0 0 2px", fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>
                  {c.type}
                </p>
                <p style={{ margin: 0, fontSize: "12px", color: C.gold }}>
                  {c.cost}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            margin: 0,
            textAlign: "center",
            fontSize: "11px",
            color: "rgba(255,255,255,0.35)",
            lineHeight: 1.7,
            letterSpacing: "0.02em",
          }}
        >
          ※施工事例写真は準備中です。初回のお客様には特別価格でご対応します。
        </p>
      </div>
    </section>
  );
}
