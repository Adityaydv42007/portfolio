import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal, { ProjectData } from './ProjectModal';

// Local high-fidelity generated images
import imgAnalytics from '../assets/images/financial_analytics_dashboard_1792645611413.jpg';
import imgLedger from '../assets/images/accounting_ledger_tally_1792645612412.jpg';
import imgSupplyChain from '../assets/images/industrial_supply_chain_1792645612096.jpg';
import imgFintech from '../assets/images/fintech_ai_research_1792645612276.jpg';

const PROJECTS: ProjectData[] = [
  {
    id: 'financial-excel-modeling',
    title: 'Financial Data Analysis',
    italicTitle: '& Trend Modeling',
    category: 'MS Excel · Financial Analysis',
    year: '2025–2026',
    image: imgAnalytics,
    spanClass: 'md:col-span-7 min-h-[380px] md:min-h-[440px]',
    summary:
      'Comprehensive financial transactions modeling in MS Excel utilizing dynamic formulas (SUM, AVERAGE, nested IFs, percentage change), multi-tier variance analysis, and interactive dashboard charts.',
    tools: ['MS Excel', 'Formulas (SUM/IF/LOOKUP)', 'Pivot Tables', 'Variance Analysis', 'Charts'],
    metrics: [
      { label: 'Variance Precision', value: '99.8%' },
      { label: 'Formula Automation', value: '15+ Functions' },
      { label: 'Reporting Speed', value: 'Real-time' },
    ],
    bulletPoints: [
      'Ingested sample multi-period corporate transaction ledgers to detect expense anomalies and revenue trajectories.',
      'Formulated automated KPI dashboards computing Gross Margin, Operating Expenses, and Period-over-Period Variance.',
      'Constructed scenario testing matrices using conditional evaluation (IF/AND/OR) to forecast budget runway.',
      'Created standardized executive report templates ready for management review and stakeholder presentations.',
    ],
    takeaways:
      'Proved that structured data sanitization combined with vectorized Excel functions drastically accelerates financial decision cycles.',
  },
  {
    id: 'tally-ledger-accounting',
    title: 'Corporate Accounting',
    italicTitle: 'Practice via Tally',
    category: 'VCEC Tally Academy · Bookkeeping',
    year: '2025–2026',
    image: imgLedger,
    spanClass: 'md:col-span-5 min-h-[380px] md:min-h-[440px]',
    summary:
      'Hands-on master accounting program at VCEC Tally Academy simulating full-cycle corporate bookkeeping: sales, purchases, bank receipts, vouchers, ledger accounts, and trial balance reconciliation.',
    tools: ['Tally ERP / Prime', 'Double-Entry Bookkeeping', 'General Ledger', 'Trial Balance', 'Bank Reconciliation'],
    metrics: [
      { label: 'Ledgers Reconciled', value: '50+ Accounts' },
      { label: 'Trial Balance Balance', value: '100% Balanced' },
      { label: 'Academy Track', value: 'Master in FA' },
    ],
    bulletPoints: [
      'Configured chart of accounts reflecting multi-department operational expenses, assets, and liabilities.',
      'Recorded real-world journal vouchers, payment vouchers, and contra entries with double-entry precision.',
      'Extracted trial balances and audited ledger discrepancies to ensure zero debit-credit imbalances.',
      'Practiced inventory accounting, invoice generation, and GST tax ledger categorization.',
    ],
    takeaways:
      'Deepened comprehension of statutory accounting conventions, double-entry mechanics, and error-detection workflows.',
  },
  {
    id: 'amul-industrial-cost-control',
    title: 'Amul Industrial',
    italicTitle: 'Cost-Control Study',
    category: 'Industrial Exposure · Operations',
    year: '2025',
    image: imgSupplyChain,
    spanClass: 'md:col-span-5 min-h-[380px] md:min-h-[440px]',
    summary:
      'On-site industrial exposure at the Amul Dairy Factory observing large-scale production lines, cold-chain logistics, raw material testing, and operational cost-control practices.',
    tools: ['Cost Accounting', 'Supply Chain Analysis', 'Quality Control Tracking', 'Distribution Workflows'],
    metrics: [
      { label: 'Throughput Audited', value: 'Industrial Scale' },
      { label: 'Focus Area', value: 'Cost Reduction' },
      { label: 'Facility', value: 'Amul Dairy' },
    ],
    bulletPoints: [
      'Observed continuous dairy processing, pasteurization lines, and high-speed packaging machinery in action.',
      'Examined how Amul minimizes spoilage and transit latency through cooperative procurement networks.',
      'Studied cost-control mechanisms across batch processing, thermal energy usage, and packaging overhead.',
      'Mapped inventory turn ratios and cold-chain distribution workflows from milk collection to retail hubs.',
    ],
    takeaways:
      'Witnessed how marginal efficiency gains in high-volume industrial processing translate directly into immense corporate margins.',
  },
  {
    id: 'ai-fintech-research',
    title: 'AI Fundamentals &',
    italicTitle: 'Fintech Valuation',
    category: 'IBM SkillsBuild · Fintech Seminar',
    year: '2026',
    image: imgFintech,
    spanClass: 'md:col-span-7 min-h-[380px] md:min-h-[440px]',
    summary:
      'Certified in AI Fundamentals (Language and Vision) by IBM SkillsBuild, combined with Allenhouse Fintech Club research on brand equity valuation and digital settlement infrastructures.',
    tools: ['IBM SkillsBuild', 'AI-Assisted Research', 'Fintech Club', 'Brand Valuation', 'Data Synthesizing'],
    metrics: [
      { label: 'Credential', value: 'IBM Certified' },
      { label: 'Seminar Track', value: 'Fintech 2026' },
      { label: 'Core Theme', value: 'AI + Finance' },
    ],
    bulletPoints: [
      'Completed IBM SkillsBuild modules analyzing multimodal AI pipelines, language parsing, and computer vision.',
      'Applied AI research methodologies to ingest macroeconomic reports, extract financial metrics, and summarize trends.',
      'Participated in the Allenhouse Fintech Club Seminar exploring blockchain settlement and algorithmic risk assessment.',
      'Attended the Allenhouse Fundamentals of Brand Building workshop focusing on intangible asset valuation.',
    ],
    takeaways:
      'Demonstrated how modern finance professionals leverage artificial intelligence to automate research without losing fiduciary precision.',
  },
];

interface SelectedWorksProps {
  onOpenResume: () => void;
}

export default function SelectedWorks({ onOpenResume }: SelectedWorksProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="work" className="bg-bg py-16 md:py-24 text-text-primary">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
                Selected Work
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-text-primary">
              Featured <span className="font-display italic text-[#89AACC]">projects</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm md:text-base text-muted mt-3 max-w-xl leading-relaxed">
              A curated selection of financial modeling, accounting practice, and industrial
              operational studies from my academic and certification journey.
            </p>
          </div>

          {/* Desktop "View all work" button */}
          <div className="hidden md:inline-flex shrink-0">
            <div className="relative group p-[2px] rounded-full inline-block">
              <span
                className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              />
              <button
                onClick={onOpenResume}
                className="relative z-10 inline-flex items-center gap-2 rounded-full text-xs font-medium px-5 py-2.5 border border-stroke bg-surface hover:bg-bg text-text-primary transition-all duration-300"
              >
                <span>View Full Resume</span>
                <span className="text-sm text-muted group-hover:text-text-primary transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bento Grid: 7 / 5 / 5 / 7 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedProject(project);
                }
              }}
              className={`${project.spanClass} group relative rounded-3xl overflow-hidden bg-surface border border-stroke cursor-pointer transition-all duration-500 hover:border-[#89AACC]/40 flex flex-col justify-end p-6 sm:p-8`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Halftone texture overlay */}
              <div
                className="absolute inset-0 halftone-overlay opacity-25 mix-blend-multiply pointer-events-none"
                aria-hidden="true"
              />

              {/* Permanent subtle gradient from bottom for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 pointer-events-none" />

              {/* Hover overlay with blur */}
              <div
                className="absolute inset-0 bg-bg/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md pointer-events-none"
                aria-hidden="true"
              />

              {/* Content overlay */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                {/* Top card metadata */}
                <div className="flex items-center justify-between gap-2 text-xs text-muted/90 font-mono">
                  <span>{project.category}</span>
                  <span className="text-muted/60">{project.year}</span>
                </div>

                {/* Bottom card title & prompt */}
                <div className="mt-auto pt-16">
                  <h3 className="text-2xl sm:text-3xl font-display text-text-primary mb-2 leading-tight">
                    {project.title}{' '}
                    <span className="italic text-[#89AACC]">{project.italicTitle}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-muted line-clamp-2 max-w-lg mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                    {project.summary}
                  </p>

                  {/* Hover Pill: animated gradient border + View label */}
                  <div className="inline-flex items-center">
                    <div className="relative group/pill p-[1.5px] rounded-full inline-block">
                      <span
                        className="absolute -inset-[1px] rounded-full accent-gradient-border opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        aria-hidden="true"
                      />
                      <div className="relative z-10 px-4 py-1.5 rounded-full bg-white text-black font-medium text-xs flex items-center gap-1.5 shadow-md">
                        <span>View —</span>
                        <span className="font-display italic font-semibold">
                          {project.title}
                        </span>
                        <span className="text-[10px]">↗</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
