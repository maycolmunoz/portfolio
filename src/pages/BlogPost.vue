<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { IconArrowLeft } from '@tabler/icons-vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { getPost, getPostContent } from '@/content/blog'

const route = useRoute()
const slug = route.params.slug as string

const post = computed(() => getPost(slug))
const content = ref('')

onMounted(async () => {
  const md = getPostContent(slug)
  if (md) {
    const { marked } = await import('marked')
    content.value = marked(md) as string
  }
})

usePageMeta(
  post.value ? `${post.value.title} | blog | mmunoz` : 'blog | mmunoz',
  post.value ? post.value.excerpt : '',
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
  <div class="max-w-3xl mx-auto px-4 xl:px-0 py-8">
    <RouterLink
      to="/blog"
      class="inline-flex items-center gap-2 font-body text-text-secondary hover:text-primary transition-colors duration-200 mb-8"
    >
      <IconArrowLeft class="size-4" />
      Volver al blog
    </RouterLink>

    <template v-if="post">
      <article>
        <header class="mb-8 pb-6 border-b-2 border-dashed border-border">
          <h1 class="font-display text-4xl md:text-5xl text-text leading-tight mb-4">
            {{ post.title }}
          </h1>

          <p class="font-body text-sm text-text-secondary mb-3">
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
        </header>

        <div class="blog-content" v-html="content"></div>
      </article>

      <nav
        class="mt-12 pt-6 border-t-2 border-dashed border-border flex items-center justify-between"
      >
        <RouterLink
          to="/blog"
          class="inline-flex items-center gap-2 font-body text-primary border-2 border-dashed border-primary rounded-[16px] px-6 py-2 hover:bg-primary/10 transition-colors duration-200"
        >
          <IconArrowLeft class="size-4" />
          Todos los artículos
        </RouterLink>

        <RouterLink
          to="/"
          class="font-body text-text-secondary hover:text-primary transition-colors duration-200 text-sm"
        >
          Portfolio →
        </RouterLink>
      </nav>
    </template>

    <div v-else class="text-center py-20">
      <p class="font-display text-2xl text-text-secondary">Artículo no encontrado</p>
      <RouterLink
        to="/blog"
        class="inline-flex items-center gap-2 font-body text-primary border-2 border-dashed border-primary rounded-[16px] px-6 py-2 hover:bg-primary/10 transition-colors duration-200 mt-6"
      >
        <IconArrowLeft class="size-4" />
        Volver al blog
      </RouterLink>
    </div>
  </div>
</template>
