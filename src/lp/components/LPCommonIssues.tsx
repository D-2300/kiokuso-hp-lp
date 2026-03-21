const issues = [
  {
    bold: "追加料金",
    text: "が発生 ── 契約後に追加の見積もりが出てくる",
    detail: "「想定外の工事が必要でした」と後から追加される。最初の見積もりは何だったのか。",
  },
  {
    bold: "不明瞭",
    text: "な見積もり ── 内容がざっくりすぎて何にいくらかわからない",
    detail: "「内装工事一式 150万円」としか書いていない。内訳を聞いても曖昧な回答。",
  },
  {
    bold: "コミュニケーションが面倒",
    text: " ── デザインと工事が別の会社",
    detail: "デザイナーに伝えたことが現場に伝わっていない。同じ説明を何度もすることに。",
  },
  {
    bold: "連絡が負担",
    text: " ── 工程ごとに担当が変わる",
    detail: "営業、設計、現場監督、職人。誰に何を言えばいいのかわからなくなる。",
  },
];

export default function LPCommonIssues() {
  return (
    <>
      <section style={{ backgroundColor: "#4A6741", padding: "40px 20px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "clamp(17px, 3vw, 22px)",
              fontWeight: 700,
              color: "#fff",
              textAlign: "center",
              marginBottom: "24px",
            }}
          >
            それ、結構「あるある」です。
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {issues.map((item) => (
              <div
                key={item.bold}
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                  padding: "16px 20px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "clamp(14px, 2.5vw, 16px)",
                    color: "rgba(255,255,255,0.92)",
                    lineHeight: 1.7,
                  }}
                >
                  <span style={{ color: "#C9A84C", fontWeight: 700 }}>{item.bold}</span>
                  {item.text}
                </p>
                <p
                  style={{
                    margin: "6px 0 0",
                    fontSize: "clamp(12px, 2vw, 13px)",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.7,
                  }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#EAF0E8", padding: "28px 20px" }}>
        <p
          style={{
            margin: 0,
            fontSize: "clamp(15px, 2.5vw, 18px)",
            fontWeight: 700,
            color: "#333",
            textAlign: "center",
            lineHeight: 1.8,
          }}
        >
          そのお悩み、すべて{" "}
          <span style={{ color: "#C9A84C" }}>記憶荘</span>{" "}
          で解決できます。
        </p>
      </section>
    </>
  );
}
