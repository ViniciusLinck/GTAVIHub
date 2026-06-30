import { wikiEntries } from '../data/wiki'
import { WikiListPage } from './WikiListPage'

export function TipsPage() {
  return (
    <WikiListPage
      eyebrow="Dicas gerais"
      title="Primeiros passos e boas práticas"
      description="Base para dicas de exploração, direção, combate, navegação e organização de progresso."
      entries={wikiEntries.dicas}
      canonicalPath="/dicas"
      seoTitle="Dicas gerais de GTA VI"
    />
  )
}
