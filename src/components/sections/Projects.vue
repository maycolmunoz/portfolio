<script setup lang="ts">
import { projects } from '@/utils/data'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div
      v-for="project in projects"
      :key="project.title"
      v-reveal
      class="border-4 border-border p-5 md:p-6 hover:bg-accent hover:text-accent-foreground transition-none group"
    >
      <div class="space-y-4">
        <div class="relative border-2 border-border overflow-hidden">
          <img
            :src="project.img"
            :alt="project.title"
            class="w-full aspect-video object-cover group-hover:mix-blend-luminosity transition-none"
          />
          <div class="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-none" />
        </div>

        <div class="space-y-3">
          <h3
            class="font-display text-lg md:text-xl font-black uppercase tracking-tighter leading-tight"
          >
            {{ project.title }}
          </h3>

          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="tech in project.stack"
              :key="tech"
              class="inline-block px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider border border-current group-hover:border-accent-foreground"
            >
              {{ tech }}
            </span>
          </div>

          <p class="text-xs md:text-sm leading-relaxed">
            {{ project.description }}
          </p>

          <div class="flex gap-6 pt-1">
            <a
              v-if="project.repository"
              :href="project.repository"
              target="_blank"
              class="link-accent"
            >
              [SOURCE]
            </a>
            <a v-if="project.link" :href="project.link" target="_blank" class="link-accent">
              [DEMO]
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
