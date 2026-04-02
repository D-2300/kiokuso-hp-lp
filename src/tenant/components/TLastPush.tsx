import { T, C } from "../tokens";

export default function TLastPush() {
  return (
    <section style={{ backgroundColor: C.white, padding: "56px 20px" }}>
      <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ width: "40px", height: "1px", backgroundColor: C.gold, opacity: 0.5, margin: "0 auto 28px" }} />

        <p
          style={{
            margin: "0 0 20px",
            fontFamily: "'Noto Serif JP', serif",
            fontSize: "clamp(17px, 4.2vw, 20px)",
            fontWeight: 400,
            color: C.textDark,
            lineHeight: 2.0,
            letterSpacing: "0.04em",
          }}
        >
          「いい物件があれば開業したい」<br />
          そう思っているなら。<br />
          <br />
          まずは情報を受け取ることから、<br />
          始めてみてください。
        </p>

        <div style={{ margin: "24px auto 28px", maxWidth: "420px" }}>
          <img
            src="/images/showcase-cafe-2-sm.webp"
            alt="施工事例"
            width="420"
            height="280"
            loading="lazy"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
        </div>

        <div style={{ width: "40px", height: "1px", backgroundColor: C.gold, opacity: 0.5, margin: "0 auto 20px" }} />

        <p
          style={{
            margin: 0,
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: "13px",
            color: C.textMid,
            lineHeight: 1.9,
            letterSpacing: "0.02em",
          }}
        >
          物件情報は無料。LINEで届くので手間もかかりません。<br />
          「まだ本気じゃないけど…」という段階でも大歓迎です。
        </p>
      </div>
    </section>
  );
}
