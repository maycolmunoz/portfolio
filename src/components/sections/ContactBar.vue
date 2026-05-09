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
  <nav class="flex flex-wrap items-center justify-between gap-y-4 gap-x-4 py-2">
    <a
      class="hover:scale-125 duration-300 hover:text-accent"
      :href="contacts.cv"
      target="_blank"
      title="CV"
      rel="noopener noreferrer"
    >
      <IconFileCvFilled class="size-6" />
    </a>
    <a class="hover:scale-125 duration-300 hover:text-accent" :href="contacts.email" title="Email">
      <IconMailFilled class="size-6" />
    </a>
    <a
      class="hover:scale-125 duration-300 hover:text-accent"
      :href="contacts.github"
      target="_blank"
      title="GitHub"
      rel="noopener noreferrer"
    >
      <IconBrandGithubFilled class="size-6" />
    </a>
    <a
      class="hover:scale-125 duration-300 hover:text-accent"
      :href="contacts.linkedin"
      target="_blank"
      title="LinkedIn"
      rel="noopener noreferrer"
    >
      <IconBrandLinkedinFilled class="size-6" />
    </a>
  </nav>
</template>
