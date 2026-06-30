import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import type { Category, WikiEntry } from '../types/content'
import { mediaUrl } from '../utils/media'

type CategoryCardProps = {
  item: Category | WikiEntry
  path?: string
}

export function CategoryCard({ item, path }: CategoryCardProps) {
  const mediaStyle = item.mediaPath
    ? ({
        backgroundImage: `linear-gradient(180deg, transparent, rgba(5, 5, 8, 0.78)), url(${mediaUrl(item.mediaPath)})`,
      } as CSSProperties)
    : undefined

  const card = (
    <article className={`content-card gsap-reveal tone-${item.accent}`}>
      <div className="card-media" style={mediaStyle} aria-hidden="true">
        <div className="media-grid" />
      </div>
      <div className="card-body">
        <span className="card-kicker">
          {'eyebrow' in item ? item.eyebrow : item.stat}
        </span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        {'tags' in item ? (
          <div className="tag-row">
            {item.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  )

  if (!path) {
    return card
  }

  return (
    <Link className="card-link" to={path}>
      {card}
    </Link>
  )
}
