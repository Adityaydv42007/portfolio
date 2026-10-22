import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || 'Prospective Employer'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:adityaydv42007@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('adityaydv42007@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

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
          className="relative z-10 w-full max-w-xl bg-surface border border-stroke rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-text-primary"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close contact modal"
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-stroke/40 hover:bg-stroke text-muted hover:text-text-primary flex items-center justify-center transition-colors text-base"
          >
            ✕
          </button>

          <div className="mb-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#89AACC] font-mono">
              Get In Touch
            </span>
            <h2 className="text-3xl font-display text-text-primary mt-1">
              Let's discuss <span className="italic">opportunities</span>
            </h2>
            <p className="text-xs sm:text-sm text-muted mt-2">
              Currently seeking a finance internship or junior analyst position to build practical experience in accounting, financial modeling, and reporting.
            </p>
          </div>

          {/* Quick contact badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <button
              onClick={copyEmail}
              className="p-3 rounded-2xl bg-bg/70 border border-stroke/70 text-left hover:border-[#89AACC]/50 transition-colors group"
            >
              <div className="text-[11px] text-muted font-mono">Email Address</div>
              <div className="text-xs sm:text-sm font-medium text-text-primary truncate">
                adityaydv42007@gmail.com
              </div>
              <div className="text-[10px] text-[#89AACC] mt-1 font-mono">
                {copiedEmail ? 'Copied to clipboard!' : 'Click to copy'}
              </div>
            </button>

            <a
              href="tel:+919956237287"
              className="p-3 rounded-2xl bg-bg/70 border border-stroke/70 text-left hover:border-[#89AACC]/50 transition-colors"
            >
              <div className="text-[11px] text-muted font-mono">Direct Phone</div>
              <div className="text-xs sm:text-sm font-medium text-text-primary">
                +91 9956237287
              </div>
              <div className="text-[10px] text-muted mt-1 font-mono">
                Kanpur, Uttar Pradesh
              </div>
            </a>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="p-6 rounded-2xl bg-[#4E85BF]/10 border border-[#4E85BF]/30 text-center">
              <h3 className="text-lg font-display text-text-primary mb-1">
                Launching your email client...
              </h3>
              <p className="text-xs text-muted">
                Thank you! Aditya will respond promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-muted mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Finance Hiring Team"
                  className="w-full px-4 py-2.5 rounded-xl bg-bg/80 border border-stroke text-sm text-text-primary placeholder:text-muted/50 focus:outline-none focus:border-[#89AACC]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-muted mb-1">
                  Your Work Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-bg/80 border border-stroke text-sm text-text-primary placeholder:text-muted/50 focus:outline-none focus:border-[#89AACC]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-muted mb-1">
                  Message / Role Description
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Aditya, we'd like to interview you for our finance internship..."
                  className="w-full px-4 py-2.5 rounded-xl bg-bg/80 border border-stroke text-sm text-text-primary placeholder:text-muted/50 focus:outline-none focus:border-[#89AACC] resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full border border-stroke text-xs text-muted hover:text-text-primary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-text-primary text-bg font-medium text-xs hover:scale-105 transition-transform"
                >
                  Send Message ↗
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
