<script setup lang="ts">
import { education } from '@/utils/data'
</script>

<template>
  <div class="space-y-6">
    <div
      v-for="(item, index) in education"
      :key="index"
      v-reveal
      class="border-4 border-border p-5 md:p-6 bg-secondary"
    >
      <div class="space-y-3">
        <h3
          class="font-display text-lg md:text-xl font-black uppercase tracking-tighter leading-tight"
        >
          {{ item.title }}
        </h3>

        <p class="text-xs md:text-sm leading-relaxed text-foreground/85 max-w-2xl">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
