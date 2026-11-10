import React from 'react';
import { Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { Language, Theme } from '../types/portfolio';
import { portfolioData } from '../data/portfolioData';

interface CareerJourneyProps {
  currentLang: Language;
  currentTheme: Theme;
}

const timelineNodeColors = [
  { border: 'border-[#F43F5E]', dot: 'bg-[#F43F5E]', glow: 'shadow-[0_0_12px_rgba(244,63,94,0.6)]', text: 'text-[#F43F5E]' },
  { border: 'border-[#38BDF8]', dot: 'bg-[#38BDF8]', glow: 'shadow-[0_0_12px_rgba(56,189,248,0.6)]', text: 'text-[#38BDF8]' },
  { border: 'border-[#10B981]', dot: 'bg-[#10B981]', glow: 'shadow-[0_0_12px_rgba(16,185,129,0.6)]', text: 'text-[#10B981]' },
];

export const CareerJourney: React.FC<CareerJourneyProps> = ({ currentLang, currentTheme }) => {
  const { career } = portfolioData;
  const t = portfolioData.translations[currentLang];

  return (
    <section id="journey" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#38BDF8]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#F43F5E]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#F43F5E] via-[#38BDF8] to-[#10B981]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-bold">
              02 &middot; {t.journeyKicker}
            </span>
          </div>
          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            currentTheme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
          }`}>
            {t.journeyHeading}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F43F5E] via-[#38BDF8] to-[#10B981] mt-4 rounded-full" />
        </div>

        {/* Vertical Timeline */}
        <div className={`relative ml-4 sm:ml-6 md:ml-8 pl-6 sm:pl-8 space-y-12 border-l-2 ${
          currentTheme === 'light' ? 'border-slate-300' : 'border-slate-800'
        }`}>
          {career.map((item, idx) => {
            const role = currentLang === 'hi' ? item.roleHi : item.roleEn;
            const summary = currentLang === 'hi' ? item.summaryHi : item.summaryEn;
            const bullets = currentLang === 'hi' ? item.bulletPointsHi : item.bulletPointsEn;
            const nodeStyle = timelineNodeColors[idx % timelineNodeColors.length];

            return (
              <div key={item.id} className="relative group">
                {/* Timeline node with chromatic glowing pulse */}
                <div className={`absolute -left-[33px] sm:-left-[41px] md:-left-[43px] top-2 w-5 h-5 rounded-full border-2 transition-all duration-300 group-hover:scale-125 flex items-center justify-center ${
                  currentTheme === 'light'
                    ? `${nodeStyle.border} bg-white shadow-md`
                    : `${nodeStyle.border} bg-[#090A0F] ${nodeStyle.glow}`
                }`}>
                  <span className={`w-2 h-2 rounded-full ${nodeStyle.dot}`} />
                </div>

                {/* Content Box */}
                <div
                  className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                    currentTheme === 'light'
                      ? 'bg-white border-slate-200 shadow-md hover:shadow-xl hover:border-[#38BDF8]/40 text-slate-900'
                      : 'bg-[#121624] border-slate-800 text-[#F8FAFC] hover:border-[#38BDF8]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)]'
                  }`}
                >
                  {/* Meta strip */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 text-xs">
                    <div className={`flex items-center gap-2 ${nodeStyle.text} font-mono font-bold tracking-wide`}>
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-400 font-mono text-[11px]">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                        <span className={currentTheme === 'light' ? 'text-slate-800 font-medium' : 'text-[#F8FAFC]'}>
                          {item.organization}
                        </span>
                      </span>
                      <span>&middot;</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#F43F5E]" />
                        <span className={currentTheme === 'light' ? 'text-slate-600' : 'text-slate-400'}>
                          {item.location}
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Role Title */}
                  <h3 className={`font-heading text-xl sm:text-2xl font-bold mb-3 ${
                    currentTheme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
                  }`}>
                    {role}
                  </h3>

                  {/* Summary */}
                  <p className={`text-sm sm:text-base leading-relaxed mb-6 font-normal ${
                    currentTheme === 'light' ? 'text-slate-600' : 'text-slate-300'
                  }`}>
                    {summary}
                  </p>

                  {/* Key Responsibilities & Learnings */}
                  <ul className="space-y-2.5 pt-4 border-t border-slate-700/30">
                    {bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${nodeStyle.text}`} />
                        <span className={currentTheme === 'light' ? 'text-slate-700' : 'text-slate-300'}>
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
