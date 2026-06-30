# GTA VI Hub

Fan site/wiki frontend sobre GTA VI, criado com React, TypeScript, Vite e CSS.

## Stack

- React
- TypeScript
- Vite
- React Router
- CSS modularizado por pastas

## Estrutura

- `src/components`: componentes reutilizáveis
- `src/pages`: páginas roteadas
- `src/layouts`: layout principal
- `src/data`: dados mockados
- `src/types`: tipos compartilhados
- `src/styles`: design system e CSS global
- `src/assets`: assets internos
- `public/media`: imagens, vídeos e prints adicionados manualmente

## Scripts

Use `npm.cmd` no PowerShell desta máquina.

```bash
npm.cmd install
npm.cmd run dev
npm.cmd run build
```

## SEO

O domínio canônico temporário está como `https://viniciuslinck.github.io/GTAVIHub` em `index.html`, `robots.txt`, `sitemap.xml` e no fallback de `src/config/site.ts`.

Quando definir o domínio real, atualize esses arquivos e/ou use `VITE_SITE_URL` no ambiente de build.

## Notas

- Não há backend nesta fase.
- A estética é inspirada em landing pages de games e na direção visual pública do site oficial de GTA VI, sem uso de imagens protegidas.
