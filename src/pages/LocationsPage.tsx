import { wikiEntries } from '../data/wiki'
import { WikiListPage } from './WikiListPage'

export function LocationsPage() {
  return (
    <WikiListPage
      eyebrow="Locais"
      title="Mapa, regiões e pontos de interesse"
      description="Arquivos para organizar áreas urbanas, costa, interior e lugares importantes de Leonida."
      entries={wikiEntries.locais}
      canonicalPath="/locais"
      seoTitle="Locais e mapa de GTA VI"
    />
  )
}
