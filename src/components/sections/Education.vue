<script setup lang="ts">
import { education } from '@/utils/data'
</script>

<template>
  <div class="space-y-8 md:space-y-12">
    <div
      v-for="(item, index) in education"
      :key="index"
      class="relative pl-6 md:pl-8 border-l-4 border-border"
    >
      <div class="absolute -left-2 top-0 size-4 bg-indigo-500 border-2 border-border" />

      <div class="space-y-3">
        <h3 class="text-lg md:text-xl font-black uppercase tracking-tighter">
          {{ item.title }}
        </h3>

        <p class="text-xs md:text-sm leading-relaxed text-foreground max-w-2xl">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
