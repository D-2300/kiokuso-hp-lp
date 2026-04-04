import { useEffect } from "react";
import TenantHero from "./TenantHero";
import TenantHeroBand from "./TenantHeroBand";
import TenantBeforeAfterCTA from "./TenantBeforeAfterCTA";
import TenantReasons from "./TenantReasons";
import TenantMidCTA from "./TenantMidCTA";
import TenantComparison from "./TenantComparison";
import TenantProfiles from "./TenantProfiles";
import TenantFAQ from "./TenantFAQ";
import TenantBottomCTA from "./TenantBottomCTA";
import TenantMailForm from "./TenantMailForm";
import TenantFooter from "./TenantFooter";
import LPFloatingLine from "../components/LPFloatingLine";

export default function TenantLPPage() {
  useEffect(() => {
    document.title = "仙台の飲食店テナント｜ネットに出回らない掘り出し物件情報";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "仙台で飲食店を出したい方へ。内装の現場×元不動産のプロだから出せる、ネットに出回らない掘り出し物件情報を無料でお届けします。");
    }
  }, []);

  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#333", background: "#fff" }}>
      <TenantHero />
      <TenantHeroBand />
      <TenantBeforeAfterCTA />
      <TenantReasons />
      <TenantMidCTA />
      <TenantComparison />
      <TenantProfiles />
      <TenantFAQ />
      <TenantBottomCTA />
      <TenantMailForm />
      <TenantFooter />
      <LPFloatingLine />
    </div>
  );
}
