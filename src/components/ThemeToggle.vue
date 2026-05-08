<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  storageKey: 'theme',
})
const toggleTheme = useToggle(isDark)
</script>

<template>
  <button
    @click="toggleTheme()"
    class="fixed top-4 right-4 z-50 border-4 border-border bg-background text-foreground px-4 py-2 text-xs font-black uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors duration-100 cursor-pointer"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    {{ isDark ? 'LIGHT' : 'DARK' }}
  </button>
</template>
