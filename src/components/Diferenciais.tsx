import React from 'react';
import { motion } from 'motion/react';
import { Map, Video, Cpu, ShieldCheck, Compass, Eye, Sparkles, Heart } from 'lucide-react';

export default function Diferenciais() {
  const diffs = [
    {
      title: 'Atendimento em Todo o Brasil',
      desc: 'Infraestrutura distribuída digitalmente com suporte processual integral para litigar ou pactuar em qualquer comarca ou tribunal nacional.',
      icon: Map
    },
    {
      title: 'Estrutura Online e Presencial',
      desc: 'Salas de reunião físicas exclusivas combinadas com sistemas de atendimento digital criptografados para conversas reservadas com máxima agilidade.',
      icon: Video
    },
    {
      title: 'Soluções Personalizadas',
      desc: 'Rechaçamos teses ou minutas padronizadas. Cada memorial ou contestação é modelado única e exclusivamente para a sua situação fática.',
      icon: Cpu
    },
    {
      title: 'Segurança Jurídica Absoluta',
      desc: 'Zelo absoluto pelas regras da Ordem, sigilo criptográfico e acompanhamento rigoroso de prazos, resguardando cada vulnerabilidade operacional.',
      icon: ShieldCheck
    },
    {
      title: 'Estratégias Preventivas',
      desc: 'Agimos pró-ativamente. Mapeamos passivos e identificamos vulnerabilidades no ecossistema da sua empresa antes que virem disputas judiciais.',
      icon: Compass
    },
    {
      title: 'Equipe de Elite Especializada',
      desc: 'Nossa equipe é composta por mestres e especialistas nas mais proeminentes disciplinas jurídicas, garantindo robustez de argumentos.',
      icon: Eye
    },
    {
      title: 'Estrita Transparência e Ética',
      desc: 'Alinhamento integral com os interesses e valores do cliente. Reportamos as reais chances de êxito logo na análise de viabilidade.',
      icon: Sparkles
    },
    {
      title: 'Atendimento Próximo e Humanizado',
      desc: 'Compreendemos as dores e a ansiedade inerentes a conflitos. Mantemos empatia absoluta e suporte constante em ligações ou reuniões.',
      icon: Heart
    }
  ];

  return (
    <section id="diferenciais" className="relative py-24 md:py-32 bg-charcoal-dark overflow-hidden">
      
      {/* Absolute decorative ring */}
      <div className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 w-[600px] h-[600px] border border-gold/5 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase block mb-3 font-semibold">
            Por que nos escolher?
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white font-medium mb-6">
            Diferenciais de um <span className="text-gold italic font-light">Grande Escritório</span>
          </h2>
          <div className="w-20 h-0.5 bg-gold/50 mb-6" />
          <p className="text-silver/80 text-sm md:text-base font-light leading-relaxed">
            Nossa estrutura operacional está preparada para apoiar você ou sua corporação com máxima segurança, agilidade técnica, ética impoluta, transparência irrestrita e abrangência de canais.
          </p>
        </div>

        {/* Bento grid-like or modular cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {diffs.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group p-8 border border-white/[0.03] bg-charcoal-med/20 rounded-lg hover:border-gold/30 hover:bg-charcoal-med/30 transition-all duration-500 flex flex-col space-y-4"
              >
                {/* Minimal Icon Decor */}
                <div className="w-10 h-10 rounded border border-gold/20 flex items-center justify-center bg-charcoal-dark text-gold group-hover:bg-gold group-hover:text-charcoal-dark group-hover:border-gold transition-all duration-500">
                  <IconComp className="w-5 h-5" />
                </div>

                <div className="flex flex-col space-y-2">
                  <h3 className="font-sans text-sm md:text-base font-semibold text-white group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-silver/70 text-xs md:text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Extra Highlight Box */}
        <div className="mt-16 md:mt-24 p-8 md:p-12 border border-gold/20 bg-charcoal-med/35 backdrop-blur-sm rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="font-mono text-[9px] tracking-[0.25em] text-gold uppercase font-bold px-2 py-1 rounded bg-gold/10 border border-gold/20 inline-block">
                Tecnologia & Agilidade
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-medium">
                Sistemas Digitais Integrados com Inteligência Jurídica
              </h3>
              <p className="text-silver text-sm font-light leading-relaxed">
                Utilizamos sistemas modernos de varredura prévia de diários oficiais nacionais com alertas instantâneos, permitindo-nos agir preventivamente antes que prazos comecem a fruir, fornecendo relatórios em tempo real da carteira corporativa.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="flex flex-col space-y-1">
                <span className="font-serif text-3xl font-light text-gold italic">100% Digital</span>
                <span className="text-[10px] text-silver font-mono tracking-widest uppercase">Segurança e Agilidade</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
