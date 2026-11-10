import React, { useState, useEffect } from 'react';
import { Language, Theme } from './types/portfolio';
import { MonogramIntro } from './components/MonogramIntro';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CareerJourney } from './components/CareerJourney';
import { SkillsGrid } from './components/SkillsGrid';
import { ProjectsGallery } from './components/ProjectsGallery';
import { AchievementsTimeline } from './components/AchievementsTimeline';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProfileCustomizerModal } from './components/ProfileCustomizerModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [currentTheme, setCurrentTheme] = useState<Theme>('dark');
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [isOpenToOpportunities, setIsOpenToOpportunities] = useState<boolean>(true);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [customizerModalOpen, setCustomizerModalOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [isPointerDevice, setIsPointerDevice] = useState<boolean>(false);

  // Initialize theme, language, and settings
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('ay_portfolio_theme') as Theme | null;
      if (savedTheme === 'light' || savedTheme === 'dark') {
        setCurrentTheme(savedTheme);
      } else {
        setCurrentTheme('dark');
      }

      const savedLang = localStorage.getItem('ay_portfolio_lang') as Language | null;
      if (savedLang === 'en' || savedLang === 'hi') {
        setCurrentLang(savedLang);
      }

      const savedAvailability = localStorage.getItem('ay_portfolio_availability');
      if (savedAvailability !== null) {
        setIsOpenToOpportunities(savedAvailability === 'true');
      }

      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('autostart') === '1') {
        setShowIntro(false);
      }
    } catch {
      // LocalStorage access fallback
    }

    // Detect fine pointer for subtle desktop ambient glow
    if (window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsPointerDevice(true);
    }
  }, []);

  // Scroll progress listener
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Desktop subtle pointer follow
  useEffect(() => {
    if (!isPointerDevice) return;

    let animationFrameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPointerDevice]);

  // Sync theme changes with DOM documentElement and body
  useEffect(() => {
    try {
      localStorage.setItem('ay_portfolio_theme', currentTheme);
    } catch {
      // ignore
    }

    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.body.className = 'bg-[#090A0F] text-[#F8FAFC] selection:bg-[#38BDF8]/25 selection:text-white transition-colors duration-300';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.body.className = 'bg-[#F8FAFC] text-[#0F172A] selection:bg-[#F43F5E]/20 selection:text-[#0F172A] transition-colors duration-300';
    }
  }, [currentTheme]);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem('ay_portfolio_lang', lang);
    } catch {
      // ignore
    }
  };

  const handleThemeToggle = () => {
    setCurrentTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleToggleAvailability = () => {
    setIsOpenToOpportunities((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('ay_portfolio_availability', String(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  return (
    <div className={`min-h-screen relative selection:bg-[#38BDF8]/25 ${
      currentTheme === 'light' ? 'bg-[#F8FAFC] text-[#0F172A]' : 'bg-[#090A0F] text-[#F8FAFC]'
    }`}>
      {/* 1. Scroll-linked Progress Bar in Red-Blue-Green spectrum */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-[#F43F5E] via-[#38BDF8] to-[#10B981] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(56,189,248,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Desktop Subtle Ambient Mouse Follower */}
      {isPointerDevice && currentTheme === 'dark' && (
        <div
          className="fixed pointer-events-none z-30 w-[420px] h-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#F43F5E]/[0.02] via-[#38BDF8]/[0.025] to-[#10B981]/[0.02] blur-[100px] transition-transform duration-75 ease-out"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Monogram Intro Animation */}
      {showIntro && (
        <MonogramIntro
          lang={currentLang}
          onComplete={() => setShowIntro(false)}
        />
      )}

      {/* Advanced Navigation */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        currentTheme={currentTheme}
        onThemeToggle={handleThemeToggle}
        onOpenCustomizer={() => setCustomizerModalOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content" className="relative">
        <Hero
          currentLang={currentLang}
          currentTheme={currentTheme}
          isOpenToOpportunities={isOpenToOpportunities}
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />

        <About
          currentLang={currentLang}
          currentTheme={currentTheme}
        />

        <CareerJourney
          currentLang={currentLang}
          currentTheme={currentTheme}
        />

        <SkillsGrid
          currentLang={currentLang}
          currentTheme={currentTheme}
        />

        <ProjectsGallery
          currentLang={currentLang}
          currentTheme={currentTheme}
        />

        <AchievementsTimeline
          currentLang={currentLang}
          currentTheme={currentTheme}
        />

        <EducationCertifications
          currentLang={currentLang}
          currentTheme={currentTheme}
        />

        <ContactSection
          currentLang={currentLang}
          currentTheme={currentTheme}
        />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        currentTheme={currentTheme}
      />

      {/* Interactive Resume Lightbox Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        currentLang={currentLang}
        currentTheme={currentTheme}
      />

      {/* Profile & Readiness Preferences Modal */}
      <ProfileCustomizerModal
        isOpen={customizerModalOpen}
        onClose={() => setCustomizerModalOpen(false)}
        isOpenToOpportunities={isOpenToOpportunities}
        onToggleAvailability={handleToggleAvailability}
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        currentTheme={currentTheme}
        onThemeToggle={handleThemeToggle}
      />
    </div>
  );
}
