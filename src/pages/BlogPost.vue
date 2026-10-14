<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { getPost, getPostContent, blogPosts } from '@/content/blog'

const route = useRoute()
const slug = route.params.slug as string

const post = computed(() => getPost(slug))
const content = ref('')

const sortedPosts = computed(() =>
  [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
)
const currentIndex = computed(() => sortedPosts.value.findIndex((p) => p.slug === slug))
const prevPost = computed(() => sortedPosts.value[currentIndex.value + 1])
const nextPost = computed(() => sortedPosts.value[currentIndex.value - 1])

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
  { path: post.value ? `blog/${post.value.slug}` : 'blog' },
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
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <RouterLink
        to="/blog"
        class="inline-flex items-center gap-2 mb-8 pill hover:bg-carbon hover:text-paper-white"
      >
        <IconArrowLeft class="size-4" />
        Volver al blog
      </RouterLink>

      <template v-if="post">
        <article class="card p-6 md:p-10">
          <header class="mb-8 pb-6 border-b-2 border-carbon">
            <h1 class="font-display uppercase text-4xl md:text-5xl leading-[0.85] mb-4">
              {{ post.title }}
            </h1>

            <p class="text-sm text-carbon/60 mb-3">{{ formatDate(post.date) }}</p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="pill bg-surface-muted text-carbon text-xs"
              >
                {{ tag }}
              </span>
            </div>
          </header>

          <div class="blog-content" v-html="content"></div>
        </article>

        <nav class="mt-12 pt-6 border-t-2 border-carbon flex flex-col gap-4">
          <div class="flex items-center justify-between gap-4">
            <RouterLink
              v-if="prevPost"
              :to="`/blog/${prevPost.slug}`"
              class="pill min-w-0 hover:bg-carbon hover:text-paper-white"
            >
              <IconArrowLeft class="size-4 shrink-0" />
              <span class="truncate">{{ prevPost.title }}</span>
            </RouterLink>
            <RouterLink
              v-if="nextPost"
              :to="`/blog/${nextPost.slug}`"
              class="pill min-w-0 ml-auto hover:bg-carbon hover:text-paper-white"
            >
              <span class="truncate">{{ nextPost.title }}</span>
              <IconArrowRight class="size-4 shrink-0" />
            </RouterLink>
          </div>

          <div class="flex items-center justify-between gap-4 border-t-2 border-carbon pt-4">
            <RouterLink to="/blog" class="btn">
              <IconArrowLeft class="size-4" />
              Todos los artículos
            </RouterLink>

            <RouterLink to="/" class="pill hover:bg-carbon hover:text-paper-white"
              >Portfolio</RouterLink
            >
          </div>
        </nav>
      </template>

      <div v-else class="text-center py-20">
        <p class="font-display text-3xl mb-6">Artículo no encontrado</p>
        <RouterLink to="/blog" class="btn">
          <IconArrowLeft class="size-4" />
          Volver al blog
        </RouterLink>
      </div>
    </div>
  </div>
</template>
