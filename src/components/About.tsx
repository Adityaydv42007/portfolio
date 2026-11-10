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

  const pillarIcons = [
    <BookOpen className="w-5 h-5 text-[#00D6A0]" />,
    <TrendingUp className="w-5 h-5 text-[#00D6A0]" />,
    <Cpu className="w-5 h-5 text-[#C9A96E]" />,
    <Factory className="w-5 h-5 text-[#00D6A0]" />,
  ];

  const pillars = currentLang === 'hi' ? about.corePillarsHi : about.corePillarsEn;
  const bio = currentLang === 'hi' ? about.detailedBioHi : about.detailedBioEn;

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#00D6A0]/5 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header with animated line */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#00D6A0]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#00D6A0] font-bold">
              01 &middot; {t.aboutKicker}
            </span>
          </div>
          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            currentTheme === 'light' ? 'text-[#141B18]' : 'text-[#F3F5F2]'
          }`}>
            {t.aboutHeading}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00D6A0] via-[#C9A96E] to-transparent mt-4 rounded-full" />
        </div>

        {/* Editorial Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Highlight intro quote card */}
          <div className="lg:col-span-5">
            <div className={`p-8 rounded-3xl border transition-all duration-300 hover:border-[#00D6A0]/40 group ${
              currentTheme === 'light'
                ? 'bg-white border-stone-200 text-stone-900 shadow-lg'
                : 'bg-[#141B18] border-[#00D6A0]/15 text-[#F3F5F2] shadow-[0_20px_40px_rgba(0,0,0,0.5)]'
            }`}>
              <div className="text-xs uppercase tracking-wider text-[#00D6A0] font-mono font-bold mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D6A0] animate-pulse" />
                {currentLang === 'hi' ? 'मूल दृष्टिकोण' : 'Guiding Philosophy'}
              </div>
              <blockquote className="font-heading text-xl sm:text-2xl font-medium leading-relaxed italic text-[#C9A96E]">
                &ldquo;{currentLang === 'hi'
                  ? 'वित्तीय शुद्धता और कम्प्यूटेशनल बुद्धिमत्ता का समन्वय ही आधुनिक व्यावसायिक निर्णय लेने की शक्ति है।'
                  : 'Bridging foundational accounting discipline with computational intelligence transforms raw records into actionable financial foresight.'}&rdquo;
              </blockquote>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#00D6A0]/40 bg-[#0D1713] flex items-center justify-center font-heading font-bold text-xs text-[#00D6A0]">
                  AY
                </div>
                <div>
                  <div className="font-heading text-sm font-bold">Aditya Yadav</div>
                  <div className="text-xs text-[#A5AEA9]">Kanpur, Uttar Pradesh &middot; BBA Candidate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Paragraphs */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-base sm:text-lg leading-relaxed">
            <p className={`font-semibold text-lg sm:text-xl leading-relaxed ${
              currentTheme === 'light' ? 'text-[#141B18]' : 'text-[#F3F5F2]'
            }`}>
              {currentLang === 'hi' ? about.introHi : about.introEn}
            </p>
            {bio.map((paragraph, idx) => (
              <p
                key={idx}
                className={`font-normal ${
                  currentTheme === 'light' ? 'text-[#4E5954]' : 'text-[#A5AEA9]'
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                currentTheme === 'light'
                  ? 'bg-white border-stone-200 shadow-md hover:shadow-xl hover:border-[#0A8F6C]/40 text-stone-900'
                  : 'bg-[#141B18] border-[#00D6A0]/15 text-[#F3F5F2] hover:border-[#00D6A0]/40 hover:shadow-[0_10px_30px_rgba(0,214,160,0.12)]'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#0D1713] border border-[#00D6A0]/25 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {pillarIcons[idx]}
              </div>
              <h3 className={`font-heading text-base font-bold mb-2.5 ${
                currentTheme === 'light' ? 'text-[#141B18]' : 'text-[#F3F5F2]'
              }`}>
                {pillar.title}
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                currentTheme === 'light' ? 'text-[#4E5954]' : 'text-[#A5AEA9]'
              }`}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
