import React, { useState, useEffect } from 'react';
import { Sun, Moon, Globe, SlidersHorizontal, Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { Language, Theme } from '../types/portfolio';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  currentTheme: Theme;
  onThemeToggle: () => void;
  onOpenCustomizer: () => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  currentTheme,
  onThemeToggle,
  onOpenCustomizer,
  onOpenResumeModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scroll spy for active section
      const sections = ['hero', 'about', 'journey', 'skills', 'projects', 'achievements', 'credentials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = portfolioData.navigation;
  const t = portfolioData.translations[currentLang];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-6xl transition-all duration-500 rounded-full border ${
          scrolled
            ? currentTheme === 'light'
              ? 'bg-[#FFFFFF]/92 backdrop-blur-xl border-[#0F172A]/10 shadow-[0_10px_30px_rgba(15,23,42,0.08)] py-2'
              : 'bg-[#090A0F]/88 backdrop-blur-xl border-[#38BDF8]/20 shadow-[0_12px_40px_rgba(0,0,0,0.8)] py-2'
            : 'bg-transparent border-transparent py-3'
        } ${currentTheme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'}`}
      >
        <div className="flex items-center justify-between px-3 sm:px-6">
          {/* Zone 1: Monogram Wordmark with RGB tri-color emblem */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-full px-1"
            aria-label="Aditya Yadav Portfolio Home"
          >
            <div className="relative w-8 h-8 rounded-full border border-[#38BDF8]/40 flex items-center justify-center bg-[#121624] group-hover:border-[#10B981] group-hover:shadow-[0_0_12px_rgba(56,189,248,0.4)] transition-all">
              <span className="font-heading text-xs font-bold tracking-wider">
                <span className="text-[#38BDF8]">A</span>
                <span className="text-[#F43F5E]">Y</span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-sm tracking-tight hidden sm:inline leading-none">
                Aditya Yadav
              </span>
              <span className="text-[10px] text-[#94A3B8] font-mono tracking-wider hidden md:inline mt-0.5">
                <span className="text-[#F43F5E]">R</span>
                <span className="text-[#38BDF8]">G</span>
                <span className="text-[#10B981]">B</span> &middot; PORTFOLIO
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links with Animated Active Indicator */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-medium tracking-wide bg-black/25 dark:bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`relative px-3 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap text-xs ${
                    isActive
                      ? currentTheme === 'light'
                        ? 'text-[#0284C7] font-bold bg-[#0284C7]/10'
                        : 'text-[#38BDF8] font-bold bg-[#38BDF8]/15 shadow-[0_0_12px_rgba(56,189,248,0.25)]'
                      : currentTheme === 'light'
                        ? 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                        : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5'
                  }`}
                >
                  {currentLang === 'hi' ? item.labelHi : item.labelEn}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-0.5 rounded-full bg-gradient-to-r from-[#F43F5E] via-[#38BDF8] to-[#10B981]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Interactive Controls (Language, Theme, Resume, Settings) */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={() => onLanguageChange(currentLang === 'en' ? 'hi' : 'en')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] ${
                currentTheme === 'light'
                  ? 'border-slate-200 text-slate-700 hover:border-[#0284C7] hover:bg-slate-100'
                  : 'border-white/10 text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#38BDF8]/50 hover:bg-white/5'
              }`}
              title={currentLang === 'en' ? 'Switch to Hindi (हिन्दी)' : 'Switch to English'}
              aria-label="Switch language between English and Hindi"
            >
              <Globe className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span className="font-semibold uppercase text-[11px]">
                {currentLang === 'en' ? 'हिन्दी' : 'EN'}
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={onThemeToggle}
              className={`p-2 rounded-full border transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F43F5E] ${
                currentTheme === 'light'
                  ? 'border-slate-200 text-slate-700 hover:border-[#E11D48] hover:bg-slate-100'
                  : 'border-white/10 text-[#94A3B8] hover:text-[#F43F5E] hover:border-[#F43F5E]/50 hover:bg-white/5'
              }`}
              title={t.switchTheme}
              aria-label="Toggle dark and light theme"
            >
              {currentTheme === 'dark' ? (
                <Sun className="w-3.5 h-3.5 text-[#F43F5E]" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-slate-700" />
              )}
            </button>

            {/* Profile Preferences / Readiness Drawer */}
            <button
              onClick={onOpenCustomizer}
              className={`p-2 rounded-full border transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#10B981] ${
                currentTheme === 'light'
                  ? 'border-slate-200 text-slate-700 hover:border-[#059669] hover:bg-slate-100'
                  : 'border-white/10 text-[#94A3B8] hover:text-[#10B981] hover:border-[#10B981]/50 hover:bg-white/5'
              }`}
              title={t.profileCustomizerTitle}
              aria-label="Open portfolio profile preferences and readiness status"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
            </button>

            {/* Quick Resume View CTA Button with Red-Blue-Green shine */}
            <button
              onClick={onOpenResumeModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r from-[#10B981] to-[#38BDF8] text-[#090A0F] hover:opacity-95 transition-all shadow-[0_0_15px_rgba(56,189,248,0.35)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] whitespace-nowrap active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.viewResume}</span>
              <ArrowUpRight className="w-3 h-3 opacity-80" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-full border transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] ${
                currentTheme === 'light'
                  ? 'border-slate-200 text-slate-800'
                  : 'border-white/10 text-[#94A3B8] hover:text-[#F8FAFC]'
              }`}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 lg:hidden bg-black/80 backdrop-blur-md flex flex-col justify-end pt-20 pb-6 px-4 animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className={`w-full max-w-md mx-auto rounded-3xl p-6 border shadow-2xl transition-all ${
              currentTheme === 'light'
                ? 'bg-white border-slate-200 text-slate-900'
                : 'bg-[#121624] border-[#38BDF8]/20 text-[#F8FAFC]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#090A0F] border border-[#38BDF8]/40 flex items-center justify-center font-heading text-xs font-bold">
                  <span className="text-[#38BDF8]">A</span>
                  <span className="text-[#F43F5E]">Y</span>
                </span>
                <span className="font-heading font-semibold text-sm">Aditya Yadav</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-[#94A3B8] hover:text-[#F8FAFC]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 py-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={`px-3.5 py-2.5 text-sm font-medium rounded-xl transition-colors flex items-center justify-between ${
                      isActive
                        ? currentTheme === 'light'
                          ? 'bg-[#0284C7]/10 text-[#0284C7] font-bold'
                          : 'bg-[#38BDF8]/15 text-[#38BDF8] font-bold'
                        : currentTheme === 'light'
                          ? 'hover:bg-slate-100 text-slate-700'
                          : 'hover:bg-white/5 text-[#94A3B8] hover:text-[#F8FAFC]'
                    }`}
                  >
                    <span>{currentLang === 'hi' ? item.labelHi : item.labelEn}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#F43F5E] via-[#38BDF8] to-[#10B981]" />}
                  </a>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-white/10 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#10B981] to-[#38BDF8] text-[#090A0F] font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
              >
                <FileText className="w-4 h-4" />
                {t.viewResume}
              </button>
              <a
                href={portfolioData.personal.resumePdfUrl}
                download="Aditya_Yadav_Finance_Resume.pdf"
                className={`py-2.5 px-4 rounded-xl border text-xs font-semibold flex items-center justify-center transition-colors ${
                  currentTheme === 'light'
                    ? 'border-slate-300 text-slate-700 hover:bg-slate-50'
                    : 'border-[#F43F5E]/30 text-[#F8FAFC] hover:bg-[#F43F5E]/10'
                }`}
              >
                {t.downloadPdf}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
