import { CategoryGrid } from '../components/CategoryGrid'
import { SEO } from '../components/SEO'
import { SearchFilterBar } from '../components/SearchFilterBar'
import type { WikiEntry } from '../types/content'

type WikiListPageProps = {
  eyebrow: string
  title: string
  description: string
  entries: WikiEntry[]
  canonicalPath: string
  seoTitle?: string
}

export function WikiListPage({
  eyebrow,
  title,
  description,
  entries,
  canonicalPath,
  seoTitle,
}: WikiListPageProps) {
  return (
    <section className="page-band page-hero">
      <SEO title={seoTitle ?? title} description={description} path={canonicalPath} />
      <div className="section-heading wide">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <SearchFilterBar />
      <CategoryGrid items={entries} />
    </section>
  )
}
