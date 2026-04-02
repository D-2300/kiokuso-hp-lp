import { C } from "./tokens";
import THero from "./components/THero";
import TBridge from "./components/TBridge";
import TProblem from "./components/TProblem";
import TAgitate from "./components/TAgitate";
import TSolve from "./components/TSolve";
import TStrength from "./components/TStrength";
import TFlow from "./components/TFlow";
import TBeforeAfter from "./components/TBeforeAfter";
import TPrice from "./components/TPrice";
import TFAQ from "./components/TFAQ";
import TLastPush from "./components/TLastPush";
import TCTA from "./components/TCTA";
import TContactForm from "./components/TContactForm";
import TProfile from "./components/TProfile";
import TFooter from "./components/TFooter";
import TFloatingCTA from "./components/TFloatingCTA";

export default function TenantPage() {
  return (
    <div
      style={{
        fontFamily: "'Noto Sans JP', sans-serif",
        backgroundColor: C.warmWhite,
        maxWidth: "720px",
        margin: "0 auto",
        paddingBottom: "64px",
      }}
    >
      <THero />
      <TBridge text="──こんなお悩み、ありませんか？" />
      <TProblem />
      <TBridge text="その不安、ひとりで抱えなくて大丈夫です。" />
      <TAgitate />
      <TBridge text="元不動産のプロが、出店をゼロから支えます。" />
      <TSolve />
      <TBridge text="なぜ、記憶荘にしかできないのか。" />
      <TStrength />
      <TBridge text="実際の施工事例をご覧ください。" />
      <TBeforeAfter />
      <TBridge text="費用の目安です。" />
      <TPrice />
      <TBridge text="ご利用の流れ" />
      <TFlow />
      <TBridge text="よくあるご質問" />
      <TFAQ />
      <TLastPush />
      <TCTA />
      <TContactForm />
      <TProfile />
      <TFooter />
      <TFloatingCTA />
    </div>
  );
}
