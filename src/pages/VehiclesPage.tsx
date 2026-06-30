import { wikiEntries } from '../data/wiki'
import { WikiListPage } from './WikiListPage'

export function VehiclesPage() {
  return (
    <WikiListPage
      eyebrow="Veículos"
      title="Garagem, performance e mobilidade"
      description="Categorias iniciais para comparar carros, barcos, motos e veículos off-road."
      entries={wikiEntries.veiculos}
      canonicalPath="/veiculos"
      seoTitle="Veículos de GTA VI"
    />
  )
}
