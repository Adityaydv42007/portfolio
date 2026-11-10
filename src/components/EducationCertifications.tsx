import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  Building2,
  CheckCircle2,
  ExternalLink,
  X,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { Language, Theme, CredentialItem } from '../types/portfolio';
import { portfolioData } from '../data/portfolioData';

interface EducationCertificationsProps {
  currentLang: Language;
  currentTheme: Theme;
}

export const EducationCertifications: React.FC<EducationCertificationsProps> = ({
  currentLang,
  currentTheme,
}) => {
  const { credentials, workshops } = portfolioData;
  const t = portfolioData.translations[currentLang];
  const [selectedCred, setSelectedCred] = useState<CredentialItem | null>(null);

  const getCredMeta = (cred: CredentialItem, idx: number) => {
    if (cred.id === 'tally-mfa') {
      return {
        icon: <Award className="w-5 h-5 text-[#F43F5E]" />,
        color: '#F43F5E',
        badge: 'text-[#F43F5E] bg-[#F43F5E]/10 border-[#F43F5E]/30',
        hoverBorder: 'hover:border-[#F43F5E]/50 hover:shadow-[0_15px_35px_rgba(244,63,94,0.15)]',
        btnText: 'text-[#F43F5E] hover:text-[#F43F5E]/80',
      };
    }
    if (cred.id.includes('ibm') || cred.nameEn.toLowerCase().includes('excel')) {
      return {
        icon: <Award className="w-5 h-5 text-[#10B981]" />,
        color: '#10B981',
        badge: 'text-[#10B981] bg-[#10B981]/10 border-[#10B981]/30',
        hoverBorder: 'hover:border-[#10B981]/50 hover:shadow-[0_15px_35px_rgba(16,185,129,0.15)]',
        btnText: 'text-[#10B981] hover:text-[#10B981]/80',
      };
    }
    return {
      icon: <GraduationCap className="w-5 h-5 text-[#38BDF8]" />,
      color: '#38BDF8',
      badge: 'text-[#38BDF8] bg-[#38BDF8]/10 border-[#38BDF8]/30',
      hoverBorder: 'hover:border-[#38BDF8]/50 hover:shadow-[0_15px_35px_rgba(56,189,248,0.15)]',
      btnText: 'text-[#38BDF8] hover:text-[#38BDF8]/80',
    };
  };

  return (
    <section id="credentials" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-[#38BDF8]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#10B981]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#F43F5E] via-[#38BDF8] to-[#10B981]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-bold">
              06 &middot; {t.credentialsKicker}
            </span>
          </div>
          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            currentTheme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
          }`}>
            {t.credentialsHeading}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F43F5E] via-[#38BDF8] to-[#10B981] mt-4 rounded-full" />
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {credentials.map((cred, idx) => {
            const name = currentLang === 'hi' ? cred.nameHi : cred.nameEn;
            const desc = currentLang === 'hi' ? cred.descriptionHi : cred.descriptionEn;
            const statusLabel = currentLang === 'hi' ? cred.statusLabelHi : cred.statusLabelEn;
            const meta = getCredMeta(cred, idx);

            return (
              <div
                key={cred.id}
                className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 group ${meta.hoverBorder} ${
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
                    <span className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border ${meta.badge}`}>
                      {statusLabel}
                    </span>
                  </div>

                  <div className="text-xs text-slate-400 font-mono mb-2 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span className={currentTheme === 'light' ? 'text-slate-700 font-medium' : 'text-[#F8FAFC]'}>
                      {cred.institution}
                    </span>
                  </div>

                  <h3 className={`font-heading text-lg font-bold mb-3 transition-colors ${
                    currentTheme === 'light'
                      ? 'text-[#0F172A] group-hover:text-[#0284C7]'
                      : 'text-[#F8FAFC] group-hover:text-[#38BDF8]'
                  }`}>
                    {name}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-normal ${
                    currentTheme === 'light' ? 'text-slate-600' : 'text-slate-400'
                  }`}>
                    {desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/30 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">{cred.date}</span>
                  <button
                    onClick={() => setSelectedCred(cred)}
                    className={`inline-flex items-center gap-1 text-xs font-bold ${meta.btnText} focus:outline-none py-1 group/btn`}
                  >
                    <span>{t.previewCertificate}</span>
                    <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified Workshops & Seminars Section */}
        <div className={`p-8 sm:p-10 rounded-3xl border transition-all ${
          currentTheme === 'light'
            ? 'bg-slate-50 border-slate-200 text-slate-900 shadow-md'
            : 'bg-[#121624] border-slate-800 text-[#F8FAFC]'
        }`}>
          <div className="mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800/40 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`font-heading text-xl font-bold ${
                currentTheme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
              }`}>
                {t.workshopsHeading}
              </h3>
              <p className="text-xs text-slate-400 font-mono">Hands-on technical workshops & seminars</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workshops.map((w, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border flex flex-col justify-between transition-all hover:border-[#38BDF8]/30 ${
                  currentTheme === 'light'
                    ? 'bg-white border-slate-200 shadow-sm text-slate-900'
                    : 'bg-[#090A0F] border-slate-800 text-[#F8FAFC]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
                    <span className={currentTheme === 'light' ? 'text-slate-700 font-medium' : 'text-[#F8FAFC]'}>
                      {w.institution}
                    </span>
                    <span className="font-mono text-[#38BDF8] font-semibold">{w.year}</span>
                  </div>
                  <h4 className={`font-heading font-bold text-base mb-2 ${
                    currentTheme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
                  }`}>
                    {currentLang === 'hi' ? w.titleHi : w.titleEn}
                  </h4>
                  <p className={`text-xs leading-relaxed font-normal ${
                    currentTheme === 'light' ? 'text-slate-600' : 'text-slate-400'
                  }`}>
                    {currentLang === 'hi' ? w.descriptionHi : w.descriptionEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Credential Details Modal */}
        {selectedCred && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-cred-title"
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setSelectedCred(null)}
          >
            <div
              className={`w-full max-w-lg rounded-3xl p-6 sm:p-8 border shadow-2xl relative ${
                currentTheme === 'light'
                  ? 'bg-white border-slate-200 text-slate-900'
                  : 'bg-[#121624] border-slate-800 text-[#F8FAFC]'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCred(null)}
                className="absolute top-5 right-5 p-2 rounded-full border border-slate-700/50 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label={t.closeModal}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs uppercase font-mono text-[#38BDF8] font-bold mb-3">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>Verified Academic & Professional Credential</span>
              </div>

              <h3 id="modal-cred-title" className={`font-heading text-2xl font-extrabold mb-3 ${
                currentTheme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
              }`}>
                {currentLang === 'hi' ? selectedCred.nameHi : selectedCred.nameEn}
              </h3>

              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-4 pb-4 border-b border-slate-700/40">
                <Building2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span className="font-medium">{selectedCred.institution}</span>
                <span>&middot;</span>
                <span>{selectedCred.date}</span>
              </div>

              <p className={`text-sm leading-relaxed mb-6 font-normal ${
                currentTheme === 'light' ? 'text-slate-600' : 'text-slate-400'
              }`}>
                {currentLang === 'hi' ? selectedCred.descriptionHi : selectedCred.descriptionEn}
              </p>

              <div className={`p-4 rounded-2xl border flex items-center justify-between text-xs font-mono ${
                currentTheme === 'light'
                  ? 'bg-slate-50 border-slate-200'
                  : 'bg-[#090A0F] border-slate-800'
              }`}>
                <span className="text-slate-400">Status Verification:</span>
                <span className="text-[#10B981] font-bold">
                  {currentLang === 'hi' ? selectedCred.statusLabelHi : selectedCred.statusLabelEn}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
