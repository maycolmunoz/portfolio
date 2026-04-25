<script setup lang="ts">
import { education } from '@/utils/data'
import { IconSchool, IconCalendarEvent } from '@tabler/icons-vue'
</script>

<template>
  <div class="max-w-3xl mx-auto py-4 space-y-12">
    <div
      v-for="(item, index) in education"
      :key="index"
      class="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-linear-to-b before:from-indigo-500 before:to-transparent"
    >
      <!-- Timeline Node -->
      <div
        class="absolute left-[-4px] top-0 size-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]"
      />

      <div class="space-y-3">
        <div class="flex flex-wrap items-center gap-3">
          <span
            class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-400 uppercase tracking-wider"
          >
            <IconSchool class="size-3" />
            Education
          </span>
        </div>

        <h3 class="text-lg font-bold text-white leading-tight">
          {{ item.title }}
        </h3>

        <p class="text-sm text-slate-400 leading-relaxed max-w-2xl">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
