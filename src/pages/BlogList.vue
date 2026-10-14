<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { IconArticle, IconArrowRight } from '@tabler/icons-vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { blogPosts } from '@/content/blog'
import { stickers } from '@/lib/stickers'

usePageMeta('blog | mmunoz', 'Artículos', { path: 'blog' })

const posts = computed(() =>
  [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
)

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <header class="mb-10">
      <RouterLink to="/" class="inline-flex items-center gap-1.5 text-sm mb-4 pill">
        ← Volver al portfolio
      </RouterLink>
      <div>
        <div class="flex items-center gap-3 mb-2">
          <span class="sticker bg-mint-pop rounded-full size-12 grid place-items-center shrink-0">
            <IconArticle class="size-6" />
          </span>
          <h1 class="font-display text-5xl md:text-6xl uppercase leading-[0.85]">Blog</h1>
        </div>
        <p class="text-base md:text-lg text-carbon/70 ml-1">Artículos</p>
      </div>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <article
        v-for="(post, index) in posts"
        :key="post.slug"
        class="card p-4 md:p-5 hover:-translate-y-0.5 transition-transform duration-200"
      >
        <RouterLink :to="`/blog/${post.slug}`" class="block space-y-3">
          <div class="flex items-start gap-3">
            <span
              class="sticker size-8 grid place-items-center shrink-0 -rotate-6 label"
              :class="stickers[index % stickers.length]"
              aria-hidden="true"
            >
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <h2 class="font-display text-2xl">{{ post.title }}</h2>
          </div>

          <p class="text-sm text-carbon/60">{{ formatDate(post.date) }}</p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="pill"
              :class="stickers[(index + 1) % stickers.length]"
            >
              {{ tag }}
            </span>
          </div>

          <div class="pill mt-2">Leer <IconArrowRight class="size-4" /></div>
        </RouterLink>
      </article>
    </div>
  </div>
</template>
