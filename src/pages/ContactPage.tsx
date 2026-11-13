import { useEffect, useState, type FormEvent } from 'react';
import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { ScrollReveal } from '../components/MotionPrimitives';
import { COMPANY_INFO } from '../data/companyData';
import type { PageRoute } from '../types/routes';

interface ContactPageProps {
  prefilledSubject: string;
  onNavigate: (route: PageRoute) => void;
}

interface FormState {
  company: string;
  contactName: string;
  phone: string;
  email: string;
  serviceType: string;
  siteLocation: string;
  details: string;
}

interface FormErrors {
  company?: string;
  contactName?: string;
  phone?: string;
  email?: string;
  details?: string;
}

const SERVICE_OPTIONS = [
  '系統鷹架工程施工（連工帶料）',
  '施工塔架吊裝與高空支撐',
  '鷹架器材買賣與長短期租賃',
  '金屬建材架構與工安巡檢',
  '其他客製工程專案諮詢',
];

export function ContactPage({ prefilledSubject, onNavigate }: ContactPageProps) {
  const [form, setForm] = useState<FormState>({
    company: '',
    contactName: '',
    phone: '',
    email: '',
    serviceType: SERVICE_OPTIONS[0],
    siteLocation: '',
    details: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [lastAutoNote, setLastAutoNote] = useState('');

  useEffect(() => {
    if (!prefilledSubject) return;
    const nextNote = `欲洽詢「${prefilledSubject}」相關工程規劃與報價。`;
    setForm((prev) => {
      const matchedOption = SERVICE_OPTIONS.find((opt) =>
        opt.includes(prefilledSubject.slice(0, 4))
      );
      const shouldUpdateDetails = !prev.details || prev.details === lastAutoNote;
      return {
        ...prev,
        serviceType: matchedOption || prev.serviceType,
        details: shouldUpdateDetails ? nextNote : prev.details,
      };
    });
    setLastAutoNote(nextNote);
    setSubmittedRef(null);
  }, [prefilledSubject, lastAutoNote]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.company.trim()) nextErrors.company = '請填寫公司或營造單位名稱';
    if (!form.contactName.trim()) nextErrors.contactName = '請填寫聯絡人姓名';

    const cleanPhone = form.phone.replace(/[\s-]/g, '');
    if (!cleanPhone || !/^0\d{8,9}$/.test(cleanPhone)) {
      nextErrors.phone = '請輸入有效台灣市話或手機號碼（例如 0932-885-410）';
    }

    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = '電子信箱格式不正確，請重新確認';
    }

    if (!form.details.trim() || form.details.trim().length < 6) {
      nextErrors.details = '請簡述工程需求或預計施作面積／天數';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    setTimeout(() => {
      const refCode = `JR-${new Date().getFullYear().toString().slice(-2)}${String(
        Math.floor(1000 + Math.random() * 9000)
      )}`;
      setSubmitting(false);
      setSubmittedRef(refCode);
    }, 350);
  };

  const handleReset = () => {
    setForm({
      company: '',
      contactName: '',
      phone: '',
      email: '',
      serviceType: SERVICE_OPTIONS[0],
      siteLocation: '',
      details: '',
    });
    setErrors({});
    setSubmittedRef(null);
  };

  return (
    <div className="bg-[#181715] text-stone-100">
      <PageBanner
        kicker="工程詢價與現場勘估"
        title={`聯絡${COMPANY_INFO.name}`}
        subtitle="歡迎提供建案圖說、預估施工面積與預計進場月份，24 小時內安排專案主管回覆勘場與報價。"
        currentLabel="申請工程報價"
        onNavigate={onNavigate}
      />

      {/* 淺水泥灰層：左深右淺高對比結構 */}
      <section className="py-14 sm:py-20 bg-[#E6E2DA] text-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Deep Graphite Direct Info Card */}
            <ScrollReveal direction="left" className="lg:col-span-5">
              <div className="h-full p-7 sm:p-9 rounded-lg bg-[#23211E] text-stone-100 border border-stone-800 flex flex-col justify-between shadow-lg">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-50 tracking-tight">
                    桃園營運調度中心
                  </h2>
                  <p className="mt-2 text-sm text-stone-400">
                    自有貨運車隊直達桃園、雙北及新竹各工業園區與工地現場。
                  </p>

                  <dl className="mt-8 space-y-5 border-t border-stone-800 pt-6 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <dt className="font-semibold text-stone-100">登記地址與調度處</dt>
                        <dd className="text-stone-300 mt-0.5">{COMPANY_INFO.address}</dd>
                        <dd className="text-xs text-stone-400 mt-1">
                          服務區域：{COMPANY_INFO.serviceArea}
                        </dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <dt className="font-semibold text-stone-100">工程洽詢專線</dt>
                        <dd className="text-amber-400 mt-0.5 tabular-nums font-bold">
                          市話：{COMPANY_INFO.phone} / 行動：{COMPANY_INFO.mobile}
                        </dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-teal-300 shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <dt className="font-semibold text-stone-100">圖說與報價信箱</dt>
                        <dd className="text-stone-300 mt-0.5 font-mono text-xs sm:text-sm">
                          {COMPANY_INFO.email}
                        </dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-teal-300 shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <dt className="font-semibold text-stone-100">服務時間</dt>
                        <dd className="text-stone-300 mt-0.5 tabular-nums">
                          {COMPANY_INFO.businessHours}（緊急歲修可另約聯繫）
                        </dd>
                      </div>
                    </div>
                  </dl>
                </div>

                <div className="mt-8 pt-5 border-t border-stone-800 text-xs text-stone-400">
                  統一編號 <span className="font-mono text-stone-200 tabular-nums">{COMPANY_INFO.taxId}</span> · 政府立案合法營造輔助工程團隊
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Warm Putty Stone Form Card (Non-White) */}
            <ScrollReveal direction="right" delay={0.08} className="lg:col-span-7">
              <div className="h-full p-6 sm:p-8 border border-stone-400/70 rounded-lg bg-[#DED9CF] shadow-sm">
                {submittedRef ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-800/15 text-teal-800 mx-auto">
                      <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-stone-950">
                      已收到您的工程詢價需求
                    </h3>
                    <p className="text-sm text-stone-700 max-w-md mx-auto leading-relaxed">
                      詢價單編號{' '}
                      <span className="font-mono font-bold text-teal-800 tabular-nums">
                        {submittedRef}
                      </span>
                      。{COMPANY_INFO.name}專員將於 1 個工作天內透過電話{' '}
                      <span className="font-mono tabular-nums text-stone-950">{form.phone}</span>{' '}
                      與 {form.contactName} 聯繫確認勘場時間。
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="min-h-[44px] px-5 py-2.5 text-sm font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
                      >
                        送出另一筆工程需求
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="inquiry-company"
                          className="block text-sm font-semibold text-stone-900 mb-1.5"
                        >
                          公司或營造單位名稱 <span className="text-amber-700">*</span>
                        </label>
                        <input
                          id="inquiry-company"
                          type="text"
                          value={form.company}
                          onChange={(e) =>
                            setForm((prev) => ({ ...prev, company: e.target.value }))
                          }
                          placeholder="例：宏展機電營造有限公司"
                          aria-invalid={Boolean(errors.company)}
                          className="w-full min-h-[44px] px-3.5 py-2 text-sm bg-[#F1EEE8] border border-stone-400 rounded-md text-stone-950 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:border-teal-800"
                        />
                        {errors.company && (
                          <p className="mt-1 text-xs text-rose-700 font-semibold">
                            {errors.company}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="inquiry-contact"
                          className="block text-sm font-semibold text-stone-900 mb-1.5"
                        >
                          聯絡人姓名與職稱 <span className="text-amber-700">*</span>
                        </label>
                        <input
                          id="inquiry-contact"
                          type="text"
                          value={form.contactName}
                          onChange={(e) =>
                            setForm((prev) => ({ ...prev, contactName: e.target.value }))
                          }
                          placeholder="例：陳先生（工務主任）"
                          aria-invalid={Boolean(errors.contactName)}
                          className="w-full min-h-[44px] px-3.5 py-2 text-sm bg-[#F1EEE8] border border-stone-400 rounded-md text-stone-950 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:border-teal-800"
                        />
                        {errors.contactName && (
                          <p className="mt-1 text-xs text-rose-700 font-semibold">
                            {errors.contactName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="inquiry-phone"
                          className="block text-sm font-semibold text-stone-900 mb-1.5"
                        >
                          聯絡電話 <span className="text-amber-700">*</span>
                        </label>
                        <input
                          id="inquiry-phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) =>
                            setForm((prev) => ({ ...prev, phone: e.target.value }))
                          }
                          placeholder="例：0932-885-410"
                          aria-invalid={Boolean(errors.phone)}
                          className="w-full min-h-[44px] px-3.5 py-2 text-sm bg-[#F1EEE8] border border-stone-400 rounded-md text-stone-950 placeholder:text-stone-500 tabular-nums focus:outline-none focus:ring-2 focus:ring-teal-800 focus:border-teal-800"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-rose-700 font-semibold">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="inquiry-email"
                          className="block text-sm font-semibold text-stone-900 mb-1.5"
                        >
                          電子信箱（選填）
                        </label>
                        <input
                          id="inquiry-email"
                          type="email"
                          value={form.email}
                          onChange={(e) =>
                            setForm((prev) => ({ ...prev, email: e.target.value }))
                          }
                          placeholder="name@company.com.tw"
                          aria-invalid={Boolean(errors.email)}
                          className="w-full min-h-[44px] px-3.5 py-2 text-sm bg-[#F1EEE8] border border-stone-400 rounded-md text-stone-950 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:border-teal-800"
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-rose-700 font-semibold">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="inquiry-service"
                          className="block text-sm font-semibold text-stone-900 mb-1.5"
                        >
                          工程／器材需求項目
                        </label>
                        <select
                          id="inquiry-service"
                          value={form.serviceType}
                          onChange={(e) =>
                            setForm((prev) => ({ ...prev, serviceType: e.target.value }))
                          }
                          className="w-full min-h-[44px] px-3.5 py-2 text-sm bg-[#F1EEE8] border border-stone-400 rounded-md text-stone-950 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:border-teal-800"
                        >
                          {SERVICE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="inquiry-location"
                          className="block text-sm font-semibold text-stone-900 mb-1.5"
                        >
                          工地縣市與區域
                        </label>
                        <input
                          id="inquiry-location"
                          type="text"
                          value={form.siteLocation}
                          onChange={(e) =>
                            setForm((prev) => ({ ...prev, siteLocation: e.target.value }))
                          }
                          placeholder="例：桃園市大園區／新竹科學園區"
                          className="w-full min-h-[44px] px-3.5 py-2 text-sm bg-[#F1EEE8] border border-stone-400 rounded-md text-stone-950 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:border-teal-800"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-details"
                        className="block text-sm font-semibold text-stone-900 mb-1.5"
                      >
                        工程概述（預計面積、樓層高度、工期或料材數量）{' '}
                        <span className="text-amber-700">*</span>
                      </label>
                      <textarea
                        id="inquiry-details"
                        rows={4}
                        value={form.details}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, details: e.target.value }))
                        }
                        placeholder="請說明工程類型、搭設高度或面積，以及希望進場之月份。"
                        aria-invalid={Boolean(errors.details)}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F1EEE8] border border-stone-400 rounded-md text-stone-950 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:border-teal-800"
                      />
                      {errors.details && (
                        <p className="mt-1 text-xs text-rose-700 font-semibold">
                          {errors.details}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">
                      <p className="text-xs text-stone-600">
                        提交後僅供工程專案報價聯繫使用，絕不外流客戶資料。
                      </p>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center justify-center min-h-[44px] px-7 py-2.5 text-sm font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-60 rounded-md transition-all duration-150 hover:-translate-y-0.5 shadow-sm whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-800"
                      >
                        {submitting ? '傳送中...' : '送出工程詢價單'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
