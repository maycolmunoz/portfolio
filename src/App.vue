<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="overflow-x-hidden">
    <a href="#main-content" class="fixed -top-40 left-4 z-[10002] btn focus:top-4">
      Saltar al contenido
    </a>
    <main id="main-content" class="min-h-screen relative">
      <RouterView v-slot="{ Component }">
        <KeepAlive include="home" max="2">
          <component :is="Component" />
        </KeepAlive>
      </RouterView>
    </main>
  </div>
</template>
