import { ref } from 'vue'

function getInitialTheme(): boolean {
  if (typeof localStorage !== 'undefined') {
    try {
      const stored = localStorage.getItem('theme')
      if (stored) return stored === 'dark'
    } catch {}
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

const isDark = ref(getInitialTheme())

export function useTheme() {
  function toggle() {
    const next = !isDark.value
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {}
    isDark.value = next
  }

  return { isDark, toggle }
}
