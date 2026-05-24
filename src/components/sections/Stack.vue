<script setup lang="ts">
import { categorizedStack } from '@/utils/data'
</script>

<template>
  <div class="p-5 md:p-6 bg-secondary">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      <div v-for="category in categorizedStack" :key="category.title" v-reveal class="space-y-4">
        <h3
          class="font-display text-lg md:text-xl font-black uppercase tracking-tighter border-b-4 border-border pb-2 relative z-10"
        >
          {{ category.title }}
        </h3>

        <div class="flex flex-wrap gap-2 relative z-10">
          <div
            v-for="tech in category.items"
            :key="tech.name"
            class="flex items-center gap-2 px-3 py-2 border-2 border-border text-foreground font-bold text-xs md:text-sm uppercase transition-none cursor-default"
            :class="tech.color"
          >
            <component :is="tech.icon" class="size-4" stroke-width="2" />
            <span>{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
