<script setup lang="ts">
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconFileCvFilled,
  IconMailFilled,
} from '@tabler/icons-vue'
import { contacts } from '@/utils/data'
</script>

<template>
  <nav class="flex w-full flex-wrap items-center justify-between gap-y-4 gap-x-2 py-2">
    <div class="rounded-full bg-indigo-600 px-3 py-1.5 shadow-lg shadow-indigo-500/20">
      <h1
        class="text-[10px] sm:text-xs font-bold text-white whitespace-nowrap uppercase tracking-wider tech-font"
      >
        Full Stack Developer
      </h1>
    </div>

    <div class="flex items-center gap-4 text-slate-400">
      <a
        class="transition-all duration-300 hover:text-white hover:scale-110"
        :href="contacts.cv"
        target="_blank"
        title="CV"
        rel="noopener noreferrer"
      >
        <IconFileCvFilled class="size-5" />
      </a>
      <a
        class="transition-all duration-300 hover:text-white hover:scale-110"
        :href="contacts.email"
        title="Email"
      >
        <IconMailFilled class="size-5" />
      </a>
      <a
        class="transition-all duration-300 hover:text-white hover:scale-110"
        :href="contacts.github"
        target="_blank"
        title="GitHub"
        rel="noopener noreferrer"
      >
        <IconBrandGithubFilled class="size-5" />
      </a>
      <a
        class="transition-all duration-300 hover:text-white hover:scale-110"
        :href="contacts.linkedin"
        target="_blank"
        title="LinkedIn"
        rel="noopener noreferrer"
      >
        <IconBrandLinkedinFilled class="size-5" />
      </a>
    </div>
  </nav>
</template>
