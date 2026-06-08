export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  tags: string[]
  excerpt: string
}

const rawModules = import.meta.glob('../content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

export const blogPosts: BlogPostMeta[] = [
  {
    slug: 'multiples-cuentas-github-ssh',
    title: 'Múltiples cuentas de GitHub con SSH (Linux)',
    date: '2026-04-20',
    tags: ['GitHub', 'SSH', 'Linux', 'Git'],
    excerpt:
      'Configurar múltiples cuentas de GitHub mediante SSH para separar entornos personales y profesionales desde la misma máquina.',
  },
  {
    slug: 'solucion-dns-sitios-no-cargan',
    title: 'Solución DNS: sitios que no cargan',
    date: '2026-06-08',
    tags: ['DNS', 'Redes', 'Privacidad', 'Navegadores'],
    excerpt:
      'Guía para solucionar errores de resolución DNS como DNS_PROBE_POSSIBLE activando DNS-over-HTTPS en Firefox, Chrome, Chromium y Brave.',
  },
]

export function getPost(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getPostContent(slug: string): string | null {
  const key = Object.keys(rawModules).find((k) => k.includes(`/${slug}.md`))
  return key ? (rawModules[key] ?? null) : null
}
