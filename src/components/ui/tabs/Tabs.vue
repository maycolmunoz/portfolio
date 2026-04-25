<script setup lang="ts">
import { ref, watch, provide, computed } from 'vue'
import { cn } from '@/lib/utils'

type TabItem = {
  id: string
  label: string
  icon?: any
}

const props = withDefaults(
  defineProps<{
    tabs?: TabItem[]
    defaultTab?: string
    class?: string
  }>(),
  {
    tabs: () => [],
    defaultTab: 'stack',
  },
)

const activeTab = ref(props.defaultTab)

function setTab(tab: string) {
  activeTab.value = tab
}

provide('activeTab', activeTab)
provide('setTab', setTab)
</script>

<template>
  <div :class="cn('flex flex-col h-full', props.class)">
    <!-- Tab Navigation - Pill Style -->
    <div class="flex items-center gap-2 mb-6">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        type="button"
        :class="
          cn(
            'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-xs font-bold transition-all duration-300',
            activeTab === tab.id
              ? 'bg-slate-800 text-indigo-400 border border-slate-700 shadow-lg'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50',
          )
        "
        @click="setTab(tab.id)"
      >
        <component :is="tab.icon" v-if="tab.icon" class="size-3.5" />
        <span>{{ tab.label }}</span>
      </button>
    </div>

    <!-- Tab Content -->
    <div
      class="flex-1 min-h-0 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-indigo-500/20 scrollbar-track-transparent hover:scrollbar-thumb-indigo-500/40"
    >
      <div v-show="activeTab === tab.id" v-for="tab in tabs" :key="tab.id">
        <slot :name="`content-${tab.id}`" />
      </div>
    </div>
  </div>
</template>
