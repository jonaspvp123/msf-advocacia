import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Diferenciais from './components/Diferenciais';
import Expansion from './components/Expansion';
import TrustAndResults from './components/TrustAndResults';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { Sparkles, PhoneCall, Scale } from 'lucide-react';

export default function App() {
  const [selectedTriageArea, setSelectedTriageArea] = useState<string>('');

  // Handle scrolling of consultation requests smoothly
  const handleConsultationTrigger = (areaTitle: string = '') => {
    setSelectedTriageArea(areaTitle);
    
    const element = document.querySelector('#contato');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-charcoal-dark font-sans text-silver-light overflow-x-hidden selection:bg-gold selection:text-charcoal-dark">
      
      {/* Absolute top glowing backdrop glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Primary Top Header Navbar */}
      <Navbar onOpenConsultation={() => handleConsultationTrigger('')} />

      {/* Main Container Scroll Animations */}
      <main className="relative">
        
        {/* HERO SECTION */}
        <Hero onOpenConsultation={() => handleConsultationTrigger('')} />

        {/* INSTITUTIONAL ABOUT */}
        <About />

        {/* PRACTICE AREAS */}
        <PracticeAreas onSelectAreaForConsultation={(title) => handleConsultationTrigger(title)} />

        {/* MINIMAL DIFFERENTIATORS Matrix */}
        <Diferenciais />

        {/* NATIONAL EXPANSION - Interactive Vector map */}
        <Expansion />

        {/* CORPorative RESULTS & TRUST CUSTOMERS */}
        <TrustAndResults />

        {/* BLOG PORTAL */}
        <Blog />

        {/* SECURE TRIAGE FORM & CONTACT */}
        <ContactForm initialArea={selectedTriageArea} />

      </main>

      {/* PREMIUM INSTITUTIONAL FOOTER */}
      <Footer />

      {/* Subtle Bottom Floating Action Button to call triage in mobile/desktop on scroll */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <button
          onClick={() => handleConsultationTrigger('')}
          className="group flex items-center space-x-2 bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold-deep text-charcoal-dark font-bold text-xs tracking-wider uppercase pl-4 pr-5 py-3 rounded-full shadow-2xl active:scale-95 hover:scale-[1.03] transition-all duration-300"
          title="Falar com Especialista"
        >
          <Scale className="w-4 h-4 text-charcoal-dark animate-[spin_12s_linear_infinite]" />
          <span>Falar com Advogado</span>
        </button>
      </div>

    </div>
  );
}
