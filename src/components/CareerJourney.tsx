import React from 'react';
import { Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { Language, Theme } from '../types/portfolio';
import { portfolioData } from '../data/portfolioData';

interface CareerJourneyProps {
  currentLang: Language;
  currentTheme: Theme;
}

export const CareerJourney: React.FC<CareerJourneyProps> = ({ currentLang, currentTheme }) => {
  const { career } = portfolioData;
  const t = portfolioData.translations[currentLang];

  return (
    <section id="journey" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#176B50]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#00D6A0]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#00D6A0] font-bold">
              02 &middot; {t.journeyKicker}
            </span>
          </div>
          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            currentTheme === 'light' ? 'text-[#141B18]' : 'text-[#F3F5F2]'
          }`}>
            {t.journeyHeading}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00D6A0] via-[#C9A96E] to-transparent mt-4 rounded-full" />
        </div>

        {/* Vertical Timeline */}
        <div className={`relative ml-4 sm:ml-6 md:ml-8 pl-6 sm:pl-8 space-y-12 border-l-2 ${
          currentTheme === 'light' ? 'border-[#0A8F6C]/25' : 'border-[#00D6A0]/20'
        }`}>
          {career.map((item, idx) => {
            const role = currentLang === 'hi' ? item.roleHi : item.roleEn;
            const summary = currentLang === 'hi' ? item.summaryHi : item.summaryEn;
            const bullets = currentLang === 'hi' ? item.bulletPointsHi : item.bulletPointsEn;

            return (
              <div key={item.id} className="relative group">
                {/* Timeline node with glowing pulse */}
                <div className={`absolute -left-[33px] sm:-left-[41px] md:-left-[43px] top-2 w-5 h-5 rounded-full border-2 transition-all duration-300 group-hover:scale-125 flex items-center justify-center ${
                  currentTheme === 'light'
                    ? 'border-[#0A8F6C] bg-white shadow-md'
                    : 'border-[#00D6A0] bg-[#080B0A] shadow-[0_0_12px_rgba(0,214,160,0.5)]'
                }`}>
                  <span className="w-2 h-2 rounded-full bg-[#00D6A0]" />
                </div>

                {/* Content Box in Rich Charcoal */}
                <div
                  className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                    currentTheme === 'light'
                      ? 'bg-white border-stone-200 shadow-md hover:shadow-xl hover:border-[#0A8F6C]/40 text-stone-900'
                      : 'bg-[#141B18] border-[#00D6A0]/15 text-[#F3F5F2] hover:border-[#00D6A0]/40 hover:shadow-[0_15px_35px_rgba(0,214,160,0.12)]'
                  }`}
                >
                  {/* Meta strip */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 text-xs">
                    <div className="flex items-center gap-2 text-[#00D6A0] font-mono font-bold tracking-wide">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>

                    <div className="flex items-center gap-3 text-[#A5AEA9] font-mono text-[11px]">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-[#00D6A0]" />
                        <span className={currentTheme === 'light' ? 'text-stone-700 font-medium' : 'text-[#F3F5F2]'}>
                          {item.organization}
                        </span>
                      </span>
                      <span>&middot;</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#C9A96E]" />
                        <span className={currentTheme === 'light' ? 'text-stone-600' : 'text-[#A5AEA9]'}>
                          {item.location}
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Role Title */}
                  <h3 className={`font-heading text-xl sm:text-2xl font-bold mb-3 ${
                    currentTheme === 'light' ? 'text-[#141B18]' : 'text-[#F3F5F2]'
                  }`}>
                    {role}
                  </h3>

                  {/* Summary */}
                  <p className={`text-sm sm:text-base leading-relaxed mb-6 font-normal ${
                    currentTheme === 'light' ? 'text-[#4E5954]' : 'text-[#A5AEA9]'
                  }`}>
                    {summary}
                  </p>

                  {/* Key Responsibilities & Learnings */}
                  <ul className="space-y-2.5 pt-4 border-t border-white/5">
                    {bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#00D6A0] shrink-0 mt-0.5" />
                        <span className={currentTheme === 'light' ? 'text-stone-700' : 'text-[#A5AEA9]'}>
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
