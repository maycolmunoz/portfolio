<script setup lang="ts">
import { projects } from '@/content/portfolio'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div
      v-for="project in projects"
      :key="project.title"
      v-reveal
      class="bg-card rounded-[24px] shadow-sm border-2 border-dashed border-border p-5 hover:border-primary hover:shadow-md transition-all duration-200 group"
    >
      <div class="space-y-4">
        <div class="relative rounded-[16px] overflow-hidden border-2 border-dashed border-border">
          <img :src="project.img" :alt="project.title" loading="lazy" class="w-full aspect-video object-cover" />
        </div>

        <div class="space-y-3">
          <h3 class="font-display text-xl md:text-2xl">
            {{ project.title }}
          </h3>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in project.stack"
              :key="tech"
              class="bg-tag-bg text-text-secondary rounded-full px-3 py-0.5 text-sm"
            >
              {{ tech }}
            </span>
          </div>

          <p class="text-base leading-relaxed text-text-secondary">
            {{ project.description }}
          </p>

          <div class="flex gap-6 pt-2">
            <a
              v-if="project.repository"
              :href="project.repository"
              target="_blank"
              class="text-primary font-semibold hover:text-primary-hover transition-colors duration-200"
            >
              CÓDIGO
            </a>
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              class="text-primary font-semibold hover:text-primary-hover transition-colors duration-200"
            >
              DEMO
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
