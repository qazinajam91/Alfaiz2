import React from 'react';
import { BookOpen, Heart, Sparkles, Shield, Compass, UserCheck } from 'lucide-react';
import { ACADEMY_CONFIG, ABOUT_CONTENT } from '../data/academyData';
import { IslamicDivider, IslamicStarIcon, CrescentStarIcon } from './IslamicPattern';

export const PhilosophyBanner: React.FC = () => {
  const pillars = [
    {
      icon: BookOpen,
      title: 'Sacred Quranic Literacy',
      titleUrdu: 'قرآنی علوم و تلاوت',
      description: 'Nurturing precise recitation from initial Arabic Makharij (pronunciation points) to melodious Tajweed and understanding.',
    },
    {
      icon: Heart,
      title: 'Character & Manners (Adab)',
      titleUrdu: 'حسنِ اخلاق و اسلامی آداب',
      description: 'Knowledge is perfected through character. We actively instill respect for parents, honesty, kindness, and prophetic etiquette.',
    },
    {
      icon: Compass,
      title: 'Authentic Islamic Beliefs',
      titleUrdu: 'صحیح اسلامی عقائد',
      description: 'Cultivating sound Aqeedah rooted in the Quran and Sunnah, building a resilient and grounded young Muslim identity.',
    },
    {
      icon: Shield,
      title: 'Dignified Space for Women',
      titleUrdu: 'خواتین کے لیے پردہ دار تعلیم',
      description: 'Providing sisters and young girls a comfortable, private online setting guided by compassionate female Quran teachers.',
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-[#021813] border-y border-[#d4af37]/20">
      {/* Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/40 via-[#052c23]/30 to-emerald-950/40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-[#d4af37]/30 text-xs text-[#e5c158] font-medium mb-3">
            <CrescentStarIcon size={14} className="text-[#d4af37]" />
            <span>Our Educational Purpose & Philosophy</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Illuminating Hearts with the Light of the Quran
          </h2>
          <p className="font-urdu text-lg sm:text-xl text-[#e5c158] font-bold mt-1" dir="rtl">
            نورِ قرآن سے دلوں کو منور کرنا اور اخلاق کو سنوارنا
          </p>

          <IslamicDivider className="my-5" />

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            At <strong>{ACADEMY_CONFIG.nameEnglish}</strong>, we believe that learning the Holy Quran is not merely an academic task, but a sacred spiritual transformation. Our mission is to make authentic Quran recitation, foundational Deenyat, and moral Tarbiyah easily accessible, joyful, and deeply impactful for children and women worldwide.
          </p>
        </div>

        {/* 4 Pillars Grid: Mobile (1 col), Tablet (2 cols), Desktop (4 cols) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-[#06332a]/90 to-[#031d17] border border-[#d4af37]/25 hover:border-[#d4af37]/60 shadow-lg hover:shadow-xl hover:shadow-emerald-950/50 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Corner Decorative Star */}
                <div className="absolute top-3 right-3 opacity-20 group-hover:opacity-60 transition-opacity">
                  <IslamicStarIcon size={16} />
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-900 to-[#04281f] border border-[#d4af37]/40 flex items-center justify-center text-[#fae29c] shadow-md mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-[#fae29c]" />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#fae29c] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-urdu text-sm text-emerald-300/90 font-medium mb-2" dir="rtl">
                    {item.titleUrdu}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-emerald-800/30 flex items-center justify-between text-[11px] text-[#e5c158]">
                  <span className="font-medium tracking-wide">Pillar 0{idx + 1}</span>
                  <IslamicStarIcon size={12} className="text-[#d4af37]/50" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
