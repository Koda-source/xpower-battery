import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, languages, t } from '@/lib/i18n';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key) => key,
  dir: 'ltr',
});

const SEO_TITLES: Record<Language, string> = {
  en: 'X-Power - Professional EV Lithium Battery | LiFePO4 52V 60V 72V 76.8V',
  zh: 'X-Power 专业电动车锂电池 | 磷酸铁锂 52V 60V 72V 76.8V 全系列',
  ar: 'X-Power - بطاريات ليثيوم احترافية للمركبات الكهربائية | LiFePO4',
  de: 'X-Power - Professionelle E-Fahrzeug Lithiumbatterien | LiFePO4 52V 60V 72V',
  es: 'X-Power - Baterías de Litio Profesionales para VE | LiFePO4 52V 60V 72V',
};

const SEO_DESCRIPTIONS: Record<Language, string> = {
  en: 'X-Power professional EV lithium battery manufacturer. LiFePO4 cells, 52V/60V/72V/64V/76.8V series for e-bikes, e-tricycles & low-speed EVs. Smart BMS, 3000+ cycles, OEM/ODM welcome.',
  zh: 'X-Power 专业电动车锂电池厂家，磷酸铁锂电芯，52V/60V/72V/64V/76.8V全系列，BMS智能保护，循环3000+次，支持OEM/ODM定制合作。',
  ar: 'مصنع بطاريات ليثيوم احترافي للمركبات الكهربائية. خلايا LiFePO4، 52-76.8 فولت، BMS، أكثر من 3000 دورة. نرحب بتعاون OEM/ODM.',
  de: 'Professioneller EV-Lithiumbatterie-Hersteller. LiFePO4-Zellen, 52V-76.8V-Serien für E-Bikes & Niedriggeschwindigkeits-E-Fahrzeuge. Intelligentes BMS, 3000+ Zyklen, OEM/ODM willkommen.',
  es: 'Fabricante profesional de baterías de litio para VE. Celdas LiFePO4, series 52V-76.8V para e-bikes & VE de baja velocidad. BMS inteligente, 3000+ ciclos, OEM/ODM bienvenido.',
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  const currentLang = languages.find(l => l.code === lang)!;
  const dir = currentLang?.dir || 'ltr';

  useEffect(() => {
    // Update HTML attributes
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;

    // Update SEO meta tags dynamically
    document.title = SEO_TITLES[lang];

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', SEO_DESCRIPTIONS[lang]);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', SEO_TITLES[lang]);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', SEO_DESCRIPTIONS[lang]);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', SEO_TITLES[lang]);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', SEO_DESCRIPTIONS[lang]);
  }, [lang, dir]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  const translate = (key: string) => t(lang, key);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translate, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
