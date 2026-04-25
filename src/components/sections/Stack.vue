<script setup lang="ts">
import { techStack } from '@/utils/data'
import { computed } from 'vue'

// Basic categorization logic
const categories = computed(() => {
  const groups = {
    'Core Technologies': ['PHP', 'Laravel', 'Vue', 'React', 'MySQL', 'PostgreSQL'],
    'Frontend & UI': ['TailwindCSS', 'Bootstrap', 'Alpine.js', 'HTML', 'CSS', 'JS'],
    'Ecosystem & Tools': ['Livewire', 'Inertia.js', 'Git', 'FilamentPHP', "API's"],
    'Architecture & Specializations': [
      'Clean Architecture',
      'Multitenant SaaS',
      'ERP & CRM Systems',
      'Performance-Oriented',
    ],
  }

  return Object.entries(groups).map(([name, techs]) => ({
    name,
    items: techStack.filter((t) => techs.includes(t.name)),
  }))
})
</script>

<template>
  <div class="space-y-8 p-2">
    <div v-for="category in categories" :key="category.name" class="space-y-4">
      <h3 class="text-xs font-bold uppercase tracking-widest text-indigo-400/80">
        {{ category.name }}
      </h3>
      <div class="flex flex-wrap gap-3">
        <div
          v-for="tech in category.items"
          :key="tech.name"
          class="group flex items-center gap-2.5 px-4 py-2 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm text-slate-300 transition-all duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/5 hover:text-white hover:-translate-y-0.5"
        >
          <component
            :is="tech.icon"
            class="size-4.5 transition-transform group-hover:scale-110"
            stroke-width="1.5"
          />
          <span class="text-sm font-medium">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
