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

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  const currentLang = languages.find(l => l.code === lang)!;
  const dir = currentLang?.dir || 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
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
