<script setup lang="ts">
import { ref } from 'vue'
import ContactBar from './ContactBar.vue'
import { personalInfo } from '@/content/portfolio'
import defaultAvatar from '@/assets/avatarmaker.webp'

const avatarSrc = ref(personalInfo.avatar)
const handleAvatarError = () => {
  avatarSrc.value = defaultAvatar
}
</script>

<template>
  <div
    class="bg-card rounded-[24px] shadow-sm border-2 border-dashed border-border overflow-hidden flex flex-col"
  >
    <div
      class="w-full h-10 md:h-11 bg-primary/10 border-b border-dashed border-border flex items-center px-4 md:px-5 overflow-hidden shrink-0"
    >
      <p class="font-body text-sm md:text-base text-primary truncate">
        {{ personalInfo.role }}<span class="mx-2 opacity-30">//</span>{{ personalInfo.mainStack }}
      </p>
    </div>

    <div class="p-5 md:p-6 space-y-6 flex-1">
      <div class="flex items-center gap-5">
        <div class="relative shrink-0">
          <img
            class="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full border-4 border-primary/30"
            :src="avatarSrc"
            :alt="personalInfo.name + ' ' + personalInfo.lastName"
            @error="handleAvatarError"
          />
        </div>
        <div class="space-y-1 flex-1">
          <h2 class="font-display text-3xl md:text-4xl">
            {{ personalInfo.name }}<br />
            <span class="text-primary">{{ personalInfo.lastName }}</span>
          </h2>
        </div>
      </div>

      <div class="space-y-4">
        <p class="text-base md:text-lg leading-relaxed text-text-secondary">
          {{ personalInfo.bio }}
        </p>
      </div>

      <div class="pt-5 border-t border-dashed border-border">
        <ContactBar />
      </div>
    </div>
  </div>
</template>
