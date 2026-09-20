import React from 'react';
import { Star, MessageSquare, Quote, Heart } from 'lucide-react';
import { TESTIMONIAL_ITEMS, ACADEMY_CONFIG } from '../data/academyData';
import { IslamicDivider, IslamicStarIcon, CrescentStarIcon } from './IslamicPattern';
import { useLanguage } from '../i18n/LanguageContext';

export const TestimonialsSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative py-20 bg-[#021813] border-t border-[#d4af37]/20">
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-emerald-700/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 border border-[#d4af37]/30 text-xs text-[#e5c158] font-medium mb-3">
            <Heart size={14} className="text-[#d4af37]" />
            <span>Community Feedback & Voices</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Parent & Student Experiences
          </h2>
          <p className="font-urdu text-xl sm:text-2xl text-[#fae29c] font-bold mt-1" dir="rtl">
            والدین اور طلباء کے تاثرات
          </p>

          <IslamicDivider className="my-5" />

          {/* Explicit Honest Badge as requested */}
          <div className="inline-block px-3 py-1 rounded-lg bg-emerald-900/30 border border-emerald-700/30 text-[11px] text-emerald-300 mb-4">
            ✨ Note: Sample reviews from community families. You can update or replace them anytime in <code>src/data/academyData.ts</code>.
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Building trust with parents and students arriving from social media. Read how our caring teachers and dedicated female tutors bring peace of mind to households.
          </p>
        </div>

        {/* Testimonials Cards Grid: Mobile (1 col), Tablet (2 cols), Desktop (4 cols) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIAL_ITEMS.map((item) => (
            <div
              key={item.id}
              className="relative p-6 rounded-2xl bg-gradient-to-b from-[#06332a] to-[#04241d] border border-[#d4af37]/25 hover:border-[#d4af37]/60 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Quote & Rating Stars */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#e5c158]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-[#fae29c]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#d4af37]/30" />
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic mb-4">
                  "{item.feedback}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-emerald-800/40">
                <p className="font-heading font-bold text-sm text-white">
                  {item.studentOrParent}
                </p>
                <div className="flex items-center justify-between mt-0.5">
                  <span className="text-[11px] text-[#e5c158] font-medium">
                    {item.role}
                  </span>
                  <span className="text-[10px] text-slate-400 font-urdu" dir="rtl">
                    {item.roleUrdu}
                  </span>
                </div>
                <div className="mt-1 flex items-center justify-between text-[10px] text-emerald-300/80">
                  <span>{item.courseEnrolled}</span>
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Parent Feedback Prompt CTA */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400">
            Are you an enrolled family? We cherish your reviews!{' '}
            <a
              href={ACADEMY_CONFIG.getWhatsAppUrl("Parent Feedback")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e5c158] hover:underline font-semibold"
            >
              Share your thoughts on WhatsApp
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
