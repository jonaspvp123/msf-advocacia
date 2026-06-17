import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Globe, Award, Landmark, Sparkles, Building2, User } from 'lucide-react';

interface RegionData {
  id: string;
  name: string;
  state: string;
  partners: string[];
  role: string;
  address: string;
  capacity: string;
  coordinates: { x: number; y: number }; // Percentage for placement on schematic map
}

export default function Expansion() {
  const [activeRegionId, setActiveRegionId] = useState<string>('ma');

  const regions: RegionData[] = [
    {
      id: 'ma',
      name: 'Unidade São Luís (Maranhão)',
      state: 'Maranhão - Integração MAOC Advogados',
      partners: ['Dra. Erika Oliveira', 'Dr. Ícaro Ceveira'],
      role: 'Diretores Regionais & Especialistas',
      address: 'Av. dos Holandeses, Quadra 04, Edifício Golden Tower, Calhau, São Luís/MA',
      capacity: 'Hub principal de expansão imobiliária, societária, empresarial e agrário no Norte/Nordeste brasileiros.',
      coordinates: { x: 68, y: 35 }
    },
    {
      id: 'df',
      name: 'Correspondência Brasília (DF)',
      state: 'Distrito Federal - Tribunais Superiores',
      partners: ['Equipe Institucional MSF'],
      role: 'Representação em Tribunais Superiores',
      address: 'Setor de Autarquias Sul (SAS), Quadra 05, Bloco N, Asa Sul, Brasília/DF',
      capacity: 'Acompanhamento imediato de sustentações orais, recursos e habeas corpus perante o STF, STJ e TST.',
      coordinates: { x: 55, y: 55 }
    },
    {
      id: 'sp',
      name: 'Correspondência Corporativa São Paulo (SP)',
      state: 'São Paulo - Centro de Negócios',
      partners: ['Murilo Silva Felipe', 'Vivianny Araújo'],
      role: 'Representação Estratégica Societária',
      address: 'Avenida Paulista, 1000, Bela Vista, São Paulo/SP',
      capacity: 'Negociação direta de fusões, blindagens econômicas e mediação com fundos investidores baseados na capital.',
      coordinates: { x: 52, y: 72 }
    }
  ];

  const activeRegion = regions.find(r => r.id === activeRegionId) || regions[0];

  return (
    <section id="expansao" className="relative py-24 md:py-32 bg-charcoal-med/30 border-t border-b border-white/[0.04]">
      {/* Decorative stars / ambient lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase block font-semibold">
              Crescimento Institucional
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white font-medium leading-[1.12]">
              Expansão e Fortalecimento <br />
              <span className="text-gradient bg-gradient-to-r from-gold via-gold-light to-gold-dark bg-clip-text text-transparent italic font-light font-serif">
                Nacional
              </span>
            </h2>
            <div className="w-20 h-0.5 bg-gold/50" />
          </div>
          <div className="lg:col-span-5">
            <p className="text-silver/90 text-sm md:text-base font-light leading-relaxed">
              Com o compromisso de estar mais perto de nossos clientes em todo o território nacional, a MSF | Araújo Advogados Associados expandiu sua atuação para São Luís do Maranhão através da integração exclusiva da sociedade **MAOC Advogados – MSF, Araújo, Oliveira e Ceveira Advogados**.
            </p>
          </div>
        </div>

        {/* Map and details board wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-12 md:mt-20">
          
          {/* Schematic Interactive Map of Brazil Column (using SVG design graphics) */}
          <div className="lg:col-span-6 border border-white/[0.05] bg-charcoal-dark/45 p-8 rounded-xl flex flex-col justify-between min-h-[460px] relative overflow-hidden group">
            
            {/* Background design grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

            <div className="relative z-10 mb-6">
              <span className="font-mono text-[9px] tracking-[0.2em] text-silver/60 uppercase">
                VETOR DE PRESENÇA INSTITUCIONAL
              </span>
              <p className="text-white text-xs mt-1 font-light">Selecione os núcleos no mapa para verificar cada detalhe técnico/operacional.</p>
            </div>

            {/* Stylized Outline Brazil Map Vector Illustration */}
            <div className="relative h-64 md:h-80 w-full flex items-center justify-center">
              
              {/* Graphic schematic representation of Brazil using high-end grid shapes */}
              <svg 
                viewBox="0 0 500 500" 
                className="w-full h-full max-w-[360px] opacity-40 text-silver/20 stroke-current select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simplified highly premium polygonal stylized map outline */}
                <path 
                  d="M 230 40 L 310 50 L 370 120 L 410 160 L 450 190 L 470 230 L 450 250 L 410 240 L 390 280 L 360 300 L 340 330 L 320 370 L 305 405 L 290 425 L 273 450 L 253 452 L 243 430 L 255 400 L 250 370 L 220 350 L 190 320 L 170 280 L 130 250 L 100 230 L 70 215 L 50 190 L 60 170 L 100 150 L 140 140 L 160 120 L 170 85 L 180 50 Z" 
                  fill="none" 
                  strokeWidth="2.5" 
                  className="stroke-silver/20 [stroke-dasharray:6]"
                />
                
                {/* Secondary inner contour */}
                <path 
                  d="M 230 50 L 300 60 L 360 125 L 435 190 L 455 225 L 435 240 L 380 270 L 330 330 L 300 390 L 265 435 L 250 420 L 245 365 L 210 340 L 160 275 L 90 220 L 60 185 L 135 135 L 175 60 Z" 
                  fill="none" 
                  strokeWidth="0.8" 
                  className="stroke-gold/20"
                />

                {/* Grid guidelines to create luxury visual engineering design */}
                <line x1="250" y1="0" x2="250" y2="500" className="stroke-white/[0.03]" />
                <line x1="0" y1="250" x2="500" y2="250" className="stroke-white/[0.03]" />
                
                {/* Connection lines between points and nodes */}
                {regions.map((region) => (
                  <line 
                    key={`line-${region.id}`}
                    x1="262" // Anchor point approximate in Center
                    y1="272"
                    x2={`${region.coordinates.x}%`}
                    y2={`${region.coordinates.y}%`}
                    className={`stroke-gradient transition-all duration-700 ${
                      activeRegionId === region.id ? 'stroke-gold animate-pulse stroke-2' : 'stroke-white/10 stroke-[0.5]'
                    }`}
                  />
                ))}
              </svg>

              {/* Map Interaction Nodes Overlay */}
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegionId(region.id)}
                  style={{
                    left: `${region.coordinates.x}%`,
                    top: `${region.coordinates.y}%`
                  }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group/node"
                >
                  <span className="relative flex h-5 w-5 items-center justify-center">
                    {/* Ripple halo */}
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      activeRegionId === region.id ? 'bg-gold' : 'bg-silver/30 group-hover/node:bg-gold/40'
                    }`} />
                    
                    {/* Actual center solid point dot */}
                    <span className={`relative inline-flex rounded-full h-3.5 w-3.5 border transition-all duration-300 ${
                      activeRegionId === region.id 
                        ? 'bg-gold border-white scale-110 shadow-lg shadow-gold/50' 
                        : 'bg-charcoal-dark border-gold/60 group-hover/node:bg-gold-light'
                    }`} />
                  </span>
                  
                  {/* Floating acronym name */}
                  <span className={`absolute top-6 left-1/2 transform -translate-x-1/2 font-mono text-[9px] tracking-widest bg-charcoal-dark/95 border px-1.5 py-0.5 rounded transition-all duration-300 ${
                    activeRegionId === region.id 
                      ? 'text-gold border-gold/50 font-bold scale-105' 
                      : 'text-silver/70 border-white/[0.05] group-hover/node:text-gold'
                  }`}>
                    {region.id.toUpperCase()}
                  </span>
                </button>
              ))}

              {/* Anchor central connection node in center representing nationwide capacity */}
              <div className="absolute left-[52.4%] top-[54.4%] w-1.5 h-1.5 bg-silver-light rounded-full border border-charcoal-dark" title="Union Pivot" />
            </div>

            {/* Quick stats stamp at the bottom of the column map */}
            <div className="flex justify-between items-center bg-charcoal-med/40 border border-white/[0.05] p-4 rounded-lg relative z-10">
              <span className="text-[11px] text-silver font-sans leading-tight">Presença Jurídica e Correspondência Corporativa Ativa nos principais Estados</span>
              <Globe className="text-gold w-5 h-5 shrink-0" />
            </div>

          </div>

          {/* Region Detailed Board Display Column */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRegion.id}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.35 }}
                className="border border-gold/20 bg-charcoal-dark/85 backdrop-blur-sm p-8 md:p-10 rounded-xl space-y-8 flex flex-col justify-between h-full hover:border-gold/40 transition-colors duration-500"
              >
                {/* Card Top section */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center border border-gold/40">
                      <Landmark className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-white font-medium">
                        {activeRegion.name}
                      </h3>
                      <p className="font-sans text-xs text-gold uppercase tracking-[0.1em]">
                        {activeRegion.state}
                      </p>
                    </div>
                  </div>

                  <hr className="border-white/[0.06]" />

                  {/* Operational leaders detail */}
                  <div className="space-y-4">
                    <span className="font-mono text-[9px] text-gold tracking-widest uppercase block font-semibold">Integrantes Destacados na Região</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activeRegion.partners.map((partner) => (
                        <div key={partner} className="p-3 bg-charcoal-med/40 rounded border border-white/[0.05] flex items-center gap-2">
                          <User className="text-gold w-4 h-4 shrink-0" />
                          <span className="text-sm text-white font-sans">{partner}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-[11px] text-silver/80 italic font-sans mt-1">
                      {activeRegion.role}
                    </p>
                  </div>

                  {/* Core Capacity description */}
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] text-gold tracking-widest uppercase block font-semibold">Capacidade de Atuação</span>
                    <p className="text-silver/90 text-sm font-light leading-relaxed">
                      {activeRegion.capacity}
                    </p>
                  </div>
                </div>

                {/* Geography Address locator with icon */}
                <div className="pt-6 border-t border-white/[0.06] space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-gold w-5 h-5 mt-1 shrink-0" />
                    <span className="text-xs text-silver leading-relaxed font-sans">{activeRegion.address}</span>
                  </div>
                  
                  {activeRegion.id === 'ma' && (
                    <div className="p-4 bg-gold/5 rounded border border-gold/20 flex gap-3 items-center">
                      <Sparkles className="text-gold w-5 h-5 shrink-0" />
                      <p className="text-[11px] text-gold-light leading-snug font-sans">
                        A união com a MAOC Advogados potencializa nossa atuação regional integrando novos parceiros com mais de uma década de profundo conhecimento local e prestígio institucional.
                      </p>
                    </div>
                  )}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
