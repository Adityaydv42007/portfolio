import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { Language, Theme } from '../types/portfolio';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  currentTheme: Theme;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  currentTheme,
}) => {
  const p = portfolioData.personal;
  const t = portfolioData.translations[currentLang];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`w-full max-w-4xl h-[90vh] rounded-3xl border shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden relative ${
          currentTheme === 'light'
            ? 'bg-white border-slate-200 text-slate-900'
            : 'bg-[#121624] border-slate-800 text-[#F8FAFC]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between shrink-0 bg-[#090A0F]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="font-heading font-bold text-sm sm:text-base text-[#F8FAFC]">
                Aditya Yadav &mdash; Official Resume
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Kanpur, Uttar Pradesh &middot; BBA &middot; Tally &middot; AI
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={p.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-slate-700/60 text-slate-300 hover:text-white hover:bg-white/10 transition-colors hidden sm:flex items-center gap-1.5 text-xs font-mono"
              title={t.openNewTab}
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>{t.openNewTab}</span>
            </a>

            <a
              href={p.resumePdfUrl}
              download="Aditya_Yadav_Finance_Resume.pdf"
              className="px-4 py-2 rounded-xl bg-[#F43F5E] hover:bg-[#F43F5E]/90 text-white font-bold text-xs transition-all shadow-[0_0_15px_rgba(244,63,94,0.3)] flex items-center gap-1.5 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.downloadPdf}</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl border border-slate-700/60 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label={t.closeModal}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 w-full h-full bg-[#090A0F] relative overflow-hidden">
          <iframe
            src={`${p.resumePdfUrl}#view=FitH`}
            title="Aditya Yadav Resume PDF Viewer"
            className="w-full h-full border-0"
          />
        </div>

        {/* Footer fallback info */}
        <div className="px-6 py-3 bg-[#090A0F] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0 font-mono">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Verified Source of Truth: Allenhouse Business School & VCEC Tally Academy</span>
          </div>
          <span className="text-[11px] text-[#10B981]">PDF Asset Verified</span>
        </div>
      </div>
    </div>
  );
};
