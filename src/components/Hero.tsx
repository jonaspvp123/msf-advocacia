import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Award, Globe, BookOpen, Users } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const scrollToAbout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#sobre');
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

  const stats = [
    {
      id: 'stat-years',
      num: 'Desde 2017',
      label: 'Tempo de Atuação',
      icon: Award
    },
    {
      id: 'stat-national',
      num: 'Nacional',
      label: 'Presença Ampla',
      icon: Globe
    },
    {
      id: 'stat-expertise',
      num: '10+ Especialidades',
      label: 'Áreas Jurídicas',
      icon: BookOpen
    },
    {
      id: 'stat-team',
      num: 'Elite Técnica',
      label: 'Advogados Especialistas',
      icon: Users
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-charcoal-dark overflow-hidden pt-20">
      {/* Cinematic Background Image with Ken Burns effect and gradient overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark via-charcoal-dark/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1920"
          alt="Escritório Advocacia Skyline"
          className="w-full h-full object-cover object-center transform scale-105 animate-[kenburns_30s_infinite_alternate]"
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 text-center lg:text-left w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-8 flex flex-col space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="inline-flex self-center lg:self-start items-center space-x-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-ping" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-gold uppercase font-medium">
                Selo de Excelência MSF | Araújo
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-medium leading-[1.12]"
            >
              Excelência Jurídica, <br />
              <span className="text-gradient bg-gradient-to-r from-gold via-gold-light to-gold-dark bg-clip-text text-transparent italic font-light font-serif">
                Estratégia e Confiança
              </span> <br />
              para Proteger Seus Direitos.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="text-silver text-base sm:text-lg lg:text-xl max-w-2xl font-light leading-relaxed font-sans"
            >
              Atendimento especializado para pessoas físicas e empresas em todo o Brasil, com soluções jurídicas estratégicas, personalizadas e de alto padrão de governança.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold via-gold-light to-gold-dark text-charcoal-dark text-xs tracking-[0.2em] font-semibold uppercase rounded shadow-lg hover:shadow-gold/20 hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                Falar com Especialista
              </button>
              <button
                onClick={scrollToAbout}
                className="w-full sm:w-auto px-8 py-4 border border-silver/40 hover:border-gold text-white text-xs tracking-[0.2em] font-semibold uppercase rounded hover:bg-white/[0.03] transition-all duration-300 backdrop-blur-sm"
              >
                Conheça Nossa História
              </button>
            </motion.div>
          </div>

          {/* Abstract Gold Accent Badge Decor for desktop */}
          <div className="hidden lg:col-span-4 lg:flex justify-end items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="relative p-12 border border-gold/10 rounded-full w-80 h-80 flex items-center justify-center bg-charcoal-med/20 backdrop-blur-sm gold-glow"
            >
              <div className="absolute inset-4 border border-gold/20 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-8 border border-white/5 rounded-full" />
              <div className="text-center flex flex-col items-center">
                <span className="font-serif text-5xl font-light text-gold italic">MSF</span>
                <span className="font-mono text-xs text-silver mt-2 tracking-widest">ARAÚJO</span>
                <div className="w-12 h-px bg-gold/40 my-3" />
                <span className="text-[10px] text-silver font-sans uppercase tracking-[0.2em]">ALTO PADRÃO</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dynamic bottom counters / indicators */}
        <div className="mt-20 lg:mt-28 border-t border-white/[0.07] pt-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                  className="flex flex-col md:flex-row items-center lg:items-start space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left bg-charcoal-med/10 backdrop-blur-sm p-4 rounded border border-white/[0.02]"
                >
                  <div className="w-10 h-10 rounded border border-gold/20 flex items-center justify-center bg-charcoal-dark/40 shrink-0">
                    <IconComp className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-white tracking-wide">
                      {stat.num}
                    </h3>
                    <p className="font-sans text-xs text-silver/80">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Animated scroll prompt indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="font-mono text-[9px] tracking-[0.3em] text-silver/50 uppercase mb-2">Deslizar para Explorar</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-gold/60"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </div>

      {/* Keyframe additions in Tailwind CSS compatibility style */}
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1.02) translate(0, 0); }
          100% { transform: scale(1.1) translate(-1%, -1%); }
        }
      `}</style>
    </section>
  );
}
