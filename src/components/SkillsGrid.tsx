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

  const getCategoryColor = (id: string) => {
    switch (id) {
      case 'accounting':
        return {
          icon: <Calculator className="w-4 h-4 text-[#F43F5E]" />,
          color: '#F43F5E',
          tagClass: 'text-[#F43F5E] bg-[#F43F5E]/10 border-[#F43F5E]/30',
          hoverBorder: 'hover:border-[#F43F5E]/50',
          hoverShadow: 'hover:shadow-[0_10px_25px_rgba(244,63,94,0.15)]',
          activeBtn: 'bg-[#F43F5E] text-white shadow-[0_0_15px_rgba(244,63,94,0.4)]',
        };
      case 'excel':
        return {
          icon: <FileSpreadsheet className="w-4 h-4 text-[#10B981]" />,
          color: '#10B981',
          tagClass: 'text-[#10B981] bg-[#10B981]/10 border-[#10B981]/30',
          hoverBorder: 'hover:border-[#10B981]/50',
          hoverShadow: 'hover:shadow-[0_10px_25px_rgba(16,185,129,0.15)]',
          activeBtn: 'bg-[#10B981] text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]',
        };
      case 'ai-tools':
        return {
          icon: <BrainCircuit className="w-4 h-4 text-[#38BDF8]" />,
          color: '#38BDF8',
          tagClass: 'text-[#38BDF8] bg-[#38BDF8]/10 border-[#38BDF8]/30',
          hoverBorder: 'hover:border-[#38BDF8]/50',
          hoverShadow: 'hover:shadow-[0_10px_25px_rgba(56,189,248,0.15)]',
          activeBtn: 'bg-[#38BDF8] text-[#090A0F] font-bold shadow-[0_0_15px_rgba(56,189,248,0.4)]',
        };
      case 'tech-tools':
      default:
        return {
          icon: <Database className="w-4 h-4 text-[#38BDF8]" />,
          color: '#38BDF8',
          tagClass: 'text-[#38BDF8] bg-[#38BDF8]/10 border-[#38BDF8]/30',
          hoverBorder: 'hover:border-[#38BDF8]/50',
          hoverShadow: 'hover:shadow-[0_10px_25px_rgba(56,189,248,0.15)]',
          activeBtn: 'bg-[#38BDF8] text-[#090A0F] font-bold shadow-[0_0_15px_rgba(56,189,248,0.4)]',
        };
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background ambient lighting with Red and Blue and Green */}
      <div
        className="absolute top-1/2 left-[-100px] w-[450px] h-[450px] bg-[#38BDF8]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-[-100px] w-[450px] h-[450px] bg-[#10B981]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#F43F5E] via-[#38BDF8] to-[#10B981]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-bold">
              03 &middot; {t.skillsKicker}
            </span>
          </div>
          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            currentTheme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
          }`}>
            {t.skillsHeading}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F43F5E] via-[#38BDF8] to-[#10B981] mt-4 rounded-full" />
        </div>

        {/* Category Filter Tabs (Interactive Segmented Control) */}
        <div className={`flex flex-wrap items-center gap-2 mb-12 p-1.5 rounded-2xl border max-w-fit transition-colors ${
          currentTheme === 'light'
            ? 'bg-slate-100 border-slate-200 shadow-sm'
            : 'bg-[#121624] border-slate-800'
        }`}>
          <button
            onClick={() => setActiveCategoryId('all')}
            className={`px-4 py-2 text-xs font-medium rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] whitespace-nowrap ${
              activeCategoryId === 'all'
                ? 'bg-gradient-to-r from-[#F43F5E] via-[#38BDF8] to-[#10B981] text-white font-bold shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                : currentTheme === 'light'
                  ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-200'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {currentLang === 'hi' ? 'सभी श्रेणियां' : 'All Disciplines'}
          </button>

          {skillCategories.map((category) => {
            const catStyle = getCategoryColor(category.id);
            const isActive = activeCategoryId === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategoryId(category.id)}
                className={`px-4 py-2 text-xs font-medium rounded-xl transition-all duration-300 focus:outline-none whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? catStyle.activeBtn
                    : currentTheme === 'light'
                      ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-200'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {catStyle.icon}
                <span>{currentLang === 'hi' ? category.nameHi : category.nameEn}</span>
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Display */}
        <div className="space-y-14">
          {filteredCategories.map((category) => {
            const catStyle = getCategoryColor(category.id);

            return (
              <div key={category.id} className="space-y-5">
                <div className="flex items-center gap-3">
                  <span className={`font-heading text-lg font-bold flex items-center gap-2 ${
                    currentTheme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
                  }`}>
                    {catStyle.icon}
                    <span>{currentLang === 'hi' ? category.nameHi : category.nameEn}</span>
                  </span>
                  <span className="text-xs font-mono" style={{ color: catStyle.color }}>
                    ({category.skills.length} {currentLang === 'hi' ? 'दक्षताएं' : 'core competencies'})
                  </span>
                  <div className={`flex-1 h-px ${currentTheme === 'light' ? 'bg-slate-200' : 'bg-slate-800'}`} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden ${catStyle.hoverBorder} ${catStyle.hoverShadow} ${
                        currentTheme === 'light'
                          ? 'bg-white border-slate-200 shadow-sm hover:shadow-lg text-slate-900'
                          : 'bg-[#121624] border-slate-800 text-[#F8FAFC]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-[10px] font-mono tracking-wider uppercase font-semibold px-2 py-0.5 rounded-full border ${catStyle.tagClass}`}>
                          {skill.categoryTag}
                        </span>
                        <CheckCircle2
                          className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all"
                          style={{ color: catStyle.color }}
                        />
                      </div>

                      <h4 className="font-heading text-sm font-bold mb-2 group-hover:text-[#38BDF8] transition-colors">
                        {skill.name}
                      </h4>

                      <p className={`text-xs leading-relaxed font-normal ${
                        currentTheme === 'light' ? 'text-slate-600' : 'text-slate-400'
                      }`}>
                        {currentLang === 'hi' ? skill.descriptionHi : skill.descriptionEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
