const checkItems = [
  "見積もり内訳を100%公開",
  "物件未定・融資前でも相談OK",
  "設計から施工まで一人が一貫対応",
  "断りはLINE1本で完了",
  "居抜き活用・施主支給・DIY対応",
];

export default function LPTrustBanner() {
  return (
    <section style={{ backgroundColor: "#EAF0E8", padding: "40px 20px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <p
          style={{
            margin: "0 0 20px",
            fontSize: "clamp(17px, 3vw, 22px)",
            fontWeight: 700,
            color: "#333",
            textAlign: "center",
          }}
        >
          仙台・宮城の店舗内装なら{" "}
          <span style={{ color: "#C9A84C" }}>記憶荘</span>
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "380px", margin: "0 auto" }}>
          {checkItems.map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "24px",
                  height: "24px",
                  backgroundColor: "#4A6741",
                  borderRadius: "5px",
                  color: "#fff",
                  fontSize: "13px",
                  flexShrink: 0,
                  fontWeight: 700,
                }}
              >
                ✓
              </span>
              <span style={{ fontSize: "clamp(14px, 2.5vw, 16px)", color: "#333" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
