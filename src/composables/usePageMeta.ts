import { useHead } from '@unhead/vue'

const SITE_URL = 'https://mmunoz.netlify.app/'

export function usePageMeta(
  title: string,
  description: string,
  options?: { path?: string; image?: string },
) {
  const url = options?.path ? `${SITE_URL}${options.path}` : SITE_URL
  const image = options?.image ?? 'https://github.com/maycolmunoz.png?size=400'
  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
    ...(options?.path ? { link: [{ rel: 'canonical', href: url }] } : {}),
  })
}
