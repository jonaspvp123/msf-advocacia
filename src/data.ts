import { PracticeArea, Founder, Testimonial, BlogPost } from './types';

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'empresarial',
    title: 'Direito Empresarial',
    description: 'Guarda jurídica e blindagem para grandes corporações, estruturação de fusões, aquisições, compliance e engenharia societária.',
    fullDetails: [
      'Blindagem Patrimonial e de Ativos de Sócios',
      'Mediação de Conflitos Societários complexos',
      'Constituição e Planejamento de Holdings Familiares',
      'Consultoria em Compliance Geral e Proteção de Dados (LGPD)',
      'Fusões, Aquisições (M&A) e Due Diligence Jurídica'
    ],
    icon: 'Briefcase',
    slug: 'direito-empresarial'
  },
  {
    id: 'trabalho',
    title: 'Direito do Trabalho',
    description: 'Atuação estratégica na defesa do patronato corporativo e representação focada de posições trabalhistas de alta gerência e complexidade.',
    fullDetails: [
      'Prevenção de Passivos Trabalhistas em larga escala',
      'Defesa em Ações de Alta Complexidade Contratual',
      'Negociações Coletivas e Relações Sindicais de alto nível',
      'Assessoria em Programas de PLR e Benefícios Executivos',
      'Compliance Trabalhista e Práticas Antiassédio'
    ],
    icon: 'ShieldAlert',
    slug: 'direito-do-trabalho'
  },
  {
    id: 'previdencia',
    title: 'Direito Previdenciário',
    description: 'Planejamento e concessão de aposentadorias diferenciadas, revisões estratégicas e regimes próprios de previdência.',
    fullDetails: [
      'Planejamento Previdenciário Estratégico Internacional e Nacional',
      'Concessão de Aposentadorias Especiais e de Alto Valor',
      'Ações Revisionais complexas contra a Previdência Social',
      'Assessoria em Regimes Próprios (Servidores Públicos)',
      'Defesa administrativa de benefícios suspensos'
    ],
    icon: 'Clock',
    slug: 'direito-previdenciario'
  },
  {
    id: 'civil',
    title: 'Direito Civil',
    description: 'Análise de contratos bilíngues, disputas de propriedade, responsabilidade civil de alta escala e obrigações comerciais.',
    fullDetails: [
      'Elaboração e Negociação de Contratos Nacionais e Internacionais',
      'Ações de Reparação Civil e Danos Patrimoniais',
      'Defesa de Propriedade Privada e Disputas de Posse',
      'Cobrança e Execução de Alta Performance de Créditos Corporativos',
      'Soluções Avançadas de Obrigações e Garantias de Contratos'
    ],
    icon: 'Scale',
    slug: 'direito-civil'
  },
  {
    id: 'familia',
    title: 'Direito de Família',
    description: 'Resolução sensível e altamente exclusiva de divórcios consensuais ou litigiosos, guarda, alimentos e holdings.',
    fullDetails: [
      'Divórcio Consensual e Litigioso com partilha complexa',
      'Pacto Antenupcial e Planejamento Prévio de Regime de Bens',
      'Regulamentação de Guarda Internacional ou Guarda Compartilhada',
      'Alimentos, Revisional de Pensão e Prestações de Alta Renda',
      'Constituição e Reconhecimento de União Estável e Contratos'
    ],
    icon: 'Users',
    slug: 'direito-de-familia'
  },
  {
    id: 'consumidor',
    title: 'Direito do Consumidor',
    description: 'Defesa institucional corporativa contra litígios predatórios e assessoria de alto nível para investidores de e-commerce.',
    fullDetails: [
      'Defesa Administrativa junto ao PROCON, Senacon e Agências Reguladoras',
      'Prevenção de Responsabilidade pelo Fato e Vício do Produto',
      'Gestão de Carteiras de Litígios Predatórios de Alta Escala',
      'Adequação de Termos de Uso e Políticas para Ecossistema Digital',
      'Ações Indenizatórias por Práticas Abusivas de Alta Complexidade'
    ],
    icon: 'UserCheck',
    slug: 'direito-do-consumidor'
  },
  {
    id: 'criminal',
    title: 'Direito Criminal',
    description: 'Defesa técnico-estratégica especializada em crimes de colarinho branco, empresarial, ambiental e tributário.',
    fullDetails: [
      'Direito Penal Econômico e Defesa de Crimes Tributários',
      'Atuação e Defesa em Crimes Ambientais Corporativos',
      'Gestão e Assessoria de Crimes de Internet e Fraudes Digitais',
      'Defesa em Inquéritos Criminais e Recursos em Tribunais Superiores',
      'Implementação de Programas Internos de Compliance Criminal'
    ],
    icon: 'Gavel',
    slug: 'direito-criminal'
  },
  {
    id: 'inventario',
    title: 'Inventário e Sucessões',
    description: 'Criação de transições patrimoniais tranquilas através de testamentos estruturados e inventários ágeis judiciais e extrajudiciais.',
    fullDetails: [
      'Inventários Extrajudiciais Céleres e Amigáveis em Cartório',
      'Inventários Judiciais Complexos com conflito de interesses',
      'Elaboração de Testamentos Inteligentes e Legados Patrimoniais',
      'Doações com reserva de usufruto e planejamento sucessório',
      'Planejamento de Holding Familiar integrando regras de sucessão'
    ],
    icon: 'FileText',
    slug: 'inventario-sucessoes'
  },
  {
    id: 'consultoria',
    title: 'Consultoria Jurídica',
    description: 'Pareceres jurídicos fundamentados para prevenir crises institucionais e dar sustentação a tomadas de decisão críticas.',
    fullDetails: [
      'Emissão de Opiniões Legais formais de Alta Complexidade',
      'Auditoria preventiva de Legalidade Operacional Interna',
      'Análise de riscos para Novos Negócios, Startups e Expansões',
      'Minimização proativa de riscos regulatórios e contratuais',
      'Capacitações de Liderança Corporativa sobre Legislações Setoriais'
    ],
    icon: 'HelpCircle',
    slug: 'consultoria-juridica'
  },
  {
    id: 'assessoria_empresarial',
    title: 'Assessoria Jurídica Empresarial',
    description: 'Suporte fixo continuado (retainer) integrado ao dia a dia da alta administração de sua empresa, com foco em resultados.',
    fullDetails: [
      'Atendimento mensal fixo em todas as demandas jurídicas ordinárias',
      'Análise de Contratos com Fornecedores, Parceiros e Colaboradores',
      'Reuniões de Alinhamento Estratégico com Conselhos e Diretorias',
      'Defesa em demandas cíveis, fiscais e administrativas decorrentes',
      'Auditoria Jurídica constante para Manutenção de Certidões Negativas'
    ],
    icon: 'Building',
    slug: 'assessoria-juridica-empresarial'
  }
];

export const FOUNDERS: Founder[] = [
  {
    name: 'Dr. Murilo Silva Felipe',
    role: 'Sócio Fundador & Diretor Geral',
    oab: 'OAB/MA 16.745',
    bio: 'Especialista em Direito de Alta Performance com foco em Blindagem Corporativa, Mediação de Contratos Globais de Investimento e Direito Penal Econômico. Atua na liderança estratégica dos principais casos nacionais da firma, construindo pontes sólidas entre a excelência acadêmica e a realidade comercial.',
    specialties: ['Direito Empresarial', 'Direito de Família premium', 'Planejamento Societário', 'Compliance e Governança'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Dra. Vivianny Araújo',
    role: 'Sócia Fundadora & Diretora Operacional',
    oab: 'OAB/MA 18.230',
    bio: 'Referência em Advocacia de Sucessões de Alta Renda e Direito do Trabalho com relevância nacional. Com pós-graduação e doutorado honoris causa pelas mais importantes instituições e certificação de excelência técnica de litígio, dra. Vivianny construiu uma carreira fundamentada no atendimento humanizado sob o espectro da máxima sofisticação jurídica.',
    specialties: ['Planejamento Sucessório', 'Inventários Complexos', 'Direito das Relações do Trabalho', 'Contratos de Alta Renda'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Luís Henrique Vasconcelos',
    role: 'Diretor de Tecnologia',
    company: 'Nexus Tech S/A',
    feedback: 'O nível de sofisticação jurídica que a equipe do MSF | Araújo trouxe para nossa rodada de investimento Séries A foi impecável. A segurança que transmitiram aos fundos estrangeiros selou o negócio com enorme facilidade.',
    rating: 5
  },
  {
    id: '2',
    clientName: 'Madelayne Albuquerque',
    role: 'Fundadora e CEO',
    company: 'Albuquerque Imobiliária Premium',
    feedback: 'Conduzir nosso planejamento sucessório de holding familiar com o escritório foi sinônimo de paz de espírito. Eles agiram com uma delicadeza excepcional com a minha família, mantendo um rigor técnico indiscutível.',
    rating: 5
  },
  {
    id: '3',
    clientName: 'Dr. Ricardo Castro Noleto',
    role: 'Diretor Executivo de Operações',
    company: 'Grupo Agro Castros',
    feedback: 'Fomos defendidos em uma causa trabalhista de alto valor que ameaçava seriamente nossas operações no Nordeste. A atuação cirúrgica do dr. Murilo e dra. Vivianny encerrou o litígio com ótimo resultado.',
    rating: 5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog1',
    title: 'Holding Familiar: O Instrumento Supremo de Blindagem contra Impostos e Sucessão Conturbada',
    excerpt: 'Análise detalhada de como a estruturação correta de uma controladora familiar evita desperdícios com inventários morosos.',
    content: 'O inventário no Brasil consome facilmente de 10% a 20% do valor total do patrimônio em impostos (ITCMD), custas judiciais e honorários advocatícios. Neste artigo, desdobramos as minúcias das holdings familiares como alternativa blindada, permitindo a transição sucessória livre de desentendimentos familiares em ambiente perfeitamente lícito de elisão fiscal.',
    category: 'Empresarial',
    date: '12 Jun, 2026',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    author: 'Dr. Murilo Silva Felipe'
  },
  {
    id: 'blog2',
    title: 'Tendências do Compliance Trabalhista para Grandes Operadoras e Logísticas em 2026',
    excerpt: 'As novas diretrizes regulatórias exigem uma mudança urgente na governança do trabalho. Saiba como precaver multas milionárias.',
    content: 'Com decisões recentes dos tribunais modificando critérios de descanso, horas de circulação e terceirizações, o compliance no setor de logística de grande porte precisará ser reimplementado. Apresentamos estratégias ativas para reduzir o volume de processos civis em mais de 60%.',
    category: 'Trabalhista',
    date: '02 Jun, 2026',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    author: 'Dra. Vivianny Araújo'
  },
  {
    id: 'blog3',
    title: 'O Planejamento Previdenciário Médico: Como Garantir o Teto Sem Comprometer a Carreira Ativa',
    excerpt: 'Uma análise técnica da conversão de tempo sob condições especiais de insalubridade de acordo com as regras de transição vigentes.',
    content: 'Muitos profissionais da saúde contribuem em múltiplos vínculos e acabam perdendo valores substanciais ao longo de anos devido à ausência de planejamento prévio. Analisamos como aplicar o fator previdenciário e converter as contribuições médicas para maximizar a aposentadoria no menor prazo legal possível.',
    category: 'Previdenciário',
    date: '28 Mai, 2026',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
    author: 'Equipe Editorial MSF'
  }
];
