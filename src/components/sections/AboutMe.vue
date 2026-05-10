<script setup lang="ts">
import { ref } from 'vue'
import ContactBar from './ContactBar.vue'
import { personalInfo } from '@/utils/data'
import defaultAvatar from '@/assets/avatarmaker.webp'

const avatarSrc = ref(personalInfo.avatar)
const handleAvatarError = () => {
  avatarSrc.value = defaultAvatar
}
</script>

<template>
  <div
    class="border-4 border-border space-y-0 bg-background relative overflow-hidden flex flex-col"
  >
    <!-- Horizontal Top Spine Text -->
    <div
      class="w-full h-8 md:h-10 bg-accent/10 border-b-2 border-border flex items-center px-4 md:px-6 overflow-hidden shrink-0"
    >
      <p
        class="font-display text-[0.6rem] md:text-xs font-black uppercase tracking-[0.3em] whitespace-nowrap text-accent"
      >
        {{ personalInfo.role }} <span class="mx-2 opacity-30">//</span> {{ personalInfo.mainStack }}
      </p>
    </div>

    <div class="p-6 md:p-8 space-y-8 flex-1">
      <!-- Header: Photo & Name -->
      <div class="flex items-center gap-5">
        <div class="relative shrink-0">
          <img
            class="w-20 h-20 md:w-24 md:h-24 object-cover border-2 border-border grayscale hover:grayscale-0 transition-all duration-500"
            :src="avatarSrc"
            :alt="personalInfo.name + ' ' + personalInfo.lastName"
            @error="handleAvatarError"
          />
          <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-accent border-2 border-background" />
        </div>
        <div class="space-y-1 flex-1">
          <h2
            class="font-display text-2xl md:text-3xl font-black uppercase leading-none tracking-tighter"
          >
            {{ personalInfo.name }}<br />
            <span class="text-accent">{{ personalInfo.lastName }}</span>
          </h2>
        </div>
      </div>

      <!-- Biography: Main Context -->
      <div class="space-y-4">
        <p
          class="text-xs md:text-sm leading-relaxed text-foreground/80 italic border-l-2 border-accent/30 pl-4"
        >
          "{{ personalInfo.bio }}"
        </p>
      </div>

      <!-- Footer: Actions -->
      <div class="pt-6 border-t-2 border-border/50">
        <ContactBar />
      </div>
    </div>
  </div>
</template>
