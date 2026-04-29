<script setup lang="ts">
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-vue'
import { projects } from '@/utils/data'
</script>

<template>
  <div class="space-y-8">
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="border-4 border-border p-4 md:p-6 space-y-4 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-colors duration-100 group"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div class="md:col-span-1">
          <img
            :src="project.img"
            :alt="project.title"
            class="w-full aspect-video object-cover border-2 border-border"
          />
        </div>

        <div class="md:col-span-2 space-y-3">
          <h3
            class="text-xl md:text-2xl font-black uppercase tracking-tighter group-hover:text-white"
          >
            {{ project.title }}
          </h3>

          <p class="text-xs md:text-sm leading-relaxed text-foreground group-hover:text-white">
            {{ project.description }}
          </p>

          <div class="flex gap-4 pt-2">
            <a
              v-if="project.repository"
              :href="project.repository"
              target="_blank"
              class="text-xs font-bold uppercase tracking-wider border-b-2 border-black dark:border-white/20 hover:border-indigo-500 hover:text-indigo-500 inline-flex items-center gap-1"
            >
              <IconBrandGithub class="size-4" /> Source
            </a>
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              class="text-xs font-bold uppercase tracking-wider border-b-2 border-black dark:border-white/20 hover:border-indigo-500 hover:text-indigo-500 inline-flex items-center gap-1"
            >
              <IconExternalLink class="size-4" /> Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
