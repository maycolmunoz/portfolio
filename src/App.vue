<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="noise scanlines overflow-x-hidden">
    <main class="min-h-screen bg-background relative">
      <div class="fixed inset-0 pointer-events-none select-none overflow-hidden z-0">
        <div
          class="absolute top-[-5%] left-[-5%] font-display text-[25vw] leading-none font-black text-transparent stroke-text-muted opacity-10"
        >
          MAYCOL
        </div>
        <div
          class="absolute bottom-[5%] right-[-10%] font-display text-[20vw] leading-none font-black text-transparent stroke-text-muted opacity-10 rotate-12"
        >
          MUÑOZ
        </div>
        <div
          class="absolute top-[40%] left-[50%] -translate-x-1/2 font-display text-[15vw] leading-none font-black text-accent opacity-[0.03]"
        >
          FULLSTACK
        </div>
      </div>

      <RouterView />
    </main>
  </div>
</template>
