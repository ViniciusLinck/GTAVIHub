export function mediaUrl(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  return encodeURI(`${base}${normalizedPath}`)
}
