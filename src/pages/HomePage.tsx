import { CategoryGrid } from '../components/CategoryGrid'
import { HeroSection } from '../components/HeroSection'
import { SEO } from '../components/SEO'
import { SearchFilterBar } from '../components/SearchFilterBar'
import { categories } from '../data/categories'

export function HomePage() {
  return (
    <>
      <SEO path="/" />
      <HeroSection />
      <section className="page-band" id="categorias">
        <div className="section-heading">
          <p className="eyebrow">Categorias principais</p>
          <h2>Arquivos de Leonida</h2>
        </div>
        <SearchFilterBar />
        <CategoryGrid items={categories} linked />
      </section>
    </>
  )
}
