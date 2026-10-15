import { ref, onMounted } from 'vue'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'portfolio-theme'

export function useTheme() {
  const theme = ref<Theme>('light')

  const apply = (t: Theme) => {
    document.documentElement.classList.toggle('dark', t === 'dark')
  }

  const toggle = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    apply(theme.value)
    localStorage.setItem(STORAGE_KEY, theme.value)
  }

  onMounted(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'dark' || saved === 'light') {
      theme.value = saved
    } else {
      theme.value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    apply(theme.value)
  })

  return { theme, toggle }
}
