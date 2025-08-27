<script setup>
import IconEmail from '@/components/icons/IconEmail.vue'
import IconGitHub from '@/components/icons/IconGitHub.vue'
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue'
import { contacts } from '@/utils/data.js'
</script>

<template>
  <nav className="flex flex-col flex-wrap items-center px-10 py-4 mx-auto  md:flex-row">
    <img src="/logo.svg" alt="profile" className="animate-pulse w-10 h-10 p-2" />
    <div
      className="flex flex-wrap items-center justify-around w-full space-x-0 md:w-auto md:ml-auto md:space-x-5 lg:justify-center mt-2"
    >
      <a
        class="duration-200 hover:scale-125"
        :href="contacts.linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconLinkedIn />
      </a>
      <a
        class="duration-200 hover:scale-125"
        :href="contacts.github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconGitHub />
      </a>
      <a class="duration-200 hover:scale-125" :href="contacts.email">
        <IconEmail />
      </a>
    </div>
  </nav>
</template>
