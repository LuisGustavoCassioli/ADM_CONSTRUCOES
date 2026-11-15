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

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
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
  badge: 'Atendimento em toda a Zona Leste de São Paulo',
  title: 'Construção e reformas com experiência e compromisso.',
  subtitle:
    'Serviços de construção, reformas e manutenção para imóveis residenciais e comerciais em toda a Zona Leste de São Paulo.',
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
  eyebrow: 'Quem conduz o seu serviço',
  title: 'Trabalho sério, acompanhado do início ao fim por quem entende de obra',
  mainText:
    'A ADM Construções e Reformas em Geral é conduzida por Ademir, profissional com aproximadamente 10 anos de experiência no setor. Seu trabalho é acompanhado diretamente por ele, desde o início até a conclusão do serviço, contando com ajudantes quando a complexidade da obra exige.',
  secondaryText:
    'Ao contratar a ADM, você trata diretamente com quem executa e supervisiona o serviço no dia a dia. Sem intermediários, com diálogo claro, respeito ao seu imóvel e foco em entregar exatamente o que foi combinado.',
  pillars: [
    {
      title: 'Aproximadamente 10 anos no setor',
      description: 'Vivência prática em obras, reformas e manutenção predial na capital paulista.',
    },
    {
      title: 'Presença direta do Ademir',
      description: 'O próprio responsável realiza e acompanha cada etapa do trabalho no local.',
    },
    {
      title: 'Apoio sob medida',
      description: 'Quando o porte do serviço exige, conta com ajudantes de confiança sob sua supervisão.',
    },
    {
      title: 'Foco na Zona Leste de SP',
      description: 'Proximidade que facilita visitas técnicas, pontualidade e organização da rotina.',
    },
  ],
} as const;

export const differentialsData: DifferentialItem[] = [
  {
    id: 'experiencia',
    title: 'Aproximadamente 10 anos de experiência',
    description: 'Conhecimento prático em alvenaria, reformas, acabamentos e manutenção.',
  },
  {
    id: 'atendimento-direto',
    title: 'Atendimento direto com Ademir',
    description: 'Você conversa e negocia diretamente com o profissional responsável pela obra.',
  },
  {
    id: 'orcamento-gratuito',
    title: 'Orçamento gratuito',
    description: 'Avaliação clara e sem custo para você planejar seu serviço com segurança.',
  },
  {
    id: 'avaliacao-flexivel',
    title: 'Avaliação por fotos, vídeos ou visita',
    description: 'Triagem ágil pelo WhatsApp ou visita presencial agendada quando necessário.',
  },
  {
    id: 'residencial-comercial',
    title: 'Atendimento residencial e comercial',
    description: 'Soluções para casas, apartamentos, condomínios, lojas, salões e escritórios.',
  },
  {
    id: 'acompanhamento',
    title: 'Acompanhamento do início ao fim',
    description: 'Compromisso com a execução correta desde a preparação até a entrega final.',
  },
];

export const howItWorksSteps: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Contato pelo WhatsApp',
    description:
      'Você entra em contato pelo WhatsApp informando qual serviço deseja realizar e o bairro do imóvel na Zona Leste.',
  },
  {
    stepNumber: '02',
    title: 'Envio de fotos e vídeos',
    description:
      'Você explica a necessidade e envia fotos ou vídeos do local para facilitar a análise inicial.',
  },
  {
    stepNumber: '03',
    title: 'Avaliação ou visita técnica',
    description:
      'Ademir avalia o serviço pelas mídias enviadas e, quando a complexidade exigir, agenda uma visita presencial ao local.',
  },
  {
    stepNumber: '04',
    title: 'Orçamento gratuito',
    description:
      'É apresentado o orçamento gratuito de mão de obra, de forma clara e sem letras miúdas.',
  },
  {
    stepNumber: '05',
    title: 'Agendamento do serviço',
    description:
      'Após a aprovação do orçamento e providência dos materiais pelo cliente, combinamos a data de início.',
  },
  {
    stepNumber: '06',
    title: 'Execução e acompanhamento',
    description:
      'Ademir executa e acompanha o trabalho do início à conclusão, mantendo você informado em cada etapa.',
  },
];

export const conditionsData: ConditionItem[] = [
  {
    id: 'orcamento',
    highlight: 'Sem custo',
    title: 'Orçamento Gratuito',
    description:
      'A avaliação inicial — seja por envio de fotos e vídeos no WhatsApp ou mediante visita agendada — é totalmente gratuita.',
  },
  {
    id: 'mao-de-obra',
    highlight: 'Cobrança justa',
    title: 'Cobrança Referente à Mão de Obra',
    description:
      'Os valores orçados referem-se exclusivamente à mão de obra. O valor pode ser definido por serviço completo (empreitada) ou por diária, conforme a natureza do trabalho.',
  },
  {
    id: 'materiais',
    highlight: 'Responsabilidade do cliente',
    title: 'Fornecimento de Materiais',
    description:
      'O cliente é responsável pela compra e fornecimento dos materiais necessários, inclusive eventuais materiais adicionais identificados durante a execução.',
  },
  {
    id: 'pagamento',
    highlight: 'Pix ou Dinheiro',
    title: 'Formas de Pagamento',
    description:
      'Pagamentos são recebidos via Pix ou dinheiro, conforme o combinado para cada serviço. Não trabalhamos com cartão.',
  },
  {
    id: 'agendamento',
    highlight: 'Planejamento prévio',
    title: 'Atendimento com Agendamento',
    description:
      'Todos os serviços são realizados mediante agendamento antecipado para garantir dedicação total à sua obra. Não realizamos atendimento emergencial ou imediato.',
  },
  {
    id: 'garantia',
    highlight: 'Acordo transparente',
    title: 'Acordo e Condições por Serviço',
    description:
      'Os prazos e condições específicas de garantia são definidos individualmente de acordo com a natureza de cada serviço e combinados diretamente com o cliente.',
  },
];

