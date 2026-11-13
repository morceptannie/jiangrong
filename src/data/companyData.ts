import heroScaffoldingImg from '../assets/images/hero_scaffolding_architecture_1794560426154.jpg';
import serviceSystemImg from '../assets/images/service_system_scaffolding_1794560426709.jpg';
import projectFabImg from '../assets/images/project_hightech_fab_1794560427347.jpg';
import projectCommercialImg from '../assets/images/project_commercial_tower_1794560426986.jpg';
import aboutTeamImg from '../assets/images/about_engineering_team_1794560427525.jpg';

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  summary: string;
  highlights: string[];
  featured?: boolean;
  image?: string;
  imageAlt?: string;
}

export type ProjectCategory = 'all' | 'system' | 'plant' | 'tower' | 'commercial';

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: string;
  location: string;
  year: string;
  outcome: string;
  areaOrHeight: string;
  duration: string;
  systemType: string;
  summary: string;
  image: string;
  imageAlt: string;
}

export interface SpecRow {
  id: string;
  itemName: string;
  standardCode: string;
  specDetail: string;
  loadCapacity: string;
  application: string;
  supplyMode: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const COMPANY_INFO = {
  name: '將榮企業有限公司',
  shortName: '將榮企業',
  englishName: 'JIANG RONG ENTERPRISE CO., LTD.',
  taxId: '54111778',
  foundedYear: '2013',
  region: '桃園市蘆竹區',
  address: '桃園市蘆竹區福林街一帶（桃園營運調度中心）',
  serviceArea: '基隆、雙北、桃園、新竹、苗栗及全台大型專案工程',
  phone: '(03) 322-8670',
  mobile: '0932-885-410',
  email: 'service@jiangrong-scaffold.com.tw',
  businessHours: '週一至週六 08:00 – 17:30',
};

export const HERO_IMAGE = {
  src: heroScaffoldingImg,
  alt: '大型鋼構工業廠房外圍精密搭設熱浸鍍鋅系統鷹架工程實景',
};

export const ABOUT_IMAGE = {
  src: aboutTeamImg,
  alt: '將榮企業工安巡檢與結構工程團隊於料場清點鍍鋅鋼管與扣件規格',
};

export const KEY_METRICS = [
  {
    value: '2013 年',
    label: '創立於桃園蘆竹',
    detail: '統一編號 54111778 · 在地實績積累',
  },
  {
    value: '100%',
    label: 'CNS 4750 認證料材',
    detail: '熱浸鍍鋅圓盤系統架與防滑踏板',
  },
  {
    value: '24 小時',
    label: '北北桃竹現場勘估',
    detail: '迅速提供施工圖說與合理報價單',
  },
  {
    value: '480+ 件',
    label: '累計完工大型標案',
    detail: '涵蓋科技廠房、商業大樓與公共建設',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'system-scaffolding',
    index: '01.',
    title: '系統鷹架工程設計與施工',
    subtitle: 'CNS 4750 國家標準圓盤式系統鷹架',
    summary:
      '採用高強度熱浸鍍鋅鋼管與八孔圓盤楔型插銷設計，結構剛性顯著優於傳統框式鷹架，適用於高空外牆作業、不規則曲面建築及嚴格要求工安之科技廠區。',
    highlights: [
      '標準化模組搭設，縮減現場組裝工期達 25%–30%',
      '標配雙層安全護欄、防墜踢腳板與止滑衝孔鋼踏板',
      '配合執業結構技師出具結構計算書與簽證文件',
    ],
    featured: true,
    image: serviceSystemImg,
    imageAlt: '熱浸鍍鋅系統鷹架圓盤節點與防滑鋼踏板施工細節',
  },
  {
    id: 'tower-rigging',
    index: '02.',
    title: '施工塔架吊裝與高空支撐',
    subtitle: '重型滿堂支撐架與跨距施工塔台',
    summary:
      '針對廠房挑高鋼構、橋梁翼板與大型設備吊裝作業需求，提供高載重支撐架、施工階梯塔與物料上下料平台之精準架設與安全驗收。',
    highlights: [
      '單柱軸向載重精密試算，確保高挑空施工穩定度',
      '獨立安全上下爬梯塔設計，落實人車與物料動線分離',
      '可搭配夜間或歲修停機時段進行緊急進場架設',
    ],
  },
  {
    id: 'rental-sales',
    index: '03.',
    title: '鷹架器材買賣與長短期租賃',
    subtitle: '桃園蘆竹自有倉儲物流調度',
    summary:
      '供應全新與經檢驗整備之系統鷹架、門型施工架、鍍鋅踏板、斜撐桿、交叉拉桿及各型扣件配件，依工程進度彈性調度配送至工地現場。',
    highlights: [
      '出庫前逐批檢視焊道與防鏽鍍鋅層完整度',
      '支援按日／按月計費租賃方案或整批工程買斷',
      '自有貨運車隊直達桃園、雙北及新竹各工業園區',
    ],
  },
  {
    id: 'metal-safety',
    index: '04.',
    title: '金屬建材架構與定期工安巡檢',
    subtitle: '營造附屬金屬結構與全期維護',
    summary:
      '承攬工地臨時安全走廊、鋼構維修平台、防塵網圍籬與鋼板防護架構，並由具備勞安證照之現場主管定期巡檢連牆桿與扣件扭矩。',
    highlights: [
      '颱風季與強風前主動加強壁連座與防墜網巡檢',
      '完整投保雇主意外責任險與施工第三人責任險',
      '提供進退場分階段拆除計畫，銜接外牆飾材施工',
    ],
  },
];

export const PROJECT_CATEGORIES: { key: ProjectCategory; label: string }[] = [
  { key: 'all', label: '全部實績' },
  { key: 'plant', label: '科技與工業廠房' },
  { key: 'system', label: '系統鷹架工程' },
  { key: 'tower', label: '塔架吊裝與支撐' },
  { key: 'commercial', label: '商業與公共建築' },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'taoyuan-fab-expansion',
    title: '桃園觀音工業區科技廠房擴建支撐與外牆鷹架',
    category: 'plant',
    categoryLabel: '科技與工業廠房',
    location: '桃園市觀音區',
    year: '2025 年完工',
    outcome: '縮短高空外牆作業工期 28% / 全程零工安事故',
    areaOrHeight: '搭設總面積 18,400 m²',
    duration: '140 日曆天',
    systemType: 'CNS 4750 圓盤系統鷹架 + 重型樓梯塔',
    summary:
      '配合業主無塵室與鋼構廠房同步施工需求，分區進場架設 32 公尺高之雙排系統施工架與獨立人行階梯塔，協助管線、帷幕與機電團隊安全並行作業。',
    image: projectFabImg,
    imageAlt: '桃園大型工業廠房擴建搭配重型系統鷹架與塔式吊車施工現場',
  },
  {
    id: 'qingpu-commercial-tower',
    title: '中壢青埔高層商辦大樓外牆帷幕施工架',
    category: 'commercial',
    categoryLabel: '商業與公共建築',
    location: '桃園市中壢區',
    year: '2025 年完工',
    outcome: '抗 11 級陣風連牆加固驗收一次通過',
    areaOrHeight: '建築高度 64 公尺（16 層）',
    duration: '210 日曆天',
    systemType: '熱浸鍍鋅系統施工架 + 雙層細目防塵網',
    summary:
      '針對青埔高風壓區域特性，強化每兩層樓之埋入式壁連座密度與斜撐配置，確保玻璃帷幕與石材乾掛期間施工人員之高度安全與市容整潔。',
    image: projectCommercialImg,
    imageAlt: '都市高層商辦建築外牆整齊架設熱浸鍍鋅鷹架與安全防護網',
  },
  {
    id: 'linkou-logistics-rigging',
    title: '林口大型物流倉儲挑高鋼構塔架與吊裝平台',
    category: 'tower',
    categoryLabel: '塔架吊裝與支撐',
    location: '新北市林口區',
    year: '2024 年完工',
    outcome: '單座平台承重達 4.5 kN/m² · 如期交付',
    areaOrHeight: '挑高跨距 22 公尺 × 12 座塔架',
    duration: '65 日曆天',
    systemType: '重型滿堂支撐系統架 + 移動式作業塔',
    summary:
      '為協助大型冷凍倉儲頂棚鋼桁架焊接與消防管線吊裝，組裝多座高剛性重型支撐塔架，並設置安全護欄與寬幅鋼踏板供多工種同時作業。',
    image: heroScaffoldingImg,
    imageAlt: '大型鋼構廠房多層施工塔架與金屬工作平台作業現況',
  },
  {
    id: 'hsinchu-cleanroom-scaffold',
    title: '新竹科學園區廠務設備歲修與內部鋼構鷹架',
    category: 'system',
    categoryLabel: '系統鷹架工程',
    location: '新竹市東區',
    year: '2024 年完工',
    outcome: '48 小時連夜進場完成搭設・準時復工',
    areaOrHeight: '室內分區搭設 4,200 m²',
    duration: '18 日曆天',
    systemType: '低粉塵潔淨級鍍鋅系統架 + 橡膠防護腳座',
    summary:
      '廠房歲修停機期間時間緊迫，將榮調度專車將預先清潔除鏽之熱浸鍍鋅系統架送入廠區，於底腳加裝防刮地坪墊片，精準避開既存製程管線完成搭設。',
    image: serviceSystemImg,
    imageAlt: '精密工業廠區內部之系統鷹架圓盤鎖固節點與止滑鋼踏板',
  },
];

export const MATERIAL_SPECS: SpecRow[] = [
  {
    id: 'ringlock-vertical',
    itemName: '圓盤系統鷹架立桿（標準柱）',
    standardCode: 'CNS 4750 / Ø48.6 × 3.2 mm',
    specDetail: '長度 1.0 / 1.5 / 2.0 / 3.0 m（每 50 cm 設八孔圓盤）',
    loadCapacity: '容許軸壓力 24.5 kN',
    application: '外牆施工架、高空滿堂支撐主立柱',
    supplyMode: '工程承攬 / 租賃 / 買斷',
  },
  {
    id: 'ringlock-ledger',
    itemName: '系統鷹架橫桿與斜撐桿',
    standardCode: 'CNS 4750 / Ø48.3 × 2.5 mm',
    specDetail: '跨距 0.9 / 1.2 / 1.5 / 1.8 / 2.5 m（楔型插銷自鎖）',
    loadCapacity: '節點抗剪 18.0 kN',
    application: '橫向水平連結、防側傾三角斜撐',
    supplyMode: '工程承攬 / 租賃 / 買斷',
  },
  {
    id: 'steel-plank',
    itemName: '鍍鋅止滑衝孔鋼踏板',
    standardCode: '防滑凸孔雙鎖扣規格',
    specDetail: '寬度 240 / 320 mm × 長度 1.2 / 1.5 / 1.8 m',
    loadCapacity: '均佈載重 3.0 kN/m²',
    application: '高空作業走道、材料暫置層板',
    supplyMode: '工程承攬 / 租賃 / 買斷',
  },
  {
    id: 'stair-tower',
    itemName: '鋁合金／熱浸鍍鋅專用施工樓梯塔',
    standardCode: '勞動部職安衛設施規則標準',
    specDetail: '寬度 600–900 mm 附雙側扶手與休息平台',
    loadCapacity: '單階靜載重 2.5 kN',
    application: '高層建築與廠房安全上下動線塔台',
    supplyMode: '工程承攬 / 專案租賃',
  },
  {
    id: 'heavy-shoring',
    itemName: '重型塔架支撐與可調底座／U 頭',
    standardCode: 'Q345 高強度結構鋼',
    specDetail: '螺桿直徑 Ø38 mm × 調整行程 400–600 mm',
    loadCapacity: '單支承重 35.0 kN',
    application: '大跨距樑板模板支撐與鋼構頂升固定',
    supplyMode: '工程承攬 / 專案租賃',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '貴公司的系統鷹架是否符合 CNS 4750 國家標準與勞動檢查規範？',
    answer:
      '是的。將榮企業全系列系統鷹架與鋼踏板皆符合 CNS 4750 國家標準及勞動部《營造安全衛生設施標準》，料材出庫前均經過厚度與焊道檢查；針對高度 7 公尺以上或特殊荷重需求，我們亦可配合執業結構技師出具結構計算書與簽證。',
  },
  {
    id: 'faq-2',
    question: '從現場勘查到提供工程報價與排程進場，通常需要多少工作天？',
    answer:
      '桃園、雙北及新竹地區收到圖說或勘場需求後，我們於 24 小時內安排工程專員聯絡或赴現場丈量，並於 1 至 2 個工作天內提出明細報價與搭設規劃。一般中小型標準案場於簽約確認後 3 至 5 日即可調度料車與班組進場。',
  },
  {
    id: 'faq-3',
    question: '除了連工帶料工程承攬外，是否支援單純鷹架買賣或長短期租賃？',
    answer:
      '可以。我們位於桃園蘆竹的倉儲調度中心備有充足熱浸鍍鋅系統架、門型架、防滑踏板與扣件庫存，支援營造廠或工程行單純租賃（按月／專案週期計費）或整批買斷，並提供專車物流配送服務。',
  },
  {
    id: 'faq-4',
    question: '高空作業或科技廠房內部施工，如何確保工安防護與保險保障？',
    answer:
      '將榮企業施工班組全員均具備施工架組配作業主管及一般安全衛生教育訓練證照，進場前完成工具檢查與危害告知，並投保足額雇主意外責任險及第三人意外責任險。廠房室內作業亦會於腳座加裝保護墊片以防刮傷業主地坪。',
  },
  {
    id: 'faq-5',
    question: '若施工期間遇到颱風警報或工期展延，拆搭調整該如何配合？',
    answer:
      '遇到氣象署發布海上或陸上颱風警報前，我們的巡檢團隊會針對負責之施工中案場優先進行連牆桿與防塵網加固檢查。若因工程介面變更需分區拆架或展延租期，只需提前 3 個工作天聯繫專案窗口，即可彈性調配班組配合工進。',
  },
];
