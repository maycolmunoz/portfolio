<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { IconArticle, IconArrowRight } from '@tabler/icons-vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { blogPosts } from '@/content/blog'

usePageMeta('blog | mmunoz', 'Artículos')

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
  <div class="max-w-7xl mx-auto px-4 xl:px-0 py-8">
    <header class="mb-10">
      <RouterLink
        to="/"
        class="inline-flex items-center gap-1.5 font-body text-sm text-text-secondary hover:text-primary transition-colors duration-200 mb-4"
      >
        ← Volver al portfolio
      </RouterLink>
      <div>
        <div class="flex items-center gap-3 mb-2">
          <div class="bg-primary/20 rounded-full p-2">
            <IconArticle class="size-6 text-primary" />
          </div>
          <h1 class="font-display text-4xl md:text-5xl text-text">Blog</h1>
        </div>
        <p class="font-body text-base md:text-lg text-text-secondary ml-1">Artículos</p>
      </div>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <article
        v-for="post in posts"
        :key="post.slug"
        class="bg-card rounded-[24px] shadow-sm border-2 border-dashed border-border p-4 md:p-5 hover:border-primary transition-colors duration-200"
      >
        <RouterLink :to="`/blog/${post.slug}`" class="block space-y-3">
          <h2 class="font-display text-xl md:text-2xl text-primary">
            {{ post.title }}
          </h2>

          <p class="font-body text-sm text-text-secondary">
            {{ formatDate(post.date) }}
          </p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="font-body text-xs font-semibold text-primary bg-primary/20 px-3 py-1 rounded-full border border-primary/40"
            >
              {{ tag }}
            </span>
          </div>

          <div
            class="inline-flex items-center gap-2 font-body text-primary border-2 border-dashed border-primary rounded-[16px] px-4 py-1.5 hover:bg-primary/10 transition-colors duration-200 mt-2"
          >
            Leer
            <IconArrowRight class="size-4" />
          </div>
        </RouterLink>
      </article>
    </div>
  </div>
</template>
