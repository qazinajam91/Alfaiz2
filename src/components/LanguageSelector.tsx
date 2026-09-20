import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/translations';

interface LanguageSelectorProps {
  variant?: 'desktop' | 'mobile';
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ variant = 'desktop', className = '' }) => {
  const { currentLang, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string; nativeLabel: string; flag: string }[] = [
    { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇬🇧' },
    { code: 'ur', label: 'Urdu', nativeLabel: 'اردو', flag: '🇵🇰' },
    { code: 'ar', label: 'Arabic', nativeLabel: 'العربية', flag: '🇸🇦' },
  ];

  const currentOption = languages.find((l) => l.code === currentLang) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (variant === 'mobile') {
    return (
      <div className={`w-full ${className}`}>
        <span className="text-xs font-semibold text-slate-400 block mb-2 uppercase tracking-wider">
          Language / زبان / اللغة
        </span>
        <div className="grid grid-cols-3 gap-2">
          {languages.map((lang) => {
            const isActive = currentLang === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => setLanguage(lang.code)}
                className={`py-2 px-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#fae29c] via-[#d4af37] to-[#c59b27] text-[#031d17] shadow-md'
                    : 'bg-emerald-950/80 text-slate-300 hover:text-white hover:bg-emerald-900/60 border border-emerald-800/50'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.nativeLabel}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#fae29c] bg-emerald-950/70 hover:bg-emerald-900/90 border border-[#d4af37]/35 hover:border-[#d4af37] rounded-full transition-all cursor-pointer shadow-sm"
        aria-label="Select website language"
        aria-expanded={isOpen}
      >
        <Globe className="w-3.5 h-3.5 text-[#e5c158]" />
        <span className="font-semibold">{currentOption.nativeLabel}</span>
        <ChevronDown className={`w-3 h-3 text-[#d4af37] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 end-0 w-36 py-1.5 bg-[#031d17]/98 backdrop-blur-xl border border-[#d4af37]/40 rounded-2xl shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
          {languages.map((lang) => {
            const isSelected = currentLang === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full px-3.5 py-2 text-xs text-start flex items-center justify-between transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#d4af37]/15 text-[#fae29c] font-bold'
                    : 'text-slate-300 hover:bg-emerald-900/50 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{lang.flag}</span>
                  <span>{lang.nativeLabel}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#e5c158]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
