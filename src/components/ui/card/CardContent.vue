<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div data-slot="card-content" :class="cn('', $attrs.class)" v-bind="$attrs">
    <slot />
  </div>
</template>
