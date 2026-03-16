<script setup lang="ts">
interface Props {
  title: string
  description: string
  icon: string
  delay?: string
}

withDefaults(defineProps<Props>(), {
  delay: 'delay-100',
})
</script>

<template>
  <div
    :class="['group relative p-6 md:p-8 rounded-2xl glass glow-border transition-all duration-500 hover:-translate-y-2 animate-fade-in-up opacity-0', delay]"
  >
    <!-- Icon -->
    <div class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
      <span class="text-3xl" v-html="icon"></span>
    </div>

    <!-- Content -->
    <h3 class="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
      {{ title }}
    </h3>
    <p class="text-gray-400 leading-relaxed text-sm md:text-base">
      {{ description }}
    </p>

    <!-- Corner accent -->
    <div class="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
      <div class="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  </div>
</template>
