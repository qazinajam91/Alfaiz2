import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { CrescentStarIcon, IslamicStarIcon, IslamicDivider } from './IslamicPattern';
import { ACADEMY_CONFIG } from '../data/academyData';

export const NotFoundView: React.FC<{ onReturnHome: () => void }> = ({ onReturnHome }) => {
  return (
    <div className="min-h-screen bg-[#021813] flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center p-8 rounded-3xl bg-gradient-to-b from-[#06332a] to-[#04241d] border-2 border-[#d4af37]/40 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-emerald-950 border border-[#d4af37]/50 flex items-center justify-center mx-auto mb-4 text-[#fae29c]">
          <CrescentStarIcon size={32} />
        </div>

        <h1 className="font-heading text-4xl font-extrabold text-[#fae29c] mb-1">
          404
        </h1>
        <h2 className="font-heading text-lg font-bold text-white mb-2">
          Page Not Found
        </h2>
        <p className="font-arabic text-sm text-emerald-300 mb-4" dir="rtl">
          معذرت، مطلوبہ صفحہ دستیاب نہیں ہے
        </p>

        <p className="text-xs text-slate-300 mb-6 leading-relaxed">
          The page you are looking for might have been moved or does not exist. Please return to the homepage of {ACADEMY_CONFIG.nameEnglish}.
        </p>

        <button
          onClick={onReturnHome}
          className="w-full py-3 rounded-full font-heading text-xs font-bold text-[#031d17] bg-gradient-to-r from-[#fae29c] via-[#d4af37] to-[#c59b27] shadow-lg flex items-center justify-center gap-2 cursor-pointer"
        >
          <Home className="w-4 h-4 text-[#031d17]" />
          <span>Return to Academy Homepage</span>
        </button>
      </div>
    </div>
  );
};
