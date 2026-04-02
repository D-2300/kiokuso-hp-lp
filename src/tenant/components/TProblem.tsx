import { T, C } from "../tokens";
import TSectionHeader from "./TSectionHeader";

const problems = [
  {
    icon: "🏢",
    text: "テナントを探しているが、良い物件が見つからない",
  },
  {
    icon: "💰",
    text: "物件は気になるけど、内装費込みの総額がわからない",
  },
  {
    icon: "🤔",
    text: "不動産屋に相談すると、物件契約を急かされる気がする",
  },
  {
    icon: "📋",
    text: "開業準備が多すぎて、何から始めればいいかわからない",
  },
];

export default function TProblem() {
  return (
    <section style={{ backgroundColor: C.warmWhite, padding: "48px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <TSectionHeader label="PROBLEM" heading={"出店を考えると、\n不安ばかりが先に立つ。"} />

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {problems.map((p, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
                padding: "18px 20px",
                backgroundColor: C.white,
                borderRadius: "4px",
                border: `1px solid rgba(44,74,107,0.08)`,
              }}
            >
              <span style={{ fontSize: "24px", flexShrink: 0, lineHeight: 1 }}>{p.icon}</span>
              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(14px, 3.5vw, 15px)",
                  fontWeight: 500,
                  color: C.textDark,
                  lineHeight: 1.7,
                }}
              >
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
