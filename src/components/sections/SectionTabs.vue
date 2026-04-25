<script setup lang="ts">
import { ref } from 'vue'
import { Card } from '@/components/ui/card'
import ExpandedCard from '@/components/ui/ExpandedCard.vue'
import Stack from './Stack.vue'
import Projects from './Projects.vue'
import Education from './Education.vue'
import { IconStack2, IconFolders, IconLibrary, IconArrowRight } from '@tabler/icons-vue'

const activeModal = ref<string | null>(null)

const sections = [
  {
    id: 'stack',
    title: 'Tech Stack',
    subtitle: 'Core technologies & skills',
    icon: IconStack2,
    color: 'from-indigo-500/20 to-purple-500/20',
    component: Stack,
  },
  {
    id: 'projects',
    title: 'Featured Projects',
    subtitle: 'My latest work & builds',
    icon: IconFolders,
    color: 'from-blue-500/20 to-cyan-500/20',
    component: Projects,
  },
  {
    id: 'education',
    title: 'Learning Path',
    subtitle: 'Education & certifications',
    icon: IconLibrary,
    color: 'from-emerald-500/20 to-teal-500/20',
    component: Education,
  },
]
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 w-full h-full">
    <!-- Selection Cards -->
    <Card
      v-for="section in sections"
      :key="section.id"
      @click="activeModal = section.id"
      class="group cursor-pointer relative overflow-hidden bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 transition-all duration-500 hover:border-white/20 hover:bg-slate-900/60 hover:-translate-y-1 flex items-center justify-between"
    >
      <!-- Background Gradient Glow -->
      <div
        :class="[
          'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500',
          section.color,
        ]"
      />

      <div class="relative z-10 flex items-center gap-6">
        <div
          class="p-4 rounded-2xl bg-white/5 border border-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-indigo-500/20"
        >
          <component :is="section.icon" class="size-8 text-indigo-400" />
        </div>
        <div>
          <h3 class="text-xl font-black text-white tracking-tight">{{ section.title }}</h3>
          <p class="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
            {{ section.subtitle }}
          </p>
        </div>
      </div>

      <div
        class="relative z-10 p-2 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-500"
      >
        <IconArrowRight class="size-6 text-indigo-400" />
      </div>
    </Card>

    <!-- Modal System -->
    <ExpandedCard
      v-for="section in sections"
      :key="`modal-${section.id}`"
      :isOpen="activeModal === section.id"
      :title="section.title"
      @close="activeModal = null"
    >
      <component :is="section.component" />
    </ExpandedCard>
  </div>
</template>
