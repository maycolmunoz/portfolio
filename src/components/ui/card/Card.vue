<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-slot="card"
    :class="
      cn(
        'bg-card/80 text-card-foreground flex flex-col rounded-xl border border-border/30 p-4 shadow-lg backdrop-blur-sm',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
