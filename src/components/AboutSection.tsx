import React from 'react';
import { Target, Eye, CheckCircle2, Code2 } from 'lucide-react';
import { ACADEMY_CONFIG, ABOUT_CONTENT } from '../data/academyData';
import { IslamicDivider, IslamicStarIcon, CrescentStarIcon } from './IslamicPattern';
import { useLanguage } from '../i18n/LanguageContext';

// Generated academy crest seal image
import crestSealImage from '../assets/images/academy_crest_seal_1789210273438.jpg';

export const AboutSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="relative py-20 bg-[#021813] border-t border-[#d4af37]/20">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-emerald-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 border border-[#d4af37]/30 text-xs text-[#e5c158] font-medium mb-3">
            <CrescentStarIcon size={14} className="text-[#d4af37]" />
            <span>{t.about.badge}</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {t.about.title}
          </h2>
          <p className="font-urdu text-xl sm:text-2xl text-[#fae29c] font-bold mt-1" dir="rtl">
            {ACADEMY_CONFIG.nameUrdu} کا تعارف اور مقصد
          </p>

          <IslamicDivider className="my-5" />

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        {/* 2-Column Story: Crest & Identity on Left, Mission/Vision on Right */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Visual Crest Emblem Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm aspect-square rounded-3xl bg-gradient-to-br from-[#06332a] via-[#04241d] to-[#021813] border-2 border-[#d4af37]/40 p-3 shadow-2xl shadow-emerald-950/80 group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img
                  src={crestSealImage}
                  alt="Al Faiz Noor UL Quran Academy Crest Emblem Seal"
                  className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.04] group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031d17] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Medallion */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#031d17] border border-[#d4af37]/60 shadow-xl flex items-center gap-2 whitespace-nowrap">
                <IslamicStarIcon size={14} className="text-[#d4af37]" />
                <span className="text-xs font-heading font-semibold text-[#fae29c]">
                  Authentic Quranic Tarbiyah
                </span>
              </div>
            </div>

            <div className="text-center mt-6 max-w-xs">
              <p className="font-quran text-base text-emerald-300" dir="rtl">
                «خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ»
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                "The best among you are those who learn the Quran and teach it."
              </p>
            </div>
          </div>

          {/* Right Column: Mission, Vision & Educational Values */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Mission Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#06332a]/80 to-[#031d17] border border-[#d4af37]/30 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-900/80 border border-[#d4af37]/40 flex items-center justify-center text-[#fae29c]">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                    {t.about.missionTitle}
                  </h3>
                  <span className="font-urdu text-xs text-[#fae29c]" dir="rtl">ہمارا مشن</span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {ABOUT_CONTENT.mission}
              </p>
            </div>

            {/* Vision Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#06332a]/80 to-[#031d17] border border-[#d4af37]/30 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-900/80 border border-[#d4af37]/40 flex items-center justify-center text-[#fae29c]">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                    {t.about.visionTitle}
                  </h3>
                  <span className="font-urdu text-xs text-[#fae29c]" dir="rtl">ہمارا وژن</span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {ABOUT_CONTENT.vision}
              </p>
            </div>

          </div>

        </div>

        {/* Educational Approach: 4 Cards */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Our Educational Approach & Principles
            </h3>
            <p className="font-urdu text-base text-[#e5c158] mt-1" dir="rtl">
              ہمارا تعلیمی و تربیتی طریقہ کار
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ABOUT_CONTENT.educationalApproach.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#04251e] border border-emerald-800/40 hover:border-[#d4af37]/40 transition-colors shadow-md"
              >
                <div className="flex items-center gap-2 mb-2">
                  <IslamicStarIcon size={14} className="text-[#e5c158]" />
                  <span className="text-xs font-semibold text-[#fae29c] uppercase tracking-wider">
                    Principle 0{idx + 1}
                  </span>
                </div>
                <h4 className="font-heading text-base font-bold text-white mb-1">
                  {item.title}
                </h4>
                <p className="font-urdu text-xs text-emerald-300 mb-2" dir="rtl">
                  {item.titleUrdu}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Islamic Education Matters Section */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/80 via-[#06332a] to-emerald-950/80 border border-[#d4af37]/30 shadow-xl">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
              Why Islamic Education Matters in the Modern Age
            </h3>
            <p className="font-urdu text-sm sm:text-base text-[#e5c158] mt-1" dir="rtl">
              آج کے دور میں اسلامی تعلیم کی اہمیت
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {ABOUT_CONTENT.whyIslamicEducationMatters.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#031d17]/70 border border-emerald-800/30">
                <CheckCircle2 className="w-5 h-5 text-[#fae29c] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Digital Learning Platform Attribution */}
        <div className="mt-12 pt-6 border-t border-emerald-800/30 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-[#031d17]/60 border border-[#d4af37]/20">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-9 h-9 rounded-xl bg-emerald-950/80 border border-[#d4af37]/30 flex items-center justify-center text-[#fae29c] shrink-0">
              <Code2 className="w-4 h-4 text-[#d4af37]" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block font-medium">
                Academy Digital Infrastructure & Experience
              </span>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 mt-0.5 text-xs">
                <span className="text-slate-300">{ACADEMY_CONFIG.developerCredit.intro}</span>
                <span className="font-heading font-bold text-[#fae29c] hover:text-[#fde68a] transition-colors">
                  {ACADEMY_CONFIG.developerCredit.name}
                </span>
                <span className="text-emerald-500">•</span>
                <span className="text-emerald-400 font-medium text-[11px] uppercase tracking-wider">
                  {ACADEMY_CONFIG.developerCredit.title}
                </span>
              </div>
            </div>
          </div>
          <div className="text-center sm:text-right text-[11px] text-slate-400">
            <span>Crafted for private, accessible online Quran study</span>
          </div>
        </div>

      </div>
    </section>
  );
};
