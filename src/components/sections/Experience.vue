<script setup lang="ts">
import { IconBriefcase, IconCalendar, IconMapPin } from '@tabler/icons-vue'
import { experience } from '@/content/portfolio'
</script>

<template>
  <div class="space-y-6">
    <div
      v-for="(item, index) in experience"
      :key="index"
      v-reveal
      class="bg-card rounded-[24px] shadow-sm border-2 border-dashed border-border p-5 hover:border-primary hover:shadow-md transition-all duration-200"
    >
      <div class="space-y-3">
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
          <h3 class="font-display text-xl md:text-2xl">
            {{ item.company }}
          </h3>
          <span
            class="inline-flex items-center gap-1.5 rounded-full bg-primary/20 text-primary text-sm font-bold px-3 py-1"
          >
            {{ item.period }}
          </span>
        </div>

        <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-text-secondary">
          <span class="inline-flex items-center gap-1.5">
            <IconBriefcase class="size-4 text-primary" />
            {{ item.role }}
          </span>
          <span class="inline-flex items-center gap-1.5">
            <IconMapPin class="size-4 text-primary" />
            {{ item.location }}
          </span>
          <span class="inline-flex items-center gap-1.5">
            <IconCalendar class="size-4 text-primary" />
            {{ item.period }}
          </span>
        </div>

        <ul class="space-y-2 max-w-2xl">
          <li
            v-for="(bullet, bulletIndex) in item.bullets"
            :key="bulletIndex"
            class="flex gap-2.5 text-base leading-relaxed text-text-secondary"
          >
            <span class="mt-2.5 size-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            {{ bullet }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
