import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';

interface HeroProps {
  onSeeWorks: () => void;
  onOpenResume: () => void;
}

const ROLES = [
  'Finance Analyst',
  'BBA Scholar',
  'Tally Specialist',
  'Excel Modeler',
  'Cost Strategist',
];

export default function Hero({ onSeeWorks, onOpenResume }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // HLS Video integration
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
        video.play().catch(() => {
          // Auto-play was prevented; fallback silent play
        });
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native Safari / iOS HLS support
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

  // GSAP Entrance timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.name-reveal',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      );

      tl.fromTo(
        '.blur-in',
        { opacity: 0, y: 20, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.0, stagger: 0.1 },
        '-=0.8'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Cycle role every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 md:px-12 pt-28 pb-16 overflow-hidden bg-bg"
    >
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 opacity-65"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/25" />
        {/* Subtle radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.8)_85%)]" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg via-bg/80 to-transparent" />
      </div>

      {/* Hero Content (centered, z-10) */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-6 md:mb-8 font-medium">
          COLLECTION '26 · FINANCE & ANALYTICS
        </div>

        {/* Name */}
        <h1 className="name-reveal text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          Aditya Yadav
        </h1>

        {/* Role line */}
        <div className="blur-in text-lg sm:text-xl md:text-2xl text-text-primary/90 font-light mb-6 flex flex-wrap items-center justify-center gap-2">
          <span>A</span>
          <span
            key={roleIndex}
            className="font-display italic text-text-primary text-2xl sm:text-3xl md:text-4xl animate-role-fade-in inline-block font-normal px-1 border-b border-[#4E85BF]/40"
          >
            {ROLES[roleIndex]}
          </span>
          <span>based in Kanpur, India.</span>
        </div>

        {/* Description */}
        <p className="blur-in text-sm md:text-base text-muted max-w-lg mb-10 leading-relaxed font-normal">
          BBA student pursuing Master in Financial Accounting at VCEC Tally Academy.
          Bridging financial accounting, Excel data modeling, and industrial cost-control
          practices into actionable business intelligence.
        </p>

        {/* CTA Buttons */}
        <div className="blur-in inline-flex flex-wrap items-center justify-center gap-4">
          {/* Solid "See Works" button with gradient ring on hover */}
          <div className="relative group p-[2px] rounded-full inline-block">
            <span
              className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              aria-hidden="true"
            />
            <button
              onClick={onSeeWorks}
              className="relative z-10 rounded-full text-sm font-medium px-7 py-3.5 bg-text-primary text-bg group-hover:bg-bg group-hover:text-text-primary transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-black/20"
            >
              See Works
            </button>
          </div>

          {/* Outlined "View Resume" button with gradient ring on hover */}
          <div className="relative group p-[2px] rounded-full inline-block">
            <span
              className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              aria-hidden="true"
            />
            <button
              onClick={onOpenResume}
              className="relative z-10 rounded-full text-sm font-medium px-7 py-3.5 border-2 border-stroke bg-bg text-text-primary group-hover:border-transparent transition-all duration-300 hover:scale-105 active:scale-95"
            >
              View Resume
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10">
        <span className="text-[10px] text-muted uppercase tracking-[0.25em] font-medium">
          SCROLL
        </span>
        <div className="relative w-px h-10 bg-stroke overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#89AACC] to-white animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
