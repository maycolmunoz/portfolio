<script setup lang="ts">
import { education } from '@/utils/data'
</script>

<template>
  <div class="space-y-10 md:space-y-14">
    <div
      v-for="(item, index) in education"
      :key="index"
      v-reveal
      class="relative pl-8 md:pl-10 border-l-4 border-border"
    >
      <!-- Timeline node -->
      <div class="absolute -left-[9px] top-0">
        <div class="node-square" />
      </div>

      <div class="space-y-3">
        <h3
          class="font-display text-base md:text-lg font-black uppercase tracking-tighter leading-tight"
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
