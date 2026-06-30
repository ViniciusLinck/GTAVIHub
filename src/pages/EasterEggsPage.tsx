import { wikiEntries } from '../data/wiki'
import { WikiListPage } from './WikiListPage'

export function EasterEggsPage() {
  return (
    <WikiListPage
      eyebrow="Easter Eggs"
      title="Mistérios, referências e achados"
      description="Área dedicada a descobertas da comunidade, prints e detalhes escondidos."
      entries={wikiEntries['easter-eggs']}
      canonicalPath="/easter-eggs"
      seoTitle="Easter eggs de GTA VI"
    />
  )
}
