<script setup lang="ts">
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-vue'
import { projects } from '@/utils/data'
</script>

<template>
  <div class="space-y-8">
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="border-4 border-border p-4 md:p-6 space-y-4 hover:bg-primary hover:text-primary-foreground transition-colors duration-100 group"
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
            class="text-xl md:text-2xl font-black uppercase tracking-tighter group-hover:text-primary-foreground"
          >
            {{ project.title }}
          </h3>

          <p class="text-xs md:text-sm leading-relaxed text-foreground group-hover:text-primary-foreground">
            {{ project.description }}
          </p>

          <div class="flex gap-4 pt-2">
            <a
              v-if="project.repository"
              :href="project.repository"
              target="_blank"
              class="text-xs font-bold uppercase tracking-wider border-b-2 border-border hover:border-primary hover:text-primary inline-flex items-center gap-1 group-hover:border-primary-foreground group-hover:text-primary-foreground group-hover:hover:bg-primary-foreground group-hover:hover:text-primary transition-all duration-100"
            >
              <IconBrandGithub class="size-4" /> Source
            </a>
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              class="text-xs font-bold uppercase tracking-wider border-b-2 border-border hover:border-primary hover:text-primary inline-flex items-center gap-1 group-hover:border-primary-foreground group-hover:text-primary-foreground group-hover:hover:bg-primary-foreground group-hover:hover:text-primary transition-all duration-100"
            >
              <IconExternalLink class="size-4" /> Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
