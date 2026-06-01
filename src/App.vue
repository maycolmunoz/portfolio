<script setup lang="ts">
import { RouterView } from 'vue-router'
import ThemeToggle from '@/components/ThemeToggle.vue'
</script>

<template>
  <div class="overflow-x-hidden">
    <main class="min-h-screen relative">
      <RouterView />
    </main>
    <div
      class="fixed top-4 right-[60px] z-[10001] bg-card border-2 border-dashed border-border rounded-[16px] shadow-sm w-10 h-10 flex items-center justify-center"
    >
      <ThemeToggle />
    </div>
  </div>
</template>
