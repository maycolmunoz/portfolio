<script setup lang="ts">
import { ref } from 'vue'
import ContactBar from './ContactBar.vue'
import { personalInfo } from '@/content/portfolio'
import { IconUserCircle } from '@tabler/icons-vue'

const avatarError = ref(false)
const handleAvatarError = () => {
  avatarError.value = true
}
</script>

<template>
  <div class="card rounded-card-lg overflow-hidden flex flex-col">
    <div
      class="w-full bg-surface-muted border-b-2 border-carbon flex items-center gap-3 px-5 py-2.5 overflow-hidden shrink-0"
    >
      <span
        class="sticker bg-carbon text-paper-white size-7 grid place-items-center shrink-0 font-mono"
        aria-hidden="true"
      >
        <span class="text-sm leading-none font-bold">//</span>
      </span>
      <p class="label truncate">
        {{ personalInfo.role }}<span class="mx-2 opacity-40">//</span>{{ personalInfo.mainStack }}
      </p>
    </div>

    <div class="p-5 md:p-6 space-y-6 flex-1">
      <div class="flex items-center gap-4 sm:gap-5">
        <img
          v-if="!avatarError"
          class="size-20 md:size-24 object-cover rounded-full border-2 border-carbon grayscale shrink-0"
          :src="personalInfo.avatar"
          :alt="personalInfo.name + ' ' + personalInfo.lastName"
          loading="lazy"
          @error="handleAvatarError"
        />
        <div
          v-else
          class="size-20 md:size-24 rounded-full border-2 border-carbon bg-surface-muted flex items-center justify-center text-carbon shrink-0"
        >
          <IconUserCircle class="size-10 md:size-12" />
        </div>
        <div class="min-w-0 flex-1">
          <h2 class="font-display text-4xl sm:text-5xl uppercase text-carbon leading-[1.05] tracking-normal">
            <span class="block">{{ personalInfo.name }}</span>
            <span class="block mt-1">{{ personalInfo.lastName }}</span>
          </h2>
        </div>
      </div>

      <p class="text-base leading-relaxed text-carbon/75">{{ personalInfo.bio }}</p>

      <div class="border-t-2 border-carbon pt-5">
        <ContactBar />
      </div>
    </div>
  </div>
</template>
