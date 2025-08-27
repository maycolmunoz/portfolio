<script setup>
import Badge from '@/components/ui/badge/Badge.vue'
import Button from '@/components/ui/button/Button.vue'
import { techStack } from '@/utils/data.js'
</script>

<template>
  <main class="grid grid-cols-1 gap-6 md:gap-12 md:my-20 md:grid-cols-2 items-center">
    <article class="space-y-6 px-6 md:px-10">
      <Badge class="bg-emerald-500 py-2 px-4 text-base md:text-xl font-extrabold" as="h1"> $Backend Developer </Badge>

      <p class="mt-2 text-slate-300 text-base md:text-xl leading-relaxed">
        My name is <span class="font-semibold text-white">Maycol Muñoz</span>, a Systems Engineering student focused on backend development. I have
        experience with technologies like:
      </p>

      <div class="flex flex-wrap gap-2 mt-3">
        <Badge v-for="tech in techStack" :key="tech.name" :class="`px-3 py-1 text-sm font-semibold rounded-full ${tech.color}`">
          {{ tech.name }}
        </Badge>
      </div>

      <Button
        class="w-full md:w-auto mt-4"
        variant="outline"
        as="a"
        target="_blank"
        href="https://docs.google.com/document/d/1jyEKvQjJeqxRvF9SVVmq6lgxzunbmIyyJ2XKnduaXlg/edit?usp=sharing"
      >
        View CV
      </Button>
    </article>

    <article class="flex justify-center items-center px-4"></article>
  </main>
</template>
