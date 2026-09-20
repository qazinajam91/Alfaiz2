import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Sparkles, GraduationCap, Facebook } from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyData';
import { CrescentStarIcon, IslamicStarIcon } from './IslamicPattern';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface NavbarProps {
  onOpenAdmission: (preselectedCourse?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmission }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'gallery', 'faq', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home', id: 'home' },
    { label: t.nav.about, href: '#about', id: 'about' },
    { label: t.nav.services, href: '#services', id: 'services' },
    { label: t.nav.gallery, href: '#gallery', id: 'gallery' },
    { label: t.nav.faq, href: '#faq', id: 'faq' },
    { label: t.nav.contact, href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#031d17]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-[#d4af37]/20 py-2.5'
          : 'bg-gradient-to-b from-[#031d17]/95 via-[#031d17]/80 to-transparent py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 rounded-lg p-1"
            aria-label="Al Faiz Noor UL Quran Academy Home"
          >
            {/* Elegant Emblem Crest Icon */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#06332a] to-[#041f18] border border-[#d4af37]/40 flex items-center justify-center shadow-md shadow-emerald-950/50 group-hover:border-[#d4af37] transition-all shrink-0">
              <CrescentStarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4af37] transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 rounded-full border border-[#d4af37]/20 animate-pulse pointer-events-none" />
            </div>

            {/* Typography */}
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm sm:text-base md:text-lg text-white tracking-wide leading-tight group-hover:text-[#fae29c] transition-colors">
                Al Faiz Noor UL Quran
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] sm:text-xs text-[#d4af37] tracking-wider uppercase font-semibold">
                  Academy
                </span>
                <span className="text-[11px] sm:text-xs font-urdu text-emerald-200/90 hidden sm:inline" dir="rtl">
                  {ACADEMY_CONFIG.nameUrdu}
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation (Wide Screens) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                  activeSection === link.id
                    ? 'text-[#f5d061] font-semibold bg-emerald-950/50'
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#f5d061] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs (Desktop / Tablet) */}
          <div className="hidden md:flex items-center gap-2 lg:gap-2.5">
            {/* Language Selector Dropdown */}
            <LanguageSelector variant="desktop" />

            {/* Facebook Page Button */}
            <a
              href={ACADEMY_CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/40 hover:border-[#d4af37]/60 flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all cursor-pointer shadow-sm"
              title="Visit our official Facebook page"
              aria-label="Open Al Faiz Noor UL Quran Academy Facebook Page"
            >
              <Facebook className="w-4 h-4" />
            </a>

            {/* Quick WhatsApp Chat */}
            <a
              href={ACADEMY_CONFIG.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900/90 border border-emerald-600/40 hover:border-emerald-500 rounded-full transition-all shadow-sm"
              title="Click to start a private WhatsApp conversation"
              aria-label="Open WhatsApp Support"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden lg:inline">{t.nav.whatsapp}</span>
            </a>

            {/* Admission / Enroll Button */}
            <button
              type="button"
              onClick={() => onOpenAdmission()}
              className="relative group overflow-hidden px-4 lg:px-5 py-2 rounded-full font-heading text-xs sm:text-sm font-semibold tracking-wide text-[#031d17] bg-gradient-to-r from-[#fae29c] via-[#d4af37] to-[#c59b27] hover:brightness-110 shadow-md shadow-[#d4af37]/25 hover:shadow-lg hover:shadow-[#d4af37]/40 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-[#031d17]" />
              <span className="whitespace-nowrap">{t.nav.admissionBtn}</span>
            </button>
          </div>

          {/* Mobile Actions: Language & Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSelector variant="desktop" />

            <button
              type="button"
              onClick={() => onOpenAdmission()}
              className="px-3 py-1.5 text-xs font-heading font-bold text-[#031d17] bg-gradient-to-r from-[#fae29c] to-[#d4af37] rounded-full shadow-sm"
            >
              Enroll
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-emerald-200 hover:text-white bg-emerald-950/70 border border-emerald-700/40 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              aria-label={isOpen ? 'Close menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5 text-[#d4af37]" /> : <Menu className="w-5 h-5 text-[#d4af37]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Touch-friendly & fully accessible) */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[64px] bg-[#031d17]/98 backdrop-blur-2xl border-b border-[#d4af37]/35 shadow-2xl p-5 animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-70px)] overflow-y-auto">
          <div className="flex flex-col gap-2 pb-4">
            <div className="flex items-center justify-between pb-3 border-b border-emerald-800/30">
              <span className="text-xs font-urdu text-emerald-300" dir="rtl">
                {ACADEMY_CONFIG.nameUrdu}
              </span>
              <span className="text-xs text-[#d4af37] flex items-center gap-1">
                <IslamicStarIcon size={12} />
                {t.nav.onlineAcademy}
              </span>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-1.5 py-1" aria-label="Mobile Navigation Menu">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`min-h-[44px] flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-emerald-900/60 text-[#fae29c] border-l-4 border-[#d4af37]'
                      : 'text-slate-200 hover:bg-emerald-900/30 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {activeSection === link.id && <Sparkles className="w-4 h-4 text-[#d4af37]" />}
                </a>
              ))}
            </nav>

            {/* Mobile Language Selector Tabs */}
            <div className="pt-3 border-t border-emerald-800/40">
              <LanguageSelector variant="mobile" />
            </div>
          </div>

          {/* Bottom Action CTAs */}
          <div className="pt-3 border-t border-emerald-800/40 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenAdmission();
              }}
              className="min-h-[46px] w-full py-3 rounded-xl font-heading text-sm font-bold text-[#031d17] bg-gradient-to-r from-[#fae29c] via-[#d4af37] to-[#c59b27] shadow-lg shadow-[#d4af37]/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <GraduationCap className="w-5 h-5 text-[#031d17]" />
              {t.nav.admissionBtn}
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={ACADEMY_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-semibold text-emerald-200 bg-emerald-950 border border-emerald-700/50 flex items-center justify-center gap-1.5 hover:bg-emerald-900/50"
                aria-label="Open WhatsApp Support"
                title="Click to start a private WhatsApp conversation"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={ACADEMY_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-semibold text-blue-300 bg-emerald-950 border border-emerald-700/50 flex items-center justify-center gap-1.5 hover:bg-emerald-900/50"
                aria-label="Open Al Faiz Noor UL Quran Academy Facebook Page"
                title="Visit our official Facebook page"
              >
                <Facebook className="w-4 h-4 text-blue-400" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

