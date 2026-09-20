import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Search } from 'lucide-react';
import { FAQ_ITEMS, ACADEMY_CONFIG } from '../data/academyData';
import { IslamicDivider, IslamicStarIcon, CrescentStarIcon } from './IslamicPattern';
import { useLanguage } from '../i18n/LanguageContext';

export const FAQSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFAQ = (id: string) => {
    setOpenIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs = FAQ_ITEMS.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.questionUrdu.includes(searchQuery)
  );

  return (
    <section id="faq" className="relative py-20 bg-[#031d17]">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 border border-[#d4af37]/30 text-xs text-[#e5c158] font-medium mb-3">
            <HelpCircle size={14} className="text-[#d4af37]" />
            <span>Common Inquiries & Guidance</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-urdu text-xl sm:text-2xl text-[#fae29c] font-bold mt-1" dir="rtl">
            اکثر پوچھے جانے والے سوالات اور جوابات
          </p>

          <IslamicDivider className="my-5" />

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Everything you need to know about our courses, female tutors, age groups, online class setup, and admission process.
          </p>
        </div>

        {/* Search Input Filter */}
        <div className="mt-8 max-w-md mx-auto relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g., female teachers, children, timings)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-emerald-950/80 border border-emerald-700/40 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
          />
          <Search className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>

        {/* Accordion Questions List */}
        <div className="mt-10 space-y-3.5">
          {filteredFAQs.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-gradient-to-r from-[#06332a]/90 to-[#04241d]/90 border border-[#d4af37]/25 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1">
                    <span className="font-heading font-bold text-sm sm:text-base text-white hover:text-[#fae29c] transition-colors block">
                      {faq.question}
                    </span>
                    <span className="font-urdu text-xs sm:text-sm text-emerald-300/80 block mt-0.5" dir="rtl">
                      {faq.questionUrdu}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'bg-[#d4af37] text-[#031d17]' : 'bg-emerald-900/60 text-[#e5c158]'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-emerald-800/40 animate-in fade-in duration-200">
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFAQs.length === 0 && (
            <div className="text-center py-10 rounded-2xl bg-emerald-950/30 border border-emerald-800/30">
              <p className="text-sm text-slate-400">No matching questions found.</p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="mt-2 text-xs text-[#e5c158] hover:underline cursor-pointer"
              >
                Clear search filter
              </button>
            </div>
          )}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-emerald-950/60 border border-emerald-700/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading text-sm sm:text-base font-bold text-white">
              Have a custom question about your child's learning schedule?
            </h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Our coordinator is ready to assist you directly.
            </p>
          </div>
          <a
            href={ACADEMY_CONFIG.getWhatsAppUrl("General Question")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-emerald-200 bg-emerald-900 hover:bg-emerald-800 border border-emerald-600/40 flex items-center gap-2 whitespace-nowrap transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>{t.contact.whatsappNow}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
