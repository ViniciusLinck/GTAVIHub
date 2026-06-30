import type { CategoryId, WikiEntry } from '../types/content'

export const wikiEntries: Record<CategoryId, WikiEntry[]> = {
  personagens: [
    {
      id: 'lucia',
      title: 'Lucia',
      eyebrow: 'Protagonista',
      description:
        'Perfil inicial reservado para informações de história, aparência, relações e momentos importantes.',
      tags: ['campanha', 'dupla', 'leonida'],
      accent: 'pink',
      mediaPath: '/media/images/People/Lucia Caminos/Lucia_Caminos_01.jpg',
    },
    {
      id: 'jason',
      title: 'Jason',
      eyebrow: 'Protagonista',
      description:
        'Base para organizar teorias, participação em missões e conexões com outros personagens.',
      tags: ['campanha', 'dupla', 'crime'],
      accent: 'blue',
      mediaPath: '/media/images/People/Jason Duval/Jason_Duval_01.jpg',
    },
    {
      id: 'boobie-ike',
      title: 'Boobie Ike',
      eyebrow: 'Empresário',
      description:
        'Arquivo visual e biográfico para conexões de negócios, cenas e contatos no submundo.',
      tags: ['contatos', 'negocios', 'vice city'],
      accent: 'violet',
      mediaPath: '/media/images/People/Boobie Ike/Boobie_Ike_01.jpg',
    },
    {
      id: 'raul-bautista',
      title: 'Raul Bautista',
      eyebrow: 'Contato',
      description:
        'Base para reunir imagens, aparições e possíveis ligações com missões de alto risco.',
      tags: ['contatos', 'golpes', 'historia'],
      accent: 'orange',
      mediaPath: '/media/images/People/Raul Bautista/Raul_Bautista_01.jpg',
    },
    {
      id: 'real-dimez',
      title: 'Real Dimez',
      eyebrow: 'Cena musical',
      description:
        'Espaço para clips, referências de cultura pop, eventos e presença nas redes do jogo.',
      tags: ['musica', 'social', 'vice city'],
      accent: 'pink',
      mediaPath: '/media/images/People/Real Dimez/Real_Dimez_01.jpg',
    },
  ],
  missoes: [
    {
      id: 'golpes',
      title: 'Golpes e preparações',
      eyebrow: 'Missões principais',
      description:
        'Modelo para catalogar pré-requisitos, fases, riscos e recompensas de missões maiores.',
      tags: ['objetivos', 'recompensas', 'preparacao'],
      accent: 'orange',
      mediaPath: '/media/images/Jason_and_Lucia_02/Jason_and_Lucia_02_landscape.jpg',
    },
    {
      id: 'atividades',
      title: 'Atividades paralelas',
      eyebrow: 'Mundo aberto',
      description:
        'Área para eventos opcionais, encontros aleatórios e tarefas de exploração.',
      tags: ['opcional', 'exploracao', 'rotina'],
      accent: 'teal',
      mediaPath: '/media/images/Places/Leonida Keys/Leonida_Keys_01.jpg',
    },
  ],
  locais: [
    {
      id: 'vice-city',
      title: 'Vice City',
      eyebrow: 'Centro urbano',
      description:
        'Página base para bairros, praias, vida noturna, lojas e pontos de interesse urbanos.',
      tags: ['cidade', 'praia', 'noite'],
      accent: 'pink',
      mediaPath: '/media/images/Places/Vice City/Vice_City_02.jpg',
    },
    {
      id: 'leonida-keys',
      title: 'Leonida Keys',
      eyebrow: 'Costa tropical',
      description:
        'Referência para ilhas, estradas costeiras, água aberta e rotas turísticas.',
      tags: ['ilhas', 'barcos', 'exploracao'],
      accent: 'teal',
      mediaPath: '/media/images/Places/Leonida Keys/Leonida_Keys_02.jpg',
    },
    {
      id: 'wetlands',
      title: 'Áreas pantanosas',
      eyebrow: 'Interior',
      description:
        'Local para registrar fauna, trilhas, estradas secundárias e oportunidades fora da cidade.',
      tags: ['interior', 'off-road', 'mapa'],
      accent: 'orange',
      mediaPath: '/media/images/Places/Grassrivers/Grassrivers_01.jpg',
    },
    {
      id: 'port-gellhorn',
      title: 'Port Gellhorn',
      eyebrow: 'Costa',
      description:
        'Arquivo para áreas costeiras, hotéis, bares, ruas e possíveis atividades paralelas.',
      tags: ['costa', 'cidade', 'exploracao'],
      accent: 'blue',
      mediaPath: '/media/images/Places/Port Gellhorn/Port_Gellhorn_01.jpg',
    },
    {
      id: 'mount-kalaga',
      title: 'Mount Kalaga National Park',
      eyebrow: 'Natureza',
      description:
        'Área para trilhas, paisagens, rotas panorâmicas e exploração fora do centro urbano.',
      tags: ['natureza', 'montanha', 'off-road'],
      accent: 'teal',
      mediaPath:
        '/media/images/Places/Mount Kalaga National Park/Mount_Kalaga_National_Park_01.jpg',
    },
  ],
  veiculos: [
    {
      id: 'supercars',
      title: 'Superesportivos',
      eyebrow: 'Performance',
      description:
        'Comparativos futuros de velocidade, aceleração, controle e valor de compra.',
      tags: ['corrida', 'garagem', 'asfalto'],
      accent: 'blue',
      mediaPath: '/media/images/ULTIMATE_EDITION_GROTTI_CHEETAH_02.jpg',
    },
    {
      id: 'boats',
      title: 'Barcos e jet skis',
      eyebrow: 'Água',
      description:
        'Catálogo para veículos aquáticos, rotas e usos em missões costeiras.',
      tags: ['agua', 'costa', 'mobilidade'],
      accent: 'teal',
      mediaPath: '/media/images/ULTIMATE_EDITION_SQUALO_01.jpg',
    },
    {
      id: 'off-road',
      title: 'Off-road',
      eyebrow: 'Terreno',
      description:
        'Espaço para SUVs, pickups, motos de trilha e veículos para áreas rurais.',
      tags: ['trilha', 'interior', 'resistencia'],
      accent: 'orange',
      mediaPath: '/media/images/ULTIMATE_EDITION_VAPID_BUGGY_01.jpg',
    },
  ],
  'easter-eggs': [
    {
      id: 'referencias',
      title: 'Referências culturais',
      eyebrow: 'Detalhes',
      description:
        'Lista inicial para sátiras, marcas fictícias, cenas curiosas e easter eggs visuais.',
      tags: ['misterios', 'referencias', 'comunidade'],
      accent: 'violet',
      mediaPath: '/media/images/Postcards/Ambrosia/Ambrosia_Postcard_landscape.jpg',
    },
    {
      id: 'locais-secretos',
      title: 'Locais secretos',
      eyebrow: 'Exploração',
      description:
        'Pontos escondidos, salas, mensagens e descobertas que merecem verificação.',
      tags: ['mapa', 'segredos', 'prints'],
      accent: 'pink',
      mediaPath: '/media/images/Postcards/Grassrivers/Grassrivers_Postcard_landscape.jpg',
    },
  ],
  farm: [
    {
      id: 'dinheiro-inicial',
      title: 'Dinheiro inicial',
      eyebrow: 'Guia',
      description:
        'Placeholder para métodos de farm, compra e venda, atividades lucrativas e prioridades.',
      tags: ['dinheiro', 'rotina', 'progresso'],
      accent: 'orange',
      mediaPath: '/media/images/ULTIMATE_EDITION_STOCK_305_01.jpg',
    },
  ],
  dicas: [
    {
      id: 'primeiros-passos',
      title: 'Primeiros passos',
      eyebrow: 'Guia rápido',
      description:
        'Base para dicas de exploração, navegação, combate, direção e organização de progresso.',
      tags: ['iniciante', 'exploracao', 'qualidade'],
      accent: 'blue',
      mediaPath: '/media/images/VINTAGE_VICE_CITY_PACK_01.jpg',
    },
  ],
}
