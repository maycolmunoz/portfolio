<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { IconArticle, IconArrowRight } from '@tabler/icons-vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { blogPosts } from '@/content/blog'

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
  <div class="bg-console-canvas py-10 min-h-screen">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <header class="mb-10">
        <RouterLink
          to="/"
          class="inline-flex items-center gap-1.5 text-sm mb-4 pill hover:bg-carbon hover:text-paper-white"
        >
          ← Volver al portfolio
        </RouterLink>
        <div>
          <div class="flex items-center gap-3 mb-2">
            <span
              class="sticker bg-carbon text-paper-white rounded-full size-12 grid place-items-center shrink-0"
            >
              <IconArticle class="size-6" />
            </span>
            <h1 class="font-display text-5xl md:text-6xl uppercase leading-[0.8]">Blog</h1>
          </div>
          <p class="text-base md:text-lg text-carbon/70 ml-1">Artículos</p>
        </div>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article v-for="(post, index) in posts" :key="post.slug" class="card p-4 md:p-5">
          <RouterLink :to="`/blog/${post.slug}`" class="block space-y-3">
            <div class="flex items-start gap-3">
              <span
                class="sticker size-8 grid place-items-center shrink-0 label bg-carbon text-paper-white font-mono"
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
                class="pill bg-surface-muted text-carbon text-xs"
              >
                {{ tag }}
              </span>
            </div>

            <div class="pill mt-2 hover:bg-carbon hover:text-paper-white">
              Leer <IconArrowRight class="size-4" />
            </div>
          </RouterLink>
        </article>
      </div>
    </div>
  </div>
</template>
