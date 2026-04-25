<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-vue'
import { projects } from '@/utils/data'
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="flex flex-col rounded-2xl overflow-hidden bg-slate-900/60 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 shadow-lg"
    >
      <!-- Project Image (Compact aspect ratio) -->
      <div class="relative aspect-[16/10] overflow-hidden">
        <img
          :src="project.img"
          :alt="project.title"
          class="size-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-linear-to-t from-slate-950/80 to-transparent" />

        <!-- Tech Badges (Floating on top) -->
        <div class="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          <Badge
            v-for="tech in project.stack.slice(0, 2)"
            :key="tech"
            class="bg-black/40 backdrop-blur-md border-white/10 text-[9px] text-white py-0 h-4"
          >
            {{ tech }}
          </Badge>
        </div>
      </div>

      <!-- Compact Content -->
      <div class="p-4 flex-1 flex flex-col gap-3">
        <h3 class="text-base font-bold text-white leading-tight">
          {{ project.title }}
        </h3>
        <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed">
          {{ project.description }}
        </p>

        <!-- Compact Action Buttons -->
        <div class="mt-auto pt-2 flex gap-2">
          <a
            v-if="project.repository"
            :href="project.repository"
            target="_blank"
            class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-white transition-colors hover:bg-white/10"
          >
            <IconBrandGithub class="size-3.5" />
            Code
          </a>
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 text-[10px] font-bold text-white transition-colors hover:bg-indigo-500"
          >
            <IconExternalLink class="size-3.5" />
            Demo
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
