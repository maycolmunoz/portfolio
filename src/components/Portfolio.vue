<script setup lang="ts">
import { ref } from 'vue'
import AboutMe from './sections/AboutMe.vue'
import Stack from './sections/Stack.vue'
import Projects from './sections/Projects.vue'
import Education from './sections/Education.vue'

const activeTab = ref('stack')

const tabs = [
  { id: 'stack', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
]
</script>

<template>
  <main class="min-h-screen bg-background p-4 xl:p-0 selection:bg-primary selection:text-primary-foreground">
    <div
      class="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 lg:items-center lg:min-h-screen"
    >
      <aside class="lg:col-span-4 space-y-8 lg:sticky lg:top-8">
        <AboutMe />
      </aside>

      <section class="lg:col-span-8 space-y-8 pb-24">
        <div class="border-4 border-border flex flex-col lg:h-[80vh]">
          <div class="flex border-b-4 border-border">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              class="flex-1 px-4 py-3 text-xs md:text-sm font-black uppercase tracking-wider border-r-4 border-border last:border-r-0 transition-colors duration-100 cursor-pointer"
              :class="
                activeTab === tab.id
                  ? 'bg-foreground text-background'
                  : 'hover:bg-foreground hover:text-background'
              "
            >
              {{ tab.label }}
            </button>
          </div>

          <div class="p-6 md:p-8 lg:p-12 overflow-y-auto">
            <Stack v-if="activeTab === 'stack'" />
            <Projects v-if="activeTab === 'projects'" />
            <Education v-if="activeTab === 'education'" />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
