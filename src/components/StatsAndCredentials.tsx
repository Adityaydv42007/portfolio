import { useState } from 'react';
import { motion } from 'framer-motion';

interface StatsAndCredentialsProps {
  onOpenResume: () => void;
}

export default function StatsAndCredentials({ onOpenResume }: StatsAndCredentialsProps) {
  const [activeTab, setActiveTab] = useState<'skills' | 'education' | 'certifications' | 'industrial'>('skills');

  const stats = [
    {
      value: '2028',
      label: 'BBA Target Degree',
      sublabel: 'Allenhouse Business School',
    },
    {
      value: '100%',
      label: 'Practical Rigor',
      sublabel: 'Double-entry parity & formula integrity',
    },
    {
      value: '4+',
      label: 'Core Certifications',
      sublabel: 'Tally FA, MS Excel, IBM AI, Digital Marketing',
    },
  ];

  const skills = [
    'Financial Accounting Fundamentals',
    'MS Excel Modeling (Formulas & Pivots)',
    'Tally Prime & ERP Foundational Mastery',
    'Basic Financial & Variance Analysis',
    'Budgeting Fundamentals',
    'Data Organization & Reconciliation',
    'Analytical Thinking & Problem-Solving',
    'Cost-Control & Supply Chain Insights',
    'AI-Assisted Financial Research',
    'Business Management Communication',
  ];

  return (
    <section id="credentials" className="bg-bg py-16 md:py-24 text-text-primary border-t border-stroke/60">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* 3-Column Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 border-b border-stroke/60">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="text-5xl sm:text-6xl md:text-7xl font-display text-text-primary tabular-nums tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-medium text-text-primary mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted font-mono">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Credentials & Resume Deep Dive */}
        <div className="pt-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-px bg-stroke" />
                <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
                  Verified Dossier
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-light text-text-primary">
                Academic & <span className="font-display italic text-[#89AACC]">Professional</span> Background
              </h3>
            </div>

            {/* Segmented Filter Controls */}
            <div className="flex items-center gap-1 p-1 bg-surface rounded-full border border-stroke overflow-x-auto">
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-colors whitespace-nowrap ${
                  activeTab === 'skills'
                    ? 'bg-stroke/80 text-text-primary shadow-sm'
                    : 'text-muted hover:text-text-primary'
                }`}
              >
                Expertise
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-colors whitespace-nowrap ${
                  activeTab === 'education'
                    ? 'bg-stroke/80 text-text-primary shadow-sm'
                    : 'text-muted hover:text-text-primary'
                }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTab('certifications')}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-colors whitespace-nowrap ${
                  activeTab === 'certifications'
                    ? 'bg-stroke/80 text-text-primary shadow-sm'
                    : 'text-muted hover:text-text-primary'
                }`}
              >
                Certifications
              </button>
              <button
                onClick={() => setActiveTab('industrial')}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-colors whitespace-nowrap ${
                  activeTab === 'industrial'
                    ? 'bg-stroke/80 text-text-primary shadow-sm'
                    : 'text-muted hover:text-text-primary'
                }`}
              >
                Industry Exposure
              </button>
            </div>
          </div>

          {/* Tab Content Panes */}
          <div className="bg-surface/40 border border-stroke rounded-3xl p-6 sm:p-8 md:p-10">
            {activeTab === 'skills' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-bg/60 border border-stroke/70"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#89AACC] shrink-0" />
                    <span className="text-sm text-text-primary/90 font-medium">{skill}</span>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'education' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="p-5 rounded-2xl bg-bg/60 border border-stroke/70">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="text-base sm:text-lg font-medium text-text-primary">
                      Bachelor of Business Administration (BBA)
                    </h4>
                    <span className="text-xs font-mono text-[#89AACC]">Expected 2028</span>
                  </div>
                  <div className="text-sm text-muted mb-2 font-mono">
                    Allenhouse Business School · Kanpur
                  </div>
                  <p className="text-xs sm:text-sm text-text-primary/80 leading-relaxed">
                    Foundation in financial accounting, business finance, and business management.
                    Active participant in fintech club and brand building workshops.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-bg/60 border border-stroke/70">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="text-base sm:text-lg font-medium text-text-primary">
                      Intermediate (Class XII)
                    </h4>
                    <span className="text-xs font-mono text-muted">Completed</span>
                  </div>
                  <div className="text-sm text-muted font-mono">
                    R G Academy
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'certifications' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className="p-5 rounded-2xl bg-bg/60 border border-stroke/70 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono text-[#89AACC] mb-1">Currently Pursuing</div>
                    <h4 className="text-base font-medium text-text-primary mb-1">
                      Master in Financial Accounting
                    </h4>
                    <div className="text-xs text-muted mb-3 font-mono">VCEC Tally Academy</div>
                    <p className="text-xs text-text-primary/80 leading-relaxed">
                      Advanced ledger accounts, voucher classification, trial balance, and tax reconciliation.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-bg/60 border border-stroke/70 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono text-emerald-400 mb-1">Completed · 2025</div>
                    <h4 className="text-base font-medium text-text-primary mb-1">
                      MS Excel Training
                    </h4>
                    <div className="text-xs text-muted mb-3 font-mono">Allenhouse Business School</div>
                    <p className="text-xs text-text-primary/80 leading-relaxed">
                      Mathematical & logical functions (SUM, AVERAGE, IF), dynamic lookups, and visual tables.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-bg/60 border border-stroke/70 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono text-emerald-400 mb-1">Completed · 2026</div>
                    <h4 className="text-base font-medium text-text-primary mb-1">
                      AI Fundamentals: Language and Vision in AI
                    </h4>
                    <div className="text-xs text-muted mb-3 font-mono">IBM SkillsBuild</div>
                    <p className="text-xs text-text-primary/80 leading-relaxed">
                      Exploration of modern machine learning pipelines, natural language models, and computer vision.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-bg/60 border border-stroke/70 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono text-[#89AACC] mb-1">Ongoing · 2026</div>
                    <h4 className="text-base font-medium text-text-primary mb-1">
                      Digital Marketing Training
                    </h4>
                    <div className="text-xs text-muted mb-3 font-mono">Allenhouse Business School</div>
                    <p className="text-xs text-text-primary/80 leading-relaxed">
                      Brand development, customer acquisition funnel metrics, and digital strategy.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'industrial' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-6 rounded-2xl bg-bg/60 border border-stroke/70"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                  <h4 className="text-lg font-medium text-text-primary">
                    Industrial Exposure: Amul Dairy Factory Visit
                  </h4>
                  <span className="text-xs font-mono text-[#89AACC]">Field Study</span>
                </div>
                <p className="text-sm text-text-primary/80 leading-relaxed mb-4">
                  Visited the Amul Factory and observed real-time dairy production processes, high-speed automated packaging, quality control testing facilities, and nationwide distribution workflows.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-stroke/50">
                  <div className="text-xs text-muted">
                    <span className="font-semibold text-text-primary block mb-0.5">Focus:</span>
                    Cost-control practices & yield tracking
                  </div>
                  <div className="text-xs text-muted">
                    <span className="font-semibold text-text-primary block mb-0.5">Logistics:</span>
                    Cold-chain dispatch & inventory turn
                  </div>
                  <div className="text-xs text-muted">
                    <span className="font-semibold text-text-primary block mb-0.5">Key Insight:</span>
                    Process-level efficiency dictates gross margins
                  </div>
                </div>
              </motion.div>
            )}

            {/* Bottom action bar */}
            <div className="mt-8 pt-6 border-t border-stroke/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-muted font-mono">
                Looking for Finance Internships · Available immediately
              </span>
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 text-xs font-medium text-text-primary hover:text-[#89AACC] transition-colors"
              >
                <span>Read entire verified curriculum vitae</span>
                <span>↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
