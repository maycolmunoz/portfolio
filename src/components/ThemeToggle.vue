<script setup lang="ts">
import { IconMoon, IconSun } from '@tabler/icons-vue'
import { useTheme } from '@/composables/useTheme'

const { theme, toggle } = useTheme()
</script>

<template>
  <button
    class="btn size-10 justify-center p-0"
    @click="toggle"
    :aria-label="theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
    :title="theme === 'dark' ? 'Modo claro' : 'Modo oscuro'"
  >
    <IconMoon v-if="theme === 'dark'" class="size-5" />
    <IconSun v-else class="size-5" />
  </button>
</template>
