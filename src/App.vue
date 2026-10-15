<script setup lang="ts">
import { RouterView } from 'vue-router'
import ThemeToggle from '@/components/ThemeToggle.vue'
</script>

<template>
  <div class="overflow-x-hidden">
    <main class="min-h-screen relative">
      <RouterView v-slot="{ Component }">
        <KeepAlive include="home" max="2">
          <component :is="Component" />
        </KeepAlive>
      </RouterView>
    </main>
    <ThemeToggle class="fixed top-16 right-4 z-[10000]" />
  </div>
</template>
