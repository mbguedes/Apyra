<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="relative border-t border-gray-800/50 py-12">
    <div class="max-w-5xl mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Logo & Brand -->
        <div class="flex items-center gap-3">
          <img src="/logo.png" alt="Apyra Digital" class="h-8 opacity-70 hover:opacity-100 transition-opacity" />
          <span class="text-sm text-gray-500">
            © {{ currentYear }} Apyra Digital. Todos os direitos reservados.
          </span>
        </div>

        <!-- CTA -->
        <a
          href="#contato"
          class="text-sm text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-1.5"
        >
          Fale conosco
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>
