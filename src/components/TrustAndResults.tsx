import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { ShieldCheck, Star, ArrowLeft, ArrowRight, UserCheck2, TrendingUp, Landmark } from 'lucide-react';

export default function TrustAndResults() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextTestimonial = () => {
    setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const results = [
    {
      num: '2017',
      label: 'Fundação',
      desc: 'Mais de 9 anos de dedicação jurídica intransigente.',
      icon: Landmark
    },
    {
      num: '27 Estados',
      label: 'Atendimento',
      desc: 'Presença digital e institucional plena em todo o território nacional.',
      icon: UserCheck2
    },
    {
      num: '10+',
      label: 'Especialidades',
      desc: 'Profissionais especialistas de prontidão para assessorias diversas.',
      icon: ShieldCheck
    },
    {
      num: '98%',
      label: 'Índice de Retenção',
      desc: 'Clientes recorrentes que confiam suas estratégias de longo prazo à nossa firma.',
      icon: TrendingUp
    }
  ];

  return (
    <section id="depoimentos" className="relative py-24 md:py-32 bg-charcoal-dark overflow-hidden">
      
      {/* Decorative vector shape background element */}
      <div className="absolute left-0 bottom-0 translate-y-1/3 -translate-x-1/3 w-[800px] h-[800px] border border-white/[0.015] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* SECTION 6: RESULTADOS E CONFIANÇA */}
        <div className="mb-24 md:mb-32">
          
          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase block font-semibold">
              Indicadores de Performance
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white font-medium">
              Excelência Comprovada em <br />
              <span className="text-gold italic font-light">Resultados e Alta Segurança</span>
            </h2>
            <div className="w-20 h-0.5 bg-gold/50" />
          </div>

          {/* Results grid (corporative big firm style) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group relative p-8 border border-white/[0.04] bg-charcoal-med/15 rounded hover:border-gold/30 hover:bg-charcoal-med/25 transition-all duration-500 hover:-translate-y-1"
                >
                  {/* Glowing background hint */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.015] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded border border-white/[0.08] flex items-center justify-center bg-charcoal-dark text-gold/80 group-hover:text-gold transition-colors duration-300">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[9px] text-silver/40">RESULTADO</span>
                  </div>

                  {/* Big prominent typography */}
                  <div className="font-serif text-3xl md:text-4xl font-semibold text-white tracking-wide group-hover:text-gold transition-colors duration-300">
                    {stat.num}
                  </div>
                  
                  <h4 className="font-sans text-xs tracking-[0.1em] text-silver uppercase font-semibold mt-2 mb-1">
                    {stat.label}
                  </h4>
                  
                  <p className="text-silver/70 text-xs font-light leading-relaxed">
                    {stat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>


        {/* SECTION 7: DEPOIMENTOS DE CLIENTES */}
        <div className="border-t border-white/[0.07] pt-24 md:pt-32">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-4">
            <div className="max-w-xl">
              <span className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase block mb-3 font-semibold">
                Controle de Satisfação
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white font-medium">
                O que dizem nossos <span className="text-gold italic font-light">Parceiros e Clientes</span>
              </h2>
            </div>
            
            {/* Carousel navigation controls */}
            <div className="flex items-center space-x-3">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded border border-white/[0.1] hover:border-gold/50 flex items-center justify-center text-silver hover:text-gold bg-charcoal-med/30 transition-all duration-300 active:scale-90"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded border border-white/[0.1] hover:border-gold/50 flex items-center justify-center text-silver hover:text-gold bg-charcoal-med/30 transition-all duration-300 active:scale-90"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Testimonial Active Slider Display with luxury glass design */}
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              {TESTIMONIALS.map((testimonial, idx) => {
                if (idx !== currentIdx) return null;
                return (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -25 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-charcoal-med/20 border border-white/[0.05] p-8 md:p-12 rounded-xl backdrop-blur-sm shadow-xl relative overflow-hidden"
                  >
                    {/* Big faint Quote Icon mark */}
                    <div className="absolute top-6 right-6 text-gold/[0.04] font-serif text-[12rem] select-none leading-none pointer-events-none font-bold">
                      ”
                    </div>

                    <div className="lg:col-span-8 space-y-6">
                      
                      {/* Rating stars */}
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                        ))}
                      </div>

                      {/* Comment */}
                      <blockquote className="font-sans text-base md:text-lg lg:text-xl text-silver-light font-light leading-relaxed tracking-wide italic">
                        "{testimonial.feedback}"
                      </blockquote>

                      {/* Client signature */}
                      <div>
                        <cite className="font-serif text-lg text-white font-medium not-italic block">
                          {testimonial.clientName}
                        </cite>
                        <span className="font-mono text-[10px] text-gold uppercase tracking-widest block">
                          {testimonial.role} {testimonial.company ? `| ${testimonial.company}` : ''}
                        </span>
                      </div>

                    </div>

                    {/* Left stats visual check stamp side-column */}
                    <div className="lg:col-span-4 border-l lg:border-l-2 lg:border-gold/30 pl-4 lg:pl-8 space-y-4">
                      <div className="flex items-center space-x-2 text-[10.5px] font-mono tracking-wider text-gold uppercase font-bold">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Identidade Auditada</span>
                      </div>
                      <p className="text-xs text-silver/70 leading-relaxed font-sans font-light">
                        Este depoimento foi colhido formalmente em pesquisa de satisfação anual, com estrito consentimento do representante legal corporativo.
                      </p>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Slider progress dots indicator */}
            <div className="flex items-center justify-center space-x-2 mt-8">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIdx(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentIdx ? 'bg-gold w-6' : 'bg-white/10 hover:bg-white/30'
                  }`}
                  aria-label={`Go to slide ${i+1}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
