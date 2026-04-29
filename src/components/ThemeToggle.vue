<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})
</script>

<template>
  <button
    @click="toggleTheme"
    class="fixed top-4 right-4 z-50 border-2 border-border bg-background text-foreground px-3 py-1.5 text-xs font-black uppercase tracking-wider hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-100"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    {{ isDark ? 'LIGHT' : 'DARK' }}
  </button>
</template>
