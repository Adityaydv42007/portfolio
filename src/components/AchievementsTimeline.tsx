import React from 'react';
import { Award, Factory, CheckCircle2, Sparkles, Calendar, BookOpen } from 'lucide-react';
import { Language, Theme } from '../types/portfolio';
import { portfolioData } from '../data/portfolioData';

interface AchievementsTimelineProps {
  currentLang: Language;
  currentTheme: Theme;
}

export const AchievementsTimeline: React.FC<AchievementsTimelineProps> = ({
  currentLang,
  currentTheme,
}) => {
  const { achievements } = portfolioData;
  const t = portfolioData.translations[currentLang];

  const getAchievementMeta = (idx: number) => {
    const list = [
      {
        icon: <Award className="w-5 h-5 text-[#38BDF8]" />,
        color: '#38BDF8',
        border: 'hover:border-[#38BDF8]/50 hover:shadow-[0_15px_35px_rgba(56,189,248,0.15)]',
        badge: 'text-[#38BDF8]',
        bullet: 'text-[#38BDF8]',
      },
      {
        icon: <BookOpen className="w-5 h-5 text-[#F43F5E]" />,
        color: '#F43F5E',
        border: 'hover:border-[#F43F5E]/50 hover:shadow-[0_15px_35px_rgba(244,63,94,0.15)]',
        badge: 'text-[#F43F5E]',
        bullet: 'text-[#F43F5E]',
      },
      {
        icon: <Factory className="w-5 h-5 text-[#10B981]" />,
        color: '#10B981',
        border: 'hover:border-[#10B981]/50 hover:shadow-[0_15px_35px_rgba(16,185,129,0.15)]',
        badge: 'text-[#10B981]',
        bullet: 'text-[#10B981]',
      },
    ];
    return list[idx % list.length];
  };

  return (
    <section id="achievements" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#38BDF8]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#F43F5E]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#F43F5E] via-[#38BDF8] to-[#10B981]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-bold">
              05 &middot; {t.achievementsKicker}
            </span>
          </div>
          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            currentTheme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
          }`}>
            {t.achievementsHeading}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F43F5E] via-[#38BDF8] to-[#10B981] mt-4 rounded-full" />
        </div>

        {/* Highlighted Industrial Exposure Feature Box with RGB border accent */}
        <div className={`mb-14 p-8 sm:p-10 rounded-3xl border shadow-2xl relative overflow-hidden transition-all duration-400 hover:border-[#38BDF8]/40 ${
          currentTheme === 'light'
            ? 'bg-gradient-to-br from-sky-50/50 via-white to-rose-50/30 border-slate-200 text-slate-900'
            : 'bg-gradient-to-br from-[#121624] via-[#0D111D] to-[#090A0F] border-slate-800 text-[#F8FAFC]'
        }`}>
          {/* Decorative RGB top bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F43F5E] via-[#38BDF8] to-[#10B981]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-wider text-[#38BDF8] mb-3 font-semibold">
                <Factory className="w-4 h-4 text-[#38BDF8]" />
                <span>
                  {currentLang === 'hi'
                    ? 'प्रमुख औद्योगिक अनुभव &middot; अमूल प्रसंस्करण संयंत्र'
                    : 'Key Industrial Exposure &middot; Amul Processing Facility'}
                </span>
              </div>
              <h3 className={`font-heading text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight ${
                currentTheme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
              }`}>
                {currentLang === 'hi'
                  ? 'अमूल फैक्ट्री में उत्पादन एवं आपूर्ति श्रृंखला अवलोकन'
                  : 'Amul Factory Production & Supply Chain Observation'}
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed mb-6 font-normal ${
                currentTheme === 'light' ? 'text-slate-600' : 'text-slate-400'
              }`}>
                {currentLang === 'hi'
                  ? 'अमूल डेयरी संयंत्र का दौरा करके बड़े पैमाने पर विनिर्माण, स्वचालित पैकेजिंग, गुणवत्ता नियंत्रण और आपूर्ति वितरण प्रक्रियाओं का गहन अध्ययन किया, जिससे लागत नियंत्रण और परिचालन दक्षता में व्यावहारिक अंतर्दृष्टि प्राप्त हुई।'
                  : 'Conducted field study at the Amul processing facility to examine continuous manufacturing workflows, bulk cold-chain supply operations, rigorous quality assurance, and packaging line automation, translating corporate cost-control theory into physical operational insight.'}
              </p>

              <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t text-xs ${
                currentTheme === 'light' ? 'border-slate-200' : 'border-slate-800'
              }`}>
                <div>
                  <div className="text-slate-400 font-mono text-[10px] uppercase mb-1">
                    {currentLang === 'hi' ? 'संचालन क्षेत्र' : 'Focus Area'}
                  </div>
                  <div className={`font-bold ${currentTheme === 'light' ? 'text-slate-900' : 'text-[#F8FAFC]'}`}>
                    {currentLang === 'hi' ? 'आपूर्ति श्रृंखला एवं रसद' : 'Supply Chain & Logistics'}
                  </div>
                </div>
                <div>
                  <div className="text-slate-400 font-mono text-[10px] uppercase mb-1">
                    {currentLang === 'hi' ? 'प्रबंधन सिद्धांत' : 'Core Practice'}
                  </div>
                  <div className={`font-bold ${currentTheme === 'light' ? 'text-slate-900' : 'text-[#F8FAFC]'}`}>
                    {currentLang === 'hi' ? 'परिचालन लागत नियंत्रण' : 'Cost Minimization & Quality'}
                  </div>
                </div>
                <div>
                  <div className="text-slate-400 font-mono text-[10px] uppercase mb-1">
                    {currentLang === 'hi' ? 'सत्यापन' : 'Verification'}
                  </div>
                  <div className="font-bold text-[#10B981]">
                    {currentLang === 'hi' ? 'औद्योगिक फील्ड विजिट' : 'Institutional Field Study'}
                  </div>
                </div>
              </div>
            </div>

            <div className={`lg:col-span-4 flex flex-col justify-center items-center text-center p-6 rounded-2xl border ${
              currentTheme === 'light'
                ? 'bg-white border-slate-200 shadow-sm'
                : 'bg-[#090A0F]/90 border-slate-800'
            }`}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F43F5E]/15 via-[#38BDF8]/15 to-[#10B981]/15 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] mb-4 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
                <Factory className="w-8 h-8" />
              </div>
              <div className={`font-heading font-bold text-base mb-1 ${
                currentTheme === 'light' ? 'text-slate-900' : 'text-[#F8FAFC]'
              }`}>
                Amul Dairy Plant
              </div>
              <div className="text-xs text-slate-400 mb-3">
                {currentLang === 'hi' ? 'व्यावहारिक व्यावसायिक अंतर्दृष्टि' : 'Practical Business Insight'}
              </div>
              <span className="text-[11px] font-mono text-[#38BDF8] px-3.5 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 font-semibold">
                Verified Industrial Milestone
              </span>
            </div>
          </div>
        </div>

        {/* Milestone Cards Grid with RGB color distribution */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.slice(1).map((ach, idx) => {
            const title = currentLang === 'hi' ? ach.titleHi : ach.titleEn;
            const desc = currentLang === 'hi' ? ach.descriptionHi : ach.descriptionEn;
            const highlights = currentLang === 'hi' ? ach.highlightsHi : ach.highlightsEn;
            const meta = getAchievementMeta(idx);

            return (
              <div
                key={ach.id}
                className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 ${meta.border} ${
                  currentTheme === 'light'
                    ? 'bg-white border-slate-200 shadow-md hover:shadow-xl text-slate-900'
                    : 'bg-[#121624] border-slate-800 text-[#F8FAFC]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-800/40 border border-slate-700/50 flex items-center justify-center">
                      {meta.icon}
                    </div>
                    <span className={`text-xs font-mono font-semibold ${meta.badge}`}>{ach.date}</span>
                  </div>

                  <div className="text-xs text-slate-400 font-mono mb-1">{ach.organization}</div>
                  <h4 className={`font-heading text-lg font-bold mb-3 ${
                    currentTheme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
                  }`}>
                    {title}
                  </h4>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-normal ${
                    currentTheme === 'light' ? 'text-slate-600' : 'text-slate-400'
                  }`}>
                    {desc}
                  </p>
                </div>

                <ul className="space-y-2 pt-4 border-t border-slate-700/30 text-xs">
                  {highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${meta.bullet}`} />
                      <span className={currentTheme === 'light' ? 'text-slate-700' : 'text-slate-300'}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
