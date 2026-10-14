<script setup lang="ts">
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconBrandXFilled,
  IconMailFilled,
} from '@tabler/icons-vue'
import { contacts } from '@/content/portfolio'

const links = [
  { href: contacts.email, icon: IconMailFilled, title: 'Correo' },
  { href: contacts.github, icon: IconBrandGithubFilled, title: 'GitHub' },
  { href: contacts.linkedin, icon: IconBrandLinkedinFilled, title: 'LinkedIn' },
  { href: contacts.x, icon: IconBrandXFilled, title: 'X' },
]
</script>

<template>
  <nav class="flex flex-wrap items-center justify-between gap-3">
    <a
      v-for="link in links"
      :key="link.title"
      class="sticker rounded-full size-11 grid place-items-center bg-paper-white text-carbon hover:bg-carbon hover:text-paper-white"
      :href="link.href"
      :target="link.href.startsWith('http') ? '_blank' : undefined"
      :title="link.title"
      :aria-label="link.title"
      rel="noopener noreferrer"
    >
      <component :is="link.icon" class="size-5" />
    </a>
  </nav>
</template>
