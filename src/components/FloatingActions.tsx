import React from 'react';
import { MessageCircle, GraduationCap } from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyData';

export const FloatingActions: React.FC<{ onOpenAdmission: () => void }> = ({ onOpenAdmission }) => {
  return (
    <aside aria-label="Quick Actions" className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col gap-2.5 items-end">
      {/* Quick Admission Floating Pill (Mobile/Tablet highlight) */}
      <button
        onClick={onOpenAdmission}
        className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full font-heading text-xs font-bold text-[#031d17] bg-gradient-to-r from-[#fae29c] via-[#d4af37] to-[#c59b27] shadow-xl shadow-[#d4af37]/30 hover:scale-105 active:scale-95 transition-all border border-[#fae29c]/50 cursor-pointer"
        aria-label="Open admission enrollment form"
      >
        <GraduationCap className="w-4 h-4 text-[#031d17]" />
        <span className="hidden sm:inline">Free Assessment</span>
        <span className="sm:hidden">Enroll</span>
      </button>

      {/* Floating WhatsApp Button */}
      <a
        href={ACADEMY_CONFIG.getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/80 hover:scale-110 active:scale-95 transition-all border-2 border-emerald-300/40"
        aria-label="Open WhatsApp Support"
        title="Open WhatsApp Support"
      >
        <MessageCircle className="w-6 h-6" />
        {/* Subtle pulsing beacon */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400" />
        </span>
      </a>
    </aside>
  );
};
