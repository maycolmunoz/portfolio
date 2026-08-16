<script setup lang="ts">
import { IconArrowUpRight } from '@tabler/icons-vue'
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

        <a
          v-if="item.link"
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 font-body text-primary border-2 border-dashed border-primary rounded-[16px] px-4 py-1.5 hover:bg-primary/10 transition-colors duration-200 text-sm"
        >
          Ver institución
          <IconArrowUpRight class="size-4" />
        </a>
      </div>
    </div>
  </div>
</template>
