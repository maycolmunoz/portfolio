<script setup lang="ts">
import { education } from '@/content/portfolio'
</script>

<template>
  <div class="space-y-6">
    <div
      v-for="(item, index) in education"
      :key="index"
      v-reveal
      class="bg-card rounded-[24px] shadow-sm border-2 border-dashed border-border p-5 hover:border-primary hover:shadow-md transition-all duration-200"
    >
      <div class="space-y-3">
        <h3 class="font-display text-xl md:text-2xl">
          {{ item.title }}
        </h3>

        <p class="text-base leading-relaxed text-text-secondary max-w-2xl">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
