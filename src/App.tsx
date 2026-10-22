/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWorks from './components/SelectedWorks';
import Journal from './components/Journal';
import Explorations from './components/Explorations';
import StatsAndCredentials from './components/StatsAndCredentials';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Section observer to update active nav state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'work', 'journal', 'explorations', 'credentials', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text-primary font-body antialiased selection:bg-[#4E85BF] selection:text-white">
      {/* Section 1: Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Fixed Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <main>
        {/* Section 2: Hero */}
        <Hero
          onSeeWorks={() => handleNavigate('work')}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Section 3: Selected Works */}
        <SelectedWorks onOpenResume={() => setIsResumeOpen(true)} />

        {/* Section 4: Journal */}
        <Journal onOpenResume={() => setIsResumeOpen(true)} />

        {/* Section 5: Explorations (Parallax Gallery) */}
        <Explorations />

        {/* Section 6: Stats & Dossier */}
        <StatsAndCredentials onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Section 7: Contact / Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Global Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
