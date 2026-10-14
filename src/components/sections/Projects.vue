<script setup lang="ts">
import { IconArrowUpRight, IconStarFilled, IconMoonStars } from '@tabler/icons-vue'
import { projects } from '@/content/portfolio'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div v-for="project in projects" :key="project.title" class="card p-5">
      <div class="space-y-4">
        <div class="relative rounded-card overflow-hidden border-2 border-carbon">
          <img
            v-if="project.img"
            :src="project.img"
            :alt="project.title"
            loading="lazy"
            class="w-full aspect-video object-cover grayscale contrast-110"
          />
          <div
            v-else
            class="w-full aspect-video bg-surface-muted flex items-center justify-center text-carbon"
            aria-hidden="true"
          >
            <IconMoonStars class="size-12" />
          </div>
          <span
            v-if="project.stars && project.stars > 0"
            class="sticker rounded-full bg-carbon text-paper-white absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 label font-mono"
            :title="`${project.stars} estrellas en GitHub`"
          >
            <IconStarFilled class="size-3.5" />
            {{ project.stars }}
          </span>
        </div>

        <div class="space-y-3">
          <h3 class="font-display text-2xl">{{ project.title }}</h3>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in project.stack"
              :key="tech"
              class="pill bg-surface-muted text-carbon text-xs"
            >
              {{ tech }}
            </span>
          </div>

          <p class="text-base leading-relaxed text-carbon/75">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2 pt-1">
            <a
              v-if="project.repository"
              :href="project.repository"
              target="_blank"
              rel="noopener noreferrer"
              class="pill hover:bg-carbon hover:text-paper-white"
            >
              Código
              <IconArrowUpRight class="size-4" />
            </a>
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="pill hover:bg-carbon hover:text-paper-white"
            >
              Demo
              <IconArrowUpRight class="size-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
