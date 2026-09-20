import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  ShieldCheck, 
  HandHeart, 
  Heart, 
  Maximize2, 
  X,
  Image as ImageIcon
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/academyData';
import { GalleryItem } from '../types';
import { IslamicDivider, IslamicStarIcon, CrescentStarIcon } from './IslamicPattern';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  BookOpen,
  Sparkles,
  ShieldCheck,
  HandHeart,
  Heart,
};

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [previewItem, setPreviewItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Highlights' },
    { id: 'quran-reading', label: 'Quran Recitation' },
    { id: 'classroom', label: 'Classroom & Qaida' },
    { id: 'tajweed', label: 'Tajweed Sessions' },
    { id: 'events', label: 'Duas & Tarbiyah' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="relative py-20 bg-[#031d17]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 border border-[#d4af37]/30 text-xs text-[#e5c158] font-medium mb-3">
            <ImageIcon size={14} className="text-[#d4af37]" />
            <span>Academy Highlights & Atmosphere</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Academy Activities & Learning Showcase
          </h2>
          <p className="font-urdu text-xl sm:text-2xl text-[#fae29c] font-bold mt-1" dir="rtl">
            تعلیمی سرگرمیاں اور تصویری جھلکیاں
          </p>

          <IslamicDivider className="my-5" />

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            A glimpse into our focused learning atmosphere, individualized teaching spaces, and sacred Quranic studies.
            <em> Note: Dedicated image placeholders crafted with authentic Islamic calligraphy and verses.</em>
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#d4af37] text-[#031d17] font-bold shadow-md shadow-[#d4af37]/20'
                  : 'bg-emerald-950/60 text-slate-300 hover:text-white border border-emerald-800/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid: Mobile (1 col), Tablet (2 cols), Desktop (3 cols) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredItems.map((item) => {
            const Icon = iconMap[item.iconName] || BookOpen;

            return (
              <div
                key={item.id}
                onClick={() => setPreviewItem(item)}
                className="group relative rounded-2xl overflow-hidden border border-[#d4af37]/30 hover:border-[#d4af37] shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-b from-[#06332a] to-[#04241d]"
              >
                {/* Visual Aspect Ratio Container with Islamic Art Motif */}
                <div className={`relative w-full aspect-[16/10] bg-gradient-to-br ${item.gradient} p-6 flex flex-col justify-between items-center text-center overflow-hidden`}>
                  
                  {/* Subtle Background Geometric Dots */}
                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: `radial-gradient(#d4af37 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }}
                  />

                  {/* Top Badge */}
                  <div className="relative z-10 w-full flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#031d17]/80 text-[#fae29c] border border-[#d4af37]/40">
                      Al Faiz Academy
                    </span>
                    <IslamicStarIcon size={14} className="text-[#d4af37]/60" />
                  </div>

                  {/* Center Quranic Verse Quote in Arabic */}
                  <div className="relative z-10 my-auto py-2 px-3">
                    <div className="w-12 h-12 mx-auto rounded-full bg-[#031d17]/60 border border-[#d4af37]/40 flex items-center justify-center text-[#fae29c] mb-2 shadow-inner group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#fae29c]" />
                    </div>
                    {item.verseQuote && (
                      <p className="font-quran text-base sm:text-lg text-[#fae29c] font-bold tracking-wide" dir="rtl">
                        «{item.verseQuote}»
                      </p>
                    )}
                  </div>

                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 bg-[#031d17]/85 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-[2px]">
                    <Maximize2 className="w-4 h-4 text-[#d4af37]" />
                    <span>Click to View Details</span>
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-5">
                  <h3 className="font-heading text-base sm:text-lg font-bold text-white group-hover:text-[#fae29c] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-urdu text-xs sm:text-sm text-emerald-300 font-medium mb-2" dir="rtl">
                    {item.titleUrdu}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Preview Modal */}
      {previewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-gradient-to-b from-[#06332a] to-[#031d17] rounded-3xl border border-[#d4af37]/50 shadow-2xl p-6 sm:p-8">
            <button
              type="button"
              onClick={() => setPreviewItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-300 hover:text-white bg-emerald-900/50 hover:bg-emerald-900 border border-emerald-700/40 cursor-pointer"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className={`w-full aspect-[16/10] rounded-2xl bg-gradient-to-br ${previewItem.gradient} p-6 flex flex-col justify-center items-center text-center mb-5 border border-[#d4af37]/40 shadow-inner`}>
              <IslamicStarIcon size={32} className="text-[#d4af37] mb-3 animate-pulse" />
              {previewItem.verseQuote && (
                <p className="font-quran text-2xl text-[#fae29c] font-bold mb-2" dir="rtl">
                  «{previewItem.verseQuote}»
                </p>
              )}
              <span className="text-xs font-semibold text-emerald-200">
                Al Faiz Noor UL Quran Academy
              </span>
            </div>

            <h3 className="font-heading text-xl font-bold text-white mb-1">
              {previewItem.title}
            </h3>
            <p className="font-urdu text-base text-emerald-300 mb-3" dir="rtl">
              {previewItem.titleUrdu}
            </p>
            <p className="text-sm text-slate-200 leading-relaxed mb-5">
              {previewItem.description}
            </p>

            <button
              type="button"
              onClick={() => setPreviewItem(null)}
              className="w-full py-2.5 rounded-xl text-xs font-heading font-semibold text-[#031d17] bg-[#d4af37] hover:brightness-110 cursor-pointer"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
