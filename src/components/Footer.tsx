import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';

interface FooterProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export default function Footer({ onOpenResume, onOpenContact }: FooterProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Background Video - Flipped vertically
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsUrl =
      'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsUrl;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  // GSAP Marquee: xPercent: -50, duration: 40, ease: "none", repeat: -1
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const tween = gsap.to(marquee, {
      xPercent: -50,
      duration: 40,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  const marqueeText = Array(12)
    .fill('FINANCIAL RIGOR • COST OPTIMIZATION • TALLY & EXCEL MASTERY • ANALYTICAL INTEL • ')
    .join('');

  return (
    <footer
      id="contact"
      className="relative bg-bg pt-20 md:pt-28 pb-10 md:pb-16 overflow-hidden text-text-primary border-t border-stroke/80"
    >
      {/* Background Video (Flipped vertically scale-y-[-1] with heavier overlay bg-black/60) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1] opacity-40"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />
      </div>

      {/* Marquee Banner */}
      <div className="relative z-10 w-full overflow-hidden whitespace-nowrap py-4 border-y border-stroke/40 mb-16 select-none bg-surface/20 backdrop-blur-sm">
        <div
          ref={marqueeRef}
          className="inline-block text-xs sm:text-sm tracking-[0.3em] font-mono text-muted/70 uppercase"
        >
          {marqueeText}
        </div>
      </div>

      {/* Center CTA Block */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mb-16 md:mb-20">
        <div className="text-xs text-muted uppercase tracking-[0.3em] mb-4 font-mono font-medium">
          Ready to Collaborate
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display italic text-text-primary mb-6 leading-[1.05]">
          Let’s build high-impact <br className="hidden sm:inline" />
          <span className="accent-gradient-text not-italic font-normal">financial systems</span> together.
        </h2>

        <p className="text-sm md:text-base text-muted max-w-xl mx-auto mb-10 leading-relaxed font-normal">
          Available for corporate finance internships, financial analyst roles, and accounting projects.
          Based in Kanpur, Uttar Pradesh — open to remote & on-site engagements.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Email button with gradient hover border ring */}
          <div className="relative group p-[2px] rounded-full inline-block">
            <span
              className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              aria-hidden="true"
            />
            <a
              href="mailto:adityaydv42007@gmail.com"
              className="relative z-10 inline-flex items-center gap-2 rounded-full text-sm font-medium px-8 py-4 bg-text-primary text-bg group-hover:bg-bg group-hover:text-text-primary transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-black/40"
            >
              <span>adityaydv42007@gmail.com</span>
              <span className="text-xs">↗</span>
            </a>
          </div>

          {/* Quick Message Modal Button */}
          <div className="relative group p-[2px] rounded-full inline-block">
            <span
              className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              aria-hidden="true"
            />
            <button
              onClick={onOpenContact}
              className="relative z-10 inline-flex items-center gap-2 rounded-full text-sm font-medium px-8 py-4 border-2 border-stroke bg-surface hover:bg-bg text-text-primary group-hover:border-transparent transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Compose Message</span>
              <span className="text-xs">💬</span>
            </button>
          </div>
        </div>

        {/* Secondary Contact Info */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted font-mono">
          <a
            href="tel:+919956237287"
            className="hover:text-text-primary transition-colors flex items-center gap-1.5"
          >
            <span>Phone:</span>
            <span className="text-text-primary font-medium">+91 9956237287</span>
          </a>
          <span aria-hidden="true">·</span>
          <span>Location: Kanpur, Uttar Pradesh</span>
          <span aria-hidden="true">·</span>
          <button
            onClick={onOpenResume}
            className="hover:text-text-primary underline transition-colors"
          >
            View Full Resume PDF
          </button>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-8 border-t border-stroke/60 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand mark & Copyright */}
        <div className="flex items-center gap-3 text-xs text-muted font-mono">
          <span className="font-display italic text-text-primary text-base font-semibold">
            Aditya Yadav
          </span>
          <span aria-hidden="true">·</span>
          <span>© 2026 All rights reserved</span>
        </div>

        {/* Middle: Live availability indicator with pulse */}
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface/70 border border-stroke/80 text-xs font-mono text-text-primary/90">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Available for Finance Internships & Projects</span>
        </div>

        {/* Right: Social & Professional links */}
        <div className="flex items-center gap-6 text-xs text-muted font-mono">
          <a
            href="https://linkedin.com/in/adityayadav42007"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:adityaydv42007@gmail.com"
            className="hover:text-text-primary transition-colors"
          >
            Email
          </a>
          <button
            onClick={onOpenResume}
            className="hover:text-text-primary transition-colors"
          >
            Resume
          </button>
        </div>
      </div>
    </footer>
  );
}
