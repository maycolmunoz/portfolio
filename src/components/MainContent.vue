<script setup>
import Badge from '@/components/ui/badge/Badge.vue'
import Button from '@/components/ui/button/Button.vue'
import { techStack } from '@/utils/data.js'
import ButtonEducation from '@/components/buttons/ButtonEducation.vue'
import ButtonExperience from './buttons/ButtonExperience.vue'
</script>

<template>
  <main class="grid grid-cols-1 gap-6 md:gap-10C md:my-10 md:grid-cols-2 items-center">
    <article class="space-y-6 px-6 md:px-10">
      <div class="rounded-lg bg-gradient-to-r from-indigo-950 to-sky-950 animate-pulse text-center">
        <Badge
          class="bg-secondary py-2 px-4 text-base md:text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-sky-500"
          as="h1"
        >
          Backend Developer
        </Badge>
      </div>

      <p class="mt-2 text-slate-300 text-base md:text-xl leading-relaxed">
        My name is <span class="font-semibold text-white">Maycol Muñoz</span>, a Systems Engineering student focused on backend development.
        I have experience with technologies like:
      </p>

      <div class="flex flex-wrap gap-2 mt-3">
        <Badge
          v-for="tech in techStack"
          :key="tech.name"
          :class="`px-3 text-sm font-semibold ${tech.color} hover:scale-110 cursor-default`"
        >
          > {{ tech.name }}
        </Badge>
      </div>

      <div class="space-x-2">
        <Button
          class="md:w-auto mt-4"
          variant="outline"
          as="a"
          target="_blank"
          href="https://docs.google.com/document/d/1jyEKvQjJeqxRvF9SVVmq6lgxzunbmIyyJ2XKnduaXlg/edit?usp=sharing"
        >
          + View CV
        </Button>

        <ButtonExperience />

        <ButtonEducation />
      </div>
    </article>

    <article class="flex justify-center items-center px-4">
      <img alt="Avatar" width="400px" class="hover:animate-pulse" src="https://api.dicebear.com/9.x/bottts/svg?seed=m" />
    </article>
  </main>
</template>
