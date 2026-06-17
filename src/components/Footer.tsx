import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Scale, ShieldCheck, ChevronRight } from 'lucide-react';
import { PRACTICE_AREAS } from '../data';

export default function Footer() {
  
  // Inject complete Schema.org LocalBusiness JSON-LD structured data for LawFirm SEO
  useEffect(() => {
    const scriptId = 'msf-araujo-schema-ld';
    let existingScript = document.getElementById(scriptId);
    
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Attorney",
      "name": "MSF | Araújo Advogados Associados",
      "image": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format",
      "telephone": "+55-98-3214-5500",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. dos Holandeses, Quadra 04, Edifício Golden Tower, Calhau",
        "addressLocality": "São Luís",
        "addressRegion": "MA",
        "postalCode": "65071-380",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-2.4831",
        "longitude": "-44.2982"
      },
      "url": window.location.origin,
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://linkedin.com",
        "https://instagram.com"
      ]
    };

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal-dark border-t border-white/[0.06] pt-16 pb-8 text-silver">
      
      {/* Decorative vertical divider accents */}
      <div className="absolute right-10 top-0 bottom-0 w-px bg-white/[0.01] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          
          {/* Logo & Description Column */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center space-x-3 group">
              <div className="relative flex items-center justify-center w-10 h-10 border border-gold/40 rounded bg-charcoal-med/60">
                <span className="font-serif text-lg font-bold text-gold">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-[0.2em] text-white">
                  MSF <span className="text-gold">|</span> ARAÚJO
                </span>
                <span className="font-mono text-[9px] tracking-[0.35em] text-silver uppercase">
                  ADVOGADOS ASSOCIADOS
                </span>
              </div>
            </a>
            
            <p className="text-xs md:text-sm text-silver/70 font-light leading-relaxed">
              Escritório de advocacia premium com foco em soluções ágeis, blindagem patrimonial, consultoria preventiva e contencioso civil corporativo especializado de alta escala.
            </p>

            <div className="flex items-center space-x-3 text-gold">
              <ShieldCheck className="w-5 h-5 animate-pulse shrink-0" />
              <span className="font-mono text-[9px] tracking-widest uppercase">Segurança e Ética Credenciadas</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase">
              O Escritório
            </h4>
            <ul className="flex flex-col space-y-2.5 text-xs">
              {['#sobre', '#areas', '#diferenciais', '#expansao', '#depoimentos', '#blog', '#contato'].map((link) => {
                const names: { [key: string]: string } = {
                  '#sobre': 'Nossa História',
                  '#areas': 'Áreas de Atuação',
                  '#diferenciais': 'Nossos Diferenciais',
                  '#expansao': 'Unidades e Expansão',
                  '#depoimentos': 'Resultados e Depoimentos',
                  '#blog': 'Blog e Artigos',
                  '#contato': 'Triage Digital'
                };
                return (
                  <li key={link}>
                    <a
                      href={link}
                      onClick={(e) => handleLinkClick(e, link)}
                      className="hover:text-gold transition-colors duration-200 flex items-center gap-1 group"
                    >
                      <ChevronRight className="w-3 h-3 text-gold/50 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      <span>{names[link]}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Practice Areas Indexes Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase">
              Especialidades
            </h4>
            <ul className="flex flex-col space-y-2.5 text-xs">
              {PRACTICE_AREAS.slice(0, 6).map((area) => (
                <li key={area.id}>
                  <a
                    href="#areas"
                    onClick={(e) => handleLinkClick(e, '#areas')}
                    className="hover:text-gold transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <Scale className="w-3.5 h-3.5 text-gold/30 shrink-0" />
                    <span>{area.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts Addresses Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase">
              Contatos & Unidades
            </h4>
            <ul className="flex flex-col space-y-4 text-xs">
              
              {/* Unit São Luís physical address */}
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong>Unidade São Luís:</strong> Av. dos Holandeses, Edifício Golden Tower, Calhau - São Luís/MA.
                </span>
              </li>

              {/* Emails */}
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:contato@msfaraujo.adv.br" className="hover:text-gold font-mono text-[11px] transition-colors">
                  contato@msfaraujo.adv.br
                </a>
              </li>

              {/* Telephone */}
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span className="font-mono text-[11px]">(98) 3214-5500 / 99123-4567</span>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-silver/60 gap-4">
          
          <div className="space-y-1 text-center md:text-left">
            <p>
              © {currentYear} MSF | Araújo Advogados Associados. Todos os direitos reservados.
            </p>
            <p className="text-[10px] text-silver/40">
              Inscrição de Sociedade OAB/MA nº 1.340 | CNPJ: 28.530.129/0001-44
            </p>
          </div>

          <div className="flex items-center space-x-6 text-[10px] tracking-widest uppercase font-mono">
            {['Código de Ética OAB', 'Políticas de Privacidade', 'Termos de Serviço'].map((term) => (
              <a key={term} href="#contato" onClick={(e) => handleLinkClick(e, '#contato')} className="hover:text-white transition-colors duration-200">
                {term}
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}
