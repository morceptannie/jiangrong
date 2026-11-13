import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import type { PageRoute } from '../types/routes';

interface PageBannerProps {
  kicker: string;
  title: string;
  subtitle?: string;
  currentLabel: string;
  onNavigate: (route: PageRoute) => void;
}

export function PageBanner({
  kicker,
  title,
  subtitle,
  currentLabel,
  onNavigate,
}: PageBannerProps) {
  return (
    <section className="bg-[#181715] border-b border-stone-800 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <nav
            aria-label="麵包屑導覽"
            className="flex items-center gap-1.5 text-xs text-stone-400 mb-4"
          >
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              首頁
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-600" aria-hidden="true" />
            <span className="text-teal-400 font-medium">{currentLabel}</span>
          </nav>

          <p className="text-xs sm:text-sm font-bold tracking-wider text-amber-400 mb-2">
            {kicker}
          </p>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-50 tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-sm sm:text-base text-stone-300 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
