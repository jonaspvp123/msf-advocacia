import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FOUNDERS } from '../data';
import { GraduationCap, Award, BookOpen, Clock, Users, ArrowUpRight, Scale } from 'lucide-react';

export default function About() {
  const [activePartnerIdx, setActivePartnerIdx] = useState(0);

  const values = [
    {
      title: 'Ética & Rigor',
      desc: 'Nossa conduta é inegociável. Seguimos os mais estofados critérios morais com zelo absoluto pela discrição corporativa.',
    },
    {
      title: 'Transparência Real',
      desc: 'Informações claras e relatórios céleres. O cliente acompanha cada evolução processual em canal direto e didático.',
    },
    {
      title: 'Atendimento Humanizado',
      desc: 'Por trás de cada processo há uma história e um objetivo de vida. Nossos clientes não são números, são parceiros.',
    },
    {
      title: 'Excelência Técnica',
      desc: 'Especialização constante e teses sólidas. Pesquisamos jurisprudências profundas para obter as melhores vantagens estruturadas.',
    },
  ];

  return (
    <section id="sobre" className="relative py-24 md:py-32 bg-charcoal-dark border-t border-white/[0.04]">
      {/* Absolute faint branding overlay */}
      <div className="absolute top-0 right-0 p-12 text-white/[0.01] pointer-events-none font-serif text-[18vw] select-none leading-none">
        MSF
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 md:mb-24 gap-4">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase block mb-3 font-semibold">
              Institucional
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white font-medium">
              Sólida Trajetória, <br className="hidden md:inline" />
              Sustentada em <span className="text-gold italic font-light">Princípios Imutáveis</span>
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="text-silver/80 text-sm md:text-base font-light leading-relaxed">
              Fundado em 2017 pelas mentes estratégicas de Dr. Murilo e Dra. Vivianny, o escritório **MSF | Araújo Advogados Associados** nasceu inspirado na advocacia artesanal, combinada com velocidade, inteligência tecnológica e dedicação incondicional à causa dos clientes.
            </p>
          </div>
        </div>

        {/* Core Alternate Layout: Narrative & Interactive Partner Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Values grid & Narrative card */}
          <div className="lg:col-span-6 flex flex-col space-y-10">
            <div className="bg-charcoal-med/40 border border-white/[0.05] p-8 md:p-10 rounded-lg relative overflow-hidden backdrop-blur-sm shadow-xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-gold to-gold-dark" />
              <h3 className="font-serif text-xl md:text-2xl text-white font-medium mb-4">
                Nossa Missão de Vanguarda
              </h3>
              <p className="text-silver text-sm md:text-base font-light leading-relaxed">
                Entregar segurança jurídica refinada. Entendemos que soluções genéricas não atendem à complexidade dos desafios contemporâneos. Por isso, debruçamo-nos sobre as peculiaridades de cada caso para projetar caminhos sob medida, alinhando excelência acadêmica ao dinamismo operacional.
              </p>
            </div>

            {/* Premium values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v, index) => (
                <div 
                  key={v.title}
                  className="p-6 border border-white/[0.03] bg-charcoal-med/15 rounded flex flex-col space-y-3 hover:border-gold/30 transition-colors duration-500 hover:bg-charcoal-med/20 group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-xs text-gold font-bold">0{index + 1}.</span>
                    <h4 className="font-sans text-sm font-semibold text-white tracking-wide group-hover:text-gold transition-colors">
                      {v.title}
                    </h4>
                  </div>
                  <p className="text-silver/70 text-xs leading-relaxed font-light">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-standard Founders presentation with switcher tabs */}
          <div className="lg:col-span-6 flex flex-col">
            
            {/* Tab buttons switcher */}
            <div className="flex border-b border-white/[0.07] mb-8 bg-charcoal-med/30 p-1.5 rounded gap-2">
              {FOUNDERS.map((founder, index) => (
                <button
                  key={founder.name}
                  onClick={() => setActivePartnerIdx(index)}
                  className={`flex-1 py-3 text-center text-xs tracking-wider uppercase font-semibold rounded transition-all duration-300 ${
                    activePartnerIdx === index
                      ? 'bg-gradient-to-r from-gold/20 to-gold-dark/10 border border-gold/40 text-gold shadow-md'
                      : 'text-silver hover:text-white hover:bg-white/[0.02]'
                  }`}
                >
                  {founder.name.split(' ')[1]} {founder.name.split(' ')[2]}
                </button>
              ))}
            </div>

            {/* active partner profile display with layout and fade animations */}
            <AnimatePresence mode="wait">
              {FOUNDERS.map((founder, index) => {
                if (index !== activePartnerIdx) return null;
                return (
                  <motion.div
                    key={founder.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col space-y-8"
                  >
                    {/* Visual Photo Card */}
                    <div className="grid grid-cols-1 md:grid-cols-12 border border-white/[0.05] rounded-xl overflow-hidden bg-charcoal-med/20 backdrop-blur-sm hover:border-gold/20 transition-all duration-500">
                      
                      {/* Photo Container */}
                      <div className="md:col-span-5 h-64 md:h-auto overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/20 to-transparent z-10" />
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 transform scale-102 group-hover:scale-108"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute bottom-4 left-4 z-20 font-mono text-[9px] text-white bg-gold/80 px-2 py-0.5 rounded tracking-wider uppercase">
                          {founder.oab}
                        </div>
                      </div>

                      {/* Bio details Column */}
                      <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-6">
                        <div>
                          <div className="flex items-center space-x-2 text-gold text-xs font-mono font-medium tracking-wide uppercase mb-2">
                            <Scale className="w-3.5 h-3.5" />
                            <span>SÓCIO-PROPRIETÁRIO</span>
                          </div>
                          <h4 className="font-serif text-2xl text-white font-medium">
                            {founder.name}
                          </h4>
                          <p className="font-sans text-[11px] text-silver uppercase tracking-[0.15em] mb-4">
                            {founder.role}
                          </p>
                          <p className="text-silver/90 text-xs font-light leading-relaxed font-sans mb-4 italic">
                            "{founder.bio}"
                          </p>
                        </div>

                        {/* Specialties */}
                        <div>
                          <span className="font-mono text-[8px] text-gold uppercase tracking-[0.2em] font-semibold block mb-2">Foco Técnico de Atuação</span>
                          <div className="flex flex-wrap gap-1.5">
                            {founder.specialties.map((spec) => (
                              <span 
                                key={spec} 
                                className="bg-white/[0.03] border border-white/[0.05] px-2 py-0.5 rounded-full text-[10px] text-silver/90 whitespace-nowrap font-sans"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Extra professional commitment stamps */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 border border-white/[0.03] rounded bg-charcoal-med/10 flex items-center space-x-3">
                        <GraduationCap className="text-gold w-5 h-5 shrink-0" />
                        <span className="text-[11px] text-silver font-sans leading-tight">Especialização Acadêmica continuada</span>
                      </div>
                      <div className="p-4 border border-white/[0.03] rounded bg-charcoal-med/10 flex items-center space-x-3">
                        <Award className="text-gold w-5 h-5 shrink-0" />
                        <span className="text-[11px] text-silver font-sans leading-tight">Participação de destaque no conselho OAB</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
