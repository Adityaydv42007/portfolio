import { useState } from 'react';
import { motion } from 'framer-motion';
import JournalModal, { JournalEntry } from './JournalModal';

import imgLedger from '../assets/images/accounting_ledger_tally_1792645612412.jpg';
import imgSupplyChain from '../assets/images/industrial_supply_chain_1792645612096.jpg';
import imgAnalytics from '../assets/images/financial_analytics_dashboard_1792645611413.jpg';
import imgFintech from '../assets/images/fintech_ai_research_1792645612276.jpg';

const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: 'tally-double-entry',
    title: 'Demystifying Modern Ledger Workflows with',
    italicTitle: 'Tally Prime & Automation',
    date: 'Oct 2026',
    readTime: '5 min read',
    tag: 'Accounting ERP',
    image: imgLedger,
    excerpt:
      'How structured voucher categorization, bank reconciliation, and automated trial balancing eliminate discrepancies in high-volume enterprise ledgers.',
    content: [
      'In traditional accounting, journal entries can rapidly degrade into fragmented paper records. Transitioning to Tally ERP and Prime formalizes the foundational double-entry principle while giving accountants instant visibility into debit-credit parity.',
      'Through my Master in Financial Accounting curriculum at VCEC Tally Academy, I practiced mapping purchase orders against supplier invoices, creating contra vouchers for inter-bank liquid transfers, and systematically reconciling bank statements against passbook entries.',
      'The true power lies in automated ledger grouping: properly structuring current assets, liabilities, and indirect expenses prevents erroneous profit-and-loss distortion. A well-maintained chart of accounts turns routine data entry into strategic financial audits.',
    ],
  },
  {
    id: 'amul-cost-optimization',
    title: 'Cost-Control Lessons from',
    italicTitle: 'Amul Dairy Industrial Workflows',
    date: 'Aug 2026',
    readTime: '7 min read',
    tag: 'Industrial Operations',
    image: imgSupplyChain,
    excerpt:
      'Field observations on how India’s largest cooperative cuts processing latency, minimizes milk loss, and maintains cost leadership through integrated logistics.',
    content: [
      'Visiting the Amul Factory provided a visceral understanding of operational efficiency. In capital-intensive dairy manufacturing, spoilage and thermal inefficiencies directly erode margins.',
      'I witnessed first-hand how computer-monitored pasteurization and automated packaging units eliminate human handling variances, ensuring that batch yields remain within fractions of a percent of theoretical maximums.',
      'From an accounting standpoint, Amul’s cooperative model is a masterclass in direct cost absorption: procurement costs are synchronized with cold-chain transit schedules to reduce perishable holding periods. For aspiring financial analysts, observing real shop-floor operations demystifies cost accounting far better than any textbook.',
    ],
  },
  {
    id: 'excel-variance-analytics',
    title: 'Excel Beyond the Grid: Advanced Financial Modeling &',
    italicTitle: 'Variance Analysis',
    date: 'May 2026',
    readTime: '4 min read',
    tag: 'MS Excel',
    image: imgAnalytics,
    excerpt:
      'Unpacking multi-condition lookups, dynamic scenario models, and automated variance thresholds for corporate cash-flow forecasting.',
    content: [
      'Spreadsheets remain the undisputed backbone of corporate finance. However, simply using basic SUM or AVERAGE formulas leaves immense analytical value on the table.',
      'During my MS Excel training at Allenhouse Business School, I developed models utilizing nested IF statements, INDEX-MATCH algorithms, and dynamic percentage change formulas to detect budget overrun anomalies before month-end closures.',
      'By coupling conditional formatting with dynamic data tables, managers can run instant sensitivity tests—evaluating how a 2% uptick in input costs ripples through net operational margins. Clean data hygiene and robust formula architecture are non-negotiable for dependable financial reporting.',
    ],
  },
  {
    id: 'ai-financial-auditing',
    title: 'The Intersection of AI Research and',
    italicTitle: 'Corporate Financial Accounting',
    date: 'Feb 2026',
    readTime: '6 min read',
    tag: 'Fintech & AI',
    image: imgFintech,
    excerpt:
      'Exploring how multimodal vision and language models can audit invoices, synthesize disclosures, and assist financial analysts without sacrificing compliance.',
    content: [
      'Completing the IBM SkillsBuild AI Fundamentals credential in Language and Vision opened a compelling horizon: AI is not replacing accountants, but supercharging their analytical bandwidth.',
      'Optical character recognition (OCR) powered by vision models can parse thousands of vendor invoices, extract tax identification numbers, and automatically populate ERP vouchers.',
      'Simultaneously, large language models assist in synthesizing lengthy annual reports, parsing footnotes for hidden debt covenants, and cross-referencing industry benchmarks. The future finance professional is one who pairs rigorous GAAP/Tally fundamentals with AI prompt precision.',
    ],
  },
];

interface JournalProps {
  onOpenResume: () => void;
}

export default function Journal({ onOpenResume }: JournalProps) {
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);

  return (
    <section id="journal" className="bg-bg py-16 md:py-24 text-text-primary">
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
                Journal
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-text-primary">
              Recent <span className="font-display italic text-[#89AACC]">thoughts</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm md:text-base text-muted mt-3 max-w-xl leading-relaxed">
              Perspectives on financial accounting, Excel automation, industrial cost-control,
              and fintech technologies.
            </p>
          </div>

          {/* Desktop "View all" button */}
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
                <span>Full Experience & Bio</span>
                <span className="text-sm text-muted group-hover:text-text-primary transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* 4 Journal entries displayed as horizontal pills */}
        <div className="space-y-4 md:space-y-5">
          {JOURNAL_ENTRIES.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedEntry(entry)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedEntry(entry);
                }
              }}
              className="group relative rounded-[32px] sm:rounded-full bg-surface/30 hover:bg-surface border border-stroke hover:border-[#89AACC]/40 transition-all duration-300 p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
            >
              {/* Left: Thumbnail & Title */}
              <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 border border-stroke group-hover:border-[#89AACC]/60 transition-colors">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base md:text-lg font-medium text-text-primary group-hover:text-[#89AACC] transition-colors truncate">
                    {entry.title}{' '}
                    {entry.italicTitle && (
                      <span className="font-display italic font-normal text-text-primary/90">
                        {entry.italicTitle}
                      </span>
                    )}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted font-mono mt-0.5">
                    <span>{entry.tag}</span>
                    <span aria-hidden="true">·</span>
                    <span>{entry.date}</span>
                    <span aria-hidden="true" className="hidden sm:inline">
                      ·
                    </span>
                    <span className="hidden sm:inline">{entry.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Right: Arrow / View indicator */}
              <div className="flex items-center justify-end sm:pr-4 shrink-0">
                <span className="text-xs font-mono text-muted group-hover:text-text-primary flex items-center gap-1.5 transition-colors">
                  <span className="hidden sm:inline">Read note</span>
                  <span className="text-sm transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <JournalModal
        entry={selectedEntry}
        onClose={() => setSelectedEntry(null)}
      />
    </section>
  );
}
