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
  <div class="border-4 border-border p-6 md:p-8 space-y-6 glitch-hover">
    <div class="flex items-start gap-5">
      <div class="relative">
        <img
          class="w-20 h-20 md:w-24 md:h-24 object-cover border-2 border-border"
          :src="avatarSrc"
          :alt="personalInfo.name + ' ' + personalInfo.lastName"
          @error="handleAvatarError"
        />
        <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-accent border-2 border-background" />
      </div>
      <div class="space-y-2 flex-1">
        <h2 class="font-display text-2xl md:text-3xl font-black uppercase leading-tight">
          {{ personalInfo.name }}<br />
          <span class="text-accent">{{ personalInfo.lastName }}</span>
        </h2>
        <div class="h-1 w-10 bg-accent" />
      </div>
    </div>

    <p class="text-xs md:text-sm leading-relaxed text-foreground/90">
      {{ personalInfo.bio }}
    </p>

    <div class="pt-6 border-t-4 border-border">
      <ContactBar />
    </div>
  </div>
</template>
