import React from 'react';
import { ArrowDown, FileText, Download, ShieldCheck, MapPin, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';
import { Language, Theme } from '../types/portfolio';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  currentLang: Language;
  currentTheme: Theme;
  isOpenToOpportunities: boolean;
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  currentTheme,
  isOpenToOpportunities,
  onOpenResumeModal,
}) => {
  const p = portfolioData.personal;
  const t = portfolioData.translations[currentLang];

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* 1. Atmospheric Emerald & Midnight Background Lighting */}
      <div
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D6A0]/10 rounded-full blur-[140px] pointer-events-none animate-emerald-glow"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#176B50]/15 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-10 right-1/4 w-[300px] h-[300px] bg-[#C9A96E]/8 rounded-full blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      {/* 2. Floating Abstract Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 select-none" aria-hidden="true">
        <div className="absolute top-28 left-[8%] w-1.5 h-1.5 rounded-full bg-[#00D6A0] animate-ping" />
        <div className="absolute top-44 right-[12%] w-2 h-2 rounded-full bg-[#C9A96E] opacity-75" />
        <div className="absolute bottom-24 left-[18%] w-1.5 h-1.5 rounded-full bg-[#A5AEA9]" />
        <div className="absolute top-1/2 left-[3%] p-2 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hidden lg:block">
          <Terminal className="w-4 h-4 text-[#00D6A0]/60" />
        </div>
        <div className="absolute top-1/3 right-[5%] p-2 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hidden lg:block">
          <Cpu className="w-4 h-4 text-[#C9A96E]/60" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline, Narrative & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Availability & Location Row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {isOpenToOpportunities && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium bg-[#00D6A0]/10 border border-[#00D6A0]/30 text-[#00D6A0] shadow-[0_0_15px_rgba(0,214,160,0.15)]">
                  <span className="w-2 h-2 rounded-full bg-[#00D6A0] animate-pulse" />
                  <span>{t.openToOpportunities}</span>
                </div>
              )}
              <div className="inline-flex items-center gap-1.5 text-xs text-[#A5AEA9]">
                <MapPin className="w-3.5 h-3.5 text-[#00D6A0]" />
                <span>{currentLang === 'hi' ? p.locationHi : p.locationEn}</span>
              </div>
            </div>

            {/* Subtle animated intro line */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#00D6A0] to-transparent" />
              <span className="text-xs uppercase font-mono tracking-widest text-[#00D6A0] font-semibold">
                Portfolio &middot; 2026
              </span>
            </div>

            {/* Headline with Space Grotesk / Sora font */}
            <h1 className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-balance ${
              currentTheme === 'light' ? 'text-[#141B18]' : 'text-[#F3F5F2]'
            }`}>
              {p.name}
            </h1>

            {/* Role & Core Disciplines */}
            <p className="font-heading text-lg sm:text-2xl text-[#00D6A0] font-semibold tracking-wide mb-5 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#C9A96E] shrink-0" />
              <span>{currentLang === 'hi' ? p.titleHi : p.titleEn}</span>
            </p>

            {/* Lead Narrative */}
            <p className={`text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal ${
              currentTheme === 'light' ? 'text-[#4E5954]' : 'text-[#A5AEA9]'
            }`}>
              {currentLang === 'hi' ? p.subtitleHi : p.subtitleEn}
            </p>

            {/* Primary Action Buttons (Magnetic & Refined Hover) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={handleScrollToProjects}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#00D6A0] text-[#080B0A] font-bold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(0,214,160,0.3)] hover:shadow-[0_0_30px_rgba(0,214,160,0.6)] hover:scale-[1.02] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D6A0]"
              >
                <span>{t.exploreWork}</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onOpenResumeModal}
                className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-full border text-sm font-medium transition-all duration-300 hover:scale-[1.02] active:scale-95 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00D6A0] ${
                  currentTheme === 'light'
                    ? 'border-stone-300 text-stone-800 hover:border-[#0A8F6C] hover:bg-stone-100 shadow-sm'
                    : 'border-white/15 bg-white/[0.03] text-[#F3F5F2] hover:border-[#00D6A0]/50 hover:bg-white/[0.07] hover:shadow-[0_0_15px_rgba(0,214,160,0.2)]'
                }`}
              >
                <FileText className="w-4 h-4 text-[#00D6A0]" />
                <span>{t.viewResume}</span>
              </button>

              <a
                href={p.resumePdfUrl}
                download="Aditya_Yadav_Finance_Resume.pdf"
                className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-full border text-sm font-medium transition-all duration-300 hover:scale-[1.02] active:scale-95 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A96E] ${
                  currentTheme === 'light'
                    ? 'border-stone-300 text-stone-800 hover:border-[#A28247] hover:bg-stone-100 shadow-sm'
                    : 'border-white/15 bg-white/[0.03] text-[#F3F5F2] hover:border-[#C9A96E]/50 hover:bg-white/[0.07] hover:shadow-[0_0_15px_rgba(201,169,110,0.2)]'
                }`}
              >
                <Download className="w-4 h-4 text-[#C9A96E]" />
                <span>{t.downloadResume}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Tall Portrait in Sophisticated Animated Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-3xl p-2 bg-gradient-to-b from-[#00D6A0]/30 via-[#176B50]/20 to-transparent border border-[#00D6A0]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group transition-all duration-500 hover:border-[#00D6A0]/60 hover:shadow-[0_20px_60px_rgba(0,214,160,0.25)]">
              {/* Emerald ambient backlight */}
              <div
                className="absolute inset-0 bg-[#00D6A0]/15 rounded-3xl blur-2xl -z-10 group-hover:bg-[#00D6A0]/25 transition-colors duration-500"
                aria-hidden="true"
              />

              {/* Inner Frame with Portrait - completely clean without any text overlay */}
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-[#0D1713]">
                <img
                  src={p.portraitPhotoUrl}
                  alt="Aditya Yadav - AI, Data Analytics and Finance Professional"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Decorative corner metallic accents */}
              <div className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C9A96E]" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#00D6A0]" />
            </div>
          </div>
        </div>

        {/* Full-Width Credentials & Highlights Strip */}
        <div className={`mt-20 pt-8 border-t grid grid-cols-2 md:grid-cols-4 gap-6 text-left transition-colors ${
          currentTheme === 'light' ? 'border-stone-200' : 'border-white/10'
        }`}>
          <div className="p-3 rounded-2xl border border-transparent hover:border-[#00D6A0]/20 transition-all">
            <div className={`text-xs mb-1 font-mono uppercase tracking-wider ${currentTheme === 'light' ? 'text-stone-500' : 'text-[#A5AEA9]'}`}>
              Degree Program
            </div>
            <div className={`font-heading text-base font-bold ${
              currentTheme === 'light' ? 'text-[#141B18]' : 'text-[#F3F5F2]'
            }`}>
              BBA Candidate
            </div>
            <div className="text-xs text-[#00D6A0] font-medium">Allenhouse Business School</div>
          </div>

          <div className="p-3 rounded-2xl border border-transparent hover:border-[#00D6A0]/20 transition-all">
            <div className={`text-xs mb-1 font-mono uppercase tracking-wider ${currentTheme === 'light' ? 'text-stone-500' : 'text-[#A5AEA9]'}`}>
              Vocational Accounting
            </div>
            <div className={`font-heading text-base font-bold ${
              currentTheme === 'light' ? 'text-[#141B18]' : 'text-[#F3F5F2]'
            }`}>
              Master in Financial Accounting
            </div>
            <div className="text-xs text-[#00D6A0] font-medium">VCEC Tally Academy</div>
          </div>

          <div className="p-3 rounded-2xl border border-transparent hover:border-[#00D6A0]/20 transition-all">
            <div className={`text-xs mb-1 font-mono uppercase tracking-wider ${currentTheme === 'light' ? 'text-stone-500' : 'text-[#A5AEA9]'}`}>
              AI Credential
            </div>
            <div className={`font-heading text-base font-bold ${
              currentTheme === 'light' ? 'text-[#141B18]' : 'text-[#F3F5F2]'
            }`}>
              IBM SkillsBuild AI
            </div>
            <div className="text-xs text-[#C9A96E] font-medium">Language & Vision in AI</div>
          </div>

          <div className="p-3 rounded-2xl border border-transparent hover:border-[#00D6A0]/20 transition-all">
            <div className={`text-xs mb-1 font-mono uppercase tracking-wider ${currentTheme === 'light' ? 'text-stone-500' : 'text-[#A5AEA9]'}`}>
              Industrial Exposure
            </div>
            <div className={`font-heading text-base font-bold ${
              currentTheme === 'light' ? 'text-[#141B18]' : 'text-[#F3F5F2]'
            }`}>
              Amul Processing Facility
            </div>
            <div className="text-xs text-[#C9A96E] font-medium">Operations & Cost Control</div>
          </div>
        </div>

        {/* Animated Scroll-Down Indicator */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleScrollToProjects}
            className="flex flex-col items-center gap-2 group cursor-pointer text-[#A5AEA9] hover:text-[#00D6A0] transition-colors focus:outline-none"
            aria-label="Scroll down to projects section"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase">Scroll Down</span>
            <div className="w-5 h-9 rounded-full border-2 border-current flex justify-center p-1">
              <span className="w-1 h-2 rounded-full bg-[#00D6A0] animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
