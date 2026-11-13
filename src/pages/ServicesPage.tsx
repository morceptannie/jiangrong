import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { ScrollReveal } from '../components/MotionPrimitives';
import { ResilientImage } from '../components/ResilientImage';
import { SERVICES } from '../data/companyData';
import type { PageRoute } from '../types/routes';

interface ServicesPageProps {
  onNavigate: (route: PageRoute, inquirySubject?: string) => void;
}

const WORKFLOW_STEPS = [
  { step: '01', title: '現場勘查丈量', desc: '24 小時內回覆並安排專員赴北北桃竹工地現勘尺寸。' },
  { step: '02', title: '結構試算與報價', desc: '依載重與地形配置系統架規格，提出透明明細報價單。' },
  { step: '03', title: '料車調度進場', desc: '蘆竹自有倉儲專車配送，合格組配主管帶隊進場搭設。' },
  { step: '04', title: '定期巡檢與拆架', desc: '配合防颱加固巡檢與工程進度分階段安全退場拆除。' },
];

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const featuredService = SERVICES.find((s) => s.featured);
  const secondaryServices = SERVICES.filter((s) => !s.featured);

  return (
    <div className="bg-[#181715] text-stone-100">
      <PageBanner
        kicker="工程服務項目"
        title="系統鷹架、塔架吊裝與器材租售"
        subtitle="依工地高度、跨距與載重條件提供連工帶料搭設、結構計算簽證及專車配送服務。"
        currentLabel="工程服務"
        onNavigate={onNavigate}
      />

      {/* 淺水泥灰層：服務卡片對比深色主卡 */}
      <section className="py-14 sm:py-20 bg-[#E6E2DA] text-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredService && (
              <ScrollReveal className="lg:col-span-2" delay={0.05}>
                <article className="h-full grid grid-cols-1 md:grid-cols-2 border border-stone-800 rounded-lg overflow-hidden bg-[#23211E] text-stone-100 shadow-lg">
                  <div className="p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <p className="text-base font-mono font-bold text-amber-400 tabular-nums mb-2">
                        {featuredService.index}
                      </p>
                      <h2 className="text-xl sm:text-2xl font-bold text-stone-50 tracking-tight">
                        {featuredService.title}
                      </h2>
                      <p className="text-sm font-medium text-teal-300 mt-1">
                        {featuredService.subtitle}
                      </p>
                      <p className="text-sm sm:text-base text-stone-300 leading-relaxed mt-4">
                        {featuredService.summary}
                      </p>

                      <ul className="mt-5 space-y-2.5 border-t border-stone-700/80 pt-4">
                        {featuredService.highlights.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-stone-200 flex items-start gap-2.5"
                          >
                            <span aria-hidden="true" className="text-amber-400 font-bold">
                              —
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-4">
                      <button
                        type="button"
                        onClick={() => onNavigate('contact', featuredService.title)}
                        className="inline-flex items-center gap-1.5 min-h-[44px] px-5 py-2.5 text-sm font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
                      >
                        諮詢此項工程服務
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div className="relative min-h-[260px] md:min-h-full bg-stone-950">
                    {featuredService.image && (
                      <ResilientImage
                        src={featuredService.image}
                        alt={featuredService.imageAlt || featuredService.title}
                        className="w-full h-full object-cover"
                        fallbackTitle={featuredService.title}
                      />
                    )}
                  </div>
                </article>
              </ScrollReveal>
            )}

            {secondaryServices.map((service, idx) => (
              <ScrollReveal
                key={service.id}
                delay={0.08 + idx * 0.06}
                className={idx === 2 ? 'lg:col-span-2' : ''}
              >
                <article className="h-full p-6 sm:p-8 border border-stone-400/60 hover:border-amber-600 rounded-lg bg-[#DED9CF] flex flex-col justify-between transition-all duration-200 hover:-translate-y-1">
                  <div>
                    <p className="text-base font-mono font-bold text-amber-700 tabular-nums mb-2">
                      {service.index}
                    </p>
                    <h2 className="text-xl font-bold text-stone-950 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-sm font-bold text-teal-800 mt-1">
                      {service.subtitle}
                    </p>
                    <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
                      {service.summary}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-stone-400/50 pt-4">
                      {service.highlights.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-stone-800 flex items-start gap-2.5"
                        >
                          <span aria-hidden="true" className="text-amber-700 font-bold">
                            —
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-2">
                    <button
                      type="button"
                      onClick={() => onNavigate('contact', service.title)}
                      className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 text-sm font-bold text-white bg-teal-800 hover:bg-teal-900 rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      取得報價方案
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 深石墨層：標準作業流程 */}
      <section className="py-14 sm:py-20 bg-[#181715] border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-bold text-amber-400 mb-1.5">標準作業流程</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-50 tracking-tight">
                從勘估到進場的四大環節
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('specs')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-300 hover:text-amber-300 transition-colors cursor-pointer self-start sm:self-auto"
            >
              查看 CNS 4750 料材規格表
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WORKFLOW_STEPS.map((w, idx) => (
              <ScrollReveal key={w.step} delay={idx * 0.06}>
                <div className="h-full p-6 rounded-lg bg-[#23211E] border border-stone-800">
                  <p className="text-lg font-mono font-bold text-amber-400 tabular-nums mb-2">
                    {w.step}
                  </p>
                  <h3 className="text-lg font-bold text-stone-50 mb-2">{w.title}</h3>
                  <p className="text-sm text-stone-300 leading-relaxed">{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
