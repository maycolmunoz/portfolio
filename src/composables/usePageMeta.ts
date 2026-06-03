import { onMounted } from 'vue'

export function usePageMeta(title: string, description: string) {
  onMounted(() => {
    document.title = title

    const metaEl = document.querySelector('meta[name="description"]')
    if (metaEl) metaEl.setAttribute('content', description)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title)

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', description)
  })
}
