<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { type AwesomeResource } from '@/utils/data'
import { useAwesomeResources } from '@/utils/useAwesomeResources'
import { IconArrowLeft, IconSearch, IconStar, IconStarFilled } from '@tabler/icons-vue'
import { usePageMeta } from '@/utils/usePageMeta'
import { useFavorites } from '@/utils/useFavorites'

usePageMeta(
  'awesome-resources | mmunoz',
  'Colección curada de herramientas y recursos web que uso diariamente: diseño, desarrollo, iconos, educación y más.',
)

const { resources, loading, error, retry } = useAwesomeResources()
const { toggle, isFavorite } = useFavorites()

const searchQuery = ref('')
const selectedCategory = ref<string | null>(null)

const latestResources = computed(() =>
  [...resources.value]
    .sort((a, b) => new Date(b.addedAt ?? 0).getTime() - new Date(a.addedAt ?? 0).getTime())
    .slice(0, 4),
)

const categoryLabels: Record<string, string> = {
  design: 'Design',
  development: 'Development',
  education: 'Education',
  icons: 'Icons & Assets',
  ai: 'AI',
  utilities: 'Utilities',
  entertainment: 'Entertainment',
  media: 'Media',
  productivity: 'Productivity',
  security: 'Security',
  communication: 'Communication',
}

const categoryCounts = computed(() => {
  const counts: Record<string, number> = {}
  for (const r of resources.value) {
    counts[r.category] = (counts[r.category] || 0) + 1
  }
  return counts
})

const filteredResources = computed(() =>
  resources.value.filter((r) => {
    const q = searchQuery.value.toLowerCase()
    const matchesSearch =
      !q ||
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.tags.some((t) => t.toLowerCase().includes(q))
    const matchesCategory = !selectedCategory.value || r.category === selectedCategory.value
    return matchesSearch && matchesCategory
  }),
)

const groupedFiltered = computed(() => {
  const groups: Record<string, AwesomeResource[]> = {}
  for (const item of filteredResources.value) {
    if (!groups[item.category]) groups[item.category] = []
    groups[item.category]!.push(item)
  }
  for (const key of Object.keys(groups)) {
    groups[key]!.sort((a, b) => a.title.localeCompare(b.title))
  }
  return groups
})

const favoriteResources = computed(() => resources.value.filter((r) => isFavorite(r.url)))

function selectCategory(category: string) {
  selectedCategory.value = selectedCategory.value === category ? null : category
}

function clearFilters() {
  searchQuery.value = ''
  selectedCategory.value = null
}

const faviconUrl = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=64`

function faviconPlaceholder(domain: string) {
  const letter = domain.charAt(0).toUpperCase()
  const encoded = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"%3E%3Crect width="16" height="16" fill="%2323a9bd"/%3E%3Ctext x="8" y="12" text-anchor="middle" fill="%23fff" font-size="10" font-weight="900"%3E${letter}%3C/text%3E%3C/svg%3E`
  return encoded
}

function onFaviconError(e: Event, domain: string) {
  const img = e.currentTarget as HTMLImageElement
  img.src = faviconPlaceholder(domain)
}

const pricingBadge = (pricing: AwesomeResource['pricing']) => {
  if (pricing === 'free') return 'text-green-400 border-green-400/40'
  if (pricing === 'freemium') return 'text-cyan-400 border-cyan-400/40'
  return 'text-orange-400 border-orange-400/40'
}

const authBadge = (auth: AwesomeResource['auth']) => {
  if (auth === 'none') return 'text-gray-500 border-gray-500/40'
  if (auth === 'optional') return 'text-yellow-400 border-yellow-400/40'
  return 'text-red-400 border-red-400/40'
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 xl:px-0 py-8 relative z-10">
    <!-- ◄ HOME -->
    <div class="mb-8">
      <RouterLink
        to="/"
        class="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-accent hover:text-accent/80 transition-colors"
      >
        <IconArrowLeft :size="16" />
        HOME
      </RouterLink>
    </div>

    <!-- ════════════════════════════════════════ -->
    <!-- 1. HERO                                   -->
    <!-- ════════════════════════════════════════ -->
    <div class="border-4 border-border mb-12 bg-secondary">
      <div class="px-6 md:px-10 py-10 md:py-14">
        <p
          class="text-[0.6rem] md:text-xs font-black uppercase tracking-[0.3em] text-accent/60 mb-4"
        >
          COLLECTION // {{ resources.length }} TOOLS
        </p>
        <h1
          class="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tighter"
        >
          Awesome<br />
          <span class="text-accent">Resources</span>
        </h1>
        <p class="text-xs md:text-sm text-foreground/60 leading-relaxed mt-4 max-w-2xl">
          A curated collection of web development tools, design assets, and learning references.
        </p>
      </div>
    </div>

    <!-- ════════════════════════════════════════ -->
    <!-- 2. SEARCH                                 -->
    <!-- ════════════════════════════════════════ -->
    <div class="border-4 border-border mb-10 bg-secondary">
      <div class="flex items-center gap-3 px-4 md:px-6 py-3 md:py-4">
        <IconSearch :size="18" class="text-accent/60 shrink-0" />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search resources by name, description or tag..."
          class="w-full bg-transparent text-xs md:text-sm text-foreground placeholder-foreground/30 outline-none uppercase tracking-wider"
        />
        <button
          v-if="searchQuery || selectedCategory"
          @click="clearFilters"
          class="text-[0.55rem] font-black uppercase tracking-widest text-accent/60 hover:text-accent shrink-0"
        >
          CLEAR
        </button>
      </div>
    </div>

    <!-- ════════════════════════════════════════ -->
    <!-- 3. LOADING / ERROR                         -->
    <!-- ════════════════════════════════════════ -->
    <div v-if="loading" class="border-4 border-border mb-10 bg-secondary">
      <div class="px-6 py-10 text-center space-y-4">
        <p class="text-xs text-foreground/40 font-black uppercase tracking-wider animate-pulse">
          Loading resources...
        </p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div v-for="n in 4" :key="n" class="border-4 border-border bg-background p-4 space-y-2">
            <div class="h-3 w-20 bg-accent/10" />
            <div class="h-2 w-16 bg-accent/5" />
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="error" class="border-4 border-border mb-10 bg-secondary">
      <div class="px-6 py-10 text-center space-y-4">
        <p class="text-xs text-red-400 font-black uppercase tracking-wider">
          Failed to load resources: {{ error }}
        </p>
        <button
          @click="retry"
          class="inline-block text-xs font-black uppercase tracking-widest text-accent hover:text-accent/80 transition-colors cursor-pointer"
        >
          TRY AGAIN
        </button>
      </div>
    </div>

    <template v-else>
      <!-- ════════════════════════════════════════ -->
      <!-- 4. CATEGORIES GRID                         -->
      <!-- ════════════════════════════════════════ -->
      <section class="mb-10">
        <h2 class="font-display text-lg md:text-xl font-black uppercase tracking-tighter mb-4">
          Categories
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <button
            v-for="(count, category) in categoryCounts"
            :key="category"
            @click="selectCategory(category)"
            class="border-4 border-border p-4 text-left transition-all duration-200 cursor-pointer bg-secondary"
            :class="
              selectedCategory === category
                ? 'bg-accent text-accent-foreground border-accent'
                : 'hover:bg-accent/5 hover:border-accent'
            "
          >
            <p
              class="font-display text-xs font-black uppercase tracking-wide"
              :class="selectedCategory === category ? 'text-accent-foreground' : 'text-accent'"
            >
              {{ categoryLabels[category] ?? category }}
            </p>
            <p
              class="text-xs font-black mt-1"
              :class="
                selectedCategory === category ? 'text-accent-foreground/70' : 'text-foreground/50'
              "
            >
              {{ count }} {{ count === 1 ? 'resource' : 'resources' }}
            </p>
          </button>
        </div>
      </section>

      <!-- ════════════════════════════════════════ -->
      <!-- 5. LATEST ADDED                            -->
      <!-- ════════════════════════════════════════ -->
      <section class="mb-10">
        <h2 class="font-display text-lg md:text-xl font-black uppercase tracking-tighter mb-4">
          Latest Added
        </h2>
        <div class="border-4 border-border divide-y-2 divide-border bg-secondary">
          <div
            v-for="item in latestResources"
            :key="item.url"
            class="flex items-center gap-3 px-4 md:px-6 py-3 hover:bg-accent/5 transition-colors duration-200 group bg-secondary"
          >
            <a
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 min-w-0 flex-1"
            >
              <img
                :src="faviconUrl(item.domain)"
                :alt="item.title"
                class="w-6 h-6 shrink-0 border border-border"
                loading="lazy"
                @error="(e) => onFaviconError(e, item.domain)"
              />
              <div class="min-w-0 flex-1">
                <p
                  class="text-xs font-black uppercase tracking-wide group-hover:text-accent transition-colors"
                >
                  {{ item.title }}
                </p>
                <p class="text-[0.6rem] text-foreground/40 mt-0.5">
                  {{ categoryLabels[item.category] ?? item.category }}
                </p>
              </div>
            </a>
            <button
              @click="toggle(item.url)"
              class="shrink-0 cursor-pointer hover:scale-110 transition-transform"
              :class="
                isFavorite(item.url)
                  ? 'text-yellow-400'
                  : 'text-foreground/30 hover:text-yellow-400'
              "
            >
              <IconStarFilled v-if="isFavorite(item.url)" :size="14" />
              <IconStar v-else :size="14" />
            </button>
            <span
              class="text-[0.55rem] uppercase tracking-widest font-black px-1.5 py-0.5 border shrink-0"
              :class="pricingBadge(item.pricing)"
            >
              {{ item.pricing }}
            </span>
          </div>
        </div>
      </section>

      <!-- ════════════════════════════════════════ -->
      <!-- 6. FAVORITES                                -->
      <!-- ════════════════════════════════════════ -->
      <section v-if="favoriteResources.length" class="mb-10">
        <h2 class="font-display text-lg md:text-xl font-black uppercase tracking-tighter mb-4">
          Favorites
          <span class="text-foreground/30 text-xs font-bold ml-1">
            ({{ favoriteResources.length }})
          </span>
        </h2>
        <div class="border-4 border-border divide-y-2 divide-border bg-secondary">
          <div
            v-for="item in favoriteResources"
            :key="item.url"
            class="flex items-center gap-3 px-4 md:px-6 py-3 hover:bg-accent/5 transition-colors duration-200 group bg-secondary"
          >
            <a
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 min-w-0 flex-1"
            >
              <img
                :src="faviconUrl(item.domain)"
                :alt="item.title"
                class="w-6 h-6 shrink-0 border border-border"
                loading="lazy"
                @error="(e) => onFaviconError(e, item.domain)"
              />
              <div class="min-w-0 flex-1">
                <p
                  class="text-xs font-black uppercase tracking-wide group-hover:text-accent transition-colors"
                >
                  {{ item.title }}
                </p>
                <p class="text-[0.6rem] text-foreground/40 mt-0.5">
                  {{ categoryLabels[item.category] ?? item.category }}
                </p>
              </div>
            </a>
            <button
              @click="toggle(item.url)"
              class="shrink-0 cursor-pointer hover:scale-110 transition-transform"
              :class="
                isFavorite(item.url)
                  ? 'text-yellow-400'
                  : 'text-foreground/30 hover:text-yellow-400'
              "
            >
              <IconStarFilled v-if="isFavorite(item.url)" :size="14" />
              <IconStar v-else :size="14" />
            </button>
            <span
              class="text-[0.55rem] uppercase tracking-widest font-black px-1.5 py-0.5 border shrink-0"
              :class="pricingBadge(item.pricing)"
            >
              {{ item.pricing }}
            </span>
          </div>
        </div>
      </section>

      <!-- ════════════════════════════════════════ -->
      <!-- 7. ALL RESOURCES                           -->
      <!-- ════════════════════════════════════════ -->
      <section>
        <div class="flex items-center justify-between mb-4">
          <h2 class="font-display text-lg md:text-xl font-black uppercase tracking-tighter">
            All Resources
          </h2>
          <p class="text-xs text-foreground/40 font-black uppercase tracking-wider">
            {{ filteredResources.length }} / {{ resources.length }}
          </p>
        </div>

        <div v-if="filteredResources.length === 0" class="border-4 border-border p-10 text-center">
          <p class="text-xs text-foreground/40 font-black uppercase tracking-wider">
            No resources match your search
          </p>
        </div>

        <div v-else class="space-y-6">
          <div
            v-for="(items, category) in groupedFiltered"
            :key="category"
            class="border-4 border-border bg-secondary"
          >
            <div class="bg-accent/5 border-b-2 border-border px-6 py-3">
              <h3 class="font-display text-lg md:text-xl font-black uppercase tracking-tighter">
                {{ categoryLabels[category] ?? category }}
                <span class="text-foreground/30 text-xs font-bold ml-1">
                  ({{ items.length }})
                </span>
              </h3>
            </div>

            <div class="p-4 md:p-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  v-for="item in items"
                  :key="item.url"
                  class="border-2 border-border p-4 hover:bg-accent/5 hover:border-accent transition-all duration-200 group bg-secondary"
                >
                  <div class="flex items-start gap-3">
                    <a
                      :href="item.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-start gap-3 min-w-0 flex-1"
                    >
                      <img
                        :src="faviconUrl(item.domain)"
                        :alt="item.title"
                        class="w-8 h-8 shrink-0 border border-border"
                        loading="lazy"
                        @error="(e) => onFaviconError(e, item.domain)"
                      />
                      <div class="min-w-0 flex-1 space-y-1.5">
                        <h4
                          class="font-display text-xs font-black uppercase tracking-wide group-hover:text-accent transition-colors"
                        >
                          {{ item.title }}
                        </h4>
                        <p class="text-xs text-foreground/60 leading-relaxed">
                          {{ item.description }}
                        </p>
                        <div class="flex flex-wrap gap-1">
                          <span
                            v-for="tag in item.tags"
                            :key="tag"
                            class="text-[0.55rem] uppercase tracking-wider font-bold px-1.5 py-0.5 border border-border/40 text-foreground/50"
                          >
                            {{ tag }}
                          </span>
                        </div>
                        <div class="flex gap-3">
                          <span
                            class="text-[0.55rem] uppercase tracking-widest font-black px-1.5 py-0.5 border"
                            :class="pricingBadge(item.pricing)"
                          >
                            {{ item.pricing }}
                          </span>
                          <span
                            class="text-[0.55rem] uppercase tracking-widest font-black px-1.5 py-0.5 border"
                            :class="authBadge(item.auth)"
                          >
                            {{ item.auth === 'none' ? 'no auth' : item.auth }}
                          </span>
                        </div>
                      </div>
                    </a>
                    <button
                      @click="toggle(item.url)"
                      class="shrink-0 cursor-pointer hover:scale-110 transition-transform"
                      :class="
                        isFavorite(item.url)
                          ? 'text-yellow-400'
                          : 'text-foreground/30 hover:text-yellow-400'
                      "
                    >
                      <IconStarFilled v-if="isFavorite(item.url)" :size="16" />
                      <IconStar v-else :size="16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>
