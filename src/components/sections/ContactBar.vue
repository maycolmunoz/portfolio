<script setup lang="ts">
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconBrandXFilled,
  IconFileCvFilled,
  IconMailFilled,
} from '@tabler/icons-vue'
import { contacts } from '@/content/portfolio'
</script>

<template>
  <nav class="flex flex-wrap items-center justify-between gap-6 py-1">
    <a
      class="text-text-secondary hover:text-primary transition-colors duration-200"
      :href="contacts.cv"
      target="_blank"
      title="Currículum"
      aria-label="Currículum"
      rel="noopener noreferrer"
    >
      <IconFileCvFilled class="size-6" />
    </a>
    <a
      class="text-text-secondary hover:text-primary transition-colors duration-200"
      :href="contacts.email"
      title="Correo"
      aria-label="Correo"
    >
      <IconMailFilled class="size-6" />
    </a>
    <a
      class="text-text-secondary hover:text-primary transition-colors duration-200"
      :href="contacts.github"
      target="_blank"
      title="GitHub"
      aria-label="GitHub"
      rel="noopener noreferrer"
    >
      <IconBrandGithubFilled class="size-6" />
    </a>
    <a
      class="text-text-secondary hover:text-primary transition-colors duration-200"
      :href="contacts.linkedin"
      target="_blank"
      title="LinkedIn"
      aria-label="LinkedIn"
      rel="noopener noreferrer"
    >
      <IconBrandLinkedinFilled class="size-6" />
    </a>
    <a
      class="text-text-secondary hover:text-primary transition-colors duration-200"
      :href="contacts.x"
      target="_blank"
      title="X"
      aria-label="X"
      rel="noopener noreferrer"
    >
      <IconBrandXFilled class="size-6" />
    </a>
  </nav>
</template>
