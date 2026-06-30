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
    },
    {
      id: 'jason',
      title: 'Jason',
      eyebrow: 'Protagonista',
      description:
        'Base para organizar teorias, participação em missões e conexões com outros personagens.',
      tags: ['campanha', 'dupla', 'crime'],
      accent: 'blue',
    },
    {
      id: 'aliados',
      title: 'Aliados e contatos',
      eyebrow: 'Rede',
      description:
        'Espaço para contatos, parceiros de golpes e figuras recorrentes reveladas futuramente.',
      tags: ['contatos', 'historia', 'faccoes'],
      accent: 'violet',
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
    },
    {
      id: 'atividades',
      title: 'Atividades paralelas',
      eyebrow: 'Mundo aberto',
      description:
        'Área para eventos opcionais, encontros aleatórios e tarefas de exploração.',
      tags: ['opcional', 'exploracao', 'rotina'],
      accent: 'teal',
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
    },
    {
      id: 'leonida-keys',
      title: 'Leonida Keys',
      eyebrow: 'Costa tropical',
      description:
        'Referência para ilhas, estradas costeiras, água aberta e rotas turísticas.',
      tags: ['ilhas', 'barcos', 'exploracao'],
      accent: 'teal',
    },
    {
      id: 'wetlands',
      title: 'Áreas pantanosas',
      eyebrow: 'Interior',
      description:
        'Local para registrar fauna, trilhas, estradas secundárias e oportunidades fora da cidade.',
      tags: ['interior', 'off-road', 'mapa'],
      accent: 'orange',
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
    },
    {
      id: 'boats',
      title: 'Barcos e jet skis',
      eyebrow: 'Água',
      description:
        'Catálogo para veículos aquáticos, rotas e usos em missões costeiras.',
      tags: ['agua', 'costa', 'mobilidade'],
      accent: 'teal',
    },
    {
      id: 'off-road',
      title: 'Off-road',
      eyebrow: 'Terreno',
      description:
        'Espaço para SUVs, pickups, motos de trilha e veículos para áreas rurais.',
      tags: ['trilha', 'interior', 'resistencia'],
      accent: 'orange',
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
    },
    {
      id: 'locais-secretos',
      title: 'Locais secretos',
      eyebrow: 'Exploração',
      description:
        'Pontos escondidos, salas, mensagens e descobertas que merecem verificação.',
      tags: ['mapa', 'segredos', 'prints'],
      accent: 'pink',
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
    },
  ],
}
