import { T, C } from "../tokens";
import TSectionHeader from "./TSectionHeader";

const strengths = [
  {
    num: "1",
    title: "元不動産業の代表が直接対応",
    body: "物件の良し悪しを、内装のプロ目線で判断できる。「この物件は内装費がかさむ」「ここは居抜きを活かせる」など、不動産屋にも内装屋にもできないアドバイスを提供します。",
  },
  {
    num: "2",
    title: "不動産会社との独自ネットワーク",
    body: "仙台エリアの不動産会社と連携し、表に出る前の物件情報をLINEでお届け。他の人より早く、良い物件と出会えるチャンスを提供します。",
  },
  {
    num: "3",
    title: "物件情報の提供は完全無料",
    body: "記憶荘の収益は内装工事から。だから物件選びに忖度は一切ありません。「内装費が安くなる物件」を本気でおすすめします。",
  },
];

export default function TStrength() {
  return (
    <section style={{ backgroundColor: C.white, padding: "48px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <TSectionHeader label="STRENGTH" heading={"なぜ、記憶荘にしかできないのか。"} />

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {strengths.map((s) => (
            <div
              key={s.num}
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: T.main,
                  color: C.white,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  fontWeight: 700,
                  flexShrink: 0,
                  fontFamily: "'Noto Serif JP', serif",
                }}
              >
                {s.num}
              </span>
              <div style={{ paddingTop: "4px" }}>
                <p
                  style={{
                    margin: "0 0 6px",
                    fontSize: "clamp(14px, 3.5vw, 16px)",
                    fontWeight: 600,
                    color: C.textDark,
                  }}
                >
                  {s.title}
                </p>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
