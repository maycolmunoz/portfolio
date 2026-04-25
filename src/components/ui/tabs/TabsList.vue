<script setup lang="ts">
defineProps<{ class?: string }>()
</script>

<template>
  <div :class="$attrs.class">
    <slot />
  </div>
</template>
