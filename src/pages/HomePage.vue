<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { IconArticle, IconArrowRight } from '@tabler/icons-vue'
import { usePageMeta } from '@/composables/usePageMeta'
import AboutMe from '@/components/sections/AboutMe.vue'
import Stack from '@/components/sections/Stack.vue'
import Projects from '@/components/sections/Projects.vue'
import Education from '@/components/sections/Education.vue'
import Experience from '@/components/sections/Experience.vue'

defineOptions({ name: 'home' })

usePageMeta(
  'portafolio | mmunoz',
  'Desarrollador full-stack enfocado en el ecosistema TALL (Laravel, Livewire, Alpine, Tailwind). Paneles de administración, SaaS, APIs REST y proyectos open source.',
)

const activeTab = ref('stack')

const tabs = [
  { id: 'stack', label: 'Stack' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'education', label: 'Educación' },
]

function onTabKeydown(event: KeyboardEvent, index: number) {
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
  event.preventDefault()
  const delta = event.key === 'ArrowRight' ? 1 : -1
  const next = tabs[(index + delta + tabs.length) % tabs.length]
  if (!next) return
  activeTab.value = next.id
  document.getElementById(`tab-${next.id}`)?.focus()
}
</script>

<template>
  <div
    class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 px-4 xl:px-0 py-8 relative"
  >
    <aside class="lg:col-span-4 lg:sticky lg:top-8 self-start space-y-6">
      <AboutMe />

      <RouterLink
        to="/blog"
        class="bg-card rounded-[24px] shadow-sm border-2 border-dashed border-border p-5 md:p-6 flex items-center gap-4 hover:border-primary transition-colors duration-200 group"
        aria-label="Blog"
      >
        <div class="bg-primary/20 rounded-full p-3 shrink-0">
          <IconArticle class="size-6 text-primary" />
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="font-display text-xl text-primary">Blog</h3>
          <p class="font-body text-sm text-text-secondary truncate">Artículos y apuntes</p>
        </div>
        <IconArrowRight
          class="size-5 text-primary shrink-0 group-hover:translate-x-1 transition-transform duration-200"
        />
      </RouterLink>
    </aside>

    <section class="lg:col-span-8 space-y-4">
      <div
        role="tablist"
        aria-label="Secciones del portafolio"
        class="bg-card rounded-[24px] shadow-sm border-2 border-dashed border-border flex overflow-hidden"
      >
        <button
          v-for="(tab, index) in tabs"
          :key="tab.id"
          :id="`tab-${tab.id}`"
          role="tab"
          :aria-selected="activeTab === tab.id"
          :aria-controls="`panel-${tab.id}`"
          :tabindex="activeTab === tab.id ? 0 : -1"
          @click="activeTab = tab.id"
          @keydown="onTabKeydown($event, index)"
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
        :id="`panel-${activeTab}`"
        role="tabpanel"
        :aria-labelledby="`tab-${activeTab}`"
        class="bg-card rounded-[24px] shadow-sm border-2 border-dashed border-border p-6 md:p-8 lg:p-10 overflow-y-auto h-[80vh]"
      >
        <Stack v-show="activeTab === 'stack'" />
        <Experience v-show="activeTab === 'experience'" />
        <Projects v-show="activeTab === 'projects'" />
        <Education v-show="activeTab === 'education'" />
      </div>
    </section>
  </div>
</template>
