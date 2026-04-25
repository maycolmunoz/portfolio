<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { IconX } from '@tabler/icons-vue'

defineProps<{
  isOpen: boolean
  title: string
}>()

const emit = defineEmits(['close'])

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => window.addEventListener('keydown', handleEscape))
onUnmounted(() => window.removeEventListener('keydown', handleEscape))
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md"
      >
        <Transition
          enter-active-class="transition duration-500 ease-out delay-100"
          enter-from-class="opacity-0 scale-95 translate-y-8"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition duration-300 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-8"
        >
          <div
            class="relative w-full max-w-5xl max-h-[90vh] bg-slate-900/90 border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            <!-- Modal Header -->
            <div class="flex items-center justify-between p-6 border-b border-white/5 bg-white/5">
              <h2 class="text-2xl font-black text-white tracking-tight">{{ title }}</h2>
              <button
                @click="emit('close')"
                class="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <IconX class="size-6" />
              </button>
            </div>

            <!-- Modal Content -->
            <div class="flex-1 overflow-y-auto p-6 sm:p-8 custom-scrollbar">
              <slot />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(99, 102, 241, 0.2);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(99, 102, 241, 0.4);
}
</style>
