import { ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import type { PageRoute } from '../types/routes';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141311] text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          <div className="md:col-span-5 space-y-3">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="text-xl font-bold text-amber-400 tracking-tight hover:text-amber-300 transition-colors cursor-pointer text-left"
            >
              {COMPANY_INFO.name}
            </button>
            <p className="text-xs font-mono text-stone-400 tracking-wide">
              {COMPANY_INFO.englishName}
            </p>
            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              系統鷹架施工 · 施工塔架吊裝 · 器材買賣租賃 · 金屬建材架構
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <p className="text-sm font-semibold text-stone-100">網站分頁</p>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  首頁總覽
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  工程服務項目
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  關於將榮企業
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  代表工程實績
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('specs')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  料材規格與問答
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  申請工程報價
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3 text-sm">
            <p className="text-sm font-semibold text-stone-100">登記與聯絡資訊</p>
            <ul className="space-y-2 text-stone-400">
              <li className="tabular-nums">統一編號：{COMPANY_INFO.taxId}</li>
              <li>登記地區：{COMPANY_INFO.address}</li>
              <li className="tabular-nums">洽詢專線：{COMPANY_INFO.phone}</li>
              <li className="tabular-nums">服務時間：{COMPANY_INFO.businessHours}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Enfold Socket Bar */}
      <div className="border-t border-stone-800/80 bg-[#100F0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.name} 版權所有
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-stone-400 hover:text-amber-400 transition-colors py-1 cursor-pointer"
          >
            回到頁首
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
