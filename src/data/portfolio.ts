export type PortfolioCategory =
  | 'Todos'
  | 'Alvenaria e Construção'
  | 'Reformas Residenciais'
  | 'Reformas Comerciais'
  | 'Pisos e Revestimentos'
  | 'Pintura e Acabamentos';

export interface PortfolioItem {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, 'Todos'>;
  location: string;
  description: string;
  /**
   * Caminho da foto real em `public/assets/portfolio/`.
   * Enquanto `imageUrl` estiver vazio, o card é exibido como espaço reservado transparente
   * para não utilizar imagens genéricas como se fossem obras realizadas pela ADM.
   */
  imageUrl?: string;
  imageAlt: string;
}

export const portfolioCategories: PortfolioCategory[] = [
  'Todos',
  'Alvenaria e Construção',
  'Reformas Residenciais',
  'Reformas Comerciais',
  'Pisos e Revestimentos',
  'Pintura e Acabamentos',
];

/**
 * Lista estruturada para receber as fotografias reais de obras executadas por Ademir.
 * Nenhum projeto fictício ou fotografia de banco de imagens é apresentada como obra pronta.
 */
export const portfolioItems: PortfolioItem[] = [
  {
    id: 'slot-reforma-residencial',
    title: 'Reforma Residencial e Ambientes Internos',
    category: 'Reformas Residenciais',
    location: 'Zona Leste — São Paulo, SP',
    description:
      'Espaço reservado para fotografia real de reforma residencial (cozinha, banheiro ou área externa) executada diretamente por Ademir.',
    imageUrl: '',
    imageAlt: 'Espaço reservado para fotografia real de reforma residencial executada pela ADM',
  },
  {
    id: 'slot-pisos-revestimentos',
    title: 'Assentamento de Pisos e Revestimentos',
    category: 'Pisos e Revestimentos',
    location: 'Zona Leste — São Paulo, SP',
    description:
      'Espaço reservado para fotografia real de aplicação de porcelanato, cerâmica e revestimento de parede.',
    imageUrl: '',
    imageAlt: 'Espaço reservado para fotografia real de assentamento de pisos e revestimentos pela ADM',
  },
  {
    id: 'slot-alvenaria-construcao',
    title: 'Construção, Muros e Alvenaria',
    category: 'Alvenaria e Construção',
    location: 'Zona Leste — São Paulo, SP',
    description:
      'Espaço reservado para fotografia real de serviço de alvenaria, reboco, contrapiso e estrutura.',
    imageUrl: '',
    imageAlt: 'Espaço reservado para fotografia real de construção e alvenaria pela ADM',
  },
  {
    id: 'slot-pintura-acabamento',
    title: 'Pintura e Acabamentos Finais',
    category: 'Pintura e Acabamentos',
    location: 'Zona Leste — São Paulo, SP',
    description:
      'Espaço reservado para fotografia real de pintura interna/externa e acabamentos detalhados.',
    imageUrl: '',
    imageAlt: 'Espaço reservado para fotografia real de pintura e acabamento pela ADM',
  },
  {
    id: 'slot-reforma-comercial',
    title: 'Adequação de Espaço Comercial',
    category: 'Reformas Comerciais',
    location: 'Zona Leste — São Paulo, SP',
    description:
      'Espaço reservado para fotografia real de reforma ou manutenção em loja, salão ou escritório.',
    imageUrl: '',
    imageAlt: 'Espaço reservado para fotografia real de reforma comercial pela ADM',
  },
  {
    id: 'slot-manutencao-telhado',
    title: 'Manutenção Geral e Coberturas',
    category: 'Alvenaria e Construção',
    location: 'Zona Leste — São Paulo, SP',
    description:
      'Espaço reservado para fotografia real de manutenção predial, telhados e reparos executados pela ADM.',
    imageUrl: '',
    imageAlt: 'Espaço reservado para fotografia real de manutenção e reparos pela ADM',
  },
];

