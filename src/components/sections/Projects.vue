<script setup lang="ts">
import { IconArrowUpRight, IconStarFilled, IconMoonStars } from '@tabler/icons-vue'
import { projects } from '@/content/portfolio'
import { stickers } from '@/lib/stickers'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div
      v-for="project in projects"
      :key="project.title"
      class="card p-5 hover:-translate-y-0.5 transition-transform duration-200 group"
    >
      <div class="space-y-4">
        <div class="relative rounded-card overflow-hidden border border-carbon">
          <img
            v-if="project.img"
            :src="project.img"
            :alt="project.title"
            loading="lazy"
            class="w-full aspect-video object-cover"
          />
          <div
            v-else
            class="w-full aspect-video bg-sky-wash flex items-center justify-center"
            aria-hidden="true"
          >
            <IconMoonStars class="size-12" />
          </div>
          <span
            v-if="project.stars && project.stars > 0"
            class="sticker rounded-full bg-sunburst absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 label"
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
              v-for="(tech, techIndex) in project.stack"
              :key="tech"
              class="pill"
              :class="stickers[techIndex % stickers.length]"
            >
              {{ tech }}
            </span>
          </div>

          <p class="text-base leading-relaxed text-carbon/70">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2 pt-1">
            <a
              v-if="project.repository"
              :href="project.repository"
              target="_blank"
              rel="noopener noreferrer"
              class="pill"
            >
              Código
              <IconArrowUpRight class="size-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="pill"
            >
              Demo
              <IconArrowUpRight class="size-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
