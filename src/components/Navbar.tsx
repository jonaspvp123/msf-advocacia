import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Escritório', href: '#sobre' },
    { name: 'Áreas', href: '#areas' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Presença Nacional', href: '#expansao' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Blog', href: '#blog' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        id="navbar-premium"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-charcoal-dark/90 backdrop-blur-md border-b border-gold/20 py-4 shadow-xl'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, '#')}
            className="flex items-center space-x-3 group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 border border-gold/40 rounded bg-charcoal-med/60 group-hover:border-gold transition-colors duration-500">
              <span className="font-serif text-lg font-bold text-gold select-none tracking-widest">
                M
              </span>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-gold animate-pulse rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-[0.2em] text-white group-hover:text-gold transition-colors duration-300">
                MSF <span className="text-gold">|</span> ARAÚJO
              </span>
              <span className="font-mono text-[9px] tracking-[0.35em] text-silver uppercase">
                ADVOGADOS ASSOCIADOS
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium tracking-wide text-silver hover:text-gold transition-all duration-300 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold-deep text-charcoal-dark text-xs tracking-widest font-semibold uppercase rounded transition-all duration-300 transform active:scale-95 shadow-md hover:shadow-lg hover:shadow-gold/10 flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              Triage Digital
            </button>
          </div>

          {/* Mobile Hamburguer Action */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-silver hover:text-gold p-2 transition-colors duration-300 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 w-full bg-charcoal-dark/95 backdrop-blur-lg border-b border-gold/20 z-40 lg:hidden py-8 px-6 overflow-y-auto max-h-[calc(100vh-5rem)] flex flex-col space-y-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-lg font-medium tracking-wide text-silver hover:text-gold py-2 border-b border-white/[0.04] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 flex flex-col space-y-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3.5 bg-gradient-to-r from-gold to-gold-dark text-charcoal-dark text-center text-xs tracking-widest font-bold uppercase rounded flex items-center justify-center gap-2 shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Falar com Especialista
              </button>
              
              <div className="flex items-center justify-center gap-2 text-[10px] text-silver font-mono py-2 uppercase tracking-wide">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                Presença e Segurança Nacional
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
