<script setup lang="ts">
import { categorizedStack } from '@/content/portfolio'
</script>

<template>
  <div class="p-5 md:p-6 bg-card rounded-[24px] shadow-sm border-2 border-dashed border-border">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      <div v-for="category in categorizedStack" :key="category.title" v-reveal class="space-y-3">
        <h3
          class="font-display text-xl md:text-2xl border-b border-dashed border-border pb-2 flex items-center gap-3"
        >
          <span class="w-4 h-4 bg-primary rounded shrink-0" />
          {{ category.title }}
        </h3>

        <div class="flex flex-wrap gap-2">
          <div
            v-for="tech in category.items"
            :key="tech.name"
            class="flex items-center gap-2 px-3.5 py-1.5 bg-primary/20 text-primary border border-primary/40 rounded-full text-sm transition-colors duration-200"
          >
            <component :is="tech.icon" class="size-4" stroke-width="2" />
            <span>{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
