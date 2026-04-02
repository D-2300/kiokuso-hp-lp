import { T, C } from "../tokens";
import TSectionHeader from "./TSectionHeader";

const solutions = [
  {
    num: "01",
    title: "物件情報の無料提供",
    body: "非公開物件を含む物件情報をLINEでお届け。あなたの業態・予算・エリアに合った物件を、元不動産のプロが厳選します。",
  },
  {
    num: "02",
    title: "内装費込みの総額シミュレーション",
    body: "気になる物件ごとに、内装費を含めた開業総額の概算をすぐにお出しします。「借りてから高くついた」を防ぎます。",
  },
  {
    num: "03",
    title: "出店までの伴走サポート",
    body: "物件選び→契約→内装設計→施工→開業まで、ひとつの窓口で完結。何度も業者を探す手間がなくなります。",
  },
];

export default function TSolve() {
  return (
    <section style={{ backgroundColor: T.bg, padding: "48px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <TSectionHeader label="SOLUTION" heading={"記憶荘が、3つのことをお約束します。"} />

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {solutions.map((s) => (
            <div
              key={s.num}
              style={{
                padding: "24px 20px",
                backgroundColor: C.white,
                borderRadius: "4px",
                borderLeft: `3px solid ${C.gold}`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: C.gold,
                    fontFamily: "'Noto Serif JP', serif",
                    letterSpacing: "0.06em",
                  }}
                >
                  {s.num}
                </span>
                <p
                  style={{
                    margin: 0,
                    fontSize: "clamp(15px, 3.8vw, 17px)",
                    fontWeight: 600,
                    color: C.textDark,
                  }}
                >
                  {s.title}
                </p>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(13px, 3.2vw, 14px)",
                  color: C.textMid,
                  lineHeight: 1.85,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
