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
  <div class="noise scanlines overflow-x-hidden">
    <main class="min-h-screen bg-background relative">
      <!-- Background Typography Chaos -->
      <div class="fixed inset-0 pointer-events-none select-none overflow-hidden z-0">
        <div
          class="absolute top-[-5%] left-[-5%] font-display text-[25vw] leading-none font-black text-transparent stroke-text-muted opacity-10"
        >
          MAYCOL
        </div>
        <div
          class="absolute bottom-[5%] right-[-10%] font-display text-[20vw] leading-none font-black text-transparent stroke-text-muted opacity-10 rotate-12"
        >
          MUÑOZ
        </div>
        <div
          class="absolute top-[40%] left-[50%] -translate-x-1/2 font-display text-[15vw] leading-none font-black text-accent opacity-[0.03]"
        >
          FULLSTACK
        </div>
      </div>

      <div
        class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 px-4 xl:px-0 py-8 relative z-10"
      >
        <aside class="lg:col-span-4 space-y-8 lg:sticky lg:top-8 self-start">
          <AboutMe />
        </aside>

        <section class="lg:col-span-8 space-y-4">
          <!-- Tab bar with Spine Aesthetic -->
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
