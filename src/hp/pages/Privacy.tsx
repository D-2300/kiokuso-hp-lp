import GroupNav from "../components/GroupNav";
import GroupFooter from "../components/GroupFooter";
import { colors } from "../../shared/design-tokens";

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
          }}
        >
          <h1
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: "24px",
              fontWeight: 500,
              color: "#333",
              textAlign: "center",
              marginBottom: "56px",
            }}
          >
            プライバシーポリシー
          </h1>

          <div
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              color: "#555",
              lineHeight: 2.0,
              textAlign: "left",
            }}
          >
            <p style={{ marginBottom: "32px" }}>
              記憶荘（以下「当方」）は、お客様の個人情報の保護に努めます。
            </p>

            <section style={{ marginBottom: "32px" }}>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#333",
                  marginBottom: "8px",
                }}
              >
                1. 個人情報の取得
              </h2>
              <p>
                当方は、LINE公式アカウントでのご相談、お問い合わせの際に、お名前・ご連絡先・物件情報等の個人情報をお伺いすることがあります。
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#333",
                  marginBottom: "8px",
                }}
              >
                2. 個人情報の利用目的
              </h2>
              <p>取得した個人情報は、以下の目的で利用します。</p>
              <p>・ご相談・お見積もりへの対応</p>
              <p>・施工に関するご連絡</p>
              <p>・サービスの改善</p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#333",
                  marginBottom: "8px",
                }}
              >
                3. 個人情報の第三者提供
              </h2>
              <p>
                お客様の同意なく、個人情報を第三者に提供することはありません。ただし、法令に基づく場合を除きます。
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#333",
                  marginBottom: "8px",
                }}
              >
                4. 個人情報の管理
              </h2>
              <p>
                個人情報の漏洩・紛失を防ぐため、適切な管理を行います。
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#333",
                  marginBottom: "8px",
                }}
              >
                5. お問い合わせ
              </h2>
              <p>
                個人情報に関するお問い合わせは、LINE公式アカウントよりご連絡ください。
              </p>
            </section>
          </div>
        </div>
      </div>
      <GroupFooter />
    </>
  );
}
