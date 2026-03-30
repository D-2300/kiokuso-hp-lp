import { C } from "../tokens";

export default function MLastPush() {
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
          管理会社に見積もりを通すたびに、<br />
          「本当にこれでいいのかな」と<br />
          思ったことがあるなら。<br />
          <br />
          もう一つの選択肢を、知ってください。
        </p>

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
          見積もりだけでも構いません。比較材料としてお使いください。<br />
          合わなければ、そのまま管理会社にお任せいただいて大丈夫です。
        </p>
      </div>
    </section>
  );
}
