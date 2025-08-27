<script setup>
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Button from '@/components/ui/button/Button.vue'
import { education } from '@/utils/data.js'
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button class="md:w-auto mt-4 hover:cursor-pointer" variant="outline"> Education </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>My Education</SheetTitle>
        <SheetDescription> A summary of my academic background. </SheetDescription>
      </SheetHeader>
      <div class="mt-4 px-3">
        <Accordion type="single" collapsible>
          <AccordionItem v-for="(item, index) in education" :key="index" :value="`item-${index}`">
            <AccordionTrigger>
              {{ item.title }}
            </AccordionTrigger>
            <AccordionContent>
              {{ item.description }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </SheetContent>
  </Sheet>
</template>
