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

  return (
    <section id="credentials" className="py-24 md:py-32 relative overflow-hidden">
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
              06 &middot; {t.credentialsKicker}
            </span>
          </div>
          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            currentTheme === 'light' ? 'text-[#141B18]' : 'text-[#F3F5F2]'
          }`}>
            {t.credentialsHeading}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00D6A0] via-[#C9A96E] to-transparent mt-4 rounded-full" />
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {credentials.map((cred) => {
            const name = currentLang === 'hi' ? cred.nameHi : cred.nameEn;
            const desc = currentLang === 'hi' ? cred.descriptionHi : cred.descriptionEn;
            const statusLabel = currentLang === 'hi' ? cred.statusLabelHi : cred.statusLabelEn;

            return (
              <div
                key={cred.id}
                className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 group ${
                  currentTheme === 'light'
                    ? 'bg-white border-stone-200 shadow-md hover:shadow-xl hover:border-[#0A8F6C]/40 text-stone-900'
                    : 'bg-[#141B18] border-[#00D6A0]/15 text-[#F3F5F2] hover:border-[#00D6A0]/40 hover:shadow-[0_15px_35px_rgba(0,214,160,0.12)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#0D1713] border border-[#00D6A0]/25 flex items-center justify-center text-[#00D6A0]">
                      {cred.institution.includes('Allenhouse') || cred.institution.includes('Academy') ? (
                        <GraduationCap className="w-5 h-5" />
                      ) : (
                        <Award className="w-5 h-5 text-[#C9A96E]" />
                      )}
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-[#00D6A0] px-2.5 py-1 rounded-full bg-[#00D6A0]/10 border border-[#00D6A0]/20">
                      {statusLabel}
                    </span>
                  </div>

                  <div className="text-xs text-[#A5AEA9] font-mono mb-2 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#00D6A0]" />
                    <span className={currentTheme === 'light' ? 'text-stone-700 font-medium' : 'text-[#F3F5F2]'}>
                      {cred.institution}
                    </span>
                  </div>

                  <h3 className={`font-heading text-lg font-bold mb-3 transition-colors ${
                    currentTheme === 'light'
                      ? 'text-[#141B18] group-hover:text-[#0A8F6C]'
                      : 'text-[#F3F5F2] group-hover:text-[#00D6A0]'
                  }`}>
                    {name}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-normal ${
                    currentTheme === 'light' ? 'text-[#4E5954]' : 'text-[#A5AEA9]'
                  }`}>
                    {desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-[#A5AEA9] font-mono">{cred.date}</span>
                  <button
                    onClick={() => setSelectedCred(cred)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#00D6A0] hover:text-[#00D6A0]/80 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00D6A0] py-1 group/btn"
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
            ? 'bg-stone-50 border-stone-200 text-stone-900 shadow-md'
            : 'bg-[#141B18] border-[#00D6A0]/15 text-[#F3F5F2]'
        }`}>
          <div className="mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0D1713] border border-[#00D6A0]/30 flex items-center justify-center text-[#00D6A0]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`font-heading text-xl font-bold ${
                currentTheme === 'light' ? 'text-[#141B18]' : 'text-[#F3F5F2]'
              }`}>
                {t.workshopsHeading}
              </h3>
              <p className="text-xs text-[#A5AEA9] font-mono">Hands-on technical workshops & seminars</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workshops.map((w, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border flex flex-col justify-between transition-all hover:border-[#00D6A0]/30 ${
                  currentTheme === 'light'
                    ? 'bg-white border-stone-200 shadow-sm text-stone-900'
                    : 'bg-[#0D1713] border-white/5 text-[#F3F5F2]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#A5AEA9] font-mono mb-2">
                    <span className={currentTheme === 'light' ? 'text-stone-700 font-medium' : 'text-[#F3F5F2]'}>
                      {w.institution}
                    </span>
                    <span className="font-mono text-[#00D6A0] font-semibold">{w.year}</span>
                  </div>
                  <h4 className={`font-heading font-bold text-base mb-2 ${
                    currentTheme === 'light' ? 'text-[#141B18]' : 'text-[#F3F5F2]'
                  }`}>
                    {currentLang === 'hi' ? w.titleHi : w.titleEn}
                  </h4>
                  <p className={`text-xs leading-relaxed font-normal ${
                    currentTheme === 'light' ? 'text-[#4E5954]' : 'text-[#A5AEA9]'
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
                  ? 'bg-white border-stone-200 text-stone-900'
                  : 'bg-[#141B18] border-[#00D6A0]/20 text-[#F3F5F2]'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCred(null)}
                className="absolute top-5 right-5 p-2 rounded-full border border-white/10 text-[#A5AEA9] hover:text-white hover:bg-white/10 transition-colors"
                aria-label={t.closeModal}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs uppercase font-mono text-[#00D6A0] font-bold mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Academic & Professional Credential</span>
              </div>

              <h3 id="modal-cred-title" className={`font-heading text-2xl font-extrabold mb-3 ${
                currentTheme === 'light' ? 'text-[#141B18]' : 'text-[#F3F5F2]'
              }`}>
                {currentLang === 'hi' ? selectedCred.nameHi : selectedCred.nameEn}
              </h3>

              <div className="flex items-center gap-2 text-xs text-[#A5AEA9] font-mono mb-4 pb-4 border-b border-white/10">
                <Building2 className="w-3.5 h-3.5 text-[#00D6A0]" />
                <span className="font-medium">{selectedCred.institution}</span>
                <span>&middot;</span>
                <span>{selectedCred.date}</span>
              </div>

              <p className={`text-sm leading-relaxed mb-6 font-normal ${
                currentTheme === 'light' ? 'text-[#4E5954]' : 'text-[#A5AEA9]'
              }`}>
                {currentLang === 'hi' ? selectedCred.descriptionHi : selectedCred.descriptionEn}
              </p>

              <div className={`p-4 rounded-2xl border flex items-center justify-between text-xs font-mono ${
                currentTheme === 'light'
                  ? 'bg-stone-50 border-stone-200'
                  : 'bg-[#080B0A] border-[#00D6A0]/20'
              }`}>
                <span className="text-[#A5AEA9]">Status Verification:</span>
                <span className="text-[#00D6A0] font-bold">
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
