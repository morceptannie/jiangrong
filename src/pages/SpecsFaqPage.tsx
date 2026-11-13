import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { PageBanner } from '../components/PageBanner';
import { ScrollReveal } from '../components/MotionPrimitives';
import { FAQ_ITEMS, MATERIAL_SPECS } from '../data/companyData';
import type { PageRoute } from '../types/routes';

interface SpecsFaqPageProps {
  onNavigate: (route: PageRoute, inquirySubject?: string) => void;
}

export function SpecsFaqPage({ onNavigate }: SpecsFaqPageProps) {
  const [openFaqId, setOpenFaqId] = useState<string>(FAQ_ITEMS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? '' : id));
  };

  return (
    <div className="bg-[#181715] text-stone-100">
      <PageBanner
        kicker="料材規格與工程問答"
        title="CNS 4750 系統規格與進場說明"
        subtitle="提供符合國家標準之圓盤系統鷹架、重型塔架支撐與防滑踏板，支援工程連工帶料與長短期租售。"
        currentLabel="規格與問答"
        onNavigate={onNavigate}
      />

      {/* 淺水泥灰層：CNS 4750 規格表 */}
      <section className="py-14 sm:py-20 bg-[#E6E2DA] text-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-8">
              <p className="text-xs sm:text-sm font-bold tracking-wider text-teal-800 mb-2">
                主流器材規格表
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
                常用系統鷹架與支撐配件規格
              </h2>
            </div>

            <div className="border border-stone-800 rounded-lg bg-[#23211E] text-stone-100 overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[780px] text-left border-collapse">
                  <thead>
                    <tr className="bg-[#141311] border-b border-stone-800 text-xs font-semibold text-stone-300">
                      <th scope="col" className="py-4 px-5">
                        器材品項
                      </th>
                      <th scope="col" className="py-4 px-4">
                        標準規格
                      </th>
                      <th scope="col" className="py-4 px-4">
                        常見尺寸
                      </th>
                      <th scope="col" className="py-4 px-4 text-amber-400">
                        設計容許載重
                      </th>
                      <th scope="col" className="py-4 px-4">
                        供應方式
                      </th>
                      <th scope="col" className="py-4 px-5 text-right">
                        詢價
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-800 text-sm">
                    {MATERIAL_SPECS.map((row) => (
                      <tr
                        key={row.id}
                        className="hover:bg-stone-800/60 transition-colors"
                      >
                        <td className="py-4 px-5">
                          <p className="font-semibold text-stone-50">{row.itemName}</p>
                          <p className="text-xs text-stone-400 mt-0.5">{row.application}</p>
                        </td>
                        <td className="py-4 px-4 font-mono text-xs text-teal-300 tabular-nums whitespace-nowrap">
                          {row.standardCode}
                        </td>
                        <td className="py-4 px-4 text-stone-300 tabular-nums">
                          {row.specDetail}
                        </td>
                        <td className="py-4 px-4 font-mono text-xs font-bold text-amber-400 tabular-nums whitespace-nowrap">
                          {row.loadCapacity}
                        </td>
                        <td className="py-4 px-4 text-xs text-stone-300 whitespace-nowrap">
                          {row.supplyMode}
                        </td>
                        <td className="py-4 px-5 text-right">
                          <button
                            type="button"
                            onClick={() => onNavigate('contact', row.itemName)}
                            className="inline-flex items-center justify-center min-h-[38px] px-3.5 py-1.5 text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                          >
                            加入詢價
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 深石墨層：FAQ 手風琴 */}
      <section className="py-14 sm:py-20 bg-[#181715] border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <ScrollReveal className="lg:col-span-4">
              <p className="text-xs sm:text-sm font-bold tracking-wider text-amber-400 mb-2">
                常見採購與工程問答
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold text-stone-50 tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                進場流程與<span className="text-teal-300">工安規範</span>說明
              </h2>
              <p className="mt-3 text-sm sm:text-base text-stone-300 leading-relaxed">
                整理營造廠、機電承商與業主最常詢問的報價時程、CNS 檢驗文件及現場配合事項。
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.08} className="lg:col-span-8">
              <div className="divide-y divide-stone-800 border border-stone-800 bg-[#23211E] rounded-lg px-5 sm:px-6 shadow-md">
                {FAQ_ITEMS.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div key={faq.id}>
                      <h3>
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={`faq-panel-${faq.id}`}
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full min-h-[56px] py-4 flex items-center justify-between gap-4 text-left text-sm sm:text-base font-bold text-stone-100 hover:text-amber-300 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
                        >
                          <span className={isOpen ? 'text-amber-400' : ''}>{faq.question}</span>
                          <ChevronDown
                            className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                              isOpen ? 'rotate-180 text-amber-400' : 'text-stone-400'
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                      </h3>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`faq-panel-${faq.id}`}
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                            className="pb-5 pr-8 text-sm sm:text-base text-stone-300 leading-relaxed"
                          >
                            {faq.answer}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
