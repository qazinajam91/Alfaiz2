import React from 'react';
import { Mail, MessageCircle, ArrowUp, BookOpen, Code2, Facebook } from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyData';
import { IslamicStarIcon, CrescentStarIcon } from './IslamicPattern';
import { useLanguage } from '../i18n/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02140f] border-t border-[#d4af37]/30 text-white overflow-hidden">
      {/* Subtle Islamic Geometric Pattern Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#d4af37 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      {/* Decorative Gold Top Border Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10">
          
          {/* Col 1: Brand & Identity & Mission (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#063a2f] to-[#041f18] border border-[#d4af37]/50 flex items-center justify-center shadow-lg">
                <CrescentStarIcon className="w-6 h-6 text-[#fae29c]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                  {ACADEMY_CONFIG.nameEnglish}
                </h3>
                <p className="font-urdu text-xs sm:text-sm text-[#fae29c]" dir="rtl">
                  {ACADEMY_CONFIG.nameUrdu}
                </p>
              </div>
            </div>

            <p className="font-quran text-sm text-[#e5c158] font-semibold mb-2" dir="rtl">
              «{ACADEMY_CONFIG.quranVerseArabic}»
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mb-5">
              Dedicated to nurturing young minds and women with authentic Quranic recitation, applied Tajweed, and noble prophetic manners (Akhlaq & Adab) in an encouraging, private online environment.
            </p>

            {/* Privacy-conscious Social & Messaging Links */}
            <div className="flex items-center gap-3 mt-auto pt-2">
              <a
                href={ACADEMY_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-700/50 flex items-center justify-center text-emerald-300 hover:text-white hover:bg-emerald-800 hover:border-emerald-400 transition-all shadow-md"
                aria-label="Open WhatsApp Support"
                title="Click to start a private WhatsApp conversation"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${ACADEMY_CONFIG.email}`}
                className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-700/50 flex items-center justify-center text-[#fae29c] hover:text-white hover:bg-emerald-800 hover:border-[#d4af37] transition-all shadow-md"
                aria-label={`Send email to ${ACADEMY_CONFIG.email}`}
                title={`Send email to ${ACADEMY_CONFIG.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={ACADEMY_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-700/50 flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-900/80 hover:border-blue-400 transition-all shadow-md"
                aria-label="Open Al Faiz Noor UL Quran Academy Facebook Page"
                title="Visit our official Facebook page"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols on desktop) */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-[#fae29c] mb-4 flex items-center gap-1.5">
              <IslamicStarIcon size={12} />
              <span>Navigation</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><a href="#home" className="hover:text-[#fae29c] transition-colors">{t.nav.home}</a></li>
              <li><a href="#services" className="hover:text-[#fae29c] transition-colors">{t.nav.services}</a></li>
              <li><a href="#about" className="hover:text-[#fae29c] transition-colors">{t.nav.about}</a></li>
              <li><a href="#why-us" className="hover:text-[#fae29c] transition-colors">{t.nav.whyUs}</a></li>
              <li><a href="#journey" className="hover:text-[#fae29c] transition-colors">Learning Journey</a></li>
              <li><a href="#gallery" className="hover:text-[#fae29c] transition-colors">{t.nav.gallery}</a></li>
              <li><a href="#faq" className="hover:text-[#fae29c] transition-colors">{t.nav.faq}</a></li>
              <li><a href="#contact" className="hover:text-[#fae29c] transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Col 3: Key Services Highlights (3 cols on desktop) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-[#fae29c] mb-4 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#d4af37]" />
              Core Programs
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#services" className="hover:text-[#fae29c] transition-colors flex items-center justify-between">
                  <span>Noorani Qaida for Kids</span>
                  <span className="text-[10px] font-urdu text-emerald-400" dir="rtl">قاعدہ</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#fae29c] transition-colors flex items-center justify-between">
                  <span>Quran Nazra with Tajweed</span>
                  <span className="text-[10px] font-urdu text-emerald-400" dir="rtl">ناظرہ</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#fae29c] transition-colors flex items-center justify-between">
                  <span>Hifz-ul-Quran Program</span>
                  <span className="text-[10px] font-urdu text-emerald-400" dir="rtl">حفظ</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#fae29c] transition-colors flex items-center justify-between">
                  <span>Sisters & Women Quran Classes</span>
                  <span className="text-[10px] font-urdu text-emerald-400" dir="rtl">خواتین</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#fae29c] transition-colors flex items-center justify-between">
                  <span>Basic Islamic Education & Duas</span>
                  <span className="text-[10px] font-urdu text-emerald-400" dir="rtl">دینیات</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#fae29c] transition-colors flex items-center justify-between">
                  <span>Islamic Manners & Ethics (Adab)</span>
                  <span className="text-[10px] font-urdu text-emerald-400" dir="rtl">اخلاق</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Admissions Direct (2 cols on desktop) */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-[#fae29c] mb-4 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
              Direct Channels
            </h4>
            
            <div className="space-y-3.5 text-xs text-slate-300">
              <div>
                <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Email</span>
                <a
                  href={`mailto:${ACADEMY_CONFIG.email}`}
                  className="font-medium text-[#fae29c] hover:text-[#fde68a] hover:underline break-all transition-colors block mt-0.5"
                >
                  {ACADEMY_CONFIG.email}
                </a>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 block uppercase tracking-wider">WhatsApp</span>
                <a
                  href={ACADEMY_CONFIG.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-emerald-300 hover:text-emerald-100 hover:underline inline-flex items-center gap-1.5 mt-0.5"
                  aria-label="Open WhatsApp Support"
                  title="Click to start a private WhatsApp conversation"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Official WhatsApp Support</span>
                </a>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Facebook</span>
                <a
                  href={ACADEMY_CONFIG.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-300 hover:text-blue-100 hover:underline inline-flex items-center gap-1.5 mt-0.5"
                  aria-label="Open Al Faiz Noor UL Quran Academy Facebook Page"
                  title="Visit our official Facebook page"
                >
                  <Facebook className="w-3.5 h-3.5 text-blue-400" />
                  <span>Official Facebook Page</span>
                </a>
              </div>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950 border border-emerald-800/60 text-[11px] text-slate-300 hover:text-white hover:border-[#d4af37]/50 transition-colors cursor-pointer"
                >
                  <ArrowUp className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Back to Top</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Dedicated Engineering & Technical Craft Credit Section */}
        <div className="my-8 py-6 px-6 sm:px-8 rounded-2xl bg-gradient-to-r from-[#031d17] via-[#06332a]/70 to-[#031d17] border border-[#d4af37]/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#06332a] to-[#021813] border border-[#d4af37]/50 flex items-center justify-center text-[#fae29c] shadow-md shadow-black/40 shrink-0">
              <Code2 className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <span className="text-xs text-slate-400 font-medium tracking-wide block">
                {ACADEMY_CONFIG.developerCredit.intro}
              </span>
              <div className="flex flex-wrap items-baseline gap-2 mt-0.5">
                <span className="font-heading font-bold text-base sm:text-lg text-[#fae29c] hover:text-[#fde68a] tracking-wide transition-colors drop-shadow-[0_1px_4px_rgba(212,175,55,0.35)]">
                  {ACADEMY_CONFIG.developerCredit.name}
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold tracking-wider uppercase bg-emerald-950/90 px-2.5 py-0.5 rounded-full border border-emerald-700/50">
                  {ACADEMY_CONFIG.developerCredit.title}
                </span>
              </div>
            </div>
          </div>

          <div className="text-center sm:text-right text-xs text-slate-400 border-t sm:border-t-0 border-emerald-800/40 pt-3 sm:pt-0">
            <span className="text-slate-300 font-medium block">
              High-Performance Islamic Educational Platform
            </span>
            <span className="text-[11px] text-emerald-400 font-urdu block mt-0.5" dir="rtl">
              ڈیزائن اور انجینئرنگ: قاضی نجم (سافٹ ویئر انجینئر)
            </span>
          </div>
        </div>

        {/* Bottom Copyright & Islamic Seal */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <CrescentStarIcon size={16} className="text-[#d4af37] shrink-0" />
            <span>
              © {new Date().getFullYear()} {ACADEMY_CONFIG.nameEnglish} ({ACADEMY_CONFIG.nameUrdu}). All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span>Online Islamic Academy for Kids & Sisters</span>
            <span>•</span>
            <span className="text-emerald-400 font-urdu" dir="rtl">نور القرآن والتربیہ</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
