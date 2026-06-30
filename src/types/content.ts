export type CategoryId =
  | 'personagens'
  | 'missoes'
  | 'locais'
  | 'veiculos'
  | 'easter-eggs'
  | 'farm'
  | 'dicas'

export type AccentTone = 'pink' | 'violet' | 'orange' | 'blue' | 'teal'

export interface Category {
  id: CategoryId
  title: string
  description: string
  path: string
  accent: AccentTone
  stat: string
  mediaPath?: string
}

export interface WikiEntry {
  id: string
  title: string
  eyebrow: string
  description: string
  tags: string[]
  accent: AccentTone
  mediaPath?: string
}
