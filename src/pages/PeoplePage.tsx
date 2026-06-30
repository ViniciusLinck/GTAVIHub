import { wikiEntries } from '../data/wiki'
import { WikiListPage } from './WikiListPage'

export function PeoplePage() {
  return (
    <WikiListPage
      eyebrow="Personagens"
      title="Elenco, contatos e relações"
      description="Base para reunir perfis, conexões narrativas e atualizações confirmadas."
      entries={wikiEntries.personagens}
      canonicalPath="/personagens"
      seoTitle="Personagens de GTA VI"
    />
  )
}
