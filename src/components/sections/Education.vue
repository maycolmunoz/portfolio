<script setup lang="ts">
import { IconArrowUpRight } from '@tabler/icons-vue'
import { education } from '@/content/portfolio'
</script>

<template>
  <div class="space-y-6">
    <div v-for="(item, index) in education" :key="index" class="card p-5">
      <div class="space-y-3">
        <div class="flex items-center gap-3">
          <span
            class="sticker size-8 shrink-0 grid place-items-center text-sm font-bold bg-carbon text-paper-white font-mono"
            aria-hidden="true"
          >
            {{ index + 1 }}
          </span>
          <h3 class="font-display text-2xl">{{ item.title }}</h3>
        </div>

        <p class="text-base leading-relaxed text-carbon/75 max-w-2xl">
          {{ item.description }}
        </p>

        <a
          v-if="item.link"
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
          class="pill hover:bg-carbon hover:text-paper-white"
        >
          Ver institución
          <IconArrowUpRight class="size-4" />
        </a>
      </div>
    </div>
  </div>
</template>
