import GroupNav from "../components/GroupNav";
import GroupFooter from "../components/GroupFooter";
import { colors } from "../../shared/design-tokens";

const headingStyle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: 600,
  color: "#333",
  marginBottom: "8px",
  marginTop: 0,
};

const bodyStyle: React.CSSProperties = {
  fontWeight: 400,
  color: "#555",
  lineHeight: 2.0,
  margin: 0,
};

export default function Privacy() {
  return (
    <>
      <div style={{ backgroundColor: colors.beige, minHeight: "100vh" }}>
        <GroupNav />
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "120px 24px 80px",
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: "16px",
          }}
        >
          <h1
            style={{
              fontSize: "24px",
              fontWeight: 500,
              color: "#333",
              textAlign: "center",
              marginBottom: "56px",
            }}
          >
            プライバシーポリシー
          </h1>

          <div style={{ textAlign: "left" }}>
            <p style={{ ...bodyStyle, marginBottom: "40px" }}>
              記憶荘（以下「当方」）は、お客様からお預かりする個人情報の重要性を認識し、その保護の徹底を図るため、以下のとおりプライバシーポリシーを定めます。
            </p>

            <section style={{ marginBottom: "36px" }}>
              <h2 style={headingStyle}>第1条（個人情報の定義）</h2>
              <p style={bodyStyle}>
                本ポリシーにおける「個人情報」とは、氏名、住所、電話番号、メールアドレス、LINE ID、物件情報、その他の記述等により特定の個人を識別できる情報を指します。
              </p>
            </section>

            <section style={{ marginBottom: "36px" }}>
              <h2 style={headingStyle}>第2条（個人情報の取得方法）</h2>
              <p style={bodyStyle}>当方は、以下の方法で個人情報を取得することがあります。</p>
              <p style={bodyStyle}>・LINE公式アカウントでのご相談・お問い合わせ</p>
              <p style={bodyStyle}>・現地調査・ヒアリングの際のご提供</p>
              <p style={bodyStyle}>・お見積もり・ご契約に伴うお申し出</p>
              <p style={bodyStyle}>・当ウェブサイトのアクセスログ・Cookie情報の自動取得</p>
            </section>

            <section style={{ marginBottom: "36px" }}>
              <h2 style={headingStyle}>第3条（個人情報の利用目的）</h2>
              <p style={bodyStyle}>取得した個人情報は、以下の目的の範囲内で利用します。</p>
              <p style={bodyStyle}>・ご相談・お見積もりへの対応および施工に関するご連絡</p>
              <p style={bodyStyle}>・設計・施工に必要な情報の確認</p>
              <p style={bodyStyle}>・融資用見積書等の書類作成</p>
              <p style={bodyStyle}>・施工事例としての写真掲載（お客様の事前同意を得た場合のみ）</p>
              <p style={bodyStyle}>・サービスの品質向上および新サービスの開発</p>
              <p style={bodyStyle}>・当方からのお知らせ・ご案内の送付</p>
            </section>

            <section style={{ marginBottom: "36px" }}>
              <h2 style={headingStyle}>第4条（個人情報の第三者提供）</h2>
              <p style={bodyStyle}>当方は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供しません。</p>
              <p style={bodyStyle}>・法令に基づく場合</p>
              <p style={bodyStyle}>・人の生命、身体または財産の保護のために必要がある場合であって、お客様の同意を得ることが困難な場合</p>
              <p style={bodyStyle}>・施工に必要な協力業者への共有（必要最小限の範囲に限り、守秘義務を課した上で行います）</p>
            </section>

            <section style={{ marginBottom: "36px" }}>
              <h2 style={headingStyle}>第5条（個人情報の管理）</h2>
              <p style={bodyStyle}>
                当方は、個人情報の漏洩、滅失、毀損の防止のために、適切な安全管理措置を講じます。個人情報を取り扱う端末へのアクセス制限、通信の暗号化等の措置を実施しています。
              </p>
            </section>

            <section style={{ marginBottom: "36px" }}>
              <h2 style={headingStyle}>第6条（個人情報の開示・訂正・削除）</h2>
              <p style={bodyStyle}>
                お客様は、当方が保有するご自身の個人情報について、開示・訂正・削除を求めることができます。ご本人確認の上、合理的な期間内に対応いたします。
              </p>
            </section>

            <section style={{ marginBottom: "36px" }}>
              <h2 style={headingStyle}>第7条（アクセス解析ツールの利用）</h2>
              <p style={bodyStyle}>当ウェブサイトでは、サービス向上を目的として、以下のアクセス解析ツールを利用しています。</p>
              <p style={bodyStyle}>・Google Analytics（Google LLC）</p>
              <p style={bodyStyle}>・Microsoft Clarity（Microsoft Corporation）</p>
              <p style={bodyStyle}>
                これらのツールはCookieを使用して匿名のアクセスデータを収集します。収集されるデータには、閲覧ページ、滞在時間、流入経路等が含まれますが、個人を特定する情報は含まれません。データの収集・処理については各サービスのプライバシーポリシーをご確認ください。
              </p>
            </section>

            <section style={{ marginBottom: "36px" }}>
              <h2 style={headingStyle}>第8条（Cookieの利用）</h2>
              <p style={bodyStyle}>
                当ウェブサイトでは、利便性向上およびアクセス解析のためにCookieを使用しています。ブラウザの設定によりCookieの受け入れを拒否することが可能ですが、一部の機能が制限される場合があります。
              </p>
            </section>

            <section style={{ marginBottom: "36px" }}>
              <h2 style={headingStyle}>第9条（ポリシーの変更）</h2>
              <p style={bodyStyle}>
                本ポリシーの内容は、法令の変更やサービス内容の変更に伴い、事前の予告なく改定することがあります。改定後のポリシーは、当ウェブサイトに掲載した時点で効力を生じます。
              </p>
            </section>

            <section style={{ marginBottom: "36px" }}>
              <h2 style={headingStyle}>第10条（お問い合わせ）</h2>
              <p style={bodyStyle}>
                個人情報の取り扱いに関するお問い合わせは、LINE公式アカウント（@749cuola）よりご連絡ください。
              </p>
            </section>

            <div style={{ textAlign: "right", marginTop: "48px" }}>
              <p style={{ ...bodyStyle, display: "block" }}>制定日：2026年3月23日</p>
              <p style={{ ...bodyStyle, display: "block" }}>記憶荘</p>
            </div>
          </div>
        </div>
      </div>
      <GroupFooter />
    </>
  );
}
