import React from 'react';
import {
  X,
  CheckCircle2,
  Clock,
  Sparkles,
  Sliders,
  FileCheck,
  ShieldCheck,
  Globe,
  Sun,
  Moon,
  ToggleLeft,
  ToggleRight,
  ExternalLink,
} from 'lucide-react';
import { Language, Theme } from '../types/portfolio';
import { portfolioData } from '../data/portfolioData';
import { calculateProfileCompleteness } from '../utils/portfolioLogic';

interface ProfileCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  isOpenToOpportunities: boolean;
  onToggleAvailability: () => void;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  currentTheme: Theme;
  onThemeToggle: () => void;
}

export const ProfileCustomizerModal: React.FC<ProfileCustomizerModalProps> = ({
  isOpen,
  onClose,
  isOpenToOpportunities,
  onToggleAvailability,
  currentLang,
  onLanguageChange,
  currentTheme,
  onThemeToggle,
}) => {
  if (!isOpen) return null;

  const t = portfolioData.translations[currentLang];
  const p = portfolioData.personal;

  // Calculate completeness score in real time
  const completeness = calculateProfileCompleteness({
    name: p.name,
    hasPhoto: Boolean(p.portraitPhotoUrl),
    hasResume: Boolean(p.resumePdfUrl),
    hasPhone: Boolean(p.phone),
    hasEmail: Boolean(p.email),
    hasLinkedIn: Boolean(p.linkedin),
    projectsCount: portfolioData.projects.length,
    credentialsCount: portfolioData.credentials.length,
    skillsCount: portfolioData.skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0),
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="customizer-modal-title"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 border shadow-2xl relative ${
          currentTheme === 'light'
            ? 'bg-white border-slate-200 text-slate-900'
            : 'bg-[#121624] border-slate-800 text-[#F8FAFC]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full border border-slate-700/50 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label={t.closeModal}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-8 h-8 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8]">
            <Sliders className="w-4 h-4" />
          </div>
          <h3 id="customizer-modal-title" className={`font-heading text-xl sm:text-2xl font-extrabold ${
            currentTheme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
          }`}>
            {t.profileCustomizerTitle}
          </h3>
        </div>
        <p className="text-xs text-slate-400 mb-6 font-mono">
          Real-time portfolio readiness, availability status toggle, and configuration metrics.
        </p>

        {/* Real-time Progress Bar in RGB Gradient */}
        <div className={`p-5 rounded-2xl border mb-6 ${
          currentTheme === 'light'
            ? 'bg-slate-50 border-slate-200'
            : 'bg-[#090A0F] border-slate-800'
        }`}>
          <div className="flex items-center justify-between text-xs font-semibold mb-2">
            <span className={currentTheme === 'light' ? 'text-slate-900' : 'text-[#F8FAFC]'}>
              {t.profileCompletion}
            </span>
            <span className="font-mono text-[#38BDF8] text-sm font-bold">{completeness.percentage}%</span>
          </div>

          <div className="w-full h-2 rounded-full bg-black/40 overflow-hidden mb-3 border border-white/5">
            <div
              className="h-full bg-gradient-to-r from-[#F43F5E] via-[#38BDF8] to-[#10B981] rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(56,189,248,0.5)]"
              style={{ width: `${completeness.percentage}%` }}
            />
          </div>

          <p className="text-[11px] text-slate-400">
            {completeness.percentage === 100
              ? 'All 9 verified profile items (portrait photo, official PDF resume, contact channels, projects, credentials) are verified & operational.'
              : `${completeness.pendingItems.length} checklist items pending configuration.`}
          </p>
        </div>

        {/* Availability Toggle */}
        <div className={`p-5 rounded-2xl border mb-6 flex items-center justify-between ${
          currentTheme === 'light'
            ? 'bg-slate-50 border-slate-200'
            : 'bg-[#090A0F] border-slate-800'
        }`}>
          <div>
            <div className={`font-heading font-bold text-sm mb-1 ${
              currentTheme === 'light' ? 'text-slate-900' : 'text-[#F8FAFC]'
            }`}>
              {t.openToOpportunities}
            </div>
            <p className="text-xs text-slate-400">
              Show &ldquo;Open to Opportunities&rdquo; status badge on hero banner and contact section.
            </p>
          </div>

          <button
            onClick={onToggleAvailability}
            className="p-1 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
            aria-label="Toggle availability status"
          >
            {isOpenToOpportunities ? (
              <ToggleRight className="w-8 h-8 text-[#10B981]" />
            ) : (
              <ToggleLeft className="w-8 h-8 text-slate-500" />
            )}
          </button>
        </div>

        {/* Language and Theme quick toggles */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className={`p-4 rounded-2xl border flex items-center justify-between ${
            currentTheme === 'light'
              ? 'bg-slate-50 border-slate-200'
              : 'bg-[#090A0F] border-slate-800'
          }`}>
            <div className="text-xs">
              <div className="text-slate-400 font-mono">Language</div>
              <div className={`font-bold text-sm ${currentTheme === 'light' ? 'text-slate-900' : 'text-[#F8FAFC]'}`}>
                {currentLang === 'en' ? 'English (EN)' : 'हिन्दी (Hindi)'}
              </div>
            </div>
            <button
              onClick={() => onLanguageChange(currentLang === 'en' ? 'hi' : 'en')}
              className="px-3 py-1.5 text-xs font-bold rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-[#38BDF8] transition-colors"
            >
              Toggle
            </button>
          </div>

          <div className={`p-4 rounded-2xl border flex items-center justify-between ${
            currentTheme === 'light'
              ? 'bg-slate-50 border-slate-200'
              : 'bg-[#090A0F] border-slate-800'
          }`}>
            <div className="text-xs">
              <div className="text-slate-400 font-mono">Theme</div>
              <div className={`font-bold text-sm ${currentTheme === 'light' ? 'text-slate-900' : 'text-[#F8FAFC]'}`}>
                {currentTheme === 'dark' ? 'Dark Mode' : 'Light Mode'}
              </div>
            </div>
            <button
              onClick={onThemeToggle}
              className="px-3 py-1.5 text-xs font-bold rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-[#F43F5E] transition-colors"
            >
              Toggle
            </button>
          </div>
        </div>

        {/* Verified Checklist */}
        <div className="space-y-2 mb-6">
          <div className="text-xs uppercase tracking-wider text-[#38BDF8] font-mono font-bold mb-2">
            Verified Audit Checklist
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {completeness.completedItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-[#090A0F] border border-slate-800 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Instructions for custom asset replacement */}
        <div className={`p-4 rounded-2xl border text-xs text-slate-400 space-y-1.5 ${
          currentTheme === 'light'
            ? 'bg-slate-50 border-slate-200'
            : 'bg-[#090A0F] border-slate-800'
        }`}>
          <div className="font-bold text-[#F8FAFC] flex items-center gap-1.5">
            <FileCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Asset Paths & Configuration Guide</span>
          </div>
          <p className="text-[11px] leading-relaxed font-mono">
            Resume PDF: <code className="text-[#38BDF8]">/public/assets/aistudio/Aditya_Yadav_Finance_Resume_e8e0c523.pdf</code>
          </p>
          <p className="text-[11px] leading-relaxed font-mono">
            Portrait Photo: <code className="text-[#10B981]">/public/assets/aistudio/photo_f0242c46.jpeg</code>
          </p>
        </div>
      </div>
    </div>
  );
};
