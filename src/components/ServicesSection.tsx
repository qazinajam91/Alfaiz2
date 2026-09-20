import React, { useState } from 'react';
import { 
  BookOpen, 
  BookMarked, 
  Sparkles, 
  Crown, 
  Languages, 
  HeartHandshake, 
  ShieldCheck, 
  GraduationCap, 
  Compass, 
  HandHeart, 
  Feather, 
  Library, 
  MonitorCheck, 
  CalendarCheck,
  ArrowRight,
  Info,
  Clock,
  CheckCircle2,
  X
} from 'lucide-react';
import { ACADEMY_SERVICES } from '../data/academyData';
import { ServiceItem } from '../types';
import { IslamicDivider, IslamicStarIcon } from './IslamicPattern';
import { useLanguage } from '../i18n/LanguageContext';

// Icon resolver map
const iconMap: Record<string, React.FC<{ className?: string }>> = {
  BookOpen,
  BookMarked,
  Sparkles,
  Crown,
  Languages,
  HeartHandshake,
  ShieldCheck,
  GraduationCap,
  Compass,
  HandHeart,
  Feather,
  Library,
  MonitorCheck,
  CalendarCheck,
};

interface ServicesSectionProps {
  onSelectServiceForInquiry: (courseTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForInquiry }) => {
  const { t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedServiceForDetails, setSelectedServiceForDetails] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: t.services.allCourses, labelUrdu: 'تمام کورسز' },
    { id: 'foundation', label: t.services.foundation, labelUrdu: 'بنیادی قاعدہ' },
    { id: 'quran', label: t.services.quranTajweed, labelUrdu: 'قرآن و تجوید' },
    { id: 'specialized', label: t.services.kidsWomen, labelUrdu: 'بچے و خواتین' },
    { id: 'islamic-studies', label: t.services.deenyatEthics, labelUrdu: 'دینیات و اخلاقیات' },
  ];

  const filteredServices = activeCategory === 'all'
    ? ACADEMY_SERVICES
    : ACADEMY_SERVICES.filter(service => service.category === activeCategory);

  return (
    <section id="services" className="relative py-20 bg-[#031d17]">
      {/* Subtle Background Ambience */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-700/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 border border-[#d4af37]/30 text-xs text-[#e5c158] font-medium mb-3">
            <IslamicStarIcon size={14} className="text-[#d4af37]" />
            <span>{t.services.badge}</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {t.services.title}
          </h2>
          <p className="font-urdu text-xl sm:text-2xl text-[#fae29c] font-bold mt-1" dir="rtl">
            جامع اور منظم قرآنی و اسلامی کورسز
          </p>

          <IslamicDivider className="my-5" />

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#fae29c] via-[#d4af37] to-[#c59b27] text-[#031d17] font-bold shadow-md shadow-[#d4af37]/25'
                  : 'bg-emerald-950/70 text-slate-300 hover:text-white hover:bg-emerald-900/60 border border-emerald-800/40'
              }`}
            >
              <span>{cat.label}</span>
              <span className="font-urdu text-[11px] opacity-85" dir="rtl">({cat.labelUrdu})</span>
            </button>
          ))}
        </div>

        {/* Services Cards Grid: Mobile (1 col), Tablet (2 cols), Desktop (3 cols) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || BookOpen;

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-gradient-to-b from-[#06332a] to-[#04241d] border border-[#d4af37]/25 hover:border-[#d4af37]/70 shadow-lg hover:shadow-2xl hover:shadow-emerald-950/80 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Islamic Top Border Glow */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent group-hover:via-[#fae29c] transition-all" />

                <div className="p-6">
                  {/* Top Bar: Icon & Audience Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-900 to-[#04281f] border border-[#d4af37]/40 flex items-center justify-center text-[#fae29c] shadow-md group-hover:scale-105 group-hover:border-[#d4af37] transition-all">
                      <IconComponent className="w-6 h-6 text-[#fae29c]" />
                    </div>

                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-900/60 text-[#fae29c] border border-[#d4af37]/30">
                      {service.targetBadge}
                    </span>
                  </div>

                  {/* Title in English & Urdu */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-[#fae29c] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-urdu text-sm sm:text-base text-emerald-300 font-medium mt-1 mb-3" dir="rtl">
                    {service.titleUrdu}
                  </p>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-3 border-t border-emerald-800/30">
                    {service.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#e5c158] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 border-t border-emerald-800/30 mt-4 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedServiceForDetails(service)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-emerald-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-[#e5c158]" />
                    <span>{t.services.learnMore}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectServiceForInquiry(service.title)}
                    className="px-4 py-2 rounded-xl text-xs font-heading font-semibold text-[#031d17] bg-gradient-to-r from-[#fae29c] via-[#d4af37] to-[#c59b27] hover:brightness-110 shadow-md shadow-[#d4af37]/20 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{t.services.inquireNow}</span>
                    <ArrowRight className={`w-3.5 h-3.5 text-[#031d17] ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Course Detail Modal */}
      {selectedServiceForDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-gradient-to-b from-[#06332a] to-[#031d17] rounded-3xl border border-[#d4af37]/40 shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedServiceForDetails(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-300 hover:text-white bg-emerald-900/50 hover:bg-emerald-900 border border-emerald-700/40 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-900 border border-[#d4af37]/40 flex items-center justify-center text-[#fae29c]">
                <IslamicStarIcon size={20} />
              </div>
              <div>
                <span className="text-xs text-[#e5c158] font-semibold uppercase tracking-wider">
                  {selectedServiceForDetails.targetBadge}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                  {selectedServiceForDetails.title}
                </h3>
              </div>
            </div>

            <p className="font-urdu text-lg text-emerald-300 mb-4" dir="rtl">
              {selectedServiceForDetails.titleUrdu}
            </p>

            <div className="p-4 rounded-xl bg-[#031d17]/80 border border-emerald-800/40 mb-5">
              <p className="text-sm text-slate-200 leading-relaxed">
                {selectedServiceForDetails.fullDesc}
              </p>
            </div>

            {/* Syllabus Highlights */}
            <div className="mb-5">
              <h4 className="text-xs font-semibold text-[#fae29c] uppercase tracking-wider mb-2.5">
                Key Learning Outcomes & Focus Areas:
              </h4>
              <div className="space-y-2">
                {selectedServiceForDetails.highlights.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#e5c158] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Duration & Level */}
            <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/30 mb-6 text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#e5c158]" />
                <div>
                  <span className="text-slate-400 block">Duration</span>
                  <strong className="text-white">{selectedServiceForDetails.durationRecommended}</strong>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#e5c158]" />
                <div>
                  <span className="text-slate-400 block">Proficiency Level</span>
                  <strong className="text-white">{selectedServiceForDetails.level}</strong>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  const title = selectedServiceForDetails.title;
                  setSelectedServiceForDetails(null);
                  onSelectServiceForInquiry(title);
                }}
                className="w-full sm:flex-1 py-3 rounded-xl font-heading text-sm font-bold text-[#031d17] bg-gradient-to-r from-[#fae29c] via-[#d4af37] to-[#c59b27] shadow-lg shadow-[#d4af37]/25 flex items-center justify-center gap-2 cursor-pointer hover:brightness-110"
              >
                <span>{t.services.inquireNow}</span>
                <ArrowRight className={`w-4 h-4 text-[#031d17] ${isRTL ? 'rotate-180' : ''}`} />
              </button>

              <button
                type="button"
                onClick={() => setSelectedServiceForDetails(null)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-emerald-900/40 border border-emerald-800/50 cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
