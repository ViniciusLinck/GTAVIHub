import type { MediaAsset } from '../types/content'
import { mediaUrl } from '../utils/media'

type MediaShowcaseProps = {
  featured: MediaAsset[]
  people: MediaAsset[]
  places: MediaAsset[]
  postcards: MediaAsset[]
  editions: MediaAsset[]
  videos: MediaAsset[]
}

function MediaImage({ asset, wide = false }: { asset: MediaAsset; wide?: boolean }) {
  return (
    <figure className={wide ? 'media-tile wide' : 'media-tile'}>
      <img src={mediaUrl(asset.src)} alt={asset.title} loading="lazy" decoding="async" />
      <figcaption>
        <span>{asset.collection}</span>
        <strong>{asset.title}</strong>
      </figcaption>
    </figure>
  )
}

function MediaLane({ title, items }: { title: string; items: MediaAsset[] }) {
  if (items.length === 0) {
    return null
  }

  return (
    <section className="media-section gsap-reveal">
      <div className="section-heading compact">
        <p className="eyebrow">{title}</p>
      </div>
      <div className="media-lane">
        {items.map((asset) => (
          <MediaImage asset={asset} key={asset.id} />
        ))}
      </div>
    </section>
  )
}

export function MediaShowcase({
  featured,
  people,
  places,
  postcards,
  editions,
  videos,
}: MediaShowcaseProps) {
  return (
    <section className="media-archive" id="media">
      <div className="section-heading wide gsap-reveal">
        <p className="eyebrow">Arquivo visual</p>
        <h2>Media wall de Leonida</h2>
        <p>
          Screenshots, artes, personagens, lugares, postcards e clips curtos já
          conectados ao frontend.
        </p>
      </div>

      <div className="featured-media-grid gsap-reveal">
        {featured.slice(0, 8).map((asset, index) => (
          <MediaImage asset={asset} key={asset.id} wide={index === 0 || index === 5} />
        ))}
      </div>

      {videos.length > 0 ? (
        <section className="video-section gsap-reveal">
          <div className="section-heading compact">
            <p className="eyebrow">Vídeos</p>
          </div>
          <div className="video-grid">
            {videos.map((asset) => (
              <article className="video-card" key={asset.id}>
                <video src={mediaUrl(asset.src)} controls preload="metadata" playsInline />
                <div>
                  <span>{asset.collection}</span>
                  <strong>{asset.title}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <MediaLane title="Pessoas" items={people} />
      <MediaLane title="Lugares" items={places} />
      <MediaLane title="Postcards" items={postcards} />
      <MediaLane title="Extras" items={editions} />
      <MediaLane title="Mais imagens" items={featured.slice(8)} />
    </section>
  )
}
