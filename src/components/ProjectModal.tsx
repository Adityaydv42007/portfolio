import { motion, AnimatePresence } from 'framer-motion';

export interface ProjectData {
  id: string;
  title: string;
  italicTitle: string;
  category: string;
  year: string;
  image: string;
  spanClass: string;
  summary: string;
  tools: string[];
  metrics: { label: string; value: string }[];
  bulletPoints: string[];
  takeaways: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface border border-stroke rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-text-primary"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-stroke/40 hover:bg-stroke text-muted hover:text-text-primary flex items-center justify-center transition-colors text-lg"
          >
            ✕
          </button>

          {/* Header Metadata */}
          <div className="flex items-center gap-2 text-xs text-muted mb-4 font-mono">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
            <span aria-hidden="true">·</span>
            <span>Portfolio Project</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-text-primary mb-4 leading-tight">
            {project.title} <span className="italic">{project.italicTitle}</span>
          </h2>

          <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
            {project.summary}
          </p>

          {/* Media preview */}
          <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-8 border border-stroke">
            <img
              src={project.image}
              alt={`${project.title} visual`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Metrics strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-bg/50 border border-stroke/60"
              >
                <div className="text-xs text-muted mb-1">{m.label}</div>
                <div className="text-lg sm:text-xl font-display italic text-text-primary tabular-nums">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Core Methodologies & Accomplishments */}
          <div className="space-y-4 mb-8">
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted font-semibold">
              Execution & Methodology
            </h3>
            <ul className="space-y-2.5">
              {project.bulletPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-text-primary/90 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC] mt-2 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Technologies */}
          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted font-semibold mb-3">
              Tools & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-muted">
              {project.tools.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-bg/80 border border-stroke text-text-primary/90"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Strategic Takeaway */}
          <div className="p-4 rounded-2xl bg-[#4E85BF]/10 border border-[#4E85BF]/20 text-xs sm:text-sm text-text-primary/90 leading-relaxed">
            <span className="font-semibold text-text-primary">Key Takeaway: </span>
            {project.takeaways}
          </div>

          {/* Footer actions */}
          <div className="mt-8 pt-6 border-t border-stroke flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-text-primary text-bg font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity"
            >
              Done Reading
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
