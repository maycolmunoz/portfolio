<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { usePageMeta } from '@/composables/usePageMeta'

usePageMeta('404 | portafolio | mmunoz', 'Página no encontrada')
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 xl:px-0 py-8 text-center">
    <div class="py-20">
      <h1 class="font-display text-6xl md:text-8xl text-primary mb-4">404</h1>
      <p class="font-display text-2xl md:text-3xl text-text mb-4">Página no encontrada</p>
      <p class="font-body text-text-secondary mb-8 max-w-md mx-auto">
        La página que buscas no existe o fue movida.
      </p>
      <RouterLink
        to="/"
        class="inline-flex items-center gap-2 font-body text-primary border-2 border-dashed border-primary rounded-[16px] px-6 py-2 hover:bg-primary/10 transition-colors duration-200"
      >
        Volver al inicio
      </RouterLink>
    </div>
  </div>
</template>
