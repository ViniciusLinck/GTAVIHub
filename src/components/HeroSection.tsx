import { heroVideo } from '../data/media'
import { mediaUrl } from '../utils/media'

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content gsap-hero">
        <p className="eyebrow">Wiki temática / fan site</p>
        <h1>GTA VI Hub</h1>
        <p className="hero-copy">
          Central para personagens, missões, locais, veículos, easter eggs e guias
          prontos para crescer com a comunidade.
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="#categorias">
            Explorar categorias
          </a>
          <a className="ghost-action" href="/personagens">
            Ver personagens
          </a>
        </div>
      </div>

      <div className="hero-visual gsap-hero gsap-parallax" aria-label="GTA VI Hub media hero">
        {heroVideo ? (
          <video
            className="hero-video"
            src={mediaUrl(heroVideo.src)}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : null}
        <div className="sun-disc" />
        <div className="skyline">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="hero-caption">
          <strong>Leonida Files</strong>
          <span>imagens e clips oficiais no arquivo</span>
        </div>
      </div>
    </section>
  )
}
