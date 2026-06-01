<script setup lang="ts">
import { IconSun, IconMoon } from '@tabler/icons-vue'
import { useTheme } from '@/composables/useTheme'

const { isDark, toggle } = useTheme()
</script>

<template>
  <button
    @click="toggle"
    class="text-primary hover:text-primary-hover transition-colors duration-200 cursor-pointer w-full h-full flex items-center justify-center"
    :title="isDark ? 'Modo claro' : 'Modo oscuro'"
    :aria-label="isDark ? 'Activar modo claro' : 'Activar modo oscuro'"
  >
    <IconSun v-if="isDark" class="size-5" />
    <IconMoon v-else class="size-5" />
  </button>
</template>
