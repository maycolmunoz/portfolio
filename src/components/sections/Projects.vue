<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { IconBrandGithub, IconExternalLink, IconChevronRight } from '@tabler/icons-vue'
import { projects } from '@/utils/data'
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="group relative flex flex-col bg-slate-900/40 border border-white/5 transition-all duration-300 hover:border-indigo-500/30"
    >
      <div class="relative aspect-video overflow-hidden border-b border-white/5">
        <img
          :src="project.img"
          :alt="project.title"
          class="size-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div class="absolute inset-0 bg-indigo-500/10 mix-blend-overlay" />

        <div class="absolute top-2 left-2 size-2 border-t border-l border-white/30" />
        <div class="absolute bottom-2 right-2 size-2 border-b border-r border-white/30" />
      </div>

      <div class="p-4 space-y-3">
        <div class="flex items-center justify-between">
          <h3 class="text-sm font-bold text-white tech-font uppercase tracking-tight">
            {{ project.title }}
          </h3>
          <IconChevronRight
            class="size-4 text-indigo-500 opacity-0 group-hover:opacity-100 transition-all"
          />
        </div>

        <p class="text-[11px] text-slate-400 tech-font leading-relaxed line-clamp-2">
          {{ project.description }}
        </p>

        <div class="flex gap-3 pt-2">
          <a
            v-if="project.repository"
            :href="project.repository"
            target="_blank"
            class="text-[9px] tech-font font-bold text-slate-500 hover:text-white transition-colors flex items-center gap-1"
          >
            <IconBrandGithub class="size-3" /> [SRC_CODE]
          </a>
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            class="text-[9px] tech-font font-bold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
          >
            <IconExternalLink class="size-3" /> [LIVE_DEMO]
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
