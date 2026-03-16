<script setup lang="ts">
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Animated Background Mesh -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-float"></div>
      <div class="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[100px] animate-float delay-300"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px] animate-pulse-glow"></div>
      <!-- Grid Pattern -->
      <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(217,255,46,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(217,255,46,0.3) 1px, transparent 1px); background-size: 60px 60px;"></div>
    </div>

    <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <!-- Logo -->
      <div class="mb-10 animate-fade-in">
        <img
          src="/logo.png"
          alt="Apyra Digital"
          class="h-16 md:h-20 mx-auto filter drop-shadow-[0_0_20px_rgba(217,255,46,0.3)]"
        />
      </div>

      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up opacity-0 delay-100">
        <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        <span class="text-xs md:text-sm text-gray-300 tracking-wider uppercase font-medium">
          +10 anos de expertise em grandes agências
        </span>
      </div>

      <!-- Headline -->
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up opacity-0 delay-200">
        Expertise de Grande Agência
        <br />
        <span class="text-gradient">para Escalar seu Lucro.</span>
      </h1>

      <!-- Subheadline -->
      <p class="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0 delay-300">
        Gestão estratégica, auditoria técnica e performance baseada em dados para empresas
        que buscam o <span class="text-white font-medium">próximo nível de maturação digital.</span>
      </p>

      <!-- CTA -->
      <div class="animate-fade-in-up opacity-0 delay-400">
        <a
          href="#contato"
          class="group relative inline-flex items-center gap-3 bg-primary text-bg font-bold text-base md:text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(217,255,46,0.35)]"
        >
          <span>Agendar Diagnóstico Estratégico</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>

      <!-- Trust Signals -->
      <div class="mt-16 animate-fade-in-up opacity-0 delay-500">
        <p class="text-xs text-gray-500 uppercase tracking-widest mb-4">Bagagem de gestão em marcas como</p>
        <div class="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-gray-500">
          <span class="text-sm md:text-base font-semibold tracking-wide hover:text-primary transition-colors duration-300">Amazon</span>
          <span class="text-gray-700">|</span>
          <span class="text-sm md:text-base font-semibold tracking-wide hover:text-primary transition-colors duration-300">Reckitt</span>
          <span class="text-gray-700">|</span>
          <span class="text-sm md:text-base font-semibold tracking-wide hover:text-primary transition-colors duration-300">Renault</span>
          <span class="text-gray-700">|</span>
          <span class="text-sm md:text-base font-semibold tracking-wide hover:text-primary transition-colors duration-300">Sanofi</span>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 delay-600">
      <div class="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-1.5">
        <div class="w-1.5 h-3 bg-primary rounded-full animate-bounce"></div>
      </div>
    </div>
  </section>
</template>
