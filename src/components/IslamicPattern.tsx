import React from 'react';

export const IslamicStarIcon: React.FC<{ className?: string; size?: number }> = ({ className = 'w-6 h-6 text-[#d4af37]', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* 8-pointed star (Rub el Hizb) */}
    <rect x="25" y="25" width="50" height="50" rx="4" fill="currentColor" fillOpacity="0.85" />
    <rect x="25" y="25" width="50" height="50" rx="4" transform="rotate(45 50 50)" fill="currentColor" fillOpacity="0.85" />
    <circle cx="50" cy="50" r="14" fill="#031d17" />
    <circle cx="50" cy="50" r="8" fill="currentColor" />
  </svg>
);

export const CrescentStarIcon: React.FC<{ className?: string; size?: number }> = ({ className = 'w-6 h-6 text-[#d4af37]', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Crescent Moon */}
    <path
      d="M48 18 A32 32 0 1 0 76 72 A26 26 0 1 1 48 18 Z"
      fill="currentColor"
    />
    {/* Five-pointed star */}
    <polygon
      points="68,36 71,44 80,44 73,49 76,57 68,52 61,57 64,49 57,44 66,44"
      fill="currentColor"
    />
  </svg>
);

export const IslamicDivider: React.FC<{ label?: string; labelUrdu?: string; className?: string }> = ({
  label,
  labelUrdu,
  className = 'my-8',
}) => {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <div className="h-[1px] w-16 sm:w-28 md:w-36 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-[#d4af37]" />
      <div className="flex items-center gap-2 text-[#d4af37]">
        <IslamicStarIcon size={18} className="text-[#d4af37] animate-pulse" />
        {label && (
          <span className="text-xs uppercase tracking-widest text-[#e5c158] font-medium font-sans px-1">
            {label}
          </span>
        )}
        {labelUrdu && (
          <span className="text-sm font-arabic text-[#e5c158] px-1" dir="rtl">
            {labelUrdu}
          </span>
        )}
        <IslamicStarIcon size={18} className="text-[#d4af37] animate-pulse" />
      </div>
      <div className="h-[1px] w-16 sm:w-28 md:w-36 bg-gradient-to-l from-transparent via-[#d4af37]/40 to-[#d4af37]" />
    </div>
  );
};

export const SubtlePatternOverlay: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none opacity-[0.04] ${className}`}
      style={{
        backgroundImage: `radial-gradient(#d4af37 1.5px, transparent 1.5px), radial-gradient(#10b981 1.5px, transparent 1.5px)`,
        backgroundSize: '40px 40px',
        backgroundPosition: '0 0, 20px 20px',
      }}
      aria-hidden="true"
    />
  );
};
