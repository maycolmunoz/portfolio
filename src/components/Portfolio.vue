<script setup lang="ts">
import { ref } from 'vue'
import AboutMe from './sections/AboutMe.vue'
import Stack from './sections/Stack.vue'
import Projects from './sections/Projects.vue'
import Education from './sections/Education.vue'

const activeTab = ref('stack')

const tabs = [
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
]
</script>

<template>
  <div class="noise scanlines">
    <main class="min-h-screen bg-background relative">
      <div
        class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 px-4 xl:px-0 py-8"
      >
        <aside class="lg:col-span-4 space-y-8 lg:sticky lg:top-8 self-start">
          <AboutMe />
        </aside>

        <section class="lg:col-span-8 space-y-8">
          <!-- Tab bar -->
          <div class="border-4 border-border flex">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              class="flex-1 px-3 md:px-4 py-3 md:py-4 text-xs md:text-sm font-black uppercase border-r-4 border-border last:border-r-0 transition-none cursor-pointer"
              :class="
                activeTab === tab.id
                  ? 'bg-accent text-accent-foreground'
                  : 'hover:bg-accent hover:text-accent-foreground'
              "
            >
              {{ tab.label }}
            </button>
          </div>

          <!-- Content panel -->
          <div class="border-4 border-border p-6 md:p-8 lg:p-12 overflow-y-auto h-[80vh]">
            <Stack v-if="activeTab === 'stack'" />
            <Projects v-if="activeTab === 'projects'" />
            <Education v-if="activeTab === 'education'" />
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
