<script setup lang="ts">
import { ref } from 'vue'
import { usePageMeta } from '@/utils/usePageMeta'
import AboutMe from '@/components/sections/AboutMe.vue'
import Stack from '@/components/sections/Stack.vue'
import Projects from '@/components/sections/Projects.vue'
import Education from '@/components/sections/Education.vue'

usePageMeta(
  'portafolio | mmunoz',
  'Desarrollador full-stack con Laravel y Vue. Estudiante de Ingeniería de Sistemas.',
)

const activeTab = ref('stack')

const tabs = [
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'education', label: 'Educación' },
]
</script>

<template>
  <div
    class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 px-4 xl:px-0 py-8 relative"
  >
    <aside class="lg:col-span-4 lg:sticky lg:top-8 self-start">
      <AboutMe />
    </aside>

    <section class="lg:col-span-8 space-y-4">
      <div
        class="bg-card rounded-[24px] shadow-sm border-2 border-dashed border-border flex overflow-hidden"
      >
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="flex-1 px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base font-bold border-r border-dashed border-border last:border-r-0 transition-colors duration-200 cursor-pointer"
          :class="
            activeTab === tab.id
              ? 'bg-primary text-white'
              : 'bg-transparent hover:bg-primary/10 hover:text-primary'
          "
        >
          {{ tab.label }}
        </button>
      </div>

      <div
        class="bg-card rounded-[24px] shadow-sm border-2 border-dashed border-border p-6 md:p-8 lg:p-10 overflow-y-auto h-[80vh]"
      >
        <Stack v-if="activeTab === 'stack'" />
        <Projects v-if="activeTab === 'projects'" />
        <Education v-if="activeTab === 'education'" />
      </div>
    </section>
  </div>
</template>
