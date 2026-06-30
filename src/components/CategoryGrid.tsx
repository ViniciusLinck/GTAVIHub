import type { Category, WikiEntry } from '../types/content'
import { CategoryCard } from './CategoryCard'

type CategoryGridProps = {
  items: Array<Category | WikiEntry>
  linked?: boolean
}

export function CategoryGrid({ items, linked = false }: CategoryGridProps) {
  return (
    <div className="category-grid">
      {items.map((item) => (
        <CategoryCard
          item={item}
          key={item.id}
          path={linked && 'path' in item ? item.path : undefined}
        />
      ))}
    </div>
  )
}
