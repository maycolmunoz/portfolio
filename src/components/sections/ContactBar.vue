<script setup lang="ts">
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconBrandXFilled,
  IconFileCvFilled,
  IconMailFilled,
} from '@tabler/icons-vue'
import { contacts } from '@/content/portfolio'
import { stickers } from '@/lib/stickers'

const links = [
  { href: contacts.cv, icon: IconFileCvFilled, title: 'Currículum' },
  { href: contacts.email, icon: IconMailFilled, title: 'Correo' },
  { href: contacts.github, icon: IconBrandGithubFilled, title: 'GitHub' },
  { href: contacts.linkedin, icon: IconBrandLinkedinFilled, title: 'LinkedIn' },
  { href: contacts.x, icon: IconBrandXFilled, title: 'X' },
]
</script>

<template>
  <nav class="flex flex-wrap items-center gap-3">
    <a
      v-for="(link, index) in links"
      :key="link.title"
      class="sticker rounded-full size-11 grid place-items-center hover:-rotate-6 transition-transform duration-200"
      :class="stickers[index % stickers.length]"
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
