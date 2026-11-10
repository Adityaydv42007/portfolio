import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  Layers,
  FileSpreadsheet,
  BarChart,
  Cpu,
  Factory,
  X,
  Maximize2,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Language, Theme, ProjectItem } from '../types/portfolio';
import { portfolioData } from '../data/portfolioData';
import { filterProjects, getCategoryBadgeClass } from '../utils/portfolioLogic';

interface ProjectsGalleryProps {
  currentLang: Language;
  currentTheme: Theme;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ currentLang, currentTheme }) => {
  const { projects } = portfolioData;
  const t = portfolioData.translations[currentLang];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const displayedProjects = filterProjects(projects, selectedCategory);

  // Keyboard accessibility: ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };
    if (activeModalProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeModalProject]);

  const categoryFilters = [
    { id: 'all', labelEn: 'All Projects', labelHi: 'सभी परियोजनाएं' },
    { id: 'financial_analytics', labelEn: 'Financial Analytics', labelHi: 'वित्तीय विश्लेषण' },
    { id: 'accounting_tally', labelEn: 'Accounting & Tally', labelHi: 'लेखांकन एवं टैली' },
    { id: 'ai_technology', labelEn: 'AI & Emerging Tech', labelHi: 'एआई एवं आधुनिक तकनीक' },
    { id: 'business_fintech', labelEn: 'Operational Case Studies', labelHi: 'परिचालन केस स्टडीज' },
  ];

  const getProjectIcon = (category: string) => {
    switch (category) {
      case 'financial_analytics':
        return <FileSpreadsheet className="w-5 h-5 text-[#00D6A0]" />;
      case 'accounting_tally':
        return <BarChart className="w-5 h-5 text-[#00D6A0]" />;
      case 'ai_technology':
        return <Cpu className="w-5 h-5 text-[#C9A96E]" />;
      default:
        return <Factory className="w-5 h-5 text-[#C9A96E]" />;
    }
  };

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Ambient background lighting */}
      <div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#00D6A0]/5 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#00D6A0]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#00D6A0] font-bold">
              04 &middot; {t.projectsKicker}
            </span>
          </div>
          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            currentTheme === 'light' ? 'text-[#141B18]' : 'text-[#F3F5F2]'
          }`}>
            {t.projectsHeading}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00D6A0] via-[#C9A96E] to-transparent mt-4 rounded-full" />
        </div>

        {/* Filter Controls (Segmented Tabs) */}
        <div className={`flex flex-wrap items-center gap-2 mb-12 p-1.5 rounded-2xl border max-w-fit transition-colors ${
          currentTheme === 'light'
            ? 'bg-stone-100 border-stone-200 shadow-sm'
            : 'bg-[#141B18] border-[#00D6A0]/15'
        }`}>
          {categoryFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedCategory(filter.id)}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00D6A0] whitespace-nowrap ${
                selectedCategory === filter.id
                  ? currentTheme === 'light'
                    ? 'bg-[#0A8F6C] text-white font-semibold shadow-sm'
                    : 'bg-[#00D6A0] text-[#080B0A] font-bold shadow-[0_0_15px_rgba(0,214,160,0.3)]'
                  : currentTheme === 'light'
                    ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-200'
                    : 'text-[#A5AEA9] hover:text-[#F3F5F2] hover:bg-white/5'
              }`}
            >
              {currentLang === 'hi' ? filter.labelHi : filter.labelEn}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => {
            const title = currentLang === 'hi' ? project.titleHi : project.titleEn;
            const desc = currentLang === 'hi' ? project.descriptionHi : project.descriptionEn;
            const categoryLabel = currentLang === 'hi' ? project.categoryLabelHi : project.categoryLabelEn;

            return (
              <div
                key={project.id}
                className={`p-8 rounded-3xl border transition-all duration-400 flex flex-col justify-between group hover:-translate-y-2 relative overflow-hidden ${
                  currentTheme === 'light'
                    ? 'bg-white border-stone-200 shadow-md hover:shadow-2xl hover:border-[#0A8F6C]/50 text-stone-900'
                    : 'bg-[#141B18]/90 backdrop-blur-md border-[#00D6A0]/15 text-[#F3F5F2] hover:border-[#00D6A0]/50 hover:shadow-[0_20px_45px_rgba(0,214,160,0.18)]'
                }`}
              >
                {/* Subtle emerald shine on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D6A0]/5 rounded-bl-full pointer-events-none group-hover:bg-[#00D6A0]/10 transition-colors duration-500" />

                <div>
                  {/* Card Header: Category & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5 text-xs text-[#A5AEA9]">
                      <div className="p-2 rounded-xl bg-[#0D1713] border border-[#00D6A0]/20">
                        {getProjectIcon(project.category)}
                      </div>
                      <span className={`font-mono font-medium ${currentTheme === 'light' ? 'text-stone-700' : 'text-[#F3F5F2]'}`}>
                        {categoryLabel}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#00D6A0] bg-[#00D6A0]/10 px-2.5 py-1 rounded-full font-semibold">
                      {project.status === 'case_study'
                        ? (currentLang === 'hi' ? 'केस स्टडी' : 'Case Study')
                        : (currentLang === 'hi' ? 'पूर्ण' : 'Completed')}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`font-heading text-xl sm:text-2xl font-bold tracking-tight mb-3 transition-colors ${
                    currentTheme === 'light'
                      ? 'text-[#141B18] group-hover:text-[#0A8F6C]'
                      : 'text-[#F3F5F2] group-hover:text-[#00D6A0]'
                  }`}>
                    {title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-6 font-normal ${
                    currentTheme === 'light' ? 'text-[#4E5954]' : 'text-[#A5AEA9]'
                  }`}>
                    {desc}
                  </p>

                  {/* Tools Unboxed Typography */}
                  <div className="mb-6 pt-4 border-t border-white/5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#A5AEA9] mb-2 font-semibold">
                      {t.toolsUsed}
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {project.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-2.5 py-1 rounded-lg border font-mono transition-colors ${
                            currentTheme === 'light'
                              ? 'bg-stone-50 border-stone-200 text-stone-700'
                              : 'bg-[#0D1713] border-white/5 text-[#A5AEA9] group-hover:border-[#00D6A0]/20'
                          }`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#00D6A0] hover:text-[#00D6A0]/80 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00D6A0] py-1 group/btn"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{t.previewProject}</span>
                    <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>

                  <span className="text-xs text-[#A5AEA9] font-mono">
                    {project.keyOutcomesEn.length} {currentLang === 'hi' ? 'परिणाम' : 'outcomes'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Detail Lightbox Modal */}
        {activeModalProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setActiveModalProject(null)}
          >
            <div
              className={`w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 border shadow-2xl relative ${
                currentTheme === 'light'
                  ? 'bg-white border-stone-200 text-stone-900'
                  : 'bg-[#141B18] border-[#00D6A0]/20 text-[#F3F5F2]'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full border border-white/10 text-[#A5AEA9] hover:text-white hover:bg-white/10 transition-colors"
                aria-label={t.closeModal}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Category */}
              <div className="flex items-center gap-2 text-xs text-[#00D6A0] font-mono font-bold uppercase tracking-wider mb-2">
                {getProjectIcon(activeModalProject.category)}
                <span>
                  {currentLang === 'hi'
                    ? activeModalProject.categoryLabelHi
                    : activeModalProject.categoryLabelEn}
                </span>
              </div>

              {/* Modal Title */}
              <h3 id="modal-project-title" className={`font-heading text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 ${
                currentTheme === 'light' ? 'text-[#141B18]' : 'text-[#F3F5F2]'
              }`}>
                {currentLang === 'hi' ? activeModalProject.titleHi : activeModalProject.titleEn}
              </h3>

              {/* Description */}
              <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
                currentTheme === 'light' ? 'text-[#4E5954]' : 'text-[#A5AEA9]'
              }`}>
                {currentLang === 'hi' ? activeModalProject.descriptionHi : activeModalProject.descriptionEn}
              </p>

              {/* Methodology & Structure */}
              <div className={`mb-6 p-5 rounded-2xl border ${
                currentTheme === 'light'
                  ? 'bg-stone-50 border-stone-200'
                  : 'bg-[#0D1713] border-[#00D6A0]/15'
              }`}>
                <div className="text-xs font-mono uppercase tracking-wider text-[#00D6A0] font-bold mb-2">
                  {t.methodology}
                </div>
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  currentTheme === 'light' ? 'text-stone-700' : 'text-[#A5AEA9]'
                }`}>
                  {currentLang === 'hi'
                    ? activeModalProject.methodologyHi
                    : activeModalProject.methodologyEn}
                </p>
              </div>

              {/* Key Outcomes List */}
              <div className="mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-[#C9A96E] font-bold mb-3">
                  {t.keyOutcomes}
                </div>
                <ul className="space-y-2.5">
                  {(currentLang === 'hi'
                    ? activeModalProject.keyOutcomesHi
                    : activeModalProject.keyOutcomesEn
                  ).map((outcome, oIdx) => (
                    <li key={oIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#00D6A0] shrink-0 mt-0.5" />
                      <span className={currentTheme === 'light' ? 'text-stone-700' : 'text-[#A5AEA9]'}>
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools Used */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs text-[#A5AEA9] font-mono">{t.toolsUsed}:</span>
                {activeModalProject.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-lg bg-[#080B0A] border border-[#00D6A0]/20 text-[#00D6A0] font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
