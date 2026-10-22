import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

import imgAnalytics from '../assets/images/financial_analytics_dashboard_1792645611413.jpg';
import imgLedger from '../assets/images/accounting_ledger_tally_1792645612412.jpg';
import imgSupplyChain from '../assets/images/industrial_supply_chain_1792645612096.jpg';
import imgFintech from '../assets/images/fintech_ai_research_1792645612276.jpg';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ExplorationItem {
  id: string;
  title: string;
  category: string;
  rotation: string;
  image: string;
  description: string;
  column: 1 | 2;
}

const EXPLORATIONS: ExplorationItem[] = [
  {
    id: 'exp-1',
    title: 'Excel Dynamic Matrix',
    category: 'Quantitative Modeling',
    rotation: '-rotate-2',
    image: imgAnalytics,
    description:
      'Dynamic multi-condition lookup matrices and scenario variance testing built in MS Excel.',
    column: 1,
  },
  {
    id: 'exp-2',
    title: 'Trial Balance Audit',
    category: 'VCEC Tally Practice',
    rotation: 'rotate-3',
    image: imgLedger,
    description:
      'Double-entry ledger reconciliation verifying debit/credit parity across operational accounts.',
    column: 2,
  },
  {
    id: 'exp-3',
    title: 'Amul Cold-Chain Logistics',
    category: 'Industrial Operations',
    rotation: 'rotate-1',
    image: imgSupplyChain,
    description:
      'Process flow diagram tracing perishable dairy from rural chilling units to distribution hubs.',
    column: 1,
  },
  {
    id: 'exp-4',
    title: 'Neural FinTech Node',
    category: 'IBM SkillsBuild AI',
    rotation: '-rotate-3',
    image: imgFintech,
    description:
      'AI research pipeline concept mapping financial text and multimodal vision signals.',
    column: 2,
  },
  {
    id: 'exp-5',
    title: 'Working Capital Ratio Analysis',
    category: 'Corporate Finance',
    rotation: '-rotate-1',
    image: imgAnalytics,
    description:
      'Cash conversion cycle simulation modeling receivables, payables, and inventory velocity.',
    column: 1,
  },
  {
    id: 'exp-6',
    title: 'Brand Equity & Valuation',
    category: 'Allenhouse Workshop',
    rotation: 'rotate-2',
    image: imgFintech,
    description:
      'Valuation methodology for intangible assets, customer retention, and brand goodwill.',
    column: 2,
  },
];

export default function Explorations() {
  const containerRef = useRef<HTMLElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  const [activeLightbox, setActiveLightbox] = useState<ExplorationItem | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const col1 = col1Ref.current;
    const col2 = col2Ref.current;
    const pinned = pinnedRef.current;

    if (!container || !col1 || !col2 || !pinned) return;

    const ctx = gsap.context(() => {
      // Pin the center content for smooth scroll-driven parallax
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        pin: pinned,
        pinSpacing: false,
      });

      // Parallax column 1 moves upwards at speed A
      gsap.fromTo(
        col1,
        { y: 100 },
        {
          y: -220,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        }
      );

      // Parallax column 2 moves upwards at speed B (differential movement)
      gsap.fromTo(
        col2,
        { y: 240 },
        {
          y: -340,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  const col1Items = EXPLORATIONS.filter((item) => item.column === 1);
  const col2Items = EXPLORATIONS.filter((item) => item.column === 2);

  return (
    <section
      ref={containerRef}
      id="explorations"
      className="relative min-h-[220vh] md:min-h-[260vh] bg-bg overflow-hidden py-16"
    >
      {/* Layer 1: Pinned Center (z-10) */}
      <div
        ref={pinnedRef}
        className="h-screen w-full flex items-center justify-center pointer-events-none z-10 sticky top-0 px-6"
      >
        <div className="text-center max-w-xl mx-auto pointer-events-auto">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-6 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
              Explorations
            </span>
            <span className="w-6 h-px bg-stroke" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-text-primary mb-4">
            Visual <span className="font-display italic text-[#89AACC]">playground</span>
          </h2>

          {/* Subtext */}
          <p className="text-xs sm:text-sm text-muted max-w-md mx-auto mb-8 leading-relaxed">
            Analytical sketches, ledger balance sheet explorations, and operational workflow
            diagrams from my finance research.
          </p>

          {/* LinkedIn Button */}
          <div className="inline-flex">
            <a
              href="https://linkedin.com/in/adityayadav42007"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full text-xs font-medium px-5 py-2.5 border border-stroke bg-surface/90 hover:bg-surface text-text-primary transition-all duration-300 shadow-md backdrop-blur-md hover:scale-105"
            >
              <span>Connect on LinkedIn</span>
              <span className="text-xs">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Layer 2: Parallax Columns (z-20) */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 lg:gap-48 items-start">
          {/* Column 1 */}
          <div ref={col1Ref} className="space-y-16 md:space-y-28 pointer-events-auto">
            {col1Items.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveLightbox(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveLightbox(item);
                  }
                }}
                className={`group relative aspect-square max-w-[320px] mx-auto rounded-3xl overflow-hidden bg-surface border border-stroke p-3 cursor-pointer transition-all duration-500 hover:scale-105 hover:border-[#89AACC] ${item.rotation} shadow-xl hover:z-30`}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] text-muted font-mono block">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-medium text-text-primary group-hover:text-[#89AACC] transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div ref={col2Ref} className="space-y-16 md:space-y-28 pointer-events-auto pt-16 md:pt-48">
            {col2Items.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveLightbox(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveLightbox(item);
                  }
                }}
                className={`group relative aspect-square max-w-[320px] mx-auto rounded-3xl overflow-hidden bg-surface border border-stroke p-3 cursor-pointer transition-all duration-500 hover:scale-105 hover:border-[#89AACC] ${item.rotation} shadow-xl hover:z-30`}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] text-muted font-mono block">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-medium text-text-primary group-hover:text-[#89AACC] transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightbox && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLightbox(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative z-10 max-w-xl w-full bg-surface border border-stroke rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl text-text-primary"
            >
              <button
                onClick={() => setActiveLightbox(null)}
                aria-label="Close Lightbox"
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stroke/50 hover:bg-stroke text-muted hover:text-text-primary flex items-center justify-center text-sm transition-colors"
              >
                ✕
              </button>

              <div className="text-xs text-muted font-mono mb-2">
                {activeLightbox.category}
              </div>
              <h3 className="text-2xl font-display text-text-primary mb-4">
                {activeLightbox.title}
              </h3>

              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 border border-stroke">
                <img
                  src={activeLightbox.image}
                  alt={activeLightbox.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="text-sm text-muted leading-relaxed mb-6">
                {activeLightbox.description}
              </p>

              <div className="flex justify-end">
                <button
                  onClick={() => setActiveLightbox(null)}
                  className="px-5 py-2 rounded-full bg-text-primary text-bg font-medium text-xs hover:opacity-90"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
