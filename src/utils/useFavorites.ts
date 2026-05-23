import { ref } from 'vue'

const FAVORITES_KEY = 'awesome-resources-favorites'

const favoriteUrls = ref<string[]>([])

function loadFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY)
    if (!raw) return
    favoriteUrls.value = JSON.parse(raw)
  } catch {}
}

function saveFavorites() {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoriteUrls.value))
  } catch {}
}

loadFavorites()

export function useFavorites() {
  function toggle(url: string) {
    const idx = favoriteUrls.value.indexOf(url)
    if (idx === -1) {
      favoriteUrls.value.push(url)
    } else {
      favoriteUrls.value.splice(idx, 1)
    }
    saveFavorites()
  }

  function isFavorite(url: string) {
    return favoriteUrls.value.includes(url)
  }

  return { favoriteUrls, toggle, isFavorite }
}
