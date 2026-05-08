<script setup lang="ts">
import { categorizedStack } from '@/utils/data'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
    <div v-for="category in categorizedStack" :key="category.title" class="space-y-4">
      <h3
        class="text-base md:text-lg font-black uppercase tracking-tighter border-b-4 border-border pb-2"
      >
        {{ category.title }}
      </h3>
      <div class="flex flex-wrap gap-2">
        <div
          v-for="tech in category.items"
          :key="tech.name"
          class="flex items-center gap-2 px-3 py-2 border-2 border-border text-foreground font-bold text-xs md:text-sm uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-100"
        >
          <component :is="tech.icon" class="size-4" stroke-width="2" />
          <span>{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
