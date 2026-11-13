import { ArrowRight } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { AnimatedNumber, ScrollReveal } from '../components/MotionPrimitives';
import { ResilientImage } from '../components/ResilientImage';
import { ABOUT_IMAGE, COMPANY_INFO, KEY_METRICS } from '../data/companyData';
import type { PageRoute } from '../types/routes';

interface AboutPageProps {
  onNavigate: (route: PageRoute, inquirySubject?: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="bg-[#181715] text-stone-100">
      <PageBanner
        kicker="關於我們"
        title={COMPANY_INFO.name}
        subtitle={`創立於 ${COMPANY_INFO.foundedYear} 年（統一編號 ${COMPANY_INFO.taxId}），深耕桃園市蘆竹區與北台灣營造工程市場。`}
        currentLabel="關於將榮"
        onNavigate={onNavigate}
      />

      {/* 淺水泥灰層：公司介紹與品質標準 */}
      <section className="py-14 sm:py-20 bg-[#E6E2DA] text-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <ScrollReveal direction="left" className="h-full">
              <div className="relative rounded-lg overflow-hidden border border-stone-400/70 bg-stone-900 min-h-[320px] lg:h-full shadow-lg">
                <ResilientImage
                  src={ABOUT_IMAGE.src}
                  alt={ABOUT_IMAGE.alt}
                  className="w-full h-full lg:h-full object-cover"
                  fallbackTitle="將榮企業工安巡檢與倉儲物流團隊"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.08} className="flex flex-col justify-between py-2">
              <div>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight"
                  style={{ textWrap: 'balance' }}
                >
                  以<span className="text-amber-700">嚴謹工安標準</span>作為營造夥伴的堅實後盾。
                </h2>
                <p className="mt-4 text-base text-stone-700 leading-relaxed">
                  <strong className="font-bold text-stone-950">{COMPANY_INFO.name}</strong>
                  專注於鷹架工程施工、施工塔架吊裝、鋼管鷹架買賣租賃與金屬建材架構。我們深知高空作業結構的每一道插銷與扣件皆攸關生命安全，因此堅持自有料材保養制度與專業班組自主管理。
                </p>

                <div className="mt-8 divide-y divide-stone-400/60 border-y border-stone-400/60">
                  <div className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                    <span className="text-sm font-bold text-teal-800 sm:w-36 shrink-0">
                      料材規格標準化
                    </span>
                    <span className="text-sm text-stone-700">
                      全數主架管材符合 <strong className="font-semibold text-stone-950">CNS 4750</strong> 規格，出庫前進行焊點檢查與防鏽鍍鋅維護。
                    </span>
                  </div>
                  <div className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                    <span className="text-sm font-bold text-teal-800 sm:w-36 shrink-0">
                      合格施工與簽證
                    </span>
                    <span className="text-sm text-stone-700">
                      配備合格施工架組配作業主管，並可協助提供<strong className="font-semibold text-stone-950">結構技師計算書及安全簽證</strong>。
                    </span>
                  </div>
                  <div className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                    <span className="text-sm font-bold text-teal-800 sm:w-36 shrink-0">
                      自有車隊快速調度
                    </span>
                    <span className="text-sm text-stone-700">
                      蘆竹調度中心鄰近國道一號與台 61 線，能迅速支援桃園航空城與竹科急件。
                    </span>
                  </div>
                </div>
              </div>

              <blockquote className="mt-8 p-5 sm:p-6 bg-[#23211E] text-stone-100 rounded-lg border border-stone-800 shadow-md">
                <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-medium">
                  「廠房擴建期間同時有鋼構吊裝與外牆帷幕進場，將榮團隊在{' '}
                  <span className="font-bold text-amber-400">48 小時內完成現場複測</span>
                  並分區搭設系統鷹架與樓梯塔，不僅順利通過勞動檢查，更讓後續機電管線工期提前兩週完成。」
                </p>
                <footer className="mt-3 text-xs text-stone-400">
                  陳志豪 <span aria-hidden="true">·</span> 專案工務經理{' '}
                  <span aria-hidden="true">·</span> 宏展機電營造股份有限公司
                </footer>
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 深石墨層：關鍵指標與前往實績/報價 */}
      <section className="py-14 sm:py-16 bg-[#181715] border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {KEY_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="p-5 rounded-lg bg-[#23211E] border border-stone-800"
              >
                <p className="text-2xl sm:text-3xl font-bold text-amber-400 tabular-nums">
                  <AnimatedNumber value={metric.value} />
                </p>
                <p className="text-sm font-semibold text-stone-100 mt-1.5">{metric.label}</p>
                <p className="text-xs text-stone-400 mt-1">{metric.detail}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-stone-800">
            <p className="text-sm sm:text-base text-stone-300">
              想進一步了解實績案例或安排工程專員場勘？
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate('portfolio')}
                className="min-h-[44px] px-5 py-2.5 text-sm font-semibold text-stone-100 border border-stone-700 hover:border-teal-400 hover:text-teal-300 rounded-md transition-colors cursor-pointer"
              >
                查看工程實績
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-1.5 min-h-[44px] px-5 py-2.5 text-sm font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
              >
                立即申請報價
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
