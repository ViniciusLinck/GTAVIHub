export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
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

      <div className="hero-visual" aria-label="Placeholder visual GTA VI Hub">
        <div className="sun-disc" />
        <div className="skyline">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="hero-caption">
          <strong>Leonida Files</strong>
          <span>media em /public/media</span>
        </div>
      </div>
    </section>
  )
}
