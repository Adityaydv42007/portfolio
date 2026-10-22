import { motion, AnimatePresence } from 'framer-motion';

export interface JournalEntry {
  id: string;
  title: string;
  italicTitle?: string;
  date: string;
  readTime: string;
  tag: string;
  image: string;
  excerpt: string;
  content: string[];
}

interface JournalModalProps {
  entry: JournalEntry | null;
  onClose: () => void;
}

export default function JournalModal({ entry, onClose }: JournalModalProps) {
  if (!entry) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-surface border border-stroke rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-text-primary"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close journal modal"
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-stroke/40 hover:bg-stroke text-muted hover:text-text-primary flex items-center justify-center transition-colors text-base"
          >
            ✕
          </button>

          {/* Metadata */}
          <div className="flex items-center gap-2 text-xs text-muted mb-4 font-mono">
            <span>{entry.tag}</span>
            <span aria-hidden="true">·</span>
            <span>{entry.date}</span>
            <span aria-hidden="true">·</span>
            <span>{entry.readTime}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-text-primary mb-6 leading-tight">
            {entry.title}{' '}
            {entry.italicTitle && (
              <span className="italic text-[#89AACC]">{entry.italicTitle}</span>
            )}
          </h2>

          <div className="relative w-full h-48 sm:h-64 rounded-2xl overflow-hidden mb-6 border border-stroke">
            <img
              src={entry.image}
              alt={entry.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-4 text-sm sm:text-base text-muted leading-relaxed">
            {entry.content.map((paragraph, idx) => (
              <p key={idx} className="text-text-primary/85">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-stroke flex items-center justify-between">
            <span className="text-xs text-muted font-mono">By Aditya Yadav · Kanpur</span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-text-primary text-bg font-medium text-xs hover:opacity-90 transition-opacity"
            >
              Close Insight
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
