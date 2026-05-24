<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { IconArrowLeft } from '@tabler/icons-vue'
import { usePageMeta } from '@/utils/usePageMeta'
import AboutMe from '@/components/sections/AboutMe.vue'
import Stack from '@/components/sections/Stack.vue'
import Projects from '@/components/sections/Projects.vue'
import Education from '@/components/sections/Education.vue'

usePageMeta(
  'portfolio | mmunoz',
  'Portfolio de MMunoz. Estudiante de Ingeniería de Sistemas y desarrollador full stack especializado en Laravel, Vue, y sistemas escalables.',
)

const activeTab = ref('stack')

const tabs = [
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
]
</script>

<template>
  <div
    class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 px-4 xl:px-0 py-8 relative z-10"
  >
    <aside class="lg:col-span-4 space-y-8 lg:sticky lg:top-8 self-start">
      <AboutMe />

      <RouterLink
        to="/awesome-resources"
        class="flex items-center justify-center gap-2 border-4 border-border p-4 bg-secondary hover:bg-accent/5 hover:border-accent transition-all duration-200 group"
      >
        <IconArrowLeft :size="16" class="rotate-180 group-hover:text-accent transition-colors" />
        <span
          class="font-display text-xs font-black uppercase tracking-wide group-hover:text-accent transition-colors"
          >Awesome Resources</span
        >
      </RouterLink>
    </aside>

    <section class="lg:col-span-8 space-y-4">
      <div class="border-4 border-border flex bg-accent/5 overflow-hidden">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="flex-1 px-3 md:px-4 py-3 md:py-4 text-xs md:text-sm font-black uppercase border-r-2 border-border last:border-r-0 transition-all duration-200 cursor-pointer"
          :class="
            activeTab === tab.id
              ? 'bg-accent text-accent-foreground'
              : 'text-accent/60 hover:bg-accent/10 hover:text-accent'
          "
        >
          {{ tab.label }}
        </button>
      </div>

      <div class="border-4 border-border p-6 md:p-8 lg:p-12 overflow-y-auto h-[80vh] bg-secondary">
        <Stack v-if="activeTab === 'stack'" />
        <Projects v-if="activeTab === 'projects'" />
        <Education v-if="activeTab === 'education'" />
      </div>
    </section>
  </div>
</template>
