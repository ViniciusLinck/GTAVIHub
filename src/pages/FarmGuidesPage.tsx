import { wikiEntries } from '../data/wiki'
import { WikiListPage } from './WikiListPage'

export function FarmGuidesPage() {
  return (
    <WikiListPage
      eyebrow="Guias de farm"
      title="Dinheiro, rotinas e progresso"
      description="Área preparada para métodos de dinheiro, atividades lucrativas e prioridades de evolução."
      entries={wikiEntries.farm}
      canonicalPath="/guias-farm"
      seoTitle="Guias de farm e dinheiro em GTA VI"
    />
  )
}
