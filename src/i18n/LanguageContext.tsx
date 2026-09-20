import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TranslationDict, translations } from './translations';

interface LanguageContextType {
  currentLang: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDict;
  isRTL: boolean;
}

const defaultLanguageContext: LanguageContextType = {
  currentLang: 'en',
  setLanguage: () => {},
  t: translations.en,
  isRTL: false,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to English, or detect from localStorage if previously stored
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('alfaiz_academy_lang') as Language;
      if (saved && (saved === 'en' || saved === 'ur' || saved === 'ar')) {
        return saved;
      }
    } catch {
      // Local storage unavailable in some sandboxes
    }
    return 'en';
  });

  const t = translations[currentLang];
  const isRTL = t.direction === 'rtl';

  useEffect(() => {
    // Synchronize HTML document direction and language attribute
    document.documentElement.dir = t.direction;
    document.documentElement.lang = currentLang;

    // Persist choice for visitor
    try {
      localStorage.setItem('alfaiz_academy_lang', currentLang);
    } catch {
      // Ignore
    }
  }, [currentLang, t.direction]);

  const setLanguage = (lang: Language) => {
    setCurrentLang(lang);
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    return defaultLanguageContext;
  }
  return context;
};
