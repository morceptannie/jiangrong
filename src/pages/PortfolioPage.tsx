import { useEffect, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { PageBanner } from '../components/PageBanner';
import { ResilientImage } from '../components/ResilientImage';
import {
  PROJECT_CATEGORIES,
  PROJECTS,
  type ProjectCategory,
  type ProjectItem,
} from '../data/companyData';
import type { PageRoute } from '../types/routes';

interface PortfolioPageProps {
  onNavigate: (route: PageRoute, inquirySubject?: string) => void;
}

export function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <div className="bg-[#181715] text-stone-100">
      <PageBanner
        kicker="代表性工程實績"
        title="累計 480+ 件大型營造完工紀錄"
        subtitle="涵蓋桃園、雙北與新竹科技廠房、商辦大樓及挑高物流倉儲支撐塔架專案。"
        currentLabel="工程實績"
        onNavigate={onNavigate}
      />

      {/* 淺水泥灰層：篩選實績卡片對比深石墨卡片 */}
      <section className="py-14 sm:py-20 bg-[#E6E2DA] text-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div
              role="tablist"
              aria-label="工程實績分類篩選"
              className="flex items-center gap-1.5 p-1.5 bg-[#23211E] border border-stone-800 rounded-lg overflow-x-auto max-w-full"
            >
              {PROJECT_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`min-h-[38px] px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                      isActive
                        ? 'bg-amber-400 text-stone-950 shadow-sm'
                        : 'text-stone-300 hover:text-white hover:bg-stone-800'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            <p className="text-xs sm:text-sm font-semibold text-stone-700 tabular-nums">
              目前顯示 {filteredProjects.length} 件精選工程案例
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="group border border-stone-800 hover:border-amber-500 rounded-lg overflow-hidden bg-[#23211E] text-stone-100 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-md"
                >
                  <div>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`檢視 ${project.title} 工程規格明細`}
                      className="block w-full aspect-[4/3] overflow-hidden bg-stone-950 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-amber-400"
                    >
                      <ResilientImage
                        src={project.image}
                        alt={project.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                        fallbackTitle={project.title}
                      />
                    </button>

                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-400 mb-2">
                        <span>{project.location}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.year}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-teal-300 font-medium">{project.categoryLabel}</span>
                      </div>

                      <h2 className="text-lg sm:text-xl font-bold text-stone-50 tracking-tight">
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="text-left hover:text-amber-300 transition-colors cursor-pointer focus-visible:outline-none focus-visible:underline"
                        >
                          {project.title}
                        </button>
                      </h2>

                      <p className="mt-2.5 text-sm text-stone-300 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs sm:text-sm font-bold text-amber-400 tabular-nums">
                      {project.outcome}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 min-h-[40px] px-2 text-xs sm:text-sm font-semibold text-teal-300 hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
                    >
                      工程規格明細
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Dark Graphite Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <div
              className="fixed inset-0 bg-black/85 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#23211E] text-stone-100 rounded-lg border border-stone-700 shadow-2xl"
            >
              <div className="relative aspect-[16/10] bg-stone-950">
                <ResilientImage
                  src={selectedProject.image}
                  alt={selectedProject.imageAlt}
                  className="w-full h-full object-cover"
                  fallbackTitle={selectedProject.title}
                />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="關閉工程實績明細"
                  className="absolute top-3 right-3 inline-flex items-center justify-center w-11 h-11 rounded-md bg-stone-950/85 text-white hover:bg-stone-950 border border-stone-700 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-xs text-stone-400 mb-2">
                  {selectedProject.location}
                  <span aria-hidden="true" className="mx-2">·</span>
                  {selectedProject.year}
                  <span aria-hidden="true" className="mx-2">·</span>
                  <span className="text-teal-300">{selectedProject.categoryLabel}</span>
                </p>
                <h3
                  id="project-modal-title"
                  className="text-xl sm:text-2xl font-bold text-stone-50 tracking-tight"
                >
                  {selectedProject.title}
                </h3>

                <p className="mt-4 text-sm sm:text-base text-stone-300 leading-relaxed">
                  {selectedProject.summary}
                </p>

                <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-stone-700/80 py-5">
                  <div>
                    <dt className="text-xs text-stone-400">採用系統與架構</dt>
                    <dd className="text-sm font-semibold text-stone-100 mt-1">
                      {selectedProject.systemType}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-stone-400">規模與搭設面積</dt>
                    <dd className="text-sm font-semibold text-stone-100 mt-1 tabular-nums">
                      {selectedProject.areaOrHeight}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-stone-400">施工駐點工期</dt>
                    <dd className="text-sm font-semibold text-stone-100 mt-1 tabular-nums">
                      {selectedProject.duration}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-stone-400">專案成果驗證</dt>
                    <dd className="text-sm font-bold text-amber-400 mt-1 tabular-nums">
                      {selectedProject.outcome}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="min-h-[44px] px-4 py-2 text-sm font-medium text-stone-300 hover:text-white border border-stone-700 rounded-md transition-colors cursor-pointer"
                  >
                    關閉視窗
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const label = selectedProject.categoryLabel;
                      setSelectedProject(null);
                      onNavigate('contact', label);
                    }}
                    className="min-h-[44px] px-5 py-2 text-sm font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
                  >
                    洽詢類似規格報價
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
