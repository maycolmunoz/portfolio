<script setup lang="ts">
import { categorizedStack } from '@/content/portfolio'
import { categoryBadges } from '@/lib/stickers'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
    <div
      v-for="(category, categoryIndex) in categorizedStack"
      :key="category.title"
      class="space-y-4"
    >
      <h3
        class="font-display text-2xl md:text-3xl border-b-2 border-carbon pb-2 flex items-center gap-3"
      >
        <span
          class="sticker size-7 grid place-items-center shrink-0 font-mono text-xs font-bold"
          :class="categoryBadges[categoryIndex % categoryBadges.length]"
          aria-hidden="true"
        >
          {{ String(categoryIndex + 1).padStart(2, '0') }}
        </span>
        {{ category.title }}
      </h3>

      <div class="flex flex-wrap gap-2">
        <div
          v-for="tech in category.items"
          :key="tech.name"
          class="pill bg-paper-white text-carbon hover:bg-carbon hover:text-paper-white"
        >
          <component :is="tech.icon" class="size-4" stroke-width="2" />
          <span>{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
