import React, { useState } from 'react';
import {
  FileSpreadsheet,
  Calculator,
  BrainCircuit,
  Database,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
  ShieldCheck
} from 'lucide-react';
import { Language, Theme } from '../types/portfolio';
import { portfolioData } from '../data/portfolioData';

interface SkillsGridProps {
  currentLang: Language;
  currentTheme: Theme;
}

export const SkillsGrid: React.FC<SkillsGridProps> = ({ currentLang, currentTheme }) => {
  const { skillCategories } = portfolioData;
  const t = portfolioData.translations[currentLang];
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');

  const filteredCategories =
    activeCategoryId === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategoryId);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'accounting':
        return <Calculator className="w-4 h-4 text-[#00D6A0]" />;
      case 'excel':
        return <FileSpreadsheet className="w-4 h-4 text-[#00D6A0]" />;
      case 'ai-tools':
        return <BrainCircuit className="w-4 h-4 text-[#C9A96E]" />;
      case 'tech-tools':
        return <Database className="w-4 h-4 text-[#00D6A0]" />;
      default:
        return <Layers className="w-4 h-4 text-[#00D6A0]" />;
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-[#00D6A0]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#00D6A0]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#00D6A0] font-bold">
              03 &middot; {t.skillsKicker}
            </span>
          </div>
          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            currentTheme === 'light' ? 'text-[#141B18]' : 'text-[#F3F5F2]'
          }`}>
            {t.skillsHeading}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00D6A0] via-[#C9A96E] to-transparent mt-4 rounded-full" />
        </div>

        {/* Category Filter Tabs (Interactive Segmented Control) */}
        <div className={`flex flex-wrap items-center gap-2 mb-12 p-1.5 rounded-2xl border max-w-fit transition-colors ${
          currentTheme === 'light'
            ? 'bg-stone-100 border-stone-200 shadow-sm'
            : 'bg-[#141B18] border-[#00D6A0]/15'
        }`}>
          <button
            onClick={() => setActiveCategoryId('all')}
            className={`px-4 py-2 text-xs font-medium rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00D6A0] whitespace-nowrap ${
              activeCategoryId === 'all'
                ? currentTheme === 'light'
                  ? 'bg-[#0A8F6C] text-white font-semibold shadow-sm'
                  : 'bg-[#00D6A0] text-[#080B0A] font-bold shadow-[0_0_15px_rgba(0,214,160,0.3)]'
                : currentTheme === 'light'
                  ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-200'
                  : 'text-[#A5AEA9] hover:text-[#F3F5F2] hover:bg-white/5'
            }`}
          >
            {currentLang === 'hi' ? 'सभी श्रेणियां' : 'All Disciplines'}
          </button>

          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategoryId(category.id)}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00D6A0] whitespace-nowrap flex items-center gap-1.5 ${
                activeCategoryId === category.id
                  ? currentTheme === 'light'
                    ? 'bg-[#0A8F6C] text-white font-semibold shadow-sm'
                    : 'bg-[#00D6A0] text-[#080B0A] font-bold shadow-[0_0_15px_rgba(0,214,160,0.3)]'
                  : currentTheme === 'light'
                    ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-200'
                    : 'text-[#A5AEA9] hover:text-[#F3F5F2] hover:bg-white/5'
              }`}
            >
              {getCategoryIcon(category.id)}
              <span>{currentLang === 'hi' ? category.nameHi : category.nameEn}</span>
            </button>
          ))}
        </div>

        {/* Categorized Skills Display */}
        <div className="space-y-14">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-5">
              <div className="flex items-center gap-3">
                <span className={`font-heading text-lg font-bold flex items-center gap-2 ${
                  currentTheme === 'light' ? 'text-[#141B18]' : 'text-[#F3F5F2]'
                }`}>
                  {getCategoryIcon(category.id)}
                  <span>{currentLang === 'hi' ? category.nameHi : category.nameEn}</span>
                </span>
                <span className="text-xs text-[#00D6A0] font-mono">
                  ({category.skills.length} {currentLang === 'hi' ? 'दक्षताएं' : 'core competencies'})
                </span>
                <div className={`flex-1 h-px ${currentTheme === 'light' ? 'bg-stone-200' : 'bg-white/10'}`} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden ${
                      currentTheme === 'light'
                        ? 'bg-white border-stone-200 shadow-sm hover:shadow-lg hover:border-[#0A8F6C]/40 text-stone-900'
                        : 'bg-[#141B18] border-[#00D6A0]/15 text-[#F3F5F2] hover:border-[#00D6A0]/40 hover:shadow-[0_10px_25px_rgba(0,214,160,0.12)]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono tracking-wider uppercase text-[#00D6A0] font-semibold bg-[#00D6A0]/10 px-2 py-0.5 rounded-full">
                        {skill.categoryTag}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-[#00D6A0]/70 group-hover:text-[#00D6A0] group-hover:scale-110 transition-all" />
                    </div>

                    <h4 className={`font-heading text-sm font-bold mb-2 group-hover:text-[#00D6A0] transition-colors ${
                      currentTheme === 'light' ? 'text-[#141B18]' : 'text-[#F3F5F2]'
                    }`}>
                      {skill.name}
                    </h4>

                    <p className={`text-xs leading-relaxed font-normal ${
                      currentTheme === 'light' ? 'text-[#4E5954]' : 'text-[#A5AEA9]'
                    }`}>
                      {currentLang === 'hi' ? skill.descriptionHi : skill.descriptionEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
