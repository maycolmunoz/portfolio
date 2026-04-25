<script setup lang="ts">
import AboutMe from './sections/AboutMe.vue'
import SectionTabs from './sections/SectionTabs.vue'
</script>

<template>
  <main
    class="min-h-screen bg-stars selection:bg-indigo-500/30 selection:text-indigo-200 sm:p-8 lg:p-12 flex items-center justify-center"
  >
    <!-- Main Content Container with Entry Animation -->
    <div class="w-full max-w-7xl mx-auto animate-in fade-in zoom-in-95 duration-1000 ease-out">
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10 items-start">
        <!-- Sidebar - Profile Section -->
        <aside class="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
          <AboutMe />
        </aside>

        <!-- Main Content Area -->
        <section class="lg:col-span-7 xl:col-span-8 flex flex-col">
          <SectionTabs />
        </section>
      </div>
    </div>
  </main>
</template>
