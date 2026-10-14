<script setup lang="ts">
import { IconBriefcase, IconCalendar, IconMapPin } from '@tabler/icons-vue'
import { experience } from '@/content/portfolio'
</script>

<template>
  <div class="space-y-6">
    <div v-for="(item, index) in experience" :key="index" class="card p-5 md:p-6">
      <div class="space-y-4">
        <div class="flex flex-wrap items-center gap-3">
          <h3 class="font-display text-2xl md:text-3xl">{{ item.company }}</h3>
          <span class="pill bg-surface-muted text-carbon font-mono text-xs">
            {{ item.period }}
          </span>
        </div>

        <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-carbon/75">
          <span class="inline-flex items-center gap-1.5">
            <IconBriefcase class="size-4" />
            {{ item.role }}
          </span>
          <span class="inline-flex items-center gap-1.5">
            <IconMapPin class="size-4" />
            {{ item.location }}
          </span>
          <span class="inline-flex items-center gap-1.5">
            <IconCalendar class="size-4" />
            {{ item.period }}
          </span>
        </div>

        <ul class="space-y-2 max-w-2xl">
          <li
            v-for="(bullet, bulletIndex) in item.bullets"
            :key="bulletIndex"
            class="flex gap-3 text-base leading-relaxed text-carbon/80"
          >
            <span class="mt-2 size-2 shrink-0 bg-carbon" aria-hidden="true" />
            {{ bullet }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
