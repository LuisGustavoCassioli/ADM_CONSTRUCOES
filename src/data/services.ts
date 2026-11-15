export type ServiceIconType =
  | 'masonry'
  | 'painting'
  | 'electrical'
  | 'plumbing'
  | 'flooring'
  | 'roofing'
  | 'finishing'
  | 'residential'
  | 'commercial'
  | 'maintenance';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ServiceIconType;
  /** Nota de transparência quando o escopo depende de avaliação prévia do serviço */
  scopeNote?: string;
  /** Permite ativar/desativar rapidamente uma categoria após confirmação com Ademir */
  enabled: boolean;
}

/**
 * Categorias de serviços da ADM Construções e Reformas em Geral.
 * Descrições diretas e realistas, sem prometer certificações ou serviços regulamentados fora do escopo confirmado.
 */
export const servicesData: ServiceItem[] = [
  {
    id: 'construcao-alvenaria',
    title: 'Construção e Alvenaria',
    description:
      'Levantamento de paredes, muros, divisórias, contrapisos, reboco e estruturas de alvenaria para ampliações ou novas construções.',
    icon: 'masonry',
    enabled: true,
  },
  {
    id: 'reformas-residenciais',
    title: 'Reformas Residenciais',
    description:
      'Renovação de casas e apartamentos na Zona Leste, incluindo reforma de cozinhas, banheiros, áreas externas, lavanderias e quartos.',
    icon: 'residential',
    enabled: true,
  },
  {
    id: 'reformas-comerciais',
    title: 'Reformas Comerciais',
    description:
      'Adequação e melhoria de lojas, salões, escritórios e pontos comerciais, com foco em organização e cumprimento do combinado.',
    icon: 'commercial',
    enabled: true,
  },
  {
    id: 'pisos-revestimentos',
    title: 'Pisos e Revestimentos',
    description:
      'Assentamento de pisos cerâmicos, porcelanatos, azulejos e revestimentos de parede com nivelamento e acabamento caprichado.',
    icon: 'flooring',
    enabled: true,
  },
  {
    id: 'pintura',
    title: 'Pintura',
    description:
      'Preparação de superfície, aplicação de massa, lixamento e pintura interna ou externa para renovar e proteger seu imóvel.',
    icon: 'painting',
    enabled: true,
  },
  {
    id: 'acabamentos',
    title: 'Acabamentos',
    description:
      'Instalação de rodapés, soleiras, peitoris, rejuntamento, regularização de superfícies e detalhes finais de obra.',
    icon: 'finishing',
    enabled: true,
  },
  {
    id: 'telhados',
    title: 'Telhados',
    description:
      'Manutenção de telhados, troca de telhas quebradas, revisão de calhas e rufos e pequenos reparos em coberturas.',
    icon: 'roofing',
    scopeNote: 'Sujeito à avaliação prévia do local e das condições da cobertura.',
    enabled: true,
  },
  {
    id: 'hidraulica',
    title: 'Hidráulica',
    description:
      'Serviços hidráulicos em reformas, troca de registros, torneiras, sifões, pontos de água e esgoto e reparos de vazamentos.',
    icon: 'plumbing',
    scopeNote: 'Escopo confirmado mediante avaliação técnica da necessidade.',
    enabled: true,
  },
  {
    id: 'eletrica',
    title: 'Elétrica',
    description:
      'Substituição e instalação de tomadas, interruptores, luminárias, chuveiros e adequações de pontos elétricos em reformas.',
    icon: 'electrical',
    scopeNote: 'Escopo confirmado conforme análise da instalação local.',
    enabled: true,
  },
  {
    id: 'manutencao-reparos',
    title: 'Manutenção e Reparos em Geral',
    description:
      'Pequenos reparos prediais, correção de trincas superficiais, ajustes em portas e janelas, fixações e conservação de imóveis.',
    icon: 'maintenance',
    enabled: true,
  },
];

