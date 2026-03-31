import { useEffect } from 'react';
import StudioNav from './components/StudioNav';
import StudioFooter from './components/StudioFooter';

const IMG = '/images';

export default function WorksCrossover() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: "#2E4229" }}>
      <div style={{ paddingTop: 0, backgroundColor: "#F8F5F0" }}>
        <StudioNav />

        {/* HERO */}
        <section className="relative h-[85vh] min-h-[500px] overflow-hidden flex items-end">
          <img
            src={`${IMG}/crossover-after-01.webp`}
            alt="\u30D0\u30B9\u30B1\u30C3\u30C8\u30DC\u30FC\u30EB Cafe&Bar CROSSOVER \u5B8C\u6210\u5199\u771F"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/70" />
          <div className="relative z-10 px-6 md:px-12 pb-16 max-w-[900px]">
            <div className="font-['Cormorant_Garamond'] text-[13px] tracking-[4px] text-white/60 mb-3">
              WORKS \u2014 CASE 001
            </div>
            <h1 className="font-['Noto_Serif_JP'] font-normal text-[clamp(24px,4vw,40px)] text-white leading-relaxed mb-2">
              \u30D0\u30B9\u30B1\u30C3\u30C8\u30DC\u30FC\u30EB Cafe&Bar<br />CROSSOVER
            </h1>
            <div className="font-['Cormorant_Garamond'] font-light text-[15px] text-white/50 tracking-[2px]">
              Sendai, Wakabayashi \u2014 2026.02
            </div>
          </div>
        </section>

        {/* SPEC TABLE */}
        <div className="max-w-[860px] mx-auto px-6">
          <section className="pt-16 pb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#4A6741]/10 border border-[#4A6741]/10">
              {[
                { label: 'Cost', value: '\u00A5900,000' },
                { label: 'Period', value: '\u7D0410\u65E5' },
                { label: 'Type', value: '\u65B0\u7BC9\u4E8B\u52D9\u6240' },
                { label: 'Area', value: '18\u576A' },
              ].map((spec) => (
                <div key={spec.label} className="bg-[#F8F5F0] py-6 text-center">
                  <div className="font-['Cormorant_Garamond'] text-[11px] tracking-[3px] text-[#888] uppercase mb-2">
                    {spec.label}
                  </div>
                  <div className="font-['Noto_Serif_JP'] font-normal text-lg text-[#333]">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <a
            href="/studio/works"
            className="inline-flex items-center gap-2 font-['Cormorant_Garamond'] text-[13px] tracking-[2px] text-[#888] hover:text-[#4A6741] transition-colors no-underline mb-8"
          >
            \u2190 Back to Works
          </a>

          <SectionHeading en="Story" ja="\u3053\u306E\u65BD\u5DE5\u306E\u80CC\u666F" />
          <div className="space-y-6">
            <P>\u3082\u3068\u3082\u3068\u30D0\u30B9\u30B1\u4EF2\u9593\u3060\u3063\u305F\u30AA\u30FC\u30CA\u30FC\u304C\u3001\u4ED9\u53F0\u5E02\u5185\u3067\u300C\u30D0\u30B9\u30B1\u3092\u89B3\u306A\u304C\u3089\u98F2\u3081\u308B\u5834\u6240\u300D\u3092\u4F5C\u308A\u305F\u3044\u3068\u76F8\u8AC7\u306B\u6765\u305F\u3002\u3059\u3067\u306B\u4E00\u5EA6\u30AB\u30D5\u30A7\u30D0\u30FC\u3092\u55B6\u696D\u3057\u305F\u7D4C\u9A13\u304C\u3042\u308A\u3001\u79FB\u8EE2\u5148\u3092\u63A2\u3057\u3066\u3044\u305F\u3002</P>
            <P>\u898B\u3064\u304B\u3063\u305F\u7269\u4EF6\u306F\u3001\u82E5\u6797\u533A\u306E\u65B0\u7BC9\u30D3\u30EB2\u968E\u3002\u7BC93\u5E74\u3001\u8AB0\u3082\u5165\u5C45\u3057\u306A\u3044\u307E\u307E\u6B8B\u3063\u3066\u3044\u305F\u4E8B\u52D9\u6240\u3002\u767D\u3044\u58C1\u3001\u86CD\u5149\u706F\u3001\u30D9\u30FC\u30B8\u30E5\u306E\u5E8A\u3002\u3053\u3053\u304C\u30D0\u30B9\u30B1\u30AB\u30D5\u30A7\u306B\u306A\u308B\u30A4\u30E1\u30FC\u30B8\u306F\u3001\u6B63\u76F4\u6301\u3061\u306B\u304F\u304B\u3063\u305F\u3002</P>
            <P>\u4E88\u7B97\u306F\u9650\u3089\u308C\u3066\u3044\u308B\u3002\u3060\u304B\u3089\u307E\u305A\u300C\u58CA\u3055\u306A\u304F\u3066\u3044\u3044\u3082\u306E\u306F\u58CA\u3055\u306A\u3044\u300D\u300C\u65B0\u54C1\u3092\u8CB7\u308F\u306A\u304F\u3066\u3044\u3044\u3082\u306E\u306F\u8CB7\u308F\u306A\u3044\u300D\u3068\u3044\u3046\u65B9\u91DD\u3092\u7ACB\u3066\u305F\u3002\u3061\u3087\u3046\u3069\u9589\u5E97\u3059\u308B\u30D0\u30FC\u306E\u30AB\u30A6\u30F3\u30BF\u30FC\u3084\u30B7\u30E7\u30FC\u30B1\u30FC\u30B9\u3001\u51B7\u8535\u5EAB\u3001\u30C6\u30FC\u30D6\u30EB\u3001\u7167\u660E\u5668\u5177\u304C\u3042\u3063\u305F\u3002\u305D\u308C\u3092\u5F15\u304D\u53D6\u3063\u3066\u518D\u5229\u7528\u3059\u308B\u524D\u63D0\u3067\u8A2D\u8A08\u3092\u7D44\u3093\u3060\u3002</P>
            <P>\u58C1\u3068\u5929\u4E95\u3092\u9ED2\u304F\u5857\u3063\u305F\u3002\u5E8A\u306B\u30D0\u30B9\u30B1\u30C3\u30C8\u30B3\u30FC\u30C8\u306E\u30E9\u30A4\u30F3\u3092\u5857\u88C5\u3057\u305F\u3002\u30AB\u30A6\u30F3\u30BF\u30FC\u6B63\u9762\u306B\u30C8\u30BF\u30F3\u677F\u3092\u5F35\u308A\u3001\u4E0B\u304B\u3089\u30D6\u30EB\u30FCLED\u3092\u4ED5\u8FBC\u3093\u3060\u3002\u58C1\u306E\u4E00\u9762\u306B\u53E4\u6750\u3092\u5F35\u3063\u3066\u30D0\u30B9\u30B1\u30C3\u30C8\u30B4\u30FC\u30EB\u3092\u53D6\u308A\u4ED8\u3051\u305F\u3002\u68DA\u306F\u6728\u6750\u3067\u9020\u4F5C\u3057\u3066\u3001\u30B8\u30E3\u30FC\u30B8\u3084\u30B9\u30CB\u30FC\u30AB\u30FC\u3092\u98FE\u308C\u308B\u3088\u3046\u306B\u3057\u305F\u3002</P>
            <P>\u9375\u3092\u3082\u3089\u3063\u3066\u304B\u308910\u65E5\u5F8C\u3001NBA\u306E\u30E6\u30CB\u30D5\u30A9\u30FC\u30E0\u3068\u30DC\u30D6\u30EB\u30D8\u30C3\u30C9\u304C\u4E26\u3076\u7A7A\u9593\u304C\u51FA\u6765\u4E0A\u304C\u3063\u305F\u3002\u3042\u306E\u767D\u3044\u4E8B\u52D9\u6240\u304C\u3001\u3053\u3046\u306A\u308B\u3068\u306F\u8AB0\u3082\u601D\u308F\u306A\u304B\u3063\u305F\u3060\u308D\u3046\u3002</P>
          </div>

          <SectionHeading en="Before" ja="\u65BD\u5DE5\u524D\u306E\u72B6\u614B" />
          <p className="text-sm text-[#888] mb-4">
            \u65B0\u7BC9\u4E8B\u52D9\u6240\u3002\u767D\u3044\u58C1\u3001\u86CD\u5149\u706F\u3001\u30D9\u30FC\u30B8\u30E5\u306E\u5E8A\u30023\u5E74\u9593\u7A7A\u5BA4\u306E\u307E\u307E\u6B8B\u3063\u3066\u3044\u305F\u3002
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-14">
            {['before-01', 'before-02'].map((name) => (
              <img
                key={name}
                src={`${IMG}/crossover-${name}-sm.webp`}
                alt="CROSSOVER\u65BD\u5DE5\u524D"
                className="w-full h-60 object-cover grayscale-[40%] hover:grayscale-0 transition-all hover:scale-[1.02]"
                loading="lazy"
              />
            ))}
          </div>

          <SectionHeading en="Process" ja="\u65BD\u5DE5\u306E\u6D41\u308C" />
          <div className="mb-10">
            {[
              { day: 'Day 1\u20132', text: '\u990A\u751F\u30FB\u5929\u4E95\u3068\u58C1\u306E\u9ED2\u5857\u88C5\u3002\u86CD\u5149\u706F\u3092\u64A4\u53BB\u3057\u3001\u30E9\u30A4\u30C6\u30A3\u30F3\u30B0\u30EC\u30FC\u30EB\u3092\u8A2D\u7F6E\u3002' },
              { day: 'Day 3\u20134', text: '\u5E8A\u306E\u30B5\u30F3\u30C7\u30A3\u30F3\u30B0\u3068\u30B3\u30FC\u30C8\u98A8\u5857\u88C5\u3002\u30E9\u30A4\u30F3\u30C6\u30FC\u30D7\u3067\u30D0\u30B9\u30B1\u30C3\u30C8\u30B3\u30FC\u30C8\u3092\u518D\u73FE\u3002' },
              { day: 'Day 5\u20136', text: '\u30AB\u30A6\u30F3\u30BF\u30FC\u642C\u5165\u30FB\u8A2D\u7F6E\u3002\u30C8\u30BF\u30F3\u677F\u3092\u6B63\u9762\u306B\u5F35\u308A\u3001LED\u7167\u660E\u3092\u4ED5\u8FBC\u3080\u3002\u80CC\u9762\u306B\u30DC\u30C8\u30EB\u68DA\u3092\u9020\u4F5C\u3002' },
              { day: 'Day 7\u20138', text: '\u58C1\u9762\u306B\u53E4\u6750\u30D1\u30CD\u30EB\u3092\u65BD\u5DE5\u3002\u30D0\u30B9\u30B1\u30C3\u30C8\u30B4\u30FC\u30EB\u53D6\u308A\u4ED8\u3051\u3002\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u68DA\u306E\u9020\u4F5C\u3002' },
              { day: 'Day 9\u201310', text: '\u30B7\u30FC\u30EA\u30F3\u30B0\u30D5\u30A1\u30F3\u8A2D\u7F6E\u3002\u7167\u660E\u30FB\u96FB\u6C17\u914D\u7DDA\u306E\u6700\u7D42\u8ABF\u6574\u3002\u4EC0\u5668\u642C\u5165\u30FB\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u914D\u7F6E\u3002' },
            ].map((item) => (
              <div key={item.day} className="flex flex-col md:flex-row gap-1 md:gap-6 py-5 border-b border-[#4A6741]/8">
                <div className="shrink-0 w-20 font-['Cormorant_Garamond'] text-sm tracking-[1px] text-[#4A6741] pt-0.5">
                  {item.day}
                </div>
                <div className="text-sm text-[#555] leading-relaxed">{item.text}</div>
              </div>
            ))}
          </div>

          <div className="font-['Cormorant_Garamond'] text-[13px] tracking-[4px] text-[#888] mb-4">
            DURING CONSTRUCTION
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-14">
            {['process-01', 'process-02', 'process-03', 'process-04'].map((name) => (
              <img
                key={name}
                src={`${IMG}/crossover-${name}-sm.webp`}
                alt="\u65BD\u5DE5\u4E2D"
                className="w-full h-[280px] object-cover hover:scale-[1.02] transition-transform"
                loading="lazy"
              />
            ))}
          </div>

          <SectionHeading en="After" ja="\u5B8C\u6210" />
          <div className="space-y-2 mb-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {['after-01', 'after-02', 'after-03', 'after-04'].map((name) => (
                <img
                  key={name}
                  src={`${IMG}/crossover-${name}-sm.webp`}
                  alt="\u5B8C\u6210\u5199\u771F"
                  className="w-full h-[280px] object-cover hover:scale-[1.02] transition-transform"
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          <SectionHeading en="Point" ja="\u3053\u306E\u65BD\u5DE5\u306E\u30DD\u30A4\u30F3\u30C8" />
          <div className="space-y-6">
            <P>
              <strong className="font-medium">\u9589\u5E97\u5E97\u8217\u306E\u4EC0\u5668\u3092\u30D5\u30EB\u6D3B\u7528\u3002</strong><br />
              \u30AB\u30A6\u30F3\u30BF\u30FC\u3001\u30B7\u30E7\u30FC\u30B1\u30FC\u30B9\u3001\u51B7\u8535\u5EAB\u3001\u30C6\u30FC\u30D6\u30EB\u3001\u7167\u660E\u5668\u5177\u3092\u9589\u5E97\u3059\u308B\u30D0\u30FC\u304B\u3089\u5F15\u304D\u53D6\u308A\u518D\u5229\u7528\u3057\u305F\u3002\u4EC0\u5668\u3092\u65B0\u54C1\u3067\u63C3\u3048\u305F\u5834\u5408\u3068\u6BD4\u8F03\u3057\u3066\u300150\u4E07\u5186\u4EE5\u4E0A\u306E\u30B3\u30B9\u30C8\u524A\u6E1B\u306B\u306A\u3063\u3066\u3044\u308B\u3002
            </P>
            <P>
              <strong className="font-medium">\u5857\u88C5\u3060\u3051\u3067\u7A7A\u9593\u3092\u4E00\u5909\u3055\u305B\u308B\u3002</strong><br />
              \u767D\u3044\u58C1\u3068\u5929\u4E95\u3092\u9ED2\u306B\u5857\u308A\u66FF\u3048\u305F\u3060\u3051\u3067\u3001\u4E8B\u52D9\u6240\u611F\u306F\u5B8C\u5168\u306B\u6D88\u3048\u308B\u3002\u65B0\u7BC9\u7269\u4EF6\u306F\u4E0B\u5730\u304C\u7DBE\u9E97\u306A\u306E\u3067\u5857\u88C5\u306E\u4ED5\u4E0A\u304C\u308A\u304C\u826F\u304F\u3001\u5B9F\u306F\u30B9\u30B1\u30EB\u30C8\u30F3\u3088\u308A\u3082\u52B9\u7387\u304C\u826F\u3044\u3002
            </P>
            <P>
              <strong className="font-medium">\u30AA\u30FC\u30CA\u30FC\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u300C\u5185\u88C5\u300D\u306B\u306A\u308B\u3002</strong><br />
              NBA\u30B8\u30E3\u30FC\u30B8\u3001\u30B9\u30CB\u30FC\u30AB\u30FC\u3001\u30DC\u30D6\u30EB\u30D8\u30C3\u30C9\u30D5\u30A3\u30AE\u30E5\u30A2\u3002\u30AA\u30FC\u30CA\u30FC\u304C\u9577\u5E74\u96C6\u3081\u3066\u304D\u305F\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u98FE\u308B\u68DA\u3092\u9020\u4F5C\u3059\u308B\u3053\u3068\u3067\u3001\u4ED6\u306B\u306A\u3044\u7A7A\u9593\u304C\u3067\u304D\u305F\u3002\u65E2\u88FD\u54C1\u3092\u8CB7\u3044\u8DB3\u3059\u3088\u308A\u3001\u6301\u3063\u3066\u3044\u308B\u3082\u306E\u3092\u6D3B\u304B\u3059\u65B9\u304C\u5F37\u3044\u3002
            </P>
          </div>

          <div className="flex flex-wrap gap-2 mt-12 mb-12">
            {[
              '#\u30D0\u30B9\u30B1\u30AB\u30D5\u30A7\u30D0\u30FC', '#\u65B0\u7BC9\u4E8B\u52D9\u6240\u304B\u3089\u306E\u6539\u88C5', '#\u9589\u5E97\u5E97\u8217\u4EC0\u5668\u306E\u518D\u5229\u7528',
              '#DIY\u4F75\u7528', '#\u30E2\u30EB\u30BF\u30EB\u58C1', '#\u30D0\u30B9\u30B1\u30C3\u30C8\u30B3\u30FC\u30C8\u98A8\u5E8A',
              '#LED\u9593\u63A5\u7167\u660E', '#\u53E4\u6750\u30D1\u30CD\u30EB', '#90\u4E07\u5186', '#10\u65E5\u65BD\u5DE5', '#\u4ED9\u53F0\u5E02\u82E5\u6797\u533A',
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs tracking-[1px] text-[#4A6741] border border-[#4A6741]/20 px-3.5 py-1.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <section className="text-center py-[72px] px-6 border-t border-[#4A6741]/10 mt-12">
          <p className="text-[15px] text-[#555] leading-8 mb-8">
            \u307E\u3060\u4F55\u3082\u6C7A\u307E\u3063\u3066\u3044\u306A\u304F\u3066\u3082\u3001\u5927\u4E08\u592B\u3067\u3059\u3002<br />
            \u7269\u4EF6\u672A\u5B9A\u3067\u3082OK\u3002\u65AD\u308A\u306FLINE1\u672C\u3067\u5B8C\u4E86\u3067\u3059\u3002
          </p>
          <a
            href="https://lin.ee/HVV0QJO"
            className="inline-block bg-[#06C755] text-white font-['Noto_Serif_JP'] font-normal text-sm tracking-[2px] px-12 py-4 hover:opacity-85 transition-opacity no-underline"
          >
            LINE\u3067\u76F8\u8AC7\u3059\u308B
          </a>
        </section>
      </div>
      <StudioFooter />
    </div>
  );
}

function SectionHeading({ en, ja }: { en: string; ja: string }) {
  return (
    <div className="mt-[72px] mb-8">
      <div className="font-['Cormorant_Garamond'] font-light text-[32px] tracking-[4px] text-[#4A6741]">
        {en}
      </div>
      <div className="text-xs tracking-[2px] text-[#888] mt-1">{ja}</div>
      <div className="w-10 h-px bg-[#C9A84C] mt-4" />
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[15px] text-[#555] leading-[2.1] font-light">
      {children}
    </p>
  );
}
