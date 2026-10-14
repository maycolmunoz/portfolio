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
      class="w-full bg-lavender border-b border-carbon flex items-center gap-3 px-5 py-2.5 overflow-hidden shrink-0"
    >
      <span
        class="sticker bg-sunburst size-7 grid place-items-center shrink-0 rotate-[-8deg]"
        aria-hidden="true"
      >
        <span class="text-sm leading-none font-bold">//</span>
      </span>
      <p class="label truncate">
        {{ personalInfo.role }}<span class="mx-2 opacity-40">//</span>{{ personalInfo.mainStack }}
      </p>
    </div>

    <div class="p-5 md:p-6 space-y-6 flex-1">
      <div class="flex items-center gap-5">
        <img
          v-if="!avatarError"
          class="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full border-2 border-carbon"
          :src="personalInfo.avatar"
          :alt="personalInfo.name + ' ' + personalInfo.lastName"
          loading="lazy"
          @error="handleAvatarError"
        />
        <div
          v-else
          class="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-carbon bg-sky-wash flex items-center justify-center"
        >
          <IconUserCircle class="size-10 md:size-12" />
        </div>
        <div class="flex-1">
          <h2 class="font-display text-4xl leading-[0.85] uppercase">
            {{ personalInfo.name }}<br />
            <span class="text-electric-blue">{{ personalInfo.lastName }}</span>
          </h2>
        </div>
      </div>

      <p class="text-base leading-relaxed text-carbon/70">{{ personalInfo.bio }}</p>

      <div class="border-t border-carbon pt-5">
        <ContactBar />
      </div>
    </div>
  </div>
</template>
