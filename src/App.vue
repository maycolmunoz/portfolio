<script setup lang="ts">
import { RouterView } from 'vue-router'
import ThemeToggle from '@/components/ThemeToggle.vue'
</script>

<template>
  <div class="overflow-x-hidden">
    <a
      href="#main-content"
      class="fixed -top-40 left-4 z-[10002] bg-primary text-white px-4 py-2 rounded-[16px] font-body font-bold transition-all duration-200 focus:top-4"
    >
      Saltar al contenido
    </a>
    <main id="main-content" class="min-h-screen relative">
      <RouterView />
    </main>
    <div
      class="fixed top-4 right-[60px] z-[10001] bg-card border-2 border-dashed border-border rounded-[16px] shadow-sm w-10 h-10 flex items-center justify-center"
    >
      <ThemeToggle />
    </div>
  </div>
</template>
