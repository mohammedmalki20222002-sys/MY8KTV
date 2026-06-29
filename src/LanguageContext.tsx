import { createContext, useContext, useState, ReactNode } from "react";
import { LangCode, LANGUAGES, translations, T } from "./i18n";

interface LanguageContextValue {
  lang: LangCode;
  setLang: (l: LangCode) => void;
  t: T;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
  dir: 'ltr',
});

export function LanguageProvider({ children, initialLang = 'en' }: { children: ReactNode; initialLang?: LangCode }) {
  const [lang, setLang] = useState<LangCode>(initialLang);
  const dir = LANGUAGES.find(l => l.code === lang)?.dir ?? 'ltr';
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang], dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
