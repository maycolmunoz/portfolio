<script setup lang="ts">
import { Card, CardHeader, CardFooter } from '@/components/ui/card'
import ContactBar from './ContactBar.vue'
</script>

<template>
  <Card
    class="relative mt-16 bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_-12px_rgba(99,102,241,0.1)] transition-all duration-500 hover:shadow-indigo-500/10 group w-full"
  >
    <!-- Astronaut floating with enhanced glow -->
    <div class="absolute -top-16 right-0 -translate-x-1/2 z-20 pointer-events-none">
      <div class="relative">
        <div
          class="absolute inset-0 blur-3xl bg-indigo-500/30 scale-150 rounded-full opacity-100 transition-opacity duration-700"
        />
        <img
          class="astronaut-float relative size-32 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          src="https://github.com/maycolmunoz.png?size=200"
          alt="Maycol Muñoz"
        />
      </div>
    </div>

    <CardHeader class="pt-20 pb-4 px-6 sm:px-8">
      <div class="space-y-6">
        <div class="space-y-2">
          <h2 class="text-3xl font-black text-white tracking-tighter">
            Maycol <span class="text-indigo-400">Muñoz</span>
          </h2>
          <div class="h-1 w-12 bg-indigo-500 rounded-full" />
        </div>

        <p class="text-md leading-relaxed text-slate-300 font-medium">
          I'm a Systems Engineering student focused on
          <span class="text-white border-b border-indigo-500/50">full-stack development</span>. I
          specialize in building scalable backend systems and modern, high-performance user
          interfaces. My goal is to transform complex ideas into elegant, reliable digital
          solutions.
        </p>
      </div>
    </CardHeader>

    <CardFooter class="pt-2 pb-8 px-6 sm:px-8">
      <ContactBar />
    </CardFooter>
  </Card>
</template>
