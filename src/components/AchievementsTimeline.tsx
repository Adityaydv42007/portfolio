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

  const getAchievementIcon = (category: string) => {
    switch (category) {
      case 'industrial_exposure':
        return <Factory className="w-5 h-5 text-[#00D6A0]" />;
      case 'certification':
        return <Award className="w-5 h-5 text-[#C9A96E]" />;
      default:
        return <BookOpen className="w-5 h-5 text-[#00D6A0]" />;
    }
  };

  return (
    <section id="achievements" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#176B50]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#00D6A0]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#00D6A0] font-bold">
              05 &middot; {t.achievementsKicker}
            </span>
          </div>
          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            currentTheme === 'light' ? 'text-[#141B18]' : 'text-[#F3F5F2]'
          }`}>
            {t.achievementsHeading}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00D6A0] via-[#C9A96E] to-transparent mt-4 rounded-full" />
        </div>

        {/* Highlighted Industrial Exposure Feature Box */}
        <div className={`mb-14 p-8 sm:p-10 rounded-3xl border shadow-2xl relative overflow-hidden transition-all duration-400 hover:border-[#00D6A0]/40 ${
          currentTheme === 'light'
            ? 'bg-gradient-to-br from-[#0A8F6C]/10 via-stone-50 to-white border-[#0A8F6C]/30 text-stone-900'
            : 'bg-gradient-to-br from-[#0D1713] via-[#141B18] to-[#080B0A] border-[#00D6A0]/25 text-[#F3F5F2]'
        }`}>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-wider text-[#00D6A0] mb-3 font-semibold">
                <Factory className="w-4 h-4" />
                <span>
                  {currentLang === 'hi'
                    ? 'प्रमुख औद्योगिक अनुभव &middot; अमूल प्रसंस्करण संयंत्र'
                    : 'Key Industrial Exposure &middot; Amul Processing Facility'}
                </span>
              </div>
              <h3 className={`font-heading text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight ${
                currentTheme === 'light' ? 'text-[#141B18]' : 'text-[#F3F5F2]'
              }`}>
                {currentLang === 'hi'
                  ? 'अमूल फैक्ट्री में उत्पादन एवं आपूर्ति श्रृंखला अवलोकन'
                  : 'Amul Factory Production & Supply Chain Observation'}
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed mb-6 font-normal ${
                currentTheme === 'light' ? 'text-[#4E5954]' : 'text-[#A5AEA9]'
              }`}>
                {currentLang === 'hi'
                  ? 'अमूल डेयरी संयंत्र का दौरा करके बड़े पैमाने पर विनिर्माण, स्वचालित पैकेजिंग, गुणवत्ता नियंत्रण और आपूर्ति वितरण प्रक्रियाओं का गहन अध्ययन किया, जिससे लागत नियंत्रण और परिचालन दक्षता में व्यावहारिक अंतर्दृष्टि प्राप्त हुई।'
                  : 'Conducted field study at the Amul processing facility to examine continuous manufacturing workflows, bulk cold-chain supply operations, rigorous quality assurance, and packaging line automation, translating corporate cost-control theory into physical operational insight.'}
              </p>

              <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t text-xs ${
                currentTheme === 'light' ? 'border-stone-200' : 'border-white/10'
              }`}>
                <div>
                  <div className="text-[#A5AEA9] font-mono text-[10px] uppercase mb-1">
                    {currentLang === 'hi' ? 'संचालन क्षेत्र' : 'Focus Area'}
                  </div>
                  <div className={`font-bold ${currentTheme === 'light' ? 'text-stone-900' : 'text-[#F3F5F2]'}`}>
                    {currentLang === 'hi' ? 'आपूर्ति श्रृंखला एवं रसद' : 'Supply Chain & Logistics'}
                  </div>
                </div>
                <div>
                  <div className="text-[#A5AEA9] font-mono text-[10px] uppercase mb-1">
                    {currentLang === 'hi' ? 'प्रबंधन सिद्धांत' : 'Core Practice'}
                  </div>
                  <div className={`font-bold ${currentTheme === 'light' ? 'text-stone-900' : 'text-[#F3F5F2]'}`}>
                    {currentLang === 'hi' ? 'परिचालन लागत नियंत्रण' : 'Cost Minimization & Quality'}
                  </div>
                </div>
                <div>
                  <div className="text-[#A5AEA9] font-mono text-[10px] uppercase mb-1">
                    {currentLang === 'hi' ? 'सत्यापन' : 'Verification'}
                  </div>
                  <div className="font-bold text-[#00D6A0]">
                    {currentLang === 'hi' ? 'औद्योगिक फील्ड विजिट' : 'Institutional Field Study'}
                  </div>
                </div>
              </div>
            </div>

            <div className={`lg:col-span-4 flex flex-col justify-center items-center text-center p-6 rounded-2xl border ${
              currentTheme === 'light'
                ? 'bg-white border-stone-200 shadow-sm'
                : 'bg-[#080B0A]/80 border-[#00D6A0]/20'
            }`}>
              <div className="w-16 h-16 rounded-full bg-[#00D6A0]/15 border border-[#00D6A0]/40 flex items-center justify-center text-[#00D6A0] mb-4 shadow-[0_0_20px_rgba(0,214,160,0.25)]">
                <Factory className="w-8 h-8" />
              </div>
              <div className={`font-heading font-bold text-base mb-1 ${
                currentTheme === 'light' ? 'text-stone-900' : 'text-[#F3F5F2]'
              }`}>
                Amul Dairy Plant
              </div>
              <div className="text-xs text-[#A5AEA9] mb-3">
                {currentLang === 'hi' ? 'व्यावहारिक व्यावसायिक अंतर्दृष्टि' : 'Practical Business Insight'}
              </div>
              <span className="text-[11px] font-mono text-[#00D6A0] px-3.5 py-1 rounded-full bg-[#00D6A0]/10 border border-[#00D6A0]/30 font-semibold">
                Verified Industrial Milestone
              </span>
            </div>
          </div>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.slice(1).map((ach) => {
            const title = currentLang === 'hi' ? ach.titleHi : ach.titleEn;
            const desc = currentLang === 'hi' ? ach.descriptionHi : ach.descriptionEn;
            const highlights = currentLang === 'hi' ? ach.highlightsHi : ach.highlightsEn;

            return (
              <div
                key={ach.id}
                className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 ${
                  currentTheme === 'light'
                    ? 'bg-white border-stone-200 shadow-md hover:shadow-xl hover:border-[#0A8F6C]/40 text-stone-900'
                    : 'bg-[#141B18] border-[#00D6A0]/15 text-[#F3F5F2] hover:border-[#00D6A0]/40 hover:shadow-[0_15px_35px_rgba(0,214,160,0.12)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#0D1713] border border-[#00D6A0]/25 flex items-center justify-center">
                      {getAchievementIcon(ach.category)}
                    </div>
                    <span className="text-xs font-mono text-[#00D6A0] font-semibold">{ach.date}</span>
                  </div>

                  <div className="text-xs text-[#A5AEA9] font-mono mb-1">{ach.organization}</div>
                  <h4 className={`font-heading text-lg font-bold mb-3 ${
                    currentTheme === 'light' ? 'text-[#141B18]' : 'text-[#F3F5F2]'
                  }`}>
                    {title}
                  </h4>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-normal ${
                    currentTheme === 'light' ? 'text-[#4E5954]' : 'text-[#A5AEA9]'
                  }`}>
                    {desc}
                  </p>
                </div>

                <ul className="space-y-2 pt-4 border-t border-white/5 text-xs">
                  {highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00D6A0] shrink-0 mt-0.5" />
                      <span className={currentTheme === 'light' ? 'text-stone-700' : 'text-[#A5AEA9]'}>{h}</span>
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
