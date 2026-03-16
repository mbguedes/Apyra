<script setup lang="ts">
interface ComparisonRow {
  recurso: string
  gestorComum: string
  apyra: string
}

const rows: ComparisonRow[] = [
  {
    recurso: 'Foco',
    gestorComum: 'Cliques e métricas de vaidade',
    apyra: 'ROI e Lucratividade',
  },
  {
    recurso: 'Metodologia',
    gestorComum: 'Execução reativa e improvisada',
    apyra: 'Estratégia proativa de grande agência',
  },
  {
    recurso: 'Análise',
    gestorComum: 'Relatórios automáticos sem insights',
    apyra: 'Auditoria técnica e visão de negócio',
  },
]
</script>

<template>
  <section id="apyra-edge" class="py-24 md:py-32 relative">
    <!-- Background accent -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/3 rounded-full blur-[150px]"></div>

    <div class="max-w-5xl mx-auto px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1.5 rounded-full glass text-primary text-xs font-semibold tracking-widest uppercase mb-4">
          Comparativo
        </span>
        <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-4">
          The <span class="text-gradient">Apyra</span> Edge
        </h2>
        <p class="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          Veja a diferença entre uma gestão comum e a metodologia que já escalou marcas globais.
        </p>
      </div>

      <!-- Table -->
      <div class="rounded-2xl glass glow-border overflow-hidden">
        <!-- Header -->
        <div class="grid grid-cols-3 gap-0 border-b border-gray-700/50">
          <div class="p-4 md:p-6 text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Recurso
          </div>
          <div class="p-4 md:p-6 text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider text-center border-x border-gray-700/30">
            Gestor Comum
          </div>
          <div class="p-4 md:p-6 text-xs md:text-sm font-semibold text-primary uppercase tracking-wider text-center">
            Apyra Digital ✦
          </div>
        </div>

        <!-- Rows -->
        <div
          v-for="(row, index) in rows"
          :key="row.recurso"
          class="grid grid-cols-3 gap-0 border-b border-gray-700/20 last:border-b-0 transition-colors duration-300 hover:bg-white/[0.02]"
        >
          <!-- Recurso -->
          <div class="p-4 md:p-6 flex items-center">
            <span class="text-sm md:text-base font-semibold text-white">{{ row.recurso }}</span>
          </div>
          
          <!-- Gestor Comum -->
          <div class="p-4 md:p-6 flex items-center justify-center border-x border-gray-700/30">
            <div class="flex items-center gap-2 text-center">
              <span class="text-red-400/80 text-lg flex-shrink-0">✕</span>
              <span class="text-sm md:text-base text-gray-400">{{ row.gestorComum }}</span>
            </div>
          </div>

          <!-- Apyra -->
          <div class="p-4 md:p-6 flex items-center justify-center">
            <div class="flex items-center gap-2 text-center">
              <span class="text-primary text-lg flex-shrink-0">✓</span>
              <span class="text-sm md:text-base text-white font-medium">{{ row.apyra }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
