import React from 'react';
import { BookOpen, TrendingUp, Cpu, Factory } from 'lucide-react';
import { Language, Theme } from '../types/portfolio';
import { portfolioData } from '../data/portfolioData';

interface AboutProps {
  currentLang: Language;
  currentTheme: Theme;
}

export const About: React.FC<AboutProps> = ({ currentLang, currentTheme }) => {
  const { about } = portfolioData;
  const t = portfolioData.translations[currentLang];

  const pillarAccents = [
    {
      icon: <BookOpen className="w-5 h-5 text-[#F43F5E]" />,
      border: 'hover:border-[#F43F5E]/50',
      badge: 'bg-[#F43F5E]/10 border-[#F43F5E]/30 text-[#F43F5E]',
      shadow: 'hover:shadow-[0_12px_30px_rgba(244,63,94,0.15)]',
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#38BDF8]" />,
      border: 'hover:border-[#38BDF8]/50',
      badge: 'bg-[#38BDF8]/10 border-[#38BDF8]/30 text-[#38BDF8]',
      shadow: 'hover:shadow-[0_12px_30px_rgba(56,189,248,0.15)]',
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#10B981]" />,
      border: 'hover:border-[#10B981]/50',
      badge: 'bg-[#10B981]/10 border-[#10B981]/30 text-[#10B981]',
      shadow: 'hover:shadow-[0_12px_30px_rgba(16,185,129,0.15)]',
    },
    {
      icon: <Factory className="w-5 h-5 text-[#38BDF8]" />,
      border: 'hover:border-[#38BDF8]/50',
      badge: 'bg-[#38BDF8]/10 border-[#38BDF8]/30 text-[#38BDF8]',
      shadow: 'hover:shadow-[0_12px_30px_rgba(56,189,248,0.15)]',
    },
  ];

  const pillars = currentLang === 'hi' ? about.corePillarsHi : about.corePillarsEn;
  const bio = currentLang === 'hi' ? about.detailedBioHi : about.detailedBioEn;

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background ambient lighting with Red and Blue orbs */}
      <div
        className="absolute top-1/3 left-[-100px] w-[450px] h-[450px] bg-[#F43F5E]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-[-100px] w-[450px] h-[450px] bg-[#38BDF8]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header with RGB spectrum kicker */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#F43F5E] via-[#38BDF8] to-[#10B981]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-bold">
              01 &middot; {t.aboutKicker}
            </span>
          </div>
          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            currentTheme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
          }`}>
            {t.aboutHeading}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F43F5E] via-[#38BDF8] to-[#10B981] mt-4 rounded-full" />
        </div>

        {/* Editorial Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Highlight intro quote card */}
          <div className="lg:col-span-5">
            <div className={`p-8 rounded-3xl border transition-all duration-300 hover:border-[#38BDF8]/40 group ${
              currentTheme === 'light'
                ? 'bg-white border-slate-200 text-slate-900 shadow-xl'
                : 'bg-[#121624] border-slate-800 text-[#F8FAFC] shadow-[0_20px_40px_rgba(0,0,0,0.6)]'
            }`}>
              <div className="text-xs uppercase tracking-wider text-[#38BDF8] font-mono font-bold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                {currentLang === 'hi' ? 'मूल दृष्टिकोण' : 'Guiding Philosophy'}
              </div>
              <blockquote className={`font-heading text-xl sm:text-2xl font-medium leading-relaxed italic ${
                currentTheme === 'light' ? 'text-slate-800' : 'text-slate-100'
              }`}>
                &ldquo;{currentLang === 'hi'
                  ? 'वित्तीय शुद्धता और कम्प्यूटेशनल बुद्धिमत्ता का समन्वय ही आधुनिक व्यावसायिक निर्णय लेने की शक्ति है।'
                  : 'Bridging foundational accounting discipline with computational intelligence transforms raw records into actionable financial foresight.'}&rdquo;
              </blockquote>
              <div className="mt-8 pt-6 border-t border-slate-700/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-[#38BDF8]/50 bg-gradient-to-br from-[#F43F5E]/20 via-[#38BDF8]/20 to-[#10B981]/20 flex items-center justify-center font-heading font-bold text-xs text-[#38BDF8]">
                    AY
                  </div>
                  <div>
                    <div className="font-heading text-sm font-bold">Aditya Yadav</div>
                    <div className="text-xs text-slate-400">Kanpur, Uttar Pradesh &middot; BBA Candidate</div>
                  </div>
                </div>
                {/* RGB tri-dot badge */}
                <div className="flex items-center gap-1.5" title="Red · Blue · Green Theme">
                  <span className="w-2 h-2 rounded-full bg-[#F43F5E]" />
                  <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Paragraphs */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-base sm:text-lg leading-relaxed">
            <p className={`font-semibold text-lg sm:text-xl leading-relaxed ${
              currentTheme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
            }`}>
              {currentLang === 'hi' ? about.introHi : about.introEn}
            </p>
            {bio.map((paragraph, idx) => (
              <p
                key={idx}
                className={`font-normal ${
                  currentTheme === 'light' ? 'text-slate-600' : 'text-slate-300'
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const accent = pillarAccents[idx] || pillarAccents[0];
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${accent.border} ${accent.shadow} ${
                  currentTheme === 'light'
                    ? 'bg-white border-slate-200 shadow-md hover:shadow-xl text-slate-900'
                    : 'bg-[#121624] border-slate-800 text-[#F8FAFC]'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${accent.badge} transition-transform`}>
                  {accent.icon}
                </div>
                <h3 className={`font-heading text-base font-bold mb-2.5 ${
                  currentTheme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
                }`}>
                  {pillar.title}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  currentTheme === 'light' ? 'text-slate-600' : 'text-slate-400'
                }`}>
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
