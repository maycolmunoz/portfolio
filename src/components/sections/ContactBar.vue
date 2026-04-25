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
  <nav class="flex w-full flex-wrap items-center justify-between gap-2 py-4">
    <a
      class="transition-all duration-300 hover:text-white hover:scale-110"
      :href="contacts.cv"
      target="_blank"
      title="CV"
      rel="noopener noreferrer"
    >
      <IconFileCvFilled class="size-8" />
    </a>
    <a
      class="transition-all duration-300 hover:text-white hover:scale-110"
      :href="contacts.email"
      title="Email"
    >
      <IconMailFilled class="size-8" />
    </a>
    <a
      class="transition-all duration-300 hover:text-white hover:scale-110"
      :href="contacts.github"
      target="_blank"
      title="GitHub"
      rel="noopener noreferrer"
    >
      <IconBrandGithubFilled class="size-8" />
    </a>
    <a
      class="transition-all duration-300 hover:text-white hover:scale-110"
      :href="contacts.linkedin"
      target="_blank"
      title="LinkedIn"
      rel="noopener noreferrer"
    >
      <IconBrandLinkedinFilled class="size-8" />
    </a>
  </nav>
</template>
