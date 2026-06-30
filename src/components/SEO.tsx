import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { siteConfig } from '../config/site'

type SEOProps = {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  noIndex?: boolean
  keywords?: string[]
}

export function SEO({
  title = siteConfig.defaultTitle,
  description = siteConfig.defaultDescription,
  path,
  image = siteConfig.ogImage,
  type = 'website',
  noIndex = false,
  keywords = siteConfig.keywords,
}: SEOProps) {
  const location = useLocation()
  const canonicalPath = path ?? location.pathname
  const canonicalUrl = `${siteConfig.siteUrl}${canonicalPath === '/' ? '' : canonicalPath}`
  const imageUrl = image.startsWith('http') ? image : `${siteConfig.siteUrl}${image}`
  const pageTitle = title === siteConfig.name || title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': canonicalPath === '/' ? 'WebSite' : 'CollectionPage',
    name: pageTitle,
    description,
    url: canonicalUrl,
    inLanguage: siteConfig.language,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    potentialAction:
      canonicalPath === '/'
        ? {
            '@type': 'SearchAction',
            target: `${siteConfig.siteUrl}/?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          }
        : undefined,
  }

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="googlebot" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={`${siteConfig.name} - ${description}`} />
      <meta property="og:locale" content={siteConfig.locale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  )
}
