<script setup lang="ts">
import { categorizedStack } from '@/utils/data'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div v-for="category in categorizedStack" :key="category.title" class="space-y-4">
      <h3
        class="text-[10px] font-bold uppercase tracking-widest text-slate-500 tech-font border-l-2 border-indigo-500 pl-2"
      >
        {{ category.title }}
      </h3>
      <div class="flex flex-wrap gap-2">
        <div
          v-for="tech in category.items"
          :key="tech.name"
          class="flex items-center gap-2 px-3 py-1.5 rounded-sm border border-white/5 bg-white/5 text-slate-300 transition-all duration-300 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-white"
        >
          <component :is="tech.icon" class="size-3.5" stroke-width="1.5" />
          <span class="text-[10px] tech-font font-medium">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
