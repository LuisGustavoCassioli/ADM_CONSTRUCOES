export type PortfolioCategory =
  | 'Todos'
  | 'Alvenaria e Construção'
  | 'Reformas Residenciais'
  | 'Pisos e Revestimentos';

export interface PortfolioItem {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, 'Todos'>;
  location: string;
  /**
   * Caminho da foto real em `public/assets/portfolio/`.
   * Enquanto `imageUrl` estiver vazio, exibe indicação transparente de foto em atualização.
   */
  imageUrl?: string;
  imageAlt: string;
}

export const portfolioCategories: PortfolioCategory[] = [
  'Todos',
  'Reformas Residenciais',
  'Pisos e Revestimentos',
  'Alvenaria e Construção',
];

/**
 * Estrutura enxuta pronta para receber fotografias reais de obras executadas por Ademir.
 */
export const portfolioItems: PortfolioItem[] = [
  {
    id: 'slot-reformas',
    title: 'Reformas Residenciais e Comerciais',
    category: 'Reformas Residenciais',
    location: 'Zona Leste — São Paulo, SP',
    imageUrl: '',
    imageAlt: 'Espaço reservado para fotografia real de reformas pela ADM',
  },
  {
    id: 'slot-pisos-pintura',
    title: 'Pisos, Revestimentos e Pintura',
    category: 'Pisos e Revestimentos',
    location: 'Zona Leste — São Paulo, SP',
    imageUrl: '',
    imageAlt: 'Espaço reservado para fotografia real de pisos e pintura pela ADM',
  },
  {
    id: 'slot-alvenaria-manutencao',
    title: 'Construção, Alvenaria e Manutenção',
    category: 'Alvenaria e Construção',
    location: 'Zona Leste — São Paulo, SP',
    imageUrl: '',
    imageAlt: 'Espaço reservado para fotografia real de alvenaria e manutenção pela ADM',
  },
];
