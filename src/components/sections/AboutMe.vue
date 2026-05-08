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
  <div class="border-4 border-border p-6 md:p-8 space-y-6">
    <img
      class="w-24 h-24 md:w-28 md:h-28 object-cover border-4 border-border"
      :src="avatarSrc"
      :alt="personalInfo.name + ' ' + personalInfo.lastName"
      @error="handleAvatarError"
    />

    <div class="space-y-4">
      <div>
        <h2 class="text-2xl md:text-3xl font-black uppercase break-words">
          {{ personalInfo.name }} <span class="text-primary">{{ personalInfo.lastName }}</span>
        </h2>
        <p class="text-xs md:text-sm font-bold uppercase tracking-wider text-foreground/80 mt-1">
          {{ personalInfo.title }}
        </p>
        <div class="h-1.5 w-12 bg-primary mt-3" />
      </div>

      <p class="text-xs md:text-md leading-relaxed text-foreground break-words">
        {{ personalInfo.bio }}
      </p>
    </div>

    <div class="pt-6 border-t-4 border-border">
      <ContactBar />
    </div>
  </div>
</template>
