<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { IconArticle, IconArrowRight, IconArrowUpRight, IconFileCvFilled } from '@tabler/icons-vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { contacts } from '@/content/portfolio'
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
    class="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 py-8 relative"
  >
    <aside class="lg:col-span-4 lg:sticky lg:top-8 self-start space-y-6">
      <AboutMe />

      <div class="flex flex-col gap-4">
        <a
          :href="contacts.cv"
          target="_blank"
          rel="noopener noreferrer"
          class="card p-5 md:p-6 flex items-center gap-4 hover:bg-surface-muted"
          aria-label="Currículum"
        >
          <span class="sticker bg-carbon text-paper-white size-12 grid place-items-center shrink-0">
            <IconFileCvFilled class="size-6" />
          </span>
          <div class="min-w-0 flex-1">
            <h3 class="font-display text-2xl">Currículum</h3>
            <p class="text-sm text-carbon/70 truncate">PDF · una página</p>
          </div>
          <IconArrowUpRight class="size-5 shrink-0" />
        </a>

        <RouterLink
          to="/blog"
          class="card p-5 md:p-6 flex items-center gap-4 hover:bg-surface-muted"
          aria-label="Blog"
        >
          <span class="sticker bg-carbon text-paper-white size-12 grid place-items-center shrink-0">
            <IconArticle class="size-6" />
          </span>
          <div class="min-w-0 flex-1">
            <h3 class="font-display text-2xl">Blog</h3>
            <p class="text-sm text-carbon/70 truncate">Artículos y apuntes</p>
          </div>
          <IconArrowRight class="size-5 shrink-0" />
        </RouterLink>
      </div>
    </aside>

    <section class="lg:col-span-8 space-y-4">
      <div role="tablist" aria-label="Secciones del portafolio" class="flex flex-wrap gap-2">
        <button
          v-for="(tab, index) in tabs"
          :id="`tab-${tab.id}`"
          :key="tab.id"
          role="tab"
          :aria-selected="activeTab === tab.id"
          :aria-controls="`panel-${tab.id}`"
          :tabindex="activeTab === tab.id ? 0 : -1"
          @click="activeTab = tab.id"
          @keydown="onTabKeydown($event, index)"
          class="btn"
          :class="
            activeTab === tab.id
              ? ''
              : 'bg-paper-white text-carbon hover:bg-carbon hover:text-paper-white'
          "
        >
          {{ tab.label }}
        </button>
      </div>

      <div
        :id="`panel-${activeTab}`"
        role="tabpanel"
        :aria-labelledby="`tab-${activeTab}`"
        class="card rounded-card-lg p-6 md:p-10 overflow-y-auto h-[70vh] min-h-[420px]"
      >
        <Stack v-show="activeTab === 'stack'" />
        <Experience v-show="activeTab === 'experience'" />
        <Projects v-show="activeTab === 'projects'" />
        <Education v-show="activeTab === 'education'" />
      </div>
    </section>
  </div>
</template>
