<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import AboutMe from './sections/AboutMe.vue'
import Stack from './sections/Stack.vue'
import Projects from './sections/Projects.vue'
import Education from './sections/Education.vue'
import { Card } from '@/components/ui/card'

const mouseX = ref(0)
const mouseY = ref(0)
const updateMouse = (e: MouseEvent) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

onMounted(() => window.addEventListener('mousemove', updateMouse))
onUnmounted(() => window.removeEventListener('mousemove', updateMouse))
</script>

<template>
  <main
    class="min-h-screen bg-stars py-8 px-4 relative selection:bg-indigo-500 selection:text-white"
  >
    <div
      class="pointer-events-none fixed inset-0 z-0 opacity-40"
      :style="{
        background: `radial-gradient(1000px circle at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, 0.15), transparent 80%)`,
      }"
    />

    <div class="hud-scanline fixed inset-0 pointer-events-none" />

    <div
      class="w-full max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative"
    >
      <aside class="lg:col-span-4 space-y-6 lg:sticky lg:top-8">
        <AboutMe />
      </aside>

      <section class="lg:col-span-8 space-y-8 pb-24">
        <Card
          class="bg-slate-900/60 backdrop-blur-xl border border-white/10 hud-border p-8 relative"
        >
          <div class="space-y-16">
            <div>
              <div class="flex items-center gap-3 mb-8">
                <h2 class="text-xs font-black text-indigo-400 uppercase tracking-[0.3em] tech-font">
                  Intelligence_Array
                </h2>
                <div class="h-px flex-1 bg-indigo-500/20" />
              </div>
              <Stack />
            </div>

            <div>
              <div class="flex items-center gap-3 mb-8">
                <h2 class="text-xs font-black text-indigo-400 uppercase tracking-[0.3em] tech-font">
                  Deployment_History
                </h2>
                <div class="h-px flex-1 bg-indigo-500/20" />
              </div>
              <Projects />
            </div>

            <div>
              <div class="flex items-center gap-3 mb-8">
                <h2 class="text-xs font-black text-indigo-400 uppercase tracking-[0.3em] tech-font">
                  Learning_Backbone
                </h2>
                <div class="h-px flex-1 bg-indigo-500/20" />
              </div>
              <Education />
            </div>
          </div>
        </Card>
      </section>
    </div>
  </main>
</template>
