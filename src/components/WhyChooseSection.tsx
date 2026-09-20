import React from 'react';
import {
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Smile,
  ShieldCheck,
  ListOrdered,
  UserCheck,
  Clock,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { WHY_CHOOSE_PILLARS } from '../data/academyData';
import { IslamicDivider, IslamicStarIcon } from './IslamicPattern';
import { useLanguage } from '../i18n/LanguageContext';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Smile,
  ShieldCheck,
  ListOrdered,
  UserCheck,
  Clock,
};

export const WhyChooseSection: React.FC<{ onOpenAdmission: () => void }> = ({ onOpenAdmission }) => {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="relative py-20 bg-[#031d17]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 border border-[#d4af37]/30 text-xs text-[#e5c158] font-medium mb-3">
            <Sparkles size={14} className="text-[#d4af37]" />
            <span>{t.whyUs.badge}</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {t.whyUs.title}
          </h2>
          <p className="font-urdu text-xl sm:text-2xl text-[#fae29c] font-bold mt-1" dir="rtl">
            الفائز نور القرآن اکیڈمی کا انتخاب کیوں کریں؟
          </p>

          <IslamicDivider className="my-5" />

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* 8 Feature Cards Grid: Mobile (1 col), Tablet (2 cols), Desktop (4 cols) */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_PILLARS.map((pillar) => {
            const IconComp = iconMap[pillar.iconName] || BookOpen;

            return (
              <div
                key={pillar.id}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-[#06332a] to-[#04241d] border border-[#d4af37]/25 hover:border-[#d4af37]/70 shadow-lg hover:shadow-2xl hover:shadow-emerald-950/80 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Badge & Corner Accent */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-900 to-[#04281f] border border-[#d4af37]/40 flex items-center justify-center text-[#fae29c] shadow-md group-hover:scale-110 group-hover:border-[#d4af37] transition-all">
                    <IconComp className="w-6 h-6 text-[#fae29c]" />
                  </div>

                  {pillar.badge && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-950/80 text-[#e5c158] border border-[#d4af37]/30">
                      {pillar.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#fae29c] transition-colors leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="font-urdu text-sm text-emerald-300 font-medium mt-0.5 mb-2.5" dir="rtl">
                    {pillar.titleUrdu}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-emerald-800/30 flex items-center justify-between text-[11px] text-emerald-300">
                  <span className="flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#e5c158]" />
                    Guaranteed Focus
                  </span>
                  <IslamicStarIcon size={12} className="text-[#d4af37]/50" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-[#06332a] to-emerald-950 border border-[#d4af37]/30 text-start flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
              Ready to begin with a Free Trial Class?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              Experience our supportive teaching style firsthand with no obligation.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenAdmission}
            className="w-full sm:w-auto px-6 py-3 rounded-full font-heading text-xs sm:text-sm font-bold text-[#031d17] bg-gradient-to-r from-[#fae29c] via-[#d4af37] to-[#c59b27] shadow-lg shadow-[#d4af37]/20 hover:brightness-110 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            Claim Your Free Assessment
          </button>
        </div>

      </div>
    </section>
  );
};
