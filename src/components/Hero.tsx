import React from 'react';
import { ArrowRight, BookOpen, ShieldCheck, HeartHandshake, CheckCircle2, MessageCircle } from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyData';
import { IslamicStarIcon, CrescentStarIcon } from './IslamicPattern';
import { useLanguage } from '../i18n/LanguageContext';

// Import generated hero artwork
import heroQuranImage from '../assets/images/quran_hero_emblem_1789210255012.jpg';

interface HeroProps {
  onExploreServices: () => void;
  onOpenAdmission: (courseName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onOpenAdmission }) => {
  const { t, isRTL, currentLang } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen pt-24 sm:pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#021813] via-[#04241d] to-[#031d17]"
    >
      {/* Background Islamic Radial Glows & Ambience */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] md:w-[850px] h-[350px] sm:h-[500px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 right-0 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Subtle Islamic Grid Dots Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#d4af37 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Grid: Mobile (stacked), Tablet (balanced), Desktop (2-column layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typography, Calligraphy, Mission Pitch & CTAs (col 7 on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-start z-10">
            
            {/* Top Bismillah & Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-950/90 via-[#06332a] to-emerald-950/90 border border-[#d4af37]/35 shadow-inner mb-4">
              <CrescentStarIcon className="w-4 h-4 text-[#e5c158]" />
              <span className="text-xs sm:text-sm font-arabic text-[#fae29c] tracking-wide" dir="rtl">
                {t.hero.bismillah}
              </span>
              <span className="hidden sm:inline text-[#d4af37]/50">•</span>
              <span className="hidden sm:inline text-xs font-semibold text-emerald-200 uppercase tracking-widest">
                {t.hero.welcomeBadge}
              </span>
            </div>

            {/* Academy Name in English & Urdu Calligraphy */}
            <div className="mb-2">
              <h1 className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-5xl text-white tracking-tight leading-[1.15]">
                {t.hero.mainTitlePrefix}{' '}
                <span className="text-gold-gradient block sm:inline">{t.hero.mainTitleHighlight}</span>
              </h1>
              <p
                className="font-urdu text-xl sm:text-2xl md:text-3xl text-[#fae29c] font-bold mt-1 tracking-wide"
                dir="rtl"
              >
                {ACADEMY_CONFIG.nameUrdu}
              </p>
            </div>

            {/* Main Punchy Slogan */}
            <div className="my-3 py-1.5 px-3.5 sm:px-4 rounded-xl bg-emerald-950/40 border-s-4 border-[#d4af37]">
              <p className="font-heading text-base sm:text-lg md:text-xl font-semibold text-[#f5d061] tracking-wide">
                “{currentLang === 'en' ? ACADEMY_CONFIG.tagline : t.hero.tagline}”
              </p>
              <p className="text-xs sm:text-sm font-urdu text-emerald-200/90 mt-0.5" dir="rtl">
                {ACADEMY_CONFIG.taglineUrdu}
              </p>
            </div>

            {/* Introduction Narrative */}
            <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {t.hero.intro}
            </p>

            {/* Quran Verse Inspiration */}
            <div className="mt-4 py-2 px-3 sm:px-4 rounded-xl bg-[#031d17]/80 border border-[#d4af37]/20 flex items-center gap-3 text-start">
              <IslamicStarIcon className="w-5 h-5 text-[#d4af37] shrink-0" />
              <div>
                <p className="font-quran text-sm sm:text-base text-[#e5c158]" dir="rtl">
                  «{t.hero.quranVerseArabic}»
                </p>
                <p className="text-[11px] sm:text-xs text-slate-400">
                  {t.hero.quranVerseTranslation}
                </p>
              </div>
            </div>

            {/* Core Trust Pillars Quick Chips */}
            <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-2.5 max-w-xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-900/40 text-emerald-200 border border-emerald-700/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#e5c158]" />
                {t.hero.badges.femaleTutors}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-900/40 text-emerald-200 border border-emerald-700/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#e5c158]" />
                {t.hero.badges.oneOnOne}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-900/40 text-emerald-200 border border-emerald-700/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#e5c158]" />
                {t.hero.badges.childPatience}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-900/40 text-emerald-200 border border-emerald-700/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#e5c158]" />
                {t.hero.badges.freeTrial}
              </span>
            </div>

            {/* Prominent Action CTA Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Primary CTA: Start Your Learning Journey */}
              <button
                type="button"
                onClick={() => onOpenAdmission()}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-heading font-bold text-sm md:text-base text-[#031d17] bg-gradient-to-r from-[#fae29c] via-[#d4af37] to-[#c59b27] hover:from-[#fff0b8] hover:via-[#e5c158] hover:to-[#d4af37] shadow-lg shadow-[#d4af37]/25 hover:shadow-xl hover:shadow-[#d4af37]/35 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className={`w-4 h-4 text-[#031d17] transition-transform duration-200 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </button>

              {/* Secondary CTA: Explore Our Services */}
              <button
                type="button"
                onClick={onExploreServices}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full font-heading font-medium text-sm md:text-base text-white bg-emerald-950/80 hover:bg-emerald-900 border border-[#d4af37]/40 hover:border-[#d4af37] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#e5c158]" />
                <span>{t.hero.ctaSecondary}</span>
              </button>
            </div>

            {/* Direct WhatsApp Quick Chat under CTA */}
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-300">
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{t.hero.admissionsOpen}</span>
              </span>
              <span>•</span>
              <a
                href={ACADEMY_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e5c158] hover:underline flex items-center gap-1 font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                {t.hero.whatsappConsultation}
              </a>
            </div>

          </div>

          {/* Right Column: Visual Composition inspired by reference image (col 5 on desktop) */}
          <div className="lg:col-span-5 flex justify-center items-center relative mt-4 lg:mt-0">
            
            {/* Islamic Outer Geometric Ring Frame */}
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-full aspect-[4/3] sm:aspect-square flex items-center justify-center perspective-1000">
              
              {/* Animated Glowing Ring & Crescent Halo */}
              <div className="absolute inset-2 sm:inset-4 rounded-3xl bg-gradient-to-tr from-[#063a2f] via-[#084b3d] to-[#04281f] border-2 border-[#d4af37]/35 shadow-2xl shadow-emerald-950/90 transform hover:scale-[1.01] transition-transform duration-500 overflow-hidden">
                
                {/* Visual Image with Quran & Golden Rehal */}
                <img
                  src={heroQuranImage}
                  alt="Al Faiz Noor UL Quran Academy Holy Quran and Islamic Artwork"
                  className="w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.05]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle emerald & gold gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#021813] via-transparent to-transparent opacity-80" />

                {/* Floating Bottom Card Over Image */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl bg-[#031d17]/90 backdrop-blur-md border border-[#d4af37]/30 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] sm:text-xs font-semibold text-[#e5c158] uppercase tracking-wider block">
                        Faith • Knowledge • Akhlaq
                      </span>
                      <p className="font-heading font-bold text-xs sm:text-sm text-white">
                        {ACADEMY_CONFIG.nameEnglish}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-emerald-900/60 border border-[#d4af37]/40 flex items-center justify-center">
                      <CrescentStarIcon className="w-5 h-5 text-[#d4af37]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating 3D Geometric Badge: Dedicated Female Teachers */}
              <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-gradient-to-br from-[#06332a] to-[#031d17] border border-[#d4af37]/50 rounded-2xl p-2.5 sm:p-3 shadow-xl backdrop-blur-md flex items-center gap-2 max-w-[210px] z-20">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#d4af37]/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#fae29c]" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold text-white leading-tight">
                    {t.hero.badges.femaleTutors}
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-emerald-300">
                    {t.hero.badges.femaleTutorsSub}
                  </p>
                </div>
              </div>

              {/* Floating 3D Geometric Badge: Kids Learning */}
              <div className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-4 bg-gradient-to-br from-[#06332a] to-[#031d17] border border-[#d4af37]/50 rounded-2xl p-2.5 sm:p-3 shadow-xl backdrop-blur-md flex items-center gap-2 max-w-[210px] z-20">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-4 h-4 text-emerald-300" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold text-white leading-tight">
                    {t.hero.badges.childPatience}
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-[#fae29c]">
                    {t.hero.badges.childPatienceSub}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
