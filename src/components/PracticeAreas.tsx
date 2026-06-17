import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRACTICE_AREAS } from '../data';
import { PracticeArea } from '../types';
import * as LucideIcons from 'lucide-react';

interface PracticeAreasProps {
  onSelectAreaForConsultation: (areaTitle: string) => void;
}

export default function PracticeAreas({ onSelectAreaForConsultation }: PracticeAreasProps) {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  // Dynamic Lucide icon helper
  const renderIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (!IconComponent) return <LucideIcons.Scale className="w-6 h-6 text-gold" />;
    return <IconComponent className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />;
  };

  return (
    <section id="areas" className="relative py-24 md:py-32 bg-charcoal-med/30">
      
      {/* Background decorations */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <span className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase block mb-3 font-semibold">
            Nossa Expertise
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white font-medium mb-6">
            Áreas de Atuação de <span className="text-gold italic font-light">Alto Nivel</span>
          </h2>
          <div className="w-20 h-0.5 bg-gold/50 mx-auto mb-6" />
          <p className="text-silver/80 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Nossos profissionais integram excelência técnica e agilidade pragmática em soluções sob medida. Clique sobre cada especialidade para inspecionar os serviços exclusivos inclusos.
          </p>
        </div>

        {/* Practice Areas Grid - 10 areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PRACTICE_AREAS.map((area, idx) => {
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: Math.min(idx * 0.1, 0.45) }}
                onClick={() => setSelectedArea(area)}
                className="group relative cursor-pointer block p-8 rounded-xl border border-white/[0.04] bg-charcoal-dark/45 backdrop-blur-sm transition-all duration-500 overflow-hidden hover:border-gold/30 hover:bg-charcoal-dark hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(200,167,106,0.06)]"
              >
                {/* Visual glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Thin top gold laser line */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-500" />

                <div className="flex items-center justify-between mb-6">
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded bg-charcoal-med border border-white/[0.08] flex items-center justify-center group-hover:border-gold/40 transition-colors duration-500">
                    {renderIcon(area.icon)}
                  </div>
                  
                  {/* Card index */}
                  <span className="font-mono text-[10px] text-silver/30 group-hover:text-gold/50 transition-colors">
                    {String(idx + 1).padStart(2, '0')}/10
                  </span>
                </div>

                <h3 className="font-serif text-lg md:text-xl font-medium text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {area.title}
                </h3>
                
                <p className="text-silver/70 text-xs md:text-sm font-light leading-relaxed mb-6 group-hover:text-silver/90 transition-colors">
                  {area.description}
                </p>

                {/* Micro interaction link */}
                <div className="inline-flex items-center space-x-1.5 text-[11px] font-mono tracking-wider text-gold hover:text-white uppercase transition-colors">
                  <span>Inspecionar Soluções</span>
                  <LucideIcons.ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Advanced Premium Detail Modal */}
      <AnimatePresence>
        {selectedArea && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            
            {/* Dark background blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArea(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Body Container with slide structure */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-2xl bg-charcoal-dark border border-gold/30 rounded-xl overflow-hidden shadow-2xl z-10"
            >
              {/* Premium Top Bar */}
              <div className="bg-charcoal-med border-b border-white/[0.08] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded bg-charcoal-dark border border-gold/30 flex items-center justify-center">
                    {renderIcon(selectedArea.icon)}
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.25em] text-gold uppercase font-bold">
                    Dossiê Especializado
                  </span>
                </div>
                <button
                  onClick={() => setSelectedArea(null)}
                  className="p-1 px-2.5 text-xs text-silver hover:text-white hover:bg-white/[0.04] rounded transition-colors"
                >
                  Fechar (Esc)
                </button>
              </div>

              {/* Body Content */}
              <div className="p-8 max-h-[75vh] overflow-y-auto space-y-6">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-white font-medium mb-3">
                    {selectedArea.title}
                  </h3>
                  <div className="w-12 h-1 bg-gold my-2" />
                  <p className="text-silver text-sm md:text-base font-light leading-relaxed">
                    {selectedArea.description}
                  </p>
                </div>

                {/* Detailed checklist points */}
                <div className="bg-charcoal-med/30 border border-white/[0.04] p-6 rounded-lg">
                  <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-gold font-bold mb-4">
                    Atividades de Alta Performance Inclusas
                  </h4>
                  <div className="flex flex-col space-y-3">
                    {selectedArea.fullDetails.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-3 text-xs md:text-sm text-silver/90">
                        <span className="text-gold mt-1 shrink-0">
                          <LucideIcons.CheckCircle2 className="w-4 h-4" />
                        </span>
                        <span className="font-sans">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prompt action bottom bar with callback to consultation dialog */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-between border-t border-white/[0.06]">
                  <span className="font-mono text-[10px] text-silver/60 flex items-center gap-1">
                    <LucideIcons.ShieldAlert className="w-4 h-4 text-gold/60" />
                    Sigilo profissional estrito garantido por contrato.
                  </span>
                  <button
                    onClick={() => {
                      const title = selectedArea.title;
                      setSelectedArea(null);
                      onSelectAreaForConsultation(title);
                    }}
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-charcoal-dark text-xs font-bold tracking-widest uppercase rounded shadow-lg hover:shadow-gold/10 transition-all active:scale-95 duration-200"
                  >
                    Agendar Triage Nesta Área
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
