export const siteConfig = {
  name: 'GTA VI Hub',
  shortName: 'GTAVIHub',
  defaultTitle: 'GTA VI Hub | Wiki, guias e informações para jogadores',
  defaultDescription:
    'Wiki temática e fan site sobre GTA VI com personagens, missões, locais, veículos, easter eggs, guias de dinheiro e dicas para jogadores.',
  siteUrl:
    import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') ??
    'https://viniciuslinck.github.io/GTAVIHub',
  locale: 'pt_BR',
  language: 'pt-BR',
  themeColor: '#050508',
  ogImage: '/og-cover.svg',
  keywords: [
    'GTA VI',
    'GTA 6',
    'GTA VI wiki',
    'GTA VI guia',
    'GTA VI personagens',
    'GTA VI missões',
    'GTA VI veículos',
    'GTA VI easter eggs',
    'Leonida',
    'Vice City',
  ],
}
