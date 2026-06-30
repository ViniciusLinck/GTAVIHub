import { wikiEntries } from '../data/wiki'
import { WikiListPage } from './WikiListPage'

export function MissionsPage() {
  return (
    <WikiListPage
      eyebrow="Missões"
      title="Campanha, objetivos e recompensas"
      description="Estrutura preparada para registrar missões principais, atividades e rotas de progresso."
      entries={wikiEntries.missoes}
      canonicalPath="/missoes"
      seoTitle="Missões de GTA VI"
    />
  )
}
