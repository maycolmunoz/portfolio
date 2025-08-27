<script setup>
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Button from '@/components/ui/button/Button.vue'
import Badge from '../ui/badge/Badge.vue'
import { experience } from '@/utils/data.js'

const techColors = {
  Laravel: 'bg-red-100 text-red-700',
  Vue: 'bg-green-100 text-green-700',
  'Inertia.js': 'bg-purple-100 text-purple-700',
  TailwindCSS: 'bg-cyan-100 text-cyan-700',
  API: 'bg-blue-100 text-blue-700',
  MySQL: 'bg-yellow-100 text-yellow-800',
  Bootstrap: 'bg-pink-100 text-pink-700',
  Livewire: 'bg-indigo-100 text-indigo-700',
  'Alpine.js': 'bg-orange-100 text-orange-700',
}
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button class="md:w-auto mt-4 hover:cursor-pointer" variant="outline"> + Experience </Button>
    </SheetTrigger>

    <SheetContent class="h-screen">
      <SheetHeader>
        <SheetTitle>My Experience</SheetTitle>
        <SheetDescription>
          I have solid experience building monolithic applications, designing and developing APIs, and integrating API consumption on the
          frontend. I have also developed SaaS applications with strong database-driven architectures to ensure scalability and performance.
        </SheetDescription>
      </SheetHeader>
      <div class="flex-1 overflow-y-auto mt-4 px-3">
        <h2 class="font-bold text-lg mb-2">Projects</h2>
        <Accordion type="single" collapsible>
          <AccordionItem v-for="(item, index) in experience" :key="index" :value="`item-${index}`">
            <AccordionTrigger>
              {{ item.title }}
            </AccordionTrigger>

            <AccordionContent>
              <img :src="item.img" :alt="item.title" class="w-full h-auto rounded-lg mb-1" />
              <Badge v-for="(tech, tIndex) in item.stack" :key="tIndex" :class="`m-1 text-xs font-semibold ${techColors[tech]} `">
                {{ tech }}
              </Badge>
              <p class="text-sm mb-2">
                {{ item.description }}
              </p>
              <div class="flex gap-2">
                <Button v-if="item.repository" as="a" :href="item.repository" target="_blank" variant="outline" class="text-xs">
                  Repository
                </Button>
                <Button v-if="item.link" as="a" :href="item.link" target="_blank" variant="outline" class="text-xs"> Demo </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </SheetContent>
  </Sheet>
</template>
