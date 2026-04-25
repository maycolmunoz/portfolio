<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

defineProps<{
  value?: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <button
    type="button"
    :class="
      cn(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm',
        $attrs.class,
      )
    "
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>
