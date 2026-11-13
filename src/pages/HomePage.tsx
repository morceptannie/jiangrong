import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import {
  ABOUT_IMAGE,
  COMPANY_INFO,
  HERO_IMAGE,
  KEY_METRICS,
  PROJECTS,
  SERVICES,
} from '../data/companyData';
import { AnimatedNumber, ScrollReveal } from '../components/MotionPrimitives';
import { ResilientImage } from '../components/ResilientImage';
import type { PageRoute } from '../types/routes';

interface HomePageProps {
  onNavigate: (route: PageRoute, inquirySubject?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const featuredProject = PROJECTS[0];

  return (
    <div className="bg-[#181715] text-stone-100">
      {/* 1. 深色層：Hero 全幅主視覺 */}
      <section className="relative min-h-[540px] lg:min-h-[620px] flex items-center overflow-hidden border-b border-stone-800">
        <ResilientImage
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02]"
          fallbackTitle="將榮企業有限公司｜專業系統鷹架與吊裝架構"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#141311]/95 via-[#181715]/82 to-[#181715]/45"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="text-xl sm:text-2xl font-bold tracking-wide text-amber-400 mb-2">
              {COMPANY_INFO.name}
            </p>
            <p className="text-xs sm:text-sm font-medium text-stone-300 mb-5">
              {COMPANY_INFO.region}
              <span aria-hidden="true" className="mx-2 text-stone-500">·</span>
              統一編號 <span className="font-mono tabular-nums">{COMPANY_INFO.taxId}</span>
            </p>

            <h1
              className="text-stone-50 font-bold tracking-tight leading-[1.16] mb-8"
              style={{
                fontSize: 'clamp(2.25rem, 4.2vw, 3.85rem)',
                textWrap: 'balance',
              }}
            >
              <span className="text-amber-400">安全精準</span>的系統鷹架工程，
              <br />
              撐起每一座<span className="text-teal-300">關鍵營造建設</span>。
            </h1>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3 text-sm sm:text-base font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all duration-150 hover:-translate-y-0.5 shadow-lg shadow-amber-500/20 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                申請工程報價
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('portfolio')}
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 text-sm sm:text-base font-semibold text-stone-100 hover:text-teal-300 bg-stone-900/80 hover:bg-stone-900 border border-stone-600 hover:border-teal-400/70 rounded-md transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                瀏覽工程實績
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. 中深石墨層：4 欄動態數字指標 */}
      <section className="bg-[#23211E] border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {KEY_METRICS.map((metric, idx) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="lg:border-r border-stone-700/80 last:border-r-0 lg:pr-6"
              >
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-400 tracking-tight tabular-nums">
                  <AnimatedNumber value={metric.value} />
                </p>
                <p className="text-sm sm:text-base font-semibold text-stone-100 mt-1.5">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 淺水泥灰層（有深有淺對比，非純白）：四大業務簡略標題入口 */}
      <section className="py-14 sm:py-20 bg-[#E6E2DA] text-stone-900 border-b border-stone-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs sm:text-sm font-bold tracking-wider text-teal-800 mb-1.5">
                核心業務總覽
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
                四大專業工程項目
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-800 hover:text-amber-700 transition-colors cursor-pointer self-start sm:self-auto"
            >
              檢視完整服務說明
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((service, idx) => (
              <ScrollReveal key={service.id} delay={idx * 0.06}>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="w-full h-full text-left p-6 rounded-lg bg-[#DED9CF] hover:bg-[#D5CFC3] border border-stone-400/60 hover:border-amber-600 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600"
                >
                  <div>
                    <p className="text-sm font-mono font-bold text-amber-700 tabular-nums mb-2">
                      {service.index}
                    </p>
                    <h3 className="text-lg font-bold text-stone-950 group-hover:text-teal-900 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-stone-700">
                      {service.subtitle}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-stone-400/50 flex items-center justify-between text-xs font-bold text-teal-800 group-hover:text-amber-800">
                    <span>進入工程服務頁</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 深石墨層：工程實績與公司簡介雙視覺入口 */}
      <section className="py-14 sm:py-20 bg-[#181715] border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <ScrollReveal direction="left">
              <button
                type="button"
                onClick={() => onNavigate('portfolio')}
                className="group relative w-full h-[320px] sm:h-[360px] rounded-lg overflow-hidden border border-stone-800 hover:border-amber-400/80 text-left block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <ResilientImage
                  src={featuredProject.image}
                  alt={featuredProject.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fallbackTitle="工程實績案例"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#141311]/95 via-[#181715]/60 to-[#181715]/20"
                />
                <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col justify-end">
                  <p className="text-xs font-bold text-amber-400 mb-1.5">
                    北北桃竹標案精選
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-stone-50 tracking-tight">
                    代表性工程實績
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-300 group-hover:text-amber-300">
                    瀏覽全部完工案例
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </button>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.08}>
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="group relative w-full h-[320px] sm:h-[360px] rounded-lg overflow-hidden border border-stone-800 hover:border-teal-400/80 text-left block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                <ResilientImage
                  src={ABOUT_IMAGE.src}
                  alt={ABOUT_IMAGE.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fallbackTitle="關於將榮企業"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#141311]/95 via-[#181715]/60 to-[#181715]/20"
                />
                <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col justify-end">
                  <p className="text-xs font-bold text-teal-300 mb-1.5">
                    創立於 2013 年 · 桃園蘆竹
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-stone-50 tracking-tight">
                    認識{COMPANY_INFO.name}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 group-hover:text-teal-300">
                    查看工安標準與團隊實力
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. 淺水泥灰層：規格與快速報價入口 */}
      <section className="py-14 sm:py-16 bg-[#E6E2DA] text-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="p-7 sm:p-10 rounded-lg bg-[#23211E] text-stone-100 border border-stone-800 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 shadow-md">
            <div>
              <p className="text-xs font-bold text-teal-300 mb-1.5">
                CNS 4750 規格與快速估價
              </p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-50 tracking-tight">
                查詢料材尺寸載重，或預約專人到場丈量報價。
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onNavigate('specs')}
                className="min-h-[44px] px-5 py-2.5 text-sm font-semibold text-stone-100 hover:text-teal-300 border border-stone-600 hover:border-teal-400 rounded-md transition-colors whitespace-nowrap cursor-pointer"
              >
                料材規格與問答
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="min-h-[44px] px-6 py-2.5 text-sm font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap cursor-pointer"
              >
                立即申請報價
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
