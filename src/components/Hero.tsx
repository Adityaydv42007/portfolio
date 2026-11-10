import React from 'react';
import { ArrowDown, FileText, Download, MapPin, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';
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
      {/* 1. Atmospheric Red, Blue, Green RGB Background Lighting */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#F43F5E]/12 rounded-full blur-[140px] pointer-events-none animate-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#38BDF8]/15 rounded-full blur-[130px] pointer-events-none animate-rgb-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-[#10B981]/12 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* 2. Floating Abstract Geometric RGB Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-35 select-none" aria-hidden="true">
        <div className="absolute top-28 left-[8%] w-2 h-2 rounded-full bg-[#F43F5E] animate-ping" />
        <div className="absolute top-44 right-[12%] w-2 h-2 rounded-full bg-[#38BDF8] opacity-80" />
        <div className="absolute bottom-28 left-[18%] w-2 h-2 rounded-full bg-[#10B981]" />
        <div className="absolute top-1/2 left-[3%] p-2 rounded-xl border border-[#38BDF8]/20 bg-white/[0.02] backdrop-blur-sm hidden lg:block">
          <Terminal className="w-4 h-4 text-[#38BDF8]" />
        </div>
        <div className="absolute top-1/3 right-[5%] p-2 rounded-xl border border-[#F43F5E]/20 bg-white/[0.02] backdrop-blur-sm hidden lg:block">
          <Cpu className="w-4 h-4 text-[#F43F5E]" />
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
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span>{t.openToOpportunities}</span>
                </div>
              )}
              <div className="inline-flex items-center gap-1.5 text-xs text-[#94A3B8]">
                <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>{currentLang === 'hi' ? p.locationHi : p.locationEn}</span>
              </div>
            </div>

            {/* Subtle animated intro line with RGB spectrum */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#F43F5E] via-[#38BDF8] to-[#10B981]" />
              <span className="text-xs uppercase font-mono tracking-widest font-bold">
                <span className="text-[#F43F5E]">RED</span> &middot;{' '}
                <span className="text-[#38BDF8]">BLUE</span> &middot;{' '}
                <span className="text-[#10B981]">GREEN</span> &middot; 2026
              </span>
            </div>

            {/* Headline with Space Grotesk / Sora font */}
            <h1 className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-balance ${
              currentTheme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
            }`}>
              {p.name}
            </h1>

            {/* Role: AI · Data Analytics · Technical Education in Red, Blue, Green harmony */}
            <p className="font-heading text-lg sm:text-2xl font-bold tracking-wide mb-5 flex flex-wrap items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#F43F5E] shrink-0" />
              {currentLang === 'hi' ? (
                <>
                  <span className="text-[#F43F5E]">आर्टिफिशियल इंटेलिजेंस</span>
                  <span className="text-white/40">&middot;</span>
                  <span className="text-[#38BDF8]">डेटा एनालिटिक्स</span>
                  <span className="text-white/40">&middot;</span>
                  <span className="text-[#10B981]">तकनीकी शिक्षा</span>
                </>
              ) : (
                <>
                  <span className="text-[#F43F5E]">AI</span>
                  <span className="text-white/40">&middot;</span>
                  <span className="text-[#38BDF8]">Data Analytics</span>
                  <span className="text-white/40">&middot;</span>
                  <span className="text-[#10B981]">Technical Education</span>
                </>
              )}
            </p>

            {/* Lead Narrative */}
            <p className={`text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal ${
              currentTheme === 'light' ? 'text-[#475569]' : 'text-[#94A3B8]'
            }`}>
              {currentLang === 'hi' ? p.subtitleHi : p.subtitleEn}
            </p>

            {/* Primary Action Buttons (Red, Blue, Green Color Harmony) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* Green Primary CTA */}
              <button
                onClick={handleScrollToProjects}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#10B981] hover:bg-[#059669] text-[#090A0F] font-bold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:scale-[1.02] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
              >
                <span>{t.exploreWork}</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>

              {/* Blue View Resume CTA */}
              <button
                onClick={onOpenResumeModal}
                className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-full border text-sm font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-95 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] ${
                  currentTheme === 'light'
                    ? 'border-[#0284C7]/40 text-[#0284C7] hover:bg-[#0284C7]/10 shadow-sm'
                    : 'border-[#38BDF8]/40 bg-[#38BDF8]/5 text-[#38BDF8] hover:border-[#38BDF8] hover:bg-[#38BDF8]/15 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]'
                }`}
              >
                <FileText className="w-4 h-4 text-[#38BDF8]" />
                <span>{t.viewResume}</span>
              </button>

              {/* Red Download Resume CTA */}
              <a
                href={p.resumePdfUrl}
                download="Aditya_Yadav_Finance_Resume.pdf"
                className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-full border text-sm font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-95 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F43F5E] ${
                  currentTheme === 'light'
                    ? 'border-[#E11D48]/40 text-[#E11D48] hover:bg-[#E11D48]/10 shadow-sm'
                    : 'border-[#F43F5E]/40 bg-[#F43F5E]/5 text-[#F43F5E] hover:border-[#F43F5E] hover:bg-[#F43F5E]/15 hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]'
                }`}
              >
                <Download className="w-4 h-4 text-[#F43F5E]" />
                <span>{t.downloadResume}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Tall Portrait in RGB Chromatic Frame (CLEAN: No text written over picture) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-3xl p-2.5 bg-gradient-to-b from-[#F43F5E]/30 via-[#38BDF8]/25 to-[#10B981]/30 border border-[#38BDF8]/40 shadow-[0_20px_50px_rgba(0,0,0,0.85)] group transition-all duration-500 hover:border-[#10B981]/60 hover:shadow-[0_20px_60px_rgba(56,189,248,0.3)]">
              {/* Multi-color RGB ambient backlight */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#F43F5E]/20 via-[#38BDF8]/20 to-[#10B981]/20 rounded-3xl blur-2xl -z-10 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              />

              {/* Inner Frame with Portrait - pure, clean with NO text overlay */}
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-[#090A0F]">
                <img
                  src={p.portraitPhotoUrl}
                  alt="Aditya Yadav - AI, Data Analytics and Finance Professional"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Decorative corner RGB metallic accents */}
              <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#F43F5E]" />
              <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#38BDF8]" />
              <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#10B981]" />
            </div>
          </div>
        </div>

        {/* Full-Width Credentials & Highlights Strip with RGB Category Coding */}
        <div className={`mt-20 pt-8 border-t grid grid-cols-2 md:grid-cols-4 gap-6 text-left transition-colors ${
          currentTheme === 'light' ? 'border-slate-200' : 'border-white/10'
        }`}>
          <div className="p-3.5 rounded-2xl border border-transparent hover:border-[#F43F5E]/20 transition-all">
            <div className={`text-xs mb-1 font-mono uppercase tracking-wider ${currentTheme === 'light' ? 'text-slate-500' : 'text-[#94A3B8]'}`}>
              Degree Program
            </div>
            <div className={`font-heading text-base font-bold ${
              currentTheme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
            }`}>
              BBA Candidate
            </div>
            <div className="text-xs text-[#F43F5E] font-medium">Allenhouse Business School</div>
          </div>

          <div className="p-3.5 rounded-2xl border border-transparent hover:border-[#10B981]/20 transition-all">
            <div className={`text-xs mb-1 font-mono uppercase tracking-wider ${currentTheme === 'light' ? 'text-slate-500' : 'text-[#94A3B8]'}`}>
              Vocational Accounting
            </div>
            <div className={`font-heading text-base font-bold ${
              currentTheme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
            }`}>
              Master in Financial Accounting
            </div>
            <div className="text-xs text-[#10B981] font-medium">VCEC Tally Academy</div>
          </div>

          <div className="p-3.5 rounded-2xl border border-transparent hover:border-[#38BDF8]/20 transition-all">
            <div className={`text-xs mb-1 font-mono uppercase tracking-wider ${currentTheme === 'light' ? 'text-slate-500' : 'text-[#94A3B8]'}`}>
              AI Credential
            </div>
            <div className={`font-heading text-base font-bold ${
              currentTheme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
            }`}>
              IBM SkillsBuild AI
            </div>
            <div className="text-xs text-[#38BDF8] font-medium">Language & Vision in AI</div>
          </div>

          <div className="p-3.5 rounded-2xl border border-transparent hover:border-[#F43F5E]/20 transition-all">
            <div className={`text-xs mb-1 font-mono uppercase tracking-wider ${currentTheme === 'light' ? 'text-slate-500' : 'text-[#94A3B8]'}`}>
              Industrial Exposure
            </div>
            <div className={`font-heading text-base font-bold ${
              currentTheme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
            }`}>
              Amul Processing Facility
            </div>
            <div className="text-xs text-[#F43F5E] font-medium">Operations & Cost Control</div>
          </div>
        </div>

        {/* Animated Scroll-Down Indicator with RGB accent */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleScrollToProjects}
            className="flex flex-col items-center gap-2 group cursor-pointer text-[#94A3B8] hover:text-[#38BDF8] transition-colors focus:outline-none"
            aria-label="Scroll down to projects section"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase">Scroll Down</span>
            <div className="w-5 h-9 rounded-full border-2 border-current flex justify-center p-1">
              <span className="w-1.5 h-2.5 rounded-full bg-gradient-to-b from-[#F43F5E] via-[#38BDF8] to-[#10B981] animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
