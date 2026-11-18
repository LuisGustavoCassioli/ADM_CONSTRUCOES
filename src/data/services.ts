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
  /** Permite ativar/desativar rapidamente uma categoria após confirmação com Ademir */
  enabled: boolean;
}

/**
 * Categorias principais de serviços da ADM Construções e Reformas em Geral.
 * Descrições objetivas e diretas, sem promessas ou qualificações não confirmadas.
 */
export const servicesData: ServiceItem[] = [
  {
    id: 'construcao-alvenaria',
    title: 'Construção e Alvenaria',
    description:
      'Paredes, muros, contrapisos, reboco e estruturas para construções e ampliações.',
    icon: 'masonry',
    enabled: true,
  },
  {
    id: 'reformas-gerais',
    title: 'Reformas Residenciais e Comerciais',
    description:
      'Renovação de casas, apartamentos, lojas e escritórios na Zona Leste.',
    icon: 'residential',
    enabled: true,
  },
  {
    id: 'pisos-acabamentos',
    title: 'Pisos, Revestimentos e Acabamentos',
    description:
      'Assentamento de porcelanatos, cerâmicas, azulejos, rodapés, soleiras e rejuntes.',
    icon: 'flooring',
    enabled: true,
  },
  {
    id: 'pintura',
    title: 'Pintura Interna e Externa',
    description:
      'Preparação de parede, aplicação de massa, lixamento e pintura completa.',
    icon: 'painting',
    enabled: true,
  },
  {
    id: 'telhados',
    title: 'Telhados e Coberturas',
    description:
      'Manutenção de telhados, troca de telhas, calhas, rufos e reparos.',
    icon: 'roofing',
    enabled: true,
  },
  {
    id: 'eletrica-hidraulica-reparos',
    title: 'Elétrica, Hidráulica e Reparos',
    description:
      'Pontos elétricos, tomadas, registros, torneiras, vazamentos e manutenção geral.',
    icon: 'maintenance',
    enabled: true,
  },
];
