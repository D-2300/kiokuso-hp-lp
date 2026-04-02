import { useState } from "react";
import { T, C } from "../tokens";
import TSectionHeader from "./TSectionHeader";

const faqs = [
  {
    q: "物件情報だけもらって、内装は頼まなくてもいいですか？",
    a: "もちろんです。物件情報の提供は完全無料です。内装工事をご依頼いただくかどうかは、お客様のご判断にお任せしています。",
  },
  {
    q: "宅建業者ですか？",
    a: "いいえ。当社は不動産仲介は行いません。物件のご紹介は、信頼できる不動産会社と連携して行っています。仲介手数料も通常の不動産会社と同じです。",
  },
  {
    q: "仙台以外のエリアも対応していますか？",
    a: "物件情報は仙台市内が中心です。内装工事については宮城県内全域で対応可能です。",
  },
  {
    q: "LINEで何が届きますか？",
    a: "ご希望の条件（エリア・業態・予算）に合った物件情報と、その物件で開業した場合の内装費の概算をお送りします。",
  },
  {
    q: "費用は本当にかかりませんか？",
    a: "物件情報の提供は完全無料です。内装工事をご依頼いただいた場合のみ、施工費用が発生します。物件情報だけのご利用でも一切費用はかかりません。",
  },
];

export default function TFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: C.warmWhite, padding: "48px 20px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <TSectionHeader label="FAQ" heading={"よくあるご質問"} />

        <div>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderTop: "1px solid #E8E3DC" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "12px",
                  padding: "18px 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: T.main, fontWeight: 700, fontSize: "14px", flexShrink: 0, marginTop: "1px" }}>Q</span>
                  <span style={{ fontSize: "clamp(13px, 3.5vw, 15px)", fontWeight: 500, color: C.textDark, lineHeight: 1.7 }}>
                    {faq.q}
                  </span>
                </div>
                <span
                  style={{
                    color: T.mid,
                    fontSize: "20px",
                    flexShrink: 0,
                    lineHeight: 1,
                    transform: open === i ? "rotate(45deg)" : "none",
                    transition: "transform 0.2s",
                    display: "inline-block",
                    marginTop: "1px",
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div style={{ padding: "0 0 18px 26px", display: "flex", gap: "12px" }}>
                  <span style={{ color: T.light, fontWeight: 700, fontSize: "14px", flexShrink: 0, marginTop: "1px" }}>A</span>
                  <p style={{ margin: 0, fontSize: "clamp(13px, 3.2vw, 14px)", color: C.textMid, lineHeight: 1.85 }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
          <div style={{ borderTop: "1px solid #E8E3DC" }} />
        </div>
      </div>
    </section>
  );
}
