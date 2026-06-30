import { CategoryGrid } from '../components/CategoryGrid'
import { HeroSection } from '../components/HeroSection'
import { MediaShowcase } from '../components/MediaShowcase'
import { SEO } from '../components/SEO'
import { SearchFilterBar } from '../components/SearchFilterBar'
import { categories } from '../data/categories'
import {
  editionMedia,
  featuredMedia,
  peopleMedia,
  placesMedia,
  postcardMedia,
  videoAssets,
} from '../data/media'

export function HomePage() {
  return (
    <>
      <SEO path="/" />
      <HeroSection />
      <section className="page-band" id="categorias">
        <div className="section-heading gsap-reveal">
          <p className="eyebrow">Categorias principais</p>
          <h2>Arquivos de Leonida</h2>
        </div>
        <SearchFilterBar />
        <CategoryGrid items={categories} linked />
      </section>
      <MediaShowcase
        featured={featuredMedia}
        people={peopleMedia}
        places={placesMedia}
        postcards={postcardMedia}
        editions={editionMedia}
        videos={videoAssets}
      />
    </>
  )
}
