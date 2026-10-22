import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [viewMode, setViewMode] = useState<'interactive' | 'pdf'>('interactive');
  const pdfPath = '/assets/aistudio/Aditya_Yadav_Finance_Resume_e8e0c523.pdf';

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col bg-surface border border-stroke rounded-3xl shadow-2xl text-text-primary overflow-hidden"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-stroke bg-bg/50 shrink-0">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#89AACC]">RESUME DOSSIER</span>
              <span className="text-muted/40">·</span>
              <span className="text-xs text-muted font-mono">Aditya Yadav (BBA / Finance)</span>
            </div>

            <div className="flex items-center gap-2">
              {/* Toggle view mode */}
              <div className="flex items-center bg-bg rounded-lg border border-stroke p-0.5 text-xs">
                <button
                  onClick={() => setViewMode('interactive')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    viewMode === 'interactive'
                      ? 'bg-stroke/80 text-text-primary'
                      : 'text-muted hover:text-text-primary'
                  }`}
                >
                  Interactive
                </button>
                <button
                  onClick={() => setViewMode('pdf')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    viewMode === 'pdf'
                      ? 'bg-stroke/80 text-text-primary'
                      : 'text-muted hover:text-text-primary'
                  }`}
                >
                  PDF Document
                </button>
              </div>

              {/* Download original PDF */}
              <a
                href={pdfPath}
                download="Aditya_Yadav_Finance_Resume.pdf"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-lg bg-text-primary text-bg font-medium hover:opacity-90 transition-opacity"
              >
                <span>Download PDF</span>
                <span>↓</span>
              </a>

              {/* Close */}
              <button
                onClick={onClose}
                aria-label="Close resume"
                className="w-8 h-8 rounded-full bg-stroke/40 hover:bg-stroke text-muted hover:text-text-primary flex items-center justify-center transition-colors text-sm ml-1"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 md:p-10">
            {viewMode === 'pdf' ? (
              <div className="w-full h-[70vh] rounded-2xl overflow-hidden border border-stroke bg-bg flex flex-col items-center justify-center">
                <object
                  data={pdfPath}
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <div className="text-center p-8">
                    <p className="text-sm text-muted mb-4">
                      Unable to display PDF preview directly in this browser view.
                    </p>
                    <a
                      href={pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-text-primary text-bg text-xs font-medium"
                    >
                      Open PDF in New Window ↗
                    </a>
                  </div>
                </object>
              </div>
            ) : (
              <div className="space-y-8 max-w-3xl mx-auto">
                {/* Header Information */}
                <div className="border-b border-stroke pb-6">
                  <h1 className="text-3xl sm:text-4xl font-display text-text-primary mb-1">
                    Aditya Yadav
                  </h1>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#89AACC] font-semibold mb-3">
                    Finance Student | Finance Intern
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted font-mono">
                    <span>Kanpur, Uttar Pradesh</span>
                    <span aria-hidden="true">·</span>
                    <span>+91 9956237287</span>
                    <span aria-hidden="true">·</span>
                    <a
                      href="mailto:adityaydv42007@gmail.com"
                      className="hover:text-text-primary underline transition-colors"
                    >
                      adityaydv42007@gmail.com
                    </a>
                    <span aria-hidden="true">·</span>
                    <a
                      href="https://linkedin.com/in/adityayadav42007"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-text-primary underline transition-colors"
                    >
                      linkedin.com/in/adityayadav42007
                    </a>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <h2 className="text-xs uppercase tracking-[0.2em] text-muted font-semibold mb-2">
                    Professional Summary
                  </h2>
                  <p className="text-sm text-text-primary/90 leading-relaxed bg-bg/50 p-4 rounded-2xl border border-stroke/60">
                    BBA student with a solid foundation in financial accounting, business finance,
                    and business management. Currently pursuing Master in Financial Accounting at
                    VCEC Tally Academy and has completed MS Excel training. Familiar with Tally,
                    Excel, AI-assisted research, and business fundamentals. Brings analytical thinking,
                    attention to detail, problem-solving, and strong verbal and written communication.
                    Seeking a finance internship to build practical experience in accounting,
                    financial analysis, and reporting.
                  </p>
                </div>

                {/* Area of Expertise */}
                <div>
                  <h2 className="text-xs uppercase tracking-[0.2em] text-muted font-semibold mb-2">
                    Area of Expertise
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Financial Accounting Fundamentals',
                      'MS Excel',
                      'Tally (foundational familiarity)',
                      'Basic Financial Analysis',
                      'Budgeting Fundamentals',
                      'Data Organization',
                      'Analytical Thinking',
                      'Attention to Detail',
                      'Problem-Solving',
                      'Communication',
                    ].map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-bg/80 border border-stroke text-xs text-text-primary/90"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h2 className="text-xs uppercase tracking-[0.2em] text-muted font-semibold mb-2">
                    Key Achievements
                  </h2>
                  <div className="space-y-3">
                    <div className="p-4 rounded-2xl bg-bg/50 border border-stroke/60">
                      <div className="text-sm font-semibold text-text-primary mb-1">
                        Industrial Exposure: Amul Dairy Factory
                      </div>
                      <p className="text-xs text-muted leading-relaxed">
                        Observed high-volume production processes, supply chain operations, quality control protocols, and nationwide distribution workflows, gaining practical insight into business operations and industrial cost-control practices.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-bg/50 border border-stroke/60">
                      <div className="text-sm font-semibold text-text-primary mb-1">
                        Training Progress & Certifications
                      </div>
                      <p className="text-xs text-muted leading-relaxed">
                        Completed MS Excel training and IBM SkillsBuild AI Fundamentals certification; currently pursuing Master in Financial Accounting at VCEC Tally Academy.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-xs uppercase tracking-[0.2em] text-muted font-semibold mb-2">
                    Education
                  </h2>
                  <div className="space-y-3">
                    <div className="p-4 rounded-2xl bg-bg/50 border border-stroke/60 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <div className="text-sm font-semibold text-text-primary">
                          Bachelor of Business Administration (BBA)
                        </div>
                        <div className="text-xs text-muted">Allenhouse Business School</div>
                      </div>
                      <div className="text-xs font-mono text-[#89AACC]">Expected 2028</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-bg/50 border border-stroke/60 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <div className="text-sm font-semibold text-text-primary">
                          Intermediate (Class XII)
                        </div>
                        <div className="text-xs text-muted">R G Academy</div>
                      </div>
                      <div className="text-xs font-mono text-muted">Completed</div>
                    </div>
                  </div>
                </div>

                {/* Certifications & Training */}
                <div>
                  <h2 className="text-xs uppercase tracking-[0.2em] text-muted font-semibold mb-2">
                    Certifications & Training
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-bg/50 border border-stroke/60">
                      <div className="text-xs font-mono text-[#89AACC]">Currently pursuing</div>
                      <div className="text-sm font-medium text-text-primary mt-0.5">
                        Master in Financial Accounting
                      </div>
                      <div className="text-xs text-muted">VCEC Tally Academy</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-bg/50 border border-stroke/60">
                      <div className="text-xs font-mono text-emerald-400">Completed, 2025</div>
                      <div className="text-sm font-medium text-text-primary mt-0.5">
                        MS Excel Training
                      </div>
                      <div className="text-xs text-muted">Allenhouse Business School</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-bg/50 border border-stroke/60">
                      <div className="text-xs font-mono text-emerald-400">Completed, 2026</div>
                      <div className="text-sm font-medium text-text-primary mt-0.5">
                        AI Fundamentals: Language and Vision in AI
                      </div>
                      <div className="text-xs text-muted">IBM SkillsBuild</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-bg/50 border border-stroke/60">
                      <div className="text-xs font-mono text-[#89AACC]">Ongoing, 2026</div>
                      <div className="text-sm font-medium text-text-primary mt-0.5">
                        Digital Marketing Training
                      </div>
                      <div className="text-xs text-muted">Allenhouse Business School</div>
                    </div>
                  </div>
                </div>

                {/* Workshops & Seminars */}
                <div>
                  <h2 className="text-xs uppercase tracking-[0.2em] text-muted font-semibold mb-2">
                    Workshops & Seminars
                  </h2>
                  <div className="space-y-2 text-xs text-text-primary/90">
                    <div className="p-3 rounded-xl bg-bg/50 border border-stroke/60 flex items-center justify-between">
                      <span>Fintech Club Seminar</span>
                      <span className="text-muted font-mono">Allenhouse Business School, 2026</span>
                    </div>
                    <div className="p-3 rounded-xl bg-bg/50 border border-stroke/60 flex items-center justify-between">
                      <span>Fundamentals of Brand Building</span>
                      <span className="text-muted font-mono">Allenhouse Business School, 2026</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 border-t border-stroke bg-bg/50 flex items-center justify-between shrink-0">
            <span className="text-xs text-muted font-mono hidden sm:inline">
              Aditya Yadav · Finance Resume
            </span>
            <div className="flex items-center gap-3 ml-auto">
              <a
                href={pdfPath}
                download="Aditya_Yadav_Finance_Resume.pdf"
                className="px-4 py-2 rounded-full border border-stroke text-xs text-text-primary hover:bg-stroke/40 transition-colors"
              >
                Download PDF File
              </a>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-full bg-text-primary text-bg font-medium text-xs hover:opacity-90"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
