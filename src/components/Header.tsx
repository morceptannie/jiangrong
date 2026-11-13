import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import type { PageRoute } from '../types/routes';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute, inquirySubject?: string) => void;
}

const NAV_ITEMS: { route: PageRoute; label: string }[] = [
  { route: 'home', label: '首頁' },
  { route: 'services', label: '工程服務' },
  { route: 'about', label: '關於將榮' },
  { route: 'portfolio', label: '工程實績' },
  { route: 'specs', label: '規格問答' },
];

export function Header({ currentRoute, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleRouteClick = (route: PageRoute) => {
    setMobileOpen(false);
    onNavigate(route);
  };

  return (
    <>
      <header className="sticky top-0 z-40 h-16 bg-[#181715]/95 backdrop-blur-md border-b border-stone-800 shadow-md">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Prominent Single-Line Brand Mark + Full Company Name */}
          <button
            type="button"
            onClick={() => handleRouteClick('home')}
            className="inline-flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-tight text-stone-50 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm px-1 -ml-1 group"
          >
            <svg
              viewBox="0 0 32 32"
              className="w-7 h-7 shrink-0 transition-transform duration-200 group-hover:scale-105"
              aria-hidden="true"
            >
              <rect width="32" height="32" rx="6" className="fill-amber-400" />
              <path
                d="M8 24V8h4v16H8zm12 0V8h4v16h-4zM8 15h16v3H8v-3zm3-5l10 12"
                className="stroke-stone-950 fill-stone-950"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span>{COMPANY_INFO.name}</span>
          </button>

          {/* Zone 2: 5 concise single-line multi-page nav links */}
          <nav
            aria-label="主要導覽列"
            className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  type="button"
                  onClick={() => handleRouteClick(item.route)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`py-2 border-b-2 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm ${
                    isActive
                      ? 'text-amber-400 border-amber-400 font-semibold'
                      : 'text-stone-300 border-transparent hover:text-amber-300 hover:border-amber-400/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action + mobile drawer trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleRouteClick('contact')}
              className={`hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-bold rounded-md transition-all duration-150 hover:-translate-y-0.5 shadow-sm whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 focus-visible:ring-amber-400 ${
                currentRoute === 'contact'
                  ? 'bg-amber-300 text-stone-950 ring-2 ring-amber-400/50'
                  : 'bg-amber-400 hover:bg-amber-300 text-stone-950'
              }`}
            >
              申請工程報價
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="開啟行動裝置選單"
              aria-expanded={mobileOpen}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 text-stone-100 hover:bg-stone-800 rounded-md transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Enfold Responsive Burger Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="行動裝置導覽選單"
        >
          <div
            className="fixed inset-0 bg-black/75 transition-opacity"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#181715] text-stone-100 border-l border-stone-800 shadow-2xl flex flex-col justify-between p-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <span className="text-lg font-bold tracking-tight text-amber-400">
                  {COMPANY_INFO.name}
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="關閉導覽選單"
                  className="inline-flex items-center justify-center w-11 h-11 text-stone-300 hover:text-white hover:bg-stone-800 rounded-md transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  <X className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>

              <nav aria-label="行動版頁面導覽" className="mt-4 flex flex-col">
                {NAV_ITEMS.map((item) => {
                  const isActive = currentRoute === item.route;
                  return (
                    <button
                      key={item.route}
                      type="button"
                      onClick={() => handleRouteClick(item.route)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`flex items-center min-h-[48px] px-2 text-left text-base font-medium border-b border-stone-800/80 transition-colors cursor-pointer ${
                        isActive
                          ? 'text-amber-400 font-bold'
                          : 'text-stone-200 hover:text-amber-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-stone-800 space-y-4">
              <div className="text-xs text-stone-400 space-y-1">
                <p>桃園市蘆竹區 · 統一編號 {COMPANY_INFO.taxId}</p>
                <p className="tabular-nums text-stone-300">專線：{COMPANY_INFO.phone}</p>
              </div>
              <button
                type="button"
                onClick={() => handleRouteClick('contact')}
                className="w-full min-h-[44px] px-4 py-3 text-sm font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
              >
                申請工程報價
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
