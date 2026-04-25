<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div data-slot="card-header" :class="cn('flex flex-col gap-1.5', $attrs.class)" v-bind="$attrs">
    <slot />
  </div>
</template>
