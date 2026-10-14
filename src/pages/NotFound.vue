<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { usePageMeta } from '@/composables/usePageMeta'

usePageMeta('404 | portafolio | mmunoz', 'Página no encontrada', { path: '404' })
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
    <div class="py-20">
      <h1 class="font-display text-6xl md:text-8xl leading-[0.75] mb-4">404</h1>
      <p class="font-display text-2xl md:text-3xl mb-4">Página no encontrada</p>
      <p class="text-carbon/70 mb-8 max-w-md mx-auto">
        La página que buscas no existe o fue movida.
      </p>
      <RouterLink to="/" class="btn">Volver al inicio</RouterLink>
    </div>
  </div>
</template>
