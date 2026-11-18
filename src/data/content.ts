export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface ConditionItem {
  id: string;
  title: string;
  description: string;
  highlight: string;
}

export const navigationLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Atendimento', href: '#atendimento' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Condições', href: '#condicoes' },
  { label: 'Contato', href: '#contato' },
] as const;

export const heroContent = {
  badge: 'Toda a Zona Leste de São Paulo',
  title: 'Construção e reformas com experiência e compromisso.',
  subtitle:
    'Serviços de construção, reformas e manutenção para imóveis residenciais e comerciais na Zona Leste de São Paulo.',
  primaryCta: 'Solicitar orçamento gratuito',
  secondaryCta: 'Conhecer nossos serviços',
  highlights: [
    '~10 anos de experiência prática',
    'Atendimento direto com Ademir',
    'Orçamento gratuito sem compromisso',
    'Residencial e comercial',
  ],
} as const;

export const aboutContent = {
  eyebrow: 'Sobre a ADM',
  title: 'Trabalho sério e acompanhado do início ao fim',
  mainText:
    'A ADM Construções e Reformas em Geral é conduzida por Ademir, profissional autônomo com aproximadamente 10 anos de experiência. Ele acompanha cada etapa do serviço pessoalmente, contando com ajudantes quando a complexidade da obra exige.',
  pillars: [
    {
      title: 'Aproximadamente 10 anos no setor',
      description: 'Experiência prática em obras, reformas e manutenção em São Paulo.',
    },
    {
      title: 'Execução e contato direto',
      description: 'Você trata diretamente com Ademir, sem intermediários.',
    },
    {
      title: 'Apoio sob medida',
      description: 'Conta com ajudantes de confiança conforme a necessidade do serviço.',
    },
  ],
} as const;

export const howItWorksSteps: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Contato no WhatsApp',
    description: 'Informe o serviço que precisa e o seu bairro na Zona Leste.',
  },
  {
    stepNumber: '02',
    title: 'Fotos ou Visita',
    description: 'Envie fotos/vídeos do local ou agende uma visita presencial.',
  },
  {
    stepNumber: '03',
    title: 'Orçamento Gratuito',
    description: 'Receba o valor da mão de obra de forma clara e sem custo.',
  },
  {
    stepNumber: '04',
    title: 'Agendamento e Obra',
    description: 'Com os materiais no local, o serviço é agendado e executado por Ademir.',
  },
];

export const conditionsData: ConditionItem[] = [
  {
    id: 'orcamento',
    highlight: 'Sem custo',
    title: 'Orçamento Gratuito',
    description: 'Avaliação sem compromisso por fotos/vídeos no WhatsApp ou visita agendada.',
  },
  {
    id: 'mao-de-obra',
    highlight: 'Diária ou empreitada',
    title: 'Apenas Mão de Obra',
    description: 'Valores referentes à mão de obra, definidos por serviço fechado ou diária.',
  },
  {
    id: 'materiais',
    highlight: 'Fornecimento',
    title: 'Materiais pelo Cliente',
    description: 'A compra e reposição dos materiais necessários ficam por conta do cliente.',
  },
  {
    id: 'pagamento',
    highlight: 'Pix ou Dinheiro',
    title: 'Pagamento e Agendamento',
    description:
      'Pagamento em Pix ou dinheiro (não aceitamos cartão) e atendimento com hora marcada.',
  },
];
